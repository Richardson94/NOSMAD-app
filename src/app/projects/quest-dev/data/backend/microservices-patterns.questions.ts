import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_MICROSERVICES_PATTERNS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-msp-01',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿En qué se diferencian el descubrimiento de servicios del lado del cliente y del lado del servidor?',
      en: 'How do client-side and server-side service discovery differ?',
    },
    answer: {
      es: 'En el lado del cliente el llamador consulta el registro y elige la instancia; en el del servidor el cliente llama a un equilibrador o puerta de enlace que resuelve las instancias por él.',
      en: 'On the client side the caller queries the registry and picks the instance; on the server side the client calls a load balancer or gateway that resolves instances for it.',
    },
    distractors: [
      {
        es: 'En el lado del servidor cada microservicio incrusta Spring Cloud LoadBalancer y Eureka; en el del cliente un Service de Kubernetes hace el enrutado.',
        en: 'On the server side each microservice embeds Spring Cloud LoadBalancer and Eureka; on the client side a Kubernetes Service does the routing.',
      },
      {
        es: 'No hay diferencia real: ambos se limitan a un health check periódico y el cliente siempre llama a un nombre DNS fijo.',
        en: 'There is no real difference: both amount to a periodic health check and the client always calls a fixed DNS name.',
      },
    ],
    explanation: {
      es: 'El patrón concreto en Spring Boot 3 es Eureka más Spring Cloud LoadBalancer en el llamador (lado cliente, Ribbon ya no existe) frente a un Service de Kubernetes o Spring Cloud Gateway que ocultan las instancias (lado servidor). Invertirlos es el error habitual de entrevistas, y un health check no decide quién resuelve el destino.',
      en: 'The concrete Spring Boot 3 pattern is Eureka plus Spring Cloud LoadBalancer on the caller (client side, Ribbon is gone) versus a Kubernetes Service or Spring Cloud Gateway that hide the instances (server side). Swapping them is the usual interview mistake, and a health check does not decide who resolves the target.',
    },
  },
  {
    id: 'be-msp-02',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Cuáles son las responsabilidades de un API gateway y por qué meterle lógica de negocio es un antipatrón?',
      en: 'What are the responsibilities of an API gateway and why is putting business logic in it an antipattern?',
    },
    answer: {
      es: 'Encaminar, autenticar, limitar tasa, terminar TLS y aplicar preocupaciones transversales; las reglas de dominio deben vivir en los servicios o el gateway se vuelve un monolito.',
      en: 'Routing, authentication, rate limiting, TLS termination and cross-cutting concerns; domain rules must live in the services or the gateway becomes a monolith.',
    },
    distractors: [
      {
        es: 'El gateway debe orquestar sagas, calcular precios y validar invariantes, porque es el único componente que ve todo el tráfico.',
        en: 'The gateway must orchestrate sagas, calculate prices and validate invariants, because it is the only component that sees all traffic.',
      },
      {
        es: 'Autenticar en el gateway es un antipatrón: cada servicio debe reimplementar la validación JWT para no acoplarse a la puerta de enlace.',
        en: 'Authenticating at the gateway is an antipattern: each service must reimplement JWT validation so it does not couple to the gateway.',
      },
    ],
    explanation: {
      es: 'Spring Cloud Gateway encaja filtros como TokenRelay, RequestRateLimiter o RewritePath, no casos de uso de pedidos o facturación. Si el gateway conoce el dominio, cada cambio de regla obliga a redesplegar el borde y reaparece el monolito. La autenticación en el borde sí es responsabilidad suya; lo que no debe hacer es sustituir al servicio dueño.',
      en: 'Spring Cloud Gateway fits filters such as TokenRelay, RequestRateLimiter or RewritePath, not order or billing use cases. If the gateway knows the domain, every rule change forces a redeploy of the edge and the monolith returns. Authentication at the edge is its job; what it must not do is replace the owning service.',
    },
  },
  {
    id: 'be-msp-03',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Qué problema resuelve el patrón backend for frontend?',
      en: 'What problem does the backend for frontend pattern solve?',
    },
    answer: {
      es: 'Dar a cada tipo de cliente un backend propio que compone y recorta las APIs, en lugar de forzar a web y móvil a compartir el mismo contrato.',
      en: 'Give each kind of client its own backend that composes and trims the APIs, instead of forcing web and mobile to share the same contract.',
    },
    distractors: [
      {
        es: 'Un único API gateway para todos los clientes ya es un BFF, porque traduce rutas y cabeceras en un solo lugar.',
        en: 'A single API gateway for every client is already a BFF, because it translates routes and headers in one place.',
      },
      {
        es: 'Mueve el renderizado de la interfaz al microservicio de dominio para no exponer DTOs distintos por canal.',
        en: 'It moves UI rendering into the domain microservice so distinct DTOs per channel are not exposed.',
      },
    ],
    explanation: {
      es: 'El BFF (por ejemplo un Spring WebMvc para la SPA y otro para la app móvil, o rutas distintas en Gateway) evita el contrato mínimo común que sobra en un canal y falta en el otro. Un gateway genérico no adapta el modelo por audiencia; renderizar HTML dentro del servicio de pedidos mezcla presentación y dominio.',
      en: 'A BFF (for example one Spring WebMvc for the SPA and another for the mobile app, or distinct Gateway routes) avoids the lowest-common-denominator contract that is too much for one channel and too little for the other. A generic gateway does not adapt the model per audience; rendering HTML inside the orders service mixes presentation and domain.',
    },
  },
  {
    id: 'be-msp-04',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Qué aporta la configuración centralizada y el refresco dinámico de propiedades en Spring Boot 3?',
      en: 'What do centralised configuration and dynamic property refresh provide in Spring Boot 3?',
    },
    answer: {
      es: 'Un servidor de configuración y un refresco con @RefreshScope o /actuator/refresh para cambiar propiedades sin redesplegar el proceso.',
      en: 'A configuration server and a refresh with @RefreshScope or /actuator/refresh so properties change without redeploying the process.',
    },
    distractors: [
      {
        es: 'Basta con perfiles en application.yml dentro del jar: cambiar el perfil activo refresca los beans sin reinicio.',
        en: 'Profiles in application.yml inside the jar are enough: changing the active profile refreshes the beans without a restart.',
      },
      {
        es: 'Las variables de entorno que inyecta Kubernetes actualizan solas los beans @ConfigurationProperties, sin @RefreshScope.',
        en: 'Environment variables injected by Kubernetes update @ConfigurationProperties beans on their own, without @RefreshScope.',
      },
    ],
    explanation: {
      es: 'Spring Cloud Config sirve YAML versionado y, tras POST a /actuator/refresh o un evento de Spring Cloud Bus, los beans @RefreshScope se reconstruyen. Un perfil empaquetado no es centralizado ni dinámico, y un cambio de env var en el pod no muta el Environment ya ligado salvo que se dispare el refresco o se reinicie.',
      en: 'Spring Cloud Config serves versioned YAML and, after POST to /actuator/refresh or a Spring Cloud Bus event, @RefreshScope beans are rebuilt. A packaged profile is neither centralised nor dynamic, and an env var change on the pod does not mutate the already bound Environment unless a refresh is triggered or the process restarts.',
    },
  },
  {
    id: 'be-msp-05',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Qué responsabilidades tiene un sidecar frente a las de una malla de servicios?',
      en: 'What are the responsibilities of a sidecar versus those of a service mesh?',
    },
    answer: {
      es: 'El sidecar es un proceso auxiliar en el mismo pod (proxy o agente); la malla es la capa de infraestructura, plano de control más sidecars, que aplica mTLS, tráfico y telemetría a toda la flota.',
      en: 'A sidecar is a helper process in the same pod (proxy or agent); a mesh is the infrastructure layer, control plane plus sidecars, that applies mTLS, traffic and telemetry across the whole fleet.',
    },
    distractors: [
      {
        es: 'El sidecar es Spring Cloud Gateway en un clúster dedicado; la malla es ese mismo gateway con más rutas.',
        en: 'The sidecar is Spring Cloud Gateway in a dedicated cluster; the mesh is that same gateway with more routes.',
      },
      {
        es: 'La malla sustituye por completo a timeouts, reintentos y cortacircuitos en el código, así que Resilience4j deja de hacer falta.',
        en: 'The mesh fully replaces timeouts, retries and circuit breakers in code, so Resilience4j is no longer needed.',
      },
    ],
    explanation: {
      es: 'En Kubernetes el patrón sidecar es un contenedor Envoy o un agente de métricas junto al de Spring Boot; Istio o Linkerd convierten esos sidecars en una malla con políticas centrales. Un API gateway no vive en el pod de cada servicio. La malla puede reintentar a nivel de red, pero la idempotencia y los timeouts de negocio siguen en la aplicación.',
      en: 'In Kubernetes the sidecar pattern is an Envoy container or a metrics agent next to the Spring Boot one; Istio or Linkerd turn those sidecars into a mesh with central policies. An API gateway does not live in each service pod. The mesh can retry at the network level, but business idempotency and timeouts still belong in the application.',
    },
  },
  {
    id: 'be-msp-06',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Qué problema de la doble escritura resuelve el patrón outbox transaccional?',
      en: 'What dual-write problem does the transactional outbox pattern solve?',
    },
    answer: {
      es: 'Evita confirmar el estado de negocio y publicar el evento en dos sistemas distintos: el evento se inserta en una tabla outbox en la misma transacción y un relé lo publica después.',
      en: 'It avoids committing business state and publishing the event to two different systems: the event is inserted into an outbox table in the same transaction and a relay publishes it afterwards.',
    },
    distractors: [
      {
        es: 'Coordina un commit de dos fases entre la base de datos y Kafka para que ambos confirmen o ambos deshagan.',
        en: 'It coordinates a two-phase commit between the database and Kafka so both confirm or both roll back.',
      },
      {
        es: 'Publica primero en el broker y luego guarda con JPA; si la persistencia falla, se borra el mensaje del topic.',
        en: 'It publishes to the broker first and then saves with JPA; if persistence fails, the message is deleted from the topic.',
      },
    ],
    explanation: {
      es: 'La doble escritura aparece al hacer save() y kafkaTemplate.send() seguidos: uno puede triunfar y el otro no. El outbox mete el payload en la misma transacción @Transactional y Debezium o un poller lo lee después; no es XA ni borrar de un topic, que de por sí es inmutable. Un TransactionalEventListener AFTER_COMMIT sigue siendo doble escritura si Kafka falla tras el commit.',
      en: 'Dual write appears when save() and kafkaTemplate.send() run in sequence: one can succeed and the other fail. The outbox puts the payload in the same @Transactional transaction and Debezium or a poller reads it later; it is not XA, nor deleting from a topic, which is immutable by itself. A TransactionalEventListener AFTER_COMMIT is still a dual write if Kafka fails after the commit.',
    },
  },
  {
    id: 'be-msp-07',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Cómo integra sistemas la captura de cambios de datos sin acoplar el código de la aplicación?',
      en: 'How does change data capture integrate systems without coupling application code?',
    },
    answer: {
      es: 'Lee el registro de transacciones del motor y emite los cambios ya comprometidos, por ejemplo Debezium sobre el WAL de PostgreSQL hacia Kafka.',
      en: 'It reads the engine transaction log and emits already committed changes, for example Debezium on the PostgreSQL WAL toward Kafka.',
    },
    distractors: [
      {
        es: 'Publicar un ApplicationEvent de Spring tras el save ya es CDC, porque el evento sale después de confirmar la transacción.',
        en: 'Publishing a Spring ApplicationEvent after save is already CDC, because the event leaves after the transaction commits.',
      },
      {
        es: 'Un @Scheduled que recorre la tabla de pedidos y envía las filas nuevas al broker es la forma idiomática de CDC en Spring.',
        en: 'A @Scheduled job that scans the orders table and sends new rows to the broker is the idiomatic CDC form in Spring.',
      },
    ],
    explanation: {
      es: 'CDC de verdad es un conector al log (slot de replicación, binlog), no código en el servicio: así se evitan olvidos en un segundo punto de escritura. ApplicationEvent sigue en el proceso de la aplicación, y el sondeo periódico es polling con carga y huecos, no captura del WAL.',
      en: 'Real CDC is a connector to the log (replication slot, binlog), not code in the service: that way a second write path cannot be forgotten. ApplicationEvent still lives in the application process, and periodic scanning is polling with load and gaps, not WAL capture.',
    },
  },
  {
    id: 'be-msp-08',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Cuándo conviene que el evento transporte el estado en lugar de consultar al servicio dueño?',
      en: 'When should an event carry state instead of querying the owning service?',
    },
    answer: {
      es: 'Cuando el consumidor puede aplicar el cambio con los datos del mensaje y no debe atar su disponibilidad a una llamada síncrona al dueño.',
      en: 'When the consumer can apply the change with the data in the message and must not tie its availability to a synchronous call to the owner.',
    },
    distractors: [
      {
        es: 'Siempre hay que consultar al dueño tras el evento, porque solo así se garantiza consistencia fuerte entre ambos servicios.',
        en: 'The owner must always be queried after the event, because only then is strong consistency between both services guaranteed.',
      },
      {
        es: 'El evento debe llevar solo el identificador; el consumidor hidrata el agregado con un GET para no inflar el mensaje.',
        en: 'The event should carry only the identifier; the consumer hydrates the aggregate with a GET so the message does not bloat.',
      },
    ],
    explanation: {
      es: 'Event-carried state transfer pone en el payload orderId, estado e importe para que facturación proyecte sin llamar a pedidos. Consultar al dueño es notificación delgada y reintroduce el acoplamiento síncrono que el evento pretendía quitar; la consistencia que se obtiene es eventual, no fuerte.',
      en: 'Event-carried state transfer puts orderId, status and amount in the payload so billing can project without calling orders. Querying the owner is a thin notification and puts back the synchronous coupling the event was meant to remove; the consistency you get is eventual, not strong.',
    },
  },
  {
    id: 'be-msp-09',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿En qué consiste el patrón de agregación o composición para consultas entre servicios?',
      en: 'What does the aggregation or composition pattern consist of for queries across services?',
    },
    answer: {
      es: 'Un compositor llama a varios servicios, combina las respuestas y devuelve un único resultado, sin hacer el join en una base compartida.',
      en: 'A composer calls several services, combines the responses and returns a single result, without performing the join in a shared database.',
    },
    distractors: [
      {
        es: 'Se abre una vista SQL que une los esquemas de pedidos y clientes, porque el join en base es más barato que varias llamadas HTTP.',
        en: 'A SQL view is opened that joins the orders and customers schemas, because a database join is cheaper than several HTTP calls.',
      },
      {
        es: 'Cada servicio devuelve el grafo completo de colaboradores en cada GET, de modo que el cliente nunca necesita un compositor.',
        en: 'Each service returns the full collaborator graph on every GET, so the client never needs a composer.',
      },
    ],
    explanation: {
      es: 'El patrón API composition vive en un BFF o en un servicio orquestador que usa RestClient o WebClient en paralelo y fusiona DTOs. Un join entre esquemas es el antipatrón de base compartida. Inflar cada API con datos ajenos acopla los ciclos de vida y no es composición, es fugas de dominio.',
      en: 'The API composition pattern lives in a BFF or an orchestrating service that uses RestClient or WebClient in parallel and merges DTOs. A join across schemas is the shared-database antipattern. Inflating each API with foreign data couples release cycles and is not composition, it is domain leakage.',
    },
  },
  {
    id: 'be-msp-10',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Para qué mantiene un servicio una vista materializada cuando las consultas cruzan dominios?',
      en: 'Why does a service keep a materialised view when queries cross domains?',
    },
    answer: {
      es: 'Conserva una proyección local alimentada por eventos para responder lecturas sin orquestar llamadas síncronas a otros dueños.',
      en: 'It keeps a local projection fed by events so reads can be answered without orchestrating synchronous calls to other owners.',
    },
    distractors: [
      {
        es: 'Es lo mismo que componer en cada GET: se llama a los colaboradores y se cachea la respuesta unos segundos en Redis.',
        en: 'It is the same as composing on every GET: collaborators are called and the response is cached in Redis for a few seconds.',
      },
      {
        es: 'Todos los equipos escriben en un Elasticsearch compartido, que hace las veces de vista única para reporting cruzado.',
        en: 'Every team writes to a shared Elasticsearch, which acts as the single view for cross reporting.',
      },
    ],
    explanation: {
      es: 'En CQRS el consumidor de Kafka actualiza su propia tabla de lectura (por ejemplo pedidos con nombre de cliente ya denormalizado). Eso no es composición en caliente ni un almacén compartido: el dueño de la vista es un solo servicio, y la frescura es eventual a cambio de lecturas locales rápidas.',
      en: 'In CQRS the Kafka consumer updates its own read table (for example orders with the customer name already denormalised). That is not hot composition nor a shared store: one service owns the view, and freshness is eventual in exchange for fast local reads.',
    },
  },
  {
    id: 'be-msp-11',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Por qué la base de datos compartida es un antipatrón entre microservicios?',
      en: 'Why is a shared database an antipattern between microservices?',
    },
    answer: {
      es: 'Acopla los esquemas y los ciclos de despliegue: un cambio de columna puede romper a otros servicios y desaparece la autonomía.',
      en: 'It couples schemas and release cycles: a column change can break other services and autonomy disappears.',
    },
    distractors: [
      {
        es: 'Compartir la instancia está bien si cada servicio usa sus propias tablas, porque no hay contención de conexiones ni de esquema.',
        en: 'Sharing the instance is fine if each service uses its own tables, because there is no connection or schema contention.',
      },
      {
        es: 'Base de datos por servicio impide el reporting, así que compartir el modelo relacional es la única opción viable.',
        en: 'Database per service blocks reporting, so sharing the relational model is the only viable option.',
      },
    ],
    explanation: {
      es: 'El patrón correcto es base (o esquema estrictamente privado) por servicio; incluso tablas distintas en la misma instancia invitan a un JOIN furtivo y a bloqueos cruzados. El reporting se resuelve con eventos, CDC o un almacén de lectura, no reabriendo el esquema. Sin frontera de persistencia no hay frontera de despliegue.',
      en: 'The right pattern is a database (or a strictly private schema) per service; even distinct tables on the same instance invite a stealth JOIN and cross locking. Reporting is solved with events, CDC or a read store, not by reopening the schema. Without a persistence boundary there is no deployment boundary.',
    },
  },
  {
    id: 'be-msp-12',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Qué síntomas delatan un monolito distribuido?',
      en: 'What symptoms give away a distributed monolith?',
    },
    answer: {
      es: 'Despliegues en bloque, llamadas síncronas charlatanas y librerías de dominio compartidas que impiden cambiar un servicio en aislamiento.',
      en: 'Lockstep deploys, chatty synchronous calls and shared domain libraries that prevent changing one service in isolation.',
    },
    distractors: [
      {
        es: 'Tener muchos procesos pequeños ya certifica que el sistema es de microservicios, aunque se desplieguen juntos.',
        en: 'Having many small processes already certifies the system as microservices, even if they are deployed together.',
      },
      {
        es: 'Si hay Kafka de por medio, los servicios están desacoplados aunque compartan entidades JPA en un jar interno.',
        en: 'If Kafka is in the middle, the services are decoupled even when they share JPA entities in an internal jar.',
      },
    ],
    explanation: {
      es: 'El síntoma clave es la pérdida de despliegue independiente: un cambio en un DTO común o en una llamada RestClient obliga a alinear versiones. Un bus de mensajes no cura un modelo compartido, y partir el proceso sin partir el contrato produce la misma coordinación que el monolito, con latencia de red extra.',
      en: 'The key symptom is the loss of independent deployment: a change in a shared DTO or in a RestClient call forces versions to line up. A message bus does not cure a shared model, and splitting the process without splitting the contract yields the same coordination as the monolith, plus network latency.',
    },
  },
  {
    id: 'be-msp-13',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Por qué el reintento con retroceso exponencial depende de la idempotencia?',
      en: 'Why does retry with exponential backoff depend on idempotency?',
    },
    answer: {
      es: 'El retroceso alivia la saturación, pero cada reintento puede aplicar otra vez el efecto; sin idempotencia se duplican cargos o altas.',
      en: 'Backoff eases saturation, but each retry can apply the effect again; without idempotency charges or creates are duplicated.',
    },
    distractors: [
      {
        es: 'El retroceso exponencial hace seguros los POST de pago por sí solo, así que la cabecera Idempotency-Key sobra.',
        en: 'Exponential backoff makes payment POSTs safe by itself, so the Idempotency-Key header is unnecessary.',
      },
      {
        es: 'El reintento sustituye al circuit breaker: con espera creciente nunca hace falta fallar rápido.',
        en: 'Retry replaces the circuit breaker: with growing waits it is never necessary to fail fast.',
      },
    ],
    explanation: {
      es: 'Resilience4j Retry con intervalFunction exponencial reduce oleadas, no duplicados; el servidor debe reconocer una clave o una operación naturalmente repetible. Reintentar un cargo no idempotente crea dos cobros, y sin cortacircuito los reintentos alimentan a un servicio ya caído.',
      en: 'Resilience4j Retry with an exponential intervalFunction reduces waves, not duplicates; the server must recognise a key or a naturally repeatable operation. Retrying a non-idempotent charge creates two collections, and without a breaker retries feed a service that is already down.',
    },
  },
  {
    id: 'be-msp-14',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Cómo se reparte el presupuesto de tiempos de espera a lo largo de una cadena de llamadas?',
      en: 'How is the timeout budget split along a chain of calls?',
    },
    answer: {
      es: 'El timeout interno debe ser menor que el del llamador, para que el callee falle antes de que el caller agote su propio presupuesto.',
      en: 'The inner timeout must be smaller than the caller timeout, so the callee fails before the caller exhausts its own budget.',
    },
    distractors: [
      {
        es: 'Se pone el mismo valor, por ejemplo 5 segundos, en el gateway, en el RestClient y en JDBC, para que todo el camino sea coherente.',
        en: 'The same value, for example 5 seconds, is set on the gateway, on RestClient and on JDBC, so the whole path stays consistent.',
      },
      {
        es: 'El timeout del colaborador interno debe ser más largo que el del gateway, para darle tiempo a terminar aunque el borde ya haya respondido.',
        en: 'The inner collaborator timeout must be longer than the gateway timeout, to give it time to finish even if the edge already responded.',
      },
    ],
    explanation: {
      es: 'Si el gateway espera 2 s, el servicio puede dar 800 ms al RestClient y 300 ms al pool JDBC: así el fallo se detecta donde aún hay margen. Timeouts iguales hacen que varias capas esperen juntas y se acumulen hilos; un interno más largo deja trabajo huérfano después de que el cliente ya recibió un error.',
      en: 'If the gateway waits 2 s, the service can give 800 ms to RestClient and 300 ms to the JDBC pool: the failure is then detected where budget remains. Equal timeouts make several layers wait together and pile up threads; a longer inner timeout leaves orphan work after the client already received an error.',
    },
  },
  {
    id: 'be-msp-15',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Cómo implementan los mamparos el aislamiento con pools de hilos o de conexiones separados?',
      en: 'How do bulkheads implement isolation with separate thread or connection pools?',
    },
    answer: {
      es: 'Asignan a cada dependencia su propio ThreadPoolTaskExecutor o pool Hikari, para que un colaborador lento no agote el pool de Tomcat.',
      en: 'They assign each dependency its own ThreadPoolTaskExecutor or Hikari pool, so a slow collaborator does not exhaust the Tomcat pool.',
    },
    distractors: [
      {
        es: 'Un único ejecutor compartido es más eficiente, porque los hilos ociosos de una dependencia cubren los picos de otra.',
        en: 'A single shared executor is more efficient, because idle threads of one dependency cover spikes of another.',
      },
      {
        es: 'El circuit breaker ya aísla recursos: al abrir el circuito libera el pool y los mamparos sobran.',
        en: 'The circuit breaker already isolates resources: when the circuit opens it frees the pool and bulkheads are redundant.',
      },
    ],
    explanation: {
      es: 'El patrón bulkhead en Spring es un @Bean TaskExecutor por cliente HTTP o un Resilience4j Bulkhead con maxConcurrentCalls, más un datasource propio si hace falta. Compartir el pool es justo lo que transmite la saturación. El cortacircuito reacciona a errores; los mamparos limitan la concurrencia antes de que el pool común llegue a cero.',
      en: 'The bulkhead pattern in Spring is a per HTTP client @Bean TaskExecutor or a Resilience4j Bulkhead with maxConcurrentCalls, plus a dedicated datasource if needed. Sharing the pool is exactly what spreads saturation. The breaker reacts to errors; bulkheads cap concurrency before the common pool reaches zero.',
    },
  },
  {
    id: 'be-msp-16',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Qué logra la limitación de tasa por cliente en un API gateway?',
      en: 'What does per-client rate limiting achieve on an API gateway?',
    },
    answer: {
      es: 'Un tope de peticiones por clave o usuario para que un cliente no consuma la capacidad del resto, por ejemplo RequestRateLimiter con Redis.',
      en: 'A cap of requests per key or user so one client does not consume the capacity of the rest, for example RequestRateLimiter with Redis.',
    },
    distractors: [
      {
        es: 'Limita el QPS global de la instancia por igual para todos, que es suficiente para proteger el cluster.',
        en: 'It limits the global QPS of the instance equally for everyone, which is enough to protect the cluster.',
      },
      {
        es: 'Abre el circuit breaker del cliente lento y deja de enrutarlo hasta que su latencia baje.',
        en: 'It opens the circuit breaker of the slow client and stops routing it until its latency drops.',
      },
    ],
    explanation: {
      es: 'En Spring Cloud Gateway el filtro RequestRateLimiter más un KeyResolver por apiKey o principal aplica un RedisRateLimiter distinto a cada consumidor. Un cupo global permite que un solo cliente se lo coma entero. El cortacircuito mira fallos de una dependencia, no el abuso de un llamador.',
      en: 'In Spring Cloud Gateway the RequestRateLimiter filter plus a KeyResolver per apiKey or principal applies a distinct RedisRateLimiter to each consumer. A global quota lets a single client eat it whole. The circuit breaker watches failures of a dependency, not abuse by a caller.',
    },
  },
  {
    id: 'be-msp-17',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Por qué la API debe ser compatible hacia atrás durante un despliegue progresivo?',
      en: 'Why must the API stay backward compatible during a rolling deployment?',
    },
    answer: {
      es: 'Porque coexisten instancias viejas y nuevas; un cambio aditivo permite que ambas hablen, un rename o un campo obligatorio nuevo rompe a mitad de la flota.',
      en: 'Because old and new instances coexist; an additive change lets both talk, a rename or a new required field breaks half of the fleet.',
    },
    distractors: [
      {
        es: 'El rolling update de Kubernetes sustituye todos los pods antes de darles tráfico, así que un cambio rompedor es seguro.',
        en: 'A Kubernetes rolling update replaces every pod before they receive traffic, so a breaking change is safe.',
      },
      {
        es: 'Publicar /v2 basta aunque las instancias v1 sigan llamando nombres de campo de v2 en el mismo path.',
        en: 'Publishing /v2 is enough even if v1 instances keep calling v2 field names on the same path.',
      },
    ],
    explanation: {
      es: 'Durante el rollout hay N-1 y N a la vez: un Jackson que exige un campo nuevo falla contra productores viejos. La receta es añadir propiedades opcionales, no renombrar, y solo retirar lo deprecado cuando no quede ningún pod antiguo. maxUnavailable no elimina esa ventana, y /v2 no ayuda si el contrato viejo ya se rompió en el mismo recurso.',
      en: 'During the rollout N-1 and N run at once: Jackson that requires a new field fails against old producers. The recipe is adding optional properties, not renaming, and retiring the deprecated bits only when no old pod remains. maxUnavailable does not remove that window, and /v2 does not help if the old contract was already broken on the same resource.',
    },
  },
  {
    id: 'be-msp-18',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Qué exige la evolución del esquema de los eventos en compatibilidad hacia atrás y hacia adelante?',
      en: 'What does event schema evolution require for backward and forward compatibility?',
    },
    answer: {
      es: 'Los consumidores nuevos deben leer eventos viejos (hacia atrás) y los viejos deben ignorar campos nuevos (hacia adelante); se añaden campos opcionales y no se reutilizan números Avro.',
      en: 'New consumers must read old events (backward) and old ones must ignore new fields (forward); optional fields are added and Avro numbers are not reused.',
    },
    distractors: [
      {
        es: 'Hacia atrás significa que los consumidores viejos aceptan eventos nuevos; hacia adelante, que los nuevos leen el topic antiguo.',
        en: 'Backward means old consumers accept new events; forward means new ones read the old topic.',
      },
      {
        es: 'Borrar un campo requerido es compatible hacia atrás porque los productores nuevos dejan de enviarlo y el topic se aligera.',
        en: 'Deleting a required field is backward compatible because new producers stop sending it and the topic gets lighter.',
      },
    ],
    explanation: {
      es: 'En Schema Registry, BACKWARD es esquema nuevo leyendo datos viejos; FORWARD es esquema viejo leyendo datos nuevos. Invertir las etiquetas es la trampa clásica. Quitar un campo requerido rompe a los lectores antiguos; la vía segura es añadir opcionales, defaults y no reciclar ids de campo.',
      en: 'In Schema Registry, BACKWARD is a new schema reading old data; FORWARD is an old schema reading new data. Swapping the labels is the classic trap. Removing a required field breaks old readers; the safe path is adding optionals, defaults and not recycling field ids.',
    },
  },
  {
    id: 'be-msp-19',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿En qué se diferencian las sondas de vivacidad y de disponibilidad en Spring Boot 3?',
      en: 'How do liveness and readiness probes differ in Spring Boot 3?',
    },
    answer: {
      es: 'La de vivacidad pide reiniciar el proceso si está atascado; la de disponibilidad lo saca del equilibrador mientras arranca o si una dependencia crítica no está lista.',
      en: 'Liveness asks to restart the process if it is stuck; readiness takes it out of the load balancer while it starts or if a critical dependency is not ready.',
    },
    distractors: [
      {
        es: 'Ambas deben incluir un ping a la base de datos: si el motor cae, Kubernetes reinicia el pod hasta que vuelva.',
        en: 'Both must include a database ping: if the engine goes down, Kubernetes restarts the pod until it comes back.',
      },
      {
        es: 'Son alias de /actuator/health y deben publicar todos los indicadores; el kubelet ya distingue el significado.',
        en: 'They are aliases of /actuator/health and must publish every indicator; the kubelet already distinguishes the meaning.',
      },
    ],
    explanation: {
      es: 'Actuator expone livenessState y readinessState: un deadlock dispara liveness y un restart; un DataSource aún cerrado solo marca readiness DOWN y el Service deja de enviarle tráfico. Meter el ping de base en liveness provoca tormentas de reinicio cuando la base está lenta, y /health agrupado no es un alias de ambas sondas.',
      en: 'Actuator exposes livenessState and readinessState: a deadlock trips liveness and a restart; a DataSource still closed only marks readiness DOWN and the Service stops sending it traffic. Putting the database ping on liveness causes restart storms when the database is slow, and grouped /health is not an alias of both probes.',
    },
  },
  {
    id: 'be-msp-20',
    topic: 'Patrones de microservicios',
    prompt: {
      es: '¿Cómo se aplica la higuera estranguladora a nivel de infraestructura al migrar un monolito?',
      en: 'How is the strangler fig applied at infrastructure level when migrating a monolith?',
    },
    answer: {
      es: 'Un proxy, Ingress o Spring Cloud Gateway desvía rutas concretas al servicio nuevo mientras el resto sigue al monolito, hasta que este se queda sin tráfico.',
      en: 'A proxy, Ingress or Spring Cloud Gateway diverts concrete routes to the new service while the rest still go to the monolith, until the monolith is left with no traffic.',
    },
    distractors: [
      {
        es: 'Se reescribe el monolito en un repo nuevo y se cambia el DNS en un corte de fin de semana, cuando hay paridad funcional.',
        en: 'The monolith is rewritten in a new repo and DNS is switched on a weekend cutover once functional parity is reached.',
      },
      {
        es: 'Se extraen paquetes a módulos Maven pero se sigue publicando un único artefacto desplegable, que ya es estrangular.',
        en: 'Packages are extracted to Maven modules but a single deployable artefact is still published, which already counts as strangling.',
      },
    ],
    explanation: {
      es: 'A nivel de infraestructura el punto de interceptación es el borde: Path=/orders/** en Gateway apunta al orders-service y el resto sigue al monolito, con posibilidad de revertir una ruta. El corte grande es justo lo que la higuera evita. Extraer módulos sin partir el proceso es un monolito modular, no una migración de tráfico.',
      en: 'At infrastructure level the interception point is the edge: Path=/orders/** on Gateway points to the orders-service and the rest still hit the monolith, with the option to revert one route. The big-bang cutover is exactly what the fig avoids. Extracting modules without splitting the process is a modular monolith, not a traffic migration.',
    },
  },
];
