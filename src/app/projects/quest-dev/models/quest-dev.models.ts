export type QuestDevLanguage = 'es' | 'en';

export type QuestDevCategory = 'theoric' | 'frontend' | 'backend';

export type QuestDevRoundLength = 'short' | 'long' | 'xlong';

/** Any piece of content that must be available in both languages. */
export interface QuestDevText {
  es: string;
  en: string;
}

/**
 * Authoring shape of a question: the correct answer is kept apart from the two
 * distractors so a bank file can never mark the wrong option as correct.
 */
export interface QuestDevQuestion {
  id: string;
  topic: string;
  prompt: QuestDevText;
  answer: QuestDevText;
  distractors: [QuestDevText, QuestDevText];
  explanation: QuestDevText;
}

/** Runtime shape of an option, already shuffled for a specific round. */
export interface QuestDevRoundOption {
  id: string;
  text: QuestDevText;
  isCorrect: boolean;
}

export interface QuestDevRoundQuestion {
  id: string;
  topic: string;
  prompt: QuestDevText;
  explanation: QuestDevText;
  options: QuestDevRoundOption[];
  correctOptionId: string;
}

export interface QuestDevRound {
  category: QuestDevCategory;
  questions: QuestDevRoundQuestion[];
}

export interface QuestDevCategoryMeta {
  id: QuestDevCategory;
  icon: string;
  label: QuestDevText;
  description: QuestDevText;
}
