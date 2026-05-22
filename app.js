const pageType = document.body.dataset.page;
const selectedIds = new Set(readSelection());

function byId(id) {
  return document.getElementById(id);
}

function gpuById(id) {
  return GPUS.find((gpu) => gpu.id === id);
}

function readSelection() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("ids");
  if (fromUrl) return fromUrl.split(",").filter((id) => gpuById(id));

  try {
    const stored = JSON.parse(localStorage.getItem("gpuCompareSelection") || "[]");
    return stored.filter((id) => gpuById(id));
  } catch {
    return [];
  }
}

function saveSelection() {
  localStorage.setItem("gpuCompareSelection", JSON.stringify([...selectedIds]));
  updateCompareNav();
}

function comparisonUrl(ids = [...selectedIds]) {
  return ids.length ? `compare.html?ids=${ids.join(",")}` : "compare.html";
}

function updateCompareNav() {
  const nav = byId("compareNav");
  if (nav) nav.href = comparisonUrl();
}

function initThemeToggle() {
  const button = byId("themeToggle");
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

function cell(value) {
  const td = document.createElement("td");
  td.textContent = value ?? "-";
  return td;
}

function renderListPage() {
  byId("gpuCount").textContent = GPUS.length;
  renderGpuList();
  updateTray();

  byId("clearSelection").addEventListener("click", () => {
    selectedIds.clear();
    saveSelection();
    renderGpuList();
    updateTray();
  });
}

function renderGpuList() {
  const list = byId("gpuList");
  list.innerHTML = "";

  SERIES_ORDER.forEach((series) => {
    const seriesGpus = GPUS.filter((gpu) => gpu.series === series);
    const divider = document.createElement("div");
    divider.className = "gpu-series-divider";
    const title = document.createElement("span");
    title.textContent = series;
    const selectAll = document.createElement("button");
    selectAll.className = "series-select-all";
    selectAll.type = "button";
    selectAll.textContent = "勾选全部";
    selectAll.setAttribute("aria-label", `勾选全部 ${series} GPU`);
    selectAll.addEventListener("click", () => {
      seriesGpus.forEach((gpu) => selectedIds.add(gpu.id));
      saveSelection();
      renderGpuList();
      updateTray();
    });
    divider.append(title, selectAll);
    list.append(divider);

    seriesGpus.forEach((gpu) => {
      const item = document.createElement("article");
      item.className = "gpu-choice";
      item.dataset.id = gpu.id;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = selectedIds.has(gpu.id);
      checkbox.setAttribute("aria-label", `选择 ${gpu.name} 加入对比`);
      checkbox.addEventListener("click", (event) => event.stopPropagation());
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) selectedIds.add(gpu.id);
        else selectedIds.delete(gpu.id);
        saveSelection();
        updateTray();
      });

      const name = document.createElement("span");
      name.className = "gpu-choice-name";
      name.textContent = gpu.name;

      const detailLink = document.createElement("a");
      detailLink.className = "gpu-detail-link";
      detailLink.href = `gpu.html?id=${gpu.id}`;
      detailLink.textContent = "详情";
      detailLink.addEventListener("click", (event) => event.stopPropagation());

      item.append(checkbox, name, detailLink);
      item.addEventListener("click", (event) => {
        if (event.target.closest("input") || event.target.closest(".gpu-detail-link")) return;
        checkbox.checked = !checkbox.checked;
        if (checkbox.checked) selectedIds.add(gpu.id);
        else selectedIds.delete(gpu.id);
        saveSelection();
        updateTray();
      });
      list.append(item);
    });
  });
}

function updateTray() {
  const ids = [...selectedIds];
  const selectedText = byId("selectedText");
  const compareButton = byId("compareButton");
  selectedText.textContent = ids.length
    ? ids.map((id) => gpuById(id).name).join("，")
    : "请选择至少 2 款 GPU";
  compareButton.href = comparisonUrl(ids);
  compareButton.classList.toggle("disabled", ids.length < 2);
  compareButton.setAttribute("aria-disabled", ids.length < 2 ? "true" : "false");
}

function renderDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const gpu = gpuById(params.get("id")) || GPUS[0];
  const detailCompareIds = [...new Set([gpu.id, ...selectedIds])];
  if (detailCompareIds.length < 2) {
    detailCompareIds.push(GPUS.find((item) => item.id !== gpu.id).id);
  }
  document.title = `${gpu.name} 详细规格`;

  byId("detailHero").innerHTML = `
    <div>
      <p class="eyebrow">${gpu.series}</p>
      <h1>${gpu.name}</h1>
      <p>以下参数按 NVIDIA 官方公开对比页整理，部分规格可能因显卡制造商和具体版本而异。</p>
    </div>
    <div class="hero-actions">
      <a class="ghost-button" href="gpu-list.html">返回总表</a>
      <a class="primary-button" href="${comparisonUrl(detailCompareIds)}">发起对比</a>
    </div>
  `;

  const grouped = groupFieldsByCategory();
  const detailGrid = byId("detailGrid");
  detailGrid.innerHTML = "";
  Object.entries(grouped).forEach(([category, fields]) => {
    const section = document.createElement("section");
    section.className = "spec-section";
    section.innerHTML = `<h2>${category}</h2>`;
    const list = document.createElement("dl");
    fields.forEach((field) => {
      const wrap = document.createElement("div");
      wrap.innerHTML = `<dt>${field.label}</dt><dd>${gpu.specs[field.key] ?? "-"}</dd>`;
      list.append(wrap);
    });
    section.append(list);
    detailGrid.append(section);
  });
}

