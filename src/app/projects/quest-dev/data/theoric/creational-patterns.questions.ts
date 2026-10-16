import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_CREATIONAL_PATTERNS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-crea-01',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Qué problema resuelve Builder cuando hay muchos parámetros opcionales?',
      en: 'What problem does Builder solve when there are many optional parameters?',
    },
    answer: {
      es: 'Evita una lista de constructores y argumentos posicionales difíciles de leer. Cada dato lleva nombre y el objeto se valida al final.',
      en: 'It avoids a list of constructors and positional arguments that are hard to read. Each value has a name and the object is validated at the end.',
    },
    distractors: [
      {
        es: 'Crea familias de productos compatibles entre sí.',
        en: 'It creates families of products that are compatible with each other.',
      },
      {
        es: 'Permite cambiar el objeto después de crearlo con setters encadenados.',
        en: 'It lets you change the object after creating it with chained setters.',
      },
    ],
    explanation: {
      es: 'new Pizza(12, true, false, true) no dice qué significa cada valor. Builder nombra cada paso y puede devolver un objeto inmutable.',
      en: 'new Pizza(12, true, false, true) does not say what each value means. Builder names each step and can return an immutable object.',
    },
  },
  {
    id: 'th-crea-02',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Por qué una API que devuelve this no es lo mismo que Builder?',
      en: 'Why is an API that returns this not the same as Builder?',
    },
    answer: {
      es: 'Devolver this solo encadena llamadas sobre el mismo objeto. Builder acumula el estado aparte y produce el objeto ya validado en el paso final.',
      en: 'Returning this only chains calls on the same object. Builder accumulates state aside and produces the already validated object in the final step.',
    },
    distractors: [
      {
        es: 'Porque la API fluida es una tubería perezosa que solo corre al final.',
        en: 'Because a fluent API is a lazy pipeline that only runs at the end.',
      },
      {
        es: 'Son lo mismo: el encadenamiento ya valida el objeto una sola vez.',
        en: 'They are the same: chaining already validates the object once.',
      },
    ],
    explanation: {
      es: 'Encadenar setters deja estados intermedios visibles. build es el momento en que se comprueban las reglas.',
      en: 'Chaining setters leaves intermediate states visible. build is the moment the rules are checked.',
    },
  },
  {
    id: 'th-crea-03',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Para qué sirve el patrón Prototype?',
      en: 'What is the Prototype pattern for?',
    },
    answer: {
      es: 'Para crear un objeto nuevo copiando uno ya configurado, cuando construirlo desde cero es caro o solo se conoce en ejecución.',
      en: 'To create a new object by copying one that is already configured, when building it from scratch is expensive or only known at runtime.',
    },
    distractors: [
      {
        es: 'Para devolver siempre la misma instancia y ahorrar memoria.',
        en: 'To always return the same instance and save memory.',
      },
      {
        es: 'Para que cada subclase decida qué producto concreto crear.',
        en: 'So each subclass decides which concrete product to create.',
      },
    ],
    explanation: {
      es: 'Devolver siempre la misma instancia es Singleton. Dejar la creación en una subclase es Factory Method.',
      en: 'Always returning the same instance is Singleton. Leaving creation to a subclass is Factory Method.',
    },
  },
  {
    id: 'th-crea-04',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Qué implica copiar de forma superficial un objeto que tiene una lista interna?',
      en: 'You shallow copy an object that holds an internal list. What does that imply?',
    },
    answer: {
      es: 'El original y la copia apuntan a la misma lista. Un cambio en una se ve en la otra.',
      en: 'The original and the copy point to the same list. A change in one is visible in the other.',
    },
    distractors: [
      {
        es: 'La copia recibe una lista nueva con los mismos elementos.',
        en: 'The copy receives a new list with the same elements.',
      },
      {
        es: 'clone copia todo el grafo de forma recursiva si la clase implementa Cloneable.',
        en: 'clone copies the whole graph recursively if the class implements Cloneable.',
      },
    ],
    explanation: {
      es: 'La copia superficial duplica los primitivos y comparte las referencias. La copia profunda de la lista hay que escribirla.',
      en: 'A shallow copy duplicates primitives and shares references. A deep copy of the list has to be written by hand.',
    },
  },
  {
    id: 'th-crea-05',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Cuándo tiene sentido un pool de objetos y cuál es el riesgo?',
      en: 'When does an object pool make sense and what is the risk?',
    },
    answer: {
      es: 'Cuando crear el recurso es caro, como una conexión o un hilo. El riesgo es prestarlo sucio o no devolverlo y agotar el pool.',
      en: 'When creating the resource is expensive, such as a connection or a thread. The risk is lending it dirty or never returning it and exhausting the pool.',
    },
    distractors: [
      {
        es: 'Cuando muchos objetos comparten el mismo estado fijo.',
        en: 'When many objects share the same fixed state.',
      },
      {
        es: 'Cuando se crean muchos objetos pequeños de vida corta, para ayudar al recolector.',
        en: 'When many small short lived objects are created, to help the collector.',
      },
    ],
    explanation: {
      es: 'Agrupar objetos pequeños suele empeorar las cosas. La asignación de objetos de vida corta en la JVM ya es barata.',
      en: 'Pooling small objects usually makes things worse. Allocating short lived objects on the JVM is already cheap.',
    },
  },
  {
    id: 'th-crea-06',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Qué ventajas tiene un método factoría estático frente a un constructor público?',
      en: 'What advantages does a static factory method have over a public constructor?',
    },
    answer: {
      es: 'Puede tener un nombre claro, devolver una instancia ya cacheada y ocultar el tipo concreto detrás de una interfaz.',
      en: 'It can have a clear name, return an already cached instance and hide the concrete type behind an interface.',
    },
    distractors: [
      {
        es: 'Las subclases pueden sobrescribirlo para elegir la implementación.',
        en: 'Subclasses can override it to choose the implementation.',
      },
      {
        es: 'Garantiza una sola instancia y que la creación sea segura entre hilos.',
        en: 'It guarantees a single instance and that creation is thread safe.',
      },
    ],
    explanation: {
      es: 'Los métodos estáticos no se sobrescriben. Cachear instancias tampoco implica que solo exista una ni que sea seguro entre hilos.',
      en: 'Static methods are not overridden. Caching instances does not mean there is only one, nor that it is thread safe.',
    },
  },
  {
    id: 'th-crea-07',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Por qué Service Locator se considera peor que inyectar dependencias?',
      en: 'Why is Service Locator considered worse than injecting dependencies?',
    },
    answer: {
      es: 'Porque esconde las dependencias dentro del método. El fallo de cableado aparece al pedir el servicio, no al arrancar.',
      en: 'Because it hides the dependencies inside the method. A wiring failure shows up when the service is requested, not at startup.',
    },
    distractors: [
      {
        es: 'Porque crea una instancia nueva en cada búsqueda.',
        en: 'Because it creates a new instance on every lookup.',
      },
      {
        es: 'Porque no puede resolver dependencias circulares y el constructor sí.',
        en: 'Because it cannot resolve circular dependencies and the constructor can.',
      },
    ],
    explanation: {
      es: 'Con inyección la firma dice lo que la clase necesita y la prueba pasa un doble. El localizador obliga a preparar un registro global.',
      en: 'With injection the signature says what the class needs and the test passes a double. A locator forces you to prepare a global registry.',
    },
  },
  {
    id: 'th-crea-08',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Cómo se inicializa un Singleton de forma perezosa y segura entre hilos sin un bloque synchronized propio?',
      en: 'How do you lazily initialise a Singleton in a thread safe way without your own synchronized block?',
    },
    answer: {
      es: 'Guardando la instancia en una clase interna estática. La JVM inicializa esa clase una sola vez, en el primer acceso.',
      en: 'By keeping the instance in a static nested class. The JVM initialises that class once, on first access.',
    },
    distractors: [
      {
        es: 'Declarando el campo volatile y comprobándolo dos veces dentro de un bloque sincronizado.',
        en: 'By declaring the field volatile and checking it twice inside a synchronized block.',
      },
      {
        es: 'Marcando el campo static, porque static ya es perezoso.',
        en: 'By marking the field static, because static is already lazy.',
      },
    ],
    explanation: {
      es: 'Un campo estático de la clase externa se inicializa al cargar esa clase, no al leer el campo. El holder retrasa esa carga.',
      en: 'A static field of the outer class is initialised when that class loads, not when the field is read. The holder delays that load.',
    },
  },
  {
    id: 'th-crea-09',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Por qué, en el double checked locking, el campo de la instancia debe ser volatile?',
      en: 'In double checked locking, why must the instance field be volatile?',
    },
    answer: {
      es: 'Para que otro hilo no vea la referencia antes de que el constructor haya terminado de escribir el objeto.',
      en: 'So another thread does not see the reference before the constructor has finished writing the object.',
    },
    distractors: [
      {
        es: 'Para que dos hilos no entren a la vez al bloque sincronizado.',
        en: 'So two threads do not enter the synchronized block at the same time.',
      },
      {
        es: 'Porque sin volatile la asignación de la referencia no es atómica.',
        en: 'Because without volatile the reference assignment is not atomic.',
      },
    ],
    explanation: {
      es: 'El bloque sincronizado ya evita crear dos instancias. volatile evita publicar un objeto a medio construir.',
      en: 'The synchronized block already avoids creating two instances. volatile avoids publishing a half built object.',
    },
  },
  {
    id: 'th-crea-10',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Qué ventaja tiene un Singleton hecho con un enum de un solo valor?',
      en: 'What advantage does a Singleton made with a single value enum have?',
    },
    answer: {
      es: 'La JVM garantiza una sola instancia aunque alguien use reflexión o serialización.',
      en: 'The JVM guarantees a single instance even if someone uses reflection or serialisation.',
    },
    distractors: [
      {
        es: 'Puede heredar de una clase base y además implementar varias interfaces.',
        en: 'It can inherit from a base class and also implement several interfaces.',
      },
      {
        es: 'Evita el estado global porque el contenedor gestiona las constantes del enum.',
        en: 'It avoids global state because the container manages the enum constants.',
      },
    ],
    explanation: {
      es: 'Sigue siendo estado global accesible de forma estática. Un enum puede implementar interfaces, pero no extender otra clase.',
      en: 'It is still global state reached statically. An enum can implement interfaces, but it cannot extend another class.',
    },
  },
  {
    id: 'th-crea-11',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Qué es un multiton?',
      en: 'What is a multiton?',
    },
    answer: {
      es: 'Un mapa de instancias por clave. Cada clave devuelve siempre la misma instancia, creada la primera vez que se pide.',
      en: 'A map of instances by key. Each key always returns the same instance, created the first time it is requested.',
    },
    distractors: [
      {
        es: 'Un conjunto de instancias equivalentes que se prestan y se devuelven.',
        en: 'A set of equivalent instances that are lent out and returned.',
      },
      {
        es: 'Una instancia distinta por hilo.',
        en: 'A different instance per thread.',
      },
    ],
    explanation: {
      es: 'Prestar y devolver es un pool. Una instancia por hilo es un ThreadLocal. Cuidado con un mapa sin límite si la clave viene del usuario.',
      en: 'Lending and returning is a pool. One instance per thread is a ThreadLocal. Watch an unbounded map if the key comes from the user.',
    },
  },
  {
    id: 'th-crea-12',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Cuándo usarías Abstract Factory?',
      en: 'When would you use Abstract Factory?',
    },
    answer: {
      es: 'Cuando hay que crear varios objetos relacionados y el cliente no debe mezclar piezas de familias distintas.',
      en: 'When you must create several related objects and the client must not mix pieces from different families.',
    },
    distractors: [
      {
        es: 'Cuando quieres construir un objeto por pasos y obtener representaciones distintas.',
        en: 'When you want to build an object step by step and obtain different representations.',
      },
      {
        es: 'Cuando basta un método polimórfico por cada tipo de producto.',
        en: 'When one polymorphic method per product type is enough.',
      },
    ],
    explanation: {
      es: 'Con métodos de creación sueltos nada impide combinar un botón de un tema con un panel de otro. La fábrica agrupa la familia.',
      en: 'With separate creation methods nothing stops you from combining a button from one theme with a panel from another. The factory groups the family.',
    },
  },
  {
    id: 'th-crea-13',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Por qué un framework deja un Factory Method protegido en su clase base?',
      en: 'Why does a framework leave a protected Factory Method in its base class?',
    },
    answer: {
      es: 'Para que el framework cree el objeto que decida la subclase del usuario, sin conocer esa clase concreta.',
      en: 'So the framework creates the object the user subclass decides, without knowing that concrete class.',
    },
    distractors: [
      {
        es: 'Para que la subclase cambie pasos del algoritmo manteniendo el orden de la base.',
        en: 'So the subclass changes steps of the algorithm while keeping the base order.',
      },
      {
        es: 'Para que el contenedor sustituya la implementación por configuración.',
        en: 'So the container substitutes the implementation through configuration.',
      },
    ],
    explanation: {
      es: 'El framework llama hacia abajo. Cambiar pasos con el orden fijo es Template Method, que a menudo usa un Factory Method como uno de esos pasos.',
      en: 'The framework calls downward. Changing steps while the order stays fixed is Template Method, which often uses a Factory Method as one of those steps.',
    },
  },
  {
    id: 'th-crea-14',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Por qué una clase con un switch que crea objetos no es el Factory Method clásico?',
      en: 'Why is a class with a switch that creates objects not the classic Factory Method?',
    },
    answer: {
      es: 'Porque un solo método concreto decide con condicionales. Cada tipo nuevo obliga a editar ese método.',
      en: 'Because one concrete method decides with conditionals. Every new type forces you to edit that method.',
    },
    distractors: [
      {
        es: 'Porque devuelve una familia completa de productos.',
        en: 'Because it returns a whole family of products.',
      },
      {
        es: 'Porque el catálogo exige que el método sea estático.',
        en: 'Because the catalogue requires the method to be static.',
      },
    ],
    explanation: {
      es: 'El Factory Method pone la decisión en una subclase. Una fábrica simple es útil, pero hay que tocarla para cada producto nuevo.',
      en: 'Factory Method puts the decision in a subclass. A simple factory is useful, but you must touch it for every new product.',
    },
  },
  {
    id: 'th-crea-15',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Cómo quitas un boolean de un constructor si ese flag cambia el comportamiento?',
      en: 'A constructor receives a boolean that changes the behaviour. How do you remove it?',
    },
    answer: {
      es: 'Con dos tipos o dos métodos factoría con nombre. El modo queda en el tipo, no en un argumento opaco.',
      en: 'With two types or two named factory methods. The mode lives in the type, not in an opaque argument.',
    },
    distractors: [
      {
        es: 'Con un objeto de parámetros que agrupe todas las opciones.',
        en: 'With a parameter object that groups every option.',
      },
      {
        es: 'Con un enum de dos valores, para que el llamador no pase un dato inválido.',
        en: 'With a two value enum, so the caller cannot pass an invalid value.',
      },
    ],
    explanation: {
      es: 'new Report(true) no dice nada en la llamada. Un enum se lee mejor, pero el condicional sigue dentro del objeto.',
      en: 'new Report(true) says nothing at the call site. An enum reads better, but the conditional stays inside the object.',
    },
  },
  {
    id: 'th-crea-16',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Qué aporta el patrón Null Object?',
      en: 'What does the Null Object pattern provide?',
    },
    answer: {
      es: 'Una implementación real con comportamiento neutro, para que el cliente no compruebe null en cada uso.',
      en: 'A real implementation with neutral behaviour, so the client does not check for null on every use.',
    },
    distractors: [
      {
        es: 'Un envoltorio que puede estar vacío y obliga al cliente a decidir qué hacer.',
        en: 'A wrapper that may be empty and forces the client to decide what to do.',
      },
      {
        es: 'Un objeto que lanza una excepción si se usa sin inicializar.',
        en: 'An object that throws if it is used before it is initialised.',
      },
    ],
    explanation: {
      es: 'Un logger que descarta mensajes o una lista vacía son ejemplos. El riesgo es que el silencio oculte un error de configuración.',
      en: 'A logger that discards messages or an empty list are examples. The risk is that silence hides a configuration error.',
    },
  },
  {
    id: 'th-crea-17',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿En qué se diferencia Monostate de Singleton?',
      en: 'How does Monostate differ from Singleton?',
    },
    answer: {
      es: 'En Monostate puedes crear muchas instancias, pero todas comparten el mismo estado. Singleton limita el número de instancias.',
      en: 'In Monostate you can create many instances, but they all share the same state. Singleton limits the number of instances.',
    },
    distractors: [
      {
        es: 'En Monostate cada hilo tiene su copia del estado.',
        en: 'In Monostate each thread has its own copy of the state.',
      },
      {
        es: 'En Monostate el estado es inmutable y por eso es seguro entre hilos.',
        en: 'In Monostate the state is immutable and therefore thread safe.',
      },
    ],
    explanation: {
      es: 'El cliente no ve que hay estado global. Si ese estado cambia, sigue haciendo falta sincronización.',
      en: 'The client does not see that there is global state. If that state changes, synchronisation is still required.',
    },
  },
  {
    id: 'th-crea-18',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Qué aporta un builder por etapas frente a uno clásico?',
      en: 'What does a staged builder add compared with a classic one?',
    },
    answer: {
      es: 'Cada paso devuelve una interfaz que solo muestra el siguiente. El compilador impide llamar a build sin los datos obligatorios.',
      en: 'Each step returns an interface that only shows the next one. The compiler stops you from calling build without the required data.',
    },
    distractors: [
      {
        es: 'Valida en build y lanza una excepción si falta un campo.',
        en: 'It validates inside build and throws if a field is missing.',
      },
      {
        es: 'Permite reutilizar el mismo builder para varios objetos.',
        en: 'It lets you reuse the same builder for several objects.',
      },
    ],
    explanation: {
      es: 'Lanzar en build es lo que hace el builder clásico. Las etapas convierten esa comprobación en un error de compilación.',
      en: 'Throwing inside build is what the classic builder does. Stages turn that check into a compile error.',
    },
  },
  {
    id: 'th-crea-19',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Qué pasa si inyectas un bean de petición dentro de un singleton?',
      en: 'You inject a request scoped bean into a singleton. What happens?',
    },
    answer: {
      es: 'El singleton se queda con la instancia que recibió al crearse. El bean de vida corta deja de renovarse.',
      en: 'The singleton keeps the instance it received when it was created. The short lived bean stops being renewed.',
    },
    distractors: [
      {
        es: 'El contenedor falla al arrancar por la diferencia de ámbitos.',
        en: 'The container fails at startup because of the scope mismatch.',
      },
      {
        es: 'Cada llamada al método crea una instancia nueva.',
        en: 'Every method call creates a new instance.',
      },
    ],
    explanation: {
      es: 'La inyección se resuelve una vez. Para obtener una instancia fresca hace falta un proveedor, un lookup o un proxy de ámbito.',
      en: 'Injection is resolved once. To get a fresh instance you need a provider, a lookup or a scoped proxy.',
    },
  },
  {
    id: 'th-crea-20',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Qué hace un método como withImporte en una clase inmutable?',
      en: 'In an immutable class, what does a method such as withAmount do?',
    },
    answer: {
      es: 'No modifica el objeto. Devuelve una instancia nueva con ese campo cambiado y el resto copiado.',
      en: 'It does not modify the object. It returns a new instance with that field changed and the rest copied.',
    },
    distractors: [
      {
        es: 'Devuelve this después de asignar el campo, para poder encadenar.',
        en: 'It returns this after assigning the field, so you can chain calls.',
      },
      {
        es: 'Marca el objeto como modificado para que se persista al cerrar la transacción.',
        en: 'It marks the object as modified so it is persisted when the transaction closes.',
      },
    ],
    explanation: {
      es: 'El error clásico es ignorar el valor devuelto y creer que el original cambió. Así funcionan las fechas de java.time.',
      en: 'The classic bug is ignoring the returned value and believing the original changed. That is how java.time dates work.',
    },
  },
];
