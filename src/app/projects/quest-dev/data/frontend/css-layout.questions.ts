import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_CSS_LAYOUT_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-css-01',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Qué son el eje principal y el eje transversal en flexbox, y qué significa el atajo flex?',
      en: 'What are the main axis and the cross axis in flexbox, and what does the flex shorthand mean?',
    },
    answer: {
      es: 'El eje principal sigue flex-direction y el transversal es el perpendicular; el atajo flex asigna flex-grow, flex-shrink y flex-basis en ese orden.',
      en: 'The main axis follows flex-direction and the cross axis is the perpendicular one; the flex shorthand assigns flex-grow, flex-shrink and flex-basis in that order.',
    },
    distractors: [
      {
        es: 'El eje principal es siempre horizontal; flex: 1 solo activa flex-grow y deja flex-basis en auto.',
        en: 'The main axis is always horizontal; flex: 1 only turns on flex-grow and leaves flex-basis as auto.',
      },
      {
        es: 'El eje transversal sigue flex-direction; el atajo flex equivale a justify-content, align-items y gap.',
        en: 'The cross axis follows flex-direction; the flex shorthand equals justify-content, align-items and gap.',
      },
    ],
    explanation: {
      es: 'Con flex-direction: column el eje principal pasa a ser vertical y justify-content reparte en vertical, no en horizontal. El atajo flex: 1 equivale a flex-grow: 1, flex-shrink: 1 y flex-basis: 0%, no a dejar el tamaño base en auto. align-items alinea en el eje transversal, que es el perpendicular a flex-direction.',
      en: 'With flex-direction: column the main axis becomes vertical and justify-content distributes along the vertical, not the horizontal. The shorthand flex: 1 equals flex-grow: 1, flex-shrink: 1 and flex-basis: 0%, not leaving the base size as auto. align-items aligns on the cross axis, which is perpendicular to flex-direction.',
    },
  },
  {
    id: 'fe-css-02',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Cómo se relacionan flex-basis y width, y por qué min-width: auto provoca desborde?',
      en: 'How do flex-basis and width relate, and why does min-width: auto cause overflow?',
    },
    answer: {
      es: 'flex-basis es el tamaño de partida en el eje principal antes de crecer o encoger; min-width: auto impide encoger por debajo del contenido intrínseco y eso desborda el contenedor.',
      en: 'flex-basis is the starting size on the main axis before growing or shrinking; min-width: auto prevents shrinking below the intrinsic content and that overflows the container.',
    },
    distractors: [
      {
        es: 'width siempre gana a flex-basis en una fila; el desborde ocurre solo si flex-shrink vale 0.',
        en: 'width always wins over flex-basis in a row; overflow happens only when flex-shrink is 0.',
      },
      {
        es: 'flex-basis se ignora si existe width; min-width: auto permite encoger hasta cero y nunca provoca overflow.',
        en: 'flex-basis is ignored when width exists; min-width: auto allows shrinking to zero and never causes overflow.',
      },
    ],
    explanation: {
      es: 'En un contenedor con display: flex, flex-basis gana a width en el eje principal salvo que flex-basis sea auto. El valor inicial min-width: auto (o min-height en columna) impide que el item se encoja por debajo de su min-content. El arreglo habitual es min-width: 0, no subir flex-shrink.',
      en: 'In a container with display: flex, flex-basis wins over width on the main axis unless flex-basis is auto. The initial value min-width: auto (or min-height in a column) stops the item from shrinking below its min-content. The usual fix is min-width: 0, not raising flex-shrink.',
    },
  },
  {
    id: 'fe-css-03',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Cuándo conviene CSS Grid con áreas frente a flexbox?',
      en: 'When is CSS Grid with areas a better fit than flexbox?',
    },
    answer: {
      es: 'Cuando el diseño es bidimensional y regiones con nombre deben ocupar filas y columnas a la vez, usando grid-template-areas.',
      en: 'When the layout is two-dimensional and named regions must occupy rows and columns at once, using grid-template-areas.',
    },
    distractors: [
      {
        es: 'grid-template-areas solo sirve para cabeceras; flex-wrap ya coloca items en dos ejes de forma verdadera.',
        en: 'grid-template-areas is only useful for headers; flex-wrap already places items on two axes in a true way.',
      },
      {
        es: 'Las áreas de grid son un alias decorativo; la herramienta bidimensional real es position: absolute sobre un flex.',
        en: 'Grid areas are a decorative alias; the real two-dimensional tool is position: absolute on top of a flex container.',
      },
    ],
    explanation: {
      es: 'grid-template-areas nombra celdas de una cuadrícula bidimensional, de modo que header, aside y main pueden ocupar varias pistas sin anidar contenedores. flex-wrap solo pasa items al siguiente renglón: sigue siendo un flujo unidimensional. position: absolute saca el elemento del flujo y no sustituye las pistas de grid.',
      en: 'grid-template-areas names cells of a two-dimensional grid, so header, aside and main can span several tracks without nesting containers. flex-wrap only wraps items onto the next line: it remains a one-dimensional flow. position: absolute takes the element out of flow and does not replace grid tracks.',
    },
  },
  {
    id: 'fe-css-04',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Qué diferencia hay entre auto-fit y auto-fill combinados con minmax?',
      en: 'What is the difference between auto-fit and auto-fill when combined with minmax?',
    },
    answer: {
      es: 'auto-fill conserva pistas vacías; auto-fit colapsa las pistas vacías para que los items restantes se expandan. Junto a minmax crean columnas fluidas sin media queries.',
      en: 'auto-fill keeps empty tracks; auto-fit collapses empty tracks so the remaining items expand. Together with minmax they create fluid columns without media queries.',
    },
    distractors: [
      {
        es: 'auto-fit crea siempre más columnas que auto-fill; minmax se ignora cuando se usa cualquiera de los dos.',
        en: 'auto-fit always creates more columns than auto-fill; minmax is ignored when either of them is used.',
      },
      {
        es: 'auto-fill colapsa las pistas vacías y auto-fit deja columnas fantasma que siguen ocupando espacio.',
        en: 'auto-fill collapses empty tracks and auto-fit leaves ghost columns that still occupy space.',
      },
    ],
    explanation: {
      es: 'La receta típica es grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr)). auto-fill reserva huecos vacíos al final si caben más pistas del mínimo; auto-fit las colapsa a 0 y los 1fr restantes crecen. minmax no se ignora: fija el suelo y el techo de cada pista repetida.',
      en: 'The typical recipe is grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr)). auto-fill reserves empty slots at the end if more tracks of the minimum fit; auto-fit collapses them to 0 and the remaining 1fr tracks grow. minmax is not ignored: it sets the floor and the ceiling of each repeated track.',
    },
  },
  {
    id: 'fe-css-05',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Para qué sirve gap en flexbox y por qué ya no hacen falta los márgenes negativos?',
      en: 'What is gap for in flexbox, and why are negative margins no longer needed?',
    },
    answer: {
      es: 'gap pone espacio solo entre items, sin margen extra en el último; el truco de margen negativo en el contenedor más margen en los hijos deja de ser necesario.',
      en: 'gap puts space only between items, with no extra margin on the last one; the trick of a negative margin on the container plus margin on the children is no longer needed.',
    },
    distractors: [
      {
        es: 'gap solo funciona en grid; en flexbox sigue haciendo falta margin-right y un margen negativo en el padre.',
        en: 'gap only works in grid; in flexbox you still need margin-right and a negative margin on the parent.',
      },
      {
        es: 'gap añade espacio también alrededor del contenedor, sustituye a padding y hace innecesario overflow: hidden.',
        en: 'gap also adds space around the container, replaces padding and makes overflow: hidden unnecessary.',
      },
    ],
    explanation: {
      es: 'Desde que gap aplica a display: flex, el espacio vive entre los items y no en el borde exterior, así que no hay que anular el margin-right del último hijo. El patrón antiguo usaba un margin negativo en el contenedor para compensar esos márgenes y a veces overflow: hidden para recortar el desborde. gap no reemplaza padding: el relleno interno del contenedor sigue siendo padding.',
      en: 'Since gap applies to display: flex, the space lives between items and not on the outer edge, so you do not need to cancel the margin-right of the last child. The old pattern used a negative margin on the container to offset those margins and sometimes overflow: hidden to clip the overflow. gap does not replace padding: inner spacing of the container is still padding.',
    },
  },
  {
    id: 'fe-css-06',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Cómo se calcula la especificidad entre id, clase y elemento, y qué papel tiene important?',
      en: 'How is specificity calculated among id, class and element, and what role does important play?',
    },
    answer: {
      es: 'Un id vence a una clase y una clase vence a un elemento; important gana la cascada dentro del mismo origen y capa, pero no cambia los números de especificidad.',
      en: 'An id beats a class and a class beats an element; important wins the cascade within the same origin and layer, but it does not change the specificity numbers.',
    },
    distractors: [
      {
        es: 'important multiplica la especificidad por mil; un elemento con important vence a un id solo si el elemento va después en el archivo.',
        en: 'important multiplies specificity by one thousand; an element with important beats an id only if the element comes later in the file.',
      },
      {
        es: 'Una clase siempre vence a un elemento aunque este lleve important; un id nunca pierde frente a una clase.',
        en: 'A class always beats an element even if the element has important; an id never loses to a class.',
      },
    ],
    explanation: {
      es: 'La especificidad de #nav.item a es (1, 1, 1) en el modelo (id, clase, tipo). !important no suma puntos: solo cambia el origen de la declaración frente a las normales de la misma capa. Otra !important más específica o posterior la anula, y un selector de clase no vence a un id sin important.',
      en: 'The specificity of #nav.item a is (1, 1, 1) in the (id, class, type) model. !important does not add points: it only changes the origin of the declaration against normal ones in the same layer. Another more specific or later !important overrides it, and a class selector does not beat an id without important.',
    },
  },
  {
    id: 'fe-css-07',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Qué aportan las capas de cascada y el selector where con especificidad cero?',
      en: 'What do cascade layers and the where selector with zero specificity add?',
    },
    answer: {
      es: 'La regla layer ordena grupos enteros de estilos; where mantiene el selector en especificidad (0, 0, 0) para no pelear con las clases de utilidad.',
      en: 'The layer rule orders entire groups of styles; where keeps the selector at specificity (0, 0, 0) so it does not fight utility classes.',
    },
    distractors: [
      {
        es: 'where tiene la misma especificidad que is; layer solo funciona si cada regla lleva important.',
        en: 'where has the same specificity as is; layer only works if every rule carries important.',
      },
      {
        es: 'Las capas sustituyen por completo a la especificidad; where sube la especificidad igual que not.',
        en: 'Layers fully replace specificity; where raises specificity the same way not does.',
      },
    ],
    explanation: {
      es: '@layer utilities, components, base define un orden: una clase de utilidad en una capa posterior gana a un id de una capa anterior. :where(.card) tiene especificidad cero, a diferencia de :is(.card) que toma la del argumento más específico. :not() sí suma la especificidad de su selector interno, que es justo lo que where evita.',
      en: '@layer utilities, components, base define an order: a utility class in a later layer beats an id from an earlier layer. :where(.card) has zero specificity, unlike :is(.card) which takes that of the most specific argument. :not() does add the specificity of its inner selector, which is exactly what where avoids.',
    },
  },
  {
    id: 'fe-css-08',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Qué crea un contexto de apilamiento y por qué z-index necesita posicionamiento o transform?',
      en: 'What creates a stacking context, and why does z-index need positioning or transform?',
    },
    answer: {
      es: 'z-index solo aplica a elementos posicionados o a los que ya crean contexto con transform, opacity menor que 1 u otras propiedades; sin eso el valor se ignora.',
      en: 'z-index only applies to positioned elements or to those that already create a context with transform, opacity less than 1 or other properties; without that the value is ignored.',
    },
    distractors: [
      {
        es: 'z-index funciona en cualquier elemento del flujo normal; transform solo afecta al 3D y no al apilamiento.',
        en: 'z-index works on any element in normal flow; transform only affects 3D and not stacking.',
      },
      {
        es: 'Un contexto de apilamiento se crea solo con position: relative más z-index; transform nunca crea uno.',
        en: 'A stacking context is created only by position: relative plus z-index; transform never creates one.',
      },
    ],
    explanation: {
      es: 'La propiedad z-index se ignora si position es static y no hay otro disparador de contexto. transform: translateZ(0), opacity: 0.99, filter y isolation: isolate también crean un contexto de apilamiento, y entonces z-index sí aplica aunque position siga en static. Los hijos no pueden pintarse por encima de un hermano del padre una vez cerrado ese contexto.',
      en: 'The z-index property is ignored if position is static and there is no other context trigger. transform: translateZ(0), opacity: 0.99, filter and isolation: isolate also create a stacking context, and then z-index does apply even if position stays static. Children cannot paint above a sibling of the parent once that context is closed.',
    },
  },
  {
    id: 'fe-css-09',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Qué diferencia hay entre box-sizing: border-box y content-box?',
      en: 'What is the difference between box-sizing: border-box and content-box?',
    },
    answer: {
      es: 'border-box incluye padding y border dentro de width; content-box los suma fuera del width declarado.',
      en: 'border-box includes padding and border inside width; content-box adds them outside the declared width.',
    },
    distractors: [
      {
        es: 'border-box incluye el margin en width; content-box incluye el padding pero no el border.',
        en: 'border-box includes margin inside width; content-box includes padding but not the border.',
      },
      {
        es: 'Ambos incluyen el padding; la diferencia es solo si outline cuenta para el width.',
        en: 'Both include padding; the only difference is whether outline counts toward width.',
      },
    ],
    explanation: {
      es: 'Con box-sizing: content-box, el valor por defecto, width: 200px más padding: 20px y border: 2px resulta en 244px de caja borde. border-box mete padding y border dentro de esos 200px, que es lo que se espera al maquetar columnas. margin y outline nunca entran en el cálculo de width de ninguno de los dos modelos.',
      en: 'With box-sizing: content-box, the default, width: 200px plus padding: 20px and border: 2px results in a 244px border box. border-box puts padding and border inside those 200px, which is what you expect when laying out columns. margin and outline never enter the width calculation of either model.',
    },
  },
  {
    id: 'fe-css-10',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Cuáles son las reglas del colapso de márgenes?',
      en: 'What are the rules of margin collapsing?',
    },
    answer: {
      es: 'Los márgenes verticales de cajas de bloque adyacentes en flujo normal se combinan en el mayor; no colapsan entre items de flex o grid, ni en horizontal, ni si overflow no es visible.',
      en: 'Vertical margins of adjacent block boxes in normal flow combine into the larger one; they do not collapse between flex or grid items, nor horizontally, nor if overflow is not visible.',
    },
    distractors: [
      {
        es: 'Los márgenes colapsan siempre en todas las direcciones, también entre items flex; el padding nunca detiene el colapso.',
        en: 'Margins always collapse in every direction, including between flex items; padding never stops the collapse.',
      },
      {
        es: 'Solo el margin-top del primer hijo colapsa; el margin-bottom nunca se combina con el del padre.',
        en: 'Only the margin-top of the first child collapses; margin-bottom never combines with that of the parent.',
      },
    ],
    explanation: {
      es: 'margin-top y margin-bottom de hermanos de bloque, o de padre e hijo sin padding ni border de por medio, se funden en un solo margen. Un padding-top o un border-top en el padre, o overflow: auto, impiden ese colapso con el hijo. En un contenedor con display: flex o display: grid los márgenes de los items no colapsan, y margin-left con margin-right nunca lo hacen.',
      en: 'margin-top and margin-bottom of block siblings, or of parent and child with no padding or border in between, merge into a single margin. A padding-top or a border-top on the parent, or overflow: auto, prevents that collapse with the child. In a container with display: flex or display: grid the item margins do not collapse, and margin-left with margin-right never do.',
    },
  },
  {
    id: 'fe-css-11',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Qué requisitos tiene position: sticky y qué problema causa el overflow del padre?',
      en: 'What requirements does position: sticky have, and what problem does overflow of the parent cause?',
    },
    answer: {
      es: 'Hace falta un umbral como top: 0 y un ancestro cuyo overflow sea visible; overflow hidden, auto o scroll en un ancestro recorta el bloque contenedor sticky.',
      en: 'A threshold such as top: 0 is required and an ancestor whose overflow is visible; overflow hidden, auto or scroll on an ancestor clips the sticky containing block.',
    },
    distractors: [
      {
        es: 'sticky funciona sin top, left, right ni bottom; overflow: hidden en el padre no afecta si se define z-index.',
        en: 'sticky works without top, left, right or bottom; overflow: hidden on the parent has no effect if z-index is set.',
      },
      {
        es: 'sticky es una variante de fixed: siempre se pega a la ventana, sin importar el overflow de los ancestros.',
        en: 'sticky is a variant of fixed: it always sticks to the viewport, regardless of ancestor overflow.',
      },
    ],
    explanation: {
      es: 'position: sticky no hace nada hasta que existe un inset, normalmente top: 0. El elemento se pega dentro de su bloque contenedor, que es el ancestro de scroll más cercano. Si ese padre tiene overflow: hidden o overflow: auto, el sticky deja de adherirse a la ventana y parece roto, aunque z-index esté definido.',
      en: 'position: sticky does nothing until an inset exists, usually top: 0. The element sticks inside its containing block, which is the nearest scroll ancestor. If that parent has overflow: hidden or overflow: auto, sticky stops adhering to the viewport and looks broken, even when z-index is set.',
    },
  },
  {
    id: 'fe-css-12',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Cuál es el bloque contenedor de un elemento absolute o fixed y cómo lo cambia transform?',
      en: 'What is the containing block of an absolute or fixed element, and how does transform change it?',
    },
    answer: {
      es: 'absolute se ancla al ancestro posicionado más cercano; fixed se ancla a la ventana salvo que un ancestro tenga transform, filter o perspective, que entonces pasa a ser el bloque contenedor.',
      en: 'absolute anchors to the nearest positioned ancestor; fixed anchors to the viewport unless an ancestor has transform, filter or perspective, which then becomes the containing block.',
    },
    distractors: [
      {
        es: 'fixed siempre se ancla a la ventana y transform nunca cambia eso; absolute usa el bloque inicial si algún ancestro tiene display: flex.',
        en: 'fixed always anchors to the viewport and transform never changes that; absolute uses the initial containing block if any ancestor has display: flex.',
      },
      {
        es: 'transform en un ancestro solo afecta a absolute, nunca a fixed; position: relative en html es obligatorio para que fixed funcione.',
        en: 'transform on an ancestor only affects absolute, never fixed; position: relative on html is required for fixed to work.',
      },
    ],
    explanation: {
      es: 'Un hijo con position: absolute busca el ancestro con position distinto de static. Uno con position: fixed usa la ventana, pero transform: translate(0) en un padre crea un nuevo bloque contenedor y el fixed se comporta como absolute respecto a ese padre. filter y perspective producen el mismo efecto; display: flex no convierte al flex en bloque contenedor de un absolute, salvo que el item flex sea el propio absuelto.',
      en: 'A child with position: absolute looks for the ancestor whose position is not static. One with position: fixed uses the viewport, but transform: translate(0) on a parent creates a new containing block and the fixed behaves like absolute relative to that parent. filter and perspective produce the same effect; display: flex does not turn the flex container into the containing block of an absolute, unless the flex item is the absolutely positioned element itself.',
    },
  },
  {
    id: 'fe-css-13',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿En qué consiste la estrategia mobile first con min-width en las media queries?',
      en: 'What is the mobile-first strategy with min-width in media queries?',
    },
    answer: {
      es: 'Los estilos base apuntan al viewport pequeño; las reglas @media (min-width: ...) añaden o pisan cuando el viewport crece.',
      en: 'Base styles target the small viewport; @media (min-width: ...) rules add or override as the viewport grows.',
    },
    distractors: [
      {
        es: 'Mobile first usa consultas max-width para que el escritorio sea el default y se pise en pantallas pequeñas.',
        en: 'Mobile first uses max-width queries so desktop is the default and gets overwritten on small screens.',
      },
      {
        es: 'Las consultas min-width sustituyen a la cascada: lo que va dentro siempre gana a important de la hoja base.',
        en: 'min-width queries replace the cascade: what is inside them always beats important from the base sheet.',
      },
    ],
    explanation: {
      es: 'Se escribe primero el CSS del móvil y luego @media (min-width: 768px) para tabletas y escritorio, de modo que el teléfono no descarga ni aplica reglas de layout ancho. El enfoque inverso, desktop first, usa max-width y obliga al móvil a deshacer el escritorio. La media query no anula !important ni la especificidad: solo envuelve declaraciones que siguen la cascada normal.',
      en: 'You write the mobile CSS first and then @media (min-width: 768px) for tablets and desktop, so the phone does not download or apply wide-layout rules. The inverse approach, desktop first, uses max-width and forces the mobile view to undo the desktop. The media query does not cancel !important or specificity: it only wraps declarations that still follow the normal cascade.',
    },
  },
  {
    id: 'fe-css-14',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Para qué sirven las container queries?',
      en: 'What are container queries for?',
    },
    answer: {
      es: 'La regla @container permite que un componente reaccione al tamaño de su contenedor más cercano, no al viewport, de modo que la misma tarjeta se reordene en una barra lateral o en la columna principal.',
      en: 'The @container rule lets a component react to the size of its nearest container, not the viewport, so the same card can reflow in a sidebar or in the main column.',
    },
    distractors: [
      {
        es: 'Las container queries son un alias de las media queries que leen el tamaño de html; no pueden ver contenedores anidados.',
        en: 'Container queries are an alias of media queries that read the size of html; they cannot see nested containers.',
      },
      {
        es: '@container solo consulta el ancho del viewport en componentes con display: contents; no puede cambiar grid-template-columns.',
        en: '@container only queries the viewport width in components using display: contents; it cannot change grid-template-columns.',
      },
    ],
    explanation: {
      es: 'El padre declara container-type: inline-size y el hijo usa @container (min-width: 24rem) para cambiar, por ejemplo, grid-template-columns. Así un card-list se adapta al hueco real, no a los 1200px de la ventana. No es un alias de @media, y display: contents en el padre suele romper el contenedor porque el elemento deja de generar caja.',
      en: 'The parent declares container-type: inline-size and the child uses @container (min-width: 24rem) to change, for example, grid-template-columns. That way a card-list adapts to the real slot, not to the 1200px of the window. It is not an alias of @media, and display: contents on the parent often breaks the container because the element no longer generates a box.',
    },
  },
  {
    id: 'fe-css-15',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Por qué las propiedades personalizadas de CSS sirven para tematizar en ejecución y las variables de Sass no?',
      en: 'Why do CSS custom properties work for runtime theming while Sass variables do not?',
    },
    answer: {
      es: 'Las propiedades --token existen en ejecución y cambian con una clase o con JavaScript; las variables de Sass se resuelven al compilar y no pueden cambiar de tema en vivo.',
      en: 'The --token properties exist at runtime and change with a class or with JavaScript; Sass variables are resolved at compile time and cannot switch theme live.',
    },
    distractors: [
      {
        es: 'Ambas existen en ejecución; un $color de Sass se actualiza desde Angular al cambiar una clase. Las custom properties no pueden animarse.',
        en: 'Both exist at runtime; a Sass $color is updated from Angular by changing a class. Custom properties cannot be animated.',
      },
      {
        es: 'Las custom properties solo viven en :root; las variables Sass sobreviven en el CSS final como var() y por eso se tematizan.',
        en: 'Custom properties only live on :root; Sass variables survive in the final CSS as var() and that is why they can be themed.',
      },
    ],
    explanation: {
      es: 'Un tema oscuro es html[data-theme=dark] { --bg: #111; } y el resto del CSS lee background: var(--bg). El $bg de Sass ya es un color concreto en el CSS emitido, así que cambiar una clase en Angular no lo mueve. Las custom properties sí se pueden transicionar cuando el navegador interpola el tipo, y pueden declararse en cualquier selector, no solo en :root.',
      en: 'A dark theme is html[data-theme=dark] { --bg: #111; } and the rest of the CSS reads background: var(--bg). The Sass $bg is already a concrete color in the emitted CSS, so changing a class in Angular does not move it. Custom properties can be transitioned when the browser interpolates the type, and they can be declared on any selector, not only on :root.',
    },
  },
  {
    id: 'fe-css-16',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Cómo se comparan rem, em y px pensando en el zoom y la accesibilidad?',
      en: 'How do rem, em and px compare when thinking about zoom and accessibility?',
    },
    answer: {
      es: 'rem escala con el font-size de la raíz, así que el zoom y el tamaño de fuente del navegador aplican; em se acumula con el padre; px queda fijo salvo que el zoom de página escale todo.',
      en: 'rem scales with the root font-size, so zoom and the browser default font size apply; em compounds with the parent; px stays fixed unless page zoom scales everything.',
    },
    distractors: [
      {
        es: 'px siempre respeta el tamaño de fuente del usuario; rem queda fijo en 16px e ignora el zoom.',
        en: 'px always respects the user font size setting; rem stays fixed at 16px and ignores zoom.',
      },
      {
        es: 'em es relativo solo al viewport; rem se acumula con cada padre anidado igual que em.',
        en: 'em is relative only to the viewport; rem compounds with each nested parent just like em.',
      },
    ],
    explanation: {
      es: 'font-size: 1rem en un botón sigue el html, que el usuario puede subir en la configuración del navegador. font-size: 1.2em dentro de tres anidaciones se dispara porque cada em multiplica el padre. Un padding: 16px no reacciona a ese cambio de fuente, aunque el zoom de página del navegador sí escala los px. Por eso las medidas de texto y de espacios relacionados suelen ir en rem.',
      en: 'font-size: 1rem on a button follows html, which the user can raise in the browser settings. font-size: 1.2em inside three nestings blows up because each em multiplies the parent. A padding: 16px does not react to that font change, although browser page zoom does scale px. That is why text and related spacing usually go in rem.',
    },
  },
  {
    id: 'fe-css-17',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Qué diferencia hay entre transiciones y animaciones, y qué propiedades son baratas de animar?',
      en: 'What is the difference between transitions and animations, and which properties are cheap to animate?',
    },
    answer: {
      es: 'transition interpola entre dos estados al cambiar una propiedad; animation usa @keyframes con varios pasos. transform y opacity son baratas porque van al compositor; width, top y left provocan layout.',
      en: 'transition interpolates between two states when a property changes; animation uses @keyframes with several steps. transform and opacity are cheap because they go to the compositor; width, top and left cause layout.',
    },
    distractors: [
      {
        es: 'animation es siempre más barata porque corre en el compositor; transicionar width cuesta lo mismo que transform.',
        en: 'animation is always cheaper because it runs on the compositor; transitioning width costs the same as transform.',
      },
      {
        es: 'transition puede tener varios keyframes; las propiedades más baratas de animar son display y margin.',
        en: 'transition can have several keyframes; the cheapest properties to animate are display and margin.',
      },
    ],
    explanation: {
      es: 'transition: transform 200ms interpola un solo cambio, por ejemplo al poner una clase. @keyframes permite varios puntos y delay, fill-mode o iteration-count. Animar width, height, top, left o margin dispara recálculo de layout en cada frame; transform y opacity se componen en GPU. display no es interpolable, así que no es una propiedad barata: ni siquiera anima.',
      en: 'transition: transform 200ms interpolates a single change, for example when a class is added. @keyframes allows several points plus delay, fill-mode or iteration-count. Animating width, height, top, left or margin triggers layout recalculation on every frame; transform and opacity are composed on the GPU. display is not interpolable, so it is not a cheap property: it does not animate at all.',
    },
  },
  {
    id: 'fe-css-18',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Qué relación hay entre will-change, reflow y layout thrashing?',
      en: 'What is the relationship among will-change, reflow and layout thrashing?',
    },
    answer: {
      es: 'will-change avisa de que una propiedad se va a animar para que el navegador pueda promover capa; el layout thrashing es intercalear lecturas como offsetHeight y escrituras como style.width, forzando reflow repetido.',
      en: 'will-change hints that a property will animate so the browser may promote a layer; layout thrashing is interleaving reads such as offsetHeight and writes such as style.width, forcing repeated reflow.',
    },
    distractors: [
      {
        es: 'will-change impide todo reflow; leer offsetHeight es gratis si está will-change: transform.',
        en: 'will-change prevents all reflow; reading offsetHeight is free if will-change: transform is set.',
      },
      {
        es: 'El layout thrashing lo causan solo las animaciones CSS; will-change: scroll-position desactiva el compositing.',
        en: 'Layout thrashing is caused only by CSS animations; will-change: scroll-position disables compositing.',
      },
    ],
    explanation: {
      es: 'will-change: transform sugiere al motor que prepare una capa, pero no congela el layout: leer offsetHeight sigue forzando un reflow síncrono. El thrashing aparece en un bucle que escribe style.width y acto seguido lee offsetTop, porque cada lectura obliga a aplicar las escrituras pendientes. Usar will-change en muchos nodos o dejarlo permanente gasta memoria; se quita cuando termina la animación.',
      en: 'will-change: transform suggests the engine prepare a layer, but it does not freeze layout: reading offsetHeight still forces a synchronous reflow. Thrashing appears in a loop that writes style.width and then reads offsetTop, because each read forces pending writes to be applied. Using will-change on many nodes or leaving it permanent wastes memory; it is removed when the animation ends.',
    },
  },
  {
    id: 'fe-css-19',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Cómo convive la nomenclatura BEM con la encapsulación de estilos de Angular?',
      en: 'How does BEM naming coexist with Angular style encapsulation?',
    },
    answer: {
      es: 'BEM nombra Bloque__Elemento--Modificador de forma global; la encapsulación emulada añade atributos únicos, así que un BEM interno no se filtra, pero :host y ::ng-deep siguen pidiendo cuidado.',
      en: 'BEM names Block__Element--Modifier globally; emulated encapsulation adds unique attributes, so inner BEM does not leak, but :host and ::ng-deep still need care.',
    },
    distractors: [
      {
        es: 'La encapsulación reescribe los nombres de clase y hace innecesario BEM; los modificadores no se pueden usar con HostBinding.',
        en: 'Encapsulation rewrites class names and makes BEM unnecessary; modifiers cannot be used with HostBinding.',
      },
      {
        es: 'BEM exige ::ng-deep para funcionar en Angular; sin eso las clases de bloque nunca coinciden porque el compilador recorta los guiones bajos.',
        en: 'BEM requires ::ng-deep to work in Angular; without it, block classes never match because the compiler strips underscores.',
      },
    ],
    explanation: {
      es: 'Con ViewEncapsulation.Emulated, Angular deja las clases BEM intactas y añade un atributo _ngcontent para limitar el selector. card__title--large sigue siendo un nombre estable que puedes poner con HostBinding. ::ng-deep perfora esa frontera y mezcla bloques de otros componentes, así que BEM no la necesita: se usa :host para el bloque raíz y clases BEM para el interior.',
      en: 'With ViewEncapsulation.Emulated, Angular leaves BEM classes intact and adds an _ngcontent attribute to limit the selector. card__title--large remains a stable name you can set with HostBinding. ::ng-deep punches through that boundary and mixes blocks from other components, so BEM does not need it: :host is used for the root block and BEM classes for the inside.',
    },
  },
  {
    id: 'fe-css-20',
    topic: 'CSS y maquetacion',
    prompt: {
      es: '¿Qué aportan las propiedades lógicas al soporte de idiomas de derecha a izquierda?',
      en: 'What do logical properties add for right-to-left language support?',
    },
    answer: {
      es: 'margin-inline-start sigue la dirección de escritura, así que es izquierda en ltr y derecha en rtl; el físico margin-left no se voltea.',
      en: 'margin-inline-start follows the writing direction, so it is left in ltr and right in rtl; physical margin-left does not flip.',
    },
    distractors: [
      {
        es: 'direction: rtl voltea solo margin-left; las propiedades lógicas existen únicamente para padding.',
        en: 'direction: rtl flips only margin-left; logical properties exist only for padding.',
      },
      {
        es: 'inset-inline-start es un alias de left incluso en rtl; hay que intercambiar left y right con un selector [dir=rtl].',
        en: 'inset-inline-start is an alias of left even in rtl; you must still swap left and right with a [dir=rtl] selector.',
      },
    ],
    explanation: {
      es: 'Con dir=rtl, margin-inline-start, padding-inline-end e inset-inline-start se mapean al lado físico derecho sin duplicar reglas. margin-left sigue siendo el lado izquierdo del viewport y direction: rtl no lo intercambia. Las propiedades lógicas cubren margen, padding, inset, border y tamaño (inline-size, block-size), no solo padding.',
      en: 'With dir=rtl, margin-inline-start, padding-inline-end and inset-inline-start map to the physical right side without duplicating rules. margin-left remains the left side of the viewport and direction: rtl does not swap it. Logical properties cover margin, padding, inset, border and size (inline-size, block-size), not only padding.',
    },
  },
];
