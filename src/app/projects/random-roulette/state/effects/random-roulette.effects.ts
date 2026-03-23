import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatLatestFrom } from '@ngrx/operators';
import { map, tap } from 'rxjs/operators';
import { randomRouletteActions } from '../actions/random-roulette.actions';
import { RANDOM_ROULETTE_STORAGE_KEY } from '../random-roulette.constants';
import {
  selectRandomRouletteDeleteWinnerAfterSpin,
  selectRandomRouletteMultipleWinners,
  selectRandomRouletteOptions,
  selectRandomRouletteWinners,
  selectRandomRouletteWinner,
} from '../selectors/random-roulette.selectors';

@Injectable()
export class RandomRouletteEffects {
  readonly initializeFromStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(randomRouletteActions.initializeState),
      map(() => {
        const rawState = localStorage.getItem(RANDOM_ROULETTE_STORAGE_KEY);
        if (!rawState) {
          return randomRouletteActions.hydrateFromStorage({ state: {} });
        }

        try {
          const parsedState = JSON.parse(rawState);
          return randomRouletteActions.hydrateFromStorage({ state: parsedState });
        } catch {
          return randomRouletteActions.hydrateFromStorage({ state: {} });
        }
      })
    )
  );

  readonly persistToStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          randomRouletteActions.setOptions,
          randomRouletteActions.setWinner,
          randomRouletteActions.addWinner,
          randomRouletteActions.clearWinners,
          randomRouletteActions.setDeleteWinnerAfterSpin,
          randomRouletteActions.setMultipleWinners,
          randomRouletteActions.removeWinnerFromPool,
          randomRouletteActions.resetAll
        ),
        concatLatestFrom(() => [
          this.store.select(selectRandomRouletteOptions),
          this.store.select(selectRandomRouletteWinner),
          this.store.select(selectRandomRouletteWinners),
          this.store.select(selectRandomRouletteDeleteWinnerAfterSpin),
          this.store.select(selectRandomRouletteMultipleWinners),
        ]),
        tap(([, options, winner, winners, deleteWinnerAfterSpin, multipleWinners]) => {
          localStorage.setItem(
            RANDOM_ROULETTE_STORAGE_KEY,
            JSON.stringify({
              options,
              winner,
              winners,
              deleteWinnerAfterSpin,
              multipleWinners,
            })
          );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store
  ) {}
}
