/* 5. Inicializa unha variable a un número, calcula o seu factorial e mostra a resultado por
consola. (5! = 5*4*3*2*1). */
let variable = 7;
let factorial = 1;
for (let i = variable; i > 0; i--) {
  factorial = factorial * i;
}
console.log(factorial);
