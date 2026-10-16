import type { QuestDevQuestion } from '../../models/quest-dev.models';

export const THEORIC_GIT_WORKFLOWS_QUESTIONS: QuestDevQuestion[] = [
  {
    id: 'th-git2-01',
    topic: 'Git',
    prompt: {
      es: '¿Qué diferencia hay entre git reset soft, mixed y hard?',
      en: 'What is the difference between git reset soft, mixed and hard?',
    },
    answer: {
      es: 'Los tres mueven la rama. Soft deja los cambios preparados, mixed los deja sin preparar y hard los tira del directorio de trabajo.',
      en: 'All three move the branch. Soft leaves the changes staged, mixed leaves them unstaged and hard throws them out of the working tree.',
    },
    distractors: [
      {
        es: 'Soft solo mueve HEAD, mixed actualiza el índice y hard crea un commit nuevo.',
        en: 'Soft only moves HEAD, mixed updates the index and hard creates a new commit.',
      },
      {
        es: 'Hard también borra los archivos que git todavía no sigue.',
        en: 'Hard also deletes files that git does not track yet.',
      },
    ],
    explanation: {
      es: 'Reset no crea un commit, solo mueve punteros. Hard no toca lo no seguido: para eso está git clean.',
      en: 'Reset does not create a commit, it only moves pointers. Hard does not touch untracked files: that is what git clean is for.',
    },
  },
  {
    id: 'th-git2-02',
    topic: 'Git',
    prompt: {
      es: '¿Por qué en una rama compartida se deshace un commit con revert y no con reset?',
      en: 'Why do you undo a commit on a shared branch with revert and not with reset?',
    },
    answer: {
      es: 'Revert añade un commit nuevo con el cambio inverso y no reescribe el historial que otros ya clonaron.',
      en: 'Revert adds a new commit with the inverse change and does not rewrite history that others already cloned.',
    },
    distractors: [
      {
        es: 'Porque reset borra el commit y deja la rama más limpia para quien la revise.',
        en: 'Because reset deletes the commit and leaves the branch cleaner for whoever reviews it.',
      },
      {
        es: 'Porque da igual si el push usa force-with-lease en lugar de force.',
        en: 'Because it does not matter if the push uses force-with-lease instead of force.',
      },
    ],
    explanation: {
      es: 'Un reset publicado obliga a un push forzado y desincroniza a quien ya había bajado la rama. Force-with-lease no arregla esos clones.',
      en: 'A published reset forces a force push and desyncs anyone who already pulled the branch. Force-with-lease does not fix those clones.',
    },
  },
  {
    id: 'th-git2-03',
    topic: 'Git',
    prompt: {
      es: '¿Cuál es el riesgo principal de llevar un hotfix con cherry-pick?',
      en: 'What is the main risk of carrying a hotfix with cherry-pick?',
    },
    answer: {
      es: 'Crea un commit nuevo con otro hash. Al fusionar las ramas, el mismo cambio aparece dos veces y puede chocar consigo mismo.',
      en: 'It creates a new commit with another hash. When the branches merge, the same change appears twice and can conflict with itself.',
    },
    distractors: [
      {
        es: 'Arrastra también los commits anteriores de los que depende el cambio.',
        en: 'It also drags along the earlier commits the change depends on.',
      },
      {
        es: 'Deja el repositorio en detached HEAD hasta que confirmes o abortes.',
        en: 'It leaves the repository in detached HEAD until you commit or abort.',
      },
    ],
    explanation: {
      es: 'Cherry-pick copia un solo parche, no la cadena. Detached HEAD aparece al hacer checkout de un hash, no por este comando.',
      en: 'Cherry-pick copies a single patch, not the chain. Detached HEAD shows up when you check out a hash, not because of this command.',
    },
  },
  {
    id: 'th-git2-04',
    topic: 'Git',
    prompt: {
      es: '¿Para qué sirve git bisect?',
      en: 'What is git bisect for?',
    },
    answer: {
      es: 'Para encontrar, por búsqueda binaria, el primer commit que introdujo un fallo entre uno bueno y uno malo.',
      en: 'To find, by binary search, the first commit that introduced a bug between a known good one and a known bad one.',
    },
    distractors: [
      {
        es: 'Para partir un commit grande en varios durante un rebase interactivo.',
        en: 'To split a large commit into several during an interactive rebase.',
      },
      {
        es: 'Para listar los commits que están en una rama y todavía no en la otra.',
        en: 'To list the commits that are on one branch and not yet on the other.',
      },
    ],
    explanation: {
      es: 'Marcas un extremo como bueno y otro como malo, y git va al punto medio hasta acotar un commit. Partir un commit es otra operación del rebase.',
      en: 'You mark one end as good and the other as bad, and git jumps to the midpoint until it narrows to one commit. Splitting a commit is a different rebase action.',
    },
  },
  {
    id: 'th-git2-05',
    topic: 'Git',
    prompt: {
      es: '¿Cómo recuperas commits que un reset hard se llevó y que nunca se subieron?',
      en: 'A hard reset took commits that were never pushed. How do you get them back?',
    },
    answer: {
      es: 'Buscas el hash en git reflog y creas una rama, o haces reset, sobre ese hash.',
      en: 'You look up the hash in git reflog and create a branch, or reset, onto that hash.',
    },
    distractors: [
      {
        es: 'Clonas otra vez el remoto, porque el servidor guarda todos los commits.',
        en: 'You clone the remote again, because the server keeps every commit.',
      },
      {
        es: 'Usas git fsck, porque el reflog solo registra las ramas remotas.',
        en: 'You use git fsck, because the reflog only records remote branches.',
      },
    ],
    explanation: {
      es: 'Esos commits no llegaron al servidor. El reflog es local y recuerda por dónde pasó HEAD.',
      en: 'Those commits never reached the server. The reflog is local and remembers where HEAD has been.',
    },
  },
  {
    id: 'th-git2-06',
    topic: 'Git',
    prompt: {
      es: '¿Qué diferencia hay entre git stash y un commit temporal de trabajo en curso?',
      en: 'What is the difference between git stash and a temporary work in progress commit?',
    },
    answer: {
      es: 'El stash guarda los cambios fuera del historial de la rama y solo en local. El commit temporal queda en la rama y se puede subir o reescribir.',
      en: 'The stash stores the changes outside the branch history and only locally. The temporary commit stays on the branch and can be pushed or rewritten.',
    },
    distractors: [
      {
        es: 'El stash también guarda archivos no seguidos, y el commit temporal solo los ya seguidos.',
        en: 'The stash also keeps untracked files, and the temporary commit only the ones already tracked.',
      },
      {
        es: 'El stash añade un commit a la rama y lo borra solo al aplicar los cambios.',
        en: 'The stash adds a commit to the branch and deletes it on its own when the changes are applied.',
      },
    ],
    explanation: {
      es: 'El stash cuelga de refs/stash, no de la rama, y no aparece en el log. Por defecto ignora lo no seguido salvo que pidas incluirlo.',
      en: 'The stash hangs from refs/stash, not from the branch, and it does not show up in the log. By default it ignores untracked files unless you ask to include them.',
    },
  },
  {
    id: 'th-git2-07',
    topic: 'Git',
    prompt: {
      es: '¿Qué diferencia hay entre un merge fast-forward y uno con --no-ff?',
      en: 'What is the difference between a fast-forward merge and one with --no-ff?',
    },
    answer: {
      es: 'El fast-forward solo adelanta el puntero y no deja rastro de la integración. --no-ff crea un commit de merge que agrupa la funcionalidad.',
      en: 'A fast-forward only moves the pointer forward and leaves no trace of the integration. --no-ff creates a merge commit that groups the feature.',
    },
    distractors: [
      {
        es: 'El fast-forward aplasta los commits en uno y --no-ff los deja separados.',
        en: 'A fast-forward squashes the commits into one and --no-ff keeps them separate.',
      },
      {
        es: 'El fast-forward solo es posible si no hay conflictos, y --no-ff permite resolverlos.',
        en: 'A fast-forward is only possible when there are no conflicts, and --no-ff lets you resolve them.',
      },
    ],
    explanation: {
      es: 'El fast-forward existe cuando la rama destino no se ha movido. Aplastar commits es squash, otra opción.',
      en: 'A fast-forward exists when the target branch has not moved. Squashing commits is squash, a different option.',
    },
  },
  {
    id: 'th-git2-08',
    topic: 'Git',
    prompt: {
      es: '¿Qué te llevas y qué pierdes al integrar con un squash merge?',
      en: 'What do you gain and what do you lose when you integrate with a squash merge?',
    },
    answer: {
      es: 'Ganas un historial limpio, un commit por funcionalidad. Pierdes los commits intermedios y el enlace con la rama original.',
      en: 'You gain a clean history, one commit per feature. You lose the intermediate commits and the link to the original branch.',
    },
    distractors: [
      {
        es: 'Mantienes el enlace, así que git sabe después que la rama ya se integró.',
        en: 'You keep the link, so git later knows the branch was already integrated.',
      },
      {
        es: 'Reaplicas los commits sobre la punta y queda un historial lineal sin commit de merge.',
        en: 'You reapply the commits on the tip and get a linear history with no merge commit.',
      },
    ],
    explanation: {
      es: 'El commit nuevo solo tiene como padre la rama destino, así que la rama origen queda desconectada. Reaplicar los commits es un rebase.',
      en: 'The new commit has only the target branch as parent, so the source branch is left disconnected. Reapplying the commits is a rebase.',
    },
  },
  {
    id: 'th-git2-09',
    topic: 'Git',
    prompt: {
      es: '¿Qué hace fixup respecto a squash en un rebase interactivo?',
      en: 'In an interactive rebase, what does fixup do compared with squash?',
    },
    answer: {
      es: 'Los dos funden el commit con el anterior. Fixup tira el mensaje y squash abre el editor para combinarlos.',
      en: 'Both fold the commit into the previous one. Fixup drops the message and squash opens the editor to combine them.',
    },
    distractors: [
      {
        es: 'Fixup solo vale si el commit se creó con --fixup, y squash vale para cualquiera.',
        en: 'Fixup only works if the commit was created with --fixup, and squash works for any commit.',
      },
      {
        es: 'Fixup cambia el mensaje del anterior y squash solo reordena la lista.',
        en: 'Fixup changes the previous message and squash only reorders the list.',
      },
    ],
    explanation: {
      es: 'La diferencia es el mensaje. Cambiar un mensaje es reword, y reordenar es mover líneas. Los dos reescriben hashes.',
      en: 'The difference is the message. Changing a message is reword, and reordering is moving lines. Both rewrite hashes.',
    },
  },
  {
    id: 'th-git2-10',
    topic: 'Git',
    prompt: {
      es: '¿Por qué git sigue mostrando los cambios de un archivo que ya añadiste a .gitignore?',
      en: 'You added a file to .gitignore and git still shows its changes. Why?',
    },
    answer: {
      es: 'Porque .gitignore solo ignora archivos que todavía no se siguen. Uno ya seguido se compara en cada commit.',
      en: 'Because .gitignore only ignores files that are not tracked yet. One that is already tracked is compared on every commit.',
    },
    distractors: [
      {
        es: 'Porque .gitignore tiene que estar en la raíz para valer en las subcarpetas.',
        en: 'Because .gitignore has to sit at the root to apply in subfolders.',
      },
      {
        es: 'Porque la regla solo vale si también está en .git/info/exclude.',
        en: 'Because the rule only applies if it is also in .git/info/exclude.',
      },
    ],
    explanation: {
      es: 'Hay que sacarlo del índice con git rm --cached y commitear eso. Puede haber un .gitignore por carpeta.',
      en: 'You have to take it out of the index with git rm --cached and commit that. There can be a .gitignore per folder.',
    },
  },
  {
    id: 'th-git2-11',
    topic: 'Git',
    prompt: {
      es: '¿Qué diferencia hay entre git rm --cached y git rm?',
      en: 'What is the difference between git rm --cached and git rm?',
    },
    answer: {
      es: 'Con --cached el archivo deja de seguirse y se queda en disco. Sin la opción, git también lo borra del directorio de trabajo.',
      en: 'With --cached the file stops being tracked and stays on disk. Without the option, git also deletes it from the working tree.',
    },
    distractors: [
      {
        es: 'Con --cached el archivo desaparece de todo el historial.',
        en: 'With --cached the file disappears from the whole history.',
      },
      {
        es: 'Con --cached solo quitas del stage los cambios, igual que restore --staged.',
        en: 'With --cached you only unstage the changes, the same as restore --staged.',
      },
    ],
    explanation: {
      es: 'Los commits viejos siguen teniendo el archivo. Limpiar el historial es otro trabajo. Restore --staged no lo saca del seguimiento.',
      en: 'Old commits still contain the file. Cleaning history is a different job. Restore --staged does not stop tracking it.',
    },
  },
  {
    id: 'th-git2-12',
    topic: 'Git',
    prompt: {
      es: '¿Qué significa que el repositorio está en detached HEAD?',
      en: 'What does it mean that the repository is in detached HEAD?',
    },
    answer: {
      es: 'Que HEAD apunta a un commit y no a una rama, así que los commits nuevos no cuelgan de ninguna rama.',
      en: 'That HEAD points at a commit and not at a branch, so new commits do not hang from any branch.',
    },
    distractors: [
      {
        es: 'Que la rama local perdió el enlace con la remota y hay que volver a configurar el upstream.',
        en: 'That the local branch lost the link to the remote and the upstream must be set again.',
      },
      {
        es: 'Que hay cambios sin commit y no puedes cambiar de rama.',
        en: 'That there are uncommitted changes and you cannot switch branches.',
      },
    ],
    explanation: {
      es: 'Pasa al hacer checkout de un hash o una etiqueta. Para no perder el trabajo, crea una rama en ese punto.',
      en: 'It happens when you check out a hash or a tag. To keep the work, create a branch at that point.',
    },
  },
  {
    id: 'th-git2-13',
    topic: 'Git',
    prompt: {
      es: '¿Qué distingue el desarrollo basado en trunk de Git Flow?',
      en: 'What distinguishes trunk based development from Git Flow?',
    },
    answer: {
      es: 'En trunk integras ramas muy cortas en main a diario. Git Flow mantiene ramas largas de develop, release y hotfix.',
      en: 'In trunk based development you integrate very short branches into main daily. Git Flow keeps long lived develop, release and hotfix branches.',
    },
    distractors: [
      {
        es: 'En trunk no se pueden crear ramas y todo se commitea directo en main.',
        en: 'In trunk based development you cannot create branches and everything is committed straight to main.',
      },
      {
        es: 'Git Flow hace falta para publicar versiones semánticas.',
        en: 'Git Flow is required to publish semantic versions.',
      },
    ],
    explanation: {
      es: 'Trunk sí usa ramas, pero viven horas o pocos días. El versionado semántico se puede etiquetar en cualquier flujo.',
      en: 'Trunk based development does use branches, but they live for hours or a few days. Semantic versioning can be tagged in any flow.',
    },
  },
  {
    id: 'th-git2-14',
    topic: 'Git',
    prompt: {
      es: '¿Qué aportan los feature flags frente a las ramas de larga vida?',
      en: 'What do feature flags give you compared with long lived branches?',
    },
    answer: {
      es: 'Dejan integrar código incompleto en main y encenderlo cuando esté listo, sin una fusión enorme al final.',
      en: 'They let you integrate incomplete code into main and switch it on when it is ready, without a huge merge at the end.',
    },
    distractors: [
      {
        es: 'Sirven para comparar métricas entre dos variantes del producto.',
        en: 'They are for comparing metrics between two product variants.',
      },
      {
        es: 'Sirven para volver al artefacto anterior si la entrega falla en producción.',
        en: 'They are for going back to the previous artifact if the release fails in production.',
      },
    ],
    explanation: {
      es: 'El flag separa desplegar de publicar. Un experimento A/B y un rollback son otros usos. El flag hay que quitarlo después.',
      en: 'The flag separates deploying from releasing. An A/B experiment and a rollback are other uses. The flag has to be removed afterwards.',
    },
  },
  {
    id: 'th-git2-15',
    topic: 'Git',
    prompt: {
      es: '¿Cómo se relacionan los commits convencionales con el versionado semántico?',
      en: 'How do conventional commits relate to semantic versioning?',
    },
    answer: {
      es: 'El tipo marca el salto: fix sube el parche, feat la menor y un BREAKING CHANGE la mayor.',
      en: 'The type sets the bump: fix raises the patch, feat the minor and a BREAKING CHANGE the major.',
    },
    distractors: [
      {
        es: 'El número de commits desde la última etiqueta decide la versión menor.',
        en: 'The number of commits since the last tag decides the minor version.',
      },
      {
        es: 'El prefijo solo ordena el changelog y la versión se elige siempre a mano.',
        en: 'The prefix only sorts the changelog and the version is always chosen by hand.',
      },
    ],
    explanation: {
      es: 'Una herramienta puede leer los mensajes y calcular la versión. Tipos como chore o docs no la cambian.',
      en: 'A tool can read the messages and compute the version. Types such as chore or docs do not change it.',
    },
  },
  {
    id: 'th-git2-16',
    topic: 'Git',
    prompt: {
      es: '¿Qué diferencia a una etiqueta anotada de una ligera al marcar una release?',
      en: 'To mark a release, what makes an annotated tag different from a lightweight one?',
    },
    answer: {
      es: 'La anotada es un objeto con autor, fecha y mensaje, y se puede firmar. La ligera es solo un puntero a un commit.',
      en: 'The annotated one is an object with author, date and message, and it can be signed. The lightweight one is only a pointer to a commit.',
    },
    distractors: [
      {
        es: 'La ligera sube con un push normal y la anotada se queda local hasta git push --tags.',
        en: 'The lightweight one goes up with a normal push and the annotated one stays local until git push --tags.',
      },
      {
        es: 'La ligera se puede mover y la anotada queda fija para siempre.',
        en: 'The lightweight one can be moved and the annotated one stays fixed forever.',
      },
    ],
    explanation: {
      es: 'Ninguna etiqueta sube con un push normal. Las dos se pueden reubicar. Para releases se usa la anotada.',
      en: 'No tag goes up with a normal push. Both can be moved. Releases use the annotated one.',
    },
  },
  {
    id: 'th-git2-17',
    topic: 'Git',
    prompt: {
      es: '¿Cuál es el límite de fiarse de los hooks de cliente para validar el código?',
      en: 'What is the limit of relying on client hooks to validate the code?',
    },
    answer: {
      es: 'Corren en local y cualquiera los salta con --no-verify. Lo crítico hay que repetirlo en CI o en el servidor.',
      en: 'They run locally and anyone skips them with --no-verify. Critical checks must be repeated in CI or on the server.',
    },
    distractors: [
      {
        es: 'Se versionan en .git/hooks y se reparten al clonar, así que basta configurarlos una vez.',
        en: 'They are versioned in .git/hooks and shared on clone, so setting them up once is enough.',
      },
      {
        es: 'Solo corren en el servidor al recibir el push, y el desarrollador no puede evitarlos.',
        en: 'They only run on the server when the push arrives, and the developer cannot avoid them.',
      },
    ],
    explanation: {
      es: 'La carpeta .git/hooks no se clona. Los hooks de servidor sí son una barrera real, junto con los checks de la plataforma.',
      en: 'The .git/hooks folder is not cloned. Server hooks are a real gate, together with the platform checks.',
    },
  },
  {
    id: 'th-git2-18',
    topic: 'Git',
    prompt: {
      es: '¿Qué distingue a un submódulo, un subtree y un monorepo al compartir código?',
      en: 'When sharing code, what distinguishes a submodule, a subtree and a monorepo?',
    },
    answer: {
      es: 'El submódulo apunta a un commit de otro repo. El subtree copia el contenido en tu historial. El monorepo lo tiene todo en un solo repositorio.',
      en: 'A submodule points at a commit in another repo. A subtree copies the content into your history. A monorepo keeps everything in one repository.',
    },
    distractors: [
      {
        es: 'El submódulo copia los archivos y el subtree guarda solo un puntero.',
        en: 'A submodule copies the files and a subtree stores only a pointer.',
      },
      {
        es: 'El monorepo obliga a desplegar todos los proyectos a la vez.',
        en: 'A monorepo forces you to deploy every project at once.',
      },
    ],
    explanation: {
      es: 'El submódulo pide un paso extra al clonar y fija una versión. Un monorepo puede publicar solo lo que cambió.',
      en: 'A submodule needs an extra step when cloning and pins a version. A monorepo can publish only what changed.',
    },
  },
  {
    id: 'th-git2-19',
    topic: 'Git',
    prompt: {
      es: '¿Qué son ours y theirs al resolver un conflicto en un rebase?',
      en: 'When resolving a conflict in a rebase, what are ours and theirs?',
    },
    answer: {
      es: 'Ours es la rama base sobre la que se reaplican los commits, y theirs son los tuyos. Es al revés de lo que parece.',
      en: 'Ours is the base branch the commits are replayed onto, and theirs are yours. It is the opposite of what it looks like.',
    },
    distractors: [
      {
        es: 'Ours es siempre la rama en la que estabas y theirs la que estás integrando.',
        en: 'Ours is always the branch you were on and theirs is the one you are integrating.',
      },
      {
        es: 'La opción -X ours descarta por completo el otro lado del conflicto.',
        en: 'The -X ours option discards the other side of the conflict entirely.',
      },
    ],
    explanation: {
      es: 'En un merge sí vale la intuición. En un rebase git aplica tus commits como si fueran los entrantes. -X ours solo decide los trozos en conflicto.',
      en: 'In a merge the intuition holds. In a rebase git applies your commits as if they were the incoming ones. -X ours only decides the conflicting hunks.',
    },
  },
  {
    id: 'th-git2-20',
    topic: 'Git',
    prompt: {
      es: '¿Qué hace git log -S y por qué ayudan los commits pequeños?',
      en: 'What does git log -S do and why do small commits help?',
    },
    answer: {
      es: 'Muestra los commits donde cambió cuántas veces aparece una cadena. Con commits pequeños, cada resultado apunta a un cambio concreto.',
      en: 'It shows the commits where the number of times a string appears changed. With small commits, each result points at a specific change.',
    },
    distractors: [
      {
        es: 'Filtra los commits cuyo mensaje contiene esa cadena.',
        en: 'It filters the commits whose message contains that string.',
      },
      {
        es: 'Muestra quién tocó por última vez cada línea del archivo.',
        en: 'It shows who last touched each line of the file.',
      },
    ],
    explanation: {
      es: 'Busca en el diff, no en el mensaje. Buscar en el mensaje es --grep, y la última línea es git blame.',
      en: 'It searches the diff, not the message. Searching the message is --grep, and who last touched each line is git blame.',
    },
  },
];
