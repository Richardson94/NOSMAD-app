import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_OOP_SOLID_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-oop-01',
    topic: 'SOLID',
    prompt: {
      es: '¿Qué condición debe cumplir un subtipo para respetar el Principio de Sustitución de Liskov?',
      en: 'What condition must a subtype meet to respect the Liskov Substitution Principle?',
    },
    answer: {
      es: 'Puede debilitar las precondiciones y fortalecer las postcondiciones, nunca al contrario.',
      en: 'It may weaken preconditions and strengthen postconditions, never the other way around.',
    },
    distractors: [
      {
        es: 'Puede fortalecer las precondiciones siempre que lo documente en su contrato.',
        en: 'It may strengthen preconditions as long as it documents the change in its contract.',
      },
      {
        es: 'Debe conservar exactamente las mismas precondiciones y postcondiciones que la clase base.',
        en: 'It must keep exactly the same preconditions and postconditions as the base class.',
      },
    ],
    explanation: {
      es: 'Las precondiciones son contravariantes y las postcondiciones covariantes: el subtipo puede aceptar más entradas y prometer más, pero no exigir más ni prometer menos. Exigir más rompe al cliente que solo conoce la base; conservarlas idénticas es válido pero más restrictivo de lo que pide el principio. El caso típico de violación es una subclase que lanza UnsupportedOperationException en un método heredado.',
      en: 'Preconditions are contravariant and postconditions covariant: a subtype may accept more inputs and promise more, but never demand more or promise less. Demanding more breaks clients that only know the base type; keeping them identical is valid but stricter than the principle requires. The classic violation is a subclass throwing UnsupportedOperationException on an inherited method.',
    },
  },
  {
    id: 'th-oop-02',
    topic: 'SOLID',
    prompt: {
      es: '¿Qué propone el Principio de Segregación de Interfaces (ISP)?',
      en: 'What does the Interface Segregation Principle (ISP) propose?',
    },
    answer: {
      es: 'Partir una interfaz gorda en interfaces por cliente para que nadie dependa de métodos que no usa.',
      en: 'Split a fat interface into client-specific interfaces so nobody depends on methods it does not use.',
    },
    distractors: [
      {
        es: 'Que cada clase implemente una sola interfaz para no acoplarse a varias jerarquías a la vez.',
        en: 'That each class implements only one interface to avoid coupling to several hierarchies at once.',
      },
      {
        es: 'Que las interfaces expongan solo métodos y deleguen todo el estado compartido a clases abstractas.',
        en: 'That interfaces expose only methods and delegate all shared state to abstract classes.',
      },
    ],
    explanation: {
      es: 'ISP mira el problema desde el consumidor: una interfaz con métodos que un cliente no necesita lo obliga a recompilarse y a implementar vacíos cuando esa parte cambia. La solución es dividirla por rol. Nada en ISP limita cuántas interfaces implementa una clase ni dónde vive el estado.',
      en: 'ISP looks at the problem from the consumer side: an interface carrying methods a client does not need forces that client to recompile and to write empty implementations whenever that part changes. The fix is to split it by role. Nothing in ISP limits how many interfaces a class implements or where state lives.',
    },
  },
  {
    id: 'th-oop-03',
    topic: 'SOLID',
    prompt: {
      es: '¿Cuál es la diferencia entre el Principio de Inversión de Dependencias (DIP) y la inyección de dependencias?',
      en: 'What is the difference between the Dependency Inversion Principle (DIP) and dependency injection?',
    },
    answer: {
      es: 'DIP es un principio de diseño sobre depender de abstracciones; la inyección es solo una técnica para suministrar colaboradores.',
      en: 'DIP is a design principle about depending on abstractions; injection is just a technique to supply collaborators.',
    },
    distractors: [
      {
        es: 'Son equivalentes: usar un contenedor de inyección de dependencias garantiza que se cumple DIP.',
        en: 'They are equivalent: using a dependency injection container guarantees DIP is satisfied.',
      },
      {
        es: 'DIP exige que la abstracción se declare en el módulo de bajo nivel para que el de alto nivel la importe.',
        en: 'DIP requires the abstraction to be declared in the low-level module so the high-level module can import it.',
      },
    ],
    explanation: {
      es: 'Se puede inyectar una clase concreta por constructor y seguir violando DIP, porque el módulo de alto nivel continúa acoplado a un detalle. DIP además invierte la propiedad de la abstracción: la interfaz pertenece al módulo de alto nivel (o a su paquete de contratos) y el de bajo nivel la implementa.',
      en: 'You can inject a concrete class through the constructor and still violate DIP, because the high-level module stays coupled to a detail. DIP also inverts ownership of the abstraction: the interface belongs to the high-level module (or its contract package) and the low-level module implements it.',
    },
  },
  {
    id: 'th-oop-04',
    topic: 'SOLID',
    prompt: {
      es: 'Según el Principio Abierto/Cerrado, ¿cómo se debería agregar un nuevo tipo de descuento a un módulo de facturación ya en producción?',
      en: 'According to the Open/Closed Principle, how should a new discount type be added to a billing module already in production?',
    },
    answer: {
      es: 'Creando una nueva implementación de la abstracción de descuento, sin tocar el código que la orquesta.',
      en: 'By creating a new implementation of the discount abstraction, without touching the code that orchestrates it.',
    },
    distractors: [
      {
        es: 'Agregando una rama al switch existente y cubriéndola con pruebas de regresión antes de desplegar.',
        en: 'By adding a branch to the existing switch and covering it with regression tests before deploying.',
      },
      {
        es: 'Heredando de la clase de facturación y sobrescribiendo el método de cálculo completo en la subclase.',
        en: 'By inheriting from the billing class and overriding the whole calculation method in the subclass.',
      },
    ],
    explanation: {
      es: 'OCP busca que el comportamiento se extienda agregando código nuevo, no editando el existente; el punto de extensión suele ser polimorfismo (Strategy) más registro de implementaciones. Tocar el switch funciona pero reabre una clase estable en cada cambio, y heredar para reemplazar el cálculo entero duplica lógica y acopla la subclase a los internos de la base.',
      en: 'OCP aims for behaviour to be extended by adding new code rather than editing existing code; the extension point is usually polymorphism (Strategy) plus a registry of implementations. Editing the switch works but reopens a stable class on every change, and subclassing to replace the whole calculation duplicates logic and couples the subclass to base internals.',
    },
  },
  {
    id: 'th-oop-05',
    topic: 'SOLID',
    prompt: {
      es: '¿Cómo define Robert C. Martin la "única responsabilidad" del SRP?',
      en: 'How does Robert C. Martin define the "single responsibility" in SRP?',
    },
    answer: {
      es: 'Una sola razón para cambiar, determinada por un único actor o grupo de interesados.',
      en: 'A single reason to change, determined by one actor or group of stakeholders.',
    },
    distractors: [
      {
        es: 'Una sola tarea funcional, por lo que la clase no debería exponer más de un método público.',
        en: 'A single functional task, so the class should not expose more than one public method.',
      },
      {
        es: 'Un solo nivel de abstracción, por lo que la clase no debería tener más de una dependencia inyectada.',
        en: 'A single abstraction level, so the class should not have more than one injected dependency.',
      },
    ],
    explanation: {
      es: 'La formulación moderna es "un módulo debe tener una sola razón para cambiar" y esa razón se rastrea hasta un actor: si Finanzas y Operaciones pueden pedir cambios sobre la misma clase, hay dos responsabilidades. Contar métodos públicos o dependencias es una heurística de olor a código, no la definición.',
      en: 'The modern formulation is "a module should have one reason to change", and that reason traces back to an actor: if Finance and Operations can both request changes to the same class, there are two responsibilities. Counting public methods or dependencies is a code-smell heuristic, not the definition.',
    },
  },
  {
    id: 'th-oop-06',
    topic: 'POO',
    prompt: {
      es: '¿Por qué se recomienda preferir composición sobre herencia?',
      en: 'Why is composition generally preferred over inheritance?',
    },
    answer: {
      es: 'Porque la herencia acopla la subclase a los detalles internos de la base y rompe el encapsulamiento (clase base frágil).',
      en: 'Because inheritance couples the subclass to base internals and breaks encapsulation (fragile base class).',
    },
    distractors: [
      {
        es: 'Porque la herencia añade una indirección de vtable que degrada el rendimiento en llamadas calientes.',
        en: 'Because inheritance adds a vtable indirection that degrades performance in hot call paths.',
      },
      {
        es: 'Porque la composición permite herencia múltiple de estado, algo que Java prohíbe entre clases.',
        en: 'Because composition allows multiple inheritance of state, which Java forbids between classes.',
      },
    ],
    explanation: {
      es: 'El argumento es de diseño: la subclase depende de cómo la base llama a sus propios métodos, así que un cambio interno aparentemente inocuo puede romperla, y la relación se fija en tiempo de compilación. La composición permite cambiar el colaborador en ejecución. El costo de despacho virtual es despreciable y la herencia múltiple de estado no es el motivo del consejo.',
      en: 'The argument is about design: a subclass depends on how the base calls its own methods, so an apparently harmless internal change can break it, and the relationship is fixed at compile time. Composition lets you swap the collaborator at runtime. Virtual dispatch cost is negligible, and multiple inheritance of state is not the reason behind the advice.',
    },
  },
  {
    id: 'th-oop-07',
    topic: 'POO',
    prompt: {
      es: '¿Cuál es la diferencia entre abstracción y encapsulamiento?',
      en: 'What is the difference between abstraction and encapsulation?',
    },
    answer: {
      es: 'La abstracción define qué expone un tipo; el encapsulamiento protege cómo lo implementa.',
      en: 'Abstraction defines what a type exposes; encapsulation protects how it is implemented.',
    },
    distractors: [
      {
        es: 'La abstracción se consigue con interfaces y el encapsulamiento con clases abstractas.',
        en: 'Abstraction is achieved with interfaces and encapsulation with abstract classes.',
      },
      {
        es: 'El encapsulamiento oculta la clase completa al cliente y la abstracción oculta solo sus atributos.',
        en: 'Encapsulation hides the whole class from the client and abstraction hides only its attributes.',
      },
    ],
    explanation: {
      es: 'Son ejes complementarios: la abstracción es el modelo relevante que se ofrece al cliente (el contrato) y el encapsulamiento es el mecanismo que impide acceder al estado y a los detalles internos. Ambas se logran con múltiples herramientas del lenguaje; asociarlas a una construcción concreta confunde el fin con el medio.',
      en: 'They are complementary axes: abstraction is the relevant model offered to the client (the contract), while encapsulation is the mechanism that prevents access to internal state and details. Both are achieved with several language tools; tying them to one construct confuses the goal with the means.',
    },
  },
  {
    id: 'th-oop-08',
    topic: 'Polimorfismo',
    prompt: {
      es: 'En Java, ¿qué se resuelve en tiempo de compilación y qué en tiempo de ejecución?',
      en: 'In Java, what is resolved at compile time and what at runtime?',
    },
    answer: {
      es: 'La sobrecarga se resuelve por el tipo estático de los argumentos; la sobrescritura, por el tipo real del objeto.',
      en: 'Overloading is resolved by the static type of the arguments; overriding by the actual type of the object.',
    },
    distractors: [
      {
        es: 'Ambas se resuelven en ejecución, porque la JVM conoce los tipos reales de los argumentos y del receptor.',
        en: 'Both are resolved at runtime, because the JVM knows the actual types of the arguments and the receiver.',
      },
      {
        es: 'La sobrecarga se resuelve en ejecución por los tipos reales y la sobrescritura en compilación por la jerarquía declarada.',
        en: 'Overloading is resolved at runtime by actual types and overriding at compile time by the declared hierarchy.',
      },
    ],
    explanation: {
      es: 'El compilador elige la firma del método sobrecargado mirando los tipos declarados, por eso pasar una referencia Object que contiene un String invoca la sobrecarga de Object. La sobrescritura usa despacho dinámico: la JVM busca la implementación en la clase concreta de la instancia.',
      en: 'The compiler picks the overloaded signature by looking at declared types, which is why passing an Object reference holding a String invokes the Object overload. Overriding uses dynamic dispatch: the JVM looks up the implementation in the instance concrete class.',
    },
  },
  {
    id: 'th-oop-09',
    topic: 'Acoplamiento',
    prompt: {
      es: '¿Qué establece la Ley de Demeter?',
      en: 'What does the Law of Demeter state?',
    },
    answer: {
      es: 'Un método solo debería usar sus propios campos, sus parámetros, los objetos que crea y a sí mismo.',
      en: 'A method should only use its own fields, its parameters, the objects it creates and itself.',
    },
    distractors: [
      {
        es: 'Prohíbe encadenar llamadas, por eso las APIs fluidas tipo builder la violan por definición.',
        en: 'It forbids chained calls, which is why fluent builder-style APIs violate it by definition.',
      },
      {
        es: 'Exige que ninguna jerarquía tenga más de dos niveles de herencia para limitar el acoplamiento.',
        en: 'It requires no hierarchy to have more than two inheritance levels in order to limit coupling.',
      },
    ],
    explanation: {
      es: 'Es el "principio del menor conocimiento": hablar solo con amigos inmediatos. Lo que se evita es el tren de choques tipo pedido.getCliente().getDireccion().getCiudad(), porque expone la estructura interna. Un builder que retorna this no la viola: siempre se conversa con el mismo objeto.',
      en: 'It is the "principle of least knowledge": only talk to immediate friends. What it avoids is train wrecks like order.getCustomer().getAddress().getCity(), because they expose internal structure. A builder returning this does not violate it: you keep talking to the same object.',
    },
  },
  {
    id: 'th-oop-10',
    topic: 'Métricas de diseño',
    prompt: {
      es: 'Un paquete tiene acoplamiento aferente alto (muchos dependen de él) y eferente bajo. ¿Qué implica según las métricas de estabilidad?',
      en: 'A package has high afferent coupling (many depend on it) and low efferent coupling. What does that imply per stability metrics?',
    },
    answer: {
      es: 'Es un paquete estable, así que debería ser abstracto para poder extenderse sin modificarse.',
      en: 'It is a stable package, so it should be abstract in order to be extended without being modified.',
    },
    distractors: [
      {
        es: 'Es un paquete inestable, así que conviene refactorizarlo para que dependa de más abstracciones externas.',
        en: 'It is an unstable package, so it should be refactored to depend on more external abstractions.',
      },
      {
        es: 'Es un paquete aislado y candidato a eliminarse, porque no colabora con otros módulos del sistema.',
        en: 'It is an isolated package and a removal candidate, because it does not collaborate with other modules.',
      },
    ],
    explanation: {
      es: 'La inestabilidad se calcula como I = Ce / (Ca + Ce): con Ca alto y Ce bajo, I tiende a 0, es decir máxima estabilidad porque cambiarlo afecta a muchos. El Principio de Abstracciones Estables dice que esos paquetes deben ser abstractos (interfaces, contratos) para que el sistema evolucione sin modificarlos.',
      en: 'Instability is computed as I = Ce / (Ca + Ce): with high Ca and low Ce, I tends to 0, meaning maximum stability because changing it affects many modules. The Stable Abstractions Principle says such packages should be abstract (interfaces, contracts) so the system can evolve without modifying them.',
    },
  },
];
