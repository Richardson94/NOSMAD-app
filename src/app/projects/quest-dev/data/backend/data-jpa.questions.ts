import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_DATA_JPA_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-jpa-01',
    topic: 'Consultas',
    prompt: {
      es: '¿Qué es el problema N+1?',
      en: 'What is the N+1 problem?',
    },
    answer: {
      es: 'Traes N filas y luego, al recorrer una relación perezosa, sale una consulta extra por cada una. Se ve en el SQL: un select y después muchos iguales con otro id.',
      en: 'You load N rows and then, while walking a lazy relation, one extra query runs per row. You see it in the SQL: one select and then many similar ones with a different id.',
    },
    distractors: [
      {
        es: 'Es la consulta de conteo que acompaña a una página, necesaria para saber el total.',
        en: 'It is the count query that comes with a page, required to know the total.',
      },
      {
        es: 'Es un join que duplica filas y obliga a quitar repetidos en memoria.',
        en: 'It is a join that duplicates rows and forces you to drop repeats in memory.',
      },
    ],
    explanation: {
      es: 'Se corrige trayendo la relación en la misma consulta, con un grafo, o cargando por lotes. No pongas eager en el mapeo solo para callar el síntoma.',
      en: 'You fix it by loading the relation in the same query, with a graph, or by batching. Do not set eager on the mapping only to silence the symptom.',
    },
  },
  {
    id: 'be-jpa-02',
    topic: 'Persistencia',
    prompt: {
      es: '¿Qué pasa si modificas una entidad cargada en un método @Transactional y no llamas a save?',
      en: 'What happens if you change an entity loaded inside a @Transactional method and you never call save?',
    },
    answer: {
      es: 'Los cambios se guardan. La entidad está gestionada y, al confirmar, Hibernate detecta la diferencia y emite el update.',
      en: 'The changes are saved. The entity is managed and, on commit, Hibernate detects the difference and emits the update.',
    },
    distractors: [
      {
        es: 'Se descartan, porque sin save el repositorio no se entera del cambio.',
        en: 'They are discarded, because without save the repository does not notice the change.',
      },
      {
        es: 'Solo se guardan si la entidad tiene Version, que es lo que activa el seguimiento.',
        en: 'They are saved only if the entity has Version, which is what turns tracking on.',
      },
    ],
    explanation: {
      es: 'Por eso un cambio accidental también se persiste. Version sirve para el bloqueo optimista, no para detectar suciedad.',
      en: 'That is why an accidental change is persisted too. Version is for optimistic locking, not for detecting dirtiness.',
    },
  },
  {
    id: 'be-jpa-03',
    topic: 'Carga',
    prompt: {
      es: '¿Por qué aparece LazyInitializationException y cómo se corrige?',
      en: 'Why does LazyInitializationException appear and how do you fix it?',
    },
    answer: {
      es: 'Porque usas una relación perezosa cuando la transacción ya cerró. La corrección es cargar esos datos dentro de la transacción, con un join o un DTO.',
      en: 'Because you use a lazy relation after the transaction has already closed. The fix is to load that data inside the transaction, with a join or a DTO.',
    },
    distractors: [
      {
        es: 'Porque la relación no es eager. Se arregla cambiando el fetch en la entidad.',
        en: 'Because the relation is not eager. It is fixed by changing the fetch on the entity.',
      },
      {
        es: 'Porque la sesión cerró pronto. Se arregla dejando la sesión abierta durante toda la petición.',
        en: 'Because the session closed early. It is fixed by leaving the session open for the whole request.',
      },
    ],
    explanation: {
      es: 'Eager paga el costo en todas las consultas. Dejar la sesión abierta esconde el problema y retiene la conexión mientras se pinta la respuesta.',
      en: 'Eager pays the cost on every query. Leaving the session open hides the problem and holds the connection while the response is written.',
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
      es: 'Al guardar, el update incluye la versión que leíste. Si otra transacción ya la cambió, no actualiza ninguna fila y falla. No bloquea la fila al leer.',
      en: 'On save, the update includes the version you read. If another transaction already changed it, no row is updated and it fails. It does not lock the row on read.',
    },
    distractors: [
      {
        es: 'La base bloquea la fila al leerla y las demás transacciones esperan al commit.',
        en: 'The database locks the row when you read it and the other transactions wait for the commit.',
      },
      {
        es: 'JPA reintenta solo con los datos nuevos en cuanto ve el choque de versión.',
        en: 'JPA retries on its own with the fresh data as soon as it sees the version clash.',
      },
    ],
    explanation: {
      es: 'El reintento es de la aplicación: recarga y vuelve a aplicar la regla de negocio. Bloquear al leer es el modo pesimista.',
      en: 'The retry belongs to the application: reload and apply the business rule again. Locking on read is the pessimistic mode.',
    },
  },
  {
    id: 'be-jpa-05',
    topic: 'Repositorios',
    prompt: {
      es: '¿Qué diferencia hay entre findById y getReferenceById?',
      en: 'What is the difference between findById and getReferenceById?',
    },
    answer: {
      es: 'findById consulta y devuelve un Optional. getReferenceById te da un proxy con ese id y no consulta hasta que lees un campo.',
      en: 'findById queries and returns an Optional. getReferenceById gives you a proxy with that id and does not query until you read a field.',
    },
    distractors: [
      {
        es: 'findById devuelve la entidad gestionada y getReferenceById una copia suelta, fuera del contexto.',
        en: 'findById returns the managed entity and getReferenceById a loose copy, outside the context.',
      },
      {
        es: 'findById lanza si no existe y getReferenceById devuelve null sin ir a la base.',
        en: 'findById throws if it is missing and getReferenceById returns null without hitting the database.',
      },
    ],
    explanation: {
      es: 'El proxy sirve para asignar una relación por id sin traer la fila. Si el id no existe, el fallo sale más tarde, al usar el proxy.',
      en: 'The proxy is for assigning a relation by id without loading the row. If the id does not exist, the failure shows up later, when you use the proxy.',
    },
  },
  {
    id: 'be-jpa-06',
    topic: 'SQL',
    prompt: {
      es: '¿Qué diferencia hay entre INNER JOIN y LEFT JOIN?',
      en: 'What is the difference between an INNER JOIN and a LEFT JOIN?',
    },
    answer: {
      es: 'INNER JOIN deja solo las filas que coinciden en las dos tablas. LEFT JOIN conserva las de la izquierda aunque no haya coincidencia, con nulls en las columnas de la derecha.',
      en: 'INNER JOIN keeps only rows that match in both tables. LEFT JOIN keeps the left rows even when there is no match, with nulls in the right-hand columns.',
    },
    distractors: [
      {
        es: 'LEFT JOIN mantiene el orden de la tabla izquierda e INNER JOIN reordena según el índice.',
        en: 'LEFT JOIN keeps the left table order and INNER JOIN reorders according to the index.',
      },
      {
        es: 'LEFT JOIN devuelve una fila por cliente aunque tenga varios pedidos. INNER JOIN devuelve una por pedido.',
        en: 'LEFT JOIN returns one row per customer even with several orders. INNER JOIN returns one per order.',
      },
    ],
    explanation: {
      es: 'Los dos multiplican filas si hay varios pedidos por cliente. Ninguno ordena si no pones ORDER BY.',
      en: 'Both multiply rows if a customer has several orders. Neither sorts unless you add ORDER BY.',
    },
  },
  {
    id: 'be-jpa-07',
    topic: 'Aislamiento',
    prompt: {
      es: '¿Qué evita REPEATABLE READ que READ COMMITTED no evita?',
      en: 'What does REPEATABLE READ prevent that READ COMMITTED does not?',
    },
    answer: {
      es: 'Que al releer la misma fila dentro de la transacción te salga otro valor, porque alguien ya confirmó un cambio. Las lecturas sucias ya las corta READ COMMITTED.',
      en: 'Reading the same row again inside the transaction and getting another value, because someone already committed a change. Dirty reads are already stopped by READ COMMITTED.',
    },
    distractors: [
      {
        es: 'Las lecturas sucias: deja de ver cambios que aún no confirmaron.',
        en: 'Dirty reads: it stops seeing changes that are not committed yet.',
      },
      {
        es: 'Las filas fantasma: al repetir el filtro ya no aparecen filas nuevas. Ese es justo su trabajo.',
        en: 'Phantom rows: repeating the filter no longer shows new rows. That is exactly its job.',
      },
    ],
    explanation: {
      es: 'El siguiente escalón, el serializable, es el que trata de impedir filas nuevas en el mismo filtro. El motor concreto puede ir más lejos, pero no lo des por hecho en la entrevista.',
      en: 'The next step, serializable, is the one that tries to stop new rows in the same filter. The concrete engine may go further, but do not assume that in the interview.',
    },
  },
  {
    id: 'be-jpa-08',
    topic: 'Relaciones',
    prompt: {
      es: '¿Qué lado manda en un OneToMany con ManyToOne?',
      en: 'In a OneToMany with a ManyToOne, which side owns the relationship?',
    },
    answer: {
      es: 'El ManyToOne, porque ahí está la clave foránea. El otro lado lleva mappedBy y, si solo tocas la colección del padre, la base no cambia.',
      en: 'The ManyToOne, because that is where the foreign key is. The other side has mappedBy and, if you only touch the parent collection, the database does not change.',
    },
    distractors: [
      {
        es: 'El OneToMany, porque el padre controla el ciclo de vida de los hijos con cascade.',
        en: 'The OneToMany, because the parent controls the child lifecycle with cascade.',
      },
      {
        es: 'Los dos. JPA sincroniza los extremos y persiste el cambio desde cualquiera.',
        en: 'Both. JPA synchronises the ends and persists the change from either one.',
      },
    ],
    explanation: {
      es: 'Asigna el padre en el hijo. Un método auxiliar que actualiza los dos lados evita dejar la memoria y la base desalineadas.',
      en: 'Set the parent on the child. A helper that updates both sides avoids leaving memory and the database out of line.',
    },
  },
];
