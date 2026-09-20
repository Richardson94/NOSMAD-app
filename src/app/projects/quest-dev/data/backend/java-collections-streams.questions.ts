import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_JAVA_COLLECTIONS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-jcs-01',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿Qué produce Collectors.groupingBy(classifier, downstream) en los valores del mapa?',
      en: 'What does Collectors.groupingBy(classifier, downstream) produce in the map values?',
    },
    answer: {
      es: 'El resultado de aplicar el colector aguas abajo a cada grupo, no necesariamente una List.',
      en: 'The result of applying the downstream collector to each group, not necessarily a List.',
    },
    distractors: [
      {
        es: 'Siempre una List por clave, porque el colector aguas abajo solo filtra elementos antes de agruparlos.',
        en: 'Always a List per key, because the downstream collector only filters elements before grouping them.',
      },
      {
        es: 'Un Optional por clave, igual que reducing, vacío cuando el grupo no tiene elementos.',
        en: 'An Optional per key, same as reducing, empty when the group has no elements.',
      },
    ],
    explanation: {
      es: 'Collectors.groupingBy(Function, Collector) clasifica y luego reduce cada cubeta con el colector aguas abajo: groupingBy(Person::dept, averagingInt(Person::age)) rinde Map a Double. groupingBy(fn) es azúcar de groupingBy(fn, toList()). El Optional aparece en reducing o maxBy, no en groupingBy.',
      en: 'Collectors.groupingBy(Function, Collector) classifies and then reduces each bucket with the downstream collector: groupingBy(Person::dept, averagingInt(Person::age)) yields a Map to Double. groupingBy(fn) is sugar for groupingBy(fn, toList()). Optional appears in reducing or maxBy, not in groupingBy.',
    },
  },
  {
    id: 'be-jcs-02',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿Qué ocurre si Collectors.toMap recibe dos elementos con la misma clave y no se pasa función de fusión?',
      en: 'What happens if Collectors.toMap receives two elements with the same key and no merge function is passed?',
    },
    answer: {
      es: 'Lanza IllegalStateException; el overload de tres argumentos acepta un BinaryOperator que fusiona los valores en conflicto.',
      en: 'It throws IllegalStateException; the three-argument overload accepts a BinaryOperator that merges the colliding values.',
    },
    distractors: [
      {
        es: 'El último valor pisa al primero, igual que Map.put, así que toMap nunca falla por duplicados.',
        en: 'The last value overwrites the first, same as Map.put, so toMap never fails on duplicates.',
      },
      {
        es: 'Lanza DuplicateKeyException de java.sql; la función de fusión solo existe en groupingBy.',
        en: 'It throws DuplicateKeyException from java.sql; the merge function exists only on groupingBy.',
      },
    ],
    explanation: {
      es: 'Collectors.toMap(Function, Function) documenta que una clave duplicada es ilegal y lanza IllegalStateException al colectar, con mensaje Duplicate key. El overload toMap(key, value, BinaryOperator) es la función de fusión, análoga a Map.merge, por ejemplo (a, b) -> b o Integer::sum. DuplicateKeyException no pertenece al API de streams.',
      en: 'Collectors.toMap(Function, Function) documents that a duplicate key is illegal and throws IllegalStateException at collection time, with a Duplicate key message. The toMap(key, value, BinaryOperator) overload is the merge function, analogous to Map.merge, for example (a, b) -> b or Integer::sum. DuplicateKeyException does not belong to the streams API.',
    },
  },
  {
    id: 'be-jcs-03',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿Qué mapa devuelve Collectors.partitioningBy respecto a las claves true y false?',
      en: 'What map does Collectors.partitioningBy return regarding the true and false keys?',
    },
    answer: {
      es: 'Siempre un Map con exactamente las claves true y false, aunque un lado esté vacío.',
      en: 'Always a Map with exactly the true and false keys, even if one side is empty.',
    },
    distractors: [
      {
        es: 'Es un groupingBy de Boolean, así que omite la clave cuyo grupo no tiene elementos.',
        en: 'It is groupingBy of Boolean, so it omits the key whose group has no elements.',
      },
      {
        es: 'Devuelve Optional de List, vacío cuando ningún elemento cumple el predicado, como filter seguido de collect.',
        en: 'It returns Optional of List, empty when no element matches the predicate, like filter followed by collect.',
      },
    ],
    explanation: {
      es: 'Collectors.partitioningBy(Predicate) inserta siempre Boolean.TRUE y Boolean.FALSE, a diferencia de groupingBy(pred::test), que no crea cubetas vacías. El overload partitioningBy(pred, counting()) rinde Map de Boolean a Long. No envuelve el resultado en Optional.',
      en: 'Collectors.partitioningBy(Predicate) always inserts Boolean.TRUE and Boolean.FALSE, unlike groupingBy(pred::test), which does not create empty buckets. The partitioningBy(pred, counting()) overload yields a Map of Boolean to Long. It does not wrap the result in Optional.',
    },
  },
  {
    id: 'be-jcs-04',
    topic: 'Colecciones y streams',
    prompt: {
      es: 'En Collectors.joining(delimiter, prefix, suffix), ¿qué envuelven el prefijo y el sufijo?',
      en: 'In Collectors.joining(delimiter, prefix, suffix), what do the prefix and suffix wrap?',
    },
    answer: {
      es: 'El resultado completo una sola vez; el delimitador va solo entre elementos, y un stream vacío aún produce prefix más suffix.',
      en: 'The whole result once; the delimiter goes only between elements, and an empty stream still produces prefix plus suffix.',
    },
    distractors: [
      {
        es: 'Cada elemento por separado, de modo que tres tokens producen tres fragmentos envueltos unidos por el delimitador.',
        en: 'Each element separately, so three tokens produce three wrapped fragments joined by the delimiter.',
      },
      {
        es: 'Nada si el stream está vacío: joining con "[", "]" sobre cero elementos devuelve la cadena vacía, no "[]".',
        en: 'Nothing if the stream is empty: joining with "[", "]" over zero elements returns the empty string, not "[]".',
      },
    ],
    explanation: {
      es: 'Collectors.joining(CharSequence, CharSequence, CharSequence) delega en StringJoiner, que coloca el delimitador solo entre elementos y emite siempre prefijo más sufijo. Un stream vacío rinde "[]" si esos son los envoltorios. String.join solo ofrece delimitador, sin prefijo ni sufijo.',
      en: 'Collectors.joining(CharSequence, CharSequence, CharSequence) delegates to StringJoiner, which places the delimiter only between elements and always emits prefix plus suffix. An empty stream yields "[]" if those are the wrappers. String.join offers a delimiter only, with no prefix or suffix.',
    },
  },
  {
    id: 'be-jcs-05',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿Cómo se aplanan colecciones anidadas con streams, por ejemplo List de List?',
      en: 'How do you flatten nested collections with streams, for example List of List?',
    },
    answer: {
      es: 'Con flatMap de una función que devuelve Stream, típicamente list -> list.stream(), que concatena los streams internos.',
      en: 'With flatMap of a function that returns Stream, typically list -> list.stream(), which concatenates the inner streams.',
    },
    distractors: [
      {
        es: 'Con map basta, porque Stream detecta una Collection anidada y la aplana solo.',
        en: 'map is enough, because Stream detects a nested Collection and flattens it on its own.',
      },
      {
        es: 'flatMap acepta una función a Collection y no debe llamarse stream() dentro, o anidaría un nivel extra.',
        en: 'flatMap accepts a function to Collection and you should not call stream() inside, or it would nest an extra level.',
      },
    ],
    explanation: {
      es: 'Stream.flatMap(Function) exige que la función rinda Stream; devolver List sin .stream() no compila. map(list -> list) produce Stream de List. No existe flatten. Para primitivos están flatMapToInt, flatMapToLong y flatMapToDouble.',
      en: 'Stream.flatMap(Function) requires the function to yield Stream; returning List without .stream() does not compile. map(list -> list) produces Stream of List. There is no flatten. For primitives there are flatMapToInt, flatMapToLong and flatMapToDouble.',
    },
  },
  {
    id: 'be-jcs-06',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿En qué se diferencian findFirst y findAny y qué tipo devuelven?',
      en: 'How do findFirst and findAny differ and what type do they return?',
    },
    answer: {
      es: 'Ambos son terminales de corto circuito que devuelven Optional; findFirst respeta el orden de encuentro y findAny puede devolver cualquiera, más rápido en paralelo.',
      en: 'Both are short-circuiting terminals that return Optional; findFirst respects encounter order and findAny may return any element, faster in parallel.',
    },
    distractors: [
      {
        es: 'findFirst devuelve el elemento y lanza NoSuchElementException si el stream está vacío; findAny siempre envuelve en Optional.',
        en: 'findFirst returns the element itself and throws NoSuchElementException if the stream is empty; findAny always wraps in Optional.',
      },
      {
        es: 'En un stream paralelo findFirst es indefinido y hay que usar findAny; en secuencial son idénticos incluso sobre fuentes ordenadas.',
        en: 'On a parallel stream findFirst is undefined and you must use findAny; on sequential streams they are identical even on ordered sources.',
      },
    ],
    explanation: {
      es: 'Stream.findFirst y Stream.findAny devuelven Optional, así que una fuente vacía rinde Optional.empty(), no null ni excepción. Quien lanza NoSuchElementException es Optional.get() sobre ese vacío. findAny existe para relajar el orden en paralelo; si necesitas el primero real de un stream ordenado debes usar findFirst aunque sea parallel.',
      en: 'Stream.findFirst and Stream.findAny return Optional, so an empty source yields Optional.empty(), not null and not an exception. What throws NoSuchElementException is Optional.get() on that empty value. findAny exists to relax order in parallel; if you need the true first element of an ordered stream you must use findFirst even when it is parallel.',
    },
  },
  {
    id: 'be-jcs-07',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿Por qué Stream.iterate(seed, f) y Stream.generate(supplier) suelen ir acompañados de limit?',
      en: 'Why are Stream.iterate(seed, f) and Stream.generate(supplier) usually paired with limit?',
    },
    answer: {
      es: 'Ambos son infinitos; sin un corte como limit, takeWhile o findFirst la operación terminal no termina.',
      en: 'Both are infinite; without a bound such as limit, takeWhile or findFirst the terminal operation does not finish.',
    },
    distractors: [
      {
        es: 'iterate es finito porque para al volver al seed, así que limit solo es una optimización.',
        en: 'iterate is finite because it stops when it returns to the seed, so limit is only an optimisation.',
      },
      {
        es: 'generate produce por defecto Long.MAX_VALUE elementos e iterate lanza IllegalArgumentException si olvidas limit.',
        en: 'generate produces Long.MAX_VALUE elements by default and iterate throws IllegalArgumentException if you forget limit.',
      },
    ],
    explanation: {
      es: 'Stream.iterate y Stream.generate son fuentes no acotadas. Un collect o count sin limit, takeWhile (Java 9) o una terminal de corto circuito se cuelga. El overload iterate(seed, predicate, operator) de Java 9 es la variante finita, análoga a un for. generate es unordered, lo que afecta a findFirst frente a findAny, y no lanzan IllegalArgumentException por omitir limit.',
      en: 'Stream.iterate and Stream.generate are unbounded sources. A collect or count without limit, takeWhile (Java 9) or a short-circuiting terminal hangs. The Java 9 iterate(seed, predicate, operator) overload is the finite variant, analogous to a for loop. generate is unordered, which affects findFirst versus findAny, and they do not throw IllegalArgumentException for omitting limit.',
    },
  },
  {
    id: 'be-jcs-08',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿Para qué está pensado Stream.peek y por qué no debe usarse para efectos?',
      en: 'What is Stream.peek actually intended for and why should it not be used for side effects?',
    },
    answer: {
      es: 'Es intermedia de depuración para observar elementos al pasar; es perezosa, el corto circuito puede saltarla y en paralelo corre en varios hilos.',
      en: 'It is an intermediate debugging operation to observe elements as they flow; it is lazy, short-circuiting may skip it and in parallel it runs on several threads.',
    },
    distractors: [
      {
        es: 'Es el forEach intermedio oficial, garantizado sobre cada elemento antes de la terminal, así que mutar en peek está soportado.',
        en: 'It is the official intermediate forEach, guaranteed on every element before the terminal, so mutating in peek is supported.',
      },
      {
        es: 'peek se ejecuta ansiosamente al añadirlo a la tubería, por eso es el sitio correcto para loguear o llenar una lista externa.',
        en: 'peek runs eagerly when added to the pipeline, which is why it is the right place to log or to fill an external list.',
      },
    ],
    explanation: {
      es: 'Stream.peek(Consumer) es intermedia y perezosa: no hace nada hasta que una terminal tira de elementos. findFirst, anyMatch o limit pueden omitir peeks restantes. Su javadoc dice que existe sobre todo para depurar. Los efectos pertenecen a forEach, y aún ahí se desaconsejan en paralelo.',
      en: 'Stream.peek(Consumer) is intermediate and lazy: it does nothing until a terminal pulls elements. findFirst, anyMatch or limit may skip remaining peeks. Its javadoc says it exists mainly to support debugging. Side effects belong in forEach, and even there they are discouraged on parallel streams.',
    },
  },
  {
    id: 'be-jcs-09',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿Qué devuelven Collectors.summarizingInt y Collectors.averagingDouble?',
      en: 'What do Collectors.summarizingInt and Collectors.averagingDouble return?',
    },
    answer: {
      es: 'summarizingInt rinde un IntSummaryStatistics con count, sum, min, max y average; averagingDouble (y averagingInt) rinden Double con la media.',
      en: 'summarizingInt yields an IntSummaryStatistics with count, sum, min, max and average; averagingDouble (and averagingInt) yield Double with the mean.',
    },
    distractors: [
      {
        es: 'averagingInt rinde Integer por resumir ints, y summarizingInt rinde un Map con esas cinco métricas como entradas.',
        en: 'averagingInt yields Integer because it summarises ints, and summarizingInt yields a Map with those five metrics as entries.',
      },
      {
        es: 'summarizingInt solo es válido como colector aguas abajo de groupingBy; usado solo lanza IllegalArgumentException.',
        en: 'summarizingInt is only valid as a downstream collector of groupingBy; used alone it throws IllegalArgumentException.',
      },
    ],
    explanation: {
      es: 'Collectors.summarizingInt(ToIntFunction) produce IntSummaryStatistics de java.util. averagingInt y averagingDouble ambos rinden Double, lo que sorprende a quien espera Integer. En un stream vacío la media es 0.0, no una excepción. También se usan aguas abajo de groupingBy, pero funcionan igual como colector terminal.',
      en: 'Collectors.summarizingInt(ToIntFunction) produces IntSummaryStatistics from java.util. averagingInt and averagingDouble both yield Double, which surprises anyone expecting Integer. On an empty stream the mean is 0.0, not an exception. They are also used downstream of groupingBy, but they work the same as a terminal collector.',
    },
  },
  {
    id: 'be-jcs-10',
    topic: 'Colecciones y streams',
    prompt: {
      es: 'En Comparator.comparing(a).thenComparing(b).reversed(), ¿qué se invierte, y para qué sirven nullsFirst y nullsLast?',
      en: 'In Comparator.comparing(a).thenComparing(b).reversed(), what is reversed, and what are nullsFirst and nullsLast for?',
    },
    answer: {
      es: 'reversed invierte el comparador entero, no solo la ultima clave; nullsFirst y nullsLast envuelven otro comparador para colocar nulls en un extremo sin NullPointerException.',
      en: 'reversed inverts the whole comparator, not only the last key; nullsFirst and nullsLast wrap another comparator to place nulls at one end without NullPointerException.',
    },
    distractors: [
      {
        es: 'reversed al final invierte solo la ultima clave de thenComparing, que es la forma documentada de dejar el resto ascendente.',
        en: 'reversed at the end inverts only the last thenComparing key, which is the documented way to keep the rest ascending.',
      },
      {
        es: 'nullsFirst(comparing(fn)) protege las claves null que fn devuelve; comparing(fn, nullsFirst(naturalOrder())) protege los elementos null de la colección.',
        en: 'nullsFirst(comparing(fn)) protects null keys that fn returns; comparing(fn, nullsFirst(naturalOrder())) protects null elements of the collection.',
      },
    ],
    explanation: {
      es: 'Comparator.reversed invierte toda la cadena. Para bajar solo un campo se pasa reverseOrder como segundo argumento de comparing o thenComparing. Comparator.nullsFirst(cmp) ordena elementos null; comparing(fn, nullsFirst(naturalOrder())) ordena claves null. Extraer una clave sobre un elemento null lanza NullPointerException.',
      en: 'Comparator.reversed inverts the whole chain. To sort only one field descending you pass reverseOrder as the second argument of comparing or thenComparing. Comparator.nullsFirst(cmp) orders null elements; comparing(fn, nullsFirst(naturalOrder())) orders null keys. Extracting a key from a null element throws NullPointerException.',
    },
  },
  {
    id: 'be-jcs-11',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿Qué implica el operador sorted de un stream en estabilidad y costo?',
      en: 'What does the sorted operator of a stream imply for stability and cost?',
    },
    answer: {
      es: 'Es intermedia con estado que amortigua todos los elementos y ordena en O(n log n); sobre un stream ordenado de objetos la ordenación es estable, y no puede correr sobre una fuente infinita sin un limit previo.',
      en: 'It is a stateful intermediate operation that buffers every element and sorts in O(n log n); on an ordered stream of objects the sort is stable, and it cannot run on an infinite source without a previous limit.',
    },
    distractors: [
      {
        es: 'sorted es perezoso por elemento como filter, así que puede ordenar un iterate infinito manteniendo un heap del tamaño del collect final.',
        en: 'sorted is lazy per element like filter, so it can sort an infinite iterate stream by keeping a heap sized to the final collect.',
      },
      {
        es: 'La ordenación del stream es inestable para objetos, el mismo dual-pivot quicksort de Arrays.sort sobre primitivos, por eso thenComparing es obligatorio en empates.',
        en: 'The stream sort is unstable for objects, the same dual-pivot quicksort of Arrays.sort on primitives, which is why thenComparing is required for ties.',
      },
    ],
    explanation: {
      es: 'Stream.sorted y sorted(Comparator) deben ver todo el contenido antes de emitir, así que amortiguan. Los streams de objetos usan una ordenación estable (TimSort), a diferencia de Arrays.sort de primitivos. En un stream paralelo unordered no se exige estabilidad. Una fuente infinita sin limit se cuelga o agota la memoria.',
      en: 'Stream.sorted and sorted(Comparator) must see the whole contents before emitting, so they buffer. Object streams use a stable sort (TimSort), unlike Arrays.sort of primitives. On a parallel unordered stream stability is not required. An infinite source without limit hangs or exhausts memory.',
    },
  },
  {
    id: 'be-jcs-12',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿De que depende Stream.distinct para decidir si dos elementos son el mismo?',
      en: 'What does Stream.distinct rely on to decide whether two elements are the same?',
    },
    answer: {
      es: 'De equals, y de un hashCode coherente, porque internamente recuerda lo visto en un conjunto basado en hash.',
      en: 'On equals, and on a consistent hashCode, because internally it remembers what it has seen in a hash-based set.',
    },
    distractors: [
      {
        es: 'Compara con ==, así que dos value objects iguales construidos aparte pasan ambos, y hashCode no interviene.',
        en: 'It compares with ==, so two equal value objects constructed separately both pass, and hashCode does not take part.',
      },
      {
        es: 'Usa el Comparator del sorted previo, de modo que puedes definir unicidad por un subconjunto de campos sin tocar equals.',
        en: 'It uses the Comparator of a previous sorted call, so you can define uniqueness by a subset of fields without touching equals.',
      },
    ],
    explanation: {
      es: 'Stream.distinct documenta que usa Object.equals. En la implementación de referencia se comporta como un LinkedHashSet en streams ordenados, de modo que hashCode debe coincidir con equals o se pierden elementos. No hay overload distinct(Comparator); la unicidad por un campo se hace con toMap y fusión o con un filtro. Para primitivos distinct usa la igualdad del valor.',
      en: 'Stream.distinct documents that it uses Object.equals. In the reference implementation it behaves like a LinkedHashSet on ordered streams, so hashCode must agree with equals or elements vanish. There is no distinct(Comparator) overload; uniqueness by one field is done with toMap and a merge or with a filter. For primitives, distinct uses value equality.',
    },
  },
  {
    id: 'be-jcs-13',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿En qué se diferencian Collectors.toList y Stream.toList respecto a la mutabilidad del resultado?',
      en: 'How do Collectors.toList and Stream.toList differ regarding the mutability of the result?',
    },
    answer: {
      es: 'Collectors.toList no garantiza inmutabilidad y en el JDK rinde un ArrayList mutable; Stream.toList (Java 16) rinde una lista no modificable cuyos mutadores lanzan UnsupportedOperationException.',
      en: 'Collectors.toList does not guarantee immutability and in the JDK yields a mutable ArrayList; Stream.toList (Java 16) yields an unmodifiable list whose mutators throw UnsupportedOperationException.',
    },
    distractors: [
      {
        es: 'Ambos rinden la misma lista no modificable, y Collectors.toList se reajusto en Java 16 para coincidir con Stream.toList.',
        en: 'Both yield the same unmodifiable list, and Collectors.toList was retrofitted in Java 16 to match Stream.toList.',
      },
      {
        es: 'Stream.toList es un atajo que aún rinde ArrayList; el colector no modificable es solo toList con un finisher que envuelve Collections.unmodifiableList.',
        en: 'Stream.toList is a shortcut that still yields ArrayList; the unmodifiable collector is only toList with a finisher that wraps Collections.unmodifiableList.',
      },
    ],
    explanation: {
      es: 'Stream.toList es una terminal de Java 16 cuyo javadoc promete no modificabilidad vía UnsupportedOperationException y permite nulls. Collectors.toList sigue sin especificar mutabilidad; la implementación es ArrayList, así que add funciona. Collectors.toUnmodifiableList rechaza nulls con NullPointerException, a diferencia de Stream.toList.',
      en: 'Stream.toList is a Java 16 terminal whose javadoc promises unmodifiability via UnsupportedOperationException and allows nulls. Collectors.toList remains unspecified for mutability; the implementation is ArrayList, so add still works. Collectors.toUnmodifiableList rejects nulls with NullPointerException, unlike Stream.toList.',
    },
  },
  {
    id: 'be-jcs-14',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿Qué idioms cubren Map.computeIfAbsent y Map.merge?',
      en: 'Which idioms do Map.computeIfAbsent and Map.merge cover?',
    },
    answer: {
      es: 'computeIfAbsent ejecuta la función solo si la clave falta (o vale null) y guarda el resultado, clasico para computeIfAbsent(k, x -> new ArrayList<>()).add(v); merge pone el valor si falta y si no combina old y new con un BinaryOperator, clasico para contar con Integer::sum.',
      en: 'computeIfAbsent runs the function only if the key is missing (or mapped to null) and stores the result, the classic computeIfAbsent(k, x -> new ArrayList<>()).add(v); merge puts the value if absent and otherwise combines old and new with a BinaryOperator, the classic counting idiom with Integer::sum.',
    },
    distractors: [
      {
        es: 'computeIfAbsent siempre invoca la función y pisa, igual que put; merge siempre reemplaza con el valor nuevo e ignora la función si la clave ya existe.',
        en: 'computeIfAbsent always invokes the function and overwrites, same as put; merge always replaces with the new value and ignores the function when the key already exists.',
      },
      {
        es: 'putIfAbsent(key, new ArrayList<>()) es equivalente a computeIfAbsent porque ambos evitan crear la lista cuando la clave ya está, incluida la evaluación del constructor.',
        en: 'putIfAbsent(key, new ArrayList<>()) is equivalent to computeIfAbsent because both skip creating the list when the key is already there, including not evaluating the constructor.',
      },
    ],
    explanation: {
      es: 'Map.computeIfAbsent(Object, Function) evalúa la función solo en un cache miss, lo que evita construir el ArrayList cuando la clave ya existe. Map.merge(Object, Object, BiFunction) es el put-or-combine de los mapas de frecuencia. putIfAbsent evalúa su argumento value antes de la llamada, así que new ArrayList<>() se crea siempre. Si la función de compute rinde null, no se registra mapeo.',
      en: 'Map.computeIfAbsent(Object, Function) evaluates the function only on a cache miss, which avoids constructing the ArrayList when the key is already there. Map.merge(Object, Object, BiFunction) is the put-or-combine used for frequency maps. putIfAbsent still evaluates its value argument before the call, so new ArrayList<>() is created every time. If the compute function yields null, no mapping is recorded.',
    },
  },
  {
    id: 'be-jcs-15',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿Por qué falla eliminar dentro de un for-each sobre ArrayList y cuál es la alternativa con removeIf?',
      en: 'Why does removing inside a for-each over ArrayList fail and what is the removeIf alternative?',
    },
    answer: {
      es: 'El iterador fail-fast lanza ConcurrentModificationException si hay modificación estructural, incluso en un solo hilo; las formas soportadas son Iterator.remove o Collection.removeIf.',
      en: 'The fail-fast iterator throws ConcurrentModificationException on a structural modification, even on a single thread; the supported ways are Iterator.remove or Collection.removeIf.',
    },
    distractors: [
      {
        es: 'ConcurrentModificationException solo se lanza cuando otro hilo muta la colección; en un solo hilo list.remove dentro del for-each es seguro.',
        en: 'ConcurrentModificationException is thrown only when another thread mutates the collection; on a single thread, list.remove inside for-each is safe.',
      },
      {
        es: 'Stream.filter seguido de collect es lo que removeIf hace in situ, así que la lista original pierde los elementos al colectar el stream filtrado.',
        en: 'Stream.filter followed by collect is what removeIf does in place, so the original list loses the matching elements when you collect the filtered stream.',
      },
    ],
    explanation: {
      es: 'El for-each usa Iterator, y ArrayList.iterator es fail-fast vía modCount, de modo que List.remove dentro lanza ConcurrentModificationException. Iterator.remove está permitido porque actualiza ese contador. Collection.removeIf(Predicate) es el idiom de Java 8 y en ArrayList compacta en una pasada. Un pipeline de stream no muta su fuente al hacer filter y collect: produce otra lista.',
      en: 'The for-each loop uses Iterator, and ArrayList.iterator is fail-fast via modCount, so List.remove inside it throws ConcurrentModificationException. Iterator.remove is allowed because it updates that counter. Collection.removeIf(Predicate) is the Java 8 idiom and for ArrayList it compact-shifts in one pass. A stream pipeline does not mutate its source when you filter and collect: it produces another list.',
    },
  },
  {
    id: 'be-jcs-16',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿Qué garantiza List.copyOf frente a una vista no modificable y frente a una copia defensiva mutable?',
      en: 'What does List.copyOf guarantee versus an unmodifiable view and versus a mutable defensive copy?',
    },
    answer: {
      es: 'Copia una colección mutable a una lista realmente no modificable y rechaza nulls con NullPointerException; si el argumento ya es una List no modificable puede devolverla tal cual, a diferencia de unmodifiableList, que es solo una vista.',
      en: 'It copies a mutable collection into a truly unmodifiable list and rejects nulls with NullPointerException; if the argument is already an unmodifiable List it may return it as-is, unlike unmodifiableList, which is only a view.',
    },
    distractors: [
      {
        es: 'List.copyOf siempre rinde una vista, así que un add posterior sobre la fuente aparece en la copia, igual que unmodifiableList.',
        en: 'List.copyOf always returns a view, so a later add on the source still appears in the copy, exactly like unmodifiableList.',
      },
      {
        es: 'List.copyOf siempre reserva un arreglo fresco aunque el argumento ya sea inmutable, por eso es la copia defensiva garantizada en todos los casos.',
        en: 'List.copyOf always allocates a fresh array even when the argument is already an immutable list, which is why it is the guaranteed defensive copy in every case.',
      },
    ],
    explanation: {
      es: 'List.copyOf(Collection) desde Java 10 produce una lista no modificable y lanza NullPointerException si la colección o algún elemento es null. Si la entrada es mutable copia; si ya es una List no modificable el JDK puede omitir la copia. Collections.unmodifiableList envuelve sin copiar, así que mutar la lista respaldo se ve. new ArrayList<>(src) es la copia defensiva mutable.',
      en: 'List.copyOf(Collection) since Java 10 produces an unmodifiable list and throws NullPointerException if the collection or any element is null. For a mutable input it copies; for an already unmodifiable List the JDK may skip the copy. Collections.unmodifiableList wraps without copying, so mutating the backing list is visible. new ArrayList<>(src) is the mutable defensive copy.',
    },
  },
  {
    id: 'be-jcs-17',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿Qué algoritmo usa Arrays.sort sobre primitivos frente a objetos?',
      en: 'Which algorithm does Arrays.sort use on primitives versus objects?',
    },
    answer: {
      es: 'Sobre arreglos primitivos usa dual-pivot quicksort, que no es estable; sobre arreglos de objetos usa TimSort, que es estable y es el camino de List.sort y Collections.sort.',
      en: 'On primitive arrays it uses dual-pivot quicksort, which is not stable; on object arrays it uses TimSort, which is stable and is the path of List.sort and Collections.sort.',
    },
    distractors: [
      {
        es: 'Desde Java 7 primitivos y objetos usan TimSort, por eso Arrays.sort(int[]) ahora preserva el orden de claves iguales.',
        en: 'Since Java 7 both primitives and objects use TimSort, which is why Arrays.sort(int[]) now preserves the order of equal keys.',
      },
      {
        es: 'Los arreglos de objetos siguen un quicksort inestable, por eso thenComparing existe para restaurar el orden que sort destruye; los primitivos usan counting sort.',
        en: 'Object arrays still use an unstable quicksort, which is why thenComparing exists to restore the order that sort destroys; primitives use counting sort.',
      },
    ],
    explanation: {
      es: 'Arrays.sort(int[]) y el resto de overloads primitivos documentan Dual-Pivot Quicksort, que puede reordenar valores iguales. Arrays.sort(Object[]) y Arrays.sort(T[], Comparator) usan TimSort, un mergesort estable. List.sort delega en esa vía de objetos, de modo que ordenar Integer es estable y ordenar int no. thenComparing desempata claves, no compensa la inestabilidad de los primitivos.',
      en: 'Arrays.sort(int[]) and the other primitive overloads document Dual-Pivot Quicksort, which may reorder equal values. Arrays.sort(Object[]) and Arrays.sort(T[], Comparator) use TimSort, a stable mergesort variant. List.sort delegates to that object path, so sorting Integer is stable while sorting int is not. thenComparing breaks key ties; it does not compensate for primitive instability.',
    },
  },
  {
    id: 'be-jcs-18',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿Para qué sirven NavigableMap.floorKey y headMap, por ejemplo en un TreeMap de tarifas por fecha?',
      en: 'What are NavigableMap.floorKey and headMap for, for example in a TreeMap of tariffs by date?',
    },
    answer: {
      es: 'floorKey rinde la mayor clave menor o igual al argumento; headMap rinde una vista de las claves estrictamente menores (o como mucho, con el overload inclusive), util para la tarifa vigente en una fecha.',
      en: 'floorKey yields the greatest key less than or equal to the argument; headMap yields a view of keys strictly less than (or at most, with the inclusive overload) the given key, useful for the tariff valid at a date.',
    },
    distractors: [
      {
        es: 'floorKey rinde la menor clave mayor o igual, y headMap copia esas entradas a un HashMap nuevo, así que un put posterior en el TreeMap no se ve.',
        en: 'floorKey yields the least key greater than or equal, and headMap copies those entries into a new HashMap, so a later put on the TreeMap is not visible.',
      },
      {
        es: 'floorKey lanza NoSuchElementException si la clave no existe, hay que llamar containsKey antes; headMap solo está definido en ConcurrentHashMap.',
        en: 'floorKey throws NoSuchElementException when the key is absent, so you must call containsKey first; headMap is only defined on ConcurrentHashMap.',
      },
    ],
    explanation: {
      es: 'NavigableMap en java.util extiende SortedMap y la implementan TreeMap y ConcurrentSkipListMap. floorKey, ceilingKey, lowerKey y higherKey responden predecesor y sucesor en O(log n); si no hay candidato floorKey rinde null, no lanza. headMap, tailMap y subMap son vistas respaldadas: mutar la vista muta el mapa. HashMap no implementa NavigableMap; ceilingKey es la menor clave mayor o igual, el simétrico que suele confundirse con floorKey.',
      en: 'NavigableMap in java.util extends SortedMap and is implemented by TreeMap and ConcurrentSkipListMap. floorKey, ceilingKey, lowerKey and higherKey answer predecessor and successor queries in O(log n); if there is no candidate, floorKey yields null, it does not throw. headMap, tailMap and subMap are backed views: mutating the view mutates the map. HashMap does not implement NavigableMap; ceilingKey is the least key greater than or equal, the symmetric method often confused with floorKey.',
    },
  },
  {
    id: 'be-jcs-19',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿Collections.unmodifiableList es una copia inmutable o una vista, y que implica eso?',
      en: 'Is Collections.unmodifiableList an immutable copy or a view, and what does that imply?',
    },
    answer: {
      es: 'Es un envoltorio vista: add o set sobre el wrapper lanzan UnsupportedOperationException, pero si se muta la lista original el wrapper refleja esos cambios.',
      en: 'It is a wrapper view: add or set on the wrapper throw UnsupportedOperationException, but if the original list is mutated the wrapper reflects those changes.',
    },
    distractors: [
      {
        es: 'Copia los elementos a un arreglo privado, así que los cambios posteriores de la fuente no se ven, por eso es seguro publicar el resultado.',
        en: 'It copies the elements into a private array, so later changes to the source cannot be seen, which is why it is safe to publish the result.',
      },
      {
        es: 'Es lo mismo que List.of: ambos rechazan nulls y ambos congelan la lista original, de modo que ni la referencia fuente puede hacer add.',
        en: 'It is the same as List.of: both reject nulls and both freeze the original list so even the source reference can no longer add.',
      },
    ],
    explanation: {
      es: 'Collections.unmodifiableList(List) es un wrapper delgado: UnsupportedOperationException protege solo la vista. Una instantánea real es new ArrayList<>(list) o List.copyOf(list). List.of y List.copyOf rechazan nulls con NullPointerException, mientras unmodifiableList los admite si la lista respaldo los tiene. No publiques una vista de una lista que sigues mutando por dentro si los llamadores la cachean.',
      en: 'Collections.unmodifiableList(List) is a thin wrapper: UnsupportedOperationException protects only the view. A true snapshot is new ArrayList<>(list) or List.copyOf(list). List.of and List.copyOf reject nulls with NullPointerException, while unmodifiableList allows nulls if the backing list does. Do not expose an unmodifiable view of a list you still mutate internally if callers cache it.',
    },
  },
  {
    id: 'be-jcs-20',
    topic: 'Colecciones y streams',
    prompt: {
      es: '¿Qué ocurre al reutilizar un stream ya consumido y por qué son peligrosas las lambdas con estado?',
      en: 'What happens when reusing an already consumed stream and why are stateful lambdas dangerous?',
    },
    answer: {
      es: 'Una segunda operación terminal lanza IllegalStateException; una lambda que muta estado capturado rompe el contrato sin estado de Stream y puede dar resultados incorrectos o con condiciones de carrera, sobre todo con parallel().',
      en: 'A second terminal operation throws IllegalStateException; a lambda that mutates captured state breaks the stateless contract of Stream and can yield wrong or racy results, especially with parallel().',
    },
    distractors: [
      {
        es: 'El stream se puede recorrer de nuevo tras collect mientras la colección fuente exista; IllegalStateException solo se lanza si la fuente era un arreglo primitivo.',
        en: 'The stream can be traversed again after collect as long as the source collection still exists; IllegalStateException is thrown only when the source was a primitive array.',
      },
      {
        es: 'Las lambdas con estado están soportadas en streams secuenciales y solo prohibidas en parallelStream, por eso un contador capturado en filter es válido para tomar los primeros n elementos.',
        en: 'Stateful lambdas are supported on sequential streams and only forbidden on parallelStream, which is why a captured counter in filter is a valid way to take the first n elements.',
      },
    ],
    explanation: {
      es: 'Stream documenta que no es reutilizable: collect, forEach, findFirst o count lo marcan consumido y la siguiente terminal lanza IllegalStateException. El javadoc del paquete exige parámetros de conducta no interferentes y sin estado. Una lambda que incrementa un ArrayList o un int[] capturado es con estado: en paralelo hay carrera, y en secuencial puede romper distinct, sorted y limit. Para los primeros n usa limit, no un contador dentro de filter.',
      en: 'Stream documents that it is not reusable: collect, forEach, findFirst or count mark it consumed and the next terminal throws IllegalStateException. The package javadoc requires non-interfering, stateless behavioral parameters. A lambda that increments an ArrayList or an int[] captured from outside is stateful: in parallel it races, and even sequentially it can break distinct, sorted and limit. For the first n elements use limit, not a counter inside filter.',
    },
  },
];
