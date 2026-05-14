const SOURCE_URL = "https://www.nvidia.cn/geforce/graphics-cards/compare/#compare-50";

const SERIES_ORDER = [
  "RTX 50 系列",
  "RTX 40 系列",
  "RTX 30 系列",
  "RTX 20 系列",
  "GTX 16 系列"
];

const SPEC_FIELDS = [
  { key: "cudaCores", label: "NVIDIA CUDA 核心数量", category: "GPU 引擎规格" },
  { key: "shaderCore", label: "Shader Core", category: "GPU 引擎规格" },
  { key: "tensorCore", label: "Tensor Core / AI", category: "GPU 引擎规格" },
  { key: "rtCore", label: "RT Core", category: "GPU 引擎规格" },
  { key: "boostClock", label: "加速频率", category: "GPU 引擎规格" },
  { key: "baseClock", label: "基础频率", category: "GPU 引擎规格" },
  { key: "memoryConfig", label: "标准显存配置", category: "显存规格" },
  { key: "memoryBus", label: "显存位宽", category: "显存规格" },
  { key: "memoryBandwidth", label: "显存带宽", category: "显存规格" },
  { key: "maxResolution", label: "最高数字分辨率和刷新率", category: "显示器支持" },
  { key: "displayConnectors", label: "标准显示器接口", category: "显示器支持" },
  { key: "multiMonitor", label: "可支持的多显示器数", category: "显示器支持" },
  { key: "hdcp", label: "HDCP", category: "显示器支持" },
  { key: "architecture", label: "NVIDIA 架构", category: "技术支持" },
  { key: "rayTracing", label: "支持光线追踪", category: "技术支持" },
  { key: "dlss", label: "NVIDIA DLSS", category: "技术支持" },
  { key: "reflex", label: "NVIDIA Reflex", category: "技术支持" },
  { key: "broadcast", label: "NVIDIA Broadcast", category: "技术支持" },
  { key: "pciExpress", label: "PCI Express", category: "技术支持" },
  { key: "resizableBar", label: "Resizable BAR", category: "技术支持" },
  { key: "gSync", label: "NVIDIA G-SYNC", category: "技术支持" },
  { key: "gameReady", label: "Game Ready 驱动", category: "技术支持" },
  { key: "studioDriver", label: "NVIDIA Studio 驱动", category: "技术支持" },
  { key: "omniverse", label: "NVIDIA Omniverse", category: "技术支持" },
  { key: "dx12", label: "DirectX 12 Ultimate", category: "技术支持" },
  { key: "gpuBoost", label: "NVIDIA GPU Boost", category: "技术支持" },
  { key: "nvlink", label: "NVLink / SLI", category: "技术支持" },
  { key: "vulkanOpenGL", label: "Vulkan / OpenGL", category: "技术支持" },
  { key: "nvenc", label: "NVENC", category: "技术支持" },
  { key: "nvdec", label: "NVDEC", category: "技术支持" },
  { key: "av1Encode", label: "AV1 编码", category: "技术支持" },
  { key: "av1Decode", label: "AV1 解码", category: "技术支持" },
  { key: "cudaCapability", label: "CUDA 能力", category: "技术支持" },
  { key: "vrReady", label: "VR Ready", category: "技术支持" },
  { key: "length", label: "长度", category: "显卡尺寸" },
  { key: "width", label: "宽度", category: "显卡尺寸" },
  { key: "slots", label: "插槽", category: "显卡尺寸" },
  { key: "maxTemp", label: "最高 GPU 温度", category: "温度和功率规格" },
  { key: "graphicsPower", label: "显卡功耗", category: "温度和功率规格" },
  { key: "systemPower", label: "要求的系统功率", category: "温度和功率规格" },
  { key: "powerConnector", label: "辅助电源接口", category: "温度和功率规格" }
];

const CHART_FIELDS = [
  { key: "cudaCores", label: "CUDA 核心数量", unit: "个" },
  { key: "boostClock", label: "加速频率", unit: "GHz" },
  { key: "baseClock", label: "基础频率", unit: "GHz" },
  { key: "vram", label: "显存容量", unit: "GB" },
  { key: "memoryBus", label: "显存位宽", unit: "bit" },
  { key: "memoryBandwidth", label: "显存带宽", unit: "GB/s" },
  { key: "graphicsPower", label: "显卡功耗", unit: "W" },
  { key: "systemPower", label: "要求系统功率", unit: "W" },
  { key: "maxTemp", label: "最高 GPU 温度", unit: "℃" }
];

const DISPLAY_50 = "借助 DSC 技术支持 4K 480Hz 或 8K 165Hz";
const DISPLAY_40 = "4K 240Hz 或借助 DSC 技术支持 8K 60Hz HDR";
const DISPLAY_30 = "7680x4320";
const DISPLAY_20 = "7680x4320";
const DISPLAY_16_120 = "7680x4320 @ 120Hz";
const DISPLAY_16_60 = "7680x4320 @ 60Hz";
const PORTS_50 = "3x DisplayPort，1x HDMI";
const PORTS_40 = "HDMI，3 个 DisplayPort";
const PORTS_30_4 = "HDMI，3 个 DisplayPort";
const PORTS_30_3 = "HDMI，2 个 DisplayPort";

const yes = "是";
const no = "否";
const dash = "-";
const varies = "因制造商而异";

