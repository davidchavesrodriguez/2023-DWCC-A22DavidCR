// 4. Escribe unha expresión regular para números. 
// Debe incluír números enteiros, decimais e números negativos. 
// Así, na cadea "-1.2 4 0 -123.5." debe encontrar 4 números
const cadea= "-1.2 4 0 -123.5.";
const regNum= /-?[0-9]+[.]?[0-9]*/g;
console.log(cadea.match(regNum));
