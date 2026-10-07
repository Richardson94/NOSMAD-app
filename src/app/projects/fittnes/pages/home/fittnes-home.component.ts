import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FITTNES_COIN_GOAL } from '../../data/fittnes-parts';
import { FittnesStoreService } from '../../services/fittnes-store.service';

@Component({
  selector: 'app-fittnes-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './fittnes-home.component.html',
  styleUrl: '../../styles/fittnes.scss',
})
export class FittnesHomeComponent {
  readonly store = inject(FittnesStoreService);
  readonly goal = FITTNES_COIN_GOAL;

  displayName(): string {
    const raw = this.store.profile().name?.trim() ?? '';
    if (!raw) {
      return 'ti';
    }
    return raw
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  fillPercent(): number {
    return Math.min(100, Math.round((this.store.coins() / this.goal) * 100));
  }

  /** Interior of piggy-mask.png spans y 141–794 in the 1152×864 drawing. */
  readonly bankTop = 150;
  private readonly bankBottom = 800;
  readonly surfaceCoins = Array.from({ length: 13 }, (_, index) => 230 + index * 62);

  levelOffset(): number {
    const range = this.bankBottom - this.bankTop;
    const coins = this.store.coins();
    const visible = coins > 0 ? 0.1 + 0.9 * (this.fillPercent() / 100) : 0;
    return Math.round(range * (1 - visible));
  }

  priorities() {
    return this.store.focus().filter((item) => item.status === 'low' || item.status === 'high').slice(0, 3);
  }

  ruler(): {
    current: string;
    currentLabel: string;
    color: string;
    marker: number;
    segments: { label: string; width: number; color: string }[];
  } | null {
    const current = this.store.bmi();
    if (current === null) {
      return null;
    }
    const scaleMin = 15;
    const scaleMax = 40;
    const zones = [
      { from: 15, to: 18.5, label: 'Bajo', color: '#5ad0d0' },
      { from: 18.5, to: 25, label: 'En rango', color: '#6ed36e' },
      { from: 25, to: 30, label: 'Sobrepeso', color: '#f8d848' },
      { from: 30, to: 40, label: 'Obesidad', color: '#e85d5d' },
    ];
    const span = scaleMax - scaleMin;
    const zone = zones.find((item) => current < item.to) ?? zones[zones.length - 1];
    const rounded = Math.round(current * 10) / 10;
    return {
      current: Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1),
      currentLabel: zone.label,
      color: zone.color,
      marker: Math.min(100, Math.max(0, ((current - scaleMin) / span) * 100)),
      segments: zones.map((item) => ({
        label: item.label,
        width: ((item.to - item.from) / span) * 100,
        color: item.color,
      })),
    };
  }
}
