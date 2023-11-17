// 5. Descarga o código HTML e CSS e fai que ao pulsar sobre unha imaxe en miniatura
// se cargue na imaxe principal a versión grande da imaxe pulsada. Actualiza tamén o
// atributo “alt” da imaxe principal co título da nova imaxe cargada.
// Utiliza un só manexador de eventos.
let ulPhotos = document.getElementById('thumbs');
let largeImage = document.getElementById('largeImg');

ulPhotos.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    event.preventDefault();
    largeImage.src = event.target.parentElement.href;
    largeImage.alt = event.target.parentElement.title;
  }
});
