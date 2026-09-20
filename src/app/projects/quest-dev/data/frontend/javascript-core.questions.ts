import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_JAVASCRIPT_CORE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-js-01',
    topic: 'JavaScript',
    prompt: {
      es: 'Tras registrar setTimeout(fn, 0) y Promise.resolve().then(fn) en el mismo turno, ¿cuál se ejecuta primero y por qué?',
      en: 'After registering setTimeout(fn, 0) and Promise.resolve().then(fn) in the same turn, which runs first and why?',
    },
    answer: {
      es: 'El then, porque es una microtarea y el bucle vacía esa cola antes de tomar la siguiente macrotarea del temporizador.',
      en: 'The then callback, because it is a microtask and the loop drains that queue before taking the next timer macrotask.',
    },
    distractors: [
      {
        es: 'El temporizador, porque setTimeout se registra antes y el bucle respeta un FIFO único entre colas.',
        en: 'The timer, because setTimeout is registered first and the loop respects a single FIFO across queues.',
      },
      {
        es: 'Juntos en el mismo turno: el delay 0 asciende el temporizador a microtarea y el orden queda indefinido.',
        en: 'Together in the same turn: delay 0 promotes the timer to a microtask, so the order is undefined.',
      },
    ],
    explanation: {
      es: 'Una promesa ya resuelta encola sus reacciones como microtareas (jobs). setTimeout, aunque el delay sea 0, siempre va a la cola de macrotareas. Cuando la pila se vacía, el motor agota todas las microtareas pendientes —incluidos then anidados que se encolen durante ese drenaje— antes de pintar o de ejecutar el siguiente timer.',
      en: 'An already-resolved Promise enqueues its reactions as microtasks (jobs). setTimeout, even with delay 0, always goes to the macrotask queue. When the call stack is empty the engine exhausts every pending microtask —including nested then callbacks scheduled during that drain— before rendering or running the next timer.',
    },
  },
  {
    id: 'fe-js-02',
    topic: 'JavaScript',
    prompt: {
      es: '¿Por qué los callbacks de un for con var ven el mismo índice final y con let cada uno ve el de su iteración?',
      en: 'Why do callbacks from a for loop with var see the same final index, while with let each one sees its iteration value?',
    },
    answer: {
      es: 'var crea un único enlace de ámbito de función que el bucle muta; let crea un enlace de bloque nuevo por iteración y cada clausura captura el suyo.',
      en: 'var creates a single function-scoped binding that the loop mutates; let creates a fresh block binding per iteration and each closure captures its own.',
    },
    distractors: [
      {
        es: 'var captura por referencia y let por valor, así que let copia el número en cada vuelta como si fuera un primitivo congelado.',
        en: 'var captures by reference and let by value, so let copies the number each round as if it were a frozen primitive.',
      },
      {
        es: 'var se eleva a undefined y los callbacks lo leen antes de que el bucle asigne; let se inicializa antes de la primera vuelta y ya no cambia.',
        en: 'var is hoisted to undefined and the callbacks read it before the loop assigns; let is initialised before the first round and then never changes.',
      },
    ],
    explanation: {
      es: 'Las clausuras capturan enlaces, no instantáneas. Con var hay un solo i para toda la función, así que cuando los setTimeout corren —ya en la cola de macrotareas— i vale el final. El for (let i ...) crea un enlace léxico nuevo por iteración, que es el truco que antes se simulaba con una IIFE. Los callbacks siguen ejecutándose después del bucle; cambia qué variable cierran.',
      en: 'Closures capture bindings, not snapshots. With var there is one i for the whole function, so when the setTimeout callbacks later run —already on the macrotask queue— i holds the end value. for (let i ...) creates a new lexical binding per iteration, which is the trick previously simulated with an IIFE. The callbacks still run after the loop; what changes is which binding they close over.',
    },
  },
  {
    id: 'fe-js-03',
    topic: 'JavaScript',
    prompt: {
      es: '¿Cómo se decide this en un método, en una función flecha y con call, apply y bind?',
      en: 'How is this decided for a method, an arrow function, and with call, apply and bind?',
    },
    answer: {
      es: 'El método recibe el objeto que lo invocó; la flecha conserva el this léxico y no se reasigna; call y apply invocan ya con un this elegido y bind devuelve una función envuelta.',
      en: 'A method receives the object that invoked it; an arrow keeps lexical this and cannot be rebound; call and apply invoke immediately with a chosen this, and bind returns a wrapped function.',
    },
    distractors: [
      {
        es: 'La flecha toma this del invocador, igual que un método; bind es la única forma de fijar this en una función clásica.',
        en: 'An arrow takes this from the caller, same as a method; bind is the only way to freeze this on a classic function.',
      },
      {
        es: 'call, apply y bind sí reasignan this de una flecha; un método los ignora salvo que se hubiera declarado con function.',
        en: 'call, apply and bind do rebind this of an arrow; a method ignores them unless it was declared with function.',
      },
    ],
    explanation: {
      es: 'this se resuelve en la llamada, no en la definición, excepto en las flechas, que lo cierran al crearse. En modo sloppy una función desprendida recibe el objeto global; en strict recibe undefined. apply pasa argumentos en un array, call en lista, y bind además permite aplicación parcial. Ninguno de los tres altera el this léxico de una flecha.',
      en: 'this is resolved at the call site, not at definition time, except for arrows, which close over it at creation. In sloppy mode a detached function receives the global object; in strict mode it receives undefined. apply passes arguments as an array, call as a list, and bind also allows partial application. None of the three changes the lexical this of an arrow.',
    },
  },
  {
    id: 'fe-js-04',
    topic: 'JavaScript',
    prompt: {
      es: '¿Por qué se dice que class es azúcar sintáctico sobre la cadena de prototipos?',
      en: 'Why is class described as syntactic sugar over the prototype chain?',
    },
    answer: {
      es: 'Las instancias siguen delegando por [[Prototype]]; los métodos viven en el prototipo y extends enlaza el prototipo hijo con el padre, igual que las funciones constructoras a mano.',
      en: 'Instances still delegate through [[Prototype]]; methods live on the prototype and extends links the child prototype to the parent, just as constructor functions did by hand.',
    },
    distractors: [
      {
        es: 'class copia los métodos en cada instancia al hacer new, así que después de construir ya no hay búsqueda en la cadena.',
        en: 'class copies methods onto each instance at new, so after construction there is no chain lookup.',
      },
      {
        es: 'class usa una vtable oculta en lugar de prototipos; extends copia los métodos del padre en el hijo al definir la clase.',
        en: 'class uses a hidden vtable instead of prototypes; extends copies parent methods onto the child when the class is defined.',
      },
    ],
    explanation: {
      es: 'El desazucarado es constructor más asignación al prototype, pero no es idéntico: el cuerpo de class es strict, el constructor lanza si se llama sin new, los métodos no son enumerables y el nombre de la clase está en zona muerta temporal. extends también pone el [[Prototype]] de la función constructora, que es lo que permite heredar estáticos.',
      en: 'The desugaring is a constructor plus prototype assignment, but it is not identical: class bodies are strict, the constructor throws if called without new, methods are non-enumerable and the class name sits in the temporal dead zone. extends also sets the [[Prototype]] of the constructor function itself, which is what enables static inheritance.',
    },
  },
  {
    id: 'fe-js-05',
    topic: 'JavaScript',
    prompt: {
      es: '¿En qué se diferencia el hoisting de var de la zona muerta temporal de let y const?',
      en: 'How does var hoisting differ from the temporal dead zone of let and const?',
    },
    answer: {
      es: 'var se eleva y se inicializa a undefined; let y const también se elevan pero quedan sin inicializar hasta su línea, y leerlos lanza ReferenceError.',
      en: 'var is hoisted and initialised to undefined; let and const are hoisted too but stay uninitialised until their line, so reading them throws ReferenceError.',
    },
    distractors: [
      {
        es: 'let y const no se elevan, así que el enlace no existe hasta esa línea y el error es el mismo que el de una variable nunca declarada.',
        en: 'let and const are not hoisted, so the binding does not exist until that line and the error matches a variable that was never declared.',
      },
      {
        es: 'const no se eleva porque exige inicializador, mientras let se eleva como var y se lee como undefined.',
        en: 'const is not hoisted because it requires an initializer, while let is hoisted like var and reads as undefined.',
      },
    ],
    explanation: {
      es: 'typeof de una variable no declarada da undefined, pero typeof de un let en la zona muerta sigue lanzando. Esa zona dura hasta que corre el inicializador, por eso un parámetro por defecto no puede leer un let declarado más abajo en el mismo ámbito. Las declaraciones function sí se elevan por completo, a diferencia de let y const.',
      en: 'typeof of an undeclared variable is undefined, but typeof of a let in the dead zone still throws. That zone lasts until the initializer runs, which is why a default parameter cannot read a let declared further down in the same scope. function declarations are fully hoisted, unlike let and const.',
    },
  },
  {
    id: 'fe-js-06',
    topic: 'JavaScript',
    prompt: {
      es: '¿Qué cambia en las reglas de coerción entre == y ===?',
      en: 'What changes in the coercion rules between == and ===?',
    },
    answer: {
      es: '=== nunca aplica coerción (igualdad estricta); == aplica ToNumber y ToPrimitive, y además trata null y undefined como iguales entre sí.',
      en: '=== never coerces (strict equality); == applies ToNumber and ToPrimitive, and also treats null and undefined as equal to each other.',
    },
    distractors: [
      {
        es: '== solo aplica coerción a primitivos; si un lado es objeto, ambos operadores comparan por referencia.',
        en: '== only coerces primitives; if either side is an object, both operators compare by reference.',
      },
      {
        es: '=== compara primero los tipos y luego los valores, así que NaN === NaN es true porque ambos son number.',
        en: '=== first compares types and then values, so NaN === NaN is true because both are number.',
      },
    ],
    explanation: {
      es: 'El algoritmo de == hace que [] == false o "0" == 0 resulten true, de ahí que === sea el valor por defecto. Un objeto frente a un primitivo con == se convierte vía ToPrimitive. La igualdad estricta aún tiene los quirks de IEEE: NaN === NaN es false y +0 === -0 es true; Object.is invierte justo esos dos casos.',
      en: 'The == algorithm makes [] == false or "0" == 0 succeed, which is why === is the default. An object compared with == to a primitive is coerced via ToPrimitive. Strict equality still has the IEEE quirks: NaN === NaN is false and +0 === -0 is true; Object.is flips exactly those two cases.',
    },
  },
  {
    id: 'fe-js-07',
    topic: 'JavaScript',
    prompt: {
      es: '¿Cuándo no basta una copia superficial con spread y hace falta structuredClone?',
      en: 'When is a shallow copy with spread not enough and structuredClone is needed?',
    },
    answer: {
      es: 'spread solo copia el primer nivel de propiedades propias enumerables por referencia; structuredClone recorre datos anidados y clona tipos soportados como Date, Map, Set y ArrayBuffer.',
      en: 'spread only copies the first level of enumerable own properties by reference; structuredClone walks nested data and clones supported types such as Date, Map, Set and ArrayBuffer.',
    },
    distractors: [
      {
        es: 'spread ya es profundo en arrays, así que structuredClone solo hace falta en objetos que tengan prototipo.',
        en: 'spread is already deep for arrays, so structuredClone is only needed for objects that have a prototype.',
      },
      {
        es: 'structuredClone copia funciones serializando su fuente y reconstruye la cadena de prototipos, a diferencia de spread.',
        en: 'structuredClone copies functions by serialising their source and rebuilds the prototype chain, unlike spread.',
      },
    ],
    explanation: {
      es: 'Mutar un objeto anidado tras { ...obj } sigue mutando el original. structuredClone falla con funciones, nodos del DOM y varios objetos exóticos, y descarta propiedades con clave symbol. Además corta la identidad del prototipo: una instancia clonada queda como objeto plano con los mismos datos. Los buffers transferibles pueden moverse, no copiarse, con la opción transfer.',
      en: 'Mutating a nested object after { ...obj } still mutates the original. structuredClone fails on functions, DOM nodes and several exotic objects, and it drops symbol-keyed properties. It also severs prototype identity: a cloned class instance becomes a plain object with the same data. Transferable buffers can be moved, not copied, via the transfer option.',
    },
  },
  {
    id: 'fe-js-08',
    topic: 'JavaScript',
    prompt: {
      es: '¿Qué métodos de array mutan el original y cuáles devuelven una copia?',
      en: 'Which array methods mutate the original and which return a copy?',
    },
    answer: {
      es: 'Mutan push, pop, shift, unshift, splice, sort, reverse, fill y copyWithin; copian map, filter, slice, concat, flat y los toSorted, toReversed, toSpliced y with.',
      en: 'push, pop, shift, unshift, splice, sort, reverse, fill and copyWithin mutate; map, filter, slice, concat, flat and the toSorted, toReversed, toSpliced and with methods return a copy.',
    },
    distractors: [
      {
        es: 'sort y reverse devuelven un array nuevo en los motores modernos; solo splice sigue mutando in situ.',
        en: 'sort and reverse return a new array in modern engines; only splice still mutates in place.',
      },
      {
        es: 'map muta el origen si el callback devuelve undefined, por eso se prefiere filter para obtener copias.',
        en: 'map mutates the source when the callback returns undefined, which is why filter is preferred to obtain copies.',
      },
    ],
    explanation: {
      es: 'Los métodos históricos que mutan también devuelven un valor (sort devuelve el mismo array), y eso oculta la mutación. ES2023 añadió las variantes to* para copiar. slice(0) es copia superficial: los objetos anidados se siguen compartiendo. La confusión clásica es splice contra slice: splice muta y puede insertar; slice nunca muta.',
      en: 'The historical mutating methods also return a value (sort returns the same array), which hides the mutation. ES2023 added the to* variants to copy. slice(0) is a shallow copy: nested objects remain shared. The classic mix-up is splice versus slice: splice mutates and can insert; slice never mutates.',
    },
  },
  {
    id: 'fe-js-09',
    topic: 'JavaScript',
    prompt: {
      es: '¿En qué se diferencian Promise.all, allSettled, race y any cuando alguna entrada se rechaza?',
      en: 'How do Promise.all, allSettled, race and any differ when some input rejects?',
    },
    answer: {
      es: 'all rechaza en el primer rechazo; allSettled espera a todas y siempre se cumple con objetos de estado; race se asienta con el primer cumplimiento o rechazo; any se cumple con el primer cumplimiento y solo rechaza con AggregateError si fallan todas.',
      en: 'all rejects at the first rejection; allSettled waits for every input and always fulfils with status objects; race settles with the first fulfilment or rejection; any fulfils with the first fulfilment and rejects with AggregateError only if every input rejects.',
    },
    distractors: [
      {
        es: 'race ignora rechazos y espera el primer cumplimiento, por eso any se añadió como un alias más lento.',
        en: 'race ignores rejections and waits for the first fulfilment, which is why any was added as a slower alias.',
      },
      {
        es: 'allSettled rechaza al final si alguna entrada falló; all espera todos los cumplimientos antes de fallar.',
        en: 'allSettled rejects at the end if any input failed; all waits for every fulfilment before failing.',
      },
    ],
    explanation: {
      es: 'Un all o allSettled vacío se cumple con []. Un race vacío se queda pendiente para siempre. Un any vacío rechaza con AggregateError. all corta en el primer rechazo pero no cancela las demás promesas: siguen asentándose en segundo plano y pueden disparar unhandledrejection si nadie las captura. allSettled nunca rechaza por las entradas, solo si el iterador mismo lanza.',
      en: 'An empty all or allSettled fulfils with []. An empty race stays pending forever. An empty any rejects with AggregateError. all short-circuits on the first rejection but does not cancel the other promises: they still settle in the background and can fire unhandledrejection if nobody handles them. allSettled never rejects because of the inputs, only if the iterator itself throws.',
    },
  },
  {
    id: 'fe-js-10',
    topic: 'JavaScript',
    prompt: {
      es: '¿Cómo se manejan los errores con async await y qué ocurre con una promesa rechazada que nadie captura?',
      en: 'How are errors handled with async await, and what happens to a rejected promise that nobody catches?',
    },
    answer: {
      es: 'await lanza hacia el try/catch (o rechaza la promesa devuelta); un rechazo sin await, then ni catch termina en unhandledrejection y no lo atrapa un try alrededor de la llamada.',
      en: 'await throws into the surrounding try/catch (or the returned promise rejects); a rejection with no await, then or catch becomes unhandledrejection and is not caught by a try around the call.',
    },
    distractors: [
      {
        es: 'try/catch alrededor de asyncFn() atrapa los rechazos internos porque una función async lanza de forma sincrónica al fallar.',
        en: 'try/catch around asyncFn() catches inner rejections because an async function throws synchronously when it fails.',
      },
      {
        es: 'Una promesa rechazada flotante se convierte a undefined, así que no puede disparar unhandledrejection en el navegador.',
        en: 'A floating rejected promise is coerced to undefined, so it cannot fire unhandledrejection in the browser.',
      },
    ],
    explanation: {
      es: 'asyncFn() siempre devuelve una Promise; sin await el try solo ve ese objeto. Olvidar await o return de una promesa dentro de async es la fuente habitual de unhandledrejection, que se dispara tanto en navegadores como en Node tras un checkpoint de microtareas. Si se ignora a propósito hace falta .catch o void sobre la promesa.',
      en: 'asyncFn() always returns a Promise; without await the try block only sees that object. Forgetting to await or return a promise inside async is the usual source of unhandledrejection, which fires in both browsers and Node after a microtask checkpoint. If you ignore it on purpose you still need .catch or void on the promise.',
    },
  },
  {
    id: 'fe-js-11',
    topic: 'JavaScript',
    prompt: {
      es: '¿Cuándo usarías for in, for of u Object.entries para recorrer un objeto o un array?',
      en: 'When would you use for in, for of or Object.entries to walk an object or an array?',
    },
    answer: {
      es: 'for in enumera claves string enumerables, incluidas las heredadas; for of consume un iterable de valores; Object.entries devuelve pares propios enumerables de clave string, sin la cadena de prototipos.',
      en: 'for in enumerates enumerable string keys, including inherited ones; for of consumes an iterable of values; Object.entries returns own enumerable string-keyed pairs, without the prototype chain.',
    },
    distractors: [
      {
        es: 'for of sobre un objeto plano recorre las claves propias enumerables; for in sobre un array recorre los valores en orden de inserción.',
        en: 'for of on a plain object walks own enumerable keys; for in on an array walks values in insertion order.',
      },
      {
        es: 'Object.entries incluye propiedades heredadas enumerables y claves symbol, a diferencia de for in.',
        en: 'Object.entries includes inherited enumerable properties and symbol keys, unlike for in.',
      },
    ],
    explanation: {
      es: 'for of sobre un objeto no iterable lanza. for in en arrays entrega índices como string y puede recoger extensiones de Array.prototype, por eso se desaconseja ahí. Object.keys, values y entries omiten symbols y claves heredadas; para verlo todo hace falta Reflect.ownKeys. Map y Set están pensados para for of, no para for in.',
      en: 'for of on a non-iterable object throws. for in on arrays yields index strings and can pick up Array.prototype extensions, which is why it is discouraged there. Object.keys, values and entries skip symbols and inherited keys; seeing everything takes Reflect.ownKeys. Map and Set are designed for for of, not for in.',
    },
  },
  {
    id: 'fe-js-12',
    topic: 'JavaScript',
    prompt: {
      es: '¿Qué cortocircuita el encadenamiento opcional y qué no cubre?',
      en: 'What does optional chaining short-circuit, and what does it not cover?',
    },
    answer: {
      es: 'Si el valor antes de ?. es null o undefined, se omite el resto de ese eslabón y la expresión vale undefined; no trata otros falsy como ausentes, y un . posterior tras un ?. que sí resolvió puede lanzar.',
      en: 'If the value before ?. is null or undefined, the rest of that step is skipped and the expression is undefined; it does not treat other falsy values as missing, and a later . after a ?. that did resolve can still throw.',
    },
    distractors: [
      {
        es: 'a?.b.c es siempre seguro porque en cuanto aparece ?. queda protegida toda la ruta, incluso si b es null.',
        en: 'a?.b.c is always safe because once ?. appears the whole path is guarded, even if b is null.',
      },
      {
        es: '?. trata 0, false y la cadena vacía como ausentes, igual que ||, y también cortocircuita a undefined.',
        en: '?. treats 0, false and the empty string as missing, matching ||, so they also short-circuit to undefined.',
      },
    ],
    explanation: {
      es: 'Cortocircuitar significa que no se evalúa el acceso o la llamada de la derecha, y así se evitan efectos de lado. a?.b.c lanza si a existe y a.b es null, porque solo un eslabón es opcional; hace falta a?.b?.c. obj?.() omite la llamada si obj es nullish, pero no atrapa errores lanzados dentro de la función cuando sí se invoca.',
      en: 'Short-circuit means the access or call on the right is not evaluated, which avoids side effects. a?.b.c throws if a exists and a.b is null, because only one step is optional; you need a?.b?.c. obj?.() skips the call if obj is nullish, but it does not catch errors thrown inside the function when the call does happen.',
    },
  },
  {
    id: 'fe-js-13',
    topic: 'JavaScript',
    prompt: {
      es: '¿Cómo implementan los generadores el protocolo de iteración?',
      en: 'How do generators implement the iteration protocol?',
    },
    answer: {
      es: 'function* devuelve un objeto generador que es iterador (next, return, throw) e iterable (Symbol.iterator se devuelve a sí mismo); yield pausa y for of lo conduce hasta done true.',
      en: 'function* returns a generator object that is both an iterator (next, return, throw) and an iterable (Symbol.iterator returns itself); yield pauses and for of drives it until done is true.',
    },
    distractors: [
      {
        es: 'Llamar a la función generadora ejecuta el cuerpo de inmediato hasta el primer yield y ya devuelve ese valor producido.',
        en: 'Calling the generator function runs the body immediately until the first yield and already returns that produced value.',
      },
      {
        es: 'Un generador no es iterable; hay que envolverlo con Array.from antes de que for of pueda consumirlo.',
        en: 'A generator is not iterable; you must wrap it with Array.from before for of can consume it.',
      },
    ],
    explanation: {
      es: 'El cuerpo no arranca hasta el primer next(); los argumentos de los next siguientes se convierten en el resultado del yield pausado. El protocolo iterable es obj[Symbol.iterator]() devolviendo un iterador con next(). Los generadores unifican ambos papeles, y por eso yield* puede delegar en cualquier iterable. Un break en for of llama a return() del generador para que los finally sí se ejecuten.',
      en: 'The body does not start until the first next(); arguments of later next calls become the result of the paused yield. The iterable protocol is obj[Symbol.iterator]() returning an iterator with next(). Generators unify both roles, which is why yield* can delegate to any iterable. A break in for of invokes the generator return() path so finally blocks still run.',
    },
  },
  {
    id: 'fe-js-14',
    topic: 'JavaScript',
    prompt: {
      es: '¿Cómo se implementa un debounce con una clausura y un temporizador?',
      en: 'How do you implement a debounce with a closure and a timer?',
    },
    answer: {
      es: 'La función devuelta cierra sobre un id de timer; cada llamada hace clearTimeout del anterior y setTimeout de la función original para que corra tras el periodo de silencio.',
      en: 'The returned function closes over a timer id; each call clearTimeouts the previous one and setTimeouts the original function to run after the quiet period.',
    },
    distractors: [
      {
        es: 'El timer vive en el prototipo para que todas las instancias compartan el delay, y se cancela rechazando una Promise en lugar de clearTimeout.',
        en: 'The timer lives on the prototype so every instance shares the delay, and it cancels by rejecting a Promise instead of clearTimeout.',
      },
      {
        es: 'debounce y throttle son el mismo patrón: ambos disparan en el flanco inicial e ignoran el timer; la clausura solo recuerda argumentos.',
        en: 'debounce and throttle are the same pattern: both fire on the leading edge and ignore the timer; the closure only remembers arguments.',
      },
    ],
    explanation: {
      es: 'La clausura es lo que mantiene el timer privado entre llamadas sin contaminar el ámbito global. Un debounce trailing dispara después del silencio; la opción leading dispara ya y luego espera. throttle es distinto: garantiza una cadencia máxima, no espera a que haya calma. clearTimeout no ejecuta el callback, y por eso las llamadas rápidas colapsan en una sola macrotarea.',
      en: 'The closure is what keeps the timer private across calls without polluting the global scope. A trailing debounce fires after silence; a leading option fires immediately and then waits. throttle is different: it guarantees a maximum rate rather than waiting for quiet. clearTimeout does not run the callback, which is why rapid calls collapse into a single macrotask.',
    },
  },
  {
    id: 'fe-js-15',
    topic: 'JavaScript',
    prompt: {
      es: '¿En qué se diferencian los módulos ES de CommonJS respecto a enlaces vivos y await de nivel superior?',
      en: 'How do ES modules differ from CommonJS regarding live bindings and top-level await?',
    },
    answer: {
      es: 'En ESM los nombres importados son enlaces vivos a las variables exportadas; require de CommonJS suele fijar una instantánea, sobre todo al desestructurar primitivos. El await de nivel superior solo existe en ESM.',
      en: 'In ESM imported names are live bindings to the exported variables; CommonJS require typically snapshots values, especially when destructuring primitives. Top-level await exists only in ESM.',
    },
    distractors: [
      {
        es: 'ESM copia los valores al importar, igual que require; los enlaces vivos son un truco de compilación de TypeScript.',
        en: 'ESM copies values at import time, same as require; live bindings are a TypeScript compile trick.',
      },
      {
        es: 'El await de nivel superior funciona en CommonJS si el archivo exporta una función async, y un import circular ESM siempre lanza.',
        en: 'Top-level await works in CommonJS if the file exports an async function, and a circular ESM import always throws.',
      },
    ],
    explanation: {
      es: 'Si el módulo A exporta let count y luego lo incrementa, los importadores ESM ven el valor nuevo. const { count } = require(A) conserva el primitivo viejo. El objeto module.exports de CJS sí es mutable, así que mod.count puede parecer vivo. En ciclos ESM hay enlaces parciales en zona muerta hasta terminar la inicialización; en CJS el ciclo suele entregar un exports incompleto. El top-level await retrasa la evaluación del grafo ESM, algo que CJS no puede hacer.',
      en: 'If module A exports let count and later increments it, ESM importers see the new value. const { count } = require(A) keeps the old primitive. The CJS module.exports object itself is mutable, so mod.count can look live. Circular ESM graphs get partial bindings in the dead zone until initialisation finishes; CJS cycles often receive an incomplete exports object. Top-level await delays evaluation of the ESM graph, which CJS cannot do.',
    },
  },
  {
    id: 'fe-js-16',
    topic: 'JavaScript',
    prompt: {
      es: '¿Para qué sirven WeakMap y WeakSet y qué relación tienen con el recolector de basura?',
      en: 'What are WeakMap and WeakSet for, and how do they relate to the garbage collector?',
    },
    answer: {
      es: 'Asocian datos o pertenencia a objetos sin impedir que esos objetos se recolecten; cuando no queda otra referencia a la clave, la entrada puede desaparecer.',
      en: 'They attach data or membership to objects without preventing those objects from being collected; once nothing else references the key, the entry can disappear.',
    },
    distractors: [
      {
        es: 'WeakMap admite claves string si están internadas con Symbol.for, y WeakSet.forEach lista a los supervivientes tras un ciclo de GC.',
        en: 'WeakMap allows string keys if they are interned with Symbol.for, and WeakSet.forEach lists survivors after a GC cycle.',
      },
      {
        es: 'WeakSet guarda primitivos débiles como strings internados, y por eso tiene size, a diferencia de WeakMap.',
        en: 'WeakSet stores weak primitives such as interned strings, which is why it has a size property unlike WeakMap.',
      },
    ],
    explanation: {
      es: 'Las claves deben ser objetos (WeakMap también admite symbols no registrados en motores modernos). No son enumerables y no tienen size, porque enumerar dependería de un GC no determinista. El caso típico es metadatos privados en nodos del DOM o instancias de clase sin fugas. Un Map normal que retuviera esos nodos los dejaría anclados en memoria para siempre.',
      en: 'Keys must be objects (WeakMap also allows non-registered symbols in modern engines). They are not enumerable and have no size, because enumeration would depend on non-deterministic GC. The typical case is private metadata on DOM nodes or class instances without leaks. A regular Map holding those nodes would pin them in memory forever.',
    },
  },
  {
    id: 'fe-js-17',
    topic: 'JavaScript',
    prompt: {
      es: '¿Para qué sirve Symbol?',
      en: 'What is Symbol for?',
    },
    answer: {
      es: 'Crea claves de propiedad únicas que evitan colisiones y sostiene protocolos conocidos como Symbol.iterator, toStringTag y toPrimitive; Object.keys y for in las omiten.',
      en: 'It creates unique property keys that avoid collisions and powers well-known protocols such as Symbol.iterator, toStringTag and toPrimitive; Object.keys and for in skip them.',
    },
    distractors: [
      {
        es: 'Symbol("x") === Symbol("x") es true porque la misma descripción reutiliza la identidad, igual que Symbol.for.',
        en: 'Symbol("x") === Symbol("x") is true because the same description interns the value, like Symbol.for.',
      },
      {
        es: 'Los symbols son cadenas cifradas usadas por los campos privados de clase, y JSON.stringify los emite con prefijo @@.',
        en: 'Symbols are encrypted strings used for private class fields, and JSON.stringify emits them with an @@ prefix.',
      },
    ],
    explanation: {
      es: 'Cada Symbol() devuelve un valor nuevo aunque la descripción coincida; Symbol.for sí usa un registro global. Los campos privados (#campo) son otro mecanismo, no symbols. Los symbols conocidos dejan que un objeto personalice iteración, coerción y la etiqueta de toString. Para descubrirlos hace falta Object.getOwnPropertySymbols o Reflect.ownKeys.',
      en: 'Each Symbol() call returns a new unique value even with the same description; Symbol.for does use a global registry. Private fields (#field) are a different mechanism, not symbols. Well-known symbols let an object customise iteration, coercion and the toString tag. Discovering them takes Object.getOwnPropertySymbols or Reflect.ownKeys.',
    },
  },
  {
    id: 'fe-js-18',
    topic: 'JavaScript',
    prompt: {
      es: '¿Cómo funcionan los getters y setters en literales de objeto y en clases?',
      en: 'How do getters and setters work on object literals and on classes?',
    },
    answer: {
      es: 'Definen propiedades accesoras: leer ejecuta get y escribir ejecuta set. En un literal viven en el objeto; en una clase los de instancia viven en el prototipo y los static en el constructor.',
      en: 'They define accessor properties: reading runs get and writing runs set. On a literal they live on the object; on a class, instance get/set live on the prototype and static ones on the constructor.',
    },
    distractors: [
      {
        es: 'Un getter se ejecuta una sola vez y cachea el resultado en la instancia, por eso se usa como campo perezoso.',
        en: 'A getter runs once and then caches the result on the instance, which is why it is used as a lazy field.',
      },
      {
        es: 'Los setters no pueden aparecer en literales, solo en clases, y los getters de clase se instalan por instancia para cerrar sobre los argumentos del constructor.',
        en: 'Setters cannot appear in object literals, only in classes, and class getters are installed per instance to close over constructor arguments.',
      },
    ],
    explanation: {
      es: 'Los accesores se ven como propiedades, no como métodos, así que se invocan sin (). Un getter heredado de la clase sigue ejecutándose con this de la instancia. No puede coexistir una propiedad de datos y un accesor con el mismo nombre. Object.defineProperty también los crea. Si el getter lee el mismo nombre se produce recursión infinita.',
      en: 'Accessors are visible as properties, not methods, so they are invoked without (). An inherited class getter still runs with this bound to the instance. A data property and an accessor cannot share the same name. Object.defineProperty can add them too. If the getter reads the same property name you get infinite recursion.',
    },
  },
  {
    id: 'fe-js-19',
    topic: 'JavaScript',
    prompt: {
      es: '¿Por qué 0.1 + 0.2 no es 0.3 en JavaScript y qué arregla realmente el formateo con Intl?',
      en: 'Why is 0.1 + 0.2 not 0.3 in JavaScript, and what does Intl formatting actually fix?',
    },
    answer: {
      es: 'Los números usan IEEE 754 binary64, así que muchos decimales son aproximaciones periódicas; Intl.NumberFormat solo controla cómo se muestra el número (locale, moneda, dígitos), no cómo se almacena.',
      en: 'Numbers use IEEE 754 binary64, so many decimals are repeating approximations; Intl.NumberFormat only controls how a number is displayed (locale, currency, fraction digits), not how it is stored.',
    },
    distractors: [
      {
        es: 'JavaScript usa punto flotante decimal, así que 0.1 + 0.2 === 0.3; Intl.NumberFormat reescribe el valor guardado al decimal redondeado.',
        en: 'JavaScript uses decimal floating point, so 0.1 + 0.2 === 0.3; Intl.NumberFormat rewrites the stored value to the rounded decimal.',
      },
      {
        es: 'Number.EPSILON vale 0 y actúa como centinela al estilo de NaN; el redondeo de Intl muta el número in situ para recuperar precisión decimal.',
        en: 'Number.EPSILON is 0 and acts as a sentinel like NaN; Intl rounding mutates the number in place to restore decimal precision.',
      },
    ],
    explanation: {
      es: 'El binario no puede representar 0.1 de forma exacta, de ahí que la suma sea 0.30000000000000004. Se compara con una tolerancia de Number.EPSILON, se trabaja en enteros (céntimos) o se usa BigInt o librerías decimales. Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }) redondea solo para mostrar. toFixed también devuelve string; volver a Number puede reintroducir el error binario.',
      en: 'Binary cannot represent 0.1 exactly, which is why the sum is 0.30000000000000004. Compare with a Number.EPSILON tolerance, work in integer cents, or use BigInt or decimal libraries. Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }) rounds for display only. toFixed also returns a string; converting it back with Number can reintroduce the binary error.',
    },
  },
  {
    id: 'fe-js-20',
    topic: 'JavaScript',
    prompt: {
      es: '¿Qué hace Object.freeze y por qué esa inmutabilidad no es profunda?',
      en: 'What does Object.freeze do, and why is that immutability not deep?',
    },
    answer: {
      es: 'Hace no escribibles y no configurables las propiedades propias de ese objeto; los anidados siguen mutables salvo que se congelen por separado.',
      en: 'It makes own properties of that object non-writable and non-configurable; nested objects remain mutable unless they are frozen separately.',
    },
    distractors: [
      {
        es: 'Desde ES2015 freeze recorre los objetos anidados, así que un grafo congelado no se puede mutar a ninguna profundidad.',
        en: 'Since ES2015 freeze walks nested objects, so a frozen graph cannot be mutated at any depth.',
      },
      {
        es: 'freeze copia el objeto y sella la copia; el original sigue mutable, y las escrituras anidadas lanzan incluso en modo sloppy.',
        en: 'freeze copies the object and seals the copy; the original stays mutable, and nested writes throw even in sloppy mode.',
      },
    ],
    explanation: {
      es: 'freeze es superficial por diseño y devuelve la misma referencia, no una copia. En modo sloppy, asignar a una propiedad propia congelada falla en silencio; en strict lanza TypeError. Se puede hacer push a un array anidado aunque el contenedor esté frozen. Object.isFrozen solo informa del objeto superior. Un freeze profundo es un recorrido recursivo, o un structuredClone más freeze si basta una instantánea. Object.seal permite cambiar valores, pero no añadir ni borrar claves.',
      en: 'freeze is shallow by design and returns the same reference, not a copy. In sloppy mode, assigning to a frozen own property fails silently; in strict mode it throws TypeError. You can still push to a nested array even if the container is frozen. Object.isFrozen reports only the top object. A deep freeze is a recursive walk, or structuredClone plus freeze if a snapshot is enough. Object.seal allows value changes but not adding or deleting keys.',
    },
  },
];
