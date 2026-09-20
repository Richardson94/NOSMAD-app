import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_MICROSERVICES_TESTING_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-ms-01',
    topic: 'Resiliencia',
    prompt: {
      es: '¿Qué problema resuelve el patrón circuit breaker?',
      en: 'What problem does the circuit breaker pattern solve?',
    },
    answer: {
      es: 'Dejar de llamar a un servicio que está fallando para no agotar recursos y propagar la caída.',
      en: 'Stop calling a failing service to avoid exhausting resources and propagating the outage.',
    },
    distractors: [
      {
        es: 'Reintentar la llamada con espera exponencial hasta que el servicio dependiente vuelva a responder.',
        en: 'Retry the call with exponential backoff until the dependent service responds again.',
      },
      {
        es: 'Distribuir las peticiones entre las instancias sanas del servicio, descartando las que no pasan el health check.',
        en: 'Distribute requests among healthy instances of the service, discarding those failing the health check.',
      },
    ],
    explanation: {
      es: 'El cortocircuito falla rápido: tras un umbral de errores abre el circuito y responde de inmediato o con un fallback, evitando que los hilos se acumulen esperando timeouts. Reintentar es otro patrón que, sin cortocircuito, empeora la saturación; repartir carga es balanceo.',
      en: 'The breaker fails fast: after an error threshold it opens the circuit and responds immediately or with a fallback, preventing threads from piling up waiting on timeouts. Retrying is a different pattern that, without a breaker, worsens saturation; spreading load is load balancing.',
    },
  },
  {
    id: 'be-ms-02',
    topic: 'Transacciones distribuidas',
    prompt: {
      es: '¿Qué caracteriza al patrón Saga frente a una transacción distribuida clásica?',
      en: 'What characterises the Saga pattern compared to a classic distributed transaction?',
    },
    answer: {
      es: 'Divide la operación en pasos locales con transacciones de compensación en lugar de un commit global.',
      en: 'It splits the operation into local steps with compensating transactions instead of a global commit.',
    },
    distractors: [
      {
        es: 'Coordina el commit de todos los servicios mediante un orquestador que aplica dos fases de confirmación.',
        en: 'It coordinates the commit across services through an orchestrator applying two-phase commit.',
      },
      {
        es: 'Garantiza consistencia fuerte replicando el registro de eventos en todos los servicios participantes.',
        en: 'It guarantees strong consistency by replicating the event log across all participating services.',
      },
    ],
    explanation: {
      es: 'La saga acepta consistencia eventual: cada servicio confirma su parte y, si un paso falla, se ejecutan acciones compensatorias (por ejemplo reembolsar) porque ya no se puede hacer rollback. Precisamente existe para evitar el two-phase commit, que acopla y bloquea a todos los participantes.',
      en: 'A saga accepts eventual consistency: each service commits its part and, if a step fails, compensating actions run (for example issuing a refund) because a rollback is no longer possible. It exists precisely to avoid two-phase commit, which couples and blocks every participant.',
    },
  },
  {
    id: 'be-ms-03',
    topic: 'Mensajería',
    prompt: {
      es: '¿Por qué un consumidor de mensajes debe ser idempotente?',
      en: 'Why must a message consumer be idempotent?',
    },
    answer: {
      es: 'Porque la entrega "al menos una vez" puede repetir el mismo mensaje y procesarlo dos veces no debe duplicar efectos.',
      en: 'Because at-least-once delivery may repeat the same message and processing it twice must not duplicate effects.',
    },
    distractors: [
      {
        es: 'Porque el orden de los mensajes no está garantizado y procesarlos desordenados podría corromper el estado.',
        en: 'Because message order is not guaranteed and processing them out of order could corrupt the state.',
      },
      {
        es: 'Porque varios consumidores del mismo grupo reciben una copia del mensaje y todos deben llegar al mismo resultado.',
        en: 'Because several consumers in the same group receive a copy of the message and all must reach the same result.',
      },
    ],
    explanation: {
      es: 'Los brokers reintentan cuando no reciben el acuse, así que un fallo de red tras procesar produce un duplicado; la defensa es una clave de deduplicación o una operación naturalmente idempotente. El desorden es otro problema distinto, y dentro de un mismo grupo de consumidores el mensaje se entrega a uno solo.',
      en: 'Brokers retry when they do not receive the acknowledgement, so a network failure after processing produces a duplicate; the defence is a deduplication key or a naturally idempotent operation. Out-of-order delivery is a separate problem, and within a consumer group the message is delivered to only one member.',
    },
  },
  {
    id: 'be-ms-04',
    topic: 'Pruebas Spring',
    prompt: {
      es: '¿Cuál es la diferencia entre @WebMvcTest y @SpringBootTest?',
      en: 'What is the difference between @WebMvcTest and @SpringBootTest?',
    },
    answer: {
      es: '@WebMvcTest levanta solo la capa web con los colaboradores simulados; @SpringBootTest carga el contexto completo.',
      en: '@WebMvcTest loads only the web layer with mocked collaborators; @SpringBootTest loads the whole context.',
    },
    distractors: [
      {
        es: '@WebMvcTest usa un servidor embebido en un puerto aleatorio y @SpringBootTest simula las peticiones sin servidor.',
        en: '@WebMvcTest uses an embedded server on a random port and @SpringBootTest simulates requests without a server.',
      },
      {
        es: '@WebMvcTest prueba los controladores y @SpringBootTest está pensado para probar la capa de persistencia.',
        en: '@WebMvcTest tests controllers and @SpringBootTest is meant for testing the persistence layer.',
      },
    ],
    explanation: {
      es: 'La diferencia es el alcance del contexto y por tanto la velocidad: con @WebMvcTest se prueban serialización, validación y rutas usando MockMvc y @MockBean para los servicios. @SpringBootTest es el que puede arrancar un servidor real con webEnvironment RANDOM_PORT, y la capa de datos tiene su propio slice, @DataJpaTest.',
      en: 'The difference is context scope and therefore speed: with @WebMvcTest you test serialisation, validation and routing using MockMvc plus @MockBean for services. @SpringBootTest is the one that can start a real server with webEnvironment RANDOM_PORT, and the data layer has its own slice, @DataJpaTest.',
    },
  },
  {
    id: 'be-ms-05',
    topic: 'Pruebas',
    prompt: {
      es: '¿Qué ventaja aporta Testcontainers frente a una base de datos en memoria como H2?',
      en: 'What advantage does Testcontainers bring over an in-memory database such as H2?',
    },
    answer: {
      es: 'Prueba contra el mismo motor que producción, evitando diferencias de dialecto y comportamiento.',
      en: 'It tests against the same engine as production, avoiding dialect and behaviour differences.',
    },
    distractors: [
      {
        es: 'Acelera la suite porque el contenedor se reutiliza entre ejecuciones y no reinicia el esquema en cada prueba.',
        en: 'It speeds up the suite because the container is reused between runs and does not reset the schema per test.',
      },
      {
        es: 'Permite ejecutar las pruebas sin Docker instalado, ya que levanta el motor como proceso embebido.',
        en: 'It allows running tests without Docker installed, since it starts the engine as an embedded process.',
      },
    ],
    explanation: {
      es: 'El valor es la fidelidad: tipos, funciones, bloqueos y migraciones se comportan como en producción, algo que H2 solo aproxima. El costo es justamente el contrario al que sugieren los distractores: es más lento que H2 y requiere un entorno con Docker disponible.',
      en: 'The value is fidelity: types, functions, locking and migrations behave as in production, something H2 only approximates. The cost is precisely the opposite of what the distractors suggest: it is slower than H2 and requires an environment with Docker available.',
    },
  },
  {
    id: 'be-ms-06',
    topic: 'Observabilidad',
    prompt: {
      es: '¿Para qué sirve un trace id propagado entre servicios?',
      en: 'What is a trace id propagated across services used for?',
    },
    answer: {
      es: 'Para correlacionar los registros y tramos de una misma petición a lo largo de todos los servicios que atraviesa.',
      en: 'To correlate the logs and spans of a single request across every service it traverses.',
    },
    distractors: [
      {
        es: 'Para identificar de forma única al cliente que originó la petición y poder auditar su actividad.',
        en: 'To uniquely identify the client that originated the request so its activity can be audited.',
      },
      {
        es: 'Para deduplicar peticiones reintentadas, descartando las que repiten un identificador ya procesado.',
        en: 'To deduplicate retried requests, discarding those repeating an already processed identifier.',
      },
    ],
    explanation: {
      es: 'Sin correlación, depurar un fallo distribuido obliga a cruzar registros por marca de tiempo; el trace id atraviesa las llamadas por cabecera y permite reconstruir el árbol completo con su latencia por tramo. Identificar al cliente es tarea del contexto de usuario y deduplicar corresponde a una clave de idempotencia.',
      en: 'Without correlation, debugging a distributed failure means cross-referencing logs by timestamp; the trace id travels through headers and lets you rebuild the full tree with per-span latency. Identifying the client is the user context job, and deduplication belongs to an idempotency key.',
    },
  },
  {
    id: 'be-ms-07',
    topic: 'Comunicación',
    prompt: {
      es: '¿Cuándo conviene comunicación asíncrona por eventos en lugar de una llamada HTTP sincrónica entre servicios?',
      en: 'When is asynchronous event-based communication preferable to a synchronous HTTP call between services?',
    },
    answer: {
      es: 'Cuando el emisor no necesita la respuesta para continuar y se quiere desacoplar la disponibilidad de ambos servicios.',
      en: 'When the sender does not need the response to continue and you want to decouple the availability of both services.',
    },
    distractors: [
      {
        es: 'Cuando la operación es costosa, porque el broker la ejecuta con mayor prioridad que una petición HTTP.',
        en: 'When the operation is expensive, because the broker executes it with higher priority than an HTTP request.',
      },
      {
        es: 'Cuando hay que garantizar consistencia inmediata entre los datos de los dos servicios implicados.',
        en: 'When you must guarantee immediate consistency between the data of both services involved.',
      },
    ],
    explanation: {
      es: 'El evento permite que el consumidor esté caído sin romper al emisor, a cambio de consistencia eventual: justo lo contrario de garantizar consistencia inmediata, que exige una llamada sincrónica. El broker no acelera nada por sí mismo; solo desacopla en el tiempo.',
      en: 'An event lets the consumer be down without breaking the sender, at the price of eventual consistency: exactly the opposite of guaranteeing immediate consistency, which requires a synchronous call. The broker speeds nothing up by itself; it only decouples in time.',
    },
  },
];
