let contador = 1;
let casillas = document.querySelectorAll('td');

// Patito/Cerdito
Array.from(casillas).forEach((casilla) => {
  casilla.addEventListener('click', (event) => {
    if (event.target.style.backgroundImage !== '') {
      return false;
    }
    if (contador % 2 === 0) {
      event.target.style.backgroundImage = 'url("./images/patito.png")';
      contador++;
    } else {
      event.target.style.backgroundImage = 'url("./images/cerdito.png")';
      contador++;
    }

    // Final de xogo
    if (contador === 10) {
      document.querySelector('body').style.backgroundImage = 'url("")';
    }
  });
});
