import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FittnesFigureComponent } from '../../components/figure/fittnes-figure.component';
import { FITTNES_PART_BY_ID, fittnesMmToCm } from '../../data/fittnes-parts';
import type { FittnesPartId } from '../../models/fittnes.models';
import { FittnesStoreService } from '../../services/fittnes-store.service';

@Component({
  selector: 'app-fittnes-measure',
  standalone: true,
  imports: [RouterLink, FittnesFigureComponent],
  templateUrl: './fittnes-measure.component.html',
  styleUrl: '../../styles/fittnes.scss',
})
export class FittnesMeasureComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly store = inject(FittnesStoreService);

  partId: FittnesPartId | null = null;
  value = '';
  message = '';

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const id = params.get('part');
      if (!id || !FITTNES_PART_BY_ID.has(id as FittnesPartId)) {
        this.router.navigate(['/fittnes/cuerpo']);
        return;
      }
      this.partId = id as FittnesPartId;
      const current = this.store.parts()[this.partId];
      this.value = current === undefined ? '' : String(current);
      this.message = '';
    });
  }

  part() {
    return this.partId ? FITTNES_PART_BY_ID.get(this.partId) ?? null : null;
  }

  cmHint(): string {
    const mm = Number(this.value.replace(',', '.'));
    if (!this.value.trim() || !Number.isFinite(mm) || mm <= 0) {
      return 'Ejemplo: 850 mm = 85 cm';
    }
    return `= ${fittnesMmToCm(mm)} cm`;
  }

  bandText(): string {
    if (!this.partId || this.partId === 'wrist') {
      return 'Esta medida es la referencia del resto. Mídela primero.';
    }
    const band = this.store.bandFor(this.partId);
    if (!band) {
      if (!this.store.profile().sex) {
        return 'Elige hombre o mujer en Altura y edad para ver el rango.';
      }
      return 'Mide la muñeca primero. Esa medida arma el rango.';
    }
    return `Rango de referencia: ${band.min}–${band.max} mm.`;
  }

  save(): void {
    if (!this.partId) {
      return;
    }
    const raw = this.value.trim();
    const mm = raw ? Number(raw.replace(',', '.')) : null;
    const result = this.store.savePart(this.partId, mm);
    if (!result.ok) {
      this.message = result.message;
      return;
    }
    const next = this.store.missingParts()[0];
    this.router.navigate(next ? ['/fittnes/cuerpo', next] : ['/fittnes'], { replaceUrl: true });
  }
}
