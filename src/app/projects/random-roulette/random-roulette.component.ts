import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RandomRouletteFacade, RouletteOption } from './state';
import { DEFAULT_RANDOM_ROULETTE_OPTIONS } from './state/random-roulette.constants';

@Component({
  selector: 'app-random-roulette',
  standalone: true,
  imports: [FormsModule],
  providers: [RandomRouletteFacade],
  templateUrl: './random-roulette.component.html',
  styleUrl: './random-roulette.component.scss',
})
export class RandomRouletteComponent {
  public optionsInput = '';
  public options: RouletteOption[] = [];
  public winners: RouletteOption[] = [];

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
  public winner: RouletteOption | null = null;
  public deleteWinnerAfterSpin = false;
  public multipleWinners = false;
  public skipWheelTransition = false;
  public currentRotation = 0;
  public wheelRotation = 0;
  private pendingWinnerIndex: number | null = null;

  constructor(private readonly rouletteFacade: RandomRouletteFacade) {
    this.rouletteFacade.initializeState();

    this.rouletteFacade.options$
      .pipe(takeUntilDestroyed())
      .subscribe((options) => {
        this.options = options;
        const nextInput = options.map((option) => option.value).join('\n');
        if (this.optionsInput !== nextInput) {
          this.optionsInput = nextInput;
        }
      });

    this.rouletteFacade.winner$
      .pipe(takeUntilDestroyed())
      .subscribe((winner) => {
        this.winner = winner;
      });

    this.rouletteFacade.winners$
      .pipe(takeUntilDestroyed())
      .subscribe((winners) => {
        this.winners = winners;
      });

    this.rouletteFacade.deleteWinnerAfterSpin$
      .pipe(takeUntilDestroyed())
      .subscribe((enabled) => {
        this.deleteWinnerAfterSpin = enabled;
      });

    this.rouletteFacade.multipleWinners$
      .pipe(takeUntilDestroyed())
      .subscribe((enabled) => {
        this.multipleWinners = enabled;
      });
  }

  public get count(): number {
    return this.options.length;
  }

  public get segmentAngle(): number {
    return this.count > 0 ? 360 / this.count : 360;
  }

  public getSegmentColor(index: number): string {
    return this.segmentColors[index % this.segmentColors.length];
  }

  /** Fondo circular con porciones sólidas (conic-gradient) para cualquier N. */
  public get wheelGradient(): string {
    const n = this.count;
    if (n === 0) {
      return `conic-gradient(from 0deg, rgba(255, 255, 255, 0.08) 0deg 360deg)`;
    }

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
    this.skipWheelTransition = false;
    this.spinning = true;
    this.rouletteFacade.setWinner(null);

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

  public onOptionsInputChange(): void {
    this.rouletteFacade.setOptions(this.parseOptionsInput(this.optionsInput));
    this.rouletteFacade.setWinner(null);
    this.rouletteFacade.clearWinners();
    this.pendingWinnerIndex = null;
  }

  public resetAll(): void {
    this.rouletteFacade.resetAll();
    this.optionsInput = DEFAULT_RANDOM_ROULETTE_OPTIONS.map((option) => option.value).join('\n');
    this.skipWheelTransition = true;
    this.currentRotation = 0;
    this.wheelRotation = 0;
    this.spinning = false;
    this.pendingWinnerIndex = null;
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
    const pickedWinner = this.options[winnerIndex] ?? null;
    this.rouletteFacade.setWinner(pickedWinner);
    if (this.multipleWinners && pickedWinner) {
      this.rouletteFacade.addWinner(pickedWinner);
    }

    const shouldDeleteWinner = this.multipleWinners || this.deleteWinnerAfterSpin;
    if (shouldDeleteWinner && pickedWinner) {
      this.rouletteFacade.removeWinnerFromPool(pickedWinner);
      this.skipWheelTransition = true;
      this.currentRotation = 0;
      this.wheelRotation = 0;
    }

    this.pendingWinnerIndex = null;
    this.spinning = false;
  }

  public onDeleteWinnerAfterSpinChange(enabled: boolean): void {
    this.rouletteFacade.setDeleteWinnerAfterSpin(enabled);
  }

  public onMultipleWinnersChange(enabled: boolean): void {
    this.rouletteFacade.setMultipleWinners(enabled);
    if (!enabled) {
      this.rouletteFacade.clearWinners();
    }
  }

  private parseOptionsInput(input: string): RouletteOption[] {
    const lines = input
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    return lines.map((value, index) => ({
      id: index + 1,
      value,
    }));
  }
}
