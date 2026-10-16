import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_JVM_MEMORY_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-jvm-01',
    topic: 'Memoria',
    prompt: {
      es: '¿Qué libera el recolector de basura?',
      en: 'What does the garbage collector free?',
    },
    answer: {
      es: 'Objetos a los que ya no llega ningún hilo. Si algo sigue apuntándolos, aunque sea una lista estática, no los puede borrar.',
      en: 'Objects that no thread can reach anymore. If something still points to them, even a static list, it cannot delete them.',
    },
    distractors: [
      {
        es: 'Todo lo que lleva más de un minuto en el heap, esté referenciado o no.',
        en: 'Everything that has been on the heap for more than a minute, referenced or not.',
      },
      {
        es: 'Solo los primitivos del stack. Los objetos del heap se liberan al salir del método.',
        en: 'Only the primitives on the stack. Objects on the heap are freed when the method returns.',
      },
    ],
    explanation: {
      es: 'La mayoría de objetos mueren pronto, así que el recolector suele mirar primero la zona joven. Llenar la zona vieja es lo que duele.',
      en: 'Most objects die young, so the collector usually looks at the young area first. Filling the old area is what hurts.',
    },
  },
  {
    id: 'be-jvm-02',
    topic: 'Memoria',
    prompt: {
      es: '¿Qué se negocia al elegir un recolector de basura?',
      en: 'What do you trade when you choose a garbage collector?',
    },
    answer: {
      es: 'Pausas frente a trabajo útil. Unos paran menos la aplicación y otros aprovechan mejor la CPU. Se elige según si importa más la latencia o el rendimiento.',
      en: 'Pauses versus useful work. Some stop the application less and others use the CPU better. You choose according to whether latency or throughput matters more.',
    },
    distractors: [
      {
        es: 'No hay elección. La JVM usa siempre el mismo recolector y las pausas son fijas.',
        en: 'There is no choice. The JVM always uses the same collector and the pauses are fixed.',
      },
      {
        es: 'El recolector por defecto no pausa nunca, así que cambiarlo solo sirve en procesos por lotes antiguos.',
        en: 'The default collector never pauses, so changing it only helps old batch processes.',
      },
    ],
    explanation: {
      es: 'No hace falta memorizar el algoritmo. Mide las pausas y el uso de CPU, y cambia de recolector si el objetivo de latencia no se cumple.',
      en: 'You do not need to memorise the algorithm. Measure pauses and CPU use, and switch collector if the latency target is missed.',
    },
  },
  {
    id: 'be-jvm-03',
    topic: 'Memoria',
    prompt: {
      es: '¿Qué significa un OutOfMemoryError de heap frente a uno de Metaspace?',
      en: 'What does an OutOfMemoryError of the heap mean compared with one of Metaspace?',
    },
    answer: {
      es: 'Heap: los objetos vivos no caben en el tamaño máximo. Metaspace: los metadatos de las clases no caben. Si el recolector trabaja casi todo el tiempo y libera casi nada, verás el aviso de overhead.',
      en: 'Heap: the live objects do not fit in the maximum size. Metaspace: the class metadata does not fit. If the collector spends almost all the time and frees almost nothing, you see the overhead warning.',
    },
    distractors: [
      {
        es: 'Metaspace es el heap de las cadenas. Heap space es solo para arreglos de bytes.',
        en: 'Metaspace is the heap of the strings. Heap space is only for byte arrays.',
      },
      {
        es: 'Los tres mensajes significan lo mismo: falta RAM en la máquina y hay que reiniciar.',
        en: 'The three messages mean the same thing: the machine is out of RAM and you must restart.',
      },
    ],
    explanation: {
      es: 'Subir el heap tapa el síntoma un rato. El paso siguiente es ver qué objetos siguen vivos, no cambiar flags al azar.',
      en: 'Raising the heap hides the symptom for a while. The next step is to see which objects are still alive, not to change flags at random.',
    },
  },
  {
    id: 'be-jvm-04',
    topic: 'Memoria',
    prompt: {
      es: '¿Por qué un proceso Java puede fugar memoria si el recolector está en marcha?',
      en: 'Why can a Java process leak memory even while the collector is running?',
    },
    answer: {
      es: 'Porque los objetos siguen alcanzables: una colección estática, un listener que no se quitó o un ThreadLocal en un hilo de pool. El recolector no puede liberarlos.',
      en: 'Because the objects are still reachable: a static collection, a listener that was not removed or a ThreadLocal on a pool thread. The collector cannot free them.',
    },
    distractors: [
      {
        es: 'Porque el recolector solo limpia objetos jóvenes. Todo lo demás fuga hasta llamar a System.gc.',
        en: 'Because the collector only cleans young objects. Everything else leaks until you call System.gc.',
      },
      {
        es: 'Los objetos del heap no pueden fugar. Una fuga Java es siempre memoria nativa de los hilos.',
        en: 'Heap objects cannot leak. A Java leak is always native memory from the threads.',
      },
    ],
    explanation: {
      es: 'Un volcado de heap al quedarse sin memoria muestra quién retiene esos objetos. No es un fallo del recolector.',
      en: 'A heap dump when memory runs out shows who retains those objects. It is not a collector failure.',
    },
  },
  {
    id: 'be-jvm-05',
    topic: 'Memoria',
    prompt: {
      es: '¿Cuándo usas una referencia débil o blanda en lugar de una normal?',
      en: 'When do you use a weak or soft reference instead of a normal one?',
    },
    answer: {
      es: 'La normal mantiene el objeto vivo. La blanda sirve para una caché que puede soltarse si falta memoria. La débil no retiene la clave, como en un mapa de caché que no debe anclar el objeto.',
      en: 'A normal reference keeps the object alive. A soft one fits a cache that may be dropped when memory is low. A weak one does not pin the key, as in a cache map that must not anchor the object.',
    },
    distractors: [
      {
        es: 'La débil es la caché correcta porque se borra en cada recolección menor y la blanda nunca se borra.',
        en: 'The weak one is the right cache because it is cleared on every minor collection and the soft one is never cleared.',
      },
      {
        es: 'Son lo mismo que null. El recolector las ignora y el objeto desaparece al momento.',
        en: 'They are the same as null. The collector ignores them and the object disappears at once.',
      },
    ],
    explanation: {
      es: 'No construyas una caché a mano con referencias blandas si una librería ya lo hace. Y no uses una referencia débil esperando un cierre puntual de un recurso.',
      en: 'Do not build a cache by hand with soft references if a library already does it. And do not use a weak reference expecting a resource to close at a precise moment.',
    },
  },
  {
    id: 'be-jvm-06',
    topic: 'Recursos',
    prompt: {
      es: '¿Por qué no debes usar finalize para cerrar un recurso?',
      en: 'Why should you not use finalize to close a resource?',
    },
    answer: {
      es: 'Porque no sabes cuándo corre, o si corre. Cierra con try-with-resources. Si hace falta limpieza nativa, regístrala aparte, sin resucitar el objeto.',
      en: 'Because you do not know when it runs, or if it runs. Close with try-with-resources. If native cleanup is needed, register it separately, without resurrecting the object.',
    },
    distractors: [
      {
        es: 'Porque finalize corre antes de que el constructor termine y cierra el recurso demasiado pronto.',
        en: 'Because finalize runs before the constructor finishes and closes the resource too early.',
      },
      {
        es: 'Sigue siendo la forma recomendada para sockets, más fiable que AutoCloseable.',
        en: 'It is still the recommended way for sockets, more reliable than AutoCloseable.',
      },
    ],
    explanation: {
      es: 'Un finalize lento retrasa la recolección. El recurso debe cerrarse en el código que lo abrió, no cuando el recolector se acuerde.',
      en: 'A slow finalize delays collection. The resource should be closed by the code that opened it, not when the collector remembers.',
    },
  },
  {
    id: 'be-jvm-07',
    topic: 'Diagnóstico',
    prompt: {
      es: '¿Para qué sirve un volcado de heap?',
      en: 'What is a heap dump for?',
    },
    answer: {
      es: 'Para ver qué objetos siguen vivos y quién los retiene cuando el proceso se queda sin heap. Un histograma solo dice qué tipo ocupa bytes, no la raíz de la fuga.',
      en: 'To see which objects are still alive and who retains them when the process runs out of heap. A histogram only says which type occupies bytes, not the root of the leak.',
    },
    distractors: [
      {
        es: 'Para ver la pila de cada hilo y encontrar un deadlock. Sustituye al volcado de hilos.',
        en: 'To see the stack of each thread and find a deadlock. It replaces the thread dump.',
      },
      {
        es: 'Lista el código fuente de las clases que más memoria piden en compilación.',
        en: 'It lists the source of the classes that request the most memory at compile time.',
      },
    ],
    explanation: {
      es: 'Pídelo al quedarte sin memoria o con jcmd. Ábrelo en un analizador y busca el objeto que, si desapareciera, liberaría el resto.',
      en: 'Request it when you run out of memory or with jcmd. Open it in an analyser and look for the object that, if it disappeared, would free the rest.',
    },
  },
  {
    id: 'be-jvm-08',
    topic: 'Rendimiento',
    prompt: {
      es: '¿Qué diferencia hay entre el intérprete y el JIT?',
      en: 'What is the difference between the interpreter and the JIT?',
    },
    answer: {
      es: 'Al principio el código se interpreta. Cuando un método se usa mucho, el JIT lo compila a código nativo y va más rápido.',
      en: 'At the start the code is interpreted. When a method is used a lot, the JIT compiles it to native code and it gets faster.',
    },
    distractors: [
      {
        es: 'El JIT compila todo al arrancar, así que la primera petición ya va a velocidad de producción.',
        en: 'The JIT compiles everything at startup, so the first request already runs at production speed.',
      },
      {
        es: 'El intérprete es más rápido que el código compilado porque no gasta tiempo en optimizar.',
        en: 'The interpreter is faster than compiled code because it does not spend time optimising.',
      },
    ],
    explanation: {
      es: 'Por eso un microbenchmark corto miente: aún no hubo calentamiento. Si un objeto no sale del método, el JIT a veces ni lo reserva en el heap.',
      en: 'That is why a short microbenchmark lies: there was no warmup yet. If an object never leaves the method, the JIT sometimes does not even allocate it on the heap.',
    },
  },
  {
    id: 'be-jvm-09',
    topic: 'Rendimiento',
    prompt: {
      es: '¿Por qué la primera petición tras el arranque suele ser más lenta?',
      en: 'Why is the first request after startup usually slower?',
    },
    answer: {
      es: 'Porque la JVM todavía se está calentando. Los métodos calientes aún no están compilados y hay inicialización de clases y de caches.',
      en: 'Because the JVM is still warming up. Hot methods are not compiled yet and there is class and cache initialisation.',
    },
    distractors: [
      {
        es: 'Porque tras el calentamiento la JVM desoptimiza todo y los primeros segundos son los más rápidos.',
        en: 'Because after warmup the JVM deoptimises everything and the first seconds are the fastest.',
      },
      {
        es: 'Porque el recolector no arranca hasta la segunda petición y la primera corre sin memoria libre.',
        en: 'Because the collector does not start until the second request and the first one runs with no free memory.',
      },
    ],
    explanation: {
      es: 'No compares latencia de un arranque en frío con producción. Calienta o usa una imagen que ya traiga el código preparado si el arranque importa.',
      en: 'Do not compare cold-start latency with production. Warm up, or use an image that already brings the code prepared if startup matters.',
    },
  },
  {
    id: 'be-jvm-10',
    topic: 'Rendimiento',
    prompt: {
      es: '¿Por qué un benchmark escrito a mano puede mentir?',
      en: 'Why can a handwritten benchmark lie?',
    },
    answer: {
      es: 'Porque la JVM puede borrar un cálculo cuyo resultado no usas. El bucle que cronometraste puede no hacer nada.',
      en: 'Because the JVM can delete a calculation whose result you never use. The loop you timed may do nothing.',
    },
    distractors: [
      {
        es: 'Solo miente si hay varios hilos. Un bucle de un hilo tras un sleep ya es válido.',
        en: 'It only lies if there are several threads. A single-thread loop after a sleep is already valid.',
      },
      {
        es: 'La única distorsión son las pausas del recolector, y se quitan desactivando la recolección.',
        en: 'The only distortion is collector pauses, and you remove them by turning collection off.',
      },
    ],
    explanation: {
      es: 'Usa una herramienta de benchmark que consuma el resultado y controle el calentamiento. Si no, estás midiendo el optimizador, no tu código.',
      en: 'Use a benchmark tool that consumes the result and controls warmup. Otherwise you are measuring the optimiser, not your code.',
    },
  },
  {
    id: 'be-jvm-11',
    topic: 'Strings',
    prompt: {
      es: '¿Dónde viven las cadenas internadas y cuándo no conviene intern?',
      en: 'Where do interned strings live and when is intern a bad idea?',
    },
    answer: {
      es: 'En el heap, no en una zona aparte de clases. Internar datos dinámicos puede llenar el heap. Para comparar, usa equals.',
      en: 'On the heap, not in a separate class area. Interning dynamic data can fill the heap. To compare, use equals.',
    },
    distractors: [
      {
        es: 'Viven fuera del heap, así que intern es la forma recomendada de ahorrar memoria.',
        en: 'They live off the heap, so intern is the recommended way to save memory.',
      },
      {
        es: 'intern copia cada cadena a disco y por eso acelera las comparaciones con ==.',
        en: 'intern copies every string to disk and that is why it speeds up comparisons with ==.',
      },
    ],
    explanation: {
      es: 'Los literales del código ya se comparten. No llames a intern sobre texto que llega de usuarios o de la base.',
      en: 'Literals in the code are already shared. Do not call intern on text that comes from users or from the database.',
    },
  },
  {
    id: 'be-jvm-12',
    topic: 'Strings',
    prompt: {
      es: '¿Por qué concatenar con + dentro de un bucle es lento?',
      en: 'Why is concatenating with + inside a loop slow?',
    },
    answer: {
      es: 'Porque cada vuelta copia el texto que ya llevas. Un StringBuilder reutilizado añade en el mismo buffer y el costo es lineal.',
      en: 'Because each round copies the text you already have. A reused StringBuilder appends in the same buffer and the cost is linear.',
    },
    distractors: [
      {
        es: 'El compilador ya convierte cualquier bucle de + en un solo StringBuilder, así que da igual.',
        en: 'The compiler already turns any loop of + into one StringBuilder, so it does not matter.',
      },
      {
        es: '+ dentro del bucle es más rápido porque evita crear el builder.',
        en: '+ inside the loop is faster because it avoids creating the builder.',
      },
    ],
    explanation: {
      es: 'Un solo + en una expresión está bien. El problema es acumular en la variable del bucle una y otra vez.',
      en: 'A single + in one expression is fine. The problem is accumulating into the loop variable again and again.',
    },
  },
  {
    id: 'be-jvm-13',
    topic: 'Igualdad',
    prompt: {
      es: '¿Por qué == entre dos Integer puede ser verdadero en 127 y falso en 128?',
      en: 'Why can == between two Integer values be true for 127 and false for 128?',
    },
    answer: {
      es: 'Porque los valores pequeños se reutilizan y == compara referencias, no el número. 128 suele ser un objeto nuevo. Para el valor usa equals o un int.',
      en: 'Because small values are reused and == compares references, not the number. 128 is usually a new object. For the value use equals or an int.',
    },
    distractors: [
      {
        es: '== siempre compara el número, así que 127 y 128 se comportan igual.',
        en: '== always compares the number, so 127 and 128 behave the same.',
      },
      {
        es: 'La caché llega hasta 256 y no se puede cambiar. Por encima de 256 == lanza una excepción.',
        en: 'The cache goes up to 256 and cannot be changed. Above 256, == throws an exception.',
      },
    ],
    explanation: {
      es: 'Es el mismo tema que == frente a equals. En objetos, == no significa el mismo valor salvo que sepas que es la misma instancia.',
      en: 'It is the same topic as == versus equals. On objects, == does not mean the same value unless you know it is the same instance.',
    },
  },
  {
    id: 'be-jvm-14',
    topic: 'Clases',
    prompt: {
      es: '¿Qué diferencia hay entre ClassNotFoundException y NoClassDefFoundError?',
      en: 'What is the difference between ClassNotFoundException and NoClassDefFoundError?',
    },
    answer: {
      es: 'ClassNotFoundException sale cuando tu código pide cargar una clase que no está. NoClassDefFoundError sale cuando una clase que compiló ya no se puede enlazar al ejecutar, a menudo porque falta en el classpath o falló su inicio estático.',
      en: 'ClassNotFoundException appears when your code asks to load a class that is not there. NoClassDefFoundError appears when a class that compiled can no longer be linked at runtime, often because it is missing from the classpath or its static startup failed.',
    },
    distractors: [
      {
        es: 'Son el mismo fallo. El Error es solo el envoltorio que Spring pone alrededor de la excepción.',
        en: 'They are the same failure. The Error is only the wrapper Spring puts around the exception.',
      },
      {
        es: 'ClassNotFoundException es un error de memoria y NoClassDefFoundError es un fallo de red.',
        en: 'ClassNotFoundException is a memory error and NoClassDefFoundError is a network failure.',
      },
    ],
    explanation: {
      es: 'Si ves el Error, mira antes si el inicializador estático explotó. Arreglar solo el jar a posteriori no borra ese fallo de la clase ya rota.',
      en: 'If you see the Error, check first whether the static initialiser blew up. Fixing only the jar afterwards does not clear that failure of the class already broken.',
    },
  },
  {
    id: 'be-jvm-15',
    topic: 'Clases',
    prompt: {
      es: '¿Por qué una clase dentro de un jar de Spring Boot a veces no se encuentra como en un classpath plano?',
      en: 'Why is a class inside a Spring Boot jar sometimes not found the way it is on a flat classpath?',
    },
    answer: {
      es: 'Porque las librerías van anidadas dentro del jar y las carga un class loader propio del arranque. Pedir la clase con el loader equivocado da ClassNotFoundException aunque el archivo esté ahí.',
      en: 'Because the libraries are nested inside the jar and a startup class loader of its own loads them. Asking for the class with the wrong loader gives ClassNotFoundException even if the file is there.',
    },
    distractors: [
      {
        es: 'El jar ejecutable pone todo en el loader de arranque de la JVM, igual que un classpath normal.',
        en: 'The executable jar puts everything on the JVM startup loader, the same as a normal classpath.',
      },
      {
        es: 'Hace falta una opción de boot classpath o el proceso no arranca.',
        en: 'A boot classpath option is required or the process does not start.',
      },
    ],
    explanation: {
      es: 'No lo confundas con un NoClassDefFoundError de un static que falló. Aquí la clase está, pero no la ve el loader que usaste.',
      en: 'Do not confuse it with a NoClassDefFoundError from a static block that failed. Here the class is present, but the loader you used does not see it.',
    },
  },
  {
    id: 'be-jvm-16',
    topic: 'Memoria',
    prompt: {
      es: '¿Qué provoca un StackOverflowError?',
      en: 'What causes a StackOverflowError?',
    },
    answer: {
      es: 'Una recursión profunda o marcos enormes llenan la pila del hilo. Es independiente del heap. El tamaño de esa pila se ajusta con -Xss.',
      en: 'Deep recursion or huge frames fill the thread stack. It is independent of the heap. That stack size is adjusted with -Xss.',
    },
    distractors: [
      {
        es: 'Significa que el heap joven se agotó, así que hay que subir -Xmx.',
        en: 'It means the young heap ran out, so you must raise -Xmx.',
      },
      {
        es: 'La JVM convierte toda recursión en un bucle, así que este error ya no ocurre.',
        en: 'The JVM turns every recursion into a loop, so this error no longer happens.',
      },
    ],
    explanation: {
      es: 'Un volcado de heap no lo explica. Mira el volcado de hilos y verás el mismo marco repetido.',
      en: 'A heap dump does not explain it. Look at the thread dump and you will see the same frame repeated.',
    },
  },
  {
    id: 'be-jvm-17',
    topic: 'Memoria',
    prompt: {
      es: '¿Qué es la memoria fuera del heap en un buffer directo?',
      en: 'What is off-heap memory in a direct buffer?',
    },
    answer: {
      es: 'Memoria nativa, fuera del heap de Java, usada para entrada y salida sin copiar tanto. El objeto Java es pequeño y la zona nativa se libera cuando el limpiador corre, no al momento.',
      en: 'Native memory, outside the Java heap, used for input and output without so much copying. The Java object is small and the native area is freed when the cleaner runs, not at once.',
    },
    distractors: [
      {
        es: 'Vive en Metaspace y la limita el tamaño de las clases.',
        en: 'It lives in Metaspace and the class size limits it.',
      },
      {
        es: 'Siempre es más rápida, así que cada mensaje pequeño debería usar un buffer directo.',
        en: 'It is always faster, so every small message should use a direct buffer.',
      },
    ],
    explanation: {
      es: 'Crear y soltar buffers directos es caro. Compensa en buffers grandes y duraderos, no en mensajes diminutos. Si te pasas, el error habla de buffer directo, no de heap.',
      en: 'Creating and releasing direct buffers is expensive. It pays off for large long-lived buffers, not for tiny messages. If you exceed the cap, the error talks about direct buffer, not about the heap.',
    },
  },
  {
    id: 'be-jvm-18',
    topic: 'Contenedores',
    prompt: {
      es: '¿Por qué la JVM debe conocer el límite de memoria del contenedor?',
      en: 'Why must the JVM know the container memory limit?',
    },
    answer: {
      es: 'Si mira la RAM de la máquina y no el límite del contenedor, pide un heap enorme y el contenedor mata el proceso. Hay que fijar -Xmx o un porcentaje de ese límite.',
      en: 'If it looks at the machine RAM and not at the container limit, it asks for a huge heap and the container kills the process. You must set -Xmx or a percentage of that limit.',
    },
    distractors: [
      {
        es: '-Xmx se ignora en contenedores. Solo cuenta un porcentaje fijo del 75 por ciento.',
        en: '-Xmx is ignored in containers. Only a fixed percentage of 75 percent counts.',
      },
      {
        es: 'La JVM lee una variable del Dockerfile, no el límite real del contenedor.',
        en: 'The JVM reads a variable from the Dockerfile, not the real container limit.',
      },
    ],
    explanation: {
      es: 'El porcentaje por defecto es bajo y se olvida con facilidad. Un kill del contenedor no es un OutOfMemoryError de Java: el proceso desaparece.',
      en: 'The default percentage is low and easy to miss. A container kill is not a Java OutOfMemoryError: the process disappears.',
    },
  },
  {
    id: 'be-jvm-19',
    topic: 'Arranque',
    prompt: {
      es: '¿Qué cambias al pasar de la JVM normal a una imagen nativa?',
      en: 'What do you trade when you move from the normal JVM to a native image?',
    },
    answer: {
      es: 'Arranque mucho más rápido y menos memoria, porque no hay calentamiento. A cambio, la reflexión y los proxies deben conocerse al construir, y el pico de rendimiento puede ser menor.',
      en: 'Much faster startup and less memory, because there is no warmup. In exchange, reflection and proxies must be known at build time, and peak throughput can be lower.',
    },
    distractors: [
      {
        es: 'La imagen nativa conserva el mismo compilador en caliente, así que el pico siempre es mayor.',
        en: 'The native image keeps the same hot compiler, so the peak is always higher.',
      },
      {
        es: 'Class.forName y la reflexión siguen igual, sin configuración extra.',
        en: 'Class.forName and reflection keep working the same, with no extra configuration.',
      },
    ],
    explanation: {
      es: 'Spring puede generar las pistas en el build. Si falta una, el fallo aparece al ejecutar, no al compilar el Java normal.',
      en: 'Spring can generate the hints at build time. If one is missing, the failure shows up at runtime, not when normal Java compiles.',
    },
  },
  {
    id: 'be-jvm-20',
    topic: 'Diagnóstico',
    prompt: {
      es: '¿Qué miras en un volcado de hilos si las peticiones HTTP se quedan colgadas?',
      en: 'What do you look for in a thread dump if HTTP requests hang?',
    },
    answer: {
      es: 'Hilos bloqueados en el mismo cerrojo, hilos esperando en colas o pools, y si el volcado reporta un deadlock y quién tiene el lock.',
      en: 'Threads blocked on the same lock, threads waiting on queues or pools, and whether the dump reports a deadlock and who holds the lock.',
    },
    distractors: [
      {
        es: 'Los hilos en ejecución son los bloqueados. El estado bloqueado solo aparece durante una pausa del recolector.',
        en: 'Running threads are the blocked ones. The blocked state only appears during a collector pause.',
      },
      {
        es: 'El volcado de hilos lista los objetos que llenan el heap, así que sustituye al volcado de memoria.',
        en: 'The thread dump lists the objects that fill the heap, so it replaces the memory dump.',
      },
    ],
    explanation: {
      es: 'Muchos hilos del servidor parados en el mismo monitor explican peticiones colgadas. Para una fuga de memoria sigue haciendo falta el volcado de heap.',
      en: 'Many server threads stopped on the same monitor explain stuck requests. For a memory leak you still need the heap dump.',
    },
  },
];
