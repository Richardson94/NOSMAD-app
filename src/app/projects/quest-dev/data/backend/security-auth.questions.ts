import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_SECURITY_AUTH_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-sec-01',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Qué flujo OAuth debe usar una SPA y por qué el flujo implícito quedó obsoleto?',
      en: 'Which OAuth flow should a SPA use and why did the implicit flow become obsolete?',
    },
    answer: {
      es: 'Código de autorización con PKCE: la SPA envía un code_challenge, recibe un code y lo canjea en el token endpoint con el code_verifier; el implícito caducó porque el access_token viajaba en el fragmento de la URL.',
      en: 'Authorisation code with PKCE: the SPA sends a code_challenge, receives a code and redeems it at the token endpoint with the code_verifier; implicit died because the access_token travelled in the URL fragment.',
    },
    distractors: [
      {
        es: 'El implícito sigue siendo el flujo de las SPA porque no hay backend para guardar un client_secret, y PKCE exige un cliente confidencial.',
        en: 'Implicit remains the SPA flow because there is no backend to store a client_secret, and PKCE requires a confidential client.',
      },
      {
        es: 'El código de autorización sin PKCE basta en una SPA, porque el code es de un solo uso y el token nunca pasa por el navegador.',
        en: 'Authorisation code without PKCE is enough for a SPA, because the code is single use and the token never passes through the browser.',
      },
    ],
    explanation: {
      es: 'El flujo es authorize con code_challenge S256, redirección con code y POST al token endpoint con code_verifier; PKCE existe justo para clientes públicos que no pueden guardar un secreto. El implícito devolvía el access_token en el hash, filtrable por historial, Referer y logs, y OAuth 2.1 lo elimina. Sin PKCE un atacante que intercepte el code lo canjea él.',
      en: 'The flow is authorize with a S256 code_challenge, a redirect with a code and a POST to the token endpoint with the code_verifier; PKCE exists precisely for public clients that cannot store a secret. Implicit returned the access_token in the hash, leakable via history, Referer and logs, and OAuth 2.1 removes it. Without PKCE an attacker who intercepts the code redeems it themselves.',
    },
  },
  {
    id: 'be-sec-02',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Cuándo se usa el flujo de credenciales de cliente y qué representa el token resultante?',
      en: 'When is the client credentials flow used and what does the resulting token represent?',
    },
    answer: {
      es: 'Comunicación entre servicios: el cliente se autentica con su id y secreto en el token endpoint (grant_type=client_credentials) y obtiene un access_token de la aplicación, no de un usuario.',
      en: 'Service to service communication: the client authenticates with its id and secret at the token endpoint (grant_type=client_credentials) and obtains an application access_token, not a user token.',
    },
    distractors: [
      {
        es: 'Un microservicio reutiliza el refresh_token de un usuario técnico para emitir access_token con sub humano y poder auditar quién llamó.',
        en: 'A microservice reuses the refresh_token of a technical user to issue access_token values with a human sub so it can audit who called.',
      },
      {
        es: 'Cada servicio abre el flujo de código de autorización con una cuenta de servicio para que el token lleve claims de usuario y pase los Resource Servers.',
        en: 'Each service starts the authorisation code flow with a service account so the token carries user claims and passes Resource Servers.',
      },
    ],
    explanation: {
      es: 'No hay navegador ni resource owner: POST al token endpoint con client_id, client_secret y un scope de aplicación. El claim sub, si existe, identifica al cliente, no a una persona. Un refresh_token suele omitirse porque el servicio puede volver a autenticarse cuando quiera.',
      en: 'There is no browser and no resource owner: a POST to the token endpoint with client_id, client_secret and an application scope. The sub claim, if present, identifies the client, not a person. A refresh_token is usually omitted because the service can authenticate again whenever it wants.',
    },
  },
  {
    id: 'be-sec-03',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: 'En OIDC, ¿qué distingue el propósito del id_token del access_token?',
      en: 'In OIDC, what distinguishes the purpose of the id_token from that of the access_token?',
    },
    answer: {
      es: 'El id_token autentica al usuario ante el cliente (aud es el client_id); el access_token autoriza llamadas al Resource Server (aud es la API).',
      en: 'The id_token authenticates the user to the client (aud is the client_id); the access_token authorises calls to the Resource Server (aud is the API).',
    },
    distractors: [
      {
        es: 'Son JWT intercambiables: el Resource Server puede aceptar el id_token como Bearer porque ya demuestra la identidad.',
        en: 'They are interchangeable JWTs: the Resource Server may accept the id_token as Bearer because it already proves identity.',
      },
      {
        es: 'El access_token identifica al usuario en la SPA y el id_token es el que la API valida para conceder scopes.',
        en: 'The access_token identifies the user in the SPA and the id_token is what the API validates to grant scopes.',
      },
    ],
    explanation: {
      es: 'El id_token trae iss, sub, aud igual al client_id, nonce y a veces at_hash; lo consume la SPA o el BFF y no se envía a la API. El access_token viaja en Authorization Bearer y el JwtDecoder comprueba que aud coincida con el identificador de la API. Mezclarlos abre impersonación entre clientes.',
      en: 'The id_token carries iss, sub, aud equal to the client_id, nonce and sometimes at_hash; the SPA or BFF consumes it and it is not sent to the API. The access_token travels in Authorization Bearer and the JwtDecoder checks that aud matches the API identifier. Mixing them opens impersonation across clients.',
    },
  },
  {
    id: 'be-sec-04',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿En qué se diferencian los scopes de OAuth de los roles o authorities de la aplicación?',
      en: 'How do OAuth scopes differ from application roles or authorities?',
    },
    answer: {
      es: 'Un scope es un permiso que el usuario delega a un cliente concreto; un role o authority describe lo que el principal puede hacer dentro de la aplicación.',
      en: 'A scope is a permission the user delegates to a specific client; a role or authority describes what the principal can do inside the application.',
    },
    distractors: [
      {
        es: 'Al activar OAuth, los scopes sustituyen a los roles porque JwtAuthenticationConverter los convierte en authorities SCOPE_ y hasRole deja de usarse.',
        en: 'Once OAuth is on, scopes replace roles because JwtAuthenticationConverter turns them into SCOPE_ authorities and hasRole is no longer used.',
      },
      {
        es: 'Los roles viajan en el id_token y los scopes en el access_token, por eso una API solo debe inspeccionar scopes.',
        en: 'Roles travel in the id_token and scopes in the access_token, which is why an API should inspect scopes only.',
      },
    ],
    explanation: {
      es: 'Un cliente con scope payments.write no es ADMIN: el dueño le delegó un recorte de su poder. Spring mapea el claim scope o scp a GrantedAuthority con prefijo SCOPE_, evaluable con hasAuthority("SCOPE_payments.write"), mientras hasRole("ADMIN") busca ROLE_ADMIN. Son ejes distintos y suelen combinarse.',
      en: 'A client with scope payments.write is not ADMIN: the owner delegated a slice of their power. Spring maps the scope or scp claim to a GrantedAuthority with the SCOPE_ prefix, checked with hasAuthority("SCOPE_payments.write"), while hasRole("ADMIN") looks for ROLE_ADMIN. They are different axes and are often combined.',
    },
  },
  {
    id: 'be-sec-05',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Qué hay que validar en un JWT y en qué consiste el ataque de confusión de algoritmo?',
      en: 'What must be validated on a JWT and what is the algorithm confusion attack?',
    },
    answer: {
      es: 'La firma con las claves del emisor (rechazando alg none y sin fiarse del header), luego iss, aud y exp; la confusión cambia RS256 por HS256 para que el verificador use la clave pública RSA como secreto HMAC.',
      en: 'The signature with the issuer keys (rejecting alg none and not trusting the header), then iss, aud and exp; confusion swaps RS256 for HS256 so the verifier uses the RSA public key as the HMAC secret.',
    },
    distractors: [
      {
        es: 'Basta decodificar el payload, leer kid y alg, y descargar el JWKS desde cualquier URL que aparezca en el claim iss del propio token.',
        en: 'It is enough to decode the payload, read kid and alg, and download the JWKS from any URL that appears in the iss claim of the token itself.',
      },
      {
        es: 'Comprobar firma y exp es suficiente, porque iss y aud son informativos y solo sirven para telemetría.',
        en: 'Checking signature and exp is enough, because iss and aud are informational and only used for telemetry.',
      },
    ],
    explanation: {
      es: 'El JwtDecoder se configura con un jwk-set-uri de confianza, no con el header alg ni con un JWKS declarado dentro del token; después JwtIssuerValidator, audiencia y JwtTimestampValidator miran iss, aud y exp. El ataque funciona si el código elige el algoritmo según el header: el atacante firma HMAC con la PEM pública. Nunca se acepta alg none.',
      en: 'The JwtDecoder is configured with a trusted jwk-set-uri, not with the alg header or a JWKS declared inside the token; then JwtIssuerValidator, audience and JwtTimestampValidator check iss, aud and exp. The attack works if the code picks the algorithm from the header: the attacker HMAC-signs with the public PEM. alg none is never accepted.',
    },
  },
  {
    id: 'be-sec-06',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Qué diferencia un token opaco con introspección de un JWT autocontenido?',
      en: 'What is the difference between an opaque token with introspection and a self-contained JWT?',
    },
    answer: {
      es: 'El opaco es una referencia aleatoria que el Resource Server valida llamando al endpoint de introspección; el JWT lleva las claims firmadas y se verifica en local con la clave del emisor.',
      en: 'The opaque token is a random reference that the Resource Server validates by calling the introspection endpoint; the JWT carries signed claims and is verified locally with the issuer key.',
    },
    distractors: [
      {
        es: 'El token opaco no se puede revocar hasta que expire, mientras que un JWT se introspecciona en cada petición y por eso se puede apagar al instante.',
        en: 'The opaque token cannot be revoked until it expires, whereas a JWT is introspected on every request and can therefore be turned off instantly.',
      },
      {
        es: 'Introspeccionar un JWT es más rápido porque el payload ya viaja en el token, mientras que el opaco obliga a cachear un JWKS.',
        en: 'Introspecting a JWT is faster because the payload already travels in the token, whereas the opaque token forces you to cache a JWKS.',
      },
    ],
    explanation: {
      es: 'RFC 7662: POST al Authorization Server con el token y respuesta active=true más scopes; Spring usa OpaqueTokenIntrospector frente a NimbusJwtDecoder. El JWT evita la latencia de red pero no se apaga hasta exp salvo una denylist. El opaco se revoca en el servidor de autorización y la siguiente introspección ya lo marca inactivo.',
      en: 'RFC 7662: POST the token to the Authorization Server and get active=true plus scopes; Spring uses OpaqueTokenIntrospector versus NimbusJwtDecoder. The JWT avoids network latency but stays valid until exp unless a denylist exists. The opaque token is revoked at the authorisation server and the next introspection already marks it inactive.',
    },
  },
  {
    id: 'be-sec-07',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Qué es la rotación de refresh tokens y dónde deben almacenarse?',
      en: 'What is refresh token rotation and where should refresh tokens be stored?',
    },
    answer: {
      es: 'Cada renovación emite un refresh nuevo e invalida el anterior, detectando reuso; en una SPA no van a localStorage: cookie HttpOnly Secure SameSite vía BFF, o el backend confidencial los guarda hasheados.',
      en: 'Each renewal issues a new refresh and invalidates the previous one, detecting reuse; in a SPA they do not go in localStorage: an HttpOnly Secure SameSite cookie via a BFF, or the confidential backend stores them hashed.',
    },
    distractors: [
      {
        es: 'Guardarlos en localStorage permite renovar en silencio sin CSRF, porque un refresh_token no se envía solo como una cookie.',
        en: 'Storing them in localStorage allows silent renewal without CSRF, because a refresh_token is not sent automatically like a cookie.',
      },
      {
        es: 'Rotar significa acortar el access_token y conservar un único refresh de larga vida en sessionStorage.',
        en: 'Rotation means shortening the access_token and keeping a single long-lived refresh in sessionStorage.',
      },
    ],
    explanation: {
      es: 'Si un refresh robado se presenta, el servidor ve que esa familia ya se rotó y revoca toda la cadena. localStorage es legible por XSS, el vector típico, y sessionStorage no cambia ese problema en la pestaña. El patrón BFF deja el refresh en cookie HttpOnly y la SPA solo ve el access de corta vida.',
      en: 'If a stolen refresh is presented, the server sees that family was already rotated and revokes the whole chain. localStorage is readable by XSS, the typical vector, and sessionStorage does not change that problem in the tab. The BFF pattern keeps the refresh in an HttpOnly cookie and the SPA only sees the short-lived access token.',
    },
  },
  {
    id: 'be-sec-08',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Cómo se complementan una expiración corta del access_token y una lista de bloqueo para revocar?',
      en: 'How do a short access_token expiry and a block list for revocation complement each other?',
    },
    answer: {
      es: 'La vida corta limita la ventana tras un robo; una denylist por jti permite apagar un token antes de exp, a costa de consultar un almacén en cada petición.',
      en: 'The short lifetime limits the window after theft; a denylist by jti can turn a token off before exp, at the cost of querying a store on every request.',
    },
    distractors: [
      {
        es: 'Con exp de cinco minutos no hace falta revocación: al cerrar sesión el token ya no sirve.',
        en: 'With a five minute exp, revocation is unnecessary: after logout the token no longer works.',
      },
      {
        es: 'Basta denegar el sub del usuario: todos sus JWT comparten ese claim y no hace falta jti.',
        en: 'It is enough to deny the user sub: every JWT of that user shares that claim and jti is not needed.',
      },
    ],
    explanation: {
      es: 'Logout no borra los JWT ya emitidos; siguen válidos hasta exp. Una denylist guarda el claim jti hasta su exp. Bloquear solo sub cierra todas las sesiones del usuario, también las legítimas. Un OAuth2TokenValidator en el Resource Server puede consultar esa lista en cada petición.',
      en: 'Logout does not erase JWTs already issued; they stay valid until exp. A denylist stores the jti claim until its exp. Blocking only sub shuts down every session of that user, including legitimate ones. An OAuth2TokenValidator on the Resource Server can query that list on every request.',
    },
  },
  {
    id: 'be-sec-09',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Por qué las contraseñas se guardan con bcrypt o argon2 y no con SHA-256?',
      en: 'Why are passwords stored with bcrypt or argon2 and not with SHA-256?',
    },
    answer: {
      es: 'bcrypt y argon2 son funciones lentas, con sal y coste ajustable; SHA-256 es rápido y, incluso con sal, se parte por fuerza bruta con GPU.',
      en: 'bcrypt and argon2 are slow, salted, adjustable-cost functions; SHA-256 is fast and, even with a salt, is cracked by GPU brute force.',
    },
    distractors: [
      {
        es: 'SHA-256 con sal basta, porque la sal impide rainbow tables y el hash es de un solo sentido.',
        en: 'SHA-256 with a salt is enough, because the salt blocks rainbow tables and the hash is one way.',
      },
      {
        es: 'bcrypt está obsoleto: Spring Security 6 usa SHA-256 con un pepper en application.yml como DelegatingPasswordEncoder por defecto.',
        en: 'bcrypt is obsolete: Spring Security 6 defaults DelegatingPasswordEncoder to SHA-256 with a pepper in application.yml.',
      },
    ],
    explanation: {
      es: 'PasswordEncoder.encode y matches: el DelegatingPasswordEncoder por defecto usa el id {bcrypt}, y argon2 es la alternativa con coste de memoria. SHA-256 hashea miles de millones por segundo, así que un dump se descifra; la sal solo evita tablas precomputadas. Un pepper en el yaml se filtra con el repositorio y no sustituye a un KDF lento.',
      en: 'PasswordEncoder.encode and matches: the default DelegatingPasswordEncoder uses the {bcrypt} id, and argon2 is the memory-hard alternative. SHA-256 hashes billions per second, so a dump is cracked; the salt only prevents precomputed tables. A pepper in the yaml leaks with the repository and does not replace a slow KDF.',
    },
  },
  {
    id: 'be-sec-10',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Cómo se ordena la cadena de filtros de Spring Security 6 y dónde se inserta un filtro propio?',
      en: 'How is the Spring Security 6 filter chain ordered and where do you insert a custom filter?',
    },
    answer: {
      es: 'Los filtros corren en un orden fijo (SecurityContextHolderFilter, CorsFilter, CsrfFilter, autenticación, AuthorizationFilter); el propio se añade con addFilterBefore, addFilterAfter o addFilterAt respecto a una clase conocida.',
      en: 'Filters run in a fixed order (SecurityContextHolderFilter, CorsFilter, CsrfFilter, authentication, AuthorizationFilter); a custom one is added with addFilterBefore, addFilterAfter or addFilterAt relative to a known class.',
    },
    distractors: [
      {
        es: 'Un OncePerRequestFilter declarado @Component entra solo al final de la cadena de seguridad.',
        en: 'A OncePerRequestFilter declared as @Component is placed automatically at the end of the security chain.',
      },
      {
        es: 'En Spring Security 6 se sustituye la cadena extendiendo WebSecurityConfigurerAdapter y sobrescribiendo configure(HttpSecurity).',
        en: 'In Spring Security 6 the chain is replaced by extending WebSecurityConfigurerAdapter and overriding configure(HttpSecurity).',
      },
    ],
    explanation: {
      es: 'El bean SecurityFilterChain define http.addFilterBefore(filtro, BearerTokenAuthenticationFilter.class) o UsernamePasswordAuthenticationFilter.class. Un Filter @Component cae en la cadena de servlets, a menudo fuera de DelegatingFilterProxy, y no ve el SecurityContext. WebSecurityConfigurerAdapter se eliminó en la versión 6.',
      en: 'The SecurityFilterChain bean sets http.addFilterBefore(filter, BearerTokenAuthenticationFilter.class) or UsernamePasswordAuthenticationFilter.class. A @Component Filter lands in the servlet chain, often outside DelegatingFilterProxy, and does not see the SecurityContext. WebSecurityConfigurerAdapter was removed in version 6.',
    },
  },
  {
    id: 'be-sec-11',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Cómo propaga SecurityContextHolder el Authentication a hilos asíncronos?',
      en: 'How does SecurityContextHolder propagate the Authentication to asynchronous threads?',
    },
    answer: {
      es: 'Por defecto usa ThreadLocal y el worker de @Async nace vacío; hay que envolver el executor con DelegatingSecurityContextAsyncTaskExecutor o el Runnable equivalente.',
      en: 'By default it uses ThreadLocal and the @Async worker starts empty; the executor must be wrapped with DelegatingSecurityContextAsyncTaskExecutor or the equivalent Runnable.',
    },
    distractors: [
      {
        es: 'MODE_INHERITABLETHREADLOCAL es el ajuste de producción para pools, porque cada worker es un hilo hijo y hereda una copia limpia.',
        en: 'MODE_INHERITABLETHREADLOCAL is the production setting for pools, because each worker is a child thread and inherits a clean copy.',
      },
      {
        es: 'Con JWT sin sesión no hay nada que copiar: el hilo asíncrono relée el Bearer desde RequestContextHolder.',
        en: 'With a sessionless JWT there is nothing to copy: the async thread rereads the Bearer from RequestContextHolder.',
      },
    ],
    explanation: {
      es: 'SecurityContextHolderFilter carga el Authentication en el hilo de la petición y lo limpia en el finally. MODE_INHERITABLETHREADLOCAL parece la solución, pero los pools reutilizan hilos y filtran el contexto al siguiente trabajo. DelegatingSecurityContextRunnable copia el contexto al entrar a la tarea y lo restaura al salir. En WebFlux el análogo es ReactiveSecurityContextHolder, no el ThreadLocal.',
      en: 'SecurityContextHolderFilter loads the Authentication on the request thread and clears it in the finally block. MODE_INHERITABLETHREADLOCAL looks like the fix, but pools reuse threads and leak the context into the next job. DelegatingSecurityContextRunnable copies the context when the task starts and restores it on exit. In WebFlux the analogue is ReactiveSecurityContextHolder, not ThreadLocal.',
    },
  },
  {
    id: 'be-sec-12',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Qué distingue @PreAuthorize de @Secured y de @RolesAllowed?',
      en: 'What distinguishes @PreAuthorize from @Secured and from @RolesAllowed?',
    },
    answer: {
      es: '@PreAuthorize evalúa SpEL (hasRole, hasPermission, beans y parámetros del método); @Secured y @RolesAllowed (JSR-250) solo aceptan nombres de rol, sin expresiones.',
      en: '@PreAuthorize evaluates SpEL (hasRole, hasPermission, beans and method parameters); @Secured and @RolesAllowed (JSR-250) only accept role names, with no expressions.',
    },
    distractors: [
      {
        es: '@Secured es el que entiende SpEL y hasPermission contra un ACL; @PreAuthorize solo comprueba un rol literal.',
        en: '@Secured is the one that understands SpEL and hasPermission against an ACL; @PreAuthorize only checks a literal role.',
      },
      {
        es: '@RolesAllowed se aplica en la cadena de filtros antes del controlador, y @PreAuthorize se ejecuta después del método para poder filtrar el resultado.',
        en: '@RolesAllowed runs in the filter chain before the controller, and @PreAuthorize runs after the method so it can filter the result.',
      },
    ],
    explanation: {
      es: 'Hace falta @EnableMethodSecurity. @PreAuthorize("hasRole(ADMIN) and #id == principal.id") corre como advisor AOP antes del método. @PostAuthorize y @PostFilter sí miran el retorno. @Secured("ROLE_ADMIN") no admite SpEL, y @RolesAllowed("ADMIN") es el estándar JSR-250 con el mismo límite, no un filtro HTTP.',
      en: '@EnableMethodSecurity is required. @PreAuthorize("hasRole(ADMIN) and #id == principal.id") runs as an AOP advisor before the method. @PostAuthorize and @PostFilter are the ones that look at the return value. @Secured("ROLE_ADMIN") does not accept SpEL, and @RolesAllowed("ADMIN") is the JSR-250 standard with the same limit, not an HTTP filter.',
    },
  },
  {
    id: 'be-sec-13',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Cuál es la diferencia entre hasRole y hasAuthority y qué papel juega el prefijo ROLE_?',
      en: 'What is the difference between hasRole and hasAuthority and what role does the ROLE_ prefix play?',
    },
    answer: {
      es: 'hasRole("ADMIN") busca la authority ROLE_ADMIN porque añade el prefijo; hasAuthority("ADMIN") exige exactamente ADMIN, sin ROLE_.',
      en: 'hasRole("ADMIN") looks for the ROLE_ADMIN authority because it adds the prefix; hasAuthority("ADMIN") requires exactly ADMIN, with no ROLE_.',
    },
    distractors: [
      {
        es: 'Son alias: hasRole("ADMIN") y hasAuthority("ADMIN") coinciden las dos con ROLE_ADMIN.',
        en: 'They are aliases: hasRole("ADMIN") and hasAuthority("ADMIN") both match ROLE_ADMIN.',
      },
      {
        es: 'hasRole recorta el prefijo del token, así que los authorities se guardan como ADMIN y se llama hasRole("ROLE_ADMIN").',
        en: 'hasRole strips the prefix from the token, so authorities are stored as ADMIN and you call hasRole("ROLE_ADMIN").',
      },
    ],
    explanation: {
      es: 'DefaultMethodSecurityExpressionHandler usa defaultRolePrefix ROLE_. Si el JWT trae ROLE_ADMIN, hasRole("ADMIN") coincide y hasAuthority("ADMIN") no. JwtGrantedAuthoritiesConverter usa SCOPE_ para los scopes: hasRole no aplica ahí, hay que usar hasAuthority("SCOPE_read"). Invertir el prefijo deja las reglas en silencio y deniega todo.',
      en: 'DefaultMethodSecurityExpressionHandler uses defaultRolePrefix ROLE_. If the JWT carries ROLE_ADMIN, hasRole("ADMIN") matches and hasAuthority("ADMIN") does not. JwtGrantedAuthoritiesConverter uses SCOPE_ for scopes: hasRole does not apply there, you must use hasAuthority("SCOPE_read"). Reversing the prefix leaves the rules silent and denies everything.',
    },
  },
  {
    id: 'be-sec-14',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Cómo se configura CORS junto a Spring Security y cuál es el problema de orden típico?',
      en: 'How is CORS configured together with Spring Security and what is the typical ordering problem?',
    },
    answer: {
      es: 'Hay que activar http.cors para que CorsFilter viva dentro de la cadena de seguridad antes de autenticar; si no, el preflight OPTIONS llega sin Bearer o cookie y responde 401.',
      en: 'http.cors must be enabled so CorsFilter lives inside the security chain before authentication; otherwise the OPTIONS preflight arrives without a Bearer or cookie and returns 401.',
    },
    distractors: [
      {
        es: 'Un @CrossOrigin en el controlador basta, porque CORS lo resuelve MVC después de que la seguridad ya permitió la petición.',
        en: 'A @CrossOrigin on the controller is enough, because MVC handles CORS after security has already allowed the request.',
      },
      {
        es: 'CORS solo importa al navegador, así que la API lo desactiva en Spring Security y el reverse proxy añade Access-Control-Allow-Origin con asterisco.',
        en: 'CORS only matters to the browser, so the API disables it in Spring Security and the reverse proxy adds Access-Control-Allow-Origin with a wildcard.',
      },
    ],
    explanation: {
      es: 'El preflight OPTIONS no lleva Authorization; si AuthorizationFilter corre antes, responde 401 y el navegador ni intenta el POST. cors(Customizer) coloca CorsFilter en el hueco correcto y un bean CorsConfigurationSource aporta orígenes, métodos y allowCredentials. @CrossOrigin llega tarde, y el asterisco no puede combinarse con credenciales.',
      en: 'The OPTIONS preflight carries no Authorization; if AuthorizationFilter runs first it returns 401 and the browser never attempts the POST. cors(Customizer) places CorsFilter in the right slot and a CorsConfigurationSource bean supplies origins, methods and allowCredentials. @CrossOrigin arrives too late, and a wildcard cannot be combined with credentials.',
    },
  },
  {
    id: 'be-sec-15',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Por qué hace falta protección CSRF cuando la sesión vive en una cookie de Spring?',
      en: 'Why is CSRF protection required when the session lives in a Spring cookie?',
    },
    answer: {
      es: 'El navegador adjunta solo la cookie JSESSIONID o SESSION a cualquier petición hacia el origen, así que un sitio ajeno puede forzar un cambio de estado; CsrfFilter exige un token que JavaScript copie a una cabecera.',
      en: 'The browser attaches the JSESSIONID or SESSION cookie alone to any request toward the origin, so a third-party site can force a state change; CsrfFilter requires a token that JavaScript copies into a header.',
    },
    distractors: [
      {
        es: 'SameSite=Lax en la cookie de sesión deja CSRF obsoleto, por eso csrf.disable() es el default de Spring Security 6 con sesión en cookie.',
        en: 'SameSite=Lax on the session cookie makes CSRF obsolete, which is why csrf.disable() is the Spring Security 6 default with a cookie session.',
      },
      {
        es: 'CSRF solo aplica a REST con JWT en localStorage; una cookie de sesión ya está protegida por la política de mismo origen.',
        en: 'CSRF only applies to REST with a JWT in localStorage; a session cookie is already protected by the same-origin policy.',
      },
    ],
    explanation: {
      es: 'CsrfFilter compara el token de la petición con el de la sesión; en una SPA se usa CookieCsrfTokenRepository (cookie no HttpOnly) y XorCsrfTokenRequestAttributeHandler, y el cliente envía X-XSRF-TOKEN. SameSite=Lax ayuda pero no cubre todos los navegadores ni los GET que cambian estado. La política de mismo origen no impide enviar la cookie, solo leer la respuesta.',
      en: 'CsrfFilter compares the request token with the session one; a SPA uses CookieCsrfTokenRepository (non HttpOnly cookie) and XorCsrfTokenRequestAttributeHandler, and the client sends X-XSRF-TOKEN. SameSite=Lax helps but does not cover every browser or state-changing GET. The same-origin policy does not prevent sending the cookie, only reading the response.',
    },
  },
  {
    id: 'be-sec-16',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Cómo se evita la fijación de sesión y cómo se gestionan las sesiones concurrentes?',
      en: 'How is session fixation prevented and how are concurrent sessions managed?',
    },
    answer: {
      es: 'Tras autenticar, Spring cambia el id de sesión (changeSessionId) para que un JSESSIONID plantado no sirva; las concurrentes se limitan con SessionRegistry y maximumSessions, expirando la anterior o rechazando la nueva.',
      en: 'After authentication Spring changes the session id (changeSessionId) so a planted JSESSIONID is useless; concurrent ones are limited with SessionRegistry and maximumSessions, expiring the previous or rejecting the new login.',
    },
    distractors: [
      {
        es: 'La fijación se resuelve marcando la cookie HttpOnly, porque entonces el atacante no puede leer el id que inyectó.',
        en: 'Fixation is solved by marking the cookie HttpOnly, because then the attacker cannot read the id they injected.',
      },
      {
        es: 'El control de sesiones concurrentes es una defensa CSRF que invalida el token de la pestaña previa cuando la segunda se autentica.',
        en: 'Concurrent session control is a CSRF defence that invalidates the previous tab token when the second one authenticates.',
      },
    ],
    explanation: {
      es: 'SessionFixationProtectionStrategy rota el id en el login: el atacante ya conoce el valor que plantó, no necesita leerlo, así que HttpOnly no basta. maximumSessions(1) usa SessionRegistry; sin un bean HttpSessionEventPublisher Spring no ve los destroy y el registro se pudre. expiredUrl o maxSessionsPreventsLogin definen si se expulsa la sesión vieja o se niega la nueva.',
      en: 'SessionFixationProtectionStrategy rotates the id at login: the attacker already knows the planted value and does not need to read it, so HttpOnly is not enough. maximumSessions(1) uses SessionRegistry; without an HttpSessionEventPublisher bean Spring misses destroy events and the registry rots. expiredUrl or maxSessionsPreventsLogin decide whether the old session is kicked or the new login is denied.',
    },
  },
  {
    id: 'be-sec-17',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Cómo se gestionan los secretos: variables de entorno frente a una bóveda, y qué aporta el cifrado en reposo?',
      en: 'How should secrets be managed: environment variables versus a vault, and what does encryption at rest add?',
    },
    answer: {
      es: 'Las variables de entorno evitan el git pero se filtran en dumps, /proc y logs de CI; una bóveda emite credenciales de corta vida y audita el acceso. El cifrado en reposo protege tokens y claves en disco y copias.',
      en: 'Environment variables keep secrets out of git but leak in dumps, /proc and CI logs; a vault issues short-lived credentials and audits access. Encryption at rest protects tokens and keys on disk and backups.',
    },
    distractors: [
      {
        es: 'Cifrar application.yml con {cipher} basta, porque Jasypt guarda los valores y la clave puede vivir en el mismo repositorio en un perfil secret.',
        en: 'Encrypting application.yml with {cipher} is enough, because Jasypt stores the values and the key may live in the same repository under a secret profile.',
      },
      {
        es: 'Un Secret de Kubernetes equivale a una bóveda: va cifrado, se rota solo y nunca se monta como variable de entorno.',
        en: 'A Kubernetes Secret equals a vault: it is encrypted, rotated automatically and never mounted as an environment variable.',
      },
    ],
    explanation: {
      es: 'Spring Cloud Vault o un gestor (AWS Secrets Manager) se importan con spring.config.import y rotan client_secret y claves JWT. Los Secrets de Kubernetes son base64 en etcd y casi siempre se inyectan como env. El cifrado en reposo usa una data key de un KMS (sobre) y no sustituye a TLS en tránsito.',
      en: 'Spring Cloud Vault or a manager (AWS Secrets Manager) is imported with spring.config.import and rotates client_secret and JWT keys. Kubernetes Secrets are base64 in etcd and are almost always injected as env. Encryption at rest uses a KMS data key (envelope) and does not replace TLS in transit.',
    },
  },
  {
    id: 'be-sec-18',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Qué implica terminar TLS en el borde y cuándo hace falta mTLS entre servicios internos?',
      en: 'What does terminating TLS at the edge imply and when is mTLS needed between internal services?',
    },
    answer: {
      es: 'El proxy descifra y reenvía HTTP hacia adentro, así que hay que confiar en cabeceras Forwarded; mTLS hace que cada servicio presente un certificado de cliente y la identidad quede atada al canal, no solo a un Bearer.',
      en: 'The proxy decrypts and forwards HTTP inward, so Forwarded headers must be trusted; mTLS has each service present a client certificate and binds identity to the channel, not only to a Bearer token.',
    },
    distractors: [
      {
        es: 'Terminar TLS en el balanceador basta para considerar confidencial el tráfico interno, de modo que mTLS no aporta nada detrás de la VPC.',
        en: 'Terminating TLS at the load balancer is enough to treat internal traffic as confidential, so mTLS adds nothing behind the VPC.',
      },
      {
        es: 'mTLS sustituye a OAuth: si el certificado de cliente es válido, el Resource Server debe saltarse la validación del JWT para no autenticar dos veces.',
        en: 'mTLS replaces OAuth: if the client certificate is valid, the Resource Server should skip JWT validation to avoid authenticating twice.',
      },
    ],
    explanation: {
      es: 'Sin mTLS el tráfico este-oeste es legible en la red interna. server.ssl.client-auth=need exige el certificado y X509AuthenticationFilter puede mapear el CN a un principal. Combinar mTLS (canal) con JWT (aplicación) es defensa en profundidad. Hay que activar ForwardedHeaderFilter o X-Forwarded-Proto; si no, las cookies Secure y los redirects se rompen tras el proxy.',
      en: 'Without mTLS east-west traffic is readable on the internal network. server.ssl.client-auth=need demands the certificate and X509AuthenticationFilter can map the CN to a principal. Combining mTLS (channel) with JWT (application) is defence in depth. ForwardedHeaderFilter or X-Forwarded-Proto must be enabled; otherwise Secure cookies and redirects break behind the proxy.',
    },
  },
  {
    id: 'be-sec-19',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: '¿Cuándo se valida la entrada y cuándo se codifica la salida según el tipo de inyección?',
      en: 'When do you validate input and when do you encode output, depending on the injection type?',
    },
    answer: {
      es: 'La entrada se restringe (tipo, lista blanca, SQL parametrizado) para no alterar al intérprete de datos; la salida se codifica según el contexto (HTML, atributo, JS, URL) para cortar XSS. Codificar al guardar no para SQL; @NotBlank no para XSS.',
      en: 'Input is constrained (type, allow list, parameterised SQL) so the data interpreter is not altered; output is encoded for the context (HTML, attribute, JS, URL) to stop XSS. Encoding on save does not stop SQL; @NotBlank does not stop XSS.',
    },
    distractors: [
      {
        es: 'Codificar la entrada a entidades HTML al persistir protege a la vez contra inyección SQL y contra XSS.',
        en: 'Encoding input as HTML entities on persist protects against both SQL injection and XSS at once.',
      },
      {
        es: 'Bean Validation con @NotBlank rechaza comillas y ángulos, así que las inyecciones quedan cubiertas.',
        en: 'Bean Validation with @NotBlank rejects quotes and angle brackets, so injection is covered.',
      },
    ],
    explanation: {
      es: 'PreparedStatement o parámetros con nombre separan código y dato en SQL; HtmlUtils o el autoescape de la plantilla codifican al renderizar. El XSS almacenado se corrige en la salida, no en la base. La inyección de comandos pide una lista blanca de argumentos, no encoding. Validar y codificar se complementan; ninguno sustituye al otro.',
      en: 'PreparedStatement or named parameters separate code from data in SQL; HtmlUtils or template autoescape encode at render time. Stored XSS is fixed on the way out, not in the database. Command injection needs an allow list of arguments, not encoding. Validation and encoding complement each other; neither replaces the other.',
    },
  },
  {
    id: 'be-sec-20',
    topic: 'Autenticacion y seguridad',
    prompt: {
      es: 'En el control de acceso roto de OWASP, ¿qué es una referencia directa a objetos (IDOR) y cómo se evita?',
      en: 'In OWASP broken access control, what is an insecure direct object reference (IDOR) and how is it prevented?',
    },
    answer: {
      es: 'La API confía en un id que envía el cliente (GET /orders/123) sin comprobar que el principal es dueño de 123; hay que filtrar por el usuario en la consulta o con @PreAuthorize sobre el dueño.',
      en: 'The API trusts an id the client sends (GET /orders/123) without checking that the principal owns 123; the query must filter by the user or @PreAuthorize must check the owner.',
    },
    distractors: [
      {
        es: 'El IDOR se cierra cambiando enteros secuenciales por UUID: si el id no se adivina, el fallo de autorización desaparece.',
        en: 'IDOR is closed by replacing sequential integers with UUIDs: if the id cannot be guessed, the authorisation flaw disappears.',
      },
      {
        es: 'Si el endpoint exige un JWT válido, el control de acceso no puede romperse porque el Resource Server ya autenticó al llamante.',
        en: 'If the endpoint requires a valid JWT, access control cannot break because the Resource Server already authenticated the caller.',
      },
    ],
    explanation: {
      es: 'OWASP A01: autenticar no es autorizar. Un usuario cambia el id y lee el recurso de otro (escalada horizontal). Un UUID oculta pero no autoriza. La defensa es @PreAuthorize("#order.ownerId == authentication.name") o un filtro WHERE owner_id = principal en cada petición, también fuera de la UI que escondía el botón.',
      en: 'OWASP A01: authentication is not authorisation. A user changes the id and reads someone else resource (horizontal escalation). A UUID hides but does not authorise. The defence is @PreAuthorize("#order.ownerId == authentication.name") or a WHERE owner_id = principal filter on every request, including entry points outside the UI that hid the button.',
    },
  },
];
