import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_MICROSERVICES_TESTING_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-ms-01',
    topic: 'Resiliencia',
    prompt: {
      es: '¿Qué hace un circuit breaker?',
      en: 'What does a circuit breaker do?',
    },
    answer: {
      es: 'Si el servicio de al lado falla seguido, deja de llamarlo un rato y responde enseguida con un error o un plan B. No es un reintento ni un balanceador.',
      en: 'If the service next door keeps failing, it stops calling it for a while and answers at once with an error or a fallback. It is not a retry and it is not a load balancer.',
    },
    distractors: [
      {
        es: 'Reintenta la llamada hasta que el otro servicio responda.',
        en: 'It retries the call until the other service answers.',
      },
      {
        es: 'Reparte tráfico entre instancias sanas del mismo servicio.',
        en: 'It spreads traffic across healthy instances of the same service.',
      },
    ],
    explanation: {
      es: 'El reintento, cuando el otro está caído, empeora la avalancha. El breaker corta esas llamadas para que tu servicio siga respondiendo.',
      en: 'Retrying while the other side is down makes the pile-up worse. The breaker cuts those calls so your service can still answer.',
    },
  },
  {
    id: 'be-ms-02',
    topic: 'Datos',
    prompt: {
      es: '¿Cómo mantienes consistencia entre servicios sin un commit distribuido?',
      en: 'How do you keep consistency across services without a distributed commit?',
    },
    answer: {
      es: 'Con una saga: cada servicio confirma su paso y, si uno falla, se ejecutan compensaciones que deshacen lo ya hecho. No bloqueas a todos con un commit en dos fases.',
      en: 'With a saga: each service confirms its step and, if one fails, compensations undo what was already done. You do not lock everyone with a two-phase commit.',
    },
    distractors: [
      {
        es: 'Con una transacción XA que abre un commit en cada base a la vez.',
        en: 'With an XA transaction that opens one commit on every database at once.',
      },
      {
        es: 'Repitiendo el POST hasta que todos respondan 200. No hace falta deshacer.',
        en: 'By repeating the POST until everyone responds 200. There is nothing to undo.',
      },
    ],
    explanation: {
      es: 'La compensación es un pedido de reembolso, no un rollback de la base del otro servicio. El estado intermedio se ve.',
      en: 'The compensation is a refund request, not a rollback of the other service database. The in-between state is visible.',
    },
  },
  {
    id: 'be-ms-03',
    topic: 'Mensajes',
    prompt: {
      es: '¿Por qué el consumidor de un mensaje tiene que ser idempotente?',
      en: 'Why does a message consumer have to be idempotent?',
    },
    answer: {
      es: 'Porque la entrega habitual es al menos una vez. Si el proceso se cae tras el efecto y antes del ack, el mismo mensaje vuelve a llegar.',
      en: 'Because the usual delivery is at least once. If the process dies after the effect and before the ack, the same message arrives again.',
    },
    distractors: [
      {
        es: 'Porque el broker garantiza una sola entrega y la idempotencia es por si cambias de cola.',
        en: 'Because the broker guarantees a single delivery and idempotency is only if you change queues.',
      },
      {
        es: 'Para poder procesar en paralelo. Un mensaje no se reentrega nunca.',
        en: 'So you can process in parallel. A message is never redelivered.',
      },
    ],
    explanation: {
      es: 'Guarda el id del mensaje ya aplicado. El segundo intento reconoce ese id y no cobra ni inserta otra vez.',
      en: 'Store the id of the message already applied. The second attempt recognises that id and does not charge or insert again.',
    },
  },
  {
    id: 'be-ms-04',
    topic: 'Pruebas',
    prompt: {
      es: '¿Cuándo usas WebMvcTest y cuándo SpringBootTest?',
      en: 'When do you use WebMvcTest and when SpringBootTest?',
    },
    answer: {
      es: 'WebMvcTest levanta solo la capa web y mockeas el servicio. SpringBootTest levanta el contexto de la aplicación, y lo usas cuando quieres el camino entero.',
      en: 'WebMvcTest starts only the web layer and you mock the service. SpringBootTest starts the application context, and you use it when you want the whole path.',
    },
    distractors: [
      {
        es: 'Son iguales. WebMvcTest es el nombre antiguo de SpringBootTest.',
        en: 'They are the same. WebMvcTest is the old name of SpringBootTest.',
      },
      {
        es: 'SpringBootTest no puede llamar al controlador. Solo sirve para servicios.',
        en: 'SpringBootTest cannot call the controller. It is only for services.',
      },
    ],
    explanation: {
      es: 'La prueba de rebanada arranca más rápido y no toca la base. La de aplicación entera pilla fallos de cableado que el mock esconde.',
      en: 'The slice test starts faster and does not touch the database. The full application test catches wiring failures that the mock hides.',
    },
  },
  {
    id: 'be-ms-05',
    topic: 'Pruebas',
    prompt: {
      es: '¿Por qué Testcontainers y no solo H2?',
      en: 'Why Testcontainers and not only H2?',
    },
    answer: {
      es: 'Porque H2 no se comporta como PostgreSQL: tipos, índices y SQL nativo se te escapan. Un contenedor del motor real falla donde fallará producción.',
      en: 'Because H2 does not behave like PostgreSQL: types, indexes and native SQL slip through. A container of the real engine fails where production will fail.',
    },
    distractors: [
      {
        es: 'H2 ejecuta el mismo SQL. El contenedor solo hace la prueba más lenta sin aportar nada.',
        en: 'H2 runs the same SQL. The container only makes the test slower and adds nothing.',
      },
      {
        es: 'Testcontainers sustituye a la prueba de repositorio. No hace falta afirmar el resultado.',
        en: 'Testcontainers replaces the repository test. There is no need to assert the result.',
      },
    ],
    explanation: {
      es: 'H2 sigue sirviendo para un mapper rápido. En cuanto hay SQL propio o migraciones, usa el mismo motor que producción.',
      en: 'H2 is still fine for a fast mapper. As soon as there is your own SQL or migrations, use the same engine as production.',
    },
  },
  {
    id: 'be-ms-06',
    topic: 'Observabilidad',
    prompt: {
      es: '¿Para qué sirve un trace id?',
      en: 'What is a trace id for?',
    },
    answer: {
      es: 'Para seguir una petición a través de varios servicios. El mismo id sale en los logs de cada salto y puedes ver dónde se fue el tiempo.',
      en: 'To follow one request across several services. The same id shows up in the logs of each hop and you can see where the time went.',
    },
    distractors: [
      {
        es: 'Es el id de usuario. Sirve para autorizar, no para correlacionar logs.',
        en: 'It is the user id. It is for authorization, not for correlating logs.',
      },
      {
        es: 'Lo genera cada servicio al azar. No hace falta reenviarlo.',
        en: 'Each service generates it at random. There is no need to forward it.',
      },
    ],
    explanation: {
      es: 'Si no propagas la cabecera, cada servicio empieza una traza nueva y el fallo queda partido. Un id por petición, reenviado, es la correlación.',
      en: 'If you do not forward the header, each service starts a new trace and the failure is split. One id per request, forwarded, is the correlation.',
    },
  },
  {
    id: 'be-ms-07',
    topic: 'Mensajes',
    prompt: {
      es: '¿Cuándo publicas un evento en lugar de llamar en síncrono?',
      en: 'When do you publish an event instead of calling synchronously?',
    },
    answer: {
      es: 'Cuando no necesitas la respuesta para terminar tu trabajo. El otro servicio se pone al día después, y aceptas que un momento los datos no coincidan.',
      en: 'When you do not need the answer to finish your work. The other service catches up later, and you accept that for a moment the data does not match.',
    },
    distractors: [
      {
        es: 'Siempre. Una llamada HTTP entre servicios es un antipatrón.',
        en: 'Always. An HTTP call between services is an anti-pattern.',
      },
      {
        es: 'Cuando necesitas el resultado en la misma petición. El evento bloquea hasta el ack del consumidor.',
        en: 'When you need the result in the same request. The event blocks until the consumer ack.',
      },
    ],
    explanation: {
      es: 'Cobrar y responder al usuario no puede esperar un evento. Avisar al servicio de emails sí. Esa demora es consistencia eventual.',
      en: 'Charging and answering the user cannot wait for an event. Notifying the email service can. That delay is eventual consistency.',
    },
  },
];
