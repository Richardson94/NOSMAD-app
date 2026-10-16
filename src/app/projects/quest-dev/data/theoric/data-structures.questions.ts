import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_DATA_STRUCTURES_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-ds-01',
    topic: 'Estructuras',
    prompt: {
      es: '¿Cuándo se pone lento añadir al final de un ArrayList, si normalmente es rápido?',
      en: 'Appending to an ArrayList is usually fast. When does it get slow?',
    },
    answer: {
      es: 'Cuando el arreglo interno se llena y hay que copiarlo a uno más grande. La mayoría de los adds siguen siendo baratos.',
      en: 'When the internal array is full and it must be copied into a larger one. Most adds stay cheap.',
    },
    distractors: [
      {
        es: 'Siempre es log n, porque crece duplicando la capacidad.',
        en: 'It is always log n, because it grows by doubling capacity.',
      },
      {
        es: 'Es constante solo si creaste la lista con capacidad inicial suficiente. Si no, cada add es lineal.',
        en: 'It is constant only if you created the list with enough initial capacity. Otherwise every add is linear.',
      },
    ],
    explanation: {
      es: 'Las copias ocurren cada vez menos seguido. Reservar capacidad evita esas copias, pero no cambia que un add normal sea directo al final.',
      en: 'Copies happen less and less often. Reserving capacity avoids those copies, but a normal add is still a direct write at the end.',
    },
  },
  {
    id: 'th-ds-02',
    topic: 'Estructuras',
    prompt: {
      es: '¿Qué pasa si usas como clave dos objetos iguales según equals pero con hashCode distinto?',
      en: 'Two objects are equal according to equals but their hashCode differs. What happens if you use them as keys?',
    },
    answer: {
      es: 'Pueden caer en cubos distintos. El mapa guarda las dos entradas y luego no encuentra la que buscas.',
      en: 'They can land in different buckets. The map stores both entries and later cannot find the one you look up.',
    },
    distractors: [
      {
        es: 'El mapa detecta la igualdad y sobrescribe la entrada.',
        en: 'The map detects the equality and overwrites the entry.',
      },
      {
        es: 'La búsqueda se vuelve lineal porque compara todas las claves con equals.',
        en: 'The lookup becomes linear because it compares every key with equals.',
      },
    ],
    explanation: {
      es: 'Objetos iguales deben tener el mismo hash. Un hash constante es el caso contrario: todo cae en un cubo y la búsqueda se degrada.',
      en: 'Equal objects must share the same hash. A constant hash is the opposite case: everything lands in one bucket and lookup degrades.',
    },
  },
  {
    id: 'th-ds-03',
    topic: 'Estructuras',
    prompt: {
      es: '¿Cuándo conviene una LinkedList frente a un ArrayList?',
      en: 'When is a LinkedList a better fit than an ArrayList?',
    },
    answer: {
      es: 'Casi nunca. Tiene sentido si insertas y quitas mucho por los extremos y la usas como cola.',
      en: 'Almost never. It makes sense if you insert and remove a lot at the ends and you use it as a queue.',
    },
    distractors: [
      {
        es: 'Cuando hay muchas inserciones en el medio, porque no desplaza elementos.',
        en: 'When there are many insertions in the middle, because it does not shift elements.',
      },
      {
        es: 'Cuando la colección crece mucho, porque evita redimensionar el arreglo.',
        en: 'When the collection grows a lot, because it avoids resizing the array.',
      },
    ],
    explanation: {
      es: 'Llegar al medio de una lista enlazada ya es un recorrido. El arreglo tiene mejor localidad de memoria en casi todos los casos.',
      en: 'Reaching the middle of a linked list is already a walk. The array has better memory locality in almost every case.',
    },
  },
  {
    id: 'th-ds-04',
    topic: 'Estructuras',
    prompt: {
      es: '¿Cuál es el costo si recorres n elementos y, por cada uno, buscas en una lista ordenada de m?',
      en: 'You walk n elements and, for each one, you search a sorted list of m. What is the cost?',
    },
    answer: {
      es: 'O(n log m). La búsqueda binaria va dentro del bucle, así que los costos se multiplican.',
      en: 'O(n log m). The binary search sits inside the loop, so the costs multiply.',
    },
    distractors: [
      {
        es: 'O(n log n), porque toda búsqueda binaria es log del tamaño total.',
        en: 'O(n log n), because every binary search is log of the total size.',
      },
      {
        es: 'O(n + log m), porque se suman el recorrido y la búsqueda.',
        en: 'O(n + log m), because the walk and the search are added.',
      },
    ],
    explanation: {
      es: 'Sumar correspondería a una sola búsqueda fuera del bucle. Aquí hay una búsqueda por cada elemento.',
      en: 'Adding would match a single search outside the loop. Here there is one search per element.',
    },
  },
  {
    id: 'th-ds-05',
    topic: 'Estructuras',
    prompt: {
      es: '¿Qué estructura usas si siempre necesitas el elemento de mayor prioridad y la colección cambia todo el tiempo?',
      en: 'You always need the highest priority element and the collection keeps changing. Which structure do you use?',
    },
    answer: {
      es: 'Un heap, o una cola de prioridad. Insertar y sacar el máximo es log n.',
      en: 'A heap, or a priority queue. Inserting and taking the maximum is log n.',
    },
    distractors: [
      {
        es: 'Un árbol balanceado, porque mantiene todo ordenado en tiempo constante.',
        en: 'A balanced tree, because it keeps everything sorted in constant time.',
      },
      {
        es: 'Una lista ordenada, porque sacar el primero es constante.',
        en: 'A sorted list, because taking the first element is constant.',
      },
    ],
    explanation: {
      es: 'La lista saca rápido, pero cada inserción recorre. El heap solo garantiza que la raíz es el máximo, y con eso basta.',
      en: 'The list takes the top fast, but every insertion walks. The heap only guarantees that the root is the maximum, and that is enough.',
    },
  },
  {
    id: 'th-ds-06',
    topic: 'Estructuras',
    prompt: {
      es: '¿Qué diferencia hay entre ConcurrentHashMap y un HashMap sincronizado entero?',
      en: 'What is the difference between ConcurrentHashMap and a fully synchronized HashMap?',
    },
    answer: {
      es: 'ConcurrentHashMap permite lecturas y escrituras concurrentes con bloqueo fino. El mapa sincronizado usa un solo cerrojo para todo.',
      en: 'ConcurrentHashMap allows concurrent reads and writes with fine grained locking. The synchronized map uses one lock for everything.',
    },
    distractors: [
      {
        es: 'ConcurrentHashMap hace que recorrer el mapa sea una foto atómica.',
        en: 'ConcurrentHashMap makes walking the map an atomic snapshot.',
      },
      {
        es: 'ConcurrentHashMap acepta claves nulas y el sincronizado no.',
        en: 'ConcurrentHashMap accepts null keys and the synchronized one does not.',
      },
    ],
    explanation: {
      es: 'El cerrojo único convierte el mapa en un cuello de botella. ConcurrentHashMap no admite null y su iterador no es una foto consistente.',
      en: 'A single lock turns the map into a bottleneck. ConcurrentHashMap does not allow null and its iterator is not a consistent snapshot.',
    },
  },
  {
    id: 'th-ds-07',
    topic: 'Estructuras',
    prompt: {
      es: '¿Por qué QuickSort suele ir más rápido que MergeSort en la práctica?',
      en: 'Why does QuickSort usually run faster than MergeSort in practice?',
    },
    answer: {
      es: 'Porque ordena en el mismo arreglo y aprovecha la caché. Con un buen pivote el peor caso cuadrático casi no aparece.',
      en: 'Because it sorts in the same array and uses the cache well. With a good pivot the quadratic worst case almost never shows up.',
    },
    distractors: [
      {
        es: 'Porque en promedio es lineal y MergeSort siempre es n log n.',
        en: 'Because on average it is linear and MergeSort is always n log n.',
      },
      {
        es: 'Porque es estable y no mueve elementos iguales.',
        en: 'Because it is stable and does not move equal elements.',
      },
    ],
    explanation: {
      es: 'Los dos son n log n en el caso habitual. MergeSort necesita un arreglo extra y es el que conserva el orden de los iguales.',
      en: 'Both are n log n in the usual case. MergeSort needs an extra array and it is the one that keeps the order of equal elements.',
    },
  },
  {
    id: 'th-ds-08',
    topic: 'Estructuras',
    prompt: {
      es: '¿Cuánta pila usa una función recursiva que recorre un árbol binario balanceado?',
      en: 'A recursive function walks a balanced binary tree. How much stack does it use?',
    },
    answer: {
      es: 'Del orden de log n, porque solo están vivos los marcos de la rama actual y la altura es logarítmica.',
      en: 'On the order of log n, because only the frames of the current branch are alive and the height is logarithmic.',
    },
    distractors: [
      {
        es: 'O(n), porque cada nodo crea un marco.',
        en: 'O(n), because every node creates a frame.',
      },
      {
        es: 'O(1), porque la recursión no reserva memoria en el heap.',
        en: 'O(1), because recursion does not allocate memory on the heap.',
      },
    ],
    explanation: {
      es: 'Los marcos se liberan al volver. Si el árbol está degenerado en una lista, la pila sí llega a n.',
      en: 'Frames are released on return. If the tree has degenerated into a list, the stack does reach n.',
    },
  },
];
