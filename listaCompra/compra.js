let form = document.getElementById('form');
let textField = document.getElementById('text');
let boton = document.getElementById('boton');
let div = document.getElementById('articulos');
let botonBorraTodo = document.getElementById('borraTodo');

// Non facer submit ao pulsar enter
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addItem();
});

// Añadir objetos á lista
function addItem() {
  let newDiv = document.createElement('div');
  let valor = textField.value;
  let botonX = document.createElement('button');
  botonX.textContent = '[X]';

  newDiv.textContent = valor;
  newDiv.appendChild(botonX);
  div.appendChild(newDiv);

  // Mostrar Borrar Todo
  if (div.firstElementChild) {
    botonBorraTodo.classList.remove('oculto');
  }
}

boton.addEventListener('click', addItem);

// Borrar todo
botonBorraTodo.addEventListener('click', (event) => {
  while (div.firstElementChild) {
    div.firstElementChild.remove();
  }
  // Eliminar botonBorrarTodo
  botonBorraTodo.classList.add('oculto');
});

// Eliminar elemento lista
div.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    if (window.confirm('Queres eliminar esto?')) {
      // Acceder ao pai
      let parentDiv = event.target.parentNode;

      // Eliminar o fillo
      div.removeChild(parentDiv);

      // Eliminar botonBorrarTodo se é necesario
      if (!div.firstElementChild) {
        botonBorraTodo.classList.add('oculto');
      }
    }
  }
});
