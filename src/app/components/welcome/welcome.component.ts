import {Component} from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  public Experience: number;
  private readonly EXPERIENCE_YEARS: number = 2017;

  constructor() {
    const currentYear = new Date().getFullYear();
    this.Experience = currentYear - this.EXPERIENCE_YEARS;
  }
}
