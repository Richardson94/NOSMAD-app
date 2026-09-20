import type { QuestDevQuestion } from '../../models/quest-dev.models';
import { FRONTEND_ANGULAR_CORE_QUESTIONS } from './angular-core.questions';
import { FRONTEND_FORMS_ROUTING_QUESTIONS } from './forms-routing.questions';
import { FRONTEND_PERFORMANCE_WEB_QUESTIONS } from './performance-web.questions';
import { FRONTEND_RXJS_QUESTIONS } from './rxjs.questions';
import { FRONTEND_TYPESCRIPT_QUESTIONS } from './typescript.questions';

export const FRONTEND_QUESTIONS: QuestDevQuestion[] = [
  ...FRONTEND_ANGULAR_CORE_QUESTIONS,
  ...FRONTEND_RXJS_QUESTIONS,
  ...FRONTEND_FORMS_ROUTING_QUESTIONS,
  ...FRONTEND_TYPESCRIPT_QUESTIONS,
  ...FRONTEND_PERFORMANCE_WEB_QUESTIONS,
];
