import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const base = 'src/app/projects/quest-dev/data';
const areas = ['theoric', 'frontend', 'backend'];

const ids = new Map();
const prompts = new Map();
const problems = [];
let total = 0;

for (const area of areas) {
  const files = readdirSync(join(base, area)).filter((f) => f.endsWith('.questions.ts'));
  let areaCount = 0;

  for (const file of files) {
    const path = join(base, area, file);
    const content = readFileSync(path, 'utf8');
    const blocks = content.split(/\n  \{\n/).slice(1);

    for (const block of blocks) {
      areaCount++;
      const id = block.match(/id: '([^']+)'/)?.[1] ?? '(sin id)';
      const es = (block.match(/\bes: '/g) ?? []).length;
      const en = (block.match(/\ben: '/g) ?? []).length;
      const prompt = block.match(/prompt: \{\s*\n\s*es: '([^']+)'/)?.[1] ?? '';

      if (es !== 5 || en !== 5) {
        problems.push(`${area}/${file} ${id}: ${es} textos es y ${en} textos en (se esperan 5 y 5)`);
      }
      if (ids.has(id)) {
        problems.push(`id repetido ${id}: ${ids.get(id)} y ${area}/${file}`);
      }
      ids.set(id, `${area}/${file}`);

      const key = prompt.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (key && prompts.has(key)) {
        problems.push(`enunciado repetido ${id} vs ${prompts.get(key)}`);
      }
      if (key) {
        prompts.set(key, `${area}/${file} ${id}`);
      }
    }
  }

  total += areaCount;
  console.log(`🚀 Rc_logger 🚀 | ${area}: ${areaCount} preguntas en ${files.length} archivos`);
}

console.log(`🚀 Rc_logger 🚀 | total: ${total} preguntas`);
console.log(`🚀 Rc_logger 🚀 | problemas: ${problems.length}`);
for (const problem of problems.slice(0, 40)) {
  console.log(`🚀 Rc_logger 🚀 | ${problem}`);
}
