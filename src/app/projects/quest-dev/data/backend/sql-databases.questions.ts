import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_SQL_DATABASES_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-sql-01',
    topic: 'Índices',
    prompt: {
      es: '¿Qué implica un índice compuesto en el orden de las columnas?',
      en: 'What does a composite index imply about column order?',
    },
    answer: {
      es: 'Sirve si filtras por el prefijo, de izquierda a derecha. Un índice de a, b y c ayuda a buscar por a, o por a y b. Buscar solo por b no entra por ese índice.',
      en: 'It helps if you filter by the prefix, from left to right. An index on a, b and c helps a search by a, or by a and b. A search by b alone does not enter through that index.',
    },
    distractors: [
      {
        es: 'El índice guarda todas las combinaciones, así que cualquier columna del where lo usa.',
        en: 'The index stores every combination, so any column in the where clause uses it.',
      },
      {
        es: 'Si falta la primera columna, PostgreSQL y MySQL saltan igual y usan el índice.',
        en: 'If the first column is missing, PostgreSQL and MySQL skip ahead and still use the index.',
      },
    ],
    explanation: {
      es: 'El orden en el que creas el índice es el orden de búsqueda. Por eso un índice que nadie filtra por la primera columna no se elige.',
      en: 'The order you create the index in is the search order. That is why an index nobody filters by the first column is not chosen.',
    },
  },
  {
    id: 'be-sql-02',
    topic: 'Índices',
    prompt: {
      es: '¿Por qué el planificador a veces ignora un índice?',
      en: 'Why does the planner sometimes ignore an index?',
    },
    answer: {
      es: 'Porque el filtro deja pasar casi todas las filas y leer la tabla entera sale más barato que ir al índice y volver a cada fila.',
      en: 'Because the filter lets almost every row through and reading the whole table is cheaper than using the index and going back to each row.',
    },
    distractors: [
      {
        es: 'Solo usa índices únicos. Si hay duplicados, el índice se ignora siempre.',
        en: 'It only uses unique indexes. If there are duplicates, the index is always ignored.',
      },
      {
        es: 'Ignora el índice si la columna admite null, porque un índice no guarda nulos.',
        en: 'It ignores the index if the column allows null, because an index does not store nulls.',
      },
    ],
    explanation: {
      es: 'Las estadísticas dicen cuántos valores distintos hay. Si están viejas, un índice bueno puede quedar fuera. Actualizar estadísticas es el primer paso.',
      en: 'Statistics say how many distinct values there are. If they are stale, a good index can be left out. Refreshing statistics is the first step.',
    },
  },
  {
    id: 'be-sql-03',
    topic: 'Índices',
    prompt: {
      es: '¿Qué es un índice de cobertura?',
      en: 'What is a covering index?',
    },
    answer: {
      es: 'Uno que ya contiene todas las columnas que la consulta necesita, así que el motor puede responder sin ir a la tabla.',
      en: 'One that already contains every column the query needs, so the engine can answer without going to the table.',
    },
    distractors: [
      {
        es: 'Uno que sirve a la vez para igualdad y para rangos. El nombre solo describe ese plan mixto.',
        en: 'One that serves both equality and ranges. The name only describes that mixed plan.',
      },
      {
        es: 'Solo existe en la clave primaria, porque es el único índice que guarda la fila.',
        en: 'It exists only on the primary key, because that is the only index that stores the row.',
      },
    ],
    explanation: {
      es: 'Si pides una columna que no está en el índice, hay que ir a la tabla. Meter columnas de más engorda el índice y encarece las escrituras.',
      en: 'If you ask for a column that is not in the index, the table must be visited. Putting extra columns in makes the index fatter and writes more expensive.',
    },
  },
  {
    id: 'be-sql-04',
    topic: 'Planes',
    prompt: {
      es: '¿Qué te dice un plan con un recorrido de tabla, un recorrido por índice y unas filas estimadas?',
      en: 'What does a plan with a table scan, an index scan and estimated rows tell you?',
    },
    answer: {
      es: 'El recorrido de tabla lee todo. El de índice busca y luego trae las filas. Las filas estimadas deciden el plan: si la estimación está mal, el acceso elegido también.',
      en: 'The table scan reads everything. The index scan seeks and then fetches the rows. The estimated rows drive the plan: if the estimate is wrong, the chosen access is wrong too.',
    },
    distractors: [
      {
        es: 'Un recorrido de tabla significa que falta un índice. Uno por índice significa que la consulta ya es óptima.',
        en: 'A table scan means an index is missing. An index scan means the query is already optimal.',
      },
      {
        es: 'La columna de filas es el recuento real. Si no coincide con el cliente, el plan está roto.',
        en: 'The rows column is the real count. If it does not match the client, the plan is broken.',
      },
    ],
    explanation: {
      es: 'El explain normal estima. El que ejecuta de verdad muestra lo que pasó. Si estimación y realidad se separan, revisa estadísticas o el predicado.',
      en: 'A plain explain estimates. The one that really runs shows what happened. If estimate and reality diverge, review statistics or the predicate.',
    },
  },
  {
    id: 'be-sql-05',
    topic: 'Índices',
    prompt: {
      es: '¿Por qué una función sobre la columna indexada hace que no se use el índice?',
      en: 'Why does a function on the indexed column stop the index from being used?',
    },
    answer: {
      es: 'Porque el índice está ordenado por el valor de la columna, no por el resultado de la función. YEAR de la fecha no puede buscar en el índice de la fecha. Escribe un rango sobre la columna.',
      en: 'Because the index is ordered by the column value, not by the function result. The year of the date cannot seek into the date index. Write a range on the column.',
    },
    distractors: [
      {
        es: 'El planificador convierte la función en un rango solo, así que el índice se usa igual.',
        en: 'The planner turns the function into a range on its own, so the index is still used.',
      },
      {
        es: 'Las funciones puras conservan el índice en cualquier motor.',
        en: 'Pure functions keep the index on every engine.',
      },
    ],
    explanation: {
      es: 'Si de verdad filtras por la expresión, crea un índice sobre esa expresión. No esperes que el motor deshaga la función.',
      en: 'If you really filter by the expression, create an index on that expression. Do not expect the engine to unwrap the function.',
    },
  },
  {
    id: 'be-sql-06',
    topic: 'Índices',
    prompt: {
      es: '¿Cómo afecta un LIKE con el comodín al principio o al final al uso del índice?',
      en: 'How does a LIKE with the wildcard at the start or at the end affect index use?',
    },
    answer: {
      es: 'foo% puede usar el índice, porque es un rango por el prefijo. %foo no tiene por dónde entrar y suele leer la tabla.',
      en: 'foo% can use the index, because it is a range on the prefix. %foo has no place to enter and usually reads the table.',
    },
    distractors: [
      {
        es: 'Los dos usan el índice, porque LIKE siempre se reescribe como un between.',
        en: 'Both use the index, because LIKE is always rewritten as a between.',
      },
      {
        es: '%foo usa mejor el índice porque filtra más filas.',
        en: '%foo uses the index better because it filters more rows.',
      },
    ],
    explanation: {
      es: 'Para buscar un texto en cualquier posición hace falta otro tipo de índice, no el ordenado normal de la columna.',
      en: 'To search for text in any position you need another kind of index, not the normal ordered index of the column.',
    },
  },
  {
    id: 'be-sql-07',
    topic: 'Modelo',
    prompt: {
      es: '¿Para qué normalizas y cuándo desnormalizas a propósito?',
      en: 'What do you normalise for and when do you denormalise on purpose?',
    },
    answer: {
      es: 'Normalizar evita datos repetidos y que un cambio haya que hacerlo en varios sitios. Desnormalizas cuando la lectura necesita menos joins y aceptas mantener la copia a mano.',
      en: 'Normalising avoids repeated data and having to change the same fact in several places. You denormalise when the read needs fewer joins and you accept maintaining the copy yourself.',
    },
    distractors: [
      {
        es: 'Normalizar achica los índices. Desnormalizar es añadir un índice de cobertura.',
        en: 'Normalising shrinks indexes. Denormalising is adding a covering index.',
      },
      {
        es: 'Solo se desnormaliza al ir a NoSQL. En SQL hay que quedarse en la forma normal o los índices no se usan.',
        en: 'You denormalise only when moving to NoSQL. In SQL you must stay in normal form or indexes are not used.',
      },
    ],
    explanation: {
      es: 'Una columna copiada o una vista materializada es una decisión de lectura, no un fallo. El índice de cobertura no cambia el modelo.',
      en: 'A copied column or a materialised view is a read decision, not a mistake. A covering index does not change the model.',
    },
  },
  {
    id: 'be-sql-08',
    topic: 'Modelo',
    prompt: {
      es: '¿Qué diferencia hay entre clave primaria, UNIQUE y un índice?',
      en: 'What is the difference between a primary key, UNIQUE and an index?',
    },
    answer: {
      es: 'La primaria identifica la fila, no admite null y crea un índice único. UNIQUE impide duplicados sin ser la identidad. Un índice normal solo acelera la búsqueda y puede repetir valores.',
      en: 'The primary key identifies the row, does not allow null and creates a unique index. UNIQUE blocks duplicates without being the identity. A plain index only speeds the lookup and can repeat values.',
    },
    distractors: [
      {
        es: 'UNIQUE y la primaria son iguales salvo el nombre. Un índice es un UNIQUE sin documentar.',
        en: 'UNIQUE and the primary key are the same except for the name. An index is an undocumented UNIQUE.',
      },
      {
        es: 'La primaria es solo un nombre. Hace falta un UNIQUE aparte para impedir duplicados.',
        en: 'The primary key is only a name. A separate UNIQUE is required to block duplicates.',
      },
    ],
    explanation: {
      es: 'Crear un índice no hace que el insert de un duplicado falle. La restricción sí. En InnoDB la primaria ordena la fila en la tabla.',
      en: 'Creating an index does not make a duplicate insert fail. The constraint does. On InnoDB the primary key orders the row in the table.',
    },
  },
  {
    id: 'be-sql-09',
    topic: 'Integridad',
    prompt: {
      es: '¿Qué hacen una clave foránea y el borrado en cascada?',
      en: 'What do a foreign key and a cascade delete do?',
    },
    answer: {
      es: 'La foránea impide un hijo que apunte a un padre que no existe. ON DELETE CASCADE borra los hijos cuando borras el padre, aunque la aplicación no emita esos delete.',
      en: 'The foreign key blocks a child that points at a parent that does not exist. ON DELETE CASCADE deletes the children when you delete the parent, even if the application does not issue those deletes.',
    },
    distractors: [
      {
        es: 'La cascada es un convenio de la aplicación. La base solo documenta la relación.',
        en: 'The cascade is an application convention. The database only documents the relationship.',
      },
      {
        es: 'ON DELETE CASCADE pone null en la foránea y no borra hijos.',
        en: 'ON DELETE CASCADE sets the foreign key to null and does not delete children.',
      },
    ],
    explanation: {
      es: 'Poner null es otra acción. Sin la restricción, JPA no impide insertar huérfanos. Indexa la foránea para que la cascada no recorra la tabla entera.',
      en: 'Setting null is a different action. Without the constraint, JPA does not stop orphan inserts. Index the foreign key so the cascade does not scan the whole table.',
    },
  },
  {
    id: 'be-sql-10',
    topic: 'NULL',
    prompt: {
      es: '¿Cómo se compara NULL y cuál es la trampa de NOT IN?',
      en: 'How does NULL compare and what is the NOT IN trap?',
    },
    answer: {
      es: 'Comparar con NULL no da verdadero ni falso, así que col = NULL no devuelve filas. Si el NOT IN trae un NULL, el resultado puede quedar vacío. Usa IS NULL y, para negar, NOT EXISTS.',
      en: 'Comparing with NULL is neither true nor false, so col = NULL returns no rows. If the NOT IN brings a NULL, the result can come back empty. Use IS NULL and, to negate, NOT EXISTS.',
    },
    distractors: [
      {
        es: 'NULL es igual a NULL, así que NOT IN ignora los nulos y filtra el resto.',
        en: 'NULL equals NULL, so NOT IN ignores nulls and filters the rest.',
      },
      {
        es: 'NOT IN y NOT EXISTS son siempre equivalentes, también si hay NULL.',
        en: 'NOT IN and NOT EXISTS are always equivalent, even when there is a NULL.',
      },
    ],
    explanation: {
      es: 'La igualdad con NULL no encuentra fila, por eso EXISTS no cae en la misma trampa. No filtres con el operador igual.',
      en: 'Equality with NULL does not find a row, which is why EXISTS does not fall into the same trap. Do not filter with the equals operator.',
    },
  },
  {
    id: 'be-sql-11',
    topic: 'Agregados',
    prompt: {
      es: '¿Qué diferencia hay entre WHERE y HAVING?',
      en: 'What is the difference between WHERE and HAVING?',
    },
    answer: {
      es: 'WHERE filtra filas antes de agrupar. HAVING filtra grupos ya hechos, y ahí van condiciones como un conteo mayor que uno.',
      en: 'WHERE filters rows before grouping. HAVING filters groups already built, and that is where conditions such as a count greater than one belong.',
    },
    distractors: [
      {
        es: 'Son alias cuando hay GROUP BY. Se pueden intercambiar.',
        en: 'They are aliases when there is a GROUP BY. They can be swapped.',
      },
      {
        es: 'Con GROUP BY todo filtro va en HAVING, porque WHERE ya no ve las columnas.',
        en: 'With GROUP BY every filter goes in HAVING, because WHERE no longer sees the columns.',
      },
    ],
    explanation: {
      es: 'Filtrar el estado en WHERE evita agrupar filas que ibas a tirar. Un agregado en el WHERE no es válido.',
      en: 'Filtering status in WHERE avoids grouping rows you were going to drop. An aggregate in the WHERE is not valid.',
    },
  },
  {
    id: 'be-sql-12',
    topic: 'Consultas',
    prompt: {
      es: '¿Para qué sirven ROW_NUMBER y RANK?',
      en: 'What are ROW_NUMBER and RANK for?',
    },
    answer: {
      es: 'Numeran filas sin colapsarlas, a diferencia de GROUP BY. ROW_NUMBER da un número distinto por fila. RANK comparte el puesto si hay empate y se salta el siguiente.',
      en: 'They number rows without collapsing them, unlike GROUP BY. ROW_NUMBER gives a different number per row. RANK shares the place on a tie and skips the next number.',
    },
    distractors: [
      {
        es: 'Dejan una fila por grupo, igual que un distinct, y sustituyen al group by.',
        en: 'They leave one row per group, the same as a distinct, and they replace group by.',
      },
      {
        es: 'RANK ordena todo el resultado y ROW_NUMBER no se puede partir por cliente.',
        en: 'RANK orders the whole result and ROW_NUMBER cannot be split per customer.',
      },
    ],
    explanation: {
      es: 'El uso típico es el último pedido de cada cliente: numeras por cliente y te quedas con el número uno.',
      en: 'The typical use is the latest order per customer: you number by customer and keep number one.',
    },
  },
  {
    id: 'be-sql-13',
    topic: 'Consultas',
    prompt: {
      es: '¿Qué es una CTE y para qué sirve la recursiva?',
      en: 'What is a CTE and what is the recursive one for?',
    },
    answer: {
      es: 'WITH pone nombre a una subconsulta para usarla después. La recursiva recorre un árbol: parte de la raíz y va bajando mientras salgan hijos.',
      en: 'WITH names a subquery so you can use it later. The recursive one walks a tree: it starts at the root and goes down while children keep appearing.',
    },
    distractors: [
      {
        es: 'Una CTE siempre se materializa en disco y por eso es más rápida que una subconsulta.',
        en: 'A CTE is always materialised on disk and that is why it is faster than a subquery.',
      },
      {
        es: 'La recursiva sustituye a la clave foránea y guarda el cierre del árbol en cada commit.',
        en: 'The recursive one replaces the foreign key and stores the tree closure on every commit.',
      },
    ],
    explanation: {
      es: 'No asumas que es más rápida: el motor puede integrarla en el plan. La foránea sigue siendo la que impide un padre inexistente.',
      en: 'Do not assume it is faster: the engine may fold it into the plan. The foreign key is still what blocks a missing parent.',
    },
  },
  {
    id: 'be-sql-14',
    topic: 'Consultas',
    prompt: {
      es: '¿Cuándo eliges EXISTS, IN o JOIN?',
      en: 'When do you choose EXISTS, IN or JOIN?',
    },
    answer: {
      es: 'EXISTS para saber si hay al menos una coincidencia, y se lleva bien con NULL. IN compara contra un conjunto y NOT IN se rompe si hay un NULL. JOIN puede duplicar filas si hay varias coincidencias.',
      en: 'EXISTS to know whether there is at least one match, and it gets along with NULL. IN compares against a set and NOT IN breaks if there is a NULL. JOIN can duplicate rows if there are several matches.',
    },
    distractors: [
      {
        es: 'IN es siempre más rápido. JOIN y EXISTS devuelven el mismo número de filas.',
        en: 'IN is always faster. JOIN and EXISTS return the same number of rows.',
      },
      {
        es: 'Solo el JOIN puede usar un índice. EXISTS e IN leen la subconsulta entera por cada fila.',
        en: 'Only JOIN can use an index. EXISTS and IN read the whole subquery for every row.',
      },
    ],
    explanation: {
      es: 'Si te unes a pedidos y el cliente tiene varios, salen filas de más y a menudo hace falta distinct. EXISTS no duplica al cliente.',
      en: 'If you join orders and the customer has several, you get extra rows and you often need distinct. EXISTS does not duplicate the customer.',
    },
  },
  {
    id: 'be-sql-15',
    topic: 'Consultas',
    prompt: {
      es: '¿Qué diferencia hay entre UNION y UNION ALL?',
      en: 'What is the difference between UNION and UNION ALL?',
    },
    answer: {
      es: 'UNION junta y luego quita duplicados, y eso cuesta. UNION ALL conserva los duplicados y no hace ese trabajo extra.',
      en: 'UNION joins and then removes duplicates, and that costs. UNION ALL keeps duplicates and skips that extra work.',
    },
    distractors: [
      {
        es: 'UNION ALL es más lento porque guarda los duplicados en una tabla temporal.',
        en: 'UNION ALL is slower because it stores the duplicates in a temporary table.',
      },
      {
        es: 'La única diferencia es un distinct en cada select. El plan es el mismo.',
        en: 'The only difference is a distinct on each select. The plan is the same.',
      },
    ],
    explanation: {
      es: 'Si sabes que no hay solape, usa ALL. El distinct se aplica al resultado junto, no a cada lado por separado.',
      en: 'If you know there is no overlap, use ALL. The distinct applies to the combined result, not to each side separately.',
    },
  },
  {
    id: 'be-sql-16',
    topic: 'Transacciones',
    prompt: {
      es: '¿Qué garantiza un COMMIT?',
      en: 'What does a COMMIT guarantee?',
    },
    answer: {
      es: 'Que el cambio confirmado sobrevive a una caída. La base anota el cambio en el registro antes de decir que terminó, y al arrancar puede rehacerlo.',
      en: 'That the committed change survives a crash. The database records the change in the log before it says it is done, and on startup it can replay it.',
    },
    distractors: [
      {
        es: 'Lo garantiza la caché de memoria. El registro solo sirve para copias y no para el commit.',
        en: 'The memory cache guarantees it. The log is only for copies and not for the commit.',
      },
      {
        es: 'El commit vuelca cada tabla a disco. El registro existe para acelerar los select.',
        en: 'Commit flushes every table to disk. The log exists to speed up selects.',
      },
    ],
    explanation: {
      es: 'La caché se pierde si el proceso muere. Por eso el registro va primero. No acelera las lecturas.',
      en: 'The cache is lost if the process dies. That is why the log goes first. It does not speed up reads.',
    },
  },
  {
    id: 'be-sql-17',
    topic: 'Bloqueos',
    prompt: {
      es: '¿Qué causa un deadlock en la base y qué haces después?',
      en: 'What causes a database deadlock and what do you do afterwards?',
    },
    answer: {
      es: 'Dos transacciones bloquean filas en orden inverso y se esperan. El motor aborta a una y la aplicación debe reintentar esa transacción entera.',
      en: 'Two transactions lock rows in opposite order and wait on each other. The engine aborts one and the application must retry that whole transaction.',
    },
    distractors: [
      {
        es: 'Es una espera que superó el timeout. Subir el timeout lo evita y no hace falta reintentar.',
        en: 'It is a wait that exceeded the timeout. Raising the timeout avoids it and a retry is not needed.',
      },
      {
        es: 'La base reintenta sola hasta que los dos commit funcionan. La aplicación ignora el error.',
        en: 'The database retries on its own until both commits work. The application ignores the error.',
      },
    ],
    explanation: {
      es: 'Tomar las filas siempre en el mismo orden reduce el ciclo. El timeout corta una espera simple, no este abrazo.',
      en: 'Taking the rows always in the same order reduces the cycle. The timeout cuts a simple wait, not this embrace.',
    },
  },
  {
    id: 'be-sql-18',
    topic: 'Bloqueos',
    prompt: {
      es: '¿Qué hace SELECT FOR UPDATE?',
      en: 'What does SELECT FOR UPDATE do?',
    },
    answer: {
      es: 'Bloquea las filas leídas hasta el commit, para que otra transacción no las cambie en medio. No bloquea la tabla entera.',
      en: 'It locks the rows you read until commit, so another transaction does not change them in the middle. It does not lock the whole table.',
    },
    distractors: [
      {
        es: 'Bloquea la tabla, así que ningún insert de otra sesión puede entrar.',
        en: 'It locks the table, so no insert from another session can get in.',
      },
      {
        es: 'El bloqueo se suelta al terminar el select, aunque la transacción siga abierta.',
        en: 'The lock is released when the select finishes, even if the transaction stays open.',
      },
    ],
    explanation: {
      es: 'Sin transacción el bloqueo no dura. Para cerrar la tabla existe un lock de tabla, que es otra sentencia y mucho más brusco.',
      en: 'Without a transaction the lock does not last. To close the table there is a table lock, which is a different statement and much harsher.',
    },
  },
  {
    id: 'be-sql-19',
    topic: 'Migraciones',
    prompt: {
      es: '¿Cómo funcionan las migraciones versionadas y las repetibles?',
      en: 'How do versioned migrations and repeatable ones work?',
    },
    answer: {
      es: 'Las versionadas corren una vez, en orden. Las repetibles vuelven a correr si el archivo cambió. Deshacer no es automático: lo habitual es una migración nueva que corrija hacia adelante.',
      en: 'Versioned ones run once, in order. Repeatable ones run again if the file changed. Undo is not automatic: the usual path is a new migration that fixes forward.',
    },
    distractors: [
      {
        es: 'Se pueden editar después porque el checksum es informativo y nunca frena el arranque.',
        en: 'They can be edited afterwards because the checksum is informational and never stops startup.',
      },
      {
        es: 'Las repetibles corren en cada arranque, lleven o no un cambio, y además necesitan un número nuevo.',
        en: 'Repeatable ones run on every startup, whether they changed or not, and they also need a new number.',
      },
    ],
    explanation: {
      es: 'Editar una migración ya aplicada rompe el checksum. En producción se añade un script nuevo, no se reescribe el viejo.',
      en: 'Editing a migration that already ran breaks the checksum. In production you add a new script, you do not rewrite the old one.',
    },
  },
  {
    id: 'be-sql-20',
    topic: 'Modelo',
    prompt: {
      es: '¿Cuándo eliges SQL y cuándo NoSQL según el acceso?',
      en: 'When do you choose SQL and when NoSQL according to access?',
    },
    answer: {
      es: 'SQL cuando hay joins, restricciones y transacciones de varias filas. NoSQL cuando el acceso es por clave, el documento cambia de forma o quieres escalar escrituras por esa clave.',
      en: 'SQL when there are joins, constraints and transactions across several rows. NoSQL when access is by key, the document changes shape or you want to scale writes by that key.',
    },
    distractors: [
      {
        es: 'NoSQL es siempre más rápido porque no tiene índices. SQL solo cabe en una máquina.',
        en: 'NoSQL is always faster because it has no indexes. SQL only fits on one machine.',
      },
      {
        es: 'Si necesitas transacciones tienes que usar SQL. NoSQL no ofrece ninguna.',
        en: 'If you need transactions you must use SQL. NoSQL offers none.',
      },
    ],
    explanation: {
      es: 'Mira el patrón de lectura y escritura, no la moda. Varios motores de documentos tienen índices y transacciones, con límites de partición.',
      en: 'Look at the read and write pattern, not at fashion. Several document engines have indexes and transactions, with partition limits.',
    },
  },
];
