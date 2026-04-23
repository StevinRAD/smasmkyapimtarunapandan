import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import EngineCCContent from "./EngineCCContent";

export const metadata: Metadata = {
  title: "Kalkulator CC Mesin | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Hitung kapasitas silinder mesin (CC) dengan mudah untuk TKR",
  keywords: ["kalkulator cc mesin", "tkr", "mesin", "kapasitas silinder", "smk"],
};

export default function EngineCCPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="bg-gradient-to-r from-orange-900 via-red-800 to-slate-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Tools
          </Link>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Kalkulator CC Mesin
          </h1>

          <p className="text-xl text-orange-100 max-w-2xl">
            Hitung kapasitas silinder mesin (CC) untuk pembelajaran TKR
          </p>
        </div>
      </div>

      <div className="section-spacious bg-white dark:bg-slate-950">
        <EngineCCContent />
      </div>
    </div>
  );
}
