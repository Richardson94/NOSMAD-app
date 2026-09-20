import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_TESTING_ADVANCED_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-test2-01',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: '¿Cuál es el propósito de estructurar una prueba con Arrange, Act y Assert o con Given, When y Then?',
      en: 'What is the purpose of structuring a test with Arrange, Act and Assert or with Given, When and Then?',
    },
    answer: {
      es: 'Separar preparación, ejecución y verificación para que la prueba se lea como una especificación y se distinga de un vistazo qué provocó el fallo.',
      en: 'Separate setup, execution and verification so the test reads like a specification and it is obvious at a glance what caused the failure.',
    },
    distractors: [
      {
        es: 'Garantizar que cada prueba tenga una única aserción, ubicada siempre al final del bloque de verificación.',
        en: 'Guarantee that each test has a single assertion, always placed at the end of the verification block.',
      },
      {
        es: 'Traducir la sintaxis Gherkin al código, por lo que solo aplica a las pruebas de aceptación automatizadas con Cucumber.',
        en: 'Translate Gherkin syntax into code, so it only applies to acceptance tests automated with Cucumber.',
      },
    ],
    explanation: {
      es: 'El valor de la estructura es hacer explícito el contexto, la acción única bajo prueba y el resultado esperado; si aparece un segundo bloque de acción es señal de que hay dos pruebas mezcladas. Varias aserciones son perfectamente válidas mientras describan el mismo comportamiento, así que no se trata de una regla de conteo. Y aunque Given, When y Then vengan del lenguaje Gherkin, la misma disciplina se aplica en una prueba unitaria de JUnit o Jasmine sin ninguna herramienta de BDD.',
      en: 'The value of the structure is making the context, the single action under test and the expected outcome explicit; if a second action block appears, that signals two tests tangled together. Several assertions are perfectly valid as long as they describe the same behaviour, so it is not a counting rule. And although Given, When and Then come from the Gherkin language, the same discipline applies in a plain JUnit or Jasmine unit test with no BDD tooling at all.',
    },
  },
  {
    id: 'th-test2-02',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: '¿Qué convención de nombres hace que una prueba fallida se entienda sin abrir su código?',
      en: 'What naming convention makes a failing test understandable without opening its code?',
    },
    answer: {
      es: 'Un nombre que describa el escenario y el resultado esperado, como deberiaRechazarElPagoCuandoLaTarjetaEstaVencida.',
      en: 'A name describing the scenario and the expected outcome, such as shouldRejectThePaymentWhenTheCardIsExpired.',
    },
    distractors: [
      {
        es: 'Un nombre que empiece con test seguido del método bajo prueba, como testProcesarPago.',
        en: 'A name starting with test followed by the method under test, such as testProcessPayment.',
      },
      {
        es: 'Un nombre que identifique la clase y el número de caso para rastrearlo en la matriz de requisitos, como PagoServiceTest01.',
        en: 'A name identifying the class and the case number so it can be traced in the requirements matrix, such as PaymentServiceTest01.',
      },
    ],
    explanation: {
      es: 'El nombre es lo único que aparece en el reporte del pipeline, así que debe comunicar la regla de negocio violada, no la mecánica de la implementación. El prefijo test era obligatorio en JUnit 3, donde el runner descubría las pruebas por reflexión sobre el nombre; desde JUnit 4 lo hace la anotación Test y el prefijo es ruido. Nombrar por número obliga a consultar un documento externo, aunque JUnit 5 permite acompañarlo con DisplayName para escribir la frase completa con espacios y acentos.',
      en: 'The name is the only thing showing up in the pipeline report, so it must communicate the violated business rule, not the mechanics of the implementation. The test prefix was mandatory in JUnit 3, where the runner discovered tests by reflecting on the name; since JUnit 4 the Test annotation does that and the prefix is noise. Naming by number forces you to consult an external document, although JUnit 5 lets you pair it with DisplayName to write the full sentence with spaces and accents.',
    },
  },
  {
    id: 'th-test2-03',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: '¿Cuáles son las causas raíz típicas de una prueba intermitente y cómo se debe tratar?',
      en: 'What are the typical root causes of a flaky test and how should it be handled?',
    },
    answer: {
      es: 'Suelen venir del tiempo, del orden de ejecución, de la concurrencia o de datos compartidos; se aísla la prueba y se corrige la causa en lugar de reintentar a ciegas.',
      en: 'They usually come from time, execution order, concurrency or shared data; you isolate the test and fix the cause instead of blindly retrying.',
    },
    distractors: [
      {
        es: 'Lo correcto es activar reintentos automáticos en el runner hasta que el equipo tenga tiempo de investigarla a fondo.',
        en: 'The right move is enabling automatic retries in the runner until the team has time to investigate it properly.',
      },
      {
        es: 'Casi siempre se deben a esperas fijas demasiado cortas, así que aumentar el tiempo de espera resuelve la causa raíz.',
        en: 'They are almost always caused by fixed waits that are too short, so increasing the timeout resolves the root cause.',
      },
    ],
    explanation: {
      es: 'Una prueba intermitente suele estar delatando una condición de carrera o una dependencia oculta que también existe en producción, por eso el reintento automático no la arregla sino que oculta el defecto y erosiona la confianza en la suite. Subir el tiempo de espera solo alarga el pipeline y vuelve a fallar bajo carga: la solución es sustituir los Thread.sleep por esperas explícitas basadas en condición, como Awaitility en Java o WebDriverWait en Selenium. La cuarentena es válida como medida temporal con fecha límite, nunca como destino final.',
      en: 'A flaky test is usually exposing a race condition or a hidden dependency that also exists in production, which is why automatic retries do not fix it but rather hide the defect and erode trust in the suite. Raising the timeout only lengthens the pipeline and fails again under load: the fix is replacing Thread.sleep calls with explicit condition-based waits, such as Awaitility in Java or WebDriverWait in Selenium. Quarantine is valid as a temporary measure with a deadline, never as a final destination.',
    },
  },
  {
    id: 'th-test2-04',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: '¿Qué miden las pruebas de mutación y qué indica el puntaje de mutantes eliminados?',
      en: 'What do mutation tests measure and what does the killed mutant score indicate?',
    },
    answer: {
      es: 'Introducen cambios pequeños en el código de producción y miden qué porcentaje de esos mutantes hace fallar alguna prueba, revelando aserciones débiles o ausentes.',
      en: 'They introduce small changes in production code and measure what percentage of those mutants makes some test fail, revealing weak or missing assertions.',
    },
    distractors: [
      {
        es: 'Generan variantes aleatorias de los datos de entrada para descubrir combinaciones que la suite nunca contempló.',
        en: 'They generate random variants of the input data to discover combinations the suite never considered.',
      },
      {
        es: 'Miden qué porcentaje de ramas ejecutan las pruebas, siendo una versión más estricta de la cobertura de ramas.',
        en: 'They measure what percentage of branches the tests execute, being a stricter version of branch coverage.',
      },
    ],
    explanation: {
      es: 'La herramienta altera el bytecode cambiando por ejemplo un mayor que por un mayor o igual, o devolviendo null, y vuelve a correr las pruebas: un mutante que sobrevive indica código cubierto pero no verificado, que es justo el punto ciego de la cobertura tradicional. El puntaje es mutantes eliminados sobre mutantes generados, y PIT en Java o Stryker en TypeScript son las implementaciones habituales. Mutar la entrada en lugar del código es lo que hacen el fuzzing y las pruebas basadas en propiedades, y la única complicación real de esta técnica son los mutantes equivalentes, que no cambian el comportamiento y nunca pueden eliminarse.',
      en: 'The tool alters the bytecode by, for example, swapping a greater-than for a greater-or-equal or returning null, then reruns the tests: a surviving mutant means code that is covered but not verified, which is exactly the blind spot of traditional coverage. The score is killed mutants over generated mutants, and PIT in Java or Stryker in TypeScript are the usual implementations. Mutating the input instead of the code is what fuzzing and property-based testing do, and the only genuine complication of this technique is equivalent mutants, which do not change behaviour and can never be killed.',
    },
  },
  {
    id: 'th-test2-05',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: '¿En qué se diferencian las pruebas basadas en propiedades de las basadas en ejemplos?',
      en: 'How do property-based tests differ from example-based tests?',
    },
    answer: {
      es: 'En lugar de casos concretos se declara una propiedad que debe cumplirse siempre y el framework genera cientos de entradas buscando un contraejemplo.',
      en: 'Instead of concrete cases you declare a property that must always hold and the framework generates hundreds of inputs looking for a counterexample.',
    },
    distractors: [
      {
        es: 'Se ejecuta el mismo cuerpo de prueba contra una lista fija de entradas y resultados declarados por el desarrollador.',
        en: 'The same test body is executed against a fixed list of inputs and results declared by the developer.',
      },
      {
        es: 'Se verifican invariantes incrustadas como aserciones dentro del código de producción, al estilo del diseño por contrato.',
        en: 'Invariants are verified as assertions embedded in the production code, in the design-by-contract style.',
      },
    ],
    explanation: {
      es: 'La diferencia clave es quién elige los datos: en las basadas en ejemplos los elige el desarrollador y arrastra sus propios sesgos, mientras que el generador explora sistemáticamente casos borde como cero, valores negativos, cadenas vacías o Integer.MAX_VALUE. Cuando encuentra un fallo, la fase de reducción lo simplifica hasta el contraejemplo mínimo reproducible. Declarar una lista fija de datos es una prueba parametrizada, que sigue siendo basada en ejemplos, y las aserciones dentro del código de producción son otra técnica distinta. Herramientas típicas: jqwik en Java y fast-check en TypeScript, con propiedades clásicas como la ida y vuelta de serializar y deserializar.',
      en: 'The key difference is who picks the data: in example-based tests the developer picks it and carries their own biases, whereas the generator systematically explores edge cases such as zero, negatives, empty strings or Integer.MAX_VALUE. When it finds a failure, the shrinking phase reduces it to the minimal reproducible counterexample. Declaring a fixed data list is a parameterised test, which is still example-based, and assertions inside production code are a different technique. Typical tools: jqwik in Java and fast-check in TypeScript, with classic properties such as the round trip of serialise and deserialise.',
    },
  },
  {
    id: 'th-test2-06',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: 'Dentro de la taxonomía de dobles de prueba, ¿qué diferencia a un dummy, un fake y un spy?',
      en: 'Within the test double taxonomy, what differentiates a dummy, a fake and a spy?',
    },
    answer: {
      es: 'El dummy solo rellena un parámetro y nunca se usa, el fake tiene una implementación funcional simplificada y el spy registra las llamadas que recibe para poder consultarlas después.',
      en: 'A dummy only fills a parameter and is never used, a fake has a simplified working implementation and a spy records the calls it receives so they can be inspected later.',
    },
    distractors: [
      {
        es: 'El dummy devuelve valores por defecto, el fake verifica que las interacciones esperadas ocurran y el spy reemplaza por completo a la dependencia real.',
        en: 'A dummy returns default values, a fake verifies that the expected interactions happen and a spy fully replaces the real dependency.',
      },
      {
        es: 'El fake es el doble que genera la librería de forma automática y el spy es la implementación escrita a mano que guarda los argumentos recibidos.',
        en: 'A fake is the double the library generates automatically and a spy is the hand-written implementation that stores the received arguments.',
      },
    ],
    explanation: {
      es: 'La taxonomía de Gerard Meszaros en xUnit Test Patterns distingue cinco tipos: dummy, stub, spy, mock y fake, y los separa por su rol en la prueba, no por cómo se construyen. Devolver valores por defecto es el trabajo de un stub y verificar expectativas es el de un mock, así que esa combinación mezcla tres roles. En Mockito la anotación Spy envuelve una instancia real y delega en ella salvo los métodos que se sobrescriban, y el ejemplo canónico de fake es un repositorio en memoria respaldado por un HashMap.',
      en: 'The Gerard Meszaros taxonomy in xUnit Test Patterns distinguishes five types: dummy, stub, spy, mock and fake, separating them by their role in the test rather than by how they are built. Returning default values is the job of a stub and verifying expectations is the job of a mock, so that combination mixes up three roles. In Mockito the Spy annotation wraps a real instance and delegates to it except for the methods you override, and the canonical fake example is an in-memory repository backed by a HashMap.',
    },
  },
  {
    id: 'th-test2-07',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: 'Para verificar el estado resultante de una operación, ¿qué ventaja tiene un repositorio falso en memoria frente a un mock?',
      en: 'To verify the resulting state of an operation, what advantage does an in-memory fake repository have over a mock?',
    },
    answer: {
      es: 'Permite comprobar el estado final consultando el propio repositorio, mientras que el mock obliga a verificar que se llamó a save con determinados argumentos.',
      en: 'It lets you check the final state by querying the repository itself, whereas the mock forces you to verify that save was called with particular arguments.',
    },
    distractors: [
      {
        es: 'El mock es preferible porque es más rápido de escribir y no arrastra estado entre una prueba y la siguiente.',
        en: 'The mock is preferable because it is faster to write and carries no state from one test to the next.',
      },
      {
        es: 'El fake solo sirve en pruebas de integración, porque necesita una base de datos embebida como H2 para funcionar.',
        en: 'The fake is only useful in integration tests, because it needs an embedded database such as H2 to work.',
      },
    ],
    explanation: {
      es: 'La verificación de estado pregunta qué quedó guardado y sobrevive a los refactores internos, mientras que la verificación de interacción congela la secuencia exacta de llamadas y se rompe si el servicio decide, por ejemplo, agrupar dos guardados en uno. El fake sí acumula estado, pero se recrea en cada prueba y ese costo se amortiza porque se reutiliza en decenas de casos. H2 no es un fake sino una base de datos real, con su propio dialecto SQL que puede divergir del motor de producción: un fake es una clase Java sencilla sobre un mapa, sin infraestructura.',
      en: 'State verification asks what ended up stored and survives internal refactors, while interaction verification freezes the exact call sequence and breaks if the service decides, for instance, to batch two saves into one. The fake does accumulate state, but it is recreated per test and that cost is amortised because it is reused across dozens of cases. H2 is not a fake but a real database, with its own SQL dialect that may diverge from the production engine: a fake is a plain Java class over a map, with no infrastructure.',
    },
  },
  {
    id: 'th-test2-08',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: '¿Cuál es el riesgo principal de abusar de los mocks en una prueba unitaria?',
      en: 'What is the main risk of overusing mocks in a unit test?',
    },
    answer: {
      es: 'La prueba termina verificando cómo se implementó la solución, así que cualquier refactor que conserve el comportamiento la rompe igual.',
      en: 'The test ends up verifying how the solution was implemented, so any refactor that preserves behaviour breaks it anyway.',
    },
    distractors: [
      {
        es: 'La suite se vuelve lenta, porque las librerías de mocks construyen proxies dinámicos por reflexión en cada prueba.',
        en: 'The suite becomes slow, because mocking libraries build dynamic proxies through reflection in every test.',
      },
      {
        es: 'Se pierde cobertura de código, ya que las líneas de las dependencias sustituidas nunca llegan a ejecutarse.',
        en: 'Code coverage drops, since the lines of the replaced dependencies never get executed.',
      },
    ],
    explanation: {
      es: 'Una prueba con verify sobre cada colaborador se convierte en un espejo del código de producción: deja de ser una red de seguridad y pasa a ser un freno, porque hay que reescribirla cada vez que cambia una llamada interna aunque el resultado observable sea idéntico. El costo de los proxies dinámicos es real pero se mide en microsegundos y no es lo que duele. Y la cobertura no se pierde: esas dependencias se cubren en sus propias pruebas. La guía práctica es sustituir solo en los límites arquitectónicos, como clientes HTTP, mensajería o repositorios, y usar objetos reales para la lógica de dominio y los objetos de valor.',
      en: 'A test with verify on every collaborator becomes a mirror of the production code: it stops being a safety net and turns into a brake, because it must be rewritten whenever an internal call changes even if the observable result is identical. The cost of dynamic proxies is real but measured in microseconds and is not what hurts. And coverage is not lost: those dependencies are covered by their own tests. The practical guideline is to substitute only at architectural boundaries, such as HTTP clients, messaging or repositories, and use real objects for domain logic and value objects.',
    },
  },
  {
    id: 'th-test2-09',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: '¿Cuál es el riesgo de compartir un fixture mutable entre varias pruebas en lugar de aislarlas?',
      en: 'What is the risk of sharing a mutable fixture across several tests instead of isolating them?',
    },
    answer: {
      es: 'Crea dependencias ocultas del orden de ejecución, de modo que una prueba falla por culpa de lo que dejó otra y el diagnóstico se vuelve engañoso.',
      en: 'It creates hidden execution-order dependencies, so one test fails because of what another left behind and the diagnosis becomes misleading.',
    },
    distractors: [
      {
        es: 'El riesgo es el tiempo de construcción, por eso conviene reconstruir el fixture completo en cada prueba aunque resulte costoso.',
        en: 'The risk is construction time, which is why the whole fixture should be rebuilt in each test even if it is expensive.',
      },
      {
        es: 'No hay riesgo mientras se use BeforeAll en vez de BeforeEach, porque el runner clona el fixture para cada prueba.',
        en: 'There is no risk as long as BeforeAll is used instead of BeforeEach, because the runner clones the fixture for each test.',
      },
    ],
    explanation: {
      es: 'El síntoma clásico es la prueba que pasa en aislamiento y falla en la suite completa, o al revés cuando el runner aleatoriza el orden; depurar eso cuesta horas porque la causa está en otro archivo. El tiempo de construcción es una preocupación legítima, pero la respuesta no es sacrificar el aislamiento sino usar constructores ligeros o patrones builder. Y ningún runner clona nada: en JUnit 5 el ciclo de vida por defecto PER_METHOD crea una instancia nueva de la clase por cada prueba, mientras que BeforeAll exige un método estático o el modo PER_CLASS, que precisamente comparte una sola instancia. Compartir es seguro solo cuando el fixture es inmutable.',
      en: 'The classic symptom is the test that passes in isolation and fails in the full suite, or the reverse once the runner randomises the order; debugging that costs hours because the cause lives in another file. Construction time is a legitimate concern, but the answer is not sacrificing isolation, it is using lightweight constructors or builder patterns. And no runner clones anything: in JUnit 5 the default PER_METHOD lifecycle creates a new class instance per test, while BeforeAll requires a static method or PER_CLASS mode, which precisely shares a single instance. Sharing is only safe when the fixture is immutable.',
    },
  },
  {
    id: 'th-test2-10',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: '¿Qué aportan las pruebas parametrizadas o guiadas por datos frente a repetir el caso dentro de un bucle?',
      en: 'What do parameterised or data-driven tests add compared to repeating the case inside a loop?',
    },
    answer: {
      es: 'Ejecutan la misma lógica con varios conjuntos de datos y el runner reporta cada caso por separado, así que un fallo no impide evaluar los restantes.',
      en: 'They run the same logic with several data sets and the runner reports each case separately, so one failure does not prevent evaluating the rest.',
    },
    distractors: [
      {
        es: 'Generan automáticamente los datos de entrada a partir de los tipos de los parámetros del método bajo prueba.',
        en: 'They automatically generate the input data from the parameter types of the method under test.',
      },
      {
        es: 'Agrupan todos los casos en una sola ejecución, lo que reduce el tiempo total de la suite al evitar repetir el arranque del contexto.',
        en: 'They group every case into a single execution, cutting total suite time by avoiding repeated context startup.',
      },
    ],
    explanation: {
      es: 'La ventaja está en la granularidad del reporte: con ParameterizedTest y fuentes como CsvSource, ValueSource o MethodSource en JUnit 5, cada invocación aparece como una prueba independiente con sus argumentos en el nombre, mientras que un bucle con aserciones se detiene en el primer fallo y oculta cuántos casos más estaban rotos. Generar los datos a partir de los tipos es propio de las pruebas basadas en propiedades, y agrupar todo en una sola ejecución es justamente el antipatrón del bucle: el ahorro de arranque lo da el contexto compartido de Spring, no la parametrización. La trampa a evitar es meter lógica condicional en la tabla de datos.',
      en: 'The advantage lies in report granularity: with ParameterizedTest and sources such as CsvSource, ValueSource or MethodSource in JUnit 5, each invocation shows up as an independent test with its arguments in the name, whereas a loop full of assertions stops at the first failure and hides how many other cases were broken. Generating data from types belongs to property-based testing, and grouping everything into one execution is precisely the loop anti-pattern: startup savings come from the shared Spring context, not from parameterisation. The trap to avoid is putting conditional logic into the data table.',
    },
  },
  {
    id: 'th-test2-11',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: '¿Cómo se debería probar un método privado que contiene lógica compleja?',
      en: 'How should a private method containing complex logic be tested?',
    },
    answer: {
      es: 'A través del método público que lo utiliza; si eso resulta incómodo, suele ser señal de que esa lógica merece su propia clase con responsabilidad explícita.',
      en: 'Through the public method that uses it; if that feels awkward, it usually signals that the logic deserves its own class with an explicit responsibility.',
    },
    distractors: [
      {
        es: 'Con reflexión, o relajando su visibilidad a package-private y marcándolo como visible únicamente para las pruebas.',
        en: 'With reflection, or by relaxing its visibility to package-private and marking it as visible only for tests.',
      },
      {
        es: 'Extrayéndolo a un método estático público en una clase de utilidades, para poder invocarlo directamente desde la prueba.',
        en: 'By extracting it to a public static method in a utility class, so the test can invoke it directly.',
      },
    ],
    explanation: {
      es: 'Un método privado es un detalle de implementación, y probarlo directamente congela ese detalle: la prueba se rompe al renombrarlo o al reorganizar la clase, que es justo lo que un refactor debería poder hacer libremente. La reflexión y la anotación VisibleForTesting de Guava son válvulas de escape pragmáticas, no la respuesta de diseño, y la reflexión además no resiste el renombrado automático del IDE. Mover la lógica a una clase de utilidades estática la hace accesible, pero también la vuelve difícil de sustituir y suele arrastrar estado global; extraer un colaborador con su interfaz es la salida limpia cuando la lógica tiene entidad propia.',
      en: 'A private method is an implementation detail, and testing it directly freezes that detail: the test breaks when you rename it or reorganise the class, which is exactly what a refactor should be free to do. Reflection and the Guava VisibleForTesting annotation are pragmatic escape hatches, not the design answer, and reflection additionally does not survive automated IDE renaming. Moving the logic to a static utility class makes it reachable, but also hard to substitute and prone to global state; extracting a collaborator with its interface is the clean way out when the logic stands on its own.',
    },
  },
  {
    id: 'th-test2-12',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: '¿Qué son las pruebas de aprobación o snapshot y cuáles son sus compromisos?',
      en: 'What are approval or snapshot tests and what are their trade-offs?',
    },
    answer: {
      es: 'Comparan la salida completa contra un archivo aprobado previamente: cubren mucho con poquísimo código, pero producen diferencias enormes y tientan a aprobar sin revisar.',
      en: 'They compare the full output against a previously approved file: they cover a lot with very little code, but produce huge diffs and tempt you to approve without reviewing.',
    },
    distractors: [
      {
        es: 'Guardan el estado de la base de datos antes de la prueba para restaurarlo al terminar y garantizar el aislamiento.',
        en: 'They store the database state before the test to restore it afterwards and guarantee isolation.',
      },
      {
        es: 'Son la técnica ideal para el desarrollo guiado por pruebas, porque el archivo esperado se escribe antes que el código.',
        en: 'They are the ideal technique for test-driven development, because the expected file is written before the code.',
      },
    ],
    explanation: {
      es: 'Con ApprovalTests en Java o toMatchSnapshot de Jest, la primera ejecución genera el archivo y las siguientes fallan ante cualquier diferencia, lo que resulta excelente para salidas grandes como HTML, JSON o reportes. El precio es que la prueba no expresa la intención: no dice qué parte de la salida importa, y cuando falla la reacción cómoda es regenerar el archivo, perdiendo toda la protección. Por eso encajan mal en TDD, donde se necesita una expectativa explícita antes de existir el formato, y no tienen nada que ver con la instantánea de una base de datos, que es una técnica de gestión de datos de prueba.',
      en: 'With ApprovalTests in Java or toMatchSnapshot in Jest, the first run generates the file and later runs fail on any difference, which is excellent for large outputs such as HTML, JSON or reports. The price is that the test does not express intent: it does not say which part of the output matters, and when it fails the comfortable reaction is to regenerate the file, losing all the protection. That is why they fit poorly in TDD, where an explicit expectation is needed before the format even exists, and they have nothing to do with a database snapshot, which is a test data management technique.',
    },
  },
  {
    id: 'th-test2-13',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: '¿Cuál es el objetivo de una prueba de caracterización sobre código heredado?',
      en: 'What is the goal of a characterisation test on legacy code?',
    },
    answer: {
      es: 'Documentar el comportamiento actual tal como es, incluidos sus errores, para tener una red de seguridad antes de refactorizar.',
      en: 'Document the current behaviour exactly as it is, bugs included, to have a safety net before refactoring.',
    },
    distractors: [
      {
        es: 'Comprobar que el código heredado cumple la especificación original y corregir las desviaciones que se detecten.',
        en: 'Check that the legacy code meets the original specification and fix any deviations that are detected.',
      },
      {
        es: 'Recorrer el sistema completo con pruebas de integración para medir qué partes del código heredado siguen en uso.',
        en: 'Walk the whole system with integration tests to measure which parts of the legacy code are still in use.',
      },
    ],
    explanation: {
      es: 'El término viene de Michael Feathers en Working Effectively with Legacy Code y el procedimiento es deliberadamente descriptivo: se ejecuta el código, se observa lo que devuelve y se escribe esa observación como aserción, aunque sea evidentemente incorrecta, porque alguien río abajo puede depender de ese comportamiento. Corregir la desviación es un paso posterior y separado, que solo se hace con la red ya puesta y la decisión de negocio tomada. Medir qué código sigue vivo es otra cosa: para eso se usa instrumentación de cobertura en producción o análisis de trazas.',
      en: 'The term comes from Michael Feathers in Working Effectively with Legacy Code and the procedure is deliberately descriptive: you run the code, observe what it returns and write that observation as an assertion, even when it is plainly wrong, because someone downstream may depend on that behaviour. Fixing the deviation is a later, separate step, taken only once the net is in place and the business decision has been made. Measuring which code is still alive is a different matter: that calls for production coverage instrumentation or trace analysis.',
    },
  },
  {
    id: 'th-test2-14',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: 'En código heredado, ¿qué es una costura y para qué sirve al romper dependencias?',
      en: 'In legacy code, what is a seam and what is it for when breaking dependencies?',
    },
    answer: {
      es: 'Un punto donde se puede alterar el comportamiento sin editar el código en ese lugar, por ejemplo pasando la dependencia como parámetro o sobrescribiendo un método protegido.',
      en: 'A place where behaviour can be altered without editing the code at that place, for instance by passing the dependency as a parameter or overriding a protected method.',
    },
    distractors: [
      {
        es: 'El límite entre dos módulos donde se colocan las pruebas de contrato para verificar las expectativas mutuas.',
        en: 'The boundary between two modules where contract tests are placed to verify mutual expectations.',
      },
      {
        es: 'Un punto de extensión declarado explícitamente en el diseño, como una interfaz con inyección de dependencias.',
        en: 'An extension point explicitly declared in the design, such as an interface with dependency injection.',
      },
    ],
    explanation: {
      es: 'La idea de Feathers es que toda costura tiene un punto de habilitación: el lugar desde el que se decide qué comportamiento aplica, y él las clasifica en costuras de objeto por polimorfismo, de enlace por classpath o configuración de compilación, y de preprocesamiento. La clave es que no necesitan haber sido diseñadas: se descubren en el código existente con técnicas como Extract and Override Call o Parameterize Constructor. La inyección de dependencias crea una costura de objeto, pero es un caso particular y no la definición, y confundirla con el límite entre módulos mezcla el concepto con el de las pruebas de contrato.',
      en: 'The Feathers idea is that every seam has an enabling point: the place from which you decide which behaviour applies, and he classifies them as object seams through polymorphism, link seams through the classpath or build configuration, and preprocessing seams. The key is that they need not have been designed: they are discovered in existing code with techniques such as Extract and Override Call or Parameterize Constructor. Dependency injection creates an object seam, but that is a particular case rather than the definition, and confusing it with a module boundary mixes the concept up with contract testing.',
    },
  },
  {
    id: 'th-test2-15',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: '¿Qué mide cada una: la cobertura de línea, la de rama y la de condición?',
      en: 'What does each one measure: line coverage, branch coverage and condition coverage?',
    },
    answer: {
      es: 'La de línea cuenta sentencias ejecutadas, la de rama exige recorrer las dos salidas de cada decisión y la de condición exige que cada subcondición tome los valores verdadero y falso.',
      en: 'Line coverage counts executed statements, branch coverage requires taking both outcomes of every decision and condition coverage requires each subcondition to take both true and false values.',
    },
    distractors: [
      {
        es: 'La de rama y la de condición son sinónimos: solo cambia el nombre según la herramienta que genere el reporte.',
        en: 'Branch and condition coverage are synonyms: only the name changes depending on the tool generating the report.',
      },
      {
        es: 'La de condición es la más estricta de las tres, así que alcanzarla al cien por ciento implica automáticamente la cobertura de rama.',
        en: 'Condition coverage is the strictest of the three, so reaching one hundred percent of it automatically implies branch coverage.',
      },
    ],
    explanation: {
      es: 'El contraejemplo clásico está en una condición como if (a && b): probar con a verdadero y b falso, y luego con a falso y b verdadero, da cobertura de condición del cien por ciento, y sin embargo la decisión nunca resulta verdadera, así que la rama positiva queda sin cubrir. Por eso la cobertura de condición no implica la de rama ni son sinónimos, y en dominios críticos se exige MC/DC, el criterio que pide demostrar que cada condición afecta el resultado por sí sola, obligatorio en la norma DO-178C de aviónica. En la práctica JaCoCo reporta líneas y ramas, y esta última es la métrica útil para detectar decisiones sin probar.',
      en: 'The classic counterexample sits in a condition like if (a && b): testing with a true and b false, then with a false and b true, yields one hundred percent condition coverage, and yet the decision never evaluates to true, so the positive branch stays uncovered. That is why condition coverage does not imply branch coverage and they are not synonyms, and critical domains require MC/DC, the criterion demanding proof that each condition affects the outcome on its own, mandated by the DO-178C avionics standard. In practice JaCoCo reports lines and branches, and the latter is the useful metric for spotting untested decisions.',
    },
  },
  {
    id: 'th-test2-16',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: '¿Cómo se consigue que una prueba sobre código que usa la fecha actual y números aleatorios sea determinista?',
      en: 'How do you make a test deterministic when the code uses the current date and random numbers?',
    },
    answer: {
      es: 'Inyectando esas fuentes como dependencias, por ejemplo un java.time.Clock y un generador con semilla fija, para poder fijar el valor desde la prueba.',
      en: 'By injecting those sources as dependencies, for example a java.time.Clock and a seeded generator, so the value can be pinned from the test.',
    },
    distractors: [
      {
        es: 'Aplicando un margen de tolerancia en la aserción, comparando la fecha esperada con la actual dentro de unos pocos segundos.',
        en: 'By applying a tolerance margin in the assertion, comparing the expected date with the current one within a few seconds.',
      },
      {
        es: 'Congelando el reloj del sistema operativo durante la ejecución de la suite y repitiendo la prueba hasta obtener el valor buscado.',
        en: 'By freezing the operating system clock while the suite runs and repeating the test until the wanted value comes up.',
      },
    ],
    explanation: {
      es: 'El patrón es tratar el tiempo y el azar como colaboradores: en el código de producción se usa LocalDateTime.now(clock) con un Clock inyectado, y en la prueba se pasa Clock.fixed con un Instant y una zona concretos; lo mismo aplica a new Random(42) o a una interfaz propia detrás del generador. La tolerancia parece práctica pero deja la prueba no determinista, falla en los cambios de día o de horario de verano y no permite verificar cálculos sobre fechas límite. Tocar el reloj del sistema afecta a toda la máquina y al resto del pipeline, y repetir hasta acertar es la definición de prueba intermitente. Cuando no se puede inyectar, quedan mockStatic de Mockito o los temporizadores falsos de Jest.',
      en: 'The pattern is treating time and randomness as collaborators: production code calls LocalDateTime.now(clock) with an injected Clock, and the test passes Clock.fixed with a concrete Instant and zone; the same applies to new Random(42) or to a custom interface behind the generator. Tolerance looks practical but leaves the test non-deterministic, fails on day or daylight-saving boundaries and does not let you verify calculations on cutoff dates. Touching the system clock affects the whole machine and the rest of the pipeline, and repeating until it hits is the definition of a flaky test. When injection is impossible, there are Mockito mockStatic or the Jest fake timers.',
    },
  },
  {
    id: 'th-test2-17',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: 'Para limpiar los datos entre pruebas de integración, ¿qué implica revertir la transacción frente a truncar las tablas?',
      en: 'To clean data between integration tests, what does rolling back the transaction imply compared to truncating the tables?',
    },
    answer: {
      es: 'Revertir es rápido y automático, pero no sirve cuando el código bajo prueba abre sus propias transacciones o corre en otro hilo, y ahí hay que truncar.',
      en: 'Rolling back is fast and automatic, but it does not work when the code under test opens its own transactions or runs on another thread, and there you must truncate.',
    },
    distractors: [
      {
        es: 'Truncar es siempre preferible, porque revertir la transacción deja las secuencias y los identificadores en un estado inconsistente.',
        en: 'Truncating is always preferable, because rolling back the transaction leaves sequences and identifiers in an inconsistent state.',
      },
      {
        es: 'Son equivalentes, porque anotar la prueba como transaccional hace commit al final y luego limpia las tablas involucradas.',
        en: 'They are equivalent, because annotating the test as transactional commits at the end and then cleans the involved tables.',
      },
    ],
    explanation: {
      es: 'En Spring, una prueba anotada con Transactional revierte por defecto al terminar, y eso es cómodo hasta que aparece el efecto perverso: como nunca hay commit, se ocultan las violaciones de restricciones y los errores de flush que solo saltarían al confirmar, y el método con propagación REQUIRES_NEW o un servidor HTTP real levantado con SpringBootTest y RANDOM_PORT trabajan en otra transacción que la reversión no alcanza. Es cierto que las secuencias no se revierten, pero eso rara vez importa y no convierte a truncar en la opción universal, ya que es notablemente más lento. Las alternativas habituales son un script de truncado, Flyway clean o un contenedor limpio con Testcontainers.',
      en: 'In Spring, a test annotated with Transactional rolls back by default when it finishes, and that is convenient until the perverse effect shows up: since there is never a commit, constraint violations and flush errors that would only surface at commit time stay hidden, and a method with REQUIRES_NEW propagation or a real HTTP server started with SpringBootTest and RANDOM_PORT work in another transaction the rollback cannot reach. It is true that sequences are not rolled back, but that rarely matters and does not make truncation the universal option, since it is noticeably slower. The usual alternatives are a truncation script, Flyway clean or a fresh container with Testcontainers.',
    },
  },
  {
    id: 'th-test2-18',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: 'Más allá de la sintaxis de Cucumber, ¿cuál es el propósito real de BDD?',
      en: 'Beyond Cucumber syntax, what is the real purpose of BDD?',
    },
    answer: {
      es: 'Construir un lenguaje compartido entre negocio, desarrollo y pruebas mediante ejemplos concretos acordados antes de escribir el código.',
      en: 'Build a shared language between business, development and testing through concrete examples agreed before any code is written.',
    },
    distractors: [
      {
        es: 'Permitir que las personas de negocio escriban ellas mismas los escenarios en Gherkin y así reducir la carga de trabajo de QA.',
        en: 'Let business people write the Gherkin scenarios themselves and thereby reduce the QA workload.',
      },
      {
        es: 'Sustituir las pruebas unitarias por escenarios de aceptación legibles, eliminando la duplicación entre capas de la suite.',
        en: 'Replace unit tests with readable acceptance scenarios, removing the duplication between suite layers.',
      },
    ],
    explanation: {
      es: 'BDD nació con Dan North como una reformulación de TDD para enseñar por dónde empezar y cómo nombrar las pruebas, y su aporte está en la conversación previa: técnicas como example mapping o la reunión de los tres amigos, donde negocio, desarrollo y QA descubren juntos los casos borde antes de implementar. Los escenarios en Gherkin son el artefacto resultante, no el objetivo, y la trampa habitual es adoptar la herramienta sin la conversación, quedándose con una capa de automatización lenta y cara que además exige desarrolladores para mantener las definiciones de pasos. Tampoco reemplaza la base de la pirámide: los escenarios de aceptación son pocos y las unitarias siguen siendo el grueso.',
      en: 'BDD was born with Dan North as a reframing of TDD to teach where to start and how to name tests, and its contribution lies in the conversation beforehand: techniques such as example mapping or the three amigos meeting, where business, development and QA discover the edge cases together before implementing. Gherkin scenarios are the resulting artefact, not the goal, and the usual trap is adopting the tool without the conversation, ending up with a slow, expensive automation layer that still needs developers to maintain the step definitions. Nor does it replace the base of the pyramid: acceptance scenarios are few and unit tests remain the bulk.',
    },
  },
  {
    id: 'th-test2-19',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: 'En las etapas de un pipeline, ¿qué distingue a las pruebas de humo de la suite de regresión?',
      en: 'Across the stages of a pipeline, what distinguishes smoke tests from the regression suite?',
    },
    answer: {
      es: 'Las de humo son un subconjunto pequeño y rápido que confirma que el sistema arranca y sus funciones críticas responden, y corren antes de la regresión completa.',
      en: 'Smoke tests are a small, fast subset confirming the system starts up and its critical functions respond, and they run before the full regression.',
    },
    distractors: [
      {
        es: 'Las de humo verifican que ningún cambio reciente haya roto una funcionalidad que antes funcionaba correctamente.',
        en: 'Smoke tests verify that no recent change has broken functionality that used to work correctly.',
      },
      {
        es: 'Las de humo se ejecutan solo en producción después del despliegue, porque necesitan datos reales para ser representativas.',
        en: 'Smoke tests only run in production after deployment, because they need real data to be representative.',
      },
    ],
    explanation: {
      es: 'La razón de ser de esta separación es la retroalimentación temprana: si la aplicación ni siquiera levanta el contexto o el login no responde, no tiene sentido invertir una hora en la regresión, así que el pipeline falla en minutos. Detectar que algo que funcionaba dejó de funcionar es precisamente la definición de prueba de regresión, no de humo. Y aunque es muy común ejecutar un conjunto de humo tras el despliegue como verificación de sanidad, también se corre en integración continua sobre entornos previos: el nombre viene del hardware, donde se encendía el aparato para ver si salía humo.',
      en: 'The reason for this separation is early feedback: if the application does not even bring up its context or the login does not respond, spending an hour on regression makes no sense, so the pipeline fails within minutes. Detecting that something which used to work stopped working is precisely the definition of a regression test, not a smoke test. And although running a smoke set after deployment as a sanity check is very common, it also runs in continuous integration against earlier environments: the name comes from hardware, where you powered the device on to see whether smoke came out.',
    },
  },
  {
    id: 'th-test2-20',
    topic: 'Pruebas avanzadas',
    prompt: {
      es: '¿Qué diferencia a las pruebas de carga, de estrés y de resistencia?',
      en: 'What differentiates load, stress and soak testing?',
    },
    answer: {
      es: 'La de carga mide el comportamiento bajo la demanda esperada, la de estrés empuja más allá del límite para observar cómo se degrada y la de resistencia sostiene la carga durante horas para detectar fugas.',
      en: 'Load testing measures behaviour under the expected demand, stress testing pushes past the limit to observe how it degrades and soak testing sustains the load for hours to detect leaks.',
    },
    distractors: [
      {
        es: 'La de carga busca el punto de ruptura, la de estrés mide los tiempos de respuesta en condiciones normales y la de resistencia comprueba el escalado automático.',
        en: 'Load testing looks for the breaking point, stress testing measures response times under normal conditions and soak testing checks automatic scaling.',
      },
      {
        es: 'La de estrés aplica un aumento repentino de usuarios en pocos segundos y la de resistencia mide cuánto tarda el sistema en recuperarse tras una caída.',
        en: 'Stress testing applies a sudden surge of users within seconds and soak testing measures how long the system takes to recover after an outage.',
      },
    ],
    explanation: {
      es: 'Cada una responde una pregunta distinta: cuánto tarda con la carga prevista, qué pasa cuando se supera y qué se rompe con el paso del tiempo. La prueba de resistencia es la única que revela fugas de memoria, agotamiento del pool de conexiones o discos llenos de logs, porque esos defectos solo aparecen tras varias horas sostenidas. El primer distractor intercambia las definiciones de carga y estrés, y el segundo describe otras dos categorías reales: la prueba de pico, con su subida repentina, y la de recuperación, que mide el retorno al servicio. Las herramientas habituales son JMeter, Gatling y k6, y lo que se observa son los percentiles 95 y 99 de latencia junto al throughput, nunca el promedio.',
      en: 'Each answers a different question: how long it takes under the expected load, what happens when that is exceeded and what breaks as time passes. Soak testing is the only one revealing memory leaks, connection pool exhaustion or disks filled with logs, because those defects only appear after several sustained hours. The first distractor swaps the definitions of load and stress, and the second describes two other real categories: spike testing, with its sudden ramp, and recovery testing, which measures the return to service. The usual tools are JMeter, Gatling and k6, and what you watch are the 95th and 99th latency percentiles together with throughput, never the average.',
    },
  },
];
