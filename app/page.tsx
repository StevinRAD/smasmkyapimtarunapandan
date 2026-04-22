"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronRight, Play, GraduationCap, Award, Users, BookOpen, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";

function Counter({ from, to, duration, suffix = "" }: { from: number; to: number; duration: number; suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function PhotoCarousel() {
  const photos = [
    { src: "/galeri/kepsek-1.jpg", alt: "Kepala Sekolah", badge: "35+", label: "Tahun Mengabdi" },
    { src: "/galeri/kegiatan-belajar-1.jpg", alt: "Kegiatan Belajar", badge: "850+", label: "Siswa Aktif" },
    { src: "/galeri/laboratorium-1.jpg", alt: "Fasilitas Laboratorium", badge: "45", label: "Guru Profesional" },
    { src: "/galeri/kampus-1.jpg", alt: "Sekolah YAPIM", badge: "A", label: "Akreditasi Unggul" },
    { src: "/galeri/perpustakaan-1.jpg", alt: "Perpustakaan Digital", badge: "100%", label: "Lulusan Berkualitas" }
  ];

  // Duplicate photos for seamless infinite scroll (need at least 2 copies for 50% translation)
  const duplicatedPhotos = [...photos, ...photos];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
    >
      {/* Auto-scrolling Container */}
      <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
        {duplicatedPhotos.map((photo, index) => (
          <div key={`${photo.alt}-${index}`} className="flex-shrink-0 w-[300px] md:w-[350px] group">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                fill
                src={photo.src}
                alt={photo.alt}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>

              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="text-4xl font-black text-white mb-1">{photo.badge}</div>
                  <div className="text-xs text-blue-200 uppercase tracking-widest">{photo.label}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full font-sans text-slate-800 dark:text-slate-200 bg-transparent">

      {/* Hero Section - Enhanced Modern Design */}
      <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-transparent mt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/galeri/bg.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-50 dark:opacity-40"
          />
        </div>
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/50 to-slate-900/40 dark:from-blue-950/85 dark:via-slate-900/60 dark:to-slate-950/50 z-10" />

        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 z-10 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left max-w-xl"
            >
              {/* Enhanced Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-4 py-2 mb-6 rounded-full text-xs uppercase tracking-[0.2em] shadow-2xl animate-fade-in">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                {t("hero.badge")}
              </div>

              {/* Enhanced Typography */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight tracking-tight uppercase drop-shadow-2xl">
                {t("hero.title")}
              </h1>

              <p className="text-base md:text-lg text-blue-50/90 dark:text-blue-100/80 mb-8 max-w-xl leading-relaxed font-medium border-l-4 border-blue-400 pl-4">
                {t("hero.subtitle")}
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Link
                  href="/profil"
                  className="group bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-2xl flex items-center justify-center hover:shadow-3xl hover:scale-105 uppercase tracking-wider"
                >
                  {t("cta.primary")} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link
                  href="/fasilitas"
                  className="group bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center uppercase tracking-wider hover:scale-105"
                >
                  {t("cta.secondary")}
                </Link>
              </div>

              {/* Quick Stats Strip */}
              <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-white mb-1">35+</div>
                  <div className="text-[10px] md:text-xs text-blue-200 uppercase tracking-widest">Tahun Pengalaman</div>
                </div>
                <div className="text-center border-l border-r border-white/20">
                  <div className="text-2xl md:text-3xl font-black text-white mb-1">A</div>
                  <div className="text-[10px] md:text-xs text-blue-200 uppercase tracking-widest">Akreditasi Unggul</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-white mb-1">100%</div>
                  <div className="text-[10px] md:text-xs text-blue-200 uppercase tracking-widest">Lulusan Berkualitas</div>
                </div>
              </div>
            </motion.div>

            {/* Right - Person Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="flex-shrink-0 w-[22rem] h-[22rem] md:w-[32rem] md:h-[32rem] lg:w-[40rem] lg:h-[40rem] relative -mt-20 lg:-mt-32 translate-x-8 lg:translate-x-16"
            >
              <div className="relative w-full h-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-blue-600/30 rounded-[40px] blur-3xl animate-pulse"></div>
                {/* Image Container */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/galeri/person.bg.png"
                    alt="Professional Staff"
                    fill
                    className="object-contain relative z-10 drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>


      {/* Photo Gallery Section - Enhanced */}
      <section className="section-spacious bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
        {/* Background Image - Hanya di Dark Mode */}
        <div className="absolute inset-0 hidden dark:block">
          <Image
            src="/galeri/sekolah-2.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Galeri Sekolah
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">
              Jelajahi Lingkungan Sekolah Kami
            </h2>
          </motion.div>

          {/* Photo Carousel with Infinite Loop */}
          <PhotoCarousel />
        </div>
      </section>

      {/* Stats Board - Enhanced Modern Design */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-24 overflow-hidden">
        {/* Background Image - Guru & Staff */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/galeri/guru_guru.JPG"
            alt=""
            fill
            sizes="100vw"
            quality={100}
            className="object-cover opacity-20"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-950/40"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-200 font-bold text-xs uppercase tracking-[0.25em] rounded-full mb-4">
              Statistik Sekolah
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Pencapaian Kami dalam Angka
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Bukti nyata komitmen kami dalam mencetak generasi unggul dan berkarakter
            </p>
          </motion.div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: 850, suffix: "+", label: t("stats.students"), icon: Users, color: "blue" },
              { value: 2500, suffix: "+", label: t("stats.alumni"), icon: GraduationCap, color: "white" },
              { value: 45, suffix: "", label: t("stats.staff"), icon: BookOpen, color: "blue" },
              { value: 100, suffix: "%", label: t("stats.graduation"), icon: TrendingUp, color: "white" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Background Card Effect */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>

                <div className="relative flex flex-col items-center p-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${stat.color === "blue" ? "bg-blue-600" : "bg-white/10"} shadow-lg`}>
                    <stat.icon className={`w-8 h-8 ${stat.color === "blue" ? "text-white" : "text-blue-200"}`} />
                  </div>

                  {/* Counter */}
                  <div className={`text-5xl md:text-6xl lg:text-7xl font-black mb-2 ${stat.color === "blue" ? "text-blue-400" : "text-white"}`}>
                    <Counter from={0} to={stat.value} duration={2.5} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <p className="text-blue-100 dark:text-blue-200 font-bold uppercase tracking-[0.15em] text-xs md:text-sm text-center">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Latest Information - Enhanced Design */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-full">
                  Informasi Terkini
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent max-w-[200px]"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
                Berita & Pengumuman
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl">
                Tetap update dengan informasi terbaru seputar kegiatan akademik, prestasi siswa, dan pengumuman penting dari sekolah
              </p>
            </div>
            <div className="flex gap-4 mt-6 md:mt-0">
              <Link href="/arsip" className="hidden md:flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider text-sm transition rounded-xl group">
                Arsip
              </Link>
              <Link href="/berita" className="hidden md:flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider text-sm transition rounded-xl group">
                Lihat Seluruh Arsip <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Enhanced Featured Post */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 group cursor-pointer"
            >
              <div className="card-elevated overflow-hidden h-full">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    fill
                    src="/galeri/berita-utama.jpg"
                    alt="News 1"
                    className="object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                      Pengumuman
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      14 April 2026
                    </span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span>Oleh: Humas YAPIM</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition leading-tight">
                    Panduan Resmi Pendaftaran Peserta Didik Baru (PPDB) Tahap 1 Tahun Ajaran 2026/2027
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-lg line-clamp-2 mb-6 leading-relaxed">
                    Pemerintah Daerah dan manajemen SMA-SMKS YAPIM resmi merilis juknis dan syarat kelengkapan administrasi bagi calon siswa baru. Seluruh proses pendaftaran akan difasilitasi secara daring.
                  </p>

                  <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform">
                    Baca Selengkapnya <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Enhanced List of Smaller Posts */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              {[
                {
                  image: "/galeri/berita-prestasi.jpg",
                  category: "Prestasi",
                  categoryColor: "emerald",
                  title: "Siswa YAPIM Juara 1 Olimpiade Sains Tingkat Provinsi",
                  excerpt: "Tim OSN bidang Fisika sekolah kita sukses meraih medali emas setelah menyisihkan 120 finalis lainnya...",
                  date: "10 April 2026"
                },
                {
                  image: "/galeri/berita-perayaan.jpg",
                  category: "Kegiatan",
                  categoryColor: "purple",
                  title: "Semarak Perayaan Hari Ulang Tahun YAPIM Ke-35",
                  excerpt: "Berbagai pertunjukan budaya Nusantara dan pameran karya mewarnai acara puncak perayaan dies natalis.",
                  date: "02 April 2026"
                },
                {
                  image: "/galeri/berita-akademik.jpg",
                  category: "Akademik",
                  categoryColor: "blue",
                  title: "Sosialisasi Kurikulum Nasional Terbaru kepada Wali Murid",
                  excerpt: "Pihak akademik mengadakan sesi panel diskusi menjelaskan arah kebijakan pendidikan yang berfokus ke talenta siswa.",
                  date: "28 Maret 2026"
                }
              ].map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="card-bordered flex flex-col sm:flex-row gap-5 p-4 h-full">
                    <div className="relative w-full sm:w-44 aspect-video sm:aspect-square flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        fill
                        src={post.image}
                        alt={post.title}
                        className="object-cover transform group-hover:scale-110 transition duration-500"
                      />
                    </div>

                    <div className="flex flex-col py-1 flex-1">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider w-max mb-3 ${post.categoryColor === "emerald" ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400" :
                        post.categoryColor === "purple" ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400" :
                          "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                        }`}>
                        {post.category}
                      </span>

                      <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition line-clamp-2">
                        {post.title}
                      </h4>

                      <p className="text-slate-500 dark:text-slate-400 text-sm mb-3 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>

                      <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/berita" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-wider text-sm transition rounded-xl">
              Lihat Seluruh Berita <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* Enhanced Video / Campus Life Section */}
      <section className="relative section-spacious overflow-hidden">
        <Image
          src="/galeri/fasilitas-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-60 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-slate-900/60 to-blue-900/80 dark:from-blue-950/85 dark:via-slate-900/70 dark:to-blue-950/85 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-20 px-4 max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-blue-300 font-bold tracking-widest uppercase text-sm mb-6 block">Tur Sekolah Virtual</span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-3xl mx-auto leading-tight mb-6">
              Jelajahi Lingkungan Belajar Kami yang Menginspirasi
            </h2>

            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Dapatkan pengalaman langsung melihat fasilitas modern, ruang kelas yang nyaman, dan lingkungan belajar yang kondusif untuk pengembangan potensi siswa
            </p>
          </div>

          <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-10">
            <iframe
              src="https://www.youtube.com/embed/8gxXqwaFDJ8"
              title="Tur Sekolah Virtual SMA-SMKS YAPIM Taruna Pandan"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fasilitas" className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-wider text-sm transition rounded-xl hover:bg-blue-50">
              Lihat Fasilitas Lengkap
            </Link>
            <Link href="/kontak" className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold uppercase tracking-wider text-sm transition rounded-xl hover:bg-white/20">
              Jadwalkan Kunjungan
            </Link>
          </div>
        </motion.div>
      </section>


      {/* Enhanced Call-to-Action Section */}
      <section className="section-standard bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10 dark:opacity-5" style={{
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
              Siap Menjadi Bagian dari Keluarga Besar YAPIM?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Bergabunglah dengan ribuan alumni sukses dan jadilah bagian dari generasi unggul yang berkarakter dan berprestasi
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/ppdb" className="inline-flex items-center px-10 py-5 bg-white text-blue-900 font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-blue-50 shadow-2xl group">
                Daftar Sekarang <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <Link href="/kontak" className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-white hover:text-blue-900">
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Enhanced Features Grid */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Keunggulan Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Mengapa Memilih YAPIM?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Kami berkomitmen memberikan pendidikan terbaik dengan fasilitas modern dan metode pembelajaran inovatif
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Kurikulum Terintegrasi",
                description: "Memadukan kurikulum nasional dengan program pengayaan internasional untuk persiapan pendidikan tinggi",
                color: "blue"
              },
              {
                icon: Users,
                title: "Guru Berkualitas",
                description: "Tenaga pendidik profesional dengan sertifikasi dan pengalaman lebih dari 10 tahun di bidangnya",
                color: "emerald"
              },
              {
                icon: BookOpen,
                title: "Fasilitas Modern",
                description: "Laboratorium lengkap, perpustakaan digital, ruang kelas ber-AC, dan sarana olahraga yang memadai",
                color: "purple"
              },
              {
                icon: Award,
                title: "Prestasi Unggul",
                description: "Ratusan prestasi tingkat regional hingga nasional di bidang akademik maupun non-akademik",
                color: "amber"
              },
              {
                icon: TrendingUp,
                title: "Program Karir",
                description: "Bimbingan karir intensif dan kemitraan dengan berbagai universitas ternama dan industri",
                color: "rose"
              },
              {
                icon: CheckCircle2,
                title: "Lingkungan Kondusif",
                description: "Suasana belajar yang disiplin, aman, dan mendukung pengembangan karakter siswa secara holistik",
                color: "cyan"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="card-elevated p-8 h-full hover:border-blue-200 dark:hover:border-blue-900">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.color === "blue" ? "bg-blue-100 dark:bg-blue-900/30" :
                    feature.color === "emerald" ? "bg-emerald-100 dark:bg-emerald-900/30" :
                      feature.color === "purple" ? "bg-purple-100 dark:bg-purple-900/30" :
                        feature.color === "amber" ? "bg-amber-100 dark:bg-amber-900/30" :
                          feature.color === "rose" ? "bg-rose-100 dark:bg-rose-900/30" :
                            "bg-cyan-100 dark:bg-cyan-900/30"
                    }`}>
                    <feature.icon className={`w-8 h-8 ${feature.color === "blue" ? "text-blue-600 dark:text-blue-400" :
                      feature.color === "emerald" ? "text-emerald-600 dark:text-emerald-400" :
                        feature.color === "purple" ? "text-purple-600 dark:text-purple-400" :
                          feature.color === "amber" ? "text-amber-600 dark:text-amber-400" :
                            feature.color === "rose" ? "text-rose-600 dark:text-rose-400" :
                              "text-cyan-600 dark:text-cyan-400"
                      }`} />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
