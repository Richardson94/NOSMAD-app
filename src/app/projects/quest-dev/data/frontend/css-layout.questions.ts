import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_CSS_LAYOUT_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-css-01',
    topic: 'Flex',
    prompt: {
      es: '¿Qué son el eje principal y el eje cruzado en flex, y que pone el atajo flex?',
      en: 'What are the main axis and the cross axis in flex, and what does the flex shorthand set?',
    },
    answer: {
      es: 'El eje principal sigue flex-direction y el cruzado es el perpendicular. flex pone grow, shrink y basis, en ese orden.',
      en: 'The main axis follows flex-direction and the cross axis is the perpendicular one. flex sets grow, shrink and basis, in that order.',
    },
    distractors: [
      {
        es: 'El eje principal siempre es horizontal. flex: 1 solo enciende grow y deja basis en auto.',
        en: 'The main axis is always horizontal. flex: 1 only turns grow on and leaves basis as auto.',
      },
      {
        es: 'El atajo flex equivale a justify-content, align-items y gap.',
        en: 'The flex shorthand equals justify-content, align-items and gap.',
      },
    ],
    explanation: {
      es: 'Con flex-direction column, justify-content reparte en vertical. flex: 1 usa basis 0, no auto.',
      en: 'With flex-direction column, justify-content distributes vertically. flex: 1 uses a basis of 0, not auto.',
    },
  },
  {
    id: 'fe-css-02',
    topic: 'Flex y desborde',
    prompt: {
      es: '¿Por qué un item flex a veces se sale del contenedor aunque pueda encogerse?',
      en: 'Why does a flex item sometimes spill out of the container even though it is allowed to shrink?',
    },
    answer: {
      es: 'Porque el minimo por defecto es el tamano del contenido. Un texto largo o un input no baja de ahi. El arreglo habitual es min-width: 0.',
      en: 'Because the default minimum is the content size. A long text or an input will not go below that. The usual fix is min-width: 0.',
    },
    distractors: [
      {
        es: 'Porque width siempre gana a flex-basis y el desborde solo ocurre si shrink vale 0.',
        en: 'Because width always wins over flex-basis and the spill only happens when shrink is 0.',
      },
      {
        es: 'Porque min-width auto deja encoger hasta cero y el desborde viene del margin.',
        en: 'Because min-width auto allows shrinking to zero and the spill comes from the margin.',
      },
    ],
    explanation: {
      es: 'Subir flex-shrink no basta si el minimo del contenido es mas ancho que el hueco.',
      en: 'Raising flex-shrink is not enough if the content minimum is wider than the slot.',
    },
  },
  {
    id: 'fe-css-03',
    topic: 'Flex y grid',
    prompt: {
      es: '¿Cuándo usas grid y cuando flex?',
      en: 'When do you use grid and when do you use flex?',
    },
    answer: {
      es: 'Flex para una fila o una columna, alinear y repartir en un eje. Grid cuando filas y columnas importan a la vez, como una pagina con cabecera, lateral y contenido.',
      en: 'Flex for one row or one column, to align and distribute on one axis. Grid when rows and columns both matter, such as a page with a header, a sidebar and content.',
    },
    distractors: [
      {
        es: 'flex-wrap ya es bidimensional, asi que grid solo sirve para tablas de datos.',
        en: 'flex-wrap is already two-dimensional, so grid is only for data tables.',
      },
      {
        es: 'Grid no alinea. Para dos ejes la herramienta real es position absolute dentro de un flex.',
        en: 'Grid does not align. For two axes the real tool is position absolute inside a flex container.',
      },
    ],
    explanation: {
      es: 'Puedes mezclarlos: grid para la pagina y flex para la barra de botones de dentro.',
      en: 'You can mix them: grid for the page and flex for the button bar inside.',
    },
  },
  {
    id: 'fe-css-04',
    topic: 'Columnas fluidas',
    prompt: {
      es: '¿Cuál es la diferencia entre auto-fit y auto-fill con minmax?',
      en: 'What is the difference between auto-fit and auto-fill with minmax?',
    },
    answer: {
      es: 'auto-fill reserva columnas vacias. auto-fit las encoge para que las que tienen contenido se ensanchen. Con minmax el ancho tiene un suelo y un techo.',
      en: 'auto-fill keeps empty columns. auto-fit collapses them so the ones with content grow. With minmax the width has a floor and a ceiling.',
    },
    distractors: [
      {
        es: 'auto-fit siempre crea mas columnas que auto-fill, y minmax se ignora.',
        en: 'auto-fit always creates more columns than auto-fill, and minmax is ignored.',
      },
      {
        es: 'auto-fill encoge las vacias y auto-fit deja columnas fantasma ocupando sitio.',
        en: 'auto-fill collapses the empty ones and auto-fit leaves ghost columns taking space.',
      },
    ],
    explanation: {
      es: 'La receta de tarjetas que se recolocan solas es repeat(auto-fit, minmax(16rem, 1fr)).',
      en: 'The recipe for cards that reflow on their own is repeat(auto-fit, minmax(16rem, 1fr)).',
    },
  },
  {
    id: 'fe-css-05',
    topic: 'gap',
    prompt: {
      es: '¿Para qué sirve gap en flex o en grid?',
      en: 'What is gap for in flex or in grid?',
    },
    answer: {
      es: 'Pone espacio solo entre los items, no alrededor del ultimo. Ya no hace falta un margin en cada hijo y un margin negativo en el padre.',
      en: 'It puts space only between the items, not around the last one. You no longer need a margin on every child and a negative margin on the parent.',
    },
    distractors: [
      {
        es: 'gap solo funciona en grid. En flex sigue haciendo falta margin.',
        en: 'gap only works in grid. In flex you still need margin.',
      },
      {
        es: 'gap sustituye al padding y anade espacio tambien por fuera del contenedor.',
        en: 'gap replaces padding and also adds space outside the container.',
      },
    ],
    explanation: {
      es: 'El relleno interno del contenedor sigue siendo padding. gap no lo reemplaza.',
      en: 'Inner spacing of the container is still padding. gap does not replace it.',
    },
  },
  {
    id: 'fe-css-06',
    topic: 'Especificidad',
    prompt: {
      es: '¿Cómo gana una regla a otra entre id, clase y elemento?',
      en: 'How does one rule beat another among id, class and element?',
    },
    answer: {
      es: 'Un id gana a una clase y una clase gana a un elemento. Si empatan, gana la que va despues. important salta por encima de las reglas normales, pero no es un punto mas de especificidad.',
      en: 'An id beats a class and a class beats an element. On a tie, the one that comes later wins. important jumps above normal rules, but it is not an extra specificity point.',
    },
    distractors: [
      {
        es: 'important multiplica la especificidad por mil, y un elemento con important gana a un id solo si va despues.',
        en: 'important multiplies specificity by one thousand, and an element with important beats an id only if it comes later.',
      },
      {
        es: 'Una clase siempre gana a un elemento aunque el elemento lleve important.',
        en: 'A class always beats an element even if the element has important.',
      },
    ],
    explanation: {
      es: 'Sube de especificidad con cuidado. Una clase suele bastar. important se reserva para un caso que de verdad no tiene otra salida.',
      en: 'Raise specificity with care. A class is usually enough. important is reserved for a case that really has no other way out.',
    },
  },
  {
    id: 'fe-css-07',
    topic: 'Guerras de CSS',
    prompt: {
      es: '¿Cómo evitas que los estilos de un componente pierdan contra utilidades o contra un id?',
      en: 'How do you stop component styles from losing to utilities or to an id?',
    },
    answer: {
      es: 'Ordena grupos con capas, para que las utilidades vayan despues, o usa where cuando quieras un selector que no sume especificidad.',
      en: 'Order groups with layers, so utilities come later, or use where when you want a selector that does not add specificity.',
    },
    distractors: [
      {
        es: 'where tiene la misma fuerza que is, y las capas solo funcionan si cada regla lleva important.',
        en: 'where has the same strength as is, and layers only work if every rule carries important.',
      },
      {
        es: 'Las capas sustituyen a la especificidad y un id ya no puede ganar nunca.',
        en: 'Layers replace specificity and an id can never win anymore.',
      },
    ],
    explanation: {
      es: 'where(.card) no compite con una clase de utilidad. is(.card) si toma la fuerza de .card.',
      en: 'where(.card) does not compete with a utility class. is(.card) does take the strength of .card.',
    },
  },
  {
    id: 'fe-css-08',
    topic: 'z-index',
    prompt: {
      es: '¿Por qué un z-index a veces no hace nada?',
      en: 'Why does a z-index sometimes do nothing?',
    },
    answer: {
      es: 'Porque en un elemento estatico se ignora. Hace falta posicionarlo, o una propiedad que ya cree contexto, como transform u opacity menor que 1.',
      en: 'Because on a static element it is ignored. You need to position it, or a property that already creates a context, such as transform or opacity less than 1.',
    },
    distractors: [
      {
        es: 'z-index funciona en cualquier elemento del flujo. transform no afecta al apilado.',
        en: 'z-index works on any element in normal flow. transform does not affect stacking.',
      },
      {
        es: 'Solo position relative crea contexto. transform nunca lo hace.',
        en: 'Only position relative creates a context. transform never does.',
      },
    ],
    explanation: {
      es: 'Un hijo no puede pintarse por encima de un hermano del padre si el padre ya cerro su contexto de apilado.',
      en: 'A child cannot paint above a sibling of the parent if the parent already closed its stacking context.',
    },
  },
  {
    id: 'fe-css-09',
    topic: 'Modelo de caja',
    prompt: {
      es: '¿Cuál es la diferencia entre border-box y content-box?',
      en: 'What is the difference between border-box and content-box?',
    },
    answer: {
      es: 'Con border-box, width incluye padding y borde. Con content-box, el width es solo el contenido y padding y borde se suman fuera.',
      en: 'With border-box, width includes padding and border. With content-box, width is only the content and padding and border are added outside.',
    },
    distractors: [
      {
        es: 'border-box mete el margin dentro del width. content-box mete el padding pero no el borde.',
        en: 'border-box puts the margin inside the width. content-box puts the padding in but not the border.',
      },
      {
        es: 'Los dos incluyen el padding. La diferencia es si el outline cuenta para el width.',
        en: 'Both include the padding. The difference is whether the outline counts toward the width.',
      },
    ],
    explanation: {
      es: 'border-box es el que se espera al maquetar columnas. El margin queda siempre fuera, en los dos modelos.',
      en: 'border-box is the one you expect when laying out columns. Margin stays outside in both models.',
    },
  },
  {
    id: 'fe-css-10',
    topic: 'Margenes',
    prompt: {
      es: '¿Qué es el colapso de margenes?',
      en: 'What is margin collapsing?',
    },
    answer: {
      es: 'Dos margenes verticales seguidos, en bloques normales, se funden en el mayor. No pasa en horizontal ni entre items de flex o de grid.',
      en: 'Two vertical margins in a row, on normal blocks, merge into the larger one. It does not happen horizontally or between flex or grid items.',
    },
    distractors: [
      {
        es: 'Los margenes se suman siempre, en las cuatro direcciones, tambien dentro de un flex.',
        en: 'Margins always add up, in all four directions, including inside a flex container.',
      },
      {
        es: 'Solo colapsa el margin-top del primer hijo. El de abajo nunca se junta con el del padre.',
        en: 'Only the margin-top of the first child collapses. The bottom one never merges with the parent.',
      },
    ],
    explanation: {
      es: 'Un padding o un borde en el padre separa los margenes y el colapso con el hijo deja de ocurrir.',
      en: 'A padding or a border on the parent separates the margins and the collapse with the child stops.',
    },
  },
  {
    id: 'fe-css-11',
    topic: 'sticky',
    prompt: {
      es: '¿Qué necesita position sticky para pegarse, y que lo rompe?',
      en: 'What does position sticky need in order to stick, and what breaks it?',
    },
    answer: {
      es: 'Un umbral, como top 0, y un ancestro cuyo overflow sea visible. overflow hidden, auto o scroll en un padre recorta el sticky y parece que no funciona.',
      en: 'A threshold, such as top 0, and an ancestor whose overflow is visible. overflow hidden, auto or scroll on a parent clips the sticky and it looks broken.',
    },
    distractors: [
      {
        es: 'Funciona sin top ni left. overflow hidden no afecta si hay z-index.',
        en: 'It works without top or left. overflow hidden has no effect if there is a z-index.',
      },
      {
        es: 'Es un fixed: se pega siempre a la ventana, pase lo que pase con el overflow.',
        en: 'It is a fixed: it always sticks to the window, no matter what overflow does.',
      },
    ],
    explanation: {
      es: 'sticky se pega dentro de su caja, no de toda la pagina. Si el padre no deja ver el scroll, ahi se acaba.',
      en: 'sticky sticks inside its box, not to the whole page. If the parent does not let the scroll show, that is where it ends.',
    },
  },
  {
    id: 'fe-css-12',
    topic: 'absolute y fixed',
    prompt: {
      es: '¿Respecto a qué se colocan un absolute y un fixed?',
      en: 'What do an absolute and a fixed element position against?',
    },
    answer: {
      es: 'absolute respecto al ancestro posicionado mas cercano. fixed respecto a la ventana, salvo que un ancestro tenga transform, filter o perspective: entonces se ancla a ese ancestro.',
      en: 'absolute against the nearest positioned ancestor. fixed against the window, unless an ancestor has transform, filter or perspective: then it anchors to that ancestor.',
    },
    distractors: [
      {
        es: 'fixed siempre usa la ventana y transform no cambia eso. absolute usa el body si hay un flex.',
        en: 'fixed always uses the window and transform does not change that. absolute uses the body if there is a flex container.',
      },
      {
        es: 'Los dos se anclan al padre directo, este posicionado o no.',
        en: 'Both anchor to the direct parent, whether it is positioned or not.',
      },
    ],
    explanation: {
      es: 'Un transform en un modal es la causa tipica de un fixed que ya no cubre la ventana.',
      en: 'A transform on a modal is the typical cause of a fixed element that no longer covers the window.',
    },
  },
  {
    id: 'fe-css-13',
    topic: 'Mobile first',
    prompt: {
      es: '¿Cómo es la estrategia mobile first con media queries?',
      en: 'What does the mobile-first strategy look like with media queries?',
    },
    answer: {
      es: 'El CSS de base es el de pantalla pequena. Con min-width anades o pisas reglas cuando el viewport crece.',
      en: 'The base CSS is the small-screen CSS. With min-width you add or override rules as the viewport grows.',
    },
    distractors: [
      {
        es: 'Mobile first usa max-width, para que escritorio sea el default y el movil lo deshaga.',
        en: 'Mobile first uses max-width, so desktop is the default and mobile undoes it.',
      },
      {
        es: 'Lo de dentro de min-width gana siempre a un important de la hoja base.',
        en: 'Whatever is inside min-width always beats an important from the base sheet.',
      },
    ],
    explanation: {
      es: 'La media query no anula la especificidad. Solo envuelve declaraciones que siguen la cascada normal.',
      en: 'The media query does not cancel specificity. It only wraps declarations that still follow the normal cascade.',
    },
  },
  {
    id: 'fe-css-14',
    topic: 'Container queries',
    prompt: {
      es: '¿Para qué sirven las container queries?',
      en: 'What are container queries for?',
    },
    answer: {
      es: 'Para que un componente reaccione al ancho de su contenedor, no al de la ventana. La misma tarjeta puede cambiar en un lateral estrecho o en la columna ancha.',
      en: 'So a component reacts to the width of its container, not to the window. The same card can change in a narrow sidebar or in the wide column.',
    },
    distractors: [
      {
        es: 'Son un alias de las media queries y solo leen el tamano de html.',
        en: 'They are an alias of media queries and they only read the size of html.',
      },
      {
        es: 'Solo consultan el viewport y no pueden cambiar las columnas de un grid.',
        en: 'They only query the viewport and they cannot change the columns of a grid.',
      },
    ],
    explanation: {
      es: 'El padre declara container-type inline-size y el hijo usa container con un min-width.',
      en: 'The parent declares container-type inline-size and the child uses container with a min-width.',
    },
  },
  {
    id: 'fe-css-15',
    topic: 'Variables CSS',
    prompt: {
      es: '¿Por qué una custom property sirve para cambiar de tema y una variable de Sass no?',
      en: 'Why does a custom property work for switching theme while a Sass variable does not?',
    },
    answer: {
      es: 'La custom property existe en el navegador y cambia con una clase o con JavaScript. La de Sass ya es un color fijo cuando termina el build.',
      en: 'The custom property exists in the browser and changes with a class or with JavaScript. The Sass one is already a fixed color when the build finishes.',
    },
    distractors: [
      {
        es: 'Las dos viven en ejecucion. Cambiar una clase actualiza el dolar de Sass.',
        en: 'Both live at runtime. Changing a class updates the Sass dollar variable.',
      },
      {
        es: 'Las custom properties solo pueden declararse en :root y no se pueden animar.',
        en: 'Custom properties can only be declared on :root and they cannot be animated.',
      },
    ],
    explanation: {
      es: 'Un tema oscuro redefine --bg en un selector y el resto lee var(--bg).',
      en: 'A dark theme redefines --bg on a selector and the rest reads var(--bg).',
    },
  },
  {
    id: 'fe-css-16',
    topic: 'rem, em y px',
    prompt: {
      es: '¿Cómo se comparan rem, em y px?',
      en: 'How do rem, em and px compare?',
    },
    answer: {
      es: 'rem escala con la raiz, asi que respeta el tamano de fuente del navegador. em se multiplica con el padre. px no sigue ese ajuste de fuente, aunque el zoom de pagina si escala todo.',
      en: 'rem scales with the root, so it follows the browser font size. em multiplies with the parent. px does not follow that font setting, although page zoom does scale everything.',
    },
    distractors: [
      {
        es: 'px siempre respeta la fuente del usuario. rem queda fijo en 16 y ignora el zoom.',
        en: 'px always respects the user font size. rem stays fixed at 16 and ignores zoom.',
      },
      {
        es: 'em depende solo del viewport. rem se acumula en cada padre, igual que em.',
        en: 'em depends only on the viewport. rem compounds on every parent, the same as em.',
      },
    ],
    explanation: {
      es: 'Para texto y espacios ligados al texto, rem evita que tres em anidados se disparen.',
      en: 'For text and spacing tied to text, rem avoids three nested em values blowing up.',
    },
  },
  {
    id: 'fe-css-17',
    topic: 'Animar',
    prompt: {
      es: '¿Cuál es la diferencia entre transition y animation, y que es barato de animar?',
      en: 'What is the difference between transition and animation, and what is cheap to animate?',
    },
    answer: {
      es: 'transition interpola un cambio de estado. animation usa keyframes con varios pasos. transform y opacity son baratas. width, top y left mueven el layout.',
      en: 'transition interpolates one state change. animation uses keyframes with several steps. transform and opacity are cheap. width, top and left move the layout.',
    },
    distractors: [
      {
        es: 'animation siempre es mas barata. Animar width cuesta lo mismo que transform.',
        en: 'animation is always cheaper. Animating width costs the same as transform.',
      },
      {
        es: 'transition admite varios keyframes. Lo mas barato de animar es display y margin.',
        en: 'transition accepts several keyframes. The cheapest things to animate are display and margin.',
      },
    ],
    explanation: {
      es: 'display no se interpola. Si la animacion va a trompicones, mira si estas cambiando tamano o posicion en cada frame.',
      en: 'display does not interpolate. If the animation stutters, check whether you are changing size or position on every frame.',
    },
  },
  {
    id: 'fe-css-18',
    topic: 'Reflow',
    prompt: {
      es: '¿Qué es el layout thrashing?',
      en: 'What is layout thrashing?',
    },
    answer: {
      es: 'Leer medidas como offsetHeight y justo despues escribir estilos, en bucle. Cada lectura obliga al navegador a recalcular el layout.',
      en: 'Reading measures such as offsetHeight and writing styles right after, in a loop. Each read forces the browser to recalculate layout.',
    },
    distractors: [
      {
        es: 'Lo causan solo las animaciones CSS. Leer offsetHeight es gratis si hay will-change.',
        en: 'Only CSS animations cause it. Reading offsetHeight is free if will-change is set.',
      },
      {
        es: 'will-change impide todo reflow, asi que se puede dejar puesto en todos los nodos.',
        en: 'will-change prevents all reflow, so it can be left on every node.',
      },
    ],
    explanation: {
      es: 'Agrupa las lecturas y luego las escrituras. will-change avisa de una animacion, no congela el layout, y no debe quedarse para siempre.',
      en: 'Group the reads and then the writes. will-change hints at an animation, it does not freeze layout, and it should not stay forever.',
    },
  },
  {
    id: 'fe-css-19',
    topic: 'Nombres de clase',
    prompt: {
      es: '¿Cómo convive un nombre de clase estable con la encapsulacion de Angular?',
      en: 'How does a stable class name coexist with Angular style encapsulation?',
    },
    answer: {
      es: 'Angular no reescribe el nombre. Anade un atributo para limitar el selector, asi que la clase sigue siendo usable y no se filtra a otros componentes.',
      en: 'Angular does not rewrite the name. It adds an attribute to limit the selector, so the class stays usable and does not leak to other components.',
    },
    distractors: [
      {
        es: 'La encapsulacion cambia los nombres, asi que un bloque con guiones bajos deja de coincidir.',
        en: 'Encapsulation changes the names, so a block with underscores stops matching.',
      },
      {
        es: 'Hace falta ng-deep para que cualquier clase del componente se aplique.',
        en: 'ng-deep is required for any class of the component to apply.',
      },
    ],
    explanation: {
      es: 'ng-deep atraviesa esa frontera y mezcla estilos de otros sitios. Para el host usa host, y para dentro clases normales.',
      en: 'ng-deep crosses that boundary and mixes styles from other places. For the host use host, and for the inside use normal classes.',
    },
  },
  {
    id: 'fe-css-20',
    topic: 'Propiedades logicas',
    prompt: {
      es: '¿Qué aportan las propiedades logicas en un idioma de derecha a izquierda?',
      en: 'What do logical properties add for a right-to-left language?',
    },
    answer: {
      es: 'margin-inline-start sigue la direccion del texto: izquierda en ltr y derecha en rtl. margin-left no se voltea.',
      en: 'margin-inline-start follows the writing direction: left in ltr and right in rtl. margin-left does not flip.',
    },
    distractors: [
      {
        es: 'direction rtl voltea solo margin-left. Las propiedades logicas existen unicamente para padding.',
        en: 'direction rtl flips only margin-left. Logical properties exist only for padding.',
      },
      {
        es: 'inset-inline-start es un alias de left tambien en rtl. Hay que duplicar reglas con un selector de dir.',
        en: 'inset-inline-start is an alias of left even in rtl. You must duplicate rules with a dir selector.',
      },
    ],
    explanation: {
      es: 'Con dir rtl no hace falta una hoja duplicada para margen, padding, borde o inset si usas inline y block.',
      en: 'With dir rtl you do not need a duplicated sheet for margin, padding, border or inset if you use inline and block.',
    },
  },
];
