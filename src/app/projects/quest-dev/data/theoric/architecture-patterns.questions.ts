import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_ARCHITECTURE_PATTERNS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-arch2-01',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué diferencia hay, en una arquitectura en capas, entre capas estrictas y relajadas?',
      en: 'In a layered architecture, what is the difference between strict and relaxed layers?',
    },
    answer: {
      es: 'En las estrictas cada capa solo llama a la de debajo. En las relajadas se puede saltar hacia abajo.',
      en: 'With strict layers each layer only calls the one below. With relaxed layers you may skip downward.',
    },
    distractors: [
      {
        es: 'En las estrictas todo apunta al dominio y en las relajadas el dominio puede llamar a infraestructura.',
        en: 'With strict layers everything points at the domain and with relaxed layers the domain may call infrastructure.',
      },
      {
        es: 'En las estrictas cada capa se despliega aparte.',
        en: 'With strict layers each layer is deployed separately.',
      },
    ],
    explanation: {
      es: 'Nadie llama hacia arriba. Las capas estrictas aíslan mejor, pero a veces dejan capas que solo reenvían la llamada.',
      en: 'Nobody calls upward. Strict layers isolate better, but they sometimes leave layers that only forward the call.',
    },
  },
  {
    id: 'th-arch2-02',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué dice la regla de dependencia de la arquitectura limpia?',
      en: 'What does the dependency rule of clean architecture say?',
    },
    answer: {
      es: 'El código solo depende hacia dentro. El flujo puede salir a la base de datos, pero a través de una interfaz que vive dentro.',
      en: 'Source code only depends inward. Control may go out to the database, but through an interface that lives inside.',
    },
    distractors: [
      {
        es: 'El flujo de control tampoco sale nunca del dominio.',
        en: 'Control flow never leaves the domain either.',
      },
      {
        es: 'Cada círculo depende de la interfaz del círculo de fuera, y con eso basta.',
        en: 'Each circle depends on the interface of the outer circle, and that is enough.',
      },
    ],
    explanation: {
      es: 'Depender de una interfaz que pertenece a infraestructura no invierte nada. La interfaz la declara quien la usa.',
      en: 'Depending on an interface that belongs to infrastructure inverts nothing. The interface is declared by the code that uses it.',
    },
  },
  {
    id: 'th-arch2-03',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué tienen en común la cebolla, la hexagonal y la arquitectura limpia?',
      en: 'What do onion, hexagonal and clean architecture have in common?',
    },
    answer: {
      es: 'Dejan el dominio en el centro, independiente de la tecnología, y empujan infraestructura al borde.',
      en: 'They keep the domain at the centre, independent of technology, and push infrastructure to the edge.',
    },
    distractors: [
      {
        es: 'Obligan a separar el modelo de lectura del de escritura.',
        en: 'They require separating the read model from the write model.',
      },
      {
        es: 'Definen el mismo número de capas con otros nombres.',
        en: 'They define the same number of layers under other names.',
      },
    ],
    explanation: {
      es: 'En la práctica muchos equipos las tratan parecido. Separar lecturas y escrituras es CQRS, y se puede usar o no encima.',
      en: 'In practice many teams treat them as similar. Separating reads and writes is CQRS, and you may or may not add it on top.',
    },
  },
  {
    id: 'th-arch2-04',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Para qué sirve el lenguaje ubicuo?',
      en: 'What is the ubiquitous language for?',
    },
    answer: {
      es: 'Para que negocio y desarrollo usen las mismas palabras dentro de un contexto, y esas palabras aparezcan en el código.',
      en: 'So business and development use the same words inside a context, and those words show up in the code.',
    },
    distractors: [
      {
        es: 'Para tener un glosario fijo al inicio, igual para todos los equipos.',
        en: 'To have a fixed glossary at the start, the same for every team.',
      },
      {
        es: 'Para que todos los servicios nombren la API de la misma forma.',
        en: 'So every service names the API the same way.',
      },
    ],
    explanation: {
      es: 'Si el negocio dice que un pedido se confirma, el código debería decir confirmar, no un setStatus genérico. El término vale dentro de un contexto, no en toda la empresa.',
      en: 'If the business says an order is confirmed, the code should say confirm, not a generic setStatus. The term holds inside one context, not across the whole company.',
    },
  },
  {
    id: 'th-arch2-05',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué relación hay entre un contexto delimitado y un microservicio?',
      en: 'What is the relationship between a bounded context and a microservice?',
    },
    answer: {
      es: 'El contexto es una frontera de significado. El microservicio es una forma de desplegarlo, no es lo mismo.',
      en: 'The context is a boundary of meaning. A microservice is one way to deploy it, not the same thing.',
    },
    distractors: [
      {
        es: 'Son equivalentes: cada modelo necesita su base y su despliegue.',
        en: 'They are equivalent: each model needs its own database and its own deployment.',
      },
      {
        es: 'Un contexto es un módulo y cada módulo es un agregado.',
        en: 'A context is a module and each module is an aggregate.',
      },
    ],
    explanation: {
      es: 'Un monolito modular puede alojar varios contextos. Partir un mismo modelo en servicios los acopla.',
      en: 'A modular monolith can host several contexts. Splitting one model across services couples them.',
    },
  },
  {
    id: 'th-arch2-06',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué reglas sigue un agregado raíz?',
      en: 'What rules does an aggregate root follow?',
    },
    answer: {
      es: 'Es el límite de una transacción. A otros agregados se les referencia por identificador, no por el objeto entero.',
      en: 'It is the boundary of one transaction. Other aggregates are referenced by identifier, not by the whole object.',
    },
    distractors: [
      {
        es: 'Debe cargar todas las entidades relacionadas para garantizar las reglas.',
        en: 'It must load every related entity to guarantee the rules.',
      },
      {
        es: 'Es la tabla cuya clave primaria usan las demás como foránea.',
        en: 'It is the table whose primary key the others use as a foreign key.',
      },
    ],
    explanation: {
      es: 'Cargar todo el grafo agranda la transacción y multiplica los choques. El límite lo marca la consistencia, no el esquema.',
      en: 'Loading the whole graph widens the transaction and multiplies clashes. The boundary is set by consistency, not by the schema.',
    },
  },
  {
    id: 'th-arch2-07',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué diferencia a un evento de dominio de uno de integración?',
      en: 'What is the difference between a domain event and an integration event?',
    },
    answer: {
      es: 'El de dominio es interno y puede usar el modelo del contexto. El de integración es un contrato público y versionado hacia fuera.',
      en: 'The domain event is internal and may use the context model. The integration event is a public versioned contract toward the outside.',
    },
    distractors: [
      {
        es: 'El de dominio es síncrono y el de integración siempre es asíncrono.',
        en: 'The domain event is synchronous and the integration event is always asynchronous.',
      },
      {
        es: 'El de integración es una orden que otro servicio debe ejecutar.',
        en: 'The integration event is an order another service must execute.',
      },
    ],
    explanation: {
      es: 'Una orden que impone qué hacer es un comando. El evento de integración se traduce en el borde para no filtrar el modelo interno.',
      en: 'An order that dictates what to do is a command. The integration event is translated at the edge so the internal model does not leak.',
    },
  },
  {
    id: 'th-arch2-08',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué es un modelo de dominio anémico?',
      en: 'What is an anemic domain model?',
    },
    answer: {
      es: 'Entidades que solo tienen datos, con la lógica en servicios. En un CRUD simple puede valer. Con reglas ricas el costo sube.',
      en: 'Entities that only hold data, with the logic in services. For a simple CRUD it can be fine. With rich rules the cost goes up.',
    },
    distractors: [
      {
        es: 'Un modelo con pocas entidades, señal de un análisis incompleto.',
        en: 'A model with few entities, a sign of incomplete analysis.',
      },
      {
        es: 'Siempre es un error, porque cualquier getter rompe el dominio.',
        en: 'It is always a mistake, because any getter breaks the domain.',
      },
    ],
    explanation: {
      es: 'El problema aparece cuando la misma regla se copia en varios servicios y se desincroniza. Un DTO en el borde sí puede ser solo datos.',
      en: 'The problem shows up when the same rule is copied into several services and they drift apart. A DTO at the edge can be data only.',
    },
  },
  {
    id: 'th-arch2-09',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué diferencia a un servicio de dominio de uno de aplicación?',
      en: 'What is the difference between a domain service and an application service?',
    },
    answer: {
      es: 'El de dominio tiene una regla que no cabe en una entidad. El de aplicación orquesta el caso de uso, la transacción y las dependencias de fuera.',
      en: 'The domain service holds a rule that fits in no entity. The application service orchestrates the use case, the transaction and the outside dependencies.',
    },
    distractors: [
      {
        es: 'El de dominio es una clase de métodos estáticos y el de aplicación guarda la sesión.',
        en: 'The domain service is a class of static methods and the application service stores the session.',
      },
      {
        es: 'El de dominio expone la API y es el único que toca repositorios.',
        en: 'The domain service exposes the API and is the only one that touches repositories.',
      },
    ],
    explanation: {
      es: 'Una transferencia entre dos cuentas puede ser un servicio de dominio. Quien carga, confirma y publica es el servicio de aplicación.',
      en: 'A transfer between two accounts can be a domain service. The one that loads, commits and publishes is the application service.',
    },
  },
  {
    id: 'th-arch2-10',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Para qué sirve una capa anticorrupción?',
      en: 'What is an anticorruption layer for?',
    },
    answer: {
      es: 'Para traducir el modelo de un sistema externo al tuyo, y que sus conceptos no entren en el dominio.',
      en: 'To translate an external system model into yours, so its concepts do not enter the domain.',
    },
    distractors: [
      {
        es: 'Para validar y rechazar datos malos antes de guardarlos.',
        en: 'To validate and reject bad data before saving it.',
      },
      {
        es: 'Para poder cambiar el cliente HTTP sin tocar el dominio.',
        en: 'To be able to change the HTTP client without touching the domain.',
      },
    ],
    explanation: {
      es: 'Validar datos y aislar la tecnología son otras capas. Esta existe cuando no quieres heredar el lenguaje del sistema del que dependes.',
      en: 'Validating data and isolating technology are other layers. This one exists when you do not want to inherit the language of the system you depend on.',
    },
  },
  {
    id: 'th-arch2-11',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué significan núcleo compartido, cliente proveedor y conformista?',
      en: 'What do shared kernel, customer supplier and conformist mean?',
    },
    answer: {
      es: 'Núcleo compartido es un modelo común de dos equipos. Cliente proveedor deja que el consumidor influya en el plan. Conformista adopta el modelo de arriba sin negociar.',
      en: 'Shared kernel is a model two teams own together. Customer supplier lets the consumer influence the plan. Conformist adopts the upstream model without negotiating.',
    },
    distractors: [
      {
        es: 'Son una librería de utilidades, una llamada síncrona y consumir una API pública.',
        en: 'They are a utility library, a synchronous call and consuming a public API.',
      },
      {
        es: 'El conformista traduce el modelo externo para protegerse.',
        en: 'The conformist translates the external model to protect itself.',
      },
    ],
    explanation: {
      es: 'Hablan de poder entre equipos, no del transporte. El conformista es lo contrario de una capa anticorrupción: acepta el modelo ajeno tal cual.',
      en: 'They are about power between teams, not about transport. Conformist is the opposite of an anticorruption layer: it accepts the other model as it is.',
    },
  },
  {
    id: 'th-arch2-12',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Cuándo pasarías de un monolito modular a microservicios?',
      en: 'When would you move from a modular monolith to microservices?',
    },
    answer: {
      es: 'Cuando de verdad necesitas desplegar, escalar o dar autonomía a un equipo por separado, y ese beneficio paga el costo de lo distribuido.',
      en: 'When you really need to deploy, scale or give a team autonomy separately, and that benefit pays for the cost of going distributed.',
    },
    distractors: [
      {
        es: 'Cuando el código crece y cuesta mantenerlo, porque las piezas pequeñas se entienden mejor.',
        en: 'When the code grows and is hard to maintain, because small pieces are easier to understand.',
      },
      {
        es: 'Cuando quieres otra tecnología, porque un solo artefacto no puede aislar módulos.',
        en: 'When you want another technology, because a single artifact cannot isolate modules.',
      },
    ],
    explanation: {
      es: 'Partir por tamaño cambia una llamada a método por una llamada de red. La modularidad se puede tener dentro del mismo proceso.',
      en: 'Splitting by size trades a method call for a network call. Modularity can exist inside the same process.',
    },
  },
  {
    id: 'th-arch2-13',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué diferencia hay entre coreografía y orquestación?',
      en: 'What is the difference between choreography and orchestration?',
    },
    answer: {
      es: 'En la coreografía cada servicio reacciona a eventos, sin un jefe. En la orquestación un componente dirige los pasos.',
      en: 'In choreography each service reacts to events, with no boss. In orchestration one component drives the steps.',
    },
    distractors: [
      {
        es: 'La coreografía es asíncrona y la orquestación siempre es HTTP síncrono.',
        en: 'Choreography is asynchronous and orchestration is always synchronous HTTP.',
      },
      {
        es: 'La coreografía corre en paralelo y la orquestación en serie.',
        en: 'Choreography runs in parallel and orchestration in series.',
      },
    ],
    explanation: {
      es: 'El orquestador puede usar colas. Lo que cambia es dónde está escrito el flujo completo, no si los pasos son paralelos.',
      en: 'An orchestrator can use queues. What changes is where the full flow is written, not whether the steps are parallel.',
    },
  },
  {
    id: 'th-arch2-14',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Cómo obtienes el estado actual en event sourcing y para qué sirve un snapshot?',
      en: 'In event sourcing, how do you get the current state and what is a snapshot for?',
    },
    answer: {
      es: 'Reproduciendo los eventos en orden. El snapshot guarda un punto intermedio para no releer todo el historial.',
      en: 'By replaying the events in order. The snapshot stores an intermediate point so you do not reread the whole history.',
    },
    distractors: [
      {
        es: 'El estado se guarda en cada escritura y el snapshot sirve para auditar quién cambió qué.',
        en: 'State is stored on every write and the snapshot is for auditing who changed what.',
      },
      {
        es: 'El snapshot es la fuente de verdad y los eventos solo lo recalculan.',
        en: 'The snapshot is the source of truth and the events only recompute it.',
      },
    ],
    explanation: {
      es: 'La fuente de verdad es el registro de eventos. El snapshot se puede borrar y volver a generar.',
      en: 'The source of truth is the event log. The snapshot can be deleted and generated again.',
    },
  },
  {
    id: 'th-arch2-15',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué es una proyección de lectura y por qué puede ir retrasada?',
      en: 'What is a read projection and why can it lag?',
    },
    answer: {
      es: 'Es una vista derivada de las escrituras o de los eventos. El consumidor tarda un poco, así que la interfaz debe tolerar ese retraso.',
      en: 'It is a view derived from the writes or the events. The consumer takes a moment, so the interface must tolerate that lag.',
    },
    distractors: [
      {
        es: 'Es una vista que se actualiza en la misma transacción, así que nunca se retrasa.',
        en: 'It is a view updated in the same transaction, so it never lags.',
      },
      {
        es: 'Es una caché cuyo TTL marca el desfase máximo.',
        en: 'It is a cache whose TTL sets the maximum lag.',
      },
    ],
    explanation: {
      es: 'Puedes mostrar un estado pendiente o leer tu propia escritura desde el modelo de escritura. Una proyección se puede reconstruir reproduciendo la fuente.',
      en: 'You can show a pending state or read your own write from the write model. A projection can be rebuilt by replaying the source.',
    },
  },
  {
    id: 'th-arch2-16',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué ventaja dan los puertos al probar con dobles?',
      en: 'What advantage do ports give when you test with doubles?',
    },
    answer: {
      es: 'Pruebas el caso de uso entero cambiando solo los adaptadores. Las pruebas siguen valiendo si reorganizas las clases de dentro.',
      en: 'You test the whole use case by swapping only the adapters. The tests still hold if you rearrange the classes inside.',
    },
    distractors: [
      {
        es: 'Puedes simular cada colaborador interno y aislar cada clase.',
        en: 'You can mock every internal collaborator and isolate each class.',
      },
      {
        es: 'Puedes quitar las pruebas de integración, porque el doble ya imita al adaptador real.',
        en: 'You can drop integration tests, because the double already imitates the real adapter.',
      },
    ],
    explanation: {
      es: 'Simular cada llamada congela el diseño. El doble no sustituye probar el adaptador real contra la base o el contrato.',
      en: 'Mocking every call freezes the design. The double does not replace testing the real adapter against the database or the contract.',
    },
  },
  {
    id: 'th-arch2-17',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué ventaja tiene organizar paquetes por funcionalidad en lugar de por capa?',
      en: 'What is the advantage of organising packages by feature instead of by layer?',
    },
    answer: {
      es: 'Todo lo de una funcionalidad queda junto. Un cambio no se reparte en cuatro carpetas y puedes ocultar lo interno del paquete.',
      en: 'Everything for one feature stays together. A change is not spread across four folders and you can hide what is internal to the package.',
    },
    distractors: [
      {
        es: 'Ninguna: las carpetas no cambian el acoplamiento real.',
        en: 'None: folders do not change the real coupling.',
      },
      {
        es: 'Evita duplicar, porque el código común queda en un solo sitio para todos.',
        en: 'It avoids duplication, because common code stays in one place for everyone.',
      },
    ],
    explanation: {
      es: 'En Java la visibilidad de paquete solo funciona si las clases relacionadas viven juntas. El código compartido de verdad se extrae aparte.',
      en: 'In Java package visibility only works if the related classes live together. Code that is truly shared is extracted aside.',
    },
  },
  {
    id: 'th-arch2-18',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué aportan unas reglas de arquitectura automatizadas, como ArchUnit?',
      en: 'What do automated architecture rules, such as ArchUnit, give you?',
    },
    answer: {
      es: 'Convierten una regla, por ejemplo no saltarse una capa, en una prueba que rompe el build si alguien la cruza.',
      en: 'They turn a rule, for example do not skip a layer, into a test that breaks the build if someone crosses it.',
    },
    distractors: [
      {
        es: 'Bloquean la fusión cuando baja la cobertura o aparece una vulnerabilidad.',
        en: 'They block the merge when coverage drops or a vulnerability appears.',
      },
      {
        es: 'Generan el diagrama y lo comparan con el diseño previsto.',
        en: 'They generate the diagram and compare it with the planned design.',
      },
    ],
    explanation: {
      es: 'Una puerta de calidad de código no vigila las fronteras. Un diagrama documenta lo que hay, pero no impide el import de mañana.',
      en: 'A code quality gate does not watch the boundaries. A diagram documents what exists, but it does not stop tomorrow import.',
    },
  },
  {
    id: 'th-arch2-19',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Para qué sirve un registro de decisiones de arquitectura?',
      en: 'What is an architecture decision record for?',
    },
    answer: {
      es: 'Para dejar el contexto, las alternativas y las consecuencias de una decisión, de modo que el porqué sobreviva al equipo.',
      en: 'To leave the context, the alternatives and the consequences of one decision, so the why outlives the team.',
    },
    distractors: [
      {
        es: 'Para documentar los componentes actuales y actualizar el diagrama en cada cambio.',
        en: 'To document the current components and update the diagram on every change.',
      },
      {
        es: 'Para registrar quién aprobó cada decisión y auditar las desviaciones.',
        en: 'To record who approved each decision and audit the deviations.',
      },
    ],
    explanation: {
      es: 'El diagrama dice qué hay. El registro dice por qué se eligió. Si la decisión cambia, se escribe otra y la anterior queda sustituida.',
      en: 'The diagram says what exists. The record says why it was chosen. If the decision changes, you write another one and the previous stays superseded.',
    },
  },
  {
    id: 'th-arch2-20',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué dice la ley de Conway y cómo se usa al diseñar?',
      en: 'What does the Conway law say and how is it used when you design?',
    },
    answer: {
      es: 'El sistema tiende a copiar cómo se comunican los equipos. Conviene alinear los equipos con las fronteras que quieres.',
      en: 'The system tends to copy how the teams communicate. You should align the teams with the boundaries you want.',
    },
    distractors: [
      {
        es: 'Añadir gente a un proyecto tarde lo retrasa más.',
        en: 'Adding people to a late project makes it later.',
      },
      {
        es: 'Hay que definir la arquitectura antes de formar los equipos.',
        en: 'You must define the architecture before forming the teams.',
      },
    ],
    explanation: {
      es: 'Una frontera que cruza dos equipos se erosiona por la coordinación. Reorganizar equipos para provocar la arquitectura es la maniobra inversa.',
      en: 'A boundary that cuts across two teams erodes because of the coordination. Reorganising teams to induce the architecture is the inverse move.',
    },
  },
];
