import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { randomRouletteActions } from '../actions/random-roulette.actions';
import { RouletteOption } from '../interfaces/random-roulette-option.interface';
import {
  selectRandomRouletteCount,
  selectRandomRouletteDeleteWinnerAfterSpin,
  selectRandomRouletteMultipleWinners,
  selectRandomRouletteOptions,
  selectRandomRouletteWinners,
  selectRandomRouletteWinner,
} from '../selectors/random-roulette.selectors';

@Injectable()
export class RandomRouletteFacade {
  readonly options$ = this.store.select(selectRandomRouletteOptions);
  readonly winner$ = this.store.select(selectRandomRouletteWinner);
  readonly winners$ = this.store.select(selectRandomRouletteWinners);
  readonly count$ = this.store.select(selectRandomRouletteCount);
  readonly deleteWinnerAfterSpin$ = this.store.select(selectRandomRouletteDeleteWinnerAfterSpin);
  readonly multipleWinners$ = this.store.select(selectRandomRouletteMultipleWinners);

  constructor(private readonly store: Store) {}

  initializeState(): void {
    this.store.dispatch(randomRouletteActions.initializeState());
  }

  setOptions(options: RouletteOption[]): void {
    this.store.dispatch(randomRouletteActions.setOptions({ options }));
  }

  setWinner(winner: RouletteOption | null): void {
    this.store.dispatch(randomRouletteActions.setWinner({ winner }));
  }

  addWinner(winner: RouletteOption): void {
    this.store.dispatch(randomRouletteActions.addWinner({ winner }));
  }

  clearWinners(): void {
    this.store.dispatch(randomRouletteActions.clearWinners());
  }

  resetAll(): void {
    this.store.dispatch(randomRouletteActions.resetAll());
  }

  setDeleteWinnerAfterSpin(enabled: boolean): void {
    this.store.dispatch(randomRouletteActions.setDeleteWinnerAfterSpin({ enabled }));
  }

  setMultipleWinners(enabled: boolean): void {
    this.store.dispatch(randomRouletteActions.setMultipleWinners({ enabled }));
  }

  removeWinnerFromPool(winner: RouletteOption): void {
    this.store.dispatch(randomRouletteActions.removeWinnerFromPool({ winner }));
  }
}
