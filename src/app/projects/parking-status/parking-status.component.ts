import { Component, computed } from '@angular/core';
import { ParkingStatusService } from './parking-status.service';

@Component({
  selector: 'app-parking-status',
  standalone: true,
  imports: [],
  templateUrl: './parking-status.component.html',
  styleUrl: './parking-status.component.scss',
})
export class ParkingStatusComponent {
  readonly today = computed(() => this.service.todayAssignment());
  readonly loading = this.service.isLoading;
  readonly error = this.service.loadError;
  readonly showTesting = false;

  constructor(private service: ParkingStatusService) {}

  prevDay(): void {
    this.service.stepDay(-1);
  }

  nextDay(): void {
    this.service.stepDay(1);
  }

  resetToday(): void {
    this.service.resetToday();
  }
}

