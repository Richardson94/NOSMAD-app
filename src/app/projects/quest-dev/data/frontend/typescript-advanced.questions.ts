import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const FRONTEND_TYPESCRIPT_ADVANCED_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'fe-ts2-01',
    topic: 'Estrechar una union',
    prompt: {
      es: '¿Cómo estrechas una union antes de usar el valor?',
      en: 'How do you narrow a union before using the value?',
    },
    answer: {
      es: 'Con un if que el compilador entienda: typeof, instanceof, in, o un campo comun como kind. Dentro de esa rama el tipo ya es el miembro concreto.',
      en: 'With an if the compiler understands: typeof, instanceof, in, or a shared field such as kind. Inside that branch the type is already the concrete member.',
    },
    distractors: [
      {
        es: 'Asignas el valor con as y el compilador comprueba el tipo en ejecucion.',
        en: 'You assign the value with as and the compiler checks the type at runtime.',
      },
      {
        es: 'No hace falta: una union permite usar los campos de todos los miembros a la vez.',
        en: 'You do not need to: a union lets you use the fields of every member at once.',
      },
    ],
    explanation: {
      es: 'Si el if no estrecha, suele ser porque la comprobacion no es algo que TypeScript pueda seguir.',
      en: 'If the if does not narrow, it is usually because the check is not something TypeScript can follow.',
    },
  },
  {
    id: 'fe-ts2-02',
    topic: 'Union discriminada',
    prompt: {
      es: '¿Qué es una union discriminada?',
      en: 'What is a discriminated union?',
    },
    answer: {
      es: 'Varios objetos unidos por | que comparten un campo literal, como type: "ok" o type: "error". Un switch sobre ese campo estrecha el resto.',
      en: 'Several objects joined by | that share a literal field, such as type: "ok" or type: "error". A switch on that field narrows the rest.',
    },
    distractors: [
      {
        es: 'Una interface que extiende a otra y hereda sus campos en ejecucion.',
        en: 'An interface that extends another and inherits its fields at runtime.',
      },
      {
        es: 'Un enum numerico. El discriminante es el valor del enum en el bundle.',
        en: 'A numeric enum. The discriminant is the enum value in the bundle.',
      },
    ],
    explanation: {
      es: 'Es el patron habitual para un resultado que puede ser exito o error sin usar any.',
      en: 'It is the usual pattern for a result that may be success or error without using any.',
    },
  },
  {
    id: 'fe-ts2-03',
    topic: 'Interseccion',
    prompt: {
      es: '¿Qué significa un tipo A & B?',
      en: 'What does a type A & B mean?',
    },
    answer: {
      es: 'El valor tiene que cumplir A y B a la vez. Junta los campos de los dos objetos.',
      en: 'The value must satisfy both A and B. It joins the fields of both objects.',
    },
    distractors: [
      {
        es: 'El valor es A o B, y eliges uno en ejecucion. Es lo mismo que A | B.',
        en: 'The value is A or B, and you pick one at runtime. It is the same as A | B.',
      },
      {
        es: 'B pisa a A y los campos de A desaparecen del tipo.',
        en: 'B overrides A and the fields of A disappear from the type.',
      },
    ],
    explanation: {
      es: 'La union es o. La interseccion es y. Para mezclar dos formas de objeto se usa &.',
      en: 'A union is or. An intersection is and. To mix two object shapes you use &.',
    },
  },
  {
    id: 'fe-ts2-04',
    topic: 'Partial',
    prompt: {
      es: '¿Qué hace Partial?',
      en: 'What does Partial do?',
    },
    answer: {
      es: 'Coge un tipo objeto y vuelve opcionales todas sus propiedades. Sirve para un parche o un formulario a medias.',
      en: 'It takes an object type and makes every property optional. It is used for a patch or a half filled form.',
    },
    distractors: [
      {
        es: 'Quita null y undefined del tipo, como NonNullable.',
        en: 'It removes null and undefined from the type, like NonNullable.',
      },
      {
        es: 'Deja el objeto de solo lectura en ejecucion, como Object.freeze.',
        en: 'It makes the object readonly at runtime, like Object.freeze.',
      },
    ],
    explanation: {
      es: 'Partial<User> permite { name: "Ana" } aunque User pida mas campos. No cambia el valor en ejecucion.',
      en: 'Partial<User> allows { name: "Ana" } even if User requires more fields. It does not change the value at runtime.',
    },
  },
  {
    id: 'fe-ts2-05',
    topic: 'Pick',
    prompt: {
      es: '¿Qué hace Pick?',
      en: 'What does Pick do?',
    },
    answer: {
      es: 'Se queda solo con las claves que indicas de un tipo objeto. El resto no forma parte del resultado.',
      en: 'It keeps only the keys you name from an object type. The rest is not part of the result.',
    },
    distractors: [
      {
        es: 'Filtra miembros de una union, igual que Extract.',
        en: 'It filters members of a union, the same as Extract.',
      },
      {
        es: 'Copia el objeto en ejecucion y borra las claves que no listaste.',
        en: 'It copies the object at runtime and deletes the keys you did not list.',
      },
    ],
    explanation: {
      es: 'Pick<User, "id" | "name"> es un User reducido. Para quitar claves usa Omit.',
      en: 'Pick<User, "id" | "name"> is a smaller User. To drop keys, use Omit.',
    },
  },
  {
    id: 'fe-ts2-06',
    topic: 'Omit',
    prompt: {
      es: '¿Qué hace Omit?',
      en: 'What does Omit do?',
    },
    answer: {
      es: 'Quita las claves que indicas de un tipo objeto y deja el resto.',
      en: 'It removes the keys you name from an object type and leaves the rest.',
    },
    distractors: [
      {
        es: 'Quita miembros de una union. Omit<string | number, string> deja number.',
        en: 'It removes members of a union. Omit<string | number, string> leaves number.',
      },
      {
        es: 'Borra esas propiedades del objeto cuando corre el JavaScript.',
        en: 'It deletes those properties from the object when the JavaScript runs.',
      },
    ],
    explanation: {
      es: 'Omit<User, "password"> sirve para no exponer un campo. Exclude trabaja sobre uniones, no sobre claves.',
      en: 'Omit<User, "password"> is used so you do not expose a field. Exclude works on unions, not on keys.',
    },
  },
  {
    id: 'fe-ts2-07',
    topic: 'Record',
    prompt: {
      es: '¿Cómo se usa Record?',
      en: 'How do you use Record?',
    },
    answer: {
      es: 'Record<Clave, Valor> describe un objeto cuyas claves son de ese tipo y cuyos valores son del otro. Por ejemplo un diccionario de id a usuario.',
      en: 'Record<Key, Value> describes an object whose keys are of that type and whose values are of the other. For example a dictionary from id to user.',
    },
    distractors: [
      {
        es: 'Record es el tipo de un Map de JavaScript. get devuelve el valor o undefined.',
        en: 'Record is the type of a JavaScript Map. get returns the value or undefined.',
      },
      {
        es: 'Obliga a que el objeto tenga una sola clave y falla si hay mas de un campo.',
        en: 'It requires the object to have a single key and fails if there is more than one field.',
      },
    ],
    explanation: {
      es: 'Record<string, User> es un objeto plano. Si necesitas claves que no sean string, o metodos como get, usa Map.',
      en: 'Record<string, User> is a plain object. If you need keys that are not strings, or methods such as get, use a Map.',
    },
  },
  {
    id: 'fe-ts2-08',
    topic: 'ReturnType',
    prompt: {
      es: '¿Para qué sirve ReturnType?',
      en: 'What is ReturnType for?',
    },
    answer: {
      es: 'Obtiene el tipo que devuelve una funcion, sin volver a escribirlo. Se usa como ReturnType<typeof crearUsuario>.',
      en: 'It gets the type a function returns, without writing it again. You use it as ReturnType<typeof createUser>.',
    },
    distractors: [
      {
        es: 'Ejecuta la funcion en compilacion y usa el valor real como tipo.',
        en: 'It runs the function at compile time and uses the real value as the type.',
      },
      {
        es: 'Devuelve la lista de argumentos. Para el retorno esta Parameters.',
        en: 'It returns the argument list. The return type is what Parameters is for.',
      },
    ],
    explanation: {
      es: 'Hace falta typeof si partes de la funcion, no del tipo. Parameters hace lo mismo con los argumentos.',
      en: 'You need typeof if you start from the function, not from a type. Parameters does the same for the arguments.',
    },
  },
  {
    id: 'fe-ts2-09',
    topic: 'as const',
    prompt: {
      es: '¿Qué cambia as const en un objeto o en un array?',
      en: 'What does as const change on an object or an array?',
    },
    answer: {
      es: 'El compilador guarda los literales exactos y marca el valor como readonly. No congela el objeto en ejecucion.',
      en: 'The compiler keeps the exact literals and marks the value as readonly. It does not freeze the object at runtime.',
    },
    distractors: [
      {
        es: 'Equivale a Object.freeze: una escritura posterior lanza en el navegador.',
        en: 'It is the same as Object.freeze: a later write throws in the browser.',
      },
      {
        es: 'Ensancha el tipo a string o number para que puedas reasignar cualquier texto.',
        en: 'It widens the type to string or number so you can reassign any text.',
      },
    ],
    explanation: {
      es: 'Sirve para que un listado de rutas o de roles no se convierta en string generico.',
      en: 'It is used so a list of routes or roles does not become a generic string.',
    },
  },
  {
    id: 'fe-ts2-10',
    topic: 'Aserciones',
    prompt: {
      es: '¿Por qué una asercion con as es mas arriesgada que comprobar el tipo?',
      en: 'Why is an assertion with as riskier than checking the type?',
    },
    answer: {
      es: 'as no comprueba ni convierte el valor. Le dices al compilador que confie, y un desajuste aparece luego en ejecucion.',
      en: 'as does not check or convert the value. You tell the compiler to trust you, and a mismatch shows up later at runtime.',
    },
    distractors: [
      {
        es: 'as unknown as T valida el JSON porque unknown ejecuta una comprobacion antes del segundo as.',
        en: 'as unknown as T validates JSON because unknown runs a check before the second as.',
      },
      {
        es: 'as emite un instanceof, asi que es seguro cuando el tipo es una clase.',
        en: 'as emits an instanceof, so it is safe when the type is a class.',
      },
    ],
    explanation: {
      es: 'Estrecha con un if o con un predicado. Reservar as para cuando de verdad no hay otra forma.',
      en: 'Narrow with an if or with a predicate. Save as for when there really is no other way.',
    },
  },
  {
    id: 'fe-ts2-11',
    topic: 'void',
    prompt: {
      es: '¿Qué significa que una funcion devuelva void?',
      en: 'What does it mean for a function to return void?',
    },
    answer: {
      es: 'Que quien llama debe ignorar el retorno. No es lo mismo que devolver undefined a proposito.',
      en: 'That the caller should ignore the return. It is not the same as returning undefined on purpose.',
    },
    distractors: [
      {
        es: 'void es un alias de undefined. La funcion tiene que acabar con return undefined.',
        en: 'void is an alias of undefined. The function must end with return undefined.',
      },
      {
        es: 'void significa que la funcion no termina nunca, igual que never.',
        en: 'void means the function never finishes, the same as never.',
      },
    ],
    explanation: {
      es: 'En un callback puedes devolver un valor y, si el tipo pedido es void, el compilador lo ignora.',
      en: 'In a callback you may return a value and, if the expected type is void, the compiler ignores it.',
    },
  },
  {
    id: 'fe-ts2-12',
    topic: 'never',
    prompt: {
      es: '¿Para qué sirve el tipo never?',
      en: 'What is the never type for?',
    },
    answer: {
      es: 'Representa un valor que no existe. Lo ves en una funcion que siempre lanza, o en el caso final de un switch que ya cubrio toda la union.',
      en: 'It stands for a value that does not exist. You see it on a function that always throws, or in the final branch of a switch that already covered the whole union.',
    },
    distractors: [
      {
        es: 'Es un alias de null. Se usa cuando el campo aun no se ha rellenado.',
        en: 'It is an alias of null. It is used when the field has not been filled yet.',
      },
      {
        es: 'Borra ese caso en ejecucion para que el switch no caiga al siguiente.',
        en: 'It deletes that case at runtime so the switch does not fall through to the next one.',
      },
    ],
    explanation: {
      es: 'Si anades un miembro a la union y el default asigna a never, el proyecto deja de compilar hasta que trates ese caso.',
      en: 'If you add a member to the union and the default assigns to never, the project stops compiling until you handle that case.',
    },
  },
  {
    id: 'fe-ts2-13',
    topic: 'extends de interface',
    prompt: {
      es: '¿Cómo se extiende una interface?',
      en: 'How do you extend an interface?',
    },
    answer: {
      es: 'Con extends. La nueva interface tiene los campos de la base mas los suyos. Una clase puede implementarla.',
      en: 'With extends. The new interface has the fields of the base plus its own. A class can implement it.',
    },
    distractors: [
      {
        es: 'Copiando los campos a mano. extends solo existe en clases, no en interfaces.',
        en: 'By copying the fields by hand. extends exists only on classes, not on interfaces.',
      },
      {
        es: 'extends fusiona las dos interfaces en ejecucion y crea un prototipo.',
        en: 'extends merges the two interfaces at runtime and creates a prototype.',
      },
    ],
    explanation: {
      es: 'Si prefieres un type, la mezcla equivalente es una interseccion con &. No hay prototipo que heredar: es solo el tipo.',
      en: 'If you prefer a type, the matching mix is an intersection with &. There is no prototype to inherit: it is only the type.',
    },
  },
  {
    id: 'fe-ts2-14',
    topic: 'Propiedad opcional',
    prompt: {
      es: '¿Qué significa el signo de interrogacion en una propiedad, como name?: string?',
      en: 'What does the question mark on a property mean, as in name?: string?',
    },
    answer: {
      es: 'Que la propiedad puede no estar. Quien lee debe contar con que valga undefined.',
      en: 'That the property may be missing. Whoever reads it must allow for undefined.',
    },
    distractors: [
      {
        es: 'Que el campo es obligatorio y el interrogacion solo documenta que a veces viene vacio.',
        en: 'That the field is required and the question mark only documents that it sometimes comes empty.',
      },
      {
        es: 'Que en ejecucion se rellena con un string vacio si nadie lo envia.',
        en: 'That at runtime it is filled with an empty string if nobody sends it.',
      },
    ],
    explanation: {
      es: 'No es lo mismo que una propiedad obligatoria de tipo string | undefined: esa exige que la clave exista.',
      en: 'It is not the same as a required property of type string | undefined: that one demands that the key exists.',
    },
  },
  {
    id: 'fe-ts2-15',
    topic: 'Type guard',
    prompt: {
      es: '¿Qué aporta escribir el retorno de una funcion como value is Product?',
      en: 'What do you gain by writing a function return type as value is Product?',
    },
    answer: {
      es: 'Dentro del if que llama a esa funcion, TypeScript trata el valor como Product. Sin eso, un boolean no estrecha nada.',
      en: 'Inside the if that calls that function, TypeScript treats the value as Product. Without it, a boolean does not narrow anything.',
    },
    distractors: [
      {
        es: 'El compilador valida en ejecucion que el objeto tenga la forma de Product.',
        en: 'The compiler validates at runtime that the object has the Product shape.',
      },
      {
        es: 'Sustituye a as y convierte el valor al tipo Product al llamar a la funcion.',
        en: 'It replaces as and converts the value to the Product type when you call the function.',
      },
    ],
    explanation: {
      es: 'La comprobacion real la escribes tu en el cuerpo. Si el predicado miente, el fallo sale al usar el valor.',
      en: 'You write the real check in the body. If the predicate lies, the failure shows up when the value is used.',
    },
  },
  {
    id: 'fe-ts2-16',
    topic: 'Tipado estructural',
    prompt: {
      es: '¿Por qué TypeScript acepta un objeto que tiene campos de mas?',
      en: 'Why does TypeScript accept an object that has extra fields?',
    },
    answer: {
      es: 'Porque mira la forma, no el nombre del tipo. Si tiene los campos pedidos, vale, aunque traiga otros.',
      en: 'Because it looks at the shape, not at the type name. If it has the required fields, it is fine, even with extra ones.',
    },
    distractors: [
      {
        es: 'Nunca los acepta. Dos tipos con la misma forma son distintos si el nombre no coincide.',
        en: 'It never accepts them. Two types with the same shape are different if the name does not match.',
      },
      {
        es: 'Solo si el campo extra es opcional. Un campo extra obligatorio siempre es un error.',
        en: 'Only if the extra field is optional. A required extra field is always an error.',
      },
    ],
    explanation: {
      es: 'El caso que si avisa es un objeto literal recien escrito asignado directo: ahi TypeScript senala las claves que el destino no declara.',
      en: 'The case that does warn is a freshly written object literal assigned directly: there TypeScript flags keys the target does not declare.',
    },
  },
  {
    id: 'fe-ts2-17',
    topic: 'readonly',
    prompt: {
      es: '¿Qué hace readonly en una propiedad?',
      en: 'What does readonly do on a property?',
    },
    answer: {
      es: 'El compilador impide asignar esa propiedad. En ejecucion el campo sigue siendo escribible si alguien lo fuerza.',
      en: 'The compiler forbids assigning that property. At runtime the field is still writable if someone forces it.',
    },
    distractors: [
      {
        es: 'Compila a Object.freeze, asi que una escritura lanza TypeError.',
        en: 'It compiles to Object.freeze, so a write throws TypeError.',
      },
      {
        es: 'Tambien congela los objetos anidados, en todos los niveles.',
        en: 'It also freezes nested objects, at every level.',
      },
    ],
    explanation: {
      es: 'Readonly y ReadonlyArray solo marcan el primer nivel. Un objeto hijo sigue mutable si su tipo lo permite.',
      en: 'Readonly and ReadonlyArray only mark the top level. A child object stays mutable if its type allows it.',
    },
  },
  {
    id: 'fe-ts2-18',
    topic: 'Enum en ejecucion',
    prompt: {
      es: '¿Por qué un enum sigue en el JavaScript y una union de literales no?',
      en: 'Why does an enum stay in the JavaScript while a literal union does not?',
    },
    answer: {
      es: 'El enum se emite como un objeto que puedes usar en ejecucion. La union es solo una anotacion y el compilador la borra.',
      en: 'The enum is emitted as an object you can use at runtime. The union is only an annotation and the compiler erases it.',
    },
    distractors: [
      {
        es: 'Los dos quedan como objetos. La union se convierte en un Map de literales.',
        en: 'Both remain as objects. The union becomes a Map of literals.',
      },
      {
        es: 'Ninguno queda. El enum tambien se borra, igual que una interface.',
        en: 'Neither remains. The enum is erased too, the same as an interface.',
      },
    ],
    explanation: {
      es: 'Si solo necesitas nombres para el compilador, una union o un objeto as const suele bastar y no anade codigo.',
      en: 'If you only need names for the compiler, a union or an as const object is usually enough and adds no code.',
    },
  },
  {
    id: 'fe-ts2-19',
    topic: 'Borrado de tipos',
    prompt: {
      es: '¿Qué pasa con los tipos al compilar a JavaScript?',
      en: 'What happens to types when you compile to JavaScript?',
    },
    answer: {
      es: 'Desaparecen. En el navegador no hay interfaces ni uniones, asi que una comprobacion de verdad hay que escribirla en codigo.',
      en: 'They disappear. In the browser there are no interfaces or unions, so a real check has to be written in code.',
    },
    distractors: [
      {
        es: 'Se guardan como comentarios que el navegador usa para validar los objetos.',
        en: 'They are kept as comments that the browser uses to validate objects.',
      },
      {
        es: 'TypeScript inserta instanceof por cada anotacion, y por eso any es mas rapido.',
        en: 'TypeScript inserts instanceof for every annotation, which is why any is faster.',
      },
    ],
    explanation: {
      es: 'Por eso un as o un tipo mentiroso no protege en produccion. Valida en los bordes, por ejemplo al leer JSON.',
      en: 'That is why an as or a lying type does not protect you in production. Validate at the edges, for example when reading JSON.',
    },
  },
  {
    id: 'fe-ts2-20',
    topic: 'keyof',
    prompt: {
      es: '¿Cómo obtienes una union con los nombres de las claves de un objeto?',
      en: 'How do you get a union with the key names of an object?',
    },
    answer: {
      es: 'Con keyof sobre el tipo. Si partes de una constante, primero typeof y luego keyof.',
      en: 'With keyof on the type. If you start from a constant, use typeof first and then keyof.',
    },
    distractors: [
      {
        es: 'Con Object.keys. TypeScript tipa el resultado como la union literal de esas claves.',
        en: 'With Object.keys. TypeScript types the result as the literal union of those keys.',
      },
      {
        es: 'Con instanceof sobre el objeto. El constructor expone las claves como tipos.',
        en: 'With instanceof on the object. The constructor exposes the keys as types.',
      },
    ],
    explanation: {
      es: 'Object.keys sigue devolviendo string[] porque en ejecucion el objeto puede tener mas claves.',
      en: 'Object.keys still returns string[] because at runtime the object may have more keys.',
    },
  },
];
