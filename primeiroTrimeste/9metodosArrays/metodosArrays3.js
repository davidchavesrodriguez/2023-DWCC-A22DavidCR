// 3. Fai unha función que ordene as notas dun array pasado como parámetro. Por
// exemplo, se se pasa o array [4,8,3,10,5] debe devolver [3,4,5,8,10]. Debes utilizar a
// función sort e pasarlle como parámetro unha función que ti definas que serva para
// realizar a comparación de elementos.
const arrayDesordenado = [4, 8, 3, 10, 5];
const arrayOrdenado = arrayDesordenado.sort((a, b) => a - b);
console.log(arrayOrdenado);
