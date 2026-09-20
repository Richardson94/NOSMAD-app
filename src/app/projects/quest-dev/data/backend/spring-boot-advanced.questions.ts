import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_SPRING_BOOT_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-boot-01',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Cómo funciona la autoconfiguración y qué papel tiene el archivo AutoConfiguration.imports?',
      en: 'How does auto-configuration work and what role does the AutoConfiguration.imports file play?',
    },
    answer: {
      es: 'Spring Boot 3 lee las clases listadas en META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports; @EnableAutoConfiguration las importa y cada una se aplica solo si coinciden sus condiciones.',
      en: 'Spring Boot 3 reads the classes listed in META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports; @EnableAutoConfiguration imports them and each one applies only if its conditions match.',
    },
    distractors: [
      {
        es: 'Sigue leyendo META-INF/spring.factories bajo la clave EnableAutoConfiguration; AutoConfiguration.imports es solo un alias de documentación introducido en Spring Boot 3.',
        en: 'It still reads META-INF/spring.factories under the EnableAutoConfiguration key; AutoConfiguration.imports is only a documentation alias introduced in Spring Boot 3.',
      },
      {
        es: 'El @ComponentScan de @SpringBootApplication localiza las clases anotadas con @AutoConfiguration en el paquete de la aplicación; el archivo imports solo lista exclusiones opcionales.',
        en: '@ComponentScan from @SpringBootApplication locates classes annotated with @AutoConfiguration in the application package; the imports file only lists optional exclusions.',
      },
    ],
    explanation: {
      es: 'En Spring Boot 3 el mecanismo ya no usa spring.factories para esto: cada módulo declara FQCN, uno por línea, en AutoConfiguration.imports. @EnableAutoConfiguration, incluido en @SpringBootApplication, carga esa lista con un DeferredImportSelector, y anotaciones como @ConditionalOnClass o @ConditionalOnMissingBean filtran qué configuraciones se registran de verdad. @AutoConfiguration además permite ordenar con after y before respecto a otras autoconfiguraciones.',
      en: 'In Spring Boot 3 the mechanism no longer uses spring.factories for this: each module declares FQCNs, one per line, in AutoConfiguration.imports. @EnableAutoConfiguration, included in @SpringBootApplication, loads that list with a DeferredImportSelector, and annotations such as @ConditionalOnClass or @ConditionalOnMissingBean filter which configurations actually get registered. @AutoConfiguration also lets you order with after and before relative to other auto-configurations.',
    },
  },
  {
    id: 'be-boot-02',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Qué semántica tiene @ConditionalOnMissingBean para permitir sobrescribir los valores por defecto de la autoconfiguración?',
      en: 'What semantics of @ConditionalOnMissingBean allow overriding auto-configuration defaults?',
    },
    answer: {
      es: 'El bean autoconfigurado solo se registra si aún no existe otro del tipo o nombre declarado, así que un @Bean propio del mismo tipo sustituye al valor por defecto sin necesidad de @Primary.',
      en: 'The auto-configured bean is registered only if another one of the declared type or name does not already exist, so a user @Bean of the same type replaces the default without needing @Primary.',
    },
    distractors: [
      {
        es: 'Sustituye cualquier bean existente del mismo tipo por el de la autoconfiguración, salvo que el de usuario se marque con @Primary.',
        en: 'It replaces any existing bean of the same type with the auto-configured one, unless the user bean is marked with @Primary.',
      },
      {
        es: 'Omite toda la clase de autoconfiguración si el contexto tiene al menos un bean, aunque no coincida con el tipo del método anotado.',
        en: 'It skips the entire auto-configuration class if the context has at least one bean, even when that bean does not match the type of the annotated method.',
      },
    ],
    explanation: {
      es: 'Las autoconfiguraciones se importan con un DeferredImportSelector, de modo que la configuración de usuario se procesa antes y sus beans ya están definidos cuando se evalúa la condición. @ConditionalOnMissingBean sobre un método @Bean mira el tipo o el atributo name en el BeanFactory; si el usuario ya registró un DataSource, el de DataSourceAutoConfiguration no se crea. No hace falta @Primary para ganar: el bean por defecto simplemente no llega a existir.',
      en: 'Auto-configurations are imported with a DeferredImportSelector, so user configuration is processed first and its beans are already defined when the condition is evaluated. @ConditionalOnMissingBean on a @Bean method looks at the type or the name attribute in the BeanFactory; if the user already registered a DataSource, the one from DataSourceAutoConfiguration is not created. @Primary is not needed to win: the default bean simply never comes into existence.',
    },
  },
  {
    id: 'be-boot-03',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Qué agrupa realmente un starter de Spring Boot?',
      en: 'What does a Spring Boot starter actually group?',
    },
    answer: {
      es: 'Un conjunto curado de dependencias en un POM casi sin código; las clases de autoconfiguración viven en spring-boot-autoconfigure o en el módulo de la librería y se activan por el classpath.',
      en: 'A curated set of dependencies in a POM with almost no code; the auto-configuration classes live in spring-boot-autoconfigure or in the library module and are activated by the classpath.',
    },
    distractors: [
      {
        es: 'Las clases @Configuration que crean los beans, que es por eso que añadir spring-boot-starter-web registra Tomcat y Jackson sin más código.',
        en: 'The @Configuration classes that create the beans, which is why adding spring-boot-starter-web registers Tomcat and Jackson without further code.',
      },
      {
        es: 'Es un POM padre que fija las versiones de dependencias y el nivel del compilador Java para todo el proyecto.',
        en: 'It is a parent POM that pins dependency versions and the Java compiler level for the whole project.',
      },
    ],
    explanation: {
      es: 'Un starter es sobre todo un descriptor de dependencias: spring-boot-starter-web arrastra spring-webmvc, el Tomcat embebido, Jackson y el starter base, pero el código que declara los beans está en spring-boot-autoconfigure, activado porque esas librerías aparecen en el classpath (@ConditionalOnClass). Quien sí es POM padre y gestiona versiones es spring-boot-starter-parent o el BOM spring-boot-dependencies. Por eso se puede sustituir Tomcat por Jetty cambiando el starter sin reescribir autoconfiguración.',
      en: 'A starter is mainly a dependency descriptor: spring-boot-starter-web pulls in spring-webmvc, embedded Tomcat, Jackson and the base starter, but the code that declares the beans lives in spring-boot-autoconfigure, triggered because those libraries appear on the classpath (@ConditionalOnClass). The parent POM that manages versions is spring-boot-starter-parent or the spring-boot-dependencies BOM. That is why you can replace Tomcat with Jetty by changing the starter without rewriting auto-configuration.',
    },
  },
  {
    id: 'be-boot-04',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Cuál es la precedencia entre argumentos de línea de comandos, variables de entorno y archivos de perfil?',
      en: 'What is the precedence among command line arguments, environment variables and profile files?',
    },
    answer: {
      es: 'De mayor a menor: argumentos de línea de comandos, luego variables de entorno del sistema operativo y después application-{perfil}.properties, que a su vez ganan al application.properties del mismo origen.',
      en: 'From highest to lowest: command line arguments, then operating system environment variables, and then application-{profile}.properties, which in turn beat application.properties from the same origin.',
    },
    distractors: [
      {
        es: 'El archivo application-prod.properties gana siempre, porque es la fuente específica del entorno y anula línea de comandos y variables.',
        en: 'The application-prod.properties file always wins, because it is the environment-specific source and it overrides command line and variables.',
      },
      {
        es: 'Las variables de entorno pierden frente al application.properties empaquetado en el jar, que es la fuente canónica; solo rellenan claves ausentes.',
        en: 'Environment variables lose to the application.properties packaged in the jar, which is the canonical source; they only fill in missing keys.',
      },
    ],
    explanation: {
      es: 'El Environment de Spring Boot apila PropertySource de más a menos prioritaria: --server.port=8081 en la línea de comandos está por encima de SERVER_PORT y ambas están por encima de application-prod.properties, que a su vez anula las claves del application.properties vecino. Un perfil no eleva el archivo por encima de la línea de comandos; spring.config.location y SPRING_APPLICATION_JSON se intercalan en esa misma pila. Los ficheros externos al jar ganan a los empaquetados, pero siguen por debajo de las variables de entorno y de los argumentos.',
      en: 'The Spring Boot Environment stacks PropertySource instances from highest to lowest priority: --server.port=8081 on the command line sits above SERVER_PORT and both sit above application-prod.properties, which in turn overrides keys in the sibling application.properties. A profile does not lift the file above the command line; spring.config.location and SPRING_APPLICATION_JSON slot into that same stack. External files outside the jar beat packaged ones, but they still sit below env vars and arguments.',
    },
  },
  {
    id: 'be-boot-05',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Cómo se activan los perfiles y qué ocurre con los beans anotados con @Profile?',
      en: 'How are profiles activated and what happens to beans annotated with @Profile?',
    },
    answer: {
      es: 'Se activan con spring.profiles.active, SPRING_PROFILES_ACTIVE o --spring.profiles.active; el bean con @Profile solo se registra si ese perfil está entre los activos.',
      en: 'They are activated with spring.profiles.active, SPRING_PROFILES_ACTIVE or --spring.profiles.active; the @Profile bean is registered only if that profile is among the active ones.',
    },
    distractors: [
      {
        es: '@Profile retrasa la creación hasta la primera inyección, pero la definición del bean siempre se registra en el contexto.',
        en: '@Profile delays creation until the first injection, but the bean definition is always registered in the context.',
      },
      {
        es: 'Solo puede haber un perfil activo; activar otro reemplaza al anterior y descarga sus beans del contexto.',
        en: 'Only one profile can be active; activating another one replaces the previous and unloads its beans from the context.',
      },
    ],
    explanation: {
      es: 'Varios perfiles pueden coexistir y spring.profiles.include añade perfiles extra sin sustituir los activos. @Profile("dev") o @Profile("!prod") sobre un @Component o una @Configuration decide si la definición entra en el BeanFactory; si el perfil no aplica, el bean no existe y no hay proxy perezoso. En tests se usa @ActiveProfiles, que forma parte de la clave de caché del contexto.',
      en: 'Several profiles can coexist and spring.profiles.include adds extra profiles without replacing the active ones. @Profile("dev") or @Profile("!prod") on a @Component or a @Configuration decides whether the definition enters the BeanFactory; if the profile does not apply, the bean does not exist and there is no lazy proxy. In tests you use @ActiveProfiles, which becomes part of the context cache key.',
    },
  },
  {
    id: 'be-boot-06',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Qué permite el enlace relajado de los nombres de propiedades?',
      en: 'What does relaxed binding of property names allow?',
    },
    answer: {
      es: '@ConfigurationProperties y el Environment aceptan kebab-case, camelCase, guion bajo y la forma de variable de entorno como la misma propiedad; @Value no aplica esa relajación y exige la clave exacta.',
      en: '@ConfigurationProperties and the Environment accept kebab-case, camelCase, underscore and the environment-variable form as the same property; @Value does not apply that relaxation and requires the exact key.',
    },
    distractors: [
      {
        es: '@Value y @ConfigurationProperties aplican las mismas reglas, así que ${serverPort} lee server.port del archivo de propiedades.',
        en: '@Value and @ConfigurationProperties apply the same rules, so ${serverPort} reads server.port from the properties file.',
      },
      {
        es: 'Solo el kebab-case en application.properties es válido; las demás formas se ignoran para mantener el archivo canónico.',
        en: 'Only kebab-case in application.properties is valid; the other forms are ignored to keep the file canonical.',
      },
    ],
    explanation: {
      es: 'El Binder de Spring Boot mapea server.servlet.context-path, serverServletContextPath y SERVER_SERVLET_CONTEXT_PATH al mismo campo de una clase @ConfigurationProperties. Esa relajación no existe en @Value("${serverPort}"): hace falta la clave tal cual aparece en el PropertySource. Por eso las variables de entorno de un contenedor se escriben en MAYUSCULAS_CON_GUION_BAJO y siguen enlazando con prefijos kebab-case.',
      en: 'The Spring Boot Binder maps server.servlet.context-path, serverServletContextPath and SERVER_SERVLET_CONTEXT_PATH to the same field of a @ConfigurationProperties class. That relaxation does not exist on @Value("${serverPort}"): you need the key exactly as it appears in the PropertySource. That is why container environment variables are written in UPPER_SNAKE_CASE and still bind to kebab-case prefixes.',
    },
  },
  {
    id: 'be-boot-07',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Cómo se combinan los placeholders de propiedades con valor por defecto y las expresiones SpEL en @Value?',
      en: 'How do property placeholders with a default value and SpEL expressions work in @Value?',
    },
    answer: {
      es: '${nombre:defecto} aporta un respaldo si la propiedad falta; #{...} es SpEL y puede usar operadores o métodos, y ambas formas se pueden anidar.',
      en: '${name:default} supplies a fallback when the property is missing; #{...} is SpEL and can use operators or methods, and both forms can be nested.',
    },
    distractors: [
      {
        es: 'El :defecto dentro de ${} es SpEL que se evalúa solo si la propiedad es null en tiempo de ejecución, no si falta al arrancar.',
        en: 'The :default inside ${} is SpEL that is evaluated only if the property is null at runtime, not if it is missing at startup.',
      },
      {
        es: '#{} y ${} son intercambiables; Spring Boot trata ambos como búsquedas de propiedades contra el Environment.',
        en: '#{} and ${} are interchangeable; Spring Boot treats both as property lookups against the Environment.',
      },
    ],
    explanation: {
      es: 'Si la propiedad no existe y no hay valor tras los dos puntos, el arranque falla con un placeholder irresoluble; el respaldo se aplica solo cuando la clave está ausente. #{...} evalúa SpEL contra el contexto de Spring, no contra application.properties, por ejemplo multiplicar un puerto o llamar a un bean. Se pueden anidar: @Value("#{${timeout.seconds:30} * 1000}") convierte la propiedad, ya con defecto, a milisegundos.',
      en: 'If the property does not exist and there is no value after the colon, startup fails with an unresolvable placeholder; the fallback applies only when the key is absent. #{...} evaluates SpEL against the Spring evaluation context, not against application.properties, for example multiplying a port or calling a bean. They can be nested: @Value("#{${timeout.seconds:30} * 1000}") converts the property, already with a default, to milliseconds.',
    },
  },
  {
    id: 'be-boot-08',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Cómo se externaliza la configuración en contenedores mediante variables de entorno?',
      en: 'How is configuration externalized for containers through environment variables?',
    },
    answer: {
      es: 'Las variables de entorno, con enlace relajado de SPRING_DATASOURCE_URL hacia spring.datasource.url, anulan el application.properties empaquetado sin reconstruir la imagen.',
      en: 'Environment variables, with relaxed binding from SPRING_DATASOURCE_URL to spring.datasource.url, override the packaged application.properties without rebuilding the image.',
    },
    distractors: [
      {
        es: 'Hay que montar un application.properties encima del que va dentro del jar, porque las variables de entorno no pueden anular claves que ya existen en el fichero empaquetado.',
        en: 'You must mount an application.properties over the one inside the jar, because environment variables cannot override keys that already exist in the packaged file.',
      },
      {
        es: 'Docker Compose solo inyecta propiedades declaradas con @Value; las ligadas con @ConfigurationProperties siguen leyendo el archivo de la imagen.',
        en: 'Docker Compose only injects properties declared with @Value; those bound with @ConfigurationProperties keep reading the file from the image.',
      },
    ],
    explanation: {
      es: 'La precedencia del Environment hace que SERVER_PORT o SPRING_DATASOURCE_USERNAME ganen al fichero del jar, que es el enfoque de doce factores: la imagen no lleva secretos. Kubernetes puede inyectar un ConfigMap o un Secret como variables; spring.config.additional-location sigue siendo útil para montar un fichero, pero no es obligatorio. El enlace relajado es lo que permite el nombre en mayúsculas con guion bajo que exigen los contenedores.',
      en: 'Environment precedence makes SERVER_PORT or SPRING_DATASOURCE_USERNAME win over the file in the jar, which is the twelve-factor approach: the image does not carry secrets. Kubernetes can inject a ConfigMap or a Secret as variables; spring.config.additional-location is still useful to mount a file, but it is not mandatory. Relaxed binding is what allows the uppercase underscore names that containers require.',
    },
  },
  {
    id: 'be-boot-09',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Cómo se exponen los endpoints de Actuator y cómo se protegen?',
      en: 'How are Actuator endpoints exposed and how are they protected?',
    },
    answer: {
      es: 'Por defecto solo health se expone por HTTP; management.endpoints.web.exposure.include selecciona el resto, y Spring Security o un management.server.port aparte restringen el acceso.',
      en: 'By default only health is exposed over HTTP; management.endpoints.web.exposure.include selects the rest, and Spring Security or a separate management.server.port restrict access.',
    },
    distractors: [
      {
        es: 'spring-boot-starter-actuator expone todos los endpoints bajo /actuator sin más configuración, y Spring Security los deja pasar porque son operacionales.',
        en: 'spring-boot-starter-actuator exposes every endpoint under /actuator without further configuration, and Spring Security lets them through because they are operational.',
      },
      {
        es: 'management.endpoints.enabled-by-default=true habilita y expone los endpoints en el puerto principal, así que exposure.include resulta redundante.',
        en: 'management.endpoints.enabled-by-default=true both enables and exposes the endpoints on the main server port, so exposure.include is redundant.',
      },
    ],
    explanation: {
      es: 'Hay dos palancas distintas: enabled controla si el endpoint existe y exposure.include controla si se publica por web; el valor por defecto de exposición es health. management.endpoints.web.exposure.include=health,info,metrics abre más rutas bajo management.endpoints.web.base-path, que por defecto es /actuator. Con Spring Security en el classpath casi todos exigen autenticación; una opción habitual es mover Actuator a management.server.port y usar management.endpoint.health.show-details para no filtrar datos internos.',
      en: 'There are two distinct levers: enabled controls whether the endpoint exists and exposure.include controls whether it is published over the web; the default exposure value is health. management.endpoints.web.exposure.include=health,info,metrics opens more routes under management.endpoints.web.base-path, which defaults to /actuator. With Spring Security on the classpath almost all of them require authentication; a common option is to move Actuator to management.server.port and to use management.endpoint.health.show-details so internal data is not leaked.',
    },
  },
  {
    id: 'be-boot-10',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Cómo se escribe un HealthIndicator propio?',
      en: 'How do you write a custom HealthIndicator?',
    },
    answer: {
      es: 'Se implementa HealthIndicator, se sobrescribe health() devolviendo Health.up() o Health.down() con detalles, y se registra como @Component para que aparezca en /actuator/health.',
      en: 'You implement HealthIndicator, override health() returning Health.up() or Health.down() with details, and register it as a @Component so it appears under /actuator/health.',
    },
    distractors: [
      {
        es: 'Se anota un método con @ReadOperation en una clase @Endpoint(id="health") para reemplazar el endpoint de salud integrado.',
        en: 'You annotate a method with @ReadOperation on a class marked @Endpoint(id="health") to replace the built-in health endpoint.',
      },
      {
        es: 'Se implementa InfoContributor y se devuelve un Map; Actuator lo fusiona solo en el grupo health.',
        en: 'You implement InfoContributor and return a Map; Actuator merges it only into the health group.',
      },
    ],
    explanation: {
      es: 'HealthIndicator.health() se invoca al consultar /actuator/health; Health.down().withDetail("error", mensaje) marca el estado y, si management.endpoint.health.show-details=always, los detalles se ven. También existe AbstractHealthIndicator y, en WebFlux, ReactiveHealthIndicator. Un @Endpoint propio crea una ruta distinta bajo /actuator, no un indicador del agregado health; InfoContributor alimenta /actuator/info, no health.',
      en: 'HealthIndicator.health() is invoked when /actuator/health is queried; Health.down().withDetail("error", message) flags the status and, if management.endpoint.health.show-details=always, the details are visible. AbstractHealthIndicator also exists and, in WebFlux, ReactiveHealthIndicator. A custom @Endpoint creates a different route under /actuator, not an indicator of the health aggregate; InfoContributor feeds /actuator/info, not health.',
    },
  },
  {
    id: 'be-boot-11',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Cómo se usan las métricas de Micrometer con la anotación @Timed?',
      en: 'How are Micrometer metrics used with the @Timed annotation?',
    },
    answer: {
      es: 'Actuator autoconfigura un MeterRegistry; @Timed cronometra un método solo si se declara un bean TimedAspect que intercepte a través del proxy de Spring.',
      en: 'Actuator auto-configures a MeterRegistry; @Timed times a method only if you declare a TimedAspect bean that intercepts through the Spring proxy.',
    },
    distractors: [
      {
        es: 'Añadir spring-boot-starter-actuator basta para que @Timed funcione, porque Boot registra TimedAspect igual que el soporte de @Scheduled.',
        en: 'Adding spring-boot-starter-actuator is enough for @Timed to work, because Boot registers TimedAspect the same way it registers @Scheduled support.',
      },
      {
        es: '@Timed publica un ApplicationEvent que Actuator convierte en un counter; no interviene ningún aspecto AOP.',
        en: '@Timed publishes an ApplicationEvent that Actuator turns into a counter; no AOP aspect is involved.',
      },
    ],
    explanation: {
      es: 'MeterRegistry sí sale de la autoconfiguración de Actuator y micrometer-registry-prometheus expone /actuator/prometheus, pero TimedAspect hay que declararlo como @Bean; si no, @Timed se ignora en silencio. Al ser un aspecto, la llamada debe atravesar el proxy: una invocación interna no registra nada. En Spring Boot 3 la alternativa moderna es @Observed del Observation API, que unifica trazas y métricas.',
      en: 'MeterRegistry does come from Actuator auto-configuration and micrometer-registry-prometheus exposes /actuator/prometheus, but TimedAspect must be declared as a @Bean; otherwise @Timed is silently ignored. Because it is an aspect, the call must go through the proxy: an internal invocation records nothing. In Spring Boot 3 the modern alternative is @Observed from the Observation API, which unifies traces and metrics.',
    },
  },
  {
    id: 'be-boot-12',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Cómo se publican y escuchan eventos de aplicación, incluido @TransactionalEventListener?',
      en: 'How are application events published and listened to, including @TransactionalEventListener?',
    },
    answer: {
      es: 'Se publica con ApplicationEventPublisher.publishEvent y se escucha con @EventListener de forma síncrona; @TransactionalEventListener con fase AFTER_COMMIT, la default, solo corre si hay transacción activa.',
      en: 'You publish with ApplicationEventPublisher.publishEvent and listen with @EventListener synchronously; @TransactionalEventListener with AFTER_COMMIT phase, the default, runs only if there is an active transaction.',
    },
    distractors: [
      {
        es: '@EventListener espera a que la transacción envolvente haga commit, por eso es seguro enviar un correo desde el listener.',
        en: '@EventListener waits for the surrounding transaction to commit, which is why it is safe to send an email from the listener.',
      },
      {
        es: '@TransactionalEventListener corre en una transacción nueva antes de que el publicador confirme, de modo que el listener aún puede hacer rollback del trabajo original.',
        en: '@TransactionalEventListener runs in a new transaction before the publisher commits, so the listener can still roll back the original work.',
      },
    ],
    explanation: {
      es: 'publishEvent es síncrono por defecto: el listener se ejecuta en el mismo hilo antes de devolver el control, y @Async lo haría asíncrono. @TransactionalEventListener(phase = AFTER_COMMIT) se registra en la transacción y se dispara solo tras el commit, lo que evita enviar un correo si luego hay rollback; si no hay transacción, no se llama salvo fallbackExecution = true. Las otras fases son BEFORE_COMMIT, AFTER_ROLLBACK y AFTER_COMPLETION.',
      en: 'publishEvent is synchronous by default: the listener runs on the same thread before control returns, and @Async would make it asynchronous. @TransactionalEventListener(phase = AFTER_COMMIT) binds to the transaction and fires only after commit, which avoids sending an email if a rollback follows; if there is no transaction, it is not called unless fallbackExecution = true. The other phases are BEFORE_COMMIT, AFTER_ROLLBACK and AFTER_COMPLETION.',
    },
  },
  {
    id: 'be-boot-13',
    topic: 'Spring Boot',
    prompt: {
      es: '¿En qué se diferencian ApplicationRunner y CommandLineRunner de @PostConstruct en el orden de arranque?',
      en: 'How do ApplicationRunner and CommandLineRunner differ from @PostConstruct in the startup order?',
    },
    answer: {
      es: '@PostConstruct corre mientras se inicializa ese bean, posiblemente antes de que el resto del contexto esté listo; ApplicationRunner y CommandLineRunner corren después de que el contexto ha arrancado, con todos los singletons creados.',
      en: '@PostConstruct runs while that bean is being initialized, possibly before the rest of the context is ready; ApplicationRunner and CommandLineRunner run after the context has started, with all singletons created.',
    },
    distractors: [
      {
        es: 'Los tres callbacks son equivalentes: Spring ejecuta los métodos @PostConstruct después de los runners para que los colaboradores inyectados estén arrancados.',
        en: 'The three callbacks are equivalent: Spring runs @PostConstruct methods after the runners so that injected collaborators are fully started.',
      },
      {
        es: 'CommandLineRunner corre antes de cualquier @PostConstruct, porque los argumentos deben consumirse antes de que el contexto cree beans.',
        en: 'CommandLineRunner runs before any @PostConstruct, because arguments must be consumed before the context creates beans.',
      },
    ],
    explanation: {
      es: 'El ciclo de un bean llama a @PostConstruct en postProcessBeforeInitialization, en medio del refresh; otros beans pueden no existir todavía y el servidor embebido aún no escucha. Tras el refresh se publica ApplicationStartedEvent, después Spring llama a los ApplicationRunner y CommandLineRunner mezclados por @Order u Ordered, y por último ApplicationReadyEvent. ApplicationRunner recibe ApplicationArguments ya parseados; CommandLineRunner recibe el String[] crudo.',
      en: 'A bean lifecycle calls @PostConstruct in postProcessBeforeInitialization, in the middle of refresh; other beans may not exist yet and the embedded server is not listening yet. After refresh, ApplicationStartedEvent is published, then Spring calls ApplicationRunner and CommandLineRunner instances mixed by @Order or Ordered, and finally ApplicationReadyEvent. ApplicationRunner receives already parsed ApplicationArguments; CommandLineRunner receives the raw String[].',
    },
  },
  {
    id: 'be-boot-14',
    topic: 'Spring Boot',
    prompt: {
      es: '¿En qué orden se ejecutan @PostConstruct, InitializingBean y el initMethod de @Bean?',
      en: 'In which order do @PostConstruct, InitializingBean and the initMethod of @Bean run?',
    },
    answer: {
      es: 'Primero @PostConstruct, después InitializingBean.afterPropertiesSet y por último el initMethod declarado en @Bean.',
      en: 'First @PostConstruct, then InitializingBean.afterPropertiesSet and last the initMethod declared on @Bean.',
    },
    distractors: [
      {
        es: 'InitializingBean.afterPropertiesSet corre primero porque la interfaz es el contrato de Spring, luego initMethod y @PostConstruct al final como legado de JSR-250.',
        en: 'InitializingBean.afterPropertiesSet runs first because the interface is the Spring contract, then initMethod, and @PostConstruct last as a JSR-250 leftover.',
      },
      {
        es: 'Los tres corren en el inverso del orden de registro y mezclarlos deja el orden indefinido, por eso solo debe usarse uno.',
        en: 'The three run in the reverse of registration order and mixing them leaves the order undefined, which is why only one of them should be used.',
      },
    ],
    explanation: {
      es: 'BeanPostProcessor.postProcessBeforeInitialization dispara @PostConstruct mediante InitDestroyAnnotationBeanPostProcessor antes de invokeInitMethods. Dentro de invokeInitMethods, Spring llama a afterPropertiesSet si el bean implementa InitializingBean y, acto seguido, al método nombrado en @Bean(initMethod="start") o en XML. En destrucción el espejo es @PreDestroy, DisposableBean.destroy y destroyMethod. Mezclarlos es legal, pero el orden es fijo y conviene no duplicar lógica.',
      en: 'BeanPostProcessor.postProcessBeforeInitialization fires @PostConstruct through InitDestroyAnnotationBeanPostProcessor before invokeInitMethods. Inside invokeInitMethods, Spring calls afterPropertiesSet if the bean implements InitializingBean and then the method named in @Bean(initMethod="start") or in XML. On destruction the mirror is @PreDestroy, DisposableBean.destroy and destroyMethod. Mixing them is legal, but the order is fixed and duplicating logic is a bad idea.',
    },
  },
  {
    id: 'be-boot-15',
    topic: 'Spring Boot',
    prompt: {
      es: '¿En qué se diferencia un BeanFactoryPostProcessor de un BeanPostProcessor?',
      en: 'How does a BeanFactoryPostProcessor differ from a BeanPostProcessor?',
    },
    answer: {
      es: 'BeanFactoryPostProcessor modifica definiciones de bean antes de instanciarlos; BeanPostProcessor interviene sobre instancias ya creadas, antes y después de los callbacks de init.',
      en: 'A BeanFactoryPostProcessor modifies bean definitions before they are instantiated; a BeanPostProcessor intercepts already created instances, before and after the init callbacks.',
    },
    distractors: [
      {
        es: 'BeanFactoryPostProcessor envuelve cada instancia tras el constructor para aplicar AOP; BeanPostProcessor edita los BeanDefinition cuando hay que resolver placeholders de @Value.',
        en: 'A BeanFactoryPostProcessor wraps each instance after construction to apply AOP; a BeanPostProcessor edits BeanDefinition objects when @Value placeholders need resolving.',
      },
      {
        es: 'Ambos corren después de @PostConstruct; la diferencia es que BeanFactoryPostProcessor solo actúa sobre productos de un FactoryBean.',
        en: 'Both run after @PostConstruct; the difference is that BeanFactoryPostProcessor only acts on products of a FactoryBean.',
      },
    ],
    explanation: {
      es: 'PropertySourcesPlaceholderConfigurer es un BeanFactoryPostProcessor: sustituye ${} en los BeanDefinition antes de crear objetos. AutowiredAnnotationBeanPostProcessor y la creación del proxy AOP son BeanPostProcessor, que ven la instancia en postProcessBeforeInitialization y postProcessAfterInitialization. Un BFPP no puede inyectar colaboradores porque los beans aún no existen; un BPP ya no debería cambiar el plan de definición. ConfigurationClassPostProcessor también es BFPP: es quien procesa @Configuration y @Bean.',
      en: 'PropertySourcesPlaceholderConfigurer is a BeanFactoryPostProcessor: it replaces ${} in BeanDefinition objects before objects are created. AutowiredAnnotationBeanPostProcessor and AOP proxy creation are BeanPostProcessor types, which see the instance in postProcessBeforeInitialization and postProcessAfterInitialization. A BFPP cannot inject collaborators because beans do not exist yet; a BPP should no longer change the definition plan. ConfigurationClassPostProcessor is also a BFPP: it is the one that processes @Configuration and @Bean.',
    },
  },
  {
    id: 'be-boot-16',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Cómo se resuelven varias implementaciones del mismo tipo con @Primary y @Qualifier?',
      en: 'How are several implementations of the same type resolved with @Primary and @Qualifier?',
    },
    answer: {
      es: '@Autowired elige por tipo; si hay varias, @Qualifier selecciona por id o anotación y gana a @Primary, que solo marca el bean por defecto cuando no hay calificador.',
      en: '@Autowired chooses by type; if there are several, @Qualifier selects by id or annotation and wins over @Primary, which only marks the default bean when there is no qualifier.',
    },
    distractors: [
      {
        es: '@Primary gana siempre, incluso si el punto de inyección lleva @Qualifier, porque marca el bean canónico de ese tipo.',
        en: '@Primary always wins, even if the injection point has @Qualifier, because it marks the canonical bean of that type.',
      },
      {
        es: '@Qualifier sin @Primary se ignora a menos que haya más de dos implementaciones; Spring cae entonces en el nombre del parámetro.',
        en: '@Qualifier without @Primary is ignored unless there are more than two implementations; Spring then falls back to the parameter name.',
      },
    ],
    explanation: {
      es: 'Sin desambiguar, Spring lanza NoUniqueBeanDefinitionException. @Primary cubre el caso @Autowired DataSource dataSource cuando hay un candidato obvio; @Qualifier("reportsDataSource") o una anotación calificadora propia fija el bean y entonces @Primary no se consulta. @Resource inyecta primero por nombre, que es otro contrato. El nombre del parámetro solo ayuda si coincide con el id del bean y no hay @Qualifier en contra.',
      en: 'Without disambiguation, Spring throws NoUniqueBeanDefinitionException. @Primary covers the @Autowired DataSource dataSource case when there is an obvious candidate; @Qualifier("reportsDataSource") or a custom qualifier annotation pins the bean and then @Primary is not consulted. @Resource injects by name first, which is a different contract. The parameter name only helps if it matches the bean id and no @Qualifier is present against it.',
    },
  },
  {
    id: 'be-boot-17',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Qué efecto tienen los beans marcados como @Lazy en el arranque?',
      en: 'What effect do beans marked @Lazy have on startup?',
    },
    answer: {
      es: 'El singleton no se crea hasta el primer uso; si se inyecta en un bean ansioso, Spring coloca un proxy y el arranque no instancia el destino, a costa de retrasar errores al primer llamado.',
      en: 'The singleton is not created until first use; if it is injected into an eager bean, Spring places a proxy and startup does not instantiate the target, at the cost of delaying errors until the first call.',
    },
    distractors: [
      {
        es: '@Lazy cambia el bean a prototype, de modo que cada punto de inyección obtiene una instancia nueva creada en su primer uso.',
        en: '@Lazy changes the bean to prototype, so each injection point gets a new instance created on its first use.',
      },
      {
        es: 'Anotar la clase con @Lazy hace perezosas también todas sus dependencias, que es como se resuelve siempre la inyección circular por constructor.',
        en: 'Annotating the class with @Lazy also makes all of its dependencies lazy, which is how circular constructor injection is always resolved.',
      },
    ],
    explanation: {
      es: '@Lazy no cambia el ámbito: sigue siendo singleton, solo que se pospone su creación y eso acorta el arranque. En un constructor se puede poner @Lazy en el parámetro para inyectar un proxy y romper un ciclo, pero las dependencias del bean perezoso siguen creándose de forma ansiosa cuando ese bean se materializa. Los fallos de configuración aparecen en la primera petición en lugar de en el refresh, que es el coste de no fallar rápido. Una @Configuration anotada con @Lazy vuelve perezosos todos sus métodos @Bean.',
      en: '@Lazy does not change the scope: it remains a singleton, only its creation is deferred and that shortens startup. On a constructor you can put @Lazy on the parameter to inject a proxy and break a cycle, but dependencies of the lazy bean are still created eagerly when that bean materialises. Configuration failures show up on the first request instead of during refresh, which is the cost of not failing fast. A @Configuration annotated with @Lazy makes all of its @Bean methods lazy.',
    },
  },
  {
    id: 'be-boot-18',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Cómo funciona el apagado elegante y qué ocurre con las peticiones en vuelo?',
      en: 'How does graceful shutdown work and what happens to in-flight requests?',
    },
    answer: {
      es: 'Con server.shutdown=graceful el servidor deja de aceptar conexiones nuevas y espera a que terminen las peticiones en vuelo, hasta spring.lifecycle.timeout-per-shutdown-phase, 30s por defecto.',
      en: 'With server.shutdown=graceful the server stops accepting new connections and waits for in-flight requests to finish, up to spring.lifecycle.timeout-per-shutdown-phase, 30s by default.',
    },
    distractors: [
      {
        es: 'En Spring Boot 3 el apagado elegante ya es el valor por defecto, así que SIGTERM espera a las peticiones en vuelo sin propiedades extra.',
        en: 'In Spring Boot 3 graceful shutdown is already the default, so SIGTERM waits for in-flight requests with no extra properties.',
      },
      {
        es: 'server.shutdown=graceful aborta las peticiones en vuelo de inmediato y solo espera a que terminen las tareas @Scheduled.',
        en: 'server.shutdown=graceful aborts in-flight requests immediately and only waits for @Scheduled tasks to finish.',
      },
    ],
    explanation: {
      es: 'El valor por defecto de server.shutdown sigue siendo immediate: hay que activar graceful. Al recibir SIGTERM, WebServerGracefulShutdownLifecycle cierra el puerto de aceptación y deja que Tomcat, Jetty o Netty agoten las peticiones actuales. spring.lifecycle.timeout-per-shutdown-phase recorta esa espera; si se supera, el proceso sigue apagándose. En Kubernetes conviene alinear terminationGracePeriodSeconds y, aparte, spring.task.execution.shutdown.await-termination para el pool de @Async, que esta propiedad del servidor no cubre.',
      en: 'The default value of server.shutdown remains immediate: graceful must be turned on. On SIGTERM, WebServerGracefulShutdownLifecycle closes the accepting port and lets Tomcat, Jetty or Netty drain current requests. spring.lifecycle.timeout-per-shutdown-phase caps that wait; if it is exceeded, the process still shuts down. In Kubernetes it is wise to align terminationGracePeriodSeconds and, separately, spring.task.execution.shutdown.await-termination for the @Async pool, which this server property does not cover.',
    },
  },
  {
    id: 'be-boot-19',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Cómo está estructurado el jar ejecutable y qué capas se usan para la imagen Docker?',
      en: 'How is the executable jar structured and which layers are used for the Docker image?',
    },
    answer: {
      es: 'JarLauncher carga BOOT-INF/classes y BOOT-INF/lib; el índice layers.idx parte el jar en dependencies, spring-boot-loader, snapshot-dependencies y application para cachear dependencias en Docker.',
      en: 'JarLauncher loads BOOT-INF/classes and BOOT-INF/lib; the layers.idx index splits the jar into dependencies, spring-boot-loader, snapshot-dependencies and application so Docker can cache dependencies.',
    },
    distractors: [
      {
        es: 'Es un fat jar normal cuyo Main-Class del manifiesto es la clase @SpringBootApplication, con las dependencias sombreadas en un único classpath.',
        en: 'It is a normal fat jar whose Manifest Main-Class is the @SpringBootApplication class, with dependencies shaded onto a single classpath.',
      },
      {
        es: 'Las capas Docker se declaran solo en el Dockerfile; el jar no tiene índice de capas y Buildpacks inventa la división al construir la imagen.',
        en: 'Docker layers are declared only in the Dockerfile; the jar has no layer index and Buildpacks invent the split at image build time.',
      },
    ],
    explanation: {
      es: 'El manifiesto apunta a JarLauncher, no a la clase main de la aplicación, porque las dependencias en BOOT-INF/lib no están en el classpath de un jar plano. El plugin genera BOOT-INF/layers.idx con esas cuatro capas por defecto, y java -Djarmode=layertools -jar app.jar extract las materializa en directorios que un Dockerfile copia en orden, de menos a más volátiles. Así un cambio de código solo invalida la capa application y reutiliza la de dependencies. spring-boot-maven-plugin con layered es quien escribe ese índice.',
      en: 'The manifest points to JarLauncher, not to the application main class, because dependencies in BOOT-INF/lib are not on the classpath of a flat jar. The plugin writes BOOT-INF/layers.idx with those four default layers, and java -Djarmode=layertools -jar app.jar extract materialises them into directories that a Dockerfile copies in order, from least to most volatile. A code change then invalidates only the application layer and reuses the dependencies layer. spring-boot-maven-plugin with layered mode is what writes that index.',
    },
  },
  {
    id: 'be-boot-20',
    topic: 'Spring Boot',
    prompt: {
      es: '¿Cómo funciona el cacheo del contexto en las pruebas y cuál es el costo de romperlo?',
      en: 'How does test context caching work and what is the cost of breaking it?',
    },
    answer: {
      es: 'Spring Test reutiliza el ApplicationContext si la clave de configuración coincide; @MockBean, @TestPropertySource, perfiles distintos o @DirtiesContext crean o cierran contextos, y cada uno nuevo paga el arranque completo.',
      en: 'Spring Test reuses the ApplicationContext if the configuration key matches; @MockBean, @TestPropertySource, different profiles or @DirtiesContext create or close contexts, and each new one pays for a full startup.',
    },
    distractors: [
      {
        es: '@SpringBootTest reutiliza siempre un único contexto por JVM, así que añadir @MockBean es barato porque sustituye beans dentro del contexto ya arrancado.',
        en: '@SpringBootTest always reuses a single JVM-wide context, so adding @MockBean is cheap because it replaces beans inside the already started context.',
      },
      {
        es: '@DirtiesContext hace falta después de cada método que use @Autowired, o el siguiente test vería el estado mutado de los singletons.',
        en: '@DirtiesContext is required after every method that uses @Autowired, or the next test would see mutated singleton state.',
      },
    ],
    explanation: {
      es: 'La clave de caché incluye clases de @SpringBootTest, @ActiveProfiles, @TestPropertySource y los ContextCustomizer de @MockBean o @SpyBean: cada combinación distinta arranca otro contexto, que es lo caro. @DirtiesContext cierra el contexto al terminar y obliga a reconstruirlo, útil si el test muta singletons, no como hábito. Los slice tests @WebMvcTest y @DataJpaTest reducen el coste porque cargan menos beans y pueden compartir su propia clave. Conviene agrupar tests que compartan la misma configuración y limitar @MockBean a clases que ya rompen la clave juntas.',
      en: 'The cache key includes @SpringBootTest classes, @ActiveProfiles, @TestPropertySource and the ContextCustomizer instances from @MockBean or @SpyBean: each distinct combination starts another context, which is the expensive part. @DirtiesContext closes the context at the end and forces a rebuild, useful if the test mutates singletons, not as a habit. Slice tests @WebMvcTest and @DataJpaTest reduce the cost because they load fewer beans and can share their own key. It is best to group tests that share the same configuration and to limit @MockBean to test classes that already break the key together.',
    },
  },
];
