import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_GIT_WORKFLOWS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-git2-01',
    topic: 'Git avanzado',
    prompt: {
      es: '¿Qué diferencia hay entre git reset con soft, mixed y hard?',
      en: 'What is the difference between git reset with soft, mixed and hard?',
    },
    answer: {
      es: 'Soft deja los cambios preparados en el índice, mixed los devuelve al directorio de trabajo sin preparar y hard los descarta por completo.',
      en: 'Soft leaves the changes staged in the index, mixed returns them to the working tree unstaged, and hard discards them completely.',
    },
    distractors: [
      {
        es: 'Soft solo mueve HEAD sin tocar nada más, mixed actualiza el índice y hard crea además un commit nuevo en la rama.',
        en: 'Soft only moves HEAD without touching anything else, mixed updates the index, and hard also creates a new commit on the branch.',
      },
      {
        es: 'Soft y mixed afectan únicamente al índice, mientras que hard elimina también los archivos sin seguimiento del directorio.',
        en: 'Soft and mixed only affect the index, while hard also removes the untracked files from the directory.',
      },
    ],
    explanation: {
      es: 'Las tres variantes mueven HEAD y se distinguen por hasta qué árbol propagan el cambio: soft se detiene en HEAD, mixed llega al índice y hard llega también al directorio de trabajo. La primera opción incorrecta describe bien el alcance de soft pero inventa un commit que reset nunca crea, ya que reset solo mueve punteros. La segunda recoge el malentendido más extendido: reset --hard no borra los archivos sin seguimiento, para eso hace falta git clean -fd, y los commits que quedan huérfanos se pueden recuperar con git reflog.',
      en: 'All three variants move HEAD and differ in how far they propagate the change: soft stops at HEAD, mixed reaches the index and hard reaches the working tree as well. The first wrong option describes the scope of soft correctly but invents a commit that reset never creates, since reset only moves pointers. The second captures the most widespread misunderstanding: reset --hard does not delete untracked files, git clean -fd is needed for that, and orphaned commits can still be recovered with git reflog.',
    },
  },
  {
    id: 'th-git2-02',
    topic: 'Git avanzado',
    prompt: {
      es: 'Hay que deshacer un commit ya publicado en una rama compartida. ¿Por qué se prefiere git revert a git reset?',
      en: 'You must undo a commit already published on a shared branch. Why is git revert preferred over git reset?',
    },
    answer: {
      es: 'Porque revert crea un commit nuevo que aplica los cambios inversos y no reescribe el historial que los demás ya tienen clonado.',
      en: 'Because revert creates a new commit applying the inverse changes and does not rewrite history that others have already cloned.',
    },
    distractors: [
      {
        es: 'Porque reset elimina el commit defectuoso del historial y deja la rama más limpia para quienes la revisen después.',
        en: 'Because reset removes the faulty commit from history and leaves the branch cleaner for whoever reviews it later.',
      },
      {
        es: 'Porque ambos son equivalentes siempre que la rama se actualice con git push --force-with-lease en lugar de --force.',
        en: 'Because both are equivalent as long as the branch is updated with git push --force-with-lease instead of --force.',
      },
    ],
    explanation: {
      es: 'Reset más push forzado cambia los hashes del historial publicado, así que cada compañero que ya había hecho fetch diverge y termina reintroduciendo los commits eliminados en el siguiente merge. La primera opción incorrecta describe el efecto real de reset, pero ese historial limpio es justo lo que rompe el trabajo ajeno en una rama compartida. La segunda es una media verdad peligrosa: force-with-lease evita pisar commits que no has visto, pero no evita que los clones existentes queden desalineados. Para revertir un commit de merge hay que indicar el padre principal con git revert -m 1.',
      en: 'Reset plus a force push changes the hashes of published history, so every teammate who had already fetched diverges and ends up reintroducing the removed commits on the next merge. The first wrong option describes the real effect of reset, but that clean history is exactly what breaks other people work on a shared branch. The second is a dangerous half truth: force-with-lease avoids overwriting commits you have not seen, but it does not stop existing clones from going out of sync. To revert a merge commit you must pick the mainline parent with git revert -m 1.',
    },
  },
  {
    id: 'th-git2-03',
    topic: 'Git avanzado',
    prompt: {
      es: '¿Cuál es el riesgo principal de usar git cherry-pick para llevar un hotfix a otra rama?',
      en: 'What is the main risk of using git cherry-pick to carry a hotfix to another branch?',
    },
    answer: {
      es: 'Que genera un commit nuevo con distinto hash, así que el mismo cambio queda duplicado cuando más tarde se fusionen ambas ramas.',
      en: 'That it creates a new commit with a different hash, so the same change ends up duplicated when both branches are merged later.',
    },
    distractors: [
      {
        es: 'Que arrastra también los commits anteriores de los que depende el cambio, ampliando el alcance del hotfix sin avisar.',
        en: 'That it also drags along the earlier commits the change depends on, widening the scope of the hotfix without warning.',
      },
      {
        es: 'Que deja el repositorio en estado HEAD desacoplado hasta que se confirma o se aborta el resultado de la operación.',
        en: 'That it leaves the repository in detached HEAD state until the result of the operation is committed or aborted.',
      },
    ],
    explanation: {
      es: 'Cherry-pick aplica el parche de un commit sobre otra base y calcula un hash nuevo, de modo que el historial acaba con dos commits distintos que hacen lo mismo y el merge posterior puede entrar en conflicto consigo mismo. La primera opción incorrecta es falsa porque cherry-pick copia exactamente un commit y por eso mismo puede fallar si le faltan cambios previos, no porque los arrastre. La segunda describe lo que sí ocurre durante un rebase, un bisect o un checkout de un hash suelto. Conviene usar git cherry-pick -x para dejar registrado el hash original en el mensaje.',
      en: 'Cherry-pick applies the patch of one commit onto another base and computes a new hash, so history ends up with two different commits doing the same thing and the later merge can conflict with itself. The first wrong option is false because cherry-pick copies exactly one commit and for that very reason can fail if earlier changes are missing, not because it drags them along. The second describes what does happen during a rebase, a bisect or a checkout of a loose hash. It is worth using git cherry-pick -x so the original hash is recorded in the message.',
    },
  },
  {
    id: 'th-git2-04',
    topic: 'Git avanzado',
    prompt: {
      es: '¿Cuál es el propósito de git bisect?',
      en: 'What is the purpose of git bisect?',
    },
    answer: {
      es: 'Localizar mediante búsqueda binaria el primer commit que introdujo un fallo, entre un commit conocido como bueno y otro como malo.',
      en: 'Find through binary search the first commit that introduced a bug, between one commit known as good and another known as bad.',
    },
    distractors: [
      {
        es: 'Dividir un commit demasiado grande en varios commits más pequeños durante un rebase interactivo.',
        en: 'Split an oversized commit into several smaller commits during an interactive rebase.',
      },
      {
        es: 'Comparar dos ramas para listar los commits que existen en una de ellas y todavía no están en la otra.',
        en: 'Compare two branches to list the commits that exist in one of them and are not yet in the other.',
      },
    ],
    explanation: {
      es: 'La sesión empieza con git bisect start, se marca el estado actual con git bisect bad y una versión antigua sana con git bisect good seguido del hash, y git va haciendo checkout de puntos intermedios hasta reducir el rango a un solo commit en aproximadamente log2 de n pasos. Con git bisect run seguido de un script que devuelva código de salida distinto de cero el proceso se automatiza por completo. Partir un commit es la acción edit del rebase interactivo, y listar la diferencia entre ramas se hace con git log rama1..rama2 o con git cherry.',
      en: 'The session starts with git bisect start, you mark the current state with git bisect bad and a healthy old version with git bisect good followed by the hash, and git keeps checking out midpoints until the range narrows to a single commit in roughly log2 of n steps. With git bisect run followed by a script returning a non-zero exit code the process is fully automated. Splitting a commit is the edit action of an interactive rebase, and listing the difference between branches is done with git log branch1..branch2 or with git cherry.',
    },
  },
  {
    id: 'th-git2-05',
    topic: 'Git avanzado',
    prompt: {
      es: 'Un git reset --hard borró commits que nunca se habían subido. ¿Cómo se recuperan?',
      en: 'A git reset --hard wiped commits that had never been pushed. How are they recovered?',
    },
    answer: {
      es: 'Buscando su hash en la salida de git reflog y creando una rama o haciendo reset sobre ese hash.',
      en: 'Looking up their hash in the output of git reflog and creating a branch or resetting onto that hash.',
    },
    distractors: [
      {
        es: 'Volviendo a clonar el repositorio remoto, ya que el servidor conserva todos los commits aunque la copia local los pierda.',
        en: 'Cloning the remote repository again, since the server keeps every commit even if the local copy loses them.',
      },
      {
        es: 'Ejecutando git fsck --lost-found, porque el reflog solo registra los movimientos de las ramas de seguimiento remoto.',
        en: 'Running git fsck --lost-found, because the reflog only records the movements of remote tracking branches.',
      },
    ],
    explanation: {
      es: 'El reflog guarda de forma local cada posición por la que pasó HEAD y cada rama, así que basta con leer la línea anterior al reset y ejecutar git branch rescate seguido del hash para dejar los commits de nuevo alcanzables. Clonar otra vez es cierto cuando los commits estaban publicados, pero aquí nunca llegaron al servidor, que es la trampa del enunciado. Git fsck --lost-found existe y encuentra objetos colgantes, pero su justificación es falsa: el reflog cubre las referencias locales, y por defecto conserva noventa días para las entradas alcanzables y treinta para las inalcanzables, según gc.reflogExpire.',
      en: 'The reflog keeps a local record of every position HEAD and each branch passed through, so it is enough to read the line before the reset and run git branch rescue followed by the hash to make the commits reachable again. Cloning again is true when the commits were published, but here they never reached the server, which is the trap of the question. Git fsck --lost-found does exist and finds dangling objects, but its justification is false: the reflog covers local references, and by default it keeps ninety days for reachable entries and thirty for unreachable ones, per gc.reflogExpire.',
    },
  },
  {
    id: 'th-git2-06',
    topic: 'Git avanzado',
    prompt: {
      es: '¿Qué diferencia a git stash de hacer un commit temporal de trabajo en curso?',
      en: 'What is the difference between git stash and making a temporary work-in-progress commit?',
    },
    answer: {
      es: 'El stash guarda los cambios fuera del historial de la rama y solo existe en el repositorio local; el commit temporal queda en la rama y se puede subir o reescribir después.',
      en: 'The stash stores the changes outside the branch history and exists only in the local repository; the temporary commit stays on the branch and can be pushed or rewritten later.',
    },
    distractors: [
      {
        es: 'El stash conserva también los archivos sin seguimiento, mientras que el commit temporal solo registra los que ya estaban versionados.',
        en: 'The stash also keeps untracked files, while the temporary commit only records the ones that were already tracked.',
      },
      {
        es: 'El stash añade un commit a la rama actual que se elimina de forma automática al aplicar los cambios guardados.',
        en: 'The stash adds a commit to the current branch that is automatically removed when the saved changes are applied.',
      },
    ],
    explanation: {
      es: 'Internamente el stash sí crea objetos commit, pero cuelgan de refs/stash y no de la rama, así que no se comparten con un push ni aparecen en git log, lo que los hace cómodos para interrupciones cortas y arriesgados como almacenamiento duradero. La primera opción incorrecta es el error más habitual: git stash ignora los archivos sin seguimiento salvo que se use -u, y con -a incluye además los ignorados. La segunda mezcla ambos conceptos, porque el commit del stash nunca pertenece a la rama; un commit de trabajo en curso, en cambio, se puede limpiar luego con git commit --amend o un fixup en el rebase interactivo.',
      en: 'Internally the stash does create commit objects, but they hang from refs/stash and not from the branch, so they are not shared by a push and do not show up in git log, which makes them handy for short interruptions and risky as durable storage. The first wrong option is the most common mistake: git stash ignores untracked files unless you use -u, and with -a it also includes ignored ones. The second mixes both concepts, because the stash commit never belongs to the branch; a work-in-progress commit, by contrast, can be cleaned up later with git commit --amend or a fixup during an interactive rebase.',
    },
  },
  {
    id: 'th-git2-07',
    topic: 'Git avanzado',
    prompt: {
      es: '¿Qué diferencia a un merge fast forward de uno con la opción --no-ff?',
      en: 'What is the difference between a fast-forward merge and one with the --no-ff option?',
    },
    answer: {
      es: 'El fast forward solo adelanta el puntero de la rama y no deja rastro de la integración; --no-ff crea un commit de unión que agrupa la feature completa.',
      en: 'A fast-forward merge only advances the branch pointer and leaves no trace of the integration; --no-ff creates a merge commit grouping the whole feature.',
    },
    distractors: [
      {
        es: 'El fast forward combina los commits de la rama en uno solo, mientras que --no-ff los mantiene separados en el historial.',
        en: 'A fast-forward merge combines the branch commits into a single one, while --no-ff keeps them separate in the history.',
      },
      {
        es: 'El fast forward solo es posible cuando no hay conflictos, y --no-ff permite resolverlos durante la propia fusión.',
        en: 'A fast-forward merge is only possible when there are no conflicts, and --no-ff allows resolving them during the merge itself.',
      },
    ],
    explanation: {
      es: 'El fast forward solo puede ocurrir si la rama destino no avanzó desde que se creó la feature, porque entonces basta mover la referencia; --no-ff fuerza el commit de unión y conserva la topología, lo que permite revertir la feature entera con git revert -m 1 y ver dónde empieza y acaba. La primera opción incorrecta describe el squash, que es otra opción distinta de merge. La segunda confunde causa y efecto: el fast forward no es posible porque el destino avanzó, no por los conflictos, y de hecho cuando es posible nunca hay conflictos. El comportamiento se puede fijar con la configuración merge.ff igual a false.',
      en: 'A fast forward can only happen if the target branch has not advanced since the feature was created, because then moving the reference is enough; --no-ff forces the merge commit and preserves the topology, which lets you revert the whole feature with git revert -m 1 and see where it starts and ends. The first wrong option describes squash, which is a separate merge option. The second confuses cause and effect: a fast forward is impossible because the target advanced, not because of conflicts, and in fact when it is possible there are never conflicts. The behaviour can be pinned with the merge.ff setting equal to false.',
    },
  },
  {
    id: 'th-git2-08',
    topic: 'Git avanzado',
    prompt: {
      es: '¿Cuál es el principal compromiso de integrar una rama con squash merge?',
      en: 'What is the main trade-off of integrating a branch with a squash merge?',
    },
    answer: {
      es: 'Deja un historial limpio de un commit por feature, pero pierde los commits intermedios y el enlace con la rama original.',
      en: 'It leaves a clean history of one commit per feature, but loses the intermediate commits and the link with the original branch.',
    },
    distractors: [
      {
        es: 'Mantiene la rama enlazada al historial, de modo que git puede detectar más adelante que ya fue integrada.',
        en: 'It keeps the branch linked to the history, so git can detect later that it was already integrated.',
      },
      {
        es: 'Reaplica los commits sobre la punta de la rama destino y produce un historial lineal sin commit de unión.',
        en: 'It reapplies the commits onto the tip of the target branch and produces a linear history without a merge commit.',
      },
    ],
    explanation: {
      es: 'El squash genera un commit nuevo cuyo único padre es la punta del destino, así que la rama de origen queda desconectada: git branch --merged no la lista, borrarla parece inseguro y un merge posterior de la misma rama puede reproducir conflictos ya resueltos. Además git bisect pierde granularidad, porque el fallo solo se puede acotar a la feature entera en lugar de a un cambio concreto. La primera opción incorrecta afirma justo lo contrario de lo que ocurre, y la segunda describe el rebase, que también lineariza el historial pero conserva cada commit con su autoría.',
      en: 'A squash produces a new commit whose only parent is the target tip, so the source branch is left disconnected: git branch --merged does not list it, deleting it feels unsafe, and a later merge of the same branch can replay conflicts that were already resolved. On top of that git bisect loses granularity, because the failure can only be narrowed down to the whole feature instead of to a specific change. The first wrong option states exactly the opposite of what happens, and the second describes rebase, which also linearises history but keeps every commit with its authorship.',
    },
  },
  {
    id: 'th-git2-09',
    topic: 'Git avanzado',
    prompt: {
      es: 'En un rebase interactivo, ¿qué hace la acción fixup frente a squash?',
      en: 'In an interactive rebase, what does the fixup action do compared to squash?',
    },
    answer: {
      es: 'Fixup funde el commit en el anterior descartando su mensaje; squash también los funde pero abre el editor para combinar ambos mensajes.',
      en: 'Fixup merges the commit into the previous one discarding its message; squash also merges them but opens the editor to combine both messages.',
    },
    distractors: [
      {
        es: 'Fixup solo funciona si el commit se creó con git commit --fixup, mientras que squash se puede aplicar a cualquier commit de la lista.',
        en: 'Fixup only works if the commit was created with git commit --fixup, while squash can be applied to any commit in the list.',
      },
      {
        es: 'Fixup permite cambiar el mensaje del commit anterior y squash se limita a reordenar los commits dentro del rebase.',
        en: 'Fixup lets you change the message of the previous commit and squash merely reorders the commits within the rebase.',
      },
    ],
    explanation: {
      es: 'Ambas acciones combinan el commit con el que tienen justo encima en la lista y la única diferencia es el tratamiento del mensaje, por eso fixup es la elección natural para los típicos commits de corrección de una revisión. Crear el commit con git commit --fixup seguido del hash y lanzar git rebase -i --autosquash coloca la acción automáticamente, pero es una comodidad, no un requisito, que es lo que hace tentadora la primera opción. Cambiar el mensaje es la acción reword y mover líneas en el editor es lo que reordena los commits; las tres reescriben hashes, así que deben evitarse en ramas ya compartidas.',
      en: 'Both actions combine the commit with the one directly above it in the list and the only difference is how the message is handled, which is why fixup is the natural choice for the typical review-fix commits. Creating the commit with git commit --fixup followed by the hash and running git rebase -i --autosquash places the action automatically, but that is a convenience and not a requirement, which is what makes the first option tempting. Changing the message is the reword action and moving lines in the editor is what reorders commits; all three rewrite hashes, so they should be avoided on already shared branches.',
    },
  },
  {
    id: 'th-git2-10',
    topic: 'Git avanzado',
    prompt: {
      es: 'Añadiste un archivo a .gitignore pero git sigue mostrando sus cambios. ¿Por qué ocurre?',
      en: 'You added a file to .gitignore but git keeps showing its changes. Why does that happen?',
    },
    answer: {
      es: 'Porque .gitignore solo afecta a los archivos sin seguimiento, y uno que ya está versionado se sigue comparando en cada commit.',
      en: 'Because .gitignore only affects untracked files, and one that is already tracked keeps being compared on every commit.',
    },
    distractors: [
      {
        es: 'Porque el archivo .gitignore debe estar en la raíz del repositorio para que sus patrones se apliquen también a los subdirectorios.',
        en: 'Because the .gitignore file must sit at the repository root for its patterns to apply to subdirectories as well.',
      },
      {
        es: 'Porque la regla solo surte efecto si se añade además a .git/info/exclude, que tiene prioridad sobre .gitignore.',
        en: 'Because the rule only takes effect if it is also added to .git/info/exclude, which takes precedence over .gitignore.',
      },
    ],
    explanation: {
      es: 'El índice manda: una vez que un archivo está en él, git lo sigue vigilando sin consultar las reglas de exclusión, así que hay que sacarlo con git rm --cached seguido de la ruta y confirmar ese cambio. La primera opción incorrecta parte de una regla falsa: los archivos .gitignore funcionan por directorio y el más cercano gana, por eso existen varios en muchos repositorios. La segunda menciona un mecanismo real, .git/info/exclude, que es el equivalente local y no compartido, pero sufre exactamente la misma limitación con los archivos ya versionados. Para depurar el caso concreto sirve git check-ignore -v seguido de la ruta.',
      en: 'The index rules: once a file is in it, git keeps watching it without consulting the exclusion rules, so you must remove it with git rm --cached followed by the path and commit that change. The first wrong option starts from a false rule: .gitignore files work per directory and the closest one wins, which is why many repositories have several. The second mentions a real mechanism, .git/info/exclude, the local and unshared equivalent, but it suffers exactly the same limitation with already tracked files. To debug a specific case, git check-ignore -v followed by the path is the right tool.',
    },
  },
  {
    id: 'th-git2-11',
    topic: 'Git avanzado',
    prompt: {
      es: '¿Qué diferencia a git rm --cached de git rm?',
      en: 'What is the difference between git rm --cached and git rm?',
    },
    answer: {
      es: 'Con --cached el archivo deja de estar versionado pero permanece en el disco; sin la opción, git lo borra también del directorio de trabajo.',
      en: 'With --cached the file stops being tracked but stays on disk; without the option, git also deletes it from the working tree.',
    },
    distractors: [
      {
        es: 'Con --cached el archivo desaparece de todo el historial, mientras que git rm solo lo elimina a partir del commit actual.',
        en: 'With --cached the file disappears from the whole history, while git rm only removes it from the current commit onwards.',
      },
      {
        es: 'Con --cached se deshacen los cambios preparados del archivo sin dejar de seguirlo, igual que hace git restore --staged.',
        en: 'With --cached you unstage the changes of the file without untracking it, just like git restore --staged does.',
      },
    ],
    explanation: {
      es: 'Es la operación típica para dejar de versionar un archivo de configuración local sin perderlo: git rm --cached seguido de la ruta, o con -r para una carpeta, y después añadir el patrón a .gitignore. La primera opción incorrecta atribuye a --cached un poder que no tiene, porque los commits antiguos siguen conteniendo el archivo y limpiar el historial exige git filter-repo o BFG. La segunda confunde dos comandos parecidos: git restore --staged deja el archivo en el índice y solo revierte lo preparado, mientras que rm --cached lo elimina del índice y el siguiente commit registrará su borrado.',
      en: 'This is the typical operation for untracking a local configuration file without losing it: git rm --cached followed by the path, or with -r for a folder, and then adding the pattern to .gitignore. The first wrong option credits --cached with a power it does not have, because old commits still contain the file and cleaning history requires git filter-repo or BFG. The second confuses two similar commands: git restore --staged keeps the file in the index and only reverts what was staged, whereas rm --cached removes it from the index and the next commit will record its deletion.',
    },
  },
  {
    id: 'th-git2-12',
    topic: 'Git avanzado',
    prompt: {
      es: '¿Qué significa que el repositorio esté en estado HEAD desacoplado?',
      en: 'What does it mean for the repository to be in a detached HEAD state?',
    },
    answer: {
      es: 'Que HEAD apunta directamente a un commit en lugar de a una rama, así que los commits nuevos no quedan referenciados por ninguna rama.',
      en: 'That HEAD points directly at a commit instead of at a branch, so new commits are not referenced by any branch.',
    },
    distractors: [
      {
        es: 'Que la rama local ha perdido la referencia a su rama remota y hay que volver a configurar el upstream con --set-upstream.',
        en: 'That the local branch lost the reference to its remote branch and the upstream must be configured again with --set-upstream.',
      },
      {
        es: 'Que existen cambios sin confirmar que impiden cambiar de rama hasta hacer stash o commit.',
        en: 'That there are uncommitted changes preventing a branch switch until you stash or commit them.',
      },
    ],
    explanation: {
      es: 'Ocurre al hacer checkout de un hash, de una etiqueta o de un submódulo, y también de forma temporal durante un rebase o un bisect: se puede trabajar y confirmar con normalidad, pero al volver a una rama esos commits quedan inalcanzables y solo se recuperan por el reflog mientras el recolector de basura no los elimine. La forma segura de conservarlos es git switch -c seguido del nombre de la rama nueva. La primera opción incorrecta describe una rama sin upstream, que es un aviso distinto al hacer push; la segunda describe el error de checkout por cambios locales pendientes, otra situación habitual pero ajena a HEAD.',
      en: 'It happens when you check out a hash, a tag or a submodule, and also temporarily during a rebase or a bisect: you can work and commit normally, but when you return to a branch those commits become unreachable and are only recoverable through the reflog while garbage collection has not removed them. The safe way to keep them is git switch -c followed by the name of the new branch. The first wrong option describes a branch with no upstream, which is a different warning shown on push; the second describes the checkout error caused by pending local changes, another common situation but unrelated to HEAD.',
    },
  },
  {
    id: 'th-git2-13',
    topic: 'Git avanzado',
    prompt: {
      es: '¿Qué distingue al desarrollo basado en tronco de Git Flow?',
      en: 'What distinguishes trunk-based development from Git Flow?',
    },
    answer: {
      es: 'El desarrollo basado en tronco integra ramas muy cortas en main a diario, mientras Git Flow mantiene ramas develop, release y hotfix de larga vida.',
      en: 'Trunk-based development integrates very short branches into main daily, while Git Flow maintains long-lived develop, release and hotfix branches.',
    },
    distractors: [
      {
        es: 'El desarrollo basado en tronco prohíbe crear ramas y obliga a confirmar los cambios directamente sobre main.',
        en: 'Trunk-based development forbids creating branches and requires committing changes directly onto main.',
      },
      {
        es: 'Git Flow es necesario para publicar versiones semánticas, porque son sus ramas release las que fijan el número de versión.',
        en: 'Git Flow is required to publish semantic versions, because its release branches are what set the version number.',
      },
    ],
    explanation: {
      es: 'La variable que los separa es la vida de las ramas y, con ella, el tamaño de cada integración: fusionar a diario mantiene los conflictos pequeños y exige una batería de pruebas automáticas fiable, mientras que Git Flow encaja mejor en productos con varias versiones publicadas y soporte simultáneo. La primera opción incorrecta es la caricatura más común del modelo, que sí admite ramas siempre que duren horas o pocos días. La segunda confunde estrategia de ramas con versionado: el versionado semántico se puede aplicar con cualquier flujo, incluso etiquetando directamente sobre main.',
      en: 'The variable that separates them is branch lifetime and, with it, the size of each integration: merging daily keeps conflicts small and demands a reliable automated test suite, while Git Flow fits better in products with several published versions under simultaneous support. The first wrong option is the most common caricature of the model, which does allow branches as long as they live for hours or a few days. The second confuses branching strategy with versioning: semantic versioning can be applied with any flow, even by tagging directly on main.',
    },
  },
  {
    id: 'th-git2-14',
    topic: 'Git avanzado',
    prompt: {
      es: '¿Qué aportan los feature flags como alternativa a las ramas de larga vida?',
      en: 'What do feature flags offer as an alternative to long-lived branches?',
    },
    answer: {
      es: 'Permiten integrar en main código todavía incompleto y activarlo cuando esté listo, evitando fusiones enormes y divergencia entre ramas.',
      en: 'They let you integrate still incomplete code into main and switch it on when it is ready, avoiding huge merges and branch divergence.',
    },
    distractors: [
      {
        es: 'Permiten servir la misma versión a un porcentaje de usuarios para comparar métricas entre dos variantes del producto.',
        en: 'They let you serve the same version to a percentage of users in order to compare metrics between two product variants.',
      },
      {
        es: 'Permiten volver a la versión anterior del artefacto desplegado cuando una entrega provoca incidencias en producción.',
        en: 'They let you roll back to the previous version of the deployed artefact when a release causes incidents in production.',
      },
    ],
    explanation: {
      es: 'El flag desacopla el despliegue de la publicación: el código viaja a producción apagado, el equipo sigue integrando a diario y la decisión de negocio se toma cambiando una configuración en lugar de fusionando una rama de semanas. Las pruebas A/B y los despliegues canary son usos construidos encima de los flags, ciertos pero distintos del problema de integración que plantea la pregunta; y volver al artefacto anterior es un rollback de despliegue, que además es más lento y arriesgado que apagar un flag. El coste de los flags es la deuda combinatoria, así que deben tener vida corta y eliminarse tras la publicación.',
      en: 'The flag decouples deployment from release: the code travels to production switched off, the team keeps integrating daily and the business decision is taken by changing a setting instead of merging a branch that is weeks old. A/B testing and canary releases are uses built on top of flags, true but different from the integration problem the question raises; and going back to the previous artefact is a deployment rollback, which is also slower and riskier than turning a flag off. The cost of flags is combinatorial debt, so they must be short-lived and removed after the release.',
    },
  },
  {
    id: 'th-git2-15',
    topic: 'Git avanzado',
    prompt: {
      es: '¿Cómo se relacionan los commits convencionales con el versionado semántico?',
      en: 'How do conventional commits relate to semantic versioning?',
    },
    answer: {
      es: 'El tipo del commit determina el incremento: fix sube la versión de parche, feat la menor y una nota BREAKING CHANGE la mayor.',
      en: 'The commit type drives the increment: fix bumps the patch version, feat the minor one and a BREAKING CHANGE note the major one.',
    },
    distractors: [
      {
        es: 'El número de commits acumulados desde la última etiqueta determina el incremento de la versión menor.',
        en: 'The number of commits accumulated since the last tag determines the increment of the minor version.',
      },
      {
        es: 'El prefijo sirve para agrupar las entradas del changelog, pero el número de versión se decide siempre a mano al publicar.',
        en: 'The prefix serves to group changelog entries, but the version number is always decided by hand at release time.',
      },
    ],
    explanation: {
      es: 'La convención existe precisamente para que una herramienta pueda leer los mensajes y calcular la versión sin intervención humana: semantic-release o standard-version recorren los commits desde la última etiqueta, detectan el mayor incremento necesario y generan el changelog. La ruptura se marca con el pie BREAKING CHANGE o con un signo de exclamación tras el tipo, como en feat!. La primera opción incorrecta describe el recuento que git describe añade como metadato de build, no una regla de semver; la segunda refleja una práctica real en equipos que solo usan la convención para documentar, pero renuncia al vínculo automático que la pregunta plantea. Tipos como chore o docs no cambian la versión.',
      en: 'The convention exists precisely so a tool can read the messages and compute the version without human input: semantic-release or standard-version walk the commits since the last tag, detect the largest required bump and generate the changelog. A breaking change is marked with the BREAKING CHANGE footer or with an exclamation mark after the type, as in feat!. The first wrong option describes the count git describe adds as build metadata, not a semver rule; the second reflects a real practice in teams that use the convention only for documentation, but it gives up the automatic link the question is about. Types such as chore or docs do not change the version.',
    },
  },
  {
    id: 'th-git2-16',
    topic: 'Git avanzado',
    prompt: {
      es: 'Para marcar una release, ¿qué diferencia a una etiqueta anotada de una ligera?',
      en: 'To mark a release, what makes an annotated tag different from a lightweight one?',
    },
    answer: {
      es: 'La anotada es un objeto propio con autor, fecha y mensaje, que además se puede firmar; la ligera es solo un puntero a un commit.',
      en: 'The annotated one is an object of its own with author, date and message, and it can also be signed; the lightweight one is just a pointer to a commit.',
    },
    distractors: [
      {
        es: 'La ligera viaja al remoto con un push normal, mientras que la anotada permanece local hasta usar git push --tags.',
        en: 'The lightweight one travels to the remote with a normal push, while the annotated one stays local until you run git push --tags.',
      },
      {
        es: 'La ligera se puede reubicar con git tag -f y la anotada es inmutable una vez creada sobre un commit.',
        en: 'The lightweight one can be moved with git tag -f and the annotated one is immutable once created on a commit.',
      },
    ],
    explanation: {
      es: 'La etiqueta anotada se crea con git tag -a v1.0.0 -m seguido del mensaje y queda registrada en la base de datos de objetos, lo que permite auditar quién publicó la versión y verificar una firma GPG; por eso es la recomendada para releases, mientras la ligera sirve como marcador temporal. La primera opción incorrecta invierte una regla que afecta igual a ambas: ningún tipo de etiqueta se sube con un push normal, hacen falta --tags o --follow-tags. La segunda inventa una inmutabilidad inexistente, porque git tag -f reubica cualquiera de las dos. Conviene recordar que git describe solo considera etiquetas anotadas salvo que se le pase --tags.',
      en: 'An annotated tag is created with git tag -a v1.0.0 -m followed by the message and is stored in the object database, which makes it possible to audit who published the version and to verify a GPG signature; that is why it is recommended for releases, while the lightweight one works as a temporary marker. The first wrong option inverts a rule that affects both equally: no kind of tag is pushed by a normal push, you need --tags or --follow-tags. The second invents an immutability that does not exist, because git tag -f moves either of them. It is worth remembering that git describe only considers annotated tags unless you pass --tags.',
    },
  },
  {
    id: 'th-git2-17',
    topic: 'Git avanzado',
    prompt: {
      es: '¿Cuál es el límite de confiar en los hooks de cliente para validar el código?',
      en: 'What is the limit of relying on client-side hooks to validate the code?',
    },
    answer: {
      es: 'Que se ejecutan en local y cualquiera puede omitirlos con --no-verify, así que las comprobaciones críticas deben repetirse en CI o en el servidor.',
      en: 'That they run locally and anyone can skip them with --no-verify, so critical checks must be repeated in CI or on the server.',
    },
    distractors: [
      {
        es: 'Que se versionan dentro de .git/hooks y se reparten al clonar, por lo que basta con que un desarrollador los configure una vez.',
        en: 'That they are versioned inside .git/hooks and distributed on clone, so it is enough for one developer to set them up once.',
      },
      {
        es: 'Que solo se ejecutan en el servidor al recibir el push, de modo que el desarrollador no puede evitarlos antes de subir.',
        en: 'That they only run on the server when the push is received, so the developer cannot avoid them before pushing.',
      },
    ],
    explanation: {
      es: 'Un simple git commit --no-verify salta los hooks pre-commit y commit-msg, y git push --no-verify salta el pre-push, así que sirven como ayuda rápida al desarrollador pero nunca como garantía de calidad. La primera opción incorrecta es el malentendido más frecuente: el directorio .git/hooks no se clona, y por eso existen herramientas como Husky o la configuración core.hooksPath para compartirlos, aunque siguen siendo opcionales. La segunda describe los hooks de servidor, como pre-receive o update, que sí son la barrera real junto con los checks obligatorios de la plataforma de revisión.',
      en: 'A plain git commit --no-verify skips the pre-commit and commit-msg hooks, and git push --no-verify skips pre-push, so they work as quick help for the developer but never as a quality guarantee. The first wrong option is the most frequent misunderstanding: the .git/hooks directory is not cloned, which is why tools such as Husky or the core.hooksPath setting exist to share them, although they remain optional. The second describes server-side hooks such as pre-receive or update, which together with required checks on the review platform are the real gate.',
    },
  },
  {
    id: 'th-git2-18',
    topic: 'Git avanzado',
    prompt: {
      es: 'Al compartir código entre proyectos, ¿qué distingue a un submódulo, un subtree y un monorepo?',
      en: 'When sharing code between projects, what distinguishes a submodule, a subtree and a monorepo?',
    },
    answer: {
      es: 'El submódulo referencia un commit concreto de otro repositorio, el subtree copia su contenido dentro del historial propio y el monorepo mantiene todo el código en un único repositorio.',
      en: 'A submodule references a specific commit of another repository, a subtree copies its content into your own history, and a monorepo keeps all the code in a single repository.',
    },
    distractors: [
      {
        es: 'El submódulo copia los archivos en el repositorio padre y el subtree guarda solo un puntero, por eso el subtree exige comandos extra al clonar.',
        en: 'A submodule copies the files into the parent repository and a subtree stores only a pointer, which is why a subtree needs extra commands when cloning.',
      },
      {
        es: 'El monorepo obliga a desplegar todos los proyectos a la vez, mientras que submódulo y subtree permiten despliegues independientes.',
        en: 'A monorepo forces deploying all projects at once, while submodules and subtrees allow independent deployments.',
      },
    ],
    explanation: {
      es: 'La consecuencia práctica está en el clonado y en las actualizaciones: el submódulo necesita git clone --recurse-submodules o git submodule update --init --recursive y fija una versión exacta que hay que ir subiendo a mano, mientras el subtree no exige nada especial al consumidor pero complica devolver cambios al proyecto original. La primera opción incorrecta intercambia exactamente los dos mecanismos, que es el error más habitual. La segunda repite el mito de que el monorepo impone despliegues acoplados, cuando herramientas como Nx o Bazel calculan los proyectos afectados y publican solo esos.',
      en: 'The practical consequence lies in cloning and updating: a submodule needs git clone --recurse-submodules or git submodule update --init --recursive and pins an exact version that has to be bumped by hand, while a subtree requires nothing special from the consumer but makes contributing changes back to the original project harder. The first wrong option swaps the two mechanisms exactly, which is the most common mistake. The second repeats the myth that a monorepo imposes coupled deployments, when tools such as Nx or Bazel compute the affected projects and publish only those.',
    },
  },
  {
    id: 'th-git2-19',
    topic: 'Git avanzado',
    prompt: {
      es: 'Al resolver un conflicto durante un rebase, ¿qué representan ours y theirs?',
      en: 'When resolving a conflict during a rebase, what do ours and theirs represent?',
    },
    answer: {
      es: 'Ours es la rama base sobre la que se reaplican los commits y theirs son tus propios commits, justo al revés de lo que sugiere la intuición.',
      en: 'Ours is the base branch the commits are replayed onto and theirs are your own commits, exactly the opposite of what intuition suggests.',
    },
    distractors: [
      {
        es: 'Ours es siempre la rama en la que estabas trabajando y theirs la rama que estás integrando en ella.',
        en: 'Ours is always the branch you were working on and theirs is the branch you are integrating into it.',
      },
      {
        es: 'La opción -X ours descarta por completo el otro lado del conflicto y conserva únicamente los cambios de la rama actual.',
        en: 'The -X ours option discards the other side of the conflict entirely and keeps only the changes of the current branch.',
      },
    ],
    explanation: {
      es: 'Durante el rebase git hace checkout de la rama upstream y va aplicando tus commits encima como si fueran los entrantes, de modo que git checkout --ours toma la versión de la base y --theirs la tuya; ignorarlo lleva a descartar justo el trabajo que se quería conservar. La primera opción incorrecta describe la semántica del merge, cierta en ese contexto y por eso la trampa perfecta. La segunda confunde dos opciones distintas: -X ours solo decide los fragmentos en conflicto y respeta el resto de los cambios del otro lado, mientras que la estrategia -s ours sí descarta el contenido ajeno por completo.',
      en: 'During a rebase git checks out the upstream branch and applies your commits on top as if they were the incoming ones, so git checkout --ours takes the base version and --theirs takes yours; missing this leads to discarding exactly the work you wanted to keep. The first wrong option describes merge semantics, true in that context and therefore the perfect trap. The second confuses two different options: -X ours only decides the conflicting hunks and respects the remaining changes from the other side, whereas the -s ours strategy does discard the other content entirely.',
    },
  },
  {
    id: 'th-git2-20',
    topic: 'Git avanzado',
    prompt: {
      es: 'Investigando código antiguo, ¿qué hace git log -S y por qué ayudan los commits pequeños?',
      en: 'While investigating old code, what does git log -S do and why do small commits help?',
    },
    answer: {
      es: 'Muestra los commits donde cambió el número de apariciones de una cadena, revelando dónde se introdujo o eliminó, y con commits pequeños cada resultado apunta a un cambio concreto.',
      en: 'It shows the commits where the number of occurrences of a string changed, revealing where it was introduced or removed, and with small commits each result points to a specific change.',
    },
    distractors: [
      {
        es: 'Filtra los commits cuyo mensaje contiene la cadena indicada, que es la forma habitual de buscar por ticket o por autor.',
        en: 'It filters the commits whose message contains the given string, which is the usual way to search by ticket or by author.',
      },
      {
        es: 'Muestra quién modificó por última vez cada línea del archivo junto con su commit y su fecha.',
        en: 'It shows who last modified each line of the file together with its commit and date.',
      },
    ],
    explanation: {
      es: 'La opción -S es el llamado pickaxe y trabaja sobre el contenido del diff, no sobre el mensaje, por lo que resulta ideal para responder cuándo apareció una constante o una llamada concreta; su variante -G acepta una expresión regular sobre el diff. La primera opción incorrecta describe git log --grep, que busca en los mensajes, y la segunda describe git blame, la herramienta complementaria que se afina con -L para acotar líneas y con -C o -M para seguir movimientos de código. Los commits pequeños importan porque un commit gigante de reformateo hace que blame apunte a un cambio irrelevante, problema que se mitiga con git blame --ignore-rev.',
      en: 'The -S option is the so-called pickaxe and works over the diff content, not over the message, which makes it ideal for answering when a constant or a specific call appeared; its -G variant accepts a regular expression over the diff. The first wrong option describes git log --grep, which searches the messages, and the second describes git blame, the complementary tool that is refined with -L to narrow lines and with -C or -M to follow code movements. Small commits matter because a giant reformatting commit makes blame point at an irrelevant change, a problem mitigated with git blame --ignore-rev.',
    },
  },
];
