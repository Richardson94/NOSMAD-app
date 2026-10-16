import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_SPRING_WEB_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-mvc-01',
    topic: 'MVC',
    prompt: {
      es: '¿Qué hace el DispatcherServlet con una petición HTTP?',
      en: 'What does the DispatcherServlet do with an HTTP request?',
    },
    answer: {
      es: 'Encuentra el método del controlador, lo invoca y escribe la respuesta, ya sea una vista o el cuerpo JSON.',
      en: 'It finds the controller method, invokes it and writes the response, either a view or the JSON body.',
    },
    distractors: [
      {
        es: 'Los filtros corren después del controlador, cuando ya se eligió la vista.',
        en: 'Filters run after the controller, once the view has already been chosen.',
      },
      {
        es: 'El interceptor sustituye al controlador y es quien ejecuta el método.',
        en: 'The interceptor replaces the controller and is the one that runs the method.',
      },
    ],
    explanation: {
      es: 'El filtro envuelve al servlet, así que va por fuera. El código HTTP lo decide lo que devuelves, no el mapeo de la ruta.',
      en: 'The filter wraps the servlet, so it sits outside. The HTTP status is decided by what you return, not by the route mapping.',
    },
  },
  {
    id: 'be-mvc-02',
    topic: 'Peticiones',
    prompt: {
      es: '¿Qué diferencia hay entre @RequestParam, @PathVariable y @RequestBody?',
      en: 'What is the difference between @RequestParam, @PathVariable and @RequestBody?',
    },
    answer: {
      es: 'RequestParam lee la query o el formulario. PathVariable lee un trozo de la ruta. RequestBody lee el cuerpo, por ejemplo el JSON.',
      en: 'RequestParam reads the query or the form. PathVariable reads a piece of the path. RequestBody reads the body, for example the JSON.',
    },
    distractors: [
      {
        es: 'RequestParam lee el JSON y RequestBody lee la query.',
        en: 'RequestParam reads the JSON and RequestBody reads the query.',
      },
      {
        es: 'PathVariable y RequestParam son intercambiables. Spring elige según el nombre.',
        en: 'PathVariable and RequestParam are interchangeable. Spring chooses according to the name.',
      },
    ],
    explanation: {
      es: 'Sin RequestBody, un objeto se rellena desde query o form, no desde JSON. Si el JSON no encaja, la respuesta es 400.',
      en: 'Without RequestBody, an object is filled from the query or the form, not from JSON. If the JSON does not fit, the response is 400.',
    },
  },
  {
    id: 'be-mvc-03',
    topic: 'HTTP',
    prompt: {
      es: '¿Qué responde Spring si el método produce JSON y el cliente pide XML?',
      en: 'What does Spring respond if the method produces JSON and the client asks for XML?',
    },
    answer: {
      es: '406, porque no puede escribir un cuerpo que el cliente acepte. 415 es otro caso: el Content-Type que te enviaron no es el que el método consume.',
      en: '406, because it cannot write a body the client accepts. 415 is a different case: the Content-Type they sent is not one the method consumes.',
    },
    distractors: [
      {
        es: '415, porque Accept no coincide con lo que el método produce.',
        en: '415, because Accept does not match what the method produces.',
      },
      {
        es: '200 con JSON igual, porque produces solo documenta y no filtra.',
        en: '200 with JSON anyway, because produces only documents and does not filter.',
      },
    ],
    explanation: {
      es: 'produces y consumes sí cambian qué petición encaja. No son adorno de la documentación.',
      en: 'produces and consumes do change which request matches. They are not documentation decoration.',
    },
  },
  {
    id: 'be-mvc-04',
    topic: 'JSON',
    prompt: {
      es: '¿Cómo personalizas el JSON que escribe Spring?',
      en: 'How do you customise the JSON that Spring writes?',
    },
    answer: {
      es: 'Con un bean que ajusta el ObjectMapper, o con anotaciones en los campos del tipo. No se configura en el método del controlador.',
      en: 'With a bean that adjusts the ObjectMapper, or with annotations on the fields of the type. It is not configured on the controller method.',
    },
    distractors: [
      {
        es: 'Anotando el método con JsonInclude, que Spring aplica a todas las respuestas.',
        en: 'By annotating the method with JsonInclude, which Spring applies to every response.',
      },
      {
        es: 'Poniendo la clase del ObjectMapper en produces de ese endpoint.',
        en: 'By putting the ObjectMapper class in produces of that endpoint.',
      },
    ],
    explanation: {
      es: 'Un módulo de fechas o ignorar null afecta a toda la aplicación. JsonIgnore va en el campo, no en el GetMapping.',
      en: 'A dates module or ignoring nulls affects the whole application. JsonIgnore belongs on the field, not on the GetMapping.',
    },
  },
  {
    id: 'be-mvc-05',
    topic: 'JSON',
    prompt: {
      es: '¿Por qué no debes devolver una entidad JPA como JSON?',
      en: 'Why should you not return a JPA entity as JSON?',
    },
    answer: {
      es: 'Porque una relación perezosa falla fuera de la sesión o dispara consultas de más, y un vínculo de ida y vuelta puede serializarse en bucle. Devuelve un DTO.',
      en: 'Because a lazy relation fails outside the session or fires extra queries, and a link in both directions can serialise in a loop. Return a DTO.',
    },
    distractors: [
      {
        es: 'Jackson carga siempre lo perezoso, así que el único riesgo es un JSON grande.',
        en: 'Jackson always loads lazy data, so the only risk is a large JSON.',
      },
      {
        es: 'Con @Transactional en el controlador se cierra la sesión antes de serializar y desaparecen los ciclos.',
        en: 'With @Transactional on the controller the session closes before serialisation and the cycles disappear.',
      },
    ],
    explanation: {
      es: 'Dejar la sesión abierta durante la respuesta esconde el fallo y puede producir el problema N+1 al escribir el JSON.',
      en: 'Leaving the session open during the response hides the failure and can cause the N+1 problem while writing the JSON.',
    },
  },
  {
    id: 'be-mvc-06',
    topic: 'HTTP',
    prompt: {
      es: '¿Cuándo usas ResponseEntity en lugar de @ResponseStatus?',
      en: 'When do you use ResponseEntity instead of @ResponseStatus?',
    },
    answer: {
      es: 'Cuando el código, las cabeceras o el cuerpo se deciden al ejecutar. ResponseStatus fija un código estático en el método o en la excepción.',
      en: 'When the status, the headers or the body are decided at runtime. ResponseStatus pins a static code on the method or on the exception.',
    },
    distractors: [
      {
        es: 'Siempre, porque ResponseStatus ignora el cuerpo y solo vale en excepciones.',
        en: 'Always, because ResponseStatus ignores the body and only works on exceptions.',
      },
      {
        es: 'Nunca en un RestController, porque ResponseEntity se ignora.',
        en: 'Never in a RestController, because ResponseEntity is ignored.',
      },
    ],
    explanation: {
      es: 'Un creado con 201 y la cabecera Location se expresa bien con ResponseEntity. Si conviven, gana el status de ResponseEntity.',
      en: 'A created response with 201 and the Location header is expressed well with ResponseEntity. If both exist, the ResponseEntity status wins.',
    },
  },
  {
    id: 'be-mvc-07',
    topic: 'MVC',
    prompt: {
      es: '¿En qué orden actúan un filtro, un interceptor y un aspecto sobre una petición?',
      en: 'In what order do a filter, an interceptor and an aspect act on a request?',
    },
    answer: {
      es: 'El filtro envuelve al servlet y ve la petición antes. El interceptor ve el controlador ya elegido. El aspecto actúa sobre el bean cuando se llama al método.',
      en: 'The filter wraps the servlet and sees the request first. The interceptor sees the controller already chosen. The aspect acts on the bean when the method is called.',
    },
    distractors: [
      {
        es: 'El interceptor va antes que los filtros, porque el mapeo ocurre fuera del servlet.',
        en: 'The interceptor runs before the filters, because mapping happens outside the servlet.',
      },
      {
        es: 'El aspecto puede cambiar el código HTTP antes de elegir cómo se escribe el cuerpo.',
        en: 'The aspect can change the HTTP status before choosing how the body is written.',
      },
    ],
    explanation: {
      es: 'El filtro sí ve recursos estáticos y un 404. El interceptor no, si no hubo controlador. El aspecto no es HTTP: no ve cabeceras salvo que se las pases.',
      en: 'The filter does see static resources and a 404. The interceptor does not, if there was no controller. The aspect is not HTTP: it does not see headers unless you pass them in.',
    },
  },
  {
    id: 'be-mvc-08',
    topic: 'CORS',
    prompt: {
      es: '¿Qué es CORS en una frase?',
      en: 'What is CORS in one sentence?',
    },
    answer: {
      es: 'Es una regla del navegador: una página solo puede llamar a otro origen si esa API lo permite. El preflight es un OPTIONS previo a la petición real.',
      en: 'It is a browser rule: a page may call another origin only if that API allows it. The preflight is an OPTIONS request before the real one.',
    },
    distractors: [
      {
        es: 'Es un filtro del servidor que bloquea cualquier cliente que no sea un navegador.',
        en: 'It is a server filter that blocks every client that is not a browser.',
      },
      {
        es: 'Con un origen asterisco ya puedes enviar cookies. El navegador no mira las credenciales.',
        en: 'With a wildcard origin you can already send cookies. The browser does not look at credentials.',
      },
    ],
    explanation: {
      es: 'Se configura en el MVC o con un filtro, y también en Spring Security. El asterisco no vale si pides credenciales.',
      en: 'It is configured in MVC or with a filter, and also in Spring Security. A wildcard does not work if you ask for credentials.',
    },
  },
  {
    id: 'be-mvc-09',
    topic: 'MVC',
    prompt: {
      es: '¿Qué implica el modelo de un hilo por petición si llamas a algo que bloquea?',
      en: 'What does the one-thread-per-request model imply if you call something that blocks?',
    },
    answer: {
      es: 'Esa petición ocupa un hilo del servidor hasta que termina. Si muchas esperan a la base o a otro servicio, el pool se agota y el resto hace cola.',
      en: 'That request holds a server thread until it finishes. If many of them wait on the database or on another service, the pool runs out and the rest queue up.',
    },
    distractors: [
      {
        es: 'MVC usa el mismo bucle de eventos que WebFlux, así que un JDBC bloqueante no reduce la concurrencia.',
        en: 'MVC uses the same event loop as WebFlux, so blocking JDBC does not reduce concurrency.',
      },
      {
        es: 'Los hilos virtuales quitan el servlet y ya no hay límite de peticiones.',
        en: 'Virtual threads remove the servlet and there is no longer a request limit.',
      },
    ],
    explanation: {
      es: 'El tope típico del pool es finito. Los hilos virtuales abaratan el bloqueo, pero el modelo sigue siendo una petición, un hilo de trabajo.',
      en: 'The typical pool cap is finite. Virtual threads make blocking cheaper, but the model is still one request, one worker thread.',
    },
  },
  {
    id: 'be-mvc-10',
    topic: 'MVC',
    prompt: {
      es: '¿Qué pasa si un controlador devuelve un Callable?',
      en: 'What happens if a controller returns a Callable?',
    },
    answer: {
      es: 'Spring ejecuta ese trabajo en otro executor y libera el hilo HTTP mientras tanto. DeferredResult es parecido, pero lo completas tú más tarde desde otro sitio.',
      en: 'Spring runs that work on another executor and frees the HTTP thread meanwhile. DeferredResult is similar, but you complete it later from somewhere else.',
    },
    distractors: [
      {
        es: 'Callable es la API de WebFlux y DeferredResult bloquea el hilo de Tomcat hasta el final.',
        en: 'Callable is the WebFlux API and DeferredResult blocks the Tomcat thread until the end.',
      },
      {
        es: 'Los dos mantienen ocupado el hilo HTTP. Solo cambian el tipo de retorno.',
        en: 'Both keep the HTTP thread busy. They only change the return type.',
      },
    ],
    explanation: {
      es: 'Sirven para no acaparar el pool durante una espera. No convierten la aplicación en reactiva.',
      en: 'They exist so you do not hold the pool during a wait. They do not turn the application into a reactive one.',
    },
  },
  {
    id: 'be-mvc-11',
    topic: 'WebFlux',
    prompt: {
      es: '¿Cuándo compensa WebFlux frente a MVC?',
      en: 'When does WebFlux pay off compared with MVC?',
    },
    answer: {
      es: 'Cuando hay muchas conexiones esperando entrada y salida que no bloquea, y el equipo no llama APIs bloqueantes en ese bucle. Para un CRUD con JPA, MVC es más simple.',
      en: 'When many connections wait on input and output that does not block, and the team does not call blocking APIs on that loop. For CRUD with JPA, MVC is simpler.',
    },
    distractors: [
      {
        es: 'Siempre que uses JPA, porque la base reactiva es el defecto y MVC no escala.',
        en: 'Whenever you use JPA, because the reactive database is the default and MVC does not scale.',
      },
      {
        es: 'Nunca en JSON. Solo aporta con websockets.',
        en: 'Never for JSON. It only helps with websockets.',
      },
    ],
    explanation: {
      es: 'Un JDBC bloqueante dentro del bucle de eventos empeora la latencia. WebFlux sí puede devolver JSON.',
      en: 'Blocking JDBC inside the event loop makes latency worse. WebFlux can still return JSON.',
    },
  },
  {
    id: 'be-mvc-12',
    topic: 'Clientes HTTP',
    prompt: {
      es: '¿Cuál es la situación de RestTemplate frente a WebClient?',
      en: 'What is the status of RestTemplate compared with WebClient?',
    },
    answer: {
      es: 'RestTemplate está en mantenimiento y sigue existiendo. WebClient es el cliente más nuevo y, desde MVC, puedes usarlo y bloquear al final si necesitas el valor ya.',
      en: 'RestTemplate is in maintenance and still exists. WebClient is the newer client and, from MVC, you can use it and block at the end if you need the value now.',
    },
    distractors: [
      {
        es: 'RestTemplate se eliminó y el arranque falla si queda alguna referencia.',
        en: 'RestTemplate was removed and startup fails if any reference remains.',
      },
      {
        es: 'WebClient solo se inyecta en aplicaciones WebFlux, no junto al starter web clásico.',
        en: 'WebClient can be injected only in WebFlux applications, not next to the classic web starter.',
      },
    ],
    explanation: {
      es: 'Para código síncrono nuevo, RestClient es la opción fluida. block en un hilo de servidor es válido, pero pierdes lo no bloqueante.',
      en: 'For new synchronous code, RestClient is the fluent option. block on a server thread is valid, but you lose the non-blocking part.',
    },
  },
  {
    id: 'be-mvc-13',
    topic: 'Clientes HTTP',
    prompt: {
      es: '¿Qué es RestClient?',
      en: 'What is RestClient?',
    },
    answer: {
      es: 'Un cliente HTTP síncrono y fluido, el sustituto moderno de RestTemplate en código nuevo. Reutiliza la conversión de JSON de MVC y no devuelve un tipo reactivo.',
      en: 'A synchronous fluent HTTP client, the modern replacement for RestTemplate in new code. It reuses the MVC JSON conversion and it does not return a reactive type.',
    },
    distractors: [
      {
        es: 'Un envoltorio de WebClient que obliga a devolver un flujo en cada llamada.',
        en: 'A wrapper around WebClient that forces every call to return a stream.',
      },
      {
        es: 'Solo funciona si activas hilos virtuales.',
        en: 'It works only if you turn on virtual threads.',
      },
    ],
    explanation: {
      es: 'Boot puede darte un builder. RestTemplate no ha desaparecido, pero el estilo nuevo es RestClient.',
      en: 'Boot can give you a builder. RestTemplate has not disappeared, but the new style is RestClient.',
    },
  },
  {
    id: 'be-mvc-14',
    topic: 'Clientes HTTP',
    prompt: {
      es: '¿Dónde configuras los timeouts de una llamada HTTP saliente?',
      en: 'Where do you configure timeouts for an outbound HTTP call?',
    },
    answer: {
      es: 'En el cliente: tiempo de conexión, tiempo de lectura y el tamaño del pool. El timeout async de MVC es para controladores de entrada, no para la llamada que tú haces.',
      en: 'On the client: connect time, read time and the pool size. The MVC async timeout is for inbound controllers, not for the call you make.',
    },
    distractors: [
      {
        es: 'En spring.mvc.async.request-timeout, porque RestTemplate pasa por el mismo servlet.',
        en: 'In spring.mvc.async.request-timeout, because RestTemplate goes through the same servlet.',
      },
      {
        es: 'En el pool de Tomcat, que limita también las conexiones de salida.',
        en: 'In the Tomcat pool, which also limits outbound connections.',
      },
    ],
    explanation: {
      es: 'Sin tope, un servicio lento ocupa hilos y sockets hasta que algo falla. Separa el timeout de conectar del de esperar la respuesta.',
      en: 'Without a cap, a slow service holds threads and sockets until something fails. Separate the connect timeout from the time you wait for the response.',
    },
  },
  {
    id: 'be-mvc-15',
    topic: 'Peticiones',
    prompt: {
      es: '¿Cómo limitas la subida de un archivo?',
      en: 'How do you limit a file upload?',
    },
    answer: {
      es: 'Con las propiedades de multipart de tamaño máximo por archivo y por petición. Si se pasan, Spring lanza una excepción que puedes traducir a un 413.',
      en: 'With the multipart properties for maximum size per file and per request. If they are exceeded, Spring throws an exception you can translate to a 413.',
    },
    distractors: [
      {
        es: 'El único límite es el del conector de Tomcat. MultipartFile ignora las propiedades de Boot.',
        en: 'The only limit is the Tomcat connector. MultipartFile ignores the Boot properties.',
      },
      {
        es: 'Spring manda a almacenamiento externo cualquier archivo grande, así que no hace falta un tope.',
        en: 'Spring sends any large file to external storage, so a cap is not needed.',
      },
    ],
    explanation: {
      es: 'Sin un manejador, el contenedor puede responder 500. El umbral de tamaño decide cuándo volcar a disco en lugar de memoria.',
      en: 'Without a handler, the container may respond 500. The size threshold decides when to spill to disk instead of memory.',
    },
  },
  {
    id: 'be-mvc-16',
    topic: 'Paginación',
    prompt: {
      es: '¿Cómo recibe un controlador la paginación?',
      en: 'How does a controller receive pagination?',
    },
    answer: {
      es: 'Spring lee page, size y sort de la query y te pasa un Pageable. Si devuelves una Page, el JSON trae el contenido y el total.',
      en: 'Spring reads page, size and sort from the query and passes you a Pageable. If you return a Page, the JSON includes the content and the total.',
    },
    distractors: [
      {
        es: 'Pageable viaja en el cuerpo y la petición usa una cabecera obligatoria.',
        en: 'Pageable travels in the body and the request uses a mandatory header.',
      },
      {
        es: 'Hay que devolver una lista y calcular las páginas a mano, porque Page no se serializa.',
        en: 'You must return a list and compute the pages by hand, because Page does not serialise.',
      },
    ],
    explanation: {
      es: 'Una página vacía sigue siendo 200, no 404. Limita el size máximo para que nadie pida un millón de filas.',
      en: 'An empty page is still 200, not 404. Cap the maximum size so nobody asks for a million rows.',
    },
  },
  {
    id: 'be-mvc-17',
    topic: 'Validación',
    prompt: {
      es: '¿Por qué @Valid en un query param no basta y qué papel tiene @Validated?',
      en: 'Why is @Valid on a query param not enough and what role does @Validated play?',
    },
    answer: {
      es: 'En el cuerpo, @Valid valida el objeto. En un parámetro suelto, la clase del controlador necesita @Validated para que se apliquen las restricciones.',
      en: 'On the body, @Valid validates the object. On a single parameter, the controller class needs @Validated so the constraints are applied.',
    },
    distractors: [
      {
        es: '@Valid en cada RequestParam ya dispara la validación y el grupo se deduce del verbo HTTP.',
        en: '@Valid on each RequestParam already triggers validation and the group is inferred from the HTTP verb.',
      },
      {
        es: '@Validated solo sirve para el cuerpo. La query se valida en un filtro.',
        en: '@Validated only works for the body. The query is validated in a filter.',
      },
    ],
    explanation: {
      es: 'Un cuerpo inválido acaba en 400 con facilidad. Una restricción de un parámetro suelto puede acabar en 500 si nadie traduce la excepción.',
      en: 'An invalid body ends as 400 easily. A constraint on a single parameter can end as 500 if nobody translates the exception.',
    },
  },
  {
    id: 'be-mvc-18',
    topic: 'MVC',
    prompt: {
      es: '¿Para qué escribes un resolvedor de argumentos propio?',
      en: 'What do you write a custom argument resolver for?',
    },
    answer: {
      es: 'Para convertir algo que se repite, como el usuario logueado o una cabecera, en un argumento del método, cuando no encaja en param, path o body.',
      en: 'To turn something you repeat, such as the logged-in user or a header, into a method argument, when it does not fit param, path or body.',
    },
    distractors: [
      {
        es: 'Para cambiar el ObjectMapper de un solo endpoint.',
        en: 'To change the ObjectMapper of a single endpoint.',
      },
      {
        es: 'Para traducir excepciones al cuerpo de error, que es su contrato.',
        en: 'To translate exceptions into the error body, which is its contract.',
      },
    ],
    explanation: {
      es: 'Se registra en la configuración MVC. No sustituye al conversor de JSON ni al manejador de excepciones.',
      en: 'It is registered in the MVC configuration. It does not replace the JSON converter or the exception handler.',
    },
  },
  {
    id: 'be-mvc-19',
    topic: 'Errores',
    prompt: {
      es: '¿Qué aporta un cuerpo de error tipo problem detail?',
      en: 'What does a problem-detail error body give you?',
    },
    answer: {
      es: 'Una forma estable de error, con status, título y detalle, en lugar de un JSON distinto por endpoint. El código HTTP sigue siendo el de verdad, por ejemplo 404.',
      en: 'A stable error shape, with status, title and detail, instead of a different JSON per endpoint. The HTTP status is still the real one, for example 404.',
    },
    distractors: [
      {
        es: 'Sustituye al código HTTP. El cliente solo lee el título y el status de la respuesta es siempre 200.',
        en: 'It replaces the HTTP status. The client only reads the title and the response status is always 200.',
      },
      {
        es: 'Solo existe en el health de Actuator y no se puede devolver desde un controlador.',
        en: 'It exists only on the Actuator health endpoint and cannot be returned from a controller.',
      },
    ],
    explanation: {
      es: 'Un ExceptionHandler puede devolver ese objeto. No quites el 400 o el 404: el cuerpo los explica, no los reemplaza.',
      en: 'An ExceptionHandler can return that object. Do not drop the 400 or the 404: the body explains them, it does not replace them.',
    },
  },
  {
    id: 'be-mvc-20',
    topic: 'Sesión',
    prompt: {
      es: '¿Cuándo es aceptable la sesión de servidor en una API y cuándo no?',
      en: 'When is a server session acceptable on an API and when is it not?',
    },
    answer: {
      es: 'En una aplicación de navegador con cookies, formulario y protección CSRF. Una API con token debe ser sin estado, para que cualquier instancia atienda la petición.',
      en: 'On a browser application with cookies, a form and CSRF protection. A token API should be stateless, so any instance can serve the request.',
    },
    distractors: [
      {
        es: 'Nunca. Cualquier cookie invalida el contrato, también en una página de servidor.',
        en: 'Never. Any cookie invalidates the contract, including on a server-rendered page.',
      },
      {
        es: 'Siempre, si la sesión está en Redis, porque eso vuelve la API sin estado.',
        en: 'Always, if the session is in Redis, because that makes the API stateless.',
      },
    ],
    explanation: {
      es: 'Redis solo mueve el mapa de sesión. Sin estado significa que el servidor no guarda la conversación de esa petición.',
      en: 'Redis only moves the session map. Stateless means the server does not keep the conversation for that request.',
    },
  },
];