const GPUS = [
  gpu("rtx-5090-d-v2", "RTX 50 系列", "GeForce RTX 5090 D v2", {
    cudaCores: 21760, shaderCore: "Blackwell", tensorCore: "第 5 代 · 2375 AI TOPS", rtCore: "第 4 代 · 318 TFLOPS", boostClock: "2.41 GHz", baseClock: "2.01 GHz", memoryConfig: "24 GB GDDR7", memoryBus: "384 位", memoryBandwidth: "1344 GB/秒", maxResolution: DISPLAY_50, displayConnectors: PORTS_50, multiMonitor: "4", hdcp: "2.3", architecture: "Blackwell", rayTracing: yes, dlss: "DLSS 4.5", reflex: "Reflex 2", broadcast: yes, pciExpress: "第 5 代", resizableBar: yes, gSync: yes, gameReady: yes, studioDriver: yes, omniverse: yes, dx12: yes, gpuBoost: yes, nvlink: no, vulkanOpenGL: "Vulkan 1.4 / OpenGL 4.6", nvenc: "3x 第 9 代", nvdec: "2x 第 6 代", av1Encode: yes, av1Decode: yes, cudaCapability: "12.0", vrReady: yes, length: varies, width: varies, slots: varies, maxTemp: "90 ℃", graphicsPower: "575 W", systemPower: "1000 W", powerConnector: "4 x PCIe 8-pin 转接线或 600W 及以上第 5 代 PCIe 电源线" },
    { cudaCores: 21760, boostClock: 2.41, baseClock: 2.01, vram: 24, memoryBus: 384, memoryBandwidth: 1344, graphicsPower: 575, systemPower: 1000, maxTemp: 90 }
  ),
  gpu("rtx-5080", "RTX 50 系列", "GeForce RTX 5080", {
    cudaCores: 10752, shaderCore: "Blackwell", tensorCore: "第 5 代 · 1801 AI TOPS", rtCore: "第 4 代 · 171 TFLOPS", boostClock: "2.62 GHz", baseClock: "2.30 GHz", memoryConfig: "16 GB GDDR7", memoryBus: "256 位", memoryBandwidth: "960 GB/秒", maxResolution: DISPLAY_50, displayConnectors: PORTS_50, multiMonitor: "4", hdcp: "2.3", architecture: "Blackwell", rayTracing: yes, dlss: "DLSS 4.5", reflex: "Reflex 2", broadcast: yes, pciExpress: "第 5 代", resizableBar: yes, gSync: yes, gameReady: yes, studioDriver: yes, omniverse: yes, dx12: yes, gpuBoost: yes, nvlink: no, vulkanOpenGL: "Vulkan 1.4 / OpenGL 4.6", nvenc: "2x 第 9 代", nvdec: "2x 第 6 代", av1Encode: yes, av1Decode: yes, cudaCapability: "12.0", vrReady: yes, length: "304 mm", width: "137 mm", slots: "2 插槽", maxTemp: "88 ℃", graphicsPower: "360 W", systemPower: "850 W", powerConnector: "3 x PCIe 8-pin 转接线或 450W 及以上第 5 代 PCIe 电源线" },
    { cudaCores: 10752, boostClock: 2.62, baseClock: 2.30, vram: 16, memoryBus: 256, memoryBandwidth: 960, graphicsPower: 360, systemPower: 850, maxTemp: 88 }
  ),
  gpu("rtx-5070-ti", "RTX 50 系列", "GeForce RTX 5070 Ti", {
    cudaCores: 8960, shaderCore: "Blackwell", tensorCore: "第 5 代 · 1406 AI TOPS", rtCore: "第 4 代 · 133 TFLOPS", boostClock: "2.45 GHz", baseClock: "2.30 GHz", memoryConfig: "16 GB GDDR7", memoryBus: "256 位", memoryBandwidth: "896 GB/秒", maxResolution: DISPLAY_50, displayConnectors: PORTS_50, multiMonitor: "4", hdcp: "2.3", architecture: "Blackwell", rayTracing: yes, dlss: "DLSS 4.5", reflex: "Reflex 2", broadcast: yes, pciExpress: "第 5 代", resizableBar: yes, gSync: yes, gameReady: yes, studioDriver: yes, omniverse: yes, dx12: yes, gpuBoost: yes, nvlink: no, vulkanOpenGL: "Vulkan 1.4 / OpenGL 4.6", nvenc: "2x 第 9 代", nvdec: "1x 第 6 代", av1Encode: yes, av1Decode: yes, cudaCapability: "12.0", vrReady: yes, length: varies, width: varies, slots: varies, maxTemp: "88 ℃", graphicsPower: "300 W", systemPower: "750 W", powerConnector: "2 x PCIe 8-pin 转接线或 300W 及以上第 5 代 PCIe 电源线" },
    { cudaCores: 8960, boostClock: 2.45, baseClock: 2.30, vram: 16, memoryBus: 256, memoryBandwidth: 896, graphicsPower: 300, systemPower: 750, maxTemp: 88 }
  ),
  gpu("rtx-5070", "RTX 50 系列", "GeForce RTX 5070", {
    cudaCores: 6144, shaderCore: "Blackwell", tensorCore: "第 5 代 · 988 AI TOPS", rtCore: "第 4 代 · 94 TFLOPS", boostClock: "2.51 GHz", baseClock: "2.33 GHz", memoryConfig: "12 GB GDDR7", memoryBus: "192 位", memoryBandwidth: "672 GB/秒", maxResolution: DISPLAY_50, displayConnectors: PORTS_50, multiMonitor: "4", hdcp: "2.3", architecture: "Blackwell", rayTracing: yes, dlss: "DLSS 4.5", reflex: "Reflex 2", broadcast: yes, pciExpress: "第 5 代", resizableBar: yes, gSync: yes, gameReady: yes, studioDriver: yes, omniverse: yes, dx12: yes, gpuBoost: yes, nvlink: no, vulkanOpenGL: "Vulkan 1.4 / OpenGL 4.6", nvenc: "1x 第 9 代", nvdec: "1x 第 6 代", av1Encode: yes, av1Decode: yes, cudaCapability: "12.0", vrReady: yes, length: "242 mm", width: "112 mm", slots: "2 插槽", maxTemp: "85 ℃", graphicsPower: "250 W", systemPower: "650 W", powerConnector: "2 x PCIe 8-pin 转接线或 300W 及以上第 5 代 PCIe 电源线" },
    { cudaCores: 6144, boostClock: 2.51, baseClock: 2.33, vram: 12, memoryBus: 192, memoryBandwidth: 672, graphicsPower: 250, systemPower: 650, maxTemp: 85 }
  ),
  gpu("rtx-5060-ti", "RTX 50 系列", "GeForce RTX 5060 Ti", {
    cudaCores: 4608, shaderCore: "Blackwell", tensorCore: "第 5 代 · 759 AI TOPS", rtCore: "第 4 代 · 72 TFLOPS", boostClock: "2.57 GHz", baseClock: "2.41 GHz", memoryConfig: "16 GB / 8 GB GDDR7", memoryBus: "128 位", memoryBandwidth: "448 GB/秒", maxResolution: DISPLAY_50, displayConnectors: PORTS_50, multiMonitor: "4", hdcp: "2.3", architecture: "Blackwell", rayTracing: yes, dlss: "DLSS 4.5", reflex: "Reflex 2", broadcast: yes, pciExpress: "第 5 代", resizableBar: yes, gSync: yes, gameReady: yes, studioDriver: yes, omniverse: yes, dx12: yes, gpuBoost: yes, nvlink: no, vulkanOpenGL: "Vulkan 1.4 / OpenGL 4.6", nvenc: "1x 第 9 代", nvdec: "1x 第 6 代", av1Encode: yes, av1Decode: yes, cudaCapability: "12.0", vrReady: yes, length: varies, width: varies, slots: varies, maxTemp: "87 ℃", graphicsPower: "180 W", systemPower: "600 W", powerConnector: "1 x PCIe 8-pin 或 300W 及以上第 5 代 PCIe 电源线" },
    { cudaCores: 4608, boostClock: 2.57, baseClock: 2.41, vram: 16, memoryBus: 128, memoryBandwidth: 448, graphicsPower: 180, systemPower: 600, maxTemp: 87 }
  ),
  gpu("rtx-5060", "RTX 50 系列", "GeForce RTX 5060", {
    cudaCores: 3840, shaderCore: "Blackwell", tensorCore: "第 5 代 · 614 AI TOPS", rtCore: "第 4 代 · 58 TFLOPS", boostClock: "2.50 GHz", baseClock: "2.28 GHz", memoryConfig: "8 GB GDDR7", memoryBus: "128 位", memoryBandwidth: "448 GB/秒", maxResolution: DISPLAY_50, displayConnectors: PORTS_50, multiMonitor: "4", hdcp: "2.3", architecture: "Blackwell", rayTracing: yes, dlss: "DLSS 4.5", reflex: "Reflex 2", broadcast: yes, pciExpress: "第 5 代", resizableBar: yes, gSync: yes, gameReady: yes, studioDriver: yes, omniverse: yes, dx12: yes, gpuBoost: yes, nvlink: no, vulkanOpenGL: "Vulkan 1.4 / OpenGL 4.6", nvenc: "1x 第 9 代", nvdec: "1x 第 6 代", av1Encode: yes, av1Decode: yes, cudaCapability: "12.0", vrReady: yes, length: varies, width: varies, slots: varies, maxTemp: "89 ℃", graphicsPower: "145 W", systemPower: "550 W", powerConnector: "1 x PCIe 8-pin 或 300W 及以上第 5 代 PCIe 电源线" },
    { cudaCores: 3840, boostClock: 2.50, baseClock: 2.28, vram: 8, memoryBus: 128, memoryBandwidth: 448, graphicsPower: 145, systemPower: 550, maxTemp: 89 }
  ),
  gpu("rtx-5050", "RTX 50 系列", "GeForce RTX 5050", {
    cudaCores: 2560, shaderCore: "Blackwell", tensorCore: "第 5 代 · 421 AI TOPS", rtCore: "第 4 代 · 40 TFLOPS", boostClock: "2.57 GHz", baseClock: "2.31 GHz", memoryConfig: "8 GB GDDR6", memoryBus: "128 位", memoryBandwidth: "320 GB/秒", maxResolution: DISPLAY_50, displayConnectors: PORTS_50, multiMonitor: "4", hdcp: "2.3", architecture: "Blackwell", rayTracing: yes, dlss: "DLSS 4.5", reflex: "Reflex 2", broadcast: yes, pciExpress: "第 5 代", resizableBar: yes, gSync: yes, gameReady: yes, studioDriver: yes, omniverse: yes, dx12: yes, gpuBoost: yes, nvlink: no, vulkanOpenGL: "Vulkan 1.4 / OpenGL 4.6", nvenc: "1x 第 9 代", nvdec: "1x 第 6 代", av1Encode: yes, av1Decode: yes, cudaCapability: "12.0", vrReady: yes, length: varies, width: varies, slots: varies, maxTemp: "87 ℃", graphicsPower: "130 W", systemPower: "550 W", powerConnector: "1 x PCIe 8-pin 或 300W 及以上第 5 代 PCIe 电源线" },
    { cudaCores: 2560, boostClock: 2.57, baseClock: 2.31, vram: 8, memoryBus: 128, memoryBandwidth: 320, graphicsPower: 130, systemPower: 550, maxTemp: 87 }
  ),

  gpu("rtx-4090-d", "RTX 40 系列", "GeForce RTX 4090 D", ada({
    cudaCores: 14592, shaderTf: "74 TFLOPS", tensor: "1177 AI TOPS", rt: "170 TFLOPS", boostClock: "2.52 GHz", baseClock: "2.28 GHz", memoryConfig: "24 GB GDDR6X", memoryBus: "384 位", nvenc: "2x 第 8 代", length: varies, width: varies, slots: varies, maxTemp: "90 ℃", idlePower: "19 W", videoPower: "26 W", gamingPower: "302 W", graphicsPower: "425 W", systemPower: "850 W", powerConnector: "3 x PCIe 8-pin 转接线或 450W 及以上第 5 代 PCIe 电源线"
  }), { cudaCores: 14592, boostClock: 2.52, baseClock: 2.28, vram: 24, memoryBus: 384, graphicsPower: 425, systemPower: 850, maxTemp: 90 }),
  gpu("rtx-4080-super", "RTX 40 系列", "GeForce RTX 4080 SUPER", ada({
    cudaCores: 10240, shaderTf: "52 TFLOPS", tensor: "836 AI TOPS", rt: "121 TFLOPS", boostClock: "2.55 GHz", baseClock: "2.29 GHz", memoryConfig: "16 GB GDDR6X", memoryBus: "256 位", nvenc: "2x 第 8 代", length: "304 mm", width: "137 mm", slots: "3 插槽", maxTemp: "90 ℃", idlePower: "15 W", videoPower: "22 W", gamingPower: "246 W", graphicsPower: "320 W", systemPower: "750 W", powerConnector: "3 x PCIe 8-pin 转接线或 450W 及以上第 5 代 PCIe 电源线"
  }), { cudaCores: 10240, boostClock: 2.55, baseClock: 2.29, vram: 16, memoryBus: 256, graphicsPower: 320, systemPower: 750, maxTemp: 90 }),
  gpu("rtx-4080", "RTX 40 系列", "GeForce RTX 4080", ada({
    cudaCores: 9728, shaderTf: "49 TFLOPS", tensor: "780 AI TOPS", rt: "113 TFLOPS", boostClock: "2.51 GHz", baseClock: "2.21 GHz", memoryConfig: "16 GB GDDR6X", memoryBus: "256 位", nvenc: "2x 第 8 代", length: "304 mm", width: "137 mm", slots: "3 插槽", maxTemp: "90 ℃", idlePower: "13 W", videoPower: "21 W", gamingPower: "251 W", graphicsPower: "320 W", systemPower: "750 W", powerConnector: "3 x PCIe 8-pin 转接线或 450W 及以上第 5 代 PCIe 电源线"
  }), { cudaCores: 9728, boostClock: 2.51, baseClock: 2.21, vram: 16, memoryBus: 256, graphicsPower: 320, systemPower: 750, maxTemp: 90 }),
  gpu("rtx-4070-ti-super", "RTX 40 系列", "GeForce RTX 4070 Ti SUPER", ada({
    cudaCores: 8448, shaderTf: "44 TFLOPS", tensor: "706 AI TOPS", rt: "102 TFLOPS", boostClock: "2.61 GHz", baseClock: "2.34 GHz", memoryConfig: "16 GB GDDR6X", memoryBus: "256 位", nvenc: "2x 第 8 代", length: varies, width: varies, slots: varies, maxTemp: "90 ℃", idlePower: "12 W", videoPower: "17 W", gamingPower: "226 W", graphicsPower: "285 W", systemPower: "700 W", powerConnector: "2 x PCIe 8-pin 转接线或 300W 及以上第 5 代 PCIe 电源线"
  }), { cudaCores: 8448, boostClock: 2.61, baseClock: 2.34, vram: 16, memoryBus: 256, graphicsPower: 285, systemPower: 700, maxTemp: 90 }),
  gpu("rtx-4070-ti", "RTX 40 系列", "GeForce RTX 4070 Ti", ada({
    cudaCores: 7680, shaderTf: "40 TFLOPS", tensor: "641 AI TOPS", rt: "93 TFLOPS", boostClock: "2.61 GHz", baseClock: "2.31 GHz", memoryConfig: "12 GB GDDR6X", memoryBus: "192 位", nvenc: "2x 第 8 代", length: varies, width: varies, slots: varies, maxTemp: "90 ℃", idlePower: "12 W", videoPower: "20 W", gamingPower: "226 W", graphicsPower: "285 W", systemPower: "700 W", powerConnector: "2 x PCIe 8-pin 转接线或 300W 及以上第 5 代 PCIe 电源线"
  }), { cudaCores: 7680, boostClock: 2.61, baseClock: 2.31, vram: 12, memoryBus: 192, graphicsPower: 285, systemPower: 700, maxTemp: 90 }),
  gpu("rtx-4070-super", "RTX 40 系列", "GeForce RTX 4070 SUPER", ada({
    cudaCores: 7168, shaderTf: "36 TFLOPS", tensor: "568 AI TOPS", rt: "82 TFLOPS", boostClock: "2.48 GHz", baseClock: "1.98 GHz", memoryConfig: "12 GB GDDR6X", memoryBus: "192 位", nvenc: "1x 第 8 代", length: "244 mm", width: "112 mm", slots: "2 插槽", maxTemp: "90 ℃", idlePower: "11 W", videoPower: "16 W", gamingPower: "200 W", graphicsPower: "220 W", systemPower: "650 W", powerConnector: "2 x PCIe 8-pin 或 300W 及以上第 5 代 PCIe 电源线"
  }), { cudaCores: 7168, boostClock: 2.48, baseClock: 1.98, vram: 12, memoryBus: 192, graphicsPower: 220, systemPower: 650, maxTemp: 90 }),
  gpu("rtx-4070", "RTX 40 系列", "GeForce RTX 4070", ada({
    cudaCores: 5888, shaderTf: "29 TFLOPS", tensor: "466 AI TOPS", rt: "67 TFLOPS", boostClock: "2.48 GHz", baseClock: "1.92 GHz", memoryConfig: "12 GB GDDR6 / 12 GB GDDR6X", memoryBus: "192 位", nvenc: "1x 第 8 代", length: "244 mm", width: "112 mm", slots: "2 插槽", maxTemp: "90 ℃", idlePower: "10 W", videoPower: "16 W", gamingPower: "186 W", graphicsPower: "200 W", systemPower: "650 W", powerConnector: "2 x PCIe 8-pin 或 300W 及以上第 5 代 PCIe 电源线"
  }), { cudaCores: 5888, boostClock: 2.48, baseClock: 1.92, vram: 12, memoryBus: 192, graphicsPower: 200, systemPower: 650, maxTemp: 90 }),
  gpu("rtx-4060-ti", "RTX 40 系列", "GeForce RTX 4060 Ti", ada({
    cudaCores: 4352, shaderTf: "22 TFLOPS", tensor: "353 AI TOPS", rt: "51 TFLOPS", boostClock: "2.54 GHz", baseClock: "2.31 GHz", memoryConfig: "16 GB GDDR6 或 8 GB GDDR6", memoryBus: "128 位", nvenc: "1x 第 8 代", length: "244 mm", width: "112 mm", slots: "2 插槽", maxTemp: "90 ℃", idlePower: "7 W", videoPower: "13 W", gamingPower: "140 W", graphicsPower: "165 W 或 160 W", systemPower: "550 W", powerConnector: "1 x PCIe 8-pin 或 300W 及以上第 5 代 PCIe 电源线"
  }), { cudaCores: 4352, boostClock: 2.54, baseClock: 2.31, vram: 16, memoryBus: 128, graphicsPower: 165, systemPower: 550, maxTemp: 90 }),
  gpu("rtx-4060", "RTX 40 系列", "GeForce RTX 4060", ada({
    cudaCores: 3072, shaderTf: "15 TFLOPS", tensor: "242 AI TOPS", rt: "35 TFLOPS", boostClock: "2.46 GHz", baseClock: "1.83 GHz", memoryConfig: "8 GB GDDR6", memoryBus: "128 位", nvenc: "1x 第 8 代", length: varies, width: varies, slots: "2 插槽", maxTemp: "90 ℃", idlePower: "7 W", videoPower: "11 W", gamingPower: "110 W", graphicsPower: "115 W", systemPower: "550 W", powerConnector: "1 x PCIe 6-pin 或 1 x PCIe 8-pin"
  }), { cudaCores: 3072, boostClock: 2.46, baseClock: 1.83, vram: 8, memoryBus: 128, graphicsPower: 115, systemPower: 550, maxTemp: 90 }),

  gpu30("rtx-3090-ti", "GeForce RTX 3090 Ti", 10752, "1.86 GHz", "1.56 GHz", "24 GB GDDR6X", "384 位", "是", "12.3\"（313 毫米）", "5.4\"（138 毫米）", "3 插槽", "92 ℃", "450 W", "850 W", "3 个 PCIe 8-Pin 或第五代 PCIe 接口", { cudaCores: 10752, boostClock: 1.86, baseClock: 1.56, vram: 24, memoryBus: 384, graphicsPower: 450, systemPower: 850, maxTemp: 92 }),
  gpu30("rtx-3090", "GeForce RTX 3090", 10496, "1.70 GHz", "1.40 GHz", "24 GB GDDR6X", "384 位", "是", "12.3\"（313 毫米）", "5.4\"（138 毫米）", "3 插槽", "93 ℃", "350 W", "750 W", "2 个 PCIe 8-Pin（含 12 针适配器）", { cudaCores: 10496, boostClock: 1.70, baseClock: 1.40, vram: 24, memoryBus: 384, graphicsPower: 350, systemPower: 750, maxTemp: 93 }),
  gpu30("rtx-3080-ti", "GeForce RTX 3080 Ti", 10240, "1.67 GHz", "1.37 GHz", "12 GB GDDR6X", "384 位", "-", "11.2\"（285 毫米）", "4.4\"（112 毫米）", "2 插槽", "93 ℃", "350 W", "750 W", "2 个 PCIe 8-Pin（含 12 针适配器）", { cudaCores: 10240, boostClock: 1.67, baseClock: 1.37, vram: 12, memoryBus: 384, graphicsPower: 350, systemPower: 750, maxTemp: 93 }),
  gpu30("rtx-3080", "GeForce RTX 3080", "8960 / 8704", "1.71 GHz", "1.26 / 1.44 GHz", "12 GB GDDR6X / 10 GB GDDR6X", "384 位 / 320 位", "-", "11.2\"（285 毫米）", "4.4\"（112 毫米）", "2 插槽", "93 ℃", "350 / 320 W", "750 W", "2 个 PCIe 8-Pin（含 12 针适配器）", { cudaCores: 8960, boostClock: 1.71, baseClock: 1.44, vram: 12, memoryBus: 384, graphicsPower: 350, systemPower: 750, maxTemp: 93 }),
  gpu30("rtx-3070-ti", "GeForce RTX 3070 Ti", 6144, "1.77 GHz", "1.58 GHz", "8 GB GDDR6X", "256 位", "-", "10.5\"（267 毫米）", "4.4\"（112 毫米）", "2 插槽", "93 ℃", "290 W", "750 W", "2 个 PCIe 8-Pin（含 12 针适配器）", { cudaCores: 6144, boostClock: 1.77, baseClock: 1.58, vram: 8, memoryBus: 256, graphicsPower: 290, systemPower: 750, maxTemp: 93 }),
  gpu30("rtx-3070", "GeForce RTX 3070", 5888, "1.73 GHz", "1.50 GHz", "8 GB GDDR6", "256 位", "-", "9.5\"（242 毫米）", "4.4\"（112 毫米）", "2 插槽", "93 ℃", "220 W", "650 W", "1 个 PCIe 8-Pin（含 12 针适配器）", { cudaCores: 5888, boostClock: 1.73, baseClock: 1.50, vram: 8, memoryBus: 256, graphicsPower: 220, systemPower: 650, maxTemp: 93 }),
  gpu30("rtx-3060-ti", "GeForce RTX 3060 Ti", 4864, "1.67 GHz", "1.41 GHz", "8 GB GDDR6 / 8 GB GDDR6X", "256 位", "-", "9.5\"（242 毫米）", "4.4\"（112 毫米）", "2 插槽", "93 ℃", "200 W", "600 W", "1 个 PCIe 8-Pin（含 12 针适配器）", { cudaCores: 4864, boostClock: 1.67, baseClock: 1.41, vram: 8, memoryBus: 256, graphicsPower: 200, systemPower: 600, maxTemp: 93 }),
  gpu30("rtx-3060", "GeForce RTX 3060", 3584, "1.78 GHz", "1.32 GHz", "12 GB GDDR6 / 8 GB GDDR6", "192 位 / 128 位", "-", varies, varies, varies, "93 ℃", "170 W", "550 W", "1 个 PCIe 8-Pin", { cudaCores: 3584, boostClock: 1.78, baseClock: 1.32, vram: 12, memoryBus: 192, graphicsPower: 170, systemPower: 550, maxTemp: 93 }),
  gpu30("rtx-3050-8gb", "GeForce RTX 3050 (8 GB)", "2560", "1.78 GHz", "1.55 GHz", "8 GB GDDR6", "128 位", "-", varies, varies, varies, "93 ℃", "130 W", "550 W", "1 个 PCIe 8-Pin", { cudaCores: 2560, boostClock: 1.78, baseClock: 1.55, vram: 8, memoryBus: 128, graphicsPower: 130, systemPower: 550, maxTemp: 93 }),
  gpu30("rtx-3050-6gb", "GeForce RTX 3050 (6 GB)", 2304, "1.47 GHz", "1.04 GHz", "6 GB GDDR6", "96 位", "-", varies, varies, varies, "93 ℃", "70 W", "300 W", "-", { cudaCores: 2304, boostClock: 1.47, baseClock: 1.04, vram: 6, memoryBus: 96, graphicsPower: 70, systemPower: 300, maxTemp: 93 }),

  gpu20("rtx-2080-ti", "GeForce RTX 2080 Ti", 4352, "1.64 GHz", "1.35 GHz", "11 GB GDDR6", "352 位", "DisplayPort、HDMI、USB Type-C", "10.5\"（266.74 毫米）", "4.556\"（115.7 毫米）", "2 插槽", "89 ℃", "260 W", "650 W", "2 个 PCIe 8-Pin", { cudaCores: 4352, boostClock: 1.64, baseClock: 1.35, vram: 11, memoryBus: 352, graphicsPower: 260, systemPower: 650, maxTemp: 89 }),
  gpu20("rtx-2080-super", "GeForce RTX 2080 SUPER", 3072, "1.82 GHz", "1.65 GHz", "8 GB GDDR6", "256 位", "DisplayPort、HDMI", "10.5\"（266.74 毫米）", "4.556\"（115.7 毫米）", "2 插槽", "89 ℃", "250 W", "650 W", "1 个 PCIe 6-Pin + 1 个 PCIe 8-Pin", { cudaCores: 3072, boostClock: 1.82, baseClock: 1.65, vram: 8, memoryBus: 256, graphicsPower: 250, systemPower: 650, maxTemp: 89 }),
  gpu20("rtx-2080", "GeForce RTX 2080", 2944, "1.8 GHz", "1.52 GHz", "8 GB GDDR6", "256 位", "DisplayPort、HDMI、USB Type-C", "10.5\"（266.74 毫米）", "4.556\"（115.7 毫米）", "2 插槽", "88 ℃", "225 W", "650 W", "1 个 PCIe 6-Pin + 1 个 PCIe 8-Pin", { cudaCores: 2944, boostClock: 1.8, baseClock: 1.52, vram: 8, memoryBus: 256, graphicsPower: 225, systemPower: 650, maxTemp: 88 }),
  gpu20("rtx-2070-super", "GeForce RTX 2070 SUPER", 2560, "1.77 GHz", "1.61 GHz", "8 GB GDDR6", "256 位", "DisplayPort、HDMI", "10.5\"（266.74 毫米）", "4.556\"（115.7 毫米）", "2 插槽", "88 ℃", "215 W", "650 W", "1 个 PCIe 6-Pin + 1 个 PCIe 8-Pin", { cudaCores: 2560, boostClock: 1.77, baseClock: 1.61, vram: 8, memoryBus: 256, graphicsPower: 215, systemPower: 650, maxTemp: 88 }),
  gpu20("rtx-2070", "GeForce RTX 2070", 2304, "1.71 GHz", "1.41 GHz", "8 GB GDDR6", "256 位", "DisplayPort、HDMI、USB Type-C、DVI-DL", "9.0\"（228.60 毫米）", "4.435\"（112.6 毫米）", "2 插槽", "89 ℃", "185 W", "550 W", "1 个 PCIe 8-Pin", { cudaCores: 2304, boostClock: 1.71, baseClock: 1.41, vram: 8, memoryBus: 256, graphicsPower: 185, systemPower: 550, maxTemp: 89 }),
  gpu20("rtx-2060-super", "GeForce RTX 2060 SUPER", 2176, "1.65 GHz", "1.47 GHz", "8 GB GDDR6", "256 位", "DisplayPort、HDMI、DVI-DL", "9.0\"（228.60 毫米）", "4.435\"（112.6 毫米）", "2 插槽", "89 ℃", "175 W", "550 W", "1 个 PCIe 8-Pin", { cudaCores: 2176, boostClock: 1.65, baseClock: 1.47, vram: 8, memoryBus: 256, graphicsPower: 175, systemPower: 550, maxTemp: 89 }),
  gpu20("rtx-2060", "GeForce RTX 2060", "2176 / 1920", "1.65 / 1.68 GHz", "1.47 / 1.37 GHz", "12 GB GDDR6 / 6 GB GDDR6", "192 位", "DisplayPort、HDMI、DVI-DL", "9.0\"（228.60 毫米）", "4.435\"（112.6 毫米）", "2 插槽", "88 ℃", "185 / 160 W", "550 / 500 W", "1 个 PCIe 8-Pin", { cudaCores: 2176, boostClock: 1.68, baseClock: 1.47, vram: 12, memoryBus: 192, graphicsPower: 185, systemPower: 550, maxTemp: 88 }),

  gpu16("gtx-1660-ti", "GeForce GTX 1660 Ti", 1536, "1770 MHz", "1500 MHz", "6GB GDDR6", "192 位", yes, DISPLAY_16_120, "DP 1.4a, HDMI 2.0b, DL-DVI-D", "5.7\" (145 mm)", "4.37\" (111 mm)", "2 插槽", "95 ℃", "120 W", "450 W", "一个 8-pin 接口", { cudaCores: 1536, boostClock: 1.77, baseClock: 1.5, vram: 6, memoryBus: 192, graphicsPower: 120, systemPower: 450, maxTemp: 95 }),
  gpu16("gtx-1660-super", "GeForce GTX 1660 Super", 1408, "1785 MHz", "1530 MHz", "6GB GDDR6", "192 位", yes, DISPLAY_16_120, "DP 1.4a, HDMI 2.0b, DL-DVI-D", "5.7\" (145 mm)", "4.37\" (111 mm)", "2 插槽", "93 ℃", "125 W", "450 W", "一个 8-pin 接口", { cudaCores: 1408, boostClock: 1.785, baseClock: 1.53, vram: 6, memoryBus: 192, graphicsPower: 125, systemPower: 450, maxTemp: 93 }),
  gpu16("gtx-1660", "GeForce GTX 1660", 1408, "1785 MHz", "1530 MHz", "6GB GDDR5", "192 位", yes, DISPLAY_16_120, "DP 1.4a, HDMI 2.0b, DL-DVI-D", "5.7\" (145 mm)", "4.37\" (111 mm)", "2 插槽", "95 ℃", "120 W", "450 W", "一个 8-pin 接口", { cudaCores: 1408, boostClock: 1.785, baseClock: 1.53, vram: 6, memoryBus: 192, graphicsPower: 120, systemPower: 450, maxTemp: 95 }),
  gpu16("gtx-1650-super", "GeForce GTX 1650 Super", 1280, "1725 MHz", "1530 MHz", "4GB GDDR6", "128 位", yes, DISPLAY_16_120, "DP 1.4a, HDMI 2.0b, DL-DVI-D", "6.3\" (160 mm)", "4.53\" (115 mm)", "2 插槽", "90 ℃", "100 W", "350 W", "一个 6-pin 接口", { cudaCores: 1280, boostClock: 1.725, baseClock: 1.53, vram: 4, memoryBus: 128, graphicsPower: 100, systemPower: 350, maxTemp: 90 }),
  gpu16("gtx-1650-g5", "GeForce GTX 1650 (G5)", 896, "1665 MHz", "1485 MHz", "4GB GDDR5", "128 位", dash, DISPLAY_16_120, "HDMI 2.0b, DL-DVI-D", "5.1\" (130 mm)", "4.37\" (111 mm)", "2 插槽", "92 ℃", "75 W", "300 W", "一个 6-pin 接口", { cudaCores: 896, boostClock: 1.665, baseClock: 1.485, vram: 4, memoryBus: 128, graphicsPower: 75, systemPower: 300, maxTemp: 92 }),
  gpu16("gtx-1650-g6", "GeForce GTX 1650 (G6)", 896, "1590 MHz", "1410 MHz", "4GB GDDR6", "128 位", dash, DISPLAY_16_120, "HDMI 2.0b, DL-DVI-D, DP 1.4a", "5.7\" (145 mm)", "4.38\" (111 mm)", "2 插槽", "90-94 ℃", "75 W", "300 W", "一个 6-pin 接口", { cudaCores: 896, boostClock: 1.59, baseClock: 1.41, vram: 4, memoryBus: 128, graphicsPower: 75, systemPower: 300, maxTemp: 94 }),
  gpu16("gtx-1630", "GeForce GTX 1630", 512, "1785 MHz", "1740 MHz", "4GB GDDR6", "64 位", dash, DISPLAY_16_60, "HDMI 2.0b, DL-DVI-D, DP 1.4a", "5.7\" (145 mm)", "4.38\" (111 mm)", "2 插槽", "90-94 ℃", "75 W", "300 W", "一个 6-pin 接口", { cudaCores: 512, boostClock: 1.785, baseClock: 1.74, vram: 4, memoryBus: 64, graphicsPower: 75, systemPower: 300, maxTemp: 94 })
];

