import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ComputerBasicsContent from "./ComputerBasicsContent";

export const metadata: Metadata = {
  title: "Pengenalan Komputer | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Belajar pengenalan komputer dan komponen-komponennya untuk TKJ",
  keywords: ["pengenalan komputer", "tkj", "komponen komputer", "hardware", "smk"],
};

export default function ComputerBasicsPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="bg-gradient-to-r from-cyan-900 via-blue-800 to-slate-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Tools
          </Link>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Pengenalan Komputer
          </h1>

          <p className="text-xl text-cyan-100 max-w-2xl">
            Belajar dasar komputer dan komponen hardware untuk pembelajaran TKJ
          </p>
        </div>
      </div>

      <div className="section-spacious bg-white dark:bg-slate-950">
        <ComputerBasicsContent />
      </div>
    </div>
  );
}
