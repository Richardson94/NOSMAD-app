import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_TESTING_DEVOPS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-test2-01',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Cuál es el alcance de @DataJpaTest y por qué revierte la transacción al terminar cada prueba?',
      en: 'What is the scope of @DataJpaTest and why does it roll the transaction back when each test finishes?',
    },
    answer: {
      es: 'Carga solo el slice de JPA (repositorios, EntityManager y DataSource) y, al ir anotada con @Transactional, Spring Test hace rollback para no dejar filas sucias.',
      en: 'It loads only the JPA slice (repositories, EntityManager and DataSource) and, because it is annotated with @Transactional, Spring Test rolls back so leftover rows are not left behind.',
    },
    distractors: [
      {
        es: 'Arranca el contexto completo de Spring Boot, incluidos controladores, y solo revierte si añades @Rollback(true) en cada método.',
        en: 'It starts the full Spring Boot context, including controllers, and rolls back only if you add @Rollback(true) on each method.',
      },
      {
        es: 'Usa siempre H2 en memoria y destruye el esquema al cerrar la clase; el rollback es un extra de rendimiento, no el mecanismo de aislamiento.',
        en: 'It always uses in-memory H2 and drops the schema when the class closes; the rollback is a performance extra, not the isolation mechanism.',
      },
    ],
    explanation: {
      es: '@DataJpaTest es un test de slice: auto-configura JPA y una base embebida (o la que sustituyas) y deja fuera la capa web. La clase llega con @Transactional y Spring Test, salvo @Rollback(false), deshace el trabajo al salir del método, que es más barato y más seguro que truncar tablas a mano. El contexto completo es @SpringBootTest, y H2 no es obligatorio: puedes reemplazar el DataSource con Testcontainers.',
      en: '@DataJpaTest is a slice test: it auto-configures JPA and an embedded database (or the one you replace) and leaves the web layer out. The class comes with @Transactional and Spring Test rolls the work back when the method exits, unless you set @Rollback(false), which is cheaper and safer than truncating tables by hand. The full context is @SpringBootTest, and H2 is not mandatory: you can replace the DataSource with Testcontainers.',
    },
  },
  {
    id: 'be-test2-02',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Qué opciones de webEnvironment ofrece @SpringBootTest y qué implica cada una?',
      en: 'What webEnvironment options does @SpringBootTest offer and what does each one imply?',
    },
    answer: {
      es: 'MOCK (por defecto) simula el servlet sin servidor real; RANDOM_PORT arranca uno embebido en un puerto efímero; DEFINED_PORT usa server.port; NONE no levanta entorno web.',
      en: 'MOCK (the default) simulates the servlet without a real server; RANDOM_PORT starts an embedded one on an ephemeral port; DEFINED_PORT uses server.port; NONE does not start a web environment.',
    },
    distractors: [
      {
        es: 'RANDOM_PORT reutiliza el mismo puerto en toda la suite para no romper el cacheo del contexto, mientras que DEFINED_PORT es el que arranca un servidor nuevo por prueba.',
        en: 'RANDOM_PORT reuses the same port across the suite so the context cache is not broken, while DEFINED_PORT is the one that starts a new server per test.',
      },
      {
        es: 'MOCK arranca Tomcat en un puerto aleatorio pero intercepta las llamadas con MockMvc, combinando servidor real y cliente simulado.',
        en: 'MOCK starts Tomcat on a random port but intercepts calls with MockMvc, combining a real server and a simulated client.',
      },
    ],
    explanation: {
      es: 'El enumerado SpringBootTest.WebEnvironment decide si hay contenedor de servlets de verdad. Con MOCK usas MockMvc contra DispatcherServlet; con RANDOM_PORT usas TestRestTemplate o WebTestClient contra HTTP real, y el puerto aleatorio evita colisiones en paralelo. DEFINED_PORT pisa server.port (malo si varias clases corren a la vez) y NONE sirve cuando el test no es web, por ejemplo un runner de mensajería.',
      en: 'The SpringBootTest.WebEnvironment enum decides whether a real servlet container exists. With MOCK you use MockMvc against DispatcherServlet; with RANDOM_PORT you use TestRestTemplate or WebTestClient against real HTTP, and the random port avoids collisions in parallel. DEFINED_PORT overwrites server.port (bad if several classes run at once) and NONE is for a non-web test, for example a messaging runner.',
    },
  },
  {
    id: 'be-test2-03',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿En qué se diferencia MockMvc construido con standaloneSetup del que usa el contexto completo?',
      en: 'How does MockMvc built with standaloneSetup differ from the one that uses the full context?',
    },
    answer: {
      es: 'standaloneSetup monta MockMvc sobre una instancia del controlador sin contexto Spring, así que filtros, @ControllerAdvice y conversores hay que registrarlos a mano; el contexto los cablea solo.',
      en: 'standaloneSetup mounts MockMvc on a controller instance without a Spring context, so filters, @ControllerAdvice and converters must be registered by hand; the context wires them for you.',
    },
    distractors: [
      {
        es: 'standaloneSetup es más rápido porque igual carga @WebMvcTest pero omite los filtros de seguridad, que es lo único que no aplica.',
        en: 'standaloneSetup is faster because it still loads @WebMvcTest but skips the security filters, which is the only piece it does not apply.',
      },
      {
        es: 'webAppContextSetup no puede aplicar @ControllerAdvice, y por eso existe standaloneSetup: para poder registrar el advice a mano.',
        en: 'webAppContextSetup cannot apply @ControllerAdvice, which is why standaloneSetup exists: so you can register the advice by hand.',
      },
    ],
    explanation: {
      es: 'MockMvcBuilders.standaloneSetup(controller) es una prueba unitaria de MVC: instancias el controlador, inyectas colaboradores con Mockito y, si quieres advice o un Validator, los añades con setControllerAdvice o setValidator. @AutoConfigureMockMvc y MockMvcBuilders.webAppContextSetup(context) sí levantan el WebApplicationContext, incluidos filtros y serialización. @WebMvcTest no es standalone: es un slice que carga la capa web real con beans simulados.',
      en: 'MockMvcBuilders.standaloneSetup(controller) is a unit-level MVC test: you instantiate the controller, inject collaborators with Mockito and, if you want advice or a Validator, you add them with setControllerAdvice or setValidator. @AutoConfigureMockMvc and MockMvcBuilders.webAppContextSetup(context) do raise the WebApplicationContext, including filters and serialisation. @WebMvcTest is not standalone: it is a slice that loads the real web layer with mocked beans.',
    },
  },
  {
    id: 'be-test2-04',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Qué diferencia hay entre @MockBean y un @Mock de Mockito, y cómo afecta eso al cacheo del contexto?',
      en: 'What is the difference between @MockBean and a Mockito @Mock, and how does that affect context caching?',
    },
    answer: {
      es: '@MockBean sustituye un bean dentro del ApplicationContext y por tanto crea una clave de cache distinta; @Mock vive fuera del contenedor y no altera el cacheo.',
      en: '@MockBean replaces a bean inside the ApplicationContext and therefore creates a distinct cache key; @Mock lives outside the container and does not alter caching.',
    },
    distractors: [
      {
        es: 'Ambos sustituyen beans del contexto, pero @MockBean se reinicia entre pruebas y @Mock no, que es la única diferencia que importa para el cache.',
        en: 'Both replace beans in the context, but @MockBean is reset between tests and @Mock is not, which is the only difference that matters for the cache.',
      },
      {
        es: '@MockBean es un atajo de Mockito.mock que Spring inyecta sin cambiar la clave de cache; por eso puedes mezclar combinaciones de mocks sin coste.',
        en: '@MockBean is a shortcut for Mockito.mock that Spring injects without changing the cache key; that is why you can mix mock combinations at no cost.',
      },
    ],
    explanation: {
      es: 'MergedContextConfiguration incluye las definiciones de @MockBean, así que dos clases que mockean beans distintos no comparten contexto y la suite se ralentiza. @Mock con MockitoExtension (o @InjectMocks) ni siquiera arranca Spring: el sistema bajo prueba se instancia a mano. Si el test ya usa @SpringBootTest, prefiere pocos @MockBean estables o extrae la lógica a una prueba unitaria con @Mock para no explotar la cache.',
      en: 'MergedContextConfiguration includes the @MockBean definitions, so two classes that mock different beans do not share a context and the suite slows down. @Mock with MockitoExtension (or @InjectMocks) does not even start Spring: the system under test is instantiated by hand. If the test already uses @SpringBootTest, prefer a few stable @MockBean declarations or extract the logic to a unit test with @Mock so the cache does not explode.',
    },
  },
  {
    id: 'be-test2-05',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Cuándo usas when(...).thenReturn(...) y cuándo doThrow(...).when(mock).metodo() al simular un método void?',
      en: 'When do you use when(...).thenReturn(...) and when do you use doThrow(...).when(mock).method() to stub a void method?',
    },
    answer: {
      es: 'thenReturn configura el retorno de un método que devuelve valor; en un void when no compila, así que la excepción (o doNothing) se declara con doThrow o doNothing sobre el mock.',
      en: 'thenReturn stubs a method that returns a value; on a void method when does not compile, so the exception (or doNothing) is declared with doThrow or doNothing on the mock.',
    },
    distractors: [
      {
        es: 'thenReturn también vale para void si pasas null; doThrow es solo para spies, donde when llamaría al método real.',
        en: 'thenReturn also works for void if you pass null; doThrow is only for spies, where when would call the real method.',
      },
      {
        es: 'doThrow es la API de Mockito 1; desde Mockito 2 se usa when incluso en métodos void, envolviendo la llamada con doCallRealMethod.',
        en: 'doThrow is the Mockito 1 API; since Mockito 2 you use when even on void methods, wrapping the call with doCallRealMethod.',
      },
    ],
    explanation: {
      es: 'when necesita una expresión con tipo de retorno, y un método void no lo tiene, de ahí Mockito.doThrow(ex).when(mock).save(entity) o doNothing().when(mock).delete(id). La forma doAnswer/doReturn/doThrow también es la correcta en un spy, porque when(spy.metodo()) ejecutaría la implementación real al registrar el stub. thenReturn(null) no arregla un void: ni siquiera compila.',
      en: 'when needs an expression with a return type, and a void method does not have one, hence Mockito.doThrow(ex).when(mock).save(entity) or doNothing().when(mock).delete(id). The doAnswer/doReturn/doThrow form is also the right one on a spy, because when(spy.method()) would run the real implementation while registering the stub. thenReturn(null) does not fix a void method: it does not even compile.',
    },
  },
  {
    id: 'be-test2-06',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Cuál es el caso de uso típico de ArgumentCaptor?',
      en: 'What is the typical use case of ArgumentCaptor?',
    },
    answer: {
      es: 'Capturar el argumento que el código bajo prueba construyó y pasó al mock, para asertar campos de un objeto que el test no tiene como referencia.',
      en: 'Capture the argument that the code under test built and passed to the mock, so you can assert fields of an object the test does not hold as a reference.',
    },
    distractors: [
      {
        es: 'Forzar que el mock devuelva valores distintos en llamadas consecutivas, sustituyendo thenReturn por respuestas encadenadas.',
        en: 'Force the mock to return different values on consecutive calls, replacing thenReturn with chained answers.',
      },
      {
        es: 'Verificar el orden de las llamadas cuando intervienen varios mocks, sustituyendo a InOrder de Mockito.',
        en: 'Verify the order of calls when several mocks are involved, replacing Mockito InOrder.',
      },
    ],
    explanation: {
      es: 'Si el servicio hace repository.save(new Order(...)) no tienes la instancia; ArgumentCaptor.forClass(Order.class) más verify(repository).save(captor.capture()) te deja leer captor.getValue(). ThenReturn encadenado y thenAnswer cubren valores de retorno, no inspección de entrada, y el orden se afirma con Mockito.inOrder. Abusar del captor para reescribir media entidad suele indicar que conviene asertar un equivalente con equals o un matcher como argThat.',
      en: 'If the service does repository.save(new Order(...)) you do not have the instance; ArgumentCaptor.forClass(Order.class) plus verify(repository).save(captor.capture()) lets you read captor.getValue(). Chained thenReturn and thenAnswer cover return values, not input inspection, and order is asserted with Mockito.inOrder. Abusing the captor to rewrite half an entity often means you should assert an equal instance or a matcher such as argThat.',
    },
  },
  {
    id: 'be-test2-07',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Qué comprueban verify con times y never, y qué aporta el stubbing estricto de Mockito?',
      en: 'What do verify with times and never check, and what does Mockito strict stubbing add?',
    },
    answer: {
      es: 'times y never afirman cuántas veces se invocó un método; el stubbing estricto, activo con MockitoExtension, falla si configuraste un stub que nadie usó.',
      en: 'times and never assert how many times a method was invoked; strict stubbing, enabled by MockitoExtension, fails if you configured a stub that nobody used.',
    },
    distractors: [
      {
        es: 'never solo vale en spies; en un mock debes usar times(0). El stubbing estricto ignora stubs sin usar salvo que actives LENIENT.',
        en: 'never is only valid on spies; on a mock you must use times(0). Strict stubbing ignores unused stubs unless you enable LENIENT.',
      },
      {
        es: 'times cuenta invocaciones de toda la suite porque los mocks no se reinician; el stubbing estricto solo aplica a doReturn, no a when.',
        en: 'times counts invocations across the whole suite because mocks are not reset; strict stubbing only applies to doReturn, not to when.',
      },
    ],
    explanation: {
      es: 'verify(mock, times(2)).save(...) y verify(mock, never()).delete(...) documentan interacciones; never es azúcar de times(0) y funciona igual en mock y spy. MockitoExtension (JUnit 5) usa strictness STRICT_STUBS: un when sin invocación lanza UnnecessaryStubbingException, y un argumento inesperado puede lanzar PotentialStubbingProblem. Para un stub deliberadamente opcional usa lenient() o @MockitoSettings(strictness = Strictness.LENIENT); MockitoExtension sí reinicia el mock entre métodos.',
      en: 'verify(mock, times(2)).save(...) and verify(mock, never()).delete(...) document interactions; never is sugar for times(0) and works the same on a mock and a spy. MockitoExtension (JUnit 5) uses STRICT_STUBS strictness: a when without an invocation throws UnnecessaryStubbingException, and an unexpected argument may throw PotentialStubbingProblem. For a deliberately optional stub use lenient() or @MockitoSettings(strictness = Strictness.LENIENT); MockitoExtension does reset the mock between methods.',
    },
  },
  {
    id: 'be-test2-08',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Qué límites tiene Mockito con métodos estáticos y finales, y qué dice eso del diseño?',
      en: 'What limits does Mockito have with static and final methods, and what does that say about the design?',
    },
    answer: {
      es: 'Los estáticos solo se simulan dentro de un MockedStatic y los finales piden el inline mock maker; necesitarlo suele indicar que el código debería depender de un colaborador inyectable.',
      en: 'Statics are stubbed only inside a MockedStatic and finals need the inline mock maker; needing that often means the code should depend on an injectable collaborator.',
    },
    distractors: [
      {
        es: 'Mockito 5 mockea estáticos y finales por defecto sin alcance especial, así que esos límites ya no existen y no dicen nada del diseño.',
        en: 'Mockito 5 mocks statics and finals by default with no special scope, so those limits no longer exist and they say nothing about design.',
      },
      {
        es: 'Los finales se mockean con @MockBean y los estáticos requieren PowerMock, que Spring Boot 3 trae de serie en spring-boot-starter-test.',
        en: 'Finals are mocked with @MockBean and statics require PowerMock, which Spring Boot 3 ships by default in spring-boot-starter-test.',
      },
    ],
    explanation: {
      es: 'Desde Mockito 5 el inline mock maker es el predeterminado y permite mockear clases y métodos final, pero un estático sigue exigiendo Mockito.mockStatic(Tipo.class) en un try-with-resources de tipo MockedStatic. PowerMock no forma parte de spring-boot-starter-test y choca con el mock maker moderno. Si para probar tienes que congelar Instant.now() o SecurityContextHolder, el diseño suele mejorar inyectando Clock o un puerto en vez de abrir esa caja de estáticos.',
      en: 'Since Mockito 5 the inline mock maker is the default and can mock final classes and methods, but a static still requires Mockito.mockStatic(Type.class) in a MockedStatic try-with-resources. PowerMock is not part of spring-boot-starter-test and clashes with the modern mock maker. If you have to freeze Instant.now() or SecurityContextHolder in order to test, the design usually improves by injecting Clock or a port instead of opening that static box.',
    },
  },
  {
    id: 'be-test2-09',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Cómo cachea Spring el ApplicationContext entre pruebas y cuál es el costo de @DirtiesContext?',
      en: 'How does Spring cache the ApplicationContext across tests and what is the cost of @DirtiesContext?',
    },
    answer: {
      es: 'Reutiliza un contexto cuya MergedContextConfiguration coincide, y por eso la suite se mantiene rápida; @DirtiesContext tira esa cache y vuelve a refrescar, así que solo cabe cuando el test muta estado global.',
      en: 'It reuses a context whose MergedContextConfiguration matches, which is why the suite stays fast; @DirtiesContext drops that cache and refreshes again, so it only belongs when the test mutates global state.',
    },
    distractors: [
      {
        es: 'La cache es solo por clase de prueba; @DirtiesContext hace falta entre métodos de la misma clase o los beans se filtran de uno a otro.',
        en: 'The cache is per test class only; @DirtiesContext is required between methods of the same class or beans leak from one to the next.',
      },
      {
        es: '@DirtiesContext es barato porque solo recrea los beans sucios, no el ApplicationContext entero.',
        en: '@DirtiesContext is cheap because it only recreates the dirty beans, not the whole ApplicationContext.',
      },
    ],
    explanation: {
      es: 'Spring Test indexa contextos por configuración (clases, propiedades, @MockBean, webEnvironment) y los comparte entre clases distintas. @DirtiesContext, con classMode AFTER_CLASS o AFTER_EACH_TEST_METHOD, cierra y reconstruye todo el ApplicationContext, que en Spring Boot 3 puede costar varios segundos. El aislamiento habitual de datos lo da el rollback de @Transactional, no suciar el contexto; reserva @DirtiesContext para un test que altera un singleton o una propiedad de sistema.',
      en: 'Spring Test indexes contexts by configuration (classes, properties, @MockBean, webEnvironment) and shares them across different classes. @DirtiesContext, with classMode AFTER_CLASS or AFTER_EACH_TEST_METHOD, closes and rebuilds the whole ApplicationContext, which in Spring Boot 3 can cost several seconds. Usual data isolation comes from @Transactional rollback, not from dirtying the context; reserve @DirtiesContext for a test that mutates a singleton or a system property.',
    },
  },
  {
    id: 'be-test2-10',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Cómo se reutilizan contenedores en Testcontainers y qué aporta @ServiceConnection en Spring Boot 3.1?',
      en: 'How are containers reused in Testcontainers and what does @ServiceConnection add in Spring Boot 3.1?',
    },
    answer: {
      es: 'withReuse(true) evita pagar el arranque en cada ejecución; @ServiceConnection registra el contenedor como fuente de conexión y te ahorra el @DynamicPropertySource en las tecnologías soportadas.',
      en: 'withReuse(true) avoids paying startup on every run; @ServiceConnection registers the container as the connection source and saves you the @DynamicPropertySource for supported technologies.',
    },
    distractors: [
      {
        es: '@ServiceConnection arranca un contenedor nuevo por método de prueba y desactiva la reutilización para garantizar aislamiento.',
        en: '@ServiceConnection starts a new container per test method and turns reuse off to guarantee isolation.',
      },
      {
        es: 'withReuse es el equivalente Testcontainers de @DirtiesContext: resetea el esquema para que Spring Boot pueda cachear el DataSource.',
        en: 'withReuse is the Testcontainers equivalent of @DirtiesContext: it resets the schema so Spring Boot can cache the DataSource.',
      },
    ],
    explanation: {
      es: 'Un @Container estático vive toda la clase; withReuse(true) más testcontainers.reuse.enable en la configuración local deja el contenedor vivo entre JVM, que es lo contrario de recrearlo por método. @ServiceConnection (paquete org.springframework.boot.testcontainers.service.connection) publica ConnectionDetails (JDBC, Kafka, Redis...) y Spring Boot las consume sin copiar host y puerto a mano. El esquema sucio se limpia con rollback o migraciones, no con reuse.',
      en: 'A static @Container lives for the whole class; withReuse(true) plus testcontainers.reuse.enable in the local config leaves the container alive across JVMs, which is the opposite of recreating it per method. @ServiceConnection (package org.springframework.boot.testcontainers.service.connection) publishes ConnectionDetails (JDBC, Kafka, Redis...) and Spring Boot consumes them without copying host and port by hand. A dirty schema is cleaned with rollback or migrations, not with reuse.',
    },
  },
  {
    id: 'be-test2-11',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Cómo simulas un servicio HTTP externo con WireMock o con MockRestServiceServer?',
      en: 'How do you simulate an external HTTP service with WireMock or with MockRestServiceServer?',
    },
    answer: {
      es: 'MockRestServiceServer intercepta un RestTemplate o RestClient sin abrir puerto; WireMock es un servidor HTTP real y también cubre WebClient, Feign y clientes que no controlas.',
      en: 'MockRestServiceServer intercepts a RestTemplate or RestClient without opening a port; WireMock is a real HTTP server and also covers WebClient, Feign and clients you do not control.',
    },
    distractors: [
      {
        es: 'WireMock solo funciona con RestTemplate; MockRestServiceServer es la opción para WebClient porque se engancha al event loop de Netty.',
        en: 'WireMock only works with RestTemplate; MockRestServiceServer is the option for WebClient because it hooks into the Netty event loop.',
      },
      {
        es: 'Ambos levantan un servidor HTTP local; la diferencia es que MockRestServiceServer es el bean de Spring y WireMock es un módulo de Testcontainers.',
        en: 'Both start a local HTTP server; the difference is that MockRestServiceServer is the Spring bean and WireMock is a Testcontainers module.',
      },
    ],
    explanation: {
      es: 'MockRestServiceServer.createServer(restTemplate) (o el equivalente de RestClient) sustituye el RequestFactory y encaja expect(requestTo(...)).andRespond(withSuccess(...)). WebClient, OpenFeign o un SDK de terceros no pasan por ese interceptor, así que levantas WireMock con @RegisterExtension WireMockExtension (o @WireMockTest) y apuntas el base-url al puerto del servidor. MockWebServer de OkHttp es otra alternativa real de HTTP; Testcontainers no es requisito de WireMock.',
      en: 'MockRestServiceServer.createServer(restTemplate) (or the RestClient equivalent) replaces the RequestFactory and fits expect(requestTo(...)).andRespond(withSuccess(...)). WebClient, OpenFeign or a third-party SDK do not go through that interceptor, so you start WireMock with @RegisterExtension WireMockExtension (or @WireMockTest) and point the base-url at the server port. OkHttp MockWebServer is another real HTTP alternative; Testcontainers is not a WireMock requirement.',
    },
  },
  {
    id: 'be-test2-12',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Qué estrategia usas para probar un consumidor de Kafka o RabbitMQ?',
      en: 'What strategy do you use to test a Kafka or RabbitMQ consumer?',
    },
    answer: {
      es: 'Levantas el broker con Testcontainers, publicas un mensaje conocido, esperas con Awaitility a que el listener produzca el efecto y asertas sobre la base o el tópico de salida.',
      en: 'You raise the broker with Testcontainers, publish a known message, wait with Awaitility until the listener produces the side effect and assert on the database or the outbound topic.',
    },
    distractors: [
      {
        es: 'Invocas el método @KafkaListener o @RabbitListener directamente desde el test, porque la anotación ya garantiza el mismo camino de serialización.',
        en: 'You invoke the @KafkaListener or @RabbitListener method directly from the test, because the annotation already guarantees the same serialisation path.',
      },
      {
        es: 'Pones @MockBean sobre el listener y verificas que fue invocado; levantar un broker solo corresponde a sondas de extremo a extremo en producción.',
        en: 'You put @MockBean on the listener and verify it was invoked; spinning up a broker only belongs to end-to-end probes in production.',
      },
    ],
    explanation: {
      es: 'Lo que quieres probar es el contrato real: deserialización, ack/nack, idempotencia y el efecto (un insert, un evento publicado). Un @Container KafkaContainer o RabbitMQContainer más @ServiceConnection, un template que envía y Awaitility.await() hasta que el repositorio cambia evitan sleeps fijos. Llamar al método del listener se salta el converter y el contenedor de mensajería; @EmbeddedKafka es válido en JVM pero menos fiel que el broker de producción. @MockBean sobre el listener vacía precisamente el código bajo prueba.',
      en: 'What you want to test is the real contract: deserialisation, ack/nack, idempotency and the effect (an insert, a published event). A @Container KafkaContainer or RabbitMQContainer plus @ServiceConnection, a template that sends and Awaitility.await() until the repository changes avoid fixed sleeps. Calling the listener method skips the converter and the messaging container; @EmbeddedKafka is valid in-JVM but less faithful than the production broker. @MockBean on the listener empties out precisely the code under test.',
    },
  },
  {
    id: 'be-test2-13',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Por qué hay que validar las migraciones de Flyway contra una base real en el pipeline?',
      en: 'Why must Flyway migrations be validated against a real database in the pipeline?',
    },
    answer: {
      es: 'Para que el SQL específico del dialecto, el orden de versiones y los checksums fallen en CI sobre el mismo motor que producción, no en el primer despliegue.',
      en: 'So dialect-specific SQL, version order and checksums fail in CI on the same engine as production, not on the first deploy.',
    },
    distractors: [
      {
        es: 'Apuntar Flyway a H2 en CI basta, porque los checksums de migración no dependen del motor.',
        en: 'Pointing Flyway at H2 in CI is enough, because migration checksums do not depend on the engine.',
      },
      {
        es: 'Producción debería ejecutar flyway repair al arrancar para que un desajuste de checksum nunca llegue al pipeline.',
        en: 'Production should run flyway repair on startup so a checksum mismatch never reaches the pipeline.',
      },
    ],
    explanation: {
      es: 'H2 acepta SQL que PostgreSQL o Oracle rechazan (tipos, índices parciales, funciones) y al revés: una migración "verde" en memoria explota al aplicar FlywayMigrate. En el pipeline, @SpringBootTest o un paso flyway validate contra Testcontainers ejecuta V1, V2... sobre el motor real y compara checksums. flyway repair reescribe el historial y oculta el problema; se usa a conciencia tras una corrección, nunca como muleta de arranque.',
      en: 'H2 accepts SQL that PostgreSQL or Oracle reject (types, partial indexes, functions) and the other way around: a "green" in-memory migration explodes when FlywayMigrate applies it. In the pipeline, a @SpringBootTest or a flyway validate step against Testcontainers runs V1, V2... on the real engine and compares checksums. flyway repair rewrites history and hides the problem; it is used deliberately after a correction, never as a startup crutch.',
    },
  },
  {
    id: 'be-test2-14',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Para qué sirven los constructores de datos de prueba y cómo se aíslan las pruebas entre sí?',
      en: 'What are test data builders for and how are tests isolated from each other?',
    },
    answer: {
      es: 'Un builder (u Object Mother) arma grafos válidos sin copiar constructores; el aislamiento exige que cada prueba inserte sus propios datos y no dependa de filas que dejó un método anterior.',
      en: 'A builder (or Object Mother) assembles valid graphs without copying constructors; isolation requires that each test insert its own data and not depend on rows a previous method left behind.',
    },
    distractors: [
      {
        es: 'Un fixture compartido en @BeforeAll cargado una vez por clase es la estrategia de aislamiento preferida, porque es más rápida que un builder por prueba.',
        en: 'A shared @BeforeAll fixture loaded once per class is the preferred isolation strategy, because it is faster than a per-test builder.',
      },
      {
        es: 'El aislamiento se logra randomizando las claves primarias; el builder es opcional si las pruebas corren en orden fijo con @TestMethodOrder.',
        en: 'Isolation is achieved by randomising primary keys; the builder is optional if tests run in a fixed order with @TestMethodOrder.',
      },
    ],
    explanation: {
      es: 'El builder concentra reglas (un Pedido siempre tiene líneas con precio positivo) y deja que cada test sobrescriba solo lo que importa, al estilo OrderBuilder.pending().withCustomer(id). El aislamiento de verdad lo da @Transactional más rollback, un esquema limpio o datos con identidad propia por prueba, nunca @TestMethodOrder, que oculta acoplamiento. @BeforeAll compartido acelera pero convierte un fallo en una cascada y rompe la ejecución en paralelo de JUnit 5.',
      en: 'The builder concentrates rules (an Order always has lines with a positive price) and lets each test override only what matters, in the style of OrderBuilder.pending().withCustomer(id). Real isolation comes from @Transactional plus rollback, a clean schema or per-test identity, never from @TestMethodOrder, which hides coupling. A shared @BeforeAll speeds things up but turns one failure into a cascade and breaks JUnit 5 parallel execution.',
    },
  },
  {
    id: 'be-test2-15',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: 'En pruebas de carga, ¿qué diferencia hay entre rendimiento y latencia y por qué se miran los percentiles p95 y p99?',
      en: 'In load tests, what is the difference between throughput and latency and why do we look at the p95 and p99 percentiles?',
    },
    answer: {
      es: 'El rendimiento cuenta peticiones completadas por segundo y la latencia mide cuánto tarda cada una; p95 y p99 exponen la cola lenta que la media esconde y que el usuario sí nota.',
      en: 'Throughput counts completed requests per second and latency measures how long each one takes; p95 and p99 expose the slow tail that the average hides and that the user does notice.',
    },
    distractors: [
      {
        es: 'El p95 es la media del 5 por ciento más lento, así que es una media más honesta; el p99 solo sirve para penalizaciones de SLA.',
        en: 'p95 is the average of the slowest 5 percent, so it is a more honest mean; p99 is only useful for SLA penalties.',
      },
      {
        es: 'Latencia y rendimiento son inversos por definición, así que optimizar la latencia media siempre sube el throughput en el mismo factor.',
        en: 'Latency and throughput are inverse by definition, so optimising mean latency always raises throughput by the same factor.',
      },
    ],
    explanation: {
      es: 'Gatling o JMeter reportan req/s aparte de los tiempos: puedes tener mucho throughput con una cola terrible si unos pocos hilos se atascan. Un percentil p99 de 2 s significa que una de cada cien peticiones tarda al menos eso, no que sea la media del uno por ciento peor. La media se deja dominar por los rápidos y no predice timeouts del cliente; saturación del pool o GC se ven antes en la cola que en el promedio.',
      en: 'Gatling or JMeter report req/s apart from timings: you can have high throughput with a terrible tail if a few threads stall. A p99 of 2 s means one in a hundred requests takes at least that long, not that it is the mean of the worst one percent. The average is dominated by the fast ones and does not predict client timeouts; pool saturation or GC shows up in the tail before it shows up in the mean.',
    },
  },
  {
    id: 'be-test2-16',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Cuáles son los fundamentos de las pruebas de caos?',
      en: 'What are the fundamentals of chaos testing?',
    },
    answer: {
      es: 'Inyectan un fallo controlado (latencia, muerte de instancia, partición de red) contra una hipótesis de cómo el sistema debe degradarse, y observan si cortocircuitos, reintentos y SLO se sostienen.',
      en: 'They inject a controlled failure (latency, instance kill, network partition) against a hypothesis of how the system should degrade, and observe whether breakers, retries and SLOs still hold.',
    },
    distractors: [
      {
        es: 'Consisten en matar instancias de producción al azar sin hipótesis, porque solo los fallos inesperados enseñan algo.',
        en: 'They consist of randomly killing production instances with no hypothesis, because only unexpected failures teach you anything.',
      },
      {
        es: 'Sustituyen a las pruebas de carga: si el sistema sobrevive al caos, también sobrevivirá un pico de tráfico.',
        en: 'They replace load tests: if the system survives chaos, it will also survive a traffic spike.',
      },
    ],
    explanation: {
      es: 'El manifiesto de Chaos Engineering pide una hipótesis (si cae la base, el circuit breaker de Resilience4j abre y el fallback responde), un blast radius limitado y telemetría para confirmar o refutar. Herramientas como Chaos Mesh, Toxiproxy o un aborto de contenedor en staging inyectan el fallo; no es un game day improvisado en producción. El caos cubre modo de fallo, no capacidad: el pico de tráfico sigue siendo territorio de las pruebas de carga.',
      en: 'The Chaos Engineering manifesto asks for a hypothesis (if the database dies, the Resilience4j circuit breaker opens and the fallback answers), a limited blast radius and telemetry to confirm or refute it. Tools such as Chaos Mesh, Toxiproxy or a container abort in staging inject the failure; it is not an improvised game day in production. Chaos covers failure mode, not capacity: the traffic spike remains the territory of load tests.',
    },
  },
  {
    id: 'be-test2-17',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Qué buenas prácticas aplicas a la imagen Docker de un Spring Boot respecto a capas, imagen base y usuario?',
      en: 'What good practices do you apply to a Spring Boot Docker image regarding layers, base image and user?',
    },
    answer: {
      es: 'Partes la imagen con layertools para que las dependencias queden cacheadas si solo cambian las clases, eliges una base JRE mínima como eclipse-temurin y ejecutas el proceso como USER no root.',
      en: 'You split the image with layertools so dependencies stay cached when only classes change, you pick a minimal JRE base such as eclipse-temurin and you run the process as a non-root USER.',
    },
    distractors: [
      {
        es: 'Un único COPY del fat JAR cachea igual porque Docker hashea el fichero; correr como root hace falta para que la JVM bindee puertos privilegiados.',
        en: 'A single COPY of the fat JAR caches just as well because Docker hashes the file; running as root is required so the JVM can bind privileged ports.',
      },
      {
        es: 'La imagen JDK es preferible a la JRE porque la compilación nativa de Spring Boot necesita javac en runtime; el usuario puede seguir siendo root dentro del contenedor aislado.',
        en: 'The JDK image is preferable to the JRE because Spring Boot native compilation needs javac at runtime; the user can stay root inside the isolated container.',
      },
    ],
    explanation: {
      es: 'java -Djarmode=layertools -jar app.jar extract genera dependencies, spring-boot-loader, snapshot-dependencies y application, y el Dockerfile las copia en ese orden para no invalidar la capa de Maven en cada commit. eclipse-temurin:21-jre (o distroless) basta para un JAR; javac no se usa en runtime de una app JVM y Native Image se construye en una etapa previa. El USER no root limita el impacto de un RCE, y el puerto 8080 no es privilegiado.',
      en: 'java -Djarmode=layertools -jar app.jar extract produces dependencies, spring-boot-loader, snapshot-dependencies and application, and the Dockerfile copies them in that order so the Maven layer is not invalidated on every commit. eclipse-temurin:21-jre (or distroless) is enough for a JAR; javac is not used at runtime of a JVM app and Native Image is built in an earlier stage. The non-root USER limits the impact of an RCE, and port 8080 is not privileged.',
    },
  },
  {
    id: 'be-test2-18',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Por qué la aplicación debe loguear a la salida estándar y cómo se agregan esos logs cuando corre en contenedores?',
      en: 'Why must the application log to standard output and how are those logs aggregated when it runs in containers?',
    },
    answer: {
      es: 'El proceso escribe líneas (mejor en JSON) a stdout; el runtime de Docker o Kubernetes las recoge y un agente o sidecar las envía al agregador, así que la app no debe gestionar ficheros dentro del contenedor.',
      en: 'The process writes lines (preferably JSON) to stdout; the Docker or Kubernetes runtime collects them and an agent or sidecar ships them to the aggregator, so the app must not manage files inside the container.',
    },
    distractors: [
      {
        es: 'Cada réplica debe escribir en un volumen compartido con un FileAppender rotativo para que Logstash lea una ruta estable.',
        en: 'Each replica should write to a shared volume with a rolling FileAppender so Logstash can read a stable path.',
      },
      {
        es: 'Spring Boot debe activar un appender de socket hacia Logstash en logback-spring; stdout solo vale para desarrollo local.',
        en: 'Spring Boot must enable a socket appender towards Logstash in logback-spring; stdout is only valid for local development.',
      },
    ],
    explanation: {
      es: 'El factor doce pide tratar los logs como un flujo: ConsoleAppender (y logging estructurado de Spring Boot 3) a stdout/stderr. kubelet o el motor de Docker capturan ese flujo y Fluent Bit, Vector o el driver cloud lo reenvían a Loki, Elastic o CloudWatch; un fichero en el contenedor se pierde al reiniciar y un volumen compartido mezcla réplicas. El trace id en MDC viaja en cada línea JSON y el agregador correlaciona sin que la app conozca Logstash.',
      en: 'The twelve-factor app asks you to treat logs as a stream: ConsoleAppender (and Spring Boot 3 structured logging) to stdout/stderr. kubelet or the Docker engine capture that stream and Fluent Bit, Vector or the cloud driver forward it to Loki, Elastic or CloudWatch; a file in the container is lost on restart and a shared volume mixes replicas. The trace id in MDC travels on each JSON line and the aggregator correlates without the app knowing about Logstash.',
    },
  },
  {
    id: 'be-test2-19',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: '¿Cuáles son las cuatro señales de oro y qué describe cada una?',
      en: 'What are the four golden signals and what does each one describe?',
    },
    answer: {
      es: 'Latencia, tráfico, errores y saturación: cuánto tarda el servicio, cuánta demanda recibe, qué fracción falla y cuán cerca está de agotar recursos (hilos, heap, pool).',
      en: 'Latency, traffic, errors and saturation: how long the service takes, how much demand it receives, what fraction fails and how close it is to exhausting resources (threads, heap, pool).',
    },
    distractors: [
      {
        es: 'CPU, memoria, disco y red, porque cubren todos los recursos que la JVM puede agotar.',
        en: 'CPU, memory, disk and network, because they cover every resource the JVM can exhaust.',
      },
      {
        es: 'Trazas, métricas, logs y perfiles, los pilares de observabilidad que exponen Micrometer y Actuator.',
        en: 'Traces, metrics, logs and profiles, the observability pillars that Micrometer and Actuator expose.',
      },
    ],
    explanation: {
      es: 'Google SRE define esas cuatro señales como el tablero mínimo orientado al usuario, no al hardware. En Spring Boot se instrumentan con Micrometer (Timer http.server.requests, contador de errores, Gauge del ThreadPoolTaskExecutor o del HikariPool) y se exportan por Actuator /actuator/prometheus. CPU y memoria alimentan la saturación, pero no sustituyen latencia ni tasa de error; trazas, métricas y logs son telemetría, no las señales en sí.',
      en: 'Google SRE defines those four signals as the minimum user-oriented dashboard, not a hardware one. In Spring Boot they are instrumented with Micrometer (Timer http.server.requests, error counter, Gauge of the ThreadPoolTaskExecutor or HikariPool) and exported through Actuator /actuator/prometheus. CPU and memory feed saturation, but they do not replace latency or error rate; traces, metrics and logs are telemetry, not the signals themselves.',
    },
  },
  {
    id: 'be-test2-20',
    topic: 'Pruebas y observabilidad',
    prompt: {
      es: 'Al instrumentar trazas distribuidas, ¿qué es un span y por qué hay que propagar el contexto en llamadas asíncronas?',
      en: 'When instrumenting distributed traces, what is a span and why must context be propagated on asynchronous calls?',
    },
    answer: {
      es: 'Un span es una unidad de trabajo dentro de una traza; el contexto debe copiarse al hilo (o a las cabeceras) de un @Async, WebClient o mensaje, o el tramo hijo queda huérfano.',
      en: 'A span is a unit of work inside a trace; the context must be copied onto the thread (or the headers) of an @Async, WebClient or message call, or the child span is orphaned.',
    },
    distractors: [
      {
        es: 'Los spans de @Async se crean solos porque Spring copia el MDC; solo hay que configurar el sampler.',
        en: 'Spans for @Async are created on their own because Spring copies the MDC; you only need to configure the sampler.',
      },
      {
        es: 'La propagación de contexto solo hace falta en clientes HTTP; las tuberías reactivas y de mensajería comparten hilo y conservan el span por defecto.',
        en: 'Context propagation is only needed for HTTP clients; reactive and messaging pipelines share the thread and keep the span by default.',
      },
    ],
    explanation: {
      es: 'Micrometer Tracing (Brave u OpenTelemetry) crea un span por operación y lo une a la traza con la cabecera W3C traceparent. Un executor de @Async, un publishOn de Reactor o un listener de Kafka cambian de hilo y, sin ContextSnapshot o un TaskDecorator, el hijo nace con otra traza. Spring no copia el MDC ni el TraceContext por arte de magia: hay que envolver el executor y, en WebFlux, activar la propagación automática de contexto. El sampler decide qué porcentaje se exporta, no si el contexto sobrevive al salto asíncrono.',
      en: 'Micrometer Tracing (Brave or OpenTelemetry) creates a span per operation and joins it to the trace with the W3C traceparent header. An @Async executor, a Reactor publishOn or a Kafka listener changes thread and, without ContextSnapshot or a TaskDecorator, the child is born with another trace. Spring does not copy the MDC or the TraceContext by magic: you must wrap the executor and, in WebFlux, enable automatic context propagation. The sampler decides what percentage is exported, not whether the context survives the async hop.',
    },
  },
];
