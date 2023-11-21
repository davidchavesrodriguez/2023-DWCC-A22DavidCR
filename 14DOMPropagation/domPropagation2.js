// 2. Descarga o código HTML e realiza as seguintes operacións con JavaScript:
// a. Utilizando un só manexador de eventos fai que ao pulsar sobre un nodo da
// árbore se mostren/oculten os nodos fillos.
document.getElementById('tree').addEventListener('click', function (event) {
  if (event.target.tagName === 'LI' && event.target.firstElementChild) {
    event.target.firstElementChild.classList.toggle('hidden');
  }
});

// b. ¿Como farías para que só funcionase ao pulsar no título e non en calquera
// espacio baleiro da liña?. Impleméntao en JavaScript.
let liTree = document.querySelectorAll('li');
liTree.forEach((li) => {
  li.classList.add('fitContent');
});
