import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_JPA_HIBERNATE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-hib-01',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Cuáles son los cuatro estados de una entidad JPA y qué los distingue?',
      en: 'What are the four JPA entity states and what distinguishes them?',
    },
    answer: {
      es: 'Transitoria (nueva, sin contexto ni fila), gestionada (en el contexto), desconectada (tiene identidad pero no está en el contexto) y eliminada (programada para el DELETE en el flush).',
      en: 'Transient (new, with no context and no row), managed (in the context), detached (it has identity but is not in the context) and removed (scheduled for DELETE on flush).',
    },
    distractors: [
      {
        es: 'Solo gestionada y desconectada: transitoria es un POJO cualquiera y eliminada desaparece de inmediato al llamar remove.',
        en: 'Only managed and detached: transient is just any POJO and removed disappears immediately when remove is called.',
      },
      {
        es: 'Nueva, sucia, limpia y borrada, que son las banderas internas del dirty checking expuestas como estados de la entidad.',
        en: 'New, dirty, clean and deleted, which are the internal dirty checking flags exposed as entity states.',
      },
    ],
    explanation: {
      es: 'EntityManager.persist pasa de transitoria a gestionada; close, clear o detach la dejan desconectada; remove marca REMOVED y el DELETE se emite en el flush, no al instante. PersistentObjectException aparece si se hace persist de una desconectada. Sucia o limpia no son estados del ciclo de vida, solo el resultado de comparar el snapshot.',
      en: 'EntityManager.persist moves transient to managed; close, clear or detach leave it detached; remove marks REMOVED and DELETE is emitted on flush, not instantly. PersistentObjectException appears if persist is called on a detached instance. Dirty or clean are not lifecycle states, only the result of comparing the snapshot.',
    },
  },
  {
    id: 'be-hib-02',
    topic: 'JPA e Hibernate',
    prompt: {
      es: 'Tienes una entidad desconectada. ¿Qué ocurre si llamas persist frente a merge?',
      en: 'You have a detached entity. What happens if you call persist versus merge?',
    },
    answer: {
      es: 'persist lanza PersistentObjectException o EntityExistsException; merge copia el estado sobre una instancia gestionada y devuelve esa instancia.',
      en: 'persist throws PersistentObjectException or EntityExistsException; merge copies the state onto a managed instance and returns that instance.',
    },
    distractors: [
      {
        es: 'persist reatacha la misma instancia al contexto; merge siempre inserta una fila nueva con otro identificador.',
        en: 'persist reattaches the same instance to the context; merge always inserts a new row with another identifier.',
      },
      {
        es: 'Ambos reatachan; persist es más barato porque evita el SELECT que merge ejecuta para recargar.',
        en: 'Both reattach; persist is cheaper because it skips the SELECT that merge runs to reload.',
      },
    ],
    explanation: {
      es: 'La especificación JPA manda EntityExistsException si se invoca persist sobre una desconectada; Hibernate 6 suele adelantar PersistentObjectException: detached entity passed to persist. merge puede hacer un SELECT para alinear el snapshot y, trampa clásica, la referencia original sigue desconectada: hay que usar el valor de retorno. persist sí se usa para transitorias, no para reatachar.',
      en: 'The JPA specification requires EntityExistsException if persist is invoked on a detached instance; Hibernate 6 often throws PersistentObjectException: detached entity passed to persist. merge may run a SELECT to align the snapshot and, classic trap, the original reference stays detached: you must use the return value. persist is for transient instances, not for reattaching.',
    },
  },
  {
    id: 'be-hib-03',
    topic: 'JPA e Hibernate',
    prompt: {
      es: 'En Spring Data JPA, ¿qué hace save con una entidad que ya tiene identificador asignado?',
      en: 'In Spring Data JPA, what does save do with an entity that already has an assigned identifier?',
    },
    answer: {
      es: 'Si isNew es falso, save delega en merge, lo que suele provocar un SELECT y luego INSERT o UPDATE, aunque la fila nunca haya existido.',
      en: 'If isNew is false, save delegates to merge, which usually causes a SELECT and then an INSERT or UPDATE, even if the row never existed.',
    },
    distractors: [
      {
        es: 'save detecta el identificador y siempre llama persist, que inserta sin consultar porque el id ya está listo.',
        en: 'save detects the identifier and always calls persist, which inserts without querying because the id is already ready.',
      },
      {
        es: 'save ignora el identificador y usa persist o merge según exista @Version, que es el único criterio de isNew.',
        en: 'save ignores the identifier and uses persist or merge according to whether @Version exists, which is the only isNew criterion.',
      },
    ],
    explanation: {
      es: 'SimpleJpaRepository.save llama persist solo si entityInformation.isNew(entity); isNew es verdadero si el id es nulo o, si hay @Version, si la versión es nula. Un UUID asignado en el constructor hace isNew falso, dispara merge y un SELECT extra. Se corrige implementando Persistable.isNew o generando el id con @GeneratedValue.',
      en: 'SimpleJpaRepository.save calls persist only if entityInformation.isNew(entity); isNew is true if the id is null or, when @Version is present, if the version is null. A UUID assigned in the constructor makes isNew false, triggers merge and an extra SELECT. It is fixed by implementing Persistable.isNew or generating the id with @GeneratedValue.',
    },
  },
  {
    id: 'be-hib-04',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Qué tipos de cascade define JPA y por qué CascadeType.ALL puede ser peligroso?',
      en: 'Which cascade types does JPA define and why can CascadeType.ALL be dangerous?',
    },
    answer: {
      es: 'PERSIST, MERGE, REMOVE, REFRESH y DETACH; ALL incluye REMOVE y puede borrar entidades compartidas, sobre todo en @ManyToMany o @ManyToOne.',
      en: 'PERSIST, MERGE, REMOVE, REFRESH and DETACH; ALL includes REMOVE and can delete shared entities, especially on @ManyToMany or @ManyToOne.',
    },
    distractors: [
      {
        es: 'ALL solo encadena persist y merge; REMOVE hay que declararlo aparte, por eso ALL es la opción segura por defecto.',
        en: 'ALL only chains persist and merge; REMOVE must be declared separately, which is why ALL is the safe default.',
      },
      {
        es: 'Los tipos de cascade controlan el fetch; ALL equivale a EAGER en todas las asociaciones y degrada las consultas.',
        en: 'Cascade types control fetching; ALL equals EAGER on every association and degrades queries.',
      },
    ],
    explanation: {
      es: 'CascadeType no tiene nada que ver con FetchType. ALL es la unión de los cinco tipos JPA e incluye REMOVE y MERGE: al borrar un Producto con @ManyToMany(cascade=ALL) hacia Categoria se pueden emitir DELETE de categorias usadas por otros productos. En composiciones padre-hijo se prefieren PERSIST y MERGE más orphanRemoval, no ALL ciego.',
      en: 'CascadeType has nothing to do with FetchType. ALL is the union of the five JPA types and includes REMOVE and MERGE: deleting a Product with @ManyToMany(cascade=ALL) towards Category can emit DELETE of categories used by other products. In parent-child compositions prefer PERSIST and MERGE plus orphanRemoval, not blind ALL.',
    },
  },
  {
    id: 'be-hib-05',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Qué diferencia hay entre orphanRemoval y CascadeType.REMOVE?',
      en: 'What is the difference between orphanRemoval and CascadeType.REMOVE?',
    },
    answer: {
      es: 'orphanRemoval borra el hijo al quitarlo de la colección o al anular la relación; REMOVE solo borra los hijos cuando se borra el padre.',
      en: 'orphanRemoval deletes the child when it is removed from the collection or the relation is nulled; REMOVE only deletes the children when the parent is deleted.',
    },
    distractors: [
      {
        es: 'Son equivalentes: JPA trata orphanRemoval como un atajo de CascadeType.REMOVE en asociaciones @OneToMany.',
        en: 'They are equivalent: JPA treats orphanRemoval as a shortcut for CascadeType.REMOVE on @OneToMany associations.',
      },
      {
        es: 'orphanRemoval borra al padre si se queda sin hijos; REMOVE borra solo la fila de unión en la tabla intermedia.',
        en: 'orphanRemoval deletes the parent if it is left without children; REMOVE only deletes the join row in the association table.',
      },
    ],
    explanation: {
      es: 'orphanRemoval=true en @OneToMany o @OneToOne modela composición: un LineaPedido huérfano no puede existir y el EntityManager emite DELETE al hacer flush, sin llamar remove sobre el padre. Mover un hijo de un padre a otro con orphanRemoval lo elimina y puede terminar en pérdida de datos o EntityNotFoundException. REMOVE no observa la colección, solo el remove del agregado.',
      en: 'orphanRemoval=true on @OneToMany or @OneToOne models composition: an orphan OrderLine cannot exist and EntityManager emits DELETE on flush, without calling remove on the parent. Moving a child from one parent to another with orphanRemoval deletes it and can end in data loss or EntityNotFoundException. REMOVE does not watch the collection, only remove of the aggregate.',
    },
  },
  {
    id: 'be-hib-06',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Cómo se comportan SINGLE_TABLE, JOINED y TABLE_PER_CLASS al heredar entidades?',
      en: 'How do SINGLE_TABLE, JOINED and TABLE_PER_CLASS behave when inheriting entities?',
    },
    answer: {
      es: 'SINGLE_TABLE usa una tabla y @DiscriminatorColumn; JOINED normaliza con JOIN a subtablas; TABLE_PER_CLASS duplica columnas y las consultas polimórficas hacen UNION.',
      en: 'SINGLE_TABLE uses one table and @DiscriminatorColumn; JOINED normalises with JOINs to subclass tables; TABLE_PER_CLASS duplicates columns and polymorphic queries use UNION.',
    },
    distractors: [
      {
        es: 'SINGLE_TABLE crea una tabla por subclase concreta; JOINED usa un discriminador; TABLE_PER_CLASS es un JOIN de todas las tablas del árbol.',
        en: 'SINGLE_TABLE creates one table per concrete subclass; JOINED uses a discriminator; TABLE_PER_CLASS is a JOIN of every table in the tree.',
      },
      {
        es: 'Las tres estrategias generan el mismo esquema; @Inheritance solo cambia el SQL de lectura, no las columnas físicas.',
        en: 'The three strategies generate the same schema; @Inheritance only changes the read SQL, not the physical columns.',
      },
    ],
    explanation: {
      es: '@Inheritance(strategy=SINGLE_TABLE) es la default: columnas de subclase nullable y lecturas rápidas. JOINED evita nulos pero paga JOIN. TABLE_PER_CLASS no tiene tabla padre compartida y GenerationType.IDENTITY suele ser inviable porque el id no es global al árbol; Hibernate 6 sigue emitiendo UNION ALL en un find polimórfico.',
      en: '@Inheritance(strategy=SINGLE_TABLE) is the default: subclass columns are nullable and reads are fast. JOINED avoids nulls but pays JOINs. TABLE_PER_CLASS has no shared parent table and GenerationType.IDENTITY is often unusable because the id is not global to the tree; Hibernate 6 still emits UNION ALL on a polymorphic find.',
    },
  },
  {
    id: 'be-hib-07',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Para qué sirven @Embeddable y @Embedded y qué implica usarlos como objeto de valor?',
      en: 'What are @Embeddable and @Embedded for and what does using them as a value object imply?',
    },
    answer: {
      es: 'Modelan un objeto sin identidad propia cuyos campos se mapean en la tabla del dueño; su ciclo de vida es el de la entidad que los incrusta.',
      en: 'They model an object with no identity of its own whose fields map into the owner table; its lifecycle is that of the embedding entity.',
    },
    distractors: [
      {
        es: 'Declaran una entidad débil con tabla propia e @Id compuesto que Hibernate gestiona con persist en cascada.',
        en: 'They declare a weak entity with its own table and a composite @Id that Hibernate manages with cascaded persist.',
      },
      {
        es: 'Convierten la clase en un AttributeConverter para persistir el valor como JSON en una sola columna.',
        en: 'They turn the class into an AttributeConverter to persist the value as JSON in a single column.',
      },
    ],
    explanation: {
      es: '@Embeddable en Direccion y @Embedded en Cliente copian calle y ciudad a la tabla cliente; @AttributeOverride resuelve colisiones de nombres. No hay SELECT extra ni identidad, así que no van a un EntityManager.find. Si necesitas tabla propia e identidad, eso es @OneToOne o @ElementCollection de embeddables, no un AttributeConverter.',
      en: '@Embeddable on Address and @Embedded on Customer copy street and city into the customer table; @AttributeOverride resolves name collisions. There is no extra SELECT and no identity, so they do not go through EntityManager.find. If you need an own table and identity, that is @OneToOne or an @ElementCollection of embeddables, not an AttributeConverter.',
    },
  },
  {
    id: 'be-hib-08',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Cuándo usar @ElementCollection y cuáles son sus limitaciones?',
      en: 'When should you use @ElementCollection and what are its limitations?',
    },
    answer: {
      es: 'Para colecciones de básicos o @Embeddable sin identidad; viven en @CollectionTable, no se comparten y muchos updates reescriben todas las filas.',
      en: 'For collections of basics or @Embeddable values without identity; they live in a @CollectionTable, they are not shared and many updates rewrite every row.',
    },
    distractors: [
      {
        es: 'Para colecciones de entidades hijas, sustituyendo a @OneToMany cuando no quieres mappedBy.',
        en: 'For collections of child entities, replacing @OneToMany when you do not want mappedBy.',
      },
      {
        es: 'Para mapear un Map entidad-entidad con clave y valor gestionados, equivalente a @ManyToMany con tabla intermedia.',
        en: 'To map an entity-to-entity Map with managed key and value, equivalent to @ManyToMany with a join table.',
      },
    ],
    explanation: {
      es: '@ElementCollection(fetch=LAZY) es el default y no admite CascadeType porque los elementos no son entidades: no hay EntityManager.find de un elemento. Hibernate suele hacer DELETE FROM tags WHERE owner_id=? e INSERT de todos al mutar la colección, lo que duele en listas grandes. Si el elemento necesita id o relaciones, debe ser @Entity con @OneToMany.',
      en: '@ElementCollection(fetch=LAZY) is the default and does not accept CascadeType because elements are not entities: there is no EntityManager.find of an element. Hibernate often runs DELETE FROM tags WHERE owner_id=? and INSERT of all rows when the collection mutates, which hurts on large lists. If the element needs an id or relations, it must be an @Entity with @OneToMany.',
    },
  },
  {
    id: 'be-hib-09',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Por qué GenerationType.IDENTITY impide el batching de inserts frente a SEQUENCE?',
      en: 'Why does GenerationType.IDENTITY prevent insert batching compared to SEQUENCE?',
    },
    answer: {
      es: 'IDENTITY exige ejecutar el INSERT para obtener el id, así que Hibernate no puede agrupar inserts; SEQUENCE reserva ids antes y permite hibernate.jdbc.batch_size.',
      en: 'IDENTITY requires executing the INSERT to obtain the id, so Hibernate cannot group inserts; SEQUENCE allocates ids beforehand and allows hibernate.jdbc.batch_size.',
    },
    distractors: [
      {
        es: 'IDENTITY es más rápido en batch porque la base numera al insertar; SEQUENCE obliga a un SELECT extra por fila y rompe el lote.',
        en: 'IDENTITY is faster in batch because the database numbers rows on insert; SEQUENCE forces an extra SELECT per row and breaks the batch.',
      },
      {
        es: 'Ambas estrategias batchan igual en Hibernate 6; solo TABLE no agrupa porque usa una tabla de secuencias.',
        en: 'Both strategies batch equally in Hibernate 6; only TABLE fails to group because it uses a sequence table.',
      },
    ],
    explanation: {
      es: 'Con @GeneratedValue(strategy=IDENTITY) el JDBC debe ejecutar el INSERT para leer last_insert_id o RETURNING, y el lote se rompe. SEQUENCE con allocationSize y el optimizador pooled-lo de Hibernate 6 pide un bloque de ids y retrasa los INSERT hasta el flush, respetando hibernate.jdbc.batch_size. En PostgreSQL SEQUENCE es la opción natural; TABLE añade un cuello de botella de contención.',
      en: 'With @GeneratedValue(strategy=IDENTITY) JDBC must execute the INSERT to read last_insert_id or RETURNING, and the batch breaks. SEQUENCE with allocationSize and the Hibernate 6 pooled-lo optimizer asks for a block of ids and delays INSERTs until flush, honouring hibernate.jdbc.batch_size. On PostgreSQL SEQUENCE is the natural choice; TABLE adds a contention bottleneck.',
    },
  },
  {
    id: 'be-hib-10',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Cómo afecta elegir clave natural o subrogada a equals y hashCode de la entidad?',
      en: 'How does choosing a natural versus surrogate key affect entity equals and hashCode?',
    },
    answer: {
      es: 'Un id subrogado nulo antes del persist cambia el hash al asignarse y rompe Set; se usa una clave de negocio estable o un UUID asignado al construir.',
      en: 'A surrogate id that is null before persist changes the hash when assigned and breaks Set; use a stable business key or a UUID assigned at construction.',
    },
    distractors: [
      {
        es: 'equals y hashCode deben usar siempre el id generado, porque JPA garantiza que ya está asignado al añadir la entidad a una colección.',
        en: 'equals and hashCode must always use the generated id, because JPA guarantees it is already assigned when the entity is added to a collection.',
      },
      {
        es: 'No hace falta implementarlos: la igualdad de entidades es por identidad de referencia del contexto, incluso desconectadas.',
        en: 'There is no need to implement them: entity equality is by persistence context reference identity, even when detached.',
      },
    ],
    explanation: {
      es: 'Si hashCode usa un @Id Identity nulo y luego Hibernate lo rellena, el objeto se pierde dentro de un HashSet de hijos. Lombok @EqualsAndHashCode sobre todos los campos incluye colecciones perezosas y puede disparar LazyInitializationException. La clave natural inmutable o un UUID en el constructor mantiene el contrato fuera del contexto de persistencia.',
      en: 'If hashCode uses a null Identity @Id and Hibernate later fills it, the object is lost inside a children HashSet. Lombok @EqualsAndHashCode on every field includes lazy collections and can trigger LazyInitializationException. An immutable business key or a UUID in the constructor keeps the contract outside the persistence context.',
    },
  },
  {
    id: 'be-hib-11',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Cuál es el alcance de la cache de primer nivel en JPA?',
      en: 'What is the scope of the first-level cache in JPA?',
    },
    answer: {
      es: 'El contexto de persistencia del EntityManager, en Spring suele durar la transacción @Transactional; garantiza una sola instancia Java por id.',
      en: 'The EntityManager persistence context, which in Spring usually lasts for the @Transactional transaction; it guarantees a single Java instance per id.',
    },
    distractors: [
      {
        es: 'Toda la JVM: SessionFactory comparte las entidades leídas entre hilos hasta que expire el TTL.',
        en: 'The whole JVM: SessionFactory shares loaded entities across threads until the TTL expires.',
      },
      {
        es: 'Solo la duración de cada consulta: al terminar el SELECT el contexto se vacía y la siguiente lectura va a la base.',
        en: 'Only the duration of each query: when the SELECT ends the context is emptied and the next read hits the database.',
      },
    ],
    explanation: {
      es: 'El first-level cache es el propio persistence context: repeatable read a nivel de instancia y dirty checking. En Spring Data, OpenEntityManagerInView puede alargarlo hasta la vista, pero no lo comparte entre peticiones. Confundirlo con la cache de segundo nivel (@Cacheable, Ehcache o Caffeine) es el error habitual: esa sí vive en el EntityManagerFactory.',
      en: 'The first-level cache is the persistence context itself: instance-level repeatable read and dirty checking. In Spring Data, OpenEntityManagerInView can extend it until the view, but it is not shared across requests. Mixing it up with the second-level cache (@Cacheable, Ehcache or Caffeine) is the usual mistake: that one does live on the EntityManagerFactory.',
    },
  },
  {
    id: 'be-hib-12',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Cuándo conviene la cache de segundo nivel y la cache de consultas?',
      en: 'When are the second-level cache and the query cache worthwhile?',
    },
    answer: {
      es: 'L2 para entidades de lectura frecuente y poca escritura con @Cacheable; la query cache solo si el conjunto de tablas es casi inmutable, porque se invalida al cambiar cualquier fila involucrada.',
      en: 'L2 for frequently read, rarely written entities with @Cacheable; the query cache only if the table set is almost immutable, because it is invalidated when any involved row changes.',
    },
    distractors: [
      {
        es: 'Siempre: habilitar hibernate.cache.use_query_cache acelera todo findBy porque reutiliza las entidades ya gestionadas del contexto.',
        en: 'Always: enabling hibernate.cache.use_query_cache speeds up every findBy because it reuses entities already managed in the context.',
      },
      {
        es: 'Solo en escrituras: L2 agrupa los UPDATE en lote y la query cache memoriza los JPQL de @Modifying para reejecutarlos.',
        en: 'Only on writes: L2 groups UPDATEs into a batch and the query cache memorises @Modifying JPQL to replay it.',
      },
    ],
    explanation: {
      es: 'La L2 se configura en el EntityManagerFactory con CacheConcurrencyStrategy READ_ONLY o READ_WRITE y un proveedor. La query cache no guarda entidades, solo ids, y cualquier UPDATE a esas tablas invalida las entradas: en datos transaccionales suele ser un lastre. Nunca sustituye al first-level cache ni batcha escrituras; hibernate.jdbc.batch_size es otro mecanismo.',
      en: 'L2 is configured on the EntityManagerFactory with CacheConcurrencyStrategy READ_ONLY or READ_WRITE and a provider. The query cache does not store entities, only ids, and any UPDATE to those tables invalidates entries: on transactional data it is often a drag. It never replaces the first-level cache nor batches writes; hibernate.jdbc.batch_size is a different mechanism.',
    },
  },
  {
    id: 'be-hib-13',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Qué diferencia hay entre FlushMode AUTO y COMMIT, y cómo ordena Hibernate las sentencias?',
      en: 'What is the difference between FlushMode AUTO and COMMIT, and how does Hibernate order statements?',
    },
    answer: {
      es: 'AUTO hace flush antes de consultas que podrían ver datos sucios y al commit; COMMIT solo al confirmar. El ActionQueue ordena inserts, updates y deletes por dependencia, no por el orden de tus llamadas.',
      en: 'AUTO flushes before queries that could see dirty data and on commit; COMMIT only on commit. The ActionQueue orders inserts, updates and deletes by dependency, not by the order of your calls.',
    },
    distractors: [
      {
        es: 'AUTO escribe cada persist al instante; COMMIT agrupa todo en un único lote JDBC respetando el orden exacto del código Java.',
        en: 'AUTO writes each persist immediately; COMMIT groups everything into a single JDBC batch respecting the exact Java code order.',
      },
      {
        es: 'AUTO y COMMIT solo cambian el aislamiento SQL; el orden de sentencias es el de invocación porque EntityManager es sincrónico.',
        en: 'AUTO and COMMIT only change SQL isolation; statement order follows invocation because EntityManager is synchronous.',
      },
    ],
    explanation: {
      es: 'FlushModeType.AUTO (default) puede emitir SQL inesperado antes de un JPQL para no devolver datos obsoletos; COMMIT retrasa el SQL y las lecturas pueden no ver tus cambios pendientes. Hibernate 6 ordena huérfanos, inserts, updates, colecciones y deletes para respetar FKs, lo que a veces choca con un UNIQUE. persist no es INSERT inmediato.',
      en: 'FlushModeType.AUTO (default) can emit unexpected SQL before a JPQL query so stale data is not returned; COMMIT delays SQL and reads may miss your pending changes. Hibernate 6 orders orphans, inserts, updates, collections and deletes to honour FKs, which sometimes collides with a UNIQUE. persist is not an immediate INSERT.',
    },
  },
  {
    id: 'be-hib-14',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Qué hacen flush, clear y detach sobre el contexto de persistencia?',
      en: 'What do flush, clear and detach do to the persistence context?',
    },
    answer: {
      es: 'flush sincroniza el SQL y deja las entidades gestionadas; detach desconecta una; clear desconecta todas. Ni clear ni detach hacen flush: los cambios no sincronizados se pierden.',
      en: 'flush synchronises SQL and leaves entities managed; detach disconnects one; clear disconnects all. Neither clear nor detach flushes: unsynchronised changes are lost.',
    },
    distractors: [
      {
        es: 'clear hace flush y luego vacía el contexto, que es el patrón de lotes; detach borra la fila de esa entidad.',
        en: 'clear flushes and then empties the context, which is the batch pattern; detach deletes the row of that entity.',
      },
      {
        es: 'flush desconecta tras escribir; clear solo descarta el first-level cache de consultas, no las entidades sucias.',
        en: 'flush disconnects after writing; clear only discards the query first-level cache, not dirty entities.',
      },
    ],
    explanation: {
      es: 'EntityManager.flush emite INSERT, UPDATE y DELETE y conserva managed para seguir el dirty checking. clear y detach, según la especificación, descartan cambios no sincronizados. El patrón de batch correcto es modificar, flush y después clear para no acumular snapshots. detach no equivale a remove: no hay DELETE.',
      en: 'EntityManager.flush emits INSERT, UPDATE and DELETE and keeps instances managed so dirty checking continues. clear and detach, per the specification, discard unsynchronised changes. The correct batch pattern is modify, flush and then clear so snapshots do not pile up. detach is not equivalent to remove: there is no DELETE.',
    },
  },
  {
    id: 'be-hib-15',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Qué distinguen join fetch, FetchMode.SUBSELECT y @BatchSize al cargar asociaciones?',
      en: 'What distinguishes join fetch, FetchMode.SUBSELECT and @BatchSize when loading associations?',
    },
    answer: {
      es: 'join fetch trae la asociación en el mismo SELECT y puede multiplicar filas; SUBSELECT lanza un SELECT con los padres ya cargados; @BatchSize agrupa la carga perezosa en lotes IN.',
      en: 'join fetch brings the association in the same SELECT and can multiply rows; SUBSELECT fires a SELECT with the already loaded parents; @BatchSize groups lazy loads into IN batches.',
    },
    distractors: [
      {
        es: 'Las tres evitan N+1 del mismo modo: un único JOIN; @BatchSize solo limita el tamaño de página de ese JOIN.',
        en: 'All three avoid N+1 the same way: a single JOIN; @BatchSize only limits the page size of that JOIN.',
      },
      {
        es: 'SUBSELECT es el default de Hibernate 6 para @OneToMany; join fetch y @BatchSize ya no se necesitan.',
        en: 'SUBSELECT is the Hibernate 6 default for @OneToMany; join fetch and @BatchSize are no longer needed.',
      },
    ],
    explanation: {
      es: 'join fetch en JPQL o @Fetch(JOIN) provoca producto cartesiano y MultipleBagFetchException si se hace join fetch de dos bags. @Fetch(SUBSELECT) emite un SELECT WHERE parent_id IN (la consulta original). @BatchSize(size=16) mantiene LAZY y carga de a 16 con IN. El default sigue siendo SELECT por asociación (N+1) si se recorre un lazy.',
      en: 'join fetch in JPQL or @Fetch(JOIN) causes a cartesian product and MultipleBagFetchException if two bags are join-fetched. @Fetch(SUBSELECT) emits a SELECT WHERE parent_id IN (the original query). @BatchSize(size=16) keeps LAZY and loads 16 at a time with IN. The default is still per-association SELECT (N+1) when a lazy association is walked.',
    },
  },
  {
    id: 'be-hib-16',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Qué diferencia hay entre un @NamedEntityGraph y un EntityGraph dinámico?',
      en: 'What is the difference between a @NamedEntityGraph and a dynamic EntityGraph?',
    },
    answer: {
      es: 'El nombrado se declara en la entidad y se reutiliza; el dinámico se arma en runtime con EntityManager.createEntityGraph. Ambos se aplican con fetchgraph o loadgraph.',
      en: 'The named one is declared on the entity and reused; the dynamic one is built at runtime with EntityManager.createEntityGraph. Both are applied with fetchgraph or loadgraph.',
    },
    distractors: [
      {
        es: 'El nombrado fuerza EAGER global en el mapeo; el dinámico solo vale para native queries y no admite subgrafos.',
        en: 'The named one forces global EAGER on the mapping; the dynamic one only works for native queries and does not allow subgraphs.',
      },
      {
        es: 'Son APIs distintas de fetch: @NamedEntityGraph es de Hibernate y createEntityGraph es de Spring Data, incompatibles entre sí.',
        en: 'They are different fetch APIs: @NamedEntityGraph is from Hibernate and createEntityGraph is from Spring Data, incompatible with each other.',
      },
    ],
    explanation: {
      es: '@NamedEntityGraph(name=..., attributeNodes=@NamedAttributeNode) se referencia con @EntityGraph en el repositorio o con el hint jakarta.persistence.fetchgraph. fetchgraph deja LAZY lo no listado; loadgraph respeta el FetchType del mapeo. El dinámico permite armar paths por caso de uso sin tocar la entidad. Ninguno cambia el mapeo estático EAGER o LAZY de forma permanente.',
      en: '@NamedEntityGraph(name=..., attributeNodes=@NamedAttributeNode) is referenced with @EntityGraph on the repository or with the jakarta.persistence.fetchgraph hint. fetchgraph leaves unlisted attributes LAZY; loadgraph respects the mapping FetchType. The dynamic graph lets you build paths per use case without touching the entity. Neither permanently changes the static EAGER or LAZY mapping.',
    },
  },
  {
    id: 'be-hib-17',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Por qué paginar una consulta con join fetch de una colección dispara un aviso de paginación en memoria?',
      en: 'Why does paginating a query with join fetch of a collection trigger an in-memory pagination warning?',
    },
    answer: {
      es: 'El JOIN multiplica filas y un LIMIT SQL cortaría entidades a medias; Hibernate carga todo y pagina en memoria, aviso HHH90003004.',
      en: 'The JOIN multiplies rows and a SQL LIMIT would cut entities in half; Hibernate loads everything and paginates in memory, warning HHH90003004.',
    },
    distractors: [
      {
        es: 'El aviso indica que falta setFirstResult; sin él Hibernate ignora Pageable y hay que paginar con subselect.',
        en: 'The warning means setFirstResult is missing; without it Hibernate ignores Pageable and you must paginate with subselect.',
      },
      {
        es: 'join fetch no es compatible con Page; Spring Data lanza IncorrectResultSizeDataAccessException y hay que usar Slice.',
        en: 'join fetch is not compatible with Page; Spring Data throws IncorrectResultSizeDataAccessException and you must use Slice.',
      },
    ],
    explanation: {
      es: 'Con firstResult/maxResults y fetch de colección, Hibernate 6 registra HHH90003004 porque no puede traducir la página a SQL fiable. La consulta de count de Page también se distorsiona por las filas duplicadas. El arreglo es paginar ids sin fetch (o con joins to-one), luego cargar el grafo por IN, o usar @BatchSize. Slice evita el count pero no el problema del LIMIT.',
      en: 'With firstResult/maxResults and a collection fetch, Hibernate 6 logs HHH90003004 because it cannot translate the page to reliable SQL. The Page count query is also distorted by duplicated rows. The fix is to paginate ids without fetch (or with to-one joins), then load the graph by IN, or use @BatchSize. Slice avoids the count but not the LIMIT problem.',
    },
  },
  {
    id: 'be-hib-18',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Por qué proyectar a un DTO evita el costo de materializar entidades?',
      en: 'Why does projecting to a DTO avoid the cost of materialising entities?',
    },
    answer: {
      es: 'El DTO no entra al contexto, no tiene snapshot ni dirty checking ni proxies lazy; se construye con select new, proyecciones de Spring Data o TupleTransformer.',
      en: 'The DTO does not enter the context, it has no snapshot, no dirty checking and no lazy proxies; it is built with select new, Spring Data projections or TupleTransformer.',
    },
    distractors: [
      {
        es: 'El DTO se gestiona igual que la entidad pero Hibernate desactiva el @Id, así que save sigue funcionando sobre el record.',
        en: 'The DTO is managed just like the entity but Hibernate disables @Id, so save still works on the record.',
      },
      {
        es: 'La proyección solo evita el SELECT de colecciones; la entidad raíz sigue gestionada para poder hacer flush.',
        en: 'The projection only skips collection SELECTs; the root entity stays managed so flush can still run.',
      },
    ],
    explanation: {
      es: 'select new com.ejemplo.PedidoResumen(p.id, p.total) o una interfaz cerrada de Spring Data no llama a persist ni ocupa el first-level cache. Hibernate 6 ofrece TupleTransformer para mapeos más ricos. La contrapartida es que no hay contexto: mutar el DTO y esperar un UPDATE no hace nada, y no aparece LazyInitializationException porque no hay asociaciones.',
      en: 'select new com.example.OrderSummary(o.id, o.total) or a Spring Data closed interface does not call persist and does not occupy the first-level cache. Hibernate 6 offers TupleTransformer for richer mappings. The trade-off is that there is no context: mutating the DTO and expecting an UPDATE does nothing, and LazyInitializationException does not appear because there are no associations.',
    },
  },
  {
    id: 'be-hib-19',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Qué distinguen @IdClass, @EmbeddedId y @MapsId al modelar claves compuestas o derivadas?',
      en: 'What distinguishes @IdClass, @EmbeddedId and @MapsId when modelling composite or derived keys?',
    },
    answer: {
      es: '@IdClass duplica los campos @Id en la entidad; @EmbeddedId agrupa la clave en un value object; @MapsId reutiliza el id del padre como PK/FK derivada.',
      en: '@IdClass duplicates the @Id fields on the entity; @EmbeddedId groups the key into a value object; @MapsId reuses the parent id as a derived PK/FK.',
    },
    distractors: [
      {
        es: '@MapsId sustituye a @GeneratedValue en claves simples SEQUENCE; @IdClass y @EmbeddedId son alias idénticos de Hibernate 6.',
        en: '@MapsId replaces @GeneratedValue on simple SEQUENCE keys; @IdClass and @EmbeddedId are identical Hibernate 6 aliases.',
      },
      {
        es: '@EmbeddedId solo vale para @ElementCollection; para entidades se obliga @IdClass y @MapsId copia el UUID al @Version.',
        en: '@EmbeddedId is only valid for @ElementCollection; entities require @IdClass and @MapsId copies the UUID onto @Version.',
      },
    ],
    explanation: {
      es: '@EmbeddedId PedidoId es un @Embeddable con equals y hashCode bien definidos; @IdClass exige la misma forma en una clase aparte y campos repetidos. @MapsId en un @OneToOne o @ManyToOne copia el identificador del padre al hijo (identidad derivada) y no lleva @GeneratedValue propio. Confundir @MapsId con generación SEQUENCE o con @Version es un error frecuente de entrevistas.',
      en: '@EmbeddedId OrderId is an @Embeddable with well defined equals and hashCode; @IdClass requires the same shape in a separate class plus duplicated fields. @MapsId on a @OneToOne or @ManyToOne copies the parent identifier onto the child (derived identity) and does not carry its own @GeneratedValue. Mixing @MapsId with SEQUENCE generation or with @Version is a frequent interview mistake.',
    },
  },
  {
    id: 'be-hib-20',
    topic: 'JPA e Hibernate',
    prompt: {
      es: '¿Por qué el dirty checking duele con miles de entidades gestionadas y qué alternativas hay en procesos por lotes?',
      en: 'Why does dirty checking hurt with thousands of managed entities and what are the batch alternatives?',
    },
    answer: {
      es: 'Cada flush compara todas las entidades con su snapshot; se mitiga con flush más clear, StatelessSession, JPQL bulk @Modifying o enhancement de bytecode.',
      en: 'Each flush compares every entity with its snapshot; it is mitigated with flush plus clear, StatelessSession, bulk JPQL @Modifying or bytecode enhancement.',
    },
    distractors: [
      {
        es: 'El costo es lineal solo al commit; subir hibernate.jdbc.batch_size elimina el dirty checking porque el driver ya compara filas.',
        en: 'The cost is linear only on commit; raising hibernate.jdbc.batch_size removes dirty checking because the driver already compares rows.',
      },
      {
        es: 'Hibernate 6 sustituyó el dirty checking por listeners JDBC; con miles de entidades solo hay que abrir un EntityManager por fila.',
        en: 'Hibernate 6 replaced dirty checking with JDBC listeners; with thousands of entities you only need to open one EntityManager per row.',
      },
    ],
    explanation: {
      es: 'El persistence context retiene la entidad y una copia para detectar cambios, O(n) en cada flush, más memoria. El patrón de lote es persistir un bloque, EntityManager.flush, clear, y jdbc.batch_size. StatelessSession no tiene cache ni cascade. Un UPDATE masivo con @Modifying(clearAutomatically=true) evita el contexto pero también salta @Version y callbacks @PreUpdate, hay que saberlo.',
      en: 'The persistence context retains the entity and a copy to detect changes, O(n) on every flush, plus memory. The batch pattern is to persist a chunk, EntityManager.flush, clear, and jdbc.batch_size. StatelessSession has no cache and no cascade. A bulk UPDATE with @Modifying(clearAutomatically=true) skips the context but also skips @Version and @PreUpdate callbacks, which you must know.',
    },
  },
];
