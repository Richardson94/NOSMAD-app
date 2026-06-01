import { DOCUMENT } from '@angular/common';
import { afterNextRender, Component, inject, Injector } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  exerciseDisplayName,
  ROUTINNE_EXERCISE_BY_ID,
  type RoutinneExerciseDef,
} from '../../data/routinne-exercise-catalog';
import type { RoutinneRoutine } from '../../models/routinne.models';
import { RoutinneStorageService } from '../../services/routinne-storage.service';

const FLIP_DURATION_MS = 480;
const FLIP_EASING = 'cubic-bezier(0.34, 1.15, 0.64, 1)';

@Component({
  selector: 'app-routinne-today',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './routinne-today.component.html',
  styleUrls: [
    '../../styles/routinne-screen.scss',
    '../../styles/routinne-page.scss',
    '../../styles/routinne-exercise-cards.scss',
    './routinne-today.component.scss',
  ],
})
export class RoutinneTodayComponent {
  private readonly storage = inject(RoutinneStorageService);
  private readonly document = inject(DOCUMENT);
  private readonly injector = inject(Injector);
  private readonly router = inject(Router);

  todayRoutines(): RoutinneRoutine[] {
    return this.storage.routinesForWeekday(this.storage.todayWeekday());
  }

  todayLabel(): string {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    }).format(new Date());
  }

  exerciseMeta(id: string): RoutinneExerciseDef | undefined {
    return ROUTINNE_EXERCISE_BY_ID.get(id);
  }

  exerciseLabel(id: string): string {
    return exerciseDisplayName(id);
  }

  /** Pending first (catalog order), completed last — for Today list UX. */
  exercisesForTodayDisplay(r: RoutinneRoutine): string[] {
    const date = this.storage.todayKey();
    const pending: string[] = [];
    const completed: string[] = [];
    for (const exId of r.exercises) {
      if (this.storage.isExerciseDone(date, r.id, exId)) {
        completed.push(exId);
      } else {
        pending.push(exId);
      }
    }
    return [...pending, ...completed];
  }

  isDone(routineId: string, exerciseId: string): boolean {
    return this.storage.isExerciseDone(this.storage.todayKey(), routineId, exerciseId);
  }

  setDone(routineId: string, exerciseId: string, ev: Event): void {
    const input = ev.target as HTMLInputElement;
    const grid = this.document.getElementById(this.exerciseGridId(routineId));
    const firstRects = this.captureItemRects(grid);

    this.storage.setExerciseDone(this.storage.todayKey(), routineId, exerciseId, input.checked);

    afterNextRender(
      () => {
        requestAnimationFrame(() => {
          this.runFlipAnimation(grid, firstRects, exerciseId);
        });
      },
      { injector: this.injector }
    );

    if (!this.storage.hasPendingExercisesForToday()) {
      this.router.navigateByUrl('/routinne');
    }
  }

  progressText(r: RoutinneRoutine): string {
    const date = this.storage.todayKey();
    const done = r.exercises.filter((ex) => this.storage.isExerciseDone(date, r.id, ex)).length;
    return `${done}/${r.exercises.length}`;
  }

  exerciseGridId(routineId: string): string {
    return `routinne-today-exercises-${routineId}`;
  }

  private captureItemRects(grid: HTMLElement | null): Map<string, DOMRect> {
    const map = new Map<string, DOMRect>();
    if (!grid) {
      return map;
    }
    grid.querySelectorAll<HTMLElement>('[data-exercise-id]').forEach((el) => {
      const id = el.dataset['exerciseId'];
      if (id) {
        map.set(id, el.getBoundingClientRect());
      }
    });
    return map;
  }

  private runFlipAnimation(
    grid: HTMLElement | null,
    firstRects: Map<string, DOMRect>,
    movedExerciseId: string
  ): void {
    if (!grid || firstRects.size === 0) {
      return;
    }
    if (this.document.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    grid.querySelectorAll<HTMLElement>('[data-exercise-id]').forEach((el) => {
      const id = el.dataset['exerciseId'];
      if (!id) {
        return;
      }
      const first = firstRects.get(id);
      if (!first) {
        return;
      }

      const last = el.getBoundingClientRect();
      const dx = first.left - last.left;
      const dy = first.top - last.top;

      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
        return;
      }

      const isMovedCard = id === movedExerciseId;
      el.classList.add('routinne-today__exercise-item--flipping');
      if (isMovedCard) {
        el.classList.add('routinne-today__exercise-item--flipping-primary');
      }

      el.style.transition = 'none';
      el.style.transform = `translate(${dx}px, ${dy}px)`;

      requestAnimationFrame(() => {
        el.style.transition = `transform ${FLIP_DURATION_MS}ms ${FLIP_EASING}`;
        el.style.transform = 'translate(0, 0)';
      });

      const cleanup = (): void => {
        el.style.transition = '';
        el.style.transform = '';
        el.classList.remove('routinne-today__exercise-item--flipping');
        el.classList.remove('routinne-today__exercise-item--flipping-primary');
      };

      el.addEventListener('transitionend', (e) => {
        if (e.propertyName === 'transform') {
          cleanup();
        }
      }, { once: true });

      window.setTimeout(cleanup, FLIP_DURATION_MS + 80);
    });
  }
}
