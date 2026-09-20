import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_SPRING_DATA_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-data-01',
    topic: 'Spring Data',
    prompt: {
      es: '¿Qué reglas sigue Spring Data para derivar una consulta a partir del nombre del método?',
      en: 'Which rules does Spring Data follow to derive a query from the method name?',
    },
    answer: {
      es: 'Parsea un prefijo (find, count, exists, delete), luego By y propiedades unidas con And, Or y palabras clave como GreaterThan o Like.',
      en: 'It parses a prefix (find, count, exists, delete), then By and properties joined with And, Or and keywords such as GreaterThan or Like.',
    },
    distractors: [
      {
        es: 'El nombre es solo un alias: sin @Query el método no ejecuta nada, aunque coincida con atributos de la entidad.',
        en: 'The name is only an alias: without @Query the method executes nothing, even if it matches entity attributes.',
      },
      {
        es: 'Cualquier identificador vale si contiene el nombre de una columna; And, Between o OrderBy se ignoran como ruido.',
        en: 'Any identifier works if it contains a column name; And, Between or OrderBy are ignored as noise.',
      },
    ],
    explanation: {
      es: 'El parser traduce cada segmento a un predicado Criteria; un atributo inexistente falla al arrancar con QueryCreationException o PropertyReferenceException. @Query sustituye por completo esa derivación cuando el nombre no alcanza. Distinct, First, Top e IgnoreCase también forman parte de la gramática, no son adornos.',
      en: 'The parser turns each segment into a Criteria predicate; a missing attribute fails at startup with QueryCreationException or PropertyReferenceException. @Query fully replaces that derivation when the name is not enough. Distinct, First, Top and IgnoreCase are also part of the grammar, not decoration.',
    },
  },
  {
    id: 'be-data-02',
    topic: 'Spring Data',
    prompt: {
      es: '¿Qué diferencia hay entre una consulta JPQL y una nativa, y para qué sirve nativeQuery?',
      en: 'What is the difference between a JPQL query and a native one, and what is nativeQuery for?',
    },
    answer: {
      es: 'JPQL habla de entidades y atributos; nativeQuery = true envía SQL del dialecto de la base. JPQL es portable, el SQL nativo no.',
      en: 'JPQL talks about entities and attributes; nativeQuery = true sends dialect SQL of the database. JPQL is portable, native SQL is not.',
    },
    distractors: [
      {
        es: 'nativeQuery = true ejecuta JPQL saltándose el traductor a SQL, así que es más rápido y sigue siendo portable.',
        en: 'nativeQuery = true runs JPQL skipping the SQL translator, so it is faster and remains portable.',
      },
      {
        es: 'JPQL y SQL nativo son equivalentes; nativeQuery solo cambia el dialecto que Hibernate elige al generar el plan.',
        en: 'JPQL and native SQL are equivalent; nativeQuery only changes the dialect Hibernate picks when generating the plan.',
      },
    ],
    explanation: {
      es: 'Con @Query el valor por defecto es JPQL; hay que poner nativeQuery = true para SQL real, y entonces se pierde el mapeo automático de relaciones. Un JPQL inválido lanza QuerySyntaxException o IllegalArgumentException al crear el bean. El SQL nativo puede devolver Object[] o mapeos con SqlResultSetMapping, no entidades gestionadas salvo que se indique explícitamente.',
      en: 'On @Query the default is JPQL; you must set nativeQuery = true for real SQL, and then automatic relation mapping is lost. Invalid JPQL throws QuerySyntaxException or IllegalArgumentException when creating the bean. Native SQL may return Object[] or mappings with SqlResultSetMapping, not managed entities unless that is stated explicitly.',
    },
  },
  {
    id: 'be-data-03',
    topic: 'Spring Data',
    prompt: {
      es: '¿Para qué sirven @Modifying y clearAutomatically en una consulta de actualización o borrado?',
      en: 'What are @Modifying and clearAutomatically for on an update or delete query?',
    },
    answer: {
      es: '@Modifying declara que el JPQL o SQL cambia datos; clearAutomatically = true vacía el contexto para que no queden entidades con valores viejos.',
      en: '@Modifying declares that the JPQL or SQL changes data; clearAutomatically = true clears the context so managed entities do not keep stale values.',
    },
    distractors: [
      {
        es: '@Modifying acelera save porque desactiva el dirty checking; clearAutomatically cierra la transacción al terminar el UPDATE.',
        en: '@Modifying speeds up save because it turns dirty checking off; clearAutomatically closes the transaction when the UPDATE ends.',
      },
      {
        es: 'clearAutomatically es un alias de flushAutomatically: ambos fuerzan un flush y dejan el contexto intacto.',
        en: 'clearAutomatically is an alias of flushAutomatically: both force a flush and leave the context intact.',
      },
    ],
    explanation: {
      es: 'Sin @Modifying, Spring Data lanza InvalidJpaQueryMethodException al ejecutar un UPDATE o DELETE. El bulk no actualiza las copias managed, de modo que un find posterior en la misma transacción puede devolver datos obsoletos si no se hace clear. flushAutomatically (distinto) hace flush antes de la consulta; por defecto ambos flags están en false.',
      en: 'Without @Modifying, Spring Data throws InvalidJpaQueryMethodException when running an UPDATE or DELETE. The bulk does not update managed copies, so a later find in the same transaction may return stale data if clear is not called. flushAutomatically (a different flag) flushes before the query; both flags default to false.',
    },
  },
  {
    id: 'be-data-04',
    topic: 'Spring Data',
    prompt: {
      es: '¿En qué se diferencian una proyección de interfaz cerrada, una abierta y un DTO con expresión de constructor?',
      en: 'How do a closed interface projection, an open one and a DTO with a constructor expression differ?',
    },
    answer: {
      es: 'La cerrada declara getters de propiedades y puede limitar el SELECT; la abierta usa @Value con SpEL sobre la entidad; el DTO se instancia con select new paquete.Dto(...) en JPQL.',
      en: 'The closed one declares property getters and can limit the SELECT; the open one uses @Value with SpEL on the entity; the DTO is instantiated with select new package.Dto(...) in JPQL.',
    },
    distractors: [
      {
        es: 'Las tres se materializan igual: Spring elige automáticamente según el número de columnas del ResultSet.',
        en: 'All three materialise the same way: Spring picks automatically according to the number of ResultSet columns.',
      },
      {
        es: 'La interfaz abierta es más eficiente porque no instancia clases; el DTO con constructor siempre dispara el problema N+1.',
        en: 'The open interface is more efficient because it does not instantiate classes; the constructor DTO always triggers the N+1 problem.',
      },
    ],
    explanation: {
      es: 'La proyección cerrada puede optimizarse a un SELECT parcial; la abierta carga la entidad completa para evaluar SpEL con @Value, así que no ahorra columnas. La expresión de constructor es JPQL y falla con QuerySyntaxException si el constructor no coincide. Un DTO de clase con constructor acorde también puede usarse como proyección de Spring Data sin new, pero eso no es la expresión de constructor.',
      en: 'A closed projection can be optimised to a partial SELECT; an open one loads the full entity to evaluate SpEL with @Value, so it does not save columns. The constructor expression is JPQL and fails with QuerySyntaxException if the constructor does not match. A class DTO with a matching constructor can also be used as a Spring Data projection without new, but that is not the constructor expression.',
    },
  },
  {
    id: 'be-data-05',
    topic: 'Spring Data',
    prompt: {
      es: '¿Cómo se usan Specification y la API Criteria para construir filtros dinámicos?',
      en: 'How are Specification and the Criteria API used to build dynamic filters?',
    },
    answer: {
      es: 'Specification encapsula un Predicate de Criteria; se combinan con and, or y not para predicados opcionales sin concatenar JPQL.',
      en: 'A Specification wraps a Criteria Predicate; they combine with and, or and not for optional predicates without concatenating JPQL.',
    },
    distractors: [
      {
        es: 'Specification genera SQL nativo dinámico; Criteria solo sirve para la consulta de conteo de Page.',
        en: 'Specification generates dynamic native SQL; Criteria is only used for the Page count query.',
      },
      {
        es: 'Criteria sustituye a @Query en todos los repositorios; Specification es un atajo de Query by Example.',
        en: 'Criteria replaces @Query on every repository; Specification is a shortcut for Query by Example.',
      },
    ],
    explanation: {
      es: 'El repositorio debe extender JpaSpecificationExecutor; toPredicate recibe Root, CriteriaQuery y CriteriaBuilder. Un atributo mal escrito en el metamodelo lanza IllegalArgumentException al ejecutar. Es el mecanismo adecuado cuando los filtros llegan opcionales desde la API, algo que el nombre derivado y @Query estático no cubren bien.',
      en: 'The repository must extend JpaSpecificationExecutor; toPredicate receives Root, CriteriaQuery and CriteriaBuilder. A mistyped attribute on the metamodel throws IllegalArgumentException at execution. This is the right mechanism when filters arrive optional from the API, something derived names and static @Query do not cover well.',
    },
  },
  {
    id: 'be-data-06',
    topic: 'Spring Data',
    prompt: {
      es: '¿Qué es Query by Example y cuáles son sus límites?',
      en: 'What is Query by Example and what are its limits?',
    },
    answer: {
      es: 'Construye la consulta desde una entidad sonda y un ExampleMatcher; no cubre bien OR finos, rangos, GreaterThan ni asociaciones anidadas profundas.',
      en: 'It builds the query from a probe entity and an ExampleMatcher; it does not cover fine-grained OR, ranges, GreaterThan or deep nested associations well.',
    },
    distractors: [
      {
        es: 'QBE expresa cualquier predicado, incluidos Between, joins de colecciones y subconsultas, igual que Criteria.',
        en: 'QBE expresses any predicate, including Between, collection joins and subqueries, just like Criteria.',
      },
      {
        es: 'QBE reemplaza a Specification porque el Example se traduce a Criteria sin restricciones de operadores.',
        en: 'QBE replaces Specification because the Example is translated to Criteria with no operator restrictions.',
      },
    ],
    explanation: {
      es: 'El Matcher ignora nulos por defecto y compara igualdad o coincidencias de cadena (starts, contains) según matching. Un probe con asociaciones mal usadas puede lanzar InvalidDataAccessApiUsageException. Cuando el filtro deja de ser igualdad sobre campos planos, hay que pasar a Specification o @Query.',
      en: 'The Matcher ignores nulls by default and compares equality or string matches (starts, contains) according to matching. A probe with misused associations may throw InvalidDataAccessApiUsageException. When the filter is no longer equality on flat fields, you must switch to Specification or @Query.',
    },
  },
  {
    id: 'be-data-07',
    topic: 'Spring Data',
    prompt: {
      es: '¿Qué costo añade Pageable respecto a Sort, y en qué se diferencia Slice de Page?',
      en: 'What cost does Pageable add compared to Sort, and how does Slice differ from Page?',
    },
    answer: {
      es: 'Page ejecuta los datos y un COUNT para el total; Slice omite el COUNT y solo indica si hay página siguiente. Sort ordena en ambos sin contar.',
      en: 'Page runs the data query and a COUNT for the total; Slice skips the COUNT and only tells if a next page exists. Sort orders in both without counting.',
    },
    distractors: [
      {
        es: 'Slice y Page son equivalentes; el COUNT se cachea siempre y Sort vacío evita la consulta de conteo.',
        en: 'Slice and Page are equivalent; the COUNT is always cached and an empty Sort avoids the count query.',
      },
      {
        es: 'Pageable no dispara COUNT si el tamaño de página es menor que 50; Slice siempre cuenta para rellenar totalElements.',
        en: 'Pageable does not fire COUNT if the page size is below 50; Slice always counts to fill totalElements.',
      },
    ],
    explanation: {
      es: 'El COUNT con joins o predicados pesados puede costar más que traer la página; Slice encaja en scroll infinito porque getTotalElements no existe. Sort solo añade ORDER BY. Un Pageable mal formado o un size excesivo puede acabar en IncorrectResultSizeDataAccessException o en un full scan. Se puede sustituir el conteo con countQuery en @Query.',
      en: 'COUNT with joins or heavy predicates can cost more than fetching the page; Slice fits infinite scroll because getTotalElements does not exist. Sort only adds ORDER BY. A malformed Pageable or an excessive size may end in IncorrectResultSizeDataAccessException or a full scan. The count can be replaced with countQuery on @Query.',
    },
  },
  {
    id: 'be-data-08',
    topic: 'Spring Data',
    prompt: {
      es: '¿Qué problema aparece al paginar una consulta que hace join a una colección?',
      en: 'What problem appears when paginating a query that joins a collection?',
    },
    answer: {
      es: 'El join multiplica filas y LIMIT/OFFSET recorta filas SQL, no entidades distintas; el total y el contenido de la página quedan distorsionados.',
      en: 'The join multiplies rows and LIMIT/OFFSET trims SQL rows, not distinct entities; the total and the page content become distorted.',
    },
    distractors: [
      {
        es: 'Pageable aplica DISTINCT automáticamente al detectar un join fetch, así que cada entidad aparece una sola vez.',
        en: 'Pageable applies DISTINCT automatically when it detects a join fetch, so each entity appears only once.',
      },
      {
        es: 'Hibernate desduplica siempre antes de paginar en SQL; el COUNT y el SELECT coinciden con el número de raíces.',
        en: 'Hibernate always deduplicates before paginating in SQL; the COUNT and the SELECT match the number of roots.',
      },
    ],
    explanation: {
      es: 'Con join fetch, Hibernate puede aplicar firstResult/maxResults al producto cartesiano o degradar a paginación en memoria, con un aviso en el log. DISTINCT en JPQL no siempre se traduce a DISTINCT SQL útil. La solución habitual es paginar ids sin fetch, cargar el grafo en una segunda consulta o usar @EntityGraph fuera de la página. El COUNT también se infla si comparte el join.',
      en: 'With join fetch, Hibernate may apply firstResult/maxResults to the cartesian product or fall back to in-memory pagination, with a warning in the log. DISTINCT in JPQL does not always become useful SQL DISTINCT. The usual fix is to page ids without fetch, load the graph in a second query or use @EntityGraph outside the page. COUNT is also inflated if it shares the join.',
    },
  },
  {
    id: 'be-data-09',
    topic: 'Spring Data',
    prompt: {
      es: '¿Cómo funciona la auditoría con @CreatedDate y @LastModifiedBy?',
      en: 'How does auditing with @CreatedDate and @LastModifiedBy work?',
    },
    answer: {
      es: 'Con @EnableJpaAuditing, AuditingEntityListener y un AuditorAware, se rellenan fechas y usuario al persistir y al actualizar.',
      en: 'With @EnableJpaAuditing, AuditingEntityListener and an AuditorAware, dates and user are filled on persist and on update.',
    },
    distractors: [
      {
        es: 'Esas anotaciones escriben solas si el campo es Instant; no hace falta habilitar auditoría ni un AuditorAware.',
        en: 'Those annotations write on their own if the field is Instant; there is no need to enable auditing or an AuditorAware.',
      },
      {
        es: '@LastModifiedBy se actualiza solo si hay @Version; @CreatedDate exige un trigger en la base de datos.',
        en: '@LastModifiedBy updates only if there is @Version; @CreatedDate requires a database trigger.',
      },
    ],
    explanation: {
      es: 'Sin @EnableJpaAuditing y @EntityListeners(AuditingEntityListener.class) los campos se quedan nulos y nadie avisa. @CreatedDate/@LastModifiedDate aceptan Instant, LocalDateTime o Date; @CreatedBy/@LastModifiedBy toman el valor de AuditorAware. No sustituyen a @Version: la auditoría registra quién y cuándo, el bloqueo optimista detecta conflictos.',
      en: 'Without @EnableJpaAuditing and @EntityListeners(AuditingEntityListener.class) the fields stay null and nobody warns. @CreatedDate/@LastModifiedDate accept Instant, LocalDateTime or Date; @CreatedBy/@LastModifiedBy take the value from AuditorAware. They do not replace @Version: auditing records who and when, optimistic locking detects conflicts.',
    },
  },
  {
    id: 'be-data-10',
    topic: 'Spring Data',
    prompt: {
      es: '¿Cómo se implementa un fragmento de repositorio propio en Spring Data JPA?',
      en: 'How do you implement a custom repository fragment in Spring Data JPA?',
    },
    answer: {
      es: 'Se declara una interfaz fragmento, se implementa en una clase con sufijo Impl (o como bean) y el repositorio la extiende junto a JpaRepository.',
      en: 'You declare a fragment interface, implement it in a class with the Impl suffix (or as a bean) and the repository extends it together with JpaRepository.',
    },
    distractors: [
      {
        es: 'Se anota un método default en JpaRepository y Spring genera la implementación JDBC en tiempo de arranque.',
        en: 'You annotate a default method on JpaRepository and Spring generates the JDBC implementation at startup.',
      },
      {
        es: 'Hay que sustituir SimpleJpaRepository con repositoryBaseClass aunque el extra sea un solo método de un repositorio.',
        en: 'You must replace SimpleJpaRepository with repositoryBaseClass even if the extra is a single method of one repository.',
      },
    ],
    explanation: {
      es: 'El sufijo Impl es el valor por defecto de repositoryImplementationPostfix; si falta la clase, Spring Data intenta derivar el método y lanza QueryCreationException o PropertyReferenceException. repositoryBaseClass sirve para cambiar la base de todos los repositorios, no para un fragmento puntual. También se puede registrar el fragmento como bean y Spring Data lo compone.',
      en: 'The Impl suffix is the default repositoryImplementationPostfix; if the class is missing, Spring Data tries to derive the method and throws QueryCreationException or PropertyReferenceException. repositoryBaseClass is for changing the base of every repository, not for a one-off fragment. The fragment can also be registered as a bean and Spring Data composes it.',
    },
  },
  {
    id: 'be-data-11',
    topic: 'Spring Data',
    prompt: {
      es: '¿Qué beneficios reales aporta @Transactional(readOnly = true)?',
      en: 'What real benefits does @Transactional(readOnly = true) provide?',
    },
    answer: {
      es: 'Hibernate omite dirty checking, el flush pasa a modo MANUAL y la conexión JDBC puede marcarse read only; documenta la intención de no escribir.',
      en: 'Hibernate skips dirty checking, flush switches to MANUAL and the JDBC connection may be marked read only; it documents the intent not to write.',
    },
    distractors: [
      {
        es: 'Bloquea cualquier escritura en la JVM: save lanza ReadOnlyException antes de llegar a la base.',
        en: 'It blocks any write in the JVM: save throws ReadOnlyException before reaching the database.',
      },
      {
        es: 'Enruta automáticamente la consulta a una réplica de lectura sin configurar un routing DataSource.',
        en: 'It automatically routes the query to a read replica without configuring a routing DataSource.',
      },
    ],
    explanation: {
      es: 'No es una barrera absoluta: un persist o un UPDATE nativo aún puede intentar escribir y fallar con SQLException o persistirse según el proveedor. Spring no elige réplicas solo por readOnly; hace falta AbstractRoutingDataSource. El ahorro real es no comparar snapshots ni hacer flush preventivo antes de cada consulta.',
      en: 'It is not an absolute barrier: a persist or a native UPDATE may still try to write and fail with SQLException or persist depending on the provider. Spring does not pick replicas from readOnly alone; AbstractRoutingDataSource is required. The real saving is not comparing snapshots and not doing a preventive flush before every query.',
    },
  },
  {
    id: 'be-data-12',
    topic: 'Spring Data',
    prompt: {
      es: '¿Cuándo se usa la propagación REQUIRES_NEW y qué implica para las conexiones del pool?',
      en: 'When is REQUIRES_NEW propagation used and what does it imply for pool connections?',
    },
    answer: {
      es: 'Suspende la transacción actual y abre otra independiente; sirve para auditar un fallo que debe confirmarse aunque el negocio haga rollback. Consume una conexión extra mientras ambas viven.',
      en: 'It suspends the current transaction and opens an independent one; it is used to audit a failure that must commit even if the business rolls back. It consumes an extra connection while both live.',
    },
    distractors: [
      {
        es: 'Reutiliza la misma conexión y solo cambia el aislamiento; el pool no entrega un segundo recurso.',
        en: 'It reuses the same connection and only changes isolation; the pool does not hand out a second resource.',
      },
      {
        es: 'Se une a la transacción existente si hay una; solo crea otra cuando el hilo aún no tiene contexto.',
        en: 'It joins the existing transaction if there is one; it creates another only when the thread has no context yet.',
      },
    ],
    explanation: {
      es: '@Transactional(propagation = REQUIRES_NEW) pide un segundo Connection al DataSource; si el pool está agotado por la transacción exterior, el hilo espera o falla al obtenerla. Unirse a la existente es REQUIRED, no REQUIRES_NEW. El commit interior sobrevive al rollback exterior, que es exactamente el caso de un log de auditoría.',
      en: '@Transactional(propagation = REQUIRES_NEW) asks the DataSource for a second Connection; if the pool is exhausted by the outer transaction, the thread waits or fails to acquire it. Joining the existing one is REQUIRED, not REQUIRES_NEW. The inner commit survives the outer rollback, which is exactly the audit-log case.',
    },
  },
  {
    id: 'be-data-13',
    topic: 'Spring Data',
    prompt: {
      es: '¿Cómo funciona la propagación NESTED y qué papel tienen los savepoints?',
      en: 'How does NESTED propagation work and what role do savepoints play?',
    },
    answer: {
      es: 'NESTED crea un savepoint JDBC dentro de la misma transacción; un rollback interior vuelve al savepoint sin deshacer el trabajo exterior.',
      en: 'NESTED creates a JDBC savepoint inside the same transaction; an inner rollback returns to the savepoint without undoing the outer work.',
    },
    distractors: [
      {
        es: 'NESTED es igual que REQUIRES_NEW: transacción nueva, conexión nueva y commit independiente del exterior.',
        en: 'NESTED is the same as REQUIRES_NEW: a new transaction, a new connection and a commit independent from the outer one.',
      },
      {
        es: 'NESTED siempre está disponible; Spring emula savepoints en memoria si el driver no los soporta.',
        en: 'NESTED is always available; Spring emulates savepoints in memory if the driver does not support them.',
      },
    ],
    explanation: {
      es: 'JpaTransactionManager usa Connection.setSavepoint; si el driver no soporta savepoints lanza NestedTransactionNotSupportedException. El commit interior solo libera el savepoint: un rollback de la transacción padre deshace también ese trabajo. JTA y varios gestores XA no ofrecen NESTED real.',
      en: 'JpaTransactionManager uses Connection.setSavepoint; if the driver does not support savepoints it throws NestedTransactionNotSupportedException. The inner commit only releases the savepoint: a rollback of the parent transaction undoes that work too. JTA and several XA managers do not offer real NESTED.',
    },
  },
  {
    id: 'be-data-14',
    topic: 'Spring Data',
    prompt: {
      es: '¿Cómo se define el nivel de aislamiento en @Transactional y cuándo aplica realmente?',
      en: 'How is the isolation level defined on @Transactional and when does it actually apply?',
    },
    answer: {
      es: 'Con isolation = Isolation.REPEATABLE_READ (u otro) al crear una transacción nueva vía setTransactionIsolation; unirse a una existente no cambia su nivel.',
      en: 'With isolation = Isolation.REPEATABLE_READ (or another) when a new transaction is created via setTransactionIsolation; joining an existing one does not change its level.',
    },
    distractors: [
      {
        es: 'El aislamiento se declara solo en application.properties; @Transactional no puede sobreescribir el de la conexión.',
        en: 'Isolation is declared only in application.properties; @Transactional cannot override the connection isolation.',
      },
      {
        es: 'El atributo isolation siempre se aplica al método, incluso si participa en una transacción ya abierta con otro nivel.',
        en: 'The isolation attribute is always applied to the method, even if it participates in an already open transaction with another level.',
      },
    ],
    explanation: {
      es: 'Isolation.DEFAULT deja el valor de la base. Si el método participa en una transacción ajena y validateExistingTransaction está activo, un nivel distinto provoca IllegalTransactionStateException. Sin esa validación el atributo se ignora al unirse. Solo tiene efecto práctico con REQUIRED o REQUIRES_NEW cuando realmente arranca una transacción.',
      en: 'Isolation.DEFAULT leaves the database value. If the method participates in an already open transaction and validateExistingTransaction is on, a different level causes IllegalTransactionStateException. Without that validation the attribute is ignored when joining. It only has a practical effect with REQUIRED or REQUIRES_NEW when a transaction actually starts.',
    },
  },
  {
    id: 'be-data-15',
    topic: 'Spring Data',
    prompt: {
      es: '¿Cómo se configura el timeout de la transacción y se sobrescriben las reglas de rollback?',
      en: 'How do you configure the transaction timeout and override the rollback rules?',
    },
    answer: {
      es: 'timeout fija el máximo en segundos; rollbackFor y noRollbackFor cambian qué excepciones deshacen. Por defecto solo RuntimeException y Error hacen rollback.',
      en: 'timeout sets the maximum in seconds; rollbackFor and noRollbackFor change which exceptions undo the work. By default only RuntimeException and Error trigger rollback.',
    },
    distractors: [
      {
        es: 'timeout aborta el hilo Java; rollbackFor no aplica a Error y las comprobadas siempre deshacen la transacción.',
        en: 'timeout aborts the Java thread; rollbackFor does not apply to Error and checked exceptions always undo the transaction.',
      },
      {
        es: 'timeout solo afecta a JdbcTemplate; rollbackFor se ignora cuando la propagación es REQUIRES_NEW.',
        en: 'timeout only affects JdbcTemplate; rollbackFor is ignored when propagation is REQUIRES_NEW.',
      },
    ],
    explanation: {
      es: '@Transactional(timeout = 5, rollbackFor = Exception.class, noRollbackFor = BusinessException.class) cubre ambos ejes. Al superar el tiempo Spring marca rollback-only y puede lanzar TransactionTimedOutException; no interrumpe un SQL largo en todos los drivers. Una IOException comprobada confirma los cambios salvo rollbackFor, igual que en el comportamiento por defecto.',
      en: '@Transactional(timeout = 5, rollbackFor = Exception.class, noRollbackFor = BusinessException.class) covers both axes. When time is exceeded Spring marks rollback-only and may throw TransactionTimedOutException; it does not interrupt a long SQL statement on every driver. A checked IOException commits the changes unless rollbackFor is set, matching the default behaviour.',
    },
  },
  {
    id: 'be-data-16',
    topic: 'Spring Data',
    prompt: {
      es: '¿Cuándo elegir JdbcTemplate o JdbcClient frente a JPA?',
      en: 'When should you choose JdbcTemplate or JdbcClient over JPA?',
    },
    answer: {
      es: 'JPA para el modelo de dominio y grafos; JDBC para SQL preciso, reportes, bulk y cuando el mapeo ORM estorba. JdbcClient (Boot 3.2) es la API fluida moderna.',
      en: 'JPA for the domain model and graphs; JDBC for precise SQL, reports, bulk work and when ORM mapping gets in the way. JdbcClient (Boot 3.2) is the modern fluent API.',
    },
    distractors: [
      {
        es: 'JdbcTemplate sustituye a JPA en Spring Boot 3; EntityManager queda deprecado y ya no debe usarse.',
        en: 'JdbcTemplate replaces JPA in Spring Boot 3; EntityManager is deprecated and should no longer be used.',
      },
      {
        es: 'JdbcClient gestiona entidades, dirty checking y lazy loading igual que el EntityManager.',
        en: 'JdbcClient manages entities, dirty checking and lazy loading just like the EntityManager.',
      },
    ],
    explanation: {
      es: 'JDBC no tiene contexto de persistencia: no hay dirty checking ni cascadas, y SQLException se envuelve en DataAccessException. JdbcClient (Spring 6.1) reduce el boilerplate de JdbcTemplate sin convertirse en ORM. Elegir JDBC en un reporte con window functions o un insert masivo evita el costo del primer nivel y de IDENTITY por fila.',
      en: 'JDBC has no persistence context: there is no dirty checking and no cascades, and SQLException is wrapped in DataAccessException. JdbcClient (Spring 6.1) cuts JdbcTemplate boilerplate without becoming an ORM. Choosing JDBC for a report with window functions or a bulk insert avoids first-level cache cost and per-row IDENTITY.',
    },
  },
  {
    id: 'be-data-17',
    topic: 'Spring Data',
    prompt: {
      es: '¿Qué hay que tener en cuenta para inserciones por lotes con JPA: batch_size, orden de sentencias e IDENTITY?',
      en: 'What must you consider for JPA batch inserts: batch_size, statement order and IDENTITY?',
    },
    answer: {
      es: 'hibernate.jdbc.batch_size agrupa inserts; order_inserts y order_updates evitan romper el lote al mezclar tablas. IDENTITY desactiva el batch de inserts porque necesita el id al momento.',
      en: 'hibernate.jdbc.batch_size groups inserts; order_inserts and order_updates avoid breaking the batch by mixing tables. IDENTITY disables insert batching because it needs the id immediately.',
    },
    distractors: [
      {
        es: 'IDENTITY es la mejor estrategia para batch porque la base asigna bloques de ids y Hibernate los rellena después.',
        en: 'IDENTITY is the best strategy for batching because the database assigns id blocks and Hibernate fills them afterwards.',
      },
      {
        es: 'batch_size funciona igual con cualquier generador; el orden de las sentencias no influye en el agrupado JDBC.',
        en: 'batch_size works the same with any generator; statement order does not affect JDBC grouping.',
      },
    ],
    explanation: {
      es: 'Con IDENTITY Hibernate debe ejecutar el INSERT enseguida para leer la clave, así que no puede agrupar. SEQUENCE (mejor con pooled optimizer) o UUID sí permiten batch. Si se intercalan inserts de distintas tablas, el driver cierra el lote; order_inserts lo evita. Un fallo en el flush del lote aparece como PersistenceException o BatchUpdateException.',
      en: 'With IDENTITY Hibernate must execute the INSERT immediately to read the key, so it cannot group them. SEQUENCE (preferably with a pooled optimizer) or UUID do allow batching. If inserts of different tables are interleaved, the driver closes the batch; order_inserts avoids that. A failure during batch flush shows up as PersistenceException or BatchUpdateException.',
    },
  },
  {
    id: 'be-data-18',
    topic: 'Spring Data',
    prompt: {
      es: '¿Cómo se recorre un resultado muy grande con Stream, cursor y fetch size?',
      en: 'How do you walk a very large result with Stream, cursor and fetch size?',
    },
    answer: {
      es: 'Se usa un Stream o cursor con fetch size para no cargar todo en memoria; hay que consumirlo y cerrarlo dentro de la transacción.',
      en: 'You use a Stream or cursor with fetch size so everything is not loaded in memory; it must be consumed and closed inside the transaction.',
    },
    distractors: [
      {
        es: 'findAll con Pageable de tamaño Integer.MAX_VALUE es equivalente y más seguro porque cierra el cursor solo.',
        en: 'findAll with a Pageable of size Integer.MAX_VALUE is equivalent and safer because it closes the cursor on its own.',
      },
      {
        es: 'getResultStream pagina por su cuenta; el fetch size lo decide el driver y no se puede configurar con hints.',
        en: 'getResultStream pages on its own; fetch size is decided by the driver and cannot be configured with hints.',
      },
    ],
    explanation: {
      es: 'En Spring Data un método que devuelve Stream debe ir con @Transactional(readOnly = true) y try-with-resources; si no, la conexión se filtra o aparece LazyInitializationException. HINT_FETCH_SIZE o Query.setFetchSize controlan cuántas filas trae el cursor (en PostgreSQL hace falta transacción abierta). Sin fetch size varios drivers materializan el ResultSet completo.',
      en: 'In Spring Data a method returning Stream must run with @Transactional(readOnly = true) and try-with-resources; otherwise the connection leaks or LazyInitializationException appears. HINT_FETCH_SIZE or Query.setFetchSize control how many rows the cursor fetches (PostgreSQL needs an open transaction). Without fetch size several drivers materialise the whole ResultSet.',
    },
  },
  {
    id: 'be-data-19',
    topic: 'Spring Data',
    prompt: {
      es: '¿Cómo se debe reintentar en la capa de servicio tras un fallo de bloqueo optimista?',
      en: 'How should the service layer retry after an optimistic lock failure?',
    },
    answer: {
      es: 'Capturar ObjectOptimisticLockingFailureException, recargar el agregado y repetir la operación de negocio en una transacción nueva, por ejemplo con @Retryable en el servicio.',
      en: 'Catch ObjectOptimisticLockingFailureException, reload the aggregate and repeat the business operation in a new transaction, for example with @Retryable on the service.',
    },
    distractors: [
      {
        es: 'JPA reintenta solo si @Version es Long; no hace falta código en el servicio ni recargar la entidad.',
        en: 'JPA retries on its own if @Version is Long; no service code and no entity reload are needed.',
      },
      {
        es: 'El reintento se pone en el repositorio con @Modifying para repetir el UPDATE sobre la misma instancia managed.',
        en: 'The retry is placed on the repository with @Modifying to repeat the UPDATE on the same managed instance.',
      },
    ],
    explanation: {
      es: 'ObjectOptimisticLockingFailureException envuelve OptimisticLockException cuando el UPDATE with version = ? no toca filas. Reintentar dentro del mismo contexto deja la versión sucia en memoria; hace falta otra transacción que haga find de nuevo. @Retryable en el servicio, no en el repositorio, vuelve a ejecutar la regla de negocio completa. El repositorio no debe tragarse la excepción de concurrencia.',
      en: 'ObjectOptimisticLockingFailureException wraps OptimisticLockException when the UPDATE with version = ? touches no rows. Retrying inside the same context leaves the stale version in memory; another transaction that finds again is required. @Retryable on the service, not on the repository, runs the full business rule again. The repository should not swallow the concurrency exception.',
    },
  },
  {
    id: 'be-data-20',
    topic: 'Spring Data',
    prompt: {
      es: '¿Cómo se elige el gestor de transacciones cuando hay varios datasources?',
      en: 'How do you choose the transaction manager when there are several datasources?',
    },
    answer: {
      es: 'Cada EntityManagerFactory lleva su JpaTransactionManager; @Transactional(transactionManager = "ordersTxManager") selecciona cuál. Un solo manager no coordina dos bases salvo JTA.',
      en: 'Each EntityManagerFactory has its JpaTransactionManager; @Transactional(transactionManager = "ordersTxManager") selects which one. A single manager does not coordinate two databases unless you use JTA.',
    },
    distractors: [
      {
        es: 'Spring elige el manager según el repositorio inyectado; no hace falta transactionManager ni EnableJpaRepositories extra.',
        en: 'Spring picks the manager from the injected repository; no transactionManager attribute and no extra EnableJpaRepositories are needed.',
      },
      {
        es: 'Un JpaTransactionManager único sirve para todos los datasources si comparten el mismo pool de hilos del contenedor.',
        en: 'A single JpaTransactionManager serves every datasource if they share the same container thread pool.',
      },
    ],
    explanation: {
      es: 'Con dos beans PlatformTransactionManager, un @Transactional sin calificador lanza NoUniqueBeanDefinitionException. Hay que ligar cada repositorio con @EnableJpaRepositories(entityManagerFactoryRef, transactionManagerRef). ChainedTransactionManager está deprecado; atomicidad entre dos bases exige XA/JTA (Atomikos, Narayana). El hilo compartido no une conexiones ni recursos.',
      en: 'With two PlatformTransactionManager beans, a @Transactional without a qualifier throws NoUniqueBeanDefinitionException. Each repository must be bound with @EnableJpaRepositories(entityManagerFactoryRef, transactionManagerRef). ChainedTransactionManager is deprecated; atomicity across two databases requires XA/JTA (Atomikos, Narayana). A shared thread does not join connections or resources.',
    },
  },
];
