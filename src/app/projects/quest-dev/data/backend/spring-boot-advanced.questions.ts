import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_SPRING_BOOT_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-boot-01',
    topic: 'Autoconfiguración',
    prompt: {
      es: '¿Cómo funciona la autoconfiguración de Spring Boot?',
      en: 'How does Spring Boot auto-configuration work?',
    },
    answer: {
      es: 'Boot crea beans cuando ve ciertas librerías en el classpath. Cada configuración se aplica solo si se cumplen sus condiciones, por ejemplo que la clase exista y que tú no hayas definido ya ese bean.',
      en: 'Boot creates beans when it sees certain libraries on the classpath. Each configuration applies only if its conditions match, for example that the class exists and that you have not already defined that bean.',
    },
    distractors: [
      {
        es: 'El escaneo de componentes busca clases de autoconfiguración dentro de tu paquete y las registra todas.',
        en: 'Component scan looks for auto-configuration classes inside your package and registers all of them.',
      },
      {
        es: 'Hay que declarar cada bean de Tomcat, Jackson o el datasource a mano o la aplicación no arranca.',
        en: 'You must declare every Tomcat, Jackson or datasource bean by hand or the application does not start.',
      },
    ],
    explanation: {
      es: 'Las clases candidatas vienen listadas por el módulo, no por tu @ComponentScan. Por eso añadir un starter basta para tener lo básico.',
      en: 'The candidate classes are listed by the module, not by your @ComponentScan. That is why adding a starter is enough for the basics.',
    },
  },
  {
    id: 'be-boot-02',
    topic: 'Autoconfiguración',
    prompt: {
      es: '¿Cómo sustituyes un bean que Boot configura por defecto?',
      en: 'How do you replace a bean that Boot configures by default?',
    },
    answer: {
      es: 'Declaras el tuyo del mismo tipo. Boot no crea el de por defecto si ya existe uno, así que no hace falta marcarlo como primario solo por eso.',
      en: 'You declare your own of the same type. Boot does not create the default if one already exists, so you do not need to mark it primary only for that.',
    },
    distractors: [
      {
        es: 'El de Boot siempre gana. El tuyo solo se usa si lleva @Primary.',
        en: 'The Boot one always wins. Yours is used only if it has @Primary.',
      },
      {
        es: 'Hay que excluir la autoconfiguración entera de la aplicación para cambiar un solo bean.',
        en: 'You must exclude the whole application auto-configuration to change a single bean.',
      },
    ],
    explanation: {
      es: 'Tu configuración se procesa antes. Si ya registraste un DataSource, el automático no se crea.',
      en: 'Your configuration is processed first. If you already registered a DataSource, the automatic one is not created.',
    },
  },
  {
    id: 'be-boot-03',
    topic: 'Starters',
    prompt: {
      es: '¿Qué es un starter de Spring Boot?',
      en: 'What is a Spring Boot starter?',
    },
    answer: {
      es: 'Un paquete de dependencias. Arrastra las librerías coherentes, y los beans aparecen por autoconfiguración al verlas en el classpath.',
      en: 'A dependency pack. It pulls in a consistent set of libraries, and the beans appear by auto-configuration when those libraries are on the classpath.',
    },
    distractors: [
      {
        es: 'Es el código que crea Tomcat y Jackson. Sin el starter no hay autoconfiguración posible.',
        en: 'It is the code that creates Tomcat and Jackson. Without the starter, auto-configuration is impossible.',
      },
      {
        es: 'Es el POM padre que fija la versión de Java de todo el proyecto.',
        en: 'It is the parent POM that pins the Java version of the whole project.',
      },
    ],
    explanation: {
      es: 'Cambiar Tomcat por otro servidor es cambiar el starter, no reescribir beans. Quien fija versiones es el parent o el BOM, no el starter de web.',
      en: 'Replacing Tomcat with another server means changing the starter, not rewriting beans. What pins versions is the parent or the BOM, not the web starter.',
    },
  },
  {
    id: 'be-boot-04',
    topic: 'Propiedades',
    prompt: {
      es: '¿Qué configuración gana: la línea de comandos, una variable de entorno o application.properties?',
      en: 'Which configuration wins: the command line, an environment variable or application.properties?',
    },
    answer: {
      es: 'Gana la línea de comandos, luego la variable de entorno y después el archivo del perfil. Ese archivo del perfil gana al application.properties normal.',
      en: 'The command line wins, then the environment variable, then the profile file. That profile file wins over the plain application.properties.',
    },
    distractors: [
      {
        es: 'El archivo del perfil de producción gana siempre, también sobre la línea de comandos.',
        en: 'The production profile file always wins, including over the command line.',
      },
      {
        es: 'El properties empaquetado en el jar gana a las variables de entorno.',
        en: 'The properties file packaged in the jar wins over environment variables.',
      },
    ],
    explanation: {
      es: 'Un perfil no sube el archivo por encima de los argumentos. Los ficheros de fuera del jar ganan a los de dentro, pero siguen por debajo de las variables.',
      en: 'A profile does not lift the file above the arguments. Files outside the jar beat the ones inside, but they still sit below environment variables.',
    },
  },
  {
    id: 'be-boot-05',
    topic: 'Perfiles',
    prompt: {
      es: '¿Cómo se activa un perfil y qué pasa con un bean anotado con @Profile?',
      en: 'How is a profile activated and what happens to a bean annotated with @Profile?',
    },
    answer: {
      es: 'Con spring.profiles.active, la variable de entorno o un argumento. El bean solo se crea si ese perfil está activo.',
      en: 'With spring.profiles.active, the environment variable or an argument. The bean is created only if that profile is active.',
    },
    distractors: [
      {
        es: 'El bean siempre se registra y @Profile solo retrasa su creación hasta el primer uso.',
        en: 'The bean is always registered and @Profile only delays its creation until first use.',
      },
      {
        es: 'Solo puede haber un perfil. Activar otro apaga el anterior y borra sus beans.',
        en: 'Only one profile can exist. Activating another one turns the previous off and deletes its beans.',
      },
    ],
    explanation: {
      es: 'Puedes tener varios a la vez. En tests se activan con @ActiveProfiles y eso cambia la clave del contexto cacheado.',
      en: 'You can have several at once. In tests they are activated with @ActiveProfiles and that changes the cached context key.',
    },
  },
  {
    id: 'be-boot-06',
    topic: 'Propiedades',
    prompt: {
      es: '¿Qué es el enlace relajado de propiedades?',
      en: 'What is relaxed binding of properties?',
    },
    answer: {
      es: 'La misma propiedad se puede escribir con puntos, guiones, camelCase o como variable de entorno en mayúsculas. @ConfigurationProperties lo acepta. @Value exige la clave exacta.',
      en: 'The same property can be written with dots, dashes, camelCase or as an uppercase environment variable. @ConfigurationProperties accepts that. @Value requires the exact key.',
    },
    distractors: [
      {
        es: '@Value y @ConfigurationProperties relajan igual, así que serverPort lee server.port.',
        en: '@Value and @ConfigurationProperties relax the same way, so serverPort reads server.port.',
      },
      {
        es: 'Solo vale el kebab-case del archivo. El resto se ignora.',
        en: 'Only kebab-case from the file is valid. The rest is ignored.',
      },
    ],
    explanation: {
      es: 'Por eso en un contenedor escribes SERVER_PORT y enlaza con server.port. En un @Value tienes que poner la clave tal cual.',
      en: 'That is why in a container you write SERVER_PORT and it binds to server.port. In a @Value you must put the key as it is.',
    },
  },
  {
    id: 'be-boot-07',
    topic: 'Propiedades',
    prompt: {
      es: '¿Qué diferencia hay entre ${} y #{} en un @Value?',
      en: 'What is the difference between ${} and #{} in a @Value?',
    },
    answer: {
      es: '${nombre:defecto} lee una propiedad y usa el defecto si falta. #{} es una expresión de Spring, por ejemplo para multiplicar ese número.',
      en: '${name:default} reads a property and uses the default if it is missing. #{} is a Spring expression, for example to multiply that number.',
    },
    distractors: [
      {
        es: 'Son lo mismo. Los dos buscan la clave en el archivo de propiedades.',
        en: 'They are the same. Both look up the key in the properties file.',
      },
      {
        es: 'El defecto tras los dos puntos se evalúa solo si la propiedad vale null en ejecución, no si falta.',
        en: 'The default after the colon is evaluated only if the property is null at runtime, not if it is missing.',
      },
    ],
    explanation: {
      es: 'Si la clave no existe y no hay defecto, el arranque falla. Puedes anidar la propiedad dentro de la expresión.',
      en: 'If the key does not exist and there is no default, startup fails. You can nest the property inside the expression.',
    },
  },
  {
    id: 'be-boot-08',
    topic: 'Propiedades',
    prompt: {
      es: '¿Cómo externalizas la configuración en un contenedor sin reconstruir la imagen?',
      en: 'How do you externalise configuration in a container without rebuilding the image?',
    },
    answer: {
      es: 'Con variables de entorno. SPRING_DATASOURCE_URL pisa el application.properties que va dentro de la imagen.',
      en: 'With environment variables. SPRING_DATASOURCE_URL overrides the application.properties that ships inside the image.',
    },
    distractors: [
      {
        es: 'Hay que montar otro properties encima, porque una variable no puede pisar una clave que ya está en el jar.',
        en: 'You must mount another properties file on top, because a variable cannot override a key that is already in the jar.',
      },
      {
        es: 'Las variables solo llegan a @Value. @ConfigurationProperties sigue leyendo el archivo de la imagen.',
        en: 'Variables only reach @Value. @ConfigurationProperties keeps reading the file from the image.',
      },
    ],
    explanation: {
      es: 'La imagen no debería llevar secretos. Un ConfigMap o un Secret inyectados como variables bastan en la mayoría de los casos.',
      en: 'The image should not carry secrets. A ConfigMap or a Secret injected as variables is enough in most cases.',
    },
  },
  {
    id: 'be-boot-09',
    topic: 'Actuator',
    prompt: {
      es: '¿Cómo se exponen los endpoints de Actuator sin dejarlos abiertos?',
      en: 'How do you expose Actuator endpoints without leaving them open?',
    },
    answer: {
      es: 'Por defecto solo health sale por HTTP. Listas los demás en exposure.include y los proteges con seguridad o con un puerto de gestión aparte.',
      en: 'By default only health is exposed over HTTP. You list the others in exposure.include and you protect them with security or with a separate management port.',
    },
    distractors: [
      {
        es: 'El starter abre todos bajo /actuator y la seguridad los deja pasar porque son de operaciones.',
        en: 'The starter opens all of them under /actuator and security lets them through because they are operational.',
      },
      {
        es: 'Activar endpoints por defecto ya los publica en el puerto de la aplicación.',
        en: 'Enabling endpoints by default already publishes them on the application port.',
      },
    ],
    explanation: {
      es: 'Que un endpoint exista y que se publique por la web son dos cosas. No expongas env o heap sin autenticación.',
      en: 'That an endpoint exists and that it is published on the web are two different things. Do not expose env or heap without authentication.',
    },
  },
  {
    id: 'be-boot-10',
    topic: 'Actuator',
    prompt: {
      es: '¿Cómo añades un health check propio?',
      en: 'How do you add your own health check?',
    },
    answer: {
      es: 'Implementas HealthIndicator, devuelves up o down y lo registras como componente. Aparece dentro del health agregado.',
      en: 'You implement HealthIndicator, return up or down and register it as a component. It shows up inside the aggregated health.',
    },
    distractors: [
      {
        es: 'Anotas un método con la ruta health y sustituyes el endpoint que trae Boot.',
        en: 'You annotate a method with the health path and you replace the endpoint Boot ships.',
      },
      {
        es: 'Implementas el contribuidor de info y Boot lo mezcla solo en health.',
        en: 'You implement the info contributor and Boot mixes it into health on its own.',
      },
    ],
    explanation: {
      es: 'Los detalles solo se ven si lo configuras. Info es otro endpoint. Un indicador caído debe marcar el conjunto como down.',
      en: 'Details are visible only if you configure that. Info is a different endpoint. A down indicator should mark the whole health as down.',
    },
  },
  {
    id: 'be-boot-11',
    topic: 'Métricas',
    prompt: {
      es: '¿Qué hace falta para que @Timed mida un método?',
      en: 'What is required for @Timed to time a method?',
    },
    answer: {
      es: 'Un registro de métricas, que Actuator suele crear, y un aspecto de timing registrado como bean. La llamada tiene que pasar por el proxy, o no se mide.',
      en: 'A metrics registry, which Actuator usually creates, and a timing aspect registered as a bean. The call must go through the proxy, or it is not timed.',
    },
    distractors: [
      {
        es: 'Con el starter de Actuator basta. Boot registra el aspecto igual que el de @Scheduled.',
        en: 'The Actuator starter is enough. Boot registers the aspect the same way it does for @Scheduled.',
      },
      {
        es: '@Timed publica un evento y no usa aspectos, así que una llamada interna también cuenta.',
        en: '@Timed publishes an event and does not use aspects, so an internal call is also counted.',
      },
    ],
    explanation: {
      es: 'Sin el aspecto, la anotación se ignora en silencio. Es el mismo límite que @Transactional: this no pasa por el proxy.',
      en: 'Without the aspect, the annotation is ignored in silence. It is the same limit as @Transactional: this does not go through the proxy.',
    },
  },
  {
    id: 'be-boot-12',
    topic: 'Eventos',
    prompt: {
      es: '¿Qué diferencia hay entre @EventListener y @TransactionalEventListener?',
      en: 'What is the difference between @EventListener and @TransactionalEventListener?',
    },
    answer: {
      es: 'El primero corre en el momento, en el mismo hilo. El segundo, por defecto, corre después del commit, así no envías un correo si luego hay rollback.',
      en: 'The first one runs immediately, on the same thread. The second, by default, runs after commit, so you do not send an email if there is a rollback later.',
    },
    distractors: [
      {
        es: '@EventListener espera al commit, por eso es seguro mandar el correo desde ahí.',
        en: '@EventListener waits for the commit, which is why it is safe to send the email from there.',
      },
      {
        es: 'El listener transaccional corre antes del commit y puede deshacer el trabajo original.',
        en: 'The transactional listener runs before the commit and can undo the original work.',
      },
    ],
    explanation: {
      es: 'Si no hay transacción, el listener de después del commit no se llama, salvo que actives el fallback. Para hacerlo async, combina con @Async.',
      en: 'If there is no transaction, the after-commit listener is not called, unless you turn on the fallback. To make it async, combine it with @Async.',
    },
  },
  {
    id: 'be-boot-13',
    topic: 'Arranque',
    prompt: {
      es: '¿Cuándo corre @PostConstruct y cuándo un ApplicationRunner?',
      en: 'When does @PostConstruct run and when does an ApplicationRunner run?',
    },
    answer: {
      es: 'PostConstruct corre al crear ese bean, cuando el resto puede no estar listo. El runner corre cuando el contexto ya arrancó y los singletons existen.',
      en: 'PostConstruct runs when that bean is created, when the rest may not be ready yet. The runner runs when the context has already started and the singletons exist.',
    },
    distractors: [
      {
        es: 'Son lo mismo. Spring ejecuta PostConstruct después de los runners.',
        en: 'They are the same. Spring runs PostConstruct after the runners.',
      },
      {
        es: 'El runner corre antes de crear beans, para leer los argumentos a tiempo.',
        en: 'The runner runs before beans are created, so it can read the arguments in time.',
      },
    ],
    explanation: {
      es: 'No llames a otros servicios desde PostConstruct si aún pueden no existir. El trabajo de arranque de la aplicación va en el runner.',
      en: 'Do not call other services from PostConstruct if they may not exist yet. Application startup work belongs in the runner.',
    },
  },
  {
    id: 'be-boot-14',
    topic: 'Ciclo de vida',
    prompt: {
      es: '¿En qué orden corren @PostConstruct, afterPropertiesSet y el initMethod de @Bean?',
      en: 'In which order do @PostConstruct, afterPropertiesSet and the @Bean initMethod run?',
    },
    answer: {
      es: 'Primero PostConstruct, después afterPropertiesSet si el bean implementa la interfaz, y al final el método nombrado en @Bean.',
      en: 'PostConstruct first, then afterPropertiesSet if the bean implements the interface, and last the method named on @Bean.',
    },
    distractors: [
      {
        es: 'afterPropertiesSet va primero porque es el contrato de Spring, y PostConstruct al final.',
        en: 'afterPropertiesSet goes first because it is the Spring contract, and PostConstruct last.',
      },
      {
        es: 'El orden no está definido. Por eso solo se puede usar uno de los tres.',
        en: 'The order is undefined. That is why only one of the three can be used.',
      },
    ],
    explanation: {
      es: 'Mezclarlos es legal, pero no dupliques la lógica. Al destruir, el espejo es PreDestroy, destroy y el destroyMethod.',
      en: 'Mixing them is legal, but do not duplicate the logic. On shutdown, the mirror is PreDestroy, destroy and the destroyMethod.',
    },
  },
  {
    id: 'be-boot-15',
    topic: 'Ciclo de vida',
    prompt: {
      es: '¿Qué diferencia hay entre un postprocesador de la fábrica de beans y uno de beans?',
      en: 'What is the difference between a bean factory post-processor and a bean post-processor?',
    },
    answer: {
      es: 'El de la fábrica cambia las definiciones antes de crear los objetos, por ejemplo para resolver placeholders. El de beans ve la instancia ya creada, por ejemplo para envolverla en un proxy.',
      en: 'The factory one changes definitions before objects are created, for example to resolve placeholders. The bean one sees the instance already created, for example to wrap it in a proxy.',
    },
    distractors: [
      {
        es: 'El de la fábrica envuelve cada instancia para AOP y el de beans edita las definiciones.',
        en: 'The factory one wraps each instance for AOP and the bean one edits the definitions.',
      },
      {
        es: 'Los dos corren después de PostConstruct. La diferencia es solo el nombre.',
        en: 'Both run after PostConstruct. The difference is only the name.',
      },
    ],
    explanation: {
      es: 'El primero no puede inyectar colaboradores porque los beans aún no existen. El segundo ya no debería cambiar el plan de creación.',
      en: 'The first one cannot inject collaborators because the beans do not exist yet. The second should no longer change the creation plan.',
    },
  },
  {
    id: 'be-boot-16',
    topic: 'Inyección',
    prompt: {
      es: '¿Cómo eliges entre varias implementaciones con @Primary y @Qualifier?',
      en: 'How do you choose among several implementations with @Primary and @Qualifier?',
    },
    answer: {
      es: 'Por defecto Spring inyecta por tipo. Si hay varias, @Qualifier elige cuál y gana a @Primary. @Primary solo marca la opción por defecto cuando nadie califica.',
      en: 'By default Spring injects by type. If there are several, @Qualifier picks which one and wins over @Primary. @Primary only marks the default when nobody qualifies.',
    },
    distractors: [
      {
        es: '@Primary gana siempre, aunque el punto de inyección lleve @Qualifier.',
        en: '@Primary always wins, even if the injection point has @Qualifier.',
      },
      {
        es: 'Sin @Primary, Spring elige al azar y no falla al arrancar.',
        en: 'Without @Primary, Spring picks at random and does not fail at startup.',
      },
    ],
    explanation: {
      es: 'Si no desambigüas, el arranque falla porque hay más de un bean de ese tipo. El calificador es la forma explícita.',
      en: 'If you do not disambiguate, startup fails because there is more than one bean of that type. The qualifier is the explicit way.',
    },
  },
  {
    id: 'be-boot-17',
    topic: 'Arranque',
    prompt: {
      es: '¿Qué efecto tiene @Lazy?',
      en: 'What effect does @Lazy have?',
    },
    answer: {
      es: 'El bean no se crea hasta el primer uso. El arranque es más corto, pero un fallo de configuración aparece en la primera llamada, no al levantar el contexto.',
      en: 'The bean is not created until first use. Startup is shorter, but a configuration failure shows up on the first call, not when the context starts.',
    },
    distractors: [
      {
        es: 'Pasa el bean a prototype, así que cada inyección crea un objeto nuevo.',
        en: 'It changes the bean to prototype, so each injection creates a new object.',
      },
      {
        es: 'Hace perezosas también todas sus dependencias y así resuelve cualquier ciclo.',
        en: 'It also makes all of its dependencies lazy and that is how every cycle is resolved.',
      },
    ],
    explanation: {
      es: 'Sigue siendo un singleton, solo que tarde. En un ciclo puedes poner @Lazy en un parámetro del constructor para inyectar un proxy.',
      en: 'It is still a singleton, only a late one. On a cycle you can put @Lazy on a constructor parameter to inject a proxy.',
    },
  },
  {
    id: 'be-boot-18',
    topic: 'Arranque',
    prompt: {
      es: '¿Qué hace el apagado elegante?',
      en: 'What does graceful shutdown do?',
    },
    answer: {
      es: 'Deja de aceptar conexiones nuevas y espera un rato a que terminen las peticiones que ya estaban en curso. Hay que activarlo: no es el comportamiento por defecto.',
      en: 'It stops accepting new connections and waits a while for requests already in progress to finish. You must turn it on: it is not the default behaviour.',
    },
    distractors: [
      {
        es: 'En Boot reciente ya es el defecto, así que una señal de parada espera sola a las peticiones.',
        en: 'In recent Boot it is already the default, so a stop signal waits for requests on its own.',
      },
      {
        es: 'Corta las peticiones en curso al instante y solo espera a las tareas programadas.',
        en: 'It cuts in-progress requests immediately and only waits for scheduled tasks.',
      },
    ],
    explanation: {
      es: 'Alinea ese tiempo con el del orquestador, o el proceso muere antes de vaciar el trabajo. El pool de @Async se espera con otra propiedad.',
      en: 'Align that time with the orchestrator, or the process dies before the work drains. The @Async pool is waited on with another property.',
    },
  },
  {
    id: 'be-boot-19',
    topic: 'Empaquetado',
    prompt: {
      es: '¿Qué tiene de especial el jar ejecutable de Spring Boot?',
      en: 'What is special about the Spring Boot executable jar?',
    },
    answer: {
      es: 'Lo arranca un loader que lee tus clases y las librerías anidadas dentro del jar. Las capas permiten que Docker cachee las dependencias aparte de tu código.',
      en: 'A loader starts it and reads your classes and the libraries nested inside the jar. Layers let Docker cache the dependencies apart from your code.',
    },
    distractors: [
      {
        es: 'Es un jar normal cuya clase principal es la de @SpringBootApplication y las librerías van sombreadas en un solo classpath.',
        en: 'It is a normal jar whose main class is the @SpringBootApplication one and the libraries are shaded onto a single classpath.',
      },
      {
        es: 'Las capas solo se declaran en el Dockerfile. El jar no trae información de capas.',
        en: 'Layers are declared only in the Dockerfile. The jar carries no layer information.',
      },
    ],
    explanation: {
      es: 'Un cambio de código no debería invalidar la capa de dependencias. Por eso el plugin separa librerías y aplicación.',
      en: 'A code change should not invalidate the dependency layer. That is why the plugin separates libraries and the application.',
    },
  },
  {
    id: 'be-boot-20',
    topic: 'Pruebas',
    prompt: {
      es: '¿Por qué los tests de Spring se vuelven lentos si cada clase usa un @MockBean distinto?',
      en: 'Why do Spring tests get slow if each class uses a different @MockBean?',
    },
    answer: {
      es: 'Porque Spring reutiliza el contexto solo si la configuración coincide. Cada mock, propiedad o perfil distinto arranca otro contexto entero.',
      en: 'Because Spring reuses the context only if the configuration matches. Each different mock, property or profile starts another whole context.',
    },
    distractors: [
      {
        es: 'Hay un solo contexto por JVM. @MockBean es barato porque sustituye beans dentro del que ya arrancó.',
        en: 'There is one context per JVM. @MockBean is cheap because it replaces beans inside the one that already started.',
      },
      {
        es: '@DirtiesContext hace falta después de cada test con @Autowired, o el siguiente ve el estado mutado.',
        en: '@DirtiesContext is required after every test with @Autowired, or the next one sees the mutated state.',
      },
    ],
    explanation: {
      es: 'Agrupa los tests que comparten configuración. @DirtiesContext tira el contexto y obliga a crearlo de nuevo: úsalo solo si de verdad ensucias un singleton.',
      en: 'Group tests that share configuration. @DirtiesContext drops the context and forces a new one: use it only if you really dirty a singleton.',
    },
  },
];
