"use client";

import { motion } from "framer-motion";
import { School, Users, Trophy, Calendar, Sparkles, Image as ImageIcon, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const galleryCategories = [
  {
    id: "fasilitas",
    name: "Fasilitas",
    icon: School,
    color: "blue",
    description: "Gedung, kelas, lab, dan fasilitas penunjang lainnya",
    count: "9 Foto",
    href: "/galeri/fasilitas",
    preview: "/galeri_nav/sekolah-gedung.jpg"
  },
  {
    id: "kegiatan-belajar",
    name: "Kegiatan Belajar",
    icon: Users,
    color: "emerald",
    description: "Suasana belajar yang kondusif dan interaktif",
    count: "6 Foto",
    href: "/galeri/kegiatan-belajar",
    preview: "/galeri_nav/siswa-belajar.jpg"
  },
  {
    id: "ekstrakurikuler",
    name: "Ekstrakurikuler",
    icon: Sparkles,
    color: "purple",
    description: "Kegiatan pengembangan bakat dan minat siswa",
    count: "8 Foto",
    href: "/galeri/ekstrakurikuler",
    preview: "/galeri_nav/pramuka.jpg"
  },
  {
    id: "prestasi",
    name: "Prestasi & Penghargaan",
    icon: Trophy,
    color: "amber",
    description: "Pencapaian siswa dan sekolah di berbagai kompetisi",
    count: "6 Foto",
    href: "/galeri/prestasi",
    preview: "/galeri_nav/piala.jpg"
  },
  {
    id: "kesiswaan",
    name: "Kegiatan Kesiswaan",
    icon: Calendar,
    color: "rose",
    description: "Kegiatan OSIS, upacara, dan event kesiswaan",
    count: "6 Foto",
    href: "/galeri/kesiswaan",
    preview: "/galeri_nav/upacara.jpg"
  },
  {
    id: "momen-spesial",
    name: "Momen Spesial",
    icon: ImageIcon,
    color: "cyan",
    description: "Wisuda, HUT YAPIM, dan momen berharga lainnya",
    count: "6 Foto",
    href: "/galeri/momen-spesial",
    preview: "/galeri_nav/wisuda.jpg"
  }
];

export default function GaleriContent() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <Image
          src="/galeri/galeri_bg.jpg"
          alt="Galeri Sekolah"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/70 to-slate-900/60 dark:from-purple-950/95 dark:via-slate-900/80 dark:to-purple-950/90 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <ImageIcon className="w-5 h-5 mr-3" />
            Galeri Foto
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
            Galeri Sekolah
          </h1>

          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed font-medium">
            Jelajahi lingkungan dan kegiatan sekolah melalui koleksi foto terbaik kami
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-standard bg-gradient-to-r from-purple-600 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 4px 4px, rgba(255,255,255,0.5) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">41</div>
              <div className="text-purple-200 text-sm uppercase tracking-widest">Total Foto</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">6</div>
              <div className="text-purple-200 text-sm uppercase tracking-widest">Kategori</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">HD</div>
              <div className="text-purple-200 text-sm uppercase tracking-widest">Kualitas Foto</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">24/7</div>
              <div className="text-purple-200 text-sm uppercase tracking-widest">Akses Galeri</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Kategori Galeri
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Pilih Kategori
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Jelajahi berbagai kategori foto untuk melihat aktivitas dan fasilitas sekolah
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={category.href} className="block h-full">
                  <div className="card-elevated overflow-hidden h-full hover:shadow-2xl transition-all duration-300 group">
                    {/* Preview Image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        fill
                        src={category.preview}
                        alt={category.name}
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                      {/* Icon Badge */}
                      <div className="absolute top-4 left-4">
                        <div className={`w-12 h-12 bg-${category.color}-600 rounded-xl flex items-center justify-center shadow-lg`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Count Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                          <div className="text-sm font-black text-slate-900">{category.count}</div>
                        </div>
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                          <h3 className="text-white font-bold text-xl mb-1">{category.name}</h3>
                          <p className="text-purple-200 text-sm line-clamp-2">{category.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-black text-slate-900 dark:text-white mb-1 flex items-center">
                            {category.name}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{category.description}</p>
                        </div>
                        <div className={`w-10 h-10 bg-${category.color}-100 dark:bg-${category.color}-900/30 rounded-lg flex items-center justify-center group-hover:bg-${category.color}-600 transition-colors`}>
                          <ArrowRight className={`w-5 h-5 text-${category.color}-600 dark:text-${category.color}-400 group-hover:text-white`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-standard bg-gradient-to-r from-purple-600 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 4px 4px, rgba(255,255,255,0.5) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Ingin Melihat Langsung?
            </h2>
            <p className="text-purple-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Kunjungi sekolah kami dan rasakan langsung lingkungan belajar yang kondusif
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="/kontak"
                className="inline-flex items-center px-10 py-5 bg-white text-purple-900 font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-purple-50 shadow-2xl"
              >
                Jadwalkan Kunjungan
              </a>
              <a
                href="/ppdb"
                className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-white hover:text-purple-900"
              >
                Daftar Sekarang
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
