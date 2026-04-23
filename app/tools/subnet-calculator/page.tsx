import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SubnetCalculatorContent from "./SubnetCalculatorContent";

export const metadata: Metadata = {
  title: "Kalkulator Subnet | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Hitung subnet mask, IP address range, dan network untuk TKJ",
  keywords: ["kalkulator subnet", "tkj", "subnet mask", "ip address", "networking", "smk"],
};

export default function SubnetCalculatorPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-slate-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Tools
          </Link>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Kalkulator Subnet
          </h1>

          <p className="text-xl text-blue-100 max-w-2xl">
            Hitung subnet mask, network address, broadcast, dan IP range untuk TKJ
          </p>
        </div>
      </div>

      <div className="section-spacious bg-white dark:bg-slate-950">
        <SubnetCalculatorContent />
      </div>
    </div>
  );
}
