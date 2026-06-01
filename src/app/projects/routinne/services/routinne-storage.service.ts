import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { ROUTINNE_EXERCISE_BY_ID, migrateExerciseRef, orderExerciseIds } from '../data/routinne-exercise-catalog';
import type { RoutinneDayLog, RoutinneRoutine, RoutinneWeekday } from '../models/routinne.models';

const ROUTINES_KEY = 'nosmad_routinne_routines_v1';
const DAYLOGS_KEY = 'nosmad_routinne_daylogs_v1';

@Injectable({ providedIn: 'root' })
export class RoutinneStorageService {
  private readonly document = inject(DOCUMENT);

  private get localStorage(): Storage | null {
    try {
      return this.document.defaultView?.localStorage ?? null;
    } catch {
      return null;
    }
  }

  getRoutines(): RoutinneRoutine[] {
    const raw = this.localStorage?.getItem(ROUTINES_KEY);
    if (!raw) {
      return [];
    }
    try {
      const parsed = JSON.parse(raw) as RoutinneRoutine[];
      if (!Array.isArray(parsed)) {
        return [];
      }
      const migrated = parsed.map((r) => this.normalizeRoutine(r));
      const changed = JSON.stringify(migrated) !== JSON.stringify(parsed);
      if (changed) {
        this.localStorage?.setItem(ROUTINES_KEY, JSON.stringify(migrated));
        this.normalizeAllDayLogsPersist();
      }
      return migrated;
    } catch {
      return [];
    }
  }

  private normalizeRoutine(r: RoutinneRoutine): RoutinneRoutine {
    const ids = [...new Set(r.exercises.map((t) => migrateExerciseRef(t)))].filter((id) =>
      ROUTINNE_EXERCISE_BY_ID.has(id)
    );
    const exercises = orderExerciseIds(ids);
    return { ...r, exercises };
  }

  saveRoutine(routine: RoutinneRoutine): void {
    const normalized = this.normalizeRoutine(routine);
    const list = this.getRoutines().filter((r) => r.id !== normalized.id);
    list.push(normalized);
    list.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    this.localStorage?.setItem(ROUTINES_KEY, JSON.stringify(list));
  }

  deleteRoutine(id: string): void {
    const list = this.getRoutines().filter((r) => r.id !== id);
    this.localStorage?.setItem(ROUTINES_KEY, JSON.stringify(list));
    this.pruneDayLogsForRoutine(id);
  }

  getRoutineById(id: string): RoutinneRoutine | undefined {
    return this.getRoutines().find((r) => r.id === id);
  }

  todayKey(): string {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  todayWeekday(): RoutinneWeekday {
    return new Date().getDay() as RoutinneWeekday;
  }

  routinesForWeekday(wd: RoutinneWeekday): RoutinneRoutine[] {
    return this.getRoutines().filter((r) => r.weekdays.includes(wd));
  }

  private readAllDayLogs(): Record<string, RoutinneDayLog> {
    const raw = this.localStorage?.getItem(DAYLOGS_KEY);
    if (!raw) {
      return {};
    }
    try {
      return JSON.parse(raw) as Record<string, RoutinneDayLog>;
    } catch {
      return {};
    }
  }

  private writeAllDayLogs(map: Record<string, RoutinneDayLog>): void {
    this.localStorage?.setItem(DAYLOGS_KEY, JSON.stringify(map));
  }

  private normalizeDayLog(log: RoutinneDayLog): RoutinneDayLog {
    const byRoutine: Record<string, string[]> = {};
    for (const [rid, tokens] of Object.entries(log.byRoutine)) {
      const next = [
        ...new Set(
          (tokens ?? [])
            .map((t) => migrateExerciseRef(t))
            .filter((id) => ROUTINNE_EXERCISE_BY_ID.has(id))
        ),
      ];
      if (next.length) {
        byRoutine[rid] = next;
      }
    }
    return { date: log.date, byRoutine };
  }

  private normalizeAllDayLogsPersist(): void {
    const all = this.readAllDayLogs();
    let changed = false;
    const next: Record<string, RoutinneDayLog> = {};
    for (const [date, log] of Object.entries(all)) {
      const m = this.normalizeDayLog(log);
      if (JSON.stringify(m) !== JSON.stringify(log)) {
        changed = true;
      }
      if (Object.keys(m.byRoutine).length > 0) {
        next[date] = m;
      } else if (Object.keys(log.byRoutine).length > 0) {
        changed = true;
      }
    }
    if (changed) {
      this.writeAllDayLogs(next);
    }
  }

  getDayLog(date: string): RoutinneDayLog {
    const all = this.readAllDayLogs();
    const raw = all[date] ?? { date, byRoutine: {} };
    return this.normalizeDayLog(raw);
  }

  isExerciseDone(date: string, routineId: string, exerciseId: string): boolean {
    const done = this.getDayLog(date).byRoutine[routineId];
    return !!done?.includes(exerciseId);
  }

  setExerciseDone(date: string, routineId: string, exerciseId: string, done: boolean): void {
    const all = this.readAllDayLogs();
    const log = this.normalizeDayLog(all[date] ?? { date, byRoutine: {} });
    const prev = log.byRoutine[routineId] ? [...log.byRoutine[routineId]] : [];
    const set = new Set(prev);
    const id = migrateExerciseRef(exerciseId);
    if (!ROUTINNE_EXERCISE_BY_ID.has(id)) {
      return;
    }
    if (done) {
      set.add(id);
    } else {
      set.delete(id);
    }
    log.byRoutine[routineId] = [...set];
    all[date] = log;
    this.writeAllDayLogs(all);
  }

  toggleExerciseDone(date: string, routineId: string, exerciseId: string): void {
    const cur = this.isExerciseDone(date, routineId, exerciseId);
    this.setExerciseDone(date, routineId, exerciseId, !cur);
  }

  /** True if there is at least one pending exercise for any of today's routines. */
  hasPendingExercisesForToday(): boolean {
    const date = this.todayKey();
    const wd = this.todayWeekday();
    const routines = this.routinesForWeekday(wd);
    if (routines.length === 0) {
      return false;
    }
    for (const r of routines) {
      for (const exId of r.exercises) {
        if (!this.isExerciseDone(date, r.id, exId)) {
          return true;
        }
      }
    }
    return false;
  }

  private pruneDayLogsForRoutine(routineId: string): void {
    const all = this.readAllDayLogs();
    for (const key of Object.keys(all)) {
      const log = all[key];
      if (log?.byRoutine[routineId]) {
        delete log.byRoutine[routineId];
        if (Object.keys(log.byRoutine).length === 0) {
          delete all[key];
        }
      }
    }
    this.writeAllDayLogs(all);
  }
}
