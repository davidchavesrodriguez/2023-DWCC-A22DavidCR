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
  /(testán|langrán|fervellasverzas|baldreo|lacazán|pillabán)/gi;

const textoInsultoso =
  "O langrán de Julio non foi capaz de axudar ao fervellasverzas de Diego Rianxo";

function susbtituirInsulto(match){
  return match.substring(0, 1) + "*".repeat(match.length - 1);
}

let textoFinal= textoInsultoso.replace(regInsulto, susbtituirInsulto);

console.log(textoFinal);
