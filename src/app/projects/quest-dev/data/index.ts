import type { QuestDevCategory, QuestDevQuestion } from '../models/quest-dev.models';
import { BACKEND_QUESTIONS } from './backend';
import { FRONTEND_QUESTIONS } from './frontend';
import { THEORIC_QUESTIONS } from './theoric';

/** Target pool size per category; banks grow in batches until they reach it. */
export const QUEST_DEV_TARGET_BANK_SIZE = 300;

/** Questions drawn for a round, capped by the available pool. */
export const QUEST_DEV_ROUND_SIZE = 70;

export const QUEST_DEV_BANKS: Record<QuestDevCategory, QuestDevQuestion[]> = {
  theoric: THEORIC_QUESTIONS,
  frontend: FRONTEND_QUESTIONS,
  backend: BACKEND_QUESTIONS,
};
