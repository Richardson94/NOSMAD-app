import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_ARCHITECTURE_GIT_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-arch-01',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Dónde vive, en arquitectura hexagonal, la interfaz que el caso de uso usa para guardar datos?',
      en: 'In hexagonal architecture, where does the interface the use case uses to save data live?',
    },
    answer: {
      es: 'Dentro, junto al caso de uso. El adaptador de base de datos la implementa desde fuera.',
      en: 'Inside, next to the use case. The database adapter implements it from the outside.',
    },
    distractors: [
      {
        es: 'En infraestructura, junto a la implementación, para que el dominio la importe.',
        en: 'In infrastructure, next to the implementation, so the domain imports it.',
      },
      {
        es: 'En un módulo compartido del que dependen por igual dominio e infraestructura.',
        en: 'In a shared module that domain and infrastructure depend on equally.',
      },
    ],
    explanation: {
      es: 'Si el dominio importa infraestructura, aunque sea una interfaz, el acoplamiento que el puerto debía quitar sigue ahí.',
      en: 'If the domain imports infrastructure, even an interface, the coupling the port was meant to remove is still there.',
    },
  },
  {
    id: 'th-arch-02',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué problema resuelve CQRS?',
      en: 'What problem does CQRS solve?',
    },
    answer: {
      es: 'Separa el modelo de escritura del de lectura para poder optimizar cada uno por su lado.',
      en: 'It separates the write model from the read model so each one can be optimised on its own.',
    },
    distractors: [
      {
        es: 'Garantiza consistencia entre servicios usando un log de eventos como fuente de verdad.',
        en: 'It guarantees consistency between services by using an event log as the source of truth.',
      },
      {
        es: 'Escala la base poniendo escrituras en el primario y lecturas en las réplicas.',
        en: 'It scales the database by putting writes on the primary and reads on the replicas.',
      },
    ],
    explanation: {
      es: 'Las réplicas de lectura pueden existir sin CQRS. Guardar el estado como eventos es event sourcing, un patrón distinto que a menudo se combina.',
      en: 'Read replicas can exist without CQRS. Storing state as events is event sourcing, a different pattern that is often combined with it.',
    },
  },
  {
    id: 'th-arch-03',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué criterio define mejor el límite de un microservicio?',
      en: 'Which criterion best defines a microservice boundary?',
    },
    answer: {
      es: 'Una capacidad de negocio con sus propios datos, que se pueda desplegar sola.',
      en: 'A business capability with its own data, which can be deployed on its own.',
    },
    distractors: [
      {
        es: 'Una capa técnica, para que cada servicio tenga una responsabilidad tecnológica clara.',
        en: 'A technical layer, so each service has a clear technological responsibility.',
      },
      {
        es: 'Un tamaño de código pequeño, para que un equipo pueda reescribirlo.',
        en: 'A small code size, so a team can rewrite it.',
      },
    ],
    explanation: {
      es: 'Si dos servicios comparten tablas, dejan de ser independientes. Partir por capas obliga a desplegarlos juntos en cada cambio de negocio.',
      en: 'If two services share tables, they stop being independent. Splitting by layers forces you to deploy them together on every business change.',
    },
  },
  {
    id: 'th-arch-04',
    topic: 'Arquitectura',
    prompt: {
      es: '¿Qué dice CAP en palabras llanas cuando la red se parte?',
      en: 'What does CAP say in plain words when the network splits?',
    },
    answer: {
      es: 'O respondes con datos que pueden estar viejos, o rechazas la petición para no contradecir lo que otros nodos tienen.',
      en: 'Either you answer with data that may be stale, or you reject the request so you do not contradict what other nodes have.',
    },
    distractors: [
      {
        es: 'Al diseñar eliges dos de las tres propiedades, porque las tres juntas son imposibles siempre.',
        en: 'When you design you pick two of the three properties, because all three together are always impossible.',
      },
      {
        es: 'Eliges entre consistencia y latencia, porque replicar nodos ya da tolerancia a particiones.',
        en: 'You choose between consistency and latency, because replicating nodes already gives partition tolerance.',
      },
    ],
    explanation: {
      es: 'La partición no se elige, ocurre. Solo mientras dura hay que sacrificar responder o estar de acuerdo. Renunciar a tolerar la red no es una opción real.',
      en: 'You do not choose the partition, it happens. Only while it lasts must you give up answering or agreeing. Giving up network tolerance is not a real option.',
    },
  },
  {
    id: 'th-arch-05',
    topic: 'Git',
    prompt: {
      es: '¿Cuál es la diferencia entre git merge y git rebase?',
      en: 'What is the difference between git merge and git rebase?',
    },
    answer: {
      es: 'Merge crea un commit que une las dos historias y las conserva. Rebase vuelve a aplicar tus commits encima de la punta de la otra rama.',
      en: 'Merge creates a commit that joins the two histories and keeps them. Rebase reapplies your commits on top of the tip of the other branch.',
    },
    distractors: [
      {
        es: 'Merge conserva los commits y rebase los aplasta en uno solo.',
        en: 'Merge keeps the commits and rebase squashes them into a single one.',
      },
      {
        es: 'Merge resuelve conflictos una vez y rebase no puede usarse si hay conflictos.',
        en: 'Merge resolves conflicts once and rebase cannot be used if there are conflicts.',
      },
    ],
    explanation: {
      es: 'Rebase reescribe hashes. En una rama ya compartida eso obliga a un push forzado. Aplastar commits es squash, otra opción.',
      en: 'Rebase rewrites hashes. On a branch already shared that forces a force push. Squashing commits is squash, a different option.',
    },
  },
  {
    id: 'th-arch-06',
    topic: 'Git',
    prompt: {
      es: '¿Qué haces primero si subiste un commit con una credencial a una rama compartida?',
      en: 'You pushed a commit with a credential to a shared branch. What do you do first?',
    },
    answer: {
      es: 'Invalidar esa credencial ya. Hay que darla por comprometida y después limpiar el historial.',
      en: 'Invalidate that credential now. Treat it as compromised and clean the history afterwards.',
    },
    distractors: [
      {
        es: 'Hacer revert del commit y añadir el archivo al gitignore.',
        en: 'Revert the commit and add the file to gitignore.',
      },
      {
        es: 'Reescribir el historial y forzar el push, y con eso basta.',
        en: 'Rewrite the history and force push, and that is enough.',
      },
    ],
    explanation: {
      es: 'Revert deja el secreto en el historial. Limpiar los commits no protege si la clave sigue activa, porque alguien pudo clonarla.',
      en: 'Revert leaves the secret in history. Cleaning the commits does not protect you if the key is still active, because someone may have cloned it.',
    },
  },
  {
    id: 'th-arch-07',
    topic: 'CI/CD',
    prompt: {
      es: '¿Qué diferencia hay entre entrega continua y despliegue continuo?',
      en: 'What is the difference between continuous delivery and continuous deployment?',
    },
    answer: {
      es: 'En la entrega continua cada cambio queda listo para producción y una persona pulsa el último paso. En el despliegue continuo ese paso es automático.',
      en: 'In continuous delivery every change is ready for production and a person presses the last step. In continuous deployment that step is automatic.',
    },
    distractors: [
      {
        es: 'La entrega automatiza build y pruebas, y el despliegue añade el empaquetado.',
        en: 'Delivery automates build and tests, and deployment adds packaging.',
      },
      {
        es: 'La entrega va a entornos de prueba y el despliegue solo a producción.',
        en: 'Delivery goes to test environments and deployment only to production.',
      },
    ],
    explanation: {
      es: 'Las dos automatizan el pipeline de antes. La diferencia es quién decide publicar en producción.',
      en: 'Both automate the pipeline before that. The difference is who decides to publish to production.',
    },
  },
];