function gpu(id, series, name, specs, metrics) {
  return { id, series, name, specs, metrics };
}

function ada(overrides) {
  return {
    shaderCore: `Ada Lovelace · ${overrides.shaderTf}`,
    tensorCore: `第 4 代 · ${overrides.tensor}`,
    rtCore: `第 3 代 · ${overrides.rt}`,
    maxResolution: DISPLAY_40,
    displayConnectors: PORTS_40,
    multiMonitor: "最多 4 个",
    hdcp: "2.3",
    architecture: "Ada Lovelace",
    rayTracing: yes,
    dlss: "DLSS 3",
    reflex: yes,
    broadcast: yes,
    pciExpress: "第 4 代",
    resizableBar: yes,
    gSync: yes,
    gameReady: yes,
    studioDriver: yes,
    omniverse: yes,
    dx12: yes,
    gpuBoost: yes,
    nvlink: no,
    vulkanOpenGL: "Vulkan RT API / OpenGL 4.6",
    nvdec: "第 5 代",
    av1Encode: yes,
    av1Decode: yes,
    cudaCapability: "8.9",
    vrReady: yes,
    memoryBandwidth: "-",
    ...overrides
  };
}

function gpu30(id, name, cudaCores, boostClock, baseClock, memoryConfig, memoryBus, nvlink, length, width, slots, maxTemp, graphicsPower, systemPower, powerConnector, metrics) {
  return gpu(id, "RTX 30 系列", name, {
    cudaCores, shaderCore: "Ampere", tensorCore: "第 3 代", rtCore: "第 2 代", boostClock, baseClock, memoryConfig, memoryBus, memoryBandwidth: "-", maxResolution: DISPLAY_30, displayConnectors: name.includes("3050") ? PORTS_30_3 : PORTS_30_4, multiMonitor: "4", hdcp: "2.3", architecture: "Ampere", rayTracing: yes, dlss: yes, reflex: yes, broadcast: yes, pciExpress: "第 4 代", resizableBar: yes, gSync: yes, gameReady: yes, studioDriver: yes, omniverse: yes, dx12: yes, gpuBoost: yes, nvlink, vulkanOpenGL: "Vulkan RT API / OpenGL 4.6", nvenc: "第 7 代", nvdec: "第 5 代", av1Encode: dash, av1Decode: yes, cudaCapability: "8.6", vrReady: name.includes("3050") ? dash : yes, length, width, slots, maxTemp, graphicsPower, systemPower, powerConnector
  }, metrics);
}

