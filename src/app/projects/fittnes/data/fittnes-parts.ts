import type { FittnesPartId, FittnesSex } from '../models/fittnes.models';

export interface FittnesPartDef {
  id: FittnesPartId;
  name: string;
  how: string;
}

/** Reference circumference as a multiple of the wrist. Waist and hip should come down when high; the rest should come up when low. */
const BUILD = 'build';
const TRIM = 'trim';

type PartMode = typeof BUILD | typeof TRIM;

const MALE: Record<Exclude<FittnesPartId, 'wrist'>, { mul: number; mode: PartMode }> = {
  neck: { mul: 2.4, mode: BUILD },
  chest: { mul: 6.5, mode: BUILD },
  biceps: { mul: 2.35, mode: BUILD },
  forearm: { mul: 1.89, mode: BUILD },
  waist: { mul: 4.55, mode: TRIM },
  hip: { mul: 5.5, mode: TRIM },
  thigh: { mul: 3.45, mode: BUILD },
  calf: { mul: 2.21, mode: BUILD },
};

const FEMALE: Record<Exclude<FittnesPartId, 'wrist'>, { mul: number; mode: PartMode }> = {
  neck: { mul: 2.05, mode: BUILD },
  chest: { mul: 5.8, mode: BUILD },
  biceps: { mul: 1.9, mode: BUILD },
  forearm: { mul: 1.55, mode: BUILD },
  waist: { mul: 4.2, mode: TRIM },
  hip: { mul: 6.2, mode: TRIM },
  thigh: { mul: 3.4, mode: BUILD },
  calf: { mul: 2.15, mode: BUILD },
};

export const FITTNES_PARTS: FittnesPartDef[] = [
  {
    id: 'wrist',
    name: 'Muñeca',
    how: 'Justo debajo del hueso de la muñeca, mano relajada, cinta pegada sin apretar.',
  },
  {
    id: 'neck',
    name: 'Cuello',
    how: 'A media altura del cuello, mirada al frente, cinta horizontal.',
  },
  {
    id: 'chest',
    name: 'Pecho',
    how: 'A la altura de los pezones, brazos abajo, al final de una espiración normal.',
  },
  {
    id: 'biceps',
    name: 'Bíceps',
    how: 'El punto más ancho del brazo, brazo relajado al lado del cuerpo.',
  },
  {
    id: 'forearm',
    name: 'Antebrazo',
    how: 'El punto más ancho del antebrazo, puño cerrado suave.',
  },
  {
    id: 'waist',
    name: 'Abdomen',
    how: 'A la altura del ombligo, de pie, sin meter la panza ni inflarla.',
  },
  {
    id: 'hip',
    name: 'Cadera',
    how: 'La parte más ancha de cadera y glúteos, pies juntos.',
  },
  {
    id: 'thigh',
    name: 'Muslo',
    how: 'A mitad de camino entre la ingle y la rodilla, de pie, pierna relajada.',
  },
  {
    id: 'calf',
    name: 'Pantorrilla',
    how: 'La parte más ancha de la pantorrilla, de pie.',
  },
];

export const FITTNES_PART_BY_ID = new Map(FITTNES_PARTS.map((part) => [part.id, part]));

export const FITTNES_COIN_GOAL = 300;
export const FITTNES_WEIGHT_COINS = 1;
export const FITTNES_BODY_COINS = 3;

const RANGE = 0.08;

export function fittnesBand(
  sex: FittnesSex,
  wristMm: number,
  id: FittnesPartId
): { min: number; max: number; mode: PartMode } | null {
  if (id === 'wrist') {
    return null;
  }
  const table = sex === 'f' ? FEMALE : MALE;
  const rule = table[id];
  const center = wristMm * rule.mul;
  return {
    min: Math.round(center * (1 - RANGE)),
    max: Math.round(center * (1 + RANGE)),
    mode: rule.mode,
  };
}

export function fittnesMmToCm(mm: number): string {
  return (mm / 10).toFixed(1);
}
