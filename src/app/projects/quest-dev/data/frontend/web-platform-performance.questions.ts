import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_WEB_PERFORMANCE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-web-01',
    topic: 'CLS',
    prompt: {
      es: '¿Qué es el Cumulative Layout Shift y como se evita?',
      en: 'What is Cumulative Layout Shift and how do you avoid it?',
    },
    answer: {
      es: 'Es el salto del contenido ya visible, por una imagen, un anuncio o una fuente sin hueco reservado. Se evita dando width y height, o aspect-ratio, antes de que lleguen.',
      en: 'It is the jump of content that was already visible, caused by an image, an ad or a font with no reserved slot. You avoid it by setting width and height, or aspect-ratio, before they arrive.',
    },
    distractors: [
      {
        es: 'Mide cuanto tarda el bloque mas grande. Se mejora comprimiendo esa imagen.',
        en: 'It measures how long the largest block takes. You improve it by compressing that image.',
      },
      {
        es: 'Lo causan transform y opacity. Hay que quitar esas animaciones.',
        en: 'transform and opacity cause it. Those animations must be removed.',
      },
    ],
    explanation: {
      es: 'Si reservas el sitio, lo que llega despues ocupa el mismo hueco y la pagina no empuja el texto.',
      en: 'If you reserve the slot, what arrives later fills the same gap and the page does not push the text.',
    },
  },
  {
    id: 'fe-web-02',
    topic: 'INP',
    prompt: {
      es: '¿Qué mide INP, en palabras llanas?',
      en: 'What does INP measure, in plain words?',
    },
    answer: {
      es: 'Cuanto tarda la pagina en reaccionar a un clic o a una tecla durante la visita, no solo al primer toque. Una tarea larga en el hilo principal lo empeora.',
      en: 'How long the page takes to react to a click or a key during the visit, not only the first tap. A long task on the main thread makes it worse.',
    },
    distractors: [
      {
        es: 'Es el tiempo hasta que la pagina queda del todo interactiva, el mismo numero que el de Lighthouse llamado TTI.',
        en: 'It is the time until the page is fully interactive, the same number as the Lighthouse one called TTI.',
      },
      {
        es: 'Es solo otro nombre del primer retardo de entrada. No mira el resto de la visita.',
        en: 'It is only another name for the first input delay. It does not look at the rest of the visit.',
      },
    ],
    explanation: {
      es: 'Si al pulsar un boton la pantalla se queda muda, suele haber JavaScript ocupando el hilo. Parte el trabajo o aplaza lo que no sea urgente.',
      en: 'If a button press leaves the screen mute, JavaScript is usually busy on the thread. Split the work or postpone what is not urgent.',
    },
  },
  {
    id: 'fe-web-03',
    topic: 'TTFB',
    prompt: {
      es: '¿Qué es el Time to First Byte?',
      en: 'What is Time to First Byte?',
    },
    answer: {
      es: 'El tiempo desde que empieza la navegacion hasta el primer byte de la respuesta. Lo alargan un servidor lento o un origen lejos, y un CDN cercano lo acorta.',
      en: 'The time from the start of navigation until the first byte of the response. A slow server or a far origin makes it longer, and a nearby CDN makes it shorter.',
    },
    distractors: [
      {
        es: 'El tiempo hasta el primer pixel. Optimizar el CDN solo ayuda si las imagenes pasan por el.',
        en: 'The time until the first pixel. Optimising the CDN only helps if the images go through it.',
      },
      {
        es: 'Solo el DNS. El trabajo del servidor no cuenta.',
        en: 'DNS only. Server work does not count.',
      },
    ],
    explanation: {
      es: 'Un TTFB alto retrasa tambien el contenido grande, aunque el resto del front este fino.',
      en: 'A high TTFB also delays the large content, even when the rest of the front end is fine.',
    },
  },
  {
    id: 'fe-web-04',
    topic: 'defer y async',
    prompt: {
      es: '¿Qué recursos bloquean el primer pintado y que cambian defer y async?',
      en: 'Which resources block first paint, and what do defer and async change?',
    },
    answer: {
      es: 'El CSS y un script sin atributos paran el pintado o el parseo. defer baja en paralelo y corre al acabar el HTML, en orden. async corre en cuanto llega, sin garantizar orden.',
      en: 'CSS and a script with no attributes stop paint or parsing. defer downloads in parallel and runs when the HTML is done, in order. async runs as soon as it arrives, with no order guaranteed.',
    },
    distractors: [
      {
        es: 'defer y async bloquean igual mientras descargan. La unica diferencia es el nombre.',
        en: 'defer and async block the same way while they download. The only difference is the name.',
      },
      {
        es: 'Un CSS en un CDN deja de bloquear, asi que no hace falta preload.',
        en: 'CSS on a CDN stops blocking, so preload is unnecessary.',
      },
    ],
    explanation: {
      es: 'El JS de la app suele ir con defer. async encaja en un script suelto, como analitica, que no depende de otro.',
      en: 'App JS usually goes with defer. async fits a standalone script, such as analytics, that does not depend on another.',
    },
  },
  {
    id: 'fe-web-05',
    topic: 'preload',
    prompt: {
      es: '¿Cuál es la diferencia entre preload, prefetch y preconnect?',
      en: 'What is the difference between preload, prefetch and preconnect?',
    },
    answer: {
      es: 'preload pide ya un recurso de esta pagina. prefetch adelanta algo para una pagina futura, con poca prioridad. preconnect solo abre la conexion, sin bajar el fichero.',
      en: 'preload fetches a resource for this page now. prefetch warms something for a future page, at low priority. preconnect only opens the connection, without downloading the file.',
    },
    distractors: [
      {
        es: 'preload y prefetch bajan lo mismo. preconnect ademas ejecuta el script.',
        en: 'preload and prefetch download the same thing. preconnect also runs the script.',
      },
      {
        es: 'prefetch es la forma correcta de cargar el CSS critico de la pagina actual.',
        en: 'prefetch is the correct way to load the critical CSS of the current page.',
      },
    ],
    explanation: {
      es: 'preload de la imagen grande ayuda a que se vea antes. prefetch no debe competir con lo que el usuario esta mirando ahora.',
      en: 'A preload of the large image helps it show sooner. prefetch should not compete with what the user is looking at now.',
    },
  },
  {
    id: 'fe-web-06',
    topic: 'Imagenes',
    prompt: {
      es: '¿Cómo cargas imagenes para que pesen menos y no bloqueen la pagina?',
      en: 'How do you load images so they weigh less and do not block the page?',
    },
    answer: {
      es: 'Sirves el tamano justo con srcset, aplazas las que estan fuera de pantalla con loading lazy, y usas un formato moderno como WebP o AVIF.',
      en: 'You serve the right size with srcset, you postpone the ones off screen with loading lazy, and you use a modern format such as WebP or AVIF.',
    },
    distractors: [
      {
        es: 'La imagen principal debe llevar loading lazy para no competir con el HTML.',
        en: 'The main image must use loading lazy so it does not compete with the HTML.',
      },
      {
        es: 'Un JPEG en base64 evita la peticion y siempre gana a un AVIF.',
        en: 'A JPEG in base64 avoids the request and always beats an AVIF.',
      },
    ],
    explanation: {
      es: 'No pongas lazy en la imagen que mide el contenido grande: la retrasa. El base64 hincha el HTML.',
      en: 'Do not put lazy on the image that counts as the large content: it delays it. base64 bloats the HTML.',
    },
  },
  {
    id: 'fe-web-07',
    topic: 'Imagen en Angular',
    prompt: {
      es: '¿Qué aporta la directiva de imagen optimizada de Angular?',
      en: 'What does the Angular optimized image directive add?',
    },
    answer: {
      es: 'Pide un tamano para reservar sitio, puede generar srcset y deja lazy por defecto. Con priority precarga la imagen principal.',
      en: 'It asks for a size so the slot is reserved, it can generate srcset and it defaults to lazy. With priority it preloads the main image.',
    },
    distractors: [
      {
        es: 'Convierte cualquier URL a AVIF en el navegador y sustituye el img por un canvas.',
        en: 'It converts any URL to AVIF in the browser and replaces the img with a canvas.',
      },
      {
        es: 'Calcula el hueco despues del primer pintado, asi que width y height sobran.',
        en: 'It computes the slot after first paint, so width and height are unnecessary.',
      },
    ],
    explanation: {
      es: 'Sin priority, una imagen grande que es la primera que se ve puede quedar en lazy y empeorar esa metrica.',
      en: 'Without priority, a large image that is the first thing seen can stay lazy and make that metric worse.',
    },
  },
  {
    id: 'fe-web-08',
    topic: 'Cache',
    prompt: {
      es: '¿Cómo cacheas los assets con hash y el HTML?',
      en: 'How do you cache hashed assets and the HTML?',
    },
    answer: {
      es: 'El JS y el CSS con hash en el nombre pueden cachearse mucho tiempo, porque el nombre cambia si cambia el contenido. El HTML se deja corto para descubrir el hash nuevo.',
      en: 'JS and CSS with a hash in the name can be cached for a long time, because the name changes when the content changes. The HTML stays short so the new hash can be discovered.',
    },
    distractors: [
      {
        es: 'Los ficheros con hash van con no-cache y el HTML con immutable, al reves.',
        en: 'Hashed files go with no-cache and the HTML with immutable, the other way around.',
      },
      {
        es: 'Si hay ETag, max-age se ignora y cada visita baja el fichero entero.',
        en: 'If there is an ETag, max-age is ignored and every visit downloads the whole file.',
      },
    ],
    explanation: {
      es: 'ETag sirve para revalidar y responder que no cambio, no para sustituir al tiempo de cache.',
      en: 'An ETag is for revalidation and answering that nothing changed, not for replacing the cache lifetime.',
    },
  },
  {
    id: 'fe-web-09',
    topic: 'Service worker',
    prompt: {
      es: '¿Para qué sirve un service worker en la cache de una SPA?',
      en: 'What is a service worker for in the cache of an SPA?',
    },
    answer: {
      es: 'Intercepta peticiones y puede servir desde cache, desde red, o mostrar lo cacheado mientras revalida. En Angular eso se configura, no se aplica solo a todos los POST.',
      en: 'It intercepts requests and can serve from cache, from the network, or show the cached copy while it revalidates. In Angular that is configured, it is not applied on its own to every POST.',
    },
    distractors: [
      {
        es: 'Cachea tambien los POST para que la app funcione offline al instante, e ignora Cache-Control.',
        en: 'It also caches POST so the app works offline at once, and it ignores Cache-Control.',
      },
      {
        es: 'Solo precarga el index.html. El resto hay que escribirlo a mano porque Angular no trae config.',
        en: 'It only precaches index.html. The rest must be written by hand because Angular ships no config.',
      },
    ],
    explanation: {
      es: 'No sustituye la cache HTTP. El HTML sigue necesitando una politica clara para no quedarte en una version vieja.',
      en: 'It does not replace the HTTP cache. The HTML still needs a clear policy so you do not stay on an old version.',
    },
  },
  {
    id: 'fe-web-10',
    topic: 'Peso del bundle',
    prompt: {
      es: '¿Para qué sirven los presupuestos de bundle?',
      en: 'What are bundle budgets for?',
    },
    answer: {
      es: 'Para que el build avise o falle si el JavaScript de arranque, o un estilo, pasa de un tamano. Asi un import pesado no entra en silencio.',
      en: 'So the build warns or fails if the startup JavaScript, or a style, goes over a size. That way a heavy import does not sneak in.',
    },
    distractors: [
      {
        es: 'Limitan la cache del navegador y se configuran con una cabecera HTTP.',
        en: 'They limit the browser cache and they are configured with an HTTP header.',
      },
      {
        es: 'El presupuesto inicial incluye los chunks perezosos, asi que partir rutas no lo baja.',
        en: 'The initial budget includes the lazy chunks, so splitting routes does not lower it.',
      },
    ],
    explanation: {
      es: 'El numero de arranque no cuenta lo que se baja al navegar. Para ver quien engorda el fichero, mira el analisis del build.',
      en: 'The startup number does not count what is downloaded on navigation. To see who bloats the file, look at the build analysis.',
    },
  },
  {
    id: 'fe-web-11',
    topic: 'Codigo perezoso',
    prompt: {
      es: '¿Cuál es la diferencia entre partir por ruta y aplazar un componente?',
      en: 'What is the difference between splitting by route and deferring a component?',
    },
    answer: {
      es: 'La ruta perezosa baja su chunk al navegar. Un defer puede esperar a que el bloque entre en pantalla, a un clic o a que el hilo este libre, aunque la ruta ya este activa.',
      en: 'A lazy route downloads its chunk on navigation. A defer can wait until the block enters the screen, until a click or until the thread is free, even if the route is already active.',
    },
    distractors: [
      {
        es: 'Los dos bajan el chunk en el arranque. La diferencia es solo la sintaxis.',
        en: 'Both download the chunk at startup. The difference is only the syntax.',
      },
      {
        es: 'aplazar un componente mete ese codigo en el bundle inicial para poder hidratar.',
        en: 'Deferring a component puts that code in the initial bundle so it can hydrate.',
      },
    ],
    explanation: {
      es: 'Lo habitual es una ruta perezosa para el area y defer para un bloque pesado que esta debajo del pliegue.',
      en: 'The usual mix is a lazy route for the area and defer for a heavy block that sits below the fold.',
    },
  },
  {
    id: 'fe-web-12',
    topic: 'defer',
    prompt: {
      es: '¿Qué hacen los disparadores viewport, interaction e idle de un bloque defer?',
      en: 'What do the viewport, interaction and idle triggers of a defer block do?',
    },
    answer: {
      es: 'viewport carga al entrar en pantalla. interaction espera un clic o una tecla en el hueco. idle espera a que el navegador tenga un rato libre.',
      en: 'viewport loads when it enters the screen. interaction waits for a click or a key on the placeholder. idle waits until the browser has a free moment.',
    },
    distractors: [
      {
        es: 'idle espera el primer clic, interaction mira el viewport y viewport usa el scroll de window.',
        en: 'idle waits for the first click, interaction watches the viewport and viewport uses the window scroll.',
      },
      {
        es: 'Los tres solo ocultan DOM que ya se descargo en el arranque.',
        en: 'All three only hide DOM that was already downloaded at startup.',
      },
    ],
    explanation: {
      es: 'El chunk no se pide hasta el disparador. Si lo quieres antes sin mostrarlo, se puede prefetchear en idle.',
      en: 'The chunk is not requested until the trigger. If you want it earlier without showing it, it can be prefetched on idle.',
    },
  },
  {
    id: 'fe-web-13',
    topic: 'Fugas',
    prompt: {
      es: '¿Por qué una SPA puede filtrar memoria al salir de una pantalla?',
      en: 'Why can an SPA leak memory when you leave a screen?',
    },
    answer: {
      es: 'Porque la pagina no se recarga. Un listener global, una suscripcion o una referencia en un servicio siguen sujetando el componente destruido.',
      en: 'Because the page does not reload. A global listener, a subscription or a reference in a service still holds the destroyed component.',
    },
    distractors: [
      {
        es: 'Angular desuscribe solo todo Observable en ngOnDestroy, asi que solo filtra un setTimeout.',
        en: 'Angular unsubscribes every Observable on its own in ngOnDestroy, so only a setTimeout can leak.',
      },
      {
        es: 'Un nodo que ngIf quita se recolecta al instante aunque un Map guarde su referencia.',
        en: 'A node that ngIf removes is collected at once even if a Map stores its reference.',
      },
    ],
    explanation: {
      es: 'Quita el listener o usa takeUntilDestroyed. El async pipe si se desuscribe. El subscribe manual no.',
      en: 'Remove the listener or use takeUntilDestroyed. The async pipe does unsubscribe. A manual subscribe does not.',
    },
  },
  {
    id: 'fe-web-14',
    topic: 'Lista larga',
    prompt: {
      es: '¿Para qué sirve el scroll virtual en una lista enorme?',
      en: 'What is virtual scroll for in a huge list?',
    },
    answer: {
      es: 'Pinta solo las filas visibles, mas un pequeno margen, y reutiliza nodos. No crea miles de filas en el DOM.',
      en: 'It paints only the visible rows, plus a small margin, and reuses nodes. It does not create thousands of rows in the DOM.',
    },
    distractors: [
      {
        es: 'Es lo mismo que el infinite scroll: pide la siguiente pagina y deja en el DOM todo lo ya cargado.',
        en: 'It is the same as infinite scroll: it asks for the next page and leaves everything already loaded in the DOM.',
      },
      {
        es: 'Con overflow auto el navegador ya virtualiza, asi que el numero de nodos no cambia.',
        en: 'With overflow auto the browser already virtualises, so the node count does not change.',
      },
    ],
    explanation: {
      es: 'Menos nodos vivos ayudan a que la pagina siga respondiendo. No sustituye paginar el API.',
      en: 'Fewer live nodes help the page stay responsive. It does not replace paging the API.',
    },
  },
  {
    id: 'fe-web-15',
    topic: 'Medir sin reflow',
    prompt: {
      es: '¿Por qué ResizeObserver mide un elemento sin el coste de leer offsetWidth a mano?',
      en: 'Why does ResizeObserver measure an element without the cost of reading offsetWidth by hand?',
    },
    answer: {
      es: 'Te avisa cuando el elemento cambia de tamano y te da la medida ya hecha. Leer offsetWidth despues de tocar el DOM obliga a recalcular en ese momento.',
      en: 'It tells you when the element changes size and gives you the measure already done. Reading offsetWidth after touching the DOM forces a recalculation on the spot.',
    },
    distractors: [
      {
        es: 'Es un alias del resize de window. Dentro hay que leer clientWidth igual que antes.',
        en: 'It is an alias of the window resize event. Inside you must still read clientWidth as before.',
      },
      {
        es: 'Solo observa el documento, no un nodo. Para un aside hay que usar getBoundingClientRect.',
        en: 'It only observes the document, not a node. For an aside you must use getBoundingClientRect.',
      },
    ],
    explanation: {
      es: 'El evento resize de window no avisa de un panel que cambio de ancho. Observa ese elemento.',
      en: 'The window resize event does not tell you about a panel that changed width. Observe that element.',
    },
  },
  {
    id: 'fe-web-16',
    topic: 'Web Worker',
    prompt: {
      es: '¿Cómo usas un Web Worker para un calculo pesado sin bloquear la UI?',
      en: 'How do you use a Web Worker for a heavy calculation without blocking the UI?',
    },
    answer: {
      es: 'Creas el worker, le mandas datos con postMessage y recibes el resultado en el hilo principal. El worker no puede tocar el DOM.',
      en: 'You create the worker, send it data with postMessage and receive the result on the main thread. The worker cannot touch the DOM.',
    },
    distractors: [
      {
        es: 'Le pasas el componente y llama a detectChanges alli, asi la plantilla se pinta en segundo plano.',
        en: 'You pass it the component and it calls detectChanges there, so the template paints in the background.',
      },
      {
        es: 'Zone mueve solo cualquier calculo al worker. No hace falta postMessage ni otro fichero.',
        en: 'Zone moves any calculation to the worker on its own. postMessage and another file are not needed.',
      },
    ],
    explanation: {
      es: 'Al volver el mensaje, actualiza el estado en el hilo de la vista. El trabajo pesado ya no alarga el clic.',
      en: 'When the message comes back, update the state on the view thread. The heavy work no longer stretches the click.',
    },
  },
  {
    id: 'fe-web-17',
    topic: 'Trabajo no urgente',
    prompt: {
      es: '¿Para qué sirve requestIdleCallback?',
      en: 'What is requestIdleCallback for?',
    },
    answer: {
      es: 'Para correr algo cuando el hilo esta libre, como una analitica. No sirve para responder a un clic ni para animar.',
      en: 'To run something when the thread is free, such as analytics. It is not for answering a click or for animation.',
    },
    distractors: [
      {
        es: 'Garantiza 50 ms en cada frame y sustituye a requestAnimationFrame.',
        en: 'It guarantees 50 ms on every frame and it replaces requestAnimationFrame.',
      },
      {
        es: 'Es un alias de setTimeout de 0, con la misma prioridad que un clic.',
        en: 'It is an alias of setTimeout of 0, with the same priority as a click.',
      },
    ],
    explanation: {
      es: 'Pintar va en requestAnimationFrame. Meter un calculo largo ahi deja la interaccion lenta.',
      en: 'Painting belongs in requestAnimationFrame. Putting a long calculation there makes interaction slow.',
    },
  },
  {
    id: 'fe-web-18',
    topic: 'Compresion',
    prompt: {
      es: '¿Qué efecto tienen gzip y Brotli?',
      en: 'What effect do gzip and Brotli have?',
    },
    answer: {
      es: 'Comprimen en el viaje el HTML, el JS, el CSS y el JSON, y bajan muchos bytes. En una imagen ya comprimida el ahorro es nulo o peor.',
      en: 'They compress HTML, JS, CSS and JSON on the wire, and they cut many bytes. On an already compressed image the saving is nothing or worse.',
    },
    distractors: [
      {
        es: 'Brotli reduce a la mitad cualquier JPEG porque trabaja pixel a pixel.',
        en: 'Brotli halves any JPEG because it works pixel by pixel.',
      },
      {
        es: 'El bundler ya deja los chunks comprimidos, asi que el servidor no debe enviar Content-Encoding.',
        en: 'The bundler already emits compressed chunks, so the server must not send Content-Encoding.',
      },
    ],
    explanation: {
      es: 'Mira el tamano transferido en la red, no solo el tamano ya descomprimido, para ver el efecto.',
      en: 'Look at the transferred size in the network panel, not only the decompressed size, to see the effect.',
    },
  },
  {
    id: 'fe-web-19',
    topic: 'Fuentes',
    prompt: {
      es: '¿Cómo cargas una fuente sin dejar el texto invisible ni empujar el layout?',
      en: 'How do you load a font without leaving the text invisible or pushing the layout?',
    },
    answer: {
      es: 'Con font-display swap u optional el texto de reserva se ve ya. Un subconjunto baja menos glifos, y un preload adelanta el fichero.',
      en: 'With font-display swap or optional the fallback text shows at once. A subset downloads fewer glyphs, and a preload fetches the file earlier.',
    },
    distractors: [
      {
        es: 'font-display block evita el salto porque el texto no se mueve: se queda invisible hasta la fuente final.',
        en: 'font-display block avoids the jump because the text does not move: it stays invisible until the final font.',
      },
      {
        es: 'Hay que bajar la familia completa. Un subconjunto solo sirve para iconos.',
        en: 'You must download the whole family. A subset is only for icons.',
      },
    ],
    explanation: {
      es: 'swap puede saltar si las metricas no coinciden. Ajustar el tamano de la fuente de reserva reduce ese movimiento.',
      en: 'swap can jump if the metrics do not match. Adjusting the fallback font size reduces that movement.',
    },
  },
  {
    id: 'fe-web-20',
    topic: 'Lab y campo',
    prompt: {
      es: '¿En qué se diferencia una pasada de Lighthouse de los datos reales de usuarios?',
      en: 'How does a Lighthouse run differ from real user data?',
    },
    answer: {
      es: 'Lighthouse es una prueba controlada en un equipo y una red simulados. Los datos de campo juntan lo que ven usuarios reales, y eso es lo que cuenta como Core Web Vitals.',
      en: 'Lighthouse is a controlled test on a simulated device and network. Field data gathers what real users see, and that is what counts as Core Web Vitals.',
    },
    distractors: [
      {
        es: 'El buscador usa la nota de Lighthouse del ultimo rastreo. Un 100 en local equivale a produccion.',
        en: 'Search uses the Lighthouse score from the last crawl. A 100 locally equals production.',
      },
      {
        es: 'Los datos de campo salen de Lighthouse cuando el usuario abre las herramientas. Sin eso no hay campo.',
        en: 'Field data comes from Lighthouse when the user opens the tools. Without that there is no field data.',
      },
    ],
    explanation: {
      es: 'Una nota buena en local no garantiza el clic en un movil lento. Mira las dos, no sustituyas una por la otra.',
      en: 'A good local score does not guarantee the click on a slow phone. Watch both, do not replace one with the other.',
    },
  },
];
