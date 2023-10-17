// 1. Crea unha función frecha que devolva o cubo dun número pasado como parámetro.
const calcCubo= (x) => x*x*x;
console.log(calcCubo(3));





// 9. Crea unha función chamada buscarPatron(texto, patron) que reciba como
// parámetros un texto e un patrón. A función debe devolver como resultado o número
// de veces que aparece o patrón no texto.
// Hai que implementar a función de forma manual e non utilizar as funcións
// proporcionadas pola linguaxe JavaScript.
// Non se deben distinguir maiúsculas de minúsculas.
// Un carácter pode formar parte de máis dun patrón encontrado.
// Exemplo: buscarPatron(“000111101000ABCHO”, “00”) debe devolver 4.
// 10. Crea unha función que reciba como parámetro unha cantidade enteira e faga o
// desglose do número de billetes e moedas necesarios para obtela. Debe usarse o
// número mínimo de billetes e moedas.
// 10
// Funcións
// 11. Crea unha función que reciba un array bidimensional de lonxitude variable que se
// corresponda cun escenario do xogo de Buscaminas. Este array almacenará un -1
// nas posicións onde hai minas e un 0 en caso contrario. A función debe devolver un
// array bidimensional onde cada posición que non teña mina, debe ter a información
// do número de minas adxacentes (diagonal, horizontal e vertical).
// Exemplo:
// arrayEntrada = [[0, 0, -1, 0],
// [0, -1, -1, 0]];
// arraySaida = [[1, 3, -1, 2],
// [1, -1, -1, 2]];