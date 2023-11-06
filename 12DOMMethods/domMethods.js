// 1. Imaxinar que a variable elemento fai referencia a un elemento do DOM e text é
// unha variable con unha cadea de texto que inclúe etiquetas HTML. ¿Cales dos
// seguintes comandos farán exactamente o mesmo?:
// a. elemento.append(document.createTextNode(text));  V
// b. elemento.innerHTML = text;  V
// c. elemento.textContent = text;

// 2. Dada unha lista <ol> con varios elementos <li>, crea o código necesario para
// eliminar os < li > da lista.
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
//Porque elimina o elemento tabla pero non os fillos (?)

// 4. Crea un documento HTML que conteña un elemento <ul>. Dende JavaScript crea 4
// elementos <li> e engádeos á lista <ul>, de tal forma que sexan visibles no
// navegador.

// 5. Escribe o código JavaScript para inserir “<li>2</li><li>3</li>” entre os dous <li>
// seguintes:
/* <table id="taboa"> Texto <tr>
    <td>Test</td>
  </tr>
</table>
<ul id="listaULExercicio5">
  <li id="one">1</li>
  <li id="two">4</li>
</ul> */

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
// Crea unha función createTree(data) que devolva unha lista ul/li coma a da imaxe da
// dereita, para os datos proporcionados.
// Para realizalo hai dúas posibilidades, aínda que sería bo que intentases as dúas
// opcións: crear o código código HTML ou crear directamente os nodos da árbore.

// 7. Escribe unha función crearCalendario(elemento, ano, mes) que engada ao
// elemento pasado como parámetro un calendario do ano e mes indicados.
// O calendario debe ser unha táboa, onde cada semana é un <tr> e cada día un <td>. A
// cabeceira da táboa está creada con <th>. Por exemplo, o calendario resultado de chamar á
// función cos seguintes parámetros vese na imaxe seguinte. Observar que se aplicaron estilos CSS
// para mellorar o aspecto.
crearCalendario(calendario, 2022, 11);

// 8. Ordena a seguinte táboa pola columna “Nome”. Escribe un código que funcione
// independentemente do número de filas da táboa.
{
  /* <table id="taboa"> Texto <tr>
    <td>Test</td>
  </tr>
</table>
<ul id="listaULExercicio5">
  <li id="one">1</li>
  <li id="two">4</li>
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
}

// 9. Dada unha lista como a seguinte, escribe o código que engada o número de
// descendentes.
{
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
}
