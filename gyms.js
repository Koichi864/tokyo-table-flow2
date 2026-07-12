const gyms = [
  ["ASICS RUN TOKYO MARUNOUCHI", "丸の内・大手町", "ランステ", "皇居ラン・シューズ相談", 5, 57, 3, "#7fa98b"],
  ["MARUNOUCHI Bike & Run", "丸の内・大手町", "ランステ", "ランステ・自転車通勤", 4, 54, 3, "#7c9f92"],
  ["Raffine Running Style Neo", "日比谷・有楽町", "ランステ", "皇居ラン・シャワー", 4, 59, 4, "#8aa77d"],
  ["HIBIYA RIDE", "日比谷・有楽町", "ランステ", "ランステ・ロッカー", 5, 56, 4, "#83a08a"],
  ["10 over 9 RUN CUBE", "九段下・竹橋", "ランステ", "皇居ラン・竹橋", 4, 62, 4, "#8b9e77"],
  ["JOGLIS", "半蔵門・麹町", "ランステ", "皇居ラン・半蔵門", 4, 60, 4, "#86a37f"],
  ["Re.Ra.Ku PRO ランニング 竹橋皇居前店", "九段下・竹橋", "ランステ", "ランステ・ストレッチ", 4, 58, 4, "#7d9f85"],
  ["adidas RUNBASE TOKYO", "永田町・赤坂", "ランステ", "ランステ・イベント", 6, 55, 3, "#879b82"],
  ["TIPNESS MARUNOUCHI STYLE", "丸の内・大手町", "ジム", "仕事帰りジム・スタジオ", 5, 64, 4, "#9b7b85"],
  ["SPA OTEMACHI FITNESS CLUB", "丸の内・大手町", "ジム", "温浴・ジム", 7, 52, 5, "#7c8fa2"],
  ["Chiyoda Sports Center", "九段下・竹橋", "公共", "公共ジム・プール", 8, 50, 4, "#7698a6"],
  ["Gold's Gym Ginza Tokyo", "日比谷・有楽町", "ジム", "本格トレーニング", 9, 66, 4, "#b1846d"],
  ["ANYTIME FITNESS Kojimachi", "半蔵門・麹町", "24時間", "24時間ジム", 8, 49, 5, "#6d95a6"],
  ["ANYTIME FITNESS Akasaka", "永田町・赤坂", "24時間", "24時間ジム", 10, 51, 5, "#7092a3"],
  ["ANYTIME FITNESS Nihonbashi Hamacho", "銀座・日本橋", "24時間", "24時間ジム", 14, 47, 5, "#7196a1"],
  ["RIZAP Ginza", "日比谷・有楽町", "パーソナル", "パーソナルジム", 10, 43, 5, "#9a788c"],
  ["24/7Workout Yurakucho / Ginza", "日比谷・有楽町", "パーソナル", "パーソナルジム", 9, 42, 5, "#9b7f90"],
  ["BEYOND Ginza", "日比谷・有楽町", "パーソナル", "パーソナルジム", 10, 44, 5, "#947b91"],
  ["Dr. Training Tokyo Station", "丸の内・大手町", "パーソナル", "パーソナル・姿勢改善", 6, 45, 5, "#8a8297"],
  ["B CONCEPT Ginza", "日比谷・有楽町", "パーソナル", "女性向けパーソナル", 11, 40, 5, "#b47b94"],
  ["UNDEUX SUPERBODY Ginza", "日比谷・有楽町", "パーソナル", "女性向けボディメイク", 11, 39, 5, "#b37894"],
  ["The Premier Club at Palace Hotel Tokyo", "丸の内・大手町", "ホテル", "ホテルフィットネス", 4, 35, 5, "#7d8b9f"],
  ["The Peninsula Tokyo Fitness Center", "日比谷・有楽町", "ホテル", "ホテルジム・プール", 6, 37, 5, "#7e8da0"],
  ["Imperial Hotel Tokyo Fitness Center", "日比谷・有楽町", "ホテル", "ホテルフィットネス", 6, 38, 5, "#7f889d"],
  ["Four Seasons Hotel Tokyo at Otemachi Fitness", "丸の内・大手町", "ホテル", "ホテルジム・スパ", 5, 36, 5, "#768ea1"],
  ["Aman Tokyo Fitness Centre", "丸の内・大手町", "ホテル", "ホテルジム・プール", 7, 34, 5, "#77899b"],
  ["The Okura Tokyo Fitness & Spa", "永田町・赤坂", "ホテル", "ホテルジム・スパ", 12, 36, 5, "#79879b"],
  ["The Capitol Hotel Tokyu Fitness Club", "永田町・赤坂", "ホテル", "ホテルフィットネス", 10, 35, 5, "#7d8797"],
].map(([name, area, type, purpose, walk, baseCrowd, ease, color]) => ({
  name,
  area,
  type,
  purpose,
  walk,
  baseCrowd,
  ease,
  color,
}));

