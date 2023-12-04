// 2. Mostra o día da semana (en letra) do 25 de xullo deste ano.
const currentYear = new Date().getFullYear();
let dia = new Date(currentYear, 6, 25).getDay();

switch (dia) {
  case 0:
    console.log('Domingo');
    break;
  case 1:
    console.log('Luns');
    break;
  case 2:
    console.log('Martes');
    break;
  case 3:
    console.log('Mércores');
    break;
  case 4:
    console.log('Xoves');
    break;
  case 5:
    console.log('Venres');
    break;
  case 6:
    console.log('Sábado');
    break;
  default:
    console.log('???');
    break;
}
