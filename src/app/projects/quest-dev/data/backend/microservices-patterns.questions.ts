import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_MICROSERVICES_PATTERNS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-msp-01',
    topic: 'Descubrimiento',
    prompt: {
      es: '¿Quién resuelve la dirección de otro servicio, el cliente o el servidor?',
      en: 'Who resolves another service address, the client or the server?',
    },
    answer: {
      es: 'En el descubrimiento de cliente, tu app pregunta el registro y elige la instancia. En el de servidor, llamas a un balanceador y él elige.',
      en: 'With client discovery, your app asks the registry and picks the instance. With server discovery, you call a load balancer and it picks.',
    },
    distractors: [
      {
        es: 'Siempre el cliente. Un balanceador no puede saber qué instancias viven.',
        en: 'Always the client. A load balancer cannot know which instances are alive.',
      },
      {
        es: 'El registro llama a tu app. Ni el cliente ni el balanceador resuelven nada.',
        en: 'The registry calls your app. Neither the client nor the load balancer resolves anything.',
      },
    ],
    explanation: {
      es: 'El de cliente mete lógica de balanceo en cada servicio. El de servidor deja esa decisión fuera del código.',
      en: 'Client discovery puts balancing logic in every service. Server discovery leaves that decision outside the code.',
    },
  },
  {
    id: 'be-msp-02',
    topic: 'Gateway',
    prompt: {
      es: '¿Qué hace un API gateway y qué no debería hacer?',
      en: 'What does an API gateway do and what should it not do?',
    },
    answer: {
      es: 'Enruta, autentica en el borde y corta tráfico abusivo. No debería cobrar, calcular precios ni guardar reglas de negocio.',
      en: 'It routes, authenticates at the edge and cuts abusive traffic. It should not charge, compute prices or store business rules.',
    },
    distractors: [
      {
        es: 'Es otro microservicio de dominio. Ahí vive la lógica que comparten todos.',
        en: 'It is another domain microservice. The logic shared by everyone lives there.',
      },
      {
        es: 'Solo termina TLS. Enrutar o validar el token es trabajo de cada servicio.',
        en: 'It only terminates TLS. Routing or validating the token is each service job.',
      },
    ],
    explanation: {
      es: 'Si el gateway conoce el negocio, cada cambio de producto lo toca. Déjalo como puerta, no como aplicación.',
      en: 'If the gateway knows the business, every product change touches it. Keep it as a door, not as an application.',
    },
  },
  {
    id: 'be-msp-03',
    topic: 'BFF',
    prompt: {
      es: '¿Qué es un BFF?',
      en: 'What is a BFF?',
    },
    answer: {
      es: 'Un backend hecho para una pantalla concreta, como la app móvil o la web. Arma la respuesta que esa UI necesita y no sirve a todo el mundo.',
      en: 'A backend made for one screen, such as the mobile app or the web. It shapes the response that UI needs and it does not serve everyone.',
    },
    distractors: [
      {
        es: 'El gateway único de la empresa. Móvil y web llaman a las mismas rutas.',
        en: 'The single company gateway. Mobile and web call the same paths.',
      },
      {
        es: 'Una librería compartida que cada servicio copia para no duplicar DTOs.',
        en: 'A shared library that every service copies so DTOs are not duplicated.',
      },
    ],
    explanation: {
      es: 'Evita que el móvil reciba el documento enorme de la web. El límite es no convertir el BFF en el sitio donde vive el dominio.',
      en: 'It stops the mobile app from receiving the huge web document. The limit is not turning the BFF into the place where the domain lives.',
    },
  },
  {
    id: 'be-msp-04',
    topic: 'Configuración',
    prompt: {
      es: '¿Cómo cambias configuración sin redesplegar y qué hace RefreshScope?',
      en: 'How do you change configuration without redeploying and what does RefreshScope do?',
    },
    answer: {
      es: 'Los servicios leen de un config central. RefreshScope recrea ese bean cuando llega el aviso de refresco, para que tome el valor nuevo.',
      en: 'Services read from a central config. RefreshScope recreates that bean when the refresh notice arrives, so it picks up the new value.',
    },
    distractors: [
      {
        es: 'Basta editar application.properties en el jar. Boot lo relee solo.',
        en: 'Editing application.properties in the jar is enough. Boot rereads it on its own.',
      },
      {
        es: 'RefreshScope reinicia la JVM. Todos los beans se crean de nuevo.',
        en: 'RefreshScope restarts the JVM. Every bean is created again.',
      },
    ],
    explanation: {
      es: 'Sin ese alcance, un bean ya creado se queda con el valor viejo. No todo se puede refrescar: una conexión abierta hay que tratarla aparte.',
      en: 'Without that scope, a bean already created keeps the old value. Not everything can be refreshed: an open connection must be handled apart.',
    },
  },
  {
    id: 'be-msp-05',
    topic: 'Malla',
    prompt: {
      es: '¿Qué diferencia hay entre un sidecar y una malla de servicios?',
      en: 'What is the difference between a sidecar and a service mesh?',
    },
    answer: {
      es: 'El sidecar es un proceso al lado del tuyo que hace reintentos, TLS y métricas. La malla es esa misma idea aplicada a todos los servicios, con un control común.',
      en: 'The sidecar is a process next to yours that does retries, TLS and metrics. The mesh is that same idea applied to every service, with a shared control.',
    },
    distractors: [
      {
        es: 'El sidecar es una librería en tu código. La malla es un gateway y nada más.',
        en: 'The sidecar is a library in your code. The mesh is a gateway and nothing more.',
      },
      {
        es: 'Son excluyentes. Si hay sidecar no hay malla.',
        en: 'They are exclusive. If there is a sidecar there is no mesh.',
      },
    ],
    explanation: {
      es: 'Tu código habla con localhost y el sidecar habla con la red. La malla evita copiar esa lógica en cada servicio.',
      en: 'Your code talks to localhost and the sidecar talks to the network. The mesh avoids copying that logic into every service.',
    },
  },
  {
    id: 'be-msp-06',
    topic: 'Mensajes',
    prompt: {
      es: '¿Qué problema resuelve el outbox transaccional?',
      en: 'What problem does the transactional outbox solve?',
    },
    answer: {
      es: 'Guardas el evento en la misma transacción que el cambio de negocio. Un proceso aparte lo publica. Así no confirmas el pedido y pierdes el mensaje, ni publicas un mensaje de algo que hizo rollback.',
      en: 'You store the event in the same transaction as the business change. A separate process publishes it. That way you do not commit the order and lose the message, or publish a message for something that rolled back.',
    },
    distractors: [
      {
        es: 'Publicas en Kafka dentro de la transacción de JPA. Las dos confirman juntas.',
        en: 'You publish to Kafka inside the JPA transaction. Both commit together.',
      },
      {
        es: 'Es una cola en memoria. Si el proceso muere, el evento ya llegó al broker.',
        en: 'It is an in-memory queue. If the process dies, the event already reached the broker.',
      },
    ],
    explanation: {
      es: 'La tabla de outbox y el pedido se confirman o se deshacen juntos. El publicador reintenta hasta que el broker acepta.',
      en: 'The outbox table and the order commit or roll back together. The publisher retries until the broker accepts.',
    },
  },
  {
    id: 'be-msp-07',
    topic: 'Mensajes',
    prompt: {
      es: '¿De dónde lee un CDC y por qué no de un evento de Spring?',
      en: 'Where does CDC read from and why not from a Spring event?',
    },
    answer: {
      es: 'Del log de la base, los cambios ya confirmados. Un evento de aplicación se pierde si publicas y luego la transacción hace rollback, o al revés.',
      en: 'From the database log, the changes already committed. An application event is lost if you publish and then the transaction rolls back, or the other way around.',
    },
    distractors: [
      {
        es: 'De ApplicationEventPublisher, que es transaccional con la base.',
        en: 'From ApplicationEventPublisher, which is transactional with the database.',
      },
      {
        es: 'De la tabla haciendo un select periódico de todas las filas.',
        en: 'From the table by selecting every row on a timer.',
      },
    ],
    explanation: {
      es: 'El log solo tiene lo que se confirmó. No tienes que acordarte de publicar en cada sitio que escribe.',
      en: 'The log only has what was committed. You do not have to remember to publish in every place that writes.',
    },
  },
  {
    id: 'be-msp-08',
    topic: 'Mensajes',
    prompt: {
      es: '¿Qué es un evento que lleva el estado?',
      en: 'What is an event that carries the state?',
    },
    answer: {
      es: 'El mensaje trae los datos que el consumidor necesita, no solo el id. Así no tiene que llamarte para completar el pedido.',
      en: 'The message brings the data the consumer needs, not only the id. That way it does not have to call you back to complete the order.',
    },
    distractors: [
      {
        es: 'Solo el id, para que el mensaje sea pequeño y el consumidor consulte siempre.',
        en: 'Only the id, so the message stays small and the consumer always queries.',
      },
      {
        es: 'La fila entera de todas tus tablas, para replicar la base.',
        en: 'The entire row of all your tables, to replicate the database.',
      },
    ],
    explanation: {
      es: 'Si solo mandas el id, un pico de mensajes se convierte en un pico de llamadas. Manda lo que el otro necesita y nada más.',
      en: 'If you only send the id, a burst of messages becomes a burst of calls. Send what the other side needs and nothing more.',
    },
  },
  {
    id: 'be-msp-09',
    topic: 'Lectura',
    prompt: {
      es: '¿Qué es componer una API?',
      en: 'What is API composition?',
    },
    answer: {
      es: 'Un servicio pregunta a varios y junta la respuesta para el cliente. Sirve cuando la pantalla necesita datos de más de un dueño.',
      en: 'One service asks several others and joins the response for the client. It fits when the screen needs data from more than one owner.',
    },
    distractors: [
      {
        es: 'Un join SQL entre las bases de los servicios, hecho desde el gateway.',
        en: 'A SQL join across the service databases, done from the gateway.',
      },
      {
        es: 'Copiar todas las tablas a un solo servicio para no llamar a nadie.',
        en: 'Copying every table into one service so you do not call anyone.',
      },
    ],
    explanation: {
      es: 'El coste es la latencia y que un servicio lento frena la pantalla. Si la lectura es muy frecuente, una vista propia suele ir mejor.',
      en: 'The cost is latency and a slow service holding up the screen. If the read is very frequent, a view of your own is usually better.',
    },
  },
  {
    id: 'be-msp-10',
    topic: 'Lectura',
    prompt: {
      es: '¿Para qué separas el modelo de lectura del de escritura?',
      en: 'Why do you separate the read model from the write model?',
    },
    answer: {
      es: 'Porque la pantalla pide datos ya juntados y la escritura quiere transacciones pequeñas. Una vista materializada se actualiza con eventos y la lectura no hace esas llamadas.',
      en: 'Because the screen asks for data already joined and the write wants small transactions. A materialised view is updated from events and the read does not make those calls.',
    },
    distractors: [
      {
        es: 'Para que lectura y escritura usen la misma tabla y el mismo servicio.',
        en: 'So read and write use the same table and the same service.',
      },
      {
        es: 'Es obligatorio en microservicios. Sin dos modelos el diseño está mal.',
        en: 'It is mandatory in microservices. Without two models the design is wrong.',
      },
    ],
    explanation: {
      es: 'La vista puede ir un momento por detrás. No la uses si el usuario tiene que ver su propio cambio al instante.',
      en: 'The view can lag for a moment. Do not use it if the user must see their own change at once.',
    },
  },
  {
    id: 'be-msp-11',
    topic: 'Datos',
    prompt: {
      es: '¿Por qué una base compartida entre servicios es un problema?',
      en: 'Why is a database shared by services a problem?',
    },
    answer: {
      es: 'Porque un cambio de tabla rompe a todos y nadie puede desplegar solo. El servicio deja de ser dueño de sus datos.',
      en: 'Because a table change breaks everyone and nobody can deploy alone. The service stops owning its data.',
    },
    distractors: [
      {
        es: 'No lo es. Compartir tablas es la forma de evitar duplicar datos.',
        en: 'It is not. Sharing tables is how you avoid duplicating data.',
      },
      {
        es: 'Solo molesta al backup. El código de cada servicio sigue independiente.',
        en: 'It only bothers the backup. Each service code stays independent.',
      },
    ],
    explanation: {
      es: 'Si dos servicios escriben la misma tabla, no hay frontera. Cada uno debería exponer API o eventos, no el esquema.',
      en: 'If two services write the same table, there is no boundary. Each one should expose an API or events, not the schema.',
    },
  },
  {
    id: 'be-msp-12',
    topic: 'Diseño',
    prompt: {
      es: '¿Qué es un monolito distribuido?',
      en: 'What is a distributed monolith?',
    },
    answer: {
      es: 'Servicios que hay que desplegar juntos porque se llaman en cadena y comparten cambios. Tienes el coste de la red sin poder soltar uno solo.',
      en: 'Services you must deploy together because they call each other in a chain and share changes. You pay for the network without being able to release one alone.',
    },
    distractors: [
      {
        es: 'Un solo proceso bien partido en paquetes. Es el objetivo de los microservicios.',
        en: 'A single process split cleanly into packages. It is the goal of microservices.',
      },
      {
        es: 'Cualquier sistema con más de tres servicios. El nombre no dice nada del acoplamiento.',
        en: 'Any system with more than three services. The name says nothing about coupling.',
      },
    ],
    explanation: {
      es: 'La señal es que un cambio de pedido obliga a soltar inventario, pagos y notificaciones a la vez. Eso no es independencia.',
      en: 'The signal is that an order change forces you to release inventory, payments and notifications together. That is not independence.',
    },
  },
  {
    id: 'be-msp-13',
    topic: 'Resiliencia',
    prompt: {
      es: '¿Qué tiene que cumplirse para reintentar una llamada?',
      en: 'What must be true before you retry a call?',
    },
    answer: {
      es: 'Que repetirla sea seguro. Si el POST cobra, un reintento puede cobrar dos veces, salvo que el otro lado sea idempotente.',
      en: 'That repeating it is safe. If the POST charges, a retry can charge twice, unless the other side is idempotent.',
    },
    distractors: [
      {
        es: 'Nada. Todo POST se puede reintentar porque HTTP lo garantiza.',
        en: 'Nothing. Every POST can be retried because HTTP guarantees it.',
      },
      {
        es: 'Que el timeout sea largo. Con tiempo suficiente no hay duplicados.',
        en: 'That the timeout is long. With enough time there are no duplicates.',
      },
    ],
    explanation: {
      es: 'Reintenta lecturas y escrituras que aceptan una clave de idempotencia. Un reintento ciego sobre un cobro es un bug.',
      en: 'Retry reads and writes that accept an idempotency key. A blind retry on a charge is a bug.',
    },
  },
  {
    id: 'be-msp-14',
    topic: 'Resiliencia',
    prompt: {
      es: '¿Cómo repartes el tiempo de espera entre llamadas anidadas?',
      en: 'How do you split the wait time across nested calls?',
    },
    answer: {
      es: 'El de dentro tiene que ser más corto que el de fuera. Si tu API promete un segundo, la llamada que haces no puede esperar dos.',
      en: 'The inner one has to be shorter than the outer one. If your API promises one second, the call you make cannot wait two.',
    },
    distractors: [
      {
        es: 'Todos usan el mismo timeout. El de fuera se cancela solo si el de dentro acaba.',
        en: 'They all use the same timeout. The outer one cancels on its own if the inner one finishes.',
      },
      {
        es: 'Solo importa el timeout de la base. Las llamadas HTTP esperan indefinido.',
        en: 'Only the database timeout matters. HTTP calls wait forever.',
      },
    ],
    explanation: {
      es: 'Si el de dentro es más largo, tu cliente ya se fue y tú sigues ocupando un hilo. Reserva margen para tu propio trabajo.',
      en: 'If the inner one is longer, your client already left and you are still holding a thread. Leave room for your own work.',
    },
  },
  {
    id: 'be-msp-15',
    topic: 'Resiliencia',
    prompt: {
      es: '¿Qué es un mamparo en este contexto?',
      en: 'What is a bulkhead in this context?',
    },
    answer: {
      es: 'Separar los hilos o las conexiones por cliente o por dependencia. Si uno se satura, no se come el pool de los demás.',
      en: 'Separating threads or connections per client or per dependency. If one gets saturated, it does not eat the pool of the others.',
    },
    distractors: [
      {
        es: 'Un solo pool grande. Así el que más corre aprovecha todos los hilos.',
        en: 'One large pool. That way the busiest caller uses every thread.',
      },
      {
        es: 'Es otro nombre del circuit breaker. Abre y cierra las llamadas.',
        en: 'It is another name for the circuit breaker. It opens and closes calls.',
      },
    ],
    explanation: {
      es: 'El breaker deja de llamar. El mamparo limita cuántos esperan. Hacen falta los dos cuando una dependencia lenta puede llenar el pool.',
      en: 'The breaker stops calling. The bulkhead limits how many wait. You need both when a slow dependency can fill the pool.',
    },
  },
  {
    id: 'be-msp-16',
    topic: 'Tráfico',
    prompt: {
      es: '¿Por qué el límite de peticiones es por cliente?',
      en: 'Why is the request limit per client?',
    },
    answer: {
      es: 'Para que un cliente ruidoso no agote el cupo de los demás. Un límite global corta a todos cuando uno se dispara.',
      en: 'So a noisy client does not use up the quota of the others. A global limit cuts everyone when one client spikes.',
    },
    distractors: [
      {
        es: 'El límite global es más justo, porque reparte el error entre todos.',
        en: 'A global limit is fairer, because it spreads the error across everyone.',
      },
      {
        es: 'No se puede limitar por cliente si la API es stateless.',
        en: 'You cannot limit per client if the API is stateless.',
      },
    ],
    explanation: {
      es: 'La clave puede ser el usuario, la aplicación o la IP. Responde 429 a quien se pasó y deja pasar al resto.',
      en: 'The key can be the user, the application or the IP. Respond 429 to whoever went over and let the rest through.',
    },
  },
  {
    id: 'be-msp-17',
    topic: 'Despliegue',
    prompt: {
      es: '¿Qué exige un despliegue progresivo a la API?',
      en: 'What does a rolling deploy require from the API?',
    },
    answer: {
      es: 'Que la versión nueva entienda a los clientes viejos mientras conviven. Añadir un campo opcional vale. Quitar o renombrar uno rompe a quien aún no actualizó.',
      en: 'That the new version understands old clients while they coexist. Adding an optional field is fine. Removing or renaming one breaks whoever has not updated yet.',
    },
    distractors: [
      {
        es: 'Nada. El balanceador espera a que todos los nodos cambien antes de dejar pasar tráfico.',
        en: 'Nothing. The load balancer waits until every node has changed before letting traffic through.',
      },
      {
        es: 'Que cada despliegue suba la versión de la URL. Convivir dos contratos es un error.',
        en: 'That every deploy bumps the URL version. Letting two contracts coexist is a mistake.',
      },
    ],
    explanation: {
      es: 'Durante el rolling hay nodos viejos y nuevos a la vez. El contrato tiene que aguantar esa mezcla.',
      en: 'During the rollout there are old and new nodes at the same time. The contract has to survive that mix.',
    },
  },
  {
    id: 'be-msp-18',
    topic: 'Mensajes',
    prompt: {
      es: '¿Qué es compatible hacia atrás y hacia adelante en un evento?',
      en: 'What is backward and forward compatible in an event?',
    },
    answer: {
      es: 'Hacia atrás: un consumidor nuevo lee un evento viejo. Hacia adelante: un consumidor viejo lee un evento nuevo, ignorando campos que no conoce.',
      en: 'Backward: a new consumer reads an old event. Forward: an old consumer reads a new event, ignoring fields it does not know.',
    },
    distractors: [
      {
        es: 'Hacia atrás es que el productor viejo lea al nuevo. Hacia adelante es borrar campos.',
        en: 'Backward means the old producer reads the new one. Forward means deleting fields.',
      },
      {
        es: 'Son lo mismo. Añadir un campo obligatorio cumple las dos.',
        en: 'They are the same. Adding a required field satisfies both.',
      },
    ],
    explanation: {
      es: 'Un campo nuevo tiene que ser opcional, o el consumidor que aún no lo espera falla. No renombres uno que ya viaja.',
      en: 'A new field has to be optional, or the consumer that does not expect it yet fails. Do not rename one that is already on the wire.',
    },
  },
  {
    id: 'be-msp-19',
    topic: 'Operación',
    prompt: {
      es: '¿Qué diferencia hay entre liveness y readiness?',
      en: 'What is the difference between liveness and readiness?',
    },
    answer: {
      es: 'Liveness dice si el proceso sigue vivo y hay que reiniciarlo. Readiness dice si puede recibir tráfico. Una app arrancando está viva y todavía no lista.',
      en: 'Liveness says whether the process is still alive and must be restarted. Readiness says whether it can take traffic. An app that is starting is alive and not ready yet.',
    },
    distractors: [
      {
        es: 'Son la misma sonda. Si la base no responde, Kubernetes reinicia el pod.',
        en: 'They are the same probe. If the database does not answer, Kubernetes restarts the pod.',
      },
      {
        es: 'Readiness reinicia. Liveness solo lo quita del balanceador.',
        en: 'Readiness restarts. Liveness only removes it from the load balancer.',
      },
    ],
    explanation: {
      es: 'No metas la base en liveness: si ella cae, reinicias todos los pods y empeoras el incidente. Sácalos del balanceador con readiness.',
      en: 'Do not put the database on liveness: if it goes down, you restart every pod and make the incident worse. Take them off the load balancer with readiness.',
    },
  },
  {
    id: 'be-msp-20',
    topic: 'Migración',
    prompt: {
      es: '¿Cómo estrangulas un monolito?',
      en: 'How do you strangle a monolith?',
    },
    answer: {
      es: 'El gateway manda algunas rutas al servicio nuevo y el resto al monolito. Vas moviendo trozos hasta que el viejo se puede apagar.',
      en: 'The gateway sends some paths to the new service and the rest to the monolith. You move pieces until the old one can be turned off.',
    },
    distractors: [
      {
        es: 'Reescribes todo y un día cambias el DNS. No hay convivencia.',
        en: 'You rewrite everything and one day you switch DNS. There is no coexistence.',
      },
      {
        es: 'Copias la base y los dos sistemas escriben las mismas tablas a la vez.',
        en: 'You copy the database and both systems write the same tables at once.',
      },
    ],
    explanation: {
      es: 'El corte está en el borde, ruta a ruta. Así un fallo del servicio nuevo no obliga a soltar el monolito entero.',
      en: 'The cut is at the edge, path by path. That way a failure in the new service does not force you to release the whole monolith.',
    },
  },
];
