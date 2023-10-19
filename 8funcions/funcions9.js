// 9. Crea unha función chamada buscarPatron(texto, patron) que reciba como
// parámetros un texto e un patrón. A función debe devolver como resultado o número
// de veces que aparece o patrón no texto.
// Hai que implementar a función de forma manual e non utilizar as funcións
// proporcionadas pola linguaxe JavaScript.
// Non se deben distinguir maiúsculas de minúsculas.
// Un carácter pode formar parte de máis dun patrón encontrado.
// Exemplo: buscarPatron(“000111101000ABCHO”, “00”) debe devolver 4.

function buscarPatron(texto, patron) {
  texto.toUpperCase();
  patron.toUpperCase();
  let count = 0;
  let index = texto.indexOf(patron);

  while (index !== -1) {
    count++;
    index = texto.indexOf(patron, index + 1);
  }
  return count;
}

console.log(buscarPatron("000111101000ABCHO", "00"));
