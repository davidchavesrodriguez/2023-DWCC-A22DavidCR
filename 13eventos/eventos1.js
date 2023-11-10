// 1. Dado o seguinte código HTML, engade a configuración de estilos CSS para que
// inicialmente o span estea oculto. Ao pulsar a ligazón debe facerse visible o contido
// do span e desaparecer a ligazón.
document.addEventListener('DOMContentLoaded', function () {
  let span = document.getElementById('adicional');
  let link = document.getElementById('ligazon');

  link.addEventListener('click', function (event) {
    event.preventDefault();

    span.classList.toggle('oculto');
    link.style.display = 'none';
  });
});

// 3. Nunha páxina HTML hai un botón ao que fai referencia a variable button do
// seguinte código. Indica que manexadores de eventos se executan dos seguintes:
// button.addEventListener("click", () => console.log("1"));
// button.removeEventListener("click", () => console.log("1"));
// button.onclick = () => console.log(2);

// 4. Crea un menú que se abra/colapse ao facer clic sobre el. Inicialmente o menú debe
// estar colapsado e ao pulsar no texto “Sweeties (click me)!” deben mostrarse as
// opcións do menú.
// Debes asegurarte que a funcionalidade só se habilita cando se pulsa sobre o texto
// “Sweeties (click me)!” e non sobre calquera outra zona da páxina/liña.
// Nestes casos é útil modificar o cursor cando pase por riba do texto para que teña
// estilo “pointer” e informar á persoa usuaria que esa é unha zona na que se pode
// pulsar.

// 5. Insire unha imaxe nunha páxina web e engádelle un listener para cada un dos
// seguintes eventos: click, dblclick, contextmenu, mousedown, mouseup, wheel,
// mouseover, mouseout, dragstart, drag, dragend. Cada vez que suceda un destes
// eventos mostra por consola unha mensaxe informando do evento que sucedeu.
// Proba os diferentes eventos e observa a orde na que suceden.
