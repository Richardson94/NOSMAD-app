import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_DEVOPS_AGILE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-devops-01',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Qué caracteriza de verdad a la integración continua?',
      en: 'What really characterises continuous integration?',
    },
    answer: {
      es: 'Que cada persona integre su trabajo en la rama principal al menos una vez al día y que cada commit dispare una construcción con pruebas automáticas.',
      en: 'That every person integrates their work into the main branch at least once a day and that every commit triggers a build with automated tests.',
    },
    distractors: [
      {
        es: 'Que exista un servidor de construcción que ejecute el pipeline completo cada noche sobre la rama principal y reporte el resultado al equipo.',
        en: 'That a build server runs the full pipeline every night on the main branch and reports the result to the team.',
      },
      {
        es: 'Que cada rama de feature se mantenga actualizada con la principal y se fusione en cuanto la revisión de código termine.',
        en: 'That every feature branch stays up to date with main and gets merged as soon as the code review finishes.',
      },
    ],
    explanation: {
      es: 'La integración continua es una práctica de equipo sobre la frecuencia de integración, no una herramienta: si el trabajo vive días en una rama, el pipeline verde no evita el conflicto grande al final. La construcción nocturna retrasa la señal hasta veinticuatro horas, y mantener la rama sincronizada con la principal es higiene de ramas, no integración, porque la rama principal sigue sin ver ese código. La referencia clásica es una construcción completa en menos de diez minutos por cada commit.',
      en: 'Continuous integration is a team practice about integration frequency, not a tool: if work lives for days on a branch, a green pipeline does not prevent the big conflict at the end. The nightly build delays the signal by up to twenty-four hours, and keeping the branch synced with main is branch hygiene rather than integration, because main still does not see that code. The classic benchmark is a full build in under ten minutes per commit.',
    },
  },
  {
    id: 'th-devops-02',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿En qué orden conviene encadenar las etapas de un pipeline para obtener retroalimentación rápida?',
      en: 'In which order should pipeline stages be chained to get fast feedback?',
    },
    answer: {
      es: 'Compilación y pruebas unitarias primero, después análisis estático y pruebas de integración, y al final las pruebas end to end y de rendimiento sobre un entorno desplegado.',
      en: 'Build and unit tests first, then static analysis and integration tests, and finally end to end and performance tests against a deployed environment.',
    },
    distractors: [
      {
        es: 'Lanzar todas las suites en paralelo desde el primer momento, porque así la duración total del pipeline es la de la etapa más lenta.',
        en: 'Launch every suite in parallel from the very start, because then the total pipeline duration equals that of the slowest stage.',
      },
      {
        es: 'Situar el análisis estático y el escaneo de dependencias como primera etapa, incluso antes de compilar, aplicando el principio de desplazar la seguridad a la izquierda.',
        en: 'Put static analysis and dependency scanning as the first stage, even before compiling, applying the principle of shifting security to the left.',
      },
    ],
    explanation: {
      es: 'El criterio es fallar cuanto antes y barato: se ordenan las etapas por coste creciente y por probabilidad de detección temprana, siguiendo la pirámide de pruebas. Paralelizar todo suena eficiente pero gasta agentes levantando entornos para pruebas end to end que igualmente serán inútiles si la compilación falla, y ese paralelismo se aplica mejor dentro de una misma etapa. Desplazar la seguridad a la izquierda es una práctica real, pero eso significa moverla antes que las pruebas lentas, no delante de una compilación que muchos analizadores necesitan para resolver tipos y dependencias.',
      en: 'The criterion is failing as early and as cheaply as possible: stages are ordered by increasing cost and by how likely they are to catch problems early, following the test pyramid. Parallelising everything sounds efficient but burns agents spinning up environments for end to end tests that will be useless anyway if compilation fails, and that parallelism belongs inside a single stage. Shifting security to the left is a real practice, but it means moving it ahead of the slow tests, not ahead of a build that many analysers need in order to resolve types and dependencies.',
    },
  },
  {
    id: 'th-devops-03',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Por qué el mismo artefacto se construye una sola vez y se promueve entre entornos?',
      en: 'Why is the same artifact built only once and promoted across environments?',
    },
    answer: {
      es: 'Porque así lo que se validó en pruebas es exactamente el binario que llega a producción, y lo único que cambia entre entornos es la configuración inyectada.',
      en: 'Because that way what was validated in testing is exactly the binary that reaches production, and the only thing changing between environments is the injected configuration.',
    },
    distractors: [
      {
        es: 'Porque reconstruir en cada entorno multiplica la duración del pipeline y encarece el consumo de los agentes de construcción.',
        en: 'Because rebuilding in every environment multiplies pipeline duration and makes build agent consumption more expensive.',
      },
      {
        es: 'Porque el artefacto debe incorporar la configuración de cada entorno para que el despliegue no dependa de nada externo al paquete.',
        en: 'Because the artifact must embed the configuration of each environment so the deployment does not depend on anything outside the package.',
      },
    ],
    explanation: {
      es: 'La razón es la trazabilidad de la evidencia: si se recompila por entorno cambian versiones transitivas de dependencias, la fecha de construcción o el compilador, y las pruebas que pasaron ya no hablan del binario desplegado. Ahorrar tiempo de pipeline es un efecto secundario agradable, pero no justificaría por sí solo la práctica. Empaquetar la configuración dentro del artefacto es justamente lo contrario: obliga a un paquete distinto por entorno y rompe la promoción, por eso se publica un artefacto versionado e inmutable en el registro y se inyecta la configuración al arrancar.',
      en: 'The reason is traceability of evidence: rebuilding per environment can change transitive dependency versions, the build timestamp or the compiler, so the tests that passed no longer describe the deployed binary. Saving pipeline time is a pleasant side effect but would not justify the practice on its own. Packaging configuration inside the artifact is the exact opposite: it forces a different package per environment and breaks promotion, which is why a versioned immutable artifact is published to the registry and configuration is injected at startup.',
    },
  },
  {
    id: 'th-devops-04',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Qué implica trabajar con infraestructura inmutable cuando se despliega en contenedores?',
      en: 'What does working with immutable infrastructure imply when deploying with containers?',
    },
    answer: {
      es: 'Que ninguna instancia se modifica en caliente: para cambiar algo se construye una imagen nueva, se despliega y se destruye la instancia anterior.',
      en: 'That no running instance is modified in place: to change anything you build a new image, deploy it and destroy the previous instance.',
    },
    distractors: [
      {
        es: 'Que el sistema de archivos del contenedor es de solo lectura durante la ejecución, por lo que el proceso no puede escribir nada en disco.',
        en: 'That the container file system is read only while running, so the process cannot write anything to disk.',
      },
      {
        es: 'Que una herramienta de aprovisionamiento aplica el estado deseado de forma idempotente en cada ejecución y corrige las diferencias que encuentre.',
        en: 'That a provisioning tool applies the desired state idempotently on every run and corrects whatever differences it finds.',
      },
    ],
    explanation: {
      es: 'La inmutabilidad ataca la deriva de configuración y los servidores irrepetibles: si nadie parchea ni instala a mano, dos instancias de la misma etiqueta de imagen son idénticas y el rollback consiste en volver a desplegar la etiqueta anterior. El sistema de archivos de solo lectura es una medida de endurecimiento opcional que se puede activar con un contenedor mutable, así que confunde la técnica con el principio. La convergencia idempotente describe el modelo mutable de herramientas como Ansible o Puppet, que corrigen el servidor existente en lugar de reemplazarlo.',
      en: 'Immutability attacks configuration drift and snowflake servers: if nobody patches or installs by hand, two instances of the same image tag are identical and rollback simply means redeploying the previous tag. A read only file system is an optional hardening measure that can be enabled on a mutable container too, so it confuses a technique with the principle. Idempotent convergence describes the mutable model of tools such as Ansible or Puppet, which fix the existing server instead of replacing it.',
    },
  },
  {
    id: 'th-devops-05',
    topic: 'DevOps y Agile',
    prompt: {
      es: 'Según la metodología de los doce factores, ¿dónde debe vivir la configuración de la aplicación?',
      en: 'According to the twelve factor methodology, where should application configuration live?',
    },
    answer: {
      es: 'Todo lo que varía entre despliegues vive en variables del entorno, fuera del código fuente y fuera del artefacto construido.',
      en: 'Everything that varies between deployments lives in environment variables, outside the source code and outside the built artifact.',
    },
    distractors: [
      {
        es: 'En archivos de propiedades por perfil dentro del repositorio, activando en cada entorno el perfil que le corresponde.',
        en: 'In per profile property files inside the repository, activating in each environment the profile that corresponds to it.',
      },
      {
        es: 'En un servidor de configuración centralizado del que cada instancia descarga sus valores al arrancar y recarga los cambios en caliente.',
        en: 'In a centralised configuration server from which each instance downloads its values at startup and hot reloads changes.',
      },
    ],
    explanation: {
      es: 'La prueba de fuego del factor de configuración es si el repositorio podría hacerse público ahora mismo sin filtrar credenciales; las variables de entorno son independientes del lenguaje y no se versionan por accidente. Los perfiles de Spring son cómodos pero crecen de forma combinatoria y acaban con secretos y valores de producción dentro del artefacto, que es lo que el factor prohíbe. Un servidor de configuración centralizado es una evolución válida para escalar, aunque los doce factores lo tratan como un mecanismo de entrega adicional y no como sustituto del principio de separar configuración y código.',
      en: 'The litmus test for the config factor is whether the repository could be made public right now without leaking credentials; environment variables are language agnostic and do not get versioned by accident. Spring profiles are convenient but grow combinatorially and end up with secrets and production values inside the artifact, which is exactly what the factor forbids. A centralised configuration server is a valid evolution for scaling, although the twelve factors treat it as an extra delivery mechanism and not as a replacement for separating config from code.',
    },
  },
  {
    id: 'th-devops-06',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Qué significa que los procesos de una aplicación sean sin estado y desechables?',
      en: 'What does it mean for application processes to be stateless and disposable?',
    },
    answer: {
      es: 'Que no conservan datos en memoria ni en disco local entre peticiones y pueden arrancar o terminar en cualquier momento sin que se pierda información.',
      en: 'That they keep no data in memory or on local disk between requests and can start or stop at any moment without losing information.',
    },
    distractors: [
      {
        es: 'Que la aplicación no mantiene sesión de usuario, por lo que cada petición viaja con un token firmado que el servicio valida sin consultar nada.',
        en: 'That the application keeps no user session, so every request carries a signed token that the service validates without looking anything up.',
      },
      {
        es: 'Que cada instancia replica su estado en memoria hacia las demás para que cualquiera pueda atender la siguiente petición del mismo usuario.',
        en: 'That each instance replicates its in memory state to the others so any of them can serve the next request from the same user.',
      },
    ],
    explanation: {
      es: 'El estado persistente pertenece a los servicios de respaldo, como la base de datos o un almacén compartido tipo Redis, y el proceso debe arrancar rápido y apagarse de forma ordenada al recibir SIGTERM, terminando las peticiones en curso. La autenticación sin estado mediante token firmado es un caso particular muy real, pero el factor abarca cualquier dato en memoria, incluidas cachés locales y archivos temporales de subida. Replicar la sesión entre instancias es la solución clásica que el factor descarta: acopla las instancias, complica el autoescalado y reintroduce el estado que se quería eliminar.',
      en: 'Persistent state belongs to backing services such as the database or a shared store like Redis, and the process must start fast and shut down gracefully on SIGTERM, draining in flight requests. Stateless authentication with a signed token is a very real special case, but the factor covers any in memory data, including local caches and temporary upload files. Replicating the session between instances is the classic solution the factor rejects: it couples instances, complicates autoscaling and reintroduces the state you wanted to remove.',
    },
  },
  {
    id: 'th-devops-07',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Cuál es la diferencia entre un despliegue blue green, uno canary y uno rolling?',
      en: 'What is the difference between a blue green, a canary and a rolling deployment?',
    },
    answer: {
      es: 'Blue green mantiene dos entornos completos y conmuta todo el tráfico de golpe; canary envía primero un porcentaje pequeño de tráfico a la versión nueva; rolling reemplaza las instancias por tandas.',
      en: 'Blue green keeps two complete environments and switches all traffic at once; canary sends a small percentage of traffic to the new version first; rolling replaces instances in batches.',
    },
    distractors: [
      {
        es: 'Blue green reemplaza las instancias por tandas mientras canary duplica el entorno y conmuta el tráfico cuando las pruebas de humo pasan.',
        en: 'Blue green replaces instances in batches while canary duplicates the environment and switches traffic once the smoke tests pass.',
      },
      {
        es: 'Canary libera la versión nueva a un grupo de usuarios elegido por atributos de negocio y blue green despliega en la franja horaria de menor carga.',
        en: 'Canary releases the new version to a user group chosen by business attributes and blue green deploys during the lowest traffic window.',
      },
    ],
    explanation: {
      es: 'Blue green exige el doble de capacidad pero ofrece el rollback más rápido, porque basta con devolver el enrutador al entorno anterior; canary necesita métricas comparables entre ambas versiones para decidir si se promueve o se aborta; rolling apenas requiere capacidad extra pero mantiene dos versiones sirviendo a la vez, así que obliga a compatibilidad hacia atrás en la API y en el esquema. La segunda opción intercambia las definiciones de blue green y canary. Segmentar por atributos de usuario es entrega dirigida mediante feature toggles, y desplegar en horario valle es una precaución operativa que no define ninguna de las tres estrategias.',
      en: 'Blue green demands double capacity but offers the fastest rollback, since you just point the router back to the previous environment; canary needs comparable metrics across both versions to decide whether to promote or abort; rolling barely needs extra capacity but keeps two versions serving at once, so it requires backward compatibility in the API and the schema. The second option swaps the definitions of blue green and canary. Segmenting by user attributes is targeted delivery through feature toggles, and deploying in the quiet window is an operational precaution that defines none of the three strategies.',
    },
  },
  {
    id: 'th-devops-08',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Qué distingue a un feature toggle de release de uno operativo y de uno de experimento?',
      en: 'What distinguishes a release feature toggle from an operational one and from an experiment one?',
    },
    answer: {
      es: 'El de release oculta código incompleto y es de vida corta; el operativo permite degradar o apagar una función en producción y es de vida larga; el de experimento reparte variantes entre usuarios para medir su efecto.',
      en: 'The release one hides incomplete code and is short lived; the operational one lets you degrade or switch off a feature in production and is long lived; the experiment one splits variants between users to measure their effect.',
    },
    distractors: [
      {
        es: 'Todo toggle debe retirarse en cuanto la funcionalidad se libera, porque mantenerlo genera deuda técnica y multiplica las rutas de código sin probar.',
        en: 'Every toggle must be removed as soon as the feature is released, because keeping it creates technical debt and multiplies untested code paths.',
      },
      {
        es: 'El operativo se cambia publicando una configuración nueva y el de experimento se resuelve en tiempo de compilación para no penalizar el rendimiento en cada petición.',
        en: 'The operational one is changed by publishing a new configuration and the experiment one is resolved at compile time so performance is not penalised on every request.',
      },
    ],
    explanation: {
      es: 'Las dos dimensiones que clasifican un toggle son su longevidad y quién decide cambiarlo: un toggle de release lo retira quien programa tras liberar, mientras que un interruptor de emergencia operativo es permanente por diseño y lo acciona quien está de guardia. Por eso la primera opción, cierta para los toggles de release, se convierte en un error cuando se generaliza a los operativos y a los de permisos. La segunda tienta porque el coste de evaluación existe, pero resolver en compilación anula el propósito: tanto el operativo como el de experimento necesitan cambiar en caliente sin desplegar, que es justo lo que los hace útiles.',
      en: 'The two dimensions that classify a toggle are its longevity and who decides to flip it: a release toggle is removed by the developer after launch, while an operational kill switch is permanent by design and is flipped by whoever is on call. That is why the first option, true for release toggles, becomes wrong once generalised to operational and permission toggles. The second one tempts because the evaluation cost is real, but resolving at compile time defeats the purpose: both the operational and the experiment toggle need to change at runtime without a deployment, which is precisely what makes them useful.',
    },
  },
  {
    id: 'th-devops-09',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Cómo se renombra una columna en uso sin provocar caída del servicio durante el despliegue?',
      en: 'How do you rename a column in use without causing downtime during the deployment?',
    },
    answer: {
      es: 'Se añade la columna nueva, se escribe en ambas mientras se copian los datos existentes, se migra la lectura y solo en un despliegue posterior se elimina la antigua.',
      en: 'You add the new column, write to both while backfilling the existing data, move reads over and only in a later deployment drop the old one.',
    },
    distractors: [
      {
        es: 'Se aplica la migración con la aplicación detenida en una ventana de mantenimiento corta, de modo que no haya escrituras concurrentes durante el cambio.',
        en: 'You apply the migration with the application stopped during a short maintenance window, so there are no concurrent writes during the change.',
      },
      {
        es: 'Se renombra la columna en la misma versión que actualiza el código, porque la migración se ejecuta antes de que arranquen las instancias nuevas.',
        en: 'You rename the column in the same release that updates the code, because the migration runs before the new instances start up.',
      },
    ],
    explanation: {
      es: 'El patrón expandir y contraer parte de una realidad del despliegue progresivo: durante la transición conviven la versión anterior y la nueva contra la misma base de datos, así que cada migración debe ser compatible hacia atrás con la versión N menos uno. La ventana de mantenimiento resuelve el problema técnico pero incumple el requisito de cero caída, que era la pregunta. La tercera opción es el malentendido más habitual con Flyway o Liquibase: la migración sí corre antes de las instancias nuevas, pero las antiguas siguen vivas consultando la columna que se acaba de renombrar y empiezan a fallar de inmediato.',
      en: 'The expand and contract pattern starts from a fact of progressive deployment: during the transition the old and the new version coexist against the same database, so every migration must be backward compatible with version N minus one. The maintenance window solves the technical problem but breaks the zero downtime requirement, which was the question. The third option is the most common misunderstanding with Flyway or Liquibase: the migration does run before the new instances, but the old ones are still alive querying the column that was just renamed and start failing immediately.',
    },
  },
  {
    id: 'th-devops-10',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Cuáles son los tres pilares de la observabilidad y qué aporta cada uno?',
      en: 'What are the three pillars of observability and what does each one contribute?',
    },
    answer: {
      es: 'Métricas para agregados numéricos baratos de consultar, logs para el detalle de eventos concretos y trazas distribuidas para seguir una misma petición a través de varios servicios.',
      en: 'Metrics for cheap numeric aggregates, logs for the detail of specific events, and distributed traces to follow a single request across several services.',
    },
    distractors: [
      {
        es: 'Monitorización, alertas y cuadros de mando, que permiten vigilar el estado del sistema y avisar cuando un umbral se supera.',
        en: 'Monitoring, alerting and dashboards, which let you watch the state of the system and warn when a threshold is crossed.',
      },
      {
        es: 'Métricas, logs y comprobaciones de salud, ya que el endpoint de salud es lo que determina si una instancia debe seguir recibiendo tráfico.',
        en: 'Metrics, logs and health checks, since the health endpoint is what determines whether an instance should keep receiving traffic.',
      },
    ],
    explanation: {
      es: 'Observabilidad es la capacidad de responder preguntas nuevas sobre estados que nadie previó sin tener que desplegar código adicional, y las trazas son el pilar que aporta la dimensión de causalidad entre servicios, normalmente correlacionando por un identificador de traza propagado en la cabecera y expuesto en el MDC de Spring Boot. La primera opción describe la monitorización clásica, que responde preguntas conocidas de antemano y es un consumidor de los pilares, no un pilar. Las comprobaciones de salud son reales y necesarias para el balanceador y para las sondas de readiness, pero solo dan una señal binaria por instancia.',
      en: 'Observability is the ability to answer new questions about states nobody anticipated without shipping extra code, and traces are the pillar that adds the causality dimension across services, usually correlating through a trace identifier propagated in the header and exposed in the Spring Boot MDC. The first option describes classic monitoring, which answers questions known in advance and is a consumer of the pillars rather than a pillar. Health checks are real and necessary for the load balancer and for readiness probes, but they only give a binary signal per instance.',
    },
  },
  {
    id: 'th-devops-11',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Qué caracteriza a un buen registro de logs en un servicio en producción?',
      en: 'What characterises good logging in a production service?',
    },
    answer: {
      es: 'Eventos en formato estructurado con campos consultables y un identificador de correlación, niveles aplicados con criterio y ningún dato sensible en el mensaje.',
      en: 'Structured events with queryable fields and a correlation identifier, levels applied with judgement, and no sensitive data in the message.',
    },
    distractors: [
      {
        es: 'Registrar en nivel DEBUG el flujo completo y activarlo solo cuando haya que investigar un incidente, reservando INFO para el arranque del servicio.',
        en: 'Log the whole flow at DEBUG level and enable it only when an incident needs investigating, reserving INFO for service startup.',
      },
      {
        es: 'Enmascarar los datos sensibles con un filtro en el agregador de logs, de forma que la aplicación pueda registrar el objeto completo sin preocuparse.',
        en: 'Mask sensitive data with a filter in the log aggregator, so the application can log the whole object without worrying.',
      },
    ],
    explanation: {
      es: 'El log estructurado en JSON con campos como traceId, userId o el nombre de la operación permite filtrar y agregar sin expresiones regulares frágiles, y el nivel ERROR debe reservarse para fallos accionables, porque si todo es ERROR la alerta pierde valor. La primera opción tienta porque el DEBUG bajo demanda es útil, pero cuando el incidente ya ocurrió es tarde para activarlo y reproducirlo. Enmascarar en el agregador llega tarde también: el dato ya se escribió en el archivo local del contenedor y viajó por la red, y cualquier cambio en el formato del mensaje deja el filtro obsoleto sin avisar, así que el token o el dato personal nunca debe llegar al logger.',
      en: 'Structured JSON logging with fields such as traceId, userId or the operation name lets you filter and aggregate without fragile regular expressions, and the ERROR level must be reserved for actionable failures, because if everything is an ERROR the alert loses its value. The first option tempts because on demand DEBUG is useful, but once the incident has happened it is too late to enable it and reproduce it. Masking at the aggregator is also too late: the data was already written to the local container file and travelled over the network, and any change in the message format silently makes the filter obsolete, so the token or the personal data must never reach the logger.',
    },
  },
  {
    id: 'th-devops-12',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Qué relación existe entre SLI, SLO, SLA y el presupuesto de error?',
      en: 'What is the relationship between SLI, SLO, SLA and the error budget?',
    },
    answer: {
      es: 'El SLI es la medida observada, el SLO el objetivo interno fijado sobre esa medida, el SLA el compromiso contractual con consecuencias, y el presupuesto de error el margen de incumplimiento que el SLO deja disponible.',
      en: 'The SLI is the observed measurement, the SLO is the internal target set on that measurement, the SLA is the contractual commitment with penalties, and the error budget is the margin of failure the SLO leaves available.',
    },
    distractors: [
      {
        es: 'El SLO y el SLA son el mismo objetivo expresado para consumo interno y externo, y el presupuesto de error es el tiempo de caída tolerado durante el año.',
        en: 'The SLO and the SLA are the same target expressed for internal and external consumption, and the error budget is the downtime tolerated over the year.',
      },
      {
        es: 'El SLI es el nivel de disponibilidad acordado con el cliente y el SLO es la métrica instrumentada que lo verifica en cada ventana de medición.',
        en: 'The SLI is the availability level agreed with the customer and the SLO is the instrumented metric that verifies it in each measurement window.',
      },
    ],
    explanation: {
      es: 'El SLO siempre debe ser más exigente que el SLA para que exista colchón antes de la penalización, y el presupuesto de error convierte la fiabilidad en una decisión de producto: un SLO de 99,9 por ciento mensual deja unos cuarenta y tres minutos de fallo, y cuando ese presupuesto se agota lo razonable es congelar el ritmo de nuevas funciones y dedicar el esfuerzo a estabilidad. La primera opción confunde SLO con SLA y acierta solo a medias en el presupuesto, que se calcula por ventana y como fracción de peticiones fallidas, no necesariamente en minutos anuales. La segunda invierte los papeles del indicador y del objetivo.',
      en: 'The SLO must always be stricter than the SLA so there is a cushion before penalties apply, and the error budget turns reliability into a product decision: a monthly SLO of 99.9 per cent leaves about forty-three minutes of failure, and when that budget is exhausted the sensible move is to freeze the pace of new features and spend the effort on stability. The first option confuses SLO with SLA and is only half right about the budget, which is computed per window and as a fraction of failed requests, not necessarily in yearly minutes. The second one inverts the roles of the indicator and the objective.',
    },
  },
  {
    id: 'th-devops-13',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Por qué conviene alertar sobre síntomas que percibe el usuario en lugar de sobre causas internas?',
      en: 'Why is it better to alert on symptoms the user perceives instead of on internal causes?',
    },
    answer: {
      es: 'Porque un síntoma cubre cualquier causa, incluidas las que nadie previó, y evita despertar a alguien por condiciones internas que no están degradando el servicio.',
      en: 'Because a symptom covers any cause, including the ones nobody anticipated, and it avoids waking someone for internal conditions that are not degrading the service.',
    },
    distractors: [
      {
        es: 'Porque las métricas de infraestructura como la CPU o la memoria son poco fiables en entornos con contenedores y escalado automático.',
        en: 'Because infrastructure metrics such as CPU or memory are unreliable in environments with containers and automatic scaling.',
      },
      {
        es: 'Porque mantener un umbral por cada componente es inviable y lo recomendable es alertar únicamente cuando el servicio deja de responder por completo.',
        en: 'Because keeping a threshold per component is unfeasible and the recommendation is to alert only when the service stops responding entirely.',
      },
    ],
    explanation: {
      es: 'La regla práctica es que toda alerta que despierta a una persona debe ser urgente y accionable, y eso solo se cumple con señales de impacto como latencia, tasa de errores y saturación del camino que usa el cliente; las causas internas pertenecen a los cuadros de mando de diagnóstico, que se consultan después de la alerta. La primera opción parte de un hecho real, esas métricas son ruidosas con límites de contenedor, pero el motivo de fondo no es su fiabilidad sino que una CPU alta con latencia sana no es un incidente. La segunda acierta en el problema de los umbrales y falla en la conclusión: esperar a la caída total ignora la degradación parcial, que es precisamente lo que el SLO pretende detectar a tiempo.',
      en: 'The practical rule is that any alert waking a person must be urgent and actionable, and only impact signals satisfy that: latency, error rate and saturation of the path the customer uses; internal causes belong on diagnostic dashboards, consulted after the alert fires. The first option starts from a real fact, those metrics are noisy with container limits, but the underlying reason is not their reliability, it is that high CPU with healthy latency is not an incident. The second one is right about the threshold problem and wrong in its conclusion: waiting for a total outage ignores partial degradation, which is exactly what the SLO is meant to catch in time.',
    },
  },
  {
    id: 'th-devops-14',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Qué miden las cuatro métricas DORA y cómo se agrupan entre sí?',
      en: 'What do the four DORA metrics measure and how are they grouped?',
    },
    answer: {
      es: 'La frecuencia de despliegue y el tiempo de entrega de cambios miden velocidad; la tasa de fallos en cambios y el tiempo de restauración del servicio miden estabilidad.',
      en: 'Deployment frequency and lead time for changes measure velocity; change failure rate and time to restore service measure stability.',
    },
    distractors: [
      {
        es: 'Miden la productividad individual, por eso la frecuencia de despliegue se desglosa por persona para identificar quién frena la entrega.',
        en: 'They measure individual productivity, which is why deployment frequency is broken down per person to identify who is slowing delivery down.',
      },
      {
        es: 'El tiempo de entrega de cambios mide lo que tarda el pipeline desde que arranca la construcción hasta que publica el artefacto en el registro.',
        en: 'Lead time for changes measures how long the pipeline takes from the moment the build starts until it publishes the artifact to the registry.',
      },
    ],
    explanation: {
      es: 'El hallazgo central de la investigación es que velocidad y estabilidad no se intercambian: los equipos de alto rendimiento mejoran las cuatro a la vez, con despliegues varias veces al día y restauración del servicio en menos de una hora. Las métricas describen el sistema de entrega completo, nunca a una persona, y desglosarlas por individuo invita a inflar el número de despliegues sin ganar nada. La segunda opción define mal el tiempo de entrega de cambios, que se cuenta desde que el commit entra hasta que ese cambio corre en producción, e incluye esperas de revisión y aprobaciones, no solo la duración del pipeline.',
      en: 'The central finding of the research is that velocity and stability are not a trade off: high performing teams improve all four at once, deploying several times a day and restoring service in under an hour. The metrics describe the whole delivery system, never an individual, and breaking them down per person invites inflating the deployment count without gaining anything. The second option misdefines lead time for changes, which is counted from the moment the commit lands until that change runs in production, and it includes review waiting time and approvals, not just the pipeline duration.',
    },
  },
  {
    id: 'th-devops-15',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Cuál es el beneficio principal de describir la infraestructura como código?',
      en: 'What is the main benefit of describing infrastructure as code?',
    },
    answer: {
      es: 'Que el entorno queda versionado, revisable y reproducible, de modo que cualquiera puede recrearlo desde cero de forma idéntica y auditar cada cambio.',
      en: 'That the environment becomes versioned, reviewable and reproducible, so anyone can recreate it from scratch identically and audit every change.',
    },
    distractors: [
      {
        es: 'Que el equipo de desarrollo deja de depender de operaciones, porque puede aprovisionar los recursos que necesita sin pasar por aprobaciones.',
        en: 'That the development team stops depending on operations, because it can provision the resources it needs without going through approvals.',
      },
      {
        es: 'Que los archivos de aprovisionamiento sustituyen a la documentación de la infraestructura y garantizan que el coste de la nube se reduzca.',
        en: 'That the provisioning files replace infrastructure documentation and guarantee that cloud cost goes down.',
      },
    ],
    explanation: {
      es: 'El valor nace de aplicar a la infraestructura las mismas prácticas que al código: revisión por pares sobre una diferencia legible, historial de quién cambió qué y recuperación ante desastres ejecutando la misma definición en otra región. Un plan declarativo de Terraform muestra además la diferencia contra el estado real antes de aplicarla, lo que permite detectar la deriva. La autonomía del equipo es un efecto real, pero las políticas y aprobaciones no desaparecen, se automatizan como código de política. Y aunque la definición documenta el entorno mejor que un wiki desactualizado, el ahorro de coste depende de qué se aprovisiona, no de la herramienta.',
      en: 'The value comes from applying the same practices to infrastructure as to code: peer review over a readable diff, a history of who changed what, and disaster recovery by running the same definition in another region. A declarative Terraform plan also shows the difference against the real state before applying it, which is how drift gets detected. Team autonomy is a real effect, but policies and approvals do not disappear, they become automated as policy as code. And although the definition documents the environment better than an outdated wiki, cost savings depend on what you provision, not on the tool.',
    },
  },
  {
    id: 'th-devops-16',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Cómo deben gestionarse los secretos de una aplicación desplegada?',
      en: 'How should the secrets of a deployed application be managed?',
    },
    answer: {
      es: 'Se guardan en un gestor de secretos con control de acceso y auditoría, se inyectan en el proceso en tiempo de ejecución y se rotan de forma periódica y automatizada.',
      en: 'They are kept in a secrets manager with access control and auditing, injected into the process at runtime, and rotated periodically and automatically.',
    },
    distractors: [
      {
        es: 'Se declaran como variables de entorno en el manifiesto de despliegue, que ya vive separado del código fuente de la aplicación.',
        en: 'They are declared as environment variables in the deployment manifest, which already lives separately from the application source code.',
      },
      {
        es: 'Se cifran con una clave del propio repositorio y se descifran al arrancar, de manera que el valor nunca queda escrito en claro en ningún sitio.',
        en: 'They are encrypted with a key from the repository itself and decrypted at startup, so the value is never written in clear anywhere.',
      },
    ],
    explanation: {
      es: 'Lo que define una buena gestión de secretos no es dónde los lee la aplicación sino quién puede obtenerlos y durante cuánto tiempo sirven: una bóveda como Vault permite credenciales dinámicas de vida corta, revocación inmediata y registro de cada acceso, y la rotación acota la ventana de exposición si algo se filtra. La primera opción tienta porque los doce factores hablan de variables de entorno, pero un manifiesto versionado deja el valor en texto plano en el historial de Git y visible para cualquiera que pueda describir el recurso. La segunda solo desplaza el problema: la clave maestra queda en el mismo repositorio y quien clone el proyecto podrá descifrar todo.',
      en: 'What defines good secret management is not where the application reads them from but who can obtain them and for how long they remain valid: a vault such as Vault allows short lived dynamic credentials, immediate revocation and a record of every access, and rotation narrows the exposure window if something leaks. The first option tempts because the twelve factors talk about environment variables, but a versioned manifest leaves the value in plain text in the Git history and visible to anyone able to describe the resource. The second one only moves the problem: the master key sits in the same repository, so whoever clones the project can decrypt everything.',
    },
  },
  {
    id: 'th-devops-17',
    topic: 'DevOps y Agile',
    prompt: {
      es: 'En Scrum, ¿cuál es el propósito del objetivo de sprint y el de la definición de terminado?',
      en: 'In Scrum, what is the purpose of the sprint goal and of the definition of done?',
    },
    answer: {
      es: 'El objetivo de sprint aporta un propósito único que permite negociar el alcance sin perder el rumbo, y la definición de terminado fija el estándar de calidad que todo incremento debe cumplir para considerarse entregable.',
      en: 'The sprint goal provides a single purpose that allows scope to be renegotiated without losing direction, and the definition of done sets the quality standard every increment must meet to be considered releasable.',
    },
    distractors: [
      {
        es: 'El objetivo de sprint es el conjunto de historias comprometidas para la iteración y la definición de terminado son los criterios de aceptación de cada historia.',
        en: 'The sprint goal is the set of stories committed for the iteration and the definition of done is the acceptance criteria of each story.',
      },
      {
        es: 'La definición de terminado la establece la persona propietaria del producto para cada elemento, ya que es quien acepta o rechaza el incremento al final del sprint.',
        en: 'The definition of done is set by the product owner for each item, since that is who accepts or rejects the increment at the end of the sprint.',
      },
    ],
    explanation: {
      es: 'El objetivo de sprint existe precisamente para poder soltar elementos del backlog cuando surge un imprevisto y seguir entregando valor coherente; si fuese la lista de historias, cualquier cambio de alcance equivaldría a un fracaso. La definición de terminado es un acuerdo único del equipo, o incluso de la organización, que aplica por igual a todos los elementos e incluye cosas como pruebas automatizadas, revisión de código y despliegue en un entorno; los criterios de aceptación, en cambio, son específicos de cada historia y describen su comportamiento funcional. La persona propietaria del producto acepta el valor entregado, pero no define unilateralmente el estándar técnico de calidad.',
      en: 'The sprint goal exists precisely so items can be dropped when something unexpected appears while still delivering coherent value; if it were the list of stories, any scope change would count as a failure. The definition of done is a single agreement of the team, or even of the organisation, that applies equally to every item and covers things like automated tests, code review and deployment to an environment; acceptance criteria, by contrast, are specific to each story and describe its functional behaviour. The product owner accepts the delivered value but does not unilaterally define the technical quality standard.',
    },
  },
  {
    id: 'th-devops-18',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Qué efecto tienen los límites de trabajo en curso en un tablero Kanban?',
      en: 'What effect do work in progress limits have on a Kanban board?',
    },
    answer: {
      es: 'Reducen el tiempo de ciclo al bajar la cantidad de elementos abiertos a la vez y hacen visible el cuello de botella en cuanto una columna alcanza su límite.',
      en: 'They reduce cycle time by lowering the number of items open at once and they make the bottleneck visible as soon as a column reaches its limit.',
    },
    distractors: [
      {
        es: 'Aumentan la utilización del equipo, porque impiden que alguien se quede sin tarea mientras haya elementos disponibles en el backlog.',
        en: 'They increase team utilisation, because they stop anyone from running out of work while there are items available in the backlog.',
      },
      {
        es: 'Garantizan que el equipo entregue un número fijo de elementos por iteración, ya que el flujo se vuelve estable y predecible.',
        en: 'They guarantee the team delivers a fixed number of items per iteration, since the flow becomes stable and predictable.',
      },
    ],
    explanation: {
      es: 'La ley de Little lo formaliza: el tiempo de ciclo equivale al trabajo en curso dividido entre el rendimiento, así que con el mismo rendimiento menos trabajo abierto significa entregas más rápidas. Cuando una columna se llena, lo correcto es que la gente aguas arriba ayude a desatascarla en vez de empezar algo nuevo, y ahí es donde aparece la restricción del sistema. La primera opción invierte el objetivo: los límites buscan justamente frenar el inicio de trabajo nuevo, porque buscar utilización del cien por cien dispara las colas y el tiempo de espera. La segunda confunde predecibilidad con compromiso fijo; el flujo se vuelve más estable y se pueden dar pronósticos por percentiles, pero no un número garantizado.',
      en: 'The Little law formalises it: cycle time equals work in progress divided by throughput, so with the same throughput less open work means faster delivery. When a column fills up, the right move is for people upstream to help unblock it instead of starting something new, and that is where the system constraint shows up. The first option inverts the goal: the limits exist precisely to stop new work from starting, because chasing one hundred per cent utilisation makes queues and waiting time explode. The second one confuses predictability with a fixed commitment; flow does become more stable and forecasts can be given as percentiles, but not as a guaranteed number.',
    },
  },
  {
    id: 'th-devops-19',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Para qué sirven realmente los puntos de historia?',
      en: 'What are story points really for?',
    },
    answer: {
      es: 'Para estimar el tamaño relativo de un elemento comparándolo con otros ya conocidos, integrando esfuerzo, complejidad e incertidumbre sin comprometerse con horas concretas.',
      en: 'To estimate the relative size of an item by comparing it with already known ones, combining effort, complexity and uncertainty without committing to specific hours.',
    },
    distractors: [
      {
        es: 'Para traducir la estimación a horas mediante un factor de conversión por punto acordado por el equipo y planificar así la capacidad del sprint.',
        en: 'To translate the estimate into hours through a conversion factor per point agreed by the team and plan sprint capacity that way.',
      },
      {
        es: 'Para comparar el rendimiento entre equipos de la misma organización, ya que la escala de Fibonacci normaliza las diferencias de criterio al estimar.',
        en: 'To compare performance between teams in the same organisation, since the Fibonacci scale normalises differences of judgement when estimating.',
      },
    ],
    explanation: {
      es: 'La estimación relativa funciona porque las personas comparan tamaños mucho mejor que lo que predicen duraciones absolutas, y la escala no lineal de Fibonacci comunica de forma explícita que la incertidumbre crece con el tamaño. Fijar un factor de horas por punto reintroduce justo la falsa precisión que la escala evita y convierte la velocidad en un compromiso de plazos. Comparar equipos es el mal uso más dañino: el punto es una moneda local, calibrada por ese equipo concreto, así que un punto en un equipo no equivale a uno de otro; por eso muchos equipos maduros pasan a contar elementos completados y a pronosticar con el histórico de tiempo de ciclo.',
      en: 'Relative estimation works because people compare sizes far better than they predict absolute durations, and the nonlinear Fibonacci scale explicitly communicates that uncertainty grows with size. Fixing an hours per point factor reintroduces exactly the false precision the scale avoids and turns velocity into a deadline commitment. Comparing teams is the most damaging misuse: the point is a local currency calibrated by that particular team, so one point in one team does not equal one in another; this is why many mature teams move to counting completed items and forecasting from historical cycle time.',
    },
  },
  {
    id: 'th-devops-20',
    topic: 'DevOps y Agile',
    prompt: {
      es: '¿Qué prácticas hacen que una revisión de código sea realmente efectiva?',
      en: 'Which practices make a code review genuinely effective?',
    },
    answer: {
      es: 'Pull requests pequeños con el alcance acordado antes de escribir el código y comentarios que distingan de forma explícita lo que bloquea la fusión de lo que es una preferencia personal.',
      en: 'Small pull requests with the scope agreed before writing the code, and comments that explicitly separate what blocks the merge from what is a personal preference.',
    },
    distractors: [
      {
        es: 'Asignar al menos dos personas revisoras con experiencia y exigir la aprobación de ambas, porque cuantos más ojos revisen menos defectos se escapan.',
        en: 'Assign at least two experienced reviewers and require approval from both, because the more eyes review the fewer defects escape.',
      },
      {
        es: 'Dejar que el análisis estático y las pruebas automáticas se ejecuten primero y centrar la revisión humana en el estilo y el formato del código.',
        en: 'Let static analysis and automated tests run first and focus the human review on code style and formatting.',
      },
    ],
    explanation: {
      es: 'La capacidad de detectar defectos cae de forma acusada por encima de unas cuatrocientas líneas modificadas, y acordar el enfoque antes de programar evita la discusión de diseño más cara de todas, la que llega cuando el trabajo ya está hecho. Marcar los comentarios como bloqueantes o como sugerencia, con convenciones tipo prefijo nit, elimina la ambigüedad sobre qué hay que cambiar para fusionar. Sumar una segunda aprobación obligatoria aporta cada vez menos y añade latencia de espera, que suele ser el mayor componente del tiempo de entrega de cambios. La última opción acierta en dejar primero la automatización, pero invierte el reparto: el formato lo debe imponer un formateador automático para que la revisión humana se dedique al diseño, la corrección y los casos límite.',
      en: 'Defect detection ability drops sharply above roughly four hundred changed lines, and agreeing the approach before coding avoids the most expensive design discussion of all, the one that arrives when the work is already finished. Marking comments as blocking or as a suggestion, with conventions such as the nit prefix, removes any ambiguity about what must change before merging. Adding a mandatory second approval yields diminishing returns and adds waiting latency, usually the largest component of lead time for changes. The last option is right about running automation first but inverts the split: formatting should be enforced by an automatic formatter so that human review can focus on design, correctness and edge cases.',
    },
  },
];
