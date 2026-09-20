import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_PERFORMANCE_WEB_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-perf-01',
    topic: 'Rendimiento web',
    prompt: {
      es: '¿Qué mide la métrica Largest Contentful Paint (LCP)?',
      en: 'What does the Largest Contentful Paint (LCP) metric measure?',
    },
    answer: {
      es: 'El tiempo hasta que se pinta el elemento de contenido más grande visible en la ventana.',
      en: 'The time until the largest content element visible in the viewport is painted.',
    },
    distractors: [
      {
        es: 'El tiempo hasta que la página termina de cargar todos sus recursos y queda completamente interactiva.',
        en: 'The time until the page finishes loading every resource and becomes fully interactive.',
      },
      {
        es: 'El tiempo hasta el primer pintado de cualquier contenido, descartando el fondo y los placeholders.',
        en: 'The time until the first paint of any content, ignoring background and placeholders.',
      },
    ],
    explanation: {
      es: 'LCP aproxima cuándo el usuario percibe que el contenido principal ya está ahí, normalmente la imagen del hero o un bloque de texto grande. La interactividad se mide con INP o TBT, y el primer contenido pintado es FCP: son métricas complementarias del mismo panorama.',
      en: 'LCP approximates when the user perceives the main content is there, usually the hero image or a large text block. Interactivity is measured with INP or TBT, and the first painted content is FCP: they are complementary metrics of the same picture.',
    },
  },
  {
    id: 'fe-perf-02',
    topic: 'Zone.js',
    prompt: {
      es: '¿Para qué sirve ejecutar código con ngZone.runOutsideAngular?',
      en: 'What is the purpose of running code with ngZone.runOutsideAngular?',
    },
    answer: {
      es: 'Para que tareas frecuentes como animaciones o scroll no disparen un ciclo de detección de cambios en cada paso.',
      en: 'So frequent tasks such as animations or scroll do not trigger a change detection cycle on every step.',
    },
    distractors: [
      {
        es: 'Para mover el trabajo intensivo a un hilo aparte y evitar bloquear el hilo principal del navegador.',
        en: 'To move heavy work to a separate thread and avoid blocking the browser main thread.',
      },
      {
        es: 'Para suspender la detección de cambios de toda la aplicación mientras se ejecuta la operación.',
        en: 'To suspend change detection for the entire application while the operation runs.',
      },
    ],
    explanation: {
      es: 'Zone.js parchea las APIs asíncronas para saber cuándo revisar la vista; un requestAnimationFrame o un mousemove dentro de la zona provoca decenas de ciclos por segundo. Salir de la zona evita solo esa notificación, no pausa la aplicación ni cambia de hilo (eso serían los Web Workers), y al terminar hay que volver con ngZone.run para reflejar cambios.',
      en: 'Zone.js patches async APIs to know when to check the view; a requestAnimationFrame or mousemove inside the zone causes dozens of cycles per second. Leaving the zone only avoids that notification: it does not pause the app nor switch threads (that would be Web Workers), and afterwards you must come back with ngZone.run to reflect changes.',
    },
  },
  {
    id: 'fe-perf-03',
    topic: 'SSR',
    prompt: {
      es: '¿Qué problema resuelve la hidratación incremental o no destructiva en Angular SSR?',
      en: 'What problem does incremental or non-destructive hydration solve in Angular SSR?',
    },
    answer: {
      es: 'Evita que el cliente destruya y vuelva a crear el DOM renderizado en el servidor, eliminando el parpadeo inicial.',
      en: 'It prevents the client from destroying and recreating the server-rendered DOM, removing the initial flicker.',
    },
    distractors: [
      {
        es: 'Evita que el servidor tenga que renderizar la aplicación completa, enviando solo el HTML de la ruta activa.',
        en: 'It avoids having the server render the whole application, sending only the active route HTML.',
      },
      {
        es: 'Permite que el HTML del servidor quede interactivo sin descargar el bundle de JavaScript del componente.',
        en: 'It lets the server HTML become interactive without downloading the component JavaScript bundle.',
      },
    ],
    explanation: {
      es: 'Sin hidratación, Angular tiraba el HTML del servidor y lo reconstruía, con salto visual y pérdida de estado del DOM; la hidratación reutiliza esos nodos. El JavaScript sigue siendo necesario para la interactividad, solo que puede diferirse por bloques, y el servidor siempre renderiza la ruta solicitada.',
      en: 'Without hydration, Angular threw away the server HTML and rebuilt it, causing a visual jump and losing DOM state; hydration reuses those nodes. JavaScript is still required for interactivity, it can just be deferred per block, and the server always renders the requested route.',
    },
  },
  {
    id: 'fe-perf-04',
    topic: 'Seguridad',
    prompt: {
      es: '¿Cómo protege Angular contra XSS al interpolar datos en la plantilla?',
      en: 'How does Angular protect against XSS when interpolating data in the template?',
    },
    answer: {
      es: 'Sanea los valores según el contexto de uso y trata todo dato como no confiable por defecto.',
      en: 'It sanitises values according to the usage context and treats every value as untrusted by default.',
    },
    distractors: [
      {
        es: 'Escapa todas las comillas y etiquetas HTML antes de insertarlas en el DOM, sin importar el contexto.',
        en: 'It escapes all quotes and HTML tags before inserting them into the DOM, regardless of context.',
      },
      {
        es: 'Bloquea la inyección porque las plantillas se compilan de antemano y no permiten evaluar cadenas como código.',
        en: 'It blocks injection because templates are compiled ahead of time and cannot evaluate strings as code.',
      },
    ],
    explanation: {
      es: 'El saneamiento es sensible al contexto: HTML, estilos, URLs y recursos se tratan con reglas distintas, y bypassSecurityTrustHtml existe para los casos donde el desarrollador asume el riesgo. La compilación previa ayuda, pero la protección de los valores dinámicos es el saneamiento, y escapar a ciegas rompería usos legítimos.',
      en: 'Sanitisation is context sensitive: HTML, styles, URLs and resources follow different rules, and bypassSecurityTrustHtml exists for cases where the developer accepts the risk. Ahead-of-time compilation helps, but the protection for dynamic values is sanitisation, and blind escaping would break legitimate usage.',
    },
  },
  {
    id: 'fe-perf-05',
    topic: 'HTTP',
    prompt: {
      es: '¿Cuál es el propósito de un HttpInterceptor?',
      en: 'What is the purpose of an HttpInterceptor?',
    },
    answer: {
      es: 'Interceptar cada petición y respuesta para aplicar lógica transversal como autenticación, reintentos o logging.',
      en: 'Intercept every request and response to apply cross-cutting concerns such as authentication, retries or logging.',
    },
    distractors: [
      {
        es: 'Transformar el cuerpo de la respuesta al modelo del dominio, centralizando el mapeo de los DTOs.',
        en: 'Transform the response body into the domain model, centralising DTO mapping.',
      },
      {
        es: 'Configurar la URL base y las cabeceras por defecto del HttpClient para toda la aplicación.',
        en: 'Configure the HttpClient base URL and default headers for the whole application.',
      },
    ],
    explanation: {
      es: 'El interceptor es la implementación del patrón cadena de responsabilidad para HTTP: cada uno puede clonar la petición, encadenar al siguiente y operar sobre el stream de respuesta. Aunque técnicamente podría mapear DTOs, eso pertenece al servicio de dominio; y la URL base se resuelve con configuración o un servicio, no interceptando.',
      en: 'An interceptor is the chain-of-responsibility pattern applied to HTTP: each one can clone the request, chain to the next and operate on the response stream. Although it could technically map DTOs, that belongs to the domain service; and the base URL is resolved with configuration or a service, not by intercepting.',
    },
  },
  {
    id: 'fe-perf-06',
    topic: 'Accesibilidad',
    prompt: {
      es: '¿Por qué un div con (click) no es equivalente a un button para la accesibilidad?',
      en: 'Why is a div with (click) not equivalent to a button for accessibility?',
    },
    answer: {
      es: 'Porque no es enfocable ni activable con teclado y no se anuncia como control a los lectores de pantalla.',
      en: 'Because it is not focusable or keyboard-activatable and is not announced as a control to screen readers.',
    },
    distractors: [
      {
        es: 'Porque necesita role="button" para que los lectores de pantalla lo anuncien correctamente; con eso queda resuelto.',
        en: 'Because it needs role="button" for screen readers to announce it correctly; with that it is solved.',
      },
      {
        es: 'Porque el evento click de un div no se dispara al pulsar Enter, aunque sí al pulsar la barra espaciadora.',
        en: 'Because the click event of a div does not fire on Enter, although it does on Space.',
      },
    ],
    explanation: {
      es: 'Un div no entra en el orden de tabulación ni traduce Enter o espacio en click, así que el usuario de teclado simplemente no puede usarlo. Añadir role solo arregla el anuncio: haría falta además tabindex y manejar los eventos de teclado, replicando a mano lo que button ya trae.',
      en: 'A div is not part of the tab order and does not translate Enter or Space into a click, so a keyboard user simply cannot use it. Adding role only fixes the announcement: you would also need tabindex and keyboard event handling, reimplementing by hand what button already provides.',
    },
  },
  {
    id: 'fe-perf-07',
    topic: 'Bundle',
    prompt: {
      es: '¿Qué significa que una librería sea tree-shakeable?',
      en: 'What does it mean for a library to be tree-shakeable?',
    },
    answer: {
      es: 'Que el empaquetador puede eliminar el código no importado porque usa módulos ES y no tiene efectos secundarios.',
      en: 'That the bundler can drop unimported code because it uses ES modules and has no side effects.',
    },
    distractors: [
      {
        es: 'Que se distribuye en varios paquetes independientes para importar solo la parte que se necesita.',
        en: 'That it is distributed as several independent packages so you import only the part you need.',
      },
      {
        es: 'Que minifica y comprime su código antes de publicarlo, reduciendo el peso final del bundle.',
        en: 'That it minifies and compresses its code before publishing, reducing the final bundle size.',
      },
    ],
    explanation: {
      es: 'El tree shaking es análisis estático: requiere imports y exports ES para saber qué se usa, y que el módulo no ejecute nada al cargarse (de ahí la bandera sideEffects en package.json). Los formatos CommonJS lo impiden. Dividir en subpaquetes o minificar son estrategias distintas para reducir el peso.',
      en: 'Tree shaking is static analysis: it needs ES imports and exports to know what is used, plus modules that execute nothing on load (hence the sideEffects flag in package.json). CommonJS formats prevent it. Splitting into subpackages or minifying are different size-reduction strategies.',
    },
  },
];
