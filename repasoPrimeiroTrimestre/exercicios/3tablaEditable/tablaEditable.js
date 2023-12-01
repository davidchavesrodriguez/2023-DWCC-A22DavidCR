let tablaEditable = document.getElementById('tablaEditable');
let camposEditables = document.querySelectorAll('td');

camposEditables.forEach((campo) => {
  campo.addEventListener('click', () => {
    let comprobarTextArea = document.querySelector('textarea');
    if (!comprobarTextArea) {
      let textArea = document.createElement('textarea');
      let texto = campo.innerText;
      campo.innerText = '';
      textArea.value = texto;
      textArea.style.width = campo.offsetWidth + 'px';
      textArea.style.height = campo.offsetHeight + 'px';

      textArea.addEventListener('blur', () => {
        texto = textArea.value;
        campo.innerText = texto;
        textArea.remove();
      });
      textArea.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          textArea.blur();
        }
      });
      campo.appendChild(textArea);
    }
  });
});
