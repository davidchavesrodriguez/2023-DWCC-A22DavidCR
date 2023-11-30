let form = document.getElementById('form');
let textField = document.getElementById('text');
let boton = document.getElementById('boton');
let div = document.getElementById('articulos');
let botonBorraTodo = document.getElementById('borraTodo');
let filter = document.getElementById('filter');

// Load items from localStorage on page load
window.addEventListener('load', () => {
  loadItemsFromStorage();
});

// Non facer submit ao pulsar enter
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addItem();
});

// Añadir objetos á lista
function addItem() {
  let newDiv = document.createElement('div');
  let valor = textField.value;
  let parrafo = document.createElement('p');
  let botonX = document.createElement('button');
  botonX.textContent = '[X]';

  parrafo.textContent = valor;
  newDiv.appendChild(parrafo);
  newDiv.appendChild(botonX);
  div.appendChild(newDiv);

  // Save items to localStorage
  saveItemsToStorage();

  // Mostrar Borrar Todo
  if (div.firstElementChild) {
    botonBorraTodo.classList.remove('oculto');
  }
}

boton.addEventListener('click', addItem);

// Borrar todo
botonBorraTodo.addEventListener('click', () => {
  while (div.firstElementChild) {
    div.firstElementChild.remove();
  }

  // Save items to localStorage after removing
  saveItemsToStorage();

  // Eliminar botonBorrarTodo
  botonBorraTodo.classList.add('oculto');
});

// Eliminar elemento lista
div.addEventListener('click', (event) => {
  if (
    event.target.tagName === 'BUTTON' &&
    event.target.textContent.includes('[X]')
  ) {
    if (window.confirm('Queres eliminar esto?')) {
      // Acceder ao pai
      let parentDiv = event.target.parentNode;

      // Eliminar o fillo
      div.removeChild(parentDiv);

      // Save items to localStorage after removing
      saveItemsToStorage();

      // Eliminar botonBorrarTodo se é necesario
      if (!div.firstElementChild) {
        botonBorraTodo.classList.add('oculto');
      }
    }
  }
});

// Actualizar elemento lista
div.addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON') {
    if (!event.target.querySelector('.botonModificar')) {
      let botonModificar = document.createElement('button');
      botonModificar.textContent = 'Modificar';
      botonModificar.classList.add('botonModificar');
      event.target.appendChild(botonModificar);

      // Save items to localStorage after modifying
      saveItemsToStorage();
    }
  }
});

// Modificar elemento lista
div.addEventListener('click', (event) => {
  if (
    event.target.tagName === 'BUTTON' &&
    event.target.textContent.includes('Modificar')
  ) {
    if (window.confirm('Queres cambiar o artículo?')) {
      let parentDiv = event.target.parentNode;
      let parrafo = parentDiv.querySelector('p');
      let newText = prompt('Que queres poñer?');
      if (newText !== null) {
        parrafo.textContent = newText;

        // Save items to localStorage after modifying
        saveItemsToStorage();
      }
    }
  }
});

// Save items to localStorage
function saveItemsToStorage() {
  let items = [];
  Array.from(div.children).forEach((item) => {
    let itemText = item.querySelector('p').textContent;
    items.push(itemText);
  });
  localStorage.setItem('shoppingList', JSON.stringify(items));
}

// Load items from localStorage
function loadItemsFromStorage() {
  let storedItems = localStorage.getItem('shoppingList');
  if (storedItems) {
    let items = JSON.parse(storedItems);
    items.forEach((itemText) => {
      let newDiv = document.createElement('div');
      let parrafo = document.createElement('p');
      let botonX = document.createElement('button');
      botonX.textContent = '[X]';

      parrafo.textContent = itemText;
      newDiv.appendChild(parrafo);
      newDiv.appendChild(botonX);
      div.appendChild(newDiv);
    });

    // Show/hide "Borrar Todo" button based on the items
    if (div.firstElementChild) {
      botonBorraTodo.classList.remove('oculto');
    } else {
      botonBorraTodo.classList.add('oculto');
    }
  }
}
