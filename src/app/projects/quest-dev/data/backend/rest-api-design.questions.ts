import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_REST_API_DESIGN_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-api-01',
    topic: 'Diseño',
    prompt: {
      es: '¿Cómo nombras las URLs de una API?',
      en: 'How do you name API URLs?',
    },
    answer: {
      es: 'Con sustantivos del recurso, en plural, como /orders/42. El verbo va en el método HTTP, no en la ruta.',
      en: 'With resource nouns, in the plural, such as /orders/42. The verb goes in the HTTP method, not in the path.',
    },
    distractors: [
      {
        es: 'Con verbos, como /getOrder y /createOrder, porque el cliente entiende la acción.',
        en: 'With verbs, such as /getOrder and /createOrder, because the client understands the action.',
      },
      {
        es: 'Con el nombre de la tabla y el método Java, para que coincida con el código.',
        en: 'With the table name and the Java method, so it matches the code.',
      },
    ],
    explanation: {
      es: 'Una acción que no encaja en un CRUD puede ser un subrecurso, como /orders/42/cancel. La ruta no debería decir get o create.',
      en: 'An action that does not fit CRUD can be a sub-resource, such as /orders/42/cancel. The path should not say get or create.',
    },
  },
  {
    id: 'be-api-02',
    topic: 'Versiones',
    prompt: {
      es: '¿Cómo versiones una API?',
      en: 'How do you version an API?',
    },
    answer: {
      es: 'Lo habitual es un segmento en la ruta, como /v1, fácil de ver y de enrutar. También se puede pedir en una cabecera, más limpia y más fácil de olvidar.',
      en: 'The usual way is a path segment, such as /v1, easy to see and to route. You can also ask for it in a header, cleaner and easier to forget.',
    },
    distractors: [
      {
        es: 'No se versiona. El cliente siempre usa la última y el servidor no rompe nada.',
        en: 'You do not version. The client always uses the latest and the server never breaks anything.',
      },
      {
        es: 'Solo con query, ?v=1, porque la ruta debe quedarse fija para siempre.',
        en: 'Only with a query, ?v=1, because the path must stay fixed forever.',
      },
    ],
    explanation: {
      es: 'Versiona cuando un cambio rompe a quien ya integra. Añadir un campo opcional no obliga a subir de versión.',
      en: 'Version when a change breaks someone who already integrates. Adding an optional field does not force a version bump.',
    },
  },
  {
    id: 'be-api-03',
    topic: 'HTTP',
    prompt: {
      es: '¿Qué es PATCH y tiene que ser idempotente?',
      en: 'What is PATCH and does it have to be idempotent?',
    },
    answer: {
      es: 'PATCH envía un cambio parcial, no el recurso entero. No tiene que ser idempotente: un parche que suma uno cambia el resultado si lo repites.',
      en: 'PATCH sends a partial change, not the whole resource. It does not have to be idempotent: a patch that adds one changes the result if you repeat it.',
    },
    distractors: [
      {
        es: 'PATCH sustituye el recurso igual que PUT y por eso es idempotente.',
        en: 'PATCH replaces the resource the same way as PUT and that is why it is idempotent.',
      },
      {
        es: 'PATCH solo vale para JSON Patch y la especificación exige que repetirlo no cambie nada.',
        en: 'PATCH is only valid for JSON Patch and the specification requires that repeating it changes nothing.',
      },
    ],
    explanation: {
      es: 'PUT es el documento completo. Un merge de campos es cómodo y ambiguo si omites null. Documenta qué significa un campo ausente.',
      en: 'PUT is the full document. A field merge is convenient and ambiguous if you omit null. Document what a missing field means.',
    },
  },
  {
    id: 'be-api-04',
    topic: 'HTTP',
    prompt: {
      es: '¿Qué respondes al borrar y qué pasa si repites el DELETE?',
      en: 'What do you respond on delete and what happens if you repeat the DELETE?',
    },
    answer: {
      es: 'La primera vez, 204 sin cuerpo o 200 si devuelves algo. Repetirlo puede ser otro 204, porque el recurso ya no está, o un 404 si quieres decir que no existe.',
      en: 'The first time, 204 with no body or 200 if you return something. Repeating it can be another 204, because the resource is already gone, or a 404 if you want to say it does not exist.',
    },
    distractors: [
      {
        es: 'Siempre 200 con la entidad borrada. Un segundo DELETE debe ser 409.',
        en: 'Always 200 with the deleted entity. A second DELETE must be 409.',
      },
      {
        es: 'DELETE no es idempotente. Cada repetición tiene que borrar otra fila.',
        en: 'DELETE is not idempotent. Each repeat must delete another row.',
      },
    ],
    explanation: {
      es: 'Idempotente aquí significa que el recurso sigue sin existir. Elige 204 o 404 en el segundo intento y no lo cambies entre versiones.',
      en: 'Idempotent here means the resource is still gone. Pick 204 or 404 on the second try and do not change it between versions.',
    },
  },
  {
    id: 'be-api-05',
    topic: 'HTTP',
    prompt: {
      es: '¿Cuándo usas 201 y 202?',
      en: 'When do you use 201 and 202?',
    },
    answer: {
      es: '201 cuando creaste el recurso, con la cabecera Location apuntando a él. 202 cuando aceptaste el trabajo y todavía no terminó: el cliente consulta el estado o espera un aviso.',
      en: '201 when you created the resource, with the Location header pointing at it. 202 when you accepted the work and it is not finished yet: the client polls the status or waits for a notice.',
    },
    distractors: [
      {
        es: '201 es cualquier POST correcto. 202 es un error que el cliente debe reintentar ya.',
        en: '201 is any successful POST. 202 is an error the client must retry at once.',
      },
      {
        es: '202 significa creado y 201 significa aceptado para más tarde.',
        en: '202 means created and 201 means accepted for later.',
      },
    ],
    explanation: {
      es: 'No uses 200 para un alta si puedes decir dónde quedó el recurso. 202 no es un éxito final.',
      en: 'Do not use 200 for a create if you can say where the resource ended up. 202 is not a final success.',
    },
  },
  {
    id: 'be-api-06',
    topic: 'HTTP',
    prompt: {
      es: '¿Cuándo usas 400, 409, 422 y 412?',
      en: 'When do you use 400, 409, 422 and 412?',
    },
    answer: {
      es: '400 si el JSON o la petición están rotos. 409 si choca con el estado actual, como un email duplicado. 422 si el formato es válido y la regla de negocio no. 412 si falló una condición, como un If-Match.',
      en: '400 if the JSON or the request is broken. 409 if it clashes with the current state, such as a duplicate email. 422 if the format is valid and the business rule is not. 412 if a condition failed, such as an If-Match.',
    },
    distractors: [
      {
        es: '409 es validación de campos y 422 es conflicto de versión. 412 no se usa en APIs.',
        en: '409 is field validation and 422 is a version conflict. 412 is not used in APIs.',
      },
      {
        es: 'Todo error del cliente es 400. Los otros códigos confunden a quien integra.',
        en: 'Every client error is 400. The other codes confuse integrators.',
      },
    ],
    explanation: {
      es: '400 es sintaxis. Un email ya registrado es conflicto, no un JSON mal formado. El 412 protege la edición concurrente.',
      en: '400 is syntax. An email already registered is a conflict, not malformed JSON. 412 protects concurrent edits.',
    },
  },
  {
    id: 'be-api-07',
    topic: 'HTTP',
    prompt: {
      es: '¿Qué diferencia hay entre 429 y 503?',
      en: 'What is the difference between 429 and 503?',
    },
    answer: {
      es: '429 es que este cliente se pasó del cupo y debe esperar. 503 es que el servicio no puede atender ahora. En los dos, Retry-After dice cuándo volver a intentar.',
      en: '429 means this client went over the quota and must wait. 503 means the service cannot serve right now. In both, Retry-After says when to try again.',
    },
    distractors: [
      {
        es: '429 es un fallo del servidor y 503 es el límite del cliente. Se intercambian.',
        en: '429 is a server failure and 503 is the client limit. They are interchangeable.',
      },
      {
        es: '429 no lleva cabecera de reintento. El cliente debe insistir enseguida.',
        en: '429 has no retry header. The client must insist at once.',
      },
    ],
    explanation: {
      es: 'No reintentes un 429 en bucle. Un 503 puede ser despliegue o saturación, y el cliente debería esperar el tiempo indicado.',
      en: 'Do not retry a 429 in a loop. A 503 can be a deploy or saturation, and the client should wait the indicated time.',
    },
  },
  {
    id: 'be-api-08',
    topic: 'Paginación',
    prompt: {
      es: '¿Cuándo paginas con offset y cuándo con cursor?',
      en: 'When do you page with offset and when with a cursor?',
    },
    answer: {
      es: 'Offset, page y size, es simple y permite saltar de página, pero se desalinea si insertan en medio y se vuelve caro en páginas altas. El cursor es estable para un feed que solo avanza.',
      en: 'Offset, page and size, is simple and lets you jump pages, but it drifts if rows are inserted in the middle and it gets expensive on high pages. A cursor is stable for a feed that only moves forward.',
    },
    distractors: [
      {
        es: 'El cursor permite ir a la página 50 directo. El offset no puede usar índice.',
        en: 'A cursor lets you jump straight to page 50. Offset cannot use an index.',
      },
      {
        es: 'Son iguales. El cursor es el número de página con otro nombre.',
        en: 'They are the same. The cursor is the page number under another name.',
      },
    ],
    explanation: {
      es: 'OFFSET grande recorre y tira filas. Un cursor del estilo id mayor que el último leído sigue el índice.',
      en: 'A large OFFSET walks and drops rows. A cursor like id greater than the last one read follows the index.',
    },
  },
  {
    id: 'be-api-09',
    topic: 'Diseño',
    prompt: {
      es: '¿Dónde pones filtros y orden en un listado?',
      en: 'Where do you put filters and sort on a list?',
    },
    answer: {
      es: 'En la query, por ejemplo status=OPEN y sort=createdAt,desc. La ruta identifica la colección, no cada filtro.',
      en: 'In the query, for example status=OPEN and sort=createdAt,desc. The path identifies the collection, not each filter.',
    },
    distractors: [
      {
        es: 'En la ruta, /orders/status/OPEN/sort/date, para que se pueda cachear mejor.',
        en: 'In the path, /orders/status/OPEN/sort/date, so it can be cached better.',
      },
      {
        es: 'Siempre en el cuerpo, también en GET, porque la query tiene un límite corto.',
        en: 'Always in the body, including GET, because the query has a short limit.',
      },
    ],
    explanation: {
      es: 'Un GET con cuerpo lo ignoran muchos clientes. Documenta qué campos se pueden filtrar para no abrir un where libre.',
      en: 'A GET with a body is ignored by many clients. Document which fields can be filtered so you do not open a free where.',
    },
  },
  {
    id: 'be-api-10',
    topic: 'Diseño',
    prompt: {
      es: '¿Qué son los campos dispersos?',
      en: 'What are sparse fields?',
    },
    answer: {
      es: 'Pedir solo algunos campos, como fields=id,total, para no arrastrar el recurso entero en un listado.',
      en: 'Asking for only some fields, such as fields=id,total, so a list does not drag the whole resource.',
    },
    distractors: [
      {
        es: 'Es otra forma de decir paginación. fields es el tamaño de página.',
        en: 'It is another way to say pagination. fields is the page size.',
      },
      {
        es: 'Obliga a una ruta por cada combinación de columnas.',
        en: 'It forces one path per column combination.',
      },
    ],
    explanation: {
      es: 'No dejes que el cliente pida cualquier propiedad interna. Una lista blanca de campos evita filtrar datos que no son de la API.',
      en: 'Do not let the client ask for any internal property. A field allow list avoids leaking data that is not part of the API.',
    },
  },
  {
    id: 'be-api-11',
    topic: 'Diseño',
    prompt: {
      es: '¿Qué aporta HATEOAS?',
      en: 'What does HATEOAS add?',
    },
    answer: {
      es: 'Links en la respuesta que dicen qué puede hacer el cliente ahora, como pagar o cancelar. El cliente sigue esos links en lugar de construir URLs.',
      en: 'Links in the response that say what the client can do now, such as pay or cancel. The client follows those links instead of building URLs.',
    },
    distractors: [
      {
        es: 'Es obligatorio para que una API sea REST. Sin links el servidor rechaza la petición.',
        en: 'It is mandatory for an API to be REST. Without links the server rejects the request.',
      },
      {
        es: 'Sustituye a los códigos HTTP. El link dice el estado y el código da igual.',
        en: 'It replaces HTTP codes. The link says the status and the code does not matter.',
      },
    ],
    explanation: {
      es: 'Es útil cuando las acciones dependen del estado. Muchas APIs de negocio no lo usan y siguen siendo claras con rutas documentadas.',
      en: 'It helps when actions depend on state. Many business APIs do not use it and stay clear with documented paths.',
    },
  },
  {
    id: 'be-api-12',
    topic: 'Concurrencia',
    prompt: {
      es: '¿Cómo evitas pisar un cambio con ETag?',
      en: 'How do you avoid overwriting a change with ETag?',
    },
    answer: {
      es: 'El GET devuelve un ETag. El PUT lo manda en If-Match. Si alguien cambió el recurso, el ETag no coincide y respondes 412.',
      en: 'The GET returns an ETag. The PUT sends it in If-Match. If someone else changed the resource, the ETag does not match and you respond 412.',
    },
    distractors: [
      {
        es: 'ETag solo cachea. If-Match no existe y el conflicto se responde 200 igual.',
        en: 'ETag only caches. If-Match does not exist and the conflict is still answered 200.',
      },
      {
        es: 'El cliente envía el ETag en el cuerpo y un fallo es 409 siempre, nunca 412.',
        en: 'The client sends the ETag in the body and a failure is always 409, never 412.',
      },
    ],
    explanation: {
      es: 'Es la misma idea que @Version en JPA, vista desde HTTP. Sin la condición, el último escritor gana en silencio.',
      en: 'It is the same idea as @Version in JPA, seen from HTTP. Without the condition, the last writer wins in silence.',
    },
  },
  {
    id: 'be-api-13',
    topic: 'Caché',
    prompt: {
      es: '¿Qué dicen Cache-Control private y no-store?',
      en: 'What do Cache-Control private and no-store say?',
    },
    answer: {
      es: 'private permite caché en el navegador del usuario y no en un proxy compartido. no-store pide que no se guarde la respuesta en ningún sitio.',
      en: 'private allows a cache in the user browser and not in a shared proxy. no-store asks that the response is not stored anywhere.',
    },
    distractors: [
      {
        es: 'private significa que la ruta exige login. no-store es lo mismo que max-age cero.',
        en: 'private means the path requires login. no-store is the same as max-age zero.',
      },
      {
        es: 'no-store solo afecta al navegador. Un CDN puede guardarla igual.',
        en: 'no-store only affects the browser. A CDN can store it anyway.',
      },
    ],
    explanation: {
      es: 'Un perfil o un token no deberían cachearse en un proxy. max-age cero obliga a revalidar, y aun así puede quedar una copia.',
      en: 'A profile or a token should not be cached in a proxy. max-age zero forces revalidation, and a copy can still remain.',
    },
  },
  {
    id: 'be-api-14',
    topic: 'HTTP',
    prompt: {
      es: '¿Para qué sirve la cabecera Idempotency-Key?',
      en: 'What is the Idempotency-Key header for?',
    },
    answer: {
      es: 'El cliente manda una clave al crear un pago o un pedido. Si la red repite el POST, el servidor reconoce la clave y devuelve el mismo resultado, sin cobrar dos veces.',
      en: 'The client sends a key when creating a payment or an order. If the network repeats the POST, the server recognises the key and returns the same result, without charging twice.',
    },
    distractors: [
      {
        es: 'La genera el servidor en el 201. El cliente no la envía.',
        en: 'The server generates it on the 201. The client does not send it.',
      },
      {
        es: 'Sustituye a PUT. Con esa cabecera todo POST pasa a ser un reemplazo.',
        en: 'It replaces PUT. With that header every POST becomes a replacement.',
      },
    ],
    explanation: {
      es: 'Guarda la clave y la respuesta el tiempo suficiente para cubrir el reintento. No es lo mismo que un ETag de lectura.',
      en: 'Store the key and the response long enough to cover the retry. It is not the same as a read ETag.',
    },
  },
  {
    id: 'be-api-15',
    topic: 'Errores',
    prompt: {
      es: '¿Qué lleva un error de API y qué no?',
      en: 'What does an API error carry and what does it leave out?',
    },
    answer: {
      es: 'Un código estable, un mensaje para la persona y, si aplica, qué campo falló. No lleva stack trace, SQL ni nombres de clases internas.',
      en: 'A stable code, a message for the person and, if it applies, which field failed. It does not carry a stack trace, SQL or internal class names.',
    },
    distractors: [
      {
        es: 'El stack completo, para que el cliente depure tu servidor.',
        en: 'The full stack, so the client can debug your server.',
      },
      {
        es: 'Solo el texto de la excepción Java. El código HTTP basta y el cuerpo puede ir vacío.',
        en: 'Only the Java exception text. The HTTP code is enough and the body can be empty.',
      },
    ],
    explanation: {
      es: 'El mismo formato en todos los errores ahorra trabajo a quien integra. El detalle interno va al log, no a la respuesta.',
      en: 'The same shape on every error saves work for integrators. The internal detail goes to the log, not to the response.',
    },
  },
  {
    id: 'be-api-16',
    topic: 'Contrato',
    prompt: {
      es: '¿Qué es diseñar la API primero con OpenAPI?',
      en: 'What is designing the API first with OpenAPI?',
    },
    answer: {
      es: 'Escribir el contrato antes del código, para que frontend y backend acuerden rutas, cuerpos y errores. Luego se genera cliente o se valida que el código cumple el documento.',
      en: 'Writing the contract before the code, so frontend and backend agree on paths, bodies and errors. Then you generate a client or check that the code matches the document.',
    },
    distractors: [
      {
        es: 'Generar el YAML al final, desde las anotaciones, y tratarlo como documentación que nadie lee.',
        en: 'Generating the YAML at the end, from the annotations, and treating it as documentation nobody reads.',
      },
      {
        es: 'Sustituir las pruebas. Si el YAML compila, la API está bien.',
        en: 'Replacing tests. If the YAML compiles, the API is fine.',
      },
    ],
    explanation: {
      es: 'El documento generado al final también ayuda, pero el acuerdo llega tarde. El contrato no prueba la lógica de negocio.',
      en: 'A document generated at the end still helps, but the agreement arrives late. The contract does not test business logic.',
    },
  },
  {
    id: 'be-api-17',
    topic: 'Diseño',
    prompt: {
      es: '¿Por qué la API devuelve un DTO y no la entidad JPA?',
      en: 'Why does the API return a DTO and not the JPA entity?',
    },
    answer: {
      es: 'Porque la entidad arrastra relaciones, el id interno y campos que no quieres publicar. Un cambio de tabla no debería romper a los clientes.',
      en: 'Because the entity drags relations, the internal id and fields you do not want to publish. A table change should not break clients.',
    },
    distractors: [
      {
        es: 'El DTO es más lento y solo se usa si hay más de diez campos. La entidad es el contrato.',
        en: 'The DTO is slower and is only used when there are more than ten fields. The entity is the contract.',
      },
      {
        es: 'Jackson ignora las relaciones, así que devolver la entidad es seguro.',
        en: 'Jackson ignores relations, so returning the entity is safe.',
      },
    ],
    explanation: {
      es: 'Serializar una entidad perezosa fuera de la transacción falla o dispara consultas. El DTO se arma dentro, con lo que la API promete.',
      en: 'Serialising a lazy entity outside the transaction fails or fires queries. The DTO is built inside, with what the API promises.',
    },
  },
  {
    id: 'be-api-18',
    topic: 'HTTP',
    prompt: {
      es: '¿Cómo respondes un alta de muchos elementos si algunos fallan?',
      en: 'How do you respond to a bulk create when some items fail?',
    },
    answer: {
      es: 'Con 207 o con 200 y un resultado por elemento, diciendo cuáles se crearon y cuáles no. 206 no sirve: ese código es un trozo de un recurso, no un lote mixto.',
      en: 'With 207 or with 200 and a result per item, saying which ones were created and which were not. 206 does not fit: that code is a slice of one resource, not a mixed batch.',
    },
    distractors: [
      {
        es: 'Siempre 201 si al menos uno entró. Los fallos van solo al log.',
        en: 'Always 201 if at least one got in. Failures go only to the log.',
      },
      {
        es: '206, porque es una respuesta parcial. 207 no existe.',
        en: '206, because it is a partial response. 207 does not exist.',
      },
    ],
    explanation: {
      es: 'No escondas los rechazados. Quien integra tiene que poder reintentar solo los que fallaron.',
      en: 'Do not hide the rejected ones. Integrators must be able to retry only the ones that failed.',
    },
  },
  {
    id: 'be-api-19',
    topic: 'HTTP',
    prompt: {
      es: '¿Qué diferencia hay entre 401 y 404 cuando el recurso es de otro usuario?',
      en: 'What is the difference between 401 and 404 when the resource belongs to someone else?',
    },
    answer: {
      es: '401 si no hay identidad. Si hay identidad y no quieres revelar que el recurso existe, responde 404. 403 admite que existe y niega el acceso.',
      en: '401 if there is no identity. If there is an identity and you do not want to reveal that the resource exists, respond 404. 403 admits it exists and denies access.',
    },
    distractors: [
      {
        es: 'Siempre 403, para que el cliente sepa que el id es válido y pida permiso.',
        en: 'Always 403, so the client knows the id is valid and asks for permission.',
      },
      {
        es: '401 también cuando el dueño no coincide, porque el token no autoriza ese id.',
        en: '401 also when the owner does not match, because the token does not authorize that id.',
      },
    ],
    explanation: {
      es: 'En datos privados, 404 evita enumerar ids. En un recurso que todo el mundo sabe que existe, 403 es más claro.',
      en: 'On private data, 404 avoids enumerating ids. On a resource everyone knows exists, 403 is clearer.',
    },
  },
  {
    id: 'be-api-20',
    topic: 'HTTP',
    prompt: {
      es: '¿Cómo entregas una exportación que tarda minutos?',
      en: 'How do you deliver an export that takes minutes?',
    },
    answer: {
      es: 'Aceptas con 202 y devuelves una URL de estado. El cliente consulta, o recibe un aviso, y al terminar descarga el archivo. No dejes el GET abierto hasta que el informe acabe.',
      en: 'You accept with 202 and return a status URL. The client polls, or gets a notice, and downloads the file when it is done. Do not leave the GET open until the report finishes.',
    },
    distractors: [
      {
        es: 'Un GET síncrono con timeout de una hora. El balanceador aguanta.',
        en: 'A synchronous GET with a one hour timeout. The load balancer can take it.',
      },
      {
        es: '201 en cuanto encolas el trabajo, como si el archivo ya existiera.',
        en: '201 as soon as you queue the work, as if the file already existed.',
      },
    ],
    explanation: {
      es: 'El hilo de la petición no debe quedarse bloqueado minutos. El 202 más un recurso de trabajo es el patrón de entrevista.',
      en: 'The request thread must not stay blocked for minutes. 202 plus a job resource is the interview pattern.',
    },
  },
];
