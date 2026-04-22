"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Search, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ekstrakurikulerImages = [
  { src: "/galeri_nav/pramuka.jpg", alt: "Kegiatan Pramuka", title: "Pramuka", description: "Kegiatan kepramukaan" },
  { src: "/galeri_nav/paskibra.jpg", alt: "Paskibra", title: "Paskibra", description: "Latihan baris-berbaris" },
  { src: "/galeri_nav/pmr.jpg", alt: "PMR", title: "PMR", description: "Latihan pertolongan pertama" },
  { src: "/galeri_nav/basket.jpg", alt: "Tim Basket", title: "Basket", description: "Tim basket sekolah" },
  { src: "/galeri_nav/futsal.jpg", alt: "Tim Futsal", title: "Futsal", description: "Tim futsal sekolah" },
  { src: "/galeri_nav/tari.jpg", alt: "Tari Tradisional", title: "Seni Tari", description: "Ekstrakurikuler tari" },
  { src: "/galeri_nav/paduan-suara.jpg", alt: "Paduan Suara", title: "Paduan Suara", description: "Ekstrakurikuler musik" },
  { src: "/galeri_nav/rohis.jpg", alt: "Rohis", title: "Rohis", description: "Kegiatan keagamaan" }
];

export default function EkstrakurikulerContent() {
  const [previewImage, setPreviewImage] = useState<any>(null);

  const openPreview = (image: any) => {
    setPreviewImage(image);
    document.body.style.overflow = "hidden";
  };

  const closePreview = () => {
    setPreviewImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="min-h-screen bg-transparent">
      <section className="section-standard bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link href="/galeri" className="inline-flex items-center text-purple-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Galeri
          </Link>

          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black">Ekstrakurikuler</h1>
              <p className="text-purple-200">Kegiatan pengembangan bakat dan minat siswa</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Ekstrakurikuler
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
              8 Foto Ekstrakurikuler
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ekstrakurikulerImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openPreview(image)}
              >
                <div className="card-elevated overflow-hidden">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      fill
                      src={image.src}
                      alt={image.alt}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm p-4 rounded-full">
                        <Search className="w-6 h-6 text-slate-900" />
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                        <p className="text-purple-200 text-sm">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={closePreview}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl max-h-screen flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closePreview}
                className="absolute top-0 right-0 z-10 flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full max-h-[80vh] flex items-center justify-center">
                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden">
                  <Image
                    fill
                    src={previewImage.src}
                    alt={previewImage.alt}
                    className="object-contain bg-slate-900/50"
                  />
                </div>
              </div>

              <div className="text-center mt-6">
                <h3 className="text-2xl md:text-3xl font-black text-white">{previewImage.title}</h3>
                <p className="text-purple-200 mt-2 text-sm">{previewImage.description}</p>
                <p className="text-slate-400 mt-4 text-sm">Klik di mana saja untuk menutup</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
