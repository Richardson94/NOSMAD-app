import type { QuestDevQuestion } from '../../models/quest-dev.models';
import { BACKEND_DATA_JPA_QUESTIONS } from './data-jpa.questions';
import { BACKEND_JAVA_COLLECTIONS_QUESTIONS } from './java-collections-streams.questions';
import { BACKEND_JAVA_CONCURRENCY_QUESTIONS } from './java-concurrency.questions';
import { BACKEND_JAVA_CORE_QUESTIONS } from './java-core.questions';
import { BACKEND_JAVA_LANGUAGE_QUESTIONS } from './java-language-advanced.questions';
import { BACKEND_JPA_HIBERNATE_QUESTIONS } from './jpa-hibernate-advanced.questions';
import { BACKEND_JVM_MEMORY_QUESTIONS } from './java-jvm-memory.questions';
import { BACKEND_MICROSERVICES_PATTERNS_QUESTIONS } from './microservices-patterns.questions';
import { BACKEND_MICROSERVICES_TESTING_QUESTIONS } from './microservices-testing.questions';
import { BACKEND_REST_API_DESIGN_QUESTIONS } from './rest-api-design.questions';
import { BACKEND_REST_SECURITY_QUESTIONS } from './rest-security.questions';
import { BACKEND_SECURITY_AUTH_QUESTIONS } from './security-auth.questions';
import { BACKEND_SPRING_BOOT_QUESTIONS } from './spring-boot-advanced.questions';
import { BACKEND_SPRING_CORE_QUESTIONS } from './spring-core.questions';
import { BACKEND_SPRING_DATA_QUESTIONS } from './spring-data-advanced.questions';
import { BACKEND_SPRING_WEB_QUESTIONS } from './spring-web-mvc.questions';
import { BACKEND_SQL_DATABASES_QUESTIONS } from './sql-databases.questions';
import { BACKEND_TESTING_DEVOPS_QUESTIONS } from './backend-testing-devops.questions';

export const BACKEND_QUESTIONS: QuestDevQuestion[] = [
  ...BACKEND_JAVA_CORE_QUESTIONS,
  ...BACKEND_JAVA_LANGUAGE_QUESTIONS,
  ...BACKEND_JAVA_COLLECTIONS_QUESTIONS,
  ...BACKEND_JAVA_CONCURRENCY_QUESTIONS,
  ...BACKEND_JVM_MEMORY_QUESTIONS,
  ...BACKEND_SPRING_CORE_QUESTIONS,
  ...BACKEND_SPRING_BOOT_QUESTIONS,
  ...BACKEND_SPRING_WEB_QUESTIONS,
  ...BACKEND_DATA_JPA_QUESTIONS,
  ...BACKEND_SPRING_DATA_QUESTIONS,
  ...BACKEND_JPA_HIBERNATE_QUESTIONS,
  ...BACKEND_SQL_DATABASES_QUESTIONS,
  ...BACKEND_REST_SECURITY_QUESTIONS,
  ...BACKEND_REST_API_DESIGN_QUESTIONS,
  ...BACKEND_SECURITY_AUTH_QUESTIONS,
  ...BACKEND_MICROSERVICES_TESTING_QUESTIONS,
  ...BACKEND_MICROSERVICES_PATTERNS_QUESTIONS,
  ...BACKEND_TESTING_DEVOPS_QUESTIONS,
];
