// 2. Unha dirección de rede MAC está composta por 6 grupos de dous números
// hexadecimais separados por “:”. Por exemplo "01:32:54:67:89:AB".
// Escribe unha expresión regular que comprobe se unha dirección MAC é correcta.
const regMac= /[[0-9A-F]:]{5}[0-9A-F]/
console.log(regMac.test("01:32:54:67:89:AB"));
