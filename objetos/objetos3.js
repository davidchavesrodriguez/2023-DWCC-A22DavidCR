/* 3. Crea unha función á que se lle pase unha cadea de números e devolva unha cadea
da mesma lonxitude formada por * e as últimas 4 cifras do parámetro de entrada. */
function enmascarar(str) {
  console.log(`${str.padStart(str.length - 4, '*')}${str.slice(-4)}`);
}

enmascarar('1234123412347777'); // ************7777
