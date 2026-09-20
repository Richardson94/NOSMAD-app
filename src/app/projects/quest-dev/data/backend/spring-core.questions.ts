import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_SPRING_CORE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-spring-01',
    topic: 'Inyección de dependencias',
    prompt: {
      es: '¿Por qué se recomienda la inyección por constructor sobre la inyección por campo con @Autowired?',
      en: 'Why is constructor injection recommended over field injection with @Autowired?',
    },
    answer: {
      es: 'Permite campos final, deja explícitas las dependencias y facilita instanciar la clase en pruebas sin el contenedor.',
      en: 'It allows final fields, makes dependencies explicit and lets you instantiate the class in tests without the container.',
    },
    distractors: [
      {
        es: 'Evita las dependencias circulares, porque Spring las resuelve creando un proxy perezoso del colaborador.',
        en: 'It avoids circular dependencies, because Spring resolves them by creating a lazy proxy of the collaborator.',
      },
      {
        es: 'Mejora el arranque, ya que Spring puede instanciar los beans en paralelo al conocer el grafo completo.',
        en: 'It improves startup, since Spring can instantiate beans in parallel once it knows the whole graph.',
      },
    ],
    explanation: {
      es: 'El beneficio es de diseño y testabilidad: un constructor con ocho parámetros grita que la clase hace demasiado, algo que la inyección por campo oculta. Respecto a los ciclos ocurre lo contrario: con constructor Spring falla al arrancar en lugar de tolerarlos, lo que es deseable pero no una ventaja de conveniencia.',
      en: 'The benefit is design and testability: a constructor with eight parameters screams that the class does too much, something field injection hides. Regarding cycles it is the opposite: with constructor injection Spring fails at startup instead of tolerating them, which is desirable but not a convenience advantage.',
    },
  },
  {
    id: 'be-spring-02',
    topic: 'Transacciones',
    prompt: {
      es: 'Un método público llama a otro método @Transactional de la misma clase. ¿Qué ocurre con la transacción?',
      en: 'A public method calls another @Transactional method of the same class. What happens to the transaction?',
    },
    answer: {
      es: 'No se abre, porque la llamada interna no pasa por el proxy que implementa el aspecto.',
      en: 'It is not opened, because the internal call does not go through the proxy implementing the aspect.',
    },
    distractors: [
      {
        es: 'Se abre y se une a la transacción del método llamador si existe, según la propagación REQUIRED.',
        en: 'It is opened and joins the caller transaction if one exists, following REQUIRED propagation.',
      },
      {
        es: 'Se abre una transacción nueva e independiente, porque la anotación se evalúa en cada invocación del método.',
        en: 'A new independent transaction is opened, because the annotation is evaluated on every method invocation.',
      },
    ],
    explanation: {
      es: 'El AOP de Spring por defecto es un proxy que envuelve al bean: una llamada con this va directa al método real y la anotación se ignora silenciosamente, uno de los errores más frecuentes en entrevistas. Se resuelve extrayendo el método a otro bean, autoinyectándose o usando AspectJ.',
      en: 'Spring AOP by default is a proxy wrapping the bean: a this call goes straight to the real method and the annotation is silently ignored, one of the most frequent interview pitfalls. It is fixed by extracting the method to another bean, self-injecting or using AspectJ.',
    },
  },
  {
    id: 'be-spring-03',
    topic: 'Transacciones',
    prompt: {
      es: 'Por defecto, ¿ante qué excepciones hace rollback @Transactional?',
      en: 'By default, which exceptions cause @Transactional to roll back?',
    },
    answer: {
      es: 'Solo ante RuntimeException y Error; las excepciones comprobadas confirman la transacción.',
      en: 'Only RuntimeException and Error; checked exceptions commit the transaction.',
    },
    distractors: [
      {
        es: 'Ante cualquier excepción que salga del método, comprobada o no, salvo que se indique noRollbackFor.',
        en: 'On any exception leaving the method, checked or not, unless noRollbackFor is specified.',
      },
      {
        es: 'Solo ante las excepciones de la jerarquía DataAccessException, porque son las que indican fallo de persistencia.',
        en: 'Only on exceptions from the DataAccessException hierarchy, since those signal persistence failures.',
      },
    ],
    explanation: {
      es: 'Es un comportamiento contraintuitivo: lanzar una IOException comprobada deja los cambios confirmados a menos que se declare rollbackFor. La razón histórica es que las comprobadas se consideran parte del contrato del método, no fallos inesperados.',
      en: 'This is counterintuitive behaviour: throwing a checked IOException leaves the changes committed unless rollbackFor is declared. The historical reason is that checked exceptions are considered part of the method contract rather than unexpected failures.',
    },
  },
  {
    id: 'be-spring-04',
    topic: 'Ámbitos',
    prompt: {
      es: '¿Qué problema aparece al inyectar un bean de ámbito prototype en un singleton?',
      en: 'What problem arises when injecting a prototype-scoped bean into a singleton?',
    },
    answer: {
      es: 'Se inyecta una sola instancia al crear el singleton, así que en la práctica deja de ser prototype.',
      en: 'A single instance is injected when the singleton is created, so in practice it stops behaving as a prototype.',
    },
    distractors: [
      {
        es: 'Spring lanza un error de configuración al arrancar, porque los ámbitos son incompatibles entre sí.',
        en: 'Spring throws a configuration error at startup, because the scopes are incompatible with each other.',
      },
      {
        es: 'Se crea una instancia nueva en cada llamada, lo que degrada el rendimiento del singleton contenedor.',
        en: 'A new instance is created on every call, which degrades the performance of the containing singleton.',
      },
    ],
    explanation: {
      es: 'La inyección ocurre una única vez, durante la construcción del singleton, y esa referencia se conserva para siempre: el bug es silencioso y suele descubrirse cuando el estado se comparte entre peticiones. Para obtener una instancia nueva por uso se recurre a ObjectProvider, un lookup method o un proxy de ámbito.',
      en: 'Injection happens only once, while building the singleton, and that reference is kept forever: the bug is silent and usually surfaces when state leaks between requests. To get a fresh instance per use you rely on ObjectProvider, a lookup method or a scoped proxy.',
    },
  },
  {
    id: 'be-spring-05',
    topic: 'Configuración',
    prompt: {
      es: '¿Qué hace la anotación @SpringBootApplication?',
      en: 'What does the @SpringBootApplication annotation do?',
    },
    answer: {
      es: 'Combina @Configuration, @EnableAutoConfiguration y @ComponentScan en una sola anotación.',
      en: 'It combines @Configuration, @EnableAutoConfiguration and @ComponentScan into a single annotation.',
    },
    distractors: [
      {
        es: 'Arranca el contexto e inicia el servidor embebido, sustituyendo la llamada a SpringApplication.run.',
        en: 'It starts the context and the embedded server, replacing the SpringApplication.run call.',
      },
      {
        es: 'Registra los beans de la aplicación y expone los endpoints de Actuator para monitoreo.',
        en: 'It registers the application beans and exposes the Actuator endpoints for monitoring.',
      },
    ],
    explanation: {
      es: 'Es una anotación de conveniencia que solo configura: el escaneo arranca en su paquete (de ahí la importancia de ubicarla en la raíz) y habilita la autoconfiguración por classpath. Arrancar el contexto sigue siendo trabajo de SpringApplication.run, y Actuator requiere su propia dependencia.',
      en: 'It is a convenience annotation that only configures: scanning starts at its package (hence the importance of placing it at the root) and it enables classpath-based auto-configuration. Starting the context is still SpringApplication.run job, and Actuator requires its own dependency.',
    },
  },
  {
    id: 'be-spring-06',
    topic: 'Perfiles y propiedades',
    prompt: {
      es: '¿Qué ventaja tiene @ConfigurationProperties frente a varios @Value?',
      en: 'What advantage does @ConfigurationProperties have over multiple @Value annotations?',
    },
    answer: {
      es: 'Agrupa y valida la configuración con tipado fuerte y soporta estructuras anidadas y listas.',
      en: 'It groups and validates configuration with strong typing and supports nested structures and lists.',
    },
    distractors: [
      {
        es: 'Permite recargar los valores en caliente cuando cambia el archivo de propiedades, sin reiniciar la aplicación.',
        en: 'It allows hot reloading of values when the properties file changes, without restarting the application.',
      },
      {
        es: 'Resuelve expresiones SpEL, algo que @Value no admite al leer propiedades del entorno.',
        en: 'It resolves SpEL expressions, which @Value does not support when reading environment properties.',
      },
    ],
    explanation: {
      es: 'Su valor está en tratar la configuración como un objeto de dominio: un POJO con prefijo, validable con @Validated y fácil de inyectar completo. La recarga en caliente necesita @RefreshScope de Spring Cloud, y el soporte de SpEL es justamente una característica de @Value.',
      en: 'Its value is treating configuration as a domain object: a POJO with a prefix, validatable with @Validated and easy to inject as a whole. Hot reloading needs Spring Cloud @RefreshScope, and SpEL support is precisely a @Value feature.',
    },
  },
  {
    id: 'be-spring-07',
    topic: 'AOP',
    prompt: {
      es: '¿Cómo implementa Spring AOP los aspectos sobre un bean?',
      en: 'How does Spring AOP implement aspects on a bean?',
    },
    answer: {
      es: 'Creando un proxy dinámico (por interfaz o con CGLIB) que envuelve al bean y aplica los interceptores.',
      en: 'By creating a dynamic proxy (interface-based or CGLIB) that wraps the bean and applies the interceptors.',
    },
    distractors: [
      {
        es: 'Modificando el bytecode de la clase durante la compilación mediante el tejedor de AspectJ.',
        en: 'By modifying the class bytecode at compile time through the AspectJ weaver.',
      },
      {
        es: 'Registrando un listener en el contexto que intercepta las invocaciones a los métodos anotados.',
        en: 'By registering a context listener that intercepts invocations of the annotated methods.',
      },
    ],
    explanation: {
      es: 'El proxy explica de golpe varias reglas prácticas: los métodos privados o final no se pueden interceptar y las llamadas internas con this omiten el aspecto. El tejido de bytecode es AspectJ, una alternativa que sí resuelve esos límites pero requiere configuración adicional.',
      en: 'The proxy explains several practical rules at once: private or final methods cannot be intercepted and internal this calls bypass the aspect. Bytecode weaving is AspectJ, an alternative that does solve those limits but requires extra setup.',
    },
  },
  {
    id: 'be-spring-08',
    topic: 'Beans',
    prompt: {
      es: '¿Cuál es la diferencia entre @Component y @Bean?',
      en: 'What is the difference between @Component and @Bean?',
    },
    answer: {
      es: '@Component marca una clase propia para que el escaneo la registre; @Bean registra el objeto que devuelve un método de configuración.',
      en: '@Component marks your own class for component scanning; @Bean registers the object returned by a configuration method.',
    },
    distractors: [
      {
        es: '@Component crea un singleton y @Bean crea una instancia nueva en cada inyección del método productor.',
        en: '@Component creates a singleton while @Bean creates a new instance on every injection of the producer method.',
      },
      {
        es: '@Component se resuelve en tiempo de compilación y @Bean se resuelve de forma perezosa al primer uso.',
        en: '@Component is resolved at compile time and @Bean is resolved lazily on first use.',
      },
    ],
    explanation: {
      es: 'La diferencia es quién construye el objeto: con @Bean el desarrollador controla la creación, lo que es imprescindible para clases de terceros que no se pueden anotar. Ambos son singleton por defecto (Spring intercepta el método @Bean para no duplicar instancias) y ambos se registran al arrancar el contexto.',
      en: 'The difference is who builds the object: with @Bean the developer controls creation, which is essential for third-party classes you cannot annotate. Both are singletons by default (Spring intercepts the @Bean method to avoid duplicate instances) and both are registered when the context starts.',
    },
  },
  {
    id: 'be-spring-09',
    topic: 'Programación asíncrona',
    prompt: {
      es: '¿Qué condición debe cumplirse para que un método @Async se ejecute realmente en otro hilo?',
      en: 'What condition must be met for an @Async method to actually run on another thread?',
    },
    answer: {
      es: 'Que se habilite con @EnableAsync y que la llamada venga de otro bean, atravesando el proxy.',
      en: 'That it is enabled with @EnableAsync and that the call comes from another bean, going through the proxy.',
    },
    distractors: [
      {
        es: 'Que el método devuelva CompletableFuture o Future, porque void no puede ejecutarse de forma asíncrona.',
        en: 'That the method returns CompletableFuture or Future, because void cannot be executed asynchronously.',
      },
      {
        es: 'Que se configure un TaskExecutor propio, ya que sin él Spring ejecuta el método de forma sincrónica.',
        en: 'That a custom TaskExecutor is configured, since without one Spring runs the method synchronously.',
      },
    ],
    explanation: {
      es: 'Comparte el talón de Aquiles de @Transactional: sin @EnableAsync o con una llamada interna, la anotación no hace nada. Un método void es válido (solo que no se puede observar el resultado ni la excepción) y sin executor propio Spring usa uno por defecto, pero sigue siendo asíncrono.',
      en: 'It shares the Achilles heel of @Transactional: without @EnableAsync or with an internal call, the annotation does nothing. A void method is valid (you just cannot observe the result or the exception) and without a custom executor Spring uses a default one, still asynchronously.',
    },
  },
];
