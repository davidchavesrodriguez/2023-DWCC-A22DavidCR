let divElegido = document.querySelector('div');

divElegido.addEventListener('click', () => {
  let textArea = document.createElement('textarea');
  let texto = divElegido.innerText;
  textArea.value = texto;
  textArea.style.width = divElegido.offsetWidth + 'px';
  textArea.style.height = divElegido.offsetHeight + 'px';

  textArea.addEventListener('blur', () => {
    let texto = textArea.value;
    divElegido.innerText = texto;
    divElegido.style.width = textArea.offsetWidth + 'px';
    divElegido.style.height = textArea.offsetHeight + 'px';

    textArea.parentElement.replaceChild(divElegido, textArea);
  });

  textArea.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      textArea.blur();
    }
  });

  divElegido.parentElement.replaceChild(textArea, divElegido);

  textArea.focus();
});
