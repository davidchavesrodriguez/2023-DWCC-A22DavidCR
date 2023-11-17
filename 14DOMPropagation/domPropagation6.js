// 6. Descarga o código HTML e programa a funcionalidade para que, con un único
// manexador de eventos, cando se seleccione un elemento da lista se lle engada a
// clase CSS “selected” e se lle quite esta clase a todos os demais elementos da lista.
let list = document.getElementById('ul');

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    for (let listItem of list.children) {
      listItem.classList.remove('selected');
    }

    event.target.classList.add('selected');
  }
});
