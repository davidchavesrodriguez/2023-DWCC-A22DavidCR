// index.js
import "./css/style.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

//Esto non furrula
import markerIcon from "../dist/2b3e1faf89f94a483539.png";


const map = L.map("map", {
  center: L.latLng(42.64585380457401, -8.885536531719335),
  zoom: 14,
});

const key = "yQjDN2uAGBZeUGhEWI26";

/*Definimos tiles*/
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

//Marcador inicial
let markerAgora = L.marker([42.64585380457401, -8.885536531719335]).addTo(map);


console.log("Hula");
