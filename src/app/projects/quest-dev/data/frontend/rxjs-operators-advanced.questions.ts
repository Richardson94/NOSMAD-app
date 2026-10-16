import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_RXJS_OPERATORS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-rxop-01',
    topic: 'exhaustMap',
    prompt: {
      es: '¿Qué operador usas si un boton Guardar no debe lanzar otra peticion mientras la primera sigue en curso?',
      en: 'Which operator do you use if a Save button must not fire another request while the first one is still running?',
    },
    answer: {
      es: 'exhaustMap. Ignora los clics nuevos hasta que la peticion actual termina.',
      en: 'exhaustMap. It ignores new clicks until the current request finishes.',
    },
    distractors: [
      {
        es: 'switchMap, porque cancela el guardado anterior y envia solo el ultimo clic.',
        en: 'switchMap, because it cancels the previous save and sends only the last click.',
      },
      {
        es: 'debounceTime, porque espera un segundo fijo y eso equivale a esperar al servidor.',
        en: 'debounceTime, because it waits a fixed second and that is the same as waiting for the server.',
      },
    ],
    explanation: {
      es: 'Cancelar un guardado ya enviado es peor. exhaustMap se apoya en lo que tarde de verdad la peticion.',
      en: 'Cancelling a save that already left is worse. exhaustMap follows how long the request really takes.',
    },
  },
  {
    id: 'fe-rxop-02',
    topic: 'concatMap',
    prompt: {
      es: '¿Cómo envias ediciones al servidor en el mismo orden en que las hizo el usuario?',
      en: 'How do you send edits to the server in the same order the user made them?',
    },
    answer: {
      es: 'Con concatMap. No se suscribe a la siguiente peticion hasta que la anterior completa.',
      en: 'With concatMap. It does not subscribe to the next request until the previous one completes.',
    },
    distractors: [
      {
        es: 'Con mergeMap, porque al suscribirse en orden las respuestas vuelven en ese mismo orden.',
        en: 'With mergeMap, because subscribing in order makes the responses come back in that same order.',
      },
      {
        es: 'Con forkJoin, porque agrupa el arreglo y el servidor aplica las ediciones en serie.',
        en: 'With forkJoin, because it groups the array and the server applies the edits in series.',
      },
    ],
    explanation: {
      es: 'mergeMap lanza en paralelo y la segunda respuesta puede llegar antes. concatMap deja como mucho una en vuelo.',
      en: 'mergeMap fires in parallel and the second response can arrive first. concatMap keeps at most one in flight.',
    },
  },
  {
    id: 'fe-rxop-03',
    topic: 'mergeMap',
    prompt: {
      es: '¿Qué hace mergeMap y que significa el numero en mergeMap(fn, 2)?',
      en: 'What does mergeMap do and what does the number in mergeMap(fn, 2) mean?',
    },
    answer: {
      es: 'Se suscribe a cada Observable interno sin cancelar los anteriores. El 2 limita a dos tareas activas y el resto espera.',
      en: 'It subscribes to each inner Observable without cancelling the previous ones. The 2 limits active tasks to two and the rest wait.',
    },
    distractors: [
      {
        es: 'Reintenta cada peticion dos veces antes de propagar el error.',
        en: 'It retries each request twice before passing the error on.',
      },
      {
        es: 'Agrupa las emisiones de dos en dos y luego llama a la funcion.',
        en: 'It groups emissions two by two and then calls the function.',
      },
    ],
    explanation: {
      es: 'Sirve para no saturar un API. mergeMap con limite 1 se comporta como concatMap.',
      en: 'It is useful so you do not flood an API. mergeMap with a limit of 1 behaves like concatMap.',
    },
  },
  {
    id: 'fe-rxop-04',
    topic: 'switchMap',
    prompt: {
      es: '¿Por qué un buscador suele usar switchMap para la peticion?',
      en: 'Why does a search box usually use switchMap for the request?',
    },
    answer: {
      es: 'Porque al llegar un texto nuevo cancela la peticion anterior y solo pinta el resultado de la ultima busqueda.',
      en: 'Because a new text cancels the previous request and only the latest search result is shown.',
    },
    distractors: [
      {
        es: 'Porque encola todas las busquedas y las muestra en el orden en que se escribieron.',
        en: 'Because it queues every search and shows them in the order they were typed.',
      },
      {
        es: 'Porque ignora las teclas nuevas hasta que la peticion actual responde.',
        en: 'Because it ignores new keys until the current request responds.',
      },
    ],
    explanation: {
      es: 'Si usaras mergeMap, una respuesta lenta de un texto viejo podria pisar la busqueda actual.',
      en: 'If you used mergeMap, a slow response for old text could overwrite the current search.',
    },
  },
  {
    id: 'fe-rxop-05',
    topic: 'map y aplanado',
    prompt: {
      es: '¿Qué pasa si usas map para devolver un http.get en lugar de switchMap?',
      en: 'What happens if you use map to return an http.get instead of switchMap?',
    },
    answer: {
      es: 'El stream emite Observables, no los datos de la respuesta. Nadie se suscribe a esa peticion interna.',
      en: 'The stream emits Observables, not the response data. Nobody subscribes to that inner request.',
    },
    distractors: [
      {
        es: 'map detecta el Observable y lo aplana solo, igual que switchMap.',
        en: 'map detects the Observable and flattens it on its own, the same as switchMap.',
      },
      {
        es: 'La peticion sale, pero el error de HTTP se traga y el stream sigue en silencio.',
        en: 'The request goes out, but the HTTP error is swallowed and the stream stays silent.',
      },
    ],
    explanation: {
      es: 'Los operadores que se suscriben al interno son switchMap, mergeMap, concatMap y exhaustMap.',
      en: 'The operators that subscribe to the inner Observable are switchMap, mergeMap, concatMap and exhaustMap.',
    },
  },
  {
    id: 'fe-rxop-06',
    topic: 'Tiempo',
    prompt: {
      es: '¿Cuál es la diferencia entre debounceTime y throttleTime?',
      en: 'What is the difference between debounceTime and throttleTime?',
    },
    answer: {
      es: 'debounceTime espera a que haya silencio y emite el ultimo valor. throttleTime emite uno y luego ignora el resto durante la ventana.',
      en: 'debounceTime waits for silence and emits the latest value. throttleTime emits one and then ignores the rest during the window.',
    },
    distractors: [
      {
        es: 'debounceTime encola los valores y throttleTime los descarta todos, incluido el primero.',
        en: 'debounceTime queues the values and throttleTime drops all of them, including the first.',
      },
      {
        es: 'Son iguales: ambos retrasan cada valor un tiempo fijo, como delay.',
        en: 'They are the same: both delay every value by a fixed time, like delay.',
      },
    ],
    explanation: {
      es: 'debounceTime encaja al escribir. throttleTime encaja en scroll o en clics repetidos.',
      en: 'debounceTime fits typing. throttleTime fits scroll or repeated clicks.',
    },
  },
  {
    id: 'fe-rxop-07',
    topic: 'withLatestFrom',
    prompt: {
      es: '¿Cómo adjuntas el valor actual de un stream de opciones al pulsar Enviar, sin que un cambio de opciones dispare el envio?',
      en: 'How do you attach the current value of an options stream when Submit is pressed, without an options change firing the submit?',
    },
    answer: {
      es: 'Con withLatestFrom. Solo emite cuando emite la fuente principal y anade el ultimo valor de la otra.',
      en: 'With withLatestFrom. It emits only when the main source emits and adds the latest value from the other one.',
    },
    distractors: [
      {
        es: 'Con combineLatest, porque la fuente del boton manda y la de opciones no puede disparar.',
        en: 'With combineLatest, because the button source is in charge and the options source cannot fire.',
      },
      {
        es: 'Con forkJoin, porque espera a las dos y emite una sola vez al pulsar.',
        en: 'With forkJoin, because it waits for both and emits once when you press.',
      },
    ],
    explanation: {
      es: 'combineLatest tambien emite cuando cambian las opciones. withLatestFrom no lo hace.',
      en: 'combineLatest also emits when the options change. withLatestFrom does not.',
    },
  },
  {
    id: 'fe-rxop-08',
    topic: 'scan y reduce',
    prompt: {
      es: '¿Cuál es la diferencia entre scan y reduce?',
      en: 'What is the difference between scan and reduce?',
    },
    answer: {
      es: 'scan emite el acumulado en cada paso. reduce emite un solo valor y solo cuando la fuente termina.',
      en: 'scan emits the running total on every step. reduce emits one value and only when the source completes.',
    },
    distractors: [
      {
        es: 'reduce emite en cada paso y scan solo al completar, igual que en los arrays.',
        en: 'reduce emits on every step and scan only on completion, the same as with arrays.',
      },
      {
        es: 'scan solo suma numeros y reduce sirve para cualquier tipo de estado.',
        en: 'scan only adds numbers and reduce works for any kind of state.',
      },
    ],
    explanation: {
      es: 'Para un carrito que la vista debe ver al momento usa scan. reduce en un stream que no termina no emite nunca.',
      en: 'For a cart the view must see immediately, use scan. reduce on a stream that never completes never emits.',
    },
  },
  {
    id: 'fe-rxop-09',
    topic: 'distinctUntilChanged',
    prompt: {
      es: '¿Qué hace distinctUntilChanged y por que a veces no filtra objetos iguales?',
      en: 'What does distinctUntilChanged do and why does it sometimes fail to filter equal objects?',
    },
    answer: {
      es: 'Deja pasar un valor solo si es distinto del anterior. Con objetos compara la referencia, asi que dos objetos con los mismos datos cuentan como distintos.',
      en: 'It lets a value through only when it differs from the previous one. For objects it compares the reference, so two objects with the same data count as different.',
    },
    distractors: [
      {
        es: 'Compara el contenido del objeto campo a campo, asi que los datos iguales siempre se filtran.',
        en: 'It compares the object contents field by field, so equal data is always filtered.',
      },
      {
        es: 'Solo funciona con strings. Con objetos hay que usar filter a mano y no acepta comparador.',
        en: 'It only works with strings. For objects you must use filter by hand and it does not accept a comparator.',
      },
    ],
    explanation: {
      es: 'Pasa un comparador propio o usa distinctUntilKeyChanged con el id.',
      en: 'Pass your own comparator or use distinctUntilKeyChanged with the id.',
    },
  },
  {
    id: 'fe-rxop-10',
    topic: 'catchError',
    prompt: {
      es: '¿Dónde pones catchError en un buscador con switchMap para que un fallo no mate el stream?',
      en: 'In a search box with switchMap, where do you put catchError so a failure does not kill the stream?',
    },
    answer: {
      es: 'Dentro del switchMap, sobre la peticion. Asi el error se queda en esa llamada y el stream de teclas sigue vivo.',
      en: 'Inside the switchMap, on the request. The error stays on that call and the key stream stays alive.',
    },
    distractors: [
      {
        es: 'Da igual el sitio: catchError siempre reanuda la fuente externa despues del fallo.',
        en: 'The place does not matter: catchError always resumes the outer source after the failure.',
      },
      {
        es: 'Fuera es mas seguro, porque captura el error interno y vuelve a suscribir el buscador.',
        en: 'Outside is safer, because it catches the inner error and subscribes to the search box again.',
      },
    ],
    explanation: {
      es: 'Un error fuera del switchMap termina toda la cadena. catchError debe devolver otro Observable, por ejemplo of([]) o EMPTY.',
      en: 'An error outside the switchMap ends the whole chain. catchError must return another Observable, for example of([]) or EMPTY.',
    },
  },
  {
    id: 'fe-rxop-11',
    topic: 'finalize',
    prompt: {
      es: '¿Cuándo se ejecuta la funcion que pasas a finalize?',
      en: 'When does the function you pass to finalize run?',
    },
    answer: {
      es: 'Al completar, al fallar y tambien al desuscribirte. Sirve para apagar un spinner en cualquiera de esos finales.',
      en: 'On complete, on error and also when you unsubscribe. It is used to hide a spinner on any of those endings.',
    },
    distractors: [
      {
        es: 'Solo al completar. Un error hay que atenderlo en catchError y la desuscripcion no llega a finalize.',
        en: 'Only on complete. An error must be handled in catchError and an unsubscribe never reaches finalize.',
      },
      {
        es: 'En cada next, igual que tap, y ademas transforma el valor.',
        en: 'On every next, the same as tap, and it also transforms the value.',
      },
    ],
    explanation: {
      es: 'tap con complete o error no corre si te desuscribes antes. finalize si cubre esa cancelacion.',
      en: 'tap on complete or error does not run if you unsubscribe first. finalize does cover that cancellation.',
    },
  },
  {
    id: 'fe-rxop-12',
    topic: 'forkJoin',
    prompt: {
      es: '¿Cuándo usas forkJoin?',
      en: 'When do you use forkJoin?',
    },
    answer: {
      es: 'Cuando lanzas varias peticiones a la vez y quieres seguir solo cuando todas hayan terminado, con el ultimo valor de cada una.',
      en: 'When you fire several requests at once and want to continue only when all of them have finished, with the last value of each.',
    },
    distractors: [
      {
        es: 'Cuando quieres un valor nuevo cada vez que cualquiera de las fuentes emite.',
        en: 'When you want a new value every time any of the sources emits.',
      },
      {
        es: 'Cuando las peticiones deben ir en serie y cada una espera a la anterior.',
        en: 'When the requests must run in series and each one waits for the previous one.',
      },
    ],
    explanation: {
      es: 'Es el parecido de Promise.all para Observables que completan, como HTTP. Si una falla, forkJoin falla.',
      en: 'It is the Observable cousin of Promise.all for streams that complete, such as HTTP. If one fails, forkJoin fails.',
    },
  },
  {
    id: 'fe-rxop-13',
    topic: 'combineLatest',
    prompt: {
      es: '¿Cómo funciona combineLatest?',
      en: 'How does combineLatest work?',
    },
    answer: {
      es: 'No emite hasta que cada fuente haya emitido al menos una vez. Despues emite de nuevo cada vez que cualquiera cambia, con el ultimo valor de todas.',
      en: 'It does not emit until every source has emitted at least once. After that it emits again whenever any of them changes, with the latest value of all of them.',
    },
    distractors: [
      {
        es: 'Emite enseguida y pone undefined en la fuente que todavia no tiene valor.',
        en: 'It emits right away and puts undefined in the source that has no value yet.',
      },
      {
        es: 'Espera a que todas completen y emite un unico resultado, como forkJoin.',
        en: 'It waits until all of them complete and emits a single result, like forkJoin.',
      },
    ],
    explanation: {
      es: 'Si una fuente no emite nunca, la combinacion se queda muda. Un startWith con el valor inicial la desbloquea.',
      en: 'If one source never emits, the combination stays silent. A startWith with the initial value unblocks it.',
    },
  },
  {
    id: 'fe-rxop-14',
    topic: 'startWith',
    prompt: {
      es: '¿Para qué sirve startWith?',
      en: 'What is startWith for?',
    },
    answer: {
      es: 'Emite un valor al suscribirte, antes de lo que produzca la fuente. Sirve para tener un estado inicial en la vista.',
      en: 'It emits a value when you subscribe, before whatever the source produces. It is used to give the view an initial state.',
    },
    distractors: [
      {
        es: 'Sustituye el valor solo si la fuente termina sin haber emitido nada.',
        en: 'It replaces the value only if the source completes without ever emitting.',
      },
      {
        es: 'Retrasa la primera emision hasta que pasa el tiempo que le indiques.',
        en: 'It delays the first emission until the time you pass has gone by.',
      },
    ],
    explanation: {
      es: 'No es defaultIfEmpty. Ese solo actua si la fuente completa vacia. startWith sale ya, aunque la fuente siga viva.',
      en: 'It is not defaultIfEmpty. That one acts only if the source completes empty. startWith fires immediately, even if the source stays alive.',
    },
  },
  {
    id: 'fe-rxop-15',
    topic: 'retry',
    prompt: {
      es: '¿Cómo se usa retry cuando una peticion falla?',
      en: 'How do you use retry when a request fails?',
    },
    answer: {
      es: 'retry se vuelve a suscribir a la fuente cuando hay un error. Con retry(3) lo intenta hasta tres veces mas.',
      en: 'retry subscribes to the source again when there is an error. With retry(3) it tries up to three more times.',
    },
    distractors: [
      {
        es: 'retry se suscribe de nuevo cuando la peticion completa bien, para refrescar los datos.',
        en: 'retry subscribes again when the request completes successfully, in order to refresh the data.',
      },
      {
        es: 'Poner delay delante de retry espera entre intentos. retry solo no puede espaciarlos.',
        en: 'Putting delay before retry waits between attempts. retry alone cannot space them out.',
      },
    ],
    explanation: {
      es: 'Repetir tras un complete es repeat, no retry. Para esperar entre fallos, retry acepta un delay en su configuracion.',
      en: 'Repeating after a complete is repeat, not retry. To wait between failures, retry accepts a delay in its config.',
    },
  },
  {
    id: 'fe-rxop-16',
    topic: 'filter',
    prompt: {
      es: '¿Qué hace filter y en que se diferencia de map?',
      en: 'What does filter do and how is it different from map?',
    },
    answer: {
      es: 'filter deja pasar solo los valores que cumplen la condicion y no los transforma. map cambia cada valor y no descarta emisiones.',
      en: 'filter lets through only the values that match the condition and does not transform them. map changes every value and does not drop emissions.',
    },
    distractors: [
      {
        es: 'filter transforma el valor a boolean y map decide si el stream debe completar.',
        en: 'filter transforms the value to a boolean and map decides whether the stream should complete.',
      },
      {
        es: 'filter cierra el stream en el primer valor que no cumple. map lo deja abierto.',
        en: 'filter closes the stream on the first value that does not match. map leaves it open.',
      },
    ],
    explanation: {
      es: 'Cerrar al dejar de cumplirse la condicion es takeWhile, no filter. filter sigue escuchando.',
      en: 'Closing when the condition stops matching is takeWhile, not filter. filter keeps listening.',
    },
  },
  {
    id: 'fe-rxop-17',
    topic: 'tap',
    prompt: {
      es: '¿Para qué se usa tap?',
      en: 'What is tap used for?',
    },
    answer: {
      es: 'Para un efecto secundario, como un log, sin cambiar el valor que sigue por el pipe.',
      en: 'For a side effect, such as a log, without changing the value that continues down the pipe.',
    },
    distractors: [
      {
        es: 'Para transformar el valor y devolver un Observable nuevo, igual que map.',
        en: 'To transform the value and return a new Observable, the same as map.',
      },
      {
        es: 'Para compartir la ejecucion entre varios suscriptores, igual que share.',
        en: 'To share the execution among several subscribers, the same as share.',
      },
    ],
    explanation: {
      es: 'Si tap devuelve algo, ese retorno se ignora. El valor que circula es el mismo que entro.',
      en: 'If tap returns something, that return is ignored. The value that flows on is the same one that came in.',
    },
  },
  {
    id: 'fe-rxop-18',
    topic: 'takeUntil',
    prompt: {
      es: '¿Cómo se usa takeUntil para dejar de escuchar?',
      en: 'How do you use takeUntil to stop listening?',
    },
    answer: {
      es: 'El stream principal se completa y se desuscribe cuando el Observable notificador emite. En Angular, takeUntilDestroyed hace ese papel al destruir el componente.',
      en: 'The main stream completes and unsubscribes when the notifier Observable emits. In Angular, takeUntilDestroyed plays that role when the component is destroyed.',
    },
    distractors: [
      {
        es: 'takeUntil pausa el stream y lo reanuda cuando el notificador completa.',
        en: 'takeUntil pauses the stream and resumes it when the notifier completes.',
      },
      {
        es: 'Basta con poner takeUntil(this.destroy$) despues de destruir la vista. El orden en el pipe no importa.',
        en: 'It is enough to put takeUntil(this.destroy$) after the view is destroyed. The order in the pipe does not matter.',
      },
    ],
    explanation: {
      es: 'Colocalo al final del pipe, salvo que quieras que un operador posterior siga vivo. Si el notificador no emite, no corta nada.',
      en: 'Put it at the end of the pipe, unless you want a later operator to stay alive. If the notifier never emits, nothing is cut.',
    },
  },
  {
    id: 'fe-rxop-19',
    topic: 'shareReplay',
    prompt: {
      es: '¿Para qué sirve shareReplay en una peticion HTTP?',
      en: 'What is shareReplay for on an HTTP request?',
    },
    answer: {
      es: 'Varios suscriptores comparten una sola ejecucion y el que llega tarde recibe el ultimo valor guardado.',
      en: 'Several subscribers share a single execution and a late one receives the last stored value.',
    },
    distractors: [
      {
        es: 'Convierte la peticion en fria, de modo que cada componente dispara su propio GET.',
        en: 'It turns the request cold, so each component fires its own GET.',
      },
      {
        es: 'Reintenta la peticion si falla y guarda solo las respuestas con error.',
        en: 'It retries the request if it fails and stores only the error responses.',
      },
    ],
    explanation: {
      es: 'Sin share ni shareReplay, cada subscribe de un Observable frio repite el trabajo.',
      en: 'Without share or shareReplay, each subscribe of a cold Observable repeats the work.',
    },
  },
  {
    id: 'fe-rxop-20',
    topic: 'delay',
    prompt: {
      es: '¿Qué hace delay y que no hace?',
      en: 'What does delay do and what does it not do?',
    },
    answer: {
      es: 'Retrasa cada emision un tiempo. No reintenta errores ni cancela la peticion anterior.',
      en: 'It postpones each emission by a time. It does not retry errors or cancel the previous request.',
    },
    distractors: [
      {
        es: 'Espera silencio como debounceTime y luego emite solo el ultimo valor.',
        en: 'It waits for silence like debounceTime and then emits only the latest value.',
      },
      {
        es: 'Retrasa tambien el error, asi que catchError no lo ve hasta que pasa el tiempo.',
        en: 'It also delays the error, so catchError does not see it until the time has passed.',
      },
    ],
    explanation: {
      es: 'Para un buscador quieres debounceTime, no delay. El error de delay se propaga al momento, sin esperar.',
      en: 'For a search box you want debounceTime, not delay. An error from delay is passed on at once, without waiting.',
    },
  },
];
