import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-fittnes-outlet',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './fittnes-outlet.component.html',
  styleUrl: './fittnes-outlet.component.scss',
})
export class FittnesOutletComponent {}
