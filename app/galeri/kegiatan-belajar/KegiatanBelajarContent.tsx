"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Users, X, Search, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const kegiatanBelajarImages = [
  { src: "/galeri_nav/siswa-belajar.jpg", alt: "Siswa Belajar", title: "Belajar di Kelas", description: "Suasana kelas yang kondusif" },
  { src: "/galeri_nav/praktikum.jpg", alt: "Praktikum IPA", title: "Praktikum", description: "Siswa melakukan eksperimen" },
  { src: "/galeri_nav/diskusi.jpg", alt: "Diskusi Kelompok", title: "Diskusi Kelompok", description: "Siswa berdiskusi aktif" },
  { src: "/galeri_nav/presentasi.jpg", alt: "Presentasi Siswa", title: "Presentasi", description: "Siswa mempresentasikan tugas" },
  { src: "/galeri_nav/guru-mengajar.jpg", alt: "Guru Mengajar", title: "Guru Profesional", description: "Guru di kelas" },
  { src: "/galeri_nav/tugas-kelompok.jpg", alt: "Tugas Kelompok", title: "Kerja Kelompok", description: "Kolaborasi siswa" }
];

export default function KegiatanBelajarContent() {
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
      <section className="section-standard bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link href="/galeri" className="inline-flex items-center text-emerald-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Galeri
          </Link>

          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black">Kegiatan Belajar</h1>
              <p className="text-emerald-200">Suasana belajar yang kondusif dan interaktif</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              <Users className="w-4 h-4 mr-2" />
              Kegiatan Belajar
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
              6 Foto Kegiatan
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kegiatanBelajarImages.map((image, index) => (
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
                        <p className="text-emerald-200 text-sm">{image.description}</p>
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
                <p className="text-emerald-200 mt-2 text-sm">{previewImage.description}</p>
                <p className="text-slate-400 mt-4 text-sm">Klik di mana saja untuk menutup</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
