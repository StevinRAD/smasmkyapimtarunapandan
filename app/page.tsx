"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronRight, Play, GraduationCap, Award, Users, BookOpen, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";

function Counter({ from, to, duration, suffix = "" }: { from: number; to: number; duration: number, suffix?: string }) {
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

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full font-sans text-slate-800 dark:text-slate-200 bg-transparent">

      {/* Hero Section - Enhanced Modern Design */}
      <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        {/* Background Image with Overlay */}
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
          alt="Campus Background"
          fill
          priority
          className="object-cover opacity-40 dark:opacity-50"
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/60 to-slate-900/50 dark:from-blue-950/90 dark:via-slate-900/70 dark:to-slate-950/60 z-10" />

        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 z-10 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Enhanced Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-5 py-2.5 mb-8 rounded-full text-xs md:text-sm uppercase tracking-[0.25em] shadow-2xl animate-fade-in">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
              {t("hero.badge")}
            </div>

            {/* Enhanced Typography */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tight uppercase drop-shadow-2xl">
              {t("hero.title")}
            </h1>

            <p className="text-xl md:text-2xl text-blue-50/90 dark:text-blue-100/80 mb-12 max-w-3xl leading-relaxed font-medium border-l-4 border-blue-400 pl-6">
              {t("hero.subtitle")}
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/profil"
                className="group bg-white text-blue-900 hover:bg-blue-50 px-10 py-5 rounded-xl font-bold text-sm md:text-base transition-all duration-300 shadow-2xl flex items-center justify-center hover:shadow-3xl hover:scale-105 uppercase tracking-widest"
              >
                {t("cta.primary")} <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                href="/fasilitas"
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center uppercase tracking-widest hover:scale-105"
              >
                {t("cta.secondary")}
              </Link>
            </div>

            {/* Quick Stats Strip */}
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">35+</div>
                <div className="text-xs text-blue-200 uppercase tracking-widest">Tahun Pengalaman</div>
              </div>
              <div className="text-center border-l border-r border-white/20">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">A</div>
                <div className="text-xs text-blue-200 uppercase tracking-widest">Akreditasi Unggul</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">100%</div>
                <div className="text-xs text-blue-200 uppercase tracking-widest">Lulusan Berkualitas</div>
              </div>
            </div>
          </motion.div>
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


      {/* Headmaster Welcome / About Section - Enhanced */}
      <section className="section-spacious bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, #f1f5f9 25%, transparent 25%, transparent 75%, #f1f5f9 75%, #f1f5f9), linear-gradient(45deg, #f1f5f9 25%, transparent 25%, transparent 75%, #f1f5f9 75%, #f1f5f9)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
            {/* Enhanced Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-5/12"
            >
              <div className="relative">
                {/* Main Image with Enhanced Frame */}
                <div className="aspect-[3/4] md:aspect-[4/5] w-full max-w-[450px] mx-auto relative rounded-2xl overflow-hidden z-10 shadow-2xl shadow-slate-300/50 dark:shadow-slate-900/50">
                  <Image
                    fill
                    src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1000&auto=format&fit=crop"
                    alt="Kepala Sekolah"
                    className="object-cover hover:scale-105 transition-all duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>
                </div>

                {/* Enhanced Accent Decor elements */}
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl -z-10 hidden md:block shadow-xl shadow-blue-500/30"></div>
                <div className="absolute top-8 -right-8 w-72 h-72 border-4 border-blue-200 dark:border-blue-900 rounded-2xl -z-10 hidden md:block"></div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 hidden md:block animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-slate-900 dark:text-white">35+</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider">Tahun Mengabdi</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-7/12"
            >
              <div className="flex flex-col">
                {/* Enhanced Badge */}
                <div className="flex items-center space-x-3 mb-6">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full">
                    {t("welcome.badge")}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent dark:from-blue-800"></div>
                </div>

                {/* Enhanced Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tight uppercase leading-[1.1]">
                  {t("welcome.title")}
                </h2>

                {/* Enhanced Decorative Line */}
                <div className="flex items-center space-x-4 mb-10">
                  <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                  <div className="h-1.5 w-8 bg-gradient-to-r from-blue-400 to-transparent rounded-full"></div>
                </div>

                {/* Enhanced Quote */}
                <div className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-950/30 dark:to-slate-900/30 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8">
                  <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic">
                    &quot;{t("welcome.quote")}&quot;
                  </p>
                </div>

                {/* Enhanced Description */}
                <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg">
                  {t("welcome.subtitle")}
                </p>

                {/* Enhanced Signature */}
                <div className="flex items-center space-x-6 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider">{t("welcome.name")}</span>
                    <span className="text-sm font-bold text-blue-700 dark:text-blue-400 uppercase tracking-[0.15em]">{t("welcome.role")}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Board - Enhanced Modern Design */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-24 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 3px 3px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '40px 40px',
            animation: 'pan 20s linear infinite'
          }}></div>
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
            <Link href="/berita" className="hidden md:flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider text-sm transition rounded-xl group mt-6 md:mt-0">
              Lihat Seluruh Arsip <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
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
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
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
                  image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
                  category: "Prestasi",
                  categoryColor: "emerald",
                  title: "Siswa YAPIM Juara 1 Olimpiade Sains Tingkat Provinsi",
                  excerpt: "Tim OSN bidang Fisika sekolah kita sukses meraih medali emas setelah menyisihkan 120 finalis lainnya...",
                  date: "10 April 2026"
                },
                {
                  image: "https://images.unsplash.com/photo-1544207959-1e3c5098ff99?q=80&w=600&auto=format&fit=crop",
                  category: "Kegiatan",
                  categoryColor: "purple",
                  title: "Semarak Perayaan Hari Ulang Tahun YAPIM Ke-35",
                  excerpt: "Berbagai pertunjukan budaya Nusantara dan pameran karya mewarnai acara puncak perayaan dies natalis.",
                  date: "02 April 2026"
                },
                {
                  image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
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
                      <span className={`text-xs font-bold bg-${post.categoryColor}-100 dark:bg-${post.categoryColor}-900/30 text-${post.categoryColor}-700 dark:text-${post.categoryColor}-400 px-3 py-1 rounded-full uppercase tracking-wider w-max mb-3`}>
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
      <section className="relative section-spacious flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
          alt="Video Thumbnail"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-slate-900/80 to-blue-900/90 z-10"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        >
          <button className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl flex items-center justify-center mx-auto mb-10 cursor-pointer hover:scale-110 transition-transform shadow-2xl group">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Play className="w-10 h-10 md:w-12 md:h-12 text-blue-600 relative z-10 group-hover:text-white transition-colors duration-300 ml-1" />
          </button>

          <span className="text-blue-300 font-bold tracking-widest uppercase text-sm mb-6 block">Tur Kampus Virtual</span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-3xl mx-auto leading-tight mb-6">
            Jelajahi Lingkungan Belajar Kami yang Menginspirasi
          </h2>

          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Dapatkan pengalaman langsung melihat fasilitas modern, ruang kelas yang nyaman, dan lingkungan belajar yang kondusif untuk pengembangan potensi siswa
          </p>

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
          <div className="absolute inset-0 opacity-10" style={{
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
                  <div className={`w-16 h-16 rounded-2xl bg-${feature.color}-100 dark:bg-${feature.color}-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}-600 dark:text-${feature.color}-400`} />
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
