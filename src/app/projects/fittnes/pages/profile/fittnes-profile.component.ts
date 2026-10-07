import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import type { FittnesSex } from '../../models/fittnes.models';
import { FittnesStoreService } from '../../services/fittnes-store.service';

@Component({
  selector: 'app-fittnes-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './fittnes-profile.component.html',
  styleUrl: '../../styles/fittnes.scss',
})
export class FittnesProfileComponent {
  private readonly store = inject(FittnesStoreService);
  private readonly router = inject(Router);
  name = '';
  age = '';
  height = '';
  sex: FittnesSex | null = null;
  message = '';

  constructor() {
    const profile = this.store.profile();
    this.name = profile.name ?? '';
    this.age = profile.age ? String(profile.age) : '';
    this.height = profile.heightCm ? String(profile.heightCm) : '';
    this.sex = profile.sex;
  }

  save(): void {
    const result = this.store.saveProfile({
      name: this.name,
      age: this.age.trim() ? Number(this.age) : null,
      heightCm: this.height.trim() ? Number(this.height.replace(',', '.')) : null,
      sex: this.sex,
    });
    if (!result.ok) {
      this.message = result.message;
      return;
    }
    this.router.navigate(['/fittnes'], { replaceUrl: true });
  }
}
