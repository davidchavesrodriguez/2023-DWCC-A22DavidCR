mostrarHora();
setInterval(mostrarHora, 1000);
function mostrarHora() {
  let now = new Date();
  let time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  let divHora = document.getElementById('hora');
  divHora.innerText = time;
}

let divHora = document.getElementById('hora');
divHora.addEventListener('click', () => {
  window.open('https://time.is/es/Spain');
});
