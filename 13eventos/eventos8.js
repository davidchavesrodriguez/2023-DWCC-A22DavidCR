// Crea unha páxina de texto que conteña un formulario con varios campos: input,
// select, radiobutton, checkbox, área de texto. Escribe o código JavaScript necesario
// para mostrar por consola todos os valores dos campos do formulario cando este se
// envíe.

// Obtener el formulario por su ID
const formulario = document.getElementById('miFormulario');

// Agregar un evento al formulario para capturar el envío
formulario.addEventListener('submit', function (event) {
  // Prevenir el comportamiento por defecto del formulario (evitar que se recargue la página)
  event.preventDefault();

  // Obtener todos los elementos del formulario
  const elementos = formulario.elements;

  // Iterar sobre los elementos y mostrar sus valores por consola
  for (let i = 0; i < elementos.length; i++) {
    const elemento = elementos[i];

    // Verificar si el elemento tiene un valor
    if (elemento.value.trim() !== '') {
      console.log(`${elemento.name}: ${elemento.value}`);
    }
  }
});
