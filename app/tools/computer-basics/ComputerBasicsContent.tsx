"use client";

import { useState } from "react";
import { Monitor, Cpu, HardDrive, MemoryStick, Wifi, Keyboard, Mouse, Printer, Server, Zap } from "lucide-react";

interface Component {
  id: string;
  name: string;
  nameEn: string;
  icon: any;
  category: string;
  description: string;
  function: string;
  specs?: string[];
}

const components: Component[] = [
  // Input Devices
  {
    id: "keyboard",
    name: "Papan Ketik (Keyboard)",
    nameEn: "Keyboard",
    icon: Keyboard,
    category: "Input Device",
    description: "Perangkat input utama untuk memasukkan data berupa teks dan perintah ke komputer",
    function: "Mengetik teks, shortcut, dan perintah sistem",
    specs: ["QWERTY layout", "Mechanical/Membrane", "USB/Wireless", "60%/TKL/Full size"]
  },
  {
    id: "mouse",
    name: "Tetikus (Mouse)",
    nameEn: "Mouse",
    icon: Mouse,
    category: "Input Device",
    description: "Perangkat penunjuk untuk mengontrol kursor di layar dan memilih objek",
    function: "Pointer, klik, scroll, drag & drop",
    specs: ["Optical/Laser", "Wired/Wireless", "DPI settings", "Buttons: 2-6+"]
  },
  // Processing
  {
    id: "cpu",
    name: "Prosesor (CPU)",
    nameEn: "Central Processing Unit",
    icon: Cpu,
    category: "Processing",
    description: "Otak komputer yang menjalankan instruksi dan memproses data",
    function: "Eksekusi instruksi, perhitungan, kontrol sistem",
    specs: ["Core: 2-24+", "Clock: 2-5+ GHz", "Cache: L1/L2/L3", "TDP: 15-125W+"]
  },
  {
    id: "ram",
    name: "Memori (RAM)",
    nameEn: "Random Access Memory",
    icon: MemoryStick,
    category: "Storage",
    description: "Memori sementara untuk menyimpan data yang sedang aktif diproses",
    function: "Penyimpanan sementara data aktif",
    specs: ["DDR4/DDR5", "Capacity: 4-128GB", "Speed: 2133-7200MHz", "Dual/Quad Channel"]
  },
  {
    id: "storage",
    name: "Penyimpanan (Storage)",
    nameEn: "Storage Device",
    icon: HardDrive,
    category: "Storage",
    description: "Media penyimpanan data permanen seperti HDD dan SSD",
    function: "Menyimpan data dan program secara permanen",
    specs: ["HDD: 500GB-4TB", "SSD: 128GB-4TB", "NVMe: 256GB-4TB", "Interface: SATA/NVMe"]
  },
  // Output Devices
  {
    id: "monitor",
    name: "Monitor",
    nameEn: "Monitor/Display",
    icon: Monitor,
    category: "Output Device",
    description: "Perangkat output visual untuk menampilkan informasi dari komputer",
    function: "Menampilkan visual output",
    specs: ["LCD/LED/OLED", "Resolution: HD-8K", "Refresh Rate: 60-240Hz", "Size: 15-40 inch+"]
  },
  {
    id: "printer",
    name: "Printer",
    nameEn: "Printer",
    icon: Printer,
    category: "Output Device",
    description: "Perangkat output untuk mencetak dokumen digital ke kertas",
    function: "Mencetak dokumen",
    specs: ["Inkjet/Laser", "Color/BW", "Speed: 10-100 ppm", "Resolution: 4800+ dpi"]
  },
  // Networking
  {
    id: "wifi",
    name: "Jaringan (NIC/WiFi)",
    nameEn: "Network Interface Card",
    icon: Wifi,
    category: "Networking",
    description: "Perangkat untuk menghubungkan komputer ke jaringan lokal atau internet",
    function: "Koneksi jaringan kabel/wireless",
    specs: ["Ethernet: 100Mbps-10Gbps", "WiFi: 802.11ac/ax", "Bluetooth: 4.0-5.2"]
  },
  // Power
  {
    id: "psu",
    name: "Catu Daya (PSU)",
    nameEn: "Power Supply Unit",
    icon: Zap,
    category: "Power",
    description: "Menyediakan daya listrik ke semua komponen komputer",
    function: "Distribusi daya listrik",
    specs: ["Wattage: 300-1600W", "Efficiency: 80+/Bronze-Platinum", "Modular: Non/Semi/Full"]
  },
  // Server
  {
    id: "server",
    name: "Server",
    nameEn: "Server",
    icon: Server,
    category: "Enterprise",
    description: "Komputer powerful yang menyediakan layanan untuk komputer klien",
    function: "Hosting, database, aplikasi jaringan",
    specs: ["Multi-CPU", "ECC RAM", "RAID Storage", "Redundant PSU"]
  },
];

const categories = ["Semua", "Input Device", "Processing", "Storage", "Output Device", "Networking", "Power", "Enterprise"];

export default function ComputerBasicsContent() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);

  const filteredComponents = selectedCategory === "Semua"
    ? components
    : components.filter(c => c.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
              selectedCategory === category
                ? "bg-cyan-600 text-white shadow-lg"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Components Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {filteredComponents.map((component) => {
          const Icon = component.icon;
          return (
            <button
              key={component.id}
              onClick={() => setSelectedComponent(component)}
              className="card-elevated p-6 text-left hover:shadow-xl transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full">
                  {component.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {component.name}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                {component.description}
              </p>

              <div className="text-xs font-bold text-cyan-600 group-hover:text-cyan-700">
                Lihat Detail →
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Modal */}
      {selectedComponent && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedComponent(null)}
        >
          <div
            className="max-w-2xl w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <selectedComponent.icon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{selectedComponent.name}</h2>
                  <p className="text-white/80">{selectedComponent.nameEn}</p>
                </div>
              </div>
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                {selectedComponent.category}
              </span>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Deskripsi</h3>
                <p className="text-slate-600 dark:text-slate-400">{selectedComponent.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Fungsi</h3>
                <p className="text-slate-600 dark:text-slate-400">{selectedComponent.function}</p>
              </div>

              {selectedComponent.specs && (
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Spesifikasi Umum</h3>
                  <ul className="space-y-2">
                    {selectedComponent.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={() => setSelectedComponent(null)}
                className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Info Section */}
      <div className="p-6 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl border border-cyan-200 dark:border-cyan-800">
        <h3 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3">Pengenalan Hardware Komputer - TKJ</h3>
        <p className="text-sm text-cyan-800 dark:text-cyan-200 mb-4">
          Memahami komponen-komponen hardware komputer adalah dasar penting dalam pembelajaran Teknik Komputer Jaringan.
          Hardware fisik meliputi perangkat input, processing, storage, output, dan networking.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-xs">
          <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
            <span className="font-bold text-cyan-600">Input:</span> Keyboard, Mouse, Scanner, Microphone
          </div>
          <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
            <span className="font-bold text-cyan-600">Processing:</span> CPU, GPU, Motherboard
          </div>
          <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
            <span className="font-bold text-cyan-600">Storage:</span> HDD, SSD, RAM, Cache
          </div>
          <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
            <span className="font-bold text-cyan-600">Output:</span> Monitor, Printer, Speaker
          </div>
        </div>
      </div>
    </div>
  );
}