const locale = document.documentElement.lang === "en" ? "en" : document.documentElement.lang === "es" ? "es" : "ja";
const text = {
  ja: {
    place: "件",
    pin: "ピン",
    min: "分",
    open: "使いやすい",
    normal: "普通",
    busy: "混雑",
    full: "かなり混雑",
    wait: "混雑目安",
    access: "皇居外苑から約",
    noMatch: "条件に合うジムがまだありません。エリアやタイプを広げて確認してください。",
    detail: "詳細",
    website: "公式/検索",
    map: "地図で見る",
    crowd: "混雑",
    wide: "広域",
    standard: "標準",
    detailed: "詳細",
    max: "最大",
    expand: "拡大",
    back: "戻る",
    types: { all: "全部", ランステ: "ランステ", ジム: "ジム", 公共: "公共", "24時間": "24時間", パーソナル: "パーソナル", ホテル: "ホテル" },
    areas: {
      all: "全て",
      "丸の内・大手町": "丸の内・大手町",
      "日比谷・有楽町": "日比谷・有楽町",
      "半蔵門・麹町": "半蔵門・麹町",
      "九段下・竹橋": "九段下・竹橋",
      "永田町・赤坂": "永田町・赤坂",
      "銀座・日本橋": "銀座・日本橋",
    },
  },
  en: {
    place: "spots",
    pin: "pins",
    min: "min",
    open: "Easy",
    normal: "Normal",
    busy: "Busy",
    full: "Very busy",
    wait: "Crowd",
    access: "About ",
    noMatch: "No gyms match these filters yet. Try a wider area or another type.",
    detail: "Details",
    website: "Website/Search",
    map: "Open map",
    crowd: "Crowd",
    wide: "Wide",
    standard: "Standard",
    detailed: "Detailed",
    max: "Max",
    expand: "Expand",
    back: "Back",
    types: { all: "All", ランステ: "Run station", ジム: "Gym", 公共: "Public", "24時間": "24h", パーソナル: "Personal", ホテル: "Hotel" },
    areas: {
      all: "All",
      "丸の内・大手町": "Marunouchi / Otemachi",
      "日比谷・有楽町": "Hibiya / Yurakucho",
      "半蔵門・麹町": "Hanzomon / Kojimachi",
      "九段下・竹橋": "Kudanshita / Takebashi",
      "永田町・赤坂": "Nagatacho / Akasaka",
      "銀座・日本橋": "Ginza / Nihonbashi",
    },
  },
  es: {
    place: "lugares",
    pin: "pines",
    min: "min",
    open: "Cómodo",
    normal: "Normal",
    busy: "Lleno",
    full: "Muy lleno",
    wait: "Ocupación",
    access: "Aprox. ",
    noMatch: "No hay gimnasios para estos filtros. Prueba otra zona o tipo.",
    detail: "Detalles",
    website: "Web/Búsqueda",
    map: "Ver mapa",
    crowd: "Ocupación",
    wide: "Amplio",
    standard: "Normal",
    detailed: "Detalle",
    max: "Máx.",
    expand: "Ampliar",
    back: "Volver",
    types: { all: "Todo", ランステ: "Run station", ジム: "Gimnasio", 公共: "Público", "24時間": "24h", パーソナル: "Personal", ホテル: "Hotel" },
    areas: {
      all: "Todo",
      "丸の内・大手町": "Marunouchi / Otemachi",
      "日比谷・有楽町": "Hibiya / Yurakucho",
      "半蔵門・麹町": "Hanzomon / Kojimachi",
      "九段下・竹橋": "Kudanshita / Takebashi",
      "永田町・赤坂": "Nagatacho / Akasaka",
      "銀座・日本橋": "Ginza / Nihonbashi",
    },
  },
};

