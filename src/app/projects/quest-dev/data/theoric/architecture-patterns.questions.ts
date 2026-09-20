import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_ARCHITECTURE_PATTERNS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-arch2-01',
    topic: 'Arquitectura',
    prompt: {
      es: 'En una arquitectura en capas, ¿qué diferencia hay entre capas estrictas y capas relajadas?',
      en: 'In a layered architecture, what is the difference between strict layers and relaxed layers?',
    },
    answer: {
      es: 'En las estrictas cada capa solo puede invocar a la inmediatamente inferior; en las relajadas se permite saltar capas hacia abajo.',
      en: 'With strict layers each layer may only call the one immediately below; with relaxed layers skipping downward is allowed.',
    },
    distractors: [
      {
        es: 'En las estrictas las dependencias apuntan siempre hacia el dominio, y en las relajadas el dominio puede llamar a la infraestructura.',
        en: 'With strict layers dependencies always point towards the domain, and with relaxed layers the domain may call infrastructure.',
      },
      {
        es: 'En las estrictas cada capa es un artefacto desplegable aparte, y en las relajadas todas conviven en el mismo despliegue.',
        en: 'With strict layers each layer is a separate deployable artifact, and with relaxed layers they all live in the same deployment.',
      },
    ],
    explanation: {
      es: 'La distinción es sobre visibilidad entre capas cerradas y abiertas, y cada opción tiene su coste: las estrictas aíslan mejor pero provocan el antipatrón del sumidero, capas que solo reenvían la llamada sin aportar lógica. La dirección hacia el dominio es la regla de dependencia de la arquitectura limpia, que es un modelo distinto del apilamiento clásico. Y el despliegue es ortogonal: las capas son una separación lógica que normalmente vive en un único artefacto, y en ninguna variante se permite llamar hacia arriba.',
      en: 'The distinction is about visibility between closed and open layers, and each option has a cost: strict layers isolate better but cause the sinkhole antipattern, layers that merely forward the call without adding logic. Pointing towards the domain is the dependency rule of clean architecture, a different model from classic stacking. And deployment is orthogonal: layers are a logical separation usually living in a single artifact, and no variant allows calling upward.',
    },
  },
  {
    id: 'th-arch2-02',
    topic: 'Arquitectura',
    prompt: {
      es: 'En la arquitectura limpia, ¿qué establece exactamente la regla de dependencia?',
      en: 'In clean architecture, what does the dependency rule state exactly?',
    },
    answer: {
      es: 'Que las dependencias del código fuente apuntan solo hacia dentro, aunque el flujo de control cruce hacia fuera gracias a la inversión de dependencias.',
      en: 'That source code dependencies point only inward, even though the control flow crosses outward thanks to dependency inversion.',
    },
    distractors: [
      {
        es: 'Que las dependencias apuntan hacia dentro y, en consecuencia, el flujo de control nunca sale del dominio hacia la infraestructura.',
        en: 'That dependencies point inward and, as a consequence, the control flow never leaves the domain towards infrastructure.',
      },
      {
        es: 'Que cada círculo depende únicamente de la interfaz del círculo contiguo, lo que ya basta para invertir la dependencia.',
        en: 'That each circle depends only on the interface of the adjacent circle, which is already enough to invert the dependency.',
      },
    ],
    explanation: {
      es: 'La clave es distinguir dependencia de compilación y flujo de ejecución: el caso de uso invoca en tiempo de ejecución al adaptador de base de datos, pero lo hace a través de un puerto declarado dentro, así que el compilador nunca ve al dominio importando infraestructura. El primer distractor confunde ambas cosas y llevaría a que el dominio no pudiera provocar ningún efecto externo. El segundo describe capas tradicionales: depender de una interfaz que pertenece a la capa externa no invierte nada, porque la propiedad de la abstracción es justo lo que define la inversión según el principio de inversión de dependencias.',
      en: 'The key is telling compile-time dependency from execution flow: the use case calls the database adapter at runtime, but does so through a port declared inside, so the compiler never sees the domain importing infrastructure. The first distractor conflates both and would mean the domain could never cause any external effect. The second describes traditional layering: depending on an interface owned by the outer layer inverts nothing, because ownership of the abstraction is precisely what defines inversion under the dependency inversion principle.',
    },
  },
  {
    id: 'th-arch2-03',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué tienen en común las arquitecturas de cebolla, hexagonal y limpia?',
      en: 'What do onion, hexagonal and clean architectures have in common?',
    },
    answer: {
      es: 'Que aíslan un dominio independiente de la tecnología y empujan la infraestructura al borde mediante inversión de dependencias.',
      en: 'They isolate a technology-independent domain and push infrastructure to the edge through dependency inversion.',
    },
    distractors: [
      {
        es: 'Que exigen separar el modelo de lectura del de escritura para que las consultas no contaminen el modelo de dominio.',
        en: 'They require separating the read model from the write model so queries do not pollute the domain model.',
      },
      {
        es: 'Que definen el mismo número de capas con nombres distintos, de modo que existe una correspondencia directa entre ellas.',
        en: 'They define the same number of layers with different names, so there is a direct correspondence between them.',
      },
    ],
    explanation: {
      es: 'Las tres comparten el mismo núcleo conceptual: dominio en el centro, detalles fuera y dependencias apuntando hacia dentro, por eso muchos equipos las usan como sinónimos en la práctica. Sus énfasis sí difieren: la hexagonal de Cockburn destaca la simetría entre puertos primarios y secundarios, la cebolla de Palermo organiza círculos concéntricos alrededor del modelo de dominio y la limpia de Martin añade entidades, casos de uso y la regla de cruce de fronteras con presentadores. Separar lectura y escritura es CQRS, un patrón ortogonal que puede aplicarse o no en cualquiera de las tres.',
      en: 'All three share the same conceptual core: domain at the centre, details outside and dependencies pointing inward, which is why many teams treat them as synonyms in practice. Their emphases do differ: hexagonal from Cockburn highlights the symmetry between primary and secondary ports, onion from Palermo arranges concentric circles around the domain model, and clean from Martin adds entities, use cases and the boundary-crossing rule with presenters. Separating reads from writes is CQRS, an orthogonal pattern that may or may not be applied in any of the three.',
    },
  },
  {
    id: 'th-arch2-04',
    topic: 'Arquitectura',
    prompt: {
      es: 'En diseño guiado por el dominio, ¿cuál es el propósito del lenguaje ubicuo?',
      en: 'In domain-driven design, what is the purpose of the ubiquitous language?',
    },
    answer: {
      es: 'Que expertos de negocio y desarrolladores hablen un mismo lenguaje dentro de un contexto, y que ese lenguaje aparezca literalmente en el código.',
      en: 'That business experts and developers speak one language inside a context, and that the language appears literally in the code.',
    },
    distractors: [
      {
        es: 'Disponer de un glosario de términos del negocio acordado al inicio del proyecto para que todos los equipos usen las mismas palabras.',
        en: 'Having a glossary of business terms agreed at project start so every team uses the same words.',
      },
      {
        es: 'Establecer una convención de nombres compartida por todos los servicios para que los contratos de las API resulten coherentes.',
        en: 'Establishing a naming convention shared by all services so the API contracts turn out consistent.',
      },
    ],
    explanation: {
      es: 'El lenguaje ubicuo no es documentación sino código vivo: si el negocio dice que un pedido se confirma, debe existir pedido.confirmar() y no un OrderManager con un método setStatus, porque cada traducción mental entre ambos mundos es una fuente de errores. El glosario estático es solo un subproducto, envejece y omite lo esencial, que es la evolución continua del modelo al conversar. Además el lenguaje vale dentro de un contexto delimitado y no en toda la empresa: cliente significa cosas distintas en ventas y en soporte, y forzar un término único es lo que Evans desaconseja con el modelo canónico global.',
      en: 'The ubiquitous language is not documentation but living code: if the business says an order is confirmed, there must be order.confirm() and not an OrderManager with a setStatus method, because every mental translation between both worlds is a source of bugs. The static glossary is only a by-product, it ages and misses the essential part, which is the continuous evolution of the model through conversation. The language also holds inside a bounded context rather than across the whole company: customer means different things in sales and in support, and forcing one single term is exactly what Evans warns against with a global canonical model.',
    },
  },
  {
    id: 'th-arch2-05',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué relación hay entre un contexto delimitado, un módulo y un microservicio?',
      en: 'What is the relationship between a bounded context, a module and a microservice?',
    },
    answer: {
      es: 'El contexto delimitado es una frontera de significado del modelo; el módulo y el microservicio son maneras de materializarlo, lógica y físicamente.',
      en: 'The bounded context is a boundary of meaning for the model; the module and the microservice are ways of materialising it, logically and physically.',
    },
    distractors: [
      {
        es: 'El contexto delimitado equivale a un microservicio, ya que cada modelo necesita su propia base de datos y su propio despliegue.',
        en: 'The bounded context equals a microservice, since each model needs its own database and its own deployment.',
      },
      {
        es: 'El contexto delimitado agrupa varios módulos, y cada módulo se corresponde con un agregado del modelo de dominio.',
        en: 'The bounded context groups several modules, and each module corresponds to one aggregate of the domain model.',
      },
    ],
    explanation: {
      es: 'La frontera es semántica antes que técnica: define dónde un término tiene un significado único y consistente, y un monolito modular puede alojar varios contextos en un mismo despliegue con paquetes bien aislados. Equiparar contexto y microservicio es el malentendido más extendido y empuja a distribuir antes de entender el dominio; de hecho un contexto puede exponerse como varios servicios, aunque repartir un mismo modelo entre servicios los acopla y anula su autonomía. El agregado es otra cosa: es la frontera de consistencia transaccional dentro de un contexto, y un contexto contiene varios agregados.',
      en: 'The boundary is semantic before it is technical: it defines where a term has one consistent meaning, and a modular monolith can host several contexts in one deployment with properly isolated packages. Equating context and microservice is the most widespread misunderstanding and pushes teams to distribute before understanding the domain; in fact a context may be exposed as several services, although splitting one model across services couples them and destroys their autonomy. The aggregate is something else: it is the transactional consistency boundary inside a context, and a context holds several aggregates.',
    },
  },
  {
    id: 'th-arch2-06',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué reglas definen a un agregado raíz en el diseño táctico de DDD?',
      en: 'Which rules define an aggregate root in DDD tactical design?',
    },
    answer: {
      es: 'Es la frontera de consistencia de una transacción y referencia a otros agregados por identificador, nunca por referencia directa al objeto.',
      en: 'It is the consistency boundary of a transaction and references other aggregates by identifier, never by direct object reference.',
    },
    distractors: [
      {
        es: 'Debe cargar de forma anticipada todas las entidades relacionadas, porque solo con el grafo completo puede garantizar sus invariantes.',
        en: 'It must eagerly load every related entity, because only with the full graph can it guarantee its invariants.',
      },
      {
        es: 'Es la entidad que posee la clave primaria de la que dependen las demás tablas del modelo mediante clave foránea.',
        en: 'It is the entity owning the primary key that the other tables of the model depend on through foreign keys.',
      },
    ],
    explanation: {
      es: 'Las reglas de Vernon son claras: modificar un solo agregado por transacción, referenciar los demás por identidad y aceptar consistencia eventual entre ellos, normalmente coordinada con eventos de dominio. Cargar todo el grafo es justo lo contrario de la recomendación de mantener agregados pequeños, porque agranda la transacción y multiplica los conflictos de bloqueo optimista con la columna de versión. Y definirlo por la clave foránea invierte el razonamiento: el modelo relacional es un detalle de persistencia, y hay agregados cuyo límite no coincide con ninguna relación de tablas.',
      en: 'The Vernon rules are clear: modify one aggregate per transaction, reference the others by identity and accept eventual consistency between them, usually coordinated with domain events. Loading the whole graph is the exact opposite of the advice to keep aggregates small, because it widens the transaction and multiplies optimistic locking conflicts on the version column. And defining it by the foreign key reverses the reasoning: the relational model is a persistence detail, and some aggregate boundaries match no table relationship at all.',
    },
  },
  {
    id: 'th-arch2-07',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué diferencia a un evento de dominio de un evento de integración?',
      en: 'What differentiates a domain event from an integration event?',
    },
    answer: {
      es: 'El de dominio es interno al contexto y se expresa con su modelo; el de integración es un contrato público y versionado hacia otros contextos.',
      en: 'The domain event is internal to the context and expressed with its model; the integration event is a public versioned contract towards other contexts.',
    },
    distractors: [
      {
        es: 'El de dominio se publica de forma síncrona dentro de la transacción y el de integración se publica siempre de forma asíncrona.',
        en: 'The domain event is published synchronously within the transaction and the integration event is always published asynchronously.',
      },
      {
        es: 'El de dominio describe un cambio de estado ya ocurrido y el de integración describe una acción que otro servicio debe ejecutar.',
        en: 'The domain event describes a state change that already happened and the integration event describes an action another service must execute.',
      },
    ],
    explanation: {
      es: 'Lo que los separa es la audiencia y el acoplamiento: el evento de dominio puede transportar entidades internas y cambiar libremente porque nadie fuera lo ve, mientras que el de integración se serializa, se versiona y no puede romperse sin coordinar con los consumidores; por eso lo habitual es traducir uno en otro en el borde y publicarlo con el patrón outbox para no perderlo si falla el broker. El transporte no define la distinción, ya que un evento de dominio puede manejarse tras el commit y uno de integración enviarse por una llamada síncrona. Y describir una acción que otro debe ejecutar es un comando, que impone al emisor conocer al receptor y su lógica.',
      en: 'What separates them is audience and coupling: the domain event may carry internal entities and change freely because nobody outside sees it, while the integration event is serialised, versioned and cannot break without coordinating with consumers; that is why the usual practice is translating one into the other at the boundary and publishing it with the outbox pattern so it is not lost if the broker fails. Transport does not define the distinction, since a domain event can be handled after commit and an integration event sent over a synchronous call. And describing an action someone else must execute is a command, which forces the sender to know the receiver and its logic.',
    },
  },
  {
    id: 'th-arch2-08',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué es un modelo de dominio anémico y qué compromisos implica?',
      en: 'What is an anemic domain model and what trade-offs does it imply?',
    },
    answer: {
      es: 'Es un modelo con datos y sin comportamiento, cuya lógica vive en servicios; resulta razonable en casos CRUD y costoso cuando hay reglas ricas.',
      en: 'It is a model with data and no behaviour, whose logic lives in services; it is reasonable for CRUD cases and costly when the rules are rich.',
    },
    distractors: [
      {
        es: 'Es un modelo con pocas entidades, síntoma de que el análisis no identificó todos los conceptos relevantes del negocio.',
        en: 'It is a model with few entities, a symptom that the analysis did not identify every relevant business concept.',
      },
      {
        es: 'Es siempre un antipatrón, porque cualquier clase con métodos de acceso públicos rompe el encapsulamiento del dominio.',
        en: 'It is always an antipattern, because any class with public accessors breaks the encapsulation of the domain.',
      },
    ],
    explanation: {
      es: 'Fowler lo llamó antipatrón porque paga todo el coste del mapeo objeto relacional sin obtener el beneficio de la orientación a objetos, y las invariantes acaban duplicadas y desincronizadas entre varios servicios. Aun así, para un módulo de altas y bajas sin reglas, un guion de transacción con entidades planas es más simple y perfectamente defendible: el problema empieza cuando la lógica crece. La respuesta dogmática falla porque los objetos de transferencia en el borde son precisamente contenedores de datos legítimos, y el número de entidades no tiene nada que ver con la anemia.',
      en: 'Fowler called it an antipattern because it pays the whole cost of object relational mapping without gaining the benefits of object orientation, and invariants end up duplicated and out of sync across several services. Even so, for a create-and-delete module with no rules, a transaction script with flat entities is simpler and perfectly defensible: the problem starts when the logic grows. The dogmatic answer fails because transfer objects at the boundary are precisely legitimate data holders, and the number of entities has nothing to do with anemia.',
    },
  },
  {
    id: 'th-arch2-09',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué distingue a un servicio de dominio de un servicio de aplicación?',
      en: 'What distinguishes a domain service from an application service?',
    },
    answer: {
      es: 'El de dominio contiene lógica de negocio que no encaja en ninguna entidad; el de aplicación orquesta el caso de uso, la transacción y las dependencias externas.',
      en: 'The domain service holds business logic that fits in no entity; the application service orchestrates the use case, the transaction and the external dependencies.',
    },
    distractors: [
      {
        es: 'El de dominio es una clase de utilidades con métodos estáticos y el de aplicación es el componente que guarda el estado de la sesión.',
        en: 'The domain service is a utility class with static methods and the application service is the component keeping the session state.',
      },
      {
        es: 'El de dominio expone la API pública del módulo y el de aplicación es el único que puede acceder a repositorios y adaptadores.',
        en: 'The domain service exposes the public API of the module and the application service is the only one allowed to reach repositories and adapters.',
      },
    ],
    explanation: {
      es: 'El servicio de aplicación no contiene reglas: carga agregados por el repositorio, les pide que hagan su trabajo, confirma la transacción y publica los eventos, y es donde vive la anotación Transactional en Spring. El servicio de dominio aparece cuando una operación involucra a varios agregados o a una política que no pertenece a ninguno, como una transferencia entre dos cuentas o un cálculo de tarifa. Ambos suelen ser sin estado, así que ese no es el criterio, y quien expone el caso de uso hacia fuera es el de aplicación, no el de dominio.',
      en: 'The application service holds no rules: it loads aggregates through the repository, asks them to do their work, commits the transaction and publishes the events, and it is where the Transactional annotation lives in Spring. The domain service appears when an operation involves several aggregates or a policy belonging to none of them, such as a transfer between two accounts or a pricing calculation. Both are usually stateless, so that is not the criterion, and the one exposing the use case outward is the application service, not the domain service.',
    },
  },
  {
    id: 'th-arch2-10',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Cuál es la función de una capa anticorrupción?',
      en: 'What is the role of an anticorruption layer?',
    },
    answer: {
      es: 'Traducir el modelo de un sistema externo al modelo propio, para que sus conceptos y su lenguaje no se filtren hacia el dominio.',
      en: 'Translate the model of an external system into your own model, so its concepts and language do not leak into the domain.',
    },
    distractors: [
      {
        es: 'Validar y sanear los datos que llegan de sistemas externos antes de persistirlos, rechazando los que incumplan las reglas.',
        en: 'Validate and sanitise the data arriving from external systems before persisting it, rejecting whatever breaks the rules.',
      },
      {
        es: 'Aislar al dominio de la tecnología de acceso, de modo que se pueda cambiar el cliente HTTP o el controlador de base de datos sin tocarlo.',
        en: 'Isolate the domain from the access technology, so the HTTP client or the database driver can be swapped without touching it.',
      },
    ],
    explanation: {
      es: 'Es un patrón de mapeo de contextos de Evans que se implementa como fachada más adaptador más traductor, y se aplica cuando dependes de un sistema heredado o de un proveedor cuyo modelo no controlas ni quieres heredar; su coste real es mantener la traducción cuando el otro lado cambia. La validación de entrada protege de datos malos, no de conceptos ajenos, y ocurre igual aunque el modelo externo sea idéntico al tuyo. Aislar la tecnología es lo que hace cualquier adaptador de puerto, que puede existir sin traducción alguna si el modelo ya coincide.',
      en: 'It is an Evans context mapping pattern implemented as facade plus adapter plus translator, applied when you depend on a legacy system or a supplier whose model you neither control nor want to inherit; its real cost is maintaining the translation when the other side changes. Input validation protects from bad data, not from foreign concepts, and happens anyway even when the external model is identical to yours. Isolating technology is what any port adapter does, and it can exist with no translation at all when the model already matches.',
    },
  },
  {
    id: 'th-arch2-11',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué describen los patrones de mapeo de contextos núcleo compartido, cliente proveedor y conformista?',
      en: 'What do the shared kernel, customer supplier and conformist context mapping patterns describe?',
    },
    answer: {
      es: 'Núcleo compartido es un modelo común con propiedad conjunta; cliente proveedor da voz al consumidor en la planificación; conformista adopta el modelo ajeno sin negociar.',
      en: 'Shared kernel is a common model under joint ownership; customer supplier gives the consumer a voice in planning; conformist adopts the upstream model without negotiating.',
    },
    distractors: [
      {
        es: 'Núcleo compartido es una biblioteca común de utilidades, cliente proveedor es una llamada síncrona y conformista es consumir una API pública.',
        en: 'Shared kernel is a common utility library, customer supplier is a synchronous call and conformist is consuming a public API.',
      },
      {
        es: 'Los tres describen relaciones entre equipos, y el conformista añade una traducción del modelo externo para proteger al propio.',
        en: 'All three describe team relationships, and the conformist one adds a translation of the external model to protect your own.',
      },
    ],
    explanation: {
      es: 'Son relaciones organizativas entre un contexto aguas arriba y otro aguas abajo, no decisiones técnicas de transporte: lo que cambia es el poder de negociación y quién asume el coste del cambio. El conformista es exactamente lo contrario de la capa anticorrupción, porque acepta el modelo de arriba tal cual para ahorrarse el mapeo, asumiendo que sus cambios te arrastran. El núcleo compartido es el más peligroso de los tres y conviene mantenerlo mínimo, ya que exige coordinar despliegues y una suite de pruebas común entre los dos equipos propietarios.',
      en: 'They are organisational relationships between an upstream and a downstream context, not technical transport decisions: what changes is the negotiating power and who absorbs the cost of change. The conformist is exactly the opposite of an anticorruption layer, because it accepts the upstream model as-is to save the mapping cost, assuming that upstream changes drag you along. The shared kernel is the most dangerous of the three and should be kept minimal, since it demands coordinated deployments and a common test suite across both owning teams.',
    },
  },
  {
    id: 'th-arch2-12',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué criterio debe decidir entre mantener un monolito modular y pasar a microservicios?',
      en: 'Which criterion should decide between keeping a modular monolith and moving to microservices?',
    },
    answer: {
      es: 'Que exista una necesidad real de despliegue, escalado o autonomía de equipo independientes que compense el coste de lo distribuido.',
      en: 'That there is a real need for independent deployment, scaling or team autonomy that outweighs the cost of going distributed.',
    },
    distractors: [
      {
        es: 'Que el código haya crecido hasta ser difícil de mantener, porque unidades pequeñas son más fáciles de entender y modificar.',
        en: 'That the code has grown hard to maintain, because small units are easier to understand and modify.',
      },
      {
        es: 'Que se necesiten tecnologías distintas y aislamiento de fallos, algo que un único artefacto no puede ofrecer entre sus módulos.',
        en: 'That different technologies and fault isolation are needed, something a single artifact cannot offer between its modules.',
      },
    ],
    explanation: {
      es: 'La modularidad se consigue dentro del proceso con fronteras bien definidas, así que dividir por tamaño de código solo cambia una llamada a método por una llamada de red con latencia, fallos parciales y consistencia eventual; de ahí la recomendación de empezar por el monolito y extraer cuando una frontera se haya demostrado estable. El segundo distractor menciona ventajas reales de los microservicios, pero un monolito modular sí puede aislar módulos con paquetes, reglas de ArchUnit y límites de recursos, y la heterogeneidad tecnológica rara vez justifica por sí sola el coste operativo. Los motores legítimos son el despliegue independiente, el escalado diferenciado de una parte concreta y la propiedad clara por equipo.',
      en: 'Modularity is achieved in-process with well-defined boundaries, so splitting by code size only trades a method call for a network call with latency, partial failures and eventual consistency; hence the advice to start with the monolith and extract once a boundary has proven stable. The second distractor names genuine microservice benefits, but a modular monolith can isolate modules with packages, ArchUnit rules and resource limits, and technology heterogeneity rarely justifies the operational cost on its own. The legitimate drivers are independent deployment, differentiated scaling of a specific part and clear team ownership.',
    },
  },
  {
    id: 'th-arch2-13',
    topic: 'Arquitectura',
    prompt: {
      es: 'En una arquitectura orientada a eventos, ¿qué diferencia hay entre coreografía y orquestación?',
      en: 'In an event-driven architecture, what is the difference between choreography and orchestration?',
    },
    answer: {
      es: 'En la coreografía cada servicio reacciona a los eventos sin coordinador; en la orquestación un componente central dirige los pasos y sus compensaciones.',
      en: 'With choreography each service reacts to events with no coordinator; with orchestration a central component drives the steps and their compensations.',
    },
    distractors: [
      {
        es: 'En la coreografía la comunicación es asíncrona mediante un broker y en la orquestación es siempre síncrona mediante llamadas HTTP.',
        en: 'With choreography communication is asynchronous through a broker and with orchestration it is always synchronous through HTTP calls.',
      },
      {
        es: 'En la coreografía los pasos se ejecutan en paralelo y en la orquestación en secuencia, lo que determina la latencia total del proceso.',
        en: 'With choreography the steps run in parallel and with orchestration in sequence, which determines the total latency of the process.',
      },
    ],
    explanation: {
      es: 'Ambas son formas de implementar una saga y lo que cambia es dónde vive el conocimiento del proceso: la coreografía mantiene bajo acoplamiento pero el flujo de punta a punta no está escrito en ningún sitio y aparecen ciclos difíciles de depurar, mientras que un orquestador como Temporal, Camunda o Netflix Conductor lo hace explícito y observable a cambio de un punto central. El transporte no es el criterio, porque un orquestador puede emitir comandos asíncronos por una cola y una coreografía puede apoyarse en webhooks. El paralelismo tampoco: cualquiera de los dos estilos puede lanzar pasos simultáneos o exigir un orden estricto.',
      en: 'Both are ways of implementing a saga and what changes is where the process knowledge lives: choreography keeps coupling low but the end-to-end flow is written nowhere and hard-to-debug cycles appear, while an orchestrator such as Temporal, Camunda or Netflix Conductor makes it explicit and observable at the price of a central point. Transport is not the criterion, because an orchestrator can emit asynchronous commands over a queue and a choreography can lean on webhooks. Parallelism is not either: both styles can fire simultaneous steps or demand a strict order.',
    },
  },
  {
    id: 'th-arch2-14',
    topic: 'Arquitectura',
    prompt: {
      es: 'En event sourcing, ¿cómo se obtiene el estado actual y qué papel cumplen los snapshots?',
      en: 'In event sourcing, how is the current state obtained and what role do snapshots play?',
    },
    answer: {
      es: 'El estado se reconstruye reproduciendo los eventos en orden, y el snapshot guarda un estado intermedio para no tener que releer el flujo completo.',
      en: 'State is rebuilt by replaying the events in order, and the snapshot stores an intermediate state to avoid re-reading the whole stream.',
    },
    distractors: [
      {
        es: 'El estado se guarda actualizado en cada escritura junto al evento, y los snapshots permiten auditar quién hizo cada cambio y cuándo.',
        en: 'State is stored updated on every write next to the event, and snapshots allow auditing who made each change and when.',
      },
      {
        es: 'El estado se lee del último snapshot, que es la fuente de verdad y se recalcula periódicamente a partir de los eventos recientes.',
        en: 'State is read from the last snapshot, which is the source of truth and gets recomputed periodically from the recent events.',
      },
    ],
    explanation: {
      es: 'La fuente de verdad es el registro de eventos, que solo admite anexar, y el snapshot es una optimización descartable: puede borrarse y regenerarse en cualquier momento sin perder información, por eso nunca debe tratarse como origen autoritativo. Guardar el estado mutable junto a una bitácora de cambios es un registro de auditoría clásico, útil pero distinto, porque ahí el estado no se deriva de los eventos. Los retos reales del enfoque son el versionado de eventos antiguos, que se resuelve con upcasting, y la imposibilidad de consultar por criterios arbitrarios sin construir proyecciones.',
      en: 'The source of truth is the append-only event log, and the snapshot is a disposable optimisation: it can be deleted and regenerated at any time without losing information, which is why it must never be treated as authoritative. Storing mutable state next to a change log is a classic audit trail, useful but different, because there the state is not derived from the events. The real challenges of the approach are versioning old events, solved with upcasting, and the impossibility of querying by arbitrary criteria without building projections.',
    },
  },
  {
    id: 'th-arch2-15',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué es una proyección de lectura y cómo se gestiona su desactualización temporal?',
      en: 'What is a read projection and how is its temporary staleness handled?',
    },
    answer: {
      es: 'Es una vista derivada del modelo de escritura o de los eventos, que puede ir por detrás, así que la interfaz debe tolerar la consistencia eventual.',
      en: 'It is a view derived from the write model or the events, which may lag behind, so the interface must tolerate eventual consistency.',
    },
    distractors: [
      {
        es: 'Es una vista materializada que se actualiza dentro de la misma transacción que la escritura, de modo que nunca puede estar desactualizada.',
        en: 'It is a materialised view updated inside the same transaction as the write, so it can never be stale.',
      },
      {
        es: 'Es una caché del resultado de la consulta cuyo tiempo de expiración determina el desfase máximo que puede observar el usuario.',
        en: 'It is a cache of the query result whose expiration time determines the maximum lag the user may observe.',
      },
    ],
    explanation: {
      es: 'El desfase depende del retraso de procesamiento del consumidor que alimenta la proyección, y se mitiga con técnicas concretas: leer las escrituras propias devolviendo el resultado desde el modelo de escritura, mostrar un estado pendiente en la interfaz o comparar la versión esperada antes de pintar. Una vista materializada actualizada en la misma transacción existe, pero entonces no hay separación real y se pierde la ventaja de escalar lecturas y escrituras por separado. Y la diferencia clave con una caché es que la proyección puede reconstruirse desde cero reproduciendo la fuente, algo que una caché con expiración no garantiza.',
      en: 'The lag depends on the processing delay of the consumer feeding the projection, and it is mitigated with concrete techniques: read your own writes by returning the result from the write model, show a pending state in the interface, or compare the expected version before rendering. A materialised view updated in the same transaction does exist, but then there is no real separation and you lose the benefit of scaling reads and writes independently. And the key difference from a cache is that a projection can be rebuilt from scratch by replaying the source, something a cache with expiration does not guarantee.',
    },
  },
  {
    id: 'th-arch2-16',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué ventaja aporta puertos y adaptadores al escribir pruebas con dobles situados en los puertos?',
      en: 'What advantage do ports and adapters bring when writing tests with doubles placed at the ports?',
    },
    answer: {
      es: 'Permite ejercitar el caso de uso completo sustituyendo solo los adaptadores, con pruebas rápidas que sobreviven a los cambios internos de diseño.',
      en: 'It lets you exercise the whole use case by replacing only the adapters, with fast tests that survive internal design changes.',
    },
    distractors: [
      {
        es: 'Permite simular cada colaborador interno del dominio, de modo que cada clase se pruebe totalmente aislada de las demás.',
        en: 'It lets you mock every internal collaborator of the domain, so each class is tested completely isolated from the rest.',
      },
      {
        es: 'Permite prescindir de las pruebas de integración, porque el doble ya reproduce el comportamiento que tendrá el adaptador real.',
        en: 'It lets you drop integration tests, because the double already reproduces the behaviour the real adapter will have.',
      },
    ],
    explanation: {
      es: 'Probar en la frontera del puerto verifica comportamiento y no estructura, así que puedes reorganizar las clases internas sin reescribir ninguna prueba; con un repositorio en memoria obtienes cobertura real del caso de uso en milisegundos. Simular cada colaborador es el estilo mockista llevado al extremo: congela el diseño porque cualquier extracción de método rompe las pruebas, y acaba verificando llamadas en lugar de resultados. Y los dobles nunca eliminan la necesidad de verificar el adaptador real contra la tecnología, con pruebas de integración sobre Testcontainers o con pruebas de contrato tipo Pact o Spring Cloud Contract.',
      en: 'Testing at the port boundary verifies behaviour rather than structure, so you can rearrange internal classes without rewriting a single test; with an in-memory repository you get real use case coverage in milliseconds. Mocking every collaborator is the mockist style taken to the extreme: it freezes the design because any method extraction breaks the tests, and it ends up asserting calls instead of outcomes. And doubles never remove the need to verify the real adapter against the technology, with integration tests over Testcontainers or contract tests such as Pact or Spring Cloud Contract.',
    },
  },
  {
    id: 'th-arch2-17',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué ventaja tiene organizar los paquetes por característica frente a organizarlos por capa?',
      en: 'What is the advantage of organising packages by feature instead of by layer?',
    },
    answer: {
      es: 'Que todo lo necesario para una funcionalidad queda junto, lo que sube la cohesión y permite restringir de verdad la visibilidad hacia fuera.',
      en: 'Everything needed for a feature stays together, which raises cohesion and makes it possible to genuinely restrict visibility to the outside.',
    },
    distractors: [
      {
        es: 'Que la estructura de carpetas es indiferente para el acoplamiento real, así que ambas opciones son equivalentes y es cuestión de gusto.',
        en: 'That the folder structure is irrelevant to real coupling, so both options are equivalent and a matter of taste.',
      },
      {
        es: 'Que evita la duplicación, porque el código común queda accesible para todas las funcionalidades desde un mismo lugar.',
        en: 'That it avoids duplication, because common code stays reachable from one single place for every feature.',
      },
    ],
    explanation: {
      es: 'La ventaja decisiva es técnica y no estética: en Java la visibilidad de paquete solo funciona si las clases relacionadas comparten paquete, así que agrupar por característica permite que el repositorio y las entidades sean internos y solo se exponga el caso de uso, algo imposible cuando cada clase vive en una carpeta distinta por su rol técnico. Además un cambio funcional queda contenido en un directorio en lugar de repartirse en cuatro, que es la cirugía con escopeta típica del empaquetado por capas. Seguir estratificando dentro de cada característica sigue siendo válido, y el código verdaderamente compartido se extrae a un paquete común explícito.',
      en: 'The decisive advantage is technical rather than aesthetic: in Java package-private visibility only works when related classes share a package, so grouping by feature lets the repository and the entities stay internal while only the use case is exposed, something impossible when each class lives in a different folder by technical role. On top of that a functional change stays inside one directory instead of spreading across four, the shotgun surgery typical of layered packaging. Layering inside each feature is still valid, and genuinely shared code is extracted into an explicit common package.',
    },
  },
  {
    id: 'th-arch2-18',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué aportan unas reglas de arquitectura automatizadas tipo ArchUnit entendidas como función de aptitud?',
      en: 'What do automated architecture rules such as ArchUnit contribute when understood as a fitness function?',
    },
    answer: {
      es: 'Convierten la intención arquitectónica en pruebas ejecutables que fallan en la construcción cuando alguien cruza una frontera prohibida.',
      en: 'They turn the architectural intent into executable tests that fail the build when someone crosses a forbidden boundary.',
    },
    distractors: [
      {
        es: 'Analizan el código de forma estática y bloquean la fusión cuando la cobertura baja o aparecen vulnerabilidades conocidas.',
        en: 'They analyse the code statically and block the merge when coverage drops or known vulnerabilities appear.',
      },
      {
        es: 'Generan diagramas a partir del código para comparar la arquitectura real con la planificada y detectar las desviaciones.',
        en: 'They generate diagrams from the code to compare the real architecture with the planned one and spot deviations.',
      },
    ],
    explanation: {
      es: 'El término función de aptitud viene de Building Evolutionary Architectures, de Ford, Parsons y Kua, y define una medida objetiva de si el sistema sigue cumpliendo una característica deseada mientras evoluciona; con ArchUnit esas reglas se escriben como pruebas JUnit ordinarias que comprueban ausencia de ciclos, respeto de las capas o convenciones de nombres. Una puerta de calidad como la de SonarQube también bloquea el pipeline, pero mide calidad de código y seguridad, no decisiones de arquitectura. Y las herramientas de diagramas documentan lo que hay, sin impedir que mañana alguien añada la importación prohibida.',
      en: 'The term fitness function comes from Building Evolutionary Architectures, by Ford, Parsons and Kua, and defines an objective measure of whether the system still meets a desired characteristic as it evolves; with ArchUnit those rules are written as ordinary JUnit tests checking absence of cycles, layer compliance or naming conventions. A quality gate such as the SonarQube one also blocks the pipeline, but it measures code quality and security rather than architectural decisions. And diagram tools document what exists, without stopping anyone from adding the forbidden import tomorrow.',
    },
  },
  {
    id: 'th-arch2-19',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Cuál es el propósito de un registro de decisiones de arquitectura?',
      en: 'What is the purpose of an architecture decision record?',
    },
    answer: {
      es: 'Dejar constancia de una decisión concreta con su contexto, las alternativas valoradas y sus consecuencias, para que el porqué sobreviva al equipo que la tomó.',
      en: 'Record one concrete decision with its context, the alternatives considered and its consequences, so the why outlives the team that made it.',
    },
    distractors: [
      {
        es: 'Documentar la arquitectura vigente con sus componentes y relaciones, manteniendo el documento actualizado en cada cambio del sistema.',
        en: 'Document the current architecture with its components and relationships, keeping the document updated on every system change.',
      },
      {
        es: 'Registrar quién aprobó cada decisión técnica, para poder auditar después las desviaciones respecto al estándar corporativo.',
        en: 'Record who approved each technical decision, so deviations from the corporate standard can be audited later.',
      },
    ],
    explanation: {
      es: 'El formato de Michael Nygard es breve y tiene cinco apartados: título, estado, contexto, decisión y consecuencias; cada registro es inmutable y se numera, de modo que cuando la decisión cambia se escribe uno nuevo que marca el anterior como sustituido en lugar de editarlo. Describir el sistema actual es el papel de la documentación de arquitectura, como los diagramas C4 o una plantilla arc42, que responde al qué y no al porqué. Y no es un mecanismo de aprobación ni de control: su valor está en que dentro de dos años alguien entienda qué restricciones existían y no deshaga la decisión por desconocimiento.',
      en: 'The Michael Nygard format is short and has five sections: title, status, context, decision and consequences; each record is immutable and numbered, so when the decision changes you write a new one marking the previous as superseded instead of editing it. Describing the current system is the job of architecture documentation, such as C4 diagrams or an arc42 template, which answers the what rather than the why. And it is not an approval or control mechanism: its value is that two years from now somebody understands which constraints existed and does not undo the decision out of ignorance.',
    },
  },
  {
    id: 'th-arch2-20',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué afirma la ley de Conway y cómo se usa al diseñar la arquitectura de un sistema?',
      en: 'What does the Conway law state and how is it used when designing the architecture of a system?',
    },
    answer: {
      es: 'Que el diseño del sistema tiende a copiar la estructura de comunicación de la organización, así que conviene alinear los equipos con las fronteras deseadas.',
      en: 'That the system design tends to copy the communication structure of the organisation, so teams should be aligned with the desired boundaries.',
    },
    distractors: [
      {
        es: 'Que añadir personas a un proyecto retrasado lo retrasa todavía más, por el coste de coordinación y de formar a los nuevos.',
        en: 'That adding people to a late project makes it later, because of coordination cost and onboarding the newcomers.',
      },
      {
        es: 'Que la arquitectura debe definirse antes de formar los equipos, para asignar a cada uno un componente con fronteras claras.',
        en: 'That the architecture must be defined before forming the teams, so each one gets a component with clear boundaries.',
      },
    ],
    explanation: {
      es: 'La observación de Melvin Conway es descriptiva: si tres equipos separados construyen un compilador, saldrá un compilador de tres pasadas, y una frontera de servicio que atraviesa dos equipos acaba erosionándose por la cantidad de coordinación que exige. El uso deliberado es la maniobra inversa de Conway: reorganizar los equipos para provocar la arquitectura que se quiere, idea que Team Topologies desarrolla con equipos alineados al flujo y atención a la carga cognitiva. El primer distractor enuncia correctamente la ley de Brooks, y el tercero invierte la relación, porque definir la arquitectura sin considerar la comunicación real solo garantiza que la organización acabe deformándola.',
      en: 'The Melvin Conway observation is descriptive: if three separate teams build a compiler, you get a three-pass compiler, and a service boundary cutting across two teams eventually erodes because of the coordination it demands. The deliberate use is the inverse Conway manoeuvre: reorganise the teams to induce the architecture you want, an idea Team Topologies develops with stream-aligned teams and attention to cognitive load. The first distractor correctly states the Brooks law, and the third inverts the relationship, because defining the architecture without considering real communication only guarantees the organisation will end up deforming it.',
    },
  },
];
