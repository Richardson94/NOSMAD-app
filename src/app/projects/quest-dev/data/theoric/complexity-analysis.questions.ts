import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_COMPLEXITY_ANALYSIS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-cx-01',
    topic: 'Complejidad',
    prompt: {
      es: '¿Qué distingue a las notaciones O grande, Theta y Omega?',
      en: 'What distinguishes big O, Theta and Omega notation?',
    },
    answer: {
      es: 'O grande es una cota superior asintótica, Omega una cota inferior y Theta una cota ajustada que cumple ambas a la vez.',
      en: 'Big O is an asymptotic upper bound, Omega a lower bound and Theta a tight bound that satisfies both at once.',
    },
    distractors: [
      {
        es: 'O grande describe el peor caso, Omega describe el mejor caso y Theta describe el caso promedio del algoritmo.',
        en: 'Big O describes the worst case, Omega describes the best case and Theta describes the average case of the algorithm.',
      },
      {
        es: 'Theta es la notación formalmente correcta para lo que se escribe informalmente como O grande, así que ambas son intercambiables.',
        en: 'Theta is the formally correct notation for what is informally written as big O, so both are interchangeable.',
      },
    ],
    explanation: {
      es: 'Las tres notaciones acotan el crecimiento de una función, y el caso (peor, mejor o promedio) es un eje independiente: se puede hablar de Theta del peor caso de QuickSort, que es Theta(n²). Decir que MergeSort es O(n²) es técnicamente cierto aunque poco informativo, y por eso O grande y Theta no son intercambiables: solo Theta afirma que la cota es ajustada.',
      en: 'All three notations bound the growth of a function, and the case (worst, best or average) is an independent axis: you can talk about the Theta of the QuickSort worst case, which is Theta(n²). Saying MergeSort is O(n²) is technically true yet uninformative, which is why big O and Theta are not interchangeable: only Theta claims the bound is tight.',
    },
  },
  {
    id: 'th-cx-02',
    topic: 'Complejidad',
    prompt: {
      es: 'Al buscar una clave en una tabla hash, ¿cómo se relacionan el caso peor, el promedio y el análisis amortizado?',
      en: 'When looking up a key in a hash table, how do the worst case, the average case and amortised analysis relate?',
    },
    answer: {
      es: 'El caso promedio es O(1) con buena dispersión, pero el peor caso es O(n) cuando todas las claves caen en el mismo bucket.',
      en: 'The average case is O(1) with good dispersion, but the worst case is O(n) when every key lands in the same bucket.',
    },
    distractors: [
      {
        es: 'El caso promedio es O(1) y el peor caso es O(log n), porque el factor de carga obliga a redimensionar la tabla.',
        en: 'The average case is O(1) and the worst case is O(log n), because the load factor forces the table to be resized.',
      },
      {
        es: 'La búsqueda es O(1) amortizado, ya que el costo del rehash ocasional se reparte entre todas las consultas.',
        en: 'The lookup is amortised O(1), since the cost of the occasional rehash is spread across every query.',
      },
    ],
    explanation: {
      es: 'El caso promedio depende de la distribución de las claves, mientras que el peor caso asume colisión total; en HashMap de Java, desde la versión 8 un bucket con más de 8 entradas y claves Comparable se convierte en árbol rojo-negro y baja de O(n) a O(log n), pero eso es una mitigación, no la causa del redimensionado. El análisis amortizado aplica a la inserción, que sí absorbe el costo del rehash, no a la lectura.',
      en: 'The average case depends on key distribution, while the worst case assumes total collision; in the Java HashMap, since version 8 a bucket with more than 8 entries and Comparable keys becomes a red-black tree and drops from O(n) to O(log n), but that is a mitigation, not the cause of resizing. Amortised analysis applies to insertion, which does absorb the rehash cost, not to reads.',
    },
  },
  {
    id: 'th-cx-03',
    topic: 'Complejidad',
    prompt: {
      es: '¿Por qué el análisis asintótico descarta constantes y términos menores, y cuándo sí importan esas constantes?',
      en: 'Why does asymptotic analysis drop constants and lower-order terms, and when do those constants actually matter?',
    },
    answer: {
      es: 'Porque describe el crecimiento cuando n tiende a infinito, pero con n pequeño o en código muy caliente las constantes deciden el tiempo real medido.',
      en: 'Because it describes growth as n tends to infinity, but with small n or in very hot code the constants decide the real measured time.',
    },
    distractors: [
      {
        es: 'Porque solo el término dominante define la clase de complejidad, de modo que un algoritmo O(n) siempre correrá más rápido que uno O(n log n).',
        en: 'Because only the dominant term defines the complexity class, so an O(n) algorithm will always run faster than an O(n log n) one.',
      },
      {
        es: 'Porque las constantes dependen del hardware, y por eso dos algoritmos con la misma notación tardan lo mismo en la misma máquina.',
        en: 'Because constants depend on the hardware, and that is why two algorithms with the same notation take the same time on the same machine.',
      },
    ],
    explanation: {
      es: 'La notación compara tasas de crecimiento, no tiempos absolutos: un O(n) con una constante enorme puede perder frente a un O(n log n) ajustado para todos los tamaños que verá el sistema. Un caso concreto es Arrays.sort de la JDK, que abandona el quicksort de doble pivote y usa insertion sort para tramos de menos de 47 elementos, precisamente porque ahí las constantes mandan.',
      en: 'The notation compares growth rates, not absolute times: an O(n) with a huge constant can lose against a tuned O(n log n) for every size the system will ever see. A concrete case is the JDK Arrays.sort, which abandons dual-pivot quicksort and uses insertion sort for runs under 47 elements, precisely because constants rule there.',
    },
  },
  {
    id: 'th-cx-04',
    topic: 'Complejidad',
    prompt: {
      es: 'Un bucle externo recorre i de cero a n y el interno recorre j de cero a i. ¿Cuál es la complejidad temporal?',
      en: 'An outer loop runs i from zero to n and the inner loop runs j from zero to i. What is the time complexity?',
    },
    answer: {
      es: 'O(n²), porque la suma 1 + 2 + ... + n es n(n+1)/2 y la constante un medio se descarta.',
      en: 'O(n²), because the sum 1 + 2 + ... + n equals n(n+1)/2 and the one-half constant is dropped.',
    },
    distractors: [
      {
        es: 'O(n log n), porque el límite del bucle interno crece de forma progresiva en lugar de ser fijo.',
        en: 'O(n log n), because the inner loop bound grows progressively instead of being fixed.',
      },
      {
        es: 'O(n²/2), porque el bucle interno solo visita la mitad de los pares posibles de índices.',
        en: 'O(n²/2), because the inner loop only visits half of the possible index pairs.',
      },
    ],
    explanation: {
      es: 'El número exacto de iteraciones es n(n+1)/2, cuyo término dominante es n²/2, y al descartar el factor constante queda O(n²). Escribir O(n²/2) es la observación correcta a medias: describe bien el trabajo real pero no es una forma válida de la notación, ya que O grande ignora factores constantes. El límite creciente no introduce ningún logaritmo: para eso el índice tendría que multiplicarse o dividirse, no incrementarse.',
      en: 'The exact iteration count is n(n+1)/2, whose dominant term is n²/2, and dropping the constant factor leaves O(n²). Writing O(n²/2) is a half-correct observation: it describes the real work well but is not a valid form of the notation, since big O ignores constant factors. A growing bound introduces no logarithm: for that the index would have to be multiplied or divided, not incremented.',
    },
  },
  {
    id: 'th-cx-05',
    topic: 'Complejidad',
    prompt: {
      es: 'Un bucle parte de i igual a n y en cada iteración hace i = i / 2 hasta llegar a uno. ¿Cuál es su complejidad?',
      en: 'A loop starts with i equal to n and on each iteration does i = i / 2 until it reaches one. What is its complexity?',
    },
    answer: {
      es: 'O(log n), porque el número de iteraciones es la cantidad de veces que se puede dividir n entre dos hasta llegar a uno.',
      en: 'O(log n), because the iteration count is how many times n can be divided by two before reaching one.',
    },
    distractors: [
      {
        es: 'O(n/2), porque en cada paso se descarta exactamente la mitad del espacio de búsqueda restante.',
        en: 'O(n/2), because each step discards exactly half of the remaining search space.',
      },
      {
        es: 'O(log n) solo si los datos están ordenados; si no lo están, el recorrido degrada a O(n).',
        en: 'O(log n) only if the data is sorted; if it is not, the traversal degrades to O(n).',
      },
    ],
    explanation: {
      es: 'Dividir n entre dos repetidamente da log base 2 de n pasos, y como el cambio de base es solo un factor constante se escribe O(log n) sin especificar la base: para un millón de elementos son unas 20 iteraciones. Descartar la mitad del espacio no equivale a n/2 pasos, porque el descarte es multiplicativo y no aditivo, y el requisito de orden pertenece a la corrección de la búsqueda binaria, no al conteo de iteraciones del bucle.',
      en: 'Repeatedly halving n gives log base 2 of n steps, and since changing the base is only a constant factor it is written O(log n) without stating the base: for a million elements that is about 20 iterations. Discarding half the space is not the same as n/2 steps, because the discard is multiplicative rather than additive, and the sorted requirement belongs to binary search correctness, not to counting loop iterations.',
    },
  },
  {
    id: 'th-cx-06',
    topic: 'Complejidad',
    prompt: {
      es: 'En Java, ¿qué diferencia de complejidad hay entre concatenar cadenas con el operador más dentro de un bucle y usar StringBuilder?',
      en: 'In Java, what complexity difference is there between concatenating strings with the plus operator inside a loop and using StringBuilder?',
    },
    answer: {
      es: 'Concatenar con el operador más dentro del bucle es O(n²) porque cada paso copia toda la cadena acumulada, mientras que StringBuilder mantiene el total en O(n).',
      en: 'Concatenating with the plus operator inside the loop is O(n²) because each step copies the whole accumulated string, while StringBuilder keeps the total at O(n).',
    },
    distractors: [
      {
        es: 'Son equivalentes, porque el compilador de Java traduce el operador más a llamadas de StringBuilder.',
        en: 'They are equivalent, because the Java compiler translates the plus operator into StringBuilder calls.',
      },
      {
        es: 'La diferencia es de memoria y no de tiempo: ambas hacen trabajo O(n), pero el operador más genera basura que presiona al recolector.',
        en: 'The difference is memory rather than time: both do O(n) work, but the plus operator creates garbage that pressures the collector.',
      },
    ],
    explanation: {
      es: 'String es inmutable, así que cada concatenación crea un objeto nuevo copiando los caracteres previos: la suma 1 + 2 + ... + n da O(n²) en tiempo y en bytes copiados. Es cierto que javac traduce el operador más a StringBuilder, o a invokedynamic con makeConcatWithConstants desde Java 9, pero lo hace por expresión: dentro de un bucle se construye un StringBuilder nuevo en cada iteración, por lo que la optimización no salva el caso. El exceso de basura es una consecuencia real, no la causa principal.',
      en: 'String is immutable, so every concatenation creates a new object copying the previous characters: the sum 1 + 2 + ... + n gives O(n²) in time and in copied bytes. It is true that javac translates the plus operator into StringBuilder, or into invokedynamic with makeConcatWithConstants since Java 9, but it does so per expression: inside a loop a brand new StringBuilder is built on every iteration, so the optimisation does not save the case. Excess garbage is a real consequence, not the main cause.',
    },
  },
  {
    id: 'th-cx-07',
    topic: 'Complejidad',
    prompt: {
      es: 'Dentro de un bucle sobre n elementos se llama a contains sobre una colección de m elementos. ¿Qué cambia si esa colección es una List o un HashSet?',
      en: 'Inside a loop over n elements, contains is called on a collection of m elements. What changes if that collection is a List or a HashSet?',
    },
    answer: {
      es: 'Con List el contains es O(m) y el total queda O(n*m); con HashSet el contains es O(1) promedio y el total baja a O(n).',
      en: 'With a List, contains is O(m) and the total becomes O(n*m); with a HashSet, contains is O(1) on average and the total drops to O(n).',
    },
    distractors: [
      {
        es: 'ArrayList.contains es O(log m) porque recorre un arreglo contiguo aprovechando la caché del procesador.',
        en: 'ArrayList.contains is O(log m) because it walks a contiguous array taking advantage of the processor cache.',
      },
      {
        es: 'La diferencia solo se nota con colecciones grandes, porque ambas usan equals y el costo real está en esa comparación.',
        en: 'The difference only shows with large collections, because both use equals and the real cost is in that comparison.',
      },
    ],
    explanation: {
      es: 'ArrayList.contains delega en indexOf, que es un barrido lineal con equals elemento por elemento, mientras que HashSet.contains calcula hashCode y va directo al bucket. La buena localidad de caché mejora la constante del barrido pero no cambia su clase: sigue siendo lineal, no logarítmico. Y la diferencia es asintótica, no una cuestión de umbral: con n y m de diez mil son cien millones de comparaciones frente a diez mil consultas. Un TreeSet sería el caso genuinamente O(log m).',
      en: 'ArrayList.contains delegates to indexOf, a linear scan calling equals element by element, whereas HashSet.contains computes hashCode and jumps straight to the bucket. Good cache locality improves the constant of the scan but does not change its class: it stays linear, not logarithmic. And the difference is asymptotic rather than a threshold matter: with n and m at ten thousand that is a hundred million comparisons versus ten thousand lookups. A TreeSet would be the genuinely O(log m) case.',
    },
  },
  {
    id: 'th-cx-08',
    topic: 'Complejidad',
    prompt: {
      es: 'Para encontrar pares que cumplen una condición, ¿qué gana ordenar primero y recorrer una sola vez frente a usar un doble bucle anidado?',
      en: 'To find pairs matching a condition, what is gained by sorting first and doing a single pass compared to a nested double loop?',
    },
    answer: {
      es: 'El ordenamiento cuesta O(n log n) y la pasada posterior O(n), así que el total O(n log n) supera al O(n²) del doble bucle en cuanto n crece.',
      en: 'Sorting costs O(n log n) and the later pass costs O(n), so the O(n log n) total beats the O(n²) of the double loop as soon as n grows.',
    },
    distractors: [
      {
        es: 'El doble bucle es preferible porque no requiere memoria adicional y evita pagar el costo de ordenar la entrada.',
        en: 'The double loop is preferable because it needs no extra memory and avoids paying the cost of sorting the input.',
      },
      {
        es: 'Ordenar primero solo conviene si la entrada ya viene casi ordenada, porque entonces el ordenamiento es O(n).',
        en: 'Sorting first is only worth it when the input is already nearly sorted, because then the sort is O(n).',
      },
    ],
    explanation: {
      es: 'Al sumar etapas secuenciales domina la mayor, de modo que O(n log n + n) es O(n log n): con n igual a un millón son unos veinte millones de operaciones frente a un billón del doble bucle. El doble bucle sí ahorra memoria, pero ese ahorro constante no compensa un salto de clase de complejidad. Y aunque es cierto que Timsort, el algoritmo de Arrays.sort para objetos, detecta tramos ordenados y llega a O(n) en el mejor caso, la técnica de ordenar y recorrer con dos punteros gana igualmente con datos desordenados.',
      en: 'When adding sequential stages the larger one dominates, so O(n log n + n) is O(n log n): with n at one million that is about twenty million operations versus a trillion for the double loop. The double loop does save memory, but that constant saving does not offset jumping a complexity class. And although it is true that Timsort, the Arrays.sort algorithm for objects, detects sorted runs and reaches O(n) in the best case, the sort-and-scan two-pointer technique still wins on unsorted data.',
    },
  },
  {
    id: 'th-cx-09',
    topic: 'Complejidad',
    prompt: {
      es: '¿Cuál es el costo en tiempo y en espacio de una recursión con dos ramas sin memoizar, como el Fibonacci ingenuo?',
      en: 'What is the time and space cost of a two-branch recursion without memoisation, such as naive Fibonacci?',
    },
    answer: {
      es: 'Tiempo exponencial, del orden de O(2^n), y espacio O(n) por la profundidad máxima de la pila de llamadas.',
      en: 'Exponential time, on the order of O(2^n), and O(n) space due to the maximum call stack depth.',
    },
    distractors: [
      {
        es: 'Tiempo O(2^n) y espacio también O(2^n), porque todas las llamadas del árbol coexisten en la pila.',
        en: 'O(2^n) time and O(2^n) space as well, because every call in the tree coexists on the stack.',
      },
      {
        es: 'Tiempo O(n), ya que cada número de Fibonacci se calcula una sola vez descendiendo hasta el caso base.',
        en: 'O(n) time, since each Fibonacci number is computed only once while descending to the base case.',
      },
    ],
    explanation: {
      es: 'El árbol de llamadas se duplica en cada nivel y el número exacto de invocaciones crece con la razón áurea, aproximadamente 1,618^n, porque los mismos subproblemas se recalculan una y otra vez. El espacio no es exponencial porque solo la rama en curso está viva: los marcos se liberan al retornar, así que la profundidad máxima es n. El caso O(n) en tiempo es justamente la versión memoizada, que almacena cada resultado y convierte el árbol en una cadena lineal.',
      en: 'The call tree doubles at each level and the exact number of invocations grows with the golden ratio, roughly 1.618^n, because the same subproblems are recomputed over and over. Space is not exponential because only the current branch is alive: frames are released on return, so the maximum depth is n. The O(n) time case is precisely the memoised version, which stores each result and turns the tree into a linear chain.',
    },
  },
  {
    id: 'th-cx-10',
    topic: 'Complejidad',
    prompt: {
      es: 'Aplicando el teorema maestro a la recurrencia T(n) = 2T(n/2) + n, ¿cuál es la solución?',
      en: 'Applying the master theorem to the recurrence T(n) = 2T(n/2) + n, what is the solution?',
    },
    answer: {
      es: 'Theta(n log n), porque n elevado a log base 2 de 2 es n y coincide con el costo de dividir y combinar, cayendo en el segundo caso.',
      en: 'Theta(n log n), because n raised to log base 2 of 2 is n and matches the divide-and-combine cost, landing in the second case.',
    },
    distractors: [
      {
        es: 'Theta(n²), porque hay dos llamadas recursivas y cada una realiza un trabajo lineal sobre la entrada.',
        en: 'Theta(n²), because there are two recursive calls and each one performs linear work on the input.',
      },
      {
        es: 'Theta(n), porque el tamaño del problema se reduce a la mitad en cada nivel y la serie geométrica converge.',
        en: 'Theta(n), because the problem size halves at every level and the geometric series converges.',
      },
    ],
    explanation: {
      es: 'Con a igual a 2, b igual a 2 y f(n) igual a n, se compara n elevado a log base b de a, que da n, contra f(n): son del mismo orden, así que aplica el segundo caso y se multiplica por log n. Esta es exactamente la recurrencia de MergeSort. El razonamiento de la serie geométrica corresponde a T(n) = T(n/2) + n, con una sola llamada recursiva, que sí resuelve en Theta(n); y llegar a Theta(n²) implicaría que el trabajo no se reduce al descender por el árbol.',
      en: 'With a equal to 2, b equal to 2 and f(n) equal to n, you compare n raised to log base b of a, which gives n, against f(n): they are the same order, so the second case applies and you multiply by log n. This is exactly the MergeSort recurrence. The geometric series reasoning matches T(n) = T(n/2) + n, with a single recursive call, which does resolve to Theta(n); and reaching Theta(n²) would mean the work does not shrink while descending the tree.',
    },
  },
  {
    id: 'th-cx-11',
    topic: 'Complejidad',
    prompt: {
      es: '¿Qué compromiso se acepta al introducir una tabla de memoización en un algoritmo recursivo?',
      en: 'What trade-off do you accept when introducing a memoisation table into a recursive algorithm?',
    },
    answer: {
      es: 'Se paga memoria adicional proporcional al número de subproblemas distintos a cambio de eliminar el recálculo, y solo compensa si esos subproblemas se repiten.',
      en: 'You pay extra memory proportional to the number of distinct subproblems in exchange for removing recomputation, and it only pays off if those subproblems repeat.',
    },
    distractors: [
      {
        es: 'La memoización siempre mejora la complejidad porque evita recalcular, así que conviene aplicarla a cualquier algoritmo recursivo.',
        en: 'Memoisation always improves complexity because it avoids recomputation, so it is worth applying to any recursive algorithm.',
      },
      {
        es: 'También reduce el espacio, porque la tabla sustituye a los marcos de pila que generaría la recursión.',
        en: 'It also reduces space, because the table replaces the stack frames the recursion would create.',
      },
    ],
    explanation: {
      es: 'La memoización exige subproblemas solapados: en Fibonacci convierte O(2^n) en O(n) tiempo y O(n) espacio, pero en MergeSort o QuickSort cada subproblema es único y la tabla solo agregaría sobrecosto y consumo de memoria. Tampoco sustituye la pila: la recursión sigue descendiendo igual de profundo, así que el espacio total es la tabla más la pila. En la mochila la tabla es O(n*W), aunque se puede reducir a O(W) reutilizando una sola fila.',
      en: 'Memoisation requires overlapping subproblems: in Fibonacci it turns O(2^n) into O(n) time and O(n) space, but in MergeSort or QuickSort every subproblem is unique and the table would only add overhead and memory consumption. Nor does it replace the stack: the recursion still descends just as deep, so total space is the table plus the stack. In knapsack the table is O(n*W), although it can be reduced to O(W) by reusing a single row.',
    },
  },
  {
    id: 'th-cx-12',
    topic: 'Complejidad',
    prompt: {
      es: '¿Cuál es el costo de construir un HashMap insertando n elementos uno por uno?',
      en: 'What is the cost of building a HashMap by inserting n elements one by one?',
    },
    answer: {
      es: 'O(n) en promedio, porque cada put es O(1) amortizado aun contando los redimensionados intermedios.',
      en: 'O(n) on average, because each put is amortised O(1) even counting the intermediate resizes.',
    },
    distractors: [
      {
        es: 'O(n log n), porque el mapa mantiene las claves ordenadas por su hash para poder localizar el bucket correcto.',
        en: 'O(n log n), because the map keeps keys ordered by their hash in order to locate the right bucket.',
      },
      {
        es: 'O(n) garantizado, ya que dimensionar el mapa con new HashMap(n) elimina por completo el caso peor.',
        en: 'A guaranteed O(n), since sizing the map with new HashMap(n) removes the worst case entirely.',
      },
    ],
    explanation: {
      es: 'Cada redimensionado duplica la capacidad y rehashea todo, pero ocurre cada vez menos seguido, así que la suma de las copias es O(n) y el costo por inserción queda constante en promedio. El mapa no mantiene ningún orden, eso es TreeMap con su O(log n) por operación. Preasignar capacidad, respetando el factor de carga de 0,75, evita los rehashes pero no las colisiones: si todas las claves comparten hashCode el peor caso sigue siendo O(n²), o O(n log n) cuando los buckets se convierten en árboles.',
      en: 'Every resize doubles the capacity and rehashes everything, but it happens less and less often, so the sum of the copies is O(n) and the per-insertion cost stays constant on average. The map keeps no ordering, that is TreeMap with its O(log n) per operation. Pre-sizing the capacity, respecting the 0.75 load factor, avoids rehashes but not collisions: if every key shares a hashCode the worst case is still O(n²), or O(n log n) once buckets are treeified.',
    },
  },
  {
    id: 'th-cx-13',
    topic: 'Complejidad',
    prompt: {
      es: 'La programación dinámica resuelve la mochila 0/1 en O(n*W). ¿Por qué se dice que esa complejidad es pseudopolinómica?',
      en: 'Dynamic programming solves the 0/1 knapsack in O(n*W). Why is that complexity called pseudopolynomial?',
    },
    answer: {
      es: 'Porque es polinómica en el valor numérico de W, pero exponencial en el tamaño de su representación en bits, que es lo que mide la teoría de complejidad.',
      en: 'Because it is polynomial in the numeric value of W, yet exponential in the size of its bit representation, which is what complexity theory measures.',
    },
    distractors: [
      {
        es: 'Porque el algoritmo es polinómico, lo que demuestra que la mochila 0/1 en realidad no es un problema NP-completo.',
        en: 'Because the algorithm is polynomial, which shows that the 0/1 knapsack is not really an NP-complete problem.',
      },
      {
        es: 'Porque es exponencial en la práctica: la tabla recorre los 2^n subconjuntos posibles de objetos.',
        en: 'Because it is exponential in practice: the table walks through all 2^n possible subsets of items.',
      },
    ],
    explanation: {
      es: 'El tamaño de la entrada se mide en bits, y una capacidad W codificada en 64 bits vale hasta 2^64, así que una tabla de n por W es astronómica aunque la fórmula parezca polinómica. La versión de decisión de la mochila sigue siendo NP-completa y este algoritmo no lo contradice, justamente por esa diferencia entre valor y longitud de codificación. Tampoco enumera subconjuntos: la tabla tiene n*W celdas y cada una se llena en O(1) con una sola comparación.',
      en: 'Input size is measured in bits, and a capacity W encoded in 64 bits can reach 2^64, so a table of n by W is astronomical even though the formula looks polynomial. The decision version of knapsack remains NP-complete and this algorithm does not contradict that, precisely because of the gap between value and encoding length. It also does not enumerate subsets: the table has n*W cells and each is filled in O(1) with a single comparison.',
    },
  },
  {
    id: 'th-cx-14',
    topic: 'Complejidad',
    prompt: {
      es: 'Con dos entradas de tamaños distintos, ¿cuándo se expresa la complejidad como O(n+m) y cuándo como O(n*m)?',
      en: 'With two inputs of different sizes, when is complexity expressed as O(n+m) and when as O(n*m)?',
    },
    answer: {
      es: 'Se suma cuando los recorridos son secuenciales e independientes, y se multiplica cuando un recorrido está anidado dentro del otro.',
      en: 'You add when the traversals are sequential and independent, and you multiply when one traversal is nested inside the other.',
    },
    distractors: [
      {
        es: 'Siempre se puede simplificar tomando la mayor de las dos entradas como n, así que basta con escribir O(n) y O(n²).',
        en: 'You can always simplify by taking the larger of the two inputs as n, so writing O(n) and O(n²) is enough.',
      },
      {
        es: 'Se suma cuando ambas colecciones son del mismo tipo y se multiplica cuando hay que comparar elementos entre tipos distintos.',
        en: 'You add when both collections are of the same type and you multiply when elements of different types must be compared.',
      },
    ],
    explanation: {
      es: 'La forma de la expresión refleja la estructura del código: dos bucles consecutivos suman su trabajo y un bucle dentro de otro lo multiplica. Colapsar a una sola variable es válido para la suma, porque O(n+m) equivale a O(max(n,m)), pero no para el producto: si m es muy pequeño frente a n, escribir O(n²) exagera el costo, y si m es independiente la información se pierde. Por eso el recorrido BFS de un grafo se documenta como O(V+E) y no como O(V²). Los tipos de las colecciones son irrelevantes; lo que cuenta es el anidamiento.',
      en: 'The shape of the expression mirrors the structure of the code: two consecutive loops add their work and a loop inside another multiplies it. Collapsing to a single variable is valid for the sum, since O(n+m) equals O(max(n,m)), but not for the product: if m is tiny compared to n, writing O(n²) overstates the cost, and if m is independent the information is lost. That is why a BFS graph traversal is documented as O(V+E) and not as O(V²). Collection types are irrelevant; what counts is the nesting.',
    },
  },
  {
    id: 'th-cx-15',
    topic: 'Complejidad',
    prompt: {
      es: '¿Por qué el mejor caso puede resultar engañoso, como el de insertion sort sobre datos ya ordenados?',
      en: 'Why can the best case be misleading, such as insertion sort on already sorted data?',
    },
    answer: {
      es: 'Porque con datos ordenados es O(n), pero esa entrada no representa la típica: el caso promedio y el peor siguen siendo O(n²).',
      en: 'Because on sorted data it is O(n), but that input is not representative: the average and worst cases are still O(n²).',
    },
    distractors: [
      {
        es: 'Porque el mejor caso de insertion sort es O(n log n), el mismo límite inferior de cualquier ordenamiento por comparación.',
        en: 'Because the insertion sort best case is O(n log n), the same lower bound as any comparison sort.',
      },
      {
        es: 'Porque al ser O(n) en el mejor caso, insertion sort es la mejor opción para listas casi ordenadas de cualquier tamaño.',
        en: 'Because being O(n) in the best case, insertion sort is the best option for nearly sorted lists of any size.',
      },
    ],
    explanation: {
      es: 'Con la entrada ordenada cada elemento se compara una vez con su predecesor y no se desplaza nada, dando n-1 comparaciones; con la entrada invertida se hacen n(n+1)/2 movimientos. El límite de O(n log n) es para el peor caso de los ordenamientos por comparación, no para el mejor caso, que puede ser lineal. Y aunque su costo real es O(n + d), con d el número de inversiones, dejarlo para listas grandes es riesgoso: por eso Timsort lo usa solo en tramos de 32 a 64 elementos y delega el resto en fusiones.',
      en: 'With sorted input each element is compared once against its predecessor and nothing is shifted, giving n-1 comparisons; with reversed input it performs n(n+1)/2 moves. The O(n log n) bound applies to the worst case of comparison sorts, not to the best case, which can be linear. And although its real cost is O(n + d), with d the number of inversions, leaving it in charge of large lists is risky: that is why Timsort uses it only on runs of 32 to 64 elements and delegates the rest to merges.',
    },
  },
  {
    id: 'th-cx-16',
    topic: 'Complejidad',
    prompt: {
      es: 'Expresada como complejidad, ¿qué diferencia hay entre una consulta que usa un índice y un escaneo completo de tabla?',
      en: 'Expressed as complexity, what is the difference between a query that uses an index and a full table scan?',
    },
    answer: {
      es: 'Un índice B-tree lleva la búsqueda a O(log n), mientras que el escaneo completo recorre todas las filas en O(n).',
      en: 'A B-tree index brings the lookup down to O(log n), while a full scan walks every row in O(n).',
    },
    distractors: [
      {
        es: 'El índice hace la consulta O(1), porque el motor localiza la fila directamente mediante una tabla hash interna.',
        en: 'The index makes the query O(1), because the engine locates the row directly through an internal hash table.',
      },
      {
        es: 'El índice siempre acelera la consulta, así que conviene crear uno por cada columna que aparezca en el WHERE.',
        en: 'An index always speeds up the query, so it is worth creating one per column appearing in the WHERE clause.',
      },
    ],
    explanation: {
      es: 'El índice por defecto en PostgreSQL, MySQL u Oracle es un B-tree con alto factor de ramificación, de modo que millones de filas se alcanzan en tres o cuatro niveles. Existen índices hash y ofrecen O(1) esperado, pero no son el caso general y no sirven para rangos ni para ORDER BY. La idea de indexar todo ignora dos costos: cada índice ralentiza INSERT, UPDATE y DELETE, y si la selectividad es baja el planificador prefiere el escaneo secuencial porque el acceso aleatorio resulta más caro que leer la tabla de corrido.',
      en: 'The default index in PostgreSQL, MySQL or Oracle is a B-tree with a high branching factor, so millions of rows are reached in three or four levels. Hash indexes do exist and offer expected O(1), but they are not the general case and do not serve ranges or ORDER BY. Indexing everything ignores two costs: each index slows down INSERT, UPDATE and DELETE, and when selectivity is low the planner prefers a sequential scan because random access is more expensive than reading the table straight through.',
    },
  },
  {
    id: 'th-cx-17',
    topic: 'Complejidad',
    prompt: {
      es: '¿Por qué eliminar muchos elementos de un ArrayList mientras se recorre degrada a costo cuadrático?',
      en: 'Why does removing many elements from an ArrayList while iterating degrade to quadratic cost?',
    },
    answer: {
      es: 'Porque cada remove desplaza con arraycopy todos los elementos posteriores, así que k borrados sobre n elementos cuestan O(n*k); removeIf compacta en una sola pasada O(n).',
      en: 'Because each remove shifts all later elements with arraycopy, so k deletions over n elements cost O(n*k); removeIf compacts in a single O(n) pass.',
    },
    distractors: [
      {
        es: 'Porque lanza ConcurrentModificationException, y al usar el iterador explícito con su método remove el costo pasa a ser O(n).',
        en: 'Because it throws ConcurrentModificationException, and using the explicit iterator with its remove method brings the cost down to O(n).',
      },
      {
        es: 'Porque conviene recorrer hacia atrás: así el borrado deja de desplazar elementos y el costo total baja a O(n).',
        en: 'Because you should iterate backwards: that way the deletion stops shifting elements and the total cost drops to O(n).',
      },
    ],
    explanation: {
      es: 'El costo está en el System.arraycopy que ejecuta cada eliminación para cerrar el hueco en el arreglo interno, y eso ocurre igual con Iterator.remove: ese iterador evita la excepción y el salto de índices, pero no evita el desplazamiento, así que sigue siendo cuadrático. Recorrer hacia atrás también resuelve solo el problema de los índices. La solución real es removeIf, que marca los supervivientes y los compacta una sola vez, o pasar a una LinkedList cuando el borrado por iterador es realmente O(1).',
      en: 'The cost lies in the System.arraycopy that each removal runs to close the gap in the backing array, and that happens with Iterator.remove too: that iterator avoids the exception and the index skipping, but not the shifting, so it stays quadratic. Iterating backwards likewise only fixes the index problem. The real fix is removeIf, which marks survivors and compacts them once, or moving to a LinkedList where iterator-based removal really is O(1).',
    },
  },
  {
    id: 'th-cx-18',
    topic: 'Complejidad',
    prompt: {
      es: 'Un método recursivo de cola procesa una lista de un millón de elementos en la JVM. ¿Qué ocurre y por qué?',
      en: 'A tail-recursive method processes a list of one million elements on the JVM. What happens and why?',
    },
    answer: {
      es: 'Falla con StackOverflowError, porque la JVM no elimina las llamadas de cola y reserva un marco de pila por cada invocación.',
      en: 'It fails with StackOverflowError, because the JVM does not eliminate tail calls and reserves one stack frame per invocation.',
    },
    distractors: [
      {
        es: 'Funciona en espacio O(1), porque el resultado parcial viaja en el parámetro acumulador y no hace falta conservar el marco.',
        en: 'It works in O(1) space, because the partial result travels in the accumulator parameter and there is no need to keep the frame.',
      },
      {
        es: 'Funciona sin problema, porque el compilador de Java convierte la recursión de cola en un bucle cuando el método es estático o final.',
        en: 'It works fine, because the Java compiler turns tail recursion into a loop when the method is static or final.',
      },
    ],
    explanation: {
      es: 'La recursión de cola es O(1) en espacio solo en lenguajes o máquinas virtuales que implementan la optimización de llamada final; la JVM no lo hace, entre otras razones porque necesita la pila completa para los rastros de excepción y para las comprobaciones de seguridad. Con el tamaño de pila por defecto, de unos 512 KB a 1 MB ajustable con -Xss, el desbordamiento llega a las pocas decenas de miles de marcos. Scala con la anotación tailrec y Kotlin con la palabra clave tailrec hacen esa transformación en el compilador; en Java hay que reescribirlo como bucle o usar un trampolín.',
      en: 'Tail recursion is O(1) in space only on languages or virtual machines that implement tail call optimisation; the JVM does not, partly because it needs the full stack for exception traces and security checks. With the default stack size, around 512 KB to 1 MB tunable with -Xss, the overflow arrives at a few tens of thousands of frames. Scala with the tailrec annotation and Kotlin with the tailrec keyword do perform that transformation in the compiler; in Java you must rewrite it as a loop or use a trampoline.',
    },
  },
  {
    id: 'th-cx-19',
    topic: 'Complejidad',
    prompt: {
      es: 'Necesitas la intersección de dos colecciones de n y m elementos. ¿Cuál estrategia ofrece la mejor complejidad?',
      en: 'You need the intersection of two collections with n and m elements. Which strategy offers the best complexity?',
    },
    answer: {
      es: 'Volcar la colección menor en un HashSet y recorrer la otra consultando contains, lo que da O(n+m) en tiempo y O(min(n,m)) en espacio.',
      en: 'Dump the smaller collection into a HashSet and walk the other one calling contains, which gives O(n+m) time and O(min(n,m)) space.',
    },
    distractors: [
      {
        es: 'Ordenar ambas colecciones y avanzar con dos punteros, que es O(n+m) y además no necesita estructuras auxiliares.',
        en: 'Sort both collections and advance with two pointers, which is O(n+m) and needs no auxiliary structures.',
      },
      {
        es: 'Llamar a retainAll entre los dos ArrayList, porque la implementación nativa de la JDK ya está optimizada para este caso.',
        en: 'Call retainAll between the two ArrayList instances, because the native JDK implementation is already optimised for this case.',
      },
    ],
    explanation: {
      es: 'Con el HashSet cada consulta es O(1) promedio, así que se paga una pasada por cada colección. La técnica de dos punteros es O(n+m) solo en la fase de recorrido: hay que sumarle el ordenamiento, de modo que el total es O(n log n + m log m), aunque gana en memoria y en localidad de caché si los datos ya vienen ordenados. Y retainAll sobre un ArrayList llama a contains del argumento por cada elemento: si el argumento es otra lista el costo es O(n*m), y solo baja a O(n) cuando se le pasa un HashSet.',
      en: 'With a HashSet each lookup is O(1) on average, so you pay one pass per collection. The two-pointer technique is O(n+m) only in the scanning phase: you must add the sort, so the total is O(n log n + m log m), although it wins on memory and cache locality when the data already arrives sorted. And retainAll on an ArrayList calls contains on the argument for every element: if the argument is another list the cost is O(n*m), and it only drops to O(n) when you pass it a HashSet.',
    },
  },
  {
    id: 'th-cx-20',
    topic: 'Complejidad',
    prompt: {
      es: '¿Qué caracteriza a un algoritmo de una sola pasada con memoria constante?',
      en: 'What characterises a single-pass algorithm with constant memory?',
    },
    answer: {
      es: 'Recorre la entrada una única vez manteniendo unos pocos acumuladores, logrando O(n) en tiempo y O(1) en espacio, como Kadane o el voto mayoritario de Boyer-Moore.',
      en: 'It walks the input exactly once keeping a handful of accumulators, achieving O(n) time and O(1) space, like Kadane or the Boyer-Moore majority vote.',
    },
    distractors: [
      {
        es: 'Es O(1) en tiempo, porque procesa cada elemento una sola vez y nunca necesita retroceder sobre la entrada.',
        en: 'It is O(1) in time, because it processes each element only once and never needs to go back over the input.',
      },
      {
        es: 'Cualquier algoritmo que hoy requiere dos pasadas se puede reescribir en una sola con memoria constante.',
        en: 'Any algorithm that today needs two passes can be rewritten as a single pass with constant memory.',
      },
    ],
    explanation: {
      es: 'Una sola pasada se refiere al número de recorridos, no al tiempo total: visitar n elementos cuesta O(n), y lo distintivo es que el espacio extra no crece con la entrada. Kadane resuelve la subsecuencia de suma máxima con dos variables y Boyer-Moore encuentra el elemento mayoritario con un candidato y un contador. La generalización no se sostiene: calcular la mediana exacta o el elemento más frecuente exige memoria proporcional a los datos, y en flujos solo se consiguen aproximaciones con estructuras como Count-Min Sketch o muestreo de reservorio.',
      en: 'Single pass refers to the number of traversals, not the total time: visiting n elements costs O(n), and the distinctive part is that the extra space does not grow with the input. Kadane solves the maximum subarray sum with two variables and Boyer-Moore finds the majority element with a candidate and a counter. The generalisation does not hold: computing the exact median or the most frequent element requires memory proportional to the data, and on streams you only get approximations with structures such as Count-Min Sketch or reservoir sampling.',
    },
  },
];
