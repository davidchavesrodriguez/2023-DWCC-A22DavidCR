// Suma os valores do seguinte array de obxectos:
const array = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = array.reduce(
  (accumulator, currentVal) => accumulator + currentVal.x,
  0
);
console.log(sum);
