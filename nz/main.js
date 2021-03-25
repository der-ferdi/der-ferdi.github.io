
let stop = {
    nr: 22,
    name: "Tongariro National Park", 
    lat: -43.733333,
    lng: 170.095556,
    user: "der-ferdi",
    wikipedia: "https://en.wikipedia.org/wiki/Mount_Cook_Village"
};




const map = L.map("map", {
    center: [ stop.lat, stop. lng],
    zoom: 13,
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ]
  });
  
  let mrk = L.marker([-43.733333, 170.095556]).addTo(map);
  mrk.bindPopup('Tongariro National Park');
  
  console.log(document.querySelector("#map"));