import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PhysicsCalculatorContent from "./PhysicsCalculatorContent";

export const metadata: Metadata = {
  title: "Kalkulator Fisika | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Hitung rumus-rumus fisika SMA: kecepatan, percepatan, energi, gaya, dll",
  keywords: ["kalkulator fisika", "sma", "rumus fisika", "kecepatan", "energi", "gaya"],
};

export default function PhysicsCalculatorPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="bg-gradient-to-r from-emerald-900 via-teal-800 to-slate-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Tools
          </Link>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Kalkulator Fisika
          </h1>

          <p className="text-xl text-emerald-100 max-w-2xl">
            Hitung rumus-rumus fisika SMA dengan mudah
          </p>
        </div>
      </div>

      <div className="section-spacious bg-white dark:bg-slate-950">
        <PhysicsCalculatorContent />
      </div>
    </div>
  );
}
