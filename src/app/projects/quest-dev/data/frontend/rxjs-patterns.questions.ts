import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_RXJS_PATTERNS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-rxp-01',
    topic: 'Subject global',
    prompt: {
      es: '¿Cuál es el riesgo de usar un Subject como bus de eventos entre pantallas?',
      en: 'What is the risk of using a Subject as an event bus between screens?',
    },
    answer: {
      es: 'Cualquiera puede emitir y cualquiera puede escuchar, sin un contrato claro. Como no completa, una suscripcion olvidada se queda viva.',
      en: 'Anyone can emit and anyone can listen, with no clear contract. Because it does not complete, a forgotten subscription stays alive.',
    },
    distractors: [
      {
        es: 'Equivale a shareReplay, asi que cachea el ultimo evento y evita trabajo duplicado.',
        en: 'It is the same as shareReplay, so it caches the last event and avoids duplicated work.',
      },
      {
        es: 'Es el patron recomendado en Angular para hablar entre modulos lejanos.',
        en: 'It is the recommended Angular pattern for talking across distant modules.',
      },
    ],
    explanation: {
      es: 'Prefiere un servicio con metodos claros, o el router y los inputs, antes que un canal invisible.',
      en: 'Prefer a service with clear methods, or the router and inputs, before an invisible channel.',
    },
  },
  {
    id: 'fe-rxp-02',
    topic: 'asObservable',
    prompt: {
      es: '¿Por qué un servicio expone asObservable y no el Subject interno?',
      en: 'Why does a service expose asObservable and not the internal Subject?',
    },
    answer: {
      es: 'Quien consume puede suscribirse, pero no puede llamar a next, error o complete y estropear el stream para los demas.',
      en: 'A consumer can subscribe, but cannot call next, error or complete and break the stream for everyone else.',
    },
    distractors: [
      {
        es: 'asObservable clona el Subject y entrega un flujo frio nuevo a cada consumidor.',
        en: 'asObservable clones the Subject and gives each consumer a new cold stream.',
      },
      {
        es: 'asObservable completa el Subject cuando el primer consumidor se desuscribe.',
        en: 'asObservable completes the Subject when the first consumer unsubscribes.',
      },
    ],
    explanation: {
      es: 'Oculta la escritura. No cambia si el stream es frio o caliente ni libera a los demas suscriptores.',
      en: 'It hides the write methods. It does not change whether the stream is cold or hot, and it does not free the other subscribers.',
    },
  },
  {
    id: 'fe-rxp-03',
    topic: 'BehaviorSubject',
    prompt: {
      es: '¿Cuándo usas un BehaviorSubject para guardar estado?',
      en: 'When do you use a BehaviorSubject to hold state?',
    },
    answer: {
      es: 'Cuando siempre hay un valor actual, porque exige un valor inicial y se lo entrega al momento a cada suscriptor nuevo.',
      en: 'When there is always a current value, because it requires an initial value and hands it at once to every new subscriber.',
    },
    distractors: [
      {
        es: 'Cuando solo te importa el ultimo evento y no quieres dar un valor inicial.',
        en: 'When you only care about the latest event and you do not want to provide an initial value.',
      },
      {
        es: 'Cuando el estado debe esperar a completarse para entregar un unico resultado, como una Promise.',
        en: 'When the state must wait to complete before delivering a single result, like a Promise.',
      },
    ],
    explanation: {
      es: 'Un Subject normal no guarda nada: quien se suscribe tarde pierde lo ya emitido.',
      en: 'A plain Subject stores nothing: a late subscriber misses what was already emitted.',
    },
  },
  {
    id: 'fe-rxp-04',
    topic: 'Subject',
    prompt: {
      es: '¿Qué recibe un suscriptor que llega tarde a un Subject?',
      en: 'What does a subscriber who arrives late to a Subject receive?',
    },
    answer: {
      es: 'Nada de lo anterior. Solo los next que ocurran despues de suscribirse.',
      en: 'Nothing from the past. Only the next calls that happen after the subscription.',
    },
    distractors: [
      {
        es: 'El ultimo valor, igual que un BehaviorSubject, aunque no haya valor inicial.',
        en: 'The latest value, the same as a BehaviorSubject, even without an initial value.',
      },
      {
        es: 'Todos los valores desde el principio, porque un Subject siempre los recuerda.',
        en: 'Every value from the start, because a Subject always remembers them.',
      },
    ],
    explanation: {
      es: 'Si el que llega tarde debe ver el estado actual, usa BehaviorSubject. Si debe ver varios valores recientes, usa ReplaySubject.',
      en: 'If the late subscriber must see the current state, use a BehaviorSubject. If they must see several recent values, use a ReplaySubject.',
    },
  },
  {
    id: 'fe-rxp-05',
    topic: 'Frio y caliente',
    prompt: {
      es: '¿Cuál es la diferencia entre un Observable frio y uno caliente?',
      en: 'What is the difference between a cold Observable and a hot one?',
    },
    answer: {
      es: 'El frio ejecuta la fuente en cada subscribe, como un http.get. El caliente comparte una ejecucion que ya existe, como los clics de un boton.',
      en: 'A cold one runs the source on every subscribe, like an http.get. A hot one shares an execution that already exists, like button clicks.',
    },
    distractors: [
      {
        es: 'El frio solo emite un valor y el caliente emite varios. No cambia quien dispara el trabajo.',
        en: 'A cold one emits one value and a hot one emits many. It does not change who starts the work.',
      },
      {
        es: 'El caliente espera a subscribe y el frio arranca al crearlo, al reves de una Promise.',
        en: 'A hot one waits for subscribe and a cold one starts when created, the opposite of a Promise.',
      },
    ],
    explanation: {
      es: 'Dos suscriptores de un frio repiten el trabajo. Dos suscriptores de un caliente comparten los mismos eventos.',
      en: 'Two subscribers of a cold Observable repeat the work. Two subscribers of a hot one share the same events.',
    },
  },
  {
    id: 'fe-rxp-06',
    topic: 'Compartir HTTP',
    prompt: {
      es: '¿Cómo evitas que dos componentes disparen dos veces la misma peticion?',
      en: 'How do you stop two components from firing the same request twice?',
    },
    answer: {
      es: 'Compartes el Observable con shareReplay de buffer 1, para que haya una sola llamada y el segundo reciba el ultimo resultado.',
      en: 'You share the Observable with shareReplay of buffer 1, so there is one call and the second subscriber gets the latest result.',
    },
    distractors: [
      {
        es: 'HttpClient ya deduplica solo si la URL coincide, asi que no hace falta ningun operador.',
        en: 'HttpClient already deduplicates on its own when the URL matches, so no operator is needed.',
      },
      {
        es: 'Basta con usar map en lugar de switchMap. Eso une las dos suscripciones.',
        en: 'It is enough to use map instead of switchMap. That joins the two subscriptions.',
      },
    ],
    explanation: {
      es: 'Cada subscribe de un http.get frio crea otra peticion. shareReplay es el arreglo habitual en un servicio.',
      en: 'Each subscribe of a cold http.get creates another request. shareReplay is the usual fix in a service.',
    },
  },
  {
    id: 'fe-rxp-07',
    topic: 'Subscribe anidado',
    prompt: {
      es: '¿Por qué no debes anidar un subscribe dentro de otro?',
      en: 'Why should you not nest one subscribe inside another?',
    },
    answer: {
      es: 'Cada subscribe interno hay que cancelarlo a mano, y se pierde el poder de switchMap o concatMap para ordenar o cancelar.',
      en: 'Each inner subscribe must be cancelled by hand, and you lose the ability of switchMap or concatMap to order or cancel.',
    },
    distractors: [
      {
        es: 'Anidar subscribe es lo mismo que mergeMap: Angular desuscribe los internos al destruir la vista.',
        en: 'Nesting subscribe is the same as mergeMap: Angular unsubscribes the inner ones when the view is destroyed.',
      },
      {
        es: 'Es la forma recomendada, porque await dentro del subscribe externo evita los operadores de aplanado.',
        en: 'It is the recommended form, because await inside the outer subscribe avoids flattening operators.',
      },
    ],
    explanation: {
      es: 'Aplana con switchMap, mergeMap, concatMap o exhaustMap y deja un solo subscribe, o mejor el async pipe.',
      en: 'Flatten with switchMap, mergeMap, concatMap or exhaustMap and keep a single subscribe, or better the async pipe.',
    },
  },
  {
    id: 'fe-rxp-08',
    topic: 'Async pipe',
    prompt: {
      es: '¿Por qué el async pipe suele ser mejor que subscribe en el componente?',
      en: 'Why is the async pipe usually better than subscribe in the component?',
    },
    answer: {
      es: 'Se suscribe en la plantilla y se desuscribe al destruirla. No dejas una Subscription colgando en ngOnDestroy.',
      en: 'It subscribes in the template and unsubscribes when the template is destroyed. You do not leave a Subscription hanging in ngOnDestroy.',
    },
    distractors: [
      {
        es: 'Porque convierte el Observable en un array y asi la vista no depende de RxJS.',
        en: 'Because it turns the Observable into an array and the view no longer depends on RxJS.',
      },
      {
        es: 'Porque bloquea la deteccion de cambios hasta que el Observable completa.',
        en: 'Because it blocks change detection until the Observable completes.',
      },
    ],
    explanation: {
      es: 'Si aun asi te suscribes a mano, guarda la Subscription o usa takeUntilDestroyed.',
      en: 'If you still subscribe by hand, store the Subscription or use takeUntilDestroyed.',
    },
  },
  {
    id: 'fe-rxp-09',
    topic: 'takeUntilDestroyed',
    prompt: {
      es: '¿Cómo se usa takeUntilDestroyed?',
      en: 'How do you use takeUntilDestroyed?',
    },
    answer: {
      es: 'Lo pones en el pipe. Cuando el componente se destruye, completa la suscripcion y corta el trabajo.',
      en: 'You put it in the pipe. When the component is destroyed, it completes the subscription and stops the work.',
    },
    distractors: [
      {
        es: 'Hay que llamarlo dentro de ngOnDestroy. En el pipe no hace nada.',
        en: 'You must call it inside ngOnDestroy. In the pipe it does nothing.',
      },
      {
        es: 'Desuscribe todos los Observables de la aplicacion, no solo el de ese componente.',
        en: 'It unsubscribes every Observable in the application, not only the one in that component.',
      },
    ],
    explanation: {
      es: 'En el constructor puedes usarlo sin argumento. En otro metodo hay que pasarle un DestroyRef.',
      en: 'In the constructor you can use it with no argument. In another method you must pass a DestroyRef.',
    },
  },
  {
    id: 'fe-rxp-10',
    topic: 'Estado derivado',
    prompt: {
      es: '¿Por qué es mejor combinar streams que anidar suscripciones para armar un estado?',
      en: 'Why is it better to combine streams than to nest subscriptions when building state?',
    },
    answer: {
      es: 'combineLatest o withLatestFrom dejan clara la dependencia y concentran la vida de la suscripcion en un solo sitio.',
      en: 'combineLatest or withLatestFrom make the dependency clear and keep the subscription lifetime in one place.',
    },
    distractors: [
      {
        es: 'zip es siempre mejor para la UI porque emite en cuanto cambia cualquiera de las fuentes.',
        en: 'zip is always better for UI because it emits as soon as any source changes.',
      },
      {
        es: 'Anidar subscribe es igual de seguro: Angular limpia el interno al destruir el componente.',
        en: 'Nesting subscribe is just as safe: Angular cleans the inner one when the component is destroyed.',
      },
    ],
    explanation: {
      es: 'Un solo pipe se puede cerrar con async pipe o takeUntilDestroyed. El subscribe interno no se limpia solo.',
      en: 'A single pipe can be closed with the async pipe or takeUntilDestroyed. The inner subscribe is not cleaned up on its own.',
    },
  },
  {
    id: 'fe-rxp-11',
    topic: 'Errores de UI',
    prompt: {
      es: '¿Qué pasa si un error de una peticion llega al stream de un buscador sin catchError?',
      en: 'What happens if a request error reaches a search stream with no catchError?',
    },
    answer: {
      es: 'El stream termina. El buscador deja de reaccionar a nuevas teclas aunque el componente siga en pantalla.',
      en: 'The stream ends. The search box stops reacting to new keys even though the component is still on screen.',
    },
    distractors: [
      {
        es: 'Se salta ese valor y el siguiente texto vuelve a buscar con normalidad.',
        en: 'That value is skipped and the next text searches again as usual.',
      },
      {
        es: 'RxJS reinicia el stream solo en la siguiente tecla.',
        en: 'RxJS restarts the stream on its own on the next key.',
      },
    ],
    explanation: {
      es: 'Captura el error dentro del switchMap y devuelve un Observable de reemplazo, como of([]).',
      en: 'Catch the error inside the switchMap and return a replacement Observable, such as of([]).',
    },
  },
  {
    id: 'fe-rxp-12',
    topic: 'Duenio del Subject',
    prompt: {
      es: '¿Quién debe llamar a next en un Subject de un servicio?',
      en: 'Who should call next on a Subject that lives in a service?',
    },
    answer: {
      es: 'El servicio. Los componentes escuchan el Observable publico y no escriben en el Subject.',
      en: 'The service. Components listen to the public Observable and do not write to the Subject.',
    },
    distractors: [
      {
        es: 'Cualquier componente, porque next es la forma normal de comunicar pantallas.',
        en: 'Any component, because next is the normal way to communicate between screens.',
      },
      {
        es: 'Nadie: un Subject emite solo cuando cambia un input del componente.',
        en: 'Nobody: a Subject emits on its own when a component input changes.',
      },
    ],
    explanation: {
      es: 'Si entregas el Subject crudo, un componente puede completarlo o mandar un error y dejar sordos a los demas.',
      en: 'If you hand out the raw Subject, a component can complete it or send an error and leave everyone else deaf.',
    },
  },
  {
    id: 'fe-rxp-13',
    topic: 'Fuga de memoria',
    prompt: {
      es: '¿Por qué un Subject de un servicio singleton puede filtrar memoria?',
      en: 'Why can a Subject on a singleton service leak memory?',
    },
    answer: {
      es: 'El servicio vive toda la app y el Subject no completa. La suscripcion de un componente destruido sigue anclada si no te desuscribes.',
      en: 'The service lives for the whole app and the Subject does not complete. A destroyed component subscription stays attached if you do not unsubscribe.',
    },
    distractors: [
      {
        es: 'providedIn root completa el Subject al cambiar de ruta, asi que no puede filtrar.',
        en: 'providedIn root completes the Subject on a route change, so it cannot leak.',
      },
      {
        es: 'shareReplay sobre el Subject lo completa al irse el ultimo suscriptor.',
        en: 'shareReplay on the Subject completes it when the last subscriber leaves.',
      },
    ],
    explanation: {
      es: 'Cierra cada escucha con async pipe o takeUntilDestroyed. El servicio no lo hace por ti.',
      en: 'Close each listener with the async pipe or takeUntilDestroyed. The service does not do it for you.',
    },
  },
  {
    id: 'fe-rxp-14',
    topic: 'tap y frio',
    prompt: {
      es: '¿Por qué tap se ejecuta dos veces si dos componentes se suscriben al mismo Observable frio?',
      en: 'Why does tap run twice if two components subscribe to the same cold Observable?',
    },
    answer: {
      es: 'Porque cada subscribe repite toda la cadena, y tap va dentro. Sin share o shareReplay el efecto no se comparte.',
      en: 'Because each subscribe repeats the whole chain, and tap sits inside it. Without share or shareReplay the effect is not shared.',
    },
    distractors: [
      {
        es: 'Porque tap siempre corre dos veces por valor, una al emitir y otra al pintar.',
        en: 'Because tap always runs twice per value, once on emit and once on render.',
      },
      {
        es: 'Porque usaste mergeMap. Con switchMap el tap queda en una sola ejecucion.',
        en: 'Because you used mergeMap. With switchMap the tap stays on a single execution.',
      },
    ],
    explanation: {
      es: 'Un log, un spinner o una analitica dentro de tap ocurren una vez por suscripcion si la fuente es fria.',
      en: 'A log, a spinner or analytics inside tap happen once per subscription when the source is cold.',
    },
  },
  {
    id: 'fe-rxp-15',
    topic: 'Cancelar HTTP',
    prompt: {
      es: '¿Qué pasa con una peticion de HttpClient cuando te desuscribes?',
      en: 'What happens to an HttpClient request when you unsubscribe?',
    },
    answer: {
      es: 'Se aborta la peticion en curso. switchMap, takeUntilDestroyed y el async pipe hacen esa desuscripcion.',
      en: 'The in-flight request is aborted. switchMap, takeUntilDestroyed and the async pipe do that unsubscribe.',
    },
    distractors: [
      {
        es: 'La peticion sigue en la red hasta el timeout. Unsubscribe solo deja de entregar la respuesta.',
        en: 'The request stays on the network until timeout. Unsubscribe only stops delivering the response.',
      },
      {
        es: 'HttpClient no puede cancelar. Hay que llamar a AbortController a mano en cada get.',
        en: 'HttpClient cannot cancel. You must call AbortController by hand on every get.',
      },
    ],
    explanation: {
      es: 'Por eso switchMap en un buscador no solo ignora la respuesta vieja: tambien corta esa llamada.',
      en: 'That is why switchMap in a search box does not only ignore the old response: it also cuts that call.',
    },
  },
  {
    id: 'fe-rxp-16',
    topic: 'Buscador',
    prompt: {
      es: '¿Cómo montas un buscador con RxJS?',
      en: 'How do you build a search box with RxJS?',
    },
    answer: {
      es: 'Escuchas el texto, aplicas debounceTime, ignoras vacios con filter, pides con switchMap y capturas el error dentro de esa peticion.',
      en: 'You listen to the text, apply debounceTime, skip empty text with filter, request with switchMap and catch the error inside that request.',
    },
    distractors: [
      {
        es: 'Usas delay en cada tecla y mergeMap para no perder ninguna busqueda intermedia.',
        en: 'You use delay on every key and mergeMap so you do not lose any intermediate search.',
      },
      {
        es: 'Te suscribes dentro de cada keyup y guardas todas las Subscription en un array sin operadores.',
        en: 'You subscribe inside each keyup and store every Subscription in an array with no operators.',
      },
    ],
    explanation: {
      es: 'debounceTime evita pedir en cada tecla y switchMap descarta la respuesta de un texto que ya no esta en el input.',
      en: 'debounceTime avoids a request on every key and switchMap drops the response for text that is no longer in the input.',
    },
  },
  {
    id: 'fe-rxp-17',
    topic: 'Varias peticiones',
    prompt: {
      es: '¿Qué operador usas si necesitas tres peticiones y seguir solo cuando las tres hayan respondido?',
      en: 'Which operator do you use if you need three requests and should continue only when all three have responded?',
    },
    answer: {
      es: 'forkJoin. Lanza las tres a la vez y emite un unico resultado cuando todas completan.',
      en: 'forkJoin. It fires all three at once and emits one result when every one of them completes.',
    },
    distractors: [
      {
        es: 'concatMap sobre un array, porque tambien espera a las tres antes de emitir nada.',
        en: 'concatMap over an array, because it also waits for all three before emitting anything.',
      },
      {
        es: 'debounceTime(0), porque junta las emisiones del mismo turno en un solo valor.',
        en: 'debounceTime(0), because it groups the emissions of the same turn into one value.',
      },
    ],
    explanation: {
      es: 'Si una falla, falla el conjunto. Captura el error en cada peticion si quieres un resultado parcial.',
      en: 'If one fails, the whole set fails. Catch the error on each request if you want a partial result.',
    },
  },
  {
    id: 'fe-rxp-18',
    topic: 'Un resultado',
    prompt: {
      es: '¿Cómo pasas el primer valor de un Observable a una Promise?',
      en: 'How do you turn the first value of an Observable into a Promise?',
    },
    answer: {
      es: 'Con firstValueFrom. Se queda con la primera emision y la devuelve como Promise.',
      en: 'With firstValueFrom. It keeps the first emission and returns it as a Promise.',
    },
    distractors: [
      {
        es: 'Con toPromise, que es la forma actual recomendada y ademas cancela al hacer unsubscribe.',
        en: 'With toPromise, which is the current recommended form and also cancels on unsubscribe.',
      },
      {
        es: 'Con async pipe dentro del servicio. Devuelve una Promise que la plantilla puede esperar.',
        en: 'With the async pipe inside the service. It returns a Promise the template can await.',
      },
    ],
    explanation: {
      es: 'Al pasar a Promise pierdes la cancelacion facil del Observable. Si la pantalla puede irse, suele ser mejor quedarte en el stream.',
      en: 'Turning it into a Promise loses the easy cancellation of the Observable. If the screen can go away, it is usually better to stay on the stream.',
    },
  },
  {
    id: 'fe-rxp-19',
    topic: 'ReplaySubject',
    prompt: {
      es: '¿Qué hace un ReplaySubject?',
      en: 'What does a ReplaySubject do?',
    },
    answer: {
      es: 'Guarda una cantidad de valores y se los entrega a quien se suscribe tarde, y luego sigue emitiendo los nuevos.',
      en: 'It stores a number of values and hands them to a late subscriber, then keeps emitting the new ones.',
    },
    distractors: [
      {
        es: 'Solo entrega el valor cuando el Subject completa, igual que una Promise.',
        en: 'It delivers the value only when the Subject completes, the same as a Promise.',
      },
      {
        es: 'Exige un valor inicial y falla si llamas a next antes de que alguien se suscriba.',
        en: 'It requires an initial value and throws if you call next before anyone subscribes.',
      },
    ],
    explanation: {
      es: 'ReplaySubject(1) se parece a un BehaviorSubject, pero no obliga a tener un valor desde el principio.',
      en: 'ReplaySubject(1) looks like a BehaviorSubject, but it does not force a value from the start.',
    },
  },
  {
    id: 'fe-rxp-20',
    topic: 'Prueba simple',
    prompt: {
      es: '¿Cómo compruebas en un test que un stream emitio un valor, sin diagramas de tiempo?',
      en: 'How do you check in a test that a stream emitted a value, without time diagrams?',
    },
    answer: {
      es: 'Te suscribes, guardas los valores en un array y afirmas ese array. Si hay tiempo de debounce, avanzas el reloj de prueba con tick dentro de fakeAsync.',
      en: 'You subscribe, store the values in an array and assert that array. If there is a debounce time, you move the test clock with tick inside fakeAsync.',
    },
    distractors: [
      {
        es: 'Hay que describir el stream con una cadena de guiones y letras. Sin eso el test no puede ver emisiones.',
        en: 'You must describe the stream with a string of dashes and letters. Without that the test cannot see emissions.',
      },
      {
        es: 'fakeAsync no mueve debounceTime, asi que el unico camino es esperar el tiempo real con done.',
        en: 'fakeAsync does not move debounceTime, so the only path is to wait real time with done.',
      },
    ],
    explanation: {
      es: 'Para HTTP de Angular no hace falta tiempo: respondes la peticion con HttpTestingController y flush.',
      en: 'For Angular HTTP you do not need time: you answer the request with HttpTestingController and flush.',
    },
  },
];
