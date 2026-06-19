const RTX_SOURCE = {
    "title":  "NVIDIA DLSS \u0026 GeForce RTX 支持列表",
    "pageUrl":  "https://www.nvidia.cn/geforce/news/nvidia-rtx-games-engines-apps/",
    "dataUrl":  "https://www.nvidia.cn/content/dam/en-zz/Solutions/geforce/news/nvidia-rtx-games-engines-apps/dlss-rt-games-apps-overrides-zhCN.json?v0601",
    "sourceUpdated":  "2026 年 6 月 1 日",
    "dataUpdated":  "2026 年 6 月 1 日",
    "total":  1008
};

const RTX_TECH_FIELDS = [
    {
        "key":  "multiFrameGeneration",
        "label":  "DLSS 多帧生成",
        "shortLabel":  "多帧生成"
    },
    {
        "key":  "frameGeneration",
        "label":  "DLSS 帧生成",
        "shortLabel":  "帧生成"
    },
    {
        "key":  "superResolution",
        "label":  "DLSS 超分辨率",
        "shortLabel":  "超分辨率"
    },
    {
        "key":  "rayReconstruction",
        "label":  "DLSS 光线重建",
        "shortLabel":  "光线重建"
    },
    {
        "key":  "dlaa",
        "label":  "DLAA",
        "shortLabel":  "DLAA"
    },
    {
        "key":  "rayTracing",
        "label":  "光线追踪",
        "shortLabel":  "光追"
    },
    {
        "key":  "ai",
        "label":  "AI",
        "shortLabel":  "AI"
    }
];

