// 4. Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de días dese mes.
let mes = 1;

function mirarDiasMes(mes) {
  switch (mes) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      console.log('Ten 31 días!');
      break;
    case 3:
    case 5:
    case 8:
    case 10:
      console.log('Ten 30 días!');
      break;
    case 1:
      console.log('Mira, febreiro é complicado...');
      break;
    default:
      console.log('???');
      break;
  }
}

mirarDiasMes(mes);
