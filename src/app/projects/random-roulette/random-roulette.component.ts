import { Component } from '@angular/core';

@Component({
  selector: 'app-random-roulette',
  standalone: true,
  imports: [],
  templateUrl: './random-roulette.component.html',
  styleUrl: './random-roulette.component.scss',
})
export class RandomRouletteComponent {
  public options: string[] = ['A',"B","C", "D"];

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

  public spinning = false;
  public winner: string | null = null;
  public currentRotation = 0;
  public wheelRotation = 0;

  public get count(): number {
    return Math.max(1, this.options.length);
  }

  public get segmentAngle(): number {
    return 360 / this.count;
  }

  public getSegmentColor(index: number): string {
    return this.segmentColors[index % this.segmentColors.length];
  }

  /** Fondo circular con porciones sólidas (conic-gradient) para cualquier N. */
  public get wheelGradient(): string {
    const n = this.count;
    const step = 360 / n;
    const parts: string[] = [];
    for (let i = 0; i < n; i++) {
      const start = i * step;
      const end = (i + 1) * step;
      const color = this.getSegmentColor(i);
      parts.push(`${color} ${start}deg ${end}deg`);
    }
    return `conic-gradient(from 0deg, ${parts.join(', ')})`;
  }

  public spin(): void {
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
