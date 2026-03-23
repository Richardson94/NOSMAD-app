import { Component } from '@angular/core';

@Component({
  selector: 'app-random-roulette',
  standalone: true,
  imports: [],
  templateUrl: './random-roulette.component.html',
  styleUrl: './random-roulette.component.scss',
})
export class RandomRouletteComponent {
  public options: string[] = ['Richard Test 1',"Richard Test 2","Richard Test 3", "Richard Test 4"];

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
  private pendingWinnerIndex: number | null = null;

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

    const winnerIndex = this.getRandomInt(0, this.count - 1);
    this.pendingWinnerIndex = winnerIndex;

    // Evita caer siempre al centro del segmento para dar más variación visual
    const segmentJitter = (Math.random() - 0.5) * this.segmentAngle * 0.8;
    const fullSpins = this.getRandomInt(5, 8);
    const segmentCenter = winnerIndex * this.segmentAngle + this.segmentAngle / 2 + segmentJitter;
    const pointerAngle = 270;
    const currentNormalizedRotation = this.normalizeDegrees(this.currentRotation);
    const desiredNormalizedRotation = this.normalizeDegrees(pointerAngle - segmentCenter);
    const deltaToTarget = this.normalizeDegrees(
      desiredNormalizedRotation - currentNormalizedRotation
    );
    const finalRotation =
      this.currentRotation +
      fullSpins * 360 +
      deltaToTarget;

    this.currentRotation = finalRotation;
    this.wheelRotation = this.currentRotation;
  }

  private getRandomInt(min: number, max: number): number {
    const lower = Math.ceil(min);
    const upper = Math.floor(max);
    const range = upper - lower + 1;

    if (range <= 0) return lower;

    if (globalThis.crypto?.getRandomValues) {
      const randomBuffer = new Uint32Array(1);
      const maxUint32 = 0x100000000;
      const limit = maxUint32 - (maxUint32 % range);
      let randomValue = 0;

      do {
        globalThis.crypto.getRandomValues(randomBuffer);
        randomValue = randomBuffer[0];
      } while (randomValue >= limit);

      return lower + (randomValue % range);
    }

    return lower + Math.floor(Math.random() * range);
  }

  private normalizeDegrees(angle: number): number {
    return ((angle % 360) + 360) % 360;
  }

  onTransitionEnd(): void {
    if (!this.spinning) return;
    const winnerIndex = this.pendingWinnerIndex ?? 0;
    this.winner = this.options[winnerIndex];
    this.pendingWinnerIndex = null;
    this.spinning = false;
  }
}