const state = { area: "all", type: "all", search: "", onlyEasy: false, mapZoomOffset: 0, mapExpanded: false };
const elements = {
  clock: document.querySelector("#clock"),
  updatedAt: document.querySelector("#updatedAt"),
  openCount: document.querySelector("#openCount"),
  avgWait: document.querySelector("#avgWait"),
  resultCount: document.querySelector("#resultCount"),
  list: document.querySelector("#restaurantList"),
  template: document.querySelector("#restaurantTemplate"),
  searchInput: document.querySelector("#searchInput"),
  availableOnly: document.querySelector("#availableOnly"),
  refreshButton: document.querySelector("#refreshButton"),
  realMap: document.querySelector("#realMap"),
  mapTiles: document.querySelector("#mapTiles"),
  mapPoints: document.querySelector("#mapPoints"),
  mapCount: document.querySelector("#mapCount"),
  mapNavButton: document.querySelector("#mapNavButton"),
  mapZoomOut: document.querySelector("#mapZoomOut"),
  mapZoomIn: document.querySelector("#mapZoomIn"),
  mapZoomLabel: document.querySelector("#mapZoomLabel"),
  mapExpandButton: document.querySelector("#mapExpandButton"),
  guideSection: document.querySelector("#guideSection"),
  guideNavButton: document.querySelector("#guideNavButton"),
  detailModal: document.querySelector("#detailModal"),
  detailArea: document.querySelector("#detailArea"),
  detailTitle: document.querySelector("#detailTitle"),
  detailDescription: document.querySelector("#detailDescription"),
  detailWalk: document.querySelector("#detailWalk"),
  detailSeat: document.querySelector("#detailSeat"),
  detailCrowd: document.querySelector("#detailCrowd"),
  detailWebsite: document.querySelector("#detailWebsite"),
  detailMap: document.querySelector("#detailMap"),
};

function tr(key) {
  return text[locale][key] || text.ja[key] || key;
}

function unit(value, key) {
  return locale === "ja" ? `${value}${tr(key)}` : `${value} ${tr(key)}`;
}

function purposeLabel(gym) {
  if (locale === "ja") return gym.purpose;
  const labels = {
    en: {
      ランステ: "running, lockers and showers",
      ジム: "training and studio workouts",
      公共: "public gym and pool",
      "24時間": "24-hour training",
      パーソナル: "personal training",
      ホテル: "hotel fitness and spa",
    },
    es: {
      ランステ: "running, lockers y duchas",
      ジム: "entrenamiento y clases",
      公共: "gimnasio público y piscina",
      "24時間": "entrenamiento 24h",
      パーソナル: "entrenamiento personal",
      ホテル: "fitness y spa de hotel",
    },
  };
  return labels[locale][gym.type] || gym.purpose;
}

function getCrowd(gym, offset = 0) {
  const now = new Date();
  const hour = (now.getHours() + offset + 24) % 24;
  const weekday = now.getDay() >= 1 && now.getDay() <= 5;
  const beforeWork = hour >= 6 && hour <= 8 ? 15 : 0;
  const afterWork = weekday && hour >= 18 && hour <= 21 ? 24 : 0;
  const lunch = weekday && hour >= 12 && hour <= 13 ? 10 : 0;
  const runLift = gym.type === "ランステ" && (beforeWork || afterWork) ? 10 : 0;
  const hotelDrop = gym.type === "ホテル" ? -12 : 0;
  const rhythm = Math.round(Math.sin((hour + gym.walk + gym.name.length) * 1.4) * 7);
  return Math.max(8, Math.min(96, Math.round(gym.baseCrowd + beforeWork + afterWork + lunch + runLift + hotelDrop + rhythm - gym.ease * 2)));
}

function getStatus(crowd) {
  if (crowd < 38) return { label: tr("open"), color: "#27924f" };
  if (crowd < 58) return { label: tr("normal"), color: "#91bd47" };
  if (crowd < 76) return { label: tr("busy"), color: "#f5a623" };
  return { label: tr("full"), color: "#dc4d3f" };
}

function getAreaGeoBase(area) {
  const bases = {
    "丸の内・大手町": { lat: 35.6845, lon: 139.7643 },
    "日比谷・有楽町": { lat: 35.6745, lon: 139.7604 },
    "半蔵門・麹町": { lat: 35.685, lon: 139.7432 },
    "九段下・竹橋": { lat: 35.6915, lon: 139.7524 },
    "永田町・赤坂": { lat: 35.6762, lon: 139.7392 },
    "銀座・日本橋": { lat: 35.6735, lon: 139.7695 },
  };
  return bases[area] || bases["丸の内・大手町"];
}

