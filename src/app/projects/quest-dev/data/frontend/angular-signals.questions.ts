import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_ANGULAR_SIGNALS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-sig-01',
    topic: 'Signals',
    prompt: {
      es: '¿Cuál es la diferencia entre set y update en una WritableSignal?',
      en: 'What is the difference between set and update on a WritableSignal?',
    },
    answer: {
      es: 'set reemplaza el valor por uno nuevo que se le pasa directamente; update recibe una función que calcula el nuevo valor a partir del actual.',
      en: 'set replaces the value with a new one passed directly; update receives a function that computes the new value from the current one.',
    },
    distractors: [
      {
        es: 'set crea una referencia nueva y notifica, mientras update aplica el cambio sobre el valor actual sin reemplazar la referencia.',
        en: 'set creates a new reference and notifies, while update applies the change on the current value without replacing the reference.',
      },
      {
        es: 'set notifica a los consumidores de forma inmediata y update agrupa las escrituras hasta el próximo ciclo de detección de cambios.',
        en: 'set notifies consumers immediately and update batches the writes until the next change detection cycle.',
      },
    ],
    explanation: {
      es: 'Ambos escriben un valor nuevo y notifican igual: update es solo azúcar para signal.set(fn(signal())), útil cuando el valor depende del anterior, como update(n => n + 1). El método pensado para mutar en el sitio se llamaba mutate y fue eliminado antes de que las signals se estabilizaran en Angular 17, justamente porque escondía mutaciones que no cambiaban la referencia.',
      en: 'Both write a new value and notify the same way: update is just sugar for signal.set(fn(signal())), handy when the value depends on the previous one, as in update(n => n + 1). The method meant for in-place mutation was called mutate and it was removed before signals became stable in Angular 17, precisely because it hid mutations that did not change the reference.',
    },
  },
  {
    id: 'fe-sig-02',
    topic: 'Signals',
    prompt: {
      es: '¿Por qué una signal que guarda un objeto notifica siempre que se le asigna un objeto nuevo, aunque su contenido sea idéntico?',
      en: 'Why does a signal holding an object notify every time a new object is assigned, even when the content is identical?',
    },
    answer: {
      es: 'Porque la función de igualdad por defecto es Object.is, que compara por referencia; para cambiar ese criterio hay que pasar la opción equal al crear la signal.',
      en: 'Because the default equality function is Object.is, which compares by reference; to change that criterion you must pass the equal option when creating the signal.',
    },
    distractors: [
      {
        es: 'Porque Angular hace una comparación profunda solo con los valores primitivos y considera que cualquier objeto es un valor nuevo sin posibilidad de configurarlo.',
        en: 'Because Angular performs a deep comparison only on primitive values and treats any object as a new value, with no way to configure it.',
      },
      {
        es: 'Porque la signal compara el valor nuevo con el anterior usando una igualdad estructural y el orden de las claves del objeto casi nunca coincide.',
        en: 'Because the signal compares the new value against the previous one using structural equality and the key order of the object hardly ever matches.',
      },
    ],
    explanation: {
      es: 'Object.is devuelve false para dos objetos distintos con el mismo contenido, así que la signal marca a sus consumidores como sucios. La igualdad sí es configurable: signal(valor, { equal: miComparador }) y computed(fn, { equal: miComparador }) aceptan una función personalizada, por ejemplo una comparación por id o un lodash isEqual. Conviene medir antes de usar comparaciones profundas, porque se ejecutan en cada escritura.',
      en: 'Object.is returns false for two different objects with the same content, so the signal marks its consumers dirty. Equality is configurable: signal(value, { equal: myComparator }) and computed(fn, { equal: myComparator }) accept a custom function, for instance a comparison by id or a lodash isEqual. Measure before using deep comparisons, since they run on every write.',
    },
  },
  {
    id: 'fe-sig-03',
    topic: 'Signals',
    prompt: {
      es: '¿Cómo funciona la evaluación de un computed cuando cambia una de sus dependencias?',
      en: 'How is a computed evaluated when one of its dependencies changes?',
    },
    answer: {
      es: 'No se recalcula en ese momento: queda marcado como sucio y vuelve a evaluarse la próxima vez que alguien lo lee, con todas sus dependencias ya actualizadas.',
      en: 'It is not recalculated at that moment: it is flagged as dirty and re-evaluates the next time someone reads it, with all its dependencies already updated.',
    },
    distractors: [
      {
        es: 'Se recalcula de forma inmediata y síncrona dentro de la llamada a set, para que cualquier lectura posterior encuentre el valor ya resuelto.',
        en: 'It recalculates immediately and synchronously inside the set call, so that any later read finds the value already resolved.',
      },
      {
        es: 'Programa su recálculo en una microtarea, de modo que los valores intermedios se descartan antes de que la plantilla los llegue a mostrar.',
        en: 'It schedules its recalculation in a microtask, so intermediate values are discarded before the template gets to display them.',
      },
    ],
    explanation: {
      es: 'El modelo es de notificación hacia adelante y cálculo hacia atrás: la escritura solo propaga la marca de sucio y el valor se obtiene al leerlo, por eso nunca se observan estados intermedios inconsistentes aunque se actualicen varias signals seguidas. El recálculo inmediato produciría el problema clásico de los glitches, y las microtareas son el mecanismo de planificación de effect, no de computed, que es siempre síncrono y memoizado.',
      en: 'The model is push notification with pull computation: a write only propagates the dirty mark and the value is produced on read, which is why you never observe inconsistent intermediate states even when several signals are updated in a row. Eager recalculation would cause the classic glitch problem, and microtasks are the scheduling mechanism of effect, not of computed, which is always synchronous and memoised.',
    },
  },
  {
    id: 'fe-sig-04',
    topic: 'Signals',
    prompt: {
      es: '¿Cuál es el propósito de effect y por qué no se recomienda para derivar estado?',
      en: 'What is the purpose of effect and why is it discouraged for deriving state?',
    },
    answer: {
      es: 'Sirve para efectos secundarios ante un cambio de signals, como registrar trazas o sincronizar con localStorage; el estado derivado se expresa con computed, que es puro, perezoso y memoizado.',
      en: 'It exists for side effects triggered by signal changes, such as logging or syncing with localStorage; derived state belongs in computed, which is pure, lazy and memoised.',
    },
    distractors: [
      {
        es: 'Sirve para escribir en otra signal cuando cambia una dependencia, que es la forma recomendada de encadenar estado porque garantiza el orden de las actualizaciones.',
        en: 'It exists to write into another signal when a dependency changes, the recommended way to chain state because it guarantees the order of updates.',
      },
      {
        es: 'Sirve para exponer en la plantilla el resultado de su última ejecución, y por eso puede sustituir a computed en cálculos sencillos.',
        en: 'It exists to expose the result of its last run in the template, and that is why it can replace computed for simple calculations.',
      },
    ],
    explanation: {
      es: 'Un effect no devuelve nada: entrega un EffectRef con destroy y se ejecuta de forma asíncrona tras cada cambio, así que usarlo para derivar estado crea cascadas difíciles de seguir y lecturas desfasadas. En Angular 17 escribir signals dentro de un effect obliga a activar la opción allowSignalWrites y el propio equipo lo desaconseja. Si el valor es función de otras signals, computed lo resuelve sin duplicar la fuente de verdad.',
      en: 'An effect returns nothing: it hands back an EffectRef with destroy and runs asynchronously after each change, so using it to derive state creates cascades that are hard to follow and stale reads. In Angular 17 writing signals inside an effect requires enabling the allowSignalWrites option and the team itself discourages it. If the value is a function of other signals, computed solves it without duplicating the source of truth.',
    },
  },
  {
    id: 'fe-sig-05',
    topic: 'Signals',
    prompt: {
      es: '¿Cómo se libera un recurso creado dentro de un effect, por ejemplo un temporizador o un socket?',
      en: 'How do you release a resource created inside an effect, for example a timer or a socket?',
    },
    answer: {
      es: 'La función del effect recibe un onCleanup y allí se registra la liberación; ese callback corre antes de cada nueva ejecución y también al destruirse el effect.',
      en: 'The effect function receives an onCleanup callback where the teardown is registered; it runs before every new execution and also when the effect is destroyed.',
    },
    distractors: [
      {
        es: 'Se registra con onCleanup, que Angular ejecuta una sola vez cuando se destruye el componente que creó el effect, igual que ngOnDestroy.',
        en: 'It is registered with onCleanup, which Angular runs only once when the component that created the effect is destroyed, just like ngOnDestroy.',
      },
      {
        es: 'Hay que guardar el EffectRef que devuelve effect y llamar a destroy en ngOnDestroy, porque el effect no ofrece ningún gancho de limpieza propio.',
        en: 'You must keep the EffectRef returned by effect and call destroy in ngOnDestroy, because the effect offers no cleanup hook of its own.',
      },
    ],
    explanation: {
      es: 'La firma es effect((onCleanup) => { ... onCleanup(() => clearInterval(id)); }), y la clave es que la limpieza se ejecuta también entre ejecuciones, evitando acumular temporizadores cuando la dependencia cambia muchas veces. Además, un effect creado en un contexto de inyección se destruye solo junto a su inyector, así que llamar a destroy manualmente solo hace falta cuando se crea con un injector externo o fuera del ciclo de vida del componente.',
      en: 'The signature is effect((onCleanup) => { ... onCleanup(() => clearInterval(id)); }), and the key point is that cleanup also runs between executions, preventing stacked timers when the dependency changes many times. Besides, an effect created in an injection context is destroyed automatically with its injector, so calling destroy manually is only needed when it is created with an external injector or outside the component lifecycle.',
    },
  },
  {
    id: 'fe-sig-06',
    topic: 'Signals',
    prompt: {
      es: '¿Para qué sirve untracked dentro de un computed o de un effect?',
      en: 'What is untracked for inside a computed or an effect?',
    },
    answer: {
      es: 'Para leer el valor actual de una signal sin registrarla como dependencia, de modo que sus cambios futuros no vuelvan a disparar el cálculo o el efecto.',
      en: 'To read the current value of a signal without registering it as a dependency, so its future changes do not trigger the computation or the effect again.',
    },
    distractors: [
      {
        es: 'Para agrupar varias escrituras en un solo bloque y que los consumidores se notifiquen una única vez cuando el bloque termina.',
        en: 'To batch several writes into a single block so consumers are notified only once when the block finishes.',
      },
      {
        es: 'Para ejecutar ese bloque fuera de la zona de Angular y evitar que las lecturas disparen un ciclo de detección de cambios.',
        en: 'To run that block outside the Angular zone and prevent the reads from triggering a change detection cycle.',
      },
    ],
    explanation: {
      es: 'untracked(() => miSignal()) afecta únicamente al grafo de dependencias reactivas: el caso típico es un effect que debe reaccionar a un filtro pero necesita consultar el usuario actual sin depender de él. No agrupa escrituras, porque las signals ya coalescen las notificaciones al leerse de forma perezosa, y salir del contexto de Angular es tarea de NgZone.runOutsideAngular, que es un concepto distinto.',
      en: 'untracked(() => mySignal()) only affects the reactive dependency graph: the typical case is an effect that must react to a filter but needs to read the current user without depending on it. It does not batch writes, since signals already coalesce notifications thanks to lazy reads, and leaving the Angular context is the job of NgZone.runOutsideAngular, which is a different concept.',
    },
  },
  {
    id: 'fe-sig-07',
    topic: 'Signals',
    prompt: {
      es: '¿Qué aporta declarar una entrada con la función input frente al decorador Input?',
      en: 'What does declaring an input with the input function add compared to the Input decorator?',
    },
    answer: {
      es: 'Devuelve una InputSignal de solo lectura que se lee con paréntesis y participa en el grafo reactivo, así que un computed o un effect reaccionan sin ngOnChanges ni setters.',
      en: 'It returns a read-only InputSignal that is read with parentheses and takes part in the reactive graph, so a computed or an effect reacts without ngOnChanges or setters.',
    },
    distractors: [
      {
        es: 'Permite que el hijo escriba el valor y lo propague al padre, a diferencia del decorador Input, que solo admite un flujo de datos descendente.',
        en: 'It lets the child write the value and propagate it to the parent, unlike the Input decorator, which only supports a downward data flow.',
      },
      {
        es: 'Es equivalente al decorador pero con tipado más estricto, y para reaccionar a los cambios sigue siendo necesario implementar ngOnChanges.',
        en: 'It is equivalent to the decorator but with stricter typing, and reacting to changes still requires implementing ngOnChanges.',
      },
    ],
    explanation: {
      es: 'Las signal inputs llegaron en Angular 17.1 y se declaran como readonly nombre = input<string>(valorPorDefecto), con opciones alias y transform. Son de solo lectura dentro del componente: la variante escribible con propagación al padre es model, incorporada en 17.2. Y precisamente su ventaja es que hacen innecesario ngOnChanges, porque derivar con computed ya reacciona a cada nuevo valor.',
      en: 'Signal inputs landed in Angular 17.1 and are declared as readonly name = input<string>(defaultValue), with alias and transform options. They are read-only inside the component: the writable variant that propagates to the parent is model, added in 17.2. And their main advantage is exactly that they make ngOnChanges unnecessary, because deriving with computed already reacts to every new value.',
    },
  },
  {
    id: 'fe-sig-08',
    topic: 'Signals',
    prompt: {
      es: '¿Qué ocurre con input.required cuando el componente padre no enlaza ese valor?',
      en: 'What happens with input.required when the parent component does not bind that value?',
    },
    answer: {
      es: 'El compilador de plantillas reporta el enlace faltante y, si igualmente se lee antes de que se establezca, Angular lanza en tiempo de ejecución el error NG0950.',
      en: 'The template compiler reports the missing binding and, if the value is read before it is set anyway, Angular throws the NG0950 runtime error.',
    },
    distractors: [
      {
        es: 'La señal devuelve undefined hasta que llegue un valor, por lo que conviene comprobarla antes de usarla en la plantilla.',
        en: 'The signal returns undefined until a value arrives, so it is worth checking it before using it in the template.',
      },
      {
        es: 'Se usa el valor por defecto que se pasó como primer argumento y solo se muestra una advertencia en la consola en modo desarrollo.',
        en: 'The default value passed as the first argument is used and only a console warning is shown in development mode.',
      },
    ],
    explanation: {
      es: 'input.required no admite valor inicial: su tipo es InputSignal<T> sin undefined, y ese es justamente el beneficio frente a comprobar nulos por todas partes. El error NG0950 aparece al leerla demasiado pronto, por ejemplo en el constructor o en un inicializador de campo, porque los inputs se establecen después de crear la instancia; leerla en ngOnInit o en un computed ya es seguro.',
      en: 'input.required takes no initial value: its type is InputSignal<T> without undefined, and that is precisely the benefit over null checks everywhere. The NG0950 error shows up when it is read too early, for instance in the constructor or a field initialiser, because inputs are set after the instance is created; reading it in ngOnInit or inside a computed is already safe.',
    },
  },
  {
    id: 'fe-sig-09',
    topic: 'Signals',
    prompt: {
      es: '¿Qué resuelve la función model en un componente?',
      en: 'What does the model function solve in a component?',
    },
    answer: {
      es: 'Crea una signal escribible por el hijo que, al cambiar, emite el nuevo valor al padre, habilitando el enlace de dos vías sin declarar a mano el par de input y output.',
      en: 'It creates a signal the child can write to that emits the new value to the parent on change, enabling two-way binding without manually declaring the input and output pair.',
    },
    distractors: [
      {
        es: 'Es un alias de input que habilita la sintaxis de dos vías en la plantilla del padre, aunque dentro del hijo el valor sigue siendo de solo lectura.',
        en: 'It is an alias of input that enables the two-way syntax in the parent template, although inside the child the value remains read-only.',
      },
      {
        es: 'Conecta la signal con ngModel de FormsModule, de modo que el componente queda registrado como control de formulario sin implementar ControlValueAccessor.',
        en: 'It connects the signal with ngModel from FormsModule, so the component is registered as a form control without implementing ControlValueAccessor.',
      },
    ],
    explanation: {
      es: 'model llegó en Angular 17.2 y por dentro declara un input más un output llamado nombreChange, que es la convención que hace funcionar el enlace [(valor)] en el padre; cada set o update del hijo emite ese output. Sigue siendo una signal normal dentro del componente, y existe model.required para el caso obligatorio. Integrarse con los formularios sigue exigiendo ControlValueAccessor: model no lo sustituye.',
      en: 'model arrived in Angular 17.2 and internally declares an input plus an output named nameChange, which is the convention that makes the [(value)] binding work in the parent; every set or update in the child emits that output. It is still a regular signal inside the component, and model.required exists for the mandatory case. Integrating with forms still requires ControlValueAccessor: model does not replace it.',
    },
  },
  {
    id: 'fe-sig-10',
    topic: 'Signals',
    prompt: {
      es: '¿Qué caracteriza a las consultas viewChild y contentChild escritas como funciones en lugar de decoradores?',
      en: 'What characterises the viewChild and contentChild queries written as functions instead of decorators?',
    },
    answer: {
      es: 'Devuelven una Signal con el resultado, así que se pueden leer dentro de un computed o un effect y notifican cuando el elemento aparece o cambia, sin depender de ngAfterViewInit.',
      en: 'They return a Signal holding the result, so they can be read inside a computed or an effect and they notify when the element appears or changes, without relying on ngAfterViewInit.',
    },
    distractors: [
      {
        es: 'Devuelven directamente el ElementRef o la instancia del componente igual que el decorador, pero resuelven antes porque no esperan a que la vista se inicialice.',
        en: 'They return the ElementRef or the component instance directly just like the decorator, but they resolve earlier because they do not wait for the view to initialise.',
      },
      {
        es: 'Unifican ambos tipos de consulta, de modo que viewChild también encuentra los nodos proyectados por el padre a través de ng-content.',
        en: 'They unify both kinds of query, so viewChild also finds the nodes projected by the parent through ng-content.',
      },
    ],
    explanation: {
      es: 'El resultado se lee invocándolo, por ejemplo this.input()?.nativeElement, y al ser reactivo evita el clásico baile de static: true y de los ganchos de ciclo de vida. Existen las variantes viewChild.required y contentChild.required, que lanzan NG0951 si la consulta no encuentra nada. Las consultas basadas en signals aparecieron como developer preview en Angular 17.2 y se estabilizaron en la 19, y la separación entre vista propia y contenido proyectado se mantiene igual que con los decoradores.',
      en: 'The result is read by invoking it, for example this.input()?.nativeElement, and being reactive it avoids the classic dance with static: true and lifecycle hooks. There are viewChild.required and contentChild.required variants that throw NG0951 when the query finds nothing. Signal-based queries appeared as developer preview in Angular 17.2 and became stable in 19, and the split between own view and projected content stays exactly as it is with the decorators.',
    },
  },
  {
    id: 'fe-sig-11',
    topic: 'Signals',
    prompt: {
      es: '¿En qué se diferencia la función output del decorador Output con EventEmitter?',
      en: 'How does the output function differ from the Output decorator with EventEmitter?',
    },
    answer: {
      es: 'Devuelve un OutputEmitterRef con un método emit y sin dependencia de RxJS, con tipado más estricto y liberación automática al destruirse el componente.',
      en: 'It returns an OutputEmitterRef with an emit method and no RxJS dependency, with stricter typing and automatic teardown when the component is destroyed.',
    },
    distractors: [
      {
        es: 'Emite de forma asíncrona para evitar el error de expresión cambiada después de comprobada, mientras que EventEmitter notifica de forma síncrona.',
        en: 'It emits asynchronously to avoid the expression changed after checked error, whereas EventEmitter notifies synchronously.',
      },
      {
        es: 'Devuelve un Observable, así que el padre puede encadenar operadores como debounceTime antes de reaccionar al evento.',
        en: 'It returns an Observable, so the parent can chain operators such as debounceTime before reacting to the event.',
      },
    ],
    explanation: {
      es: 'output llegó en Angular 17.3 y se declara como readonly guardado = output<Pedido>(); ambas versiones emiten de forma síncrona, así que la asincronía no es la diferencia. Lo que desaparece es el acoplamiento con RxJS: EventEmitter extiende Subject y por eso podía tratarse como Observable, mientras OutputEmitterRef solo expone emit, subscribe y destroy. Para volver a RxJS existen outputFromObservable y outputToObservable en rxjs-interop.',
      en: 'output arrived in Angular 17.3 and is declared as readonly saved = output<Order>(); both versions emit synchronously, so asynchrony is not the difference. What goes away is the RxJS coupling: EventEmitter extends Subject and could therefore be treated as an Observable, while OutputEmitterRef only exposes emit, subscribe and destroy. To get back to RxJS there are outputFromObservable and outputToObservable in rxjs-interop.',
    },
  },
  {
    id: 'fe-sig-12',
    topic: 'Signals',
    prompt: {
      es: 'Al convertir un Observable con toSignal, ¿qué valor se lee antes de la primera emisión y qué hace la opción requireSync?',
      en: 'When converting an Observable with toSignal, what value is read before the first emission and what does the requireSync option do?',
    },
    answer: {
      es: 'Sin configuración se lee undefined hasta la primera emisión; con initialValue se lee ese valor y con requireSync en true el tipo excluye undefined, pero Angular falla si el observable no emite de forma síncrona.',
      en: 'With no configuration it reads undefined until the first emission; with initialValue it reads that value, and with requireSync set to true the type excludes undefined, but Angular fails if the observable does not emit synchronously.',
    },
    distractors: [
      {
        es: 'Sin configuración la lectura espera de forma síncrona a la primera emisión, y requireSync solo hace explícito ese comportamiento para mejorar el tipado.',
        en: 'With no configuration the read waits synchronously for the first emission, and requireSync merely makes that behaviour explicit to improve typing.',
      },
      {
        es: 'Sin configuración se lee null hasta la primera emisión, y requireSync obliga a que cada emisión posterior actualice la signal de forma síncrona en lugar de esperar al siguiente ciclo.',
        en: 'With no configuration it reads null until the first emission, and requireSync forces every later emission to update the signal synchronously instead of waiting for the next cycle.',
      },
    ],
    explanation: {
      es: 'toSignal se suscribe de inmediato y su tipo por defecto es Signal<T | undefined>; nunca bloquea la lectura, porque una signal es siempre síncrona. requireSync es la opción adecuada para fuentes que ya tienen valor, como un BehaviorSubject o un shareReplay con buffer, y si la fuente no emite en la propia suscripción Angular lanza NG0601. La suscripción se cancela sola al destruirse el contexto de inyección, salvo que se use manualCleanup.',
      en: 'toSignal subscribes immediately and its default type is Signal<T | undefined>; it never blocks the read, because a signal is always synchronous. requireSync is the right option for sources that already hold a value, such as a BehaviorSubject or a shareReplay with a buffer, and if the source does not emit during subscription Angular throws NG0601. The subscription is torn down automatically when the injection context is destroyed, unless manualCleanup is used.',
    },
  },
  {
    id: 'fe-sig-13',
    topic: 'Signals',
    prompt: {
      es: '¿Cuál es la semántica de emisión de un Observable creado con toObservable a partir de una signal?',
      en: 'What are the emission semantics of an Observable created from a signal with toObservable?',
    },
    answer: {
      es: 'Se apoya en un effect, así que no emite en el momento de suscribirse: entrega el valor vigente y los siguientes en una microtarea, y si hay varias escrituras seguidas solo emite la última.',
      en: 'It is built on an effect, so it does not emit at subscription time: it delivers the current value and the following ones in a microtask, and when several writes happen in a row only the last one is emitted.',
    },
    distractors: [
      {
        es: 'Devuelve un BehaviorSubject sobre la signal, por lo que cada suscriptor recibe el valor actual de forma síncrona en el instante de suscribirse.',
        en: 'It returns a BehaviorSubject over the signal, so every subscriber receives the current value synchronously at the moment of subscription.',
      },
      {
        es: 'Emite exactamente una vez por cada llamada a set o update, garantizando que ningún valor intermedio se pierda por el camino.',
        en: 'It emits exactly once per set or update call, guaranteeing that no intermediate value is ever lost along the way.',
      },
    ],
    explanation: {
      es: 'Como la conversión registra un effect, necesita un contexto de inyección o un injector explícito, y hereda la planificación asíncrona de los effects. Esa es la diferencia práctica con un BehaviorSubject: si se hace set(1) y set(2) en la misma tarea, el observable solo verá el 2, algo deseable para alimentar un switchMap con los filtros de un buscador. Si se necesita el historial completo de cada escritura, el modelo correcto es un Subject de RxJS desde el principio.',
      en: 'Because the conversion registers an effect, it needs an injection context or an explicit injector, and it inherits the asynchronous scheduling of effects. That is the practical difference with a BehaviorSubject: if you call set(1) and set(2) in the same task, the observable only sees 2, which is desirable when feeding a switchMap with search filters. If you need the full history of every write, the right model is an RxJS Subject from the start.',
    },
  },
  {
    id: 'fe-sig-14',
    topic: 'Signals',
    prompt: {
      es: 'Si un componente OnPush muestra el valor de una signal, ¿cómo se entera Angular de que debe refrescar la vista sin llamar a markForCheck?',
      en: 'If an OnPush component displays a signal value, how does Angular know it must refresh the view without calling markForCheck?',
    },
    answer: {
      es: 'Al leer la signal durante el render, la vista queda registrada como consumidora en el grafo reactivo, y cuando la signal cambia Angular marca esa vista y su ruta de ancestros para el próximo ciclo.',
      en: 'Reading the signal during rendering registers the view as a consumer in the reactive graph, and when the signal changes Angular marks that view and its ancestor path for the next cycle.',
    },
    distractors: [
      {
        es: 'La signal fuerza un ciclo global desde ApplicationRef.tick, que revisa el árbol completo e ignora la estrategia OnPush mientras dura esa pasada.',
        en: 'The signal forces a global cycle through ApplicationRef.tick, which checks the whole tree and ignores the OnPush strategy during that pass.',
      },
      {
        es: 'El AsyncPipe aplicado sobre la signal es quien llama internamente a markForCheck en cada emisión, igual que hace con un Observable.',
        en: 'The AsyncPipe applied to the signal is the one internally calling markForCheck on each emission, exactly as it does with an Observable.',
      },
    ],
    explanation: {
      es: 'Cada vista actúa como un consumidor reactivo del grafo de signals, de forma que el sistema sabe exactamente qué vistas dependen de qué valor y marca solo esa rama, en lugar de revisar todo el árbol. Una signal no se canaliza con AsyncPipe: en la plantilla se invoca directamente con contador(), porque ya es síncrona. Esta integración es la que permite que OnPush y signals funcionen juntos sin inyectar ChangeDetectorRef.',
      en: 'Each view behaves as a reactive consumer of the signal graph, so the system knows exactly which views depend on which value and marks only that branch instead of checking the whole tree. A signal is not piped through AsyncPipe: in the template you invoke it directly as counter(), because it is already synchronous. This integration is what lets OnPush and signals work together without injecting ChangeDetectorRef.',
    },
  },
  {
    id: 'fe-sig-15',
    topic: 'Signals',
    prompt: {
      es: '¿Qué papel juegan las signals en una aplicación que funciona sin Zone.js?',
      en: 'What role do signals play in an application running without Zone.js?',
    },
    answer: {
      es: 'Notifican directamente al planificador de Angular qué vistas quedaron sucias, de modo que ya no hace falta parchear las APIs asíncronas para adivinar cuándo pudo cambiar algo.',
      en: 'They notify the Angular scheduler directly about which views became dirty, so there is no longer any need to patch asynchronous APIs to guess when something might have changed.',
    },
    distractors: [
      {
        es: 'Actualizan el nodo del DOM afectado de forma puntual, sin volver a evaluar la plantilla, por lo que la detección de cambios deja de existir en la aplicación.',
        en: 'They update the affected DOM node in a targeted way without re-evaluating the template, so change detection no longer exists in the application.',
      },
      {
        es: 'Zone.js sigue siendo imprescindible, porque las signals solo evitan tener que llamar a markForCheck en los componentes OnPush.',
        en: 'Zone.js remains mandatory, because signals only save you from calling markForCheck in OnPush components.',
      },
    ],
    explanation: {
      es: 'Zone.js parchea setTimeout, las promesas y los eventos para disparar un ciclo global sin saber qué cambió; las signals invierten el modelo avisando de forma precisa, que es la base del modo sin zona introducido como experimental en Angular 18 con provideExperimentalZonelessChangeDetection. Aun así, Angular sigue refrescando la vista completa marcada como sucia y no nodo por nodo: la reactividad granular a nivel de DOM todavía no forma parte del motor.',
      en: 'Zone.js patches setTimeout, promises and events to trigger a global cycle without knowing what changed; signals invert the model by notifying precisely, which is the foundation of the zoneless mode introduced as experimental in Angular 18 through provideExperimentalZonelessChangeDetection. Even so, Angular still refreshes the whole view marked as dirty rather than node by node: fine-grained DOM reactivity is not part of the engine yet.',
    },
  },
  {
    id: 'fe-sig-16',
    topic: 'Signals',
    prompt: {
      es: '¿Qué ocurre si en la plantilla se interpola una signal sin los paréntesis, por ejemplo {{ contador }}?',
      en: 'What happens if a signal is interpolated in the template without the parentheses, for example {{ counter }}?',
    },
    answer: {
      es: 'Se interpola la función en sí, así que se imprime su código fuente y la vista nunca se actualiza porque no se registró ninguna dependencia reactiva.',
      en: 'The function itself is interpolated, so its source code is printed and the view never updates because no reactive dependency was registered.',
    },
    distractors: [
      {
        es: 'Angular detecta que es una signal y la desenvuelve automáticamente, igual que hace con las promesas y los observables en las interpolaciones.',
        en: 'Angular detects that it is a signal and unwraps it automatically, just as it does with promises and observables in interpolations.',
      },
      {
        es: 'Se muestra correctamente el valor inicial, pero la interpolación deja de reaccionar a los cambios posteriores de la signal.',
        en: 'The initial value is displayed correctly, but the interpolation stops reacting to later changes of the signal.',
      },
    ],
    explanation: {
      es: 'Una signal es una función, y convertirla a texto devuelve su definición, por eso en pantalla aparece algo parecido a un bloque de código y no el valor. Angular no desenvuelve nada de forma implícita: para promesas y observables hay que usar AsyncPipe de manera explícita. Desde Angular 17.2 existe el diagnóstico extendido NG8109, que avisa en la compilación cuando se interpola una signal sin invocarla.',
      en: 'A signal is a function, and converting it to text returns its definition, which is why the screen shows something that looks like a block of code instead of the value. Angular does not unwrap anything implicitly: promises and observables require an explicit AsyncPipe. Since Angular 17.2 there is the NG8109 extended diagnostic, which warns at compile time when a signal is interpolated without being invoked.',
    },
  },
  {
    id: 'fe-sig-17',
    topic: 'Signals',
    prompt: {
      es: 'Si una signal guarda un objeto y se modifica una de sus propiedades en el sitio, ¿por qué no se refresca la plantilla?',
      en: 'If a signal holds an object and one of its properties is modified in place, why does the template not refresh?',
    },
    answer: {
      es: 'Porque la referencia no cambió y la igualdad por defecto Object.is la considera el mismo valor; hay que escribir un objeto nuevo, por ejemplo con update(u => ({ ...u, nombre })).',
      en: 'Because the reference did not change and the default Object.is equality treats it as the same value; you must write a new object, for example with update(u => ({ ...u, name })).',
    },
    distractors: [
      {
        es: 'Porque para los cambios en el sitio hay que usar el método mutate de la signal, que es el que notifica a los consumidores tras una mutación.',
        en: 'Because in-place changes require the mutate method of the signal, which is the one that notifies consumers after a mutation.',
      },
      {
        es: 'Porque la signal guarda una copia defensiva del objeto al escribirlo, de modo que la mutación se aplica sobre una referencia distinta a la almacenada.',
        en: 'Because the signal stores a defensive copy of the object when writing it, so the mutation is applied on a reference different from the stored one.',
      },
    ],
    explanation: {
      es: 'La signal no observa el interior del objeto: solo compara el valor escrito con el anterior, y una mutación ni siquiera pasa por set. mutate existió durante la developer preview y fue retirado antes de que las signals se estabilizaran en Angular 17, precisamente por este problema. Tampoco hay copias defensivas: la referencia almacenada es la misma que se pasó, por eso la mutación sí queda en memoria aunque la vista no se entere.',
      en: 'The signal does not observe the inside of the object: it only compares the written value with the previous one, and a mutation does not even go through set. mutate existed during the developer preview and was removed before signals became stable in Angular 17, precisely because of this problem. There are no defensive copies either: the stored reference is the same one that was passed in, which is why the mutation does land in memory even though the view never notices.',
    },
  },
  {
    id: 'fe-sig-18',
    topic: 'Signals',
    prompt: {
      es: '¿Por qué computed devuelve una signal de solo lectura y cómo se modela un estado derivado que también deba poder escribirse?',
      en: 'Why does computed return a read-only signal and how do you model derived state that must also be writable?',
    },
    answer: {
      es: 'Porque su valor es una función pura de sus dependencias y escribirlo lo dejaría incoherente al primer recálculo; el derivado editable se modela con una signal escribible propia que se reinicia cuando cambia la fuente.',
      en: 'Because its value is a pure function of its dependencies and writing it would leave it inconsistent on the first recalculation; editable derived state is modelled with its own writable signal that resets when the source changes.',
    },
    distractors: [
      {
        es: 'Porque el resultado está memoizado, pero se puede habilitar la escritura pasando la opción allowWrites en el segundo parámetro de computed.',
        en: 'Because the result is memoised, but writing can be enabled by passing the allowWrites option in the second parameter of computed.',
      },
      {
        es: 'Porque solo se puede escribir desde un effect, siempre que se active la opción allowSignalWrites al crearlo.',
        en: 'Because it can only be written from an effect, provided the allowSignalWrites option is enabled when creating it.',
      },
    ],
    explanation: {
      es: 'El tipo de retorno de computed es Signal<T>, sin set ni update, y su único parámetro de opciones es equal: no existe ninguna bandera allowWrites. allowSignalWrites sí existe, pero es una opción de effect en Angular 17 que permite escribir en otras signals, nunca en el computed. El patrón de derivado escribible, del estilo de un valor por defecto que el usuario puede sobrescribir, se resolvió oficialmente con linkedSignal, incorporado en Angular 19.',
      en: 'The return type of computed is Signal<T>, with no set or update, and its only options parameter is equal: there is no allowWrites flag. allowSignalWrites does exist, but it is an effect option in Angular 17 that permits writing to other signals, never to the computed itself. The writable derived pattern, such as a default value the user can override, was officially solved with linkedSignal, added in Angular 19.',
    },
  },
  {
    id: 'fe-sig-19',
    topic: 'Signals',
    prompt: {
      es: '¿Qué gana un store de estado basado en signals frente a uno construido con BehaviorSubject?',
      en: 'What does a signal-based state store gain over one built with BehaviorSubject?',
    },
    answer: {
      es: 'El estado se lee de forma síncrona sin suscripciones que gestionar, los derivados son computed memoizados y la plantilla consume los valores sin AsyncPipe.',
      en: 'State is read synchronously with no subscriptions to manage, derived values are memoised computed signals and the template consumes them without AsyncPipe.',
    },
    distractors: [
      {
        es: 'Gestiona mejor los flujos asíncronos, porque las signals incluyen operadores para cancelar peticiones en vuelo cuando llega un valor nuevo.',
        en: 'It handles asynchronous flows better, because signals include operators to cancel in-flight requests when a new value arrives.',
      },
      {
        es: 'Permite leer el valor actual en cualquier momento, algo imposible con un BehaviorSubject, que solo entrega los valores a través de la suscripción.',
        en: 'It allows reading the current value at any time, which is impossible with a BehaviorSubject, since it only delivers values through the subscription.',
      },
    ],
    explanation: {
      es: 'La ventaja real es ergonómica: desaparecen takeUntilDestroyed, los combineLatest para derivar y las fugas por suscripciones olvidadas, y la memoización de computed evita recalcular selectores en cada ciclo. Un BehaviorSubject sí expone el valor actual con getValue, así que esa no es la diferencia. Lo que las signals no traen es un lenguaje de operadores: cancelar peticiones sigue siendo territorio de switchMap, por lo que un store realista combina ambos mundos.',
      en: 'The real advantage is ergonomic: takeUntilDestroyed, combineLatest for derivations and leaks from forgotten subscriptions all disappear, and computed memoisation avoids recomputing selectors on every cycle. A BehaviorSubject does expose its current value through getValue, so that is not the difference. What signals do not bring is an operator language: cancelling requests is still switchMap territory, which is why a realistic store combines both worlds.',
    },
  },
  {
    id: 'fe-sig-20',
    topic: 'Signals',
    prompt: {
      es: 'En Angular 17, ¿cuál es la forma recomendada de llevar a la plantilla el resultado de una búsqueda remota que depende de filtros reactivos?',
      en: 'In Angular 17, what is the recommended way to bring the result of a remote search that depends on reactive filters into the template?',
    },
    answer: {
      es: 'Modelar el flujo con RxJS, convirtiendo los filtros con toObservable y encadenando debounceTime y switchMap, y exponer el resultado a la plantilla con toSignal.',
      en: 'Model the flow with RxJS, converting the filters with toObservable and chaining debounceTime and switchMap, then expose the result to the template with toSignal.',
    },
    distractors: [
      {
        es: 'Llamar al servicio dentro de un effect que lee los filtros y guardar la respuesta con set, ya que los effects están pensados para sincronizar con sistemas externos.',
        en: 'Call the service inside an effect that reads the filters and store the response with set, since effects are meant for syncing with external systems.',
      },
      {
        es: 'Envolver la llamada HTTP directamente con toSignal, porque toSignal vuelve a suscribirse y cancela la petición anterior cada vez que cambian los filtros.',
        en: 'Wrap the HTTP call directly with toSignal, because toSignal resubscribes and cancels the previous request every time the filters change.',
      },
    ],
    explanation: {
      es: 'Las signals modelan estado síncrono, no procesos: la cancelación, el reintento y el antirrebote siguen siendo de RxJS, y toSignal es solo el puente final hacia la vista. El effect tienta porque reacciona a los filtros, pero no cancela peticiones, provoca condiciones de carrera y en Angular 17 exige allowSignalWrites para guardar el resultado. Y toSignal se suscribe una sola vez: no vuelve a suscribirse cuando cambia un valor externo. El equipo de Angular cubrió después este caso con la API resource, presentada como experimental en la versión 19.',
      en: 'Signals model synchronous state, not processes: cancellation, retries and debouncing still belong to RxJS, and toSignal is only the final bridge to the view. The effect is tempting because it reacts to the filters, but it does not cancel requests, it causes race conditions and in Angular 17 it requires allowSignalWrites to store the result. And toSignal subscribes only once: it does not resubscribe when an external value changes. The Angular team later covered this case with the resource API, introduced as experimental in version 19.',
    },
  },
];
