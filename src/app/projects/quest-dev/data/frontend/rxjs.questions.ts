import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_RXJS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-rx-01',
    topic: 'Operadores de aplanado',
    prompt: {
      es: 'En un buscador con autocompletado que dispara una petición por cada tecla, ¿qué operador de aplanado corresponde?',
      en: 'In a typeahead search that fires a request on every keystroke, which flattening operator fits?',
    },
    answer: {
      es: 'switchMap, porque cancela la petición anterior y deja solo el resultado de la última búsqueda.',
      en: 'switchMap, because it cancels the previous request and keeps only the latest search result.',
    },
    distractors: [
      {
        es: 'mergeMap, porque procesa todas las peticiones en paralelo y así el usuario recibe la respuesta más rápida.',
        en: 'mergeMap, because it processes every request in parallel so the user gets the fastest response.',
      },
      {
        es: 'concatMap, porque mantiene el orden de las respuestas y evita que una tardía sobrescriba a otra.',
        en: 'concatMap, because it preserves response order and prevents a late response from overwriting another.',
      },
    ],
    explanation: {
      es: 'switchMap es el único que descarta lo obsoleto: al llegar una tecla nueva, aborta la petición en vuelo. mergeMap deja que las respuestas lleguen desordenadas y puede pintar resultados de un texto viejo, y concatMap respeta el orden pero encola todas las peticiones, retrasando la que realmente importa.',
      en: 'switchMap is the only one that discards stale work: when a new keystroke arrives it aborts the in-flight request. mergeMap lets responses arrive out of order and may render results for old text, and concatMap preserves order but queues every request, delaying the one that actually matters.',
    },
  },
  {
    id: 'fe-rx-02',
    topic: 'Subjects',
    prompt: {
      es: '¿Qué diferencia a BehaviorSubject de ReplaySubject(1)?',
      en: 'What differentiates BehaviorSubject from ReplaySubject(1)?',
    },
    answer: {
      es: 'BehaviorSubject exige un valor inicial y lo expone de forma sincrónica; ReplaySubject(1) solo repite si ya emitió algo.',
      en: 'BehaviorSubject requires an initial value and exposes it synchronously; ReplaySubject(1) only replays if it already emitted.',
    },
    distractors: [
      {
        es: 'BehaviorSubject entrega el último valor solo al primer suscriptor y ReplaySubject(1) lo entrega a todos.',
        en: 'BehaviorSubject delivers the last value only to the first subscriber while ReplaySubject(1) delivers it to all.',
      },
      {
        es: 'BehaviorSubject descarta el valor almacenado al completar el stream y ReplaySubject(1) lo sigue entregando.',
        en: 'BehaviorSubject discards the stored value when the stream completes while ReplaySubject(1) keeps delivering it.',
      },
    ],
    explanation: {
      es: 'La diferencia práctica es el estado inicial garantizado y el acceso sincrónico mediante getValue(), útil para modelar estado. Ambos entregan el último valor a cualquier suscriptor nuevo; y tras completar, es ReplaySubject el que sigue repitiendo su búfer, mientras BehaviorSubject solo notifica la finalización.',
      en: 'The practical difference is the guaranteed initial state plus synchronous access through getValue(), useful to model state. Both deliver the latest value to any new subscriber; and after completion it is ReplaySubject that keeps replaying its buffer, while BehaviorSubject only signals completion.',
    },
  },
  {
    id: 'fe-rx-03',
    topic: 'Combinación',
    prompt: {
      es: '¿Qué hace combineLatest cuando uno de sus observables de entrada todavía no ha emitido ningún valor?',
      en: 'What does combineLatest do when one of its source observables has not emitted any value yet?',
    },
    answer: {
      es: 'No emite nada hasta que todas las fuentes hayan emitido al menos una vez.',
      en: 'It emits nothing until every source has emitted at least once.',
    },
    distractors: [
      {
        es: 'Emite de inmediato usando undefined en la posición de la fuente que aún no produjo valor.',
        en: 'It emits immediately using undefined in the position of the source that has not produced a value yet.',
      },
      {
        es: 'Emite con el valor de las fuentes disponibles y completa cuando la fuente pendiente termina sin emitir.',
        en: 'It emits with the available sources and completes when the pending source finishes without emitting.',
      },
    ],
    explanation: {
      es: 'Es el error más común con combineLatest: un stream silencioso bloquea toda la combinación, por eso se suele darle un valor inicial con startWith. Nunca rellena huecos con undefined, y si una fuente completa sin emitir, la combinación completa sin haber emitido jamás.',
      en: 'This is the most common pitfall with combineLatest: one silent stream blocks the whole combination, which is why you usually seed it with startWith. It never fills gaps with undefined, and if a source completes without emitting, the combination completes having never emitted.',
    },
  },
  {
    id: 'fe-rx-04',
    topic: 'Observables fríos y calientes',
    prompt: {
      es: 'Dos componentes se suscriben al mismo observable devuelto por http.get. ¿Qué ocurre?',
      en: 'Two components subscribe to the same observable returned by http.get. What happens?',
    },
    answer: {
      es: 'Se ejecutan dos peticiones HTTP, porque el observable es frío y cada suscripción lo reinicia.',
      en: 'Two HTTP requests are executed, because the observable is cold and each subscription restarts it.',
    },
    distractors: [
      {
        es: 'Se ejecuta una sola petición y ambos reciben la respuesta, porque HttpClient cachea la petición en curso.',
        en: 'A single request runs and both receive the response, because HttpClient caches the in-flight request.',
      },
      {
        es: 'Se ejecuta una sola petición y el segundo suscriptor no recibe nada, porque el stream ya completó.',
        en: 'A single request runs and the second subscriber receives nothing, because the stream already completed.',
      },
    ],
    explanation: {
      es: 'Cada suscripción a un observable frío crea su propia ejecución del productor, de ahí las peticiones duplicadas; para compartirla se usa shareReplay(1). HttpClient no cachea nada por defecto, y el observable no ha completado para el segundo suscriptor porque ni siquiera había arrancado para él.',
      en: 'Every subscription to a cold observable creates its own producer execution, hence the duplicated requests; to share it you use shareReplay(1). HttpClient caches nothing by default, and the observable has not completed for the second subscriber because it had not even started for it.',
    },
  },
  {
    id: 'fe-rx-05',
    topic: 'Manejo de errores',
    prompt: {
      es: '¿Qué ocurre si un error llega a un stream de eventos de UI sin manejarlo dentro del operador?',
      en: 'What happens if an error reaches a UI event stream without handling it inside the operator?',
    },
    answer: {
      es: 'El stream termina y deja de reaccionar a nuevos eventos, aunque el componente siga vivo.',
      en: 'The stream terminates and stops reacting to new events, even though the component is still alive.',
    },
    distractors: [
      {
        es: 'El stream omite esa emisión y continúa procesando los eventos siguientes con normalidad.',
        en: 'The stream skips that emission and keeps processing the following events normally.',
      },
      {
        es: 'El stream se reinicia automáticamente en la siguiente emisión de la fuente original.',
        en: 'The stream restarts automatically on the next emission from the original source.',
      },
    ],
    explanation: {
      es: 'Error y complete son notificaciones terminales: el buscador deja de buscar y el botón deja de responder sin ningún síntoma visible. La solución es capturar dentro del switchMap con catchError, devolviendo un observable de reemplazo, para que la fuente externa sobreviva.',
      en: 'Error and complete are terminal notifications: the search box stops searching and the button stops responding with no visible symptom. The fix is catching inside the switchMap with catchError, returning a replacement observable, so the outer source survives.',
    },
  },
  {
    id: 'fe-rx-06',
    topic: 'Operadores de tiempo',
    prompt: {
      es: '¿Cuál es la diferencia entre debounceTime y throttleTime?',
      en: 'What is the difference between debounceTime and throttleTime?',
    },
    answer: {
      es: 'debounceTime espera a que haya silencio para emitir el último valor; throttleTime emite y luego ignora las emisiones durante la ventana.',
      en: 'debounceTime waits for silence to emit the latest value; throttleTime emits and then ignores emissions during the window.',
    },
    distractors: [
      {
        es: 'debounceTime descarta los valores intermedios y throttleTime los encola para emitirlos al final de la ventana.',
        en: 'debounceTime discards intermediate values while throttleTime queues them to emit at the end of the window.',
      },
      {
        es: 'debounceTime retrasa cada valor un tiempo fijo y throttleTime solo retrasa el primero de la ráfaga.',
        en: 'debounceTime delays each value by a fixed amount while throttleTime only delays the first of the burst.',
      },
    ],
    explanation: {
      es: 'debounce reinicia su temporizador con cada emisión, así que en una ráfaga continua no emite nunca hasta que el usuario para (ideal para escritura); throttle garantiza una emisión por ventana (ideal para scroll o clics repetidos). Ninguno encola valores, y retrasar todo por un tiempo fijo es delay.',
      en: 'debounce resets its timer on every emission, so during a continuous burst it never emits until the user stops (ideal for typing); throttle guarantees one emission per window (ideal for scroll or repeated clicks). Neither queues values, and delaying everything by a fixed amount is delay.',
    },
  },
  {
    id: 'fe-rx-07',
    topic: 'Compartir streams',
    prompt: {
      es: '¿Qué hace shareReplay({ bufferSize: 1, refCount: true }) frente a shareReplay(1)?',
      en: 'What does shareReplay({ bufferSize: 1, refCount: true }) do compared to shareReplay(1)?',
    },
    answer: {
      es: 'Cancela la suscripción a la fuente cuando se va el último suscriptor, en lugar de mantenerla viva indefinidamente.',
      en: 'It unsubscribes from the source when the last subscriber leaves, instead of keeping it alive indefinitely.',
    },
    distractors: [
      {
        es: 'Limpia el búfer en cada nueva suscripción, de modo que el nuevo suscriptor no reciba valores antiguos.',
        en: 'It clears the buffer on every new subscription, so a new subscriber does not receive stale values.',
      },
      {
        es: 'Convierte el observable en caliente desde el inicio, ejecutando la fuente aunque nadie se haya suscrito.',
        en: 'It turns the observable hot from the start, running the source even if nobody has subscribed.',
      },
    ],
    explanation: {
      es: 'Sin refCount, shareReplay deja la suscripción a la fuente abierta para siempre: con un intervalo o un WebSocket eso es una fuga de memoria clásica. Con refCount en true la fuente se cierra al quedar en cero suscriptores y se reinicia en la siguiente suscripción, conservando el búfer mientras haya al menos uno.',
      en: 'Without refCount, shareReplay keeps the source subscription open forever: with an interval or a WebSocket that is a classic memory leak. With refCount true the source is closed when subscribers drop to zero and restarts on the next subscription, keeping the buffer while at least one remains.',
    },
  },
  {
    id: 'fe-rx-08',
    topic: 'Operadores de creación',
    prompt: {
      es: 'Necesitas lanzar tres peticiones en paralelo y continuar cuando todas terminen. ¿Qué operador usas?',
      en: 'You need to fire three requests in parallel and continue when all of them finish. Which operator do you use?',
    },
    answer: {
      es: 'forkJoin, que espera a que todas completen y emite un único valor con el último resultado de cada una.',
      en: 'forkJoin, which waits for all of them to complete and emits a single value with the last result of each.',
    },
    distractors: [
      {
        es: 'combineLatest, que emite un arreglo con el valor más reciente de cada petición cuando todas respondieron.',
        en: 'combineLatest, which emits an array with the most recent value of each request once all have responded.',
      },
      {
        es: 'zip, que empareja las emisiones por índice y por eso agrupa las tres respuestas en un solo valor.',
        en: 'zip, which pairs emissions by index and therefore groups the three responses into a single value.',
      },
    ],
    explanation: {
      es: 'forkJoin está diseñado para observables que completan, como las peticiones HTTP, y es el equivalente a Promise.all. Las otras dos funcionarían aquí por accidente, pero combineLatest vuelve a emitir con cada nueva emisión y zip se bloquea si un stream emite más veces que otro; ninguna expresa "avísame cuando todo termine".',
      en: 'forkJoin is designed for observables that complete, such as HTTP requests, and is the equivalent of Promise.all. The other two would work here by accident, but combineLatest re-emits on every new emission and zip stalls if one stream emits more often than another; neither expresses "tell me when everything is done".',
    },
  },
];
