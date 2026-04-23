"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Percent, Calculator, ArrowUpDown } from "lucide-react";

type CalcType = "percentage" | "percentOf" | "percentChange" | "reversePercent";

export default function PercentageCalculatorContent() {
  const [calcType, setCalcType] = useState<CalcType>("percentage");

  const [values, setValues] = useState({
    value: "",
    percentage: "",
    total: "",
    fromValue: "",
    toValue: "",
  });

  const updateValue = (key: string, val: string) => {
    setValues({ ...values, [key]: val });
  };

  const calculate = () => {
    const value = parseFloat(values.value) || 0;
    const percentage = parseFloat(values.percentage) || 0;
    const total = parseFloat(values.total) || 0;
    const fromValue = parseFloat(values.fromValue) || 0;
    const toValue = parseFloat(values.toValue) || 0;

    switch (calcType) {
      case "percentage":
        if (value > 0 && total > 0) {
          return ((value / total) * 100).toFixed(2) + "%";
        }
        return "";
      case "percentOf":
        if (total > 0 && percentage >= 0) {
          return ((percentage / 100) * total).toFixed(2);
        }
        return "";
      case "percentChange":
        if (fromValue > 0 && toValue >= 0) {
          const change = ((toValue - fromValue) / fromValue) * 100;
          const sign = change >= 0 ? "+" : "";
          return sign + change.toFixed(2) + "%";
        }
        return "";
      case "reversePercent":
        if (value > 0 && percentage > 0) {
          return (value / (1 - percentage / 100)).toFixed(2);
        }
        return "";
      default:
        return "";
    }
  };

  const result = calculate();

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-emerald-800 to-slate-900 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <Percent className="w-5 h-5 mr-3" />
            Matematika
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Kalkulator Persen
          </h1>

          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Hitung persentase dengan mudah dan cepat
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-2xl mx-auto px-4 md:px-8">
          {/* Type Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
          >
            <button
              onClick={() => setCalcType("percentage")}
              className={`p-4 rounded-xl font-bold text-sm transition-all ${
                calcType === "percentage"
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              % dari Total
            </button>
            <button
              onClick={() => setCalcType("percentOf")}
              className={`p-4 rounded-xl font-bold text-sm transition-all ${
                calcType === "percentOf"
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              % dari Angka
            </button>
            <button
              onClick={() => setCalcType("percentChange")}
              className={`p-4 rounded-xl font-bold text-sm transition-all ${
                calcType === "percentChange"
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              % Perubahan
            </button>
            <button
              onClick={() => setCalcType("reversePercent")}
              className={`p-4 rounded-xl font-bold text-sm transition-all ${
                calcType === "reversePercent"
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              % Asli
            </button>
          </motion.div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-elevated p-6 md:p-8 mb-8"
          >
            {calcType === "percentage" && (
              <div className="space-y-6">
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4">
                  Berapa persen X dari Y?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Nilai (X)
                    </label>
                    <input
                      type="number"
                      value={values.value}
                      onChange={(e) => updateValue("value", e.target.value)}
                      placeholder="Contoh: 25"
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Total (Y)
                    </label>
                    <input
                      type="number"
                      value={values.total}
                      onChange={(e) => updateValue("total", e.target.value)}
                      placeholder="Contoh: 100"
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center p-4">
                  <ArrowUpDown className="w-6 h-6 text-slate-400" />
                </div>
              </div>
            )}

            {calcType === "percentOf" && (
              <div className="space-y-6">
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4">
                  Berapa X% dari Y?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Persentase (%)
                    </label>
                    <input
                      type="number"
                      value={values.percentage}
                      onChange={(e) => updateValue("percentage", e.target.value)}
                      placeholder="Contoh: 20"
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Dari Angka
                    </label>
                    <input
                      type="number"
                      value={values.total}
                      onChange={(e) => updateValue("total", e.target.value)}
                      placeholder="Contoh: 150"
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {calcType === "percentChange" && (
              <div className="space-y-6">
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4">
                  Berapa % perubahan dari X ke Y?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Nilai Awal
                    </label>
                    <input
                      type="number"
                      value={values.fromValue}
                      onChange={(e) => updateValue("fromValue", e.target.value)}
                      placeholder="Contoh: 100"
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Nilai Akhir
                    </label>
                    <input
                      type="number"
                      value={values.toValue}
                      onChange={(e) => updateValue("toValue", e.target.value)}
                      placeholder="Contoh: 150"
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {calcType === "reversePercent" && (
              <div className="space-y-6">
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4">
                  Cari nilai asli sebelum diskon/pajak
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Nilai Akhir
                    </label>
                    <input
                      type="number"
                      value={values.value}
                      onChange={(e) => updateValue("value", e.target.value)}
                      placeholder="Contoh: 80"
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      % Diskon/Pajak
                    </label>
                    <input
                      type="number"
                      value={values.percentage}
                      onChange={(e) => updateValue("percentage", e.target.value)}
                      placeholder="Contoh: 20"
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Result */}
            {result && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl text-center"
              >
                <div className="text-white/80 text-sm font-bold uppercase mb-2">Hasil</div>
                <div className="text-5xl font-black text-white">{result}</div>
              </motion.div>
            )}
          </motion.div>

          {/* Examples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-elevated p-6"
          >
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Contoh Penggunaan</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <span className="text-slate-600 dark:text-slate-400">Nilai 25 dari 100</span>
                <span className="font-bold text-green-600">25%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <span className="text-slate-600 dark:text-slate-400">20% dari 150</span>
                <span className="font-bold text-green-600">30</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <span className="text-slate-600 dark:text-slate-400">Perubahan 100 ke 150</span>
                <span className="font-bold text-green-600">+50%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <span className="text-slate-600 dark:text-slate-400">Harga 80 setelah diskon 20%</span>
                <span className="font-bold text-green-600">100 (asli)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
