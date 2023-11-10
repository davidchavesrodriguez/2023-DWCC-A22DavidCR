// 1. Imaxinar que a variable elemento fai referencia a un elemento do DOM e text é
// unha variable con unha cadea de texto que inclúe etiquetas HTML. ¿Cales dos
// seguintes comandos farán exactamente o mesmo?:
// a. elemento.append(document.createTextNode(text));  V
// b. elemento.innerHTML = text;  (colle as etiquetas tamén)
// c. elemento.textContent = text;  V

// 2. Dada unha lista <ol> con varios elementos <li>, crea o código necesario para
// eliminar os < li > da lista.
let ol = document.getElementById('deleteThisList');
while (ol.firstChild) {
  ol.removeChild(ol.firstChild);
}

// 3. Dado o seguinte código, ¿por que segue aparecendo o texto despois de borrar a
// táboa?
/* <table id="taboa"> Texto <tr>
    <td>Test</td>
  </tr>
</table> */

let taboa = document.getElementById('taboa');
taboa.remove();
//Porque elimina o elemento tabla pero mantense o texto entre etiquetas.

// 4. Crea un documento HTML que conteña un elemento <ul>. Dende JavaScript crea 4
// elementos <li> e engádeos á lista <ul>, de tal forma que sexan visibles no
// navegador.
let ul = document.getElementById('ulForAddingLi');
for (let i = 0; i < 4; i++) {
  let li = document.createElement('li');
  let randomText = 'Holaholahola';
  li.prepend(randomText);
  ul.prepend(li);
}

// Escribe o código JavaScript para inserir “<li>2</li><li>3</li>” entre os
// dous < li > seguintes:
/*<ul id="listaULExercicio5">
  <li id="one">1</li>
  <li id="two">4</li>
</ul> */
let li2 = document.createElement('li');
li2.textContent = '2';
let li3 = document.createElement('li');
li3.textContent = '3';

let liTwoReference = document.getElementById('two');

liTwoReference.before(li2);
liTwoReference.before(li3);

// 6. Dado un obxecto como o seguinte:
let arbore = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      'apple tree': {},
      magnolia: {},
    },
  },
};
// 6- Crea unha función createTree(data) que devolva unha lista ul/li coma a da imaxe da
// dereita, para os datos proporcionados.
// Para realizalo hai dúas posibilidades, aínda que sería bo que intentases as dúas
// opcións: crear o código código HTML ou crear directamente os nodos da árbore.
function createTree(data) {
  let arboreUl = document.createElement('ul');
  for (const property in data) {
    let arboreLi = document.createElement('li');
    arboreLi.textContent = property;
    arboreLi.append(createTree(data[property]));
    arboreUl.append(arboreLi);
  }
  return arboreUl;
}
document.body.getElementsByTagName('h3')[5].after(createTree(arbore));

// 7. Escribe unha función crearCalendario(elemento, ano, mes) que engada ao
// elemento pasado como parámetro un calendario do ano e mes indicados.
// O calendario debe ser unha táboa, onde cada semana é un <tr> e cada día un <td>. A
// cabeceira da táboa está creada con <th>. Por exemplo, o calendario resultado de chamar á
// función cos seguintes parámetros vese na imaxe seguinte. Observar que se aplicaron estilos CSS
// para mellorar o aspecto.
const crearCalendario = function (selector, ano, mesIntroducido) {
  let table = `<table id="calendario"><thead><th>L</th><th>M</th><th>Me</th><th>X</th><th>V</th><th>S</th><th>D</th></thead><tr>`;

  const mes = mesIntroducido - 1;
  let diaActual = new Date(ano, mes, 1);
  const primerDiaSemana = diaActual.getDay();

  let contador = 7 - diaActual.getDay() + 1;
  for (let i = 0; i < primerDiaSemana - 1; i++) {
    table += '<td></td>';
  }

  while (diaActual.getMonth() === mes) {
    if (diaActual.getDay() === 1) {
      table += '<tr>';
    }
    table += `<td>${diaActual.getDate()}</td>`;

    if (diaActual.getDay() === 0) {
      table += '</tr>';
    }

    diaActual.setDate(diaActual.getDate() + 1);
  }

  contador = 7 - diaActual.getDay() + 1;
  for (let i = 0; i < contador; i++) {
    table += '<td></td>';
  }

  table += '</tr></table>';
  const elemento = document.createElement(`${selector}`);
  elemento.innerHTML = table;

  document.body.getElementsByTagName('h3')[6].after(elemento);
};

crearCalendario('div', 2024, 1);

// 8. Ordena a seguinte táboa pola columna “Nome”. Escribe un código que funcione
// independentemente do número de filas da táboa.
/* 
  <table id="taboaOrdenar">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Apelido</th>
        <th>Idade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Smith</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Pete</td>
        <td>Brown</td>
        <td>15</td>
      </tr>
      <tr>
        <td>Ann</td>
        <td>Lee</td>
        <td>5</td>
      </tr>
    </tbody>
  </table> */

// let taboaOrdenar = document.getElementById('taboaOrdenar');
// let tbody = taboaOrdenar.querySelector('tbody');

// let rows = Array.from(tbody.querySelectorAll('tr'));

// rows.sort((a, b) => {
//   let nomeA = a.querySelector('td:first-of-type').textContent;
//   let nomeB = b.querySelector('td:first-of-type').textContent;
//   return nomeA.localeCompare(nomeB);
// });

// rows.forEach((row) => tbody.appendChild(row));

// document.body
//   .getElementsByTagName('h3')[7]
//   .insertAdjacentHTML('afterend', nomesOrdenados.toString());

// 9. Dada unha lista como a seguinte, escribe o código que engada o número de
// descendentes.
/* <ul id="listaAnimais">
  <li>
    Animals
    <ul>
      <li>
        Mammals
        <ul>
          <li>Cows</li>
          <li>Donkeys</li>
          <li>Dogs</li>
          <li>Tigers</li>
        </ul>
      </li>
      <li>
        Other
        <ul>
          <li>Snakes</li>
          <li>Birds</li>
          <li>Lizards</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    Fishes
    <ul>
      <li>
        Aquarium
        <ul>
          <li>Guppy</li>
          <li>Angelfish</li>
        </ul>
      </li>
      <li>
        Sea
        <ul>
          <li>Sea trout</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>; */

let ulAnimals = document
  .getElementById('listaAnimais')
  .getElementsByTagName('ul');

for (const element of ulAnimals) {
  let ulLength = element.children.length;
  element.insertAdjacentHTML('beforebegin', `[${ulLength}]`);
}
