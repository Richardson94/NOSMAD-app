import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_TYPESCRIPT_ADVANCED_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-ts2-01',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Qué papel juega never en un switch exhaustivo sobre una unión discriminada?',
      en: 'What role does never play in an exhaustive switch over a discriminated union?',
    },
    answer: {
      es: 'Asignar el valor restante a una variable de tipo never en el default hace que el compilador falle si queda una variante sin tratar.',
      en: 'Assigning the remaining value to a never variable in the default case makes the compiler fail if a variant was left unhandled.',
    },
    distractors: [
      {
        es: 'never en el default borra en tiempo de ejecución el caso restante, así que el switch no puede caer al siguiente case.',
        en: 'never in the default erases the remaining case at runtime, so the switch cannot fall through to the next case.',
      },
      {
        es: 'Si el discriminante es never la unión estaba vacía, el switch es opcional y el compilador lo omite por completo.',
        en: 'If the discriminant is never the union was empty, the switch is optional and the compiler skips it entirely.',
      },
    ],
    explanation: {
      es: 'Es una comprobación solo de tipos: al añadir un miembro a la unión, el resto deja de ser never y assertNever o el default dejan de compilar. Exclude sobre la unión original calcula exactamente las variantes aún no cubiertas. La bandera noFallthroughCasesInSwitch evita otro error clásico, caer al case siguiente, pero no sustituye el test de never.',
      en: 'It is a type-only check: when a new member is added to the union, the remainder is no longer never and assertNever or the default stop compiling. Exclude on the original union computes exactly the variants not yet covered. The noFallthroughCasesInSwitch flag prevents another classic error, falling into the next case, but it does not replace the never test.',
    },
  },
  {
    id: 'fe-ts2-02',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Cómo se comporta un tipo condicional T extends U ? X : Y cuando T es un parámetro de tipo desnudo de una unión?',
      en: 'How does a conditional type T extends U ? X : Y behave when T is a naked type parameter of a union?',
    },
    answer: {
      es: 'Se distribuye: la comprobación se aplica a cada miembro de la unión y los resultados se vuelven a unir.',
      en: 'It distributes: the check is applied to each union member and the results are united again.',
    },
    distractors: [
      {
        es: 'Compara la unión entera como un solo tipo, así que la rama verdadera solo aplica si todos los miembros extienden U.',
        en: 'It compares the whole union as a single type, so the true branch applies only if every member extends U.',
      },
      {
        es: 'extends aquí es un instanceof en tiempo de ejecución, por eso el ternario sí se emite a JavaScript.',
        en: 'extends here is a runtime instanceof check, which is why the ternary is actually emitted to JavaScript.',
      },
    ],
    explanation: {
      es: 'Extract y Exclude están definidos con ese ternario distributivo: Extract deja los miembros que sí extienden U y Exclude los que no. Para desactivar la distribución se envuelve el parámetro, como [T] extends [U], patrón habitual al especializar uniones. Nada de esto existe en el JS emitido; es solo el sistema de tipos.',
      en: 'Extract and Exclude are defined with that distributive ternary: Extract keeps the members that do extend U and Exclude those that do not. To turn distribution off you wrap the parameter, as in [T] extends [U], a common pattern when specialising unions. None of this exists in the emitted JS; it is only the type system.',
    },
  },
  {
    id: 'fe-ts2-03',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Qué hace la palabra clave infer dentro de un tipo condicional?',
      en: 'What does the infer keyword do inside a conditional type?',
    },
    answer: {
      es: 'Introduce una variable de tipo que captura lo que ocupa una posición del patrón y solo está disponible en la rama verdadera.',
      en: 'It introduces a type variable that captures whatever occupies a position in the pattern and is available only in the true branch.',
    },
    distractors: [
      {
        es: 'Infiere el constructor en tiempo de ejecución, igual que typeof sobre un valor, y funciona en cualquier posición de tipo.',
        en: 'It infers the runtime constructor, just like typeof on a value, and it works in any type position.',
      },
      {
        es: 'Obliga al compilador a inferir un argumento genérico que omitiste, como si fuera un parámetro de tipo con valor por defecto.',
        en: 'It forces the compiler to infer a generic argument that you omitted, as if it were a type parameter with a default.',
      },
    ],
    explanation: {
      es: 'ReturnType, Parameters, ConstructorParameters e InstanceType están escritos con infer sobre la firma de una función o de un constructor. Fuera de un extends el compilador ni siquiera acepta infer, y typeof opera sobre valores, no sobre patrones de tipos. Combinado con Exclude se puede, por ejemplo, sacar el retorno y quitarle null en el mismo condicional.',
      en: 'ReturnType, Parameters, ConstructorParameters and InstanceType are written with infer over a function or constructor signature. Outside an extends clause the compiler does not even accept infer, and typeof operates on values, not on type patterns. Combined with Exclude you can, for instance, take the return type and strip null in the same conditional.',
    },
  },
  {
    id: 'fe-ts2-04',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Qué permite la cláusula as en un tipo mapeado, como [K in keyof T as NuevoNombre]?',
      en: 'What does the as clause allow in a mapped type, such as [K in keyof T as NewName]?',
    },
    answer: {
      es: 'Renombra cada clave del resultado; si la nueva clave se resuelve a never, esa propiedad desaparece del tipo.',
      en: 'It renames each resulting key; if the new key resolves to never, that property disappears from the type.',
    },
    distractors: [
      {
        es: 'Es una aserción que convierte cada clave a string para que el tipo mapeado pueda indexar cualquier objeto.',
        en: 'It is an assertion that converts each key to string so the mapped type can index any object.',
      },
      {
        es: 'Solo crea un alias legible; el nombre original de T sigue siendo la clave real del tipo resultante.',
        en: 'It only creates a readable alias; the original name from T remains the real key of the resulting type.',
      },
    ],
    explanation: {
      es: 'El remapado de claves suele combinarse con Capitalize o Uncapitalize para fabricar getNombre a partir de nombre. Filtrar con as never es el equivalente moderno de Omit cuando la condición depende del valor de la clave, no de una lista fija. Pick no puede renombrar; solo selecciona un subconjunto de las claves existentes.',
      en: 'Key remapping is often combined with Capitalize or Uncapitalize to build getName from name. Filtering with as never is the modern equivalent of Omit when the condition depends on the key value, not on a fixed list. Pick cannot rename; it only selects a subset of the existing keys.',
    },
  },
  {
    id: 'fe-ts2-05',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Cómo se deriva una unión de claves a partir de una constante de objeto sin repetir los nombres?',
      en: 'How do you derive a union of keys from an object constant without repeating the names?',
    },
    answer: {
      es: 'Se aplica typeof a la constante y luego keyof a ese tipo, lo que produce una unión de literales con los nombres de las claves.',
      en: 'You apply typeof to the constant and then keyof to that type, which produces a union of literals with the key names.',
    },
    distractors: [
      {
        es: 'Se llama Object.keys sobre la constante; TypeScript 5.4 tipa el resultado como la unión literal de esas claves.',
        en: 'You call Object.keys on the constant; TypeScript 5.4 types the result as the literal union of those keys.',
      },
      {
        es: 'Se usa instanceof sobre la constante para obtener un constructor y luego Extract extrae las claves de ese constructor.',
        en: 'You use instanceof on the constant to obtain a constructor and then Extract pulls the keys from that constructor.',
      },
    ],
    explanation: {
      es: 'keyof typeof rutas es el patrón canónico para un Record cuyas claves viven en un objeto de configuración. Object.keys sigue devolviendo string[] a propósito, porque los objetos pueden tener claves extra en ejecución. Con as const además se obtienen literales en los valores, no solo en las claves.',
      en: 'keyof typeof routes is the canonical pattern for a Record whose keys live in a configuration object. Object.keys still returns string[] on purpose, because objects can have extra keys at runtime. With as const you also get literals on the values, not only on the keys.',
    },
  },
  {
    id: 'fe-ts2-06',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Qué cambia as const en el tipo inferido de un literal de objeto o de arreglo?',
      en: 'What does as const change in the inferred type of an object or array literal?',
    },
    answer: {
      es: 'Infiere tipos literales de solo lectura (las cadenas y números exactos) en lugar de ensanchar a string, number o un arreglo mutable.',
      en: 'It infers readonly literal types (the exact strings and numbers) instead of widening to string, number or a mutable array.',
    },
    distractors: [
      {
        es: 'Congela el valor en tiempo de ejecución como Object.freeze, así que las mutaciones posteriores lanzan una excepción.',
        en: 'It freezes the value at runtime like Object.freeze, so later mutations throw an exception.',
      },
      {
        es: 'Es obligatorio para que satisfies funcione; sin as const el compilador rechaza el objeto aunque coincida con el tipo.',
        en: 'It is required for satisfies to work; without as const the compiler rejects the object even if it matches the type.',
      },
    ],
    explanation: {
      es: 'as const es una aserción de contexto de literales, no un freeze: el JS emitido no cambia. El tipo resultante es profundamente readonly para ese literal, a diferencia de la utilidad Readonly que solo cubre el primer nivel. satisfies puede usarse junto a as const, pero no lo necesita: su trabajo es otro, comprobar asignabilidad sin ensanchar.',
      en: 'as const is a literal-context assertion, not a freeze: the emitted JS does not change. The resulting type is deeply readonly for that literal, unlike the Readonly utility which only covers the first level. satisfies can be used together with as const, but it does not need it: its job is different, checking assignability without widening.',
    },
  },
  {
    id: 'fe-ts2-07',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Cuál es el límite principal de los tipos utilitarios Readonly y ReadonlyArray?',
      en: 'What is the main limit of the Readonly and ReadonlyArray utility types?',
    },
    answer: {
      es: 'Solo marcan el primer nivel como de solo lectura; los objetos y arreglos anidados siguen mutables según su tipo original.',
      en: 'They only mark the top level as readonly; nested objects and arrays stay mutable according to their original types.',
    },
    distractors: [
      {
        es: 'Recorren en profundidad cada propiedad anidada, equivalentes a un readonly profundo, así que las escrituras internas también son error.',
        en: 'They walk every nested property in depth, equivalent to a deep readonly, so inner writes are errors as well.',
      },
      {
        es: 'Borran la mutabilidad en tiempo de ejecución compilando a Object.freeze, por eso una escritura anidada lanza.',
        en: 'They erase mutability at runtime by compiling to Object.freeze, which is why a nested write throws.',
      },
    ],
    explanation: {
      es: 'Readonly y ReadonlyArray son mapeados superficiales: ReadonlyArray<User> impide push, pero user.name sigue siendo asignable si User no es readonly. Para profundidad hace falta un tipo mapeado recursivo propio; as const sí produce literales profundamente readonly, pero solo sobre el literal anotado. En ejecución no se emite ninguna protección.',
      en: 'Readonly and ReadonlyArray are shallow mapped types: ReadonlyArray<User> forbids push, but user.name remains assignable if User is not readonly. Depth requires a recursive mapped type of your own; as const does produce deeply readonly literals, but only on the annotated literal. At runtime no protection is emitted.',
    },
  },
  {
    id: 'fe-ts2-08',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Cuál es la diferencia clave entre Pick y Omit frente a Exclude y Extract?',
      en: 'What is the key difference between Pick and Omit versus Exclude and Extract?',
    },
    answer: {
      es: 'Pick y Omit seleccionan o quitan claves de un tipo objeto; Exclude y Extract filtran miembros de una unión.',
      en: 'Pick and Omit select or remove keys from an object type; Exclude and Extract filter members of a union.',
    },
    distractors: [
      {
        es: 'Pick y Extract conservan lo que coincide, Omit y Exclude lo quitan; ambos pares funcionan igual sobre objetos y uniones.',
        en: 'Pick and Extract keep what matches, Omit and Exclude remove it; both pairs work the same on objects and on unions.',
      },
      {
        es: 'Omit es el inverso de Pick en objetos, mientras Exclude es un helper de ejecución que borra claves de un valor.',
        en: 'Omit is the opposite of Pick on objects, while Exclude is a runtime helper that deletes keys from a value.',
      },
    ],
    explanation: {
      es: 'Omit se define como Pick usando Exclude sobre keyof T, de ahí que mezclarlos sea el error más frecuente: Exclude<User, "id"> no quita la propiedad id, deja el tipo objeto intacto. Extract sirve para quedarse, dentro de una unión, con los miembros asignables a un patrón, no para elegir campos. Ninguno de los cuatro existe en el JavaScript emitido.',
      en: 'Omit is defined as Pick using Exclude on keyof T, which is why mixing them is the most frequent mistake: Exclude<User, "id"> does not remove the id property, it leaves the object type intact. Extract is for keeping, inside a union, the members assignable to a pattern, not for choosing fields. None of the four exists in the emitted JavaScript.',
    },
  },
  {
    id: 'fe-ts2-09',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Cómo se combinan NonNullable, ReturnType y Parameters al tipar el resultado de una función que puede devolver null?',
      en: 'How do NonNullable, ReturnType and Parameters combine when typing the result of a function that may return null?',
    },
    answer: {
      es: 'ReturnType obtiene el tipo de retorno, NonNullable le quita null y undefined, y Parameters obtiene la tupla de argumentos.',
      en: 'ReturnType obtains the return type, NonNullable strips null and undefined from it, and Parameters obtains the argument tuple.',
    },
    distractors: [
      {
        es: 'NonNullable también elimina void y never, y ReturnType funciona sobre valores de función sin necesidad de typeof.',
        en: 'NonNullable also removes void and never, and ReturnType works on function values without needing typeof.',
      },
      {
        es: 'Parameters devuelve un objeto con los argumentos por nombre, y NonNullable convierte los parámetros opcionales en obligatorios.',
        en: 'Parameters returns an object with named arguments, and NonNullable turns optional parameters into required ones.',
      },
    ],
    explanation: {
      es: 'NonNullable es Exclude aplicado a null | undefined: no toca void, 0, ni la cadena vacía. ReturnType y Parameters exigen un tipo función, de ahí el typeof fn habitual; sobre un valor crudo el compilador se queja. Con strictNullChecks activado, quitar null del retorno es lo que permite usar el resultado sin comprobaciones extra.',
      en: 'NonNullable is Exclude applied to null | undefined: it does not touch void, 0, or the empty string. ReturnType and Parameters require a function type, hence the usual typeof fn; on a raw value the compiler complains. With strictNullChecks on, stripping null from the return is what lets you use the result without extra checks.',
    },
  },
  {
    id: 'fe-ts2-10',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Qué hacen los tipos de plantilla literal que un tipo string normal no puede hacer?',
      en: 'What do template literal types do that a normal string type cannot?',
    },
    answer: {
      es: 'Componen tipos literales de cadena y se distribuyen sobre uniones para formar literales nuevos, como nombres de eventos o rutas.',
      en: 'They compose string literal types and distribute over unions to form new literals, such as event names or routes.',
    },
    distractors: [
      {
        es: 'Emiten plantillas de JavaScript, así que el tipo existe como un valor concatenado en tiempo de ejecución.',
        en: 'They emit JavaScript templates, so the type exists as a concatenated value at runtime.',
      },
      {
        es: 'Solo formatean el nombre en los mensajes de error; el tipo resultante sigue siendo string.',
        en: 'They only format the name in error messages; the resulting type remains string.',
      },
    ],
    explanation: {
      es: 'Uppercase, Lowercase, Capitalize y Uncapitalize son utilidades intrínsecas pensadas para estas plantillas, por ejemplo Capitalize para pasar de "click" a un evento "onClick". La unión se distribuye igual que en un tipo condicional, lo que permite generar un Record de manejadores a partir de un conjunto de nombres. El emitido sigue siendo JavaScript normal: no queda ninguna plantilla de tipos.',
      en: 'Uppercase, Lowercase, Capitalize and Uncapitalize are intrinsic utilities built for these templates, for example Capitalize to go from "click" to an "onClick" event. The union distributes just like in a conditional type, which lets you generate a Record of handlers from a set of names. The emit remains ordinary JavaScript: no type template is left behind.',
    },
  },
  {
    id: 'fe-ts2-11',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿En qué se diferencian una firma de índice, Record y Map al modelar un diccionario de claves string a valores User?',
      en: 'How do an index signature, Record and Map differ when modelling a dictionary of string keys to User values?',
    },
    answer: {
      es: 'La firma de índice y Record describen un objeto plano en compilación; Map es una colección de ejecución con su propia API y sin trampas del prototipo de Object.',
      en: 'The index signature and Record describe a plain object at compile time; Map is a runtime collection with its own API and without Object prototype pitfalls.',
    },
    distractors: [
      {
        es: 'Record y Map son el mismo tipo; Map es solo el nombre de ejecución ES6 de Record.',
        en: 'Record and Map are the same type; Map is just the ES6 runtime name of Record.',
      },
      {
        es: 'Una firma de índice prohíbe propiedades con nombre extra, mientras Record<string, User> las permite y Map no existe en el sistema de tipos.',
        en: 'An index signature forbids extra named properties, while Record<string, User> allows them and Map does not exist in the type system.',
      },
    ],
    explanation: {
      es: 'Record se define como un tipo mapeado { [P in K]: V }, así que Record<"a" | "b", User> tiene claves conocidas y la firma [key: string]: User acepta cualquier string. Con noUncheckedIndexedAccess, tanto la firma como Record<string, User> añaden undefined al leer por índice, porque esa clave puede no existir. Map<string, User> sí tiene get que ya devuelve User | undefined de forma nativa.',
      en: 'Record is defined as a mapped type { [P in K]: V }, so Record<"a" | "b", User> has known keys and the [key: string]: User signature accepts any string. With noUncheckedIndexedAccess, both the signature and Record<string, User> add undefined on index reads, because that key may be missing. Map<string, User> already has get returning User | undefined natively.',
    },
  },
  {
    id: 'fe-ts2-12',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Cuándo rechaza TypeScript propiedades de más aunque su sistema de tipos sea estructural?',
      en: 'When does TypeScript reject extra properties even though its type system is structural?',
    },
    answer: {
      es: 'Cuando un literal de objeto fresco se asigna directo a un destino que no declara esas claves (comprobación de propiedades excedentes).',
      en: 'When a fresh object literal is assigned directly to a target that does not declare those keys (excess property check).',
    },
    distractors: [
      {
        es: 'Siempre: TypeScript usa tipado nominativo, así que dos tipos con la misma forma son incompatibles si no comparten nombre.',
        en: 'Always: TypeScript uses nominative typing, so two types with the same shape are incompatible unless they share a name.',
      },
      {
        es: 'Cuando la propiedad extra es opcional en el origen; las extra obligatorias sí se permiten porque siguen satisfaciendo el destino.',
        en: 'When the extra property is optional on the source; required extras are allowed because they still satisfy the target.',
      },
    ],
    explanation: {
      es: 'El tipado estructural admite el objeto si primero se guarda en una variable intermedia: ahí se pierde el carácter fresco y el extra deja de ser error. exactOptionalPropertyTypes es otra bandera, distinta, que separa clave ausente de clave presente con undefined; no es la comprobación de excedentes. Un tipo con firma de índice o un Record<string, ...> absorbe las claves de más a propósito.',
      en: 'Structural typing accepts the object if it is first stored in an intermediate variable: freshness is lost and the extra key stops being an error. exactOptionalPropertyTypes is a different flag that separates a missing key from a key present with undefined; it is not the excess property check. A type with an index signature or a Record<string, ...> absorbs extra keys on purpose.',
    },
  },
  {
    id: 'fe-ts2-13',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Por qué una aserción de tipo, incluido as unknown as T, es más arriesgada que un estrechamiento real?',
      en: 'Why is a type assertion, including as unknown as T, riskier than real narrowing?',
    },
    answer: {
      es: 'La aserción no comprueba ni convierte el valor; as unknown as T esquiva la compatibilidad y puede ocultar un desajuste hasta la ejecución.',
      en: 'The assertion does not check or convert the value; as unknown as T bypasses compatibility and can hide a mismatch until runtime.',
    },
    distractors: [
      {
        es: 'as unknown as T es la forma recomendada de validar JSON, porque unknown fuerza una comprobación de ejecución antes de la segunda aserción.',
        en: 'as unknown as T is the recommended way to validate JSON, because unknown forces a runtime check before the second assertion.',
      },
      {
        es: 'Las aserciones emiten instanceof, así que as T es seguro si T es una clase, y la doble aserción solo silencia genéricos.',
        en: 'Assertions emit instanceof, so as T is safe if T is a class, and the double assertion only silences generics.',
      },
    ],
    explanation: {
      es: 'Una aserción directa exige cierto solapamiento; pasar por unknown (o any) anula esa red de seguridad y no genera código. El estrechamiento real usa predicados "is", control de flujo o satisfies, que sí fallan en compilación si la forma no encaja. satisfies es la alternativa de TypeScript 4.9+ cuando quieres comprobar sin mentir sobre el tipo inferido.',
      en: 'A direct assertion still requires some overlap; going through unknown (or any) removes that safety net and emits no code. Real narrowing uses "is" predicates, control flow or satisfies, which do fail at compile time if the shape does not fit. satisfies is the TypeScript 4.9+ alternative when you want to check without lying about the inferred type.',
    },
  },
  {
    id: 'fe-ts2-14',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Cómo se distinguen never, void y unknown?',
      en: 'How do you distinguish never, void and unknown?',
    },
    answer: {
      es: 'never es el tipo vacío (funciones que lanzan o no terminan), void significa que el retorno debe ignorarse, y unknown es el tipo cima seguro que exige estrechamiento.',
      en: 'never is the empty type (functions that throw or do not terminate), void means the return must be ignored, and unknown is the safe top type that requires narrowing.',
    },
    distractors: [
      {
        es: 'void es un alias de undefined, never es un alias de null, y unknown es un alias de any en modo estricto.',
        en: 'void is an alias of undefined, never is an alias of null, and unknown is an alias of any in strict mode.',
      },
      {
        es: 'unknown significa que la función no puede retornar, void significa que retorna cualquier cosa, y never significa que el valor no se ha inicializado.',
        en: 'unknown means the function cannot return, void means it returns anything, and never means the value has not been initialised.',
      },
    ],
    explanation: {
      es: 'ReturnType de una función que siempre lanza es never, y Partial no tiene nada que ver con estos tres: opera sobre claves. void no es undefined: en un callback puedes devolver un valor y el compilador lo descarta, cosa que never no permite. unknown con strictNullChecks obliga a acotar antes de leer, al contrario que any.',
      en: 'ReturnType of a function that always throws is never, and Partial has nothing to do with these three: it operates on keys. void is not undefined: in a callback you may return a value and the compiler discards it, which never does not allow. unknown with strictNullChecks forces you to narrow before reading, unlike any.',
    },
  },
  {
    id: 'fe-ts2-15',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Por qué preferir sobrecargas de función frente a una sola firma con parámetros en unión cuando el retorno depende de la entrada?',
      en: 'Why prefer function overloads over a single signature with union parameters when the return type depends on the input?',
    },
    answer: {
      es: 'Las sobrecargas correlacionan cada lista de parámetros con su retorno; una firma en unión permite combinaciones inválidas y un retorno unión que el llamador debe estrechar.',
      en: 'Overloads correlate each parameter list with its return type; a union signature allows invalid combinations and a union return that the caller must narrow.',
    },
    distractors: [
      {
        es: 'Los parámetros en unión son equivalentes y más simples; el compilador de TypeScript 5.4 correlaciona solo cada miembro de la unión.',
        en: 'Union parameters are equivalent and simpler; the TypeScript 5.4 compiler correlates each union member automatically.',
      },
      {
        es: 'Las sobrecargas existen solo en archivos de declaración; en archivos de implementación el compilador ignora las firmas extra.',
        en: 'Overloads exist only in declaration files; in implementation files the compiler ignores the extra signatures.',
      },
    ],
    explanation: {
      es: 'La firma de implementación debe aceptar la unión ancha y no es visible para el llamador; las sobrecargas públicas sí lo son. Extract puede recuperar un par correlacionado a partir de una unión de firmas, pero no sustituye a declarar esas sobrecargas. Un genérico con condicional (T extends string ? number : boolean) es la alternativa moderna cuando no quieres repetir firmas.',
      en: 'The implementation signature must accept the wide union and is not visible to the caller; the public overloads are. Extract can recover a correlated pair from a union of signatures, but it does not replace declaring those overloads. A generic with a conditional (T extends string ? number : boolean) is the modern alternative when you do not want to repeat signatures.',
    },
  },
  {
    id: 'fe-ts2-16',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Para qué sirven los valores por defecto en genéricos y las anotaciones de varianza in y out?',
      en: 'What are generic defaults and the in and out variance annotations for?',
    },
    answer: {
      es: 'Los valores por defecto rellenan los argumentos de tipo que omites; in marca el parámetro como contravariante (consumidor) y out como covariante (productor) para que los errores de varianza salgan en compilación.',
      en: 'Defaults fill type arguments that you omit; in marks the parameter as contravariant (consumer) and out as covariant (producer) so variance mistakes become compile errors.',
    },
    distractors: [
      {
        es: 'Los valores por defecto son lo mismo que una restricción extends, e in y out renombran claves en tipos mapeados igual que la cláusula as.',
        en: 'Defaults are the same as an extends constraint, and in and out rename keys in mapped types just like the as clause.',
      },
      {
        es: 'in hace el parámetro invariante y out lo hace bivariante, restaurando el comportamiento por defecto de los parámetros de función en JavaScript.',
        en: 'in makes the parameter invariant and out makes it bivariant, restoring the default function parameter behaviour of JavaScript.',
      },
    ],
    explanation: {
      es: 'Un default no restringe: T = string permite omitir T, mientras T extends string exige un subtipo. Las anotaciones in y out (TypeScript 4.7+) documentan y comprueban la varianza en interfaces y alias; no son la cláusula in de un mapeado. NoInfer, añadido en TypeScript 5.4, sirve para bloquear una inferencia no deseada en un argumento, distinto tanto del default como de in/out. strictFunctionTypes ya hacía los parámetros de función contravariantes en métodos, y estas anotaciones extienden esa idea a los genéricos de tipos.',
      en: 'A default does not constrain: T = string lets you omit T, while T extends string requires a subtype. The in and out annotations (TypeScript 4.7+) document and check variance on interfaces and aliases; they are not the in clause of a mapped type. NoInfer, added in TypeScript 5.4, blocks unwanted inference on an argument, distinct from both defaults and in/out. strictFunctionTypes already made function parameters contravariant on methods, and these annotations extend that idea to type generics.',
    },
  },
  {
    id: 'fe-ts2-17',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Para qué sirve el operador satisfies?',
      en: 'What is the satisfies operator for?',
    },
    answer: {
      es: 'Comprueba que una expresión es asignable a un tipo sin cambiar el tipo inferido de esa expresión, así que los literales no se ensanchan.',
      en: 'It checks that an expression is assignable to a type without changing the inferred type of that expression, so literals are not widened.',
    },
    distractors: [
      {
        es: 'Es una aserción más segura: el valor se convierte al tipo destino y las claves de más se eliminan.',
        en: 'It is a safer assertion: the value is converted to the target type and extra keys are stripped.',
      },
      {
        es: 'Sustituye a as const haciendo cada propiedad readonly y literal, incluidos los objetos anidados.',
        en: 'It replaces as const by making every property readonly and literal, including nested objects.',
      },
    ],
    explanation: {
      es: 'Con satisfies Record<string, string | Rgb> una paleta conserva que "red" es una tupla y "green" es un string, cosa que una anotación : Record ensancharía. A diferencia de as, si una clave no encaja el compilador falla; no se emite conversión alguna. as const sigue haciendo falta cuando quieres profundidad readonly, y suele combinarse: el literal as const satisfies el contrato.',
      en: 'With satisfies Record<string, string | Rgb> a palette keeps "red" as a tuple and "green" as a string, which a : Record annotation would widen. Unlike as, if a key does not fit the compiler fails; no conversion is emitted. as const is still needed when you want readonly depth, and they are often combined: the literal as const satisfies the contract.',
    },
  },
  {
    id: 'fe-ts2-18',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Cómo funcionan juntos los archivos de declaración y el aumento de módulos?',
      en: 'How do declaration files and module augmentation work together?',
    },
    answer: {
      es: 'Los .d.ts describen tipos de JavaScript; el aumento (declare module más fusión de interfaces) añade campos a un módulo existente sin editar sus fuentes.',
      en: 'The .d.ts files describe JavaScript types; augmentation (declare module plus interface merging) adds fields to an existing module without editing its sources.',
    },
    distractors: [
      {
        es: 'El aumento reescribe el .js de la librería en compilación, por eso los tipos y el tiempo de ejecución se mantienen sincronizados.',
        en: 'Augmentation rewrites the library .js at compile time, which is why types and runtime stay in sync.',
      },
      {
        es: 'Solo se pueden aumentar espacios de nombres ambient; los módulos ES exigen un parche en node_modules o desactivar skipLibCheck.',
        en: 'Only ambient namespaces can be augmented; ES modules require a patch in node_modules or turning skipLibCheck off.',
      },
    ],
    explanation: {
      es: 'La fusión de declaraciones es la misma que en interface: dos Express.Request se combinan, un type alias con el mismo nombre no. skipLibCheck evita type-checkear los .d.ts de terceros, útil cuando un aumento choca con tipos mal publicados, pero no crea el aumento. declare global cubre el ámbito global; declare module cubre un id de paquete concreto.',
      en: 'Declaration merging is the same as with interface: two Express.Request declarations combine, a type alias with the same name does not. skipLibCheck skips type-checking third-party .d.ts files, handy when an augmentation clashes with poorly published types, but it does not create the augmentation. declare global covers the global scope; declare module covers a specific package id.',
    },
  },
  {
    id: 'fe-ts2-19',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿En qué se diferencian un enum de TypeScript, una unión de literales y un const enum?',
      en: 'How do a TypeScript enum, a union of literals and a const enum differ?',
    },
    answer: {
      es: 'El enum es un objeto de ejecución; la unión de literales se borra al compilar; el const enum inserta los miembros en el emitido y puede desaparecer, pero isolatedModules y los empaquetadores suelen prohibirlo salvo que preserveConstEnums esté activo.',
      en: 'The enum is a runtime object; the literal union is erased at compile time; the const enum inlines members in the emit and may disappear, but isolatedModules and bundlers often forbid it unless preserveConstEnums is on.',
    },
    distractors: [
      {
        es: 'Los tres se borran por completo; elegir entre ellos es solo una cuestión de legibilidad, sin diferencia en ejecución.',
        en: 'All three are erased completely; choosing between them is only a readability concern, with no runtime difference.',
      },
      {
        es: 'El const enum es la única forma permitida con isolatedModules porque no tiene emitido de ejecución.',
        en: 'The const enum is the only form allowed under isolatedModules because it has no runtime emit.',
      },
    ],
    explanation: {
      es: 'isolatedModules exige que cada archivo se transpile solo, y un const enum necesita el programa entero para inlinear, de ahí el error. preserveConstEnums fuerza a emitir el objeto aunque sea const, lo que lo hace compatible con esos transpiladores. Una unión de literales, o un objeto as const más keyof typeof, es la alternativa habitual sin runtime ni trampas de emit.',
      en: 'isolatedModules requires each file to be transpiled on its own, and a const enum needs the whole program to inline, hence the error. preserveConstEnums forces the object to be emitted even if it is const, which makes it compatible with those transpilers. A literal union, or an as const object plus keyof typeof, is the usual alternative with no runtime and no emit traps.',
    },
  },
  {
    id: 'fe-ts2-20',
    topic: 'TypeScript avanzado',
    prompt: {
      es: '¿Por qué importan las importaciones solo de tipo cuando isolatedModules está activo?',
      en: 'Why do type-only imports matter when isolatedModules is enabled?',
    },
    answer: {
      es: 'import type e import { type X } se borran por completo; isolatedModules compila cada archivo por separado, así que los valores importados solo como tipos deben marcarse o el emitido dejaría un import de ejecución que puede no existir.',
      en: 'import type and import { type X } are fully erased; isolatedModules compiles each file on its own, so values imported only as types must be marked or the emit would leave a runtime import that may not exist.',
    },
    distractors: [
      {
        es: 'isolatedModules inserta los tipos importados en cada archivo, así que import type es opcional y solo una regla de estilo.',
        en: 'isolatedModules inlines the imported types into each file, so import type is optional and only a style rule.',
      },
      {
        es: 'Las importaciones solo de tipo dejan los tipos en el JavaScript como comentarios, que isolatedModules necesita para type-checkear el emitido.',
        en: 'Type-only imports keep the types in the JavaScript as comments, which isolatedModules needs in order to type-check the emit.',
      },
    ],
    explanation: {
      es: 'Babel, esbuild y swc no hacen análisis de programa completo, que es exactamente lo que isolatedModules asume. verbatimModuleSyntax (TypeScript 5.0+) endurece la regla: si el símbolo es solo tipo, el modificador type es obligatorio y el import de valor queda para lo que sí existe en JS. importsNotUsedAsValues y preserveValueImports son las banderas anteriores; NonNullable no interviene en este mecanismo de emit.',
      en: 'Babel, esbuild and swc do not perform whole-program analysis, which is exactly what isolatedModules assumes. verbatimModuleSyntax (TypeScript 5.0+) tightens the rule: if the symbol is type-only, the type modifier is mandatory and a value import remains for what does exist in JS. importsNotUsedAsValues and preserveValueImports are the older flags; NonNullable plays no part in this emit mechanism.',
    },
  },
];
