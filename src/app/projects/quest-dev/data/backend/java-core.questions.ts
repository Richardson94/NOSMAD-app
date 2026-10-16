import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_JAVA_CORE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-java-01',
    topic: 'Streams',
    prompt: {
      es: '¿Qué diferencia hay entre map y filter en un stream?',
      en: 'What is the difference between map and filter on a stream?',
    },
    answer: {
      es: 'map transforma cada elemento. filter se queda solo con los que cumplen una condición. Ninguno corre hasta una operación terminal como collect.',
      en: 'map transforms each element. filter keeps only the ones that match a condition. Neither runs until a terminal operation such as collect.',
    },
    distractors: [
      {
        es: 'map filtra y filter transforma. Ambos se ejecutan en el momento en que los llamas.',
        en: 'map filters and filter transforms. Both run at the moment you call them.',
      },
      {
        es: 'Son lo mismo: los dos devuelven una lista nueva de inmediato y se pueden recorrer varias veces.',
        en: 'They are the same: both return a new list immediately and can be traversed several times.',
      },
    ],
    explanation: {
      es: 'Sin collect, forEach o reduce la cadena solo describe el trabajo. Un stream tampoco se puede usar dos veces.',
      en: 'Without collect, forEach or reduce the chain only describes the work. A stream also cannot be used twice.',
    },
  },
  {
    id: 'be-java-02',
    topic: 'Optional',
    prompt: {
      es: '¿Para qué se usa Optional?',
      en: 'What is Optional used for?',
    },
    answer: {
      es: 'Como tipo de retorno cuando el valor puede no existir, en lugar de devolver null. Quien llama decide con orElse, orElseThrow o ifPresent.',
      en: 'As a return type when the value may be missing, instead of returning null. The caller decides with orElse, orElseThrow or ifPresent.',
    },
    distractors: [
      {
        es: 'Como tipo de parámetro, para que el llamador declare que el argumento puede faltar.',
        en: 'As a parameter type, so the caller declares that the argument may be missing.',
      },
      {
        es: 'Como campo de la entidad, para no comprobar null al leer propiedades.',
        en: 'As an entity field, so you do not check null when reading properties.',
      },
    ],
    explanation: {
      es: 'Optional comunica ausencia en el retorno. Como parámetro o como campo complica la llamada y la persistencia.',
      en: 'Optional communicates absence on the return. As a parameter or a field it complicates the call and persistence.',
    },
  },
  {
    id: 'be-java-03',
    topic: 'Hilos',
    prompt: {
      es: '¿Qué garantiza volatile en un campo?',
      en: 'What does volatile guarantee on a field?',
    },
    answer: {
      es: 'Que un hilo vea la escritura de otro. No hace atómico un contador++: para eso hace falta AtomicInteger o un cerrojo.',
      en: 'That one thread sees a write from another. It does not make counter++ atomic: that needs AtomicInteger or a lock.',
    },
    distractors: [
      {
        es: 'Que el incremento sea seguro entre hilos, porque cada lectura y escritura queda bloqueada.',
        en: 'That increment is safe across threads, because every read and write is locked.',
      },
      {
        es: 'Lo mismo que synchronized, pero más barato, así que sustituye al bloque en cualquier método.',
        en: 'The same as synchronized, but cheaper, so it replaces the block on any method.',
      },
    ],
    explanation: {
      es: 'Sirve para una bandera de parada. Una operación de varios pasos sigue pudiendo perder actualizaciones.',
      en: 'It fits a stop flag. A multi-step operation can still lose updates.',
    },
  },
  {
    id: 'be-java-04',
    topic: 'Excepciones',
    prompt: {
      es: '¿Cuál es la diferencia entre una excepción checked y una unchecked?',
      en: 'What is the difference between a checked exception and an unchecked one?',
    },
    answer: {
      es: 'La checked hay que capturarla o declararla en throws. La unchecked, como RuntimeException, puede subir sin declararse.',
      en: 'A checked exception must be caught or declared in throws. An unchecked one, such as RuntimeException, can travel up without being declared.',
    },
    distractors: [
      {
        es: 'La unchecked se pierde al cruzar métodos. La checked siempre se propaga sola.',
        en: 'An unchecked exception is lost when it crosses methods. A checked one always propagates on its own.',
      },
      {
        es: 'Toda excepción de base de datos debe ser checked y toda excepción de negocio debe ser unchecked, por una regla del lenguaje.',
        en: 'Every database exception must be checked and every business exception must be unchecked, by a language rule.',
      },
    ],
    explanation: {
      es: 'Elige checked si quien llama puede recuperarse y debe verlo en la firma. Spring suele envolver SQL en excepciones unchecked.',
      en: 'Choose checked if the caller can recover and should see it on the signature. Spring usually wraps SQL in unchecked exceptions.',
    },
  },
  {
    id: 'be-java-05',
    topic: 'Colecciones',
    prompt: {
      es: '¿Qué pasa si llamas add sobre la lista que devuelve Arrays.asList?',
      en: 'What happens if you call add on the list returned by Arrays.asList?',
    },
    answer: {
      es: 'Lanza UnsupportedOperationException. Es una vista de tamaño fijo sobre el arreglo, no un ArrayList.',
      en: 'It throws UnsupportedOperationException. It is a fixed-size view over the array, not an ArrayList.',
    },
    distractors: [
      {
        es: 'Añade el elemento y también crece el arreglo original, porque comparten el mismo almacenamiento.',
        en: 'It adds the element and the original array grows too, because they share the same storage.',
      },
      {
        es: 'Funciona, pero los cambios no se ven en el arreglo porque asList copia los elementos.',
        en: 'It works, but the changes are not visible on the array because asList copies the elements.',
      },
    ],
    explanation: {
      es: 'set sí puede cambiar una posición existente. Si necesitas add, envuelve el resultado en un ArrayList nuevo.',
      en: 'set can still change an existing position. If you need add, wrap the result in a new ArrayList.',
    },
  },
  {
    id: 'be-java-06',
    topic: 'Memoria',
    prompt: {
      es: '¿Qué diferencia hay entre el heap y el stack?',
      en: 'What is the difference between the heap and the stack?',
    },
    answer: {
      es: 'Cada hilo tiene su stack, con las variables locales de las llamadas. El heap es compartido y ahí viven los objetos.',
      en: 'Each thread has its own stack, with the local variables of the calls. The heap is shared and that is where objects live.',
    },
    distractors: [
      {
        es: 'El stack guarda todos los primitivos y el heap todos los objetos, así que un int de un campo nunca está en el heap.',
        en: 'The stack holds every primitive and the heap holds every object, so an int field is never on the heap.',
      },
      {
        es: 'El stack lo limpia el recolector y el heap se libera solo al salir del método.',
        en: 'The collector cleans the stack and the heap is freed on its own when the method returns.',
      },
    ],
    explanation: {
      es: 'Al retornar, el marco del stack desaparece. Un objeto sigue en el heap mientras alguien lo referencie.',
      en: 'On return, the stack frame disappears. An object stays on the heap while something still references it.',
    },
  },
  {
    id: 'be-java-07',
    topic: 'Records',
    prompt: {
      es: '¿Qué es un record en Java?',
      en: 'What is a record in Java?',
    },
    answer: {
      es: 'Una clase compacta para datos. Java genera el constructor, los accesores, equals, hashCode y toString. Los componentes son finales.',
      en: 'A compact class for data. Java generates the constructor, the accessors, equals, hashCode and toString. The components are final.',
    },
    distractors: [
      {
        es: 'Una clase con getters y setters públicos, más un builder generado para copiar el objeto.',
        en: 'A class with public getters and setters, plus a generated builder to copy the object.',
      },
      {
        es: 'Solo azúcar para una interfaz. No tiene equals ni constructor propio.',
        en: 'Only sugar for an interface. It has neither equals nor its own constructor.',
      },
    ],
    explanation: {
      es: 'El accesor se llama como el componente, por ejemplo name(), no getName(). No hay setters.',
      en: 'The accessor is named like the component, for example name(), not getName(). There are no setters.',
    },
  },
  {
    id: 'be-java-08',
    topic: 'Streams',
    prompt: {
      es: '¿Cuándo tiene sentido usar parallelStream?',
      en: 'When does parallelStream make sense?',
    },
    answer: {
      es: 'Con muchos elementos y un trabajo de CPU pesado, sin estado compartido. En listas pequeñas o en llamadas a base de datos suele ir más lento.',
      en: 'With many elements and heavy CPU work, and no shared state. On small lists or database calls it is usually slower.',
    },
    distractors: [
      {
        es: 'Siempre que la máquina tenga varios núcleos, porque el reparto sale gratis.',
        en: 'Whenever the machine has several cores, because the split is free.',
      },
      {
        es: 'Sobre todo en entrada y salida, porque los hilos esperando red aprovechan mejor el pool.',
        en: 'Especially for input and output, because threads waiting on the network use the pool better.',
      },
    ],
    explanation: {
      es: 'Partir y unir tiene un costo. Si el trabajo por elemento es barato, el paralelo no compensa.',
      en: 'Splitting and joining has a cost. If the work per element is cheap, parallel does not pay off.',
    },
  },
];
