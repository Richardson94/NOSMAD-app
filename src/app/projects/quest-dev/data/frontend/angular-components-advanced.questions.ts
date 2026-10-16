import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_ANGULAR_COMPONENTS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-comp-01',
    topic: 'Comunicación',
    prompt: {
      es: '¿De qué formas se comunican los componentes?',
      en: 'What are the ways components communicate?',
    },
    answer: {
      es: 'De padre a hijo con inputs, de hijo a padre con outputs, y entre hermanos con un servicio compartido. El padre tambien puede leer al hijo con ViewChild.',
      en: 'Parent to child with inputs, child to parent with outputs, and siblings with a shared service. The parent can also read the child with ViewChild.',
    },
    distractors: [
      {
        es: 'Solo a traves de un store global, porque inputs y outputs no funcionan en componentes standalone.',
        en: 'Only through a global store, because inputs and outputs do not work on standalone components.',
      },
      {
        es: 'Solo por la URL, porque un componente no puede recibir datos de quien lo usa.',
        en: 'Only through the URL, because a component cannot receive data from whoever uses it.',
      },
    ],
    explanation: {
      es: 'Inputs y outputs cubren el arbol cercano. Un servicio con una signal o un Subject evita encadenar eventos cuando los componentes no son padre e hijo.',
      en: 'Inputs and outputs cover the nearby tree. A service with a signal or a Subject avoids chaining events when the components are not parent and child.',
    },
  },
  {
    id: 'fe-comp-02',
    topic: 'Inputs',
    prompt: {
      es: '¿Cómo se pasan datos de un componente padre a un hijo?',
      en: 'How do you pass data from a parent component to a child?',
    },
    answer: {
      es: 'El hijo declara un input y el padre lo enlaza en la plantilla con corchetes. El hijo lee ese valor y no entra en la clase del padre.',
      en: 'The child declares an input and the parent binds it in the template with square brackets. The child reads that value and does not reach into the parent class.',
    },
    distractors: [
      {
        es: 'El padre asigna una propiedad publica del hijo despues de crearlo con new.',
        en: 'The parent assigns a public property of the child after creating it with new.',
      },
      {
        es: 'El hijo inyecta el padre en el constructor y lee sus campos.',
        en: 'The child injects the parent in the constructor and reads its fields.',
      },
    ],
    explanation: {
      es: 'Puede ser un input de signal o el decorador Input. El nombre del binding en el padre tiene que coincidir con el input del hijo, salvo que uses un alias.',
      en: 'It can be a signal input or the Input decorator. The binding name in the parent must match the child input, unless you use an alias.',
    },
  },
  {
    id: 'fe-comp-03',
    topic: 'Outputs',
    prompt: {
      es: '¿Cómo avisa un componente hijo a su padre?',
      en: 'How does a child component notify its parent?',
    },
    answer: {
      es: 'El hijo declara un output y llama a emit cuando ocurre el hecho. El padre escucha en la plantilla con un event binding y recibe el valor emitido.',
      en: 'The child declares an output and calls emit when the event happens. The parent listens in the template with an event binding and receives the emitted value.',
    },
    distractors: [
      {
        es: 'El hijo modifica el input que recibio y el padre se entera porque el objeto es el mismo.',
        en: 'The child mutates the input it received and the parent notices because the object is the same.',
      },
      {
        es: 'El output tiene que llamarse on más el nombre, si no Angular no lo trata como evento.',
        en: 'The output must be named on plus the event name, otherwise Angular does not treat it as an event.',
      },
    ],
    explanation: {
      es: 'Nombra el output por lo que paso, por ejemplo saved, y emite un solo valor. El padre pone la reaccion en su metodo, no en el nombre del output.',
      en: 'Name the output after what happened, for example saved, and emit a single value. The parent puts the reaction in its method, not in the output name.',
    },
  },
  {
    id: 'fe-comp-04',
    topic: 'Two-way binding',
    prompt: {
      es: '¿Cómo funciona el enlace de dos vías en un componente propio?',
      en: 'How does two-way binding work on a custom component?',
    },
    answer: {
      es: 'Hace falta un input y un output con el mismo nombre más el sufijo Change, o un model. El padre escribe la sintaxis de corchetes y parentesis y Angular la parte en binding más evento.',
      en: 'You need an input and an output with the same name plus the Change suffix, or a model. The parent writes the brackets and parentheses syntax and Angular splits it into a binding plus an event.',
    },
    distractors: [
      {
        es: 'Basta con que el input y el output se llamen igual. Angular adivina cual es la lectura y cual la escritura.',
        en: 'It is enough that the input and the output share the same name. Angular guesses which one is the read and which one is the write.',
      },
      {
        es: 'El componente tiene que implementar ControlValueAccessor, porque esa sintaxis solo existe para ngModel.',
        en: 'The component must implement ControlValueAccessor, because that syntax exists only for ngModel.',
      },
    ],
    explanation: {
      es: 'model crea el par por ti y el hijo puede escribir la signal. ControlValueAccessor hace falta para integrarse en un formulario, no para este enlace.',
      en: 'model creates the pair for you and the child can write the signal. ControlValueAccessor is for joining a form, not for this binding.',
    },
  },
  {
    id: 'fe-comp-05',
    topic: 'Consultas',
    prompt: {
      es: '¿Cuál es la diferencia entre ViewChild y ContentChild?',
      en: 'What is the difference between ViewChild and ContentChild?',
    },
    answer: {
      es: 'ViewChild busca en la plantilla del propio componente. ContentChild busca en el contenido que el padre proyecto con ng-content.',
      en: 'ViewChild looks in the component own template. ContentChild looks in the content the parent projected with ng-content.',
    },
    distractors: [
      {
        es: 'ViewChild devuelve uno y ContentChild devuelve todos los que coincidan.',
        en: 'ViewChild returns one and ContentChild returns every match.',
      },
      {
        es: 'ViewChild esta listo en el constructor y ContentChild solo despues de destruir el componente.',
        en: 'ViewChild is ready in the constructor and ContentChild only after the component is destroyed.',
      },
    ],
    explanation: {
      es: 'Las versiones en plural son ViewChildren y ContentChildren. Lee la consulta cuando la vista o el contenido ya se inicializo, no en el constructor.',
      en: 'The plural forms are ViewChildren and ContentChildren. Read the query once the view or the content has initialised, not in the constructor.',
    },
  },
  {
    id: 'fe-comp-06',
    topic: 'Proyección',
    prompt: {
      es: '¿Qué es la proyección de contenido?',
      en: 'What is content projection?',
    },
    answer: {
      es: 'El padre escribe marcado dentro de la etiqueta del hijo y el hijo lo muestra donde pone ng-content. Con select puedes repartir ese contenido en varios huecos.',
      en: 'The parent writes markup inside the child tag and the child shows it where ng-content sits. With select you can split that content into several slots.',
    },
    distractors: [
      {
        es: 'Es pasar un string por un input y el hijo lo pega con innerHTML.',
        en: 'It is passing a string through an input and the child pastes it with innerHTML.',
      },
      {
        es: 'ng-content crea los nodos en el hijo, asi que el padre no puede usar sus propias variables ahi.',
        en: 'ng-content creates the nodes in the child, so the parent cannot use its own variables there.',
      },
    ],
    explanation: {
      es: 'Ese marcado se compila en el padre, que es quien lo escribio. El select elige por etiqueta, clase o atributo, no por el orden de los nodos.',
      en: 'That markup is compiled in the parent, which is where it was written. select matches by tag, class or attribute, not by node order.',
    },
  },
  {
    id: 'fe-comp-07',
    topic: 'Ciclo de vida',
    prompt: {
      es: '¿Cuál es la diferencia entre el constructor y ngOnInit?',
      en: 'What is the difference between the constructor and ngOnInit?',
    },
    answer: {
      es: 'El constructor sirve para inyectar dependencias. ngOnInit corre cuando los primeros inputs ya estan asignados, y ahi empieza la logica que depende de ellos.',
      en: 'The constructor is for injecting dependencies. ngOnInit runs once the first inputs are assigned, and that is where logic that depends on them starts.',
    },
    distractors: [
      {
        es: 'Son iguales. Angular recomienda el constructor porque ngOnInit esta en desuso.',
        en: 'They are the same. Angular recommends the constructor because ngOnInit is deprecated.',
      },
      {
        es: 'ngOnInit corre antes del constructor, por eso los servicios ya estan disponibles ahi.',
        en: 'ngOnInit runs before the constructor, which is why services are already available there.',
      },
    ],
    explanation: {
      es: 'No lances HTTP ni leas la vista en el constructor. Los inputs todavia no estan y el DOM del componente tampoco.',
      en: 'Do not start HTTP or read the view in the constructor. Inputs are not set yet and the component DOM is not there either.',
    },
  },
  {
    id: 'fe-comp-08',
    topic: 'Limpieza',
    prompt: {
      es: '¿Cuándo se usa ngOnDestroy?',
      en: 'When do you use ngOnDestroy?',
    },
    answer: {
      es: 'Justo antes de destruir el componente, para cerrar suscripciones, timers y listeners. Si el stream no completa solo, hay que cortarlo ahi.',
      en: 'Just before the component is destroyed, to close subscriptions, timers and listeners. If the stream does not complete on its own, you cut it there.',
    },
    distractors: [
      {
        es: 'Despues de cada ciclo de deteccion, para reiniciar el estado de la plantilla.',
        en: 'After every change detection cycle, to reset the template state.',
      },
      {
        es: 'Solo en servicios de root. Un componente no se destruye mientras la ruta siga en el router.',
        en: 'Only in root services. A component is not destroyed while the route stays in the router.',
      },
    ],
    explanation: {
      es: 'takeUntilDestroyed y DestroyRef hacen la misma limpieza sin obligarte a implementar el hook. HttpClient completa al responder y no suele hacer falta cerrarlo a mano.',
      en: 'takeUntilDestroyed and DestroyRef do the same cleanup without forcing you to implement the hook. HttpClient completes when the response arrives and usually does not need a manual close.',
    },
  },
  {
    id: 'fe-comp-09',
    topic: 'Encapsulación',
    prompt: {
      es: '¿Qué es la encapsulación de vistas?',
      en: 'What is view encapsulation?',
    },
    answer: {
      es: 'Decide si los estilos del componente se quedan en el o se escapan: Emulated es el defecto y los acota, None los hace globales y ShadowDom usa el shadow root del navegador.',
      en: 'It decides whether the component styles stay inside it or leak out: Emulated is the default and scopes them, None makes them global and ShadowDom uses the browser shadow root.',
    },
    distractors: [
      {
        es: 'Emulated usa shadow DOM si el navegador puede, y None es el modo por defecto.',
        en: 'Emulated uses shadow DOM when the browser can, and None is the default mode.',
      },
      {
        es: 'Sirve para ocultar los inputs del componente y que el padre no pueda enlazarlos.',
        en: 'It hides the component inputs so the parent cannot bind them.',
      },
    ],
    explanation: {
      es: 'Con Emulated los estilos globales siguen entrando, y ShadowDom aisla en los dos sentidos. Para un tema, una variable CSS atraviesa cualquiera de los modos.',
      en: 'With Emulated, global styles still get in, and ShadowDom isolates both ways. For a theme, a CSS variable crosses any of the modes.',
    },
  },
  {
    id: 'fe-comp-10',
    topic: 'Host',
    prompt: {
      es: '¿Para qué sirven HostBinding y HostListener?',
      en: 'What are HostBinding and HostListener for?',
    },
    answer: {
      es: 'HostBinding pone una clase, un atributo o una propiedad en el elemento anfitrion. HostListener ejecuta un metodo cuando ese elemento dispara un evento, por ejemplo un click.',
      en: 'HostBinding sets a class, an attribute or a property on the host element. HostListener runs a method when that element fires an event, for example a click.',
    },
    distractors: [
      {
        es: 'Sirven para escuchar eventos de los componentes hijos y pasarles datos por inputs.',
        en: 'They listen to child component events and pass data down through inputs.',
      },
      {
        es: 'HostListener solo funciona en el documento, no en el elemento del propio componente.',
        en: 'HostListener only works on the document, not on the component own element.',
      },
    ],
    explanation: {
      es: 'El mapa host del decorador hace lo mismo de forma estatica. Elige un estilo y no declares el mismo enlace en los dos sitios.',
      en: 'The host map on the decorator does the same thing statically. Pick one style and do not declare the same binding in both places.',
    },
  },
  {
    id: 'fe-comp-11',
    topic: 'Directivas',
    prompt: {
      es: '¿Cuándo conviene una directiva en lugar de un componente?',
      en: 'When is a directive a better fit than a component?',
    },
    answer: {
      es: 'Cuando quieres anadir comportamiento a un elemento que ya existe, como un tooltip o un permiso, y no necesitas una plantilla propia.',
      en: 'When you want to add behaviour to an element that already exists, such as a tooltip or a permission check, and you do not need a template of your own.',
    },
    distractors: [
      {
        es: 'Cuando hay que reutilizar marcado, porque un componente no se puede importar en más de un sitio.',
        en: 'When you need to reuse markup, because a component cannot be imported in more than one place.',
      },
      {
        es: 'Cuando hay que tocar el DOM, porque solo una directiva puede inyectar ElementRef.',
        en: 'When you need to touch the DOM, because only a directive can inject ElementRef.',
      },
    ],
    explanation: {
      es: 'Si hay HTML propio, es un componente. Una directiva de atributo cambia el elemento; una estructural crea o quita DOM, que es lo que hacen @if y @for.',
      en: 'If there is HTML of its own, it is a component. An attribute directive changes the element; a structural one creates or removes DOM, which is what @if and @for do.',
    },
  },
  {
    id: 'fe-comp-12',
    topic: 'Plantillas',
    prompt: {
      es: '¿Qué diferencia hay entre ng-template y ng-container?',
      en: 'What is the difference between ng-template and ng-container?',
    },
    answer: {
      es: 'ng-template define un trozo de vista que no se pinta hasta que alguien lo instancia. ng-container agrupa nodos sin anadir un elemento extra al DOM.',
      en: 'ng-template defines a piece of view that is not painted until someone instantiates it. ng-container groups nodes without adding an extra element to the DOM.',
    },
    distractors: [
      {
        es: 'Son alias. ng-container es la forma nueva de ng-template y se renderiza igual de inmediato.',
        en: 'They are aliases. ng-container is the new form of ng-template and it renders immediately in the same way.',
      },
      {
        es: 'ng-template pinta su contenido al cargar y ng-container lo guarda para un outlet con nombre.',
        en: 'ng-template paints its content on load and ng-container stores it for a named outlet.',
      },
    ],
    explanation: {
      es: 'Para mostrar un ng-template usas ngTemplateOutlet o una directiva estructural. ng-container es el envoltorio cuando @if o @for no deben crear un div.',
      en: 'To show an ng-template you use ngTemplateOutlet or a structural directive. ng-container is the wrapper when @if or @for should not create a div.',
    },
  },
  {
    id: 'fe-comp-13',
    topic: 'Componentes dinámicos',
    prompt: {
      es: '¿Cómo se crea un componente de forma dinámica?',
      en: 'How do you create a component dynamically?',
    },
    answer: {
      es: 'Pasas la clase a ViewContainerRef.createComponent, o la enlazas en la plantilla con NgComponentOutlet. El outlet crea la instancia y la destruye cuando cambia la clase.',
      en: 'You pass the class to ViewContainerRef.createComponent, or you bind it in the template with NgComponentOutlet. The outlet creates the instance and destroys it when the class changes.',
    },
    distractors: [
      {
        es: 'Hay que registrarlo en entryComponents y resolver una fabrica antes de poder crearlo.',
        en: 'You must register it in entryComponents and resolve a factory before you can create it.',
      },
      {
        es: 'Se instancia con new y se hace append del elemento nativo en el body.',
        en: 'You instantiate it with new and append the native element to the body.',
      },
    ],
    explanation: {
      es: 'Con la clase basta. Los inputs se asignan con setInput o con el binding de inputs del outlet, para que el componente los reciba como inputs de verdad.',
      en: 'The class is enough. Inputs are assigned with setInput or with the outlet input binding, so the component receives them as real inputs.',
    },
  },
  {
    id: 'fe-comp-14',
    topic: 'Directivas',
    prompt: {
      es: '¿Qué diferencia hay entre una directiva estructural y una de atributo?',
      en: 'What is the difference between a structural directive and an attribute directive?',
    },
    answer: {
      es: 'La estructural anade o quita DOM, como @if y @for. La de atributo modifica un elemento que ya esta, por ejemplo su clase, su estilo o su comportamiento.',
      en: 'A structural directive adds or removes DOM, like @if and @for. An attribute directive changes an element that is already there, for example its class, style or behaviour.',
    },
    distractors: [
      {
        es: 'La estructural solo sirve en modulos y la de atributo solo en componentes standalone.',
        en: 'A structural directive only works in modules and an attribute directive only works in standalone components.',
      },
      {
        es: 'La de atributo crea un componente hijo y la estructural solo cambia CSS.',
        en: 'An attribute directive creates a child component and a structural directive only changes CSS.',
      },
    ],
    explanation: {
      es: 'ngClass y ngStyle son de atributo. El control de flujo nuevo cubre el caso estructural sin directivas con asterisco.',
      en: 'ngClass and ngStyle are attribute directives. The new control flow covers the structural case without star directives.',
    },
  },
  {
    id: 'fe-comp-15',
    topic: 'Estado compartido',
    prompt: {
      es: '¿Cómo comparten datos dos componentes hermanos?',
      en: 'How do two sibling components share data?',
    },
    answer: {
      es: 'A traves de un servicio compartido que guarda una signal o un Subject, o a traves del padre, que baja inputs y escucha outputs.',
      en: 'Through a shared service that holds a signal or a Subject, or through the parent, which passes inputs down and listens to outputs.',
    },
    distractors: [
      {
        es: 'Con ViewChild del hermano, porque Angular inyecta los hermanos en el constructor.',
        en: 'With a ViewChild of the sibling, because Angular injects siblings in the constructor.',
      },
      {
        es: 'Escribiendo en el input del otro hermano, que esta visible por estar en la misma plantilla.',
        en: 'By writing into the other sibling input, which is visible because they share the same template.',
      },
    ],
    explanation: {
      es: 'El servicio conviene cuando el padre no deberia conocer el detalle, o cuando hay más de un nivel de por medio. El padre como mediador deja el flujo explicito.',
      en: 'The service fits when the parent should not know the detail, or when there is more than one level in between. The parent as a mediator keeps the flow explicit.',
    },
  },
  {
    id: 'fe-comp-16',
    topic: 'Standalone',
    prompt: {
      es: '¿Qué se pone en el arreglo imports de un componente standalone?',
      en: 'What goes in the imports array of a standalone component?',
    },
    answer: {
      es: 'Los componentes, directivas y pipes que usa la plantilla, y los modulos que todavia hagan falta. No existe un declarations en el componente.',
      en: 'The components, directives and pipes the template uses, and any modules you still need. There is no declarations array on the component.',
    },
    distractors: [
      {
        es: 'Los servicios, porque en standalone las piezas de la plantilla se resuelven por inyeccion.',
        en: 'The services, because in standalone mode template pieces are resolved by injection.',
      },
      {
        es: 'Nada. Un standalone ve todos los componentes de la aplicacion sin importarlos.',
        en: 'Nothing. A standalone component sees every component in the application without importing them.',
      },
    ],
    explanation: {
      es: 'providers sigue siendo para servicios. Si falta un import, la etiqueta se queda sin reconocer o la directiva no hace nada.',
      en: 'providers is still for services. If an import is missing, the tag stays unknown or the directive does nothing.',
    },
  },
  {
    id: 'fe-comp-17',
    topic: 'Inputs',
    prompt: {
      es: '¿Cómo se marca un input como obligatorio?',
      en: 'How do you mark an input as required?',
    },
    answer: {
      es: 'Con input.required, o con required true en el decorador Input. Si el padre no lo enlaza, falla la compilacion de la plantilla.',
      en: 'With input.required, or with required true on the Input decorator. If the parent does not bind it, template compilation fails.',
    },
    distractors: [
      {
        es: 'Poniendo el operador ! en la propiedad. Angular lo trata como obligatorio en runtime.',
        en: 'By putting the ! operator on the property. Angular treats it as required at runtime.',
      },
      {
        es: 'Llamando a throw en ngOnInit si el valor es null. No hay forma de declararlo en el input.',
        en: 'By throwing in ngOnInit if the value is null. There is no way to declare it on the input.',
      },
    ],
    explanation: {
      es: 'Es un chequeo del compilador, no una validacion de formulario. No leas un input required en el constructor: todavia no esta asignado.',
      en: 'It is a compiler check, not a form validation. Do not read a required input in the constructor: it is not assigned yet.',
    },
  },
  {
    id: 'fe-comp-18',
    topic: 'Plantillas',
    prompt: {
      es: '¿Qué es una variable de referencia de plantilla?',
      en: 'What is a template reference variable?',
    },
    answer: {
      es: 'Es un nombre que pones en un elemento de la plantilla, con una almohadilla, para usarlo en esa misma plantilla. Desde la clase se lee con ViewChild.',
      en: 'It is a name you put on a template element, with a hash, so you can use it in that same template. From the class you read it with ViewChild.',
    },
    distractors: [
      {
        es: 'Es una variable del archivo TypeScript que la plantilla importa sola.',
        en: 'It is a variable from the TypeScript file that the template imports on its own.',
      },
      {
        es: 'Es el id del DOM. Angular exige que coincida con el selector del componente.',
        en: 'It is the DOM id. Angular requires it to match the component selector.',
      },
    ],
    explanation: {
      es: 'Sirve para pasar el elemento a una funcion del template o para leer un formulario declarado con ngForm. No sustituye a un input.',
      en: 'It is useful to pass the element to a template function or to read a form declared with ngForm. It does not replace an input.',
    },
  },
  {
    id: 'fe-comp-19',
    topic: 'Ciclo de vida',
    prompt: {
      es: '¿Por qué el trabajo pesado no va en el constructor?',
      en: 'Why does heavy work not belong in the constructor?',
    },
    answer: {
      es: 'Porque los inputs aun no estan asignados y la vista no existe. Ahi solo se inyectan dependencias.',
      en: 'Because inputs are not assigned yet and the view does not exist. Only dependencies are injected there.',
    },
    distractors: [
      {
        es: 'Porque el constructor corre fuera de Angular y un HTTP ahi no vuelve a entrar en la vista.',
        en: 'Because the constructor runs outside Angular and an HTTP call there never comes back into the view.',
      },
      {
        es: 'Porque el constructor se ejecuta en cada ciclo de deteccion y repetiria la peticion.',
        en: 'Because the constructor runs on every change detection cycle and would repeat the request.',
      },
    ],
    explanation: {
      es: 'Una peticion que depende de un input va en ngOnInit o en un computed sobre ese input. El DOM se toca a partir de ngAfterViewInit.',
      en: 'A request that depends on an input goes in ngOnInit or in a computed over that input. DOM work starts at ngAfterViewInit.',
    },
  },
  {
    id: 'fe-comp-20',
    topic: 'Estilos',
    prompt: {
      es: '¿Cómo se estiliza un componente hijo sin romper su encapsulación?',
      en: 'How do you style a child component without breaking its encapsulation?',
    },
    answer: {
      es: 'Exponiendo una variable CSS o un input de clase, y dejando que el hijo la use. ng-deep se evita porque perfora la encapsulacion y esta en desuso.',
      en: 'By exposing a CSS variable or a class input, and letting the child use it. ng-deep is avoided because it pierces encapsulation and is deprecated.',
    },
    distractors: [
      {
        es: 'Poniendo los estilos del hijo en el padre con ::ng-deep, que es la via recomendada.',
        en: 'By putting the child styles in the parent with ::ng-deep, which is the recommended path.',
      },
      {
        es: 'Cambiando el hijo a ViewEncapsulation.None desde el padre, sin tocar el hijo.',
        en: 'By switching the child to ViewEncapsulation.None from the parent, without touching the child.',
      },
    ],
    explanation: {
      es: 'Una custom property hereda hacia dentro, tambien con ShadowDom. Asi el padre elige el tema y el hijo sigue dueño de su marcado.',
      en: 'A custom property inherits inward, ShadowDom included. The parent picks the theme and the child still owns its markup.',
    },
  },
];
