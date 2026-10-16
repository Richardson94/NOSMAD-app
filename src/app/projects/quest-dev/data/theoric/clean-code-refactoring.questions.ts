import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_CLEAN_CODE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-clean-01',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué refactor aplicas si un método tiene siete parámetros y cada dato nuevo cambia la firma?',
      en: 'A method has seven parameters and every new piece of data changes the signature. Which refactor do you apply?',
    },
    answer: {
      es: 'Un objeto parámetro que agrupe los datos que viajan juntos y les dé un nombre.',
      en: 'A parameter object that groups the data travelling together and gives them a name.',
    },
    distractors: [
      {
        es: 'Varias sobrecargas con valores por defecto.',
        en: 'Several overloads with default values.',
      },
      {
        es: 'Convertir los parámetros en campos y rellenarlos antes de llamar.',
        en: 'Turn the parameters into fields and fill them before calling.',
      },
    ],
    explanation: {
      es: 'El objeto también es un sitio natural para validar. Pasar los datos a campos crea un orden de llamadas que es fácil de olvidar.',
      en: 'The object is also a natural place to validate. Moving the data into fields creates a call order that is easy to forget.',
    },
  },
  {
    id: 'th-clean-02',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué problema es la obsesión por primitivos y cómo lo arregla un objeto de valor?',
      en: 'What problem is primitive obsession and how does a value object fix it?',
    },
    answer: {
      es: 'Las reglas de un concepto quedan repartidas por el código. El objeto de valor junta el dato, la validación y la igualdad.',
      en: 'The rules of a concept are scattered through the code. The value object keeps the data, the validation and the equality together.',
    },
    distractors: [
      {
        es: 'Falta tipado, y un alias de tipo basta para que el compilador distinga los conceptos.',
        en: 'Typing is missing, and a type alias is enough for the compiler to tell the concepts apart.',
      },
      {
        es: 'La entidad tiene demasiados campos y hay que achicar la clase.',
        en: 'The entity has too many fields and the class must be made smaller.',
      },
    ],
    explanation: {
      es: 'Un Email o un importe inválido no debería poder construirse. Un alias de string no valida nada.',
      en: 'An invalid Email or amount should not be constructible. An alias of string validates nothing.',
    },
  },
  {
    id: 'th-clean-03',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué indica el olor grupos de datos?',
      en: 'What does the data clumps smell indicate?',
    },
    answer: {
      es: 'Que los mismos tres o cuatro datos aparecen juntos en varias firmas. Falta un tipo que los represente.',
      en: 'That the same three or four values show up together in several signatures. A type that represents them is missing.',
    },
    distractors: [
      {
        es: 'Que una clase tiene demasiados campos públicos y hay que encapsularlos.',
        en: 'That a class has too many public fields and they must be encapsulated.',
      },
      {
        es: 'Que hay que subir los campos repetidos a una superclase.',
        en: 'That the repeated fields must be pulled up into a superclass.',
      },
    ],
    explanation: {
      es: 'Si al quitar uno de los datos los demás dejan de tener sentido, forman un concepto. Heredar solo para compartir campos acopla de más.',
      en: 'If removing one value makes the rest meaningless, they form a concept. Inheriting only to share fields couples too much.',
    },
  },
  {
    id: 'th-clean-04',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Cuál es la diferencia entre cirugía con escopeta y cambio divergente?',
      en: 'What is the difference between shotgun surgery and divergent change?',
    },
    answer: {
      es: 'En la cirugía un solo cambio toca muchas clases. En el cambio divergente una misma clase se modifica por motivos distintos.',
      en: 'In shotgun surgery one change touches many classes. In divergent change one class is modified for unrelated reasons.',
    },
    distractors: [
      {
        es: 'La cirugía cruza capas y el cambio divergente solo ocurre en el dominio.',
        en: 'Shotgun surgery crosses layers and divergent change only happens in the domain.',
      },
      {
        es: 'La cirugía viene de código duplicado y el cambio divergente de una mala herencia.',
        en: 'Shotgun surgery comes from duplicated code and divergent change from bad inheritance.',
      },
    ],
    explanation: {
      es: 'La cura de la cirugía es juntar el comportamiento. La del cambio divergente es partir la clase.',
      en: 'The cure for shotgun surgery is to gather the behaviour. The cure for divergent change is to split the class.',
    },
  },
  {
    id: 'th-clean-05',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué es la generalidad especulativa?',
      en: 'What is speculative generality?',
    },
    answer: {
      es: 'Abstracción añadida por si acaso, para una necesidad que no llega. Se paga con indirección que nadie usa.',
      en: 'Abstraction added just in case, for a need that never arrives. You pay for it with indirection nobody uses.',
    },
    distractors: [
      {
        es: 'Abusar de los genéricos hasta que el compilador deja de comprobar tipos.',
        en: 'Overusing generics until the compiler stops checking types.',
      },
      {
        es: 'Optimizar el rendimiento antes de medirlo.',
        en: 'Optimising performance before measuring it.',
      },
    ],
    explanation: {
      es: 'El síntoma es una interfaz con una sola implementación. Anticipar el rendimiento es otro problema, la optimización prematura.',
      en: 'The symptom is an interface with a single implementation. Anticipating performance is a different problem, premature optimisation.',
    },
  },
  {
    id: 'th-clean-06',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Cuándo aporta valor un comentario?',
      en: 'When does a comment add value?',
    },
    answer: {
      es: 'Cuando explica el porqué de una decisión que no se ve en el código, como una restricción legal o un rodeo por un fallo ajeno.',
      en: 'When it explains the why of a decision you cannot see in the code, such as a legal constraint or a workaround for someone else bug.',
    },
    distractors: [
      {
        es: 'Cuando describe paso a paso un algoritmo complejo.',
        en: 'When it describes a complex algorithm step by step.',
      },
      {
        es: 'Cuando documenta cada método privado con sus parámetros.',
        en: 'When it documents every private method with its parameters.',
      },
    ],
    explanation: {
      es: 'Si el comentario explica qué hace un bloque, ese texto suele ser el nombre de un método extraído.',
      en: 'If the comment explains what a block does, that text is usually the name of an extracted method.',
    },
  },
  {
    id: 'th-clean-07',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué ganas al sustituir condicionales anidados por cláusulas de guarda?',
      en: 'What do you gain by replacing nested conditionals with guard clauses?',
    },
    answer: {
      es: 'Los casos raros salen al inicio y el camino principal se lee sin anidar.',
      en: 'The rare cases exit at the start and the main path reads without nesting.',
    },
    distractors: [
      {
        es: 'Baja la complejidad ciclomática porque hay menos caminos.',
        en: 'It lowers cyclomatic complexity because there are fewer paths.',
      },
      {
        es: 'Mantiene un solo return al final, que facilita liberar recursos.',
        en: 'It keeps a single return at the end, which makes releasing resources easier.',
      },
    ],
    explanation: {
      es: 'El número de decisiones no cambia. Lo que baja es lo que tienes que recordar mientras lees. Varios return son válidos.',
      en: 'The number of decisions does not change. What drops is what you must remember while reading. Several returns are valid.',
    },
  },
  {
    id: 'th-clean-08',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Cuándo extraes un bloque a su propio método?',
      en: 'When do you extract a block into its own method?',
    },
    answer: {
      es: 'Cuando el método mezcla el qué y el cómo, y ese bloque se puede nombrar por su intención.',
      en: 'When the method mixes the what and the how, and that block can be named by its intent.',
    },
    distractors: [
      {
        es: 'Cuando supera veinte líneas.',
        en: 'When it goes past twenty lines.',
      },
      {
        es: 'Solo cuando el bloque está duplicado en otro sitio.',
        en: 'Only when the block is duplicated somewhere else.',
      },
    ],
    explanation: {
      es: 'La longitud es un síntoma, no la regla. Si te apetece comentar un bloque, ese comentario es un buen nombre de método.',
      en: 'Length is a symptom, not the rule. If you feel like commenting a block, that comment is a good method name.',
    },
  },
  {
    id: 'th-clean-09',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Cuándo conviene sustituir un condicional por polimorfismo?',
      en: 'When is it worth replacing a conditional with polymorphism?',
    },
    answer: {
      es: 'Cuando el mismo switch sobre un tipo se repite en varios métodos y cada rama es un comportamiento estable.',
      en: 'When the same switch over a type is repeated in several methods and each branch is a stable behaviour.',
    },
    distractors: [
      {
        es: 'Siempre que aparezca un switch, porque todo condicional sobre el tipo es un olor.',
        en: 'Whenever a switch shows up, because every conditional on the type is a smell.',
      },
      {
        es: 'Cuando hay muchas ramas, porque el despacho es más rápido.',
        en: 'When there are many branches, because dispatch is faster.',
      },
    ],
    explanation: {
      es: 'Un condicional local y único suele leerse mejor que una jerarquía. El problema es repetir la misma decisión en varios sitios.',
      en: 'A single local conditional usually reads better than a hierarchy. The problem is repeating the same decision in several places.',
    },
  },
  {
    id: 'th-clean-10',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Por qué sustituyes un número mágico por una constante con nombre?',
      en: 'Why do you replace a magic number with a named constant?',
    },
    answer: {
      es: 'Porque el nombre dice qué significa y el cambio queda en un solo sitio.',
      en: 'Because the name says what it means and the change stays in one place.',
    },
    distractors: [
      {
        es: 'Porque el compilador optimiza mejor una constante que un literal.',
        en: 'Because the compiler optimises a constant better than a literal.',
      },
      {
        es: 'Porque todo literal debe salir a un archivo de configuración.',
        en: 'Because every literal must move to a configuration file.',
      },
    ],
    explanation: {
      es: 'El mismo 0.21 puede ser un impuesto en un sitio y un descuento en otro. A configuración solo va lo que cambia entre entornos.',
      en: 'The same 0.21 can be a tax in one place and a discount in another. Only what changes between environments belongs in configuration.',
    },
  },
  {
    id: 'th-clean-11',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Por qué un boolean que decide el flujo interno de un método es un olor?',
      en: 'Why is a boolean that decides the internal flow of a method a smell?',
    },
    answer: {
      es: 'Porque el método hace dos cosas. Conviene partirlo en dos métodos cuyo nombre diga cada intención.',
      en: 'Because the method does two things. It should be split into two methods whose names state each intent.',
    },
    distractors: [
      {
        es: 'Porque en la llamada no se lee, y basta cambiarlo por un enum.',
        en: 'Because it does not read well at the call site, and changing it to an enum is enough.',
      },
      {
        es: 'Porque un boolean solo admite dos casos y un tercero obligará a cambiar la firma.',
        en: 'Because a boolean allows only two cases and a third one will force a signature change.',
      },
    ],
    explanation: {
      es: 'reservar(cliente, true) no dice nada. Un enum se lee mejor, pero los dos caminos siguen mezclados en el mismo método.',
      en: 'book(customer, true) says nothing. An enum reads better, but the two paths stay mixed in the same method.',
    },
  },
  {
    id: 'th-clean-12',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué es el acoplamiento temporal y cómo se quita?',
      en: 'What is temporal coupling and how do you remove it?',
    },
    answer: {
      es: 'Es tener que llamar métodos en un orden concreto. Se quita diseñando la API para que el orden incorrecto no se pueda expresar.',
      en: 'It is having to call methods in a specific order. You remove it by designing the API so the wrong order cannot even be expressed.',
    },
    distractors: [
      {
        es: 'Es depender del reloj del sistema, y se quita inyectando un proveedor de tiempo.',
        en: 'It is depending on the system clock, and you remove it by injecting a time provider.',
      },
      {
        es: 'Es llamar de forma síncrona, y se quita publicando un evento.',
        en: 'It is calling synchronously, and you remove it by publishing an event.',
      },
    ],
    explanation: {
      es: 'El síntoma es configurar, luego conectar y luego ejecutar, y saltarse un paso falla en ejecución. Un constructor válido o un builder por etapas lo impide.',
      en: 'The symptom is configure, then connect, then execute, and skipping a step fails at runtime. A valid constructor or a staged builder prevents it.',
    },
  },
  {
    id: 'th-clean-13',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Por qué se evitan prefijos de tipo o el sufijo Impl en los nombres?',
      en: 'Why are type prefixes or the Impl suffix avoided in names?',
    },
    answer: {
      es: 'Porque repiten lo que el tipo y el editor ya dicen, y se quedan viejos en cuanto el código cambia.',
      en: 'Because they repeat what the type and the editor already say, and they go stale as soon as the code changes.',
    },
    distractors: [
      {
        es: 'Porque los nombres largos cuestan de leer y hay que abreviarlos.',
        en: 'Because long names are hard to read and they must be shortened.',
      },
      {
        es: 'Porque la convención de Java prohíbe prefijos y las herramientas fallan el build.',
        en: 'Because the Java convention forbids prefixes and the tools fail the build.',
      },
    ],
    explanation: {
      es: 'JdbcUserRepository dice la estrategia. UserRepositoryImpl no. El tamaño del nombre debe ir con el alcance, no con una abreviatura fija.',
      en: 'JdbcUserRepository states the strategy. UserRepositoryImpl does not. Name length should follow the scope, not a fixed abbreviation.',
    },
  },
  {
    id: 'th-clean-14',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué haces si encuentras código comentado desde hace meses y un método que nadie llama?',
      en: 'You find code commented out months ago and a method nobody calls. What do you do?',
    },
    answer: {
      es: 'Los borras. El control de versiones guarda la historia y dejarlos solo genera dudas.',
      en: 'You delete them. Version control keeps the history and leaving them only creates doubt.',
    },
    distractors: [
      {
        es: 'Los marcas como obsoletos con la fecha, por si alguien los necesita.',
        en: 'You mark them obsolete with the date, in case someone needs them.',
      },
      {
        es: 'Los dejas detrás de un interruptor apagado, por si el requisito vuelve.',
        en: 'You keep them behind a disabled switch, in case the requirement comes back.',
      },
    ],
    explanation: {
      es: 'Nadie sabe si el comentario está pendiente o olvidado. Un interruptor permanente multiplica los casos que hay que probar.',
      en: 'Nobody knows whether the comment is pending or forgotten. A permanent switch multiplies the cases you must test.',
    },
  },
  {
    id: 'th-clean-15',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué diferencia al intermediario innecesario de la intimidad inapropiada?',
      en: 'What distinguishes an unnecessary middle man from inappropriate intimacy?',
    },
    answer: {
      es: 'El intermediario solo reenvía casi todos sus métodos. La intimidad es que dos clases se toquen los detalles internos.',
      en: 'The middle man only forwards almost every method. Intimacy is two classes touching each other internal details.',
    },
    distractors: [
      {
        es: 'El intermediario es una cadena de getters para llegar a un dato.',
        en: 'The middle man is a chain of getters to reach a piece of data.',
      },
      {
        es: 'La intimidad es que dos clases se referencien y formen un ciclo.',
        en: 'Intimacy is two classes referencing each other and forming a cycle.',
      },
    ],
    explanation: {
      es: 'Al intermediario se le quita y el cliente habla con el colaborador. La cadena de getters es otro olor, el de Demeter.',
      en: 'You remove the middle man and the client talks to the collaborator. A chain of getters is another smell, the Demeter one.',
    },
  },
  {
    id: 'th-clean-16',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué mide la complejidad ciclomática y cómo se usa?',
      en: 'What does cyclomatic complexity measure and how is it used?',
    },
    answer: {
      es: 'Cuenta los caminos independientes de un método. Sirve de aviso para revisarlo y de mínimo de pruebas para cubrir las ramas.',
      en: 'It counts the independent paths through a method. It works as a warning to review it and as a minimum of tests to cover the branches.',
    },
    distractors: [
      {
        es: 'Mide lo difícil que es entender el método, penalizando el anidamiento.',
        en: 'It measures how hard the method is to understand, penalising nesting.',
      },
      {
        es: 'Mide el acoplamiento, contando cuántas clases distintas llama.',
        en: 'It measures coupling, counting how many different classes it calls.',
      },
    ],
    explanation: {
      es: 'Un umbral es una alarma, no una prohibición. El esfuerzo de lectura con anidamiento es otra métrica, la complejidad cognitiva.',
      en: 'A threshold is an alarm, not a ban. The reading effort with nesting is another metric, cognitive complexity.',
    },
  },
  {
    id: 'th-clean-17',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Por qué hace falta tener pruebas antes de refactorizar?',
      en: 'Why do you need tests before refactoring?',
    },
    answer: {
      es: 'Porque refactorizar conserva el comportamiento. Sin una red no puedes saber si algo cambió.',
      en: 'Because refactoring keeps the behaviour. Without a safety net you cannot tell whether something changed.',
    },
    distractors: [
      {
        es: 'Porque las pruebas escritas antes definen el diseño que debe tener la solución.',
        en: 'Because tests written first define the design the solution must have.',
      },
      {
        es: 'Porque hay que comparar la cobertura antes y después para saber si salió bien.',
        en: 'Because you must compare coverage before and after to know whether it went well.',
      },
    ],
    explanation: {
      es: 'Escribir la prueba primero para guiar el diseño es TDD, otra práctica. Una refactorización correcta puede dejar la cobertura igual.',
      en: 'Writing the test first to drive the design is TDD, a different practice. A correct refactor can leave coverage unchanged.',
    },
  },
  {
    id: 'th-clean-18',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Cuál es la diferencia entre refactorizar, reestructurar y reescribir?',
      en: 'What is the difference between refactoring, restructuring and rewriting?',
    },
    answer: {
      es: 'Refactorizar cambia la estructura sin cambiar el comportamiento. Reestructurar puede cambiar contratos. Reescribir parte de cero.',
      en: 'Refactoring changes the structure without changing the behaviour. Restructuring may change contracts. Rewriting starts from scratch.',
    },
    distractors: [
      {
        es: 'Refactorizar es un método y reestructurar es un módulo. La diferencia es el tamaño.',
        en: 'Refactoring is a method and restructuring is a module. The difference is the size.',
      },
      {
        es: 'Refactorizar incluye arreglar los bugs que encuentres por el camino.',
        en: 'Refactoring includes fixing the bugs you find along the way.',
      },
    ],
    explanation: {
      es: 'Un arreglo de bug va en otro commit. Si se mezclan, no sabes si la prueba falló por la estructura o por el comportamiento.',
      en: 'A bug fix goes in another commit. If they are mixed, you do not know whether the test failed because of structure or because of behaviour.',
    },
  },
  {
    id: 'th-clean-19',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿En qué consiste la higuera estranguladora para sustituir un módulo heredado?',
      en: 'What does the strangler fig consist of when replacing a legacy module?',
    },
    answer: {
      es: 'En desviar funcionalidad por funcionalidad al módulo nuevo, hasta que el heredado se queda sin tráfico y se retira.',
      en: 'In diverting feature by feature to the new module, until the legacy one has no traffic and is retired.',
    },
    distractors: [
      {
        es: 'En congelar el heredado y migrar a los usuarios cuando el nuevo tenga paridad.',
        en: 'In freezing the legacy one and migrating users when the new one reaches parity.',
      },
      {
        es: 'En envolver el heredado con una fachada que traduzca su modelo.',
        en: 'In wrapping the legacy one with a facade that translates its model.',
      },
    ],
    explanation: {
      es: 'El valor es entregar en trozos y poder volver atrás una funcionalidad. Construir en paralelo hasta el día del cambio es el reemplazo de golpe.',
      en: 'The value is shipping in slices and being able to roll one feature back. Building in parallel until switch day is the big bang replacement.',
    },
  },
  {
    id: 'th-clean-20',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Cuándo lanzas una excepción y cuándo devuelves un resultado de error?',
      en: 'When do you throw an exception and when do you return an error result?',
    },
    answer: {
      es: 'La excepción es para lo inesperado, que nadie trata en el punto de llamada. El resultado modela un fallo previsto que el llamador debe decidir.',
      en: 'An exception is for the unexpected, which nobody handles at the call site. A result models an expected failure the caller must decide on.',
    },
    distractors: [
      {
        es: 'Siempre excepciones, porque un código de error se puede ignorar.',
        en: 'Always exceptions, because an error code can be ignored.',
      },
      {
        es: 'Siempre un tipo Result, porque evita construir la traza.',
        en: 'Always a Result type, because it avoids building the stack trace.',
      },
    ],
    explanation: {
      es: 'Un saldo insuficiente es un resultado de negocio. Una base de datos caída es excepcional y sube hasta un manejador global.',
      en: 'An insufficient balance is a business result. A database being down is exceptional and goes up to a global handler.',
    },
  },
];
