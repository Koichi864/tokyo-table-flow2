const restaurants = [
  ["スターバックス コーヒー CoCoLo長岡店", "長岡駅周辺", "カフェ", "コーヒー・待ち合わせ", 3, 34, 18, "#7a9f72"],
  ["タリーズコーヒー 長岡新保店", "宮内・川崎", "カフェ", "仕事前の一息", 8, 30, 18, "#8aa77d"],
  ["VIE DE FRANCE 長岡店", "長岡駅周辺", "カフェ", "パン・朝カフェ", 2, 36, 22, "#d09b6f"],
  ["フレンド CoCoLo長岡店", "長岡駅周辺", "洋食", "イタリアン焼きそば", 2, 50, 18, "#d9846f"],
  ["ぽんしゅ館 長岡驛店", "長岡駅周辺", "居酒屋", "日本酒・お土産", 3, 58, 12, "#9f6f70"],
  ["長岡小嶋屋 CoCoLo長岡店", "長岡駅周辺", "和食", "へぎそば", 2, 62, 16, "#668b77"],
  ["長岡小嶋屋 本店", "大手通り", "和食", "へぎそば・会食", 7, 64, 22, "#6f8f7a"],
  ["越後長岡 小嶋屋 殿町本店", "殿町", "和食", "へぎそば・地酒", 7, 61, 20, "#6c917a"],
  ["青島食堂 宮内駅前店", "宮内・川崎", "ラーメン", "生姜醤油ラーメン", 10, 78, 8, "#d06e58"],
  ["青島食堂 曲新町店", "宮内・川崎", "ラーメン", "生姜醤油ラーメン", 10, 75, 10, "#cf795f"],
  ["ラーメンたいち", "宮内・川崎", "ラーメン", "生姜醤油ラーメン", 12, 73, 14, "#c96855"],
  ["いち井", "古正寺・千秋", "ラーメン", "塩ラーメン", 12, 80, 10, "#ca6258"],
  ["麺の風 祥気", "宮内・川崎", "ラーメン", "鶏塩そば", 12, 72, 12, "#ca755a"],
  ["安福亭 本店", "長岡駅周辺", "ラーメン", "背脂ラーメン", 9, 70, 16, "#c8785b"],
  ["中華大吉", "殿町", "ラーメン", "深夜ラーメン", 6, 66, 12, "#d48955"],
  ["らーめんヒグマ 長岡店", "古正寺・千秋", "ラーメン", "生姜醤油ラーメン", 13, 65, 18, "#c9825e"],
  ["ラーメン潤 宮内店", "宮内・川崎", "ラーメン", "背脂ラーメン", 11, 63, 18, "#cd805f"],
  ["あおきや 長岡インター店", "古正寺・千秋", "ラーメン", "生姜醤油ラーメン", 15, 57, 24, "#c48a63"],
  ["らぁ麺 武者気", "古正寺・千秋", "ラーメン", "濃厚ラーメン", 13, 60, 18, "#d08361"],
  ["のろし 長岡店", "古正寺・千秋", "ラーメン", "がっつりラーメン", 12, 59, 20, "#c7775d"],
  ["レストラン ナカタ", "大手通り", "洋食", "洋風カツ丼", 6, 55, 16, "#ba806b"],
  ["ピッツェリア 長岡インター店", "古正寺・千秋", "洋食", "ピザ・家族ランチ", 14, 52, 28, "#bd796e"],
  ["Baden Baden 長岡駅前店", "長岡駅周辺", "洋食", "ビール・ソーセージ", 4, 56, 26, "#9f756f"],
  ["フランス酒場 meli-melo", "殿町", "洋食", "ワイン・ビストロ", 6, 50, 18, "#b56f7e"],
  ["Bistro Naomis", "大手通り", "洋食", "ビストロ・ランチ", 7, 48, 16, "#b07678"],
  ["カフェ ウインズ", "長岡駅周辺", "カフェ", "ゆっくりカフェ", 5, 43, 20, "#87a98b"],
  ["SUZUDELI", "長岡駅周辺", "カフェ", "デリ・ランチ", 5, 56, 16, "#8aa881"],
  ["SUZU365", "古正寺・千秋", "カフェ", "野菜ランチ・カフェ", 12, 52, 22, "#83a987"],
  ["GOOD LUCK COFFEE", "大手通り", "カフェ", "コーヒー・休憩", 6, 38, 14, "#789b89"],
  ["喫茶 シャモニー", "長岡駅周辺", "カフェ", "喫茶・軽食", 4, 41, 18, "#9d8b77"],
  ["コメダ珈琲店 長岡今朝白店", "宮内・川崎", "カフェ", "モーニング・休憩", 9, 54, 30, "#8b9e74"],
  ["星乃珈琲店 長岡店", "古正寺・千秋", "カフェ", "喫茶・パンケーキ", 12, 55, 28, "#8e9276"],
  ["ミスタードーナツ 長岡ショップ", "大手通り", "スイーツ", "ドーナツ・休憩", 6, 45, 22, "#d59b95"],
  ["江口だんご 本店", "宮内・川崎", "スイーツ", "団子・甘味", 14, 50, 24, "#c99a76"],
  ["江口だんご CoCoLo長岡店", "長岡駅周辺", "スイーツ", "和菓子・手土産", 2, 44, 14, "#ca9c79"],
  ["ガトウ専科 長岡駅店", "長岡駅周辺", "スイーツ", "洋菓子・手土産", 2, 42, 10, "#d48a8a"],
  ["美松 大手通店", "大手通り", "スイーツ", "シュークリーム・喫茶", 6, 48, 16, "#d08a95"],
  ["パティスリー カワサキ", "宮内・川崎", "スイーツ", "ケーキ・手土産", 11, 39, 12, "#d19a90"],
  ["廻鮮富寿し 長岡古正寺店", "古正寺・千秋", "寿司", "回転寿司・海鮮", 12, 64, 26, "#6c9aa0"],
  ["すし道楽 長岡店", "古正寺・千秋", "寿司", "回転寿司", 12, 58, 24, "#6a98a4"],
  ["寿司・和食 一", "殿町", "寿司", "寿司・和食", 7, 47, 12, "#678f98"],
  ["割烹 魚仙", "大手通り", "和食", "海鮮・会食", 7, 53, 12, "#697f8f"],
  ["割烹 田村屋", "殿町", "和食", "割烹・地酒", 7, 51, 16, "#737f83"],
  ["越後の蔵 和心づくし あさひ山", "長岡駅周辺", "和食", "地酒・和食", 3, 59, 24, "#798776"],
  ["越後の台所 すずきち", "殿町", "居酒屋", "郷土料理・地酒", 6, 62, 18, "#9a6f72"],
  ["たこの壺", "殿町", "居酒屋", "海鮮・地酒", 6, 67, 18, "#9f6d6c"],
  ["大衆割烹 十字路", "大手通り", "居酒屋", "大衆割烹", 6, 60, 22, "#a07170"],
  ["いさり火", "殿町", "居酒屋", "魚料理・一杯", 6, 58, 16, "#9c746b"],
  ["焼鳥 ダルマ", "殿町", "居酒屋", "焼鳥・軽く一杯", 6, 63, 16, "#a46f67"],
  ["目利きの銀次 長岡駅前店", "長岡駅周辺", "居酒屋", "海鮮居酒屋", 3, 61, 40, "#a07070"],
  ["山内農場 長岡駅前店", "長岡駅周辺", "居酒屋", "居酒屋・グループ", 3, 57, 42, "#a37268"],
  ["魚民 長岡大手通り店", "大手通り", "居酒屋", "居酒屋・飲み会", 5, 55, 44, "#a56f70"],
  ["寧々家 長岡駅前店", "長岡駅周辺", "居酒屋", "個室・飲み会", 4, 54, 42, "#9f7675"],
  ["餃子の王将 長岡店", "宮内・川崎", "中華", "餃子・中華", 10, 58, 28, "#c08b62"],
  ["大阪王将 長岡蓮潟店", "古正寺・千秋", "中華", "餃子・定食", 13, 52, 30, "#c18464"],
  ["中華料理 蘇州", "大手通り", "中華", "町中華・定食", 6, 46, 20, "#bd8669"],
  ["紅虎餃子房 長岡店", "古正寺・千秋", "中華", "中華・餃子", 12, 54, 30, "#bb7e68"],
  ["吉野家 長岡駅前店", "長岡駅周辺", "和食", "牛丼・早め", 3, 35, 18, "#d49a65"],
  ["松屋 長岡店", "宮内・川崎", "和食", "定食・早め", 9, 36, 24, "#d29766"],
  ["すき家 長岡IC店", "古正寺・千秋", "和食", "牛丼・早め", 14, 34, 28, "#d19765"],
  ["モスバーガー 長岡古正寺店", "古正寺・千秋", "洋食", "ハンバーガー", 13, 43, 24, "#a98f70"],
  ["ケンタッキーフライドチキン 長岡川崎店", "宮内・川崎", "洋食", "チキン・軽食", 9, 45, 22, "#b9846f"],
  ["マクドナルド 長岡リバーサイド千秋店", "古正寺・千秋", "洋食", "軽食・休憩", 14, 58, 34, "#c88b64"],
].map(([name, area, genre, purpose, walk, baseCrowd, seats, color]) => ({
  name,
  area,
  genre,
  purpose,
  walk,
  baseCrowd,
  seats,
  color,
}));

