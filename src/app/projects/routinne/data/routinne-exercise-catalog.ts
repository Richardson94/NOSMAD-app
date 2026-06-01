export interface RoutinneExerciseDef {
  id: string;
  name: string;
  /** Path under `src/assets` (served as `/assets/...`). */
  image: string;
}

export const ROUTINNE_EXERCISE_CATALOG: RoutinneExerciseDef[] = [
  { id: 'treadmill', name: 'Treadmill', image: 'assets/exercises/treadmill.webp' },
  { id: 'hack-squat', name: 'Hack squat', image: 'assets/exercises/hack squat.png' },
  { id: 'leg-press', name: 'Leg press', image: 'assets/exercises/leg press.png' },
  { id: 'seated-leg-extension', name: 'Seated leg extension', image: 'assets/exercises/seated leg extension.webp' },
  { id: 'seated-leg-curl', name: 'Seated leg curl', image: 'assets/exercises/seated leg curl.png' },
  { id: 'lying-leg-curl', name: 'Lying leg curl', image: 'assets/exercises/lying leg curl.webp' },
  { id: 'abductor-machine', name: 'Abductor machine', image: 'assets/exercises/abductor machine.webp' },
  { id: 'adductor-machine', name: 'Adductor machine', image: 'assets/routinne/exercises/adductor-machine.svg' },
  { id: 'crunch-machine', name: 'Abdominal crunch machine', image: 'assets/exercises/crunch machine.webp' },
  {
    id: 'ab-lower-back-machine',
    name: 'Abdominal / lower back machine',
    image: 'assets/exercises/ab lower back machine.jpg',
  },
  { id: 'pec-deck', name: 'Pec deck / Butterfly', image: 'assets/exercises/pec deck.webp' },
  { id: 'shoulder-press', name: 'Shoulder press machine', image: 'assets/routinne/exercises/shoulder-press.svg' },
  {
    id: 'shoulder-press-convergent',
    name: 'Shoulder press (convergent)',
    image: 'assets/exercises/shoulder press convergent.webp',
  },
  { id: 'triceps-high-pulley', name: 'Triceps high pulley', image: 'assets/exercises/triceps high pulley.webp' },
  {
    id: 'combo-biceps-triceps',
    name: 'Combo biceps / triceps machine',
    image: 'assets/exercises/combo biceps triceps.webp',
  },
  { id: 'adjustable-pulley', name: 'Adjustable pulley', image: 'assets/exercises/adjustable pulley.webp' },
  { id: 'lat-pulldown', name: 'Lat pulldown', image: 'assets/exercises/lat pulldown.webp' },
  { id: 'seated-low-row', name: 'Seated cable low row', image: 'assets/exercises/seated low row.webp' },
  { id: 'rear-delt-machine', name: 'Rear delt machine', image: 'assets/exercises/rear delt machine.webp' },
  { id: 'low-pulley', name: 'Low pulley', image: 'assets/exercises/low pulley.webp' },
  { id: 'biceps-cable-curl', name: 'Biceps cable curl', image: 'assets/exercises/biceps cable curl.webp' },
  { id: 'back-extension-machine', name: 'Back extension machine', image: 'assets/exercises/back extension machine.webp' },
  { id: 'flat-bench', name: 'Flat bench', image: 'assets/exercises/flat bench.webp' },
  { id: 'incline-bench', name: 'Incline bench', image: 'assets/exercises/incline bench.webp' },
  { id: 'preacher-bench', name: 'Preacher bench', image: 'assets/exercises/preacher bench.webp' },
  { id: 'squat-rack', name: 'Squat rack', image: 'assets/exercises/squat rack.webp' },
  { id: 'roman-chair', name: 'Roman chair', image: 'assets/routinne/exercises/roman-chair.svg' },
  { id: 'ab-bench', name: 'Ab bench', image: 'assets/routinne/exercises/ab-bench.svg' },
  { id: 'smith-machine', name: 'Smith machine', image: 'assets/routinne/exercises/smith-machine.svg' },
  { id: 'elliptical', name: 'Elliptical', image: 'assets/routinne/exercises/elliptical.svg' },
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
  'Adductor machine': 'adductor-machine',
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
