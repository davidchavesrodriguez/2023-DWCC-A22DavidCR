// Mapa ubicado no San Clemente
const map = L.map('map', {
  center: [42.87875526876793, -8.547238904474879],
  zoom: 17,
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Mostrar formulario lateral
let aside = document.querySelector('aside');
function toggleAsideOnClick(e) {
  aside.classList.remove('oculto');
  let latLong = e.latlng; //Gardamos as coordenadas de pulsar
  let textField = document.getElementById('textField');
  textField.focus(); //Focuseamos textfield
  // Gardar descripción
  textField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const valorTextfield = textField.value; //ARREGLAR (Cambia todos os puntos)
      let marker = L.marker([latLong.lat, latLong.lng]);
      marker.bindPopup(valorTextfield);
      marker.addTo(map);
    }
  });
}

map.on('click', toggleAsideOnClick);
