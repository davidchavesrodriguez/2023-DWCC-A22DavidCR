// 2. Crea unha páxina web que teña unha caixa de texto un botón e unha lista.
// Fai que ao pulsar o botón se engada o texto da caixa de texto como novo
// elemento da lista.
document.getElementById('buttonEx2').addEventListener('click', () => {
  let newLi = document.createElement('li');
  let inputValue = document.getElementById('inputEx2').value;
  newLi.textContent = inputValue;
  document.getElementById('ulEx2').appendChild(newLi);
  newLi.style.listStyleType = 'none';
});
