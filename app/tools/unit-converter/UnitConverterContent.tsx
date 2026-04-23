"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightLeft, Ruler, Weight, Thermometer, Clock, Square } from "lucide-react";

type ConversionType = "length" | "weight" | "temperature" | "time" | "area";

interface Unit {
  name: string;
  symbol: string;
  factor?: number;
  offset?: number;
}

const units: Record<ConversionType, Unit[]> = {
  length: [
    { name: "Kilometer", symbol: "km", factor: 1000 },
    { name: "Meter", symbol: "m", factor: 1 },
    { name: "Centimeter", symbol: "cm", factor: 0.01 },
    { name: "Millimeter", symbol: "mm", factor: 0.001 },
    { name: "Mile", symbol: "mi", factor: 1609.34 },
    { name: "Yard", symbol: "yd", factor: 0.9144 },
    { name: "Foot", symbol: "ft", factor: 0.3048 },
    { name: "Inch", symbol: "in", factor: 0.0254 },
  ],
  weight: [
    { name: "Kilogram", symbol: "kg", factor: 1 },
    { name: "Gram", symbol: "g", factor: 0.001 },
    { name: "Milligram", symbol: "mg", factor: 0.000001 },
    { name: "Ton", symbol: "t", factor: 1000 },
    { name: "Pound", symbol: "lb", factor: 0.453592 },
    { name: "Ounce", symbol: "oz", factor: 0.0283495 },
  ],
  temperature: [
    { name: "Celsius", symbol: "°C", factor: 1, offset: 0 },
    { name: "Fahrenheit", symbol: "°F", factor: 1.8, offset: 32 },
    { name: "Kelvin", symbol: "K", factor: 1, offset: 273.15 },
  ],
  time: [
    { name: "Year", symbol: "year", factor: 31536000 },
    { name: "Week", symbol: "week", factor: 604800 },
    { name: "Day", symbol: "day", factor: 86400 },
    { name: "Hour", symbol: "hr", factor: 3600 },
    { name: "Minute", symbol: "min", factor: 60 },
    { name: "Second", symbol: "sec", factor: 1 },
  ],
  area: [
    { name: "Square Kilometer", symbol: "km²", factor: 1000000 },
    { name: "Hectare", symbol: "ha", factor: 10000 },
    { name: "Are", symbol: "a", factor: 100 },
    { name: "Square Meter", symbol: "m²", factor: 1 },
    { name: "Square Centimeter", symbol: "cm²", factor: 0.0001 },
    { name: "Acre", symbol: "ac", factor: 4046.86 },
  ],
};

const typeIcons: Record<ConversionType, React.ElementType> = {
  length: Ruler,
  weight: Weight,
  temperature: Thermometer,
  time: Clock,
  area: Square,
};

