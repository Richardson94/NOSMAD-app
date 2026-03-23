import { createFeature, createReducer, on } from '@ngrx/store';
import { randomRouletteActions } from '../actions/random-roulette.actions';
import { RANDOM_ROULETTE_FEATURE_KEY, DEFAULT_RANDOM_ROULETTE_OPTIONS } from '../random-roulette.constants';
import { RandomRouletteState } from '../interfaces/random-roulette-state.interface';
import { RouletteOption } from '../interfaces/random-roulette-option.interface';

export const initialRandomRouletteState: RandomRouletteState = {
  options: DEFAULT_RANDOM_ROULETTE_OPTIONS,
  winner: null,
  winners: [],
  deleteWinnerAfterSpin: false,
  multipleWinners: false,
};

function sanitizeOptions(options: RouletteOption[] | undefined): RouletteOption[] {
  if (!Array.isArray(options)) {
    return [];
  }

  return options
    .filter((option) => option && typeof option.value === 'string')
    .map((option, index) => ({
      id: index + 1,
      value: option.value.trim(),
    }))
    .filter((option) => option.value.length > 0);
}

export const randomRouletteFeature = createFeature({
  name: RANDOM_ROULETTE_FEATURE_KEY,
  reducer: createReducer(
    initialRandomRouletteState,
    on(randomRouletteActions.setOptions, (state, { options }) => ({
      ...state,
      options: sanitizeOptions(options),
      winner: null,
      winners: [],
    })),
    on(randomRouletteActions.setWinner, (state, { winner }) => ({
      ...state,
      winner,
    })),
    on(randomRouletteActions.addWinner, (state, { winner }) => ({
      ...state,
      winners: [...state.winners, winner],
    })),
    on(randomRouletteActions.clearWinners, (state) => ({
      ...state,
      winners: [],
    })),
    on(randomRouletteActions.setDeleteWinnerAfterSpin, (state, { enabled }) => ({
      ...state,
      deleteWinnerAfterSpin: enabled,
    })),
    on(randomRouletteActions.setMultipleWinners, (state, { enabled }) => ({
      ...state,
      multipleWinners: enabled,
      // Al activar multiple winners, delete winner queda forzado
      deleteWinnerAfterSpin: enabled ? true : state.deleteWinnerAfterSpin,
      winners: enabled ? state.winners : [],
    })),
    on(randomRouletteActions.removeWinnerFromPool, (state, { winner }) => {
      const nextOptions = state.options.filter((option) => option.id !== winner.id);
      return {
        ...state,
        options: sanitizeOptions(nextOptions),
        // Mantenemos `winner` visible hasta el siguiente giro.
      };
    }),
    on(randomRouletteActions.resetAll, () => initialRandomRouletteState),
    on(randomRouletteActions.hydrateFromStorage, (state, { state: persistedState }) => {
      const options = sanitizeOptions(persistedState.options);
      const winner = persistedState.winner ?? null;
      const winners = sanitizeOptions(persistedState.winners);
      const deleteWinnerAfterSpin =
        typeof persistedState.deleteWinnerAfterSpin === 'boolean'
          ? persistedState.deleteWinnerAfterSpin
          : state.deleteWinnerAfterSpin;
      const multipleWinners =
        typeof persistedState.multipleWinners === 'boolean'
          ? persistedState.multipleWinners
          : state.multipleWinners;
      const effectiveDeleteWinnerAfterSpin =
        multipleWinners ? true : deleteWinnerAfterSpin;

      if (!winner) {
        return {
          ...state,
          options: options.length > 0 ? options : state.options,
          winner: null,
          winners,
          deleteWinnerAfterSpin: effectiveDeleteWinnerAfterSpin,
          multipleWinners,
        };
      }

      const matchedWinner = options.find((option) => option.value === winner.value);

      return {
        ...state,
        options: options.length > 0 ? options : state.options,
        winner: matchedWinner ?? null,
        winners,
        deleteWinnerAfterSpin: effectiveDeleteWinnerAfterSpin,
        multipleWinners,
      };
    })
  ),
});