function hashNumber(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  return hash;
}

function getGeo(gym) {
  const base = getAreaGeoBase(gym.area);
  const hash = hashNumber(`${gym.name}${gym.type}`);
  const angle = (hash % 360) * (Math.PI / 180);
  const radius = 0.0008 + ((hash >>> 4) % 130) / 100000;
  return { lat: base.lat + Math.sin(angle) * radius * 1.4, lon: base.lon + Math.cos(angle) * radius * 1.4 };
}

function matches(gym) {
  const crowd = getCrowd(gym);
  const query = state.search.trim().toLowerCase();
  const haystack = `${gym.name} ${gym.area} ${gym.type} ${gym.purpose}`.toLowerCase();
  return (
    (state.area === "all" || gym.area === state.area) &&
    (state.type === "all" || gym.type === state.type) &&
    (!state.onlyEasy || crowd < 58) &&
    haystack.includes(query)
  );
}

function lonToTileX(lon, zoom) {
  return ((lon + 180) / 360) * 2 ** zoom;
}

function latToTileY(lat, zoom) {
  const rad = (lat * Math.PI) / 180;
  return ((1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2) * 2 ** zoom;
}

function updateMapTiles(center, zoom) {
  const width = elements.realMap.clientWidth || 390;
  const height = elements.realMap.clientHeight || 330;
  const tileSize = 256;
  const centerX = lonToTileX(center.lon, zoom);
  const centerY = latToTileY(center.lat, zoom);
  const tilesX = Math.ceil(width / tileSize) + 2;
  const tilesY = Math.ceil(height / tileSize) + 2;
  const startX = Math.floor(centerX - tilesX / 2);
  const startY = Math.floor(centerY - tilesY / 2);
  const offsetX = width / 2 - (centerX - startX) * tileSize;
  const offsetY = height / 2 - (centerY - startY) * tileSize;
  elements.mapTiles.innerHTML = "";
  for (let xIndex = 0; xIndex <= tilesX; xIndex += 1) {
    for (let yIndex = 0; yIndex <= tilesY; yIndex += 1) {
      const img = document.createElement("img");
      img.src = `https://tile.openstreetmap.org/${zoom}/${startX + xIndex}/${startY + yIndex}.png`;
      img.alt = "";
      img.style.left = `${offsetX + xIndex * tileSize}px`;
      img.style.top = `${offsetY + yIndex * tileSize}px`;
      elements.mapTiles.append(img);
    }
  }
}

function getBounds(points) {
  return {
    minLat: Math.min(...points.map((point) => point.lat)),
    maxLat: Math.max(...points.map((point) => point.lat)),
    minLon: Math.min(...points.map((point) => point.lon)),
    maxLon: Math.max(...points.map((point) => point.lon)),
  };
}

function project(point, bounds) {
  const padding = 9;
  const lonRange = Math.max(0.002, bounds.maxLon - bounds.minLon);
  const latRange = Math.max(0.002, bounds.maxLat - bounds.minLat);
  return {
    x: padding + ((point.lon - bounds.minLon) / lonRange) * (100 - padding * 2),
    y: padding + ((bounds.maxLat - point.lat) / latRange) * (100 - padding * 2),
  };
}

function renderMap(visible) {
  elements.mapPoints.innerHTML = "";
  if (!visible.length) {
    elements.mapCount.textContent = unit(0, "place");
    updateMapTiles({ lat: 35.6812, lon: 139.7548 }, 14 + state.mapZoomOffset);
    updateMapLabel();
    return;
  }
  const points = visible.map((gym) => ({ ...gym, ...getGeo(gym) }));
  const bounds = getBounds(points);
  const center = { lat: (bounds.minLat + bounds.maxLat) / 2, lon: (bounds.minLon + bounds.maxLon) / 2 };
  const zoom = Math.max(13, Math.min(17, 14 + state.mapZoomOffset));
  updateMapTiles(center, zoom);
  const clusterDistance = state.mapZoomOffset >= 2 ? 3.2 : state.mapZoomOffset === 1 ? 5.2 : 7.2;
  const clusters = [];
  points.forEach((gym) => {
    const point = project(gym, bounds);
    const existing = clusters.find((cluster) => Math.hypot(cluster.x - point.x, cluster.y - point.y) < clusterDistance);
    if (existing) {
      existing.gyms.push(gym);
      existing.x = (existing.x * (existing.gyms.length - 1) + point.x) / existing.gyms.length;
      existing.y = (existing.y * (existing.gyms.length - 1) + point.y) / existing.gyms.length;
    } else {
      clusters.push({ x: point.x, y: point.y, gyms: [gym] });
    }
  });
  clusters.forEach((cluster) => {
    const crowd = Math.round(cluster.gyms.reduce((sum, gym) => sum + gym.crowd, 0) / cluster.gyms.length);
    const status = getStatus(crowd);
    const button = document.createElement("button");
    button.className = cluster.gyms.length > 1 && state.mapZoomOffset < 3 ? "crowd-pin crowd-cluster" : "crowd-pin";
    button.type = "button";
    button.style.left = `${cluster.x}%`;
    button.style.top = `${cluster.y}%`;
    button.style.background = status.color;
    button.innerHTML = `<span>${cluster.gyms.length > 1 && state.mapZoomOffset < 3 ? cluster.gyms.length : crowd}</span>`;
    button.addEventListener("click", () => {
      if (cluster.gyms.length > 1 && state.mapZoomOffset < 3) {
        state.mapZoomOffset += 1;
        render();
      } else {
        openDetail(cluster.gyms[0]);
      }
    });
    elements.mapPoints.append(button);
  });
  elements.mapCount.textContent = `${unit(visible.length, "place")} / ${unit(elements.mapPoints.children.length, "pin")}`;
  updateMapLabel();
}

function renderForecast(gym, container) {
  container.innerHTML = "";
  [0, 1, 2].forEach((offset) => {
    const time = new Date();
    time.setHours(time.getHours() + offset);
    const crowd = getCrowd(gym, offset);
    const status = getStatus(crowd);
    const item = document.createElement("div");
    item.style.setProperty("--status-color", status.color);
    item.innerHTML = `<div><span style="width:${crowd}%"></span></div><span>${String(time.getHours()).padStart(2, "0")}:00</span>`;
    container.append(item);
  });
}

function searchUrl(gym) {
  return `https://www.google.com/search?q=${encodeURIComponent(`${gym.name} 皇居 ジム 公式`)}`;
}

function mapUrl(gym) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${gym.name} ${gym.area}`)}`;
}

