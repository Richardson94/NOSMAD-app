import { EmojiItem } from '../interfaces/emoji-item.interface';
import { EmojiSection } from '../interfaces/emoji-section.interface';

/** Quita marcas diacríticas y pasa a minúsculas para comparar ES/EN. */
export function normalizeSearchText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .trim();
}

function buildSearchBlob(item: EmojiItem): string {
  const parts = [
    item.nameEn,
    item.nameEs,
    ...(item.keywordsEn ?? []),
    ...(item.keywordsEs ?? []),
  ];
  return normalizeSearchText(parts.join(' '));
}

/** Coincide nombre o palabras clave en inglés o español (y mezcla de ambos). */
export function emojiItemMatchesQuery(item: EmojiItem, rawQuery: string): boolean {
  const q = normalizeSearchText(rawQuery);
  if (!q) {
    return true;
  }
  const blob = buildSearchBlob(item);
  const words = q.split(/\s+/).filter(Boolean);
  return words.every((w) => blob.includes(w));
}

/** Sin búsqueda: todas las secciones; con búsqueda: solo coincidencias por sección. */
export function filterEmojiSections(
  sections: EmojiSection[],
  rawQuery: string
): EmojiSection[] {
  const trimmed = rawQuery.trim();
  if (!trimmed) {
    return sections;
  }
  return sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => emojiItemMatchesQuery(item, trimmed)),
    }))
    .filter((section) => section.items.length > 0);
}
