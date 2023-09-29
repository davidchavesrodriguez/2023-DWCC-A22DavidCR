/* 2. Crea unha variable chamada x e asínalle un número enteiro aleatorio entre 1 e 100.
Crea tamén outra variable chamada y con un número enteiro aleatorio entre 1 e 50.
Fai as operacións suma, resta, multiplicación, división e resto das dúas variables
mostrando o resultado por pantalla. O resultado debe mostrar os operandos, a
operación e o resultado. Así, se os números aleatorios son 40 e 20, debería
mostrarse por pantalla:
40 + 20 = 60
40 - 20 = 20
40 * 20 = 800
40 / 20 = 2
40 % 2 = 0 */
let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);

console.log(`${x} + ${y} = ${x + y}`);
console.log(`${x} - ${y} = ${x - y}`);
console.log(`${x} * ${y} = ${x * y}`);
console.log(`${x} / ${y} = ${x / y}`);
console.log(`${x} % ${y} = ${x % y}`);
