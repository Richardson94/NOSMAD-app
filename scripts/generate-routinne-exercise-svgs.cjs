const fs = require('fs');
const path = require('path');

const dir = path.join('src', 'assets', 'routinne', 'exercises');
fs.mkdirSync(dir, { recursive: true });

const items = [
  ['treadmill', 'Treadmill'],
  ['hack-squat', 'Hack squat'],
  ['leg-press', 'Leg press'],
  ['seated-leg-extension', 'Seated leg ext'],
  ['seated-leg-curl', 'Seated leg curl'],
  ['lying-leg-curl', 'Lying leg curl'],
  ['abductor-machine', 'Abductor'],
  ['adductor-machine', 'Adductor'],
  ['crunch-machine', 'Crunch'],
  ['ab-lower-back-machine', 'Abs/Low back'],
  ['pec-deck', 'Pec deck'],
  ['shoulder-press', 'Shoulder press'],
  ['shoulder-press-convergent', 'Shoulder conv'],
  ['triceps-high-pulley', 'Tri pulley'],
  ['combo-biceps-triceps', 'Bi/Tri'],
  ['adjustable-pulley', 'Adj. pulley'],
  ['lat-pulldown', 'Lat pulldown'],
  ['seated-low-row', 'Low row'],
  ['rear-delt-machine', 'Rear delt'],
  ['low-pulley', 'Low pulley'],
  ['biceps-cable-curl', 'Bi curl'],
  ['back-extension-machine', 'Back ext'],
  ['flat-bench', 'Flat bench'],
  ['incline-bench', 'Incline'],
  ['preacher-bench', 'Preacher'],
  ['squat-rack', 'Squat rack'],
  ['roman-chair', 'Roman chair'],
  ['ab-bench', 'Ab bench'],
  ['smith-machine', 'Smith'],
  ['elliptical', 'Elliptical'],
];

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

let h = 0;
for (const [id, short] of items) {
  h = (h + 19) % 360;
  const h2 = (h + 55) % 360;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="120" viewBox="0 0 160 120">
<defs><linearGradient id="g${id}" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" style="stop-color:hsl(${h},38%,24%)"/>
<stop offset="100%" style="stop-color:hsl(${h2},28%,14%)"/>
</linearGradient></defs>
<rect width="160" height="120" fill="url(#g${id})" rx="10"/>
<rect x="14" y="54" width="132" height="10" fill="rgba(255,255,255,0.1)" rx="3"/>
<rect x="28" y="26" width="32" height="40" fill="rgba(167,139,250,0.35)" rx="5"/>
<circle cx="118" cy="38" r="10" fill="rgba(255,255,255,0.08)"/>
<text x="80" y="100" text-anchor="middle" fill="#e4e4e7" font-size="9" font-family="system-ui,sans-serif">${esc(
    short
  )}</text>
</svg>`;
  fs.writeFileSync(path.join(dir, `${id}.svg`), svg, 'utf8');
}
console.log('wrote', items.length, 'svgs to', dir);
