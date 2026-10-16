import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_ROUTER_ADVANCED_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-route-01',
    topic: 'Guards',
    prompt: {
      es: '¿Cómo se protege una ruta con guards?',
      en: 'How do you protect routes with Guards?',
    },
    answer: {
      es: 'Pones una funcion en canActivate. Puede inyectar el servicio de auth y devolver true, false o un UrlTree que manda al login.',
      en: 'You put a function on canActivate. It can inject the auth service and return true, false or a UrlTree that sends the user to login.',
    },
    distractors: [
      {
        es: 'Se esconde el routerLink con un @if. Si la URL se escribe a mano, Angular no entra igual.',
        en: 'You hide the routerLink with an @if. If the URL is typed by hand, Angular still does not enter.',
      },
      {
        es: 'El guard tiene que ser una clase con constructor. Una funcion no puede inyectar servicios.',
        en: 'The guard must be a class with a constructor. A function cannot inject services.',
      },
    ],
    explanation: {
      es: 'false se queda en la ruta actual y un UrlTree redirige en el mismo paso. canDeactivate es el otro caso: avisar al salir, por ejemplo si el formulario esta dirty.',
      en: 'false stays on the current route and a UrlTree redirects in the same step. canDeactivate is the other case: warn on the way out, for example if the form is dirty.',
    },
  },
  {
    id: 'fe-route-02',
    topic: 'Guards',
    prompt: {
      es: '¿Qué diferencia hay entre canActivate, canMatch y canDeactivate?',
      en: 'What is the difference between canActivate, canMatch and canDeactivate?',
    },
    answer: {
      es: 'canActivate decide si entras en una ruta ya elegida. canMatch decide si esa config entra en el matching y, si dice que no, el router prueba la siguiente, mientras canDeactivate corre al salir.',
      en: 'canActivate decides if you enter a route that was already chosen. canMatch decides if that config takes part in matching and, if it says no, the router tries the next one, while canDeactivate runs when you leave.',
    },
    distractors: [
      {
        es: 'canMatch es un alias de canActivate. Si devuelve false, cancela la navegacion entera.',
        en: 'canMatch is an alias of canActivate. If it returns false, it cancels the whole navigation.',
      },
      {
        es: 'canDeactivate tambien frena el refresh y el cierre de la pestana.',
        en: 'canDeactivate also stops refresh and closing the tab.',
      },
    ],
    explanation: {
      es: 'canMatch sirve para dos features con el mismo path, por rol o por un flag, antes de bajar el chunk. canActivate ya tiene la ruta elegida y no cambia una variante por otra.',
      en: 'canMatch is for two features with the same path, by role or by a flag, before the chunk downloads. canActivate already has a chosen route and does not swap one variant for another.',
    },
  },
  {
    id: 'fe-route-03',
    topic: 'Guards',
    prompt: {
      es: '¿Cómo avisa canDeactivate de cambios sin guardar?',
      en: 'How does canDeactivate warn about unsaved changes?',
    },
    answer: {
      es: 'Corre al intentar salir, recibe el componente y puede devolver false para quedarse, o un UrlTree para ir a otra pantalla. Lo habitual es mirar si el formulario esta dirty.',
      en: 'It runs when the user tries to leave, receives the component and can return false to stay, or a UrlTree to go somewhere else. You usually check whether the form is dirty.',
    },
    distractors: [
      {
        es: 'Intercepta el cierre del navegador, asi que no hace falta beforeunload.',
        en: 'It intercepts closing the browser, so beforeunload is not needed.',
      },
      {
        es: 'Devolver false redirige solo al padre. No hace falta dialogo ni UrlTree.',
        en: 'Returning false redirects to the parent by itself. You do not need a dialog or a UrlTree.',
      },
    ],
    explanation: {
      es: 'El primer argumento es la instancia del componente, por eso puede exponer un metodo del estilo de hasUnsavedChanges. Recargar la pagina no pasa por este guard.',
      en: 'The first argument is the component instance, so it can expose a method such as hasUnsavedChanges. Reloading the page does not go through this guard.',
    },
  },
  {
    id: 'fe-route-04',
    topic: 'Datos entre rutas',
    prompt: {
      es: '¿Cómo se pasan datos entre rutas?',
      en: 'How do you pass data between routes?',
    },
    answer: {
      es: 'El id va en un parametro del path, los filtros en query params y un titulo o un rol en data estatico. Si hay que cargarlo antes de entrar se usa un resolver, y lo que no debe verse en la URL puede ir en el state de la navegacion.',
      en: 'An id goes in a path param, filters go in query params and a title or a role goes in static data. If it must be loaded before entering you use a resolver, and what should not appear in the URL can go in navigation state.',
    },
    distractors: [
      {
        es: 'Solo con query params. El path no puede llevar datos y el resolver no existe en standalone.',
        en: 'Only with query params. The path cannot carry data and resolvers do not exist on standalone routes.',
      },
      {
        es: 'Inyectando el componente destino y asignando sus campos antes de navegar.',
        en: 'By injecting the destination component and assigning its fields before navigating.',
      },
    ],
    explanation: {
      es: 'Los params identifican el recurso y sobreviven al refresh, y el state de la navegacion no: al recargar se pierde. No metas objetos grandes en la query.',
      en: 'Params identify the resource and survive a refresh, and navigation state does not: a reload drops it. Do not put large objects in the query string.',
    },
  },
  {
    id: 'fe-route-05',
    topic: 'Resolvers',
    prompt: {
      es: '¿Qué hace un resolver?',
      en: 'What does a resolver do?',
    },
    answer: {
      es: 'Carga datos antes de activar la ruta y los deja en el data de esa ruta. El componente nace con esos datos y no pinta vacio.',
      en: 'It loads data before the route activates and stores it on that route data. The component is created with that data and does not paint empty.',
    },
    distractors: [
      {
        es: 'Cachea la respuesta para siempre. Volver a la URL no repite la peticion.',
        en: 'It caches the response forever. Coming back to the URL does not repeat the request.',
      },
      {
        es: 'Corre en ngOnInit y cancela la peticion si el usuario se va a otra ruta.',
        en: 'It runs in ngOnInit and cancels the request if the user goes to another route.',
      },
    ],
    explanation: {
      es: 'La pantalla anterior sigue a la vista mientras espera. Si el resolver falla, la navegacion no termina y el componente no se crea, salvo que tu captures el error y devuelvas un valor de reserva.',
      en: 'The previous screen stays visible while it waits. If the resolver fails, navigation does not finish and the component is not created, unless you catch the error and return a fallback.',
    },
  },
  {
    id: 'fe-route-06',
    topic: 'Parámetros',
    prompt: {
      es: '¿Cuándo lees paramMap, queryParamMap o el snapshot?',
      en: 'When do you read paramMap, queryParamMap or the snapshot?',
    },
    answer: {
      es: 'paramMap son los parametros del path, como el id, y queryParamMap es la query. El snapshot es una lectura fija, y si el mismo componente se reutiliza y el id cambia, escuchas el observable.',
      en: 'paramMap is the path params, such as the id, and queryParamMap is the query string. The snapshot is a one-off read, and if the same component is reused and the id changes, you listen to the observable.',
    },
    distractors: [
      {
        es: 'paramMap ya incluye la query. queryParamMap es un alias viejo.',
        en: 'paramMap already includes the query string. queryParamMap is an old alias.',
      },
      {
        es: 'El snapshot se actualiza solo dentro de ngOnInit cada vez que cambia la URL.',
        en: 'The snapshot updates by itself inside ngOnInit every time the URL changes.',
      },
    ],
    explanation: {
      es: 'Leer el snapshot una vez deja la pantalla en el primer id, y los query params no aparecen en paramMap. Con el binding de inputs de la ruta puedes recibirlos como inputs y evitar el ActivatedRoute.',
      en: 'Reading the snapshot once leaves the screen on the first id, and query params do not show up in paramMap. With route input binding you can receive them as inputs and skip ActivatedRoute.',
    },
  },
  {
    id: 'fe-route-07',
    topic: 'Query params',
    prompt: {
      es: '¿Cómo conservas los query params al navegar?',
      en: 'How do you keep query params when you navigate?',
    },
    answer: {
      es: 'Con queryParamsHandling: preserve se queda con la query actual e ignora los params nuevos, y merge mezcla con las claves nuevas ganando. Si no pones nada, la query se sustituye por la que pases.',
      en: 'With queryParamsHandling: preserve keeps the current query and ignores the new params, and merge combines them with the new keys winning. If you set nothing, the query is replaced by what you pass.',
    },
    distractors: [
      {
        es: 'preserve mezcla y merge deja la query anterior intacta. Solo cambia el nombre.',
        en: 'preserve merges and merge leaves the previous query untouched. Only the name changes.',
      },
      {
        es: 'La opcion solo existe en routerLink. navigate siempre borra la query.',
        en: 'The option exists only on routerLink. navigate always clears the query string.',
      },
    ],
    explanation: {
      es: 'merge es lo habitual en una barra de filtros que debe sobrevivir a un cambio de path. preserve no anade la clave que pasas en esa misma navegacion.',
      en: 'merge is the usual choice for a filter bar that must survive a path change. preserve does not add the key you pass on that same navigation.',
    },
  },
  {
    id: 'fe-route-08',
    topic: 'Navegación',
    prompt: {
      es: '¿Para qué sirve relativeTo en router.navigate?',
      en: 'What is relativeTo for on router.navigate?',
    },
    answer: {
      es: 'Indica la ruta desde la que se resuelven comandos como subir un nivel y entrar en edit. Sin relativeTo, navigate los toma desde la raiz.',
      en: 'It sets the route from which commands such as going up one level and into edit are resolved. Without relativeTo, navigate treats them as starting from the root.',
    },
    distractors: [
      {
        es: 'relativeTo ya apunta a la ruta actual, asi que pasarlo es opcional si el comando lleva puntos.',
        en: 'relativeTo already points at the current route, so passing it is optional if the command contains dots.',
      },
      {
        es: 'routerLink tambien exige relativeTo, porque no sabe en que ruta esta el enlace.',
        en: 'routerLink also requires relativeTo, because it does not know which route the link is on.',
      },
    ],
    explanation: {
      es: 'Un routerLink sin barra inicial ya es relativo a la URL actual. navigate no: hay que pasar relativeTo con el ActivatedRoute si la navegacion es relativa.',
      en: 'A routerLink without a leading slash is already relative to the current URL. navigate is not: pass relativeTo with the ActivatedRoute when the navigation is relative.',
    },
  },
  {
    id: 'fe-route-09',
    topic: 'Rutas hijas',
    prompt: {
      es: '¿Cómo se configuran las rutas hijas?',
      en: 'How do you set up child routes?',
    },
    answer: {
      es: 'El padre declara children y un router-outlet en su plantilla. La URL es el path del padre más el del hijo, y el padre tiene que poder coincidir como prefijo para que sobre URL para el hijo.',
      en: 'The parent declares children and a router-outlet in its template. The URL is the parent path plus the child path, and the parent must be allowed to match as a prefix so some URL is left for the child.',
    },
    distractors: [
      {
        es: 'Los hijos sustituyen al padre. No hace falta outlet: Angular pinta el hijo en el outlet raiz.',
        en: 'Children replace the parent. No outlet is needed: Angular paints the child in the root outlet.',
      },
      {
        es: 'Cada hijo repite el path completo del padre. children solo agrupa guards.',
        en: 'Each child repeats the full parent path. children only groups guards.',
      },
    ],
    explanation: {
      es: 'Si el padre exige coincidencia total, no queda resto de URL y los hijos no entran. El hijo de path vacio, el de la pagina indice, suele pedir coincidencia total para no tragarse el resto.',
      en: 'If the parent demands a full match, no URL is left and the children never activate. The empty-path child, the index page, usually asks for a full match so it does not swallow the rest.',
    },
  },
  {
    id: 'fe-route-10',
    topic: 'Orden',
    prompt: {
      es: '¿Por qué importa el orden de las rutas y el comodín va al final?',
      en: 'Why does route order matter and why does the wildcard go last?',
    },
    answer: {
      es: 'Gana la primera ruta hermana que coincide. El comodín coincide con cualquier URL, asi que si va antes, las rutas de debajo no se usan.',
      en: 'The first sibling route that matches wins. The wildcard matches any URL, so if it is placed earlier, the routes below it are never used.',
    },
    distractors: [
      {
        es: 'Angular ordena por especificidad. El comodin se evalua siempre el ultimo aunque lo declares arriba.',
        en: 'Angular sorts by specificity. The wildcard is always evaluated last even if you declare it first.',
      },
      {
        es: 'El orden solo importa en los guards. El matching prueba todas y elige la más larga.',
        en: 'Order only matters for guards. Matching tries all of them and picks the longest.',
      },
    ],
    explanation: {
      es: 'Pasa lo mismo con dos rutas del mismo path que se distinguen con canMatch: gana la primera que acepta. Deja el comodin al final de cada lista de hermanos.',
      en: 'The same happens with two routes of the same path that canMatch tells apart: the first one that accepts wins. Keep the wildcard at the end of each sibling list.',
    },
  },
  {
    id: 'fe-route-11',
    topic: 'Redirects',
    prompt: {
      es: '¿Cómo se hace una redirección de la ruta vacía?',
      en: 'How do you redirect from an empty path?',
    },
    answer: {
      es: 'Con redirectTo y pathMatch full. Si dejas el prefijo por defecto, el path vacio coincide con todas las URLs.',
      en: 'With redirectTo and pathMatch full. If you leave the default prefix, the empty path matches every URL.',
    },
    distractors: [
      {
        es: 'redirectTo ya implica coincidencia total. pathMatch se ignora en un redirect.',
        en: 'redirectTo already implies a full match. pathMatch is ignored on a redirect.',
      },
      {
        es: 'Se usa un guard canActivate que llama a navigate. redirectTo no existe en standalone.',
        en: 'You use a canActivate guard that calls navigate. redirectTo does not exist on standalone routes.',
      },
    ],
    explanation: {
      es: 'El redirect de indice es path vacio, destino home y coincidencia total. Los guards de la ruta que redirige no corren: el matching salta al destino.',
      en: 'The index redirect is an empty path, a home target and a full match. Guards on the redirecting route do not run: matching jumps to the target.',
    },
  },
  {
    id: 'fe-route-12',
    topic: 'Lazy loading',
    prompt: {
      es: '¿Cómo se configura el lazy loading con componentes standalone?',
      en: 'How do you configure lazy loading with standalone components?',
    },
    answer: {
      es: 'loadComponent importa un componente standalone y loadChildren importa un archivo de rutas de la feature. El import es dinamico, asi ese codigo va en otro chunk y se baja al entrar.',
      en: 'loadComponent imports one standalone component and loadChildren imports a feature routes file. The import is dynamic, so that code ships in another chunk and downloads when you enter.',
    },
    distractors: [
      {
        es: 'En standalone no hay lazy loading. Todo el arbol se declara en el bootstrap.',
        en: 'Standalone apps have no lazy loading. The whole tree is declared in bootstrap.',
      },
      {
        es: 'loadChildren esta en desuso. Aunque la feature tenga varias paginas, se usa solo loadComponent.',
        en: 'loadChildren is deprecated. Even if the feature has several pages, you only use loadComponent.',
      },
    ],
    explanation: {
      es: 'Una pantalla suelta encaja en loadComponent y una feature con hijos en loadChildren. No hace falta un NgModule para partir el bundle.',
      en: 'A single screen fits loadComponent and a feature with children fits loadChildren. You do not need an NgModule to split the bundle.',
    },
  },
  {
    id: 'fe-route-13',
    topic: 'Precarga',
    prompt: {
      es: '¿Qué es la precarga de rutas?',
      en: 'What is route preloading?',
    },
    answer: {
      es: 'Despues del arranque, una estrategia baja en segundo plano los chunks perezosos: PreloadAllModules los baja todos y una estrategia propia puede saltarse alguno, por ejemplo en una red lenta.',
      en: 'After bootstrap, a strategy downloads lazy chunks in the background: PreloadAllModules downloads all of them and a custom strategy can skip some, for example on a slow network.',
    },
    distractors: [
      {
        es: 'Es lo mismo que loadChildren. El chunk se pide en el primer click, no antes.',
        en: 'It is the same as loadChildren. The chunk is requested on the first click, not before.',
      },
      {
        es: 'Precarga el HTML de todas las rutas en el index. No descarga JavaScript.',
        en: 'It preloads the HTML of every route into the index. It does not download JavaScript.',
      },
    ],
    explanation: {
      es: 'Se registra al configurar el router, con withPreloading. La precarga no cambia el alcance de los servicios: solo adelanta la descarga.',
      en: 'You register it when configuring the router, with withPreloading. Preloading does not change service scope: it only downloads earlier.',
    },
  },
  {
    id: 'fe-route-14',
    topic: 'RouterLink',
    prompt: {
      es: '¿Qué hace routerLinkActive?',
      en: 'What does routerLinkActive do?',
    },
    answer: {
      es: 'Pone una clase cuando el enlace corresponde a la URL actual, y por defecto un enlace padre sigue activo en las rutas hijas. Con exact, la URL tiene que coincidir entera.',
      en: 'It adds a class when the link matches the current URL, and by default a parent link stays active on child routes. With exact, the URL has to match the link fully.',
    },
    distractors: [
      {
        es: 'exact es el defecto. Hay que pasarlo en false para que el padre se marque en los hijos.',
        en: 'exact is the default. You pass false so the parent stays highlighted on children.',
      },
      {
        es: 'Solo mira el texto del enlace, no la URL. Dos links con el mismo label se marcan juntos.',
        en: 'It only looks at the link text, not the URL. Two links with the same label are highlighted together.',
      },
    ],
    explanation: {
      es: 'Por eso el item de users se ilumina tambien en users/42, hasta que pides coincidencia exacta. La clase cambia cuando la navegacion termina.',
      en: 'That is why a users item also lights up on users/42, until you ask for an exact match. The class changes when navigation ends.',
    },
  },
  {
    id: 'fe-route-15',
    topic: 'Eventos',
    prompt: {
      es: '¿Cómo muestras un indicador de carga durante la navegación?',
      en: 'How do you show a loading indicator during navigation?',
    },
    answer: {
      es: 'Lo enseñas en NavigationStart y lo escondes en NavigationEnd, NavigationCancel y NavigationError. Escuchas router.events.',
      en: 'You show it on NavigationStart and hide it on NavigationEnd, NavigationCancel and NavigationError. You listen to router.events.',
    },
    distractors: [
      {
        es: 'Basta con NavigationEnd. Un guard que rechaza la ruta tambien emite End.',
        en: 'NavigationEnd is enough. A guard that rejects the route also emits End.',
      },
      {
        es: 'Se lee de ActivatedRoute. Router.events solo emite cuando la vista ya se pinto.',
        en: 'You read it from ActivatedRoute. Router.events only emits after the view has painted.',
      },
    ],
    explanation: {
      es: 'Si solo esperas End, un guard que cancela o un resolver que falla deja el spinner puesto. Cancel no es lo mismo que Error: el guard que devuelve false cancela, el fallo de un resolver es un error.',
      en: 'If you only wait for End, a guard that cancels or a resolver that fails leaves the spinner up. Cancel is not the same as Error: a guard that returns false cancels, a resolver failure is an error.',
    },
  },
  {
    id: 'fe-route-16',
    topic: 'Título',
    prompt: {
      es: '¿Cómo pones el título de la página desde la ruta?',
      en: 'How do you set the page title from the route?',
    },
    answer: {
      es: 'Con la propiedad title de la ruta, Angular escribe el titulo del documento despues de navegar. Si quieres un sufijo con el nombre de la app, provees una TitleStrategy propia.',
      en: 'With the title property on the route, Angular writes the document title after navigation. If you want a suffix with the app name, you provide your own TitleStrategy.',
    },
    distractors: [
      {
        es: 'Solo se lee data.title. La propiedad title de la ruta se ignora.',
        en: 'Only data.title is read. The title property on the route is ignored.',
      },
      {
        es: 'Hay que suscribirse a NavigationEnd en el componente raiz y asignar document.title a mano siempre.',
        en: 'You must subscribe to NavigationEnd in the root component and always assign document.title by hand.',
      },
    ],
    explanation: {
      es: 'El titulo puede ser un texto fijo o algo que se resuelve, como el nombre de un articulo. No hace falta escuchar eventos para el caso normal.',
      en: 'The title can be a fixed string or something you resolve, such as an article name. You do not need to listen to events for the normal case.',
    },
  },
  {
    id: 'fe-route-17',
    topic: 'Errores',
    prompt: {
      es: '¿Qué pasa si un resolver falla?',
      en: 'What happens if a resolver fails?',
    },
    answer: {
      es: 'La navegacion termina en error y el componente destino no se crea. Puedes escuchar ese error para avisar o redirigir, o capturarlo dentro del resolver y devolver un valor de reserva.',
      en: 'Navigation ends in an error and the destination component is not created. You can listen for that error to warn or redirect, or catch it inside the resolver and return a fallback.',
    },
    distractors: [
      {
        es: 'El componente se crea igual y el error queda en route.data, como un HTTP en ngOnInit.',
        en: 'The component is created anyway and the error is left on route.data, like an HTTP call in ngOnInit.',
      },
      {
        es: 'Un resolver fallido emite NavigationCancel. NavigationError es solo para un import perezoso roto.',
        en: 'A failed resolver emits NavigationCancel. NavigationError is only for a broken lazy import.',
      },
    ],
    explanation: {
      es: 'Un guard que devuelve false cancela, no es un error de navegacion. Un import dinamico que falla sí es un error, igual que el resolver.',
      en: 'A guard that returns false cancels and that is not a navigation error. A dynamic import that fails is an error, the same as the resolver.',
    },
  },
  {
    id: 'fe-route-18',
    topic: 'Guards',
    prompt: {
      es: '¿Qué diferencia hay entre un guard funcional y uno de clase?',
      en: 'What is the difference between a functional guard and a class guard?',
    },
    answer: {
      es: 'El funcional es una funcion que pide dependencias con inject y se pone directo en la ruta, y el de clase es un servicio inyectable. Los dos pueden devolver booleano, UrlTree o un resultado asincrono.',
      en: 'The functional one is a function that asks for dependencies with inject and is placed directly on the route, and the class one is an injectable service. Both can return a boolean, a UrlTree or an async result.',
    },
    distractors: [
      {
        es: 'La funcion no puede usar servicios. Si hay auth, la clase es obligatoria.',
        en: 'The function cannot use services. If there is auth, the class is mandatory.',
      },
      {
        es: 'Las clases ya no compilan. El router solo acepta funciones.',
        en: 'Classes no longer compile. The router only accepts functions.',
      },
    ],
    explanation: {
      es: 'La funcion es lo habitual en una app standalone porque no pide un provider extra. La clase sigue valiendo: solo es más verbosa.',
      en: 'The function is the usual choice in a standalone app because it does not need an extra provider. The class still works: it is just more verbose.',
    },
  },
  {
    id: 'fe-route-19',
    topic: 'Navegación',
    prompt: {
      es: '¿Qué diferencia hay entre routerLink y router.navigate?',
      en: 'What is the difference between routerLink and router.navigate?',
    },
    answer: {
      es: 'routerLink es la directiva del enlace en la plantilla y navigate es el metodo que llamas desde la clase. Los dos aceptan comandos y extras, como query params.',
      en: 'routerLink is the link directive in the template and navigate is the method you call from the class. Both accept commands and extras, such as query params.',
    },
    distractors: [
      {
        es: 'navigate solo cambia el path y no puede llevar query params. Para eso esta routerLink.',
        en: 'navigate only changes the path and cannot carry query params. routerLink is for that.',
      },
      {
        es: 'routerLink recarga la pagina entera. navigate es la unica navegacion dentro de la app.',
        en: 'routerLink reloads the whole page. navigate is the only navigation inside the app.',
      },
    ],
    explanation: {
      es: 'En la plantilla usa el enlace, y en un guard, despues de guardar o en un callback, llama a navigate. Un enlace sin barra inicial es relativo, y navigate necesita relativeTo para serlo.',
      en: 'In the template, use the link, and in a guard, after a save or in a callback, call navigate. A link without a leading slash is relative, and navigate needs relativeTo to be relative.',
    },
  },
  {
    id: 'fe-route-20',
    topic: 'Lazy loading',
    prompt: {
      es: '¿Qué diferencia hay entre loadComponent y loadChildren?',
      en: 'What is the difference between loadComponent and loadChildren?',
    },
    answer: {
      es: 'loadComponent carga un solo componente standalone. loadChildren carga un conjunto de rutas, con sus hijos, y asi partes una feature entera en su chunk.',
      en: 'loadComponent loads a single standalone component. loadChildren loads a set of routes, with their children, so you split a whole feature into its chunk.',
    },
    distractors: [
      {
        es: 'Son intercambiables. Angular mira el tipo exportado y da igual la clave que uses.',
        en: 'They are interchangeable. Angular looks at the exported type and the key you use does not matter.',
      },
      {
        es: 'loadChildren descarga el modulo al arrancar y loadComponent espera al click.',
        en: 'loadChildren downloads the module at bootstrap and loadComponent waits for the click.',
      },
    ],
    explanation: {
      es: 'Las dos usan un import dinamico y no exigen NgModule. Si el componente de loadComponent declara hijos en el mismo objeto, esos hijos no viajan solos en otro chunk: para eso anidas otro loadChildren.',
      en: 'Both use a dynamic import and do not require an NgModule. If the loadComponent component declares children on the same object, those children do not travel in their own chunk: for that you nest another loadChildren.',
    },
  },
];
