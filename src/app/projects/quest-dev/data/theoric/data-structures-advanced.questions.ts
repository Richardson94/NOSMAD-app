import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_DATA_STRUCTURES_ADVANCED_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-dsa-01',
    topic: 'Estructuras',
    prompt: {
      es: '¿Por qué un árbol binario de búsqueda puede volverse una lista y para qué sirven AVL o rojo-negro?',
      en: 'Why can a binary search tree turn into a list and what are AVL or red-black trees for?',
    },
    answer: {
      es: 'Si insertas claves ya ordenadas, cada nodo queda con un solo hijo y buscar es lineal. Esos árboles se rebalancean para mantener la altura en log n.',
      en: 'If you insert already sorted keys, every node ends with one child and lookup is linear. Those trees rebalance to keep the height at log n.',
    },
    distractors: [
      {
        es: 'Sin rotaciones el recorrido en orden deja de estar ordenado.',
        en: 'Without rotations the inorder walk is no longer sorted.',
      },
      {
        es: 'El rebalanceo baja la búsqueda a tiempo constante.',
        en: 'Rebalancing drops lookup to constant time.',
      },
    ],
    explanation: {
      es: 'El orden del recorrido se mantiene igual. Lo que se recupera es que la búsqueda no degenere a recorrer todos los nodos.',
      en: 'The walk order stays the same. What you recover is that lookup does not degenerate into walking every node.',
    },
  },
  {
    id: 'th-dsa-02',
    topic: 'Estructuras',
    prompt: {
      es: '¿Por qué las bases de datos usan árboles B en lugar de árboles binarios?',
      en: 'Why do databases use B-trees instead of binary trees?',
    },
    answer: {
      es: 'Porque un nodo cabe en una página de disco y tiene muchos hijos. Así una búsqueda son unos pocos accesos a disco, no veinte.',
      en: 'Because a node fits in a disk page and has many children. A lookup is then a few disk reads, not twenty.',
    },
    distractors: [
      {
        es: 'Porque el árbol binario no puede mantener las claves ordenadas.',
        en: 'Because a binary tree cannot keep keys sorted.',
      },
      {
        es: 'Porque el árbol B también tiene dos hijos, pero con punteros extra a disco.',
        en: 'Because a B-tree also has two children, but with extra pointers out to disk.',
      },
    ],
    explanation: {
      es: 'En disco cada salto es caro. Un factor de ramificación alto deja el árbol muy bajo.',
      en: 'On disk every hop is expensive. A high branching factor keeps the tree very short.',
    },
  },
  {
    id: 'th-dsa-03',
    topic: 'Estructuras',
    prompt: {
      es: '¿Cuándo un trie gana a una tabla hash?',
      en: 'When does a trie beat a hash table?',
    },
    answer: {
      es: 'Cuando buscas por prefijo, por ejemplo autocompletar. Bajas por los caracteres del prefijo y listas lo que cuelga de ahí.',
      en: 'When you search by prefix, for example autocomplete. You walk the prefix characters and list what hangs from there.',
    },
    distractors: [
      {
        es: 'Cuando la clave es un entero, porque el hash siempre colisiona.',
        en: 'When the key is an integer, because the hash always collides.',
      },
      {
        es: 'Cuando buscas la clave exacta, porque evita calcular el hash.',
        en: 'When you look up the exact key, because it avoids computing the hash.',
      },
    ],
    explanation: {
      es: 'La tabla hash localiza una clave completa muy bien, pero no sabe qué claves empiezan por un texto.',
      en: 'A hash table finds a full key very well, but it does not know which keys start with a given text.',
    },
  },
  {
    id: 'th-dsa-04',
    topic: 'Estructuras',
    prompt: {
      es: '¿Qué puede fallar un filtro de Bloom y qué no?',
      en: 'What can a Bloom filter get wrong and what can it not?',
    },
    answer: {
      es: 'Puede decir que un elemento está cuando no está. Si dice que no está, puedes fiarte: no hay falsos negativos.',
      en: 'It may say an element is present when it is not. If it says the element is absent, you can trust it: there are no false negatives.',
    },
    distractors: [
      {
        es: 'Puede decir que falta un elemento que sí está, pero nunca afirma una presencia falsa.',
        en: 'It may say an element is missing when it is present, but it never claims a false presence.',
      },
      {
        es: 'Con suficientes funciones de hash no se equivoca nunca.',
        en: 'With enough hash functions it never makes a mistake.',
      },
    ],
    explanation: {
      es: 'Sirve para evitar una lectura cara: un no ahorra el acceso y un sí obliga a comprobar de verdad.',
      en: 'It is used to avoid an expensive read: a no saves the access and a yes forces a real check.',
    },
  },
  {
    id: 'th-dsa-05',
    topic: 'Estructuras',
    prompt: {
      es: '¿Cómo implementas una caché LRU con acceso y desalojo rápidos?',
      en: 'How do you implement an LRU cache with fast access and fast eviction?',
    },
    answer: {
      es: 'Con una tabla hash hacia los nodos y una lista doblemente enlazada. Lo usado pasa al frente y se expulsa el final.',
      en: 'With a hash table pointing at the nodes and a doubly linked list. The used item moves to the front and the tail is evicted.',
    },
    distractors: [
      {
        es: 'Con una tabla hash y un heap de tiempos, porque sacar el mínimo es constante.',
        en: 'With a hash table and a heap of times, because taking the minimum is constant.',
      },
      {
        es: 'Con un TreeMap ordenado por clave, porque la primera clave es la más vieja.',
        en: 'With a TreeMap ordered by key, because the first key is the oldest.',
      },
    ],
    explanation: {
      es: 'La tabla encuentra el nodo al momento y la lista lo mueve sin recorrer. LinkedHashMap en modo acceso hace exactamente esto.',
      en: 'The table finds the node at once and the list moves it without a walk. LinkedHashMap in access mode does exactly this.',
    },
  },
  {
    id: 'th-dsa-06',
    topic: 'Estructuras',
    prompt: {
      es: '¿Para qué sirve Union-Find?',
      en: 'What is Union-Find for?',
    },
    answer: {
      es: 'Para saber si dos elementos están en el mismo grupo y unir grupos rápido, por ejemplo al detectar ciclos en Kruskal.',
      en: 'To know whether two elements are in the same group and to merge groups quickly, for example when detecting cycles in Kruskal.',
    },
    distractors: [
      {
        es: 'Para equilibrar un árbol como AVL y usarlo de cola de prioridad.',
        en: 'To balance a tree like AVL and use it as a priority queue.',
      },
      {
        es: 'Para aplanar el árbol una sola vez y guardar el padre en un mapa hash.',
        en: 'To flatten the tree once and store the parent in a hash map.',
      },
    ],
    explanation: {
      es: 'Con compresión de caminos y unión por rango, las operaciones quedan casi constantes en la práctica.',
      en: 'With path compression and union by rank, the operations stay almost constant in practice.',
    },
  },
  {
    id: 'th-dsa-07',
    topic: 'Estructuras',
    prompt: {
      es: '¿En qué se diferencia una skip list de un árbol balanceado?',
      en: 'How does a skip list differ from a balanced tree?',
    },
    answer: {
      es: 'La skip list equilibra con niveles al azar y el costo esperado es log n. El árbol lo garantiza con rotaciones.',
      en: 'The skip list balances with random levels and the expected cost is log n. The tree guarantees it with rotations.',
    },
    distractors: [
      {
        es: 'La skip list garantiza el peor caso log n y el árbol rojo-negro solo el promedio.',
        en: 'The skip list guarantees a log n worst case and the red-black tree only the average.',
      },
      {
        es: 'La skip list no puede buscar el sucesor porque salta claves.',
        en: 'The skip list cannot find the successor because it skips keys.',
      },
    ],
    explanation: {
      es: 'El peor caso de la skip list puede ser lineal, aunque es raro. Se usa mucho donde conviene actualizar enlaces sin rotar un árbol.',
      en: 'The skip list worst case can be linear, although that is rare. It is used a lot where updating links without rotating a tree is convenient.',
    },
  },
  {
    id: 'th-dsa-08',
    topic: 'Estructuras',
    prompt: {
      es: '¿Cuándo guardas un grafo como lista de adyacencia y no como matriz?',
      en: 'When do you store a graph as an adjacency list instead of a matrix?',
    },
    answer: {
      es: 'Cuando el grafo es disperso. La lista ocupa poco y recorrer vecinos cuesta según el grado, no según todos los vértices.',
      en: 'When the graph is sparse. The list stays small and walking neighbors costs according to the degree, not according to every vertex.',
    },
    distractors: [
      {
        es: 'Cuando el grafo es denso, porque la lista comprime mejor.',
        en: 'When the graph is dense, because the list compresses better.',
      },
      {
        es: 'Cuando necesitas saber en tiempo constante si existe una arista.',
        en: 'When you need to know in constant time whether an edge exists.',
      },
    ],
    explanation: {
      es: 'La matriz responde si hay arista al momento, pero ocupa el cuadrado de los vértices. En una red social eso no cabe.',
      en: 'The matrix answers whether an edge exists at once, but it takes the square of the vertex count. In a social network that does not fit.',
    },
  },
  {
    id: 'th-dsa-09',
    topic: 'Estructuras',
    prompt: {
      es: '¿Por qué el orden topológico necesita un grafo dirigido sin ciclos?',
      en: 'Why does topological order need a directed graph with no cycles?',
    },
    answer: {
      es: 'Porque cada flecha debe ir de un nodo anterior a uno posterior. Un ciclo hace imposible ese orden.',
      en: 'Because every arrow must go from an earlier node to a later one. A cycle makes that order impossible.',
    },
    distractors: [
      {
        es: 'Porque sin direcciones no se pueden calcular grados de entrada.',
        en: 'Because without directions you cannot compute in degrees.',
      },
      {
        es: 'Porque un grafo sin ciclos tiene un único orden posible.',
        en: 'Because a graph with no cycles has only one possible order.',
      },
    ],
    explanation: {
      es: 'Sirve para compilar dependencias o instalar paquetes. Puede haber varios órdenes válidos, no uno solo.',
      en: 'It is used to compile dependencies or install packages. There can be several valid orders, not just one.',
    },
  },
  {
    id: 'th-dsa-10',
    topic: 'Estructuras',
    prompt: {
      es: '¿Por qué un deque calcula el máximo de una ventana deslizante en una pasada?',
      en: 'Why does a deque compute the sliding window maximum in one pass?',
    },
    answer: {
      es: 'Guarda índices de candidatos de mayor a menor. El frente es el máximo y se quitan los que salen de la ventana.',
      en: 'It stores candidate indexes from larger to smaller. The front is the maximum and those that leave the window are removed.',
    },
    distractors: [
      {
        es: 'Porque sacar el máximo de un deque es constante, igual que en un heap.',
        en: 'Because taking the maximum from a deque is constant, just like in a heap.',
      },
      {
        es: 'Porque recorre la ventana entera en cada paso y reutiliza el máximo anterior.',
        en: 'Because it scans the whole window on every step and reuses the previous maximum.',
      },
    ],
    explanation: {
      es: 'Cada índice entra y sale como mucho una vez. Un heap por ventana sale más caro.',
      en: 'Each index enters and leaves at most once. A heap per window costs more.',
    },
  },
  {
    id: 'th-dsa-11',
    topic: 'Estructuras',
    prompt: {
      es: '¿Qué es un buffer circular y para qué se usa?',
      en: 'What is a circular buffer and what is it used for?',
    },
    answer: {
      es: 'Un arreglo de tamaño fijo con cabeza y cola que vuelven al inicio. Sirve en productor consumidor y en audio, sin realojar.',
      en: 'A fixed size array with head and tail that wrap to the start. It is used in producer consumer and in audio, with no reallocation.',
    },
    distractors: [
      {
        es: 'Una lista que recicla los nodos borrados.',
        en: 'A list that recycles deleted nodes.',
      },
      {
        es: 'Un árbol que enlaza la última hoja con la primera.',
        en: 'A tree that links the last leaf back to the first.',
      },
    ],
    explanation: {
      es: 'Al llegar al final se vuelve al índice cero. Si está lleno, se bloquea o se pisa el dato más viejo.',
      en: 'On reaching the end it wraps to index zero. If it is full, it blocks or overwrites the oldest item.',
    },
  },
  {
    id: 'th-dsa-12',
    topic: 'Estructuras',
    prompt: {
      es: '¿Cuándo usas un TreeMap en lugar de un HashMap?',
      en: 'When do you use a TreeMap instead of a HashMap?',
    },
    answer: {
      es: 'Cuando necesitas las claves ordenadas, un rango o el sucesor. Cada operación cuesta log n en lugar de ser constante en promedio.',
      en: 'When you need the keys sorted, a range or the successor. Each operation costs log n instead of being constant on average.',
    },
    distractors: [
      {
        es: 'Cuando quieres evitar colisiones, porque TreeMap es siempre constante.',
        en: 'When you want to avoid collisions, because TreeMap is always constant.',
      },
      {
        es: 'Cuando las claves no implementan equals, porque compara por identidad.',
        en: 'When the keys do not implement equals, because it compares by identity.',
      },
    ],
    explanation: {
      es: 'HashMap no promete orden. Si solo quieres el orden de inserción, LinkedHashMap basta y sigue siendo una tabla hash.',
      en: 'HashMap promises no order. If you only want insertion order, LinkedHashMap is enough and it is still a hash table.',
    },
  },
  {
    id: 'th-dsa-13',
    topic: 'Estructuras',
    prompt: {
      es: '¿Qué dos órdenes ofrece LinkedHashMap?',
      en: 'What two orders does LinkedHashMap offer?',
    },
    answer: {
      es: 'Orden de inserción, que conserva cómo entraron las claves, y orden de acceso, que mueve al final cada lectura o escritura.',
      en: 'Insertion order, which keeps how the keys came in, and access order, which moves every read or write to the end.',
    },
    distractors: [
      {
        es: 'Orden natural de las claves y orden por el hash.',
        en: 'Natural key order and order by the hash.',
      },
      {
        es: 'Orden de inserción que ignora las claves repetidas, y un orden que solo cambia en remove.',
        en: 'An insertion order that ignores repeated keys, and an order that changes only on remove.',
      },
    ],
    explanation: {
      es: 'El modo acceso es la base de una caché LRU: lo que no se toca queda al principio y se puede expulsar.',
      en: 'Access mode is the base of an LRU cache: what is not touched stays at the front and can be evicted.',
    },
  },
  {
    id: 'th-dsa-14',
    topic: 'Estructuras',
    prompt: {
      es: '¿Qué diferencia hay entre HashSet, LinkedHashSet y TreeSet?',
      en: 'What is the difference between HashSet, LinkedHashSet and TreeSet?',
    },
    answer: {
      es: 'HashSet no promete orden y es constante en promedio. LinkedHashSet conserva la inserción. TreeSet ordena y cada operación es log n.',
      en: 'HashSet promises no order and is constant on average. LinkedHashSet keeps insertion order. TreeSet sorts and each operation is log n.',
    },
    distractors: [
      {
        es: 'Los tres ordenan igual y TreeSet además admite null como centinela.',
        en: 'All three sort the same way and TreeSet also allows null as a sentinel.',
      },
      {
        es: 'HashSet y TreeSet iteran por hashCode, y LinkedHashSet rebalancea en cada add.',
        en: 'HashSet and TreeSet iterate by hashCode, and LinkedHashSet rebalances on every add.',
      },
    ],
    explanation: {
      es: 'Elige por la pregunta que haces: pertenencia rápida, orden de llegada o claves ordenadas.',
      en: 'Choose by the question you ask: fast membership, arrival order or sorted keys.',
    },
  },
  {
    id: 'th-dsa-15',
    topic: 'Estructuras',
    prompt: {
      es: '¿Por qué recorrer un PriorityQueue no saca los elementos ordenados?',
      en: 'Why does iterating a PriorityQueue not yield the elements in sorted order?',
    },
    answer: {
      es: 'Porque por debajo es un heap. Solo la raíz es el mínimo o el máximo. El iterador no extrae ni reordena.',
      en: 'Because underneath it is a heap. Only the root is the minimum or the maximum. The iterator does not extract or reorder.',
    },
    distractors: [
      {
        es: 'Porque el comparador solo se aplica en peek y el iterador ordena como QuickSort.',
        en: 'Because the comparator is applied only on peek and the iterator sorts like QuickSort.',
      },
      {
        es: 'Porque implementa un conjunto ordenado y el iterador sigue el orden de inserción.',
        en: 'Because it implements a sorted set and the iterator follows insertion order.',
      },
    ],
    explanation: {
      es: 'Para obtenerlos ordenados hay que ir haciendo poll, que vacía la cola, o copiar y ordenar.',
      en: 'To get them sorted you must keep polling, which empties the queue, or copy and sort.',
    },
  },
  {
    id: 'th-dsa-16',
    topic: 'Estructuras',
    prompt: {
      es: '¿Qué gana una estructura inmutable al compartir partes que no cambian?',
      en: 'What does an immutable structure gain by sharing the parts that do not change?',
    },
    answer: {
      es: 'Una actualización copia solo el camino que cambia y reutiliza el resto. La versión vieja sigue siendo válida.',
      en: 'An update copies only the path that changes and reuses the rest. The old version stays valid.',
    },
    distractors: [
      {
        es: 'Se escribe a disco en cada cambio y así se evita el log.',
        en: 'It is written to disk on every change and that avoids the log.',
      },
      {
        es: 'Cada escritura copia la estructura entera.',
        en: 'Every write copies the whole structure.',
      },
    ],
    explanation: {
      es: 'Sin compartir, cada cambio de un mapa grande copiaría todos los elementos. Con compartir, el costo baja a log n nodos.',
      en: 'Without sharing, each change of a large map would copy every element. With sharing, the cost drops to log n nodes.',
    },
  },
  {
    id: 'th-dsa-17',
    topic: 'Estructuras',
    prompt: {
      es: '¿Para qué sirve un árbol de segmentos o un árbol de Fenwick?',
      en: 'What is a segment tree or a Fenwick tree for?',
    },
    answer: {
      es: 'Para responder una suma o un mínimo de un rango y actualizar un punto, los dos en log n, sin recorrer el arreglo entero.',
      en: 'To answer a range sum or a range minimum and to update a point, both in log n, without walking the whole array.',
    },
    distractors: [
      {
        es: 'Para responder cualquier rango en tiempo constante después de un preproceso.',
        en: 'To answer any range in constant time after a preprocess.',
      },
      {
        es: 'Para sustituir al heap y sacar el mínimo global en tiempo constante.',
        en: 'To replace the heap and take the global minimum in constant time.',
      },
    ],
    explanation: {
      es: 'Si el arreglo no cambia, hay opciones más simples. Estas estructuras valen cuando hay consultas y actualizaciones mezcladas.',
      en: 'If the array does not change, there are simpler options. These structures pay off when queries and updates are mixed.',
    },
  },
  {
    id: 'th-dsa-18',
    topic: 'Estructuras',
    prompt: {
      es: '¿Cómo se diferencian el encadenamiento y el direccionamiento abierto al resolver colisiones?',
      en: 'How do chaining and open addressing differ when resolving collisions?',
    },
    answer: {
      es: 'El encadenamiento cuelga una lista en el cubo. El abierto busca otro hueco dentro de la misma tabla.',
      en: 'Chaining hangs a list in the bucket. Open addressing looks for another free slot inside the same table.',
    },
    distractors: [
      {
        es: 'El encadenamiento calcula un segundo hash y el abierto concatena la clave, que es lo que hace HashMap.',
        en: 'Chaining computes a second hash and open addressing concatenates the key, which is what HashMap does.',
      },
      {
        es: 'El abierto nunca redimensiona y el encadenamiento rehashea al convertir el cubo en árbol.',
        en: 'Open addressing never resizes and chaining rehashes when the bucket becomes a tree.',
      },
    ],
    explanation: {
      es: 'HashMap de Java encadena. Muchos diccionarios modernos prueban huecos en un arreglo contiguo porque eso favorece la caché.',
      en: 'The Java HashMap chains. Many modern dictionaries probe slots in a contiguous array because that favours the cache.',
    },
  },
  {
    id: 'th-dsa-19',
    topic: 'Estructuras',
    prompt: {
      es: '¿Para qué sirve el hashing consistente en una caché distribuida?',
      en: 'What is consistent hashing for in a distributed cache?',
    },
    answer: {
      es: 'Para que al añadir o quitar un nodo solo se muevan las claves de ese tramo, no casi todas.',
      en: 'So that adding or removing a node moves only the keys of that slice, not almost every key.',
    },
    distractors: [
      {
        es: 'Para que dos claves iguales caigan siempre en el mismo cubo local.',
        en: 'So two equal keys always land in the same local bucket.',
      },
      {
        es: 'Para evitar colisiones entre nodos y rebalancear en tiempo constante.',
        en: 'To avoid collisions between nodes and rebalance in constant time.',
      },
    ],
    explanation: {
      es: 'El módulo clásico mueve casi todo cuando cambia el número de nodos. El anillo evita esa avalancha de fallos de caché.',
      en: 'Classic modulo moves almost everything when the node count changes. The ring avoids that stampede of cache misses.',
    },
  },
  {
    id: 'th-dsa-20',
    topic: 'Estructuras',
    prompt: {
      es: '¿Qué cambia en memoria si guardas muchos objetos campo a campo en arreglos separados?',
      en: 'What changes in memory if you store many objects field by field in separate arrays?',
    },
    answer: {
      es: 'El mismo campo de todos los objetos queda junto. Recorrer solo ese campo aprovecha la caché y las instrucciones vectoriales.',
      en: 'The same field of every object sits together. Scanning only that field uses the cache and vector instructions well.',
    },
    distractors: [
      {
        es: 'Siempre es más lento, porque hay que saltar el resto de campos del objeto.',
        en: 'It is always slower, because you must skip the rest of the object fields.',
      },
      {
        es: 'El objeto clásico siempre falla más en caché porque no cabe en un registro.',
        en: 'The classic object always misses cache more because it does not fit in a register.',
      },
    ],
    explanation: {
      es: 'Si casi siempre tocas el objeto entero, tener sus campos juntos sigue siendo mejor. La separación gana cuando el bucle mira un solo atributo.',
      en: 'If you almost always touch the whole object, keeping its fields together is still better. Splitting wins when the loop looks at a single attribute.',
    },
  },
];
