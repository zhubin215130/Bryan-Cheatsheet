const rtxPageType = document.body.dataset.page;

const RTX_FILTERS = [
  {
    id: "all",
    label: "全部项目",
    title: "全部项目",
    test: () => true
  },
  {
    id: "apps",
    label: "所有RTX应用",
    title: "所有RTX应用",
    test: (item) => item.type === "App"
  },
  {
    id: "mfg6x",
    label: "所有 DLSS 6 倍多帧生成的游戏和应用",
    title: "DLSS 6 倍多帧生成",
    test: (item) => cleanTechValue(item.tech.multiFrameGeneration) === "NV, 6X"
  },
  {
    id: "mfg4x",
    label: "所有 DLSS 4 倍多帧生成的游戏和应用",
    title: "DLSS 4 倍多帧生成",
    test: (item) => cleanTechValue(item.tech.multiFrameGeneration) === "NV, 4X"
  },
  {
    id: "rayTracing",
    label: "所有支持光线追踪的游戏和应用",
    title: "光线追踪",
    test: (item) => hasTech(item, "rayTracing")
  },
  {
    id: "pathTracing",
    label: "路径追踪项目",
    title: "路径追踪",
    test: (item) => item.tech.rayTracing === "路径追踪"
  },
  {
    id: "frameGeneration",
    label: "DLSS 帧生成",
    title: "DLSS 帧生成",
    test: (item) => hasTech(item, "frameGeneration")
  },
  {
    id: "superResolution",
    label: "DLSS 超分辨率",
    title: "DLSS 超分辨率",
    test: (item) => hasTech(item, "superResolution")
  },
  {
    id: "rayReconstruction",
    label: "DLSS 光线重建",
    title: "DLSS 光线重建",
    test: (item) => hasTech(item, "rayReconstruction")
  },
  {
    id: "dlaa",
    label: "DLAA",
    title: "DLAA",
    test: (item) => hasTech(item, "dlaa")
  },
  {
    id: "ai",
    label: "AI 技术",
    title: "AI 技术",
    test: (item) => hasTech(item, "ai")
  }
];

const rtxState = {
  filterId: "all",
  search: ""
};

function rtxById(id) {
  return RTX_ITEMS.find((item) => item.id === id);
}

function rtxFilterById(id) {
  return RTX_FILTERS.find((filter) => filter.id === id) || RTX_FILTERS[0];
}

function rtxEl(id) {
  return document.getElementById(id);
}

function initRtxThemeToggle() {
  const button = rtxEl("themeToggle");
  if (!button) return;

  const apply = (theme) => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("gpuTheme", theme);
    button.textContent = theme === "dark" ? "白底" : "黑底";
    button.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  };

  apply(document.documentElement.dataset.theme || "dark");
  button.addEventListener("click", () => {
    apply(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });
}

function hasTech(item, key) {
  return Boolean(cleanTechValue(item.tech[key]));
}

function cleanTechValue(value) {
  return String(value || "").trim().replace(/^✓\s*\((.+)\)$/u, "$1").trim();
}

function normalizeSearch(value) {
  return String(value || "").trim().toLowerCase();
}

function detailUrl(item) {
  return `rtx-detail.html?id=${encodeURIComponent(item.id)}`;
}

function displayType(type) {
  return type === "App" ? "应用" : type;
}

function techTone(value) {
  const cleanValue = cleanTechValue(value);
  if (!cleanValue) return "empty";
  if (cleanValue === "Yes") return "native";
  if (cleanValue.includes("6X")) return "six";
  if (cleanValue.includes("4X")) return "four";
  if (cleanValue.includes("NV")) return "override";
  if (cleanValue === "路径追踪") return "path";
  return "native";
}

function techLabel(value) {
  const cleanValue = cleanTechValue(value);
  if (!cleanValue) return "-";
  if (cleanValue === "Yes") return "✓";
  if (cleanValue.includes("NV")) return `✓ [ ${cleanValue} ]`;
  return cleanValue;
}

function makeTechBadge(value) {
  const badge = document.createElement("span");
  badge.className = `support-badge support-badge-${techTone(value)}`;
  badge.textContent = techLabel(value);
  return badge;
}

function filteredRtxItems() {
  const query = normalizeSearch(rtxState.search);
  const activeFilter = rtxFilterById(rtxState.filterId);

  return RTX_ITEMS.filter((item) => activeFilter.test(item)).filter((item) => {
    if (!query) return true;
    return normalizeSearch(`${item.name} ${item.type} ${displayType(item.type)}`).includes(query);
  });
}