export default function UnitConverterContent() {
  const [conversionType, setConversionType] = useState<ConversionType>("length");
  const [fromUnit, setFromUnit] = useState(0);
  const [fromUnitIndex, setFromUnitIndex] = useState(0);
  const [toUnitIndex, setToUnitIndex] = useState(1);

  const currentUnits = units[conversionType];
  const Icon = typeIcons[conversionType];

  const convert = (value: number, fromIndex: number, toIndex: number) => {
    const from = currentUnits[fromIndex];
    const to = currentUnits[toIndex];

    if (conversionType === "temperature") {
      let celsius: number;
      if (from.symbol === "°C") {
        celsius = value;
      } else if (from.symbol === "°F") {
        celsius = (value - 32) / 1.8;
      } else {
        celsius = value - 273.15;
      }

      if (to.symbol === "°C") {
        return celsius;
      } else if (to.symbol === "°F") {
        return celsius * 1.8 + 32;
      } else {
        return celsius + 273.15;
      }
    }

    const baseValue = value * (from.factor || 1);
    return baseValue / (to.factor || 1);
  };

  const result = fromUnit === 0 ? 0 : convert(fromUnit, fromUnitIndex, toUnitIndex);

  const swapUnits = () => {
    setFromUnitIndex(toUnitIndex);
    setToUnitIndex(fromUnitIndex);
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 via-blue-800 to-slate-900 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <ArrowRightLeft className="w-5 h-5 mr-3" />
            Konverter
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Unit Converter
          </h1>

          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Konversi berbagai satuan dengan cepat dan akurat
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
            className="mb-8"
          >
            <div className="grid grid-cols-5 gap-2">
              {(Object.keys(units) as ConversionType[]).map((type) => {
                const TypeIcon = typeIcons[type];
                return (
                  <button
                    key={type}
                    onClick={() => {
                      setConversionType(type);
                      setFromUnitIndex(0);
                      setToUnitIndex(1);
                      setFromUnit(0);
                    }}
                    className={`flex flex-col items-center p-3 rounded-xl transition-all ${
                      conversionType === type
                        ? "bg-cyan-600 text-white shadow-lg"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    <TypeIcon className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-bold uppercase">{type}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Converter Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-elevated p-6 md:p-8"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6 text-cyan-600" />
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              {/* From Unit */}
              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                  Dari
                </label>
                <select
                  value={fromUnitIndex}
                  onChange={(e) => setFromUnitIndex(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500"
                >
                  {currentUnits.map((unit, index) => (
                    <option key={index} value={index}>
                      {unit.name} ({unit.symbol})
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  value={fromUnit}
                  onChange={(e) => setFromUnit(Number(e.target.value))}
                  placeholder="0"
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-2xl font-black text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 text-center"
                />
              </div>

              {/* Swap Button */}
              <div className="flex justify-center py-8">
                <button
                  onClick={swapUnits}
                  className="p-3 bg-cyan-600 text-white rounded-xl hover:bg-cyan-700 transition-colors"
                >
                  <ArrowRightLeft className="w-6 h-6" />
                </button>
              </div>

              {/* To Unit */}
              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                  Ke
                </label>
                <select
                  value={toUnitIndex}
                  onChange={(e) => setToUnitIndex(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500"
                >
                  {currentUnits.map((unit, index) => (
                    <option key={index} value={index}>
                      {unit.name} ({unit.symbol})
                    </option>
                  ))}
                </select>
                <div className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-2xl font-black text-white text-center">
                  {result.toLocaleString("id-ID", { maximumFractionDigits: 6 })}
                </div>
              </div>
            </div>

            {/* Formula Display */}
            <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {fromUnit.toLocaleString("id-ID")} {currentUnits[fromUnitIndex].symbol} ={" "}
                <span className="font-bold text-cyan-600">
                  {result.toLocaleString("id-ID", { maximumFractionDigits: 6 })} {currentUnits[toUnitIndex].symbol}
                </span>
              </p>
            </div>
          </motion.div>

          {/* Quick Reference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 card-elevated p-6"
          >
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Referensi Cepat</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {conversionType === "length" && (
                <>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">1 km</span> = 1000 m
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">1 m</span> = 100 cm
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">1 inch</span> = 2.54 cm
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">1 foot</span> = 12 inch
                  </div>
                </>
              )}
              {conversionType === "weight" && (
                <>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">1 kg</span> = 1000 g
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">1 ton</span> = 1000 kg
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">1 lb</span> = 0.45 kg
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">1 oz</span> = 28.35 g
                  </div>
                </>
              )}
              {conversionType === "temperature" && (
                <>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">0°C</span> = 32°F = 273.15K
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">100°C</span> = 212°F
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg col-span-2">
                    <span className="font-bold">Rumus C ke F:</span> (°C × 9/5) + 32
                  </div>
                </>
              )}
              {conversionType === "time" && (
                <>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">1 hour</span> = 60 min
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">1 day</span> = 24 hours
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">1 week</span> = 7 days
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">1 year</span> = 365 days
                  </div>
                </>
              )}
              {conversionType === "area" && (
                <>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">1 ha</span> = 10,000 m²
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">1 are</span> = 100 m²
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">1 acre</span> = 4046.86 m²
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-bold">1 km²</span> = 100 ha
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
