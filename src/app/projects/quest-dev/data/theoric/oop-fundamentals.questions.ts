import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_OOP_FUNDAMENTALS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-oop2-01',
    topic: 'POO',
    prompt: {
      es: '¿Cuándo eliges una clase abstracta y cuándo una interfaz?',
      en: 'When do you choose an abstract class and when an interface?',
    },
    answer: {
      es: 'La clase abstracta cuando necesitas estado de instancia o un constructor compartido. Para un contrato o un rol, una interfaz.',
      en: 'An abstract class when you need instance state or a shared constructor. For a contract or a role, an interface.',
    },
    distractors: [
      {
        es: 'La clase abstracta siempre que haya que compartir código, porque la interfaz no puede tener métodos con cuerpo.',
        en: 'An abstract class whenever code must be shared, because an interface cannot have methods with a body.',
      },
      {
        es: 'La interfaz solo si todos los miembros son públicos, porque no admite métodos privados.',
        en: 'An interface only if every member is public, because it does not allow private methods.',
      },
    ],
    explanation: {
      es: 'En Java moderno una interfaz puede tener métodos con cuerpo. Lo que no puede tener es estado de instancia.',
      en: 'In modern Java an interface can have methods with a body. What it cannot have is instance state.',
    },
  },
  {
    id: 'th-oop2-02',
    topic: 'POO',
    prompt: {
      es: '¿Qué hace Java si una clase implementa dos interfaces con el mismo método default?',
      en: 'A class implements two interfaces with the same default method. What does Java do?',
    },
    answer: {
      es: 'No compila hasta que la clase sobrescriba el método y decida cuál usar.',
      en: 'It does not compile until the class overrides the method and decides which one to use.',
    },
    distractors: [
      {
        es: 'Gana el default de la primera interfaz en la cláusula implements.',
        en: 'The default of the first interface in the implements clause wins.',
      },
      {
        es: 'Gana el más específico y, si no hay relación, falla en ejecución.',
        en: 'The most specific one wins and, if they are unrelated, it fails at runtime.',
      },
    ],
    explanation: {
      es: 'Una implementación de la clase gana sobre un default. Si las dos interfaces no se relacionan, el compilador obliga a desambiguar.',
      en: 'A class implementation wins over a default. If the two interfaces are unrelated, the compiler forces you to disambiguate.',
    },
  },
  {
    id: 'th-oop2-03',
    topic: 'POO',
    prompt: {
      es: '¿Qué tiene que cumplir un equals bien escrito?',
      en: 'What must a well written equals satisfy?',
    },
    answer: {
      es: 'Ser reflexivo, simétrico, transitivo y estable entre llamadas. equals con null debe devolver false.',
      en: 'Be reflexive, symmetric, transitive and stable across calls. equals with null must return false.',
    },
    distractors: [
      {
        es: 'Coincidir siempre con compareTo si la clase implementa Comparable.',
        en: 'Always match compareTo if the class implements Comparable.',
      },
      {
        es: 'Solo simetría y transitividad, porque Object ya garantiza la reflexividad.',
        en: 'Only symmetry and transitivity, because Object already guarantees reflexivity.',
      },
    ],
    explanation: {
      es: 'Si rompes esas reglas, los conjuntos y los mapas se comportan de forma extraña. La coherencia con compareTo está recomendada, no es obligatoria.',
      en: 'If you break those rules, sets and maps behave strangely. Consistency with compareTo is recommended, not mandatory.',
    },
  },
  {
    id: 'th-oop2-04',
    topic: 'POO',
    prompt: {
      es: '¿Por qué es difícil ampliar equals en una subclase que añade un campo?',
      en: 'Why is it hard to extend equals in a subclass that adds a field?',
    },
    answer: {
      es: 'Porque la base puede decir que son iguales y la subclase que no, o al revés. Se pierde la simetría.',
      en: 'Because the base may say they are equal and the subclass may say they are not, or the other way around. Symmetry is lost.',
    },
    distractors: [
      {
        es: 'Basta con llamar a super.equals y luego comparar el campo nuevo.',
        en: 'It is enough to call super.equals and then compare the new field.',
      },
      {
        es: 'Se arregla usando getClass en la subclase e instanceof en la base.',
        en: 'It is fixed by using getClass in the subclass and instanceof in the base.',
      },
    ],
    explanation: {
      es: 'La salida habitual es composición: el tipo nuevo contiene al anterior en lugar de heredarlo.',
      en: 'The usual way out is composition: the new type holds the old one instead of inheriting from it.',
    },
  },
  {
    id: 'th-oop2-05',
    topic: 'POO',
    prompt: {
      es: '¿Qué pasa si guardas un objeto en un HashSet y luego cambias un campo que entra en su hashCode?',
      en: 'You store an object in a HashSet and then change a field that takes part in its hashCode. What happens?',
    },
    answer: {
      es: 'El objeto se queda en el cubo original. contains puede devolver false aunque siga dentro al recorrerlo.',
      en: 'The object stays in its original bucket. contains can return false even though it still shows up when you iterate.',
    },
    distractors: [
      {
        es: 'El conjunto recalcula el hash en cada acceso y lo encuentra, aunque pueda duplicarse.',
        en: 'The set recomputes the hash on every access and finds it, although it may be duplicated.',
      },
      {
        es: 'La siguiente operación lanza ConcurrentModificationException.',
        en: 'The next operation throws ConcurrentModificationException.',
      },
    ],
    explanation: {
      es: 'Por eso las claves de un mapa deben ser inmutables, o el hash debe depender solo de campos que no cambian.',
      en: 'That is why map keys should be immutable, or the hash should depend only on fields that do not change.',
    },
  },
  {
    id: 'th-oop2-06',
    topic: 'POO',
    prompt: {
      es: '¿Qué puedes cambiar en el tipo de retorno al sobrescribir un método?',
      en: 'When overriding a method, what can you change in the return type?',
    },
    answer: {
      es: 'Puedes devolver un subtipo del retorno de la base. No puedes devolver un tipo cualquiera ni un supertipo.',
      en: 'You can return a subtype of the base return type. You cannot return any type you like, nor a supertype.',
    },
    distractors: [
      {
        es: 'Cualquier tipo, porque el retorno no forma parte de la firma.',
        en: 'Any type, because the return type is not part of the signature.',
      },
      {
        es: 'Un supertipo, porque el cliente de la base podrá asignar el resultado igual.',
        en: 'A supertype, because the base client will still be able to assign the result.',
      },
    ],
    explanation: {
      es: 'Cambiar los parámetros no sobrescribe: crea una sobrecarga. La anotación Override evita ese error.',
      en: 'Changing the parameters does not override: it creates an overload. The Override annotation prevents that mistake.',
    },
  },
  {
    id: 'th-oop2-07',
    topic: 'POO',
    prompt: {
      es: '¿Por qué un envoltorio suele ganar a una subclase si quieres añadir comportamiento a una colección que ya existe?',
      en: 'You want to add behaviour to an existing collection. Why does a wrapper usually beat a subclass?',
    },
    answer: {
      es: 'Porque no depende de cómo la clase envuelta se llama a sí misma, y puedes envolver cualquier implementación.',
      en: 'Because it does not depend on how the wrapped class calls itself, and you can wrap any implementation.',
    },
    distractors: [
      {
        es: 'Porque el envoltorio tiene que heredar de la clase envuelta para poder sustituirla.',
        en: 'Because the wrapper must inherit from the wrapped class in order to substitute it.',
      },
      {
        es: 'Porque la herencia evita el código de reenvío y por eso siempre es mejor.',
        en: 'Because inheritance avoids the forwarding code and is therefore always better.',
      },
    ],
    explanation: {
      es: 'Una subclase de HashSet que cuenta en add y en addAll cuenta de más, porque addAll llama a add por dentro.',
      en: 'A HashSet subclass that counts in add and in addAll overcounts, because addAll calls add internally.',
    },
  },
  {
    id: 'th-oop2-08',
    topic: 'POO',
    prompt: {
      es: '¿Hasta dónde llega un mixin hecho con una interfaz y métodos default?',
      en: 'How far does a mixin made with an interface and default methods go?',
    },
    answer: {
      es: 'Reutiliza comportamiento, pero no puede guardar estado propio. Depende de métodos que implemente la clase.',
      en: 'It reuses behaviour, but it cannot keep state of its own. It depends on methods the class implements.',
    },
    distractors: [
      {
        es: 'Desde Java 9 puede tener campos privados, así que el mixin guarda su estado.',
        en: 'Since Java 9 it can have private fields, so the mixin keeps its own state.',
      },
      {
        es: 'Un método default no se puede sobrescribir, por eso no es un mixin real.',
        en: 'A default method cannot be overridden, which is why it is not a real mixin.',
      },
    ],
    explanation: {
      es: 'Los campos de una interfaz siguen siendo constantes. Si necesitas estado, usa composición o una clase abstracta.',
      en: 'Interface fields are still constants. If you need state, use composition or an abstract class.',
    },
  },
  {
    id: 'th-oop2-09',
    topic: 'POO',
    prompt: {
      es: '¿Por qué conviene validar las reglas de una clase en el constructor?',
      en: 'Why is it worth validating a class rules in the constructor?',
    },
    answer: {
      es: 'Porque el objeto nace válido o no nace. Así no circula una instancia a medio construir.',
      en: 'Because the object is born valid or it is not born. That way a half built instance never circulates.',
    },
    distractors: [
      {
        es: 'Es mejor dejar el constructor vacío y validar solo en los setters.',
        en: 'It is better to leave the constructor empty and validate only in the setters.',
      },
      {
        es: 'Basta con validar en la entrada de la API, para no repetir reglas.',
        en: 'Validating at the API entry is enough, so you do not repeat rules.',
      },
    ],
    explanation: {
      es: 'La validación del controlador protege el contrato de entrada. No garantiza la regla del dominio si alguien construye el objeto por otro camino.',
      en: 'Controller validation protects the input contract. It does not guarantee the domain rule if someone builds the object another way.',
    },
  },
  {
    id: 'th-oop2-10',
    topic: 'POO',
    prompt: {
      es: '¿Una subclase sobrescribe un método estático de la base si declara otro con la misma firma?',
      en: 'A subclass declares a static method with the same signature as the base. Does it override it?',
    },
    answer: {
      es: 'No. Lo oculta. La llamada se resuelve por el tipo declarado de la referencia, no por el objeto real.',
      en: 'No. It hides it. The call is resolved by the declared type of the reference, not by the real object.',
    },
    distractors: [
      {
        es: 'Sí, si se anota con Override.',
        en: 'Yes, if it is annotated with Override.',
      },
      {
        es: 'El compilador lo rechaza, igual que rechaza bajar la visibilidad.',
        en: 'The compiler rejects it, just as it rejects lowering visibility.',
      },
    ],
    explanation: {
      es: 'Los métodos estáticos no son polimórficos. Si el comportamiento debe variar, usa un método de instancia o una estrategia.',
      en: 'Static methods are not polymorphic. If the behaviour must vary, use an instance method or a strategy.',
    },
  },
  {
    id: 'th-oop2-11',
    topic: 'POO',
    prompt: {
      es: '¿Qué ves en ejecución si el constructor de la base llama a un método que la subclase sobrescribe?',
      en: 'The base constructor calls a method the subclass overrides. What do you see at runtime?',
    },
    answer: {
      es: 'Corre la versión de la subclase, pero sus campos todavía no están inicializados. Lees null o cero.',
      en: 'The subclass version runs, but its fields are not initialised yet. You read null or zero.',
    },
    distractors: [
      {
        es: 'Corre la versión de la base, porque el objeto aún no tiene el tipo de la subclase.',
        en: 'The base version runs, because the object does not yet have the subclass type.',
      },
      {
        es: 'Corre la de la subclase y los campos final ya tienen valor.',
        en: 'The subclass version runs and the final fields already have a value.',
      },
    ],
    explanation: {
      es: 'Por eso se desaconseja llamar a métodos sobrescribibles desde el constructor. Si la clase no está pensada para heredar, márcala final.',
      en: 'That is why you should not call overridable methods from a constructor. If the class is not meant to be extended, mark it final.',
    },
  },
  {
    id: 'th-oop2-12',
    topic: 'POO',
    prompt: {
      es: '¿Qué significa final en una clase, en un método y en un campo?',
      en: 'What does final mean on a class, on a method and on a field?',
    },
    answer: {
      es: 'En la clase impide heredar. En el método impide sobrescribir. En el campo impide reasignar la referencia, no mutar el objeto.',
      en: 'On a class it prevents inheritance. On a method it prevents overriding. On a field it prevents reassigning the reference, not mutating the object.',
    },
    distractors: [
      {
        es: 'En el campo hace inmutable el objeto, así que una lista final no admite add.',
        en: 'On a field it makes the object immutable, so a final list does not accept add.',
      },
      {
        es: 'En el método impide sobrecargarlo, y en un parámetro impide cambiar el argumento del llamador.',
        en: 'On a method it prevents overloading it, and on a parameter it prevents changing the caller argument.',
      },
    ],
    explanation: {
      es: 'Una lista final sigue aceptando add. Para impedir escrituras hace falta una copia o una vista no modificable.',
      en: 'A final list still accepts add. To block writes you need a copy or an unmodifiable view.',
    },
  },
  {
    id: 'th-oop2-13',
    topic: 'POO',
    prompt: {
      es: '¿Qué diferencia a una entidad de un objeto de valor?',
      en: 'What is the difference between an entity and a value object?',
    },
    answer: {
      es: 'La entidad se identifica por su identidad, aunque cambien sus datos. El objeto de valor se compara por todos sus atributos.',
      en: 'An entity is identified by its identity, even if its data changes. A value object is compared by all of its attributes.',
    },
    distractors: [
      {
        es: 'El objeto de valor no se guarda en base de datos y la entidad sí tiene tabla.',
        en: 'A value object is not stored in the database and an entity has a table.',
      },
      {
        es: 'La única diferencia es que la entidad es mutable y el objeto de valor no.',
        en: 'The only difference is that an entity is mutable and a value object is not.',
      },
    ],
    explanation: {
      es: 'Un cliente sigue siendo el mismo si cambia de nombre. Dos importes iguales son intercambiables.',
      en: 'A customer stays the same if the name changes. Two equal amounts are interchangeable.',
    },
  },
  {
    id: 'th-oop2-14',
    topic: 'POO',
    prompt: {
      es: '¿Qué papel cumple un DTO frente a una entidad?',
      en: 'What role does a DTO play compared with an entity?',
    },
    answer: {
      es: 'El DTO transporta datos y su forma la marca el contrato de la API. La entidad modela un concepto del dominio, con identidad y reglas.',
      en: 'The DTO carries data and its shape is set by the API contract. The entity models a domain concept, with identity and rules.',
    },
    distractors: [
      {
        es: 'El DTO es la entidad sin anotaciones de persistencia.',
        en: 'The DTO is the entity without persistence annotations.',
      },
      {
        es: 'Son lo mismo: ambos son inmutables y se comparan por atributos.',
        en: 'They are the same: both are immutable and compared by attributes.',
      },
    ],
    explanation: {
      es: 'Copiar la entidad campo a campo no desacopla el contrato. Un cambio de nombre en el dominio rompería la API publicada.',
      en: 'Copying the entity field by field does not decouple the contract. A rename in the domain would break the published API.',
    },
  },
  {
    id: 'th-oop2-15',
    topic: 'POO',
    prompt: {
      es: '¿En qué se diferencian, dentro de una interfaz, un método default y uno estático?',
      en: 'Inside an interface, how does a default method differ from a static one?',
    },
    answer: {
      es: 'El default se hereda y la clase puede sobrescribirlo. El estático no se hereda y se llama por el nombre de la interfaz.',
      en: 'The default is inherited and the class may override it. The static one is not inherited and is called through the interface name.',
    },
    distractors: [
      {
        es: 'Los dos se heredan. El estático solo se distingue porque no usa this.',
        en: 'Both are inherited. The static one only differs because it does not use this.',
      },
      {
        es: 'El estático también se hereda, pero queda oculto si la clase declara la misma firma.',
        en: 'The static one is inherited too, but it is hidden if the class declares the same signature.',
      },
    ],
    explanation: {
      es: 'Por eso escribes Comparator.comparing y no basta con implementar Comparator para llamarlo sin calificar.',
      en: 'That is why you write Comparator.comparing and implementing Comparator is not enough to call it without a qualifier.',
    },
  },
  {
    id: 'th-oop2-16',
    topic: 'POO',
    prompt: {
      es: '¿Qué diferencia a la composición de la agregación?',
      en: 'What is the difference between composition and aggregation?',
    },
    answer: {
      es: 'En la composición la parte no vive fuera del todo y desaparece con él. En la agregación la parte tiene vida propia y puede compartirse.',
      en: 'In composition the part does not live outside the whole and disappears with it. In aggregation the part has its own life and can be shared.',
    },
    distractors: [
      {
        es: 'En la composición se guarda una referencia y en la agregación una copia.',
        en: 'In composition you store a reference and in aggregation a copy.',
      },
      {
        es: 'En la composición la relación es bidireccional y en la agregación no.',
        en: 'In composition the relation is bidirectional and in aggregation it is not.',
      },
    ],
    explanation: {
      es: 'Una línea de factura no tiene sentido sin la factura. Un cliente existe antes y después de un pedido.',
      en: 'An invoice line makes no sense without the invoice. A customer exists before and after an order.',
    },
  },
  {
    id: 'th-oop2-17',
    topic: 'POO',
    prompt: {
      es: '¿Qué diferencia hay entre genéricos y polimorfismo de subtipo?',
      en: 'What is the difference between generics and subtype polymorphism?',
    },
    answer: {
      es: 'Los genéricos escriben un algoritmo válido para muchos tipos. El polimorfismo de subtipo elige la implementación según el objeto real.',
      en: 'Generics write one algorithm that works for many types. Subtype polymorphism picks the implementation from the real object.',
    },
    distractors: [
      {
        es: 'Los genéricos se resuelven en ejecución y la sobrescritura en compilación.',
        en: 'Generics are resolved at runtime and overriding at compile time.',
      },
      {
        es: 'Los genéricos son la sobrecarga y el de subtipo es la sobrescritura.',
        en: 'Generics are overloading and subtype polymorphism is overriding.',
      },
    ],
    explanation: {
      es: 'En Java los genéricos se borran al compilar. List de String y List de Integer comparten la misma clase en ejecución.',
      en: 'In Java generics are erased at compile time. A List of String and a List of Integer share the same class at runtime.',
    },
  },
  {
    id: 'th-oop2-18',
    topic: 'POO',
    prompt: {
      es: '¿Cuál es el problema si un getter devuelve la lista interna de la clase?',
      en: 'A getter returns the internal list of the class. What is the problem?',
    },
    answer: {
      es: 'El cliente puede modificar el estado saltándose las validaciones. Hay que devolver una copia o una vista no modificable.',
      en: 'The client can change the state and skip every validation. You should return a copy or an unmodifiable view.',
    },
    distractors: [
      {
        es: 'No hay riesgo si el campo es final, porque la referencia no se reasigna.',
        en: 'There is no risk if the field is final, because the reference cannot be reassigned.',
      },
      {
        es: 'No hay riesgo si el getter declara Collection en lugar de List.',
        en: 'There is no risk if the getter declares Collection instead of List.',
      },
    ],
    explanation: {
      es: 'El problema es que el objeto devuelto sigue siendo mutable, no el tipo que aparece en la firma.',
      en: 'The problem is that the returned object is still mutable, not the type written in the signature.',
    },
  },
  {
    id: 'th-oop2-19',
    topic: 'POO',
    prompt: {
      es: '¿Qué problema de memoria tiene una clase interna no estática?',
      en: 'What memory problem does a non static inner class have?',
    },
    answer: {
      es: 'Guarda una referencia oculta a la instancia externa. Esa instancia no se libera mientras alguien retenga la interna.',
      en: 'It keeps a hidden reference to the outer instance. That instance cannot be freed while anyone holds the inner one.',
    },
    distractors: [
      {
        es: 'Se carga una sola vez y vive en metadatos, así que nunca se recolecta.',
        en: 'It is loaded once and lives in metadata, so it is never collected.',
      },
      {
        es: 'No hay diferencia real con una clase anidada estática.',
        en: 'There is no real difference from a static nested class.',
      },
    ],
    explanation: {
      es: 'La fuga clásica es registrar esa instancia como listener de larga vida. Si no necesita el exterior, declárala estática.',
      en: 'The classic leak is registering that instance as a long lived listener. If it does not need the outer object, declare it static.',
    },
  },
  {
    id: 'th-oop2-20',
    topic: 'POO',
    prompt: {
      es: '¿Qué cambia entre una clase anónima y una lambda respecto a this?',
      en: 'What changes between an anonymous class and a lambda regarding this?',
    },
    answer: {
      es: 'En la clase anónima this es la propia instancia anónima. En la lambda this es la instancia que la envuelve.',
      en: 'In an anonymous class this is the anonymous instance itself. In a lambda this is the instance that encloses it.',
    },
    distractors: [
      {
        es: 'En las dos this es la instancia envolvente, y la lambda sí captura variables no finales.',
        en: 'In both this is the enclosing instance, and a lambda can capture non final variables.',
      },
      {
        es: 'En la lambda this es el objeto funcional que genera el compilador.',
        en: 'In a lambda this is the functional object the compiler generates.',
      },
    ],
    explanation: {
      es: 'La captura es igual en los dos casos: la variable local tiene que ser final o no cambiar después de asignarse.',
      en: 'Capture is the same in both cases: the local variable must be final or must not change after it is assigned.',
    },
  },
];
