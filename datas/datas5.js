// 5. Crea unha función á que se lle pase unha data e diga se é fin de semana.
let dia = new Date(2023, 9, 2).getDay();
function finDeSemana(dia) {
  switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      console.log('Ainda non é fin de semana :(');
      break;
    case 0:
    case 6:
      console.log('A durmir que é finde!');
      break;
    default:
      break;
  }
}
finDeSemana(dia);
