import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_REST_SECURITY_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-rest-01',
    topic: 'REST',
    prompt: {
      es: '¿Qué significa que PUT sea idempotente y POST no?',
      en: 'What does it mean that PUT is idempotent and POST is not?',
    },
    answer: {
      es: 'Repetir el mismo PUT deja el recurso en el mismo estado final; repetir un POST puede crear recursos duplicados.',
      en: 'Repeating the same PUT leaves the resource in the same final state; repeating a POST may create duplicates.',
    },
    distractors: [
      {
        es: 'PUT devuelve siempre la misma respuesta ante la misma petición, mientras POST puede devolver códigos distintos.',
        en: 'PUT always returns the same response for the same request, while POST may return different codes.',
      },
      {
        es: 'PUT no modifica el estado del servidor porque reemplaza el recurso completo, mientras POST sí lo modifica.',
        en: 'PUT does not modify server state because it replaces the whole resource, while POST does modify it.',
      },
    ],
    explanation: {
      es: 'La idempotencia habla del estado del servidor, no de la respuesta: el segundo PUT puede devolver 200 en lugar de 201 y seguir siendo idempotente. Y PUT sí modifica el estado; el método que no lo hace es un método seguro como GET.',
      en: 'Idempotency is about server state, not about the response: the second PUT may return 200 instead of 201 and still be idempotent. And PUT does modify state; the method that does not is a safe method such as GET.',
    },
  },
  {
    id: 'be-rest-02',
    topic: 'Códigos HTTP',
    prompt: {
      es: 'Un cliente autenticado intenta borrar un recurso ajeno. ¿Qué código HTTP corresponde?',
      en: 'An authenticated client tries to delete a resource owned by someone else. Which HTTP code applies?',
    },
    answer: {
      es: '403 Forbidden, porque la identidad es válida pero carece de permiso.',
      en: '403 Forbidden, because the identity is valid but lacks permission.',
    },
    distractors: [
      {
        es: '401 Unauthorized, porque la petición no está autorizada a realizar esa operación sobre el recurso.',
        en: '401 Unauthorized, because the request is not authorised to perform that operation on the resource.',
      },
      {
        es: '400 Bad Request, porque la petición referencia un recurso que no pertenece al usuario del token.',
        en: '400 Bad Request, because the request references a resource not belonging to the token user.',
      },
    ],
    explanation: {
      es: 'A pesar de su nombre, 401 significa "no autenticado" y pide credenciales, por eso incluye la cabecera WWW-Authenticate; 403 es el que responde a una autorización insuficiente. En escenarios sensibles se devuelve 404 para no revelar la existencia del recurso.',
      en: 'Despite its name, 401 means "not authenticated" and asks for credentials, which is why it includes the WWW-Authenticate header; 403 is the one answering insufficient authorisation. In sensitive scenarios a 404 is returned so the resource existence is not revealed.',
    },
  },
  {
    id: 'be-rest-03',
    topic: 'Seguridad',
    prompt: {
      es: '¿Por qué un JWT firmado no debe usarse para almacenar información sensible?',
      en: 'Why should a signed JWT not be used to store sensitive information?',
    },
    answer: {
      es: 'Porque el payload solo está codificado en base64 y cualquiera que tenga el token puede leerlo.',
      en: 'Because the payload is merely base64 encoded and anyone holding the token can read it.',
    },
    distractors: [
      {
        es: 'Porque el payload se cifra con una clave simétrica que también conoce el cliente para poder validarlo.',
        en: 'Because the payload is encrypted with a symmetric key that the client also knows in order to validate it.',
      },
      {
        es: 'Porque el token viaja en cada petición y el servidor no puede invalidarlo antes de su expiración.',
        en: 'Because the token travels on every request and the server cannot invalidate it before expiry.',
      },
    ],
    explanation: {
      es: 'Firmar garantiza integridad y autenticidad, no confidencialidad: el contenido es legible con cualquier decodificador. Si hace falta ocultarlo se usa JWE. La dificultad para revocar es otra limitación real del JWT, pero no explica la exposición de los datos.',
      en: 'Signing guarantees integrity and authenticity, not confidentiality: the content is readable with any decoder. If you need it hidden you use JWE. The difficulty of revoking is another real JWT limitation, but it does not explain the data exposure.',
    },
  },
  {
    id: 'be-rest-04',
    topic: 'Spring Security',
    prompt: {
      es: '¿Cuál es la diferencia entre autenticación y autorización en Spring Security?',
      en: 'What is the difference between authentication and authorisation in Spring Security?',
    },
    answer: {
      es: 'La autenticación establece quién es el usuario; la autorización decide qué puede hacer.',
      en: 'Authentication establishes who the user is; authorisation decides what the user can do.',
    },
    distractors: [
      {
        es: 'La autenticación valida el token en cada petición y la autorización se resuelve una vez al iniciar sesión.',
        en: 'Authentication validates the token on every request and authorisation is resolved once at login.',
      },
      {
        es: 'La autenticación la manejan los filtros y la autorización siempre se configura con anotaciones en los métodos.',
        en: 'Authentication is handled by filters and authorisation is always configured with method annotations.',
      },
    ],
    explanation: {
      es: 'Identidad frente a permisos: primero se resuelve el Authentication y luego se evalúan las reglas de acceso. En una API con JWT ambas se evalúan en cada petición, y la autorización puede configurarse tanto a nivel de URL en la cadena de filtros como con @PreAuthorize en los métodos.',
      en: 'Identity versus permissions: the Authentication is resolved first and then access rules are evaluated. In a JWT API both are evaluated on every request, and authorisation can be configured either at URL level in the filter chain or with @PreAuthorize on methods.',
    },
  },
  {
    id: 'be-rest-05',
    topic: 'Seguridad',
    prompt: {
      es: '¿Por qué una API REST sin estado que autentica con cabecera Bearer no necesita protección CSRF?',
      en: 'Why does a stateless REST API authenticating with a Bearer header not need CSRF protection?',
    },
    answer: {
      es: 'Porque el navegador no adjunta la cabecera automáticamente, así que un sitio ajeno no puede reutilizar la credencial.',
      en: 'Because the browser does not attach the header automatically, so a third-party site cannot reuse the credential.',
    },
    distractors: [
      {
        es: 'Porque al no haber sesión en el servidor no hay estado que un atacante pueda manipular desde otro origen.',
        en: 'Because with no server session there is no state an attacker could manipulate from another origin.',
      },
      {
        es: 'Porque la política de mismo origen del navegador bloquea las peticiones cruzadas hacia la API.',
        en: 'Because the browser same-origin policy blocks cross-origin requests to the API.',
      },
    ],
    explanation: {
      es: 'CSRF explota que el navegador envía credenciales de forma implícita, como una cookie; si el token se adjunta por JavaScript, la petición forjada llega sin él. Por eso un JWT guardado en cookie sí requiere protección CSRF. Y la política de mismo origen no impide enviar la petición, solo leer la respuesta.',
      en: 'CSRF exploits the browser sending credentials implicitly, like a cookie; if the token is attached by JavaScript, the forged request arrives without it. That is why a JWT stored in a cookie does need CSRF protection. And the same-origin policy does not prevent sending the request, only reading the response.',
    },
  },
  {
    id: 'be-rest-06',
    topic: 'Validación',
    prompt: {
      es: '¿Qué hace la anotación @Valid en el parámetro de un controlador?',
      en: 'What does the @Valid annotation do on a controller parameter?',
    },
    answer: {
      es: 'Dispara las restricciones de Bean Validation del objeto y lanza MethodArgumentNotValidException si falla.',
      en: 'It triggers the Bean Validation constraints of the object and throws MethodArgumentNotValidException on failure.',
    },
    distractors: [
      {
        es: 'Verifica que el JSON recibido tenga todos los campos declarados en el DTO antes de deserializarlo.',
        en: 'It verifies the received JSON contains every field declared in the DTO before deserialising it.',
      },
      {
        es: 'Valida el objeto y devuelve automáticamente un 400 con la lista de errores en el cuerpo de la respuesta.',
        en: 'It validates the object and automatically returns a 400 with the error list in the response body.',
      },
    ],
    explanation: {
      es: 'La validación ocurre después de deserializar, sobre el objeto ya construido, y se manifiesta como excepción. Spring Boot la traduce a 400, pero el formato del cuerpo depende del manejador: para una respuesta útil con los campos fallidos hace falta un @ExceptionHandler o un ProblemDetail.',
      en: 'Validation happens after deserialisation, on the already built object, and surfaces as an exception. Spring Boot translates it to a 400, but the body format depends on the handler: a useful response listing the failed fields needs an @ExceptionHandler or a ProblemDetail.',
    },
  },
  {
    id: 'be-rest-07',
    topic: 'Manejo de errores',
    prompt: {
      es: '¿Cuál es la ventaja de @RestControllerAdvice con @ExceptionHandler?',
      en: 'What is the advantage of @RestControllerAdvice with @ExceptionHandler?',
    },
    answer: {
      es: 'Centraliza la traducción de excepciones a respuestas HTTP para todos los controladores.',
      en: 'It centralises the translation of exceptions into HTTP responses for every controller.',
    },
    distractors: [
      {
        es: 'Captura también las excepciones que ocurren en los filtros de seguridad antes de llegar al controlador.',
        en: 'It also catches exceptions raised in the security filters before reaching the controller.',
      },
      {
        es: 'Evita que las excepciones provoquen rollback, permitiendo confirmar la transacción y devolver un error controlado.',
        en: 'It prevents exceptions from causing rollback, allowing the transaction to commit and returning a controlled error.',
      },
    ],
    explanation: {
      es: 'Su valor es quitar los try/catch de los controladores y definir el contrato de error en un solo lugar. No alcanza a los filtros, porque estos corren antes del DispatcherServlet, ni afecta a la transacción: cuando el advice recibe la excepción, el rollback ya se decidió.',
      en: 'Its value is removing try/catch from controllers and defining the error contract in one place. It does not reach filters, since those run before the DispatcherServlet, and it does not affect the transaction: by the time the advice receives the exception, the rollback was already decided.',
    },
  },
  {
    id: 'be-rest-08',
    topic: 'Seguridad',
    prompt: {
      es: '¿Cómo se previenen las inyecciones SQL en una consulta con parámetros dinámicos?',
      en: 'How do you prevent SQL injection in a query with dynamic parameters?',
    },
    answer: {
      es: 'Usando consultas parametrizadas, de modo que el valor nunca se concatene en la sentencia.',
      en: 'Using parameterised queries, so the value is never concatenated into the statement.',
    },
    distractors: [
      {
        es: 'Escapando las comillas y los caracteres especiales de la entrada antes de construir la consulta.',
        en: 'Escaping quotes and special characters in the input before building the query.',
      },
      {
        es: 'Validando la entrada con una lista negra de palabras reservadas como DROP, UNION o SELECT.',
        en: 'Validating the input against a blacklist of reserved words such as DROP, UNION or SELECT.',
      },
    ],
    explanation: {
      es: 'La parametrización separa el código de los datos: el motor recibe la sentencia ya compilada y el valor como dato, así que ninguna carga puede cambiar su estructura. Escapar a mano es frágil y depende del dialecto, y las listas negras se evaden con codificaciones o comentarios.',
      en: 'Parameterisation separates code from data: the engine receives the already compiled statement and the value as data, so no payload can change its structure. Manual escaping is fragile and dialect dependent, and blacklists are bypassed with encodings or comments.',
    },
  },
];
