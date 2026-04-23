"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shuffle, Plus, Trash2, Sparkles, Crown } from "lucide-react";

export default function RandomPickerContent() {
  const [items, setItems] = useState<string[]>([""]);
  const [picked, setPicked] = useState<string | null>(null);
  const [isPicking, setIsPicking] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const updateItem = (index: number, value: string) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, ""]);
  };

  const removeItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const pickRandom = () => {
    const validItems = items.filter((item) => item.trim() !== "");
    if (validItems.length === 0) return;

    setIsPicking(true);
    let count = 0;
    const maxCount = 20;

    const interval = setInterval(() => {
      const randomItem = validItems[Math.floor(Math.random() * validItems.length)];
      setPicked(randomItem);
      count++;

      if (count >= maxCount) {
        clearInterval(interval);
        setIsPicking(false);
        setHistory([randomItem, ...history].slice(0, 10));
      }
    }, 100);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const validItems = items.filter((item) => item.trim() !== "");

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-900 via-pink-800 to-slate-900 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <Shuffle className="w-5 h-5 mr-3" />
            Random
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Random Picker
          </h1>

          <p className="text-xl md:text-2xl text-fuchsia-100 max-w-3xl mx-auto leading-relaxed">
            Pilih item secara acak untuk kuis, games, atau undian
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card-elevated p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black text-slate-900 dark:text-white">
                  Daftar Item
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={addItem}
                    className="p-2 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
                {items.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => updateItem(index, e.target.value)}
                      placeholder={`Item ${index + 1}`}
                      className="flex-1 px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-fuchsia-500"
                    />
                    {items.length > 1 && (
                      <button
                        onClick={() => removeItem(index)}
                        className="p-3 text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-sm text-slate-600 dark:text-slate-400">
                {validItems.length} item valid / {items.length} total
              </div>
            </motion.div>

            {/* Result Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="card-elevated p-6 md:p-8"
            >
              <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6">
                Hasil
              </h2>

              <div className="bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-2xl p-8 mb-6 min-h-[200px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isPicking || picked ? (
                    <motion.div
                      key={picked}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <Crown className="w-12 h-12 text-white/80 mx-auto mb-4" />
                      <div className="text-3xl md:text-4xl font-black text-white">
                        {picked || "..."}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-white/60"
                    >
                      <Sparkles className="w-16 h-16 mx-auto mb-4" />
                      <p>Klik tombol pick untuk memilih</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={pickRandom}
                disabled={validItems.length === 0 || isPicking}
                className="w-full py-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-black rounded-xl hover:from-fuchsia-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
              >
                {isPicking ? "Memilih..." : "🎲 Pick Random!"}
              </button>
            </motion.div>
          </div>

          {/* History */}
          {history.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-elevated p-6 md:p-8 mt-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900 dark:text-white">Riwayat</h3>
                <button
                  onClick={clearHistory}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors"
                >
                  Hapus Riwayat
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {history.map((item, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-bold ${
                      index === 0
                        ? "bg-fuchsia-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 text-center">
            Cara Penggunaan
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-3">❓</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Kuis & Games</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Pilih siswa secara acak untuk menjawab pertanyaan
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-3">🎁</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Doorprize</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Undian hadiah untuk acara sekolah
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Pilih Tugas</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Tentukan siapa yang presentasi duluan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
