import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_ANGULAR_SIGNALS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-sig-01',
    topic: 'Signals',
    prompt: {
      es: '¿Qué son las signals y cómo se usan?',
      en: 'What are Signals and how are they used?',
    },
    answer: {
      es: 'Una signal guarda un valor y avisa a quien lo lee cuando cambia. En la clase se crea con signal, se lee llamandola y en la plantilla se invoca igual.',
      en: 'A signal holds a value and notifies whoever reads it when it changes. In the class you create it with signal, you read it by calling it and the template calls it the same way.',
    },
    distractors: [
      {
        es: 'Son un reemplazo de HttpClient. Cada signal hace una peticion y guarda la respuesta sola.',
        en: 'They are a replacement for HttpClient. Each signal makes a request and stores the response by itself.',
      },
      {
        es: 'Son observables con otro nombre. Hay que suscribirse y desuscribirse igual que con RxJS.',
        en: 'They are observables under another name. You subscribe and unsubscribe the same way as with RxJS.',
      },
    ],
    explanation: {
      es: 'El estado sincronico va en signals y lo derivado en computed. Lo asincrono, como una peticion con cancelacion, sigue siendo de RxJS y se puentea con toSignal.',
      en: 'Synchronous state goes in signals and derived values go in computed. Async work, such as a request you can cancel, stays in RxJS and is bridged with toSignal.',
    },
  },
  {
    id: 'fe-sig-02',
    topic: 'Escritura',
    prompt: {
      es: '¿Qué diferencia hay entre set y update en una signal?',
      en: 'What is the difference between set and update on a signal?',
    },
    answer: {
      es: 'set sustituye el valor por el que le pasas. update recibe una funcion que calcula el nuevo valor a partir del actual.',
      en: 'set replaces the value with the one you pass. update receives a function that computes the new value from the current one.',
    },
    distractors: [
      {
        es: 'set notifica y update muta el valor por dentro sin avisar a la vista.',
        en: 'set notifies and update mutates the value in place without telling the view.',
      },
      {
        es: 'update espera al siguiente ciclo de deteccion y set pinta el DOM al momento.',
        en: 'update waits for the next change detection cycle and set paints the DOM immediately.',
      },
    ],
    explanation: {
      es: 'Los dos escriben un valor nuevo y notifican igual. update es lo comodo para un contador o para copiar un objeto con un campo cambiado.',
      en: 'Both write a new value and notify the same way. update is the handy form for a counter or for copying an object with one field changed.',
    },
  },
  {
    id: 'fe-sig-03',
    topic: 'computed',
    prompt: {
      es: '¿Para qué sirve computed?',
      en: 'What is computed for?',
    },
    answer: {
      es: 'Para un valor que sale de otras signals. Lo memoriza y solo lo vuelve a calcular cuando cambia alguna dependencia, y al leerlo.',
      en: 'For a value that comes from other signals. It memoises it and recalculates only when a dependency changes, and only when something reads it.',
    },
    distractors: [
      {
        es: 'Recalcula dentro de set, antes de que nadie lo lea, para dejar el valor ya resuelto.',
        en: 'It recalculates inside set, before anyone reads it, so the value is already resolved.',
      },
      {
        es: 'Es un effect que ademas devuelve el resultado a la plantilla.',
        en: 'It is an effect that also returns the result to the template.',
      },
    ],
    explanation: {
      es: 'Un metodo en la plantilla corre en cada chequeo y computed no. Mantenlo puro: sin HTTP ni escrituras.',
      en: 'A method in the template runs on every check and computed does not. Keep it pure: no HTTP and no writes.',
    },
  },
  {
    id: 'fe-sig-04',
    topic: 'effect',
    prompt: {
      es: '¿Para qué sirve effect y por qué no se usa para derivar estado?',
      en: 'What is effect for and why is it not used to derive state?',
    },
    answer: {
      es: 'Sirve para un efecto secundario cuando cambian las signals, como un log o sincronizar localStorage. El estado derivado va en computed, que es puro y memorizado.',
      en: 'It is for a side effect when signals change, such as a log or syncing localStorage. Derived state belongs in computed, which is pure and memoised.',
    },
    distractors: [
      {
        es: 'Es la forma recomendada de escribir otra signal cuando cambia una dependencia.',
        en: 'It is the recommended way to write another signal when a dependency changes.',
      },
      {
        es: 'Devuelve un valor que la plantilla puede interpolar, igual que computed.',
        en: 'It returns a value the template can interpolate, the same as computed.',
      },
    ],
    explanation: {
      es: 'Un effect no devuelve el valor y corre despues del cambio, asi que encadenar escrituras ahi complica el estado. Si el numero sale de otras signals, es un computed.',
      en: 'An effect does not return the value and it runs after the change, so chaining writes there makes state hard to follow. If the number comes from other signals, it is a computed.',
    },
  },
  {
    id: 'fe-sig-05',
    topic: 'effect',
    prompt: {
      es: '¿Cómo se libera un timer o un socket creado dentro de un effect?',
      en: 'How do you release a timer or a socket created inside an effect?',
    },
    answer: {
      es: 'Con onCleanup, el callback que recibe el effect. Corre antes de la siguiente ejecucion y tambien cuando el effect se destruye.',
      en: 'With onCleanup, the callback the effect receives. It runs before the next execution and also when the effect is destroyed.',
    },
    distractors: [
      {
        es: 'No hace falta. El effect cierra solo cualquier timer que haya creado.',
        en: 'It is not needed. The effect closes any timer it created by itself.',
      },
      {
        es: 'onCleanup solo corre en ngOnDestroy, asi que entre ejecuciones los timers se acumulan.',
        en: 'onCleanup only runs in ngOnDestroy, so timers stack up between executions.',
      },
    ],
    explanation: {
      es: 'Sin esa limpieza, cada cambio de dependencia deja otro intervalo vivo. Un effect creado en un contexto de inyeccion se destruye con ese injector.',
      en: 'Without that cleanup, every dependency change leaves another interval alive. An effect created in an injection context is destroyed with that injector.',
    },
  },
  {
    id: 'fe-sig-06',
    topic: 'Dependencias',
    prompt: {
      es: '¿Para qué sirve untracked?',
      en: 'What is untracked for?',
    },
    answer: {
      es: 'Para leer una signal sin registrarla como dependencia. Sus cambios futuros no vuelven a disparar ese computed o ese effect.',
      en: 'To read a signal without registering it as a dependency. Later changes do not retrigger that computed or that effect.',
    },
    distractors: [
      {
        es: 'Para agrupar varias escrituras y notificar a la vista una sola vez.',
        en: 'To batch several writes and notify the view only once.',
      },
      {
        es: 'Para ejecutar codigo fuera de Angular y evitar un ciclo de deteccion.',
        en: 'To run code outside Angular and avoid a change detection cycle.',
      },
    ],
    explanation: {
      es: 'El caso tipico es un effect que reacciona a un filtro pero necesita el usuario actual sin depender de el. No sustituye a computed.',
      en: 'The typical case is an effect that reacts to a filter but needs the current user without depending on it. It does not replace computed.',
    },
  },
  {
    id: 'fe-sig-07',
    topic: 'Inputs',
    prompt: {
      es: '¿Cómo funcionan los signal inputs?',
      en: 'How do signal inputs work?',
    },
    answer: {
      es: 'input declara una signal de solo lectura que el padre escribe. La lees llamandola, y un computed o un effect reaccionan sin ngOnChanges.',
      en: 'input declares a read-only signal that the parent writes. You read it by calling it, and a computed or an effect reacts without ngOnChanges.',
    },
    distractors: [
      {
        es: 'El hijo puede hacer set y el valor sube solo al padre.',
        en: 'The child can call set and the value goes up to the parent by itself.',
      },
      {
        es: 'Es el decorador Input con otro import. Para reaccionar sigue haciendo falta ngOnChanges.',
        en: 'It is the Input decorator with another import. You still need ngOnChanges to react.',
      },
    ],
    explanation: {
      es: 'Son de solo lectura dentro del hijo. Si el hijo debe escribir y avisar al padre, eso es model, no input.',
      en: 'They are read-only inside the child. If the child must write and tell the parent, that is model, not input.',
    },
  },
  {
    id: 'fe-sig-08',
    topic: 'Inputs',
    prompt: {
      es: '¿Qué pasa con input.required si el padre no enlaza el valor?',
      en: 'What happens with input.required if the parent does not bind the value?',
    },
    answer: {
      es: 'La compilacion de la plantilla falla porque falta el binding. Ademas no tiene valor inicial: no lo leas en el constructor, porque todavia no esta puesto.',
      en: 'Template compilation fails because the binding is missing. It also has no initial value: do not read it in the constructor, because it is not set yet.',
    },
    distractors: [
      {
        es: 'La signal devuelve undefined y la plantilla lo trata como un input opcional.',
        en: 'The signal returns undefined and the template treats it as an optional input.',
      },
      {
        es: 'Se usa el primer argumento como valor por defecto y solo sale un warning.',
        en: 'The first argument is used as the default value and only a warning is shown.',
      },
    ],
    explanation: {
      es: 'El tipo no incluye undefined, por eso no hace falta comprobar null en cada lectura. En ngOnInit o dentro de un computed ya se puede leer.',
      en: 'The type does not include undefined, so you do not null-check every read. In ngOnInit or inside a computed it is already safe to read.',
    },
  },
  {
    id: 'fe-sig-09',
    topic: 'model',
    prompt: {
      es: '¿Qué problema resuelve model?',
      en: 'What problem does model solve?',
    },
    answer: {
      es: 'Crea una signal que el hijo puede escribir y, al cambiar, avisa al padre. Con eso el padre usa el enlace de dos vias sin declarar el input y el output a mano.',
      en: 'It creates a signal the child can write and, on change, it notifies the parent. The parent then uses two-way binding without declaring the input and the output by hand.',
    },
    distractors: [
      {
        es: 'Es un alias de input. Dentro del hijo sigue siendo de solo lectura.',
        en: 'It is an alias of input. Inside the child it stays read-only.',
      },
      {
        es: 'Registra el componente como control de formulario sin ControlValueAccessor.',
        en: 'It registers the component as a form control without ControlValueAccessor.',
      },
    ],
    explanation: {
      es: 'Por debajo hay un input y un output con el sufijo Change, que es el contrato de la sintaxis de dos vias. Para ngModel de verdad sigue haciendo falta el value accessor.',
      en: 'Underneath there is an input and an output with the Change suffix, which is the contract of the two-way syntax. A real ngModel still needs the value accessor.',
    },
  },
  {
    id: 'fe-sig-10',
    topic: 'Outputs',
    prompt: {
      es: '¿Cómo funcionan los signal outputs?',
      en: 'How do signal outputs work?',
    },
    answer: {
      es: 'output crea un emisor. El hijo llama a emit con un valor y el padre lo escucha con un event binding, igual que con un output clasico.',
      en: 'output creates an emitter. The child calls emit with a value and the parent listens with an event binding, the same as with a classic output.',
    },
    distractors: [
      {
        es: 'Devuelve un Observable, asi que el padre encadena debounceTime en la plantilla.',
        en: 'It returns an Observable, so the parent chains debounceTime in the template.',
      },
      {
        es: 'Sustituye a los inputs. El padre escribe en el output para bajar datos.',
        en: 'It replaces inputs. The parent writes into the output to pass data down.',
      },
    ],
    explanation: {
      es: 'No dependes de EventEmitter ni de RxJS para el caso normal. Sigues emitiendo un solo valor, y el padre no se suscribe: enlaza el evento.',
      en: 'You do not need EventEmitter or RxJS for the normal case. You still emit a single value, and the parent does not subscribe: it binds the event.',
    },
  },
  {
    id: 'fe-sig-11',
    topic: 'Consultas',
    prompt: {
      es: '¿Qué aportan viewChild y contentChild como funciones?',
      en: 'What do viewChild and contentChild add when used as functions?',
    },
    answer: {
      es: 'Devuelven una signal con el resultado. Puedes leerla en un computed o en un effect, y se actualiza cuando el elemento aparece o cambia.',
      en: 'They return a signal with the result. You can read it in a computed or an effect, and it updates when the element appears or changes.',
    },
    distractors: [
      {
        es: 'Devuelven el elemento ya resuelto en el constructor, antes de que exista la vista.',
        en: 'They return the element already resolved in the constructor, before the view exists.',
      },
      {
        es: 'viewChild pasa a encontrar tambien lo proyectado con ng-content.',
        en: 'viewChild also starts finding what was projected with ng-content.',
      },
    ],
    explanation: {
      es: 'La separacion se mantiene: viewChild es la plantilla propia y contentChild es el contenido proyectado. Se leen llamandolos, como cualquier signal.',
      en: 'The split stays: viewChild is the own template and contentChild is projected content. You read them by calling them, like any signal.',
    },
  },
  {
    id: 'fe-sig-12',
    topic: 'RxJS',
    prompt: {
      es: '¿Qué hace toSignal con un Observable?',
      en: 'What does toSignal do with an Observable?',
    },
    answer: {
      es: 'Se suscribe y expone el ultimo valor como signal, para leerlo en la plantilla sin async pipe. Hasta la primera emision el valor es undefined, salvo que pases un valor inicial.',
      en: 'It subscribes and exposes the latest value as a signal, so the template can read it without the async pipe. Until the first emission the value is undefined, unless you pass an initial value.',
    },
    distractors: [
      {
        es: 'Bloquea la lectura hasta la primera emision, como si fuera una promesa.',
        en: 'It blocks the read until the first emission, as if it were a promise.',
      },
      {
        es: 'Vuelve a suscribirse y cancela la peticion anterior cada vez que cambia otra signal.',
        en: 'It subscribes again and cancels the previous request every time another signal changes.',
      },
    ],
    explanation: {
      es: 'Llamalo en un contexto de inyeccion para que la suscripcion se cierre al destruir el componente. No cancela solo cuando cambia un filtro: eso lo hace switchMap antes de convertir.',
      en: 'Call it in an injection context so the subscription closes when the component is destroyed. It does not cancel by itself when a filter changes: switchMap does that before the conversion.',
    },
  },
  {
    id: 'fe-sig-13',
    topic: 'RxJS',
    prompt: {
      es: '¿Cuándo conviertes una signal en Observable con toObservable?',
      en: 'When do you convert a signal to an Observable with toObservable?',
    },
    answer: {
      es: 'Cuando un flujo de RxJS, como un switchMap de busqueda, tiene que arrancar desde una signal. Creas el observable en un contexto de inyeccion.',
      en: 'When an RxJS flow, such as a search switchMap, has to start from a signal. You create the observable in an injection context.',
    },
    distractors: [
      {
        es: 'Siempre. La plantilla no puede leer una signal y hay que pasarla por el async pipe.',
        en: 'Always. The template cannot read a signal and you must pass it through the async pipe.',
      },
      {
        es: 'Para que cada set emita sí o sí, incluido cada valor intermedio del mismo turno.',
        en: 'So that every set emits for sure, including every intermediate value from the same turn.',
      },
    ],
    explanation: {
      es: 'Varias escrituras en el mismo turno se quedan en el ultimo valor, que es lo que quieres en un buscador. Si necesitas cada escritura, usa un Subject desde el principio.',
      en: 'Several writes in the same turn collapse to the latest value, which is what you want in a search box. If you need every write, use a Subject from the start.',
    },
  },
  {
    id: 'fe-sig-14',
    topic: 'OnPush',
    prompt: {
      es: '¿Cómo refresca la vista una signal en un componente OnPush?',
      en: 'How does a signal refresh the view in an OnPush component?',
    },
    answer: {
      es: 'Al leerla en la plantilla, la vista queda enganchada a esa signal. Cuando cambia, Angular marca esa vista para el proximo refresco, sin un markForCheck manual.',
      en: 'Reading it in the template hooks the view to that signal. When it changes, Angular marks that view for the next refresh, without a manual markForCheck.',
    },
    distractors: [
      {
        es: 'Hay que envolver la signal en el async pipe, que es quien llama a markForCheck.',
        en: 'You must wrap the signal in the async pipe, which is what calls markForCheck.',
      },
      {
        es: 'OnPush ignora las signals. Solo reacciona si cambia la referencia de un input.',
        en: 'OnPush ignores signals. It only reacts when an input reference changes.',
      },
    ],
    explanation: {
      es: 'En la plantilla se llama la signal, no se pasa por un pipe. Si mutas el objeto por dentro sin escribir en la signal, la vista no se entera.',
      en: 'In the template you call the signal, you do not pass it through a pipe. If you mutate the object in place without writing the signal, the view does not notice.',
    },
  },
  {
    id: 'fe-sig-15',
    topic: 'Inmutabilidad',
    prompt: {
      es: '¿Por qué no se refresca la vista si mutas una propiedad de un objeto guardado en una signal?',
      en: 'Why does the view not refresh if you mutate a property of an object stored in a signal?',
    },
    answer: {
      es: 'Porque la signal no vio una escritura. La referencia es la misma, asi que hay que guardar un objeto nuevo con set o con update.',
      en: 'Because the signal did not see a write. The reference is the same, so you store a new object with set or with update.',
    },
    distractors: [
      {
        es: 'Porque hay que usar mutate, que es el metodo que avisa despues de cambiar una propiedad.',
        en: 'Because you must use mutate, which is the method that notifies after a property change.',
      },
      {
        es: 'Porque la signal clona el objeto al guardarlo y la mutacion cae en otra copia.',
        en: 'Because the signal clones the object when storing it and the mutation lands on another copy.',
      },
    ],
    explanation: {
      es: 'Tratala como estado inmutable: update con una copia y el campo nuevo. La mutacion sí queda en memoria, pero nadie notifico a la vista.',
      en: 'Treat it as immutable state: update with a copy and the new field. The mutation does stay in memory, but nobody notified the view.',
    },
  },
  {
    id: 'fe-sig-16',
    topic: 'Plantillas',
    prompt: {
      es: '¿Qué pasa si interpolas una signal en la plantilla sin llamarla?',
      en: 'What happens if you interpolate a signal in the template without calling it?',
    },
    answer: {
      es: 'No lees el valor. Se muestra la funcion y la vista no queda suscrita a los cambios.',
      en: 'You are not reading the value. The function is shown and the view is not subscribed to changes.',
    },
    distractors: [
      {
        es: 'Angular detecta la signal y la desenvuelve sola, como haria con un Observable.',
        en: 'Angular detects the signal and unwraps it on its own, as it would with an Observable.',
      },
      {
        es: 'Pinta el valor inicial y deja de actualizarse en los cambios siguientes.',
        en: 'It paints the initial value and stops updating on later changes.',
      },
    ],
    explanation: {
      es: 'Una signal es una funcion, asi que hay que invocarla. Angular tampoco desenvuelve observables: esos van con el async pipe.',
      en: 'A signal is a function, so you have to call it. Angular does not unwrap observables either: those go through the async pipe.',
    },
  },
  {
    id: 'fe-sig-17',
    topic: 'computed',
    prompt: {
      es: '¿Por qué computed es de solo lectura?',
      en: 'Why is computed read-only?',
    },
    answer: {
      es: 'Porque su valor sale de las dependencias y escribirlo lo dejaria incoherente en el siguiente calculo. Si el usuario puede pisar un valor derivado, ese estado va en otra signal escribible.',
      en: 'Because its value comes from the dependencies and writing it would leave it inconsistent on the next calculation. If the user can override a derived value, that state goes in another writable signal.',
    },
    distractors: [
      {
        es: 'Si se puede escribir, pasando allowWrites al crear el computed.',
        en: 'You can write it by passing allowWrites when creating the computed.',
      },
      {
        es: 'Se escribe desde un effect y el computed guarda esa escritura como valor oficial.',
        en: 'You write it from an effect and the computed keeps that write as the official value.',
      },
    ],
    explanation: {
      es: 'No tiene set ni update. Un default que el usuario puede cambiar es otra signal, inicializada desde la fuente y escrita cuando el usuario edita.',
      en: 'It has no set or update. A default the user can change is another signal, initialised from the source and written when the user edits.',
    },
  },
  {
    id: 'fe-sig-18',
    topic: 'Estado',
    prompt: {
      es: '¿Cómo se gestiona el estado con signals?',
      en: 'How do you manage state with Signals?',
    },
    answer: {
      es: 'Un servicio guarda el estado en signals, deriva vistas con computed y la plantilla lee esas signals. La escritura pasa por metodos del servicio, no por mutar el objeto a mano.',
      en: 'A service holds state in signals, derives view data with computed and the template reads those signals. Writes go through service methods, not by mutating the object by hand.',
    },
    distractors: [
      {
        es: 'Cada componente crea sus signals privadas y no se comparten, porque una signal no se puede inyectar.',
        en: 'Each component creates its own private signals and they are not shared, because a signal cannot be injected.',
      },
      {
        es: 'El estado vive en el template con interpolacion y la clase solo tiene metodos vacios.',
        en: 'State lives in the template with interpolation and the class only has empty methods.',
      },
    ],
    explanation: {
      es: 'Ese servicio puede ir en root o en la ruta de la feature, segun el alcance. Para la parte HTTP, conviertes el resultado con toSignal y dejas la cancelacion en RxJS.',
      en: 'That service can live in root or on the feature route, depending on the scope. For the HTTP part, you convert the result with toSignal and leave cancellation in RxJS.',
    },
  },
  {
    id: 'fe-sig-19',
    topic: 'Estado',
    prompt: {
      es: '¿Qué gana un estado con signals frente a uno con BehaviorSubject?',
      en: 'What does signal state gain over state built with BehaviorSubject?',
    },
    answer: {
      es: 'Lees el valor llamandolo, sin suscripciones que cerrar, y los derivados son computed. La plantilla no necesita el async pipe.',
      en: 'You read the value by calling it, with no subscriptions to close, and derived values are computed signals. The template does not need the async pipe.',
    },
    distractors: [
      {
        es: 'Las signals traen switchMap y debounceTime, asi que RxJS ya no hace falta para el HTTP.',
        en: 'Signals include switchMap and debounceTime, so RxJS is no longer needed for HTTP.',
      },
      {
        es: 'Un BehaviorSubject no deja leer el valor actual. Solo se puede consumir suscribiendose.',
        en: 'A BehaviorSubject does not let you read the current value. It can only be consumed by subscribing.',
      },
    ],
    explanation: {
      es: 'BehaviorSubject sí tiene el valor actual, y lo que desaparece con signals es el combineLatest para derivar y el olvido de un unsubscribe. Cancelar peticiones sigue siendo de RxJS.',
      en: 'A BehaviorSubject does have the current value, and what goes away with signals is combineLatest for derived data and a forgotten unsubscribe. Cancelling requests is still RxJS.',
    },
  },
  {
    id: 'fe-sig-20',
    topic: 'Búsqueda',
    prompt: {
      es: '¿Cómo llevas a la plantilla el resultado de una búsqueda que depende de filtros en signals?',
      en: 'How do you bring into the template the result of a search that depends on filters held in signals?',
    },
    answer: {
      es: 'Pasas los filtros a RxJS con toObservable, aplicas debounceTime y switchMap, y conviertes el resultado con toSignal para la plantilla.',
      en: 'You pass the filters to RxJS with toObservable, apply debounceTime and switchMap, and convert the result with toSignal for the template.',
    },
    distractors: [
      {
        es: 'Llamas al servicio dentro de un effect y guardas la respuesta con set. El effect cancela la peticion anterior.',
        en: 'You call the service inside an effect and store the response with set. The effect cancels the previous request.',
      },
      {
        es: 'Envuelves el HTTP en toSignal y el solo se vuelve a suscribir cuando cambia el filtro.',
        en: 'You wrap the HTTP call in toSignal and it resubscribes by itself when the filter changes.',
      },
    ],
    explanation: {
      es: 'El effect no cancela la peticion en vuelo y se pisan respuestas. toSignal se suscribe una vez: la reaccion al filtro tiene que estar en el flujo de RxJS.',
      en: 'An effect does not cancel the in-flight request and responses overwrite each other. toSignal subscribes once: the reaction to the filter has to live in the RxJS flow.',
    },
  },
];
