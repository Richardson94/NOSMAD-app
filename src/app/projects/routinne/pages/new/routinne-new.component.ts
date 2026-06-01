import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { catalogSortedAlphabetically, orderExerciseIds } from '../../data/routinne-exercise-catalog';
import { ROUTINNE_WEEKDAY_OPTIONS } from '../../data/routinne-weekday-options';
import type { RoutinneRoutine, RoutinneWeekday } from '../../models/routinne.models';
import { RoutinneStorageService } from '../../services/routinne-storage.service';

type WeekdayOpt = { value: RoutinneWeekday; label: string };

type FrequencyWeekdayRow =
  | { kind: 'pair'; left: WeekdayOpt; right: WeekdayOpt }
  | { kind: 'sun'; day: WeekdayOpt };

function weekdayOpt(v: RoutinneWeekday): WeekdayOpt {
  return ROUTINNE_WEEKDAY_OPTIONS.find((o) => o.value === v)!;
}

const FREQUENCY_WEEKDAY_ROWS: ReadonlyArray<FrequencyWeekdayRow> = [
  { kind: 'pair', left: weekdayOpt(1), right: weekdayOpt(2) },
  { kind: 'pair', left: weekdayOpt(3), right: weekdayOpt(4) },
  { kind: 'pair', left: weekdayOpt(5), right: weekdayOpt(6) },
  { kind: 'sun', day: { ...weekdayOpt(0), label: 'Sunday' } },
];

@Component({
  selector: 'app-routinne-new',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './routinne-new.component.html',
  styleUrls: [
    '../../styles/routinne-screen.scss',
    '../../styles/routinne-page.scss',
    '../../styles/routinne-wizard.scss',
    './routinne-new.component.scss',
  ],
})
export class RoutinneNewComponent {
  private readonly storage = inject(RoutinneStorageService);
  private readonly router = inject(Router);
  private readonly toast = inject(HotToastService);

  readonly catalog = catalogSortedAlphabetically();
  readonly frequencyWeekdayRows = FREQUENCY_WEEKDAY_ROWS;

  readonly step = signal<1 | 2>(1);
  readonly weekdays = signal<RoutinneWeekday[]>([]);
  readonly pickedExerciseIds = signal<string[]>([]);
  routineName = '';

  readonly canGoNext = computed(() => this.weekdays().length > 0);
  readonly canSave = computed(
    () => this.weekdays().length > 0 && this.pickedExerciseIds().length > 0
  );
  readonly exerciseCount = computed(() => this.pickedExerciseIds().length);

  toggleWeekday(day: RoutinneWeekday): void {
    this.weekdays.update((cur) => {
      const has = cur.includes(day);
      const next = has ? cur.filter((d) => d !== day) : [...cur, day];
      return [...next].sort((a, b) => a - b) as RoutinneWeekday[];
    });
  }

  isWeekdayOn(day: RoutinneWeekday): boolean {
    return this.weekdays().includes(day);
  }

  toggleExercise(id: string): void {
    this.pickedExerciseIds.update((cur) =>
      cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]
    );
  }

  isExerciseOn(id: string): boolean {
    return this.pickedExerciseIds().includes(id);
  }

  orderedPickedIds(): string[] {
    return orderExerciseIds(this.pickedExerciseIds());
  }

  goStep2(): void {
    if (!this.canGoNext()) {
      return;
    }
    this.step.set(2);
  }

  goStep1(): void {
    this.step.set(1);
  }

  save(): void {
    if (!this.canSave()) {
      return;
    }
    const now = new Date().toISOString();
    const id =
      typeof globalThis.crypto !== 'undefined' && 'randomUUID' in globalThis.crypto
        ? globalThis.crypto.randomUUID()
        : `r-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
    const name =
      this.routineName.trim() || `Routine ${this.storage.getRoutines().length + 1}`;
    const routine: RoutinneRoutine = {
      id,
      name,
      weekdays: [...this.weekdays()],
      exercises: this.orderedPickedIds(),
      createdAt: now,
      updatedAt: now,
    };
    this.storage.saveRoutine(routine);
    this.toast.success('Routine saved');
    this.router.navigateByUrl('/routinne');
  }
}
