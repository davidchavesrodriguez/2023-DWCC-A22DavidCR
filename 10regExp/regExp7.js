// 7. Dado o seguinte array de insultos, fai un script tal
// que cada vez que apareza un deles nun texto o substitúa
// pola primeira letra do insulto e un número de asteriscos
// igual á lonxitude do insulto - 1.
let insultos = [
  "testán",
  "langrán",
  "fervellasverzas",
  "baldreo",
  "lacazán",
  "pillabán",
];
// Así, por exemplo, cada vez que apareza testán nun texto,
// debe substituírse por "t*****".
const regInsulto =
  /testán/gi |
  /langrán/gi |
  /fervellasverzas/gi |
  /baldreo/gi |
  /lacazán/gi |
  /pillabán/gi;
const textoInsultoso =
  "O langrán de Julio non foi capaz de axudar ao fervellasverzas de Diego Rianxo";

function censurarInsulto(textoInsultoso) {
  console.log(textoInsultoso.replace(regInsulto, regInsulto));
}
