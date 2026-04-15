"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, ChevronDown, GraduationCap, Phone, Mail, Users, Award } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500">
      {/* Main Navbar - Enhanced Design */}
      <div className={`transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl py-3 shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50'
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-4 shadow-md shadow-slate-100/50 dark:shadow-slate-900/30'
      } border-b border-slate-200/50 dark:border-slate-800/50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Enhanced Logo Area */}
            <Link href="/" className="flex-shrink-0 flex items-center space-x-4 group outline-none">
              <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <Image
                  src="/logo.png"
                  alt="SMA-SMKS YAPIM Logo"
                  width={56}
                  height={56}
                  className="object-contain relative z-10"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="whitespace-nowrap font-black text-lg md:text-xl leading-none text-slate-900 dark:text-white uppercase tracking-tight mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  SMA-SMKS YAPIM
                </span>
                <span className="whitespace-nowrap text-[10px] md:text-xs text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] uppercase leading-none">
                  Taruna Pandan
                </span>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 justify-center space-x-1 xl:space-x-2 h-full items-center px-8">

              <Link href="/profil" className="relative group px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 uppercase tracking-widest">
                <span className="relative z-10">Tentang Yapim</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </Link>

              {/* Enhanced Dropdown Pendidikan & Akademik */}
              <div className="relative group">
                <button className="flex items-center px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 uppercase tracking-widest">
                  <span>Akademik</span>
                  <ChevronDown className="w-3 h-3 ml-1.5 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700 overflow-hidden">
                    <div className="py-2">
                      <Link href="/akademik/sma" className="flex items-center px-4 py-3 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                        <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                          <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </span>
                        SMA
                      </Link>
                      <Link href="/akademik/smk" className="flex items-center px-4 py-3 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                        <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-3">
                          <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        </span>
                        SMK
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/fasilitas" className="relative group px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 uppercase tracking-widest">
                <span className="relative z-10">Fasilitas</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </Link>

              <Link href="/berita" className="relative group px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 uppercase tracking-widest">
                <span className="relative z-10">Berita</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </Link>

              {/* Enhanced Dropdown Pusat Informasi */}
              <div className="relative group">
                <button className="flex items-center px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 uppercase tracking-widest">
                  <span>Informasi</span>
                  <ChevronDown className="w-3 h-3 ml-1.5 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700 overflow-hidden">
                    <div className="p-4">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">Portal</div>
                      <Link href="/ppdb" className="flex items-center px-3 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all rounded-lg">
                        <GraduationCap className="w-4 h-4 mr-3 text-blue-600" />
                        PPDB Online
                      </Link>
                      <Link href="/staf" className="flex items-center px-3 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all rounded-lg">
                        <Users className="w-4 h-4 mr-3 text-emerald-600" />
                        Guru & Staff
                      </Link>
                      <Link href="/alumni" className="flex items-center px-3 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all rounded-lg">
                        <Award className="w-4 h-4 mr-3 text-purple-600" />
                        Alumni & Karir
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </nav>

            {/* Enhanced Actions & Toggles */}
            <div className="hidden md:flex items-center space-x-2">
              {/* CTA Button */}
              <Link
                href="/kontak"
                className="hidden xl:flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40"
              >
                <Phone className="w-3.5 h-3.5 mr-2" />
                Hubungi
              </Link>

              {/* Enhanced Language Switcher */}
              <button
                onClick={() => setLanguage(language === "id" ? "en" : "id")}
                className="flex items-center justify-center w-9 h-9 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                title="Ubah Bahasa"
              >
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {language === "id" ? "ID" : "EN"}
                </span>
              </button>

              {/* Enhanced Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center justify-center w-9 h-9 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                title="Ubah Tema"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            {/* Enhanced Mobile Toggle */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-800 rounded-lg transition-all"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 rounded-lg transition-all hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl"
          >
            <div className="flex flex-col px-6 py-8 space-y-2">
              {/* Mobile CTA */}
              <Link
                href="/kontak"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg mb-6"
              >
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Link>

              <Link href="/profil" onClick={() => setIsOpen(false)} className="flex items-center py-4 px-4 text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                <GraduationCap className="w-5 h-5 mr-3 text-blue-600" />
                Tentang YAPIM
              </Link>

              <div className="py-3 px-4">
                <span className="flex items-center text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-3">
                  <GraduationCap className="w-5 h-5 mr-2 text-emerald-600" />
                  Pendidikan & Akademik
                </span>
                <div className="flex flex-col pl-8 space-y-1">
                  <Link href="/akademik/sma" onClick={() => setIsOpen(false)} className="py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 uppercase tracking-widest">SMA</Link>
                  <Link href="/akademik/smk" onClick={() => setIsOpen(false)} className="py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 uppercase tracking-widest">SMK</Link>
                </div>
              </div>

              <Link href="/fasilitas" onClick={() => setIsOpen(false)} className="flex items-center py-4 px-4 text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                <span className="w-5 h-5 mr-3 text-purple-600">🏫</span>
                Fasilitas Sekolah
              </Link>

              <Link href="/berita" onClick={() => setIsOpen(false)} className="flex items-center py-4 px-4 text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                <span className="w-5 h-5 mr-3 text-amber-600">📰</span>
                Berita & Pengumuman
              </Link>

              <div className="py-3 px-4">
                <span className="flex items-center text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-3">
                  <span className="w-5 h-5 mr-2">ℹ️</span>
                  Pusat Informasi
                </span>
                <div className="flex flex-col pl-8 space-y-1">
                  <Link href="/staf" onClick={() => setIsOpen(false)} className="py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 uppercase tracking-widest">Guru & Staff</Link>
                  <Link href="/alumni" onClick={() => setIsOpen(false)} className="py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 uppercase tracking-widest">Alumni & Karir</Link>
                  <Link href="/ppdb" onClick={() => setIsOpen(false)} className="py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 uppercase tracking-widest">PPDB Online</Link>
                </div>
              </div>

              <div className="flex items-center justify-between py-4 px-4 mt-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Bahasa</span>
                <button
                  onClick={() => setLanguage(language === "id" ? "en" : "id")}
                  className="flex items-center px-4 py-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700"
                >
                  <span className="text-xs font-black uppercase tracking-widest bg-blue-600 text-white px-2 py-1 rounded mr-2">
                    {language === "id" ? "ID" : "EN"}
                  </span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {language === "id" ? "Indonesia" : "English"}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
