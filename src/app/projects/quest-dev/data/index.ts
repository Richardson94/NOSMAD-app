import type {
  QuestDevCategory,
  QuestDevQuestion,
  QuestDevRoundLength,
} from '../models/quest-dev.models';
import { BACKEND_QUESTIONS } from './backend';
import { FRONTEND_QUESTIONS } from './frontend';
import { THEORIC_QUESTIONS } from './theoric';

/** Target pool size per category; banks grow in batches until they reach it. */
export const QUEST_DEV_TARGET_BANK_SIZE = 300;

export const QUEST_DEV_ROUND_LENGTHS: Record<QuestDevRoundLength, number> = {
  short: 15,
  long: 40,
  xlong: 70,
};

export const QUEST_DEV_ROUND_LENGTH_IDS: QuestDevRoundLength[] = ['short', 'long', 'xlong'];

export const QUEST_DEV_BANKS: Record<QuestDevCategory, QuestDevQuestion[]> = {
  theoric: THEORIC_QUESTIONS,
  frontend: FRONTEND_QUESTIONS,
  backend: BACKEND_QUESTIONS,
};
