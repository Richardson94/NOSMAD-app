import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_DISTRIBUTED_SYSTEMS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-dist-01',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué añade PACELC al teorema CAP cuando el sistema funciona sin particiones?',
      en: 'What does PACELC add to the CAP theorem when the system runs without partitions?',
    },
    answer: {
      es: 'Que incluso sin partición sigue existiendo un compromiso entre menor latencia y mayor consistencia al replicar.',
      en: 'That even without a partition there is still a trade-off between lower latency and stronger consistency when replicating.',
    },
    distractors: [
      {
        es: 'Que durante una partición el sistema debe sacrificar la consistencia o la disponibilidad de las peticiones.',
        en: 'That during a partition the system must sacrifice consistency or availability of the requests.',
      },
      {
        es: 'Que la tolerancia a particiones deja de ser necesaria cuando todos los nodos viven en el mismo centro de datos.',
        en: 'That partition tolerance stops being necessary when all nodes live in the same data centre.',
      },
    ],
    explanation: {
      es: 'PACELC se lee como "si hay Partición, elige A o C; en caso contrario (Else), elige L o C", y su aportación real es esa segunda mitad, porque esperar la confirmación de más réplicas cuesta milisegundos en el camino normal. La primera opción incorrecta enuncia exactamente el teorema CAP, que es el punto de partida y no lo que PACELC añade; la segunda es el error clásico de creer que P es opcional, cuando cualquier red puede fallar. Cassandra se clasifica como PA/EL y una base como VoltDB como PC/EC.',
      en: 'PACELC reads as "if there is a Partition, choose A or C; Else, choose L or C", and its real contribution is that second half, because waiting for more replicas to acknowledge costs milliseconds on the normal path. The first wrong option states exactly the CAP theorem, which is the starting point rather than what PACELC adds; the second is the classic mistake of believing P is optional, when any network can fail. Cassandra is classified as PA/EL and a database such as VoltDB as PC/EC.',
    },
  },
  {
    id: 'th-dist-02',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: 'En un sistema con consistencia eventual, ¿qué garantiza la garantía de sesión "leer lo que acabas de escribir"?',
      en: 'In an eventually consistent system, what does the read-your-writes session guarantee promise?',
    },
    answer: {
      es: 'Que el mismo cliente vuelve a ver su propia escritura, aunque otros clientes puedan seguir leyendo el valor anterior.',
      en: 'That the same client sees its own write again, even though other clients may still read the previous value.',
    },
    distractors: [
      {
        es: 'Que todos los clientes observan la escritura en cuanto el nodo primario la confirma como completada.',
        en: 'That every client observes the write as soon as the primary node confirms it as completed.',
      },
      {
        es: 'Que las lecturas devuelven los valores en el mismo orden en que fueron escritos, para cualquier cliente del sistema.',
        en: 'That reads return values in the same order in which they were written, for any client of the system.',
      },
    ],
    explanation: {
      es: 'Es una garantía por sesión, no global: se suele implementar enrutando al cliente al nodo primario durante una ventana de tiempo o llevando un testigo de versión, como el LSN o el GTID alcanzado por su última escritura. La primera opción incorrecta describe consistencia fuerte o linealizabilidad, que es mucho más cara; la segunda describe lecturas monótonas y orden total, otra familia de garantías de la misma taxonomía.',
      en: 'It is a per-session guarantee, not a global one: it is usually implemented by routing the client to the primary node for a time window or by carrying a version token such as the LSN or GTID reached by its last write. The first wrong option describes strong consistency or linearizability, which is far more expensive; the second describes monotonic reads and total ordering, another family of guarantees from the same taxonomy.',
    },
  },
  {
    id: 'th-dist-03',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Para qué sirve una clave de idempotencia en una API que cobra pagos?',
      en: 'What is an idempotency key for in an API that charges payments?',
    },
    answer: {
      es: 'Para que el servidor reconozca un reintento de la misma operación y devuelva el resultado original sin volver a ejecutarla.',
      en: 'So the server recognises a retry of the same operation and returns the original result without executing it again.',
    },
    distractors: [
      {
        es: 'Para que el cliente reintente sin riesgo, porque los métodos PUT y DELETE ya son idempotentes por definición del protocolo.',
        en: 'So the client can retry safely, because PUT and DELETE are already idempotent by definition of the protocol.',
      },
      {
        es: 'Para evitar ataques de repetición, validando que una petición firmada no se pueda reenviar una segunda vez.',
        en: 'To prevent replay attacks, validating that a signed request cannot be sent a second time.',
      },
    ],
    explanation: {
      es: 'El servidor guarda la clave recibida en la cabecera Idempotency-Key junto con la respuesta durante una ventana de tiempo, de modo que un reintento tras un timeout devuelve el mismo cargo en lugar de crear otro. La idempotencia de PUT y DELETE es una propiedad semántica del método, cierta pero insuficiente para POST y para efectos externos como mover dinero; y rechazar el reenvío de una petición firmada es un nonce de seguridad, que persigue un objetivo distinto porque haría fallar el reintento legítimo.',
      en: 'The server stores the key received in the Idempotency-Key header together with the response for a time window, so a retry after a timeout returns the same charge instead of creating another one. The idempotency of PUT and DELETE is a semantic property of the method, true but not enough for POST or for external effects such as moving money; and rejecting the resend of a signed request is a security nonce, which pursues a different goal because it would make the legitimate retry fail.',
    },
  },
  {
    id: 'th-dist-04',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Por qué se dice que la entrega "exactamente una vez" es una ilusión en la mensajería distribuida?',
      en: 'Why is exactly-once delivery said to be an illusion in distributed messaging?',
    },
    answer: {
      es: 'Porque el emisor solo puede reintentar o no reintentar; lo alcanzable es entrega al menos una vez combinada con un procesamiento idempotente.',
      en: 'Because the sender can only retry or not retry; what is achievable is at-least-once delivery combined with idempotent processing.',
    },
    distractors: [
      {
        es: 'Porque la entrega como máximo una vez descarta el mensaje cuando la confirmación se pierde por un fallo de red.',
        en: 'Because at-most-once delivery drops the message when the acknowledgement is lost due to a network failure.',
      },
      {
        es: 'Porque ningún broker puede agrupar la escritura del mensaje y el avance del desplazamiento dentro de una misma transacción.',
        en: 'Because no broker can group writing the message and advancing the offset inside a single transaction.',
      },
    ],
    explanation: {
      es: 'Es el problema de los dos generales: si se pierde la confirmación, el emisor no puede distinguir entre un mensaje no entregado y una respuesta perdida, así que reintentar duplica y no reintentar pierde. La primera opción incorrecta describe correctamente el modo como máximo una vez, que es la otra rama real del compromiso, no la razón de la ilusión. La segunda es falsa a día de hoy: Kafka ofrece semántica de exactamente una vez con enable.idempotence y productores transaccionales, pero solo dentro de su propio límite, y el efecto sobre un sistema externo sigue exigiendo deduplicación.',
      en: 'This is the two generals problem: if the acknowledgement is lost, the sender cannot tell an undelivered message from a lost response, so retrying duplicates and not retrying loses. The first wrong option correctly describes the at-most-once mode, which is the other real branch of the trade-off rather than the reason for the illusion. The second is false today: Kafka offers exactly-once semantics with enable.idempotence and transactional producers, but only inside its own boundary, and the effect on an external system still requires deduplication.',
    },
  },
  {
    id: 'th-dist-05',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Por qué el commit en dos fases puede dejar bloqueados a todos los participantes?',
      en: 'Why can two-phase commit leave all participants blocked?',
    },
    answer: {
      es: 'Porque si el coordinador cae después del voto, los participantes quedan en duda y mantienen los recursos bloqueados hasta que se recupere.',
      en: 'Because if the coordinator dies after the vote, participants are left in doubt and keep their resources locked until it recovers.',
    },
    distractors: [
      {
        es: 'Porque el protocolo necesita el voto de una mayoría de nodos y se detiene mientras no consiga reunir ese quórum.',
        en: 'Because the protocol needs a majority vote and halts while it cannot gather that quorum.',
      },
      {
        es: 'Porque mantiene bloqueos de escritura durante toda la transacción y eso multiplica los interbloqueos entre participantes concurrentes.',
        en: 'Because it holds write locks for the whole transaction and that multiplies deadlocks between concurrent participants.',
      },
    ],
    explanation: {
      es: 'Tras responder "preparado" un participante ya no puede decidir por su cuenta, porque no sabe si el resto votó a favor: el coordinador es un punto único de fallo y su caída convierte la espera en indefinida. La mayoría de votos es la condición de los algoritmos de consenso como Raft o Paxos, que precisamente por eso no bloquean mientras sobreviva el quórum; y el aumento de interbloqueos es una consecuencia real pero secundaria, no la causa del bloqueo estructural. El commit en tres fases añade una fase de precommit para mitigarlo, y en microservicios la alternativa habitual es una saga con transacciones compensatorias.',
      en: 'After answering "prepared" a participant can no longer decide on its own, because it does not know how the others voted: the coordinator is a single point of failure and its crash turns the wait into an indefinite one. A majority vote is the condition of consensus algorithms such as Raft or Paxos, which for that very reason do not block while the quorum survives; and the increase in deadlocks is a real but secondary consequence, not the cause of the structural blocking. Three-phase commit adds a pre-commit phase to mitigate it, and in microservices the usual alternative is a saga with compensating transactions.',
    },
  },
  {
    id: 'th-dist-06',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Cuál es el propósito de un algoritmo de consenso como Raft?',
      en: 'What is the purpose of a consensus algorithm such as Raft?',
    },
    answer: {
      es: 'Elegir un líder y mantener un registro replicado idéntico y ordenado en la mayoría de los nodos del clúster.',
      en: 'Elect a leader and keep an identical, ordered replicated log on the majority of the cluster nodes.',
    },
    distractors: [
      {
        es: 'Repartir los datos entre los nodos mediante hashing consistente para equilibrar la carga y facilitar el rebalanceo.',
        en: 'Distribute data across nodes using consistent hashing to balance load and simplify rebalancing.',
      },
      {
        es: 'Sincronizar los relojes de los nodos para que los eventos puedan ordenarse por su marca de tiempo.',
        en: 'Synchronise the clocks of the nodes so events can be ordered by their timestamp.',
      },
    ],
    explanation: {
      es: 'Raft divide el tiempo en mandatos, elige un líder con temporizadores de elección aleatorios para evitar votos empatados y considera confirmada una entrada solo cuando la mayoría la ha replicado, lo que garantiza que ningún nodo aplique un orden distinto. El hashing consistente resuelve el particionado, un problema ortogonal que no decide nada por votación; y sincronizar relojes es tarea de NTP, que además nunca ofrece la precisión necesaria para ordenar eventos causalmente. Paxos ofrece garantías equivalentes y Raft nació con el objetivo explícito de ser más comprensible.',
      en: 'Raft splits time into terms, elects a leader using randomised election timeouts to avoid split votes, and considers an entry committed only when a majority has replicated it, which guarantees that no node applies a different order. Consistent hashing solves partitioning, an orthogonal problem that decides nothing by voting; and synchronising clocks is the job of NTP, which never offers the precision needed to order events causally. Paxos provides equivalent guarantees and Raft was created with the explicit goal of being more understandable.',
    },
  },
  {
    id: 'th-dist-07',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: 'En un almacén con quórum, ¿qué garantiza que R más W sea mayor que N?',
      en: 'In a quorum-based store, what does R plus W being greater than N guarantee?',
    },
    answer: {
      es: 'Que el conjunto de nodos leídos y el de nodos escritos se solapan al menos en uno, así que la lectura alcanza la última escritura confirmada.',
      en: 'That the set of nodes read and the set of nodes written overlap in at least one, so the read reaches the latest acknowledged write.',
    },
    distractors: [
      {
        es: 'Que el sistema soporta la caída de hasta N menos W nodos sin perder la capacidad de aceptar escrituras.',
        en: 'That the system tolerates up to N minus W nodes going down without losing the ability to accept writes.',
      },
      {
        es: 'Que todas las réplicas quedan actualizadas con el valor nuevo antes de que se responda al cliente.',
        en: 'That every replica is updated with the new value before the client receives a response.',
      },
    ],
    explanation: {
      es: 'Con la configuración típica N igual a 3, W igual a 2 y R igual a 2, cualquier lectura toca al menos un nodo que participó en la última escritura, y el cliente resuelve cuál es la versión buena comparando relojes vectoriales o marcas de última escritura. La tolerancia a fallos es una propiedad cierta del quórum, pero se deriva de W por sí solo y no de la desigualdad; y la idea de que todas las réplicas quedan al día es el malentendido más común, porque las réplicas rezagadas convergen después mediante read repair o hinted handoff.',
      en: 'With the typical setup N equal to 3, W equal to 2 and R equal to 2, any read touches at least one node that took part in the last write, and the client decides which version wins by comparing vector clocks or last-write timestamps. Fault tolerance is a true property of quorums, but it follows from W alone and not from the inequality; and the idea that all replicas end up current is the most common misunderstanding, because lagging replicas converge later through read repair or hinted handoff.',
    },
  },
  {
    id: 'th-dist-08',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué aportan los relojes vectoriales frente a una marca de tiempo de reloj de pared?',
      en: 'What do vector clocks add compared to a wall-clock timestamp?',
    },
    answer: {
      es: 'Permiten distinguir si dos escrituras son causalmente dependientes o concurrentes, sin depender de relojes sincronizados.',
      en: 'They let you tell whether two writes are causally dependent or concurrent, without relying on synchronised clocks.',
    },
    distractors: [
      {
        es: 'Permiten ordenar totalmente todos los eventos del sistema dentro de una única secuencia global coherente.',
        en: 'They let you totally order every event of the system inside a single coherent global sequence.',
      },
      {
        es: 'Permiten resolver los conflictos de forma automática conservando siempre la escritura más reciente.',
        en: 'They let you resolve conflicts automatically by always keeping the most recent write.',
      },
    ],
    explanation: {
      es: 'Un reloj vectorial guarda un contador por nodo y al comparar dos vectores solo hay tres resultados posibles: uno precede al otro o son concurrentes, que es justo la información que un reloj de pared no puede dar. El orden total es lo que ofrece un reloj de Lamport, cierto para ese algoritmo pero incapaz de detectar concurrencia porque desempata de forma arbitraria; y quedarse con la escritura más reciente es la política last write wins, que descarta datos en silencio. Los relojes vectoriales no resuelven el conflicto: exponen versiones hermanas que debe fusionar la aplicación o un CRDT.',
      en: 'A vector clock keeps one counter per node and comparing two vectors yields only three possible results: one precedes the other, or they are concurrent, which is exactly the information a wall clock cannot provide. Total ordering is what a Lamport clock offers, true for that algorithm but unable to detect concurrency because it breaks ties arbitrarily; and keeping the most recent write is the last-write-wins policy, which silently discards data. Vector clocks do not resolve the conflict: they surface sibling versions that the application or a CRDT must merge.',
    },
  },
  {
    id: 'th-dist-09',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Por qué no es seguro ordenar eventos de distintos servidores usando sus marcas de tiempo?',
      en: 'Why is it unsafe to order events from different servers using their timestamps?',
    },
    answer: {
      es: 'Porque el desfase entre relojes puede hacer que un evento posterior lleve una marca anterior a la del evento que lo provocó.',
      en: 'Because clock skew can make a later event carry a timestamp earlier than the event that caused it.',
    },
    distractors: [
      {
        es: 'Porque cada servidor almacena la marca en su zona horaria local y la conversión a UTC se pierde al serializar.',
        en: 'Because each server stores the timestamp in its local time zone and the conversion to UTC is lost when serialising.',
      },
      {
        es: 'Porque NTP solo ajusta el reloj durante el arranque del servidor y a partir de ahí la deriva no se corrige.',
        en: 'Because NTP only adjusts the clock during server start-up and from then on the drift is not corrected.',
      },
    ],
    explanation: {
      es: 'Con NTP sobre una red amplia el error típico es de decenas de milisegundos y el reloj puede incluso saltar hacia atrás durante una corrección, así que dos eventos separados por pocos milisegundos pueden aparecer invertidos. La zona horaria es un problema real de serialización, pero se resuelve guardando siempre en UTC y no cambia el orden entre servidores; y NTP sí corrige la deriva de forma continua mediante disciplina del reloj, así que esa afirmación es directamente incorrecta. Para medir duraciones se usa un reloj monótono, para ordenar se usan relojes lógicos, y Spanner recurre a TrueTime con relojes atómicos y GPS esperando el intervalo de incertidumbre.',
      en: 'With NTP over a wide area network the typical error is tens of milliseconds and the clock can even jump backwards during a correction, so two events milliseconds apart may appear inverted. Time zones are a real serialisation problem, but it is solved by always storing UTC and it does not change the ordering between servers; and NTP does correct drift continuously through clock discipline, so that statement is plainly wrong. Monotonic clocks are used to measure durations, logical clocks to order events, and Spanner relies on TrueTime with atomic clocks and GPS while waiting out the uncertainty interval.',
    },
  },
  {
    id: 'th-dist-10',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué diferencia a la estrategia write through de write behind en una caché?',
      en: 'What is the difference between write-through and write-behind caching?',
    },
    answer: {
      es: 'Write through escribe en la caché y en el almacén dentro de la misma operación; write behind confirma en la caché y persiste después de forma asíncrona.',
      en: 'Write-through writes to the cache and the store within the same operation; write-behind acknowledges in the cache and persists later asynchronously.',
    },
    distractors: [
      {
        es: 'Write through carga la entrada en la caché cuando una lectura falla, y write behind la escribe al vencer su TTL.',
        en: 'Write-through loads the entry into the cache when a read misses, and write-behind writes it when its TTL expires.',
      },
      {
        es: 'Write through invalida la entrada en cada escritura y write behind la actualiza en memoria sin tocar el almacén.',
        en: 'Write-through invalidates the entry on every write and write-behind updates it in memory without touching the store.',
      },
    ],
    explanation: {
      es: 'La diferencia clave es cuándo se considera durable el dato: write through paga la latencia del almacén en cada escritura a cambio de no perder nada, mientras write behind agrupa escrituras y responde antes, con el riesgo de perder la ventana pendiente si el nodo muere. Cargar en el fallo de lectura es read through, la cara de lectura del patrón, y en cache aside es la propia aplicación la que consulta, rellena e invalida. Invalidar en vez de actualizar es la variante write invalidate, válida pero distinta de las dos que compara la pregunta.',
      en: 'The key difference is when the data is considered durable: write-through pays the store latency on every write in exchange for losing nothing, while write-behind batches writes and answers sooner, risking the loss of the pending window if the node dies. Loading on a read miss is read-through, the read side of the pattern, and in cache-aside the application itself queries, fills and invalidates. Invalidating instead of updating is the write-invalidate variant, valid but different from the two the question compares.',
    },
  },
  {
    id: 'th-dist-11',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué ocurre en una estampida de caché o rebaño tronante y cómo se mitiga?',
      en: 'What happens in a cache stampede or thundering herd, and how is it mitigated?',
    },
    answer: {
      es: 'Muchas peticiones fallan a la vez sobre la misma clave recién expirada y golpean la base de datos; se mitiga con un bloqueo de recarga o un refresco anticipado.',
      en: 'Many requests miss at once on the same freshly expired key and hit the database; it is mitigated with a recompute lock or an early refresh.',
    },
    distractors: [
      {
        es: 'La caché agota su memoria y empieza a expulsar entradas todavía útiles; se mitiga ampliando la memoria o afinando la política de expulsión.',
        en: 'The cache runs out of memory and starts evicting entries that are still useful; it is mitigated by adding memory or tuning the eviction policy.',
      },
      {
        es: 'Varios nodos sirven versiones distintas del mismo dato durante un tiempo; se mitiga reduciendo el TTL de las entradas.',
        en: 'Several nodes serve different versions of the same data for a while; it is mitigated by lowering the TTL of the entries.',
      },
    ],
    explanation: {
      es: 'El daño viene de la simultaneidad: una clave muy consultada expira y cientos de hilos recalculan el mismo valor a la vez, de modo que la caída de rendimiento coincide con el momento de mayor tráfico. Las mitigaciones habituales son un bloqueo por clave que deja recalcular a un solo hilo mientras el resto espera o sirve el valor obsoleto, una expiración probabilística anticipada tipo XFetch y añadir jitter al TTL para que las claves no caduquen en bloque. La expulsión por memoria y la divergencia entre nodos son problemas reales de caché, pero el primero es presión de memoria y el segundo es incoherencia, y reducir el TTL incluso empeora la estampida.',
      en: 'The damage comes from simultaneity: a very popular key expires and hundreds of threads recompute the same value at once, so the performance drop lands exactly at peak traffic. The usual mitigations are a per-key lock that lets a single thread recompute while the rest wait or serve the stale value, a probabilistic early expiration such as XFetch, and adding jitter to the TTL so keys do not expire as a block. Memory eviction and divergence between nodes are real cache problems, but the first is memory pressure and the second is incoherence, and lowering the TTL actually makes the stampede worse.',
    },
  },
  {
    id: 'th-dist-12',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Cuándo conviene invalidar una entrada de caché de forma explícita en lugar de confiar en el TTL?',
      en: 'When is it better to invalidate a cache entry explicitly instead of relying on the TTL?',
    },
    answer: {
      es: 'Cuando una escritura conocida cambia el dato y el negocio no tolera la ventana de datos obsoletos que deja vencer el TTL.',
      en: 'When a known write changes the data and the business cannot tolerate the stale window that letting the TTL expire leaves open.',
    },
    distractors: [
      {
        es: 'Cuando el dato es caro de calcular, porque la invalidación explícita permite recalcularlo antes de que la entrada expire.',
        en: 'When the data is expensive to compute, because explicit invalidation lets you recompute it before the entry expires.',
      },
      {
        es: 'Cuando el dato se consulta mucho, porque con TTL el valor se vuelve a calcular en cada lectura que llega.',
        en: 'When the data is read very often, because with a TTL the value is recomputed on every incoming read.',
      },
    ],
    explanation: {
      es: 'La invalidación explícita, un DELETE de la clave dentro de la misma transacción que escribe, acota la obsolescencia a casi cero y es obligatoria cuando el usuario debe ver su cambio de inmediato; su coste es que hay que conocer todas las claves derivadas y propagar el borrado a todos los nodos, por lo que el TTL se mantiene como red de seguridad. Recalcular antes del vencimiento es refresh ahead, una técnica distinta que anticipa el fallo sin necesitar ningún evento de escritura, y la última opción parte de un error: con TTL el valor se sirve desde memoria hasta que caduca, no se recalcula en cada lectura.',
      en: 'Explicit invalidation, a DELETE of the key inside the same transaction that writes, bounds staleness to almost zero and is mandatory when the user must see the change immediately; its cost is that you must know every derived key and propagate the deletion to all nodes, which is why the TTL stays as a safety net. Recomputing before expiry is refresh-ahead, a different technique that anticipates the miss without needing any write event, and the last option starts from an error: with a TTL the value is served from memory until it expires, it is not recomputed on every read.',
    },
  },
  {
    id: 'th-dist-13',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué problema provoca elegir una clave de partición con valores muy desbalanceados?',
      en: 'What problem does choosing a partition key with very unbalanced values cause?',
    },
    answer: {
      es: 'Una partición caliente que concentra el tráfico en un solo nodo y limita el rendimiento aunque el resto del clúster esté ocioso.',
      en: 'A hot partition that concentrates traffic on a single node and caps throughput even while the rest of the cluster sits idle.',
    },
    distractors: [
      {
        es: 'La pérdida del orden entre los mensajes de una misma clave, que dejan de procesarse de forma secuencial.',
        en: 'The loss of ordering between messages of the same key, which stop being processed sequentially.',
      },
      {
        es: 'Un rebalanceo continuo de las particiones cada vez que un nodo entra o sale del clúster.',
        en: 'Continuous partition rebalancing every time a node joins or leaves the cluster.',
      },
    ],
    explanation: {
      es: 'Si se particiona por país, por tenant o por un identificador con un valor dominante, ese nodo recibe una fracción desproporcionada de lecturas y escrituras, y escalar añadiendo nodos no ayuda porque la clave sigue apuntando al mismo sitio. La solución habitual es una clave compuesta o añadir un sufijo aleatorio, asumiendo que se pierde el orden dentro de la clave, que es justo lo que enuncia la primera opción incorrecta como si fuera la causa y no el precio de la solución. El rebalanceo constante al cambiar la topología es el problema que resuelve el hashing consistente, ajeno al desbalance de valores.',
      en: 'If you partition by country, by tenant or by an identifier with one dominant value, that node receives a disproportionate share of reads and writes, and scaling out does not help because the key still points to the same place. The usual fix is a composite key or adding a random suffix, accepting the loss of ordering within the key, which is exactly what the first wrong option states as if it were the cause rather than the price of the fix. Constant rebalancing when the topology changes is the problem consistent hashing solves, unrelated to value skew.',
    },
  },
  {
    id: 'th-dist-14',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué efecto tiene el retraso de replicación al leer desde una réplica justo después de escribir?',
      en: 'What effect does replication lag have when reading from a replica right after writing?',
    },
    answer: {
      es: 'La lectura puede devolver el valor anterior, porque la réplica todavía no ha aplicado el cambio confirmado por el primario.',
      en: 'The read can return the previous value, because the replica has not yet applied the change committed on the primary.',
    },
    distractors: [
      {
        es: 'La lectura devuelve el valor nuevo, porque el primario propaga la escritura a las réplicas antes de confirmar al cliente.',
        en: 'The read returns the new value, because the primary propagates the write to the replicas before acknowledging the client.',
      },
      {
        es: 'La lectura falla con un error de conflicto de versiones hasta que la réplica termina de aplicar el cambio pendiente.',
        en: 'The read fails with a version conflict error until the replica finishes applying the pending change.',
      },
    ],
    explanation: {
      es: 'Con replicación asíncrona el primario confirma en cuanto escribe su propio registro, así que existe una ventana de milisegundos o segundos en la que la réplica sirve datos antiguos y el usuario ve desaparecer su cambio. La primera opción incorrecta describe la replicación síncrona o semisíncrona, cierta para ese modo pero pagada con latencia en cada escritura; la segunda inventa un fallo que no ocurre, ya que la réplica no sabe que va retrasada y responde con normalidad. Se corrige leyendo del primario durante la sesión o esperando a que la réplica alcance el LSN o el GTID de la escritura.',
      en: 'With asynchronous replication the primary acknowledges as soon as it writes its own log, so there is a window of milliseconds or seconds in which the replica serves old data and the user sees their change disappear. The first wrong option describes synchronous or semi-synchronous replication, true for that mode but paid for with latency on every write; the second invents a failure that does not happen, since the replica does not know it is behind and answers normally. It is fixed by reading from the primary during the session or by waiting until the replica reaches the LSN or GTID of the write.',
    },
  },
  {
    id: 'th-dist-15',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: 'Con un consumidor más lento que el productor, ¿qué aporta una cola acotada frente a una ilimitada?',
      en: 'With a consumer slower than the producer, what does a bounded queue add compared to an unbounded one?',
    },
    answer: {
      es: 'Propaga la contrapresión hacia el productor, que se frena o rechaza trabajo en lugar de acumularlo hasta agotar la memoria.',
      en: 'It propagates backpressure to the producer, which slows down or rejects work instead of piling it up until memory runs out.',
    },
    distractors: [
      {
        es: 'Garantiza que ningún mensaje se pierda, porque los elementos sobrantes se persisten en disco hasta que haya hueco libre.',
        en: 'It guarantees no message is lost, because the overflow items are persisted to disk until there is free room.',
      },
      {
        es: 'Permite que el consumidor procese varios mensajes en paralelo y así recupere el retraso acumulado.',
        en: 'It lets the consumer process several messages in parallel and so catch up with the accumulated backlog.',
      },
    ],
    explanation: {
      es: 'Una cola ilimitada no elimina la sobrecarga, la esconde: convierte el exceso en latencia creciente y termina en un OutOfMemoryError con todo el trabajo en vuelo perdido, mientras que el límite hace visible la saturación en el punto donde se puede decidir qué hacer. La persistencia en disco es una característica del broker, cierta en Kafka o en colas duraderas pero independiente de acotar la cola en memoria; y aumentar el paralelismo del consumidor es escalado, que ayuda pero no protege cuando el pico supera cualquier capacidad. En Reactive Streams la contrapresión se expresa con request(n), y en Java un ThreadPoolExecutor con ArrayBlockingQueue y CallerRunsPolicy frena al propio productor.',
      en: 'An unbounded queue does not remove overload, it hides it: it turns the excess into growing latency and ends in an OutOfMemoryError with all in-flight work lost, whereas the bound makes saturation visible at the point where you can decide what to do. Persisting to disk is a broker feature, true in Kafka or in durable queues but independent from bounding the in-memory queue; and increasing consumer parallelism is scaling, which helps but does not protect when the spike exceeds any capacity. In Reactive Streams backpressure is expressed with request(n), and in Java a ThreadPoolExecutor with an ArrayBlockingQueue and CallerRunsPolicy throttles the producer itself.',
    },
  },
  {
    id: 'th-dist-16',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué busca el patrón de mamparos al llamar a varias dependencias externas?',
      en: 'What does the bulkhead pattern aim for when calling several external dependencies?',
    },
    answer: {
      es: 'Aislar los recursos asignados a cada dependencia para que la saturación de una no consuma el pool compartido y tumbe el servicio entero.',
      en: 'Isolate the resources assigned to each dependency so the saturation of one does not consume the shared pool and take down the whole service.',
    },
    distractors: [
      {
        es: 'Cortar las llamadas a una dependencia que falla de forma repetida y reintentar solo cuando vuelva a responder.',
        en: 'Cut off calls to a dependency that fails repeatedly and try again only when it responds once more.',
      },
      {
        es: 'Redirigir la llamada a una instancia sana cuando la primera responde con un error de servidor.',
        en: 'Redirect the call to a healthy instance when the first one answers with a server error.',
      },
    ],
    explanation: {
      es: 'El nombre viene de los compartimentos estancos de un barco: si un proveedor lento retiene todos los hilos o conexiones del pool común, las llamadas a los demás proveedores también se quedan sin recursos aunque estén perfectamente sanos. Por eso se asigna un pool o un límite de concurrencia por dependencia, como el Bulkhead de Resilience4j con maxConcurrentCalls. La primera opción incorrecta describe el circuit breaker, un patrón complementario que reacciona a la tasa de fallo; la segunda describe failover o reintento en otra instancia, que es política de enrutamiento y no aislamiento de recursos.',
      en: 'The name comes from the watertight compartments of a ship: if one slow provider holds every thread or connection of the shared pool, calls to the other providers also run out of resources even though they are perfectly healthy. That is why you assign a pool or a concurrency limit per dependency, such as the Resilience4j Bulkhead with maxConcurrentCalls. The first wrong option describes the circuit breaker, a complementary pattern reacting to the failure rate; the second describes failover or retry on another instance, which is routing policy and not resource isolation.',
    },
  },
  {
    id: 'th-dist-17',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Por qué se añade jitter al retroceso exponencial de los reintentos?',
      en: 'Why is jitter added to the exponential backoff of retries?',
    },
    answer: {
      es: 'Para desincronizar a los clientes que fallaron a la vez, de modo que sus reintentos se repartan en el tiempo en lugar de llegar en oleadas.',
      en: 'To desynchronise the clients that failed at the same time, so their retries spread out over time instead of arriving in waves.',
    },
    distractors: [
      {
        es: 'Para alargar progresivamente la espera entre intentos y dar tiempo al servicio a recuperarse antes del siguiente.',
        en: 'To progressively lengthen the wait between attempts and give the service time to recover before the next one.',
      },
      {
        es: 'Para acotar el número máximo de reintentos y evitar que un cliente insista de forma indefinida contra un servicio caído.',
        en: 'To cap the maximum number of retries and stop a client from hammering a downed service indefinitely.',
      },
    ],
    explanation: {
      es: 'Sin aleatoriedad todos los clientes que sufrieron el mismo timeout reintentan en los mismos instantes, así que el servicio recibe picos sincronizados justo cuando intenta levantarse y vuelve a caer; la fórmula de full jitter es esperar random(0, min(tope, base por 2 elevado a n)). La primera opción incorrecta describe el retroceso exponencial en sí, que es la parte sobre la que se aplica el jitter y no su aportación; la segunda describe el límite de intentos o el presupuesto de reintentos, un control necesario pero independiente. Conviene además que el timeout de cada salto sea menor que el del llamante para que el trabajo no se acumule.',
      en: 'Without randomness every client that hit the same timeout retries at the same instants, so the service receives synchronised spikes exactly while it tries to come back up and falls over again; the full jitter formula is to wait random(0, min(cap, base times 2 to the power of n)). The first wrong option describes exponential backoff itself, which is the part jitter is applied to and not its contribution; the second describes the attempt limit or retry budget, a necessary but independent control. It also helps to keep each hop timeout shorter than the caller timeout so work does not pile up.',
    },
  },
  {
    id: 'th-dist-18',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Cuál es el propósito de una cola de mensajes muertos?',
      en: 'What is the purpose of a dead letter queue?',
    },
    answer: {
      es: 'Apartar los mensajes que fallan de forma repetida para que no bloqueen el consumo y puedan analizarse o reprocesarse después.',
      en: 'Set aside the messages that fail repeatedly so they do not block consumption and can be analysed or reprocessed later.',
    },
    distractors: [
      {
        es: 'Recoger los mensajes que caducan por su TTL antes de que el broker los elimine de forma definitiva.',
        en: 'Collect the messages that expire through their TTL before the broker deletes them for good.',
      },
      {
        es: 'Conservar una copia de todos los mensajes ya procesados para poder reproducir el flujo completo ante un fallo.',
        en: 'Keep a copy of every already processed message so the whole flow can be replayed after a failure.',
      },
    ],
    explanation: {
      es: 'Sin cola de mensajes muertos, un mensaje envenenado que siempre lanza excepción se reintenta sin fin y detiene el avance de toda la partición o del consumidor, convirtiendo un fallo de un registro en una parada total; por eso se enruta tras superar el número máximo de reentregas. La expiración por TTL es una causa válida de enrutamiento a la DLQ en RabbitMQ, así que la primera opción es cierta a medias pero describe un caso particular en lugar del propósito; y guardar todo para reproducirlo es el registro de eventos con retención, como el de Kafka. Conviene vigilar la profundidad de la DLQ, porque sin alertas se convierte en pérdida silenciosa de datos.',
      en: 'Without a dead letter queue, a poison message that always throws is retried forever and stops the progress of the whole partition or consumer, turning a single bad record into a full outage; that is why it is routed away after exceeding the maximum number of redeliveries. TTL expiry is a valid reason for routing to the DLQ in RabbitMQ, so the first option is half true but describes a particular case instead of the purpose; and keeping everything to replay it is the retained event log, such as the one in Kafka. The DLQ depth must be monitored, because without alerts it becomes silent data loss.',
    },
  },
  {
    id: 'th-dist-19',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Cuándo conviene degradar de forma elegante en lugar de fallar rápido?',
      en: 'When is graceful degradation preferable to failing fast?',
    },
    answer: {
      es: 'Cuando la funcionalidad afectada es secundaria y se puede responder con un valor por defecto o con datos en caché sin engañar al usuario.',
      en: 'When the affected functionality is secondary and you can answer with a default value or cached data without misleading the user.',
    },
    distractors: [
      {
        es: 'Cuando la dependencia es crítica, porque devolver una respuesta parcial siempre es preferible a devolver un error al cliente.',
        en: 'When the dependency is critical, because returning a partial response is always preferable to returning an error to the client.',
      },
      {
        es: 'Cuando el fallo es transitorio, porque conviene reintentar con espera creciente hasta que la dependencia vuelva a responder.',
        en: 'When the failure is transient, because it is better to retry with growing waits until the dependency responds again.',
      },
    ],
    explanation: {
      es: 'El criterio es semántico: ocultar la caída del servicio de recomendaciones mostrando una lista vacía es aceptable, pero confirmar un pago cuando la pasarela no respondió es mentir y genera inconsistencia de datos. Fallar rápido con un timeout corto libera hilos y conexiones, permite que el circuit breaker abra y evita que la latencia se propague aguas arriba, así que la primera opción incorrecta convierte en regla universal algo que solo vale para lo prescindible. Reintentar es una táctica previa para errores transitorios, no una alternativa al fallback, que en Resilience4j se declara aparte.',
      en: 'The criterion is semantic: hiding the outage of the recommendations service by showing an empty list is acceptable, but confirming a payment when the gateway never answered is a lie and creates data inconsistency. Failing fast with a short timeout releases threads and connections, lets the circuit breaker open and stops latency from spreading upstream, so the first wrong option turns something that only applies to optional features into a universal rule. Retrying is an earlier tactic for transient errors, not an alternative to the fallback, which in Resilience4j is declared separately.',
    },
  },
  {
    id: 'th-dist-20',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Por qué un lock distribuido con expiración necesita tokens de cercado?',
      en: 'Why does a distributed lock with an expiry need fencing tokens?',
    },
    answer: {
      es: 'Porque un cliente pausado puede seguir creyéndose dueño del lock tras expirar, y un token creciente permite que el recurso rechace su escritura tardía.',
      en: 'Because a paused client may still believe it owns the lock after it expires, and an increasing token lets the resource reject its late write.',
    },
    distractors: [
      {
        es: 'Porque el arrendamiento debe renovarse de forma periódica para que el lock no expire mientras el trabajo sigue en curso.',
        en: 'Because the lease must be renewed periodically so the lock does not expire while the work is still running.',
      },
      {
        es: 'Porque el reloj del servicio de locks puede adelantarse respecto al del cliente y liberar el lock antes de tiempo.',
        en: 'Because the clock of the lock service can run ahead of the client clock and release the lock too early.',
      },
    ],
    explanation: {
      es: 'Una pausa larga de recolección de basura o un bloqueo de entrada y salida puede dejar al proceso congelado más tiempo que el TTL, de forma que al despertar escribe creyendo que tiene exclusividad mientras otro cliente ya adquirió el lock. El token de cercado es un número monótonamente creciente que se entrega con el lock y que el almacén valida rechazando cualquier token menor que el último visto, como hace el zxid de ZooKeeper. La renovación del arrendamiento y el desfase de relojes son problemas reales que reducen la probabilidad del fallo, pero ninguno lo impide, y ese es justo el argumento del debate sobre Redlock entre Kleppmann y Antirez: la seguridad debe imponerla el recurso, no el servicio de locks.',
      en: 'A long garbage collection pause or an input and output stall can freeze the process for longer than the TTL, so on waking up it writes believing it has exclusivity while another client already acquired the lock. The fencing token is a monotonically increasing number handed out with the lock that the storage validates by rejecting any token lower than the last one seen, just as the ZooKeeper zxid does. Lease renewal and clock skew are real problems that reduce the probability of the failure, but neither prevents it, and that is precisely the argument of the Redlock debate between Kleppmann and Antirez: safety must be enforced by the resource, not by the lock service.',
    },
  },
];
