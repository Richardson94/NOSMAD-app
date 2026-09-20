import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_JAVA_CONCURRENCY_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-conc-01',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Qué distingue a shutdown, shutdownNow y awaitTermination en el ciclo de vida de un ExecutorService?',
      en: 'What distinguishes shutdown, shutdownNow and awaitTermination in the lifecycle of an ExecutorService?',
    },
    answer: {
      es: 'shutdown rechaza tareas nuevas y deja terminar las ya enviadas; shutdownNow interrumpe las en ejecución y devuelve las pendientes; awaitTermination bloquea hasta que el pool acabe o expire el tiempo.',
      en: 'shutdown rejects new tasks and lets already submitted ones finish; shutdownNow interrupts running tasks and returns the pending ones; awaitTermination blocks until the pool ends or the timeout expires.',
    },
    distractors: [
      {
        es: 'shutdown interrumpe de inmediato las tareas en curso, mientras shutdownNow espera a vaciar la cola y luego cierra el pool.',
        en: 'shutdown immediately interrupts running tasks, while shutdownNow waits for the queue to drain and then closes the pool.',
      },
      {
        es: 'awaitTermination es opcional porque los hilos del pool son daemon y la JVM termina sola al acabar el método main.',
        en: 'awaitTermination is optional because pool threads are daemon and the JVM exits on its own when the main method ends.',
      },
    ],
    explanation: {
      es: 'ExecutorService.shutdown, disponible desde Java 5 en java.util.concurrent, solo pone el pool en cierre ordenado: no acepta nuevos submit y las tareas de la cola siguen. shutdownNow intenta Thread.interrupt sobre las en curso y devuelve una List con las que aún no habían arrancado. awaitTermination es necesario porque los workers no son daemon; desde Java 19 close() combina shutdown con esa espera y permite try-with-resources.',
      en: 'ExecutorService.shutdown, available since Java 5 in java.util.concurrent, only puts the pool in an orderly shutdown: it does not accept new submit calls and queued tasks still run. shutdownNow tries Thread.interrupt on running ones and returns a List of those that had not started. awaitTermination is required because the workers are not daemon; since Java 19 close() combines shutdown with that wait and allows try-with-resources.',
    },
  },
  {
    id: 'be-conc-02',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Cuándo conviene un pool fijo, uno cacheado y uno programado?',
      en: 'When should you choose a fixed pool, a cached pool and a scheduled pool?',
    },
    answer: {
      es: 'Fijo para acotar la concurrencia de trabajo estable; cacheado para ráfagas cortas que no deben encolarse; programado para retrasos y tareas periódicas.',
      en: 'Fixed to bound concurrency of steady work; cached for short bursts that should not be queued; scheduled for delays and periodic tasks.',
    },
    distractors: [
      {
        es: 'El cacheado es siempre preferible, porque reutiliza hilos y solo crece bajo demanda sin riesgo de agotar memoria.',
        en: 'The cached pool is always preferable, because it reuses threads and only grows on demand without risk of exhausting memory.',
      },
      {
        es: 'El programado es un fijo con una cola de retraso, así que para trabajo ordinario ambos son intercambiables y tienen el mismo tamaño efectivo.',
        en: 'The scheduled pool is a fixed one with a delay queue, so for ordinary work both are interchangeable and have the same effective size.',
      },
    ],
    explanation: {
      es: 'Executors.newFixedThreadPool(n) usa un LinkedBlockingQueue ilimitada y n hilos, de modo que el trabajo extra espera en memoria. newCachedThreadPool usa SynchronousQueue y crea hilos sin tope, con reutilización a los 60 s, lo que bajo carga sostenida puede agotar la JVM. newScheduledThreadPool(n) construye un ScheduledThreadPoolExecutor cuyos hilos núcleo no caducan por defecto, pensado para schedule y scheduleAtFixedRate, no como sustituto general de un fijo dimensionado.',
      en: 'Executors.newFixedThreadPool(n) uses an unbounded LinkedBlockingQueue and n threads, so extra work waits in memory. newCachedThreadPool uses a SynchronousQueue and creates threads with no cap, with reuse after 60 s, which under sustained load can exhaust the JVM. newScheduledThreadPool(n) builds a ScheduledThreadPoolExecutor whose core threads do not time out by default, intended for schedule and scheduleAtFixedRate, not as a general substitute for a sized fixed pool.',
    },
  },
  {
    id: 'be-conc-03',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿En qué se diferencian thenApply y thenCompose sobre un CompletableFuture?',
      en: 'How do thenApply and thenCompose differ on a CompletableFuture?',
    },
    answer: {
      es: 'thenApply transforma el valor ya resuelto; thenCompose aplana una función que devuelve otro CompletionStage y evita un CompletableFuture anidado.',
      en: 'thenApply transforms the already resolved value; thenCompose flattens a function that returns another CompletionStage and avoids a nested CompletableFuture.',
    },
    distractors: [
      {
        es: 'thenApply ejecuta de forma síncrona en el hilo actual y thenCompose es la variante asíncrona que envía el trabajo al ForkJoinPool común.',
        en: 'thenApply runs synchronously on the current thread and thenCompose is the asynchronous variant that submits the work to the common ForkJoinPool.',
      },
      {
        es: 'thenCompose combina dos futuros independientes esperando a ambos, mientras thenApply solo encadena un cálculo sobre uno.',
        en: 'thenCompose combines two independent futures waiting for both, while thenApply only chains a computation on one of them.',
      },
    ],
    explanation: {
      es: 'thenApply recibe una Function de T a U y produce CompletableFuture de U; si la función ella misma devuelve un CompletableFuture, el tipo queda CompletableFuture de CompletableFuture. thenCompose, añadido en Java 8 con CompletableFuture, equivale a un flatMap: la función debe devolver un CompletionStage y el resultado se aplana. La variante asíncrona es thenApplyAsync, no thenCompose; esperar dos futuros independientes es thenCombine.',
      en: 'thenApply takes a Function from T to U and produces a CompletableFuture of U; if the function itself returns a CompletableFuture, the type becomes CompletableFuture of CompletableFuture. thenCompose, added in Java 8 with CompletableFuture, is equivalent to a flatMap: the function must return a CompletionStage and the result is flattened. The asynchronous variant is thenApplyAsync, not thenCompose; waiting for two independent futures is thenCombine.',
    },
  },
  {
    id: 'be-conc-04',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Cómo se espera el resultado de varias tareas con thenCombine y allOf en CompletableFuture?',
      en: 'How do you wait for the result of several tasks with thenCombine and allOf on CompletableFuture?',
    },
    answer: {
      es: 'thenCombine espera dos futuros y combina sus valores; allOf espera muchos y completa en Void, así que cada futuro original debe consultarse después para leer el resultado.',
      en: 'thenCombine waits for two futures and combines their values; allOf waits for many and completes as Void, so each original future must be queried afterwards to read the result.',
    },
    distractors: [
      {
        es: 'allOf devuelve un CompletableFuture de List con los resultados en el mismo orden de los argumentos, listo para un thenApply.',
        en: 'allOf returns a CompletableFuture of List with the results in the same order as the arguments, ready for a thenApply.',
      },
      {
        es: 'thenCombine arranca el segundo futuro solo cuando el primero termina, igual que thenCompose, y por eso serializa las dos tareas.',
        en: 'thenCombine starts the second future only when the first finishes, just like thenCompose, and that is why it serialises both tasks.',
      },
    ],
    explanation: {
      es: 'thenCombine(other, BiFunction) asume que ambos CompletableFuture ya están en vuelo y aplica la función cuando los dos completan; no lanza la segunda tarea. allOf(n) en Java 8 completa cuando todos terminan, con éxito o excepción, pero el tipo es CompletableFuture de Void: hay que hacer join o get sobre cada uno, o construir la lista a mano. Confundirlo con un allOf que agrega resultados es un error habitual al portar Promise.all.',
      en: 'thenCombine(other, BiFunction) assumes both CompletableFuture instances are already in flight and applies the function when both complete; it does not launch the second task. allOf(n) in Java 8 completes when all finish, successfully or exceptionally, but the type is CompletableFuture of Void: you must join or get on each one, or build the list by hand. Confusing it with an allOf that aggregates results is a common mistake when porting Promise.all.',
    },
  },
  {
    id: 'be-conc-05',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Qué diferencia hay entre exceptionally, handle y whenComplete en un CompletableFuture?',
      en: 'What is the difference between exceptionally, handle and whenComplete on a CompletableFuture?',
    },
    answer: {
      es: 'exceptionally solo corre si hay fallo y puede recuperar un valor; handle corre siempre y puede transformar éxito o error; whenComplete observa ambos casos pero no sustituye el resultado.',
      en: 'exceptionally runs only on failure and can recover a value; handle always runs and can transform success or error; whenComplete observes both cases but does not replace the result.',
    },
    distractors: [
      {
        es: 'exceptionally se comporta como un finally: siempre se ejecuta al completar, tanto si hubo valor como si hubo excepción.',
        en: 'exceptionally behaves like a finally: it always runs on completion, whether there was a value or an exception.',
      },
      {
        es: 'whenComplete puede devolver un valor alternativo igual que handle; la diferencia es que whenComplete recibe un BiConsumer y handle un BiFunction.',
        en: 'whenComplete can return an alternative value just like handle; the difference is that whenComplete takes a BiConsumer and handle a BiFunction.',
      },
    ],
    explanation: {
      es: 'exceptionally(Function de Throwable a T) se salta el éxito y solo sustituye el valor si la etapa previa completó excepcionalmente. handle(BiFunction de T y Throwable a U) siempre se invoca y es el punto correcto para traducir un error a un resultado. whenComplete(BiConsumer) en Java 8 sirve para registrar o cerrar recursos: si el consumidor lanza, esa nueva excepción puede enmascarar el resultado, pero no hay un valor de retorno para reemplazarlo a propósito.',
      en: 'exceptionally(Function from Throwable to T) skips success and only substitutes the value if the previous stage completed exceptionally. handle(BiFunction from T and Throwable to U) is always invoked and is the right point to translate an error into a result. whenComplete(BiConsumer) in Java 8 is for logging or closing resources: if the consumer throws, that new exception can mask the result, but there is no return value to replace it on purpose.',
    },
  },
  {
    id: 'be-conc-06',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Qué cambia al usar las variantes Async de CompletableFuture y por qué importa el executor?',
      en: 'What changes when using the Async variants of CompletableFuture and why does the executor matter?',
    },
    answer: {
      es: 'La forma sin Async puede correr en el hilo que completó la etapa previa; la Async envía el callback a un executor, que por defecto es el ForkJoinPool común.',
      en: 'The form without Async may run on the thread that completed the previous stage; the Async form submits the callback to an executor, which by default is the common ForkJoinPool.',
    },
    distractors: [
      {
        es: 'thenApply siempre despacha al ForkJoinPool común; thenApplyAsync sin argumentos reutiliza el mismo hilo que terminó la etapa anterior.',
        en: 'thenApply always dispatches to the common ForkJoinPool; thenApplyAsync with no arguments reuses the same thread that finished the previous stage.',
      },
      {
        es: 'Pasar un executor propio solo cambia la prioridad de los hilos; el pool común sigue ejecutando las etapas porque CompletableFuture no cambia de scheduler.',
        en: 'Passing your own executor only changes thread priority; the common pool still runs the stages because CompletableFuture does not switch scheduler.',
      },
    ],
    explanation: {
      es: 'thenApply, thenAccept y thenRun pueden ejecutarse en el hilo llamador si el futuro ya está completo, o en el hilo que hace complete. thenApplyAsync(fn) y thenApplyAsync(fn, executor) fuerzan un submit; sin executor usan ForkJoinPool.commonPool(), compartido con parallelStream, lo que en un servicio Spring Boot 3 puede robar hilos de CPU al resto de la aplicación. Por eso las llamadas bloqueantes de entrada y salida deben ir a un executor dedicado, no al pool común.',
      en: 'thenApply, thenAccept and thenRun may run on the caller thread if the future is already complete, or on the thread that calls complete. thenApplyAsync(fn) and thenApplyAsync(fn, executor) force a submit; without an executor they use ForkJoinPool.commonPool(), shared with parallelStream, which in a Spring Boot 3 service can steal CPU threads from the rest of the application. That is why blocking I/O calls must go to a dedicated executor, not to the common pool.',
    },
  },
  {
    id: 'be-conc-07',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Qué aporta ReentrantLock frente a synchronized respecto a tryLock, equidad y condiciones?',
      en: 'What does ReentrantLock add over synchronized regarding tryLock, fairness and conditions?',
    },
    answer: {
      es: 'Permite tryLock con tiempo, lockInterruptibly, un constructor justo y varios Condition independientes; synchronized solo ofrece un monitor implícito con un único conjunto de espera.',
      en: 'It allows timed tryLock, lockInterruptibly, a fair constructor and several independent Condition objects; synchronized only offers an implicit monitor with a single wait set.',
    },
    distractors: [
      {
        es: 'synchronized es justo por defecto y evita la inanición; ReentrantLock es siempre no justo y por eso es más rápido en todos los casos.',
        en: 'synchronized is fair by default and avoids starvation; ReentrantLock is always non-fair and that is why it is faster in every case.',
      },
      {
        es: 'ReentrantLock no puede esperar señales, porque wait y notify solo existen en el monitor de synchronized, y por eso no sirve para colas con condición.',
        en: 'ReentrantLock cannot wait for signals, because wait and notify only exist on the synchronized monitor, and that is why it cannot be used for queues with a condition.',
      },
    ],
    explanation: {
      es: 'ReentrantLock, en java.util.concurrent.locks desde Java 5, expone tryLock, tryLock(time, unit) y lockInterruptibly, cosas que el bloque synchronized no puede expresar. new ReentrantLock(true) pide un AQS justo; el monitor de synchronized no ofrece esa palanca y tampoco es justo. newCondition() permite varios conjuntos de espera (noLleno, noVacio) frente al único wait/notify del monitor; hay que desbloquear siempre en finally.',
      en: 'ReentrantLock, in java.util.concurrent.locks since Java 5, exposes tryLock, tryLock(time, unit) and lockInterruptibly, things a synchronized block cannot express. new ReentrantLock(true) requests a fair AQS; the synchronized monitor does not offer that lever and is not fair either. newCondition() allows several wait sets (notFull, notEmpty) versus the single wait/notify of the monitor; the lock must always be unlocked in a finally block.',
    },
  },
  {
    id: 'be-conc-08',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿En qué caso de uso encajan ReadWriteLock y StampedLock?',
      en: 'Which use cases fit ReadWriteLock and StampedLock?',
    },
    answer: {
      es: 'ReadWriteLock permite muchos lectores o un escritor; StampedLock añade lecturas optimistas validadas con un sello y no es reentrante.',
      en: 'ReadWriteLock allows many readers or one writer; StampedLock adds optimistic reads validated with a stamp and is not reentrant.',
    },
    distractors: [
      {
        es: 'StampedLock es un reemplazo más rápido y también reentrante de ReadWriteLock, por lo que basta con cambiar el tipo en código existente.',
        en: 'StampedLock is a faster and also reentrant replacement of ReadWriteLock, so it is enough to change the type in existing code.',
      },
      {
        es: 'ReadWriteLock permite un escritor concurrente con los lectores si cada hilo toca campos distintos del mismo objeto.',
        en: 'ReadWriteLock allows a writer concurrent with readers if each thread touches different fields of the same object.',
      },
    ],
    explanation: {
      es: 'ReentrantReadWriteLock (Java 5) separa readLock y writeLock: las lecturas no se bloquean entre sí, pero un writeLock excluye a todos. StampedLock, añadido en Java 8, ofrece tryOptimisticRead y validate(stamp) para leer sin bloquear al escritor, con la opción de convertir a readLock si el sello se invalidó. No es reentrante y un reintento anidado puede producir deadlock; tampoco sustituye a ReadWriteLock cuando hace falta reentrada o condiciones.',
      en: 'ReentrantReadWriteLock (Java 5) splits readLock and writeLock: reads do not block each other, but a writeLock excludes everyone. StampedLock, added in Java 8, offers tryOptimisticRead and validate(stamp) to read without blocking the writer, with the option to convert to readLock if the stamp was invalidated. It is not reentrant and a nested retry can deadlock; it also does not replace ReadWriteLock when reentrancy or conditions are needed.',
    },
  },
  {
    id: 'be-conc-09',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Cómo se usa AtomicInteger con compareAndSet y un bucle de reintento?',
      en: 'How is AtomicInteger used with compareAndSet and a retry loop?',
    },
    answer: {
      es: 'Se lee el valor, se calcula el siguiente y se llama compareAndSet; si otro hilo ganó, el método devuelve false y el bucle vuelve a leer.',
      en: 'You read the value, compute the next one and call compareAndSet; if another thread won, the method returns false and the loop reads again.',
    },
    distractors: [
      {
        es: 'Cualquier secuencia get, calcular y set sobre AtomicInteger es atómica, porque el objeto serializa todas las operaciones de sus métodos.',
        en: 'Any get, compute and set sequence on AtomicInteger is atomic, because the object serialises every operation of its methods.',
      },
      {
        es: 'compareAndSet bloquea o hace spin hasta instalar el valor; el bucle de reintento solo sirve cuando se quiere un tope de intentos.',
        en: 'compareAndSet blocks or spins until it installs the value; the retry loop is only useful when you want a cap on attempts.',
      },
    ],
    explanation: {
      es: 'compareAndSet(esperado, nuevo) de AtomicInteger, basado en CAS de la JVM desde Java 5, es un intento único: tiene éxito o devuelve false sin esperar. incrementAndGet y updateAndGet encapsulan el bucle; si la lógica de negocio es más rica hay que escribir while(true) con get y compareAndSet. Un get seguido de set por separado no es atómico: dos hilos pueden leer el mismo esperado y perder una actualización.',
      en: 'compareAndSet(expected, update) on AtomicInteger, based on JVM CAS since Java 5, is a single attempt: it succeeds or returns false without waiting. incrementAndGet and updateAndGet wrap the loop; if the business logic is richer you must write while(true) with get and compareAndSet. A separate get followed by set is not atomic: two threads can read the same expected value and lose an update.',
    },
  },
  {
    id: 'be-conc-10',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Para qué sirve ThreadLocal y por qué puede fugarse en los hilos de un pool?',
      en: 'What is ThreadLocal for and why can it leak on pool threads?',
    },
    answer: {
      es: 'Guarda un valor por hilo, útil para contexto de petición; en un pool el hilo se reutiliza y el valor sobrevive a la tarea si no se llama remove.',
      en: 'It stores a value per thread, useful for request context; in a pool the thread is reused and the value survives the task if remove is not called.',
    },
    distractors: [
      {
        es: 'El pool limpia automáticamente los ThreadLocal al terminar cada Runnable, de modo que remove solo hace falta en hilos creados a mano.',
        en: 'The pool automatically clears ThreadLocal values when each Runnable finishes, so remove is only needed on threads created by hand.',
      },
      {
        es: 'ThreadLocal publica el valor a todos los hilos del proceso sin cerrojo, y por eso sustituye a volatile para estado compartido.',
        en: 'ThreadLocal publishes the value to every thread in the process without a lock, and that is why it replaces volatile for shared state.',
      },
    ],
    explanation: {
      es: 'ThreadLocal.set asocia el valor al hilo actual mediante un mapa interno; get lo recupera. En Tomcat o en el pool de Spring Boot 3 el mismo hilo atiende la siguiente petición, así que un MDC, un usuario o un EntityManager olvidado se filtra al siguiente cliente y, en servidores de aplicaciones, puede retener el ClassLoader. La práctica correcta es remove en un finally o un filtro; InheritableThreadLocal copia al hijo al crearlo, no al reutilizar un worker.',
      en: 'ThreadLocal.set binds the value to the current thread through an internal map; get retrieves it. In Tomcat or in a Spring Boot 3 pool the same thread serves the next request, so a forgotten MDC, user or EntityManager leaks to the next client and, on application servers, can retain the ClassLoader. The correct practice is remove in a finally block or a filter; InheritableThreadLocal copies to the child when it is created, not when a worker is reused.',
    },
  },
  {
    id: 'be-conc-11',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Cuáles son las condiciones de un deadlock y cómo se previene ordenando los cerrojos?',
      en: 'What are the conditions of a deadlock and how does ordering the locks prevent it?',
    },
    answer: {
      es: 'Hace falta exclusión mutua, retener y esperar, no expropiación y espera circular; adquirir siempre los mismos cerrojos en un orden global rompe esa espera circular.',
      en: 'Mutual exclusion, hold and wait, no preemption and circular wait are required; always acquiring the same locks in a global order breaks that circular wait.',
    },
    distractors: [
      {
        es: 'Sustituir synchronized por ReentrantLock elimina el deadlock, porque tryLock puede abandonar y el AQS no admite ciclos.',
        en: 'Replacing synchronized with ReentrantLock removes deadlock, because tryLock can give up and AQS does not allow cycles.',
      },
      {
        es: 'Un timeout en tryLock elimina las cuatro condiciones de Coffman, de modo que el sistema ya no puede quedarse bloqueado de ninguna forma.',
        en: 'A timeout on tryLock removes the four Coffman conditions, so the system can no longer get stuck in any way.',
      },
    ],
    explanation: {
      es: 'Las condiciones de Coffman deben cumplirse a la vez; basta romper una. Ordenar los cerrojos por identidad o por id de cuenta evita el ciclo A-luego-B frente a B-luego-A, el clásico deadlock de transferencia entre cuentas. ReentrantLock.tryLock solo limita el tiempo de espera: puede convertir el problema en reintentos o livelock, no cambia el diseño. jstack y ThreadMXBean.findDeadlockedThreads ayudan a detectarlo en Java.',
      en: 'The Coffman conditions must all hold at once; breaking one is enough. Ordering the locks by identity or by account id avoids the A-then-B versus B-then-A cycle, the classic deadlock of a transfer between accounts. ReentrantLock.tryLock only limits the wait time: it can turn the problem into retries or livelock, it does not change the design. jstack and ThreadMXBean.findDeadlockedThreads help detect it in Java.',
    },
  },
  {
    id: 'be-conc-12',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿En qué se diferencian el livelock y la inanición?',
      en: 'How do livelock and starvation differ?',
    },
    answer: {
      es: 'En el livelock los hilos siguen activos y reaccionan entre sí sin avanzar; en la inanición un hilo concreto nunca obtiene el recurso porque otros lo acaparan.',
      en: 'In livelock the threads stay active and react to each other without making progress; in starvation one given thread never gets the resource because others keep taking it.',
    },
    distractors: [
      {
        es: 'El livelock es un deadlock en el que los hilos esperan en un cerrojo; se distingue solo porque el monitor aparece en el volcado de hilos.',
        en: 'Livelock is a deadlock in which the threads wait on a lock; it is distinguished only because the monitor appears in the thread dump.',
      },
      {
        es: 'La inanición ocurre cuando el recolector de basura pausa un hilo de forma indefinida, y el livelock cuando el scheduler deja de asignar CPU.',
        en: 'Starvation happens when the garbage collector pauses a thread indefinitely, and livelock when the scheduler stops assigning CPU.',
      },
    ],
    explanation: {
      es: 'En un livelock no hay bloqueo: cada hilo suelta y vuelve a intentar, como dos personas que se apartan al mismo lado en un pasillo, de modo que un volcado no muestra WAITING eterno. La inanición es asimetría: un hilo de baja prioridad o un ReentrantLock no justo puede no ganar nunca el AQS mientras otros entran. Un timeout agresivo tras un deadlock mal resuelto a menudo produce livelock; la equidad (fair=true) mitiga inanición a costa de throughput.',
      en: 'In a livelock there is no blocking: each thread releases and retries, like two people stepping aside to the same side of a corridor, so a dump does not show eternal WAITING. Starvation is asymmetry: a low-priority thread or a non-fair ReentrantLock may never win the AQS while others enter. An aggressive timeout after a poorly resolved deadlock often produces livelock; fairness (fair=true) mitigates starvation at the cost of throughput.',
    },
  },
  {
    id: 'be-conc-13',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Qué relación hay entre el modelo de memoria de Java, happens-before y la publicación segura?',
      en: 'What is the relationship between the Java Memory Model, happens-before and safe publication?',
    },
    answer: {
      es: 'happens-before es la relación del JMM que garantiza visibilidad; una publicación segura (cerrojo, volatile, final o colección concurrente) establece esa relación con los lectores.',
      en: 'happens-before is the JMM relation that guarantees visibility; a safe publication (lock, volatile, final or concurrent collection) establishes that relation with readers.',
    },
    distractors: [
      {
        es: 'Si dos hilos tocan el mismo objeto, el JMM inserta happens-before automáticamente, de modo que basta con evitar condiciones de carrera en los writes.',
        en: 'If two threads touch the same object, the JMM inserts happens-before automatically, so it is enough to avoid race conditions on the writes.',
      },
      {
        es: 'synchronized solo da exclusión mutua; la visibilidad de los campos hay que reforzarla siempre con volatile en cada atributo compartido.',
        en: 'synchronized only gives mutual exclusion; visibility of the fields must always be reinforced with volatile on every shared attribute.',
      },
    ],
    explanation: {
      es: 'El Java Memory Model (JSR-133, Java 5) define happens-before: orden del programa, desbloqueo y posterior bloqueo del mismo monitor, escritura volatile vista por una lectura posterior, start y join de Thread, y las barreras de las concurrent collections. Publicar un objeto con new sin una de esas relaciones deja a los lectores ver campos a cero o un this a medio construir. synchronized ya sincroniza caché y exclusión; volatile no es un requisito extra sobre el mismo monitor.',
      en: 'The Java Memory Model (JSR-133, Java 5) defines happens-before: program order, unlock and later lock of the same monitor, a volatile write seen by a later read, Thread start and join, and the barriers of the concurrent collections. Publishing an object with new without one of those relations lets readers see zeroed fields or a half-built this. synchronized already synchronises cache and exclusion; volatile is not an extra requirement on the same monitor.',
    },
  },
  {
    id: 'be-conc-14',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Por qué la inmutabilidad es una estrategia de concurrencia y qué semántica añaden los campos final?',
      en: 'Why is immutability a concurrency strategy and what semantics do final fields add?',
    },
    answer: {
      es: 'Un objeto inmutable puede compartirse sin cerrojos; el JMM garantiza que los campos final se ven inicializados tras el constructor si no se escapa this.',
      en: 'An immutable object can be shared without locks; the JMM guarantees that final fields are seen as initialised after the constructor if this does not escape.',
    },
    distractors: [
      {
        es: 'final hace inmutable todo el grafo de objetos alcanzable, de modo que una List final no puede mutar su contenido aunque sea un ArrayList.',
        en: 'final makes the whole reachable object graph immutable, so a final List cannot mutate its contents even if it is an ArrayList.',
      },
      {
        es: 'La semántica de publicación segura de final es idéntica a la de volatile, y por eso un campo no final se publica igual de bien si el constructor termina.',
        en: 'The safe-publication semantics of final are identical to those of volatile, and that is why a non-final field is published just as well once the constructor ends.',
      },
    ],
    explanation: {
      es: 'Si todos los campos son privados, final y el estado no se expone mutable, no hay condición de carrera porque no hay escritura posterior al constructor. El JMM (Java 5) congela los final al terminar el constructor: otro hilo que vea la referencia publicada de forma segura verá esos campos. Un this que escape del constructor (registrar this en un mapa estático, arrancar un hilo) rompe esa garantía; final en una referencia no congela el objeto apuntado, de ahí String inmutable frente a una List final mutable.',
      en: 'If every field is private and final and the state is not exposed as mutable, there is no race because there is no write after the constructor. The JMM (Java 5) freezes finals when the constructor ends: another thread that sees the safely published reference will see those fields. A this that escapes the constructor (registering this in a static map, starting a thread) breaks that guarantee; final on a reference does not freeze the pointed-to object, hence an immutable String versus a mutable final List.',
    },
  },
  {
    id: 'be-conc-15',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Cuándo usar CountDownLatch, CyclicBarrier o Semaphore?',
      en: 'When should you use CountDownLatch, CyclicBarrier or Semaphore?',
    },
    answer: {
      es: 'CountDownLatch espera N eventos una sola vez; CyclicBarrier reúne N participantes y se puede reutilizar; Semaphore limita permisos de acceso concurrente.',
      en: 'CountDownLatch waits for N events once; CyclicBarrier gathers N parties and can be reused; Semaphore limits concurrent access permits.',
    },
    distractors: [
      {
        es: 'CyclicBarrier y CountDownLatch son intercambiables si se llama reset al latch; ambos sirven igual para arrancar un conjunto de workers.',
        en: 'CyclicBarrier and CountDownLatch are interchangeable if reset is called on the latch; both work the same to start a set of workers.',
      },
      {
        es: 'Semaphore(1) equivale a CyclicBarrier(1), porque un único permiso es un punto de reunión entre hilos que se esperan.',
        en: 'Semaphore(1) is equivalent to CyclicBarrier(1), because a single permit is a rendezvous point between threads that wait for each other.',
      },
    ],
    explanation: {
      es: 'CountDownLatch (Java 5) es de un solo uso: countDown hasta cero y await despierta; no tiene reset. CyclicBarrier espera a que N hilos llamen await, ejecuta opcionalmente un barrierAction y se reinicia sola, útil en algoritmos por fases. Semaphore controla cuántos hilos entran a una sección (pool de conexiones); Semaphore(1) se parece a un cerrojo, no a una barrera, porque no exige que todos se citen a la vez.',
      en: 'CountDownLatch (Java 5) is single use: countDown to zero and await wakes; it has no reset. CyclicBarrier waits until N threads call await, optionally runs a barrierAction and then resets itself, useful in phased algorithms. Semaphore controls how many threads enter a section (connection pool); Semaphore(1) resembles a lock, not a barrier, because it does not require everyone to meet at once.',
    },
  },
  {
    id: 'be-conc-16',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Qué papel juega BlockingQueue en el patrón productor-consumidor y la contrapresión de una cola acotada?',
      en: 'What role does BlockingQueue play in the producer-consumer pattern and the backpressure of a bounded queue?',
    },
    answer: {
      es: 'put bloquea si la cola acotada está llena y take si está vacía, de modo que el productor se frena solo y no crece la memoria sin límite.',
      en: 'put blocks if the bounded queue is full and take blocks if it is empty, so the producer slows down by itself and memory does not grow without limit.',
    },
    distractors: [
      {
        es: 'offer siempre inserta y agranda la cola; BlockingQueue solo sustituye wait y notify, pero no puede acotar la memoria del buffer.',
        en: 'offer always inserts and grows the queue; BlockingQueue only replaces wait and notify, but it cannot bound the memory of the buffer.',
      },
      {
        es: 'Una LinkedBlockingQueue sin capacidad es la elección habitual para contrapresión, porque los productores se bloquean al alcanzar el tamaño interno por defecto de 1024.',
        en: 'An unbounded LinkedBlockingQueue is the usual choice for backpressure, because producers block when they reach the default internal size of 1024.',
      },
    ],
    explanation: {
      es: 'BlockingQueue (Java 5) encapsula el protocolo wait/notify: put y take son bloqueantes, offer y poll no. ArrayBlockingQueue(n) o LinkedBlockingQueue(n) aplican contrapresión al llenarse; LinkedBlockingQueue() sin argumento usa Integer.MAX_VALUE y puede agotar el heap si el consumidor es más lento. Es la base de ThreadPoolExecutor, cuya cola de trabajo decide si los hilos extra se crean o las tareas se rechazan.',
      en: 'BlockingQueue (Java 5) encapsulates the wait/notify protocol: put and take are blocking, offer and poll are not. ArrayBlockingQueue(n) or LinkedBlockingQueue(n) apply backpressure when full; LinkedBlockingQueue() with no argument uses Integer.MAX_VALUE and can exhaust the heap if the consumer is slower. It is the basis of ThreadPoolExecutor, whose work queue decides whether extra threads are created or tasks are rejected.',
    },
  },
  {
    id: 'be-conc-17',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Qué problema resuelven los hilos virtuales de Java 21, qué es el pinning y por qué no sirven para trabajo de CPU?',
      en: 'What problem do Java 21 virtual threads solve, what is pinning, and why are they not suited to CPU work?',
    },
    answer: {
      es: 'Permiten millones de tareas bloqueantes de E/S baratas; el pinning pega el virtual al portador (synchronized o nativo) y el trabajo de CPU no gana más paralelismo que el de los portadores.',
      en: 'They allow millions of cheap blocking I/O tasks; pinning sticks the virtual thread to its carrier (synchronized or native) and CPU work does not gain more parallelism than that of the carriers.',
    },
    distractors: [
      {
        es: 'Los hilos virtuales aceleran el trabajo de CPU porque el planificador multiplexa mejor los núcleos que un ForkJoinPool de plataforma.',
        en: 'Virtual threads speed up CPU work because the scheduler multiplexes cores better than a platform ForkJoinPool.',
      },
      {
        es: 'El pinning solo ocurre con ReentrantLock; el bloque synchronized de Java 21 es seguro y nunca retiene al hilo portador.',
        en: 'Pinning only happens with ReentrantLock; a synchronized block in Java 21 is safe and never retains the carrier thread.',
      },
    ],
    explanation: {
      es: 'Un VirtualThread (JEP 444, Java 21) se monta sobre un hilo de plataforma del pool ForkJoin de portadores: al bloquear en I/O el runtime desmonta y el portador toma otro virtual, lo que resuelve el modelo un hilo por petición. En Java 21 un bloque synchronized o una llamada nativa fija (pin) al virtual en el portador y vuelve a ocupar un hilo OS durante la espera. ReentrantLock no pinea; el trabajo CPU-bound no crea más paralelismo real que el número de portadores, cercanos a los núcleos.',
      en: 'A VirtualThread (JEP 444, Java 21) is mounted on a platform thread from the carrier ForkJoin pool: on blocking I/O the runtime unmounts and the carrier takes another virtual thread, which solves the one-thread-per-request model. In Java 21 a synchronized block or a native call pins the virtual thread to the carrier and occupies an OS thread again during the wait. ReentrantLock does not pin; CPU-bound work does not create more real parallelism than the number of carriers, close to the number of cores.',
    },
  },
  {
    id: 'be-conc-18',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Cuál es la idea de la concurrencia estructurada en Java?',
      en: 'What is the idea of structured concurrency in Java?',
    },
    answer: {
      es: 'Las subtareas viven dentro de un ámbito que las espera, cancela y agrega errores, de modo que ningún hilo hijo sobrevive al bloque padre.',
      en: 'Subtasks live inside a scope that waits for them, cancels them and aggregates errors, so no child thread outlives the parent block.',
    },
    distractors: [
      {
        es: 'Es un ExecutorService mejorado que devuelve una List de Future y deja que el llamador decida cuándo hacer join de cada uno.',
        en: 'It is an improved ExecutorService that returns a List of Future and lets the caller decide when to join each one.',
      },
      {
        es: 'Los hilos virtuales ya imponen esa estructura, así que StructuredTaskScope es redundante en Java 21 y solo sirve de azúcar sintáctico.',
        en: 'Virtual threads already enforce that structure, so StructuredTaskScope is redundant in Java 21 and is only syntactic sugar.',
      },
    ],
    explanation: {
      es: 'La concurrencia estructurada, preview en Java 21 con StructuredTaskScope (JEP 453), trata un grupo de fork como una unidad: join espera a todos, ShutdownOnFailure cancela el resto al primer error y el ámbito cierra los hilos al salir del try-with-resources. Un CompletableFuture.runAsync suelto puede seguir vivo tras retornar el método, que es exactamente lo que se quiere evitar. Los hilos virtuales abaratan el bloqueo; no definen el ciclo de vida ni la cancelación conjunta.',
      en: 'Structured concurrency, preview in Java 21 with StructuredTaskScope (JEP 453), treats a group of forks as one unit: join waits for all, ShutdownOnFailure cancels the rest on the first error and the scope closes the threads on leaving try-with-resources. A loose CompletableFuture.runAsync can stay alive after the method returns, which is exactly what you want to avoid. Virtual threads make blocking cheap; they do not define the lifecycle or joint cancellation.',
    },
  },
  {
    id: 'be-conc-19',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Cómo se dimensiona un pool para trabajo de entrada y salida frente a trabajo de CPU?',
      en: 'How do you size a pool for I/O work versus CPU work?',
    },
    answer: {
      es: 'Para CPU, cerca del número de núcleos; para E/S, más hilos porque pasan tiempo bloqueados, según el ratio de espera frente a cómputo.',
      en: 'For CPU work, close to the number of cores; for I/O, more threads because they spend time blocked, according to the wait-to-compute ratio.',
    },
    distractors: [
      {
        es: 'El tamaño correcto es siempre el número de núcleos, porque crear más hilos que CPU solo añade cambios de contexto sin ganar throughput.',
        en: 'The right size is always the number of cores, because creating more threads than CPUs only adds context switches without gaining throughput.',
      },
      {
        es: 'Para E/S conviene un cached pool sin tope, de modo que ninguna tarea se encole y la contrapresión no retrase al cliente.',
        en: 'For I/O an unbounded cached pool is best, so no task is queued and backpressure does not delay the client.',
      },
    ],
    explanation: {
      es: 'Un pool CPU-bound (cálculo, cifrado, parallelStream) se satura con Runtime.getRuntime().availableProcessors() hilos; de más, el cambio de contexto empeora. En E/S bloqueante la fórmula clásica es Ncpu * (1 + espera/cómputo): si un hilo espera el 90 por ciento del tiempo hacen falta muchos más. En Spring Boot 3 el pool de Tomcat y el de @Async deben acotarse; newCachedThreadPool sin límite convierte un pico de latencia en un millar de hilos y un OutOfMemoryError.',
      en: 'A CPU-bound pool (compute, encryption, parallelStream) saturates with Runtime.getRuntime().availableProcessors() threads; more of them make context switching worse. For blocking I/O the classic formula is Ncpu * (1 + wait/compute): if a thread waits 90 percent of the time, many more are needed. In Spring Boot 3 the Tomcat pool and the @Async one must be bounded; an unbounded newCachedThreadPool turns a latency spike into a thousand threads and an OutOfMemoryError.',
    },
  },
  {
    id: 'be-conc-20',
    topic: 'Concurrencia Java',
    prompt: {
      es: '¿Por qué una transacción de Spring no viaja al hilo nuevo que se lanza dentro del método?',
      en: 'Why does a Spring transaction not travel to a new thread that is started inside the method?',
    },
    answer: {
      es: 'TransactionSynchronizationManager guarda la transacción en un ThreadLocal; el hilo hijo no hereda ese contexto ni la conexión ligada.',
      en: 'TransactionSynchronizationManager stores the transaction in a ThreadLocal; the child thread does not inherit that context nor the bound connection.',
    },
    distractors: [
      {
        es: 'Spring Boot 3 copia automáticamente el contexto transaccional a los hilos hijos de @Async y de CompletableFuture.runAsync.',
        en: 'Spring Boot 3 automatically copies the transactional context to child threads of @Async and of CompletableFuture.runAsync.',
      },
      {
        es: 'La transacción vive en la Connection del EntityManager, que es seguro entre hilos, así que el hilo nuevo participa en el mismo commit.',
        en: 'The transaction lives on the EntityManager Connection, which is thread-safe, so the new thread participates in the same commit.',
      },
    ],
    explanation: {
      es: 'Spring liga DataSourceUtils y EntityManager al hilo actual mediante TransactionSynchronizationManager, que es un ThreadLocal. Un new Thread, un submit a un Executor o un @Async (proxy de Spring Boot 3) arrancan sin esa liga: o no hay transacción, o si el método destino también está anotado se abre otra distinta. EntityManager de JPA no es thread-safe y compartir la misma Connection entre hilos corrompe el commit. Para trabajo posterior al commit se usa TransactionSynchronization.afterCommit, no un hilo lanzado a mitad de la transacción.',
      en: 'Spring binds DataSourceUtils and EntityManager to the current thread through TransactionSynchronizationManager, which is a ThreadLocal. A new Thread, a submit to an Executor or an @Async method (Spring Boot 3 proxy) start without that binding: either there is no transaction, or if the target method is also annotated a different one is opened. A JPA EntityManager is not thread-safe and sharing the same Connection across threads corrupts the commit. For work after commit you use TransactionSynchronization.afterCommit, not a thread launched in the middle of the transaction.',
    },
  },
];
