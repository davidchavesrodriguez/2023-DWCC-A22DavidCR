// 2. Unha dirección de rede MAC está composta por 6 grupos de dous números
// hexadecimais separados por “:”. Por exemplo "01:32:54:67:89:AB".
// Escribe unha expresión regular que comprobe se unha dirección MAC é correcta.
const regMac= /(\b[0-9A-F]{2}\b:){5}[0-9A-F]{2}/
console.log(regMac.test("01:32:54:67:89:AB"));
console.log(regMac.test("0vsdv1:32:54:67:89:AB"));
console.log(regMac.test("0423524:32:54:67:89:AB"));
