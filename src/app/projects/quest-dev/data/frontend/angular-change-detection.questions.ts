import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_CHANGE_DETECTION_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-cd-01',
    topic: 'Detección de cambios',
    prompt: {
      es: '¿Cómo funciona la detección de cambios en Angular?',
      en: 'How does change detection work in Angular?',
    },
    answer: {
      es: 'Angular recorre los componentes y actualiza el DOM donde los bindings de la plantilla cambiaron. Por defecto lo hace despues de un evento de usuario o de un trabajo asincrono.',
      en: 'Angular walks the components and updates the DOM where template bindings changed. By default it does this after a user event or after async work.',
    },
    distractors: [
      {
        es: 'Compara cada propiedad del componente con un deep equal y solo pinta las que difieren.',
        en: 'It deep-equals every component property and paints only the ones that differ.',
      },
      {
        es: 'El navegador avisa a Angular de cada cambio de variable de JavaScript, sin que la app haga nada.',
        en: 'The browser tells Angular about every JavaScript variable change, with the app doing nothing.',
      },
    ],
    explanation: {
      es: 'La estrategia por defecto revisa el arbol y OnPush acota que componentes entran en esa revision. Las signals permiten marcar solo la vista que leyo el valor.',
      en: 'The default strategy checks the tree and OnPush limits which components join that check. Signals can mark only the view that read the value.',
    },
  },
  {
    id: 'fe-cd-02',
    topic: 'OnPush',
    prompt: {
      es: '¿Qué diferencia hay entre la estrategia Default y OnPush?',
      en: 'What is the difference between the Default strategy and OnPush?',
    },
    answer: {
      es: 'Default revisa el componente en cada ciclo. OnPush lo salta salvo que haya un motivo para marcarlo, como un input con otra referencia, un evento de su plantilla o una signal que cambio.',
      en: 'Default checks the component on every cycle. OnPush skips it unless there is a reason to mark it, such as an input with a new reference, an event from its template or a signal that changed.',
    },
    distractors: [
      {
        es: 'OnPush compara cada campo por valor y Default solo mira la referencia del componente.',
        en: 'OnPush compares every field by value and Default only looks at the component reference.',
      },
      {
        es: 'Default esta en desuso y OnPush es obligatorio en standalone.',
        en: 'Default is deprecated and OnPush is mandatory on standalone components.',
      },
    ],
    explanation: {
      es: 'OnPush no desconecta el componente del arbol: solo cambia cuando se considera sucio. Mutar un objeto sin cambiar la referencia no basta.',
      en: 'OnPush does not disconnect the component from the tree: it only changes when the component is considered dirty. Mutating an object without changing the reference is not enough.',
    },
  },
  {
    id: 'fe-cd-03',
    topic: 'OnPush',
    prompt: {
      es: '¿Cuándo se actualiza un componente OnPush?',
      en: 'When does an OnPush component update?',
    },
    answer: {
      es: 'Cuando cambia la referencia de un input, cuando un evento sale de su plantilla, cuando una signal leida en la vista cambia, o cuando lo marcas a mano.',
      en: 'When an input reference changes, when an event comes from its template, when a signal read in the view changes, or when you mark it by hand.',
    },
    distractors: [
      {
        es: 'En cada ciclo, igual que Default. OnPush solo afecta a los hijos.',
        en: 'On every cycle, the same as Default. OnPush only affects the children.',
      },
      {
        es: 'Solo la primera vez. Despues hay que pasar el componente a Default para que vuelva a pintar.',
        en: 'Only the first time. After that you must switch the component to Default so it paints again.',
      },
    ],
    explanation: {
      es: 'El async pipe tambien lo marca cuando el observable emite. Un setTimeout en la clase, por sí solo, no cuenta como evento de la plantilla.',
      en: 'The async pipe also marks it when the observable emits. A setTimeout in the class, on its own, does not count as a template event.',
    },
  },
  {
    id: 'fe-cd-04',
    topic: 'ChangeDetectorRef',
    prompt: {
      es: '¿Qué diferencia hay entre markForCheck y detectChanges?',
      en: 'What is the difference between markForCheck and detectChanges?',
    },
    answer: {
      es: 'markForCheck marca el componente para que entre en el proximo ciclo. detectChanges revisa ese componente y sus hijos ahora mismo.',
      en: 'markForCheck marks the component so it joins the next cycle. detectChanges checks that component and its children right now.',
    },
    distractors: [
      {
        es: 'markForCheck revisa ya y detectChanges espera al siguiente evento de toda la aplicacion.',
        en: 'markForCheck checks immediately and detectChanges waits for the next event of the whole application.',
      },
      {
        es: 'Son iguales. markForCheck es solo el nombre nuevo de detectChanges.',
        en: 'They are the same. markForCheck is only the new name of detectChanges.',
      },
    ],
    explanation: {
      es: 'Con OnPush, markForCheck es lo habitual para que un callback asincrono refresque la vista en el siguiente pase. detectChanges fuerza el pase local y, mal usado, puede chocar con un binding que ya se comprobo.',
      en: 'With OnPush, markForCheck is the usual way for an async callback to refresh the view on the next pass. detectChanges forces the local pass and, used badly, can clash with a binding that was already checked.',
    },
  },
  {
    id: 'fe-cd-05',
    topic: 'Inmutabilidad',
    prompt: {
      es: '¿Por qué OnPush se lleva bien con datos inmutables?',
      en: 'Why does OnPush pair well with immutable data?',
    },
    answer: {
      es: 'Porque OnPush se entera del cambio cuando llega otra referencia. Si sustituyes el objeto o el array, el hijo se marca sin un markForCheck manual.',
      en: 'Because OnPush notices the change when a new reference arrives. If you replace the object or the array, the child is marked without a manual markForCheck.',
    },
    distractors: [
      {
        es: 'Porque OnPush lanza en compilacion si el input no es readonly.',
        en: 'Because OnPush fails compilation if the input is not readonly.',
      },
      {
        es: 'Porque un dato inmutable salta al padre y la deteccion empieza en el hijo, que es más barato.',
        en: 'Because immutable data skips the parent and detection starts at the child, which is cheaper.',
      },
    ],
    explanation: {
      es: 'Mutar y usar OnPush es el fallo clasico de la vista congelada. Copia el objeto con el campo nuevo y pasalo al input.',
      en: 'Mutating plus OnPush is the classic frozen view bug. Copy the object with the new field and pass that to the input.',
    },
  },
  {
    id: 'fe-cd-06',
    topic: 'Async pipe',
    prompt: {
      es: '¿Cómo ayuda el async pipe con la detección de cambios?',
      en: 'How does the async pipe help with change detection?',
    },
    answer: {
      es: 'Se suscribe al observable y, en cada emision, marca la vista para que OnPush se refresque. Al destruir la vista, se desuscribe.',
      en: 'It subscribes to the observable and, on each emission, marks the view so OnPush refreshes. When the view is destroyed, it unsubscribes.',
    },
    distractors: [
      {
        es: 'Llama a detectChanges en cada emision y se salta las reglas de OnPush.',
        en: 'It calls detectChanges on every emission and skips the OnPush rules.',
      },
      {
        es: 'Cambia la referencia del input en el padre, que es lo unico que OnPush entiende.',
        en: 'It changes the input reference on the parent, which is the only thing OnPush understands.',
      },
    ],
    explanation: {
      es: 'Por eso en plantilla suele bastar el pipe y no hace falta suscribirse en la clase. Una signal no se envuelve en async pipe: se llama directamente.',
      en: 'That is why the pipe in the template is often enough and you do not subscribe in the class. A signal is not wrapped in the async pipe: you call it directly.',
    },
  },
  {
    id: 'fe-cd-07',
    topic: 'Plantillas',
    prompt: {
      es: '¿Por qué conviene evitar funciones en la plantilla?',
      en: 'Why should you avoid functions in the template?',
    },
    answer: {
      es: 'Porque se ejecutan cada vez que se comprueba esa vista, aunque los datos no hayan cambiado. Un pipe puro o un computed solo recalculan cuando cambia la entrada.',
      en: 'Because they run every time that view is checked, even if the data did not change. A pure pipe or a computed recalculates only when the input changes.',
    },
    distractors: [
      {
        es: 'Porque Angular prohibe llamar metodos desde la plantilla y el build falla.',
        en: 'Because Angular forbids calling methods from the template and the build fails.',
      },
      {
        es: 'Porque la funcion se ejecuta una sola vez al crear la vista y luego queda obsoleta.',
        en: 'Because the function runs once when the view is created and then goes stale.',
      },
    ],
    explanation: {
      es: 'En una lista, el coste se multiplica por fila y por ciclo. Mueve el calculo a un pipe puro, a un campo ya preparado o a un computed.',
      en: 'On a list, the cost multiplies by row and by cycle. Move the calculation to a pure pipe, to a field you already prepared or to a computed.',
    },
  },
  {
    id: 'fe-cd-08',
    topic: 'Pipes',
    prompt: {
      es: '¿Qué diferencia hay entre un pipe puro y uno impuro?',
      en: 'What is the difference between a pure pipe and an impure pipe?',
    },
    answer: {
      es: 'El puro memoriza el resultado y solo vuelve a correr si cambia la referencia de sus argumentos. El impuro corre en cada comprobacion de la vista.',
      en: 'A pure pipe memoises the result and runs again only if an argument reference changes. An impure pipe runs on every check of the view.',
    },
    distractors: [
      {
        es: 'El impuro es más barato porque corre fuera de Angular y no refresca la vista.',
        en: 'The impure pipe is cheaper because it runs outside Angular and does not refresh the view.',
      },
      {
        es: 'El puro se ejecuta una sola vez en la vida del componente y luego ignora los argumentos.',
        en: 'The pure pipe runs once in the component lifetime and then ignores the arguments.',
      },
    ],
    explanation: {
      es: 'El defecto es puro, y un impuro se usa cuando de verdad hay que ver mutaciones internas, lo que en una lista grande sale caro. El async pipe es impuro porque tiene que enterarse de cada emision.',
      en: 'The default is pure, and an impure pipe is for when you really must see inner mutations, which gets expensive on a large list. The async pipe is impure because it has to notice every emission.',
    },
  },
  {
    id: 'fe-cd-09',
    topic: 'Rendimiento',
    prompt: {
      es: '¿Cómo se optimiza una aplicación de Angular?',
      en: 'How do you optimize an Angular app?',
    },
    answer: {
      es: 'Carga features en lazy loading, usa OnPush, identifica las listas con track y saca el trabajo pesado de la plantilla. Cierra las suscripciones que no completan y no metas de más en el bundle inicial.',
      en: 'Lazy load features, use OnPush, identify lists with track and keep heavy work out of the template. Close subscriptions that do not complete and do not put extra code in the initial bundle.',
    },
    distractors: [
      {
        es: 'Basta con quitar Zone. La deteccion desaparece y el DOM se actualiza solo.',
        en: 'Removing Zone is enough. Detection goes away and the DOM updates by itself.',
      },
      {
        es: 'Hay que poner detectChanges en cada evento. OnPush y el lazy loading no cambian el rendimiento.',
        en: 'You must call detectChanges on every event. OnPush and lazy loading do not change performance.',
      },
    ],
    explanation: {
      es: 'Mide antes de microoptimizar. Lo que más se nota suele ser un bundle enorme, una lista sin track o una plantilla que recalcula en cada ciclo.',
      en: 'Measure before you micro-optimize. What usually shows up is a huge bundle, a list without track or a template that recalculates on every cycle.',
    },
  },
  {
    id: 'fe-cd-10',
    topic: 'Listas',
    prompt: {
      es: '¿Para qué sirve track en @for?',
      en: 'What is track for in @for?',
    },
    answer: {
      es: 'Para identificar cada elemento y reutilizar su DOM cuando la lista cambia, en lugar de destruir y crear todos los nodos.',
      en: 'To identify each item and reuse its DOM when the list changes, instead of destroying and creating every node.',
    },
    distractors: [
      {
        es: 'Marca cada fila como OnPush y solo visita la que cambio.',
        en: 'It marks every row as OnPush and only visits the one that changed.',
      },
      {
        es: 'Ordena la coleccion por esa clave antes de pintarla.',
        en: 'It sorts the collection by that key before painting it.',
      },
    ],
    explanation: {
      es: 'Sin una clave estable se pierde el foco, el scroll y el estado de los inputs. track no apaga la deteccion dentro de la fila: para eso esta OnPush en el componente de la fila.',
      en: 'Without a stable key you lose focus, scroll and input state. track does not turn off detection inside the row: that is what OnPush on the row component is for.',
    },
  },
  {
    id: 'fe-cd-11',
    topic: 'NgZone',
    prompt: {
      es: '¿Cuándo usas NgZone.run y runOutsideAngular?',
      en: 'When do you use NgZone.run and runOutsideAngular?',
    },
    answer: {
      es: 'run devuelve un callback a Angular cuando una libreria te llamo por fuera y la vista no se entero. runOutsideAngular saca trabajo ruidoso, como un scroll continuo, para no refrescar toda la app en cada evento.',
      en: 'run brings a callback back into Angular when a library called you from outside and the view did not notice. runOutsideAngular takes noisy work, such as a continuous scroll, out so the whole app does not refresh on every event.',
    },
    distractors: [
      {
        es: 'runOutsideAngular es la forma de activar OnPush y run lo desactiva.',
        en: 'runOutsideAngular is how you turn OnPush on and run turns it off.',
      },
      {
        es: 'Hay que envolver todo el componente en run, si no los clicks de la plantilla no se detectan.',
        en: 'You must wrap the whole component in run, otherwise template clicks are not detected.',
      },
    ],
    explanation: {
      es: 'Despues de trabajar fuera, entra con run o marca la vista solo cuando toca pintar. No hace falta salir de Angular para un click normal de la plantilla.',
      en: 'After working outside, come back with run or mark the view only when it is time to paint. You do not need to leave Angular for a normal template click.',
    },
  },
  {
    id: 'fe-cd-12',
    topic: 'Errores',
    prompt: {
      es: '¿Qué significa el error de expresión cambiada después de comprobarla?',
      en: 'What does the expression changed after it was checked error mean?',
    },
    answer: {
      es: 'Un binding cambio en el mismo ciclo, despues de que Angular ya lo habia comprobado. Pasa a menudo si escribes el valor demasiado tarde, por ejemplo en ngAfterViewInit.',
      en: 'A binding changed in the same cycle, after Angular had already checked it. It often happens if you write the value too late, for example in ngAfterViewInit.',
    },
    distractors: [
      {
        es: 'Significa que un Observable aun no emitio. Se quita poniendo OnPush.',
        en: 'It means an Observable has not emitted yet. You remove it by setting OnPush.',
      },
      {
        es: 'Solo existe en produccion. En desarrollo Angular ignora los bindings inestables.',
        en: 'It exists only in production. In development Angular ignores unstable bindings.',
      },
    ],
    explanation: {
      es: 'En desarrollo Angular revisa otra vez para cazar esos valores. Adelanta la asignacion, o dejala para el turno siguiente, para que el binding no cambie a mitad del chequeo.',
      en: 'In development Angular checks again to catch those values. Move the assignment earlier, or leave it for the next turn, so the binding does not change in the middle of the check.',
    },
  },
  {
    id: 'fe-cd-13',
    topic: 'Signals',
    prompt: {
      es: '¿Por qué una signal actualiza un componente OnPush sin markForCheck?',
      en: 'Why does a signal update an OnPush component without markForCheck?',
    },
    answer: {
      es: 'Porque al leerla durante el render, la vista queda registrada. Cuando la signal cambia, Angular sabe que esa vista hay que refrescarla.',
      en: 'Because reading it during render registers the view. When the signal changes, Angular knows that view must be refreshed.',
    },
    distractors: [
      {
        es: 'Porque la signal lanza un ciclo de toda la aplicacion e ignora OnPush.',
        en: 'Because the signal starts a cycle of the whole application and ignores OnPush.',
      },
      {
        es: 'Porque toda signal es un Observable y el async pipe la marca por dentro.',
        en: 'Because every signal is an Observable and the async pipe marks it internally.',
      },
    ],
    explanation: {
      es: 'Eso no pasa si mutas el objeto guardado: tiene que haber un set o un update. En la plantilla la signal se llama, no se envuelve en un pipe.',
      en: 'That does not happen if you mutate the stored object: there has to be a set or an update. In the template the signal is called, it is not wrapped in a pipe.',
    },
  },
  {
    id: 'fe-cd-14',
    topic: 'Zoneless',
    prompt: {
      es: '¿Qué es la detección de cambios sin Zone?',
      en: 'What is zoneless change detection?',
    },
    answer: {
      es: 'Angular refresca las vistas porque algo se lo dice, normalmente una signal o un aviso explicito, y no porque Zone haya visto trabajo asincrono.',
      en: 'Angular refreshes views because something tells it to, usually a signal or an explicit notice, and not because Zone saw async work.',
    },
    distractors: [
      {
        es: 'El DOM se actualiza nodo a nodo sin pasar por la plantilla, y OnPush deja de existir.',
        en: 'The DOM updates node by node without going through the template, and OnPush no longer exists.',
      },
      {
        es: 'Es el modo por defecto de siempre. Zone solo se usa en tests.',
        en: 'It has always been the default mode. Zone is only used in tests.',
      },
    ],
    explanation: {
      es: 'Un dato que nadie escribe en una signal ni marca la vista puede quedarse sin pintar. El modelo encaja con signals y con OnPush, no con mutar campos y esperar.',
      en: 'Data that nobody writes into a signal or uses to mark the view can stay unpainted. The model fits signals and OnPush, not mutating fields and waiting.',
    },
  },
  {
    id: 'fe-cd-15',
    topic: 'OnPush',
    prompt: {
      es: '¿Por qué un setTimeout dentro de un componente OnPush no refresca la vista y cómo se corrige?',
      en: 'A setTimeout inside an OnPush component assigns a field and the view does not change. How do you fix it?',
    },
    answer: {
      es: 'Marca la vista con markForCheck dentro del callback, o guarda el valor en una signal. El timer no es un evento de la plantilla, asi que OnPush no entra solo.',
      en: 'Mark the view with markForCheck inside the callback, or store the value in a signal. The timer is not a template event, so OnPush does not join in by itself.',
    },
    distractors: [
      {
        es: 'Cambiando setTimeout por runOutsideAngular, que fuerza el refresco de OnPush.',
        en: 'By replacing setTimeout with runOutsideAngular, which forces the OnPush refresh.',
      },
      {
        es: 'No se puede. OnPush ignora cualquier asignacion hecha desde la clase.',
        en: 'You cannot. OnPush ignores every assignment made from the class.',
      },
    ],
    explanation: {
      es: 'Un click en la plantilla sí marca el componente. El async pipe o una signal leida en la vista cubren el mismo caso sin llamar a markForCheck a mano.',
      en: 'A click in the template does mark the component. The async pipe or a signal read in the view cover the same case without calling markForCheck by hand.',
    },
  },
  {
    id: 'fe-cd-16',
    topic: 'OnPush',
    prompt: {
      es: '¿Por qué el hijo OnPush no se actualiza si el padre muta una propiedad del objeto pasado como input?',
      en: 'The parent mutates a property of the object it passed as an input. Why does the OnPush child not update?',
    },
    answer: {
      es: 'Porque la referencia del input no cambio. OnPush no mira dentro del objeto, asi que el hijo no se marca.',
      en: 'Because the input reference did not change. OnPush does not look inside the object, so the child is not marked.',
    },
    distractors: [
      {
        es: 'Porque OnPush congela el input y la mutacion del padre lanza un error.',
        en: 'Because OnPush freezes the input and the parent mutation throws.',
      },
      {
        es: 'Porque el hijo solo enlaza datos en el primer cambio y luego ignora el input.',
        en: 'Because the child binds data only on the first change and then ignores the input.',
      },
    ],
    explanation: {
      es: 'Pasa un objeto nuevo. Con Default el hijo sí se revisaria y veria el campo mutado, que es la diferencia practica entre las dos estrategias.',
      en: 'Pass a new object. With Default the child would still be checked and would see the mutated field, which is the practical difference between the two strategies.',
    },
  },
  {
    id: 'fe-cd-17',
    topic: 'ChangeDetectorRef',
    prompt: {
      es: '¿Cuándo usas detach en un componente?',
      en: 'When do you use detach on a component?',
    },
    answer: {
      es: 'Cuando llegan muchas actualizaciones y no quieres pintarlas todas. Sacas la vista de la comprobacion automatica y llamas a detectChanges solo cuando toca mostrar el estado.',
      en: 'When many updates arrive and you do not want to paint all of them. You take the view out of automatic checks and call detectChanges only when it is time to show the state.',
    },
    distractors: [
      {
        es: 'Para convertir Default en OnPush sin cambiar el decorador.',
        en: 'To turn Default into OnPush without changing the decorator.',
      },
      {
        es: 'Para pausar la app entera. detach del componente detiene los eventos del resto de pantallas.',
        en: 'To pause the whole app. detach on the component stops events on the other screens.',
      },
    ],
    explanation: {
      es: 'Un log en vivo o un canvas encajan, y reattach devuelve las comprobaciones automaticas. El resto de la app sigue detectando con normalidad.',
      en: 'A live log or a canvas fits, and reattach brings automatic checks back. The rest of the app still detects as usual.',
    },
  },
  {
    id: 'fe-cd-18',
    topic: 'Listas',
    prompt: {
      es: '¿Cómo mantienes rápida una lista larga?',
      en: 'How do you keep a long list fast?',
    },
    answer: {
      es: 'track con un id estable, OnPush en el componente de la fila y objetos nuevos cuando un item cambia. En la fila no llames funciones ni uses pipes impuros.',
      en: 'track with a stable id, OnPush on the row component and new objects when an item changes. In the row, do not call functions or use impure pipes.',
    },
    distractors: [
      {
        es: 'track basta. Convierte cada fila en OnPush y salta los bindings internos solo.',
        en: 'track is enough. It turns each row into OnPush and skips the inner bindings by itself.',
      },
      {
        es: 'Hay que pintar la lista con innerHTML para que Angular no recorra las filas.',
        en: 'You must paint the list with innerHTML so Angular does not walk the rows.',
      },
    ],
    explanation: {
      es: 'track evita recrear el DOM, pero la fila que se queda sigue comprobando segun su estrategia. Por eso el OnPush va en el item, no solo en el padre.',
      en: 'track avoids recreating the DOM, but a row that stays is still checked according to its strategy. That is why OnPush goes on the item, not only on the parent.',
    },
  },
  {
    id: 'fe-cd-19',
    topic: 'Desarrollo',
    prompt: {
      es: '¿Por qué la aplicación se siente más lenta en desarrollo?',
      en: 'Why does the application feel slower in development?',
    },
    answer: {
      es: 'Porque en desarrollo Angular vuelve a comprobar los bindings en el mismo ciclo, para cazar valores que cambiaron a mitad del chequeo. En produccion ese pase extra no esta.',
      en: 'Because in development Angular checks bindings again in the same cycle, to catch values that changed in the middle of the check. In production that extra pass is not there.',
    },
    distractors: [
      {
        es: 'Porque en desarrollo OnPush se ignora y en produccion se activa solo.',
        en: 'Because in development OnPush is ignored and in production it turns on by itself.',
      },
      {
        es: 'Porque cada evento se procesa dos veces en el navegador, antes de llegar a Angular.',
        en: 'Because every event is processed twice in the browser, before it reaches Angular.',
      },
    ],
    explanation: {
      es: 'Ese segundo pase es el que saca el error de expresion cambiada. No significa que la logica de negocio corra dos veces: es una verificacion de los bindings.',
      en: 'That second pass is what surfaces the expression changed error. It does not mean business logic runs twice: it is a check of the bindings.',
    },
  },
  {
    id: 'fe-cd-20',
    topic: 'Profiler',
    prompt: {
      es: '¿Cómo encuentras un ciclo de detección de cambios caro?',
      en: 'How do you find an expensive change detection cycle?',
    },
    answer: {
      es: 'Grabas una sesion en el profiler de Angular DevTools y miras que componentes se comprobaron, cuanto tardaron y que disparo el ciclo.',
      en: 'You record a session in the Angular DevTools profiler and look at which components were checked, how long they took and what triggered the cycle.',
    },
    distractors: [
      {
        es: 'El profiler solo lista errores de expresiones. Los tiempos hay que medirlos con console.time en cada componente.',
        en: 'The profiler only lists expression errors. Timings must be measured with console.time in every component.',
      },
      {
        es: 'Los componentes Default no salen, porque se consideran siempre sucios y el profiler los omite.',
        en: 'Default components do not show up, because they are treated as always dirty and the profiler skips them.',
      },
    ],
    explanation: {
      es: 'Ahi se ven funciones en plantilla, pipes impuros y un padre que recorre un subarbol enorme. Despues decides si toca OnPush, track o sacar trabajo del template.',
      en: 'That is where template functions, impure pipes and a parent walking a huge subtree show up. Then you decide if you need OnPush, track or less work in the template.',
    },
  },
];
