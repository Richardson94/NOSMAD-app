import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_DATA_STRUCTURES_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-ds-01',
    topic: 'Complejidad',
    prompt: {
      es: '¿Qué significa que insertar al final de un ArrayList sea O(1) amortizado?',
      en: 'What does it mean that appending to an ArrayList is amortised O(1)?',
    },
    answer: {
      es: 'Algunas inserciones cuestan O(n) por el redimensionado, pero el costo promedio por operación sigue siendo constante.',
      en: 'Some insertions cost O(n) due to resizing, but the average cost per operation stays constant.',
    },
    distractors: [
      {
        es: 'Que en el caso promedio es O(1) y en el peor caso es O(log n) según la política de crecimiento.',
        en: 'That the average case is O(1) and the worst case is O(log n) depending on the growth policy.',
      },
      {
        es: 'Que es O(1) siempre que la lista se haya creado con capacidad inicial suficiente.',
        en: 'That it is O(1) as long as the list was created with enough initial capacity.',
      },
    ],
    explanation: {
      es: 'Amortizado se refiere al costo total de una secuencia de operaciones repartido entre ellas: al duplicar la capacidad, las copias ocurren cada vez menos seguido y la suma de n inserciones es O(n). No es lo mismo que caso promedio (que habla de distribución de entradas) ni depende de preasignar, aunque preasignar evita las copias intermedias.',
      en: 'Amortised refers to the total cost of a sequence of operations spread across them: by doubling capacity, copies happen less and less often and the sum of n insertions is O(n). It is not the same as average case (which is about input distribution) nor does it depend on pre-sizing, although pre-sizing avoids the intermediate copies.',
    },
  },
  {
    id: 'th-ds-02',
    topic: 'Tablas hash',
    prompt: {
      es: 'En Java, ¿qué ocurre si dos objetos iguales según equals devuelven hashCode distinto y se usan como clave de un HashMap?',
      en: 'In Java, what happens if two objects equal per equals return different hashCode values and are used as HashMap keys?',
    },
    answer: {
      es: 'Pueden caer en buckets distintos y el mapa guardará entradas duplicadas que no se podrán recuperar.',
      en: 'They may land in different buckets and the map will store duplicate entries that cannot be retrieved.',
    },
    distractors: [
      {
        es: 'El mapa detecta la igualdad al recorrer el bucket y sobrescribe la entrada existente.',
        en: 'The map detects equality while scanning the bucket and overwrites the existing entry.',
      },
      {
        es: 'La búsqueda degrada a O(n) porque el mapa debe comparar con equals contra todas las claves.',
        en: 'Lookups degrade to O(n) because the map has to compare with equals against every key.',
      },
    ],
    explanation: {
      es: 'El contrato exige que objetos iguales tengan el mismo hashCode. Si se rompe, el mapa busca en el bucket derivado del hash y nunca llega al bucket donde quedó la otra entrada, así que get devuelve null y el "duplicado" permanece. La degradación a O(n) es el síntoma del caso contrario: un hashCode constante que apila todo en un bucket.',
      en: 'The contract requires equal objects to share the same hashCode. If it is broken, the map searches the bucket derived from the hash and never reaches the bucket holding the other entry, so get returns null and the "duplicate" stays. Degrading to O(n) is the symptom of the opposite case: a constant hashCode piling everything into one bucket.',
    },
  },
  {
    id: 'th-ds-03',
    topic: 'Estructuras de datos',
    prompt: {
      es: '¿Cuándo conviene una LinkedList sobre un ArrayList en Java?',
      en: 'When is a LinkedList preferable to an ArrayList in Java?',
    },
    answer: {
      es: 'Casi nunca; solo cuando se inserta o elimina de forma intensiva por los extremos, usándola como cola o deque.',
      en: 'Almost never; only for intensive insertion or removal at the ends, using it as a queue or deque.',
    },
    distractors: [
      {
        es: 'Cuando hay muchas inserciones y borrados en posiciones intermedias, porque no requiere desplazar elementos.',
        en: 'When there are many insertions and deletions at middle positions, because it does not shift elements.',
      },
      {
        es: 'Cuando la colección crece mucho, porque evita el costo de redimensionar el arreglo interno.',
        en: 'When the collection grows a lot, because it avoids the cost of resizing the internal array.',
      },
    ],
    explanation: {
      es: 'Insertar en el medio de una LinkedList requiere primero recorrerla hasta la posición, así que sigue siendo O(n) y con muchísima peor localidad de caché que desplazar memoria contigua con System.arraycopy. El sobrecosto de un nodo por elemento suele pesar más que el redimensionado, que además es amortizado.',
      en: 'Inserting in the middle of a LinkedList first requires walking to the position, so it is still O(n) and with far worse cache locality than shifting contiguous memory via System.arraycopy. The per-node overhead usually costs more than resizing, which is amortised anyway.',
    },
  },
  {
    id: 'th-ds-04',
    topic: 'Complejidad',
    prompt: {
      es: 'Un algoritmo recorre una lista de n elementos y, para cada uno, hace una búsqueda binaria en otra lista ordenada de m elementos. ¿Cuál es su complejidad?',
      en: 'An algorithm iterates a list of n elements and, for each one, runs a binary search on another sorted list of m elements. What is its complexity?',
    },
    answer: {
      es: 'O(n log m)',
      en: 'O(n log m)',
    },
    distractors: [
      {
        es: 'O(n log n)',
        en: 'O(n log n)',
      },
      {
        es: 'O(n + log m)',
        en: 'O(n + log m)',
      },
    ],
    explanation: {
      es: 'El trabajo se multiplica porque la búsqueda ocurre dentro del bucle: n iteraciones por log m comparaciones cada una. Escribir log n confunde los tamaños de las dos colecciones, y sumar en lugar de multiplicar correspondería a hacer una sola búsqueda fuera del recorrido.',
      en: 'The work multiplies because the search happens inside the loop: n iterations times log m comparisons each. Writing log n confuses the sizes of the two collections, and adding instead of multiplying would correspond to a single search performed outside the loop.',
    },
  },
  {
    id: 'th-ds-05',
    topic: 'Estructuras de datos',
    prompt: {
      es: 'Necesitas obtener siempre el elemento de mayor prioridad de una colección que cambia constantemente. ¿Qué estructura es la adecuada?',
      en: 'You need to always retrieve the highest-priority element from a constantly changing collection. Which structure fits?',
    },
    answer: {
      es: 'Un heap binario, con inserción y extracción del máximo en O(log n).',
      en: 'A binary heap, with insertion and max extraction in O(log n).',
    },
    distractors: [
      {
        es: 'Un árbol binario de búsqueda balanceado, porque mantiene todos los elementos ordenados en O(1).',
        en: 'A balanced binary search tree, because it keeps every element sorted in O(1).',
      },
      {
        es: 'Una lista ordenada por prioridad, porque la extracción del primero es O(1).',
        en: 'A priority-sorted list, because extracting the first element is O(1).',
      },
    ],
    explanation: {
      es: 'El heap solo mantiene el invariante necesario (la raíz es el máximo), por eso inserta y extrae en O(log n) con memoria contigua. Un árbol balanceado también resuelve el problema en O(log n), pero mantener el orden total no es gratis ni O(1). La lista ordenada extrae rápido pero cada inserción cuesta O(n).',
      en: 'A heap only maintains the invariant it needs (the root is the maximum), which is why it inserts and extracts in O(log n) with contiguous memory. A balanced tree also solves it in O(log n), but keeping a total order is neither free nor O(1). The sorted list extracts fast, yet every insertion costs O(n).',
    },
  },
  {
    id: 'th-ds-06',
    topic: 'Concurrencia',
    prompt: {
      es: '¿Qué diferencia a ConcurrentHashMap de un HashMap envuelto con Collections.synchronizedMap?',
      en: 'What differentiates ConcurrentHashMap from a HashMap wrapped with Collections.synchronizedMap?',
    },
    answer: {
      es: 'ConcurrentHashMap bloquea por segmento o nodo, así que permite lecturas y escrituras concurrentes sin serializar todo el mapa.',
      en: 'ConcurrentHashMap locks per segment or node, allowing concurrent reads and writes without serialising the whole map.',
    },
    distractors: [
      {
        es: 'ConcurrentHashMap hace que cada operación sea atómica y además garantiza que iterar sobre él sea atómico.',
        en: 'ConcurrentHashMap makes every operation atomic and also guarantees that iterating over it is atomic.',
      },
      {
        es: 'ConcurrentHashMap acepta claves nulas y el mapa sincronizado no, porque necesita comparar con equals.',
        en: 'ConcurrentHashMap accepts null keys while the synchronized map does not, because it must compare with equals.',
      },
    ],
    explanation: {
      es: 'El envoltorio sincronizado usa un único cerrojo para todo, convirtiendo el mapa en un cuello de botella. ConcurrentHashMap usa granularidad fina y sus iteradores son débilmente consistentes, es decir que no son atómicos ni lanzan ConcurrentModificationException. Además es al revés con los nulos: ConcurrentHashMap los prohíbe.',
      en: 'The synchronized wrapper uses a single lock for everything, turning the map into a bottleneck. ConcurrentHashMap uses fine-grained locking and its iterators are weakly consistent, meaning they are not atomic and do not throw ConcurrentModificationException. Nulls are also the other way around: ConcurrentHashMap forbids them.',
    },
  },
  {
    id: 'th-ds-07',
    topic: 'Algoritmos',
    prompt: {
      es: '¿Por qué QuickSort suele superar a MergeSort en la práctica pese a tener peor caso O(n²)?',
      en: 'Why does QuickSort usually beat MergeSort in practice despite its O(n²) worst case?',
    },
    answer: {
      es: 'Porque ordena en el lugar con excelente localidad de caché y su peor caso es improbable con buena elección de pivote.',
      en: 'Because it sorts in place with excellent cache locality and its worst case is unlikely with good pivot selection.',
    },
    distractors: [
      {
        es: 'Porque su complejidad promedio es O(n) mientras MergeSort siempre necesita O(n log n) comparaciones.',
        en: 'Because its average complexity is O(n) while MergeSort always needs O(n log n) comparisons.',
      },
      {
        es: 'Porque es estable y por eso evita mover elementos equivalentes, ahorrando escrituras en memoria.',
        en: 'Because it is stable and therefore avoids moving equivalent elements, saving memory writes.',
      },
    ],
    explanation: {
      es: 'Ambos son O(n log n) en promedio; la ventaja de QuickSort es constante: no necesita el arreglo auxiliar O(n) de MergeSort y trabaja sobre memoria contigua. Ningún algoritmo de ordenamiento por comparación baja de O(n log n), y la estabilidad es justamente una propiedad de MergeSort, no de QuickSort.',
      en: 'Both are O(n log n) on average; QuickSort advantage is in the constants: it does not need MergeSort O(n) auxiliary array and works on contiguous memory. No comparison sort goes below O(n log n), and stability is precisely a MergeSort property, not a QuickSort one.',
    },
  },
  {
    id: 'th-ds-08',
    topic: 'Complejidad espacial',
    prompt: {
      es: '¿Qué complejidad espacial tiene una función recursiva que procesa un árbol binario balanceado de n nodos visitando ambos hijos?',
      en: 'What space complexity does a recursive function have when it processes a balanced binary tree of n nodes visiting both children?',
    },
    answer: {
      es: 'O(log n), por la profundidad de la pila de llamadas.',
      en: 'O(log n), because of the call stack depth.',
    },
    distractors: [
      {
        es: 'O(n), porque cada nodo genera un marco de pila durante el recorrido.',
        en: 'O(n), because every node creates a stack frame during the traversal.',
      },
      {
        es: 'O(1), porque la recursión no reserva memoria adicional en el heap.',
        en: 'O(1), because recursion does not allocate additional heap memory.',
      },
    ],
    explanation: {
      es: 'Solo los marcos de la rama en curso coexisten en la pila, y en un árbol balanceado esa profundidad es log n; los marcos se liberan al regresar. Sería O(n) si el árbol estuviera degenerado en lista. Y aunque no se use el heap, la pila sí es memoria adicional que cuenta en el análisis.',
      en: 'Only the frames of the current branch coexist on the stack, and in a balanced tree that depth is log n; frames are released on return. It would be O(n) if the tree degenerated into a list. And even though the heap is untouched, the stack is still additional memory that counts in the analysis.',
    },
  },
];
