import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_ALGORITHMS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-alg-01',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Qué necesita la búsqueda binaria y cuál es el error típico al mover los límites?',
      en: 'What does binary search need and what is the typical mistake when moving the bounds?',
    },
    answer: {
      es: 'El arreglo debe estar ordenado. Hay que descartar el medio, si no el intervalo no se achica y el bucle puede no terminar.',
      en: 'The array must be sorted. You must discard the middle, otherwise the interval does not shrink and the loop may never end.',
    },
    distractors: [
      {
        es: 'Basta el acceso directo. El orden no importa si empiezas por el centro.',
        en: 'Random access is enough. Order does not matter if you start at the centre.',
      },
      {
        es: 'El tamaño tiene que ser potencia de dos, si no el medio no cae en un índice real.',
        en: 'The size must be a power of two, otherwise the middle does not land on a real index.',
      },
    ],
    explanation: {
      es: 'Otro fallo clásico es calcular el medio como la suma de los extremos, que puede desbordar un entero.',
      en: 'Another classic fault is computing the middle as the sum of the ends, which can overflow an integer.',
    },
  },
  {
    id: 'th-alg-02',
    topic: 'Algoritmos',
    prompt: {
      es: '¿En qué consiste la técnica de dos punteros sobre un arreglo ordenado?',
      en: 'What does the two pointer technique do on a sorted array?',
    },
    answer: {
      es: 'Un puntero empieza al inicio y otro al final. Según la suma sea grande o pequeña, mueves uno hacia el centro, en una pasada y sin memoria extra.',
      en: 'One pointer starts at the beginning and one at the end. Depending on whether the sum is too large or too small, you move one toward the centre, in one pass and with no extra memory.',
    },
    distractors: [
      {
        es: 'Solo sirve en listas enlazadas. En un arreglo hay que usar un conjunto.',
        en: 'It only works on linked lists. On an array you must use a set.',
      },
      {
        es: 'Los dos punteros salen del centro y el costo es log n.',
        en: 'Both pointers start at the centre and the cost is log n.',
      },
    ],
    explanation: {
      es: 'Sirve para pares que suman un objetivo. No es lo mismo que una ventana, donde el intervalo representa un tramo contiguo.',
      en: 'It is used for pairs that sum to a target. It is not the same as a window, where the interval is a contiguous slice.',
    },
  },
  {
    id: 'th-alg-03',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Cuándo aplica una ventana deslizante?',
      en: 'When does a sliding window apply?',
    },
    answer: {
      es: 'Cuando buscas un tramo contiguo y puedes ampliar o encoger un extremo sin volver a mirar el interior, como la subcadena más larga sin repetidos.',
      en: 'When you look for a contiguous slice and you can grow or shrink one end without looking at the inside again, like the longest substring without repeats.',
    },
    distractors: [
      {
        es: 'Cuando buscas cualquier subsecuencia, aunque los elementos no estén juntos.',
        en: 'When you look for any subsequence, even if the elements are not contiguous.',
      },
      {
        es: 'Solo si el arreglo está ordenado, igual que con dos punteros.',
        en: 'Only if the array is sorted, the same as with two pointers.',
      },
    ],
    explanation: {
      es: 'Sin contigüidad suele hacer falta programación dinámica. La ventana no exige que los datos estén ordenados.',
      en: 'Without contiguity you usually need dynamic programming. The window does not require the data to be sorted.',
    },
  },
  {
    id: 'th-alg-04',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Por qué, en un grafo sin pesos, BFS encuentra el camino más corto y DFS no?',
      en: 'In an unweighted graph, why does BFS find the shortest path and DFS does not?',
    },
    answer: {
      es: 'BFS avanza por niveles, así que la primera vez que llega es el menor número de aristas. DFS se hunde en una rama y puede volver con un camino más largo.',
      en: 'BFS advances level by level, so the first time it arrives is the smallest number of edges. DFS sinks into one branch and may come back with a longer path.',
    },
    distractors: [
      {
        es: 'DFS también lo encuentra si marcas visitado. BFS solo sirve en árboles.',
        en: 'DFS finds it too if you mark nodes visited. BFS only works on trees.',
      },
      {
        es: 'En un grafo sin pesos los dos dan el más corto. La diferencia es la memoria.',
        en: 'In an unweighted graph both give the shortest path. The difference is memory.',
      },
    ],
    explanation: {
      es: 'Sin pesos la distancia es el número de saltos. Si hay pesos positivos, la generalización habitual es Dijkstra.',
      en: 'Without weights the distance is the number of hops. If there are positive weights, the usual generalisation is Dijkstra.',
    },
  },
  {
    id: 'th-alg-05',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Por qué Dijkstra no admite pesos negativos?',
      en: 'Why does Dijkstra not allow negative weights?',
    },
    answer: {
      es: 'Porque al sacar un nodo da su distancia por definitiva. Un peso negativo podría abaratarla después.',
      en: 'Because when it takes a node out it treats the distance as final. A negative weight could make it cheaper later.',
    },
    distractors: [
      {
        es: 'Sí los admite si la cola de prioridad permite bajar la clave.',
        en: 'It does allow them if the priority queue can decrease the key.',
      },
      {
        es: 'Dijkstra y Bellman-Ford exigen pesos positivos. La diferencia es solo la velocidad.',
        en: 'Dijkstra and Bellman-Ford both require positive weights. The difference is only speed.',
      },
    ],
    explanation: {
      es: 'Bellman-Ford sí admite negativos y puede detectar un ciclo negativo, a cambio de ser más lento.',
      en: 'Bellman-Ford does allow negatives and can detect a negative cycle, in exchange for being slower.',
    },
  },
  {
    id: 'th-alg-06',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Qué diferencia hay entre memoizar y rellenar una tabla de abajo arriba?',
      en: 'What is the difference between memoising and filling a table bottom up?',
    },
    answer: {
      es: 'Memoizar es recursión con una caché de resultados ya calculados. La tabla se rellena en orden, sin pila de llamadas, y a veces cabe en unas pocas variables.',
      en: 'Memoising is recursion with a cache of results already computed. The table is filled in order, with no call stack, and sometimes it fits in a few variables.',
    },
    distractors: [
      {
        es: 'La memoización siempre es una clase más rápida porque no calcula estados que no se usan.',
        en: 'Memoisation is always one class faster because it does not compute unused states.',
      },
      {
        es: 'Solo cambia el estilo. La tabla es imperativa y por eso tiene otro costo temporal.',
        en: 'Only the style changes. The table is imperative and that is why it has a different time cost.',
      },
    ],
    explanation: {
      es: 'Las dos resuelven la misma recurrencia. Saltar estados que no se alcanzan es una ventaja real de la caché en algunos problemas, no una regla general.',
      en: 'Both solve the same recurrence. Skipping states you never reach is a real cache advantage on some problems, not a general rule.',
    },
  },
  {
    id: 'th-alg-07',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Cómo reconoces que un problema pide programación dinámica?',
      en: 'How do you recognise that a problem wants dynamic programming?',
    },
    answer: {
      es: 'La solución se arma con subproblemas más pequeños y la recursión ingenua repetiría el mismo trabajo. Entonces una caché o una tabla compensan.',
      en: 'The solution is built from smaller subproblems and naive recursion would repeat the same work. Then a cache or a table pays off.',
    },
    distractors: [
      {
        es: 'Si el espacio de búsqueda es exponencial, siempre se puede tabular en tiempo polinómico.',
        en: 'If the search space is exponential, it can always be tabulated in polynomial time.',
      },
      {
        es: 'Si hay decisiones locales, es programación dinámica y no cabe un voraz.',
        en: 'If there are local choices, it is dynamic programming and a greedy approach does not fit.',
      },
    ],
    explanation: {
      es: 'Si los subproblemas no se repiten, basta dividir y vencer, como en merge sort. No todo lo exponencial se vuelve polinómico.',
      en: 'If the subproblems do not repeat, divide and conquer is enough, as in merge sort. Not everything exponential becomes polynomial.',
    },
  },
  {
    id: 'th-alg-08',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Por qué un algoritmo voraz hay que justificarlo?',
      en: 'Why does a greedy algorithm need a justification?',
    },
    answer: {
      es: 'Porque elegir lo mejor en cada paso no garantiza el mejor resultado global. El cambio de monedas con piezas raras es el contraejemplo clásico.',
      en: 'Because picking the best option at each step does not guarantee the best overall result. Coin change with unusual coins is the classic counterexample.',
    },
    distractors: [
      {
        es: 'Si existe la moneda de 1, el voraz del cambio siempre es óptimo.',
        en: 'If the coin 1 exists, greedy change is always optimal.',
      },
      {
        es: 'Si el voraz falla, el problema no tiene solución polinómica.',
        en: 'If greedy fails, the problem has no polynomial solution.',
      },
    ],
    explanation: {
      es: 'Con monedas 1, 3 y 4, para llegar a 6 el voraz usa tres piezas y el óptimo usa dos. Ese caso se resuelve con programación dinámica.',
      en: 'With coins 1, 3 and 4, to make 6 greedy uses three pieces and the optimum uses two. That case is solved with dynamic programming.',
    },
  },
  {
    id: 'th-alg-09',
    topic: 'Algoritmos',
    prompt: {
      es: '¿En qué se diferencia el backtracking de probar todas las combinaciones?',
      en: 'How does backtracking differ from trying every combination?',
    },
    answer: {
      es: 'Construye la solución poco a poco y corta una rama en cuanto incumple una regla. La fuerza bruta genera el candidato completo y luego lo valida.',
      en: 'It builds the solution step by step and cuts a branch as soon as it breaks a rule. Brute force builds the full candidate and only then validates it.',
    },
    distractors: [
      {
        es: 'Es programación dinámica: al podar guarda estados y el peor caso pasa a ser polinómico.',
        en: 'It is dynamic programming: pruning stores states and the worst case becomes polynomial.',
      },
      {
        es: 'La poda solo cambia el orden de visita, no cuántas hojas se exploran.',
        en: 'Pruning only changes the visit order, not how many leaves are explored.',
      },
    ],
    explanation: {
      es: 'El peor caso puede seguir siendo exponencial. La ganancia es práctica, como en el Sudoku o en las n reinas.',
      en: 'The worst case can still be exponential. The gain is practical, as in Sudoku or the n queens problem.',
    },
  },
  {
    id: 'th-alg-10',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Por qué merge sort es n log n y no lineal?',
      en: 'Why is merge sort n log n and not linear?',
    },
    answer: {
      es: 'Parte en dos mitades, ordena cada una y luego mezcla en una pasada lineal. Hay log n niveles y cada nivel mira todos los elementos.',
      en: 'It splits into two halves, sorts each one and then merges in a linear pass. There are log n levels and each level looks at every element.',
    },
    distractors: [
      {
        es: 'Porque descarta la mitad en cada paso, igual que la búsqueda binaria, y por eso es lineal.',
        en: 'Because it discards half at each step, like binary search, and that is why it is linear.',
      },
      {
        es: 'Porque mezclar dos listas ordenadas es constante, así que el total es lineal.',
        en: 'Because merging two sorted lists is constant, so the total is linear.',
      },
    ],
    explanation: {
      es: 'Mezclar recorre los n elementos. No basta con una sola llamada recursiva: hay dos subproblemas del mismo tamaño.',
      en: 'Merging walks all n elements. One recursive call is not enough: there are two subproblems of the same size.',
    },
  },
  {
    id: 'th-alg-11',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Qué es un ordenamiento estable y cuándo importa?',
      en: 'What is a stable sort and when does it matter?',
    },
    answer: {
      es: 'Conserva el orden relativo de las claves iguales. Importa al ordenar por varias claves en pasadas sucesivas.',
      en: 'It keeps the relative order of equal keys. It matters when you sort by several keys in successive passes.',
    },
    distractors: [
      {
        es: 'Significa que el peor caso es n log n, por eso MergeSort es estable y QuickSort no.',
        en: 'It means the worst case is n log n, which is why MergeSort is stable and QuickSort is not.',
      },
      {
        es: 'Solo importa con primitivos, porque los objetos ya tienen identidad.',
        en: 'It only matters for primitives, because objects already have identity.',
      },
    ],
    explanation: {
      es: 'Ordenar por nombre y después de forma estable por departamento conserva el desempate. Estabilidad y costo son cosas distintas.',
      en: 'Sorting by name and then stably by department keeps the tie break. Stability and cost are different things.',
    },
  },
  {
    id: 'th-alg-12',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Cuándo un ordenamiento como counting sort o radix sort puede ser lineal?',
      en: 'When can a sort such as counting sort or radix sort be linear?',
    },
    answer: {
      es: 'Cuando las claves son enteros o dígitos en un rango razonable. No sirven para objetos que solo se comparan.',
      en: 'When the keys are integers or digits in a reasonable range. They do not work for objects that can only be compared.',
    },
    distractors: [
      {
        es: 'Siempre, para cualquier tipo, incluidos textos de longitud libre.',
        en: 'Always, for any type, including text of unbounded length.',
      },
      {
        es: 'Con cualquier Comparable, hasheando el resultado de compareTo.',
        en: 'With any Comparable, by hashing the result of compareTo.',
      },
    ],
    explanation: {
      es: 'Si el rango es enorme, el arreglo de conteo no cabe. Por comparación no se baja de n log n en el peor caso.',
      en: 'If the range is huge, the count array does not fit. With comparisons you do not go below n log n in the worst case.',
    },
  },
  {
    id: 'th-alg-13',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Por qué construir un heap de un arreglo es más barato que insertar n veces?',
      en: 'Why is building a heap from an array cheaper than inserting n times?',
    },
    answer: {
      es: 'Porque la mayoría de los nodos están cerca de las hojas y bajan poco. El total es lineal, no n log n.',
      en: 'Because most nodes sit near the leaves and drop very little. The total is linear, not n log n.',
    },
    distractors: [
      {
        es: 'Las dos formas son n log n, porque cada nodo baja log n.',
        en: 'Both ways are n log n, because every node drops log n.',
      },
      {
        es: 'Solo es lineal si el heap usa punteros. En un arreglo las inserciones ya son lineales.',
        en: 'It is linear only if the heap uses pointers. In an array the insertions are already linear.',
      },
    ],
    explanation: {
      es: 'n inserciones en un heap vacío sí suman n log n. El constructor que recibe la colección puede hacer el heapify lineal.',
      en: 'n insertions into an empty heap do add up to n log n. The constructor that receives the collection can do the linear heapify.',
    },
  },
  {
    id: 'th-alg-14',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Cómo encuentra Quickselect el k-ésimo elemento sin ordenar todo?',
      en: 'How does Quickselect find the k-th element without sorting everything?',
    },
    answer: {
      es: 'Parte como QuickSort, pero solo sigue por el lado donde está el k-ésimo. En promedio es lineal y el peor caso es cuadrático.',
      en: 'It partitions like QuickSort, but it only continues on the side that holds the k-th. On average it is linear and the worst case is quadratic.',
    },
    distractors: [
      {
        es: 'Es lineal en el peor caso porque siempre descarta la mitad, como la búsqueda binaria.',
        en: 'It is linear in the worst case because it always discards half, like binary search.',
      },
      {
        es: 'No se puede: hay que ordenar el arreglo entero.',
        en: 'You cannot: the whole array must be sorted.',
      },
    ],
    explanation: {
      es: 'Un pivote aleatorio evita el peor caso en la práctica. Ordenar entero es correcto, pero de más si solo quieres un orden estadístico.',
      en: 'A random pivot avoids the worst case in practice. A full sort is correct, but it is extra work if you only want one order statistic.',
    },
  },
  {
    id: 'th-alg-15',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Cómo detectas un ciclo en una lista enlazada con memoria constante?',
      en: 'How do you detect a cycle in a linked list with constant memory?',
    },
    answer: {
      es: 'Con dos punteros: uno avanza de uno en uno y el otro de dos en dos. Si hay ciclo, se encuentran.',
      en: 'With two pointers: one moves one step and the other moves two. If there is a cycle, they meet.',
    },
    distractors: [
      {
        es: 'Hace falta un conjunto de nodos visitados. Los dos punteros solo sirven en arreglos.',
        en: 'You need a set of visited nodes. Two pointers only work on arrays.',
      },
      {
        es: 'El nodo donde se encuentran es siempre el inicio del ciclo.',
        en: 'The node where they meet is always the start of the cycle.',
      },
    ],
    explanation: {
      es: 'El conjunto también funciona, pero usa memoria lineal. Encontrarse no significa estar en la entrada del ciclo: eso pide una segunda pasada.',
      en: 'The set also works, but it uses linear memory. Meeting does not mean you are at the cycle entrance: that needs a second pass.',
    },
  },
  {
    id: 'th-alg-16',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Cómo eliges k elementos al azar de un flujo cuyo tamaño no conoces?',
      en: 'How do you pick k random elements from a stream whose size you do not know?',
    },
    answer: {
      es: 'Mantienes un reservorio de k. Cada elemento nuevo entra con una probabilidad que baja según cuántos has visto, reemplazando a uno al azar.',
      en: 'You keep a reservoir of k. Each new item enters with a probability that drops as you see more items, replacing one at random.',
    },
    distractors: [
      {
        es: 'Te quedas con los primeros k y luego te saltas el resto con probabilidad fija.',
        en: 'You keep the first k and then skip the rest with a fixed probability.',
      },
      {
        es: 'Es imposible ser uniforme si no conoces el tamaño de antemano.',
        en: 'A uniform sample is impossible if you do not know the size in advance.',
      },
    ],
    explanation: {
      es: 'Al final cada elemento tiene la misma probabilidad de estar en la muestra, y basta una pasada.',
      en: 'In the end every element has the same chance of being in the sample, and one pass is enough.',
    },
  },
  {
    id: 'th-alg-17',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Por qué Fisher-Yates baraja bien y un intercambio aleatorio ingenuo no?',
      en: 'Why does Fisher-Yates shuffle fairly and a naive random swap does not?',
    },
    answer: {
      es: 'Fisher-Yates intercambia cada posición solo con un índice entre cero y ella. Así cada permutación sale con la misma probabilidad.',
      en: 'Fisher-Yates swaps each position only with an index between zero and itself. That way every permutation comes out with the same probability.',
    },
    distractors: [
      {
        es: 'Los dos son uniformes. Fisher-Yates solo ahorra trabajo.',
        en: 'Both are uniform. Fisher-Yates only saves work.',
      },
      {
        es: 'Ordenar con un comparador aleatorio es más simple y también es uniforme.',
        en: 'Sorting with a random comparator is simpler and also uniform.',
      },
    ],
    explanation: {
      es: 'Intercambiar cada posición con cualquier índice sesga algunas permutaciones. Un comparador aleatorio además puede romper el orden y fallar el sort.',
      en: 'Swapping each position with any index biases some permutations. A random comparator can also break ordering and make the sort fail.',
    },
  },
  {
    id: 'th-alg-18',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Qué mejora KMP frente a buscar un patrón comparando desde cada posición?',
      en: 'What does KMP improve compared with searching a pattern by comparing from every position?',
    },
    answer: {
      es: 'Precalcula cuánto puede saltar el patrón tras un fallo, y no vuelve atrás en el texto. El costo queda lineal en el texto más el patrón.',
      en: 'It precomputes how far the pattern can jump after a mismatch, and it does not rewind the text. The cost stays linear in the text plus the pattern.',
    },
    distractors: [
      {
        es: 'Hashea el patrón, así que el peor caso sigue siendo el producto de las longitudes.',
        en: 'It hashes the pattern, so the worst case is still the product of the lengths.',
      },
      {
        es: 'Tras preprocesar el patrón, la búsqueda ya no depende del tamaño del texto.',
        en: 'After preprocessing the pattern, the search no longer depends on the text size.',
      },
    ],
    explanation: {
      es: 'La búsqueda ingenua puede ser el producto de las dos longitudes. El hash rodante es otra técnica, con otro peor caso.',
      en: 'Naive search can be the product of the two lengths. A rolling hash is a different technique, with a different worst case.',
    },
  },
  {
    id: 'th-alg-19',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Qué riesgos tiene una caché de memoización con claves mutables o sin límite?',
      en: 'What are the risks of a memoisation cache with mutable keys or with no limit?',
    },
    answer: {
      es: 'Si la clave cambia, el mapa deja de encontrarla. Si no hay tope, la caché crece hasta agotar la memoria.',
      en: 'If the key changes, the map can no longer find it. If there is no cap, the cache grows until memory runs out.',
    },
    distractors: [
      {
        es: 'Las claves mutables son seguras si sobrescribes hashCode, porque el mapa se reubica solo.',
        en: 'Mutable keys are safe if you override hashCode, because the map relocates itself.',
      },
      {
        es: 'Una caché sin límite no importa, porque el recolector libera lo que ya no se consulta.',
        en: 'An unbounded cache does not matter, because the collector frees what is no longer queried.',
      },
    ],
    explanation: {
      es: 'Usa claves inmutables y una política de expulsión, por ejemplo la menos usada recientemente, cuando el número de estados no está acotado.',
      en: 'Use immutable keys and an eviction policy, for example least recently used, when the number of states is not bounded.',
    },
  },
  {
    id: 'th-alg-20',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Por qué pasar una recursión profunda a un bucle con pila explícita evita el desbordamiento?',
      en: 'Why does turning a deep recursion into a loop with an explicit stack avoid the overflow?',
    },
    answer: {
      es: 'Porque la pila de llamadas de la JVM es pequeña. Una pila en el heap puede crecer mucho más antes de fallar.',
      en: 'Because the JVM call stack is small. A stack on the heap can grow much further before it fails.',
    },
    distractors: [
      {
        es: 'Porque la iteración siempre baja la complejidad y convierte lo exponencial en lineal.',
        en: 'Because iteration always lowers the complexity and turns exponential work into linear work.',
      },
      {
        es: 'Porque Java optimiza la recursión de cola y entonces no hace falta convertirla.',
        en: 'Because Java optimises tail recursion and then the conversion is unnecessary.',
      },
    ],
    explanation: {
      es: 'El recorrido es el mismo, solo cambia dónde guardas el estado pendiente. La JVM no elimina las llamadas de cola.',
      en: 'The walk is the same, only the place where you store pending state changes. The JVM does not eliminate tail calls.',
    },
  },
];