function gpu20(id, name, cudaCores, boostClock, baseClock, memoryConfig, memoryBus, displayConnectors, length, width, slots, maxTemp, graphicsPower, systemPower, powerConnector, metrics) {
  return gpu(id, "RTX 20 系列", name, {
    cudaCores, shaderCore: "Turing", tensorCore: "第 2 代", rtCore: "第 1 代", boostClock, baseClock, memoryConfig, memoryBus, memoryBandwidth: "-", maxResolution: DISPLAY_20, displayConnectors, multiMonitor: "4", hdcp: "2.2", architecture: "Turing", rayTracing: yes, dlss: yes, reflex: yes, broadcast: yes, pciExpress: "第 3 代", resizableBar: no, gSync: yes, gameReady: yes, studioDriver: yes, omniverse: yes, dx12: yes, gpuBoost: yes, nvlink: ["GeForce RTX 2080 Ti", "GeForce RTX 2080 SUPER", "GeForce RTX 2080", "GeForce RTX 2070 SUPER"].includes(name) ? yes : dash, vulkanOpenGL: "Vulkan RT API / OpenGL 4.6", nvenc: "第 7 代", nvdec: "第 4 代", av1Encode: dash, av1Decode: dash, cudaCapability: "7.5", vrReady: yes, length, width, slots, maxTemp, graphicsPower, systemPower, powerConnector
  }, metrics);
}

