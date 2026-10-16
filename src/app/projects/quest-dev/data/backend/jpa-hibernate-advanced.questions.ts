import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_JPA_HIBERNATE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-hib-01',
    topic: 'Estados',
    prompt: {
      es: '¿Cuáles son los estados de una entidad JPA?',
      en: 'What are the states of a JPA entity?',
    },
    answer: {
      es: 'Nueva, si aún no está en el contexto ni en la base. Gestionada, si el contexto la sigue. Desconectada, si tiene id pero ya no está en el contexto. Eliminada, si está marcada para borrarse al confirmar.',
      en: 'New, if it is not in the context or in the database yet. Managed, if the context tracks it. Detached, if it has an id but is no longer in the context. Removed, if it is marked to be deleted on commit.',
    },
    distractors: [
      {
        es: 'Solo gestionada y desconectada. Eliminar borra la fila al momento.',
        en: 'Only managed and detached. Remove deletes the row at once.',
      },
      {
        es: 'Sucia, limpia, nueva y borrada, que son las banderas que ves en el código.',
        en: 'Dirty, clean, new and deleted, which are the flags you see in the code.',
      },
    ],
    explanation: {
      es: 'persist pasa de nueva a gestionada. remove no ejecuta el delete al instante: lo deja para el flush. Sucia no es un estado de vida, es que cambió respecto a la copia.',
      en: 'persist moves new to managed. remove does not run the delete at once: it leaves it for the flush. Dirty is not a lifecycle state, it means it changed compared with the copy.',
    },
  },
  {
    id: 'be-hib-02',
    topic: 'Estados',
    prompt: {
      es: '¿Qué pasa si llamas a persist o a merge con una entidad desconectada?',
      en: 'What happens if you call persist or merge with a detached entity?',
    },
    answer: {
      es: 'persist falla, porque esa entidad ya tiene identidad y no es nueva. merge copia el estado a una instancia gestionada y te devuelve esa, no la que pasaste.',
      en: 'persist fails, because that entity already has identity and is not new. merge copies the state onto a managed instance and returns that one, not the one you passed.',
    },
    distractors: [
      {
        es: 'persist vuelve a enganchar la misma instancia. merge inserta siempre una fila nueva.',
        en: 'persist reattaches the same instance. merge always inserts a new row.',
      },
      {
        es: 'Los dos enganchan. persist es más barato porque no consulta.',
        en: 'Both reattach. persist is cheaper because it does not query.',
      },
    ],
    explanation: {
      es: 'El error clásico es seguir usando el objeto que pasaste a merge: ese sigue desconectado. Usa el que devuelve el método.',
      en: 'The classic mistake is to keep using the object you passed to merge: that one stays detached. Use the one the method returns.',
    },
  },
  {
    id: 'be-hib-03',
    topic: 'Repositorios',
    prompt: {
      es: '¿Qué hace save si la entidad ya trae un id?',
      en: 'What does save do if the entity already has an id?',
    },
    answer: {
      es: 'Si Spring Data no la considera nueva, save hace merge. Eso suele consultar y luego insertar o actualizar, aunque la fila no existiera. Un id generado en el constructor provoca justo ese camino.',
      en: 'If Spring Data does not consider it new, save does a merge. That usually queries and then inserts or updates, even if the row never existed. An id generated in the constructor triggers exactly that path.',
    },
    distractors: [
      {
        es: 'Si hay id, save siempre hace persist e inserta sin consultar.',
        en: 'If there is an id, save always does persist and inserts without querying.',
      },
      {
        es: 'save ignora el id y decide solo mirando si existe Version.',
        en: 'save ignores the id and decides only by looking at whether Version exists.',
      },
    ],
    explanation: {
      es: 'isNew es verdadero si el id es null, o si hay versión y esa versión es null. Para un UUID asignado a mano, implementa la marca de nuevo o deja que la base genere el id.',
      en: 'isNew is true if the id is null, or if there is a version and that version is null. For a UUID you assign by hand, implement the new marker or let the database generate the id.',
    },
  },
  {
    id: 'be-hib-04',
    topic: 'Cascada',
    prompt: {
      es: '¿Por qué CascadeType.ALL puede ser peligroso?',
      en: 'Why can CascadeType.ALL be dangerous?',
    },
    answer: {
      es: 'Porque incluye el borrado. En una relación compartida, borrar el padre puede borrar categorías u otros hijos que aún usan otros registros.',
      en: 'Because it includes removal. On a shared relation, deleting the parent can delete categories or other children that other records still use.',
    },
    distractors: [
      {
        es: 'ALL solo encadena persist y merge. El remove hay que pedirlo aparte, por eso es la opción segura.',
        en: 'ALL only chains persist and merge. Remove must be asked separately, which is why it is the safe option.',
      },
      {
        es: 'ALL significa carga eager en todas las relaciones y por eso degrada las consultas.',
        en: 'ALL means eager loading on every relation and that is why it degrades queries.',
      },
    ],
    explanation: {
      es: 'La cascada no tiene que ver con lazy o eager. En un padre con hijos propios suele bastar persist y merge, más borrar huérfanos si el hijo no vive solo.',
      en: 'Cascade has nothing to do with lazy or eager. On a parent with its own children, persist and merge are usually enough, plus orphan removal if the child cannot live alone.',
    },
  },
  {
    id: 'be-hib-05',
    topic: 'Cascada',
    prompt: {
      es: '¿Qué diferencia hay entre orphanRemoval y borrar en cascada?',
      en: 'What is the difference between orphanRemoval and cascade remove?',
    },
    answer: {
      es: 'orphanRemoval borra el hijo cuando lo quitas de la colección. El remove en cascada borra los hijos solo cuando borras al padre.',
      en: 'orphanRemoval deletes the child when you take it out of the collection. Cascade remove deletes the children only when you delete the parent.',
    },
    distractors: [
      {
        es: 'Son lo mismo. orphanRemoval es un atajo del remove en un OneToMany.',
        en: 'They are the same. orphanRemoval is a shortcut for remove on a OneToMany.',
      },
      {
        es: 'orphanRemoval borra al padre si se queda sin hijos. El remove solo borra la tabla de unión.',
        en: 'orphanRemoval deletes the parent if it is left without children. Remove only deletes the join table.',
      },
    ],
    explanation: {
      es: 'Modela composición: la línea no existe sin el pedido. Si mueves el hijo a otro padre con orphanRemoval, puedes borrarlo sin querer.',
      en: 'It models composition: the line does not exist without the order. If you move the child to another parent with orphanRemoval, you can delete it by accident.',
    },
  },
  {
    id: 'be-hib-06',
    topic: 'Herencia',
    prompt: {
      es: '¿Cómo se guardan las herencias de una tabla, de tablas unidas y de una tabla por clase?',
      en: 'How are single-table, joined and table-per-class inheritance stored?',
    },
    answer: {
      es: 'Una sola tabla mete todas las columnas y un discriminador. La unida parte en tablas y hace join. Una tabla por clase duplica columnas y, al consultar el tipo padre, une con union.',
      en: 'A single table puts every column and a discriminator together. Joined splits into tables and uses a join. Table per class duplicates columns and, when you query the parent type, combines them with a union.',
    },
    distractors: [
      {
        es: 'Una sola tabla crea una tabla por subclase. La unida usa discriminador. Una tabla por clase hace join de todo el árbol.',
        en: 'A single table creates one table per subclass. Joined uses a discriminator. Table per class joins the whole tree.',
      },
      {
        es: 'Las tres generan el mismo esquema. La estrategia solo cambia el SQL de lectura.',
        en: 'The three generate the same schema. The strategy only changes the read SQL.',
      },
    ],
    explanation: {
      es: 'La de una tabla es la habitual: lecturas simples y columnas de subclase que pueden ser null. La unida evita esos null a cambio del join.',
      en: 'The single table is the usual one: simple reads and subclass columns that may be null. Joined avoids those nulls in exchange for the join.',
    },
  },
  {
    id: 'be-hib-07',
    topic: 'Mapeo',
    prompt: {
      es: '¿Para qué sirven Embeddable y Embedded?',
      en: 'What are Embeddable and Embedded for?',
    },
    answer: {
      es: 'Para un objeto de valor sin id propio, como una dirección, cuyos campos se guardan en la tabla del dueño. Vive y muere con esa entidad.',
      en: 'For a value object with no id of its own, such as an address, whose fields are stored in the owner table. It lives and dies with that entity.',
    },
    distractors: [
      {
        es: 'Declaran una entidad débil con tabla propia y un id compuesto.',
        en: 'They declare a weak entity with its own table and a composite id.',
      },
      {
        es: 'Convierten la clase en JSON de una sola columna.',
        en: 'They turn the class into JSON in a single column.',
      },
    ],
    explanation: {
      es: 'No hay un find de la dirección. Si necesitas tabla e identidad, eso es una entidad, no un valor embebido.',
      en: 'There is no find of the address. If you need a table and an identity, that is an entity, not an embedded value.',
    },
  },
  {
    id: 'be-hib-08',
    topic: 'Mapeo',
    prompt: {
      es: '¿Cuándo usas ElementCollection y qué límite tiene?',
      en: 'When do you use ElementCollection and what limit does it have?',
    },
    answer: {
      es: 'Para una colección de valores simples o embebidos, sin identidad, en una tabla aparte. No se comparten y muchos cambios reescriben todas las filas de esa colección.',
      en: 'For a collection of simple or embedded values, with no identity, in a separate table. They are not shared and many changes rewrite every row of that collection.',
    },
    distractors: [
      {
        es: 'Para hijos que son entidades, en lugar de OneToMany, cuando no quieres mappedBy.',
        en: 'For children that are entities, instead of OneToMany, when you do not want mappedBy.',
      },
      {
        es: 'Para un mapa de entidad a entidad, equivalente a un ManyToMany.',
        en: 'For an entity-to-entity map, equivalent to a ManyToMany.',
      },
    ],
    explanation: {
      es: 'Los elementos no son entidades: no hay cascada ni find de uno de ellos. Si el elemento necesita id o relaciones, hazlo entidad.',
      en: 'The elements are not entities: there is no cascade and no find of one of them. If the element needs an id or relations, make it an entity.',
    },
  },
  {
    id: 'be-hib-09',
    topic: 'Identidad',
    prompt: {
      es: '¿Por qué un id identity dificulta los insert por lotes frente a una secuencia?',
      en: 'Why does an identity id make batch inserts harder than a sequence?',
    },
    answer: {
      es: 'Identity obliga a ejecutar el insert para conocer el id, así que no se pueden agrupar. Una secuencia reserva ids antes y luego los insert van juntos.',
      en: 'Identity forces the insert to run so the id is known, so they cannot be grouped. A sequence reserves ids first and then the inserts go together.',
    },
    distractors: [
      {
        es: 'Identity es más rápido en lote porque la base numera al insertar y la secuencia hace un select extra por fila.',
        en: 'Identity is faster in a batch because the database numbers rows on insert and the sequence does an extra select per row.',
      },
      {
        es: 'En Hibernate reciente las dos agrupan igual. Solo la tabla de ids no agrupa.',
        en: 'In recent Hibernate both group the same way. Only the id table fails to group.',
      },
    ],
    explanation: {
      es: 'En PostgreSQL la secuencia es la opción natural para lotes. Identity parece simple y rompe el agrupado.',
      en: 'On PostgreSQL the sequence is the natural choice for batches. Identity looks simple and breaks grouping.',
    },
  },
  {
    id: 'be-hib-10',
    topic: 'Igualdad',
    prompt: {
      es: '¿Cómo afectan la clave natural y la subrogada a equals y hashCode?',
      en: 'How do a natural key and a surrogate key affect equals and hashCode?',
    },
    answer: {
      es: 'Un id generado es null hasta el persist y luego cambia, así que el hash cambia y un Set puede perder la entidad. Usa una clave de negocio estable o un UUID asignado al construir.',
      en: 'A generated id is null until persist and then changes, so the hash changes and a Set can lose the entity. Use a stable business key or a UUID assigned when you construct.',
    },
    distractors: [
      {
        es: 'equals y hashCode deben usar siempre el id generado, porque ya está puesto al meter la entidad en una colección.',
        en: 'equals and hashCode must always use the generated id, because it is already set when the entity goes into a collection.',
      },
      {
        es: 'No hace falta implementarlos. La igualdad es la referencia, también fuera del contexto.',
        en: 'There is no need to implement them. Equality is reference identity, also outside the context.',
      },
    ],
    explanation: {
      es: 'No metas colecciones perezosas en equals: puedes disparar una carga fuera de sesión. La clave tiene que ser estable.',
      en: 'Do not put lazy collections in equals: you can trigger a load outside the session. The key has to be stable.',
    },
  },
  {
    id: 'be-hib-11',
    topic: 'Caché',
    prompt: {
      es: '¿Qué alcance tiene la caché de primer nivel?',
      en: 'What is the scope of the first-level cache?',
    },
    answer: {
      es: 'El contexto de la transacción actual. Dentro de ella hay una sola instancia Java por id. No se comparte entre peticiones ni entre hilos.',
      en: 'The context of the current transaction. Inside it there is a single Java instance per id. It is not shared across requests or across threads.',
    },
    distractors: [
      {
        es: 'Toda la aplicación. La fábrica comparte las entidades entre hilos hasta que caducan.',
        en: 'The whole application. The factory shares entities across threads until they expire.',
      },
      {
        es: 'Solo dura el select. Al terminar, el siguiente find va siempre a la base.',
        en: 'It lasts only for the select. When it ends, the next find always hits the database.',
      },
    ],
    explanation: {
      es: 'Por eso repetir findById en la misma transacción no lanza otro select. La caché de segundo nivel es otra cosa: vive en la fábrica y hay que activarla.',
      en: 'That is why repeating findById in the same transaction does not fire another select. The second-level cache is different: it lives on the factory and you must turn it on.',
    },
  },
  {
    id: 'be-hib-12',
    topic: 'Caché',
    prompt: {
      es: '¿Cuándo conviene la caché de segundo nivel?',
      en: 'When is the second-level cache worthwhile?',
    },
    answer: {
      es: 'Para entidades que se leen mucho y se escriben poco, como un catálogo. La caché de consultas solo compensa si esas tablas casi no cambian, porque un update invalida las entradas.',
      en: 'For entities that are read a lot and written rarely, such as a catalogue. The query cache pays off only if those tables almost never change, because an update invalidates the entries.',
    },
    distractors: [
      {
        es: 'Siempre. Activarla acelera todo find porque reutiliza las entidades de la transacción.',
        en: 'Always. Turning it on speeds up every find because it reuses the entities of the transaction.',
      },
      {
        es: 'Solo en escrituras: agrupa los update y memoriza los delete para repetirlos.',
        en: 'Only on writes: it groups updates and memorises deletes to replay them.',
      },
    ],
    explanation: {
      es: 'No sustituye a la caché de la transacción ni agrupa inserts. En datos que cambian todo el rato suele estorbar más de lo que ayuda.',
      en: 'It does not replace the transaction cache and it does not group inserts. On data that changes all the time it usually gets in the way more than it helps.',
    },
  },
  {
    id: 'be-hib-13',
    topic: 'Contexto',
    prompt: {
      es: '¿Qué es el contexto de persistencia?',
      en: 'What is the persistence context?',
    },
    answer: {
      es: 'El conjunto de entidades gestionadas de la transacción. Hibernate anota los cambios y escribe el SQL al confirmar, no en cada setter.',
      en: 'The set of managed entities of the transaction. Hibernate notes the changes and writes the SQL on commit, not on every setter.',
    },
    distractors: [
      {
        es: 'La conexión JDBC. Cada setter abre un update inmediato.',
        en: 'The JDBC connection. Every setter opens an immediate update.',
      },
      {
        es: 'Una caché global de la aplicación que sobrevive al commit y la comparten todos los hilos.',
        en: 'A global application cache that survives the commit and is shared by every thread.',
      },
    ],
    explanation: {
      es: 'Por eso un cambio en una entidad cargada se guarda sin save. Al cerrar la transacción, esas instancias quedan desconectadas.',
      en: 'That is why a change on a loaded entity is saved without save. When the transaction closes, those instances become detached.',
    },
  },
  {
    id: 'be-hib-14',
    topic: 'Contexto',
    prompt: {
      es: '¿Qué hacen flush, clear y detach?',
      en: 'What do flush, clear and detach do?',
    },
    answer: {
      es: 'flush escribe el SQL pendiente y deja las entidades gestionadas. detach suelta una. clear suelta todas. clear y detach no escriben: lo que no se sincronizó se pierde.',
      en: 'flush writes the pending SQL and leaves the entities managed. detach releases one. clear releases all of them. clear and detach do not write: what was not synchronised is lost.',
    },
    distractors: [
      {
        es: 'clear escribe y luego vacía, que es el patrón de lotes. detach borra la fila.',
        en: 'clear writes and then empties, which is the batch pattern. detach deletes the row.',
      },
      {
        es: 'flush desconecta tras escribir. clear solo olvida consultas, no entidades modificadas.',
        en: 'flush detaches after writing. clear only forgets queries, not modified entities.',
      },
    ],
    explanation: {
      es: 'En un lote haces cambios, flush y después clear, para no acumular miles de copias en memoria. detach no es un delete.',
      en: 'In a batch you change, flush and then clear, so you do not pile up thousands of copies in memory. detach is not a delete.',
    },
  },
  {
    id: 'be-hib-15',
    topic: 'Carga',
    prompt: {
      es: '¿Cómo evitas el N+1 al cargar una colección: join, subselect o lotes?',
      en: 'How do you avoid N+1 when loading a collection: join, subselect or batches?',
    },
    answer: {
      es: 'El join trae la colección en el mismo select y puede multiplicar filas. El subselect lanza otro select con los padres ya cargados. El lote mantiene la carga perezosa pero pide varios padres de una vez.',
      en: 'The join brings the collection in the same select and can multiply rows. The subselect fires another select with the parents already loaded. The batch keeps lazy loading but asks for several parents at once.',
    },
    distractors: [
      {
        es: 'Las tres hacen el mismo join. El tamaño de lote solo pagina ese join.',
        en: 'All three do the same join. The batch size only pages that join.',
      },
      {
        es: 'El subselect es el defecto. El join y el lote ya no hacen falta.',
        en: 'The subselect is the default. The join and the batch are no longer needed.',
      },
    ],
    explanation: {
      es: 'No hagas join de dos colecciones a la vez: el producto se dispara. El defecto, si recorres un lazy, sigue siendo una consulta por padre.',
      en: 'Do not join two collections at once: the product blows up. The default, if you walk a lazy relation, is still one query per parent.',
    },
  },
  {
    id: 'be-hib-16',
    topic: 'Carga',
    prompt: {
      es: '¿Qué es un entity graph?',
      en: 'What is an entity graph?',
    },
    answer: {
      es: 'Una forma de decir, en una consulta concreta, qué relaciones traer. Puede estar declarado en la entidad y reutilizarse, o armarse en el momento. No cambia el lazy o eager del mapeo para siempre.',
      en: 'A way to say, on one query, which relations to load. It can be declared on the entity and reused, or built at the moment. It does not change the mapping lazy or eager forever.',
    },
    distractors: [
      {
        es: 'El nombrado pone eager en toda la aplicación. El dinámico solo vale para SQL nativo.',
        en: 'The named one sets eager for the whole application. The dynamic one only works for native SQL.',
      },
      {
        es: 'Son APIs incompatibles: una es de Hibernate y la otra de Spring Data.',
        en: 'They are incompatible APIs: one is from Hibernate and the other from Spring Data.',
      },
    ],
    explanation: {
      es: 'En el repositorio se pide con EntityGraph. Sirve para el caso de uso, sin obligar a todas las consultas a traer el mismo grafo.',
      en: 'On the repository you ask for it with EntityGraph. It fits the use case, without forcing every query to load the same graph.',
    },
  },
  {
    id: 'be-hib-17',
    topic: 'Paginación',
    prompt: {
      es: '¿Por qué paginar un join de una colección puede cargar todo en memoria?',
      en: 'Why can paging a collection join load everything into memory?',
    },
    answer: {
      es: 'Porque el join duplica filas y un límite SQL cortaría entidades a medias. Hibernate puede traer el resultado entero y paginar en memoria.',
      en: 'Because the join duplicates rows and a SQL limit would cut entities in half. Hibernate may bring the whole result and page it in memory.',
    },
    distractors: [
      {
        es: 'El aviso significa que falta el número de página. Sin él, Spring ignora el Pageable.',
        en: 'The warning means the page number is missing. Without it, Spring ignores the Pageable.',
      },
      {
        es: 'El join con Page lanza siempre y hay que usar Slice, que sí pagina en SQL.',
        en: 'The join with Page always throws and you must use Slice, which does page in SQL.',
      },
    ],
    explanation: {
      es: 'Pagina los ids sin la colección y luego carga los hijos de esos ids. Slice evita el conteo, no este corte a medias.',
      en: 'Page the ids without the collection and then load the children of those ids. Slice avoids the count, not this half-cut.',
    },
  },
  {
    id: 'be-hib-18',
    topic: 'Consultas',
    prompt: {
      es: '¿Por qué proyectar a un DTO es más barato que traer la entidad?',
      en: 'Why is projecting to a DTO cheaper than loading the entity?',
    },
    answer: {
      es: 'El DTO no entra al contexto: no hay copia para detectar cambios ni proxies perezosos. Se construye con los campos que pediste.',
      en: 'The DTO does not enter the context: there is no copy to detect changes and no lazy proxies. It is built from the fields you asked for.',
    },
    distractors: [
      {
        es: 'El DTO se gestiona igual y save sigue funcionando sobre él.',
        en: 'The DTO is managed the same way and save still works on it.',
      },
      {
        es: 'La proyección solo omite colecciones. La entidad raíz sigue gestionada.',
        en: 'The projection only skips collections. The root entity stays managed.',
      },
    ],
    explanation: {
      es: 'Mutar el DTO no genera un update. Tampoco verás una excepción de lazy, porque no hay asociaciones que cargar.',
      en: 'Mutating the DTO does not generate an update. You also will not see a lazy exception, because there are no associations to load.',
    },
  },
  {
    id: 'be-hib-19',
    topic: 'Identidad',
    prompt: {
      es: '¿Qué diferencia hay entre IdClass, EmbeddedId y MapsId?',
      en: 'What is the difference between IdClass, EmbeddedId and MapsId?',
    },
    answer: {
      es: 'IdClass repite los campos del id en la entidad. EmbeddedId los agrupa en un objeto. MapsId reutiliza el id del padre como clave del hijo, típico de una relación uno a uno.',
      en: 'IdClass repeats the id fields on the entity. EmbeddedId groups them in an object. MapsId reuses the parent id as the child key, typical of a one-to-one relation.',
    },
    distractors: [
      {
        es: 'MapsId sustituye a la secuencia en una clave simple. IdClass y EmbeddedId son alias.',
        en: 'MapsId replaces the sequence on a simple key. IdClass and EmbeddedId are aliases.',
      },
      {
        es: 'EmbeddedId solo vale para colecciones de valores. Las entidades obligan IdClass.',
        en: 'EmbeddedId is only valid for value collections. Entities require IdClass.',
      },
    ],
    explanation: {
      es: 'La clave embebida necesita equals y hashCode. MapsId no genera otro id: copia el del padre.',
      en: 'The embedded key needs equals and hashCode. MapsId does not generate another id: it copies the parent one.',
    },
  },
  {
    id: 'be-hib-20',
    topic: 'Rendimiento',
    prompt: {
      es: '¿Por qué duele tener miles de entidades gestionadas y qué haces en un lote?',
      en: 'Why does holding thousands of managed entities hurt and what do you do in a batch?',
    },
    answer: {
      es: 'Porque en cada escritura Hibernate compara todas con su copia. En un lote persistes un bloque, haces flush, clear, y sigues. Un update masivo evita el contexto si no necesitas la lógica de la entidad.',
      en: 'Because on each write Hibernate compares all of them with their copy. In a batch you persist a chunk, flush, clear, and continue. A bulk update skips the context if you do not need the entity logic.',
    },
    distractors: [
      {
        es: 'Subir el tamaño de lote JDBC quita la comparación, porque el driver ya compara filas.',
        en: 'Raising the JDBC batch size removes the comparison, because the driver already compares rows.',
      },
      {
        es: 'Basta un EntityManager por fila. Hibernate ya no compara estados.',
        en: 'One EntityManager per row is enough. Hibernate no longer compares state.',
      },
    ],
    explanation: {
      es: 'El update masivo no pasa por la versión ni por los callbacks de la entidad. Si eso importa, no lo uses a ciegas. Una sesión sin estado tampoco tiene caché ni cascadas.',
      en: 'A bulk update does not go through the version or the entity callbacks. If that matters, do not use it blindly. A stateless session also has no cache and no cascades.',
    },
  },
];
