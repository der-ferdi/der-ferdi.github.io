console.log("Hello World!");
console.log(L);

const map = L.map("map", {
center: [-43.733333, 170.095556],
zoom: 13,
layers: [
    L.titleLayer("https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png")
]
});
//-43.733333, 170.095556
console.log(document.querySelector("#map"));


