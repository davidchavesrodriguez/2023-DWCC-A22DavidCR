//1 Indica, polo menos, unha forma de acceder aos seguintes nodos:

// o nodo <div>
const divElement = document.body.firstElementChild;
console.log('1A- O nodo <div>');
console.log(divElement);

// o nodo <ul>
const ulElement = divElement.nextElementSibling;
console.log('1B- O nodo <ul>');
console.log(ulElement);

// o segundo <li>
const secondLi = ulElement.lastElementChild;
console.log('1C- O segundo <li>');
console.log(secondLi);

// 2. Dado un elemento calquera dunha árbore DOM:
// a. ¿É certo que elemento.lastChild.nextSibling é sempre null?
//Si, si.

// b. ¿É certo que elemento.children[0].previousSibling é sempre null?
//Non, children[0] recolle o primeiro ELEMENTO pero podemos ter un NODO anterior

// 3. Escribe o código para pintar as celas diagonais dunha táboa de vermello. Debes
// investigar en internet como cambiar a cor de fondo dunha cela mediante JavaScript.
const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const cell = row.cells[i];
  cell.style.backgroundColor = '#880808';
  cell.style.fontWeight = 'bold';
  cell.style.textDecoration = 'underline';
}