function gpu16(id, name, cudaCores, boostClock, baseClock, memoryConfig, memoryBus, vrReady, maxResolution, displayConnectors, length, width, slots, maxTemp, graphicsPower, systemPower, powerConnector, metrics) {
  return gpu(id, "GTX 16 系列", name, {
    cudaCores, shaderCore: "Turing", tensorCore: dash, rtCore: dash, boostClock, baseClock, memoryConfig, memoryBus, memoryBandwidth: "-", maxResolution, displayConnectors, multiMonitor: yes, hdcp: yes, architecture: "Turing", rayTracing: dash, dlss: dash, reflex: yes, broadcast: dash, pciExpress: "第 3 代", resizableBar: dash, gSync: yes, gameReady: yes, studioDriver: yes, omniverse: dash, dx12: "DirectX 12 API", gpuBoost: yes, nvlink: dash, vulkanOpenGL: "Vulkan RT API / OpenGL 4.6", nvenc: name.includes("1650") || name.includes("1630") ? "是 (Volta 或 Turing，视型号而定)" : "是 (Turing)", nvdec: yes, av1Encode: dash, av1Decode: dash, cudaCapability: "7.5", vrReady, length, width, slots, maxTemp, graphicsPower, systemPower, powerConnector
  }, metrics);
}
