// Implementa unha función escribirNumeros(desde, ata)
// que xere un número cada
// segundo, comezando en “desde” e rematando en “ata”.
// Fai dúas variantes da
// función: unha usando setInterval e outra usando
// setTimeout.

function escribirNumeros(desde, hasta) {
  setInterval(() => {
    if (desde <= hasta) console.log(`Interval: ${desde++}`);
  }, 1000);
}

escribirNumeros(1, 5);

function escribirNumerosDous(desde, hasta) {
  function imprimirNumero() {
    if (desde <= hasta) {
      console.log(`Timeout: ${desde++}`);
      setTimeout(imprimirNumero, 1000);
    }
  }

  imprimirNumero();
}

escribirNumerosDous(1, 5);