const state = {
  area: "all",
  genre: "all",
  availableOnly: false,
  search: "",
  mapZoomOffset: 0,
  mapExpanded: false,
};

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

function getCurrentCrowd(restaurant, offset = 0) {
  const now = new Date();
  const hour = (now.getHours() + offset + 24) % 24;
  const day = now.getDay();
  const mealPeak = (hour >= 11 && hour <= 13 ? 25 : 0) + (hour >= 18 && hour <= 20 ? 20 : 0);
  const cafeLift = restaurant.genre === "カフェ" && hour >= 14 && hour <= 17 ? 17 : 0;
  const sweetsLift = restaurant.genre === "スイーツ" && hour >= 15 && hour <= 18 ? 15 : 0;
  const stationLift = restaurant.area === "長岡駅周辺" && hour >= 17 && hour <= 19 ? 9 : 0;
  const weekendLift = (day === 0 || day === 6) && restaurant.area === "古正寺・千秋" ? 12 : 0;
  const rhythm = Math.round(Math.sin((hour + restaurant.walk + restaurant.name.length) * 1.5) * 7);
  return Math.max(10, Math.min(98, restaurant.baseCrowd + mealPeak + cafeLift + sweetsLift + stationLift + weekendLift + rhythm - restaurant.seats / 6));
}