function groupFieldsByCategory() {
  return SPEC_FIELDS.reduce((groups, field) => {
    groups[field.category] ||= [];
    groups[field.category].push(field);
    return groups;
  }, {});
}

function renderComparePage() {
  if (selectedIds.size === 0) {
    GPUS.slice(0, 2).forEach((gpu) => selectedIds.add(gpu.id));
  } else if (selectedIds.size === 1) {
    const fallback = GPUS.find((gpu) => !selectedIds.has(gpu.id));
    if (fallback) selectedIds.add(fallback.id);
  }
  saveSelection();
  renderGpuPicker();
  renderSelectedCompare();
  renderMetricOptions();
  renderCharts();
  renderCompareTable();
}

function renderGpuPicker() {
  const picker = byId("gpuPicker");
  picker.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "选择要添加的 GPU";
  picker.append(placeholder);

  GPUS.filter((gpu) => !selectedIds.has(gpu.id)).forEach((gpu) => {
    const option = document.createElement("option");
    option.value = gpu.id;
    option.textContent = `${gpu.name} · ${gpu.series}`;
    picker.append(option);
  });

  picker.addEventListener("change", () => {
    if (!picker.value) return;
    selectedIds.add(picker.value);
    syncCompareRoute();
  });
}

function renderSelectedCompare() {
  const selected = byId("compareSelected");
  selected.innerHTML = "";

  [...selectedIds].forEach((id) => {
    const gpu = gpuById(id);
    const chip = document.createElement("span");
    chip.className = "selected-chip";
    chip.innerHTML = `${gpu.name}<button type="button" aria-label="移除 ${gpu.name}">×</button>`;
    chip.querySelector("button").addEventListener("click", () => {
      selectedIds.delete(id);
      syncCompareRoute();
    });
    selected.append(chip);
  });
}

function renderMetricOptions() {
  const box = byId("metricOptions");
  box.innerHTML = "";
  CHART_FIELDS.forEach((field) => {
    const label = document.createElement("label");
    label.className = "metric-check";
    label.innerHTML = `<input type="checkbox" value="${field.key}" checked>${field.label}`;
    label.querySelector("input").addEventListener("change", renderCharts);
    box.append(label);
  });
}

function selectedChartKeys() {
  return [...document.querySelectorAll("#metricOptions input:checked")].map((input) => input.value);
}

function renderCharts() {
  const chartArea = byId("charts");
  if (!chartArea) return;

  const ids = [...selectedIds];
  const chosenFields = CHART_FIELDS.filter((field) => selectedChartKeys().includes(field.key));
  chartArea.innerHTML = "";

  if (!chosenFields.length) {
    chartArea.innerHTML = `<div class="empty-state">请至少勾选一个规格项。</div>`;
    return;
  }

  chosenFields.forEach((field) => {
    const values = ids.map((id) => gpuById(id)).filter(Boolean).map((gpu) => ({
      gpu,
      value: gpu.metrics[field.key]
    })).filter((item) => typeof item.value === "number");
    const max = Math.max(...values.map((item) => item.value), 1);
    const chart = document.createElement("article");
    chart.className = "bar-chart";
    chart.innerHTML = `<h3>${field.label}</h3>`;

    values.forEach(({ gpu, value }) => {
      const row = document.createElement("div");
      row.className = "bar-row";
      row.innerHTML = `
        <span>${gpu.name}</span>
        <div class="bar-track"><i style="width: ${(value / max) * 100}%"></i></div>
        <strong>${value} ${field.unit}</strong>
      `;
      chart.append(row);
    });

    chartArea.append(chart);
  });
}

function renderCompareTable() {
  const selectedGpus = [...selectedIds].map(gpuById).filter(Boolean);
  const head = byId("compareTableHead");
  const body = byId("compareTableBody");
  const headRow = document.createElement("tr");
  ["规格项", ...selectedGpus.map((gpu) => gpu.name)].forEach((label) => {
    const th = document.createElement("th");
    th.textContent = label;
    headRow.append(th);
  });
  head.replaceChildren(headRow);
  body.innerHTML = "";

  Object.entries(groupFieldsByCategory()).forEach(([category, fields]) => {
    const groupRow = document.createElement("tr");
    groupRow.className = "series-row";
    const groupCell = document.createElement("td");
    groupCell.colSpan = selectedGpus.length + 1;
    groupCell.textContent = category;
    groupRow.append(groupCell);
    body.append(groupRow);

    fields.forEach((field) => {
      const row = document.createElement("tr");
      row.append(cell(field.label));
      selectedGpus.forEach((gpu) => row.append(cell(gpu.specs[field.key])));
      body.append(row);
    });
  });
}

function syncCompareRoute() {
  saveSelection();
  const url = comparisonUrl();
  window.history.replaceState(null, "", url);
  renderGpuPicker();
  renderSelectedCompare();
  renderCharts();
  renderCompareTable();
}

initThemeToggle();
updateCompareNav();

if (pageType === "list") renderListPage();
if (pageType === "detail") renderDetailPage();
if (pageType === "compare") renderComparePage();
