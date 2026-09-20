import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_TYPESCRIPT_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-ts-01',
    topic: 'Tipos',
    prompt: {
      es: '¿Cuál es la diferencia entre unknown y any?',
      en: 'What is the difference between unknown and any?',
    },
    answer: {
      es: 'unknown obliga a comprobar o acotar el tipo antes de usar el valor; any desactiva por completo la verificación.',
      en: 'unknown forces you to check or narrow the type before using the value; any disables checking entirely.',
    },
    distractors: [
      {
        es: 'unknown solo acepta valores primitivos y any acepta además objetos y funciones.',
        en: 'unknown only accepts primitive values while any also accepts objects and functions.',
      },
      {
        es: 'unknown es un alias de any que el compilador reporta como advertencia en modo estricto.',
        en: 'unknown is an alias of any that the compiler reports as a warning in strict mode.',
      },
    ],
    explanation: {
      es: 'Ambos aceptan cualquier valor al asignar, pero se comportan al revés al leer: con unknown no se puede acceder a propiedades ni invocar nada sin una comprobación previa, mientras any permite todo y propaga el agujero de tipos. Por eso unknown es la opción correcta para datos externos como una respuesta HTTP.',
      en: 'Both accept any value on assignment, but they behave the opposite way on read: with unknown you cannot access properties or call anything without narrowing first, whereas any allows everything and propagates the type hole. That is why unknown is the right choice for external data such as an HTTP response.',
    },
  },
  {
    id: 'fe-ts-02',
    topic: 'Tipos',
    prompt: {
      es: '¿Qué puede hacer una interface que un type alias no puede?',
      en: 'What can an interface do that a type alias cannot?',
    },
    answer: {
      es: 'Fusionarse por declaración: dos declaraciones con el mismo nombre se combinan en una sola.',
      en: 'Declaration merging: two declarations with the same name are combined into one.',
    },
    distractors: [
      {
        es: 'Extenderse a partir de otro tipo, ya que un type alias solo puede combinarse con intersecciones.',
        en: 'Extend another type, since a type alias can only be combined with intersections.',
      },
      {
        es: 'Ser implementada por una clase, porque un type alias no puede usarse en una cláusula implements.',
        en: 'Be implemented by a class, because a type alias cannot be used in an implements clause.',
      },
    ],
    explanation: {
      es: 'La fusión de declaraciones es exclusiva de interface y es lo que permite ampliar tipos de librerías externas. En cambio, una clase puede implementar un type alias que describa un objeto, y las intersecciones logran lo mismo que extends para la mayoría de los casos prácticos.',
      en: 'Declaration merging is exclusive to interface and is what lets you augment types from external libraries. A class, however, can implement a type alias describing an object shape, and intersections achieve the same as extends for most practical cases.',
    },
  },
  {
    id: 'fe-ts-03',
    topic: 'Type guards',
    prompt: {
      es: '¿Qué aporta declarar el retorno de una función como "value is Product" en lugar de boolean?',
      en: 'What does declaring a function return type as "value is Product" instead of boolean provide?',
    },
    answer: {
      es: 'El compilador acota el tipo de la variable en la rama donde la función devolvió true.',
      en: 'The compiler narrows the variable type in the branch where the function returned true.',
    },
    distractors: [
      {
        es: 'El compilador verifica en tiempo de ejecución que el objeto cumpla la forma de Product.',
        en: 'The compiler verifies at runtime that the object matches the Product shape.',
      },
      {
        es: 'Permite usar la función como validador en un cast, evitando el uso de "as" en el resto del código.',
        en: 'It allows using the function as a validator in a cast, avoiding "as" in the rest of the code.',
      },
    ],
    explanation: {
      es: 'Es una anotación de análisis de flujo: TypeScript confía en el predicado y trata la variable como Product dentro del if, sin necesidad de aserciones. La comprobación real sigue siendo responsabilidad del cuerpo de la función, porque los tipos desaparecen al compilar; si el predicado miente, el error aparece en ejecución.',
      en: 'It is a flow-analysis annotation: TypeScript trusts the predicate and treats the variable as Product inside the if, with no assertions needed. The actual check remains the responsibility of the function body, because types vanish at compile time; if the predicate lies, the failure shows up at runtime.',
    },
  },
  {
    id: 'fe-ts-04',
    topic: 'Tipos utilitarios',
    prompt: {
      es: '¿Qué produce Partial<Record<"a" | "b", number>>?',
      en: 'What does Partial<Record<"a" | "b", number>> produce?',
    },
    answer: {
      es: 'Un objeto con las claves "a" y "b" opcionales, ambas de tipo number.',
      en: 'An object with optional keys "a" and "b", both of type number.',
    },
    distractors: [
      {
        es: 'Un objeto con las claves "a" y "b" obligatorias cuyo valor puede ser number o undefined.',
        en: 'An object with required keys "a" and "b" whose value may be number or undefined.',
      },
      {
        es: 'Un objeto con claves arbitrarias de tipo string y valores opcionales de tipo number.',
        en: 'An object with arbitrary string keys and optional number values.',
      },
    ],
    explanation: {
      es: 'Record construye el tipo con esas dos claves obligatorias y Partial les añade el modificador opcional, así que { a: 1 } es válido. La segunda opción describe el efecto de exactOptionalPropertyTypes mal entendido: una clave obligatoria que acepta undefined sigue exigiendo que esté presente. Para claves arbitrarias haría falta Record<string, number>.',
      en: 'Record builds the type with those two required keys and Partial adds the optional modifier, so { a: 1 } is valid. The second option describes a misunderstanding of exactOptionalPropertyTypes: a required key accepting undefined still demands that the key be present. Arbitrary keys would need Record<string, number>.',
    },
  },
  {
    id: 'fe-ts-05',
    topic: 'Operadores',
    prompt: {
      es: '¿Cuándo devuelven resultados distintos value ?? fallback y value || fallback?',
      en: 'When do value ?? fallback and value || fallback return different results?',
    },
    answer: {
      es: 'Cuando value es un valor falsy válido como 0 o cadena vacía: ?? lo conserva y || lo reemplaza.',
      en: 'When value is a valid falsy value such as 0 or an empty string: ?? keeps it and || replaces it.',
    },
    distractors: [
      {
        es: 'Cuando value es undefined: ?? devuelve el fallback y || propaga undefined sin evaluarlo.',
        en: 'When value is undefined: ?? returns the fallback and || propagates undefined without evaluating it.',
      },
      {
        es: 'Nunca; ?? es solo la versión con tipado estricto de || que TypeScript recomienda en modo strict.',
        en: 'Never; ?? is just the strictly typed version of || that TypeScript recommends in strict mode.',
      },
    ],
    explanation: {
      es: '?? solo actúa ante null o undefined, mientras || actúa ante cualquier falsy, de ahí el bug clásico de que un contador en 0 o un texto vacío se sustituyen por el valor por defecto. Con undefined ambos devuelven el fallback, así que ahí no hay diferencia.',
      en: '?? only kicks in for null or undefined, while || kicks in for any falsy value, hence the classic bug where a counter at 0 or an empty text is replaced by the default. With undefined both return the fallback, so there is no difference there.',
    },
  },
  {
    id: 'fe-ts-06',
    topic: 'Genéricos',
    prompt: {
      es: '¿Qué significa <T extends { id: string }> en la firma de una función genérica?',
      en: 'What does <T extends { id: string }> mean in a generic function signature?',
    },
    answer: {
      es: 'Que T puede ser cualquier tipo que tenga al menos una propiedad id de tipo string.',
      en: 'That T can be any type having at least an id property of type string.',
    },
    distractors: [
      {
        es: 'Que T debe ser exactamente ese objeto, por lo que pasar un tipo con más propiedades es un error.',
        en: 'That T must be exactly that object, so passing a type with extra properties is an error.',
      },
      {
        es: 'Que T hereda esa propiedad, así que la función puede asignarle un id si el objeto no lo trae.',
        en: 'That T inherits that property, so the function can assign an id if the object does not have one.',
      },
    ],
    explanation: {
      es: 'extends en genéricos expresa una restricción de compatibilidad estructural, no igualdad ni herencia: cualquier tipo que cumpla la forma mínima es aceptado, con las propiedades extra intactas y accesibles dentro de T. No agrega nada al valor en ejecución.',
      en: 'extends in generics expresses a structural compatibility constraint, not equality nor inheritance: any type satisfying the minimal shape is accepted, with extra properties intact and reachable through T. It adds nothing to the value at runtime.',
    },
  },
  {
    id: 'fe-ts-07',
    topic: 'Configuración',
    prompt: {
      es: '¿Qué comprueba la opción strictNullChecks del compilador?',
      en: 'What does the strictNullChecks compiler option check?',
    },
    answer: {
      es: 'Que null y undefined no sean asignables a otros tipos salvo que se declaren explícitamente en la unión.',
      en: 'That null and undefined are not assignable to other types unless explicitly declared in the union.',
    },
    distractors: [
      {
        es: 'Que no se acceda a propiedades de un valor que podría ser null, insertando comprobaciones en el código generado.',
        en: 'That properties are not accessed on a possibly null value, inserting checks into the generated code.',
      },
      {
        es: 'Que toda variable se inicialice antes de usarse, incluidos los campos de clase declarados sin valor.',
        en: 'That every variable is initialised before use, including class fields declared without a value.',
      },
    ],
    explanation: {
      es: 'strictNullChecks cambia el sistema de tipos: string ya no incluye null, y por eso el compilador señala los accesos no comprobados. Todo ocurre en compilación, sin generar código de verificación. La inicialización de campos de clase la cubre otra bandera, strictPropertyInitialization.',
      en: 'strictNullChecks changes the type system: string no longer includes null, which is why the compiler flags unchecked accesses. Everything happens at compile time, with no runtime checks emitted. Class field initialisation is covered by a different flag, strictPropertyInitialization.',
    },
  },
];
