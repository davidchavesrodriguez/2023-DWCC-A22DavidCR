let map;
let marker;
if ('geolocation' in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(
    function (posicion) {
      console.log(posicion);
      // desestruturación de obxectos
      const { latitude, longitude } = posicion.coords;
      console.log(`latitude: ${latitude}, lonxitude: ${longitude}`);
      //Añadimos mapa
      const map = L.map('map', { center: [latitude, longitude], zoom: 17 });
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      //Función añadir marcador en click
      function onMapClick(e) {
        let latLng = e.latlng;
        //Borrar marcador existente
        if (marker) {
          map.removeLayer(marker);
        }
        marker = L.marker([latLng.lat, latLng.lng]);
        marker.addTo(map);
        marker.bindPopup(
          `Estás pulsando en ${latLng.lat.toFixed(6)}, ${latLng.lng.toFixed(6)}`
        );
      }
      map.on('click', onMapClick);
    },
    function (error) {
      console.log(`ERROR(${error.code}): ${error.message}`);
    }
  );
} else {
  console.log(`Geolocation pa casa`);
}
