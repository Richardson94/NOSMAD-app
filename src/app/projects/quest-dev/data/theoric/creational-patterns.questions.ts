import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_CREATIONAL_PATTERNS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-crea-01',
    topic: 'Patrones creacionales',
    prompt: {
      es: 'Una clase tiene cuatro parámetros obligatorios y ocho opcionales. ¿Qué problema resuelve Builder frente al constructor telescópico?',
      en: 'A class has four mandatory parameters and eight optional ones. What problem does Builder solve compared to the telescoping constructor?',
    },
    answer: {
      es: 'Separa la construcción paso a paso del producto final, evitando la explosión de sobrecargas y los argumentos posicionales ambiguos.',
      en: 'It separates step-by-step construction from the final product, avoiding an explosion of overloads and ambiguous positional arguments.',
    },
    distractors: [
      {
        es: 'Permite crear familias de productos relacionados garantizando que las piezas devueltas sean compatibles entre sí.',
        en: 'It lets you create families of related products while guaranteeing that the returned pieces are compatible with each other.',
      },
      {
        es: 'Permite cambiar los atributos del objeto después de crearlo mediante una API fluida de asignadores encadenados.',
        en: 'It lets you change the object attributes after creating it through a fluent API of chained setters.',
      },
    ],
    explanation: {
      es: 'El constructor telescópico obliga a leer llamadas como new Pizza(12, true, false, true) donde nada indica qué significa cada valor, y Builder nombra cada parámetro y valida los invariantes en build. Garantizar familias compatibles es Abstract Factory, y la alternativa de asignadores sobre el objeto real es el patrón JavaBeans, que deja la instancia a medio construir y no permite que sea inmutable.',
      en: 'The telescoping constructor forces you to read calls like new Pizza(12, true, false, true) where nothing tells you what each value means, while Builder names every parameter and validates invariants inside build. Guaranteeing compatible families is Abstract Factory, and the setter alternative on the real object is the JavaBeans pattern, which leaves the instance half built and prevents immutability.',
    },
  },
  {
    id: 'th-crea-02',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Por qué una interfaz fluida que devuelve this no es lo mismo que el patrón Builder?',
      en: 'Why is a fluent interface that returns this not the same thing as the Builder pattern?',
    },
    answer: {
      es: 'La interfaz fluida solo encadena llamadas sobre el propio objeto; Builder acumula el estado en un objeto aparte y produce el producto ya validado en un paso final.',
      en: 'A fluent interface merely chains calls on the object itself; Builder accumulates state in a separate object and produces the already validated product in a final step.',
    },
    distractors: [
      {
        es: 'La interfaz fluida expresa el cálculo como una tubería de operaciones perezosas que solo se evalúan al invocar una operación terminal.',
        en: 'A fluent interface expresses the computation as a pipeline of lazy operations that are only evaluated when a terminal operation is invoked.',
      },
      {
        es: 'Son lo mismo con otro nombre, porque el encadenamiento de métodos ya garantiza que el objeto se valide una sola vez al terminar.',
        en: 'They are the same thing under another name, because method chaining already guarantees that the object is validated once at the end.',
      },
    ],
    explanation: {
      es: 'La interfaz fluida, término acuñado por Fowler, es una decisión de legibilidad de la API; Builder es un patrón creacional con un objeto constructor distinto y un build que comprueba los invariantes y puede devolver una instancia inmutable. La tubería perezosa con operación terminal describe la API Stream, otro concepto fluido. Encadenar asignadores sobre el objeto real no valida nada y deja estados intermedios visibles.',
      en: 'A fluent interface, a term coined by Fowler, is an API readability decision; Builder is a creational pattern with a separate builder object and a build method that checks invariants and can return an immutable instance. The lazy pipeline with a terminal operation describes the Stream API, a different fluent idea. Chaining setters on the real object validates nothing and leaves intermediate states visible.',
    },
  },
  {
    id: 'th-crea-03',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Cuál es la intención del patrón Prototype?',
      en: 'What is the intent of the Prototype pattern?',
    },
    answer: {
      es: 'Crear objetos nuevos copiando una instancia prototípica ya configurada, evitando el coste o el conocimiento necesario para construirla desde cero.',
      en: 'Create new objects by copying an already configured prototypical instance, avoiding the cost or the knowledge needed to build it from scratch.',
    },
    distractors: [
      {
        es: 'Registrar una única instancia compartida y devolverla en cada petición para ahorrar memoria y tiempo de creación.',
        en: 'Register a single shared instance and return it on every request to save memory and creation time.',
      },
      {
        es: 'Definir una jerarquía de creadores donde cada subclase decide qué producto concreto se instancia.',
        en: 'Define a hierarchy of creators where each subclass decides which concrete product gets instantiated.',
      },
    ],
    explanation: {
      es: 'Prototype se usa cuando la configuración del objeto es muy costosa o solo se conoce en ejecución, por ejemplo una plantilla de documento o una consulta preparada que se clona y se retoca. Devolver siempre la misma instancia es Singleton o Flyweight, y dejar la decisión en subclases del creador es Factory Method. En Java suele implementarse con un constructor de copia en lugar del método clone, porque Cloneable no declara clone y obliga a capturar CloneNotSupportedException.',
      en: 'Prototype applies when object configuration is very expensive or only known at runtime, for example a document template or a prepared query that is cloned and tweaked. Always returning the same instance is Singleton or Flyweight, and deferring the decision to creator subclasses is Factory Method. In Java it is usually implemented with a copy constructor instead of clone, because Cloneable does not declare clone and forces you to catch CloneNotSupportedException.',
    },
  },
  {
    id: 'th-crea-04',
    topic: 'Patrones creacionales',
    prompt: {
      es: 'Implementas Prototype sobre una clase con una lista interna. ¿Qué implica exactamente una copia superficial?',
      en: 'You implement Prototype on a class holding an internal list. What exactly does a shallow copy imply?',
    },
    answer: {
      es: 'El clon apunta a la misma lista que el original, así que cualquier modificación hecha en uno de los dos se observa en el otro.',
      en: 'The clone points to the same list as the original, so any modification made through either of them is visible in the other.',
    },
    distractors: [
      {
        es: 'El clon recibe una lista nueva con los mismos elementos, de modo que añadir o quitar en uno no afecta al otro.',
        en: 'The clone receives a new list holding the same elements, so adding or removing in one does not affect the other.',
      },
      {
        es: 'El método clone heredado de Object copia de forma recursiva todo el grafo alcanzable siempre que la clase implemente Cloneable.',
        en: 'The clone method inherited from Object recursively copies the whole reachable graph as long as the class implements Cloneable.',
      },
    ],
    explanation: {
      es: 'Object.clone hace una copia campo a campo: los primitivos se duplican y las referencias se comparten, por eso la lista queda compartida y aparecen efectos colaterales silenciosos. La segunda opción describe una copia profunda de un solo nivel, que es justo lo que hay que escribir a mano para corregir el problema. Cloneable es solo una interfaz marcadora sin métodos y nunca copia nada de forma recursiva.',
      en: 'Object.clone performs a field-by-field copy: primitives are duplicated and references are shared, which is why the list ends up shared and silent side effects appear. The second option describes a one-level deep copy, which is exactly what you must write by hand to fix the problem. Cloneable is only a marker interface with no methods and never copies anything recursively.',
    },
  },
  {
    id: 'th-crea-05',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Cuándo se justifica un Object Pool y cuál es su riesgo principal?',
      en: 'When is an Object Pool justified and what is its main risk?',
    },
    answer: {
      es: 'Cuando crear el recurso cuesta mucho más que mantenerlo vivo, como una conexión o un hilo; el riesgo es prestar objetos con estado sucio o no devolverlos y agotar el pool.',
      en: 'When creating the resource costs far more than keeping it alive, such as a connection or a thread; the risk is lending objects with dirty state or never returning them and exhausting the pool.',
    },
    distractors: [
      {
        es: 'Cuando muchos objetos comparten el mismo estado invariable; el riesgo es tener que pasar el estado variable como argumento en cada llamada.',
        en: 'When many objects share the same invariant state; the risk is having to pass the variable state as an argument on every call.',
      },
      {
        es: 'Cuando se crean muchos objetos pequeños de vida corta; el riesgo es que el recolector de basura no llegue a liberarlos a tiempo.',
        en: 'When many small short-lived objects are created; the risk is that the garbage collector does not manage to free them in time.',
      },
    ],
    explanation: {
      es: 'El pool solo se paga con recursos caros y limitados como sockets, hilos o conexiones JDBC, que es lo que gestiona HikariCP con su parámetro maximumPoolSize. Compartir estado invariable y pasar el resto por argumento es Flyweight, otro patrón. Para objetos pequeños de vida corta agrupar es contraproducente: la asignación en el vivero de la JVM es casi gratuita y el generacional los recoge sin coste apreciable.',
      en: 'Pooling only pays off for expensive limited resources such as sockets, threads or JDBC connections, which is what HikariCP manages through its maximumPoolSize setting. Sharing invariant state and passing the rest as arguments is Flyweight, a different pattern. For small short-lived objects pooling backfires: allocation in the JVM nursery is nearly free and the generational collector reclaims them at negligible cost.',
    },
  },
  {
    id: 'th-crea-06',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Qué ventajas concretas ofrece un método factoría estático frente a un constructor público?',
      en: 'What concrete advantages does a static factory method offer over a public constructor?',
    },
    answer: {
      es: 'Puede llevar un nombre descriptivo, devolver instancias ya creadas desde una caché y declarar como tipo de retorno un supertipo o un subtipo no público.',
      en: 'It can carry a descriptive name, return already created instances from a cache and declare a supertype or a non-public subtype as its return type.',
    },
    distractors: [
      {
        es: 'Puede ser sobrescrito por las subclases para decidir en cada caso qué implementación concreta se construye.',
        en: 'It can be overridden by subclasses to decide in each case which concrete implementation gets built.',
      },
      {
        es: 'Garantiza que solo exista una instancia y que la creación sea segura entre hilos sin sincronización adicional.',
        en: 'It guarantees that only one instance exists and that creation is thread safe without extra synchronisation.',
      },
    ],
    explanation: {
      es: 'Son las ventajas del primer capítulo de Effective Java: List.of nombra su intención, Integer.valueOf reutiliza la caché de -128 a 127 y EnumSet.noneOf decide devolver RegularEnumSet o JumboEnumSet sin que el cliente lo sepa. Los métodos estáticos no se sobrescriben, solo se ocultan, por lo que la variación polimórfica pertenece a Factory Method. Y devolver instancias cacheadas no implica unicidad ni seguridad entre hilos, que hay que garantizar aparte.',
      en: 'These are the advantages listed in the first chapter of Effective Java: List.of names its intent, Integer.valueOf reuses the cache from -128 to 127 and EnumSet.noneOf decides between RegularEnumSet and JumboEnumSet without the client knowing. Static methods are not overridden, only hidden, so polymorphic variation belongs to Factory Method. Returning cached instances implies neither uniqueness nor thread safety, which must be guaranteed separately.',
    },
  },
  {
    id: 'th-crea-07',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Por qué se considera Service Locator un antipatrón frente a la inyección de dependencias?',
      en: 'Why is Service Locator considered an anti-pattern compared to dependency injection?',
    },
    answer: {
      es: 'Porque esconde las dependencias dentro del cuerpo de los métodos en lugar de declararlas en la firma, y los errores de cableado solo se manifiestan en ejecución al pedir un servicio no registrado.',
      en: 'Because it hides dependencies inside method bodies instead of declaring them in the signature, and wiring errors only surface at runtime when an unregistered service is requested.',
    },
    distractors: [
      {
        es: 'Porque crea una instancia nueva del servicio en cada búsqueda y por eso rompe el ciclo de vida de los beans de ámbito singleton.',
        en: 'Because it creates a new instance of the service on every lookup and therefore breaks the lifecycle of singleton scoped beans.',
      },
      {
        es: 'Porque no puede resolver dependencias circulares entre servicios, algo que la inyección por constructor sí resuelve automáticamente.',
        en: 'Because it cannot resolve circular dependencies between services, something constructor injection does resolve automatically.',
      },
    ],
    explanation: {
      es: 'Con inyección el contrato es explícito y las pruebas pasan dobles por constructor, mientras que con el localizador cada prueba debe preparar un registro global y la clase queda acoplada al propio localizador. Además Spring detecta un bean ausente al arrancar con NoSuchBeanDefinitionException, no en la primera petición. Un localizador puede devolver perfectamente el mismo singleton, y las dependencias circulares son justo lo que la inyección por constructor no puede resolver.',
      en: 'With injection the contract is explicit and tests pass doubles through the constructor, whereas with a locator every test must prepare a global registry and the class stays coupled to the locator itself. On top of that Spring reports a missing bean at startup with NoSuchBeanDefinitionException rather than on the first request. A locator can perfectly return the same singleton, and circular dependencies are precisely what constructor injection cannot resolve.',
    },
  },
  {
    id: 'th-crea-08',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Cómo consigue el idiom del holder una inicialización perezosa segura entre hilos sin sincronización explícita?',
      en: 'How does the holder idiom achieve thread safe lazy initialisation without explicit synchronisation?',
    },
    answer: {
      es: 'La instancia vive en una clase interna estática que la JVM carga e inicializa solo en el primer acceso, y la especificación garantiza que esa inicialización de clase sea segura entre hilos.',
      en: 'The instance lives in a static nested class that the JVM loads and initialises only on first access, and the specification guarantees that class initialisation is thread safe.',
    },
    distractors: [
      {
        es: 'El campo se declara volatile y se comprueba dos veces, una fuera y otra dentro de un bloque sincronizado, para evitar crear dos instancias.',
        en: 'The field is declared volatile and checked twice, once outside and once inside a synchronised block, to avoid creating two instances.',
      },
      {
        es: 'La palabra clave static ya provoca que el campo se inicialice de forma perezosa la primera vez que alguien lo lee.',
        en: 'The static keyword already causes the field to be initialised lazily the first time somebody reads it.',
      },
    ],
    explanation: {
      es: 'La sección 12.4.2 de la especificación de Java obliga a la JVM a inicializar cada clase bajo un cerrojo propio, así que el holder ofrece pereza y seguridad con cero coste en las lecturas posteriores. El doble chequeo con volatile resuelve el mismo problema pero con más código y más posibilidades de equivocarse. Y un campo estático de la clase externa se inicializa cuando se inicializa esa clase, no cuando se lee el campo, por lo que no aporta pereza real.',
      en: 'Section 12.4.2 of the Java specification requires the JVM to initialise every class under its own lock, so the holder gives laziness and safety with zero cost on subsequent reads. Double checked locking with volatile solves the same problem but with more code and more ways to get it wrong. A static field of the outer class is initialised when that class is initialised, not when the field is read, so it provides no real laziness.',
    },
  },
  {
    id: 'th-crea-09',
    topic: 'Patrones creacionales',
    prompt: {
      es: 'En el double checked locking, ¿por qué el campo que guarda la instancia debe declararse volatile?',
      en: 'In double checked locking, why must the field holding the instance be declared volatile?',
    },
    answer: {
      es: 'Porque sin volatile la publicación de la referencia puede reordenarse antes de que el constructor termine, y otro hilo vería un objeto parcialmente inicializado.',
      en: 'Because without volatile the publication of the reference can be reordered before the constructor finishes, and another thread would see a partially initialised object.',
    },
    distractors: [
      {
        es: 'Porque sin volatile dos hilos podrían entrar a la vez en el bloque sincronizado y acabar creando dos instancias distintas.',
        en: 'Because without volatile two threads could enter the synchronised block at the same time and end up creating two different instances.',
      },
      {
        es: 'Porque volatile hace atómica la asignación de la referencia, que de otro modo podría escribirse a medias en plataformas de 32 bits.',
        en: 'Because volatile makes the reference assignment atomic, which otherwise could be written half way on 32 bit platforms.',
      },
    ],
    explanation: {
      es: 'volatile prohíbe reordenar las escrituras del constructor con la publicación de la referencia y establece la relación happens-before que necesita el hilo que lee fuera del cerrojo. La exclusión mutua ya la da synchronized, así que el problema nunca fue crear dos instancias. Y la asignación de una referencia ya es atómica en Java: solo long y double no volatile carecen de esa garantía.',
      en: 'volatile forbids reordering the constructor writes with the publication of the reference and establishes the happens-before edge needed by the thread reading outside the lock. Mutual exclusion is already provided by synchronized, so creating two instances was never the problem. Reference assignment is already atomic in Java: only non-volatile long and double lack that guarantee.',
    },
  },
  {
    id: 'th-crea-10',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Qué ventaja tiene implementar un Singleton como un enum de un solo valor?',
      en: 'What advantage does implementing a Singleton as a single-element enum have?',
    },
    answer: {
      es: 'La JVM garantiza la instancia única incluso frente a la reflexión y la serialización, sin necesidad de escribir readResolve ni de blindar el constructor privado.',
      en: 'The JVM guarantees the single instance even against reflection and serialisation, with no need to write readResolve or to harden the private constructor.',
    },
    distractors: [
      {
        es: 'Permite que el singleton implemente varias interfaces y además herede de una clase base común reutilizable.',
        en: 'It lets the singleton implement several interfaces and additionally inherit from a reusable common base class.',
      },
      {
        es: 'Evita el estado global porque es el contenedor de inyección el que gestiona el ciclo de vida de las constantes del enum.',
        en: 'It avoids global state because the injection container is the one managing the lifecycle of the enum constants.',
      },
    ],
    explanation: {
      es: 'Effective Java recomienda el enum de un solo elemento como la mejor forma de singleton: la serialización se resuelve por nombre y no duplica instancias, y llamar al constructor por reflexión lanza IllegalArgumentException. Un enum puede implementar interfaces, pero no puede extender otra clase porque ya hereda de java.lang.Enum. Y el patrón sigue siendo estado global accesible estáticamente, que es precisamente su coste de diseño.',
      en: 'Effective Java recommends the single-element enum as the best singleton form: serialisation is resolved by name and never duplicates instances, and calling the constructor reflectively throws IllegalArgumentException. An enum can implement interfaces but cannot extend another class, since it already inherits from java.lang.Enum. And the pattern is still statically reachable global state, which is precisely its design cost.',
    },
  },
  {
    id: 'th-crea-11',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Qué describe el multiton o registro de instancias?',
      en: 'What does the multiton or instance registry describe?',
    },
    answer: {
      es: 'Un mapa de instancias indexadas por clave donde cada clave devuelve siempre la misma instancia, creándola en la primera petición.',
      en: 'A map of instances indexed by key where each key always returns the same instance, creating it on the first request.',
    },
    distractors: [
      {
        es: 'Un conjunto de instancias equivalentes que se prestan al cliente y se devuelven al terminar para reutilizar recursos costosos.',
        en: 'A set of equivalent instances that are lent to the client and returned when finished in order to reuse expensive resources.',
      },
      {
        es: 'Varias instancias de un mismo singleton, una por hilo, para que cada hilo trabaje con su propia copia del estado.',
        en: 'Several instances of the same singleton, one per thread, so each thread works with its own copy of the state.',
      },
    ],
    explanation: {
      es: 'El multiton es un singleton con clave, como Currency.getInstance con el código ISO o la caché de Locale: la clave identifica la instancia y el cliente nunca la devuelve. Prestar instancias equivalentes y esperar que se liberen es Object Pool. Una instancia por hilo es ThreadLocal, una decisión de ámbito distinta. Cuidado con indexar por datos de entrada del usuario, porque un mapa sin límite es una fuga de memoria clásica.',
      en: 'A multiton is a keyed singleton, like Currency.getInstance with an ISO code or the Locale cache: the key identifies the instance and the client never hands it back. Lending equivalent instances and expecting them to be released is Object Pool. One instance per thread is ThreadLocal, a different scoping decision. Be careful about keying on user input, because an unbounded map is a classic memory leak.',
    },
  },
  {
    id: 'th-crea-12',
    topic: 'Patrones creacionales',
    prompt: {
      es: 'Debes crear componentes coherentes para dos plataformas distintas sin que el cliente pueda mezclar piezas de ambas. ¿Qué patrón aplica?',
      en: 'You must create coherent components for two different platforms without letting the client mix pieces from both. Which pattern applies?',
    },
    answer: {
      es: 'Abstract Factory, porque una sola fábrica crea la familia completa y garantiza que todos los productos devueltos pertenezcan a la misma plataforma.',
      en: 'Abstract Factory, because one factory creates the whole family and guarantees that every returned product belongs to the same platform.',
    },
    distractors: [
      {
        es: 'Builder, porque permite construir cada componente por pasos y reutilizar el mismo proceso para obtener representaciones distintas.',
        en: 'Builder, because it lets you construct each component step by step and reuse the same process to obtain different representations.',
      },
      {
        es: 'Factory Method, porque basta un método polimórfico de creación por cada tipo de componente para elegir la variante de la plataforma.',
        en: 'Factory Method, because one polymorphic creation method per component type is enough to choose the platform variant.',
      },
    ],
    explanation: {
      es: 'El requisito decisivo es la coherencia de la familia, y Abstract Factory la impone agrupando todos los métodos de creación en un mismo objeto que el cliente recibe ya elegido. Con Factory Method aislado nada impide combinar un botón oscuro con un panel claro, porque cada método decide por separado. Builder varía el proceso de construcción, no la familia. El coste de Abstract Factory es que añadir un tipo de producto obliga a tocar la interfaz y todas sus implementaciones.',
      en: 'The decisive requirement is family consistency, and Abstract Factory enforces it by grouping every creation method in a single object that the client receives already chosen. With isolated Factory Methods nothing prevents combining a dark button with a light panel, because each method decides separately. Builder varies the construction process, not the family. The cost of Abstract Factory is that adding a product type forces changes in the interface and in every implementation.',
    },
  },
  {
    id: 'th-crea-13',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Por qué un framework expone un Factory Method protegido en su clase base?',
      en: 'Why does a framework expose a protected Factory Method in its base class?',
    },
    answer: {
      es: 'Para que el esqueleto del framework instancie el producto que decida la subclase del usuario, sin que el framework conozca esa clase concreta.',
      en: 'So the framework skeleton instantiates the product decided by the user subclass, without the framework knowing that concrete class.',
    },
    distractors: [
      {
        es: 'Para que la subclase redefina pasos concretos del algoritmo manteniendo fijo el orden que define la clase base.',
        en: 'So the subclass redefines concrete steps of the algorithm while keeping the order defined by the base class fixed.',
      },
      {
        es: 'Para que el contenedor de inyección de dependencias sustituya la implementación por configuración y sin recompilar el framework.',
        en: 'So the dependency injection container substitutes the implementation through configuration and without recompiling the framework.',
      },
    ],
    explanation: {
      es: 'Es el principio de Hollywood: el framework llama hacia abajo al método sobrescrito, como createEntityManager o createDefaultModel en Spring MVC, invirtiendo el control de la creación. Redefinir pasos con el orden fijo es Template Method, patrón hermano en el que un Factory Method suele aparecer como uno de los pasos, pero cuya intención es el algoritmo y no la creación. La sustitución por configuración es tarea del contenedor y no requiere un método protegido.',
      en: 'This is the Hollywood principle: the framework calls down to the overridden method, as with createEntityManager or createDefaultModel in Spring MVC, inverting control over creation. Redefining steps while the order stays fixed is Template Method, a sibling pattern where a Factory Method often appears as one of the steps, but whose intent is the algorithm rather than creation. Substitution through configuration is the container job and needs no protected method.',
    },
  },
  {
    id: 'th-crea-14',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Por qué una simple factory con un switch no es el Factory Method del catálogo GoF?',
      en: 'Why is a simple factory with a switch not the Factory Method from the GoF catalogue?',
    },
    answer: {
      es: 'Porque no usa herencia ni polimorfismo para variar la creación: un único método concreto decide con condicionales y hay que editarlo cada vez que aparece un tipo nuevo.',
      en: 'Because it uses neither inheritance nor polymorphism to vary creation: a single concrete method decides with conditionals and must be edited whenever a new type appears.',
    },
    distractors: [
      {
        es: 'Porque una simple factory devuelve familias completas de productos relacionados en lugar de un único producto por llamada.',
        en: 'Because a simple factory returns complete families of related products instead of a single product per call.',
      },
      {
        es: 'Porque su método es estático, y el catálogo GoF exige que todo método de creación sea de instancia y devuelva una interfaz.',
        en: 'Because its method is static, and the GoF catalogue requires every creation method to be an instance method returning an interface.',
      },
    ],
    explanation: {
      es: 'Factory Method coloca la decisión en una subclase que sobrescribe al creador, de modo que un producto nuevo llega sin modificar el código existente y se respeta el principio abierto cerrado. La simple factory es un idiom útil pero incumple eso, y ser estática es un síntoma, no la definición: GoF no prohíbe los ayudantes estáticos. Un punto medio habitual es registrar un Map de String a Supplier para eliminar el switch sin crear una jerarquía.',
      en: 'Factory Method places the decision in a subclass overriding the creator, so a new product arrives without modifying existing code and the open closed principle holds. A simple factory is a useful idiom but breaks that, and being static is a symptom rather than the definition: GoF does not forbid static helpers. A common middle ground is registering a Map from String to Supplier to remove the switch without creating a hierarchy.',
    },
  },
  {
    id: 'th-crea-15',
    topic: 'Patrones creacionales',
    prompt: {
      es: 'Un constructor recibe un boolean que cambia el comportamiento del objeto. ¿Cuál es la mejor forma de eliminar ese parámetro bandera?',
      en: 'A constructor receives a boolean that changes the object behaviour. What is the best way to remove that flag parameter?',
    },
    answer: {
      es: 'Sustituirlo por dos subtipos o por dos métodos factoría con nombre explícito, de modo que el modo quede expresado en el tipo y no en un argumento.',
      en: 'Replace it with two subtypes or two explicitly named factory methods, so the mode is expressed in the type rather than in an argument.',
    },
    distractors: [
      {
        es: 'Sustituirlo por un objeto de parámetros que agrupe todas las opciones y así evitar listas de argumentos demasiado largas.',
        en: 'Replace it with a parameter object that groups every option and thereby avoids argument lists that are too long.',
      },
      {
        es: 'Sustituirlo por un enum de dos valores, porque así el llamador ya no puede pasar un valor incorrecto en esa posición.',
        en: 'Replace it with a two-value enum, because then the caller can no longer pass an incorrect value in that position.',
      },
    ],
    explanation: {
      es: 'El olor real es que la bandera selecciona comportamiento, así que la cura que propone Fowler es reemplazar el parámetro por métodos explícitos o por polimorfismo: new Report(true) no dice nada en el punto de llamada y obliga a leer la implementación. El enum mejora la legibilidad pero mantiene el condicional dentro del objeto. El objeto de parámetros ataca un olor distinto, la lista de argumentos larga, no la ramificación de conducta.',
      en: 'The real smell is that the flag selects behaviour, so the cure proposed by Fowler is replacing the parameter with explicit methods or with polymorphism: new Report(true) says nothing at the call site and forces you to read the implementation. An enum improves readability but keeps the conditional inside the object. A parameter object attacks a different smell, the long argument list, not the behavioural branch.',
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
      es: 'Una implementación real de la interfaz con comportamiento neutro, de modo que el cliente puede usarla sin comprobar null en cada punto.',
      en: 'A real implementation of the interface with neutral behaviour, so the client can use it without checking for null at every point.',
    },
    distractors: [
      {
        es: 'Un envoltorio que puede contener un valor o estar vacío y que obliga al cliente a decidir explícitamente qué hacer en cada caso.',
        en: 'A wrapper that may hold a value or be empty and that forces the client to decide explicitly what to do in each case.',
      },
      {
        es: 'Un objeto que lanza una excepción controlada al usarse sin inicializar, para detectar antes los errores de referencia nula.',
        en: 'An object that throws a controlled exception when used uninitialised, so null reference errors are detected earlier.',
      },
    ],
    explanation: {
      es: 'La idea es sustituir condicionales por polimorfismo, como un registrador que descarta los mensajes o Collections.emptyList devuelta en lugar de null. Optional es un concepto emparentado pero traslada la decisión al llamador mediante un envoltorio y no está pensado para campos ni parámetros. Un objeto que lanza excepción es una guarda de fallo rápido, lo contrario del comportamiento neutro; el riesgo real del Null Object es que el silencio oculte un error de configuración.',
      en: 'The idea is replacing conditionals with polymorphism, like a logger that discards messages or Collections.emptyList returned instead of null. Optional is a related concept but it shifts the decision to the caller through a wrapper and is not meant for fields or parameters. An object that throws is a fail fast guard, the opposite of neutral behaviour; the real risk of Null Object is that silence hides a configuration error.',
    },
  },
  {
    id: 'th-crea-17',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿En qué se diferencia el patrón Monostate del Singleton?',
      en: 'How does the Monostate pattern differ from Singleton?',
    },
    answer: {
      es: 'En Monostate se pueden crear tantas instancias como se quiera pero todas comparten el mismo estado estático; en Singleton lo que se restringe es el número de instancias.',
      en: 'In Monostate you can create as many instances as you like but they all share the same static state; in Singleton what gets restricted is the number of instances.',
    },
    distractors: [
      {
        es: 'En Monostate cada hilo recibe su propia copia del estado, mientras que en Singleton el estado se comparte entre todos los hilos.',
        en: 'In Monostate each thread receives its own copy of the state, while in Singleton the state is shared across all threads.',
      },
      {
        es: 'En Monostate el estado es inmutable y por eso es seguro entre hilos, mientras que el Singleton necesita sincronización explícita.',
        en: 'In Monostate the state is immutable and therefore thread safe, while Singleton needs explicit synchronisation.',
      },
    ],
    explanation: {
      es: 'Monostate, descrito por Robert Martin, oculta el reparto tras un constructor normal y métodos de instancia respaldados por campos estáticos, lo que lo hace transparente para el cliente y además permite heredar y sustituir, algo difícil con un constructor privado. Dar una copia por hilo es ThreadLocal. Y nada en Monostate impone inmutabilidad: los campos estáticos compartidos siguen necesitando sincronización, con el agravante de que el cliente no sospecha que hay estado global.',
      en: 'Monostate, described by Robert Martin, hides the sharing behind a normal constructor and instance methods backed by static fields, which makes it transparent to the client and also allows subclassing and substitution, something hard with a private constructor. Giving one copy per thread is ThreadLocal. Nothing in Monostate imposes immutability: the shared static fields still need synchronisation, with the extra danger that the client does not suspect global state exists.',
    },
  },
  {
    id: 'th-crea-18',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Qué aporta un builder por etapas frente a un builder clásico?',
      en: 'What does a staged builder provide compared to a classic builder?',
    },
    answer: {
      es: 'Cada paso devuelve una interfaz distinta que solo expone la operación siguiente, así que el compilador impide llamar a build sin haber suministrado los datos obligatorios.',
      en: 'Each step returns a different interface exposing only the next operation, so the compiler prevents calling build without having supplied the mandatory data.',
    },
    distractors: [
      {
        es: 'Valida todos los argumentos dentro de build y lanza IllegalStateException cuando falta alguno de los campos obligatorios.',
        en: 'It validates every argument inside build and throws IllegalStateException when any mandatory field is missing.',
      },
      {
        es: 'Permite reutilizar el mismo constructor para fabricar varios objetos distintos cambiando solo los pasos opcionales.',
        en: 'It lets you reuse the same builder to produce several different objects by changing only the optional steps.',
      },
    ],
    explanation: {
      es: 'El builder por etapas convierte una comprobación de ejecución en una de compilación tipando cada fase, como en newMail().from(origen).to(destino).build(), donde el método build simplemente no existe antes de tiempo. Su coste es una interfaz por etapa y un orden de llamada rígido. Lanzar IllegalStateException en build es exactamente lo que hace el builder clásico y lo que las etapas vienen a sustituir, y reutilizar el mismo builder es posible en ambos y una fuente conocida de errores por estado residual.',
      en: 'A staged builder turns a runtime check into a compile time one by typing each phase, as in newMail().from(source).to(target).build(), where the build method simply does not exist too early. Its cost is one interface per stage and a rigid call order. Throwing IllegalStateException inside build is exactly what the classic builder does and what staging replaces, and reusing the same builder is possible in both and a known source of bugs from residual state.',
    },
  },
  {
    id: 'th-crea-19',
    topic: 'Patrones creacionales',
    prompt: {
      es: '¿Qué ocurre al inyectar un bean de ámbito petición o prototipo dentro de un bean singleton del contenedor?',
      en: 'What happens when you inject a request scoped or prototype bean into a singleton bean of the container?',
    },
    answer: {
      es: 'El singleton conserva para siempre la instancia que recibió al construirse, así que el bean de vida corta queda cautivo y deja de renovarse en cada uso.',
      en: 'The singleton keeps forever the instance it received when it was constructed, so the short-lived bean becomes captive and stops being renewed on each use.',
    },
    distractors: [
      {
        es: 'El contenedor detecta la incompatibilidad de ámbitos y falla al arrancar porque no puede resolver la dependencia.',
        en: 'The container detects the scope mismatch and fails at startup because it cannot resolve the dependency.',
      },
      {
        es: 'Cada llamada al método crea una instancia nueva, lo que provoca un consumo de memoria creciente y presión sobre el recolector.',
        en: 'Every method call creates a new instance, which causes growing memory usage and pressure on the collector.',
      },
    ],
    explanation: {
      es: 'Es la dependencia cautiva: Spring resuelve la inyección una sola vez al crear el singleton, por lo que un prototipo se comporta como singleton y un bean de petición arrastra datos de la primera petición. Las soluciones son ObjectProvider, un método de búsqueda anotado con Lookup o un proxy de ámbito con proxyMode igual a ScopedProxyMode.TARGET_CLASS. El arranque no falla, y eso es justo lo que hace el fallo silencioso y difícil de detectar en pruebas.',
      en: 'This is the captive dependency: Spring resolves the injection only once when creating the singleton, so a prototype behaves like a singleton and a request scoped bean drags data from the first request. The fixes are ObjectProvider, a lookup method annotated with Lookup, or a scoped proxy with proxyMode set to ScopedProxyMode.TARGET_CLASS. Startup does not fail, and that is exactly what makes the bug silent and hard to catch in tests.',
    },
  },
  {
    id: 'th-crea-20',
    topic: 'Patrones creacionales',
    prompt: {
      es: 'En una clase inmutable, ¿qué caracteriza a los métodos con prefijo with como withImporte?',
      en: 'In an immutable class, what characterises methods prefixed with with such as withAmount?',
    },
    answer: {
      es: 'No modifican el receptor: devuelven una instancia nueva con ese único campo cambiado y el resto de valores copiados del original.',
      en: 'They do not modify the receiver: they return a new instance with that single field changed and the remaining values copied from the original.',
    },
    distractors: [
      {
        es: 'Devuelven this después de asignar el campo, lo que permite encadenar varias configuraciones en una sola expresión.',
        en: 'They return this after assigning the field, which allows chaining several configurations in a single expression.',
      },
      {
        es: 'Marcan el objeto como modificado para que el contenedor persista el cambio al cerrar la transacción actual.',
        en: 'They mark the object as modified so the container persists the change when the current transaction closes.',
      },
    ],
    explanation: {
      es: 'Es el estilo de copia en escritura de java.time y de los records: LocalDate.withDayOfMonth devuelve otra fecha y el error clásico es ignorar el valor devuelto creyendo que la original cambió. Devolver this tras asignar es un asignador fluido sobre un objeto mutable, justo lo contrario de la inmutabilidad. Y marcar el objeto como sucio para persistirlo es el dirty checking que hace JPA con entidades gestionadas, no un método with.',
      en: 'This is the copy on write style of java.time and of records: LocalDate.withDayOfMonth returns another date and the classic bug is ignoring the returned value while believing the original changed. Returning this after assigning is a fluent setter on a mutable object, the exact opposite of immutability. And marking the object as dirty so it gets persisted is the dirty checking JPA performs on managed entities, not a with method.',
    },
  },
];
