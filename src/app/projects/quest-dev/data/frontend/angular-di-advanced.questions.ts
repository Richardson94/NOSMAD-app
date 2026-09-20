import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_ANGULAR_DI_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-di-01',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Para qué sirve un InjectionToken y cuándo es imprescindible usarlo?',
      en: 'What is an InjectionToken for and when is it indispensable?',
    },
    answer: {
      es: 'Es un token de inyección para valores que no son una clase; resulta imprescindible con interfaces, primitivos y objetos de configuración porque esos tipos se borran en tiempo de ejecución y Angular no puede usarlos como clave.',
      en: 'It is an injection token for values that are not a class; it is indispensable with interfaces, primitives and configuration objects because those types are erased at runtime and Angular cannot use them as a key.',
    },
    distractors: [
      {
        es: 'Solo sirve para marcar un servicio como tree-shakeable; sin InjectionToken providedIn root no elimina la clase del bundle.',
        en: 'It only exists to mark a service as tree-shakeable; without an InjectionToken providedIn root does not drop the class from the bundle.',
      },
      {
        es: 'Es obligatorio siempre que se use inject(), porque inject no acepta una clase como token y exige un InjectionToken genérico.',
        en: 'It is mandatory whenever inject() is used, because inject does not accept a class as a token and requires a generic InjectionToken.',
      },
    ],
    explanation: {
      es: 'Una interfaz TypeScript desaparece al compilar, así que no existe un valor que el inyector pueda usar como clave; new InjectionToken<AppConfig>("AppConfig") sí existe en runtime. Se consume con inject(APP_CONFIG) o con @Inject(APP_CONFIG) en el constructor. Las clases siguen siendo tokens válidos porque son valores JavaScript, y providedIn en el segundo argumento del InjectionToken es opcional para hacerlo tree-shakeable, no la razón de ser del token. Sin un token real la búsqueda acaba en NullInjectorError.',
      en: 'A TypeScript interface disappears at compile time, so there is no runtime value the injector can use as a key; new InjectionToken<AppConfig>("AppConfig") does exist at runtime. It is consumed with inject(APP_CONFIG) or with @Inject(APP_CONFIG) on the constructor. Classes remain valid tokens because they are JavaScript values, and providedIn on the second argument of InjectionToken is optional to make it tree-shakeable, not the reason the token exists. Without a real token the lookup ends in NullInjectorError.',
    },
  },
  {
    id: 'fe-di-02',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Qué hace un proveedor con multi true, como los interceptores HTTP?',
      en: 'What does a provider with multi true do, such as HTTP interceptors?',
    },
    answer: {
      es: 'Acumula todas las recetas del mismo token en un arreglo que el consumidor inyecta de una vez; HTTP_INTERCEPTORS es el caso típico, y si se omite multi true el último proveedor pisa a los anteriores.',
      en: 'It collects every recipe for the same token into an array that the consumer injects at once; HTTP_INTERCEPTORS is the typical case, and if multi true is omitted the last provider overwrites the previous ones.',
    },
    distractors: [
      {
        es: 'Instancia N copias de la misma clase, una por cada inyección, que es como HttpClient garantiza un interceptor fresco por petición.',
        en: 'It instantiates N copies of the same class, one per injection, which is how HttpClient guarantees a fresh interceptor per request.',
      },
      {
        es: 'Sin multi true Angular lanza un error de proveedor duplicado; con multi true el token deja de ser singleton y se recrea en cada ruta.',
        en: 'Without multi true Angular throws a duplicate provider error; with multi true the token stops being a singleton and is recreated on every route.',
      },
    ],
    explanation: {
      es: 'multi true no multiplica instancias de una clase: registra varias implementaciones bajo un único token y las entrega como arreglo. HTTP_INTERCEPTORS, NG_VALUE_ACCESSOR, APP_INITIALIZER y ENVIRONMENT_INITIALIZER usan ese mecanismo. Si se olvida multi, el último provide reemplaza a los anteriores en silencio, no hay error de duplicado. provideHttpClient(withInterceptors(...)) en Angular 15 sigue el mismo contrato: el orden del arreglo es el orden de ejecución.',
      en: 'multi true does not multiply instances of one class: it registers several implementations under a single token and delivers them as an array. HTTP_INTERCEPTORS, NG_VALUE_ACCESSOR, APP_INITIALIZER and ENVIRONMENT_INITIALIZER use that mechanism. If multi is omitted, the last provide silently replaces the previous ones; there is no duplicate error. provideHttpClient(withInterceptors(...)) in Angular 15 follows the same contract: array order is execution order.',
    },
  },
  {
    id: 'fe-di-03',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Cómo resuelve useFactory las dependencias declaradas en deps?',
      en: 'How does useFactory resolve the dependencies declared in deps?',
    },
    answer: {
      es: 'El inyector resuelve cada token de deps y se los pasa a la fábrica como argumentos, en el mismo orden, para construir el valor sin inyección por constructor.',
      en: 'The injector resolves each token in deps and passes them to the factory as arguments, in the same order, so the value can be built without constructor injection.',
    },
    distractors: [
      {
        es: 'deps lista los tokens que la fábrica va a registrar a su vez; el inyector ignora los parámetros de la función y solo mira ese arreglo de salida.',
        en: 'deps lists the tokens that the factory will itself register; the injector ignores the function parameters and only looks at that output array.',
      },
      {
        es: 'Los tokens de deps se buscan siempre con SkipSelf para evitar ciclos, así que un servicio declarado en el mismo inyector no puede alimentarse a la fábrica.',
        en: 'The deps tokens are always looked up with SkipSelf to avoid cycles, so a service declared in the same injector cannot feed the factory.',
      },
    ],
    explanation: {
      es: 'La receta { provide: X, useFactory: (http, cfg) => ..., deps: [HttpClient, APP_CONFIG] } equivale a inyectar esos dos tokens y llamarlos como parámetros. Si deps está vacío o incompleto, la fábrica se invoca con undefined y el fallo aparece después, no como NullInjectorError de la receta. Desde Angular 14 la fábrica corre en contexto de inyección y también puede usar inject(), pero deps sigue siendo la forma explícita y no implica SkipSelf. El valor resultante es singleton en ese inyector, igual que useClass.',
      en: 'The recipe { provide: X, useFactory: (http, cfg) => ..., deps: [HttpClient, APP_CONFIG] } is equivalent to injecting those two tokens and passing them as parameters. If deps is empty or incomplete, the factory is called with undefined and the failure shows up later, not as a NullInjectorError of the recipe. Since Angular 14 the factory runs in an injection context and can also use inject(), but deps remains the explicit form and does not imply SkipSelf. The resulting value is a singleton in that injector, just like useClass.',
    },
  },
  {
    id: 'fe-di-04',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Qué hace useExisting al registrar un proveedor?',
      en: 'What does useExisting do when registering a provider?',
    },
    answer: {
      es: 'Crea un alias: el token nuevo resuelve a la misma instancia que el token ya registrado, sin construir otra.',
      en: 'It creates an alias: the new token resolves to the same instance as the already registered token, without constructing another one.',
    },
    distractors: [
      {
        es: 'Instancia una clase distinta con el mismo contrato, igual que useClass, y deja dos singletons conviviendo bajo nombres distintos.',
        en: 'It instantiates a different class with the same contract, just like useClass, and leaves two singletons living under different names.',
      },
      {
        es: 'Copia el valor actual de un useValue y lo congela; si el token original cambia después, el alias no se entera.',
        en: 'It copies the current value of a useValue and freezes it; if the original token changes later, the alias does not notice.',
      },
    ],
    explanation: {
      es: 'useExisting no llama a new: redirige un token a otro, de modo que inject(Logger) e inject(ConsoleLogger) devuelven la misma referencia. useClass construiría una instancia nueva, que es el error clásico al registrar NG_VALUE_ACCESSOR sobre el propio componente: hay que useExisting más forwardRef. El patrón existe desde las primeras versiones del DI y no congela un useValue; consulta el token destino en cada resolución. Sirve para alias de clases abstractas o para exponer un componente como otro token.',
      en: 'useExisting does not call new: it redirects one token to another, so inject(Logger) and inject(ConsoleLogger) return the same reference. useClass would construct a new instance, which is the classic mistake when registering NG_VALUE_ACCESSOR on the component itself: you need useExisting plus forwardRef. The pattern has existed since the earliest DI versions and does not freeze a useValue; it looks up the target token on every resolution. It is useful as an alias for abstract classes or to expose a component as another token.',
    },
  },
  {
    id: 'fe-di-05',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Para qué se usa useValue al proveer un objeto de configuración?',
      en: 'What is useValue for when providing a configuration object?',
    },
    answer: {
      es: 'Registra un valor ya construido, típico de objetos de configuración constantes que no necesitan new ni fábrica.',
      en: 'It registers an already constructed value, typical of constant configuration objects that do not need new or a factory.',
    },
    distractors: [
      {
        es: 'Clona el objeto en cada inyección para que cada consumidor reciba una copia mutable independiente de la configuración.',
        en: 'It clones the object on every injection so that each consumer receives an independent mutable copy of the configuration.',
      },
      {
        es: 'Solo acepta primitivos; para un objeto hay que usar useFactory porque useValue rechaza literales que no sean string o number.',
        en: 'It only accepts primitives; for an object you must use useFactory because useValue rejects literals that are not string or number.',
      },
    ],
    explanation: {
      es: 'useValue entrega la misma referencia a todos los inject de ese inyector: no clona ni llama a new. El patrón habitual es { provide: APP_CONFIG, useValue: { apiUrl: "..." } } junto a un InjectionToken<AppConfig>. Mutar ese objeto muta el singleton compartido, lo que en tests se nota al filtrar estado entre casos. No está limitado a primitivos; useFactory entra en juego cuando el valor depende de otros providers, no porque el objeto sea complejo.',
      en: 'useValue hands the same reference to every inject of that injector: it does not clone and it does not call new. The usual pattern is { provide: APP_CONFIG, useValue: { apiUrl: "..." } } together with an InjectionToken<AppConfig>. Mutating that object mutates the shared singleton, which in tests shows up as state leaking between cases. It is not limited to primitives; useFactory comes in when the value depends on other providers, not because the object is complex.',
    },
  },
  {
    id: 'fe-di-06',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿En qué se diferencia el inyector de elemento del inyector de entorno?',
      en: 'How does the element injector differ from the environment injector?',
    },
    answer: {
      es: 'El de elemento recorre la jerarquía de componentes y directivas del DOM; el de entorno es el de la aplicación, módulos o rutas, y se consulta solo si el de elemento no encuentra el token.',
      en: 'The element injector walks the hierarchy of components and directives in the DOM; the environment injector belongs to the application, modules or routes, and is consulted only if the element injector does not find the token.',
    },
    distractors: [
      {
        es: 'El de entorno se busca primero porque providedIn root vive ahí; el de elemento solo entra si se usó viewProviders en el componente.',
        en: 'The environment injector is searched first because providedIn root lives there; the element injector is only used if viewProviders was set on the component.',
      },
      {
        es: 'En Angular 17 standalone ya no existe el inyector de elemento: todo provider, incluso el de un componente, se registra en el EnvironmentInjector raíz.',
        en: 'In Angular 17 standalone the element injector no longer exists: every provider, even one on a component, is registered in the root EnvironmentInjector.',
      },
    ],
    explanation: {
      es: 'Ivy mantiene dos jerarquías: NodeInjector por cada elemento (providers y viewProviders del componente o directiva) y EnvironmentInjector para bootstrapApplication, NgModule y Route.providers. La búsqueda sube primero por el DOM y después por entorno, plataforma y NullInjector. viewProviders no son visibles para el contenido proyectado, a diferencia de providers. Standalone en Angular 17 no elimina el inyector de elemento: un array providers en @Component sigue creando uno local.',
      en: 'Ivy keeps two hierarchies: a NodeInjector per element (providers and viewProviders of the component or directive) and an EnvironmentInjector for bootstrapApplication, NgModule and Route.providers. Lookup walks the DOM first and then environment, platform and NullInjector. viewProviders are not visible to projected content, unlike providers. Standalone in Angular 17 does not remove the element injector: a providers array on @Component still creates a local one.',
    },
  },
  {
    id: 'fe-di-07',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Qué hacen los modificadores Optional, Self, SkipSelf y Host al resolver una dependencia?',
      en: 'What do the Optional, Self, SkipSelf and Host modifiers do when resolving a dependency?',
    },
    answer: {
      es: 'Optional devuelve null si no hay proveedor; Self limita la búsqueda al inyector actual; SkipSelf empieza en el padre; Host corta en el componente anfitrión.',
      en: 'Optional returns null if there is no provider; Self limits the search to the current injector; SkipSelf starts at the parent; Host stops at the host component.',
    },
    distractors: [
      {
        es: 'Host y Self son sinónimos y ambos suben hasta la raíz; SkipSelf lanza si el padre no define el token, y Optional retrasa la resolución al siguiente ciclo.',
        en: 'Host and Self are synonyms and both walk up to the root; SkipSelf throws if the parent does not define the token, and Optional delays resolution until the next cycle.',
      },
      {
        es: 'Optional omite el token en AOT; Self fuerza providedIn root; SkipSelf clona la instancia del padre; Host inyecta el ElementRef anfitrión en lugar del servicio pedido.',
        en: 'Optional drops the token in AOT; Self forces providedIn root; SkipSelf clones the parent instance; Host injects the host ElementRef instead of the requested service.',
      },
    ],
    explanation: {
      es: 'Los cuatro existen como @Optional @Self @SkipSelf @Host y, desde Angular 14, como inject(token, { optional: true, self: true, skipSelf: true, host: true }). Optional evita NullInjectorError y entrega null; Self no sube ni al padre ni al entorno; SkipSelf ignora el inyector actual, patrón típico cuando el propio componente provee el mismo token; Host se detiene en el anfitrión, clave en directivas de formulario. Self sin Optional cuando el token está solo en el padre reproduce exactamente No provider for X.',
      en: 'All four exist as @Optional @Self @SkipSelf @Host and, since Angular 14, as inject(token, { optional: true, self: true, skipSelf: true, host: true }). Optional avoids NullInjectorError and yields null; Self does not walk to the parent or the environment; SkipSelf ignores the current injector, a typical pattern when the component itself provides the same token; Host stops at the host, which is key in form directives. Self without Optional when the token lives only on the parent reproduces exactly No provider for X.',
    },
  },
  {
    id: 'fe-di-08',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Para qué sirve forwardRef cuando hay referencias circulares entre clases?',
      en: 'What is forwardRef for when there are circular references between classes?',
    },
    answer: {
      es: 'Retrasa la evaluación del token hasta que la clase exista, lo que permite usarla en metadatos de providers o en el constructor aunque todavía esté en temporal dead zone.',
      en: 'It delays evaluation of the token until the class exists, which allows using it in provider metadata or in the constructor even though it is still in the temporal dead zone.',
    },
    distractors: [
      {
        es: 'Rompe los ciclos de imports ES reemplazando import por una carga perezosa interna; sin forwardRef el bundler deja de tree-shakear esos archivos.',
        en: 'It breaks ES import cycles by replacing import with an internal lazy load; without forwardRef the bundler stops tree-shaking those files.',
      },
      {
        es: 'Solo aplica a inject(); la inyección por constructor resuelve el ciclo sola porque Angular instancia las clases en dos pasadas.',
        en: 'It only applies to inject(); constructor injection resolves the cycle by itself because Angular instantiates the classes in two passes.',
      },
    ],
    explanation: {
      es: 'Los metadatos de @Component y @Injectable se evalúan mientras la clase aún es undefined, de ahí Cannot access X before initialization o proveedores rotos si no se envuelve con forwardRef(() => X). Lo mismo ocurre con dos servicios que se inyectan mutuamente en el mismo archivo, tanto en el constructor como con inject(forwardRef(() => OtherService)). No arregla imports circulares de módulos ES: eso se soluciona partiendo archivos. El patrón es antiguo y sigue siendo obligatorio en Angular 17 para NG_VALUE_ACCESSOR sobre el propio componente.',
      en: 'Metadata of @Component and @Injectable is evaluated while the class is still undefined, hence Cannot access X before initialization or broken providers if it is not wrapped with forwardRef(() => X). The same happens with two services that inject each other in the same file, both in the constructor and with inject(forwardRef(() => OtherService)). It does not fix circular ES module imports: that is solved by splitting files. The pattern is old and remains mandatory in Angular 17 for NG_VALUE_ACCESSOR on the component itself.',
    },
  },
  {
    id: 'fe-di-09',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿En qué se diferencia inject() de la inyección por constructor y qué reglas tiene el contexto de inyección?',
      en: 'How does inject() differ from constructor injection and what are the injection context rules?',
    },
    answer: {
      es: 'inject puede llamarse en constructores, inicializadores de campo y fábricas que corren en un contexto de inyección; fuera de ese contexto lanza un error, a diferencia de los parámetros del constructor que Angular resuelve al instanciar.',
      en: 'inject can be called in constructors, field initializers and factories that run in an injection context; outside that context it throws, unlike constructor parameters that Angular resolves when instantiating.',
    },
    distractors: [
      {
        es: 'inject funciona en cualquier método, incluido ngOnInit y callbacks HTTP, porque lee el inyector actual del EnvironmentInjector raíz.',
        en: 'inject works in any method, including ngOnInit and HTTP callbacks, because it reads the current injector from the root EnvironmentInjector.',
      },
      {
        es: 'En Angular 17 la inyección por constructor está deprecada y inject es el único mecanismo soportado en componentes standalone.',
        en: 'In Angular 17 constructor injection is deprecated and inject is the only mechanism supported in standalone components.',
      },
    ],
    explanation: {
      es: 'inject se introdujo en Angular 14 y exige un contexto de inyección: constructor, inicializador de campo, fábrica de provider o una función lanzada con runInInjectionContext. Fuera de ahí lanza NG0203: inject() must be called from an injection context, típico al usarlo en ngOnInit. El constructor no tiene esa restricción porque el runtime resuelve los parámetros al hacer new. En Angular 17 ambas APIs conviven; inject brilla en funciones provideX y en campos, no sustituye al constructor por decreto.',
      en: 'inject was introduced in Angular 14 and requires an injection context: constructor, field initializer, provider factory or a function run with runInInjectionContext. Outside that it throws NG0203: inject() must be called from an injection context, typical when using it in ngOnInit. The constructor does not have that restriction because the runtime resolves the parameters when calling new. In Angular 17 both APIs coexist; inject shines in provideX functions and in fields, it does not replace the constructor by decree.',
    },
  },
  {
    id: 'fe-di-10',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Qué es el patrón de funciones provideX y qué papel tiene ENVIRONMENT_INITIALIZER?',
      en: 'What is the provideX function pattern and what role does ENVIRONMENT_INITIALIZER play?',
    },
    answer: {
      es: 'provideX es una función que devuelve providers listos para bootstrapApplication o para una ruta; ENVIRONMENT_INITIALIZER es un token multi que ejecuta lógica al crear el inyector de entorno.',
      en: 'provideX is a function that returns providers ready for bootstrapApplication or for a route; ENVIRONMENT_INITIALIZER is a multi token that runs logic when the environment injector is created.',
    },
    distractors: [
      {
        es: 'provideX debe invocarse dentro del constructor de un servicio raíz; ENVIRONMENT_INITIALIZER es el nuevo nombre de APP_INITIALIZER y puede devolver una Promise que retrasa el bootstrap.',
        en: 'provideX must be invoked inside the constructor of a root service; ENVIRONMENT_INITIALIZER is the new name of APP_INITIALIZER and can return a Promise that delays bootstrap.',
      },
      {
        es: 'provideX registra componentes standalone en el router; ENVIRONMENT_INITIALIZER sustituye a providedIn root y hace tree-shakeable cualquier clase pasada como argumento.',
        en: 'provideX registers standalone components in the router; ENVIRONMENT_INITIALIZER replaces providedIn root and makes any class passed as an argument tree-shakeable.',
      },
    ],
    explanation: {
      es: 'provideHttpClient y provideRouter, estables desde Angular 15, devuelven EnvironmentProviders que aceptan bootstrapApplication y Route.providers. Por dentro registran ENVIRONMENT_INITIALIZER, un token multi de Angular 14.2 que corre lógica síncrona al crear ese EnvironmentInjector, por ejemplo para instalar interceptores. No es APP_INITIALIZER: ese sí puede devolver una Promise y retrasa el arranque. Mezclarlos al migrar NgModules a standalone es un error habitual.',
      en: 'provideHttpClient and provideRouter, stable since Angular 15, return EnvironmentProviders that bootstrapApplication and Route.providers accept. Internally they register ENVIRONMENT_INITIALIZER, a multi token from Angular 14.2 that runs synchronous logic when that EnvironmentInjector is created, for example to install interceptors. It is not APP_INITIALIZER: that one can return a Promise and delays startup. Mixing them when migrating NgModules to standalone is a common mistake.',
    },
  },
  {
    id: 'fe-di-11',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Cuál es el alcance de los providers declarados en una ruta?',
      en: 'What is the scope of providers declared on a route?',
    },
    answer: {
      es: 'Viven en el EnvironmentInjector de esa ruta y de sus hijas, así que el servicio es un singleton dentro de ese árbol de rutas, no de toda la aplicación.',
      en: 'They live in the EnvironmentInjector of that route and its children, so the service is a singleton within that route tree, not across the whole application.',
    },
    distractors: [
      {
        es: 'Se registran en el inyector de elemento del componente de la ruta, de modo que solo esa instancia del componente puede inyectarlos y los hijos de ruta no los ven.',
        en: 'They are registered on the element injector of the route component, so only that component instance can inject them and child routes cannot see them.',
      },
      {
        es: 'Quedan en el inyector raíz igual que providedIn root; declararlos en la ruta solo controla cuándo se importa el chunk, no el alcance de la instancia.',
        en: 'They land in the root injector just like providedIn root; declaring them on the route only controls when the chunk is imported, not the instance scope.',
      },
    ],
    explanation: {
      es: 'Desde Angular 15 una Route puede declarar providers y Angular crea un EnvironmentInjector hijo para esa ruta y sus hijas. El servicio es singleton en ese árbol y se destruye al salir de la ruta. Un hermano de ruta no ve esa instancia. No se mezclan con el inyector de elemento del componente: la configuración de la ruta no es viewProviders. Tampoco se promocionan a root por el hecho de estar en el router.',
      en: 'Since Angular 15 a Route can declare providers and Angular creates a child EnvironmentInjector for that route and its children. The service is a singleton in that tree and is destroyed when leaving the route. A sibling route does not see that instance. They are not mixed with the component element injector: route configuration is not viewProviders. They are also not promoted to root just because they sit on the router.',
    },
  },
  {
    id: 'fe-di-12',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿En qué se diferencia el inyector de plataforma del inyector raíz?',
      en: 'How does the platform injector differ from the root injector?',
    },
    answer: {
      es: 'El de plataforma lo crea platformBrowser y contiene tokens como PLATFORM_ID; el raíz lo crea bootstrapApplication y es donde viven los servicios providedIn root.',
      en: 'The platform injector is created by platformBrowser and holds tokens such as PLATFORM_ID; the root injector is created by bootstrapApplication and is where providedIn root services live.',
    },
    distractors: [
      {
        es: 'Son el mismo EnvironmentInjector en Angular 17 standalone; platformBrowser solo elige el renderer y ya no construye una jerarquía aparte.',
        en: 'They are the same EnvironmentInjector in Angular 17 standalone; platformBrowser only chooses the renderer and no longer builds a separate hierarchy.',
      },
      {
        es: 'El raíz está por encima de la plataforma, así que un servicio providedIn platform puede inyectar servicios root, pero no al revés.',
        en: 'Root sits above platform, so a providedIn platform service can inject root services, but not the other way around.',
      },
    ],
    explanation: {
      es: 'La cadena es NullInjector, plataforma, raíz, rutas. platformBrowser o createPlatform construyen el inyector de plataforma, donde viven PLATFORM_ID, PLATFORM_INITIALIZER y providedIn: "platform". bootstrapApplication construye el raíz debajo, que es el de providedIn: "root". Varias aplicaciones pueden compartir plataforma y no compartir raíz. Invertir el orden produce NullInjectorError al pedir un servicio root desde código de plataforma, o estado filtrado entre apps en la misma página.',
      en: 'The chain is NullInjector, platform, root, routes. platformBrowser or createPlatform build the platform injector, where PLATFORM_ID, PLATFORM_INITIALIZER and providedIn: "platform" live. bootstrapApplication builds root underneath, which is where providedIn: "root" lives. Several applications can share a platform and not share a root. Reversing the order produces NullInjectorError when asking for a root service from platform code, or leaked state between apps on the same page.',
    },
  },
  {
    id: 'fe-di-13',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Qué diferencia hay entre un proveedor tree-shakeable y uno declarado en el array providers de un NgModule?',
      en: 'What is the difference between a tree-shakeable provider and one declared in an NgModule providers array?',
    },
    answer: {
      es: 'providedIn root se elimina del bundle si nadie inyecta el servicio; un provider en un NgModule queda referenciado por el módulo y no se elimina aunque no se use.',
      en: 'providedIn root is removed from the bundle if nobody injects the service; a provider on an NgModule stays referenced by the module and is not removed even if unused.',
    },
    distractors: [
      {
        es: 'Los providers del NgModule son tree-shakeable porque el compilador de Angular analiza las plantillas del módulo; providedIn root siempre entra en el bundle de main.',
        en: 'NgModule providers are tree-shakeable because the Angular compiler analyses the module templates; providedIn root always lands in the main bundle.',
      },
      {
        es: 'No hay diferencia de shaking: ambos se eliminan si no hay inject, pero el del NgModule se instancia al importar el módulo y el de root solo al primer inject.',
        en: 'There is no shaking difference: both are removed if there is no inject, but the NgModule one is instantiated when the module is imported and the root one only on first inject.',
      },
    ],
    explanation: {
      es: '@Injectable({ providedIn: "root" }) deja la receta en el propio servicio, así el compilador de Angular puede borrar la clase si no hay consumidores. Un provider en el array de un NgModule crea una referencia estática módulo-clase que el bundler no puede eliminar. En standalone el equivalente no shakeable es poner el servicio en providers de bootstrapApplication. providedIn: "any" y providedIn: SomeModule quedaron obsoletos o desaconsejados hacia Angular 15-17. Ambos se instancian de forma perezosa en el primer inject, no al importar.',
      en: '@Injectable({ providedIn: "root" }) keeps the recipe on the service itself, so the Angular compiler can drop the class if there are no consumers. A provider in an NgModule array creates a static module-to-class reference that the bundler cannot remove. In standalone the non-shakeable equivalent is putting the service in bootstrapApplication providers. providedIn: "any" and providedIn: SomeModule became obsolete or discouraged towards Angular 15-17. Both are instantiated lazily on first inject, not at import time.',
    },
  },
  {
    id: 'fe-di-14',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Por qué conviene inyectar DOCUMENT y PLATFORM_ID en lugar de usar window para que la app funcione en SSR?',
      en: 'Why should you inject DOCUMENT and PLATFORM_ID instead of using window so the app works with SSR?',
    },
    answer: {
      es: 'DOCUMENT abstrae el documento del DOM y PLATFORM_ID permite ramificar con isPlatformBrowser, de modo que el código no toque window ni document globales, que no existen durante SSR.',
      en: 'DOCUMENT abstracts the DOM document and PLATFORM_ID allows branching with isPlatformBrowser, so the code does not touch the global window or document, which do not exist during SSR.',
    },
    distractors: [
      {
        es: 'DOCUMENT solo existe en el navegador; en el servidor inject(DOCUMENT) lanza NullInjectorError, por eso hay que leer window.document con un try/catch.',
        en: 'DOCUMENT only exists in the browser; on the server inject(DOCUMENT) throws NullInjectorError, which is why window.document must be read with a try/catch.',
      },
      {
        es: 'PLATFORM_ID es un booleano que Angular pone a true en el cliente; DOCUMENT es un alias de Renderer2 y no da acceso al body ni al title.',
        en: 'PLATFORM_ID is a boolean that Angular sets to true on the client; DOCUMENT is an alias of Renderer2 and does not give access to body or title.',
      },
    ],
    explanation: {
      es: 'DOCUMENT es un InjectionToken de @angular/common que en el servidor apunta a un documento Domino, no al document global. PLATFORM_ID más isPlatformBrowser e isPlatformServer permiten guardar el acceso a window, localStorage o matchMedia, APIs que en SSR lanzan window is not defined. Inyectar estos tokens es el patrón de Universal y se mantiene en Angular 17 con hidratación. Renderer2 no sustituye a DOCUMENT cuando hace falta leer title o el body, y DOCUMENT sí está provisto en el servidor.',
      en: 'DOCUMENT is an InjectionToken from @angular/common that on the server points to a Domino document, not to the global document. PLATFORM_ID plus isPlatformBrowser and isPlatformServer let you guard access to window, localStorage or matchMedia, APIs that in SSR throw window is not defined. Injecting these tokens is the Universal pattern and it remains in Angular 17 with hydration. Renderer2 does not replace DOCUMENT when you need to read title or body, and DOCUMENT is provided on the server.',
    },
  },
  {
    id: 'fe-di-15',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Para qué sirve runInInjectionContext?',
      en: 'What is runInInjectionContext for?',
    },
    answer: {
      es: 'Ejecuta una función dentro del contexto de un EnvironmentInjector para que las llamadas a inject en su interior sean legales.',
      en: 'It runs a function inside the context of an EnvironmentInjector so that inject calls inside it are legal.',
    },
    distractors: [
      {
        es: 'Es un alias de NgZone.run: vuelve a entrar en la zona de Angular para que inject dispare detección de cambios al resolver el token.',
        en: 'It is an alias of NgZone.run: it re-enters the Angular zone so that inject triggers change detection when resolving the token.',
      },
      {
        es: 'Crea un inyector hijo temporal, registra los providers de la función y lo destruye al terminar, equivalente a Injector.create en cada llamada.',
        en: 'It creates a temporary child injector, registers the providers from the function and destroys it when finished, equivalent to Injector.create on every call.',
      },
    ],
    explanation: {
      es: 'runInInjectionContext(injector, fn) de @angular/core, disponible desde Angular 14.1, instala temporalmente ese EnvironmentInjector como contexto para que inject funcione dentro de fn. Es la vía legal cuando una utilidad queda fuera del constructor, por ejemplo un helper llamado desde ngOnInit. Sin ella aparece NG0203. No entra en la zona y no crea un inyector nuevo: reutiliza el que se le pasa, a diferencia de Injector.create.',
      en: 'runInInjectionContext(injector, fn) from @angular/core, available since Angular 14.1, temporarily installs that EnvironmentInjector as the context so inject works inside fn. It is the legal path when a utility sits outside the constructor, for example a helper called from ngOnInit. Without it NG0203 appears. It does not enter the zone and it does not create a new injector: it reuses the one passed in, unlike Injector.create.',
    },
  },
  {
    id: 'fe-di-16',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Qué significa el error NullInjectorError y cómo se diagnostica?',
      en: 'What does the NullInjectorError mean and how is it diagnosed?',
    },
    answer: {
      es: 'Significa que el NullInjector, último de la cadena, no encontró el token; se diagnostica revisando providedIn, el array providers del componente o de la ruta, y si un modificador Self o Host cortó la búsqueda.',
      en: 'It means that the NullInjector, last in the chain, did not find the token; it is diagnosed by checking providedIn, the providers array of the component or route, and whether a Self or Host modifier cut the search short.',
    },
    distractors: [
      {
        es: 'Indica que el servicio existía pero su inyector ya se destruyó; se arregla envolviendo el inject en un Optional o escuchando DestroyRef antes de volver a pedirlo.',
        en: 'It indicates that the service existed but its injector was already destroyed; it is fixed by wrapping inject in Optional or by listening to DestroyRef before asking again.',
      },
      {
        es: 'Solo aparece cuando hay dos providers para el mismo token sin multi true; el diagnóstico es buscar el duplicado en bootstrapApplication.',
        en: 'It only appears when there are two providers for the same token without multi true; the diagnosis is to look for the duplicate in bootstrapApplication.',
      },
    ],
    explanation: {
      es: 'NullInjectorError: No provider for X! quiere decir que la búsqueda recorrió elemento, entorno y plataforma y llegó al NullInjector, que siempre lanza. El mensaje R3InjectorError lista la cadena de inyectores, útil para ver si faltaba el provider en una ruta perezosa. NG0201 es el código asociado. Un Self u Host mal puesto corta antes y produce el mismo error aunque el token exista en el padre. Duplicar un provider sin multi no lanza NullInjectorError: pisa la receta anterior.',
      en: 'NullInjectorError: No provider for X! means lookup walked element, environment and platform and reached the NullInjector, which always throws. The R3InjectorError message lists the injector chain, useful to see if the provider was missing on a lazy route. NG0201 is the associated code. A misplaced Self or Host cuts the search early and produces the same error even if the token exists on the parent. Duplicating a provider without multi does not throw NullInjectorError: it overwrites the previous recipe.',
    },
  },
  {
    id: 'fe-di-17',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Cómo se sustituye una dependencia por un doble con TestBed y overrideProvider?',
      en: 'How do you replace a dependency with a test double using TestBed and overrideProvider?',
    },
    answer: {
      es: 'TestBed.overrideProvider sustituye la receta del token antes de crear el componente, de modo que las inyecciones reciben el doble en lugar de la implementación real.',
      en: 'TestBed.overrideProvider replaces the recipe of the token before creating the component, so injections receive the double instead of the real implementation.',
    },
    distractors: [
      {
        es: 'Se llama a overrideProvider después de createComponent para parchear la instancia ya inyectada; si se hace antes, TestBed ignora el doble porque el módulo aún no existe.',
        en: 'overrideProvider is called after createComponent to patch the already injected instance; if it is done before, TestBed ignores the double because the module does not exist yet.',
      },
      {
        es: 'overrideProvider solo altera metadatos del @Component, igual que overrideComponent; para un servicio providedIn root hay que usar spyOn sobre el prototipo.',
        en: 'overrideProvider only changes @Component metadata, just like overrideComponent; for a providedIn root service you must use spyOn on the prototype.',
      },
    ],
    explanation: {
      es: 'TestBed.overrideProvider(Token, { useValue: doble }) de @angular/core/testing reemplaza la receta y debe ejecutarse antes de createComponent; si no, el componente ya recibió la clase real. configureTestingModule({ providers: [{ provide: Token, useValue: doble }] }) suele bastar, pero overrideProvider gana cuando el token ya vino de providedIn root. No es overrideComponent, que muta metadatos del componente. En Angular 17 esta sigue siendo la API oficial para dobles de DI.',
      en: 'TestBed.overrideProvider(Token, { useValue: double }) from @angular/core/testing replaces the recipe and must run before createComponent; otherwise the component already received the real class. configureTestingModule({ providers: [{ provide: Token, useValue: double }] }) is often enough, but overrideProvider wins when the token already came from providedIn root. It is not overrideComponent, which mutates component metadata. In Angular 17 this remains the official API for DI doubles.',
    },
  },
  {
    id: 'fe-di-18',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Cómo se provee una clase abstracta como token con useClass hacia la implementación?',
      en: 'How do you provide an abstract class as a token with useClass pointing to the implementation?',
    },
    answer: {
      es: 'La clase abstracta existe en tiempo de ejecución y sirve de token; useClass apunta a la implementación concreta que el inyector instanciará al resolver ese token.',
      en: 'The abstract class exists at runtime and serves as the token; useClass points to the concrete implementation that the injector will instantiate when resolving that token.',
    },
    distractors: [
      {
        es: 'Las clases abstractas se borran igual que las interfaces, así que hace falta un InjectionToken extra y useClass no puede usar la abstracta como provide.',
        en: 'Abstract classes are erased just like interfaces, so an extra InjectionToken is required and useClass cannot use the abstract class as provide.',
      },
      {
        es: 'useClass sobre una abstracta crea las dos instancias, la abstracta y la concreta, y hay que elegir con @Self cuál de las dos se inyecta.',
        en: 'useClass on an abstract class creates both instances, the abstract one and the concrete one, and you must choose with @Self which of the two gets injected.',
      },
    ],
    explanation: {
      es: 'Una clase abstracta no se borra en JavaScript, a diferencia de una interfaz, así que { provide: AuthRepository, useClass: HttpAuthRepository } es válido y el inyector solo instancia HttpAuthRepository. Una interfaz obliga a un InjectionToken. useExisting aliasaría una instancia ya creada; useClass construye una nueva, que es lo habitual al cablear puertos y adaptadores. Pedir AuthRepository sin esa receta acaba en NullInjectorError: No provider for AuthRepository.',
      en: 'An abstract class is not erased in JavaScript, unlike an interface, so { provide: AuthRepository, useClass: HttpAuthRepository } is valid and the injector only instantiates HttpAuthRepository. An interface requires an InjectionToken. useExisting would alias an already created instance; useClass constructs a new one, which is the usual way to wire ports and adapters. Asking for AuthRepository without that recipe ends in NullInjectorError: No provider for AuthRepository.',
    },
  },
  {
    id: 'fe-di-19',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Cómo aísla el inyector una ruta con carga perezosa y por qué el servicio puede ser una instancia separada?',
      en: 'How does the injector isolate a lazy loaded route and why can the service be a separate instance?',
    },
    answer: {
      es: 'loadComponent o loadChildren crean un EnvironmentInjector propio; un servicio declarado en los providers de esa ruta es una instancia distinta de la de raíz y se destruye al salir.',
      en: 'loadComponent or loadChildren create their own EnvironmentInjector; a service declared in that route providers is a different instance from the root one and is destroyed when leaving.',
    },
    distractors: [
      {
        es: 'Toda ruta perezosa clona automáticamente los servicios providedIn root, así que cada chunk tiene su singleton aunque no declare providers.',
        en: 'Every lazy route automatically clones providedIn root services, so each chunk has its own singleton even if it does not declare providers.',
      },
      {
        es: 'El inyector perezoso se fusiona con el raíz al terminar el import, por eso la instancia separada solo existe durante la carga y luego se unifica.',
        en: 'The lazy injector is merged into root when the import finishes, so the separate instance only exists during loading and is then unified.',
      },
    ],
    explanation: {
      es: 'loadComponent y loadChildren crean un EnvironmentInjector hijo para el árbol perezoso, aislado del de la ruta padre. Un servicio en los providers de esa ruta es otra instancia y muere con el inyector al navegar fuera. Si el servicio solo tiene providedIn: "root" y no se vuelve a proveer en la ruta, se comparte con el resto de la app: el aislamiento no es automático por ser lazy. Este modelo reemplazó en Angular 15+ a providedIn: "any" de los NgModule perezosos.',
      en: 'loadComponent and loadChildren create a child EnvironmentInjector for the lazy tree, isolated from the parent route. A service in that route providers is another instance and dies with the injector when navigating away. If the service only has providedIn: "root" and is not provided again on the route, it is shared with the rest of the app: isolation is not automatic just because it is lazy. This model replaced providedIn: "any" of lazy NgModules in Angular 15+.',
    },
  },
  {
    id: 'fe-di-20',
    topic: 'Inyeccion avanzada',
    prompt: {
      es: '¿Qué relación hay entre DestroyRef y takeUntilDestroyed y por qué requieren contexto de inyección?',
      en: 'What is the relationship between DestroyRef and takeUntilDestroyed and why do they require an injection context?',
    },
    answer: {
      es: 'DestroyRef notifica cuando el contexto del inyector se destruye; takeUntilDestroyed se suscribe a esa señal, y si se llama fuera de un contexto de inyección hay que pasarle el DestroyRef o Angular lanza NG0203.',
      en: 'DestroyRef notifies when the injector context is destroyed; takeUntilDestroyed subscribes to that signal, and if it is called outside an injection context you must pass the DestroyRef or Angular throws NG0203.',
    },
    distractors: [
      {
        es: 'takeUntilDestroyed completa el observable fuente en el constructor y por eso no puede usarse en ngOnInit ni con un DestroyRef explícito.',
        en: 'takeUntilDestroyed completes the source observable in the constructor and therefore cannot be used in ngOnInit or with an explicit DestroyRef.',
      },
      {
        es: 'DestroyRef reemplaza a ngOnDestroy y no se combina con RxJS; takeUntilDestroyed es un pipe de zona que no lee el inyector.',
        en: 'DestroyRef replaces ngOnDestroy and does not combine with RxJS; takeUntilDestroyed is a zone pipe that does not read the injector.',
      },
    ],
    explanation: {
      es: 'DestroyRef, estable en Angular 16, expone onDestroy para registrar limpieza ligada al inyector actual, no solo a ngOnDestroy de un componente. takeUntilDestroyed() de @angular/core/rxjs-interop inyecta ese DestroyRef y exige contexto de inyección; en ngOnInit hay que pasar takeUntilDestroyed(destroyRef) o aparece NG0203. No completa el observable fuente: solo completa el takeUntil interno al destruir. Sustituye el patrón takeUntil(destroy$) que había que armar a mano.',
      en: 'DestroyRef, stable in Angular 16, exposes onDestroy to register cleanup tied to the current injector, not only to a component ngOnDestroy. takeUntilDestroyed() from @angular/core/rxjs-interop injects that DestroyRef and requires an injection context; in ngOnInit you must pass takeUntilDestroyed(destroyRef) or NG0203 appears. It does not complete the source observable: it only completes the inner takeUntil on destroy. It replaces the takeUntil(destroy$) pattern that used to be wired by hand.',
    },
  },
];
