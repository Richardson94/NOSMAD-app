import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_TESTING_ADVANCED_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-test2-01',
    topic: 'Pruebas',
    prompt: {
      es: '¿Para qué estructuras una prueba en preparar, actuar y comprobar?',
      en: 'Why do you structure a test as arrange, act and assert?',
    },
    answer: {
      es: 'Para separar el contexto, la acción y el resultado. Así se lee como una especificación y se ve qué falló.',
      en: 'To separate the context, the action and the result. It then reads like a specification and you can see what failed.',
    },
    distractors: [
      {
        es: 'Para garantizar una sola aserción al final.',
        en: 'To guarantee a single assertion at the end.',
      },
      {
        es: 'Porque solo aplica a escenarios de Cucumber.',
        en: 'Because it only applies to Cucumber scenarios.',
      },
    ],
    explanation: {
      es: 'Varias aserciones valen si describen el mismo comportamiento. La misma estructura sirve en una prueba unitaria normal.',
      en: 'Several assertions are fine if they describe the same behaviour. The same structure works in a normal unit test.',
    },
  },
  {
    id: 'th-test2-02',
    topic: 'Pruebas',
    prompt: {
      es: '¿Cómo nombras una prueba para entender el fallo sin abrir el código?',
      en: 'How do you name a test so the failure is clear without opening the code?',
    },
    answer: {
      es: 'Con el escenario y el resultado esperado, por ejemplo que rechaza el pago cuando la tarjeta está vencida.',
      en: 'With the scenario and the expected outcome, for example that it rejects the payment when the card is expired.',
    },
    distractors: [
      {
        es: 'Con el prefijo test y el nombre del método, como testProcesarPago.',
        en: 'With the prefix test and the method name, such as testProcessPayment.',
      },
      {
        es: 'Con la clase y un número de caso, para cruzarlo con la matriz de requisitos.',
        en: 'With the class and a case number, so it can be matched to the requirements matrix.',
      },
    ],
    explanation: {
      es: 'El reporte del pipeline solo muestra el nombre. Tiene que decir la regla de negocio, no la mecánica del método.',
      en: 'The pipeline report only shows the name. It must state the business rule, not the mechanics of the method.',
    },
  },
  {
    id: 'th-test2-03',
    topic: 'Pruebas',
    prompt: {
      es: '¿Qué suele causar una prueba intermitente y qué haces con ella?',
      en: 'What usually causes a flaky test and what do you do with it?',
    },
    answer: {
      es: 'Tiempo, orden de ejecución, concurrencia o datos compartidos. Se aísla y se corrige la causa, no se reintenta a ciegas.',
      en: 'Time, execution order, concurrency or shared data. You isolate it and fix the cause, you do not retry it blindly.',
    },
    distractors: [
      {
        es: 'Lo correcto es activar reintentos hasta tener tiempo de mirarla.',
        en: 'The right move is to turn on retries until you have time to look at it.',
      },
      {
        es: 'Casi siempre es una espera corta, así que subir el timeout lo arregla.',
        en: 'It is almost always a short wait, so raising the timeout fixes it.',
      },
    ],
    explanation: {
      es: 'El reintento esconde un fallo que a menudo también existe en producción. Sustituye esperas fijas por una condición.',
      en: 'A retry hides a failure that often exists in production too. Replace fixed waits with a condition.',
    },
  },
  {
    id: 'th-test2-04',
    topic: 'Pruebas',
    prompt: {
      es: '¿Qué miden las pruebas de mutación?',
      en: 'What do mutation tests measure?',
    },
    answer: {
      es: 'Cambian un poco el código de producción y miran si alguna prueba falla. Un mutante que sobrevive delata una aserción débil.',
      en: 'They change production code a little and see whether some test fails. A mutant that survives reveals a weak assertion.',
    },
    distractors: [
      {
        es: 'Generan datos de entrada al azar para encontrar combinaciones no probadas.',
        en: 'They generate random input data to find combinations that were not tested.',
      },
      {
        es: 'Miden el porcentaje de ramas ejecutadas, de forma más estricta.',
        en: 'They measure the percentage of branches executed, in a stricter way.',
      },
    ],
    explanation: {
      es: 'La cobertura puede ejecutar una línea sin comprobar el resultado. La mutación pregunta si la prueba notaría un cambio.',
      en: 'Coverage can execute a line without checking the result. Mutation asks whether the test would notice a change.',
    },
  },
  {
    id: 'th-test2-05',
    topic: 'Pruebas',
    prompt: {
      es: '¿En qué se diferencian las pruebas por propiedades de las pruebas por ejemplos?',
      en: 'How do property based tests differ from example based tests?',
    },
    answer: {
      es: 'Declaras una regla que siempre debe cumplirse y el framework genera muchas entradas buscando un contraejemplo.',
      en: 'You declare a rule that must always hold and the framework generates many inputs looking for a counterexample.',
    },
    distractors: [
      {
        es: 'Ejecutan el mismo cuerpo contra una lista fija de datos que escribió el desarrollador.',
        en: 'They run the same body against a fixed data list the developer wrote.',
      },
      {
        es: 'Comprueban aserciones incrustadas en el código de producción.',
        en: 'They check assertions embedded in the production code.',
      },
    ],
    explanation: {
      es: 'En los ejemplos eliges tú los datos y arrastras tus sesgos. Una lista fija sigue siendo un ejemplo, aunque esté parametrizada.',
      en: 'In examples you pick the data and you carry your own biases. A fixed list is still an example, even if it is parameterised.',
    },
  },
  {
    id: 'th-test2-06',
    topic: 'Pruebas',
    prompt: {
      es: '¿Qué diferencia hay entre un dummy, un fake y un spy?',
      en: 'What is the difference between a dummy, a fake and a spy?',
    },
    answer: {
      es: 'El dummy solo rellena un parámetro y no se usa. El fake tiene una implementación simple que funciona. El spy registra las llamadas para mirarlas después.',
      en: 'A dummy only fills a parameter and is never used. A fake has a simple implementation that works. A spy records the calls so you can inspect them later.',
    },
    distractors: [
      {
        es: 'El dummy devuelve valores, el fake verifica interacciones y el spy sustituye la dependencia real.',
        en: 'A dummy returns values, a fake verifies interactions and a spy replaces the real dependency.',
      },
      {
        es: 'El fake lo genera la librería y el spy se escribe a mano.',
        en: 'A fake is generated by the library and a spy is written by hand.',
      },
    ],
    explanation: {
      es: 'Devolver valores preparados es un stub. Verificar expectativas es un mock. El ejemplo típico de fake es un repositorio en memoria.',
      en: 'Returning prepared values is a stub. Verifying expectations is a mock. The typical fake is an in memory repository.',
    },
  },
  {
    id: 'th-test2-07',
    topic: 'Pruebas',
    prompt: {
      es: '¿Qué ventaja tiene un repositorio falso frente a un mock si quieres comprobar el estado final?',
      en: 'To check the final state, what advantage does a fake repository have over a mock?',
    },
    answer: {
      es: 'Puedes preguntarle qué quedó guardado. El mock te obliga a verificar que se llamó a save con ciertos argumentos.',
      en: 'You can ask it what ended up stored. The mock forces you to verify that save was called with particular arguments.',
    },
    distractors: [
      {
        es: 'El mock es mejor porque no arrastra estado entre pruebas.',
        en: 'The mock is better because it carries no state between tests.',
      },
      {
        es: 'El fake solo sirve en integración, porque necesita una base embebida.',
        en: 'The fake is only useful in integration tests, because it needs an embedded database.',
      },
    ],
    explanation: {
      es: 'Verificar llamadas se rompe si el servicio agrupa dos guardados en uno, aunque el resultado sea el mismo.',
      en: 'Verifying calls breaks if the service batches two saves into one, even when the result is the same.',
    },
  },
  {
    id: 'th-test2-08',
    topic: 'Pruebas',
    prompt: {
      es: '¿Cuál es el riesgo de abusar de los mocks?',
      en: 'What is the risk of overusing mocks?',
    },
    answer: {
      es: 'La prueba acaba copiando la implementación. Un refactor que conserva el comportamiento la rompe igual.',
      en: 'The test ends up copying the implementation. A refactor that keeps the behaviour breaks it anyway.',
    },
    distractors: [
      {
        es: 'La suite se vuelve lenta por los proxies dinámicos.',
        en: 'The suite becomes slow because of the dynamic proxies.',
      },
      {
        es: 'Se pierde cobertura, porque las dependencias sustituidas no se ejecutan.',
        en: 'Coverage is lost, because the replaced dependencies are not executed.',
      },
    ],
    explanation: {
      es: 'Sustituye en los bordes, como un cliente HTTP o un repositorio. La lógica de dominio suele ir mejor con objetos reales.',
      en: 'Substitute at the edges, such as an HTTP client or a repository. Domain logic is usually better with real objects.',
    },
  },
  {
    id: 'th-test2-09',
    topic: 'Pruebas',
    prompt: {
      es: '¿Qué riesgo hay en compartir un fixture mutable entre pruebas?',
      en: 'What is the risk of sharing a mutable fixture across tests?',
    },
    answer: {
      es: 'Una prueba depende de lo que dejó otra. Falla o pasa según el orden y el diagnóstico miente.',
      en: 'One test depends on what another left behind. It fails or passes according to the order and the diagnosis lies.',
    },
    distractors: [
      {
        es: 'El riesgo es el tiempo de construcción, así que hay que rehacer el fixture siempre.',
        en: 'The risk is construction time, so the fixture must always be rebuilt.',
      },
      {
        es: 'No hay riesgo con BeforeAll, porque el runner clona el fixture.',
        en: 'There is no risk with BeforeAll, because the runner clones the fixture.',
      },
    ],
    explanation: {
      es: 'El síntoma es la prueba que pasa sola y falla en la suite. Compartir solo es seguro si el fixture no cambia.',
      en: 'The symptom is the test that passes alone and fails in the suite. Sharing is safe only if the fixture does not change.',
    },
  },
  {
    id: 'th-test2-10',
    topic: 'Pruebas',
    prompt: {
      es: '¿Qué aportan las pruebas parametrizadas frente a un bucle de aserciones?',
      en: 'What do parameterised tests add compared with a loop of assertions?',
    },
    answer: {
      es: 'El runner trata cada conjunto de datos como un caso. Un fallo no esconde el resto.',
      en: 'The runner treats each data set as a case. One failure does not hide the rest.',
    },
    distractors: [
      {
        es: 'Generan los datos a partir de los tipos del método.',
        en: 'They generate the data from the method types.',
      },
      {
        es: 'Juntan todos los casos en una ejecución y así el arranque es más barato.',
        en: 'They group every case into one execution and the startup is cheaper.',
      },
    ],
    explanation: {
      es: 'Un bucle se detiene en el primer fallo. Generar datos al azar es una prueba por propiedades, no una parametrizada.',
      en: 'A loop stops at the first failure. Generating data at random is a property test, not a parameterised one.',
    },
  },
  {
    id: 'th-test2-11',
    topic: 'Pruebas',
    prompt: {
      es: '¿Cómo pruebas un método privado con lógica compleja?',
      en: 'How do you test a private method with complex logic?',
    },
    answer: {
      es: 'A través del método público que lo usa. Si eso es incómodo, esa lógica suele merecer su propia clase.',
      en: 'Through the public method that uses it. If that feels awkward, that logic usually deserves its own class.',
    },
    distractors: [
      {
        es: 'Con reflexión, o bajando la visibilidad solo para las pruebas.',
        en: 'With reflection, or by lowering the visibility only for tests.',
      },
      {
        es: 'Sacándolo a un método estático público de una clase de utilidades.',
        en: 'By moving it to a public static method on a utility class.',
      },
    ],
    explanation: {
      es: 'Probar el privado congela un detalle. Al renombrarlo la prueba se rompe aunque el comportamiento no cambie.',
      en: 'Testing the private method freezes a detail. Renaming it breaks the test even when the behaviour does not change.',
    },
  },
  {
    id: 'th-test2-12',
    topic: 'Pruebas',
    prompt: {
      es: '¿Qué es una prueba de snapshot y cuál es el riesgo?',
      en: 'What is a snapshot test and what is the risk?',
    },
    answer: {
      es: 'Compara la salida completa con un archivo ya aprobado. Cubre mucho con poco código, pero tienta a aceptar el diff sin leerlo.',
      en: 'It compares the full output with a file already approved. It covers a lot with little code, but it tempts you to accept the diff without reading it.',
    },
    distractors: [
      {
        es: 'Guarda el estado de la base antes de la prueba y lo restaura al terminar.',
        en: 'It stores the database state before the test and restores it at the end.',
      },
      {
        es: 'Es la técnica ideal de TDD, porque el archivo se escribe antes que el código.',
        en: 'It is the ideal TDD technique, because the file is written before the code.',
      },
    ],
    explanation: {
      es: 'Encaja con salidas grandes como HTML o JSON. Si regeneras el archivo a ciegas, la prueba deja de proteger.',
      en: 'It fits large outputs such as HTML or JSON. If you regenerate the file blindly, the test stops protecting you.',
    },
  },
  {
    id: 'th-test2-13',
    topic: 'Pruebas',
    prompt: {
      es: '¿Para qué sirve una prueba de caracterización en código heredado?',
      en: 'What is a characterisation test for on legacy code?',
    },
    answer: {
      es: 'Para fijar el comportamiento actual, incluidos los fallos, y tener una red antes de refactorizar.',
      en: 'To pin down the current behaviour, bugs included, and have a safety net before refactoring.',
    },
    distractors: [
      {
        es: 'Para comprobar que cumple la especificación original y corregir las desviaciones.',
        en: 'To check that it meets the original specification and fix the deviations.',
      },
      {
        es: 'Para medir qué partes del sistema heredado siguen en uso.',
        en: 'To measure which parts of the legacy system are still in use.',
      },
    ],
    explanation: {
      es: 'Se escribe lo que el código hace hoy, aunque parezca mal, porque alguien puede depender de eso. Corregirlo es un paso aparte.',
      en: 'You write what the code does today, even if it looks wrong, because someone may depend on it. Fixing it is a separate step.',
    },
  },
  {
    id: 'th-test2-14',
    topic: 'Pruebas',
    prompt: {
      es: '¿Qué es una costura en código heredado?',
      en: 'In legacy code, what is a seam?',
    },
    answer: {
      es: 'Un punto donde puedes cambiar el comportamiento sin editar ese sitio, por ejemplo pasando la dependencia o sobrescribiendo un método.',
      en: 'A place where you can change the behaviour without editing that spot, for example by passing the dependency or overriding a method.',
    },
    distractors: [
      {
        es: 'El límite entre dos módulos donde van las pruebas de contrato.',
        en: 'The boundary between two modules where the contract tests go.',
      },
      {
        es: 'Solo un punto de extensión diseñado de antemano, como una interfaz inyectada.',
        en: 'Only an extension point designed in advance, such as an injected interface.',
      },
    ],
    explanation: {
      es: 'No hace falta que alguien la haya diseñado. Se busca en el código para poder poner un doble y probar.',
      en: 'It does not have to have been designed. You look for it in the code so you can put a double in and test.',
    },
  },
  {
    id: 'th-test2-15',
    topic: 'Pruebas',
    prompt: {
      es: '¿Qué mide la cobertura de línea y qué mide la de rama?',
      en: 'What does line coverage measure and what does branch coverage measure?',
    },
    answer: {
      es: 'La de línea cuenta sentencias ejecutadas. La de rama exige tomar las dos salidas de cada decisión.',
      en: 'Line coverage counts executed statements. Branch coverage requires taking both outcomes of every decision.',
    },
    distractors: [
      {
        es: 'Son lo mismo: solo cambia el nombre según la herramienta.',
        en: 'They are the same: only the name changes depending on the tool.',
      },
      {
        es: 'Cubrir cada condición booleana implica cubrir todas las ramas.',
        en: 'Covering each boolean condition implies covering every branch.',
      },
    ],
    explanation: {
      es: 'Puedes ejecutar ambas partes de un and y aun así no entrar nunca por el if. La rama útil es la que detecta decisiones sin probar.',
      en: 'You can execute both sides of an and and still never enter the if. Branch coverage is the one that spots untested decisions.',
    },
  },
  {
    id: 'th-test2-16',
    topic: 'Pruebas',
    prompt: {
      es: '¿Cómo haces determinista una prueba que usa la fecha actual o un número aleatorio?',
      en: 'How do you make a test deterministic when it uses the current date or a random number?',
    },
    answer: {
      es: 'Inyectando el reloj y el generador. En la prueba fijas el instante o la semilla.',
      en: 'By injecting the clock and the generator. In the test you pin the instant or the seed.',
    },
    distractors: [
      {
        es: 'Comparando con un margen de unos segundos.',
        en: 'By comparing with a margin of a few seconds.',
      },
      {
        es: 'Parando el reloj del sistema y repitiendo la prueba hasta acertar.',
        en: 'By stopping the system clock and repeating the test until it hits.',
      },
    ],
    explanation: {
      es: 'Un margen sigue siendo no determinista y falla en el cambio de día. Repetir hasta acertar es la definición de prueba intermitente.',
      en: 'A margin is still non deterministic and fails on a day boundary. Repeating until it hits is the definition of a flaky test.',
    },
  },
  {
    id: 'th-test2-17',
    topic: 'Pruebas',
    prompt: {
      es: '¿Cuándo, entre pruebas de integración, no basta con revertir la transacción?',
      en: 'Between integration tests, when is rolling back the transaction not enough?',
    },
    answer: {
      es: 'Cuando el código abre su propia transacción o corre en otro hilo. Esa escritura no entra en el rollback y hay que limpiar las tablas.',
      en: 'When the code opens its own transaction or runs on another thread. That write is not part of the rollback and you must clean the tables.',
    },
    distractors: [
      {
        es: 'Truncar es siempre mejor, porque el rollback deja las secuencias rotas.',
        en: 'Truncating is always better, because rollback leaves sequences broken.',
      },
      {
        es: 'Son equivalentes: la prueba transaccional hace commit y luego limpia.',
        en: 'They are equivalent: the transactional test commits and then cleans up.',
      },
    ],
    explanation: {
      es: 'Revertir es rápido, pero si nunca hay commit no ves errores que solo aparecen al confirmar.',
      en: 'Rolling back is fast, but if there is never a commit you miss errors that only show up when you commit.',
    },
  },
  {
    id: 'th-test2-18',
    topic: 'Pruebas',
    prompt: {
      es: '¿Para qué sirve BDD, más allá de Cucumber?',
      en: 'Beyond Cucumber, what is BDD for?',
    },
    answer: {
      es: 'Para acordar ejemplos concretos entre negocio, desarrollo y pruebas antes de escribir el código.',
      en: 'To agree concrete examples between business, development and testing before any code is written.',
    },
    distractors: [
      {
        es: 'Para que negocio escriba los escenarios y así baje la carga de QA.',
        en: 'So business writes the scenarios and the QA load goes down.',
      },
      {
        es: 'Para sustituir las pruebas unitarias por escenarios legibles.',
        en: 'To replace unit tests with readable scenarios.',
      },
    ],
    explanation: {
      es: 'El valor está en la conversación. Adoptar la herramienta sin esos ejemplos deja una capa de automatización lenta.',
      en: 'The value is in the conversation. Adopting the tool without those examples leaves a slow automation layer.',
    },
  },
  {
    id: 'th-test2-19',
    topic: 'Pruebas',
    prompt: {
      es: '¿Qué diferencia hay entre una prueba de humo y la suite de regresión?',
      en: 'What is the difference between a smoke test and the regression suite?',
    },
    answer: {
      es: 'La de humo es un puñado de pruebas rápidas que comprueban que el sistema arranca y lo crítico responde. La regresión es el conjunto amplio.',
      en: 'A smoke test is a handful of fast checks that the system starts and the critical parts respond. Regression is the broad suite.',
    },
    distractors: [
      {
        es: 'La de humo comprueba que un cambio reciente no rompió lo que ya funcionaba.',
        en: 'A smoke test checks that a recent change did not break what already worked.',
      },
      {
        es: 'La de humo solo corre en producción, porque necesita datos reales.',
        en: 'A smoke test only runs in production, because it needs real data.',
      },
    ],
    explanation: {
      es: 'Si la aplicación ni arranca, no merece la pena una hora de regresión. Detectar lo que dejó de funcionar es justamente la regresión.',
      en: 'If the application does not even start, an hour of regression is not worth it. Detecting what stopped working is exactly regression.',
    },
  },
  {
    id: 'th-test2-20',
    topic: 'Pruebas',
    prompt: {
      es: '¿Qué diferencia hay entre una prueba de carga, una de estrés y una de resistencia?',
      en: 'What is the difference between a load test, a stress test and a soak test?',
    },
    answer: {
      es: 'La de carga mide el uso esperado. La de estrés pasa del límite para ver cómo se degrada. La de resistencia mantiene la carga horas para cazar fugas.',
      en: 'Load testing measures the expected use. Stress testing goes past the limit to see how it degrades. Soak testing holds the load for hours to catch leaks.',
    },
    distractors: [
      {
        es: 'La de carga busca el punto de ruptura y la de estrés mide tiempos normales.',
        en: 'Load testing looks for the breaking point and stress testing measures normal times.',
      },
      {
        es: 'La de estrés es un pico de usuarios y la de resistencia mide la recuperación tras una caída.',
        en: 'Stress testing is a user spike and soak testing measures recovery after an outage.',
      },
    ],
    explanation: {
      es: 'Un pico repentino es otra prueba, y volver tras una caída también. La resistencia es la que destapa fugas de memoria o pools agotados.',
      en: 'A sudden spike is another test, and coming back after an outage is another one too. Soak testing is the one that uncovers memory leaks or exhausted pools.',
    },
  },
];
