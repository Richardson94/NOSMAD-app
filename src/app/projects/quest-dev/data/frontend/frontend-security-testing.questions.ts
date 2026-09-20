import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_SECURITY_TESTING_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-sec-01',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Qué distingue al XSS basado en DOM del almacenado y del reflejado?',
      en: 'What distinguishes DOM-based XSS from stored and reflected XSS?',
    },
    answer: {
      es: 'Que el payload nunca forma parte de la respuesta del servidor: es el propio JavaScript del cliente quien lo lee de una fuente como la URL y lo escribe en un sink del DOM.',
      en: 'The payload never becomes part of the server response: the client JavaScript itself reads it from a source such as the URL and writes it into a DOM sink.',
    },
    distractors: [
      {
        es: 'Que el payload viaja en un parámetro de la petición y el servidor lo devuelve incrustado en el HTML de esa única respuesta, afectando solo a quien abrió el enlace.',
        en: 'The payload travels in a request parameter and the server returns it embedded in the HTML of that single response, affecting only whoever opened the link.',
      },
      {
        es: 'Que el payload queda guardado en la base de datos y el servidor lo sirve después a todos los visitantes que abran la página afectada.',
        en: 'The payload is saved in the database and the server later serves it to every visitor who opens the affected page.',
      },
    ],
    explanation: {
      es: 'El XSS basado en DOM ocurre por completo en el navegador, por ejemplo leyendo location.hash y asignándolo a innerHTML; el fragmento posterior a la almohadilla ni siquiera se envía al servidor, así que no aparece en los logs ni lo detecta un WAF. Las dos opciones descartadas describen con exactitud el XSS reflejado y el almacenado: son ciertas, pero de los otros dos tipos.',
      en: 'DOM-based XSS happens entirely in the browser, for example reading location.hash and assigning it to innerHTML; the fragment after the hash is not even sent to the server, so it never appears in logs and a WAF cannot see it. The two rejected options describe exactly reflected and stored XSS: they are true, but about the other two types.',
    },
  },
  {
    id: 'fe-sec-02',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Qué implica marcar un valor con DomSanitizer.bypassSecurityTrustHtml antes de asignarlo a [innerHTML]?',
      en: 'What does marking a value with DomSanitizer.bypassSecurityTrustHtml before assigning it to [innerHTML] imply?',
    },
    answer: {
      es: 'Que Angular deja de sanear ese valor y la responsabilidad de garantizar que el HTML es seguro pasa por completo al desarrollador.',
      en: 'Angular stops sanitising that value and the responsibility of guaranteeing that the HTML is safe moves entirely to the developer.',
    },
    distractors: [
      {
        es: 'Que Angular aplica una lista permitida más amplia, que admite atributos y estilos personalizados pero sigue eliminando los manejadores de eventos peligrosos.',
        en: 'Angular applies a wider allow list that accepts custom attributes and styles but still removes dangerous event handlers.',
      },
      {
        es: 'Que el riesgo es menor de lo que parece, porque el HTML insertado con innerHTML no ejecuta las etiquetas script que contenga.',
        en: 'The risk is smaller than it looks, because HTML inserted with innerHTML does not execute any script tags it contains.',
      },
    ],
    explanation: {
      es: 'El bypass devuelve un SafeHtml que Angular acepta tal cual en el contexto SecurityContext.HTML, sin filtrar nada: no existe ninguna lista permitida intermedia. Es cierto que innerHTML no ejecuta etiquetas script, y por eso esa opción tienta, pero un atributo como onerror de una imagen rota sí ejecuta código, que es justo lo que el saneamiento por defecto habría eliminado.',
      en: 'The bypass returns a SafeHtml value that Angular accepts as is in the SecurityContext.HTML context, filtering nothing: there is no intermediate allow list. It is true that innerHTML does not execute script tags, which is why that option tempts, but an attribute such as onerror on a broken image does run code, which is exactly what the default sanitiser would have stripped.',
    },
  },
  {
    id: 'fe-sec-03',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Qué aporta un nonce en una Content Security Policy y por qué unsafe-inline la debilita?',
      en: 'What does a nonce add to a Content Security Policy and why does unsafe-inline weaken it?',
    },
    answer: {
      es: 'El nonce autoriza únicamente los scripts en línea que llevan ese valor aleatorio generado por respuesta, mientras que unsafe-inline autoriza cualquier script en línea y anula la defensa contra XSS.',
      en: 'The nonce authorises only the inline scripts carrying that random value generated per response, while unsafe-inline authorises any inline script and cancels the defence against XSS.',
    },
    distractors: [
      {
        es: 'El nonce es un resumen criptográfico del contenido del script que el navegador recalcula para comprobar que el fichero no fue alterado en tránsito por un intermediario.',
        en: 'The nonce is a cryptographic digest of the script content that the browser recomputes to check the file was not altered in transit by an intermediary.',
      },
      {
        es: 'unsafe-inline afecta solo a los estilos en línea, porque los scripts en línea ya quedan bloqueados de forma incondicional por la directiva default-src.',
        en: 'unsafe-inline affects only inline styles, because inline scripts are already unconditionally blocked by the default-src directive.',
      },
    ],
    explanation: {
      es: 'El valor viaja en la cabecera Content-Security-Policy dentro de script-src y debe ser impredecible y distinto en cada respuesta; si un atacante inyecta un script, no puede adivinar el nonce y el navegador lo bloquea. Lo que describe la primera opción descartada es Subresource Integrity con el atributo integrity, otro mecanismo real; y en CSP nivel 3 la presencia de un nonce hace que unsafe-inline se ignore, prueba de que sí aplica a los scripts.',
      en: 'The value travels in the Content-Security-Policy header inside script-src and must be unpredictable and different on every response; if an attacker injects a script, they cannot guess the nonce and the browser blocks it. The first rejected option describes Subresource Integrity with the integrity attribute, a different real mechanism; and in CSP level 3 the presence of a nonce makes unsafe-inline be ignored, proving it does apply to scripts.',
    },
  },
  {
    id: 'fe-sec-04',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Quién aplica realmente CORS y para qué sirve la petición de preflight?',
      en: 'Who actually enforces CORS and what is the preflight request for?',
    },
    answer: {
      es: 'Lo aplica el navegador, que decide si entrega la respuesta al código de la página; el preflight con OPTIONS consulta antes si el servidor acepta ese método y esas cabeceras.',
      en: 'The browser enforces it, deciding whether to hand the response to the page code; the preflight OPTIONS request asks in advance whether the server accepts that method and those headers.',
    },
    distractors: [
      {
        es: 'Lo aplica el servidor, que rechaza con 403 toda petición cuyo Origin no esté en su lista permitida; el preflight sirve para negociar si se envían las cookies.',
        en: 'The server enforces it, rejecting with 403 every request whose Origin is not in its allow list; the preflight is used to negotiate whether cookies are sent.',
      },
      {
        es: 'Es una protección del backend para que ningún otro dominio consuma la API sin permiso; el preflight valida el token de sesión antes de aceptar el cuerpo de la petición.',
        en: 'It is a backend protection so no other domain can consume the API without permission; the preflight validates the session token before accepting the request body.',
      },
    ],
    explanation: {
      es: 'El servidor solo publica cabeceras como Access-Control-Allow-Origin; quien bloquea la lectura de la respuesta es el navegador, por eso la misma petición hecha con curl o Postman funciona sin problema y CORS no protege la API. El preflight se dispara cuando la petición no es simple, por ejemplo con PUT o con una cabecera Authorization, y viaja con Access-Control-Request-Method; el envío de cookies depende de withCredentials y de Access-Control-Allow-Credentials, no del propio preflight.',
      en: 'The server only publishes headers such as Access-Control-Allow-Origin; the one blocking the response read is the browser, which is why the same request issued with curl or Postman works fine and CORS does not protect the API. The preflight fires when the request is not simple, for example with PUT or an Authorization header, and carries Access-Control-Request-Method; sending cookies depends on withCredentials and Access-Control-Allow-Credentials, not on the preflight itself.',
    },
  },
  {
    id: 'fe-sec-05',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Qué protege cada uno de los atributos de cookie HttpOnly, Secure y SameSite?',
      en: 'What does each of the cookie attributes HttpOnly, Secure and SameSite protect against?',
    },
    answer: {
      es: 'HttpOnly impide que el JavaScript de la página lea la cookie, Secure impide que se envíe fuera de HTTPS y SameSite limita su envío en peticiones que nacen de otro sitio.',
      en: 'HttpOnly prevents page JavaScript from reading the cookie, Secure prevents it from being sent outside HTTPS, and SameSite limits sending it on requests originated by another site.',
    },
    distractors: [
      {
        es: 'HttpOnly obliga a que la cookie viaje solo por HTTP sin cifrar, Secure la guarda cifrada en el almacenamiento del navegador y SameSite la ata al dominio que la emitió.',
        en: 'HttpOnly forces the cookie to travel only over plain HTTP, Secure stores it encrypted in browser storage, and SameSite binds it to the domain that issued it.',
      },
      {
        es: 'SameSite con valor Strict es la defensa contra XSS porque bloquea los scripts de terceros, mientras que HttpOnly es la defensa contra CSRF porque exige una cabecera adicional.',
        en: 'SameSite with the Strict value is the defence against XSS because it blocks third party scripts, while HttpOnly is the defence against CSRF because it requires an extra header.',
      },
    ],
    explanation: {
      es: 'Con HttpOnly la cookie desaparece de document.cookie, así que un XSS no puede exfiltrarla; Secure evita que un atacante en la red la capture en texto plano, y SameSite mitiga CSRF porque la cookie no acompaña a las peticiones cruzadas. La segunda opción intercambia justo los papeles: SameSite ataca el CSRF y HttpOnly el robo por XSS; además los navegadores modernos aplican SameSite igual a Lax por defecto y exigen Secure cuando se declara SameSite igual a None.',
      en: 'With HttpOnly the cookie disappears from document.cookie, so an XSS cannot exfiltrate it; Secure stops a network attacker from capturing it in clear text, and SameSite mitigates CSRF because the cookie does not accompany cross site requests. The second option swaps exactly those roles: SameSite targets CSRF and HttpOnly targets XSS theft; modern browsers also default SameSite to Lax and require Secure when SameSite is set to None.',
    },
  },
  {
    id: 'fe-sec-06',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Cuál es el intercambio real entre guardar el token en localStorage y guardarlo en una cookie?',
      en: 'What is the real trade-off between storing the token in localStorage and storing it in a cookie?',
    },
    answer: {
      es: 'El token en localStorage es legible por cualquier script y un XSS puede exfiltrarlo para reutilizarlo fuera del navegador; la cookie HttpOnly no es legible pero se envía sola y por eso obliga a defenderse del CSRF.',
      en: 'A token in localStorage is readable by any script and an XSS can exfiltrate it to reuse it outside the browser; an HttpOnly cookie is not readable but is sent automatically, which forces you to defend against CSRF.',
    },
    distractors: [
      {
        es: 'El token en localStorage está protegido por la política del mismo origen, así que ningún script ajeno lo alcanza, y la cookie queda a salvo del CSRF gracias al atributo Secure.',
        en: 'A token in localStorage is protected by the same origin policy, so no foreign script reaches it, and the cookie is safe from CSRF thanks to the Secure attribute.',
      },
      {
        es: 'Ambas opciones tienen exactamente el mismo riesgo, porque un XSS puede lanzar peticiones autenticadas en los dos casos; la elección es solo una cuestión de comodidad.',
        en: 'Both options carry exactly the same risk, because an XSS can issue authenticated requests in either case; the choice is only a matter of convenience.',
      },
    ],
    explanation: {
      es: 'La diferencia clave es la exfiltración: con localStorage el atacante se lleva el token y lo usa desde su propia máquina hasta que expire, mientras que con HttpOnly solo puede actuar desde el navegador de la víctima. El mismo origen no ayuda frente al XSS, porque el script inyectado se ejecuta en ese origen, y quien mitiga el CSRF es SameSite o un token antifalsificación, nunca Secure.',
      en: 'The key difference is exfiltration: with localStorage the attacker takes the token away and uses it from their own machine until it expires, while with HttpOnly they can only act from the browser of the victim. The same origin policy does not help against XSS, because the injected script runs in that origin, and what mitigates CSRF is SameSite or an antiforgery token, never Secure.',
    },
  },
  {
    id: 'fe-sec-07',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Cómo se evita una redirección abierta al usar un parámetro de URL de retorno tras el login?',
      en: 'How do you avoid an open redirect when using a return URL parameter after login?',
    },
    answer: {
      es: 'Aceptando solo rutas relativas propias o destinos de una lista permitida, y descartando cualquier valor con esquema o con doble barra inicial.',
      en: 'Accepting only own relative paths or destinations from an allow list, and discarding any value with a scheme or with a leading double slash.',
    },
    distractors: [
      {
        es: 'Codificando el valor con encodeURIComponent antes de ponerlo en el parámetro, de modo que no pueda interpretarse como una URL absoluta hacia otro dominio.',
        en: 'Encoding the value with encodeURIComponent before placing it in the parameter, so it cannot be interpreted as an absolute URL to another domain.',
      },
      {
        es: 'Comprobando con startsWith que la URL empieza por el dominio propio, lo que descarta de raíz cualquier destino externo antes de navegar.',
        en: 'Checking with startsWith that the URL begins with the own domain, which rules out any external destination before navigating.',
      },
    ],
    explanation: {
      es: 'Lo único fiable es no confiar en el valor recibido: si es una ruta relativa se pasa a Router.navigateByUrl y si no, se cae a la ruta por defecto. Codificar protege la construcción de la URL, pero al decodificarla sigue apuntando al dominio del atacante; y el prefijo con startsWith se rompe con dominios como midominio.com.atacante.com o con un valor que empiece por dos barras, que el navegador interpreta como protocolo relativo.',
      en: 'The only reliable approach is not trusting the received value: if it is a relative path it goes to Router.navigateByUrl, otherwise it falls back to the default route. Encoding protects URL construction, but once decoded it still points at the attacker domain; and the startsWith prefix check breaks with domains such as mydomain.com.attacker.com or with a value starting with two slashes, which the browser reads as protocol relative.',
    },
  },
  {
    id: 'fe-sec-08',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Cuál es la forma correcta de protegerse del clickjacking?',
      en: 'What is the correct way to protect against clickjacking?',
    },
    answer: {
      es: 'Declarar la directiva frame-ancestors de Content-Security-Policy para controlar quién puede embeber la página, con X-Frame-Options como respaldo para navegadores antiguos.',
      en: 'Declaring the Content-Security-Policy frame-ancestors directive to control who can embed the page, with X-Frame-Options as a fallback for old browsers.',
    },
    distractors: [
      {
        es: 'Enviar X-Content-Type-Options con el valor nosniff y marcar las cookies con SameSite, de modo que la sesión no viaje dentro de un marco ajeno.',
        en: 'Sending X-Content-Type-Options with the nosniff value and marking cookies with SameSite, so the session does not travel inside a foreign frame.',
      },
      {
        es: 'Detectar en JavaScript que window.top no coincide con window.self y romper el marco redirigiendo la página al nivel superior.',
        en: 'Detecting in JavaScript that window.top does not match window.self and busting the frame by redirecting the page to the top level.',
      },
    ],
    explanation: {
      es: 'frame-ancestors con el valor none, o con una lista de orígenes, es la única defensa que evalúa el navegador antes de renderizar y además sustituye a X-Frame-Options con DENY o SAMEORIGIN, que no admite varios orígenes. Las cabeceras de la primera opción son reales pero atacan el sniffing de tipo MIME y el CSRF; y el frame busting por JavaScript lo desactiva el atacante con el atributo sandbox del iframe, que bloquea la navegación del nivel superior.',
      en: 'frame-ancestors with the none value, or with a list of origins, is the only defence the browser evaluates before rendering and it also supersedes X-Frame-Options with DENY or SAMEORIGIN, which cannot list several origins. The headers in the first option are real but address MIME type sniffing and CSRF; and JavaScript frame busting is disabled by the attacker with the iframe sandbox attribute, which blocks top level navigation.',
    },
  },
  {
    id: 'fe-sec-09',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Qué papel juegan el lockfile, la auditoría de dependencias y las versiones fijadas frente al riesgo de la cadena de suministro?',
      en: 'What role do the lockfile, dependency auditing and pinned versions play against supply chain risk?',
    },
    answer: {
      es: 'El lockfile congela el árbol exacto de dependencias transitivas para que cada instalación sea reproducible, y la auditoría cruza esas versiones con las vulnerabilidades ya publicadas.',
      en: 'The lockfile freezes the exact tree of transitive dependencies so every install is reproducible, and auditing cross-checks those versions against already published vulnerabilities.',
    },
    distractors: [
      {
        es: 'El rango con acento circunflejo de package.json ya garantiza instalaciones reproducibles, porque solo admite actualizaciones de parche compatibles con la versión declarada.',
        en: 'The caret range in package.json already guarantees reproducible installs, because it only accepts patch updates compatible with the declared version.',
      },
      {
        es: 'La auditoría impide instalar paquetes maliciosos porque analiza el código fuente de cada dependencia antes de descargarla y detecta el comportamiento sospechoso.',
        en: 'Auditing prevents installing malicious packages because it analyses the source code of each dependency before downloading it and detects suspicious behaviour.',
      },
    ],
    explanation: {
      es: 'Por eso en integración continua se usa npm ci, que instala exactamente lo que dice package-lock.json y falla si difiere de package.json. El acento circunflejo permite subir de versión menor, no solo de parche, así que dos instalaciones en días distintos pueden traer código nuevo; y npm audit solo compara contra una base de avisos conocidos, por lo que no ve un typosquatting recién publicado ni un script postinstall malicioso, algo que sí mitiga instalar con la opción ignore-scripts.',
      en: 'That is why continuous integration uses npm ci, which installs exactly what package-lock.json states and fails if it diverges from package.json. The caret allows minor version bumps, not only patches, so two installs on different days can bring new code; and npm audit only compares against a known advisory database, so it does not see a freshly published typosquatting package nor a malicious postinstall script, something that installing with the ignore-scripts option does mitigate.',
    },
  },
  {
    id: 'fe-sec-10',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Por qué ningún secreto puede vivir dentro del bundle del frontend?',
      en: 'Why can no secret live inside the frontend bundle?',
    },
    answer: {
      es: 'Porque todo lo que se empaqueta se descarga en el navegador del usuario y se puede leer, de modo que ofuscarlo o inyectarlo en tiempo de compilación no lo esconde, solo lo disimula.',
      en: 'Because everything bundled is downloaded to the browser of the user and can be read, so obfuscating it or injecting it at build time does not hide it, it only disguises it.',
    },
    distractors: [
      {
        es: 'Los valores de environment.prod.ts sí quedan protegidos, porque el proceso de build los sustituye en tiempo de compilación y la minificación deja el resultado ilegible.',
        en: 'Values in environment.prod.ts are protected, because the build process substitutes them at compile time and minification leaves the result unreadable.',
      },
      {
        es: 'Basta con pedirlos en tiempo de ejecución a un endpoint propio protegido con CORS, de forma que la clave no viaja dentro del bundle y solo la recibe nuestro dominio.',
        en: 'It is enough to request them at runtime from an own endpoint protected with CORS, so the key does not travel inside the bundle and only our domain receives it.',
      },
    ],
    explanation: {
      es: 'Cualquiera puede abrir la pestaña de red o de fuentes en las herramientas de desarrollo, buscar la cadena en el chunk servido y recuperarla; la minificación renombra identificadores pero conserva intactos los literales. La segunda opción tienta porque es cierto que el secreto sale del bundle, pero CORS lo aplica el navegador y no evita una petición directa con curl: el patrón correcto es un backend intermedio que guarde la clave y hable con el tercero.',
      en: 'Anyone can open the network or sources tab in developer tools, search the string inside the served chunk and recover it; minification renames identifiers but keeps literals intact. The second option tempts because it is true the secret leaves the bundle, but CORS is enforced by the browser and does not stop a direct request with curl: the correct pattern is an intermediate backend that keeps the key and talks to the third party.',
    },
  },
  {
    id: 'fe-sec-11',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Cómo se configura TestBed para probar un componente standalone?',
      en: 'How do you configure TestBed to test a standalone component?',
    },
    answer: {
      es: 'Pasando el componente en el array imports de TestBed.configureTestingModule, porque un componente standalone se importa y trae consigo sus propias dependencias.',
      en: 'Passing the component in the imports array of TestBed.configureTestingModule, because a standalone component is imported and brings its own dependencies with it.',
    },
    distractors: [
      {
        es: 'Registrando el componente en el array declarations junto con las directivas y pipes que use su plantilla, igual que cualquier componente de un NgModule.',
        en: 'Registering the component in the declarations array together with the directives and pipes used by its template, just like any component of an NgModule.',
      },
      {
        es: 'Sin configurar TestBed, ya que al ser standalone basta con instanciar la clase con new, pasarle los dobles al constructor y llamar a ngOnInit manualmente.',
        en: 'Without configuring TestBed, since being standalone it is enough to instantiate the class with new, pass the doubles to the constructor and call ngOnInit manually.',
      },
    ],
    explanation: {
      es: 'Declarar un componente standalone en declarations lanza un error explícito de Angular que pide moverlo a imports; los servicios siguen yendo en providers y TestBed.createComponent crea el fixture igual que siempre. La instanciación manual es válida para probar lógica pura, pero pierde la plantilla, el binding y la inyección, y para sustituir dependencias de un standalone existe TestBed.overrideComponent con remove e add sobre sus imports.',
      en: 'Declaring a standalone component in declarations throws an explicit Angular error asking you to move it to imports; services still go in providers and TestBed.createComponent builds the fixture as usual. Manual instantiation is valid for pure logic, but it loses the template, the bindings and dependency injection, and to replace dependencies of a standalone component there is TestBed.overrideComponent with remove and add over its imports.',
    },
  },
  {
    id: 'fe-sec-12',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Qué hace fixture.detectChanges y cuándo hace falta volver a llamarlo?',
      en: 'What does fixture.detectChanges do and when do you need to call it again?',
    },
    answer: {
      es: 'Ejecuta un ciclo de detección de cambios sobre el componente bajo prueba, así que hay que llamarlo después de cada cambio de estado que se quiera ver reflejado en el DOM.',
      en: 'It runs a change detection cycle over the component under test, so you must call it after every state change you want reflected in the DOM.',
    },
    distractors: [
      {
        es: 'Solo hace falta la primera vez, porque a partir de ahí Angular actualiza la vista automáticamente cada vez que se modifica una propiedad del componente.',
        en: 'It is only needed the first time, because from then on Angular updates the view automatically whenever a component property changes.',
      },
      {
        es: 'Espera a que se resuelvan las tareas asíncronas pendientes y después refresca la vista, por lo que sustituye a la llamada a fixture.whenStable.',
        en: 'It waits for pending async tasks to resolve and then refreshes the view, so it replaces the call to fixture.whenStable.',
      },
    ],
    explanation: {
      es: 'En una prueba no hay nada que dispare la detección por sí solo: la primera llamada además ejecuta ngOnInit, y las siguientes son necesarias tras cada set de datos o emisión simulada. Si molesta repetirlo existe fixture.autoDetectChanges, que sí activa el refresco automático; y detectChanges es completamente síncrono, mientras que esperar promesas pendientes es justo el trabajo de whenStable.',
      en: 'In a test nothing triggers detection on its own: the first call also runs ngOnInit, and the following ones are needed after each data assignment or simulated emission. If repeating it bothers you there is fixture.autoDetectChanges, which does enable automatic refresh; and detectChanges is fully synchronous, while waiting for pending promises is precisely the job of whenStable.',
    },
  },
  {
    id: 'fe-sec-13',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Cuál es la mejor práctica para localizar elementos del DOM en una prueba de componente?',
      en: 'What is the best practice for locating DOM elements in a component test?',
    },
    answer: {
      es: 'Buscar por rol accesible o por un atributo data-testid dedicado, porque son contratos estables que no cambian cuando se rediseña el estilo del componente.',
      en: 'Querying by accessible role or by a dedicated data-testid attribute, because they are stable contracts that do not change when the component styling is redesigned.',
    },
    distractors: [
      {
        es: 'Buscar por clase CSS, ya que By.css es la API nativa del DebugElement y permite construir selectores mucho más precisos que cualquier atributo adicional.',
        en: 'Querying by CSS class, since By.css is the native DebugElement API and allows building far more precise selectors than any additional attribute.',
      },
      {
        es: 'Buscar por la posición del nodo dentro de nativeElement.children, que resulta estable mientras no se altere el orden de los elementos de la plantilla.',
        en: 'Querying by node position inside nativeElement.children, which stays stable as long as the order of the template elements is not altered.',
      },
    ],
    explanation: {
      es: 'El objetivo es que la prueba falle cuando cambia el comportamiento, no cuando cambia el CSS: un botón sigue siendo el botón de guardar aunque su clase pase de btn-primary a otra cosa. Es verdad que By.css es la API del DebugElement, y por eso la primera opción tienta, pero se puede usar igualmente con un selector de atributo sobre data-testid; y depender del índice de los hijos rompe la prueba en cuanto alguien envuelve el marcado en un contenedor.',
      en: 'The goal is for the test to fail when behaviour changes, not when CSS changes: a button is still the save button even if its class goes from btn-primary to something else. It is true that By.css is the DebugElement API, which is why the first option tempts, but it can be used just as well with an attribute selector over data-testid; and relying on child index breaks the test as soon as someone wraps the markup in a container.',
    },
  },
  {
    id: 'fe-sec-14',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿En qué se diferencia espiar un servicio con spyOn de proveer un doble en TestBed?',
      en: 'How does spying on a service with spyOn differ from providing a test double in TestBed?',
    },
    answer: {
      es: 'spyOn reemplaza un método concreto sobre la instancia real ya construida, mientras que proveer un doble sustituye la dependencia completa antes de que el componente la inyecte.',
      en: 'spyOn replaces one specific method on the already constructed real instance, while providing a double replaces the whole dependency before the component injects it.',
    },
    distractors: [
      {
        es: 'spyOn genera automáticamente un objeto nuevo con todos los métodos simulados, y por eso no hace falta registrarlo en el array providers del módulo de pruebas.',
        en: 'spyOn automatically generates a new object with all methods mocked, which is why there is no need to register it in the providers array of the testing module.',
      },
      {
        es: 'Son equivalentes, salvo que spyOn exige llamar a TestBed.inject después de crear el componente para que el espía quede realmente aplicado a la dependencia.',
        en: 'They are equivalent, except that spyOn requires calling TestBed.inject after creating the component for the spy to be actually applied to the dependency.',
      },
    ],
    explanation: {
      es: 'Con spyOn se recupera la instancia con TestBed.inject y se intercepta un método con and.returnValue, conservando el resto del servicio real; con useValue o useClass en providers nunca se instancia el servicio original, lo que conviene cuando su constructor toca HTTP o almacenamiento. Crear un objeto entero de espías es lo que hace jasmine.createSpyObj, no spyOn, y como la inyección es por referencia el espía debe colocarse antes del primer detectChanges si ngOnInit ya usa ese método.',
      en: 'With spyOn you retrieve the instance through TestBed.inject and intercept one method with and.returnValue, keeping the rest of the real service; with useValue or useClass in providers the original service is never instantiated, which helps when its constructor touches HTTP or storage. Creating a whole object of spies is what jasmine.createSpyObj does, not spyOn, and since injection is by reference the spy must be installed before the first detectChanges if ngOnInit already uses that method.',
    },
  },
  {
    id: 'fe-sec-15',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: 'En HttpTestingController, ¿qué hacen expectOne, flush y verify?',
      en: 'In HttpTestingController, what do expectOne, flush and verify do?',
    },
    answer: {
      es: 'expectOne recupera la única petición pendiente que coincide con el criterio, flush le entrega el cuerpo de respuesta simulado y verify falla si quedó alguna petición sin atender.',
      en: 'expectOne retrieves the single pending request matching the criteria, flush delivers the simulated response body to it, and verify fails if any request was left unhandled.',
    },
    distractors: [
      {
        es: 'expectOne comprueba que durante toda la prueba se haya hecho exactamente una petición, flush vacía la cola de peticiones acumuladas y verify reintenta las que fallaron.',
        en: 'expectOne checks that exactly one request was made during the whole test, flush empties the queue of accumulated requests and verify retries the failed ones.',
      },
      {
        es: 'flush emite el error de red simulado hacia el suscriptor y verify confirma que la respuesta llegó y que el observable se completó correctamente.',
        en: 'flush emits the simulated network error towards the subscriber and verify confirms the response arrived and the observable completed correctly.',
      },
    ],
    explanation: {
      es: 'El flujo típico con provideHttpClientTesting es llamar al servicio, capturar la petición con expectOne y responderla con flush del cuerpo esperado, dejando verify en el afterEach para detectar llamadas inesperadas. expectOne se refiere a las peticiones abiertas que casan con la URL o el predicado, no al total de la prueba; y para simular un fallo se usa req.error o un flush con el cuerpo y un objeto de estado, por ejemplo status 500.',
      en: 'The typical flow with provideHttpClientTesting is calling the service, capturing the request with expectOne and answering it with flush of the expected body, leaving verify in afterEach to catch unexpected calls. expectOne refers to open requests matching the URL or predicate, not to the total of the test; and to simulate a failure you use req.error or a flush with the body and a status object, for example status 500.',
    },
  },
  {
    id: 'fe-sec-16',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Cuál es la diferencia entre fakeAsync con tick y waitForAsync con whenStable?',
      en: 'What is the difference between fakeAsync with tick and waitForAsync with whenStable?',
    },
    answer: {
      es: 'fakeAsync virtualiza el tiempo y tick lo avanza de forma síncrona y determinista, mientras que waitForAsync deja correr las tareas asíncronas reales y whenStable devuelve una promesa que se resuelve cuando la zona queda libre.',
      en: 'fakeAsync virtualises time and tick advances it synchronously and deterministically, while waitForAsync lets the real async tasks run and whenStable returns a promise resolved once the zone becomes stable.',
    },
    distractors: [
      {
        es: 'tick está pensado para esperar promesas y whenStable para los temporizadores, razón por la cual whenStable recibe como argumento los milisegundos que debe avanzar.',
        en: 'tick is meant for waiting on promises and whenStable for timers, which is why whenStable receives as an argument the milliseconds it must advance.',
      },
      {
        es: 'fakeAsync también controla el tiempo de las peticiones HTTP reales y de los temporizadores del servidor, de modo que hace innecesario usar HttpTestingController.',
        en: 'fakeAsync also controls the timing of real HTTP requests and server timers, making HttpTestingController unnecessary.',
      },
    ],
    explanation: {
      es: 'Dentro de fakeAsync se puede escribir la prueba sin callbacks y usar flushMicrotasks para las promesas o flush para vaciar la cola de macrotareas; si queda un setInterval pendiente, la prueba falla con el error de temporizadores en la cola. whenStable no acepta milisegundos, y fakeAsync solo parchea lo que Zone.js instrumenta en el navegador, así que una petición real por XHR queda fuera de su control y hay que simularla igualmente.',
      en: 'Inside fakeAsync you can write the test without callbacks and use flushMicrotasks for promises or flush to drain the macrotask queue; if a setInterval is left pending, the test fails with the timers in the queue error. whenStable does not accept milliseconds, and fakeAsync only patches what Zone.js instruments in the browser, so a real XHR request stays outside its control and must be simulated anyway.',
    },
  },
  {
    id: 'fe-sec-17',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Cómo se prueba un componente basado en signals y su estado derivado?',
      en: 'How do you test a signals based component and its derived state?',
    },
    answer: {
      es: 'Se modifica la señal de origen con set o update, o la entrada con componentRef.setInput, y se lee el computed al instante; detectChanges solo hace falta para comprobar el DOM o ejecutar los effects.',
      en: 'You change the source signal with set or update, or the input with componentRef.setInput, and read the computed right away; detectChanges is only needed to check the DOM or to run the effects.',
    },
    distractors: [
      {
        es: 'Hay que envolver la lectura en un effect creado dentro de la prueba, porque un computed no expone su valor si se lee fuera de un contexto reactivo.',
        en: 'You must wrap the read in an effect created inside the test, because a computed does not expose its value when read outside a reactive context.',
      },
      {
        es: 'Hay que esperar con fixture.whenStable después de cada set, ya que las señales propagan el nuevo valor de forma asíncrona en la siguiente microtarea.',
        en: 'You must wait with fixture.whenStable after each set, since signals propagate the new value asynchronously on the next microtask.',
      },
    ],
    explanation: {
      es: 'Un computed se evalúa de forma perezosa pero síncrona al invocarlo, así que la aserción puede hacerse en la línea siguiente al set sin esperar nada. Leerlo fuera de un contexto reactivo es perfectamente válido, solo que entonces no se registra dependencia alguna; lo que sí es diferido son los effects, que se ejecutan durante la detección de cambios y por eso requieren detectChanges o TestBed.flushEffects para observarse.',
      en: 'A computed is evaluated lazily but synchronously when invoked, so the assertion can happen on the line right after the set without waiting for anything. Reading it outside a reactive context is perfectly valid, it simply registers no dependency; what is deferred are the effects, which run during change detection and therefore need detectChanges or TestBed.flushEffects to be observed.',
    },
  },
  {
    id: 'fe-sec-18',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Cómo se prueba hoy la navegación entre rutas en Angular?',
      en: 'How is route navigation tested in Angular today?',
    },
    answer: {
      es: 'Registrando las rutas con provideRouter en los providers del TestBed y navegando con RouterTestingHarness, que ejecuta la navegación real y devuelve el componente activado.',
      en: 'Registering the routes with provideRouter in the TestBed providers and navigating with RouterTestingHarness, which runs the real navigation and returns the activated component.',
    },
    distractors: [
      {
        es: 'Importando RouterTestingModule.withRoutes en el TestBed, que es la forma recomendada de configurar rutas en aplicaciones standalone modernas.',
        en: 'Importing RouterTestingModule.withRoutes in the TestBed, which is the recommended way to configure routes in modern standalone applications.',
      },
      {
        es: 'Espiando Router.navigate con spyOn y comprobando el argumento recibido, lo que confirma que la ruta se activó y que sus guards se ejecutaron en orden.',
        en: 'Spying on Router.navigate with spyOn and checking the received argument, which confirms the route was activated and its guards ran in order.',
      },
    ],
    explanation: {
      es: 'El método navigateByUrl del harness recibe la URL y opcionalmente el tipo del componente esperado, devolviendo su instancia ya creada tras pasar por guards y resolvers, con harness.fixture disponible para inspeccionar el DOM. RouterTestingModule quedó obsoleto en favor de provideRouter, y espiar navigate solo demuestra que se invocó el método: con el espía puesto el router ni siquiera llega a navegar, así que nunca se prueban los guards.',
      en: 'The navigateByUrl method of the harness takes the URL and optionally the expected component type, returning its created instance after guards and resolvers run, with harness.fixture available to inspect the DOM. RouterTestingModule was deprecated in favour of provideRouter, and spying on navigate only proves the method was invoked: with the spy in place the router never actually navigates, so guards are never exercised.',
    },
  },
  {
    id: 'fe-sec-19',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Cuál es la estrategia correcta para que una prueba end to end deje de ser intermitente?',
      en: 'What is the correct strategy to stop an end to end test from being flaky?',
    },
    answer: {
      es: 'Esperar a una condición observable del sistema, como que el elemento sea visible o que la respuesta de red concreta haya llegado, en lugar de dormir una cantidad fija de tiempo.',
      en: 'Waiting for an observable condition of the system, such as the element becoming visible or a specific network response arriving, instead of sleeping for a fixed amount of time.',
    },
    distractors: [
      {
        es: 'Aumentar el tiempo de espera fijo hasta que la prueba deje de fallar en integración continua, ya que ese entorno es notablemente más lento que la máquina local.',
        en: 'Increasing the fixed wait until the test stops failing in continuous integration, since that environment is noticeably slower than the local machine.',
      },
      {
        es: 'Activar los reintentos automáticos del runner para que repita la prueba fallida, lo que elimina la intermitencia sin tener que tocar las esperas del escenario.',
        en: 'Enabling automatic runner retries so it repeats the failed test, which removes the flakiness without having to touch the waits of the scenario.',
      },
    ],
    explanation: {
      es: 'Una espera fija siempre es una apuesta: si es corta falla en una máquina cargada y si es larga ralentiza toda la suite sin garantizar nada. Por eso Playwright y Cypress ofrecen aserciones con reintento automático, del estilo de esperar a que el localizador esté visible, además de esperar una respuesta concreta antes de continuar; los reintentos del runner existen de verdad, pero solo ocultan el fallo y acaban tapando regresiones reales.',
      en: 'A fixed wait is always a gamble: if it is short it fails on a loaded machine and if it is long it slows the whole suite down without guaranteeing anything. That is why Playwright and Cypress offer auto retrying assertions, such as waiting for the locator to be visible, plus waiting for a specific response before continuing; runner retries do exist, but they only hide the failure and end up masking real regressions.',
    },
  },
  {
    id: 'fe-sec-20',
    topic: 'Seguridad y pruebas',
    prompt: {
      es: '¿Hasta dónde llega una prueba automatizada de accesibilidad con axe?',
      en: 'How far does an automated accessibility test with axe go?',
    },
    answer: {
      es: 'Detecta violaciones comprobables por máquina, como contraste o nombres accesibles ausentes, pero la trampa de foco y la devolución del foco al cerrar un diálogo hay que verificarlas con aserciones sobre document.activeElement.',
      en: 'It detects machine checkable violations such as contrast or missing accessible names, but focus trapping and returning focus when a dialog closes must be verified with assertions over document.activeElement.',
    },
    distractors: [
      {
        es: 'Cubre la práctica totalidad de los criterios de las WCAG, de modo que un resultado sin violaciones ya garantiza que el componente es accesible y no requiere revisión manual.',
        en: 'It covers virtually all WCAG criteria, so a result with no violations already guarantees the component is accessible and needs no manual review.',
      },
      {
        es: 'La trampa de foco se valida comprobando que el contenedor declare role igual a dialog y aria-modal, atributos con los que el navegador confina la tecla Tab dentro del diálogo.',
        en: 'Focus trapping is validated by checking the container declares role equal to dialog and aria-modal, attributes with which the browser confines the Tab key inside the dialog.',
      },
    ],
    explanation: {
      es: 'Las herramientas automáticas cubren en torno a un tercio de los problemas reales, así que axe sirve de red de seguridad y no de certificado: el orden de tabulación, el foco inicial y el regreso al elemento que abrió el diálogo se prueban leyendo document.activeElement tras simular las pulsaciones. Los atributos de la segunda opción son correctos y necesarios para el anuncio del lector de pantalla, pero no mueven el foco por sí solos: el confinamiento lo consigue el atributo inert sobre el resto de la página, el elemento dialog nativo o una directiva como cdkTrapFocus.',
      en: 'Automated tools cover roughly a third of the real issues, so axe works as a safety net and not as a certificate: tab order, initial focus and the return to the element that opened the dialog are tested by reading document.activeElement after simulating key presses. The attributes in the second option are correct and needed for the screen reader announcement, but they do not move focus by themselves: the confinement comes from the inert attribute on the rest of the page, the native dialog element or a directive such as cdkTrapFocus.',
    },
  },
];
