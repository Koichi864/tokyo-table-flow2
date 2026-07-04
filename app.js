const restaurants = [
  {
    name: "丸の内だし茶寮",
    area: "丸の内",
    genre: "和食",
    purpose: "ひとり・短時間",
    walk: 4,
    seats: 7,
    baseCrowd: 44,
    color: "#8fc5b5",
  },
  {
    name: "Yaesu Noodle Stand",
    area: "八重洲",
    genre: "中華",
    purpose: "麺・回転早め",
    walk: 3,
    seats: 4,
    baseCrowd: 62,
    color: "#e4a960",
  },
  {
    name: "Gran Coffee Works",
    area: "駅ナカ",
    genre: "カフェ",
    purpose: "待ち合わせ・作業",
    walk: 2,
    seats: 9,
    baseCrowd: 38,
    color: "#92b5d9",
  },
  {
    name: "丸の内グリルテーブル",
    area: "丸の内",
    genre: "洋食",
    purpose: "ランチ会食",
    walk: 6,
    seats: 2,
    baseCrowd: 72,
    color: "#d58d7b",
  },
  {
    name: "八重洲小路 とんかつ",
    area: "八重洲",
    genre: "和食",
    purpose: "しっかり昼食",
    walk: 5,
    seats: 5,
    baseCrowd: 57,
    color: "#c9b06b",
  },
  {
    name: "Station Deli Kitchen",
    area: "駅ナカ",
    genre: "洋食",
    purpose: "テイクアウト可",
    walk: 1,
    seats: 11,
    baseCrowd: 35,
    color: "#86bdcf",
  },
  {
    name: "Yaesu Tea & Sweets",
    area: "八重洲",
    genre: "カフェ",
    purpose: "午後休憩",
    walk: 7,
    seats: 3,
    baseCrowd: 68,
    color: "#b8a0cf",
  },
  {
    name: "Otemachi Spice Bar",
    area: "丸の内",
    genre: "中華",
    purpose: "辛め・少人数",
    walk: 8,
    seats: 6,
    baseCrowd: 49,
    color: "#d27a55",
  },
];

const state = {
  area: "all",
  genre: "all",
  availableOnly: false,
  search: "",
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
};

function getCurrentCrowd(restaurant, offset = 0) {
  const now = new Date();
  const hour = (now.getHours() + offset + 24) % 24;
  const day = now.getDay();
  const isWeekend = day === 0 || day === 6;
  const mealPeak =
    (hour >= 11 && hour <= 13 ? 24 : 0) +
    (hour >= 18 && hour <= 20 ? 19 : 0) +
    (hour >= 7 && hour <= 9 ? 10 : 0);
  const cafeLift = restaurant.genre === "カフェ" && hour >= 14 && hour <= 17 ? 20 : 0;
  const stationLift = restaurant.area === "駅ナカ" && hour >= 17 && hour <= 19 ? 12 : 0;
  const weekendDrop = isWeekend && restaurant.area === "丸の内" ? -12 : 0;
  const rhythm = Math.round(Math.sin((hour + restaurant.walk) * 1.7) * 7);

  return Math.max(12, Math.min(98, restaurant.baseCrowd + mealPeak + cafeLift + stationLift + weekendDrop + rhythm));
}

function getStatus(crowd) {
  if (crowd < 45) {
    return { label: "空き", color: "#188a5b", wait: 0 };
  }
  if (crowd < 68) {
    return { label: "少し混雑", color: "#d88417", wait: 8 };
  }
  if (crowd < 84) {
    return { label: "混雑", color: "#c85f26", wait: 18 };
  }
  return { label: "満席近い", color: "#c54435", wait: 30 };
}

function getWaitMinutes(restaurant, crowd) {
  const status = getStatus(crowd);
  const seatRelief = Math.max(0, 8 - restaurant.seats);
  return Math.max(0, status.wait + seatRelief);
}

