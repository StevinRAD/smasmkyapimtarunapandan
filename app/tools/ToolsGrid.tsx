"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Image, Calculator, QrCode, Clock, ArrowRightLeft, FileText, Shuffle, Percent, Zap, ListTodo, Atom, Type, LucideIcon, FileSpreadsheet, ImageIcon, Wrench, Network, Monitor } from "lucide-react";

interface Tool {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  category: string;
  important?: boolean;
  badge?: string;
}

const iconMap = {
  Image,
  Calculator,
  QrCode,
  Clock,
  ArrowRightLeft,
  FileText,
  Shuffle,
  Percent,
  Zap,
  ListTodo,
  Atom,
  Type,
  FileSpreadsheet,
  ImageIcon,
  Wrench,
  Network,
  Monitor,
};

// Tools Penting (SMK/SMA) - di posisi teratas
const importantTools: Tool[] = [
  // SMK - TKR
  {
    title: "Kalkulator CC Mesin",
    description: "Hitung kapasitas silinder mesin untuk TKR",
    href: "/tools/engine-cc",
    icon: Wrench,
    color: "from-orange-600 to-red-600",
    category: "SMK-TKR",
    important: true,
    badge: "TKR"
  },
  // SMK - TKJ
  {
    title: "Kalkulator Subnet",
    description: "Hitung subnet mask dan IP range untuk TKJ",
    href: "/tools/subnet-calculator",
    icon: Network,
    color: "from-blue-600 to-indigo-600",
    category: "SMK-TKJ",
    important: true,
    badge: "TKJ"
  },
  {
    title: "Pengenalan Komputer",
    description: "Belajar hardware dan komponen komputer untuk TKJ",
    href: "/tools/computer-basics",
    icon: Monitor,
    color: "from-cyan-600 to-blue-600",
    category: "SMK-TKJ",
    important: true,
    badge: "TKJ"
  },
  // SMA - Fisika
  {
    title: "Kalkulator Fisika",
    description: "Hitung rumus fisika: kecepatan, gaya, energi",
    href: "/tools/physics-calculator",
    icon: Zap,
    color: "from-emerald-600 to-teal-600",
    category: "SMA",
    important: true,
    badge: "Fisika"
  },
  // SMA - Umum
  {
    title: "Kalkulator Siswa",
    description: "Hitung nilai rapor, IPS, IPK, dan predikat",
    href: "/tools/student-calculator",
    icon: Calculator,
    color: "from-violet-600 to-purple-600",
    category: "SMA",
    important: true,
    badge: "SMA"
  },
  // SMA - Kimia
  {
    title: "Tabel Periodik",
    description: "Referensi 118 unsur kimia untuk pembelajaran",
    href: "/tools/periodic-table",
    icon: Atom,
    color: "from-teal-600 to-cyan-600",
    category: "Sains",
    important: true,
    badge: "Kimia"
  },
];

// Tools Lainnya - di bawah
const otherTools: Tool[] = [
  {
    title: "Study Timer",
    description: "Timer belajar dengan teknik Pomodoro",
    href: "/tools/study-timer",
    icon: Clock,
    color: "from-rose-600 to-pink-600",
    category: "Produktivitas"
  },
  {
    title: "Unit Converter",
    description: "Konversi panjang, berat, suhu, waktu, luas",
    href: "/tools/unit-converter",
    icon: ArrowRightLeft,
    color: "from-cyan-600 to-blue-600",
    category: "Matematika"
  },
  {
    title: "QR Code Generator",
    description: "Buat QR code untuk link, teks, email, WiFi",
    href: "/tools/qr-code",
    icon: QrCode,
    color: "from-indigo-600 to-purple-600",
    category: "Generator"
  },
  {
    title: "Word Counter",
    description: "Hitung kata, karakter, kalimat",
    href: "/tools/word-counter",
    icon: Type,
    color: "from-amber-600 to-orange-600",
    category: "Text Tools"
  },
  {
    title: "Random Picker",
    description: "Pilih item secara acak untuk kuis/undian",
    href: "/tools/random-picker",
    icon: Shuffle,
    color: "from-fuchsia-600 to-pink-600",
    category: "Games"
  },
  {
    title: "Kalkulator Persen",
    description: "Hitung persentase dan diskon",
    href: "/tools/percentage-calculator",
    icon: Percent,
    color: "from-green-600 to-emerald-600",
    category: "Matematika"
  },
  {
    title: "Speed Reader",
    description: "Baca teks dengan kecepatan tinggi (RSVP)",
    href: "/tools/speed-reader",
    icon: Zap,
    color: "from-sky-600 to-blue-600",
    category: "Produktivitas"
  },
  {
    title: "To-Do List",
    description: "Kelola tugas harian dengan mudah",
    href: "/tools/todo-list",
    icon: ListTodo,
    color: "from-violet-600 to-purple-600",
    category: "Produktivitas"
  },
  {
    title: "Kompres Gambar",
    description: "Kecilkan ukuran gambar tanpa mengurangi kualitas",
    href: "/tools/compress-image",
    icon: Image,
    color: "from-violet-600 to-purple-600",
    category: "Media"
  },
];