const RTX_ITEMS = [
    {
        "id":  "007-初露锋芒-007-first-light-1",
        "name":  "007 初露锋芒 (007 First Light)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "83-2",
        "name":  "83",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "10bit-fx-notch-builder-3",
        "name":  "10bit FX Notch Builder",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "171-4",
        "name":  "171",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "3d-mark-5",
        "name":  "3D Mark",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "三维家-6",
        "name":  "三维家",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "51vr-51-city-os-7",
        "name":  "51VR 51 City OS",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "七日杀-7-days-to-die-8",
        "name":  "七日杀 (7 Days to Die)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "a-difficult-game-about-rolling-reuprise-9",
        "name":  "A Difficult Game About ROLLING - ReUpRise",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "瘟疫传说-安魂曲-a-plague-tale-requiem-10",
        "name":  "瘟疫传说：安魂曲 (A Plague Tale: Requiem)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "寂静之地-前方之路-a-quiet-place-the-road-ahead-11",
        "name":  "寂静之地：前方之路 (A Quiet Place: The Road Ahead)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "abject-abyss-12",
        "name":  "Abject Abyss",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "阿喀琉斯-不为人知的传奇-achilles-legends-untold-13",
        "name":  "阿喀琉斯：不为人知的传奇 (Achilles: Legends Untold)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "act-3d-lumion-14",
        "name":  "Act-3D Lumion",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "永无止境-ad-infinitum-15",
        "name":  "永无止境 (Ad Infinitum)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "adobe-after-effects-16",
        "name":  "Adobe After Effects",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "adobe-camera-raw-17",
        "name":  "Adobe Camera Raw",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "adobe-dimension-18",
        "name":  "Adobe Dimension",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "adobe-lightroom-classic-19",
        "name":  "Adobe Lightroom Classic",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "adobe-photoshop-20",
        "name":  "Adobe Photoshop",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "adobe-premiere-pro-21",
        "name":  "Adobe Premiere Pro",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "adobe-premiere-rush-22",
        "name":  "Adobe Premiere Rush",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "adobe-substance-3d-designer-23",
        "name":  "Adobe Substance 3D Designer",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "adobe-substance-3d-modeler-24",
        "name":  "Adobe Substance 3D Modeler",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "adobe-substance-3d-painter-25",
        "name":  "Adobe Substance 3D Painter",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "adobe-substance-3d-sampler-26",
        "name":  "Adobe Substance 3D Sampler",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "adobe-substance-3d-stager-27",
        "name":  "Adobe Substance 3D Stager",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "aew-fight-forever-28",
        "name":  "AEW: Fight Forever",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "a-i-l-a-29",
        "name":  "A.I.L.A",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "ai-limit-30",
        "name":  "AI Limit",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "永恒之塔-2-aion-2-31",
        "name":  "永恒之塔 2 (AION 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "airportsim-机场模拟器-32",
        "name":  "AirportSim (机场模拟器)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "机器双雄-akimbot-33",
        "name":  "机器双雄 (Akimbot)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "心灵杀手重制版-alan-wake-remastered-34",
        "name":  "心灵杀手重制版 (Alan Wake Remastered)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "心灵杀手-2-alan-wake-2-35",
        "name":  "心灵杀手 2 (Alan Wake 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "NV, T",
                     "dlaa":  "Yes",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "异形-盗贼入侵进化版-alien-rogue-incursion-part-one-evolved-edition-36",
        "name":  "异形：盗贼入侵进化版 (Alien: Rogue Incursion - Part One: Evolved Edition)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "alone-in-the-dark-37",
        "name":  "Alone In The Dark",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "aippt-38",
        "name":  "AIPPT",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "altair-inspire-studio-render-formerly-known-as-evolve-39",
        "name":  "Altair Inspire Studio/Render (formerly known as Evolve)",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "altair-inspire-cfd-40",
        "name":  "Altair Inspire-CFD",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "altair-thea-render-41",
        "name":  "Altair Thea Render",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "救护车生活-救护员模拟器-ambulance-life-a-paramedic-simulator-42",
        "name":  "救护车生活：救护员模拟器 (Ambulance Life: A Paramedic Simulator)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "邪恶之中-amid-evil-43",
        "name":  "邪恶之中 (AMID EVIL)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "恐惧解剖-anatomy-of-fear-44",
        "name":  "恐惧解剖 (Anatomy Of Fear)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "animal-logic-glimpse-45",
        "name":  "Animal Logic Glimpse",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "动物世界生存-animalia-survival-46",
        "name":  "动物世界生存 (Animalia Survival)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "纪元-117-罗马和平-anno-117-pax-romana-47",
        "name":  "纪元 117：罗马和平 (Anno 117: Pax Romana)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "ansys-avxcelerate-sensors-48",
        "name":  "ANSYS AVxcelerate Sensors",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "ansys-discovery-live-49",
        "name":  "ANSYS Discovery Live",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "ansys-him-50",
        "name":  "ANSYS HIM",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "ansys-speos-51",
        "name":  "ANSYS SPEOS",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "ansys-vrxperience-for-hmi-and-perceived-quality-52",
        "name":  "ANSYS VRXPERIENCE for HMI and Perceived Quality",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "圣歌-anthem-53",
        "name":  "圣歌 (Anthem)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "aphelion-54",
        "name":  "Aphelion",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "apocalypse-2-0-edition-55",
        "name":  "Apocalypse: 2.0 Edition",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "酷玩乱斗-arcadegeddon-56",
        "name":  "酷玩乱斗 (Arcadegeddon)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "arc-raiders-57",
        "name":  "ARC Raiders",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "arena-breakers-58",
        "name":  "Arena Breakers",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "暗区突围-无限-arena-breakout-infinite-59",
        "name":  "暗区突围：无限 (Arena Breakout: Infinite)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "明日方舟-终末地-arknights-endfield-60",
        "name":  "明日方舟：终末地. (Arknights: Endfield)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "方舟-生存进化-ark-survival-ascended-61",
        "name":  "方舟：生存进化 (ARK: Survival Ascended)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "armory-armorpaint-62",
        "name":  "Armory ArmorPaint",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "阿隆的冒险-aron-s-adventure-63",
        "name":  "阿隆的冒险 (Aron\u0027s Adventure)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "ash-rust-64",
        "name":  "Ash \u0026 Rust",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "创世灰烬-ashes-of-creation-65",
        "name":  "创世灰烬 (Ashes of Creation)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "ashgard-infinity-mask-66",
        "name":  "ASHGARD: Infinity Mask",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "刺客信条-幻景-assassin-s-creed-mirage-67",
        "name":  "刺客信条：幻景 (Assassin\u0027s Creed Mirage)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "刺客信条-影-assassin-s-creed-shadows-68",
        "name":  "刺客信条：影 (Assassin\u0027s Creed Shadows)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "神力科莎-竞速-assetto-corsa-competizione-69",
        "name":  "神力科莎：竞速 (Assetto Corsa Competizione)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "神力科莎-evo-assetto-corsa-evo-70",
        "name":  "神力科莎 EVO (Assetto Corsa EVO)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "神力科莎-拉力-assetto-corsa-rally-71",
        "name":  "神力科莎：拉力(Assetto Corsa Rally)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "astral-tracks-72",
        "name":  "Astral Tracks",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "astrometica-73",
        "name":  "Astrometica",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "原子之心-atomic-heart-74",
        "name":  "原子之心 (Atomic Heart)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "aunt-fatima-75",
        "name":  "Aunt Fatima - خالة فاطمة",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "autodesk-arnold-76",
        "name":  "Autodesk Arnold",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "autodesk-flame-premium-77",
        "name":  "Autodesk Flame Premium",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "autodesk-inventor-78",
        "name":  "Autodesk Inventor",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "autodesk-vred-79",
        "name":  "Autodesk VRED",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "automate-it-factory-puzzle-80",
        "name":  "Automate It: Factory Puzzle",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "avaout-81",
        "name":  "AVaOut",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "阿凡达-潘多拉边境-avatar-frontiers-of-pandora-82",
        "name":  "阿凡达：潘多拉边境 (Avatar: Frontiers of Pandora)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "avermedia-camengine-83",
        "name":  "AverMedia CamEngine",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "avermedia-voiceengine-84",
        "name":  "AverMedia VoiceEngine",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "宣誓-avowed-85",
        "name":  "宣誓 (Avowed)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "远离-生存系列-away-the-survival-series-86",
        "name":  "远离：生存系列 (AWAY: The Survival Series)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "喋血复仇-back-4-blood-87",
        "name":  "喋血复仇 (Back 4 Blood)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "后室-一起逃脱-backrooms-escape-together-88",
        "name":  "后室：一起逃脱 (Backrooms: Escape Together)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "后室-rec-backrooms-rec-89",
        "name":  "后室 Rec (Backrooms Rec.)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "backyard-ai-90",
        "name":  "Backyard.ai",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "巴克莫诺-bakemono-91",
        "name":  "巴克莫诺 (Bakemono)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "博德之门-3-baldur-s-gate-3-92",
        "name":  "博德之门 3 (Baldur\u0027s Gate 3)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "东方-平野孤鸿-ballads-of-hongye-93",
        "name":  "东方：平野孤鸿 (Ballads of Hongye)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "驱灵者-新伊甸的幽灵-banishers-ghosts-of-new-eden-94",
        "name":  "驱灵者：新伊甸的幽灵 (Banishers: Ghosts of New Eden)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "巴斯蒂德-bastide-95",
        "name":  "巴斯蒂德 (Bastide)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "巴特拉-家在何方-batora-lost-haven-96",
        "name":  "巴特拉: 家在何方 (Batora: Lost Haven)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "战地风云-2042-battlefield-2042-97",
        "name":  "战地风云 2042 (Battlefield 2042)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "战地风云-5-battlefield-v-98",
        "name":  "战地风云 5 (Battlefield V)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "战地风云-6-battlefield-6-99",
        "name":  "战地风云 6 (Battlefield 6)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "be-live-100",
        "name":  "Be.Live",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "太空熊-bears-in-space-101",
        "name":  "太空熊 (Bears In Space)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "beast-false-prophet-102",
        "name":  "BEAST: False Prophet",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "颂钟长鸣-bellwright-103",
        "name":  "颂钟长鸣 (Bellwright)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "bentley-systems-contextcapture-104",
        "name":  "Bentley Systems ContextCapture",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "bentley-systems-lumenrt-connect-105",
        "name":  "Bentley Systems LumenRT Connect",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "bentley-systems-microstation-106",
        "name":  "Bentley Systems MicroStation",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "bentley-systems-synchro-pro-107",
        "name":  "Bentley Systems SYNCHRO PRO",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "bentoml-openllm-108",
        "name":  "BentoML OpenLLM",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "深入敌后-2-beyond-enemy-lines-2-109",
        "name":  "深入敌后 2 (Beyond Enemy Lines 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "beyond-hanwell-110",
        "name":  "Beyond Hanwell",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "blackmagic-davinci-resolve-111",
        "name":  "Blackmagic DaVinci Resolve",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "黑神话-悟空-black-myth-wukong-112",
        "name":  "黑神话：悟空 (Black Myth: Wukong)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "黑色一号-血盟兄弟-black-one-blood-brothers-113",
        "name":  "黑色一号：血盟兄弟 (Black One Blood Brothers)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "女巫悲歌-blacktail-114",
        "name":  "女巫悲歌 (BLACKTAIL)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "烈焰之刃-blades-of-fire-115",
        "name":  "烈焰之刃 (Blades of Fire)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "枯瑟信仰-放逐者-bleak-faith-forsaken-116",
        "name":  "枯瑟信仰：放逐者 (Bleak Faith: Forsaken)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "blender-institute-s-blender-117",
        "name":  "Blender Institute\u0027s Blender",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "blind-fate-edo-no-yami-118",
        "name":  "Blind Fate: Edo no Yami",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "blood-bowl-3-119",
        "name":  "Blood Bowl 3",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "bodies-of-water-vr-120",
        "name":  "Bodies of Water VR",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "bodycam-121",
        "name":  "Bodycam",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "bootstrap-island-122",
        "name":  "Bootstrap Island",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "无主之地-4-borderlands-4-123",
        "name":  "无主之地 4 (Borderlands 4)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "boti-byteland-overclocked-124",
        "name":  "Boti: Byteland Overclocked",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "brave-web-browser-125",
        "name":  "Brave Web Browser",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "bred-university-of-applied-sciences-wisprenderer-126",
        "name":  "Bred University of Applied Sciences WispRenderer",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "砖托邦-brickadia-127",
        "name":  "砖托邦 (Brickadia)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "光明记忆-bright-memory-128",
        "name":  "光明记忆 (Bright Memory)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "光明记忆-无限-bright-memory-infinite-129",
        "name":  "光明记忆：无限 (Bright Memory: Infinite)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "broken-pieces-130",
        "name":  "Broken Pieces",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "兄弟-双子传说-brothers-a-tale-of-two-sons-重制版-131",
        "name":  "“兄弟：双子传说 (Brothers: A Tale of Two Sons)”重制版",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "buildmedia-realspace-132",
        "name":  "Buildmedia Realspace",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "bus-bound-133",
        "name":  "Bus Bound",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "bum-revenge-134",
        "name":  "Bum: Revenge",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "巴士模拟-21-bus-simulator-21-135",
        "name":  "巴士模拟 21 (Bus Simulator 21)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "使命召唤-黑色行动-6-call-of-duty-black-ops-6-136",
        "name":  "使命召唤：黑色行动 6 (Call of Duty: Black Ops 6)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "使命召唤-黑色行动-7-call-of-duty-black-ops-7-137",
        "name":  "使命召唤：黑色行动 7 (Call of Duty: Black Ops 7)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "使命召唤-黑色行动冷战-call-of-duty-black-ops-cold-war-138",
        "name":  "使命召唤：黑色行动冷战 (Call of Duty: Black Ops Cold War)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "使命召唤-现代战争-call-of-duty-modern-warfare-139",
        "name":  "使命召唤：现代战争 (Call of Duty: Modern Warfare)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "使命召唤-现代战争-2-call-of-duty-modern-warfare-ii-140",
        "name":  "使命召唤：现代战争 2 (Call of Duty: Modern Warfare II)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "使命召唤-现代战争-iii-2023-call-of-duty-modern-warfare-iii-141",
        "name":  "使命召唤：现代战争 III 2023 (Call of Duty: Modern Warfare III)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "使命召唤-先锋-call-of-duty-vanguard-142",
        "name":  "使命召唤：先锋 (Call of Duty: Vanguard)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "使命召唤-战争地带-call-of-duty-warzone-2020-143",
        "name":  "使命召唤：战争地带 (Call of Duty: Warzone 2020)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "使命召唤-战争地带-2-call-of-duty-warzone-2022-144",
        "name":  "使命召唤：战争地带 2 (Call of Duty: Warzone 2022)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "剪映-145",
        "name":  "剪映",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "神奇英侠-capes-146",
        "name":  "神奇英侠 (Capes)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "car-dealer-simulator-prologue-early-days-147",
        "name":  "Car Dealer Simulator: Prologue - Early Days",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "恶煞车手-rogue-shift-carmageddon-rogue-shift-148",
        "name":  "恶煞车手：Rogue Shift (Carmageddon: Rogue Shift)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "carpathian-survival-149",
        "name":  "Carpathian Survival",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "casa-caballero-150",
        "name":  "Casa Caballero",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "cebas-finalrender-151",
        "name":  "Cebas finalRender",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "celsys-clip-studio-paint-152",
        "name":  "Celsys Clip Studio Paint",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "chained-backrooms-153",
        "name":  "Chained Backrooms",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "chaos-enscape-154",
        "name":  "Chaos Enscape",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "chaos-v-ray-155",
        "name":  "Chaos V-Ray",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "chaos-vantage-156",
        "name":  "Chaos Vantage",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "",
                     "rayTracing":  "路径追踪",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "被黑暗追赶-chased-by-darkness-157",
        "name":  "被黑暗追赶 (Chased By Darkness)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "切尔诺贝利人-chernobylite-158",
        "name":  "切尔诺贝利人 (Chernobylite)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "chernobylite-2-exclusion-zone-159",
        "name":  "Chernobylite 2: Exclusion Zone",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "chief-architect-160",
        "name":  "Chief Architect",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "chip-n-clawz-vs-the-brainioids-161",
        "name":  "Chip ‘n Clawz vs. The Brainioids",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "骑士精神-2-chivalry-2-162",
        "name":  "骑士精神 2 (Chivalry 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "查尔斯小火车-choo-choo-charles-163",
        "name":  "查尔斯小火车 (Choo-Choo Charles)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "和声-chorus-164",
        "name":  "和声 (Chorus)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "chronicles-of-sagrea-165",
        "name":  "Chronicles Of Sagrea",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "计时结构-序幕-chronotecture-the-eprologue-166",
        "name":  "计时结构:序幕 (ChronoTecture: The Eprologue)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "cimpatico-studios-inc-cimpatico-streaming-production-167",
        "name":  "Cimpatico Studios, Inc. - Cimpatico Streaming Production",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "cions-of-vega-168",
        "name":  "Cions of Vega",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "都市-天际线-2-cities-skylines-ii-169",
        "name":  "都市：天际线 2 (Cities: Skylines II)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "光与影-33-号远征队-clair-obscur-expedition-33-170",
        "name":  "光与影：33 号远征队 (Clair Obscur: Expedition 33)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "code-alkonost-awakening-of-evil-171",
        "name":  "Code Alkonost: Awakening of Evil",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "噬血代码-ii-code-vein-ii-172",
        "name":  "噬血代码 II (Code Vein II)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "盟军敢死队-起源-commandos-origins-173",
        "name":  "盟军敢死队：起源 (Commandos: Origins)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "流放者柯南增强版-conan-exiles-enhanced-174",
        "name":  "流放者柯南增强版(Conan Exiles Enhanced)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "战意-conqueror-s-blade-175",
        "name":  "战意 (Conqueror\u0027s Blade)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "continue-dev-176",
        "name":  "Continue.dev",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "控制-control-177",
        "name":  "控制 (Control)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "烹饪模拟器-2-cooking-simulator-2-better-together-178",
        "name":  "烹饪模拟器 2 (Cooking Simulator 2: Better Together)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "coreldraw-179",
        "name":  "CorelDRAW",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "corel-painter-180",
        "name":  "Corel Painter",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "corel-paintshop-pro-181",
        "name":  "Corel Paintshop Pro",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "corsair-gaming-inc-icue-software-182",
        "name":  "Corsair Gaming, Inc. - iCUE Software",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "crewai-183",
        "name":  "CrewAI",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "法外枭雄-滚石城-crime-boss-rockay-city-184",
        "name":  "法外枭雄：滚石城 (Crime Boss: Rockay City)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "红色沙漠-crimson-desert-185",
        "name":  "红色沙漠 (Crimson Desert)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "时间旅者-重生曙光-cronos-the-new-dawn-186",
        "name":  "时间旅者：重生曙光 (Cronos: The New Dawn)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "创世战车-crossout-187",
        "name":  "创世战车 (Crossout)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "王冠模拟器-皇家生活模拟-crown-simulator-royal-life-simulation-188",
        "name":  "王冠模拟器 - 皇家生活模拟(Crown Simulator - Royal Life Simulation)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "crowz-189",
        "name":  "CROWZ",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "crsed-f-o-a-d-190",
        "name":  "CRSED F.O.A.D",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "孤岛危机2-重制版-crysis-2-remastered-191",
        "name":  "孤岛危机2:重制版 (Crysis 2 Remastered)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "孤岛危机3-重制版-crysis-3-remastered-192",
        "name":  "孤岛危机3:重制版 (Crysis 3 Remastered)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "孤岛危机-重制版-crysis-remastered-193",
        "name":  "孤岛危机:重制版 (Crysis Remastered)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "克苏鲁-恐怖深渊-cthulhu-the-cosmic-abyss-194",
        "name":  "克苏鲁：恐怖深渊 (Cthulhu: The Cosmic Abyss)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "cursed-deal-195",
        "name":  "Cursed Deal",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "cursor-196",
        "name":  "Cursor",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "cyberlink-powerdirector-197",
        "name":  "CyberLink PowerDirector",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "cyberlink-powerdvd-198",
        "name":  "CyberLink PowerDVD",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "赛博朋克-2077-cyberpunk-2077-199",
        "name":  "赛博朋克 2077 (Cyberpunk 2077)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "Yes",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "cyubevr-200",
        "name":  "cyubeVR",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "d5渲染器-201",
        "name":  "D5渲染器",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "NV, T",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "dabanjia-bim-202",
        "name":  "Dabanjia BIM",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "达喀尔拉力赛-dakar-desert-rally-203",
        "name":  "达喀尔拉力赛 (Dakar Desert Rally)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "至暗时刻-dark-and-darker-204",
        "name":  "至暗时刻 (Dark and Darker)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "darwin-s-paradox-205",
        "name":  "Darwin\u0027s Paradox!",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "dassault-systemes-3dexcite-deltagen-206",
        "name":  "Dassault Systemes 3DEXCITE DELTAGEN",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "dassault-syst-mes-3dvia-homebyme-207",
        "name":  "Dassault Systèmes 3DVIA HomeByMe",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "dassault-systemes-catia-3dexperience-208",
        "name":  "Dassault Systemes CATIA 3DEXPERIENCE",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "dassault-systemes-catia-live-rendering-209",
        "name":  "Dassault Systemes CATIA Live Rendering",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "dassault-systemes-solidworks-corp-solidworks-visualize-210",
        "name":  "Dassault Systemes SolidWorks Corp. SOLIDWORKS Visualize",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "戴维-琼斯-davy-x-jones-211",
        "name":  "戴维·琼斯 (DAVY x JONES)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "dawn-break-212",
        "name":  "Dawn Break",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "dawn-of-defiance-213",
        "name":  "Dawn of Defiance",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "白日梦-被遗忘的悲伤-daydream-forgotten-sorrow-214",
        "name":  "白日梦：被遗忘的悲伤 (Daydream: Forgotten Sorrow)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "白日梦魇-沙堡-1994-daymare-1994-sandcastle-215",
        "name":  "白日梦魇：沙堡 1994 (Daymare: 1994 Sandcastle)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "daz3d-daz-studio-216",
        "name":  "Daz3D Daz Studio",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "dcs-world-217",
        "name":  "DCS World",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "dead-abyss-218",
        "name":  "Dead Abyss",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "死亡迪斯科-dead-as-disco-219",
        "name":  "死亡迪斯科 (Dead as Disco)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "deadlock-220",
        "name":  "Deadlock",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "丧尸围城-豪华复刻版-dead-rising-deluxe-remaster-221",
        "name":  "丧尸围城：豪华复刻版 (Dead Rising Deluxe Remaster)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "死亡信号-dead-signal-222",
        "name":  "死亡信号 (Dead Signal)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "死亡空间-dead-space-223",
        "name":  "死亡空间 (Dead Space)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "死亡链接-deadlink-224",
        "name":  "死亡链接 (Deadlink)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "遗映-dead-take-225",
        "name":  "遗映 (Dead Take)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "deadcam-analog-survival-horror-226",
        "name":  "DEADCAM | ANALOG • SURVIVAL • HORROR",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "死域-rogue-deadzone-rogue-227",
        "name":  "死域 Rogue (Deadzone: Rogue)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "deathground-228",
        "name":  "Deathground",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "死亡境界-death-realm-229",
        "name":  "死亡境界 (Death Realm)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "向生而死-death-relives-230",
        "name":  "向生而死 (Death Relives)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "NV, T",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "死亡冲刺-66-deathsprint-66-231",
        "name":  "死亡冲刺 66 (DeathSprint 66)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "死亡搁浅-death-stranding-232",
        "name":  "死亡搁浅 (Death Stranding)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "死亡搁浅-导演剪辑版-death-stranding-director-s-cut-233",
        "name":  "死亡搁浅:导演剪辑版 (Death Stranding Director\u0027s Cut)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "死亡搁浅-2-冥滩之上-death-stranding-2-on-the-beach-234",
        "name":  "死亡搁浅 2：冥滩之上(DEATH STRANDING 2: ON THE BEACH)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "死亡循环-deathloop-235",
        "name":  "死亡循环 (Deathloop)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "黑暗逃生-2-deceit-2-236",
        "name":  "黑暗逃生 2 (Deceit 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "deceive-inc-237",
        "name":  "Deceive Inc.",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "deedlee-doo-carkour-238",
        "name":  "Deedlee Doo! Carkour!",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "深岩银河-deep-rock-galactic-239",
        "name":  "深岩银河 (Deep Rock Galactic)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "深岩银河-异动核心-deep-rock-galactic-rogue-core-240",
        "name":  "深岩银河：异动核心 (Deep Rock Galactic: Rogue Core)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "deepstates-vr-241",
        "name":  "DeepStates (VR)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "火星孤征-deliver-us-mars-242",
        "name":  "火星孤征 (Deliver Us Mars)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "飞向月球-deliver-us-the-moon-243",
        "name":  "飞向月球 (Deliver Us The Moon)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "三角洲行动-delta-force-244",
        "name":  "三角洲行动 (Delta Force)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "三角洲特种部队-黑鹰坠落-delta-force-black-hawk-down-campaign-245",
        "name":  "三角洲特种部队：黑鹰坠落 (Delta Force: Black Hawk Down Campaign)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "恶魔学家-demonologist-246",
        "name":  "恶魔学家 (Demonologist)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "denchisoft-vtube-studio-247",
        "name":  "DenchiSoft VTube Studio",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "derivative-touchdesigner-248",
        "name":  "Derivative TouchDesigner",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "desordre-益智游戏冒险-desordre-a-puzzle-game-adventure-249",
        "name":  "DESORDRE：益智游戏冒险 (DESORDRE: A Puzzle Game Adventure)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "毁灭全人类-2-重新探测-destroy-all-humans-2-reprobed-250",
        "name":  "毁灭全人类 2 - 重新探测 (Destroy All Humans! 2 - Reprobed)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "desynced-autonomous-colony-simulator-251",
        "name":  "Desynced: Autonomous Colony Simulator",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "暗黑破坏神-2-狱火重生-diablo-ii-resurrected-252",
        "name":  "暗黑破坏神 2：狱火重生 (Diablo II: Resurrected)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "暗黑破坏神-iv-diablo-iv-253",
        "name":  "暗黑破坏神 IV (Diablo IV)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "命悬一刃-die-by-the-blade-254",
        "name":  "命悬一刃 (Die By The Blade)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "digital-anarchy-ai-denoiser-255",
        "name":  "Digital Anarchy AI Denoiser",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "direct-contact-256",
        "name":  "DIRECT CONTACT",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "8020-号指令-directive-8020-257",
        "name":  "8020 号指令 (Directive 8020)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "NV, T",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "尘埃-5-dirt-5-258",
        "name":  "尘埃 5 (DiRT 5)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "discord-259",
        "name":  "Discord",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "doll-imposter-260",
        "name":  "Doll Imposter",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "杜蒙-dolmen-261",
        "name":  "杜蒙 (Dolmen)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "domino-simulator-262",
        "name":  "Domino Simulator",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "don-t-scream-263",
        "name":  "DON\u0027T SCREAM",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "毁灭战士-永恒-doom-eternal-264",
        "name":  "毁灭战士：永恒 (DOOM Eternal)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "毁灭战士-黑暗时代-doom-the-dark-ages-265",
        "name":  "毁灭战士：黑暗时代 (DOOM: The Dark Ages)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "豆包电脑版-266",
        "name":  "豆包电脑版",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "斗鱼直播助手-267",
        "name":  "斗鱼直播助手",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "斗鱼-pc-客户端-268",
        "name":  "斗鱼 PC 客户端",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "龙腾世纪-影障守护者-dragon-age-the-veilguard-269",
        "name":  "龙腾世纪：影障守护者 (Dragon Age: The Veilguard)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "龙之信条-2-dragon-s-dogma-2-270",
        "name":  "龙之信条 2 (Dragon\u0027s Dogma 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "龙的传人-孤旅-dragonkin-the-banished-271",
        "name":  "龙的传人：孤旅 (Dragonkin: The Banished)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "dreadzone-272",
        "name":  "DREADZONE",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "双重宇宙-dual-universe-273",
        "name":  "双重宇宙 (Dual Universe)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "鸭界争锋-duckside-274",
        "name":  "鸭界争锋 (DUCKSIDE)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "二重螺旋-duet-night-abyss-275",
        "name":  "二重螺旋 (Duet Night Abyss)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "沙丘-觉醒-dune-awakening-276",
        "name":  "沙丘：觉醒 (Dune: Awakening)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "dungeonborne-277",
        "name":  "Dungeonborne",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "dxo-photolab-278",
        "name":  "DxO PhotoLab",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "消逝的光芒-困兽-dying-light-the-beast-279",
        "name":  "消逝的光芒：困兽 (Dying Light: The Beast)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "消逝的光芒-2-人与仁之战-dying-light-2-stay-human-280",
        "name":  "消逝的光芒 2：人与仁之战 (Dying Light 2 Stay Human)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "真-三国无双-起源-dynasty-warriors-origins-281",
        "name":  "真・三国无双：起源(DYNASTY WARRIORS: ORIGINS)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "ea-sports-wrc-282",
        "name":  "EA Sports WRC",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "echoes-of-the-end-enhanced-edition-283",
        "name":  "Echoes of the End: Enhanced Edition",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "echo-point-nova-284",
        "name":  "Echo Point Nova",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "永恒边缘-edge-of-eternity-285",
        "name":  "永恒边缘 (Edge of Eternity)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "临渊觉醒-edge-of-the-abyss-awaken-286",
        "name":  "临渊觉醒 (Edge Of The Abyss Awaken)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "eldegarde-原名为-遗产-钢铁与巫术-287",
        "name":  "Eldegarde (原名为《遗产：钢铁与巫术》)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "艾尔登法环-elden-ring-288",
        "name":  "艾尔登法环 (Elden Ring)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "electronic-market-simulator-289",
        "name":  "Electronic Market Simulator",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "elgato-camera-hub-290",
        "name":  "Elgato Camera Hub",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "elgato-wavelink-291",
        "name":  "Elgato WaveLink",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "蚂蚁帝国-empire-of-the-ants-292",
        "name":  "蚂蚁帝国 (Empire of the Ants)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "emotionless-the-last-ticket-293",
        "name":  "EMOTIONLESS: The Last Ticket",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "至高天-empyreal-294",
        "name":  "至高天 (Empyreal)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "帝国霸业-银河生存-empyrion-galactic-survival-295",
        "name":  "帝国霸业-银河生存 (Empyrion - Galactic Survival)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "从军-enlisted-296",
        "name":  "从军 (Enlisted)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "雾锁王国-enshrouded-297",
        "name":  "雾锁王国 (Enshrouded)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "艾诺提亚-失落之歌-enotria-the-last-song-298",
        "name":  "艾诺提亚：失落之歌 (Enotria: The Last Song)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "entity-the-black-day-299",
        "name":  "ENTITY: THE BLACK DAY",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "以弗所-ephesus-300",
        "name":  "以弗所 (Ephesus)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "epic-games-twinmotion-ue-301",
        "name":  "Epic Games\u0027 Twinmotion-UE",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "epic-games-unreal-engine-4-5-302",
        "name":  "Epic Games\u0027 Unreal Engine (4 \u0026 5)",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "逃离那落迦-escape-from-naraka-303",
        "name":  "逃离那落迦 (Escape From Naraka)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "逃离塔科夫-escape-from-tarkov-304",
        "name":  "逃离塔科夫 (Escape From Tarkov)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "esi-group-ic-ido-305",
        "name":  "ESI Group IC.IDO",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "esri-arcgis-pro-306",
        "name":  "ESRI ArcGIS Pro",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "永恒之链-eternal-strands-307",
        "name":  "永恒之链 (Eternal Strands)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "欧陆风云5-europa-universalis-v-308",
        "name":  "欧陆风云5 (Europa Universalis V)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "eve-frontier-309",
        "name":  "EVE Frontier",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "星战前夜-eve-online-310",
        "name":  "星战前夜(EVE Online)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "永恒空间-2-everspace-2-311",
        "name":  "永恒空间 2 (Everspace 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "鬼玩人-游戏版-evil-dead-the-game-312",
        "name":  "鬼玩人：游戏版 (Evil Dead: The Game)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "暗邪西部-evil-west-313",
        "name":  "暗邪西部 (Evil West)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "演灭-evotinction-314",
        "name":  "演灭 (EVOTINCTION)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "exfil-315",
        "name":  "EXFIL",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "exit-from-316",
        "name":  "Exit From",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "ezbench-317",
        "name":  "EzBench",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "facerig-animaze-318",
        "name":  "Facerig Animaze",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "遥遥西土-far-far-west-319",
        "name":  "遥遥西土 (Far Far West)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "暗影火炬城-f-i-s-t-forged-in-shadow-torch-320",
        "name":  "暗影火炬城 (F.I.S.T.: Forged In Shadow Torch)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "f1-2020-321",
        "name":  "F1 2020",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "f1-2021-322",
        "name":  "F1 2021",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "f1-22-323",
        "name":  "F1 22",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "f1-23-324",
        "name":  "F1 23",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "f1-24-325",
        "name":  "F1 24",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "f1-25-326",
        "name":  "F1 25",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "Yes",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "f1-车队经理-2023-f1-manager-2023-327",
        "name":  "F1 车队经理 2023 (F1 Manager 2023)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "f1-车队经理-2024-f1-manager-2024-328",
        "name":  "F1 车队经理 2024 (F1 Manager 2024)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "fall-balance-ball-329",
        "name":  "Fall Balance Ball",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "孤岛惊魂-6-far-cry-6-330",
        "name":  "孤岛惊魂 6 (Far Cry 6)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "法拉第协议-faraday-protocol-331",
        "name":  "法拉第协议 (Faraday Protocol)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "远光-84-farlight-84-332",
        "name":  "远光 84 (Farlight 84)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "模拟农场-22-farming-simulator-22-333",
        "name":  "模拟农场 22 (Farming Simulator 22)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "模拟农场-25-farming-simulator-25-334",
        "name":  "模拟农场 25 (Farming Simulator 25)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "fbc-firebreak-335",
        "name":  "FBC: Firebreak",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "Yes",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "fera-破碎部落-fera-the-sundered-tribes-336",
        "name":  "Fera: 破碎部落 (Fera: The Sundered Tribes)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "最终幻想-vii-重生-final-fantasy-vii-rebirth-337",
        "name":  "最终幻想 VII：重生 (FINAL FANTASY VII REBIRTH)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "最终幻想-xiv-final-fantasy-xiv-online-338",
        "name":  "最终幻想 XIV (FINAL FANTASY XIV Online)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "最终幻想-xv-final-fantasy-xv-339",
        "name":  "最终幻想 XV (Final Fantasy XV)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "最终幻想-xvi-final-fantasy-xvi-340",
        "name":  "最终幻想 XVI (FINAL FANTASY XVI)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "finnish-cottage-simulator-341",
        "name":  "Finnish Cottage Simulator",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "firefighting-simulator-ignite-342",
        "name":  "Firefighting Simulator: Ignite",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "模拟消防英豪-firefighting-simulator-the-squad-343",
        "name":  "模拟消防英豪 (Firefighting Simulator - The Squad)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "苍穹乾坤-firmament-344",
        "name":  "苍穹乾坤 (Firmament)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "玩具熊的五夜后宫-安全漏洞-five-nights-at-freddy-s-security-breach-345",
        "name":  "玩具熊的五夜后宫:安全漏洞 (Five Nights at Freddy\u0027s: Security Breach)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "燧石枪-黎明之围-flintlock-the-siege-of-dawn-346",
        "name":  "燧石枪：黎明之围 (Flintlock: The Siege of Dawn)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "flipscapes-347",
        "name":  "Flipscapes",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "fobia-st-dinfna-hotel-348",
        "name":  "Fobia - St. Dinfna Hotel",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "forest-doesn-t-care-349",
        "name":  "Forest Doesn’t Care",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "永恒天空-forever-skies-350",
        "name":  "永恒天空 (Forever Skies)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "宽恕我-神父-2-forgive-me-father-2-351",
        "name":  "宽恕我 神父 2 (Forgive Me Father 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "荣耀战魂-for-honor-352",
        "name":  "荣耀战魂 (For Honor)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "forspoken-353",
        "name":  "Forspoken",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "堡垒之夜-fortnite-354",
        "name":  "堡垒之夜 (Fortnite)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "索利斯堡-fort-solis-355",
        "name":  "索利斯堡 (Fort Solis)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "极限竞速-地平线-5-forza-horizon-5-356",
        "name":  "极限竞速：地平线 5 (Forza Horizon 5)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "极限竞速-地平线-6-forza-horizon-6-357",
        "name":  "极限竞速：地平线 6 (Forza Horizon 6)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "极限竞速-forza-motorsport-358",
        "name":  "极限竞速 (Forza Motorsport)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "foundry-modo-359",
        "name":  "Foundry MODO",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "界外狂潮-fragpunk-360",
        "name":  "界外狂潮 (FragPunk)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "冰汽时代-2-frostpunk-2-361",
        "name":  "冰汽时代 2 (Frostpunk 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "冰封之焰-frozen-flame-362",
        "name":  "冰封之焰 (Frozen Flame)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "frozenheim-363",
        "name":  "Frozenheim",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "funko-fusion-364",
        "name":  "Funko Fusion",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "fusion-quill-365",
        "name":  "Fusion Quill",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "game-of-thrones-kingsroad-366",
        "name":  "Game of Thrones: Kingsroad",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "舍伍德侠盗团-gangs-of-sherwood-367",
        "name":  "舍伍德侠盗团 (Gangs of Sherwood)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "gears-of-war-reloaded-368",
        "name":  "Gears of War: Reloaded",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "get-stuffed-369",
        "name":  "Get Stuffed!",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "新倩女幽魂-ghost-370",
        "name":  "新倩女幽魂 (Ghost)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "捉鬼敢死队-灵魂释放-ghostbusters-spirits-unleashed-371",
        "name":  "捉鬼敢死队：灵魂释放 (Ghostbusters: Spirits Unleashed)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "对马岛之魂-导演剪辑版-ghost-of-tsushima-director-s-cut-372",
        "name":  "对马岛之魂：导演剪辑版 (Ghost of Tsushima: Director’s Cut)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "幽灵行者-ghostrunner-373",
        "name":  "幽灵行者 (Ghostrunner)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "幽灵行者-2-ghostrunner-2-374",
        "name":  "幽灵行者 2 (Ghostrunner 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "幽灵线-东京-ghostwire-tokyo-375",
        "name":  "幽灵线：东京 (Ghostwire: Tokyo)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "glodon-bimmaker-376",
        "name":  "Glodon BIMMaker",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "goat-simulator-remastered-377",
        "name":  "Goat Simulator: Remastered",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "破神者-godbreakers-378",
        "name":  "破神者(GODBREAKERS)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "战神-god-of-war-379",
        "name":  "战神 (God of War)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "战神-诸神黄昏-god-of-war-ragnar-k-380",
        "name":  "战神：诸神黄昏 (God of War Ragnarök)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "众神陨落-godfall-381",
        "name":  "众神陨落 (Godfall)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "goofy-gorillas-382",
        "name":  "Goofy Gorillas",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "google-chrome-rtx-video-超分辨率-383",
        "name":  "Google Chrome (RTX Video 超分辨率)",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "戈德-gord-384",
        "name":  "戈德 (Gord)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "哥里-可爱大灭绝-gori-cuddly-carnage-385",
        "name":  "哥里：可爱大灭绝 (Gori: Cuddly Carnage)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "哥谭骑士-gotham-knights-386",
        "name":  "哥谭骑士 (Gotham Knights)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "grand-emprise-time-travel-survival-387",
        "name":  "Grand Emprise: Time Travel Survival",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "侠盗猎车手-3-终极版-grand-theft-auto-iii-the-definitive-edition-388",
        "name":  "侠盗猎车手 3 - 终极版 (Grand Theft Auto III - The Definitive Edition)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "侠盗猎车手-圣安地列斯-终极版-grand-theft-auto-san-andreas-the-definitive-edition-389",
        "name":  "侠盗猎车手：圣安地列斯 - 终极版 (Grand Theft Auto: San Andreas - The Definitive Edition)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "侠盗猎车手-罪恶都市-终极版-grand-theft-auto-vice-city-the-definitive-edition-390",
        "name":  "侠盗猎车手：罪恶都市 - 终极版 (Grand Theft Auto: Vice City - The Definitive Edition)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "侠盗猎车手-v-增强版-grand-theft-auto-v-enhanced-391",
        "name":  "侠盗猎车手 V 增强版 (Grand Theft Auto V Enhanced)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "灰区战争-gray-zone-warfare-392",
        "name":  "灰区战争 (Gray Zone Warfare)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "贪婪之秋-2-垂死世界-greedfall-ii-the-dying-world-393",
        "name":  "贪婪之秋 2：垂死世界 (GreedFall II: The Dying World)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "greedland-394",
        "name":  "Greedland",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "疾速摩爪-gripper-395",
        "name":  "疾速摩爪 (Gripper)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "地面部队-ground-branch-396",
        "name":  "地面部队 (Ground Branch)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "古剑奇谭网络版-gu-jian-qi-tan-online-397",
        "name":  "古剑奇谭网络版 (Gu Jian Qi Tan Online)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "gun-jam-398",
        "name":  "GUN JAM",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "铳墓-g-o-r-e-gungrave-g-o-r-e-399",
        "name":  "铳墓 G.O.R.E (Gungrave G.O.R.E)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "半条命-2-rtx-版-demo-the-half-life-2-rtx-demo-400",
        "name":  "半条命 2 RTX 版 Demo (The Half-Life 2 RTX Demo)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "half-sword-401",
        "name":  "Half Sword",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "光环-无限-halo-infinite-402",
        "name":  "光环：无限 (Halo Infinite)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "helios-403",
        "name":  "Helios",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "地狱派-hell-pie-404",
        "name":  "地狱派 (Hell Pie)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "地狱之刃-苏纽尔的献祭-hellblade-senua-s-sacrifice-405",
        "name":  "地狱之刃：苏纽尔的献祭 (Hellblade: Senua\u0027s Sacrifice)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "地狱之刃-2-塞娜的传说-增强版-senua-s-saga-hellblade-ii-enhanced-406",
        "name":  "地狱之刃 2：塞娜的传说 增强版 (Senua\u0027s Saga: Hellblade II Enhanced)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "地狱裂痕-维加斯-hellbreach-vegas-407",
        "name":  "地狱裂痕：维加斯 (Hellbreach: Vegas)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "绝地潜兵-2-helldivers-2-408",
        "name":  "绝地潜兵 2 (Helldivers 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "地狱即我们-hell-is-us-409",
        "name":  "地狱即我们 (Hell Is Us)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "你好邻居-2-hello-neighbor-2-410",
        "name":  "你好邻居 2 (Hello Neighbor 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "heroic-kingdom-origins-411",
        "name":  "Heroic Kingdom: Origins",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "hi-fi-rush-412",
        "name":  "Hi-Fi RUSH",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "highguard-413",
        "name":  "Highguard",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "high-on-life-414",
        "name":  "High On Life",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "高能人生-2-high-on-life-2-415",
        "name":  "高能人生 2 (High On Life 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "高层都市-highrise-city-416",
        "name":  "高层都市 (Highrise City)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "杀手-暗杀世界-hitman-world-of-assassination-417",
        "name":  "杀手：暗杀世界 (HITMAN World of Assassination)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "霍格沃茨之遗-hogwarts-legacy-418",
        "name":  "霍格沃茨之遗 (Hogwarts Legacy)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "h-ll-space-5d6-419",
        "name":  "Höll Space 5D6",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "homebrew-cortex-420",
        "name":  "Homebrew Cortex",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "homebrew-jan-desktop-421",
        "name":  "Homebrew Jan Desktop",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "家园-3-homeworld-3-422",
        "name":  "家园 3 (Homeworld 3)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "崩坏-星穹铁道-honkai-star-rail-423",
        "name":  "崩坏：星穹铁道 (Honkai: Star Rail)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "holomento-424",
        "name":  "Holomento",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "horizon-technology-kool-vr-3-0-425",
        "name":  "Horizon Technology Kool VR 3.0",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "地平线-西之绝境-完整版-horizon-forbidden-west-complete-edition-426",
        "name":  "《地平线 西之绝境》完整版 (Horizon Forbidden West Complete Edition)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "地平线-零之曙光-完全版-horizon-zero-dawn-complete-edition-427",
        "name":  "地平线：零之曙光 完全版 (Horizon Zero Dawn Complete Edition)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "地平线-零之曙光-重制版-horizon-zero-dawn-remastered-428",
        "name":  "地平线：零之曙光 重制版 (Horizon Zero Dawn Remastered)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "风火轮-爆发-hot-wheels-unleashed-429",
        "name":  "风火轮：爆发 (HOT WHEELS UNLEASHED)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "风火轮爆发-2-涡轮增压-hot-wheels-unleashed-2-turbocharged-430",
        "name":  "风火轮爆发 2：涡轮增压 (Hot WHEELS UNLEASHED 2 - Turbocharged)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "hound-automaton-431",
        "name":  "HOUND: AUTOMATON",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "人类宿主-human-host-432",
        "name":  "人类宿主 (Human Host)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "猎杀-对决-1896-hunt-showdown-1896-433",
        "name":  "猎杀：对决 1896 (Hunt: Showdown 1896)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "hydroneer-434",
        "name":  "Hydroneer",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "i-am-jesus-christ-435",
        "name":  "I Am Jesus Christ",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "翼星求生-icarus-436",
        "name":  "翼星求生 (ICARUS)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "伊科内岛-筑梦之地-ikonei-island-an-earthlock-adventure-437",
        "name":  "伊科内岛：筑梦之地 (Ikonei Island: An Earthlock Adventure)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "不朽者传奇-immortals-of-aveum-438",
        "name":  "不朽者传奇 (Immortals of Aveum)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "红河行动-incursion-red-river-439",
        "name":  "红河行动 (Incursion Red River)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "夺宝奇兵-古老之圈-indiana-jones-and-the-great-circle-440",
        "name":  "夺宝奇兵：古老之圈 (Indiana Jones and the Great Circle)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "NV, T",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "印蒂卡-indika-441",
        "name":  "印蒂卡 (INDIKA)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "industria-442",
        "name":  "INDUSTRIA",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "industria-2-443",
        "name":  "INDUSTRIA 2",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "工业巨擘-4-0-industry-giant-4-0-444",
        "name":  "工业巨擘 4.0 (Industry Giant 4.0)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "无限暖暖-infinity-nikki-445",
        "name":  "无限暖暖 (Infinity Nikki)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "influx-redux-446",
        "name":  "InFlux Redux",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "勇闯死人谷-暗黑之日-into-the-dead-our-darkest-days-447",
        "name":  "勇闯死人谷：暗黑之日 (Into the Dead: Our Darkest Days)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "死亡半径-vr-into-the-radius-vr-448",
        "name":  "死亡半径 VR (Into the Radius VR)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "云族裔-inzoi-449",
        "name":  "云族裔 (inZOI)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "烈火战马-iron-conflict-450",
        "name":  "烈火战马 (Iron Conflict)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "古之岛-island-of-the-ancients-451",
        "name":  "古之岛 (Island of the Ancients)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "isles-of-yore-452",
        "name":  "Isles of Yore",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "isotropix-angie-453",
        "name":  "Isotropix Angie",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "isotropix-clarisse-454",
        "name":  "Isotropix Clarisse",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "铁血联盟-3-jagged-alliance-3-455",
        "name":  "铁血联盟 3 (Jagged Alliance 3)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "绝灭之爪-jaws-of-extinction-456",
        "name":  "绝灭之爪 (Jaws Of Extinction)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "jdm-japanese-drift-master-457",
        "name":  "JDM: Japanese Drift Master",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "剑魄-jian-po-458",
        "name":  "剑魄 (Jian Po)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "剪映专业版-459",
        "name":  "剪映专业版",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "毒液突击队-john-carpenter-s-toxic-commando-460",
        "name":  "毒液突击队 (John Carpenter\u0027s Toxic Commando)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "巨人杀手-暗黑之潮-jotunnslayer-hordes-of-hel-461",
        "name":  "巨人杀手：暗黑之潮 (Jotunnslayer: Hordes of Hel)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "审判之眼-死神的遗言-judgment-462",
        "name":  "审判之眼：死神的遗言 (Judgment)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "jump-space-463",
        "name":  "Jump Space",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "侏罗纪世界-进化-2-jurassic-world-evolution-2-464",
        "name":  "侏罗纪世界：进化 2 (Jurassic World Evolution 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "侏罗纪世界-进化-3-jurassic-world-evolution-3-465",
        "name":  "侏罗纪世界：进化 3 (Jurassic World Evolution 3)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "jusant-466",
        "name":  "Jusant",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "逆水寒-justice-467",
        "name":  "逆水寒 (Justice)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "剑网-3-jx3-online-468",
        "name":  "剑网 3 (JX3 Online)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "黑暗世界-因与果-karma-the-dark-world-469",
        "name":  "黑暗世界：因与果(KARMA: The Dark World)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "kartkraft-470",
        "name":  "KartKraft",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "keeper-471",
        "name":  "Keeper",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "kena-精神之桥-kena-bridge-of-spirits-472",
        "name":  "Kena：精神之桥 (Kena: Bridge of Spirits)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "外太空杀人小丑-killer-klowns-from-outer-space-the-game-473",
        "name":  "外太空杀人小丑 (Killer Klowns from Outer Space: The Game)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "杀戮空间-3-killing-floor-3-474",
        "name":  "杀戮空间 3 (Killing Floor 3)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "天国-拯救-2-kingdom-come-deliverance-ii-475",
        "name":  "天国：拯救 2 (Kingdom Come: Deliverance II)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "祇-女神之路-kunitsu-gami-path-of-the-goddess-476",
        "name":  "祇：女神之路 (Kunitsu-Gami: Path of the Goddess )",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "kognat-rotobot-477",
        "name":  "Kognat Rotobot",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "kristala-478",
        "name":  "Kristala",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "维京人之地-land-of-the-vikings-479",
        "name":  "维京人之地 (Land of the Vikings)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "地球最后的希望-last-hope-on-earth-480",
        "name":  "地球最后的希望 (Last Hope on Earth)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "last-sighting-481",
        "name":  "Last Sighting",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "归乡列车-last-train-home-482",
        "name":  "归乡列车 (Last Train Home)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "层层恐惧-layers-of-fear-483",
        "name":  "层层恐惧 (Layers of Fear)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "lay-of-the-land-484",
        "name":  "Lay of the Land",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "leap-485",
        "name":  "LEAP",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "传奇故事-legendary-tales-486",
        "name":  "传奇故事 (Legendary Tales)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "尤弥尔传奇-legend-of-ymir-487",
        "name":  "尤弥尔传奇 (Legend of Ymir)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "乐高蝙蝠侠-黑暗骑士遗产-lego-batman-legacy-of-the-dark-knight-488",
        "name":  "乐高蝙蝠侠：黑暗骑士遗产 (LEGO Batman: Legacy of the Dark Knight)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "乐高建造者之旅-lego-builder-s-journey-489",
        "name":  "乐高建造者之旅 (LEGO Builder\u0027s Journey)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "lego-地平线大冒险-lego-horizon-adventures-490",
        "name":  "LEGO 地平线大冒险 (LEGO Horizon Adventures)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "雷能思之门-lemnis-gate-491",
        "name":  "雷能思之门 (Lemnis Gate)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "let-it-die-inferno-492",
        "name":  "LET IT DIE: INFERNO",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "盗日求生-撤离-level-zero-extraction-493",
        "name":  "盗日求生：撤离 (Level Zero: Extraction)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "匹诺曹的谎言-lies-of-p-494",
        "name":  "匹诺曹的谎言 (Lies of P)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "奇异人生-本色-life-is-strange-true-colors-495",
        "name":  "奇异人生：本色 (Life Is Strange: True Colors)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "光年边境-lightyear-frontier-496",
        "name":  "光年边境 (Lightyear Frontier)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "人中之龙-8-like-a-dragon-infinite-wealth-497",
        "name":  "人中之龙 8 (Like a Dragon: Infinite Wealth)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "人中之龙-维新-极-like-a-dragon-ishin-498",
        "name":  "人中之龙 维新！极 (Like a Dragon: Ishin!)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "人中之龙7外传-无名之龙-like-a-dragon-gaiden-the-man-who-erased-his-name-499",
        "name":  "人中之龙7外传：无名之龙 (Like A Dragon Gaiden: The Man Who Erased His Name)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "人中之龙-8-外传-夏威夷海盗-like-a-dragon-pirate-yakuza-500",
        "name":  "人中之龙 8 外传：夏威夷海盗  (Like a Dragon: Pirate Yakuza)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "liminalcore-501",
        "name":  "Liminalcore",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "langchain-502",
        "name":  "Langchain",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "langflow-ai-503",
        "name":  "Langflow AI",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "linctex-digital-technology-co-ltd-style3d-studio-504",
        "name":  "Linctex Digital Technology Co.Ltd - Style3D Studio",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "小小梦魇-2-little-nightmares-ii-505",
        "name":  "小小梦魇 2 (Little Nightmares II)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "小小梦魇-3-little-nightmares-iii-506",
        "name":  "小小梦魇  3 (Little Nightmares III)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "lm-studio-507",
        "name":  "LM Studio",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "北极星-lodestar-508",
        "name":  "北极星 (Lodestar)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "生死轮回-loopmancer-509",
        "name":  "生死轮回 (Loopmancer)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "堕落之主-lords-of-the-fallen-510",
        "name":  "堕落之主 (Lords of the Fallen)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "审判之逝-湮灭的记忆-lost-judgment-511",
        "name":  "审判之逝: 湮灭的记忆 (Lost Judgment)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "遗失的记录-绽放与愤怒-lost-records-bloom-rage-512",
        "name":  "遗失的记录：绽放与愤怒 (Lost Records: Bloom \u0026 Rage)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "失落的天空-lost-skies-513",
        "name":  "失落的天空 (Lost Skies)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "失落之魂-lost-soul-aside-514",
        "name":  "失落之魂 (Lost Soul Aside)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "春天之风-loverowind-515",
        "name":  "春天之风 (Loverowind)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "卢默特-赤灵主宰编年史-lumote-the-mastermote-chronicles-516",
        "name":  "卢默特：赤灵主宰编年史 (Lumote: The Mastermote Chronicles)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "月之深渊-luna-abyss-517",
        "name":  "月之深渊 (Luna Abyss)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "疯狂-圣罗德小镇-lunacy-saint-rhodes-518",
        "name":  "疯狂：圣罗德小镇 (Lunacy: Saint Rhodes)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "luto-519",
        "name":  "Luto",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "luxion-keyshot-520",
        "name":  "Luxion KeyShot",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "四海兄弟-故乡-mafia-the-old-country-521",
        "name":  "四海兄弟：故乡 (mafia: the old country)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "秘影曼德拉-mandragora-whispers-of-the-witch-tree-522",
        "name":  "秘影曼德拉 (Mandragora: Whispers of the Witch Tree)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "庄园领主-manor-lords-523",
        "name":  "庄园领主 (Manor Lords)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "marmoset-toolbag-524",
        "name":  "Marmoset Toolbag",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "玛莎已死-martha-is-dead-525",
        "name":  "玛莎已死 (Martha Is Dead)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "失落星船-马拉松-marathon-526",
        "name":  "失落星船：马拉松 (Marathon)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "漫威争锋-marvel-rivals-527",
        "name":  "漫威争锋 (Marvel Rivals)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "漫威复仇者联盟-marvel-s-avengers-528",
        "name":  "漫威复仇者联盟 (Marvel\u0027s Avengers)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "漫威银河护卫队-marvel-s-guardians-of-the-galaxy-529",
        "name":  "漫威银河护卫队 (Marvel\u0027s Guardians of the Galaxy)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "漫威暗夜之子-marvel-s-midnight-suns-530",
        "name":  "漫威暗夜之子 (Marvel\u0027s Midnight Suns)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "漫威蜘蛛侠-重制版-marvel-s-spider-man-remastered-531",
        "name":  "漫威蜘蛛侠：重制版 (Marvel\u0027s Spider-Man Remastered)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "漫威蜘蛛侠-迈尔斯-莫拉莱斯-marvel-s-spider-man-miles-morales-532",
        "name":  "漫威蜘蛛侠：迈尔斯·莫拉莱斯 (Marvel’s Spider-Man: Miles Morales)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "漫威蜘蛛侠-2-marvel-s-spider-man-2-533",
        "name":  "漫威蜘蛛侠 2 (Marvel\u0027s Spider-Man 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "马特-琼斯-骑迹-mavrix-by-matt-jones-534",
        "name":  "马特·琼斯：骑迹 (MAVRIX by Matt Jones)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "maxon-redshift-renderer-535",
        "name":  "Maxon Redshift Renderer",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "mcneel-assoc-rhino-536",
        "name":  "McNeel \u0026 Assoc. RHINO",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "解限机-mecha-break-537",
        "name":  "解限机(Mecha BREAK)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "机甲战士-5-部落-mechwarrior-5-clans-538",
        "name":  "机甲战士 5：部落 (MechWarrior 5: Clans)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "机甲战士-5-雇佣兵-mechwarrior-5-mercenaries-539",
        "name":  "机甲战士 5：雇佣兵 (MechWarrior 5: Mercenaries)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "mercs-fully-loaded-540",
        "name":  "Mercs Fully Loaded",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "meshroom-vr-weviz-studio-541",
        "name":  "Meshroom VR WeViz Studio",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "合金天使-堕入伊甸-metal-eden-542",
        "name":  "合金天使：堕入伊甸 (Metal Eden)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "metal-gear-solid-snake-eater-543",
        "name":  "METAL GEAR SOLID Δ: SNAKE EATER",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "地铁-离去-metro-exodus-544",
        "name":  "地铁：离去 (Metro Exodus)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "地铁-离去-pc-增强版-metro-exodus-pc-enhanced-edition-545",
        "name":  "地铁：离去 PC 增强版 (Metro Exodus PC Enhanced Edition)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "microsoft-edge-rtx-video-super-resolution-546",
        "name":  "Microsoft Edge (RTX Video Super Resolution)",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "微软模拟飞行-microsoft-flight-simulator-547",
        "name":  "微软模拟飞行 (Microsoft Flight Simulator)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "微软模拟飞行-2024-microsoft-flight-simulator-2024-548",
        "name":  "微软模拟飞行 2024 (Microsoft Flight Simulator 2024)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "午夜猎魂-midnight-ghost-hunt-549",
        "name":  "午夜猎魂 (Midnight Ghost Hunt)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "心之眼-mindseye-550",
        "name":  "心之眼 (MindsEye)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "我的世界-中国版-rtx-版-minecraft-with-rtx-china-edition-551",
        "name":  "《我的世界》中国版 RTX 版 (Minecraft with RTX: China Edition)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "minos-552",
        "name":  "MINOS",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "microsoft-vs-code-553",
        "name":  "Microsoft VS Code",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "mintplex-labs-anythingllm-554",
        "name":  "Mintplex Labs AnythingLLM",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "魔御-star-dive-mongil-star-dive-555",
        "name":  "魔御：STAR DIVE (MONGIL: STAR DIVE)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "怪物能量超级越野赛车-25-monster-energy-supercross-25-the-official-video-game-556",
        "name":  "怪物能量超级越野赛车 25 (Monster Energy Supercross 25 - The Official Video Game)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "魔爪能量越野摩托赛-6-monster-energy-supercross-the-official-videogame-6-557",
        "name":  "魔爪能量越野摩托赛 6 (Monster Energy Supercross - The Official Videogame 6)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "怪物猎人-崛起-monster-hunter-rise-558",
        "name":  "怪物猎人：崛起 (Monster Hunter Rise)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "怪物猎人物语-3-命运双龙-monster-hunter-stories-3-twisted-reflection-559",
        "name":  "怪物猎人物语 3：命运双龙 (Monster Hunter Stories 3: Twisted Reflection)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "怪物猎人-荒野-monster-hunter-wilds-560",
        "name":  "怪物猎人：荒野 (Monster Hunter Wilds)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "怪物猎人-世界-monster-hunter-world-561",
        "name":  "怪物猎人：世界 (Monster Hunter: World)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "moon-runner-562",
        "name":  "Moon Runner",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "天涯明月刀-moonlight-blade-563",
        "name":  "天涯明月刀 (Moonlight Blade)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "异变金属-morbid-metal-564",
        "name":  "异变金属 (Morbid Metal)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "真人快打-1-mortal-kombat-1-565",
        "name":  "真人快打 1 (Mortal Kombat 1)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "凡间在线-mortal-online-2-566",
        "name":  "凡间在线 (Mortal Online 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "尘世之仪-mortal-rite-567",
        "name":  "尘世之仪 (Mortal Rite)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "致命躯壳-mortal-shell-568",
        "name":  "致命躯壳 (Mortal Shell)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "mother-machine-569",
        "name":  "Mother Machine",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "motogp-24-570",
        "name":  "MotoGP 24",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "骑马与砍杀-2-霸主-mount-blade-ii-bannerlord-571",
        "name":  "骑马与砍杀 2：霸主 (Mount \u0026 Blade II: Bannerlord)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "神探杰克鼠-mouse-p-i-for-hire-572",
        "name":  "神探杰克鼠 (MOUSE: P.I. For Hire)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "mozilla-firefox-rtx-video-超分辨率-573",
        "name":  "Mozilla Firefox (RTX Video 超分辨率)",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "msty-574",
        "name":  "Msty",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "沙石镇时光-my-time-at-sandrock-575",
        "name":  "沙石镇时光 (My Time At Sandrock)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "神秘岛-myst-576",
        "name":  "神秘岛 (Myst)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "帝国神话-myth-of-empires-577",
        "name":  "帝国神话 (Myth of Empires)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "永劫无间-naraka-bladepoint-578",
        "name":  "永劫无间 (NARAKA: BLADEPOINT)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "nba-2k5-579",
        "name":  "NBA 2K5",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "nba-2k6-580",
        "name":  "NBA 2K6",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "涅克罗蒙达-赏金猎人-necromunda-hired-gun-581",
        "name":  "涅克罗蒙达：赏金猎人 (Necromunda: Hired Gun)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "坏死症-necrophosis-582",
        "name":  "坏死症 (Necrophosis)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "极品飞车-不羁-need-for-speed-unbound-583",
        "name":  "极品飞车：不羁 (Need For Speed Unbound)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "nemetschek-allplan-584",
        "name":  "Nemetschek ALLPLAN",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "new-arc-line-585",
        "name":  "New Arc Line",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "新世界-永恒-new-world-aeternum-586",
        "name":  "新世界：永恒 (New World: Aeternum)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "夜莺传说-nightingale-587",
        "name":  "夜莺传说 (Nightingale)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "噩梦边境-nightmare-frontier-588",
        "name":  "噩梦边境 (Nightmare Frontier)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "night-of-the-dead-589",
        "name":  "Night of the Dead",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "night-project-590",
        "name":  "Night Project",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "朝九晚五-nine-to-five-591",
        "name":  "朝九晚五 (Nine To Five)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "忍者龙剑传-2-黑之章-ninja-gaiden-2-black-592",
        "name":  "忍者龙剑传 2：黑之章 (NINJA GAIDEN 2 Black)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "忍者龙剑传-4-ninja-gaiden-4-593",
        "name":  "忍者龙剑传 4 (NINJA GAIDEN 4)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "ninja-resurrection-a-tale-of-kuro-594",
        "name":  "Ninja Resurrection: A tale of Kuro",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "仁王-2-完全版-nioh-2-the-complete-edition-595",
        "name":  "仁王 2 完全版 (Nioh 2 The Complete Edition)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "仁王-3-nioh-3-596",
        "name":  "仁王 3 (Nioh 3)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "noble-legacy-597",
        "name":  "Noble Legacy",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "无人愿死-nobody-wants-to-die-598",
        "name":  "无人愿死 (Nobody Wants To Die)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "无人深空-no-man-s-sky-599",
        "name":  "无人深空 (No Man\u0027s Sky)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "地狱已满-2-no-more-room-in-hell-2-600",
        "name":  "地狱已满 2 (No More Room In Hell 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "恶意不息-no-rest-for-the-wicked-601",
        "name":  "恶意不息 (No Rest for the Wicked)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "nomic-ai-gpt4all-602",
        "name":  "Nomic AI GPT4All",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "无人生还-no-one-survived-603",
        "name":  "无人生还 (No One Survived)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "北欧-血誓-norse-oath-of-blood-604",
        "name":  "北欧：血誓 (NORSE: Oath of Blood)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "nowhere-near-605",
        "name":  "Nowhere Near",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "异环-nte-neverness-to-everness-606",
        "name":  "异环 (NTE: Neverness to Everness)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "NV, T",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "nvidia-broadcast-607",
        "name":  "NVIDIA Broadcast",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "nvidia-canvas-608",
        "name":  "NVIDIA Canvas",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "nvidia-index-609",
        "name":  "NVIDIA IndeX",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "nvidia-iray-610",
        "name":  "NVIDIA Iray",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "nvidia-omniverse-611",
        "name":  "NVIDIA Omniverse",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "nvidia-rtx-remix-612",
        "name":  "NVIDIA RTX Remix",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "obs-613",
        "name":  "OBS",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "obs-streamlabs-614",
        "name":  "OBS Streamlabs",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "观察者-系统重复-observer-system-redux-615",
        "name":  "观察者：系统重复 (Observer: System Redux)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "oddsparks-an-automation-adventure-616",
        "name":  "Oddsparks: An Automation Adventure",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "灰雨钢锋-of-ash-and-steel-617",
        "name":  "灰雨钢锋 (Of Ash and Steel)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "off-the-grid-618",
        "name":  "Off The Grid",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "ollama-619",
        "name":  "Ollama",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "ominous-620",
        "name":  "Ominous",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "on1-nonoise-ai-621",
        "name":  "ON1 NoNoise AI",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "on1-portrait-ai-622",
        "name":  "ON1 Portrait AI",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "on1-resize-ai-623",
        "name":  "ON1 Resize AI",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "once-alive-624",
        "name":  "Once Alive",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "七日世界-once-human-625",
        "name":  "七日世界 (Once Human)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "oobabooga-626",
        "name":  "Oobabooga",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "opera-web-browser-627",
        "name":  "Opera Web Browser",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "轨道工业-orbit-industries-628",
        "name":  "轨道工业 (orbit.industries)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "兽人必须死-死亡陷阱-orcs-must-die-deathtrap-629",
        "name":  "兽人必须死！死亡陷阱 (Orcs Must Die! Deathtrap)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "信的折叠旅途-origament-a-paper-adventure-630",
        "name":  "信的折叠旅途 (Origament: A Paper Adventure)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "otherplane-631",
        "name":  "Otherplane",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "otoy-octanerender-632",
        "name":  "Otoy OctaneRender",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "outbreak-shades-of-horror-633",
        "name":  "Outbreak: Shades of Horror",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "时空英豪-新起点-outcast-a-new-beginning-634",
        "name":  "时空英豪：新起点 (Outcast - A New Beginning)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "外界-outerverse-635",
        "name":  "外界 (Outerverse)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "重装前哨-outpost-infinity-siege-636",
        "name":  "重装前哨 (Outpost: Infinity Siege)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "先驱者-outriders-637",
        "name":  "先驱者 (Outriders)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "守望先锋-归来-638",
        "name":  "《守望先锋》“归来”",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "pacific-drive-639",
        "name":  "Pacific Drive",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "幻兽帕鲁-palworld-640",
        "name":  "幻兽帕鲁 (Palworld)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "panicore-641",
        "name":  "PANICORE",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "天堂杀手-paradise-killer-642",
        "name":  "天堂杀手 (Paradise Killer)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "park-studio-643",
        "name":  "Park Studio",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "猛兽派对-party-animals-644",
        "name":  "猛兽派对 (Party Animals)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "流放之路-2-path-of-exile-2-645",
        "name":  "流放之路 2 (Path of Exile 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "天域安宁-pax-dei-646",
        "name":  "天域安宁 (Pax Dei)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "收获日-3-payday-3-647",
        "name":  "收获日 3 (PAYDAY 3)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "装机模拟器-2-pc-building-simulator-2-648",
        "name":  "装机模拟器 2 (PC Building Simulator 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "people-of-note-649",
        "name":  "People of Note",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "破灭-perish-650",
        "name":  "破灭 (PERISH)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "pga-tour-2k3-651",
        "name":  "PGA TOUR 2K3",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "pga-tour-2k5-652",
        "name":  "PGA TOUR 2K5",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "梦幻之星-ol2-新起源-phantasy-star-online-2-new-genesis-653",
        "name":  "梦幻之星 OL2：新起源 (Phantasy Star Online 2 New Genesis)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "pieces-654",
        "name":  "Pieces",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "pinball-fx-655",
        "name":  "Pinball FX",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "pixar-renderman-656",
        "name":  "Pixar Renderman",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "pixar-rtp-657",
        "name":  "Pixar RTP",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "pizza-bandit-658",
        "name":  "Pizza Bandit",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "pizzapocalypse-659",
        "name":  "Pizzapocalypse",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "过山车之星-2-planet-coaster-2-660",
        "name":  "过山车之星 2 (Planet Coaster 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "planetside-2-661",
        "name":  "PlanetSide 2",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "pluviophile-662",
        "name":  "Pluviophile",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "扑克俱乐部-poker-club-663",
        "name":  "扑克俱乐部 (Poker Club)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "传送门-portal-rtx-版-664",
        "name":  "传送门 (Portal) RTX 版",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "NV, T",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "传送门-序曲-portal-prelude-rtx-版-665",
        "name":  "传送门：序曲 (Portal: Prelude) RTX 版",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "postal-4-no-regerts-666",
        "name":  "Postal 4: No Regerts",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "powerslide-legends-667",
        "name":  "Powerslide Legends",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "识质存在-pragmata-668",
        "name":  "识质存在 (PRAGMATA)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "NV, T",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "predecessor-669",
        "name":  "Predecessor",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "privategpt-670",
        "name":  "PrivateGPT",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "prologue-go-wayback-671",
        "name":  "Prologue: Go Wayback!",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "project-motor-racing-672",
        "name":  "Project Motor Racing",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "propnight-673",
        "name":  "Propnight",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "proton-674",
        "name":  "Proton",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "psycho-fear-675",
        "name":  "Psycho Fear",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "南瓜杰克-pumpkin-jack-676",
        "name":  "南瓜杰克 (Pumpkin Jack)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "q-u-b-e-10-周年版-q-u-b-e-10th-anniversary-677",
        "name":  "Q.U.B.E.10 周年版 (Q.U.B.E. 10th Anniversary)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "qanga-678",
        "name":  "QANGA",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "雷神之锤-ii-rtx-quake-ii-rtx-679",
        "name":  "雷神之锤 II RTX (Quake II RTX)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "拉吉-远古传奇-raji-an-ancient-epic-680",
        "name":  "拉吉：远古传奇 (Raji: An Ancient Epic)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "牧场模拟器-ranch-simulator-681",
        "name":  "牧场模拟器 (Ranch Simulator)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "random-control-maverick-render-682",
        "name":  "Random Control Maverick Render",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "瑞奇与叮当-时空跳转-ratchet-clank-rift-apart-683",
        "name":  "瑞奇与叮当：时空跳转 (Ratchet \u0026 Clank: Rift Apart)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "raze-2070-684",
        "name":  "RAZE 2070",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "严阵以待-ready-or-not-685",
        "name":  "严阵以待 (Ready or Not)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "real-life-686",
        "name":  "Real Life",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "reallusion-iclone-687",
        "name":  "Reallusion iClone",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "生灵重塑-reanimal-688",
        "name":  "生灵重塑 (REANIMAL)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "reaper-actual-689",
        "name":  "Reaper Actual",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "回忆-recall-690",
        "name":  "回忆 (Recall)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "redcine-x-pro-691",
        "name":  "REDCINE-X Pro",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "荒野大镖客-救赎-red-dead-redemption-692",
        "name":  "荒野大镖客：救赎 (Red Dead Redemption)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "荒野大镖客-救赎-2-red-dead-redemption-2-693",
        "name":  "荒野大镖客：救赎 2 (Red Dead Redemption 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "红霞岛-redfall-694",
        "name":  "红霞岛 (Redfall)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "红视-太空突击-redout-space-assault-695",
        "name":  "红视：太空突击 (Redout: Space Assault)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "reficul-666-696",
        "name":  "REFICUL 666",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "reincubate-camo-697",
        "name":  "Reincubate Camo",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "开球-rematch-rematch-698",
        "name":  "开球！REMATCH (REMATCH)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "remington-graphics-d-noise-699",
        "name":  "Remington Graphics D-NOISE",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "遗迹-2-remnant-ii-700",
        "name":  "遗迹 2 (Remnant II)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "遗迹-remnants-701",
        "name":  "遗迹 (Remnants)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "残迹-rem-survival-702",
        "name":  "残迹 (Rem Survival)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "renovation-simulator-703",
        "name":  "Renovation Simulator",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "生化危机-2-resident-evil-2-704",
        "name":  "生化危机 2 (Resident Evil 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "生化危机-3-resident-evil-3-705",
        "name":  "生化危机 3 (Resident Evil 3)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "生化危机-7-resident-evil-7-706",
        "name":  "生化危机 7 (Resident Evil 7)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "生化危机-安魂曲-resident-evil-requiem-707",
        "name":  "生化危机：安魂曲 (Resident Evil Requiem)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "Yes",
                     "rayTracing":  "路径追踪",
                     "ai":  ""
                 }
    },
    {
        "id":  "生化危机-8-村庄-resident-evil-village-708",
        "name":  "生化危机 8：村庄 (Resident Evil Village)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "死亡回归-returnal-709",
        "name":  "死亡回归 (Returnal)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "重返校园-return-to-campus-710",
        "name":  "重返校园 (Return to Campus)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "噩梦初醒-reveil-711",
        "name":  "噩梦初醒 (REVEIL)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "法师的复仇-revenge-of-the-mage-712",
        "name":  "法师的复仇 (Revenge of the Mage)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "狂野星球复仇记-revenge-of-the-savage-planet-713",
        "name":  "狂野星球复仇记 (Revenge of the Savage Planet)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "rf-online-next-714",
        "name":  "RF Online Next",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "无限法则-ring-of-elysium-715",
        "name":  "无限法则 (Ring of Elysium)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "ripout-716",
        "name":  "RIPOUT",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "rise-of-the-ronin-717",
        "name":  "Rise of the Ronin",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "古墓丽影-崛起-rise-of-the-tomb-raider-718",
        "name":  "古墓丽影:崛起 (Rise of the Tomb Raider)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "烈文-riven-719",
        "name":  "烈文 (Riven)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "灾后修复师-roadcraft-720",
        "name":  "灾后修复师 (RoadCraft)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "机械战警-暴戾都市-robocop-rogue-city-721",
        "name":  "机械战警：暴戾都市 (RoboCop: Rogue City)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "机械战警-暴戾都市-未竟之事-robocop-rogue-city-unfinished-business-722",
        "name":  "机械战警：暴戾都市 - 未竟之事 (RoboCop: Rogue City - Unfinished Business)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "robo-pocket-3d-fighter-with-rollback-723",
        "name":  "Robo Pocket: 3D Fighter With Rollback",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "rocket-squad-infinity-724",
        "name":  "Rocket Squad: Infinity",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "浪漫恶魔城-romancelvania-725",
        "name":  "浪漫恶魔城 (Romancelvania)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "romeo-is-a-dead-man-726",
        "name":  "Romeo Is A Dead Man",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "符文-2-rune-ii-727",
        "name":  "符文 2 (Rune II)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "符文工房-龙之天地-rune-factory-guardians-of-azuma-728",
        "name":  "符文工房：龙之天地 (Rune Factory: Guardians of Azuma)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "符文世界-龙之荒野-runescape-dragonwilds-729",
        "name":  "符文世界：龙之荒野 (RuneScape: Dragonwilds)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "running-train-走-列車-730",
        "name":  "RUNNING TRAIN | 走ル列車！",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "腐蚀-rust-731",
        "name":  "腐蚀 (Rust)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "矮人矿坑-saboteur-732",
        "name":  "矮人矿坑 (Saboteur)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "麻布仔大冒险-sackboy-a-big-adventure-733",
        "name":  "麻布仔大冒险 (Sackboy: A Big Adventure)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "黑道圣徒-saints-row-734",
        "name":  "黑道圣徒 (Saints Row)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "samson-735",
        "name":  "Samson",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "sanctum-736",
        "name":  "Sanctum",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "奥拉之沙-sands-of-aura-737",
        "name":  "奥拉之沙 (Sands of Aura)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "幸福工厂-satisfactory-738",
        "name":  "幸福工厂 (Satisfactory)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "炼狱神罚-scathe-739",
        "name":  "炼狱神罚 (Scathe)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "拾荒者-scavengers-740",
        "name":  "拾荒者 (Scavengers)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "scp-5k-741",
        "name":  "SCP: 5K",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "收容-秘密档案-scp-secret-files-742",
        "name":  "收容：秘密档案 (SCP: Secret Files)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "screamer-743",
        "name":  "Screamer",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "scum-744",
        "name":  "SCUM",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "seafarer-the-ship-sim-745",
        "name":  "Seafarer: The Ship Sim",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "season-a-letter-to-the-future-746",
        "name":  "SEASON: A Letter To The Future",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "血清-serum-747",
        "name":  "血清 (Serum)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "断钢-severed-steel-748",
        "name":  "断钢 (Severed Steel)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "战国王朝-sengoku-dynasty-749",
        "name":  "战国王朝 (Sengoku Dynasty)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "古墓丽影-暗影-shadow-of-the-tomb-raider-750",
        "name":  "古墓丽影：暗影 (Shadow of the Tomb Raider)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "影子武士-3-shadow-warrior-3-751",
        "name":  "影子武士 3 (Shadow Warrior 3)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "凶影疑云-shadows-of-doubt-752",
        "name":  "凶影疑云 (Shadows of Doubt)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "破碎线-shatterline-753",
        "name":  "破碎线 (Shatterline)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "光辉城市-mars-sheencity-mars-754",
        "name":  "光辉城市 Mars (SheenCity Mars)",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "福尔摩斯-觉醒重制版-sherlock-holmes-the-awakened-755",
        "name":  "福尔摩斯：觉醒重制版 (Sherlock Holmes The Awakened)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "ships-at-sea-756",
        "name":  "Ships At Sea",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "枪手真人秀-showgunners-757",
        "name":  "枪手真人秀 (Showgunners)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "sidefx-houdini-758",
        "name":  "SideFX Houdini",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "siemens-digital-industries-software-nx-ray-traced-studio-759",
        "name":  "Siemens Digital Industries - Software NX Ray Traced Studio",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "siemens-digital-industries-software-simcenter-prescan-760",
        "name":  "Siemens Digital Industries Software Simcenter Prescan",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "师父-sifu-761",
        "name":  "师父 (Sifu)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "寂静岭-f-silent-hill-f-762",
        "name":  "寂静岭 f (SILENT HILL f)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "寂静岭-2-silent-hill-2-763",
        "name":  "寂静岭 2 (Silent Hill 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "寂静雨-silent-rain-764",
        "name":  "寂静雨 (Silent Rain)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "铁路模拟器-simrail-the-railway-simulator-765",
        "name":  "铁路模拟器 (SimRail - The Railway Simulator)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "simulakros-766",
        "name":  "Simulakros",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "六日-six-days-in-fallujah-767",
        "name":  "六日 (Six Days in Fallujah)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "碧海黑帆-skull-and-bones-768",
        "name":  "碧海黑帆 (Skull and Bones)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "skylum-aurora-hdr-769",
        "name":  "Skylum Aurora HDR",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "斯拉夫朋克-老古董-slavicpunk-oldtimer-770",
        "name":  "斯拉夫朋克：老古董 (SlavicPunk: Oldtimer)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "极速滑板-skate-771",
        "name":  "极速滑板 (Skate.)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "sker-ritual-772",
        "name":  "Sker Ritual",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "skye-the-misty-isle-773",
        "name":  "Skye: The Misty Isle",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "瘦长鬼影-降临-slender-the-arrival-774",
        "name":  "瘦长鬼影：降临 (Slender: The Arrival)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "小小世界-smalland-survive-the-wilds-775",
        "name":  "小小世界 (Smalland: Survive The Wilds)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "small-spaces-776",
        "name":  "Small Spaces",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "神之浩劫-2-smite-2-777",
        "name":  "神之浩劫 2 (SMITE 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "有一天你会归来-导演剪辑版-someday-you-ll-return-director-s-cut-778",
        "name":  "有一天你会归来：导演剪辑版 (Someday You\u0027ll Return: Director\u0027s Cut)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "森林之子-sons-of-the-forest-779",
        "name":  "森林之子 (Sons Of The Forest)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "sophonce-780",
        "name":  "Sophonce",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "封灵档案-soul-dossier-781",
        "name":  "封灵档案 (Soul Dossier)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "灵魂面甲-soulmask-782",
        "name":  "灵魂面甲 (Soulmask)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "心灵伴侶-soulmate-783",
        "name":  "心灵伴侶 (Soulmate)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "灵魂射手-死亡使者-soulslinger-envoy-of-death-784",
        "name":  "灵魂射手：死亡使者 (Soulslinger: Envoy of Death)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "soulstice-785",
        "name":  "Soulstice",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "sourcegraph-cody-ai-786",
        "name":  "Sourcegraph Cody AI",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "午夜以南-south-of-midnight-787",
        "name":  "午夜以南 (South of Midnight)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "spectre-divide-788",
        "name":  "Spectre Divide",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "北境之灵-2-spirit-of-the-north-2-789",
        "name":  "北境之灵 2 (Spirit of the North 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "splitgate-arena-reloaded-790",
        "name":  "Splitgate: Arena Reloaded",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "splitmedialabs-ltd-xsplit-broadcaster-791",
        "name":  "SplitmediaLabs, Ltd. XSplit Broadcaster",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "蔓延-sprawl-792",
        "name":  "蔓延 (SPRAWL)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "spongebob-squarepants-titans-of-the-tide-793",
        "name":  "SpongeBob SquarePants: Titans of the Tide",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "战术小队-squad-794",
        "name":  "战术小队 (Squad)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "潜行者-普里皮亚季的召唤-s-t-a-l-k-e-r-call-of-prypiat-795",
        "name":  "潜行者：普里皮亚季的召唤 (S.T.A.L.K.E.R.: Call of Prypiat)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "潜行者-晴空-s-t-a-l-k-e-r-clear-sky-796",
        "name":  "潜行者：晴空 (S.T.A.L.K.E.R.: Clear Sky)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "潜行者-切尔诺贝利的阴影-s-t-a-l-k-e-r-shadow-of-chornobyl-797",
        "name":  "潜行者：切尔诺贝利的阴影 (S.T.A.L.K.E.R.: Shadow of Chornobyl)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "潜行者-2-切尔诺贝利之心-s-t-a-l-k-e-r-2-heart-of-chornobyl-798",
        "name":  "潜行者 2：切尔诺贝利之心 (S.T.A.L.K.E.R. 2: Heart of Chornobyl)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "stable-diffusion-webui-799",
        "name":  "Stable Diffusion WebUI",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "星空-starfield-800",
        "name":  "星空 (Starfield)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "星际矿业-starminer-801",
        "name":  "星际矿业(Starminer)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "星际裂变-starrupture-802",
        "name":  "星际裂变 (StarRupture)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "星河战队-灭绝-starship-troopers-extermination-803",
        "name":  "星河战队：灭绝 (Starship Troopers: Extermination)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "星际围攻-死亡地带-starsiege-deadzone-804",
        "name":  "星际围攻：死亡地带 (Starsiege: Deadzone)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "星际迷航-航海家号-star-trek-voyager-805",
        "name":  "星际迷航：航海家号 (Star Trek: Voyager)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "星球大战绝地-幸存者-star-wars-jedi-survivor-806",
        "name":  "星球大战绝地：幸存者 (STAR WARS Jedi: Survivor)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "星球大战-亡命之徒-star-wars-outlaws-807",
        "name":  "星球大战：亡命之徒 (Star Wars Outlaws)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "光明之下-stay-in-the-light-808",
        "name":  "光明之下 (Stay in the Light)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "钢之崛起-steelrising-809",
        "name":  "钢之崛起 (Steelrising)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "钢铁之种-steel-seed-810",
        "name":  "钢铁之种 (Steel Seed)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "剑星-stellar-blade-811",
        "name":  "剑星 (Stellar Blade)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "仍然唤醒深海-still-wakes-the-deep-812",
        "name":  "仍然唤醒深海 (Still Wakes The Deep)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "storage-hunter-simulator-813",
        "name":  "Storage Hunter Simulator",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "风暴之门-stormgate-814",
        "name":  "风暴之门 (Stormgate)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "滞困-异星黎明-stranded-alien-dawn-815",
        "name":  "滞困：异星黎明 (Stranded: Alien Dawn)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "天堂的陌生人-最终幻想起源-stranger-of-paradise-final-fantasy-origin-816",
        "name":  "天堂的陌生人：最终幻想起源 (Stranger of Paradise Final Fantasy Origin)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "星际公民-star-citizen-817",
        "name":  "星际公民 (Star Citizen)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "末光-strayed-lights-818",
        "name":  "末光 (Strayed Lights)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "storror-parkour-pro-819",
        "name":  "STORROR Parkour Pro",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "卡拉彼丘-strinova-820",
        "name":  "卡拉彼丘 (Strinova)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "stygian-outer-gods-821",
        "name":  "Stygian: Outer Gods",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "冥河-贪婪之刃-styx-blades-of-greed-822",
        "name":  "冥河：贪婪之刃 (Styx: Blades of Greed)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "忆蚀-subliminal-823",
        "name":  "忆蚀 (Subliminal)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "深海迷航-2-subnautica-2-824",
        "name":  "深海迷航 2 (Subnautica 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "突袭-6-sudden-strike-6-825",
        "name":  "突袭 6 (Sudden Strike 6)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "自杀小队-消灭正义联盟-suicide-squad-kill-the-justice-league-826",
        "name":  "自杀小队：消灭正义联盟 (Suicide Squad: Kill the Justice League)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "suirui-827",
        "name":  "Suirui",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "sumerian-six-828",
        "name":  "Sumerian Six",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "跑酷对决-supermoves-829",
        "name":  "跑酷对决 (Supermoves)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "超击突破-2-super-people-2-830",
        "name":  "超击突破 2 (SUPER PEOPLE 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "超级领地-supraland-831",
        "name":  "超级领地 (Supraland)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "超级领地-六英寸之下-supraland-six-inches-under-832",
        "name":  "超级领地：六英寸之下 (Supraland Six Inches Under)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "supraworld-833",
        "name":  "Supraworld",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "山丘生存-survive-the-hill-834",
        "name":  "山丘生存 (Survive The Hill)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "仙剑奇侠传七-sword-and-fairy-7-835",
        "name":  "仙剑奇侠传七 (Sword and Fairy 7)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "古剑奇谭海外版-swords-of-legends-online-836",
        "name":  "古剑奇谭海外版 (Swords of Legends Online)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "重生边缘-synced-837",
        "name":  "重生边缘 (SYNCED)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "网络奇兵-2023-版-system-shock-838",
        "name":  "网络奇兵 2023 版 (System Shock)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "tabbyml-839",
        "name":  "TabbyML",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "污痕圣杯-阿瓦隆的陨落-tainted-grail-the-fall-of-avalon-840",
        "name":  "污痕圣杯：阿瓦隆的陨落 (Tainted Grail: The Fall of Avalon)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "tankhead-841",
        "name":  "Tankhead",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "tarantula-ai-recast-ai-842",
        "name":  "Tarantula AI Recast.ai",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "奇娅-tchia-843",
        "name":  "奇娅 (Tchia)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "铁拳-8-tekken-8-844",
        "name":  "铁拳 8 (TEKKEN 8)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "风暴崛起-tempest-rising-845",
        "name":  "风暴崛起 (Tempest Rising)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "遗言-高人之序-testament-the-order-of-high-human-846",
        "name":  "遗言：高人之序 (Testament: The Order of High-Human)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "无限试驾-太阳王冠-test-drive-unlimited-solar-crown-847",
        "name":  "无限试驾：太阳王冠 (Test Drive Unlimited Solar Crown)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "多重人生-the-alters-848",
        "name":  "多重人生 (The Alters)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "the-anacrusis-849",
        "name":  "The Anacrusis",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "上行战场-the-ascent-850",
        "name":  "上行战场 (The Ascent)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "无形轴心-the-axis-unseen-851",
        "name":  "无形轴心 (The Axis Unseen)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "后台-丢失的磁带-the-backrooms-lost-tape-852",
        "name":  "后台：丢失的磁带 (The Backrooms: Lost Tape)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "黑池-the-black-pool-853",
        "name":  "黑池 (The Black Pool)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "the-black-pool-arena-survivors-854",
        "name":  "The Black Pool: Arena Survivors",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "the-bus-855",
        "name":  "The Bus",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "木卫四协议-the-callisto-protocol-856",
        "name":  "木卫四协议 (The Callisto Protocol)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "弗兰克斯通的阴影-the-casting-of-frank-stone-857",
        "name":  "弗兰克斯通的阴影 (The Casting of Frank Stone)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "the-chant-858",
        "name":  "The Chant",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "循环-前线-the-cycle-frontier-859",
        "name":  "循环：前线 (The Cycle: Frontier)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "黎明狙击手之路-the-dawn-sniper-s-way-860",
        "name":  "黎明狙击手之路 (The Dawn: Sniper\u0027s Way)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "浩劫前夕-the-day-before-861",
        "name":  "浩劫前夕 (The Day Before)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "吞噬者-猎杀之魂-the-devourer-hunted-souls-862",
        "name":  "吞噬者：猎杀之魂 (The Devourer: Hunted Souls)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "上古卷轴-iv-湮灭重制版-the-elder-scrolls-iv-oblivion-remastered-863",
        "name":  "上古卷轴 IV：湮灭重制版 (The Elder Scrolls IV: Oblivion Remastered)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "上古卷轴ol-the-elder-scrolls-online-864",
        "name":  "上古卷轴OL (The Elder Scrolls Online)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "传说中的森林-the-fabled-woods-865",
        "name":  "传说中的森林 (The Fabled Woods)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "终极角逐-the-finals-866",
        "name":  "终极角逐 (THE FINALS)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "the-forge-867",
        "name":  "The Forge",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "第一狂战士-卡赞-the-first-berserker-khazan-868",
        "name":  "第一狂战士: 卡赞 (The First Berserker: Khazan)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "第一后裔-the-first-descendant-869",
        "name":  "第一后裔 (The First Descendant)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "the-future-group-pixotope-pixotope-870",
        "name":  "The Future Group - Pixotope Pixotope",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "黄金河计划-the-gold-river-project-871",
        "name":  "黄金河计划 (The Gold River Project)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "无敌号-the-invincible-872",
        "name":  "无敌号 (The Invincible)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "审判者-the-inquisitor-873",
        "name":  "审判者 (The Inquisitor)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "the-killing-antidote-874",
        "name":  "The Killing Antidote",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "燃灯者联盟-the-lamplighters-league-875",
        "name":  "燃灯者联盟 (The Lamplighters League)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "the-last-caretaker-876",
        "name":  "The Last Caretaker",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "最后生还者第一部-the-last-of-us-part-i-877",
        "name":  "最后生还者第一部 (The Last of Us Part I)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "最后生还者第二部重制版-the-last-of-us-part-ii-remastered-878",
        "name":  "最后生还者第二部重制版 (The Last of Us Part II Remastered)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "末世奥力-the-last-oricru-879",
        "name":  "末世奥力 (The Last Oricru)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "the-legend-of-heroes-trails-through-daybreak-880",
        "name":  "The Legend of Heroes: Trails Through Daybreak",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "the-legend-of-heroes-trails-through-daybreak-ii-881",
        "name":  "The Legend of Heroes: Trails Through Daybreak II",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "魔戒-咕噜-the-lord-of-the-rings-gollum-882",
        "name":  "魔戒：咕噜 (The Lord of the Rings: Gollum)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "指环王-重返莫瑞亚-the-lord-of-the-rings-return-to-moria-883",
        "name":  "指环王：重返莫瑞亚 (The Lord of the Rings: Return to Moria)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "the-matchless-kungfu-884",
        "name":  "The Matchless KungFu",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "灵媒-the-medium-885",
        "name":  "灵媒 (The Medium)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "午夜漫步-the-midnight-walk-886",
        "name":  "午夜漫步 (The Midnight Walk)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "噩梦捕手-the-nightmare-catcher-887",
        "name":  "噩梦捕手 (The Nightmare Catcher)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "诡岛灵探-the-occultist-888",
        "name":  "诡岛灵探 (The Occultist)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "the-orville-interactive-fan-experience-889",
        "name":  "The Orville Interactive Fan Experience",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "逃生-试炼-the-outlast-trials-890",
        "name":  "逃生：试炼 (The Outlast Trials)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "天外世界-2-the-outer-worlds-2-891",
        "name":  "天外世界 2 (The Outer Worlds 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "无尽轮回-the-persistence-892",
        "name":  "无尽轮回 (The Persistence)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "米拉的补救-the-redress-of-mira-893",
        "name":  "米拉的补救 (The Redress of Mira)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "银河破裂者-the-riftbreaker-894",
        "name":  "银河破裂者 (The Riftbreaker)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "沉没之城重制版-the-sinking-city-remastered-895",
        "name":  "沉没之城重制版 (The Sinking City Remastered)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "侠乂行-浪迹天涯-the-swordsmen-x-survival-896",
        "name":  "侠乂行：浪迹天涯 (The Swordsmen X: Survival)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "塔罗斯法则-重启-the-talos-principle-reawakened-897",
        "name":  "塔罗斯法则：重启 (The Talos Principle: Reawakened)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "塔罗斯的法则-2-the-talos-principle-2-898",
        "name":  "塔罗斯的法则 2 (The Talos Principle 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "德州电锯杀人狂-the-texas-chain-saw-massacre-899",
        "name":  "德州电锯杀人狂 (The Texas Chain Saw Massacre)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "奇唤士-the-thaumaturge-900",
        "name":  "奇唤士 (The Thaumaturge)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "勇者-the-valiant-901",
        "name":  "勇者 (The Valiant)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "巫师-3-狂猎-the-witcher-3-wild-hunt-902",
        "name":  "巫师 3：狂猎 (The Witcher 3: Wild Hunt)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "three-alpha-one-nine-903",
        "name":  "Three Alpha One Nine",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "王权与自由-throne-and-liberty-904",
        "name":  "王权与自由 (THRONE AND LIBERTY)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "时空破坏者-time-breaker-905",
        "name":  "时空破坏者 (TIME BREAKER)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "泰坦之旅-2-titan-quest-ii-906",
        "name":  "泰坦之旅 2 (Titan Quest II)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "泰坦空间站-titan-station-907",
        "name":  "泰坦空间站 (Titan Station)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "to-hell-with-it-908",
        "name":  "To Hell With It",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "togges-909",
        "name":  "Togges",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "首都高赛车-tokyo-xtreme-racer-910",
        "name":  "首都高赛车 (Tokyo Xtreme Racer)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "彩虹六号-异种-tom-clancy-s-rainbow-six-extraction-911",
        "name":  "彩虹六号：异种 (Tom Clancy\u0027s Rainbow Six Extraction)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "彩虹六号-围攻-tom-clancy-s-rainbow-six-siege-912",
        "name":  "彩虹六号：围攻 (Tom Clancy\u0027s Rainbow Six Siege)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "topaz-labs-denoise-ai-913",
        "name":  "Topaz Labs DeNoise AI",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "topaz-labs-gigapixel-ai-914",
        "name":  "Topaz Labs Gigapixel AI",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "topaz-labs-photo-ai-915",
        "name":  "Topaz Labs Photo AI",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "topaz-labs-sharpen-ai-916",
        "name":  "Topaz Labs Sharpen AI",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "topaz-labs-video-ai-917",
        "name":  "Topaz Labs Video AI",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "扭矩漂移-2-torque-drift-2-918",
        "name":  "扭矩漂移 2 (Torque Drift 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "touchcast-inc-touchcast-virtual-conference-919",
        "name":  "Touchcast Inc. Touchcast Virtual Conference",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "幻塔-tower-of-fantasy-920",
        "name":  "幻塔 (Tower of Fantasy)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "阿加斯巴之塔-towers-of-aghasba-921",
        "name":  "阿加斯巴之塔 (Towers of Aghasba)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "trail-out-922",
        "name":  "TRAIL OUT",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "trepang2-923",
        "name":  "Trepang2",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "trench-tales-924",
        "name":  "Trench Tales",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "部落-3-对抗-tribes-3-rivals-925",
        "name":  "部落 3: 对抗 (Tribes 3: Rivals)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "trimble-sketchup-926",
        "name":  "Trimble Sketchup",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "卡车机械师-危险之路-truck-mechanic-dangerous-paths-prologue-927",
        "name":  "卡车机械师：危险之路 (Truck Mechanic: Dangerous Paths - Prologue)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "土尔博史罗斯-turbo-sloths-928",
        "name":  "土尔博史罗斯 (Turbo Sloths)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "twin-stones-the-journey-of-bukka-929",
        "name":  "Twin Stones: The Journey of Bukka",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "uboat-930",
        "name":  "UBOAT",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "ultra-form-alpha-931",
        "name":  "Ultra Form Alpha",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "神秘海域-盗贼传奇合辑-uncharted-legacy-of-thieves-collection-932",
        "name":  "神秘海域：盗贼传奇合辑 (Uncharted: Legacy of Thieves Collection)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "uncrashed-fpv-无人机模拟器-uncrashed-fpv-drone-simulator-933",
        "name":  "Uncrashed: FPV 无人机模拟器 (Uncrashed : FPV Drone Simulator)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "战盟-1944-united-1944-934",
        "name":  "战盟 1944 (United 1944)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "联合突击-诺曼底44-united-assault-normandy-44-935",
        "name":  "联合突击：诺曼底44 (United Assault - Normandy \u002744)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "unity-technologies-unity-936",
        "name":  "Unity Technologies\u0027 Unity",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "未知森林-unknown-woods-937",
        "name":  "未知森林 (Unknown Woods)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "直到黎明-until-dawn-938",
        "name":  "直到黎明 (Until Dawn)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "瓦尔哈尔-先驱者-valhall-harbinger-939",
        "name":  "瓦尔哈尔：先驱者 (VALHALL: Harbinger)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "北欧女神-极乐世界-valkyrie-elysium-940",
        "name":  "北欧女神：极乐世界 (Valkyrie Elysium)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "吸血鬼-避世血族-2-vampire-the-masquerade-bloodlines-2-941",
        "name":  "吸血鬼：避世血族 2 (Vampire: The Masquerade - Bloodlines 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "吸血鬼-避世血族-绝唱-vampire-the-masquerade-swansong-942",
        "name":  "吸血鬼：避世血族 - 绝唱 (Vampire: The Masquerade - Swansong)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "嗜血之王-崛起-vampires-bloodlord-rising-943",
        "name":  "嗜血之王：崛起 (Vampires: Bloodlord Rising)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "vector-strike-944",
        "name":  "Vector Strike",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "veed-video-editor-945",
        "name":  "VEED Video Editor",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "video-copilot-element-3d-946",
        "name":  "Video Copilot Element 3D",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "维京之怒-viking-rage-947",
        "name":  "维京之怒 (Viking Rage)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "violet-948",
        "name":  "Violet",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "vr-战士-5-r-e-v-o-virtua-fighter-5-r-e-v-o-949",
        "name":  "VR 战士 5 R.E.V.O. (Virtua Fighter 5 R.E.V.O.)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "vistandard-vrp2020-950",
        "name":  "Vistandard VRP2020",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "visual-components-951",
        "name":  "Visual Components",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "虚空航船-void-crew-952",
        "name":  "虚空航船 (Void Crew)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "vlc-media-player-rtx-video-super-resolution-953",
        "name":  "VLC Media Player (RTX Video Super Resolution)",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "vlr-954",
        "name":  "VLR",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "voidtrain-955",
        "name":  "Voidtrain",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "vr-奈良公园-vr-nara-park-956",
        "name":  "VR 奈良公园 (VR Nara Park)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "vrt-957",
        "name":  "vRt",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "wacky-west-958",
        "name":  "Wacky West",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "新西兰瓦卡马里纳山谷-wakamarina-valley-new-zealand-959",
        "name":  "新西兰瓦卡马里纳山谷 (Wakamarina Valley, New Zealand)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "wanted-dead-960",
        "name":  "Wanted: Dead",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "星际战甲-warframe-961",
        "name":  "星际战甲 (Warframe)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "战争避难所-warhaven-962",
        "name":  "战争避难所 (Warhaven)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "战争雷霆-war-thunder-963",
        "name":  "战争雷霆 (War Thunder)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "战锤西格玛时代-毁灭之境-warhammer-age-of-sigmar-realms-of-ruin-964",
        "name":  "战锤西格玛时代：毁灭之境 (Warhammer Age of Sigmar: Realms of Ruin)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "战锤-40k-暗潮-warhammer-40-000-darktide-965",
        "name":  "战锤 40K：暗潮 (Warhammer 40,000: Darktide)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "战锤-40k-星际战士-2-warhammer-40-000-space-marine-2-966",
        "name":  "战锤 40K：星际战士 2 (Warhammer 40,000: Space Marine 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "战锤-40k-极速狂飙-warhammer-40-000-speed-freeks-967",
        "name":  "战锤 40K：极速狂飙 (Warhammer 40,000: Speed Freeks)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "战锤-末世鼠疫-2-warhammer-vermintide-2-968",
        "name":  "战锤：末世鼠疫 2 (Warhammer: Vermintide 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "绝境急袭-挑战重重-warstride-challenges-969",
        "name":  "绝境急袭：挑战重重 (Warstride Challenges)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "看门狗-军团-watch-dogs-legion-970",
        "name":  "看门狗：军团 (Watch Dogs: Legion)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "寻路者-wayfinder-971",
        "name":  "寻路者 (Wayfinder)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "way-of-the-hunter-972",
        "name":  "Way of the Hunter",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "欢迎来到帕拉迪泽-welcome-to-paradize-973",
        "name":  "欢迎来到帕拉迪泽 (Welcome to ParadiZe)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "weta-digital-gazebo-974",
        "name":  "Weta Digital Gazebo",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "燕云十六声-where-winds-meet-975",
        "name":  "燕云十六声 (Where Winds Meet)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "whiskerwood-976",
        "name":  "Whiskerwood",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "谁是艾比-who-is-abby-977",
        "name":  "谁是艾比 (Who is Abby)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "why-don-t-they-laugh-978",
        "name":  "Why Don\u0027t They Laugh?",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "兽猎突袭-wild-assault-979",
        "name":  "兽猎突袭 (Wild Assault)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "无主星渊-wildgate-980",
        "name":  "无主星渊 (Wildgate)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "狂野之心-wild-hearts-981",
        "name":  "狂野之心 (WILD HEARTS)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "风启之旅-windrose-982",
        "name":  "风启之旅 (Windrose)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "winter-survival-983",
        "name":  "Winter Survival",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "女巫之火-witchfire-984",
        "name":  "女巫之火 (Witchfire)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "卧龙-苍天陨落-wo-long-fallen-dynasty-985",
        "name":  "卧龙：苍天陨落 (Wo Long: Fallen Dynasty)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "德军总部-新血脉-wolfenstein-youngblood-986",
        "name":  "德军总部：新血脉 (Wolfenstein: Youngblood)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "womp-987",
        "name":  "Womp",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "",
                     "rayReconstruction":  "Yes",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "wonder-ball-988",
        "name":  "Wonder Ball",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "wondershare-filmora-989",
        "name":  "Wondershare Filmora",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "workshop-simulator-990",
        "name":  "Workshop Simulator",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "诛仙世界-world-of-jade-dynasty-991",
        "name":  "诛仙世界 (World of Jade Dynasty)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "坦克世界-heat-world-of-tanks-heat-992",
        "name":  "坦克世界：HEAT (World of Tanks: HEAT)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "魔兽世界-暗影国度-world-of-warcraft-shadowlands-993",
        "name":  "魔兽世界：暗影国度 (World of Warcraft: Shadowlands)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "wrc-generations-fia-wrc-官方授权游戏-wrc-generations-the-fia-wrc-official-game-994",
        "name":  "WRC Generations (FIA WRC 官方授权游戏) (WRC Generations – The FIA WRC Official Game)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "撞车嘉年华-2-wreckfest-2-995",
        "name":  "撞车嘉年华 2 (Wreckfest 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "破坏创造王-wreckreation-996",
        "name":  "破坏创造王 (Wreckreation)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "扳手-wrench-997",
        "name":  "扳手 (Wrench)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "明末-渊虚之羽-wuchang-fallen-feathers-998",
        "name":  "明末：渊虚之羽 (WUCHANG: Fallen Feathers)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "鸣潮-wuthering-waves-999",
        "name":  "鸣潮 (Wuthering Waves)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "Yes",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "x4-基石-x4-foundations-1000",
        "name":  "X4：基石 (X4: Foundations)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 4X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "xaymar-streamfx-1001",
        "name":  "Xaymar StreamFX",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "Yes",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "xsplit-broadcaster-1002",
        "name":  "Xsplit Broadcaster",
        "type":  "App",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  "Yes"
                 }
    },
    {
        "id":  "轩辕剑柒-xuan-yuan-sword-vii-1003",
        "name":  "轩辕剑柒 (Xuan-Yuan Sword VII)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "Yes",
                     "ai":  ""
                 }
    },
    {
        "id":  "yag-1004",
        "name":  "Yag",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "人中之龙-极-yakuza-kiwami-2-1005",
        "name":  "人中之龙 极２ (Yakuza Kiwami 2)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "人中之龙-3-外传-dark-ties-yakuza-kiwami-3-dark-ties-1006",
        "name":  "人中之龙 3 外传 Dark Ties (Yakuza Kiwami 3 \u0026 Dark Ties)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "NV, T",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "绝区零-zenless-zone-zero-1007",
        "name":  "绝区零 (Zenless Zone Zero)",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "",
                     "frameGeneration":  "",
                     "superResolution":  "Yes",
                     "rayReconstruction":  "",
                     "dlaa":  "Yes",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    },
    {
        "id":  "zombie-city-1008",
        "name":  "Zombie City",
        "type":  "游戏",
        "tech":  {
                     "multiFrameGeneration":  "NV, 6X",
                     "frameGeneration":  "NV, U",
                     "superResolution":  "NV, T",
                     "rayReconstruction":  "",
                     "dlaa":  "",
                     "rayTracing":  "",
                     "ai":  ""
                 }
    }
];
