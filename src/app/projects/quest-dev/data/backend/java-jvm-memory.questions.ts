import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_JVM_MEMORY_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-jvm-01',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Qué diferencia hay entre una recolección menor y una mayor en un heap generacional?',
      en: 'What is the difference between a minor collection and a major one in a generational heap?',
    },
    answer: {
      es: 'La menor recorre solo la generación joven (eden y supervivientes); la mayor recorre la generación vieja y suele detener el mundo sobre el heap completo.',
      en: 'A minor collection scans only the young generation (eden and survivors); a major collection scans the old generation and often stops the world over the whole heap.',
    },
    distractors: [
      {
        es: 'La menor compacta la generación vieja porque allí mueren los objetos; la mayor vacía eden cuando se agota -XX:NewRatio.',
        en: 'A minor collection compacts the old generation because objects die there; a major collection clears eden when -XX:NewRatio is exhausted.',
      },
      {
        es: 'No hay diferencia de alcance: ambas recorren todo el heap, y menor o mayor solo indica si se cumplió -XX:MaxGCPauseMillis.',
        en: 'There is no difference in scope: both scan the whole heap, and minor versus major only reports whether -XX:MaxGCPauseMillis was met.',
      },
    ],
    explanation: {
      es: 'La hipótesis generacional asume que la mayoría de los objetos mueren jóvenes, así que un minor GC de eden y survivor es barato y frecuente. Los que sobreviven varias copias entre S0 y S1 se promocionan a old y solo se recogen en un major o full GC. Banderas típicas: -Xms, -Xmx, -XX:NewRatio y -XX:SurvivorRatio; si old se llena aparece OutOfMemoryError: Java heap space.',
      en: 'The generational hypothesis assumes most objects die young, so a minor GC of eden and survivor is cheap and frequent. Objects that survive several copies between S0 and S1 are promoted to old and are collected only on a major or full GC. Typical flags are -Xms, -Xmx, -XX:NewRatio and -XX:SurvivorRatio; if old fills up you get OutOfMemoryError: Java heap space.',
    },
  },
  {
    id: 'be-jvm-02',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Cómo se comparan G1, Parallel y ZGC si el criterio es rendimiento total frente a pausas?',
      en: 'How do G1, Parallel and ZGC compare when the criterion is throughput versus pause times?',
    },
    answer: {
      es: 'Parallel maximiza el rendimiento total con pausas stop-the-world largas; G1 apunta a un objetivo de pausa con recolecciones mixtas; ZGC prioriza pausas muy cortas de forma concurrente, a costa de algo de throughput.',
      en: 'Parallel maximises throughput with long stop-the-world pauses; G1 aims at a pause target with mixed collections; ZGC prioritises very short concurrent pauses, at the cost of some throughput.',
    },
    distractors: [
      {
        es: 'G1 es siempre el de menor pausa porque es el default desde Java 9 y ejecuta todo el ciclo en paralelo con la aplicación, igual que ZGC.',
        en: 'G1 always has the shortest pauses because it is the default since Java 9 and runs the whole cycle in parallel with the application, just like ZGC.',
      },
      {
        es: 'Parallel está obsoleto en Java 17 y la JVM rechaza -XX:+UseParallelGC; ZGC es el único recolector de alto throughput.',
        en: 'Parallel is obsolete in Java 17 and the JVM rejects -XX:+UseParallelGC; ZGC is the only high-throughput collector.',
      },
    ],
    explanation: {
      es: 'Parallel (-XX:+UseParallelGC) sigue siendo válido para lotes que toleran pausas a cambio de más trabajo útil por segundo. G1 (-XX:+UseG1GC, default desde Java 9) usa regiones y -XX:MaxGCPauseMillis (200 ms por defecto) para acotar el stop-the-world, pero no es fully concurrent. ZGC (-XX:+UseZGC) reloca con barreras de carga y pausas típicas de un milisegundo o menos, con un poco menos de throughput.',
      en: 'Parallel (-XX:+UseParallelGC) remains valid for batch jobs that tolerate pauses in exchange for more useful work per second. G1 (-XX:+UseG1GC, default since Java 9) uses regions and -XX:MaxGCPauseMillis (200 ms by default) to bound stop-the-world, but it is not fully concurrent. ZGC (-XX:+UseZGC) relocates with load barriers and typical pauses of a millisecond or less, with a bit less throughput.',
    },
  },
  {
    id: 'be-jvm-03',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Cómo se distingue un OutOfMemoryError de heap de uno de Metaspace y de GC overhead limit exceeded?',
      en: 'How do you distinguish an OutOfMemoryError of heap from Metaspace and from GC overhead limit exceeded?',
    },
    answer: {
      es: 'Java heap space significa que los objetos vivos superan -Xmx; Metaspace, que los metadatos de clase superan -XX:MaxMetaspaceSize; GC overhead, que el recolector gastó casi todo el tiempo para liberar casi nada.',
      en: 'Java heap space means live objects exceed -Xmx; Metaspace means class metadata exceeded -XX:MaxMetaspaceSize; GC overhead means the collector spent almost all time freeing almost nothing.',
    },
    distractors: [
      {
        es: 'Metaspace es el equivalente a Java heap space para cadenas internadas, porque Java 8 movió el pool de strings a Metaspace al desaparecer PermGen.',
        en: 'Metaspace is the Java heap space equivalent for interned strings, because Java 8 moved the string pool into Metaspace when PermGen disappeared.',
      },
      {
        es: 'GC overhead limit exceeded se lanza cuando no se cumple -XX:MaxGCPauseMillis, no cuando la memoria está agotada.',
        en: 'GC overhead limit exceeded is thrown when -XX:MaxGCPauseMillis is not met, not when memory is exhausted.',
      },
    ],
    explanation: {
      es: 'Java heap space es el conjunto vivo por encima de -Xmx. Metaspace es memoria nativa de clases, no el pool de strings: las cadenas internadas viven en el heap desde Java 7. GC overhead (-XX:+UseGCOverheadLimit, -XX:GCTimeLimit, -XX:GCHeapFreeLimit) salta cuando el GC recupera demasiado poco, casi siempre una fuga a punto de lanzar OutOfMemoryError: Java heap space, OutOfMemoryError: Metaspace u OutOfMemoryError: GC overhead limit exceeded.',
      en: 'Java heap space is the live set above -Xmx. Metaspace is native class metadata, not the string pool: interned strings live on the heap since Java 7. GC overhead (-XX:+UseGCOverheadLimit, -XX:GCTimeLimit, -XX:GCHeapFreeLimit) fires when GC recovers too little, almost always a leak about to throw OutOfMemoryError: Java heap space, OutOfMemoryError: Metaspace or OutOfMemoryError: GC overhead limit exceeded.',
    },
  },
  {
    id: 'be-jvm-04',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Por qué un proceso Java puede fugar memoria aunque el recolector esté en marcha?',
      en: 'Why can a Java process leak memory even though the collector is running?',
    },
    answer: {
      es: 'Los objetos siguen alcanzables desde colecciones estáticas, listeners no desregistrados o valores de ThreadLocal que sobreviven a la petición, así que el recolector no tiene derecho a liberarlos.',
      en: 'Objects remain reachable from static collections, listeners that were never removed or ThreadLocal values that outlive the request, so the collector has no right to reclaim them.',
    },
    distractors: [
      {
        es: 'El recolector solo libera la generación joven, de modo que todo lo promocionado fuga hasta que se llama System.gc o se activa -XX:+ExplicitGCInvokesConcurrent.',
        en: 'The collector only reclaims the young generation, so anything promoted leaks until System.gc is called or -XX:+ExplicitGCInvokesConcurrent is enabled.',
      },
      {
        es: 'Una fuga Java es siempre memoria nativa de hilos; los objetos del heap no pueden fugar porque el análisis de alcanzabilidad es completo.',
        en: 'A Java leak is always native memory from threads; heap objects cannot leak because reachability analysis is complete.',
      },
    ],
    explanation: {
      es: 'El GC solo recoge lo inalcanzable. Un HashMap estático, un listener olvidado o un ThreadLocal sin remove en un pool de hilos mantienen un camino fuerte desde una raíz. Se diagnostica con -XX:+HeapDumpOnOutOfMemoryError y un volcado; el fallo sigue siendo OutOfMemoryError: Java heap space, no un bug del recolector.',
      en: 'The GC only collects the unreachable. A static HashMap, a forgotten listener or a ThreadLocal without remove on a pooled thread keeps a strong path from a root. Diagnose it with -XX:+HeapDumpOnOutOfMemoryError and a dump; the failure is still OutOfMemoryError: Java heap space, not a collector bug.',
    },
  },
  {
    id: 'be-jvm-05',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Cuándo se usa una referencia blanda, débil o fantasma en lugar de una fuerte?',
      en: 'When do you use a soft, weak or phantom reference instead of a strong one?',
    },
    answer: {
      es: 'Blanda para cachés que deben ceder bajo presión de memoria; débil para mapas que no deben anclar la clave (WeakHashMap); fantasma con ReferenceQueue para limpiar después de la muerte, sin exponer el objeto.',
      en: 'Soft for caches that should yield under memory pressure; weak for maps that must not pin the key (WeakHashMap); phantom with a ReferenceQueue to clean up after death, without exposing the object.',
    },
    distractors: [
      {
        es: 'Las débiles solo se limpian en un full GC, mientras que las blandas se limpian siempre en el siguiente minor GC, así que una caché debe usar débiles.',
        en: 'Weak references are cleared only on a full GC, while soft ones are always cleared on the next minor GC, so a cache must use weak references.',
      },
      {
        es: 'PhantomReference.get devuelve el objeto para poder resucitarlo, y por eso sustituye a finalize.',
        en: 'PhantomReference.get returns the object so you can resurrect it, which is why it replaces finalize.',
      },
    ],
    explanation: {
      es: 'SoftReference suele sobrevivir hasta que la JVM está cerca de OutOfMemoryError: Java heap space, con política -XX:SoftRefLRUPolicyMSPerMB. WeakReference se limpia en cuanto no quedan fuertes, en el siguiente GC. PhantomReference.get siempre devuelve null, así que no hay resurrección: el aviso llega por la cola. La fuerte es el default y ancla el objeto mientras exista.',
      en: 'SoftReference tends to survive until the JVM is close to OutOfMemoryError: Java heap space, with policy -XX:SoftRefLRUPolicyMSPerMB. WeakReference is cleared as soon as no strong refs remain, on the next GC. PhantomReference.get always returns null, so there is no resurrection: the notice arrives on the queue. Strong is the default and pins the object for as long as it exists.',
    },
  },
  {
    id: 'be-jvm-06',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Por qué finalize está obsoleto y qué ofrece Cleaner en su lugar?',
      en: 'Why is finalize obsolete and what does Cleaner offer instead?',
    },
    answer: {
      es: 'finalize tiene un momento indefinido, puede resucitar la instancia y serializa la limpieza en el hilo Finalizer; Cleaner registra un Runnable sobre una referencia fantasma procesada por su propio hilo, sin acceso al objeto.',
      en: 'finalize has undefined timing, can resurrect the instance and serialises cleanup on the Finalizer thread; Cleaner registers a Runnable on a phantom reference processed by its own thread, without access to the object.',
    },
    distractors: [
      {
        es: 'finalize se eliminó en Java 17, así que invocarlo lanza UnsupportedOperationException; Cleaner es solo un alias de Runtime.runFinalization.',
        en: 'finalize was removed in Java 17, so calling it throws UnsupportedOperationException; Cleaner is only an alias of Runtime.runFinalization.',
      },
      {
        es: 'Cleaner ejecuta la limpieza de forma síncrona en el hilo que asigna, antes de devolver new, y por eso es más rápido que finalize.',
        en: 'Cleaner runs the cleanup synchronously on the allocating thread before returning new, which is why it is faster than finalize.',
      },
    ],
    explanation: {
      es: 'finalize está deprecated (for removal desde Java 18) porque un Finalizer lento retrasa la recolección y la resurrección rompe invariantes del GC. java.lang.ref.Cleaner usa PhantomReference y una ReferenceQueue, de modo que el estado a liberar debe guardarse fuera del objeto. Prefiere AutoCloseable; si no, las fugas nativas crecen fuera del heap y no siempre aparecen como OutOfMemoryError: Java heap space.',
      en: 'finalize is deprecated (for removal since Java 18) because a slow Finalizer delays reclamation and resurrection breaks collector invariants. java.lang.ref.Cleaner uses PhantomReference and a ReferenceQueue, so the state to free must be stored outside the object. Prefer AutoCloseable; otherwise native leaks grow off-heap and do not always show up as OutOfMemoryError: Java heap space.',
    },
  },
  {
    id: 'be-jvm-07',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Qué revela el árbol de dominadores de un volcado de heap que no muestra un histograma de clases?',
      en: 'What does the dominator tree of a heap dump reveal that a class histogram does not show?',
    },
    answer: {
      es: 'El conjunto retenido: un dominador es el objeto cuya desaparición haría inalcanzable todo un subgrafo, y así expone la raíz de la fuga en lugar de solo qué tipo ocupa bytes.',
      en: 'The retained set: a dominator is the object whose removal would make a whole subgraph unreachable, so it exposes the leak root rather than only which type occupies bytes.',
    },
    distractors: [
      {
        es: 'El árbol de dominadores ordena instancias por tamaño superficial, lo que ya identifica la clase que llena -Xmx.',
        en: 'The dominator tree sorts instances by shallow size, which already identifies the class that fills -Xmx.',
      },
      {
        es: 'Imprime la pila del hilo que asignó cada instancia, así que sustituye a un perfilador de asignaciones.',
        en: 'It prints the stack of the thread that allocated every instance, so it replaces an allocation profiler.',
      },
    ],
    explanation: {
      es: 'El tamaño superficial es el objeto mismo; el retenido es lo que se liberaría si ese objeto desapareciera. Un histograma puede mostrar millones de char[] mientras el dominador es una caché estática. El volcado se obtiene con jcmd PID GC.heap_dump o con -XX:+HeapDumpOnOutOfMemoryError y -XX:HeapDumpPath, y se abre en MAT. Sirve para OutOfMemoryError: Java heap space, no para StackOverflowError.',
      en: 'Shallow size is the object itself; retained size is what would be freed if that object disappeared. A histogram can show millions of char[] while the dominator is one static cache. Produce the dump with jcmd PID GC.heap_dump or with -XX:+HeapDumpOnOutOfMemoryError and -XX:HeapDumpPath, then open it in MAT. It answers OutOfMemoryError: Java heap space, not StackOverflowError.',
    },
  },
  {
    id: 'be-jvm-08',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Qué puede hacer el JIT cuando el análisis de escape demuestra que un objeto no sale del método compilado?',
      en: 'What can the JIT do when escape analysis proves that an object does not leave the compiled method?',
    },
    answer: {
      es: 'Puede aplicar reemplazo escalar: los campos viven en registros o en la pila y desaparece la asignación en el heap.',
      en: 'It can apply scalar replacement: fields live in registers or on the stack and the heap allocation disappears.',
    },
    distractors: [
      {
        es: 'El objeto se mueve a memoria nativa fuera del heap, como un DirectByteBuffer, de modo que G1 nunca lo ve.',
        en: 'The object is moved to native off-heap memory, as with DirectByteBuffer, so G1 never sees it.',
      },
      {
        es: 'El JIT sigue asignándolo en eden para preservar la identidad, pero reescribe new como un objeto sin payload.',
        en: 'The JIT still allocates it in eden to preserve identity, but rewrites new as an object with no payload.',
      },
    ],
    explanation: {
      es: 'HotSpot rara vez reserva un objeto con cabecera en la pila: con -XX:+DoEscapeAnalysis y -XX:+EliminateAllocations (activos por defecto) sustituye el objeto por sus campos. Si se retorna, se guarda en un campo o se publica a otro hilo, escapa y debe ir al heap. Por eso un microbenchmark de new Point dentro de un bucle puede mostrar cero asignaciones tras el calentamiento, y no es un fallo del GC.',
      en: 'HotSpot rarely reserves a headered object on the stack: with -XX:+DoEscapeAnalysis and -XX:+EliminateAllocations (on by default) it replaces the object with its fields. If it is returned, stored in a field or published to another thread, it escapes and must go to the heap. That is why a microbenchmark of new Point inside a loop can show zero allocations after warmup, and it is not a GC failure.',
    },
  },
  {
    id: 'be-jvm-09',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Por qué una medición de latencia justo tras el arranque puede parecer mucho peor que en producción, dada la compilación por niveles del JIT?',
      en: 'Why can a latency measurement taken just after startup look much worse than production, given JIT tiered compilation?',
    },
    answer: {
      es: 'El código empieza en el intérprete, pasa por C1 con perfilado y luego a C2; hasta que los métodos calientes llegan a C2, la medición incluye marcos interpretados y poco optimizados.',
      en: 'Code starts in the interpreter, then C1 with profiling and later C2; until hot methods reach C2, the measurement includes interpreted and lightly optimised frames.',
    },
    distractors: [
      {
        es: 'Tras el calentamiento el JIT desoptimiza todo para mantener la corrección, así que los primeros segundos son lo más rápido que verás.',
        en: 'After warmup the JIT deoptimises everything to stay correct, so the first seconds are the fastest you will ever see.',
      },
      {
        es: '-Xcomp compila cada método a C2 durante el arranque, de modo que un test corto ya iguala la latencia de producción.',
        en: '-Xcomp compiles every method to C2 during startup, so a short test already matches production latency.',
      },
    ],
    explanation: {
      es: '-XX:+TieredCompilation (default) usa el nivel 0 intérprete, los niveles 1-3 C1 y el nivel 4 C2. Hace falta calentamiento para que C2 vea perfiles estables; la desoptimización ocurre en sitios megamórficos, no como un frenazo global tras el arranque. -Xcomp fuerza compilación y distorsiona el perfil. -XX:CompileThreshold y -XX:TieredStopAtLevel cambian cuándo se sale del intérprete.',
      en: '-XX:+TieredCompilation (default) uses tier 0 interpreter, tiers 1-3 C1 and tier 4 C2. Warmup is required so C2 sees stable profiles; deoptimisation happens on megamorphic sites, not as a global slowdown after startup. -Xcomp forces compilation and distorts the profile. -XX:CompileThreshold and -XX:TieredStopAtLevel change when you leave the interpreter.',
    },
  },
  {
    id: 'be-jvm-10',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Por qué hace falta JMH en lugar de un bucle for escrito a mano, incluso después del calentamiento?',
      en: 'Why is JMH needed instead of a handwritten for loop, even after warmup?',
    },
    answer: {
      es: 'El JIT puede borrar resultados no usados (eliminación de código muerto) o plegar constantes el cuerpo, de modo que el bucle que cronometraste puede no hacer nada.',
      en: 'The JIT can delete unused results (dead code elimination) or constant-fold the body, so the loop you timed may do nothing.',
    },
    distractors: [
      {
        es: 'JMH solo hace falta en pruebas con varios hilos; un bucle de un hilo tras Thread.sleep ya produce una latencia válida.',
        en: 'JMH is only required for multi-threaded tests; a single-thread loop after Thread.sleep already produces a valid latency.',
      },
      {
        es: 'La única distorsión son las pausas del GC, resuelta ejecutando con -XX:+UseEpsilonGC para que las asignaciones no muevan la media.',
        en: 'The only distortion is GC pauses, solved by running with -XX:+UseEpsilonGC so allocations never move the average.',
      },
    ],
    explanation: {
      es: 'La eliminación de código muerto, el movimiento de invariantes y el inlining hacen mentir a los bucles ingenuos. JMH consume resultados con un Blackhole y controla calentamiento, forks y tiempo de iteración para que C2 no borre el trabajo. Epsilon (-XX:+UnlockExperimentalVMOptions -XX:+UseEpsilonGC) sirve para ver asignaciones, pero las convierte en OutOfMemoryError: Java heap space en lugar de arreglar el benchmark. -XX:+PrintCompilation ayuda si sospechas que el método nunca se compiló.',
      en: 'Dead code elimination, loop-invariant motion and inlining make naive loops lie. JMH consumes results through a Blackhole and controls warmup, forks and iteration time so C2 cannot erase the work. Epsilon (-XX:+UnlockExperimentalVMOptions -XX:+UseEpsilonGC) is useful to see allocations, but it turns them into OutOfMemoryError: Java heap space instead of fixing the benchmark. -XX:+PrintCompilation helps if you suspect the method was never compiled.',
    },
  },
  {
    id: 'be-jvm-11',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Qué hace String.intern en Java 17/21 y dónde vive el pool de strings?',
      en: 'What does String.intern do in Java 17/21 and where does the string pool live?',
    },
    answer: {
      es: 'intern devuelve la instancia canónica de la tabla de strings, que vive en el heap de Java y no en Metaspace; los literales se internan solos.',
      en: 'intern returns the canonical instance from the string table, which lives in the Java heap and not in Metaspace; literals are interned automatically.',
    },
    distractors: [
      {
        es: 'Las cadenas internadas viven en Metaspace, así que llenar el pool lanza OutOfMemoryError: Metaspace y nunca Java heap space.',
        en: 'Interned strings live in Metaspace, so filling the pool throws OutOfMemoryError: Metaspace and never Java heap space.',
      },
      {
        es: 'intern copia siempre los caracteres a memoria nativa, y por eso es la forma recomendada de encoger el heap.',
        en: 'intern always copies the characters to native memory, which is why it is the recommended way to shrink the heap.',
      },
    ],
    explanation: {
      es: 'Desde Java 7 la tabla de strings está en el heap, así que un intern ingenuo de datos dinámicos puede lanzar OutOfMemoryError: Java heap space. Metaspace guarda metadatos de clase, no el pool. El tamaño de la tabla se ajusta con -XX:StringTableSize; una tabla pequeña encarece intern en CPU. Prefiere equals para comparar, salvo que hayas medido una ganancia real de intern.',
      en: 'Since Java 7 the string table is on the heap, so a naive intern of dynamic data can throw OutOfMemoryError: Java heap space. Metaspace holds class metadata, not the pool. Table size is tuned with -XX:StringTableSize; a small table makes intern more expensive in CPU. Prefer equals for comparison unless you have measured a real win from intern.',
    },
  },
  {
    id: 'be-jvm-12',
    topic: 'JVM y memoria',
    prompt: {
      es: 'Visto el bytecode, ¿por qué concatenar con + dentro de un bucle sigue siendo distinto de un StringBuilder reutilizado en Java 17/21?',
      en: 'From the bytecode, why is concatenating with + inside a loop still different from a reused StringBuilder in Java 17/21?',
    },
    answer: {
      es: 'javac reescribe una sola expresión con + mediante StringConcatFactory o un builder temporal, pero cada iteración es un concat nuevo que copia la cadena creciente; un StringBuilder a lo largo del bucle es lineal.',
      en: 'javac rewrites a single expression with + via StringConcatFactory or a temporary builder, but each iteration is a new concat that copies the growing string; one StringBuilder across the loop is linear.',
    },
    distractors: [
      {
        es: 'javac emite un solo invokedynamic para todo el bucle, así que + y StringBuilder producen el mismo bytecode desde Java 9.',
        en: 'javac emits one invokedynamic for the whole loop, so + and StringBuilder produce the same bytecode since Java 9.',
      },
      {
        es: 'El JIT reescribe cualquier bucle de + en un único StringBuilder tras C2, de modo que el estilo en fuente es solo legibilidad.',
        en: 'The JIT rewrites any loop of + into a single StringBuilder after C2, so the source style is only readability.',
      },
    ],
    explanation: {
      es: 'En javap, un bucle s = s + chunk muestra un concat por iteración (invokedynamic StringConcatFactory desde Java 9, o StringBuilder en Java 8). El compilador no iza un builder a través del bucle. Un StringBuilder de campo reutilizado sin resetear también puede retener memoria. No hay un Error específico, pero las copias asignan y pueden contribuir a OutOfMemoryError: Java heap space y a pausas de GC.',
      en: 'In javap, a loop of s = s + chunk shows a concat per iteration (invokedynamic StringConcatFactory since Java 9, or StringBuilder in Java 8). The compiler does not hoist a builder across the loop. A field StringBuilder reused without resetting can also retain memory. There is no specific Error, but the copies allocate and can contribute to OutOfMemoryError: Java heap space and to GC pauses.',
    },
  },
  {
    id: 'be-jvm-13',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Por qué == entre dos Integer puede ser verdadero para 127 y falso para 128, y cuál es el costo del autoboxing?',
      en: 'Why can == between two Integer values be true for 127 and false for 128, and what is the cost of autoboxing?',
    },
    answer: {
      es: 'Integer.valueOf cachea de -128 a 127, así que el autoboxing reutiliza instancias en ese rango; 128 crea un objeto nuevo y == compara referencias. El autoboxing además asigna y presiona al GC.',
      en: 'Integer.valueOf caches -128 to 127, so autoboxing reuses instances in that range; 128 creates a new object and == compares references. Autoboxing also allocates and stresses the GC.',
    },
    distractors: [
      {
        es: 'El JIT desempaqueta ambos lados de == entre Integer, así que == compara siempre el int y nunca falla.',
        en: 'The JIT unboxes both sides of == between Integer, so == always compares the int and never fails.',
      },
      {
        es: 'La caché cubre de 0 a 256 por defecto y -XX:AutoBoxCacheMax no puede cambiarla porque el rango está fijo en el JLS.',
        en: 'The cache covers 0 to 256 by default and -XX:AutoBoxCacheMax cannot change it because the range is hardcoded in the JLS.',
      },
    ],
    explanation: {
      es: 'El JLS obliga a cachear Integer de -128 a 127; -XX:AutoBoxCacheMax puede subir el tope superior, no el inferior. == sobre referencias no es equals, así que dos Integer de 128 suelen ser distintos. Un bucle que hace autoboxing en cada paso puede contribuir a OutOfMemoryError: Java heap space. Prefiere int primitivos y equals cuando compares envoltorios.',
      en: 'The JLS requires the Integer cache for -128 to 127; -XX:AutoBoxCacheMax may raise the upper bound, not the lower one. == on references is not equals, so two Integer instances of 128 are usually distinct. A loop that autoboxes on every step can contribute to OutOfMemoryError: Java heap space. Prefer primitive int and equals when you compare wrappers.',
    },
  },
  {
    id: 'be-jvm-14',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Cuándo Class.forName lanza ClassNotFoundException y cuándo la JVM lanza NoClassDefFoundError?',
      en: 'When does Class.forName throw ClassNotFoundException and when does the JVM throw NoClassDefFoundError?',
    },
    answer: {
      es: 'ClassNotFoundException es una excepción comprobada cuando el código carga de forma explícita una clase ausente; NoClassDefFoundError es un Error cuando una clase que compiló ahora no puede enlazarse, a menudo tras un inicializador estático fallido.',
      en: 'ClassNotFoundException is a checked exception when code explicitly loads a missing class; NoClassDefFoundError is an Error when a class that compiled now cannot be linked, often after a failed static initializer.',
    },
    distractors: [
      {
        es: 'Son el mismo fallo: NoClassDefFoundError es el envoltorio no comprobado que Spring Boot usa alrededor de ClassNotFoundException.',
        en: 'They are the same failure: NoClassDefFoundError is the unchecked wrapper Spring Boot uses around ClassNotFoundException.',
      },
      {
        es: 'ClassNotFoundException es un Error del cargador bootstrap, mientras que NoClassDefFoundError es la excepción comprobada de Class.forName.',
        en: 'ClassNotFoundException is an Error of the bootstrap loader, while NoClassDefFoundError is the checked exception of Class.forName.',
      },
    ],
    explanation: {
      es: 'ClassNotFoundException extiende Exception y sale de Class.forName o ClassLoader.loadClass. NoClassDefFoundError extiende LinkageError: la clase existía al compilar pero falta en runtime o su inicializador estático falló (busca antes ExceptionInInitializerError). Un acceso posterior sigue lanzando NoClassDefFoundError aunque el jar haya vuelto. Es enlace, no OutOfMemoryError.',
      en: 'ClassNotFoundException extends Exception and comes from Class.forName or ClassLoader.loadClass. NoClassDefFoundError extends LinkageError: the class existed at compile time but is missing at runtime or its static initializer failed (look for ExceptionInInitializerError first). A later access still throws NoClassDefFoundError even if the jar is back. This is linkage, not OutOfMemoryError.',
    },
  },
  {
    id: 'be-jvm-15',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Cómo es la jerarquía de cargadores de clases en un jar ejecutable de Spring Boot?',
      en: 'What does the class-loader hierarchy look like in an executable Spring Boot jar?',
    },
    answer: {
      es: 'Bootstrap, luego platform, luego el cargador de aplicación del jar externo, y encima LaunchedURLClassLoader, que ve BOOT-INF/classes y los jars anidados de BOOT-INF/lib.',
      en: 'Bootstrap, then platform, then the application loader of the outer jar, and on top LaunchedURLClassLoader, which sees BOOT-INF/classes and the nested jars in BOOT-INF/lib.',
    },
    distractors: [
      {
        es: 'El fat jar se explota sobre el cargador bootstrap, así que todas las librerías comparten el boot classpath y no hay una capa extra.',
        en: 'The fat jar is exploded onto the bootstrap loader, so every library shares the boot classpath and there is no extra layer.',
      },
      {
        es: 'Spring Boot sustituye el cargador bootstrap por uno que lee jars anidados, y por eso hace falta -Xbootclasspath para arrancar.',
        en: 'Spring Boot replaces the bootstrap loader with one that reads nested jars, which is why -Xbootclasspath is required to start.',
      },
    ],
    explanation: {
      es: 'Los jars anidados no están en el classpath del AppClassLoader plano; JarLauncher instala org.springframework.boot.loader.LaunchedURLClassLoader. Un Class.forName con el cargador equivocado lanza ClassNotFoundException aunque la clase esté dentro de BOOT-INF/lib. No lo confundas con NoClassDefFoundError de un inicializador estático roto. En desarrollo, Devtools puede añadir un RestartClassLoader encima.',
      en: 'Nested jars are not on the plain AppClassLoader classpath; JarLauncher installs org.springframework.boot.loader.LaunchedURLClassLoader. Class.forName from the wrong loader yields ClassNotFoundException even if the class sits inside BOOT-INF/lib. Do not confuse this with NoClassDefFoundError from a broken static initializer. In development, Devtools may add a RestartClassLoader on top.',
    },
  },
  {
    id: 'be-jvm-16',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Qué provoca normalmente un StackOverflowError con recursión profunda y qué bandera dimensiona la pila?',
      en: 'What typically causes StackOverflowError with deep recursion and which flag sizes the stack?',
    },
    answer: {
      es: 'Cada llamada apila un marco en la pila del hilo; cuando esa pila supera -Xss, la JVM lanza StackOverflowError. Es por hilo e independiente de -Xmx.',
      en: 'Each call pushes a frame on the thread stack; when that stack exceeds -Xss, the JVM throws StackOverflowError. It is per thread and independent of -Xmx.',
    },
    distractors: [
      {
        es: 'StackOverflowError significa que la generación joven se agotó, así que hay que subir -Xmx junto con -Xss.',
        en: 'StackOverflowError means the young generation is exhausted, so you must raise -Xmx together with -Xss.',
      },
      {
        es: 'El JIT convierte la recursión en un bucle, de modo que StackOverflowError en producción solo ocurre si -Xss es menor que la pila nativa C del sistema operativo.',
        en: 'The JIT turns recursion into a loop, so StackOverflowError in production only happens if -Xss is smaller than the native C stack of the operating system.',
      },
    ],
    explanation: {
      es: '-Xss (por ejemplo -Xss1m) fija la pila de los hilos de plataforma; arreglos locales enormes o recursión profunda la consumen. Este Error no es OutOfMemoryError: Java heap space y un volcado de heap no lo explica: usa un volcado de hilos para ver los marcos que se repiten. Los virtual threads de Java 21 guardan pila en el heap, pero una recursión extrema sigue pudiendo lanzar StackOverflowError.',
      en: '-Xss (for example -Xss1m) sets the stack of platform threads; huge local arrays or deep recursion consume it. This Error is not OutOfMemoryError: Java heap space and a heap dump will not explain it: use a thread dump to see the repeating frames. Virtual threads in Java 21 store stacks on the heap, but extreme recursion can still throw StackOverflowError.',
    },
  },
  {
    id: 'be-jvm-17',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Qué es un ByteBuffer directo, dónde vive y cuándo compensa usarlo?',
      en: 'What is a direct ByteBuffer, where does it live and when is it worth using?',
    },
    answer: {
      es: 'allocateDirect reserva memoria nativa fuera del heap de Java para I/O de copia cero con channels; el objeto ByteBuffer es pequeño en el heap y la región nativa se libera vía Cleaner.',
      en: 'allocateDirect reserves native memory outside the Java heap for zero-copy I/O with channels; the ByteBuffer object is tiny on the heap and the native region is freed via Cleaner.',
    },
    distractors: [
      {
        es: 'Los buffers directos viven en Metaspace, así que -XX:MaxMetaspaceSize los limita y G1 compacta esa zona.',
        en: 'Direct buffers live in Metaspace, so -XX:MaxMetaspaceSize caps them and G1 compacts that space.',
      },
      {
        es: 'Siempre son más rápidos que los buffers de heap, así que cada mensaje pequeño de NIO debería usar allocateDirect.',
        en: 'They are always faster than heap buffers, so every small NIO message should use allocateDirect.',
      },
    ],
    explanation: {
      es: 'El tope es -XX:MaxDirectMemorySize; superarlo lanza OutOfMemoryError: Direct buffer memory, que no es Java heap space. Asignar y liberar es caro, así que compensan en buffers grandes y duraderos (Netty, ficheros, sockets), no en mensajes diminutos de vida corta. El objeto Java puede recolectarse mientras la nativa espera al Cleaner, lo que parece una fuga nativa si rotas buffers sin parar.',
      en: 'The cap is -XX:MaxDirectMemorySize; exceeding it throws OutOfMemoryError: Direct buffer memory, which is not Java heap space. Allocation and release are expensive, so they pay off for large long-lived buffers (Netty, files, sockets), not for tiny short-lived messages. The Java object can be collected while native memory waits for the Cleaner, which looks like a native leak if you churn buffers.',
    },
  },
  {
    id: 'be-jvm-18',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Cómo descubre la JVM el límite de memoria dentro de un contenedor y qué hace -XX:MaxRAMPercentage?',
      en: 'How does the JVM discover the memory limit inside a container and what does -XX:MaxRAMPercentage do?',
    },
    answer: {
      es: 'Con UseContainerSupport (default desde Java 10) la JVM lee el límite de cgroup en lugar de la RAM del host; MaxRAMPercentage (25 por defecto) dimensiona el heap desde ese límite cuando no hay -Xmx.',
      en: 'With UseContainerSupport (default since Java 10) the JVM reads the cgroup limit instead of host RAM; MaxRAMPercentage (25 by default) sizes the heap from that limit when -Xmx is omitted.',
    },
    distractors: [
      {
        es: '-Xmx se ignora en contenedores y solo aplica MaxRAMPercentage, cuyo default es el 75 por ciento del límite de cgroup.',
        en: '-Xmx is ignored in containers and only MaxRAMPercentage applies, with a default of 75 percent of the cgroup limit.',
      },
      {
        es: 'UseContainerSupport lee una variable MEM_LIMIT del Dockerfile, no los cgroups, así que en Kubernetes el request debe igualar al limit.',
        en: 'UseContainerSupport reads a MEM_LIMIT environment variable from the Dockerfile, not cgroups, so in Kubernetes the request must equal the limit.',
      },
    ],
    explanation: {
      es: 'Sin conciencia de contenedor el heap se dimensionaba con la RAM del host y el kernel mataba el proceso mientras la JVM creía tener memoria. Java 17 y 21 leen cgroup v1 y v2 con -XX:+UseContainerSupport. El default -XX:MaxRAMPercentage=25 se pasa por alto con facilidad: un límite de 1 GiB deja unos 256 MiB de heap si no fijas -Xmx. El kill del kernel no es OutOfMemoryError: Java heap space; es un SIGKILL del contenedor.',
      en: 'Without container awareness the heap was sized from host RAM and the kernel killed the process while the JVM still thought it had memory. Java 17 and 21 read cgroup v1 and v2 via -XX:+UseContainerSupport. The default -XX:MaxRAMPercentage=25 is easy to miss: a 1 GiB limit leaves about 256 MiB of heap unless you set -Xmx. The kernel kill is not OutOfMemoryError: Java heap space; it is a SIGKILL from the container.',
    },
  },
  {
    id: 'be-jvm-19',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Qué se intercambia al compilar una imagen nativa AOT con GraalVM en lugar de ejecutar sobre HotSpot?',
      en: 'What do you trade when compiling a native AOT image with GraalVM instead of running on HotSpot?',
    },
    answer: {
      es: 'Arranque casi instantáneo y menos RSS, porque no hay intérprete ni calentamiento del JIT; el mundo cerrado obliga a registrar reflexión, proxies y carga dinámica en tiempo de compilación.',
      en: 'Near-instant startup and lower RSS, because there is no interpreter and no JIT warmup; the closed world requires registering reflection, proxies and dynamic loading at build time.',
    },
    distractors: [
      {
        es: 'La imagen nativa conserva el JIT C2 completo, así que el throughput de pico tras el calentamiento es siempre mayor que el de HotSpot.',
        en: 'The native image keeps the full C2 JIT, so peak throughput after warmup is always higher than HotSpot.',
      },
      {
        es: 'La reflexión y Class.forName funcionan igual, porque el binario nativo embebe un mini HotSpot para clases dinámicas.',
        en: 'Reflection and Class.forName work unchanged, because the native binary embeds a mini HotSpot for dynamic classes.',
      },
    ],
    explanation: {
      es: 'native-image asume mundo cerrado; si falta metadato de alcanzabilidad, en runtime aparece MissingReflectionRegistrationError. Spring Boot 3 genera pistas AOT para no escribir a mano el reflection-config. Se pierde algo de throughput de pico y de flexibilidad; --initialize-at-build-time y --no-fallback son del build de la imagen, no de -Xmx de HotSpot. El arranque rápido es la razón habitual para aceptar ese trato.',
      en: 'native-image assumes a closed world; missing reachability metadata fails at runtime with MissingReflectionRegistrationError. Spring Boot 3 generates AOT hints so that reflection-config does not have to be written by hand. You lose some peak throughput and some runtime flexibility; --initialize-at-build-time and --no-fallback belong to the image build, not to -Xmx of HotSpot. Fast startup is the usual reason to accept that trade-off.',
    },
  },
  {
    id: 'be-jvm-20',
    topic: 'JVM y memoria',
    prompt: {
      es: '¿Qué se busca en un volcado de hilos para diagnosticar peticiones HTTP bloqueadas?',
      en: 'What do you look for in a thread dump to diagnose blocked HTTP requests?',
    },
    answer: {
      es: 'Hilos en BLOCKED esperando un monitor, WAITING o TIMED_WAITING en cerrojos, colas o pools, más los informes de deadlock y el dueño de cada lock.',
      en: 'Threads in BLOCKED waiting for a monitor, WAITING or TIMED_WAITING on locks, queues or pools, plus deadlock reports and the owner of each lock.',
    },
    distractors: [
      {
        es: 'Los hilos RUNNABLE son los bloqueados, porque BLOCKED solo aplica a hilos detenidos en un safepoint del GC.',
        en: 'RUNNABLE threads are the blocked ones, because BLOCKED only applies to threads stopped at a GC safepoint.',
      },
      {
        es: 'Un volcado de hilos lista los dominadores del heap, así que sustituye al volcado de heap cuando una fuga es lo que bloquea las peticiones.',
        en: 'A thread dump lists heap dominators, so it replaces the heap dump when a leak is what blocks the requests.',
      },
    ],
    explanation: {
      es: 'jcmd PID Thread.print o jstack (con -l, ligado a -XX:+PrintConcurrentLocks) muestran estados y waiting to lock frente a locked. La sección de deadlock nombra el ciclo; muchos hilos de Tomcat BLOCKED en el mismo lock explican peticiones colgadas. Esto diagnostica contención, no OutOfMemoryError: para memoria sigue haciendo falta un volcado de heap. En Java 21 un virtual thread puede además pinnear un carrier, y eso también aparece en el volcado.',
      en: 'jcmd PID Thread.print or jstack (with -l, related to -XX:+PrintConcurrentLocks) show states and waiting to lock versus locked. A deadlock section names the cycle; many Tomcat threads BLOCKED on the same lock explain stuck requests. This diagnoses contention, not OutOfMemoryError: for memory you still need a heap dump. In Java 21 a virtual thread can also pin a carrier, and that appears in the dump as well.',
    },
  },
];
