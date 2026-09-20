import type { QuestDevQuestion } from '../../models/quest-dev.models';
import { BACKEND_DATA_JPA_QUESTIONS } from './data-jpa.questions';
import { BACKEND_JAVA_CORE_QUESTIONS } from './java-core.questions';
import { BACKEND_MICROSERVICES_TESTING_QUESTIONS } from './microservices-testing.questions';
import { BACKEND_REST_SECURITY_QUESTIONS } from './rest-security.questions';
import { BACKEND_SPRING_CORE_QUESTIONS } from './spring-core.questions';

export const BACKEND_QUESTIONS: QuestDevQuestion[] = [
  ...BACKEND_JAVA_CORE_QUESTIONS,
  ...BACKEND_SPRING_CORE_QUESTIONS,
  ...BACKEND_DATA_JPA_QUESTIONS,
  ...BACKEND_REST_SECURITY_QUESTIONS,
  ...BACKEND_MICROSERVICES_TESTING_QUESTIONS,
];
