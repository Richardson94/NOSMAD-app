import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_SOLID_ADVANCED_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-solid2-01',
    topic: 'SOLID avanzado',
    prompt: {
      es: 'Una clase Factura calcula los impuestos y además genera el HTML que se envía por correo. ¿Qué diagnostica el SRP?',
      en: 'An Invoice class computes taxes and also builds the HTML that is sent by email. What does SRP diagnose here?',
    },
    answer: {
      es: 'Hay dos actores distintos, el fiscal y el de presentación, así que el formato debe salir a un colaborador propio.',
      en: 'There are two distinct actors, the tax one and the presentation one, so formatting must move to its own collaborator.',
    },
    distractors: [
      {
        es: 'El problema es el tamaño: basta extraer métodos privados más pequeños para que cada uno haga una sola cosa.',
        en: 'The problem is size: it is enough to extract smaller private methods so each one does a single thing.',
      },
      {
        es: 'No hay violación mientras el método de formato sea puro y no modifique el estado interno de la factura.',
        en: 'There is no violation as long as the formatting method is pure and does not modify the invoice internal state.',
      },
    ],
    explanation: {
      es: 'SRP se mide por razones de cambio: Finanzas pide cambios en el cálculo y Marketing en la plantilla del correo, dos actores sobre la misma clase. Extraer métodos privados no separa nada porque el archivo sigue cambiando por ambos motivos, y que el formato sea puro es un argumento de CQS, no de SRP. La refactorización canónica es un FacturaRenderer inyectado, igual que el ejemplo de Employee con calculatePay, reportHours y save.',
      en: 'SRP is measured by reasons to change: Finance requests changes in the calculation and Marketing in the email template, two actors over the same class. Extracting private methods separates nothing because the file still changes for both reasons, and a pure formatter is a CQS argument, not an SRP one. The canonical refactoring is an injected InvoiceRenderer, just like the classic Employee example with calculatePay, reportHours and save.',
    },
  },
  {
    id: 'th-solid2-02',
    topic: 'SOLID avanzado',
    prompt: {
      es: '¿Cuándo una clase con quince métodos privados auxiliares NO está violando el SRP?',
      en: 'When is a class with fifteen private helper methods NOT violating SRP?',
    },
    answer: {
      es: 'Cuando todos esos auxiliares sirven a la misma razón de cambio y al mismo actor, porque el conteo no es el criterio.',
      en: 'When all those helpers serve the same reason to change and the same actor, because counting is not the criterion.',
    },
    distractors: [
      {
        es: 'Cuando ninguno supera las veinte líneas y la complejidad ciclomática de la clase queda bajo el umbral acordado.',
        en: 'When none of them exceeds twenty lines and the class cyclomatic complexity stays under the agreed threshold.',
      },
      {
        es: 'Cuando esos métodos no se prueban de forma directa, porque las pruebas solo deberían tocar la API pública.',
        en: 'When those methods are not tested directly, because tests should only exercise the public API.',
      },
    ],
    explanation: {
      es: 'Muchos métodos privados cohesionados son simple descomposición funcional: todos colaboran en la misma responsabilidad y cambian por el mismo motivo. Los umbrales de líneas o de complejidad son heurísticas de legibilidad y probar solo la API pública es una buena práctica de testing, pero ninguna de las dos define SRP. El indicador real es el mapa de cohesión LCOM: si los privados se agrupan en dos islas que no comparten campos, ahí sí hay dos clases escondidas.',
      en: 'Many cohesive private methods are just functional decomposition: they all collaborate on the same responsibility and change for the same reason. Line or complexity thresholds are readability heuristics and testing only the public API is a sound testing practice, but neither defines SRP. The real indicator is the LCOM cohesion metric: if the private methods split into two islands that share no fields, then there really are two hidden classes.',
    },
  },
  {
    id: 'th-solid2-03',
    topic: 'SOLID avanzado',
    prompt: {
      es: 'Un servicio exporta en CSV y PDF y ahora piden XLSX. ¿Qué diseño en Spring respeta el OCP?',
      en: 'A service exports to CSV and PDF and now XLSX is requested. Which Spring design respects OCP?',
    },
    answer: {
      es: 'Una interfaz Exportador con un método soporta(formato) e inyección de la lista de beans: el formato nuevo solo agrega una clase.',
      en: 'An Exporter interface with a supports(format) method and injection of the list of beans: the new format only adds one class.',
    },
    distractors: [
      {
        es: 'Ampliar el enum de formatos y su rama del switch en el servicio, cubriendo el caso nuevo con pruebas de regresión.',
        en: 'Extend the format enum and its switch branch inside the service, covering the new case with regression tests.',
      },
      {
        es: 'Crear una subclase del servicio de exportación que sobrescriba el método exportar para atender el formato nuevo.',
        en: 'Create a subclass of the export service that overrides the export method to handle the new format.',
      },
    ],
    explanation: {
      es: 'Spring inyecta automáticamente un List<Exportador> o un Map<String, Exportador> con todos los beans del tipo, así que el punto de variación queda en el contenedor y el orquestador no se toca nunca más. Editar el switch funciona y pasa las pruebas, pero reabre una clase estable en cada requisito nuevo; heredar del servicio acopla la subclase a los internos de la base y no escala a partir del segundo formato. Con @Order o la anotación de prioridad se controla además el orden de resolución.',
      en: 'Spring automatically injects a List<Exporter> or a Map<String, Exporter> holding every bean of that type, so the variation point lives in the container and the orchestrator is never touched again. Editing the switch works and passes the tests, but it reopens a stable class on every new requirement; subclassing the service couples the subclass to base internals and does not scale past the second format. With @Order you can also control the resolution order.',
    },
  },
  {
    id: 'th-solid2-04',
    topic: 'SOLID avanzado',
    prompt: {
      es: '¿Cuál es el riesgo de aplicar OCP antes de conocer cuál es el eje real de variación?',
      en: 'What is the risk of applying OCP before knowing the real axis of variation?',
    },
    answer: {
      es: 'Generalidad especulativa: abstracciones que nadie usa, más difíciles de leer y que casi siempre aciertan el eje equivocado.',
      en: 'Speculative generality: abstractions nobody uses, harder to read, and that almost always pick the wrong axis.',
    },
    distractors: [
      {
        es: 'El costo en ejecución del despacho dinámico y de instanciar muchos objetos pequeños de vida corta.',
        en: 'The runtime cost of dynamic dispatch and of instantiating many short lived small objects.',
      },
      {
        es: 'Violar el SRP, porque cada interfaz añadida introduce una razón de cambio adicional dentro del mismo módulo.',
        en: 'Violating SRP, because each added interface introduces one more reason to change inside the same module.',
      },
    ],
    explanation: {
      es: 'El consejo clásico es cerrar el diseño después del primer cambio real, no antes: hasta entonces no se sabe qué va a variar y una jerarquía de estrategias con una sola implementación solo agrega indirección. El costo del despacho virtual es despreciable frente al de mantener código, y añadir una interfaz no crea por sí misma una razón de cambio nueva. Aquí YAGNI y la regla de tres actúan como freno, y conviene recordar que una abstracción equivocada cuesta más que la duplicación que pretendía evitar.',
      en: 'The classic advice is to close the design after the first real change, not before: until then you do not know what will vary and a strategy hierarchy with a single implementation only adds indirection. Virtual dispatch cost is negligible compared with maintenance cost, and adding an interface does not by itself create a new reason to change. YAGNI and the rule of three act as the brake here, and it is worth remembering that a wrong abstraction costs more than the duplication it tried to remove.',
    },
  },
  {
    id: 'th-solid2-05',
    topic: 'SOLID avanzado',
    prompt: {
      es: 'Cuadrado hereda de Rectangulo y este expone setAncho y setAlto. ¿Por qué se viola el LSP?',
      en: 'Square inherits from Rectangle, which exposes setWidth and setHeight. Why is LSP violated?',
    },
    answer: {
      es: 'Porque setAncho debe tocar también el alto y rompe la postcondición que el cliente del rectángulo da por supuesta.',
      en: 'Because setWidth must also change the height and breaks the postcondition the rectangle client takes for granted.',
    },
    distractors: [
      {
        es: 'Porque un cuadrado no es realmente un rectángulo, así que la relación de herencia está mal modelada desde el dominio.',
        en: 'Because a square is not really a rectangle, so the inheritance relationship is badly modelled from the domain.',
      },
      {
        es: 'Porque Cuadrado debería redefinir equals y hashCode y la herencia impide mantener la simetría entre ambos tipos.',
        en: 'Because Square should redefine equals and hashCode, and inheritance makes it impossible to keep symmetry between both types.',
      },
    ],
    explanation: {
      es: 'El cliente escribe r.setAncho(5); r.setAlto(4); y espera área 20, pero con un Cuadrado obtiene 16: el subtipo debilita una postcondición de la base. Que un cuadrado sea o no un rectángulo en matemáticas es irrelevante, y de hecho en geometría sí lo es; lo que falla es el contrato mutable, porque con tipos inmutables y un método conAncho que devuelve una instancia nueva la jerarquía sería válida. El problema de simetría de equals existe en la herencia, pero pertenece al contrato de Object, no al LSP de estos setters.',
      en: 'The client writes r.setWidth(5); r.setHeight(4); and expects area 20, but with a Square it gets 16: the subtype weakens a postcondition of the base. Whether a square is a rectangle in mathematics is irrelevant, and in geometry it actually is; what fails is the mutable contract, because with immutable types and a withWidth method returning a new instance the hierarchy would be sound. The equals symmetry problem does exist under inheritance, but it belongs to the Object contract, not to LSP for these setters.',
    },
  },
  {
    id: 'th-solid2-06',
    topic: 'SOLID avanzado',
    prompt: {
      es: 'Collections.unmodifiableList devuelve una List cuyo add lanza UnsupportedOperationException. ¿Cómo lo juzga el LSP?',
      en: 'Collections.unmodifiableList returns a List whose add throws UnsupportedOperationException. How does LSP judge it?',
    },
    answer: {
      es: 'Es una violación: el subtipo fortalece la precondición de add y rompe en ejecución al cliente que solo conoce List.',
      en: 'It is a violation: the subtype strengthens the precondition of add and breaks at runtime any client that only knows List.',
    },
    distractors: [
      {
        es: 'No lo es, porque la propia interfaz List documenta add como operación opcional y la excepción es no comprobada.',
        en: 'It is not, because the List interface itself documents add as an optional operation and the exception is unchecked.',
      },
      {
        es: 'No lo es, porque el tipo devuelto sigue siendo List y la firma no cambia, que es lo único que exige la sustitución.',
        en: 'It is not, because the returned type is still List and the signature does not change, which is all substitution requires.',
      },
    ],
    explanation: {
      es: 'El cliente compilado contra List puede invocar add sin ningún aviso y explotar en producción, que es exactamente el síntoma que el LSP busca evitar. Que el JDK documente las operaciones opcionales es un reconocimiento pragmático del problema, no una defensa del diseño, y la firma idéntica es precisamente la trampa: la sustituibilidad es de comportamiento, no de tipos. El arreglo moderno es segregar la interfaz, como hacen las colecciones inmutables de Guava o la separación entre List y MutableList en Kotlin.',
      en: 'A client compiled against List can call add with no warning at all and blow up in production, which is exactly the symptom LSP tries to avoid. The JDK documenting optional operations is a pragmatic acknowledgement of the problem, not a defence of the design, and the identical signature is precisely the trap: substitutability is behavioural, not type based. The modern fix is to segregate the interface, as Guava immutable collections or the List and MutableList split in Kotlin do.',
    },
  },
  {
    id: 'th-solid2-07',
    topic: 'SOLID avanzado',
    prompt: {
      es: 'Una subclase quiere sobrescribir leer(), declarado throws IOException, y declarar throws Exception. ¿Qué pasa?',
      en: 'A subclass wants to override read(), declared throws IOException, and declare throws Exception. What happens?',
    },
    answer: {
      es: 'No compila: el método sobrescrito solo puede declarar excepciones comprobadas iguales o más específicas que la base.',
      en: 'It does not compile: an overriding method may only declare checked exceptions equal to or narrower than the base ones.',
    },
    distractors: [
      {
        es: 'Compila, pero al invocarla por la referencia de la base la JVM la envuelve en UndeclaredThrowableException.',
        en: 'It compiles, but when invoked through the base reference the JVM wraps it in UndeclaredThrowableException.',
      },
      {
        es: 'Compila siempre que la subclase capture la excepción y la relance sin envolverla en otro tipo comprobado.',
        en: 'It compiles as long as the subclass catches the exception and rethrows it without wrapping it in another checked type.',
      },
    ],
    explanation: {
      es: 'Es el LSP impuesto por el compilador: retorno covariante, parámetros invariantes y excepciones comprobadas contravariantes hacia lo más específico, porque el cliente solo escribió un catch de IOException. UndeclaredThrowableException existe de verdad, pero pertenece al mundo de los proxies dinámicos cuando el InvocationHandler lanza algo no declarado en la interfaz. El agujero real del lenguaje son las no comprobadas: nada impide que un subtipo lance IllegalStateException y rompa el contrato sin que el compilador diga nada.',
      en: 'This is LSP enforced by the compiler: covariant return, invariant parameters and checked exceptions narrowing down, because the client only wrote a catch for IOException. UndeclaredThrowableException is real, but it belongs to the dynamic proxy world when an InvocationHandler throws something the interface does not declare. The actual language hole is unchecked exceptions: nothing stops a subtype from throwing IllegalStateException and breaking the contract silently.',
    },
  },
  {
    id: 'th-solid2-08',
    topic: 'SOLID avanzado',
    prompt: {
      es: 'Varios servicios solo consultan pedidos pero dependen de un repositorio con guardar y eliminar. ¿Qué gana separar una interfaz de solo lectura?',
      en: 'Several services only query orders yet depend on a repository with save and delete. What is gained by splitting a read only interface?',
    },
    answer: {
      es: 'Cada cliente depende solo de lo que usa, se declara la intención en el tipo y los dobles de prueba quedan mínimos.',
      en: 'Each client depends only on what it uses, intent is declared in the type, and test doubles stay minimal.',
    },
    distractors: [
      {
        es: 'Permite que el proveedor de persistencia omita el volcado sucio y optimice la sesión al saber que no habrá escrituras.',
        en: 'It lets the persistence provider skip dirty checking and optimise the session knowing there will be no writes.',
      },
      {
        es: 'Obliga a tener dos implementaciones separadas, una por interfaz, que es justo lo que el ISP exige para evitar la interfaz gorda.',
        en: 'It forces two separate implementations, one per interface, which is exactly what ISP requires to avoid the fat interface.',
      },
    ],
    explanation: {
      es: 'El ISP mira desde el consumidor: un servicio de reportes que recibe un PedidoConsultaRepository no puede escribir por accidente y su mock solo necesita dos métodos. La optimización de la sesión es cierta pero se logra con @Transactional(readOnly = true), un mecanismo ortogonal al diseño de interfaces. Y el ISP nunca obliga a duplicar implementaciones: una única clase JpaPedidoRepository puede implementar las dos interfaces sin problema.',
      en: 'ISP looks from the consumer side: a reporting service receiving an OrderQueryRepository cannot write by accident and its mock only needs two methods. The session optimisation is real but it is achieved with @Transactional(readOnly = true), a mechanism orthogonal to interface design. And ISP never forces duplicated implementations: a single JpaOrderRepository class can implement both interfaces just fine.',
    },
  },
  {
    id: 'th-solid2-09',
    topic: 'SOLID avanzado',
    prompt: {
      es: '¿Qué distingue una "header interface" de una interfaz de rol?',
      en: 'What distinguishes a "header interface" from a role interface?',
    },
    answer: {
      es: 'La header replica todos los métodos públicos de una clase concreta; la de rol nace de lo que el cliente necesita y es pequeña.',
      en: 'A header interface mirrors every public method of one concrete class; a role interface comes from what the client needs and stays small.',
    },
    distractors: [
      {
        es: 'La header vive en el paquete del cliente y la de rol en el del implementador, y esa ubicación es la que invierte la dependencia.',
        en: 'A header interface lives in the client package and a role interface in the implementer package, and that location is what inverts the dependency.',
      },
      {
        es: 'La header solo declara constantes y tipos mientras que la de rol declara comportamiento, por eso la primera es un antipatrón.',
        en: 'A header interface only declares constants and types while a role interface declares behaviour, which is why the first one is an antipattern.',
      },
    ],
    explanation: {
      es: 'Los términos son de Martin Fowler: la header interface es la que aparece al extraer mecánicamente un ServicioImpl a un Servicio, y no desacopla nada porque cambia cada vez que cambia la clase. La interfaz de rol se descubre desde el caso de uso y suele tener uno o dos métodos, lo que la hace reutilizable y fácil de sustituir. La interfaz que solo declara constantes es otro antipatrón distinto, el Constant Interface, y la ubicación del paquete corresponde al DIP, no a esta distinción.',
      en: 'The terms come from Martin Fowler: a header interface is what appears when you mechanically extract a ServiceImpl into a Service, and it decouples nothing because it changes every time the class changes. A role interface is discovered from the use case and usually has one or two methods, which makes it reusable and easy to substitute. The interface that only declares constants is a different antipattern, the Constant Interface, and package location belongs to DIP, not to this distinction.',
    },
  },
  {
    id: 'th-solid2-10',
    topic: 'SOLID avanzado',
    prompt: {
      es: 'En arquitectura hexagonal, ¿en qué módulo debe declararse el puerto NotificadorDePagos?',
      en: 'In hexagonal architecture, in which module should the PaymentNotifier port be declared?',
    },
    answer: {
      es: 'En el módulo de alto nivel que lo consume; el adaptador de infraestructura lo implementa y depende hacia el dominio.',
      en: 'In the high level module that consumes it; the infrastructure adapter implements it and depends inwards towards the domain.',
    },
    distractors: [
      {
        es: 'En el módulo de infraestructura, junto a su implementación, para que un cambio de tecnología quede confinado en un paquete.',
        en: 'In the infrastructure module, next to its implementation, so that a technology change stays confined to a single package.',
      },
      {
        es: 'Da igual el paquete mientras se registre como bean y se inyecte por constructor, porque el contenedor resuelve el acoplamiento.',
        en: 'The package does not matter as long as it is registered as a bean and injected by constructor, because the container resolves the coupling.',
      },
    ],
    explanation: {
      es: 'El DIP invierte la propiedad de la abstracción: el dominio define el contrato que necesita y la infraestructura se pliega a él, de modo que la flecha de compilación apunta en contra del flujo de control. Dejar la interfaz junto al adaptador parece cohesivo pero obliga al dominio a importar infraestructura, que es justo la dependencia que se quería eliminar. El patrón se llama Separated Interface, y el contenedor solo cablea instancias en ejecución: no cambia ni una de las dependencias de compilación.',
      en: 'DIP inverts ownership of the abstraction: the domain defines the contract it needs and infrastructure conforms to it, so the compile time arrow points against the flow of control. Placing the interface next to the adapter looks cohesive but forces the domain to import infrastructure, which is exactly the dependency you wanted to remove. The pattern is called Separated Interface, and the container only wires instances at runtime: it does not change a single compile time dependency.',
    },
  },
  {
    id: 'th-solid2-11',
    topic: 'SOLID avanzado',
    prompt: {
      es: 'Dos componentes se referencian mutuamente. ¿Cuáles son las dos formas canónicas de romper el ciclo según el ADP?',
      en: 'Two components reference each other. What are the two canonical ways to break the cycle according to the ADP?',
    },
    answer: {
      es: 'Aplicar DIP con una interfaz que declare el cliente y el otro implemente, o extraer un tercer componente del que ambos dependan.',
      en: 'Apply DIP with an interface declared by the client and implemented by the other, or extract a third component both depend on.',
    },
    distractors: [
      {
        es: 'Marcar una de las dependencias como @Lazy o pasarla por setter, que es la forma estándar de resolver la referencia circular.',
        en: 'Mark one dependency as @Lazy or inject it through a setter, which is the standard way of resolving the circular reference.',
      },
      {
        es: 'Fusionar los dos componentes en uno solo, porque un ciclo demuestra que comparten la misma razón de cambio.',
        en: 'Merge both components into one, because a cycle proves they share the same reason to change.',
      },
    ],
    explanation: {
      es: 'El Principio de Dependencias Acíclicas exige que el grafo de componentes sea un DAG para poder compilar, versionar y desplegar por capas; las dos soluciones descritas por Robert C. Martin son exactamente DIP y la extracción de un componente nuevo. @Lazy o la inyección por setter resuelven un problema real pero distinto, el ciclo de instanciación de beans, y de hecho Spring Boot prohíbe las referencias circulares por defecto desde la versión 2.6. Fusionar es válido solo si la cohesión lo justifica, pero normalmente crea un componente que viola el CCP.',
      en: 'The Acyclic Dependencies Principle requires the component graph to be a DAG so it can be compiled, versioned and released in layers; the two solutions described by Robert C. Martin are exactly DIP and extracting a new component. @Lazy or setter injection solve a real but different problem, the bean instantiation cycle, and in fact Spring Boot forbids circular references by default since version 2.6. Merging is valid only when cohesion justifies it, but it usually produces a component that violates CCP.',
    },
  },
  {
    id: 'th-solid2-12',
    topic: 'SOLID avanzado',
    prompt: {
      es: '¿Qué exige el Principio de Dependencias Estables (SDP)?',
      en: 'What does the Stable Dependencies Principle (SDP) require?',
    },
    answer: {
      es: 'Que cada componente dependa solo de otros con inestabilidad igual o menor, es decir en el sentido de la estabilidad.',
      en: 'That each component depends only on others with equal or lower instability, that is, in the direction of stability.',
    },
    distractors: [
      {
        es: 'Que ningún componente cambie más de una vez por iteración, midiendo la estabilidad como frecuencia de commits.',
        en: 'That no component changes more than once per iteration, measuring stability as commit frequency.',
      },
      {
        es: 'Que los componentes más estables concentren las dependencias salientes, ya que son los que orquestan al resto.',
        en: 'That the most stable components concentrate the outgoing dependencies, since they orchestrate the rest.',
      },
    ],
    explanation: {
      es: 'La inestabilidad se calcula como I = Ce / (Ca + Ce), donde 0 es máxima estabilidad y 1 máxima inestabilidad, y el SDP dice que la I debe decrecer al avanzar por las flechas de dependencia. Estable no significa que no cambie de hecho, sino que es difícil de cambiar porque mucho depende de él; la frecuencia de commits es un síntoma, no la métrica. Un componente estable que depende de uno volátil es la violación típica y se corrige invirtiendo esa arista con DIP.',
      en: 'Instability is computed as I = Ce / (Ca + Ce), where 0 is maximum stability and 1 maximum instability, and SDP says I must decrease as you follow the dependency arrows. Stable does not mean it never changes in practice, it means it is hard to change because many modules depend on it; commit frequency is a symptom, not the metric. A stable component depending on a volatile one is the typical violation and is fixed by inverting that edge with DIP.',
    },
  },
  {
    id: 'th-solid2-13',
    topic: 'SOLID avanzado',
    prompt: {
      es: 'Un componente mide abstracción A cercana a 0 e inestabilidad I cercana a 0. ¿Dónde está según el SAP?',
      en: 'A component measures abstractness A close to 0 and instability I close to 0. Where does it sit according to SAP?',
    },
    answer: {
      es: 'En la zona de dolor: es concreto y muy dependido, así que resulta rígido y carísimo de modificar.',
      en: 'In the zone of pain: it is concrete and heavily depended upon, so it is rigid and extremely expensive to change.',
    },
    distractors: [
      {
        es: 'En la zona de inutilidad: es abstracto y nadie lo usa, de modo que se trata de código muerto candidato a borrarse.',
        en: 'In the zone of uselessness: it is abstract and nobody uses it, so it is dead code and a deletion candidate.',
      },
      {
        es: 'Sobre la secuencia principal, porque al ser bajas ambas métricas su distancia D al equilibrio también es mínima.',
        en: 'On the main sequence, because with both metrics low its distance D to the balance point is also minimal.',
      },
    ],
    explanation: {
      es: 'El Principio de Abstracciones Estables pide A + I cercano a 1, y la distancia se mide como D = |A + I - 1|; con A y I en 0 la distancia es 1, el peor valor posible. La zona de inutilidad es la esquina opuesta, con A e I cercanas a 1: abstracciones que nadie implementa ni consume. Un esquema de base de datos o una librería de utilidades concreta suelen caer en la zona de dolor, y solo es tolerable cuando de verdad no cambia nunca, como ocurre con java.lang.String.',
      en: 'The Stable Abstractions Principle asks for A + I close to 1, and the distance is measured as D = |A + I - 1|; with A and I at 0 the distance is 1, the worst possible value. The zone of uselessness is the opposite corner, with A and I close to 1: abstractions nobody implements or consumes. A database schema or a concrete utility library usually lands in the zone of pain, and it is only tolerable when it truly never changes, as happens with java.lang.String.',
    },
  },
  {
    id: 'th-solid2-14',
    topic: 'SOLID avanzado',
    prompt: {
      es: '¿Qué criterio da el Principio de Clausura Común (CCP) para decidir qué clases van juntas en un componente?',
      en: 'What criterion does the Common Closure Principle (CCP) give to decide which classes belong together in a component?',
    },
    answer: {
      es: 'Agrupar las clases que cambian por los mismos motivos y al mismo tiempo, para que un requisito nuevo toque un solo componente.',
      en: 'Group the classes that change for the same reasons and at the same time, so a new requirement touches a single component.',
    },
    distractors: [
      {
        es: 'Agrupar las clases que los clientes usan siempre juntas, para no obligarles a redesplegar por cambios que no les afectan.',
        en: 'Group the classes that clients always use together, so they are not forced to redeploy for changes that do not affect them.',
      },
      {
        es: 'Agrupar por capa técnica, controladores con controladores y repositorios con repositorios, para mantener un solo nivel de abstracción.',
        en: 'Group by technical layer, controllers with controllers and repositories with repositories, to keep a single abstraction level.',
      },
    ],
    explanation: {
      es: 'El CCP es el SRP llevado al nivel de componente: si un cambio de requisito obliga a tocar cinco paquetes, el empaquetado está mal y el costo de despliegue se multiplica. Lo que describe la primera opción incorrecta es el CRP, un principio distinto y de hecho en tensión con el CCP, porque uno es inclusivo y el otro exclusivo. Aplicado en la práctica, el CCP favorece el empaquetado por funcionalidad frente al empaquetado por capa técnica.',
      en: 'CCP is SRP raised to component level: if one requirement change forces you to touch five packages, the packaging is wrong and deployment cost multiplies. What the first wrong option describes is CRP, a different principle that is actually in tension with CCP, because one is inclusive and the other exclusive. Applied in practice, CCP favours package by feature over package by technical layer.',
    },
  },
  {
    id: 'th-solid2-15',
    topic: 'SOLID avanzado',
    prompt: {
      es: '¿Qué problema evita el Principio de Reutilización Conjunta (CRP)?',
      en: 'What problem does the Common Reuse Principle (CRP) prevent?',
    },
    answer: {
      es: 'Que un componente arrastre clases sin relación de uso y obligue al cliente a revalidar y redesplegar por cambios que no le tocan.',
      en: 'That a component drags in unrelated classes and forces the client to revalidate and redeploy for changes that do not concern it.',
    },
    distractors: [
      {
        es: 'Que la misma clase aparezca copiada en dos componentes distintos, obligando a mantener dos versiones del mismo código.',
        en: 'That the same class ends up copied into two different components, forcing two versions of the same code to be maintained.',
      },
      {
        es: 'Que una clase dependa de métodos de una interfaz que no usa, por lo que conviene partir esa interfaz por roles.',
        en: 'That a class depends on interface methods it does not use, which is why that interface should be split by roles.',
      },
    ],
    explanation: {
      es: 'El CRP es la versión del ISP a escala de componente: no dependas de lo que no necesitas, porque cuando llega una versión nueva del artefacto tendrás que recompilar y volver a certificar aunque el cambio esté en una clase que jamás invocas. La segunda opción describe el ISP, correcta pero en el nivel de clases e interfaces, y la primera describe una violación de DRY. El CRP es un principio exclusivo que empuja a componentes pequeños, justo en contra del CCP, y el equilibrio entre ambos se ajusta con la madurez del proyecto.',
      en: 'CRP is ISP at component scale: do not depend on what you do not need, because when a new artifact version ships you must recompile and recertify even if the change lives in a class you never call. The second option describes ISP, which is correct but at the class and interface level, and the first describes a DRY violation. CRP is an exclusive principle that pushes towards small components, right against CCP, and the balance between them shifts as the project matures.',
    },
  },
  {
    id: 'th-solid2-16',
    topic: 'SOLID avanzado',
    prompt: {
      es: '¿Qué implica el Principio de Equivalencia entre Reutilización y Liberación (REP)?',
      en: 'What does the Reuse Release Equivalence Principle (REP) imply?',
    },
    answer: {
      es: 'Que las clases de un componente se liberan juntas con un número de versión y notas de cambio: no se reutiliza lo que no se libera.',
      en: 'That the classes in a component are released together under a version number with release notes: you cannot reuse what is not released.',
    },
    distractors: [
      {
        es: 'Que cada clase reutilizable se publique en su propio artefacto, para que el consumidor tome exactamente lo que necesita.',
        en: 'That each reusable class is published in its own artifact, so the consumer takes exactly what it needs.',
      },
      {
        es: 'Que cada cambio publicado incremente la parte mayor de la versión, garantizando que el consumidor revise las notas.',
        en: 'That every published change increments the major version, guaranteeing the consumer reviews the release notes.',
      },
    ],
    explanation: {
      es: 'El REP dice que la unidad de reutilización es la unidad de liberación: un artefacto Maven o un paquete npm con versión, changelog y una promesa de compatibilidad, porque sin eso el consumidor acaba copiando fuentes. Fragmentar en un artefacto por clase es llevar el CRP al absurdo y produce un infierno de versiones cruzadas. El versionado semántico es el mecanismo habitual de seguimiento y reserva el incremento mayor para los cambios que rompen compatibilidad, no para cualquier publicación.',
      en: 'REP says the unit of reuse is the unit of release: a Maven artifact or an npm package with a version, a changelog and a compatibility promise, because without that the consumer ends up copying sources. Splitting into one artifact per class pushes CRP to absurdity and creates cross version hell. Semantic versioning is the usual tracking mechanism and reserves the major bump for breaking changes, not for every publication.',
    },
  },
  {
    id: 'th-solid2-17',
    topic: 'SOLID avanzado',
    prompt: {
      es: '¿Qué propone el principio "dime, no preguntes"?',
      en: 'What does the "tell, do not ask" principle propose?',
    },
    answer: {
      es: 'Enviar al objeto un mensaje con la intención y dejar que decida con sus propios datos, en vez de extraer su estado y decidir fuera.',
      en: 'Send the object a message with the intent and let it decide using its own data, instead of pulling out its state and deciding outside.',
    },
    distractors: [
      {
        es: 'Eliminar por completo los getters, ya que cualquier consulta del estado revela la representación interna del objeto.',
        en: 'Remove getters entirely, since any state query reveals the internal representation of the object.',
      },
      {
        es: 'No encadenar más de una llamada sobre el resultado de un getter, que es la formulación práctica del menor conocimiento.',
        en: 'Never chain more than one call on the result of a getter, which is the practical formulation of least knowledge.',
      },
    ],
    explanation: {
      es: 'Se trata de mover el comportamiento junto a los datos: cuenta.retirar(monto) en lugar de un if externo que consulta getSaldo y luego llama a setSaldo, porque esa segunda forma deja la regla fuera del objeto y produce un modelo de dominio anémico. Prohibir todos los getters es una exageración: la serialización, las plantillas y los DTO necesitan leer estado legítimamente. La regla de no encadenar getters es la Ley de Demeter, emparentada pero centrada en el acoplamiento estructural y no en dónde vive la decisión.',
      en: 'The idea is to move behaviour next to the data: account.withdraw(amount) instead of an external if that reads getBalance and then calls setBalance, because that second shape leaves the rule outside the object and produces an anemic domain model. Banning every getter is an exaggeration: serialization, templates and DTOs legitimately need to read state. The rule about not chaining getters is the Law of Demeter, a relative of this one but focused on structural coupling rather than on where the decision lives.',
    },
  },
  {
    id: 'th-solid2-18',
    topic: 'SOLID avanzado',
    prompt: {
      es: 'Queue.poll() elimina el primer elemento y además lo devuelve. ¿Cómo lo evalúa la separación comando consulta de Meyer?',
      en: 'Queue.poll() removes the first element and also returns it. How does the Meyer command query separation evaluate it?',
    },
    answer: {
      es: 'Mezcla comando y consulta, algo que la CQS desaconseja, aunque se acepta como excepción porque separarlo no sería atómico.',
      en: 'It mixes command and query, which CQS discourages, although it is accepted as an exception because splitting it would not be atomic.',
    },
    distractors: [
      {
        es: 'No aplica: la CQS es un patrón de arquitectura que separa el modelo de escritura y el de lectura en almacenes distintos.',
        en: 'It does not apply: CQS is an architectural pattern separating the write model and the read model into different stores.',
      },
      {
        es: 'No hay problema porque poll devuelve null en lugar de lanzar, y la CQS solo exige que las consultas no lancen excepciones.',
        en: 'There is no problem because poll returns null instead of throwing, and CQS only requires that queries do not throw.',
      },
    ],
    explanation: {
      es: 'Bertrand Meyer formuló la CQS en Eiffel: un método es o un comando que cambia estado y devuelve void, o una consulta que devuelve un valor sin efectos secundarios y puede llamarse las veces que haga falta. Las operaciones de extracción como poll, pop o Iterator.next son la excepción clásica porque separarlas en leer y luego borrar abriría una condición de carrera en entornos concurrentes. Lo que describe la primera opción incorrecta es CQRS, el pariente arquitectónico que aplica la misma idea a nivel de sistema, no de método.',
      en: 'Bertrand Meyer formulated CQS in Eiffel: a method is either a command that changes state and returns void, or a query that returns a value with no side effects and can be called as many times as needed. Extraction operations such as poll, pop or Iterator.next are the classic exception, because splitting them into read and then remove would open a race condition in concurrent environments. What the first wrong option describes is CQRS, the architectural relative that applies the same idea at system level, not at method level.',
    },
  },
  {
    id: 'th-solid2-19',
    topic: 'SOLID avanzado',
    prompt: {
      es: 'En diseño por contrato, ¿qué diferencia a una invariante de una precondición o una postcondición?',
      en: 'In design by contract, what makes an invariant different from a precondition or a postcondition?',
    },
    answer: {
      es: 'La invariante vale antes y después de toda operación pública; la precondición obliga al llamador y la postcondición al proveedor.',
      en: 'The invariant holds before and after every public operation; the precondition binds the caller and the postcondition binds the supplier.',
    },
    distractors: [
      {
        es: 'La invariante se comprueba solo en el constructor, por eso los objetos inmutables no necesitan declarar ninguna.',
        en: 'The invariant is checked only in the constructor, which is why immutable objects do not need to declare any.',
      },
      {
        es: 'La invariante es responsabilidad del llamador igual que la precondición, y solo la postcondición compromete a la clase.',
        en: 'The invariant is the responsibility of the caller just like the precondition, and only the postcondition binds the class.',
      },
    ],
    explanation: {
      es: 'La invariante describe el estado siempre válido de la instancia, por ejemplo que el saldo nunca sea negativo, y puede romperse temporalmente dentro de un método mientras se restaure al salir. Pre y postcondición son locales a una operación y reparten la culpa: si falla una precondición el error es del llamador y se señala con IllegalArgumentException, mientras que una postcondición rota es un defecto del proveedor y suele manifestarse con AssertionError o IllegalStateException. Un inmutable sí tiene invariantes, solo que se validan una vez en el constructor y ya no pueden romperse.',
      en: 'The invariant describes the always valid state of the instance, for example that the balance is never negative, and it may be temporarily broken inside a method as long as it is restored on exit. Preconditions and postconditions are local to one operation and assign blame: a failed precondition is a caller bug signalled with IllegalArgumentException, while a broken postcondition is a supplier defect usually surfacing as AssertionError or IllegalStateException. An immutable object does have invariants, they are simply validated once in the constructor and can no longer be broken.',
    },
  },
  {
    id: 'th-solid2-20',
    topic: 'SOLID avanzado',
    prompt: {
      es: 'Dos módulos tienen el mismo bloque de código pero por razones de negocio distintas. ¿Qué conviene hacer?',
      en: 'Two modules share the same block of code but for different business reasons. What is the sensible move?',
    },
    answer: {
      es: 'Dejar la duplicación: DRY habla de conocimiento único, y unificar ataría dos razones de cambio independientes.',
      en: 'Keep the duplication: DRY is about single knowledge, and unifying would tie together two independent reasons to change.',
    },
    distractors: [
      {
        es: 'Extraer el bloque a una utilidad compartida y parametrizar las diferencias con banderas booleanas, aplicando DRY.',
        en: 'Extract the block into a shared utility and parametrise the differences with boolean flags, applying DRY.',
      },
      {
        es: 'Subir el bloque a una clase base común y dejar que cada módulo sobrescriba lo que difiera, aprovechando el polimorfismo.',
        en: 'Push the block up into a common base class and let each module override whatever differs, leveraging polymorphism.',
      },
    ],
    explanation: {
      es: 'La formulación original dice que cada pieza de conocimiento debe tener una representación única y autorizada en el sistema, así que dos textos idénticos que codifican reglas distintas son duplicación accidental y separarlas es lo correcto. Unificar con banderas booleanas produce el olor de flag argument y un método que hace dos cosas, y subirlo a una clase base añade además el problema de la clase base frágil. La regla práctica es que la abstracción equivocada sale más cara que la duplicación, y en sistemas distribuidos compartir código entre servicios por DRY crea acoplamiento de despliegue.',
      en: 'The original formulation says every piece of knowledge must have a single, unambiguous and authoritative representation in the system, so two identical texts encoding different rules are accidental duplication and keeping them apart is correct. Unifying with boolean flags produces the flag argument smell and a method that does two things, and pushing it into a base class adds the fragile base class problem on top. The practical rule is that the wrong abstraction costs more than duplication, and in distributed systems sharing code between services for DRY creates deployment coupling.',
    },
  },
];
