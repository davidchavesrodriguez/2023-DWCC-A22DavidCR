// index.js
import "./css/style.css";
import L, { imageOverlay } from "leaflet";
import "leaflet/dist/leaflet.css";
import "@geoapify/leaflet-address-search-plugin/dist/L.Control.GeoapifyAddressSearch.min.css";
import "@geoapify/leaflet-address-search-plugin";

import markerIcon from "../node_modules/leaflet/dist/images/marker-icon.png";
L.Marker.prototype.setIcon(L.icon({ iconUrl: markerIcon }));

const map = L.map("map", {
  center: L.latLng(42.64585380457401, -8.885536531719335),
  zoom: 14,
  zoomControl: false,
});

L.control
  .zoom({
    position: "bottomright",
  })
  .addTo(map);

const key = "yQjDN2uAGBZeUGhEWI26";

/*Definimos tiles*/

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

//Marcador inicial
L.marker([42.64585380457401, -8.885536531719335]).addTo(map);

let coordenadas;
// Añadir marcador con nome
map.on("click", function (event) {
  let inputMarker = document.getElementById("inputMarker");
  let latitud = event.latlng.lat;
  let longitud = event.latlng.lng;
  coordenadas = [latitud, longitud];

  let imageOverlay;
  if (imageOverlay.value) {
    imageOverlay = L.imageOverlay(
      "",
      [
        [event.latlng.lat, event.latlng.lng], // Esquina superior izquierda
        [event.latlng.lat + 0.001, event.latlng.lng + 0.001], // Esquina inferior derecha (ajusta según tu necesidad)
      ],
      {
        opacity: 0.8,
        errorOverlayUrl: "",
        alt: "Aquí?",
        interactive: true,
      }
    ).addTo(map);
  }

  inputMarker.classList.remove("hidden");
  inputMarker.focus();
});

// ao pulsar enter
inputMarker.addEventListener("keypress", (eventKey) => {
  if (eventKey.key === "Enter") {
    let newMarker = L.marker([coordenadas[0], coordenadas[1]]);
    inputMarker.blur();
    inputMarker.classList.add("hidden");

    newMarker.bindPopup(inputMarker.value);
    newMarker.addTo(map);
  }
});
