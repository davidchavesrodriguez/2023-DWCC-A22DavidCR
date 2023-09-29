/* 4. Dada a seguinte constante con información dun voo, aplica as transformacións
necesarias para que teña o formato mostrado: */

const flightsInfo = '_Delayed_Departure;scq93766109;bio2133758440;11:25';

// Función para obtener las primeras 3 letras en mayúsculas
const getCode = (str) => str.slice(0, 3).toUpperCase();

// Dividir la información del vuelo en partes
const [type, from, to, time] = flightsInfo.split(';');

// Formatear la información en el formato deseado
const formattedInfo = `${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(
  to
)} (${time})`;

// Mostrar el resultado en la consola
console.log(formattedInfo); // 'Delayed Departure SCQ BIO (11:25)'
