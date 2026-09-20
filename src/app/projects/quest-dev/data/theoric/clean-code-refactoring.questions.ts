import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_CLEAN_CODE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-clean-01',
    topic: 'Codigo limpio',
    prompt: {
      es: 'Un método recibe siete parámetros y cada vez que se añade un dato hay que cambiar su firma. ¿Qué refactorización aplica?',
      en: 'A method takes seven parameters and every new piece of data forces a signature change. Which refactoring applies?',
    },
    answer: {
      es: 'Introducir un objeto parámetro que agrupe los argumentos que siempre viajan juntos y dé nombre a ese concepto.',
      en: 'Introduce a parameter object that groups the arguments always travelling together and names that concept.',
    },
    distractors: [
      {
        es: 'Sobrecargar el método con varias firmas y valores por defecto, para que cada llamador pase solo lo que necesita.',
        en: 'Overload the method with several signatures and default values, so each caller passes only what it needs.',
      },
      {
        es: 'Convertir los parámetros en campos de la clase e inicializarlos por separado antes de invocar el método.',
        en: 'Turn the parameters into class fields and initialise them separately before invoking the method.',
      },
    ],
    explanation: {
      es: 'La refactorización se llama "introducir objeto parámetro" y, además de acortar la firma, crea un lugar natural donde mover la validación y el comportamiento asociado a ese grupo de datos. Sobrecargar multiplica las firmas sin eliminar la causa y suele esconder combinaciones inválidas. Mover los parámetros a campos convierte un método puro en estado mutable y genera acoplamiento temporal: el objeto queda inválido si alguien olvida un paso.',
      en: 'The refactoring is called "introduce parameter object" and, besides shortening the signature, it creates a natural home for the validation and behaviour tied to that data group. Overloading multiplies signatures without removing the cause and usually hides invalid combinations. Moving the parameters into fields turns a pure method into mutable state and creates temporal coupling: the object stays invalid if someone forgets a step.',
    },
  },
  {
    id: 'th-clean-02',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué problema revela la obsesión por primitivos y cómo lo resuelve un objeto de valor?',
      en: 'What problem does primitive obsession reveal and how does a value object solve it?',
    },
    answer: {
      es: 'Que las reglas de un concepto quedan dispersas por todo el código; el objeto de valor encapsula el dato junto a su validación e igualdad.',
      en: 'That the rules of a concept are scattered all over the code; the value object encapsulates the data together with its validation and equality.',
    },
    distractors: [
      {
        es: 'Que el modelo carece de tipado expresivo, y basta con declarar alias de tipo para que el compilador distinga cada concepto.',
        en: 'That the model lacks expressive typing, and declaring type aliases is enough for the compiler to tell each concept apart.',
      },
      {
        es: 'Que las entidades acumulan demasiados campos, y agrupar algunos en otro objeto reduce el tamaño de la clase.',
        en: 'That entities accumulate too many fields, and grouping some into another object reduces the class size.',
      },
    ],
    explanation: {
      es: 'Un objeto de valor como Email, Dinero o Cantidad es inmutable, se compara por valor y valida en su constructor, de modo que un valor inválido no puede existir en el sistema. Un alias de tipo no aporta nada en un sistema estructural como TypeScript, donde string y un alias de string son intercambiables, y tampoco valida nada. Reducir el número de campos es el olor de clase grande, que se cura con "extraer clase" y persigue otro objetivo.',
      en: 'A value object such as Email, Money or Quantity is immutable, compared by value and validated in its constructor, so an invalid value simply cannot exist in the system. A type alias adds nothing in a structural system like TypeScript, where string and an alias of string are interchangeable, and it validates nothing either. Reducing the field count is the large class smell, cured with "extract class", and it pursues a different goal.',
    },
  },
  {
    id: 'th-clean-03',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué indica el olor de código "grupos de datos" (data clumps)?',
      en: 'What does the "data clumps" code smell indicate?',
    },
    answer: {
      es: 'Que los mismos tres o cuatro datos reaparecen juntos en varias firmas y clases, señal de que falta un tipo que los represente.',
      en: 'That the same three or four values keep appearing together across several signatures and classes, a sign that a type representing them is missing.',
    },
    distractors: [
      {
        es: 'Que una clase expone demasiados campos públicos y debería encapsularlos detrás de métodos de acceso.',
        en: 'That a class exposes too many public fields and should encapsulate them behind accessor methods.',
      },
      {
        es: 'Que varias clases repiten los mismos campos, y la solución es extraer una superclase común que los contenga.',
        en: 'That several classes repeat the same fields, and the solution is to extract a common superclass holding them.',
      },
    ],
    explanation: {
      es: 'La prueba clásica es preguntarse si al quitar uno de los datos los demás siguen teniendo sentido: si no, forman una unidad conceptual y procede "extraer clase" y luego "introducir objeto parámetro" o "pasar el objeto completo". Encapsular campos públicos es la refactorización "encapsular campo", que ataca la visibilidad y no la repetición del grupo. Subir los campos a una superclase crea herencia por reutilización de datos, no por sustitución, y acopla clases que quizá no comparten comportamiento.',
      en: 'The classic test is to ask whether removing one of the values leaves the rest meaningful: if not, they form a conceptual unit and the cure is "extract class" followed by "introduce parameter object" or "preserve whole object". Encapsulating public fields is the "encapsulate field" refactoring, which targets visibility rather than the repeated group. Pulling the fields up into a superclass creates inheritance for data reuse instead of substitution, coupling classes that may share no behaviour at all.',
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
      es: 'En la cirugía con escopeta un solo cambio obliga a tocar muchas clases; en el cambio divergente una misma clase se modifica por motivos distintos.',
      en: 'In shotgun surgery a single change forces edits in many classes; in divergent change one class is modified for unrelated reasons.',
    },
    distractors: [
      {
        es: 'La cirugía con escopeta afecta a varias capas técnicas y el cambio divergente se limita siempre a la capa de dominio.',
        en: 'Shotgun surgery affects several technical layers while divergent change is always confined to the domain layer.',
      },
      {
        es: 'La cirugía con escopeta aparece por código duplicado y el cambio divergente por una jerarquía de herencia mal planteada.',
        en: 'Shotgun surgery comes from duplicated code and divergent change from a badly designed inheritance hierarchy.',
      },
    ],
    explanation: {
      es: 'Son olores simétricos y cada uno tiene su cura: la cirugía con escopeta se resuelve moviendo el comportamiento disperso hacia un único módulo con "mover función" o "combinar funciones en clase", y el cambio divergente se resuelve partiendo la clase con "extraer clase". Las capas técnicas no definen el olor: una cirugía con escopeta puede ocurrir dentro de una sola capa. Y aunque la duplicación agrava el problema, la causa real es que un motivo de cambio no tiene un único lugar donde vivir, que es la lectura práctica del principio de responsabilidad única.',
      en: 'They are symmetric smells and each has its own cure: shotgun surgery is fixed by moving the scattered behaviour into one module with "move function" or "combine functions into class", and divergent change is fixed by splitting the class with "extract class". Technical layers do not define the smell: shotgun surgery can happen entirely inside one layer. And although duplication makes it worse, the real cause is that a reason to change has no single place to live, which is the practical reading of the single responsibility principle.',
    },
  },
  {
    id: 'th-clean-05',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué es la generalidad especulativa y por qué se considera un olor de código?',
      en: 'What is speculative generality and why is it considered a code smell?',
    },
    answer: {
      es: 'Es abstracción añadida para necesidades futuras que nunca llegan, y se paga con complejidad e indirección que nadie usa.',
      en: 'It is abstraction added for future needs that never arrive, paid for with complexity and indirection that nobody uses.',
    },
    distractors: [
      {
        es: 'Es abusar de los genéricos y los parámetros de tipo, lo que impide al compilador verificar los tipos concretos.',
        en: 'It is overusing generics and type parameters, which prevents the compiler from checking the concrete types.',
      },
      {
        es: 'Es tomar decisiones de diseño pensando en el rendimiento antes de haberlo medido en un escenario real.',
        en: 'It is making design decisions aimed at performance before measuring it in a real scenario.',
      },
    ],
    explanation: {
      es: 'El síntoma típico es una interfaz con una sola implementación, una clase abstracta sin segunda subclase o un parámetro que siempre recibe el mismo valor; se limpia con "colapsar jerarquía", "integrar función" y "eliminar parámetro muerto". Los genéricos bien usados no pierden verificación de tipos, salvo el caso concreto del borrado de tipos en Java, que es otro tema. Anticipar el rendimiento sin medirlo es optimización prematura: comparte la actitud especulativa pero es un problema distinto, y ambos se combaten con la disciplina YAGNI.',
      en: 'The typical symptom is an interface with a single implementation, an abstract class with no second subclass, or a parameter that always receives the same value; it is cleaned up with "collapse hierarchy", "inline function" and "remove dead parameter". Generics used properly do not lose type checking, aside from the specific case of type erasure in Java, which is another topic. Anticipating performance without measuring it is premature optimisation: it shares the speculative attitude but is a different problem, and both are countered with the YAGNI discipline.',
    },
  },
  {
    id: 'th-clean-06',
    topic: 'Codigo limpio',
    prompt: {
      es: 'Se dice que los comentarios son "desodorante" para el mal olor del código. ¿Cuándo aporta valor un comentario?',
      en: 'Comments are said to be "deodorant" for bad code smells. When does a comment actually add value?',
    },
    answer: {
      es: 'Cuando explica el porqué de una decisión no evidente, como una restricción legal o un rodeo ante un fallo de terceros.',
      en: 'When it explains the why behind a non-obvious decision, such as a legal constraint or a workaround for a third-party bug.',
    },
    distractors: [
      {
        es: 'Cuando describe paso a paso lo que hace un algoritmo complejo, para que el lector no tenga que descifrarlo.',
        en: 'When it describes step by step what a complex algorithm does, so the reader does not have to decipher it.',
      },
      {
        es: 'Cuando documenta cada método de la clase con sus parámetros y su valor de retorno, incluidos los privados.',
        en: 'When it documents every method of the class with its parameters and return value, private ones included.',
      },
    ],
    explanation: {
      es: 'La metáfora del desodorante de Fowler apunta justo a la segunda opción: si necesitas un comentario para explicar qué hace un bloque, ese comentario es candidato a convertirse en el nombre de un método extraído, y el código queda autoexplicativo. La documentación de contrato tipo Javadoc sí es útil en una API pública o una librería, pero comentar métodos privados envejece mal y se desincroniza con el código. El porqué, en cambio, no puede deducirse leyendo las instrucciones y por eso es el único que merece un comentario permanente.',
      en: 'The deodorant metaphor from Fowler points exactly at the second option: if you need a comment to explain what a block does, that comment is a candidate to become the name of an extracted method, leaving the code self-explanatory. Contract documentation such as Javadoc is useful on a public API or a library, but commenting private methods ages badly and drifts out of sync with the code. The why, by contrast, cannot be deduced by reading the statements, and that is the only kind worth a permanent comment.',
    },
  },
  {
    id: 'th-clean-07',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué se gana al reemplazar condicionales anidados por cláusulas de guarda?',
      en: 'What do you gain by replacing nested conditionals with guard clauses?',
    },
    answer: {
      es: 'Que los casos excepcionales salen al inicio y el camino principal queda sin anidamiento, con menos contexto que sostener al leer.',
      en: 'The exceptional cases exit early and the main path is left unnested, with less context to hold while reading.',
    },
    distractors: [
      {
        es: 'Que se reduce el número de rutas de ejecución del método y por tanto baja su complejidad ciclomática.',
        en: 'It reduces the number of execution paths in the method and therefore lowers its cyclomatic complexity.',
      },
      {
        es: 'Que se mantiene un único punto de retorno al final, lo que facilita depurar y liberar los recursos abiertos.',
        en: 'It keeps a single exit point at the end, which makes debugging and releasing open resources easier.',
      },
    ],
    explanation: {
      es: 'La refactorización se llama "reemplazar condicional anidado por cláusulas de guarda" y su beneficio es de legibilidad: separa lo excepcional de lo normal. La complejidad ciclomática no cambia, porque el número de decisiones es el mismo; lo que baja es la complejidad cognitiva, la métrica de SonarSource que penaliza el anidamiento. La regla del punto de retorno único procede de lenguajes con liberación manual de memoria y hoy resulta innecesaria, porque finally y try-with-resources garantizan la limpieza con varios retornos.',
      en: 'The refactoring is called "replace nested conditional with guard clauses" and its benefit is readability: it separates the exceptional from the normal. Cyclomatic complexity does not change, because the number of decisions is identical; what drops is cognitive complexity, the SonarSource metric that penalises nesting. The single exit point rule comes from languages with manual memory management and is unnecessary today, because finally and try-with-resources guarantee cleanup even with several returns.',
    },
  },
  {
    id: 'th-clean-08',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Cuál es el criterio principal para decidir que un bloque debe extraerse a su propio método?',
      en: 'What is the main criterion for deciding that a block should be extracted into its own method?',
    },
    answer: {
      es: 'Que el cuerpo mezcla niveles de abstracción, y ese bloque puede nombrarse por su intención ocultando el detalle de cómo lo hace.',
      en: 'That the body mixes levels of abstraction, and the block can be named by its intent while hiding the detail of how it works.',
    },
    distractors: [
      {
        es: 'Que el método supera las veinte líneas, umbral a partir del cual conviene dividirlo en piezas menores.',
        en: 'That the method goes beyond twenty lines, the threshold from which it should be split into smaller pieces.',
      },
      {
        es: 'Que el bloque aparece repetido en otro punto del código, la razón que justifica crear un método reutilizable.',
        en: 'That the block appears duplicated somewhere else, the reason that justifies creating a reusable method.',
      },
    ],
    explanation: {
      es: 'La heurística de Fowler es directa: si te apetece escribir un comentario para explicar un bloque, extráelo y usa ese comentario como nombre; así cada método lee como una secuencia de pasos del mismo nivel. La longitud es un síntoma correlacionado, no el criterio, y un umbral fijo lleva a partir métodos coherentes solo para cumplir la regla. La duplicación es una razón válida para extraer, pero no la única: un método de diez líneas sin repetición puede necesitar la extracción igualmente si mezcla el qué con el cómo.',
      en: 'The Fowler heuristic is direct: if you feel like writing a comment to explain a block, extract it and use that comment as the name; then every method reads as a sequence of steps at the same level. Length is a correlated symptom, not the criterion, and a fixed threshold leads to splitting coherent methods just to satisfy the rule. Duplication is a valid reason to extract, but not the only one: a ten-line method with no repetition may still need extraction if it mixes the what with the how.',
    },
  },
  {
    id: 'th-clean-09',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Cuándo conviene reemplazar un condicional por polimorfismo?',
      en: 'When is it worth replacing a conditional with polymorphism?',
    },
    answer: {
      es: 'Cuando el mismo switch sobre un tipo se repite en varios métodos y cada rama representa un comportamiento completo y estable.',
      en: 'When the same switch over a type is repeated in several methods and each branch represents a complete, stable behaviour.',
    },
    distractors: [
      {
        es: 'Siempre que aparezca un switch, porque cualquier condicional sobre el tipo de un objeto es un olor que el polimorfismo elimina.',
        en: 'Whenever a switch shows up, because any conditional over the type of an object is a smell that polymorphism removes.',
      },
      {
        es: 'Cuando el condicional tiene muchas ramas, ya que el despacho dinámico resuelve en tiempo constante y la cadena de comparaciones no.',
        en: 'When the conditional has many branches, since dynamic dispatch resolves in constant time while a comparison chain does not.',
      },
    ],
    explanation: {
      es: 'El olor que justifica la refactorización son los "switch repetidos": el mismo criterio de decisión duplicado en varios sitios, de modo que añadir un caso obliga a tocarlos todos, lo que es cirugía con escopeta. Un condicional local y único suele ser más claro que crear una jerarquía, y convertirlo en clases añade indirección sin beneficio. El argumento de rendimiento es engañoso porque el compilador genera tablas de salto para un switch denso y la diferencia es irrelevante; cuando la variación es de algoritmo y no de tipo, la alternativa es Strategy o un mapa de manejadores.',
      en: 'The smell that justifies the refactoring is "repeated switches": the same decision criterion duplicated in several places, so adding a case forces you to touch them all, which is shotgun surgery. A single local conditional is usually clearer than creating a hierarchy, and turning it into classes adds indirection with no benefit. The performance argument is misleading because the compiler emits jump tables for a dense switch and the difference is irrelevant; when the variation is of algorithm rather than type, the alternative is Strategy or a map of handlers.',
    },
  },
  {
    id: 'th-clean-10',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Por qué se sustituye un número mágico por una constante con nombre?',
      en: 'Why is a magic number replaced with a named constant?',
    },
    answer: {
      es: 'Porque el nombre revela el significado del valor y concentra su modificación en un único punto del código.',
      en: 'Because the name reveals the meaning of the value and concentrates any change in a single point of the code.',
    },
    distractors: [
      {
        es: 'Porque el compilador optimiza mejor una constante final que un literal repetido en distintos métodos de la clase.',
        en: 'Because the compiler optimises a final constant better than a literal repeated across different methods of the class.',
      },
      {
        es: 'Porque todo literal debe salir del código hacia la configuración externa, para poder ajustarlo sin recompilar.',
        en: 'Because every literal should leave the code for external configuration, so it can be tuned without recompiling.',
      },
    ],
    explanation: {
      es: 'La refactorización "reemplazar literal mágico" ataca dos problemas a la vez: la falta de intención y la dispersión, ya que el mismo 0.21 puede significar un tipo impositivo en un sitio y un porcentaje de descuento en otro. El argumento del compilador es falso: en Java una constante final estática se integra en el bytecode igual que el literal, así que la ganancia no es de rendimiento. Y externalizar a configuración es otra decisión, guiada por si el valor cambia entre entornos; una constante de dominio como los días de la semana no debe vivir en un archivo de propiedades.',
      en: 'The "replace magic literal" refactoring attacks two problems at once: lack of intent and scattering, since the same 0.21 may mean a tax rate in one place and a discount percentage in another. The compiler argument is false: in Java a static final constant is inlined into the bytecode just like the literal, so the gain is not about performance. And externalising to configuration is a different decision, driven by whether the value changes between environments; a domain constant such as the number of days in a week does not belong in a properties file.',
    },
  },
  {
    id: 'th-clean-11',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Por qué un parámetro booleano que decide el flujo interno de un método se considera un olor de código?',
      en: 'Why is a boolean parameter that decides the internal flow of a method considered a code smell?',
    },
    answer: {
      es: 'Porque el método hace en realidad dos cosas distintas, y conviene partirlo en dos métodos con nombres que expresen cada intención.',
      en: 'Because the method really does two different things, and it should be split into two methods whose names express each intent.',
    },
    distractors: [
      {
        es: 'Porque en la llamada el valor no dice nada, y basta con reemplazarlo por un enum o un parámetro con nombre para que se lea bien.',
        en: 'Because the value says nothing at the call site, and replacing it with an enum or a named parameter is enough to make it read well.',
      },
      {
        es: 'Porque un booleano solo admite dos casos, así que un tercer comportamiento futuro obligará a cambiar la firma del método.',
        en: 'Because a boolean allows only two cases, so a third future behaviour will force a change to the method signature.',
      },
    ],
    explanation: {
      es: 'La cura canónica es "eliminar el argumento bandera", también descrita como reemplazar el parámetro por métodos explícitos: en lugar de reservar(cliente, true) quedan reservarConDeposito(cliente) y reservarSinDeposito(cliente). El enum mejora mucho la legibilidad de la llamada y es un paso intermedio razonable, pero el cuerpo sigue teniendo dos caminos y dos responsabilidades mezcladas. La falta de extensibilidad es una consecuencia secundaria, no el motivo: el problema existe aunque nunca aparezca un tercer caso.',
      en: 'The canonical cure is "remove flag argument", also described as replacing the parameter with explicit methods: instead of book(customer, true) you get bookWithDeposit(customer) and bookWithoutDeposit(customer). The enum greatly improves readability at the call site and is a reasonable intermediate step, but the body still carries two paths and two mixed responsibilities. Lack of extensibility is a secondary consequence, not the reason: the problem exists even if a third case never appears.',
    },
  },
  {
    id: 'th-clean-12',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué es el acoplamiento temporal en el diseño de una clase y cómo se elimina?',
      en: 'What is temporal coupling in the design of a class and how is it removed?',
    },
    answer: {
      es: 'Es que ciertos métodos deban llamarse en un orden concreto; se elimina diseñando la API para que el orden incorrecto sea imposible de expresar.',
      en: 'It is that certain methods must be called in a specific order; it is removed by designing the API so the wrong order cannot even be expressed.',
    },
    distractors: [
      {
        es: 'Es que una clase dependa del reloj del sistema para calcular fechas; se elimina inyectando un proveedor de tiempo sustituible.',
        en: 'It is that a class depends on the system clock to compute dates; it is removed by injecting a replaceable time provider.',
      },
      {
        es: 'Es que dos componentes se comuniquen de forma síncrona; se elimina publicando un evento para que no dependan del mismo instante.',
        en: 'It is that two components communicate synchronously; it is removed by publishing an event so they do not depend on the same instant.',
      },
    ],
    explanation: {
      es: 'El síntoma clásico es un objeto con configurar, luego conectar y luego ejecutar, donde saltarse un paso lanza una excepción en ejecución en lugar de fallar al compilar; la solución es dejar el objeto válido desde el constructor, fusionar los pasos en una sola operación o usar un builder por etapas que solo exponga el siguiente método legal. Inyectar un Clock es una técnica real, pero resuelve la testabilidad del tiempo, que es otro problema. Y desacoplar en el tiempo mediante mensajería es una decisión de integración entre servicios, no el olor que se describe dentro de una clase.',
      en: 'The classic symptom is an object with configure, then connect, then execute, where skipping a step throws at runtime instead of failing to compile; the fix is to leave the object valid from the constructor, merge the steps into one operation, or use a stepwise builder that only exposes the next legal method. Injecting a Clock is a real technique, but it solves testability of time, which is another problem. And decoupling in time through messaging is an integration decision between services, not the smell described inside a single class.',
    },
  },
  {
    id: 'th-clean-13',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Por qué se desaconsejan las notaciones codificadas en los nombres, como el prefijo húngaro o el sufijo Impl?',
      en: 'Why are encoded notations in names, such as Hungarian prefixes or the Impl suffix, discouraged?',
    },
    answer: {
      es: 'Porque codifican información que el tipo y el entorno ya ofrecen, y quedan desactualizadas en cuanto el código cambia.',
      en: 'Because they encode information the type and the tooling already provide, and they go stale as soon as the code changes.',
    },
    distractors: [
      {
        es: 'Porque los nombres largos ralentizan la lectura, y conviene abreviarlos hasta el mínimo que siga siendo comprensible.',
        en: 'Because long names slow reading down, and they should be shortened to the minimum that is still understandable.',
      },
      {
        es: 'Porque la convención oficial de Java prohíbe los prefijos en campos y variables locales, y las herramientas marcan el incumplimiento.',
        en: 'Because the official Java convention forbids prefixes on fields and local variables, and tools flag the violation.',
      },
    ],
    explanation: {
      es: 'La notación húngara nació en lenguajes sin tipado fuerte y con editores sin información semántica; hoy un strNombre miente en cuanto el campo pasa a ser un objeto de valor. El sufijo Impl delata además que no se ha encontrado un nombre real para la implementación: JdbcUserRepository o InMemoryUserRepository dicen qué estrategia usan. El tamaño del nombre debe ser proporcional al alcance, así que abreviar siempre no es la regla, y la guía de estilo es una recomendación, no una prohibición del lenguaje.',
      en: 'Hungarian notation was born in weakly typed languages with editors lacking semantic information; today a strName lies the moment the field becomes a value object. The Impl suffix also reveals that no real name was found for the implementation: JdbcUserRepository or InMemoryUserRepository say which strategy they use. Name length should be proportional to scope, so always abbreviating is not the rule, and the style guide is a recommendation rather than a language prohibition.',
    },
  },
  {
    id: 'th-clean-14',
    topic: 'Codigo limpio',
    prompt: {
      es: 'Encuentras un bloque comentado desde hace meses y un método al que ya nadie llama. ¿Qué corresponde hacer?',
      en: 'You find a block commented out months ago and a method nobody calls any more. What is the right thing to do?',
    },
    answer: {
      es: 'Borrarlos, porque el control de versiones conserva la historia y su presencia solo genera ruido y dudas al lector.',
      en: 'Delete them, because version control keeps the history and their presence only creates noise and doubt for the reader.',
    },
    distractors: [
      {
        es: 'Marcarlos como obsoletos con una anotación y una nota de la fecha, para que quien los necesite pueda recuperarlos.',
        en: 'Mark them as obsolete with an annotation and a dated note, so whoever needs them can recover them.',
      },
      {
        es: 'Dejarlos detrás de un interruptor desactivado, de modo que puedan habilitarse sin reescribirlos si el requisito vuelve.',
        en: 'Keep them behind a disabled switch, so they can be turned on without rewriting them if the requirement comes back.',
      },
    ],
    explanation: {
      es: 'El código comentado envenena la lectura porque nadie sabe si está pendiente, roto o simplemente olvidado, y basta un git log o un git revert para recuperarlo si hiciera falta; las inspecciones del IDE y reglas de SonarQube lo detectan automáticamente. La anotación de obsolescencia está pensada para API pública que todavía se invoca y necesita un periodo de migración, no para código muerto interno. Y un interruptor permanente es deuda de banderas: multiplica las combinaciones a probar y suele quedarse activo para siempre.',
      en: 'Commented-out code poisons reading because nobody knows whether it is pending, broken or simply forgotten, and a git log or git revert is enough to bring it back if needed; IDE inspections and SonarQube rules detect it automatically. The deprecation annotation is meant for public API that is still called and needs a migration window, not for internal dead code. And a permanent switch is toggle debt: it multiplies the combinations to test and usually stays there forever.',
    },
  },
  {
    id: 'th-clean-15',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué distingue el olor de intermediario innecesario del de intimidad inapropiada?',
      en: 'What distinguishes the middle man smell from inappropriate intimacy?',
    },
    answer: {
      es: 'El intermediario se limita a delegar casi todos sus métodos en otro objeto; la intimidad inapropiada es que dos clases manipulen los detalles internos de la otra.',
      en: 'The middle man merely delegates almost every method to another object; inappropriate intimacy is two classes handling the internal details of each other.',
    },
    distractors: [
      {
        es: 'El intermediario aparece cuando el código encadena llamadas a través de varios objetos para llegar al dato que necesita.',
        en: 'The middle man appears when code chains calls through several objects to reach the data it needs.',
      },
      {
        es: 'La intimidad inapropiada aparece cuando dos clases se referencian mutuamente y forman un ciclo de dependencias.',
        en: 'Inappropriate intimacy appears when two classes reference each other and form a dependency cycle.',
      },
    ],
    explanation: {
      es: 'Las curas también son distintas: el intermediario se resuelve con "eliminar intermediario" o "integrar clase" dejando que el cliente hable directamente con el colaborador, mientras que la intimidad inapropiada se corrige moviendo métodos y campos, extrayendo la parte compartida a una clase nueva o cambiando herencia por delegación. Encadenar llamadas como pedido.getCliente().getDireccion().getCiudad() es el olor de cadena de mensajes, asociado a la ley de Demeter. El ciclo de dependencias es un problema estructural que puede existir entre clases que respetan perfectamente su encapsulamiento.',
      en: 'The cures differ as well: the middle man is fixed with "remove middle man" or "inline class", letting the client talk to the collaborator directly, while inappropriate intimacy is fixed by moving methods and fields, extracting the shared part into a new class, or replacing inheritance with delegation. Chaining calls like order.getCustomer().getAddress().getCity() is the message chain smell, associated with the law of Demeter. A dependency cycle is a structural problem that can exist between classes respecting their encapsulation perfectly.',
    },
  },
  {
    id: 'th-clean-16',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué mide la complejidad ciclomática y cómo debe usarse como umbral de calidad?',
      en: 'What does cyclomatic complexity measure and how should it be used as a quality threshold?',
    },
    answer: {
      es: 'Cuenta las rutas independientes de un método, y sirve como aviso para revisarlo y como número mínimo de casos de prueba que lo cubran.',
      en: 'It counts the independent paths through a method, and works as a warning to review it and as the minimum number of test cases covering it.',
    },
    distractors: [
      {
        es: 'Mide el esfuerzo de comprensión del método, penalizando el anidamiento profundo y las condiciones lógicas acumuladas.',
        en: 'It measures the effort to understand the method, penalising deep nesting and accumulated logical conditions.',
      },
      {
        es: 'Mide el acoplamiento del método, contando cuántas clases distintas invoca para completar su trabajo.',
        en: 'It measures the coupling of the method, counting how many distinct classes it invokes to complete its work.',
      },
    ],
    explanation: {
      es: 'La métrica de McCabe se calcula como aristas menos nodos más dos por componente, y en la práctica equivale al número de decisiones más uno; por eso da la cota inferior de pruebas necesarias para cubrir todas las ramas. Lo que describe la segunda opción es la complejidad cognitiva de SonarSource, creada precisamente porque la ciclomática trata igual un switch plano de diez casos y tres if anidados. Contar dependencias salientes es el acoplamiento eferente de las métricas de Martin. Un umbral típico de diez es una alarma para inspeccionar, nunca una prohibición automática.',
      en: 'The McCabe metric is computed as edges minus nodes plus two per component, and in practice equals the number of decisions plus one; that is why it gives the lower bound of tests needed to cover every branch. What the second option describes is the SonarSource cognitive complexity, created precisely because cyclomatic complexity treats a flat ten-case switch and three nested ifs the same. Counting outgoing dependencies is efferent coupling from the Martin metrics. A typical threshold of ten is an alarm to inspect, never an automatic prohibition.',
    },
  },
  {
    id: 'th-clean-17',
    topic: 'Codigo limpio',
    prompt: {
      es: 'La regla del boy scout pide dejar el código mejor de como se encontró. ¿Por qué exige tener pruebas antes de refactorizar?',
      en: 'The boy scout rule asks you to leave the code better than you found it. Why does it require having tests before refactoring?',
    },
    answer: {
      es: 'Porque refactorizar significa preservar el comportamiento observable, y solo una red de pruebas permite confirmar que nada cambió.',
      en: 'Because refactoring means preserving observable behaviour, and only a safety net of tests can confirm that nothing changed.',
    },
    distractors: [
      {
        es: 'Porque las pruebas escritas antes del código definen el diseño esperado y guían la estructura que debe tener la solución.',
        en: 'Because tests written before the code define the expected design and drive the structure the solution should have.',
      },
      {
        es: 'Porque sin pruebas no se puede comparar la cobertura antes y después, que es el indicador del éxito de la refactorización.',
        en: 'Because without tests you cannot compare coverage before and after, which is the indicator of a successful refactoring.',
      },
    ],
    explanation: {
      es: 'Michael Feathers define el código heredado como código sin pruebas, y propone escribir primero pruebas de caracterización que fijen el comportamiento actual, aunque sea erróneo, para poder cambiar la estructura en pasos pequeños y verificables. Guiar el diseño escribiendo la prueba primero es TDD, una práctica valiosa pero orientada a crear comportamiento nuevo, no a conservarlo. Y la cobertura es un indicador de riesgo, no un objetivo: una refactorización correcta puede dejarla exactamente igual.',
      en: 'Michael Feathers defines legacy code as code without tests, and proposes writing characterisation tests first that pin down the current behaviour, even when it is wrong, so the structure can be changed in small verifiable steps. Driving the design by writing the test first is TDD, a valuable practice but aimed at creating new behaviour rather than preserving it. And coverage is a risk indicator, not a goal: a correct refactoring can leave it exactly the same.',
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
      es: 'Refactorizar cambia la estructura interna sin alterar el comportamiento observable; reestructurar puede cambiar contratos y arquitectura, y reescribir parte de cero.',
      en: 'Refactoring changes the internal structure without altering observable behaviour; restructuring may change contracts and architecture, and rewriting starts from scratch.',
    },
    distractors: [
      {
        es: 'Refactorizar se aplica a un método y reestructurar a un módulo entero: la diferencia es la escala del cambio.',
        en: 'Refactoring applies to a method and restructuring to a whole module: the difference is the scale of the change.',
      },
      {
        es: 'Refactorizar incluye corregir por el camino los errores que se encuentren, ya que el objetivo es mejorar la calidad del código tocado.',
        en: 'Refactoring includes fixing the bugs found along the way, since the goal is improving the quality of the touched code.',
      },
    ],
    explanation: {
      es: 'La definición estricta de Fowler es la clave: refactorizar es un subconjunto de la reestructuración en el que el comportamiento observable se mantiene, lo que permite hacerlo en pasos pequeños y con confianza. Por eso un arreglo de error debe ir en un commit aparte: mezclar ambas cosas impide saber si un fallo de las pruebas viene del cambio de estructura o del cambio de conducta. La escala no es el criterio, ya que se puede refactorizar un sistema entero, y la reescritura completa es la opción más arriesgada porque descarta el conocimiento acumulado en las correcciones del código original.',
      en: 'The strict Fowler definition is the key: refactoring is a subset of restructuring in which observable behaviour is preserved, which is what makes small confident steps possible. That is why a bug fix belongs in a separate commit: mixing the two makes it impossible to tell whether a failing test comes from the structural change or the behavioural one. Scale is not the criterion, since a whole system can be refactored, and a full rewrite is the riskiest option because it discards the knowledge accumulated in the fixes of the original code.',
    },
  },
  {
    id: 'th-clean-19',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿En qué consiste la estrategia de la higuera estranguladora para reemplazar un módulo heredado?',
      en: 'What does the strangler fig strategy consist of when replacing a legacy module?',
    },
    answer: {
      es: 'En interceptar las peticiones y redirigir funcionalidad por funcionalidad al módulo nuevo, hasta que el heredado queda sin tráfico y se retira.',
      en: 'Intercepting requests and redirecting feature by feature to the new module, until the legacy one receives no traffic and is retired.',
    },
    distractors: [
      {
        es: 'En congelar el sistema heredado y construir el nuevo en paralelo, migrando a los usuarios cuando alcance la paridad funcional.',
        en: 'Freezing the legacy system and building the new one in parallel, migrating users once it reaches functional parity.',
      },
      {
        es: 'En envolver el sistema heredado tras una fachada que traduzca su modelo, para que el resto del sistema no herede sus conceptos.',
        en: 'Wrapping the legacy system behind a facade that translates its model, so the rest of the system does not inherit its concepts.',
      },
    ],
    explanation: {
      es: 'La metáfora de Fowler exige un punto de intercepción, normalmente una fachada, un proxy inverso o una bandera de funcionalidad, que decide qué peticiones atiende cada lado; el valor está en entregar en incrementos pequeños y poder revertir una funcionalidad concreta sin volver atrás todo el proyecto. Construir en paralelo hasta la paridad es exactamente el reemplazo de golpe que esta estrategia intenta evitar, con meses sin entregar valor y un riesgo enorme el día del cambio. La fachada traductora es la capa anticorrupción, un patrón complementario que suele usarse durante el estrangulamiento pero no describe la migración en sí.',
      en: 'The Fowler metaphor requires an interception point, usually a facade, a reverse proxy or a feature flag, deciding which requests each side serves; the value lies in delivering in small increments and being able to roll a single feature back without reverting the whole project. Building in parallel until parity is exactly the big bang replacement this strategy tries to avoid, with months of no delivered value and enormous risk on switchover day. The translating facade is the anticorruption layer, a complementary pattern often used during strangling but not a description of the migration itself.',
    },
  },
  {
    id: 'th-clean-20',
    topic: 'Codigo limpio',
    prompt: {
      es: '¿Qué criterio guía la elección entre lanzar excepciones, devolver códigos de error o usar un tipo Result?',
      en: 'Which criterion guides the choice between throwing exceptions, returning error codes or using a Result type?',
    },
    answer: {
      es: 'Reservar las excepciones para lo inesperado que nadie puede tratar en el punto de llamada, y modelar con Result los fallos previstos que el llamador debe decidir.',
      en: 'Reserve exceptions for the unexpected that nobody can handle at the call site, and model expected failures the caller must decide upon with a Result.',
    },
    distractors: [
      {
        es: 'Usar siempre excepciones, porque los códigos de error obligan a comprobaciones que ensucian el flujo y se pueden ignorar en silencio.',
        en: 'Always use exceptions, because error codes force checks that clutter the flow and can be silently ignored.',
      },
      {
        es: 'Usar siempre un tipo Result, porque hace visible el fallo en la firma y evita el coste de construir la traza de pila.',
        en: 'Always use a Result type, because it makes the failure visible in the signature and avoids the cost of building the stack trace.',
      },
    ],
    explanation: {
      es: 'El eje de decisión es si el fallo forma parte del dominio: una validación de formulario o un saldo insuficiente son resultados esperados y merecen estar en el tipo de retorno, mientras que una base de datos caída es excepcional y debe propagarse hasta un manejador global como un ControllerAdvice de Spring. El primer distractor cita correctamente el consejo de Clean Code de preferir excepciones a códigos de error, pero lo convierte en una regla absoluta que acaba usando excepciones para el flujo normal, con el coste de fillInStackTrace y un control de flujo oculto. El segundo aporta datos ciertos sobre Either o Try de Vavr, aunque envolver todo en Result obliga a propagar el fallo a mano por cada capa y oscurece los errores realmente irrecuperables.',
      en: 'The decision axis is whether the failure belongs to the domain: a form validation or an insufficient balance are expected outcomes and deserve a place in the return type, while a database being down is exceptional and should propagate to a global handler such as a Spring ControllerAdvice. The first distractor correctly quotes the Clean Code advice of preferring exceptions to error codes, but turns it into an absolute rule that ends up using exceptions for the normal flow, paying for fillInStackTrace and hiding control flow. The second states true facts about Either or Try from Vavr, yet wrapping everything in a Result forces manual propagation of the failure through every layer and obscures the genuinely unrecoverable errors.',
    },
  },
];
