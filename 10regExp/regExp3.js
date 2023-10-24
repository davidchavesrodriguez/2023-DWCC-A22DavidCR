// 3. Crea unha expresión regular para buscar códigos de cores no formato #RGB ou
// #RRGGBB nun texto. Un código de color é unha cadea formada polo carácter “#”
// seguido de 3 ou 6 cifras hexadecimais.
const regRGB= /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;
console.log(regRGB.test("#880808"));
console.log(regRGB.test("Julio"));
console.log(regRGB.test("#6543213325"));
console.log(regRGB.test("#5678ip"));
console.log(regRGB.test("#FFF"));
