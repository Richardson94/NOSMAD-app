import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_REST_SECURITY_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-rest-01',
    topic: 'HTTP',
    prompt: {
      es: '¿Qué diferencia hay entre PUT y POST?',
      en: 'What is the difference between PUT and POST?',
    },
    answer: {
      es: 'PUT sustituye el recurso en esa URL y repetirlo deja el mismo resultado. POST crea o lanza una acción, y repetirlo puede crear otro recurso.',
      en: 'PUT replaces the resource at that URL and repeating it leaves the same result. POST creates or triggers an action, and repeating it can create another resource.',
    },
    distractors: [
      {
        es: 'PUT crea y POST actualiza. Los dos son idempotentes.',
        en: 'PUT creates and POST updates. Both are idempotent.',
      },
      {
        es: 'POST es idempotente si el cuerpo no cambia. PUT no lo es porque borra campos que no envías.',
        en: 'POST is idempotent if the body does not change. PUT is not, because it deletes fields you do not send.',
      },
    ],
    explanation: {
      es: 'Idempotente significa que repetir la misma petición no cambia el resultado otra vez. Un alta con POST no cumple eso.',
      en: 'Idempotent means repeating the same request does not change the result again. A create with POST does not meet that.',
    },
  },
  {
    id: 'be-rest-02',
    topic: 'HTTP',
    prompt: {
      es: '¿Cuándo respondes 401, 403 y 400?',
      en: 'When do you respond 401, 403 and 400?',
    },
    answer: {
      es: '401 si no sabemos quién es, porque falta el login o el token. 403 si sabemos quién es y no puede hacer eso. 400 si la petición está mal formada.',
      en: '401 if we do not know who they are, because the login or the token is missing. 403 if we know who they are and they cannot do that. 400 if the request is malformed.',
    },
    distractors: [
      {
        es: '401 es sin permiso y 403 es token inválido. 400 es cualquier error de negocio.',
        en: '401 is no permission and 403 is an invalid token. 400 is any business error.',
      },
      {
        es: '403 y 400 son lo mismo para el cliente. 401 solo se usa si la contraseña está vacía.',
        en: '403 and 400 are the same for the client. 401 is only used if the password is empty.',
      },
    ],
    explanation: {
      es: 'Un token caducado sigue siendo 401: hay que autenticarse de nuevo. Un usuario logueado que pide un recurso ajeno es 403.',
      en: 'An expired token is still 401: they must authenticate again. A logged-in user asking for someone else resource is 403.',
    },
  },
  {
    id: 'be-rest-03',
    topic: 'JWT',
    prompt: {
      es: '¿El cuerpo de un JWT va cifrado?',
      en: 'Is the body of a JWT encrypted?',
    },
    answer: {
      es: 'No. Va en base64 y cualquiera puede leerlo. La firma demuestra que no lo alteraron, no que sea secreto.',
      en: 'No. It is base64 and anyone can read it. The signature proves it was not altered, not that it is secret.',
    },
    distractors: [
      {
        es: 'Sí. La firma cifra el cuerpo y solo el servidor puede leer los claims.',
        en: 'Yes. The signature encrypts the body and only the server can read the claims.',
      },
      {
        es: 'El cuerpo va en claro y la firma es decorativa. No hace falta validarla.',
        en: 'The body is plain text and the signature is decorative. There is no need to validate it.',
      },
    ],
    explanation: {
      es: 'No metas contraseñas ni datos sensibles en el token. Si necesitas secreto, eso es otro formato, con cifrado de verdad.',
      en: 'Do not put passwords or sensitive data in the token. If you need secrecy, that is another format, with real encryption.',
    },
  },
  {
    id: 'be-rest-04',
    topic: 'Seguridad',
    prompt: {
      es: '¿Qué diferencia hay entre autenticación y autorización?',
      en: 'What is the difference between authentication and authorization?',
    },
    answer: {
      es: 'Autenticación responde quién eres. Autorización responde qué puedes hacer una vez que sabemos quién eres.',
      en: 'Authentication answers who you are. Authorization answers what you can do once we know who you are.',
    },
    distractors: [
      {
        es: 'Son lo mismo. Un login correcto ya autoriza todas las rutas.',
        en: 'They are the same. A correct login already authorizes every route.',
      },
      {
        es: 'La autorización es el login y la autenticación es el rol.',
        en: 'Authorization is the login and authentication is the role.',
      },
    ],
    explanation: {
      es: '401 es un fallo de autenticación. 403 es un fallo de autorización: la identidad es válida y el permiso no.',
      en: '401 is an authentication failure. 403 is an authorization failure: the identity is valid and the permission is not.',
    },
  },
  {
    id: 'be-rest-05',
    topic: 'CSRF',
    prompt: {
      es: '¿Por qué una API con Bearer en la cabecera no suele necesitar protección CSRF?',
      en: 'Why does an API with Bearer in the header usually not need CSRF protection?',
    },
    answer: {
      es: 'Porque el navegador no adjunta esa cabecera solo. Un sitio malicioso no puede poner el token en la petición cruzada.',
      en: 'Because the browser does not attach that header on its own. A malicious site cannot put the token on the cross-site request.',
    },
    distractors: [
      {
        es: 'Porque HTTPS impide CSRF. El tipo de credencial no importa.',
        en: 'Because HTTPS blocks CSRF. The kind of credential does not matter.',
      },
      {
        es: 'Porque JWT caduca. Una cookie de sesión tampoco necesita CSRF.',
        en: 'Because the JWT expires. A session cookie does not need CSRF either.',
      },
    ],
    explanation: {
      es: 'Si la sesión vive en una cookie que el navegador envía sola, sí hace falta CSRF. El token en cabecera no viaja solo.',
      en: 'If the session lives in a cookie the browser sends on its own, CSRF is required. The token in a header does not travel alone.',
    },
  },
  {
    id: 'be-rest-06',
    topic: 'Validación',
    prompt: {
      es: '¿Qué pasa si @Valid falla en el cuerpo de un controlador?',
      en: 'What happens if @Valid fails on a controller body?',
    },
    answer: {
      es: 'Spring lanza una excepción de argumentos no válidos antes de entrar al método. Boot puede responder 400, pero el cuerpo depende de tu manejador.',
      en: 'Spring throws an invalid-arguments exception before entering the method. Boot can respond 400, but the body depends on your handler.',
    },
    distractors: [
      {
        es: 'El método corre igual y tú miras el resultado de validar a mano.',
        en: 'The method runs anyway and you check the validation result by hand.',
      },
      {
        es: 'Siempre devuelve 500 con el stack, porque la validación es un error interno.',
        en: 'It always returns 500 with the stack, because validation is an internal error.',
      },
    ],
    explanation: {
      es: 'Sin @Valid las anotaciones del DTO no se ejecutan. El 400 por defecto no es un contrato estable: define el cuerpo en un advice.',
      en: 'Without @Valid the DTO annotations do not run. The default 400 is not a stable contract: define the body in an advice.',
    },
  },
  {
    id: 'be-rest-07',
    topic: 'Errores',
    prompt: {
      es: '¿Para qué sirve RestControllerAdvice?',
      en: 'What is RestControllerAdvice for?',
    },
    answer: {
      es: 'Para traducir excepciones de los controladores a una respuesta HTTP en un solo sitio. No atrapa lo que falla en los filtros de seguridad, porque eso ocurre antes del controlador.',
      en: 'To translate controller exceptions into one HTTP response in a single place. It does not catch what fails in the security filters, because that happens before the controller.',
    },
    distractors: [
      {
        es: 'Atrapa cualquier error de la aplicación, incluidos filtros, tareas y el arranque.',
        en: 'It catches every application error, including filters, tasks and startup.',
      },
      {
        es: 'Solo documenta códigos. Las excepciones siguen saliendo como 500.',
        en: 'It only documents codes. Exceptions still come out as 500.',
      },
    ],
    explanation: {
      es: 'Centraliza el contrato de error. Un 401 del filtro de seguridad hay que manejarlo en la cadena de seguridad, no aquí.',
      en: 'It centralises the error contract. A 401 from the security filter must be handled in the security chain, not here.',
    },
  },
  {
    id: 'be-rest-08',
    topic: 'SQL',
    prompt: {
      es: '¿Cómo evitas la inyección SQL?',
      en: 'How do you avoid SQL injection?',
    },
    answer: {
      es: 'Con parámetros, no concatenando el texto del usuario en la sentencia. El driver envía el valor aparte de la consulta.',
      en: 'With parameters, not by concatenating the user text into the statement. The driver sends the value apart from the query.',
    },
    distractors: [
      {
        es: 'Escapando comillas y con una lista negra de palabras como drop.',
        en: 'By escaping quotes and with a blacklist of words such as drop.',
      },
      {
        es: 'Usando POST en lugar de GET, porque el cuerpo no se puede inyectar.',
        en: 'By using POST instead of GET, because the body cannot be injected.',
      },
    ],
    explanation: {
      es: 'JPA y JDBC con placeholders ya parametrizan. El riesgo vuelve si armas SQL nativo con el texto del cliente.',
      en: 'JPA and JDBC with placeholders already use parameters. The risk comes back if you build native SQL with the client text.',
    },
  },
];
