import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_ANGULAR_CORE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-ng-01',
    topic: 'Angular y AngularJS',
    prompt: {
      es: '¿Cuál es la diferencia entre Angular y AngularJS?',
      en: 'What is the difference between Angular and AngularJS?',
    },
    answer: {
      es: 'AngularJS es el framework antiguo, con controladores y scopes. Angular es el framework actual, en TypeScript, basado en componentes y con otra arquitectura.',
      en: 'AngularJS is the old framework, with controllers and scopes. Angular is the current framework, in TypeScript, based on components and a different architecture.',
    },
    distractors: [
      {
        es: 'Son el mismo producto: Angular es solo la version 2 de AngularJS y los controladores con scope siguen funcionando igual.',
        en: 'They are the same product: Angular is only version 2 of AngularJS and controllers with scope still work the same way.',
      },
      {
        es: 'AngularJS es el compilador y Angular es solo la CLI, asi que una app puede mezclar las dos APIs sin cambios.',
        en: 'AngularJS is the compiler and Angular is only the CLI, so an app can mix both APIs with no changes.',
      },
    ],
    explanation: {
      es: 'No hay una migracion de version: es una reescritura. El codigo de AngularJS no se pega en una app Angular.',
      en: 'This is a rewrite, not a version bump. AngularJS code does not drop into an Angular app.',
    },
  },
  {
    id: 'fe-ng-02',
    topic: 'Componentes',
    prompt: {
      es: '¿Qué es un componente de Angular y cómo se crea uno?',
      en: 'What is an Angular component and how do you create one?',
    },
    answer: {
      es: 'Es una clase con una plantilla que controla un trozo de la pantalla. Se declara con el decorador Component, un selector y una plantilla, y lo habitual es generarlo con la CLI.',
      en: 'It is a class with a template that controls a piece of the screen. You declare it with the Component decorator, a selector and a template, and you usually generate it with the CLI.',
    },
    distractors: [
      {
        es: 'Es un servicio con un templateUrl, y se crea instanciandolo con new dentro del modulo raiz.',
        en: 'It is a service with a templateUrl, and you create it by calling new inside the root module.',
      },
      {
        es: 'Es solo un archivo HTML. Angular lo detecta por el nombre de la carpeta y no hace falta una clase.',
        en: 'It is only an HTML file. Angular detects it from the folder name and no class is required.',
      },
    ],
    explanation: {
      es: 'El selector es la etiqueta que usa el padre. Si el componente es standalone, el padre debe importarlo para poder usarlo.',
      en: 'The selector is the tag the parent uses. If the component is standalone, the parent must import it before using it.',
    },
  },
  {
    id: 'fe-ng-03',
    topic: 'Ciclo de vida',
    prompt: {
      es: '¿Cómo es el ciclo de vida de un componente de Angular?',
      en: 'Explain the lifecycle of an Angular component',
    },
    answer: {
      es: 'Angular crea el componente, asigna los inputs y llama a ngOnInit. Despues prepara la vista, llama a ngAfterViewInit y, al quitarlo, llama a ngOnDestroy para que liberes recursos.',
      en: 'Angular creates the component, assigns inputs and calls ngOnInit. It then prepares the view, calls ngAfterViewInit and, when the component is removed, calls ngOnDestroy so you can release resources.',
    },
    distractors: [
      {
        es: 'Solo existen el constructor y ngOnInit. La vista y la destruccion no tienen hooks.',
        en: 'Only the constructor and ngOnInit exist. The view and destruction have no hooks.',
      },
      {
        es: 'ngOnDestroy corre antes del primer render y ngAfterViewInit corre cuando el usuario cierra el navegador.',
        en: 'ngOnDestroy runs before the first render and ngAfterViewInit runs when the user closes the browser.',
      },
    ],
    explanation: {
      es: 'Inyecta en el constructor, arranca logica que depende de inputs en ngOnInit, y limpia suscripciones en ngOnDestroy.',
      en: 'Inject in the constructor, start logic that depends on inputs in ngOnInit, and clean up subscriptions in ngOnDestroy.',
    },
  },
  {
    id: 'fe-ng-04',
    topic: 'Data binding',
    prompt: {
      es: '¿Qué es el data binding en Angular?',
      en: 'What is data binding in Angular?',
    },
    answer: {
      es: 'Es el enlace entre la clase y la plantilla. La interpolacion y el property binding llevan datos a la vista, el event binding lleva eventos a la clase, y el two-way binding hace las dos cosas.',
      en: 'It is the link between the class and the template. Interpolation and property binding send data to the view, event binding sends events to the class, and two-way binding does both.',
    },
    distractors: [
      {
        es: 'Es solo la interpolacion con llaves. Las propiedades y los eventos se leen a mano desde el DOM.',
        en: 'It is only interpolation with braces. Properties and events are read by hand from the DOM.',
      },
      {
        es: 'Es un ciclo que copia todo el estado del componente al servidor en cada tecla.',
        en: 'It is a cycle that copies the whole component state to the server on every keystroke.',
      },
    ],
    explanation: {
      es: 'Corchetes escriben en el elemento, parentesis escuchan eventos y la sintaxis de corchetes con parentesis une las dos direcciones.',
      en: 'Square brackets write to the element, parentheses listen to events, and the brackets-plus-parentheses syntax joins both directions.',
    },
  },
  {
    id: 'fe-ng-05',
    topic: 'Módulos y standalone',
    prompt: {
      es: '¿Cuál es la diferencia entre un módulo y un componente standalone?',
      en: 'What is the difference between a Module and a Standalone Component?',
    },
    answer: {
      es: 'Un modulo agrupa declarations, imports y providers. Un componente standalone se declara a sí mismo y lista en su imports lo que usa la plantilla, sin pasar por un NgModule.',
      en: 'A module groups declarations, imports and providers. A standalone component declares itself and lists in its imports what the template uses, without an NgModule.',
    },
    distractors: [
      {
        es: 'Standalone significa que el componente no puede recibir inputs ni usar servicios.',
        en: 'Standalone means the component cannot take inputs or use services.',
      },
      {
        es: 'El modulo y el componente standalone son lo mismo: standalone es solo el nombre nuevo de NgModule.',
        en: 'A module and a standalone component are the same thing: standalone is only the new name of NgModule.',
      },
    ],
    explanation: {
      es: 'Si la plantilla usa otro componente, directiva o pipe, tiene que estar en imports. Olvidarlo deja la etiqueta sin reconocer.',
      en: 'If the template uses another component, directive or pipe, it has to be in imports. Forgetting it leaves the tag unknown.',
    },
  },
  {
    id: 'fe-ng-06',
    topic: 'Control de flujo',
    prompt: {
      es: '¿Cómo funciona el control de flujo de Angular 17 en adelante?',
      en: 'Explain the new control flow in Angular 17+',
    },
    answer: {
      es: 'En la plantilla se usa @if, @for y @switch en lugar de ngIf, ngFor y ngSwitch. @for exige track para que Angular reutilice los nodos cuando la lista cambia.',
      en: 'In the template you use @if, @for and @switch instead of ngIf, ngFor and ngSwitch. @for requires track so Angular can reuse nodes when the list changes.',
    },
    distractors: [
      {
        es: 'Sigue haciendo falta importar CommonModule, porque @if y @for son directivas de ese modulo.',
        en: 'You still must import CommonModule, because @if and @for are directives from that module.',
      },
      {
        es: '@for ordena la lista y track salta la deteccion de cambios de las filas que no cambiaron.',
        en: '@for sorts the list and track skips change detection for rows that did not change.',
      },
    ],
    explanation: {
      es: 'La sintaxis es del propio template, no hay que importarla. track identifica cada elemento; no ordena ni apaga la deteccion dentro de la fila.',
      en: 'The syntax belongs to the template, so you do not import it. track identifies each item; it does not sort and it does not turn off detection inside the row.',
    },
  },
  {
    id: 'fe-ng-07',
    topic: 'RxJS',
    prompt: {
      es: '¿Cómo se usan los Observables con RxJS en Angular?',
      en: 'How are Observables used with RxJS in Angular?',
    },
    answer: {
      es: 'HttpClient, el router y los formularios reactivos exponen Observables. Los transformas con operadores y te suscribes, o dejas que el async pipe se suscriba en la plantilla.',
      en: 'HttpClient, the router and reactive forms expose Observables. You transform them with operators and subscribe, or you let the async pipe subscribe in the template.',
    },
    distractors: [
      {
        es: 'Un Observable es una Promise. Angular lo resuelve una sola vez y no hace falta desuscribirse nunca.',
        en: 'An Observable is a Promise. Angular resolves it once and you never need to unsubscribe.',
      },
      {
        es: 'Solo se pueden leer dentro de un effect. La plantilla no puede consumir un Observable.',
        en: 'They can only be read inside an effect. The template cannot consume an Observable.',
      },
    ],
    explanation: {
      es: 'HttpClient completa solo y el async pipe se desuscribe al destruir la vista. Un stream que no completa, como un estado o los eventos del router, sí hay que cerrarlo.',
      en: 'HttpClient completes on its own and the async pipe unsubscribes when the view is destroyed. A stream that does not complete, such as state or router events, still needs to be closed.',
    },
  },
  {
    id: 'fe-ng-08',
    topic: 'SSR',
    prompt: {
      es: '¿Cómo funciona el renderizado en el servidor en Angular?',
      en: 'How does SSR work in Angular?',
    },
    answer: {
      es: 'El servidor pinta el HTML de la primera vista y el navegador lo muestra antes de arrancar la app. Luego Angular hidrata ese HTML y toma el control en el cliente.',
      en: 'The server renders the HTML of the first view and the browser shows it before the app boots. Angular then hydrates that HTML and takes over on the client.',
    },
    distractors: [
      {
        es: 'El servidor ejecuta solo los CSS. El HTML se genera siempre en el navegador despues de descargar el bundle.',
        en: 'The server runs only the CSS. HTML is always generated in the browser after the bundle downloads.',
      },
      {
        es: 'SSR sustituye a los componentes: cada ruta es un archivo HTML estatico sin hidratacion.',
        en: 'SSR replaces components: each route is a static HTML file with no hydration.',
      },
    ],
    explanation: {
      es: 'Durante el render del servidor no existe window. Protege el acceso al navegador y no leas localStorage hasta estar en el cliente.',
      en: 'During the server render, window does not exist. Guard browser access and do not read localStorage until you are on the client.',
    },
  },
  {
    id: 'fe-ng-09',
    topic: 'Internacionalización',
    prompt: {
      es: '¿Cómo se gestiona la internacionalización en Angular?',
      en: 'How is i18n managed in Angular?',
    },
    answer: {
      es: 'Marcas los textos, los extraes a ficheros de traduccion y generas una version por idioma. Con el i18n de Angular la traduccion queda fijada en el build.',
      en: 'You mark the texts, extract them to translation files and produce one build per language. With Angular i18n the translation is fixed at build time.',
    },
    distractors: [
      {
        es: 'Basta con cambiar el lang del HTML. Angular traduce solo los textos mirando el idioma del navegador.',
        en: 'Changing the HTML lang is enough. Angular translates the texts by itself from the browser language.',
      },
      {
        es: 'Los textos se traducen en el interceptor HTTP, asi que la plantilla siempre lleva las claves en ingles.',
        en: 'Texts are translated in the HTTP interceptor, so the template always keeps the keys in English.',
      },
    ],
    explanation: {
      es: 'Si necesitas cambiar de idioma sin recargar, el i18n de build no alcanza y se usa una libreria en runtime. No dejes cadenas sueltas en la plantilla.',
      en: 'If you need to switch language without a reload, build-time i18n is not enough and a runtime library is used. Do not leave loose strings in the template.',
    },
  },
  {
    id: 'fe-ng-10',
    topic: 'Estructura',
    prompt: {
      es: '¿Cuáles son buenas prácticas para estructurar un proyecto de Angular?',
      en: 'What are good practices for structuring an Angular project?',
    },
    answer: {
      es: 'Organiza por feature, no solo por tipo de archivo. Cada feature tiene sus componentes, rutas y servicios, lo comun vive aparte y las features se cargan en lazy loading.',
      en: 'Organize by feature, not only by file type. Each feature has its components, routes and services, shared code lives apart and features are lazy loaded.',
    },
    distractors: [
      {
        es: 'Todo va en app: un solo modulo, un solo servicio y una carpeta components con la aplicacion entera.',
        en: 'Everything goes in app: one module, one service and one components folder for the whole application.',
      },
      {
        es: 'Cada componente debe tener su propio proyecto de libreria, aunque solo lo use una pantalla.',
        en: 'Every component must have its own library project, even if only one screen uses it.',
      },
    ],
    explanation: {
      es: 'Una feature perezosa no deberia importar otra feature. Lo que se reutiliza de verdad va a shared, y los singletons de la app se proveen en root.',
      en: 'A lazy feature should not import another feature. What is truly reused goes to shared, and app singletons are provided in root.',
    },
  },
];
