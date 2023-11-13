// 4. Crea un menú que se abra/colapse ao facer clic sobre el. Inicialmente o menú debe
// estar colapsado e ao pulsar no texto “Sweeties (click me)!” deben mostrarse as
// opcións do menú.
// Debes asegurarte que a funcionalidade só se habilita cando se pulsa sobre o texto
// “Sweeties (click me)!” e non sobre calquera outra zona da páxina/liña.
// Nestes casos é útil modificar o cursor cando pase por riba do texto para que teña
// estilo “pointer” e informar á persoa usuaria que esa é unha zona na que se pode
// pulsar.
let hideMenu = () => {
  document.getElementById('menuEx4').style.display = 'none';
};
let fitWidth = () => {
  document.getElementById('sweeties').style.width = 'fit-content';
};
document.addEventListener('DOMContentLoaded', hideMenu);
document.addEventListener('DOMContentLoaded', fitWidth);

let textSweeties = document.getElementById('sweeties');
textSweeties.addEventListener('click', () => {
  document.getElementById('menuEx4').style.display = 'flex';
});
