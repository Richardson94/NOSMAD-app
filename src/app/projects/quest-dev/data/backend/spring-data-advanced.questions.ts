import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_SPRING_DATA_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-data-01',
    topic: 'Consultas',
    prompt: {
      es: '¿Cómo deriva Spring Data una consulta a partir del nombre del método?',
      en: 'How does Spring Data derive a query from the method name?',
    },
    answer: {
      es: 'Lee el prefijo, como find o count, luego By y las propiedades unidas con And, Or y palabras como GreaterThan. Si el atributo no existe, falla al arrancar.',
      en: 'It reads the prefix, such as find or count, then By and the properties joined with And, Or and words such as GreaterThan. If the attribute does not exist, startup fails.',
    },
    distractors: [
      {
        es: 'El nombre es solo un alias. Sin @Query el método no ejecuta nada.',
        en: 'The name is only an alias. Without @Query the method runs nothing.',
      },
      {
        es: 'Cualquier nombre vale si contiene una columna. And y OrderBy se ignoran.',
        en: 'Any name works if it contains a column. And and OrderBy are ignored.',
      },
    ],
    explanation: {
      es: 'Cuando el nombre se vuelve ilegible, pasa a @Query. No inventes un método eterno con diez And.',
      en: 'When the name becomes unreadable, switch to @Query. Do not invent an endless method with ten And clauses.',
    },
  },
  {
    id: 'be-data-02',
    topic: 'Consultas',
    prompt: {
      es: '¿Qué diferencia hay entre una consulta JPQL y una nativa?',
      en: 'What is the difference between a JPQL query and a native one?',
    },
    answer: {
      es: 'JPQL habla de entidades y atributos, y es lo que @Query usa por defecto. Con nativeQuery mandas SQL del motor, que no es portable.',
      en: 'JPQL talks about entities and attributes, and that is what @Query uses by default. With nativeQuery you send the engine SQL, which is not portable.',
    },
    distractors: [
      {
        es: 'nativeQuery ejecuta JPQL más rápido porque se salta la traducción y sigue siendo portable.',
        en: 'nativeQuery runs JPQL faster because it skips translation and it stays portable.',
      },
      {
        es: 'Son equivalentes. nativeQuery solo cambia el plan que elige el motor.',
        en: 'They are equivalent. nativeQuery only changes the plan the engine picks.',
      },
    ],
    explanation: {
      es: 'El SQL nativo no trae solo las relaciones. Úsalo cuando JPQL no expresa bien la consulta, no como atajo habitual.',
      en: 'Native SQL does not load relations on its own. Use it when JPQL does not express the query well, not as the usual shortcut.',
    },
  },
  {
    id: 'be-data-03',
    topic: 'Consultas',
    prompt: {
      es: '¿Para qué sirven @Modifying y clearAutomatically en un update o un delete?',
      en: 'What are @Modifying and clearAutomatically for on an update or a delete?',
    },
    answer: {
      es: '@Modifying dice que la consulta cambia datos, no que los lee. clearAutomatically vacía el contexto para no quedarte con entidades que aún tienen los valores viejos.',
      en: '@Modifying says the query changes data, not that it reads them. clearAutomatically empties the context so you do not keep entities that still have the old values.',
    },
    distractors: [
      {
        es: '@Modifying acelera save porque apaga el seguimiento de cambios. clearAutomatically cierra la transacción.',
        en: '@Modifying speeds up save because it turns off change tracking. clearAutomatically closes the transaction.',
      },
      {
        es: 'clearAutomatically y flush son lo mismo: los dos escriben y dejan el contexto igual.',
        en: 'clearAutomatically and flush are the same: both write and leave the context as it was.',
      },
    ],
    explanation: {
      es: 'Un update masivo no toca los objetos que ya tenías en memoria. Sin limpiar, un find posterior en la misma transacción puede mentir.',
      en: 'A bulk update does not touch objects you already had in memory. Without clearing, a later find in the same transaction can lie.',
    },
  },
  {
    id: 'be-data-04',
    topic: 'Proyecciones',
    prompt: {
      es: '¿Qué diferencia hay entre una proyección cerrada y un DTO?',
      en: 'What is the difference between a closed projection and a DTO?',
    },
    answer: {
      es: 'La interfaz cerrada declara los getters que quieres y puede traer solo esas columnas. El DTO es una clase que construyes en la consulta o como proyección, sin cargar la entidad entera.',
      en: 'The closed interface declares the getters you want and can load only those columns. The DTO is a class you build in the query or as a projection, without loading the whole entity.',
    },
    distractors: [
      {
        es: 'Las dos cargan siempre la entidad. La interfaz abierta es más rápida porque no crea objetos.',
        en: 'Both always load the entity. The open interface is faster because it does not create objects.',
      },
      {
        es: 'Spring elige solo según el número de columnas. No hay diferencia real.',
        en: 'Spring chooses on its own according to the number of columns. There is no real difference.',
      },
    ],
    explanation: {
      es: 'Una interfaz con expresiones carga la entidad para calcularlas, así que no ahorra columnas. Si solo necesitas datos, prefiere la proyección cerrada o el DTO.',
      en: 'An interface with expressions loads the entity to compute them, so it does not save columns. If you only need data, prefer the closed projection or the DTO.',
    },
  },
  {
    id: 'be-data-05',
    topic: 'Consultas',
    prompt: {
      es: '¿Cuándo usas Specification para filtros dinámicos?',
      en: 'When do you use Specification for dynamic filters?',
    },
    answer: {
      es: 'Cuando los filtros llegan opcionales desde la API y no quieres concatenar JPQL. Cada condición es un predicado y los combinas con and y or.',
      en: 'When filters arrive optional from the API and you do not want to concatenate JPQL. Each condition is a predicate and you combine them with and and or.',
    },
    distractors: [
      {
        es: 'Specification genera SQL nativo. La API de criterios solo cuenta las páginas.',
        en: 'Specification generates native SQL. The criteria API only counts pages.',
      },
      {
        es: 'Sustituye a @Query en todos los repositorios y es un atajo de buscar por ejemplo.',
        en: 'It replaces @Query on every repository and it is a shortcut for query by example.',
      },
    ],
    explanation: {
      es: 'El repositorio tiene que extender el executor de specifications. Si el filtro es fijo, un nombre de método o @Query se leen mejor.',
      en: 'The repository must extend the specifications executor. If the filter is fixed, a method name or @Query reads better.',
    },
  },
  {
    id: 'be-data-06',
    topic: 'Consultas',
    prompt: {
      es: '¿Qué es Query by Example y dónde se queda corto?',
      en: 'What is Query by Example and where does it fall short?',
    },
    answer: {
      es: 'Armas una entidad de ejemplo y Spring busca por los campos que rellenaste. Sirve para igualdades simples. No expresa bien rangos, or finos ni asociaciones profundas.',
      en: 'You build an example entity and Spring searches by the fields you filled. It fits simple equality. It does not express ranges, fine-grained or, or deep associations well.',
    },
    distractors: [
      {
        es: 'Expresa cualquier predicado, incluidos between, joins y subconsultas.',
        en: 'It expresses any predicate, including between, joins and subqueries.',
      },
      {
        es: 'Sustituye a Specification porque no tiene límite de operadores.',
        en: 'It replaces Specification because it has no operator limit.',
      },
    ],
    explanation: {
      es: 'Los null del ejemplo se ignoran por defecto. Cuando el filtro deja de ser igualdad, pasa a Specification o a @Query.',
      en: 'Nulls on the example are ignored by default. When the filter is no longer equality, switch to Specification or @Query.',
    },
  },
  {
    id: 'be-data-07',
    topic: 'Paginación',
    prompt: {
      es: '¿Qué costo añade una Page frente a un Slice?',
      en: 'What extra cost does a Page add compared with a Slice?',
    },
    answer: {
      es: 'Page hace la consulta de datos y otra de conteo para el total. Slice no cuenta: solo dice si hay página siguiente. Sort ordena y no cuenta.',
      en: 'Page runs the data query and another count for the total. Slice does not count: it only says whether a next page exists. Sort orders and does not count.',
    },
    distractors: [
      {
        es: 'Slice y Page son iguales. El conteo se cachea siempre.',
        en: 'Slice and Page are the same. The count is always cached.',
      },
      {
        es: 'Page no cuenta si el tamaño es pequeño. Slice siempre rellena el total.',
        en: 'Page does not count if the size is small. Slice always fills the total.',
      },
    ],
    explanation: {
      es: 'El conteo con joins puede costar más que traer la página. Para un scroll infinito, Slice suele bastar.',
      en: 'A count with joins can cost more than fetching the page. For infinite scroll, Slice is usually enough.',
    },
  },
  {
    id: 'be-data-08',
    topic: 'Paginación',
    prompt: {
      es: '¿Qué problema hay al paginar una consulta que hace join a una colección?',
      en: 'What problem appears when you paginate a query that joins a collection?',
    },
    answer: {
      es: 'El join multiplica filas y el límite recorta filas SQL, no entidades. La página y el total quedan distorsionados.',
      en: 'The join multiplies rows and the limit trims SQL rows, not entities. The page and the total become distorted.',
    },
    distractors: [
      {
        es: 'Spring aplica distinct solo y cada entidad sale una vez.',
        en: 'Spring applies distinct on its own and each entity comes out once.',
      },
      {
        es: 'Hibernate siempre quita duplicados antes de paginar, así que el conteo coincide.',
        en: 'Hibernate always drops duplicates before paging, so the count matches.',
      },
    ],
    explanation: {
      es: 'La salida habitual es paginar los ids sin la colección y cargar el grafo en una segunda consulta.',
      en: 'The usual way out is to page the ids without the collection and load the graph in a second query.',
    },
  },
  {
    id: 'be-data-09',
    topic: 'Auditoría',
    prompt: {
      es: '¿Cómo se rellenan @CreatedDate y @LastModifiedBy?',
      en: 'How are @CreatedDate and @LastModifiedBy filled?',
    },
    answer: {
      es: 'Hay que activar la auditoría JPA, poner el listener en la entidad y, para el usuario, un AuditorAware. Si no, los campos se quedan null.',
      en: 'You must turn on JPA auditing, put the listener on the entity and, for the user, an AuditorAware. Otherwise the fields stay null.',
    },
    distractors: [
      {
        es: 'Se rellenan solos si el campo es una fecha. No hace falta activar nada.',
        en: 'They fill themselves if the field is a date. Nothing needs to be enabled.',
      },
      {
        es: 'LastModifiedBy solo cambia si hay Version, y CreatedDate exige un trigger en la base.',
        en: 'LastModifiedBy changes only if there is Version, and CreatedDate requires a database trigger.',
      },
    ],
    explanation: {
      es: 'La auditoría dice quién y cuándo. No sustituye a Version, que detecta conflictos de escritura.',
      en: 'Auditing says who and when. It does not replace Version, which detects write conflicts.',
    },
  },
  {
    id: 'be-data-10',
    topic: 'Repositorios',
    prompt: {
      es: '¿Cómo añades un método propio a un repositorio de Spring Data?',
      en: 'How do you add your own method to a Spring Data repository?',
    },
    answer: {
      es: 'Declaras una interfaz fragmento, la implementas en una clase cuyo nombre termina en Impl y el repositorio la extiende junto a JpaRepository.',
      en: 'You declare a fragment interface, implement it in a class whose name ends in Impl and the repository extends it together with JpaRepository.',
    },
    distractors: [
      {
        es: 'Pones un método default en JpaRepository y Spring genera el SQL al arrancar.',
        en: 'You put a default method on JpaRepository and Spring generates the SQL at startup.',
      },
      {
        es: 'Hay que cambiar la clase base de todos los repositorios aunque el método sea de uno solo.',
        en: 'You must change the base class of every repository even if the method belongs to only one.',
      },
    ],
    explanation: {
      es: 'Si falta la clase Impl, Spring intenta derivar el nombre y falla al arrancar. Cambiar la base es para todos los repositorios, no para un método suelto.',
      en: 'If the Impl class is missing, Spring tries to derive the name and fails at startup. Changing the base is for every repository, not for one loose method.',
    },
  },
  {
    id: 'be-data-11',
    topic: 'Transacciones',
    prompt: {
      es: '¿Qué aporta @Transactional con readOnly?',
      en: 'What does @Transactional with readOnly give you?',
    },
    answer: {
      es: 'Hibernate se salta el seguimiento de cambios y puede marcar la conexión como solo lectura. Documenta que el método no escribe. No es una barrera absoluta ni elige una réplica solo.',
      en: 'Hibernate skips change tracking and may mark the connection read only. It documents that the method does not write. It is not an absolute barrier and it does not pick a replica on its own.',
    },
    distractors: [
      {
        es: 'Impide cualquier escritura: save lanza antes de llegar a la base.',
        en: 'It blocks every write: save throws before it reaches the database.',
      },
      {
        es: 'Enruta la consulta a la réplica de lectura sin configurar nada más.',
        en: 'It routes the query to the read replica with nothing else configured.',
      },
    ],
    explanation: {
      es: 'El ahorro es no comparar el estado antes de cada consulta. Para ir a una réplica hace falta un datasource que enrute.',
      en: 'The saving is not comparing state before every query. To hit a replica you need a datasource that routes.',
    },
  },
  {
    id: 'be-data-12',
    topic: 'Transacciones',
    prompt: {
      es: '¿Cuándo usas la propagación REQUIRES_NEW?',
      en: 'When do you use REQUIRES_NEW propagation?',
    },
    answer: {
      es: 'Cuando un trabajo debe confirmarse aunque el de fuera haga rollback, por ejemplo un registro de auditoría. Suspende la transacción actual, abre otra y usa otra conexión del pool.',
      en: 'When a piece of work must commit even if the outer one rolls back, for example an audit record. It suspends the current transaction, opens another and uses another connection from the pool.',
    },
    distractors: [
      {
        es: 'Reutiliza la misma conexión y solo cambia el aislamiento.',
        en: 'It reuses the same connection and only changes the isolation.',
      },
      {
        es: 'Se une a la transacción que ya hay. Solo crea otra si el hilo no tenía ninguna.',
        en: 'It joins the transaction that already exists. It creates another only if the thread had none.',
      },
    ],
    explanation: {
      es: 'Unirse a la existente es REQUIRED. REQUIRES_NEW puede agotar el pool porque las dos conexiones viven a la vez.',
      en: 'Joining the existing one is REQUIRED. REQUIRES_NEW can exhaust the pool because both connections live at the same time.',
    },
  },
  {
    id: 'be-data-13',
    topic: 'Transacciones',
    prompt: {
      es: '¿Qué hace la propagación NESTED?',
      en: 'What does NESTED propagation do?',
    },
    answer: {
      es: 'Marca un punto de guardado dentro de la misma transacción. Si el tramo interior falla, se deshace hasta ese punto y el trabajo de fuera puede seguir.',
      en: 'It marks a savepoint inside the same transaction. If the inner part fails, it rolls back to that point and the outer work can continue.',
    },
    distractors: [
      {
        es: 'Es igual que REQUIRES_NEW: otra transacción, otra conexión y un commit independiente.',
        en: 'It is the same as REQUIRES_NEW: another transaction, another connection and an independent commit.',
      },
      {
        es: 'Siempre está disponible. Si el driver no tiene savepoints, Spring los simula en memoria.',
        en: 'It is always available. If the driver has no savepoints, Spring simulates them in memory.',
      },
    ],
    explanation: {
      es: 'No es un commit aparte: si la transacción padre hace rollback, ese tramo también se deshace. Hace falta que la base soporte el punto de guardado.',
      en: 'It is not a separate commit: if the parent transaction rolls back, that part is undone too. The database must support the savepoint.',
    },
  },
  {
    id: 'be-data-14',
    topic: 'Transacciones',
    prompt: {
      es: '¿Cuándo aplica de verdad el aislamiento que pones en @Transactional?',
      en: 'When does the isolation you set on @Transactional actually apply?',
    },
    answer: {
      es: 'Cuando ese método abre la transacción. Si se une a una que ya existe, no le cambia el nivel.',
      en: 'When that method opens the transaction. If it joins one that already exists, it does not change the level.',
    },
    distractors: [
      {
        es: 'El aislamiento solo se configura en el archivo. La anotación no puede cambiarlo.',
        en: 'Isolation is configured only in the file. The annotation cannot change it.',
      },
      {
        es: 'Siempre se aplica al método, aunque ya hubiera una transacción con otro nivel.',
        en: 'It is always applied to the method, even if a transaction with another level was already open.',
      },
    ],
    explanation: {
      es: 'DEFAULT deja el valor de la base. Para que el nivel que escribiste cuente, el método tiene que ser quien arranca la transacción.',
      en: 'DEFAULT leaves the database value. For the level you wrote to count, the method has to be the one that starts the transaction.',
    },
  },
  {
    id: 'be-data-15',
    topic: 'Transacciones',
    prompt: {
      es: '¿Cómo limitas el tiempo de una transacción y qué excepciones la deshacen?',
      en: 'How do you limit the time of a transaction and which exceptions roll it back?',
    },
    answer: {
      es: 'timeout marca el máximo en segundos. rollbackFor y noRollbackFor cambian las reglas. Por defecto solo una RuntimeException o un Error deshacen.',
      en: 'timeout sets the maximum in seconds. rollbackFor and noRollbackFor change the rules. By default only a RuntimeException or an Error rolls back.',
    },
    distractors: [
      {
        es: 'timeout mata el hilo. Las excepciones checked siempre deshacen y rollbackFor no afecta a Error.',
        en: 'timeout kills the thread. Checked exceptions always roll back and rollbackFor does not affect Error.',
      },
      {
        es: 'timeout solo vale para JdbcTemplate. rollbackFor se ignora con REQUIRES_NEW.',
        en: 'timeout only applies to JdbcTemplate. rollbackFor is ignored with REQUIRES_NEW.',
      },
    ],
    explanation: {
      es: 'Al vencer el tiempo, Spring marca la transacción para deshacer. Una IOException checked confirma, salvo que la pongas en rollbackFor.',
      en: 'When time runs out, Spring marks the transaction for rollback. A checked IOException commits, unless you put it in rollbackFor.',
    },
  },
  {
    id: 'be-data-16',
    topic: 'JDBC',
    prompt: {
      es: '¿Cuándo eliges JdbcTemplate o JdbcClient en lugar de JPA?',
      en: 'When do you choose JdbcTemplate or JdbcClient instead of JPA?',
    },
    answer: {
      es: 'JPA para el modelo y sus relaciones. JDBC cuando quieres SQL concreto, un informe o un insert masivo y el mapeo estorba. JdbcClient es la API fluida más nueva.',
      en: 'JPA for the model and its relations. JDBC when you want concrete SQL, a report or a bulk insert and the mapping gets in the way. JdbcClient is the newer fluent API.',
    },
    distractors: [
      {
        es: 'JdbcTemplate sustituye a JPA en Boot reciente. El EntityManager está en desuso.',
        en: 'JdbcTemplate replaces JPA in recent Boot. The EntityManager is obsolete.',
      },
      {
        es: 'JdbcClient tiene seguimiento de cambios y carga perezosa, igual que JPA.',
        en: 'JdbcClient has change tracking and lazy loading, the same as JPA.',
      },
    ],
    explanation: {
      es: 'JDBC no tiene contexto: no hay cascadas ni dirty checking. La SQLException llega envuelta como excepción de acceso a datos.',
      en: 'JDBC has no context: there are no cascades and no dirty checking. The SQLException arrives wrapped as a data-access exception.',
    },
  },
  {
    id: 'be-data-17',
    topic: 'Rendimiento',
    prompt: {
      es: '¿Qué hay que tener en cuenta para insertar por lotes con JPA?',
      en: 'What do you need to keep in mind for batch inserts with JPA?',
    },
    answer: {
      es: 'Agrupa los insert con el tamaño de lote y ordena las sentencias para no romper el grupo al mezclar tablas. Si el id es identity, el insert no se agrupa porque la base tiene que devolver el id al momento.',
      en: 'Group the inserts with the batch size and order the statements so mixing tables does not break the group. If the id is identity, the insert is not grouped because the database must return the id at once.',
    },
    distractors: [
      {
        es: 'Identity es la mejor opción para lotes, porque la base reserva bloques de ids.',
        en: 'Identity is the best option for batches, because the database reserves blocks of ids.',
      },
      {
        es: 'El tamaño de lote funciona igual con cualquier generador y el orden de las sentencias no importa.',
        en: 'The batch size works the same with any generator and the statement order does not matter.',
      },
    ],
    explanation: {
      es: 'Una secuencia permite pedir ids antes y luego insertar en grupo. Identity obliga a ejecutar cada insert para conocer la clave.',
      en: 'A sequence lets you ask for ids first and then insert as a group. Identity forces each insert to run so the key is known.',
    },
  },
  {
    id: 'be-data-18',
    topic: 'Consultas',
    prompt: {
      es: '¿Cómo recorres un resultado enorme sin cargarlo entero en memoria?',
      en: 'How do you walk a huge result without loading it all into memory?',
    },
    answer: {
      es: 'Con un Stream o un cursor y un tamaño de fetch, y lo consumes y lo cierras dentro de la transacción. Si no, la conexión se queda pillada o materializas todo.',
      en: 'With a Stream or a cursor and a fetch size, and you consume it and close it inside the transaction. Otherwise the connection stays stuck or you materialise everything.',
    },
    distractors: [
      {
        es: 'Un findAll con una página enorme es equivalente y cierra el cursor solo.',
        en: 'A findAll with a huge page is equivalent and closes the cursor on its own.',
      },
      {
        es: 'El stream pagina solo y el tamaño de fetch no se puede configurar.',
        en: 'The stream pages on its own and the fetch size cannot be configured.',
      },
    ],
    explanation: {
      es: 'En Spring Data el método que devuelve Stream va con transacción de lectura y un cierre automático. Sin fetch size, varios drivers traen el resultado completo.',
      en: 'In Spring Data the method that returns Stream goes with a read transaction and an automatic close. Without a fetch size, several drivers bring the whole result.',
    },
  },
  {
    id: 'be-data-19',
    topic: 'Bloqueo',
    prompt: {
      es: '¿Cómo reintentas en el servicio tras un fallo de bloqueo optimista?',
      en: 'How do you retry in the service after an optimistic lock failure?',
    },
    answer: {
      es: 'Capturas el fallo, y en una transacción nueva vuelves a cargar el agregado y repites la operación de negocio. Reintentar sobre la misma instancia en memoria deja la versión vieja.',
      en: 'You catch the failure, and in a new transaction you load the aggregate again and repeat the business operation. Retrying on the same in-memory instance leaves the old version.',
    },
    distractors: [
      {
        es: 'JPA reintenta solo si Version es un Long. El servicio no hace nada.',
        en: 'JPA retries on its own if Version is a Long. The service does nothing.',
      },
      {
        es: 'El reintento va en el repositorio, repitiendo el update sobre la misma entidad gestionada.',
        en: 'The retry goes on the repository, repeating the update on the same managed entity.',
      },
    ],
    explanation: {
      es: 'El reintento pertenece al caso de uso completo, no a un update suelto. Un límite de intentos evita un bucle si el conflicto no cesa.',
      en: 'The retry belongs to the whole use case, not to a loose update. A cap on attempts avoids a loop if the conflict does not stop.',
    },
  },
  {
    id: 'be-data-20',
    topic: 'Transacciones',
    prompt: {
      es: '¿Cómo eliges el gestor de transacciones si hay varias bases?',
      en: 'How do you choose the transaction manager if there are several databases?',
    },
    answer: {
      es: 'Cada fábrica de entidades tiene su gestor. En @Transactional indicas cuál. Un solo gestor no confirma dos bases a la vez, salvo un coordinador de transacciones distribuidas.',
      en: 'Each entity factory has its own manager. On @Transactional you say which one. A single manager does not commit two databases together, unless you use a distributed transaction coordinator.',
    },
    distractors: [
      {
        es: 'Spring elige el gestor según el repositorio inyectado. No hace falta nombrarlo.',
        en: 'Spring picks the manager from the injected repository. You do not need to name it.',
      },
      {
        es: 'Un gestor único sirve para todos los datasources si comparten el pool de hilos.',
        en: 'A single manager serves every datasource if they share the thread pool.',
      },
    ],
    explanation: {
      es: 'Con dos gestores, una anotación sin nombre falla al arrancar. Cada paquete de repositorios se ata a su fábrica y a su gestor.',
      en: 'With two managers, an annotation without a name fails at startup. Each repository package is bound to its factory and its manager.',
    },
  },
];
