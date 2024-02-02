// index.js
import "./css/style.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "@geoapify/leaflet-address-search-plugin/dist/L.Control.GeoapifyAddressSearch.min.css";
import '@geoapify/leaflet-address-search-plugin';

import markerIcon from "../node_modules/leaflet/dist/images/marker-icon.png";
L.Marker.prototype.setIcon(L.icon({ iconUrl: markerIcon }));

const map = L.map("map", {
  center: L.latLng(42.64585380457401, -8.885536531719335),
  zoom: 14,
  zoomControl: false
});

L.control.zoom({
  position: 'bottomright'
}).addTo(map);


const key = "yQjDN2uAGBZeUGhEWI26";

/*Definimos tiles (e tiles de probas)*/

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
// 	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
// }).addTo(map);

// L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
// 	attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
// 	bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
// 	minZoom: 1,
// 	maxZoom: 8,
// 	format: 'jpg',
// 	time: '',
// 	tilematrixset: 'GoogleMapsCompatible_Level'
// }).addTo(map);

// L.tileLayer(mapURL, {
//   attribution: 'Powered by Geoapify | © OpenMapTiles © OpenStreetMap contributors',
//   apiKey: myAPIKey,
//   mapStyle: "osm-bright-smooth", // More map styles on https://apidocs.geoapify.com/docs/maps/map-tiles/
//   maxZoom: 20
// }).addTo(map);


//Marcador inicial
let markerAgora = L.marker([42.64585380457401, -8.885536531719335]).addTo(map);


//Geocoding
var myAPIKey = "99925a27499641468c5be50557317a82"; 

const addressSearchControl = L.control.addressSearch(myAPIKey, {
  position: 'topleft',
  resultCallback: (selectedAddress) => {
    console.log(selectedAddress);
  },
  suggestionsCallback: (suggestions) => {
    console.log(suggestions);
  }
});
map.addControl(addressSearchControl);




console.log("Hula");