const allTools = [...importantTools, ...otherTools];

const categories = ["Semua", "SMK-TKR", "SMK-TKJ", "SMA", "Produktivitas", "Akademik", "Text Tools", "Media", "Generator", "Games", "Matematika", "Sains"];

interface ToolsGridProps {
  showImportant?: boolean;
  showOthers?: boolean;
}

export default function ToolsGrid({ showImportant = true, showOthers = true }: ToolsGridProps = {}) {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredImportantTools = useMemo(() => {
    if (selectedCategory === "Semua") return importantTools;
    return importantTools.filter(tool => tool.category === selectedCategory);
  }, [selectedCategory]);

  const filteredOtherTools = useMemo(() => {
    if (selectedCategory === "Semua") return otherTools;
    return otherTools.filter(tool => tool.category === selectedCategory);
  }, [selectedCategory]);

  const showImportantTools = showImportant && filteredImportantTools.length > 0;
  const showOtherToolsSection = showOthers && filteredOtherTools.length > 0;

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
              selectedCategory === category
                ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30 scale-105"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Section Penting - SMK/SMA */}
      {showImportantTools && (
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent flex-1"></div>
            <h2 className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
              🔥 Tools Penting
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent flex-1"></div>
          </div>

          {selectedCategory !== "Semua" && (
            <div className="text-center mb-4">
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                <span className="font-bold text-violet-600">{filteredImportantTools.length}</span> tools untuk kategori <span className="font-bold">{selectedCategory}</span>
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredImportantTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={index}
                  href={tool.href}
                  className="group"
                >
                  <div className={`card-elevated p-5 h-full hover:shadow-xl transition-all duration-300 relative overflow-hidden ${tool.important ? 'border-2 border-violet-500' : ''}`}>
                    {tool.badge && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-[10px] font-bold rounded-full">
                        {tool.badge}
                      </div>
                    )}

                    <div className={`w-14 h-14 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
                      {tool.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      {tool.description}
                    </p>

                    <div className="flex items-center text-sm font-bold text-violet-600 group-hover:text-violet-700 transition-colors">
                      Gunakan Tool →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Section Lainnya */}
      {showOtherToolsSection && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent flex-1"></div>
            <h2 className="text-xl md:text-2xl font-black text-slate-700 dark:text-slate-300">
              Tools Lainnya
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent flex-1"></div>
          </div>

          {selectedCategory !== "Semua" && (
            <div className="text-center mb-4">
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                <span className="font-bold text-violet-600">{filteredOtherTools.length}</span> tools untuk kategori <span className="font-bold">{selectedCategory}</span>
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredOtherTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={index}
                  href={tool.href}
                  className="group"
                >
                  <div className="card-elevated p-5 h-full hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full">
                        {tool.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {tool.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      {tool.description}
                    </p>

                    <div className="flex items-center text-xs font-bold text-violet-600 group-hover:text-violet-700 transition-colors">
                      Gunakan Tool →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* No Results */}
          {filteredImportantTools.length === 0 && filteredOtherTools.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Tidak ada tool ditemukan
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Coba kategori lain untuk menemukan tool yang Anda cari
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export { importantTools, otherTools, allTools };
