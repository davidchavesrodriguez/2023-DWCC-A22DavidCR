// 1. Crea unha función frecha que devolva o cubo dun número pasado como parámetro.
const calcCubo= (x) => x*x*x;
console.log(calcCubo(3));




// 8. Crea unha función JavaScript que comprobe se é poxible axendar unha reunión
// dentro do horario laboral.
// A estrutura da función e do programa indícanse a continuación. O código seguinte
// inclúe comprobacións con assert, que mostrarán por pantalla unha mensaxe en caso
// de fallo. É dicir, se a comprobación é correcta, o programa non mostrará ningunha
// mensaxe:
// const inicioXornada = "07:30";
// const finalXornada = "17:45";
// function axendarReunion(horaInicioReunion, duracionEnMinutos) {
// // A función debe devolver true se a reunión ocorre dentro da xornada laboral
// // e false en caso contrario
// }
// // Comprobacións
// console.assert(axendarReunion("7:00", 15) == false,
// 'Fallo comprobando axendarReunión("7:00", 15) == false');
// console.assert(axendarReunion("7:15", 30) == false,
// 'Fallo comprobando axendarReunión("7:15", 30) == false');
// console.assert(axendarReunion("7:30", 30) == true,
// 'Fallo comprobando axendarReunión("7:30", 30) == true);
// console.assert(axendarReunion("11:30", 60) == true,
// 'Fallo comprobando axendarReunión("11:30", 60) == true);
// console.assert(axendarReunion("17:00", 45) == true,
// 'Fallo comprobando axendarReunión("17:00", 45) == true');
// console.assert(axendarReunion("17:30", 30) == false,
// 'Fallo comprobando axendarReunión("17:30", 30) == false');
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