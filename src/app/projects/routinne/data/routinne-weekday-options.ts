import type { RoutinneWeekday } from '../models/routinne.models';

/** Monday → Sunday in UI; values match `Date.getDay()`. */
export const ROUTINNE_WEEKDAY_OPTIONS: ReadonlyArray<{ value: RoutinneWeekday; label: string }> = [
  { value: 1, label: 'Mon' },
  { value: 2, label: 'Tue' },
  { value: 3, label: 'Wed' },
  { value: 4, label: 'Thu' },
  { value: 5, label: 'Fri' },
  { value: 6, label: 'Sat' },
  { value: 0, label: 'Sun' },
];
