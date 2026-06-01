export interface RoutinneExerciseDef {
  id: string;
  name: string;
  /** Path under `src/assets` (served as `/assets/...`). */
  image: string;
}

/** Image path: `assets/images/{id}.png` */
function exerciseImage(id: string): string {
  return `assets/images/${id}.png`;
}

export const ROUTINNE_EXERCISE_CATALOG: RoutinneExerciseDef[] = [
  { id: 'treadmill', name: 'Treadmill', image: exerciseImage('treadmill') },
  { id: 'hack-squat', name: 'Hack squat', image: exerciseImage('hack-squat') },
  { id: 'leg-press', name: 'Leg press', image: exerciseImage('leg-press') },
  { id: 'seated-leg-extension', name: 'Seated leg extension', image: exerciseImage('seated-leg-extension') },
  { id: 'seated-leg-curl', name: 'Seated leg curl', image: exerciseImage('seated-leg-curl') },
  { id: 'lying-leg-curl', name: 'Lying leg curl', image: exerciseImage('lying-leg-curl') },
  { id: 'abductor-machine', name: 'Abductor machine', image: exerciseImage('abductor-machine') },
  { id: 'crunch-machine', name: 'Abdominal crunch machine', image: exerciseImage('crunch-machine') },
  {
    id: 'ab-lower-back-machine',
    name: 'Abdominal / lower back machine',
    image: exerciseImage('ab-lower-back-machine'),
  },
  { id: 'pec-deck', name: 'Pec deck / Butterfly', image: exerciseImage('pec-deck') },
  { id: 'shoulder-press', name: 'Shoulder press machine', image: exerciseImage('shoulder-press') },
  {
    id: 'shoulder-press-convergent',
    name: 'Shoulder press (convergent)',
    image: exerciseImage('shoulder-press-convergent'),
  },
  { id: 'triceps-high-pulley', name: 'Triceps high pulley', image: exerciseImage('triceps-high-pulley') },
  {
    id: 'combo-biceps-triceps',
    name: 'Combo biceps / triceps machine',
    image: exerciseImage('combo-biceps-triceps'),
  },
  { id: 'adjustable-pulley', name: 'Adjustable pulley', image: exerciseImage('adjustable-pulley') },
  { id: 'lat-pulldown', name: 'Lat pulldown', image: exerciseImage('lat-pulldown') },
  { id: 'seated-low-row', name: 'Seated cable low row', image: exerciseImage('seated-low-row') },
  { id: 'rear-delt-machine', name: 'Rear delt machine', image: exerciseImage('rear-delt-machine') },
  { id: 'low-pulley', name: 'Low pulley', image: exerciseImage('low-pulley') },
  { id: 'biceps-cable-curl', name: 'Biceps cable curl', image: exerciseImage('biceps-cable-curl') },
  { id: 'back-extension-machine', name: 'Back extension machine', image: exerciseImage('back-extension-machine') },
  { id: 'flat-bench', name: 'Flat bench', image: exerciseImage('flat-bench') },
  { id: 'incline-bench', name: 'Incline bench', image: exerciseImage('incline-bench') },
  { id: 'preacher-bench', name: 'Preacher bench', image: exerciseImage('preacher-bench') },
  { id: 'squat-rack', name: 'Squat rack', image: exerciseImage('squat-rack') },
  { id: 'roman-chair', name: 'Roman chair', image: exerciseImage('roman-chair') },
  { id: 'ab-bench', name: 'Ab bench', image: exerciseImage('ab-bench') },
  { id: 'smith-machine', name: 'Smith machine', image: exerciseImage('smith-machine') },
  { id: 'elliptical', name: 'Elliptical', image: exerciseImage('elliptical') },
];

export const ROUTINNE_EXERCISE_BY_ID = new Map<string, RoutinneExerciseDef>(
  ROUTINNE_EXERCISE_CATALOG.map((e) => [e.id, e])
);

/** Previous Spanish / mixed labels → stable `id` (for localStorage migration). */
const LEGACY_TO_ID: Record<string, string> = {
  Caminadora: 'treadmill',
  'Hack squat': 'hack-squat',
  'Prensa de piernas': 'leg-press',
  'Seated leg extension': 'seated-leg-extension',
  'Seated leg curl': 'seated-leg-curl',
  'Lying leg curl': 'lying-leg-curl',
  'Abductor machine': 'abductor-machine',
  'Máquina de crunch abdominal': 'crunch-machine',
  'Abdominal / lower back machine': 'ab-lower-back-machine',
  'Pec deck / Butterfly': 'pec-deck',
  'Shoulder press machine': 'shoulder-press',
  'Shoulder press convergent': 'shoulder-press-convergent',
  'Tríceps polea alta': 'triceps-high-pulley',
  'Máquina combinada bíceps/tríceps': 'combo-biceps-triceps',
  'Polea ajustable': 'adjustable-pulley',
  'Polea alta (lat pulldown)': 'lat-pulldown',
  'Seated cable low row': 'seated-low-row',
  'Rear delt machine': 'rear-delt-machine',
  'Polea baja': 'low-pulley',
  'Curl de bíceps en polea': 'biceps-cable-curl',
  'Back extension machine': 'back-extension-machine',
  'Banco plano': 'flat-bench',
  'Banco inclinado': 'incline-bench',
  'Banco predicador': 'preacher-bench',
  'Squat rack': 'squat-rack',
  'Banco romano': 'roman-chair',
  'Banco abdominal': 'ab-bench',
  'Smith machine': 'smith-machine',
  Eliptica: 'elliptical',
};

export function migrateExerciseRef(raw: string): string {
  if (ROUTINNE_EXERCISE_BY_ID.has(raw)) {
    return raw;
  }
  const byName = ROUTINNE_EXERCISE_CATALOG.find((e) => e.name === raw)?.id;
  if (byName) {
    return byName;
  }
  return LEGACY_TO_ID[raw] ?? raw;
}

export function exerciseDisplayName(id: string): string {
  return ROUTINNE_EXERCISE_BY_ID.get(id)?.name ?? id;
}

/** Catalog entries sorted A→Z by display name (for picker UIs). */
export function catalogSortedAlphabetically(
  catalog: readonly RoutinneExerciseDef[] = ROUTINNE_EXERCISE_CATALOG
): RoutinneExerciseDef[] {
  return [...catalog].sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
}

export function orderExerciseIds(ids: string[]): string[] {
  const set = new Set(ids);
  return ROUTINNE_EXERCISE_CATALOG.filter((e) => set.has(e.id)).map((e) => e.id);
}