function renderRtxListPage() {
  rtxEl("rtxTotalCount").textContent = RTX_ITEMS.length;
  rtxEl("rtxGameCount").textContent = RTX_ITEMS.filter((item) => item.type === "游戏").length;
  rtxEl("rtxAppCount").textContent = RTX_ITEMS.filter((item) => item.type === "App").length;
  renderQuickFilters();
  bindRtxSearch();
  renderRtxTable();

  rtxEl("resetRtxFilters").addEventListener("click", () => {
    rtxState.filterId = "all";
    rtxState.search = "";
    rtxEl("rtxSearch").value = "";
    renderQuickFilters();
    renderSuggestions([]);
    renderRtxTable();
  });
}

function renderQuickFilters() {
  const select = rtxEl("quickFilterSelect");
  select.innerHTML = "";

  RTX_FILTERS.forEach((filter) => {
    const option = document.createElement("option");
    option.value = filter.id;
    option.textContent = filter.label;
    option.selected = filter.id === rtxState.filterId;
    select.append(option);
  });

  select.onchange = () => {
    rtxState.filterId = select.value;
    renderRtxTable();
  };
}

function bindRtxSearch() {
  const input = rtxEl("rtxSearch");
  input.addEventListener("input", () => {
    rtxState.search = input.value;
    renderRtxTable();
    renderSuggestions(suggestionMatches(input.value));
  });

  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const [first] = suggestionMatches(input.value);
    if (first) window.location.href = detailUrl(first);
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-field")) renderSuggestions([]);
  });
}

function suggestionMatches(value) {
  const query = normalizeSearch(value);
  if (!query) return [];
  return RTX_ITEMS.filter((item) => normalizeSearch(item.name).includes(query)).slice(0, 10);
}

function renderSuggestions(matches) {
  const panel = rtxEl("rtxSuggestions");
  panel.innerHTML = "";
  panel.hidden = matches.length === 0;

  matches.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = `<span></span><small></small>`;
    button.querySelector("span").textContent = item.name;
    button.querySelector("small").textContent = displayType(item.type);
    button.addEventListener("click", () => {
      window.location.href = detailUrl(item);
    });
    panel.append(button);
  });
}

function renderRtxTable() {
  const body = rtxEl("rtxTableBody");
  const items = filteredRtxItems();
  const activeFilter = rtxFilterById(rtxState.filterId);
  const fragment = document.createDocumentFragment();

  body.innerHTML = "";
  rtxEl("rtxVisibleCount").textContent = items.length;
  rtxEl("activeFilterLabel").textContent = activeFilter.label;
  rtxEl("rtxResultTitle").textContent = activeFilter.title;
  rtxEl("rtxResultMeta").textContent = `${items.length} / ${RTX_ITEMS.length} 条记录，NVIDIA 源列表更新于 ${RTX_SOURCE.sourceUpdated}`;

  if (!items.length) {
    const row = document.createElement("tr");
    const empty = document.createElement("td");
    empty.colSpan = 10;
    empty.className = "rtx-empty-cell";
    empty.textContent = "没有找到匹配项目。";
    row.append(empty);
    body.append(row);
    return;
  }

  items.forEach((item) => {
    const row = document.createElement("tr");
    row.tabIndex = 0;
    row.addEventListener("click", () => {
      window.location.href = detailUrl(item);
    });
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter") window.location.href = detailUrl(item);
    });

    const name = document.createElement("td");
    name.className = "rtx-name-cell";
    name.textContent = item.name;
    row.append(name);

    const type = document.createElement("td");
    const typePill = document.createElement("span");
    typePill.className = "type-pill";
    typePill.textContent = displayType(item.type);
    type.append(typePill);
    row.append(type);

    RTX_TECH_FIELDS.forEach((field) => {
      const tech = document.createElement("td");
      tech.append(makeTechBadge(item.tech[field.key]));
      row.append(tech);
    });

    const action = document.createElement("td");
    const link = document.createElement("a");
    link.className = "gpu-detail-link";
    link.href = detailUrl(item);
    link.textContent = "详情";
    link.addEventListener("click", (event) => event.stopPropagation());
    action.append(link);
    row.append(action);
    fragment.append(row);
  });

  body.append(fragment);
}

function renderRtxDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const item = rtxById(params.get("id")) || RTX_ITEMS[0];
  document.title = `${item.name} RTX 技术详情`;

  const hero = rtxEl("rtxDetailHero");
  hero.innerHTML = "";
  const copy = document.createElement("div");
  copy.innerHTML = `<p class="eyebrow"></p><h1></h1><p></p>`;
  copy.querySelector(".eyebrow").textContent = displayType(item.type);
  copy.querySelector("h1").textContent = item.name;
  copy.querySelector("p:not(.eyebrow)").textContent = "以下技术标识来自 NVIDIA 官方 RTX 游戏、应用和引擎支持列表。";

  const actions = document.createElement("div");
  actions.className = "hero-actions";
  actions.innerHTML = `
    <a class="ghost-button" href="rtx.html">返回总表</a>
    <a class="source-link" href="${RTX_SOURCE.pageUrl}" target="_blank" rel="noreferrer">查看数据源</a>
  `;
  hero.append(copy, actions);

  const grid = rtxEl("rtxDetailGrid");
  grid.innerHTML = "";
  grid.append(renderBasicSection(item), renderTechSection(item), renderSourceSection());
}

function renderBasicSection(item) {
  const section = document.createElement("section");
  section.className = "spec-section";
  section.innerHTML = `<h2>基本信息</h2>`;
  const list = document.createElement("dl");
  appendDefinition(list, "名称", item.name);
  appendDefinition(list, "类型", displayType(item.type));
  appendDefinition(list, "已标识 RTX 技术", `${RTX_TECH_FIELDS.filter((field) => hasTech(item, field.key)).length} 项`);
  section.append(list);
  return section;
}

function renderTechSection(item) {
  const section = document.createElement("section");
  section.className = "spec-section rtx-tech-section";
  section.innerHTML = `<h2>技术支持列表</h2>`;
  const list = document.createElement("dl");

  RTX_TECH_FIELDS.forEach((field) => {
    const wrap = document.createElement("div");
    const term = document.createElement("dt");
    const desc = document.createElement("dd");
    term.textContent = field.label;
    desc.append(makeTechBadge(item.tech[field.key]));
    const note = explainTech(field.key, item.tech[field.key]);
    if (note) {
      const small = document.createElement("small");
      small.textContent = note;
      desc.append(small);
    }
    wrap.append(term, desc);
    list.append(wrap);
  });

  section.append(list);
  return section;
}

function renderSourceSection() {
  const section = document.createElement("section");
  section.className = "spec-section rtx-source-section";
  section.innerHTML = `<h2>引用与数据源</h2>`;
  const list = document.createElement("dl");
  appendDefinition(list, "来源页面", RTX_SOURCE.pageUrl);
  appendDefinition(list, "源列表更新", RTX_SOURCE.sourceUpdated);
  appendDefinition(list, "本页整理日期", RTX_SOURCE.dataUpdated);
  appendDefinition(list, "数据记录数", `${RTX_SOURCE.total} 条`);
  section.append(list);
  return section;
}

function appendDefinition(list, label, value) {
  const wrap = document.createElement("div");
  const term = document.createElement("dt");
  const desc = document.createElement("dd");
  term.textContent = label;
  desc.textContent = value;
  wrap.append(term, desc);
  list.append(wrap);
}

function explainTech(key, value) {
  const cleanValue = cleanTechValue(value);
  if (!cleanValue) return "NVIDIA 列表未在此列标识支持。";
  if (key === "multiFrameGeneration" && cleanValue === "NV, 6X") return "支持 DLSS 4.5 动态多帧生成，最高可达 6 倍多帧生成。";
  if (key === "multiFrameGeneration" && cleanValue === "NV, 4X") return "支持 DLSS 多帧生成，最高可达 4 倍多帧生成。";
  if (cleanValue === "NV, U") return "可通过 NVIDIA App 优设升级为更新的 DLSS 帧生成模型。";
  if (cleanValue === "NV, T") return "可通过 NVIDIA App 优设升级为更新的 Transformer AI 模型。";
  if (cleanValue === "NV") return "可通过 NVIDIA App 优设启用或升级。";
  if (cleanValue === "Yes") return "NVIDIA 列表标识为原生支持。";
  if (cleanValue === "路径追踪") return "NVIDIA 列表标识为路径追踪支持。";
  return "NVIDIA 列表标识为支持。";
}

initRtxThemeToggle();

if (rtxPageType === "rtx-list") renderRtxListPage();
if (rtxPageType === "rtx-detail") renderRtxDetailPage();
