// 3. Descarga o código HTML e fai que a táboa se poida ordenar. Cando se pulse nun
// <th>, deberían ordenarse os datos pola columna sobre a que se fixo clic.
// Cada columna ten o tipo de datos no atributo data-type, neste caso unha columna
// ten números e outra strings. Hai que ter en conta o tipo de datos na ordenación.
// O código programado debe funcionar con táboas máis grandes, tanto en número de
// filas como de columnas.
// Utiliza un só manexador de eventos.

// let tabla = document.getElementById('grid');
// tabla.addEventListener('click', (event) => {
//   if (event.target.getAttribute('data-type') == 'number') {
//     document.body.style.backgroundColor = 'red';
//     // let indexTh = event.target.cellIndex;
//     // let tableRows = Array.from(tabla.getElementsByTagName('tr'));
//     // tableRows.sort(a - b);
//   } else if (event.target.getAttribute('data-type') == 'string') {
//     document.body.style.backgroundColor = 'blue';
//     // event.target.style.color = 'blue';
//   }
// });

grid.onclick = function (e) {
  if (e.target.tagName != 'TH') return;

  let th = e.target;
  // si TH, entonces ordena
  // cellIndex es el número de th:
  //   0 para la primera columna
  //   1 para la segunda columna, etc.
  sortGrid(th.cellIndex, th.dataset.type);
};

function sortGrid(colNum, type) {
  let tbody = grid.querySelector('tbody');

  let rowsArray = Array.from(tbody.rows);

  // compare(a, b) compara dos filas, necesario para ordenar
  let compare;

  switch (type) {
    case 'number':
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case 'string':
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
          ? 1
          : -1;
      };
      break;
  }

  // sort
  rowsArray.sort(compare);

  tbody.append(...rowsArray);
}
