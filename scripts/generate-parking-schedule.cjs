const fs = require('fs');
const path = require('path');

const rows = `
28/07/2026|Martes|1|Gabriel Condori|Richard Cori|Victor Anaya
30/07/2026|Jueves|1|Jorge Callisaya|Rodrigo Tordoya|Pablo Acker
03/08/2026|Lunes|2|Gabriel Condori|Pablo Acker|Rodrigo Tordoya
05/08/2026|Miércoles|2|Richard Cori|Jorge Callisaya|Gabriel Condori
11/08/2026|Martes|3|Victor Anaya|Rodrigo Tordoya|Pablo Acker
13/08/2026|Jueves|3|Richard Cori|Gabriel Condori|Jorge Callisaya
17/08/2026|Lunes|4|Pablo Acker|Rodrigo Tordoya|Victor Anaya
19/08/2026|Miércoles|4|Gabriel Condori|Richard Cori|Jorge Callisaya
21/08/2026|Viernes|4|Rodrigo Tordoya|Victor Anaya|Pablo Acker
25/08/2026|Martes|5|Jorge Callisaya|Gabriel Condori|Victor Anaya
27/08/2026|Jueves|5|Pablo Acker|Richard Cori|Rodrigo Tordoya
31/08/2026|Lunes|6|Jorge Callisaya|Victor Anaya|Gabriel Condori
02/09/2026|Miércoles|6|Richard Cori|Rodrigo Tordoya|Pablo Acker
04/09/2026|Viernes|6|Gabriel Condori|Jorge Callisaya|Victor Anaya
08/09/2026|Martes|7|Rodrigo Tordoya|Pablo Acker|Richard Cori
10/09/2026|Jueves|7|Victor Anaya|Jorge Callisaya|Gabriel Condori
14/09/2026|Lunes|8|Pablo Acker|Rodrigo Tordoya|Richard Cori
16/09/2026|Miércoles|8|Victor Anaya|Gabriel Condori|Jorge Callisaya
18/09/2026|Viernes|8|Rodrigo Tordoya|Richard Cori|Pablo Acker
22/09/2026|Martes|9|Jorge Callisaya|Victor Anaya|Gabriel Condori
24/09/2026|Jueves|9|Richard Cori|Pablo Acker|Rodrigo Tordoya
28/09/2026|Lunes|10|Gabriel Condori|Jorge Callisaya|Victor Anaya
30/09/2026|Miércoles|10|Rodrigo Tordoya|Richard Cori|Pablo Acker
02/10/2026|Viernes|10|Victor Anaya|Gabriel Condori|Jorge Callisaya
06/10/2026|Martes|11|Pablo Acker|Rodrigo Tordoya|Richard Cori
08/10/2026|Jueves|11|Jorge Callisaya|Gabriel Condori|Victor Anaya
12/10/2026|Lunes|12|Richard Cori|Pablo Acker|Rodrigo Tordoya
14/10/2026|Miércoles|12|Victor Anaya|Jorge Callisaya|Gabriel Condori
16/10/2026|Viernes|12|Rodrigo Tordoya|Pablo Acker|Richard Cori
20/10/2026|Martes|13|Gabriel Condori|Jorge Callisaya|Victor Anaya
22/10/2026|Jueves|13|Rodrigo Tordoya|Richard Cori|Pablo Acker
26/10/2026|Lunes|14|Victor Anaya|Jorge Callisaya|Gabriel Condori
28/10/2026|Miércoles|14|Richard Cori|Rodrigo Tordoya|Pablo Acker
30/10/2026|Viernes|14|Gabriel Condori|Victor Anaya|Jorge Callisaya
03/11/2026|Martes|15|Pablo Acker|Richard Cori|Rodrigo Tordoya
05/11/2026|Jueves|15|Jorge Callisaya|Gabriel Condori|Victor Anaya
09/11/2026|Lunes|16|Rodrigo Tordoya|Pablo Acker|Richard Cori
11/11/2026|Miércoles|16|Victor Anaya|Jorge Callisaya|Gabriel Condori
13/11/2026|Viernes|16|Richard Cori|Rodrigo Tordoya|Pablo Acker
17/11/2026|Martes|17|Gabriel Condori|Victor Anaya|Jorge Callisaya
19/11/2026|Jueves|17|Pablo Acker|Rodrigo Tordoya|Richard Cori
23/11/2026|Lunes|18|Jorge Callisaya|Gabriel Condori|Victor Anaya
25/11/2026|Miércoles|18|Richard Cori|Rodrigo Tordoya|Pablo Acker
27/11/2026|Viernes|18|Victor Anaya|Gabriel Condori|Jorge Callisaya
01/12/2026|Martes|19|Rodrigo Tordoya|Pablo Acker|Richard Cori
03/12/2026|Jueves|19|Jorge Callisaya|Victor Anaya|Gabriel Condori
07/12/2026|Lunes|20|Pablo Acker|Rodrigo Tordoya|Richard Cori
09/12/2026|Miércoles|20|Gabriel Condori|Jorge Callisaya|Victor Anaya
11/12/2026|Viernes|20|Richard Cori|Rodrigo Tordoya|Pablo Acker
15/12/2026|Martes|21|Victor Anaya|Gabriel Condori|Jorge Callisaya
17/12/2026|Jueves|21|Rodrigo Tordoya|Pablo Acker|Richard Cori
21/12/2026|Lunes|22|Jorge Callisaya|Victor Anaya|Gabriel Condori
23/12/2026|Miércoles|22|Richard Cori|Rodrigo Tordoya|Pablo Acker
29/12/2026|Martes|23|Gabriel Condori|Jorge Callisaya|Victor Anaya
31/12/2026|Jueves|23|Pablo Acker|Rodrigo Tordoya|Richard Cori
`
  .trim()
  .split(/\n/);

const firstName = (full) => (full || '').trim().split(/\s+/)[0];

const parqueos = rows.map((line) => {
  const [fechaRaw, dia, _semana, p121, p317, p318] = line.split('|');
  const [dd, mm, yyyy] = fechaRaw.split('/');
  return {
    fecha: `${yyyy}-${mm}-${dd}`,
    dia,
    parqueo121: firstName(p121),
    parqueo317: firstName(p317),
    parqueo318: firstName(p318),
  };
});

const out = path.join(
  __dirname,
  '../src/app/projects/parking-status/data/scheduleParking.json'
);
fs.writeFileSync(out, JSON.stringify({ parqueos }, null, 2) + '\n');
console.log('Wrote', parqueos.length, 'rows to', out);
