"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Globe, Menu, X, ChevronDown } from "lucide-react";
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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md py-2' : 'bg-white dark:bg-slate-900 py-2'} shadow-sm border-b border-slate-200 dark:border-slate-800`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo Area */}
            <Link href="/" className="flex-shrink-0 flex items-center space-x-3 group outline-none mr-8 xl:mr-8">
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 duration-500">
                <Image
                  src="/logo.png"
                  alt="SMAS-SMKS YAPIM Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="whitespace-nowrap font-title font-black text-lg md:text-xl leading-none text-slate-900 dark:text-white uppercase tracking-tight mb-1">
                  SMA-SMKS YAPIM
                </span>
                <span className="whitespace-nowrap text-[10px] md:text-xs text-blue-700 dark:text-blue-400 font-bold tracking-[0.2em] uppercase leading-none">
                  Taruna Pandan
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 justify-end space-x-2 xl:space-x-3 h-full items-center mr-4 lg:mr-8">

              <Link href="/profil" className="whitespace-nowrap px-2 xl:px-3 py-2 text-[10px] xl:text-[11px] font-black text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors uppercase tracking-widest relative group">
                TENTANG YAPIM
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>

              {/* Dropdown Pendidikan & Akademik */}
              <div className="relative group px-2 xl:px-3 py-2">
                <button className="whitespace-nowrap flex items-center text-[10px] xl:text-[11px] font-black text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors uppercase tracking-widest">
                  PENDIDIKAN & AKADEMIK <ChevronDown className="w-3 h-3 ml-1 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-sm overflow-hidden flex flex-col">
                  <Link href="/akademik/sma" className="px-5 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-blue-700 dark:hover:text-blue-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-700">SMA</Link>
                  <Link href="/akademik/smk" className="px-5 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-blue-700 dark:hover:text-blue-400 uppercase tracking-widest">SMK</Link>
                </div>
              </div>

              <Link href="/fasilitas" className="whitespace-nowrap px-2 xl:px-3 py-2 text-[10px] xl:text-[11px] font-black text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors uppercase tracking-widest relative group">
                FASILITAS SEKOLAH
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>

              <Link href="/berita" className="whitespace-nowrap px-2 xl:px-3 py-2 text-[10px] xl:text-[11px] font-black text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors uppercase tracking-widest relative group">
                BERITA & PENGUMUMAN
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>

              {/* Dropdown Pusat Informasi */}
              <div className="relative group px-2 xl:px-3 py-2">
                <button className="whitespace-nowrap flex items-center text-[10px] xl:text-[11px] font-black text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors uppercase tracking-widest">
                  PUSAT INFORMASI <ChevronDown className="w-3 h-3 ml-1 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-sm overflow-hidden flex flex-col">
                  <Link href="/staf" className="px-5 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-blue-700 dark:hover:text-blue-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-700">GURU & STAFF</Link>
                  <Link href="/alumni" className="px-5 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-blue-700 dark:hover:text-blue-400 uppercase tracking-widest">ALUMNI & KARIR</Link>
                </div>
              </div>

            </nav>

            {/* Actions & Toggles */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === "id" ? "en" : "id")}
                className="flex items-center justify-center p-2.5 text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 bg-slate-100/50 dark:bg-slate-800/50 rounded-full hover:bg-blue-50 dark:hover:bg-slate-700 transition outline-none"
                title="Ubah Bahasa"
              >
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {language === "id" ? "ID" : "EN"}
                </span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center justify-center p-2.5 text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 bg-slate-100/50 dark:bg-slate-800/50 rounded-full hover:bg-blue-50 dark:hover:bg-slate-700 transition outline-none"
                title="Ubah Tema"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-slate-600 dark:text-slate-400"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-900 dark:text-white"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white dark:bg-slate-900 shadow-2xl overflow-hidden border-b border-slate-200 dark:border-slate-800"
          >
            <div className="flex flex-col px-6 pt-4 pb-10 space-y-4">
              <Link href="/profil" onClick={() => setIsOpen(false)} className="block py-3 text-sm font-bold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 uppercase tracking-widest">TENTANG YAPIM</Link>

              <div className="py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="block mb-2 text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest">PENDIDIKAN & AKADEMIK</span>
                <div className="flex flex-col pl-4 space-y-2">
                  <Link href="/akademik/sma" onClick={() => setIsOpen(false)} className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-blue-700 uppercase tracking-widest">SMA</Link>
                  <Link href="/akademik/smk" onClick={() => setIsOpen(false)} className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-blue-700 uppercase tracking-widest">SMK</Link>
                </div>
              </div>

              <Link href="/fasilitas" onClick={() => setIsOpen(false)} className="block py-3 text-sm font-bold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 uppercase tracking-widest">FASILITAS SEKOLAH</Link>
              <Link href="/berita" onClick={() => setIsOpen(false)} className="block py-3 text-sm font-bold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 uppercase tracking-widest">BERITA & PENGUMUMAN</Link>

              <div className="py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="block mb-2 text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest">PUSAT INFORMASI</span>
                <div className="flex flex-col pl-4 space-y-2">
                  <Link href="/staf" onClick={() => setIsOpen(false)} className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-blue-700 uppercase tracking-widest">GURU & STAFF</Link>
                  <Link href="/alumni" onClick={() => setIsOpen(false)} className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-blue-700 uppercase tracking-widest">ALUMNI & KARIR</Link>
                </div>
              </div>

              <div className="flex justify-between items-center py-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Ubah Bahasa</span>
                <button
                  onClick={() => setLanguage(language === "id" ? "en" : "id")}
                  className="text-sm font-bold text-blue-700 flex items-center"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                    {language === "id" ? "EN" : "ID"}
                  </span>
                  <span className="ml-2">{language === "id" ? "English" : "Bahasa Indonesia"}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
