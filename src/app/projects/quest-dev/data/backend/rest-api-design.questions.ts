import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_REST_API_DESIGN_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-api-01',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Por qué las URIs REST se construyen con sustantivos en plural y jerarquía, no con verbos?',
      en: 'Why are REST URIs built with plural nouns and hierarchy, not with verbs?',
    },
    answer: {
      es: 'El path nombra el recurso (por ejemplo /orders/12/items) y el verbo HTTP expresa la acción; el plural denota colección y el anidado se usa solo si el hijo no existe por sí solo.',
      en: 'The path names the resource (for example /orders/12/items) and the HTTP verb expresses the action; the plural denotes a collection and nesting is used only if the child does not exist on its own.',
    },
    distractors: [
      {
        es: 'Usar verbos en el path (/createOrder) hace la API autodocumentada porque cada URI declara la operación sin depender del método HTTP.',
        en: 'Using verbs in the path (/createOrder) makes the API self-documenting because each URI declares the operation without depending on the HTTP method.',
      },
      {
        es: 'Anidar toda relación de clave ajena (/users/1/orders/9/items/3/taxes) es obligatorio para que la jerarquía refleje el modelo relacional.',
        en: 'Nesting every foreign-key relationship (/users/1/orders/9/items/3/taxes) is mandatory so the hierarchy mirrors the relational model.',
      },
    ],
    explanation: {
      es: 'Una URI identifica un recurso, no una operación: GET /users lista y POST /users crea. El anidado tiene sentido cuando el ciclo de vida del hijo depende del padre. Si el recurso se busca solo, se publica plano (/items/55). Un verbo en el path choca con GET, PUT o DELETE.',
      en: 'A URI identifies a resource, not an operation: GET /users lists and POST /users creates. Nesting makes sense when the child lifecycle depends on the parent. If the resource is looked up on its own, it is published flat (/items/55). A verb in the path clashes with GET, PUT or DELETE.',
    },
  },
  {
    id: 'be-api-02',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Qué implica versionar en la URI, en cabecera o por tipo de medio?',
      en: 'What does versioning in the URI, in a header or by media type imply?',
    },
    answer: {
      es: '/v1/orders es visible y fácil de enrutar; una cabecera API-Version o Accept con un vendor type mantiene estable la URI pero complica caches, proxies y pruebas manuales.',
      en: '/v1/orders is visible and easy to route; an API-Version header or Accept with a vendor type keeps the URI stable but complicates caches, proxies and manual tests.',
    },
    distractors: [
      {
        es: 'El versionado en query (?version=2) es el único compatible con REST porque el identificador del recurso nunca cambia.',
        en: 'Query versioning (?version=2) is the only REST-compatible option because the resource identifier never changes.',
      },
      {
        es: 'Versionar por cabecera y por tipo de medio es equivalente, porque ambos viajan fuera del path y los caches HTTP los tratan igual.',
        en: 'Header versioning and media type versioning are equivalent, because both travel outside the path and HTTP caches treat them the same.',
      },
    ],
    explanation: {
      es: 'La URI versionada cambia la identidad aparente del recurso y se prueba en un navegador, a costa de duplicar rutas. Accept: application/vnd.shop.order-v2+json negocia la representación, no la identidad. Una cabecera API-Version no es estándar: sin Vary los CDN pueden servir v1 y v2 como la misma clave.',
      en: 'A versioned URI changes the apparent identity of the resource and can be tried in a browser, at the cost of duplicating routes. Accept: application/vnd.shop.order-v2+json negotiates the representation, not identity. An API-Version header is not standard: without Vary, CDNs may serve v1 and v2 as the same cache key.',
    },
  },
  {
    id: 'be-api-03',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿En qué se diferencian JSON Merge Patch y JSON Patch, y qué implica eso para la idempotencia de PATCH?',
      en: 'How do JSON Merge Patch and JSON Patch differ, and what does that imply for PATCH idempotency?',
    },
    answer: {
      es: 'Merge Patch (application/merge-patch+json) envía un objeto parcial y trata null como borrado; JSON Patch (application/json-patch+json) es una lista de operaciones. HTTP no exige que PATCH sea idempotente.',
      en: 'Merge Patch (application/merge-patch+json) sends a partial object and treats null as deletion; JSON Patch (application/json-patch+json) is a list of operations. HTTP does not require PATCH to be idempotent.',
    },
    distractors: [
      {
        es: 'PATCH es idempotente por definición, igual que PUT, porque solo modifica campos ya existentes y repetirlo deja el mismo documento.',
        en: 'PATCH is idempotent by definition, just like PUT, because it only changes fields that already exist and repeating it leaves the same document.',
      },
      {
        es: 'Merge Patch es una secuencia de operaciones y JSON Patch es un documento parcial, de modo que solo Merge Patch puede fallar al reintentarse.',
        en: 'Merge Patch is a sequence of operations and JSON Patch is a partial document, so only Merge Patch can fail when retried.',
      },
    ],
    explanation: {
      es: 'RFC 5789 no exige idempotencia en PATCH, a diferencia de PUT. RFC 7396 sustituye objetos anidados enteros y usa null para quitar un campo; repetir el mismo merge suele dejar el mismo estado. RFC 6902 aplica add, remove o replace: un add al final de un array no es idempotente. El Content-Type decide el dialecto.',
      en: 'RFC 5789 does not require PATCH to be idempotent, unlike PUT. RFC 7396 replaces nested objects as a whole and uses null to remove a field; repeating the same merge usually leaves the same state. RFC 6902 applies add, remove or replace: an add at the end of an array is not idempotent. Content-Type selects the dialect.',
    },
  },
  {
    id: 'be-api-04',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Por qué DELETE es idempotente y qué cambia elegir 404 o 204 en un segundo borrado?',
      en: 'Why is DELETE idempotent and what changes when choosing 404 or 204 on a second delete?',
    },
    answer: {
      es: 'Idempotencia significa que el recurso queda ausente tras una o muchas llamadas. 204 No Content en el reintento comunica que el estado deseado ya se cumplió; 404 Not Found también es coherente, pero el cliente puede tratarlo como error.',
      en: 'Idempotency means the resource is gone after one or many calls. 204 No Content on retry signals that the desired state already holds; 404 Not Found is also coherent, but the client may treat it as an error.',
    },
    distractors: [
      {
        es: 'El segundo DELETE debe devolver 404 para ser idempotente, porque si devolviera 204 estaría fingiendo que acaba de borrar el recurso.',
        en: 'The second DELETE must return 404 to be idempotent, because a 204 would pretend the resource was just deleted.',
      },
      {
        es: 'DELETE deja de ser idempotente cuando responde 204, porque un cuerpo vacío oculta si el borrado ocurrió ahora o antes.',
        en: 'DELETE stops being idempotent when it returns 204, because an empty body hides whether the deletion happened now or earlier.',
      },
    ],
    explanation: {
      es: 'RFC 9110 define DELETE como idempotente respecto al estado del servidor, no respecto al código. Tras el primer 200 o 204 el recurso no está y el segundo DELETE no lo recrea. Devolver 204 en el reintento simplifica clientes que reintentan ante timeouts. 404 es válido, pero muchos SDKs lo mapean a excepción.',
      en: 'RFC 9110 defines DELETE as idempotent with respect to server state, not with respect to the status code. After the first 200 or 204 the resource is gone and the second DELETE does not recreate it. Returning 204 on retry simplifies clients that retry after timeouts. 404 is valid, but many SDKs map it to an exception.',
    },
  },
  {
    id: 'be-api-05',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Qué debe acompañar a una respuesta 201 Created tras un POST que crea un recurso?',
      en: 'What should accompany a 201 Created response after a POST that creates a resource?',
    },
    answer: {
      es: 'El código 201 y la cabecera Location con la URI del recurso nuevo (Location: /orders/55), a menudo junto al cuerpo de la representación.',
      en: 'The 201 status and the Location header with the URI of the new resource (Location: /orders/55), often together with the representation body.',
    },
    distractors: [
      {
        es: '201 lleva el cuerpo del recurso y Location es opcional porque la URI nueva ya se conoce: es la misma del POST.',
        en: '201 carries the resource body and Location is optional because the new URI is already known: it is the same as the POST path.',
      },
      {
        es: 'La URI nueva viaja en Content-Location y 201 solo aplica cuando se usa PUT sobre un identificador elegido por el cliente.',
        en: 'The new URI travels in Content-Location and 201 only applies when PUT is used on an identifier chosen by the client.',
      },
    ],
    explanation: {
      es: 'RFC 9110 reserva 201 para una creación efectiva. Location apunta al recurso primario creado para que el cliente haga GET sin adivinar el id. Content-Location, si aparece, describe la representación del cuerpo y no sustituye a Location. Un POST a /orders que responde 200 sin Location obliga a parsear el cuerpo para descubrir /orders/55.',
      en: 'RFC 9110 reserves 201 for an actual creation. Location points to the primary created resource so the client can GET without guessing the id. Content-Location, if present, describes the body representation and does not replace Location. A POST to /orders that returns 200 without Location forces parsing the body to discover /orders/55.',
    },
  },
  {
    id: 'be-api-06',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Cuándo se usa 202 Accepted y cómo sigue el cliente el proceso asíncrono?',
      en: 'When is 202 Accepted used and how does the client follow the asynchronous process?',
    },
    answer: {
      es: '202 indica que la petición se aceptó para procesamiento posterior, no que el trabajo terminó. El cuerpo o Location debe ofrecer un endpoint de estado que el cliente consulta hasta un 303 o un 200 con el resultado.',
      en: '202 means the request was accepted for later processing, not that the work finished. The body or Location must offer a status endpoint that the client polls until a 303 or a 200 with the result.',
    },
    distractors: [
      {
        es: '202 significa que el recurso ya se creó en segundo plano, así que Location apunta al recurso final y un GET inmediato debe devolver 200.',
        en: '202 means the resource was already created in the background, so Location points to the final resource and an immediate GET must return 200.',
      },
      {
        es: 'Los trabajos largos deben responder 200 con un campo pending, porque 202 está reservado a WebDAV y procesadores por lotes.',
        en: 'Long jobs should return 200 with a pending field, because 202 is reserved for WebDAV and batch processors.',
      },
    ],
    explanation: {
      es: '202 Accepted no garantiza el resultado: el trabajo puede fallar después. Lo habitual es Location: /jobs/99, que al principio responde 200 con status=running y luego 303 See Other hacia el recurso final. Un 201 prematuro miente porque el recurso aún no existe. GET sobre el endpoint de estado debe ser seguro.',
      en: '202 Accepted does not guarantee the outcome: the work may fail later. The usual pattern is Location: /jobs/99, which first returns 200 with status=running and later 303 See Other toward the final resource. A premature 201 lies because the resource does not exist yet. GET on the status endpoint must be safe.',
    },
  },
  {
    id: 'be-api-07',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Cuándo corresponde 409 Conflict y cuándo 422 Unprocessable Entity?',
      en: 'When does 409 Conflict apply and when does 422 Unprocessable Entity apply?',
    },
    answer: {
      es: '409 señala choque con el estado actual del recurso (duplicado, versión o regla sobre datos ya persistidos). 422 indica que la sintaxis es válida pero la semántica del cuerpo no se puede procesar.',
      en: '409 signals a clash with the current resource state (duplicate, version or a rule on already persisted data). 422 means the syntax is valid but the body semantics cannot be processed.',
    },
    distractors: [
      {
        es: '409 cubre errores de validación del cuerpo y 422 se reserva al bloqueo optimista cuando el ETag no coincide.',
        en: '409 covers body validation errors and 422 is reserved for optimistic locking when the ETag does not match.',
      },
      {
        es: '422 sustituye a 400 cuando el JSON está mal formado, mientras 409 solo aplica a conflictos de fusión en colecciones.',
        en: '422 replaces 400 when the JSON is malformed, while 409 only applies to merge conflicts on collections.',
      },
    ],
    explanation: {
      es: '409 Conflict (RFC 9110) encaja con este pedido ya existe o no se puede borrar porque tiene líneas. 422 Unprocessable Entity (RFC 4918) asume JSON bien parseado que viola reglas de dominio. Un JSON ilegible es 400 Bad Request. El fallo de If-Match es 412 Precondition Failed, no 422 ni 409.',
      en: '409 Conflict (RFC 9110) fits this order already exists or it cannot be deleted because it has lines. 422 Unprocessable Entity (RFC 4918) assumes well-parsed JSON that violates domain rules. Unreadable JSON is 400 Bad Request. An If-Match failure is 412 Precondition Failed, not 422 or 409.',
    },
  },
  {
    id: 'be-api-08',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Qué comunica 429 Too Many Requests y para qué sirve la cabecera Retry-After?',
      en: 'What does 429 Too Many Requests communicate and what is the Retry-After header for?',
    },
    answer: {
      es: '429 indica que el cliente superó la cuota. Retry-After dice cuántos segundos, o hasta qué fecha HTTP-date, debe esperar antes de repetir.',
      en: '429 means the client exceeded the quota. Retry-After says how many seconds, or until which HTTP-date, the client must wait before repeating.',
    },
    distractors: [
      {
        es: '429 significa saturación global del origen, así que Retry-After equivale al de un 503 y el cliente debe cambiar de endpoint.',
        en: '429 means global origin saturation, so Retry-After is equivalent to that of a 503 and the client must switch endpoint.',
      },
      {
        es: 'El límite de tasa se señala con 503 y Retry-After, porque 429 solo aplica a fuerza bruta de autenticación.',
        en: 'The rate limit is signalled with 503 and Retry-After, because 429 only applies to authentication brute force.',
      },
    ],
    explanation: {
      es: 'RFC 6585 define 429 Too Many Requests para un cliente concreto que excedió el rate limit, distinto de 503 Service Unavailable del origen caído. Retry-After puede ser un entero en segundos o una fecha HTTP-date. Sin ella el cliente solo puede hacer backoff ciego. Reintentar de inmediato empeora el rechazo.',
      en: 'RFC 6585 defines 429 Too Many Requests for a specific client that exceeded the rate limit, unlike 503 Service Unavailable from a down origin. Retry-After may be an integer in seconds or an HTTP-date. Without it the client can only apply blind backoff. Retrying immediately makes the rejection worse.',
    },
  },
  {
    id: 'be-api-09',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Qué diferencia a la paginación por desplazamiento de la paginación por cursor?',
      en: 'What distinguishes offset pagination from cursor pagination?',
    },
    answer: {
      es: 'Offset/limit es simple y permite saltar a una página, pero se desvía con altas y bajas y encarece OFFSET grandes. El cursor (keyset) es estable y barato, a costa de no poder saltar a la página N.',
      en: 'Offset/limit is simple and allows jumping to a page, but it drifts under inserts and deletes and makes large OFFSET costly. A cursor (keyset) is stable and cheap, at the cost of not jumping to page N.',
    },
    distractors: [
      {
        es: 'El cursor es un offset codificado en base64, así que sufre el mismo coste de skip y el mismo desvío ante inserciones.',
        en: 'The cursor is an offset encoded in base64, so it suffers the same skip cost and the same drift under inserts.',
      },
      {
        es: 'La paginación por offset es consistente con altas concurrentes porque la base congela los límites de página en un snapshot.',
        en: 'Offset pagination is consistent under concurrent inserts because the database freezes page boundaries in a snapshot.',
      },
    ],
    explanation: {
      es: 'GET /orders?offset=40&limit=20 obliga a saltar 40 filas; con escrituras concurrentes una fila puede repetirse u omitirse. GET /orders?cursor=abc&limit=20 usa una clave y WHERE id < :cursor, estable e indexable. El cursor opaco no debe ser un offset disfrazado. Un cursor corrupto merece 400; una lista vacía con 200 cierra la última página.',
      en: 'GET /orders?offset=40&limit=20 forces skipping 40 rows; with concurrent writes a row may repeat or vanish. GET /orders?cursor=abc&limit=20 uses a key and WHERE id < :cursor, which is stable and indexable. An opaque cursor must not be a disguised offset. A corrupt cursor deserves 400; an empty list with 200 closes the last page.',
    },
  },
  {
    id: 'be-api-10',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Qué convenciones se usan para filtrar y ordenar en la cadena de consulta?',
      en: 'What conventions are used to filter and sort in the query string?',
    },
    answer: {
      es: 'Filtros como query params del recurso (status=open o filter[status]=open) y orden con sort=-createdAt,name, donde el menos indica descendente. GET permanece seguro y cacheable.',
      en: 'Filters as query params of the resource (status=open or filter[status]=open) and order with sort=-createdAt,name, where the minus means descending. GET stays safe and cacheable.',
    },
    distractors: [
      {
        es: 'Los filtros de lectura van en un POST con cuerpo, porque la query string no puede expresar condiciones OR.',
        en: 'Read filters belong in a POST body, because the query string cannot express OR conditions.',
      },
      {
        es: 'El orden debe ser un segmento de path (/users/sorted/name) para que la cache clasifique solo por la ruta.',
        en: 'Sorting should be a path segment (/users/sorted/name) so the cache keys only on the path.',
      },
    ],
    explanation: {
      es: 'RFC 9110 deja la query como parte del identificador: GET /orders?status=paid&sort=-createdAt es seguro y cacheable. JSON:API usa filter[status] y sort. Un POST /orders/search puede hacer falta si el filtro es enorme, pero entonces se pierde cache HTTP. Path /sorted/name explota el espacio de recursos.',
      en: 'RFC 9110 treats the query as part of the identifier: GET /orders?status=paid&sort=-createdAt is safe and cacheable. JSON:API uses filter[status] and sort. A POST /orders/search may be needed if the filter is huge, but then the HTTP cache is lost. Path /sorted/name pollutes the resource space.',
    },
  },
  {
    id: 'be-api-11',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Para qué sirve la selección de campos o sparse fieldsets en una API?',
      en: 'What is field selection or sparse fieldsets for in an API?',
    },
    answer: {
      es: 'El cliente pide solo los campos que necesita (fields[orders]=id,status o fields=id,status) para reducir payload y acoplamiento. El servidor sigue devolviendo 200 con un objeto más estrecho.',
      en: 'The client asks only for the fields it needs (fields[orders]=id,status or fields=id,status) to reduce payload and coupling. The server still returns 200 with a narrower object.',
    },
    distractors: [
      {
        es: 'Sparse fieldsets sustituyen a la paginación: con pocos campos el servidor puede devolver la colección entera.',
        en: 'Sparse fieldsets replace pagination: with few fields the server can return the whole collection.',
      },
      {
        es: 'Elegir campos es exclusivo de GraphQL; REST debe devolver siempre el recurso completo para que las caches sean uniformes.',
        en: 'Selecting fields is exclusive to GraphQL; REST must always return the full resource so caches stay uniform.',
      },
    ],
    explanation: {
      es: 'JSON:API define fields[type]. GET /orders/5?fields=id,status responde 200 con menos JSON y baja latencia en móviles. No cambia el código HTTP ni sustituye limit o cursor. Vary o una cache key que incluya la query evita servir un documento recortado a quien pidió el recurso entero.',
      en: 'JSON:API defines fields[type]. GET /orders/5?fields=id,status returns 200 with less JSON and lowers latency on mobile. It does not change the HTTP status and it does not replace limit or cursor. Vary or a cache key that includes the query avoids serving a trimmed document to a client that asked for the full resource.',
    },
  },
  {
    id: 'be-api-12',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Qué añade HATEOAS y en qué nivel del modelo de madurez de Richardson aparece?',
      en: 'What does HATEOAS add and at which level of the Richardson maturity model does it appear?',
    },
    answer: {
      es: 'HATEOAS es el nivel 3: la representación incluye enlaces (rel, href) para descubrir la siguiente acción. El nivel 2 ya usa recursos, verbos y códigos HTTP, pero el cliente aún construye las URIs a mano.',
      en: 'HATEOAS is level 3: the representation includes links (rel, href) to discover the next action. Level 2 already uses resources, verbs and HTTP codes, but the client still builds URIs by hand.',
    },
    distractors: [
      {
        es: 'HATEOAS consiste en publicar OpenAPI en /openapi.json, y eso es el nivel 3 del modelo de Richardson.',
        en: 'HATEOAS consists of publishing OpenAPI at /openapi.json, and that is level 3 of the Richardson model.',
      },
      {
        es: 'El nivel 2 ya exige hipermedia porque usar GET y POST sobre sustantivos cuenta como control por hipermedia.',
        en: 'Level 2 already requires hypermedia because using GET and POST on nouns counts as hypermedia control.',
      },
    ],
    explanation: {
      es: 'Richardson: nivel 0 túnel HTTP; 1 recursos; 2 verbos y códigos (GET 200, POST 201, DELETE 204); 3 hipermedia. Un 200 de GET /orders/5 con un enlace pay hacia /orders/5/payment permite seguir relaciones sin construir paths. OpenAPI documenta el contrato, no dirige cada respuesta. Sin enlaces, un cambio de URI rompe clientes aunque los códigos HTTP sean correctos.',
      en: 'Richardson: level 0 HTTP tunnel; 1 resources; 2 verbs and codes (GET 200, POST 201, DELETE 204); 3 hypermedia. A 200 from GET /orders/5 with a pay link to /orders/5/payment lets clients follow relations without building paths. OpenAPI documents the contract; it does not drive each response. Without links, a URI change breaks clients even when HTTP codes are correct.',
    },
  },
  {
    id: 'be-api-13',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Cómo se usa ETag con If-Match para concurrencia optimista sobre HTTP?',
      en: 'How is ETag used with If-Match for optimistic concurrency over HTTP?',
    },
    answer: {
      es: 'El GET envía ETag; el PUT o PATCH posterior manda If-Match con ese valor. Si no coincide, el servidor responde 412 Precondition Failed y no escribe.',
      en: 'The GET sends ETag; the later PUT or PATCH sends If-Match with that value. If it does not match, the server returns 412 Precondition Failed and does not write.',
    },
    distractors: [
      {
        es: 'If-None-Match en un PUT implementa el bloqueo optimista: si el ETag difiere, el servidor devuelve 304 y omite la escritura.',
        en: 'If-None-Match on a PUT implements optimistic locking: if the ETag differs, the server returns 304 and skips the write.',
      },
      {
        es: 'ETag con If-Match devuelve 409 Conflict cuando las versiones divergen, porque 412 solo aplica a bloqueos WebDAV.',
        en: 'ETag with If-Match returns 409 Conflict when versions diverge, because 412 only applies to WebDAV locks.',
      },
    ],
    explanation: {
      es: 'RFC 9110: If-Match exige que el ETag actual coincida; si falla, 412 Precondition Failed. If-None-Match en GET sirve para cache (304 Not Modified), no para proteger escrituras. 409 describe un conflicto de negocio; 412 una precondición HTTP. El cliente relee, fusiona y reintenta con el ETag nuevo.',
      en: 'RFC 9110: If-Match requires the current ETag to match; on failure, 412 Precondition Failed. If-None-Match on GET is for caching (304 Not Modified), not for protecting writes. 409 describes a business conflict; 412 an HTTP precondition. The client reloads, merges and retries with the new ETag.',
    },
  },
  {
    id: 'be-api-14',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Qué implica Cache-Control private frente a no-store en la respuesta de una API?',
      en: 'What does Cache-Control private imply versus no-store on an API response?',
    },
    answer: {
      es: 'private permite que el cache del usuario guarde la respuesta, no los proxies compartidos. no-store prohíbe almacenarla en cualquier cache, incluido el navegador. Los datos autenticados sensibles suelen ir con no-store.',
      en: 'private lets the user cache store the response, not shared proxies. no-store forbids storing it in any cache, including the browser. Sensitive authenticated data usually goes with no-store.',
    },
    distractors: [
      {
        es: 'private prohíbe al navegador cachear; no-store solo prohíbe a los CDN, así que una API con datos personales debe usar private.',
        en: 'private forbids the browser from caching; no-store only forbids CDNs, so an API with personal data must use private.',
      },
      {
        es: 'no-cache significa no almacenar la respuesta, mientras no-store significa revalidar con el origen antes de reutilizarla.',
        en: 'no-cache means do not store the response, while no-store means revalidate with the origin before reuse.',
      },
    ],
    explanation: {
      es: 'Cache-Control: private, max-age=60 deja cache de usuario y bloquea caches compartidos. no-store es la opción para tokens, pagos o PII. no-cache permite guardar pero obliga a revalidar con If-None-Match, nombre engañoso. Un 200 con public sobre un GET autenticado puede filtrar datos entre usuarios.',
      en: 'Cache-Control: private, max-age=60 allows a user cache and blocks shared caches. no-store is the option for tokens, payments or PII. no-cache allows storage but requires revalidation with If-None-Match, a misleading name. A 200 with public on an authenticated GET can leak data between users.',
    },
  },
  {
    id: 'be-api-15',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Para qué se envía la cabecera Idempotency-Key en un POST de pago?',
      en: 'Why is the Idempotency-Key header sent on a payment POST?',
    },
    answer: {
      es: 'El cliente genera una clave única por intento de cobro. El servidor guarda la primera respuesta y, si el POST se reintenta con la misma clave y el mismo cuerpo, devuelve ese resultado en lugar de cobrar otra vez.',
      en: 'The client generates a unique key per charge attempt. The server stores the first response and, if the POST is retried with the same key and the same body, returns that result instead of charging again.',
    },
    distractors: [
      {
        es: 'Idempotency-Key convierte el POST en PUT: el servidor usa la clave como id del recurso en la URI.',
        en: 'Idempotency-Key turns POST into PUT: the server uses the key as the resource id in the URI.',
      },
      {
        es: 'La cabecera solo hace falta si la red falla después de un 201; si el cliente recibió 409, el pago no se creó y la clave puede reutilizarse con otro importe.',
        en: 'The header is only needed if the network fails after a 201; if the client received 409, the payment was not created and the key can be reused with a different amount.',
      },
    ],
    explanation: {
      es: 'POST no es idempotente; un timeout tras cobrar provoca reintentos. Idempotency-Key hace que el segundo POST con la misma clave recupere el 201 original y Location, sin un segundo cargo. Misma clave y cuerpo distinto suele ser 409 o 422. Reutilizar la clave para otro importe es un error de cliente y no convierte el POST en PUT.',
      en: 'POST is not idempotent; a timeout after charging causes retries. Idempotency-Key makes the second POST with the same key replay the original 201 and Location, without a second charge. Same key and a different body is usually 409 or 422. Reusing the key for another amount is a client error and does not turn POST into PUT.',
    },
  },
  {
    id: 'be-api-16',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Qué debe cumplir el contrato de error de una API respecto a códigos y trazas?',
      en: 'What must an API error contract fulfil regarding codes and traces?',
    },
    answer: {
      es: 'Códigos de aplicación estables (por ejemplo order.duplicate) más el status HTTP, sin stack traces, SQL ni rutas internas. El detalle puede seguir RFC 9457 (type, title, status, detail).',
      en: 'Stable application codes (for example order.duplicate) plus the HTTP status, with no stack traces, SQL or internal paths. The detail can follow RFC 9457 (type, title, status, detail).',
    },
    distractors: [
      {
        es: 'Devolver la traza Java en un 500 ayuda al cliente móvil a mostrar un mensaje preciso, si se ocultan las contraseñas.',
        en: 'Returning the Java stack trace in a 500 helps the mobile client show a precise message, as long as passwords are stripped.',
      },
      {
        es: 'El status HTTP basta como contrato; un código de aplicación extra es redundante y rompe la cache de errores.',
        en: 'The HTTP status is enough as the contract; an extra application code is redundant and breaks caching of errors.',
      },
    ],
    explanation: {
      es: 'Un 409 con type, title, status 409 y code order.duplicate permite ramificar sin parsear texto. RFC 9457 recomienda application/problem+json con type e instance estables. Las trazas y el SQL en 500 filtran esquema y librerías. Cache-Control: no-store en errores autenticados evita guardar cuerpos con detalle.',
      en: 'A 409 with type, title, status 409 and code order.duplicate lets clients branch without parsing prose. RFC 9457 recommends application/problem+json with stable type and instance. Traces and SQL in a 500 leak schema and libraries. Cache-Control: no-store on authenticated errors avoids storing bodies with detail.',
    },
  },
  {
    id: 'be-api-17',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Qué cambia diseñar el contrato primero con OpenAPI frente a generarlo desde el código?',
      en: 'What changes when designing the contract first with OpenAPI versus generating it from code?',
    },
    answer: {
      es: 'Contract-first trata OpenAPI como fuente de verdad y genera servidor y clientes; el código no puede divergir en silencio. Code-first por anotaciones es cómodo, pero el spec se desvía de lo que realmente se despliega.',
      en: 'Contract-first treats OpenAPI as the source of truth and generates server and clients; the code cannot drift in silence. Code-first via annotations is convenient, but the spec drifts from what is actually deployed.',
    },
    distractors: [
      {
        es: 'Generar OpenAPI desde los controladores garantiza que los clientes no se rompan, porque el spec siempre coincide con el runtime.',
        en: 'Generating OpenAPI from controllers guarantees that clients do not break, because the spec always matches the runtime.',
      },
      {
        es: 'Contract-first no puede expresar 201 ni Location porque OpenAPI solo modela cuerpos JSON, así que no sirve para REST.',
        en: 'Contract-first cannot express 201 or Location because OpenAPI only models JSON bodies, so it is unsuitable for REST.',
      },
    ],
    explanation: {
      es: 'Con contract-first, un cambio de 200 a 201 Location se revisa en el spec antes del código. Code-first suele olvidar cabeceras Location o Retry-After y códigos 202 o 409 que el runtime sí envía. OpenAPI 3 describe headers, callbacks y webhooks. Generar el spec no evita roturas: si mañana quitas un campo, los clientes viejos fallan igual.',
      en: 'With contract-first, a change from 200 to 201 Location is reviewed in the spec before the code. Code-first often forgets Location or Retry-After headers and 202 or 409 codes that the runtime does send. OpenAPI 3 describes headers, callbacks and webhooks. Generating the spec does not prevent breakage: if you remove a field tomorrow, old clients still fail.',
    },
  },
  {
    id: 'be-api-18',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Por qué exponer un DTO y no la entidad, y cómo se evitan cambios que rompen?',
      en: 'Why expose a DTO instead of the entity, and how do you avoid breaking changes?',
    },
    answer: {
      es: 'El DTO es el contrato público: oculta campos internos, desacopla persistencia y permite añadir propiedades de forma aditiva. Renombrar, quitar o cambiar el tipo de un campo es un cambio que rompe y pide versionado.',
      en: 'The DTO is the public contract: it hides internal fields, decouples persistence and allows additive properties. Renaming, removing or changing the type of a field is a breaking change and needs versioning.',
    },
    distractors: [
      {
        es: 'Exponer la entidad es seguro si se marcan campos con JsonIgnore, porque eso constituye un contrato publicado estable.',
        en: 'Exposing the entity is safe if fields are marked with JsonIgnore, because that constitutes a stable published contract.',
      },
      {
        es: 'Para no romper clientes hay que versionar cada campo en la clave JSON, por ejemplo name_v2 junto a name.',
        en: 'To avoid breaking clients you must version every field in the JSON key, for example name_v2 next to name.',
      },
    ],
    explanation: {
      es: 'Una entidad de persistencia arrastra relaciones internas que cambian con el esquema. Un 200 con OrderResponse { id, status } puede ganar estimatedDelivery sin romper. Quitar status o cambiarle el tipo sí rompe. JsonIgnore no es un contrato: alguien lo quita y el 200 empieza a filtrar passwordHash. Versionar la representación (/v2 o Accept vendor) cubre cambios incompatibles.',
      en: 'A persistence entity drags internal relations that change with the schema. A 200 with OrderResponse { id, status } can gain estimatedDelivery without breaking. Removing status or changing its type does break. JsonIgnore is not a contract: someone removes it and the 200 starts leaking passwordHash. Versioning the representation (/v2 or Accept vendor) covers incompatible changes.',
    },
  },
  {
    id: 'be-api-19',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Cómo se diseñan operaciones masivas y cómo se reportan los fallos parciales?',
      en: 'How are bulk operations designed and how are partial failures reported?',
    },
    answer: {
      es: 'Cada ítem lleva su resultado. Lo habitual es 207 Multi-Status o un 200 con un array de éxitos y errores; 422 o 400 si falla todo. No se usa un único 500 que oculte lo ya persistido.',
      en: 'Each item carries its own result. The usual pattern is 207 Multi-Status or a 200 with an array of successes and errors; 422 or 400 if everything fails. A single 500 that hides what was already persisted is not used.',
    },
    distractors: [
      {
        es: 'Un POST masivo debe ser atómico: si un ítem falla, toda la petición devuelve 400 y no se persiste nada, única opción REST.',
        en: 'A bulk POST must be atomic: if one item fails, the whole request returns 400 and nothing is persisted, the only REST option.',
      },
      {
        es: 'El éxito parcial se informa con 206 Partial Content, el mismo código de los rangos de bytes.',
        en: 'Partial success is reported with 206 Partial Content, the same code used for byte ranges.',
      },
    ],
    explanation: {
      es: '207 Multi-Status (RFC 4918) permite un cuerpo con 201, 409 y 422 por ítem. Muchas APIs prefieren 200 con un array results para no depender de WebDAV. 206 Partial Content es solo para Range y Content-Range, no para lotes. Atomicidad es válida, pero entonces el fallo es 400 o 422 con rollback, no 207.',
      en: '207 Multi-Status (RFC 4918) allows a body with 201, 409 and 422 per item. Many APIs prefer 200 with a results array to avoid depending on WebDAV. 206 Partial Content is only for Range and Content-Range, not for batches. Atomicity is valid, but then failure is 400 or 422 with rollback, not 207.',
    },
  },
  {
    id: 'be-api-20',
    topic: 'Diseno de APIs',
    prompt: {
      es: '¿Cómo se entregan exportaciones largas: sondeo, webhooks o eventos enviados por el servidor?',
      en: 'How are long exports delivered: polling, webhooks or server-sent events?',
    },
    answer: {
      es: 'El POST o GET inicial responde 202 con un job; el cliente sondea GET /exports/9 hasta 303 o 200 con la URL del archivo, o recibe un webhook, o se suscribe a SSE (text/event-stream) para el progreso.',
      en: 'The initial POST or GET returns 202 with a job; the client polls GET /exports/9 until 303 or 200 with the file URL, or receives a webhook, or subscribes to SSE (text/event-stream) for progress.',
    },
    distractors: [
      {
        es: 'Se deja el GET original abierto hasta que el archivo esté listo y se responde 200 con Transfer-Encoding: chunked, porque exportar es una lectura.',
        en: 'The original GET is kept open until the file is ready and 200 is returned with Transfer-Encoding: chunked, because exporting is a read.',
      },
      {
        es: 'Los webhooks sustituyen al recurso de estado: el cliente nunca sondea, así que se puede devolver 201 con el archivo final de inmediato.',
        en: 'Webhooks replace the status resource: the client never polls, so 201 can be returned with the final file immediately.',
      },
    ],
    explanation: {
      es: 'Un export de minutos no debe bloquear un worker HTTP: 202 Accepted más Location: /exports/9 es el patrón. El sondeo hace GET periódicos (Cache-Control: no-store) hasta 303 See Other o 200 con el enlace. Un webhook POST avisa al terminar; SSE mantiene text/event-stream para el progreso. 201 inmediato miente si el archivo aún no existe.',
      en: 'A minutes-long export must not block an HTTP worker: 202 Accepted plus Location: /exports/9 is the pattern. Polling issues periodic GET requests (Cache-Control: no-store) until 303 See Other or 200 with the link. A webhook POST notifies on completion; SSE keeps text/event-stream for progress. An immediate 201 lies if the file does not exist yet.',
    },
  },
];
