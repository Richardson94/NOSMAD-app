import type { QuestDevQuestion } from '../../models/quest-dev.models';
import { THEORIC_ARCHITECTURE_GIT_QUESTIONS } from './architecture-git.questions';
import { THEORIC_DATA_STRUCTURES_QUESTIONS } from './data-structures.questions';
import { THEORIC_DESIGN_PATTERNS_QUESTIONS } from './design-patterns.questions';
import { THEORIC_OOP_SOLID_QUESTIONS } from './oop-solid.questions';
import { THEORIC_TESTING_QUALITY_QUESTIONS } from './testing-quality.questions';

export const THEORIC_QUESTIONS: QuestDevQuestion[] = [
  ...THEORIC_OOP_SOLID_QUESTIONS,
  ...THEORIC_DESIGN_PATTERNS_QUESTIONS,
  ...THEORIC_DATA_STRUCTURES_QUESTIONS,
  ...THEORIC_TESTING_QUALITY_QUESTIONS,
  ...THEORIC_ARCHITECTURE_GIT_QUESTIONS,
];
