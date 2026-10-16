import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_JAVASCRIPT_CORE_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-js-01',
    topic: 'Bucle de eventos',
    prompt: {
      es: '¿Qué se ejecuta antes, un then de una Promise ya resuelta o un setTimeout de 0?',
      en: 'What runs first, the then of an already resolved Promise or a setTimeout of 0?',
    },
    answer: {
      es: 'El then. La Promise entra en la cola de microtareas y el temporizador en la de macrotareas. Las microtareas se vacian antes.',
      en: 'The then. The Promise goes on the microtask queue and the timer on the macrotask queue. Microtasks are drained first.',
    },
    distractors: [
      {
        es: 'El setTimeout, porque se registro antes y hay una sola cola.',
        en: 'The setTimeout, because it was registered first and there is a single queue.',
      },
      {
        es: 'A la vez. Un delay de 0 convierte el temporizador en microtarea.',
        en: 'At the same time. A delay of 0 turns the timer into a microtask.',
      },
    ],
    explanation: {
      es: 'Cuando la pila queda vacia, el motor acaba las promesas pendientes antes de pasar al siguiente temporizador.',
      en: 'When the stack is empty, the engine finishes pending promises before moving on to the next timer.',
    },
  },
  {
    id: 'fe-js-02',
    topic: 'Closure',
    prompt: {
      es: '¿Qué es una closure?',
      en: 'What is a closure?',
    },
    answer: {
      es: 'Una funcion que recuerda las variables del sitio donde se creo, aunque esa funcion se ejecute despues y fuera.',
      en: 'A function that remembers the variables from the place where it was created, even if that function runs later and somewhere else.',
    },
    distractors: [
      {
        es: 'Una copia del valor en el momento de llamar a la funcion. No ve cambios posteriores.',
        en: 'A copy of the value at the moment you call the function. It does not see later changes.',
      },
      {
        es: 'El nombre de una funcion flecha. Una funcion clasica no puede cerrar sobre variables.',
        en: 'The name of an arrow function. A classic function cannot close over variables.',
      },
    ],
    explanation: {
      es: 'Por eso un contador privado o un id de temporizador pueden vivir dentro de la funcion devuelta.',
      en: 'That is why a private counter or a timer id can live inside the function you return.',
    },
  },
  {
    id: 'fe-js-03',
    topic: 'this',
    prompt: {
      es: '¿Cómo se decide this en un metodo y en una funcion flecha?',
      en: 'How is this decided for a method and for an arrow function?',
    },
    answer: {
      es: 'El metodo recibe el objeto que lo llamo. La flecha no tiene this propio: usa el del sitio donde se creo, y no se puede reasignar.',
      en: 'The method receives the object that called it. The arrow has no this of its own: it uses the one from where it was created, and it cannot be reassigned.',
    },
    distractors: [
      {
        es: 'La flecha toma this de quien la llama, igual que un metodo.',
        en: 'The arrow takes this from whoever calls it, the same as a method.',
      },
      {
        es: 'this se fija al definir el metodo y ya no cambia, aunque lo saques del objeto.',
        en: 'this is fixed when you define the method and no longer changes, even if you pull it off the object.',
      },
    ],
    explanation: {
      es: 'Si pasas un metodo como callback, this se pierde. Una flecha o bind lo dejan fijo.',
      en: 'If you pass a method as a callback, this is lost. An arrow or bind keeps it fixed.',
    },
  },
  {
    id: 'fe-js-04',
    topic: 'let, const y var',
    prompt: {
      es: '¿Cuál es la diferencia entre let, const y var?',
      en: 'What is the difference between let, const and var?',
    },
    answer: {
      es: 'let y const viven en el bloque. const no se puede reasignar. var vive en la funcion y se puede leer como undefined antes de su linea.',
      en: 'let and const live in the block. const cannot be reassigned. var lives in the function and can be read as undefined before its line.',
    },
    distractors: [
      {
        es: 'const tambien impide cambiar las propiedades de un objeto. let y var no.',
        en: 'const also prevents changing the properties of an object. let and var do not.',
      },
      {
        es: 'let y var son iguales. La unica diferencia real es que const exige un valor inicial.',
        en: 'let and var are the same. The only real difference is that const requires an initial value.',
      },
    ],
    explanation: {
      es: 'En codigo nuevo se usa const por defecto y let cuando el enlace cambia. var se evita.',
      en: 'In new code you use const by default and let when the binding changes. var is avoided.',
    },
  },
  {
    id: 'fe-js-05',
    topic: 'Igualdad',
    prompt: {
      es: '¿Cuál es la diferencia entre == y ===?',
      en: 'What is the difference between == and ===?',
    },
    answer: {
      es: '=== compara sin convertir tipos. == convierte antes, y trata null y undefined como iguales entre si.',
      en: '=== compares without converting types. == converts first, and it treats null and undefined as equal to each other.',
    },
    distractors: [
      {
        es: '== solo convierte primitivos y, si hay un objeto, los dos comparan la referencia.',
        en: '== only converts primitives and, if there is an object, both compare the reference.',
      },
      {
        es: '=== mira el tipo y luego el valor, asi que NaN === NaN es true.',
        en: '=== looks at the type and then the value, so NaN === NaN is true.',
      },
    ],
    explanation: {
      es: 'En el dia a dia usa ===. Con == un 0 y un string "0" pueden colar como iguales.',
      en: 'Day to day, use ===. With == a 0 and a string "0" can slip through as equal.',
    },
  },
  {
    id: 'fe-js-06',
    topic: 'var en un for',
    prompt: {
      es: '¿Por qué los callbacks de un for con var ven el mismo indice final, y con let cada uno ve el suyo?',
      en: 'Why do callbacks from a for loop with var see the same final index, while with let each one sees its own?',
    },
    answer: {
      es: 'var es una sola variable de la funcion y el bucle la va cambiando. let crea una variable nueva en cada vuelta y cada callback cierra sobre la suya.',
      en: 'var is a single function variable and the loop keeps changing it. let creates a new variable on each round and each callback closes over its own.',
    },
    distractors: [
      {
        es: 'let copia el numero por valor y var lo guarda por referencia.',
        en: 'let copies the number by value and var stores it by reference.',
      },
      {
        es: 'var se lee como undefined porque los callbacks corren antes de que el bucle asigne.',
        en: 'var is read as undefined because the callbacks run before the loop assigns.',
      },
    ],
    explanation: {
      es: 'La closure recuerda la variable, no una foto. Cuando el setTimeout corre, el var ya vale el final.',
      en: 'The closure remembers the variable, not a snapshot. When the setTimeout runs, the var already holds the end value.',
    },
  },
  {
    id: 'fe-js-07',
    topic: 'bind',
    prompt: {
      es: '¿Qué hacen call, apply y bind con this?',
      en: 'What do call, apply and bind do with this?',
    },
    answer: {
      es: 'call y apply invocan ya la funcion con el this que eliges. bind devuelve una funcion nueva con ese this fijado. Ninguno cambia el this de una flecha.',
      en: 'call and apply invoke the function at once with the this you choose. bind returns a new function with that this fixed. None of them change the this of an arrow.',
    },
    distractors: [
      {
        es: 'Los tres reasignan tambien el this de una funcion flecha.',
        en: 'All three also reassign the this of an arrow function.',
      },
      {
        es: 'bind ejecuta la funcion al momento y call solo guarda el this para mas tarde.',
        en: 'bind runs the function at once and call only stores the this for later.',
      },
    ],
    explanation: {
      es: 'apply recibe los argumentos en un array. call los recibe sueltos. bind ademas puede dejar algunos argumentos ya puestos.',
      en: 'apply takes the arguments in an array. call takes them one by one. bind can also leave some arguments already filled in.',
    },
  },
  {
    id: 'fe-js-08',
    topic: 'Arrays',
    prompt: {
      es: '¿Qué metodos de array modifican el original y cuales devuelven otro?',
      en: 'Which array methods change the original and which return another one?',
    },
    answer: {
      es: 'Cambian el original push, pop, splice, sort y reverse. Devuelven otro map, filter, slice y concat.',
      en: 'push, pop, splice, sort and reverse change the original. map, filter, slice and concat return another one.',
    },
    distractors: [
      {
        es: 'sort y reverse devuelven un array nuevo. Solo splice modifica el original.',
        en: 'sort and reverse return a new array. Only splice changes the original.',
      },
      {
        es: 'map modifica el original si el callback no devuelve nada.',
        en: 'map changes the original if the callback returns nothing.',
      },
    ],
    explanation: {
      es: 'sort devuelve el mismo array, y eso esconde la mutacion. Si no quieres tocarlo, copia antes o usa toSorted.',
      en: 'sort returns the same array, and that hides the mutation. If you do not want to touch it, copy first or use toSorted.',
    },
  },
  {
    id: 'fe-js-09',
    topic: 'Promesas',
    prompt: {
      es: '¿Cuál es la diferencia entre Promise.all y Promise.race?',
      en: 'What is the difference between Promise.all and Promise.race?',
    },
    answer: {
      es: 'all espera a todas y falla en el primer rechazo. race se resuelve o rechaza con la primera que termine, sea exito o error.',
      en: 'all waits for every one and fails on the first rejection. race settles with the first one to finish, whether that is success or error.',
    },
    distractors: [
      {
        es: 'race ignora los rechazos y espera el primer exito. all espera a que todas cumplan antes de fallar.',
        en: 'race ignores rejections and waits for the first success. all waits for every fulfilment before failing.',
      },
      {
        es: 'Son alias. all es la version que ademas cancela las que siguen en curso.',
        en: 'They are aliases. all is the version that also cancels the ones still running.',
      },
    ],
    explanation: {
      es: 'all no cancela a las demas cuando una falla. Si quieres el primer exito e ignorar fallos sueltos, mira Promise.any.',
      en: 'all does not cancel the others when one fails. If you want the first success and to ignore single failures, look at Promise.any.',
    },
  },
  {
    id: 'fe-js-10',
    topic: 'async await',
    prompt: {
      es: '¿Cómo se capturan los errores con async y await?',
      en: 'How are errors caught with async and await?',
    },
    answer: {
      es: 'await lanza dentro del try. Sin await, la funcion async devuelve una Promise rechazada y el try de alrededor no la ve.',
      en: 'await throws inside the try. Without await, the async function returns a rejected Promise and the surrounding try does not see it.',
    },
    distractors: [
      {
        es: 'Un try alrededor de asyncFn() captura el rechazo, porque la funcion lanza en el momento.',
        en: 'A try around asyncFn() catches the rejection, because the function throws on the spot.',
      },
      {
        es: 'Una Promise rechazada que nadie espera se convierte en undefined y no avisa.',
        en: 'A rejected Promise that nobody awaits becomes undefined and does not warn.',
      },
    ],
    explanation: {
      es: 'Olvidar el await es la causa tipica de un rechazo no capturado. Si lo ignoras a proposito, encadena catch.',
      en: 'Forgetting the await is the typical cause of an unhandled rejection. If you ignore it on purpose, chain catch.',
    },
  },
  {
    id: 'fe-js-11',
    topic: 'Copia superficial',
    prompt: {
      es: '¿Cuándo una copia con spread no basta?',
      en: 'When is a copy with spread not enough?',
    },
    answer: {
      es: 'Cuando hay objetos anidados. spread copia solo el primer nivel y los hijos siguen siendo los mismos.',
      en: 'When there are nested objects. spread copies only the first level and the children stay the same.',
    },
    distractors: [
      {
        es: 'spread ya copia en profundidad los arrays. Solo falla con objetos que tengan prototipo.',
        en: 'spread already copies arrays in depth. It only fails on objects that have a prototype.',
      },
      {
        es: 'spread copia funciones y el prototipo. Para datos planos hace falta structuredClone.',
        en: 'spread copies functions and the prototype. For plain data you need structuredClone.',
      },
    ],
    explanation: {
      es: 'Si mutas un hijo despues de { ...obj }, tambien cambia el original. Para una copia honda de datos, structuredClone.',
      en: 'If you mutate a child after { ...obj }, the original changes too. For a deep copy of data, structuredClone.',
    },
  },
  {
    id: 'fe-js-12',
    topic: 'Encadenado opcional',
    prompt: {
      es: '¿Qué corta el operador ?. y que no corta?',
      en: 'What does the ?. operator skip and what does it not skip?',
    },
    answer: {
      es: 'Si lo de la izquierda es null o undefined, la expresion vale undefined y no sigue. Un 0, un false o un string vacio no cuentan como ausentes.',
      en: 'If the left side is null or undefined, the expression is undefined and it does not continue. A 0, a false or an empty string do not count as missing.',
    },
    distractors: [
      {
        es: 'En cuanto aparece un ?., toda la ruta queda protegida, aunque un tramo posterior sea null.',
        en: 'As soon as a ?. appears, the whole path is protected, even if a later step is null.',
      },
      {
        es: 'Trata 0 y el string vacio como ausentes, igual que ||.',
        en: 'It treats 0 and the empty string as missing, the same as ||.',
      },
    ],
    explanation: {
      es: 'a?.b.c falla si a existe y b es null. Hace falta a?.b?.c en cada tramo.',
      en: 'a?.b.c throws if a exists and b is null. You need a?.b?.c on each step.',
    },
  },
  {
    id: 'fe-js-13',
    topic: 'Hoisting',
    prompt: {
      es: '¿Qué pasa si lees una variable let antes de su linea?',
      en: 'What happens if you read a let variable before its line?',
    },
    answer: {
      es: 'Lanza un error. let y const existen en el bloque, pero no se pueden usar hasta su declaracion. var en ese caso vale undefined.',
      en: 'It throws. let and const exist in the block, but they cannot be used until their declaration. var in that case is undefined.',
    },
    distractors: [
      {
        es: 'let se lee como undefined, igual que var. Solo const lanza porque exige un valor.',
        en: 'let is read as undefined, the same as var. Only const throws because it requires a value.',
      },
      {
        es: 'El enlace no existe, asi que el error es el de una variable que nunca se declaro.',
        en: 'The binding does not exist, so the error is the one for a variable that was never declared.',
      },
    ],
    explanation: {
      es: 'Por eso se declaran arriba del bloque. No cuentes con el orden magico de var.',
      en: 'That is why you declare them at the top of the block. Do not rely on the magic order of var.',
    },
  },
  {
    id: 'fe-js-14',
    topic: 'Debounce',
    prompt: {
      es: '¿Cómo se hace un debounce con una closure?',
      en: 'How do you write a debounce with a closure?',
    },
    answer: {
      es: 'La funcion devuelta recuerda el id del temporizador. En cada llamada cancela el anterior y programa la funcion real para cuando haya silencio.',
      en: 'The returned function remembers the timer id. On each call it cancels the previous one and schedules the real function for when there is silence.',
    },
    distractors: [
      {
        es: 'El temporizador vive en el prototipo para que todas las instancias compartan el mismo delay.',
        en: 'The timer lives on the prototype so every instance shares the same delay.',
      },
      {
        es: 'Es el mismo patron que un throttle: dispara al primer clic y luego ignora el reloj.',
        en: 'It is the same pattern as a throttle: it fires on the first click and then ignores the clock.',
      },
    ],
    explanation: {
      es: 'La closure guarda el id en privado. clearTimeout no ejecuta el callback, por eso varias llamadas seguidas acaban en una.',
      en: 'The closure keeps the id private. clearTimeout does not run the callback, which is why several calls in a row end up as one.',
    },
  },
  {
    id: 'fe-js-15',
    topic: 'null y undefined',
    prompt: {
      es: '¿Cuál es la diferencia entre null y undefined?',
      en: 'What is the difference between null and undefined?',
    },
    answer: {
      es: 'undefined suele significar que nadie asigno el valor. null suele significar que si se asigno, y a proposito esta vacio.',
      en: 'undefined usually means nobody assigned the value. null usually means it was assigned, and it is empty on purpose.',
    },
    distractors: [
      {
        es: 'Son el mismo valor. === entre ellos es true y typeof de los dos es object.',
        en: 'They are the same value. === between them is true and typeof of both is object.',
      },
      {
        es: 'null es un objeto vacio y undefined es el 0 de los numeros.',
        en: 'null is an empty object and undefined is the 0 of numbers.',
      },
    ],
    explanation: {
      es: 'typeof null es object por un viejo fallo del lenguaje. Para un hueco opcional, muchos equipos acuerdan uno de los dos y no mezclan.',
      en: 'typeof null is object because of an old language bug. For an optional gap, many teams agree on one of the two and do not mix them.',
    },
  },
  {
    id: 'fe-js-16',
    topic: 'const y objetos',
    prompt: {
      es: '¿Por qué const no impide cambiar un objeto?',
      en: 'Why does const not stop you from changing an object?',
    },
    answer: {
      es: 'const fija el enlace, no el contenido. No puedes asignar otro objeto a esa variable, pero si puedes mutar sus campos.',
      en: 'const fixes the binding, not the contents. You cannot assign another object to that variable, but you can mutate its fields.',
    },
    distractors: [
      {
        es: 'Si impide la mutacion. Cambiar un campo de un const lanza en modo estricto.',
        en: 'It does prevent mutation. Changing a field of a const throws in strict mode.',
      },
      {
        es: 'const congela el primer nivel, como Object.freeze, y solo los hijos siguen mutables.',
        en: 'const freezes the top level, like Object.freeze, and only the children stay mutable.',
      },
    ],
    explanation: {
      es: 'Si quieres que nadie escriba, hace falta Object.freeze, y aun asi es solo el primer nivel, o no mutar y copiar.',
      en: 'If you want nobody to write, you need Object.freeze, and even then it is only the top level, or you avoid mutation and copy.',
    },
  },
  {
    id: 'fe-js-17',
    topic: 'map y forEach',
    prompt: {
      es: '¿Cuál es la diferencia entre map y forEach?',
      en: 'What is the difference between map and forEach?',
    },
    answer: {
      es: 'map devuelve un array nuevo con lo que retorna el callback. forEach no devuelve nada util: sirve para un efecto, no para transformar.',
      en: 'map returns a new array with what the callback returns. forEach returns nothing useful: it is for a side effect, not for a transform.',
    },
    distractors: [
      {
        es: 'forEach devuelve el array transformado y map solo recorre sin copiar.',
        en: 'forEach returns the transformed array and map only walks without copying.',
      },
      {
        es: 'map modifica el array original y forEach siempre trabaja sobre una copia.',
        en: 'map changes the original array and forEach always works on a copy.',
      },
    ],
    explanation: {
      es: 'Si encadenas map y el resultado no se usa, probablemente querias forEach, o al reves si esperabas un array.',
      en: 'If you chain map and nobody uses the result, you probably wanted forEach, or the other way around if you expected an array.',
    },
  },
  {
    id: 'fe-js-18',
    topic: 'Decimales',
    prompt: {
      es: '¿Por qué 0.1 + 0.2 no es 0.3 en JavaScript?',
      en: 'Why is 0.1 + 0.2 not 0.3 in JavaScript?',
    },
    answer: {
      es: 'Porque los numeros van en binario y muchos decimales no se pueden guardar exactos. La suma queda en una aproximacion.',
      en: 'Because numbers are stored in binary and many decimals cannot be stored exactly. The sum ends up as an approximation.',
    },
    distractors: [
      {
        es: 'JavaScript usa decimales exactos. 0.1 + 0.2 === 0.3 es true y el fallo es solo al pintar.',
        en: 'JavaScript uses exact decimals. 0.1 + 0.2 === 0.3 is true and the failure is only when painting.',
      },
      {
        es: 'Intl.NumberFormat corrige el numero guardado y a partir de ahi la suma cuadra.',
        en: 'Intl.NumberFormat fixes the stored number and from then on the sum is exact.',
      },
    ],
    explanation: {
      es: 'Para dinero, trabaja en centimos enteros. Formatear con Intl solo cambia como se muestra, no lo que hay guardado.',
      en: 'For money, work in integer cents. Formatting with Intl only changes how it is shown, not what is stored.',
    },
  },
  {
    id: 'fe-js-19',
    topic: 'for in y for of',
    prompt: {
      es: '¿Cuándo usas for of y cuando for in?',
      en: 'When do you use for of and when do you use for in?',
    },
    answer: {
      es: 'for of recorre los valores de un iterable, como un array. for in recorre nombres de propiedades enumerables, y puede incluir las heredadas.',
      en: 'for of walks the values of an iterable, such as an array. for in walks enumerable property names, and it can include inherited ones.',
    },
    distractors: [
      {
        es: 'for of sobre un objeto plano recorre las claves. for in sobre un array recorre los valores.',
        en: 'for of on a plain object walks the keys. for in on an array walks the values.',
      },
      {
        es: 'Son iguales en arrays. for in es solo la version antigua de for of.',
        en: 'They are the same on arrays. for in is only the old version of for of.',
      },
    ],
    explanation: {
      es: 'En arrays usa for of. for in te da indices como texto y puede ver cosas colgadas del prototipo.',
      en: 'On arrays use for of. for in gives you indexes as text and can see things hanging off the prototype.',
    },
  },
  {
    id: 'fe-js-20',
    topic: '?? y ||',
    prompt: {
      es: '¿Cuándo ?? y || no devuelven lo mismo?',
      en: 'When do ?? and || not return the same thing?',
    },
    answer: {
      es: 'Cuando el valor es 0, string vacio o false. || lo cambia por el respaldo. ?? solo cambia null o undefined y conserva ese 0.',
      en: 'When the value is 0, an empty string or false. || replaces it with the fallback. ?? only replaces null or undefined and keeps that 0.',
    },
    distractors: [
      {
        es: 'Cuando el valor es undefined. Ahi ?? devuelve el respaldo y || deja el undefined.',
        en: 'When the value is undefined. There ?? returns the fallback and || leaves the undefined.',
      },
      {
        es: 'Nunca. ?? es solo || con tipos mas estrictos.',
        en: 'Never. ?? is only || with stricter types.',
      },
    ],
    explanation: {
      es: 'Un contador en 0 no debe caer al valor por defecto. Para eso usa ??, no ||.',
      en: 'A counter at 0 should not fall through to the default. For that, use ??, not ||.',
    },
  },
];
