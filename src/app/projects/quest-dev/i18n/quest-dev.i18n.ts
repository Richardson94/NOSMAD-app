import type { QuestDevCategoryMeta, QuestDevText } from '../models/quest-dev.models';

export const QUEST_DEV_UI = {
  tagline: {
    es: 'Simulador de entrevista para Senior Full Stack (Angular + Spring Boot)',
    en: 'Interview simulator for Senior Full Stack (Angular + Spring Boot)',
  },
  chooseArea: {
    es: 'Elige un área para empezar',
    en: 'Pick an area to start',
  },
  inBank: {
    es: 'en el banco',
    en: 'in the bank',
  },
  roundLabel: {
    es: 'Ronda',
    en: 'Round',
  },
  questions: {
    es: 'preguntas',
    en: 'questions',
  },
  language: {
    es: 'Idioma',
    en: 'Language',
  },
  back: {
    es: 'Volver',
    en: 'Back',
  },
  backToMenu: {
    es: 'Volver al menú',
    en: 'Back to menu',
  },
  question: {
    es: 'Pregunta',
    en: 'Question',
  },
  of: {
    es: 'de',
    en: 'of',
  },
  correct: {
    es: '¡Correcto!',
    en: 'Correct!',
  },
  incorrect: {
    es: 'Incorrecto',
    en: 'Incorrect',
  },
  correctAnswerIs: {
    es: 'La respuesta correcta es',
    en: 'The correct answer is',
  },
  tip: {
    es: 'Tip',
    en: 'Tip',
  },
  next: {
    es: 'Siguiente',
    en: 'Next',
  },
  finish: {
    es: 'Ver resultado',
    en: 'See result',
  },
  results: {
    es: 'Resultado',
    en: 'Result',
  },
  yourScore: {
    es: 'Tu puntaje',
    en: 'Your score',
  },
  hits: {
    es: 'Aciertos',
    en: 'Correct',
  },
  misses: {
    es: 'Errores',
    en: 'Wrong',
  },
  retry: {
    es: 'Nueva ronda',
    en: 'New round',
  },
  emptyBank: {
    es: 'Todavía no hay preguntas cargadas para esta área.',
    en: 'There are no questions loaded for this area yet.',
  },
  feedbackExcellent: {
    es: 'Nivel senior sólido. Estás listo para la entrevista.',
    en: 'Solid senior level. You are ready for the interview.',
  },
  feedbackGood: {
    es: 'Buen nivel, pero repasa los temas que fallaste.',
    en: 'Good level, but review the topics you missed.',
  },
  feedbackRegular: {
    es: 'Vas por buen camino: necesitas más práctica en esta área.',
    en: 'You are on track: this area needs more practice.',
  },
  feedbackLow: {
    es: 'Hay bases por reforzar antes de la entrevista.',
    en: 'There are fundamentals to reinforce before the interview.',
  },
} satisfies Record<string, QuestDevText>;

export const QUEST_DEV_CATEGORIES: QuestDevCategoryMeta[] = [
  {
    id: 'theoric',
    icon: '🧠',
    label: { es: 'Teórico', en: 'Theoric' },
    description: {
      es: 'POO, SOLID, patrones, estructuras de datos, complejidad, testing, Git y arquitectura.',
      en: 'OOP, SOLID, patterns, data structures, complexity, testing, Git and architecture.',
    },
  },
  {
    id: 'frontend',
    icon: '🎨',
    label: { es: 'Frontend', en: 'Frontend' },
    description: {
      es: 'Angular, RxJS, TypeScript, formularios, rendimiento y buenas prácticas de UI.',
      en: 'Angular, RxJS, TypeScript, forms, performance and UI best practices.',
    },
  },
  {
    id: 'backend',
    icon: '⚙️',
    label: { es: 'Backend', en: 'Backend' },
    description: {
      es: 'Java, Spring Boot, JPA, REST, seguridad, transacciones y microservicios.',
      en: 'Java, Spring Boot, JPA, REST, security, transactions and microservices.',
    },
  },
];
