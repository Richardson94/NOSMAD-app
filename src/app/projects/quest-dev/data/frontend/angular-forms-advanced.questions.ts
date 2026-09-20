import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_FORMS_ADVANCED_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-form2-01',
    topic: 'Formularios avanzados',
    prompt: {
      es: '¿Para qué sirve ControlValueAccessor y qué hacen sus cuatro métodos?',
      en: 'What is ControlValueAccessor for and what do its four methods do?',
    },
    answer: {
      es: 'Es el puente entre un componente propio y el control de Angular: writeValue recibe el valor del modelo, registerOnChange y registerOnTouched guardan los callbacks para avisar de cambios y de blur, y setDisabledState refleja el estado deshabilitado.',
      en: 'It is the bridge between a custom component and the Angular control: writeValue receives the model value, registerOnChange and registerOnTouched store the callbacks used to report changes and blur, and setDisabledState reflects the disabled state.',
    },
    distractors: [
      {
        es: 'Es la interfaz que permite validar el valor antes de escribirlo en el control, con los métodos validate y registerOnValidatorChange además de writeValue.',
        en: 'It is the interface that validates the value before writing it into the control, with the validate and registerOnValidatorChange methods on top of writeValue.',
      },
      {
        es: 'Es el mecanismo de formateo que convierte el valor entre la vista y el modelo mediante parsers y formatters registrados en el control.',
        en: 'It is the formatting mechanism that converts the value between view and model through parsers and formatters registered on the control.',
      },
    ],
    explanation: {
      es: 'ControlValueAccessor no valida ni formatea: solo traduce entre el modelo del control y la interfaz del componente, por eso implementa esos cuatro métodos. Los métodos validate y registerOnValidatorChange pertenecen a la interfaz Validator, que es otra API; y los parsers y formatters eran de AngularJS, en Angular se resuelve dentro de writeValue y del callback onChange. setDisabledState solo se invoca si el estado se cambia con disable() desde la API reactiva.',
      en: 'ControlValueAccessor does not validate or format: it only translates between the control model and the component UI, which is why it implements those four methods. The validate and registerOnValidatorChange methods belong to the Validator interface, a different API; and parsers and formatters came from AngularJS, while Angular handles that inside writeValue and the onChange callback. setDisabledState is only called when the state changes through disable() from the reactive API.',
    },
  },
  {
    id: 'fe-form2-02',
    topic: 'Formularios avanzados',
    prompt: {
      es: '¿Cómo se registra NG_VALUE_ACCESSOR en un componente de formulario propio?',
      en: 'How do you register NG_VALUE_ACCESSOR in a custom form component?',
    },
    answer: {
      es: 'En el arreglo providers del componente, con { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MiComponente), multi: true }.',
      en: 'In the component providers array, with { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MyComponent), multi: true }.',
    },
    distractors: [
      {
        es: 'Basta con implementar la interfaz ControlValueAccessor, porque Angular detecta el accessor al analizar los métodos de la clase del componente.',
        en: 'Implementing the ControlValueAccessor interface is enough, because Angular detects the accessor by inspecting the methods of the component class.',
      },
      {
        es: 'En providers con { provide: NG_VALUE_ACCESSOR, useClass: MiComponente, multi: false }, ya que solo puede existir un accessor por control.',
        en: 'In providers with { provide: NG_VALUE_ACCESSOR, useClass: MyComponent, multi: false }, since there can only be one accessor per control.',
      },
    ],
    explanation: {
      es: 'El token se resuelve por inyección, no por la forma de la clase: sin el provider Angular lanza el error "No value accessor for form control with name". forwardRef es obligatorio porque la clase todavía no está definida cuando se evalúan los metadatos del decorador, y multi debe ser true porque NG_VALUE_ACCESSOR es un token multiproveedor. useExisting es la opción correcta para reutilizar la misma instancia del componente en vez de crear una nueva con useClass.',
      en: 'The token is resolved through injection, not by class shape: without the provider Angular throws the error "No value accessor for form control with name". forwardRef is mandatory because the class is not defined yet when the decorator metadata is evaluated, and multi must be true because NG_VALUE_ACCESSOR is a multi provider token. useExisting is the right choice to reuse the same component instance instead of creating a new one with useClass.',
    },
  },
  {
    id: 'fe-form2-03',
    topic: 'Formularios avanzados',
    prompt: {
      es: '¿Qué cambia si el componente provee NG_VALIDATORS en lugar de pasar el validador al control desde el padre?',
      en: 'What changes if the component provides NG_VALIDATORS instead of passing the validator to the control from the parent?',
    },
    answer: {
      es: 'El componente aporta su propia validación a cualquier control que lo use, sin que el formulario padre la configure, implementando validate y registrando el token con multi true.',
      en: 'The component contributes its own validation to any control that uses it, without the parent form configuring anything, by implementing validate and registering the token with multi true.',
    },
    distractors: [
      {
        es: 'NG_VALIDATORS solo tiene efecto en formularios dirigidos por plantilla; en los reactivos hay que pasar siempre el validador al crear el control.',
        en: 'NG_VALIDATORS only works in template driven forms; in reactive forms you must always pass the validator when creating the control.',
      },
      {
        es: 'NG_VALIDATORS reemplaza los validadores que el padre haya pasado al control, porque el validador del componente tiene prioridad sobre los del modelo.',
        en: 'NG_VALIDATORS replaces the validators the parent passed to the control, because the component validator takes precedence over the model ones.',
      },
    ],
    explanation: {
      es: 'Proveer NG_VALIDATORS encapsula la regla dentro del componente y funciona igual con formControlName que con ngModel, porque Angular compone todos los validadores registrados en el token con los del modelo en lugar de sustituirlos. Para validación asíncrona el token equivalente es NG_ASYNC_VALIDATORS, y si la regla depende de una entrada que cambia conviene implementar registerOnValidatorChange para pedir una revalidación.',
      en: 'Providing NG_VALIDATORS encapsulates the rule inside the component and works the same with formControlName as with ngModel, because Angular composes every validator registered on the token with the model ones instead of replacing them. For async validation the equivalent token is NG_ASYNC_VALIDATORS, and if the rule depends on an input that changes you should implement registerOnValidatorChange to request revalidation.',
    },
  },
  {
    id: 'fe-form2-04',
    topic: 'Formularios avanzados',
    prompt: {
      es: '¿Cómo se agregan y quitan controles de un FormArray y cómo se recorre en la plantilla?',
      en: 'How do you add and remove controls in a FormArray and how do you iterate it in the template?',
    },
    answer: {
      es: 'Con push y removeAt sobre el FormArray, y en la plantilla se enlaza formArrayName y se itera sobre la propiedad controls usando el índice como formGroupName o formControlName.',
      en: 'With push and removeAt on the FormArray, and in the template you bind formArrayName and iterate over the controls property using the index as formGroupName or formControlName.',
    },
    distractors: [
      {
        es: 'Con push y removeAt sobre el FormArray, y en la plantilla se itera sobre la propiedad value del arreglo, que expone cada elemento ya enlazado al control.',
        en: 'With push and removeAt on the FormArray, and in the template you iterate over the value property of the array, which exposes each item already bound to its control.',
      },
      {
        es: 'Reasignando el arreglo completo con setValue sobre el FormGroup padre y recorriendo los elementos con formGroupName y una función trackBy.',
        en: 'By reassigning the whole array with setValue on the parent FormGroup and iterating the items with formGroupName and a trackBy function.',
      },
    ],
    explanation: {
      es: 'La plantilla necesita instancias de AbstractControl, y value devuelve datos planos, por eso iterar sobre value rompe el enlace y produce el error de que formControlName no encuentra un control. setValue exige el objeto completo y falla si el número de elementos no coincide, además de no crear ni destruir controles. Conviene exponer un getter tipado como FormArray desde la clase porque las plantillas no admiten conversiones de tipo, y recordar que removeAt renumera los índices siguientes.',
      en: 'The template needs AbstractControl instances and value returns plain data, so iterating over value breaks the binding and produces the error that formControlName cannot find a control. setValue requires the complete object and fails when the number of items does not match, and it neither creates nor destroys controls. It is better to expose a getter typed as FormArray from the class because templates do not allow type casts, and to remember that removeAt renumbers the following indexes.',
    },
  },
  {
    id: 'fe-form2-05',
    topic: 'Formularios avanzados',
    prompt: {
      es: 'En formularios tipados, ¿qué aporta NonNullableFormBuilder al tipo del control?',
      en: 'In typed forms, what does NonNullableFormBuilder add to the control type?',
    },
    answer: {
      es: 'Crea los controles con nonNullable en true, de modo que el tipo es string en lugar de string | null y reset devuelve el valor inicial en vez de null.',
      en: 'It creates controls with nonNullable set to true, so the type is string instead of string | null and reset restores the initial value instead of null.',
    },
    distractors: [
      {
        es: 'Hace que el valor nunca sea null en el tipo, pero reset sigue poniendo los controles a null porque ese comportamiento no depende del builder.',
        en: 'It makes the value never null in the type, but reset still sets the controls to null because that behavior does not depend on the builder.',
      },
      {
        es: 'Elimina null del tipo cuando se declara la interfaz del modelo en el genérico FormGroup, sin necesidad de configurar cada control por separado.',
        en: 'It removes null from the type when the model interface is declared in the FormGroup generic, without configuring each control separately.',
      },
    ],
    explanation: {
      es: 'Los formularios tipados llegaron en Angular 14 y, por defecto, cada FormControl admite null justamente porque reset lo usa; nonNullable cambia las dos cosas a la vez, el tipo y el comportamiento de reset. Se puede obtener con fb.nonNullable.group(...) o inyectando NonNullableFormBuilder, y es equivalente a pasar { nonNullable: true } control por control. Declarar la interfaz en el genérico no basta, porque el genérico describe el valor pero no altera la semántica de reset.',
      en: 'Typed forms arrived in Angular 14 and by default every FormControl accepts null precisely because reset uses it; nonNullable changes both things at once, the type and the reset behavior. You get it with fb.nonNullable.group(...) or by injecting NonNullableFormBuilder, and it is equivalent to passing { nonNullable: true } control by control. Declaring the interface in the generic is not enough, because the generic describes the value but does not change reset semantics.',
    },
  },
  {
    id: 'fe-form2-06',
    topic: 'Formularios avanzados',
    prompt: {
      es: 'Con FormBuilder, ¿cuál es la forma correcta de pasar un validador que aplica a todo el grupo?',
      en: 'With FormBuilder, what is the correct way to pass a validator that applies to the whole group?',
    },
    answer: {
      es: 'En el segundo argumento de fb.group como objeto de opciones AbstractControlOptions, por ejemplo { validators: [coincidirPasswords] }.',
      en: 'In the second argument of fb.group as an AbstractControlOptions object, for example { validators: [passwordsMatch] }.',
    },
    distractors: [
      {
        es: 'En el segundo argumento pero como arreglo suelto, fb.group({ ... }, [coincidirPasswords]), igual que se hace al crear un control individual.',
        en: 'In the second argument but as a bare array, fb.group({ ... }, [passwordsMatch]), just like when creating an individual control.',
      },
      {
        es: 'En el tercer argumento de fb.group, que es la posición reservada para los validadores del grupo frente a la de los validadores de cada control.',
        en: 'In the third argument of fb.group, the position reserved for group validators as opposed to the per control validators.',
      },
    ],
    explanation: {
      es: 'La firma moderna de fb.group recibe los controles y un objeto AbstractControlOptions con validators, asyncValidators y updateOn, que además permite fijar la estrategia de actualización de todo el grupo en la misma llamada. La forma con arreglo suelto es la firma heredada, marcada como obsoleta por ambigua y no soportada por los formularios tipados de Angular 14. fb.group no tiene un tercer argumento: pasarlo ahí simplemente no aplica el validador y el grupo nunca queda inválido.',
      en: 'The modern fb.group signature takes the controls plus an AbstractControlOptions object with validators, asyncValidators and updateOn, which also lets you set the update strategy for the whole group in the same call. The bare array form is the legacy signature, marked deprecated for being ambiguous and not supported by the typed forms of Angular 14. fb.group has no third argument: passing it there simply does not apply the validator and the group never becomes invalid.',
    },
  },
  {
    id: 'fe-form2-07',
    topic: 'Formularios avanzados',
    prompt: {
      es: '¿Cómo se escribe un validador de grupo que compruebe que password y confirmar coinciden?',
      en: 'How do you write a group validator that checks that password and confirm match?',
    },
    answer: {
      es: 'Como una función que recibe el AbstractControl del grupo, lee ambos controles con get y devuelve un objeto de error, por ejemplo { noCoinciden: true }, o null.',
      en: 'As a function that receives the group AbstractControl, reads both controls with get and returns an error object such as { notMatching: true }, or null.',
    },
    distractors: [
      {
        es: 'Como un validador puesto en el control de confirmación que compara su valor con control.parent.get("password").value y devuelve el error en ese control.',
        en: 'As a validator placed on the confirm control that compares its value with control.parent.get("password").value and returns the error on that control.',
      },
      {
        es: 'Como un validador de grupo que llama a setErrors sobre el control de confirmación para que el mensaje salga bajo ese campo y devuelve null en el grupo.',
        en: 'As a group validator that calls setErrors on the confirm control so the message appears under that field and returns null on the group.',
      },
    ],
    explanation: {
      es: 'El validador de grupo se ejecuta cada vez que cambia cualquier hijo, por eso detecta el caso de editar el primer campo después del segundo; el error vive en group.errors y la plantilla debe leerlo desde el formulario, no desde el control. El validador en el hijo tienta porque el mensaje queda junto al campo, pero solo se reevalúa cuando cambia ese control, así que se queda desactualizado al modificar password. Llamar a setErrors desde fuera es frágil porque sobrescribe los demás errores del control y el siguiente updateValueAndValidity los borra.',
      en: 'The group validator runs whenever any child changes, which is why it catches the case of editing the first field after the second; the error lives in group.errors and the template must read it from the form, not from the control. The child validator is tempting because the message stays next to the field, but it is only re-evaluated when that control changes, so it goes stale when password is edited. Calling setErrors from outside is fragile because it overwrites the other errors on the control and the next updateValueAndValidity wipes them.',
    },
  },
  {
    id: 'fe-form2-08',
    topic: 'Formularios avanzados',
    prompt: {
      es: '¿Qué efecto tiene configurar updateOn con el valor blur o submit?',
      en: 'What is the effect of configuring updateOn with the value blur or submit?',
    },
    answer: {
      es: 'El valor y la validez del control se actualizan solo al perder el foco o al enviar el formulario, en lugar de en cada pulsación de tecla.',
      en: 'The control value and validity are updated only on blur or on form submit, instead of on every keystroke.',
    },
    distractors: [
      {
        es: 'Solo retrasa la validación y la aparición de los errores; el valor del control y valueChanges se siguen actualizando en cada pulsación de tecla.',
        en: 'It only delays validation and the appearance of errors; the control value and valueChanges keep updating on every keystroke.',
      },
      {
        es: 'Equivale a aplicar un debounceTime interno sobre valueChanges, de modo que Angular descarta las emisiones intermedias mientras el usuario escribe.',
        en: 'It is equivalent to an internal debounceTime over valueChanges, so Angular drops the intermediate emissions while the user types.',
      },
    ],
    explanation: {
      es: 'updateOn afecta al valor y al estado a la vez: con blur, control.value conserva el valor anterior mientras el usuario escribe y valueChanges no emite hasta el blur, lo que es una fuente habitual de confusión al depurar. No es un debounce porque no hay temporizador: el disparador es un evento concreto del DOM o el ngSubmit del formulario. Se puede fijar por control o en las opciones del grupo, y los hijos heredan la estrategia del padre salvo que definan la suya.',
      en: 'updateOn affects value and state together: with blur, control.value keeps the previous value while the user types and valueChanges does not emit until blur, which is a common source of confusion when debugging. It is not a debounce because there is no timer: the trigger is a specific DOM event or the form ngSubmit. It can be set per control or in the group options, and children inherit the strategy from the parent unless they define their own.',
    },
  },
  {
    id: 'fe-form2-09',
    topic: 'Formularios avanzados',
    prompt: {
      es: '¿Qué diferencia hay entre valueChanges y statusChanges en un AbstractControl?',
      en: 'What is the difference between valueChanges and statusChanges on an AbstractControl?',
    },
    answer: {
      es: 'valueChanges emite el nuevo valor cuando cambia el contenido del control, y statusChanges emite VALID, INVALID, PENDING o DISABLED cuando cambia el estado de validez.',
      en: 'valueChanges emits the new value when the control content changes, and statusChanges emits VALID, INVALID, PENDING or DISABLED when the validity state changes.',
    },
    distractors: [
      {
        es: 'statusChanges emite también cuando cambian touched o dirty, por eso es el observable indicado para decidir cuándo mostrar los mensajes de error.',
        en: 'statusChanges also emits when touched or dirty change, which makes it the right observable to decide when to show error messages.',
      },
      {
        es: 'valueChanges emite antes de ejecutar los validadores, así que dentro de la suscripción control.valid todavía refleja el estado anterior del control.',
        en: 'valueChanges emits before the validators run, so inside the subscription control.valid still reflects the previous state of the control.',
      },
    ],
    explanation: {
      es: 'updateValueAndValidity fija primero el valor, después ejecuta los validadores y solo entonces emite en ambos streams, por eso dentro de la suscripción a valueChanges el estado ya está recalculado (salvo que un validador asíncrono deje el control en PENDING). Los cambios de touched y dirty no emiten en statusChanges, que solo refleja la validez; hasta Angular 18 no hubo un stream unificado, cuando se añadió control.events con eventos como TouchedChangeEvent y PristineChangeEvent.',
      en: 'updateValueAndValidity sets the value first, then runs the validators and only afterwards emits on both streams, so inside a valueChanges subscription the state is already recomputed (unless an async validator leaves the control in PENDING). Changes to touched and dirty do not emit on statusChanges, which only reflects validity; there was no unified stream until Angular 18, when control.events was added with events such as TouchedChangeEvent and PristineChangeEvent.',
    },
  },
  {
    id: 'fe-form2-10',
    topic: 'Formularios avanzados',
    prompt: {
      es: 'Actualizas un control desde la suscripción a su propio valueChanges y se produce un bucle infinito. ¿Cuál es la solución idiomática?',
      en: 'You update a control from inside its own valueChanges subscription and get an infinite loop. What is the idiomatic fix?',
    },
    answer: {
      es: 'Llamar a setValue o patchValue con { emitEvent: false }, que actualiza el control sin emitir valueChanges ni statusChanges y evita reentrar en la suscripción.',
      en: 'Calling setValue or patchValue with { emitEvent: false }, which updates the control without emitting valueChanges or statusChanges and avoids re-entering the subscription.',
    },
    distractors: [
      {
        es: 'Pasar { onlySelf: true }, que impide que el cambio se propague y por tanto que el formulario vuelva a notificar al control que lo originó.',
        en: 'Passing { onlySelf: true }, which prevents the change from propagating and therefore stops the form from notifying back the control that originated it.',
      },
      {
        es: 'Encadenar distinctUntilChanged en el pipe de valueChanges, porque así Angular deja de reemitir cuando el valor asignado es igual al anterior.',
        en: 'Chaining distinctUntilChanged in the valueChanges pipe, because then Angular stops re-emitting when the assigned value equals the previous one.',
      },
    ],
    explanation: {
      es: 'emitEvent en false es la única opción que silencia la emisión: el valor se escribe y los validadores se ejecutan, pero los observables no notifican, con lo que se corta la recursión. onlySelf limita la propagación hacia los ancestros, no la emisión del propio control, así que el bucle sigue. distinctUntilChanged ayuda en casos simples pero compara por referencia, de modo que con valores de objeto o de FormGroup cada actualización parece distinta y el bucle se mantiene.',
      en: 'emitEvent set to false is the only option that silences emission: the value is written and validators run, but the observables do not notify, which breaks the recursion. onlySelf limits propagation towards the ancestors, not the emission of the control itself, so the loop continues. distinctUntilChanged helps in simple cases but compares by reference, so with object or FormGroup values every update looks different and the loop persists.',
    },
  },
  {
    id: 'fe-form2-11',
    topic: 'Formularios avanzados',
    prompt: {
      es: '¿Qué hace markAllAsTouched y por qué se llama al enviar el formulario?',
      en: 'What does markAllAsTouched do and why is it called on submit?',
    },
    answer: {
      es: 'Marca como touched el control y todos sus descendientes, de modo que los campos que el usuario nunca visitó muestran sus mensajes de error al pulsar enviar.',
      en: 'It marks the control and all of its descendants as touched, so the fields the user never visited display their error messages when submit is pressed.',
    },
    distractors: [
      {
        es: 'Equivale a llamar markAsTouched({ onlySelf: false }) en el grupo, que es la forma de propagar el estado touched a todos los controles hijos.',
        en: 'It is equivalent to calling markAsTouched({ onlySelf: false }) on the group, which is the way to propagate the touched state to every child control.',
      },
      {
        es: 'Marca los controles como touched y dirty y vuelve a ejecutar los validadores, por eso después de llamarlo el formulario ya refleja todos los errores.',
        en: 'It marks the controls as touched and dirty and re-runs the validators, which is why after calling it the form finally reflects every error.',
      },
    ],
    explanation: {
      es: 'markAllAsTouched recorre el árbol hacia abajo, que es justo lo que hace falta cuando la plantilla condiciona el mensaje a control.touched && control.invalid. onlySelf en false propaga hacia arriba, hacia los ancestros, nunca hacia los hijos, por eso markAsTouched en el grupo no revela nada. Tampoco toca dirty ni relanza la validación: los validadores ya se ejecutaron al crear y actualizar los controles, así que los errores existían aunque no se mostraran.',
      en: 'markAllAsTouched walks the tree downwards, which is exactly what is needed when the template gates the message on control.touched && control.invalid. Setting onlySelf to false propagates upwards, towards the ancestors, never towards the children, so markAsTouched on the group reveals nothing. It also does not touch dirty nor re-run validation: validators already ran when the controls were created and updated, so the errors existed even though they were hidden.',
    },
  },
  {
    id: 'fe-form2-12',
    topic: 'Formularios avanzados',
    prompt: {
      es: '¿Qué diferencia hay entre reset() sin argumentos y reset(valor), y cómo queda el estado pristine?',
      en: 'What is the difference between reset() with no arguments and reset(value), and what happens to the pristine state?',
    },
    answer: {
      es: 'reset() deja cada control en null, salvo los nonNullable que vuelven a su valor inicial, y reset(valor) fija el valor indicado; en ambos casos el formulario vuelve a pristine y untouched.',
      en: 'reset() leaves every control at null, except nonNullable ones which go back to their initial value, and reset(value) sets the given value; in both cases the form returns to pristine and untouched.',
    },
    distractors: [
      {
        es: 'reset() devuelve los controles a los valores con los que se creó el formulario, y reset(valor) permite sobrescribir esos valores iniciales por otros.',
        en: 'reset() returns the controls to the values the form was created with, and reset(value) lets you override those initial values with different ones.',
      },
      {
        es: 'reset() limpia únicamente el valor, así que para volver a pristine y untouched hay que llamar además a markAsPristine y markAsUntouched.',
        en: 'reset() only clears the value, so to go back to pristine and untouched you must additionally call markAsPristine and markAsUntouched.',
      },
    ],
    explanation: {
      es: 'La confusión más común es creer que reset recuerda el valor inicial: solo lo hace si el control se creó con { nonNullable: true } o mediante NonNullableFormBuilder, opción disponible desde Angular 14 (antes se llamaba initialValueIsDefault). Lo que sí garantiza reset es restaurar los estados de interacción, algo que setValue no hace: tras un setValue el formulario sigue dirty si el usuario ya había escrito. Para conservar el valor y limpiar solo el estado se usa markAsPristine junto con markAsUntouched.',
      en: 'The most common confusion is believing that reset remembers the initial value: it only does so if the control was created with { nonNullable: true } or through NonNullableFormBuilder, an option available since Angular 14 (previously called initialValueIsDefault). What reset does guarantee is restoring the interaction states, something setValue does not do: after a setValue the form stays dirty if the user had already typed. To keep the value and clear only the state you use markAsPristine together with markAsUntouched.',
    },
  },
  {
    id: 'fe-form2-13',
    topic: 'Formularios avanzados',
    prompt: {
      es: 'Con grupos anidados, ¿cómo se accede al control que está en la ruta datos.direccion?',
      en: 'With nested groups, how do you access the control located at the path datos.direccion?',
    },
    answer: {
      es: 'Con form.get("datos.direccion") o form.get(["datos", "direccion"]), que navegan por los grupos anidados y devuelven null si la ruta no existe.',
      en: 'With form.get("datos.direccion") or form.get(["datos", "direccion"]), which walk the nested groups and return null if the path does not exist.',
    },
    distractors: [
      {
        es: 'Con form.controls["datos.direccion"], porque el mapa de controles indexa las rutas completas usando el punto como separador de niveles.',
        en: 'With form.controls["datos.direccion"], because the controls map indexes full paths using the dot as a level separator.',
      },
      {
        es: 'Encadenando form.controls.datos.get("direccion"), ya que get solo acepta el nombre de un hijo directo y no resuelve rutas de varios niveles.',
        en: 'By chaining form.controls.datos.get("direccion"), since get only accepts the name of a direct child and does not resolve multi level paths.',
      },
    ],
    explanation: {
      es: 'get acepta tanto una cadena con puntos como un arreglo de segmentos y recorre cualquier profundidad, incluidos los índices numéricos de un FormArray, por ejemplo "lineas.0.cantidad". El mapa controls solo contiene los hijos directos, así que la clave con punto devuelve undefined y el fallo aparece en tiempo de ejecución. El encadenamiento funciona pero es innecesario; en formularios tipados es preferible form.controls.datos.controls.direccion, porque get devuelve AbstractControl | null y pierde el tipo concreto.',
      en: 'get accepts both a dotted string and an array of segments and walks any depth, including the numeric indexes of a FormArray, for example "lines.0.quantity". The controls map only contains direct children, so the dotted key returns undefined and the failure shows up at runtime. Chaining works but is unnecessary; in typed forms it is better to use form.controls.datos.controls.direccion, because get returns AbstractControl | null and loses the concrete type.',
    },
  },
  {
    id: 'fe-form2-14',
    topic: 'Formularios avanzados',
    prompt: {
      es: '¿Cómo se deshabilita un control dinámicamente en formularios reactivos y por qué aparece una advertencia en consola?',
      en: 'How do you disable a control dynamically in reactive forms and why does a console warning appear?',
    },
    answer: {
      es: 'Llamando a control.disable() y control.enable() desde la clase; usar el atributo disabled en la plantilla junto a formControlName provoca la advertencia de que se mezcla la API reactiva con un atributo del DOM.',
      en: 'By calling control.disable() and control.enable() from the class; using the disabled attribute in the template together with formControlName triggers the warning about mixing the reactive API with a DOM attribute.',
    },
    distractors: [
      {
        es: 'Enlazando [disabled] a una propiedad del componente, porque la directiva de formularios reactivos sincroniza ese enlace con el estado del control sin advertir nada.',
        en: 'By binding [disabled] to a component property, because the reactive forms directive syncs that binding with the control state without any warning.',
      },
      {
        es: 'Creando el control con new FormControl({ value: "", disabled: true }); una vez hecho eso, enlazar [disabled] en la plantilla deja de emitir la advertencia.',
        en: 'By creating the control with new FormControl({ value: "", disabled: true }); once that is done, binding [disabled] in the template stops emitting the warning.',
      },
    ],
    explanation: {
      es: 'La fuente de verdad del estado es el modelo, por eso Angular avisa con "It looks like you are using the disabled attribute with a reactive form directive" y recomienda disable() y enable(). El objeto { value, disabled } es correcto pero solo define el estado inicial al construir el control, y no evita la advertencia si además se enlaza el atributo. Conviene recordar que un control deshabilitado queda fuera de form.value y de la validación, así que para leerlo hay que usar getRawValue().',
      en: 'The source of truth for the state is the model, which is why Angular warns with "It looks like you are using the disabled attribute with a reactive form directive" and recommends disable() and enable(). The { value, disabled } object is correct but only defines the initial state when the control is built, and it does not prevent the warning if the attribute is also bound. Keep in mind that a disabled control is excluded from form.value and from validation, so reading it requires getRawValue().',
    },
  },
  {
    id: 'fe-form2-15',
    topic: 'Formularios avanzados',
    prompt: {
      es: 'Entre formularios dirigidos por plantilla y reactivos, ¿dónde vive la validación en cada caso?',
      en: 'Between template driven and reactive forms, where does validation live in each case?',
    },
    answer: {
      es: 'En los dirigidos por plantilla se declara en el HTML mediante directivas, y en los reactivos vive en la clase como funciones validadoras pasadas al crear el control.',
      en: 'In template driven forms it is declared in the HTML through directives, and in reactive forms it lives in the class as validator functions passed when creating the control.',
    },
    distractors: [
      {
        es: 'En los dirigidos por plantilla ngModel construye el árbol de controles de forma síncrona, así que el formulario ya está creado y validado en el ngOnInit del componente.',
        en: 'In template driven forms ngModel builds the control tree synchronously, so the form is already created and validated in the component ngOnInit.',
      },
      {
        es: 'La diferencia es solo de estilo, porque NgForm y FormGroup comparten API; la real es que únicamente los reactivos admiten validadores asíncronos.',
        en: 'The difference is only stylistic, since NgForm and FormGroup share the API; the real one is that only reactive forms support async validators.',
      },
    ],
    explanation: {
      es: 'Tener la validación en la clase es lo que hace a los reactivos fáciles de probar sin renderizar la plantilla, mientras que en los dirigidos por plantilla una regla propia obliga a escribir una directiva que provea NG_VALIDATORS. Los formularios de plantilla crean sus controles de forma asíncrona, por lo que en ngOnInit el valor todavía está vacío y tocarlo suele provocar el error ExpressionChangedAfterItHasBeenCheckedError. Ambos enfoques admiten validación asíncrona: en plantilla mediante directivas que proveen NG_ASYNC_VALIDATORS.',
      en: 'Having validation in the class is what makes reactive forms easy to test without rendering the template, while in template driven forms a custom rule forces you to write a directive that provides NG_VALIDATORS. Template driven forms create their controls asynchronously, so in ngOnInit the value is still empty and touching it usually triggers the ExpressionChangedAfterItHasBeenCheckedError. Both approaches support async validation: in templates through directives that provide NG_ASYNC_VALIDATORS.',
    },
  },
  {
    id: 'fe-form2-16',
    topic: 'Formularios avanzados',
    prompt: {
      es: '¿Por qué avisa Angular cuando se usa ngModel sobre el mismo campo que formControl o formControlName?',
      en: 'Why does Angular warn when ngModel is used on the same field as formControl or formControlName?',
    },
    answer: {
      es: 'Porque habría dos fuentes de verdad para el mismo campo; esa combinación está obsoleta desde Angular 6 y lo correcto es quedarse con la API reactiva y leer valueChanges.',
      en: 'Because there would be two sources of truth for the same field; that combination has been deprecated since Angular 6 and the right move is to keep the reactive API and read valueChanges.',
    },
    distractors: [
      {
        es: 'Porque Angular lanza un error en tiempo de ejecución al detectar dos value accessors compitiendo por el mismo elemento del formulario.',
        en: 'Because Angular throws a runtime error when it detects two value accessors competing for the same form element.',
      },
      {
        es: 'Porque el aviso es solo informativo y se silencia con ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: "never" }), tras lo cual la mezcla queda soportada.',
        en: 'Because the notice is merely informational and is silenced with ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: "never" }), after which the mix becomes supported.',
      },
    ],
    explanation: {
      es: 'El mensaje "It looks like you are using ngModel on the same form field as formControl" es una advertencia, no un error: la aplicación arranca, pero ngModel escribe el valor de forma asíncrona y compite con el modelo reactivo, lo que produce valores desfasados difíciles de depurar. El value accessor sigue siendo uno solo, el del elemento; el conflicto está en quién manda sobre el valor. La opción withConfig existe de verdad, pero solo silencia el aviso: el soporte de esa combinación se retiró igualmente.',
      en: 'The message "It looks like you are using ngModel on the same form field as formControl" is a warning, not an error: the app boots, but ngModel writes the value asynchronously and competes with the reactive model, producing stale values that are hard to debug. There is still only one value accessor, the one for the element; the conflict is about who owns the value. The withConfig option does exist, but it only silences the notice: support for that combination was removed anyway.',
    },
  },
  {
    id: 'fe-form2-17',
    topic: 'Formularios avanzados',
    prompt: {
      es: '¿Cuál es una buena estrategia para decidir cuándo mostrar los errores de un campo?',
      en: 'What is a good strategy to decide when to show the errors of a field?',
    },
    answer: {
      es: 'Mostrarlos cuando el control es inválido y además está touched o dirty, y al enviar llamar a markAllAsTouched para revelar también los campos que el usuario no visitó.',
      en: 'Show them when the control is invalid and additionally touched or dirty, and on submit call markAllAsTouched to also reveal the fields the user never visited.',
    },
    distractors: [
      {
        es: 'Mostrarlos siempre que el control sea inválido, porque así el usuario ve desde el primer momento qué datos faltan y no descubre errores al final.',
        en: 'Show them whenever the control is invalid, so the user sees from the very beginning which data is missing and does not discover errors at the end.',
      },
      {
        es: 'Condicionarlos a la propiedad submitted del FormGroup, que Angular pone en true al dispararse ngSubmit y vuelve a false tras un reset.',
        en: 'Gate them on the submitted property of the FormGroup, which Angular sets to true when ngSubmit fires and back to false after a reset.',
      },
    ],
    explanation: {
      es: 'Condicionar a touched o dirty evita que un formulario recién abierto aparezca en rojo, y markAllAsTouched cubre el caso de enviar sin tocar nada. La propiedad submitted no existe en el modelo FormGroup, sino en las directivas FormGroupDirective y NgForm, así que hay que obtenerla con una variable de plantilla como #fd="ngForm" o con un ViewChild. Angular Material formaliza este criterio en ErrorStateMatcher, que combina invalid con touched, dirty y el estado submitted del formulario.',
      en: 'Gating on touched or dirty keeps a freshly opened form from showing up in red, and markAllAsTouched covers the case of submitting without touching anything. The submitted property does not exist on the FormGroup model but on the FormGroupDirective and NgForm directives, so you must reach it with a template variable such as #fd="ngForm" or with a ViewChild. Angular Material formalizes this criterion in ErrorStateMatcher, which combines invalid with touched, dirty and the submitted state of the form.',
    },
  },
  {
    id: 'fe-form2-18',
    topic: 'Formularios avanzados',
    prompt: {
      es: '¿Cómo se espacian las peticiones de un validador asíncrono y qué ocurre mientras el control está en PENDING?',
      en: 'How do you space out the requests of an async validator and what happens while the control is PENDING?',
    },
    answer: {
      es: 'Aplicando el retardo dentro del propio AsyncValidatorFn, por ejemplo con timer(300) y switchMap hacia la petición; mientras tanto el control queda en PENDING y conviene mostrar un indicador y no habilitar el envío.',
      en: 'By applying the delay inside the AsyncValidatorFn itself, for example with timer(300) and switchMap into the request; meanwhile the control stays PENDING, so you should show an indicator and not enable submit.',
    },
    distractors: [
      {
        es: 'Poniendo updateOn en blur en el control, que es la única forma soportada de espaciar las llamadas porque el validador no admite operadores de tiempo.',
        en: 'By setting updateOn to blur on the control, the only supported way to space out the calls because the validator does not accept time operators.',
      },
      {
        es: 'No hace falta nada especial en el botón, porque mientras el control está en PENDING el formulario es inválido y el envío ya queda deshabilitado.',
        en: 'Nothing special is needed on the button, because while the control is PENDING the form is invalid and submit is already disabled.',
      },
    ],
    explanation: {
      es: 'El validador debe devolver un observable que complete, y timer más switchMap logran las dos cosas: retrasan la llamada y cancelan la anterior cuando llega un valor nuevo. updateOn en blur es una técnica válida y complementaria, pero no la única. El detalle que suele fallar en entrevistas es que PENDING no es INVALID: con ese estado, form.invalid es false y form.valid también, así que el botón debe deshabilitarse con !form.valid o comprobando form.pending. Recuerda además que los validadores asíncronos solo se ejecutan si los síncronos pasan.',
      en: 'The validator must return an observable that completes, and timer plus switchMap achieve both things: they delay the call and cancel the previous one when a new value arrives. Setting updateOn to blur is a valid and complementary technique, but not the only one. The detail that usually trips people up in interviews is that PENDING is not INVALID: in that state form.invalid is false and form.valid is false too, so the button must be disabled with !form.valid or by checking form.pending. Remember as well that async validators only run when the sync ones pass.',
    },
  },
  {
    id: 'fe-form2-19',
    topic: 'Formularios avanzados',
    prompt: {
      es: '¿Cómo se usa el estado dirty del formulario en un guard de cambios sin guardar?',
      en: 'How do you use the form dirty state in an unsaved changes guard?',
    },
    answer: {
      es: 'El componente expone form.dirty y un CanDeactivateFn recibe esa instancia y pide confirmación si es true; tras guardar hay que llamar markAsPristine o reset para que el guard deje de bloquear.',
      en: 'The component exposes form.dirty and a CanDeactivateFn receives that instance and asks for confirmation when it is true; after saving you must call markAsPristine or reset so the guard stops blocking.',
    },
    distractors: [
      {
        es: 'Basta con comprobar form.touched, que indica que el usuario ha interactuado con el formulario y por tanto que puede haber cambios pendientes.',
        en: 'Checking form.touched is enough, since it indicates the user has interacted with the form and therefore that there may be pending changes.',
      },
      {
        es: 'El guard debe recuperar el componente desde el snapshot de la ruta activa, porque CanDeactivateFn solo recibe la ruta y el estado del router.',
        en: 'The guard must fetch the component from the active route snapshot, because CanDeactivateFn only receives the route and the router state.',
      },
    ],
    explanation: {
      es: 'dirty se marca al cambiar el valor desde la vista, que es justo la señal de cambios pendientes; touched se marca en el blur aunque el usuario no haya escrito nada, así que provocaría avisos falsos. CanDeactivateFn<T> recibe como primer argumento la instancia del componente, de ahí que el patrón habitual sea una interfaz con un método puedeSalir(). Los guards funcionales se consolidaron en Angular 15, cuando las variantes de clase quedaron obsoletas, y conviene recordar que el guard no cubre recargar o cerrar la pestaña: para eso hace falta el evento beforeunload.',
      en: 'dirty is set when the value changes from the view, which is exactly the signal of pending changes; touched is set on blur even if the user typed nothing, so it would cause false prompts. CanDeactivateFn<T> receives the component instance as its first argument, which is why the usual pattern is an interface with a canLeave() method. Functional guards were consolidated in Angular 15, when the class based variants were deprecated, and remember that the guard does not cover reloading or closing the tab: that needs the beforeunload event.',
    },
  },
  {
    id: 'fe-form2-20',
    topic: 'Formularios avanzados',
    prompt: {
      es: 'En un formulario muy grande que va lento al escribir, ¿qué combinación de medidas es la adecuada?',
      en: 'In a very large form that lags while typing, which combination of measures is the right one?',
    },
    answer: {
      es: 'Usar OnPush, poner updateOn en blur para no recalcular en cada tecla y centralizar pocas suscripciones, por ejemplo una al valueChanges del grupo con debounceTime y takeUntilDestroyed.',
      en: 'Use OnPush, set updateOn to blur so nothing is recomputed on every keystroke, and centralize few subscriptions, for example one on the group valueChanges with debounceTime and takeUntilDestroyed.',
    },
    distractors: [
      {
        es: 'Basta con OnPush, porque con esa estrategia las directivas de formularios dejan de marcar el componente para revisión y la vista solo se comprueba al enviar.',
        en: 'OnPush alone is enough, because with that strategy the form directives stop marking the component for check and the view is only verified on submit.',
      },
      {
        es: 'Conviene suscribirse al valueChanges de cada control por separado, ya que el del grupo reconstruye el objeto completo en cada tecla y resulta más costoso.',
        en: 'It is better to subscribe to the valueChanges of each control separately, since the group one rebuilds the whole object on every keystroke and is more expensive.',
      },
    ],
    explanation: {
      es: 'El coste real se reparte entre la detección de cambios, la ejecución de validadores y el número de suscripciones activas, por eso hay que atacar los tres frentes a la vez. OnPush no aísla del todo: los eventos del DOM que dispara el usuario siguen provocando un ciclo de detección, y el value accessor marca el componente para revisión. Multiplicar suscripciones empeora las cosas aunque cada emisión sea pequeña; es preferible una sola suscripción al grupo, o exponer el estado con toSignal, y usar trackBy en los bucles sobre un FormArray para no recrear las filas.',
      en: 'The real cost is split between change detection, validator execution and the number of active subscriptions, which is why all three fronts must be addressed at once. OnPush does not fully isolate you: the DOM events the user fires still trigger a detection cycle, and the value accessor marks the component for check. Multiplying subscriptions makes things worse even if each emission is small; one subscription on the group is preferable, or exposing the state with toSignal, plus trackBy in loops over a FormArray so rows are not recreated.',
    },
  },
];
