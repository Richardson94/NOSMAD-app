import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_ANGULAR_DI_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-di-01',
    topic: 'Inyección',
    prompt: {
      es: '¿Cómo funciona la inyección de dependencias en Angular?',
      en: 'How does dependency injection work in Angular?',
    },
    answer: {
      es: 'Declaras la dependencia en el constructor o con inject, y Angular busca un provider en la jerarquia de inyectores. Tu no haces new del servicio.',
      en: 'You declare the dependency in the constructor or with inject, and Angular looks up a provider in the injector hierarchy. You do not call new on the service.',
    },
    distractors: [
      {
        es: 'Importas la clase y la instancias en el componente. El injector solo existe para los pipes.',
        en: 'You import the class and instantiate it in the component. The injector exists only for pipes.',
      },
      {
        es: 'Cada componente recibe todas las clases del proyecto en el constructor, aunque no las pida.',
        en: 'Every component receives every class in the project in the constructor, even if it did not ask for them.',
      },
    ],
    explanation: {
      es: 'El provider dice como se crea el valor y el injector decide cual gana. Si nadie lo provee, la inyeccion falla.',
      en: 'The provider says how the value is created and the injector decides which one wins. If nobody provides it, injection fails.',
    },
  },
  {
    id: 'fe-di-02',
    topic: 'providedIn',
    prompt: {
      es: '¿Qué diferencia hay entre providedIn root, any y platform?',
      en: 'What is the difference between providedIn root, any and platform?',
    },
    answer: {
      es: 'root es una instancia para toda la aplicacion, platform es una por encima y compartida si hay varias apps en la pagina, y any crea una instancia distinta en cada injector perezoso.',
      en: 'root is one instance for the whole application, platform is one above that and shared if several apps run on the page, and any creates a different instance in each lazy injector.',
    },
    distractors: [
      {
        es: 'root se crea al arrancar, any en cada componente y platform solo en tests.',
        en: 'root is created at bootstrap, any on every component and platform only in tests.',
      },
      {
        es: 'Son alias del mismo singleton. El nombre solo cambia el mensaje de error si falta el provider.',
        en: 'They are aliases of the same singleton. The name only changes the error message if the provider is missing.',
      },
    ],
    explanation: {
      es: 'root ademas se puede sacar del bundle si nadie lo inyecta. Para un servicio acotado a una feature, hoy se provee en la ruta en lugar de usar any.',
      en: 'root can also be dropped from the bundle if nobody injects it. For a service scoped to a feature, you provide it on the route today instead of using any.',
    },
  },
  {
    id: 'fe-di-03',
    topic: 'Tokens',
    prompt: {
      es: '¿Para qué sirve un InjectionToken?',
      en: 'What is an InjectionToken for?',
    },
    answer: {
      es: 'Para inyectar algo que no es una clase, como un objeto de configuracion, un string o una interfaz. Esos tipos no existen en runtime y no pueden ser la clave.',
      en: 'To inject something that is not a class, such as a configuration object, a string or an interface. Those types do not exist at runtime and cannot be the key.',
    },
    distractors: [
      {
        es: 'Es obligatorio para usar inject, porque inject no acepta una clase.',
        en: 'It is required to use inject, because inject does not accept a class.',
      },
      {
        es: 'Sirve para marcar el servicio como singleton. Sin ese token, providedIn root no funciona.',
        en: 'It marks the service as a singleton. Without that token, providedIn root does not work.',
      },
    ],
    explanation: {
      es: 'Una clase sí vale como token porque es un valor JavaScript. La interfaz desaparece al compilar, por eso se crea un InjectionToken y se inyecta ese token.',
      en: 'A class is a valid token because it is a JavaScript value. An interface disappears at compile time, so you create an InjectionToken and inject that token.',
    },
  },
  {
    id: 'fe-di-04',
    topic: 'Providers',
    prompt: {
      es: '¿Qué diferencia hay entre useClass, useValue, useExisting y useFactory?',
      en: 'What is the difference between useClass, useValue, useExisting and useFactory?',
    },
    answer: {
      es: 'useClass crea una instancia de una clase y useValue registra un valor que ya tienes. useExisting es un alias a la misma instancia de otro token, y useFactory llama a una funcion para construir el valor.',
      en: 'useClass creates an instance of a class and useValue registers a value you already have. useExisting is an alias to the same instance of another token, and useFactory calls a function to build the value.',
    },
    distractors: [
      {
        es: 'useExisting clona el valor y useValue crea una clase. useFactory solo sirve en tests.',
        en: 'useExisting clones the value and useValue creates a class. useFactory only works in tests.',
      },
      {
        es: 'Los cuatro hacen new. Solo cambia si el constructor es publico o privado.',
        en: 'All four call new. The only difference is whether the constructor is public or private.',
      },
    ],
    explanation: {
      es: 'En un value accessor del propio componente usa useExisting, no useClass, para no crear una segunda instancia. La fabrica entra cuando el valor depende de otros servicios.',
      en: 'For a value accessor on the component itself, use useExisting, not useClass, so you do not create a second instance. The factory is for when the value depends on other services.',
    },
  },
  {
    id: 'fe-di-05',
    topic: 'Jerarquía',
    prompt: {
      es: '¿Qué es un injector jerárquico en Angular?',
      en: 'What is a hierarchical injector in Angular?',
    },
    answer: {
      es: 'Cada componente y cada entorno puede tener providers. Al inyectar, Angular empieza en el sitio más cercano y sube hasta encontrar el token.',
      en: 'Each component and each environment can have providers. When you inject, Angular starts at the closest place and walks up until it finds the token.',
    },
    distractors: [
      {
        es: 'Solo existe el injector raiz. Un provider en un componente se copia a root.',
        en: 'Only the root injector exists. A provider on a component is copied to root.',
      },
      {
        es: 'Gana siempre el provider de root, aunque el componente declare otro para el mismo token.',
        en: 'The root provider always wins, even if the component declares another one for the same token.',
      },
    ],
    explanation: {
      es: 'El más cercano tapa al de arriba. Por eso un servicio de root puede convivir con una instancia local en un componente o en una ruta.',
      en: 'The closest one shadows the one above. That is why a root service can live next to a local instance on a component or on a route.',
    },
  },
  {
    id: 'fe-di-06',
    topic: 'Alcance',
    prompt: {
      es: '¿Qué pasa si provees un servicio en el arreglo providers de un componente?',
      en: 'What happens if you provide a service in a component providers array?',
    },
    answer: {
      es: 'Esa instancia vive con el componente y la heredan sus hijos. Se destruye cuando el componente se destruye, y no es el singleton de la aplicacion.',
      en: 'That instance lives with the component and its children inherit it. It is destroyed when the component is destroyed, and it is not the application singleton.',
    },
    distractors: [
      {
        es: 'Se registra en root igual que providedIn root. El componente solo decide el nombre.',
        en: 'It is registered in root just like providedIn root. The component only chooses the name.',
      },
      {
        es: 'Solo la puede inyectar ese componente. Los hijos tienen que proveerla otra vez.',
        en: 'Only that component can inject it. Children have to provide it again.',
      },
    ],
    explanation: {
      es: 'Sirve para estado local de un widget. Si el servicio debe ser unico en la app, dejalo en providedIn root y no lo repitas en el componente.',
      en: 'It fits local state of a widget. If the service must be unique in the app, leave it on providedIn root and do not repeat it on the component.',
    },
  },
  {
    id: 'fe-di-07',
    topic: 'inject',
    prompt: {
      es: '¿Qué diferencia hay entre inject y la inyección por constructor?',
      en: 'What is the difference between inject and constructor injection?',
    },
    answer: {
      es: 'Las dos piden el mismo token al injector. inject solo vale en un contexto de inyeccion, como el constructor, un inicializador de campo o una fabrica, y fuera de ahi lanza.',
      en: 'Both ask the injector for the same token. inject only works in an injection context, such as the constructor, a field initializer or a factory, and outside of that it throws.',
    },
    distractors: [
      {
        es: 'inject funciona en cualquier metodo, incluido ngOnInit y un callback HTTP.',
        en: 'inject works in any method, including ngOnInit and an HTTP callback.',
      },
      {
        es: 'El constructor esta en desuso y inject es la unica forma valida en standalone.',
        en: 'The constructor is deprecated and inject is the only valid form in standalone components.',
      },
    ],
    explanation: {
      es: 'inject brilla en funciones provide y en campos. En ngOnInit ya no hay contexto: inyecta antes y guarda la referencia.',
      en: 'inject shines in provide functions and in fields. In ngOnInit the context is gone: inject earlier and keep the reference.',
    },
  },
  {
    id: 'fe-di-08',
    topic: 'Modificadores',
    prompt: {
      es: '¿Qué hacen Optional y SkipSelf al inyectar?',
      en: 'What do Optional and SkipSelf do when injecting?',
    },
    answer: {
      es: 'Optional devuelve null si no hay provider, en lugar de fallar. SkipSelf empieza la busqueda en el padre, saltandose el injector actual.',
      en: 'Optional returns null if there is no provider, instead of failing. SkipSelf starts the search at the parent, skipping the current injector.',
    },
    distractors: [
      {
        es: 'Optional retrasa la inyeccion al siguiente ciclo y SkipSelf clona la instancia del padre.',
        en: 'Optional delays injection to the next cycle and SkipSelf clones the parent instance.',
      },
      {
        es: 'SkipSelf busca solo en root y Optional convierte el servicio en un array.',
        en: 'SkipSelf looks only in root and Optional turns the service into an array.',
      },
    ],
    explanation: {
      es: 'SkipSelf es tipico cuando el componente provee el mismo token y aun asi necesita el de arriba. Self se queda en el injector actual y Host corta en el componente anfitrion.',
      en: 'SkipSelf is typical when the component provides the same token and still needs the one from above. Self stays on the current injector and Host stops at the host component.',
    },
  },
  {
    id: 'fe-di-09',
    topic: 'Multi',
    prompt: {
      es: '¿Qué hace un provider con multi true, como los interceptores HTTP?',
      en: 'What does a provider with multi true do, such as HTTP interceptors?',
    },
    answer: {
      es: 'Acumula varias implementaciones del mismo token y las entrega como un array. Si olvidas multi, el ultimo provider pisa a los anteriores.',
      en: 'It collects several implementations of the same token and delivers them as an array. If you forget multi, the last provider overwrites the previous ones.',
    },
    distractors: [
      {
        es: 'Crea una instancia nueva en cada peticion HTTP.',
        en: 'It creates a new instance on every HTTP request.',
      },
      {
        es: 'Sin multi, Angular lanza un error de provider duplicado y no arranca.',
        en: 'Without multi, Angular throws a duplicate provider error and does not bootstrap.',
      },
    ],
    explanation: {
      es: 'El orden del array es el orden en que corren los interceptores. No es un singleton extra: son varias clases bajo una sola clave.',
      en: 'Array order is the order interceptors run in. It is not an extra singleton: it is several classes under one key.',
    },
  },
  {
    id: 'fe-di-10',
    topic: 'forwardRef',
    prompt: {
      es: '¿Para qué sirve forwardRef?',
      en: 'What is forwardRef for?',
    },
    answer: {
      es: 'Para referirte a una clase que todavia no esta inicializada, por ejemplo cuando un componente se provee a sí mismo en sus providers.',
      en: 'To refer to a class that is not initialised yet, for example when a component provides itself in its providers.',
    },
    distractors: [
      {
        es: 'Para partir un import circular de archivos. Sin eso el bundler no hace tree shaking.',
        en: 'To break a circular import between files. Without it the bundler does not tree-shake.',
      },
      {
        es: 'Para hacer lazy loading de un servicio la primera vez que se inyecta.',
        en: 'To lazy load a service the first time it is injected.',
      },
    ],
    explanation: {
      es: 'Los metadatos del decorador se leen mientras la clase aun se esta declarando. Un import circular de modulos se arregla partiendo archivos, no con forwardRef.',
      en: 'Decorator metadata is read while the class is still being declared. A circular module import is fixed by splitting files, not with forwardRef.',
    },
  },
  {
    id: 'fe-di-11',
    topic: 'Rutas',
    prompt: {
      es: '¿Qué alcance tiene un servicio declarado en los providers de una ruta?',
      en: 'What is the scope of a service declared in a route providers array?',
    },
    answer: {
      es: 'Es un singleton de esa ruta y de sus hijas, y se destruye al salir. Un hermano de ruta no ve esa instancia.',
      en: 'It is a singleton for that route and its children, and it is destroyed when you leave. A sibling route does not see that instance.',
    },
    distractors: [
      {
        es: 'Queda en root. Ponerlo en la ruta solo cambia el momento en que se descarga el chunk.',
        en: 'It lands in root. Putting it on the route only changes when the chunk is downloaded.',
      },
      {
        es: 'Solo lo ve el componente de esa ruta. Las rutas hijas tienen que declararlo otra vez.',
        en: 'Only the component of that route sees it. Child routes have to declare it again.',
      },
    ],
    explanation: {
      es: 'Sirve para estado de una feature perezosa. No lo confundas con providers del componente: la ruta crea un injector de entorno, no uno de la vista.',
      en: 'It fits state for a lazy feature. Do not confuse it with component providers: the route creates an environment injector, not a view injector.',
    },
  },
  {
    id: 'fe-di-12',
    topic: 'Vista',
    prompt: {
      es: '¿Qué diferencia hay entre providers y viewProviders?',
      en: 'What is the difference between providers and viewProviders?',
    },
    answer: {
      es: 'providers los ve el componente, sus hijos y el contenido proyectado. viewProviders los ve la vista del componente, pero no lo que el padre proyecto dentro.',
      en: 'providers are visible to the component, its children and projected content. viewProviders are visible to the component view, but not to what the parent projected inside.',
    },
    distractors: [
      {
        es: 'viewProviders es el nombre de providers cuando el componente es standalone.',
        en: 'viewProviders is the name of providers when the component is standalone.',
      },
      {
        es: 'viewProviders publica el servicio en root y providers lo deja solo en el hijo directo.',
        en: 'viewProviders publishes the service in root and providers keeps it only on the direct child.',
      },
    ],
    explanation: {
      es: 'Si una directiva proyectada no encuentra el servicio, mira si estaba en viewProviders. Para que el contenido lo use, va en providers.',
      en: 'If a projected directive cannot find the service, check whether it was on viewProviders. For projected content to use it, put it in providers.',
    },
  },
  {
    id: 'fe-di-13',
    topic: 'Tree shaking',
    prompt: {
      es: '¿Qué diferencia hay entre un servicio con providedIn root y uno listado en un NgModule?',
      en: 'What is the difference between a service with providedIn root and one listed on an NgModule?',
    },
    answer: {
      es: 'providedIn root se puede eliminar del bundle si nadie lo inyecta. El que esta en el array providers de un modulo se queda, porque el modulo lo referencia.',
      en: 'providedIn root can be removed from the bundle if nobody injects it. One listed in an NgModule providers array stays, because the module references it.',
    },
    distractors: [
      {
        es: 'El del modulo es el que se elimina, porque el compilador mira las plantillas. providedIn root siempre entra en el bundle.',
        en: 'The module one is the one that gets removed, because the compiler reads the templates. providedIn root always lands in the bundle.',
      },
      {
        es: 'No hay diferencia: los dos desaparecen si no hay un inject, y los dos se crean al importar el archivo.',
        en: 'There is no difference: both disappear if there is no inject, and both are created when the file is imported.',
      },
    ],
    explanation: {
      es: 'Los dos se instancian en el primer inject, no al importar. En una app standalone, meter el servicio en el bootstrap a mano tambien lo ata al bundle.',
      en: 'Both are created on the first inject, not at import time. In a standalone app, putting the service in bootstrap by hand also ties it to the bundle.',
    },
  },
  {
    id: 'fe-di-14',
    topic: 'Tests',
    prompt: {
      es: '¿Cómo se testea un componente o un servicio de Angular?',
      en: 'How do you test an Angular component or service?',
    },
    answer: {
      es: 'Con TestBed configuras el modulo de test y sustituyes dependencias por dobles con useValue. Creas el componente, llamas a detectChanges y compruebas el DOM, o inyectas el servicio y llamas a sus metodos.',
      en: 'With TestBed you configure the testing module and replace dependencies with doubles using useValue. You create the component, call detectChanges and assert on the DOM, or you inject the service and call its methods.',
    },
    distractors: [
      {
        es: 'Se hace new del componente y se le pasa el servicio real. TestBed solo sirve para el e2e.',
        en: 'You call new on the component and pass the real service. TestBed is only for e2e.',
      },
      {
        es: 'Hay que levantar el navegador y pulsar la UI. Un servicio no se puede probar sin renderizar la app.',
        en: 'You must start the browser and click the UI. A service cannot be tested without rendering the app.',
      },
    ],
    explanation: {
      es: 'overrideProvider cambia la receta antes de crear el componente. Si lo haces despues, el componente ya recibio la clase real.',
      en: 'overrideProvider replaces the recipe before the component is created. If you do it afterwards, the component already received the real class.',
    },
  },
  {
    id: 'fe-di-15',
    topic: 'Configuración',
    prompt: {
      es: '¿Cómo se inyecta un objeto de configuración?',
      en: 'How do you inject a configuration object?',
    },
    answer: {
      es: 'Creas un InjectionToken y lo provees con useValue. Quien lo inyecta recibe ese mismo objeto.',
      en: 'You create an InjectionToken and provide it with useValue. Whoever injects it receives that same object.',
    },
    distractors: [
      {
        es: 'Se exporta un const y se importa en cada clase. El injector no admite objetos.',
        en: 'You export a const and import it in every class. The injector does not accept objects.',
      },
      {
        es: 'useValue clona el objeto en cada inyeccion, asi cada servicio tiene su copia.',
        en: 'useValue clones the object on every injection, so each service has its own copy.',
      },
    ],
    explanation: {
      es: 'Es la misma referencia para todos, asi que si la mutas, mutas el singleton. Si el valor depende de otro servicio, usa useFactory en lugar de useValue.',
      en: 'It is the same reference for everyone, so if you mutate it, you mutate the singleton. If the value depends on another service, use useFactory instead of useValue.',
    },
  },
  {
    id: 'fe-di-16',
    topic: 'provide',
    prompt: {
      es: '¿Qué es una función provide, como provideRouter o provideHttpClient?',
      en: 'What is a provide function, such as provideRouter or provideHttpClient?',
    },
    answer: {
      es: 'Es una funcion que devuelve los providers de esa feature, listos para el bootstrap o para una ruta. Sustituye a importar el modulo solo para registrar servicios.',
      en: 'It is a function that returns the providers for that feature, ready for bootstrap or for a route. It replaces importing a module only to register services.',
    },
    distractors: [
      {
        es: 'Se llama dentro del constructor de un componente para activar el router en esa vista.',
        en: 'You call it inside a component constructor to turn the router on for that view.',
      },
      {
        es: 'Registra componentes en declarations. No tiene relacion con la inyeccion.',
        en: 'It registers components in declarations. It has nothing to do with injection.',
      },
    ],
    explanation: {
      es: 'En bootstrapApplication pasas provideRouter con las rutas y provideHttpClient si hay HTTP. Las opciones, como los interceptores, van en esa misma llamada.',
      en: 'In bootstrapApplication you pass provideRouter with the routes and provideHttpClient if there is HTTP. Options, such as interceptors, go in that same call.',
    },
  },
  {
    id: 'fe-di-17',
    topic: 'Errores',
    prompt: {
      es: '¿Qué significa un NullInjectorError?',
      en: 'What does a NullInjectorError mean?',
    },
    answer: {
      es: 'Que Angular recorrio los inyectores y no encontro un provider para ese token. Revisa providedIn, los providers del componente o los de la ruta.',
      en: 'That Angular walked the injectors and found no provider for that token. Check providedIn, the component providers or the route providers.',
    },
    distractors: [
      {
        es: 'Que el servicio existia pero su injector ya se destruyo, y hay que volver a crearlo con new.',
        en: 'That the service existed but its injector was already destroyed, and you must create it again with new.',
      },
      {
        es: 'Que hay dos providers para el mismo token. Se arregla poniendo multi true.',
        en: 'That there are two providers for the same token. It is fixed by setting multi true.',
      },
    ],
    explanation: {
      es: 'El mensaje nombra el token que falta, y un Self o un Host mal puesto puede cortar la busqueda aunque el provider exista más arriba. Duplicar un provider sin multi no lanza este error: pisa al anterior.',
      en: 'The message names the missing token, and a misplaced Self or Host can cut the search even if the provider exists higher up. Duplicating a provider without multi does not throw this error: it overwrites the previous one.',
    },
  },
  {
    id: 'fe-di-18',
    topic: 'Tokens',
    prompt: {
      es: '¿Se puede usar una clase abstracta como token?',
      en: 'Can an abstract class be used as a token?',
    },
    answer: {
      es: 'Sí: existe en runtime, asi que provide apunta a la abstracta y useClass a la implementacion. Una interfaz no sirve y ahi hace falta un InjectionToken.',
      en: 'Yes: it exists at runtime, so provide points at the abstract class and useClass at the implementation. An interface does not work and that needs an InjectionToken.',
    },
    distractors: [
      {
        es: 'No. Las clases abstractas se borran igual que las interfaces y no pueden ser provide.',
        en: 'No. Abstract classes are erased just like interfaces and cannot be used as provide.',
      },
      {
        es: 'Si, pero Angular instancia la abstracta y la concreta, y hay que elegir con Optional.',
        en: 'Yes, but Angular instantiates both the abstract class and the concrete one, and you choose with Optional.',
      },
    ],
    explanation: {
      es: 'Es el patron de un puerto y un adaptador: el componente pide la abstraccion y el provider decide la clase real. useClass construye una instancia nueva de la implementacion.',
      en: 'It is the port and adapter pattern: the component asks for the abstraction and the provider picks the real class. useClass builds a new instance of the implementation.',
    },
  },
  {
    id: 'fe-di-19',
    topic: 'Lazy loading',
    prompt: {
      es: '¿Por qué una ruta perezosa puede tener su propia instancia de un servicio?',
      en: 'Why can a lazy route have its own instance of a service?',
    },
    answer: {
      es: 'Porque esa ruta crea un injector propio. Si el servicio esta en los providers de la ruta es otra instancia que muere al salir, y si solo tiene providedIn root se comparte con el resto de la app.',
      en: 'Because that route creates its own injector. If the service is in the route providers it is another instance that dies when you leave, and if it only has providedIn root it is shared with the rest of the app.',
    },
    distractors: [
      {
        es: 'Toda ruta perezosa clona sola los servicios de root, aunque no declare providers.',
        en: 'Every lazy route clones root services by itself, even if it declares no providers.',
      },
      {
        es: 'El injector perezoso se fusiona con root al terminar la descarga, asi que la instancia local dura solo la carga.',
        en: 'The lazy injector merges into root when the download finishes, so the local instance lasts only for the load.',
      },
    ],
    explanation: {
      es: 'El aislamiento no viene de ser lazy: viene de proveer el servicio en esa ruta. loadComponent y loadChildren crean ese injector para el arbol que cargan.',
      en: 'Isolation does not come from being lazy: it comes from providing the service on that route. loadComponent and loadChildren create that injector for the tree they load.',
    },
  },
  {
    id: 'fe-di-20',
    topic: 'Limpieza',
    prompt: {
      es: '¿Cómo se relaciona DestroyRef con takeUntilDestroyed?',
      en: 'How does DestroyRef relate to takeUntilDestroyed?',
    },
    answer: {
      es: 'DestroyRef avisa cuando se destruye el contexto actual. takeUntilDestroyed se engancha a ese aviso para cerrar la suscripcion.',
      en: 'DestroyRef notifies you when the current context is destroyed. takeUntilDestroyed hooks into that notice to close the subscription.',
    },
    distractors: [
      {
        es: 'takeUntilDestroyed completa el HTTP en el constructor y no se puede usar en ningun otro sitio.',
        en: 'takeUntilDestroyed completes the HTTP call in the constructor and cannot be used anywhere else.',
      },
      {
        es: 'DestroyRef sustituye a ngOnDestroy y no tiene relacion con RxJS.',
        en: 'DestroyRef replaces ngOnDestroy and has nothing to do with RxJS.',
      },
    ],
    explanation: {
      es: 'Si llamas a takeUntilDestroyed en un contexto de inyeccion, el DestroyRef lo resuelve solo. Si te suscribes más tarde, pasale el DestroyRef que ya inyectaste.',
      en: 'If you call takeUntilDestroyed in an injection context, it resolves DestroyRef on its own. If you subscribe later, pass the DestroyRef you already injected.',
    },
  },
];
