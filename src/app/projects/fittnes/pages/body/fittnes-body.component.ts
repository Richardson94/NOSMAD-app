import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FittnesFigureComponent } from '../../components/figure/fittnes-figure.component';
import { FITTNES_BODY_COINS, FITTNES_PARTS, FITTNES_PART_BY_ID } from '../../data/fittnes-parts';
import type { FittnesPartId, FittnesPartStatus } from '../../models/fittnes.models';
import { FittnesStoreService } from '../../services/fittnes-store.service';

@Component({
  selector: 'app-fittnes-body',
  standalone: true,
  imports: [RouterLink, FittnesFigureComponent],
  templateUrl: './fittnes-body.component.html',
  styleUrl: '../../styles/fittnes.scss',
})
export class FittnesBodyComponent {
  private readonly router = inject(Router);
  readonly store = inject(FittnesStoreService);
  readonly total = FITTNES_PARTS.length;
  readonly bodyCoins = FITTNES_BODY_COINS;

  marks(): Partial<Record<FittnesPartId, FittnesPartStatus>> {
    const marks: Partial<Record<FittnesPartId, FittnesPartStatus>> = {};
    const focus = new Map(this.store.focus().map((item) => [item.id, item.status]));
    for (const part of FITTNES_PARTS) {
      if (part.id === 'wrist') {
        marks.wrist = this.store.parts().wrist ? 'ok' : 'empty';
      } else {
        marks[part.id] = focus.get(part.id) ?? (this.store.parts()[part.id] ? 'ok' : 'empty');
      }
    }
    return marks;
  }

  done(): number {
    return this.total - this.store.missingParts().length;
  }

  next(): { id: FittnesPartId; name: string } | null {
    const id = this.store.missingParts()[0];
    return id ? { id, name: FITTNES_PART_BY_ID.get(id)?.name ?? id } : null;
  }

  open(id: FittnesPartId): void {
    this.router.navigate(['/fittnes/cuerpo', id]);
  }
}
