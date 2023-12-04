/*Definimos mapa*/
const map = L.map('map', {
  center: [43.36821761243483, -8.417104901448159],
  zoom: 17,
});

/*Definimos tiles*/
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

/*Añadimos marcadores*/
let markerRiazor = L.marker([43.36821761243483, -8.417104901448159]).addTo(map);
let markerBealo = L.marker([42.699713674318915, -8.852418574596593]).addTo(map);
let markerBalaidos = L.marker([42.21195980355173, -8.739750731737859]).addTo(
  map
);

/*Añadimos marcadores circulares (comentoos que son feos)*/
// let circleMarkerRiazor = L.circleMarker(
//   [43.36821761243483, -8.417104901448159],
//   {
//     radius: 50,
//     color: 'black',
//     fillColor: 'red',
//   }
// ).addTo(map);

// let circleMarkerBalaidos = L.circleMarker(
//   [42.21195980355173, -8.739750731737859],
//   {
//     radius: 50,
//     color: 'black',
//     fillColor: 'red',
//   }
// ).addTo(map);

/*Añadimos círculos*/
let circleRiazor = L.circle([43.36821761243483, -8.417104901448159], {
  color: 'white',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 65,
}).addTo(map);

let circleBalaidos = L.circle([42.21195980355173, -8.739750731737859], {
  color: 'white',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 65,
}).addTo(map);

/*Añadimos liña*/
let lineRiazorBalaidos = L.polyline(
  [
    [43.36821761243483, -8.417104901448159],
    [42.21195980355173, -8.739750731737859],
  ],
  { color: 'red', weight: 5 }
).addTo(map);

/*Añadimos polígono*/
let polRiazorBealoBalaidos = L.polygon(
  [
    [43.36821761243483, -8.417104901448159],
    [42.699713674318915, -8.852418574596593],
    [42.21195980355173, -8.739750731737859],
  ],
  { color: 'red', fillColor: 'yellow', weight: 4 }
).addTo(map);

/*Bindeamos popups*/
markerRiazor.bindPopup('<h3>Estadio do primeiro equipo da Galiza</h3>');
markerBalaidos.bindPopup('<h3>Cerca de Vigo</h3>');
markerBealo.bindPopup('<h3>Estadio dos Lorchos</h3>');

/*Añadimos leyenda*/
let legend = L.control({ position: 'bottomleft' });

legend.onAdd = function () {
  var div = L.DomUtil.create('div', 'legend');
  div.innerHTML =
    '<p><b>Principais estadios de Galiza</b></p><hr>' +
    'Deṕor, Lorchos e Vigo<br>';
  return div;
};

legend.addTo(map);

/*Eventos*/
let popup = L.popup();
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent(
      '<b>lonxitude:</b> ' +
        e.latlng.lng.toFixed(3) +
        '<br>' +
        '<b>latitude:</b> ' +
        e.latlng.lat.toFixed(3)
    )
    .openOn(map);
}
map.on('click', onMapClick);
