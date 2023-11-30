let tablaEditable = document.getElementById('tablaEditable');
let camposEditables = document.querySelectorAll('td');

camposEditables.forEach((campo) => {
  campo.addEventListener('click', () => {
    let textArea = document.createElement('textarea');
    let texto = campo.innerText;
    textArea.value = texto;
    textArea.style.width = campo.offsetWidth + 'px';
    textArea.style.height = campo.offsetHeight + 'px';

    textArea.addEventListener('change', () => {});
    campo.parentElement.replaceChild(textArea, campo);
  });
});
