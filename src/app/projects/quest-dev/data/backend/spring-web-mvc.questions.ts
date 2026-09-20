import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_SPRING_WEB_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-mvc-01',
    topic: 'Spring Web',
    prompt: {
      es: '¿Cuál es el flujo de una petición HTTP a través del DispatcherServlet?',
      en: 'What is the flow of an HTTP request through the DispatcherServlet?',
    },
    answer: {
      es: 'HandlerMapping localiza el handler, HandlerAdapter lo invoca y un ViewResolver o un HttpMessageConverter escriben la respuesta.',
      en: 'HandlerMapping locates the handler, HandlerAdapter invokes it and a ViewResolver or an HttpMessageConverter writes the response.',
    },
    distractors: [
      {
        es: 'Los filtros Servlet se ejecutan después del controlador, cuando DispatcherServlet ya eligió la vista.',
        en: 'Servlet filters run after the controller, once DispatcherServlet has already chosen the view.',
      },
      {
        es: 'HandlerInterceptor sustituye a HandlerAdapter y es quien invoca el método del @RestController.',
        en: 'HandlerInterceptor replaces HandlerAdapter and is the one that invokes the @RestController method.',
      },
    ],
    explanation: {
      es: 'doDispatch orquesta el ciclo: HandlerMapping resuelve el HandlerExecutionChain, preHandle, RequestMappingHandlerAdapter.handle y luego el converter o el ViewResolver. Los OncePerRequestFilter envuelven al servlet, no van después. El código HTTP lo fija el retorno (ResponseEntity, @ResponseStatus), no el mapeo.',
      en: 'doDispatch orchestrates the cycle: HandlerMapping resolves the HandlerExecutionChain, preHandle, RequestMappingHandlerAdapter.handle and then the converter or the ViewResolver. OncePerRequestFilter wrappers wrap the servlet; they do not run afterwards. The HTTP status is set by the return value (ResponseEntity, @ResponseStatus), not by the mapping.',
    },
  },
  {
    id: 'be-mvc-02',
    topic: 'Spring Web',
    prompt: {
      es: '¿Qué distingue @RequestParam, @PathVariable y @RequestBody al enlazar datos de la petición?',
      en: 'What distinguishes @RequestParam, @PathVariable and @RequestBody when binding request data?',
    },
    answer: {
      es: '@RequestParam lee query o formulario, @PathVariable el segmento de la URI y @RequestBody el cuerpo con un HttpMessageConverter.',
      en: '@RequestParam reads query or form data, @PathVariable reads the URI segment and @RequestBody reads the body with an HttpMessageConverter.',
    },
    distractors: [
      {
        es: '@RequestParam deserializa el JSON del cuerpo y @RequestBody enlaza los parámetros de la query string.',
        en: '@RequestParam deserialises JSON from the body and @RequestBody binds query string parameters.',
      },
      {
        es: '@PathVariable y @RequestParam son intercambiables; Spring elige según si el nombre coincide con un segmento.',
        en: '@PathVariable and @RequestParam are interchangeable; Spring chooses according to whether the name matches a segment.',
      },
    ],
    explanation: {
      es: '@GetMapping("/users/{id}") con @PathVariable Long id lee /users/42; @RequestParam("q") lee ?q= o un campo form-urlencoded. @RequestBody exige un Content-Type como application/json y MappingJackson2HttpMessageConverter; un 400 aparece si el JSON no mapea. Sin @RequestBody un DTO se rellena desde query o form, no desde JSON.',
      en: '@GetMapping("/users/{id}") with @PathVariable Long id reads /users/42; @RequestParam("q") reads ?q= or a form-urlencoded field. @RequestBody needs a Content-Type such as application/json and MappingJackson2HttpMessageConverter; a 400 appears if the JSON does not map. Without @RequestBody a DTO is filled from query or form data, not from JSON.',
    },
  },
  {
    id: 'be-mvc-03',
    topic: 'Spring Web',
    prompt: {
      es: 'Si el método declara produces = application/json y el cliente envía Accept: application/xml, ¿qué responde Spring MVC?',
      en: 'If the method declares produces = application/json and the client sends Accept: application/xml, what does Spring MVC respond?',
    },
    answer: {
      es: '406 Not Acceptable, porque la negociación de contenido no encuentra un HttpMessageConverter compatible.',
      en: '406 Not Acceptable, because content negotiation finds no compatible HttpMessageConverter.',
    },
    distractors: [
      {
        es: '415 Unsupported Media Type, porque Accept no coincide con el Content-Type que el método produce.',
        en: '415 Unsupported Media Type, because Accept does not match the Content-Type the method produces.',
      },
      {
        es: '200 con JSON de todos modos, ya que produces solo documenta OpenAPI y no filtra la respuesta.',
        en: '200 with JSON anyway, since produces only documents OpenAPI and does not filter the response.',
      },
    ],
    explanation: {
      es: 'produces participa en RequestMappingHandlerMapping: si ningún converter cubre el Accept, RequestResponseBodyMethodProcessor lanza HttpMediaTypeNotAcceptableException y el cuerpo no se escribe. 415 es HttpMediaTypeNotSupportedException, ligado a consumes y al Content-Type de entrada. produces no es metadato de OpenAPI; cambia qué peticiones mapean y qué se serializa.',
      en: 'produces takes part in RequestMappingHandlerMapping: if no converter covers Accept, RequestResponseBodyMethodProcessor throws HttpMediaTypeNotAcceptableException and the body is not written. 415 is HttpMediaTypeNotSupportedException, tied to consumes and the inbound Content-Type. produces is not OpenAPI metadata; it changes which requests map and what gets serialised.',
    },
  },
  {
    id: 'be-mvc-04',
    topic: 'Spring Web',
    prompt: {
      es: '¿Cómo se personaliza Jackson para los cuerpos HTTP en Spring MVC?',
      en: 'How is Jackson customised for HTTP bodies in Spring MVC?',
    },
    answer: {
      es: 'Registrando un Jackson2ObjectMapperBuilderCustomizer o un ObjectMapper que MappingJackson2HttpMessageConverter reutiliza.',
      en: 'By registering a Jackson2ObjectMapperBuilderCustomizer or an ObjectMapper that MappingJackson2HttpMessageConverter reuses.',
    },
    distractors: [
      {
        es: 'Anotando el método del controlador con @JsonInclude, que Spring aplica al converter global de la petición.',
        en: 'By annotating the controller method with @JsonInclude, which Spring applies to the global converter of the request.',
      },
      {
        es: 'Sustituyendo produces por una clase ObjectMapper en @RequestMapping, lo que aísla la configuración por endpoint.',
        en: 'By replacing produces with an ObjectMapper class in @RequestMapping, which isolates configuration per endpoint.',
      },
    ],
    explanation: {
      es: 'HttpMessageConverter convierte cuerpo y objeto; Boot cablea MappingJackson2HttpMessageConverter con el ObjectMapper del contexto. Un @Bean Jackson2ObjectMapperBuilderCustomizer, @JsonComponent o JavaTimeModule afecta a todas las respuestas JSON. @JsonInclude y @JsonIgnore van en tipos o campos, no en el método @GetMapping, y produces no inyecta un mapper.',
      en: 'HttpMessageConverter converts body and object; Boot wires MappingJackson2HttpMessageConverter with the context ObjectMapper. A @Bean Jackson2ObjectMapperBuilderCustomizer, @JsonComponent or JavaTimeModule affects every JSON response. @JsonInclude and @JsonIgnore belong on types or fields, not on the @GetMapping method, and produces does not inject a mapper.',
    },
  },
  {
    id: 'be-mvc-05',
    topic: 'Spring Web',
    prompt: {
      es: '¿Por qué es peligroso devolver una entidad JPA directamente como cuerpo JSON?',
      en: 'Why is it dangerous to return a JPA entity directly as a JSON body?',
    },
    answer: {
      es: 'Los proxies perezosos fallan fuera de la sesión y las asociaciones bidireccionales generan ciclos infinitos al serializar.',
      en: 'Lazy proxies fail outside the session and bidirectional associations create infinite cycles during serialisation.',
    },
    distractors: [
      {
        es: 'Jackson inicializa siempre los LAZY al serializar, así que el único riesgo es un payload demasiado grande.',
        en: 'Jackson always initialises LAZY associations when serialising, so the only risk is an oversized payload.',
      },
      {
        es: '@Transactional en el controlador cierra el EntityManager antes de serializar, lo que elimina los ciclos.',
        en: '@Transactional on the controller closes the EntityManager before serialisation, which removes the cycles.',
      },
    ],
    explanation: {
      es: 'Un proxy ByteBuddy o HibernateJavaProxy fuera de sesión lanza LazyInitializationException; con spring.jpa.open-in-view=true (defecto) se oculta y aparece N+1 durante el 200. @OneToMany y @ManyToOne recíprocos ciclan; se cortan con DTO, @JsonIgnore o @JsonBackReference. @Transactional en el @RestController no rompe ciclos y a menudo deja la sesión abierta justo mientras Jackson escribe.',
      en: 'A ByteBuddy or HibernateJavaProxy proxy outside a session throws LazyInitializationException; with spring.jpa.open-in-view=true (the default) it is hidden and N+1 appears during the 200. Reciprocal @OneToMany and @ManyToOne cycle; they are cut with a DTO, @JsonIgnore or @JsonBackReference. @Transactional on the @RestController does not break cycles and often keeps the session open while Jackson writes.',
    },
  },
  {
    id: 'be-mvc-06',
    topic: 'Spring Web',
    prompt: {
      es: '¿Cuándo usar ResponseEntity en lugar de la anotación @ResponseStatus?',
      en: 'When should you use ResponseEntity instead of the @ResponseStatus annotation?',
    },
    answer: {
      es: 'Cuando el código HTTP, las cabeceras o el cuerpo deben decidirse en tiempo de ejecución.',
      en: 'When the HTTP status, headers or body must be decided at runtime.',
    },
    distractors: [
      {
        es: 'Siempre, porque @ResponseStatus ignora el cuerpo de retorno y solo sirve para clases de excepción.',
        en: 'Always, because @ResponseStatus ignores the return body and only works on exception classes.',
      },
      {
        es: 'Nunca en un @RestController, ya que ResponseEntity duplica el trabajo de HttpMessageConverter y se ignora.',
        en: 'Never in a @RestController, since ResponseEntity duplicates HttpMessageConverter work and is ignored.',
      },
    ],
    explanation: {
      es: 'ResponseEntity.created(uri).body(dto) envía 201, Location y JSON en una sola decisión. @ResponseStatus(HttpStatus.NO_CONTENT) fija un código estático en el método o en una excepción; si el método retorna un objeto, el cuerpo sí se serializa con ese status. Si coexisten, gana el status de ResponseEntity. Converter y ResponseEntity cooperan: el segundo elige envoltorio HTTP, el primero el JSON.',
      en: 'ResponseEntity.created(uri).body(dto) sends 201, Location and JSON in a single decision. @ResponseStatus(HttpStatus.NO_CONTENT) pins a static code on the method or on an exception; if the method returns an object, the body is still serialised with that status. If both exist, the ResponseEntity status wins. Converter and ResponseEntity cooperate: the latter chooses the HTTP wrapper, the former the JSON.',
    },
  },
  {
    id: 'be-mvc-07',
    topic: 'Spring Web',
    prompt: {
      es: 'Respecto al orden y a las capacidades, ¿cómo se comparan filtro, interceptor y AOP en una petición MVC?',
      en: 'Regarding order and capabilities, how do filters, interceptors and AOP compare on an MVC request?',
    },
    answer: {
      es: 'El filtro Servlet envuelve a DispatcherServlet; el HandlerInterceptor ve el handler ya resuelto; el AOP actúa sobre el bean del controlador.',
      en: 'The Servlet filter wraps DispatcherServlet; HandlerInterceptor sees the already resolved handler; AOP acts on the controller bean.',
    },
    distractors: [
      {
        es: 'El interceptor se ejecuta antes que los filtros porque HandlerMapping corre en el contenedor, no en DispatcherServlet.',
        en: 'The interceptor runs before filters because HandlerMapping runs in the container, not in DispatcherServlet.',
      },
      {
        es: 'Un @Around de AOP puede reescribir la respuesta HTTP antes de que DispatcherServlet elija el HttpMessageConverter.',
        en: 'An AOP @Around can rewrite the HTTP response before DispatcherServlet chooses the HttpMessageConverter.',
      },
    ],
    explanation: {
      es: 'Orden real: Filter (CorsFilter, OncePerRequestFilter) -> DispatcherServlet -> preHandle -> método del @Controller (proxies AOP) -> postHandle -> afterCompletion. El interceptor no ve estáticos ni 404 sin handler; el filtro sí. AOP no es HTTP: no ve cabeceras salvo que inyectes HttpServletRequest, y no envuelve la escritura del converter. Los filtros pueden wrapping de request y response.',
      en: 'Real order: Filter (CorsFilter, OncePerRequestFilter) -> DispatcherServlet -> preHandle -> @Controller method (AOP proxies) -> postHandle -> afterCompletion. The interceptor does not see statics or a 404 without a handler; the filter does. AOP is not HTTP: it does not see headers unless you inject HttpServletRequest, and it does not wrap converter writing. Filters can wrap request and response.',
    },
  },
  {
    id: 'be-mvc-08',
    topic: 'Spring Web',
    prompt: {
      es: '¿Cómo se configura CORS en Spring y qué ocurre con el preflight?',
      en: 'How is CORS configured in Spring and what happens with the preflight?',
    },
    answer: {
      es: 'addCorsMappings o CorsFilter aplican de forma global; @CrossOrigin es local; el OPTIONS de preflight debe responder 200 con Access-Control-Allow-Methods.',
      en: 'addCorsMappings or CorsFilter apply globally; @CrossOrigin is local; the preflight OPTIONS must answer 200 with Access-Control-Allow-Methods.',
    },
    distractors: [
      {
        es: '@CrossOrigin(origins = "*") basta para cookies de sesión, porque el navegador ignora Allow-Credentials.',
        en: '@CrossOrigin(origins = "*") is enough for session cookies, because the browser ignores Allow-Credentials.',
      },
      {
        es: 'El preflight es un GET cacheable que Spring MVC reutiliza como la petición real si el interceptor lo permite.',
        en: 'The preflight is a cacheable GET that Spring MVC reuses as the real request if the interceptor allows it.',
      },
    ],
    explanation: {
      es: 'WebMvcConfigurer.addCorsMappings registra CorsRegistration global; @CrossOrigin en clase o método se combina con eso. El preflight es OPTIONS con Access-Control-Request-Method; DefaultCorsProcessor puede contestarlo con 200 sin entrar al controlador. No se puede usar * con allowCredentials=true: el navegador rechaza Access-Control-Allow-Origin. Spring Security necesita http.cors() además de MVC.',
      en: 'WebMvcConfigurer.addCorsMappings registers a global CorsRegistration; @CrossOrigin on class or method combines with that. The preflight is OPTIONS with Access-Control-Request-Method; DefaultCorsProcessor can answer it with 200 without entering the controller. * cannot be used with allowCredentials=true: the browser rejects Access-Control-Allow-Origin. Spring Security needs http.cors() in addition to MVC.',
    },
  },
  {
    id: 'be-mvc-09',
    topic: 'Spring Web',
    prompt: {
      es: '¿Qué implica el modelo de un hilo por petición de Spring MVC ante bloqueos de entrada y salida?',
      en: 'What does the one-thread-per-request model of Spring MVC imply when input and output blocks?',
    },
    answer: {
      es: 'Cada petición ocupa un hilo del pool de Tomcat hasta terminar, así que una llamada bloqueante de E/S agota el pool bajo carga.',
      en: 'Each request occupies a Tomcat pool thread until it finishes, so a blocking I/O call exhausts the pool under load.',
    },
    distractors: [
      {
        es: 'MVC usa el event loop de Netty igual que WebFlux, por eso un JDBC bloqueante no reduce la concurrencia.',
        en: 'MVC uses the Netty event loop just like WebFlux, so blocking JDBC does not reduce concurrency.',
      },
      {
        es: 'En Spring Boot 3, spring.threads.virtual.enabled sustituye a DispatcherServlet y elimina el límite de hilos HTTP.',
        en: 'In Spring Boot 3, spring.threads.virtual.enabled replaces DispatcherServlet and removes the HTTP thread limit.',
      },
    ],
    explanation: {
      es: 'Tomcat asigna un hilo de request; RestTemplate.getForObject o JdbcTemplate.query lo bloquean hasta el 200. server.tomcat.threads.max (200 por defecto) se satura con downstream lentos. Las virtual threads de Boot 3.2 (spring.threads.virtual.enabled) alivian el coste del bloqueo pero el modelo sigue siendo Servlet y DispatcherServlet. Netty es el stack de WebFlux, no el de starter-web.',
      en: 'Tomcat assigns a request thread; RestTemplate.getForObject or JdbcTemplate.query block it until the 200. server.tomcat.threads.max (200 by default) saturates with slow downstreams. Boot 3.2 virtual threads (spring.threads.virtual.enabled) ease the cost of blocking but the model remains Servlet and DispatcherServlet. Netty is the WebFlux stack, not starter-web.',
    },
  },
  {
    id: 'be-mvc-10',
    topic: 'Spring Web',
    prompt: {
      es: '¿Qué diferencia hay entre Callable y DeferredResult en un controlador MVC asíncrono?',
      en: 'What is the difference between Callable and DeferredResult in an asynchronous MVC controller?',
    },
    answer: {
      es: 'Callable lo ejecuta un TaskExecutor de Spring y libera el hilo HTTP; DeferredResult se completa después desde otro hilo o callback.',
      en: 'Callable is run by a Spring TaskExecutor and releases the HTTP thread; DeferredResult is completed later from another thread or callback.',
    },
    distractors: [
      {
        es: 'Callable es la API de WebFlux y DeferredResult es su equivalente bloqueante dentro de MVC.',
        en: 'Callable is the WebFlux API and DeferredResult is its blocking equivalent inside MVC.',
      },
      {
        es: 'DeferredResult mantiene ocupado el hilo de Tomcat hasta setResult, mientras Callable sí lo libera.',
        en: 'DeferredResult keeps the Tomcat thread busy until setResult, while Callable does release it.',
      },
    ],
    explanation: {
      es: 'Al devolver Callable, DispatcherServlet sale, WebAsyncManager corre el trabajo en un TaskExecutor y luego se redispacha la respuesta (200 o error). DeferredResult se crea vacío y otro hilo llama setResult o setErrorResult (mensaje JMS, webhook). Ambos usan el timeout de spring.mvc.async.request-timeout; ninguno es WebFlux ni Mono. El hilo HTTP se libera en los dos casos mientras hay espera.',
      en: 'When returning Callable, DispatcherServlet exits, WebAsyncManager runs the work on a TaskExecutor and then redispatches the response (200 or error). DeferredResult is created empty and another thread calls setResult or setErrorResult (JMS message, webhook). Both use the spring.mvc.async.request-timeout timeout; neither is WebFlux nor Mono. The HTTP thread is released in both cases while waiting.',
    },
  },
  {
    id: 'be-mvc-11',
    topic: 'Spring Web',
    prompt: {
      es: '¿Cuándo compensa de verdad WebFlux reactivo frente a MVC?',
      en: 'When does reactive WebFlux truly pay off compared with MVC?',
    },
    answer: {
      es: 'Cuando hay muchas conexiones concurrentes esperando E/S no bloqueante y el equipo evita APIs bloqueantes en el event loop.',
      en: 'When many concurrent connections wait on non-blocking I/O and the team avoids blocking APIs on the event loop.',
    },
    distractors: [
      {
        es: 'Siempre que se use JPA, porque R2DBC es el valor por defecto en Spring Boot 3 y MVC no escala.',
        en: 'Whenever JPA is used, because R2DBC is the default in Spring Boot 3 and MVC does not scale.',
      },
      {
        es: 'Nunca en APIs JSON: WebFlux solo aporta valor con SSE o WebSocket, no con application/json.',
        en: 'Never on JSON APIs: WebFlux only adds value with SSE or WebSocket, not with application/json.',
      },
    ],
    explanation: {
      es: 'WebFlux (Netty, WebClient, backpressure) brilla con miles de conexiones I/O bound y streaming; un JDBC o JPA bloqueante en el event loop empeora el 99p. Boot 3 no pone R2DBC por defecto. Para CRUD síncrono, MVC más virtual threads suele ser más simple y no más lento en CPU. WebFlux sí sirve JSON (Mono, Flux) además de text/event-stream.',
      en: 'WebFlux (Netty, WebClient, backpressure) shines with thousands of I/O bound connections and streaming; blocking JDBC or JPA on the event loop worsens the 99p. Boot 3 does not default to R2DBC. For synchronous CRUD, MVC plus virtual threads is usually simpler and not slower on CPU. WebFlux does serve JSON (Mono, Flux) as well as text/event-stream.',
    },
  },
  {
    id: 'be-mvc-12',
    topic: 'Spring Web',
    prompt: {
      es: '¿Cuál es el estado de RestTemplate frente a WebClient?',
      en: 'What is the status of RestTemplate compared with WebClient?',
    },
    answer: {
      es: 'RestTemplate está en modo mantenimiento; WebClient es el cliente moderno y puede usarse desde MVC, incluso bloqueando con block().',
      en: 'RestTemplate is in maintenance mode; WebClient is the modern client and can be used from MVC, even blocking with block().',
    },
    distractors: [
      {
        es: 'RestTemplate se eliminó en Spring Boot 3 y el arranque falla si queda alguna referencia en el classpath.',
        en: 'RestTemplate was removed in Spring Boot 3 and startup fails if any reference remains on the classpath.',
      },
      {
        es: 'WebClient solo se puede inyectar en aplicaciones WebFlux, no junto a spring-boot-starter-web.',
        en: 'WebClient can only be injected in WebFlux applications, not together with spring-boot-starter-web.',
      },
    ],
    explanation: {
      es: 'Desde Spring 5 RestTemplate está en maintenance mode, pero sigue en spring-web y Boot 3 lo instancia sin error. WebClient (proyecto WebFlux) funciona en una app MVC si está la dependencia; getForObject se sustituye por retrieve().bodyToMono(Dto.class).block(). El sucesor sincrónico explícito es RestClient en Boot 3.2. block() en un hilo de Tomcat es válido, aunque pierde lo reactivo.',
      en: 'Since Spring 5 RestTemplate is in maintenance mode, but it remains in spring-web and Boot 3 still instantiates it without error. WebClient (WebFlux project) works in an MVC app if the dependency is present; getForObject is replaced by retrieve().bodyToMono(Dto.class).block(). The explicit synchronous successor is RestClient in Boot 3.2. block() on a Tomcat thread is valid, even if it loses the reactive part.',
    },
  },
  {
    id: 'be-mvc-13',
    topic: 'Spring Web',
    prompt: {
      es: '¿Qué es RestClient, introducido con Spring Boot 3.2, como cliente HTTP?',
      en: 'What is RestClient, introduced with Spring Boot 3.2, as an HTTP client?',
    },
    answer: {
      es: 'Un cliente sincrónico y fluido que reutiliza los HttpMessageConverter de MVC y sustituye el estilo de RestTemplate.',
      en: 'A synchronous fluent client that reuses MVC HttpMessageConverter instances and replaces the RestTemplate style.',
    },
    distractors: [
      {
        es: 'Un envoltorio reactivo de WebClient que obliga a devolver Mono o Flux en cada llamada.',
        en: 'A reactive wrapper around WebClient that forces every call to return Mono or Flux.',
      },
      {
        es: 'Una API que solo funciona si se activan hilos virtuales, porque internamente usa StructuredTaskScope.',
        en: 'An API that only works if virtual threads are enabled, because it uses StructuredTaskScope internally.',
      },
    ],
    explanation: {
      es: 'Spring Framework 6.1 añade RestClient: restClient.get().uri("/books/{id}", id).retrieve().body(Book.class) es sincrónico y no requiere block(). Comparte converters (Jackson) con MVC. Boot 3.2 auto-configura RestClient.Builder. No es WebFlux y no exige spring.threads.virtual.enabled. RestTemplate sigue vivo; RestClient es la API fluida recomendada para código sincrónico nuevo.',
      en: 'Spring Framework 6.1 adds RestClient: restClient.get().uri("/books/{id}", id).retrieve().body(Book.class) is synchronous and does not need block(). It shares converters (Jackson) with MVC. Boot 3.2 auto-configures RestClient.Builder. It is not WebFlux and does not require spring.threads.virtual.enabled. RestTemplate is still alive; RestClient is the fluent API recommended for new synchronous code.',
    },
  },
  {
    id: 'be-mvc-14',
    topic: 'Spring Web',
    prompt: {
      es: '¿Dónde se configuran los tiempos de espera y el pool de conexiones en las llamadas HTTP salientes?',
      en: 'Where are timeouts and the connection pool configured for outbound HTTP calls?',
    },
    answer: {
      es: 'En el RequestFactory o el Connector del cliente (connect, read y ConnectionProvider), no en las propiedades async de MVC.',
      en: 'On the client RequestFactory or Connector (connect, read and ConnectionProvider), not on MVC async properties.',
    },
    distractors: [
      {
        es: 'spring.mvc.async.request-timeout aplica a RestTemplate y WebClient porque ambos pasan por DispatcherServlet.',
        en: 'spring.mvc.async.request-timeout applies to RestTemplate and WebClient because both go through DispatcherServlet.',
      },
      {
        es: 'El pool de Tomcat (server.tomcat.max-connections) limita también las conexiones de salida del RestClient.',
        en: 'The Tomcat pool (server.tomcat.max-connections) also limits RestClient outbound connections.',
      },
    ],
    explanation: {
      es: 'RestTemplate y RestClient usan ClientHttpRequestFactory: HttpComponentsClientHttpRequestFactory.setConnectTimeout, setReadTimeout y PoolingHttpClientConnectionManager.setMaxTotal. WebClient usa ReactorClientHttpConnector, ConnectionProvider.maxConnections y HttpClient.responseTimeout. Sin tope se agotan sockets y el hilo de la petición de entrada espera hasta un 504 o un error de I/O. spring.mvc.async.request-timeout es para Callable y DeferredResult de entrada, no para el cliente saliente.',
      en: 'RestTemplate and RestClient use ClientHttpRequestFactory: HttpComponentsClientHttpRequestFactory.setConnectTimeout, setReadTimeout and PoolingHttpClientConnectionManager.setMaxTotal. WebClient uses ReactorClientHttpConnector, ConnectionProvider.maxConnections and HttpClient.responseTimeout. Without a cap, sockets run out and the inbound request thread waits until a 504 or an I/O error. spring.mvc.async.request-timeout is for inbound Callable and DeferredResult, not for the outbound client.',
    },
  },
  {
    id: 'be-mvc-15',
    topic: 'Spring Web',
    prompt: {
      es: '¿Cómo se limitan las subidas de archivos con MultipartFile?',
      en: 'How are file uploads with MultipartFile limited?',
    },
    answer: {
      es: 'Con spring.servlet.multipart.max-file-size y max-request-size; al superarlos suele dispararse MaxUploadSizeExceededException.',
      en: 'With spring.servlet.multipart.max-file-size and max-request-size; exceeding them usually raises MaxUploadSizeExceededException.',
    },
    distractors: [
      {
        es: 'El único límite es server.tomcat.max-swallow-size; MultipartFile ignora las propiedades multipart de Boot.',
        en: 'The only limit is server.tomcat.max-swallow-size; MultipartFile ignores Boot multipart properties.',
      },
      {
        es: 'Spring redirige automáticamente a S3 cualquier archivo mayor de 1 MB, por eso no hace falta un tope local.',
        en: 'Spring automatically offloads any file larger than 1 MB to S3, so a local cap is not needed.',
      },
    ],
    explanation: {
      es: 'StandardServletMultipartResolver lee esas propiedades (por defecto 1 MB por archivo y 10 MB por petición en Boot). El parámetro es @RequestParam MultipartFile file. Sin @ExceptionHandler el contenedor puede devolver 500; mapeando MaxUploadSizeExceededException se responde 413. spring.servlet.multipart.file-size-threshold decide cuándo volcar a disco. No hay offload a S3 integrado.',
      en: 'StandardServletMultipartResolver reads those properties (by default 1 MB per file and 10 MB per request in Boot). The parameter is @RequestParam MultipartFile file. Without an @ExceptionHandler the container may return 500; mapping MaxUploadSizeExceededException yields 413. spring.servlet.multipart.file-size-threshold decides when to spill to disk. There is no built-in S3 offload.',
    },
  },
  {
    id: 'be-mvc-16',
    topic: 'Spring Web',
    prompt: {
      es: '¿Cuál es el contrato de paginación con Pageable en la petición y en la respuesta?',
      en: 'What is the pagination contract with Pageable on the request and on the response?',
    },
    answer: {
      es: 'La petición envía page, size y sort como query; el método recibe Pageable y suele devolver Page, que serializa content, totalElements y totalPages.',
      en: 'The request sends page, size and sort as query parameters; the method receives Pageable and usually returns Page, which serialises content, totalElements and totalPages.',
    },
    distractors: [
      {
        es: 'Pageable viaja solo en el cuerpo JSON de respuesta; la petición usa una cabecera X-Page obligatoria.',
        en: 'Pageable travels only in the JSON response body; the request uses a mandatory X-Page header.',
      },
      {
        es: 'Hay que devolver List y calcular totalPages a mano, porque Page no es serializable con Jackson en Boot 3.',
        en: 'You must return List and compute totalPages by hand, because Page is not Jackson-serialisable in Boot 3.',
      },
    ],
    explanation: {
      es: 'PageableHandlerMethodArgumentResolver lee ?page=0&size=20&sort=name,asc y construye PageRequest. Un PageImpl se serializa como content, pageable, totalElements, totalPages, number y size con 200 aunque esté vacío (no 404). spring.data.web.pageable.max-page-size evita size=Integer.MAX_VALUE. No hace falta @RequestBody para Pageable.',
      en: 'PageableHandlerMethodArgumentResolver reads ?page=0&size=20&sort=name,asc and builds PageRequest. A PageImpl serialises as content, pageable, totalElements, totalPages, number and size with 200 even when empty (not 404). spring.data.web.pageable.max-page-size prevents size=Integer.MAX_VALUE. @RequestBody is not needed for Pageable.',
    },
  },
  {
    id: 'be-mvc-17',
    topic: 'Spring Web',
    prompt: {
      es: '¿Por qué @Valid no basta en query o path y qué papel tienen los grupos con @Validated?',
      en: 'Why is @Valid not enough on query or path parameters and what role do groups play with @Validated?',
    },
    answer: {
      es: 'La validación de @RequestParam o @PathVariable exige @Validated en la clase del controlador; los grupos se activan con @Validated(Grupo.class).',
      en: 'Validation of @RequestParam or @PathVariable requires @Validated on the controller class; groups are activated with @Validated(Group.class).',
    },
    distractors: [
      {
        es: '@Valid en cada @RequestParam ya dispara Bean Validation, y el grupo se infiere automáticamente del verbo HTTP.',
        en: '@Valid on each @RequestParam already triggers Bean Validation, and the group is inferred automatically from the HTTP verb.',
      },
      {
        es: '@Validated solo sirve para @RequestBody; para query hay que validar en un Filter antes de DispatcherServlet.',
        en: '@Validated only works for @RequestBody; for query parameters you must validate in a Filter before DispatcherServlet.',
      },
    ],
    explanation: {
      es: 'MethodValidationPostProcessor necesita @Validated a nivel de tipo para honrar @Min o @NotBlank en un @RequestParam; si falla lanza ConstraintViolationException (500 si nadie la mapea a 400). @Valid de Jakarta valida el grafo de un @RequestBody y produce MethodArgumentNotValidException -> 400. Los grupos no se infieren del POST o PUT: se pasan con @Validated(OnCreate.class) en el parámetro o el método.',
      en: 'MethodValidationPostProcessor needs type-level @Validated to honour @Min or @NotBlank on a @RequestParam; failure throws ConstraintViolationException (500 if nobody maps it to 400). Jakarta @Valid validates the graph of a @RequestBody and yields MethodArgumentNotValidException -> 400. Groups are not inferred from POST or PUT: they are passed with @Validated(OnCreate.class) on the parameter or the method.',
    },
  },
  {
    id: 'be-mvc-18',
    topic: 'Spring Web',
    prompt: {
      es: '¿Cuál es un caso de uso real de un HandlerMethodArgumentResolver propio?',
      en: 'What is a real use case for a custom HandlerMethodArgumentResolver?',
    },
    answer: {
      es: 'Extraer un tipo recurrente desde cabeceras, el Principal o atributos de la petición cuando no encaja en @RequestParam, @PathVariable ni @RequestBody.',
      en: 'Extracting a recurring type from headers, the Principal or request attributes when it does not fit @RequestParam, @PathVariable or @RequestBody.',
    },
    distractors: [
      {
        es: 'Cambiar el ObjectMapper de un único endpoint, sustituyendo a HttpMessageConverter para ese @RequestMapping.',
        en: 'Changing the ObjectMapper of a single endpoint, replacing HttpMessageConverter for that @RequestMapping.',
      },
      {
        es: 'Traducir excepciones a ProblemDetail, que es exactamente el contrato de HandlerMethodArgumentResolver.',
        en: 'Translating exceptions to ProblemDetail, which is exactly the HandlerMethodArgumentResolver contract.',
      },
    ],
    explanation: {
      es: 'supportsParameter y resolveArgument construyen, por ejemplo, un CurrentUser desde el JWT o un valor dejado por un interceptor en request.setAttribute. Se registra con WebMvcConfigurer.addArgumentResolvers. No convierte JSON (HttpMessageConverter) ni maneja errores (HandlerExceptionResolver, @ExceptionHandler). Si el valor falta, el resolver puede lanzar una excepción que acabe en 400 o 401.',
      en: 'supportsParameter and resolveArgument build, for example, a CurrentUser from the JWT or a value left by an interceptor in request.setAttribute. It is registered with WebMvcConfigurer.addArgumentResolvers. It does not convert JSON (HttpMessageConverter) and it does not handle errors (HandlerExceptionResolver, @ExceptionHandler). If the value is missing, the resolver may throw an exception that ends as 400 or 401.',
    },
  },
  {
    id: 'be-mvc-19',
    topic: 'Spring Web',
    prompt: {
      es: '¿Qué aportan ProblemDetail y el RFC 7807 para las respuestas de error en Spring Boot 3?',
      en: 'What do ProblemDetail and RFC 7807 add for error responses in Spring Boot 3?',
    },
    answer: {
      es: 'Un cuerpo de error estándar (type, title, status, detail, instance) servido como application/problem+json.',
      en: 'A standard error body (type, title, status, detail, instance) served as application/problem+json.',
    },
    distractors: [
      {
        es: 'Sustituyen el código HTTP: el cliente solo debe leer title y el status de la respuesta siempre es 200.',
        en: 'They replace the HTTP status: the client should only read title and the response status is always 200.',
      },
      {
        es: 'Son exclusivos de Actuator /health y no se pueden devolver desde un @ExceptionHandler de MVC.',
        en: 'They are exclusive to Actuator /health and cannot be returned from an MVC @ExceptionHandler.',
      },
    ],
    explanation: {
      es: 'Spring 6 introduce ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, "...") y ErrorResponseException; ResponseEntityExceptionHandler ya lo usa para 400 y 404. El RFC 7807 no elimina el status: un recurso ausente sigue siendo 404 con Content-Type application/problem+json. Un @ExceptionHandler puede devolver ProblemDetail o ResponseEntity<ProblemDetail> y añadir properties. No es un endpoint de Actuator.',
      en: 'Spring 6 introduces ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, "...") and ErrorResponseException; ResponseEntityExceptionHandler already uses it for 400 and 404. RFC 7807 does not remove the status: a missing resource is still 404 with Content-Type application/problem+json. An @ExceptionHandler can return ProblemDetail or ResponseEntity<ProblemDetail> and add properties. It is not an Actuator endpoint.',
    },
  },
  {
    id: 'be-mvc-20',
    topic: 'Spring Web',
    prompt: {
      es: 'En una API, ¿cuándo es aceptable la sesión de servlet frente a un diseño sin estado?',
      en: 'On an API, when is the servlet session acceptable versus a stateless design?',
    },
    answer: {
      es: 'Cuando hay un navegador con cookies (SSR, formulario, CSRF) y no se escala sin Spring Session; las APIs con token deben seguir sin estado.',
      en: 'When there is a browser with cookies (SSR, form login, CSRF) and you do not scale without Spring Session; token APIs should stay stateless.',
    },
    distractors: [
      {
        es: 'Nunca: REST exige ausencia de cookies, así que JSESSIONID invalida el contrato aunque la UI sea Thymeleaf.',
        en: 'Never: REST requires the absence of cookies, so JSESSIONID invalidates the contract even if the UI is Thymeleaf.',
      },
      {
        es: 'Siempre en Boot 3, porque spring.session.store-type=redis convierte cualquier API en stateless de facto.',
        en: 'Always in Boot 3, because spring.session.store-type=redis turns any API into a de facto stateless one.',
      },
    ],
    explanation: {
      es: 'HttpSession y la cookie JSESSIONID atan la conversación a una instancia o exigen Spring Session; Spring Security usa SessionCreationPolicy.STATELESS en APIs JWT para no crear sesión. La sesión sí encaja con Thymeleaf, login form y el token CSRF de cookie. Redis no hace la API sin estado: solo externaliza el mapa de sesión. Sin estado no significa cero cookies; significa que el servidor no guarda conversación por petición.',
      en: 'HttpSession and the JSESSIONID cookie bind the conversation to one instance or require Spring Session; Spring Security uses SessionCreationPolicy.STATELESS on JWT APIs so no session is created. Session does fit Thymeleaf, form login and the CSRF cookie token. Redis does not make the API stateless: it only externalises the session map. Stateless does not mean zero cookies; it means the server does not keep conversation state per request.',
    },
  },
];
