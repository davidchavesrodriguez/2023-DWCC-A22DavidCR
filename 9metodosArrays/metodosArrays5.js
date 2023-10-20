// 5. Dada a seguinte información:
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];
// a. Filtra o array de inventores e crea un array só cos inventores que naceron no
// século XVI.
console.log("A- ");
const inventoresXVI = inventors.filter((inventor) => inventor.year > 1500);
console.log(inventoresXVI);

// b. Crea un array co nome completo dos inventores. Por exemplo: ["Albert
// Einstein", "Isaac Newton", ...]
console.log("B- ");
const fullName = inventors.map(
  (inventor) => inventor.first + " " + inventor.last
);
console.log(fullName);

// c. Unha vez obtido o array co nome completo dos inventores do exercicio
// anterior, ordénao alfabeticamente polo apelido.

//PA DESPOIS

// d. Ordena alfabeticamente polo apelido o array de obxectos inventores inicial.
console.log("D- ");
const orderArray = inventors.sort((a, b) => a.last.localeCompare(b.last));
console.log(orderArray);

// e. Ordena o array de inventores pola data de nacemento.
console.log("E- ");
const orderByDate = inventors.sort((a, b) => a.year - b.year);
console.log(orderByDate);

// f. Calcula a suma dos anos que viviron todos os inventores.
console.log("F- ");
const sumaEdad = inventors.reduce((accum, inventor) => {
  return accum + (inventor.passed - inrºventor.year);
}, 0);
console.log(sumaEdad);

// g. Ordena os inventores polos anos que viviron, primeiro o máis lonxevo
console.log("G- ");
const orderByOld= inventors.sort((b, a)=> (a.passed-a.year) - (b.passed-b.year));
console.log(orderByOld);