function accessLabel(gym) {
  const suffix = locale === "ja" ? "" : locale === "es" ? " desde el Palacio Imperial" : " from the Imperial Palace area";
  return `${tr("access")}${gym.walk}${locale === "ja" ? tr("min") : ` ${tr("min")}`}${suffix}`;
}

function openDetail(gym) {
  const crowd = gym.crowd ?? getCrowd(gym);
  const status = getStatus(crowd);
  elements.detailArea.textContent = `${text[locale].areas[gym.area]}・${text[locale].types[gym.type]}`;
  elements.detailTitle.textContent = gym.name;
  elements.detailDescription.textContent =
    locale === "ja"
      ? `${gym.purpose}に使いやすい候補です。${accessLabel(gym)}目安。混雑目安は${crowd}%で「${status.label}」です。`
      : locale === "es"
        ? `${gym.name} es una buena opción para ${purposeLabel(gym)}. ${accessLabel(gym)}. ${tr("crowd")}: ${crowd}% (${status.label}).`
        : `${gym.name} is a useful option for ${purposeLabel(gym)}. ${accessLabel(gym)}. ${tr("crowd")}: ${crowd}% (${status.label}).`;
  elements.detailWalk.textContent = accessLabel(gym);
  elements.detailSeat.textContent = `${text[locale].types[gym.type]}`;
  elements.detailCrowd.textContent = `${tr("crowd")} ${crowd}%`;
  elements.detailWebsite.href = searchUrl(gym);
  elements.detailMap.href = mapUrl(gym);
  elements.detailModal.classList.add("open");
  elements.detailModal.setAttribute("aria-hidden", "false");
}

function closeDetail() {
  elements.detailModal.classList.remove("open");
  elements.detailModal.setAttribute("aria-hidden", "true");
}

function updateMapLabel() {
  const labels = [tr("wide"), tr("standard"), tr("detailed"), tr("max")];
  elements.mapZoomLabel.textContent = labels[state.mapZoomOffset + 1] || tr("standard");
  elements.mapExpandButton.textContent = state.mapExpanded ? tr("back") : tr("expand");
  elements.realMap.classList.toggle("expanded", state.mapExpanded);
}

