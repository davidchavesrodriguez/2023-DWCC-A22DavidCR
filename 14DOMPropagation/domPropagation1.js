// 1. Descarga o código HTML e CSS e engade o JavaScript necesario para que ao
// pulsar no botón [X] se elimine a mensaxe correspondente.
// Debes engadir un único listener e só se deben eliminar as mensaxes ao pulsar [X].
let divMayor = document.getElementById('container');

divMayor.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-button')) {
    let removedDiv = event.target.closest('.pane');
    removedDiv.remove();
  }
});
