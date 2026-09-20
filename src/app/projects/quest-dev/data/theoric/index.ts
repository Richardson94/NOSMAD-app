import type { QuestDevQuestion } from '../../models/quest-dev.models';
import { THEORIC_ALGORITHMS_QUESTIONS } from './algorithms.questions';
import { THEORIC_ARCHITECTURE_GIT_QUESTIONS } from './architecture-git.questions';
import { THEORIC_ARCHITECTURE_PATTERNS_QUESTIONS } from './architecture-patterns.questions';
import { THEORIC_CLEAN_CODE_QUESTIONS } from './clean-code-refactoring.questions';
import { THEORIC_COMPLEXITY_ANALYSIS_QUESTIONS } from './complexity-analysis.questions';
import { THEORIC_CREATIONAL_PATTERNS_QUESTIONS } from './creational-patterns.questions';
import { THEORIC_DATA_STRUCTURES_QUESTIONS } from './data-structures.questions';
import { THEORIC_DATA_STRUCTURES_ADVANCED_QUESTIONS } from './data-structures-advanced.questions';
import { THEORIC_DESIGN_PATTERNS_QUESTIONS } from './design-patterns.questions';
import { THEORIC_DEVOPS_AGILE_QUESTIONS } from './devops-agile.questions';
import { THEORIC_DISTRIBUTED_SYSTEMS_QUESTIONS } from './distributed-systems.questions';
import { THEORIC_GIT_WORKFLOWS_QUESTIONS } from './git-workflows.questions';
import { THEORIC_OOP_FUNDAMENTALS_QUESTIONS } from './oop-fundamentals.questions';
import { THEORIC_OOP_SOLID_QUESTIONS } from './oop-solid.questions';
import { THEORIC_SOLID_ADVANCED_QUESTIONS } from './solid-advanced.questions';
import { THEORIC_STRUCTURAL_BEHAVIORAL_PATTERNS_QUESTIONS } from './structural-behavioral-patterns.questions';
import { THEORIC_TESTING_ADVANCED_QUESTIONS } from './testing-advanced.questions';
import { THEORIC_TESTING_QUALITY_QUESTIONS } from './testing-quality.questions';

export const THEORIC_QUESTIONS: QuestDevQuestion[] = [
  ...THEORIC_OOP_SOLID_QUESTIONS,
  ...THEORIC_SOLID_ADVANCED_QUESTIONS,
  ...THEORIC_OOP_FUNDAMENTALS_QUESTIONS,
  ...THEORIC_DESIGN_PATTERNS_QUESTIONS,
  ...THEORIC_CREATIONAL_PATTERNS_QUESTIONS,
  ...THEORIC_STRUCTURAL_BEHAVIORAL_PATTERNS_QUESTIONS,
  ...THEORIC_DATA_STRUCTURES_QUESTIONS,
  ...THEORIC_DATA_STRUCTURES_ADVANCED_QUESTIONS,
  ...THEORIC_ALGORITHMS_QUESTIONS,
  ...THEORIC_COMPLEXITY_ANALYSIS_QUESTIONS,
  ...THEORIC_TESTING_QUALITY_QUESTIONS,
  ...THEORIC_TESTING_ADVANCED_QUESTIONS,
  ...THEORIC_CLEAN_CODE_QUESTIONS,
  ...THEORIC_ARCHITECTURE_GIT_QUESTIONS,
  ...THEORIC_ARCHITECTURE_PATTERNS_QUESTIONS,
  ...THEORIC_DISTRIBUTED_SYSTEMS_QUESTIONS,
  ...THEORIC_GIT_WORKFLOWS_QUESTIONS,
  ...THEORIC_DEVOPS_AGILE_QUESTIONS,
];