function matchesRestaurant(restaurant) {
  const haystack = `${restaurant.name} ${restaurant.area} ${restaurant.genre} ${restaurant.purpose}`.toLowerCase();
  const crowd = getCurrentCrowd(restaurant);

  return (
    (state.area === "all" || restaurant.area === state.area) &&
    (state.genre === "all" || restaurant.genre === state.genre) &&
    (!state.availableOnly || crowd < 68 || restaurant.seats >= 6) &&
    haystack.includes(state.search.toLowerCase())
  );
}

function renderForecast(restaurant, container) {
  container.innerHTML = "";

  for (let index = 0; index < 5; index += 1) {
    const hourOffset = index * 2;
    const time = new Date(Date.now() + hourOffset * 60 * 60 * 1000);
    const crowd = getCurrentCrowd(restaurant, hourOffset);
    const status = getStatus(crowd);
    const item = document.createElement("div");
    item.className = "forecast-item";
    item.innerHTML = `
      <div class="forecast-bar" style="--forecast-height:${crowd}%; --forecast-color:${status.color}">
        <span></span>
      </div>
      <span>${String(time.getHours()).padStart(2, "0")}:00</span>
    `;
    container.append(item);
  }
}

function render() {
  const visible = restaurants
    .filter(matchesRestaurant)
    .map((restaurant) => {
      const crowd = getCurrentCrowd(restaurant);
      return {
        ...restaurant,
        crowd,
        wait: getWaitMinutes(restaurant, crowd),
      };
    })
    .sort((a, b) => a.wait - b.wait || a.crowd - b.crowd);

  elements.list.innerHTML = "";

  if (visible.length === 0) {
    elements.list.innerHTML = '<div class="empty-state">条件に合うお店がありません。エリアやジャンルを広げてみてください。</div>';
  }

  visible.forEach((restaurant) => {
    const crowd = restaurant.crowd;
    const status = getStatus(crowd);
    const node = elements.template.content.firstElementChild.cloneNode(true);

    node.style.setProperty("--visual", restaurant.color);
    node.style.setProperty("--crowd", `${crowd}%`);
    node.style.setProperty("--status-color", status.color);
    node.querySelector("h3").textContent = restaurant.name;
    node.querySelector(".status-pill").textContent = status.label;
    node.querySelector(".status-pill").style.background = status.color;
    node.querySelector(".meta").textContent = `${restaurant.area}・${restaurant.genre} / ${restaurant.purpose}`;
    node.querySelector(".signal strong").textContent = `${crowd}%`;
    node.querySelector(".walk").textContent = `東京駅から徒歩${restaurant.walk}分`;
    node.querySelector(".seat").textContent =
      restaurant.wait === 0 ? `空席目安 ${restaurant.seats}席` : `待ち ${restaurant.wait}分`;
    renderForecast(restaurant, node.querySelector(".forecast"));
    elements.list.append(node);
  });

  const openCount = visible.filter((restaurant) => restaurant.wait <= 8).length;
  const avgWait = visible.length
    ? Math.round(visible.reduce((sum, restaurant) => sum + restaurant.wait, 0) / visible.length)
    : 0;

  elements.openCount.textContent = `${openCount}店`;
  elements.avgWait.textContent = `${avgWait}分`;
  elements.resultCount.textContent = `${visible.length}件`;
  elements.updatedAt.textContent = formatTime(new Date());
  updateMapPins();
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
    const filter = button.dataset.filter;
    state[filter] = button.dataset.value;
    setActiveButton(`[data-filter="${filter}"]`, button);
    render();
  });
});

document.querySelectorAll(".map-pin").forEach((button) => {
  button.addEventListener("click", () => {
    state.area = button.dataset.area;
    const areaButton = document.querySelector(`[data-filter="area"][data-value="${state.area}"]`);
    setActiveButton('[data-filter="area"]', areaButton);
    render();
  });
});

elements.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  render();
});

elements.availableOnly.addEventListener("change", (event) => {
  state.availableOnly = event.target.checked;
  render();
});

elements.refreshButton.addEventListener("click", () => {
  elements.refreshButton.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 420, easing: "ease-out" },
  );
  render();
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

updateClock();
render();
setInterval(updateClock, 30000);
setInterval(render, 180000);
