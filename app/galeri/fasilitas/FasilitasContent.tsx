"use client";

import { motion, AnimatePresence } from "framer-motion";
import { School, X, Search, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const facilitiesImages = [
  { src: "/galeri_nav/sekolah-gedung.jpg", alt: "Gedung Sekolah YAPIM", title: "Gedung Sekolah", description: "Tampak depan gedung YAPIM yang megah" },
  { src: "/galeri_nav/kelas-aktif.jpg", alt: "Ruang Kelas", title: "Ruang Kelas", description: "Kelas nyaman dengan AC dan proyektor" },
  { src: "/galeri_nav/lab-komputer.jpg", alt: "Laboratorium Komputer", title: "Lab Komputer", description: "Fasilitas komputer modern" },
  { src: "/galeri_nav/perpustakaan.jpg", alt: "Perpustakaan Digital", title: "Perpustakaan", description: "Koleksi buku lengkap dan digital" },
  { src: "/galeri_nav/lapangan-olahraga.jpg", alt: "Lapangan Olahraga", title: "Lapangan Olahraga", description: "Sarana olahraga lengkap" },
  { src: "/galeri_nav/aula-serbaguna.jpg", alt: "Aula Serbaguna", title: "Aula Serbaguna", description: "Aula untuk acara penting" },
  { src: "/galeri_nav/musholla.jpg", alt: "Musholla", title: "Musholla", description: "Tempat ibadah yang nyaman" },
  { src: "/galeri_nav/kantin.jpg", alt: "Kantin Sehat", title: "Kantin", description: "Kantin dengan menu bergizi" },
  { src: "/galeri_nav/uks.jpg", alt: "Unit Kesehatan Sekolah", title: "UKS", description: "Unit kesehatan sekolah" }
];

export default function FasilitasContent() {
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
      {/* Breadcrumb & Header */}
      <section className="section-standard bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link href="/galeri" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Galeri
          </Link>

          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
              <School className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black">Fasilitas</h1>
              <p className="text-blue-200">Gedung, kelas, lab, dan fasilitas penunjang lainnya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              <School className="w-4 h-4 mr-2" />
              Fasilitas Sekolah
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
              9 Foto Fasilitas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilitiesImages.map((image, index) => (
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

                    {/* Preview Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm p-4 rounded-full">
                        <Search className="w-6 h-6 text-slate-900" />
                      </div>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                        <p className="text-blue-200 text-sm">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
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
              {/* Close Button */}
              <button
                onClick={closePreview}
                className="absolute top-0 right-0 z-10 flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Container */}
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

              {/* Title */}
              <div className="text-center mt-6">
                <h3 className="text-2xl md:text-3xl font-black text-white">{previewImage.title}</h3>
                <p className="text-blue-200 mt-2 text-sm">{previewImage.description}</p>
                <p className="text-slate-400 mt-4 text-sm">Klik di mana saja untuk menutup</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
