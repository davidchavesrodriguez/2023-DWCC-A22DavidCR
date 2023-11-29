let contador = 1;
let casillas = document.getElementsByTagName('td');

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
  });
});

// Final de xogo
Array.from(casillas).forEach((casilla) => {
  if (casilla[0].style.backgroundImage.includes('url("./images/patito.png")')) {
    document.body.style.backgroundImage = 'url("./images/another-image.png")';
  }
});
