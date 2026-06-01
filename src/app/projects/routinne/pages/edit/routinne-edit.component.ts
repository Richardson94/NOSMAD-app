import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ROUTINNE_EXERCISE_CATALOG, orderExerciseIds } from '../../data/routinne-exercise-catalog';
import { ROUTINNE_WEEKDAY_OPTIONS } from '../../data/routinne-weekday-options';
import type { RoutinneRoutine, RoutinneWeekday } from '../../models/routinne.models';
import { RoutinneStorageService } from '../../services/routinne-storage.service';

@Component({
  selector: 'app-routinne-edit',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './routinne-edit.component.html',
  styleUrls: [
    '../../styles/routinne-screen.scss',
    '../../styles/routinne-page.scss',
    '../../styles/routinne-wizard.scss',
    './routinne-edit.component.scss',
  ],
})
export class RoutinneEditComponent {
  readonly storage = inject(RoutinneStorageService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly toast = inject(HotToastService);
  private readonly destroyRef = inject(DestroyRef);

  readonly catalog = ROUTINNE_EXERCISE_CATALOG;
  readonly weekdayOptions = ROUTINNE_WEEKDAY_OPTIONS;

  readonly routineId = signal<string | null>(null);
  readonly draft = signal<RoutinneRoutine | null>(null);

  routineName = '';

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((pm) => {
      const id = pm.get('routineId');
      this.routineId.set(id);
      this.loadDraft(id);
    });
  }

  private loadDraft(id: string | null): void {
    if (!id) {
      this.draft.set(null);
      this.routineName = '';
      return;
    }
    const r = this.storage.getRoutineById(id);
    if (!r) {
      this.draft.set(null);
      this.routineName = '';
      return;
    }
    this.draft.set({
      ...r,
      weekdays: [...r.weekdays],
      exercises: [...r.exercises],
    });
    this.routineName = r.name;
  }

  routinesList(): RoutinneRoutine[] {
    return this.storage.getRoutines();
  }

  weekdaySummary(r: RoutinneRoutine): string {
    const labels = ROUTINNE_WEEKDAY_OPTIONS.filter((o) => r.weekdays.includes(o.value)).map((o) => o.label);
    return labels.length ? labels.join(' · ') : 'No days';
  }

  toggleWeekday(day: RoutinneWeekday): void {
    const d = this.draft();
    if (!d) {
      return;
    }
    const has = d.weekdays.includes(day);
    const weekdays = (has ? d.weekdays.filter((x) => x !== day) : [...d.weekdays, day]).sort(
      (a, b) => a - b
    ) as RoutinneWeekday[];
    this.draft.set({ ...d, weekdays });
  }

  isWeekdayOn(day: RoutinneWeekday): boolean {
    return !!this.draft()?.weekdays.includes(day);
  }

  toggleExercise(id: string): void {
    const d = this.draft();
    if (!d) {
      return;
    }
    const nextIds = d.exercises.includes(id)
      ? d.exercises.filter((x) => x !== id)
      : [...d.exercises, id];
    const exercises = orderExerciseIds(nextIds);
    this.draft.set({ ...d, exercises });
  }

  isExerciseOn(id: string): boolean {
    return !!this.draft()?.exercises.includes(id);
  }

  save(): void {
    const d = this.draft();
    if (!d || d.weekdays.length === 0 || d.exercises.length === 0) {
      this.toast.error('Pick at least one day and one exercise.');
      return;
    }
    const name = this.routineName.trim() || d.name;
    const updated: RoutinneRoutine = {
      ...d,
      name,
      updatedAt: new Date().toISOString(),
    };
    this.storage.saveRoutine(updated);
    this.toast.success('Changes saved');
    this.router.navigateByUrl('/routinne/edit');
  }

  deleteRoutineById(id: string, displayName: string): void {
    if (!confirm(`Delete “${displayName}”? This cannot be undone.`)) {
      return;
    }
    this.storage.deleteRoutine(id);
    this.toast.success('Routine deleted');
    if (this.routineId() === id) {
      this.router.navigateByUrl('/routinne/edit');
    }
  }
}
