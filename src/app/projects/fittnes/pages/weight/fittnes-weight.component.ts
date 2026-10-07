import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FittnesStoreService } from '../../services/fittnes-store.service';

@Component({
  selector: 'app-fittnes-weight',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './fittnes-weight.component.html',
  styleUrl: '../../styles/fittnes.scss',
})
export class FittnesWeightComponent {
  private readonly store = inject(FittnesStoreService);
  private readonly router = inject(Router);
  value = '';
  message = '';

  constructor() {
    const latest = this.store.latestWeight();
    this.value = latest ? String(latest.kg) : '';
  }

  save(): void {
    const result = this.store.saveWeight(Number(this.value.replace(',', '.')));
    if (!result.ok) {
      this.message = result.message;
      return;
    }
    this.router.navigate(['/fittnes'], { replaceUrl: true });
  }
}
