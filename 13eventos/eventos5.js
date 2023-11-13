// 5. Insire unha imaxe nunha páxina web e engádelle un listener para cada un dos
// seguintes eventos: click, dblclick, contextmenu, mousedown, mouseup, wheel,
// mouseover, mouseout, dragstart, drag, dragend. Cada vez que suceda un destes
// eventos mostra por consola unha mensaxe informando do evento que sucedeu.
// Proba os diferentes eventos e observa a orde na que suceden.
let imgProba = document.getElementById('imgEx5');

imgProba.addEventListener('click', () => {
  console.log('Click');
});

imgProba.addEventListener('dblclick', () => {
  console.log('Doble Click');
});

imgProba.addEventListener('contextmenu', () => {
  console.log('Context Menu');
});

imgProba.addEventListener('mousedown', () => {
  console.log('Mouse Down');
});

imgProba.addEventListener('mouseup', () => {
  console.log('Mouse Up');
});

imgProba.addEventListener('wheel', () => {
  console.log('Wheel');
});

imgProba.addEventListener('mouseover', () => {
  console.log('Mouse Over');
});

imgProba.addEventListener('mouseout', () => {
  console.log('Mouse Out');
});

imgProba.addEventListener('dragstart', () => {
  console.log('Drag Start');
});

imgProba.addEventListener('drag', () => {
  console.log('Drag');
});

imgProba.addEventListener('dragend', () => {
  console.log('Drag End');
});
