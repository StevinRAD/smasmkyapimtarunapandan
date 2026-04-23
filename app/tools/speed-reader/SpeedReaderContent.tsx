"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, BookOpen, Eye, Zap } from "lucide-react";

export default function SpeedReaderContent() {
  const [text, setText] = useState("Selamat datang di Speed Reader. Tempel teks yang ingin Anda baca di sini, lalu klik tombol play untuk mulai membaca dengan kecepatan tinggi.");
  const [words, setWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wpm, setWpm] = useState(300);
  const [chunkSize, setChunkSize] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setWords(text.split(/\s+/).filter(w => w.length > 0));
    setCurrentIndex(0);
    setIsPlaying(false);
  }, [text]);

  useEffect(() => {
    if (isPlaying && currentIndex < words.length) {
      const delay = (60 / wpm) * 1000;
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= words.length - chunkSize) {
            setIsPlaying(false);
            return prev;
          }
          return prev + chunkSize;
        });
      }, delay);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentIndex, words.length, wpm, chunkSize]);

  const togglePlay = () => {
    if (currentIndex >= words.length - chunkSize) {
      setCurrentIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  const reset = () => {
    setIsPlaying(false);
    setCurrentIndex(0);
  };

  const getCurrentChunk = () => {
    const chunk = words.slice(currentIndex, currentIndex + chunkSize);
    return chunk.join(" ");
  };

  const getFocusPoint = (word: string) => {
    const center = Math.floor(word.length / 2);
    const before = word.slice(0, center);
    const focus = word[center] || "";
    const after = word.slice(center + 1);
    return { before, focus, after };
  };

  const currentWord = words[currentIndex] || "";
  const { before, focus, after } = getFocusPoint(currentWord);
  const progress = words.length > 0 ? ((currentIndex + chunkSize) / words.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900 via-blue-800 to-slate-900 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <Zap className="w-5 h-5 mr-3" />
            Speed Reading
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Speed Reader
          </h1>

          <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
            Baca teks dengan kecepatan tinggi menggunakan teknik RSVP
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Reader Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-elevated p-8 md:p-12 mb-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                <Eye className="w-4 h-4" />
                <span>Kata {currentIndex + 1} dari {words.length}</span>
              </div>

              {/* Reading Display */}
              <div className="relative inline-block">
                <div className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tabular-nums">
                  <span className="text-slate-400 dark:text-slate-600">{before}</span>
                  <span className="text-red-600">{focus}</span>
                  <span className="text-slate-400 dark:text-slate-600">{after}</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-red-600"></div>
              </div>

              {/* Progress Bar */}
              <div className="mt-8">
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-gradient-to-r from-sky-500 to-blue-600"
                  />
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  {progress.toFixed(0)}% selesai
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={reset}
                className="p-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <RotateCcw className="w-6 h-6" />
              </button>

              <button
                onClick={togglePlay}
                className="p-6 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-2xl hover:from-sky-600 hover:to-blue-700 transition-all shadow-xl shadow-sky-600/30"
              >
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
              </button>
            </div>
          </motion.div>

          {/* Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-elevated p-6 mb-8"
          >
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Pengaturan</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Kecepatan: {wpm} WPM
                </label>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  step="50"
                  value={wpm}
                  onChange={(e) => setWpm(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mt-1">
                  <span>100</span>
                  <span>1000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Kata per tampilan: {chunkSize}
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={chunkSize}
                  onChange={(e) => setChunkSize(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mt-1">
                  <span>1</span>
                  <span>5</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-elevated p-6"
          >
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Teks untuk Dibaca</h3>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Tempel teks yang ingin Anda baca di sini..."
              rows={6}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 resize-none"
            />
            <div className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              {words.length} kata | Estimasi waktu: {Math.ceil(words.length / wpm)} menit
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 text-center">
            Tips Speed Reading
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Fokus di Tengah</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Huruf berwarna merah adalah titik fokus untuk membaca lebih cepat
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Mulai Pelan</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Mulai dengan 200-300 WPM, tingkatkan secara bertahap
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Latihan Rutin</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Latih 15-20 menit setiap hari untuk hasil maksimal
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
