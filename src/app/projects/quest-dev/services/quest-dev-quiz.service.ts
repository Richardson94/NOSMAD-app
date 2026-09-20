import { Injectable } from '@angular/core';
import { QUEST_DEV_BANKS, QUEST_DEV_ROUND_SIZE } from '../data';
import type {
  QuestDevCategory,
  QuestDevQuestion,
  QuestDevRound,
  QuestDevRoundOption,
  QuestDevRoundQuestion,
} from '../models/quest-dev.models';
import { pickRandom, shuffle } from '../utils/quest-dev-random.util';

@Injectable({ providedIn: 'root' })
export class QuestDevQuizService {
  poolSize(category: QuestDevCategory): number {
    return QUEST_DEV_BANKS[category].length;
  }

  /** Round length, capped while a bank is still smaller than the round size. */
  roundSize(category: QuestDevCategory): number {
    return Math.min(QUEST_DEV_ROUND_SIZE, this.poolSize(category));
  }

  /** Random questions with their options shuffled, so answers have no memorable position. */
  buildRound(category: QuestDevCategory): QuestDevRound {
    const picked = pickRandom(QUEST_DEV_BANKS[category], this.roundSize(category));
    return {
      category,
      questions: picked.map((question) => this.toRoundQuestion(question)),
    };
  }

  private toRoundQuestion(question: QuestDevQuestion): QuestDevRoundQuestion {
    const correct: QuestDevRoundOption = {
      id: `${question.id}-correct`,
      text: question.answer,
      isCorrect: true,
    };
    const wrong: QuestDevRoundOption[] = question.distractors.map((text, index) => ({
      id: `${question.id}-wrong-${index}`,
      text,
      isCorrect: false,
    }));

    return {
      id: question.id,
      topic: question.topic,
      prompt: question.prompt,
      explanation: question.explanation,
      options: shuffle([correct, ...wrong]),
      correctOptionId: correct.id,
    };
  }
}
