let contador = parseInt(Math.random() * 10);
let numeroInicial = contador;
let casillas = document.querySelectorAll('td');
let informacion = document.getElementById('informacion');
let reinicio = document.getElementById('reinicio');

mostrarXogador();
// Patito/Cerdito
Array.from(casillas).forEach((casilla) => {
  casilla.addEventListener('click', (event) => {
    if (event.target.style.backgroundImage !== '') {
      return false;
    }
    if (contador % 2 === 0) {
      event.target.style.backgroundImage = 'url("./images/patito.png")';
      contador++;
      mostrarXogador();
    } else {
      event.target.style.backgroundImage = 'url("./images/cerdito.png")';
      contador++;
      mostrarXogador();
    }

    // Final de xogo
    if (contador === numeroInicial + 9) {
      document.querySelector('body').style.backgroundImage = 'url("")';
    }
  });
});

// Reiniciar xogo
reinicio.addEventListener('click', () => {
  Array.from(casillas).forEach((casilla) => {
    casilla.style.backgroundImage = '';
    contador = numeroInicial;
    mostrarXogador();
  });
});

function mostrarXogador() {
  if (contador % 2 === 0) {
    informacion.innerText = 'Turno de: Patito';
  } else {
    informacion.innerText = 'Turno de: Cerdito';
  }
}
