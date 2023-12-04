// Crea unha páxina que teña un formulario con unha caixa de texto. Fai que cando a
// caixa de texto teña o foco, o borde da mesma sexa verde e cando perda o foco volva
// ao estilo por defecto.
// Ademais, cando a caixa de texto perda o foco e estea baleira, debe escribirse por
// consola unha mensaxe informando da situación.
let texto = document.getElementById('textBox');

texto.addEventListener('focus', function () {
  texto.style.border = '3px solid green';
});

texto.addEventListener('blur', function () {
  if (texto.value.trim() === '') {
    console.log('La caja de texto está vacía.');
  }
  texto.style.border = '2px solid black';
});
