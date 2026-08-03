import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import type { SellerEntry, SellerEntryKind } from '../models/seller.models';
import { BOLIVIA_DEPARTMENTS } from '../models/seller.models';

const ENTRIES_KEY = 'nosmad_seller_entries_v1';

@Injectable({ providedIn: 'root' })
export class SellerStorageService {
  private readonly document = inject(DOCUMENT);
  private readonly entriesSignal = signal<SellerEntry[]>(this.readAll());

  readonly entries = this.entriesSignal.asReadonly();

  private get localStorage(): Storage | null {
    try {
      return this.document.defaultView?.localStorage ?? null;
    } catch {
      return null;
    }
  }

  private readAll(): SellerEntry[] {
    const raw = this.localStorage?.getItem(ENTRIES_KEY);
    if (!raw) {
      return [];
    }
    try {
      const parsed = JSON.parse(raw) as SellerEntry[];
      if (!Array.isArray(parsed)) {
        return [];
      }
      return parsed
        .filter((e) => e && typeof e.id === 'string' && typeof e.date === 'string')
        .map((e) => this.normalize(e));
    } catch {
      return [];
    }
  }

  private persist(list: SellerEntry[]): void {
    this.localStorage?.setItem(ENTRIES_KEY, JSON.stringify(list));
    this.entriesSignal.set(list);
  }

  private normalize(e: SellerEntry): SellerEntry {
    const kind: SellerEntryKind = e.kind === 'deposito' ? 'deposito' : 'debe';
    const amount =
      e.amount === null || e.amount === undefined
        ? null
        : Number(e.amount);
    const envio = !!e.envio;
    const dept = (e.departamento ?? '').trim();
    const departamento =
      envio && BOLIVIA_DEPARTMENTS.includes(dept as (typeof BOLIVIA_DEPARTMENTS)[number])
        ? dept
        : undefined;
    return {
      id: e.id,
      date: e.date,
      name: (e.name ?? '').trim() || undefined,
      phone: (e.phone ?? '').trim() || undefined,
      amount: Number.isFinite(amount as number) ? (amount as number) : null,
      kind,
      envio: envio && !!departamento,
      departamento,
      createdAt: e.createdAt || new Date().toISOString(),
      updatedAt: e.updatedAt || e.createdAt || new Date().toISOString(),
    };
  }

  private newId(): string {
    if (typeof globalThis.crypto !== 'undefined' && 'randomUUID' in globalThis.crypto) {
      return globalThis.crypto.randomUUID();
    }
    return `s-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
  }

  entriesForDate(date: string): SellerEntry[] {
    return this.entriesSignal()
      .filter((e) => e.date === date)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  saveEntry(input: {
    id?: string;
    date: string;
    name?: string;
    phone?: string;
    amount?: number | null;
    kind: SellerEntryKind;
    envio?: boolean;
    departamento?: string;
  }): SellerEntry {
    const now = new Date().toISOString();
    const list = [...this.entriesSignal()];
    const existingIdx = input.id ? list.findIndex((e) => e.id === input.id) : -1;

    if (existingIdx >= 0) {
      const prev = list[existingIdx];
      const next = this.normalize({
        ...prev,
        date: input.date,
        name: input.name,
        phone: input.phone,
        amount: input.amount ?? null,
        kind: input.kind,
        envio: !!input.envio,
        departamento: input.departamento,
        updatedAt: now,
      });
      list[existingIdx] = next;
      this.persist(list);
      return next;
    }

    const created = this.normalize({
      id: this.newId(),
      date: input.date,
      name: input.name,
      phone: input.phone,
      amount: input.amount ?? null,
      kind: input.kind,
      envio: !!input.envio,
      departamento: input.departamento,
      createdAt: now,
      updatedAt: now,
    });
    list.push(created);
    this.persist(list);
    return created;
  }

  deleteEntry(id: string): void {
    this.persist(this.entriesSignal().filter((e) => e.id !== id));
  }

  /** Bolivia local date YYYY-MM-DD */
  todayKey(): string {
    const bolivia = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'America/La_Paz' })
    );
    const y = bolivia.getFullYear();
    const m = String(bolivia.getMonth() + 1).padStart(2, '0');
    const d = String(bolivia.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }
}

/** Strip to digits; build wa.me link with +591 (Bolivia). */
export function boliviaWhatsAppUrl(phoneRaw: string): string | null {
  let digits = (phoneRaw || '').replace(/\D/g, '');
  if (!digits) {
    return null;
  }
  if (digits.startsWith('591')) {
    digits = digits.slice(3);
  }
  if (digits.startsWith('0')) {
    digits = digits.replace(/^0+/, '');
  }
  if (digits.length < 7) {
    return null;
  }
  return `https://wa.me/591${digits}`;
}

export function formatBoliviaPhoneDisplay(phoneRaw: string): string {
  let digits = (phoneRaw || '').replace(/\D/g, '');
  if (digits.startsWith('591')) {
    digits = digits.slice(3);
  }
  if (!digits) {
    return phoneRaw?.trim() || '';
  }
  return `+591 ${digits}`;
}
