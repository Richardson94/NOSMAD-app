import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_JAVA_LANGUAGE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-javaadv-01',
    topic: 'Java avanzado',
    prompt: {
      es: '¿Por qué List<Object> no acepta una List<String> aunque String sea subtipo de Object?',
      en: 'Why does List of Object not accept a List of String even though String is a subtype of Object?',
    },
    answer: {
      es: 'Porque los genéricos son invariantes: List<String> no es subtipo de List<Object>, y si lo fuera se podría insertar un Integer y romper la lista original.',
      en: 'Because generics are invariant: List of String is not a subtype of List of Object, and if it were you could insert an Integer and break the original list.',
    },
    distractors: [
      {
        es: 'Por el borrado de tipos: en tiempo de ejecución ambas son List cruda, así que el compilador bloquea la asignación para no confundir al recolector.',
        en: 'Because of type erasure: at runtime both are raw List, so the compiler blocks the assignment to avoid confusing the collector.',
      },
      {
        es: 'Sí se acepta tras un cast, igual que un String[] se asigna a Object[], porque arreglos y genéricos son covariantes.',
        en: 'It is accepted after a cast, just as a String array assigns to an Object array, because arrays and generics are covariant.',
      },
    ],
    explanation: {
      es: 'Desde Java 5 List.add rechazaría en compilación lo que en arreglos estalla con ArrayStoreException: si listObject apuntara a una List<String>, listObject.add(1) metería un Integer. Los arreglos sí son covariantes; los genéricos eligieron invarianza para fallar en compilación. El comodín List<? extends Object> sí acepta List<String>, pero entonces no se puede añadir salvo null.',
      en: 'Since Java 5, List.add would reject at compile time what arrays explode with ArrayStoreException: if listObject pointed to a List of String, listObject.add(1) would insert an Integer. Arrays are covariant; generics chose invariance to fail at compile time. The wildcard List of unknown extends Object does accept List of String, but then you cannot add anything except null.',
    },
  },
  {
    id: 'be-javaadv-02',
    topic: 'Java avanzado',
    prompt: {
      es: 'Según la regla PECS, ¿cuándo se usa extends y cuándo super en un comodín?',
      en: 'According to the PECS rule, when do you use extends and when super on a wildcard?',
    },
    answer: {
      es: 'extends cuando la estructura produce valores que se leen; super cuando los consume, es decir, cuando se escriben.',
      en: 'extends when the structure produces values that are read; super when it consumes them, that is, when values are written.',
    },
    distractors: [
      {
        es: 'extends para poder add de un subtipo; super solo para get, porque el límite inferior garantiza el tipo exacto al leer.',
        en: 'extends to be able to add a subtype; super only for get, because the lower bound guarantees the exact type when reading.',
      },
      {
        es: 'Son intercambiables tras el borrado; PECS es solo una convención de lectura de Effective Java, no una regla del compilador.',
        en: 'They are interchangeable after erasure; PECS is only a readability convention from Effective Java, not a compiler rule.',
      },
    ],
    explanation: {
      es: 'PECS (Producer Extends, Consumer Super) de Joshua Bloch se ve en Collections.copy(dest, src) desde Java 5: dest es List<? super T> y src es List<? extends T>. De un List<? extends T> solo se lee T (el productor) y add queda prohibido salvo null; de un List<? super T> se escribe T (el consumidor) y get solo entrega Object. Invertir los comodines no compila, así que no es cosmética.',
      en: 'PECS (Producer Extends, Consumer Super) from Joshua Bloch shows up in Collections.copy(dest, src) since Java 5: dest is List of unknown super T and src is List of unknown extends T. From a List of unknown extends T you only read T (the producer) and add is forbidden except null; from a List of unknown super T you write T (the consumer) and get only yields Object. Swapping the wildcards does not compile, so it is not cosmetic.',
    },
  },
  {
    id: 'be-javaadv-03',
    topic: 'Java avanzado',
    prompt: {
      es: '¿Cuál es una consecuencia directa del borrado de tipos en los genéricos?',
      en: 'What is a direct consequence of type erasure on generics?',
    },
    answer: {
      es: 'No se puede usar instanceof T ni crear new T() o un arreglo de T, porque el argumento de tipo no existe en tiempo de ejecución.',
      en: 'You cannot use instanceof T nor create new T() or an array of T, because the type argument does not exist at runtime.',
    },
    distractors: [
      {
        es: 'El compilador inserta casts, pero la JVM reifica el parámetro y Class.getTypeParameters lo expone como tipo real para instanceof.',
        en: 'The compiler inserts casts, but the JVM reifies the parameter and Class.getTypeParameters exposes it as a real type for instanceof.',
      },
      {
        es: 'El borrado solo afecta a los comodines; un parámetro con nombre T se conserva, por eso la reflexión puede hacer newInstance de T.',
        en: 'Erasure only affects wildcards; a named parameter T is preserved, which is why reflection can newInstance T.',
      },
    ],
    explanation: {
      es: 'El borrado de Java 5 sustituye T por Object o por su cota y deja casts y métodos puente. instanceof List<String> o instanceof T no compilan porque el tipo no es reificable. Class.getGenericSuperclass sí recupera el argumento si una subclase concreta lo fijó (el truco de super type token), pero eso no reifica T dentro del método genérico ni permite new T[].',
      en: 'Erasure in Java 5 replaces T with Object or its bound and leaves casts and bridge methods. instanceof List of String or instanceof T do not compile because the type is not reifiable. Class.getGenericSuperclass does recover the argument if a concrete subclass fixed it (the super type token trick), but that does not reify T inside the generic method nor allow new T[].',
    },
  },
  {
    id: 'be-javaadv-04',
    topic: 'Java avanzado',
    prompt: {
      es: '¿Cuándo conviene un parámetro de tipo acotado <T extends Foo> frente a un comodín <? extends Foo> en la firma de un método?',
      en: 'When is a bounded type parameter T extends Foo preferable to a wildcard unknown extends Foo in a method signature?',
    },
    answer: {
      es: 'Cuando el mismo tipo debe aparecer en más de un sitio, por ejemplo en un parámetro y en el retorno, o relacionando dos parámetros.',
      en: 'When the same type must appear in more than one place, for example in a parameter and in the return type, or relating two parameters.',
    },
    distractors: [
      {
        es: 'Siempre, porque T acotado sí es reificable y permite instanceof T, algo que el comodín no puede expresar.',
        en: 'Always, because bounded T is reifiable and allows instanceof T, something the wildcard cannot express.',
      },
      {
        es: 'El comodín cuando se muta la lista y T extends cuando solo se lee, que es la regla PECS aplicada a la firma.',
        en: 'The wildcard when the list is mutated and T extends when it is only read, which is PECS applied to the signature.',
      },
    ],
    explanation: {
      es: 'Si el tipo solo aparece una vez, el comodín es más simple: void print(List<? extends Number> list). Cuando hay que devolver el mismo T que se recibió, hace falta el parámetro: public static <T> T pick(List<T> list). Collections.max en Java 5 usa <T extends Object & Comparable<? super T>> precisamente para relacionar cota, comparabilidad y retorno. Ni T ni el comodín son reificables.',
      en: 'If the type appears only once, the wildcard is simpler: void print(List of unknown extends Number list). When you must return the same T that was received, you need the parameter: public static T pick(List of T list). Collections.max in Java 5 uses T extends Object and Comparable of unknown super T precisely to relate bound, comparability and return type. Neither T nor the wildcard is reifiable.',
    },
  },
  {
    id: 'be-javaadv-05',
    topic: 'Java avanzado',
    prompt: {
      es: '¿Qué aportan las clases e interfaces sealed a un switch sobre su tipo?',
      en: 'What do sealed classes and interfaces give you in a switch on their type?',
    },
    answer: {
      es: 'Exhaustividad: si se cubren todos los subtipos permits, no hace falta default, y añadir un subtipo rompe en compilación los switch existentes.',
      en: 'Exhaustiveness: if every permits subtype is covered, default is not needed, and adding a subtype breaks existing switches at compile time.',
    },
    distractors: [
      {
        es: 'Impiden heredar fuera del módulo, pero el switch sigue exigiendo default porque el compilador no ve la lista permits en otro archivo.',
        en: 'They forbid subclassing outside the module, but the switch still requires default because the compiler does not see the permits list in another file.',
      },
      {
        es: 'Generan un visitor con un método por subtipo, de modo que el switch queda prohibido sobre un tipo sealed.',
        en: 'They generate a visitor with one method per subtype, so switch becomes illegal on a sealed type.',
      },
    ],
    explanation: {
      es: 'sealed y permits son definitivos en Java 17 (JEP 409): solo las clases listadas, finales o a su vez sealed, pueden extender el tipo. Junto al pattern matching para switch, definitivo en Java 21 (JEP 441), el compilador comprueba que el switch cubre todos los permitted y entonces default sobra. Si mañana se agrega un subtipo en permits, esos switch dejan de compilar; no se genera ningún visitor.',
      en: 'sealed and permits are final in Java 17 (JEP 409): only the listed types, final or themselves sealed, may extend the type. Together with pattern matching for switch, final in Java 21 (JEP 441), the compiler checks that the switch covers every permitted type and then default is unnecessary. If a subtype is later added to permits, those switches stop compiling; no visitor is generated.',
    },
  },
  {
    id: 'be-javaadv-06',
    topic: 'Java avanzado',
    prompt: {
      es: '¿Qué permite el pattern matching para switch combinado con la deconstrucción de records?',
      en: 'What does pattern matching for switch combined with record deconstruction allow?',
    },
    answer: {
      es: 'Emparejar el tipo y extraer los componentes del record en el mismo case, enlazándolos a variables ya acotadas.',
      en: 'To match the type and extract the record components in the same case, binding them to already narrowed variables.',
    },
    distractors: [
      {
        es: 'Convertir cualquier clase en record en el punto de uso, para que sus campos privados pasen a ser bindings del case.',
        en: 'To convert any class into a record at the use site, so its private fields become bindings of the case.',
      },
      {
        es: 'Solo discriminar el tipo del record; los componentes siguen leyéndose con los accesores nombre() y edad() dentro del case.',
        en: 'Only to discriminate the record type; components are still read with the name() and age() accessors inside the case.',
      },
    ],
    explanation: {
      es: 'Los record patterns (JEP 440) y el pattern matching para switch (JEP 441) son definitivos en Java 21, tras previews en 19 y 20. Un case Point(int x, int y) -> usa el constructor canónico del record y enlaza x e y. La deconstrucción anida: case Circulo(Point(int x, int y), double r) ->. Eso no convierte clases arbitrarias en records ni obliga a llamar a los accesores a mano.',
      en: 'Record patterns (JEP 440) and pattern matching for switch (JEP 441) are final in Java 21, after previews in 19 and 20. A case Point(int x, int y) -> uses the record canonical constructor and binds x and y. Deconstruction nests: case Circle(Point(int x, int y), double r) ->. That does not turn arbitrary classes into records nor force you to call accessors by hand.',
    },
  },
  {
    id: 'be-javaadv-07',
    topic: 'Java avanzado',
    prompt: {
      es: '¿Qué evita el enlace de variable con instanceof pattern respecto al instanceof clásico?',
      en: 'What does variable binding with the instanceof pattern avoid compared to classic instanceof?',
    },
    answer: {
      es: 'El cast explícito posterior: if (obj instanceof String s) deja s ya estrechada y solo en el flujo donde el chequeo es verdadero.',
      en: 'The later explicit cast: if (obj instanceof String s) leaves s already narrowed and only in the flow where the check is true.',
    },
    distractors: [
      {
        es: 'Deja s visible después del if aunque el test falle, siempre que s se haya declarado en el ámbito envolvente.',
        en: 'It leaves s visible after the if even if the test fails, as long as s was declared in the enclosing scope.',
      },
      {
        es: 'Sustituye a equals y hashCode, porque el patrón compara la estructura del objeto igual que un record pattern.',
        en: 'It replaces equals and hashCode, because the pattern compares object structure just like a record pattern.',
      },
    ],
    explanation: {
      es: 'El pattern matching para instanceof es definitivo desde Java 16 (JEP 394, preview en 14 y 15). El compilador aplica flow scoping: s existe donde se demuestra que el test pasó (rama true, o a la derecha de &&) y es implícitamente final. No queda viva tras un if que pudo fallar, y no redefine equals. El cast manual (String) obj queda redundante y es la fuente habitual de ClassCastException.',
      en: 'Pattern matching for instanceof is final since Java 16 (JEP 394, preview in 14 and 15). The compiler applies flow scoping: s exists where the test is proven to have passed (true branch, or to the right of &&) and it is implicitly final. It does not live on after an if that may have failed, and it does not redefine equals. The manual (String) obj cast becomes redundant and is the usual source of ClassCastException.',
    },
  },
  {
    id: 'be-javaadv-08',
    topic: 'Java avanzado',
    prompt: {
      es: '¿Cómo tratan los bloques de texto la indentación del código fuente?',
      en: 'How do text blocks treat indentation from the source code?',
    },
    answer: {
      es: 'El compilador calcula la indentación incidental a partir del delimitador de cierre y la recorta; la posición de ese """ controla lo que queda.',
      en: 'The compiler computes incidental indentation from the closing delimiter and strips it; the position of that closer controls what remains.',
    },
    distractors: [
      {
        es: 'Cada línea conserva exactamente los espacios del archivo, incluida la indentación de la clase Java que envuelve el bloque.',
        en: 'Each line keeps the exact spaces from the file, including the indent of the Java class that wraps the block.',
      },
      {
        es: 'Se aplica String.stripIndent en tiempo de ejecución la primera vez que se usa el bloque, no en compilación.',
        en: 'String.stripIndent is applied at runtime the first time the block is used, not at compile time.',
      },
    ],
    explanation: {
      es: 'Los text blocks son definitivos en Java 15 (JEP 378). El recorte es de compilación: la indentación incidental es el mínimo entre las líneas de contenido y la columna del """ de cierre, de modo que alinear el cierre a la izquierda deja el texto sin sangría. String.stripIndent y translateEscapes existen como métodos de instancia, pero el literal ya nace recortado. La secuencia \\s evita que se eliminen espacios finales de una línea.',
      en: 'Text blocks are final in Java 15 (JEP 378). Stripping is compile time: incidental indentation is the minimum among content lines and the column of the closing delimiter, so aligning the closer to the left leaves the text with no indent. String.stripIndent and translateEscapes exist as instance methods, but the literal is already stripped. The \\s escape keeps trailing spaces on a line.',
    },
  },
  {
    id: 'be-javaadv-09',
    topic: 'Java avanzado',
    prompt: {
      es: '¿Cuál es un límite real de la inferencia con var en variables locales?',
      en: 'What is a real limit of local variable type inference with var?',
    },
    answer: {
      es: 'No sirve para campos, parámetros ni retornos, ni sin inicializador con un tipo denotable: var x = null o una lambda sin tipo destino no compilan.',
      en: 'It cannot be used for fields, parameters or return types, nor without an initializer with a denotable type: var x = null or a lambda without a target type do not compile.',
    },
    distractors: [
      {
        es: 'var infiere siempre Object, así que se pierde el tipo estático y luego se puede reasignar cualquier valor.',
        en: 'var always infers Object, so the static type is lost and any value can later be reassigned.',
      },
      {
        es: 'var es un tipo reservado como int y puede reemplazar cualquier tipo explícito, incluido el de un catch o un campo final.',
        en: 'var is a reserved type like int and can replace any explicit type, including that of a catch or a final field.',
      },
    ],
    explanation: {
      es: 'La inferencia de variables locales llegó en Java 10 (JEP 286). var lista = new ArrayList<String>() sí infiere ArrayList<String>, no Object, y las reasignaciones deben respetar ese tipo. No hay var en campos, parámetros de método, tipos de retorno ni en catch. Las lambdas y referencias a método son poly expressions: sin tipo destino, var fn = x -> x no compila (en Java 11 var sí puede anotar los parámetros de una lambda ya tipada).',
      en: 'Local variable type inference arrived in Java 10 (JEP 286). var list = new ArrayList of String does infer ArrayList of String, not Object, and later assignments must respect that type. There is no var on fields, method parameters, return types or catch. Lambdas and method references are poly expressions: without a target type, var fn = x -> x does not compile (in Java 11 var may annotate parameters of an already typed lambda).',
    },
  },
  {
    id: 'be-javaadv-10',
    topic: 'Java avanzado',
    prompt: {
      es: '¿Para qué declarar un método abstracto en un enum?',
      en: 'Why declare an abstract method on an enum?',
    },
    answer: {
      es: 'Para que cada constante implemente su propia estrategia en un cuerpo de clase, en lugar de un switch sobre las constantes.',
      en: 'So that each constant implements its own strategy in a class body, instead of a switch over the constants.',
    },
    distractors: [
      {
        es: 'Porque las constantes no pueden tener métodos de instancia a menos que el tipo enum sea abstracto y abierto a subclases.',
        en: 'Because constants cannot have instance methods unless the enum type is abstract and open to subclasses.',
      },
      {
        es: 'Para forzar subclases del enum fuera del archivo, que es la única forma de añadir comportamiento después de compilar.',
        en: 'To force subclasses of the enum outside the file, which is the only way to add behaviour after compilation.',
      },
    ],
    explanation: {
      es: 'Desde Java 5 un enum puede declarar métodos abstractos y cada constante aporta un cuerpo: PLUS { double apply(double a, double b) { return a + b; } }. El compilador genera una subclase sintética por constante; el tipo enum en sí sigue siendo implícitamente final y no se puede extender en otro archivo. Añadir una constante sin implementar el método no compila, ventaja que un switch sobre Operation no ofrece.',
      en: 'Since Java 5 an enum may declare abstract methods and each constant supplies a body: PLUS { double apply(double a, double b) { return a + b; } }. The compiler generates a synthetic subclass per constant; the enum type itself stays implicitly final and cannot be extended in another file. Adding a constant without implementing the method does not compile, an advantage that a switch on Operation does not offer.',
    },
  },
  {
    id: 'be-javaadv-11',
    topic: 'Java avanzado',
    prompt: {
      es: '¿Por qué EnumSet y EnumMap son más eficientes que HashSet y HashMap cuando las claves son constantes de un enum?',
      en: 'Why are EnumSet and EnumMap more efficient than HashSet and HashMap when the keys are enum constants?',
    },
    answer: {
      es: 'Usan un vector de bits o un arreglo indexado por ordinal, sin hashing ni nodos extra por entrada.',
      en: 'They use a bit vector or an array indexed by ordinal, with no hashing and no extra nodes per entry.',
    },
    distractors: [
      {
        es: 'Internan las constantes en Metaspace y comparan por identidad, como IdentityHashMap, evitando equals y hashCode.',
        en: 'They intern the constants in Metaspace and compare by identity, like IdentityHashMap, skipping equals and hashCode.',
      },
      {
        es: 'Son concurrentes de fábrica, así que ahorran el coste de Collections.synchronizedSet o de un ConcurrentHashMap.',
        en: 'They are concurrent out of the box, so they save the cost of Collections.synchronizedSet or of a ConcurrentHashMap.',
      },
    ],
    explanation: {
      es: 'EnumSet y EnumMap existen desde Java 5. RegularEnumSet guarda hasta 64 constantes en un long (JumboEnumSet usa un long[] si hay más); EnumMap es un arreglo del tamaño de Class.getEnumConstants. El índice es ordinal(), no hashCode, y el iterador sigue el orden del enum. No son hilo-seguros, rechazan null como clave a diferencia de HashMap, y no usan IdentityHashMap por dentro.',
      en: 'EnumSet and EnumMap exist since Java 5. RegularEnumSet stores up to 64 constants in a long (JumboEnumSet uses a long array if there are more); EnumMap is an array sized by Class.getEnumConstants. The index is ordinal(), not hashCode, and the iterator follows enum order. They are not thread-safe, they reject null as a key unlike HashMap, and they do not use IdentityHashMap internally.',
    },
  },
  {
    id: 'be-javaadv-12',
    topic: 'Java avanzado',
    prompt: {
      es: '¿En qué orden se ejecutan la inicialización estática y los bloques static al cargar una clase?',
      en: 'In what order do static initialization and static blocks run when a class is loaded?',
    },
    answer: {
      es: 'Primero los estáticos de la superclase; luego campos static y bloques static de esta clase en orden textual; los de instancia solo al construir.',
      en: 'Superclass statics first; then this class static fields and static blocks in textual order; instance ones only when constructing.',
    },
    distractors: [
      {
        es: 'Todos los bloques static corren antes que los inicializadores de campos static, da igual el orden en el fuente.',
        en: 'Every static block runs before static field initializers, regardless of order in the source.',
      },
      {
        es: 'La JVM inicializa todas las clases del paquete antes de cualquier static, para cumplir el contrato de Class.forName.',
        en: 'The JVM initializes every class in the package before any static, to honour the Class.forName contract.',
      },
    ],
    explanation: {
      es: 'El JLS 12.4 define la inicialización de clase: al primer uso activo se corre <clinit>, que concatena campos static y bloques static {} en orden textual, después de inicializar la superclase. Un campo estático leído más arriba de su inicializador ve el valor por defecto (0 o null), un bug clásico. Los inicializadores de instancia y el constructor se ejecutan después, por cada new, no al cargar. Class.forName fuerza esa inicialización de una clase, no de todo el paquete.',
      en: 'JLS 12.4 defines class initialization: on first active use <clinit> runs, concatenating static fields and static {} blocks in textual order, after the superclass is initialized. A static field read above its initializer sees the default value (0 or null), a classic bug. Instance initializers and the constructor run later, on each new, not at load time. Class.forName forces that initialization for one class, not for the whole package.',
    },
  },
  {
    id: 'be-javaadv-13',
    topic: 'Java avanzado',
    prompt: {
      es: '¿Cuál es la diferencia clave entre una clase interna no estática y una clase anidada estática?',
      en: 'What is the key difference between a non-static inner class and a static nested class?',
    },
    answer: {
      es: 'La interna guarda una referencia implícita a la instancia envolvente; la anidada estática no, así que se construye sin un objeto exterior.',
      en: 'The inner class holds an implicit reference to the enclosing instance; the static nested class does not, so it is constructed without an outer object.',
    },
    distractors: [
      {
        es: 'Solo la interna accede a los miembros privados de la exterior; la anidada estática no, precisamente por no tener instancia envolvente.',
        en: 'Only the inner class accesses private members of the outer class; the static nested one does not, precisely because it has no enclosing instance.',
      },
      {
        es: 'Solo la interna puede declarar miembros static, porque su ciclo de vida está atado al de la instancia exterior.',
        en: 'Only the inner class can declare static members, because its lifecycle is tied to the outer instance.',
      },
    ],
    explanation: {
      es: 'El compilador inyecta el campo sintético this$0 en la interna: Outer.Inner inner = outer.new Inner(). La anidada estática se instancia con new Outer.Nested() y no retiene a Outer, lo que evita fugas de memoria (típico en listeners). Ambas acceden a privados de Outer, incluido un campo private. Hasta Java 16 la interna no podía declarar miembros static (salvo constantes); JEP 395 relajó esa regla, así que el mito queda al revés.',
      en: 'The compiler injects the synthetic this$0 field in the inner class: Outer.Inner inner = outer.new Inner(). The static nested class is instantiated with new Outer.Nested() and does not retain Outer, which avoids memory leaks (typical with listeners). Both access Outer privates, including a private field. Until Java 16 an inner class could not declare static members (except constants); JEP 395 relaxed that rule, so the myth is backwards.',
    },
  },
  {
    id: 'be-javaadv-14',
    topic: 'Java avanzado',
    prompt: {
      es: 'En una clase anónima frente a una lambda, ¿qué significa this y qué locales se pueden capturar?',
      en: 'In an anonymous class versus a lambda, what does this mean and which locals can be captured?',
    },
    answer: {
      es: 'En la anónima this es la instancia anónima; en la lambda this es la instancia envolvente. Ambas capturan solo locales final o efectivamente final.',
      en: 'In the anonymous class this is the anonymous instance; in the lambda this is the enclosing instance. Both capture only final or effectively final locals.',
    },
    distractors: [
      {
        es: 'La lambda crea una clase sintética cuyo this es la propia lambda, igual que la anónima; por eso hay que escribir Envolvente.this.',
        en: 'The lambda creates a synthetic class whose this is the lambda itself, just like the anonymous class; that is why you must write Enclosing.this.',
      },
      {
        es: 'Las lambdas sí capturan locales mutables porque invokedynamic copia el valor actual en cada invocación del SAM.',
        en: 'Lambdas do capture mutable locals because invokedynamic copies the current value on every SAM invocation.',
      },
    ],
    explanation: {
      es: 'Las lambdas de Java 8 se enlazan con invokedynamic y LambdaMetafactory: this dentro de la lambda es el this de la clase envolvente, de modo que se pueden llamar métodos de instancia sin Outer.this. Una clase anónima sí es una interna con this propio. En ambos casos el JLS exige que las variables locales capturadas sean final o effectively final; si se reasignan, no compilan. No hay copia mágica del valor vivo.',
      en: 'Lambdas in Java 8 are linked with invokedynamic and LambdaMetafactory: this inside the lambda is the this of the enclosing class, so instance methods can be called without Outer.this. An anonymous class really is an inner class with its own this. In both cases the JLS requires captured locals to be final or effectively final; if they are reassigned, they do not compile. There is no magic copy of a live value.',
    },
  },
  {
    id: 'be-javaadv-15',
    topic: 'Java avanzado',
    prompt: {
      es: '¿Qué rol cumple cada interfaz funcional Function, Supplier, Consumer, Predicate y BiFunction en el JDK?',
      en: 'What role does each JDK functional interface Function, Supplier, Consumer, Predicate and BiFunction play?',
    },
    answer: {
      es: 'Function transforma T en R, Supplier provee un T sin entrada, Consumer acepta un T, Predicate testea un T y BiFunction combina dos argumentos en R.',
      en: 'Function transforms T into R, Supplier provides a T with no input, Consumer accepts a T, Predicate tests a T and BiFunction combines two arguments into R.',
    },
    distractors: [
      {
        es: 'Function sirve para efectos, Consumer es la transformación pura y Predicate es un Function de Boolean que además cortocircuita.',
        en: 'Function is for side effects, Consumer is the pure transformation and Predicate is a Function of Boolean that also short-circuits.',
      },
      {
        es: 'Las cinco son intercambiables porque comparten apply; los nombres existen solo para que Stream.map y filter se lean mejor.',
        en: 'All five are interchangeable because they share apply; the names exist only so that Stream.map and filter read better.',
      },
    ],
    explanation: {
      es: 'El paquete java.util.function nació en Java 8 con un SAM distinto en cada una: Function.apply, Supplier.get, Consumer.accept, Predicate.test y BiFunction.apply. Stream.map usa Function, filter usa Predicate, forEach usa Consumer y Optional.orElseGet usa Supplier. UnaryOperator y BinaryOperator especializan Function y BiFunction cuando el tipo de entrada y salida coincide. No comparten apply ni se pueden asignar entre sí sin adaptar el SAM.',
      en: 'The java.util.function package arrived in Java 8 with a distinct SAM on each: Function.apply, Supplier.get, Consumer.accept, Predicate.test and BiFunction.apply. Stream.map uses Function, filter uses Predicate, forEach uses Consumer and Optional.orElseGet uses Supplier. UnaryOperator and BinaryOperator specialize Function and BiFunction when input and output types match. They do not share apply and cannot be assigned to one another without adapting the SAM.',
    },
  },
  {
    id: 'be-javaadv-16',
    topic: 'Java avanzado',
    prompt: {
      es: '¿Cuáles son los cuatro tipos de referencias a métodos en Java?',
      en: 'What are the four kinds of method references in Java?',
    },
    answer: {
      es: 'Estática (Tipo::metodoEstatico), ligada (obj::metodo), no ligada (Tipo::metodoDeInstancia) y de constructor (Tipo::new).',
      en: 'Static (Type::staticMethod), bound (obj::method), unbound (Type::instanceMethod) and constructor (Type::new).',
    },
    distractors: [
      {
        es: 'Solo estática y de constructor, porque un método de instancia siempre necesita una lambda para fijar el receptor.',
        en: 'Only static and constructor, because an instance method always needs a lambda to bind the receiver.',
      },
      {
        es: 'Ligada, no ligada y estática; los constructores no se referencian porque new es palabra clave y no un método.',
        en: 'Bound, unbound and static; constructors cannot be referenced because new is a keyword, not a method.',
      },
    ],
    explanation: {
      es: 'Las method references de Java 8 cubren esos cuatro casos. Integer::parseInt es estática; System.out::println es ligada al receptor out; String::length es no ligada: el primer argumento del SAM se convierte en el this. ArrayList::new y int[]::new son referencias a constructor, esta última para toArray. Deben encajar en el SAM de una interfaz funcional; no hace falta una lambda solo para capturar el receptor.',
      en: 'Method references in Java 8 cover those four cases. Integer::parseInt is static; System.out::println is bound to the out receiver; String::length is unbound: the first SAM argument becomes this. ArrayList::new and int[]::new are constructor references, the latter for toArray. They must match the SAM of a functional interface; a lambda is not required just to capture the receiver.',
    },
  },
  {
    id: 'be-javaadv-17',
    topic: 'Java avanzado',
    prompt: {
      es: 'Si el cuerpo de un try-with-resources ya lanzó y close() también lanza, ¿qué excepción se propaga?',
      en: 'If a try-with-resources body already threw and close() also throws, which exception propagates?',
    },
    answer: {
      es: 'La del cuerpo es la primaria; las de close() se adhieren como suprimidas con addSuppressed y se consultan con getSuppressed.',
      en: 'The one from the body is primary; those from close() are attached as suppressed with addSuppressed and read with getSuppressed.',
    },
    distractors: [
      {
        es: 'La de close() sustituye a la original, que se pierde, igual que ocurría con un finally que cierra a mano.',
        en: 'The one from close() replaces the original, which is lost, just as it happened with a finally that closed by hand.',
      },
      {
        es: 'Ambas se envuelven en UndeclaredThrowableException porque AutoCloseable.close no puede declarar excepciones comprobadas.',
        en: 'Both are wrapped in UndeclaredThrowableException because AutoCloseable.close cannot declare checked exceptions.',
      },
    ],
    explanation: {
      es: 'try-with-resources nació en Java 7 sobre AutoCloseable.close (que sí declara Exception; Closeable la especializa a IOException). Si el try lanza, esa es la primaria; cada close posterior que falle llama a Throwable.addSuppressed. El patrón antiguo de cerrar en finally sí pisaba la original. Desde Java 9 el recurso puede ser una variable efectivamente final ya declarada, y UndeclaredThrowableException no aplica: es de los proxies de reflexión.',
      en: 'try-with-resources arrived in Java 7 on AutoCloseable.close (which does declare Exception; Closeable specializes it to IOException). If try throws, that is primary; each later close that fails calls Throwable.addSuppressed. The old close-in-finally pattern did overwrite the original. Since Java 9 the resource may be an already declared effectively final variable, and UndeclaredThrowableException does not apply: it belongs to reflection proxies.',
    },
  },
  {
    id: 'be-javaadv-18',
    topic: 'Java avanzado',
    prompt: {
      es: '¿Qué ocurre si un finally hace return o lanza, cuando el try ya había retornado un valor o lanzado una excepción?',
      en: 'What happens if finally returns or throws, when try had already returned a value or thrown an exception?',
    },
    answer: {
      es: 'Gana el finally: descarta el valor de retorno original o la excepción pendiente, y esa es la razón que sale del método.',
      en: 'finally wins: it discards the original return value or the pending exception, and that is the reason that leaves the method.',
    },
    distractors: [
      {
        es: 'La excepción original se conserva como suprimida, igual que en try-with-resources, y el return del finally se ignora.',
        en: 'The original exception is kept as suppressed, just like in try-with-resources, and the return from finally is ignored.',
      },
      {
        es: 'El compilador prohíbe return dentro de finally, así que esto solo puede ocurrir con throw.',
        en: 'The compiler forbids return inside finally, so this can only happen with throw.',
      },
    ],
    explanation: {
      es: 'El JLS (14.17 y 14.20.2) establece que si finally termina de forma abrupta, abandona la razón pendiente del try o del catch: no hay addSuppressed aquí, la excepción original se pierde del todo. javac emite un warning por return inside finally, pero el código es legal y el valor del try se descarta. Por eso nunca se debe retornar ni lanzar desde finally; para cerrar recursos el mecanismo correcto es try-with-resources.',
      en: 'The JLS (14.17 and 14.20.2) states that if finally completes abruptly, it abandons the pending reason from try or catch: there is no addSuppressed here, the original exception is lost entirely. javac emits a warning for return inside finally, but the code is legal and the try value is discarded. That is why you should never return or throw from finally; the correct way to close resources is try-with-resources.',
    },
  },
  {
    id: 'be-javaadv-19',
    topic: 'Java avanzado',
    prompt: {
      es: 'Una lambda asignada a Function no puede lanzar una excepción comprobada. ¿Cómo se encara?',
      en: 'A lambda assigned to Function cannot throw a checked exception. How is that handled?',
    },
    answer: {
      es: 'Capturándola dentro de la lambda y envolviéndola en una RuntimeException, o usando una interfaz funcional cuyo SAM sí declara throws.',
      en: 'By catching it inside the lambda and wrapping it in a RuntimeException, or by using a functional interface whose SAM does declare throws.',
    },
    distractors: [
      {
        es: 'Declarando throws en el método que contiene la lambda; el compilador lo propaga al SAM de Function.apply.',
        en: 'By declaring throws on the method that contains the lambda; the compiler propagates it to the SAM of Function.apply.',
      },
      {
        es: 'Usando var en la lambda para que la inferencia elija un SAM que lance Exception, como hace Stream.map.',
        en: 'By using var on the lambda so inference picks a SAM that throws Exception, as Stream.map does.',
      },
    ],
    explanation: {
      es: 'Function.apply en Java 8 no declara throws Exception, así que una IOException dentro de la lambda no compila. El patrón del JDK es envolverla en UncheckedIOException (también Java 8) o en otra no comprobada. La otra vía es una interfaz propia @FunctionalInterface R apply(T t) throws E. throws en el método envolvente no cambia el contrato del SAM, y Stream.map sigue exigiendo Function: la comprobada no cruza el pipeline.',
      en: 'Function.apply in Java 8 does not declare throws Exception, so an IOException inside the lambda does not compile. The JDK pattern is to wrap it in UncheckedIOException (also Java 8) or in another unchecked type. The other path is a custom @FunctionalInterface R apply(T t) throws E. throws on the enclosing method does not change the SAM contract, and Stream.map still requires Function: the checked exception does not cross the pipeline.',
    },
  },
  {
    id: 'be-javaadv-20',
    topic: 'Java avanzado',
    prompt: {
      es: '¿Por qué compareTo debe ser consistente con equals si el objeto va a un SortedSet o SortedMap?',
      en: 'Why must compareTo be consistent with equals if the object will go into a SortedSet or SortedMap?',
    },
    answer: {
      es: 'Porque TreeSet y TreeMap usan compareTo como igualdad: si da 0 y equals es falso, el conjunto viola el contrato de Set y puede perder elementos.',
      en: 'Because TreeSet and TreeMap use compareTo as equality: if it yields 0 and equals is false, the set violates the Set contract and can drop elements.',
    },
    distractors: [
      {
        es: 'Porque HashSet llama a compareTo como atajo antes de equals, y una inconsistencia corrompe los cubos del hash.',
        en: 'Because HashSet calls compareTo as a shortcut before equals, and an inconsistency corrupts the hash buckets.',
      },
      {
        es: 'Comparator es siempre consistente con equals por construcción, así que el problema solo existe en Comparable.compareTo.',
        en: 'Comparator is always consistent with equals by construction, so the problem only exists on Comparable.compareTo.',
      },
    ],
    explanation: {
      es: 'Comparable.compareTo y Comparator.compare existen desde las colecciones de Java 2. El contrato de Set se basa en equals, pero TreeSet (sobre TreeMap) trata compareTo == 0 como el mismo elemento. BigDecimal es el contraejemplo clásico: 4.0 y 4.00 tienen compareTo 0 y equals falso, así que un TreeSet los colapsa y un HashSet no. Comparator.comparing tiene el mismo riesgo si la clave no alinea con equals, y HashSet no llama a compareTo.',
      en: 'Comparable.compareTo and Comparator.compare exist since the Java 2 collections. The Set contract is based on equals, but TreeSet (on top of TreeMap) treats compareTo == 0 as the same element. BigDecimal is the classic counterexample: 4.0 and 4.00 have compareTo 0 and equals false, so a TreeSet collapses them and a HashSet does not. Comparator.comparing has the same risk if the key does not align with equals, and HashSet does not call compareTo.',
    },
  },
];
