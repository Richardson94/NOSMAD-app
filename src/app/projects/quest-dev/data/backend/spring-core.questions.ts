import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const BACKEND_SPRING_CORE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'be-spring-01',
    topic: 'Inyección',
    prompt: {
      es: '¿Por qué se prefiere inyectar por constructor y no por campo con @Autowired?',
      en: 'Why is constructor injection preferred over field injection with @Autowired?',
    },
    answer: {
      es: 'Porque las dependencias quedan en el constructor, pueden ser final y la clase se instancia en un test sin levantar Spring.',
      en: 'Because the dependencies are visible on the constructor, they can be final and the class can be created in a test without starting Spring.',
    },
    distractors: [
      {
        es: 'Porque evita los ciclos. Spring crea un proxy perezoso y el campo no puede hacerlo.',
        en: 'Because it avoids cycles. Spring creates a lazy proxy and a field cannot do that.',
      },
      {
        es: 'Porque Spring arranca más rápido al conocer el grafo y crear los beans en paralelo.',
        en: 'Because Spring starts faster once it knows the graph and creates the beans in parallel.',
      },
    ],
    explanation: {
      es: 'Un constructor con muchos parámetros avisa de que la clase hace demasiado. Con constructor, un ciclo falla al arrancar en lugar de esconderse.',
      en: 'A constructor with many parameters warns you that the class does too much. With a constructor, a cycle fails at startup instead of hiding.',
    },
  },
  {
    id: 'be-spring-02',
    topic: 'Transacciones',
    prompt: {
      es: '¿Qué pasa si un método llama a otro @Transactional de la misma clase?',
      en: 'What happens if a method calls another @Transactional method of the same class?',
    },
    answer: {
      es: 'La anotación no se aplica. La llamada interna no pasa por el proxy de Spring, que es quien abre la transacción.',
      en: 'The annotation is not applied. The internal call does not go through the Spring proxy, which is what opens the transaction.',
    },
    distractors: [
      {
        es: 'Se une a la transacción del llamador, porque la propagación por defecto es unirse.',
        en: 'It joins the caller transaction, because the default propagation is to join.',
      },
      {
        es: 'Se abre una transacción nueva, porque Spring lee la anotación en cada llamada.',
        en: 'A new transaction is opened, because Spring reads the annotation on every call.',
      },
    ],
    explanation: {
      es: 'Mueve el método a otro bean. this.metodo() salta el aspecto, igual que con @Async.',
      en: 'Move the method to another bean. this.method() skips the aspect, the same as with @Async.',
    },
  },
  {
    id: 'be-spring-03',
    topic: 'Transacciones',
    prompt: {
      es: '¿Ante qué excepciones hace rollback @Transactional por defecto?',
      en: 'Which exceptions make @Transactional roll back by default?',
    },
    answer: {
      es: 'Ante RuntimeException y Error. Una excepción checked confirma la transacción, salvo que indiques rollbackFor.',
      en: 'On RuntimeException and Error. A checked exception commits the transaction, unless you set rollbackFor.',
    },
    distractors: [
      {
        es: 'Ante cualquier excepción que salga del método, checked o no.',
        en: 'On any exception that leaves the method, checked or not.',
      },
      {
        es: 'Solo ante fallos de base de datos. Una RuntimeException de negocio hace commit.',
        en: 'Only on database failures. A business RuntimeException commits.',
      },
    ],
    explanation: {
      es: 'Una IOException checked deja los cambios guardados si no pones rollbackFor. Es el olvido típico.',
      en: 'A checked IOException leaves the changes saved if you do not set rollbackFor. It is the typical miss.',
    },
  },
  {
    id: 'be-spring-04',
    topic: 'Ámbitos',
    prompt: {
      es: '¿Qué problema hay al inyectar un bean prototype dentro de un singleton?',
      en: 'What problem appears when you inject a prototype bean into a singleton?',
    },
    answer: {
      es: 'Spring inyecta una sola instancia al crear el singleton. A partir de ahí ya no es un objeto nuevo en cada uso.',
      en: 'Spring injects one instance when it creates the singleton. From then on it is no longer a new object on each use.',
    },
    distractors: [
      {
        es: 'Spring no arranca, porque esos dos ámbitos no se pueden mezclar.',
        en: 'Spring does not start, because those two scopes cannot be mixed.',
      },
      {
        es: 'Se crea un prototype nuevo en cada llamada al método del singleton.',
        en: 'A new prototype is created on every call to the singleton method.',
      },
    ],
    explanation: {
      es: 'El fallo es silencioso: el estado se comparte entre peticiones. Pide una instancia con ObjectProvider cuando de verdad la necesites.',
      en: 'The failure is silent: the state is shared across requests. Ask ObjectProvider for an instance when you really need one.',
    },
  },
  {
    id: 'be-spring-05',
    topic: 'Configuración',
    prompt: {
      es: '¿Qué hace @SpringBootApplication?',
      en: 'What does @SpringBootApplication do?',
    },
    answer: {
      es: 'Marca la clase de arranque: es configuración, activa la autoconfiguración y escanea componentes desde su paquete.',
      en: 'It marks the startup class: it is configuration, it turns on auto-configuration and it scans components from its package.',
    },
    distractors: [
      {
        es: 'Sustituye a SpringApplication.run y levanta el servidor por sí sola.',
        en: 'It replaces SpringApplication.run and starts the server by itself.',
      },
      {
        es: 'Registra Actuator y abre los endpoints de salud sin más dependencias.',
        en: 'It registers Actuator and opens the health endpoints with no extra dependencies.',
      },
    ],
    explanation: {
      es: 'Ponla en el paquete raíz. Si está en un subpaquete, el escaneo no ve el resto de la aplicación.',
      en: 'Put it in the root package. If it sits in a subpackage, the scan does not see the rest of the application.',
    },
  },
  {
    id: 'be-spring-06',
    topic: 'Configuración',
    prompt: {
      es: '¿Qué ventaja tiene @ConfigurationProperties frente a muchos @Value?',
      en: 'What advantage does @ConfigurationProperties have over many @Value annotations?',
    },
    answer: {
      es: 'Agrupa la configuración en un objeto con tipo, listas y campos anidados, y se puede validar. Varios @Value dejan los datos sueltos.',
      en: 'It groups configuration in a typed object, with lists and nested fields, and it can be validated. Several @Value annotations leave the data scattered.',
    },
    distractors: [
      {
        es: 'Recarga el archivo en caliente sin reiniciar. @Value no puede hacerlo.',
        en: 'It reloads the file on the fly without a restart. @Value cannot do that.',
      },
      {
        es: 'Resuelve expresiones. @Value solo lee texto literal del archivo.',
        en: 'It evaluates expressions. @Value only reads literal text from the file.',
      },
    ],
    explanation: {
      es: 'La recarga en caliente es otra pieza. Las expresiones son justo una capacidad de @Value, no de este objeto de propiedades.',
      en: 'Hot reload is a different piece. Expressions are a capability of @Value, not of this properties object.',
    },
  },
  {
    id: 'be-spring-07',
    topic: 'AOP',
    prompt: {
      es: '¿Cómo aplica Spring un aspecto como @Transactional?',
      en: 'How does Spring apply an aspect such as @Transactional?',
    },
    answer: {
      es: 'Con un proxy alrededor del bean. La llamada tiene que entrar por ese proxy. Un método private, final o una llamada interna no pasa por el aspecto.',
      en: 'With a proxy around the bean. The call has to enter through that proxy. A private or final method, or an internal call, does not go through the aspect.',
    },
    distractors: [
      {
        es: 'Reescribiendo el bytecode de la clase al compilar, siempre, sin proxy.',
        en: 'By rewriting the class bytecode at compile time, always, with no proxy.',
      },
      {
        es: 'Con un listener que intercepta cualquier método anotado, también los privados.',
        en: 'With a listener that intercepts every annotated method, including private ones.',
      },
    ],
    explanation: {
      es: 'El proxy explica las reglas prácticas de @Transactional y de @Async. El tejido de bytecode existe, pero no es el camino por defecto.',
      en: 'The proxy explains the practical rules of @Transactional and of @Async. Bytecode weaving exists, but it is not the default path.',
    },
  },
  {
    id: 'be-spring-08',
    topic: 'Beans',
    prompt: {
      es: '¿Qué es un bean de Spring y en qué se diferencian @Component y @Bean?',
      en: 'What is a Spring bean, and how do @Component and @Bean differ?',
    },
    answer: {
      es: 'Un bean es un objeto que Spring crea y conecta. @Component marca una clase tuya para el escaneo. @Bean es un método de configuración que devuelve el objeto, útil para clases de terceros.',
      en: 'A bean is an object Spring creates and wires. @Component marks your own class for scanning. @Bean is a configuration method that returns the object, useful for third-party classes.',
    },
    distractors: [
      {
        es: '@Component es un singleton y @Bean crea una instancia nueva en cada inyección.',
        en: '@Component is a singleton and @Bean creates a new instance on every injection.',
      },
      {
        es: 'Son alias. Los dos solo funcionan si la clase tiene un constructor vacío.',
        en: 'They are aliases. Both work only if the class has an empty constructor.',
      },
    ],
    explanation: {
      es: 'Por defecto hay una instancia. @Autowired pide a Spring que te pase ese bean. En un único constructor la anotación ni hace falta.',
      en: 'By default there is one instance. @Autowired asks Spring to pass you that bean. On a single constructor the annotation is not even required.',
    },
  },
  {
    id: 'be-spring-09',
    topic: 'Async',
    prompt: {
      es: '¿Qué hace falta para que @Async corra de verdad en otro hilo?',
      en: 'What is required for @Async to actually run on another thread?',
    },
    answer: {
      es: 'Activarlo con @EnableAsync y llamar al método desde otro bean, para que la llamada pase por el proxy.',
      en: 'Turn it on with @EnableAsync and call the method from another bean, so the call goes through the proxy.',
    },
    distractors: [
      {
        es: 'Que el método devuelva un Future. Un método void no puede ser async.',
        en: 'That the method returns a Future. A void method cannot be async.',
      },
      {
        es: 'Un executor propio. Sin él, Spring ejecuta el método en el hilo de la llamada.',
        en: 'A custom executor. Without it, Spring runs the method on the calling thread.',
      },
    ],
    explanation: {
      es: 'Sin @EnableAsync o con una llamada interna, la anotación no hace nada. Un void es válido: solo que no ves el error con facilidad.',
      en: 'Without @EnableAsync or with an internal call, the annotation does nothing. A void method is valid: you just do not see the error easily.',
    },
  },
];
