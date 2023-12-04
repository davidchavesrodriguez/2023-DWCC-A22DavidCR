// 2. Dado un array cos días da semana en minúsculas:
const dias = [
  "luns",
  "martes",
  "mércores",
  "xoves",
  "venres",
  "sábado",
  "domingo",
];

// a. Obtén un novo array cos días que empecen por “m” e móstrao por consola.
const diasM = dias.filter((dia) => dia.charAt(0) === "m");
console.log("A- ");
console.log(diasM);

// b. Mostra unha mensaxe indicando se algún día comeza por ‘s’.
const diasComezoS = dias.some((dia) => dia.charAt(0) === "s");
console.log("B- ");
if (diasComezoS) {
  console.log("Pois algún día si que comeza por S");
} else {
  console.log("Non hai ningún que comece por S");
}

// c. Mostra unha mensaxe indicando se todos os días acaban en ‘s’.
const diasFinalS = dias.every((dia) => dia.charAt(-1) === "s");
console.log("C- ");
if (diasFinalS) {
  console.log("Todos os días rematan por s!");
} else {
  console.log("A verdad é que non todos rematan por s...");
}

// d. Mostra por consola o primeiro día que empece por “m”.
console.log("D- ");
console.log(dias.find((dia) => dia.charAt(0) === "m"));

// e. Mostra por consola a posición no array do primeiro día que empeza por “m”.
console.log("E- ");
console.log(dias.findIndex((dia) => dia.charAt(0) === "m"));

// f. Crea un novo array cos días da semana en maiúsculas
const diasMayus = dias.map((dia) => dia.toUpperCase());
console.log("F- ");
console.log(diasMayus);
