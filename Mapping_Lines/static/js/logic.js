// Add console.log to check to see if our code is working.
console.log('working');

// Create the map object with a center and zoom level.
// For LA: 34.0522, -118.2437
let map = L.map('mapid').setView([36.1733, -120.1794], 7);
// Coordinates for each point to be used in the polyline.
let line = [
  [37.615223, -122.389977], // SFO
  [30.1974292, -97.6663058], // AUS
  [43.6775, -79.6308333333], // YYZ
  [40.641766, -73.780968] // JFK
];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "#0000ff",
  weight: 4,
  opacity: 0.5,
  dashArray: '4'
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 6,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
