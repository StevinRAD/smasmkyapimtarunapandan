"use client";

import { motion } from "framer-motion";
import { Calendar, User, Tag, Search, ArrowRight, Filter, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { id: "all", name: "Semua", color: "slate" },
  { id: "pengumuman", name: "Pengumuman", color: "blue" },
  { id: "prestasi", name: "Prestasi", color: "emerald" },
  { id: "kegiatan", name: "Kegiatan", color: "purple" },
  { id: "akademik", name: "Akademik", color: "amber" }
];

const newsData = [
  {
    id: 1,
    title: "Panduan Resmi PPDB 2026/2027 Tahap 1 Telah Dibuka",
    excerpt: "Pemerintah Daerah dan manajemen SMA-SMKS YAPIM resmi merilis juknis dan syarat kelengkapan administrasi bagi calon siswa baru. Seluruh proses pendaftaran akan difasilitasi secara daring.",
    content: "Penerimaan Peserta Didik Baru (PPDB) SMA-SMKS YAPIM Taruna Pandan Tahun Ajaran 2026/2027 telah resmi dibuka. Pendaftaran dilaksanakan dalam 2 gelombang dengan kuota terbatas.",
    category: "pengumuman",
    categoryName: "Pengumuman",
    author: "Humas YAPIM",
    date: "14 April 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    tags: ["PPDB", "Pendaftaran", "Siswa Baru"]
  },
  {
    id: 2,
    title: "Siswa YAPIM Raih Medali Emas Olimpiade Sains Tingkat Provinsi",
    excerpt: "Tim OSN bidang Fisika sekolah kita sukses meraih medali emas setelah menyisihkan 120 finalis lainnya dalam kompetisi bergengsi tingkat provinsi.",
    content: "Prestasi membanggakan kembali ditorehkan oleh siswa SMA YAPIM dalam ajang Olimpiade Sains Nasional (OSN) bidang Fisika tingkat provinsi.",
    category: "prestasi",
    categoryName: "Prestasi",
    author: "Kesiswaan",
    date: "10 April 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    tags: ["OSN", "Fisika", "Medali Emas"]
  },
  {
    id: 3,
    title: "Semarak Perayaan Hari Ulang Tahun YAPIM Ke-35",
    excerpt: "Berbagai pertunjukan budaya Nusantara dan pameran karya mewarnai acara puncak perayaan dies natalis yang dihadiri oleh ribuan alumni dan tamu undangan.",
    content: "Perayaan HUT YAPIM ke-35 berlangsung meriah dengan berbagai kegiatan budaya dan pameran karya siswa.",
    category: "kegiatan",
    categoryName: "Kegiatan",
    author: "Panitia HUT",
    date: "02 April 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1544207959-1e3c5098ff99?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    tags: ["HUT", "Dies Natalis", "Budaya"]
  },
  {
    id: 4,
    title: "Sosialisasi Kurikulum Nasional Terbaru kepada Wali Murid",
    excerpt: "Pihak akademik mengadakan sesi panel diskusi menjelaskan arah kebijakan pendidikan yang berfokus pada pengembangan talenta siswa.",
    content: "Sosialisasi kurikulum baru dilakukan untuk memberikan pemahaman kepada orang tua mengenai perubahan sistem pembelajaran.",
    category: "akademik",
    categoryName: "Akademik",
    author: "Akademik",
    date: "28 Maret 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    tags: ["Kurikulum", "Wali Murid", "Pendidikan"]
  },
  {
    id: 5,
    title: "Siswa SMK Juara 1 Kompetisi Web Design Regional",
    excerpt: "Siswa jurusan RPL berhasil menyabet gelar juara pertama dalam kompetisi desain web tingkat regional dengan karya inovatif.",
    content: "Prestasi luar biasa kembali diraih oleh siswa SMK jurusan Rekayasa Perangkat Lunak.",
    category: "prestasi",
    categoryName: "Prestasi",
    author: "Produktif RPL",
    date: "25 Maret 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    tags: ["RPL", "Web Design", "Juara"]
  },
  {
    id: 6,
    title: "Kunjungan Studi Banding ke SMA Unggulan Jakarta",
    excerpt: "Rombongan guru dan siswa melakukan studi banding untuk memperluas wawasan dan membangun kemitraan akademik.",
    content: "Kunjungan studi banding merupakan bagian dari program kemitraan strategis sekolah.",
    category: "kegiatan",
    categoryName: "Kegiatan",
    author: "Humas",
    date: "20 Maret 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    tags: ["Studi Banding", "Kemitraan", "Jakarta"]
  },
  {
    id: 7,
    title: "Pembukaan Bimbingan Intensif UTBK 2026",
    excerpt: "Program bimbingan intensif untuk persiapan UTBK telah dibuka dengan materi lengkap dan mentor berpengalaman.",
    content: "Bimbingan UTBK diselenggarakan untuk mempersiapkan siswa kelas XII menghadapi ujian masuk perguruan tinggi.",
    category: "akademik",
    categoryName: "Akademik",
    author: "Akademik",
    date: "15 Maret 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    tags: ["UTBK", "SBMPTN", "Bimbingan"]
  },
  {
    id: 8,
    title: "Peluncuran Program Digital Learning Baru",
    excerpt: "Sekolah meluncurkan platform pembelajaran digital terintegrasi untuk meningkatkan kualitas pembelajaran hybrid.",
    content: "Platform digital learning dilengkapi dengan berbagai fitur modern untuk mendukung pembelajaran.",
    category: "akademik",
    categoryName: "Akademik",
    author: "IT Sekolah",
    date: "10 Maret 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    tags: ["Digital", "E-Learning", "Teknologi"]
  },
  {
    id: 9,
    title: "Tim Basket SMA Raih Juara 2 Turnamen Regional",
    excerpt: "Tim basket sekolah berhasil meraih posisi runner-up dalam turnamen basket tingkat regional yang diikuti 32 tim.",
    content: "Prestasi di bidang olahraga kembali ditorehkan oleh tim basket SMA YAPIM.",
    category: "prestasi",
    categoryName: "Prestasi",
    author: "Kesiswaan",
    date: "05 Maret 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    tags: ["Basket", "Juara", "Olahraga"]
  }
];

