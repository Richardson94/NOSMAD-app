import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_WEB_PERFORMANCE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-web-01',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Cuáles son las causas típicas del Cumulative Layout Shift (CLS) y cómo se evitan reservando espacio?',
      en: 'What are the typical causes of Cumulative Layout Shift (CLS) and how is it avoided by reserving space?',
    },
    answer: {
      es: 'Imágenes, anuncios o fuentes sin dimensiones empujan el contenido ya pintado; reservar width, height o aspect-ratio mantiene estable el layout.',
      en: 'Images, ads or fonts without dimensions push already painted content; reserving width, height or aspect-ratio keeps the layout stable.',
    },
    distractors: [
      {
        es: 'El CLS mide el tiempo hasta que se pinta el elemento más grande, y se mejora comprimiendo esa imagen para que llegue antes.',
        en: 'CLS measures the time until the largest element is painted, and it is improved by compressing that image so it arrives sooner.',
      },
      {
        es: 'Las animaciones con transform y opacity desplazan capas y hay que desactivarlas para no sumar al CLS.',
        en: 'Animations with transform and opacity move layers and must be disabled so they do not add to CLS.',
      },
    ],
    explanation: {
      es: 'CLS es una Core Web Vital que acumula las entradas layout-shift con hadRecentInput en falso; el umbral bueno es 0.1. Un img sin width y height, un webfont que cambia métricas o un banner inyectado provocan esas entradas en el PerformanceObserver de tipo layout-shift. Reservar el hueco con atributos width y height, con aspect-ratio o con min-height evita el salto; las animaciones compositadas con transform no cuentan.',
      en: 'CLS is a Core Web Vital that accumulates layout-shift entries with hadRecentInput false; the good threshold is 0.1. An img without width and height, a webfont that changes metrics or an injected banner produce those entries in the PerformanceObserver of type layout-shift. Reserving the slot with width and height attributes, with aspect-ratio or with min-height prevents the jump; compositing animations with transform do not count.',
    },
  },
  {
    id: 'fe-web-02',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Por qué INP sustituyó a FID y qué relación tiene con las tareas largas del hilo principal?',
      en: 'Why did INP replace FID and how does it relate to long tasks on the main thread?',
    },
    answer: {
      es: 'FID solo miraba el retraso de la primera interacción; INP observa todas a lo largo de la vida de la página, y una long task de más de 50 ms retrasa el siguiente pintado.',
      en: 'FID only looked at the delay of the first interaction; INP observes every interaction across the page lifetime, and a long task over 50 ms delays the next paint.',
    },
    distractors: [
      {
        es: 'INP es el tiempo hasta que la página queda totalmente interactiva, el mismo concepto que TTI, y sustituyó a FID porque TTI no era una Core Web Vital.',
        en: 'INP is the time until the page becomes fully interactive, the same idea as TTI, and it replaced FID because TTI was not a Core Web Vital.',
      },
      {
        es: 'INP es el nombre nuevo de Total Blocking Time, la métrica de laboratorio que suma los tramos de long task por encima de 50 ms.',
        en: 'INP is the new name of Total Blocking Time, the lab metric that sums the long task slices above 50 ms.',
      },
    ],
    explanation: {
      es: 'INP (Interaction to Next Paint) es la Core Web Vital de interactividad desde marzo de 2024 y se calcula con la Event Timing API, no con la primera entrada de First Input Delay. Una long task, visible en el PerformanceObserver de tipo longtask, ocupa el hilo más de 50 ms y deja la interacción sin pintar. TBT sigue siendo la aproximación de laboratorio de Lighthouse; no es un sustituto de FID ni coincide con INP, que es una métrica de campo.',
      en: 'INP (Interaction to Next Paint) is the interactivity Core Web Vital since March 2024 and it is computed with the Event Timing API, not with the first First Input Delay entry. A long task, visible in the PerformanceObserver of type longtask, occupies the thread for more than 50 ms and leaves the interaction unpainted. TBT remains the Lighthouse lab approximation; it is not a substitute for FID and it does not match INP, which is a field metric.',
    },
  },
  {
    id: 'fe-web-03',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Qué mide el Time to First Byte (TTFB) y qué papel juegan el servidor y el CDN?',
      en: 'What does Time to First Byte (TTFB) measure and what role do the server and the CDN play?',
    },
    answer: {
      es: 'El tiempo desde el inicio de la navegación hasta el primer byte de la respuesta; el servidor lo aumenta con trabajo y latencia de origen, y un CDN lo reduce sirviendo desde un punto cercano.',
      en: 'The time from the start of the navigation until the first byte of the response; the server increases it with origin work and latency, and a CDN reduces it by serving from a nearby point.',
    },
    distractors: [
      {
        es: 'El tiempo hasta que se pinta el primer píxel, de modo que optimizar el CDN solo sirve si las imágenes viajan por él.',
        en: 'The time until the first pixel is painted, so optimising the CDN only helps if the images travel through it.',
      },
      {
        es: 'El tiempo de DNS y TLS únicamente; el procesamiento del servidor no entra porque ya queda cubierto por la métrica Server Timing.',
        en: 'DNS and TLS time only; server processing is not included because it is already covered by the Server Timing metric.',
      },
    ],
    explanation: {
      es: 'TTFB se obtiene en Navigation Timing como responseStart menos startTime (o menos requestStart si se excluyen redirecciones). Incluye DNS, TCP, TLS y la espera hasta que el origen o el CDN empiezan a enviar el HTML. Un Cache-Control corto o s-maxage en el documento permite que el CDN conteste sin ir al origen; un TTFB alto empuja LCP aunque el resto del front esté optimizado.',
      en: 'TTFB is obtained in Navigation Timing as responseStart minus startTime (or minus requestStart if redirects are excluded). It includes DNS, TCP, TLS and the wait until the origin or the CDN starts sending the HTML. A short Cache-Control or s-maxage on the document lets the CDN answer without going to the origin; a high TTFB pushes LCP even when the rest of the front end is already optimised.',
    },
  },
  {
    id: 'fe-web-04',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Qué recursos bloquean la ruta crítica de renderizado y cómo cambian eso defer y async?',
      en: 'Which resources block the critical rendering path and how do defer and async change that?',
    },
    answer: {
      es: 'Las hojas CSS y los scripts síncronos bloquean el parseo o el primer pintado; defer descarga en paralelo y ejecuta al terminar el HTML conservando el orden, async ejecuta en cuanto llega y no garantiza orden.',
      en: 'CSS stylesheets and synchronous scripts block parsing or first paint; defer downloads in parallel and runs when the HTML is finished, keeping order, async runs as soon as it arrives and does not guarantee order.',
    },
    distractors: [
      {
        es: 'defer y async bloquean el parser mientras descargan, y la única diferencia es que async ignora el CSSOM.',
        en: 'defer and async block the parser while they download, and the only difference is that async ignores the CSSOM.',
      },
      {
        es: 'Un stylesheet servido desde un CDN deja de ser render-blocking, así que preload es innecesario en ese caso.',
        en: 'A stylesheet served from a CDN stops being render-blocking, so preload is unnecessary in that case.',
      },
    ],
    explanation: {
      es: 'El parser construye el DOM y necesita el CSSOM para el primer pintado, por eso un link rel=stylesheet en el head es render-blocking. Un script sin async ni defer detiene el parseo al ejecutarse. El atributo defer (y type=module, que se difiere por defecto) espera a que el documento esté parseado y respeta el orden; async interrumpe el parser cuando el fichero está listo, útil para analítica independiente. Ninguna de las dos flags afecta a las hojas de estilo.',
      en: 'The parser builds the DOM and needs the CSSOM for first paint, which is why a link rel=stylesheet in the head is render-blocking. A script without async or defer stops parsing when it runs. The defer attribute (and type=module, which is deferred by default) waits until the document is parsed and respects order; async interrupts the parser when the file is ready, useful for independent analytics. Neither flag affects stylesheets.',
    },
  },
  {
    id: 'fe-web-05',
    topic: 'Plataforma web',
    prompt: {
      es: '¿En qué se distinguen preload, prefetch y preconnect al preparar recursos?',
      en: 'How do preload, prefetch and preconnect differ when preparing resources?',
    },
    answer: {
      es: 'preload pide con prioridad alta un recurso de la navegación actual (exige as); prefetch adelanta algo de una navegación futura con prioridad baja; preconnect solo abre DNS, TCP y TLS hacia un origen.',
      en: 'preload fetches at high priority a resource of the current navigation (as is required); prefetch warms something for a future navigation at low priority; preconnect only opens DNS, TCP and TLS toward an origin.',
    },
    distractors: [
      {
        es: 'preload y prefetch son equivalentes: ambos descargan ya el fichero, y preconnect además lo ejecuta.',
        en: 'preload and prefetch are equivalent: both already download the file, and preconnect also executes it.',
      },
      {
        es: 'prefetch es la forma correcta de cargar el CSS crítico de la página actual, porque no compite con LCP.',
        en: 'prefetch is the correct way to load the critical CSS of the current page, because it does not compete with LCP.',
      },
    ],
    explanation: {
      es: 'Los tres se declaran con link rel o con la cabecera Link del HTTP. preload sin as es inválido y para fuentes hace falta crossorigin; conviene usarlo en la imagen o fuente de LCP. prefetch usa prioridad Low y el navegador puede descartarlo. preconnect (y dns-prefetch, que solo resuelve DNS) no transfiere bytes del recurso, solo adelanta el handshake, típico con un CDN de fuentes o API.',
      en: 'All three are declared with link rel or with the HTTP Link header. preload without as is invalid and fonts also need crossorigin; it is worth using it on the LCP image or font. prefetch uses Low priority and the browser may discard it. preconnect (and dns-prefetch, which only resolves DNS) does not transfer resource bytes, it only advances the handshake, typical with a font or API CDN.',
    },
  },
  {
    id: 'fe-web-06',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Cómo se combinan srcset, la carga diferida y los formatos modernos para optimizar imágenes?',
      en: 'How do srcset, lazy loading and modern formats combine to optimise images?',
    },
    answer: {
      es: 'srcset y sizes sirven la densidad o el ancho adecuados, loading="lazy" aplaza las que están fuera del viewport y AVIF o WebP reducen bytes frente a JPEG o PNG.',
      en: 'srcset and sizes serve the right density or width, loading="lazy" defers those outside the viewport and AVIF or WebP cut bytes compared with JPEG or PNG.',
    },
    distractors: [
      {
        es: 'La imagen LCP debe llevar loading="lazy" para no competir con el HTML, y srcset solo sirve si se omite sizes.',
        en: 'The LCP image must carry loading="lazy" so it does not compete with the HTML, and srcset only works if sizes is omitted.',
      },
      {
        es: 'Un JPEG incrustado en base64 evita la petición y siempre gana a AVIF con srcset, porque no hay round-trip.',
        en: 'A JPEG embedded as base64 avoids the request and always beats AVIF with srcset, because there is no round-trip.',
      },
    ],
    explanation: {
      es: 'El navegador elige candidato con srcset más sizes; sin sizes asume 100vw y puede bajar de más. loading="lazy" (o fetchpriority="low") no debe aplicarse al candidato de LCP: retrasa el decode y empeora la métrica. AVIF y WebP se negocian con type en source o con un loader; el Content-Type del response confirma el formato. El base64 infla el HTML, no se cachea aparte y bloquea el documento.',
      en: 'The browser picks a candidate with srcset plus sizes; without sizes it assumes 100vw and may over-download. loading="lazy" (or fetchpriority="low") must not be applied to the LCP candidate: it delays decode and worsens the metric. AVIF and WebP are negotiated with type on source or with a loader; the Content-Type of the response confirms the format. base64 inflates the HTML, is not cached separately and blocks the document.',
    },
  },
  {
    id: 'fe-web-07',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Qué aporta la directiva NgOptimizedImage en Angular 17?',
      en: 'What does the NgOptimizedImage directive add in Angular 17?',
    },
    answer: {
      es: 'Obliga a declarar tamaño, genera srcset, pone loading lazy por defecto y con priority precarga la imagen LCP (fetchpriority high y link preload).',
      en: 'It requires a declared size, generates srcset, sets loading lazy by default and with priority it preloads the LCP image (fetchpriority high and a preload link).',
    },
    distractors: [
      {
        es: 'Convierte en el navegador cualquier URL a AVIF y sustituye el img por un canvas para recortar el decode del hilo principal.',
        en: 'It converts any URL to AVIF in the browser and replaces the img with a canvas to take decode off the main thread.',
      },
      {
        es: 'Elimina la necesidad de width y height porque calcula el hueco tras el primer pintado, que es justo cuando deja de contar para CLS.',
        en: 'It removes the need for width and height because it computes the slot after first paint, which is exactly when it stops counting for CLS.',
      },
    ],
    explanation: {
      es: 'NgOptimizedImage se activa con ngSrc en un img (paquete @angular/common) y exige width y height o fill para reservar espacio y frenar CLS. El input priority añade fetchpriority="high", loading="eager" y un preload; sin él la directiva usa lazy y Lighthouse avisa si esa imagen es LCP. El token IMAGE_LOADER construye las URLs y el srcset; no transcodifica en el cliente.',
      en: 'NgOptimizedImage is activated with ngSrc on an img (@angular/common package) and requires width and height or fill to reserve space and hold CLS down. The priority input adds fetchpriority="high", loading="eager" and a preload; without it the directive uses lazy and Lighthouse warns if that image is LCP. The IMAGE_LOADER token builds the URLs and the srcset; it does not transcode on the client.',
    },
  },
  {
    id: 'fe-web-08',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Cómo colaboran Cache-Control, ETag y los assets con hash inmutables en la caché HTTP?',
      en: 'How do Cache-Control, ETag and hashed immutable assets work together in the HTTP cache?',
    },
    answer: {
      es: 'Cache-Control decide cuánto se reutiliza el response, ETag valida con If-None-Match y un 304, y el fichero con hash se sirve con max-age largo e immutable porque el nombre cambia al cambiar el contenido.',
      en: 'Cache-Control decides how long the response is reused, ETag validates with If-None-Match and a 304, and a hashed file is served with a long max-age and immutable because the name changes when the content changes.',
    },
    distractors: [
      {
        es: 'Los JS y CSS hasheados deben ir con Cache-Control: no-cache para que el navegador pregunte siempre, y el HTML con immutable para no revalidar el documento.',
        en: 'Hashed JS and CSS must go with Cache-Control: no-cache so the browser always revalidates, and the HTML with immutable so the document is not revalidated.',
      },
      {
        es: 'ETag sustituye a Cache-Control: si el servidor envía ETag, max-age se ignora y cada visita hace un GET completo.',
        en: 'ETag replaces Cache-Control: if the server sends ETag, max-age is ignored and every visit does a full GET.',
      },
    ],
    explanation: {
      es: 'La cabecera Cache-Control (max-age, s-maxage, no-cache, immutable) manda sobre la frescura; no-cache obliga a revalidar, no a no guardar. ETag viaja con If-None-Match y puede responder 304 Not Modified sin cuerpo. Angular pone hash en los chunks (output hashing); esos assets admiten Cache-Control: public, max-age=31536000, immutable, mientras el index.html se sirve corto o no-cache para descubrir el nuevo hash.',
      en: 'The Cache-Control header (max-age, s-maxage, no-cache, immutable) governs freshness; no-cache forces revalidation, not a ban on storing. ETag travels with If-None-Match and can answer 304 Not Modified without a body. Angular puts a hash on chunks (output hashing); those assets can use Cache-Control: public, max-age=31536000, immutable, while index.html is served short or no-cache so the new hash can be discovered.',
    },
  },
  {
    id: 'fe-web-09',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Qué estrategias de caché usa un service worker y qué ofrece el de Angular?',
      en: 'What cache strategies does a service worker use and what does the Angular one provide?',
    },
    answer: {
      es: 'Las clásicas son cache-first, network-first y stale-while-revalidate; el service worker de Angular las configura en ngsw-config.json con assetGroups (prefetch o lazy) y dataGroups (performance o freshness).',
      en: 'The classic ones are cache-first, network-first and stale-while-revalidate; the Angular service worker configures them in ngsw-config.json with assetGroups (prefetch or lazy) and dataGroups (performance or freshness).',
    },
    distractors: [
      {
        es: 'El ngsw ignora Cache-Control y aplica cache-first a todas las peticiones HTTP, incluidas las mutaciones POST, para que la app funcione offline al instante.',
        en: 'ngsw ignores Cache-Control and applies cache-first to every HTTP request, including POST mutations, so the app works offline instantly.',
      },
      {
        es: 'Angular registra un service worker que solo precarga el index.html; el resto de estrategias hay que implementarlas a mano con la Cache API porque ngsw-config no existe en Angular 17.',
        en: 'Angular registers a service worker that only precaches index.html; every other strategy must be implemented by hand with the Cache API because ngsw-config does not exist in Angular 17.',
      },
    ],
    explanation: {
      es: 'El service worker intercepta fetch y usa la Cache API; performance en dataGroups equivale a cache-first y freshness a network-first con timeout. assetGroups con installMode prefetch descarga en la instalación (típico de los JS hasheados) y lazy espera a la primera visita. El paquete @angular/service-worker genera ngsw-worker.js; no sustituye la caché HTTP y no cachea POST. La frescura del HTML sigue dependiendo de Cache-Control y de las actualizaciones del manifiesto ngsw.json.',
      en: 'The service worker intercepts fetch and uses the Cache API; performance in dataGroups equals cache-first and freshness equals network-first with a timeout. assetGroups with installMode prefetch download during install (typical of hashed JS) and lazy waits for the first visit. The @angular/service-worker package generates ngsw-worker.js; it does not replace the HTTP cache and it does not cache POST. Freshness of the HTML still depends on Cache-Control and on updates of the ngsw.json manifest.',
    },
  },
  {
    id: 'fe-web-10',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Para qué sirven los presupuestos de bundle y cómo se analizan los chunks generados?',
      en: 'What are bundle budgets for and how are the generated chunks analysed?',
    },
    answer: {
      es: 'Los budgets en angular.json fallan o avisan el build si un bundle supera el umbral; el análisis se hace con el stats del compilador y herramientas como source-map-explorer.',
      en: 'Budgets in angular.json fail or warn the build if a bundle exceeds the threshold; analysis is done with the compiler stats and tools such as source-map-explorer.',
    },
    distractors: [
      {
        es: 'Los budgets limitan el tamaño de la caché HTTP en el navegador y se configuran con la cabecera Budget-Control.',
        en: 'Budgets limit the HTTP cache size in the browser and are configured with the Budget-Control header.',
      },
      {
        es: 'El presupuesto initial incluye todos los lazy chunks, así que dividir por ruta no reduce ese número y solo sirve para el anyComponentStyle.',
        en: 'The initial budget includes every lazy chunk, so splitting by route does not reduce that number and only helps anyComponentStyle.',
      },
    ],
    explanation: {
      es: 'En angular.json, budgets admite initial, all, allScript, anyScript, any, anyComponentStyle, con maximumWarning y maximumError. El initial cubre el bundle de arranque, no los chunks lazy de loadChildren. ng build puede emitir stats (esbuild o webpack) y source-map-explorer o webpack-bundle-analyzer muestran qué módulos inflan cada fichero. Superar el error rompe CI; no tiene nada que ver con cabeceras HTTP.',
      en: 'In angular.json, budgets accepts initial, all, allScript, anyScript, any, anyComponentStyle, with maximumWarning and maximumError. initial covers the startup bundle, not the lazy chunks of loadChildren. ng build can emit stats (esbuild or webpack) and source-map-explorer or webpack-bundle-analyzer show which modules inflate each file. Exceeding the error breaks CI; it has nothing to do with HTTP headers.',
    },
  },
  {
    id: 'fe-web-11',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Qué diferencia hay entre dividir código por ruta y dividirlo por componente en Angular 17?',
      en: 'What is the difference between splitting code by route and splitting it by component in Angular 17?',
    },
    answer: {
      es: 'La división por ruta usa loadChildren o loadComponent y descarga el chunk al navegar; la de componente usa @defer (o import dinámico) y puede esperar a viewport, idle o interacción.',
      en: 'Route splitting uses loadChildren or loadComponent and downloads the chunk on navigation; component splitting uses @defer (or a dynamic import) and can wait for viewport, idle or interaction.',
    },
    distractors: [
      {
        es: 'loadComponent y @defer generan el mismo chunk y se descargan juntos en el bootstrap, así que la diferencia es solo sintáctica.',
        en: 'loadComponent and @defer generate the same chunk and both download together at bootstrap, so the difference is only syntactic.',
      },
      {
        es: 'La división por ruta retrasa el main bundle hasta el primer click, mientras que @defer siempre entra en el bundle initial para poder hidratar.',
        en: 'Route splitting delays the main bundle until the first click, while @defer always enters the initial bundle so it can hydrate.',
      },
    ],
    explanation: {
      es: 'El router resuelve loadChildren y loadComponent con import() y crea un chunk por ruta que no viaja en el initial. @defer también emite un chunk, pero el disparador (on viewport, on idle, on interaction) decide cuándo se pide, incluso dentro de una ruta ya activa. Mezclar ambos es el patrón habitual: lazy route para el área y @defer para bloques pesados bajo el pliegue. El main bundle sigue siendo el que arranca la aplicación.',
      en: 'The router resolves loadChildren and loadComponent with import() and creates a chunk per route that does not travel in the initial bundle. @defer also emits a chunk, but the trigger (on viewport, on idle, on interaction) decides when it is requested, even inside an already active route. Mixing both is the usual pattern: a lazy route for the area and @defer for heavy below-the-fold blocks. The main bundle is still what boots the application.',
    },
  },
  {
    id: 'fe-web-12',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Qué hacen los disparadores viewport, interaction e idle de un bloque @defer?',
      en: 'What do the viewport, interaction and idle triggers of an @defer block do?',
    },
    answer: {
      es: 'viewport carga al entrar en el visor (IntersectionObserver), interaction espera un click, input o tecla en el placeholder, e idle espera a requestIdleCallback.',
      en: 'viewport loads when it enters the viewer (IntersectionObserver), interaction waits for a click, input or key on the placeholder, and idle waits for requestIdleCallback.',
    },
    distractors: [
      {
        es: 'idle espera el primer click del usuario, interaction observa el viewport y viewport usa el evento scroll del window.',
        en: 'idle waits for the first user click, interaction observes the viewport and viewport uses the window scroll event.',
      },
      {
        es: 'Los tres disparadores solo ocultan el DOM ya creado; el chunk del componente siempre se descarga en el bootstrap junto al padre.',
        en: 'All three triggers only hide the already created DOM; the component chunk is always downloaded at bootstrap together with the parent.',
      },
    ],
    explanation: {
      es: '@defer on viewport se apoya en IntersectionObserver (con un rootMargin opcional), no en scroll ni en getBoundingClientRect por frame. on interaction escucha eventos de usuario sobre el placeholder; on idle usa requestIdleCallback o un timeout de respaldo. El chunk no se pide hasta el disparador, salvo que se añada prefetch on idle. @placeholder, @loading y @error cubren los estados, y when permite una condición además del on.',
      en: '@defer on viewport relies on IntersectionObserver (with an optional rootMargin), not on scroll or on getBoundingClientRect per frame. on interaction listens for user events on the placeholder; on idle uses requestIdleCallback or a fallback timeout. The chunk is not requested until the trigger, unless prefetch on idle is added. @placeholder, @loading and @error cover the states, and when allows a condition in addition to on.',
    },
  },
  {
    id: 'fe-web-13',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Por qué una SPA Angular puede filtrar memoria con nodos desprendidos, listeners y suscripciones?',
      en: 'Why can an Angular SPA leak memory through detached nodes, listeners and subscriptions?',
    },
    answer: {
      es: 'El componente se destruye pero un listener global, una suscripción RxJS o una referencia en un servicio siguen anclando nodos o closures, y el recolector no puede liberarlos.',
      en: 'The component is destroyed but a global listener, an RxJS subscription or a reference in a service still anchors nodes or closures, and the collector cannot free them.',
    },
    distractors: [
      {
        es: 'Angular desuscribe automáticamente cualquier Observable al disparar ngOnDestroy, así que las fugas solo ocurren con setTimeout.',
        en: 'Angular automatically unsubscribes every Observable when ngOnDestroy fires, so leaks only happen with setTimeout.',
      },
      {
        es: 'Un nodo que *ngIf quita del DOM queda desprendido y se recolecta al instante aunque un Map global guarde su ElementRef.',
        en: 'A node that *ngIf removes from the DOM becomes detached and is collected instantly even if a global Map stores its ElementRef.',
      },
    ],
    explanation: {
      es: 'En una SPA el documento no se recarga, así que hay que limpiar a mano: addEventListener sobre window o document sobrevive al componente y se evita con removeEventListener o takeUntilDestroyed (DestroyRef). async pipe sí se desuscribe, el subscribe manual no. En DevTools, Detached HTMLElement señala nodos fuera del árbol aún retenidos por un closure, lo que infla memoria y puede degradar INP con el tiempo.',
      en: 'In an SPA the document is not reloaded, so cleanup must be done by hand: addEventListener on window or document survives the component and is prevented with removeEventListener or takeUntilDestroyed (DestroyRef). async pipe does unsubscribe, a manual subscribe does not. In DevTools, Detached HTMLElement flags nodes outside the tree still held by a closure, which inflates memory and can degrade INP over time.',
    },
  },
  {
    id: 'fe-web-14',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Para qué sirve el scroll virtual en listas muy grandes?',
      en: 'What is virtual scroll for in very large lists?',
    },
    answer: {
      es: 'Renderiza solo los ítems visibles (y un pequeño buffer), reciclando nodos del DOM para no crear miles de filas a la vez.',
      en: 'It renders only the visible items (and a small buffer), recycling DOM nodes so thousands of rows are not created at once.',
    },
    distractors: [
      {
        es: 'Es lo mismo que el infinite scroll: pide la siguiente página al API cuando el usuario llega al final, y deja en el DOM todo lo ya cargado.',
        en: 'It is the same as infinite scroll: it asks the API for the next page when the user reaches the end, and it leaves everything already loaded in the DOM.',
      },
      {
        es: 'El navegador virtualiza solo con overflow:auto y content-visibility, así que CDK virtual scroll no cambia el número de nodos.',
        en: 'The browser virtualises with overflow:auto and content-visibility alone, so CDK virtual scroll does not change the node count.',
      },
    ],
    explanation: {
      es: 'CdkVirtualScrollViewport (@angular/cdk/scrolling) calcula qué índices caen en el viewport con itemSize o autosize y recicla las filas. Miles de componentes Angular vivos destruyen INP y memoria; el scroll virtual mantiene un DOM pequeño y no sustituye la paginación del API. content-visibility: auto puede saltar pintura, pero los nodos siguen en el árbol, a diferencia del reciclado del CDK; un trackBy estable evita recrear vistas al reciclar.',
      en: 'CdkVirtualScrollViewport (@angular/cdk/scrolling) computes which indexes fall in the viewport with itemSize or autosize and recycles the rows. Thousands of live Angular components destroy INP and memory; virtual scroll keeps a small DOM and does not replace API pagination. content-visibility: auto can skip painting, but the nodes stay in the tree, unlike CDK recycling; a stable trackBy avoids recreating views when recycling.',
    },
  },
  {
    id: 'fe-web-15',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Por qué ResizeObserver permite medir un elemento sin el reflujo que provoca el evento resize?',
      en: 'Why does ResizeObserver let you measure an element without the reflow that the resize event causes?',
    },
    answer: {
      es: 'El evento resize del window no avisa de cambios de un elemento y leer offsetWidth o getBoundingClientRect sincroniza el layout; ResizeObserver entrega contentRect de forma asíncrona, sin forzar ese recálculo.',
      en: 'The window resize event does not notify of element changes and reading offsetWidth or getBoundingClientRect flushes layout; ResizeObserver delivers contentRect asynchronously, without forcing that recalculation.',
    },
    distractors: [
      {
        es: 'ResizeObserver es un alias del evento resize del window y hay que leer clientWidth dentro del callback para obtener el tamaño real, igual que antes.',
        en: 'ResizeObserver is an alias of the window resize event and you must read clientWidth inside the callback to obtain the real size, just as before.',
      },
      {
        es: 'Para no provocar reflujos hay que medir en el handler de resize con getBoundingClientRect, porque ResizeObserver solo observa el documento, no un nodo concreto.',
        en: 'To avoid reflows you must measure in the resize handler with getBoundingClientRect, because ResizeObserver only observes the document, not a specific node.',
      },
    ],
    explanation: {
      es: 'Leer offsetWidth, clientHeight o getBoundingClientRect después de mutar el DOM fuerza un reflow (layout thrashing). El evento resize solo cubre el viewport, no un aside que cambia de ancho. ResizeObserver (y su contentBoxSize o contentRect) notifica cuando cambia el tamaño del elemento observado, en un paso posterior al layout, sin lecturas síncronas. Es la API adecuada para gráficos o virtual scroll que deben reaccionar al contenedor.',
      en: 'Reading offsetWidth, clientHeight or getBoundingClientRect after mutating the DOM forces a reflow (layout thrashing). The resize event only covers the viewport, not an aside that changes width. ResizeObserver (and its contentBoxSize or contentRect) notifies when the observed element size changes, in a step after layout, without synchronous reads. It is the right API for charts or virtual scroll that must react to the container.',
    },
  },
  {
    id: 'fe-web-16',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Cómo se usa un Web Worker para trabajo intensivo de CPU en Angular sin bloquear la UI?',
      en: 'How is a Web Worker used for CPU intensive work in Angular without blocking the UI?',
    },
    answer: {
      es: 'Se crea con new Worker (ng generate web-worker), se envían datos por postMessage y el resultado vuelve al hilo principal; el worker no puede tocar el DOM ni la zona de Angular.',
      en: 'It is created with new Worker (ng generate web-worker), data is sent with postMessage and the result returns to the main thread; the worker cannot touch the DOM or the Angular zone.',
    },
    distractors: [
      {
        es: 'El worker recibe un ComponentRef y llama a detectChanges allí, de modo que la plantilla se actualiza en segundo plano sin Zone.js.',
        en: 'The worker receives a ComponentRef and calls detectChanges there, so the template updates in the background without Zone.js.',
      },
      {
        es: 'Zone.js parchea Worker para que cualquier cálculo en el hilo principal se mueva solo; no hace falta postMessage ni un fichero aparte.',
        en: 'Zone.js patches Worker so that any computation on the main thread is moved by itself; there is no need for postMessage or a separate file.',
      },
    ],
    explanation: {
      es: 'Un Worker corre en otro hilo: postMessage clona los datos (structured clone) y no comparte el Document, así que no hay Renderer2 ni change detection allí. ng generate web-worker crea el fichero y el tsconfig con webWorkerTsConfig. Al volver el mensaje hay que actualizar signals o pasar por NgZone.run si se usa Zone.js, para que la vista se entere. Mover CSV, crypto o canvas pesados reduce long tasks y mejora INP y TBT.',
      en: 'A Worker runs on another thread: postMessage clones the data (structured clone) and does not share Document, so there is no Renderer2 or change detection there. ng generate web-worker creates the file and the tsconfig with webWorkerTsConfig. When the message returns you must update signals or go through NgZone.run if Zone.js is used, so the view is notified. Moving heavy CSV, crypto or canvas work reduces long tasks and improves INP and TBT.',
    },
  },
  {
    id: 'fe-web-17',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Para qué sirve requestIdleCallback al programar trabajo no urgente?',
      en: 'What is requestIdleCallback for when scheduling non urgent work?',
    },
    answer: {
      es: 'Ejecuta el callback cuando el hilo principal está ocioso, con un IdleDeadline.timeRemaining para no pasarse de frame; no vale para input, animaciones ni pintar.',
      en: 'It runs the callback when the main thread is idle, with IdleDeadline.timeRemaining so a frame is not overrun; it is not suitable for input, animations or painting.',
    },
    distractors: [
      {
        es: 'Garantiza al menos 50 ms de CPU en cada frame, igual que una long task planificada, y sustituye a requestAnimationFrame.',
        en: 'It guarantees at least 50 ms of CPU on every frame, the same as a planned long task, and it replaces requestAnimationFrame.',
      },
      {
        es: 'Es un alias de setTimeout(0): el callback entra en la cola de macrotasks con la misma prioridad que un click.',
        en: 'It is an alias of setTimeout(0): the callback enters the macrotask queue with the same priority as a click.',
      },
    ],
    explanation: {
      es: 'requestIdleCallback recibe un IdleDeadline con timeRemaining y didTimeout; el parámetro timeout fuerza la ejecución si no hay ociosidad. requestAnimationFrame sigue siendo el sitio para pintar; mezclar trabajo pesado ahí crea long tasks y sube INP, y Angular usa este idle en @defer on idle. Donde la API no existe se cae a setTimeout, que no conoce el tiempo libre del frame, y nunca debe usarse para responder a un input del usuario.',
      en: 'requestIdleCallback receives an IdleDeadline with timeRemaining and didTimeout; the timeout parameter forces execution if there is no idle time. requestAnimationFrame remains the place to paint; mixing heavy work there creates long tasks and raises INP, and Angular uses this idle in @defer on idle. Where the API is missing the fallback is setTimeout, which does not know the free time of the frame, and it must never be used to answer a user input.',
    },
  },
  {
    id: 'fe-web-18',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Qué efecto tienen gzip y Brotli sobre los assets de texto?',
      en: 'What effect do gzip and Brotli have on text assets?',
    },
    answer: {
      es: 'Comprimen HTML, JS, CSS, SVG y JSON en tránsito (Content-Encoding gzip o br), recortando muchos bytes; en JPEG, PNG o WebP ya comprimidos el ahorro es nulo o negativo.',
      en: 'They compress HTML, JS, CSS, SVG and JSON in transit (Content-Encoding gzip or br), cutting many bytes; on already compressed JPEG, PNG or WebP the saving is null or negative.',
    },
    distractors: [
      {
        es: 'Brotli reduce a la mitad cualquier JPEG porque trabaja a nivel de pixel, y gzip es mejor para el JavaScript minificado.',
        en: 'Brotli halves any JPEG because it works at pixel level, and gzip is better for minified JavaScript.',
      },
      {
        es: 'El bundler ya deja los chunks en gzip, así que el servidor debe enviarlos sin Content-Encoding para no comprimir dos veces.',
        en: 'The bundler already emits chunks as gzip, so the server must send them without Content-Encoding to avoid compressing twice.',
      },
    ],
    explanation: {
      es: 'El cliente anuncia Accept-Encoding: gzip, br y el servidor o CDN responde Content-Encoding: br (preferible en texto) o gzip. JS y CSS minificados siguen siendo texto repetitivo y comprimen muy bien; las imágenes con pérdida y los woff2 ya traen su propio codec. La compresión es del transporte, no del fichero en disco del build. Hay que medir el transfer size en DevTools Network, no solo el decoded, para ver el efecto real en TTFB y LCP.',
      en: 'The client announces Accept-Encoding: gzip, br and the server or CDN answers Content-Encoding: br (preferable for text) or gzip. Minified JS and CSS are still repetitive text and compress very well; lossy images and woff2 already bring their own codec. Compression belongs to transport, not to the file on disk from the build. Measure transfer size in DevTools Network, not only decoded size, to see the real effect on TTFB and LCP.',
    },
  },
  {
    id: 'fe-web-19',
    topic: 'Plataforma web',
    prompt: {
      es: '¿Cómo se cargan las fuentes con font-display y subconjuntos para no bloquear ni desplazar el texto?',
      en: 'How are fonts loaded with font-display and subsets so text is not blocked or shifted?',
    },
    answer: {
      es: 'font-display: swap u optional muestra texto de reserva al instante, unicode-range recorta glifos y un preload del woff2 adelanta el fichero sin dejar el texto invisible mucho tiempo.',
      en: 'font-display: swap or optional shows fallback text at once, unicode-range trims glyphs and a preload of the woff2 advances the file without leaving the text invisible for long.',
    },
    distractors: [
      {
        es: 'font-display: block evita CLS porque no hay intercambio de métricas: el texto permanece invisible hasta la fuente definitiva y nunca se mueve.',
        en: 'font-display: block avoids CLS because there is no metric swap: the text stays invisible until the final font and never moves.',
      },
      {
        es: 'Los subconjuntos unicode-range solo aplican a icon fonts; para texto latino hay que cargar la familia completa o el navegador dibuja tofu.',
        en: 'unicode-range subsets only apply to icon fonts; for Latin text the whole family must be loaded or the browser draws tofu.',
      },
    ],
    explanation: {
      es: '@font-face acepta font-display (auto, block, swap, fallback, optional) y unicode-range para partir latín, acentos o iconos en ficheros pequeños. swap muestra fallback de inmediato (FOUT) y puede sumar CLS si las métricas no coinciden: size-adjust y ascent-override lo mitigan. preload as=font con crossorigin es obligatorio para woff2 porque es petición CORS. optional puede no aplicar la fuente en visitas lentas, lo que estabiliza CLS a costa de branding.',
      en: '@font-face accepts font-display (auto, block, swap, fallback, optional) and unicode-range to split Latin, accents or icons into small files. swap shows the fallback at once (FOUT) and can add CLS if metrics do not match: size-adjust and ascent-override mitigate that. preload as=font with crossorigin is required for woff2 because it is a CORS request. optional may skip the font on slow visits, which stabilises CLS at the cost of branding.',
    },
  },
  {
    id: 'fe-web-20',
    topic: 'Plataforma web',
    prompt: {
      es: '¿En qué se diferencian los datos de laboratorio de Lighthouse de los datos de campo reales?',
      en: 'How do lab data from Lighthouse differ from real field data?',
    },
    answer: {
      es: 'Lighthouse es una corrida sintética controlada (dispositivo, red, CPU); el campo (CrUX o RUM) agrega LCP, INP y CLS de usuarios reales y es lo que usan las Core Web Vitals de búsqueda.',
      en: 'Lighthouse is a controlled synthetic run (device, network, CPU); the field (CrUX or RUM) aggregates LCP, INP and CLS from real users and that is what search Core Web Vitals use.',
    },
    distractors: [
      {
        es: 'Google Search toma el score de Lighthouse del último crawl de Googlebot, así que un 100 en local equivale a buenas Core Web Vitals en producción.',
        en: 'Google Search takes the Lighthouse score from the last Googlebot crawl, so a 100 locally equals good Core Web Vitals in production.',
      },
      {
        es: 'Los datos de campo salen de Lighthouse ejecutado en los Chrome de los usuarios al abrir DevTools; sin DevTools no hay CrUX.',
        en: 'Field data comes from Lighthouse running in user Chrome browsers when DevTools opens; without DevTools there is no CrUX.',
      },
    ],
    explanation: {
      es: 'Lighthouse (lab) usa throttling simulado y un perfil de dispositivo; sirve para depurar FCP, LCP, TBT y CLS en un entorno repetible, no para el ranking. Las Core Web Vitals de Search Console y el informe de campo de PageSpeed Insights salen de CrUX, una muestra de usuarios Chrome reales, más cualquier RUM propio con web-vitals. Un INP malo en campo con TBT bueno en lab suele significar long tasks que solo aparecen con extensiones, datos reales o hardware lento. Hay que mirar ambos, no sustituir uno por el otro.',
      en: 'Lighthouse (lab) uses simulated throttling and a device profile; it is useful to debug FCP, LCP, TBT and CLS in a repeatable environment, not for ranking. Field Core Web Vitals in Search Console and the PageSpeed Insights field report come from CrUX, a sample of real Chrome users, plus any in-house RUM with web-vitals. A bad field INP with a good lab TBT usually means long tasks that only appear with extensions, real data or slow hardware. Both must be watched; one does not replace the other.',
    },
  },
];
