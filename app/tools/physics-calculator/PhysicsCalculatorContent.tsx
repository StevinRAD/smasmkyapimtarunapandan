"use client";

import { useState } from "react";
import { Calculator, Zap, ArrowRightLeft } from "lucide-react";

type FormulaType = "velocity" | "acceleration" | "force" | "kinetic" | "potential" | "work";

export default function PhysicsCalculatorContent() {
  const [formula, setFormula] = useState<FormulaType>("velocity");
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ value: number; unit: string; formula: string } | null>(null);

  const formulas = {
    velocity: {
      name: "Kecepatan (v)",
      icon: Zap,
      color: "from-blue-600 to-cyan-600",
      inputs: [
        { name: "s", label: "Jarak (s)", placeholder: "100", unit: "meter" },
        { name: "t", label: "Waktu (t)", placeholder: "10", unit: "detik" },
      ],
      calculate: (vals) => {
        const s = parseFloat(vals.s);
        const t = parseFloat(vals.t);
        if (isNaN(s) || isNaN(t) || t === 0) return null;
        return { value: s / t, unit: "m/s", formula: "v = s / t" };
      },
    },
    acceleration: {
      name: "Percepatan (a)",
      icon: ArrowRightLeft,
      color: "from-green-600 to-emerald-600",
      inputs: [
        { name: "v", label: "Kecepatan Akhir (v)", placeholder: "20", unit: "m/s" },
        { name: "v0", label: "Kecepatan Awal (v₀)", placeholder: "0", unit: "m/s" },
        { name: "t", label: "Waktu (t)", placeholder: "5", unit: "detik" },
      ],
      calculate: (vals) => {
        const v = parseFloat(vals.v);
        const v0 = parseFloat(vals.v0);
        const t = parseFloat(vals.t);
        if (isNaN(v) || isNaN(v0) || isNaN(t) || t === 0) return null;
        return { value: (v - v0) / t, unit: "m/s²", formula: "a = (v - v₀) / t" };
      },
    },
    force: {
      name: "Gaya (F)",
      icon: Zap,
      color: "from-red-600 to-rose-600",
      inputs: [
        { name: "m", label: "Massa (m)", placeholder: "10", unit: "kg" },
        { name: "a", label: "Percepatan (a)", placeholder: "5", unit: "m/s²" },
      ],
      calculate: (vals) => {
        const m = parseFloat(vals.m);
        const a = parseFloat(vals.a);
        if (isNaN(m) || isNaN(a)) return null;
        return { value: m * a, unit: "N (Newton)", formula: "F = m × a" };
      },
    },
    kinetic: {
      name: "Energi Kinetik (Ek)",
      icon: Zap,
      color: "from-yellow-600 to-amber-600",
      inputs: [
        { name: "m", label: "Massa (m)", placeholder: "5", unit: "kg" },
        { name: "v", label: "Kecepatan (v)", placeholder: "10", unit: "m/s" },
      ],
      calculate: (vals) => {
        const m = parseFloat(vals.m);
        const v = parseFloat(vals.v);
        if (isNaN(m) || isNaN(v)) return null;
        return { value: 0.5 * m * v * v, unit: "J (Joule)", formula: "Ek = ½mv²" };
      },
    },
    potential: {
      name: "Energi Potensial (Ep)",
      icon: Zap,
      color: "from-purple-600 to-violet-600",
      inputs: [
        { name: "m", label: "Massa (m)", placeholder: "10", unit: "kg" },
        { name: "g", label: "Gravitasi (g)", placeholder: "9.8", unit: "m/s²" },
        { name: "h", label: "Ketinggian (h)", placeholder: "5", unit: "meter" },
      ],
      calculate: (vals) => {
        const m = parseFloat(vals.m);
        const g = parseFloat(vals.g);
        const h = parseFloat(vals.h);
        if (isNaN(m) || isNaN(g) || isNaN(h)) return null;
        return { value: m * g * h, unit: "J (Joule)", formula: "Ep = m × g × h" };
      },
    },
    work: {
      name: "Usaha (W)",
      icon: Calculator,
      color: "from-pink-600 to-rose-600",
      inputs: [
        { name: "F", label: "Gaya (F)", placeholder: "50", unit: "N" },
        { name: "s", label: "Jarak (s)", placeholder: "10", unit: "meter" },
      ],
      calculate: (vals) => {
        const F = parseFloat(vals.F);
        const s = parseFloat(vals.s);
        if (isNaN(F) || isNaN(s)) return null;
        return { value: F * s, unit: "J (Joule)", formula: "W = F × s" };
      },
    },
  };

  const currentFormula = formulas[formula];

  const calculate = () => {
    const calculation = currentFormula.calculate(inputs);
    setResult(calculation);
  };

  const reset = () => {
    setInputs({});
    setResult(null);
  };

  const handleInputChange = (name: string, value: string) => {
    setInputs(prev => ({ ...prev, [name]: value }));
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      {/* Formula Selector */}
      <div className="card-elevated p-6 mb-6">
        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Pilih Rumus:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {Object.entries(formulas).map(([key, f]) => {
            const Icon = f.icon;
            return (
              <button
                key={key}
                onClick={() => { setFormula(key as FormulaType); setInputs({}); setResult(null); }}
                className={`p-4 rounded-xl text-left transition-all ${
                  formula === key
                    ? `bg-gradient-to-br ${f.color} text-white shadow-lg`
                    : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${formula === key ? "text-white" : "text-slate-600"}`} />
                  <span className="font-bold text-sm">{f.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Calculator */}
      <div className="card-elevated p-8 mb-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
          <Calculator className="w-8 h-8 text-emerald-600" />
          {currentFormula.name}
        </h2>

        <div className="space-y-4 mb-6">
          {currentFormula.inputs.map((input) => (
            <div key={input.name}>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                {input.label}
              </label>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={inputs[input.name] || ""}
                  onChange={(e) => handleInputChange(input.name, e.target.value)}
                  placeholder={input.placeholder}
                  className="flex-1 px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <span className="px-4 py-3 bg-slate-200 dark:bg-slate-700 rounded-xl text-slate-600 dark:text-slate-400 font-mono text-sm flex items-center">
                  {input.unit}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculate}
            className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            Hitung
          </button>

          <button
            onClick={reset}
            className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className={`card-elevated p-8 bg-gradient-to-br ${currentFormula.color} text-white mb-6`}>
          <h3 className="text-xl font-bold mb-4">Hasil Perhitungan</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-6 rounded-xl">
              <div className="text-sm opacity-80 mb-1">Rumus</div>
              <div className="text-lg font-bold font-mono">{result.formula}</div>
            </div>

            <div className="bg-white/20 p-6 rounded-xl md:col-span-2">
              <div className="text-sm opacity-80 mb-1">Hasil</div>
              <div className="text-4xl font-black">{result.value.toFixed(4)}</div>
              <div className="text-lg opacity-80">{result.unit}</div>
            </div>
          </div>
        </div>
      )}

      {/* Info */}
      <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
        <h3 className="font-bold text-emerald-900 dark:text-emerald-100 mb-3">Rumus Fisika SMA:</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
            <span className="font-mono font-bold text-emerald-600">v = s/t</span> - Kecepatan
          </div>
          <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
            <span className="font-mono font-bold text-emerald-600">a = (v-v₀)/t</span> - Percepatan
          </div>
          <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
            <span className="font-mono font-bold text-emerald-600">F = m×a</span> - Hukum Newton II
          </div>
          <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
            <span className="font-mono font-bold text-emerald-600">Ek = ½mv²</span> - Energi Kinetik
          </div>
          <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
            <span className="font-mono font-bold text-emerald-600">Ep = m×g×h</span> - Energi Potensial
          </div>
          <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
            <span className="font-mono font-bold text-emerald-600">W = F×s</span> - Usaha
          </div>
        </div>
      </div>
    </div>
  );
}
