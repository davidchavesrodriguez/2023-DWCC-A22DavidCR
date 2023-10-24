// 1. Escribe unha expresión regular para comprobar que cada un dos seguintes
// elementos aparece nunha cadea.
// a. car e cat
const regA= /ca[r|t]/;
// b. pop e prop
const regB= /pr?op/;
// c. ferret, ferry e ferrari
const regC= /ferr[et|y|ari]/;
// d. Calquera palabra rematada en ious
const regD= /ious\b/;
// e. Un espazo seguido de punto, coma, dous puntos ou punto e coma.
const regE= / [.|,|:|;]/;
// f. Unha palabra con máis de 6 letras.
const regF= /[a-z]{6,}/i;
// g. Unha palabra sen a letra e (ou E).
const regG= /\b[^\We]+\b/i;

// Unha vez teñas a expresión regular creada, comproba se se pode facer máis
// pequena.
// Utiliza o seguinte código para comprobar o resultado, pasando como primeiro
// parámetro da función verify a túa expresión regular:
function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes)
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
  for (let str of no)
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
}
verify(regA, ["my car", "bad cats"], ["camper", "high art"]);
verify(regB, ["pop culture", "mad props"], ["plop", "prrrop"]);
verify(regC, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);
verify(regD, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);
verify(regE, ["bad punctuation ."], ["escape the period"]);
verify(
    regF,
  ["Siebentausenddreihundertzweiundzwanzig"],
  ["no", "three small words"]
);
verify(
  regG,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape", "BEET"]
);
