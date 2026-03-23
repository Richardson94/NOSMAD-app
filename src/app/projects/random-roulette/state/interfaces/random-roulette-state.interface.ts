import { RouletteOption } from './random-roulette-option.interface';

export interface RandomRouletteState {
  options: RouletteOption[];
  winner: RouletteOption | null;
  winners: RouletteOption[];
  /** Si es true, el ganador se quita del pool al terminar el giro. */
  deleteWinnerAfterSpin: boolean;
  /** Si es true, se acumulan ganadores consecutivos sin repetir. */
  multipleWinners: boolean;
}
