import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_SECURITY_TESTING_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-sec-01',
    topic: 'XSS',
    prompt: {
      es: '¿Qué distingue el XSS de DOM del reflejado y del almacenado?',
      en: 'What sets DOM XSS apart from reflected and stored XSS?',
    },
    answer: {
      es: 'El script malo no viene en el HTML del servidor. Tu JavaScript lo lee, a menudo de la URL, y lo escribe en la pagina.',
      en: 'The bad script does not come in the server HTML. Your JavaScript reads it, often from the URL, and writes it into the page.',
    },
    distractors: [
      {
        es: 'El servidor devuelve el script dentro de esa respuesta, y solo afecta a quien abrio el enlace.',
        en: 'The server returns the script inside that response, and it only affects whoever opened the link.',
      },
      {
        es: 'El script queda en la base de datos y el servidor lo sirve despues a quien visite la pagina.',
        en: 'The script is stored in the database and the server later serves it to whoever visits the page.',
      },
    ],
    explanation: {
      es: 'Esas dos respuestas son el reflejado y el almacenado. En el de DOM el fallo esta en un innerHTML o en un sitio parecido del cliente.',
      en: 'Those two answers are reflected and stored. In the DOM kind the bug is an innerHTML or a similar spot on the client.',
    },
  },
  {
    id: 'fe-sec-02',
    topic: 'Saneado',
    prompt: {
      es: '¿Qué implica usar bypassSecurityTrustHtml antes de un innerHTML?',
      en: 'What does using bypassSecurityTrustHtml before an innerHTML imply?',
    },
    answer: {
      es: 'Angular deja de sanear ese valor. La responsabilidad de que el HTML sea seguro pasa a ti.',
      en: 'Angular stops sanitising that value. The responsibility for the HTML being safe moves to you.',
    },
    distractors: [
      {
        es: 'Aplica una lista mas amplia, pero sigue quitando los manejadores de eventos.',
        en: 'It applies a wider allow list, but it still removes event handlers.',
      },
      {
        es: 'El riesgo es bajo porque innerHTML no ejecuta nada de lo que metas.',
        en: 'The risk is low because innerHTML does not run anything you put in.',
      },
    ],
    explanation: {
      es: 'innerHTML no corre una etiqueta script, pero un onerror de una imagen si ejecuta codigo.',
      en: 'innerHTML does not run a script tag, but an image onerror does run code.',
    },
  },
  {
    id: 'fe-sec-03',
    topic: 'CSP',
    prompt: {
      es: '¿Qué aporta un nonce en una Content Security Policy y por que unsafe-inline la debilita?',
      en: 'What does a nonce add to a Content Security Policy and why does unsafe-inline weaken it?',
    },
    answer: {
      es: 'El nonce deja pasar solo el script en linea que lleva ese valor aleatorio de esta respuesta. unsafe-inline deja pasar cualquier script en linea.',
      en: 'The nonce allows only the inline script that carries that random value for this response. unsafe-inline allows any inline script.',
    },
    distractors: [
      {
        es: 'El nonce es un resumen del fichero para comprobar que nadie lo altero por el camino.',
        en: 'The nonce is a digest of the file so you can check that nobody altered it on the way.',
      },
      {
        es: 'unsafe-inline solo afecta a estilos. Los scripts en linea ya los bloquea default-src siempre.',
        en: 'unsafe-inline only affects styles. Inline scripts are already always blocked by default-src.',
      },
    ],
    explanation: {
      es: 'Si el atacante inyecta un script, no conoce el nonce y el navegador lo bloquea. El resumen de integridad de un fichero es otro mecanismo.',
      en: 'If an attacker injects a script, they do not know the nonce and the browser blocks it. A file integrity digest is a different mechanism.',
    },
  },
  {
    id: 'fe-sec-04',
    topic: 'CORS',
    prompt: {
      es: '¿Quién aplica CORS y para que sirve el preflight?',
      en: 'Who enforces CORS and what is the preflight for?',
    },
    answer: {
      es: 'Lo aplica el navegador: decide si tu codigo puede leer la respuesta. El preflight es un OPTIONS que pregunta si ese metodo y esas cabeceras estan permitidos.',
      en: 'The browser enforces it: it decides whether your code may read the response. The preflight is an OPTIONS that asks whether that method and those headers are allowed.',
    },
    distractors: [
      {
        es: 'Lo aplica el servidor con un 403 si el Origin no esta en la lista. El preflight negocia las cookies.',
        en: 'The server enforces it with a 403 if the Origin is not on the list. The preflight negotiates cookies.',
      },
      {
        es: 'Protege el API para que otro dominio no pueda llamarlo. El preflight valida el token.',
        en: 'It protects the API so another domain cannot call it. The preflight validates the token.',
      },
    ],
    explanation: {
      es: 'La misma llamada con curl no tiene CORS. No es la defensa del backend: es una regla del navegador.',
      en: 'The same call with curl has no CORS. It is not the backend defence: it is a browser rule.',
    },
  },
  {
    id: 'fe-sec-05',
    topic: 'Cookies',
    prompt: {
      es: '¿Qué protege cada atributo HttpOnly, Secure y SameSite?',
      en: 'What does each attribute HttpOnly, Secure and SameSite protect?',
    },
    answer: {
      es: 'HttpOnly impide que el JavaScript lea la cookie. Secure impide enviarla fuera de HTTPS. SameSite limita enviarla en peticiones que nacen en otro sitio.',
      en: 'HttpOnly stops JavaScript from reading the cookie. Secure stops sending it outside HTTPS. SameSite limits sending it on requests that start on another site.',
    },
    distractors: [
      {
        es: 'HttpOnly obliga a viajar en HTTP sin cifrar. Secure la guarda cifrada. SameSite la ata al dominio.',
        en: 'HttpOnly forces it to travel over plain HTTP. Secure stores it encrypted. SameSite binds it to the domain.',
      },
      {
        es: 'SameSite estricto es la defensa contra XSS y HttpOnly es la defensa contra CSRF.',
        en: 'Strict SameSite is the defence against XSS and HttpOnly is the defence against CSRF.',
      },
    ],
    explanation: {
      es: 'HttpOnly dificulta robar la sesion con XSS. SameSite dificulta el CSRF. No intercambies esos papeles.',
      en: 'HttpOnly makes it harder to steal the session with XSS. SameSite makes CSRF harder. Do not swap those roles.',
    },
  },
  {
    id: 'fe-sec-06',
    topic: 'Donde guardar el token',
    prompt: {
      es: '¿Qué intercambias al guardar el token en localStorage o en una cookie?',
      en: 'What do you trade off when you store the token in localStorage or in a cookie?',
    },
    answer: {
      es: 'En localStorage cualquier script de la pagina puede leerlo y llevárselo. Una cookie HttpOnly no se lee, pero el navegador la envia solo y hay que defender el CSRF.',
      en: 'In localStorage any script on the page can read it and take it away. An HttpOnly cookie cannot be read, but the browser sends it on its own and you must defend against CSRF.',
    },
    distractors: [
      {
        es: 'localStorage esta a salvo por el mismo origen, y la cookie queda a salvo del CSRF gracias a Secure.',
        en: 'localStorage is safe because of the same origin, and the cookie is safe from CSRF thanks to Secure.',
      },
      {
        es: 'El riesgo es el mismo. Elegir uno u otro es solo comodidad.',
        en: 'The risk is the same. Choosing one or the other is only convenience.',
      },
    ],
    explanation: {
      es: 'Con localStorage el atacante usa el token desde su maquina. Con HttpOnly solo puede actuar en el navegador de la victima.',
      en: 'With localStorage the attacker uses the token from their own machine. With HttpOnly they can only act in the victim browser.',
    },
  },
  {
    id: 'fe-sec-07',
    topic: 'Redireccion abierta',
    prompt: {
      es: '¿Cómo evitas una redireccion abierta en la URL de vuelta tras el login?',
      en: 'How do you avoid an open redirect on the return URL after login?',
    },
    answer: {
      es: 'Acepta solo rutas relativas propias, o destinos de una lista. Descarta un esquema o una URL que empiece por dos barras.',
      en: 'Accept only your own relative paths, or destinations from a list. Reject a scheme or a URL that starts with two slashes.',
    },
    distractors: [
      {
        es: 'Basta con encodeURIComponent. Asi no puede leerse como una URL de otro dominio.',
        en: 'encodeURIComponent is enough. Then it cannot be read as a URL of another domain.',
      },
      {
        es: 'Comprueba que empieza por tu dominio. Eso descarta cualquier destino externo.',
        en: 'Check that it starts with your domain. That rules out any external destination.',
      },
    ],
    explanation: {
      es: 'Un prefijo se cuela con un dominio que empieza igual que el tuyo. Si el valor no es una ruta tuya, ve a la ruta por defecto.',
      en: 'A prefix check is fooled by a domain that starts like yours. If the value is not one of your routes, go to the default route.',
    },
  },
  {
    id: 'fe-sec-08',
    topic: 'Clickjacking',
    prompt: {
      es: '¿Cómo te proteges del clickjacking?',
      en: 'How do you protect against clickjacking?',
    },
    answer: {
      es: 'Con la directiva frame-ancestors de Content Security Policy, para decir quien puede embeber la pagina. X-Frame-Options sirve de respaldo en navegadores viejos.',
      en: 'With the Content Security Policy frame-ancestors directive, to say who may embed the page. X-Frame-Options is a fallback for old browsers.',
    },
    distractors: [
      {
        es: 'Con nosniff y SameSite, para que la sesion no viaje dentro de un marco.',
        en: 'With nosniff and SameSite, so the session does not travel inside a frame.',
      },
      {
        es: 'Con JavaScript que compara window.top y window.self y rompe el marco.',
        en: 'With JavaScript that compares window.top and window.self and busts the frame.',
      },
    ],
    explanation: {
      es: 'El script que rompe el marco lo anula un iframe con sandbox. La cabecera la evalua el navegador antes de pintar.',
      en: 'The script that busts the frame is disabled by an iframe with sandbox. The header is evaluated by the browser before paint.',
    },
  },
  {
    id: 'fe-sec-09',
    topic: 'Dependencias',
    prompt: {
      es: '¿Qué papel tienen el lockfile y la auditoria de dependencias?',
      en: 'What role do the lockfile and dependency auditing play?',
    },
    answer: {
      es: 'El lockfile fija el arbol exacto para que cada instalacion sea la misma. La auditoria compara esas versiones con avisos ya publicados.',
      en: 'The lockfile pins the exact tree so every install is the same. Auditing compares those versions with advisories that are already published.',
    },
    distractors: [
      {
        es: 'El rango con acento circunflejo de package.json ya hace la instalacion reproducible.',
        en: 'The caret range in package.json already makes the install reproducible.',
      },
      {
        es: 'La auditoria lee el codigo de cada paquete antes de bajarlo y detecta el script malicioso.',
        en: 'Auditing reads the code of each package before downloading it and detects the malicious script.',
      },
    ],
    explanation: {
      es: 'En CI usa el comando que instala el lock y falla si no cuadra. La auditoria no ve un paquete malo recien publicado.',
      en: 'In CI use the command that installs the lock and fails if it does not match. Auditing does not see a bad package that was just published.',
    },
  },
  {
    id: 'fe-sec-10',
    topic: 'Secretos',
    prompt: {
      es: '¿Por qué un secreto no puede vivir en el bundle del frontend?',
      en: 'Why can a secret not live in the frontend bundle?',
    },
    answer: {
      es: 'Porque el usuario se descarga ese codigo y puede leerlo. Ofuscarlo o meterlo en el build solo lo disimula.',
      en: 'Because the user downloads that code and can read it. Obfuscating it or injecting it at build time only disguises it.',
    },
    distractors: [
      {
        es: 'Los valores de environment de produccion quedan protegidos porque la minificacion los hace ilegibles.',
        en: 'Production environment values stay protected because minification makes them unreadable.',
      },
      {
        es: 'Basta pedirlos a un endpoint propio con CORS. Asi la clave no viaja en el bundle y solo la recibe tu dominio.',
        en: 'It is enough to request them from your own endpoint with CORS. Then the key does not travel in the bundle and only your domain receives it.',
      },
    ],
    explanation: {
      es: 'La minificacion no esconde literales. El patron correcto es un backend que guarda la clave y habla con el tercero.',
      en: 'Minification does not hide literals. The correct pattern is a backend that keeps the key and talks to the third party.',
    },
  },
  {
    id: 'fe-sec-11',
    topic: 'TestBed',
    prompt: {
      es: '¿Cómo configuras TestBed para un componente standalone?',
      en: 'How do you configure TestBed for a standalone component?',
    },
    answer: {
      es: 'Lo pasas en imports de configureTestingModule. Un standalone se importa y trae sus dependencias. En declarations Angular te pide que lo muevas.',
      en: 'You pass it in the imports of configureTestingModule. A standalone component is imported and brings its dependencies. In declarations Angular asks you to move it.',
    },
    distractors: [
      {
        es: 'Va en declarations, junto con las directivas de la plantilla, como un componente de NgModule.',
        en: 'It goes in declarations, together with the template directives, like an NgModule component.',
      },
      {
        es: 'No hace falta TestBed. Basta con new, pasar dobles al constructor y llamar a ngOnInit.',
        en: 'TestBed is not needed. new, passing doubles to the constructor and calling ngOnInit is enough.',
      },
    ],
    explanation: {
      es: 'new sirve para logica pura, pero pierdes plantilla e inyeccion. Los servicios de prueba siguen yendo en providers.',
      en: 'new is fine for pure logic, but you lose the template and injection. Test services still go in providers.',
    },
  },
  {
    id: 'fe-sec-12',
    topic: 'detectChanges',
    prompt: {
      es: '¿Qué hace fixture.detectChanges y cuando hay que llamarlo otra vez?',
      en: 'What does fixture.detectChanges do and when do you call it again?',
    },
    answer: {
      es: 'Corre un ciclo de deteccion sobre el componente. Hay que llamarlo despues de cada cambio que quieras ver en el DOM.',
      en: 'It runs a change detection cycle on the component. You call it again after every change you want to see in the DOM.',
    },
    distractors: [
      {
        es: 'Solo la primera vez. Luego Angular actualiza la vista solo al cambiar una propiedad.',
        en: 'Only the first time. After that Angular updates the view on its own when a property changes.',
      },
      {
        es: 'Espera a las tareas async y luego refresca, asi que sustituye a whenStable.',
        en: 'It waits for async tasks and then refreshes, so it replaces whenStable.',
      },
    ],
    explanation: {
      es: 'En un test nadie dispara la deteccion por ti. La primera llamada tambien pasa por el inicio del componente. detectChanges es sincronico.',
      en: 'In a test nobody triggers detection for you. The first call also runs the component startup. detectChanges is synchronous.',
    },
  },
  {
    id: 'fe-sec-13',
    topic: 'Que afirmar',
    prompt: {
      es: '¿Cómo localizas un elemento en un test de componente sin atarte al CSS?',
      en: 'How do you find an element in a component test without tying the test to CSS?',
    },
    answer: {
      es: 'Por el rol accesible o por un data-testid pensado para el test. Asi un cambio de clase no rompe la prueba.',
      en: 'By the accessible role or by a data-testid meant for the test. That way a class change does not break the test.',
    },
    distractors: [
      {
        es: 'Por la clase CSS, porque es el selector mas preciso y no cambia al redisenar.',
        en: 'By the CSS class, because it is the most precise selector and it does not change when you redesign.',
      },
      {
        es: 'Por la posicion del nodo entre los hijos. Es estable mientras no reordenes la plantilla.',
        en: 'By the node position among the children. It stays stable as long as you do not reorder the template.',
      },
    ],
    explanation: {
      es: 'El test debe fallar si cambia el comportamiento, no si el boton pasa de una clase visual a otra.',
      en: 'The test should fail if the behaviour changes, not if the button moves from one visual class to another.',
    },
  },
  {
    id: 'fe-sec-14',
    topic: 'Que simular',
    prompt: {
      es: '¿Qué debes simular en un test y que diferencia hay entre un spy y un doble en providers?',
      en: 'What should you mock in a test, and what is the difference between a spy and a double in providers?',
    },
    answer: {
      es: 'Simula HTTP, reloj y servicios que salen de la unidad. Un spy cambia un metodo de la instancia real. Un doble en providers sustituye toda la dependencia antes de inyectarla.',
      en: 'Mock HTTP, the clock and services that leave the unit. A spy replaces one method on the real instance. A double in providers replaces the whole dependency before it is injected.',
    },
    distractors: [
      {
        es: 'Hay que simular tambien los pipes de Angular y el DOM. El componente real no debe crearse.',
        en: 'You must also mock Angular pipes and the DOM. The real component must not be created.',
      },
      {
        es: 'spyOn crea solo un objeto con todos los metodos falsos, y no hace falta providers.',
        en: 'spyOn creates a full object of fake methods on its own, and providers are not needed.',
      },
    ],
    explanation: {
      es: 'Si el constructor llama a HTTP, un useValue evita esa instancia. El spy tiene que estar puesto antes del primer detectChanges si ngOnInit ya usa el metodo.',
      en: 'If the constructor calls HTTP, a useValue avoids that instance. The spy must be in place before the first detectChanges if ngOnInit already uses the method.',
    },
  },
  {
    id: 'fe-sec-15',
    topic: 'HTTP de prueba',
    prompt: {
      es: '¿Qué hacen expectOne, flush y verify en HttpTestingController?',
      en: 'What do expectOne, flush and verify do on HttpTestingController?',
    },
    answer: {
      es: 'expectOne coge la unica peticion pendiente que coincide. flush le da el cuerpo simulado. verify falla si quedo alguna peticion sin responder.',
      en: 'expectOne takes the single pending request that matches. flush gives it the fake body. verify fails if any request was left unanswered.',
    },
    distractors: [
      {
        es: 'expectOne exige una sola peticion en todo el test. flush vacia la cola y verify reintenta las fallidas.',
        en: 'expectOne requires a single request in the whole test. flush empties the queue and verify retries the failed ones.',
      },
      {
        es: 'flush manda un error de red y verify comprueba que el Observable completo.',
        en: 'flush sends a network error and verify checks that the Observable completed.',
      },
    ],
    explanation: {
      es: 'No sale una llamada real. Respondes tu la peticion. verify suele ir en el afterEach para cazar una llamada de mas.',
      en: 'No real call goes out. You answer the request yourself. verify usually sits in afterEach to catch an extra call.',
    },
  },
  {
    id: 'fe-sec-16',
    topic: 'Tiempo en tests',
    prompt: {
      es: '¿Cuál es la diferencia entre fakeAsync con tick y waitForAsync con whenStable?',
      en: 'What is the difference between fakeAsync with tick and waitForAsync with whenStable?',
    },
    answer: {
      es: 'fakeAsync para el reloj y tick lo adelanta sin esperar de verdad. waitForAsync deja correr lo async real y whenStable avisa cuando la zona queda libre.',
      en: 'fakeAsync freezes the clock and tick moves it forward without a real wait. waitForAsync lets the real async work run and whenStable tells you when the zone is idle.',
    },
    distractors: [
      {
        es: 'tick espera promesas y whenStable avanza milisegundos. Por eso whenStable recibe un numero.',
        en: 'tick waits for promises and whenStable advances milliseconds. That is why whenStable takes a number.',
      },
      {
        es: 'fakeAsync tambien controla el HTTP real, asi que no hace falta el controlador de pruebas.',
        en: 'fakeAsync also controls real HTTP, so the testing controller is not needed.',
      },
    ],
    explanation: {
      es: 'Un debounce se prueba con tick. Una peticion HTTP se prueba respondiendo el mock, no avanzando el reloj.',
      en: 'A debounce is tested with tick. An HTTP request is tested by answering the mock, not by moving the clock.',
    },
  },
  {
    id: 'fe-sec-17',
    topic: 'Signals en test',
    prompt: {
      es: '¿Cómo pruebas un computed que depende de una signal?',
      en: 'How do you test a computed that depends on a signal?',
    },
    answer: {
      es: 'Cambias la signal con set o update y lees el computed enseguida. detectChanges hace falta para ver el DOM, no para leer el computed.',
      en: 'You change the signal with set or update and read the computed right away. detectChanges is needed to see the DOM, not to read the computed.',
    },
    distractors: [
      {
        es: 'Hay que leer el computed dentro de un effect. Fuera no tiene valor.',
        en: 'You must read the computed inside an effect. Outside it has no value.',
      },
      {
        es: 'Hay que esperar whenStable, porque la signal propaga el valor en la siguiente microtarea.',
        en: 'You must wait for whenStable, because the signal propagates the value on the next microtask.',
      },
    ],
    explanation: {
      es: 'El computed se calcula al leerlo. Lo que si espera al ciclo de deteccion son los effects.',
      en: 'The computed is calculated when you read it. What does wait for the detection cycle are the effects.',
    },
  },
  {
    id: 'fe-sec-18',
    topic: 'Rutas en test',
    prompt: {
      es: '¿Cómo pruebas hoy la navegacion entre rutas?',
      en: 'How do you test navigation between routes today?',
    },
    answer: {
      es: 'Registras las rutas con provideRouter y navegas con RouterTestingHarness. Eso ejecuta la navegacion y te devuelve el componente activado.',
      en: 'You register the routes with provideRouter and navigate with RouterTestingHarness. That runs the navigation and gives you back the activated component.',
    },
    distractors: [
      {
        es: 'Importando RouterTestingModule.withRoutes, que sigue siendo la forma recomendada en standalone.',
        en: 'By importing RouterTestingModule.withRoutes, which is still the recommended form for standalone.',
      },
      {
        es: 'Espiando navigate y mirando el argumento. Eso prueba que los guards corrieron.',
        en: 'By spying on navigate and checking the argument. That proves the guards ran.',
      },
    ],
    explanation: {
      es: 'Un spy de navigate demuestra la llamada, pero el router no navega y los guards no se ejecutan.',
      en: 'A spy on navigate proves the call, but the router does not navigate and the guards do not run.',
    },
  },
  {
    id: 'fe-sec-19',
    topic: 'Tests fragiles',
    prompt: {
      es: '¿Cómo dejas de tener un test end to end que a veces falla?',
      en: 'How do you stop an end to end test from failing sometimes?',
    },
    answer: {
      es: 'Espera a algo visible: que el elemento este, o que llegue esa respuesta de red. No duermas un tiempo fijo.',
      en: 'Wait for something you can see: that the element is there, or that the specific network response arrived. Do not sleep for a fixed time.',
    },
    distractors: [
      {
        es: 'Sube la espera fija hasta que deje de fallar en CI, porque ese entorno es mas lento.',
        en: 'Raise the fixed wait until it stops failing in CI, because that environment is slower.',
      },
      {
        es: 'Activa los reintentos del runner. Con eso la intermitencia desaparece sin tocar el test.',
        en: 'Turn on runner retries. That removes the flakiness without touching the test.',
      },
    ],
    explanation: {
      es: 'Una espera corta falla en una maquina cargada y una larga solo ralentiza. Reintentar el test esconde el fallo.',
      en: 'A short wait fails on a busy machine and a long one only slows the suite. Retrying the test hides the failure.',
    },
  },
  {
    id: 'fe-sec-20',
    topic: 'Accesibilidad automatica',
    prompt: {
      es: '¿Hasta donde llega un test automatico de accesibilidad con axe?',
      en: 'How far does an automated accessibility test with axe go?',
    },
    answer: {
      es: 'Pilla fallos que una maquina puede ver, como contraste o un nombre que falta. El foco atrapado en un dialogo, y devolver el foco al cerrar, hay que afirmarlos tu.',
      en: 'It catches bugs a machine can see, such as contrast or a missing name. Focus trapped in a dialog, and returning focus on close, you have to assert yourself.',
    },
    distractors: [
      {
        es: 'Cubre casi todos los criterios. Si no hay avisos, el componente ya es accesible.',
        en: 'It covers almost every criterion. If there are no warnings, the component is already accessible.',
      },
      {
        es: 'El foco queda atrapado solo con role dialog y aria-modal. axe ya lo garantiza.',
        en: 'Focus is trapped by role dialog and aria-modal alone. axe already guarantees that.',
      },
    ],
    explanation: {
      es: 'Es una red, no un certificado. El orden del tab se prueba mirando que elemento tiene el foco tras pulsar Tab.',
      en: 'It is a net, not a certificate. Tab order is tested by checking which element has focus after you press Tab.',
    },
  },
];
