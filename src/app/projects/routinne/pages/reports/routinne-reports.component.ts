import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-routinne-reports',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './routinne-reports.component.html',
  styleUrls: [
    '../../styles/routinne-screen.scss',
    './routinne-reports.component.scss',
  ],
})
export class RoutinneReportsComponent {}