function getStatus(crowd) {
  if (crowd < 38) return { label: "空き", color: "#27924f" };
  if (crowd < 58) return { label: "少し混雑", color: "#91bd47" };
  if (crowd < 76) return { label: "混雑", color: "#f5a623" };
  return { label: "満席近い", color: "#dc4d3f" };
}

function getWaitMinutes(restaurant, crowd) {
  if (crowd < 42) return 0;
  const pressure = Math.max(0, crowd - 40);
  return Math.round((pressure / 6) + restaurant.walk / 4);
}

function matchesRestaurant(restaurant) {
  const crowd = getCurrentCrowd(restaurant);
  const query = state.search.trim().toLowerCase();
  const haystack = `${restaurant.name} ${restaurant.area} ${restaurant.genre} ${restaurant.purpose}`.toLowerCase();
  return (
    (state.area === "all" || restaurant.area === state.area) &&
    (state.genre === "all" || restaurant.genre === state.genre) &&
    (!state.availableOnly || crowd < 68 || restaurant.seats >= 8) &&
    haystack.includes(query)
  );
}

function getAccessLabel(restaurant) {
  if (restaurant.area === "宮内・川崎") return `車・最寄り駅から約${restaurant.walk}分`;
  if (restaurant.area === "古正寺・千秋") return `長岡駅から車で約${restaurant.walk}分`;
  return `長岡駅から徒歩${restaurant.walk}分`;
}

function buildWebSearchUrl(restaurant) {
  return `https://www.google.com/search?q=${encodeURIComponent(`${restaurant.name} 長岡市 公式`)}`;
}

function buildMapUrl(restaurant) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${restaurant.name} ${restaurant.area} 長岡市`)}`;
}

