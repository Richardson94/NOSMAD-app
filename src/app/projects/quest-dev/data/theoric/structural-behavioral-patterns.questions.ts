import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_STRUCTURAL_BEHAVIORAL_PATTERNS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-sbp-01',
    topic: 'Patrones GoF',
    prompt: {
      es: '¿Cuál es la intención de Adapter y en qué se diferencian el adapter de objeto y el de clase?',
      en: 'What is the intent of Adapter and how do the object adapter and the class adapter differ?',
    },
    answer: {
      es: 'Convierte la interfaz de una clase existente en la que el cliente espera; el de objeto delega por composición y el de clase hereda del adaptado.',
      en: 'It converts the interface of an existing class into the one the client expects; the object adapter delegates through composition and the class adapter inherits from the adaptee.',
    },
    distractors: [
      {
        es: 'Añade responsabilidades al objeto conservando su interfaz; el de objeto envuelve una instancia y el de clase se apila mediante herencia.',
        en: 'It adds responsibilities to the object while keeping its interface; the object variant wraps an instance and the class variant is stacked through inheritance.',
      },
      {
        es: 'Simplifica un subsistema complejo tras una interfaz única; el de objeto expone métodos de instancia y el de clase métodos estáticos.',
        en: 'It simplifies a complex subsystem behind a single interface; the object variant exposes instance methods and the class variant static methods.',
      },
    ],
    explanation: {
      es: 'Adapter existe por incompatibilidad de interfaces, como InputStreamReader adaptando bytes a caracteres o Arrays.asList adaptando un array a List. El adapter de clase necesita herencia múltiple, así que en Java se limita a extender la clase adaptada e implementar la interfaz destino, y no puede adaptar sus subclases. Añadir comportamiento manteniendo la interfaz es Decorator y simplificar un subsistema es Facade.',
      en: 'Adapter exists because of interface incompatibility, like InputStreamReader adapting bytes to characters or Arrays.asList adapting an array to List. The class adapter needs multiple inheritance, so in Java it is limited to extending the adaptee and implementing the target interface, and it cannot adapt its subclasses. Adding behaviour while keeping the interface is Decorator and simplifying a subsystem is Facade.',
    },
  },
  {
    id: 'th-sbp-02',
    topic: 'Patrones GoF',
    prompt: {
      es: '¿En qué se diferencia Facade de Mediator?',
      en: 'How does Facade differ from Mediator?',
    },
    answer: {
      es: 'Facade ofrece una entrada simplificada y unidireccional a un subsistema que no la conoce; Mediator sí es conocido por los colegas y coordina su comunicación mutua.',
      en: 'Facade offers a simplified one-way entry point into a subsystem that does not know about it; Mediator is known by the colleagues and coordinates their mutual communication.',
    },
    distractors: [
      {
        es: 'Facade adapta interfaces incompatibles para que el cliente pueda usarlas y Mediator las unifica en una interfaz común.',
        en: 'Facade adapts incompatible interfaces so the client can use them and Mediator unifies them into a common interface.',
      },
      {
        es: 'Facade oculta las clases internas de modo que resultan inaccesibles, mientras que Mediator solo reduce el número de llamadas del cliente.',
        en: 'Facade hides the internal classes so they become inaccessible, while Mediator only reduces the number of client calls.',
      },
    ],
    explanation: {
      es: 'La diferencia decisiva es el sentido de la dependencia: las clases del subsistema no tienen ninguna referencia a la fachada, mientras que los colegas notifican activamente al mediador y reciben órdenes suyas. Además una fachada no prohíbe usar el subsistema directamente, solo ofrece un camino cómodo por defecto, y ese es el malentendido más habitual. Adaptar interfaces incompatibles es Adapter.',
      en: 'The decisive difference is the direction of the dependency: subsystem classes hold no reference to the facade, whereas colleagues actively notify the mediator and receive orders from it. A facade also does not forbid using the subsystem directly, it only offers a convenient default path, and that is the most common misreading. Adapting incompatible interfaces is Adapter.',
    },
  },
  {
    id: 'th-sbp-03',
    topic: 'Patrones GoF',
    prompt: {
      es: 'Tienes formas geométricas y varios motores de dibujado que deben evolucionar por separado. ¿Qué distingue a Bridge de Strategy en este caso?',
      en: 'You have geometric shapes and several rendering engines that must evolve separately. What distinguishes Bridge from Strategy here?',
    },
    answer: {
      es: 'Bridge separa dos jerarquías completas, abstracción e implementación, para que crezcan de forma independiente; Strategy solo intercambia un algoritmo detrás de una interfaz.',
      en: 'Bridge separates two whole hierarchies, abstraction and implementation, so both can grow independently; Strategy only swaps an algorithm behind an interface.',
    },
    distractors: [
      {
        es: 'Bridge envuelve el objeto para controlar el acceso a él y Strategy lo envuelve para añadirle comportamiento adicional.',
        en: 'Bridge wraps the object to control access to it and Strategy wraps it to add extra behaviour.',
      },
      {
        es: 'Bridge resuelve la variación en tiempo de compilación mediante herencia y Strategy en ejecución mediante composición.',
        en: 'Bridge resolves the variation at compile time through inheritance and Strategy at runtime through composition.',
      },
    ],
    explanation: {
      es: 'Los dos delegan en una interfaz y se ven casi iguales en código, pero Bridge es una decisión estructural tomada de antemano para evitar la explosión combinatoria de subclases, tres formas por cuatro motores serían doce clases. Strategy es una decisión de comportamiento sobre cómo se calcula algo. Bridge también compone, así que hablar de herencia en tiempo de compilación es falso; el ejemplo canónico es JDBC, donde el driver es el lado de la implementación.',
      en: 'Both delegate to an interface and look nearly identical in code, but Bridge is a structural decision taken up front to avoid a combinatorial explosion of subclasses, since three shapes times four engines would be twelve classes. Strategy is a behavioural decision about how something is computed. Bridge also composes, so claiming compile time inheritance is false; the canonical example is JDBC, where the driver is the implementation side.',
    },
  },
  {
    id: 'th-sbp-04',
    topic: 'Patrones GoF',
    prompt: {
      es: 'En Composite, ¿en qué consiste el compromiso entre transparencia y seguridad de la interfaz?',
      en: 'In Composite, what does the trade-off between interface transparency and safety consist of?',
    },
    answer: {
      es: 'Declarar add y remove en el componente da uniformidad pero obliga a las hojas a rechazar esas operaciones; declararlas solo en el compuesto es seguro pero exige comprobar el tipo antes de usarlas.',
      en: 'Declaring add and remove on the component gives uniformity but forces leaves to reject those operations; declaring them only on the composite is safe but requires checking the type before using them.',
    },
    distractors: [
      {
        es: 'Consiste en decidir si el cliente recorre el árbol con un iterador propio o si cada nodo expone sus hijos como colección inmutable.',
        en: 'It consists of deciding whether the client traverses the tree with a dedicated iterator or whether each node exposes its children as an immutable collection.',
      },
      {
        es: 'Consiste en elegir entre permitir que un nodo tenga varios padres o mantener la estructura como un árbol estricto.',
        en: 'It consists of choosing between letting a node have several parents or keeping the structure as a strict tree.',
      },
    ],
    explanation: {
      es: 'GoF plantea el dilema de forma explícita: la transparencia sitúa la gestión de hijos en Component para que hoja y compuesto sean indistinguibles, al precio de métodos que lanzan UnsupportedOperationException; la seguridad los deja en Composite y obliga a instanceof o a una conversión de tipo. El recorrido y los padres compartidos son problemas reales de las estructuras en árbol, pero no son este compromiso.',
      en: 'GoF states the dilemma explicitly: transparency puts child management in Component so leaf and composite become indistinguishable, at the price of methods that throw UnsupportedOperationException; safety keeps them in Composite and forces instanceof or a cast. Traversal and shared parents are real problems in tree structures, but they are not this trade-off.',
    },
  },
  {
    id: 'th-sbp-05',
    topic: 'Patrones GoF',
    prompt: {
      es: 'En Flyweight, ¿cómo se reparte el estado entre el objeto compartido y el cliente?',
      en: 'In Flyweight, how is state split between the shared object and the client?',
    },
    answer: {
      es: 'El estado intrínseco es inmutable e independiente del contexto y vive en el flyweight compartido; el extrínseco depende del contexto y se pasa como argumento en cada operación.',
      en: 'Intrinsic state is immutable and context independent and lives inside the shared flyweight; extrinsic state depends on the context and is passed as an argument on every operation.',
    },
    distractors: [
      {
        es: 'El estado intrínseco se guarda en una caché de instancias indexada por clave y el extrínseco se copia en cada clon para que no quede compartido.',
        en: 'Intrinsic state is kept in a cache of instances indexed by key and extrinsic state is copied into every clone so it does not stay shared.',
      },
      {
        es: 'El flyweight conserva todo el estado y el cliente solo mantiene una referencia débil para que el recolector pueda liberarlo cuando convenga.',
        en: 'The flyweight keeps the whole state and the client only holds a weak reference so the collector can free it when convenient.',
      },
    ],
    explanation: {
      es: 'El reparto es lo que hace viable compartir: solo puede compartirse lo que no depende del contexto y no cambia, como en la caché de Integer.valueOf de -128 a 127 o en las cadenas internadas. Pasar el estado extrínseco, por ejemplo la posición o el tamaño de fuente de un carácter, mantiene bajísimo el número de instancias. Una caché por clave describe un multiton o registro, y las referencias débiles son una técnica de gestión de memoria, no el reparto del patrón.',
      en: 'The split is what makes sharing viable: only what is context independent and never changes can be shared, as in the Integer.valueOf cache from -128 to 127 or in interned strings. Passing extrinsic state, for example the position or font size of a character, keeps the instance count extremely low. A keyed cache describes a multiton or registry, and weak references are a memory management technique, not the split defined by the pattern.',
    },
  },
  {
    id: 'th-sbp-06',
    topic: 'Patrones GoF',
    prompt: {
      es: '¿Qué distingue a las variantes virtual, remoto, de protección y referencia inteligente de Proxy?',
      en: 'What distinguishes the virtual, remote, protection and smart reference variants of Proxy?',
    },
    answer: {
      es: 'El virtual retrasa la creación o la carga del objeto real, el remoto lo representa en otro proceso, el de protección comprueba permisos y la referencia inteligente cuenta usos o libera recursos.',
      en: 'The virtual one delays creating or loading the real object, the remote one represents it in another process, the protection one checks permissions and the smart reference counts usages or releases resources.',
    },
    distractors: [
      {
        es: 'Todas añaden comportamiento adicional al objeto envuelto y se diferencian por el orden en el que se apilan sobre él.',
        en: 'All of them add extra behaviour to the wrapped object and differ in the order in which they are stacked over it.',
      },
      {
        es: 'Todas exponen una interfaz distinta de la del objeto real para adaptarla a lo que el cliente necesita en cada escenario.',
        en: 'All of them expose an interface different from the real object one in order to adapt it to what the client needs in each scenario.',
      },
    ],
    explanation: {
      es: 'Un Proxy siempre conserva la misma interfaz que el sujeto real y lo único que cambia entre variantes es el motivo para mediar. Los proxies perezosos de Hibernate son virtuales, y su síntoma clásico es LazyInitializationException al usarlos fuera de la sesión; los stubs de RMI son remotos y los interceptores de Spring Security actúan como proxy de protección. Sumar comportamiento es Decorator y cambiar la interfaz es Adapter.',
      en: 'A Proxy always keeps the same interface as the real subject and the only thing changing between variants is the reason for mediating. Hibernate lazy proxies are virtual, and their classic symptom is LazyInitializationException when used outside the session; RMI stubs are remote and Spring Security interceptors act as protection proxies. Adding behaviour is Decorator and changing the interface is Adapter.',
    },
  },
  {
    id: 'th-sbp-07',
    topic: 'Patrones GoF',
    prompt: {
      es: '¿Cómo soporta el patrón Command la operación de deshacer?',
      en: 'How does the Command pattern support the undo operation?',
    },
    answer: {
      es: 'Cada comando encapsula la petición junto con los datos necesarios para revertirla y expone una operación inversa, así que una pila de comandos ejecutados permite deshacer en orden contrario.',
      en: 'Each command encapsulates the request together with the data needed to revert it and exposes an inverse operation, so a stack of executed commands allows undoing in reverse order.',
    },
    distractors: [
      {
        es: 'Cada comando guarda una instantánea completa del receptor antes de ejecutarse y la restaura tal cual cuando se deshace.',
        en: 'Each command stores a full snapshot of the receiver before executing and restores it as it was when undone.',
      },
      {
        es: 'El invocador registra los cambios en un diario transaccional y los revierte llamando a rollback sobre el receptor.',
        en: 'The invoker records the changes in a transactional journal and reverts them by calling rollback on the receiver.',
      },
    ],
    explanation: {
      es: 'Al convertir la petición en objeto, guardar los comandos ejecutados en una pila da deshacer y rehacer casi gratis, y cada comando solo necesita su propio delta, por ejemplo el texto insertado y su posición. Guardar el estado completo del receptor es Memento, que se combina a menudo con Command pero es otro patrón y consume mucha más memoria. Un diario transaccional es un mecanismo de infraestructura ajeno al patrón.',
      en: 'By turning the request into an object, keeping executed commands on a stack gives undo and redo almost for free, and each command only needs its own delta, for example the inserted text and its position. Storing the full receiver state is Memento, often combined with Command but a different pattern and far more memory hungry. A transactional journal is an infrastructure mechanism outside the pattern.',
    },
  },
  {
    id: 'th-sbp-08',
    topic: 'Patrones GoF',
    prompt: {
      es: 'Si Command y Strategy encapsulan comportamiento en un objeto, ¿en qué se diferencian?',
      en: 'If Command and Strategy both encapsulate behaviour in an object, how do they differ?',
    },
    answer: {
      es: 'Command encapsula una petición completa con su receptor y sus argumentos para ejecutarla más tarde; Strategy encapsula un algoritmo intercambiable que el contexto invoca cuando lo necesita.',
      en: 'Command encapsulates a whole request with its receiver and arguments so it can be executed later; Strategy encapsulates an interchangeable algorithm that the context invokes when it needs it.',
    },
    distractors: [
      {
        es: 'Command define el esqueleto de la operación y deja pasos concretos a las subclases, mientras que Strategy delega la operación completa.',
        en: 'Command defines the skeleton of the operation and leaves concrete steps to subclasses, while Strategy delegates the whole operation.',
      },
      {
        es: 'Command siempre admite deshacer y Strategy nunca, porque una estrategia no puede conservar estado interno propio.',
        en: 'Command always supports undo and Strategy never does, because a strategy cannot keep internal state of its own.',
      },
    ],
    explanation: {
      es: 'La diferencia es la intención: Command desacopla al emisor del momento de la invocación, lo que habilita colas, reintentos, registro y deshacer, mientras que Strategy resuelve el cómo se calcula algo. Runnable y Callable son comandos y Comparator es una estrategia. El esqueleto con pasos en subclases es Template Method, deshacer es una extensión opcional de Command, y una estrategia puede guardar estado como un umbral configurado.',
      en: 'The difference is intent: Command decouples the sender from the moment of invocation, enabling queues, retries, logging and undo, while Strategy solves how something is computed. Runnable and Callable are commands and Comparator is a strategy. The skeleton with steps in subclasses is Template Method, undo is an optional extension of Command, and a strategy can keep state such as a configured threshold.',
    },
  },
  {
    id: 'th-sbp-09',
    topic: 'Patrones GoF',
    prompt: {
      es: '¿Qué diferencia la iteración externa de la interna y qué significa que un iterador sea fail fast?',
      en: 'What differentiates external from internal iteration and what does it mean for an iterator to be fail fast?',
    },
    answer: {
      es: 'En la externa el cliente controla el avance con hasNext y next; en la interna la colección recibe una función y recorre ella misma. Fail fast significa que detecta modificaciones estructurales durante el recorrido y lanza ConcurrentModificationException.',
      en: 'In external iteration the client drives the advance with hasNext and next; in internal iteration the collection receives a function and loops itself. Fail fast means it detects structural modifications during traversal and throws ConcurrentModificationException.',
    },
    distractors: [
      {
        es: 'La externa recorre en un solo hilo y la interna divide la colección para recorrerla en paralelo; fail fast significa que el recorrido se interrumpe en el primer elemento que provoque un error.',
        en: 'External iteration runs on one thread and internal iteration splits the collection to traverse it in parallel; fail fast means traversal stops at the first element that causes an error.',
      },
      {
        es: 'La externa trabaja sobre una copia de la colección y la interna sobre la original; fail fast significa que el iterador bloquea la colección mientras dura el recorrido.',
        en: 'External iteration works on a copy of the collection and internal iteration on the original; fail fast means the iterator locks the collection for the whole traversal.',
      },
    ],
    explanation: {
      es: 'La iteración externa es el bucle for each sobre un Iterator y la interna es forEach o un Stream, donde la biblioteca posee el bucle y puede optimizarlo o paralelizarlo, aunque el paralelismo es una decisión aparte con parallelStream. El fail fast se implementa comparando un contador modCount y la documentación advierte que es de mejor esfuerzo, no una garantía. Copiar al escribir es CopyOnWriteArrayList y bloquear es Collections.synchronizedList.',
      en: 'External iteration is the for each loop over an Iterator and internal iteration is forEach or a Stream, where the library owns the loop and can optimise or parallelise it, although parallelism is a separate decision made with parallelStream. Fail fast is implemented by comparing a modCount counter and the documentation warns that it is best effort, not a guarantee. Copying on write is CopyOnWriteArrayList and locking is Collections.synchronizedList.',
    },
  },
  {
    id: 'th-sbp-10',
    topic: 'Patrones GoF',
    prompt: {
      es: '¿Cómo consigue Visitor un doble despacho en un lenguaje que solo ofrece despacho simple?',
      en: 'How does Visitor achieve double dispatch in a language that only offers single dispatch?',
    },
    answer: {
      es: 'El cliente llama a accept sobre el elemento, lo que despacha según el tipo concreto del elemento, y este llama a visit pasando this, lo que despacha según el tipo del visitante.',
      en: 'The client calls accept on the element, which dispatches on the concrete element type, and the element calls visit passing this, which dispatches on the visitor type.',
    },
    distractors: [
      {
        es: 'Sobrecarga el método visit para cada tipo de elemento y el compilador elige la sobrecarga adecuada según el tipo real en ejecución.',
        en: 'It overloads the visit method for every element type and the compiler picks the right overload according to the real runtime type.',
      },
      {
        es: 'Usa reflexión o instanceof dentro del visitante para identificar el tipo concreto del elemento antes de ejecutar la operación.',
        en: 'It uses reflection or instanceof inside the visitor to identify the concrete element type before running the operation.',
      },
    ],
    explanation: {
      es: 'Las dos llamadas virtuales son todo el truco: accept resuelve el tipo del elemento y visit resuelve el tipo del visitante. La resolución de sobrecargas en Java ocurre en compilación sobre el tipo estático, y precisamente por eso hace falta el rodeo por accept. La cadena de instanceof es la alternativa que se escribe cuando no se puede modificar la jerarquía, algo que el switch con patrones de Java moderno vuelve razonable.',
      en: 'The two virtual calls are the whole trick: accept resolves the element type and visit resolves the visitor type. Overload resolution in Java happens at compile time on the static type, and that is precisely why the detour through accept is needed. An instanceof chain is the alternative written when the hierarchy cannot be modified, something modern Java pattern matching for switch makes reasonable.',
    },
  },
  {
    id: 'th-sbp-11',
    topic: 'Patrones GoF',
    prompt: {
      es: '¿Cuál es el compromiso principal de Visitor respecto a cómo evoluciona el código?',
      en: 'What is the main trade-off of Visitor regarding how the code evolves?',
    },
    answer: {
      es: 'Añadir una operación es fácil porque basta escribir otro visitante, pero añadir un tipo de elemento obliga a modificar la interfaz del visitante y todas sus implementaciones.',
      en: 'Adding an operation is easy because writing another visitor is enough, but adding an element type forces changes to the visitor interface and to every implementation.',
    },
    distractors: [
      {
        es: 'Añadir un tipo de elemento es fácil porque basta una subclase más, pero añadir una operación obliga a tocar toda la jerarquía existente.',
        en: 'Adding an element type is easy because one more subclass is enough, but adding an operation forces changes across the whole existing hierarchy.',
      },
      {
        es: 'Las dos extensiones resultan fáciles porque el visitante y los elementos dependen solo de interfaces y nunca de clases concretas.',
        en: 'Both extensions turn out easy because the visitor and the elements depend only on interfaces and never on concrete classes.',
      },
    ],
    explanation: {
      es: 'Es el problema de la expresión: Visitor gira la matriz de tipos por operaciones y cambia un eje de extensibilidad por el otro. La opción invertida describe justamente lo contrario, poner la operación como método de cada elemento, que es el enfoque orientado a objetos por defecto que Visitor abandona a propósito. Con jerarquías selladas el coste se vuelve aceptable porque el conjunto de tipos es cerrado y el compilador avisa de los casos que faltan.',
      en: 'This is the expression problem: Visitor pivots the matrix of types by operations and trades one axis of extensibility for the other. The reversed option describes exactly the opposite, putting the operation as a method on each element, which is the default object oriented approach Visitor deliberately abandons. With sealed hierarchies the cost becomes acceptable because the set of types is closed and the compiler reports the missing cases.',
    },
  },
  {
    id: 'th-sbp-12',
    topic: 'Patrones GoF',
    prompt: {
      es: '¿Qué ventaja tiene Memento frente a serializar el objeto completo para poder restaurar su estado?',
      en: 'What advantage does Memento have over serialising the whole object in order to restore its state?',
    },
    answer: {
      es: 'El memento guarda solo el estado necesario y preserva el encapsulamiento, porque únicamente el originador sabe interpretarlo y el cuidador lo trata como opaco.',
      en: 'The memento stores only the necessary state and preserves encapsulation, because only the originator knows how to interpret it and the caretaker treats it as opaque.',
    },
    distractors: [
      {
        es: 'El memento registra cada cambio como un objeto con su operación inversa, lo que permite deshacer paso a paso sin restaurar todo el estado.',
        en: 'The memento records each change as an object with its inverse operation, which allows undoing step by step without restoring the whole state.',
      },
      {
        es: 'El memento evita el coste de la reflexión porque la serialización de Java copia también los campos transient y los estáticos.',
        en: 'The memento avoids the cost of reflection because Java serialisation also copies transient and static fields.',
      },
    ],
    explanation: {
      es: 'El patrón reparte responsabilidades: el originador crea y restaura, el cuidador almacena sin inspeccionar, así que ningún detalle interno se filtra. La serialización arrastra todo el grafo alcanzable y se rompe cuando la clase cambia, lanzando InvalidClassException si el serialVersionUID no coincide. Además ignora los campos estáticos y omite los transient, de modo que esa afirmación es falsa, y registrar operaciones inversas por cambio es Command.',
      en: 'The pattern splits responsibilities: the originator creates and restores, the caretaker stores without inspecting, so no internal detail leaks. Serialisation drags the whole reachable graph and breaks when the class changes, throwing InvalidClassException if the serialVersionUID does not match. It also ignores static fields and skips transient ones, so that claim is false, and recording inverse operations per change is Command.',
    },
  },
  {
    id: 'th-sbp-13',
    topic: 'Patrones GoF',
    prompt: {
      es: '¿Qué gana un modelo de transiciones implementado con el patrón State frente a un enum con switch?',
      en: 'What does a transition model implemented with the State pattern gain over an enum with a switch?',
    },
    answer: {
      es: 'Cada estado es una clase con su propio comportamiento que decide la transición siguiente, así que añadir un estado no obliga a revisar los condicionales existentes.',
      en: 'Each state is a class with its own behaviour that decides the next transition, so adding a state does not force revisiting the existing conditionals.',
    },
    distractors: [
      {
        es: 'Permite que el cliente intercambie en ejecución el algoritmo que prefiera, sin que el objeto conserve memoria de la elección anterior.',
        en: 'It lets the client swap at runtime whichever algorithm it prefers, without the object keeping any memory of the previous choice.',
      },
      {
        es: 'Garantiza que las transiciones inválidas se detecten en tiempo de compilación, algo que resulta imposible con un enum.',
        en: 'It guarantees that invalid transitions are detected at compile time, something impossible to achieve with an enum.',
      },
    ],
    explanation: {
      es: 'State sustituye el condicional por polimorfismo, de modo que cada clase contiene solo sus reglas y el compilador obliga a implementar todas las operaciones al añadir un estado, evitando el switch olvidado en tres sitios distintos. Que el cliente elija libremente y sin memoria es Strategy. Y ninguno de los dos enfoques valida transiciones en compilación: State lanza IllegalStateException, y un enum de Java incluso admite métodos abstractos por constante, así que para máquinas pequeñas sigue siendo una opción válida.',
      en: 'State replaces the conditional with polymorphism, so each class holds only its own rules and the compiler forces you to implement every operation when adding a state, avoiding the switch forgotten in three different places. Letting the client choose freely and without memory is Strategy. Neither approach validates transitions at compile time: State throws IllegalStateException, and a Java enum even supports abstract methods per constant, so for small machines it remains a valid option.',
    },
  },
  {
    id: 'th-sbp-14',
    topic: 'Patrones GoF',
    prompt: {
      es: '¿Qué papel cumplen los métodos gancho protegidos en Template Method?',
      en: 'What role do protected hook methods play in Template Method?',
    },
    answer: {
      es: 'Son puntos de extensión opcionales con implementación vacía o por defecto que la subclase puede sobrescribir, mientras el método plantilla permanece final y fija el orden de los pasos.',
      en: 'They are optional extension points with an empty or default implementation that the subclass may override, while the template method stays final and fixes the order of the steps.',
    },
    distractors: [
      {
        es: 'Son métodos abstractos que la subclase está obligada a implementar para que la clase concreta llegue a compilar.',
        en: 'They are abstract methods that the subclass is obliged to implement for the concrete class to compile at all.',
      },
      {
        es: 'Son métodos que el framework invoca por reflexión según convenciones de nombre para no acoplar la clase base a la subclase.',
        en: 'They are methods the framework invokes reflectively following naming conventions so the base class is not coupled to the subclass.',
      },
    ],
    explanation: {
      es: 'GoF distingue las operaciones primitivas, abstractas y obligatorias, de los ganchos, opcionales y con comportamiento por defecto inofensivo, como beforeHandshake en el soporte WebSocket de Spring. Marcar el método plantilla como final es lo que protege el invariante del orden y evita que una subclase rompa el algoritmo. Las llamadas por convención de nombre y reflexión describen un contenedor guiado por anotaciones, no ganchos basados en herencia.',
      en: 'GoF distinguishes primitive operations, abstract and mandatory, from hooks, optional and with a harmless default behaviour, such as beforeHandshake in the Spring WebSocket support. Marking the template method final is what protects the ordering invariant and prevents a subclass from breaking the algorithm. Calls by naming convention and reflection describe an annotation driven container, not inheritance based hooks.',
    },
  },
  {
    id: 'th-sbp-15',
    topic: 'Patrones GoF',
    prompt: {
      es: '¿Cuál es el contrato de un manejador en Chain of Responsibility y qué ocurre si nadie atiende la petición?',
      en: 'What is the contract of a handler in Chain of Responsibility and what happens if nobody handles the request?',
    },
    answer: {
      es: 'Cada manejador decide si procesa la petición o la delega al siguiente, y si ninguno la atiende el resultado depende de un manejador final por defecto, porque el patrón no garantiza recepción.',
      en: 'Each handler decides whether to process the request or delegate it to the next one, and if nobody handles it the outcome depends on a default tail handler, because the pattern does not guarantee reception.',
    },
    distractors: [
      {
        es: 'Todos los manejadores reciben la petición y el resultado final es la combinación de las respuestas que devuelve cada uno.',
        en: 'Every handler receives the request and the final outcome is the combination of the responses each of them returns.',
      },
      {
        es: 'La cadena se detiene en el primer manejador que lance una excepción y el marco vuelve a recorrerla desde el principio.',
        en: 'The chain stops at the first handler that throws an exception and the framework walks it again from the beginning.',
      },
    ],
    explanation: {
      es: 'El patrón desacopla al emisor del receptor dando a varios objetos la oportunidad de atender la petición, y GoF advierte explícitamente que la recepción no está garantizada, de ahí que añadir un manejador final que registre o rechace sea una práctica habitual. Difundir a todos es Observer. La cadena de filtros de un servlet es la implementación canónica: llamar a chain.doFilter continúa y no llamarlo corta el recorrido.',
      en: 'The pattern decouples sender from receiver by giving several objects the chance to handle the request, and GoF explicitly warns that reception is not guaranteed, which is why adding a tail handler that logs or rejects is common practice. Broadcasting to everyone is Observer. A servlet filter chain is the canonical implementation: calling chain.doFilter continues and not calling it cuts the traversal short.',
    },
  },
  {
    id: 'th-sbp-16',
    topic: 'Patrones GoF',
    prompt: {
      es: '¿Cuál es la intención del patrón Interpreter?',
      en: 'What is the intent of the Interpreter pattern?',
    },
    answer: {
      es: 'Representar la gramática de un lenguaje como una jerarquía de clases donde cada nodo del árbol sintáctico sabe evaluarse a sí mismo dado un contexto.',
      en: 'Represent the grammar of a language as a class hierarchy where each node of the syntax tree knows how to evaluate itself given a context.',
    },
    distractors: [
      {
        es: 'Recorrer una estructura de objetos aplicando operaciones nuevas sin modificar las clases de los nodos que la componen.',
        en: 'Traverse an object structure applying new operations without modifying the classes of the nodes that compose it.',
      },
      {
        es: 'Traducir las peticiones del cliente a la sintaxis que espera un sistema externo, ocultando el protocolo concreto de comunicación.',
        en: 'Translate client requests into the syntax an external system expects, hiding the concrete communication protocol.',
      },
    ],
    explanation: {
      es: 'Interpreter define expresiones terminales y no terminales con un método interpret común que recibe el contexto, como en una expresión regular o un motor de reglas de negocio; encaja con gramáticas pequeñas y estables y se degrada rápido cuando la gramática crece, momento en el que conviene un generador de analizadores. Añadir operaciones sobre el mismo árbol sin tocar los nodos es Visitor, patrón que suele aplicarse encima. Traducir al protocolo de un sistema externo es Adapter.',
      en: 'Interpreter defines terminal and non-terminal expressions with a common interpret method receiving the context, as in a regular expression or a business rule engine; it fits small stable grammars and degrades quickly as the grammar grows, the point where a parser generator becomes preferable. Adding operations over the same tree without touching the nodes is Visitor, a pattern usually applied on top. Translating into the protocol of an external system is Adapter.',
    },
  },
  {
    id: 'th-sbp-17',
    topic: 'Patrones GoF',
    prompt: {
      es: '¿Qué problemas clásicos aparecen al implementar Observer?',
      en: 'What classic problems show up when implementing Observer?',
    },
    answer: {
      es: 'El oyente caduco que sigue suscrito y mantiene vivo al objeto provocando una fuga de memoria, y la reentrada cuando un observador altera la lista de suscriptores durante la notificación.',
      en: 'The lapsed listener that stays subscribed and keeps the object alive causing a memory leak, and reentrancy when an observer alters the subscriber list during notification.',
    },
    distractors: [
      {
        es: 'La imposibilidad de saber cuántos observadores hay suscritos y de garantizar el orden exacto en el que serán notificados.',
        en: 'The impossibility of knowing how many observers are subscribed and of guaranteeing the exact order in which they will be notified.',
      },
      {
        es: 'La pérdida de los eventos emitidos antes de suscribirse, algo que el patrón resuelve reintentando la notificación con los nuevos observadores.',
        en: 'The loss of events emitted before subscribing, something the pattern solves by retrying the notification with the new observers.',
      },
    ],
    explanation: {
      es: 'El oyente caduco es la fuga canónica: el sujeto guarda una referencia fuerte, así que un componente que nunca se da de baja nunca se libera, y por eso en Angular se cancela la suscripción en ngOnDestroy o se usa takeUntilDestroyed. Notificar mientras un manejador se suscribe o se da de baja provoca ConcurrentModificationException, de ahí que se itere sobre una copia. El orden indefinido es real pero rara vez causa fallos, y el patrón no define ningún reintento.',
      en: 'The lapsed listener is the canonical leak: the subject holds a strong reference, so a component that never unsubscribes is never released, which is why Angular code unsubscribes in ngOnDestroy or uses takeUntilDestroyed. Notifying while a handler subscribes or unsubscribes causes ConcurrentModificationException, hence iterating over a copy. Undefined order is real but rarely causes failures, and the pattern defines no retry at all.',
    },
  },
  {
    id: 'th-sbp-18',
    topic: 'Patrones GoF',
    prompt: {
      es: '¿Qué diferencia a la publicación suscripción con un broker del Observer directo?',
      en: 'What differentiates publish subscribe with a broker from direct Observer?',
    },
    answer: {
      es: 'Con broker el emisor no conoce ni registra a los suscriptores: publica en un tema y el intermediario entrega, lo que permite desacoplar también el momento de la entrega.',
      en: 'With a broker the publisher neither knows nor registers the subscribers: it publishes to a topic and the intermediary delivers, which also decouples the moment of delivery.',
    },
    distractors: [
      {
        es: 'Con broker la comunicación es punto a punto y garantiza que un único consumidor procese cada mensaje, mientras que Observer difunde a todos.',
        en: 'With a broker the communication is point to point and guarantees that a single consumer processes each message, while Observer broadcasts to everyone.',
      },
      {
        es: 'Con broker el emisor mantiene la lista de suscriptores igual que en Observer, pero la notificación se ejecuta en otro hilo.',
        en: 'With a broker the publisher keeps the subscriber list just like in Observer, but the notification runs on another thread.',
      },
    ],
    explanation: {
      es: 'La clave es el nivel de indirección: en Observer el sujeto guarda la lista de observadores y los llama de forma síncrona, mientras que un broker como Kafka o RabbitMQ elimina cualquier referencia entre las partes y les permite estar activas en momentos distintos. La entrega a un único consumidor es la semántica de una cola, no de publicación suscripción, donde un tema reparte a todos los suscriptores. Y cambiar solo el hilo sigue siendo Observer asíncrono.',
      en: 'The key is the level of indirection: in Observer the subject keeps the observer list and calls them synchronously, whereas a broker such as Kafka or RabbitMQ removes any reference between the parties and lets them be active at different moments. Delivery to a single consumer is queue semantics, not publish subscribe, where a topic fans out to every subscriber. And changing only the thread is still an asynchronous Observer.',
    },
  },
  {
    id: 'th-sbp-19',
    topic: 'Patrones GoF',
    prompt: {
      es: '¿Qué aporta el patrón Specification para modelar reglas de negocio?',
      en: 'What does the Specification pattern provide for modelling business rules?',
    },
    answer: {
      es: 'Encapsula cada regla en un objeto con un predicado que puede combinarse con and, or y not, y reutilizarse para validar, seleccionar o construir consultas.',
      en: 'It encapsulates each rule in an object with a predicate that can be combined with and, or and not, and reused to validate, select or build queries.',
    },
    distractors: [
      {
        es: 'Encapsula un algoritmo intercambiable detrás de una interfaz para que el contexto pueda elegirlo en ejecución según la situación.',
        en: 'It encapsulates an interchangeable algorithm behind an interface so the context can choose it at runtime depending on the situation.',
      },
      {
        es: 'Encapsula las consultas de un agregado en una interfaz de dominio que oculta por completo el mecanismo de persistencia.',
        en: 'It encapsulates the queries of an aggregate in a domain interface that completely hides the persistence mechanism.',
      },
    ],
    explanation: {
      es: 'Specification convierte las reglas en objetos de primera clase y componibles, así que el mismo isSatisfiedBy sirve en memoria y puede traducirse a una consulta, que es exactamente lo que hace Spring Data con su interfaz Specification sobre la API Criteria. Strategy tiene una forma muy parecida pero su intención es elegir un algoritmo, no combinar reglas booleanas. Ocultar la persistencia es el papel de Repository, y ambos suelen combinarse mediante findAll con una especificación.',
      en: 'Specification turns rules into first class composable objects, so the same isSatisfiedBy works in memory and can be translated into a query, which is exactly what Spring Data does with its Specification interface over the Criteria API. Strategy has a very similar shape but its intent is choosing an algorithm, not combining boolean rules. Hiding persistence is the Repository role, and the two are usually combined through findAll with a specification.',
    },
  },
  {
    id: 'th-sbp-20',
    topic: 'Patrones GoF',
    prompt: {
      es: '¿Por qué importa el orden en el que se apilan varios decoradores sobre un mismo objeto?',
      en: 'Why does the order in which several decorators are stacked over the same object matter?',
    },
    answer: {
      es: 'Porque cada decorador ejecuta su parte antes o después de delegar, así que invertir el orden cambia el resultado: comprimir y luego cifrar no produce lo mismo que cifrar y luego comprimir.',
      en: 'Because each decorator runs its part before or after delegating, so reversing the order changes the result: compressing and then encrypting does not produce the same thing as encrypting and then compressing.',
    },
    distractors: [
      {
        es: 'Porque solo el decorador más externo puede impedir que la llamada llegue al objeto real, y los interiores siempre están obligados a delegar.',
        en: 'Because only the outermost decorator can prevent the call from reaching the real object, and the inner ones are always obliged to delegate.',
      },
      {
        es: 'Porque el orden no afecta al resultado, ya que todos comparten la misma interfaz, pero sí determina el rendimiento de la cadena.',
        en: 'Because the order does not affect the result, since they all share the same interface, but it does determine the performance of the chain.',
      },
    ],
    explanation: {
      es: 'Los decoradores se componen como la aplicación de funciones, así que el orden es semántico: cifrar antes de comprimir deja unos datos con entropía casi máxima que ya no se comprimen. Cualquier decorador de la cadena puede cortocircuitar si decide no delegar, no solo el más externo, como hace un decorador de caché al devolver el valor guardado. El orden de los filtros de Spring Security y envolver un stream con un búfer antes o después del lector muestran el mismo efecto.',
      en: 'Decorators compose like function application, so the order is semantic: encrypting before compressing leaves data with nearly maximum entropy that no longer compresses. Any decorator in the chain can short circuit by choosing not to delegate, not only the outermost one, as a caching decorator does when it returns the stored value. The Spring Security filter order and wrapping a stream with a buffer before or after the reader show the very same effect.',
    },
  },
];
