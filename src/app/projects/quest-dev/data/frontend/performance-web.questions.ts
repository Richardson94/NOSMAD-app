import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_PERFORMANCE_WEB_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-perf-01',
    topic: 'LCP',
    prompt: {
      es: '¿Qué mide Largest Contentful Paint, en palabras llanas?',
      en: 'What does Largest Contentful Paint measure, in plain words?',
    },
    answer: {
      es: 'Cuanto tarda en verse el bloque grande de la pagina, normalmente la imagen principal o un titulo. No es el final de la carga ni el primer pixel.',
      en: 'How long until the large block of the page is visible, usually the main image or a heading. It is not the end of loading or the first pixel.',
    },
    distractors: [
      {
        es: 'El tiempo hasta que todo el JavaScript cargo y la pagina ya responde a cada clic.',
        en: 'The time until all the JavaScript has loaded and the page already answers every click.',
      },
      {
        es: 'El primer pintado de cualquier cosa, aunque sea un fondo o un hueco vacio.',
        en: 'The first paint of anything, even a background or an empty slot.',
      },
    ],
    explanation: {
      es: 'Si esa imagen llega tarde o empuja el layout, el usuario siente que la pagina no ha aparecido.',
      en: 'If that image arrives late or pushes the layout, the user feels that the page has not shown up.',
    },
  },
  {
    id: 'fe-perf-02',
    topic: 'Zona de Angular',
    prompt: {
      es: '¿Para qué sirve runOutsideAngular?',
      en: 'What is runOutsideAngular for?',
    },
    answer: {
      es: 'Para que un scroll o una animacion muy seguida no dispare deteccion de cambios en cada paso.',
      en: 'So a scroll or a very frequent animation does not trigger change detection on every step.',
    },
    distractors: [
      {
        es: 'Para mover el trabajo a otro hilo y no bloquear el principal.',
        en: 'To move the work to another thread and not block the main one.',
      },
      {
        es: 'Para apagar la deteccion de cambios de toda la aplicacion mientras corre.',
        en: 'To turn off change detection for the whole application while it runs.',
      },
    ],
    explanation: {
      es: 'No cambia de hilo: eso seria un Worker. Al terminar, si la vista debe actualizarse, vuelves a entrar en la zona.',
      en: 'It does not switch threads: that would be a Worker. When you finish, if the view must update, you enter the zone again.',
    },
  },
  {
    id: 'fe-perf-03',
    topic: 'Hidratacion',
    prompt: {
      es: '¿Qué problema evita la hidratacion en una pagina renderizada en el servidor?',
      en: 'What problem does hydration avoid on a server-rendered page?',
    },
    answer: {
      es: 'Evita que el cliente tire el HTML del servidor y lo vuelva a crear, que es el parpadeo del primer pintado.',
      en: 'It stops the client from throwing away the server HTML and creating it again, which is the flicker of the first paint.',
    },
    distractors: [
      {
        es: 'Evita que el servidor renderice. Solo manda el HTML de un componente suelto.',
        en: 'It stops the server from rendering. It only sends the HTML of a single component.',
      },
      {
        es: 'Hace la pagina interactiva sin descargar el JavaScript del componente.',
        en: 'It makes the page interactive without downloading the component JavaScript.',
      },
    ],
    explanation: {
      es: 'El JavaScript sigue haciendo falta para los clics. La hidratacion reutiliza los nodos que ya estan.',
      en: 'The JavaScript is still required for clicks. Hydration reuses the nodes that are already there.',
    },
  },
  {
    id: 'fe-perf-04',
    topic: 'XSS en plantilla',
    prompt: {
      es: '¿Cómo se protege Angular del XSS al pintar un dato en la plantilla?',
      en: 'How does Angular protect against XSS when it paints a value in the template?',
    },
    answer: {
      es: 'Trata el dato como no confiable y lo sanea segun el sitio: texto, HTML, estilo o URL no se tratan igual.',
      en: 'It treats the value as untrusted and sanitises it for the place it is used: text, HTML, style or URL are not treated the same.',
    },
    distractors: [
      {
        es: 'Escapa todas las comillas igual, sin mirar si el dato va en un texto o en una URL.',
        en: 'It escapes every quote the same way, without looking at whether the value goes in text or in a URL.',
      },
      {
        es: 'Como la plantilla se compila antes, una cadena no puede ejecutarse y no hace falta sanear.',
        en: 'Because the template is compiled ahead of time, a string cannot run and sanitising is unnecessary.',
      },
    ],
    explanation: {
      es: 'bypassSecurityTrustHtml apaga esa red. Solo se usa con HTML que tu controlas.',
      en: 'bypassSecurityTrustHtml turns that net off. Use it only with HTML you control.',
    },
  },
  {
    id: 'fe-perf-05',
    topic: 'Interceptor',
    prompt: {
      es: '¿Para qué sirve un interceptor HTTP?',
      en: 'What is an HTTP interceptor for?',
    },
    answer: {
      es: 'Para una logica que aplica a muchas peticiones, como anadir el token, reintentar o registrar, sin repetirla en cada servicio.',
      en: 'For logic that applies to many requests, such as adding the token, retrying or logging, without repeating it in every service.',
    },
    distractors: [
      {
        es: 'Para convertir el DTO al modelo de dominio. Ese es su trabajo principal.',
        en: 'To convert the DTO into the domain model. That is its main job.',
      },
      {
        es: 'Para fijar la URL base del HttpClient. Sin interceptor no hay base URL.',
        en: 'To set the HttpClient base URL. Without an interceptor there is no base URL.',
      },
    ],
    explanation: {
      es: 'Puede clonar la peticion y seguir la cadena. Mapear el negocio sigue perteneciendo al servicio.',
      en: 'It can clone the request and continue the chain. Mapping the business data still belongs in the service.',
    },
  },
  {
    id: 'fe-perf-06',
    topic: 'Boton accesible',
    prompt: {
      es: '¿Por qué un div con click no equivale a un button?',
      en: 'Why is a div with a click handler not the same as a button?',
    },
    answer: {
      es: 'Porque no entra en el tab, no se activa con teclado y el lector de pantalla no lo anuncia como control.',
      en: 'Because it is not in the tab order, it does not activate with the keyboard and a screen reader does not announce it as a control.',
    },
    distractors: [
      {
        es: 'Con role button ya queda resuelto. No hace falta tabindex ni teclado.',
        en: 'With role button it is already solved. tabindex and a keyboard handler are not needed.',
      },
      {
        es: 'El click de un div si salta con Enter. Solo falla la barra espaciadora.',
        en: 'The click of a div does fire on Enter. Only the space bar fails.',
      },
    ],
    explanation: {
      es: 'Usa button. Rehacer foco, tecla y anuncio a mano es repetir lo que el boton nativo ya trae.',
      en: 'Use a button. Rebuilding focus, keys and the announcement by hand repeats what the native button already has.',
    },
  },
  {
    id: 'fe-perf-07',
    topic: 'Tree shaking',
    prompt: {
      es: '¿Qué significa que una libreria sea tree-shakeable?',
      en: 'What does it mean for a library to be tree-shakeable?',
    },
    answer: {
      es: 'Que el empaquetador puede quitar el codigo que nadie importa, porque usa modulos ES y no ejecuta efectos al cargarse.',
      en: 'That the bundler can drop code nobody imports, because it uses ES modules and does not run effects on load.',
    },
    distractors: [
      {
        es: 'Que viene partida en varios paquetes npm y por eso el bundle ya es pequeno.',
        en: 'That it is split into several npm packages and that is why the bundle is already small.',
      },
      {
        es: 'Que el autor ya minifico y comprimio el codigo antes de publicarlo.',
        en: 'That the author already minified and compressed the code before publishing.',
      },
    ],
    explanation: {
      es: 'Un import de todo el paquete, o un modulo CommonJS, suele impedir ese recorte.',
      en: 'An import of the whole package, or a CommonJS module, usually blocks that trimming.',
    },
  },
];