function hashNumber(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function getAreaGeoBase(area) {
  const bases = {
    長岡駅周辺: { lat: 37.4473, lon: 138.8536 },
    大手通り: { lat: 37.4465, lon: 138.8485 },
    殿町: { lat: 37.4446, lon: 138.8462 },
    "古正寺・千秋": { lat: 37.4518, lon: 138.8177 },
    "宮内・川崎": { lat: 37.4245, lon: 138.855 },
  };
  return bases[area] || bases["長岡駅周辺"];
}

function getRestaurantGeo(restaurant) {
  const base = getAreaGeoBase(restaurant.area);
  const hash = hashNumber(`${restaurant.name}${restaurant.genre}`);
  const angle = (hash % 360) * (Math.PI / 180);
  const radius = 0.0007 + ((hash >>> 4) % 130) / 100000;
  const spread = restaurant.area === "古正寺・千秋" ? 2.2 : restaurant.area === "宮内・川崎" ? 2 : 1.1;
  return {
    lat: base.lat + Math.sin(angle) * radius * spread,
    lon: base.lon + Math.cos(angle) * radius * spread,
  };
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

function getMapBounds(points) {
  const lats = points.map((point) => point.lat);
  const lons = points.map((point) => point.lon);
  return {
    minLat: Math.min(...lats),
    maxLat: Math.max(...lats),
    minLon: Math.min(...lons),
    maxLon: Math.max(...lons),
  };
}

function projectPoint(point, bounds) {
  const padding = 9;
  const lonRange = Math.max(0.002, bounds.maxLon - bounds.minLon);
  const latRange = Math.max(0.002, bounds.maxLat - bounds.minLat);
  return {
    x: padding + ((point.lon - bounds.minLon) / lonRange) * (100 - padding * 2),
    y: padding + ((bounds.maxLat - point.lat) / latRange) * (100 - padding * 2),
  };
}

function createMapPin(restaurant, projected, status) {
  const button = document.createElement("button");
  button.className = "crowd-pin";
  button.type = "button";
  button.style.left = `${projected.x}%`;
  button.style.top = `${projected.y}%`;
  button.style.background = status.color;
  button.title = `${restaurant.name} ${Math.round(restaurant.crowd)}%`;
  button.innerHTML = `<span>${Math.round(restaurant.crowd)}</span>`;
  button.addEventListener("click", () => openDetail(restaurant));
  return button;
}

function createMapCluster(cluster) {
  const button = document.createElement("button");
  button.className = "crowd-pin crowd-cluster";
  button.type = "button";
  button.style.left = `${cluster.x}%`;
  button.style.top = `${cluster.y}%`;
  button.style.background = cluster.status.color;
  button.innerHTML = `<span>${cluster.restaurants.length}</span>`;
  button.addEventListener("click", () => {
    state.mapZoomOffset = Math.min(3, state.mapZoomOffset + 1);
    render();
  });
  return button;
}

function updateMapZoomLabel() {
  const labels = ["広域", "標準", "詳細", "最大"];
  elements.mapZoomLabel.textContent = labels[state.mapZoomOffset + 1] || "標準";
  elements.mapExpandButton.textContent = state.mapExpanded ? "戻る" : "拡大";
  elements.realMap.classList.toggle("expanded", state.mapExpanded);
}

function renderCrowdMap(visibleRestaurants) {
  elements.mapPoints.innerHTML = "";
  if (visibleRestaurants.length === 0) {
    elements.mapCount.textContent = "0店";
    updateMapTiles({ lat: 37.446, lon: 138.848 }, 14 + state.mapZoomOffset);
    updateMapZoomLabel();
    return;
  }

  const enriched = visibleRestaurants.map((restaurant) => ({ ...restaurant, ...getRestaurantGeo(restaurant) }));
  const bounds = getMapBounds(enriched);
  const center = {
    lat: (bounds.minLat + bounds.maxLat) / 2,
    lon: (bounds.minLon + bounds.maxLon) / 2,
  };
  const zoom = Math.max(13, Math.min(17, 14 + state.mapZoomOffset));
  updateMapTiles(center, zoom);

  const clusterDistance = state.mapZoomOffset >= 2 ? 3.2 : state.mapZoomOffset === 1 ? 5.2 : 7.4;
  const clusters = [];
  enriched.forEach((restaurant) => {
    const projected = projectPoint(restaurant, bounds);
    const existing = clusters.find((cluster) => Math.hypot(cluster.x - projected.x, cluster.y - projected.y) < clusterDistance);
    if (existing) {
      existing.restaurants.push(restaurant);
      existing.x = (existing.x * (existing.restaurants.length - 1) + projected.x) / existing.restaurants.length;
      existing.y = (existing.y * (existing.restaurants.length - 1) + projected.y) / existing.restaurants.length;
    } else {
      clusters.push({ x: projected.x, y: projected.y, restaurants: [restaurant] });
    }
  });

  clusters.forEach((cluster) => {
    const avgCrowd = Math.round(cluster.restaurants.reduce((sum, restaurant) => sum + restaurant.crowd, 0) / cluster.restaurants.length);
    cluster.status = getStatus(avgCrowd);
    if (cluster.restaurants.length === 1 || state.mapZoomOffset >= 3) {
      const restaurant = cluster.restaurants[0];
      elements.mapPoints.append(createMapPin(restaurant, { x: cluster.x, y: cluster.y }, getStatus(restaurant.crowd)));
    } else {
      elements.mapPoints.append(createMapCluster(cluster));
    }
  });

  elements.mapCount.textContent = `${visibleRestaurants.length}店 / ${elements.mapPoints.children.length}ピン`;
  updateMapZoomLabel();
}

function renderForecast(restaurant, container) {
  container.innerHTML = "";
  [0, 1, 2].forEach((offset) => {
    const time = new Date();
    time.setHours(time.getHours() + offset);
    const crowd = getCurrentCrowd(restaurant, offset);
    const status = getStatus(crowd);
    const item = document.createElement("div");
    item.style.setProperty("--status-color", status.color);
    item.innerHTML = `<div><span style="width:${crowd}%"></span></div><span>${String(time.getHours()).padStart(2, "0")}:00</span>`;
    container.append(item);
  });
}

function openDetail(restaurant) {
  const crowd = restaurant.crowd ?? getCurrentCrowd(restaurant);
  const wait = restaurant.wait ?? getWaitMinutes(restaurant, crowd);
  const status = getStatus(crowd);
  elements.detailArea.textContent = `${restaurant.area}・${restaurant.genre}`;
  elements.detailTitle.textContent = restaurant.name;
  elements.detailDescription.textContent = `${restaurant.purpose}のお店です。${getAccessLabel(restaurant)}目安。いまの混雑目安は${crowd}%で「${status.label}」です。`;
  elements.detailWalk.textContent = getAccessLabel(restaurant);
  elements.detailSeat.textContent = wait === 0 ? `空席 ${restaurant.seats}` : `待ち ${wait}分`;
  elements.detailCrowd.textContent = `混雑 ${crowd}%`;
  elements.detailWebsite.href = buildWebSearchUrl(restaurant);
  elements.detailMap.href = buildMapUrl(restaurant);
  elements.detailModal.classList.add("open");
  elements.detailModal.setAttribute("aria-hidden", "false");
}

function closeDetail() {
  elements.detailModal.classList.remove("open");
  elements.detailModal.setAttribute("aria-hidden", "true");
}

function render() {
  const visible = restaurants
    .filter(matchesRestaurant)
    .map((restaurant) => {
      const crowd = getCurrentCrowd(restaurant);
      return { ...restaurant, crowd, wait: getWaitMinutes(restaurant, crowd) };
    })
    .sort((a, b) => a.wait - b.wait || a.crowd - b.crowd);

  elements.list.innerHTML = "";
  if (visible.length === 0) {
    const queryText = state.search ? `「${state.search}」` : "その条件";
    elements.list.innerHTML = `<div class="empty-state">${queryText}に合う登録店がまだありません。<br>エリアやジャンルを広げて確認してください。</div>`;
  }

  visible.forEach((restaurant) => {
    const status = getStatus(restaurant.crowd);
    const node = elements.template.content.firstElementChild.cloneNode(true);
    node.style.setProperty("--visual", restaurant.color);
    node.style.setProperty("--crowd", `${restaurant.crowd}%`);
    node.style.setProperty("--status-color", status.color);
    node.querySelector("h3").textContent = restaurant.name;
    node.querySelector(".status-pill").textContent = status.label;
    node.querySelector(".status-pill").style.background = status.color;
    node.querySelector(".meta").textContent = `${restaurant.area}・${restaurant.genre} / ${restaurant.purpose}`;
    node.querySelector(".signal strong").textContent = `${restaurant.crowd}%`;
    node.querySelector(".walk").textContent = getAccessLabel(restaurant);
    node.querySelector(".seat").textContent = restaurant.wait === 0 ? `空席目安 ${restaurant.seats}席` : `待ち ${restaurant.wait}分`;
    node.querySelector(".card-footer button").addEventListener("click", () => openDetail(restaurant));
    renderForecast(restaurant, node.querySelector(".forecast"));
    elements.list.append(node);
  });

  const openCount = visible.filter((restaurant) => restaurant.wait <= 8).length;
  const avgWait = visible.length ? Math.round(visible.reduce((sum, restaurant) => sum + restaurant.wait, 0) / visible.length) : 0;
  elements.openCount.textContent = `${openCount}店`;
  elements.avgWait.textContent = `${avgWait}分`;
  elements.resultCount.textContent = `${visible.length}件`;
  elements.updatedAt.textContent = formatTime(new Date());
  updateMapPins();
  renderCrowdMap(visible);
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
    const groupSelector = button.dataset.filter === "area" ? ".segmented [data-filter='area']" : ".chips [data-filter='genre']";
    setActiveButton(groupSelector, button);
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
  state.availableOnly = event.target.checked;
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
