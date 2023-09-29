/* 3. Crea unha función á que se lle pase como parámetro o número de minutos e
devolva un string indicando a súa equivalencia en horas e minutos. */
function calcularHoras(int) {
  return `Iso son ${Math.floor(int / 60)} hora/s e ${Math.floor(
    int % 60
  )} minuto/s`;
}
console.log(calcularHoras(120));
