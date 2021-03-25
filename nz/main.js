
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
  
  console.log(ROUTE);
  for (let entry of ROUTE) {
      console.log(entry);
  
      let mrk = L.marker([entry.lat, entry.lng]).addTo(map);
      mrk.bindPopup(`
        <h4>Stop ${entry.nr}: ${entry.name}</h4>
        <p><i class="fas fa-external-link-alt mr-3"></i><a href=${entry.wikipedia}">Read about stop in Wikipedia</a></p>
        `).openPopup();
        
  
    }

  
  console.log(document.querySelector("#map"));