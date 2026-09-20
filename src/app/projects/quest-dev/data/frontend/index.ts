import type { QuestDevQuestion } from '../../models/quest-dev.models';
import { FRONTEND_ANGULAR_COMPONENTS_QUESTIONS } from './angular-components-advanced.questions';
import { FRONTEND_ANGULAR_CORE_QUESTIONS } from './angular-core.questions';
import { FRONTEND_ANGULAR_DI_QUESTIONS } from './angular-di-advanced.questions';
import { FRONTEND_ANGULAR_SIGNALS_QUESTIONS } from './angular-signals.questions';
import { FRONTEND_CHANGE_DETECTION_QUESTIONS } from './angular-change-detection.questions';
import { FRONTEND_CSS_LAYOUT_QUESTIONS } from './css-layout.questions';
import { FRONTEND_FORMS_ADVANCED_QUESTIONS } from './angular-forms-advanced.questions';
import { FRONTEND_FORMS_ROUTING_QUESTIONS } from './forms-routing.questions';
import { FRONTEND_JAVASCRIPT_CORE_QUESTIONS } from './javascript-core.questions';
import { FRONTEND_PERFORMANCE_WEB_QUESTIONS } from './performance-web.questions';
import { FRONTEND_ROUTER_ADVANCED_QUESTIONS } from './angular-router-advanced.questions';
import { FRONTEND_RXJS_OPERATORS_QUESTIONS } from './rxjs-operators-advanced.questions';
import { FRONTEND_RXJS_PATTERNS_QUESTIONS } from './rxjs-patterns.questions';
import { FRONTEND_RXJS_QUESTIONS } from './rxjs.questions';
import { FRONTEND_SECURITY_TESTING_QUESTIONS } from './frontend-security-testing.questions';
import { FRONTEND_TYPESCRIPT_ADVANCED_QUESTIONS } from './typescript-advanced.questions';
import { FRONTEND_TYPESCRIPT_QUESTIONS } from './typescript.questions';
import { FRONTEND_WEB_PERFORMANCE_QUESTIONS } from './web-platform-performance.questions';

export const FRONTEND_QUESTIONS: QuestDevQuestion[] = [
  ...FRONTEND_ANGULAR_CORE_QUESTIONS,
  ...FRONTEND_ANGULAR_COMPONENTS_QUESTIONS,
  ...FRONTEND_ANGULAR_DI_QUESTIONS,
  ...FRONTEND_ANGULAR_SIGNALS_QUESTIONS,
  ...FRONTEND_CHANGE_DETECTION_QUESTIONS,
  ...FRONTEND_RXJS_QUESTIONS,
  ...FRONTEND_RXJS_OPERATORS_QUESTIONS,
  ...FRONTEND_RXJS_PATTERNS_QUESTIONS,
  ...FRONTEND_FORMS_ROUTING_QUESTIONS,
  ...FRONTEND_FORMS_ADVANCED_QUESTIONS,
  ...FRONTEND_ROUTER_ADVANCED_QUESTIONS,
  ...FRONTEND_TYPESCRIPT_QUESTIONS,
  ...FRONTEND_TYPESCRIPT_ADVANCED_QUESTIONS,
  ...FRONTEND_JAVASCRIPT_CORE_QUESTIONS,
  ...FRONTEND_CSS_LAYOUT_QUESTIONS,
  ...FRONTEND_PERFORMANCE_WEB_QUESTIONS,
  ...FRONTEND_WEB_PERFORMANCE_QUESTIONS,
  ...FRONTEND_SECURITY_TESTING_QUESTIONS,
];
