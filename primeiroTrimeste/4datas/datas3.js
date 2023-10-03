// 3. Calcula o número de días que pasaron dende o 25 de xullo de 2000 ata hoxe.
const primeiraFecha = new Date(2000, 6, 25).valueOf();
// console.log(primeiraFecha);

const actual = new Date().valueOf();
// console.log(actual);

const milisegundos = actual - primeiraFecha;
console.log(
  `Dende o 25 de xullo do 2000 pasaron ${(
    milisegundos /
    (1000 * 60 * 60 * 24)
  ).toFixed(3)} milisegundos`
);
