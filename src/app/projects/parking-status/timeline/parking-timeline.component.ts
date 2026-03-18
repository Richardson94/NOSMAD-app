import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ParkingStatusService } from '../parking-status.service';
import { ParkingDay } from '../parking-status.models';

@Component({
  selector: 'app-parking-timeline',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './parking-timeline.component.html',
  styleUrl: './parking-timeline.component.scss',
})
export class ParkingTimelineComponent {
  readonly schedule = this.service.schedule;

  selectedName: string | null = null;

  readonly upcomingDays = computed<ParkingDay[]>(() => {
    const data = this.schedule();
    if (!data) return [];

    const now = new Date();
    const boliviaDate = new Date(
      now.toLocaleString('en-US', { timeZone: 'America/La_Paz' })
    );
    const yyyy = boliviaDate.getFullYear();
    const mm = String(boliviaDate.getMonth() + 1).padStart(2, '0');
    const dd = String(boliviaDate.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;

    return [...data.parqueos]
      .filter((d) => d.fecha > todayStr)
      .sort((a, b) => a.fecha.localeCompare(b.fecha));
  });

  selectName(name: string): void {
    this.selectedName = this.selectedName === name ? null : name;
  }

  isSelected(name: string): boolean {
    return this.selectedName === name;
  }

  constructor(private service: ParkingStatusService) {}
}

