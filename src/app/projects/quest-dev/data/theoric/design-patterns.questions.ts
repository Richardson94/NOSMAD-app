import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_DESIGN_PATTERNS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-pat-01',
    topic: 'Patrones',
    prompt: {
      es: '¿Cuál es la diferencia entre Factory Method y Abstract Factory?',
      en: 'What is the difference between Factory Method and Abstract Factory?',
    },
    answer: {
      es: 'Factory Method deja que una subclase cree un producto. Abstract Factory crea una familia de productos que deben ir juntos.',
      en: 'Factory Method lets a subclass create one product. Abstract Factory creates a family of products that must go together.',
    },
    distractors: [
      {
        es: 'Factory Method devuelve siempre la misma instancia y Abstract Factory una nueva.',
        en: 'Factory Method always returns the same instance and Abstract Factory a new one.',
      },
      {
        es: 'Factory Method es un método estático y Abstract Factory hay que inyectarla.',
        en: 'Factory Method is a static method and Abstract Factory must be injected.',
      },
    ],
    explanation: {
      es: 'Un método factoría estático es otro recurso, no el patrón. Ninguno de los dos trata de reutilizar la misma instancia.',
      en: 'A static factory method is a different tool, not the pattern. Neither one is about reusing the same instance.',
    },
  },
  {
    id: 'th-pat-02',
    topic: 'Patrones',
    prompt: {
      es: '¿Qué patrón usarías si necesitas cambiar en ejecución el algoritmo que calcula una comisión?',
      en: 'You need to swap at runtime the algorithm that calculates a commission. Which pattern would you use?',
    },
    answer: {
      es: 'Strategy. Cada algoritmo vive detrás de la misma interfaz y el cliente elige cuál usar.',
      en: 'Strategy. Each algorithm lives behind the same interface and the client chooses which one to use.',
    },
    distractors: [
      {
        es: 'Template Method, porque deja los pasos variables en subclases.',
        en: 'Template Method, because it leaves the variable steps in subclasses.',
      },
      {
        es: 'State, porque el objeto cambia de comportamiento según el algoritmo.',
        en: 'State, because the object changes behaviour according to the algorithm.',
      },
    ],
    explanation: {
      es: 'Template Method fija la variación en la herencia. State cambia solo cuando el propio objeto transiciona, no porque el cliente elija un algoritmo.',
      en: 'Template Method fixes the variation in inheritance. State changes only when the object itself transitions, not because the client picks an algorithm.',
    },
  },
  {
    id: 'th-pat-03',
    topic: 'Patrones',
    prompt: {
      es: '¿Cuál es la diferencia entre Decorator y Proxy?',
      en: 'What is the difference between Decorator and Proxy?',
    },
    answer: {
      es: 'Decorator añade comportamiento al objeto envuelto. Proxy controla el acceso a ese objeto.',
      en: 'Decorator adds behaviour to the wrapped object. Proxy controls access to that object.',
    },
    distractors: [
      {
        es: 'Decorator cambia la interfaz para hacerla compatible y Proxy la conserva.',
        en: 'Decorator changes the interface to make it compatible and Proxy keeps it.',
      },
      {
        es: 'Decorator se aplica por herencia y Proxy siempre se genera en ejecución.',
        en: 'Decorator is applied through inheritance and Proxy is always generated at runtime.',
      },
    ],
    explanation: {
      es: 'En código se parecen porque ambos comparten la interfaz. La intención los separa: sumar responsabilidades o mediar el acceso.',
      en: 'In code they look alike because both share the interface. Intent separates them: adding responsibilities or mediating access.',
    },
  },
  {
    id: 'th-pat-04',
    topic: 'Patrones',
    prompt: {
      es: '¿Por qué el Singleton se considera un problema en muchos diseños?',
      en: 'Why is Singleton considered a problem in many designs?',
    },
    answer: {
      es: 'Porque es estado global y una dependencia oculta. Las pruebas no pueden sustituirlo con facilidad.',
      en: 'Because it is global state and a hidden dependency. Tests cannot substitute it easily.',
    },
    distractors: [
      {
        es: 'Porque una sola instancia no puede usarse con varios hilos.',
        en: 'Because a single instance cannot be used with several threads.',
      },
      {
        es: 'Porque impide que el recolector libere el objeto y siempre hay una fuga.',
        en: 'Because it stops the collector from freeing the object and there is always a leak.',
      },
    ],
    explanation: {
      es: 'Una instancia única gestionada por el contenedor de inyección suele ser la alternativa: sigue habiendo una, pero la dependencia es visible.',
      en: 'A single instance managed by the injection container is usually the alternative: there is still one, but the dependency is visible.',
    },
  },
  {
    id: 'th-pat-05',
    topic: 'Patrones',
    prompt: {
      es: '¿Qué patrón usas si un objeto debe avisar a varios interesados sin conocer sus clases concretas?',
      en: 'An object must notify several interested parties without knowing their concrete classes. Which pattern is that?',
    },
    answer: {
      es: 'Observer. El sujeto guarda suscriptores y les notifica cuando cambia.',
      en: 'Observer. The subject keeps subscribers and notifies them when it changes.',
    },
    distractors: [
      {
        es: 'Mediator, porque centraliza la comunicación.',
        en: 'Mediator, because it centralises communication.',
      },
      {
        es: 'Chain of Responsibility, porque pasa el aviso hasta que alguien lo atiende.',
        en: 'Chain of Responsibility, because it passes the notice until someone handles it.',
      },
    ],
    explanation: {
      es: 'Observer avisa a todos. La cadena entrega el mensaje a un solo manejador. El mediador coordina a varios colegas entre sí.',
      en: 'Observer notifies everyone. The chain delivers the message to a single handler. A mediator coordinates several colleagues with each other.',
    },
  },
  {
    id: 'th-pat-06',
    topic: 'Patrones',
    prompt: {
      es: '¿Qué hace falta para que una clase en Java sea de verdad inmutable?',
      en: 'What does it take for a Java class to be truly immutable?',
    },
    answer: {
      es: 'Campos finales, sin setters, y copias defensivas de lo mutable para no filtrar referencias internas.',
      en: 'Final fields, no setters, and defensive copies of mutable members so internal references do not leak.',
    },
    distractors: [
      {
        es: 'Basta con que todos los campos sean privados y final.',
        en: 'It is enough that every field is private and final.',
      },
      {
        es: 'Marcar la clase final y sincronizar los getters.',
        en: 'Mark the class final and synchronise the getters.',
      },
    ],
    explanation: {
      es: 'final impide reasignar la referencia, no impide que el cliente modifique la lista que le devolviste.',
      en: 'final stops you from reassigning the reference. It does not stop the client from modifying the list you returned.',
    },
  },
  {
    id: 'th-pat-07',
    topic: 'Patrones',
    prompt: {
      es: '¿Qué responsabilidad tiene un Repository?',
      en: 'What responsibility does a Repository have?',
    },
    answer: {
      es: 'Parecer una colección de objetos del dominio y ocultar cómo se persisten.',
      en: 'Look like a collection of domain objects and hide how they are persisted.',
    },
    distractors: [
      {
        es: 'Encapsular una tabla con operaciones CRUD y devolver objetos de transferencia.',
        en: 'Encapsulate one table with CRUD operations and return transfer objects.',
      },
      {
        es: 'Abrir la transacción y decidir el orden de escritura del caso de uso.',
        en: 'Open the transaction and decide the write order of the use case.',
      },
    ],
    explanation: {
      es: 'El mapeo tabla a tabla es más propio de un DAO. Coordinar la transacción es trabajo de la unidad de trabajo o del caso de uso.',
      en: 'Table to table mapping is closer to a DAO. Coordinating the transaction is the job of the unit of work or the use case.',
    },
  },
  {
    id: 'th-pat-08',
    topic: 'Refactorización',
    prompt: {
      es: '¿Qué indica el olor envidia de características?',
      en: 'What does the feature envy smell indicate?',
    },
    answer: {
      es: 'Que un método usa más los datos de otra clase que los suyos. Ese comportamiento debería mudarse allí.',
      en: 'That a method uses another class data more than its own. That behaviour should move there.',
    },
    distractors: [
      {
        es: 'Que la clase tiene demasiadas responsabilidades y hay que partirla.',
        en: 'That the class has too many responsibilities and should be split.',
      },
      {
        es: 'Que dos clases dependen una de la otra y hay que romper el ciclo.',
        en: 'That two classes depend on each other and the cycle must be broken.',
      },
    ],
    explanation: {
      es: 'El síntoma típico es un método que encadena getters de otro objeto para calcular algo que ese objeto debería saber hacer.',
      en: 'The typical symptom is a method that chains getters from another object to compute something that object should know how to do.',
    },
  },
];
