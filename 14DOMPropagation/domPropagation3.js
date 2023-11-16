// 3. Descarga o código HTML e fai que a táboa se poida ordenar. Cando se pulse nun
// <th>, deberían ordenarse os datos pola columna sobre a que se fixo clic.
// Cada columna ten o tipo de datos no atributo data-type, neste caso unha columna
// ten números e outra strings. Hai que ter en conta o tipo de datos na ordenación.
// O código programado debe funcionar con táboas máis grandes, tanto en número de
// filas como de columnas.
// Utiliza un só manexador de eventos.

let tabla = document.getElementById('grid');
tabla.addEventListener('click', (event) => {
  if (event.target.getAttribute('data-type') == 'number') {
    let indexTh = event.target.cellIndex;
    let tableRows = Array.from(tabla.getElementsByTagName('tr'));
    tableRows.sort(a - b);
  } else if (event.target.getAttribute('data-type') == 'string') {
    event.target.style.color = 'blue';
  }
});
