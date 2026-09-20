import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_CHANGE_DETECTION_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-cd-01',
    topic: 'Deteccion de cambios',
    prompt: {
      es: '¿Qué dispara un ciclo de detección de cambios y qué papel tiene Zone.js al parchear las APIs asíncronas?',
      en: 'What triggers a change detection cycle and what role does Zone.js play by patching async APIs?',
    },
    answer: {
      es: 'Zone.js parchea setTimeout, Promises, addEventListener y XHR; al terminar esos callbacks Angular programa ApplicationRef.tick y recorre el árbol.',
      en: 'Zone.js patches setTimeout, Promises, addEventListener and XHR; when those callbacks finish Angular schedules ApplicationRef.tick and walks the tree.',
    },
    distractors: [
      {
        es: 'Zone.js solo parchea HTTP y timers; los eventos DOM como click no entran en la zona y hay que llamar a markForCheck a mano.',
        en: 'Zone.js only patches HTTP and timers; DOM events such as click do not enter the zone and you must call markForCheck by hand.',
      },
      {
        es: 'Zone.js sustituye el event loop del navegador para que cada microtarea ejecute detectChanges solo en el componente que la originó.',
        en: 'Zone.js replaces the browser event loop so that every microtask runs detectChanges only on the component that started it.',
      },
    ],
    explanation: {
      es: 'En Angular 17 con zone.js 0.14, NgZone escucha onMicrotaskEmpty tras las macrotareas y microtareas parcheadas y entonces llama a ApplicationRef.tick. Eventos, temporizadores, XHR y promesas quedan cubiertos; no es un recorrido local con detectChanges. Sin Zone.js (ngZone: noop) esos disparadores automáticos desaparecen.',
      en: 'In Angular 17 with zone.js 0.14, NgZone listens to onMicrotaskEmpty after patched macrotasks and microtasks and then calls ApplicationRef.tick. Events, timers, XHR and promises are all covered; it is not a local detectChanges walk. Without Zone.js (ngZone: noop) those automatic triggers disappear.',
    },
  },
  {
    id: 'fe-cd-02',
    topic: 'Deteccion de cambios',
    prompt: {
      es: '¿Cuál es el papel de ApplicationRef.tick en la detección de cambios?',
      en: 'What is the role of ApplicationRef.tick in change detection?',
    },
    answer: {
      es: 'Es el punto de entrada que ejecuta un ciclo completo desde la raíz, revisando cada vista que no esté detached ni saltada por OnPush.',
      en: 'It is the entry point that runs a full cycle from the root, checking every view that is not detached or skipped by OnPush.',
    },
    distractors: [
      {
        es: 'Solo refresca el componente que lo invocó, equivalente a ChangeDetectorRef.detectChanges sobre esa vista.',
        en: 'It only refreshes the component that invoked it, equivalent to ChangeDetectorRef.detectChanges on that view.',
      },
      {
        es: 'Marca todo el árbol como sucio y espera al siguiente evento de Zone.js antes de comprobar los bindings.',
        en: 'It marks the whole tree dirty and waits for the next Zone.js event before checking bindings.',
      },
    ],
    explanation: {
      es: 'tick es síncrono y recorre desde ApplicationRef; NgZone lo dispara cuando la zona se queda vacía. No equivale a detectChanges, que es local a una vista. Invocarlo desde dentro de un ciclo puede provocar ExpressionChangedAfterItHasBeenCheckedError.',
      en: 'tick is synchronous and walks from ApplicationRef; NgZone fires it when the zone becomes empty. It is not equivalent to detectChanges, which is local to one view. Invoking it from inside a cycle can raise ExpressionChangedAfterItHasBeenCheckedError.',
    },
  },
  {
    id: 'fe-cd-03',
    topic: 'Deteccion de cambios',
    prompt: {
      es: '¿Qué revisa la estrategia Default partiendo de la raíz?',
      en: 'What does the Default strategy check starting from the root?',
    },
    answer: {
      es: 'Visita cada componente desde la raíz y reevalúa todos los bindings de plantilla en cada ciclo, aunque ningún @Input haya cambiado.',
      en: 'It visits every component from the root and reevaluates all template bindings on each cycle, even if no @Input has changed.',
    },
    distractors: [
      {
        es: 'Solo reevalúa los bindings de componentes cuya referencia de @Input cambió, igual que OnPush pero empezando en la raíz.',
        en: 'It only reevaluates bindings of components whose @Input reference changed, same as OnPush but starting at the root.',
      },
      {
        es: 'Compara cada propiedad con el ciclo anterior usando Object.is y salta la vista cuando todos los valores coinciden.',
        en: 'It compares each property with the previous cycle using Object.is and skips the view when every value matches.',
      },
    ],
    explanation: {
      es: 'ChangeDetectionStrategy.Default (CheckAlways) no omite vistas por identidad de inputs; sigue siendo el valor por defecto de @Component en Angular 17. OnPush equivale a CheckOnce hasta que la vista se marca sucia. El recorrido sí respeta ChangeDetectorRef.detach.',
      en: 'ChangeDetectionStrategy.Default (CheckAlways) does not skip views based on input identity; it remains the default of @Component in Angular 17. OnPush is CheckOnce until the view is marked dirty. The walk does honour ChangeDetectorRef.detach.',
    },
  },
  {
    id: 'fe-cd-04',
    topic: 'Deteccion de cambios',
    prompt: {
      es: 'Si un componente OnPush se salta pero su padre sigue revisándose, ¿qué consecuencias tiene?',
      en: 'If an OnPush component is skipped but its parent keeps being checked, what are the consequences?',
    },
    answer: {
      es: 'Los bindings del hijo OnPush quedan congelados aunque el padre recalcule y pase el mismo objeto; el padre y los hermanos Default sí se actualizan.',
      en: 'Bindings of the OnPush child stay frozen even if the parent recomputes and passes the same object; the parent and Default siblings do update.',
    },
    distractors: [
      {
        es: 'Saltar al hijo hace que Angular trate la rama como estable y el padre también se omita en el ciclo siguiente.',
        en: 'Skipping the child makes Angular treat the branch as stable so the parent is also omitted on the next cycle.',
      },
      {
        es: 'El padre no puede entregar nuevos @Input hasta que el hijo llame a markForCheck, así que el subárbol queda bloqueado.',
        en: 'The parent cannot deliver new @Input values until the child calls markForCheck, so the subtree is blocked.',
      },
    ],
    explanation: {
      es: 'OnPush solo decide si ESA vista se comprueba; un padre Default sigue recorriéndose en cada ApplicationRef.tick. Los nietos del OnPush tampoco se visitan en ese ciclo. Una mutación del objeto compartido no marca al hijo: hace falta nueva referencia, un evento de su plantilla, AsyncPipe o markForCheck.',
      en: 'OnPush only decides whether THAT view is checked; a Default parent is still visited on every ApplicationRef.tick. Grandchildren of the OnPush view are not visited in that cycle either. Mutating the shared object does not mark the child: you need a new reference, an event from its template, AsyncPipe or markForCheck.',
    },
  },
  {
    id: 'fe-cd-05',
    topic: 'Deteccion de cambios',
    prompt: {
      es: '¿Cómo consigue AsyncPipe actualizar un componente OnPush?',
      en: 'How does AsyncPipe manage to update an OnPush component?',
    },
    answer: {
      es: 'Cuando el Observable o la Promise emite, AsyncPipe llama a markForCheck en la vista actual para que OnPush entre en el próximo ciclo.',
      en: 'When the Observable or Promise emits, AsyncPipe calls markForCheck on the current view so OnPush is included in the next cycle.',
    },
    distractors: [
      {
        es: 'AsyncPipe llama a detectChanges en cada emisión, forzando una revisión síncrona local que ignora las reglas de OnPush.',
        en: 'AsyncPipe calls detectChanges on every emission, forcing a local synchronous check that ignores OnPush rules.',
      },
      {
        es: 'AsyncPipe sustituye la referencia del @Input en el padre, que es el único mecanismo que OnPush entiende.',
        en: 'AsyncPipe replaces the @Input reference on the parent, which is the only mechanism OnPush understands.',
      },
    ],
    explanation: {
      es: 'AsyncPipe implementa PipeTransform y OnDestroy; en cada next o then guarda el valor y llama a ChangeDetectorRef.markForCheck. No usa detectChanges, así evita ciclos anidados y ExpressionChangedAfterItHasBeenCheckedError. Por eso el pipe async en plantilla es la forma idiomática de mantener vivas las vistas OnPush en Angular 17.',
      en: 'AsyncPipe implements PipeTransform and OnDestroy; on each next or then it stores the value and calls ChangeDetectorRef.markForCheck. It does not use detectChanges, which avoids nested cycles and ExpressionChangedAfterItHasBeenCheckedError. That is why the async pipe in the template is the idiomatic way to keep OnPush views live in Angular 17.',
    },
  },
  {
    id: 'fe-cd-06',
    topic: 'Deteccion de cambios',
    prompt: {
      es: '¿Cuál es un caso de uso típico de detach y reattach del ChangeDetectorRef?',
      en: 'What is a typical use case of ChangeDetectorRef detach and reattach?',
    },
    answer: {
      es: 'Sacar temporalmente una vista del árbol mientras llegan actualizaciones de alta frecuencia que no deben pintar, y volver a engancharla cuando el estado sí deba mostrarse.',
      en: 'Temporarily take a view out of the tree while high-frequency updates that should not paint arrive, and attach it again when the state must be shown.',
    },
    distractors: [
      {
        es: 'Convertir en tiempo de ejecución un componente Default en OnPush sin tocar ChangeDetectionStrategy en el decorador.',
        en: 'Convert a Default component into OnPush at runtime without touching ChangeDetectionStrategy in the decorator.',
      },
      {
        es: 'Pausar el parcheo de Zone.js en ese componente para que setTimeout y los eventos dejen de programar ApplicationRef.tick.',
        en: 'Pause Zone.js patching for that component so setTimeout and events stop scheduling ApplicationRef.tick.',
      },
    ],
    explanation: {
      es: 'detach marca la vista como detached: ni tick ni el padre la visitan. Luego se llama a detectChanges para un snapshot o a reattach para restaurar las comprobaciones automáticas. Un ticker, un canvas o un log en vivo son el caso típico. No cambia la estrategia ni toca NgZone: el resto de la app sigue detectando con normalidad.',
      en: 'detach marks the view as detached: neither tick nor the parent visits it. You then call detectChanges for a snapshot or reattach to restore automatic checks. A ticker, a canvas or a live log is the typical case. It does not change the strategy and it does not touch NgZone: the rest of the app still detects as usual.',
    },
  },
  {
    id: 'fe-cd-07',
    topic: 'Deteccion de cambios',
    prompt: {
      es: '¿Qué causa ExpressionChangedAfterItHasBeenCheckedError y por qué solo aparece en desarrollo?',
      en: 'What causes ExpressionChangedAfterItHasBeenCheckedError and why does it appear only in development?',
    },
    answer: {
      es: 'Un binding cambia de valor después de que Angular ya comprobó esa vista en el mismo ciclo; el modo desarrollo hace una segunda pasada de verificación y lanza el error si algo difiere.',
      en: 'A binding changes value after Angular has already checked that view in the same cycle; development mode runs a second verification pass and throws if anything differs.',
    },
    distractors: [
      {
        es: 'Un binding lee una signal o un Observable que aún no ha emitido; producción oculta el error porque desactiva el type checking de plantillas.',
        en: 'A binding reads a signal or an Observable that has not emitted yet; production hides the error because it disables template type checking.',
      },
      {
        es: 'Un hijo OnPush actualiza un @Input del padre en ngOnInit; producción lo ignora porque OnPush omite la pasada de verificación.',
        en: 'An OnPush child updates a parent @Input in ngOnInit; production ignores it because OnPush skips the verification pass.',
      },
    ],
    explanation: {
      es: 'Tras comprobar una vista, Angular guarda los valores de binding. Con ngDevMode (o isDevMode) ApplicationRef.tick ejecuta checkNoChanges y, si un valor cambió, lanza ExpressionChangedAfterItHasBeenCheckedError. enableProdMode elimina esa pasada: el frame sucio se pinta y se corrige en el siguiente evento. Causas clásicas: efectos en ngAfterViewInit, un getter que muta o detectChanges en el hook equivocado.',
      en: 'After checking a view, Angular stores binding values. With ngDevMode (or isDevMode) ApplicationRef.tick runs checkNoChanges and, if a value changed, throws ExpressionChangedAfterItHasBeenCheckedError. enableProdMode removes that pass: the stale frame is painted and corrected on the next event. Classic causes: side effects in ngAfterViewInit, a getter that mutates, or detectChanges in the wrong hook.',
    },
  },
  {
    id: 'fe-cd-08',
    topic: 'Deteccion de cambios',
    prompt: {
      es: '¿Por qué en modo desarrollo la detección de cambios corre dos veces?',
      en: 'Why does change detection run twice in development mode?',
    },
    answer: {
      es: 'La segunda pasada es un ciclo de verificación que compara cada binding con el valor registrado en la primera para detectar expresiones inestables.',
      en: 'The second pass is a verification cycle that compares each binding with the value recorded in the first pass to detect unstable expressions.',
    },
    distractors: [
      {
        es: 'La primera pasada actualiza los componentes Default y la segunda queda reservada a las vistas OnPush que se marcaron sucias.',
        en: 'The first pass updates Default components and the second is reserved for OnPush views that were marked dirty.',
      },
      {
        es: 'Zone.js emite onMicrotaskEmpty dos veces en desarrollo para que las Promises resueltas durante el primer tick reciban un segundo pintado.',
        en: 'Zone.js emits onMicrotaskEmpty twice in development so Promises resolved during the first tick get a second paint.',
      },
    ],
    explanation: {
      es: 'La configuración de producción de Angular 17 (enableProdMode / fileReplacements) elimina la pasada extra de checkNoChanges. Esa doble comprobación es la que saca a la luz ExpressionChangedAfterItHasBeenCheckedError. No es un segundo giro de Zone.js: ambas pasadas ocurren dentro del mismo ApplicationRef.tick, y por eso el modo desarrollo se siente más lento.',
      en: 'The Angular 17 production configuration (enableProdMode / fileReplacements) removes the extra checkNoChanges pass. That double check is what surfaces ExpressionChangedAfterItHasBeenCheckedError. It is not a second Zone.js turn: both passes happen inside the same ApplicationRef.tick, which is why development mode feels slower.',
    },
  },
  {
    id: 'fe-cd-09',
    topic: 'Deteccion de cambios',
    prompt: {
      es: '¿Cuál es el costo de una llamada a función en la plantilla frente a un pipe puro?',
      en: 'What is the cost of a function call in the template compared with a pure pipe?',
    },
    answer: {
      es: 'La función se ejecuta en cada ciclo de detección de esa vista, mientras que un pipe puro solo se recalcula si cambian por referencia sus argumentos.',
      en: 'The function runs on every detection cycle of that view, whereas a pure pipe is recomputed only when its arguments change by reference.',
    },
    distractors: [
      {
        es: 'La función se compila como un getter que ensucia la vista, y el pipe puro corre fuera de NgZone y nunca redispara tick.',
        en: 'The function is compiled as a getter that dirties the view, and the pure pipe runs outside NgZone and never retriggers tick.',
      },
      {
        es: 'Angular memoiza el resultado de la función por tipo de plantilla, pero el pipe puro se reejecuta cuando cambia cualquier binding hermano.',
        en: 'Angular memoises the function result per template type, but the pure pipe is re-executed whenever any sibling binding changes.',
      },
    ],
    explanation: {
      es: 'Tanto Default como OnPush reevalúan {{ format(user) }} o [class]="isActive()" cada vez que la vista se comprueba. Un @Pipe con pure: true (el valor por defecto desde Angular 2) cachea los últimos argumentos con === y se salta transform. En el profiler de Angular DevTools esas llamadas suelen ser el hotspot de una lista grande.',
      en: 'Both Default and OnPush reevaluate {{ format(user) }} or [class]="isActive()" whenever the view is checked. A @Pipe with pure: true (the default since Angular 2) caches the last arguments with === and skips transform. In the Angular DevTools profiler those calls are often the hotspot of a large list.',
    },
  },
  {
    id: 'fe-cd-10',
    topic: 'Deteccion de cambios',
    prompt: {
      es: '¿Cuál es el comportamiento y el costo de un pipe impuro?',
      en: 'What is the behaviour and cost of an impure pipe?',
    },
    answer: {
      es: 'Ejecuta transform en cada ciclo de detección, sin importar si sus argumentos cambiaron, así puede mostrar valores nuevos de entradas mutables a costa de trabajo extra en cada tick.',
      en: 'It runs transform on every detection cycle, ignoring whether its arguments changed, so it can display new values from mutable inputs at the cost of extra work on each tick.',
    },
    distractors: [
      {
        es: 'Se ejecuta una vez por macrotarea, agrupado por NgZone.onMicrotaskEmpty, y por eso es más barato que un pipe puro que compara argumentos en cada ciclo.',
        en: 'It runs once per macrotask, batched by NgZone.onMicrotaskEmpty, and is therefore cheaper than a pure pipe that compares arguments on every cycle.',
      },
      {
        es: 'Se suscribe por dentro a su entrada y llama a markForCheck, de modo que solo cuesta lo mismo que un AsyncPipe.',
        en: 'It subscribes internally to its input and calls markForCheck, so it only costs as much as an AsyncPipe.',
      },
    ],
    explanation: {
      es: '@Pipe({ pure: false }) es la declaración de AsyncPipe y de KeyValuePipe; la mayoría de los impuros no observan nada, solo reejecutan transform. En una lista de cientos de filas el costo se multiplica en cada ApplicationRef.tick. En Angular 17 conviene una referencia nueva más un pipe puro, o un computed de signals.',
      en: '@Pipe({ pure: false }) is how AsyncPipe and KeyValuePipe are declared; most impure pipes do not observe anything, they just re-execute transform. On a list of hundreds of rows the cost multiplies on every ApplicationRef.tick. In Angular 17 prefer a new reference plus a pure pipe, or a computed signal.',
    },
  },
  {
    id: 'fe-cd-11',
    topic: 'Deteccion de cambios',
    prompt: {
      es: '¿Para qué se usan NgZone.onMicrotaskEmpty e isStable?',
      en: 'What are NgZone.onMicrotaskEmpty and isStable used for?',
    },
    answer: {
      es: 'onMicrotaskEmpty emite cuando el turno actual ya no tiene microtareas, que es cuando Angular suele llamar a tick; isStable es true cuando no queda trabajo pendiente en la zona.',
      en: 'onMicrotaskEmpty emits when the current turn has no more microtasks, which is when Angular usually calls tick; isStable is true when no further zone work is pending.',
    },
    distractors: [
      {
        es: 'onMicrotaskEmpty sustituye a ApplicationRef.tick en modo sin zona, e isStable es la bandera que OnPush lee para saltarse la vista.',
        en: 'onMicrotaskEmpty replaces ApplicationRef.tick in zoneless mode, and isStable is the flag that OnPush reads to skip the view.',
      },
      {
        es: 'onMicrotaskEmpty se dispara después de cada detectChanges, e isStable solo pasa a true cuando el desarrollador llama a NgZone.run.',
        en: 'onMicrotaskEmpty fires after every detectChanges, and isStable becomes true only after the developer calls NgZone.run.',
      },
    ],
    explanation: {
      es: 'NgZone.onMicrotaskEmpty es el gancho interno con el que Zone.js programa la detección. NgZone.isStable es un boolean y ApplicationRef.isStable es un Observable; sirven para diferir trabajo hasta que la UI esté quieta, por ejemplo tests de captura o mediciones de pintado. No refrescan por sí solos una vista OnPush. Los streams compañeros son onStable y onUnstable.',
      en: 'NgZone.onMicrotaskEmpty is the internal hook Zone.js uses to schedule detection. NgZone.isStable is a boolean and ApplicationRef.isStable is an Observable; they are useful to delay work until the UI is quiet, for example screenshot tests or paint measurements. They do not by themselves refresh an OnPush view. Companion streams are onStable and onUnstable.',
    },
  },
  {
    id: 'fe-cd-12',
    topic: 'Deteccion de cambios',
    prompt: {
      es: 'En una aplicación sin Zone.js, ¿qué reemplaza a los disparadores automáticos de detección?',
      en: 'In an application without Zone.js, what replaces the automatic detection triggers?',
    },
    answer: {
      es: 'Hay que avisar a Angular a mano con ApplicationRef.tick, markForCheck o detectChanges, porque las APIs asíncronas ya no programan ciclos.',
      en: 'You must notify Angular by hand with ApplicationRef.tick, markForCheck or detectChanges, because async APIs no longer schedule cycles.',
    },
    distractors: [
      {
        es: 'Angular 17 pasa solo a un bucle de requestAnimationFrame que llama a tick sesenta veces por segundo sin Zone.js.',
        en: 'Angular 17 switches by itself to a requestAnimationFrame loop that calls tick sixty times per second without Zone.js.',
      },
      {
        es: 'bootstrapApplication con ngZone noop sigue detectando en cada evento DOM porque el renderer registra sus propios listeners.',
        en: 'bootstrapApplication with ngZone noop still detects on every DOM event because the renderer registers its own listeners.',
      },
    ],
    explanation: {
      es: 'En Angular 17 se pasa ngZone: noop al bootstrapApplication (o al platformBrowserDynamic). setTimeout, click y HTTP dejan de llamar a tick. Las signals marcan la vista sucia al escribir, pero sin zona aún hace falta un tick explícito. provideExperimentalZonelessChangeDetection llega en Angular 18 como reemplazo dedicado.',
      en: 'In Angular 17 you pass ngZone: noop to bootstrapApplication (or to platformBrowserDynamic). setTimeout, click and HTTP stop calling tick. Signals mark the view dirty on write, but without the zone an explicit tick is still required. provideExperimentalZonelessChangeDetection arrives in Angular 18 as the dedicated replacement.',
    },
  },
  {
    id: 'fe-cd-13',
    topic: 'Deteccion de cambios',
    prompt: {
      es: '¿Por qué se vuelve a entrar a la zona con NgZone.run después del callback de una librería externa?',
      en: 'Why do you re-enter the zone with NgZone.run after a callback from an external library?',
    },
    answer: {
      es: 'La librería ejecutó fuera de la zona de Angular, así que terminar el callback no programa tick; NgZone.run reentra y deja que la detección recoja el estado nuevo.',
      en: 'The library ran outside the Angular zone, so finishing the callback does not schedule tick; NgZone.run re-enters and lets detection pick up the new state.',
    },
    distractors: [
      {
        es: 'NgZone.run pone el callback en una cola de microtareas que los componentes OnPush escuchan, única forma de actualizarlos desde código de terceros.',
        en: 'NgZone.run puts the callback on a microtask queue that OnPush components listen to, the only way to update them from third-party code.',
      },
      {
        es: 'NgZone.run evita ExpressionChangedAfterItHasBeenCheckedError cuando el widget muta el DOM durante ngAfterViewInit.',
        en: 'NgZone.run avoids ExpressionChangedAfterItHasBeenCheckedError when the widget mutates the DOM during ngAfterViewInit.',
      },
    ],
    explanation: {
      es: 'SDKs de mapas, charts o WebSocket suelen usar su propio addEventListener después de runOutsideAngular, o nunca fueron parcheados. Asignar this.data = payload ahí deja la vista intacta. NgZone.run(() => { ... }) o un ApplicationRef.tick posterior restauran el ciclo. La API inversa es runOutsideAngular, para eventos frecuentes que no deben disparar tick.',
      en: 'Map, chart or WebSocket SDKs often use their own addEventListener after runOutsideAngular, or they were never patched. Assigning this.data = payload there leaves the view stale. NgZone.run(() => { ... }) or a later ApplicationRef.tick restore the cycle. The inverse API is runOutsideAngular, for frequent events that should not fire tick.',
    },
  },
  {
    id: 'fe-cd-14',
    topic: 'Deteccion de cambios',
    prompt: {
      es: 'Un setTimeout dentro de un componente OnPush asigna un campo y la vista no se refresca. ¿Cómo se arregla?',
      en: 'A setTimeout inside an OnPush component assigns a field and the view does not refresh. How is it fixed?',
    },
    answer: {
      es: 'Hay que llamar a markForCheck o detectChanges tras asignar, porque un timer no cuenta como evento de la plantilla y OnPush saltará la vista.',
      en: 'You must call markForCheck or detectChanges after assigning, because a timer does not count as a template event and OnPush will skip the view.',
    },
    distractors: [
      {
        es: 'Sustituir setTimeout por NgZone.runOutsideAngular para que la asignación ocurra sin un tick anidado que OnPush ignora.',
        en: 'Replace setTimeout with NgZone.runOutsideAngular so the assignment happens without a nested tick that OnPush ignores.',
      },
      {
        es: 'El timer debe crearse con AsyncPipe en la plantilla; cualquier setTimeout en la clase se ignora hasta que el componente sea Default.',
        en: 'The timer must be created with AsyncPipe in the template; any setTimeout in the class is ignored until the component is Default.',
      },
    ],
    explanation: {
      es: 'Zone.js sí programa ApplicationRef.tick al vencer el timer, pero las vistas OnPush no marcadas como sucias se omiten. Un (click) en plantilla marca el componente; un setTimeout en la clase no. ChangeDetectorRef.markForCheck dentro del callback, detectChanges, o guardar el valor en una signal / AsyncPipe lo corrigen en Angular 17.',
      en: 'Zone.js does schedule ApplicationRef.tick when the timer fires, but OnPush views that were not marked dirty are skipped. A (click) in the template marks the component; a setTimeout in the class does not. ChangeDetectorRef.markForCheck inside the callback, detectChanges, or storing the value in a signal / AsyncPipe fix it in Angular 17.',
    },
  },
  {
    id: 'fe-cd-15',
    topic: 'Deteccion de cambios',
    prompt: {
      es: 'El padre muta una propiedad del objeto pasado como @Input. ¿Por qué el hijo OnPush no se actualiza?',
      en: 'The parent mutates a property of the object passed as @Input. Why does the OnPush child not update?',
    },
    answer: {
      es: 'OnPush compara los inputs por referencia; mutar el mismo objeto deja la referencia igual, así que el hijo no se marca sucio.',
      en: 'OnPush compares inputs by reference; mutating the same object leaves the reference unchanged, so the child is not marked dirty.',
    },
    distractors: [
      {
        es: 'OnPush congela el input con Object.freeze, de modo que las mutaciones en el padre lanzan en desarrollo y se ignoran en producción.',
        en: 'OnPush freezes the input with Object.freeze, so mutations in the parent throw in development and are ignored in production.',
      },
      {
        es: 'ngOnChanges sí se dispara, pero la plantilla de un hijo OnPush solo se enlaza en el primer cambio (firstChange true).',
        en: 'ngOnChanges does fire, but the template of an OnPush child is bound only on the first change (firstChange true).',
      },
    ],
    explanation: {
      es: 'Con Default el hijo se revisaría igual y leería user.name mutado. Con OnPush la vista se salta y ngOnChanges no corre sin una referencia nueva. El padre debe pasar un objeto nuevo, por ejemplo { ...user, name }. markForCheck desde el padre o un input() signal (Angular 17.1) son alternativas si se insiste en mutar.',
      en: 'With Default the child would still be checked and would read the mutated user.name. With OnPush the view is skipped and ngOnChanges does not run without a new reference. The parent should pass a new object, for example { ...user, name }. markForCheck from the parent or an input() signal (Angular 17.1) are alternatives if you insist on mutating.',
    },
  },
  {
    id: 'fe-cd-16',
    topic: 'Deteccion de cambios',
    prompt: {
      es: '¿Por qué los datos inmutables son la práctica recomendada junto a OnPush?',
      en: 'Why is immutable data the recommended practice together with OnPush?',
    },
    answer: {
      es: 'Reemplazar objetos y arrays por referencias nuevas es la señal de sucio que OnPush entiende, así las actualizaciones son predecibles sin markForCheck manual.',
      en: 'Replacing objects and arrays with new references is the dirty signal that OnPush understands, so updates stay predictable without manual markForCheck.',
    },
    distractors: [
      {
        es: 'OnPush solo acepta @Input readonly; pasar un objeto mutable es error de compilación con strictTemplates en Angular 17.',
        en: 'OnPush only accepts readonly @Input types; passing a mutable object is a compile error with strictTemplates in Angular 17.',
      },
      {
        es: 'Las estructuras inmutables hacen que se salte el padre Default, de modo que la detección empieza en la hoja OnPush y cuesta menos.',
        en: 'Immutable structures skip the Default parent, so detection starts at the OnPush leaf and costs less.',
      },
    ],
    explanation: {
      es: 'NgRx Store 17 emite un objeto de estado nuevo por acción, contrato que encaja directo con OnPush. Mutar y usar OnPush es el bug clásico de vista congelada. La inmutabilidad no omite al padre ni es un requisito del compilador: es el acuerdo para que === baste como comprobación.',
      en: 'NgRx Store 17 emits a new state object per action, a contract that fits OnPush directly. Mutation plus OnPush is the classic frozen-view bug. Immutability does not skip the parent and is not a compiler requirement: it is the agreement that === is enough as a check.',
    },
  },
  {
    id: 'fe-cd-17',
    topic: 'Deteccion de cambios',
    prompt: {
      es: '¿Por qué la detección sigue recorriendo los elementos de una lista aunque se use track?',
      en: 'Why does detection still walk the elements of a list even when track is used?',
    },
    answer: {
      es: 'track (y trackBy) solo identifica nodos DOM para reutilizarlos cuando cambia la colección; cada vista embebida que permanece se sigue comprobando según su propia estrategia.',
      en: 'track (and trackBy) only identifies DOM nodes to reuse when the collection changes; each remaining embedded view is still checked according to its own strategy.',
    },
    distractors: [
      {
        es: 'track marca cada fila como OnPush de forma automática, así que solo se visita la identidad que cambió en el ciclo siguiente.',
        en: 'track marks every row OnPush automatically, so only the identity that changed is visited on the next cycle.',
      },
      {
        es: 'Con track Angular omite los bindings internos y solo mueve nodos; hay que llamar a detectChanges en el componente ítem para refrescar el texto.',
        en: 'With track Angular skips inner bindings and only moves nodes; you must call detectChanges on the item component to refresh the text.',
      },
    ],
    explanation: {
      es: '@for (item of items; track item.id) en Angular 17 (y ngFor trackBy antes) evita destruir y recrear el DOM de los ítems que conservan identidad. La detección de cambios sigue entrando en esas vistas. Para saltarse filas hace falta OnPush en el componente ítem y referencias inmutables. Confundir track con omitir CD es un mito habitual de rendimiento.',
      en: '@for (item of items; track item.id) in Angular 17 (and ngFor trackBy before it) avoids destroying and recreating DOM for items that kept their identity. Change detection still enters those views. To skip rows you need OnPush on the item component plus immutable item references. Confusing track with skipping CD is a common performance myth.',
    },
  },
  {
    id: 'fe-cd-18',
    topic: 'Deteccion de cambios',
    prompt: {
      es: '¿Por qué un HostListener dispara detección de cambios y cuál es su costo en eventos frecuentes?',
      en: 'Why does a HostListener trigger change detection and what is its cost on frequent events?',
    },
    answer: {
      es: 'El listener corre dentro de NgZone, así que cada evento programa un ApplicationRef.tick completo; en mousemove o scroll ese costo se paga decenas de veces por segundo para todo el árbol.',
      en: 'The listener runs inside NgZone, so each event schedules a full ApplicationRef.tick; on mousemove or scroll that cost is paid dozens of times per second for the whole tree.',
    },
    distractors: [
      {
        es: 'HostListener solo ensucia la vista anfitriona, igual que markForCheck, de modo que el costo permanece local incluso en eventos de alta frecuencia.',
        en: 'HostListener only dirties the host view, same as markForCheck, so the cost stays local even on high-frequency events.',
      },
      {
        es: 'HostListener se registra con runOutsideAngular por defecto; el costo viene de detectChanges que Angular llama en el anfitrión tras cada evento.',
        en: 'HostListener is registered with runOutsideAngular by default; the cost comes from detectChanges that Angular calls on the host after every event.',
      },
    ],
    explanation: {
      es: '@HostListener(window:scroll) sigue siendo un evento parcheado por Zone.js. Los componentes Default de toda la app se revisan, no solo el anfitrión. La corrección habitual es escuchar con NgZone.runOutsideAngular y luego NgZone.run o markForCheck cuando sí haga falta pintar, con throttle. Angular 17 no ofrece un HostListener sin zona; el bootstrap zoneless es la alternativa amplia.',
      en: '@HostListener(window:scroll) is still a Zone.js patched event. Default components across the app get checked, not only the host. The usual fix is to listen with NgZone.runOutsideAngular and then NgZone.run or markForCheck when a paint is actually needed, with throttle. Angular 17 has no zone-less HostListener; zoneless bootstrap is the broader alternative.',
    },
  },
  {
    id: 'fe-cd-19',
    topic: 'Deteccion de cambios',
    prompt: {
      es: '¿Qué estrategia de detección manual encaja en un componente que recibe muchos mensajes por WebSocket?',
      en: 'What manual detection strategy fits a component that receives many WebSocket messages?',
    },
    answer: {
      es: 'Separar la vista con detach o escuchar el socket fuera de la zona, y llamar a detectChanges o markForCheck solo cuando un payload agrupado deba pintarse.',
      en: 'Detach the view or listen to the socket outside the zone, and call detectChanges or markForCheck only when a batched payload should be painted.',
    },
    distractors: [
      {
        es: 'Pasar el componente a Default para que cada mensaje se pinte al instante sin tocar ChangeDetectorRef.',
        en: 'Switch the component to Default so every message is painted immediately without touching ChangeDetectorRef.',
      },
      {
        es: 'Mantener OnPush y confiar en que Zone.js parchea WebSocket y ya fusiona los mensajes en un solo tick por frame.',
        en: 'Keep OnPush and rely on Zone.js patching WebSocket, which already coalesces messages into a single tick per frame.',
      },
    ],
    explanation: {
      es: 'Aunque zone.js parchee WebSocket, inundar ApplicationRef.tick tira frames y además OnPush puede saltarse la vista si nadie llama a markForCheck. ChangeDetectorRef.detach más un detectChanges periódico, o runOutsideAngular con un markForCheck limitado, deja el resto de la app en paz. Default empeora el problema. Angular 17 no trae un pipe de WebSocket: AsyncPipe sobre un Observable con throttleTime es la variante de plantilla.',
      en: 'Even if zone.js patches WebSocket, flooding ApplicationRef.tick drops frames and OnPush may still skip the view if nobody calls markForCheck. ChangeDetectorRef.detach plus a periodic detectChanges, or runOutsideAngular with a throttled markForCheck, leaves the rest of the app idle. Default makes the problem worse. Angular 17 has no WebSocket pipe: AsyncPipe over an Observable with throttleTime is the template-friendly variant.',
    },
  },
  {
    id: 'fe-cd-20',
    topic: 'Deteccion de cambios',
    prompt: {
      es: '¿Cómo se diagnostica un problema de rendimiento de detección de cambios con el profiler de Angular DevTools?',
      en: 'How do you diagnose a change detection performance problem with the Angular DevTools profiler?',
    },
    answer: {
      es: 'Se graba una sesión en el profiler, se mira qué componentes se comprobaron en cada ciclo, cuánto tardaron y cuál fue la fuente (evento de zona, tick), para hallar ticks inesperados y plantillas caras.',
      en: 'You record a profiler session, inspect which components were checked on each cycle, how long they took and what the source was (zone event, tick), to find unexpected ticks and expensive templates.',
    },
    distractors: [
      {
        es: 'El profiler solo lista frames de ExpressionChangedAfterItHasBeenCheckedError; para tiempos hay que usar la pestaña Performance de Chrome con enableTracing.',
        en: 'The profiler only lists ExpressionChangedAfterItHasBeenCheckedError frames; for timings you must use the Chrome Performance tab with enableTracing.',
      },
      {
        es: 'Angular DevTools mide únicamente los saltos de OnPush; los componentes Default no aparecen porque se consideran siempre sucios.',
        en: 'Angular DevTools measures only OnPush skips; Default components do not appear because they are considered always dirty.',
      },
    ],
    explanation: {
      es: 'La extensión Angular DevTools (Angular 12 en adelante, plenamente usable con 17) tiene la pestaña Profiler: cada ciclo muestra la fuente (click, setTimeout, ApplicationRef.tick) y barras por componente. Ahí se ven funciones en plantilla, pipes impuros y padres que recorren subárboles enormes. Complementos de consola son ng.profiler.timeChangeDetection y enableDebugTools, pero la extensión es el flujo práctico.',
      en: 'The Angular DevTools extension (Angular 12 onward, fully usable with 17) has a Profiler tab: each cycle shows the source (click, setTimeout, ApplicationRef.tick) and bars per component. That is where template functions, impure pipes and parents walking huge subtrees show up. Console complements are ng.profiler.timeChangeDetection and enableDebugTools, but the extension is the practical workflow.',
    },
  },
];
