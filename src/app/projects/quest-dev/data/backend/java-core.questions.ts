import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_JAVA_CORE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-java-01',
    topic: 'Streams',
    prompt: {
      es: '¿Qué ocurre si se crea un stream con map y filter pero nunca se invoca una operación terminal?',
      en: 'What happens if a stream is built with map and filter but no terminal operation is invoked?',
    },
    answer: {
      es: 'No se ejecuta nada, porque las operaciones intermedias son perezosas y solo se disparan con la terminal.',
      en: 'Nothing runs, because intermediate operations are lazy and only fire with the terminal operation.',
    },
    distractors: [
      {
        es: 'Se ejecutan las transformaciones y el resultado queda en un stream reutilizable hasta que se consuma.',
        en: 'The transformations run and the result stays in a reusable stream until it is consumed.',
      },
      {
        es: 'Se lanza IllegalStateException al salir del ámbito, porque el stream queda sin consumir.',
        en: 'An IllegalStateException is thrown when leaving the scope, because the stream is left unconsumed.',
      },
    ],
    explanation: {
      es: 'La cadena solo describe el cómputo; sin collect, forEach o reduce no se recorre la fuente, de ahí que un forEach olvidado sea un bug silencioso. Además un stream no es reutilizable: consumirlo dos veces sí lanza IllegalStateException, pero no por abandonarlo.',
      en: 'The chain only describes the computation; without collect, forEach or reduce the source is never traversed, which is why a forgotten forEach is a silent bug. A stream is also not reusable: consuming it twice does throw IllegalStateException, but not for abandoning it.',
    },
  },
  {
    id: 'be-java-02',
    topic: 'Optional',
    prompt: {
      es: '¿Cuál es el uso correcto de Optional según su diseño original?',
      en: 'What is the correct use of Optional according to its original design?',
    },
    answer: {
      es: 'Como tipo de retorno para expresar la posible ausencia de un valor.',
      en: 'As a return type to express the possible absence of a value.',
    },
    distractors: [
      {
        es: 'Como tipo de parámetro, para que el llamador declare explícitamente que puede no enviar el argumento.',
        en: 'As a parameter type, so the caller explicitly declares the argument may be absent.',
      },
      {
        es: 'Como tipo de campo en las entidades, para evitar comprobaciones de null al leer sus propiedades.',
        en: 'As a field type in entities, to avoid null checks when reading their properties.',
      },
    ],
    explanation: {
      es: 'Optional se creó para la API de streams y como retorno, donde comunica al llamador que debe manejar la ausencia. Como parámetro obliga a envolver en cada llamada y duplica los casos (null frente a Optional vacío), y como campo rompe la serialización y añade un objeto por atributo; en entidades se prefiere el nullable normal.',
      en: 'Optional was created for the streams API and as a return type, where it tells the caller absence must be handled. As a parameter it forces wrapping at every call and duplicates cases (null versus empty Optional), and as a field it breaks serialisation and adds an object per attribute; entities prefer plain nullable fields.',
    },
  },
  {
    id: 'be-java-03',
    topic: 'Concurrencia',
    prompt: {
      es: '¿Qué garantiza la palabra clave volatile en un campo?',
      en: 'What does the volatile keyword guarantee on a field?',
    },
    answer: {
      es: 'Visibilidad entre hilos y prohibición de reordenamiento, pero no atomicidad de las operaciones compuestas.',
      en: 'Visibility across threads and no reordering, but not atomicity of compound operations.',
    },
    distractors: [
      {
        es: 'Atomicidad en lecturas y escrituras, por lo que incrementar el campo desde varios hilos es seguro.',
        en: 'Atomicity on reads and writes, so incrementing the field from several threads is safe.',
      },
      {
        es: 'Exclusión mutua ligera, ya que sincroniza el acceso al campo sin el costo de un bloque synchronized.',
        en: 'Lightweight mutual exclusion, since it synchronises access to the field without the cost of a synchronized block.',
      },
    ],
    explanation: {
      es: 'volatile fuerza a leer y escribir en memoria principal, resolviendo el problema de un hilo que nunca ve el cambio de una bandera. Pero contador++ son tres operaciones, así que dos hilos pueden perder actualizaciones: para eso se usa AtomicInteger o un cerrojo. No hay exclusión mutua de ningún tipo.',
      en: 'volatile forces reads and writes to main memory, solving the problem of a thread that never sees a flag change. But counter++ is three operations, so two threads can lose updates: that requires AtomicInteger or a lock. There is no mutual exclusion whatsoever.',
    },
  },
  {
    id: 'be-java-04',
    topic: 'Excepciones',
    prompt: {
      es: '¿Cuándo conviene una excepción comprobada (checked) frente a una no comprobada?',
      en: 'When is a checked exception preferable to an unchecked one?',
    },
    answer: {
      es: 'Cuando el llamador puede recuperarse razonablemente de la condición y se espera que la maneje.',
      en: 'When the caller can reasonably recover from the condition and is expected to handle it.',
    },
    distractors: [
      {
        es: 'Cuando el error proviene de un recurso externo como la base de datos o la red, por convención de la plataforma.',
        en: 'When the error comes from an external resource such as the database or network, by platform convention.',
      },
      {
        es: 'Cuando el error debe propagarse por varias capas, ya que las no comprobadas se pierden al cruzar interfaces.',
        en: 'When the error must cross several layers, since unchecked ones are lost when crossing interfaces.',
      },
    ],
    explanation: {
      es: 'El criterio es la recuperabilidad, no el origen: de hecho Spring envuelve las SQLException comprobadas en DataAccessException no comprobadas precisamente porque el llamador rara vez puede hacer algo. Y ninguna excepción se pierde al propagarse: las no comprobadas suben sin necesidad de declararse.',
      en: 'The criterion is recoverability, not origin: in fact Spring wraps checked SQLException into unchecked DataAccessException precisely because the caller can rarely do anything. And no exception is lost while propagating: unchecked ones travel up without being declared.',
    },
  },
  {
    id: 'be-java-05',
    topic: 'Colecciones',
    prompt: {
      es: '¿Qué ocurre al llamar add sobre la lista devuelta por Arrays.asList?',
      en: 'What happens when calling add on the list returned by Arrays.asList?',
    },
    answer: {
      es: 'Lanza UnsupportedOperationException, porque es una vista de tamaño fijo sobre el arreglo.',
      en: 'It throws UnsupportedOperationException, because it is a fixed-size view over the array.',
    },
    distractors: [
      {
        es: 'Lanza UnsupportedOperationException, porque la lista devuelta es completamente inmutable.',
        en: 'It throws UnsupportedOperationException, because the returned list is fully immutable.',
      },
      {
        es: 'Funciona correctamente, pero los cambios no se reflejan en el arreglo original al ser una copia.',
        en: 'It works correctly, but changes are not reflected in the original array because it is a copy.',
      },
    ],
    explanation: {
      es: 'El matiz está en la razón: la lista comparte el arreglo, así que no puede crecer, pero set sí funciona y modifica el arreglo subyacente. La verdaderamente inmutable es List.of, que rechaza también set. Para una lista mutable hay que envolverla en new ArrayList<>(...).',
      en: 'The nuance is the reason: the list shares the array, so it cannot grow, but set does work and mutates the underlying array. The truly immutable one is List.of, which rejects set as well. For a mutable list you must wrap it in new ArrayList<>(...).',
    },
  },
  {
    id: 'be-java-06',
    topic: 'Memoria',
    prompt: {
      es: '¿Qué diferencia hay entre la pila (stack) y el montículo (heap) en la JVM?',
      en: 'What is the difference between the stack and the heap in the JVM?',
    },
    answer: {
      es: 'La pila guarda marcos con variables locales por hilo; el heap guarda los objetos y es compartido.',
      en: 'The stack holds per-thread frames with local variables; the heap holds objects and is shared.',
    },
    distractors: [
      {
        es: 'La pila guarda los primitivos y el heap los objetos, por eso los primitivos no los recoge el recolector.',
        en: 'The stack holds primitives and the heap holds objects, which is why primitives are not garbage collected.',
      },
      {
        es: 'La pila es memoria administrada por el sistema operativo y el heap la reserva la JVM al arrancar.',
        en: 'The stack is memory managed by the operating system while the JVM reserves the heap at startup.',
      },
    ],
    explanation: {
      es: 'La clave es el alcance: cada hilo tiene su pila privada con marcos que se destruyen al retornar, mientras el heap es común y lo gestiona el recolector. Un primitivo declarado como campo de un objeto vive en el heap dentro de ese objeto, así que la división no es por tipo de dato.',
      en: 'The key is scope: every thread has a private stack whose frames are destroyed on return, while the heap is shared and managed by the collector. A primitive declared as an object field lives on the heap inside that object, so the split is not by data type.',
    },
  },
  {
    id: 'be-java-07',
    topic: 'Records',
    prompt: {
      es: '¿Qué genera automáticamente un record en Java?',
      en: 'What does a Java record generate automatically?',
    },
    answer: {
      es: 'Constructor canónico, accesores, equals, hashCode y toString basados en sus componentes.',
      en: 'A canonical constructor, accessors, equals, hashCode and toString based on its components.',
    },
    distractors: [
      {
        es: 'Constructor, getters y setters, además de equals y hashCode calculados sobre todos los campos.',
        en: 'A constructor, getters and setters, plus equals and hashCode computed over all fields.',
      },
      {
        es: 'Un builder y copias inmutables mediante métodos with, siguiendo el patrón de las clases de datos.',
        en: 'A builder and immutable copies through with methods, following the data class pattern.',
      },
    ],
    explanation: {
      es: 'Los componentes de un record son finales y sus accesores se llaman como el componente (name(), no getName()); por definición no hay setters. Tampoco genera builder ni métodos with, aunque sí se puede declarar un constructor compacto para validar los argumentos.',
      en: 'Record components are final and their accessors are named after the component (name(), not getName()); by definition there are no setters. It also generates no builder nor with methods, although you can declare a compact constructor to validate arguments.',
    },
  },
  {
    id: 'be-java-08',
    topic: 'Streams',
    prompt: {
      es: '¿Cuándo un stream paralelo (parallelStream) mejora realmente el rendimiento?',
      en: 'When does a parallel stream actually improve performance?',
    },
    answer: {
      es: 'Con muchos elementos, operaciones costosas sin estado compartido y una fuente fácil de dividir.',
      en: 'With many elements, expensive stateless operations and an easily splittable source.',
    },
    distractors: [
      {
        es: 'Cuando las operaciones incluyen esperas de entrada/salida, porque el pool aprovecha los hilos bloqueados.',
        en: 'When the operations include I/O waits, because the pool takes advantage of the blocked threads.',
      },
      {
        es: 'Siempre que la máquina tenga varios núcleos, ya que el framework reparte el trabajo automáticamente.',
        en: 'Whenever the machine has several cores, since the framework distributes the work automatically.',
      },
    ],
    explanation: {
      es: 'El paralelismo solo gana si el trabajo por elemento amortiza el costo de dividir y combinar: con listas pequeñas suele ser más lento. Para entrada/salida es contraproducente, porque bloquea los hilos del ForkJoinPool común que comparte toda la aplicación.',
      en: 'Parallelism only wins if the per-element work amortises the cost of splitting and merging: with small lists it is usually slower. For I/O it backfires, because it blocks threads of the common ForkJoinPool shared by the whole application.',
    },
  },
];
