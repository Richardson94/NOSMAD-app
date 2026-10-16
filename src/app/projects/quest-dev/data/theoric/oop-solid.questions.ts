import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_OOP_SOLID_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-oop-01',
    topic: 'SOLID',
    prompt: {
      es: '¿Qué significa el principio de sustitución de Liskov en la práctica?',
      en: 'What does the Liskov substitution principle mean in practice?',
    },
    answer: {
      es: 'Una subclase debe poder usarse donde se espera la clase base sin sorprender al código que solo conoce la base.',
      en: 'A subclass must be usable where the base class is expected without surprising code that only knows the base.',
    },
    distractors: [
      {
        es: 'La subclase puede exigir más condiciones de entrada si lo documenta en el contrato.',
        en: 'The subclass may demand stricter inputs if it documents that in the contract.',
      },
      {
        es: 'Basta con que la subclase tenga los mismos métodos, aunque cambie lo que hacen.',
        en: 'It is enough that the subclass has the same methods, even if what they do changes.',
      },
    ],
    explanation: {
      es: 'El caso típico es una subclase que lanza una excepción en un método que el cliente de la base usa con normalidad.',
      en: 'The typical case is a subclass that throws on a method the base client uses normally.',
    },
  },
  {
    id: 'th-oop-02',
    topic: 'SOLID',
    prompt: {
      es: '¿Qué pide el principio de segregación de interfaces?',
      en: 'What does the interface segregation principle ask for?',
    },
    answer: {
      es: 'Interfaces pequeñas por cliente, para que nadie dependa de métodos que no usa.',
      en: 'Small interfaces per client, so nobody depends on methods it does not use.',
    },
    distractors: [
      {
        es: 'Que cada clase implemente una sola interfaz.',
        en: 'That each class implements only one interface.',
      },
      {
        es: 'Que las interfaces no tengan métodos y el estado viva en clases abstractas.',
        en: 'That interfaces have no methods and state lives in abstract classes.',
      },
    ],
    explanation: {
      es: 'Si una interfaz es gorda, un cambio en un método que no usas te obliga a recompilar o a dejar implementaciones vacías.',
      en: 'If an interface is fat, a change in a method you do not use forces a recompile or an empty implementation.',
    },
  },
  {
    id: 'th-oop-03',
    topic: 'SOLID',
    prompt: {
      es: '¿Cuál es la diferencia entre inversión de dependencias e inyección de dependencias?',
      en: 'What is the difference between dependency inversion and dependency injection?',
    },
    answer: {
      es: 'La inversión es depender de una abstracción. La inyección es solo la forma de pasar ese colaborador, por constructor o por setter.',
      en: 'Inversion means depending on an abstraction. Injection is only how you pass that collaborator, by constructor or by setter.',
    },
    distractors: [
      {
        es: 'Son lo mismo: un contenedor de inyección garantiza que se cumple el principio.',
        en: 'They are the same: an injection container guarantees the principle is met.',
      },
      {
        es: 'La inversión exige que la interfaz viva en el módulo de bajo nivel.',
        en: 'Inversion requires the interface to live in the low level module.',
      },
    ],
    explanation: {
      es: 'Puedes inyectar una clase concreta y seguir acoplado al detalle. La interfaz debe pertenecer a quien la usa.',
      en: 'You can inject a concrete class and still be coupled to the detail. The interface should belong to the code that uses it.',
    },
  },
  {
    id: 'th-oop-04',
    topic: 'SOLID',
    prompt: {
      es: '¿Cómo agregarías un nuevo tipo de descuento sin reabrir el código que ya está en producción?',
      en: 'How would you add a new discount type without reopening code that is already in production?',
    },
    answer: {
      es: 'Con una abstracción de descuento y una implementación nueva. El código que calcula la factura no se toca.',
      en: 'With a discount abstraction and a new implementation. The code that calculates the invoice stays untouched.',
    },
    distractors: [
      {
        es: 'Añadiendo un caso más al switch y cubriéndolo con pruebas.',
        en: 'By adding one more case to the switch and covering it with tests.',
      },
      {
        es: 'Heredando de la clase de facturación y reescribiendo todo el cálculo.',
        en: 'By inheriting from the billing class and rewriting the whole calculation.',
      },
    ],
    explanation: {
      es: 'El switch funciona, pero cada descuento nuevo vuelve a editar una clase estable. El punto de extensión suele ser una estrategia.',
      en: 'The switch works, but every new discount edits a stable class again. The extension point is usually a strategy.',
    },
  },
  {
    id: 'th-oop-05',
    topic: 'SOLID',
    prompt: {
      es: '¿Qué significa una sola responsabilidad en el SRP?',
      en: 'What does a single responsibility mean in the SRP?',
    },
    answer: {
      es: 'Una sola razón para cambiar, normalmente un solo actor de negocio que pide cambios sobre esa clase.',
      en: 'One reason to change, usually one business actor who asks for changes to that class.',
    },
    distractors: [
      {
        es: 'Un solo método público, para que la clase haga una sola tarea.',
        en: 'One public method, so the class does a single task.',
      },
      {
        es: 'Una sola dependencia inyectada.',
        en: 'A single injected dependency.',
      },
    ],
    explanation: {
      es: 'Contar métodos no define el principio. Si finanzas y marketing cambian la misma clase, hay dos responsabilidades.',
      en: 'Counting methods does not define the principle. If finance and marketing both change the same class, there are two responsibilities.',
    },
  },
  {
    id: 'th-oop-06',
    topic: 'POO',
    prompt: {
      es: '¿Por qué se suele preferir composición a herencia?',
      en: 'Why is composition usually preferred over inheritance?',
    },
    answer: {
      es: 'Porque la herencia ata la subclase a los detalles de la base y un cambio interno puede romperla. La composición deja cambiar el colaborador.',
      en: 'Because inheritance ties the subclass to base details and an internal change can break it. Composition lets you swap the collaborator.',
    },
    distractors: [
      {
        es: 'Porque la herencia es más lenta por el despacho virtual.',
        en: 'Because inheritance is slower due to virtual dispatch.',
      },
      {
        es: 'Porque la composición permite heredar estado de varias clases.',
        en: 'Because composition lets you inherit state from several classes.',
      },
    ],
    explanation: {
      es: 'El problema se llama clase base frágil: la subclase depende de cómo la base se llama a sí misma.',
      en: 'The problem is called the fragile base class: the subclass depends on how the base calls itself.',
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
      es: 'La abstracción es el contrato que el cliente ve. El encapsulamiento esconde cómo se guarda y se calcula ese comportamiento.',
      en: 'Abstraction is the contract the client sees. Encapsulation hides how that behaviour is stored and computed.',
    },
    distractors: [
      {
        es: 'La abstracción se hace con interfaces y el encapsulamiento con clases abstractas.',
        en: 'Abstraction is done with interfaces and encapsulation with abstract classes.',
      },
      {
        es: 'El encapsulamiento oculta la clase entera y la abstracción solo oculta los campos.',
        en: 'Encapsulation hides the whole class and abstraction only hides the fields.',
      },
    ],
    explanation: {
      es: 'Son ideas distintas: una dice qué ofreces y la otra impide tocar los detalles internos.',
      en: 'They are different ideas: one says what you offer and the other stops callers from touching internal details.',
    },
  },
  {
    id: 'th-oop-08',
    topic: 'Polimorfismo',
    prompt: {
      es: '¿Qué se decide al compilar y qué en ejecución: la sobrecarga o la sobrescritura?',
      en: 'What is decided at compile time and what at runtime: overloading or overriding?',
    },
    answer: {
      es: 'La sobrecarga se elige por los tipos declarados de los argumentos. La sobrescritura usa el tipo real del objeto.',
      en: 'Overloading is chosen from the declared types of the arguments. Overriding uses the real type of the object.',
    },
    distractors: [
      {
        es: 'Las dos se resuelven en ejecución, porque la máquina virtual conoce los tipos reales.',
        en: 'Both are resolved at runtime, because the virtual machine knows the real types.',
      },
      {
        es: 'La sobrecarga usa el tipo real y la sobrescritura el tipo declarado.',
        en: 'Overloading uses the real type and overriding the declared type.',
      },
    ],
    explanation: {
      es: 'Por eso un objeto String guardado en una variable Object llama a la sobrecarga de Object, no a la de String.',
      en: 'That is why a String stored in an Object variable calls the Object overload, not the String one.',
    },
  },
  {
    id: 'th-oop-09',
    topic: 'Acoplamiento',
    prompt: {
      es: '¿Qué dice la ley de Demeter en una frase práctica?',
      en: 'What does the Law of Demeter say in one practical sentence?',
    },
    answer: {
      es: 'Un método solo debería hablar con sus propios datos, sus parámetros, los objetos que crea y consigo mismo.',
      en: 'A method should only talk to its own data, its parameters, the objects it creates and itself.',
    },
    distractors: [
      {
        es: 'Prohíbe encadenar llamadas, así que un builder que devuelve this la rompe.',
        en: 'It forbids chained calls, so a builder that returns this breaks it.',
      },
      {
        es: 'Limita la herencia a dos niveles.',
        en: 'It limits inheritance to two levels.',
      },
    ],
    explanation: {
      es: 'Lo que se evita es el tren de getters que revela la estructura interna de otros objetos.',
      en: 'What you avoid is the train of getters that reveals the internal structure of other objects.',
    },
  },
  {
    id: 'th-oop-10',
    topic: 'Diseño',
    prompt: {
      es: '¿Qué conviene hacer con un paquete que usan muchos módulos y que casi no depende de nadie?',
      en: 'Many modules use a package and it depends on almost nobody. What should you do with it?',
    },
    answer: {
      es: 'Tratarlo como estable y dejarlo abstracto, para poder extender el sistema sin modificarlo.',
      en: 'Treat it as stable and keep it abstract, so the system can be extended without modifying it.',
    },
    distractors: [
      {
        es: 'Es inestable, así que hay que hacer que dependa de más módulos.',
        en: 'It is unstable, so it should be made to depend on more modules.',
      },
      {
        es: 'Está aislado y es candidato a borrarse.',
        en: 'It is isolated and a candidate for deletion.',
      },
    ],
    explanation: {
      es: 'Si muchos dependen de él, cambiarlo es caro. Las interfaces y los contratos encajan mejor ahí que las clases concretas.',
      en: 'If many modules depend on it, changing it is expensive. Interfaces and contracts fit there better than concrete classes.',
    },
  },
];
