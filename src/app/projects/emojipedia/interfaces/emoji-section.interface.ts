import { EmojiItem } from './emoji-item.interface';

/** Grupo de emojis (como en Emojipedia: Smileys, People, …). */
export interface EmojiSection {
  id: string;
  titleEn: string;
  titleEs: string;
  items: EmojiItem[];
}
