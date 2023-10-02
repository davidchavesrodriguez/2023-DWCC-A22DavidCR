// 1. Mostra o día da semana (en letra) do 25 de xullo de 2000.
let dia = new Date(2000, 6, 25).getDay();
switch (dia) {
  case 0:
    console.log('Foi domingo');
    break;
  case 1:
    console.log('Foi luns');
    break;
  case 2:
    console.log('Foi martes');
    break;
  case 3:
    console.log('Foi mércores');
    break;
  case 4:
    console.log('Foi xoves');
    break;
  case 5:
    console.log('Foi venres');
    break;
  case 6:
    console.log('Foi sábado');
    break;

  default:
    console.log('???');
    break;
}
