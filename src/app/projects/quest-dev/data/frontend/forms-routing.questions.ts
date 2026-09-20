import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_FORMS_ROUTING_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-form-01',
    topic: 'Formularios reactivos',
    prompt: {
      es: '¿Qué diferencia hay entre setValue y patchValue en un FormGroup?',
      en: 'What is the difference between setValue and patchValue on a FormGroup?',
    },
    answer: {
      es: 'setValue exige el objeto completo y falla si faltan controles; patchValue actualiza solo las claves presentes.',
      en: 'setValue requires the complete object and fails if controls are missing; patchValue updates only the provided keys.',
    },
    distractors: [
      {
        es: 'setValue marca el formulario como sucio y patchValue conserva el estado pristine de los controles.',
        en: 'setValue marks the form dirty while patchValue preserves the pristine state of the controls.',
      },
      {
        es: 'setValue dispara la validación y los eventos de valueChanges, mientras patchValue los omite por defecto.',
        en: 'setValue triggers validation and valueChanges events, while patchValue skips them by default.',
      },
    ],
    explanation: {
      es: 'La diferencia es la estrictez del contrato: setValue valida la forma del objeto y lanza error ante claves ausentes o desconocidas, lo que ayuda a detectar desincronizaciones con el modelo. Ambos disparan validación y valueChanges (se silencian con emitEvent: false) y ninguno altera el estado pristine por sí mismo.',
      en: 'The difference is contract strictness: setValue validates the object shape and throws on missing or unknown keys, which helps catch drift against the model. Both trigger validation and valueChanges (silenced with emitEvent: false) and neither changes the pristine state by itself.',
    },
  },
  {
    id: 'fe-form-02',
    topic: 'Validadores',
    prompt: {
      es: '¿Qué debe devolver un validador asíncrono que consulta al backend si el email ya existe?',
      en: 'What must an async validator that asks the backend whether an email already exists return?',
    },
    answer: {
      es: 'Un observable o promesa que emita el objeto de errores o null y que complete.',
      en: 'An observable or promise that emits the error object or null and completes.',
    },
    distractors: [
      {
        es: 'Un observable que emita true cuando el email sea válido y false cuando ya esté registrado.',
        en: 'An observable emitting true when the email is valid and false when it is already registered.',
      },
      {
        es: 'Un observable de larga vida que reemita en cada cambio del control para revalidar automáticamente.',
        en: 'A long-lived observable that re-emits on every control change to revalidate automatically.',
      },
    ],
    explanation: {
      es: 'Si el stream no completa, el control se queda eternamente en estado PENDING y el formulario nunca llega a ser válido; por eso se suele cerrar con first() o take(1). El contrato es null para válido y un mapa de errores (por ejemplo { emailTaken: true }) para inválido, nunca un booleano.',
      en: 'If the stream never completes, the control stays in PENDING forever and the form never becomes valid; that is why it is usually closed with first() or take(1). The contract is null for valid and an error map (for example { emailTaken: true }) for invalid, never a boolean.',
    },
  },
  {
    id: 'fe-form-03',
    topic: 'Formularios reactivos',
    prompt: {
      es: 'Un control deshabilitado con disable() no aparece en form.value. ¿Cómo se obtiene su valor?',
      en: 'A control disabled with disable() does not show up in form.value. How do you get its value?',
    },
    answer: {
      es: 'Usando form.getRawValue(), que incluye los controles deshabilitados.',
      en: 'Using form.getRawValue(), which includes disabled controls.',
    },
    distractors: [
      {
        es: 'Leyendo form.value con la opción { emitEvent: false }, que omite el filtrado de controles inactivos.',
        en: 'Reading form.value with the { emitEvent: false } option, which skips the filtering of inactive controls.',
      },
      {
        es: 'Accediendo a form.controls, ya que el valor solo se excluye del objeto agregado por motivos de validación.',
        en: 'Accessing form.controls, since the value is only excluded from the aggregate object for validation reasons.',
      },
    ],
    explanation: {
      es: 'Angular excluye los controles deshabilitados del valor agregado y de la validación, y getRawValue existe justo para recuperarlos. Acceder al control individual también devuelve su valor, pero no resuelve el problema del objeto completo; y emitEvent solo controla la emisión de eventos, no el contenido.',
      en: 'Angular excludes disabled controls from the aggregate value and from validation, and getRawValue exists precisely to recover them. Reading the individual control also returns its value but does not solve the whole-object problem; and emitEvent only controls event emission, not content.',
    },
  },
  {
    id: 'fe-form-04',
    topic: 'Formularios',
    prompt: {
      es: '¿Cuál es la diferencia de estado entre touched y dirty en un control?',
      en: 'What is the state difference between touched and dirty on a control?',
    },
    answer: {
      es: 'touched indica que el control perdió el foco; dirty que su valor cambió desde la interfaz.',
      en: 'touched means the control lost focus; dirty means its value changed through the UI.',
    },
    distractors: [
      {
        es: 'touched indica que el usuario interactuó de cualquier forma y dirty que además el valor es distinto del inicial.',
        en: 'touched means the user interacted in any way and dirty additionally means the value differs from the initial one.',
      },
      {
        es: 'touched se activa al recibir el foco y dirty al escribir, sin importar si el valor final es igual al original.',
        en: 'touched is set on focus and dirty on typing, regardless of whether the final value equals the original.',
      },
    ],
    explanation: {
      es: 'touched se marca en el evento blur, no al entrar al campo, y dirty al cambiar el valor desde la vista; ninguno se revierte si el usuario deja el valor original. Se usan para decidir cuándo mostrar errores sin agredir al usuario que aún no ha llegado al campo.',
      en: 'touched is set on the blur event, not on focus, and dirty when the value changes from the view; neither reverts if the user restores the original value. They are used to decide when to show errors without nagging a user who has not reached the field yet.',
    },
  },
  {
    id: 'fe-form-05',
    topic: 'Router',
    prompt: {
      es: '¿Qué ventaja tiene un resolver frente a cargar los datos en el ngOnInit del componente?',
      en: 'What advantage does a resolver have over loading data in the component ngOnInit?',
    },
    answer: {
      es: 'La navegación se completa con los datos ya disponibles, evitando renderizar una vista vacía o a medio llenar.',
      en: 'Navigation completes with the data already available, avoiding rendering an empty or half-filled view.',
    },
    distractors: [
      {
        es: 'El resolver cachea la respuesta entre navegaciones, así que volver a la ruta no repite la petición.',
        en: 'The resolver caches the response between navigations, so returning to the route does not repeat the request.',
      },
      {
        es: 'El resolver cancela la petición si el usuario navega a otra ruta, algo imposible desde el componente.',
        en: 'The resolver cancels the request if the user navigates elsewhere, which is impossible from the component.',
      },
    ],
    explanation: {
      es: 'El resolver corre antes de activar la ruta, por lo que el componente nace con datos y se simplifica su plantilla; la contrapartida es que la pantalla anterior se queda visible mientras espera. No cachea nada entre navegaciones y cancelar peticiones al destruir el componente se logra igual con takeUntilDestroyed.',
      en: 'A resolver runs before activating the route, so the component is born with data and its template gets simpler; the trade-off is that the previous screen stays visible while waiting. It caches nothing between navigations, and cancelling requests on destroy is equally achievable with takeUntilDestroyed.',
    },
  },
  {
    id: 'fe-form-06',
    topic: 'Router',
    prompt: {
      es: 'Navegas de /users/1 a /users/2 con el mismo componente. ¿Qué ocurre por defecto?',
      en: 'You navigate from /users/1 to /users/2 with the same component. What happens by default?',
    },
    answer: {
      es: 'El componente se reutiliza sin volver a ejecutar ngOnInit, así que hay que reaccionar a paramMap.',
      en: 'The component is reused without running ngOnInit again, so you must react to paramMap.',
    },
    distractors: [
      {
        es: 'El componente se destruye y se recrea, por lo que ngOnInit recibe el nuevo id sin trabajo adicional.',
        en: 'The component is destroyed and recreated, so ngOnInit receives the new id with no extra work.',
      },
      {
        es: 'El componente se reutiliza pero Angular vuelve a ejecutar los resolvers y actualiza el snapshot de la ruta.',
        en: 'The component is reused but Angular re-runs the resolvers and refreshes the route snapshot.',
      },
    ],
    explanation: {
      es: 'El router reutiliza la instancia cuando solo cambian los parámetros, de ahí el clásico bug de la pantalla que no se actualiza; la solución es suscribirse a route.paramMap en lugar de leer el snapshot una sola vez. Puede forzarse la recreación con onSameUrlNavigation o una RouteReuseStrategy propia.',
      en: 'The router reuses the instance when only parameters change, hence the classic bug of a screen that never updates; the fix is subscribing to route.paramMap instead of reading the snapshot once. Recreation can be forced with onSameUrlNavigation or a custom RouteReuseStrategy.',
    },
  },
  {
    id: 'fe-form-07',
    topic: 'Guards',
    prompt: {
      es: '¿Qué puede devolver un guard de tipo CanActivate además de un booleano?',
      en: 'What can a CanActivate guard return besides a boolean?',
    },
    answer: {
      es: 'Un UrlTree para redirigir, o un observable/promesa que resuelva booleano o UrlTree.',
      en: 'A UrlTree to redirect, or an observable/promise resolving to a boolean or a UrlTree.',
    },
    distractors: [
      {
        es: 'Una cadena con la ruta destino, que el router interpreta como redirección relativa a la actual.',
        en: 'A string with the target route, which the router interprets as a redirect relative to the current one.',
      },
      {
        es: 'Un objeto de configuración con la ruta y los parámetros de consulta que se aplicarán al redirigir.',
        en: 'A configuration object with the route and query parameters to be applied on redirect.',
      },
    ],
    explanation: {
      es: 'Devolver un UrlTree es la forma canónica de redirigir porque cancela la navegación actual y arranca la nueva en un solo paso, sin la condición de carrera de llamar a router.navigate y además devolver false. El router no acepta cadenas ni objetos sueltos como resultado del guard.',
      en: 'Returning a UrlTree is the canonical way to redirect because it cancels the current navigation and starts the new one in a single step, without the race condition of calling router.navigate and also returning false. The router does not accept plain strings or objects as guard results.',
    },
  },
  {
    id: 'fe-form-08',
    topic: 'Carga perezosa',
    prompt: {
      es: '¿Qué logra loadChildren con import() dinámico en la configuración de rutas?',
      en: 'What does loadChildren with a dynamic import() achieve in the route configuration?',
    },
    answer: {
      es: 'Que ese grupo de rutas se empaquete aparte y se descargue solo cuando el usuario navegue a él.',
      en: 'That the route group is bundled separately and downloaded only when the user navigates to it.',
    },
    distractors: [
      {
        es: 'Que las rutas hijas se registren al arrancar pero sus componentes se instancien de forma perezosa.',
        en: 'That the child routes are registered at bootstrap but their components are instantiated lazily.',
      },
      {
        es: 'Que el bundle se descargue en segundo plano tras el arranque, acelerando la primera navegación.',
        en: 'That the bundle is downloaded in the background after bootstrap, speeding up the first navigation.',
      },
    ],
    explanation: {
      es: 'El beneficio es de red y de bundle inicial: el código viaja en un chunk separado que no forma parte del arranque. Los componentes de Angular siempre se instancian al activarse la ruta, con o sin carga perezosa; y descargar por adelantado es la precarga (PreloadAllModules), que es una estrategia opcional adicional.',
      en: 'The benefit is about network and initial bundle: the code travels in a separate chunk that is not part of bootstrap. Angular components are always instantiated when the route activates, with or without lazy loading; and downloading ahead of time is preloading (PreloadAllModules), an additional optional strategy.',
    },
  },
];
