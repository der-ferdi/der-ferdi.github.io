
const map = L.map("map", {
center: [-43.733333, 170.095556],
zoom: 13,
layers: [
    L.titleLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
]
});

let mrk = L.marker([-43.733333, 170.095556]) .addTo(map);
mrk.bindPopup("Tongariro National Park") .openPopup();



console.log(document.querySelector("#map"));


