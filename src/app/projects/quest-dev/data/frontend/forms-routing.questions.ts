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
      es: 'setValue exige el objeto completo y falla si falta un control. patchValue actualiza solo las claves que le pasas.',
      en: 'setValue requires the full object and fails if a control is missing. patchValue updates only the keys you pass.',
    },
    distractors: [
      {
        es: 'setValue marca el formulario dirty y patchValue lo deja pristine.',
        en: 'setValue marks the form dirty and patchValue leaves it pristine.',
      },
      {
        es: 'setValue lanza validacion y valueChanges, y patchValue se salta las dos cosas.',
        en: 'setValue runs validation and valueChanges, and patchValue skips both.',
      },
    ],
    explanation: {
      es: 'Los dos validan y emiten, salvo que pases emitEvent false. Ninguno limpia el estado dirty: para eso esta reset.',
      en: 'Both validate and emit, unless you pass emitEvent false. Neither clears the dirty state: that is what reset is for.',
    },
  },
  {
    id: 'fe-form-02',
    topic: 'Validadores',
    prompt: {
      es: '¿Qué debe devolver un validador asíncrono que pregunta al backend si el email ya existe?',
      en: 'What must an async validator that asks the backend whether an email already exists return?',
    },
    answer: {
      es: 'Un observable o una promesa que emita null si es valido, o un objeto de error si no lo es, y que complete.',
      en: 'An observable or a promise that emits null when valid, or an error object when it is not, and that completes.',
    },
    distractors: [
      {
        es: 'Un observable que emita true si el email vale y false si ya esta registrado.',
        en: 'An observable that emits true when the email is valid and false when it is already registered.',
      },
      {
        es: 'Un observable que no complete y reemita en cada tecla para revalidar solo.',
        en: 'An observable that never completes and re-emits on every key so it revalidates by itself.',
      },
    ],
    explanation: {
      es: 'Si el stream no completa, el control se queda en PENDING y el formulario no llega a ser valido. Cierra la peticion con take(1) o first.',
      en: 'If the stream does not complete, the control stays PENDING and the form never becomes valid. Close the request with take(1) or first.',
    },
  },
  {
    id: 'fe-form-03',
    topic: 'Formularios reactivos',
    prompt: {
      es: '¿Cómo se obtiene el valor de un control deshabilitado que no aparece en form.value?',
      en: 'A control disabled with disable does not show up in form.value. How do you get its value?',
    },
    answer: {
      es: 'Con getRawValue, que incluye los controles deshabilitados.',
      en: 'With getRawValue, which includes disabled controls.',
    },
    distractors: [
      {
        es: 'Leyendo form.value con emitEvent false, que deja de filtrar los controles inactivos.',
        en: 'By reading form.value with emitEvent false, which stops filtering inactive controls.',
      },
      {
        es: 'Habilitando el control antes de leer, porque un control disabled no guarda el valor.',
        en: 'By enabling the control before reading, because a disabled control does not store the value.',
      },
    ],
    explanation: {
      es: 'Angular saca los disabled del valor del grupo y de la validacion. El control sigue teniendo su value; getRawValue lo devuelve junto al resto.',
      en: 'Angular drops disabled controls from the group value and from validation. The control still has its value; getRawValue returns it with the rest.',
    },
  },
  {
    id: 'fe-form-04',
    topic: 'Formularios',
    prompt: {
      es: '¿Cuál es la diferencia entre touched y dirty en un control?',
      en: 'What is the difference between touched and dirty on a control?',
    },
    answer: {
      es: 'touched significa que el control perdio el foco. dirty significa que el usuario cambio el valor desde la vista.',
      en: 'touched means the control lost focus. dirty means the user changed the value from the view.',
    },
    distractors: [
      {
        es: 'touched se activa al recibir el foco y dirty solo si el valor final es distinto del inicial.',
        en: 'touched is set when the control receives focus and dirty only if the final value differs from the initial one.',
      },
      {
        es: 'Son el mismo flag: dirty es el nombre en plantilla y touched es el nombre en la clase.',
        en: 'They are the same flag: dirty is the template name and touched is the class name.',
      },
    ],
    explanation: {
      es: 'El blur marca touched aunque no se haya escrito nada. Si el usuario vuelve a dejar el valor original, dirty no se quita solo.',
      en: 'Blur marks touched even if nothing was typed. If the user restores the original value, dirty does not clear by itself.',
    },
  },
  {
    id: 'fe-form-05',
    topic: 'Router',
    prompt: {
      es: '¿Qué ventaja tiene un resolver frente a cargar los datos en ngOnInit?',
      en: 'What advantage does a resolver have over loading data in ngOnInit?',
    },
    answer: {
      es: 'La ruta no se activa hasta que los datos estan listos, asi el componente no pinta una vista vacia.',
      en: 'The route does not activate until the data is ready, so the component does not paint an empty view.',
    },
    distractors: [
      {
        es: 'El resolver cachea la respuesta, asi que volver a la ruta no repite la peticion.',
        en: 'The resolver caches the response, so coming back to the route does not repeat the request.',
      },
      {
        es: 'El resolver cancela solo la peticion si el usuario se va, y desde el componente eso no se puede hacer.',
        en: 'The resolver cancels the request by itself if the user leaves, and the component cannot do that.',
      },
    ],
    explanation: {
      es: 'La pantalla anterior sigue visible mientras el resolver espera. No guarda cache entre visitas, y cancelar al destruir tambien se hace en el componente.',
      en: 'The previous screen stays visible while the resolver waits. It does not cache between visits, and cancelling on destroy can also be done in the component.',
    },
  },
  {
    id: 'fe-form-06',
    topic: 'Router',
    prompt: {
      es: '¿Qué ocurre por defecto al navegar de /users/1 a /users/2 con el mismo componente?',
      en: 'You navigate from /users/1 to /users/2 with the same component. What happens by default?',
    },
    answer: {
      es: 'El componente se reutiliza y ngOnInit no vuelve a correr. Hay que reaccionar al observable paramMap.',
      en: 'The component is reused and ngOnInit does not run again. You need to react to the paramMap observable.',
    },
    distractors: [
      {
        es: 'El componente se destruye y se crea de nuevo, asi ngOnInit recibe el id nuevo sin más trabajo.',
        en: 'The component is destroyed and created again, so ngOnInit receives the new id with no extra work.',
      },
      {
        es: 'La plantilla sustituye el id sola y no hace falta leer la ruta otra vez.',
        en: 'The template replaces the id by itself and you do not need to read the route again.',
      },
    ],
    explanation: {
      es: 'Leer el snapshot una sola vez en ngOnInit deja la ficha con el primer id. Suscribete a paramMap, o a los inputs si enlazas los parametros de la ruta.',
      en: 'Reading the snapshot once in ngOnInit leaves the screen on the first id. Subscribe to paramMap, or to the inputs if you bind the route params.',
    },
  },
  {
    id: 'fe-form-07',
    topic: 'Guards',
    prompt: {
      es: '¿Qué puede devolver un guard CanActivate ademas de un booleano?',
      en: 'What can a CanActivate guard return besides a boolean?',
    },
    answer: {
      es: 'Un UrlTree para redirigir, o un observable o promesa que resuelva un booleano o un UrlTree.',
      en: 'A UrlTree to redirect, or an observable or promise that resolves to a boolean or a UrlTree.',
    },
    distractors: [
      {
        es: 'Una cadena con la ruta destino, que el router toma como redireccion relativa.',
        en: 'A string with the target route, which the router treats as a relative redirect.',
      },
      {
        es: 'Un objeto con path y queryParams, el mismo formato que router.navigate.',
        en: 'An object with path and queryParams, the same shape as router.navigate.',
      },
    ],
    explanation: {
      es: 'Devolver un UrlTree corta la navegacion actual y abre la nueva. Navegar a mano y ademas devolver false puede disparar dos navegaciones.',
      en: 'Returning a UrlTree stops the current navigation and starts the new one. Navigating by hand and also returning false can start two navigations.',
    },
  },
  {
    id: 'fe-form-08',
    topic: 'Carga perezosa',
    prompt: {
      es: '¿Qué consigue loadChildren con un import dinamico en las rutas?',
      en: 'What does loadChildren with a dynamic import achieve in the route configuration?',
    },
    answer: {
      es: 'Ese grupo de rutas viaja en otro bundle y se descarga cuando el usuario entra en esa ruta.',
      en: 'That route group ships in another bundle and is downloaded when the user opens that route.',
    },
    distractors: [
      {
        es: 'Las rutas se registran al arrancar y solo se retrasa la creacion del componente.',
        en: 'The routes are registered at bootstrap and only component creation is delayed.',
      },
      {
        es: 'El bundle se descarga en segundo plano justo despues del arranque para que la primera visita sea instantanea.',
        en: 'The bundle is downloaded in the background right after bootstrap so the first visit is instant.',
      },
    ],
    explanation: {
      es: 'Eso reduce el JavaScript inicial. Descargar el chunk antes de que el usuario navegue es precarga, y es una estrategia aparte.',
      en: 'That shrinks the initial JavaScript. Downloading the chunk before the user navigates is preloading, and it is a separate strategy.',
    },
  },
];
