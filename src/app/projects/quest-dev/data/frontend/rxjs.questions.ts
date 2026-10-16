import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_RXJS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-rx-01',
    topic: 'Observable y Promise',
    prompt: {
      es: '¿Cuál es la diferencia entre un Observable y una Promise?',
      en: 'What is the difference between an Observable and a Promise?',
    },
    answer: {
      es: 'Una Promise entrega un solo valor y empieza al crearla. Un Observable puede emitir varios y no hace trabajo hasta que alguien se suscribe.',
      en: 'A Promise delivers one value and starts when you create it. An Observable can emit many values and does no work until someone subscribes.',
    },
    distractors: [
      {
        es: 'Son lo mismo: Observable es solo el nombre que Angular usa para una Promise.',
        en: 'They are the same: Observable is only the name Angular uses for a Promise.',
      },
      {
        es: 'El Observable arranca al crearlo y la Promise espera a que llames a subscribe.',
        en: 'The Observable starts when you create it and the Promise waits until you call subscribe.',
      },
    ],
    explanation: {
      es: 'Por eso puedes cortar un Observable al desuscribirte, y una Promise sigue hasta terminar.',
      en: 'That is why you can stop an Observable by unsubscribing, while a Promise runs until it finishes.',
    },
  },
  {
    id: 'fe-rx-02',
    topic: 'Subscribe',
    prompt: {
      es: '¿Qué hace subscribe en un Observable?',
      en: 'What does subscribe do on an Observable?',
    },
    answer: {
      es: 'Pone en marcha el Observable y te avisa de cada valor, del error o del cierre. Sin esa llamada, un http.get no llega a salir.',
      en: 'It starts the Observable and tells you about each value, the error or the completion. Without that call, an http.get never leaves.',
    },
    distractors: [
      {
        es: 'Solo lee el ultimo valor que ya se emitio, sin volver a ejecutar la fuente.',
        en: 'It only reads the last value that was already emitted, without running the source again.',
      },
      {
        es: 'Convierte el Observable en una Promise y espera a que todas las emisiones terminen.',
        en: 'It turns the Observable into a Promise and waits until every emission finishes.',
      },
    ],
    explanation: {
      es: 'En una plantilla suele bastar el async pipe, que llama a subscribe y a unsubscribe por ti.',
      en: 'In a template the async pipe is usually enough, because it calls subscribe and unsubscribe for you.',
    },
  },
  {
    id: 'fe-rx-03',
    topic: 'Async pipe',
    prompt: {
      es: '¿Cómo se usa el async pipe y que problema evita?',
      en: 'How do you use the async pipe and what problem does it avoid?',
    },
    answer: {
      es: 'En la plantilla escribes observable | async. Se suscribe, pinta el ultimo valor y se desuscribe al destruir la vista.',
      en: 'In the template you write observable | async. It subscribes, shows the latest value and unsubscribes when the view is destroyed.',
    },
    distractors: [
      {
        es: 'Solo da formato a fechas y numeros. La suscripcion la sigues haciendo en el componente.',
        en: 'It only formats dates and numbers. You still subscribe yourself in the component.',
      },
      {
        es: 'Mantiene la suscripcion viva despues de destruir el componente para no perder el ultimo dato.',
        en: 'It keeps the subscription alive after the component is destroyed so the latest data is not lost.',
      },
    ],
    explanation: {
      es: 'Asi no guardas la Subscription ni llamas a unsubscribe en ngOnDestroy.',
      en: 'That way you do not store the Subscription or call unsubscribe in ngOnDestroy.',
    },
  },
  {
    id: 'fe-rx-04',
    topic: 'Operador map',
    prompt: {
      es: '¿Para qué sirve map y en que se diferencia de switchMap?',
      en: 'What is map for and how is it different from switchMap?',
    },
    answer: {
      es: 'map cambia cada valor por otro, como el map de un array. switchMap ademas se suscribe a un Observable interno, por ejemplo una peticion.',
      en: 'map turns each value into another one, like array map. switchMap also subscribes to an inner Observable, for example a request.',
    },
    distractors: [
      {
        es: 'map cancela la peticion anterior y switchMap solo transforma el valor sin llamar a HTTP.',
        en: 'map cancels the previous request and switchMap only transforms the value without calling HTTP.',
      },
      {
        es: 'Son alias: map es el nombre corto de switchMap en RxJS reciente.',
        en: 'They are aliases: map is the short name of switchMap in recent RxJS.',
      },
    ],
    explanation: {
      es: 'Si map devuelve un Observable, el stream emite Observables anidados. Para aplanar hace falta switchMap, mergeMap o concatMap.',
      en: 'If map returns an Observable, the stream emits nested Observables. Flattening needs switchMap, mergeMap or concatMap.',
    },
  },
  {
    id: 'fe-rx-05',
    topic: 'Aplanado',
    prompt: {
      es: '¿Cuál es la diferencia entre switchMap, mergeMap y concatMap?',
      en: 'What is the difference between switchMap, mergeMap and concatMap?',
    },
    answer: {
      es: 'switchMap se queda con la ultima tarea y cancela la anterior. mergeMap deja varias a la vez. concatMap espera a que una termine antes de lanzar la siguiente.',
      en: 'switchMap keeps the latest task and cancels the previous one. mergeMap lets several run at once. concatMap waits for one to finish before starting the next.',
    },
    distractors: [
      {
        es: 'switchMap encola, mergeMap cancela y concatMap lanza todo en paralelo sin orden.',
        en: 'switchMap queues, mergeMap cancels and concatMap fires everything in parallel with no order.',
      },
      {
        es: 'Los tres hacen lo mismo. Solo cambia el nombre segun la version de RxJS.',
        en: 'All three do the same thing. Only the name changes with the RxJS version.',
      },
    ],
    explanation: {
      es: 'En un buscador usa switchMap. Para guardar cambios en orden usa concatMap. mergeMap vale cuando el orden de las respuestas no importa.',
      en: 'Use switchMap for a search box. Use concatMap to save edits in order. mergeMap is fine when response order does not matter.',
    },
  },
  {
    id: 'fe-rx-06',
    topic: 'debounceTime',
    prompt: {
      es: '¿Cómo funciona debounceTime?',
      en: 'How does debounceTime work?',
    },
    answer: {
      es: 'Espera un silencio y entonces deja pasar el ultimo valor. Cada emision nueva reinicia esa espera.',
      en: 'It waits for a quiet period and then lets the latest value through. Every new emission restarts that wait.',
    },
    distractors: [
      {
        es: 'Deja pasar el primer valor y luego ignora el resto durante una ventana fija.',
        en: 'It lets the first value through and then ignores the rest for a fixed window.',
      },
      {
        es: 'Guarda todos los valores y los suelta juntos cuando se cumple el tiempo.',
        en: 'It stores every value and releases them together when the time is up.',
      },
    ],
    explanation: {
      es: 'Por eso encaja en un buscador: no pides al servidor en cada tecla, solo cuando la persona deja de escribir.',
      en: 'That is why it fits a search box: you do not call the server on every key, only when the person stops typing.',
    },
  },
  {
    id: 'fe-rx-07',
    topic: 'Desuscripcion',
    prompt: {
      es: '¿Por qué hay que desuscribirse de un Observable?',
      en: 'Why do you need to unsubscribe from an Observable?',
    },
    answer: {
      es: 'Si la suscripcion sigue viva al destruir la vista, el callback puede retener el componente y seguir trabajando. Eso es una fuga de memoria.',
      en: 'If the subscription stays alive after the view is destroyed, the callback can keep the component and keep doing work. That is a memory leak.',
    },
    distractors: [
      {
        es: 'Angular desuscribe solo todos los Observables al cambiar de ruta, asi que no hace falta.',
        en: 'Angular unsubscribes every Observable on its own when the route changes, so you do not need to.',
      },
      {
        es: 'Desuscribirse solo sirve para Promises. Un Observable se cierra solo al terminar el componente.',
        en: 'Unsubscribing only matters for Promises. An Observable closes itself when the component ends.',
      },
    ],
    explanation: {
      es: 'El async pipe o takeUntilDestroyed lo hacen por ti. Una peticion de HttpClient si se aborta al desuscribirte.',
      en: 'The async pipe or takeUntilDestroyed does it for you. An HttpClient request is aborted when you unsubscribe.',
    },
  },
  {
    id: 'fe-rx-08',
    topic: 'Observable frio',
    prompt: {
      es: '¿Qué pasa si dos sitios se suscriben al mismo observable de http.get?',
      en: 'What happens if two places subscribe to the same http.get observable?',
    },
    answer: {
      es: 'Salen dos peticiones. Es un Observable frio: cada subscribe vuelve a ejecutar la fuente.',
      en: 'Two requests go out. It is a cold Observable: each subscribe runs the source again.',
    },
    distractors: [
      {
        es: 'HttpClient reutiliza la peticion en curso y ambos reciben la misma respuesta.',
        en: 'HttpClient reuses the in-flight request and both receive the same response.',
      },
      {
        es: 'Solo sale una peticion y el segundo no recibe nada porque el stream ya termino.',
        en: 'Only one request goes out and the second subscriber gets nothing because the stream already finished.',
      },
    ],
    explanation: {
      es: 'Si quieres compartir esa llamada, encadena shareReplay con un buffer de 1.',
      en: 'If you want to share that call, chain shareReplay with a buffer of 1.',
    },
  },
];
