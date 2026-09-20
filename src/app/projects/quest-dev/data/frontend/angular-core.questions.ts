import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_ANGULAR_CORE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-ng-01',
    topic: 'Detección de cambios',
    prompt: {
      es: '¿Qué implica marcar un componente con ChangeDetectionStrategy.OnPush?',
      en: 'What does marking a component with ChangeDetectionStrategy.OnPush imply?',
    },
    answer: {
      es: 'Solo se revisa cuando cambia la referencia de un @Input, se emite un evento desde su plantilla o se marca manualmente.',
      en: 'It is only checked when an @Input reference changes, an event fires from its template or it is marked manually.',
    },
    distractors: [
      {
        es: 'Solo se revisa cuando alguna de sus propiedades cambia de valor, comparando con el ciclo anterior.',
        en: 'It is only checked when one of its properties changes value, comparing against the previous cycle.',
      },
      {
        es: 'Se excluye del árbol de detección de cambios hasta que se llame explícitamente a detectChanges.',
        en: 'It is excluded from the change detection tree until detectChanges is explicitly called.',
      },
    ],
    explanation: {
      es: 'OnPush cambia el criterio para marcar la vista como sucia: comparación por referencia de inputs, eventos de la propia plantilla, un AsyncPipe que emite o una llamada a markForCheck. Mutar un objeto sin cambiar su referencia no dispara nada, y tampoco queda desconectado del árbol: eso se logra con detach del ChangeDetectorRef.',
      en: 'OnPush changes the criteria for marking the view dirty: reference comparison of inputs, events from its own template, an AsyncPipe emission or a markForCheck call. Mutating an object without changing its reference triggers nothing, and the component is not detached from the tree either: that is what ChangeDetectorRef detach does.',
    },
  },
  {
    id: 'fe-ng-02',
    topic: 'Detección de cambios',
    prompt: {
      es: '¿Cuál es la diferencia entre markForCheck y detectChanges del ChangeDetectorRef?',
      en: 'What is the difference between ChangeDetectorRef markForCheck and detectChanges?',
    },
    answer: {
      es: 'markForCheck marca la rama de ancestros como sucia para el próximo ciclo; detectChanges ejecuta la revisión de esa vista y sus hijos ahora mismo.',
      en: 'markForCheck marks the ancestor branch dirty for the next cycle; detectChanges runs the check on that view and its children right now.',
    },
    distractors: [
      {
        es: 'markForCheck revisa el componente actual de inmediato y detectChanges programa la revisión de toda la aplicación.',
        en: 'markForCheck checks the current component immediately and detectChanges schedules a check of the whole application.',
      },
      {
        es: 'Son equivalentes, pero markForCheck es la versión segura porque evita el error de ciclo de detección en desarrollo.',
        en: 'They are equivalent, but markForCheck is the safe version because it avoids the development-mode detection loop error.',
      },
    ],
    explanation: {
      es: 'markForCheck no dispara detección: solo asegura que, cuando Angular corra el próximo ciclo, la ruta desde la raíz hasta el componente no sea saltada por OnPush. detectChanges es síncrono y local. Justamente detectChanges puede provocar el error de valor cambiado tras la comprobación si se usa mal.',
      en: 'markForCheck does not trigger detection: it only ensures that when Angular runs the next cycle, the path from root to the component is not skipped by OnPush. detectChanges is synchronous and local. detectChanges is in fact the one that can raise the changed-after-checked error when misused.',
    },
  },
  {
    id: 'fe-ng-03',
    topic: 'Ciclo de vida',
    prompt: {
      es: '¿Cuándo se debe usar ngOnChanges en lugar de un setter en el @Input?',
      en: 'When should ngOnChanges be used instead of a setter on the @Input?',
    },
    answer: {
      es: 'Cuando la lógica depende de varios inputs a la vez o se necesita distinguir el primer cambio.',
      en: 'When the logic depends on several inputs at once or you need to distinguish the first change.',
    },
    distractors: [
      {
        es: 'Cuando el input es un objeto mutable, porque el setter solo se ejecuta si cambia la referencia.',
        en: 'When the input is a mutable object, because the setter only runs when the reference changes.',
      },
      {
        es: 'Cuando hay que reaccionar antes de que la plantilla se renderice, ya que el setter corre después del primer render.',
        en: 'When you must react before the template renders, since the setter runs after the first render.',
      },
    ],
    explanation: {
      es: 'ngOnChanges recibe un SimpleChanges con todos los inputs actualizados en ese ciclo y su bandera firstChange, algo imposible de coordinar con setters independientes. Pero comparte la misma limitación que el setter: ninguno detecta mutaciones internas sin cambio de referencia. Y el setter se ejecuta antes del primer render, igual que ngOnChanges.',
      en: 'ngOnChanges receives a SimpleChanges object with every input updated in that cycle plus its firstChange flag, which independent setters cannot coordinate. But it shares the same limitation as a setter: neither detects internal mutations without a reference change. And the setter runs before the first render, just like ngOnChanges.',
    },
  },
  {
    id: 'fe-ng-04',
    topic: 'Inyección de dependencias',
    prompt: {
      es: '¿Qué diferencia hay entre providedIn: "root" y declarar el servicio en el array providers de un componente?',
      en: 'What is the difference between providedIn: "root" and declaring the service in a component providers array?',
    },
    answer: {
      es: 'Con root hay una única instancia para la aplicación y es tree-shakeable; en el componente se crea una instancia por cada instancia del componente.',
      en: 'With root there is a single application-wide instance and it is tree-shakeable; in the component a new instance is created per component instance.',
    },
    distractors: [
      {
        es: 'Con root la instancia se crea al arrancar la aplicación; en el componente se crea de forma perezosa la primera vez que se inyecta.',
        en: 'With root the instance is created at application bootstrap; in the component it is created lazily the first time it is injected.',
      },
      {
        es: 'Con root el servicio es accesible desde cualquier componente; declarado en providers solo pueden inyectarlo los servicios, no las directivas.',
        en: 'With root the service is reachable from any component; declared in providers only services can inject it, not directives.',
      },
    ],
    explanation: {
      es: 'La clave es el ciclo de vida y el alcance: el proveedor de componente vive y muere con el componente, útil para estado local, mientras root es un único singleton compartido. Ambos se instancian de forma perezosa en la primera inyección, y el proveedor de componente lo heredan sus hijos y directivas del mismo elemento.',
      en: 'The key is lifecycle and scope: a component provider lives and dies with the component, which is handy for local state, whereas root is a single shared singleton. Both are instantiated lazily on first injection, and a component provider is inherited by its children and by directives on the same element.',
    },
  },
  {
    id: 'fe-ng-05',
    topic: 'Componentes',
    prompt: {
      es: '¿Cuál es la diferencia entre ViewChild y ContentChild?',
      en: 'What is the difference between ViewChild and ContentChild?',
    },
    answer: {
      es: 'ViewChild consulta elementos de la plantilla propia; ContentChild consulta los proyectados con ng-content.',
      en: 'ViewChild queries elements from the component own template; ContentChild queries those projected through ng-content.',
    },
    distractors: [
      {
        es: 'ViewChild devuelve un único elemento y ContentChild devuelve todos los que coincidan con el selector.',
        en: 'ViewChild returns a single element and ContentChild returns every element matching the selector.',
      },
      {
        es: 'ViewChild está disponible en ngOnInit y ContentChild solo después de ngAfterViewInit.',
        en: 'ViewChild is available in ngOnInit and ContentChild only after ngAfterViewInit.',
      },
    ],
    explanation: {
      es: 'La distinción es el origen del nodo: vista propia frente a contenido proyectado por el padre. Las versiones plurales son ViewChildren y ContentChildren, y el orden de resolución es el inverso al propuesto: el contenido se inicializa antes (ngAfterContentInit) que la vista (ngAfterViewInit), y ninguno está listo en ngOnInit salvo que se marque static: true.',
      en: 'The distinction is the node origin: own view versus content projected by the parent. The plural versions are ViewChildren and ContentChildren, and the resolution order is the opposite of the one proposed: content initialises first (ngAfterContentInit) and then the view (ngAfterViewInit); neither is ready in ngOnInit unless marked static: true.',
    },
  },
  {
    id: 'fe-ng-06',
    topic: 'Signals',
    prompt: {
      es: '¿Qué diferencia a computed() de un método llamado desde la plantilla?',
      en: 'What differentiates computed() from a method invoked in the template?',
    },
    answer: {
      es: 'computed memoiza el valor y solo recalcula cuando cambia alguna señal de la que depende.',
      en: 'computed memoises the value and only recalculates when one of its dependent signals changes.',
    },
    distractors: [
      {
        es: 'computed se evalúa de forma asíncrona fuera del ciclo de detección, evitando bloquear el render.',
        en: 'computed is evaluated asynchronously outside the detection cycle, avoiding render blocking.',
      },
      {
        es: 'computed puede devolver promesas u observables, mientras un método de plantilla debe ser sincrónico.',
        en: 'computed can return promises or observables, while a template method must be synchronous.',
      },
    ],
    explanation: {
      es: 'Un método en la plantilla se ejecuta en cada ciclo de detección, sin importar si sus entradas cambiaron; computed registra sus dependencias, cachea el resultado y lo invalida de forma perezosa solo cuando hace falta. Su evaluación es sincrónica y debe ser pura: no es el lugar para efectos ni asincronía.',
      en: 'A template method runs on every detection cycle regardless of whether its inputs changed; computed tracks its dependencies, caches the result and invalidates it lazily only when needed. Its evaluation is synchronous and must be pure: it is not the place for effects or asynchrony.',
    },
  },
  {
    id: 'fe-ng-07',
    topic: 'Plantillas',
    prompt: {
      es: '¿Para qué sirve la función de track en @for (o trackBy en ngFor)?',
      en: 'What is the purpose of the track function in @for (or trackBy in ngFor)?',
    },
    answer: {
      es: 'Para identificar cada elemento y reutilizar su nodo DOM en lugar de destruirlo y recrearlo cuando la lista cambia.',
      en: 'To identify each item and reuse its DOM node instead of destroying and recreating it when the list changes.',
    },
    distractors: [
      {
        es: 'Para ordenar la lista de forma estable según la clave indicada antes de renderizar los elementos.',
        en: 'To sort the list stably by the given key before rendering the items.',
      },
      {
        es: 'Para evitar que el ciclo de detección recorra los elementos cuyo contenido no cambió respecto al render previo.',
        en: 'To prevent the detection cycle from visiting items whose content did not change since the previous render.',
      },
    ],
    explanation: {
      es: 'Angular compara identidades para decidir qué nodos crear, mover o eliminar; sin una clave estable, reemplazar el arreglo recrea todo el DOM y se pierde el foco, el scroll y el estado de los inputs. No ordena nada y tampoco salta la detección de cambios dentro de los elementos que sí permanecen.',
      en: 'Angular compares identities to decide which nodes to create, move or remove; without a stable key, replacing the array recreates the whole DOM and loses focus, scroll and input state. It does not sort anything and it does not skip change detection inside the items that do remain.',
    },
  },
  {
    id: 'fe-ng-08',
    topic: 'Directivas',
    prompt: {
      es: '¿Cuándo conviene una directiva de atributo en lugar de un componente?',
      en: 'When is an attribute directive preferable to a component?',
    },
    answer: {
      es: 'Cuando se quiere añadir comportamiento a un elemento existente sin aportar plantilla propia.',
      en: 'When you want to add behaviour to an existing element without contributing a template of its own.',
    },
    distractors: [
      {
        es: 'Cuando el comportamiento debe reutilizarse en varios componentes, ya que un componente no puede compartirse entre módulos.',
        en: 'When the behaviour must be reused across components, since a component cannot be shared between modules.',
      },
      {
        es: 'Cuando se necesita manipular el DOM directamente, porque solo las directivas pueden inyectar ElementRef.',
        en: 'When you need to manipulate the DOM directly, because only directives can inject ElementRef.',
      },
    ],
    explanation: {
      es: 'La regla práctica es la vista: si hay marcado propio es un componente; si solo se agrega comportamiento (tooltip, autofocus, permisos) es una directiva. Los componentes se reutilizan sin problema exportándolos o siendo standalone, y ambos pueden inyectar ElementRef y Renderer2.',
      en: 'The practical rule is the view: if there is markup of its own it is a component; if it only adds behaviour (tooltip, autofocus, permissions) it is a directive. Components are perfectly reusable when exported or standalone, and both can inject ElementRef and Renderer2.',
    },
  },
  {
    id: 'fe-ng-09',
    topic: 'Rendimiento',
    prompt: {
      es: '¿Por qué un pipe puro es preferible a llamar una función de transformación en la plantilla?',
      en: 'Why is a pure pipe preferable to calling a transformation function in the template?',
    },
    answer: {
      es: 'Porque Angular memoiza su resultado y solo lo recalcula si cambian sus argumentos de entrada.',
      en: 'Because Angular memoises its result and only recalculates it when its input arguments change.',
    },
    distractors: [
      {
        es: 'Porque el pipe se ejecuta una sola vez al inicializar la vista y su resultado queda fijo en el DOM.',
        en: 'Because the pipe runs only once when the view initialises and its result stays fixed in the DOM.',
      },
      {
        es: 'Porque los pipes se ejecutan fuera de la zona de Angular y por eso no disparan detección de cambios.',
        en: 'Because pipes run outside the Angular zone and therefore do not trigger change detection.',
      },
    ],
    explanation: {
      es: 'Un pipe puro se reevalúa solo cuando cambia la referencia de sus entradas, mientras una llamada a función corre en cada ciclo de detección. No es un cálculo de una sola vez (cambiar la entrada lo recalcula) ni tiene nada que ver con salirse de la zona.',
      en: 'A pure pipe is re-evaluated only when its input references change, whereas a function call runs on every detection cycle. It is not a one-off computation (changing the input recalculates it) and it has nothing to do with leaving the zone.',
    },
  },
  {
    id: 'fe-ng-10',
    topic: 'Fugas de memoria',
    prompt: {
      es: '¿Cuál de estas suscripciones necesita desuscribirse manualmente en un componente?',
      en: 'Which of these subscriptions needs manual unsubscription in a component?',
    },
    answer: {
      es: 'La suscripción a un Observable de larga vida como un stream de estado o un evento del router.',
      en: 'A subscription to a long-lived Observable such as a state stream or a router event.',
    },
    distractors: [
      {
        es: 'La suscripción a HttpClient, porque la petición queda abierta hasta que se destruye el componente.',
        en: 'A subscription to HttpClient, because the request stays open until the component is destroyed.',
      },
      {
        es: 'La suscripción hecha con AsyncPipe, porque el pipe no conoce el ciclo de vida del componente.',
        en: 'A subscription made through AsyncPipe, because the pipe is unaware of the component lifecycle.',
      },
    ],
    explanation: {
      es: 'Solo los streams que nunca completan retienen la referencia al componente destruido; para ellos se usa takeUntilDestroyed, takeUntil con un Subject o el AsyncPipe. HttpClient completa tras la respuesta y libera la suscripción, y el AsyncPipe se desuscribe solo en su ngOnDestroy.',
      en: 'Only streams that never complete retain a reference to the destroyed component; for those you use takeUntilDestroyed, takeUntil with a Subject or the AsyncPipe. HttpClient completes after the response and releases the subscription, and AsyncPipe unsubscribes by itself in its ngOnDestroy.',
    },
  },
];
