import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoutinneStorageService } from '../../services/routinne-storage.service';

@Component({
  selector: 'app-routinne-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './routinne-home.component.html',
  styleUrl: './routinne-home.component.scss',
})
export class RoutinneHomeComponent {
  readonly storage = inject(RoutinneStorageService);

  hasRoutines(): boolean {
    return this.storage.getRoutines().length > 0;
  }

  hasRoutinesForToday(): boolean {
    return this.storage.routinesForWeekday(this.storage.todayWeekday()).length > 0;
  }
}
