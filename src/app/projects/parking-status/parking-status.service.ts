import { Injectable, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParkingAssignment, ParkingScheduleData, ParkingDay } from './parking-status.models';

@Injectable({ providedIn: 'root' })
export class ParkingStatusService {
  private readonly data = signal<ParkingScheduleData | null>(null);
  private readonly loading = signal(true);
  private readonly error = signal<string | null>(null);
  private readonly offsetDays = signal(0);

  readonly schedule = this.data.asReadonly();
  readonly isLoading = this.loading.asReadonly();
  readonly loadError = this.error.asReadonly();

  private readonly jsonUrl = '/projects/parking-status/data/scheduleParking.json';

  readonly todayAssignment = computed<ParkingAssignment | null>(() => {
    const d = this.data();
    if (!d) return null;

    // Current date in Bolivia timezone (America/La_Paz, UTC-4) plus offset
    const now = new Date();
    const boliviaDate = new Date(
      now.toLocaleString('en-US', { timeZone: 'America/La_Paz' })
    );
    const baseTime = boliviaDate.getTime();
    const offsetMs = this.offsetDays() * 24 * 60 * 60 * 1000;
    const effectiveDate = new Date(baseTime + offsetMs);

    const yyyy = effectiveDate.getFullYear();
    const mm = String(effectiveDate.getMonth() + 1).padStart(2, '0');
    const dd = String(effectiveDate.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`; // YYYY-MM-DD

    const sorted = [...d.parqueos].sort((a, b) =>
      a.fecha.localeCompare(b.fecha)
    );

    let current: ParkingDay | undefined =
      sorted.find((p) => p.fecha === todayStr) ??
      sorted.find((p) => p.fecha > todayStr);

    if (!current) {
      current = sorted[sorted.length - 1];
    }

    const isToday = current.fecha === todayStr;
    const msPerDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(
      (new Date(current.fecha + 'T00:00:00').getTime() -
        new Date(todayStr + 'T00:00:00').getTime()) / msPerDay
    );
    const dateObj = new Date(current.fecha + 'T00:00:00');
    const dayFormatter = new Intl.DateTimeFormat(undefined, {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });

    let relativeLabel: string;
    if (diffDays === 0) {
      relativeLabel = 'Today';
    } else if (diffDays === 1) {
      relativeLabel = 'Tomorrow';
    } else if (diffDays > 1) {
      relativeLabel = `In ${diffDays} days`;
    } else if (diffDays === -1) {
      relativeLabel = 'Yesterday';
    } else {
      relativeLabel = `${Math.abs(diffDays)} days ago`;
    }

    return {
      date: current.fecha,
      dayLabel: dayFormatter.format(dateObj),
      isToday,
      daysFromToday: diffDays,
      relativeLabel,
      parqueo1: current.parqueo1,
      parqueo2: current.parqueo2,
    };
  });

  constructor(private http: HttpClient) {
    this.http.get<ParkingScheduleData>(this.jsonUrl).subscribe({
      next: (d) => {
        this.data.set(d);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Could not load parking schedule.');
        this.loading.set(false);
      },
    });
  }

  stepDay(delta: number): void {
    this.offsetDays.update((v) => v + delta);
  }

  resetToday(): void {
    this.offsetDays.set(0);
  }
}

