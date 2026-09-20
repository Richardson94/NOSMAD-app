import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_DATA_STRUCTURES_ADVANCED_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-dsa-01',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Por qué un árbol binario de búsqueda puede degenerar y para qué existen AVL o rojo-negro?',
      en: 'Why can a binary search tree degenerate and why do AVL or red-black trees exist?',
    },
    answer: {
      es: 'Insertar claves ya ordenadas lo convierte en una lista de altura n, y esos árboles rebalancean para dejar la altura logarítmica.',
      en: 'Inserting already sorted keys turns it into a list of height n, and those trees rebalance to keep the height logarithmic.',
    },
    distractors: [
      {
        es: 'Sin rotaciones el recorrido inorden deja de ser ordenado, y AVL o rojo-negro restauran ese invariante de orden.',
        en: 'Without rotations inorder traversal is no longer sorted, and AVL or red-black trees restore that ordering invariant.',
      },
      {
        es: 'La búsqueda se vuelve O(log n) en el peor caso, y el rebalanceo la baja a O(1) amortizado por rotación.',
        en: 'Lookup becomes O(log n) in the worst case, and rebalancing drops it to amortised O(1) per rotation.',
      },
    ],
    explanation: {
      es: 'Un BST sin invariante de altura, al recibir 1,2,3,...,n, deja cada nodo con un solo hijo y la búsqueda es O(n). AVL exige factor de equilibrio -1, 0 o 1; rojo-negro garantiza altura a lo sumo 2 log2(n+1). TreeMap de Java usa rojo-negro porque inserta con menos rotaciones que AVL, a costa de una altura un poco mayor.',
      en: 'A BST without a height invariant, given 1,2,3,...,n, leaves every node with a single child and lookup is O(n). AVL demands a balance factor of -1, 0 or 1; red-black guarantees height at most 2 log2(n+1). The Java TreeMap uses red-black because it inserts with fewer rotations than AVL, at the cost of a slightly greater height.',
    },
  },
  {
    id: 'th-dsa-02',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Por qué las bases de datos usan árboles B o B+ en lugar de árboles binarios?',
      en: 'Why do databases use B-trees or B+ trees instead of binary trees?',
    },
    answer: {
      es: 'Porque un nodo cabe en una página de disco y el alto fan-out reduce los I/O a unos pocos saltos logarítmicos.',
      en: 'Because a node fits in a disk page and the high fan-out cuts I/O down to a few logarithmic hops.',
    },
    distractors: [
      {
        es: 'Porque el árbol binario no puede mantener las claves ordenadas, y B o B+ sí garantizan el recorrido inorden.',
        en: 'Because a binary tree cannot keep keys sorted, and B or B+ trees do guarantee inorder traversal.',
      },
      {
        es: 'Porque B y B+ operan en RAM con nodos de dos hijos, igual que AVL, pero con punteros extra hacia disco.',
        en: 'Because B and B+ operate in RAM with two-child nodes, just like AVL, but with extra pointers out to disk.',
      },
    ],
    explanation: {
      es: 'Un árbol binario de un millón de claves tiene altura cerca de 20 y cada comparación puede ser un seek de disco; un B+ con fan-out 100 tiene altura 3 o 4. InnoDB usa páginas de 16 KiB y guarda los valores solo en las hojas, que además van enlazadas para barridos por rango. El B clásico también guarda datos en nodos internos; el B+ deja esos nodos como índice puro.',
      en: 'A binary tree of one million keys has height near 20 and each comparison can be a disk seek; a B+ with fan-out 100 has height 3 or 4. InnoDB uses 16 KiB pages and stores values only in the leaves, which are also linked for range scans. The classic B-tree stores data in internal nodes too; the B+ tree leaves those nodes as a pure index.',
    },
  },
  {
    id: 'th-dsa-03',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Cuándo un trie gana a una tabla hash para buscar por prefijo?',
      en: 'When does a trie beat a hash table for prefix search?',
    },
    answer: {
      es: 'Cuando hay que listar las claves que empiezan por un prefijo, porque el trie baja por esos caracteres en O(k).',
      en: 'When keys that start with a prefix must be listed, because the trie walks those characters in O(k).',
    },
    distractors: [
      {
        es: 'Cuando las claves son enteros de 64 bits, porque el hash colisiona y el trie garantiza O(1) por carácter.',
        en: 'When keys are 64-bit integers, because hashing collides and the trie guarantees O(1) per character.',
      },
      {
        es: 'Cuando se necesita igualdad exacta de la clave completa, porque el trie evita calcular hashCode y equals.',
        en: 'When exact equality of the full key is needed, because the trie avoids computing hashCode and equals.',
      },
    ],
    explanation: {
      es: 'Una tabla hash localiza una clave completa en O(1) promedio, pero no tiene noción de prefijo: habría que recorrer todas las entradas o preindexar cada prefijo. En el trie, k es la longitud del prefijo y desde ese nodo se enumeran los descendientes. Un caso típico es el autocompletado; Redis modela su diccionario de claves con un radix tree comprimido (rax) precisamente por este patrón.',
      en: 'A hash table locates a full key in average O(1), but it has no notion of prefix: every entry would have to be scanned or every prefix pre-indexed. In the trie, k is the prefix length and descendants are enumerated from that node. A typical case is autocomplete; Redis models its key dictionary with a compressed radix tree (rax) precisely for this pattern.',
    },
  },
  {
    id: 'th-dsa-04',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Qué garantiza un filtro de Bloom respecto a falsos positivos y falsos negativos?',
      en: 'What does a Bloom filter guarantee regarding false positives and false negatives?',
    },
    answer: {
      es: 'Puede afirmar que un elemento está cuando no está, pero nunca afirma que falta cuando sí está.',
      en: 'It may claim that an element is present when it is not, but it never claims a miss when the element is present.',
    },
    distractors: [
      {
        es: 'Puede afirmar que falta un elemento que sí está, pero nunca afirma presencia de uno que no se insertó.',
        en: 'It may claim a miss for an element that is present, but it never claims presence of one that was not inserted.',
      },
      {
        es: 'No admite ni falsos positivos ni falsos negativos si se eligen k funciones de hash independientes.',
        en: 'It admits neither false positives nor false negatives if k independent hash functions are chosen.',
      },
    ],
    explanation: {
      es: 'El filtro es un arreglo de bits y k hashes: insertar pone bits a 1 y consultar exige que esos bits sigan en 1. Un 1 puede venir de otra clave, de ahí el falso positivo; un 0 prueba ausencia absoluta, así que no hay falso negativo. Cassandra y Bigtable lo usan antes de leer un SSTable: un no ahorra un I/O, un sí obliga a verificar. Borrar no es seguro sin un counting Bloom, porque un bit compartido se apagaría para otras claves.',
      en: 'The filter is a bit array plus k hashes: insert sets bits to 1 and a query requires those bits still to be 1. A 1 may come from another key, hence the false positive; a 0 proves absolute absence, so there is no false negative. Cassandra and Bigtable use it before reading an SSTable: a no saves an I/O, a yes forces a check. Deleting is not safe without a counting Bloom, because a shared bit would be cleared for other keys.',
    },
  },
  {
    id: 'th-dsa-05',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Cómo se implementa una caché LRU con costo O(1) por acceso y por desalojo?',
      en: 'How is an LRU cache implemented with O(1) cost per access and per eviction?',
    },
    answer: {
      es: 'Con una tabla hash hacia los nodos y una lista doblemente enlazada que mueve al frente el usado y expulsa la cola.',
      en: 'With a hash table pointing to the nodes and a doubly linked list that moves the used one to the front and evicts the tail.',
    },
    distractors: [
      {
        es: 'Con una tabla hash y un heap de tiempos de acceso, porque extraer el mínimo del heap es O(1) amortizado.',
        en: 'With a hash table and a heap of access times, because extracting the heap minimum is amortised O(1).',
      },
      {
        es: 'Con un TreeMap ordenado por la clave y un contador de usos, porque firstKey es siempre la entrada más vieja.',
        en: 'With a TreeMap ordered by key and a use counter, because firstKey is always the oldest entry.',
      },
    ],
    explanation: {
      es: 'La tabla da el nodo en O(1); la lista doble permite desengancharlo y reinsertarlo en la cabeza también en O(1), y el LRU es el extremo opuesto. Un heap haría el desalojo O(log n) y además hay que disminuir claves. LinkedHashMap de Java con accessOrder en true implementa exactamente este par, y removeEldestEntry se usa para acotar el tamaño, como en una caché de 128 entradas.',
      en: 'The table yields the node in O(1); the doubly linked list can unlink it and reinsert it at the head also in O(1), and the LRU is the opposite end. A heap would make eviction O(log n) and would also need decrease-key. The Java LinkedHashMap with accessOrder set to true implements exactly this pair, and removeEldestEntry is used to cap the size, as in a 128-entry cache.',
    },
  },
  {
    id: 'th-dsa-06',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Qué aporta la compresión de caminos en Union-Find y cuál es un caso de uso típico?',
      en: 'What does path compression add in Union-Find and what is a typical use case?',
    },
    answer: {
      es: 'Deja cada nodo colgando del representante, y con unión por rango el costo amortizado es casi constante, como en Kruskal.',
      en: 'It hangs every node from the representative, and with union by rank the amortised cost is almost constant, as in Kruskal.',
    },
    distractors: [
      {
        es: 'Equilibra el árbol como AVL en cada find, y el caso de uso clásico es implementar una cola de prioridad.',
        en: 'It balances the tree like AVL on every find, and the classic use case is implementing a priority queue.',
      },
      {
        es: 'Convierte find en O(n) puntual para aplanar, y el caso de uso es cachear el padre en un mapa hash.',
        en: 'It turns find into a one-off O(n) flatten, and the use case is caching the parent in a hash map.',
      },
    ],
    explanation: {
      es: 'Tras find, todos los visitados apuntan a la raíz, así que los siguientes find de esa rama son O(1). Junto con unión por rango o por tamaño la cota es O(α(n)), y α(n) es a lo sumo 4 para cualquier n que quepa en el universo observable. Kruskal usa Union-Find para rechazar aristas que cerrarían un ciclo; también aparece en componentes conexas y en percolación.',
      en: 'After find, every visited node points to the root, so later finds on that branch are O(1). Together with union by rank or by size the bound is O(α(n)), and α(n) is at most 4 for any n that fits in the observable universe. Kruskal uses Union-Find to reject edges that would close a cycle; it also shows up in connected components and percolation.',
    },
  },
  {
    id: 'th-dsa-07',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿En qué se diferencia una skip list de un árbol balanceado para el mismo diccionario ordenado?',
      en: 'How does a skip list differ from a balanced tree for the same ordered dictionary?',
    },
    answer: {
      es: 'La skip list equilibra con niveles aleatorios y esperados O(log n); el árbol lo hace con rotaciones deterministas.',
      en: 'The skip list balances with random levels and expected O(log n); the tree does it with deterministic rotations.',
    },
    distractors: [
      {
        es: 'La skip list garantiza peor caso O(log n) estricto, mientras el árbol rojo-negro solo lo logra en promedio.',
        en: 'The skip list guarantees a strict O(log n) worst case, while the red-black tree only achieves it on average.',
      },
      {
        es: 'La skip list no admite rango ni sucesor, porque los punteros forward saltan claves y rompen el orden.',
        en: 'The skip list does not support range or successor, because forward pointers skip keys and break order.',
      },
    ],
    explanation: {
      es: 'Cada nodo de la skip list lanza una moneda para subir de nivel (p = 1/2 o 1/4), y la búsqueda baja de expreso a local como en una autopista. Redis implementa los sorted sets con skip list más tabla hash, y ConcurrentSkipListMap de Java aprovecha que los enlaces se actualizan con CAS sin rotar un árbol. El peor caso de la skip list es O(n) con probabilidad diminuta; el rojo-negro sí es O(log n) siempre.',
      en: 'Each skip list node flips a coin to rise a level (p = 1/2 or 1/4), and search drops from express to local like a highway. Redis implements sorted sets with a skip list plus a hash table, and the Java ConcurrentSkipListMap exploits that links can be updated with CAS without rotating a tree. The skip list worst case is O(n) with tiny probability; red-black is O(log n) always.',
    },
  },
  {
    id: 'th-dsa-08',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Cuándo conviene lista de adyacencia frente a matriz de adyacencia para un grafo?',
      en: 'When is an adjacency list preferable to an adjacency matrix for a graph?',
    },
    answer: {
      es: 'En grafos dispersos, porque ocupa O(V + E) y recorrer vecinos es proporcional al grado, no a V.',
      en: 'On sparse graphs, because it takes O(V + E) and walking neighbors is proportional to degree, not to V.',
    },
    distractors: [
      {
        es: 'En grafos densos, porque entonces E se acerca a V² y la lista comprime mejor que la matriz booleana.',
        en: 'On dense graphs, because then E approaches V² and the list compresses better than the boolean matrix.',
      },
      {
        es: 'Siempre que se precise saber en O(1) si existe una arista uv, porque la lista indexa el vecino directo.',
        en: 'Whenever it is required to know in O(1) whether edge uv exists, because the list indexes the neighbor directly.',
      },
    ],
    explanation: {
      es: 'La matriz ocupa Θ(V²) y consulta arista en O(1), ideal si el grafo es denso o se usa Floyd-Warshall. Una red social con millones de vértices y decenas de aristas por persona es dispersa: la matriz no cabe en memoria y DFS o BFS en lista son O(V + E). Como regla, si E es del orden de V o V log V, lista; si E es Θ(V²), matriz.',
      en: 'The matrix takes Θ(V²) and queries an edge in O(1), ideal if the graph is dense or Floyd-Warshall is used. A social network with millions of vertices and tens of edges per person is sparse: the matrix will not fit in memory and DFS or BFS on a list are O(V + E). As a rule, if E is on the order of V or V log V, use a list; if E is Θ(V²), use a matrix.',
    },
  },
  {
    id: 'th-dsa-09',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Por qué el orden topológico exige un grafo dirigido acíclico?',
      en: 'Why does topological order require a directed acyclic graph?',
    },
    answer: {
      es: 'Porque un ciclo impide una secuencia donde toda arista vaya de un vértice anterior a uno posterior.',
      en: 'Because a cycle prevents a sequence where every edge goes from an earlier vertex to a later one.',
    },
    distractors: [
      {
        es: 'Porque sin direcciones el algoritmo de Kahn no puede calcular grados de entrada y aborta el barrido.',
        en: 'Because without directions the Kahn algorithm cannot compute in-degrees and aborts the sweep.',
      },
      {
        es: 'Porque un DAG garantiza un único orden lineal, y el ciclo produciría varios órdenes incompatibles.',
        en: 'Because a DAG guarantees a unique linear order, and a cycle would produce several incompatible orders.',
      },
    ],
    explanation: {
      es: 'El orden topológico numera vértices de modo que u aparece antes que v si existe la arista u→v; en un ciclo A→B→C→A esa regla se contradice. El algoritmo de Kahn va sacando nodos de indegree 0: si al final queda alguien con indegree mayor que 0, hay ciclo. Compilar con dependencias o resolver paquetes npm usa este orden; un DAG puede tener muchos órdenes válidos, no uno solo.',
      en: 'Topological order numbers vertices so that u appears before v if the edge u→v exists; on a cycle A→B→C→A that rule contradicts itself. The Kahn algorithm keeps removing indegree-0 nodes: if anyone with indegree greater than 0 remains at the end, there is a cycle. Compiling with dependencies or resolving npm packages uses this order; a DAG may have many valid orders, not just one.',
    },
  },
  {
    id: 'th-dsa-10',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Por qué un deque sirve para el máximo de una ventana deslizante en O(n)?',
      en: 'Why does a deque compute the sliding-window maximum in O(n)?',
    },
    answer: {
      es: 'Guarda índices en orden decreciente de valor, el frente es el máximo y se expulsan los que salen de la ventana.',
      en: 'It stores indices in decreasing value order, the front is the maximum and those that leave the window are popped.',
    },
    distractors: [
      {
        es: 'Porque extraer el máximo de un deque es O(1) igual que en un heap, y cada índice se inserta log n veces.',
        en: 'Because extracting the maximum from a deque is O(1) just like in a heap, and each index is inserted log n times.',
      },
      {
        es: 'Porque el deque recorre la ventana completa en cada avance, pero amortiza el barrido al reutilizar el máximo previo.',
        en: 'Because the deque scans the whole window on every advance, but amortises the scan by reusing the previous maximum.',
      },
    ],
    explanation: {
      es: 'Cada índice entra y sale de la cola a lo sumo una vez, de ahí el O(n) total. Se mantienen candidatos estrictamente decrecientes: cualquier valor menor y más viejo que el nuevo nunca será máximo. El heap naive es O(n log n) y además hay que borrar el que sale. El problema 239 de LeetCode es el enunciado clásico, con ventanas de tamaño k sobre un arreglo.',
      en: 'Each index enters and leaves the deque at most once, hence the total O(n). Candidates stay strictly decreasing: any older smaller value than the new one will never be a maximum. The naive heap is O(n log n) and also has to delete the outgoing index. LeetCode problem 239 is the classic statement, with windows of size k over an array.',
    },
  },
  {
    id: 'th-dsa-11',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Qué es un buffer circular y para qué se usa?',
      en: 'What is a circular buffer and what is it used for?',
    },
    answer: {
      es: 'Un arreglo de capacidad fija con índices cabeza y cola módulo n, típico en productor-consumidor y audio.',
      en: 'A fixed-capacity array with head and tail indices modulo n, typical in producer-consumer and audio.',
    },
    distractors: [
      {
        es: 'Una lista enlazada que recicla nodos borrados, típica en heaps de memoria y recolectores generacionales.',
        en: 'A linked list that recycles deleted nodes, typical in memory heaps and generational collectors.',
      },
      {
        es: 'Un árbol B+ de páginas que envuelve el último leaf con el primero, típico en índices cíclicos de series temporales.',
        en: 'A B+ tree of pages that wraps the last leaf to the first, typical in cyclic indexes of time series.',
      },
    ],
    explanation: {
      es: 'Al llegar al final se vuelve al índice 0, así no hay copias ni realloc: o se bloquea cuando está lleno o se pisa el dato más viejo. El kernel de Linux expone kfifo con esta idea, y los ring buffer de captura de red (tcpdump, perf) evitan asignar por paquete. La ocupación se calcula con (tail - head) módulo la capacidad, que suele ser potencia de dos para usar una máscara.',
      en: 'On reaching the end it wraps to index 0, so there are no copies and no realloc: it either blocks when full or overwrites the oldest datum. The Linux kernel exposes kfifo with this idea, and network capture ring buffers (tcpdump, perf) avoid per-packet allocation. Occupancy is (tail - head) modulo capacity, which is often a power of two so a bitmask can be used.',
    },
  },
  {
    id: 'th-dsa-12',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Cuándo hace falta un TreeMap ordenado frente a un HashMap?',
      en: 'When is an ordered TreeMap needed instead of a HashMap?',
    },
    answer: {
      es: 'Cuando se requieren claves en orden, rangos (subMap) o sucesor y predecesor, a costa de O(log n) por operación.',
      en: 'When keys in order, ranges (subMap) or successor and predecessor are required, at the cost of O(log n) per operation.',
    },
    distractors: [
      {
        es: 'Cuando hay que evitar colisiones, porque TreeMap no usa hashCode y por eso es siempre O(1) amortizado.',
        en: 'When collisions must be avoided, because TreeMap does not use hashCode and is therefore always amortised O(1).',
      },
      {
        es: 'Cuando las claves no implementan equals, porque TreeMap las compara solo por identidad de referencia.',
        en: 'When keys do not implement equals, because TreeMap compares them only by reference identity.',
      },
    ],
    explanation: {
      es: 'HashMap no promete ningún orden al iterar; para orden de inserción está LinkedHashMap. TreeMap es un rojo-negro y ofrece firstKey, lastKey, headMap y tailMap en O(log n). Un ejemplo: un índice de timestamps donde se pide el evento más cercano a T. Las claves deben ser Comparable o llevar Comparator; un null con orden natural lanza NullPointerException.',
      en: 'HashMap does not promise any iteration order; insertion order belongs to LinkedHashMap. TreeMap is a red-black tree and offers firstKey, lastKey, headMap and tailMap in O(log n). One example: a timestamp index where the event closest to T is requested. Keys must be Comparable or carry a Comparator; a null with natural order throws NullPointerException.',
    },
  },
  {
    id: 'th-dsa-13',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Cuáles son los dos modos de orden de LinkedHashMap y en qué se diferencian?',
      en: 'What are the two LinkedHashMap order modes and how do they differ?',
    },
    answer: {
      es: 'Orden de inserción, que deja la secuencia como se metieron las claves, y orden de acceso, que mueve al final cada get o put.',
      en: 'Insertion order, which keeps the sequence as keys were put, and access order, which moves every get or put to the end.',
    },
    distractors: [
      {
        es: 'Orden natural de las claves, como TreeMap, y orden de hash, que agrupa colisiones del mismo bucket.',
        en: 'Natural key order, like TreeMap, and hash order, which groups collisions of the same bucket.',
      },
      {
        es: 'Orden de inserción estricto, que ignora put sobre claves existentes, y orden LRU, que reordena solo en remove.',
        en: 'Strict insertion order, which ignores put on existing keys, and LRU order, which reorders only on remove.',
      },
    ],
    explanation: {
      es: 'El constructor LinkedHashMap(capacidad, loadFactor, accessOrder) activa el segundo modo con true. En modo acceso, get, put y compute mueven la entrada al final de la lista enlazada interna, de modo que la más vieja sin tocar queda al principio: es el LRU de la JDK. En modo inserción, un put sobre una clave ya presente actualiza el valor pero no la posición. removeEldestEntry se engancha al put para evictar.',
      en: 'The constructor LinkedHashMap(capacity, loadFactor, accessOrder) turns the second mode on with true. In access mode, get, put and compute move the entry to the end of the internal linked list, so the oldest untouched one stays at the front: that is the JDK LRU. In insertion mode, a put on an existing key updates the value but not the position. removeEldestEntry hooks into put to evict.',
    },
  },
  {
    id: 'th-dsa-14',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Qué distingue a HashSet, LinkedHashSet y TreeSet en Java?',
      en: 'What distinguishes HashSet, LinkedHashSet and TreeSet in Java?',
    },
    answer: {
      es: 'HashSet no promete orden y es O(1) promedio; LinkedHashSet conserva inserción; TreeSet ordena y opera en O(log n).',
      en: 'HashSet does not promise order and is average O(1); LinkedHashSet keeps insertion order; TreeSet sorts and runs in O(log n).',
    },
    distractors: [
      {
        es: 'Los tres prohíben duplicados con equals, y TreeSet además permite un null porque el rojo-negro lo reserva como sentinela.',
        en: 'All three forbid duplicates with equals, and TreeSet also allows a null because the red-black tree reserves it as a sentinel.',
      },
      {
        es: 'HashSet y TreeSet iteran en orden de hashCode, y LinkedHashSet es el único que rebalancea tras cada add.',
        en: 'HashSet and TreeSet iterate in hashCode order, and LinkedHashSet is the only one that rebalances after every add.',
      },
    ],
    explanation: {
      es: 'HashSet y LinkedHashSet se apoyan en HashMap y LinkedHashMap; TreeSet se apoya en TreeMap. Un TreeSet con orden natural no admite null, y define unicidad por compareTo igual a 0, que puede discrepar de equals si el comparator está mal escrito. LinkedHashSet cuesta un puntero extra por elemento; conviene cuando hace falta un set con iteración predecible, por ejemplo al serializar.',
      en: 'HashSet and LinkedHashSet sit on HashMap and LinkedHashMap; TreeSet sits on TreeMap. A TreeSet with natural order does not allow null, and uniqueness is compareTo equal to 0, which can disagree with equals if the comparator is poorly written. LinkedHashSet costs an extra pointer per element; it pays off when a set with predictable iteration is needed, for example when serialising.',
    },
  },
  {
    id: 'th-dsa-15',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Por qué iterar un PriorityQueue de Java no recorre los elementos ordenados?',
      en: 'Why does iterating a Java PriorityQueue not walk the elements in sorted order?',
    },
    answer: {
      es: 'Porque por debajo es un heap: solo la raíz cumple el invariante, y el Iterator no hace heapify ni poll.',
      en: 'Because underneath it is a heap: only the root satisfies the invariant, and the Iterator does not heapify or poll.',
    },
    distractors: [
      {
        es: 'Porque el comparador se aplica solo en peek, y el iterator reordena de forma inestable como QuickSort.',
        en: 'Because the comparator is applied only on peek, and the iterator reorders unstably like QuickSort.',
      },
      {
        es: 'Porque PriorityQueue implementa SortedSet y el iterator sigue el orden de inserción, no el de prioridad.',
        en: 'Because PriorityQueue implements SortedSet and the iterator follows insertion order, not priority order.',
      },
    ],
    explanation: {
      es: 'Un heap binario garantiza que queue[0] es el mínimo o el máximo, pero los hijos no están totalmente ordenados. La documentación de la JDK dice que el Iterator no garantiza ningún orden; para obtener los elementos ordenados hay que ir haciendo poll, que es O(n log n) y vacía la cola, o copiar y ordenar. Arrays.sort sobre toArray tampoco usa el comparador del heap a menos que se le pase.',
      en: 'A binary heap guarantees that queue[0] is the minimum or the maximum, but the children are not totally ordered. The JDK documentation says the Iterator guarantees no particular order; to get elements sorted one must keep polling, which is O(n log n) and empties the queue, or copy and sort. Arrays.sort on toArray also does not use the heap comparator unless it is passed in.',
    },
  },
  {
    id: 'th-dsa-16',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Qué son las estructuras persistentes inmutables y qué gana la compartición estructural?',
      en: 'What are persistent immutable structures and what does structural sharing buy?',
    },
    answer: {
      es: 'Versiones que no se mutan: cada update reutiliza los subárboles intactos y copia O(log n) nodos nuevos.',
      en: 'Versions that are not mutated: each update reuses intact subtrees and copies O(log n) new nodes.',
    },
    distractors: [
      {
        es: 'Estructuras que se serializan a disco tras cada cambio, y la compartición evita escribir el log de transacciones.',
        en: 'Structures that are serialised to disk after every change, and sharing avoids writing the transaction log.',
      },
      {
        es: 'Copias profundas completas en cada write, y la compartición solo aplica al recolector de basura generacional.',
        en: 'Full deep copies on every write, and sharing only applies to the generational garbage collector.',
      },
    ],
    explanation: {
      es: 'Persistente aquí no significa disco, sino que las versiones viejas siguen válidas. Un trie HAMT como el de Clojure o Immutable.js cambia un camino de unos 6 o 7 nodos de 32 hijos y comparte el resto. Así un mapa de un millón de entradas se actualiza sin copiar el millón. Sin compartición, cada write sería O(n) y el modelo inmutable sería impracticable.',
      en: 'Persistent here does not mean disk; it means old versions remain valid. A HAMT trie like the one in Clojure or Immutable.js changes a path of about 6 or 7 nodes of 32 children and shares the rest. That way a map of one million entries is updated without copying the million. Without sharing, every write would be O(n) and the immutable model would be impractical.',
    },
  },
  {
    id: 'th-dsa-17',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Para qué sirven un árbol de segmentos o un Fenwick en consultas por rango?',
      en: 'What are a segment tree or a Fenwick tree for in range queries?',
    },
    answer: {
      es: 'Responden suma, mínimo u otra asociativa en O(log n) y actualizan un punto en O(log n), frente al O(n) del arreglo crudo.',
      en: 'They answer sum, minimum or another associative query in O(log n) and update a point in O(log n), versus the O(n) raw array.',
    },
    distractors: [
      {
        es: 'Compactan el arreglo en O(1) extra y responden cualquier rango en O(1) tras un preprocess lineal, como un RMQ estático.',
        en: 'They compact the array in O(1) extra and answer any range in O(1) after linear preprocess, like a static RMQ.',
      },
      {
        es: 'Sustituyen al heap en colas de prioridad, porque el Fenwick extrae el mínimo global en O(1) y lo reinserta en O(log n).',
        en: 'They replace the heap in priority queues, because Fenwick extracts the global minimum in O(1) and reinserts it in O(log n).',
      },
    ],
    explanation: {
      es: 'El Fenwick (Binary Indexed Tree, 1994) usa la identidad i += i & -i para saltar sumas de prefijo y ocupa n+1 celdas; sirve muy bien para sumas. El segmento cubre cualquier operación asociativa y admite lazy propagation para updates de rango, a costa de unos 4n espacios. Si el arreglo no cambia, un sparse table responde RMQ en O(1) tras O(n log n) de preprocess; el valor de segmento o Fenwick es soportar updates intercalados.',
      en: 'Fenwick (Binary Indexed Tree, 1994) uses the identity i += i & -i to jump prefix sums and occupies n+1 cells; it fits sums very well. The segment tree covers any associative operation and allows lazy propagation for range updates, at the cost of about 4n slots. If the array does not change, a sparse table answers RMQ in O(1) after O(n log n) preprocess; the point of segment or Fenwick is to support interleaved updates.',
    },
  },
  {
    id: 'th-dsa-18',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿En qué se diferencia el encadenamiento del direccionamiento abierto para resolver colisiones?',
      en: 'How does chaining differ from open addressing when resolving collisions?',
    },
    answer: {
      es: 'Encadenamiento cuelga una lista o árbol por bucket; abierto busca otro hueco en la misma tabla con una secuencia de sondeo.',
      en: 'Chaining hangs a list or tree per bucket; open addressing looks for another slot in the same table with a probe sequence.',
    },
    distractors: [
      {
        es: 'Encadenamiento recalcula un segundo hash y abierto concatena la clave al bucket, que es lo que hace HashMap de Java.',
        en: 'Chaining recomputes a second hash and open addressing concatenates the key onto the bucket, which is what the Java HashMap does.',
      },
      {
        es: 'Abierto nunca requiere rehash porque los huecos se rellenan in-place, y encadenamiento rehasea al treeificar el bucket.',
        en: 'Open addressing never needs a rehash because holes are filled in place, and chaining rehashes when the bucket is treeified.',
      },
    ],
    explanation: {
      es: 'HashMap de Java encadena y, desde la 8, treeifica un bucket con más de 8 nodos si la tabla tiene al menos 64 celdas. Python dict y el HashMap de Rust usan direccionamiento abierto (sondeo lineal o Swiss Table), mejor para la caché porque las claves viven en un arreglo contiguo. El abierto sufre clustering y el borrado necesita marcas deleted; el encadenamiento gasta un puntero por entrada y degrada si el hash es pésimo.',
      en: 'The Java HashMap chains and, since version 8, treeifies a bucket with more than 8 nodes if the table has at least 64 slots. Python dict and the Rust HashMap use open addressing (linear probing or Swiss Table), better for the cache because keys live in a contiguous array. Open addressing suffers clustering and deletes need deleted tombstones; chaining spends a pointer per entry and degrades if the hash is terrible.',
    },
  },
  {
    id: 'th-dsa-19',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Para qué sirve el hashing consistente en cachés distribuidas?',
      en: 'What is consistent hashing for in distributed caches?',
    },
    answer: {
      es: 'Al añadir o quitar un nodo, solo se remapea una fracción cercana a 1/N de las claves, no casi todo el anillo.',
      en: 'When adding or removing a node, only a fraction near 1/N of the keys is remapped, not almost the whole ring.',
    },
    distractors: [
      {
        es: 'Garantiza que dos claves iguales caigan siempre en el mismo bucket local, que es el contrato de hashCode.',
        en: 'It guarantees that two equal keys always land in the same local bucket, which is the hashCode contract.',
      },
      {
        es: 'Evita colisiones entre nodos usando SHA-256, de modo que el rebalanceo completo sea O(1) amortizado.',
        en: 'It avoids collisions between nodes by using SHA-256, so that a full rebalance is amortised O(1).',
      },
    ],
    explanation: {
      es: 'El hashing clásico modulo N mueve casi todas las claves cuando N cambia. El anillo (Karger y otros, 1997) coloca nodos y claves en un círculo; un nodo nuevo solo se queda con el arco hasta su sucesor. Dynamo y Cassandra usan nodos virtuales para repartir carga, y Ketama es el esquema que popularizó memcached. Sin consistencia, un rescale de caché produce una avalancha de misses al origen.',
      en: 'Classic hashing modulo N moves almost every key when N changes. The ring (Karger and others, 1997) places nodes and keys on a circle; a new node only keeps the arc up to its successor. Dynamo and Cassandra use virtual nodes to spread load, and Ketama is the scheme that popularised memcached. Without consistency, a cache rescale causes a stampede of misses to the origin.',
    },
  },
  {
    id: 'th-dsa-20',
    topic: 'Estructuras avanzadas',
    prompt: {
      es: '¿Qué cambia en localidad de memoria un arreglo de estructuras frente a una estructura de arreglos?',
      en: 'What changes in memory locality between an array of structures and a structure of arrays?',
    },
    answer: {
      es: 'AoS junta los campos de un objeto; SoA junta el mismo campo de todos, lo que favorece SIMD y recorrer un solo atributo.',
      en: 'AoS packs the fields of one object; SoA packs the same field of every object, which favours SIMD and scanning a single attribute.',
    },
    distractors: [
      {
        es: 'AoS siempre falla más en caché porque el objeto cruza líneas de 64 bytes, y SoA cabe entero en un registro.',
        en: 'AoS always misses cache more because the object crosses 64-byte lines, and SoA fits entirely in a register.',
      },
      {
        es: 'SoA es más lento al recorrer un campo, porque hay que saltar el stride del resto de atributos del struct.',
        en: 'SoA is slower when scanning one field, because the stride of the remaining struct attributes must be skipped.',
      },
    ],
    explanation: {
      es: 'Una línea de caché típica tiene 64 bytes. Si un Particle tiene position, velocity y color, un bucle que solo suma posiciones en AoS arrastra velocity y color a la caché; en SoA el arreglo positions es contiguo y se aprovecha prefetch y AVX. El ECS de Unity y muchos motores de física usan SoA precisamente por eso. Si casi siempre se toca el objeto entero, AoS gana porque un solo miss trae todos los campos.',
      en: 'A typical cache line is 64 bytes. If a Particle has position, velocity and colour, a loop that only adds positions in AoS drags velocity and colour into cache; in SoA the positions array is contiguous and prefetch plus AVX pay off. Unity ECS and many physics engines use SoA for that reason. If the whole object is almost always touched, AoS wins because a single miss brings every field.',
    },
  },
];
