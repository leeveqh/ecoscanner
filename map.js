const labelsBox = document.getElementById("labels");
const pointsBox = document.getElementById("points");
const search = document.getElementById("search");

let fav = JSON.parse(localStorage.getItem("fav")) || [];
let filter = "all";
let markers = [];
let totalEco = 0;

const map = L.map("map").setView([53.283, 69.383], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);


// ===== РЕНДЕР =====
function renderLabels(list) {

  labelsBox.innerHTML = "";

  const grouped = {};

  list.forEach(item => {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  });

  Object.keys(grouped).forEach(category => {

    const title = document.createElement("h3");
    title.textContent = category;
    title.style.padding = "10px 15px";
    labelsBox.appendChild(title);

    grouped[category].forEach(l => {

      const div = document.createElement("div");
      div.className = `card ${l.safe ? "safe" : "danger"}`;

      div.innerHTML = `
        <div class="icon">${l.icon}</div>
        <strong>${l.name}</strong>
        <p>${l.desc}</p>
        <p>Экобалл: ${"⭐".repeat(l.ecoScore)}</p>
        <button class="fav-btn">
          ${fav.includes(l.id) ? "★" : "☆"}
        </button>
      `;

      div.onclick = () => {
        totalEco += l.ecoScore;
        showPoints(l.id);
        showEcoImpact();
      };

      const favBtn = div.querySelector(".fav-btn");
      favBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFav(l.id);
      };

      labelsBox.appendChild(div);
    });

  });
}


// ===== ЭКО-РЕЙТИНГ =====
function showEcoImpact() {
  let ecoBox = document.getElementById("ecoImpact");

  if (!ecoBox) {
    ecoBox = document.createElement("div");
    ecoBox.id = "ecoImpact";
    ecoBox.style.background = "#2e7d32";
    ecoBox.style.color = "white";
    ecoBox.style.padding = "10px";
    ecoBox.style.textAlign = "center";
    ecoBox.style.fontWeight = "bold";
    document.body.insertBefore(ecoBox, document.body.firstChild);
  }

  ecoBox.textContent = `🌱 Ваш вклад в экологию: ${totalEco} баллов`;
}


// ===== ПУНКТЫ =====
function showPoints(type) {
  pointsBox.innerHTML = "";
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  const filtered = recyclePoints.filter(p => p.types.includes(type));

  if (filtered.length === 0) {
    pointsBox.innerHTML = "<p>Нет пунктов приёма.</p>";
    return;
  }

  filtered.forEach((p, index) => {

    const div = document.createElement("div");
    div.className = "point";

    div.innerHTML = `
      <strong>${p.name}</strong><br>
      ${p.address}<br>
      <button onclick="route(${p.lat},${p.lng})">Маршрут</button>
    `;

    pointsBox.appendChild(div);

    const marker = L.marker([p.lat, p.lng]).addTo(map).bindPopup(p.name);
    markers.push(marker);

    if (index === 0) map.setView([p.lat, p.lng], 15);
  });
}


// ===== ФИЛЬТР =====
function setFilter(f) {
  filter = f;
  apply();
}


// ===== ИЗБРАННОЕ =====
function toggleFav(id) {
  fav = fav.includes(id) ? fav.filter(x => x !== id) : [...fav, id];
  localStorage.setItem("fav", JSON.stringify(fav));
  apply();
}


// ===== МАРШРУТ =====
function route(lat, lng) {
  window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`);
}


// ===== ПРИМЕНЕНИЕ =====
function apply() {

  let list = labelsData;

  if (filter === "safe") list = list.filter(l => l.safe);
  if (filter === "danger") list = list.filter(l => !l.safe);

  const q = search.value.toLowerCase();
  if (q) list = list.filter(l => l.name.toLowerCase().includes(q));

  renderLabels(list);
}


search.oninput = () => apply();

apply();

