// 1. Crea unha función que reciba un elemento e un array como parámetros. A función
// debe devolver un array cos índices onde aparece ese elemento no array.

// Exemplo:
// const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
// function indices(elemento, arrayElementos) {
// …
// }
// console.log(indices(1, numeros)); // (4) [0, 3, 5, 9]

function indices(elemento, arrayElementos) {
  const indicesEncontrados = [];

  let currentIndex = arrayElementos.indexOf(elemento);
  while (currentIndex !== -1) {
    indicesEncontrados.push(currentIndex);
    currentIndex = arrayElementos.indexOf(elemento, currentIndex + 1);
  }

  return indicesEncontrados;
}

const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
console.log(indices(1, numeros));
