import { createSelector } from '@ngrx/store';
import { randomRouletteFeature } from '../reducers/random-roulette.reducer';

export const selectRandomRouletteOptions = randomRouletteFeature.selectOptions;
export const selectRandomRouletteWinner = randomRouletteFeature.selectWinner;
export const selectRandomRouletteWinners = randomRouletteFeature.selectWinners;
export const selectRandomRouletteDeleteWinnerAfterSpin =
  randomRouletteFeature.selectDeleteWinnerAfterSpin;
export const selectRandomRouletteMultipleWinners =
  randomRouletteFeature.selectMultipleWinners;

export const selectRandomRouletteCount = createSelector(
  selectRandomRouletteOptions,
  (options) => options.length
);
