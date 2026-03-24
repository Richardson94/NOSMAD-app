import { EmojiSection } from '../interfaces/emoji-section.interface';
import { activitiesSection } from './sections/activities.section';
import { animalsNatureSection } from './sections/animals-nature.section';
import { foodDrinkSection } from './sections/food-drink.section';
import { objectsSection } from './sections/objects.section';
import { peopleBodySection } from './sections/people-body.section';
import { smileysEmotionSection } from './sections/smileys-emotion.section';
import { symbolsSection } from './sections/symbols.section';
import { travelPlacesSection } from './sections/travel-places.section';

/** Catálogo completo agrupado por secciones (estilo Emojipedia). */
export const EMOJI_CATALOG: readonly EmojiSection[] = [
  smileysEmotionSection,
  peopleBodySection,
  animalsNatureSection,
  foodDrinkSection,
  travelPlacesSection,
  activitiesSection,
  objectsSection,
  symbolsSection,
] as const;
