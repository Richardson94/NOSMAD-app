import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_ARCHITECTURE_GIT_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-arch-01',
    topic: 'Arquitectura hexagonal',
    prompt: {
      es: 'En una arquitectura hexagonal, ¿dónde debe vivir la interfaz que el caso de uso necesita para persistir datos?',
      en: 'In a hexagonal architecture, where should the interface a use case needs to persist data live?',
    },
    answer: {
      es: 'En la capa de dominio o aplicación, como puerto que el adaptador de infraestructura implementa.',
      en: 'In the domain or application layer, as a port implemented by the infrastructure adapter.',
    },
    distractors: [
      {
        es: 'En la capa de infraestructura junto a su implementación, para que el dominio la importe cuando la necesite.',
        en: 'In the infrastructure layer next to its implementation, so the domain imports it when needed.',
      },
      {
        es: 'En un módulo compartido de contratos del que dependan por igual el dominio y la infraestructura.',
        en: 'In a shared contracts module that both domain and infrastructure depend on equally.',
      },
    ],
    explanation: {
      es: 'La regla de dependencia apunta hacia dentro: el dominio no puede importar infraestructura, ni siquiera sus interfaces, porque eso reintroduce el acoplamiento que el puerto pretende eliminar. Un módulo compartido neutral es una alternativa aceptable en algunos diseños, pero el planteamiento canónico es que el puerto pertenece al lado que lo consume.',
      en: 'The dependency rule points inward: the domain cannot import infrastructure, not even its interfaces, because that reintroduces the very coupling the port removes. A neutral shared module is an acceptable alternative in some designs, but the canonical approach is that the port belongs to the side that consumes it.',
    },
  },
  {
    id: 'th-arch-02',
    topic: 'CQRS',
    prompt: {
      es: '¿Qué problema resuelve CQRS?',
      en: 'What problem does CQRS solve?',
    },
    answer: {
      es: 'Separar el modelo de escritura del de lectura para optimizar cada uno de forma independiente.',
      en: 'Separate the write model from the read model so each one can be optimised independently.',
    },
    distractors: [
      {
        es: 'Garantizar consistencia eventual entre servicios mediante un registro de eventos como fuente de verdad.',
        en: 'Guarantee eventual consistency between services using an event log as the source of truth.',
      },
      {
        es: 'Escalar la base de datos dividiendo la escritura en el nodo primario y la lectura en las réplicas.',
        en: 'Scale the database by splitting writes on the primary node and reads on the replicas.',
      },
    ],
    explanation: {
      es: 'CQRS es un patrón de modelado: comandos que cambian estado y consultas que proyectan vistas, cada uno con su propio modelo. Las réplicas de lectura son una técnica de infraestructura que puede existir sin CQRS, y el registro de eventos como fuente de verdad es Event Sourcing, que suele acompañar a CQRS pero es un patrón distinto.',
      en: 'CQRS is a modelling pattern: commands that change state and queries that project views, each with its own model. Read replicas are an infrastructure technique that can exist without CQRS, and using an event log as the source of truth is Event Sourcing, which often accompanies CQRS but is a different pattern.',
    },
  },
  {
    id: 'th-arch-03',
    topic: 'Microservicios',
    prompt: {
      es: '¿Qué criterio define mejor el límite de un microservicio?',
      en: 'Which criterion best defines a microservice boundary?',
    },
    answer: {
      es: 'Una capacidad de negocio cohesiva con sus datos propios, que puede desplegarse de forma independiente.',
      en: 'A cohesive business capability owning its data, which can be deployed independently.',
    },
    distractors: [
      {
        es: 'Una capa técnica del sistema, de modo que cada servicio concentre una responsabilidad tecnológica clara.',
        en: 'A technical layer of the system, so each service concentrates a clear technological responsibility.',
      },
      {
        es: 'Un tamaño de código acotado, de forma que un equipo pequeño pueda reescribir el servicio completo.',
        en: 'A bounded code size, so a small team can rewrite the whole service.',
      },
    ],
    explanation: {
      es: 'El corte se hace por contexto delimitado del negocio y propiedad de datos; si dos servicios comparten tablas, dejan de ser independientes. Partir por capas técnicas produce servicios que deben desplegarse juntos en cada cambio funcional, y el número de líneas es una consecuencia, no un criterio de diseño.',
      en: 'The split follows business bounded contexts and data ownership; if two services share tables, they stop being independent. Splitting by technical layers produces services that must be deployed together on every functional change, and line count is a consequence rather than a design criterion.',
    },
  },
  {
    id: 'th-arch-04',
    topic: 'Sistemas distribuidos',
    prompt: {
      es: 'Según el teorema CAP, ¿qué decisión enfrenta un sistema distribuido cuando ocurre una partición de red?',
      en: 'According to the CAP theorem, which decision does a distributed system face when a network partition occurs?',
    },
    answer: {
      es: 'Elegir entre responder con datos posiblemente desactualizados o rechazar la petición para no violar la consistencia.',
      en: 'Choose between answering with possibly stale data or rejecting the request to avoid violating consistency.',
    },
    distractors: [
      {
        es: 'Elegir dos de las tres propiedades al diseñar el sistema, porque nunca se pueden tener las tres a la vez.',
        en: 'Choose two of the three properties when designing the system, because you can never have all three.',
      },
      {
        es: 'Elegir entre consistencia y latencia, ya que la tolerancia a particiones se garantiza replicando los nodos.',
        en: 'Choose between consistency and latency, since partition tolerance is guaranteed by replicating nodes.',
      },
    ],
    explanation: {
      es: 'La lectura precisa del teorema es condicional: la partición no se elige, se sufre, y solo durante la partición hay que sacrificar consistencia o disponibilidad. El eslogan "elige dos de tres" es la simplificación popular que induce a creer que se puede renunciar a P. La disyuntiva consistencia-latencia en ausencia de particiones es el aporte de PACELC.',
      en: 'The precise reading of the theorem is conditional: you do not choose a partition, you suffer it, and only during the partition must you sacrifice consistency or availability. The "pick two of three" slogan is the popular simplification that suggests you can give up P. The consistency-versus-latency trade-off without partitions is what PACELC adds.',
    },
  },
  {
    id: 'th-arch-05',
    topic: 'Git',
    prompt: {
      es: '¿Cuál es la diferencia entre git merge y git rebase al integrar una rama de feature?',
      en: 'What is the difference between git merge and git rebase when integrating a feature branch?',
    },
    answer: {
      es: 'Merge crea un commit de unión y preserva el historial; rebase reescribe los commits sobre la punta de la base.',
      en: 'Merge creates a merge commit and preserves history; rebase rewrites the commits onto the tip of the base.',
    },
    distractors: [
      {
        es: 'Merge conserva los commits originales y rebase los fusiona en uno solo sobre la rama destino.',
        en: 'Merge keeps the original commits while rebase squashes them into a single one on the target branch.',
      },
      {
        es: 'Merge resuelve conflictos una sola vez y rebase no puede aplicarse si existen conflictos pendientes.',
        en: 'Merge resolves conflicts only once while rebase cannot be applied if there are pending conflicts.',
      },
    ],
    explanation: {
      es: 'Rebase reaplica cada commit generando nuevos hashes, lo que produce un historial lineal pero obliga a forzar el push si la rama era compartida; aplastar commits es squash, una opción aparte. En rebase los conflictos pueden aparecer commit por commit, así que sí se resuelven, solo que potencialmente varias veces.',
      en: 'Rebase reapplies each commit producing new hashes, which yields a linear history but forces a push --force if the branch was shared; collapsing commits is squash, a separate option. During a rebase conflicts can appear commit by commit, so they are resolved, just potentially several times.',
    },
  },
  {
    id: 'th-arch-06',
    topic: 'Git',
    prompt: {
      es: 'Subiste un commit a la rama compartida con una credencial en el código. ¿Cuál es la acción correcta?',
      en: 'You pushed a commit to the shared branch containing a credential in the code. What is the correct action?',
    },
    answer: {
      es: 'Rotar la credencial de inmediato y luego limpiar el historial, porque ya debe considerarse comprometida.',
      en: 'Rotate the credential immediately and then clean the history, because it must already be considered compromised.',
    },
    distractors: [
      {
        es: 'Hacer git revert del commit y añadir el archivo al .gitignore para que no vuelva a subirse.',
        en: 'Run git revert on the commit and add the file to .gitignore so it is not pushed again.',
      },
      {
        es: 'Reescribir el historial con filter-repo y forzar el push, avisando al equipo para que vuelva a clonar.',
        en: 'Rewrite history with filter-repo and force-push, notifying the team so they re-clone.',
      },
    ],
    explanation: {
      es: 'La prioridad es invalidar el secreto: cualquiera pudo clonar o ver el commit, y los objetos pueden seguir accesibles en reflogs, forks y cachés del servidor. Revert deja el valor en el historial, y limpiarlo con filter-repo es un paso complementario que por sí solo no protege nada si la credencial sigue activa.',
      en: 'The priority is invalidating the secret: anyone could have cloned or seen the commit, and objects may remain reachable through reflogs, forks and server caches. Revert leaves the value in history, and cleaning it with filter-repo is a complementary step that on its own protects nothing while the credential stays active.',
    },
  },
  {
    id: 'th-arch-07',
    topic: 'CI/CD',
    prompt: {
      es: '¿Qué distingue a la entrega continua (continuous delivery) del despliegue continuo (continuous deployment)?',
      en: 'What distinguishes continuous delivery from continuous deployment?',
    },
    answer: {
      es: 'En la entrega continua cada cambio queda listo para producción pero el paso final es manual; en el despliegue continuo es automático.',
      en: 'In continuous delivery every change is production-ready but the final step is manual; in continuous deployment it is automatic.',
    },
    distractors: [
      {
        es: 'La entrega continua automatiza la construcción y las pruebas, mientras el despliegue continuo añade el empaquetado.',
        en: 'Continuous delivery automates build and tests, while continuous deployment adds packaging.',
      },
      {
        es: 'La entrega continua despliega en entornos de prueba y el despliegue continuo solo opera sobre producción.',
        en: 'Continuous delivery deploys to test environments and continuous deployment only operates on production.',
      },
    ],
    explanation: {
      es: 'La diferencia está en quién aprieta el botón final hacia producción: ambas automatizan todo el pipeline previo, incluido empaquetado y despliegue a entornos intermedios. La entrega continua mantiene una decisión de negocio manual; el despliegue continuo publica cada commit que pase el pipeline.',
      en: 'The difference is who presses the final button to production: both automate the whole upstream pipeline, packaging and intermediate environments included. Continuous delivery keeps a manual business decision; continuous deployment releases every commit that passes the pipeline.',
    },
  },
];
