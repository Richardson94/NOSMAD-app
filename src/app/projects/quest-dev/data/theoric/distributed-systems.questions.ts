import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_DISTRIBUTED_SYSTEMS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-dist-01',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué compromiso queda al replicar, aunque la red no esté partida?',
      en: 'Even when the network is not split, what trade off remains when you replicate?',
    },
    answer: {
      es: 'Esperar a más réplicas da más consistencia y más latencia. Responder antes es más rápido y puede dejar lecturas viejas.',
      en: 'Waiting for more replicas gives stronger consistency and more latency. Answering sooner is faster and can leave stale reads.',
    },
    distractors: [
      {
        es: 'Durante una partición hay que elegir entre consistencia y disponibilidad.',
        en: 'During a partition you must choose between consistency and availability.',
      },
      {
        es: 'Si todos los nodos están en el mismo centro de datos, la tolerancia a particiones ya no hace falta.',
        en: 'If all nodes are in the same data centre, partition tolerance is no longer needed.',
      },
    ],
    explanation: {
      es: 'CAP habla de qué pasa cuando la red se parte. En el camino normal el costo de confirmar más copias se nota en milisegundos.',
      en: 'CAP talks about what happens when the network splits. On the normal path the cost of acknowledging more copies shows up in milliseconds.',
    },
  },
  {
    id: 'th-dist-02',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué promete leer lo que acabas de escribir?',
      en: 'What does read your writes promise?',
    },
    answer: {
      es: 'Que el mismo cliente vuelva a ver su propio cambio, aunque otros clientes todavía lean el valor anterior.',
      en: 'That the same client sees its own change again, even if other clients still read the previous value.',
    },
    distractors: [
      {
        es: 'Que todos los clientes ven la escritura en cuanto el primario confirma.',
        en: 'That every client sees the write as soon as the primary confirms it.',
      },
      {
        es: 'Que cualquier cliente lee los valores en el orden en que se escribieron.',
        en: 'That any client reads values in the order they were written.',
      },
    ],
    explanation: {
      es: 'Es una garantía de la sesión de ese cliente, no del sistema entero. Se suele lograr leyendo del primario un rato o llevando un testigo de versión.',
      en: 'It is a guarantee of that client session, not of the whole system. It is usually done by reading from the primary for a while or by carrying a version token.',
    },
  },
  {
    id: 'th-dist-03',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Para qué sirve una clave de idempotencia en una API de pagos?',
      en: 'What is an idempotency key for in a payments API?',
    },
    answer: {
      es: 'Para que un reintento de la misma operación devuelva el resultado original y no cobre dos veces.',
      en: 'So a retry of the same operation returns the original result and does not charge twice.',
    },
    distractors: [
      {
        es: 'Para poder reintentar, porque PUT y DELETE ya son idempotentes.',
        en: 'So you can retry, because PUT and DELETE are already idempotent.',
      },
      {
        es: 'Para rechazar un reenvío firmado y evitar un ataque de repetición.',
        en: 'To reject a signed resend and prevent a replay attack.',
      },
    ],
    explanation: {
      es: 'PUT idempotente no cubre un POST que mueve dinero. Rechazar el segundo envío haría fallar el reintento legítimo tras un timeout.',
      en: 'An idempotent PUT does not cover a POST that moves money. Rejecting the second send would make a legitimate retry after a timeout fail.',
    },
  },
  {
    id: 'th-dist-04',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Por qué se dice que entregar un mensaje exactamente una vez es una ilusión?',
      en: 'Why is delivering a message exactly once said to be an illusion?',
    },
    answer: {
      es: 'Porque si se pierde la confirmación no sabes si llegó. Lo práctico es entregar al menos una vez y procesar de forma idempotente.',
      en: 'Because if the acknowledgement is lost you do not know whether it arrived. The practical approach is at least once delivery plus idempotent processing.',
    },
    distractors: [
      {
        es: 'Porque como máximo una vez descarta el mensaje si se pierde la confirmación.',
        en: 'Because at most once drops the message if the acknowledgement is lost.',
      },
      {
        es: 'Porque ningún broker puede meter el mensaje y el avance del offset en una transacción.',
        en: 'Because no broker can put the message and the offset advance in one transaction.',
      },
    ],
    explanation: {
      es: 'Reintentar puede duplicar y no reintentar puede perder. El efecto sobre un sistema de fuera sigue necesitando deduplicar.',
      en: 'Retrying can duplicate and not retrying can lose. The effect on an outside system still needs deduplication.',
    },
  },
  {
    id: 'th-dist-05',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Por qué el commit en dos fases puede dejar a todos bloqueados?',
      en: 'Why can two phase commit leave everyone blocked?',
    },
    answer: {
      es: 'Porque si el coordinador cae después del voto, los participantes no saben si confirmar o abortar y mantienen los recursos cogidos.',
      en: 'Because if the coordinator dies after the vote, participants do not know whether to commit or abort and they keep the resources held.',
    },
    distractors: [
      {
        es: 'Porque necesita el voto de una mayoría y se para si no hay quórum.',
        en: 'Because it needs a majority vote and it stops if there is no quorum.',
      },
      {
        es: 'Porque los bloqueos largos solo multiplican los interbloqueos.',
        en: 'Because long locks only multiply deadlocks.',
      },
    ],
    explanation: {
      es: 'El coordinador es un punto único de fallo. En microservicios la alternativa habitual es una saga con compensaciones.',
      en: 'The coordinator is a single point of failure. In microservices the usual alternative is a saga with compensations.',
    },
  },
  {
    id: 'th-dist-06',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Para qué sirve un algoritmo de consenso como Raft?',
      en: 'What is a consensus algorithm such as Raft for?',
    },
    answer: {
      es: 'Para que una mayoría de nodos acuerde el mismo orden de operaciones y elija un líder que lo dirija.',
      en: 'So a majority of nodes agree on the same order of operations and elect a leader to drive it.',
    },
    distractors: [
      {
        es: 'Para repartir datos con hashing consistente y equilibrar la carga.',
        en: 'To spread data with consistent hashing and balance the load.',
      },
      {
        es: 'Para sincronizar los relojes y ordenar eventos por la hora.',
        en: 'To synchronise the clocks and order events by the time.',
      },
    ],
    explanation: {
      es: 'No parte los datos ni fía el orden a la hora de pared. Una entrada cuenta cuando la mayoría la ha copiado.',
      en: 'It does not partition the data and it does not trust wall clock order. An entry counts when a majority has copied it.',
    },
  },
  {
    id: 'th-dist-07',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué ganas, en un almacén con quórum, si lecturas más escrituras superan el número de réplicas?',
      en: 'In a quorum store, what do you gain if reads plus writes exceed the number of replicas?',
    },
    answer: {
      es: 'Que la lectura y la escritura se solapan en al menos un nodo, así que ves la última escritura confirmada.',
      en: 'That the read and the write overlap in at least one node, so you see the latest acknowledged write.',
    },
    distractors: [
      {
        es: 'Que el sistema aguanta la caída de varias réplicas y sigue aceptando escrituras.',
        en: 'That the system survives several replicas going down and keeps accepting writes.',
      },
      {
        es: 'Que todas las réplicas quedan al día antes de responder al cliente.',
        en: 'That every replica is up to date before the client gets a response.',
      },
    ],
    explanation: {
      es: 'No hace falta que todas las copias estén al día en ese momento. Las rezagadas se ponen al corriente después.',
      en: 'Every copy does not have to be current at that moment. The ones behind catch up later.',
    },
  },
  {
    id: 'th-dist-08',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué aportan los relojes vectoriales frente a una marca de hora?',
      en: 'What do vector clocks add compared with a timestamp?',
    },
    answer: {
      es: 'Distinguen si una escritura ocurrió antes que otra o si fueron concurrentes, sin fiarse de relojes sincronizados.',
      en: 'They tell whether one write happened before another or whether they were concurrent, without trusting synchronised clocks.',
    },
    distractors: [
      {
        es: 'Ordenan todos los eventos del sistema en una sola secuencia.',
        en: 'They order every event in the system into one sequence.',
      },
      {
        es: 'Resuelven el conflicto quedándose siempre con la escritura más reciente.',
        en: 'They resolve the conflict by always keeping the most recent write.',
      },
    ],
    explanation: {
      es: 'No eligen un ganador. Muestran las dos versiones para que la aplicación, o una estructura que sepa fusionar, decida.',
      en: 'They do not pick a winner. They surface both versions so the application, or a structure that knows how to merge, can decide.',
    },
  },
  {
    id: 'th-dist-09',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Por qué no es seguro ordenar eventos de varios servidores por su marca de tiempo?',
      en: 'Why is it unsafe to order events from several servers by their timestamp?',
    },
    answer: {
      es: 'Porque los relojes se desfasan. Un evento posterior puede llevar una hora anterior a la del evento que lo causó.',
      en: 'Because the clocks drift apart. A later event can carry a time earlier than the event that caused it.',
    },
    distractors: [
      {
        es: 'Porque cada servidor guarda la hora en su zona y se pierde al pasar a UTC.',
        en: 'Because each server stores the time in its zone and it is lost when converting to UTC.',
      },
      {
        es: 'Porque NTP solo ajusta el reloj al arrancar.',
        en: 'Because NTP only adjusts the clock at startup.',
      },
    ],
    explanation: {
      es: 'Guardar en UTC evita el lío de zonas, no el desfase. Para duraciones se usa un reloj monótono y para orden causal un reloj lógico.',
      en: 'Storing UTC avoids the time zone mess, not the skew. For durations you use a monotonic clock and for causal order a logical clock.',
    },
  },
  {
    id: 'th-dist-10',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué diferencia hay entre write through y write behind en una caché?',
      en: 'What is the difference between write through and write behind in a cache?',
    },
    answer: {
      es: 'Write through escribe en la caché y en el almacén en la misma operación. Write behind confirma en la caché y persiste después.',
      en: 'Write through writes to the cache and the store in the same operation. Write behind acknowledges in the cache and persists later.',
    },
    distractors: [
      {
        es: 'Write through carga la caché en un fallo de lectura y write behind escribe al vencer el TTL.',
        en: 'Write through loads the cache on a read miss and write behind writes when the TTL expires.',
      },
      {
        es: 'Write through invalida en cada escritura y write behind solo toca la memoria.',
        en: 'Write through invalidates on every write and write behind only touches memory.',
      },
    ],
    explanation: {
      es: 'Write behind responde antes y puede perder lo pendiente si el nodo muere. Cargar al fallar la lectura es otro patrón, el de lectura.',
      en: 'Write behind answers sooner and can lose the pending data if the node dies. Loading on a read miss is another pattern, the read one.',
    },
  },
  {
    id: 'th-dist-11',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué es una estampida de caché y cómo se mitiga?',
      en: 'What is a cache stampede and how is it mitigated?',
    },
    answer: {
      es: 'Muchas peticiones fallan a la vez sobre una clave recién expirada y golpean la base. Se mitiga dejando que solo una recargue, o refrescando antes.',
      en: 'Many requests miss at once on a key that just expired and hit the database. It is mitigated by letting only one reload, or by refreshing early.',
    },
    distractors: [
      {
        es: 'La caché se queda sin memoria y expulsa entradas útiles. Se mitiga ampliando la RAM.',
        en: 'The cache runs out of memory and evicts useful entries. It is mitigated by adding RAM.',
      },
      {
        es: 'Varios nodos sirven versiones distintas. Se mitiga bajando el TTL.',
        en: 'Several nodes serve different versions. It is mitigated by lowering the TTL.',
      },
    ],
    explanation: {
      es: 'Bajar el TTL empeora la estampida. Añadir un poco de azar a la caducidad evita que muchas claves expiren juntas.',
      en: 'Lowering the TTL makes the stampede worse. Adding a little randomness to expiry stops many keys from expiring together.',
    },
  },
  {
    id: 'th-dist-12',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Cuándo invalidas una entrada de caché en lugar de esperar al TTL?',
      en: 'When do you invalidate a cache entry instead of waiting for the TTL?',
    },
    answer: {
      es: 'Cuando una escritura conocida cambia el dato y el negocio no puede enseñar el valor viejo hasta que expire.',
      en: 'When a known write changes the data and the business cannot show the old value until it expires.',
    },
    distractors: [
      {
        es: 'Cuando el dato es caro de calcular, para recomputarlo antes de que expire.',
        en: 'When the data is expensive to compute, so you recompute it before it expires.',
      },
      {
        es: 'Cuando se consulta mucho, porque con TTL se recalcula en cada lectura.',
        en: 'When it is read a lot, because with a TTL it is recomputed on every read.',
      },
    ],
    explanation: {
      es: 'Con TTL el valor se sirve de memoria hasta que caduca. La invalidación acota esa ventana y el TTL queda como red de seguridad.',
      en: 'With a TTL the value is served from memory until it expires. Invalidation bounds that window and the TTL stays as a safety net.',
    },
  },
  {
    id: 'th-dist-13',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué problema causa una clave de partición muy desbalanceada?',
      en: 'What problem does a very unbalanced partition key cause?',
    },
    answer: {
      es: 'Una partición caliente: un nodo recibe casi todo el tráfico y el resto del clúster está ocioso.',
      en: 'A hot partition: one node receives almost all the traffic and the rest of the cluster sits idle.',
    },
    distractors: [
      {
        es: 'Se pierde el orden de los mensajes de la misma clave.',
        en: 'The order of messages for the same key is lost.',
      },
      {
        es: 'Las particiones se rebalancean cada vez que entra o sale un nodo.',
        en: 'Partitions rebalance every time a node joins or leaves.',
      },
    ],
    explanation: {
      es: 'Añadir nodos no ayuda si la clave sigue cayendo en el mismo sitio. Una clave compuesta reparte, a veces a costa del orden.',
      en: 'Adding nodes does not help if the key still lands in the same place. A composite key spreads the load, sometimes at the cost of order.',
    },
  },
  {
    id: 'th-dist-14',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué efecto tiene el retraso de replicación si lees de una réplica justo después de escribir?',
      en: 'What effect does replication lag have if you read from a replica right after writing?',
    },
    answer: {
      es: 'Puedes leer el valor anterior, porque la réplica todavía no aplicó el cambio que el primario ya confirmó.',
      en: 'You can read the previous value, because the replica has not yet applied the change the primary already confirmed.',
    },
    distractors: [
      {
        es: 'Lees el valor nuevo, porque el primario espera a las réplicas antes de confirmar.',
        en: 'You read the new value, because the primary waits for the replicas before acknowledging.',
      },
      {
        es: 'La lectura falla con un conflicto de versión hasta que la réplica se pone al día.',
        en: 'The read fails with a version conflict until the replica catches up.',
      },
    ],
    explanation: {
      es: 'Eso pasa con replicación asíncrona. Leer del primario durante la sesión evita que el usuario vea desaparecer su cambio.',
      en: 'That happens with asynchronous replication. Reading from the primary during the session stops the user from seeing their change disappear.',
    },
  },
  {
    id: 'th-dist-15',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué aporta una cola con límite si el consumidor es más lento que el productor?',
      en: 'If the consumer is slower than the producer, what does a bounded queue add?',
    },
    answer: {
      es: 'Contrapresión: el productor se frena o rechaza trabajo, en lugar de acumular hasta quedarse sin memoria.',
      en: 'Backpressure: the producer slows down or rejects work, instead of piling up until it runs out of memory.',
    },
    distractors: [
      {
        es: 'Garantiza que no se pierde nada, porque lo que sobra se escribe a disco.',
        en: 'It guarantees nothing is lost, because the overflow is written to disk.',
      },
      {
        es: 'Permite que el consumidor procese en paralelo y recupere el retraso.',
        en: 'It lets the consumer process in parallel and catch up.',
      },
    ],
    explanation: {
      es: 'Una cola sin límite esconde la saturación hasta un error de memoria. El paralelismo ayuda, pero no sustituye un tope.',
      en: 'An unbounded queue hides saturation until a memory error. Parallelism helps, but it does not replace a cap.',
    },
  },
  {
    id: 'th-dist-16',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Qué busca el patrón de mamparos al llamar a varias dependencias?',
      en: 'What does the bulkhead pattern aim for when calling several dependencies?',
    },
    answer: {
      es: 'Aislar hilos o conexiones por dependencia, para que una saturada no se coma el pool y tire el servicio entero.',
      en: 'Isolate threads or connections per dependency, so a saturated one does not eat the pool and take down the whole service.',
    },
    distractors: [
      {
        es: 'Cortar las llamadas a una dependencia que falla seguido y reintentar cuando vuelva.',
        en: 'Cut off calls to a dependency that fails often and retry when it comes back.',
      },
      {
        es: 'Redirigir la llamada a otra instancia si la primera responde con error.',
        en: 'Redirect the call to another instance if the first one answers with an error.',
      },
    ],
    explanation: {
      es: 'Cortar por tasa de fallo es el circuit breaker. Reintentar en otra instancia es enrutamiento. El mamparo limita recursos.',
      en: 'Cutting off by failure rate is the circuit breaker. Retrying on another instance is routing. The bulkhead limits resources.',
    },
  },
  {
    id: 'th-dist-17',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Por qué se añade azar al retroceso exponencial de los reintentos?',
      en: 'Why is randomness added to the exponential backoff of retries?',
    },
    answer: {
      es: 'Para que los clientes que fallaron juntos no reintenten en el mismo instante y tumben el servicio otra vez.',
      en: 'So the clients that failed together do not retry at the same instant and knock the service over again.',
    },
    distractors: [
      {
        es: 'Para alargar la espera y dar tiempo a que el servicio se recupere.',
        en: 'To lengthen the wait and give the service time to recover.',
      },
      {
        es: 'Para limitar el número de reintentos.',
        en: 'To cap the number of retries.',
      },
    ],
    explanation: {
      es: 'Alargar la espera es el retroceso. El tope de intentos es otro control. El azar solo desarma la oleada.',
      en: 'Lengthening the wait is the backoff. The attempt cap is another control. The randomness only breaks up the wave.',
    },
  },
  {
    id: 'th-dist-18',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Para qué sirve una cola de mensajes muertos?',
      en: 'What is a dead letter queue for?',
    },
    answer: {
      es: 'Para apartar los mensajes que fallan una y otra vez, de modo que no bloqueen el consumo y se puedan mirar después.',
      en: 'To set aside messages that fail again and again, so they do not block consumption and can be looked at later.',
    },
    distractors: [
      {
        es: 'Para guardar los mensajes que caducan por TTL antes de borrarlos.',
        en: 'To store messages that expire by TTL before deleting them.',
      },
      {
        es: 'Para conservar una copia de todo lo procesado y poder reproducir el flujo.',
        en: 'To keep a copy of everything processed so the flow can be replayed.',
      },
    ],
    explanation: {
      es: 'Sin esa cola, un mensaje envenenado se reintenta sin fin y para la partición. Hay que vigilarla, o se convierte en pérdida silenciosa.',
      en: 'Without that queue, a poison message is retried forever and stops the partition. You must watch it, or it becomes silent loss.',
    },
  },
  {
    id: 'th-dist-19',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Cuándo degradas con elegancia en lugar de fallar rápido?',
      en: 'When do you degrade gracefully instead of failing fast?',
    },
    answer: {
      es: 'Cuando la función es secundaria y puedes responder con un valor por defecto o con caché sin mentir al usuario.',
      en: 'When the feature is secondary and you can answer with a default or with cache without lying to the user.',
    },
    distractors: [
      {
        es: 'Cuando la dependencia es crítica, porque una respuesta parcial siempre es mejor que un error.',
        en: 'When the dependency is critical, because a partial response is always better than an error.',
      },
      {
        es: 'Cuando el fallo es pasajero, porque hay que reintentar con esperas crecientes.',
        en: 'When the failure is transient, because you must retry with growing waits.',
      },
    ],
    explanation: {
      es: 'Ocultar recomendaciones vacías puede valer. Confirmar un pago que la pasarela no respondió no. Reintentar es un paso previo, no el degradado.',
      en: 'Hiding empty recommendations can be fine. Confirming a payment the gateway never answered is not. Retrying is an earlier step, not the degradation.',
    },
  },
  {
    id: 'th-dist-20',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: '¿Por qué un lock distribuido que expira necesita un token de cercado?',
      en: 'Why does a distributed lock that expires need a fencing token?',
    },
    answer: {
      es: 'Porque un cliente pausado puede creer que sigue siendo el dueño después de expirar. Un número creciente permite rechazar su escritura tardía.',
      en: 'Because a paused client may still believe it owns the lock after it expires. An increasing number lets you reject its late write.',
    },
    distractors: [
      {
        es: 'Porque hay que renovar el arrendamiento para que no expire mientras el trabajo sigue.',
        en: 'Because the lease must be renewed so it does not expire while the work continues.',
      },
      {
        es: 'Porque el reloj del servicio de locks puede adelantarse y soltar el lock antes de tiempo.',
        en: 'Because the lock service clock can run ahead and release the lock too early.',
      },
    ],
    explanation: {
      es: 'Renovar reduce la probabilidad, no la elimina. Una pausa larga de recolección puede superar el tiempo de vida del lock.',
      en: 'Renewing lowers the probability, it does not remove it. A long garbage collection pause can outlast the lock.',
    },
  },
];
