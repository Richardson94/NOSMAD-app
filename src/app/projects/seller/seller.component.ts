import { DatePipe } from '@angular/common';
import {
  afterNextRender,
  Component,
  computed,
  ElementRef,
  inject,
  Injector,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { SellerEntry, SellerEntryKind } from './models/seller.models';
import {
  boliviaWhatsAppUrl,
  formatBoliviaPhoneDisplay,
  SellerStorageService,
} from './services/seller-storage.service';

interface CalendarDay {
  key: string;
  dayNum: number;
  weekdayShort: string;
  isToday: boolean;
  hasEntries: boolean;
}

@Component({
  selector: 'app-seller',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.scss',
})
export class SellerComponent {
  private readonly storage = inject(SellerStorageService);
  private readonly injector = inject(Injector);
  private readonly stripRef = viewChild<ElementRef<HTMLElement>>('dayStrip');

  readonly selectedDate = signal(this.storage.todayKey());
  readonly formOpen = signal(false);
  readonly editingId = signal<string | null>(null);

  formName = '';
  formPhone = '';
  formAmount: number | null = null;
  formKind: SellerEntryKind = 'debe';

  constructor() {
    afterNextRender(
      () => {
        this.scrollSelectedIntoView(false);
      },
      { injector: this.injector }
    );
  }

  readonly entries = computed(() => {
    // Depend on storage signal so list refreshes after save/delete
    void this.storage.entries();
    return this.storage.entriesForDate(this.selectedDate());
  });

  readonly calendarDays = computed(() => {
    void this.storage.entries();
    return this.buildMonthDays(this.selectedDate());
  });

  readonly selectedLabel = computed(() => {
    const key = this.selectedDate();
    const [y, m, d] = key.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    return new Intl.DateTimeFormat('es-BO', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  });

  readonly monthTitle = computed(() => {
    const key = this.selectedDate();
    const [y, m] = key.split('-').map(Number);
    const date = new Date(y, m - 1, 1);
    return new Intl.DateTimeFormat('es-BO', {
      month: 'long',
      year: 'numeric',
    }).format(date);
  });

  selectDate(key: string): void {
    this.selectedDate.set(key);
    this.closeForm();
  }

  shiftMonth(delta: number): void {
    const [y, m, d] = this.selectedDate().split('-').map(Number);
    const next = new Date(y, m - 1 + delta, 1);
    const daysInMonth = new Date(next.getFullYear(), next.getMonth() + 1, 0).getDate();
    const day = Math.min(d, daysInMonth);
    const key = this.toKey(next.getFullYear(), next.getMonth() + 1, day);
    this.selectedDate.set(key);
    this.closeForm();
    queueMicrotask(() => this.scrollSelectedIntoView(true));
  }

  goToday(): void {
    this.selectedDate.set(this.storage.todayKey());
    this.closeForm();
    queueMicrotask(() => this.scrollSelectedIntoView(true));
  }

  openNewEntry(): void {
    this.editingId.set(null);
    this.formName = '';
    this.formPhone = '';
    this.formAmount = null;
    this.formKind = 'debe';
    this.formOpen.set(true);
  }

  openEdit(entry: SellerEntry): void {
    this.editingId.set(entry.id);
    this.formName = entry.name ?? '';
    this.formPhone = entry.phone ?? '';
    this.formAmount = entry.amount ?? null;
    this.formKind = entry.kind;
    this.formOpen.set(true);
  }

  closeForm(): void {
    this.formOpen.set(false);
    this.editingId.set(null);
  }

  canSave(): boolean {
    const hasName = !!this.formName.trim();
    const hasPhone = !!this.formPhone.trim();
    const hasAmount = this.formAmount !== null && this.formAmount !== undefined && `${this.formAmount}` !== '';
    return hasName || hasPhone || hasAmount;
  }

  saveEntry(): void {
    if (!this.canSave()) {
      return;
    }
    this.storage.saveEntry({
      id: this.editingId() ?? undefined,
      date: this.selectedDate(),
      name: this.formName.trim() || undefined,
      phone: this.formPhone.trim() || undefined,
      amount: this.formAmount === null || this.formAmount === undefined ? null : Number(this.formAmount),
      kind: this.formKind,
    });
    this.closeForm();
  }

  deleteEntry(entry: SellerEntry, ev: Event): void {
    ev.stopPropagation();
    if (!confirm('¿Eliminar esta entrada?')) {
      return;
    }
    this.storage.deleteEntry(entry.id);
    if (this.editingId() === entry.id) {
      this.closeForm();
    }
  }

  openWhatsApp(phone: string | undefined, ev: Event): void {
    ev.stopPropagation();
    if (!phone) {
      return;
    }
    const url = boliviaWhatsAppUrl(phone);
    if (!url) {
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  hasPhone(phone: string | undefined): boolean {
    return !!boliviaWhatsAppUrl(phone ?? '');
  }

  phoneDisplay(phone: string | undefined): string {
    if (!phone?.trim()) {
      return 'Sin celular';
    }
    return formatBoliviaPhoneDisplay(phone);
  }

  amountLabel(kind: SellerEntryKind): string {
    return kind === 'deposito' ? 'Depósito' : 'Debe';
  }

  formatAmount(amount: number | null | undefined): string {
    if (amount === null || amount === undefined || !Number.isFinite(amount)) {
      return '—';
    }
    return new Intl.NumberFormat('es-BO', {
      style: 'currency',
      currency: 'BOB',
      maximumFractionDigits: 2,
    }).format(amount);
  }

  trackDay(_: number, day: CalendarDay): string {
    return day.key;
  }

  private buildMonthDays(selectedKey: string): CalendarDay[] {
    const [y, m] = selectedKey.split('-').map(Number);
    const today = this.storage.todayKey();
    const daysInMonth = new Date(y, m, 0).getDate();
    const entryDates = new Set(this.storage.entries().map((e) => e.date));
    const days: CalendarDay[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const key = this.toKey(y, m, day);
      const date = new Date(y, m - 1, day);
      days.push({
        key,
        dayNum: day,
        weekdayShort: new Intl.DateTimeFormat('es-BO', { weekday: 'short' }).format(date),
        isToday: key === today,
        hasEntries: entryDates.has(key),
      });
    }
    return days;
  }

  private toKey(y: number, m: number, d: number): string {
    return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  }

  private scrollSelectedIntoView(smooth = true): void {
    const strip = this.stripRef()?.nativeElement;
    if (!strip) {
      return;
    }
    const active = strip.querySelector<HTMLElement>('.seller-day--active');
    active?.scrollIntoView({
      inline: 'center',
      block: 'nearest',
      behavior: smooth ? 'smooth' : 'auto',
    });
  }
}
