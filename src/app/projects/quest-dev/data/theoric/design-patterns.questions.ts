import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_DESIGN_PATTERNS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-pat-01',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Cuál es la diferencia entre Factory Method y Abstract Factory?',
      en: 'What is the difference between Factory Method and Abstract Factory?',
    },
    answer: {
      es: 'Factory Method delega la creación de un producto a subclases; Abstract Factory crea familias de productos relacionados.',
      en: 'Factory Method defers creating one product to subclasses; Abstract Factory creates families of related products.',
    },
    distractors: [
      {
        es: 'Factory Method devuelve siempre la misma instancia y Abstract Factory devuelve una nueva en cada llamada.',
        en: 'Factory Method always returns the same instance and Abstract Factory returns a new one on every call.',
      },
      {
        es: 'Factory Method usa métodos estáticos y Abstract Factory requiere que la fábrica se instancie e inyecte.',
        en: 'Factory Method uses static methods while Abstract Factory requires the factory to be instantiated and injected.',
      },
    ],
    explanation: {
      es: 'Factory Method es un método polimórfico que decide qué instancia devolver, típicamente sobrescrito por subclases del creador. Abstract Factory es un objeto con varios métodos de creación que garantizan que los productos devueltos sean compatibles entre sí. El "static factory method" es otro idiom distinto del patrón GoF, y ninguno de los dos habla de reutilizar instancias.',
      en: 'Factory Method is a polymorphic method that decides which instance to return, typically overridden by subclasses of the creator. Abstract Factory is an object with several creation methods guaranteeing the returned products are compatible with each other. The "static factory method" is a different idiom from the GoF pattern, and neither pattern is about reusing instances.',
    },
  },
  {
    id: 'th-pat-02',
    topic: 'Patrones de comportamiento',
    prompt: {
      es: 'Necesitas elegir en ejecución entre varios algoritmos de cálculo de comisión intercambiables. ¿Qué patrón aplica?',
      en: 'You need to choose at runtime between several interchangeable commission algorithms. Which pattern applies?',
    },
    answer: {
      es: 'Strategy, porque encapsula cada algoritmo detrás de una misma interfaz y permite cambiarlo en ejecución.',
      en: 'Strategy, because it encapsulates each algorithm behind one interface and lets you swap it at runtime.',
    },
    distractors: [
      {
        es: 'Template Method, porque define el esqueleto del cálculo y deja los pasos variables a las subclases.',
        en: 'Template Method, because it defines the calculation skeleton and leaves variable steps to subclasses.',
      },
      {
        es: 'State, porque el objeto cambia de comportamiento según el algoritmo que tenga configurado.',
        en: 'State, because the object changes behaviour depending on the algorithm it has configured.',
      },
    ],
    explanation: {
      es: 'Los tres varían comportamiento, pero Strategy es el único donde el cliente elige e intercambia el algoritmo libremente en ejecución. Template Method fija la variación en tiempo de compilación mediante herencia, y State modela transiciones internas gobernadas por el propio objeto, no una elección del cliente.',
      en: 'All three vary behaviour, but Strategy is the only one where the client freely picks and swaps the algorithm at runtime. Template Method fixes the variation at compile time through inheritance, and State models internal transitions driven by the object itself, not a client choice.',
    },
  },
  {
    id: 'th-pat-03',
    topic: 'Patrones estructurales',
    prompt: {
      es: '¿Cuál es la intención del patrón Decorator frente a Proxy?',
      en: 'What is the intent of the Decorator pattern compared to Proxy?',
    },
    answer: {
      es: 'Decorator agrega responsabilidades al objeto envuelto; Proxy controla el acceso a él.',
      en: 'Decorator adds responsibilities to the wrapped object; Proxy controls access to it.',
    },
    distractors: [
      {
        es: 'Decorator envuelve una interfaz distinta para hacerla compatible; Proxy conserva la misma interfaz.',
        en: 'Decorator wraps a different interface to make it compatible; Proxy keeps the same interface.',
      },
      {
        es: 'Decorator se aplica en tiempo de compilación mediante herencia; Proxy se genera siempre en ejecución.',
        en: 'Decorator is applied at compile time through inheritance; Proxy is always generated at runtime.',
      },
    ],
    explanation: {
      es: 'Ambos comparten la interfaz del objeto envuelto y se ven casi idénticos en código; lo que los distingue es la intención. Decorator suma comportamiento (por ejemplo compresión o cifrado en un stream) y se apila; Proxy media el acceso (lazy loading, caché, permisos, llamada remota). Adaptar interfaces incompatibles es Adapter.',
      en: 'Both share the wrapped object interface and look nearly identical in code; intent is what separates them. Decorator adds behaviour (for example compression or encryption on a stream) and can be stacked; Proxy mediates access (lazy loading, caching, permissions, remote calls). Adapting incompatible interfaces is Adapter.',
    },
  },
  {
    id: 'th-pat-04',
    topic: 'Singleton',
    prompt: {
      es: '¿Por qué el Singleton se considera un antipatrón en muchos contextos?',
      en: 'Why is Singleton considered an anti-pattern in many contexts?',
    },
    answer: {
      es: 'Porque introduce estado global y una dependencia oculta que dificulta las pruebas y el reemplazo.',
      en: 'Because it introduces global state and a hidden dependency that makes testing and substitution harder.',
    },
    distractors: [
      {
        es: 'Porque una única instancia se convierte en cuello de botella y no puede usarse en entornos concurrentes.',
        en: 'Because a single instance becomes a bottleneck and cannot be used in concurrent environments.',
      },
      {
        es: 'Porque impide la recolección de basura del objeto y por tanto siempre provoca una fuga de memoria.',
        en: 'Because it prevents the object from being garbage collected and therefore always causes a memory leak.',
      },
    ],
    explanation: {
      es: 'La crítica principal es de diseño: el acceso estático esconde la dependencia y la comparte entre pruebas, generando acoplamiento y resultados dependientes del orden. Un singleton sin estado mutable es perfectamente concurrente, y vivir toda la aplicación no es una fuga, sino su ciclo de vida esperado. Por eso se prefiere una única instancia gestionada por el contenedor de inyección.',
      en: 'The main criticism is about design: static access hides the dependency and shares it across tests, creating coupling and order-dependent results. A stateless singleton is perfectly concurrent, and living for the whole application is not a leak but its expected lifecycle. That is why a single instance managed by the DI container is preferred.',
    },
  },
  {
    id: 'th-pat-05',
    topic: 'Patrones de comportamiento',
    prompt: {
      es: 'Un objeto debe notificar cambios a varios interesados sin conocer sus tipos concretos. ¿Qué patrón describe esa relación?',
      en: 'An object must notify changes to several interested parties without knowing their concrete types. Which pattern describes that relationship?',
    },
    answer: {
      es: 'Observer, que define una dependencia uno-a-muchos donde el sujeto avisa a suscriptores registrados.',
      en: 'Observer, which defines a one-to-many dependency where the subject notifies registered subscribers.',
    },
    distractors: [
      {
        es: 'Mediator, que centraliza la comunicación para que los objetos no se referencien entre sí.',
        en: 'Mediator, which centralises communication so objects do not reference each other.',
      },
      {
        es: 'Chain of Responsibility, que pasa la notificación por una cadena hasta que alguien la atiende.',
        en: 'Chain of Responsibility, which passes the notification along a chain until someone handles it.',
      },
    ],
    explanation: {
      es: 'Observer es difusión: todos los suscriptores reciben el evento y el sujeto solo conoce la interfaz de observador. Mediator resuelve comunicación muchos-a-muchos concentrando la lógica de coordinación en un tercero, y Chain of Responsibility entrega el mensaje a un único manejador capaz de procesarlo, no a todos.',
      en: 'Observer is broadcast: every subscriber receives the event and the subject only knows the observer interface. Mediator solves many-to-many communication by concentrating coordination logic in a third party, and Chain of Responsibility delivers the message to a single handler able to process it, not to everyone.',
    },
  },
  {
    id: 'th-pat-06',
    topic: 'Inmutabilidad',
    prompt: {
      es: '¿Qué garantiza realmente que una clase en Java sea inmutable?',
      en: 'What actually guarantees that a Java class is immutable?',
    },
    answer: {
      es: 'Campos finales, sin setters, copias defensivas de los mutables y ninguna fuga de referencias internas.',
      en: 'Final fields, no setters, defensive copies of mutable members and no leaking of internal references.',
    },
    distractors: [
      {
        es: 'Declarar todos los campos privados y final es suficiente, porque el compilador impide cualquier modificación.',
        en: 'Declaring every field private and final is enough, because the compiler prevents any modification.',
      },
      {
        es: 'Marcar la clase como final y sincronizar los getters, para que ningún hilo observe estado a medio construir.',
        en: 'Marking the class final and synchronising getters, so no thread observes half-built state.',
      },
    ],
    explanation: {
      es: 'final sobre un campo impide reasignar la referencia, no mutar el objeto apuntado: si el campo es una List y se devuelve tal cual, el cliente puede modificarla. Por eso hace falta copiar al entrar y al salir, o exponer vistas inmutables. Sincronizar getters no aporta nada si el estado nunca cambia.',
      en: 'final on a field prevents reassigning the reference, not mutating the referenced object: if the field is a List returned as-is, the client can modify it. That is why you must copy on the way in and on the way out, or expose immutable views. Synchronising getters adds nothing when state never changes.',
    },
  },
  {
    id: 'th-pat-07',
    topic: 'Patrones de persistencia',
    prompt: {
      es: '¿Cuál es la responsabilidad del patrón Repository en una arquitectura de dominio?',
      en: 'What is the responsibility of the Repository pattern in a domain architecture?',
    },
    answer: {
      es: 'Exponer una colección de agregados en términos del dominio, ocultando el mecanismo de persistencia.',
      en: 'Expose a collection of aggregates in domain terms, hiding the persistence mechanism.',
    },
    distractors: [
      {
        es: 'Encapsular una única tabla con operaciones CRUD y traducir filas a objetos de transferencia.',
        en: 'Encapsulate a single table with CRUD operations and translate rows into transfer objects.',
      },
      {
        es: 'Coordinar la transacción y el orden de escritura de las entidades modificadas durante un caso de uso.',
        en: 'Coordinate the transaction and the write order of entities modified during a use case.',
      },
    ],
    explanation: {
      es: 'Un Repository trabaja a nivel de agregado y habla el lenguaje del dominio, por lo que puede abarcar varias tablas y devuelve entidades, no DTOs; el mapeo tabla a tabla corresponde a un DAO. Gestionar el orden de escritura y la transacción es tarea de Unit of Work (lo que hace el EntityManager de JPA).',
      en: 'A Repository works at aggregate level and speaks the domain language, so it may span several tables and returns entities rather than DTOs; table-per-class mapping is a DAO. Managing write ordering and the transaction is the Unit of Work role (what the JPA EntityManager does).',
    },
  },
  {
    id: 'th-pat-08',
    topic: 'Refactorización',
    prompt: {
      es: '¿Qué indica el olor a código "envidia de características" (feature envy)?',
      en: 'What does the "feature envy" code smell indicate?',
    },
    answer: {
      es: 'Un método usa más los datos de otra clase que los propios, así que debería moverse allí.',
      en: 'A method uses another class data more than its own, so it should be moved there.',
    },
    distractors: [
      {
        es: 'Una clase concentra demasiadas responsabilidades y conviene extraer parte de su comportamiento.',
        en: 'A class concentrates too many responsibilities and part of its behaviour should be extracted.',
      },
      {
        es: 'Dos clases dependen mutuamente y hay que introducir una interfaz para romper el ciclo.',
        en: 'Two classes depend on each other and an interface is needed to break the cycle.',
      },
    ],
    explanation: {
      es: 'Feature envy es un diagnóstico muy concreto: un método que encadena getters de otro objeto para calcular algo delata que el comportamiento está en el lugar equivocado, y la cura es "mover método". Demasiadas responsabilidades es una clase grande (large class) y la dependencia mutua es un ciclo de dependencias.',
      en: 'Feature envy is a very concrete diagnosis: a method chaining getters from another object to compute something reveals that the behaviour lives in the wrong place, and the cure is "move method". Too many responsibilities is the large class smell, and mutual dependency is a dependency cycle.',
    },
  },
];
