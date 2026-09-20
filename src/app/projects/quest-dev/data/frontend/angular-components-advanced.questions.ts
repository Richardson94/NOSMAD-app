import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_ANGULAR_COMPONENTS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-comp-01',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿Cómo decide Angular qué nodos recibe cada ng-content cuando un componente declara varios con el atributo select?',
      en: 'How does Angular decide which nodes each ng-content receives when a component declares several of them with the select attribute?',
    },
    answer: {
      es: 'Cada ng-content con select captura los nodos que coinciden con ese selector CSS y el ng-content sin select recoge todo lo que no encajó.',
      en: 'Each ng-content with select captures the nodes matching that CSS selector and the ng-content without select collects everything that did not match.',
    },
    distractors: [
      {
        es: 'Manda el orden de declaración: el primer ng-content recibe el primer nodo proyectado, el segundo el siguiente, y así sucesivamente.',
        en: 'Declaration order rules: the first ng-content receives the first projected node, the second one receives the next, and so on.',
      },
      {
        es: 'El contenido proyectado se compila en el ámbito del componente hijo, así que select elige cuál de sus plantillas internas se instancia.',
        en: 'Projected content is compiled in the child component scope, so select picks which of its internal templates gets instantiated.',
      },
    ],
    explanation: {
      es: 'La proyección se resuelve por selector CSS, no por posición: el select acepta etiqueta, clase o atributo y solo puede haber un ng-content sin select, que actúa de comodín. Si un nodo no coincide con ningún selector y no hay comodín, Angular lo descarta silenciosamente. Además el contenido se compila en el ámbito del padre, donde está escrito, no en el del hijo.',
      en: 'Projection is resolved by CSS selector, not by position: select accepts a tag, class or attribute and there can be only one ng-content without select, acting as the catch-all. If a node matches no selector and there is no catch-all, Angular silently drops it. Content is also compiled in the parent scope, where it is written, not in the child scope.',
    },
  },
  {
    id: 'fe-comp-02',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿Para qué sirve el atributo ngProjectAs?',
      en: 'What is the ngProjectAs attribute for?',
    },
    answer: {
      es: 'Hace que un nodo sea evaluado por los selectores de proyección como si tuviera otro selector, útil cuando se envuelve contenido en un ng-container.',
      en: 'It makes a node be evaluated by the projection selectors as if it had another selector, which is useful when wrapping content in an ng-container.',
    },
    distractors: [
      {
        es: 'Cambia el selector del componente en tiempo de ejecución para que pueda instanciarse con una etiqueta distinta a la declarada.',
        en: 'It changes the component selector at runtime so it can be instantiated with a tag different from the declared one.',
      },
      {
        es: 'Indica en qué ng-content debe insertarse el contenido, usando el índice del slot destino dentro de la plantilla del hijo.',
        en: 'It states which ng-content the content must be inserted into, using the index of the target slot inside the child template.',
      },
    ],
    explanation: {
      es: 'ngProjectAs es un atributo estático que recibe un selector CSS y solo afecta al emparejamiento con los select de los ng-content; el caso clásico es un ng-container con ngProjectAs="header", que de otro modo no coincidiría con ningún selector por no existir en el DOM. No existe ninguna API de índices de slot ni forma de reescribir el selector declarado en el decorador Component.',
      en: 'ngProjectAs is a static attribute that takes a CSS selector and only affects matching against the select of each ng-content; the classic case is an ng-container with ngProjectAs="header", which otherwise would match no selector because it does not exist in the DOM. There is no slot index API and no way to rewrite the selector declared in the Component decorator.',
    },
  },
  {
    id: 'fe-comp-03',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿Cómo se pasan datos a una plantilla renderizada con ngTemplateOutlet?',
      en: 'How do you pass data to a template rendered with ngTemplateOutlet?',
    },
    answer: {
      es: 'Con ngTemplateOutletContext, un objeto cuyas claves se leen en la plantilla con let-x, donde la clave $implicit alimenta al let sin nombre de propiedad.',
      en: 'With ngTemplateOutletContext, an object whose keys are read in the template using let-x, where the $implicit key feeds the let that names no property.',
    },
    distractors: [
      {
        es: 'Con los inputs del componente donde se renderiza la plantilla, porque el ng-template se compila en el punto en el que se inserta.',
        en: 'Through the inputs of the component where the template is rendered, because the ng-template is compiled at the point where it is inserted.',
      },
      {
        es: 'Pasando el objeto como segundo valor del propio ngTemplateOutlet, que admite la plantilla y el contexto separados por coma.',
        en: 'By passing the object as a second value of ngTemplateOutlet itself, which accepts the template and the context separated by a comma.',
      },
    ],
    explanation: {
      es: 'ngTemplateOutlet es una directiva con dos inputs independientes: ngTemplateOutlet recibe el TemplateRef y ngTemplateOutletContext el objeto de contexto; el equivalente imperativo es viewContainerRef.createEmbeddedView(plantilla, contexto). Un ng-template siempre se compila en su ámbito de declaración, así que los inputs del sitio donde se inserta no lo alcanzan. Desde Angular 16 existe además ngTemplateOutletInjector para cambiar el inyector de la vista embebida.',
      en: 'ngTemplateOutlet is a directive with two independent inputs: ngTemplateOutlet takes the TemplateRef and ngTemplateOutletContext takes the context object; the imperative equivalent is viewContainerRef.createEmbeddedView(template, context). An ng-template is always compiled in its declaration scope, so the inputs of the insertion site never reach it. Since Angular 16 there is also ngTemplateOutletInjector to change the injector of the embedded view.',
    },
  },
  {
    id: 'fe-comp-04',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿Qué hace falta hoy para crear un componente dinámico con ViewContainerRef.createComponent?',
      en: 'What is needed today to create a dynamic component with ViewContainerRef.createComponent?',
    },
    answer: {
      es: 'Basta con pasar la clase del componente: desde Angular 13, con Ivy, ya no se resuelve ninguna fábrica intermedia.',
      en: 'Passing the component class is enough: since Angular 13, with Ivy, no intermediate factory is resolved any more.',
    },
    distractors: [
      {
        es: 'Hay que obtener la fábrica con ComponentFactoryResolver.resolveComponentFactory y entregársela al método createComponent.',
        en: 'You must obtain the factory with ComponentFactoryResolver.resolveComponentFactory and hand it to the createComponent method.',
      },
      {
        es: 'Hay que registrar el componente en el arreglo entryComponents para que el compilador genere el código necesario para instanciarlo.',
        en: 'You must register the component in the entryComponents array so the compiler generates the code needed to instantiate it.',
      },
    ],
    explanation: {
      es: 'Con Ivy cada componente lleva su propia definición, por eso createComponent(MiComponente) funciona directo y ComponentFactoryResolver quedó obsoleto en Angular 13; entryComponents dejó de ser necesario con Ivy y se eliminó del API. Conviene recordar dos detalles: el componente se inserta como hermano del ancla, no dentro de ella, y los inputs se asignan con componentRef.setInput para que la detección de cambios los registre.',
      en: 'With Ivy every component carries its own definition, so createComponent(MyComponent) works directly and ComponentFactoryResolver was deprecated in Angular 13; entryComponents became unnecessary with Ivy and was removed from the API. Two details are worth remembering: the component is inserted as a sibling of the anchor, not inside it, and inputs are assigned through componentRef.setInput so change detection registers them.',
    },
  },
  {
    id: 'fe-comp-05',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿Qué aporta NgComponentOutlet frente a crear el componente a mano con ViewContainerRef?',
      en: 'What does NgComponentOutlet add compared to creating the component manually with ViewContainerRef?',
    },
    answer: {
      es: 'Declara la creación en la plantilla y se encarga de destruir y volver a crear la instancia cuando cambia la clase enlazada.',
      en: 'It declares the creation in the template and takes care of destroying and recreating the instance when the bound class changes.',
    },
    distractors: [
      {
        es: 'Es la única forma de pasar inputs a un componente dinámico, porque createComponent devuelve una referencia de solo lectura.',
        en: 'It is the only way to pass inputs to a dynamic component, because createComponent returns a read-only reference.',
      },
      {
        es: 'Inserta el componente dentro del elemento anfitrión de la directiva, mientras createComponent lo coloca siempre en un contenedor aparte.',
        en: 'It inserts the component inside the host element of the directive, while createComponent always places it in a separate container.',
      },
    ],
    explanation: {
      es: 'NgComponentOutlet es azúcar declarativo sobre el mismo ViewContainerRef: gestiona el ciclo de vida de la instancia y acepta inyector, contenido proyectado y, desde Angular 16.2, el input ngComponentOutletInputs para enlazar entradas. Con la vía manual los inputs se asignan con componentRef.setInput, así que no hay ninguna limitación de solo lectura, y ambas alternativas insertan el nodo como hermano del ancla.',
      en: 'NgComponentOutlet is declarative sugar over the same ViewContainerRef: it manages the instance lifecycle and accepts an injector, projected content and, since Angular 16.2, the ngComponentOutletInputs input to bind entries. With the manual route inputs are assigned through componentRef.setInput, so there is no read-only limitation, and both alternatives insert the node as a sibling of the anchor.',
    },
  },
  {
    id: 'fe-comp-06',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿En qué se diferencian los modos Emulated, None y ShadowDom de ViewEncapsulation?',
      en: 'How do the Emulated, None and ShadowDom modes of ViewEncapsulation differ?',
    },
    answer: {
      es: 'Emulated reescribe los selectores con atributos únicos por componente, None publica los estilos como globales sin aislamiento y ShadowDom usa el shadow root nativo del navegador.',
      en: 'Emulated rewrites the selectors with per-component unique attributes, None publishes the styles as global without isolation and ShadowDom uses the native browser shadow root.',
    },
    distractors: [
      {
        es: 'Emulated usa shadow DOM nativo cuando el navegador lo soporta y solo cae a los atributos únicos cuando no está disponible.',
        en: 'Emulated uses native shadow DOM when the browser supports it and only falls back to unique attributes when it is unavailable.',
      },
      {
        es: 'None aísla los estilos en tiempo de ejecución mediante un prefijo generado por el compilador, y ShadowDom es el modo por defecto.',
        en: 'None isolates styles at runtime through a prefix generated by the compiler, and ShadowDom is the default mode.',
      },
    ],
    explanation: {
      es: 'Emulated es el valor por defecto y nunca usa shadow DOM: el compilador añade atributos del tipo _nghost y _ngcontent para acotar los selectores, pero los estilos globales siguen entrando. None inyecta los estilos en el head sin ninguna transformación, por lo que afecta a toda la aplicación. ShadowDom sí aísla de verdad en ambos sentidos, incluidos los estilos globales que dejan de aplicarse dentro del componente; el antiguo modo Native fue eliminado del API.',
      en: 'Emulated is the default and never uses shadow DOM: the compiler adds attributes such as _nghost and _ngcontent to scope the selectors, but global styles still get in. None injects the styles into the head without any transformation, so it affects the whole application. ShadowDom does isolate in both directions, including global styles that stop applying inside the component; the old Native mode was removed from the API.',
    },
  },
  {
    id: 'fe-comp-07',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿Por qué se desaconseja ::ng-deep y qué alternativas hay para estilar un componente hijo?',
      en: 'Why is ::ng-deep discouraged and what alternatives exist for styling a child component?',
    },
    answer: {
      es: 'Está marcado como obsoleto y rompe la encapsulación: lo recomendable es exponer variables CSS, ofrecer inputs de clase o usar estilos globales bien acotados.',
      en: 'It is marked as deprecated and breaks encapsulation: the recommended path is exposing CSS variables, offering class inputs or using well scoped global styles.',
    },
    distractors: [
      {
        es: 'Solo funciona con ViewEncapsulation.None, así que la alternativa correcta es combinarlo siempre como :host ::ng-deep.',
        en: 'It only works with ViewEncapsulation.None, so the right alternative is always combining it as :host ::ng-deep.',
      },
      {
        es: 'Se desaconseja porque únicamente alcanza a los hijos directos, lo que obliga a repetirlo en cada nivel del árbol de componentes.',
        en: 'It is discouraged because it only reaches direct children, which forces repeating it at every level of the component tree.',
      },
    ],
    explanation: {
      es: 'Los selectores que perforan la encapsulación fueron retirados del estándar y Angular mantiene ::ng-deep, junto a /deep/ y el combinador de tres signos mayor, solo por compatibilidad. Su problema real es el opuesto al que sugiere el distractor: sin un :host delante, la regla se vuelve global y se filtra a toda la aplicación; anteponer :host limita el daño, pero sigue acoplando el estilo a la estructura interna del hijo. Las variables CSS personalizadas atraviesan cualquier encapsulación, incluido ShadowDom, y son el reemplazo natural.',
      en: 'The selectors that pierce encapsulation were dropped from the standard and Angular keeps ::ng-deep, together with /deep/ and the triple greater-than combinator, only for compatibility. Its real problem is the opposite of what the distractor suggests: without a leading :host the rule becomes global and leaks into the whole application; prefixing :host limits the damage but still couples the style to the internal structure of the child. Custom CSS properties cross any encapsulation, ShadowDom included, and are the natural replacement.',
    },
  },
  {
    id: 'fe-comp-08',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿Qué diferencia hay entre los selectores :host y :host-context?',
      en: 'What is the difference between the :host and :host-context selectors?',
    },
    answer: {
      es: ':host apunta al elemento anfitrión del componente y :host-context comprueba una condición en algún ancestro para aplicar estilos dentro del componente.',
      en: ':host targets the host element of the component and :host-context checks a condition on some ancestor in order to apply styles inside the component.',
    },
    distractors: [
      {
        es: ':host apunta al elemento anfitrión y :host-context apunta al contenido proyectado que el padre inserta dentro de ese anfitrión.',
        en: ':host targets the host element and :host-context targets the projected content that the parent inserts inside that host.',
      },
      {
        es: ':host-context aplica la regla sobre el ancestro que cumple la condición, lo que permite propagar el tema hacia arriba en el árbol.',
        en: ':host-context applies the rule to the ancestor that meets the condition, which lets the theme propagate upwards in the tree.',
      },
    ],
    explanation: {
      es: ':host admite una condición sobre el propio anfitrión con la forma funcional :host(.activo), mientras :host-context(.tema-oscuro) recorre la cadena de ancestros hasta encontrar la coincidencia y es el mecanismo habitual para temas. En ambos casos la declaración se aplica siempre dentro del componente, nunca al ancestro encontrado, y para estilar contenido proyectado se usan clases acordadas o variables CSS, no :host-context.',
      en: ':host accepts a condition on the host itself with the functional form :host(.active), while :host-context(.dark-theme) walks the ancestor chain until it finds a match and is the usual mechanism for theming. In both cases the declaration always applies inside the component, never to the matched ancestor, and to style projected content you use agreed classes or CSS variables, not :host-context.',
    },
  },
  {
    id: 'fe-comp-09',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿Qué diferencia práctica hay entre los decoradores HostBinding y HostListener y la propiedad host del decorador Component?',
      en: 'What is the practical difference between the HostBinding and HostListener decorators and the host property of the Component decorator?',
    },
    answer: {
      es: 'Ninguna en el resultado compilado: los decoradores enlazan miembros de la clase con comprobación de tipos y host declara el mismo mapa de forma estática en los metadatos.',
      en: 'None in the compiled output: the decorators bind class members with type checking and host declares the same map statically in the metadata.',
    },
    distractors: [
      {
        es: 'El mapa host solo admite atributos estáticos, por lo que HostBinding es la única vía para enlazar una expresión que cambia en tiempo de ejecución.',
        en: 'The host map only accepts static attributes, so HostBinding is the only way to bind an expression that changes at runtime.',
      },
      {
        es: 'Si se declara el mismo enlace en los dos sitios, el mapa host se ignora porque los decoradores de propiedad tienen prioridad en la compilación.',
        en: 'If the same binding is declared in both places, the host map is ignored because property decorators take precedence during compilation.',
      },
    ],
    explanation: {
      es: 'El compilador reduce ambas formas a las mismas funciones hostBindings y hostListeners de la definición del componente, y el mapa host acepta expresiones perfectamente, como "[class.activo]": "estaActivo" o "(click)": "alHacerClic($event)". La ventaja de los decoradores es el tipado y que el refactor arrastra el nombre del miembro; la del mapa host es ver todos los enlaces juntos. Duplicar el mismo enlace en los dos sitios no es aditivo y produce un comportamiento ambiguo, así que conviene elegir un estilo y mantenerlo.',
      en: 'The compiler lowers both forms to the same hostBindings and hostListeners functions of the component definition, and the host map accepts expressions perfectly well, such as "[class.active]": "isActive" or "(click)": "onClick($event)". The advantage of the decorators is typing and that a rename carries the member name along; the advantage of the host map is seeing every binding together. Declaring the same binding in both places is not additive and produces ambiguous behaviour, so it is better to pick one style and keep it.',
    },
  },
  {
    id: 'fe-comp-10',
    topic: 'Componentes avanzados',
    prompt: {
      es: 'En un componente standalone, ¿qué reemplaza a los arreglos declarations e imports del NgModule?',
      en: 'In a standalone component, what replaces the declarations and imports arrays of the NgModule?',
    },
    answer: {
      es: 'El arreglo imports del propio componente, donde se listan los componentes, directivas y pipes standalone, o los NgModule que aún haga falta consumir.',
      en: 'The imports array of the component itself, listing the standalone components, directives and pipes, or the NgModules that still need to be consumed.',
    },
    distractors: [
      {
        es: 'El arreglo declarations del componente, que hereda la semántica del NgModule y declara sus dependencias de plantilla.',
        en: 'The declarations array of the component, which inherits the NgModule semantics and declares its template dependencies.',
      },
      {
        es: 'El arreglo providers del componente, ya que en standalone las dependencias de plantilla se resuelven por inyección de dependencias.',
        en: 'The providers array of the component, since in standalone mode template dependencies are resolved through dependency injection.',
      },
    ],
    explanation: {
      es: 'Un componente standalone se declara a sí mismo, así que no existe declarations: todo lo que use su plantilla va en imports, y olvidarlo produce el clásico error NG8001 de elemento desconocido o la directiva que simplemente no hace nada. El arreglo providers sigue existiendo, pero es para servicios, no para plantillas. La bandera standalone: true era obligatoria desde Angular 14 y pasó a ser el valor por defecto en Angular 19.',
      en: 'A standalone component declares itself, so there is no declarations array: everything its template uses goes into imports, and forgetting it produces the classic NG8001 unknown element error or a directive that simply does nothing. The providers array still exists, but it is for services, not for templates. The standalone: true flag was mandatory from Angular 14 and became the default value in Angular 19.',
    },
  },
  {
    id: 'fe-comp-11',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿Qué opciones acepta el decorador Input para marcarlo como requerido, renombrarlo y convertir su valor?',
      en: 'Which options does the Input decorator accept to mark it as required, rename it and convert its value?',
    },
    answer: {
      es: 'Acepta required: true, alias para exponer otro nombre y transform para convertir el valor en cada escritura, con ayudas como booleanAttribute y numberAttribute desde Angular 16.',
      en: 'It accepts required: true, alias to expose another name and transform to convert the value on every write, with helpers such as booleanAttribute and numberAttribute since Angular 16.',
    },
    distractors: [
      {
        es: 'required: true hace que Angular lance una excepción en tiempo de ejecución si el input sigue siendo undefined durante el primer ciclo de detección.',
        en: 'required: true makes Angular throw an exception at runtime if the input is still undefined during the first detection cycle.',
      },
      {
        es: 'transform se ejecuta una única vez, en el primer enlace, porque el resultado queda memorizado junto al alias del input.',
        en: 'transform runs only once, on the first binding, because the result is memoised together with the input alias.',
      },
    ],
    explanation: {
      es: 'required es una comprobación del compilador de plantillas: si el padre no declara el enlace, la compilación falla antes de ejecutar nada, y por eso no protege frente a un undefined pasado explícitamente. transform, en cambio, corre en cada escritura del input y su tipo de entrada puede ser más ancho que el de la propiedad, que es justo lo que permite aceptar una cadena vacía como true con booleanAttribute. La función input() de signals, disponible desde Angular 17, ofrece las mismas tres capacidades con input.required.',
      en: 'required is a template compiler check: if the parent does not declare the binding, compilation fails before anything runs, which is why it does not protect against an explicitly passed undefined. transform, on the other hand, runs on every write to the input and its accepted type can be wider than the property type, which is exactly what allows an empty string to be read as true with booleanAttribute. The signal-based input() function, available since Angular 17, offers the same three capabilities through input.required.',
    },
  },
  {
    id: 'fe-comp-12',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿Cuál es el contrato de un Output con EventEmitter en cuanto a nombre y datos emitidos?',
      en: 'What is the contract of an Output with EventEmitter regarding its name and the emitted data?',
    },
    answer: {
      es: 'Se nombra como el hecho ocurrido, sin prefijo on, y emit envía un único valor tipado que el padre recibe en la variable $event.',
      en: 'It is named after the event that happened, without an on prefix, and emit sends a single typed value that the parent receives in the $event variable.',
    },
    distractors: [
      {
        es: 'El nombre debe empezar por on, como onGuardar, porque Angular busca ese prefijo para reconocer la propiedad como un evento de salida.',
        en: 'The name must start with on, such as onSave, because Angular looks for that prefix to recognise the property as an output event.',
      },
      {
        es: 'emit admite varios argumentos y el padre los recibe como una lista de valores dentro de $event, en el mismo orden de la llamada.',
        en: 'emit accepts several arguments and the parent receives them as a list of values inside $event, in the same order as the call.',
      },
    ],
    explanation: {
      es: 'EventEmitter extiende Subject y su emit recibe exactamente un valor, el del genérico declarado, por lo que varios datos se agrupan en un objeto. La guía de estilo desaconseja el prefijo on en el nombre del output justamente para no chocar con los manejadores nativos: el prefijo se pone en el método del padre, no en el output. Desde Angular 17.3 existe la función output(), con el mismo contrato pero sin depender de EventEmitter.',
      en: 'EventEmitter extends Subject and its emit takes exactly one value, the one of the declared generic, so several pieces of data are grouped into an object. The style guide discourages the on prefix in the output name precisely to avoid clashing with native handlers: the prefix belongs to the parent method, not to the output. Since Angular 17.3 there is the output() function, with the same contract but without depending on EventEmitter.',
    },
  },
  {
    id: 'fe-comp-13',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿Qué necesita un componente para soportar el enlace de dos vías con la sintaxis de caja de banano?',
      en: 'What does a component need in order to support two-way binding with the banana in a box syntax?',
    },
    answer: {
      es: 'Un input llamado x y un output llamado xChange, porque [(x)] se expande a [x] junto con (xChange) asignando $event.',
      en: 'An input named x and an output named xChange, because [(x)] expands into [x] together with (xChange) assigning $event.',
    },
    distractors: [
      {
        es: 'Que el input y el output se llamen exactamente igual, ya que Angular enlaza la lectura y la escritura contra el mismo nombre de propiedad.',
        en: 'That the input and the output are named exactly the same, since Angular binds reading and writing against the same property name.',
      },
      {
        es: 'Que el componente implemente ControlValueAccessor, porque la sintaxis la provee FormsModule a través de ngModel.',
        en: 'That the component implements ControlValueAccessor, because the syntax is provided by FormsModule through ngModel.',
      },
    ],
    explanation: {
      es: 'El azúcar sintáctico es puramente del compilador de plantillas: [(valor)]="dato" se convierte en [valor]="dato" más (valorChange)="dato = $event", así que el sufijo Change es obligatorio y funciona en cualquier componente o directiva. ngModel no es un caso especial, solo cumple el contrato con su output ngModelChange, y ControlValueAccessor hace falta para integrarse con formularios, no para el enlace de dos vías. Desde Angular 17.2 la función model() crea el input y el output emparejados de una sola vez.',
      en: 'The sugar is purely a template compiler concern: [(value)]="data" becomes [value]="data" plus (valueChange)="data = $event", so the Change suffix is mandatory and works on any component or directive. ngModel is not a special case, it simply fulfils the contract with its ngModelChange output, and ControlValueAccessor is needed to integrate with forms, not for two-way binding. Since Angular 17.2 the model() function creates the paired input and output in one go.',
    },
  },
  {
    id: 'fe-comp-14',
    topic: 'Componentes avanzados',
    prompt: {
      es: 'Con un componente hijo anidado, ¿en qué orden se ejecutan ngOnInit y ngAfterViewInit entre padre e hijo?',
      en: 'With a nested child component, in which order do ngOnInit and ngAfterViewInit run between parent and child?',
    },
    answer: {
      es: 'El ngOnInit del padre corre antes que el del hijo, pero el ngAfterViewInit del hijo corre antes que el del padre.',
      en: 'The parent ngOnInit runs before the child one, but the child ngAfterViewInit runs before the parent one.',
    },
    distractors: [
      {
        es: 'El padre completa todos sus hooks, incluido ngAfterViewInit, antes de que el hijo llegue siquiera a ejecutar su ngOnInit.',
        en: 'The parent completes all its hooks, ngAfterViewInit included, before the child even gets to run its ngOnInit.',
      },
      {
        es: 'Los dos ngAfterViewInit siguen el mismo orden que los ngOnInit, de padre a hijo, porque Angular recorre el árbol siempre hacia abajo.',
        en: 'Both ngAfterViewInit hooks follow the same order as the ngOnInit ones, from parent to child, because Angular always walks the tree downwards.',
      },
    ],
    explanation: {
      es: 'La inicialización baja por el árbol y la finalización de vistas sube: el padre no puede declarar su vista terminada hasta que todas las vistas hijas lo estén. Esa inversión es la causa directa del error de valor cambiado después de comprobado cuando en ngAfterViewInit se escribe una propiedad que el padre ya verificó. Por el mismo recorrido, el ngAfterContentInit del padre ocurre antes que el ngAfterViewInit del hijo.',
      en: 'Initialisation goes down the tree and view completion comes back up: a parent cannot declare its view finished until every child view is. That inversion is the direct cause of the changed-after-checked error when ngAfterViewInit writes a property the parent has already verified. Because of the same traversal, the parent ngAfterContentInit happens before the child ngAfterViewInit.',
    },
  },
  {
    id: 'fe-comp-15',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿Cuál es un caso de uso legítimo de ngDoCheck y cuál es su costo?',
      en: 'What is a legitimate use case for ngDoCheck and what is its cost?',
    },
    answer: {
      es: 'Detectar cambios que Angular no ve, como una mutación dentro de un objeto de entrada, asumiendo que el hook corre en cada ciclo de detección de esa vista.',
      en: 'Detecting changes Angular cannot see, such as a mutation inside an input object, assuming the hook runs on every detection cycle of that view.',
    },
    distractors: [
      {
        es: 'Sustituir a ngOnChanges en los componentes OnPush, porque con esa estrategia ngOnChanges deja de dispararse al llegar nuevos inputs.',
        en: 'Replacing ngOnChanges in OnPush components, because with that strategy ngOnChanges stops firing when new inputs arrive.',
      },
      {
        es: 'Ejecutar lógica solo cuando alguna propiedad del componente cambia, ya que Angular únicamente invoca el hook si detecta una diferencia.',
        en: 'Running logic only when some component property changes, since Angular only invokes the hook when it detects a difference.',
      },
    ],
    explanation: {
      es: 'ngDoCheck se llama siempre que se comprueba la vista, incluso en componentes OnPush cuando el padre se revisa, y sin ninguna condición previa: si el cuerpo es caro, el costo se paga decenas de veces por segundo. Para compararlo de forma eficiente existen IterableDiffers y KeyValueDiffers, que es justo lo que usa NgForOf por dentro. ngOnChanges sí funciona con OnPush, porque se dispara cuando cambia la referencia de un input, que es exactamente el criterio de esa estrategia.',
      en: 'ngDoCheck is called whenever the view is checked, even on OnPush components when the parent is checked, and without any precondition: if the body is expensive, the cost is paid dozens of times per second. To compare efficiently there are IterableDiffers and KeyValueDiffers, which is exactly what NgForOf uses internally. ngOnChanges does work with OnPush, because it fires when an input reference changes, which is precisely the criterion of that strategy.',
    },
  },
  {
    id: 'fe-comp-16',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿Por qué escribir en una propiedad enlazada dentro de ngAfterViewInit provoca el error de valor cambiado después de comprobado y cómo se corrige?',
      en: 'Why does writing to a bound property inside ngAfterViewInit raise the changed-after-checked error and how is it fixed?',
    },
    answer: {
      es: 'Porque en modo desarrollo Angular vuelve a verificar la vista y encuentra un valor distinto al ya comprobado; se corrige adelantando la lógica a ngOnInit, forzando detectChanges o difiriendo la escritura a un microtask.',
      en: 'Because in development mode Angular verifies the view again and finds a value different from the one already checked; it is fixed by moving the logic to ngOnInit, forcing detectChanges or deferring the write to a microtask.',
    },
    distractors: [
      {
        es: 'Porque ngAfterViewInit se ejecuta fuera de la zona de Angular, y se resuelve envolviendo la asignación en NgZone.run para volver a entrar.',
        en: 'Because ngAfterViewInit runs outside the Angular zone, and it is solved by wrapping the assignment in NgZone.run to re-enter it.',
      },
      {
        es: 'Porque la vista todavía no está creada en ese hook, y se resuelve declarando la consulta ViewChild con la opción static: true.',
        en: 'Because the view is not created yet in that hook, and it is solved by declaring the ViewChild query with the static: true option.',
      },
    ],
    explanation: {
      es: 'Angular ejecuta un segundo recorrido de verificación solo en desarrollo para garantizar el flujo de datos unidireccional; como ngAfterViewInit corre después de que esa vista ya fue comprobada, cualquier escritura tardía invalida el resultado y salta ExpressionChangedAfterItHasBeenCheckedError. Llamar a ChangeDetectorRef.detectChanges reconcilia de forma síncrona antes de la verificación, y queueMicrotask o setTimeout mueven la escritura al siguiente ciclo. El hook sí se ejecuta dentro de la zona y con la vista ya creada, por eso ninguna de las otras explicaciones aplica.',
      en: 'Angular runs a second verification pass in development only to guarantee unidirectional data flow; since ngAfterViewInit runs after that view has already been checked, any late write invalidates the result and raises ExpressionChangedAfterItHasBeenCheckedError. Calling ChangeDetectorRef.detectChanges reconciles synchronously before the verification, and queueMicrotask or setTimeout move the write to the next cycle. The hook does run inside the zone and with the view already created, so neither of the other explanations applies.',
    },
  },
  {
    id: 'fe-comp-17',
    topic: 'Componentes avanzados',
    prompt: {
      es: 'En un componente de pestañas, ¿cómo se evita que el contenido de una pestaña oculta llegue a instanciarse?',
      en: 'In a tabs component, how do you prevent the content of a hidden tab from being instantiated at all?',
    },
    answer: {
      es: 'Envolviendo ese contenido en un ng-template y renderizándolo con ngTemplateOutlet solo cuando la pestaña se activa, porque ng-content instancia siempre.',
      en: 'By wrapping that content in an ng-template and rendering it with ngTemplateOutlet only when the tab becomes active, because ng-content always instantiates.',
    },
    distractors: [
      {
        es: 'Envolviendo el ng-content en un bloque @if, porque así Angular retrasa la creación de los nodos proyectados hasta que la condición sea cierta.',
        en: 'By wrapping the ng-content in an @if block, because that way Angular delays the creation of the projected nodes until the condition becomes true.',
      },
      {
        es: 'Envolviendo el ng-content en un bloque @defer, que pospone la creación del contenido proyectado hasta que se cumpla su disparador.',
        en: 'By wrapping the ng-content in a @defer block, which postpones the creation of the projected content until its trigger fires.',
      },
    ],
    explanation: {
      es: 'El contenido proyectado pertenece a la vista del padre y se crea allí, así que existe aunque el ng-content nunca llegue a renderizarse: envolverlo en @if o en @defer solo controla si se inserta en el DOM, no si se construye. Un ng-template es una vista embebida que no se instancia hasta que alguien la renderiza, y ese es el único mecanismo que evita el costo. El patrón habitual declara una directiva estructural sobre el contenido, inyecta su TemplateRef y la recoge con ContentChildren.',
      en: 'Projected content belongs to the parent view and is created there, so it exists even if the ng-content never gets rendered: wrapping it in @if or @defer only controls whether it is inserted into the DOM, not whether it is built. An ng-template is an embedded view that is not instantiated until somebody renders it, and that is the only mechanism that avoids the cost. The usual pattern declares a structural directive on the content, injects its TemplateRef and collects it with ContentChildren.',
    },
  },
  {
    id: 'fe-comp-18',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿Qué diferencia hay entre declarar un ViewChild con static: true y con static: false?',
      en: 'What is the difference between declaring a ViewChild with static: true and with static: false?',
    },
    answer: {
      es: 'Con static: true la consulta se resuelve antes del primer ciclo de detección y ya está disponible en ngOnInit, pero solo funciona si el elemento no vive dentro de un bloque condicional o repetido.',
      en: 'With static: true the query is resolved before the first detection cycle and is already available in ngOnInit, but it only works if the element does not live inside a conditional or repeated block.',
    },
    distractors: [
      {
        es: 'Con static: true la referencia queda fija aunque el elemento se destruya y se vuelva a crear, mientras static: false la mantiene actualizada.',
        en: 'With static: true the reference stays fixed even if the element is destroyed and created again, while static: false keeps it updated.',
      },
      {
        es: 'Con static: false la propiedad queda undefined durante toda la vida del componente y hay que leer el elemento mediante un setter.',
        en: 'With static: false the property stays undefined for the whole component life and the element must be read through a setter.',
      },
    ],
    explanation: {
      es: 'static describe cuándo se resuelve la consulta, no su estabilidad: true la resuelve en tiempo de creación de la vista y false, que es el valor por defecto desde Angular 9, la resuelve justo antes de ngAfterViewInit y la actualiza cuando la vista cambia. Si el nodo está dentro de un @if o un @for, static: true entrega undefined siempre, porque en ese momento la vista embebida aún no existe. La variante con setter es una técnica opcional para reaccionar al momento exacto en que la referencia aparece, no una obligación de static: false.',
      en: 'static describes when the query is resolved, not how stable it is: true resolves it at view creation time and false, the default since Angular 9, resolves it right before ngAfterViewInit and updates it when the view changes. If the node sits inside an @if or a @for, static: true always yields undefined, because the embedded view does not exist yet at that point. The setter variant is an optional technique to react at the exact moment the reference appears, not a requirement of static: false.',
    },
  },
  {
    id: 'fe-comp-19',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿Qué controla la opción descendants de ContentChildren?',
      en: 'What does the descendants option of ContentChildren control?',
    },
    answer: {
      es: 'Si la consulta atraviesa todos los niveles del contenido proyectado o se limita a los hijos directos del anfitrión, que es el comportamiento por defecto.',
      en: 'Whether the query traverses every level of the projected content or is limited to the direct children of the host, which is the default behaviour.',
    },
    distractors: [
      {
        es: 'Si la consulta incluye además los elementos de la plantilla propia del componente, sumándolos a los que llegan por proyección.',
        en: 'Whether the query also includes elements from the component own template, adding them to the ones arriving through projection.',
      },
      {
        es: 'Si la consulta es estática o dinámica: con descendants en true la QueryList se actualiza cuando el contenido proyectado cambia.',
        en: 'Whether the query is static or dynamic: with descendants set to true the QueryList updates when the projected content changes.',
      },
    ],
    explanation: {
      es: 'Ese matiz es una trampa clásica de entrevista porque ContentChildren usa descendants: false por defecto, mientras ContentChild usa true, así que envolver los hijos en un div rompe la consulta sin ningún error visible. El contenido de la plantilla propia se consulta con ViewChildren, que es una familia distinta de consultas. La reactividad no depende de descendants: la QueryList siempre expone el observable changes para reaccionar a altas y bajas.',
      en: 'That nuance is a classic interview trap because ContentChildren defaults to descendants: false while ContentChild defaults to true, so wrapping the children in a div breaks the query with no visible error. Content from the own template is queried with ViewChildren, which is a different family of queries. Reactivity does not depend on descendants: the QueryList always exposes the changes observable to react to additions and removals.',
    },
  },
  {
    id: 'fe-comp-20',
    topic: 'Componentes avanzados',
    prompt: {
      es: '¿Qué aporta DestroyRef frente a implementar ngOnDestroy para limpiar recursos?',
      en: 'What does DestroyRef add compared to implementing ngOnDestroy to clean up resources?',
    },
    answer: {
      es: 'Permite registrar callbacks de limpieza con onDestroy desde cualquier punto del contexto de inyección, incluidas funciones reutilizables, sin implementar el hook; está disponible desde Angular 16.',
      en: 'It allows registering cleanup callbacks with onDestroy from anywhere in the injection context, reusable functions included, without implementing the hook; it is available since Angular 16.',
    },
    distractors: [
      {
        es: 'Sustituye a ngOnDestroy: cuando un componente inyecta DestroyRef, Angular deja de invocar el hook para no ejecutar la limpieza dos veces.',
        en: 'It replaces ngOnDestroy: when a component injects DestroyRef, Angular stops invoking the hook so cleanup does not run twice.',
      },
      {
        es: 'Solo funciona con servicios declarados con providedIn root, porque su destrucción la controla el inyector de entorno de la aplicación.',
        en: 'It only works with services declared with providedIn root, because their destruction is controlled by the application environment injector.',
      },
    ],
    explanation: {
      es: 'DestroyRef y ngOnDestroy conviven y se ejecutan en el mismo punto del ciclo de vida; la ventaja real es poder encapsular la limpieza dentro de una función auxiliar o una directiva sin obligar al componente a declarar nada, que es exactamente lo que hace takeUntilDestroyed por dentro. Como se obtiene con inject(DestroyRef), hay que pedirlo en contexto de inyección, típicamente en el inicializador de un campo o en el constructor, o se lanza el error NG0203. Un servicio con providedIn root recibe su llamada de destrucción cuando se destruye el inyector que lo creó, no antes.',
      en: 'DestroyRef and ngOnDestroy coexist and run at the same point of the lifecycle; the real advantage is being able to encapsulate cleanup inside a helper function or a directive without forcing the component to declare anything, which is exactly what takeUntilDestroyed does internally. Since it is obtained through inject(DestroyRef), it must be requested in an injection context, typically in a field initialiser or in the constructor, otherwise the NG0203 error is thrown. A service with providedIn root gets its destroy callback when the injector that created it is destroyed, not before.',
    },
  },
];
