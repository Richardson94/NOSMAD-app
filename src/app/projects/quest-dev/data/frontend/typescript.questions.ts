import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_TYPESCRIPT_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-ts-01',
    topic: 'unknown y any',
    prompt: {
      es: '¿Cuál es la diferencia entre unknown y any?',
      en: 'What is the difference between unknown and any?',
    },
    answer: {
      es: 'unknown te obliga a comprobar el tipo antes de usar el valor. any apaga la comprobacion y deja pasar cualquier uso.',
      en: 'unknown forces you to check the type before using the value. any turns checking off and allows any use.',
    },
    distractors: [
      {
        es: 'unknown solo acepta numeros y strings. any acepta tambien objetos.',
        en: 'unknown only accepts numbers and strings. any also accepts objects.',
      },
      {
        es: 'Son alias. En modo strict el compilador avisa igual con los dos.',
        en: 'They are aliases. In strict mode the compiler warns the same way for both.',
      },
    ],
    explanation: {
      es: 'Para una respuesta HTTP o un JSON externo, unknown es la opcion segura. any abre un agujero que se contagia.',
      en: 'For an HTTP response or external JSON, unknown is the safe choice. any opens a hole that spreads.',
    },
  },
  {
    id: 'fe-ts-02',
    topic: 'type e interface',
    prompt: {
      es: '¿Cuál es la diferencia entre un type y una interface?',
      en: 'What is the difference between a type and an interface?',
    },
    answer: {
      es: 'Las dos pueden describir un objeto. Una interface se puede reabrir y fusionar. Un type tambien puede nombrar uniones, tuplas e intersecciones.',
      en: 'Both can describe an object. An interface can be reopened and merged. A type can also name unions, tuples and intersections.',
    },
    distractors: [
      {
        es: 'Una clase solo puede implementar una interface. Un type no vale en implements.',
        en: 'A class can only implement an interface. A type cannot be used in implements.',
      },
      {
        es: 'Un type existe en tiempo de ejecucion y una interface se borra al compilar.',
        en: 'A type exists at runtime and an interface is erased at compile time.',
      },
    ],
    explanation: {
      es: 'Para la forma de un objeto, elige la que el equipo ya use. La fusion de declaraciones es lo propio de interface.',
      en: 'For an object shape, pick whichever the team already uses. Declaration merging belongs to interface.',
    },
  },
  {
    id: 'fe-ts-03',
    topic: 'Uniones',
    prompt: {
      es: '¿Qué es un tipo union y como se usa?',
      en: 'What is a union type and how do you use it?',
    },
    answer: {
      es: 'Es un valor que puede ser uno de varios tipos, escrito con |. Antes de usar un campo que no comparten, hay que estrechar con un if.',
      en: 'It is a value that may be one of several types, written with |. Before using a field they do not share, you narrow it with an if.',
    },
    distractors: [
      {
        es: 'Obliga a que el valor cumpla todos los tipos a la vez, igual que un &.',
        en: 'It requires the value to satisfy every type at once, the same as &.',
      },
      {
        es: 'El compilador elige solo el miembro correcto en ejecucion, sin que escribas una comprobacion.',
        en: 'The compiler picks the right member at runtime on its own, with no check written by you.',
      },
    ],
    explanation: {
      es: 'Un id que es string | number es una union. Tras if (typeof id === "string") ya puedes usar metodos de string.',
      en: 'An id that is string | number is a union. After if (typeof id === "string") you can use string methods.',
    },
  },
  {
    id: 'fe-ts-04',
    topic: 'Genericos',
    prompt: {
      es: '¿Para qué sirve un generico?',
      en: 'What is a generic for?',
    },
    answer: {
      es: 'Para escribir una funcion o un tipo que funcione con varios tipos sin perder cual entra y cual sale, como identity o una lista.',
      en: 'To write a function or a type that works with several types without losing what goes in and what comes out, such as an identity function or a list.',
    },
    distractors: [
      {
        es: 'Para borrar el tipo y tratar el valor como any dentro de la funcion.',
        en: 'To erase the type and treat the value as any inside the function.',
      },
      {
        es: 'Para crear una clase nueva en ejecucion por cada tipo que uses.',
        en: 'To create a new class at runtime for every type you use.',
      },
    ],
    explanation: {
      es: 'function primero<T>(items: T[]): T devuelve el mismo tipo que hay en el array, no un any.',
      en: 'function first<T>(items: T[]): T returns the same type that is in the array, not an any.',
    },
  },
  {
    id: 'fe-ts-05',
    topic: 'Enum',
    prompt: {
      es: '¿En qué se diferencia un enum de una union de strings?',
      en: 'How does an enum differ from a union of strings?',
    },
    answer: {
      es: 'El enum es un objeto que sigue existiendo en el JavaScript emitido. La union de strings solo existe para el compilador y desaparece al construir.',
      en: 'The enum is an object that still exists in the emitted JavaScript. The string union exists only for the compiler and disappears at build time.',
    },
    distractors: [
      {
        es: 'Los dos se borran por completo. Elegir uno u otro es solo estilo.',
        en: 'Both are erased completely. Choosing one or the other is only style.',
      },
      {
        es: 'La union de strings crea un objeto con las claves y el enum no deja nada en ejecucion.',
        en: 'The string union creates an object with the keys and the enum leaves nothing at runtime.',
      },
    ],
    explanation: {
      es: 'Muchos equipos prefieren una union, o un objeto as const, para no meter un objeto extra en el bundle.',
      en: 'Many teams prefer a union, or an as const object, so they do not add an extra object to the bundle.',
    },
  },
  {
    id: 'fe-ts-06',
    topic: 'Restriccion generica',
    prompt: {
      es: '¿Qué significa T extends { id: string } en una funcion generica?',
      en: 'What does T extends { id: string } mean on a generic function?',
    },
    answer: {
      es: 'Que T puede ser cualquier tipo que tenga al menos un id string. Puede traer mas campos.',
      en: 'That T can be any type that has at least a string id. It may bring more fields.',
    },
    distractors: [
      {
        es: 'Que T tiene que ser exactamente ese objeto. Un campo de mas es un error.',
        en: 'That T must be exactly that object. An extra field is an error.',
      },
      {
        es: 'Que la funcion crea la propiedad id en ejecucion si el objeto no la trae.',
        en: 'That the function creates the id property at runtime if the object does not have it.',
      },
    ],
    explanation: {
      es: 'extends aqui no es herencia de clases. Es el minimo que el tipo tiene que cumplir.',
      en: 'extends here is not class inheritance. It is the minimum the type must satisfy.',
    },
  },
  {
    id: 'fe-ts-07',
    topic: 'Null',
    prompt: {
      es: '¿Qué comprueba strictNullChecks?',
      en: 'What does strictNullChecks check?',
    },
    answer: {
      es: 'Que null y undefined no se puedan asignar a un string, un number u otro tipo salvo que los pongas en la union.',
      en: 'That null and undefined cannot be assigned to a string, a number or another type unless you put them in the union.',
    },
    distractors: [
      {
        es: 'Inserta ifs en el JavaScript generado para que un null no reviente en el navegador.',
        en: 'It inserts ifs into the generated JavaScript so a null does not crash in the browser.',
      },
      {
        es: 'Obliga a inicializar los campos de clase. No tiene que ver con null en los tipos.',
        en: 'It forces class fields to be initialised. It has nothing to do with null in the types.',
      },
    ],
    explanation: {
      es: 'Con esa opcion, user.name falla si user es User | null hasta que compruebes que user existe. No genera codigo de guarda.',
      en: 'With that option, user.name fails if user is User | null until you check that user exists. It does not emit guard code.',
    },
  },
];
