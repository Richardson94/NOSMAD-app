import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_COMPLEXITY_ANALYSIS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-cx-01',
    topic: 'Complejidad',
    prompt: {
      es: '¿Qué significan O(1), O(n) y O(n log n) en la práctica?',
      en: 'What do O(1), O(n) and O(n log n) mean in practice?',
    },
    answer: {
      es: 'O(1) no crece con los datos, como leer un índice. O(n) mira cada elemento una vez. O(n log n) es el costo típico de ordenar.',
      en: 'O(1) does not grow with the data, like reading an index. O(n) looks at each element once. O(n log n) is the usual cost of sorting.',
    },
    distractors: [
      {
        es: 'O(1) es el mejor caso, O(n) el promedio y O(n log n) el peor caso.',
        en: 'O(1) is the best case, O(n) the average and O(n log n) the worst case.',
      },
      {
        es: 'O(n log n) siempre es más lento que O(n) para cualquier tamaño.',
        en: 'O(n log n) is always slower than O(n) for every size.',
      },
    ],
    explanation: {
      es: 'Comparan cómo crece el trabajo cuando hay muchos datos. Con pocos elementos las constantes pueden invertir el resultado.',
      en: 'They compare how the work grows when there is a lot of data. With few elements the constants can reverse the result.',
    },
  },
  {
    id: 'th-cx-02',
    topic: 'Complejidad',
    prompt: {
      es: '¿Cuánto tarda buscar una clave en una tabla hash?',
      en: 'How long does it take to look up a key in a hash table?',
    },
    answer: {
      es: 'En el caso habitual es constante. Si todas las claves caen en el mismo cubo, hay que recorrerlas y pasa a ser lineal.',
      en: 'In the usual case it is constant. If every key lands in the same bucket, you must walk them and it becomes linear.',
    },
    distractors: [
      {
        es: 'Siempre es log n, porque el factor de carga obliga a redimensionar.',
        en: 'It is always log n, because the load factor forces a resize.',
      },
      {
        es: 'La lectura absorbe el costo del rehash, así que es constante amortizado.',
        en: 'The read absorbs the rehash cost, so it is amortised constant.',
      },
    ],
    explanation: {
      es: 'El rehash encarece algunas inserciones, no las lecturas. Un buen hash mantiene las búsquedas cerca de un acceso directo.',
      en: 'A rehash makes some insertions more expensive, not the reads. A good hash keeps lookups close to a direct access.',
    },
  },
  {
    id: 'th-cx-03',
    topic: 'Complejidad',
    prompt: {
      es: '¿Por qué la notación O ignora constantes y cuándo sí importan?',
      en: 'Why does big O ignore constants and when do they matter?',
    },
    answer: {
      es: 'Porque describe el crecimiento cuando hay muchísimos datos. Con pocos elementos, o en un bucle muy caliente, la constante decide el tiempo real.',
      en: 'Because it describes growth when there is a huge amount of data. With few elements, or in a very hot loop, the constant decides the real time.',
    },
    distractors: [
      {
        es: 'Porque un algoritmo O(n) siempre gana a uno O(n log n).',
        en: 'Because an O(n) algorithm always beats an O(n log n) one.',
      },
      {
        es: 'Porque dos algoritmos con la misma notación tardan lo mismo en la misma máquina.',
        en: 'Because two algorithms with the same notation take the same time on the same machine.',
      },
    ],
    explanation: {
      es: 'Por eso un sort de producción usa inserción en tramos pequeños: ahí la constante gana al algoritmo teóricamente mejor.',
      en: 'That is why a production sort uses insertion on small runs: there the constant beats the theoretically better algorithm.',
    },
  },
  {
    id: 'th-cx-04',
    topic: 'Complejidad',
    prompt: {
      es: '¿Cuál es el costo de un bucle que va de 0 a n y, dentro, otro que va de 0 a i?',
      en: 'A loop runs from 0 to n and, inside, another runs from 0 to i. What is the cost?',
    },
    answer: {
      es: 'Cuadrático. Aunque el interno no llega siempre a n, la suma de 1 más 2 más n sigue creciendo como n al cuadrado.',
      en: 'Quadratic. Even though the inner loop does not always reach n, the sum of 1 plus 2 up to n still grows like n squared.',
    },
    distractors: [
      {
        es: 'O(n log n), porque el límite interno crece poco a poco.',
        en: 'O(n log n), because the inner bound grows gradually.',
      },
      {
        es: 'O(n al cuadrado partido por 2), y hay que dejar la constante en la notación.',
        en: 'O of n squared divided by 2, and the constant must stay in the notation.',
      },
    ],
    explanation: {
      es: 'Un logaritmo aparece cuando el índice se multiplica o se divide, no cuando solo se incrementa.',
      en: 'A logarithm shows up when the index is multiplied or divided, not when it is only incremented.',
    },
  },
  {
    id: 'th-cx-05',
    topic: 'Complejidad',
    prompt: {
      es: '¿Cuántas vueltas da un bucle que parte de n y en cada vuelta divide i entre 2?',
      en: 'A loop starts at n and divides i by 2 on every turn. How many turns does it take?',
    },
    answer: {
      es: 'Del orden de log n. Para un millón de elementos son unas veinte vueltas, no medio millón.',
      en: 'On the order of log n. For a million elements that is about twenty turns, not half a million.',
    },
    distractors: [
      {
        es: 'O(n/2), porque cada paso descarta la mitad.',
        en: 'O(n/2), because each step discards half.',
      },
      {
        es: 'O(log n) solo si los datos están ordenados. Si no, pasa a ser lineal.',
        en: 'O(log n) only if the data is sorted. Otherwise it becomes linear.',
      },
    ],
    explanation: {
      es: 'Descartar la mitad es multiplicar, no restar n/2 pasos. El orden de los datos importa para que la búsqueda sea correcta, no para contar vueltas.',
      en: 'Discarding half is multiplicative, not n/2 steps. Data order matters for the search to be correct, not for counting turns.',
    },
  },
  {
    id: 'th-cx-06',
    topic: 'Complejidad',
    prompt: {
      es: '¿Por qué concatenar cadenas con más dentro de un bucle es caro en Java?',
      en: 'Why is concatenating strings with plus inside a loop expensive in Java?',
    },
    answer: {
      es: 'Porque String no cambia: cada más copia todo lo acumulado. El total es cuadrático. StringBuilder mantiene el costo lineal.',
      en: 'Because String does not change: each plus copies everything accumulated so far. The total is quadratic. StringBuilder keeps the cost linear.',
    },
    distractors: [
      {
        es: 'Son equivalentes, porque el compilador traduce el más a StringBuilder.',
        en: 'They are equivalent, because the compiler translates plus into StringBuilder.',
      },
      {
        es: 'El tiempo es el mismo. El más solo genera más basura.',
        en: 'The time is the same. Plus only creates more garbage.',
      },
    ],
    explanation: {
      es: 'El compilador sí usa StringBuilder, pero uno nuevo por expresión. Dentro del bucle esa optimización no evita las copias.',
      en: 'The compiler does use StringBuilder, but a new one per expression. Inside the loop that optimisation does not avoid the copies.',
    },
  },
  {
    id: 'th-cx-07',
    topic: 'Complejidad',
    prompt: {
      es: '¿Qué cambia si, dentro de un bucle, llamas a contains sobre una List o sobre un HashSet?',
      en: 'Inside a loop you call contains. What changes if the collection is a List or a HashSet?',
    },
    answer: {
      es: 'En una List cada contains recorre los elementos, así que el total es el producto de los tamaños. En un HashSet cada contains es constante en promedio y el total baja a una pasada.',
      en: 'On a List each contains walks the elements, so the total is the product of the sizes. On a HashSet each contains is constant on average and the total drops to one pass.',
    },
    distractors: [
      {
        es: 'ArrayList.contains es logarítmico porque el arreglo es contiguo.',
        en: 'ArrayList.contains is logarithmic because the array is contiguous.',
      },
      {
        es: 'No hay diferencia real: las dos usan equals y el costo está ahí.',
        en: 'There is no real difference: both use equals and the cost is there.',
      },
    ],
    explanation: {
      es: 'La caché mejora la constante del recorrido, no lo convierte en una búsqueda binaria. Para orden logarítmico haría falta un TreeSet.',
      en: 'The cache improves the constant of the scan. It does not turn it into a binary search. For a logarithmic lookup you would need a TreeSet.',
    },
  },
  {
    id: 'th-cx-08',
    topic: 'Complejidad',
    prompt: {
      es: '¿Qué ganas, para encontrar pares, si ordenas primero en lugar de usar un doble bucle?',
      en: 'To find pairs, what do you gain by sorting first instead of using a double loop?',
    },
    answer: {
      es: 'Ordenar es n log n y la pasada posterior es lineal. Eso gana al doble bucle cuadrático en cuanto n crece.',
      en: 'Sorting is n log n and the later pass is linear. That beats the quadratic double loop as soon as n grows.',
    },
    distractors: [
      {
        es: 'El doble bucle es mejor porque no gasta memoria ni el costo de ordenar.',
        en: 'The double loop is better because it spends neither memory nor the cost of sorting.',
      },
      {
        es: 'Ordenar primero solo conviene si los datos ya vienen casi ordenados.',
        en: 'Sorting first is only worth it when the data is already nearly sorted.',
      },
    ],
    explanation: {
      es: 'Con un millón de elementos la diferencia es enorme. Ahorrar un arreglo auxiliar no compensa saltar de clase de costo.',
      en: 'With a million elements the gap is huge. Saving an auxiliary array does not offset jumping a cost class.',
    },
  },
  {
    id: 'th-cx-09',
    topic: 'Complejidad',
    prompt: {
      es: '¿Por qué el Fibonacci recursivo ingenuo se vuelve inutilizable y cuánta pila usa?',
      en: 'Why does naive recursive Fibonacci become unusable and how much stack does it use?',
    },
    answer: {
      es: 'Porque recalcula los mismos números una y otra vez y el tiempo crece de forma exponencial. La pila solo llega a n, la profundidad de una rama.',
      en: 'Because it recomputes the same numbers over and over and the time grows exponentially. The stack only reaches n, the depth of one branch.',
    },
    distractors: [
      {
        es: 'El tiempo y la pila son exponenciales, porque todo el árbol está vivo a la vez.',
        en: 'Time and stack are both exponential, because the whole tree is alive at once.',
      },
      {
        es: 'El tiempo es lineal, porque cada número se calcula una sola vez.',
        en: 'The time is linear, because each number is computed only once.',
      },
    ],
    explanation: {
      es: 'Guardar los resultados ya calculados lo baja a lineal. Sin esa caché el mismo subproblema se repite en las dos ramas.',
      en: 'Storing results already computed brings it down to linear. Without that cache the same subproblem repeats on both branches.',
    },
  },
  {
    id: 'th-cx-10',
    topic: 'Complejidad',
    prompt: {
      es: '¿Por qué ordenar con merge sort no es lineal aunque cada mezcla mire n elementos?',
      en: 'Why is sorting with merge sort not linear even though each merge looks at n elements?',
    },
    answer: {
      es: 'Porque hay varios niveles. En cada nivel se mira todo el arreglo y hay unos log n niveles, así que el total es n log n.',
      en: 'Because there are several levels. At each level the whole array is looked at and there are about log n levels, so the total is n log n.',
    },
    distractors: [
      {
        es: 'Es cuadrático, porque hay dos llamadas recursivas y cada una hace trabajo lineal.',
        en: 'It is quadratic, because there are two recursive calls and each one does linear work.',
      },
      {
        es: 'Es lineal, porque el problema se parte por la mitad y la serie converge.',
        en: 'It is linear, because the problem is split in half and the series converges.',
      },
    ],
    explanation: {
      es: 'Una sola recursión que parte por la mitad y hace trabajo lineal sí puede quedar lineal. Merge sort lanza dos subproblemas.',
      en: 'A single recursion that splits in half and does linear work can stay linear. Merge sort launches two subproblems.',
    },
  },
  {
    id: 'th-cx-11',
    topic: 'Complejidad',
    prompt: {
      es: '¿Qué pagas al memoizar un algoritmo recursivo?',
      en: 'What do you pay when you add memoisation to a recursive algorithm?',
    },
    answer: {
      es: 'Memoria extra por cada subproblema distinto, a cambio de no recalcular. Solo compensa si esos subproblemas se repiten.',
      en: 'Extra memory for each distinct subproblem, in exchange for not recomputing. It only pays off if those subproblems repeat.',
    },
    distractors: [
      {
        es: 'Nada: siempre mejora, así que conviene en cualquier recursión.',
        en: 'Nothing: it always improves, so it is worth it on any recursion.',
      },
      {
        es: 'También ahorra pila, porque la tabla sustituye a los marcos.',
        en: 'It also saves stack, because the table replaces the frames.',
      },
    ],
    explanation: {
      es: 'En merge sort cada subproblema es distinto y la tabla solo estorba. La recursión sigue usando pila además de la tabla.',
      en: 'In merge sort every subproblem is different and the table only gets in the way. The recursion still uses stack in addition to the table.',
    },
  },
  {
    id: 'th-cx-12',
    topic: 'Complejidad',
    prompt: {
      es: '¿Cuánto cuesta llenar un HashMap con n inserciones?',
      en: 'What does it cost to fill a HashMap with n insertions?',
    },
    answer: {
      es: 'Lineal en el caso habitual. Cada put es constante, y los redimensionados ocasionales no cambian el total.',
      en: 'Linear in the usual case. Each put is constant, and the occasional resizes do not change the total.',
    },
    distractors: [
      {
        es: 'O(n log n), porque ordena las claves por el hash.',
        en: 'O(n log n), because it sorts the keys by the hash.',
      },
      {
        es: 'O(n) garantizado si reservas la capacidad, porque desaparece el peor caso.',
        en: 'A guaranteed O(n) if you reserve capacity, because the worst case disappears.',
      },
    ],
    explanation: {
      es: 'Reservar capacidad evita copias, no las colisiones. Si todas las claves comparten hash, el peor caso sigue siendo malo. El mapa ordenado es TreeMap.',
      en: 'Reserving capacity avoids copies, not collisions. If every key shares a hash, the worst case is still bad. The ordered map is TreeMap.',
    },
  },
  {
    id: 'th-cx-13',
    topic: 'Complejidad',
    prompt: {
      es: '¿Por qué puede ser impracticable la mochila por programación dinámica, aunque parezca polinómica en el peso?',
      en: 'Knapsack by dynamic programming looks polynomial in the weight. Why can it still be impractical?',
    },
    answer: {
      es: 'Porque el tiempo crece con el valor del peso, no con el número de bits. Un peso enorme hace una tabla enorme.',
      en: 'Because the time grows with the numeric weight, not with the number of bits. A huge weight makes a huge table.',
    },
    distractors: [
      {
        es: 'Porque eso demuestra que la mochila no es un problema difícil.',
        en: 'Because that proves knapsack is not a hard problem.',
      },
      {
        es: 'Porque la tabla recorre todos los subconjuntos de objetos.',
        en: 'Because the table walks every subset of items.',
      },
    ],
    explanation: {
      es: 'Con pesos pequeños la tabla va bien. Con capacidades de millones de celdas el algoritmo deja de ser usable aunque la fórmula parezca sencilla.',
      en: 'With small weights the table is fine. With capacities of millions of cells the algorithm stops being usable even though the formula looks simple.',
    },
  },
  {
    id: 'th-cx-14',
    topic: 'Complejidad',
    prompt: {
      es: '¿Cuándo se suma el costo de dos colecciones y cuándo se multiplica?',
      en: 'With two collections, when does the cost add and when does it multiply?',
    },
    answer: {
      es: 'Se suma si recorres una y después la otra. Se multiplica si un recorrido está dentro del otro.',
      en: 'It adds if you walk one and then the other. It multiplies if one walk sits inside the other.',
    },
    distractors: [
      {
        es: 'Siempre puedes quedarte con el tamaño mayor y escribir O(n) u O(n al cuadrado).',
        en: 'You can always keep the larger size and write O(n) or O(n squared).',
      },
      {
        es: 'Se suma si son del mismo tipo y se multiplica si comparas tipos distintos.',
        en: 'It adds when they are the same type and multiplies when you compare different types.',
      },
    ],
    explanation: {
      es: 'Por eso un recorrido de grafo se cuenta como vértices más aristas, y un bucle anidado como el producto.',
      en: 'That is why a graph walk is counted as vertices plus edges, and a nested loop as the product.',
    },
  },
  {
    id: 'th-cx-15',
    topic: 'Complejidad',
    prompt: {
      es: '¿Por qué puede engañar que insertion sort sea lineal cuando los datos ya están ordenados?',
      en: 'Insertion sort is linear if the data is already sorted. Why can that fact mislead you?',
    },
    answer: {
      es: 'Porque esa entrada no es la habitual. En promedio y en el peor caso sigue siendo cuadrático.',
      en: 'Because that input is not the usual one. On average and in the worst case it is still quadratic.',
    },
    distractors: [
      {
        es: 'Porque el mejor caso de cualquier ordenamiento es n log n.',
        en: 'Because the best case of any sort is n log n.',
      },
      {
        es: 'Porque al ser lineal en el mejor caso, es la mejor opción para listas grandes casi ordenadas.',
        en: 'Because it is linear in the best case, it is the best choice for large nearly sorted lists.',
      },
    ],
    explanation: {
      es: 'Sirve en tramos pequeños. Dejarlo solo con listas grandes es arriesgado aunque a veces los datos vengan ordenados.',
      en: 'It is useful on small runs. Leaving it in charge of large lists is risky even if the data sometimes arrives sorted.',
    },
  },
  {
    id: 'th-cx-16',
    topic: 'Complejidad',
    prompt: {
      es: '¿Qué cambia en costo una consulta que usa un índice frente a leer la tabla entera?',
      en: 'What changes in cost when a query uses an index instead of reading the whole table?',
    },
    answer: {
      es: 'El índice habitual es un árbol y la búsqueda baja a log n. El escaneo completo mira todas las filas.',
      en: 'The usual index is a tree and the lookup drops to log n. A full scan looks at every row.',
    },
    distractors: [
      {
        es: 'El índice hace la consulta constante, porque es una tabla hash interna.',
        en: 'The index makes the query constant, because it is an internal hash table.',
      },
      {
        es: 'Un índice siempre acelera, así que conviene uno por cada columna del WHERE.',
        en: 'An index always speeds things up, so one per WHERE column is worth it.',
      },
    ],
    explanation: {
      es: 'Cada índice ralentiza las escrituras. Si la consulta devuelve casi toda la tabla, el motor puede preferir leerla seguida.',
      en: 'Each index slows writes. If the query returns almost the whole table, the engine may prefer to read it straight through.',
    },
  },
  {
    id: 'th-cx-17',
    topic: 'Complejidad',
    prompt: {
      es: '¿Por qué borrar muchos elementos de un ArrayList mientras lo recorres se vuelve cuadrático?',
      en: 'Why does removing many elements from an ArrayList while you iterate become quadratic?',
    },
    answer: {
      es: 'Porque cada remove desplaza todos los elementos de detrás. Borrar muchos sobre una lista grande multiplica ese trabajo.',
      en: 'Because each remove shifts every element behind it. Deleting many items from a large list multiplies that work.',
    },
    distractors: [
      {
        es: 'Porque lanza ConcurrentModificationException, y el remove del iterador lo baja a lineal.',
        en: 'Because it throws ConcurrentModificationException, and the iterator remove brings it down to linear.',
      },
      {
        es: 'Porque hay que recorrer hacia atrás: así el borrado deja de desplazar y el costo es lineal.',
        en: 'Because you must iterate backwards: then the deletion stops shifting and the cost is linear.',
      },
    ],
    explanation: {
      es: 'El iterador evita saltarse índices, no la copia del arreglo. removeIf compacta en una sola pasada.',
      en: 'The iterator avoids skipping indexes, not the array copy. removeIf compacts in a single pass.',
    },
  },
  {
    id: 'th-cx-18',
    topic: 'Complejidad',
    prompt: {
      es: '¿Qué pasa en la JVM si un método recursivo de cola recorre una lista de un millón de elementos?',
      en: 'A tail recursive method walks a list of one million elements on the JVM. What happens?',
    },
    answer: {
      es: 'Revienta la pila. La JVM no convierte la recursión de cola en un bucle y reserva un marco por llamada.',
      en: 'It blows the stack. The JVM does not turn tail recursion into a loop and it reserves one frame per call.',
    },
    distractors: [
      {
        es: 'Funciona en espacio constante, porque el acumulador viaja en el parámetro.',
        en: 'It works in constant space, because the accumulator travels in the parameter.',
      },
      {
        es: 'Funciona si el método es estático o final, porque el compilador lo convierte en un bucle.',
        en: 'It works if the method is static or final, because the compiler turns it into a loop.',
      },
    ],
    explanation: {
      es: 'En Java hay que escribir el bucle. Otros lenguajes sí eliminan la llamada de cola en el compilador.',
      en: 'In Java you must write the loop. Other languages do eliminate the tail call in the compiler.',
    },
  },
  {
    id: 'th-cx-19',
    topic: 'Complejidad',
    prompt: {
      es: '¿Cómo calculas la intersección de dos colecciones con buen costo?',
      en: 'How do you compute the intersection of two collections at a good cost?',
    },
    answer: {
      es: 'Metes la menor en un HashSet y recorres la otra preguntando si contiene. El tiempo es la suma de los tamaños.',
      en: 'You put the smaller one in a HashSet and walk the other asking whether it contains each item. The time is the sum of the sizes.',
    },
    distractors: [
      {
        es: 'Ordenas las dos y avanzas con dos punteros, que ya es la suma de los tamaños sin memoria extra.',
        en: 'You sort both and advance with two pointers, which is already the sum of the sizes with no extra memory.',
      },
      {
        es: 'Llamas a retainAll entre dos ArrayList, porque la JDK ya lo optimiza.',
        en: 'You call retainAll between two ArrayList instances, because the JDK already optimises it.',
      },
    ],
    explanation: {
      es: 'Ordenar suma el costo del sort. retainAll contra otra lista hace un contains lineal por elemento y vuelve al producto.',
      en: 'Sorting adds the cost of the sort. retainAll against another list does a linear contains per element and falls back to the product.',
    },
  },
  {
    id: 'th-cx-20',
    topic: 'Complejidad',
    prompt: {
      es: '¿Qué caracteriza a un algoritmo de una pasada con memoria constante?',
      en: 'What characterises a single pass algorithm with constant memory?',
    },
    answer: {
      es: 'Recorre la entrada una vez y guarda solo unos pocos acumuladores. El tiempo es lineal y el espacio extra no crece con los datos.',
      en: 'It walks the input once and keeps only a few accumulators. The time is linear and the extra space does not grow with the data.',
    },
    distractors: [
      {
        es: 'Es tiempo constante, porque cada elemento se procesa una sola vez.',
        en: 'It is constant time, because each element is processed only once.',
      },
      {
        es: 'Cualquier algoritmo de dos pasadas se puede reescribir así.',
        en: 'Any two pass algorithm can be rewritten this way.',
      },
    ],
    explanation: {
      es: 'Visitar n elementos sigue siendo lineal. La mediana exacta o el elemento más frecuente, en general, necesitan memoria que crece con la entrada.',
      en: 'Visiting n elements is still linear. The exact median or the most frequent element, in general, need memory that grows with the input.',
    },
  },
];
