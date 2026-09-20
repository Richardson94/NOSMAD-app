import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_RXJS_PATTERNS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-rxp-01',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Cuál es el principal riesgo de usar un Subject como bus de eventos global entre funcionalidades?',
      en: 'What is the main risk of using a Subject as a global event bus between features?',
    },
    answer: {
      es: 'Acopla emisores y consumidores de forma opaca, los suscriptores tardíos pierden eventos y el Subject no completa nunca, lo que facilita fugas de suscripciones.',
      en: 'It couples producers and consumers in an opaque way, late subscribers miss events and the Subject never completes, which makes subscription leaks easy.',
    },
    distractors: [
      {
        es: 'Un Subject global equivale a shareReplay(1) sobre cada fuente, así que cachea el último evento y evita trabajo duplicado.',
        en: 'A global Subject is equivalent to shareReplay(1) on every source, so it caches the last event and avoids duplicated work.',
      },
      {
        es: 'Un Subject global es el mismo patrón que EventEmitter y por eso es la vía recomendada para comunicar módulos distantes en Angular.',
        en: 'A global Subject is the same pattern as EventEmitter and therefore it is the recommended way to communicate across distant modules in Angular.',
      },
    ],
    explanation: {
      es: 'Un bus con Subject convierte el flujo en un canal invisible: cualquier servicio puede hacer next y cualquier componente escuchar, sin contrato ni ciclo de vida. A diferencia de shareReplay, no hay fuente que se recicle ni búfer salvo que uses ReplaySubject, y como el bus vive en un singleton nunca emite complete, así que una suscripción olvidada permanece para siempre. EventEmitter está pensado para comunicación padre-hijo en un componente, no para un bus de aplicación.',
      en: 'A bus with a Subject turns the data flow into an invisible channel: any service can call next and any component can listen, with no contract and no lifecycle. Unlike shareReplay, there is no source that gets recycled and no buffer unless you use ReplaySubject, and because the bus lives in a singleton it never emits complete, so a forgotten subscription remains forever. EventEmitter is meant for parent-child communication in a component, not for an application bus.',
    },
  },
  {
    id: 'fe-rxp-02',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Por qué un servicio expone asObservable() y no el Subject interno?',
      en: 'Why does a service expose asObservable() and not the internal Subject?',
    },
    answer: {
      es: 'Para que los consumidores puedan suscribirse pero no puedan llamar a next, error o complete y corromper el productor para todos.',
      en: 'So that consumers can subscribe but cannot call next, error or complete and corrupt the producer for everyone.',
    },
    distractors: [
      {
        es: 'asObservable clona el Subject y entrega a cada consumidor un flujo frío independiente, como si hubiera usado defer.',
        en: 'asObservable clones the Subject and gives each consumer an independent cold stream, as if defer had been used.',
      },
      {
        es: 'asObservable completa el Subject original en cuanto el primer consumidor se desuscribe, el mismo efecto que refCount.',
        en: 'asObservable completes the original Subject as soon as the first consumer unsubscribes, the same effect as refCount.',
      },
    ],
    explanation: {
      es: 'asObservable envuelve el mismo Subject en un Observable que oculta los métodos de escritura; no clona, no lo vuelve frío y no aplica refCount. Quien recibe el Subject crudo puede completar o errar el canal para todos los demás suscriptores del servicio. La limpieza sigue siendo responsabilidad de cada consumidor con async pipe o takeUntilDestroyed, porque el Subject del servicio no completa al desuscribirse uno.',
      en: 'asObservable wraps the same Subject in an Observable that hides the write methods; it does not clone, it does not make it cold and it does not apply refCount. Whoever receives the raw Subject can complete or error the channel for every other subscriber of the service. Cleanup remains the responsibility of each consumer with async pipe or takeUntilDestroyed, because the service Subject does not complete when one of them unsubscribes.',
    },
  },
  {
    id: 'fe-rxp-03',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Cuál es la semántica de AsyncSubject?',
      en: 'What is the semantics of AsyncSubject?',
    },
    answer: {
      es: 'Almacena el último valor y solo lo entrega, junto con complete, cuando el Subject completa; si completa sin haber emitido, los suscriptores solo reciben complete.',
      en: 'It stores the last value and delivers it, together with complete, only when the Subject completes; if it completes without emitting, subscribers only receive complete.',
    },
    distractors: [
      {
        es: 'Se comporta como BehaviorSubject sin valor inicial: entrega el último valor de inmediato a cada suscriptor nuevo y sigue emitiendo en caliente.',
        en: 'It behaves like BehaviorSubject without an initial value: it delivers the last value immediately to every new subscriber and keeps emitting as a hot stream.',
      },
      {
        es: 'Es un ReplaySubject(1) que reentrega el último valor aunque el stream todavía no haya completado.',
        en: 'It is a ReplaySubject(1) that redelivers the last value even if the stream has not completed yet.',
      },
    ],
    explanation: {
      es: 'AsyncSubject imita a una Promise: nadie ve nada hasta el complete, y entonces llega solo el último next. Por eso encaja en escenarios de resultado único, y publishLast, deprecado en RxJS 7, se apoyaba en él; el recambio es connectable con connector: () => new AsyncSubject(). BehaviorSubject y ReplaySubject(1) entregan valores en cuanto existen, sin esperar a que el productor termine.',
      en: 'AsyncSubject mimics a Promise: nobody sees anything until complete, and then only the last next arrives. That is why it fits single-result scenarios, and publishLast, deprecated in RxJS 7, relied on it; the replacement is connectable with connector: () => new AsyncSubject(). BehaviorSubject and ReplaySubject(1) deliver values as soon as they exist, without waiting for the producer to finish.',
    },
  },
  {
    id: 'fe-rxp-04',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Qué efecto tiene el segundo argumento de new ReplaySubject(n, windowTime)?',
      en: 'What effect does the second argument of new ReplaySubject(n, windowTime) have?',
    },
    answer: {
      es: 'Descarta del búfer los valores más antiguos que windowTime milisegundos, aunque todavía quepan en el tamaño n.',
      en: 'It discards from the buffer the values older than windowTime milliseconds, even if they still fit in the size n.',
    },
    distractors: [
      {
        es: 'Retrasa cada reentrega windowTime milisegundos, igual que delay, para no saturar al suscriptor tardío.',
        en: 'It delays each replay by windowTime milliseconds, just like delay, so it does not saturate the late subscriber.',
      },
      {
        es: 'Agrupa las emisiones en ventanas de windowTime, como el operador windowTime, y reentrega cada ventana como un observable interno.',
        en: 'It groups emissions into windows of windowTime, like the windowTime operator, and replays each window as an inner observable.',
      },
    ],
    explanation: {
      es: 'ReplaySubject(n, windowTime) aplica las dos restricciones a la vez: el suscriptor nuevo recibe como máximo n valores y ninguno cuya edad supere la ventana. No retrasa nada y no crea observables de orden superior; eso es delay y el operador window o windowTime, respectivamente. Si omites windowTime, los valores viven en el búfer hasta que el tamaño los expulsa.',
      en: 'ReplaySubject(n, windowTime) applies both constraints at once: the new subscriber receives at most n values and none whose age exceeds the window. It does not delay anything and it does not create higher-order observables; that is delay and the window or windowTime operator, respectively. If you omit windowTime, values live in the buffer until the size ejects them.',
    },
  },
  {
    id: 'fe-rxp-05',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿En qué se diferencian share y shareReplay(1) cuando un segundo suscriptor llega después de la primera emisión?',
      en: 'How do share and shareReplay(1) differ when a second subscriber arrives after the first emission?',
    },
    answer: {
      es: 'share no reentrega valores pasados, así que el segundo empieza en silencio; shareReplay(1) le entrega de inmediato el último valor cacheado.',
      en: 'share does not replay past values, so the second subscriber starts in silence; shareReplay(1) immediately delivers the last cached value.',
    },
    distractors: [
      {
        es: 'No hay diferencia práctica: share en RxJS 7 usa un ReplaySubject interno y también cachea el último valor.',
        en: 'There is no practical difference: share in RxJS 7 uses an internal ReplaySubject and also caches the last value.',
      },
      {
        es: 'share cachea todas las emisiones y shareReplay(1) solo la primera, porque el 1 limita el número de suscriptores y no el búfer.',
        en: 'share caches every emission and shareReplay(1) only the first one, because the 1 limits the number of subscribers and not the buffer.',
      },
    ],
    explanation: {
      es: 'share usa por defecto un Subject, no un ReplaySubject, así que hace multicast sin memoria; para imitar shareReplay hay que pasar connector: () => new ReplaySubject(1). shareReplay(1) sí recuerda el último valor, y en RxJS 7 su refCount por defecto es false: la fuente sigue viva sin suscriptores, a diferencia de share, que se desuscribe al llegar a cero. El número 1 es el bufferSize, no un límite de suscriptores.',
      en: 'share uses a Subject by default, not a ReplaySubject, so it multicasts with no memory; to mimic shareReplay you must pass connector: () => new ReplaySubject(1). shareReplay(1) does remember the last value, and in RxJS 7 its default refCount is false: the source stays alive with zero subscribers, unlike share, which unsubscribes when the count reaches zero. The number 1 is the bufferSize, not a subscriber limit.',
    },
  },
  {
    id: 'fe-rxp-06',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Qué consigues al hacer multicast manual con connectable(fuente, { connector }) y connect()?',
      en: 'What do you achieve with manual multicast using connectable(source, { connector }) and connect()?',
    },
    answer: {
      es: 'Obtienes un observable conectable que no se suscribe a la fuente hasta que llamas a connect(), y a partir de ahí todos los suscriptores comparten la misma ejecución.',
      en: 'You get a connectable observable that does not subscribe to the source until you call connect(), and from then on every subscriber shares the same execution.',
    },
    distractors: [
      {
        es: 'Es el recambio de share: connectable arranca solo y se desuscribe al irse el último consumidor, sin que tengas que llamar a connect.',
        en: 'It is the replacement for share: connectable starts on its own and unsubscribes when the last consumer leaves, without you having to call connect.',
      },
      {
        es: 'Equivale a publish() seguido de refCount(), que en RxJS 7 sigue siendo la API recomendada para multicast perezoso.',
        en: 'It is equivalent to publish() followed by refCount(), which in RxJS 7 remains the recommended API for lazy multicast.',
      },
    ],
    explanation: {
      es: 'connectable sustituye a multicast y a la familia publish, publishReplay, publishLast y publishBehavior, todas deprecadas en RxJS 7. El arranque es explícito con connect() o con el operador connect del pipe; no hay refCount automático salvo que lo implementes. share y shareReplay son el atajo cuando quieres multicast con gestión de suscriptores, no el reemplazo de un connect manual.',
      en: 'connectable replaces multicast and the publish, publishReplay, publishLast and publishBehavior family, all deprecated in RxJS 7. Startup is explicit with connect() or with the connect operator in the pipe; there is no automatic refCount unless you implement it. share and shareReplay are the shortcut when you want multicast with subscriber management, not the replacement for a manual connect.',
    },
  },
  {
    id: 'fe-rxp-07',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Cómo se crea un operador propio en RxJS 7 como función que devuelve OperatorFunction?',
      en: 'How do you create a custom operator in RxJS 7 as a function that returns OperatorFunction?',
    },
    answer: {
      es: 'Escribes una función que devuelve OperatorFunction, normalmente (source) => source.pipe(...otrosOperadores), y la pasas a pipe.',
      en: 'You write a function that returns OperatorFunction, usually (source) => source.pipe(...otherOperators), and you pass it to pipe.',
    },
    distractors: [
      {
        es: 'Extiendes la clase Operator y la registras con lift, que es la API pública estable para operadores en RxJS 7.',
        en: 'You extend the Operator class and register it with lift, which is the stable public API for operators in RxJS 7.',
      },
      {
        es: 'Encapsulas la lógica en tap, porque tap puede transformar el valor y devolver un nuevo stream reutilizable.',
        en: 'You encapsulate the logic in tap, because tap can transform the value and return a new reusable stream.',
      },
    ],
    explanation: {
      es: 'El contrato público es OperatorFunction: una función de Observable a Observable que pipe puede componer. Encadenar operadores existentes dentro cubre la mayoría de los casos; si necesitas controlar cada next, te suscribes a la fuente y reenvías. lift y la clase Operator son API interna y no debes basarte en ellas; tap no transforma ni devuelve un stream nuevo, eso es map o el factory que retorna OperatorFunction.',
      en: 'The public contract is OperatorFunction: a function from Observable to Observable that pipe can compose. Chaining existing operators inside covers most cases; if you need to control each next, you subscribe to the source and forward. lift and the Operator class are internal API and you should not rely on them; tap does not transform or return a new stream, that is map or the factory that returns OperatorFunction.',
    },
  },
  {
    id: 'fe-rxp-08',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Qué es un observable de orden superior?',
      en: 'What is a higher-order observable?',
    },
    answer: {
      es: 'Un observable que emite otros observables, como el resultado de mapear cada evento a un http.get sin aplanar.',
      en: 'An observable that emits other observables, such as the result of mapping each event to an http.get without flattening.',
    },
    distractors: [
      {
        es: 'Un observable caliente, porque ya tiene un productor compartido y por eso está en un orden de ejecución superior.',
        en: 'A hot observable, because it already has a shared producer and therefore sits at a higher execution order.',
      },
      {
        es: 'El observable que devuelve combineLatest, porque recibe varios observables y los combina en un nivel superior.',
        en: 'The observable returned by combineLatest, because it receives several observables and combines them at a higher level.',
      },
    ],
    explanation: {
      es: 'El orden superior aparece en cuanto proyectas cada valor a un nuevo observable: map(term => this.http.get(url)) produce un Observable de Observables. Los operadores de aplanado switchMap, mergeMap, concatMap y exhaustMap existen justo para suscribirse a esos internos y devolver un stream plano. Caliente describe multicast, y combineLatest combina fuentes ya planas en un valor compuesto, no emite observables internos.',
      en: 'Higher order appears as soon as you project each value to a new observable: map(term => this.http.get(url)) produces an Observable of Observables. Flattening operators switchMap, mergeMap, concatMap and exhaustMap exist precisely to subscribe to those inner observables and return a flat stream. Hot describes multicast, and combineLatest combines already flat sources into a composite value; it does not emit inner observables.',
    },
  },
  {
    id: 'fe-rxp-09',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Por qué tap ejecuta el efecto secundario dos veces si dos componentes se suscriben al mismo observable frío?',
      en: 'Why does tap run the side effect twice if two components subscribe to the same cold observable?',
    },
    answer: {
      es: 'Porque cada suscripción crea su propia ejecución de la fuente y tap forma parte de esa cadena; sin share o shareReplay el efecto no se comparte.',
      en: 'Because each subscription creates its own execution of the source and tap is part of that chain; without share or shareReplay the effect is not shared.',
    },
    distractors: [
      {
        es: 'tap corre una vez por valor a nivel de proceso; si corre dos veces es que usaste mergeMap en lugar de switchMap.',
        en: 'tap runs once per value at process level; if it runs twice it is because you used mergeMap instead of switchMap.',
      },
      {
        es: 'El duplicado lo provoca finalize, no tap, porque finalize se engancha al teardown de cada suscripción.',
        en: 'The duplicate is caused by finalize, not tap, because finalize hooks into the teardown of each subscription.',
      },
    ],
    explanation: {
      es: 'tap no tiene memoria ni refCount: es un observador más en una tubería fría, así que el log, el spinner o la analítica ocurren una vez por suscripción. Para compartir el efecto hay que multicast con share o shareReplay antes de que se suscriban los consumidores. mergeMap frente a switchMap cambia cuántos internos hay, no cuántas veces se ejecuta la tubería externa, y finalize sí corre por suscripción pero en la limpieza, no en cada next.',
      en: 'tap has no memory and no refCount: it is one more observer in a cold pipeline, so the log, the spinner or the analytics happen once per subscription. To share the effect you must multicast with share or shareReplay before the consumers subscribe. mergeMap versus switchMap changes how many inner observables there are, not how many times the outer pipeline runs, and finalize does run per subscription but on cleanup, not on each next.',
    },
  },
  {
    id: 'fe-rxp-10',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Cómo cacheas una petición HTTP con shareReplay y la refrescas periódicamente con un timer?',
      en: 'How do you cache an HTTP request with shareReplay and refresh it periodically with a timer?',
    },
    answer: {
      es: 'timer(0, periodo).pipe(switchMap(() => this.http.get(url)), shareReplay({ bufferSize: 1, refCount: true }))',
      en: 'timer(0, period).pipe(switchMap(() => this.http.get(url)), shareReplay({ bufferSize: 1, refCount: true }))',
    },
    distractors: [
      {
        es: 'interval(periodo).pipe(mergeMap(() => this.http.get(url)), shareReplay(1)), para lanzar refrescos en paralelo y cachear el más rápido.',
        en: 'interval(period).pipe(mergeMap(() => this.http.get(url)), shareReplay(1)), to fire refreshes in parallel and cache the fastest one.',
      },
      {
        es: 'this.http.get(url).pipe(shareReplay({ bufferSize: 1, refCount: true }), repeat({ delay: periodo })), porque repeat reintenta tras complete y el cache se renueva.',
        en: 'this.http.get(url).pipe(shareReplay({ bufferSize: 1, refCount: true }), repeat({ delay: period })), because repeat retries after complete and the cache renews.',
      },
    ],
    explanation: {
      es: 'timer(0, periodo) dispara ya y luego cada periodo; switchMap cancela la petición anterior si el tick llega antes de que responda, y shareReplay con refCount true comparte el último valor y apaga el timer al irse el último suscriptor. mergeMap deja peticiones solapadas y respuestas desordenadas. Si pones shareReplay antes de repeat, shareReplay se suscribe una vez a http.get, cachea esa única respuesta y repeat solo vuelve a leer el búfer, sin nueva petición.',
      en: 'timer(0, period) fires immediately and then every period; switchMap cancels the previous request if the tick arrives before it responds, and shareReplay with refCount true shares the last value and shuts the timer down when the last subscriber leaves. mergeMap leaves overlapping requests and out-of-order responses. If you put shareReplay before repeat, shareReplay subscribes once to http.get, caches that single response and repeat only rereads the buffer, with no new request.',
    },
  },
  {
    id: 'fe-rxp-11',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Qué ocurre con una petición HTTP de Angular cuando te desuscribes del observable, y cómo se relaciona con AbortController?',
      en: 'What happens to an Angular HTTP request when you unsubscribe from the observable, and how does that relate to AbortController?',
    },
    answer: {
      es: 'La desuscripción aborta la petición en vuelo: con XMLHttpRequest se llama a abort y con withFetch se cancela el AbortController asociado.',
      en: 'Unsubscription aborts the in-flight request: with XMLHttpRequest abort is called and with withFetch the associated AbortController is cancelled.',
    },
    distractors: [
      {
        es: 'HttpClient no puede cancelar: hay que pasar a mano un AbortController como en fetch, y unsubscribe solo deja de entregar la respuesta.',
        en: 'HttpClient cannot cancel: you must pass an AbortController by hand as with fetch, and unsubscribe only stops delivering the response.',
      },
      {
        es: 'switchMap cancela el observable interno pero la petición sigue en red hasta timeout, porque abortar es responsabilidad de retry o finalize.',
        en: 'switchMap cancels the inner observable but the request stays on the network until timeout, because aborting is the job of retry or finalize.',
      },
    ],
    explanation: {
      es: 'El teardown de la suscripción es el gancho de cancelación de HttpClient. En el motor XHR clásico eso es xhr.abort(); si configuras provideHttpClient(withFetch()) el motor es fetch y se aborta el signal de un AbortController. switchMap, takeUntilDestroyed o el async pipe se desuscriben y por tanto abortan; retry reintenta después de un error y finalize solo observa la limpieza, ninguno sustituye al abort.',
      en: 'The teardown of the subscription is the cancellation hook of HttpClient. On the classic XHR engine that is xhr.abort(); if you configure provideHttpClient(withFetch()) the engine is fetch and the signal of an AbortController is aborted. switchMap, takeUntilDestroyed or the async pipe unsubscribe and therefore abort; retry retries after an error and finalize only observes the cleanup, neither of them replaces the abort.',
    },
  },
  {
    id: 'fe-rxp-12',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Para qué sirven schedulers como asyncScheduler y queueScheduler?',
      en: 'What are schedulers such as asyncScheduler and queueScheduler for?',
    },
    answer: {
      es: 'Deciden en qué cola y en qué momento se ejecuta el trabajo: asyncScheduler usa macrotareas (setTimeout/setInterval) y queueScheduler ejecuta en cola síncrona dentro del mismo tick.',
      en: 'They decide in which queue and at which moment work runs: asyncScheduler uses macrotasks (setTimeout/setInterval) and queueScheduler runs on a synchronous queue within the same tick.',
    },
    distractors: [
      {
        es: 'asyncScheduler sustituye a NgZone para sacar el trabajo de Angular y queueScheduler lo vuelve a meter en la detección de cambios.',
        en: 'asyncScheduler replaces NgZone to take work out of Angular and queueScheduler puts it back into change detection.',
      },
      {
        es: 'Son equivalentes a observeOn: colocas asyncScheduler al crear el observable y eso retrasa cada next sin cambiar el momento de la suscripción.',
        en: 'They are equivalent to observeOn: you place asyncScheduler when creating the observable and that delays each next without changing the moment of subscription.',
      },
    ],
    explanation: {
      es: 'interval, delay, debounceTime y timeout usan asyncScheduler, por eso tick de fakeAsync puede avanzarlos. queueScheduler sirve para trabajo recursivo síncrono sin inflar la pila, no para diferir a otro ciclo. NgZone es el mecanismo de Angular, no un scheduler de RxJS, y retrasar las notificaciones hacia abajo es observeOn(asyncScheduler), no el scheduler por sí solo en la creación.',
      en: 'interval, delay, debounceTime and timeout use asyncScheduler, which is why fakeAsync tick can advance them. queueScheduler is for synchronous recursive work without growing the stack, not for deferring to another turn. NgZone is the Angular mechanism, not an RxJS scheduler, and delaying notifications downstream is observeOn(asyncScheduler), not the scheduler by itself at creation time.',
    },
  },
  {
    id: 'fe-rxp-13',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿En qué se diferencian observeOn y subscribeOn?',
      en: 'What is the difference between observeOn and subscribeOn?',
    },
    answer: {
      es: 'subscribeOn controla dónde y cuándo se realiza la suscripción a la fuente; observeOn controla dónde y cuándo se entregan next, error y complete hacia abajo.',
      en: 'subscribeOn controls where and when the subscription to the source happens; observeOn controls where and when next, error and complete are delivered downstream.',
    },
    distractors: [
      {
        es: 'Son alias: ambos retrasan cada emisión con asyncScheduler y solo cambia el nombre según se pongan al inicio o al final del pipe.',
        en: 'They are aliases: both delay each emission with asyncScheduler and only the name changes according to whether they sit at the start or the end of the pipe.',
      },
      {
        es: 'observeOn retrasa el arranque de la fuente y subscribeOn solo afecta a los valores que ya van camino del suscriptor, al revés de lo que sugiere el nombre.',
        en: 'observeOn delays the start of the source and subscribeOn only affects the values already on the way to the subscriber, the opposite of what the name suggests.',
      },
    ],
    explanation: {
      es: 'La posición de subscribeOn da igual: actúa en el momento de subscribe, así que mueve el productor, útil si crear el observable bloquea. observeOn se inserta en el punto del pipe donde lo pones y cambia la cola de las notificaciones a partir de ahí. Invertirlos es el error clásico: si el trabajo pesado está en map, necesitas observeOn antes de map; si el peso está en la creación de la fuente, subscribeOn.',
      en: 'The position of subscribeOn does not matter: it acts at subscribe time, so it moves the producer, useful if creating the observable blocks. observeOn is inserted at the point of the pipe where you put it and changes the notification queue from there on. Swapping them is the classic mistake: if the heavy work is in map, you need observeOn before map; if the cost is in creating the source, subscribeOn.',
    },
  },
  {
    id: 'fe-rxp-14',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Cómo se prueban streams con marbles y TestScheduler?',
      en: 'How do you test streams with marbles and TestScheduler?',
    },
    answer: {
      es: 'TestScheduler.run te da cold, hot y expectObservable para describir valores, huecos, complete y error en una cadena de texto, y avanza el tiempo virtual frame a frame.',
      en: 'TestScheduler.run gives you cold, hot and expectObservable to describe values, gaps, complete and error in a text string, and it advances virtual time frame by frame.',
    },
    distractors: [
      {
        es: 'fakeAsync y tick interpretan marbles automáticamente si el observable usa asyncScheduler, así que TestScheduler sobra en Angular.',
        en: 'fakeAsync and tick interpret marbles automatically if the observable uses asyncScheduler, so TestScheduler is unnecessary in Angular.',
      },
      {
        es: 'marble() es un operador de RxJS 7 que convierte un string en un observable de producción, y el test solo se suscribe con toPromise.',
        en: 'marble() is an RxJS 7 operator that turns a string into a production observable, and the test just subscribes with toPromise.',
      },
    ],
    explanation: {
      es: 'Cada guion es un frame de tiempo virtual (1 frame = 1 ms por defecto en run), las letras son valores, | es complete y # es error. Eso permite afirmar ritmos de debounceTime o switchMap sin esperar de verdad. fakeAsync no entiende marbles; toPromise está deprecado en RxJS 7, usa firstValueFrom o lastValueFrom, y no existe un operador marble de producción.',
      en: 'Each dash is a virtual time frame (1 frame = 1 ms by default in run), letters are values, | is complete and # is error. That lets you assert timings of debounceTime or switchMap without waiting for real time. fakeAsync does not understand marbles; toPromise is deprecated in RxJS 7, use firstValueFrom or lastValueFrom, and there is no production marble operator.',
    },
  },
  {
    id: 'fe-rxp-15',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Cuándo usas fakeAsync y tick frente al callback done para probar código asíncrono?',
      en: 'When do you use fakeAsync and tick versus the done callback to test asynchronous code?',
    },
    answer: {
      es: 'fakeAsync más tick controlan el tiempo de setTimeout, setInterval y operadores con asyncScheduler de forma síncrona; done espera callbacks reales y conviene reservarlo para I/O que no puedes virtualizar.',
      en: 'fakeAsync plus tick control the time of setTimeout, setInterval and operators with asyncScheduler in a synchronous way; done waits for real callbacks and should be reserved for I/O that you cannot virtualize.',
    },
    distractors: [
      {
        es: 'waitForAsync es lo mismo que fakeAsync: ambas exponen tick y flush para avanzar timers de RxJS.',
        en: 'waitForAsync is the same as fakeAsync: both expose tick and flush to advance RxJS timers.',
      },
      {
        es: 'done es obligatorio con Observables porque tick no mueve delay ni debounceTime, que siempre usan el reloj real.',
        en: 'done is mandatory with Observables because tick does not move delay or debounceTime, which always use the real clock.',
      },
    ],
    explanation: {
      es: 'Dentro de fakeAsync el reloj está detenido hasta que llamas a tick(ms) o flush(); delay, debounceTime e interval avanzan porque usan asyncScheduler. waitForAsync, antes llamado async, no te da tick: solo espera microtareas y whenStable, así que no sustituye a fakeAsync. done acopla el test a tiempos reales y es propenso a timeouts; para operadores RxJS el TestScheduler con marbles suele ser aún más preciso.',
      en: 'Inside fakeAsync the clock is frozen until you call tick(ms) or flush(); delay, debounceTime and interval advance because they use asyncScheduler. waitForAsync, formerly called async, does not give you tick: it only waits for microtasks and whenStable, so it does not replace fakeAsync. done couples the test to real timings and is prone to timeouts; for RxJS operators TestScheduler with marbles is often even more precise.',
    },
  },
  {
    id: 'fe-rxp-16',
    topic: 'Patrones RxJS',
    prompt: {
      es: 'En el cliente RxJS no hay request(n). ¿Qué estrategias de contrapresión tienes para no saturar al consumidor: descartar, acumular o muestrear?',
      en: 'On the client RxJS has no request(n). Which backpressure strategies do you have so you do not saturate the consumer: discard, accumulate or sample?',
    },
    answer: {
      es: 'Descartar con throttleTime, exhaustMap o auditTime; acumular con buffer, bufferTime o concatMap; muestrear con sample o sampleTime.',
      en: 'Discard with throttleTime, exhaustMap or auditTime; accumulate with buffer, bufferTime or concatMap; sample with sample or sampleTime.',
    },
    distractors: [
      {
        es: 'pause y resume son operadores de RxJS 7 que detienen la fuente hasta que el consumidor pide el siguiente lote, como Reactive Streams.',
        en: 'pause and resume are RxJS 7 operators that stop the source until the consumer asks for the next batch, like Reactive Streams.',
      },
      {
        es: 'zip contra un Subject de créditos implementa contrapresión real y es preferible a throttleTime porque no pierde valores ni los agrupa.',
        en: 'zip against a credits Subject implements real backpressure and is preferable to throttleTime because it does not drop values or group them.',
      },
    ],
    explanation: {
      es: 'RxJS emite hacia adelante sin que el consumidor pida cupos, así que en UI solo puedes tirar valores con throttleTime, exhaustMap o auditTime, guardarlos en un búfer o encolarlos con concatMap, o quedarte con una muestra periódica con sample o sampleTime. No existen pause ni resume en el paquete. El truco de zip con créditos es un pull simulado frágil: si olvidas emitir un crédito el stream se queda mudo.',
      en: 'RxJS pushes forward without the consumer asking for credits, so in a UI you can only drop values with throttleTime, exhaustMap or auditTime, store them in a buffer or queue them with concatMap, or keep a periodic sample with sample or sampleTime. pause and resume do not exist in the package. The zip-with-credits trick is a fragile simulated pull: if you forget to emit a credit the stream goes silent.',
    },
  },
  {
    id: 'fe-rxp-17',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Cómo implementas un reintento con retroceso exponencial usando operadores de RxJS 7?',
      en: 'How do you implement a retry with exponential backoff using RxJS 7 operators?',
    },
    answer: {
      es: 'retry({ count, delay: (error, retryCount) => timer(Math.pow(2, retryCount) * 1000) }) para esperar 2, 4, 8... segundos entre intentos.',
      en: 'retry({ count, delay: (error, retryCount) => timer(Math.pow(2, retryCount) * 1000) }) to wait 2, 4, 8... seconds between attempts.',
    },
    distractors: [
      {
        es: 'retryWhen(errors => errors.pipe(delay(2000))) ya es exponencial porque delay se acumula solo en cada error consecutivo.',
        en: 'retryWhen(errors => errors.pipe(delay(2000))) is already exponential because delay accumulates on its own on each consecutive error.',
      },
      {
        es: 'repeat({ count, delay: (count) => timer(2 ** count * 1000) }) reintenta el HTTP tras un error con la misma curva.',
        en: 'repeat({ count, delay: (count) => timer(2 ** count * 1000) }) retries the HTTP after an error with the same curve.',
      },
    ],
    explanation: {
      es: 'El delay fábrica de retry, disponible como objeto de config desde RxJS 7.3, debe devolver un observable que emita cuando toque reintentar; timer con 2 elevado a retryCount produce el retroceso y retryCount empieza en 1. retryWhen sigue existiendo en RxJS 7 y permite el mismo patrón con delayWhen, pero un delay fijo no es exponencial y reintenta sin límite si no cortas el stream de errores. repeat se suscribe de nuevo tras complete, no tras error, así que no cubre un HTTP fallido.',
      en: 'The delay factory of retry, available as a config object since RxJS 7.3, must return an observable that emits when it is time to retry; timer with 2 to the power of retryCount produces the backoff and retryCount starts at 1. retryWhen still exists in RxJS 7 and allows the same pattern with delayWhen, but a fixed delay is not exponential and retries without limit if you do not complete the error stream. repeat resubscribes after complete, not after error, so it does not cover a failed HTTP call.',
    },
  },
  {
    id: 'fe-rxp-18',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Por qué es preferible derivar el estado combinando streams en lugar de anidar suscripciones?',
      en: 'Why is it preferable to derive state by combining streams instead of nesting subscriptions?',
    },
    answer: {
      es: 'combineLatest, withLatestFrom o forkJoin declaran la dependencia, emiten un estado coherente y concentran la vida de la suscripción en un solo subscribe o async pipe.',
      en: 'combineLatest, withLatestFrom or forkJoin declare the dependency, emit a coherent state and concentrate the subscription lifetime in a single subscribe or async pipe.',
    },
    distractors: [
      {
        es: 'zip es siempre mejor que combineLatest para estado de UI porque emite en cuanto cualquiera de las fuentes cambia.',
        en: 'zip is always better than combineLatest for UI state because it emits as soon as any of the sources changes.',
      },
      {
        es: 'Anidar subscribe es equivalente a switchMap: Angular desuscribe los internos al destruir el componente de forma automática.',
        en: 'Nesting subscribe is equivalent to switchMap: Angular unsubscribes the inner ones automatically when it destroys the component.',
      },
    ],
    explanation: {
      es: 'Una sola tubería hace evidentes las fuentes del estado y permite takeUntilDestroyed o async pipe una sola vez. zip espera parejas por índice y se queda bloqueado si una fuente emite menos, así que no es el combinador de estado; combineLatest emite cuando todas han dado al menos un valor y luego en cada cambio. El subscribe interno no lo limpia Angular: si no lo desuscribes a mano, sobrevive al componente.',
      en: 'A single pipeline makes the sources of the state obvious and lets you use takeUntilDestroyed or async pipe only once. zip waits for pairs by index and stalls if one source emits less often, so it is not the state combinator; combineLatest emits when every source has produced at least one value and then on every change. Angular does not clean the inner subscribe: if you do not unsubscribe by hand, it outlives the component.',
    },
  },
  {
    id: 'fe-rxp-19',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Por qué la suscripción anidada es un antipatrón y cuál es la alternativa?',
      en: 'Why is the nested subscription an antipattern and what is the alternative?',
    },
    answer: {
      es: 'Porque cada subscribe interno se gestiona a mano, se pierde la cancelación unificada y el orden; la alternativa es aplanar con switchMap, mergeMap, concatMap o exhaustMap según la concurrencia que necesites.',
      en: 'Because each inner subscribe is managed by hand, unified cancellation and ordering are lost; the alternative is to flatten with switchMap, mergeMap, concatMap or exhaustMap according to the concurrency you need.',
    },
    distractors: [
      {
        es: 'Anidar subscribe equivale a mergeMap: ambos dejan internos en paralelo, así que la cancelación al desuscribir el externo ya queda resuelta.',
        en: 'Nesting subscribe is equivalent to mergeMap: both leave inner observables in parallel, so cancellation when the outer one unsubscribes is already solved.',
      },
      {
        es: 'La alternativa recomendada es toPromise en el interno y await dentro del subscribe externo, para serializar sin operadores de aplanado.',
        en: 'The recommended alternative is toPromise on the inner observable and await inside the outer subscribe, to serialize without flattening operators.',
      },
    ],
    explanation: {
      es: 'mergeMap sí desuscribe los internos cuando se desuscribe el externo; el nido de subscribe no, salvo que agregues cada Subscription a mano. switchMap cancela el interno anterior, concatMap lo encola y exhaustMap ignora mientras hay uno vivo: esa semántica es la que el nido esconde. toPromise está deprecado en RxJS 7, usa firstValueFrom o lastValueFrom, y además pierde la cancelación al convertir a Promise, que no se aborta con unsubscribe.',
      en: 'mergeMap does unsubscribe the inner observables when the outer one unsubscribes; a nested subscribe does not, unless you add each Subscription by hand. switchMap cancels the previous inner observable, concatMap queues it and exhaustMap ignores new ones while one is alive: that is the semantics the nest hides. toPromise is deprecated in RxJS 7, use firstValueFrom or lastValueFrom, and it also loses cancellation by converting to a Promise, which does not abort on unsubscribe.',
    },
  },
  {
    id: 'fe-rxp-20',
    topic: 'Patrones RxJS',
    prompt: {
      es: '¿Por qué un Subject expuesto por un servicio singleton puede provocar una fuga de memoria si nunca completa?',
      en: 'Why can a Subject exposed by a singleton service cause a memory leak if it never completes?',
    },
    answer: {
      es: 'El Subject no completa nunca, así que las suscripciones de componentes destruidos siguen vivas y retienen el componente si no te desuscribes o usas takeUntilDestroyed o async pipe.',
      en: 'The Subject never completes, so subscriptions from destroyed components stay alive and retain the component unless you unsubscribe or use takeUntilDestroyed or async pipe.',
    },
    distractors: [
      {
        es: 'takeUntil(service.subject) libera al componente cuando el Subject completa, y providedIn root completa ese Subject al cambiar de ruta.',
        en: 'takeUntil(service.subject) releases the component when the Subject completes, and providedIn root completes that Subject on a route change.',
      },
      {
        es: 'shareReplay({ bufferSize: 1, refCount: true }) sobre el Subject lo completa al irse el último suscriptor, así que el servicio no puede filtrar.',
        en: 'shareReplay({ bufferSize: 1, refCount: true }) on the Subject completes it when the last subscriber leaves, so the service cannot leak.',
      },
    ],
    explanation: {
      es: 'Un Subject de un servicio raíz vive toda la aplicación y solo termina si alguien llama a complete, cosa que un bus de eventos casi nunca hace. takeUntil necesita un notificador que emita o complete: el Subject del servicio no completa al navegar, y providedIn root no destruye el servicio. shareReplay con refCount se desuscribe de su fuente al llegar a cero consumidores, pero no completa el Subject; los listeners olvidados siguen anclados al Subject y al componente.',
      en: 'A Subject on a root service lives for the whole application and only ends if somebody calls complete, which an event bus almost never does. takeUntil needs a notifier that emits or completes: the service Subject does not complete on navigation, and providedIn root does not destroy the service. shareReplay with refCount unsubscribes from its source when consumers drop to zero, but it does not complete the Subject; forgotten listeners stay anchored to the Subject and to the component.',
    },
  },
];
