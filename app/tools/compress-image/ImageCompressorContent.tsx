"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Upload, Image as ImageIcon, Download, X, CheckCircle, AlertCircle, Settings, Zap, Folder, FolderOpen, Loader2 } from "lucide-react";
import Link from "next/link";

interface CompressedImage {
  original: string;
  compressed: string;
  originalSize: number;
  compressedSize: number;
  originalWidth: number;
  originalHeight: number;
  compressedWidth: number;
  compressedHeight: number;
  quality: number;
  scale: number;
  fileName: string;
}

export default function ImageCompressorContent() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<CompressedImage[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [quality, setQuality] = useState(80);
  const [maxWidth, setMaxWidth] = useState(1920);
  const [scale, setScale] = useState(1);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  const calculateSavings = (original: number, compressed: number) => {
    const savings = ((original - compressed) / original) * 100;
    return savings.toFixed(1);
  };

  const compressImage = useCallback(
    (file: File, index: number = 0, total: number = 1): Promise<CompressedImage> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            if (!ctx) {
              reject(new Error("Failed to get canvas context"));
              return;
            }

            // Calculate new dimensions
            let newWidth = img.width;
            let newHeight = img.height;

            // Apply scale first
            newWidth = Math.round(newWidth * scale);
            newHeight = Math.round(newHeight * scale);

            // Then apply max width constraint
            if (newWidth > maxWidth) {
              const ratio = maxWidth / newWidth;
              newWidth = maxWidth;
              newHeight = Math.round(newHeight * ratio);
            }

            canvas.width = newWidth;
            canvas.height = newHeight;

            // Draw image on canvas
            ctx.drawImage(img, 0, 0, newWidth, newHeight);

            // Compress and get data URL
            canvas.toBlob(
              (blob) => {
                if (!blob) {
                  reject(new Error("Failed to compress image"));
                  return;
                }

                const compressed = new FileReader();
                compressed.onload = (e) => {
                  if (total > 1) {
                    setProgress({ current: index + 1, total });
                  }
                  resolve({
                    original: e.target?.result as string,
                    compressed: e.target?.result as string,
                    originalSize: file.size,
                    compressedSize: blob.size,
                    originalWidth: img.width,
                    originalHeight: img.height,
                    compressedWidth: newWidth,
                    compressedHeight: newHeight,
                    quality: quality / 100,
                    scale: scale,
                    fileName: file.name
                  });
                };
                compressed.readAsDataURL(blob);
              },
              "image/jpeg",
              quality / 100
            );
          };
          img.onerror = () => reject(new Error("Failed to load image"));
          img.src = e.target?.result as string;
        };
        reader.onerror = () => reject(new Error("Failed to read file"));
        reader.readAsDataURL(file);
      });
    },
    [quality, maxWidth, scale]
  );

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setIsProcessing(true);
    setProgress({ current: 0, total: files.length });

    try {
      const compressedImages = await Promise.all(
        files.map((file, index) => compressImage(file, index, files.length))
      );
      setImages((prev) => [...prev, ...compressedImages]);
    } catch (error) {
      console.error("Error compressing images:", error);
      alert("Gagal mengompres gambar. Silakan coba lagi.");
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleFolderSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));

    if (imageFiles.length === 0) {
      alert("Tidak ada gambar ditemukan dalam folder ini.");
      return;
    }

    setIsProcessing(true);
    setProgress({ current: 0, total: imageFiles.length });
    setImages([]);

    try {
      const compressedImages: CompressedImage[] = [];

      // Process images in batches to avoid overwhelming the browser
      const batchSize = 5;
      for (let i = 0; i < imageFiles.length; i += batchSize) {
        const batch = imageFiles.slice(i, i + batchSize);
        const batchResults = await Promise.all(
          batch.map((file, batchIndex) =>
            compressImage(file, i + batchIndex, imageFiles.length)
          )
        );
        compressedImages.push(...batchResults);

        // Update images state progressively
        setImages([...compressedImages]);
      }
    } catch (error) {
      console.error("Error compressing images:", error);
      alert("Gagal mengompres beberapa gambar. Silakan coba lagi.");
    } finally {
      setIsProcessing(false);
      setProgress({ current: 0, total: 0 });
      if (folderInputRef.current) {
        folderInputRef.current.value = "";
      }
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter(
      (file) => file.type.startsWith("image/")
    );

    if (files.length === 0) return;

    setIsProcessing(true);
    setProgress({ current: 0, total: files.length });

    try {
      const compressedImages = await Promise.all(
        files.map((file, index) => compressImage(file, index, files.length))
      );
      setImages((prev) => [...prev, ...compressedImages]);
    } catch (error) {
      console.error("Error compressing images:", error);
      alert("Gagal mengompres gambar. Silakan coba lagi.");
    } finally {
      setIsProcessing(false);
      setProgress({ current: 0, total: 0 });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const downloadImage = (image: CompressedImage, index: number) => {
    const link = document.createElement("a");
    link.href = image.compressed;
    link.download = `compressed-${image.fileName || `image-${index + 1}`}.jpg`;
    link.click();
  };

  const downloadAllImages = () => {
    images.forEach((image, index) => {
      setTimeout(() => downloadImage(image, index), index * 500);
    });
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    setImages([]);
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900 via-purple-800 to-slate-900 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <Zap className="w-5 h-5 mr-3" />
            Tools
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Kompres Gambar
          </h1>

          <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto leading-relaxed">
            Kecilkan ukuran gambar untuk folder sekaligus
          </p>
        </motion.div>
      </section>

      {/* Settings Section */}
      <section className="section-standard bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-elevated p-6 md:p-8"
          >
            <div className="flex items-center mb-6">
              <Settings className="w-6 h-6 text-violet-600 mr-3" />
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                Pengaturan Kompresi
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Quality Slider */}
              <div className="space-y-2">
                <label className="flex justify-between text-sm font-bold text-slate-900 dark:text-white">
                  <span>Kualitas</span>
                  <span className="text-violet-600">{quality}%</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
                />
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Semakin tinggi, semakin besar ukuran file
                </p>
              </div>

              {/* Max Width */}
              <div className="space-y-2">
                <label className="flex justify-between text-sm font-bold text-slate-900 dark:text-white">
                  <span>Lebar Maksimal</span>
                  <span className="text-violet-600">{maxWidth}px</span>
                </label>
                <select
                  value={maxWidth}
                  onChange={(e) => setMaxWidth(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                >
                  <option value={1920}>1920px (Full HD)</option>
                  <option value={1280}>1280px (HD)</option>
                  <option value={1024}>1024px</option>
                  <option value={800}>800px</option>
                  <option value={640}>640px</option>
                </select>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Lebar maksimal gambar hasil kompresi
                </p>
              </div>

              {/* Scale */}
              <div className="space-y-2">
                <label className="flex justify-between text-sm font-bold text-slate-900 dark:text-white">
                  <span>Skala</span>
                  <span className="text-violet-600">{(scale * 100).toFixed(0)}%</span>
                </label>
                <select
                  value={scale}
                  onChange={(e) => setScale(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                >
                  <option value={1}>100% (Original)</option>
                  <option value={0.75}>75%</option>
                  <option value={0.5}>50%</option>
                  <option value={0.25}>25%</option>
                </select>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Persentase dari ukuran asli
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Progress Bar */}
          {isProcessing && progress.total > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 card-elevated p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-slate-900 dark:text-white">
                  Memproses gambar...
                </span>
                <span className="text-sm text-violet-600">
                  {progress.current} / {progress.total}
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(progress.current / progress.total) * 100}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"
                />
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 text-center">
                {Math.round((progress.current / progress.total) * 100)}% selesai
              </p>
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Single File Upload */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="card-elevated p-8 text-center border-2 border-dashed border-violet-300 dark:border-violet-700 hover:border-violet-500 dark:hover:border-violet-500 transition-colors cursor-pointer h-full"
                onClick={() => !isProcessing && fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                  disabled={isProcessing}
                />
                <Upload className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
                  Upload Gambar Individual
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  Pilih satu atau beberapa gambar
                </p>
                <div className={`inline-flex items-center px-5 py-2.5 ${isProcessing ? 'bg-slate-400 cursor-not-allowed' : 'bg-violet-600 hover:bg-violet-700'} text-white font-bold rounded-xl transition-colors`}>
                  <ImageIcon className="w-4 h-4 mr-2" />
                  {isProcessing ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                  Pilih Gambar
                </div>
              </div>
            </motion.div>

            {/* Folder Upload */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-1"
            >
              <div
                className="card-elevated p-8 text-center border-2 border-dashed border-emerald-300 dark:border-emerald-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors cursor-pointer h-full"
                onClick={() => !isProcessing && folderInputRef.current?.click()}
              >
                <input
                  ref={folderInputRef}
                  type="file"
                  {...({ webkitdirectory: "", directory: "" } as any)}
                  multiple
                  onChange={handleFolderSelect}
                  className="hidden"
                  disabled={isProcessing}
                />
                <Folder className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
                  Upload Seluruh Folder
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  Kompres semua gambar dalam folder sekaligus
                </p>
                <div className={`inline-flex items-center px-5 py-2.5 ${isProcessing ? 'bg-slate-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'} text-white font-bold rounded-xl transition-colors`}>
                  <FolderOpen className="w-4 h-4 mr-2" />
                  {isProcessing ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                  Pilih Folder
                </div>
              </div>
            </motion.div>
          </div>

          {/* Info Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400">
              💡 <strong>Tip:</strong> Untuk folder dengan banyak gambar, proses mungkin memerlukan waktu beberapa menit. Browser akan tetap responsif.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      {images.length > 0 && (
        <section className="section-spacious bg-white dark:bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                  Hasil Kompresi ({images.length} gambar)
                </h2>
                <button
                  onClick={clearAll}
                  className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-bold rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                >
                  Hapus Semua
                </button>
              </div>

              {/* Stats Summary */}
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">Total Original:</span>{" "}
                    <span className="text-violet-600 font-bold">{formatFileSize(images.reduce((acc, img) => acc + img.originalSize, 0))}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">Total Kompresi:</span>{" "}
                    <span className="text-emerald-600 font-bold">{formatFileSize(images.reduce((acc, img) => acc + img.compressedSize, 0))}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">Total Hemat:</span>{" "}
                    <span className="text-green-600 font-bold">{formatFileSize(images.reduce((acc, img) => acc + img.originalSize, 0) - images.reduce((acc, img) => acc + img.compressedSize, 0))}</span>
                  </div>
                </div>
              </div>

              {/* Download All Button */}
              <div className="mb-6">
                <button
                  onClick={downloadAllImages}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all shadow-xl"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Semua
                </button>
              </div>
            </motion.div>

            {/* Image Cards */}
            <div className="space-y-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="card-elevated p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center flex-1 min-w-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-slate-900 dark:text-white truncate">
                          {image.fileName || `Gambar #${index + 1}`}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {image.originalWidth} × {image.originalHeight} → {image.compressedWidth} × {image.compressedHeight}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeImage(index)}
                      className="p-2 text-slate-400 hover:text-red-500 transition-colors flex-shrink-0"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {/* Original */}
                    <div>
                      <p className="text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
                        ORIGINAL
                      </p>
                      <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                        <img
                          src={image.original}
                          alt="Original"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white mt-2">
                        {formatFileSize(image.originalSize)}
                      </p>
                    </div>

                    {/* Compressed */}
                    <div>
                      <p className="text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
                        KOMPRESI
                      </p>
                      <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                        <img
                          src={image.compressed}
                          alt="Compressed"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-sm font-bold text-violet-600 mt-2">
                        {formatFileSize(image.compressedSize)}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-bold text-green-800 dark:text-green-200">
                        Hemat {calculateSavings(image.originalSize, image.compressedSize)}%
                      </span>
                    </div>
                    <button
                      onClick={() => downloadImage(image, index)}
                      className="inline-flex items-center px-4 py-2 bg-violet-600 text-white font-bold rounded-lg hover:bg-violet-700 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

      {/* Info Section */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-elevated p-6 bg-gradient-to-r from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 border border-blue-200 dark:border-blue-800"
          >
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  Tips Kompresi Gambar
                </h4>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• Untuk foto gunakan kualitas 70-80% untuk hasil terbaik</li>
                  <li>• Untuk grafik/diagram gunakan kualitas 90-100%</li>
                  <li>• Lebar 1920px sudah cukup untuk tampilan web</li>
                  <li>• Format JPEG lebih kecil untuk foto, PNG untuk grafik</li>
                  <li>• Kompresi batch folder cocok untuk galeri website</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-standard bg-gradient-to-r from-violet-600 to-purple-700 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Butuh Tools Lainnya?
            </h2>
            <p className="text-violet-100 text-lg mb-10 max-w-2xl mx-auto">
              Jelajahi tools lain yang tersedia untuk membantu produktivitas Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/tools"
                className="inline-flex items-center px-10 py-5 bg-white text-violet-900 font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-violet-50 shadow-2xl"
              >
                Lihat Semua Tools
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
