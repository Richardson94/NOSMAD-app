import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_JAVA_COLLECTIONS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-jcs-01',
    topic: 'Streams',
    prompt: {
      es: '¿Qué hace groupingBy?',
      en: 'What does groupingBy do?',
    },
    answer: {
      es: 'Agrupa los elementos en un mapa según una clave. Por defecto cada grupo es una lista, pero puedes pedir una suma, una cuenta u otro cálculo por grupo.',
      en: 'It groups elements into a map by a key. By default each group is a list, but you can ask for a sum, a count or another calculation per group.',
    },
    distractors: [
      {
        es: 'Siempre devuelve una lista por clave y el segundo argumento solo filtra antes de agrupar.',
        en: 'It always returns a list per key and the second argument only filters before grouping.',
      },
      {
        es: 'Devuelve un Optional por clave, vacío si el grupo no tiene elementos.',
        en: 'It returns an Optional per key, empty if the group has no elements.',
      },
    ],
    explanation: {
      es: 'groupingBy de departamento y la edad media da un mapa de departamento a número. Sin colector extra, el valor es una lista.',
      en: 'groupingBy department and average age gives a map from department to a number. Without an extra collector, the value is a list.',
    },
  },
  {
    id: 'be-jcs-02',
    topic: 'Streams',
    prompt: {
      es: '¿Qué pasa si toMap encuentra dos elementos con la misma clave?',
      en: 'What happens if toMap finds two elements with the same key?',
    },
    answer: {
      es: 'Lanza IllegalStateException si no le pasas cómo fusionar. El overload con tres argumentos recibe una función que combina los dos valores.',
      en: 'It throws IllegalStateException if you do not say how to merge. The three-argument overload takes a function that combines the two values.',
    },
    distractors: [
      {
        es: 'El último valor pisa al primero, igual que put, así que nunca falla.',
        en: 'The last value overwrites the first, same as put, so it never fails.',
      },
      {
        es: 'Ignora el duplicado y deja el primero sin avisar.',
        en: 'It ignores the duplicate and keeps the first one without warning.',
      },
    ],
    explanation: {
      es: 'Si quieres quedarte con el último, pasa una fusión que devuelve el segundo. No es el comportamiento por defecto.',
      en: 'If you want to keep the last one, pass a merge that returns the second. That is not the default behaviour.',
    },
  },
  {
    id: 'be-jcs-03',
    topic: 'Streams',
    prompt: {
      es: '¿Qué devuelve partitioningBy?',
      en: 'What does partitioningBy return?',
    },
    answer: {
      es: 'Un mapa con las claves true y false, aunque un lado esté vacío. Separa los elementos que cumplen el predicado de los que no.',
      en: 'A map with the keys true and false, even if one side is empty. It splits elements that match the predicate from those that do not.',
    },
    distractors: [
      {
        es: 'Solo la clave que tiene elementos, igual que un groupingBy de Boolean.',
        en: 'Only the key that has elements, same as a groupingBy of Boolean.',
      },
      {
        es: 'Un Optional con la lista de los que cumplen, vacío si no hay ninguno.',
        en: 'An Optional with the list of matches, empty if there are none.',
      },
    ],
    explanation: {
      es: 'A diferencia de groupingBy, las dos claves existen siempre. Sirve para un sí y un no claros.',
      en: 'Unlike groupingBy, both keys always exist. It fits a clear yes and no split.',
    },
  },
  {
    id: 'be-jcs-04',
    topic: 'Streams',
    prompt: {
      es: '¿Qué hace Collectors.joining con delimitador, prefijo y sufijo?',
      en: 'What does Collectors.joining do with a delimiter, a prefix and a suffix?',
    },
    answer: {
      es: 'Une los textos con el delimitador entre ellos y pone el prefijo y el sufijo una sola vez alrededor del resultado. Un stream vacío igual produce prefijo más sufijo.',
      en: 'It joins the texts with the delimiter between them and puts the prefix and the suffix once around the whole result. An empty stream still produces prefix plus suffix.',
    },
    distractors: [
      {
        es: 'Envuelve cada elemento por separado y luego los junta con el delimitador.',
        en: 'It wraps each element separately and then joins those pieces with the delimiter.',
      },
      {
        es: 'Si no hay elementos devuelve la cadena vacía y omite prefijo y sufijo.',
        en: 'If there are no elements it returns the empty string and skips the prefix and the suffix.',
      },
    ],
    explanation: {
      es: 'Con corchetes como envoltorio, cero elementos siguen viéndose como un par de corchetes, no como texto vacío.',
      en: 'With brackets as the wrapper, zero elements still look like a pair of brackets, not like empty text.',
    },
  },
  {
    id: 'be-jcs-05',
    topic: 'Streams',
    prompt: {
      es: '¿Cuál es la diferencia entre map y flatMap?',
      en: 'What is the difference between map and flatMap?',
    },
    answer: {
      es: 'map cambia cada elemento y deja un nivel. flatMap cambia cada elemento por un stream y los concatena, así que aplana una lista de listas.',
      en: 'map changes each element and keeps one level. flatMap changes each element into a stream and concatenates them, so it flattens a list of lists.',
    },
    distractors: [
      {
        es: 'map aplana solo si ve una colección dentro. flatMap es solo un map más rápido.',
        en: 'map flattens on its own if it sees a collection inside. flatMap is only a faster map.',
      },
      {
        es: 'flatMap recibe una colección y no debes llamar a stream dentro, o anidas un nivel de más.',
        en: 'flatMap takes a collection and you must not call stream inside, or you nest one extra level.',
      },
    ],
    explanation: {
      es: 'La función de flatMap tiene que devolver un Stream. Devolver la lista interna sin stream no compila.',
      en: 'The flatMap function must return a Stream. Returning the inner list without stream does not compile.',
    },
  },
  {
    id: 'be-jcs-06',
    topic: 'Streams',
    prompt: {
      es: '¿Cuál es la diferencia entre findFirst y findAny?',
      en: 'What is the difference between findFirst and findAny?',
    },
    answer: {
      es: 'Los dos devuelven un Optional y pueden parar sin ver todo el stream. findFirst respeta el orden. findAny puede devolver cualquiera, lo que ayuda en paralelo.',
      en: 'Both return an Optional and can stop without seeing the whole stream. findFirst respects order. findAny may return any element, which helps in parallel.',
    },
    distractors: [
      {
        es: 'findFirst lanza una excepción si el stream está vacío y findAny devuelve null.',
        en: 'findFirst throws if the stream is empty and findAny returns null.',
      },
      {
        es: 'En paralelo findFirst está prohibido y hay que usar findAny siempre.',
        en: 'In parallel findFirst is forbidden and you must always use findAny.',
      },
    ],
    explanation: {
      es: 'Un stream vacío da Optional vacío, no una excepción. La excepción sale si llamas get sobre ese vacío.',
      en: 'An empty stream gives an empty Optional, not an exception. The exception appears if you call get on that empty value.',
    },
  },
  {
    id: 'be-jcs-07',
    topic: 'Streams',
    prompt: {
      es: '¿Por qué iterate y generate suelen ir con limit?',
      en: 'Why are iterate and generate usually paired with limit?',
    },
    answer: {
      es: 'Porque no tienen fin. Sin limit, takeWhile o una operación que pare al encontrar algo, el terminal no termina.',
      en: 'Because they have no end. Without limit, takeWhile or an operation that stops when it finds something, the terminal never finishes.',
    },
    distractors: [
      {
        es: 'iterate para solo cuando vuelve al valor inicial, así que limit es opcional.',
        en: 'iterate stops when it returns to the start value, so limit is optional.',
      },
      {
        es: 'Si olvidas limit, generate lanza una excepción al instante.',
        en: 'If you forget limit, generate throws an exception immediately.',
      },
    ],
    explanation: {
      es: 'Hay una forma de iterate con una condición de parada, parecida a un for. La forma de un solo argumento no para sola.',
      en: 'There is a form of iterate with a stop condition, similar to a for loop. The one-argument form does not stop on its own.',
    },
  },
  {
    id: 'be-jcs-08',
    topic: 'Streams',
    prompt: {
      es: '¿Para qué sirve peek y por qué no debes usarlo para cambiar datos?',
      en: 'What is peek for and why should you not use it to change data?',
    },
    answer: {
      es: 'Para mirar elementos al pasar, sobre todo al depurar. Es perezoso: si el stream se corta antes, peek puede no verlos todos, y en paralelo corre en varios hilos.',
      en: 'To look at elements as they pass, mainly while debugging. It is lazy: if the stream stops early, peek may not see all of them, and in parallel it runs on several threads.',
    },
    distractors: [
      {
        es: 'Es el forEach intermedio y está garantizado sobre cada elemento, así que mutar ahí es correcto.',
        en: 'It is the intermediate forEach and it is guaranteed on every element, so mutating there is correct.',
      },
      {
        es: 'Se ejecuta en cuanto lo añades, antes de la operación terminal, por eso sirve para llenar una lista externa.',
        en: 'It runs as soon as you add it, before the terminal operation, which is why it is used to fill an external list.',
      },
    ],
    explanation: {
      es: 'Los efectos van en forEach, que es terminal. Incluso ahí, en paralelo hay que tener cuidado con el estado compartido.',
      en: 'Side effects belong in forEach, which is terminal. Even there, parallel streams need care with shared state.',
    },
  },
  {
    id: 'be-jcs-09',
    topic: 'Streams',
    prompt: {
      es: '¿Qué te da summarizingInt frente a averagingInt?',
      en: 'What do you get from summarizingInt compared with averagingInt?',
    },
    answer: {
      es: 'summarizingInt devuelve cuenta, suma, mínimo, máximo y media juntos. averagingInt devuelve solo la media, como double.',
      en: 'summarizingInt returns count, sum, min, max and average together. averagingInt returns only the average, as a double.',
    },
    distractors: [
      {
        es: 'averagingInt devuelve un int y summarizingInt un mapa con cinco entradas.',
        en: 'averagingInt returns an int and summarizingInt returns a map with five entries.',
      },
      {
        es: 'summarizingInt solo funciona dentro de groupingBy. Usado solo lanza una excepción.',
        en: 'summarizingInt only works inside groupingBy. Used alone it throws an exception.',
      },
    ],
    explanation: {
      es: 'La media de enteros sale como double, no como int. En un stream vacío la media es 0.',
      en: 'The average of ints comes back as a double, not as an int. On an empty stream the average is 0.',
    },
  },
  {
    id: 'be-jcs-10',
    topic: 'Orden',
    prompt: {
      es: '¿Qué invierte reversed al final de un Comparator con thenComparing?',
      en: 'What does reversed invert at the end of a Comparator with thenComparing?',
    },
    answer: {
      es: 'Invierte el comparador entero, no solo la última clave. Para bajar un solo campo, pasa el orden inverso en ese comparing.',
      en: 'It inverts the whole comparator, not only the last key. To sort one field descending, pass the reverse order on that comparing.',
    },
    distractors: [
      {
        es: 'Invierte solo la última clave y deja el resto ascendente, que es el uso documentado.',
        en: 'It inverts only the last key and leaves the rest ascending, which is the documented use.',
      },
      {
        es: 'No cambia el orden. Solo coloca los null al final.',
        en: 'It does not change the order. It only places nulls at the end.',
      },
    ],
    explanation: {
      es: 'nullsFirst y nullsLast envuelven otro comparador para poner los null en un extremo sin un fallo por null.',
      en: 'nullsFirst and nullsLast wrap another comparator to place nulls at one end without a null failure.',
    },
  },
  {
    id: 'be-jcs-11',
    topic: 'Streams',
    prompt: {
      es: '¿Qué implica sorted en un stream?',
      en: 'What does sorted imply on a stream?',
    },
    answer: {
      es: 'Tiene que ver todos los elementos antes de emitir el primero, así que los guarda y luego ordena. Sobre una fuente infinita sin limit no termina.',
      en: 'It must see every element before it emits the first one, so it buffers and then sorts. On an infinite source without limit it does not finish.',
    },
    distractors: [
      {
        es: 'Ordena de uno en uno como filter, así que puede ordenar un stream infinito.',
        en: 'It sorts one by one like filter, so it can sort an infinite stream.',
      },
      {
        es: 'Es una operación terminal y devuelve la lista ya ordenada.',
        en: 'It is a terminal operation and returns the list already sorted.',
      },
    ],
    explanation: {
      es: 'En objetos, los elementos iguales suelen conservar su orden relativo. No cuentes con eso en un arreglo de primitivos.',
      en: 'For objects, equal elements usually keep their relative order. Do not count on that for a primitive array.',
    },
  },
  {
    id: 'be-jcs-12',
    topic: 'Streams',
    prompt: {
      es: '¿Cómo decide distinct que dos elementos son el mismo?',
      en: 'How does distinct decide that two elements are the same?',
    },
    answer: {
      es: 'Con equals y un hashCode coherente. No usa la referencia ni el comparador de un sorted anterior.',
      en: 'With equals and a consistent hashCode. It does not use reference identity or the comparator from a previous sorted.',
    },
    distractors: [
      {
        es: 'Compara con ==, así que dos objetos iguales creados aparte pasan los dos.',
        en: 'It compares with ==, so two equal objects created apart both pass.',
      },
      {
        es: 'Usa el Comparator del sorted previo, así defines unicidad sin tocar equals.',
        en: 'It uses the Comparator from a previous sorted, so you define uniqueness without touching equals.',
      },
    ],
    explanation: {
      es: 'Si equals y hashCode no coinciden, distinct puede dejarte duplicados o perder elementos. No hay un distinct por un solo campo.',
      en: 'If equals and hashCode disagree, distinct can leave duplicates or drop elements. There is no distinct by a single field.',
    },
  },
  {
    id: 'be-jcs-13',
    topic: 'Listas',
    prompt: {
      es: '¿Se puede modificar la lista que devuelve un collect con toList?',
      en: 'Can you modify the list returned by a collect with toList?',
    },
    answer: {
      es: 'Collectors.toList, en la práctica, devuelve un ArrayList al que puedes hacer add. Stream.toList devuelve una lista que rechaza las modificaciones.',
      en: 'Collectors.toList, in practice, returns an ArrayList you can add to. Stream.toList returns a list that rejects modifications.',
    },
    distractors: [
      {
        es: 'Las dos son inmutables desde hace tiempo y add lanza en ambas.',
        en: 'Both have been immutable for a long time and add throws on both.',
      },
      {
        es: 'Stream.toList sigue siendo un ArrayList. La inmutable es solo Collections.unmodifiableList.',
        en: 'Stream.toList is still an ArrayList. The unmodifiable one is only Collections.unmodifiableList.',
      },
    ],
    explanation: {
      es: 'Si el contrato debe impedir cambios, usa Stream.toList o toUnmodifiableList. No te fíes de que toList del colector siga siendo mutable en cualquier implementación.',
      en: 'If the contract must forbid changes, use Stream.toList or toUnmodifiableList. Do not rely on the collector toList staying mutable in every implementation.',
    },
  },
  {
    id: 'be-jcs-14',
    topic: 'Mapas',
    prompt: {
      es: '¿Para qué sirve computeIfAbsent?',
      en: 'What is computeIfAbsent for?',
    },
    answer: {
      es: 'Calcula el valor solo si la clave no está y lo guarda. El uso típico es crear la lista de un grupo la primera vez y luego añadir el elemento.',
      en: 'It computes the value only if the key is missing and stores it. The typical use is to create a group list the first time and then add the element.',
    },
    distractors: [
      {
        es: 'Siempre ejecuta la función y pisa el valor anterior, igual que put.',
        en: 'It always runs the function and overwrites the previous value, same as put.',
      },
      {
        es: 'putIfAbsent con un new ArrayList es igual, porque tampoco crea la lista si la clave ya existe.',
        en: 'putIfAbsent with a new ArrayList is the same, because it also skips creating the list if the key already exists.',
      },
    ],
    explanation: {
      es: 'putIfAbsent evalúa el valor antes de la llamada, así que el ArrayList se crea siempre. computeIfAbsent no.',
      en: 'putIfAbsent evaluates the value before the call, so the ArrayList is always created. computeIfAbsent does not.',
    },
  },
  {
    id: 'be-jcs-15',
    topic: 'Listas',
    prompt: {
      es: '¿Por qué falla borrar un elemento dentro de un for-each sobre un ArrayList?',
      en: 'Why does removing an element inside a for-each over an ArrayList fail?',
    },
    answer: {
      es: 'El iterador detecta el cambio y lanza ConcurrentModificationException, aunque sea un solo hilo. La forma correcta es removeIf o el remove del iterador.',
      en: 'The iterator detects the change and throws ConcurrentModificationException, even on one thread. The right way is removeIf or the iterator remove.',
    },
    distractors: [
      {
        es: 'Esa excepción solo sale si otro hilo modifica la lista. En un hilo, remove dentro del for es seguro.',
        en: 'That exception only appears if another thread changes the list. On one thread, remove inside the for is safe.',
      },
      {
        es: 'filter y collect hacen lo mismo que removeIf y borran de la lista original.',
        en: 'filter and collect do the same as removeIf and delete from the original list.',
      },
    ],
    explanation: {
      es: 'removeIf recorre y compacta en una pasada. Un stream filtrado produce otra lista y no toca la fuente.',
      en: 'removeIf walks and compacts in one pass. A filtered stream produces another list and does not touch the source.',
    },
  },
  {
    id: 'be-jcs-16',
    topic: 'Listas',
    prompt: {
      es: '¿Qué diferencia hay entre List.copyOf y una lista no modificable de Collections?',
      en: 'What is the difference between List.copyOf and an unmodifiable list from Collections?',
    },
    answer: {
      es: 'copyOf copia a una lista que no se puede cambiar y rechaza null. unmodifiableList es solo una vista: si cambias la lista original, la vista lo refleja.',
      en: 'copyOf copies into a list that cannot be changed and it rejects null. unmodifiableList is only a view: if you change the original list, the view shows it.',
    },
    distractors: [
      {
        es: 'Las dos copian y congelan la original, así que un add posterior en la fuente no se ve.',
        en: 'Both copy and freeze the original, so a later add on the source is not visible.',
      },
      {
        es: 'copyOf siempre es una vista, igual que unmodifiableList.',
        en: 'copyOf is always a view, just like unmodifiableList.',
      },
    ],
    explanation: {
      es: 'Para publicar una instantánea usa copyOf o un ArrayList nuevo. No entregues la vista de una lista que sigues mutando.',
      en: 'To publish a snapshot use copyOf or a new ArrayList. Do not hand out the view of a list you still mutate.',
    },
  },
  {
    id: 'be-jcs-17',
    topic: 'Orden',
    prompt: {
      es: '¿Ordenar una lista de objetos conserva el orden de los empates?',
      en: 'Does sorting a list of objects keep the order of ties?',
    },
    answer: {
      es: 'Sí: si dos objetos comparan igual, suelen quedar en el orden en que estaban. Un arreglo de primitivos no promete eso.',
      en: 'Yes: if two objects compare equal, they usually stay in the order they had. A primitive array does not promise that.',
    },
    distractors: [
      {
        es: 'Ni objetos ni primitivos conservan el orden. thenComparing existe para reparar ese desorden.',
        en: 'Neither objects nor primitives keep the order. thenComparing exists to repair that disorder.',
      },
      {
        es: 'Los primitivos también son estables desde hace años, así que int y Integer se comportan igual.',
        en: 'Primitives have also been stable for years, so int and Integer behave the same.',
      },
    ],
    explanation: {
      es: 'List.sort va por el camino de objetos. Si el empate importa, no ordenes el arreglo primitivo y esperes el mismo resultado.',
      en: 'List.sort uses the object path. If the tie matters, do not sort the primitive array and expect the same result.',
    },
  },
  {
    id: 'be-jcs-18',
    topic: 'Mapas',
    prompt: {
      es: '¿Cuándo usas un TreeMap en lugar de un HashMap?',
      en: 'When do you use a TreeMap instead of a HashMap?',
    },
    answer: {
      es: 'Cuando necesitas las claves ordenadas o la clave más cercana, por ejemplo la tarifa vigente en una fecha. HashMap no ordena y no responde esa pregunta.',
      en: 'When you need the keys sorted or the nearest key, for example the tariff valid on a date. HashMap does not sort and cannot answer that question.',
    },
    distractors: [
      {
        es: 'Siempre, porque TreeMap es más rápido para cualquier búsqueda por clave.',
        en: 'Always, because TreeMap is faster for any lookup by key.',
      },
      {
        es: 'Cuando quieres null como clave. TreeMap lo admite y HashMap no.',
        en: 'When you want null as a key. TreeMap allows it and HashMap does not.',
      },
    ],
    explanation: {
      es: 'floorKey devuelve la mayor clave menor o igual a la pedida, o null si no hay. La comparación debe ser coherente, o el mapa se comporta mal.',
      en: 'floorKey returns the greatest key less than or equal to the one you ask, or null if there is none. The comparison must be consistent, or the map misbehaves.',
    },
  },
  {
    id: 'be-jcs-19',
    topic: 'Listas',
    prompt: {
      es: '¿Collections.unmodifiableList copia la lista o solo la envuelve?',
      en: 'Does Collections.unmodifiableList copy the list or only wrap it?',
    },
    answer: {
      es: 'Solo la envuelve. add sobre la vista lanza, pero si mutas la lista de detrás, la vista muestra esos cambios.',
      en: 'It only wraps it. add on the view throws, but if you mutate the list behind it, the view shows those changes.',
    },
    distractors: [
      {
        es: 'Copia los elementos, así que la fuente puede cambiar sin que se note.',
        en: 'It copies the elements, so the source can change without anyone noticing.',
      },
      {
        es: 'Es lo mismo que List.of: congela también la lista original y rechaza null.',
        en: 'It is the same as List.of: it also freezes the original list and rejects null.',
      },
    ],
    explanation: {
      es: 'List.of y List.copyOf sí son instantáneas no modificables y no aceptan null. La vista de Collections sí puede contener null.',
      en: 'List.of and List.copyOf are real unmodifiable snapshots and do not accept null. The Collections view can still contain null.',
    },
  },
  {
    id: 'be-jcs-20',
    topic: 'Streams',
    prompt: {
      es: '¿Qué pasa si usas un stream que ya consumiste?',
      en: 'What happens if you use a stream you already consumed?',
    },
    answer: {
      es: 'La segunda operación terminal lanza IllegalStateException. Además, una lambda que modifica un contador o una lista de fuera puede dar resultados malos, sobre todo en paralelo.',
      en: 'The second terminal operation throws IllegalStateException. Also, a lambda that changes a counter or a list from outside can give wrong results, especially in parallel.',
    },
    distractors: [
      {
        es: 'Se puede recorrer otra vez mientras la colección original exista.',
        en: 'It can be traversed again as long as the original collection still exists.',
      },
      {
        es: 'El estado en la lambda es válido en un stream secuencial y solo falla en parallelStream.',
        en: 'State in the lambda is valid on a sequential stream and only fails on parallelStream.',
      },
    ],
    explanation: {
      es: 'Si necesitas dos resultados, crea dos streams desde la fuente. Para los primeros n elementos usa limit, no un contador dentro de filter.',
      en: 'If you need two results, create two streams from the source. For the first n elements use limit, not a counter inside filter.',
    },
  },
];
