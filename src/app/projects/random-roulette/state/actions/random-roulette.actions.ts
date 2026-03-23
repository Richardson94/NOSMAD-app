import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { RouletteOption } from '../interfaces/random-roulette-option.interface';
import { RandomRouletteState } from '../interfaces/random-roulette-state.interface';

export const randomRouletteActions = createActionGroup({
  source: 'Random Roulette',
  events: {
    'Initialize State': emptyProps(),
    'Set Options': props<{ options: RouletteOption[] }>(),
    'Set Winner': props<{ winner: RouletteOption | null }>(),
    'Add Winner': props<{ winner: RouletteOption }>(),
    'Clear Winners': emptyProps(),
    'Set Delete Winner After Spin': props<{ enabled: boolean }>(),
    'Set Multiple Winners': props<{ enabled: boolean }>(),
    'Remove Winner From Pool': props<{ winner: RouletteOption }>(),
    'Reset All': emptyProps(),
    'Hydrate From Storage': props<{ state: Partial<RandomRouletteState> }>(),
  },
});
