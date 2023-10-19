// 1. Dado o seguinte array:
const persoas = [
{ nome: 'aaron', idade: 65 },
{ nome: 'beth', idade: 2 },
{ nome: 'ánxeles', idade: 13 },
{ nome: 'daniel', idade: 3 },
{ nome: 'ada', idade: 25 },
{ nome: 'erea', idade: 1 },
{ nome: 'navia', idade: 43 },
];
// a. Crea un novo array que conteña só as persoas maiores de idade.
const maioresDeEdad = persoas.filter((persoa) => persoa.idade >= 18);
console.log(maioresDeEdad);

// b. Crea un novo array que conteña os nomes de todas as persoas.
const nomePersoas= persoas.map((persoas)=>persoas.nome);
console.log(nomePersoas);

// c. Crea un novo array que conteña os nomes das persoas maiores de idade en
// maiúsculas.
// d. Crea un novo array que conteña obxectos só co id e o nome das persoas.
// 2. Dado un array cos días da semana en minúsculas:
// a. Obtén un novo array cos días que empecen por “m” e móstrao por consola.
// b. Mostra unha mensaxe indicando se algún día comeza por ‘s’.
// c. Mostra unha mensaxe indicando se todos os días acaban en ‘s’.
// d. Mostra por consola o primeiro día que empece por “m”.
// e. Mostra por consola a posición no array do primeiro día que empeza por “m”.
// f. Crea un novo array cos días da semana en maiúsculas
// 3. Fai unha función que ordene as notas dun array pasado como parámetro. Por
// exemplo, se se pasa o array [4,8,3,10,5] debe devolver [3,4,5,8,10]. Debes utilizar a
// función sort e pasarlle como parámetro unha función que ti definas que serva para
// realizar a comparación de elementos.
// 4. Dado un array de números, obtén o valor máis alto. (Usa algunha das funcións para
// traballar con arrays).
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
// b. Crea un array co nome completo dos inventores. Por exemplo: ["Albert
// Einstein", "Isaac Newton", ...]
// c. Unha vez obtido o array co nome completo dos inventores do exercicio
// anterior, ordénao alfabeticamente polo apelido.
// d. Ordena alfabeticamente polo apelido o array de obxectos inventores inicial.
// e. Ordena o array de inventores pola data de nacemento.
// f. Calcula a suma dos anos que viviron todos os inventores.
// g. Ordena os inventores polos anos que viviron, primeiro o máis lonxevo
// 6. Dada a seguinte información, obtén un obxecto con unha propiedade para cada
// medio de transporte, indicando o número de veces que se repite no array. É dicir, o
// resultado debería ser {car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1}. Intentar
// facer o exercicio usando o método reduce
const data = [
"car",
"car",
"truck",
"truck",
"bike",
"walk",
"car",
"van",
"bike",
"walk",
"car",
"van",
"car",
"truck",
"pogostick",
];