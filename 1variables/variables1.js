/* 1. Crea unha variable que almacene un día da semana de luns a domingo. En función
do valor da variable mostra unha mensaxe indicando se o día é laborable ou non. */
let diaElixido = 4;
let dias = [
  'luns',
  'martes',
  'mércores',
  'xoves',
  'venres',
  'sábado',
  'domingo',
];
console.log(dias);
if (diaElixido < 5) {
  console.log(dias[diaElixido] + ' é laborable :(');
} else {
  console.log(dias[diaElixido] + ' NON é laborable!!');
}
