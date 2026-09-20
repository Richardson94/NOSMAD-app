import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-quest-dev-outlet',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './quest-dev-outlet.component.html',
  styleUrl: './quest-dev-outlet.component.scss',
})
export class QuestDevOutletComponent {}
