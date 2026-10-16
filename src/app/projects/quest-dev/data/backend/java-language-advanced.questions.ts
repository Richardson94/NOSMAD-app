import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_JAVA_LANGUAGE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-javaadv-01',
    topic: 'Genéricos',
    prompt: {
      es: '¿Por qué una List de String no se puede asignar a una List de Object?',
      en: 'Why can a List of String not be assigned to a List of Object?',
    },
    answer: {
      es: 'Porque si se pudiera, alguien metería un Integer en esa lista y rompería a quien espera solo String.',
      en: 'Because if it were allowed, someone could put an Integer into that list and break the code that expects only String.',
    },
    distractors: [
      {
        es: 'Sí se puede, igual que un arreglo de String se asigna a un arreglo de Object.',
        en: 'It is allowed, just as a String array can be assigned to an Object array.',
      },
      {
        es: 'No se puede porque en ejecución las dos listas son tipos distintos y el recolector las separa.',
        en: 'It is not allowed because at runtime the two lists are different types and the collector keeps them apart.',
      },
    ],
    explanation: {
      es: 'Los genéricos son invariantes. Un arreglo sí deja esa asignación y falla más tarde al guardar un tipo incorrecto.',
      en: 'Generics are invariant. An array does allow that assignment and fails later when a wrong type is stored.',
    },
  },
  {
    id: 'be-javaadv-02',
    topic: 'Genéricos',
    prompt: {
      es: '¿Qué significa T extends Number en un genérico?',
      en: 'What does T extends Number mean on a generic?',
    },
    answer: {
      es: 'Que T puede ser Number o una subclase, como Integer o Double. El método puede usar lo que Number ofrece.',
      en: 'That T may be Number or a subclass, such as Integer or Double. The method can use what Number offers.',
    },
    distractors: [
      {
        es: 'Que T debe ser exactamente Number, no Integer ni Double.',
        en: 'That T must be exactly Number, not Integer or Double.',
      },
      {
        es: 'Que el método acepta cualquier objeto y hace un cast a Number en ejecución.',
        en: 'That the method accepts any object and casts it to Number at runtime.',
      },
    ],
    explanation: {
      es: 'La cota limita lo que puedes pasar y lo que puedes llamar sobre T. Sin ella, T se trata como Object.',
      en: 'The bound limits what you can pass and what you can call on T. Without it, T is treated as Object.',
    },
  },
  {
    id: 'be-javaadv-03',
    topic: 'Genéricos',
    prompt: {
      es: '¿Qué implica el borrado de tipos en los genéricos?',
      en: 'What does type erasure imply for generics?',
    },
    answer: {
      es: 'En ejecución el parámetro T ya no está. Por eso no puedes hacer new T(), un arreglo de T ni instanceof T.',
      en: 'At runtime the parameter T is gone. That is why you cannot do new T(), an array of T or instanceof T.',
    },
    distractors: [
      {
        es: 'La JVM conserva T, así que instanceof T funciona igual que instanceof String.',
        en: 'The JVM keeps T, so instanceof T works the same as instanceof String.',
      },
      {
        es: 'El borrado solo afecta a List sin parámetros. Un método con T sí puede crear instancias de T.',
        en: 'Erasure only affects a raw List. A method with T can still create instances of T.',
      },
    ],
    explanation: {
      es: 'El compilador inserta casts. Si necesitas crear T, pasa un Class o un supplier.',
      en: 'The compiler inserts casts. If you need to create T, pass a Class or a supplier.',
    },
  },
  {
    id: 'be-javaadv-04',
    topic: 'Genéricos',
    prompt: {
      es: '¿Cuándo conviene un método genérico en lugar de un comodín?',
      en: 'When is a generic method preferable to a wildcard?',
    },
    answer: {
      es: 'Cuando el mismo tipo aparece en varios sitios, por ejemplo un parámetro y el retorno. Así devuelves el mismo T que recibiste.',
      en: 'When the same type appears in several places, for example a parameter and the return. You then return the same T you received.',
    },
    distractors: [
      {
        es: 'Siempre, porque el comodín no compila en ninguna firma de método.',
        en: 'Always, because a wildcard does not compile on any method signature.',
      },
      {
        es: 'Cuando solo lees la lista. El comodín se usa solo para escribir.',
        en: 'When you only read the list. A wildcard is used only for writing.',
      },
    ],
    explanation: {
      es: 'Si el tipo sale una sola vez, List de desconocido extends Number suele bastar y se lee mejor.',
      en: 'If the type appears only once, a List of unknown extends Number is usually enough and reads better.',
    },
  },
  {
    id: 'be-javaadv-05',
    topic: 'Clases selladas',
    prompt: {
      es: '¿Qué aporta una clase o interfaz sealed?',
      en: 'What does a sealed class or interface give you?',
    },
    answer: {
      es: 'Limita quién puede extenderla a los tipos listados en permits. Un switch puede cubrir todos esos casos y el compilador avisa si falta uno.',
      en: 'It limits who can extend it to the types listed in permits. A switch can cover every one of those cases and the compiler warns you if one is missing.',
    },
    distractors: [
      {
        es: 'Impide crear instancias, igual que una clase abstracta, pero cualquiera puede heredarla.',
        en: 'It prevents instantiation, like an abstract class, but anyone can still extend it.',
      },
      {
        es: 'Genera un visitor y prohíbe usar switch sobre ese tipo.',
        en: 'It generates a visitor and forbids switch on that type.',
      },
    ],
    explanation: {
      es: 'Sirve para un conjunto cerrado de variantes, como tipos de pago. Añadir una variante obliga a revisar los switch.',
      en: 'It fits a closed set of variants, such as payment types. Adding a variant forces the switches to be reviewed.',
    },
  },
  {
    id: 'be-javaadv-06',
    topic: 'Pattern matching',
    prompt: {
      es: '¿Qué te ahorra instanceof con una variable de patrón?',
      en: 'What does instanceof with a pattern variable save you?',
    },
    answer: {
      es: 'El cast. Si obj es un String, la variable s ya es un String y solo existe donde el chequeo fue verdadero.',
      en: 'The cast. If obj is a String, the variable s is already a String and it exists only where the check was true.',
    },
    distractors: [
      {
        es: 'Compara el contenido como equals, así que sustituye a hashCode.',
        en: 'It compares content like equals, so it replaces hashCode.',
      },
      {
        es: 'Deja la variable visible en todo el método, aunque el objeto no sea de ese tipo.',
        en: 'It leaves the variable visible in the whole method, even when the object is not of that type.',
      },
    ],
    explanation: {
      es: 'El cast manual es la fuente habitual de ClassCastException. El patrón lo hace el compilador.',
      en: 'A manual cast is the usual source of ClassCastException. The pattern lets the compiler do it.',
    },
  },
  {
    id: 'be-javaadv-07',
    topic: 'Lambdas',
    prompt: {
      es: '¿Qué variables locales puede capturar una lambda?',
      en: 'Which local variables can a lambda capture?',
    },
    answer: {
      es: 'Solo las que son final o no cambian después de asignarse. Si reasignas la variable, la lambda no compila.',
      en: 'Only those that are final or never change after they are assigned. If you reassign the variable, the lambda does not compile.',
    },
    distractors: [
      {
        es: 'Cualquier local, porque la lambda copia el valor nuevo en cada invocación.',
        en: 'Any local, because the lambda copies the new value on every invocation.',
      },
      {
        es: 'Ninguna. Una lambda solo ve campos de la clase, nunca variables del método.',
        en: 'None. A lambda only sees class fields, never variables of the method.',
      },
    ],
    explanation: {
      es: 'Si necesitas un contador que cambie, usa un campo o un objeto mutable, no un int local reasignado.',
      en: 'If you need a counter that changes, use a field or a mutable object, not a reassigned local int.',
    },
  },
  {
    id: 'be-javaadv-08',
    topic: 'Texto',
    prompt: {
      es: '¿Qué es un text block?',
      en: 'What is a text block?',
    },
    answer: {
      es: 'Un String de varias líneas delimitado por triples comillas. El compilador recorta la sangría común según la línea de cierre.',
      en: 'A multi-line String delimited by triple quotes. The compiler strips the common indent according to the closing line.',
    },
    distractors: [
      {
        es: 'Un String que conserva cada espacio del archivo, incluida la sangría de la clase.',
        en: 'A String that keeps every space from the file, including the indent of the class.',
      },
      {
        es: 'Una plantilla que sustituye variables en ejecución, como un format.',
        en: 'A template that substitutes variables at runtime, like a format call.',
      },
    ],
    explanation: {
      es: 'Sirve para SQL o JSON legible. No es interpolación: los valores se siguen pasando con formatted o con concatenación.',
      en: 'It fits readable SQL or JSON. It is not interpolation: values are still passed with formatted or concatenation.',
    },
  },
  {
    id: 'be-javaadv-09',
    topic: 'Inferencia',
    prompt: {
      es: '¿Qué límites tiene var?',
      en: 'What are the limits of var?',
    },
    answer: {
      es: 'Solo vale en variables locales con un valor inicial. No sirve para campos, parámetros ni el tipo de retorno, y var x = null no compila.',
      en: 'It is only valid on local variables with an initial value. It cannot be used for fields, parameters or the return type, and var x = null does not compile.',
    },
    distractors: [
      {
        es: 'Infiera siempre Object, así que luego puedes asignar cualquier cosa.',
        en: 'It always infers Object, so you can later assign anything.',
      },
      {
        es: 'Es un tipo dinámico y puede reemplazar el tipo de un campo o de un catch.',
        en: 'It is a dynamic type and can replace the type of a field or of a catch.',
      },
    ],
    explanation: {
      es: 'var lista = new ArrayList de String sigue siendo esa lista. Las asignaciones posteriores deben respetar el tipo.',
      en: 'var list = new ArrayList of String is still that list. Later assignments must respect the type.',
    },
  },
  {
    id: 'be-javaadv-10',
    topic: 'Enums',
    prompt: {
      es: '¿Para qué declarar un método abstracto en un enum?',
      en: 'Why declare an abstract method on an enum?',
    },
    answer: {
      es: 'Para que cada constante implemente su propio comportamiento, en lugar de un switch que hay que acordarse de actualizar.',
      en: 'So each constant implements its own behaviour, instead of a switch you have to remember to update.',
    },
    distractors: [
      {
        es: 'Para poder heredar el enum desde otro archivo y añadir constantes después de compilar.',
        en: 'So the enum can be extended from another file and constants can be added after compilation.',
      },
      {
        es: 'Porque un enum no puede tener métodos normales si no es abstracto.',
        en: 'Because an enum cannot have normal methods unless it is abstract.',
      },
    ],
    explanation: {
      es: 'Cada constante lleva su cuerpo. Si añades una y no implementas el método, no compila.',
      en: 'Each constant supplies a body. If you add one and do not implement the method, it does not compile.',
    },
  },
  {
    id: 'be-javaadv-11',
    topic: 'Enums',
    prompt: {
      es: '¿Cuándo eliges EnumSet en lugar de HashSet?',
      en: 'When do you choose EnumSet instead of HashSet?',
    },
    answer: {
      es: 'Cuando los elementos son constantes de un enum. Ocupa menos y es más rápido porque usa los ordinales, no el hash.',
      en: 'When the elements are constants of an enum. It is smaller and faster because it uses the ordinals, not the hash.',
    },
    distractors: [
      {
        es: 'Cuando necesitas un conjunto concurrente de cualquier objeto, porque EnumSet es thread-safe por defecto.',
        en: 'When you need a concurrent set of any object, because EnumSet is thread-safe by default.',
      },
      {
        es: 'Nunca. HashSet es igual de eficiente si llamas a equals en las constantes.',
        en: 'Never. HashSet is just as efficient if you call equals on the constants.',
      },
    ],
    explanation: {
      es: 'EnumMap sigue la misma idea para mapas con clave enum. Ninguno es seguro entre hilos por sí solo.',
      en: 'EnumMap follows the same idea for maps with an enum key. Neither is thread-safe on its own.',
    },
  },
  {
    id: 'be-javaadv-12',
    topic: 'Inicialización',
    prompt: {
      es: '¿En qué orden se inicializa una clase?',
      en: 'In what order is a class initialised?',
    },
    answer: {
      es: 'Primero lo static de la superclase. Luego los campos static y los bloques static de esta clase, en el orden del archivo. Lo de instancia corre al hacer new.',
      en: 'Superclass statics first. Then this class static fields and static blocks, in source order. Instance initialisation runs when you call new.',
    },
    distractors: [
      {
        es: 'Todos los bloques static corren antes que los campos static, sin importar el orden en el archivo.',
        en: 'Every static block runs before static fields, regardless of order in the file.',
      },
      {
        es: 'La JVM inicializa todas las clases del paquete antes de ejecutar cualquier static.',
        en: 'The JVM initialises every class in the package before running any static block.',
      },
    ],
    explanation: {
      es: 'Si lees un static antes de su asignación en el archivo, ves el valor por defecto, 0 o null.',
      en: 'If you read a static before its assignment in the file, you see the default value, 0 or null.',
    },
  },
  {
    id: 'be-javaadv-13',
    topic: 'Clases anidadas',
    prompt: {
      es: '¿Qué diferencia hay entre una clase interna y una clase anidada static?',
      en: 'What is the difference between an inner class and a static nested class?',
    },
    answer: {
      es: 'La interna guarda una referencia al objeto exterior y no se crea sin él. La anidada static no, así que se instancia sola.',
      en: 'The inner class holds a reference to the outer object and cannot be created without it. The static nested class does not, so it is instantiated on its own.',
    },
    distractors: [
      {
        es: 'Solo la interna puede leer campos privados de la exterior. La static no ve nada de esa clase.',
        en: 'Only the inner class can read private fields of the outer class. The static one sees nothing of that class.',
      },
      {
        es: 'Son equivalentes. La palabra static solo cambia el nombre con el que se importa.',
        en: 'They are equivalent. The static keyword only changes the name used to import it.',
      },
    ],
    explanation: {
      es: 'Una interna retenida, por ejemplo un listener, puede mantener vivo al objeto exterior y fugar memoria.',
      en: 'A retained inner class, for example a listener, can keep the outer object alive and leak memory.',
    },
  },
  {
    id: 'be-javaadv-14',
    topic: 'Lambdas',
    prompt: {
      es: '¿Qué significa this dentro de una lambda comparado con una clase anónima?',
      en: 'What does this mean inside a lambda compared with an anonymous class?',
    },
    answer: {
      es: 'En la lambda, this es la clase que la contiene. En la clase anónima, this es la propia instancia anónima.',
      en: 'Inside the lambda, this is the enclosing class. Inside the anonymous class, this is the anonymous instance itself.',
    },
    distractors: [
      {
        es: 'En los dos casos this es la instancia anónima, por eso hace falta el nombre de la clase exterior.',
        en: 'In both cases this is the anonymous instance, which is why the outer class name is required.',
      },
      {
        es: 'La lambda no tiene this. Cualquier uso de this no compila.',
        en: 'A lambda has no this. Any use of this does not compile.',
      },
    ],
    explanation: {
      es: 'Por eso una lambda llama métodos de instancia de la clase exterior sin calificarlos. Las dos solo capturan locales que no cambian.',
      en: 'That is why a lambda calls instance methods of the outer class without qualifying them. Both capture only locals that do not change.',
    },
  },
  {
    id: 'be-javaadv-15',
    topic: 'Lambdas',
    prompt: {
      es: '¿Para qué sirven Function, Predicate, Consumer y Supplier?',
      en: 'What are Function, Predicate, Consumer and Supplier for?',
    },
    answer: {
      es: 'Function transforma un valor, Predicate responde sí o no, Consumer recibe un valor y Supplier lo produce sin entrada. Son las interfaces de una sola operación que usan los streams.',
      en: 'Function transforms a value, Predicate answers yes or no, Consumer accepts a value and Supplier produces one with no input. They are the single-method interfaces that streams use.',
    },
    distractors: [
      {
        es: 'Son intercambiables porque todas tienen apply. El nombre solo mejora la lectura.',
        en: 'They are interchangeable because they all have apply. The name only improves reading.',
      },
      {
        es: 'Function es para efectos, Consumer para cálculos puros y Predicate lanza una excepción si el test falla.',
        en: 'Function is for side effects, Consumer is for pure calculations and Predicate throws if the test fails.',
      },
    ],
    explanation: {
      es: 'map recibe una Function, filter un Predicate y forEach un Consumer. No se asignan entre sí.',
      en: 'map takes a Function, filter a Predicate and forEach a Consumer. They are not assignable to each other.',
    },
  },
  {
    id: 'be-javaadv-16',
    topic: 'Lambdas',
    prompt: {
      es: '¿Qué es una referencia a método?',
      en: 'What is a method reference?',
    },
    answer: {
      es: 'Una forma corta de lambda que llama a un método ya existente, como String::toUpperCase, o a un constructor con Tipo::new.',
      en: 'A short form of a lambda that calls an existing method, such as String::toUpperCase, or a constructor with Type::new.',
    },
    distractors: [
      {
        es: 'Solo vale para métodos static. Un método de instancia siempre necesita una lambda con el objeto escrito a mano.',
        en: 'It only works for static methods. An instance method always needs a lambda with the object written by hand.',
      },
      {
        es: 'Es un puntero de C que puedes guardar en un campo Object y llamar con reflexión.',
        en: 'It is a C pointer you can store in an Object field and call through reflection.',
      },
    ],
    explanation: {
      es: 'Tiene que encajar en la interfaz funcional del sitio donde la usas. Si no, no compila.',
      en: 'It must match the functional interface of the place where you use it. Otherwise it does not compile.',
    },
  },
  {
    id: 'be-javaadv-17',
    topic: 'Recursos',
    prompt: {
      es: '¿Qué hace try-with-resources?',
      en: 'What does try-with-resources do?',
    },
    answer: {
      es: 'Cierra solo el recurso al salir del bloque, aunque el cuerpo lance. Si close también falla, esa excepción queda suprimida y la original se propaga.',
      en: 'It closes the resource when the block exits, even if the body throws. If close also fails, that exception is suppressed and the original one propagates.',
    },
    distractors: [
      {
        es: 'Cierra el recurso solo si el cuerpo termina bien. Si hay excepción, debes llamar a close en un catch.',
        en: 'It closes the resource only if the body finishes well. If there is an exception, you must call close in a catch.',
      },
      {
        es: 'Si close lanza, esa excepción sustituye a la del cuerpo y la original se pierde.',
        en: 'If close throws, that exception replaces the one from the body and the original is lost.',
      },
    ],
    explanation: {
      es: 'El recurso debe implementar AutoCloseable. Es preferible a cerrar a mano en un finally.',
      en: 'The resource must implement AutoCloseable. It is preferable to closing by hand in a finally block.',
    },
  },
  {
    id: 'be-javaadv-18',
    topic: 'Excepciones',
    prompt: {
      es: '¿Por qué no debes hacer return dentro de un finally?',
      en: 'Why should you not return from a finally block?',
    },
    answer: {
      es: 'Porque ese return gana: descarta el valor o la excepción que ya iba a salir del try.',
      en: 'Because that return wins: it discards the value or the exception that was already leaving the try.',
    },
    distractors: [
      {
        es: 'El compilador lo prohíbe, así que el problema no existe en código real.',
        en: 'The compiler forbids it, so the problem does not exist in real code.',
      },
      {
        es: 'El return del finally se ignora y siempre sale la excepción original.',
        en: 'The return from finally is ignored and the original exception always leaves.',
      },
    ],
    explanation: {
      es: 'Finally debe limpiar, no decidir el resultado. Para cerrar recursos usa try-with-resources.',
      en: 'Finally should clean up, not decide the result. To close resources, use try-with-resources.',
    },
  },
  {
    id: 'be-javaadv-19',
    topic: 'Lambdas',
    prompt: {
      es: '¿Por qué una lambda asignada a Function no puede lanzar una excepción checked?',
      en: 'Why can a lambda assigned to Function not throw a checked exception?',
    },
    answer: {
      es: 'Porque el método de Function no declara throws. Hay que capturarla dentro y envolverla en una RuntimeException, o usar una interfaz que sí la declare.',
      en: 'Because the Function method does not declare throws. You catch it inside and wrap it in a RuntimeException, or you use an interface that does declare it.',
    },
    distractors: [
      {
        es: 'Basta poner throws en el método que contiene la lambda y el compilador lo propaga.',
        en: 'It is enough to put throws on the method that contains the lambda and the compiler propagates it.',
      },
      {
        es: 'Stream.map acepta IOException si el stream viene de un archivo.',
        en: 'Stream.map accepts IOException if the stream comes from a file.',
      },
    ],
    explanation: {
      es: 'El contrato lo marca la interfaz, no el método de alrededor. Por eso la checked no cruza el pipeline.',
      en: 'The contract is set by the interface, not by the surrounding method. That is why the checked exception does not cross the pipeline.',
    },
  },
  {
    id: 'be-javaadv-20',
    topic: 'Orden',
    prompt: {
      es: '¿Por qué compareTo debe coincidir con equals si el objeto va a un TreeSet?',
      en: 'Why must compareTo agree with equals if the object goes into a TreeSet?',
    },
    answer: {
      es: 'Porque TreeSet trata compareTo igual a cero como el mismo elemento. Si equals dice que son distintos, el conjunto puede perder uno.',
      en: 'Because TreeSet treats compareTo equal to zero as the same element. If equals says they are different, the set can drop one.',
    },
    distractors: [
      {
        es: 'Porque HashSet llama a compareTo antes de equals y un desacuerdo corrompe los cubos.',
        en: 'Because HashSet calls compareTo before equals and a disagreement corrupts the buckets.',
      },
      {
        es: 'No importa. TreeSet siempre usa equals y compareTo solo ordena la impresión.',
        en: 'It does not matter. TreeSet always uses equals and compareTo only orders the printout.',
      },
    ],
    explanation: {
      es: 'El caso clásico es BigDecimal: 4.0 y 4.00 comparan igual y equals es falso. Un TreeSet se queda con uno y un HashSet con los dos.',
      en: 'The classic case is BigDecimal: 4.0 and 4.00 compare equal and equals is false. A TreeSet keeps one and a HashSet keeps both.',
    },
  },
];
