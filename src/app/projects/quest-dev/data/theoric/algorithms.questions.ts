import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_ALGORITHMS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-alg-01',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Cuál es la precondición de la búsqueda binaria y cuál es el error típico al actualizar los límites?',
      en: 'What is the precondition of binary search and what is the typical error when updating the bounds?',
    },
    answer: {
      es: 'El arreglo debe estar ordenado y, en un intervalo cerrado, hay que descartar mid con lo = mid + 1 o hi = mid - 1; si se asigna hi = mid, el bucle puede no terminar.',
      en: 'The array must be sorted and, in a closed interval, mid must be discarded with lo = mid + 1 or hi = mid - 1; if you assign hi = mid, the loop may never end.',
    },
    distractors: [
      {
        es: 'Basta el acceso aleatorio; el orden no es necesario si se parte del centro, y el error típico de límites es inicializar hi en n, lo que siempre lanza una excepción de rango.',
        en: 'Random access is enough; order is not required if you start at the centre, and the typical bounds error is initialising hi to n, which always throws a range exception.',
      },
      {
        es: 'La precondición es que n sea potencia de dos para que mid caiga en un índice real, y usar lo <= hi compara dos veces el mismo elemento y degrada el costo a O(n).',
        en: 'The precondition is that n is a power of two so mid lands on a real index, and using lo <= hi compares the same element twice and degrades the cost to O(n).',
      },
    ],
    explanation: {
      es: 'La precondición real es la monotonicidad: el arreglo debe estar ordenado. El bug clásico de límites es no achicar el intervalo: con lo = 0, hi = 1 e hi = mid el conjunto {0, 1} no cambia y el bucle no termina. Un segundo fallo famoso, documentado por Joshua Bloch, es mid = (lo + hi) / 2, que desborda un int; Arrays.binarySearch en Java usa (lo + hi) >>> 1. Mezclar la convención cerrada [lo, hi] con la semiabierta [lo, hi) es la otra fuente habitual de off-by-one.',
      en: 'The real precondition is monotonicity: the array must be sorted. The classic bounds bug is failing to shrink the interval: with lo = 0, hi = 1 and hi = mid the set {0, 1} does not change and the loop never ends. A second famous fault, documented by Joshua Bloch, is mid = (lo + hi) / 2, which overflows an int; Arrays.binarySearch in Java uses (lo + hi) >>> 1. Mixing the closed [lo, hi] convention with the half-open [lo, hi) one is the other usual source of off-by-one errors.',
    },
  },
  {
    id: 'th-alg-02',
    topic: 'Algoritmos',
    prompt: {
      es: '¿En qué consiste la técnica de dos punteros sobre un arreglo ordenado?',
      en: 'What does the two-pointer technique consist of on a sorted array?',
    },
    answer: {
      es: 'Un puntero al inicio y otro al final se mueven hacia adentro según compare el par con el objetivo, resolviendo Two Sum u otros pares en O(n) tiempo extra y O(1) memoria adicional.',
      en: 'One pointer at the start and one at the end move inward according to how the pair compares with the target, solving Two Sum or other pairs in O(n) extra time and O(1) extra memory.',
    },
    distractors: [
      {
        es: 'Los dos punteros solo aplican a listas enlazadas, como la tortuga y la liebre; en un arreglo hay que usar un HashSet para no perder el orden relativo de los valores.',
        en: 'Two pointers only apply to linked lists, such as tortoise and hare; on an array you have to use a HashSet so you do not lose the relative order of the values.',
      },
      {
        es: 'Con un arreglo ordenado ambos punteros parten del centro y se alejan hacia los extremos, lo que garantiza O(log n) comparaciones igual que la búsqueda binaria.',
        en: 'On a sorted array both pointers start at the centre and move toward the ends, which guarantees O(log n) comparisons just like binary search.',
      },
    ],
    explanation: {
      es: 'La monotonicidad permite decidir qué puntero mover sin volver atrás: si a[lo] + a[hi] es demasiado grande, hi disminuye. Two Sum ordenado queda en O(n) tras el sort y O(1) espacial, frente a la variante con tabla hash que usa O(n) memoria. No es el algoritmo de Floyd ni una búsqueda binaria, y tampoco es una ventana deslizante: aquí los extremos se acercan y el intervalo no representa un subarreglo candidato que se valida entero.',
      en: 'Monotonicity lets you decide which pointer to move without going back: if a[lo] + a[hi] is too large, hi decreases. Sorted Two Sum is O(n) after the sort and O(1) in space, versus the hash-table variant that uses O(n) memory. It is not the Floyd algorithm nor a binary search, and it is also not a sliding window: here the ends move toward each other and the interval does not represent a candidate subarray that is validated as a whole.',
    },
  },
  {
    id: 'th-alg-03',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Cuándo aplica la técnica de ventana deslizante?',
      en: 'When does the sliding-window technique apply?',
    },
    answer: {
      es: 'Aplica a subarreglos o subcadenas contiguos con un invariante monotónico: ampliar o encoger un extremo restaura la validez sin reexplorar el interior, como en la subcadena más larga sin repetidos.',
      en: 'It applies to contiguous subarrays or substrings with a monotonic invariant: expanding or shrinking one end restores validity without re-exploring the interior, as in the longest substring without repeats.',
    },
    distractors: [
      {
        es: 'Aplica a cualquier subsecuencia, aunque no sea contigua, siempre que se busque un óptimo sobre combinaciones de elementos tomados en cualquier orden.',
        en: 'It applies to any subsequence, even a non-contiguous one, whenever you look for an optimum over combinations of elements taken in any order.',
      },
      {
        es: 'Aplica solo cuando el arreglo está ordenado, porque sin orden no se puede saber qué extremo mover, exactamente igual que con la técnica de dos punteros.',
        en: 'It applies only when the array is sorted, because without order you cannot tell which end to move, exactly as with the two-pointer technique.',
      },
    ],
    explanation: {
      es: 'La ventana exige contigüidad y monotonicidad del predicado: si [i, j] viola el tope de caracteres distintos, cualquier extensión también, así que se incrementa i. Longest Substring Without Repeating Characters queda en O(n) con un mapa de última posición. No sirve para subsecuencias (ahí hace falta programación dinámica, como LCS) y no exige que el arreglo esté ordenado: el ejemplo clásico trabaja sobre un string arbitrario.',
      en: 'The window requires contiguity and a monotonic predicate: if [i, j] violates the cap on distinct characters, any extension does too, so i is incremented. Longest Substring Without Repeating Characters is O(n) with a last-seen-position map. It does not work for subsequences (those need dynamic programming, such as LCS) and it does not require a sorted array: the classic example runs on an arbitrary string.',
    },
  },
  {
    id: 'th-alg-04',
    topic: 'Algoritmos',
    prompt: {
      es: 'En un grafo sin pesos, ¿por qué BFS encuentra el camino más corto y DFS no lo garantiza?',
      en: 'In an unweighted graph, why does BFS find the shortest path while DFS does not guarantee it?',
    },
    answer: {
      es: 'BFS recorre por niveles y la primera vez que alcanza el destino es un camino con el mínimo número de aristas. DFS puede devolver un camino más largo porque se hunde en una rama antes de explorar las vecinas.',
      en: 'BFS walks level by level and the first time it reaches the target is a path with the minimum number of edges. DFS may return a longer path because it sinks down one branch before exploring the neighbours.',
    },
    distractors: [
      {
        es: 'DFS encuentra el más corto si se marca visitado, porque evita ciclos; BFS solo sirve cuando el grafo es un árbol y no hay más de un camino posible.',
        en: 'DFS finds the shortest path if nodes are marked visited, because that avoids cycles; BFS only works when the graph is a tree and there is no more than one possible path.',
      },
      {
        es: 'En un grafo sin pesos ambos dan el más corto; la diferencia es que DFS usa O(V) memoria en la pila y BFS usa O(1) porque la cola cabe en un entero.',
        en: 'In an unweighted graph both yield the shortest path; the difference is that DFS uses O(V) stack memory and BFS uses O(1) because the queue fits in an integer.',
      },
    ],
    explanation: {
      es: 'Sin pesos la distancia es el número de aristas, y BFS es óptimo en O(V + E). Dijkstra generaliza esa idea cuando hay pesos no negativos. DFS no da garantías de longitud: para extraer el más corto habría que explorar todo el espacio y quedarse con el mínimo. En grafos densos la cola de BFS puede contener O(V) nodos, no O(1).',
      en: 'Without weights the distance is the number of edges, and BFS is optimal in O(V + E). Dijkstra generalises that idea when weights are non-negative. DFS gives no length guarantees: extracting the shortest path would require exploring the whole space and keeping the minimum. On dense graphs the BFS queue may hold O(V) nodes, not O(1).',
    },
  },
  {
    id: 'th-alg-05',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Por qué Dijkstra exige pesos no negativos y Bellman-Ford no?',
      en: 'Why does Dijkstra require non-negative weights while Bellman-Ford does not?',
    },
    answer: {
      es: 'Dijkstra, al extraer un nodo de la cola de prioridad, considera definitiva su distancia, lo que falla con negativos. Bellman-Ford relaja todas las aristas |V| - 1 veces, admite pesos negativos y detecta ciclos negativos con una relajación extra.',
      en: 'Dijkstra, when extracting a node from the priority queue, treats its distance as final, which fails with negatives. Bellman-Ford relaxes every edge |V| - 1 times, allows negative weights and detects negative cycles with one extra relaxation.',
    },
    distractors: [
      {
        es: 'Dijkstra admite negativos si se usa decrease-key; Bellman-Ford es solo para DAGs, donde un orden topológico ya da el más corto en O(V + E).',
        en: 'Dijkstra allows negatives if decrease-key is used; Bellman-Ford is only for DAGs, where a topological order already yields the shortest path in O(V + E).',
      },
      {
        es: 'Ambos exigen pesos no negativos; la diferencia es que Dijkstra es O(V E) y Bellman-Ford es O(E log V) cuando se implementa con un heap binario.',
        en: 'Both require non-negative weights; the difference is that Dijkstra is O(V E) and Bellman-Ford is O(E log V) when implemented with a binary heap.',
      },
    ],
    explanation: {
      es: 'Un peso negativo invalida el invariante voraz de Dijkstra: un camino con más aristas podría abaratar un nodo ya extraído. Bellman-Ford es O(V E). El shortest path en DAG sí usa orden topológico en O(V + E) y acepta negativos, pero precisamente porque no hay ciclos. Con heap de Fibonacci, Dijkstra baja a O(E + V log V); con heap binario queda O((V + E) log V).',
      en: 'A negative weight breaks the greedy invariant of Dijkstra: a path with more edges could cheapen a node already extracted. Bellman-Ford is O(V E). DAG shortest path does use topological order in O(V + E) and accepts negatives, but precisely because there are no cycles. With a Fibonacci heap, Dijkstra drops to O(E + V log V); with a binary heap it is O((V + E) log V).',
    },
  },
  {
    id: 'th-alg-06',
    topic: 'Algoritmos',
    prompt: {
      es: 'En programación dinámica, ¿en qué se diferencian la memoización y la tabulación?',
      en: 'In dynamic programming, how do memoisation and tabulation differ?',
    },
    answer: {
      es: 'La memoización es descendente: la recursión consulta una cache de subproblemas ya resueltos. La tabulación es ascendente: se llena una tabla en orden de dependencias, suele evitar la pila y permite comprimir el espacio a unas pocas filas.',
      en: 'Memoisation is top-down: recursion looks up a cache of already solved subproblems. Tabulation is bottom-up: a table is filled in dependency order, it usually avoids the stack and it allows compressing space to a few rows.',
    },
    distractors: [
      {
        es: 'La memoización es siempre una clase asintótica más rápida porque no calcula estados inalcanzables, así que la tabulación quedó obsoleta salvo como ejercicio de entrevista.',
        en: 'Memoisation is always an asymptotic class faster because it does not compute unreachable states, so tabulation became obsolete except as an interview exercise.',
      },
      {
        es: 'Se diferencian solo en el paradigma: memoización es programación funcional y tabulación es iteración imperativa, y por eso tienen distinta complejidad temporal.',
        en: 'They differ only in paradigm: memoisation is functional programming and tabulation is imperative iteration, and that is why they have different time complexity.',
      },
    ],
    explanation: {
      es: 'Ambas resuelven la misma recurrencia y suelen compartir complejidad temporal Theta del número de estados por el costo de transicionar. Fibonacci tabulado es O(n) tiempo y se comprime a O(1) espacio con dos variables; el top-down memoizado deja O(n) pila y O(n) cache. Saltar estados no alcanzados es una ventaja real de la memoización en algunos grafos de estados, no un cambio universal de clase asintótica.',
      en: 'Both solve the same recurrence and usually share a time complexity of Theta of the number of states times the transition cost. Tabulated Fibonacci is O(n) time and compresses to O(1) space with two variables; top-down memoisation leaves an O(n) stack and an O(n) cache. Skipping unreachable states is a real memoisation advantage on some state graphs, not a universal change of asymptotic class.',
    },
  },
  {
    id: 'th-alg-07',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Cómo se identifica que un problema es de programación dinámica?',
      en: 'How do you identify that a problem is a dynamic-programming one?',
    },
    answer: {
      es: 'Hay subestructura óptima y subproblemas solapados: la solución se expresa como recurrencia sobre estados más pequeños y la recursión ingenua repetiría trabajo, lo que justifica una cache o una tabla.',
      en: 'There is optimal substructure and overlapping subproblems: the solution is expressed as a recurrence over smaller states and naive recursion would repeat work, which justifies a cache or a table.',
    },
    distractors: [
      {
        es: 'Si el espacio de búsqueda es exponencial, es programación dinámica, porque toda búsqueda exponencial se puede tabular en tiempo polinómico.',
        en: 'If the search space is exponential, it is dynamic programming, because every exponential search can be tabulated in polynomial time.',
      },
      {
        es: 'Si hay que tomar decisiones locales, es programación dinámica; el voraz y el backtracking no aplican cuando el problema admite decisiones sucesivas.',
        en: 'If local decisions must be taken, it is dynamic programming; greedy and backtracking do not apply when the problem allows successive choices.',
      },
    ],
    explanation: {
      es: 'La subestructura óptima también aparece en los algoritmos voraces; lo que distingue a la programación dinámica es el solapamiento: el mismo estado se pide muchas veces. Knapsack 0/1, LCS y el cambio de monedas con número mínimo de piezas son ejemplos clásicos. Si no hay solapamiento, basta divide y vencerás, como merge sort. Que la búsqueda sea exponencial no implica una tabla polinómica: el TSP con DP sobre subconjuntos sigue en O(n² 2^n).',
      en: 'Optimal substructure also appears in greedy algorithms; what distinguishes dynamic programming is overlap: the same state is requested many times. 0/1 knapsack, LCS and coin change with a minimum number of pieces are classic examples. If there is no overlap, divide and conquer is enough, as with merge sort. An exponential search space does not imply a polynomial table: TSP with subset DP is still O(n² 2^n).',
    },
  },
  {
    id: 'th-alg-08',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Por qué un algoritmo voraz necesita demostración, y qué contraejemplo clásico ofrece el cambio de monedas?',
      en: 'Why does a greedy algorithm need a proof, and what classic counterexample does coin change provide?',
    },
    answer: {
      es: 'El voraz elige el óptimo local en cada paso, pero eso no implica el óptimo global: hay que demostrarlo. Contraejemplo: monedas 1, 3 y 4 para cambiar 6; el voraz da 4 + 1 + 1 (3 piezas) y el óptimo es 3 + 3 (2 piezas).',
      en: 'Greedy picks the local optimum at each step, but that does not imply the global optimum: it must be proved. Counterexample: coins 1, 3 and 4 to make 6; greedy gives 4 + 1 + 1 (3 pieces) and the optimum is 3 + 3 (2 pieces).',
    },
    distractors: [
      {
        es: 'Si el conjunto incluye la moneda 1, el voraz siempre es óptimo para el cambio, porque cualquier resto se puede completar sin volver a una pieza mayor.',
        en: 'If the set includes the coin 1, greedy is always optimal for change, because any remainder can be completed without going back to a larger piece.',
      },
      {
        es: 'Si el voraz falla en un contraejemplo, el problema no tiene solución polinómica y la única alternativa correcta es enumerar todas las combinaciones.',
        en: 'If greedy fails on a counterexample, the problem has no polynomial solution and the only correct alternative is to enumerate every combination.',
      },
    ],
    explanation: {
      es: 'El sistema canónico de monedas (1, 5, 10, 25) sí admite voraz, y eso se demuestra; no vale para cualquier conjunto. El cambio con mínimo número de piezas se resuelve en O(cantidad * tipos) con tabulación. Un contraejemplo no vuelve el problema NP: sigue en P vía programación dinámica. Huffman y Kruskal son voraces cuya optimalidad sí está demostrada.',
      en: 'The canonical coin system (1, 5, 10, 25) does admit a greedy choice, and that is proved; it does not hold for every set. Change with a minimum number of pieces is solved in O(amount * types) by tabulation. A counterexample does not make the problem NP: it stays in P via dynamic programming. Huffman and Kruskal are greedy algorithms whose optimality is actually proved.',
    },
  },
  {
    id: 'th-alg-09',
    topic: 'Algoritmos',
    prompt: {
      es: '¿En qué se diferencia el backtracking de la fuerza bruta, y qué papel juega la poda?',
      en: 'How does backtracking differ from brute force, and what role does pruning play?',
    },
    answer: {
      es: 'El backtracking construye soluciones parciales y poda una rama en cuanto viola una restricción, evitando generar el resto de esa rama. La fuerza bruta enumera candidatos completos y recién entonces los valida.',
      en: 'Backtracking builds partial solutions and prunes a branch as soon as it violates a constraint, avoiding generating the rest of that branch. Brute force enumerates complete candidates and only then validates them.',
    },
    distractors: [
      {
        es: 'El backtracking es programación dinámica con memoización: al podar se guardan estados y la complejidad peor baja siempre de exponencial a polinómica.',
        en: 'Backtracking is dynamic programming with memoisation: pruning stores states and the worst-case complexity always drops from exponential to polynomial.',
      },
      {
        es: 'Poda y fuerza bruta son equivalentes en el árbol de búsqueda; la poda solo cambia el orden de visita, no la cantidad de hojas que se llegan a explorar.',
        en: 'Pruning and brute force are equivalent on the search tree; pruning only changes the visit order, not the number of leaves that end up being explored.',
      },
    ],
    explanation: {
      es: 'N-queens y Sudoku ilustran la poda: si dos reinas se atacan en las primeras filas, no se generan las (n - k)! hojas de esa rama. El peor caso puede seguir siendo exponencial; la ganancia es práctica. La programación dinámica reutiliza subproblemas, mientras que el backtracking típico no memoiza, aunque se puede combinar, como en subset sum con cache.',
      en: 'N-queens and Sudoku illustrate pruning: if two queens attack on the first rows, the (n - k)! leaves of that branch are never generated. The worst case can still be exponential; the gain is practical. Dynamic programming reuses subproblems, whereas typical backtracking does not memorise, although the two can be combined, as in subset sum with a cache.',
    },
  },
  {
    id: 'th-alg-10',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Cómo se relaciona divide y vencerás con la recurrencia de merge sort?',
      en: 'How does divide and conquer relate to the merge-sort recurrence?',
    },
    answer: {
      es: 'Merge sort divide en dos mitades, ordena cada una y combina en Theta(n). La recurrencia T(n) = 2T(n/2) + Theta(n) cae en el caso 2 del teorema maestro y se resuelve en Theta(n log n).',
      en: 'Merge sort splits into two halves, sorts each one and combines in Theta(n). The recurrence T(n) = 2T(n/2) + Theta(n) falls into case 2 of the master theorem and solves to Theta(n log n).',
    },
    distractors: [
      {
        es: 'La recurrencia es T(n) = T(n/2) + Theta(n), igual que un barrido que descarta la mitad, y por eso merge sort es Theta(n) como la búsqueda binaria linealizada.',
        en: 'The recurrence is T(n) = T(n/2) + Theta(n), like a scan that discards half, and that is why merge sort is Theta(n) like a linearised binary search.',
      },
      {
        es: 'La recurrencia es T(n) = 2T(n/2) + Theta(1) porque el merge es constante al usar listas enlazadas, y el total queda en Theta(n).',
        en: 'The recurrence is T(n) = 2T(n/2) + Theta(1) because the merge is constant when using linked lists, and the total is Theta(n).',
      },
    ],
    explanation: {
      es: 'En el teorema maestro, si T(n) = a T(n/b) + f(n) y f(n) = Theta(n^{log_b a}), entonces T(n) = Theta(n^{log_b a} log n). Aquí a = 2, b = 2, log_b a = 1 y f(n) = Theta(n), luego Theta(n log n). T(n) = T(n/2) + Theta(n) sería Theta(n). El merge de dos mitades ordenadas recorre n elementos: sigue siendo Theta(n) aunque se usen listas enlazadas.',
      en: 'In the master theorem, if T(n) = a T(n/b) + f(n) and f(n) = Theta(n^{log_b a}), then T(n) = Theta(n^{log_b a} log n). Here a = 2, b = 2, log_b a = 1 and f(n) = Theta(n), so Theta(n log n). T(n) = T(n/2) + Theta(n) would be Theta(n). Merging two sorted halves walks n elements: it remains Theta(n) even with linked lists.',
    },
  },
  {
    id: 'th-alg-11',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Qué es la estabilidad de un ordenamiento y cuándo importa de verdad?',
      en: 'What is sort stability and when does it actually matter?',
    },
    answer: {
      es: 'Un ordenamiento estable conserva el orden relativo de las claves iguales. Importa de verdad al ordenar por varias claves en pasadas sucesivas, por ejemplo apellido y luego de forma estable el departamento, o en cada pasada de radix sort.',
      en: 'A stable sort keeps the relative order of equal keys. It actually matters when sorting by several keys in successive passes, for example last name and then stably by department, or in each pass of radix sort.',
    },
    distractors: [
      {
        es: 'La estabilidad significa que el algoritmo es Theta(n log n) en el peor caso, de modo que QuickSort no es estable y MergeSort sí lo es precisamente por su complejidad.',
        en: 'Stability means the algorithm is Theta(n log n) in the worst case, so QuickSort is not stable and MergeSort is stable precisely because of its complexity.',
      },
      {
        es: 'La estabilidad solo importa con tipos primitivos, porque los objetos ya tienen identidad y el recolector preserva su orden de inserción en memoria.',
        en: 'Stability only matters with primitive types, because objects already have identity and the collector preserves their insertion order in memory.',
      },
    ],
    explanation: {
      es: 'TimSort, usado por Arrays.sort sobre objetos en Java, es estable; el dual-pivot QuickSort de primitivos no lo es, y no hace falta porque un int no lleva datos satélite. Ordenar empleados por nombre y después de forma estable por salario conserva el desempate. Radix sort LSD exige estabilidad en cada dígito. Complejidad y estabilidad son ejes independientes: heap sort es O(n log n) e inestable.',
      en: 'TimSort, used by Arrays.sort on objects in Java, is stable; dual-pivot QuickSort for primitives is not, and it does not need to be because an int carries no satellite data. Sorting employees by name and then stably by salary keeps the tie-break. LSD radix sort requires stability on each digit. Complexity and stability are independent axes: heap sort is O(n log n) and unstable.',
    },
  },
  {
    id: 'th-alg-12',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Qué permiten los ordenamientos sin comparación como counting sort o radix sort, y cuál es su límite?',
      en: 'What do non-comparison sorts such as counting sort or radix sort allow, and what is their limit?',
    },
    answer: {
      es: 'No comparan claves y corren en O(n + k) o O(d(n + b)), pero exigen claves enteras o dígitos en un rango k o base b razonable. No aplican a objetos arbitrarios que solo exponen un comparador.',
      en: 'They do not compare keys and run in O(n + k) or O(d(n + b)), but they require integer keys or digits in a reasonable range k or base b. They do not apply to arbitrary objects that only expose a comparator.',
    },
    distractors: [
      {
        es: 'Superan a todo ordenamiento por comparación porque son O(n) para cualquier tipo de dato, incluidos strings de longitud variable sin cota.',
        en: 'They beat every comparison sort because they are O(n) for any data type, including variable-length strings with no bound.',
      },
      {
        es: 'Radix sort funciona con cualquier Comparable: se hashea el resultado de compareTo a un dígito y se cubetea en O(n) pasadas independientes del rango.',
        en: 'Radix sort works with any Comparable: the compareTo result is hashed to a digit and bucketed in O(n) passes independent of the range.',
      },
    ],
    explanation: {
      es: 'La cota inferior Omega(n log n) vale para ordenamientos basados en comparaciones. Counting sort usa O(k) memoria; si k es 2^31 el arreglo de conteo es inviable. Radix sort LSD sobre enteros de 32 bits con base 256 hace 4 pasadas estables. Strings sin longitud acotada vuelven d proporcional a la longitud total, no a una constante, y el supuesto O(n) se rompe.',
      en: 'The Omega(n log n) lower bound holds for comparison-based sorts. Counting sort uses O(k) memory; if k is 2^31 the count array is unusable. LSD radix sort on 32-bit integers with base 256 does 4 stable passes. Unbounded-length strings make d proportional to total length, not a constant, and the supposed O(n) breaks.',
    },
  },
  {
    id: 'th-alg-13',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Por qué construir un heap en O(n) es mejor que hacer n inserciones en O(n log n)?',
      en: 'Why is building a heap in O(n) better than n insertions in O(n log n)?',
    },
    answer: {
      es: 'El heapify de Floyd hace sift-down desde los últimos nodos internos y suma O(n), porque la mayoría de los nodos están cerca de las hojas y bajan poco. n inserciones en un heap vacío suman O(log 1 + ... + log n) = O(n log n).',
      en: 'Floyd heapify sift-downs from the last internal nodes and sums to O(n), because most nodes sit near the leaves and drop little. n insertions into an empty heap sum to O(log 1 + ... + log n) = O(n log n).',
    },
    distractors: [
      {
        es: 'Ambas estrategias son O(n log n) porque cada sift-down cuesta O(log n) y hay Theta(n) nodos que bajar, así que el heapify lineal es un mito de análisis amortizado.',
        en: 'Both strategies are O(n log n) because every sift-down costs O(log n) and there are Theta(n) nodes to drop, so linear heapify is a myth of amortised analysis.',
      },
      {
        es: 'Construir en O(n) solo vale si el heap es un árbol con punteros; en el arreglo implícito de PriorityQueue las n inserciones ya son O(n) por la localidad de caché.',
        en: 'Building in O(n) only holds if the heap is a pointer tree; in the implicit array of PriorityQueue the n insertions are already O(n) thanks to cache locality.',
      },
    ],
    explanation: {
      es: 'En un heap binario hay n/2 hojas (sift 0), n/4 nodos a altura 1 y n/8 a altura 2: la suma n * Σ h/2^{h+1} es O(n). PriorityQueue en Java ofrece heapify O(n) en el constructor que recibe una Collection, frente a n llamadas a offer que sí son O(n log n). El arreglo implícito no cambia esa cota; la localidad ayuda a las constantes, no al grado del polinomio.',
      en: 'In a binary heap there are n/2 leaves (sift 0), n/4 nodes at height 1 and n/8 at height 2: the sum n * Σ h/2^{h+1} is O(n). Java PriorityQueue offers O(n) heapify in the constructor that takes a Collection, versus n offer calls that are indeed O(n log n). The implicit array does not change that bound; locality helps constants, not the degree of the polynomial.',
    },
  },
  {
    id: 'th-alg-14',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Cómo encuentra Quickselect el k-ésimo elemento?',
      en: 'How does Quickselect find the k-th element?',
    },
    answer: {
      es: 'Particiona como QuickSort pero solo continúa por el lado que contiene el k-ésimo. El promedio es O(n) y el peor caso es O(n²) si el pivote es extremo en cada paso.',
      en: 'It partitions like QuickSort but only continues on the side that contains the k-th. The average is O(n) and the worst case is O(n²) if the pivot is extreme at every step.',
    },
    distractors: [
      {
        es: 'Quickselect es O(n) en el peor caso porque, igual que la búsqueda binaria, descarta exactamente la mitad del arreglo en cada paso con certeza.',
        en: 'Quickselect is O(n) in the worst case because, just like binary search, it discards exactly half of the array at every step with certainty.',
      },
      {
        es: 'Para obtener el k-ésimo hace falta ordenar por completo en O(n log n); cualquier selección parcial deja el arreglo inconsistente y no puede devolver el orden estadístico.',
        en: 'Getting the k-th requires a full sort in O(n log n); any partial selection leaves the array inconsistent and cannot return the order statistic.',
      },
    ],
    explanation: {
      es: 'Tras un partition de Hoare o Lomuto, el pivote queda en su posición final: si es el índice k se termina, si no se recorre un solo lado. El peor caso O(n²) se mitiga con pivote aleatorio o con introselect, que combina median of medians o un heap; es lo que hace nth_element en la STL de C++. Ordenar entero es correcto, pero más caro en promedio que la selección.',
      en: 'After a Hoare or Lomuto partition, the pivot sits in its final position: if it is index k the algorithm stops, otherwise it walks only one side. The O(n²) worst case is mitigated with a random pivot or with introselect, which mixes median of medians or a heap; that is what nth_element does in the C++ STL. A full sort is correct, but more expensive on average than selection.',
    },
  },
  {
    id: 'th-alg-15',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Cómo detecta un ciclo en una lista enlazada el algoritmo de la tortuga y la liebre?',
      en: 'How does the tortoise-and-hare algorithm detect a cycle in a linked list?',
    },
    answer: {
      es: 'El algoritmo de Floyd avanza un puntero una vez y otro dos veces por paso; si hay ciclo, se encuentran en O(n) tiempo y O(1) memoria extra. El inicio del ciclo se halla después, reiniciando uno de los punteros al origen.',
      en: 'The Floyd algorithm advances one pointer once and the other twice per step; if there is a cycle they meet in O(n) time and O(1) extra memory. The cycle start is found afterwards, by resetting one pointer to the origin.',
    },
    distractors: [
      {
        es: 'Hace falta un HashSet de nodos visitados; los dos punteros solo detectan ciclos en arreglos, no en listas enlazadas, porque no hay índices numéricos.',
        en: 'A HashSet of visited nodes is required; two pointers only detect cycles in arrays, not in linked lists, because there are no numeric indices.',
      },
      {
        es: 'Si los punteros se encuentran, ese nodo es siempre el inicio del ciclo, así que la segunda fase del algoritmo es innecesaria y solo añade un factor constante.',
        en: 'If the pointers meet, that node is always the start of the cycle, so the second phase of the algorithm is unnecessary and only adds a constant factor.',
      },
    ],
    explanation: {
      es: 'Floyd cycle finding usa O(1) memoria frente a la tabla hash O(n). La reunión ocurre dentro del ciclo, no necesariamente en la entrada: si la cabeza está a mu pasos y el ciclo mide lambda, se encuentran cuando el rápido le gana una vuelta. Brent propone una variante con saltos de potencia de dos, también O(1) espacial. LeetCode 142 (Linked List Cycle II) pide justo esa segunda fase.',
      en: 'Floyd cycle finding uses O(1) memory versus an O(n) hash table. The meeting happens inside the cycle, not necessarily at the entrance: if the head is mu steps away and the cycle length is lambda, they meet when the fast pointer gains a full lap. Brent proposed a variant with power-of-two jumps, also O(1) in space. LeetCode 142 (Linked List Cycle II) asks for exactly that second phase.',
    },
  },
  {
    id: 'th-alg-16',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Qué idea hay detrás del muestreo de reservorio?',
      en: 'What is the idea behind reservoir sampling?',
    },
    answer: {
      es: 'Mantiene k elementos de un flujo de longitud desconocida. Al ver el i-ésimo, lo incluye con probabilidad k/i reemplazando a uno del reservorio al azar, de modo que cada elemento termina con probabilidad k/n.',
      en: 'It keeps k elements from a stream of unknown length. On seeing the i-th item, it includes it with probability k/i replacing one reservoir member at random, so each element ends with probability k/n.',
    },
    distractors: [
      {
        es: 'Se toman los primeros k y luego se ignora el resto con probabilidad fija 1/2, lo que basta para un muestreo uniforme si el flujo es suficientemente largo.',
        en: 'The first k are taken and the rest are then skipped with a fixed probability 1/2, which is enough for a uniform sample if the stream is long enough.',
      },
      {
        es: 'Hay que conocer n de antemano para elegir k índices con un generador y un HashSet; sin n el muestreo uniforme sobre un flujo es imposible.',
        en: 'You must know n in advance to pick k indices with a generator and a HashSet; without n, uniform sampling over a stream is impossible.',
      },
    ],
    explanation: {
      es: 'Es el Algorithm R de Knuth: para k = 1, el i-ésimo reemplaza al actual con probabilidad 1/i, y por inducción cada uno tiene probabilidad 1/n. No hace falta conocer n. Una probabilidad fija 1/2 sesga hacia el final o el principio según cómo se aplique. Vitter publicó variantes (Algorithm Z) más eficientes para k grande, todavía en una sola pasada.',
      en: 'This is Knuth Algorithm R: for k = 1, the i-th item replaces the current one with probability 1/i, and by induction each one has probability 1/n. There is no need to know n. A fixed probability 1/2 biases toward the end or the start depending on how it is applied. Vitter published variants (Algorithm Z) that are more efficient for large k, still in a single pass.',
    },
  },
  {
    id: 'th-alg-17',
    topic: 'Algoritmos',
    prompt: {
      es: '¿En qué se diferencia el barajado de Fisher-Yates del intercambio aleatorio ingenuo?',
      en: 'How does the Fisher-Yates shuffle differ from naive random swapping?',
    },
    answer: {
      es: 'Fisher-Yates recorre i desde n - 1 hasta 1 e intercambia a[i] con a[j], donde j es uniforme en [0, i]. Eso genera cada permutación con probabilidad 1/n!. Intercambiar cada posición con un índice en [0, n - 1] sesga algunas permutaciones.',
      en: 'Fisher-Yates walks i from n - 1 down to 1 and swaps a[i] with a[j], where j is uniform in [0, i]. That generates each permutation with probability 1/n!. Swapping each position with an index in [0, n - 1] biases some permutations.',
    },
    distractors: [
      {
        es: 'Ambos procedimientos son uniformes; Fisher-Yates solo reduce constantes porque evita un índice ya visitado, sin cambiar las probabilidades de cada permutación.',
        en: 'Both procedures are uniform; Fisher-Yates only reduces constants because it avoids an already visited index, without changing the probability of each permutation.',
      },
      {
        es: 'Barajar ordenando con un comparador aleatorio es uniforme y más simple, porque cada permutación corresponde a un orden aleatorio de claves de desempate.',
        en: 'Shuffling by sorting with a random comparator is uniform and simpler, because each permutation corresponds to a random order of tie-break keys.',
      },
    ],
    explanation: {
      es: 'Hay n! permutaciones y Fisher-Yates construye un único camino de probabilidad 1/n * 1/(n - 1) * ... * 1/1 hacia cada una. El intercambio ingenuo produce n^n resultados, que no es múltiplo de n!, luego no puede ser uniforme. Ordenar con un comparador aleatorio también sesga y puede violar la transitividad, lo que en TimSort llega a lanzar IllegalArgumentException. Collections.shuffle de Java implementa Fisher-Yates.',
      en: 'There are n! permutations and Fisher-Yates builds a unique path of probability 1/n * 1/(n - 1) * ... * 1/1 toward each one. Naive swapping produces n^n outcomes, which is not a multiple of n!, so it cannot be uniform. Sorting with a random comparator is also biased and can break transitivity, which in TimSort may throw IllegalArgumentException. Java Collections.shuffle implements Fisher-Yates.',
    },
  },
  {
    id: 'th-alg-18',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Cuál es la idea de KMP con la función de prefijos frente a la búsqueda ingenua?',
      en: 'What is the KMP idea with the prefix function compared with naive search?',
    },
    answer: {
      es: 'La búsqueda ingenua puede recomparar caracteres del texto y llega a O(n m). KMP precalcula en O(m) la función de prefijos (LPS) del patrón y, ante un fallo, desplaza con esa tabla sin retroceder el índice del texto, en O(n + m) total.',
      en: 'Naive search may recompare text characters and reaches O(n m). KMP precomputes in O(m) the prefix function (LPS) of the pattern and, on a mismatch, shifts with that table without rewinding the text index, in O(n + m) total.',
    },
    distractors: [
      {
        es: 'KMP hashea el patrón como Rabin-Karp, así que su tiempo esperado es O(n) y el peor caso sigue siendo O(n m) por colisiones del rolling hash.',
        en: 'KMP hashes the pattern like Rabin-Karp, so its expected time is O(n) and the worst case remains O(n m) due to rolling-hash collisions.',
      },
      {
        es: 'La función de prefijos permite saltarse el texto por completo tras un preproceso O(m), de modo que la búsqueda es O(m) e independiente de n.',
        en: 'The prefix function lets you skip the text entirely after an O(m) preprocess, so the search is O(m) and independent of n.',
      },
    ],
    explanation: {
      es: 'LPS[i] es la longitud del borde más largo del prefijo p[0..i]: un prefijo propio que también es sufijo. Eso evita repetir comparaciones ya hechas. El peor caso ingenuo es el patrón aaaaab sobre un texto de aes. Rabin-Karp sí usa rolling hash y su peor caso es O(n m); Boyer-Moore puede ser sublineal en la práctica con la regla del mal carácter, pero KMP garantiza O(n + m) en el peor caso.',
      en: 'LPS[i] is the length of the longest border of prefix p[0..i]: a proper prefix that is also a suffix. That avoids repeating comparisons already made. The naive worst case is the pattern aaaaab over a text of a characters. Rabin-Karp does use a rolling hash and its worst case is O(n m); Boyer-Moore can be sublinear in practice with the bad-character rule, but KMP guarantees O(n + m) in the worst case.',
    },
  },
  {
    id: 'th-alg-19',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Qué riesgos tiene memoizar con claves mutables o con una cache sin límite?',
      en: 'What are the risks of memoising with mutable keys or with an unbounded cache?',
    },
    answer: {
      es: 'Si la clave es mutable, un cambio posterior altera hashCode o equals y la entrada se pierde o se reutiliza mal. Una cache sin límite crece sin cota y puede agotar la memoria; hacen falta claves inmutables y una política de eviction, como LRU.',
      en: 'If the key is mutable, a later change alters hashCode or equals and the entry is lost or reused wrongly. An unbounded cache grows without a cap and can exhaust memory; immutable keys and an eviction policy such as LRU are required.',
    },
    distractors: [
      {
        es: 'Las claves mutables son seguras si se sobrescribe hashCode; el mapa reubica sola la entrada cuando el objeto cambia, porque equals sigue coincidiendo.',
        en: 'Mutable keys are safe if hashCode is overridden; the map relocates the entry by itself when the object changes, because equals still matches.',
      },
      {
        es: 'Una cache sin límite no es un problema porque el recolector libera las entradas que ya no se consultan, igual que hace WeakHashMap por defecto en toda HashMap.',
        en: 'An unbounded cache is not a problem because the collector frees entries that are no longer queried, just as WeakHashMap does by default for every HashMap.',
      },
    ],
    explanation: {
      es: 'El contrato de HashMap exige que el hash de la clave no cambie mientras esté en el mapa; mutarla es el mismo defecto que usar un objeto mutable como clave de un HashSet. Un HashMap normal de memoización retiene fuerte todas las entradas. En Fibonacci el mapa tiene n entradas, acotado; en un parser o en grafos de estados no acotados, sin LRU (LinkedHashMap con accessOrder) hay fuga de memoria. WeakHashMap solo aplica si se elige a propósito, no es el default.',
      en: 'The HashMap contract requires that the key hash does not change while it sits in the map; mutating it is the same defect as using a mutable object as a HashSet key. A normal memoisation HashMap strongly retains every entry. In Fibonacci the map has n entries, which is bounded; in a parser or unbounded state graphs, without LRU (LinkedHashMap with accessOrder) there is a memory leak. WeakHashMap only applies if chosen on purpose; it is not the default.',
    },
  },
  {
    id: 'th-alg-20',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Por qué convertir la recursión en iteración con una pila explícita evita el desbordamiento?',
      en: 'Why does converting recursion into iteration with an explicit stack avoid overflow?',
    },
    answer: {
      es: 'Sustituir la pila de llamadas por una pila explícita en el heap recorre el mismo árbol de recursión sin depender del límite de stack frames de la JVM, que suele ser de unos pocos miles y provoca StackOverflowError.',
      en: 'Replacing the call stack with an explicit heap stack walks the same recursion tree without depending on the JVM stack-frame limit, which is usually a few thousand and causes StackOverflowError.',
    },
    distractors: [
      {
        es: 'Pasar a iteración reduce siempre la complejidad temporal, porque elimina el costo de cada llamada y convierte recorridos exponenciales en lineales.',
        en: 'Switching to iteration always reduces time complexity, because it removes the cost of each call and turns exponential traversals into linear ones.',
      },
      {
        es: 'Java optimiza la recursión de cola, así que una función tail-recursive nunca desborda la pila y la conversión a iteración es innecesaria en la JVM.',
        en: 'Java optimises tail recursion, so a tail-recursive function never overflows the stack and conversion to iteration is unnecessary on the JVM.',
      },
    ],
    explanation: {
      es: 'El DFS recursivo de un árbol degenerado en lista de n nodos pide O(n) marcos; el default de -Xss ronda 1 MB. Una ArrayDeque como pila explícita vive en el heap y escala a millones de nodos. Java no hace tail call optimization, a diferencia de Scala o Scheme. La complejidad temporal no cambia: se simula el mismo recorrido, solo cambia dónde se guarda el estado pendiente.',
      en: 'Recursive DFS of a tree degenerated into a list of n nodes asks for O(n) frames; the -Xss default is around 1 MB. An ArrayDeque used as an explicit stack lives on the heap and scales to millions of nodes. Java does not perform tail call optimization, unlike Scala or Scheme. Time complexity does not change: the same traversal is simulated, only the place that stores pending state changes.',
    },
  },
];
