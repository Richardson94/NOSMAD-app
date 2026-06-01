/** Weekday per `Date.getDay()` (0 = Sunday … 6 = Saturday). */
export type RoutinneWeekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface RoutinneRoutine {
  id: string;
  name: string;
  /** Days this routine applies (`Date.getDay()`). */
  weekdays: RoutinneWeekday[];
  /** Stable exercise ids from `ROUTINNE_EXERCISE_CATALOG`. */
  exercises: string[];
  createdAt: string;
  updatedAt: string;
}

/** Progress for a calendar day: which exercise ids are done per routine. */
export interface RoutinneDayLog {
  /** Local YYYY-MM-DD. */
  date: string;
  /** routineId → completed exercise ids that day. */
  byRoutine: Record<string, string[]>;
}
