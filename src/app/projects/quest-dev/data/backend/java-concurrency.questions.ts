import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_JAVA_CONCURRENCY_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-conc-01',
    topic: 'Hilos',
    prompt: {
      es: '¿Qué diferencia hay entre shutdown y shutdownNow en un pool de hilos?',
      en: 'What is the difference between shutdown and shutdownNow on a thread pool?',
    },
    answer: {
      es: 'shutdown deja terminar lo que ya estaba encolado y rechaza trabajo nuevo. shutdownNow intenta interrumpir lo que corre y te devuelve lo que no empezó.',
      en: 'shutdown lets work already queued finish and rejects new work. shutdownNow tries to interrupt what is running and returns what had not started.',
    },
    distractors: [
      {
        es: 'shutdown corta las tareas al instante y shutdownNow espera a vaciar la cola.',
        en: 'shutdown cuts tasks immediately and shutdownNow waits until the queue is empty.',
      },
      {
        es: 'No hace falta esperar: los hilos del pool son daemon y la JVM sale sola al terminar main.',
        en: 'There is no need to wait: pool threads are daemon and the JVM exits on its own when main ends.',
      },
    ],
    explanation: {
      es: 'awaitTermination espera a que el pool acabe o a que se cumpla el tiempo. Los workers no son daemon, así que sin ese cierre la aplicación puede quedarse viva.',
      en: 'awaitTermination waits until the pool ends or the time runs out. The workers are not daemon, so without that shutdown the application can stay alive.',
    },
  },
  {
    id: 'be-conc-02',
    topic: 'Hilos',
    prompt: {
      es: '¿Cuándo usas un pool fijo y cuándo uno que crece bajo demanda?',
      en: 'When do you use a fixed pool and when a pool that grows on demand?',
    },
    answer: {
      es: 'El fijo acota cuántas tareas corren a la vez en un trabajo estable. El que crece sirve para ráfagas cortas, pero sin tope puede crear demasiados hilos y llenar la memoria.',
      en: 'The fixed one caps how many tasks run at once for steady work. The growing one fits short bursts, but with no cap it can create too many threads and fill memory.',
    },
    distractors: [
      {
        es: 'El que crece es siempre mejor, porque reutiliza hilos y no tiene riesgo de memoria.',
        en: 'The growing one is always better, because it reuses threads and has no memory risk.',
      },
      {
        es: 'Son intercambiables. El programado es solo un fijo con otro nombre.',
        en: 'They are interchangeable. The scheduled one is only a fixed pool with another name.',
      },
    ],
    explanation: {
      es: 'Un pool para tareas periódicas es otra herramienta: retrasa o repite trabajo. No lo uses como pool general sin pensar el tamaño.',
      en: 'A pool for periodic tasks is a different tool: it delays or repeats work. Do not use it as a general pool without thinking about the size.',
    },
  },
  {
    id: 'be-conc-03',
    topic: 'Async',
    prompt: {
      es: '¿Qué es un CompletableFuture?',
      en: 'What is a CompletableFuture?',
    },
    answer: {
      es: 'Un resultado que llegará más tarde. Puedes encadenar qué hacer cuando termine, en lugar de bloquear el hilo con get en medio del flujo.',
      en: 'A result that will arrive later. You can chain what to do when it finishes, instead of blocking the thread with get in the middle of the flow.',
    },
    distractors: [
      {
        es: 'Un hilo nuevo por cada llamada. get nunca bloquea porque el valor ya está listo.',
        en: 'A new thread per call. get never blocks because the value is already ready.',
      },
      {
        es: 'Lo mismo que un ThreadLocal: guarda el resultado en el hilo que lo creó.',
        en: 'The same as a ThreadLocal: it stores the result on the thread that created it.',
      },
    ],
    explanation: {
      es: 'thenApply transforma el valor ya resuelto. Si el siguiente paso es otra llamada async, usa thenCompose para no anidar un futuro dentro de otro.',
      en: 'thenApply transforms the value already resolved. If the next step is another async call, use thenCompose so you do not nest one future inside another.',
    },
  },
  {
    id: 'be-conc-04',
    topic: 'Async',
    prompt: {
      es: '¿Cómo esperas el resultado de varias tareas async?',
      en: 'How do you wait for the result of several async tasks?',
    },
    answer: {
      es: 'allOf termina cuando todas terminan, pero no te da la lista de valores: después lees cada futuro. Para dos tareas, thenCombine junta los dos resultados.',
      en: 'allOf finishes when all of them finish, but it does not give you the list of values: you read each future afterwards. For two tasks, thenCombine joins both results.',
    },
    distractors: [
      {
        es: 'allOf devuelve una lista ya ordenada, lista para recorrer.',
        en: 'allOf returns an already ordered list, ready to iterate.',
      },
      {
        es: 'thenCombine arranca la segunda tarea solo cuando acaba la primera, así que las serializa.',
        en: 'thenCombine starts the second task only when the first ends, so it serialises them.',
      },
    ],
    explanation: {
      es: 'Las dos tareas deben estar ya en marcha. allOf no lanza el trabajo por ti ni empaqueta los resultados.',
      en: 'Both tasks should already be running. allOf does not launch the work for you and it does not pack the results.',
    },
  },
  {
    id: 'be-conc-05',
    topic: 'Async',
    prompt: {
      es: '¿Cómo manejas un fallo en un CompletableFuture?',
      en: 'How do you handle a failure on a CompletableFuture?',
    },
    answer: {
      es: 'exceptionally corre solo si falló y puede devolver un valor de reserva. handle corre siempre y puede mirar el éxito o el error. whenComplete observa el resultado pero no lo sustituye.',
      en: 'exceptionally runs only on failure and can return a fallback value. handle always runs and can look at success or error. whenComplete watches the result but does not replace it.',
    },
    distractors: [
      {
        es: 'exceptionally es un finally: corre tanto si hubo valor como si hubo error.',
        en: 'exceptionally is a finally: it runs whether there was a value or an error.',
      },
      {
        es: 'whenComplete puede devolver otro valor, igual que handle.',
        en: 'whenComplete can return another value, just like handle.',
      },
    ],
    explanation: {
      es: 'Para traducir un error a una respuesta usa handle. whenComplete sirve para loguear o cerrar, no para cambiar el valor a propósito.',
      en: 'To translate an error into a response, use handle. whenComplete is for logging or closing, not for changing the value on purpose.',
    },
  },
  {
    id: 'be-conc-06',
    topic: 'Async',
    prompt: {
      es: '¿Por qué importa el executor en una etapa async?',
      en: 'Why does the executor matter on an async stage?',
    },
    answer: {
      es: 'Sin la variante async, el callback puede correr en el hilo que completó el paso anterior. La variante async lo manda a un pool, y si no indicas uno usa el pool común.',
      en: 'Without the async variant, the callback may run on the thread that completed the previous step. The async variant sends it to a pool, and if you do not name one it uses the common pool.',
    },
    distractors: [
      {
        es: 'thenApply siempre va al pool común y thenApplyAsync reutiliza el hilo anterior.',
        en: 'thenApply always goes to the common pool and thenApplyAsync reuses the previous thread.',
      },
      {
        es: 'Pasar tu executor solo cambia la prioridad. El trabajo sigue en el pool común.',
        en: 'Passing your own executor only changes priority. The work still runs on the common pool.',
      },
    ],
    explanation: {
      es: 'No hagas llamadas bloqueantes en el pool común: lo comparten los streams paralelos. Usa un pool dedicado para entrada y salida.',
      en: 'Do not do blocking calls on the common pool: parallel streams share it. Use a dedicated pool for input and output.',
    },
  },
  {
    id: 'be-conc-07',
    topic: 'Cerrojos',
    prompt: {
      es: '¿Qué diferencia hay entre synchronized y un Lock?',
      en: 'What is the difference between synchronized and a Lock?',
    },
    answer: {
      es: 'synchronized es un bloque del lenguaje: entras y sales, y se libera solo. Un Lock es un objeto: puedes intentar tomarlo con tiempo y debes hacer unlock en un finally.',
      en: 'synchronized is a language block: you enter and leave, and it is released for you. A Lock is an object: you can try to take it with a timeout and you must unlock in a finally.',
    },
    distractors: [
      {
        es: 'synchronized es justo y Lock no se puede soltar si el hilo se interrumpe.',
        en: 'synchronized is fair and a Lock cannot be released if the thread is interrupted.',
      },
      {
        es: 'Lock no puede esperar una condición. wait y notify solo existen con synchronized.',
        en: 'A Lock cannot wait for a condition. wait and notify exist only with synchronized.',
      },
    ],
    explanation: {
      es: 'Elige Lock si necesitas tryLock, varios puntos de espera o interrumpir la espera. Para un bloqueo simple, synchronized se lee mejor.',
      en: 'Choose Lock if you need tryLock, several wait points or an interruptible wait. For a simple lock, synchronized reads better.',
    },
  },
  {
    id: 'be-conc-08',
    topic: 'Cerrojos',
    prompt: {
      es: '¿Cuándo sirve un cerrojo de lectura y escritura?',
      en: 'When is a read-write lock useful?',
    },
    answer: {
      es: 'Cuando muchos hilos leen y las escrituras son raras. Varios lectores entran juntos y un escritor excluye a todos.',
      en: 'When many threads read and writes are rare. Several readers enter together and one writer excludes everyone.',
    },
    distractors: [
      {
        es: 'Cuando cada hilo toca un campo distinto del mismo objeto, porque entonces lector y escritor pueden coincidir.',
        en: 'When each thread touches a different field of the same object, because then a reader and a writer can overlap.',
      },
      {
        es: 'Siempre es más rápido que synchronized, también si casi todas las operaciones escriben.',
        en: 'It is always faster than synchronized, even when almost every operation writes.',
      },
    ],
    explanation: {
      es: 'Si hay muchas escrituras, el cerrojo extra no compensa. Una lectura optimista existe, pero no es reentrante y es fácil usarla mal.',
      en: 'If there are many writes, the extra lock does not pay off. An optimistic read exists, but it is not reentrant and it is easy to misuse.',
    },
  },
  {
    id: 'be-conc-09',
    topic: 'Atómicos',
    prompt: {
      es: '¿Para qué sirve AtomicInteger?',
      en: 'What is AtomicInteger for?',
    },
    answer: {
      es: 'Para actualizar un contador desde varios hilos sin un cerrojo. incrementAndGet es atómico. Un int++ normal no lo es.',
      en: 'To update a counter from several threads without a lock. incrementAndGet is atomic. A plain int++ is not.',
    },
    distractors: [
      {
        es: 'Cualquier get, cálculo y set sobre él es atómico, aunque lo escribas en tres líneas.',
        en: 'Any get, calculation and set on it is atomic, even if you write it in three lines.',
      },
      {
        es: 'Sustituye a volatile y además publica el valor a todos los hilos del proceso como un ThreadLocal.',
        en: 'It replaces volatile and also publishes the value to every thread in the process like a ThreadLocal.',
      },
    ],
    explanation: {
      es: 'Si la lógica es más que un incremento, lee, calcula y usa compareAndSet en un bucle. Un get seguido de set por separado puede perder una actualización.',
      en: 'If the logic is more than an increment, read, compute and use compareAndSet in a loop. A separate get followed by set can lose an update.',
    },
  },
  {
    id: 'be-conc-10',
    topic: 'Hilos',
    prompt: {
      es: '¿Qué es un ThreadLocal y por qué es peligroso en un pool?',
      en: 'What is a ThreadLocal and why is it dangerous in a pool?',
    },
    answer: {
      es: 'Guarda un valor distinto en cada hilo, por ejemplo un contexto de petición. En un pool el hilo se reutiliza, así que si no llamas a remove el siguiente trabajo ve el valor anterior.',
      en: 'It stores a different value on each thread, for example a request context. In a pool the thread is reused, so if you do not call remove the next job sees the previous value.',
    },
    distractors: [
      {
        es: 'El pool borra los ThreadLocal al terminar cada tarea, así que remove sobra.',
        en: 'The pool clears ThreadLocal values when each task ends, so remove is unnecessary.',
      },
      {
        es: 'Publica el mismo valor a todos los hilos, por eso sustituye a volatile.',
        en: 'It publishes the same value to every thread, which is why it replaces volatile.',
      },
    ],
    explanation: {
      es: 'Quítalo en un finally. Un usuario o un logger olvidado en el hilo se filtra a la petición siguiente.',
      en: 'Clear it in a finally. A forgotten user or logger on the thread leaks into the next request.',
    },
  },
  {
    id: 'be-conc-11',
    topic: 'Cerrojos',
    prompt: {
      es: '¿Qué es un deadlock y cómo se evita?',
      en: 'What is a deadlock and how do you avoid it?',
    },
    answer: {
      es: 'Dos hilos se esperan mutuamente porque cada uno tiene el cerrojo que el otro necesita. Se evita tomando siempre los cerrojos en el mismo orden.',
      en: 'Two threads wait on each other because each holds the lock the other needs. You avoid it by always taking the locks in the same order.',
    },
    distractors: [
      {
        es: 'Cambiar synchronized por Lock lo elimina, porque un Lock no puede formar un ciclo.',
        en: 'Replacing synchronized with Lock removes it, because a Lock cannot form a cycle.',
      },
      {
        es: 'Subir el timeout del tryLock basta: el sistema ya no puede quedarse bloqueado.',
        en: 'Raising the tryLock timeout is enough: the system can no longer get stuck.',
      },
    ],
    explanation: {
      es: 'El caso clásico es transferir entre dos cuentas en orden distinto. Un timeout limita la espera, no arregla el diseño.',
      en: 'The classic case is a transfer between two accounts in a different order. A timeout limits the wait, it does not fix the design.',
    },
  },
  {
    id: 'be-conc-12',
    topic: 'Hilos',
    prompt: {
      es: '¿Qué diferencia hay entre un deadlock y la inanición?',
      en: 'What is the difference between a deadlock and starvation?',
    },
    answer: {
      es: 'En el deadlock los hilos están parados esperándose. En la inanición un hilo sigue vivo pero nunca consigue el recurso porque otros lo toman siempre.',
      en: 'In a deadlock the threads are stopped waiting for each other. In starvation a thread stays alive but never gets the resource because others always take it.',
    },
    distractors: [
      {
        es: 'Son el mismo problema. La inanición es un deadlock que el volcado de hilos no muestra.',
        en: 'They are the same problem. Starvation is a deadlock that the thread dump does not show.',
      },
      {
        es: 'La inanición la causa el recolector de basura y el deadlock lo causa el sistema operativo.',
        en: 'Starvation is caused by the garbage collector and deadlock is caused by the operating system.',
      },
    ],
    explanation: {
      es: 'Un livelock es otro caso: los hilos no están parados, se apartan una y otra vez y no avanzan. Un cerrojo justo reduce la inanición a costa de rendimiento.',
      en: 'A livelock is another case: the threads are not stopped, they step aside again and again and make no progress. A fair lock reduces starvation at a throughput cost.',
    },
  },
  {
    id: 'be-conc-13',
    topic: 'Visibilidad',
    prompt: {
      es: '¿Cómo hace un hilo para ver un cambio hecho por otro?',
      en: 'How does one thread see a change made by another?',
    },
    answer: {
      es: 'Con una publicación segura: synchronized, volatile, un campo final bien publicado o una colección concurrente. Una escritura normal puede quedar invisible.',
      en: 'With a safe publication: synchronized, volatile, a properly published final field or a concurrent collection. A plain write can stay invisible.',
    },
    distractors: [
      {
        es: 'Basta con que los dos toquen el mismo objeto. Java hace visible cualquier escritura.',
        en: 'It is enough that both touch the same object. Java makes every write visible.',
      },
      {
        es: 'synchronized solo excluye. La visibilidad hay que añadirla con volatile en cada campo, además del bloque.',
        en: 'synchronized only excludes. Visibility must be added with volatile on every field, in addition to the block.',
      },
    ],
    explanation: {
      es: 'Salir de un synchronized y luego entrar al mismo monitor ya hace visibles los cambios. No hace falta volatile encima de ese mismo bloque.',
      en: 'Leaving a synchronized block and later entering the same monitor already makes the changes visible. You do not need volatile on top of that same block.',
    },
  },
  {
    id: 'be-conc-14',
    topic: 'Inmutabilidad',
    prompt: {
      es: '¿Por qué un objeto inmutable se puede compartir entre hilos?',
      en: 'Why can an immutable object be shared between threads?',
    },
    answer: {
      es: 'Porque nadie lo cambia después de construirlo, así que no hay carrera. Los campos final ayudan a que otros hilos vean el objeto ya inicializado.',
      en: 'Because nobody changes it after construction, so there is no race. final fields help other threads see the object already initialised.',
    },
    distractors: [
      {
        es: 'Porque final congela también el contenido. Una lista final no se puede modificar aunque sea un ArrayList.',
        en: 'Because final also freezes the contents. A final list cannot be modified even if it is an ArrayList.',
      },
      {
        es: 'No se puede compartir. Todo objeto usado por dos hilos necesita un cerrojo, sea inmutable o no.',
        en: 'It cannot be shared. Every object used by two threads needs a lock, whether it is immutable or not.',
      },
    ],
    explanation: {
      es: 'final en la referencia no congela el objeto apuntado. Una lista final sigue siendo mutable si es un ArrayList.',
      en: 'final on the reference does not freeze the object it points to. A final list is still mutable if it is an ArrayList.',
    },
  },
  {
    id: 'be-conc-15',
    topic: 'Sincronizadores',
    prompt: {
      es: '¿Cuándo usas un CountDownLatch y cuándo un Semaphore?',
      en: 'When do you use a CountDownLatch and when a Semaphore?',
    },
    answer: {
      es: 'El latch espera N avisos una sola vez, por ejemplo a que terminen varios trabajos. El semáforo limita cuántos hilos entran a la vez, como un cupo de conexiones.',
      en: 'The latch waits for N signals once, for example until several jobs finish. The semaphore limits how many threads enter at the same time, like a connection quota.',
    },
    distractors: [
      {
        es: 'Son lo mismo si el semáforo tiene un permiso. Los dos reúnen a los hilos en un punto.',
        en: 'They are the same if the semaphore has one permit. Both gather the threads at one point.',
      },
      {
        es: 'El latch se puede reiniciar con reset y por eso sirve para algoritmos por fases.',
        en: 'The latch can be restarted with reset and that is why it fits phased algorithms.',
      },
    ],
    explanation: {
      es: 'Para repetir una reunión de N hilos en varias fases está CyclicBarrier. El latch no se reutiliza.',
      en: 'To repeat a meeting of N threads across phases, use a CyclicBarrier. The latch is not reused.',
    },
  },
  {
    id: 'be-conc-16',
    topic: 'Colas',
    prompt: {
      es: '¿Para qué sirve una BlockingQueue acotada entre un productor y un consumidor?',
      en: 'What is a bounded BlockingQueue for between a producer and a consumer?',
    },
    answer: {
      es: 'put espera si la cola está llena y take espera si está vacía. Así el productor se frena y no llena la memoria sin límite.',
      en: 'put waits if the queue is full and take waits if it is empty. The producer then slows down and does not fill memory without a limit.',
    },
    distractors: [
      {
        es: 'offer siempre inserta y agranda la cola. BlockingQueue no puede acotar la memoria.',
        en: 'offer always inserts and grows the queue. A BlockingQueue cannot bound memory.',
      },
      {
        es: 'Una cola sin capacidad ya frena al productor al llegar a unos mil elementos.',
        en: 'A queue with no capacity already slows the producer at about a thousand elements.',
      },
    ],
    explanation: {
      es: 'Sin tamaño máximo, una cola enlazada puede crecer hasta agotar el heap si el consumidor va más lento. El tope es la contrapresión.',
      en: 'With no maximum size, a linked queue can grow until it exhausts the heap if the consumer is slower. The cap is the backpressure.',
    },
  },
  {
    id: 'be-conc-17',
    topic: 'Hilos virtuales',
    prompt: {
      es: '¿Qué problema resuelven los hilos virtuales?',
      en: 'What problem do virtual threads solve?',
    },
    answer: {
      es: 'Hacen barato tener muchas tareas bloqueadas en entrada y salida. No aceleran el trabajo de CPU: ese sigue limitado por los núcleos.',
      en: 'They make it cheap to have many tasks blocked on input and output. They do not speed up CPU work: that stays limited by the cores.',
    },
    distractors: [
      {
        es: 'Aceleran el cálculo porque reparten los núcleos mejor que un pool normal.',
        en: 'They speed up computation because they share the cores better than a normal pool.',
      },
      {
        es: 'Sustituyen a synchronized. Un bloque synchronized dentro de un hilo virtual no tiene ningún efecto especial.',
        en: 'They replace synchronized. A synchronized block inside a virtual thread has no special effect.',
      },
    ],
    explanation: {
      es: 'Si el hilo virtual se queda pegado a un hilo de plataforma, por ejemplo en un bloque synchronized largo, pierdes parte de la ventaja. Para CPU usa un pool del tamaño de los núcleos.',
      en: 'If the virtual thread stays pinned to a platform thread, for example inside a long synchronized block, you lose part of the gain. For CPU work use a pool sized to the cores.',
    },
  },
  {
    id: 'be-conc-18',
    topic: 'Async',
    prompt: {
      es: '¿Qué idea hay detrás de la concurrencia estructurada?',
      en: 'What is the idea behind structured concurrency?',
    },
    answer: {
      es: 'Las subtareas viven dentro de un bloque que las espera y las cancela al salir. Ningún hilo hijo se queda corriendo cuando el método ya terminó.',
      en: 'Subtasks live inside a block that waits for them and cancels them on exit. No child thread keeps running after the method has already finished.',
    },
    distractors: [
      {
        es: 'Es un pool que devuelve una lista de Future y el llamador decide cuándo esperar a cada uno.',
        en: 'It is a pool that returns a list of Future and the caller decides when to wait for each one.',
      },
      {
        es: 'Los hilos virtuales ya imponen esa estructura, así que no hace falta nada más.',
        en: 'Virtual threads already enforce that structure, so nothing else is needed.',
      },
    ],
    explanation: {
      es: 'Un runAsync suelto puede seguir vivo después del return. El ámbito estructurado evita ese hilo olvidado.',
      en: 'A loose runAsync can stay alive after the return. A structured scope avoids that forgotten thread.',
    },
  },
  {
    id: 'be-conc-19',
    topic: 'Hilos',
    prompt: {
      es: '¿Cómo dimensionas un pool para CPU y otro para entrada y salida?',
      en: 'How do you size a pool for CPU work and another for input and output?',
    },
    answer: {
      es: 'Para CPU, cerca del número de núcleos. Para entrada y salida, más hilos, porque pasan tiempo esperando y no ocupan el núcleo todo el rato.',
      en: 'For CPU work, close to the number of cores. For input and output, more threads, because they spend time waiting and do not occupy the core the whole time.',
    },
    distractors: [
      {
        es: 'El tamaño correcto es siempre el número de núcleos. Más hilos solo añaden cambios de contexto.',
        en: 'The right size is always the number of cores. More threads only add context switches.',
      },
      {
        es: 'Para entrada y salida conviene un pool sin límite, para que ninguna tarea espere en cola.',
        en: 'For input and output an unlimited pool is best, so no task waits in a queue.',
      },
    ],
    explanation: {
      es: 'Un pool sin tope convierte un pico de latencia en miles de hilos. Acota el de Tomcat y el de las tareas async.',
      en: 'A pool with no cap turns a latency spike into thousands of threads. Cap the Tomcat one and the async task one.',
    },
  },
  {
    id: 'be-conc-20',
    topic: 'Transacciones',
    prompt: {
      es: '¿Por qué una transacción de Spring no viaja a un hilo nuevo?',
      en: 'Why does a Spring transaction not travel to a new thread?',
    },
    answer: {
      es: 'Porque Spring guarda la transacción en el hilo actual. Un hilo nuevo, un submit o un método @Async arrancan sin esa conexión.',
      en: 'Because Spring stores the transaction on the current thread. A new thread, a submit or an @Async method start without that connection.',
    },
    distractors: [
      {
        es: 'Spring copia la transacción a los hilos de @Async y de runAsync de forma automática.',
        en: 'Spring copies the transaction to @Async threads and to runAsync automatically.',
      },
      {
        es: 'La conexión es segura entre hilos, así que el hilo hijo participa en el mismo commit.',
        en: 'The connection is safe across threads, so the child thread joins the same commit.',
      },
    ],
    explanation: {
      es: 'Si el método destino también es transaccional, abre otra transacción distinta. Para trabajo después del commit, engancha un callback al commit, no lances un hilo en medio.',
      en: 'If the target method is also transactional, it opens a different transaction. For work after commit, hook a callback to the commit, do not start a thread in the middle.',
    },
  },
];