export default function BeritaContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = newsData.filter(news => {
    const matchesCategory = activeCategory === "all" || news.category === activeCategory;
    const matchesSearch = searchQuery === "" ||
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsData.filter(n => n.featured);
  const regularNews = filteredNews.filter(n => !n.featured);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <Image
          src="/galeri/berita_bg.jpg"
          alt="News"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/70 to-slate-900/60 dark:from-amber-950/95 dark:via-slate-900/80 dark:to-amber-950/90 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <Newspaper className="w-5 h-5 mr-3" />
            Berita & Informasi
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
            Berita Terbaru
          </h1>

          <p className="text-xl md:text-2xl text-amber-100 max-w-4xl mx-auto leading-relaxed font-medium">
            Tetap update dengan informasi terbaru seputar kegiatan akademik, prestasi siswa, dan pengumuman penting
          </p>
        </motion.div>
      </section>

      {/* Search & Filter Section */}
      <section className="section-standard bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === category.id
                      ? `bg-${category.color}-600 text-white shadow-lg`
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Tag className="w-3.5 h-3.5 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-amber-500 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="section-spacious bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="inline-block px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full">
                Berita Utama
              </span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="card-elevated overflow-hidden h-full hover:border-amber-200 dark:hover:border-amber-900">
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        fill
                        src={news.image}
                        alt={news.title}
                        className="object-cover transform group-hover:scale-110 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <span className={`px-4 py-2 bg-${categories.find(c => c.id === news.category)?.color}-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg`}>
                          {news.categoryName}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {news.date}
                        </span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {news.author}
                        </span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>{news.readTime} baca</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition leading-tight">
                        {news.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-400 text-lg line-clamp-2 mb-6 leading-relaxed">
                        {news.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {news.tags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform">
                          Baca <ArrowRight className="ml-2 w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All News Grid */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
              Semua Berita ({filteredNews.length})
            </h2>
          </motion.div>

          {filteredNews.length === 0 ? (
            <div className="text-center py-20">
              <Newspaper className="w-20 h-20 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
              <p className="text-slate-600 dark:text-slate-400 text-lg">Tidak ada berita yang ditemukan</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((news) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className="card-elevated overflow-hidden h-full hover:border-amber-200 dark:hover:border-amber-900">
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        fill
                        src={news.image}
                        alt={news.title}
                        className="object-cover transform group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 bg-${categories.find(c => c.id === news.category)?.color}-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg`}>
                          {news.categoryName}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3 text-xs text-slate-500 dark:text-slate-400">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {news.date}
                        </span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>{news.readTime}</span>
                      </div>

                      <h4 className="text-lg font-black text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition leading-snug line-clamp-2">
                        {news.title}
                      </h4>

                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                        {news.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {news.tags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Load More */}
      <section className="section-standard bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <button className="inline-flex items-center px-10 py-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold uppercase tracking-wider text-sm transition rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 shadow-lg border-2 border-slate-200 dark:border-slate-700">
            Muat Lebih Banyak <ArrowRight className="ml-3 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
