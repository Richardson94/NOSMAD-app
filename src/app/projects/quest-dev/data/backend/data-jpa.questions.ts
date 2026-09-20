import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_DATA_JPA_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-jpa-01',
    topic: 'Rendimiento JPA',
    prompt: {
      es: '¿Qué es el problema N+1 en JPA y cómo se detecta?',
      en: 'What is the N+1 problem in JPA and how is it detected?',
    },
    answer: {
      es: 'Una consulta que trae N entidades y luego una consulta por cada asociación perezosa accedida; se detecta revisando el SQL generado.',
      en: 'One query fetching N entities plus one query per lazy association accessed; it is spotted by reviewing the generated SQL.',
    },
    distractors: [
      {
        es: 'Una consulta que trae N entidades y luego una más para contar el total, necesaria al paginar resultados.',
        en: 'One query fetching N entities plus one extra to count the total, required when paginating results.',
      },
      {
        es: 'Una consulta con N joins que devuelve filas duplicadas y obliga a deduplicar el resultado en memoria.',
        en: 'A query with N joins returning duplicated rows and forcing in-memory deduplication of the result.',
      },
    ],
    explanation: {
      es: 'El síntoma es una ráfaga de SELECT idénticos con distinto id al recorrer una colección lazy dentro de un bucle; se corrige con join fetch, @EntityGraph o carga por lotes. La consulta de conteo al paginar es esperada, y las filas duplicadas son el efecto secundario de traer varias colecciones con join.',
      en: 'The symptom is a burst of identical SELECTs with different ids while iterating a lazy collection inside a loop; it is fixed with join fetch, @EntityGraph or batch fetching. The count query when paginating is expected, and duplicated rows are the side effect of joining several collections.',
    },
  },
  {
    id: 'be-jpa-02',
    topic: 'EntityManager',
    prompt: {
      es: 'Modificas una entidad obtenida dentro de un método transaccional y no llamas a save. ¿Qué sucede al terminar?',
      en: 'You modify an entity loaded inside a transactional method and never call save. What happens at the end?',
    },
    answer: {
      es: 'Los cambios se persisten, porque la entidad está gestionada y el contexto hace dirty checking al confirmar.',
      en: 'The changes are persisted, because the entity is managed and the context performs dirty checking on commit.',
    },
    distractors: [
      {
        es: 'Los cambios se descartan, porque sin save el repositorio no registra la entidad como modificada.',
        en: 'The changes are discarded, because without save the repository does not register the entity as modified.',
      },
      {
        es: 'Los cambios se persisten solo si la entidad tiene @Version, que es lo que activa el seguimiento del estado.',
        en: 'The changes are persisted only if the entity has @Version, which is what enables state tracking.',
      },
    ],
    explanation: {
      es: 'Mientras la transacción está abierta, la entidad es managed y el contexto de persistencia compara su estado con la copia original para emitir el UPDATE en el flush. Esto sorprende porque implica que una modificación accidental también se guarda. @Version sirve para bloqueo optimista, no para el seguimiento.',
      en: 'While the transaction is open, the entity is managed and the persistence context compares its state against the original snapshot to emit the UPDATE on flush. This surprises people because it means an accidental modification is also saved. @Version is for optimistic locking, not for tracking.',
    },
  },
  {
    id: 'be-jpa-03',
    topic: 'Excepciones JPA',
    prompt: {
      es: '¿Por qué aparece LazyInitializationException y cuál es la solución correcta?',
      en: 'Why does LazyInitializationException appear and what is the correct fix?',
    },
    answer: {
      es: 'Se accede a una asociación perezosa fuera de la transacción; se soluciona cargando los datos necesarios dentro de ella.',
      en: 'A lazy association is accessed outside the transaction; the fix is loading the required data inside it.',
    },
    distractors: [
      {
        es: 'La asociación no se configuró con fetch EAGER; se soluciona cambiando la estrategia de carga en la entidad.',
        en: 'The association was not configured with EAGER fetching; the fix is changing the fetch strategy on the entity.',
      },
      {
        es: 'La sesión se cerró antes de tiempo; se soluciona habilitando open-session-in-view para mantenerla abierta.',
        en: 'The session closed too early; the fix is enabling open-session-in-view to keep it open.',
      },
    ],
    explanation: {
      es: 'El proxy necesita una sesión activa, así que la cura es decidir qué se necesita y traerlo con join fetch, @EntityGraph o un DTO. Poner EAGER en la entidad traslada el costo a todas las consultas, incluidas las que no usan la relación, y open-session-in-view esconde el problema manteniendo la conexión durante el render.',
      en: 'The proxy needs an active session, so the cure is deciding what you need and fetching it with join fetch, @EntityGraph or a DTO. Setting EAGER on the entity spreads the cost to every query, even those not using the relation, and open-session-in-view hides the problem by holding the connection during rendering.',
    },
  },
  {
    id: 'be-jpa-04',
    topic: 'Bloqueo',
    prompt: {
      es: '¿Cómo funciona el bloqueo optimista con @Version?',
      en: 'How does optimistic locking with @Version work?',
    },
    answer: {
      es: 'El UPDATE incluye la versión leída y falla si otra transacción la cambió, lanzando una excepción de concurrencia.',
      en: 'The UPDATE includes the version that was read and fails if another transaction changed it, throwing a concurrency exception.',
    },
    distractors: [
      {
        es: 'La base de datos bloquea la fila al leerla, de modo que otras transacciones esperan hasta el commit.',
        en: 'The database locks the row on read, so other transactions wait until the commit.',
      },
      {
        es: 'JPA reintenta automáticamente la operación con los datos frescos cuando detecta la colisión de versiones.',
        en: 'JPA automatically retries the operation with fresh data when it detects a version collision.',
      },
    ],
    explanation: {
      es: 'No hay bloqueo real: se apuesta a que no habrá conflicto y se verifica al escribir mediante la cláusula where version = ?, incrementando el contador. Bloquear la fila al leer es pesimista (PESSIMISTIC_WRITE), y el reintento es responsabilidad de la aplicación, que debe decidir cómo resolver el conflicto.',
      en: 'There is no actual lock: it bets there will be no conflict and verifies on write through the where version = ? clause, incrementing the counter. Locking the row on read is pessimistic (PESSIMISTIC_WRITE), and retrying is the application responsibility, which must decide how to resolve the conflict.',
    },
  },
  {
    id: 'be-jpa-05',
    topic: 'Spring Data',
    prompt: {
      es: '¿Qué diferencia hay entre findById y getReferenceById (antes getOne) en un repositorio de Spring Data JPA?',
      en: 'What is the difference between findById and getReferenceById (formerly getOne) in a Spring Data JPA repository?',
    },
    answer: {
      es: 'findById consulta la base y devuelve Optional; getReferenceById devuelve un proxy sin consultar hasta que se acceda a un atributo.',
      en: 'findById queries the database and returns an Optional; getReferenceById returns a proxy without querying until an attribute is accessed.',
    },
    distractors: [
      {
        es: 'findById devuelve la entidad gestionada y getReferenceById una copia desacoplada del contexto de persistencia.',
        en: 'findById returns the managed entity and getReferenceById returns a copy detached from the persistence context.',
      },
      {
        es: 'findById lanza EntityNotFoundException si no existe y getReferenceById devuelve null sin consultar.',
        en: 'findById throws EntityNotFoundException when absent and getReferenceById returns null without querying.',
      },
    ],
    explanation: {
      es: 'getReferenceById es útil para asignar una relación por id sin traer la fila completa, pero si la entidad no existe el fallo aparece más tarde, al desreferenciar el proxy, en forma de EntityNotFoundException. findById sí hace la consulta y comunica la ausencia con un Optional vacío; ambas devuelven entidades gestionadas.',
      en: 'getReferenceById is useful to assign a relation by id without loading the whole row, but if the entity does not exist the failure shows up later, when dereferencing the proxy, as an EntityNotFoundException. findById does query and reports absence with an empty Optional; both return managed entities.',
    },
  },
  {
    id: 'be-jpa-06',
    topic: 'SQL',
    prompt: {
      es: '¿Qué diferencia hay entre un LEFT JOIN y un INNER JOIN al listar clientes y sus pedidos?',
      en: 'What is the difference between a LEFT JOIN and an INNER JOIN when listing customers and their orders?',
    },
    answer: {
      es: 'LEFT JOIN incluye los clientes sin pedidos con columnas nulas; INNER JOIN los excluye.',
      en: 'LEFT JOIN includes customers without orders with null columns; INNER JOIN excludes them.',
    },
    distractors: [
      {
        es: 'LEFT JOIN conserva el orden de la tabla izquierda mientras INNER JOIN reordena según el índice usado.',
        en: 'LEFT JOIN preserves the left table order while INNER JOIN reorders according to the index used.',
      },
      {
        es: 'LEFT JOIN devuelve una fila por cliente aunque tenga varios pedidos; INNER JOIN devuelve una fila por pedido.',
        en: 'LEFT JOIN returns one row per customer even with several orders; INNER JOIN returns one row per order.',
      },
    ],
    explanation: {
      es: 'La diferencia es solo la preservación de las filas del lado izquierdo sin coincidencia. Ambos multiplican filas cuando hay varios pedidos por cliente, y ninguno garantiza orden alguno sin ORDER BY explícito.',
      en: 'The difference is only about preserving left-side rows without a match. Both multiply rows when a customer has several orders, and neither guarantees any ordering without an explicit ORDER BY.',
    },
  },
  {
    id: 'be-jpa-07',
    topic: 'Transacciones',
    prompt: {
      es: '¿Qué problema evita el nivel de aislamiento REPEATABLE READ frente a READ COMMITTED?',
      en: 'Which problem does the REPEATABLE READ isolation level avoid compared to READ COMMITTED?',
    },
    answer: {
      es: 'La lectura no repetible: releer la misma fila dentro de la transacción ya no devuelve un valor distinto.',
      en: 'Non-repeatable reads: re-reading the same row within the transaction no longer returns a different value.',
    },
    distractors: [
      {
        es: 'La lectura sucia: ya no se pueden leer cambios de transacciones que aún no confirmaron.',
        en: 'Dirty reads: changes from uncommitted transactions can no longer be read.',
      },
      {
        es: 'La lectura fantasma: ya no aparecen filas nuevas al repetir una consulta con el mismo filtro.',
        en: 'Phantom reads: new rows no longer appear when repeating a query with the same filter.',
      },
    ],
    explanation: {
      es: 'La escalera de aislamiento resuelve un problema por escalón: READ COMMITTED ya elimina las lecturas sucias, REPEATABLE READ añade la estabilidad de las filas leídas y SERIALIZABLE es el que elimina los fantasmas (aunque InnoDB los evita antes con gap locks).',
      en: 'The isolation ladder solves one problem per step: READ COMMITTED already removes dirty reads, REPEATABLE READ adds stability of the rows already read, and SERIALIZABLE is the one removing phantoms (although InnoDB avoids them earlier with gap locks).',
    },
  },
  {
    id: 'be-jpa-08',
    topic: 'Mapeo',
    prompt: {
      es: 'En una relación bidireccional @OneToMany/@ManyToOne, ¿qué lado es el dueño de la relación?',
      en: 'In a bidirectional @OneToMany/@ManyToOne relationship, which side owns the relationship?',
    },
    answer: {
      es: 'El lado @ManyToOne, porque es el que tiene la clave foránea; el otro se marca con mappedBy.',
      en: 'The @ManyToOne side, because it holds the foreign key; the other one is marked with mappedBy.',
    },
    distractors: [
      {
        es: 'El lado @OneToMany, porque es el agregado que gobierna el ciclo de vida de los hijos con cascade.',
        en: 'The @OneToMany side, because it is the aggregate governing the children lifecycle through cascade.',
      },
      {
        es: 'Ambos por igual: JPA sincroniza los dos extremos y persiste el cambio desde cualquiera de ellos.',
        en: 'Both equally: JPA synchronises both ends and persists the change from either of them.',
      },
    ],
    explanation: {
      es: 'El dueño es quien mapea la columna de clave foránea, así que modificar solo la colección del padre no actualiza nada en la base: hay que asignar el padre en el hijo. JPA nunca sincroniza los extremos por ti, de ahí los métodos auxiliares tipo addItem que actualizan ambos lados.',
      en: 'The owner is the side mapping the foreign key column, so modifying only the parent collection updates nothing in the database: you must set the parent on the child. JPA never synchronises both ends for you, hence helper methods like addItem that update both sides.',
    },
  },
];
