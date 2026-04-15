"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronRight, Play } from "lucide-react";
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

      {/* Hero Section - Formal / No Glassmorphism */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
          alt="Campus Background"
          fill
          priority
          className="object-cover opacity-30 dark:opacity-50 mix-blend-overlay"
        />
        {/* Lighter Gradient Overlay for Light Mode, Dark for Dark Mode */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/90 via-slate-50/70 to-transparent dark:from-slate-950/80 dark:via-slate-900/40 dark:to-transparent z-10" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-blue-700 text-white font-black px-4 py-2 mb-6 rounded-sm text-[10px] md:text-sm uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20">
              {t("hero.badge")}
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-[1] tracking-tight uppercase">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 mb-10 max-w-2xl leading-relaxed font-medium">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/profil"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-sm font-black text-xs transition shadow-xl shadow-blue-900/40 flex items-center justify-center group uppercase tracking-widest"
              >
                {t("cta.primary")} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                href="/fasilitas"
                className="bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 backdrop-blur-md border border-slate-300 dark:border-white/30 text-slate-900 dark:text-white px-8 py-4 rounded-sm font-black text-xs transition flex items-center justify-center uppercase tracking-widest"
              >
                {t("cta.secondary")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Headmaster Welcome / About Section */}
      <section className="py-24 bg-transparent border-y border-slate-100 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-5/12">
              <div className="relative">
                {/* Formal Image Layout */}
                <div className="aspect-[3/4] md:aspect-[4/5] w-full max-w-[400px] mx-auto relative rounded-sm overflow-hidden z-10 shadow-xl">
                  <Image
                    fill
                    src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1000&auto=format&fit=crop"
                    alt="Kepala Sekolah"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
                </div>
                {/* Accent Decor elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-200 dark:bg-slate-800 rounded-sm -z-10 hidden md:block"></div>
                <div className="absolute top-12 -right-12 w-64 h-64 border-8 border-blue-100 dark:border-slate-800 rounded-sm -z-10 hidden md:block"></div>
              </div>
            </div>

            <div className="w-full lg:w-7/12">
              <div className="flex flex-col">
                <span className="text-blue-700 dark:text-blue-500 font-black tracking-[0.3em] uppercase text-[10px] md:text-sm mb-4">
                  {t("welcome.badge")}
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight uppercase leading-[1.1]">
                  {t("welcome.title")}
                </h2>
                <div className="h-1.5 w-24 bg-blue-700 mb-10"></div>
                
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-medium italic border-l-4 border-blue-700 pl-6 py-2">
                  &quot;{t("welcome.quote")}&quot;
                </p>
                
                <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed text-lg">
                  {t("welcome.subtitle")}
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex flex-col">
                    <span className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider">{t("welcome.name")}</span>
                    <span className="text-sm font-bold text-blue-700 uppercase tracking-[0.1em]">{t("welcome.role")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Board - Clean & Formal */}
      <section className="bg-blue-900 text-white relative py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-black text-blue-700 mb-2">
                <Counter from={0} to={850} duration={2} suffix="+" />
              </div>
              <p className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-[10px] md:text-xs">{t("stats.students")}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-black text-white mb-2">
                <Counter from={0} to={2500} duration={2} suffix="+" />
              </div>
              <p className="text-slate-300 font-black uppercase tracking-widest text-[10px] md:text-xs">{t("stats.alumni")}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-black text-blue-700 mb-2">
                <Counter from={0} to={45} duration={2} />
              </div>
              <p className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-[10px] md:text-xs">{t("stats.staff")}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-black text-white mb-2">
                <Counter from={0} to={100} duration={2} suffix="%" />
              </div>
              <p className="text-slate-300 font-black uppercase tracking-widest text-[10px] md:text-xs">{t("stats.graduation")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Information (News & Announcements) */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div>
              <span className="text-blue-700 dark:text-blue-500 font-bold tracking-widest uppercase text-sm mb-2 block">Informasi Terkini</span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Berita & Pengumuman Kampus</h2>
            </div>
            <Link href="/berita" className="hidden md:flex items-center text-slate-600 hover:text-blue-700 dark:hover:text-blue-500 font-bold uppercase tracking-wider text-sm transition mt-4 md:mt-0 group">
              Lihat Seluruh Arsip <ChevronRight className="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Featured Post (Large) */}
            <div className="lg:col-span-7 group cursor-pointer">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm mb-6">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
                  alt="News 1"
                  className="object-cover transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-4 left-4 bg-blue-700 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">Pengumuman</div>
              </div>
              <div className="flex items-center space-x-4 mb-3 text-sm text-slate-500 font-medium">
                <span>14 April 2026</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>Oleh: Humas YAPIM</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-500 transition leading-tight">
                Panduan Resmi Pendaftaran Peserta Didik Baru (PPDB) Tahap 1 Tahun Ajaran 2026/2027
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg line-clamp-2 mb-6">
                Pemerintah Daerah dan manajemen SMA-SMKS YAPIM resmi merilis juknis dan syarat kelengkapan administrasi bagi calon siswa baru. Seluruh proses pendaftaran akan difasilitasi secara daring.
              </p>
              <span className="text-blue-700 font-bold uppercase tracking-wider text-sm flex items-center group-hover:translate-x-2 transition-transform">
                Baca Selengkapnya <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </div>

            {/* List of Smaller Posts */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              {/* Post 2 */}
              <div className="flex flex-col sm:flex-row gap-5 group cursor-pointer items-start">
                <div className="relative w-full sm:w-40 aspect-video sm:aspect-square flex-shrink-0 overflow-hidden rounded-sm">
                  <Image
                    fill
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop"
                    alt="News 2"
                    className="object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="flex flex-col py-1">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-sm uppercase tracking-wider w-max mb-2">Prestasi</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-500 transition">
                    Siswa YAPIM Juara 1 Olimpiade Sains Tingkat Provinsi
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-2 line-clamp-2">
                    Tim OSN bidang Fisika sekolah kita sukses meraih medali emas setelah menyisihkan 120 finalis lainnya...
                  </p>
                  <span className="text-xs text-slate-400 font-medium">10 April 2026</span>
                </div>
              </div>

              {/* Post 3 */}
              <div className="flex flex-col sm:flex-row gap-5 group cursor-pointer items-start">
                <div className="relative w-full sm:w-40 aspect-video sm:aspect-square flex-shrink-0 overflow-hidden rounded-sm">
                  <Image
                    fill
                    src="https://images.unsplash.com/photo-1544207959-1e3c5098ff99?q=80&w=600&auto=format&fit=crop"
                    alt="News 3"
                    className="object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="flex flex-col py-1">
                  <span className="text-xs font-bold text-purple-700 bg-purple-50 dark:bg-purple-900/30 px-2 py-0.5 rounded-sm uppercase tracking-wider w-max mb-2">Kegiatan</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-500 transition">
                    Semarak Perayaan Hari Ulang Tahun YAPIM Ke-35
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-2 line-clamp-2">
                    Berbagai pertunjukan budaya Nusantara dan pameran karya mewarnai acara puncak perayaan dies natalis.
                  </p>
                  <span className="text-xs text-slate-400 font-medium">02 April 2026</span>
                </div>
              </div>

              {/* Post 4 */}
              <div className="flex flex-col sm:flex-row gap-5 group cursor-pointer items-start">
                <div className="relative w-full sm:w-40 aspect-video sm:aspect-square flex-shrink-0 overflow-hidden rounded-sm">
                  <Image
                    fill
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"
                    alt="News 4"
                    className="object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="flex flex-col py-1">
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-sm uppercase tracking-wider w-max mb-2">Akademik</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-500 transition">
                    Sosialisasi Kurikulum Nasional Terbaru kepada Wali Murid
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-2 line-clamp-2">
                    Pihak akademik mengadakan sesi panel diskusi menjelaskan arah kebijakan pendidikan yang berfokus ke talenta siswa.
                  </p>
                  <span className="text-xs text-slate-400 font-medium">28 Maret 2026</span>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/berita" className="inline-flex items-center text-blue-700 font-bold uppercase tracking-wider text-sm transition border border-blue-700 px-6 py-3 rounded-sm hover:bg-blue-50">
              Lihat Seluruh Berita <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video / Campus Life (A common formal uni section) */}
      <section className="relative py-32 bg-transparent flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
          alt="Video Thumbnail"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-slate-950/60 z-10" />
        <div className="relative z-20 text-center px-4">
          <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 cursor-pointer hover:scale-110 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            <Play className="w-8 h-8 text-blue-700 ml-2" />
          </button>
          <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">Tur Kampus Virtual</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Jelajahi Lingkungan Belajar Kami yang Menginspirasi
          </h2>
        </div>
      </section>

    </div>
  );
}
