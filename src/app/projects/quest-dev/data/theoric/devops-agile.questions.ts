import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_DEVOPS_AGILE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-devops-01',
    topic: 'DevOps',
    prompt: {
      es: '¿Qué caracteriza de verdad la integración continua?',
      en: 'What really characterises continuous integration?',
    },
    answer: {
      es: 'Que cada persona integra en la rama principal al menos una vez al día, y que cada commit dispara un build con pruebas automáticas.',
      en: 'That each person integrates into the main branch at least once a day, and that each commit triggers a build with automated tests.',
    },
    distractors: [
      {
        es: 'Que un servidor corre el pipeline completo cada noche sobre la rama principal.',
        en: 'That a server runs the full pipeline every night on the main branch.',
      },
      {
        es: 'Que cada rama se mantiene al día con main y se fusiona al acabar la revisión.',
        en: 'That each branch stays up to date with main and is merged when the review finishes.',
      },
    ],
    explanation: {
      es: 'Es una práctica de frecuencia, no una herramienta. Si el trabajo vive días en una rama, el pipeline verde no evita el conflicto grande del final.',
      en: 'It is a practice about frequency, not a tool. If the work lives for days on a branch, a green pipeline does not prevent the big conflict at the end.',
    },
  },
  {
    id: 'th-devops-02',
    topic: 'DevOps',
    prompt: {
      es: '¿En qué orden encadenas las etapas del pipeline para tener feedback rápido?',
      en: 'In which order do you chain pipeline stages to get fast feedback?',
    },
    answer: {
      es: 'Primero build y pruebas unitarias, luego análisis e integración, y al final las pruebas de extremo a extremo y de rendimiento.',
      en: 'Build and unit tests first, then analysis and integration, and at the end the end to end and performance tests.',
    },
    distractors: [
      {
        es: 'Todas las suites en paralelo desde el principio, porque el tiempo total es el de la etapa más lenta.',
        en: 'Every suite in parallel from the start, because the total time is that of the slowest stage.',
      },
      {
        es: 'El análisis estático antes de compilar, para adelantar la seguridad.',
        en: 'Static analysis before compiling, to shift security earlier.',
      },
    ],
    explanation: {
      es: 'Falla pronto y barato. Lanzar pruebas lentas antes de saber si compila gasta agentes. El análisis suele necesitar el build.',
      en: 'Fail early and cheap. Starting slow tests before you know it compiles wastes agents. Analysis usually needs the build.',
    },
  },
  {
    id: 'th-devops-03',
    topic: 'DevOps',
    prompt: {
      es: '¿Por qué se construye el artefacto una sola vez y se promueve entre entornos?',
      en: 'Why is the artifact built only once and promoted across environments?',
    },
    answer: {
      es: 'Porque lo que se probó es exactamente el binario que llega a producción. Entre entornos solo cambia la configuración inyectada.',
      en: 'Because what was tested is exactly the binary that reaches production. Between environments only the injected configuration changes.',
    },
    distractors: [
      {
        es: 'Porque reconstruir en cada entorno alarga el pipeline y sale más caro.',
        en: 'Because rebuilding in every environment lengthens the pipeline and costs more.',
      },
      {
        es: 'Porque el artefacto debe llevar dentro la configuración de cada entorno.',
        en: 'Because the artifact must carry the configuration of each environment inside it.',
      },
    ],
    explanation: {
      es: 'Reconstruir puede cambiar dependencias o el compilador, y las pruebas ya no describen lo desplegado. Meter la config en el paquete impide promoverlo.',
      en: 'Rebuilding can change dependencies or the compiler, and the tests no longer describe what is deployed. Putting config inside the package stops you from promoting it.',
    },
  },
  {
    id: 'th-devops-04',
    topic: 'DevOps',
    prompt: {
      es: '¿Qué implica una infraestructura inmutable al desplegar con contenedores?',
      en: 'What does immutable infrastructure imply when you deploy with containers?',
    },
    answer: {
      es: 'Que no modificas una instancia en marcha. Para cambiar algo construyes una imagen nueva, la despliegas y destruyes la anterior.',
      en: 'That you do not modify a running instance. To change anything you build a new image, deploy it and destroy the previous one.',
    },
    distractors: [
      {
        es: 'Que el sistema de archivos del contenedor es de solo lectura y el proceso no puede escribir.',
        en: 'That the container file system is read only and the process cannot write.',
      },
      {
        es: 'Que una herramienta aplica el estado deseado en cada ejecución y corrige las diferencias.',
        en: 'That a tool applies the desired state on every run and corrects the differences.',
      },
    ],
    explanation: {
      es: 'Así dos instancias de la misma etiqueta son iguales y volver atrás es redesplegar la etiqueta anterior. Corregir el servidor existente es el modelo mutable.',
      en: 'That way two instances of the same tag are identical and rolling back is redeploying the previous tag. Fixing the existing server is the mutable model.',
    },
  },
  {
    id: 'th-devops-05',
    topic: 'DevOps',
    prompt: {
      es: '¿Dónde vive la configuración de la aplicación según los doce factores?',
      en: 'According to the twelve factors, where does application configuration live?',
    },
    answer: {
      es: 'Lo que cambia entre despliegues vive en variables de entorno, fuera del código y fuera del artefacto.',
      en: 'What changes between deployments lives in environment variables, outside the code and outside the artifact.',
    },
    distractors: [
      {
        es: 'En archivos de propiedades por perfil, dentro del repositorio.',
        en: 'In per profile property files, inside the repository.',
      },
      {
        es: 'En un servidor central del que cada instancia descarga sus valores al arrancar.',
        en: 'In a central server from which each instance downloads its values at startup.',
      },
    ],
    explanation: {
      es: 'La prueba es si podrías publicar el repositorio ahora sin filtrar credenciales. Los perfiles acaban metiendo secretos en el artefacto.',
      en: 'The test is whether you could publish the repository now without leaking credentials. Profiles end up putting secrets inside the artifact.',
    },
  },
  {
    id: 'th-devops-06',
    topic: 'DevOps',
    prompt: {
      es: '¿Qué significa que los procesos de la aplicación sean sin estado y desechables?',
      en: 'What does it mean for application processes to be stateless and disposable?',
    },
    answer: {
      es: 'Que no guardan datos en memoria ni en disco local entre peticiones, y pueden arrancar o parar en cualquier momento sin perder información.',
      en: 'That they keep no data in memory or on local disk between requests, and they can start or stop at any moment without losing information.',
    },
    distractors: [
      {
        es: 'Que no hay sesión de usuario y cada petición lleva un token firmado.',
        en: 'That there is no user session and each request carries a signed token.',
      },
      {
        es: 'Que cada instancia replica su estado en memoria a las demás.',
        en: 'That each instance replicates its in memory state to the others.',
      },
    ],
    explanation: {
      es: 'El estado persistente va a la base o a un almacén compartido. Un token es un caso concreto. Replicar la sesión acopla las instancias.',
      en: 'Persistent state goes to the database or a shared store. A token is one concrete case. Replicating the session couples the instances.',
    },
  },
  {
    id: 'th-devops-07',
    topic: 'DevOps',
    prompt: {
      es: '¿Qué diferencia hay entre un despliegue blue-green, uno canary y uno rolling?',
      en: 'What is the difference between a blue-green, a canary and a rolling deployment?',
    },
    answer: {
      es: 'Blue-green cambia todo el tráfico de golpe entre dos entornos. Canary manda primero un poco de tráfico a la versión nueva. Rolling sustituye instancias por tandas.',
      en: 'Blue-green switches all traffic at once between two environments. Canary sends a little traffic to the new version first. Rolling replaces instances in batches.',
    },
    distractors: [
      {
        es: 'Blue-green sustituye por tandas y canary duplica el entorno y cambia el tráfico al pasar las pruebas de humo.',
        en: 'Blue-green replaces in batches and canary duplicates the environment and switches traffic once smoke tests pass.',
      },
      {
        es: 'Canary publica a un grupo elegido por negocio y blue-green se despliega en la hora de menos tráfico.',
        en: 'Canary releases to a group chosen by the business and blue-green deploys in the quietest hour.',
      },
    ],
    explanation: {
      es: 'Blue-green pide el doble de capacidad y el rollback es inmediato. Rolling casi no pide capacidad extra, pero conviven dos versiones.',
      en: 'Blue-green needs double capacity and rollback is immediate. Rolling needs almost no extra capacity, but two versions run together.',
    },
  },
  {
    id: 'th-devops-08',
    topic: 'DevOps',
    prompt: {
      es: '¿Qué distingue un feature toggle de release, uno operativo y uno de experimento?',
      en: 'What distinguishes a release feature toggle, an operational one and an experiment one?',
    },
    answer: {
      es: 'El de release esconde código incompleto y dura poco. El operativo apaga una función en producción y dura. El de experimento reparte variantes para medirlas.',
      en: 'The release one hides incomplete code and is short lived. The operational one switches a feature off in production and stays. The experiment one splits variants to measure them.',
    },
    distractors: [
      {
        es: 'Todo toggle se quita en cuanto se publica la función.',
        en: 'Every toggle is removed as soon as the feature is released.',
      },
      {
        es: 'El de experimento se resuelve al compilar para no penalizar cada petición.',
        en: 'The experiment one is resolved at compile time so it does not penalise every request.',
      },
    ],
    explanation: {
      es: 'Un interruptor operativo está pensado para quedarse y cambiarse en caliente. Resolverlo al compilar le quita esa utilidad.',
      en: 'An operational switch is meant to stay and to change at runtime. Resolving it at compile time removes that use.',
    },
  },
  {
    id: 'th-devops-09',
    topic: 'DevOps',
    prompt: {
      es: '¿Cómo renombras una columna en uso sin tirar el servicio durante el despliegue?',
      en: 'How do you rename a column in use without taking the service down during the deployment?',
    },
    answer: {
      es: 'Añades la columna nueva, escribes en las dos mientras rellenas los datos, pasas las lecturas y solo en un despliegue posterior borras la vieja.',
      en: 'You add the new column, write to both while you backfill the data, move the reads over and only in a later deployment drop the old one.',
    },
    distractors: [
      {
        es: 'Paras la aplicación un momento y aplicas la migración en una ventana corta.',
        en: 'You stop the application for a moment and apply the migration in a short window.',
      },
      {
        es: 'Renombras la columna en el mismo release, porque la migración corre antes de que arranquen las instancias nuevas.',
        en: 'You rename the column in the same release, because the migration runs before the new instances start.',
      },
    ],
    explanation: {
      es: 'Durante el cambio conviven la versión vieja y la nueva contra la misma base. La vieja sigue consultando la columna que acabas de renombrar.',
      en: 'During the change the old and the new version share the same database. The old one is still querying the column you just renamed.',
    },
  },
  {
    id: 'th-devops-10',
    topic: 'DevOps',
    prompt: {
      es: '¿Cuáles son los tres pilares de la observabilidad y qué aporta cada uno?',
      en: 'What are the three pillars of observability and what does each one give you?',
    },
    answer: {
      es: 'Métricas para agregados numéricos baratos, logs para el detalle de un evento y trazas para seguir una petición por varios servicios.',
      en: 'Metrics for cheap numeric aggregates, logs for the detail of one event and traces to follow one request across several services.',
    },
    distractors: [
      {
        es: 'Monitorización, alertas y cuadros de mando.',
        en: 'Monitoring, alerts and dashboards.',
      },
      {
        es: 'Métricas, logs y health checks.',
        en: 'Metrics, logs and health checks.',
      },
    ],
    explanation: {
      es: 'Las alertas consumen esos pilares, no son uno de ellos. Un health check solo dice si la instancia está viva.',
      en: 'Alerts consume those pillars, they are not one of them. A health check only says whether the instance is alive.',
    },
  },
  {
    id: 'th-devops-11',
    topic: 'DevOps',
    prompt: {
      es: '¿Qué caracteriza un buen log en un servicio de producción?',
      en: 'What characterises a good log in a production service?',
    },
    answer: {
      es: 'Eventos estructurados con campos consultables y un identificador de correlación, niveles usados con criterio y ningún dato sensible en el mensaje.',
      en: 'Structured events with queryable fields and a correlation identifier, levels used with judgement and no sensitive data in the message.',
    },
    distractors: [
      {
        es: 'Registrar todo el flujo en DEBUG y activarlo solo cuando hay un incidente.',
        en: 'Log the whole flow at DEBUG and turn it on only when there is an incident.',
      },
      {
        es: 'Enmascarar los datos sensibles en el agregador, para que la aplicación loguee el objeto entero.',
        en: 'Mask sensitive data in the aggregator, so the application can log the whole object.',
      },
    ],
    explanation: {
      es: 'Cuando el incidente ya pasó, activar DEBUG llega tarde. El secreto no debe llegar al logger: en el agregador ya viajó por la red.',
      en: 'Once the incident is over, turning DEBUG on is too late. The secret must not reach the logger: at the aggregator it has already travelled over the network.',
    },
  },
  {
    id: 'th-devops-12',
    topic: 'DevOps',
    prompt: {
      es: '¿Qué relación hay entre SLI, SLO, SLA y el presupuesto de error?',
      en: 'What is the relationship between SLI, SLO, SLA and the error budget?',
    },
    answer: {
      es: 'El SLI es la medida observada, el SLO el objetivo interno sobre esa medida, el SLA el compromiso con penalización y el presupuesto el margen de fallo que deja el SLO.',
      en: 'The SLI is the observed measurement, the SLO the internal target on that measurement, the SLA the commitment with a penalty and the budget the failure margin the SLO leaves.',
    },
    distractors: [
      {
        es: 'El SLO y el SLA son el mismo objetivo, uno interno y otro externo, y el presupuesto es el tiempo caído del año.',
        en: 'The SLO and the SLA are the same target, one internal and one external, and the budget is the yearly downtime.',
      },
      {
        es: 'El SLI es el nivel pactado con el cliente y el SLO la métrica que lo comprueba.',
        en: 'The SLI is the level agreed with the customer and the SLO the metric that checks it.',
      },
    ],
    explanation: {
      es: 'El SLO debe ser más estricto que el SLA para tener colchón antes de la penalización. Cuando se gasta el presupuesto, se frena el ritmo de funciones nuevas.',
      en: 'The SLO should be stricter than the SLA so there is a cushion before the penalty. When the budget is spent, the pace of new features slows down.',
    },
  },
  {
    id: 'th-devops-13',
    topic: 'DevOps',
    prompt: {
      es: '¿Por qué conviene alertar por síntomas que nota el usuario y no por causas internas?',
      en: 'Why is it better to alert on symptoms the user notices instead of on internal causes?',
    },
    answer: {
      es: 'Porque un síntoma cubre cualquier causa, también las que nadie previó, y no despierta a nadie por una condición interna que no degrada el servicio.',
      en: 'Because a symptom covers any cause, including ones nobody anticipated, and it does not wake anyone for an internal condition that is not degrading the service.',
    },
    distractors: [
      {
        es: 'Porque la CPU o la memoria no son fiables con contenedores y escalado automático.',
        en: 'Because CPU or memory are not reliable with containers and automatic scaling.',
      },
      {
        es: 'Porque solo hay que alertar cuando el servicio deja de responder del todo.',
        en: 'Because you should alert only when the service stops responding entirely.',
      },
    ],
    explanation: {
      es: 'Una CPU alta con latencia sana no es un incidente. Esperar a la caída total ignora la degradación parcial.',
      en: 'High CPU with healthy latency is not an incident. Waiting for a total outage ignores partial degradation.',
    },
  },
  {
    id: 'th-devops-14',
    topic: 'DevOps',
    prompt: {
      es: '¿Qué miden las cuatro métricas DORA y cómo se agrupan?',
      en: 'What do the four DORA metrics measure and how are they grouped?',
    },
    answer: {
      es: 'La frecuencia de despliegue y el tiempo hasta producción miden velocidad. La tasa de fallos en cambios y el tiempo de restauración miden estabilidad.',
      en: 'Deployment frequency and lead time to production measure velocity. Change failure rate and time to restore measure stability.',
    },
    distractors: [
      {
        es: 'Miden la productividad de cada persona, por eso la frecuencia se desglosa por quien despliega.',
        en: 'They measure each person productivity, which is why frequency is broken down by who deploys.',
      },
      {
        es: 'El tiempo de entrega es lo que tarda el pipeline desde el build hasta el registro.',
        en: 'Lead time is how long the pipeline takes from the build until the registry.',
      },
    ],
    explanation: {
      es: 'Describen el sistema de entrega, no a una persona. El tiempo de entrega cuenta desde el commit hasta que corre en producción.',
      en: 'They describe the delivery system, not a person. Lead time counts from the commit until it runs in production.',
    },
  },
  {
    id: 'th-devops-15',
    topic: 'DevOps',
    prompt: {
      es: '¿Cuál es el beneficio principal de describir la infraestructura como código?',
      en: 'What is the main benefit of describing infrastructure as code?',
    },
    answer: {
      es: 'Que el entorno queda versionado, revisable y reproducible, y cualquiera puede recrearlo igual y auditar cada cambio.',
      en: 'That the environment is versioned, reviewable and reproducible, and anyone can recreate it the same way and audit every change.',
    },
    distractors: [
      {
        es: 'Que desarrollo deja de depender de operaciones y aprovisiona sin aprobaciones.',
        en: 'That development stops depending on operations and provisions without approvals.',
      },
      {
        es: 'Que esos archivos sustituyen la documentación y garantizan que baje el coste de la nube.',
        en: 'That those files replace the documentation and guarantee that cloud cost goes down.',
      },
    ],
    explanation: {
      es: 'Se revisa como código y se puede repetir en otra región. El ahorro depende de qué aprovisionas, no de tener el archivo.',
      en: 'It is reviewed like code and can be repeated in another region. Savings depend on what you provision, not on having the file.',
    },
  },
  {
    id: 'th-devops-16',
    topic: 'DevOps',
    prompt: {
      es: '¿Cómo se gestionan los secretos de una aplicación desplegada?',
      en: 'How are the secrets of a deployed application managed?',
    },
    answer: {
      es: 'Se guardan en un gestor con control de acceso y auditoría, se inyectan al proceso en ejecución y se rotan de forma automática.',
      en: 'They are kept in a manager with access control and auditing, injected into the running process and rotated automatically.',
    },
    distractors: [
      {
        es: 'Se declaran como variables de entorno en el manifiesto, que ya está separado del código.',
        en: 'They are declared as environment variables in the manifest, which is already separate from the code.',
      },
      {
        es: 'Se cifran con una clave del propio repositorio y se descifran al arrancar.',
        en: 'They are encrypted with a key from the repository itself and decrypted at startup.',
      },
    ],
    explanation: {
      es: 'Un manifiesto versionado deja el secreto en el historial. Una clave en el mismo repo solo mueve el problema.',
      en: 'A versioned manifest leaves the secret in history. A key in the same repo only moves the problem.',
    },
  },
  {
    id: 'th-devops-17',
    topic: 'Agile',
    prompt: {
      es: '¿Para qué sirven, en Scrum, el objetivo de sprint y la definición de terminado?',
      en: 'In Scrum, what are the sprint goal and the definition of done for?',
    },
    answer: {
      es: 'El objetivo da un propósito para poder negociar el alcance. La definición de terminado fija la calidad que todo incremento debe cumplir para poder entregarse.',
      en: 'The goal gives a purpose so scope can be negotiated. The definition of done sets the quality every increment must meet before it can be released.',
    },
    distractors: [
      {
        es: 'El objetivo es la lista de historias del sprint y la definición de terminado son los criterios de aceptación de cada una.',
        en: 'The goal is the list of sprint stories and the definition of done is the acceptance criteria of each one.',
      },
      {
        es: 'La definición de terminado la pone la persona propietaria del producto en cada elemento.',
        en: 'The definition of done is set by the product owner on each item.',
      },
    ],
    explanation: {
      es: 'Si el objetivo fuera la lista, soltar una historia sería un fracaso. Los criterios de aceptación son de cada historia, no del equipo entero.',
      en: 'If the goal were the list, dropping a story would be a failure. Acceptance criteria belong to each story, not to the whole team.',
    },
  },
  {
    id: 'th-devops-18',
    topic: 'Agile',
    prompt: {
      es: '¿Qué efecto tienen los límites de trabajo en curso en un tablero Kanban?',
      en: 'What effect do work in progress limits have on a Kanban board?',
    },
    answer: {
      es: 'Bajan el tiempo de ciclo al haber menos elementos abiertos a la vez, y muestran el cuello de botella en cuanto una columna llega a su tope.',
      en: 'They lower cycle time by having fewer items open at once, and they show the bottleneck as soon as a column hits its cap.',
    },
    distractors: [
      {
        es: 'Suben la utilización, porque nadie se queda sin tarea mientras haya trabajo en el backlog.',
        en: 'They raise utilisation, because nobody runs out of work while there is work in the backlog.',
      },
      {
        es: 'Garantizan un número fijo de elementos entregados por iteración.',
        en: 'They guarantee a fixed number of items delivered per iteration.',
      },
    ],
    explanation: {
      es: 'El límite frena empezar algo nuevo cuando hay atasco. Buscar el cien por cien de ocupación alarga las colas.',
      en: 'The limit stops you from starting something new when there is a jam. Chasing one hundred per cent utilisation lengthens the queues.',
    },
  },
  {
    id: 'th-devops-19',
    topic: 'Agile',
    prompt: {
      es: '¿Para qué sirven los puntos de historia?',
      en: 'What are story points for?',
    },
    answer: {
      es: 'Para estimar el tamaño relativo de un elemento frente a otros conocidos, mezclando esfuerzo, complejidad e incertidumbre, sin comprometer horas.',
      en: 'To estimate the relative size of an item against other known ones, mixing effort, complexity and uncertainty, without committing to hours.',
    },
    distractors: [
      {
        es: 'Para pasarlos a horas con un factor fijo y planificar la capacidad del sprint.',
        en: 'To convert them to hours with a fixed factor and plan sprint capacity.',
      },
      {
        es: 'Para comparar el rendimiento entre equipos, porque la escala de Fibonacci unifica el criterio.',
        en: 'To compare performance between teams, because the Fibonacci scale unifies the judgement.',
      },
    ],
    explanation: {
      es: 'Un punto es una moneda de ese equipo. Comparar equipos o fijar horas por punto convierte la velocidad en un plazo.',
      en: 'A point is that team currency. Comparing teams or fixing hours per point turns velocity into a deadline.',
    },
  },
  {
    id: 'th-devops-20',
    topic: 'Agile',
    prompt: {
      es: '¿Qué hace efectiva una revisión de código?',
      en: 'What makes a code review effective?',
    },
    answer: {
      es: 'Pull requests pequeños, con el alcance acordado antes de escribir, y comentarios que separan lo que bloquea la fusión de una preferencia personal.',
      en: 'Small pull requests, with the scope agreed before writing, and comments that separate what blocks the merge from a personal preference.',
    },
    distractors: [
      {
        es: 'Exigir al menos dos aprobaciones de personas con experiencia, porque más ojos pillan más fallos.',
        en: 'Requiring at least two approvals from experienced people, because more eyes catch more bugs.',
      },
      {
        es: 'Dejar las pruebas automáticas primero y centrar la revisión humana en el estilo.',
        en: 'Letting automated tests run first and focusing the human review on style.',
      },
    ],
    explanation: {
      es: 'Por encima de unos cientos de líneas se escapan fallos. El estilo lo impone un formateador, y la persona mira diseño y casos límite.',
      en: 'Above a few hundred lines, bugs slip through. A formatter enforces style, and the person looks at design and edge cases.',
    },
  },
];
