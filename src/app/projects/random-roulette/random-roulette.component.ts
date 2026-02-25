import { Component } from '@angular/core';

@Component({
  selector: 'app-random-roulette',
  standalone: true,
  imports: [],
  templateUrl: './random-roulette.component.html',
  styleUrl: './random-roulette.component.scss',
})
export class RandomRouletteComponent {
  /** Array de opciones: puede tener N elementos. */
  options: string[] = [
    'A',
    'B',
    'C',
    'D'    
  ];

  /** Paleta de colores sólidos (se repite si hay más opciones que colores). */
  readonly segmentColors = [
    '#a78bfa',
    '#34d399',
    '#f59e0b',
    '#ef4444',
    '#8b5cf6',
    '#06b6d4',
    '#ec4899',
    '#84cc16',
    '#f97316',
    '#14b8a6',
  ];

  spinning = false;
  winner: string | null = null;
  currentRotation = 0;
  wheelRotation = 0;

  get count(): number {
    return Math.max(1, this.options.length);
  }

  get segmentAngle(): number {
    return 360 / this.count;
  }

  getSegmentColor(index: number): string {
    return this.segmentColors[index % this.segmentColors.length];
  }

  /** clip-path para un segmento en forma de cuña (wedge). */
  getSegmentClipPath(): string {
    const rad = (this.segmentAngle * Math.PI) / 180;
    const x = 100 * Math.cos(rad);
    const y = 100 * Math.sin(rad);
    return `polygon(0 0, 100% 0, ${x}% ${y}%)`;
  }

  spin(): void {
    if (this.spinning || this.count === 0) return;
    this.spinning = true;
    this.winner = null;

    const winnerIndex = Math.floor(Math.random() * this.count);
    const fullSpins = 5;
    const segmentCenter = winnerIndex * this.segmentAngle + this.segmentAngle / 2;
    const pointerAngle = 270;
    const finalRotation =
      this.currentRotation +
      fullSpins * 360 +
      (pointerAngle - segmentCenter);

    this.currentRotation = finalRotation;
    this.wheelRotation = this.currentRotation;
  }

  /** Índice del segmento que está bajo el puntero (arriba = 270°) según la rotación actual. */
  getWinnerIndexFromRotation(rotationDeg: number): number {
    const r = ((rotationDeg % 360) + 360) % 360;
    const angleInWheelAtPointer = (270 - r + 360) % 360;
    const index = Math.floor(angleInWheelAtPointer / this.segmentAngle);
    return Math.min(index, this.count - 1);
  }

  onTransitionEnd(): void {
    if (!this.spinning) return;
    const winnerIndex = this.getWinnerIndexFromRotation(this.wheelRotation);
    this.winner = this.options[winnerIndex];
    this.spinning = false;
  }
}
