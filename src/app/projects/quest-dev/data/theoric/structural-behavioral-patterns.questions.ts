import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_STRUCTURAL_BEHAVIORAL_PATTERNS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-sbp-01',
    topic: 'Patrones',
    prompt: {
      es: '¿Para qué sirve Adapter?',
      en: 'What is Adapter for?',
    },
    answer: {
      es: 'Para convertir la interfaz de una clase existente en la que el cliente espera, normalmente delegando en el objeto adaptado.',
      en: 'To convert the interface of an existing class into the one the client expects, usually by delegating to the adapted object.',
    },
    distractors: [
      {
        es: 'Para añadir responsabilidades conservando la misma interfaz.',
        en: 'To add responsibilities while keeping the same interface.',
      },
      {
        es: 'Para simplificar un subsistema detrás de una sola entrada.',
        en: 'To simplify a subsystem behind a single entry point.',
      },
    ],
    explanation: {
      es: 'Añadir comportamiento es Decorator. Simplificar un subsistema es Facade. Adapter existe porque las interfaces no encajan.',
      en: 'Adding behaviour is Decorator. Simplifying a subsystem is Facade. Adapter exists because the interfaces do not match.',
    },
  },
  {
    id: 'th-sbp-02',
    topic: 'Patrones',
    prompt: {
      es: '¿En qué se diferencia Facade de Mediator?',
      en: 'How does Facade differ from Mediator?',
    },
    answer: {
      es: 'Facade es una entrada simple a un subsistema que no la conoce. Mediator lo conocen los colegas y coordina cómo hablan entre sí.',
      en: 'Facade is a simple entry into a subsystem that does not know about it. Colleagues know the mediator and it coordinates how they talk to each other.',
    },
    distractors: [
      {
        es: 'Facade adapta interfaces incompatibles y Mediator las unifica.',
        en: 'Facade adapts incompatible interfaces and Mediator unifies them.',
      },
      {
        es: 'Facade hace inaccesibles las clases internas y Mediator solo reduce llamadas.',
        en: 'Facade makes the internal classes inaccessible and Mediator only reduces calls.',
      },
    ],
    explanation: {
      es: 'Una fachada no prohíbe usar el subsistema por dentro. Solo ofrece un camino más cómodo.',
      en: 'A facade does not forbid using the subsystem directly. It only offers a more convenient path.',
    },
  },
  {
    id: 'th-sbp-03',
    topic: 'Patrones',
    prompt: {
      es: '¿Cuándo usarías Bridge en lugar de Strategy?',
      en: 'When would you use Bridge instead of Strategy?',
    },
    answer: {
      es: 'Cuando dos jerarquías deben crecer por separado, por ejemplo formas y motores de dibujo, para no multiplicar subclases.',
      en: 'When two hierarchies must grow separately, for example shapes and drawing engines, so you do not multiply subclasses.',
    },
    distractors: [
      {
        es: 'Cuando quieres controlar el acceso al objeto en lugar de cambiar el algoritmo.',
        en: 'When you want to control access to the object instead of changing the algorithm.',
      },
      {
        es: 'Cuando la variación se resuelve en compilación y Strategy en ejecución.',
        en: 'When the variation is resolved at compile time and Strategy at runtime.',
      },
    ],
    explanation: {
      es: 'Strategy intercambia un algoritmo. Bridge separa la abstracción de la implementación para que cada lado cambie sin el otro.',
      en: 'Strategy swaps an algorithm. Bridge separates abstraction from implementation so each side can change without the other.',
    },
  },
  {
    id: 'th-sbp-04',
    topic: 'Patrones',
    prompt: {
      es: '¿Dónde pones add y remove en el patrón Composite?',
      en: 'In Composite, where do you put add and remove?',
    },
    answer: {
      es: 'En el componente común si quieres tratar hoja y grupo igual, aceptando que la hoja rechace esas operaciones. Solo en el grupo si quieres que el compilador lo impida.',
      en: 'On the common component if you want to treat leaf and group the same, accepting that the leaf rejects those operations. Only on the group if you want the compiler to prevent it.',
    },
    distractors: [
      {
        es: 'Da igual: la decisión es si el cliente recorre el árbol con un iterador.',
        en: 'It does not matter: the decision is whether the client walks the tree with an iterator.',
      },
      {
        es: 'La decisión es si un nodo puede tener varios padres.',
        en: 'The decision is whether a node can have several parents.',
      },
    ],
    explanation: {
      es: 'Uniformidad contra seguridad. Si add está en la hoja, suele lanzar. Si solo está en el grupo, el cliente tiene que distinguir el tipo.',
      en: 'Uniformity against safety. If add is on the leaf, it usually throws. If it is only on the group, the client must tell the types apart.',
    },
  },
  {
    id: 'th-sbp-05',
    topic: 'Patrones',
    prompt: {
      es: '¿Cómo reparte el estado el patrón Flyweight?',
      en: 'How does the Flyweight pattern split state?',
    },
    answer: {
      es: 'Lo que no cambia y no depende del contexto vive en el objeto compartido. Lo que depende del uso se pasa en cada llamada.',
      en: 'What does not change and does not depend on context lives in the shared object. What depends on the use is passed on each call.',
    },
    distractors: [
      {
        es: 'El estado fijo va a una caché y el variable se copia en cada clon.',
        en: 'Fixed state goes into a cache and variable state is copied into every clone.',
      },
      {
        es: 'El objeto guarda todo el estado y el cliente solo tiene una referencia débil.',
        en: 'The object keeps all the state and the client only holds a weak reference.',
      },
    ],
    explanation: {
      es: 'Así puedes compartir un carácter o un icono y pasar la posición o el tamaño en cada dibujo.',
      en: 'That way you can share a character or an icon and pass the position or the size on each draw.',
    },
  },
  {
    id: 'th-sbp-06',
    topic: 'Patrones',
    prompt: {
      es: '¿Para qué se usa un Proxy en la práctica?',
      en: 'What is a Proxy used for in practice?',
    },
    answer: {
      es: 'Para mediar el acceso: retrasar la carga, representar un objeto remoto, comprobar permisos o contar usos.',
      en: 'To mediate access: delay loading, represent a remote object, check permissions or count uses.',
    },
    distractors: [
      {
        es: 'Para añadir comportamiento y apilar envoltorios en un orden concreto.',
        en: 'To add behaviour and stack wrappers in a specific order.',
      },
      {
        es: 'Para exponer una interfaz distinta a la del objeto real.',
        en: 'To expose an interface different from the real object.',
      },
    ],
    explanation: {
      es: 'Un proxy perezoso de Hibernate es el caso habitual. Cambiar la interfaz es Adapter y sumar comportamiento es Decorator.',
      en: 'A Hibernate lazy proxy is the usual case. Changing the interface is Adapter and adding behaviour is Decorator.',
    },
  },
  {
    id: 'th-sbp-07',
    topic: 'Patrones',
    prompt: {
      es: '¿Cómo permite Command deshacer una acción?',
      en: 'How does Command let you undo an action?',
    },
    answer: {
      es: 'Cada comando guarda lo necesario para revertirse. Una pila de comandos ya ejecutados deshace en orden inverso.',
      en: 'Each command stores what it needs to reverse itself. A stack of executed commands undoes them in reverse order.',
    },
    distractors: [
      {
        es: 'Cada comando guarda una copia completa del objeto antes de ejecutarse.',
        en: 'Each command stores a full copy of the object before it runs.',
      },
      {
        es: 'El invocador escribe un diario y llama a rollback.',
        en: 'The invoker writes a journal and calls rollback.',
      },
    ],
    explanation: {
      es: 'Guardar todo el estado es Memento. Command suele guardar solo el cambio, por ejemplo el texto insertado y su posición.',
      en: 'Storing the whole state is Memento. Command usually stores only the change, for example the inserted text and its position.',
    },
  },
  {
    id: 'th-sbp-08',
    topic: 'Patrones',
    prompt: {
      es: '¿En qué se diferencian Command y Strategy?',
      en: 'How do Command and Strategy differ?',
    },
    answer: {
      es: 'Command guarda una petición para ejecutarla más tarde. Strategy es un algoritmo intercambiable que el contexto usa cuando lo necesita.',
      en: 'Command stores a request so it can be executed later. Strategy is a swappable algorithm the context uses when it needs it.',
    },
    distractors: [
      {
        es: 'Command define el esqueleto y deja pasos a las subclases.',
        en: 'Command defines the skeleton and leaves steps to subclasses.',
      },
      {
        es: 'Command siempre deshace y Strategy no puede tener estado.',
        en: 'Command always undoes and Strategy cannot have state.',
      },
    ],
    explanation: {
      es: 'Runnable es un comando. Comparator es una estrategia. El esqueleto con pasos fijos es Template Method.',
      en: 'Runnable is a command. Comparator is a strategy. A skeleton with fixed steps is Template Method.',
    },
  },
  {
    id: 'th-sbp-09',
    topic: 'Patrones',
    prompt: {
      es: '¿Qué diferencia hay entre recorrer una colección tú y dejar que ella recorra?',
      en: 'What is the difference between walking a collection yourself and letting it walk?',
    },
    answer: {
      es: 'Si tú controlas el avance, usas el iterador. Si pasas una función y la colección recorre, el bucle es interno. Un iterador fail fast falla si la colección cambia durante el recorrido.',
      en: 'If you control the advance, you use the iterator. If you pass a function and the collection walks, the loop is internal. A fail fast iterator fails if the collection changes during the walk.',
    },
    distractors: [
      {
        es: 'El recorrido interno siempre es paralelo y fail fast para en el primer error de negocio.',
        en: 'Internal iteration is always parallel and fail fast stops at the first business error.',
      },
      {
        es: 'El iterador externo trabaja sobre una copia y el interno bloquea la colección.',
        en: 'The external iterator works on a copy and the internal one locks the collection.',
      },
    ],
    explanation: {
      es: 'for each sobre un Iterator es externo. forEach o un Stream es interno. Fail fast avisa de una modificación estructural, no de un error de negocio.',
      en: 'A for each over an Iterator is external. forEach or a Stream is internal. Fail fast warns about a structural change, not a business error.',
    },
  },
  {
    id: 'th-sbp-10',
    topic: 'Patrones',
    prompt: {
      es: '¿Cómo consigue Visitor elegir el método según el elemento y según el visitante?',
      en: 'How does Visitor pick the method based on both the element and the visitor?',
    },
    answer: {
      es: 'El elemento recibe accept y llama a visit pasando this. La primera llamada elige el elemento y la segunda el visitante.',
      en: 'The element receives accept and calls visit passing this. The first call picks the element and the second picks the visitor.',
    },
    distractors: [
      {
        es: 'Sobrecarga visit y el compilador elige según el tipo real en ejecución.',
        en: 'It overloads visit and the compiler picks according to the real runtime type.',
      },
      {
        es: 'El visitante usa instanceof para saber qué elemento recibió.',
        en: 'The visitor uses instanceof to know which element it received.',
      },
    ],
    explanation: {
      es: 'La sobrecarga se resuelve en compilación, por eso hace falta el rodeo de accept. instanceof es la alternativa cuando no puedes tocar la jerarquía.',
      en: 'Overload resolution happens at compile time, which is why the accept detour is needed. instanceof is the alternative when you cannot change the hierarchy.',
    },
  },
  {
    id: 'th-sbp-11',
    topic: 'Patrones',
    prompt: {
      es: '¿Cuál es el compromiso principal de Visitor?',
      en: 'What is the main trade off of Visitor?',
    },
    answer: {
      es: 'Añadir una operación nueva es fácil: escribes otro visitante. Añadir un tipo de elemento obliga a tocar la interfaz y todos los visitantes.',
      en: 'Adding a new operation is easy: you write another visitor. Adding an element type forces you to change the interface and every visitor.',
    },
    distractors: [
      {
        es: 'Añadir un tipo es fácil y añadir una operación obliga a tocar toda la jerarquía.',
        en: 'Adding a type is easy and adding an operation forces you to touch the whole hierarchy.',
      },
      {
        es: 'Las dos extensiones son fáciles porque todo depende de interfaces.',
        en: 'Both extensions are easy because everything depends on interfaces.',
      },
    ],
    explanation: {
      es: 'Poner la operación en cada elemento es lo contrario: un tipo nuevo es una clase, pero cada operación nueva toca todas las clases.',
      en: 'Putting the operation on each element is the opposite: a new type is one class, but every new operation touches all the classes.',
    },
  },
  {
    id: 'th-sbp-12',
    topic: 'Patrones',
    prompt: {
      es: '¿Qué ventaja tiene Memento frente a serializar el objeto entero para poder volver atrás?',
      en: 'What advantage does Memento have over serialising the whole object so you can go back?',
    },
    answer: {
      es: 'Guarda solo el estado necesario y el cuidador no puede leerlo. Solo quien creó el memento sabe restaurarlo.',
      en: 'It stores only the needed state and the caretaker cannot read it. Only the one who created the memento knows how to restore it.',
    },
    distractors: [
      {
        es: 'Guarda cada cambio con su operación inversa, como un comando.',
        en: 'It stores each change with its inverse operation, like a command.',
      },
      {
        es: 'Evita la reflexión porque la serialización también copia campos estáticos.',
        en: 'It avoids reflection because serialisation also copies static fields.',
      },
    ],
    explanation: {
      es: 'Serializar arrastra todo el grafo y se rompe si la clase cambia. Registrar la operación inversa es Command, no Memento.',
      en: 'Serialising drags the whole graph and breaks if the class changes. Recording the inverse operation is Command, not Memento.',
    },
  },
  {
    id: 'th-sbp-13',
    topic: 'Patrones',
    prompt: {
      es: '¿Qué ganas al modelar estados con clases en lugar de un enum y un switch?',
      en: 'What do you gain by modelling states as classes instead of an enum and a switch?',
    },
    answer: {
      es: 'Cada estado tiene su comportamiento y decide la transición. Añadir un estado no obliga a revisar todos los condicionales.',
      en: 'Each state has its own behaviour and decides the transition. Adding a state does not force you to revisit every conditional.',
    },
    distractors: [
      {
        es: 'El cliente puede cambiar el algoritmo en ejecución sin que el objeto recuerde la elección.',
        en: 'The client can change the algorithm at runtime without the object remembering the choice.',
      },
      {
        es: 'Las transiciones inválidas se detectan al compilar.',
        en: 'Invalid transitions are detected at compile time.',
      },
    ],
    explanation: {
      es: 'Elegir un algoritmo sin memoria es Strategy. State sigue lanzando si la transición no es válida. Para máquinas pequeñas un enum puede bastar.',
      en: 'Picking an algorithm with no memory is Strategy. State still throws if the transition is not valid. For small machines an enum can be enough.',
    },
  },
  {
    id: 'th-sbp-14',
    topic: 'Patrones',
    prompt: {
      es: '¿Qué es un método gancho en Template Method?',
      en: 'What is a hook method in Template Method?',
    },
    answer: {
      es: 'Un punto de extensión opcional, con cuerpo vacío o por defecto. La subclase puede sobrescribirlo y el método plantilla fija el orden.',
      en: 'An optional extension point, with an empty or default body. The subclass may override it and the template method fixes the order.',
    },
    distractors: [
      {
        es: 'Un método abstracto que la subclase está obligada a implementar.',
        en: 'An abstract method the subclass is required to implement.',
      },
      {
        es: 'Un método que el framework llama por reflexión según el nombre.',
        en: 'A method the framework calls by reflection according to the name.',
      },
    ],
    explanation: {
      es: 'Lo obligatorio es el paso abstracto. El gancho es opcional. Marcar la plantilla como final evita que una subclase rompa el orden.',
      en: 'The mandatory part is the abstract step. The hook is optional. Marking the template final stops a subclass from breaking the order.',
    },
  },
  {
    id: 'th-sbp-15',
    topic: 'Patrones',
    prompt: {
      es: '¿Qué contrato tiene un manejador en Chain of Responsibility?',
      en: 'What contract does a handler have in Chain of Responsibility?',
    },
    answer: {
      es: 'Decide si atiende la petición o la pasa al siguiente. Si nadie la atiende, hace falta un manejador final, porque el patrón no lo garantiza.',
      en: 'It decides whether to handle the request or pass it on. If nobody handles it, you need a final handler, because the pattern does not guarantee it.',
    },
    distractors: [
      {
        es: 'Todos reciben la petición y se combinan las respuestas.',
        en: 'Everyone receives the request and the responses are combined.',
      },
      {
        es: 'La cadena se detiene en la primera excepción y vuelve a empezar.',
        en: 'The chain stops at the first exception and starts again.',
      },
    ],
    explanation: {
      es: 'Avisar a todos es Observer. En una cadena de filtros, llamar al siguiente continúa y no llamarlo corta el recorrido.',
      en: 'Notifying everyone is Observer. In a filter chain, calling the next one continues and not calling it stops the walk.',
    },
  },
  {
    id: 'th-sbp-16',
    topic: 'Patrones',
    prompt: {
      es: '¿Para qué sirve el patrón Interpreter?',
      en: 'What is the Interpreter pattern for?',
    },
    answer: {
      es: 'Para representar una gramática pequeña como clases, donde cada nodo del árbol sabe evaluarse.',
      en: 'To represent a small grammar as classes, where each node of the tree knows how to evaluate itself.',
    },
    distractors: [
      {
        es: 'Para recorrer una estructura y añadir operaciones sin tocar las clases de los nodos.',
        en: 'To walk a structure and add operations without touching the node classes.',
      },
      {
        es: 'Para traducir peticiones al protocolo de un sistema externo.',
        en: 'To translate requests into the protocol of an external system.',
      },
    ],
    explanation: {
      es: 'Encaja con reglas simples. Si la gramática crece, conviene un generador de analizadores. Añadir operaciones sin tocar nodos es Visitor.',
      en: 'It fits simple rules. If the grammar grows, a parser generator is a better fit. Adding operations without touching nodes is Visitor.',
    },
  },
  {
    id: 'th-sbp-17',
    topic: 'Patrones',
    prompt: {
      es: '¿Qué problemas clásicos aparecen al implementar Observer?',
      en: 'What classic problems show up when you implement Observer?',
    },
    answer: {
      es: 'Un oyente que no se da de baja y retiene el objeto, y modificar la lista de suscriptores mientras se está notificando.',
      en: 'A listener that never unsubscribes and keeps the object alive, and changing the subscriber list while a notification is in progress.',
    },
    distractors: [
      {
        es: 'No poder saber cuántos hay suscritos ni en qué orden se avisa.',
        en: 'Not being able to know how many are subscribed or in which order they are notified.',
      },
      {
        es: 'Perder los eventos anteriores a la suscripción, que el patrón reintenta solo.',
        en: 'Losing events from before the subscription, which the pattern retries on its own.',
      },
    ],
    explanation: {
      es: 'Hay que darse de baja al destruir el componente. Si un observador se suscribe durante el aviso, itera sobre una copia de la lista.',
      en: 'You must unsubscribe when the component is destroyed. If an observer subscribes during the notification, iterate a copy of the list.',
    },
  },
  {
    id: 'th-sbp-18',
    topic: 'Patrones',
    prompt: {
      es: '¿Qué diferencia hay entre publicar en un broker y un Observer directo?',
      en: 'What is the difference between publishing to a broker and a direct Observer?',
    },
    answer: {
      es: 'Con broker el emisor no conoce a los suscriptores: publica en un tema y el intermediario entrega, incluso en otro momento.',
      en: 'With a broker the publisher does not know the subscribers: it publishes to a topic and the intermediary delivers, even at another time.',
    },
    distractors: [
      {
        es: 'Con broker solo un consumidor procesa cada mensaje.',
        en: 'With a broker only one consumer processes each message.',
      },
      {
        es: 'El emisor sigue guardando la lista, pero avisa en otro hilo.',
        en: 'The publisher still keeps the list, but notifies on another thread.',
      },
    ],
    explanation: {
      es: 'Un tema reparte a todos los suscriptores. Que un solo consumidor tome el mensaje es la semántica de una cola.',
      en: 'A topic fans out to every subscriber. A single consumer taking the message is queue semantics.',
    },
  },
  {
    id: 'th-sbp-19',
    topic: 'Patrones',
    prompt: {
      es: '¿Qué aporta el patrón Specification?',
      en: 'What does the Specification pattern provide?',
    },
    answer: {
      es: 'Cada regla de negocio es un objeto que se puede combinar con and, or y not, y reutilizar para validar o para consultar.',
      en: 'Each business rule is an object you can combine with and, or and not, and reuse to validate or to query.',
    },
    distractors: [
      {
        es: 'Un algoritmo intercambiable que el contexto elige en ejecución.',
        en: 'A swappable algorithm the context chooses at runtime.',
      },
      {
        es: 'Una interfaz que oculta cómo se persiste un agregado.',
        en: 'An interface that hides how an aggregate is persisted.',
      },
    ],
    explanation: {
      es: 'Strategy elige un algoritmo. Repository oculta la persistencia. Specification combina predicados.',
      en: 'Strategy chooses an algorithm. Repository hides persistence. Specification combines predicates.',
    },
  },
  {
    id: 'th-sbp-20',
    topic: 'Patrones',
    prompt: {
      es: '¿Por qué importa el orden al apilar decoradores?',
      en: 'Why does the order matter when you stack decorators?',
    },
    answer: {
      es: 'Porque cada uno actúa antes o después de delegar. Comprimir y luego cifrar no da lo mismo que cifrar y luego comprimir.',
      en: 'Because each one acts before or after delegating. Compressing and then encrypting is not the same as encrypting and then compressing.',
    },
    distractors: [
      {
        es: 'Porque solo el más externo puede decidir no llamar al objeto real.',
        en: 'Because only the outermost one can decide not to call the real object.',
      },
      {
        es: 'El orden no cambia el resultado, solo el rendimiento.',
        en: 'The order does not change the result, only the performance.',
      },
    ],
    explanation: {
      es: 'Cualquier decorador de la cadena puede cortar la llamada, por ejemplo una caché que ya tiene el valor.',
      en: 'Any decorator in the chain can stop the call, for example a cache that already has the value.',
    },
  },
];
