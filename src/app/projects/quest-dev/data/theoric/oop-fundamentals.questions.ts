import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_OOP_FUNDAMENTALS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-oop2-01',
    topic: 'Fundamentos POO',
    prompt: {
      es: 'En Java moderno, ¿cuál es el criterio válido para elegir entre una interfaz y una clase abstracta?',
      en: 'In modern Java, what is the valid criterion for choosing between an interface and an abstract class?',
    },
    answer: {
      es: 'La clase abstracta solo hace falta cuando se necesita estado de instancia o constructores compartidos; para todo lo demás, interfaz.',
      en: 'An abstract class is only needed when you require instance state or shared constructors; for everything else, an interface.',
    },
    distractors: [
      {
        es: 'La clase abstracta se elige cuando hay que compartir implementación, porque una interfaz solo declara métodos sin cuerpo.',
        en: 'An abstract class is chosen when implementation must be shared, because an interface only declares methods without a body.',
      },
      {
        es: 'La interfaz se elige solo si todos sus miembros son públicos, ya que no admite métodos privados ni estáticos.',
        en: 'An interface is chosen only if all its members are public, since it allows neither private nor static methods.',
      },
    ],
    explanation: {
      es: 'Desde Java 8 las interfaces tienen métodos default y estáticos, y desde Java 9 también métodos privados, así que compartir implementación dejó de ser un motivo para usar clase abstracta. Lo que una interfaz sigue sin poder tener es estado de instancia, porque sus campos son implícitamente public static final, ni constructores. Además la interfaz permite que una clase adopte varios roles a la vez, y desde Java 17 puede declararse sealed para controlar quién la implementa.',
      en: 'Since Java 8 interfaces have default and static methods, and since Java 9 private methods too, so sharing implementation stopped being a reason to reach for an abstract class. What an interface still cannot have is instance state, because its fields are implicitly public static final, nor constructors. On top of that an interface lets a class take on several roles at once, and since Java 17 it can be declared sealed to control who implements it.',
    },
  },
  {
    id: 'th-oop2-02',
    topic: 'Fundamentos POO',
    prompt: {
      es: 'Una clase implementa dos interfaces que declaran el mismo método default. ¿Cómo resuelve Java el conflicto?',
      en: 'A class implements two interfaces that declare the same default method. How does Java resolve the conflict?',
    },
    answer: {
      es: 'No compila hasta que la clase lo sobrescriba, y dentro puede delegar con la sintaxis NombreInterfaz.super.metodo().',
      en: 'It does not compile until the class overrides it, and inside it may delegate using the NombreInterfaz.super.method() syntax.',
    },
    distractors: [
      {
        es: 'Gana el default de la primera interfaz listada en la cláusula implements, siguiendo el orden de linealización.',
        en: 'The default of the first interface listed in the implements clause wins, following the linearization order.',
      },
      {
        es: 'Gana el default de la interfaz más específica y, si no hay relación, la JVM lanza IncompatibleClassChangeError al invocarlo.',
        en: 'The default of the most specific interface wins and, if they are unrelated, the JVM throws IncompatibleClassChangeError on invocation.',
      },
    ],
    explanation: {
      es: 'Las reglas de resolución son tres: una implementación de clase siempre gana sobre un default, una subinterfaz gana sobre su superinterfaz, y cuando no hay relación de herencia entre las dos interfaces el compilador obliga a desambiguar. Que gane la más específica es cierto solo en el segundo caso, y el orden en implements no influye en nada. Java evita el diamante de estado porque las interfaces no pueden declarar campos de instancia, de modo que el conflicto nunca es de datos sino de comportamiento.',
      en: 'There are three resolution rules: a class implementation always beats a default, a subinterface beats its superinterface, and when the two interfaces are unrelated the compiler forces you to disambiguate. The most specific one winning is only true in the second case, and the order in the implements clause has no effect at all. Java avoids the state diamond because interfaces cannot declare instance fields, so the conflict is never about data, only about behaviour.',
    },
  },
  {
    id: 'th-oop2-03',
    topic: 'Fundamentos POO',
    prompt: {
      es: '¿Qué propiedades debe cumplir una implementación correcta de equals?',
      en: 'Which properties must a correct implementation of equals satisfy?',
    },
    answer: {
      es: 'Reflexiva, simétrica, transitiva, consistente entre llamadas y además x.equals(null) siempre debe devolver false.',
      en: 'Reflexive, symmetric, transitive, consistent across calls, and in addition x.equals(null) must always return false.',
    },
    distractors: [
      {
        es: 'Reflexiva, simétrica, transitiva y obligatoriamente consistente con compareTo cuando la clase implementa Comparable.',
        en: 'Reflexive, symmetric, transitive and necessarily consistent with compareTo when the class implements Comparable.',
      },
      {
        es: 'Simétrica y transitiva; la reflexividad la garantiza Object, así que una implementación propia no necesita comprobarla.',
        en: 'Symmetric and transitive; reflexivity is guaranteed by Object, so a custom implementation does not need to check it.',
      },
    ],
    explanation: {
      es: 'El javadoc de Object enumera exactamente esas cinco cláusulas, y la de no nulidad se cumple gratis si se usa instanceof, porque instanceof devuelve false ante null sin lanzar NullPointerException. La consistencia con compareTo está fuertemente recomendada pero no es obligatoria, y BigDecimal es el contraejemplo famoso: new BigDecimal("1.0").equals(new BigDecimal("1.00")) es false mientras que compareTo devuelve 0. La reflexividad no se hereda al sobrescribir el método, así que una comparación mal escrita puede romperla y hacer que un objeto no se encuentre en la colección que lo contiene.',
      en: 'The Object javadoc lists exactly those five clauses, and the non nullity one comes for free if you use instanceof, because instanceof returns false for null without throwing NullPointerException. Consistency with compareTo is strongly recommended but not mandatory, and BigDecimal is the famous counterexample: new BigDecimal("1.0").equals(new BigDecimal("1.00")) is false while compareTo returns 0. Reflexivity is not inherited once you override the method, so a badly written comparison can break it and make an object impossible to find in the collection that holds it.',
    },
  },
  {
    id: 'th-oop2-04',
    topic: 'Fundamentos POO',
    prompt: {
      es: 'Una subclase añade un campo y amplía equals. ¿Por qué la herencia rompe la simetría y qué papel juegan instanceof y getClass?',
      en: 'A subclass adds a field and extends equals. Why does inheritance break symmetry, and what role do instanceof and getClass play?',
    },
    answer: {
      es: 'Con instanceof base.equals(sub) puede dar true y sub.equals(base) false; getClass mantiene la simetría pero rompe el LSP.',
      en: 'With instanceof, base.equals(sub) may be true while sub.equals(base) is false; getClass preserves symmetry but breaks LSP.',
    },
    distractors: [
      {
        es: 'Basta con que la subclase llame a super.equals y compare después sus propios campos, y así la simetría queda garantizada.',
        en: 'It is enough for the subclass to call super.equals and then compare its own fields, and symmetry is thereby guaranteed.',
      },
      {
        es: 'Se resuelve usando getClass en la subclase e instanceof en la base, porque cada nivel comprueba lo que le corresponde.',
        en: 'It is solved by using getClass in the subclass and instanceof in the base, because each level checks what belongs to it.',
      },
    ],
    explanation: {
      es: 'No existe forma de extender una clase instanciable añadiendo un componente de valor y conservar el contrato de equals: con instanceof se pierde la simetría y con getClass se rechaza a un subtipo que debería ser sustituible. Llamar a super.equals no arregla nada porque el lado de la base sigue ignorando el campo nuevo, y mezclar las dos técnicas empeora la asimetría. La salida recomendada es la composición, es decir que PuntoColoreado contenga un Punto y ofrezca un método asPunto, y conviene saber que getClass falla con los proxies de Hibernate porque devuelve la subclase generada en tiempo de ejecución.',
      en: 'There is no way to extend an instantiable class with a value component and preserve the equals contract: instanceof loses symmetry and getClass rejects a subtype that ought to be substitutable. Calling super.equals fixes nothing because the base side still ignores the new field, and mixing both techniques makes the asymmetry worse. The recommended way out is composition, that is having ColoredPoint hold a Point and expose an asPoint method, and it is worth knowing that getClass fails with Hibernate proxies because it returns the generated runtime subclass.',
    },
  },
  {
    id: 'th-oop2-05',
    topic: 'Fundamentos POO',
    prompt: {
      es: 'Se guarda un objeto en un HashSet y luego se muta un campo que participa en su hashCode. ¿Qué ocurre?',
      en: 'An object is stored in a HashSet and then a field taking part in its hashCode is mutated. What happens?',
    },
    answer: {
      es: 'Queda en el bucket original, así que contains devuelve false aunque el objeto siga apareciendo al recorrer el conjunto.',
      en: 'It stays in its original bucket, so contains returns false even though the object still shows up when iterating the set.',
    },
    distractors: [
      {
        es: 'El conjunto recalcula el hash en cada acceso, de modo que el elemento se encuentra pero puede aparecer duplicado.',
        en: 'The set recomputes the hash on every access, so the element is found but may show up duplicated.',
      },
      {
        es: 'La siguiente operación falla con ConcurrentModificationException, porque el conjunto detecta que el elemento cambió.',
        en: 'The next operation fails with ConcurrentModificationException, because the set detects that the element changed.',
      },
    ],
    explanation: {
      es: 'HashMap guarda el hash calculado en el nodo al insertar y no lo revisa nunca más, así que la búsqueda va a un bucket distinto y ni contains ni remove encuentran el elemento, lo que produce una fuga silenciosa de memoria. ConcurrentModificationException se dispara por modificaciones estructurales durante la iteración, que es un escenario diferente. La regla práctica es usar claves inmutables o basar hashCode y equals solo en campos que no cambian, como el identificador, y el mismo problema afecta a TreeSet a través de compareTo.',
      en: 'HashMap stores the computed hash in the node at insertion time and never revisits it, so the lookup goes to a different bucket and neither contains nor remove finds the element, producing a silent memory leak. ConcurrentModificationException is triggered by structural modifications during iteration, which is a different scenario. The practical rule is to use immutable keys or to base hashCode and equals only on fields that never change, such as the identifier, and the same problem affects TreeSet through compareTo.',
    },
  },
  {
    id: 'th-oop2-06',
    topic: 'Fundamentos POO',
    prompt: {
      es: 'Al sobrescribir un método, ¿qué margen hay con el tipo de retorno?',
      en: 'When overriding a method, what freedom do you have with the return type?',
    },
    answer: {
      es: 'Puede declararse un subtipo del retorno de la base, que es la covarianza disponible en Java desde la versión 5.',
      en: 'You may declare a subtype of the base return type, which is the covariance available in Java since version 5.',
    },
    distractors: [
      {
        es: 'Puede declararse cualquier tipo, porque el retorno no forma parte de la firma que el compilador usa para identificar el método.',
        en: 'Any type may be declared, because the return type is not part of the signature the compiler uses to identify the method.',
      },
      {
        es: 'Puede declararse un supertipo, ya que el cliente que usa la referencia de la base podrá asignar igualmente el resultado.',
        en: 'A supertype may be declared, since a client using the base reference will be able to assign the result all the same.',
      },
    ],
    explanation: {
      es: 'El retorno es covariante mientras que los parámetros son invariantes: cambiarlos crea una sobrecarga nueva en lugar de una sobrescritura, y por eso la anotación @Override es la mejor defensa contra ese error. Es cierto que el retorno no participa en la resolución de sobrecargas, pero esa premisa no habilita devolver cualquier cosa al sobrescribir, porque el cliente de la base debe poder asignar el resultado. La covarianza es lo que permite que clone o los builders tipados devuelvan el tipo concreto, y el compilador genera un bridge method para mantener la compatibilidad binaria.',
      en: 'The return type is covariant while parameters are invariant: changing them creates a new overload instead of an override, which is why the @Override annotation is the best defence against that mistake. It is true that the return type does not take part in overload resolution, but that premise does not allow returning anything you like when overriding, because the base client must still be able to assign the result. Covariance is what lets clone or typed builders return the concrete type, and the compiler generates a bridge method to keep binary compatibility.',
    },
  },
  {
    id: 'th-oop2-07',
    topic: 'Fundamentos POO',
    prompt: {
      es: 'Para añadir comportamiento a una colección existente, ¿qué ventaja tiene un envoltorio que implementa la misma interfaz y reenvía?',
      en: 'To add behaviour to an existing collection, what advantage does a wrapper implementing the same interface and forwarding have?',
    },
    answer: {
      es: 'No depende de cómo la clase envuelta se llama a sí misma, así que sobrevive a cambios internos y se puede componer en ejecución.',
      en: 'It does not depend on how the wrapped class calls itself, so it survives internal changes and can be composed at runtime.',
    },
    distractors: [
      {
        es: 'El envoltorio debe heredar de la clase envuelta para poder reenviar, ya que de lo contrario no puede sustituirla donde se espera.',
        en: 'The wrapper must inherit from the wrapped class in order to forward, otherwise it cannot substitute it where it is expected.',
      },
      {
        es: 'La delegación solo compensa cuando el comportamiento añadido es transversal; si no, la herencia evita todo el código de reenvío.',
        en: 'Delegation only pays off when the added behaviour is cross cutting; otherwise inheritance avoids all the forwarding boilerplate.',
      },
    ],
    explanation: {
      es: 'El caso de libro es contar inserciones: una subclase de HashSet que incrementa el contador en add y en addAll cuenta de más, porque addAll de la implementación base invoca internamente a add. Un envoltorio que implementa Set y delega no sufre ese problema de autollamada y además puede decorar cualquier implementación, no una sola. Heredar no es necesario para sustituir, basta con implementar la interfaz común, y el patrón resultante es precisamente Decorator, cuyo único límite serio es el problema de la identidad propia en frameworks de callbacks.',
      en: 'The textbook case is counting insertions: a HashSet subclass that increments the counter in add and in addAll overcounts, because the base addAll internally calls add. A wrapper implementing Set and delegating does not suffer that self use problem and can decorate any implementation, not just one. Inheriting is not required to substitute, implementing the shared interface is enough, and the resulting pattern is precisely Decorator, whose only serious limit is the self identity problem in callback frameworks.',
    },
  },
  {
    id: 'th-oop2-08',
    topic: 'Fundamentos POO',
    prompt: {
      es: '¿Hasta dónde llega la simulación de mixins con interfaces y métodos default en Java?',
      en: 'How far does the simulation of mixins with interfaces and default methods go in Java?',
    },
    answer: {
      es: 'Aportan comportamiento reutilizable a cualquier implementador, pero al no poder guardar estado dependen de los métodos abstractos que este provea.',
      en: 'They contribute reusable behaviour to any implementer, but since they cannot hold state they rely on the abstract methods it provides.',
    },
    distractors: [
      {
        es: 'Desde Java 9 una interfaz puede declarar campos privados, y eso es justamente lo que permite un mixin con estado propio.',
        en: 'Since Java 9 an interface can declare private fields, and that is exactly what enables a mixin with its own state.',
      },
      {
        es: 'No son mixins reales porque un método default no se puede sobrescribir en la clase que implementa la interfaz.',
        en: 'They are not real mixins because a default method cannot be overridden in the class implementing the interface.',
      },
    ],
    explanation: {
      es: 'Un mixin típico se escribe como una interfaz Auditable con un método abstracto getCreadoEn y un default esReciente que lo usa, de modo que el estado vive en el implementador y el comportamiento se reutiliza sin herencia. Lo que Java 9 añadió fueron métodos privados en interfaces para compartir código entre defaults, no campos: los campos de una interfaz siguen siendo constantes public static final. Un default sí se puede sobrescribir, y de hecho la implementación de la clase siempre gana sobre él; si hace falta estado real, la alternativa es composición o clase abstracta.',
      en: 'A typical mixin is written as an Auditable interface with an abstract getCreatedAt method and a default isRecent that uses it, so state lives in the implementer while behaviour is reused without inheritance. What Java 9 added was private methods in interfaces to share code between defaults, not fields: interface fields are still public static final constants. A default can indeed be overridden, and in fact the class implementation always wins over it; if real state is needed, the alternative is composition or an abstract class.',
    },
  },
  {
    id: 'th-oop2-09',
    topic: 'Fundamentos POO',
    prompt: {
      es: '¿Por qué conviene validar las invariantes de una clase dentro del constructor?',
      en: 'Why is it advisable to validate the invariants of a class inside the constructor?',
    },
    answer: {
      es: 'Porque lanzar antes de publicar la referencia garantiza que nunca exista una instancia en estado inválido circulando por el sistema.',
      en: 'Because throwing before the reference is published guarantees no instance in an invalid state ever circulates through the system.',
    },
    distractors: [
      {
        es: 'Es mejor validar en los setters y dejar el constructor vacío, porque los frameworks de persistencia exigen un constructor sin argumentos.',
        en: 'It is better to validate in the setters and leave the constructor empty, because persistence frameworks require a no argument constructor.',
      },
      {
        es: 'Es mejor validar con Bean Validation en la capa de entrada, ya que repetir las reglas en el constructor duplica lógica.',
        en: 'It is better to validate with Bean Validation at the entry layer, since repeating the rules in the constructor duplicates logic.',
      },
    ],
    explanation: {
      es: 'La idea es fallar rápido y cerca del origen: con Objects.requireNonNull y comprobaciones que lancen IllegalArgumentException, el objeto o nace válido o no nace, lo que elimina una familia entera de errores difíciles de rastrear. El constructor sin argumentos que pide JPA puede declararse protected, así que no obliga a renunciar a la validación. Bean Validation en el controlador protege el contrato de entrada del DTO, pero es una capa distinta que no puede garantizar la invariante del dominio, y conviene además copiar defensivamente los parámetros mutables después de validarlos.',
      en: 'The idea is to fail fast and close to the origin: with Objects.requireNonNull and checks throwing IllegalArgumentException, the object is either born valid or not born at all, which removes a whole family of hard to trace bugs. The no argument constructor JPA asks for can be declared protected, so it does not force you to give up validation. Bean Validation in the controller protects the DTO input contract, but it is a different layer that cannot guarantee the domain invariant, and you should also defensively copy mutable parameters after validating them.',
    },
  },
  {
    id: 'th-oop2-10',
    topic: 'Fundamentos POO',
    prompt: {
      es: 'Una subclase declara un método estático con la misma firma que el de su clase base. ¿Qué sucede?',
      en: 'A subclass declares a static method with the same signature as the one in its base class. What happens?',
    },
    answer: {
      es: 'Lo oculta en lugar de sobrescribirlo, así que la llamada se resuelve por el tipo declarado de la referencia, no por el objeto real.',
      en: 'It hides it instead of overriding it, so the call is resolved by the declared type of the reference, not by the actual object.',
    },
    distractors: [
      {
        es: 'Sí lo sobrescribe, pero solo si se anota con @Override; sin esa anotación el compilador lo interpreta como una sobrecarga.',
        en: 'It does override it, but only when annotated with @Override; without that annotation the compiler treats it as an overload.',
      },
      {
        es: 'El compilador lo rechaza, igual que rechaza reducir la visibilidad de un método heredado en la subclase.',
        en: 'The compiler rejects it, just as it rejects reducing the visibility of an inherited method in the subclass.',
      },
    ],
    explanation: {
      es: 'Los métodos estáticos pertenecen a la clase y se despachan con invokestatic en tiempo de compilación, así que Base b = new Sub(); b.crear(); ejecuta la versión de Base aunque el objeto sea un Sub, y de ahí viene el aviso de invocar un estático a través de una instancia. Anotar un estático con @Override no compila, y declarar la misma firma sí está permitido: es exactamente el mecanismo de ocultación. La consecuencia de diseño es que los métodos de fábrica y las utilidades estáticas no son polimórficos, por lo que si se necesita variar el comportamiento hay que pasar a un método de instancia o a una estrategia inyectada.',
      en: 'Static methods belong to the class and are dispatched with invokestatic at compile time, so Base b = new Sub(); b.create(); runs the Base version even though the object is a Sub, which is where the warning about calling a static through an instance comes from. Annotating a static with @Override does not compile, and declaring the same signature is allowed: that is exactly the hiding mechanism. The design consequence is that factory methods and static utilities are not polymorphic, so if behaviour must vary you need an instance method or an injected strategy.',
    },
  },
  {
    id: 'th-oop2-11',
    topic: 'Fundamentos POO',
    prompt: {
      es: 'Un constructor de la clase base llama a un método que la subclase sobrescribe. ¿Qué se observa en ejecución?',
      en: 'A base class constructor calls a method that the subclass overrides. What is observed at runtime?',
    },
    answer: {
      es: 'Se ejecuta la versión de la subclase, pero sus campos aún no están inicializados y se leen como null o cero.',
      en: 'The subclass version runs, but its fields are not initialised yet and are read as null or zero.',
    },
    distractors: [
      {
        es: 'Se ejecuta la versión de la clase base, porque durante la construcción el objeto todavía no tiene el tipo dinámico de la subclase.',
        en: 'The base class version runs, because during construction the object does not yet have the dynamic type of the subclass.',
      },
      {
        es: 'Se ejecuta la de la subclase y sus campos final ya tienen valor, ya que los finales se asignan antes de cualquier constructor.',
        en: 'The subclass version runs and its final fields already hold a value, since finals are assigned before any constructor.',
      },
    ],
    explanation: {
      es: 'El orden real es llamada implícita o explícita a super, después los inicializadores de campo y los bloques de instancia de la subclase, y por último el cuerpo de su constructor, de modo que el despacho dinámico ya funciona pero el estado todavía no existe. El síntoma clásico es un NullPointerException o un cálculo con ceros en un campo declarado final, que también aparece vacío porque se asigna después de super. La recomendación es diseñar y documentar la clase para herencia o prohibirla declarándola final, y si hace falta inicialización posterior usar un método de arranque explícito o un builder.',
      en: 'The real order is the implicit or explicit call to super, then the subclass field initialisers and instance blocks, and finally its constructor body, so dynamic dispatch already works but the state does not exist yet. The classic symptom is a NullPointerException or a computation with zeros on a field declared final, which also appears empty because it is assigned after super. The recommendation is to design and document the class for inheritance or forbid it by declaring it final, and if later initialisation is needed use an explicit start method or a builder.',
    },
  },
  {
    id: 'th-oop2-12',
    topic: 'Fundamentos POO',
    prompt: {
      es: '¿Qué significa final aplicado a una clase, a un método y a un campo?',
      en: 'What does final mean when applied to a class, to a method and to a field?',
    },
    answer: {
      es: 'En la clase impide heredar, en el método impide sobrescribir y en el campo impide reasignar la referencia, no mutar el objeto apuntado.',
      en: 'On a class it prevents inheritance, on a method it prevents overriding, and on a field it prevents reassigning the reference, not mutating the target.',
    },
    distractors: [
      {
        es: 'En el campo convierte el objeto en inmutable, y por eso una List declarada final ya no admite añadir elementos.',
        en: 'On a field it makes the object immutable, and that is why a List declared final no longer accepts new elements.',
      },
      {
        es: 'En el método impide también sobrecargarlo, y en un parámetro impide que el método modifique el argumento del llamador.',
        en: 'On a method it also prevents overloading it, and on a parameter it prevents the method from modifying the caller argument.',
      },
    ],
    explanation: {
      es: 'Un campo final admite una única asignación, hecha en la declaración, en un bloque de instancia o en el constructor, pero no dice nada sobre el objeto referenciado: una List final sigue aceptando add, y para impedirlo hay que usar List.copyOf o una vista no modificable. Un parámetro final solo evita reasignar la variable local dentro del método, ya que Java siempre pasa por valor. Como dato adicional, los campos final tienen una garantía de publicación segura en el modelo de memoria: quedan congelados al terminar el constructor, y por eso los objetos inmutables se comparten entre hilos sin sincronización.',
      en: 'A final field allows a single assignment, made in the declaration, in an instance block or in the constructor, but it says nothing about the referenced object: a final List still accepts add, and to prevent that you need List.copyOf or an unmodifiable view. A final parameter only prevents reassigning the local variable inside the method, since Java always passes by value. As an extra fact, final fields carry a safe publication guarantee in the memory model: they are frozen when the constructor finishes, which is why immutable objects can be shared between threads without synchronisation.',
    },
  },
  {
    id: 'th-oop2-13',
    topic: 'Fundamentos POO',
    prompt: {
      es: '¿Qué separa a un objeto de valor de una entidad?',
      en: 'What separates a value object from an entity?',
    },
    answer: {
      es: 'La entidad tiene identidad propia que persiste aunque cambien sus atributos; el objeto de valor se compara por todos sus atributos.',
      en: 'An entity has its own identity that persists even when its attributes change; a value object is compared by all of its attributes.',
    },
    distractors: [
      {
        es: 'El objeto de valor es el que no se guarda en base de datos, mientras que la entidad es todo aquello que tiene su propia tabla.',
        en: 'A value object is the one not stored in the database, while an entity is anything that has its own table.',
      },
      {
        es: 'La entidad es mutable y el objeto de valor inmutable, y esa es la única diferencia porque ambos se comparan por sus atributos.',
        en: 'An entity is mutable and a value object immutable, and that is the only difference because both are compared by their attributes.',
      },
    ],
    explanation: {
      es: 'Un Cliente sigue siendo el mismo aunque cambie de nombre y de dirección, porque su igualdad se define por el identificador; en cambio dos importes de diez euros son intercambiables y su equals cubre todos los campos. La persistencia no es el criterio: en JPA un objeto de valor se guarda con @Embeddable dentro de la tabla de la entidad, así que sí llega a la base de datos. La inmutabilidad es una consecuencia habitual del objeto de valor, no su definición, y los records de Java encajan de forma natural para implementarlos.',
      en: 'A Customer remains the same even after changing name and address, because its equality is defined by the identifier; two amounts of ten euros, by contrast, are interchangeable and their equals covers every field. Persistence is not the criterion: in JPA a value object is stored with @Embeddable inside the entity table, so it does reach the database. Immutability is a usual consequence of being a value object, not its definition, and Java records fit naturally for implementing them.',
    },
  },
  {
    id: 'th-oop2-14',
    topic: 'Fundamentos POO',
    prompt: {
      es: '¿Qué papel cumple cada uno de DTO, entidad y objeto de valor en las capas de una aplicación?',
      en: 'What role does each of DTO, entity and value object play across the layers of an application?',
    },
    answer: {
      es: 'El DTO transporta datos y su forma la dicta el contrato de la API; la entidad modela un concepto con identidad y el objeto de valor uno descriptivo.',
      en: 'The DTO carries data and its shape is dictated by the API contract; the entity models a concept with identity and the value object a descriptive one.',
    },
    distractors: [
      {
        es: 'El DTO es la entidad sin anotaciones de persistencia, de modo que basta mapearlos uno a uno para desacoplar las capas.',
        en: 'The DTO is the entity without persistence annotations, so mapping them one to one is enough to decouple the layers.',
      },
      {
        es: 'El DTO y el objeto de valor son lo mismo, porque ambos son inmutables y se comparan por atributos; solo cambia la capa.',
        en: 'The DTO and the value object are the same thing, since both are immutable and compared by attributes; only the layer differs.',
      },
    ],
    explanation: {
      es: 'El DTO existe para cruzar una frontera, normalmente de proceso, y por eso su estabilidad la impone quien consume la API, mientras que la entidad y el objeto de valor evolucionan con el modelo de dominio y sí contienen comportamiento. Copiar la entidad campo a campo no desacopla nada: cualquier renombrado del modelo rompe el contrato publicado y además exponer la entidad provoca los problemas clásicos de serialización, como LazyInitializationException o la recursión infinita en relaciones bidireccionales. El objeto de valor no es un DTO porque encapsula reglas, por ejemplo un Email que valida su formato al construirse.',
      en: 'A DTO exists to cross a boundary, usually a process boundary, so its stability is imposed by whoever consumes the API, whereas the entity and the value object evolve with the domain model and do carry behaviour. Copying the entity field by field decouples nothing: any model rename breaks the published contract, and exposing the entity also triggers the classic serialization problems such as LazyInitializationException or infinite recursion on bidirectional relations. A value object is not a DTO because it encapsulates rules, for instance an Email that validates its format on construction.',
    },
  },
  {
    id: 'th-oop2-15',
    topic: 'Fundamentos POO',
    prompt: {
      es: 'Dentro de una interfaz, ¿en qué se diferencian un método default y un método estático?',
      en: 'Inside an interface, how does a default method differ from a static one?',
    },
    answer: {
      es: 'El default se hereda y el implementador puede sobrescribirlo; el estático no se hereda y solo se invoca por el nombre de la interfaz.',
      en: 'The default is inherited and the implementer may override it; the static is not inherited and is invoked only through the interface name.',
    },
    distractors: [
      {
        es: 'Los dos se heredan y la única diferencia es que el estático no accede a this, razón por la cual no puede sobrescribirse.',
        en: 'Both are inherited and the only difference is that the static one cannot access this, which is why it cannot be overridden.',
      },
      {
        es: 'El estático también se hereda, pero queda oculto si la clase declara la misma firma, igual que ocurre con los estáticos de una clase base.',
        en: 'The static one is inherited too, but it gets hidden if the class declares the same signature, just as with statics from a base class.',
      },
    ],
    explanation: {
      es: 'Los métodos estáticos de interfaz no se heredan en absoluto, por eso hay que escribir Comparator.comparing y no basta con implementar Comparator para llamarlo sin calificar; la ocultación de estáticos es un comportamiento exclusivo de las clases. Los default nacieron para poder ampliar interfaces existentes sin romper a los implementadores, y ejemplos reales son Collection.stream, Collection.removeIf o Iterable.forEach. Desde Java 9 se pueden añadir métodos privados en la interfaz para compartir lógica entre varios default sin exponerla en el contrato.',
      en: 'Interface static methods are not inherited at all, which is why you must write Comparator.comparing and implementing Comparator is not enough to call it unqualified; static hiding is a class only behaviour. Defaults were introduced to extend existing interfaces without breaking implementers, and real examples are Collection.stream, Collection.removeIf and Iterable.forEach. Since Java 9 you can add private interface methods to share logic between several defaults without exposing it in the contract.',
    },
  },
  {
    id: 'th-oop2-16',
    topic: 'Fundamentos POO',
    prompt: {
      es: '¿Qué distingue una agregación de una composición?',
      en: 'What distinguishes aggregation from composition?',
    },
    answer: {
      es: 'En la composición la parte no existe fuera del todo y desaparece con él; en la agregación la parte tiene vida propia y puede compartirse.',
      en: 'In composition the part does not exist outside the whole and disappears with it; in aggregation the part has its own life and can be shared.',
    },
    distractors: [
      {
        es: 'En la composición el todo guarda una referencia y en la agregación una copia, por eso solo la composición permite compartir la parte.',
        en: 'In composition the whole keeps a reference and in aggregation a copy, which is why only composition allows the part to be shared.',
      },
      {
        es: 'En la composición la relación es bidireccional y en la agregación unidireccional, y eso distingue el rombo relleno del vacío en UML.',
        en: 'In composition the relation is bidirectional and in aggregation unidirectional, and that is what tells the filled diamond from the hollow one in UML.',
      },
    ],
    explanation: {
      es: 'El criterio es la propiedad del ciclo de vida: una LineaDeFactura no tiene sentido sin su Factura, mientras que un Cliente existe antes y después de cualquier Pedido que lo referencie. En UML la composición se dibuja con rombo relleno y la agregación con rombo vacío, sin que la direccionalidad tenga nada que ver. La traducción técnica es directa: en JPA la composición se modela con cascade = CascadeType.ALL y orphanRemoval = true, y en memoria suele exigir copias defensivas para que nadie externo retenga una referencia a la parte.',
      en: 'The criterion is lifecycle ownership: an InvoiceLine makes no sense without its Invoice, whereas a Customer exists before and after any Order that references it. In UML composition is drawn with a filled diamond and aggregation with a hollow one, and directionality has nothing to do with it. The technical translation is direct: in JPA composition is modelled with cascade = CascadeType.ALL and orphanRemoval = true, and in memory it usually requires defensive copies so that nobody outside keeps a reference to the part.',
    },
  },
  {
    id: 'th-oop2-17',
    topic: 'Fundamentos POO',
    prompt: {
      es: '¿En qué se diferencian el polimorfismo paramétrico y el polimorfismo de subtipo?',
      en: 'How do parametric polymorphism and subtype polymorphism differ?',
    },
    answer: {
      es: 'El paramétrico escribe un algoritmo válido para cualquier tipo mediante genéricos; el de subtipo elige la implementación según el tipo real.',
      en: 'Parametric polymorphism writes one algorithm valid for any type through generics; subtype polymorphism picks the implementation by actual type.',
    },
    distractors: [
      {
        es: 'El paramétrico se resuelve en ejecución porque los genéricos están reificados, y el de subtipo en compilación por la jerarquía declarada.',
        en: 'Parametric polymorphism resolves at runtime because generics are reified, and subtype polymorphism at compile time by the declared hierarchy.',
      },
      {
        es: 'El paramétrico es la sobrecarga de un método con distintos tipos de parámetro y el de subtipo es la sobrescritura de ese método.',
        en: 'Parametric polymorphism is overloading a method with different parameter types and subtype polymorphism is overriding that method.',
      },
    ],
    explanation: {
      es: 'Son dos de las tres formas clásicas: la ad hoc es la sobrecarga, la paramétrica son los genéricos y la de subtipo es la sobrescritura con despacho dinámico mediante invokevirtual. En Java los genéricos se borran en compilación, así que no hay reificación y List<String> y List<Integer> comparten el mismo objeto Class en ejecución, justo lo contrario de lo que afirma la primera opción incorrecta. La varianza en el polimorfismo paramétrico se controla con comodines siguiendo la regla PECS: extends para producir y super para consumir.',
      en: 'These are two of the three classic forms: ad hoc polymorphism is overloading, parametric polymorphism is generics, and subtype polymorphism is overriding with dynamic dispatch through invokevirtual. In Java generics are erased at compile time, so there is no reification and List<String> and List<Integer> share the same Class object at runtime, exactly the opposite of what the first wrong option claims. Variance in parametric polymorphism is controlled with wildcards following the PECS rule: extends to produce and super to consume.',
    },
  },
  {
    id: 'th-oop2-18',
    topic: 'Fundamentos POO',
    prompt: {
      es: 'Un getter devuelve directamente la List interna de la clase. ¿Cuál es el problema real?',
      en: 'A getter returns the internal List of the class directly. What is the real problem?',
    },
    answer: {
      es: 'El cliente puede modificar el estado saltándose todas las validaciones, así que hay que devolver una copia o una vista no modificable.',
      en: 'The client can modify the state bypassing every validation, so you must return a copy or an unmodifiable view.',
    },
    distractors: [
      {
        es: 'No hay riesgo si el campo es final, porque entonces la referencia no se puede reasignar desde fuera de la clase.',
        en: 'There is no risk if the field is final, because then the reference cannot be reassigned from outside the class.',
      },
      {
        es: 'No hay riesgo si el getter declara Collection en lugar de List, ya que así se oculta la implementación concreta al cliente.',
        en: 'There is no risk if the getter declares Collection instead of List, since that hides the concrete implementation from the client.',
      },
    ],
    explanation: {
      es: 'Devolver la referencia interna deja al descubierto el estado: cualquiera puede llamar a add o a clear y dejar el objeto en un estado que sus propios métodos jamás habrían permitido, por ejemplo una factura con líneas que no suman el total. Ni final ni cambiar el tipo declarado cambian nada, porque el problema es la mutabilidad del objeto devuelto y no la reasignación ni el tipo estático. La defensa habitual es List.copyOf, que crea una copia inmutable, o Collections.unmodifiableList, que es una vista y por tanto refleja los cambios internos y lanza UnsupportedOperationException al intentar escribir; conviene aplicar la misma copia defensiva también a las colecciones que entran por el constructor.',
      en: 'Returning the internal reference exposes the state: anyone can call add or clear and leave the object in a condition its own methods would never have allowed, for example an invoice whose lines do not add up to the total. Neither final nor changing the declared type helps, because the problem is the mutability of the returned object, not reassignment or the static type. The usual defence is List.copyOf, which creates an immutable copy, or Collections.unmodifiableList, which is a view and therefore reflects internal changes and throws UnsupportedOperationException on writes; the same defensive copy should be applied to collections coming in through the constructor.',
    },
  },
  {
    id: 'th-oop2-19',
    topic: 'Fundamentos POO',
    prompt: {
      es: '¿Qué consecuencia de memoria tiene usar una clase interna no estática en lugar de una clase anidada estática?',
      en: 'What memory consequence does using a non static inner class instead of a static nested class have?',
    },
    answer: {
      es: 'La no estática guarda una referencia implícita a la instancia externa, que no podrá recolectarse mientras alguien retenga la interna.',
      en: 'The non static one keeps an implicit reference to the outer instance, which cannot be collected while anyone retains the inner one.',
    },
    distractors: [
      {
        es: 'La no estática se carga una sola vez por clase y su instancia vive en el área de metadatos, así que nunca llega a recolectarse.',
        en: 'The non static one is loaded once per class and its instance lives in the metadata area, so it is never collected at all.',
      },
      {
        es: 'La diferencia es solo sintáctica: ambas compilan a la misma estructura y static únicamente evita calificar el constructor externo.',
        en: 'The difference is purely syntactic: both compile to the same structure and static only saves qualifying the outer constructor.',
      },
    ],
    explanation: {
      es: 'El compilador añade un campo sintético llamado this$0 a la clase interna no estática para poder acceder a los miembros del exterior, y esa referencia mantiene vivo al objeto contenedor durante todo el tiempo de vida del interno. La fuga clásica aparece cuando esa instancia interna, o una clase anónima que es igualmente no estática, se registra como listener de larga duración o se coloca en una caché. También rompe la serialización, porque intentar serializar el interno arrastra al externo y provoca NotSerializableException; la regla es declarar static toda clase anidada que no necesite la instancia envolvente.',
      en: 'The compiler adds a synthetic field called this$0 to the non static inner class so it can reach outer members, and that reference keeps the enclosing object alive for as long as the inner one lives. The classic leak shows up when that inner instance, or an anonymous class which is equally non static, is registered as a long lived listener or placed in a cache. It also breaks serialization, because serializing the inner one drags the outer along and triggers NotSerializableException; the rule is to declare static every nested class that does not need the enclosing instance.',
    },
  },
  {
    id: 'th-oop2-20',
    topic: 'Fundamentos POO',
    prompt: {
      es: 'Entre una clase anónima y una lambda, ¿qué cambia respecto a this y a la captura de variables?',
      en: 'Between an anonymous class and a lambda, what changes regarding this and variable capture?',
    },
    answer: {
      es: 'En la clase anónima this es la propia instancia anónima; en la lambda es la instancia envolvente, porque la lambda no crea un ámbito nuevo.',
      en: 'In an anonymous class this is the anonymous instance itself; in a lambda it is the enclosing instance, because a lambda creates no new scope.',
    },
    distractors: [
      {
        es: 'En ambas this apunta a la instancia envolvente, y la diferencia real es que la lambda sí puede capturar variables no finales.',
        en: 'In both this points to the enclosing instance, and the real difference is that a lambda can capture non final variables.',
      },
      {
        es: 'En la clase anónima this es la instancia envolvente y en la lambda es el objeto funcional que genera el compilador.',
        en: 'In an anonymous class this is the enclosing instance and in a lambda it is the functional object generated by the compiler.',
      },
    ],
    explanation: {
      es: 'La lambda es léxicamente transparente: this, super y los nombres de variables significan lo mismo dentro que fuera, así que declarar dentro una variable con el nombre de una del método envolvente es un error de compilación, mientras que la clase anónima sí puede ensombrecerla. La captura es idéntica en ambos casos, ya que las dos exigen variables locales finales o efectivamente finales, de modo que esa no es la diferencia. Además la lambda no genera un archivo .class aparte, sino que se enlaza con invokedynamic a través de LambdaMetafactory, y las lambdas sin captura pueden reutilizar una única instancia.',
      en: 'A lambda is lexically transparent: this, super and variable names mean the same inside as outside, so declaring a variable inside with the name of one from the enclosing method is a compile error, while an anonymous class may shadow it. Capture is identical in both cases, since both require local variables to be final or effectively final, so that is not the difference. In addition a lambda does not produce a separate .class file, it is linked with invokedynamic through LambdaMetafactory, and non capturing lambdas may reuse a single instance.',
    },
  },
];
