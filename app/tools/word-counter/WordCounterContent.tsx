"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, AlignLeft, Type, Hash, List } from "lucide-react";

export default function WordCounterContent() {
  const [text, setText] = useState("");

  const countWords = (str: string) => {
    const trimmed = str.trim();
    if (trimmed === "") return 0;
    return trimmed.split(/\s+/).length;
  };

  const countSentences = (str: string) => {
    const trimmed = str.trim();
    if (trimmed === "") return 0;
    const sentences = trimmed.split(/[.!?]+/).filter(s => s.trim().length > 0);
    return sentences.length;
  };

  const countParagraphs = (str: string) => {
    const trimmed = str.trim();
    if (trimmed === "") return 0;
    const paragraphs = trimmed.split(/\n\n+/).filter(p => p.trim().length > 0);
    return paragraphs.length;
  };

  const readingTime = (wordCount: number) => {
    const wordsPerMinute = 200;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    if (minutes < 1) return "< 1 menit";
    return `${minutes} menit`;
  };

  const speakingTime = (wordCount: number) => {
    const wordsPerMinute = 150;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    if (minutes < 1) return "< 1 menit";
    return `${minutes} menit`;
  };

  const words = countWords(text);
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const sentences = countSentences(text);
  const paragraphs = countParagraphs(text);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900 via-orange-800 to-slate-900 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <FileText className="w-5 h-5 mr-3" />
            Text Tools
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Word Counter
          </h1>

          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Hitung kata, karakter, paragraf, dan estimasi waktu baca
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-elevated p-6 md:p-8 mb-8"
          >
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ketik atau tempel teks Anda di sini..."
              rows={12}
              className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 resize-none text-lg"
            />
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="card-elevated p-6 bg-gradient-to-br from-amber-500 to-orange-600 text-white">
              <div className="flex items-center justify-between mb-2">
                <Type className="w-6 h-6 opacity-80" />
                <span className="text-xs font-bold uppercase opacity-80">Kata</span>
              </div>
              <div className="text-3xl font-black">{words}</div>
            </div>

            <div className="card-elevated p-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              <div className="flex items-center justify-between mb-2">
                <Hash className="w-6 h-6 opacity-80" />
                <span className="text-xs font-bold uppercase opacity-80">Karakter</span>
              </div>
              <div className="text-3xl font-black">{characters}</div>
            </div>

            <div className="card-elevated p-6 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
              <div className="flex items-center justify-between mb-2">
                <AlignLeft className="w-6 h-6 opacity-80" />
                <span className="text-xs font-bold uppercase opacity-80">Kalimat</span>
              </div>
              <div className="text-3xl font-black">{sentences}</div>
            </div>

            <div className="card-elevated p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white">
              <div className="flex items-center justify-between mb-2">
                <List className="w-6 h-6 opacity-80" />
                <span className="text-xs font-bold uppercase opacity-80">Paragraf</span>
              </div>
              <div className="text-3xl font-black">{paragraphs}</div>
            </div>
          </motion.div>

          {/* Detail Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-elevated p-6 md:p-8 mb-8"
          >
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">Statistik Detail</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Karakter (tanpa spasi)</span>
                  <span className="text-lg font-black text-slate-900 dark:text-white">{charactersNoSpaces}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Rata-rata kata per kalimat</span>
                  <span className="text-lg font-black text-slate-900 dark:text-white">
                    {sentences > 0 ? (words / sentences).toFixed(1) : 0}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                  <span className="text-sm text-slate-600 dark:text-slate-400">⏱️ Estimasi waktu baca</span>
                  <span className="text-lg font-black text-amber-600">{readingTime(words)}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <span className="text-sm text-slate-600 dark:text-slate-400">🎤 Estimasi waktu bicara</span>
                  <span className="text-lg font-black text-blue-600">{speakingTime(words)}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Clear Button */}
          {text && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <button
                onClick={() => setText("")}
                className="px-8 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors"
              >
                Hapus Semua Teks
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
            Tips Menulis
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Paragraf Ideal</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                3-5 kalimat per paragraf untuk keterbacaan optimal
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">📏</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Panjang Kalimat</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                15-20 kata per kalimat adalah ideal untuk teks akademik
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">📄</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Panjang Esai</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                500-700 kata untuk esai standar SMA
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
