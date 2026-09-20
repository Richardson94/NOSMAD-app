import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_RXJS_OPERATORS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-rxop-01',
    topic: 'Operadores RxJS',
    prompt: {
      es: 'Un botón Guardar recibe dobles clics y no quieres enviar una segunda petición mientras la primera sigue en vuelo. ¿Qué operador de aplanado corresponde?',
      en: 'A Save button receives double clicks and you do not want to send a second request while the first one is still in flight. Which flattening operator fits?',
    },
    answer: {
      es: 'exhaustMap, porque ignora las emisiones nuevas hasta que el observable interno en curso completa.',
      en: 'exhaustMap, because it ignores new emissions until the current inner observable completes.',
    },
    distractors: [
      {
        es: 'switchMap, porque cancela la petición anterior y garantiza que solo el último clic llegue al servidor.',
        en: 'switchMap, because it cancels the previous request and guarantees that only the last click reaches the server.',
      },
      {
        es: 'throttleTime, porque bloquea los clics siguientes durante una ventana de tiempo fija tras el primero.',
        en: 'throttleTime, because it blocks the following clicks during a fixed time window after the first one.',
      },
    ],
    explanation: {
      es: 'exhaustMap es el único que se apoya en la duración real de la petición: mientras el interno vive, los clics se descartan. switchMap cancelaría una escritura ya enviada al backend, lo peor posible en un guardado, y throttleTime adivina un tiempo fijo que no tiene relación con lo que tarde el servidor.',
      en: 'exhaustMap is the only one that relies on the real duration of the request: while the inner observable is alive, clicks are dropped. switchMap would cancel a write already sent to the backend, the worst possible outcome for a save, and throttleTime guesses a fixed time unrelated to how long the server takes.',
    },
  },
  {
    id: 'fe-rxop-02',
    topic: 'Operadores RxJS',
    prompt: {
      es: 'Debes enviar al servidor una cola de ediciones que tienen que aplicarse en el mismo orden en que el usuario las hizo. ¿Qué operador de aplanado usas?',
      en: 'You must send the server a queue of edits that have to be applied in the same order the user made them. Which flattening operator do you use?',
    },
    answer: {
      es: 'concatMap, porque se suscribe al siguiente observable interno solo cuando el anterior ha completado.',
      en: 'concatMap, because it subscribes to the next inner observable only once the previous one has completed.',
    },
    distractors: [
      {
        es: 'mergeMap, porque se suscribe a los internos en el orden de llegada y por eso las respuestas llegan en ese mismo orden.',
        en: 'mergeMap, because it subscribes to the inner observables in arrival order and therefore the responses arrive in that same order.',
      },
      {
        es: 'forkJoin, porque agrupa todas las ediciones y las resuelve respetando el orden del arreglo de entrada.',
        en: 'forkJoin, because it groups all the edits and resolves them respecting the order of the input array.',
      },
    ],
    explanation: {
      es: 'concatMap serializa de verdad: hay como máximo un interno activo y el resto espera en cola, equivalente a mergeMap con concurrencia 1. mergeMap suscribe en orden pero las respuestas vuelven cuando el servidor quiera, así que la segunda edición puede aplicarse antes que la primera, y forkJoin lanza todo en paralelo y solo ordena el resultado final, además de exigir que todas completen.',
      en: 'concatMap truly serializes: at most one inner observable is active and the rest waits in a queue, equivalent to mergeMap with concurrency 1. mergeMap subscribes in order but responses come back whenever the server decides, so the second edit may be applied before the first, and forkJoin fires everything in parallel and only orders the final result, while also requiring all of them to complete.',
    },
  },
  {
    id: 'fe-rxop-03',
    topic: 'Operadores RxJS',
    prompt: {
      es: '¿Qué significa el segundo parámetro de mergeMap, como en mergeMap(fn, 2)?',
      en: 'What does the second parameter of mergeMap mean, as in mergeMap(fn, 2)?',
    },
    answer: {
      es: 'Limita a 2 los observables internos activos al mismo tiempo y encola las emisiones restantes hasta que uno complete.',
      en: 'It limits active inner observables to 2 at the same time and queues the remaining emissions until one of them completes.',
    },
    distractors: [
      {
        es: 'Reintenta hasta 2 veces cada observable interno antes de propagar el error al stream externo.',
        en: 'It retries each inner observable up to 2 times before propagating the error to the outer stream.',
      },
      {
        es: 'Agrupa las emisiones en lotes de 2 antes de pasarlas a la función de proyección.',
        en: 'It groups emissions into batches of 2 before handing them to the projection function.',
      },
    ],
    explanation: {
      es: 'Ese parámetro es la concurrencia, ideal para no saturar un backend con cientos de subidas simultáneas; de hecho mergeMap(fn, 1) es exactamente concatMap. Los reintentos son competencia de retry, que en RxJS 7 acepta un objeto con count y delay, y agrupar por cantidad es bufferCount.',
      en: 'That parameter is the concurrency limit, ideal to avoid flooding a backend with hundreds of simultaneous uploads; in fact mergeMap(fn, 1) is exactly concatMap. Retries belong to retry, which in RxJS 7 accepts an object with count and delay, and grouping by amount is bufferCount.',
    },
  },
  {
    id: 'fe-rxop-04',
    topic: 'Operadores RxJS',
    prompt: {
      es: 'Al pulsar Enviar quieres adjuntar el valor actual de un stream de configuración, sin que un cambio en esa configuración dispare un envío. ¿Qué operador corresponde?',
      en: 'When Submit is pressed you want to attach the current value of a configuration stream, without a change in that configuration triggering a submit. Which operator fits?',
    },
    answer: {
      es: 'withLatestFrom, porque solo emite cuando emite la fuente principal y adjunta el último valor de las secundarias.',
      en: 'withLatestFrom, because it emits only when the primary source emits and attaches the latest value of the secondary ones.',
    },
    distractors: [
      {
        es: 'combineLatest, porque toma el último valor de cada fuente y la fuente principal manda sobre las secundarias.',
        en: 'combineLatest, because it takes the latest value of each source and the primary source takes precedence over the secondary ones.',
      },
      {
        es: 'sample, porque toma el valor más reciente de la configuración cada vez que el formulario emite.',
        en: 'sample, because it takes the most recent configuration value every time the form emits.',
      },
    ],
    explanation: {
      es: 'withLatestFrom es asimétrico: la fuente principal es la única que dispara y las demás solo aportan contexto. combineLatest es simétrico y reemitiría con cada cambio de configuración, justo lo que quieres evitar, y sample invierte los papeles porque emite el valor de la configuración y descarta el del disparador. Recuerda que withLatestFrom no emite nada mientras la fuente secundaria no haya emitido al menos una vez.',
      en: 'withLatestFrom is asymmetric: the primary source is the only trigger and the others just provide context. combineLatest is symmetric and would re-emit on every configuration change, exactly what you want to avoid, and sample inverts the roles because it emits the configuration value and discards the trigger value. Remember that withLatestFrom emits nothing while the secondary source has not emitted at least once.',
    },
  },
  {
    id: 'fe-rxop-05',
    topic: 'Operadores RxJS',
    prompt: {
      es: '¿Cuál es la diferencia entre scan y reduce?',
      en: 'What is the difference between scan and reduce?',
    },
    answer: {
      es: 'scan emite el acumulado en cada emisión de la fuente; reduce emite un único valor y solo cuando la fuente completa.',
      en: 'scan emits the accumulated value on every source emission; reduce emits a single value and only when the source completes.',
    },
    distractors: [
      {
        es: 'scan exige semilla obligatoria y reduce la infiere de la primera emisión, pero ambos emiten en cada paso.',
        en: 'scan requires a mandatory seed while reduce infers it from the first emission, but both emit on every step.',
      },
      {
        es: 'reduce emite el acumulado en cada paso y scan solo al completar, igual que sus equivalentes en arreglos.',
        en: 'reduce emits the accumulated value on every step and scan only on completion, just like their array equivalents.',
      },
    ],
    explanation: {
      es: 'scan es el operador de estado incremental, por eso sirve para llevar un contador o un carrito que se refleja en la vista al instante. Si aplicas reduce a un stream infinito, como un Subject de eventos, nunca emitirá nada porque espera el complete; y la semilla es opcional en ambos, no es la diferencia. La opción que invierte los papeles es el malentendido más habitual.',
      en: 'scan is the incremental state operator, which is why it fits a counter or a cart that must be reflected in the view immediately. If you apply reduce to an infinite stream, such as an event Subject, it will never emit anything because it waits for completion; and the seed is optional in both, so that is not the difference. The option that swaps their roles is the most common misunderstanding.',
    },
  },
  {
    id: 'fe-rxop-06',
    topic: 'Operadores RxJS',
    prompt: {
      es: 'Un combineLatest no emite porque el stream de filtros todavía no ha producido ningún valor. ¿Cuál es el arreglo idiomático?',
      en: 'A combineLatest does not emit because the filters stream has not produced any value yet. What is the idiomatic fix?',
    },
    answer: {
      es: 'Añadir startWith con el filtro por defecto a ese stream, para que emita de inmediato y la combinación arranque.',
      en: 'Add startWith with the default filter to that stream, so it emits immediately and the combination starts.',
    },
    distractors: [
      {
        es: 'Añadir defaultIfEmpty con el filtro por defecto a ese stream, para que siempre haya un valor disponible.',
        en: 'Add defaultIfEmpty with the default filter to that stream, so a value is always available.',
      },
      {
        es: 'Aplicar shareReplay(1) a ese stream, para que combineLatest reciba de inmediato el valor almacenado en el búfer.',
        en: 'Apply shareReplay(1) to that stream, so combineLatest immediately receives the value stored in the buffer.',
      },
    ],
    explanation: {
      es: 'startWith emite su valor de forma sincrónica en el momento de la suscripción, antes que cualquier emisión de la fuente, que es lo que desbloquea a combineLatest. defaultIfEmpty solo actúa si la fuente completa sin haber emitido nunca, y un stream de filtros que sigue vivo no completa; shareReplay únicamente repite valores ya emitidos, así que si no hubo ninguno no hay nada que repetir.',
      en: 'startWith emits its value synchronously at subscription time, before any source emission, which is what unblocks combineLatest. defaultIfEmpty only acts if the source completes without ever emitting, and a live filters stream does not complete; shareReplay only replays values already emitted, so if there were none there is nothing to replay.',
    },
  },
  {
    id: 'fe-rxop-07',
    topic: 'Operadores RxJS',
    prompt: {
      es: 'Un stream emite un objeto de usuario nuevo en cada tick con los mismos datos y distinctUntilChanged no filtra nada. ¿Por qué y cómo se corrige?',
      en: 'A stream emits a new user object on every tick with the same data and distinctUntilChanged filters nothing out. Why, and how do you fix it?',
    },
    answer: {
      es: 'Porque compara por identidad de referencia; hay que pasarle un comparador propio o usar distinctUntilKeyChanged con el campo id.',
      en: 'Because it compares by reference identity; you must pass your own comparator or use distinctUntilKeyChanged with the id field.',
    },
    distractors: [
      {
        es: 'Porque solo sirve para primitivos; hay que usar distinct, que compara contra los valores anteriores y detecta el contenido repetido.',
        en: 'Because it only works for primitives; you must use distinct, which compares against previous values and detects the repeated content.',
      },
      {
        es: 'Porque el orden de los operadores es incorrecto: debe ir antes del map que crea el objeto, ya que no acepta comparadores personalizados.',
        en: 'Because the operator order is wrong: it must go before the map that creates the object, since it does not accept custom comparators.',
      },
    ],
    explanation: {
      es: 'Por defecto distinctUntilChanged usa una comparación estricta de referencias, así que dos objetos con el mismo contenido son distintos; su segundo argumento es precisamente un comparador, y existe distinctUntilKeyChanged para el caso de una clave. distinct no resuelve nada porque también compara por identidad y además guarda en memoria todos los valores vistos, lo que en un stream largo es una fuga; y la idea de que no acepta comparadores es falsa.',
      en: 'By default distinctUntilChanged uses strict reference comparison, so two objects with the same content are different; its second argument is precisely a comparator, and distinctUntilKeyChanged exists for the single key case. distinct solves nothing because it also compares by identity and on top of that keeps every seen value in memory, which is a leak in a long lived stream; and the claim that it does not accept comparators is false.',
    },
  },
  {
    id: 'fe-rxop-08',
    topic: 'Operadores RxJS',
    prompt: {
      es: '¿Qué emite pairwise y para qué caso de uso se utiliza?',
      en: 'What does pairwise emit and what use case is it for?',
    },
    answer: {
      es: 'Emite un arreglo con el valor anterior y el actual, útil para deducir la dirección del scroll o la variación entre dos lecturas.',
      en: 'It emits an array with the previous and the current value, useful to infer the scroll direction or the change between two readings.',
    },
    distractors: [
      {
        es: 'Emite los valores en parejas no solapadas, es decir, uno de cada dos, útil para reducir la frecuencia del stream.',
        en: 'It emits values in non overlapping pairs, that is one out of every two, useful to reduce the stream frequency.',
      },
      {
        es: 'Emite un arreglo con el primer valor y el actual, útil para medir la variación acumulada desde el inicio.',
        en: 'It emits an array with the first value and the current one, useful to measure the accumulated change since the start.',
      },
    ],
    explanation: {
      es: 'pairwise emite ventanas solapadas de dos elementos, por eso no produce nada en la primera emisión y a partir de la segunda entrega [anterior, actual]. Las parejas no solapadas son bufferCount(2), y conservar el primer valor exigiría un scan; de hecho pairwise se puede reimplementar con scan si necesitas un historial mayor.',
      en: 'pairwise emits overlapping windows of two items, which is why it produces nothing on the first emission and from the second one delivers [previous, current]. Non overlapping pairs are bufferCount(2), and keeping the first value would require a scan; in fact pairwise can be reimplemented with scan when you need a longer history.',
    },
  },
  {
    id: 'fe-rxop-09',
    topic: 'Operadores RxJS',
    prompt: {
      es: 'Quieres agrupar pulsaciones de teclado y enviarlas al servidor en lotes cada 500 ms. ¿Qué operador usas y qué ocurre en una ventana sin eventos?',
      en: 'You want to group keystrokes and send them to the server in batches every 500 ms. Which operator do you use and what happens in a window with no events?',
    },
    answer: {
      es: 'bufferTime(500), que emite un arreglo por ventana, incluido un arreglo vacío cuando no hubo emisiones.',
      en: 'bufferTime(500), which emits one array per window, including an empty array when there were no emissions.',
    },
    distractors: [
      {
        es: 'bufferCount(500), que acumula hasta 500 ms de eventos y emite solo cuando el lote tiene contenido.',
        en: 'bufferCount(500), which accumulates up to 500 ms of events and emits only when the batch has content.',
      },
      {
        es: 'bufferTime(500), que emite un arreglo por ventana pero se salta las ventanas en las que no hubo emisiones.',
        en: 'bufferTime(500), which emits one array per window but skips the windows where there were no emissions.',
      },
    ],
    explanation: {
      es: 'bufferTime cierra por tiempo y emite siempre, así que hay que encadenar filter(lote => lote.length > 0) si no quieres peticiones vacías; ese detalle es el que más sorprende en producción. bufferCount cuenta emisiones, no milisegundos, y cuando la fuente completa emite el búfer parcial que tenga pendiente.',
      en: 'bufferTime closes by time and always emits, so you need to chain filter(batch => batch.length > 0) if you do not want empty requests; that detail is the one that surprises most in production. bufferCount counts emissions, not milliseconds, and when the source completes it emits whatever partial buffer it still holds.',
    },
  },
  {
    id: 'fe-rxop-10',
    topic: 'Operadores RxJS',
    prompt: {
      es: '¿En qué se diferencia windowTime de bufferTime?',
      en: 'How does windowTime differ from bufferTime?',
    },
    answer: {
      es: 'windowTime emite un observable por cada ventana y sus valores fluyen en vivo; bufferTime emite un arreglo ya materializado al cerrarse la ventana.',
      en: 'windowTime emits one observable per window and its values flow live; bufferTime emits an already materialized array when the window closes.',
    },
    distractors: [
      {
        es: 'windowTime emite un arreglo con una copia inmutable de la ventana y bufferTime emite el mismo arreglo mutado en cada cierre.',
        en: 'windowTime emits an array with an immutable copy of the window and bufferTime emits the same mutated array on every close.',
      },
      {
        es: 'windowTime abre una ventana nueva solo cuando llega una emisión y bufferTime la abre siempre por tiempo.',
        en: 'windowTime opens a new window only when an emission arrives while bufferTime always opens it by time.',
      },
    ],
    explanation: {
      es: 'window devuelve un observable de orden superior, por lo que normalmente se combina con mergeMap o mergeAll, y su ventaja es poder aplicar operadores dentro de cada ventana, como un count o un reduce por tramo. Si no te suscribes a la ventana interna, sus valores se pierden; buffer en cambio te obliga a esperar el cierre para ver algo, y ninguno de los dos reutiliza el arreglo anterior.',
      en: 'window returns a higher order observable, so it is usually combined with mergeMap or mergeAll, and its advantage is being able to apply operators inside each window, such as a count or a reduce per slice. If you do not subscribe to the inner window its values are lost; buffer instead forces you to wait for the close to see anything, and neither of them reuses the previous array.',
    },
  },
  {
    id: 'fe-rxop-11',
    topic: 'Operadores RxJS',
    prompt: {
      es: '¿Qué emite groupBy y qué hay que tener en cuenta con los observables agrupados?',
      en: 'What does groupBy emit and what do you need to keep in mind about the grouped observables?',
    },
    answer: {
      es: 'Emite un GroupedObservable por cada clave nueva, y hay que suscribirse a cada grupo porque si no sus valores se descartan.',
      en: 'It emits one GroupedObservable per new key, and you must subscribe to each group because otherwise its values are dropped.',
    },
    distractors: [
      {
        es: 'Emite un arreglo con todos los grupos cada vez que aparece una clave nueva, listo para recorrer en la vista.',
        en: 'It emits an array with all the groups every time a new key appears, ready to iterate in the view.',
      },
      {
        es: 'Emite un objeto tipo diccionario con la clave y los valores ya acumulados, igual que un group by de SQL.',
        en: 'It emits a dictionary like object with the key and the values already accumulated, just like a SQL group by.',
      },
    ],
    explanation: {
      es: 'groupBy es un operador de orden superior: cada emisión es un observable con una propiedad key, y el patrón habitual es groupBy(...) seguido de mergeMap para procesar cada grupo por separado. Nada se acumula en arreglos ni diccionarios, y conviene recordar que sin selector de duración los grupos viven hasta que la fuente completa, así que una clave con alta cardinalidad retiene memoria.',
      en: 'groupBy is a higher order operator: every emission is an observable with a key property, and the usual pattern is groupBy(...) followed by mergeMap to process each group separately. Nothing is accumulated into arrays or dictionaries, and it is worth remembering that without a duration selector the groups live until the source completes, so a high cardinality key retains memory.',
    },
  },
  {
    id: 'fe-rxop-12',
    topic: 'Operadores RxJS',
    prompt: {
      es: '¿Qué distingue a auditTime de sampleTime y de throttleTime?',
      en: 'What sets auditTime apart from sampleTime and throttleTime?',
    },
    answer: {
      es: 'auditTime abre la ventana con la primera emisión y entrega el último valor al cerrarla; throttleTime entrega el primero de la ventana y sampleTime emite según su propio reloj.',
      en: 'auditTime opens the window with the first emission and delivers the latest value when it closes; throttleTime delivers the first one of the window and sampleTime emits on its own clock.',
    },
    distractors: [
      {
        es: 'auditTime entrega el primer valor de la ventana y throttleTime el último, mientras sampleTime se salta las ventanas sin emisiones.',
        en: 'auditTime delivers the first value of the window and throttleTime the last one, while sampleTime skips windows with no emissions.',
      },
      {
        es: 'auditTime reinicia su temporizador con cada emisión nueva, por lo que equivale a debounceTime pero conservando el último valor.',
        en: 'auditTime resets its timer on every new emission, so it is equivalent to debounceTime but keeping the last value.',
      },
    ],
    explanation: {
      es: 'auditTime es un throttle por el flanco de salida, de hecho equivale a throttleTime(ms, undefined, { leading: false, trailing: true }), y por eso siempre da el dato más fresco de la ventana. sampleTime sí ignora sus intervalos cuando no llegó ningún valor nuevo, pero eso no lo distingue de auditTime, y confundir audit con debounce es el error clásico: audit no reinicia el temporizador, así que en una ráfaga continua sigue emitiendo con cadencia fija mientras debounce no emitiría nunca.',
      en: 'auditTime is a trailing edge throttle, in fact it is equivalent to throttleTime(ms, undefined, { leading: false, trailing: true }), which is why it always yields the freshest value of the window. sampleTime does skip its intervals when no new value arrived, but that is not what distinguishes it from auditTime, and confusing audit with debounce is the classic mistake: audit does not reset the timer, so during a continuous burst it keeps emitting at a fixed cadence while debounce would never emit.',
    },
  },
  {
    id: 'fe-rxop-13',
    topic: 'Operadores RxJS',
    prompt: {
      es: '¿Cuándo hay que usar delayWhen en lugar de delay?',
      en: 'When should you use delayWhen instead of delay?',
    },
    answer: {
      es: 'Cuando el retraso depende del propio valor, porque delayWhen recibe una función que devuelve un observable de duración por cada emisión.',
      en: 'When the delay depends on the value itself, because delayWhen receives a function returning a duration observable for each emission.',
    },
    distractors: [
      {
        es: 'Cuando quieres retrasar solo la primera emisión, porque delay retrasa todas y delayWhen únicamente la inicial.',
        en: 'When you want to delay only the first emission, because delay delays all of them and delayWhen only the initial one.',
      },
      {
        es: 'Cuando quieres retrasar la suscripción a la fuente en lugar de las emisiones, porque delay solo desplaza la notificación de complete.',
        en: 'When you want to delay the subscription to the source instead of the emissions, because delay only shifts the complete notification.',
      },
    ],
    explanation: {
      es: 'delay acepta un número de milisegundos o una fecha y lo aplica igual a todo, mientras delayWhen calcula la espera por valor, lo que permite retrocesos crecientes o esperar un evento externo. Cuidado con el parámetro subscriptionDelay de delayWhen: está deprecado en RxJS 7. Y un detalle que se pregunta mucho: delay desplaza next y complete, pero las notificaciones de error se propagan de inmediato sin esperar.',
      en: 'delay accepts a number of milliseconds or a date and applies it uniformly, while delayWhen computes the wait per value, which enables growing backoffs or waiting for an external event. Watch out for the subscriptionDelay parameter of delayWhen: it is deprecated in RxJS 7. And one detail that gets asked a lot: delay shifts next and complete, but error notifications propagate immediately without waiting.',
    },
  },
  {
    id: 'fe-rxop-14',
    topic: 'Operadores RxJS',
    prompt: {
      es: '¿Qué hace el operador timeout cuando se agota el plazo sin recibir emisiones?',
      en: 'What does the timeout operator do when the deadline expires without receiving emissions?',
    },
    answer: {
      es: 'Lanza un error TimeoutError por el canal de error, salvo que le pases la opción with para sustituirlo por otro observable.',
      en: 'It throws a TimeoutError through the error channel, unless you pass the with option to replace it with another observable.',
    },
    distractors: [
      {
        es: 'Completa el stream de forma silenciosa, así que el suscriptor recibe complete sin ningún valor.',
        en: 'It completes the stream silently, so the subscriber receives complete without any value.',
      },
      {
        es: 'Emite el último valor recibido y luego completa, para que la vista conserve los datos que ya tenía.',
        en: 'It emits the last received value and then completes, so the view keeps the data it already had.',
      },
    ],
    explanation: {
      es: 'timeout es un operador que falla: sin configuración adicional emite un TimeoutError que hay que capturar con catchError, y con timeout({ each: 3000, with: () => of(cache) }) puedes degradar a un valor de reserva. También distingue first, el plazo para la primera emisión, de each, el plazo entre emisiones consecutivas. Nunca completa ni reemite lo anterior por su cuenta, y timeoutWith quedó deprecado en RxJS 7 a favor de esta configuración.',
      en: 'timeout is a failing operator: with no extra configuration it emits a TimeoutError that you must catch with catchError, and with timeout({ each: 3000, with: () => of(cache) }) you can degrade to a fallback value. It also distinguishes first, the deadline for the first emission, from each, the deadline between consecutive emissions. It never completes or re-emits the previous value on its own, and timeoutWith was deprecated in RxJS 7 in favor of this configuration.',
    },
  },
  {
    id: 'fe-rxop-15',
    topic: 'Operadores RxJS',
    prompt: {
      es: 'Quieres reintentar una petición hasta tres veces esperando un segundo entre intentos en RxJS 7. ¿Cuál es la forma recomendada?',
      en: 'You want to retry a request up to three times waiting one second between attempts in RxJS 7. What is the recommended way?',
    },
    answer: {
      es: 'retry({ count: 3, delay: 1000 }), porque retry acepta un objeto de configuración y retryWhen quedó deprecado.',
      en: 'retry({ count: 3, delay: 1000 }), because retry accepts a configuration object and retryWhen was deprecated.',
    },
    distractors: [
      {
        es: 'retryWhen con un delay de 1000 sobre el observable de notificaciones, porque es la única manera de espaciar los intentos.',
        en: 'retryWhen with a delay of 1000 over the notifier observable, because it is the only way to space out the attempts.',
      },
      {
        es: 'retry(3) junto con delay(1000) en el mismo pipe, porque delay introduce la espera antes de cada reintento.',
        en: 'retry(3) together with delay(1000) in the same pipe, because delay introduces the wait before each retry.',
      },
    ],
    explanation: {
      es: 'Desde RxJS 7.x retry admite { count, delay, resetOnSuccess }, donde delay puede ser un número o una función que devuelve un observable de notificación, lo que cubre también el retroceso exponencial. retryWhen está deprecado en RxJS 7 y desapareció en la versión 8, así que no es la respuesta actual, y combinar delay con retry no funciona: delay solo desplaza las emisiones, no la resuscripción que hace retry.',
      en: 'Since RxJS 7.x retry accepts { count, delay, resetOnSuccess }, where delay can be a number or a function returning a notifier observable, which also covers exponential backoff. retryWhen is deprecated in RxJS 7 and was removed in version 8, so it is not the current answer, and combining delay with retry does not work: delay only shifts emissions, not the resubscription performed by retry.',
    },
  },
  {
    id: 'fe-rxop-16',
    topic: 'Operadores RxJS',
    prompt: {
      es: 'En un buscador con switchMap, ¿qué diferencia hay entre colocar catchError dentro del switchMap o fuera de él?',
      en: 'In a search box built with switchMap, what is the difference between placing catchError inside the switchMap or outside of it?',
    },
    answer: {
      es: 'Dentro protege solo a la petición y el stream de eventos sigue vivo; fuera el error termina también la fuente y el buscador deja de responder.',
      en: 'Inside it protects only the request and the event stream stays alive; outside the error also terminates the source and the search box stops responding.',
    },
    distractors: [
      {
        es: 'Es indiferente: catchError siempre reemplaza al observable interno y la fuente externa continúa emitiendo eventos.',
        en: 'It makes no difference: catchError always replaces the inner observable and the outer source keeps emitting events.',
      },
      {
        es: 'Fuera es más seguro porque captura también los errores del interno y después reanuda la fuente de eventos.',
        en: 'Outside is safer because it also catches the inner errors and afterwards resumes the event stream.',
      },
    ],
    explanation: {
      es: 'El error viaja del interno al externo, así que capturarlo fuera salva la emisión pero mata la cadena completa, y catchError no reanuda nada: sustituye el stream fallido por el observable que devuelvas. La posición importa y también lo que devuelves: EMPTY completa el interno sin emitir, útil para ignorar el fallo pero deja la vista con los datos anteriores, mientras of(valorPorDefecto) emite un reemplazo visible antes de completar.',
      en: 'The error travels from the inner observable to the outer one, so catching it outside saves the emission but kills the whole chain, and catchError resumes nothing: it replaces the failed stream with the observable you return. Position matters and so does what you return: EMPTY completes the inner observable without emitting, which is useful to ignore the failure but leaves the view with the previous data, while of(defaultValue) emits a visible replacement before completing.',
    },
  },
  {
    id: 'fe-rxop-17',
    topic: 'Operadores RxJS',
    prompt: {
      es: '¿En qué momentos se ejecuta la función que recibe finalize?',
      en: 'At which moments does the function passed to finalize run?',
    },
    answer: {
      es: 'Al completar, al errar y también al desuscribirse, sea por unsubscribe manual o por un takeUntil.',
      en: 'On complete, on error and also on unsubscribe, whether through a manual unsubscribe or a takeUntil.',
    },
    distractors: [
      {
        es: 'Solo al completar o al errar, porque una desuscripción corta el pipe antes de que finalize pueda ejecutarse.',
        en: 'Only on complete or on error, because an unsubscribe cuts the pipe before finalize can run.',
      },
      {
        es: 'Solo al completar, porque un error se considera una salida anormal y se atiende únicamente en catchError.',
        en: 'Only on complete, because an error is considered an abnormal exit and is handled only in catchError.',
      },
    ],
    explanation: {
      es: 'finalize se engancha a la lógica de limpieza de la suscripción, por eso es el sitio correcto para apagar un spinner: cubre los tres finales posibles, incluida la cancelación. Esa es justo la ventaja frente a tap, cuyos callbacks de complete y error no corren cuando alguien se desuscribe. Ten en cuenta que su posición en el pipe determina el orden de ejecución respecto a otros finalize.',
      en: 'finalize hooks into the subscription teardown, which is why it is the right place to hide a spinner: it covers the three possible endings, cancellation included. That is precisely its advantage over tap, whose complete and error callbacks do not run when somebody unsubscribes. Keep in mind that its position in the pipe determines the execution order relative to other finalize calls.',
    },
  },
  {
    id: 'fe-rxop-18',
    topic: 'Operadores RxJS',
    prompt: {
      es: '¿Qué hace takeWhile(predicado, true) y en qué se diferencia de filter?',
      en: 'What does takeWhile(predicate, true) do and how is it different from filter?',
    },
    answer: {
      es: 'Emite también el primer valor que incumple el predicado y luego completa; filter solo descarta lo que no cumple y nunca termina el stream por ello.',
      en: 'It also emits the first value that fails the predicate and then completes; filter merely discards what does not match and never terminates the stream because of it.',
    },
    distractors: [
      {
        es: 'Incluye todos los valores que no cumplen el predicado además de los que sí, como un filter invertido que no descarta nada.',
        en: 'It includes every value that fails the predicate on top of the ones that pass, like an inverted filter that discards nothing.',
      },
      {
        es: 'Emite mientras el predicado sea verdadero y deja el stream activo, igual que filter, en lugar de completarlo.',
        en: 'It emits while the predicate is true and leaves the stream active, just like filter, instead of completing it.',
      },
    ],
    explanation: {
      es: 'takeWhile es un operador terminal: en cuanto el predicado falla, completa y se desuscribe de la fuente, y el segundo argumento inclusive solo decide si ese valor límite se emite antes de cerrar. filter no tiene efecto terminal, así que el stream sigue procesando emisiones posteriores aunque una no pase el filtro. Si lo que quieres es descartar al principio y seguir después, el operador es skipWhile.',
      en: 'takeWhile is a terminal operator: as soon as the predicate fails it completes and unsubscribes from the source, and the second inclusive argument only decides whether that boundary value is emitted before closing. filter has no terminal effect, so the stream keeps processing later emissions even if one does not pass the filter. If what you want is to discard at the beginning and continue afterwards, the operator is skipWhile.',
    },
  },
  {
    id: 'fe-rxop-19',
    topic: 'Operadores RxJS',
    prompt: {
      es: 'La fuente completa sin emitir ningún valor. ¿Qué hacen first(), take(1) y single() en ese escenario?',
      en: 'The source completes without emitting any value. What do first(), take(1) and single() do in that scenario?',
    },
    answer: {
      es: 'first() lanza EmptyError, take(1) completa sin emitir nada y single() también lanza EmptyError.',
      en: 'first() throws EmptyError, take(1) completes without emitting anything and single() also throws EmptyError.',
    },
    distractors: [
      {
        es: 'Los tres completan sin emitir, porque ninguno puede producir un valor que la fuente nunca entregó.',
        en: 'All three complete without emitting, because none of them can produce a value the source never delivered.',
      },
      {
        es: 'first() completa sin emitir y take(1) lanza EmptyError, porque take exige recibir la cantidad de valores pedida.',
        en: 'first() completes without emitting and take(1) throws EmptyError, because take requires receiving the requested amount of values.',
      },
    ],
    explanation: {
      es: 'first() garantiza un valor, así que si la fuente se vacía falla con EmptyError, salvo que le des un valor por defecto como first(undefined, fallback). take(1) no garantiza nada: simplemente deja pasar como máximo una emisión y completa, por eso es el seguro para flujos que pueden estar vacíos. single() es el más estricto: lanza EmptyError si no hay valores y SequenceError si hay más de uno.',
      en: 'first() guarantees a value, so if the source is empty it fails with EmptyError, unless you give it a default such as first(undefined, fallback). take(1) guarantees nothing: it simply lets at most one emission through and completes, which is why it is the safe choice for streams that may be empty. single() is the strictest: it throws EmptyError when there are no values and SequenceError when there is more than one.',
    },
  },
  {
    id: 'fe-rxop-20',
    topic: 'Operadores RxJS',
    prompt: {
      es: '¿Qué aportan defaultIfEmpty y throwIfEmpty a un stream?',
      en: 'What do defaultIfEmpty and throwIfEmpty add to a stream?',
    },
    answer: {
      es: 'defaultIfEmpty emite un valor de reemplazo si la fuente completa sin haber emitido nunca; throwIfEmpty lanza un error en ese mismo caso.',
      en: 'defaultIfEmpty emits a replacement value if the source completes without ever having emitted; throwIfEmpty throws an error in that same case.',
    },
    distractors: [
      {
        es: 'defaultIfEmpty emite su valor mientras la fuente todavía no haya emitido y throwIfEmpty falla si la fuente tarda demasiado.',
        en: 'defaultIfEmpty emits its value while the source has not emitted yet and throwIfEmpty fails if the source takes too long.',
      },
      {
        es: 'defaultIfEmpty sustituye cada valor null o undefined del stream y throwIfEmpty rechaza las emisiones con arreglos vacíos.',
        en: 'defaultIfEmpty replaces every null or undefined value of the stream and throwIfEmpty rejects emissions carrying empty arrays.',
      },
    ],
    explanation: {
      es: 'Los dos actúan únicamente en la notificación de complete y solo si no hubo ni una emisión, así que son ideales tras un filter que pudo descartar todo. Emitir un valor antes de la fuente es startWith, no defaultIfEmpty, y fallar por tardanza es timeout. Como dato extra, throwIfEmpty lanza EmptyError por defecto pero acepta una fábrica de error propia, y ninguno inspecciona el contenido de los valores emitidos.',
      en: 'Both act only on the complete notification and only if there was not a single emission, so they fit well after a filter that may have discarded everything. Emitting a value before the source is startWith, not defaultIfEmpty, and failing because of slowness is timeout. As an extra detail, throwIfEmpty throws EmptyError by default but accepts your own error factory, and neither of them inspects the content of the emitted values.',
    },
  },
];
