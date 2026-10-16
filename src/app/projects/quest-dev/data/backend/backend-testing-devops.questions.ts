import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_TESTING_DEVOPS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-test2-01',
    topic: 'Pruebas',
    prompt: {
      es: '¿Qué levanta DataJpaTest?',
      en: 'What does DataJpaTest start?',
    },
    answer: {
      es: 'Solo la capa de JPA: repositorio, contexto de persistencia y una base de prueba. Al terminar, la transacción hace rollback y no deja filas.',
      en: 'Only the JPA slice: the repository, the persistence context and a test database. When it finishes, the transaction rolls back and leaves no rows.',
    },
    distractors: [
      {
        es: 'Toda la aplicación, incluido el servidor web y los clientes HTTP.',
        en: 'The whole application, including the web server and the HTTP clients.',
      },
      {
        es: 'Nada de Spring. Es un test de Mockito sobre el repositorio.',
        en: 'No Spring at all. It is a Mockito test of the repository.',
      },
    ],
    explanation: {
      es: 'Sirve para una consulta derivada o un save. No arranques el contexto entero si solo quieres ver el SQL.',
      en: 'It fits a derived query or a save. Do not start the whole context if you only want to see the SQL.',
    },
  },
  {
    id: 'be-test2-02',
    topic: 'Pruebas',
    prompt: {
      es: '¿Qué cambia webEnvironment en SpringBootTest?',
      en: 'What does webEnvironment change on SpringBootTest?',
    },
    answer: {
      es: 'MOCK no abre puerto y usa un cliente de prueba. RANDOM_PORT y DEFINED_PORT arrancan un servidor real. NONE no levanta la capa web.',
      en: 'MOCK opens no port and uses a test client. RANDOM_PORT and DEFINED_PORT start a real server. NONE does not start the web layer.',
    },
    distractors: [
      {
        es: 'Solo elige el perfil. El puerto es siempre el de producción.',
        en: 'It only picks the profile. The port is always the production one.',
      },
      {
        es: 'RANDOM_PORT mockea el servlet. MOCK escucha en un puerto libre.',
        en: 'RANDOM_PORT mocks the servlet. MOCK listens on a free port.',
      },
    ],
    explanation: {
      es: 'MOCK basta para el controlador. Un puerto real hace falta si pruebas el servidor, los filtros de Tomcat o un cliente de verdad.',
      en: 'MOCK is enough for the controller. A real port is needed if you test the server, the Tomcat filters or a real client.',
    },
  },
  {
    id: 'be-test2-03',
    topic: 'Pruebas',
    prompt: {
      es: '¿Cuándo armas el MockMvc a mano y cuándo con el contexto?',
      en: 'When do you build MockMvc by hand and when with the context?',
    },
    answer: {
      es: 'A mano, con el controlador y sus consejos, cuando no quieres Spring. Con el contexto, cuando necesitas seguridad, conversión y la configuración real.',
      en: 'By hand, with the controller and its advices, when you do not want Spring. With the context, when you need security, conversion and the real configuration.',
    },
    distractors: [
      {
        es: 'A mano incluye filtros de seguridad y beans. El contexto solo llama al método.',
        en: 'By hand includes security filters and beans. The context only calls the method.',
      },
      {
        es: 'Son iguales. standaloneSetup carga el application.yml.',
        en: 'They are the same. standaloneSetup loads application.yml.',
      },
    ],
    explanation: {
      es: 'El montaje a mano no ve un Converter ni un filtro que solo existen en la configuración. Úsalo para el mapeo del controlador.',
      en: 'The hand-built one does not see a Converter or a filter that exists only in configuration. Use it for the controller mapping.',
    },
  },
  {
    id: 'be-test2-04',
    topic: 'Mockito',
    prompt: {
      es: '¿Cómo pruebas un servicio de Spring con Mockito?',
      en: 'How do you test a Spring service with Mockito?',
    },
    answer: {
      es: 'En un test unitario creas el servicio con mocks de sus dependencias, sin levantar Spring. MockBean sustituye un bean dentro del contexto y, al hacerlo, ese contexto deja de reutilizarse.',
      en: 'In a unit test you build the service with mocks of its dependencies, without starting Spring. MockBean replaces a bean inside the context and, by doing that, that context stops being reused.',
    },
    distractors: [
      {
        es: 'Siempre con MockBean. Un mock de Mockito no puede probar un servicio.',
        en: 'Always with MockBean. A Mockito mock cannot test a service.',
      },
      {
        es: 'MockBean y un mock normal cuestan lo mismo, porque los dos arrancan la aplicación.',
        en: 'MockBean and a plain mock cost the same, because both start the application.',
      },
    ],
    explanation: {
      es: 'Si solo quieres la lógica del servicio, new y mocks. Reserva el contexto para cuando el cableado importa.',
      en: 'If you only want the service logic, use new and mocks. Save the context for when the wiring matters.',
    },
  },
  {
    id: 'be-test2-05',
    topic: 'Mockito',
    prompt: {
      es: '¿Cuándo usas when thenReturn y cuándo doThrow?',
      en: 'When do you use when thenReturn and when doThrow?',
    },
    answer: {
      es: 'when thenReturn cuando el método devuelve algo. doThrow, o doNothing, cuando es void: when no puede llamar a un método que no devuelve.',
      en: 'when thenReturn when the method returns something. doThrow, or doNothing, when it is void: when cannot call a method that returns nothing.',
    },
    distractors: [
      {
        es: 'when thenThrow también vale para void. doThrow es solo para métodos estáticos.',
        en: 'when thenThrow also works for void. doThrow is only for static methods.',
      },
      {
        es: 'doThrow ejecuta el método real y luego lanza. when no llama al mock.',
        en: 'doThrow runs the real method and then throws. when does not call the mock.',
      },
    ],
    explanation: {
      es: 'En un void, when (mock.save()) no compila. Escribes doThrow(...).when(mock).save().',
      en: 'On a void, when (mock.save()) does not compile. You write doThrow(...).when(mock).save().',
    },
  },
  {
    id: 'be-test2-06',
    topic: 'Mockito',
    prompt: {
      es: '¿Para qué sirve ArgumentCaptor?',
      en: 'What is ArgumentCaptor for?',
    },
    answer: {
      es: 'Para quedarte con el argumento que recibió el mock y afirmar sus campos después. Hace falta cuando el objeto se arma dentro del método y no lo tienes antes.',
      en: 'To keep the argument the mock received and assert its fields afterwards. You need it when the object is built inside the method and you do not have it beforehand.',
    },
    distractors: [
      {
        es: 'Sustituye a when. Captura el valor de retorno del servicio.',
        en: 'It replaces when. It captures the return value of the service.',
      },
      {
        es: 'Solo funciona si el argumento es un String. Con objetos hay que usar eq.',
        en: 'It only works if the argument is a String. With objects you must use eq.',
      },
    ],
    explanation: {
      es: 'Si ya conoces el valor, eq o un matcher bastan. El captor es para inspeccionar lo que el código construyó.',
      en: 'If you already know the value, eq or a matcher is enough. The captor is for inspecting what the code built.',
    },
  },
  {
    id: 'be-test2-07',
    topic: 'Mockito',
    prompt: {
      es: '¿Qué compruebas con verify y qué es el stubbing estricto?',
      en: 'What do you check with verify and what is strict stubbing?',
    },
    answer: {
      es: 'verify cuenta llamadas: una vez, nunca, o las que digas. El modo estricto falla si dejas un when que el test no usa, porque ese stub está mintiendo.',
      en: 'verify counts calls: once, never, or however many you say. Strict mode fails if you leave a when the test does not use, because that stub is lying.',
    },
    distractors: [
      {
        es: 'verify sustituye al assert del resultado. Si el mock fue llamado, el test pasa.',
        en: 'verify replaces the result assert. If the mock was called, the test passes.',
      },
      {
        es: 'El modo estricto ignora los when de más para que el test sea más estable.',
        en: 'Strict mode ignores extra when calls so the test is more stable.',
      },
    ],
    explanation: {
      es: 'Afirma el resultado y, si importa el colaborador, verifica las veces. Un stub sin uso suele ser un test que ya no prueba lo que crees.',
      en: 'Assert the result and, if the collaborator matters, verify the count. An unused stub is usually a test that no longer checks what you think.',
    },
  },
  {
    id: 'be-test2-08',
    topic: 'Mockito',
    prompt: {
      es: '¿Qué cuesta mockear un método estático o final?',
      en: 'What does it cost to mock a static or final method?',
    },
    answer: {
      es: 'Mockito puede, con un mock estático que hay que cerrar, pero el diseño te está diciendo que esa llamada no se puede sustituir. Mejor pasar la dependencia por constructor.',
      en: 'Mockito can, with a static mock you must close, but the design is telling you that call cannot be replaced. Prefer passing the dependency through the constructor.',
    },
    distractors: [
      {
        es: 'Es imposible. Mockito no mockea estáticos ni finales en ninguna versión.',
        en: 'It is impossible. Mockito does not mock statics or finals in any version.',
      },
      {
        es: 'Es el camino normal. No hace falta cerrar nada y no afecta a otros tests.',
        en: 'It is the normal path. Nothing has to be closed and it does not affect other tests.',
      },
    ],
    explanation: {
      es: 'Un mock estático mal cerrado se queda y rompe el siguiente test. Si puedes inyectar, hazlo.',
      en: 'A static mock that is not closed stays around and breaks the next test. If you can inject, do that.',
    },
  },
  {
    id: 'be-test2-09',
    topic: 'Pruebas',
    prompt: {
      es: '¿Por qué el contexto de Spring se cachea y qué hace DirtiesContext?',
      en: 'Why is the Spring context cached and what does DirtiesContext do?',
    },
    answer: {
      es: 'Tests con la misma configuración reutilizan el contexto y arrancan más rápido. DirtiesContext lo tira al terminar, y el siguiente paga el arranque otra vez.',
      en: 'Tests with the same configuration reuse the context and start faster. DirtiesContext throws it away at the end, and the next one pays for startup again.',
    },
    distractors: [
      {
        es: 'El contexto no se reutiliza. Cada test arranca la aplicación de cero.',
        en: 'The context is not reused. Every test starts the application from scratch.',
      },
      {
        es: 'DirtiesContext solo limpia la base. El contexto sigue en memoria.',
        en: 'DirtiesContext only clears the database. The context stays in memory.',
      },
    ],
    explanation: {
      es: 'Un MockBean distinto es otra configuración y otra caché. Úsalo cuando el test de verdad deja el contexto sucio, no por costumbre.',
      en: 'A different MockBean is another configuration and another cache. Use it when the test really leaves the context dirty, not out of habit.',
    },
  },
  {
    id: 'be-test2-10',
    topic: 'Pruebas',
    prompt: {
      es: '¿Cómo evitas levantar un contenedor nuevo en cada test?',
      en: 'How do you avoid starting a new container on every test?',
    },
    answer: {
      es: 'Reutilizando el contenedor entre tests y dejando que Boot conecte solo con ServiceConnection. Sin eso, cada clase paga el arranque de la base.',
      en: 'By reusing the container across tests and letting Boot connect on its own with ServiceConnection. Without that, every class pays for the database startup.',
    },
    distractors: [
      {
        es: 'No se puede. Testcontainers está pensado para un contenedor por método.',
        en: 'You cannot. Testcontainers is meant for one container per method.',
      },
      {
        es: 'ServiceConnection sustituye al contenedor por H2. Por eso va más rápido.',
        en: 'ServiceConnection replaces the container with H2. That is why it is faster.',
      },
    ],
    explanation: {
      es: 'La reutilización exige limpiar datos entre tests, porque la base sigue viva. La anotación evita copiar la URL a mano.',
      en: 'Reuse requires cleaning data between tests, because the database stays up. The annotation avoids copying the URL by hand.',
    },
  },
  {
    id: 'be-test2-11',
    topic: 'Pruebas',
    prompt: {
      es: '¿Cuándo usas WireMock y cuándo MockRestServiceServer?',
      en: 'When do you use WireMock and when MockRestServiceServer?',
    },
    answer: {
      es: 'MockRestServiceServer sustituye el RestTemplate o el RestClient dentro del contexto, sin puerto. WireMock es un servidor HTTP de verdad, útil si el cliente no pasa por esas clases.',
      en: 'MockRestServiceServer replaces RestTemplate or RestClient inside the context, with no port. WireMock is a real HTTP server, useful if the client does not go through those classes.',
    },
    distractors: [
      {
        es: 'Son lo mismo. WireMock es el nombre de MockRestServiceServer en Boot 3.',
        en: 'They are the same. WireMock is the name of MockRestServiceServer in Boot 3.',
      },
      {
        es: 'WireMock solo mockea Kafka. Para HTTP basta el servidor de Spring.',
        en: 'WireMock only mocks Kafka. For HTTP the Spring server is enough.',
      },
    ],
    explanation: {
      es: 'Si construyes el cliente a mano con otra librería, el mock de Spring no lo ve. Ahí un puerto falso sí recibe la llamada.',
      en: 'If you build the client by hand with another library, the Spring mock does not see it. A fake port does receive the call.',
    },
  },
  {
    id: 'be-test2-12',
    topic: 'Pruebas',
    prompt: {
      es: '¿Cómo pruebas un consumidor de Kafka o Rabbit?',
      en: 'How do you test a Kafka or Rabbit consumer?',
    },
    answer: {
      es: 'Con el broker en Testcontainers, publicas un mensaje y esperas el efecto con Awaitility. El consumidor no termina en la línea siguiente.',
      en: 'With the broker in Testcontainers, you publish a message and wait for the effect with Awaitility. The consumer does not finish on the next line.',
    },
    distractors: [
      {
        es: 'Llamas al método del listener en el mismo hilo y no hace falta broker ni espera.',
        en: 'You call the listener method on the same thread and you need neither a broker nor a wait.',
      },
      {
        es: 'Thread.sleep de varios segundos. Si pasa, el consumidor funcionó.',
        en: 'A Thread.sleep of several seconds. If it passes, the consumer worked.',
      },
    ],
    explanation: {
      es: 'Llamar al listener a mano no prueba la deserialización ni el ack. Espera una condición, no un tiempo fijo.',
      en: 'Calling the listener by hand does not test deserialization or the ack. Wait for a condition, not for a fixed time.',
    },
  },
  {
    id: 'be-test2-13',
    topic: 'Pruebas',
    prompt: {
      es: '¿Dónde pruebas las migraciones de Flyway?',
      en: 'Where do you test Flyway migrations?',
    },
    answer: {
      es: 'Contra el mismo motor que producción, en un contenedor. H2 acepta SQL que PostgreSQL rechaza, y el fallo aparece al desplegar.',
      en: 'Against the same engine as production, in a container. H2 accepts SQL that PostgreSQL rejects, and the failure shows up at deploy.',
    },
    distractors: [
      {
        es: 'En H2, porque Flyway traduce el dialecto y el resultado es idéntico.',
        en: 'On H2, because Flyway translates the dialect and the result is identical.',
      },
      {
        es: 'No se prueban. Si el archivo está en el classpath, arranca.',
        en: 'They are not tested. If the file is on the classpath, it starts.',
      },
    ],
    explanation: {
      es: 'Un test que arranca el contexto con el contenedor y deja a Flyway migrar pilla el script roto antes del despliegue.',
      en: 'A test that starts the context with the container and lets Flyway migrate catches the broken script before deploy.',
    },
  },
  {
    id: 'be-test2-14',
    topic: 'Pruebas',
    prompt: {
      es: '¿Cómo preparas datos de prueba sin que un test pise a otro?',
      en: 'How do you prepare test data without one test stepping on another?',
    },
    answer: {
      es: 'Con un builder o un factory que crea lo que ese test necesita, y con una base limpia al empezar. No dependas de filas que dejó el test anterior.',
      en: 'With a builder or a factory that creates what that test needs, and with a clean database at the start. Do not depend on rows the previous test left behind.',
    },
    distractors: [
      {
        es: 'Con un SQL gigante compartido. El orden de los tests garantiza los ids.',
        en: 'With one giant shared SQL. Test order guarantees the ids.',
      },
      {
        es: 'Insertando en producción de noche. Los tests leen esa copia.',
        en: 'By inserting into production at night. The tests read that copy.',
      },
    ],
    explanation: {
      es: 'El orden de los tests no es un contrato. Si uno necesita un pedido, que lo cree él y que el rollback o el borrado lo quite.',
      en: 'Test order is not a contract. If one needs an order, it should create it, and rollback or a delete should remove it.',
    },
  },
  {
    id: 'be-test2-15',
    topic: 'Rendimiento',
    prompt: {
      es: '¿Qué miden el caudal y la latencia?',
      en: 'What do throughput and latency measure?',
    },
    answer: {
      es: 'El caudal es cuántas peticiones caben por segundo. La latencia es cuánto tarda una. El percentil 95 o 99 dice lo que espera quien tiene mala suerte, no el promedio.',
      en: 'Throughput is how many requests fit per second. Latency is how long one takes. The 95th or 99th percentile says what the unlucky caller waits, not the average.',
    },
    distractors: [
      {
        es: 'Son el mismo número. Si el promedio es bajo, el percentil 99 también.',
        en: 'They are the same number. If the average is low, the 99th percentile is too.',
      },
      {
        es: 'El percentil 99 es el peor caso teórico y no se mira en producción.',
        en: 'The 99th percentile is a theoretical worst case and is not looked at in production.',
      },
    ],
    explanation: {
      es: 'Un promedio esconde una de cada cien peticiones lentas. Esas son las que el usuario nota.',
      en: 'An average hides one slow request in a hundred. Those are the ones the user notices.',
    },
  },
  {
    id: 'be-test2-16',
    topic: 'Resiliencia',
    prompt: {
      es: '¿Qué es una prueba de caos?',
      en: 'What is a chaos test?',
    },
    answer: {
      es: 'Rompes algo a propósito, una instancia o la red, con una hipótesis: el usuario sigue pudiendo comprar. Luego miras si se cumplió.',
      en: 'You break something on purpose, an instance or the network, with a hypothesis: the user can still buy. Then you look at whether it held.',
    },
    distractors: [
      {
        es: 'Apagar máquinas al azar en producción, sin decir qué esperas que pase.',
        en: 'Turning machines off at random in production, without saying what you expect to happen.',
      },
      {
        es: 'Un test de carga. Si aguanta tráfico, ya probaste el caos.',
        en: 'A load test. If it handles traffic, you already tested chaos.',
      },
    ],
    explanation: {
      es: 'Sin hipótesis no aprendes nada: solo viste un fallo. Empieza en un entorno que puedas romper.',
      en: 'Without a hypothesis you learn nothing: you only saw a failure. Start in an environment you can break.',
    },
  },
  {
    id: 'be-test2-17',
    topic: 'Contenedores',
    prompt: {
      es: '¿Cómo dejas una imagen de Java más pequeña y más segura?',
      en: 'How do you keep a Java image smaller and safer?',
    },
    answer: {
      es: 'Aprovechas la caché de capas, copias solo el JRE que necesitas y no entras como root. Lo que no está en la imagen no se puede explotar.',
      en: 'You use the layer cache, copy only the JRE you need and you do not run as root. What is not in the image cannot be exploited.',
    },
    distractors: [
      {
        es: 'Partiendo de una imagen con JDK, Maven y un shell, para poder depurar en producción.',
        en: 'Starting from an image with a JDK, Maven and a shell, so you can debug in production.',
      },
      {
        es: 'Ejecutando como root, porque el puerto 80 lo exige y el usuario no cambia el tamaño.',
        en: 'Running as root, because port 80 requires it and the user does not change the size.',
      },
    ],
    explanation: {
      es: 'Un cambio de código debería invalidar solo la última capa. Meter el build entero en una sola instrucción tira la caché cada vez.',
      en: 'A code change should invalidate only the last layer. Putting the whole build in one instruction drops the cache every time.',
    },
  },
  {
    id: 'be-test2-18',
    topic: 'Operación',
    prompt: {
      es: '¿A dónde escribe los logs un proceso en un contenedor?',
      en: 'Where does a process in a container write its logs?',
    },
    answer: {
      es: 'A la salida estándar. La plataforma los recoge. Un archivo dentro del contenedor desaparece con él.',
      en: 'To standard output. The platform collects them. A file inside the container disappears with it.',
    },
    distractors: [
      {
        es: 'A un fichero en /var/log, que el orquestador lee del disco del contenedor.',
        en: 'To a file in /var/log, which the orchestrator reads from the container disk.',
      },
      {
        es: 'Solo al agregador, por red. La salida estándar se pierde.',
        en: 'Only to the aggregator, over the network. Standard output is lost.',
      },
    ],
    explanation: {
      es: 'Si el proceso muere, el disco del contenedor se va. La salida estándar es lo que queda en el sistema de logs.',
      en: 'If the process dies, the container disk goes with it. Standard output is what remains in the log system.',
    },
  },
  {
    id: 'be-test2-19',
    topic: 'Observabilidad',
    prompt: {
      es: '¿Cuáles son las cuatro señales de oro?',
      en: 'What are the four golden signals?',
    },
    answer: {
      es: 'Latencia, tráfico, errores y saturación. Con esas cuatro ves si vas lento, cuánto entra, cuánto falla y si te estás quedando sin recursos.',
      en: 'Latency, traffic, errors and saturation. With those four you see if you are slow, how much comes in, how much fails and whether you are running out of resources.',
    },
    distractors: [
      {
        es: 'CPU, RAM, disco y red. Son las únicas métricas que importan.',
        en: 'CPU, RAM, disk and network. They are the only metrics that matter.',
      },
      {
        es: 'Logs, métricas, trazas y alertas. Las cuatro son herramientas, no señales.',
        en: 'Logs, metrics, traces and alerts. The four are tools, not signals.',
      },
    ],
    explanation: {
      es: 'La CPU alta no dice que el usuario sufra. La latencia y la tasa de error sí. La saturación avisa antes del colapso.',
      en: 'High CPU does not say the user is suffering. Latency and the error rate do. Saturation warns you before the collapse.',
    },
  },
  {
    id: 'be-test2-20',
    topic: 'Observabilidad',
    prompt: {
      es: '¿Qué es un span y qué pasa con el contexto en un hilo async?',
      en: 'What is a span and what happens to the context on an async thread?',
    },
    answer: {
      es: 'Un span es un tramo de la traza, una llamada o un trabajo. El hilo de @Async no hereda el contexto: hay que propagarlo o el tramo queda huérfano.',
      en: 'A span is a piece of the trace, one call or one job. The @Async thread does not inherit the context: you must propagate it or the piece is left orphaned.',
    },
    distractors: [
      {
        es: 'El span es el log completo de la petición. El hilo async lo copia solo.',
        en: 'The span is the full log of the request. The async thread copies it on its own.',
      },
      {
        es: 'No hace falta propagar. El trace id vive en un singleton.',
        en: 'There is no need to propagate. The trace id lives in a singleton.',
      },
    ],
    explanation: {
      es: 'Igual que la seguridad y la transacción, la traza es del hilo. Sin propagarla, el trabajo en segundo plano no se puede seguir.',
      en: 'Same as security and the transaction, the trace belongs to the thread. Without propagating it, the background work cannot be followed.',
    },
  },
];
