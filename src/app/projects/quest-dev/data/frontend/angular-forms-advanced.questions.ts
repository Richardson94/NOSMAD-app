import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_FORMS_ADVANCED_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-form2-01',
    topic: 'Formularios',
    prompt: {
      es: '¿Qué diferencia hay entre los formularios de plantilla y los reactivos?',
      en: 'What is the difference between template-driven forms and reactive forms?',
    },
    answer: {
      es: 'En los de plantilla el formulario vive en el HTML, con ngModel y directivas. En los reactivos construyes FormControl y FormGroup en la clase, y la plantilla solo los enlaza.',
      en: 'In template-driven forms the form lives in the HTML, with ngModel and directives. In reactive forms you build FormControl and FormGroup in the class, and the template only binds them.',
    },
    distractors: [
      {
        es: 'Son lo mismo. La unica diferencia es que los reactivos no admiten validadores.',
        en: 'They are the same. The only difference is that reactive forms do not support validators.',
      },
      {
        es: 'Los de plantilla se crean en el constructor de forma sincrona y los reactivos solo existen despues del submit.',
        en: 'Template-driven forms are created in the constructor synchronously and reactive forms exist only after submit.',
      },
    ],
    explanation: {
      es: 'Los reactivos se testean sin pintar la plantilla, por eso se usan cuando el formulario crece, y los dos admiten validacion asincrona. En plantilla, una regla propia es una directiva.',
      en: 'Reactive forms are tested without rendering the template, which is why they are used when the form grows, and both support async validation. In a template, a custom rule is a directive.',
    },
  },
  {
    id: 'fe-form2-02',
    topic: 'Validadores',
    prompt: {
      es: '¿Cómo se crea un validador propio?',
      en: 'How do you create a custom validator?',
    },
    answer: {
      es: 'Es una funcion que recibe el control y devuelve null si es valido, o un objeto de error si no lo es. La pasas en los validators al crear el control.',
      en: 'It is a function that receives the control and returns null when it is valid, or an error object when it is not. You pass it in the validators when you create the control.',
    },
    distractors: [
      {
        es: 'Se lanza una excepcion si el valor no vale. Angular convierte esa excepcion en el error del campo.',
        en: 'You throw if the value is bad. Angular turns that exception into the field error.',
      },
      {
        es: 'Se devuelve true o false. El objeto de error es solo para los validadores de Angular.',
        en: 'You return true or false. The error object is only for Angular built-in validators.',
      },
    ],
    explanation: {
      es: 'En la plantilla lees esa clave en control.errors. Si el validador tiene que mirar dos campos, ponlo en el grupo, no en un solo control.',
      en: 'In the template you read that key on control.errors. If the validator must look at two fields, put it on the group, not on a single control.',
    },
  },
  {
    id: 'fe-form2-03',
    topic: 'Controles propios',
    prompt: {
      es: '¿Qué es un ControlValueAccessor?',
      en: 'What is a ControlValueAccessor?',
    },
    answer: {
      es: 'Es el puente para que un componente propio funcione con formControlName o ngModel. El formulario le escribe el valor y el componente avisa cuando el usuario edita o sale del campo.',
      en: 'It is the bridge so a custom component works with formControlName or ngModel. The form writes the value in, and the component reports when the user edits or leaves the field.',
    },
    distractors: [
      {
        es: 'Es la interfaz de los validadores. Con validate y writeValue basta para un campo custom.',
        en: 'It is the validator interface. validate and writeValue are enough for a custom field.',
      },
      {
        es: 'Sirve para formatear el texto del input. No hace falta para enlazar un componente a un control.',
        en: 'It formats the input text. It is not needed to bind a component to a control.',
      },
    ],
    explanation: {
      es: 'No valida: solo traduce entre el control y la UI. La validacion va aparte, con un validador o con NG_VALIDATORS.',
      en: 'It does not validate: it only translates between the control and the UI. Validation is separate, with a validator or with NG_VALIDATORS.',
    },
  },
  {
    id: 'fe-form2-04',
    topic: 'Controles propios',
    prompt: {
      es: '¿Cómo se registra un componente como control de formulario?',
      en: 'How do you register a component as a form control?',
    },
    answer: {
      es: 'En providers, provees NG_VALUE_ACCESSOR con useExisting apuntando al propio componente, multi true y forwardRef. Implementar la interfaz no basta.',
      en: 'In providers, you provide NG_VALUE_ACCESSOR with useExisting pointing at the component itself, multi true and forwardRef. Implementing the interface is not enough.',
    },
    distractors: [
      {
        es: 'Basta con implementar los metodos. Angular detecta el accessor mirando la clase.',
        en: 'Implementing the methods is enough. Angular detects the accessor by looking at the class.',
      },
      {
        es: 'Se usa useClass y multi false, porque solo puede haber un accessor y tiene que ser otra instancia.',
        en: 'You use useClass and multi false, because there can be only one accessor and it must be another instance.',
      },
    ],
    explanation: {
      es: 'useExisting reutiliza la instancia del componente y useClass crearia otra. forwardRef hace falta porque la clase todavia se esta declarando.',
      en: 'useExisting reuses the component instance and useClass would create another one. forwardRef is required because the class is still being declared.',
    },
  },
  {
    id: 'fe-form2-05',
    topic: 'Validadores',
    prompt: {
      es: '¿Qué aporta que el componente provea NG_VALIDATORS?',
      en: 'What do you gain when the component provides NG_VALIDATORS?',
    },
    answer: {
      es: 'El componente trae su propia validacion a cualquier control que lo use, sin que el padre pase el validador. Se suma a los otros, no los sustituye.',
      en: 'The component brings its own validation to any control that uses it, without the parent passing the validator. It is added to the others, it does not replace them.',
    },
    distractors: [
      {
        es: 'Solo funciona con ngModel. En un formulario reactivo hay que pasar el validador al crear el control.',
        en: 'It only works with ngModel. In a reactive form you must pass the validator when creating the control.',
      },
      {
        es: 'Borra los validadores del padre y deja solo el del componente.',
        en: 'It deletes the parent validators and leaves only the component one.',
      },
    ],
    explanation: {
      es: 'Es el mismo estilo que el value accessor: token multi en providers. La validacion asincrona usa el token de async validators.',
      en: 'It is the same style as the value accessor: a multi token in providers. Async validation uses the async validators token.',
    },
  },
  {
    id: 'fe-form2-06',
    topic: 'FormArray',
    prompt: {
      es: '¿Cómo se agregan y quitan filas en un FormArray?',
      en: 'How do you add and remove rows in a FormArray?',
    },
    answer: {
      es: 'push anade un control y removeAt lo quita por indice. En la plantilla enlazas formArrayName y recorres controls, usando el indice en cada fila.',
      en: 'push adds a control and removeAt removes one by index. In the template you bind formArrayName and loop controls, using the index on each row.',
    },
    distractors: [
      {
        es: 'Se recorre value, porque cada elemento ya es un control enlazado.',
        en: 'You loop value, because each item is already a bound control.',
      },
      {
        es: 'Se reemplaza el array del padre con setValue y Angular crea los controles que falten.',
        en: 'You replace the parent array with setValue and Angular creates the missing controls.',
      },
    ],
    explanation: {
      es: 'value son datos, no controles, y si iteras value, formControlName no encuentra el control. removeAt reordena los indices de las filas que se quedan.',
      en: 'value is data, not controls, and if you iterate value, formControlName cannot find the control. removeAt reorders the indexes of the rows that stay.',
    },
  },
  {
    id: 'fe-form2-07',
    topic: 'Formularios tipados',
    prompt: {
      es: '¿Qué cambia nonNullable en un control tipado?',
      en: 'What does nonNullable change on a typed control?',
    },
    answer: {
      es: 'El valor deja de incluir null y reset vuelve al valor inicial, en lugar de poner null.',
      en: 'The value no longer includes null and reset goes back to the initial value, instead of setting null.',
    },
    distractors: [
      {
        es: 'Quita null del tipo, pero reset sigue poniendo null porque no mira esa opcion.',
        en: 'It removes null from the type, but reset still sets null because it ignores that option.',
      },
      {
        es: 'Impide que el usuario borre el campo. El control se queda disabled si llega un null.',
        en: 'It stops the user from clearing the field. The control becomes disabled if a null arrives.',
      },
    ],
    explanation: {
      es: 'Por defecto el control admite null precisamente porque reset lo usa. Puedes pedirlo en el FormBuilder nonNullable o control por control.',
      en: 'By default the control accepts null precisely because reset uses it. You can ask for it on the nonNullable FormBuilder or control by control.',
    },
  },
  {
    id: 'fe-form2-08',
    topic: 'Validadores',
    prompt: {
      es: '¿Cómo compruebas que password y confirm coinciden?',
      en: 'How do you check that password and confirm match?',
    },
    answer: {
      es: 'Con un validador en el grupo, que lee los dos controles y devuelve un objeto de error o null. El error queda en el grupo, no en un solo campo.',
      en: 'With a validator on the group, which reads both controls and returns an error object or null. The error lives on the group, not on a single field.',
    },
    distractors: [
      {
        es: 'Con un validador solo en confirm que lee al hermano. Se actualiza tambien cuando cambia password.',
        en: 'With a validator only on confirm that reads its sibling. It also updates when password changes.',
      },
      {
        es: 'Llamando a setErrors en confirm desde el template cada vez que el usuario escribe.',
        en: 'By calling setErrors on confirm from the template every time the user types.',
      },
    ],
    explanation: {
      es: 'El validador del grupo corre cuando cambia cualquier hijo, asi no se queda viejo si editas el primer campo despues. En la plantilla lees el error del formulario.',
      en: 'The group validator runs when any child changes, so it does not go stale if you edit the first field afterwards. In the template you read the error from the form.',
    },
  },
  {
    id: 'fe-form2-09',
    topic: 'updateOn',
    prompt: {
      es: '¿Qué hace updateOn con blur o submit?',
      en: 'What does updateOn do with blur or submit?',
    },
    answer: {
      es: 'El valor y la validez se actualizan al salir del campo o al enviar, no en cada tecla.',
      en: 'The value and the validity update when the field is left or when the form is submitted, not on every key.',
    },
    distractors: [
      {
        es: 'Solo retrasa el mensaje de error. valueChanges sigue emitiendo en cada tecla.',
        en: 'It only delays the error message. valueChanges still emits on every key.',
      },
      {
        es: 'Es un debounce interno. Angular descarta emisiones hasta que el usuario para de escribir.',
        en: 'It is an internal debounce. Angular drops emissions until the user stops typing.',
      },
    ],
    explanation: {
      es: 'No hay temporizador: el disparo es el blur o el submit. Mientras tanto control.value sigue siendo el anterior, y eso confunde si esperabas la tecla actual.',
      en: 'There is no timer: the trigger is blur or submit. Until then control.value is still the previous one, which is confusing if you expected the current key.',
    },
  },
  {
    id: 'fe-form2-10',
    topic: 'Observables',
    prompt: {
      es: '¿Qué diferencia hay entre valueChanges y statusChanges?',
      en: 'What is the difference between valueChanges and statusChanges?',
    },
    answer: {
      es: 'valueChanges emite el valor nuevo. statusChanges emite cuando cambia la validez, por ejemplo a VALID, INVALID o PENDING.',
      en: 'valueChanges emits the new value. statusChanges emits when validity changes, for example to VALID, INVALID or PENDING.',
    },
    distractors: [
      {
        es: 'statusChanges tambien emite cuando cambian touched o dirty, y sirve para mostrar errores.',
        en: 'statusChanges also emits when touched or dirty change, and it is what you use to show errors.',
      },
      {
        es: 'valueChanges emite antes de validar, asi que dentro de la suscripcion el control aun tiene el estado viejo.',
        en: 'valueChanges emits before validation, so inside the subscription the control still has the old state.',
      },
    ],
    explanation: {
      es: 'touched y dirty no pasan por statusChanges. Cuando escuchas valueChanges, la validacion sincrona de ese cambio ya corrio.',
      en: 'touched and dirty do not go through statusChanges. When you listen to valueChanges, the sync validation of that change has already run.',
    },
  },
  {
    id: 'fe-form2-11',
    topic: 'valueChanges',
    prompt: {
      es: '¿Cómo se corta el bucle si actualizas un control dentro de su propio valueChanges?',
      en: 'You update a control inside its own valueChanges and hit a loop. How do you stop it?',
    },
    answer: {
      es: 'Con setValue o patchValue y emitEvent false. El valor se escribe y no vuelve a emitir, asi no reentras en la suscripcion.',
      en: 'With setValue or patchValue and emitEvent false. The value is written and it does not emit again, so you do not re-enter the subscription.',
    },
    distractors: [
      {
        es: 'Con onlySelf true, que impide que el propio control emita valueChanges.',
        en: 'With onlySelf true, which stops the control itself from emitting valueChanges.',
      },
      {
        es: 'No se puede escribir un control desde su valueChanges. Hay que usar otro formulario.',
        en: 'You cannot write a control from its valueChanges. You need another form.',
      },
    ],
    explanation: {
      es: 'onlySelf limita lo que sube a los padres, no la emision de este control. Los validadores sí corren aunque emitEvent sea false.',
      en: 'onlySelf limits what bubbles to parents, not the emission of this control. Validators still run even if emitEvent is false.',
    },
  },
  {
    id: 'fe-form2-12',
    topic: 'Errores',
    prompt: {
      es: '¿Para qué llamas a markAllAsTouched al enviar?',
      en: 'Why do you call markAllAsTouched on submit?',
    },
    answer: {
      es: 'Para marcar el formulario y todos sus campos como touched. Asi los que el usuario no visito tambien muestran su error.',
      en: 'To mark the form and all of its fields as touched. Fields the user never visited then show their error too.',
    },
    distractors: [
      {
        es: 'Porque vuelve a ejecutar los validadores. Sin eso el formulario no sabe si es invalido.',
        en: 'Because it runs the validators again. Without that the form does not know if it is invalid.',
      },
      {
        es: 'Porque markAsTouched en el grupo ya baja a todos los hijos.',
        en: 'Because markAsTouched on the group already walks down to every child.',
      },
    ],
    explanation: {
      es: 'markAsTouched en el grupo no revela los hijos. Los errores ya existian: la plantilla los escondia mientras el campo no estaba touched.',
      en: 'markAsTouched on the group does not reveal the children. The errors were already there: the template hid them while the field was not touched.',
    },
  },
  {
    id: 'fe-form2-13',
    topic: 'reset',
    prompt: {
      es: '¿Qué hace reset en un formulario reactivo?',
      en: 'What does reset do on a reactive form?',
    },
    answer: {
      es: 'Sin argumentos deja los controles en null, o en el valor inicial si son nonNullable, y con un valor pone ese valor. En los dos casos el formulario vuelve a pristine y untouched.',
      en: 'With no arguments it sets controls to null, or to the initial value if they are nonNullable, and with a value it sets that value. In both cases the form goes back to pristine and untouched.',
    },
    distractors: [
      {
        es: 'Siempre restaura los valores con los que se creo el formulario, aunque no sea nonNullable.',
        en: 'It always restores the values the form was created with, even if it is not nonNullable.',
      },
      {
        es: 'Solo borra el valor. Hay que llamar a markAsPristine y markAsUntouched aparte.',
        en: 'It only clears the value. You must call markAsPristine and markAsUntouched separately.',
      },
    ],
    explanation: {
      es: 'setValue no limpia dirty. Si quieres conservar el valor y solo quitar el estado de edicion, usa markAsPristine y markAsUntouched.',
      en: 'setValue does not clear dirty. If you want to keep the value and only clear the edited state, use markAsPristine and markAsUntouched.',
    },
  },
  {
    id: 'fe-form2-14',
    topic: 'Grupos anidados',
    prompt: {
      es: '¿Cómo llegas a un control dentro de un grupo anidado?',
      en: 'How do you reach a control inside a nested group?',
    },
    answer: {
      es: 'Con get y la ruta, en un string con puntos o en un array de tramos. Si la ruta no existe, devuelve null.',
      en: 'With get and the path, as a dotted string or as an array of segments. If the path does not exist, it returns null.',
    },
    distractors: [
      {
        es: 'Con controls y la ruta entera como clave, porque el mapa indexa los caminos con punto.',
        en: 'With controls and the whole path as the key, because the map indexes dotted paths.',
      },
      {
        es: 'get solo acepta un hijo directo. Para bajar más hay que usar value.',
        en: 'get only accepts a direct child. To go deeper you must use value.',
      },
    ],
    explanation: {
      es: 'controls tiene solo los hijos directos. En un formulario tipado, bajar por controls conserva el tipo mejor que get, que devuelve un control generico o null.',
      en: 'controls holds only the direct children. On a typed form, walking controls keeps the type better than get, which returns a generic control or null.',
    },
  },
  {
    id: 'fe-form2-15',
    topic: 'Disabled',
    prompt: {
      es: '¿Cómo se deshabilita un control en un formulario reactivo?',
      en: 'How do you disable a control in a reactive form?',
    },
    answer: {
      es: 'Con disable y enable en la clase. No enlaces el atributo disabled en la plantilla junto a formControlName: Angular avisa porque el estado vive en el control.',
      en: 'With disable and enable in the class. Do not bind the disabled attribute in the template together with formControlName: Angular warns because the state lives on the control.',
    },
    distractors: [
      {
        es: 'Con el atributo disabled en el HTML. La directiva reactiva copia ese atributo al control sin avisar.',
        en: 'With the disabled attribute in the HTML. The reactive directive copies that attribute onto the control with no warning.',
      },
      {
        es: 'No se puede cambiar despues de crear el control. disabled solo existe en el valor inicial.',
        en: 'You cannot change it after the control is created. disabled exists only on the initial value.',
      },
    ],
    explanation: {
      es: 'Un control disabled no entra en form.value ni en la validacion, asi que para leerlo usa getRawValue. El objeto value y disabled del constructor solo fija el estado inicial.',
      en: 'A disabled control is left out of form.value and of validation, so to read it use getRawValue. The value and disabled object in the constructor only sets the initial state.',
    },
  },
  {
    id: 'fe-form2-16',
    topic: 'ngModel',
    prompt: {
      es: '¿Por qué no se mezcla ngModel con formControlName en el mismo campo?',
      en: 'Why do you not mix ngModel with formControlName on the same field?',
    },
    answer: {
      es: 'Porque habria dos duenos del valor. Angular avisa: quedate con la API reactiva y lee el control.',
      en: 'Because there would be two owners of the value. Angular warns: stay with the reactive API and read the control.',
    },
    distractors: [
      {
        es: 'Porque hace falta para el two-way binding. Sin ngModel, formControlName no escribe en la clase.',
        en: 'Because it is required for two-way binding. Without ngModel, formControlName does not write into the class.',
      },
      {
        es: 'Es valido y recomendado. ngModel solo pinta el valor y el control solo valida.',
        en: 'It is valid and recommended. ngModel only paints the value and the control only validates.',
      },
    ],
    explanation: {
      es: 'El aviso no siempre tira la app, pero los dos escriben el campo y el valor se desfasa. Elige un estilo por formulario.',
      en: 'The warning does not always crash the app, but both write the field and the value drifts. Pick one style per form.',
    },
  },
  {
    id: 'fe-form2-17',
    topic: 'Errores',
    prompt: {
      es: '¿Cuándo muestras el error de un campo?',
      en: 'When do you show a field error?',
    },
    answer: {
      es: 'Cuando el control es invalido y ademas esta touched o dirty. Al enviar, markAllAsTouched para destapar los que nadie visito.',
      en: 'When the control is invalid and it is also touched or dirty. On submit, markAllAsTouched to reveal the ones nobody visited.',
    },
    distractors: [
      {
        es: 'Siempre que sea invalido, desde que se abre el formulario, para que no haya sorpresas al final.',
        en: 'Whenever it is invalid, from the moment the form opens, so there are no surprises at the end.',
      },
      {
        es: 'Solo si FormGroup.submitted es true. Angular pone ese flag en el modelo al hacer submit.',
        en: 'Only if FormGroup.submitted is true. Angular sets that flag on the model on submit.',
      },
    ],
    explanation: {
      es: 'Mostrarlo desde el principio pinta el formulario en rojo antes de escribir. submitted no esta en el FormGroup: esta en la directiva del formulario.',
      en: 'Showing it from the start paints the form red before anyone types. submitted is not on the FormGroup: it is on the form directive.',
    },
  },
  {
    id: 'fe-form2-18',
    topic: 'Validadores',
    prompt: {
      es: '¿Cómo separas las llamadas de un validador asíncrono y qué pasa mientras está PENDING?',
      en: 'How do you space out async validator calls and what happens while the control is PENDING?',
    },
    answer: {
      es: 'Retrasas y cancelas dentro del validador, por ejemplo con un timer y switchMap. Mientras esta PENDING no lo trates como invalido: el envio no deberia habilitarse solo con mirar invalid.',
      en: 'You delay and cancel inside the validator, for example with a timer and switchMap. While it is PENDING do not treat it as invalid: submit should not be enabled only by looking at invalid.',
    },
    distractors: [
      {
        es: 'La unica forma es updateOn blur, porque un validador asincrono no puede usar operadores de tiempo.',
        en: 'The only way is updateOn blur, because an async validator cannot use time operators.',
      },
      {
        es: 'PENDING pone el formulario invalid, asi que el boton ya queda deshabilitado sin hacer nada.',
        en: 'PENDING sets the form invalid, so the button is already disabled with nothing else to do.',
      },
    ],
    explanation: {
      es: 'El observable tiene que completar, y PENDING no es INVALID: valid e invalid pueden ser false a la vez. Los validadores asincronos corren solo si los sincronos pasan.',
      en: 'The observable has to complete, and PENDING is not INVALID: valid and invalid can both be false. Async validators run only if the sync ones pass.',
    },
  },
  {
    id: 'fe-form2-19',
    topic: 'Cambios sin guardar',
    prompt: {
      es: '¿Cómo avisas de cambios sin guardar al salir de un formulario?',
      en: 'How do you warn about unsaved changes when leaving a form?',
    },
    answer: {
      es: 'El componente expone form.dirty y un guard canDeactivate pregunta si es true. Despues de guardar, markAsPristine o reset para que el guard deje pasar.',
      en: 'The component exposes form.dirty and a canDeactivate guard asks when it is true. After a save, markAsPristine or reset so the guard lets the user leave.',
    },
    distractors: [
      {
        es: 'Basta con form.touched, porque significa que hay cambios pendientes.',
        en: 'form.touched is enough, because it means there are pending changes.',
      },
      {
        es: 'El guard lee el FormGroup desde la URL. El componente no puede exponer el formulario.',
        en: 'The guard reads the FormGroup from the URL. The component cannot expose the form.',
      },
    ],
    explanation: {
      es: 'dirty cambia cuando el valor cambia desde la vista, y touched se marca en el blur aunque no se haya escrito. Recargar o cerrar la pestana no pasa por el guard: eso es beforeunload.',
      en: 'dirty changes when the value changes from the view, and touched is set on blur even if nothing was typed. Reload or closing the tab does not go through the guard: that is beforeunload.',
    },
  },
  {
    id: 'fe-form2-20',
    topic: 'Rendimiento',
    prompt: {
      es: '¿Qué miras primero si un formulario grande va lento al escribir?',
      en: 'A large form lags while typing. What do you look at first?',
    },
    answer: {
      es: 'OnPush en la pantalla, updateOn blur para no validar en cada tecla, y pocas suscripciones: una al valueChanges del grupo, no una por control.',
      en: 'OnPush on the screen, updateOn blur so you do not validate on every key, and few subscriptions: one on the group valueChanges, not one per control.',
    },
    distractors: [
      {
        es: 'Solo OnPush. Con eso los controles dejan de marcar la vista hasta el submit.',
        en: 'OnPush alone. With that, controls stop marking the view until submit.',
      },
      {
        es: 'Una suscripcion por control, porque la del grupo reconstruye todo el objeto y es más cara.',
        en: 'One subscription per control, because the group one rebuilds the whole object and is more expensive.',
      },
    ],
    explanation: {
      es: 'El coste esta en la deteccion, en los validadores y en las suscripciones. En un FormArray, track evita recrear las filas al anadir o quitar.',
      en: 'The cost sits in detection, in validators and in subscriptions. On a FormArray, track avoids recreating rows when you add or remove.',
    },
  },
];
