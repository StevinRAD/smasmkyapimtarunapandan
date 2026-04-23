import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ImageConverterContent from "./ImageConverterContent";

export const metadata: Metadata = {
  title: "Konversi Gambar | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Konversi gambar antar format PNG, JPG, WebP, GIF, BMP dan lainnya dengan mudah",
  keywords: ["konversi gambar", "png to jpg", "jpg to png", "webp converter", "image converter"],
};

export default function ImageConverterPage() {
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
            Konversi Gambar
          </h1>

          <p className="text-xl text-violet-100 max-w-2xl">
            Konversi gambar antar format dengan mudah - PNG, JPG, WebP, GIF, BMP, dan lainnya
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="section-spacious bg-white dark:bg-slate-950">
        <ImageConverterContent />
      </div>
    </div>
  );
}
