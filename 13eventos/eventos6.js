// Dado o seguinte código HTML:

// Engade os seguintes eventos:
// Cando o cursor do rato entre e saia do botón, mostra unha mensaxe por
// consola indicándoo.
let boton = document.getElementById('ocultar');
boton.addEventListener('mouseenter', () => {
  console.log('Eeeentras no botón');
});
boton.addEventListener('mouseleave', () => {
  console.log('Deixas o botón');
});

// Ao pulsar o botón debe desaparecer o div con id=texto.
let divTexto = document.getElementById('texto');

boton.addEventListener('click', () => {
  divTexto.classList.toggle('oculto');
});

// Cando se escriba algo na caixa de texto, debe mostrarse información da
// tecla pulsada no div e tamén o código da tecla pulsada. Ademais, se o div
// estaba oculto, debe mostrarse.
let caixaTexto = document.getElementById('textoExercicio1');

caixaTexto.addEventListener('keydown', (evento) => {
  if (divTexto.classList.contains('oculto')) {
    divTexto.classList.toggle('oculto');
  }
  divTexto.append(` Tecla pulsada: ${evento.key}, Código: ${evento.code}. `);
});
