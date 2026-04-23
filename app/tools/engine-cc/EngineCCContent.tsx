"use client";

import { useState } from "react";
import { Calculator, Wrench, Info } from "lucide-react";

export default function EngineCCContent() {
  const [bore, setBore] = useState("");
  const [stroke, setStroke] = useState("");
  const [cylinders, setCylinders] = useState("4");
  const [result, setResult] = useState<{ cc: number; liter: number; cubicInch: number } | null>(null);

  const calculateCC = () => {
    const b = parseFloat(bore);
    const s = parseFloat(stroke);
    const c = parseInt(cylinders);

    if (isNaN(b) || isNaN(s) || isNaN(c) || b <= 0 || s <= 0 || c <= 0) {
      alert("Masukkan nilai yang valid");
      return;
    }

    // Rumus: CC = (π/4) × bore² × stroke × jumlah silinder
    // bore dan stroke dalam mm
    const singleCylinderCC = (Math.PI / 4) * Math.pow(b, 2) * s / 1000;
    const totalCC = singleCylinderCC * c;
    const totalLiter = totalCC / 1000;
    const totalCubicInch = totalCC * 0.0610237;

    setResult({
      cc: totalCC,
      liter: totalLiter,
      cubicInch: totalCubicInch,
    });
  };

  const reset = () => {
    setBore("");
    setStroke("");
    setCylinders("4");
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      {/* Info */}
      <div className="mb-8 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border border-orange-200 dark:border-orange-800">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Wrench className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-2">
              Kalkulator CC Mesin - TKR
            </h3>
            <p className="text-sm text-orange-800 dark:text-orange-200">
              Menghitung kapasitas silinder mesin dalam satuan CC (cubic centimeter).
              Rumus: CC = (π/4) × bore² × stroke × jumlah silinder
            </p>
          </div>
        </div>
      </div>

      {/* Calculator */}
      <div className="card-elevated p-8 mb-8">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
          <Calculator className="w-8 h-8 text-orange-600" />
          Hitung CC Mesin
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Bore */}
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              Bore (Diameter Silinder) - mm
            </label>
            <input
              type="number"
              value={bore}
              onChange={(e) => setBore(e.target.value)}
              placeholder="Contoh: 86"
              className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <p className="text-xs text-slate-500 mt-1">Diameter piston dalam milimeter</p>
          </div>

          {/* Stroke */}
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              Stroke (Langkah Piston) - mm
            </label>
            <input
              type="number"
              value={stroke}
              onChange={(e) => setStroke(e.target.value)}
              placeholder="Contoh: 86"
              className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <p className="text-xs text-slate-500 mt-1">Panjang langkah piston dalam milimeter</p>
          </div>

          {/* Cylinders */}
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              Jumlah Silinder
            </label>
            <select
              value={cylinders}
              onChange={(e) => setCylinders(e.target.value)}
              className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="1">1 Silinder</option>
              <option value="2">2 Silinder</option>
              <option value="3">3 Silinder</option>
              <option value="4">4 Silinder</option>
              <option value="5">5 Silinder</option>
              <option value="6">6 Silinder</option>
              <option value="8">8 Silinder</option>
              <option value="10">10 Silinder</option>
              <option value="12">12 Silinder</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={calculateCC}
            className="flex-1 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            Hitung CC
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
        <div className="card-elevated p-8 bg-gradient-to-br from-orange-500 to-red-600 text-white">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Info className="w-6 h-6" />
            Hasil Perhitungan
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-6 rounded-xl">
              <div className="text-sm opacity-80 mb-1">Kapasitas (CC)</div>
              <div className="text-3xl font-black">{result.cc.toFixed(2)}</div>
              <div className="text-sm opacity-80">cm³</div>
            </div>

            <div className="bg-white/20 p-6 rounded-xl">
              <div className="text-sm opacity-80 mb-1">Kapasitas (Liter)</div>
              <div className="text-3xl font-black">{result.liter.toFixed(2)}</div>
              <div className="text-sm opacity-80">L</div>
            </div>

            <div className="bg-white/20 p-6 rounded-xl">
              <div className="text-sm opacity-80 mb-1">Kapasitas (cu in)</div>
              <div className="text-3xl font-black">{result.cubicInch.toFixed(2)}</div>
              <div className="text-sm opacity-80">in³</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/10 rounded-xl">
            <p className="text-sm">
              <strong>Ringkasan:</strong> Mesin dengan bore {bore}mm, stroke {stroke}mm, dan {cylinders} silinder
              memiliki kapasitas total <strong>{result.cc.toFixed(2)} CC</strong> atau <strong>{result.liter.toFixed(2)} Liter</strong>.
            </p>
          </div>
        </div>
      )}

      {/* Examples */}
      <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl">
        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Contoh Mesin Populer:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl">
            <div className="font-bold text-slate-900 dark:text-white">Toyota Kijang 7K (1.8L)</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Bore: 79mm | Stroke: 91.2mm | 4 Silinder | 1,781 CC</div>
          </div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl">
            <div className="font-bold text-slate-900 dark:text-white">Honda VTEC (2.0L)</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Bore: 86mm | Stroke: 86mm | 4 Silinder | 1,998 CC</div>
          </div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl">
            <div className="font-bold text-slate-900 dark:text-white">Mitsubishi Lancer (1.5L)</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Bore: 75.5mm | Stroke: 84mm | 4 Silinder | 1,499 CC</div>
          </div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl">
            <div className="font-bold text-slate-900 dark:text-white">Toyota Vios (1.5L)</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Bore: 79mm | Stroke: 77.4mm | 4 Silinder | 1,497 CC</div>
          </div>
        </div>
      </div>
    </div>
  );
}
