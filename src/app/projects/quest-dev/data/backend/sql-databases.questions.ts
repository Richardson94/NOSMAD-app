import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_SQL_DATABASES_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-sql-01',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Qué implica la regla del prefijo más a la izquierda en un índice compuesto (a, b, c)?',
      en: 'What does the leftmost prefix rule mean for a composite index (a, b, c)?',
    },
    answer: {
      es: 'El índice se puede usar cuando el filtro incluye las columnas líderes en orden (a, a y b, o las tres); un predicado solo sobre b o c no puede posicionarse en ese índice.',
      en: 'The index can be used when the filter includes the leading columns in order (a, a and b, or all three); a predicate on b or c alone cannot seek into that index.',
    },
    distractors: [
      {
        es: 'El B-tree guarda todas las permutaciones de las columnas, así que cualquier subconjunto en el WHERE usa el índice sin importar el orden.',
        en: 'The B-tree stores every permutation of the columns, so any subset in the WHERE clause uses the index regardless of order.',
      },
      {
        es: 'Si falta la primera columna, el planificador aplica skip scan por defecto en PostgreSQL y MySQL, de modo que filtrar por b sigue usando el índice compuesto.',
        en: 'If the first column is missing, the planner applies skip scan by default in PostgreSQL and MySQL, so filtering on b still uses the composite index.',
      },
    ],
    explanation: {
      es: 'Un índice btree (a, b, c) está ordenado primero por a, luego b y luego c, de modo que WHERE a = ? AND b = ? puede hacer Index Scan, pero WHERE b = ? no tiene punto de entrada. El skip scan existe en Oracle y no es el plan por defecto en PostgreSQL ni en InnoDB. Confundir esto con un índice independiente por columna explica por qué se crean índices que el planificador nunca elige.',
      en: 'A btree index (a, b, c) is ordered first by a, then b, then c, so WHERE a = ? AND b = ? can do an Index Scan, but WHERE b = ? has no entry point. Skip scan exists in Oracle and is not the default plan in PostgreSQL or InnoDB. Confusing this with a separate index per column explains why indexes get created that the planner never chooses.',
    },
  },
  {
    id: 'be-sql-02',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Qué es la selectividad de un índice y por qué el planificador puede ignorarlo?',
      en: 'What is index selectivity and why can the planner ignore the index?',
    },
    answer: {
      es: 'La selectividad es la fracción de filas que el predicado deja pasar; si es baja, un Seq Scan puede salir más barato que saltar por el índice y volver al montón.',
      en: 'Selectivity is the fraction of rows the predicate lets through; if it is low, a Seq Scan can be cheaper than jumping through the index and back to the heap.',
    },
    distractors: [
      {
        es: 'La selectividad solo existe en índices UNIQUE; si el índice admite duplicados el planificador lo ignora siempre porque no puede estimar el costo.',
        en: 'Selectivity exists only on UNIQUE indexes; if the index allows duplicates the planner always ignores it because it cannot estimate cost.',
      },
      {
        es: 'El planificador ignora el índice cuando la columna admite NULL, porque un btree no puede almacenar claves nulas y el predicado dejaría de ser válido.',
        en: 'The planner ignores the index when the column allows NULL, because a btree cannot store null keys and the predicate would become invalid.',
      },
    ],
    explanation: {
      es: 'Con estadísticas (n_distinct, histograma) el planificador compara el costo de Seq Scan frente a Index Scan; WHERE status = activo con el 90 por ciento de las filas iguales suele perder el índice. UNIQUE no es un requisito para usarlo, y btree sí guarda NULL, normalmente como un valor más en el extremo. Una estimación desactualizada tras un ANALYZE pendiente también hace que se ignore un índice selectivo de verdad.',
      en: 'With statistics (n_distinct, histogram) the planner compares Seq Scan cost against Index Scan; WHERE status = active with 90 percent of rows equal usually loses the index. UNIQUE is not required to use it, and btree does store NULL, usually as one more value at the edge. Stale statistics after a pending ANALYZE can also make a truly selective index get ignored.',
    },
  },
  {
    id: 'be-sql-03',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Qué es un índice de cobertura y qué permite el escaneo solo de índice?',
      en: 'What is a covering index and what does an index-only scan allow?',
    },
    answer: {
      es: 'Un índice de cobertura incluye todas las columnas que la consulta necesita, así el motor puede resolverla con Index Only Scan sin visitar la tabla.',
      en: 'A covering index includes every column the query needs, so the engine can satisfy it with an Index Only Scan without visiting the table.',
    },
    distractors: [
      {
        es: 'Un índice de cobertura es el que cubre a la vez predicados de igualdad y de rango; el escaneo solo de índice es el nombre de ese plan mixto.',
        en: 'A covering index is one that covers both equality and range predicates at once; index-only scan is the name of that mixed plan.',
      },
      {
        es: 'El Index Only Scan solo existe sobre la clave primaria, porque el índice de la PK almacena la fila completa y cualquier otro índice obliga a ir al montón.',
        en: 'Index Only Scan exists only on the primary key, because the PK index stores the full row and any other index must visit the heap.',
      },
    ],
    explanation: {
      es: 'Si SELECT id, email FROM users WHERE email = ? y hay un índice (email) INCLUDE (id), o (email, id), el plan puede ser Index Only Scan. En PostgreSQL hace falta además el visibility map; si la página no está all-visible, igual se visita el montón. La PK de InnoDB es clustered y sí contiene la fila, pero un índice secundario también cubre si trae todas las columnas pedidas.',
      en: 'If SELECT id, email FROM users WHERE email = ? and there is an index (email) INCLUDE (id), or (email, id), the plan can be Index Only Scan. PostgreSQL also needs the visibility map; if the page is not all-visible, the heap is still visited. The InnoDB PK is clustered and does contain the row, but a secondary index also covers if it holds every requested column.',
    },
  },
  {
    id: 'be-sql-04',
    topic: 'SQL y bases de datos',
    prompt: {
      es: 'Al leer un plan de ejecución, ¿qué distinguen el escaneo secuencial, el escaneo por índice y las filas estimadas?',
      en: 'When reading an execution plan, what do sequential scan, index scan and estimated rows tell you?',
    },
    answer: {
      es: 'Seq Scan lee la tabla entera; Index Scan usa el índice y luego busca las filas; rows es la estimación que decide el plan, y si está mal el motor elige el acceso equivocado.',
      en: 'Seq Scan reads the whole table; Index Scan uses the index and then fetches rows; rows is the estimate that drives the plan, and if it is wrong the engine picks the wrong access.',
    },
    distractors: [
      {
        es: 'Seq Scan significa que falta un índice; Index Scan significa que la consulta ya es óptima y no hace falta mirar el resto del plan.',
        en: 'Seq Scan means an index is missing; Index Scan means the query is already optimal and the rest of the plan does not need review.',
      },
      {
        es: 'La columna rows del plan es el recuento real devuelto; si no coincide con el cliente, el plan está corrupto y hay que reescribir la consulta.',
        en: 'The rows column in the plan is the actual count returned; if it does not match the client, the plan is corrupt and the query must be rewritten.',
      },
    ],
    explanation: {
      es: 'EXPLAIN muestra rows estimadas; EXPLAIN ANALYZE añade el recuento real y el tiempo. Un Seq Scan sobre una tabla pequeña o poco selectiva puede ser la elección correcta, y un Index Scan con rows infladas puede degradar a lecturas aleatorias peores. Cuando estimación y realidad divergen, el siguiente paso es ANALYZE o revisar el predicado, no asumir que el índice falta o que el plan está roto.',
      en: 'EXPLAIN shows estimated rows; EXPLAIN ANALYZE adds the actual count and timing. A Seq Scan on a small or unselective table can be the right choice, and an Index Scan with inflated rows can degrade into worse random reads. When estimate and reality diverge, the next step is ANALYZE or reviewing the predicate, not assuming the index is missing or that the plan is corrupt.',
    },
  },
  {
    id: 'be-sql-05',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Por qué aplicar una función sobre la columna indexada hace perder la sargabilidad?',
      en: 'Why does applying a function on the indexed column make the predicate non-sargable?',
    },
    answer: {
      es: 'El predicado deja de ser un rango sobre la clave del btree; WHERE YEAR(created_at) = 2024 no puede posicionarse y suele caer en Seq Scan, hay que reescribirlo como rango sobre la columna.',
      en: 'The predicate stops being a range on the btree key; WHERE YEAR(created_at) = 2024 cannot seek and usually falls to Seq Scan, so it must be rewritten as a range on the column.',
    },
    distractors: [
      {
        es: 'Las funciones inmutables conservan la sargabilidad en cualquier btree; el planificador evalúa YEAR y sigue usando el índice de created_at.',
        en: 'Immutable functions keep sargability on any btree; the planner evaluates YEAR and still uses the created_at index.',
      },
      {
        es: 'El optimizador reescribe YEAR(created_at) en un rango de fechas de forma automática, así que el índice de la columna se usa igual.',
        en: 'The optimizer rewrites YEAR(created_at) into a date range automatically, so the column index is still used.',
      },
    ],
    explanation: {
      es: 'Sargable significa que el predicado se puede usar como búsqueda o rango: WHERE created_at >= DATE 2024-01-01 AND created_at < DATE 2025-01-01 sí usa el índice. Una función sobre la columna cambia el valor comparado y el btree de created_at ya no está ordenado por YEAR. Si hace falta filtrar por la expresión, se crea un índice funcional sobre YEAR(created_at) o LOWER(email), no se espera que el optimizador deshaga la función.',
      en: 'Sargable means the predicate can be used as a seek or range: WHERE created_at >= DATE 2024-01-01 AND created_at < DATE 2025-01-01 does use the index. A function on the column changes the compared value and the created_at btree is no longer ordered by YEAR. If you must filter by the expression, you create a functional index on YEAR(created_at) or LOWER(email); you do not expect the optimizer to unwrap the function.',
    },
  },
  {
    id: 'be-sql-06',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Cómo afecta LIKE con comodín al inicio frente a comodín al final al uso del índice?',
      en: 'How does LIKE with a leading wildcard versus a trailing wildcard affect index use?',
    },
    answer: {
      es: 'LIKE foo% puede usar un btree porque es un rango sobre el prefijo; LIKE %foo no puede posicionarse y suele resolver con Seq Scan.',
      en: 'LIKE foo% can use a btree because it is a range on the prefix; LIKE %foo cannot seek and usually resolves with Seq Scan.',
    },
    distractors: [
      {
        es: 'Ambos usan el índice porque LIKE siempre se reescribe internamente a un rango BETWEEN sobre la columna.',
        en: 'Both use the index because LIKE is always rewritten internally to a BETWEEN range on the column.',
      },
      {
        es: 'LIKE %foo usa mejor el índice porque filtra más filas (mayor selectividad) y el planificador premia ese predicado.',
        en: 'LIKE %foo uses the index better because it filters more rows (higher selectivity) and the planner rewards that predicate.',
      },
    ],
    explanation: {
      es: 'El btree ordena por prefijo, así que LIKE foo% equivale a col >= foo AND col < fop y admite Index Scan. LIKE %foo o LIKE %foo% no define un intervalo y el índice btree no ayuda a buscar. Para substrings arbitrarios hace falta un índice de trigramas (GIN pg_trgm) u otra estructura, no el btree de la columna.',
      en: 'The btree orders by prefix, so LIKE foo% is equivalent to col >= foo AND col < fop and allows Index Scan. LIKE %foo or LIKE %foo% does not define a range and the btree index cannot help the seek. Arbitrary substrings need a trigram index (GIN pg_trgm) or another structure, not the column btree.',
    },
  },
  {
    id: 'be-sql-07',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Cuál es el propósito de la normalización y cuándo se desnormaliza a propósito?',
      en: 'What is the purpose of normalization and when do you denormalize on purpose?',
    },
    answer: {
      es: 'La normalización reduce redundancia y anomalías de actualización; se desnormaliza a propósito cuando el patrón de lectura necesita menos JOIN y conviene mantener datos duplicados de forma controlada.',
      en: 'Normalization reduces redundancy and update anomalies; you denormalize on purpose when the read pattern needs fewer JOINs and it is cheaper to maintain duplicated data under control.',
    },
    distractors: [
      {
        es: 'La normalización existe para hacer los índices más pequeños; desnormalizar es lo que ocurre al añadir un índice de cobertura o INCLUDE.',
        en: 'Normalization exists to make indexes smaller; denormalizing is what happens when you add a covering index or INCLUDE.',
      },
      {
        es: 'Solo se desnormaliza al migrar a NoSQL; un esquema relacional debe quedarse en tercera forma normal para que el planificador use los índices.',
        en: 'You denormalize only when moving to NoSQL; a relational schema must stay in third normal form so the planner can use indexes.',
      },
    ],
    explanation: {
      es: 'En 3NF cada hecho no clave depende de la clave, y los JOIN reconstruyen la vista. Un resumen, una columna cacheada o una vista materializada duplican a propósito para evitar JOIN caros en el camino caliente de lectura. El índice de cobertura no cambia el modelo relacional, y desnormalizar dentro de SQL es una decisión de acceso, no un requisito de NoSQL ni del planificador.',
      en: 'In 3NF each non-key fact depends on the key, and JOINs rebuild the view. A summary, a cached column or a materialized view duplicates on purpose to avoid expensive JOINs on the hot read path. A covering index does not change the relational model, and denormalizing inside SQL is an access-pattern decision, not a NoSQL or planner requirement.',
    },
  },
  {
    id: 'be-sql-08',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Qué diferencia hay entre clave primaria, restricción UNIQUE e índice?',
      en: 'What is the difference between a primary key, a UNIQUE constraint and an index?',
    },
    answer: {
      es: 'PRIMARY KEY identifica la fila, implica NOT NULL y crea un índice único; UNIQUE impide duplicados (con NULLs según el motor) sin ser la identidad; un INDEX solo acelera búsquedas y puede tener duplicados.',
      en: 'PRIMARY KEY identifies the row, implies NOT NULL and creates a unique index; UNIQUE blocks duplicates (NULLs depend on the engine) without being the identity; an INDEX only speeds lookups and can hold duplicates.',
    },
    distractors: [
      {
        es: 'UNIQUE y PRIMARY KEY son idénticos salvo el nombre; INDEX es lo mismo que UNIQUE pero sin documentar la restricción en el catálogo.',
        en: 'UNIQUE and PRIMARY KEY are identical except for the name; INDEX is the same as UNIQUE without documenting the constraint in the catalog.',
      },
      {
        es: 'PRIMARY KEY es solo un concepto lógico; hace falta un UNIQUE aparte para que la base realmente impida duplicados en esa columna.',
        en: 'PRIMARY KEY is only a logical concept; a separate UNIQUE is still required for the database to actually block duplicates on that column.',
      },
    ],
    explanation: {
      es: 'ALTER TABLE ADD PRIMARY KEY crea la restricción y el índice único de soporte; ADD UNIQUE hace lo propio sin marcar identidad ni forzar NOT NULL en todos los motores. CREATE INDEX no exige unicidad: WHERE col = ? puede usarlo, pero INSERT de duplicados no falla. En InnoDB la PK es clustered; un UNIQUE secundario es otro btree que apunta a la PK.',
      en: 'ALTER TABLE ADD PRIMARY KEY creates the constraint and the supporting unique index; ADD UNIQUE does the same without marking identity or forcing NOT NULL on every engine. CREATE INDEX does not require uniqueness: WHERE col = ? can use it, but duplicate INSERTs do not fail. In InnoDB the PK is clustered; a secondary UNIQUE is another btree that points to the PK.',
    },
  },
  {
    id: 'be-sql-09',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Qué hacen las claves foráneas y el borrado en cascada a nivel de base de datos?',
      en: 'What do foreign keys and database-level cascade delete do?',
    },
    answer: {
      es: 'FOREIGN KEY impone integridad referencial; ON DELETE CASCADE borra las filas hijas cuando se borra el padre, aunque la aplicación no emita esos DELETE.',
      en: 'FOREIGN KEY enforces referential integrity; ON DELETE CASCADE deletes child rows when the parent is deleted, even if the application never issues those DELETEs.',
    },
    distractors: [
      {
        es: 'CASCADE es una convención de la aplicación; la base solo documenta la relación y no ejecuta borrados en otras tablas.',
        en: 'CASCADE is an application convention; the database only documents the relationship and does not run deletes on other tables.',
      },
      {
        es: 'ON DELETE CASCADE no borra hijos: pone NULL en la clave foránea y bloquea al padre hasta que la aplicación confirme el cambio.',
        en: 'ON DELETE CASCADE does not delete children: it sets the foreign key to NULL and locks the parent until the application confirms the change.',
      },
    ],
    explanation: {
      es: 'ON DELETE CASCADE dispara DELETE en las hijas dentro de la misma transacción; ON DELETE RESTRICT o NO ACTION rechazan el borrado del padre, y ON DELETE SET NULL es la acción que anula la FK. Un DELETE FROM padres puede vaciar tablas hijas grandes sin que el código lo vea, y los índices de la FK importan para que esa cascada no haga Seq Scan. JPA cascade=REMOVE no sustituye la FK: sin la restricción, la base no protege inserciones huérfanas.',
      en: 'ON DELETE CASCADE fires DELETE on children inside the same transaction; ON DELETE RESTRICT or NO ACTION reject the parent delete, and ON DELETE SET NULL is the action that nulls the FK. A DELETE FROM parents can empty large child tables without the code seeing it, and indexes on the FK matter so that cascade does not Seq Scan. JPA cascade=REMOVE does not replace the FK: without the constraint, the database does not block orphan inserts.',
    },
  },
  {
    id: 'be-sql-10',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Cuál es la semántica de NULL en las comparaciones y cuál es la trampa de NOT IN con subconsulta?',
      en: 'What is NULL semantics in comparisons and what is the NOT IN subquery trap?',
    },
    answer: {
      es: 'Comparar con NULL produce UNKNOWN, así que WHERE col = NULL no filtra nada; si la subconsulta de NOT IN devuelve un NULL, el predicado no es verdadero para ninguna fila y el resultado queda vacío.',
      en: 'Comparing with NULL yields UNKNOWN, so WHERE col = NULL matches nothing; if the NOT IN subquery returns a NULL, the predicate is not true for any row and the result is empty.',
    },
    distractors: [
      {
        es: 'NULL es igual a NULL, de modo que NOT IN ignora los nulos de la subconsulta y sigue filtrando el resto de valores con normalidad.',
        en: 'NULL equals NULL, so NOT IN skips nulls from the subquery and still filters the remaining values as usual.',
      },
      {
        es: 'NOT IN y NOT EXISTS son siempre equivalentes, incluso cuando la subconsulta puede devolver NULL, porque ambos niegan la pertenencia al conjunto.',
        en: 'NOT IN and NOT EXISTS are always equivalent, even when the subquery can return NULL, because both negate set membership.',
      },
    ],
    explanation: {
      es: 'Hay que usar IS NULL o IS NOT NULL; col = NULL nunca es TRUE. En NOT IN (SELECT x FROM t), si x es NULL entonces valor NOT IN (..., NULL) es UNKNOWN y esas filas desaparecen. NOT EXISTS (SELECT 1 FROM t WHERE t.x = o.col) no sufre esa trampa porque la igualdad con NULL no cuenta como coincidencia y el EXISTS simplemente no encuentra fila.',
      en: 'You must use IS NULL or IS NOT NULL; col = NULL is never TRUE. In NOT IN (SELECT x FROM t), if x is NULL then value NOT IN (..., NULL) is UNKNOWN and those rows vanish. NOT EXISTS (SELECT 1 FROM t WHERE t.x = o.col) does not hit that trap because equality with NULL does not count as a match and EXISTS simply finds no row.',
    },
  },
  {
    id: 'be-sql-11',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Qué diferencia hay entre filtrar con HAVING tras GROUP BY y filtrar en WHERE?',
      en: 'What is the difference between filtering with HAVING after GROUP BY and filtering in WHERE?',
    },
    answer: {
      es: 'WHERE filtra filas antes de agrupar; HAVING filtra grupos ya formados y es el sitio para condiciones sobre agregados como COUNT(*) > 1.',
      en: 'WHERE filters rows before grouping; HAVING filters groups already built and is the place for conditions on aggregates such as COUNT(*) > 1.',
    },
    distractors: [
      {
        es: 'HAVING es un alias de WHERE cuando hay GROUP BY; ambos se ejecutan en la misma etapa y se pueden intercambiar sin cambiar el plan.',
        en: 'HAVING is an alias of WHERE when GROUP BY is present; both run at the same stage and can be swapped without changing the plan.',
      },
      {
        es: 'Con GROUP BY los filtros de columna deben ir en HAVING, porque WHERE ya no puede referenciar tablas agrupadas y rechaza esas columnas.',
        en: 'With GROUP BY, column filters must go in HAVING, because WHERE can no longer reference grouped tables and rejects those columns.',
      },
    ],
    explanation: {
      es: 'El orden lógico es FROM, WHERE, GROUP BY, HAVING, SELECT. WHERE status = PAID reduce filas baratas de índice; GROUP BY customer_id HAVING SUM(amount) > 1000 opera sobre el agregado. Poner el filtro de status en HAVING obliga a agrupar filas que WHERE habría descartado, y WHERE SUM(amount) > 1000 es inválido porque el agregado aún no existe.',
      en: 'The logical order is FROM, WHERE, GROUP BY, HAVING, SELECT. WHERE status = PAID cheaply reduces rows via an index; GROUP BY customer_id HAVING SUM(amount) > 1000 operates on the aggregate. Putting the status filter in HAVING forces grouping of rows that WHERE would have dropped, and WHERE SUM(amount) > 1000 is invalid because the aggregate does not exist yet.',
    },
  },
  {
    id: 'be-sql-12',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Para qué sirven las funciones de ventana ROW_NUMBER y RANK y cuál es su caso de uso?',
      en: 'What are window functions such as ROW_NUMBER and RANK for, and what is their use case?',
    },
    answer: {
      es: 'ROW_NUMBER asigna una secuencia única por partición; RANK comparte el puesto en empates y salta números; se usan para top-N por grupo sin colapsar filas como hace GROUP BY.',
      en: 'ROW_NUMBER assigns a unique sequence per partition; RANK shares the place on ties and skips numbers; they are used for top-N per group without collapsing rows the way GROUP BY does.',
    },
    distractors: [
      {
        es: 'ROW_NUMBER y RANK colapsan el resultado a una fila por grupo, igual que DISTINCT ON, y por eso sustituyen a GROUP BY en informes.',
        en: 'ROW_NUMBER and RANK collapse the result to one row per group, just like DISTINCT ON, and that is why they replace GROUP BY in reports.',
      },
      {
        es: 'RANK ordena el resultado completo y ROW_NUMBER solo es válido sin PARTITION BY; mezclar ambos en la misma consulta es un error semántico.',
        en: 'RANK orders the whole result and ROW_NUMBER is only valid without PARTITION BY; mixing both in the same query is a semantic error.',
      },
    ],
    explanation: {
      es: 'ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at DESC) numera sin fusionar filas; luego un filtro rn = 1 deja el último pedido de cada cliente. RANK() OVER (ORDER BY score DESC) da el mismo número a empates y omite el siguiente, a diferencia de DENSE_RANK. No sustituyen a GROUP BY: el conjunto sigue teniendo una fila por registro original hasta que se filtre la ventana.',
      en: 'ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at DESC) numbers rows without merging them; a later filter rn = 1 keeps the latest order per customer. RANK() OVER (ORDER BY score DESC) gives ties the same number and skips the next, unlike DENSE_RANK. They do not replace GROUP BY: the set still has one row per original record until the window is filtered.',
    },
  },
  {
    id: 'be-sql-13',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Qué es una CTE con WITH y qué aportan las CTE recursivas?',
      en: 'What is a CTE with WITH and what do recursive CTEs add?',
    },
    answer: {
      es: 'WITH nombra una subconsulta reutilizable más adelante; WITH RECURSIVE recorre una jerarquía uniendo el ancla con un paso recursivo hasta que no salen filas nuevas.',
      en: 'WITH names a subquery that can be referenced later; WITH RECURSIVE walks a hierarchy by unioning the anchor with a recursive step until no new rows appear.',
    },
    distractors: [
      {
        es: 'Una CTE siempre se materializa y por eso es más rápida que una subconsulta, porque se calcula una sola vez y se guarda en disco.',
        en: 'A CTE is always materialized and therefore faster than a subquery, because it is computed once and stored on disk.',
      },
      {
        es: 'Las CTE recursivas sustituyen a FOREIGN KEY en los árboles: persisten la tabla de cierre automáticamente en cada COMMIT.',
        en: 'Recursive CTEs replace FOREIGN KEY on trees: they persist the closure table automatically on every COMMIT.',
      },
    ],
    explanation: {
      es: 'WITH RECURSIVE arbol AS (SELECT id, parent_id FROM nodos WHERE parent_id IS NULL UNION ALL SELECT n.id, n.parent_id FROM nodos n JOIN arbol a ON n.parent_id = a.id) expande el grafo en tiempo de consulta. PostgreSQL puede inlinear una CTE no recursiva, así que no hay ganancia mágica ni materialización garantizada. La FK sigue siendo la restricción de integridad; la CTE no escribe una closure table.',
      en: 'WITH RECURSIVE tree AS (SELECT id, parent_id FROM nodes WHERE parent_id IS NULL UNION ALL SELECT n.id, n.parent_id FROM nodes n JOIN tree a ON n.parent_id = a.id) expands the graph at query time. PostgreSQL may inline a non-recursive CTE, so there is no magic speedup and no guaranteed materialization. The FK remains the integrity constraint; the CTE does not write a closure table.',
    },
  },
  {
    id: 'be-sql-14',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Cómo elegir entre EXISTS, IN y JOIN para expresar una subconsulta?',
      en: 'How do you choose among EXISTS, IN and JOIN for a subquery?',
    },
    answer: {
      es: 'EXISTS se detiene en la primera coincidencia y convive bien con NULL; IN compara contra el conjunto y NOT IN se rompe si hay NULL; JOIN puede duplicar filas cuando hay varias coincidencias.',
      en: 'EXISTS stops at the first match and is safe with NULL; IN compares against the set and NOT IN breaks if a NULL is present; JOIN can duplicate rows when there are several matches.',
    },
    distractors: [
      {
        es: 'IN es siempre más rápido que EXISTS porque el motor hashea la lista una vez; JOIN y EXISTS devuelven el mismo número de filas, así que son intercambiables.',
        en: 'IN is always faster than EXISTS because the engine hashes the list once; JOIN and EXISTS return the same number of rows, so they are interchangeable.',
      },
      {
        es: 'JOIN es la única forma de usar un índice en la tabla interna; EXISTS e IN fuerzan un Seq Scan de la subconsulta en cada fila exterior.',
        en: 'JOIN is the only way to use an index on the inner table; EXISTS and IN force a Seq Scan of the subquery for every outer row.',
      },
    ],
    explanation: {
      es: 'WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id) puede hacer Nested Loop con Index Scan en customer_id y no duplica clientes. El JOIN equivalente multiplica filas si hay varios pedidos y a menudo necesita DISTINCT. NOT IN (SELECT o.customer_id ...) con un customer_id NULL vacía el resultado; NOT EXISTS no. El planificador puede reescribir IN a semi-join, así que no hay un ganador fijo de rendimiento.',
      en: 'WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id) can do a Nested Loop with Index Scan on customer_id and does not duplicate customers. The equivalent JOIN multiplies rows if there are several orders and often needs DISTINCT. NOT IN (SELECT o.customer_id ...) with a NULL customer_id empties the result; NOT EXISTS does not. The planner can rewrite IN as a semi-join, so there is no fixed performance winner.',
    },
  },
  {
    id: 'be-sql-15',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Qué diferencia hay entre UNION y UNION ALL y cuál es su costo?',
      en: 'What is the difference between UNION and UNION ALL and what is the cost?',
    },
    answer: {
      es: 'UNION concatena y luego elimina duplicados (ordenación o hash), con costo extra; UNION ALL conserva duplicados y puede encadenar ambos lados sin Unique.',
      en: 'UNION concatenates and then removes duplicates (sort or hash), with extra cost; UNION ALL keeps duplicates and can append both sides without Unique.',
    },
    distractors: [
      {
        es: 'UNION ALL es más lento porque debe guardar los duplicados en una tabla temporal; UNION evita esa escritura al descartarlos al vuelo.',
        en: 'UNION ALL is slower because it must store duplicates in a temporary table; UNION avoids that write by dropping them on the fly.',
      },
      {
        es: 'UNION y UNION ALL exigen la misma ordenación; la única diferencia es que UNION añade DISTINCT de forma implícita en el SELECT de cada lado.',
        en: 'UNION and UNION ALL require the same sort; the only difference is that UNION adds DISTINCT implicitly on each side of the SELECT.',
      },
    ],
    explanation: {
      es: 'El plan de UNION suele ser Append más Sort Unique o HashAggregate; UNION ALL se queda en Append y evita ese paso. DISTINCT no se aplica a cada SELECT por separado, sino al resultado combinado. Si los conjuntos no se solapan, UNION ALL es la elección correcta y UNION solo añade CPU y memoria.',
      en: 'The UNION plan is usually Append plus Sort Unique or HashAggregate; UNION ALL stays at Append and skips that step. DISTINCT is not applied to each SELECT separately, but to the combined result. If the sets do not overlap, UNION ALL is the right choice and UNION only adds CPU and memory.',
    },
  },
  {
    id: 'be-sql-16',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Qué significa la durabilidad de ACID y qué papel tiene el registro de escritura anticipada?',
      en: 'What does ACID durability mean and what is the role of the write-ahead log?',
    },
    answer: {
      es: 'Durabilidad significa que una transacción confirmada sobrevive a un crash; el WAL registra el cambio antes de vaciar las páginas de datos, para que el redo pueda repetirlo.',
      en: 'Durability means a committed transaction survives a crash; the WAL records the change before data pages are flushed, so redo can replay it.',
    },
    distractors: [
      {
        es: 'La durabilidad la garantiza la caché de buffers; el WAL sirve solo para copias punto en el tiempo, no para que COMMIT sea durable.',
        en: 'Durability is guaranteed by the buffer cache; WAL is only for point-in-time copies, not for making COMMIT durable.',
      },
      {
        es: 'COMMIT debe hacer fsync del montón de cada tabla tocada; el WAL existe para acelerar SELECT rehaciendo resultados previos.',
        en: 'COMMIT must fsync the heap of every touched table; WAL exists to speed up SELECT by replaying previous results.',
      },
    ],
    explanation: {
      es: 'COMMIT espera al fsync del WAL (registro redo); las páginas sucias salen después en un checkpoint. Si el proceso muere, el arranque rehace desde el último checkpoint con esos registros y recupera lo ya confirmado. La buffer cache se pierde en un crash, y el WAL no acelera SELECT: su trabajo es redo y, en muchos motores, también la base del PITR.',
      en: 'COMMIT waits for the WAL fsync (redo record); dirty pages go out later at a checkpoint. If the process dies, startup replays from the last checkpoint with those records and recovers what was already committed. The buffer cache is lost on a crash, and WAL does not speed up SELECT: its job is redo and, in many engines, also the basis of PITR.',
    },
  },
  {
    id: 'be-sql-17',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Qué causa un deadlock en la base de datos y cuál es la estrategia de reintento?',
      en: 'What causes a database deadlock and what is the retry strategy?',
    },
    answer: {
      es: 'Dos transacciones bloquean filas en orden inverso y se esperan mutuamente; el motor aborta a una víctima y la aplicación debe reintentar la transacción abortada.',
      en: 'Two transactions lock rows in opposite order and wait on each other; the engine aborts one victim and the application must retry the aborted transaction.',
    },
    distractors: [
      {
        es: 'Un deadlock es una espera de bloqueo que superó lock_timeout; subir el timeout es la solución y evita tener que reintentar.',
        en: 'A deadlock is a lock wait that exceeded lock_timeout; raising the timeout is the fix and avoids the need to retry.',
      },
      {
        es: 'La base reintenta deadlocks sola hasta que ambos COMMIT tienen éxito, así que la aplicación puede ignorar el error y seguir.',
        en: 'The database retries deadlocks on its own until both COMMITs succeed, so the application can ignore the error and continue.',
      },
    ],
    explanation: {
      es: 'Si A hace UPDATE t SET ... WHERE id = 1 y luego id = 2, y B hace 2 y luego 1, cada uno espera un bloqueo que el otro no soltará: el detector elige una víctima (40P01 en PostgreSQL). lock_timeout corta esperas simples, no el ciclo. La estrategia es reintentar toda la transacción con retroceso y, mejor aún, fijar un orden global de bloqueo para que UPDATE no se cruce.',
      en: 'If A runs UPDATE t SET ... WHERE id = 1 and then id = 2, and B does 2 then 1, each waits on a lock the other will not release: the detector picks a victim (40P01 in PostgreSQL). lock_timeout cuts simple waits, not the cycle. The strategy is to retry the whole transaction with backoff and, better, to fix a global lock order so UPDATE does not cross.',
    },
  },
  {
    id: 'be-sql-18',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Qué diferencia hay entre bloqueos de fila y de tabla, y para qué sirve SELECT FOR UPDATE?',
      en: 'What is the difference between row locks and table locks, and what is SELECT FOR UPDATE for?',
    },
    answer: {
      es: 'Los bloqueos de fila cubren solo las filas coincidentes; los de tabla cubren la relación entera; SELECT FOR UPDATE toma bloqueos exclusivos de fila para serializar actualizaciones hasta el COMMIT.',
      en: 'Row locks cover only matching rows; table locks cover the whole relation; SELECT FOR UPDATE takes exclusive row locks to serialize updates until COMMIT.',
    },
    distractors: [
      {
        es: 'SELECT FOR UPDATE bloquea la tabla completa, de modo que ningún INSERT de otra sesión puede entrar mientras la transacción sigue abierta.',
        en: 'SELECT FOR UPDATE locks the whole table, so no INSERT from another session can proceed while the transaction stays open.',
      },
      {
        es: 'Los bloqueos de fila se liberan en cuanto el SELECT termina, aunque la transacción siga abierta; FOR UPDATE solo marca las filas en el cliente.',
        en: 'Row locks are released as soon as the SELECT finishes, even if the transaction stays open; FOR UPDATE only marks the rows in the client.',
      },
    ],
    explanation: {
      es: 'SELECT id FROM orders WHERE status = OPEN FOR UPDATE retiene bloqueos de fila hasta COMMIT o ROLLBACK, para que un UPDATE posterior no pierda una carrera. LOCK TABLE ... IN ACCESS EXCLUSIVE MODE sí cierra la tabla; FOR UPDATE no equivale a eso, aunque en InnoDB los next-key/gap locks pueden bloquear INSERT en el hueco del rango. Sin transacción, FOR UPDATE no tiene sentido porque el bloqueo se soltaría al instante.',
      en: 'SELECT id FROM orders WHERE status = OPEN FOR UPDATE holds row locks until COMMIT or ROLLBACK, so a later UPDATE does not lose a race. LOCK TABLE ... IN ACCESS EXCLUSIVE MODE does close the table; FOR UPDATE is not the same, although InnoDB next-key/gap locks can still block INSERT in the range gap. Without a transaction, FOR UPDATE is pointless because the lock would be released immediately.',
    },
  },
  {
    id: 'be-sql-19',
    topic: 'SQL y bases de datos',
    prompt: {
      es: 'En migraciones con Flyway o Liquibase, ¿cómo funcionan el versionado, los scripts repetibles y la reversión?',
      en: 'In Flyway or Liquibase migrations, how do versioning, repeatable scripts and rollback work?',
    },
    answer: {
      es: 'Las migraciones versionadas (V__) corren una vez en orden; las repetibles (R__) se vuelven a ejecutar si cambia el checksum; la reversión no es automática, lo habitual son scripts undo o migraciones hacia adelante que corrigen.',
      en: 'Versioned migrations (V__) run once in order; repeatable ones (R__) run again when the checksum changes; rollback is not automatic, undo scripts or forward-fix migrations are the usual strategy.',
    },
    distractors: [
      {
        es: 'Flyway guarda cada script en git, así que se puede borrar el esquema y repetirlo; los checksums son informativos y nunca bloquean el arranque.',
        en: 'Flyway stores every script in git, so you can drop the schema and replay it; checksums are informational and never block startup.',
      },
      {
        es: 'Las repetibles corren en cada arranque da igual el contenido, por eso deben ser idempotentes y además llevar un número de versión nuevo cada vez.',
        en: 'Repeatable migrations run on every startup regardless of content, which is why they must be idempotent and also carry a new version number each time.',
      },
    ],
    explanation: {
      es: 'flyway_schema_history (o DATABASECHANGELOG) registra versión y checksum; un V2__add_index.sql editado a posteriori falla por checksum mismatch. R__views.sql se reaplica solo si el archivo cambió, sin nuevo número. Undo (U__ o rollback de Liquibase) es opcional y poco usado en producción: la estrategia segura es expand-contract, con un script versionado nuevo que adelante el esquema en vez de deshacer.',
      en: 'flyway_schema_history (or DATABASECHANGELOG) records version and checksum; a V2__add_index.sql edited after the fact fails on checksum mismatch. R__views.sql is reapplied only if the file changed, without a new number. Undo (U__ or Liquibase rollback) is optional and rarely used in production: the safe strategy is expand-contract, with a new versioned script that moves the schema forward instead of rolling it back.',
    },
  },
  {
    id: 'be-sql-20',
    topic: 'SQL y bases de datos',
    prompt: {
      es: '¿Qué criterios importan al elegir entre SQL y NoSQL según los patrones de acceso?',
      en: 'Which criteria matter when choosing SQL versus NoSQL according to access patterns?',
    },
    answer: {
      es: 'SQL encaja cuando hay JOIN, restricciones y transacciones de varias filas; NoSQL encaja cuando el acceso es por clave, el esquema varía o se escalan escrituras por clave de partición.',
      en: 'SQL fits when there are JOINs, constraints and multi-row transactions; NoSQL fits when access is key-based, the schema varies or writes scale by partition key.',
    },
    distractors: [
      {
        es: 'NoSQL es siempre más rápido porque no tiene índices; SQL solo sirve para volúmenes pequeños que caben en una sola instancia.',
        en: 'NoSQL is always faster because it has no indexes; SQL is only for small volumes that fit on a single instance.',
      },
      {
        es: 'Si hace falta ACID hay que usar SQL; los motores NoSQL nunca ofrecen transacciones ni restricciones de unicidad.',
        en: 'If you need ACID you must use SQL; NoSQL engines never offer transactions or uniqueness constraints.',
      },
    ],
    explanation: {
      es: 'El patrón de acceso manda: FOREIGN KEY y JOIN ad hoc piden un relacional; un documento que embebe lo que sería un JOIN, o un GET por partition key, piden un modelo desnormalizado. DynamoDB y MongoDB sí tienen índices secundarios, y hay transacciones multidocumento, pero el particionado sigue limitando esas transacciones. Elegir por moda o por la idea de que NoSQL no tiene índices suele terminar con consultas imposibles o con un SQL al que se le pide un hotspot de escritura.',
      en: 'The access pattern leads: FOREIGN KEY and ad hoc JOIN ask for relational; a document that embeds what would be a JOIN, or a GET by partition key, ask for a denormalized model. DynamoDB and MongoDB do have secondary indexes, and multi-document transactions exist, but partitioning still limits those transactions. Choosing by fashion or by claiming that NoSQL has no indexes usually ends with impossible queries or with SQL asked to absorb a write hotspot.',
    },
  },
];
