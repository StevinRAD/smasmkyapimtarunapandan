import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DocumentConverterContent from "./DocumentConverterContent";

export const metadata: Metadata = {
  title: "Konversi Dokumen | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Konversi dokumen PDF, Word, Excel, PowerPoint dan format lainnya dengan mudah",
  keywords: ["konversi dokumen", "pdf to word", "word to pdf", "excel converter", "ppt converter"],
};

export default function DocumentConverterPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-900 via-purple-800 to-slate-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Tools
          </Link>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Konversi Dokumen
          </h1>

          <p className="text-xl text-violet-100 max-w-2xl">
            Konversi dokumen antar format dengan mudah - PDF, Word, Excel, PowerPoint, dan lainnya
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="section-spacious bg-white dark:bg-slate-950">
        <DocumentConverterContent />
      </div>
    </div>
  );
}
