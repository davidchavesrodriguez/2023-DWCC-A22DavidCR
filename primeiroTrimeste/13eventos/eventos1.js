// 1. Dado o seguinte código HTML, engade a configuración de estilos CSS para que
// inicialmente o span estea oculto. Ao pulsar a ligazón debe facerse visible o contido
// do span e desaparecer a ligazón.
let elementoOculto = document.getElementById('adicional');
let hide = (elementoOculto.style.display = 'none');
document.addEventListener('DOMContentLoaded', () => hide);

let link = document.getElementById('ligazon');

link.addEventListener('click', () => (elementoOculto.style.display = 'inline'));
link.addEventListener('click', () => (link.style.display = 'none'));
