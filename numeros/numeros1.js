/* 1. Números aleatorios:
a. Xera un número enteiro aleatorio entre 0 e 3 (incluídos). */
console.log(parseInt(Math.random() * 4));

// b. Xera un número enteiro aleatorio entre 1 e 3 (incluídos).
console.log(parseInt(Math.ceil(Math.random() * 3)));

/* c. Crea unha función que devolva un número aleatorio entre os dous valores
pasados como parámetros. Así, por exemplo, a seguinte instrución debe
mostrar un número aleatorio entre 5 e 10 (incluídos): */
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numeroAleatorio(5, 10));
