import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_SECURITY_AUTH_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-sec-01',
    topic: 'OAuth',
    prompt: {
      es: '¿Qué flujo usa una SPA para login y por qué no el implícito?',
      en: 'Which flow does a SPA use for login and why not the implicit one?',
    },
    answer: {
      es: 'Código de autorización con PKCE. El implícito devolvía el token en la URL y ya no se recomienda.',
      en: 'Authorization code with PKCE. The implicit flow returned the token in the URL and is no longer recommended.',
    },
    distractors: [
      {
        es: 'El implícito, porque una SPA no puede guardar un secreto y PKCE es solo para apps nativas.',
        en: 'The implicit one, because a SPA cannot keep a secret and PKCE is only for native apps.',
      },
      {
        es: 'Client credentials, porque el navegador es un cliente público.',
        en: 'Client credentials, because the browser is a public client.',
      },
    ],
    explanation: {
      es: 'PKCE ata el canje del código a quien empezó el login, sin necesidad de un secreto en el JavaScript.',
      en: 'PKCE binds the code exchange to whoever started the login, with no need for a secret in the JavaScript.',
    },
  },
  {
    id: 'be-sec-02',
    topic: 'OAuth',
    prompt: {
      es: '¿Qué representa un token de client credentials?',
      en: 'What does a client credentials token represent?',
    },
    answer: {
      es: 'A la aplicación, no a una persona. Sirve para que un servicio llame a otro. No hay usuario que haya hecho login.',
      en: 'The application, not a person. It is for one service calling another. There is no user who logged in.',
    },
    distractors: [
      {
        es: 'Al usuario que autorizó la app, igual que el código de autorización.',
        en: 'The user who authorized the app, the same as the authorization code.',
      },
      {
        es: 'Un refresh token de larga duración para el navegador.',
        en: 'A long lived refresh token for the browser.',
      },
    ],
    explanation: {
      es: 'Si la acción es de una persona, ese flujo no alcanza: falta el consentimiento y la identidad del usuario.',
      en: 'If the action belongs to a person, that flow is not enough: the consent and the user identity are missing.',
    },
  },
  {
    id: 'be-sec-03',
    topic: 'OAuth',
    prompt: {
      es: '¿Qué diferencia hay entre id token y access token?',
      en: 'What is the difference between an id token and an access token?',
    },
    answer: {
      es: 'El id token dice quién hizo login y va para tu aplicación. El access token va a la API y la API comprueba que la audiencia sea ella.',
      en: 'The id token says who logged in and is for your application. The access token goes to the API and the API checks that the audience is itself.',
    },
    distractors: [
      {
        es: 'Son intercambiables. La API acepta el id token si la firma es válida.',
        en: 'They are interchangeable. The API accepts the id token if the signature is valid.',
      },
      {
        es: 'El access token identifica al usuario y el id token autoriza la llamada a la API.',
        en: 'The access token identifies the user and the id token authorizes the call to the API.',
      },
    ],
    explanation: {
      es: 'Mandar el id token a la API mezcla identidad con acceso. Cada recurso valida su propia audiencia.',
      en: 'Sending the id token to the API mixes identity with access. Each resource validates its own audience.',
    },
  },
  {
    id: 'be-sec-04',
    topic: 'Roles',
    prompt: {
      es: '¿Qué diferencia hay entre scope y rol?',
      en: 'What is the difference between a scope and a role?',
    },
    answer: {
      es: 'El scope es lo que este token puede hacer, lo pide el cliente. El rol es un grupo de la persona en tu app. En Spring, el scope llega como SCOPE_ y el rol como ROLE_.',
      en: 'The scope is what this token may do, and the client asks for it. The role is a group of the person in your app. In Spring, the scope arrives as SCOPE_ and the role as ROLE_.',
    },
    distractors: [
      {
        es: 'Son alias. hasRole y hasAuthority comparan el mismo texto.',
        en: 'They are aliases. hasRole and hasAuthority compare the same text.',
      },
      {
        es: 'El rol viaja en el scope y Spring le quita el prefijo ROLE_ al llegar.',
        en: 'The role travels in the scope and Spring strips the ROLE_ prefix on arrival.',
      },
    ],
    explanation: {
      es: 'Un scope orders:read no es el rol ADMIN. Confundir el prefijo hace que la regla nunca coincida.',
      en: 'A scope orders:read is not the ADMIN role. Mixing up the prefix makes the rule never match.',
    },
  },
  {
    id: 'be-sec-05',
    topic: 'JWT',
    prompt: {
      es: '¿Qué validas de un JWT antes de fiarte?',
      en: 'What do you validate on a JWT before you trust it?',
    },
    answer: {
      es: 'La firma con la clave que tú esperas, el emisor, la audiencia y la caducidad. No aceptes el algoritmo que diga la cabecera del token.',
      en: 'The signature with the key you expect, the issuer, the audience and the expiry. Do not accept the algorithm the token header claims.',
    },
    distractors: [
      {
        es: 'Basta decodificar el cuerpo. Si trae el usuario, el token es válido.',
        en: 'Decoding the body is enough. If it carries the user, the token is valid.',
      },
      {
        es: 'Solo la caducidad. La firma la comprueba el navegador.',
        en: 'Only the expiry. The browser checks the signature.',
      },
    ],
    explanation: {
      es: 'Fijar el algoritmo evita que un token diga que no hay firma. El cuerpo se puede leer, así que no es prueba de nada.',
      en: 'Pinning the algorithm stops a token from claiming there is no signature. The body can be read, so it proves nothing.',
    },
  },
  {
    id: 'be-sec-06',
    topic: 'JWT',
    prompt: {
      es: '¿Cuándo un token opaco conviene más que un JWT?',
      en: 'When is an opaque token a better fit than a JWT?',
    },
    answer: {
      es: 'Cuando quieres poder revocarlo al momento y no publicar datos en el cliente. La API pregunta al emisor qué significa ese token.',
      en: 'When you want to revoke it at once and not publish data on the client. The API asks the issuer what that token means.',
    },
    distractors: [
      {
        es: 'Nunca. El JWT se puede revocar igual porque la firma caduca sola.',
        en: 'Never. A JWT can be revoked the same way because the signature expires on its own.',
      },
      {
        es: 'El opaco va firmado y la API lo valida sin llamar a nadie, igual que un JWT.',
        en: 'The opaque one is signed and the API validates it without calling anyone, the same as a JWT.',
      },
    ],
    explanation: {
      es: 'El JWT evita esa llamada y por eso cuesta invalidarlo antes de que caduque. El opaco es una referencia, no un documento.',
      en: 'A JWT avoids that call and that is why it is hard to invalidate before it expires. An opaque token is a reference, not a document.',
    },
  },
  {
    id: 'be-sec-07',
    topic: 'Sesión',
    prompt: {
      es: '¿Dónde guardas el refresh token y qué es rotarlo?',
      en: 'Where do you store the refresh token and what does rotating it mean?',
    },
    answer: {
      es: 'No en localStorage, donde cualquier script de la página lo lee. Rótalo: cada uso emite uno nuevo e invalida el anterior. Si reaparece el viejo, hay un robo.',
      en: 'Not in localStorage, where any script on the page can read it. Rotate it: each use issues a new one and invalidates the previous one. If the old one shows up again, it was stolen.',
    },
    distractors: [
      {
        es: 'En localStorage, porque es el sitio seguro del origen y no hace falta rotar.',
        en: 'In localStorage, because it is the safe place of the origin and rotation is not needed.',
      },
      {
        es: 'Rotar significa alargar la misma cadena. El valor no cambia.',
        en: 'Rotating means extending the same string. The value does not change.',
      },
    ],
    explanation: {
      es: 'Una cookie de sesión, marcada para que el JavaScript no la lea, es el sitio habitual. Reusar un refresh ya gastado debe cerrar la familia de tokens.',
      en: 'A session cookie, marked so JavaScript cannot read it, is the usual place. Reusing a refresh that was already spent must close the token family.',
    },
  },
  {
    id: 'be-sec-08',
    topic: 'JWT',
    prompt: {
      es: '¿Cómo limitas el daño de un JWT robado?',
      en: 'How do you limit the damage of a stolen JWT?',
    },
    answer: {
      es: 'Con una caducidad corta. Para cortarlo antes, guardas una lista de ids revocados y rechazas ese jti hasta que caduque.',
      en: 'With a short expiry. To cut it off sooner, you keep a list of revoked ids and reject that jti until it expires.',
    },
    distractors: [
      {
        es: 'Cambiando la clave en cada petición. Así ningún token robado sigue firmando.',
        en: 'By changing the key on every request. That way no stolen token keeps signing.',
      },
      {
        es: 'No se puede hacer nada hasta la caducidad. Una lista de revocación rompe el JWT.',
        en: 'Nothing can be done until expiry. A revocation list breaks JWT.',
      },
    ],
    explanation: {
      es: 'La lista solo necesita vivir hasta el exp de esos tokens. Si la caducidad es de horas, el robo dura horas.',
      en: 'The list only needs to live until the exp of those tokens. If the expiry is hours, the theft lasts hours.',
    },
  },
  {
    id: 'be-sec-09',
    topic: 'Contraseñas',
    prompt: {
      es: '¿Cómo guardas una contraseña?',
      en: 'How do you store a password?',
    },
    answer: {
      es: 'Con un hash lento y con sal, como bcrypt o argon2. No con SHA-256 a secas: eso se puede probar a gran velocidad.',
      en: 'With a slow salted hash, such as bcrypt or argon2. Not with plain SHA-256: that can be guessed at high speed.',
    },
    distractors: [
      {
        es: 'Cifrada con AES para poder mostrarla si el usuario la olvida.',
        en: 'Encrypted with AES so you can show it if the user forgets it.',
      },
      {
        es: 'SHA-256 es suficiente si añades la fecha como sal.',
        en: 'SHA-256 is enough if you add the date as a salt.',
      },
    ],
    explanation: {
      es: 'No debes poder recuperar la contraseña. Un hash rápido, aunque tenga sal, cae ante un diccionario.',
      en: 'You must not be able to recover the password. A fast hash, even with a salt, falls to a dictionary.',
    },
  },
  {
    id: 'be-sec-10',
    topic: 'Spring Security',
    prompt: {
      es: '¿Dónde enganchas un filtro propio en Spring Security?',
      en: 'Where do you hook your own filter in Spring Security?',
    },
    answer: {
      es: 'En la cadena de seguridad, antes o después de un filtro conocido, con addFilterBefore. Ya no se extiende el adaptador viejo de configuración.',
      en: 'On the security chain, before or after a known filter, with addFilterBefore. You no longer extend the old configuration adapter.',
    },
    distractors: [
      {
        es: 'Como un filtro de servlet suelto. Spring Security lo ordena solo.',
        en: 'As a loose servlet filter. Spring Security orders it on its own.',
      },
      {
        es: 'Heredando WebSecurityConfigurerAdapter, que sigue siendo la forma actual.',
        en: 'By extending WebSecurityConfigurerAdapter, which is still the current way.',
      },
    ],
    explanation: {
      es: 'Un filtro fuera de la cadena no ve el mismo orden que la autenticación. El estilo actual es un SecurityFilterChain en un bean.',
      en: 'A filter outside the chain does not see the same order as authentication. The current style is a SecurityFilterChain bean.',
    },
  },
  {
    id: 'be-sec-11',
    topic: 'Spring Security',
    prompt: {
      es: '¿El SecurityContext viaja a un método @Async?',
      en: 'Does the SecurityContext travel to an @Async method?',
    },
    answer: {
      es: 'No por defecto. Vive en el hilo de la petición. El método async corre en otro hilo y no ve al usuario, salvo que copies el contexto a propósito.',
      en: 'Not by default. It lives on the request thread. The async method runs on another thread and does not see the user, unless you copy the context on purpose.',
    },
    distractors: [
      {
        es: 'Sí. @Async hereda la seguridad igual que hereda la transacción.',
        en: 'Yes. @Async inherits security the same way it inherits the transaction.',
      },
      {
        es: 'El contexto es un bean singleton, así que todos los hilos ven al mismo usuario.',
        en: 'The context is a singleton bean, so every thread sees the same user.',
      },
    ],
    explanation: {
      es: 'Ni la transacción ni el usuario saltan de hilo solos. Hay un modo que propaga el contexto, y hay que activarlo.',
      en: 'Neither the transaction nor the user jumps threads on its own. There is a mode that propagates the context, and you have to turn it on.',
    },
  },
  {
    id: 'be-sec-12',
    topic: 'Autorización',
    prompt: {
      es: '¿Qué diferencia hay entre PreAuthorize, Secured y RolesAllowed?',
      en: 'What is the difference between PreAuthorize, Secured and RolesAllowed?',
    },
    answer: {
      es: 'PreAuthorize evalúa una expresión y puede mirar el argumento, como el dueño del pedido. Secured y RolesAllowed solo comparan roles.',
      en: 'PreAuthorize evaluates an expression and can look at the argument, such as the order owner. Secured and RolesAllowed only compare roles.',
    },
    distractors: [
      {
        es: 'Hacen lo mismo. PreAuthorize es el nombre en Boot y los otros son alias.',
        en: 'They do the same thing. PreAuthorize is the Boot name and the others are aliases.',
      },
      {
        es: 'Secured puede usar el cuerpo del método. PreAuthorize solo corre después de la llamada.',
        en: 'Secured can use the method body. PreAuthorize only runs after the call.',
      },
    ],
    explanation: {
      es: 'Para el dueño del recurso necesitas la expresión. Un rol ADMIN no sustituye esa comprobación.',
      en: 'For the resource owner you need the expression. An ADMIN role does not replace that check.',
    },
  },
  {
    id: 'be-sec-13',
    topic: 'Roles',
    prompt: {
      es: '¿Qué compara hasRole frente a hasAuthority?',
      en: 'What does hasRole compare versus hasAuthority?',
    },
    answer: {
      es: 'hasRole añade el prefijo ROLE_. hasRole de ADMIN busca ROLE_ADMIN. hasAuthority compara el texto exacto que le pasas.',
      en: 'hasRole adds the ROLE_ prefix. hasRole of ADMIN looks for ROLE_ADMIN. hasAuthority compares the exact text you pass.',
    },
    distractors: [
      {
        es: 'hasRole quita el prefijo y hasAuthority lo añade. Da igual cuál uses.',
        en: 'hasRole strips the prefix and hasAuthority adds it. It does not matter which you use.',
      },
      {
        es: 'hasAuthority solo vale para scopes y no puede comprobar ROLE_ADMIN.',
        en: 'hasAuthority only works for scopes and cannot check ROLE_ADMIN.',
      },
    ],
    explanation: {
      es: 'Si escribes hasRole de ROLE_ADMIN, Spring busca ROLE_ROLE_ADMIN y la regla no entra. Pasa el rol sin prefijo.',
      en: 'If you write hasRole of ROLE_ADMIN, Spring looks for ROLE_ROLE_ADMIN and the rule does not match. Pass the role without the prefix.',
    },
  },
  {
    id: 'be-sec-14',
    topic: 'CORS',
    prompt: {
      es: '¿Por qué un preflight OPTIONS acaba en 401?',
      en: 'Why does a preflight OPTIONS end in 401?',
    },
    answer: {
      es: 'Porque la petición de comprobación no lleva el token y la seguridad la rechaza antes de CORS. Hay que dejar pasar OPTIONS, o responder CORS antes de autenticar.',
      en: 'Because the check request does not carry the token and security rejects it before CORS. You must let OPTIONS through, or answer CORS before authenticating.',
    },
    distractors: [
      {
        es: 'Porque el navegador exige 401 en el preflight para aceptar el POST.',
        en: 'Because the browser requires 401 on the preflight in order to accept the POST.',
      },
      {
        es: 'Porque CORS solo aplica a GET. OPTIONS no existe en Spring.',
        en: 'Because CORS only applies to GET. OPTIONS does not exist in Spring.',
      },
    ],
    explanation: {
      es: 'CORS es una frase: el navegador pregunta si este origen puede llamar, y el servidor responde antes de exigir login.',
      en: 'CORS is one sentence: the browser asks whether this origin may call, and the server answers before requiring login.',
    },
  },
  {
    id: 'be-sec-15',
    topic: 'CSRF',
    prompt: {
      es: '¿Cuándo necesitas protección CSRF?',
      en: 'When do you need CSRF protection?',
    },
    answer: {
      es: 'Cuando la sesión va en una cookie que el navegador envía solo. Un sitio ajeno puede disparar esa petición. Con el token solo en una cabecera, el navegador no lo adjunta.',
      en: 'When the session is in a cookie the browser sends on its own. Another site can fire that request. With the token only in a header, the browser does not attach it.',
    },
    distractors: [
      {
        es: 'Siempre, también con Bearer, porque HTTPS no cubre este caso.',
        en: 'Always, including Bearer, because HTTPS does not cover this case.',
      },
      {
        es: 'Nunca en same-site. La cookie de sesión no sale del dominio.',
        en: 'Never on same-site. The session cookie does not leave the domain.',
      },
    ],
    explanation: {
      es: 'Desactivar CSRF en una app con cookie de sesión deja el cambio de estado abierto. En una API pura de cabecera suele sobrar.',
      en: 'Turning CSRF off on an app with a session cookie leaves state changes open. On a pure header API it is usually unnecessary.',
    },
  },
  {
    id: 'be-sec-16',
    topic: 'Sesión',
    prompt: {
      es: '¿Qué es la fijación de sesión y cómo la cortas?',
      en: 'What is session fixation and how do you stop it?',
    },
    answer: {
      es: 'Alguien te impone un id de sesión y, tras el login, sigue usándolo. Al autenticar hay que cambiar el id. Limitar sesiones concurrentes evita varias sesiones vivas del mismo usuario.',
      en: 'Someone forces a session id on you and, after login, keeps using it. On authentication you must change the id. Limiting concurrent sessions avoids several live sessions of the same user.',
    },
    distractors: [
      {
        es: 'Es robar la cookie por XSS. Se arregla alargando el timeout.',
        en: 'It is stealing the cookie through XSS. You fix it by lengthening the timeout.',
      },
      {
        es: 'Spring cambia el id solo. No hay API y las sesiones concurrentes no se pueden limitar.',
        en: 'Spring changes the id on its own. There is no API and concurrent sessions cannot be limited.',
      },
    ],
    explanation: {
      es: 'changeSessionId conserva los datos y cambia el identificador. Invalidar la sesión anterior también corta la fijación.',
      en: 'changeSessionId keeps the data and changes the identifier. Invalidating the previous session also stops fixation.',
    },
  },
  {
    id: 'be-sec-17',
    topic: 'Secretos',
    prompt: {
      es: '¿Dónde pones claves y contraseñas de producción?',
      en: 'Where do you put production keys and passwords?',
    },
    answer: {
      es: 'Fuera del repositorio: variables de entorno o un almacén de secretos. El almacén permite rotar y auditar. El entorno alcanza en un despliegue simple.',
      en: 'Outside the repository: environment variables or a secrets store. The store lets you rotate and audit. The environment is enough on a simple deploy.',
    },
    distractors: [
      {
        es: 'En application.properties, porque Boot no lee variables de entorno.',
        en: 'In application.properties, because Boot does not read environment variables.',
      },
      {
        es: 'Cifradas en el jar. Quien tiene el artefacto no puede sacarlas.',
        en: 'Encrypted in the jar. Whoever has the artifact cannot extract them.',
      },
    ],
    explanation: {
      es: 'Un secreto en git se queda en el historial. Rotar en un almacén no exige un commit nuevo.',
      en: 'A secret in git stays in the history. Rotating in a store does not require a new commit.',
    },
  },
  {
    id: 'be-sec-18',
    topic: 'TLS',
    prompt: {
      es: '¿Qué diferencia hay entre terminar TLS y usar mTLS?',
      en: 'What is the difference between TLS termination and mTLS?',
    },
    answer: {
      es: 'Terminar TLS es que el balanceador descifra y habla en claro con la app. mTLS es que las dos partes presentan certificado, para saber qué servicio llama.',
      en: 'TLS termination means the load balancer decrypts and talks in the clear to the app. mTLS means both sides present a certificate, so you know which service is calling.',
    },
    distractors: [
      {
        es: 'Son lo mismo. mTLS es el nombre del certificado del balanceador.',
        en: 'They are the same. mTLS is the name of the load balancer certificate.',
      },
      {
        es: 'mTLS cifra más fuerte. Terminar TLS deja de usar HTTPS hacia el cliente.',
        en: 'mTLS encrypts more strongly. Terminating TLS stops using HTTPS toward the client.',
      },
    ],
    explanation: {
      es: 'Tras el balanceador, la app ya no ve el HTTPS del usuario. mTLS identifica a la máquina, no sustituye el login de la persona.',
      en: 'Behind the load balancer, the app no longer sees the user HTTPS. mTLS identifies the machine, it does not replace the person login.',
    },
  },
  {
    id: 'be-sec-19',
    topic: 'Entrada',
    prompt: {
      es: '¿Cómo te proteges de datos maliciosos en la entrada y en la salida?',
      en: 'How do you protect yourself from malicious data on input and on output?',
    },
    answer: {
      es: 'Valida y acota lo que entra. Al pintar en HTML, codifica la salida para que un texto no se ejecute como script. No fíes en quitar etiquetas a mano.',
      en: 'Validate and bound what comes in. When rendering HTML, encode the output so a text does not run as a script. Do not rely on stripping tags by hand.',
    },
    distractors: [
      {
        es: 'Basta un firewall. La aplicación puede concatenar y pintar tal cual.',
        en: 'A firewall is enough. The application can concatenate and render as is.',
      },
      {
        es: 'Codificar al guardar en la base. Así cualquier pantalla queda segura.',
        en: 'Encode when saving to the database. That way every screen is safe.',
      },
    ],
    explanation: {
      es: 'La codificación depende de dónde se pinta: HTML, un atributo o una consulta no se escapan igual. Guardar ya escapado rompe otros usos.',
      en: 'Encoding depends on where it is rendered: HTML, an attribute or a query are not escaped the same way. Storing it already escaped breaks other uses.',
    },
  },
  {
    id: 'be-sec-20',
    topic: 'Autorización',
    prompt: {
      es: '¿Por qué un id en la URL no basta para devolver el recurso?',
      en: 'Why is an id in the URL not enough to return the resource?',
    },
    answer: {
      es: 'Porque quien tenga un token válido puede probar otros ids. Hay que comprobar que ese usuario es el dueño, no solo que el UUID existe.',
      en: 'Because whoever has a valid token can try other ids. You must check that this user is the owner, not only that the UUID exists.',
    },
    distractors: [
      {
        es: 'Un UUID no se puede adivinar, así que la comprobación de dueño sobra.',
        en: 'A UUID cannot be guessed, so the owner check is unnecessary.',
      },
      {
        es: 'Si el JWT es válido, el usuario puede leer cualquier fila de esa tabla.',
        en: 'If the JWT is valid, the user can read any row of that table.',
      },
    ],
    explanation: {
      es: 'Es el fallo de objeto directo: cambias el id y ves el pedido de otra persona. El 404 o el 403 salen de esa comprobación.',
      en: 'It is the direct object failure: you change the id and see an order that belongs to another user. The 404 or the 403 comes from that check.',
    },
  },
];
