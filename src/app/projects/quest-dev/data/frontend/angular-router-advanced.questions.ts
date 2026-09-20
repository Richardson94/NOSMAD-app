import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_ROUTER_ADVANCED_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-route-01',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Qué diferencia hay entre un guard funcional CanActivateFn y un guard de clase que implementa CanActivate?',
      en: 'What is the difference between a functional CanActivateFn guard and a class guard that implements CanActivate?',
    },
    answer: {
      es: 'El funcional es una función que obtiene dependencias con inject() y se lista directo en canActivate; el de clase es un injectable con constructor que hay que proveer.',
      en: 'The functional form is a function that obtains dependencies with inject() and is listed directly in canActivate; the class form is an injectable with a constructor that must be provided.',
    },
    distractors: [
      {
        es: 'CanActivateFn no puede inyectar servicios porque no tiene constructor, así que cualquier AuthService obliga a seguir usando una clase.',
        en: 'CanActivateFn cannot inject services because it has no constructor, so any AuthService still forces you to keep a class.',
      },
      {
        es: 'Las clases CanActivate se eliminaron en Angular 15 y el compilador solo acepta CanActivateFn en provideRouter.',
        en: 'CanActivate classes were removed in Angular 15 and the compiler only accepts CanActivateFn in provideRouter.',
      },
    ],
    explanation: {
      es: 'Angular 15 introdujo las APIs funcionales del router (CanActivateFn, CanMatchFn, CanDeactivateFn, ResolveFn) para que las apps standalone no necesiten clases inyectables de guard. Ambos comparten el contrato de retorno: boolean, UrlTree u observable/promesa de esos tipos. Las clases siguen funcionando; solo son más verbosas porque exigen provider y constructor.',
      en: 'Angular 15 introduced the functional router APIs (CanActivateFn, CanMatchFn, CanDeactivateFn, ResolveFn) so standalone apps do not need injectable guard classes. Both forms share the same return contract: boolean, UrlTree, or an observable/promise of those types. Class guards still work; they are just more verbose because they require a provided class and a constructor.',
    },
  },
  {
    id: 'fe-route-02',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Para qué sirve canMatch y cuál es su caso de uso con variantes de ruta según rol o feature flag?',
      en: 'What is canMatch for, and what is its use case for route variants according to role or a feature flag?',
    },
    answer: {
      es: 'Decide si una config es candidata. Si devuelve false, el router la salta y prueba la siguiente con el mismo path, lo que permite dos features perezosas distintas bajo /admin según rol o flag.',
      en: 'It decides whether a route config is a candidate. If it returns false, the router skips it and tries the next one with the same path, which lets two different lazy features share /admin according to role or flag.',
    },
    distractors: [
      {
        es: 'canMatch es un alias de canActivate: si devuelve false cancela toda la navegación y no se evalúa ninguna ruta hermana.',
        en: 'canMatch is an alias of canActivate: if it returns false it cancels the whole navigation and no sibling route is evaluated.',
      },
      {
        es: 'canMatch solo filtra bundles de loadChildren; las rutas con component ignora el predicado y hay que usar canActivate.',
        en: 'canMatch only filters loadChildren bundles; routes with component ignore the predicate and you must use canActivate.',
      },
    ],
    explanation: {
      es: 'CanMatch llegó en Angular 14.2 y CanMatchFn en Angular 15; corre durante el matching, antes de los guards y antes de descargar el chunk perezoso. Devolver false no falla la navegación: el matcher sigue, así que dos configs hermanas pueden compartir path y diferir por data o por un flag. canActivate ya tiene la ruta elegida y no sirve para sustituir una variante por otra.',
      en: 'CanMatch arrived in Angular 14.2 and CanMatchFn in Angular 15; it runs during matching, before guards and before the lazy chunk downloads. Returning false does not fail navigation: the matcher continues, so two sibling configs can share a path and differ by data or by a flag. canActivate already selected a route and cannot swap one variant for another.',
    },
  },
  {
    id: 'fe-route-03',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Cómo usa canDeactivate para avisar de cambios sin guardar antes de salir de una ruta?',
      en: 'How does canDeactivate warn about unsaved changes before leaving a route?',
    },
    answer: {
      es: 'Se ejecuta al intentar desactivar la ruta, recibe la instancia del componente y puede devolver false, un UrlTree o un observable/promesa, que es como bloqueas o rediriges tras un diálogo de confirmación.',
      en: 'It runs when the user tries to deactivate the route, receives the component instance, and can return false, a UrlTree, or an observable/promise, which is how you block or redirect after a confirm dialog.',
    },
    distractors: [
      {
        es: 'canDeactivate intercepta también el refresh y el cierre de pestaña, así que sustituye al listener beforeunload.',
        en: 'canDeactivate also intercepts refresh and tab close, so it replaces the beforeunload listener.',
      },
      {
        es: 'Devolver false redirige solo al padre de forma automática, por eso no hace falta un diálogo ni un UrlTree.',
        en: 'Returning false redirects to the parent automatically, so you do not need a dialog or a UrlTree.',
      },
    ],
    explanation: {
      es: 'CanDeactivateFn existe desde Angular 15 y solo corre al desactivar esa ruta, no en una recarga completa, así que beforeunload sigue siendo necesario para refresh o cierre. El primer argumento es la instancia del componente, de ahí el patrón de leer isDirty y devolver confirm(...) o el boolean de un modal. Un UrlTree es válido si prefieres mandar a una pantalla de guardado en lugar de bloquear.',
      en: 'CanDeactivateFn has existed since Angular 15 and only runs when that route deactivates, not on a full page unload, so beforeunload is still required for refresh or close. The first argument is the component instance, which is why the usual pattern reads isDirty and then returns confirm(...) or a boolean from a modal. A UrlTree is valid if you prefer to send the user to a save screen instead of blocking.',
    },
  },
  {
    id: 'fe-route-04',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Cómo se combinan un resolver funcional ResolveFn y withComponentInputBinding?',
      en: 'How do a functional ResolveFn resolver and withComponentInputBinding work together?',
    },
    answer: {
      es: 'ResolveFn (Angular 15) deja el valor en route.data bajo la clave de resolve; withComponentInputBinding (Angular 16) copia esa clave, más params y query params, a los input() cuyo nombre coincide, sin inyectar ActivatedRoute.',
      en: 'ResolveFn (Angular 15) stores the value in route.data under the resolve key; withComponentInputBinding (Angular 16) copies that key, plus params and query params, into matching input() fields, without injecting ActivatedRoute.',
    },
    distractors: [
      {
        es: 'withComponentInputBinding solo mapea parámetros de path; los valores resueltos siguen exigiendo ActivatedRoute.snapshot.data.',
        en: 'withComponentInputBinding only maps path params; resolved values still require ActivatedRoute.snapshot.data.',
      },
      {
        es: 'ResolveFn debe proveerse en el injector del componente, y withComponentInputBinding nació en Angular 14 junto con provideRouter.',
        en: 'ResolveFn must be provided in the component injector, and withComponentInputBinding was born in Angular 14 together with provideRouter.',
      },
    ],
    explanation: {
      es: 'Declaras resolve: { article: articleResolver } y un input llamado article en el componente standalone; provideRouter(routes, withComponentInputBinding()) escribe el valor resuelto en ese input al completar la navegación. Los params de path, los query params y los data estáticos siguen la misma regla de coincidencia de nombre. El resolver sigue ejecutándose antes de activar, así que el input ya está poblado cuando se crea el componente.',
      en: 'You declare resolve: { article: articleResolver } and an input named article on the standalone component; provideRouter(routes, withComponentInputBinding()) writes the resolved value into that input when navigation succeeds. Path params, query params, and static data follow the same name-matching rule. The resolver still runs before activation, so the input is already populated when the component is created.',
    },
  },
  {
    id: 'fe-route-05',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Qué diferencia hay entre los datos estáticos de data y los datos que produce un resolver?',
      en: 'What is the difference between static data on the route and data produced by a resolver?',
    },
    answer: {
      es: 'data es un objeto estático de la config, disponible de inmediato. Los resolvers escriben en el mismo mapa ActivatedRoute.data cuando terminan, bajo las claves declaradas en resolve.',
      en: 'data is a static object in the config, available immediately. Resolvers write into the same ActivatedRoute.data map when they finish, under the keys declared in resolve.',
    },
    distractors: [
      {
        es: 'data estático se ignora en runtime; solo las claves de resolve aparecen en ActivatedRoute.data, así que un breadcrumb tiene que ser un resolver.',
        en: 'Static data is ignored at runtime; only resolve keys appear in ActivatedRoute.data, so a breadcrumb has to be a resolver.',
      },
      {
        es: 'Los valores resueltos sustituyen el objeto data entero, así que un title o un flag de preload estático se pierde tras el primer resolver.',
        en: 'Resolved values replace the entire data object, so a static title or preload flag is lost after the first resolver runs.',
      },
    ],
    explanation: {
      es: 'Ambas fuentes se fusionan en un único data; una clave de resolve pisa una clave estática del mismo nombre, pero las distintas conviven. data estático no hace trabajo asíncrono y sirve para títulos, roles o flags de precarga. Los resolvers existen para valores que hay que pedir antes. Al terminar la navegación, snapshot.data ya contiene los dos.',
      en: 'Both sources merge into one data map; a resolve key overwrites a static key of the same name, but distinct keys coexist. Static data does no async work and is useful for titles, roles, or preload flags. Resolvers exist for values that must be fetched first. Once navigation finishes, snapshot.data already contains both.',
    },
  },
  {
    id: 'fe-route-06',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Cómo se conservan o combinan los parámetros de consulta con queryParamsHandling?',
      en: 'How do you keep or combine query parameters with queryParamsHandling?',
    },
    answer: {
      es: 'preserve mantiene la query actual e ignora los queryParams nuevos. merge copia los actuales y aplica encima los de la navegación (ganan las claves nuevas). Por defecto se descartan.',
      en: 'preserve keeps the current query string and ignores new queryParams. merge copies the current ones and then applies those from the navigation (new keys win). The default drops them.',
    },
    distractors: [
      {
        es: 'preserve fusiona ambos conjuntos y merge deja intacta la query anterior; solo cambian el nombre de la opción.',
        en: 'preserve merges both sets and merge leaves the previous query string untouched; only the option name changes.',
      },
      {
        es: 'queryParamsHandling solo existe en RouterLink; Router.navigate siempre borra la query salvo que la repitas a mano.',
        en: 'queryParamsHandling only exists on RouterLink; Router.navigate always drops the query string unless you repeat it by hand.',
      },
    ],
    explanation: {
      es: 'Tanto Router.navigate como routerLink aceptan queryParamsHandling desde las NavigationExtras clásicas. La trampa de preserve es que tira los queryParams que pasas en la misma llamada, justo lo contrario de añadir una clave. merge es la opción habitual cuando una barra de filtros debe sobrevivir un cambio de path. No hay un valor prefix; omitir la opción sigue limpiando la query.',
      en: 'Both Router.navigate and routerLink accept queryParamsHandling from the classic NavigationExtras. The trap with preserve is that it discards the queryParams you pass in the same call, the opposite of adding one key. merge is the usual choice when a filter bar must survive a path change. There is no prefix value; omitting the option still clears the query string.',
    },
  },
  {
    id: 'fe-route-07',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Cuándo usas paramMap frente a queryParamMap, y snapshot frente al observable?',
      en: 'When do you use paramMap versus queryParamMap, and snapshot versus the observable?',
    },
    answer: {
      es: 'paramMap guarda parámetros de path como :id. queryParamMap guarda la query. snapshot es una lectura única; el observable hace falta cuando la misma instancia del componente se reutiliza y los params cambian.',
      en: 'paramMap holds path parameters such as :id. queryParamMap holds the query string. snapshot is a single read; the observable is required when the same component instance is reused and params change.',
    },
    distractors: [
      {
        es: 'paramMap ya incluye los query params, así que queryParamMap es solo un alias deprecado que Angular 14 conservó.',
        en: 'paramMap already includes query params, so queryParamMap is only a deprecated alias that Angular 14 kept.',
      },
      {
        es: 'El observable de paramMap se salta el valor inicial, por eso ngOnInit debe leer snapshot primero y suscribirse después para los cambios.',
        en: 'The paramMap observable skips the initial value, so ngOnInit must read snapshot first and then subscribe for later updates.',
      },
    ],
    explanation: {
      es: 'ActivatedRoute.paramMap y queryParamMap son observables de ParamMap que emiten el mapa actual al suscribirse y otra vez en cada cambio. snapshot.paramMap es una foto fija de ese instante y no avisa cuando /users/1 pasa a /users/2 y el componente se reutiliza. Mezclar snapshot en ngOnInit con URLs posteriores es el bug clásico de la ficha que no se actualiza. Los query params nunca entran en paramMap.',
      en: 'ActivatedRoute.paramMap and queryParamMap are ParamMap observables that emit the current map on subscribe and again on each change. snapshot.paramMap is a frozen view at that instant and will not notify you when /users/1 becomes /users/2 and the component is reused. Mixing snapshot in ngOnInit with later URL changes is the classic bug of a detail screen that never updates. Query params never appear in paramMap.',
    },
  },
  {
    id: 'fe-route-08',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Para qué sirve relativeTo al llamar a router.navigate?',
      en: 'What is relativeTo for when you call router.navigate?',
    },
    answer: {
      es: 'Fija el ActivatedRoute contra el que se resuelven comandos como [../edit]. Sin relativeTo esos comandos se interpretan como absolutos desde la raíz del router.',
      en: 'It sets the ActivatedRoute against which commands such as [../edit] are resolved. Without relativeTo those commands are treated as absolute from the root of the router.',
    },
    distractors: [
      {
        es: 'relativeTo apunta por defecto a la ruta actual, así que pasarlo es opcional siempre que el comando empiece por ../ o ./',
        en: 'relativeTo defaults to the current route, so passing it is optional whenever the command starts with ../ or ./',
      },
      {
        es: 'routerLink exige relativeTo como input porque el directive no puede inferir el ActivatedRoute actual desde el injector.',
        en: 'routerLink requires relativeTo as an input, because the directive cannot infer the current ActivatedRoute from the injector.',
      },
    ],
    explanation: {
      es: 'Router.navigate es absoluto salvo que pases relativeTo: this.route. routerLink es lo contrario: un enlace sin barra inicial ya es relativo a la ruta del elemento. Los outlets con nombre también usan relativeTo cuando el comando debe apuntar a un hermano. Esta propiedad de NavigationExtras existe desde las primeras versiones de Angular y no cambió en Angular 17.',
      en: 'Router.navigate is absolute unless you pass relativeTo: this.route. routerLink is the opposite: a link without a leading slash is already relative to the route of the element. Named outlets still use relativeTo when the command must target a sibling. This NavigationExtras property has existed since early Angular versions and is unchanged in Angular 17.',
    },
  },
  {
    id: 'fe-route-09',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Para qué sirven los outlets con nombre o auxiliares?',
      en: 'What are named or auxiliary outlets for?',
    },
    answer: {
      es: 'Renderizan un segundo router-outlet en paralelo al primario, de modo que un chat o un panel tenga su propia URL, por ejemplo /inbox(aux:compose). El name del outlet y el de la ruta deben coincidir.',
      en: 'They render a second router-outlet in parallel with the primary one, so a chat or a panel can have its own URL, for example /inbox(aux:compose). The outlet name on the route must match the name on the element.',
    },
    distractors: [
      {
        es: 'Un outlet con nombre sustituye al primario en esa navegación, que es como se cambia de layout sin rutas hijas.',
        en: 'A named outlet replaces the primary outlet for that navigation, which is how you swap layouts without child routes.',
      },
      {
        es: 'Las rutas auxiliares no aparecen en la URL; solo viven en memoria y Router.navigate las pierde al refrescar.',
        en: 'Auxiliary routes do not appear in the URL; they only live in memory and Router.navigate loses them on refresh.',
      },
    ],
    explanation: {
      es: 'El outlet primario no tiene nombre. Las rutas auxiliares se serializan entre paréntesis en la URL, sobreviven al refresh y se pueden marcar como favoritas. Se navegan con outlets en NavigationExtras o con un comando que incluye el nombre del outlet. Son independientes de la carga perezosa: loadComponent y loadChildren funcionan igual en una ruta con nombre.',
      en: 'The primary outlet is unnamed. Auxiliary routes are serialized between parentheses in the URL, survive refresh, and can be bookmarked. You navigate them with outlets in NavigationExtras or with a command that includes the outlet name. They are independent of lazy loading: loadComponent and loadChildren both work on a named route.',
    },
  },
  {
    id: 'fe-route-10',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Cómo interactúan las rutas hijas con pathMatch full frente a prefix?',
      en: 'How do child routes interact with pathMatch full versus prefix?',
    },
    answer: {
      es: 'prefix (el valor por defecto) acierta si la URL restante empieza por ese path. full exige que la URL restante esté vacía, por eso un hijo de path vacío que solo debe coincidir exactamente usa pathMatch: full.',
      en: 'prefix (the default) succeeds if the remaining URL starts with that path. full requires the remaining URL to be empty, which is why an empty-path child that should match only that segment uses pathMatch: full.',
    },
    distractors: [
      {
        es: 'full es el valor por defecto de los hijos para que un padre con path: users no se trague /users/1; prefix se elige cuando quieres URLs anidadas.',
        en: 'full is the default for children so that a parent with path: users does not swallow /users/1; you opt into prefix when you want nested URLs.',
      },
      {
        es: 'pathMatch se ignora en los hijos; solo lo usa la ruta padre y los children siempre coinciden como prefix.',
        en: 'pathMatch is ignored on children; only the parent route uses it, and children always match as prefix.',
      },
    ],
    explanation: {
      es: 'Un padre con children debe usar prefix para que la URL sobrante pueda emparejar a esos hijos. pathMatch: full en ese padre exigiría que no quede nada, y los children nunca se activarían. El hijo de path vacío con component suele poner full para no ser un prefix voraz de cualquier resto. Esta regla de matching forma parte del router desde Angular 2.',
      en: 'A parent that has children should use prefix so the leftover URL can match those children. pathMatch: full on that parent would demand that nothing remain, and the children would never activate. The empty path child with a component often sets full so it is not a greedy prefix of every leftover. This matching rule has been part of the router since Angular 2.',
    },
  },
  {
    id: 'fe-route-11',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Por qué el orden de las rutas importa y la ruta comodín debe ir al final?',
      en: 'Why does route order matter, and why must the wildcard route go last?',
    },
    answer: {
      es: 'El router usa first-match-wins entre configs hermanas. path: ** coincide con cualquier URL, así que si va antes que paths más específicos esos paths no se ejecutan nunca.',
      en: 'The router uses first-match-wins among sibling configs. path: ** matches every URL, so if it is placed before more specific paths those paths never run.',
    },
    distractors: [
      {
        es: 'Angular ordena por especificidad antes de emparejar, de modo que el comodín se evalúa siempre al final aunque lo declares primero.',
        en: 'Angular sorts by specificity before matching, so the wildcard is always evaluated last even if you declare it first.',
      },
      {
        es: 'El comodín solo atrapa URLs desconocidas cuando su component es una página 404; con redirectTo es seguro ponerlo arriba.',
        en: 'The wildcard only catches unknown URLs when its component is a 404 page; with redirectTo it is safe to put it at the top.',
      },
    ],
    explanation: {
      es: 'No hay sort por especificidad: { path: users } listado después de { path: ** } es código muerto. Lo mismo vale para dos rutas que comparten path y se distinguen con canMatch: gana la primera que coincida. Deja ** al final de cada arreglo de hermanos, también dentro de children. Es el comportamiento documentado del matcher, igual en Angular 17.',
      en: 'There is no specificity sort: { path: users } listed after { path: ** } is dead code. The same applies to two routes that share a path and rely on canMatch: the first that matches wins. Keep ** at the end of each siblings array, including inside children. This is documented matcher behavior, unchanged in Angular 17.',
    },
  },
  {
    id: 'fe-route-12',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Cómo se relacionan redirectTo y pathMatch en una redirección?',
      en: 'How do redirectTo and pathMatch relate in a redirect?',
    },
    answer: {
      es: 'La redirección necesita un pathMatch que diga cuánto de la URL debe coincidir. Un redirect de path vacío casi siempre lleva pathMatch: full; con el prefix por defecto, path vacío coincidiría con todas las URLs.',
      en: 'A redirect needs a pathMatch that says how much of the URL must match. An empty-path redirect almost always uses pathMatch: full; with the default prefix, an empty path would match every URL.',
    },
    distractors: [
      {
        es: 'redirectTo implica pathMatch full, así que añadir pathMatch es redundante y provideRouter lo ignora.',
        en: 'redirectTo implies pathMatch full, so adding pathMatch is redundant and provideRouter ignores it.',
      },
      {
        es: 'pathMatch solo afecta a rutas con component; un redirect siempre consume la URL restante completa y luego concatena query params.',
        en: 'pathMatch only affects routes with a component; a redirect always consumes the full remaining URL and then appends query params.',
      },
    ],
    explanation: {
      es: 'El redirect de índice típico es { path: cadena vacía, redirectTo: /home, pathMatch: full }. Si omites pathMatch, el default es prefix y un prefix vacío coincide con todo, un bucle o un catch-all clásico. En Angular 17 redirectTo es un string relativo al padre salvo que empiece por barra; la función de redirect llegó en Angular 18. Los guards de la ruta origen no corren: el matcher salta al destino.',
      en: 'The typical index redirect is { path: empty string, redirectTo: /home, pathMatch: full }. If you omit pathMatch, the default is prefix and an empty prefix matches everything, a classic loop or catch-all. In Angular 17 redirectTo is a string relative to the parent unless it starts with a slash; the redirect function arrived in Angular 18. Guards on the source route do not run: matching jumps to the target.',
    },
  },
  {
    id: 'fe-route-13',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Cómo se escribe una estrategia de precarga propia que decida según la red o el rol?',
      en: 'How do you write a custom preloading strategy that decides according to the network or the role?',
    },
    answer: {
      es: 'Implementas PreloadingStrategy y en preload(route, load) devuelves load() si quieres el chunk o EMPTY si lo saltas. Lees route.data, navigator.connection o un AuthService inyectado, y la registras con withPreloading(MiEstrategia).',
      en: 'You implement PreloadingStrategy and, in preload(route, load), return load() when you want the chunk or EMPTY when you skip it. You read route.data, navigator.connection, or an injected AuthService, then register it with withPreloading(MyStrategy).',
    },
    distractors: [
      {
        es: 'PreloadAllModules ya acepta un filtro por rol y por SlowNetwork, así que una clase propia sobra desde Angular 15.',
        en: 'PreloadAllModules already accepts a filter for role and SlowNetwork, so a custom class is unnecessary since Angular 15.',
      },
      {
        es: 'preload debe llamar a load() en el bootstrap de forma síncrona; devolver EMPTY más tarde no aplaza nada porque el router ignora el observable.',
        en: 'preload must call load() synchronously during bootstrap; returning EMPTY later cannot postpone a download because the router ignores the observable.',
      },
    ],
    explanation: {
      es: 'withPreloading es la API standalone de Angular 14: provideRouter(routes, withPreloading(MiEstrategia)). El segundo argumento load arranca el import(); devolverlo como observable permite retrasar con timer() o saltar con EMPTY. PreloadAllModules no ve la red ni al usuario: precarga toda ruta perezosa. Un flag en route.data o navigator.connection.effectiveType es la política custom habitual.',
      en: 'withPreloading is the Angular 14 standalone API: provideRouter(routes, withPreloading(MyStrategy)). The second argument load starts the import(); returning it as an observable lets you delay with timer() or skip with EMPTY. PreloadAllModules does not see the network or the user: it preloads every lazy route. A flag on route.data or navigator.connection.effectiveType is the usual custom policy.',
    },
  },
  {
    id: 'fe-route-14',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Qué hace la opción exact de RouterLinkActive?',
      en: 'What does the exact option of RouterLinkActive do?',
    },
    answer: {
      es: 'Con routerLinkActiveOptions: { exact: true } la clase active solo se añade cuando la URL coincide del todo, así un enlace a /users no se queda activo en /users/42.',
      en: 'With routerLinkActiveOptions: { exact: true } the active class is added only when the URL matches the link completely, so a link to /users does not stay active on /users/42.',
    },
    distractors: [
      {
        es: 'exact vale true por defecto, así que pasas exact: false para que un enlace padre siga marcado en las rutas hijas.',
        en: 'exact is true by default, so you pass exact: false to keep a parent link highlighted on child routes.',
      },
      {
        es: 'exact exige también que coincidan query params y fragment; no hay otra API para configurar eso por separado.',
        en: 'exact also requires query params and fragment to match; there is no other API to configure those separately.',
      },
    ],
    explanation: {
      es: 'El default es exact: false, un matching por prefix, y por eso el ítem de /users se ilumina en todos los hijos. Angular 13 añadió IsActiveMatchOptions (paths, queryParams, fragment, matrixParams) como alternativa más precisa al boolean. RouterLinkActive acepta ambas formas en Angular 17. La clase se conmuta cuando termina la navegación.',
      en: 'The default is exact: false, which is prefix matching, and that is why a /users item lights up on every child. Angular 13 added IsActiveMatchOptions (paths, queryParams, fragment, matrixParams) as a more precise alternative to the boolean. RouterLinkActive still accepts both shapes in Angular 17. The class is toggled after navigation ends.',
    },
  },
  {
    id: 'fe-route-15',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Cómo se restaura el scroll y el desplazamiento a anclas con withInMemoryScrolling?',
      en: 'How do you restore scroll position and scroll to anchors with withInMemoryScrolling?',
    },
    answer: {
      es: 'Pasas withInMemoryScrolling({ scrollPositionRestoration: enabled, anchorScrolling: enabled }) a provideRouter. La restauración reaplica la última posición al volver atrás, y anchorScrolling desplaza al elemento cuyo id coincide con el fragmento.',
      en: 'You pass withInMemoryScrolling({ scrollPositionRestoration: enabled, anchorScrolling: enabled }) to provideRouter. Restoration reapplies the last position on back, and anchorScrolling scrolls to the element whose id matches the URL fragment.',
    },
    distractors: [
      {
        es: 'La restauración y el scroll a fragmentos vienen habilitados por defecto en Angular 17, así que withInMemoryScrolling solo sirve para apagarlos.',
        en: 'Scroll restoration and fragment scrolling are enabled by default in Angular 17, so withInMemoryScrolling is only needed to turn them off.',
      },
      {
        es: 'withInMemoryScrolling solo funciona con HashLocationStrategy, porque PathLocationStrategy ignora los fragmentos.',
        en: 'withInMemoryScrolling only works with HashLocationStrategy, because PathLocationStrategy ignores fragments.',
      },
    ],
    explanation: {
      es: 'provideRouter(routes, withInMemoryScrolling({ ... })) es el reemplazo standalone de Angular 14 a la opción scrollPositionRestoration de RouterModule.forRoot. La restauración por defecto está disabled, así que volver atrás te dejaría arriba. ViewportScroller sigue existiendo si necesitas hacer scroll desde código. anchorScrolling: enabled escucha cambios de fragment y llama a scrollToAnchor.',
      en: 'provideRouter(routes, withInMemoryScrolling({ ... })) is the Angular 14 standalone replacement for the scrollPositionRestoration option of RouterModule.forRoot. Default restoration is disabled, so back-navigation would otherwise leave you at the top. ViewportScroller still exists if you need to scroll from code. anchorScrolling: enabled listens to fragment changes and calls scrollToAnchor.',
    },
  },
  {
    id: 'fe-route-16',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Para qué sirve TitleStrategy al fijar el título de la página?',
      en: 'What is TitleStrategy for when setting the page title?',
    },
    answer: {
      es: 'Es el gancho del router que escribe document.title tras navegar. Puedes poner title estático en cada ruta o proveer una subclase que sobrescriba buildTitle o updateTitle para añadir un sufijo con el nombre de la app.',
      en: 'It is the router hook that writes document.title after navigation. You can set a static title on each route or provide a subclass that overrides buildTitle or updateTitle to add a suffix with the app name.',
    },
    distractors: [
      {
        es: 'TitleStrategy solo lee route.data.title; la propiedad title de Route se ignora salvo que un resolver la copie.',
        en: 'TitleStrategy only reads route.data.title; the title property on Route is ignored unless a resolver copies it.',
      },
      {
        es: 'El título se pone desde AppComponent inyectando Title y leyendo snapshot en cada NavigationEnd; TitleStrategy es interno y no debes reemplazarlo.',
        en: 'You set the title from AppComponent by injecting Title and reading snapshot on every NavigationEnd; TitleStrategy is internal and you should not replace it.',
      },
    ],
    explanation: {
      es: 'Angular 14 añadió Route.title (string o ResolveFn de string) y TitleStrategy, que usa el servicio Title de @angular/platform-browser. La estrategia por defecto concatena los títulos del árbol activado. Proveer { provide: TitleStrategy, useClass: AppTitleStrategy } basta en una app standalone; no hace falta suscribirse a eventos a mano. buildTitle devuelve el string y updateTitle lo empuja al documento.',
      en: 'Angular 14 added Route.title (string or ResolveFn of string) and TitleStrategy, which uses the Title service from @angular/platform-browser. The default strategy joins titles of the activated route tree. Providing { provide: TitleStrategy, useClass: AppTitleStrategy } is enough in a standalone app; you do not subscribe to events by hand. buildTitle returns the string and updateTitle pushes it to the document.',
    },
  },
  {
    id: 'fe-route-17',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Cómo se usan los eventos del router para un indicador de carga global?',
      en: 'How do you use router events for a global loading indicator?',
    },
    answer: {
      es: 'Lo muestras en NavigationStart (y opcionalmente ResolveStart) y lo ocultas en NavigationEnd, NavigationCancel y NavigationError. Filtras router.events con instanceof o con los type guards del evento.',
      en: 'You show it on NavigationStart (and optionally ResolveStart) and hide it on NavigationEnd, NavigationCancel, and NavigationError. You filter router.events with instanceof or with the event type helpers.',
    },
    distractors: [
      {
        es: 'Basta con suscribirse a NavigationEnd, porque un guard o resolver que falla igual emite End después de deshacer.',
        en: 'Subscribing to NavigationEnd is enough, because a failed guard or resolver still emits End after rolling back.',
      },
      {
        es: 'ActivatedRoute.events es el stream que incluye NavigationStart; Router.events solo emite cuando la vista ya está creada.',
        en: 'ActivatedRoute.events is the stream that includes NavigationStart; Router.events only emits after the view is created.',
      },
    ],
    explanation: {
      es: 'Router.events es el stream global (desde Angular 2). NavigationCancel salta cuando un guard rechaza, y NavigationError cuando falla un resolver o un import() perezoso, así que un spinner que solo espera End se queda pegado. Un servicio puede exponer una signal actualizada desde esos eventos. Angular 16.2 añadió helpers de UrlTree ajenos a este patrón de carga.',
      en: 'Router.events is the global stream (Angular 2 onward). NavigationCancel fires when a guard rejects, and NavigationError when a resolver or lazy import() fails, so a spinner that only waits for End would stick on screen. A service can expose a signal updated from those events. Angular 16.2 added UrlTree helpers unrelated to this loading pattern.',
    },
  },
  {
    id: 'fe-route-18',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Cómo se manejan los errores de navegación y un fallo dentro de un resolver?',
      en: 'How do you handle navigation errors and a failure inside a resolver?',
    },
    answer: {
      es: 'Un resolver que lanza o cuyo observable falla produce NavigationError y el destino no se activa. Escuchas ese evento (o la promesa de navigate) para redirigir o avisar; la otra opción es atrapar dentro del ResolveFn y devolver un fallback.',
      en: 'A resolver that throws or whose observable errors produces a NavigationError and the destination is not activated. You listen to that event (or the promise of navigate) to redirect or show a message; the other option is to catch inside the ResolveFn and return a fallback.',
    },
    distractors: [
      {
        es: 'Un resolver fallido activa igual el componente y deja el error en route.data, como si fuera un error HTTP en ngOnInit.',
        en: 'A failed resolver still activates the component and puts the error in route.data, as if it were an HTTP error in ngOnInit.',
      },
      {
        es: 'NavigationError solo cubre fallos de import perezoso; los errores de resolver se convierten en NavigationCancel con un código en el evento.',
        en: 'NavigationError only covers lazy import failures; resolver errors become NavigationCancel with a code on the event.',
      },
    ],
    explanation: {
      es: 'Los guards que devuelven false emiten NavigationCancel, no NavigationError. Resolvers e import() dinámicos fallidos emiten NavigationError, cuyo campo error es la excepción original. Angular 18 añadió withNavigationErrorHandler; en Angular 17 el enfoque soportado es router.events o envolver el ResolveFn. Devolver un fallback vacío desde el resolver mantiene la navegación si prefieres pintar un estado vacío.',
      en: 'Guards that return false emit NavigationCancel, not NavigationError. Resolvers and failed dynamic import() emit NavigationError, whose error field is the original exception. Angular 18 later added withNavigationErrorHandler; in Angular 17 the supported approach is router.events or wrapping the ResolveFn. Returning an empty fallback from the resolver keeps navigation successful if you prefer to render an empty state.',
    },
  },
  {
    id: 'fe-route-19',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Para qué sirve una RouteReuseStrategy propia?',
      en: 'What is a custom RouteReuseStrategy for?',
    },
    answer: {
      es: 'Decide si un componente ruteado se destruye o se guarda y se reengancha, para que una pestaña o un wizard conserve DOM, estado de formulario y scroll al irse y volver.',
      en: 'It decides whether a routed component is destroyed or stored and reattached, so a tab or a wizard can keep its DOM, form state, and scroll when you leave and come back.',
    },
    distractors: [
      {
        es: 'RouteReuseStrategy cachea las respuestas HTTP de los resolvers para que volver a una URL no ejecute otra vez el ResolveFn.',
        en: 'RouteReuseStrategy caches HTTP responses of resolvers so that revisiting a URL does not run ResolveFn again.',
      },
      {
        es: 'La estrategia por defecto ya desprende todas las rutas; una propia solo hace falta para forzar destroy en cada cambio de param.',
        en: 'The default strategy already detaches every route; a custom one is only needed to force destroy on each param change.',
      },
    ],
    explanation: {
      es: 'BaseRouteReuseStrategy reutiliza la misma instancia cuando shouldReuseRoute ve la misma config, que es por qué ngOnInit no se relanza al cambiar params, pero no guarda subárboles en caché. Implementar shouldDetach, store, shouldAttach y retrieve permite conservar un DetachedRouteHandle, el patrón de UIs con pestañas. Esta API existe desde Angular 2 y sigue aplicando a rutas loadComponent standalone en Angular 17.',
      en: 'BaseRouteReuseStrategy reuses the same instance when shouldReuseRoute sees the same config, which is why ngOnInit does not re-run on param changes, but it does not detach subtrees into a cache. Implementing shouldDetach, store, shouldAttach, and retrieve lets you keep a DetachedRouteHandle, the pattern used for tabbed UIs. This API exists since Angular 2 and still applies to standalone loadComponent routes in Angular 17.',
    },
  },
  {
    id: 'fe-route-20',
    topic: 'Router avanzado',
    prompt: {
      es: '¿Qué diferencia hay entre loadComponent y loadChildren con un arreglo de rutas en componentes standalone?',
      en: 'What is the difference between loadComponent and loadChildren with a routes array in standalone components?',
    },
    answer: {
      es: 'loadComponent carga de forma perezosa un único componente standalone. loadChildren carga de forma perezosa un arreglo Routes (o un NgModule) que puede traer más hijos, que es como se parte un feature entero en su propio chunk.',
      en: 'loadComponent lazily loads one standalone component. loadChildren lazily loads a Routes array (or an NgModule) that can contain further children, which is how you split a whole feature tree into its own chunk.',
    },
    distractors: [
      {
        es: 'loadComponent puede devolver un arreglo Routes y loadChildren un componente; Angular detecta el tipo exportado, así que las dos claves son intercambiables.',
        en: 'loadComponent can return a Routes array and loadChildren can return a component; Angular detects the exported type, so the two keys are interchangeable.',
      },
      {
        es: 'loadChildren está deprecado en Angular 17 standalone; toda ruta perezosa debe usar loadComponent aunque tenga hijas.',
        en: 'loadChildren is deprecated in Angular 17 standalone; every lazy route must use loadComponent even when it has children.',
      },
    ],
    explanation: {
      es: 'Desde Angular 14 ambas APIs usan import() dinámico y funcionan sin NgModules. Un feature con archivo de hijas propio suele usar loadChildren: () => import(./feature.routes).then(m => m.FEATURE_ROUTES). loadComponent es para una pantalla hoja y aún puede declarar children en el mismo objeto de config, pero esas hijas no viajan en el chunk del componente salvo que anides otro loadChildren. Mezclarlas es lo normal en un router standalone de Angular 17.',
      en: 'Since Angular 14 both APIs use dynamic import() and work without NgModules. A feature with its own children file typically uses loadChildren: () => import(./feature.routes).then(m => m.FEATURE_ROUTES). loadComponent is for a leaf screen and can still declare children in the same config object, but those children do not live in the component chunk unless you nest another loadChildren. Mixing them is normal in an Angular 17 standalone router.',
    },
  },
];