function render() {
  const visible = gyms
    .filter(matches)
    .map((gym) => {
      const crowd = getCrowd(gym);
      return { ...gym, crowd };
    })
    .sort((a, b) => a.crowd - b.crowd);
  elements.list.innerHTML = "";
  if (!visible.length) {
    elements.list.innerHTML = `<div class="empty-state">${tr("noMatch")}</div>`;
  }
  visible.forEach((gym) => {
    const status = getStatus(gym.crowd);
    const node = elements.template.content.firstElementChild.cloneNode(true);
    node.style.setProperty("--visual", gym.color);
    node.style.setProperty("--crowd", `${gym.crowd}%`);
    node.style.setProperty("--status-color", status.color);
    node.querySelector("h3").textContent = gym.name;
    node.querySelector(".status-pill").textContent = status.label;
    node.querySelector(".status-pill").style.background = status.color;
    node.querySelector(".meta").textContent = `${text[locale].areas[gym.area]}・${text[locale].types[gym.type]} / ${purposeLabel(gym)}`;
    node.querySelector(".signal strong").textContent = `${gym.crowd}%`;
    node.querySelector(".walk").textContent = accessLabel(gym);
    node.querySelector(".seat").textContent = `${tr("wait")} ${gym.crowd}%`;
    node.querySelector(".card-footer button").textContent = tr("detail");
    node.querySelector(".card-footer button").addEventListener("click", () => openDetail(gym));
    renderForecast(gym, node.querySelector(".forecast"));
    elements.list.append(node);
  });
  const easyCount = visible.filter((gym) => gym.crowd < 58).length;
  const avgCrowd = visible.length ? Math.round(visible.reduce((sum, gym) => sum + gym.crowd, 0) / visible.length) : 0;
  elements.openCount.textContent = unit(easyCount, "place");
  elements.avgWait.textContent = `${avgCrowd}%`;
  elements.resultCount.textContent = unit(visible.length, "place");
  elements.updatedAt.textContent = formatTime(new Date());
  updateMapPins();
  renderMap(visible);
}

function updateMapPins() {
  document.querySelectorAll(".map-pin").forEach((pin) => {
    const area = pin.dataset.area;
    const isActive = state.area === "all" || state.area === area;
    pin.classList.toggle("active", isActive);
    pin.style.opacity = isActive ? "1" : "0.32";
  });
}

function formatTime(date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function updateClock() {
  elements.clock.textContent = formatTime(new Date());
}

function setActiveButton(groupSelector, clicked) {
  document.querySelectorAll(groupSelector).forEach((button) => button.classList.remove("active"));
  clicked.classList.add("active");
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    state[button.dataset.filter] = button.dataset.value;
    setActiveButton(button.dataset.filter === "area" ? ".segmented [data-filter='area']" : ".chips [data-filter='type']", button);
    render();
  });
});

document.querySelectorAll(".map-pin").forEach((button) => {
  button.addEventListener("click", () => {
    state.area = button.dataset.area;
    const matchingFilter = document.querySelector(`.segmented [data-value="${state.area}"]`);
    if (matchingFilter) setActiveButton(".segmented [data-filter='area']", matchingFilter);
    render();
  });
});

elements.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});
elements.availableOnly.addEventListener("change", (event) => {
  state.onlyEasy = event.target.checked;
  render();
});
elements.refreshButton.addEventListener("click", () => {
  elements.refreshButton.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }], { duration: 520, easing: "ease" });
  render();
});
elements.mapNavButton.addEventListener("click", () => elements.realMap.scrollIntoView({ behavior: "smooth", block: "center" }));
elements.guideNavButton.addEventListener("click", () => elements.guideSection.scrollIntoView({ behavior: "smooth", block: "start" }));
elements.mapZoomOut.addEventListener("click", () => {
  state.mapZoomOffset = Math.max(-1, state.mapZoomOffset - 1);
  render();
});
elements.mapZoomIn.addEventListener("click", () => {
  state.mapZoomOffset = Math.min(3, state.mapZoomOffset + 1);
  render();
});
elements.mapExpandButton.addEventListener("click", () => {
  state.mapExpanded = !state.mapExpanded;
  render();
});
document.querySelectorAll("[data-close-detail]").forEach((button) => button.addEventListener("click", closeDetail));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDetail();
});

updateClock();
render();
setInterval(updateClock, 30000);
setInterval(render, 180000);
window.addEventListener("resize", render);
