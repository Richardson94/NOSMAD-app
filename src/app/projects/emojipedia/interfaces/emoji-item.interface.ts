/** Un emoji copiable con metadatos para búsqueda EN/ES. */
export interface EmojiItem {
  char: string;
  nameEn: string;
  nameEs: string;
  /** Términos extra en inglés (sinónimos, categorías). */
  keywordsEn?: string[];
  /** Términos extra en español. */
  keywordsEs?: string[];
}
