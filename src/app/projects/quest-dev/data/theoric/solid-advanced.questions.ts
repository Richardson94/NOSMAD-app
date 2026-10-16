import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_SOLID_ADVANCED_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-solid2-01',
    topic: 'SOLID',
    prompt: {
      es: '¿Qué problema hay si una clase Factura calcula impuestos y también arma el HTML del correo?',
      en: 'An Invoice class computes taxes and also builds the email HTML. What is the problem?',
    },
    answer: {
      es: 'Hay dos razones de cambio: la regla fiscal y el formato del correo. El formato debería vivir en otro colaborador.',
      en: 'There are two reasons to change: the tax rule and the email layout. The layout should live in another collaborator.',
    },
    distractors: [
      {
        es: 'Basta con extraer métodos privados más cortos dentro de la misma clase.',
        en: 'It is enough to extract shorter private methods inside the same class.',
      },
      {
        es: 'No hay problema si el método de formato no modifica la factura.',
        en: 'There is no problem if the formatting method does not modify the invoice.',
      },
    ],
    explanation: {
      es: 'Métodos privados en el mismo archivo siguen cambiando por los dos motivos. Separar el render deja cada cambio en su sitio.',
      en: 'Private methods in the same file still change for both reasons. Splitting the renderer puts each change in its own place.',
    },
  },
  {
    id: 'th-solid2-02',
    topic: 'SOLID',
    prompt: {
      es: '¿Una clase con muchos métodos privados está rompiendo el SRP?',
      en: 'Does a class with many private methods break the SRP?',
    },
    answer: {
      es: 'No, si todos sirven a la misma razón de cambio. El número de métodos no es el criterio.',
      en: 'No, if they all serve the same reason to change. The number of methods is not the criterion.',
    },
    distractors: [
      {
        es: 'Sí, en cuanto supera un umbral de líneas o de complejidad.',
        en: 'Yes, as soon as it passes a line or complexity threshold.',
      },
      {
        es: 'No, siempre que esos métodos no se prueben de forma directa.',
        en: 'No, as long as those methods are not tested directly.',
      },
    ],
    explanation: {
      es: 'Si los métodos privados se parten en dos grupos que no comparten datos, ahí sí hay dos clases escondidas.',
      en: 'If the private methods split into two groups that share no data, then there really are two hidden classes.',
    },
  },
  {
    id: 'th-solid2-03',
    topic: 'SOLID',
    prompt: {
      es: '¿Cómo añadirías una exportación XLSX a un servicio que ya exporta CSV y PDF, sin tocar el orquestador?',
      en: 'A service exports CSV and PDF, and now XLSX is requested. How would you add it without touching the orchestrator?',
    },
    answer: {
      es: 'Con una interfaz de exportador y una lista de implementaciones. El formato nuevo es una clase más.',
      en: 'With an exporter interface and a list of implementations. The new format is one more class.',
    },
    distractors: [
      {
        es: 'Ampliando el switch del servicio y añadiendo una prueba.',
        en: 'By extending the service switch and adding a test.',
      },
      {
        es: 'Creando una subclase del servicio que sobrescriba exportar.',
        en: 'By creating a subclass of the service that overrides export.',
      },
    ],
    explanation: {
      es: 'El switch obliga a reabrir una clase estable en cada formato. Una lista de beans o de estrategias deja el orquestador cerrado.',
      en: 'The switch forces you to reopen a stable class for every format. A list of beans or strategies keeps the orchestrator closed.',
    },
  },
  {
    id: 'th-solid2-04',
    topic: 'SOLID',
    prompt: {
      es: '¿Qué riesgo hay en abstraer un diseño antes de ver qué va a cambiar de verdad?',
      en: 'What is the risk of abstracting a design before you see what will really change?',
    },
    answer: {
      es: 'Crear abstracciones que nadie usa y que casi siempre apuntan al eje equivocado. El código queda más difícil de leer.',
      en: 'You create abstractions nobody uses, and they usually point at the wrong axis. The code becomes harder to read.',
    },
    distractors: [
      {
        es: 'El costo del despacho dinámico en caliente.',
        en: 'The cost of dynamic dispatch on the hot path.',
      },
      {
        es: 'Romper el SRP, porque cada interfaz es una razón de cambio nueva.',
        en: 'Breaking the SRP, because each interface is a new reason to change.',
      },
    ],
    explanation: {
      es: 'Cierra el diseño después del primer cambio real. Una jerarquía con una sola implementación solo añade indirección.',
      en: 'Close the design after the first real change. A hierarchy with a single implementation only adds indirection.',
    },
  },
  {
    id: 'th-solid2-05',
    topic: 'SOLID',
    prompt: {
      es: '¿Por qué falla la sustitución si Cuadrado hereda de Rectángulo y este tiene setAncho y setAlto?',
      en: 'Square inherits from Rectangle, which has setWidth and setHeight. Why does substitution fail?',
    },
    answer: {
      es: 'Porque cambiar el ancho también cambia el alto. El cliente que pone ancho 5 y alto 4 espera área 20 y obtiene otra cosa.',
      en: 'Because changing the width also changes the height. A client that sets width 5 and height 4 expects area 20 and gets something else.',
    },
    distractors: [
      {
        es: 'Porque en matemáticas un cuadrado no es un rectángulo.',
        en: 'Because in mathematics a square is not a rectangle.',
      },
      {
        es: 'Porque Cuadrado no puede implementar equals de forma simétrica.',
        en: 'Because Square cannot implement equals in a symmetric way.',
      },
    ],
    explanation: {
      es: 'El problema es el contrato mutable, no la geometría. Con objetos inmutables que devuelven una copia la jerarquía puede ser válida.',
      en: 'The problem is the mutable contract, not the geometry. With immutable objects that return a copy the hierarchy can be valid.',
    },
  },
  {
    id: 'th-solid2-06',
    topic: 'SOLID',
    prompt: {
      es: '¿Está bien que una lista no modificable implemente List si add lanza una excepción?',
      en: 'An unmodifiable list implements List, but add throws. Is that fine?',
    },
    answer: {
      es: 'No. Quien solo conoce List puede llamar a add y fallar en ejecución. La operación de escritura no es sustituible.',
      en: 'No. Code that only knows List can call add and fail at runtime. The write operation is not substitutable.',
    },
    distractors: [
      {
        es: 'Sí, porque la documentación dice que add es opcional.',
        en: 'Yes, because the documentation says add is optional.',
      },
      {
        es: 'Sí, porque el tipo devuelto sigue siendo List y la firma no cambia.',
        en: 'Yes, because the returned type is still List and the signature does not change.',
      },
    ],
    explanation: {
      es: 'La misma firma es la trampa. La salida habitual es separar lectura y escritura en interfaces distintas.',
      en: 'The identical signature is the trap. The usual way out is to split read and write into different interfaces.',
    },
  },
  {
    id: 'th-solid2-07',
    topic: 'SOLID',
    prompt: {
      es: '¿Qué pasa si un método declara throws IOException y la subclase quiere declarar throws Exception?',
      en: 'A method declares throws IOException and the subclass wants to declare throws Exception. What happens?',
    },
    answer: {
      es: 'No compila. Al sobrescribir solo puedes declarar excepciones comprobadas iguales o más concretas.',
      en: 'It does not compile. When overriding you may only declare checked exceptions that are the same or more specific.',
    },
    distractors: [
      {
        es: 'Compila y la máquina virtual envuelve la excepción al llamar por la referencia base.',
        en: 'It compiles and the virtual machine wraps the exception when called through the base reference.',
      },
      {
        es: 'Compila si la subclase captura la excepción y la relanza igual.',
        en: 'It compiles if the subclass catches the exception and rethrows it unchanged.',
      },
    ],
    explanation: {
      es: 'El cliente solo preparó un catch de IOException. Una excepción más amplia rompería ese código sin aviso.',
      en: 'The client only prepared a catch for IOException. A wider exception would break that code with no warning.',
    },
  },
  {
    id: 'th-solid2-08',
    topic: 'SOLID',
    prompt: {
      es: '¿Qué ganas al partir un repositorio de pedidos si varios servicios solo leen y el resto también guarda y borra?',
      en: 'Several services only read orders, but the repository also has save and delete. What do you gain by splitting the interface?',
    },
    answer: {
      es: 'Cada cliente depende solo de lo que usa, el tipo deja clara la intención y el doble de prueba queda más pequeño.',
      en: 'Each client depends only on what it uses, the type makes the intent clear and the test double stays smaller.',
    },
    distractors: [
      {
        es: 'La base de datos deja de hacer comprobaciones de cambios porque sabe que no habrá escrituras.',
        en: 'The database skips change checks because it knows there will be no writes.',
      },
      {
        es: 'Hace falta una implementación distinta por cada interfaz.',
        en: 'You need a different implementation for each interface.',
      },
    ],
    explanation: {
      es: 'Una sola clase puede implementar las dos interfaces. El beneficio es para quien consume, no para duplicar código.',
      en: 'One class can implement both interfaces. The benefit is for the consumer, not for duplicating code.',
    },
  },
  {
    id: 'th-solid2-09',
    topic: 'SOLID',
    prompt: {
      es: '¿Qué diferencia hay entre una interfaz que copia la clase y una interfaz de rol?',
      en: 'What is the difference between an interface that copies the class and a role interface?',
    },
    answer: {
      es: 'La que copia la clase lista todos sus métodos públicos y cambia con ella. La de rol nace de lo que el cliente necesita y suele ser pequeña.',
      en: 'The one that copies the class lists every public method and changes with it. The role interface comes from what the client needs and stays small.',
    },
    distractors: [
      {
        es: 'La diferencia es el paquete: una vive con el cliente y la otra con la implementación.',
        en: 'The difference is the package: one lives with the client and the other with the implementation.',
      },
      {
        es: 'Una solo declara constantes y la otra declara comportamiento.',
        en: 'One only declares constants and the other declares behaviour.',
      },
    ],
    explanation: {
      es: 'Extraer Servicio de ServicioImpl de forma mecánica no desacopla nada. La interfaz útil se descubre desde el caso de uso.',
      en: 'Mechanically extracting Service from ServiceImpl decouples nothing. A useful interface is discovered from the use case.',
    },
  },
  {
    id: 'th-solid2-10',
    topic: 'SOLID',
    prompt: {
      es: '¿Dónde declaras, en arquitectura hexagonal, el puerto que el dominio usa para notificar un pago?',
      en: 'In hexagonal architecture, where do you declare the port the domain uses to notify a payment?',
    },
    answer: {
      es: 'En el módulo que lo necesita. El adaptador de infraestructura lo implementa y depende hacia dentro.',
      en: 'In the module that needs it. The infrastructure adapter implements it and depends inward.',
    },
    distractors: [
      {
        es: 'Junto a la implementación, para que un cambio de tecnología quede en un solo paquete.',
        en: 'Next to the implementation, so a technology change stays in one package.',
      },
      {
        es: 'Da igual el paquete si se inyecta por constructor.',
        en: 'The package does not matter if it is injected by constructor.',
      },
    ],
    explanation: {
      es: 'Si el dominio importa la interfaz de infraestructura, la dependencia que querías evitar sigue ahí. El contenedor no cambia las dependencias de compilación.',
      en: 'If the domain imports the infrastructure interface, the dependency you wanted to avoid is still there. The container does not change compile time dependencies.',
    },
  },
  {
    id: 'th-solid2-11',
    topic: 'SOLID',
    prompt: {
      es: '¿Cómo rompes el ciclo si dos módulos se referencian entre sí?',
      en: 'Two modules reference each other. How do you break the cycle?',
    },
    answer: {
      es: 'Con una interfaz que declara quien la usa y el otro implementa, o sacando un tercer módulo del que ambos dependan.',
      en: 'With an interface declared by the one that uses it and implemented by the other, or by extracting a third module both depend on.',
    },
    distractors: [
      {
        es: 'Marcando una dependencia como perezosa o pasándola por setter.',
        en: 'By marking one dependency as lazy or passing it through a setter.',
      },
      {
        es: 'Juntando los dos módulos, porque un ciclo prueba que cambian por la misma razón.',
        en: 'By merging both modules, because a cycle proves they change for the same reason.',
      },
    ],
    explanation: {
      es: 'La inyección perezosa evita un ciclo al crear los objetos, no un ciclo de compilación entre módulos.',
      en: 'Lazy injection avoids a cycle when creating objects, not a compile cycle between modules.',
    },
  },
  {
    id: 'th-solid2-12',
    topic: 'SOLID',
    prompt: {
      es: '¿Hacia dónde deberían apuntar las dependencias entre módulos?',
      en: 'Which way should dependencies between modules point?',
    },
    answer: {
      es: 'Hacia módulos más estables, es decir los que cuestan más cambiar porque muchos dependen de ellos.',
      en: 'Toward more stable modules, meaning the ones that are harder to change because many modules depend on them.',
    },
    distractors: [
      {
        es: 'Hacia los que tienen menos commits en la iteración actual.',
        en: 'Toward the ones with fewer commits in the current iteration.',
      },
      {
        es: 'Los módulos estables deberían ser los que más dependen de los demás, porque orquestan.',
        en: 'Stable modules should be the ones that depend on everyone else, because they orchestrate.',
      },
    ],
    explanation: {
      es: 'Un módulo estable que depende de uno volátil es la violación típica. Se corrige invirtiendo esa flecha con una interfaz.',
      en: 'A stable module that depends on a volatile one is the typical violation. You fix it by inverting that arrow with an interface.',
    },
  },
  {
    id: 'th-solid2-13',
    topic: 'SOLID',
    prompt: {
      es: '¿Por qué duele cambiar un paquete concreto que usan casi todos y que casi no depende de nadie?',
      en: 'A concrete package is used by almost everyone and depends on almost nobody. Why does changing it hurt?',
    },
    answer: {
      es: 'Porque es rígido: cualquier cambio afecta a muchos módulos y no hay una abstracción por la que extenderlo.',
      en: 'Because it is rigid: any change affects many modules and there is no abstraction to extend it through.',
    },
    distractors: [
      {
        es: 'Porque es código muerto: es abstracto y nadie lo usa.',
        en: 'Because it is dead code: it is abstract and nobody uses it.',
      },
      {
        es: 'No duele, porque al ser poco inestable y poco abstracto está en equilibrio.',
        en: 'It does not hurt, because being both low instability and low abstraction means it is balanced.',
      },
    ],
    explanation: {
      es: 'Un esquema de base de datos o una librería concreta de utilidades suele caer aquí. Solo es aceptable si de verdad no cambia.',
      en: 'A database schema or a concrete utility library often lands here. It is acceptable only if it truly never changes.',
    },
  },
  {
    id: 'th-solid2-14',
    topic: 'SOLID',
    prompt: {
      es: '¿Qué clases deberían vivir juntas en el mismo componente?',
      en: 'Which classes should live together in the same component?',
    },
    answer: {
      es: 'Las que cambian por los mismos motivos y al mismo tiempo, para que un requisito nuevo toque un solo sitio.',
      en: 'The ones that change for the same reasons and at the same time, so a new requirement touches one place.',
    },
    distractors: [
      {
        es: 'Las que los clientes siempre usan juntas, para no redesplegar de más.',
        en: 'The ones clients always use together, so you do not redeploy more than needed.',
      },
      {
        es: 'Las de la misma capa técnica: controladores con controladores y repositorios con repositorios.',
        en: 'The ones in the same technical layer: controllers with controllers and repositories with repositories.',
      },
    ],
    explanation: {
      es: 'Si un cambio de negocio toca cinco paquetes, el empaquetado está mal. Agrupar por funcionalidad suele funcionar mejor que agrupar por capa.',
      en: 'If one business change touches five packages, the packaging is wrong. Grouping by feature usually works better than grouping by layer.',
    },
  },
  {
    id: 'th-solid2-15',
    topic: 'SOLID',
    prompt: {
      es: '¿Qué problema evitas si un componente no arrastra clases que el cliente no usa?',
      en: 'What problem do you avoid if a component does not drag in classes the client does not use?',
    },
    answer: {
      es: 'Que el cliente tenga que volver a probar y redesplegar por un cambio en una clase que nunca llama.',
      en: 'The client having to retest and redeploy because of a change in a class it never calls.',
    },
    distractors: [
      {
        es: 'Que la misma clase quede copiada en dos componentes.',
        en: 'The same class ending up copied into two components.',
      },
      {
        es: 'Que una clase dependa de métodos de una interfaz que no usa.',
        en: 'A class depending on interface methods it does not use.',
      },
    ],
    explanation: {
      es: 'Es la misma idea que segregar interfaces, pero a nivel de componente: no dependas de lo que no necesitas.',
      en: 'It is the same idea as splitting interfaces, but at component level: do not depend on what you do not need.',
    },
  },
  {
    id: 'th-solid2-16',
    topic: 'SOLID',
    prompt: {
      es: '¿Qué hace falta para poder reutilizar un grupo de clases con seguridad?',
      en: 'What do you need in order to reuse a group of classes safely?',
    },
    answer: {
      es: 'Que se publiquen juntas, con versión y notas de cambio. No se reutiliza bien lo que no se libera.',
      en: 'That they are released together, with a version and change notes. You cannot reuse well what is not released.',
    },
    distractors: [
      {
        es: 'Publicar cada clase en su propio artefacto.',
        en: 'Publishing each class in its own artifact.',
      },
      {
        es: 'Subir la versión mayor en cada publicación.',
        en: 'Bumping the major version on every release.',
      },
    ],
    explanation: {
      es: 'Sin versión el consumidor acaba copiando fuentes. La versión mayor se reserva para cambios que rompen compatibilidad.',
      en: 'Without a version the consumer ends up copying source. The major version is reserved for changes that break compatibility.',
    },
  },
  {
    id: 'th-solid2-17',
    topic: 'SOLID',
    prompt: {
      es: '¿Qué propone la idea de dime, no preguntes?',
      en: 'What does tell, do not ask propose?',
    },
    answer: {
      es: 'Pedirle al objeto que haga la operación con sus propios datos, en lugar de leer su estado y decidir fuera.',
      en: 'Ask the object to perform the operation with its own data, instead of reading its state and deciding outside.',
    },
    distractors: [
      {
        es: 'Eliminar todos los getters, porque cualquier lectura revela la representación interna.',
        en: 'Remove every getter, because any read reveals the internal representation.',
      },
      {
        es: 'No encadenar más de una llamada sobre un getter.',
        en: 'Never chain more than one call on a getter.',
      },
    ],
    explanation: {
      es: 'cuenta.retirar(monto) deja la regla dentro del objeto. Un if externo sobre el saldo produce un modelo anémico.',
      en: 'account.withdraw(amount) keeps the rule inside the object. An external if on the balance produces an anemic model.',
    },
  },
  {
    id: 'th-solid2-18',
    topic: 'SOLID',
    prompt: {
      es: '¿Qué mezcla Queue.poll si quita el primer elemento y además lo devuelve?',
      en: 'Queue.poll removes the first element and also returns it. What does that mix?',
    },
    answer: {
      es: 'Un comando que cambia estado y una consulta que devuelve un valor. Se acepta porque separarlos no sería atómico.',
      en: 'A command that changes state and a query that returns a value. It is accepted because splitting them would not be atomic.',
    },
    distractors: [
      {
        es: 'Nada, porque eso es CQRS: un modelo de escritura y otro de lectura.',
        en: 'Nothing, because that is CQRS: a write model and a read model.',
      },
      {
        es: 'Nada, porque devolver null en vez de lanzar ya cumple la regla.',
        en: 'Nothing, because returning null instead of throwing already satisfies the rule.',
      },
    ],
    explanation: {
      es: 'La separación comando consulta habla de métodos. CQRS es la misma idea a nivel de sistema, con modelos distintos.',
      en: 'Command query separation is about methods. CQRS is the same idea at system level, with different models.',
    },
  },
  {
    id: 'th-solid2-19',
    topic: 'SOLID',
    prompt: {
      es: '¿Qué es una invariante de una clase, en palabras llanas?',
      en: 'What is a class invariant, in plain words?',
    },
    answer: {
      es: 'Una regla que el objeto siempre cumple fuera de sus métodos, por ejemplo que el saldo no sea negativo.',
      en: 'A rule the object always holds outside its methods, for example that the balance is never negative.',
    },
    distractors: [
      {
        es: 'Una comprobación que solo corre en el constructor, así que un objeto inmutable no la necesita.',
        en: 'A check that runs only in the constructor, so an immutable object does not need one.',
      },
      {
        es: 'Una condición que el llamador debe cumplir antes de invocar el método.',
        en: 'A condition the caller must satisfy before invoking the method.',
      },
    ],
    explanation: {
      es: 'Lo que el llamador debe cumplir antes de llamar es la precondición. La invariante la mantiene la propia clase en cada operación pública.',
      en: 'What the caller must satisfy before the call is the precondition. The class itself keeps the invariant on every public operation.',
    },
  },
  {
    id: 'th-solid2-20',
    topic: 'SOLID',
    prompt: {
      es: '¿Unificas dos módulos que tienen el mismo bloque de código, pero por reglas de negocio distintas?',
      en: 'Two modules share the same block of code, but for different business rules. Do you unify it?',
    },
    answer: {
      es: 'No. Unificar ataría dos razones de cambio. La duplicación aquí es accidental y conviene dejarla.',
      en: 'No. Unifying would tie two reasons to change together. The duplication here is accidental and should stay.',
    },
    distractors: [
      {
        es: 'Sí, en una utilidad con banderas booleanas para las diferencias.',
        en: 'Yes, into a utility with boolean flags for the differences.',
      },
      {
        es: 'Sí, subiéndolo a una clase base y sobrescribiendo lo que cambie.',
        en: 'Yes, by pushing it into a base class and overriding whatever differs.',
      },
    ],
    explanation: {
      es: 'DRY habla de un solo conocimiento, no de dos textos iguales. Una abstracción equivocada sale más cara que la copia.',
      en: 'DRY is about one piece of knowledge, not two identical texts. A wrong abstraction costs more than the copy.',
    },
  },
];
