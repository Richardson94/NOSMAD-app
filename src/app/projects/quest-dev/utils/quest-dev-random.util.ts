/** Returns a new array with the items shuffled (Fisher-Yates). */
export function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** Picks up to `size` random items without repetition. */
export function pickRandom<T>(items: readonly T[], size: number): T[] {
  return shuffle(items).slice(0, Math.max(0, Math.min(size, items.length)));
}
