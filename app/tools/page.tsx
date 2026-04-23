import type { Metadata } from "next";
import ToolsGrid from "./ToolsGrid";

export const metadata: Metadata = {
  title: "Tools | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Koleksi tools berguna untuk siswa SMA-SMKS YAPIM Taruna Pandan - Gratis dan tanpa perlu instalasi",
  keywords: ["tools", "kompres gambar", "utilities", "productivity", "siswa"],
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900 via-purple-800 to-slate-900 z-10"></div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            Utilities
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Tools & Utilities
          </h1>

          <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto leading-relaxed">
            Kumpulan tools berguna untuk mendukung produktivitas sekolah
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Tools Tersedia
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Semua tools gratis dan siap digunakan - Tidak perlu instalasi, data tidak disimpan di server
            </p>
          </div>

          {/* Category Filter & Tools Grid */}
          <ToolsGrid />
        </div>
      </section>

      {/* Info Section */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6">
            Gratis untuk Siswa YAPIM
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Semua tools di atas tersedia gratis dan dapat diakses kapan saja. Data Anda diproses langsung di browser dan tidak disimpan di server kami.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Privasi Terjaga</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Data tidak disimpan di server</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Cepat & Ringan</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Diproses langsung di browser</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Akses Dimanapun</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Dapat diakses dari HP/tablet/komputer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
