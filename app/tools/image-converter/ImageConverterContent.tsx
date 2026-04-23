"use client";

import { useState, useRef } from "react";
import { Image as ImageIcon, Download, Upload, FileImage, Settings } from "lucide-react";

interface ImageFormat {
  id: string;
  name: string;
  extension: string;
  mimeType: string;
  description: string;
  icon: string;
  supportsTransparency: boolean;
}

const imageFormats: ImageFormat[] = [
  {
    id: "png",
    name: "PNG",
    extension: "png",
    mimeType: "image/png",
    description: "Format dengan kualitas terbaik, mendukung transparansi",
    icon: "🖼️",
    supportsTransparency: true
  },
  {
    id: "jpg",
    name: "JPG",
    extension: "jpg",
    mimeType: "image/jpeg",
    description: "Format umum, ukuran file lebih kecil",
    icon: "📷",
    supportsTransparency: false
  },
  {
    id: "webp",
    name: "WebP",
    extension: "webp",
    mimeType: "image/webp",
    description: "Format modern, ukuran kecil dengan kualitas tinggi",
    icon: "⚡",
    supportsTransparency: true
  },
  {
    id: "gif",
    name: "GIF",
    extension: "gif",
    mimeType: "image/gif",
    description: "Format animasi, mendukung transparansi",
    icon: "🎞️",
    supportsTransparency: true
  },
  {
    id: "bmp",
    name: "BMP",
    extension: "bmp",
    mimeType: "image/bmp",
    description: "Format tidak terkompresi, kualitas original",
    icon: "📄",
    supportsTransparency: true
  },
  {
    id: "ico",
    name: "ICO",
    extension: "ico",
    mimeType: "image/x-icon",
    description: "Format icon untuk website",
    icon: "🔖",
    supportsTransparency: true
  }
];

export default function ImageConverterContent() {
  const [selectedFormat, setSelectedFormat] = useState<ImageFormat>(imageFormats[0]);
  const [quality, setQuality] = useState(90);
  const [files, setFiles] = useState<File[]>([]);
  const [converting, setConverting] = useState(false);
  const [convertedFiles, setConvertedFiles] = useState<{name: string, url: string, size: number}[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const supportedInputFormats = [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".webp", ".ico", ".tiff", ".tif"];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);

    // Filter only image files
    const imageFiles = selectedFiles.filter(file => {
      const ext = "." + file.name.split(".").pop()?.toLowerCase();
      return supportedInputFormats.includes(ext);
    });

    if (imageFiles.length < selectedFiles.length) {
      alert(`${selectedFiles.length - imageFiles.length} file bukan gambar dan diabaikan`);
    }

    setFiles(imageFiles);
    setConvertedFiles([]);
  };

  const convertImages = async () => {
    if (files.length === 0) return;

    setConverting(true);

    try {
      const results: {name: string, url: string, size: number}[] = [];

      for (const file of files) {
        const result = await convertImage(file, selectedFormat, quality);
        if (result) {
          results.push(result);
        }
      }

      setConvertedFiles(results);
    } catch (error) {
      console.error("Error converting images:", error);
      alert("Terjadi kesalahan saat mengkonversi gambar. Silakan coba lagi.");
    } finally {
      setConverting(false);
    }
  };

  const convertImage = (file: File, format: ImageFormat, qual: number): Promise<{name: string, url: string, size: number} | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();

        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;

          const ctx = canvas.getContext("2d");
          if (!ctx) {
            reject(new Error("Canvas context not available"));
            return;
          }

          // Fill white background for formats that don't support transparency
          if (!format.supportsTransparency) {
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }

          ctx.drawImage(img, 0, 0);

          const fileName = file.name.replace(/\.[^/.]+$/, "");
          const outputFileName = `${fileName}.${format.extension}`;

          canvas.toBlob(
            (blob) => {
              if (blob) {
                const url = URL.createObjectURL(blob);
                resolve({ name: outputFileName, url, size: blob.size });
              } else {
                resolve(null);
              }
            },
            format.mimeType,
            qual / 100
          );
        };

        img.onerror = () => reject(new Error("Failed to load image"));

        img.src = e.target?.result as string;
      };

      reader.onerror = () => reject(new Error("Failed to read file"));

      reader.readAsDataURL(file);
    });
  };

  const downloadAll = async () => {
    if (convertedFiles.length === 0) return;

    if (convertedFiles.length === 1) {
      // Download single file
      const link = document.createElement("a");
      link.href = convertedFiles[0].url;
      link.download = convertedFiles[0].name;
      link.click();
    } else {
      // Create zip for multiple files
      const zip = new JSZip();
      convertedFiles.forEach(file => {
        const response = fetch(file.url);
        const blobPromise = response.then(r => r.blob());
        zip.file(file.name, blobPromise);
      });

      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      const link = document.createElement("a");
      link.href = url;
      link.download = `converted-images-${selectedFormat.extension}.zip`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  const reset = () => {
    setFiles([]);
    setConvertedFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
    return (bytes / 1024 / 1024).toFixed(2) + " MB";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      {/* Step 1: Select Output Format */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            1. Pilih Format Output
          </h2>

          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
              showSettings
                ? "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            }`}
          >
            <Settings className="w-4 h-4" />
            Pengaturan
          </button>
        </div>

        {/* Quality Settings */}
        {showSettings && (
          <div className="mb-6 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Kualitas: {quality}%
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-violet-600"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>Ukuran lebih kecil</span>
              <span>Kualitas lebih baik</span>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {imageFormats.map((format) => (
            <button
              key={format.id}
              onClick={() => setSelectedFormat(format)}
              className={`p-6 rounded-2xl border-2 transition-all text-left ${
                selectedFormat.id === format.id
                  ? "border-violet-600 bg-violet-50 dark:bg-violet-900/20"
                  : "border-slate-200 dark:border-slate-700 hover:border-violet-300"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{format.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {format.name}
                  </h3>
                  <p className="text-sm font-medium text-violet-600">
                    .{format.extension}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                {format.description}
              </p>

              {format.supportsTransparency && (
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Mendukung transparansi
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Upload Images */}
      <div className="mb-12">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
          2. Upload Gambar
        </h2>

        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-12 text-center cursor-pointer hover:border-violet-400 hover:bg-violet-50/50 dark:hover:bg-violet-900/10 transition-all"
        >
          <ImageIcon className="w-16 h-16 text-slate-400 mx-auto mb-4" />

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Klik atau drag & drop gambar di sini
          </h3>

          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Format yang didukung: PNG, JPG, WebP, GIF, BMP, ICO, TIFF
          </p>

          <p className="text-sm text-slate-500 dark:text-slate-500">
            Maksimal 50 gambar sekaligus
          </p>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={supportedInputFormats.join(",")}
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>

        {/* Selected Images Preview */}
        {files.length > 0 && (
          <div className="mt-6 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">
              Gambar Terpilih ({files.length})
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
              {files.map((file, index) => (
                <div key={index} className="relative group">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                    <span className="text-white text-xs text-center px-2">
                      {file.name.slice(0, 20)}...
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={convertImages}
                disabled={converting}
                className="flex-1 py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {converting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Mengkonversi...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    Konversi ke .{selectedFormat.extension}
                  </>
                )}
              </button>

              <button
                onClick={reset}
                className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Step 3: Download Results */}
      {convertedFiles.length > 0 && (
        <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
              <Download className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Konversi Selesai!
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {convertedFiles.length} gambar berhasil dikonversi ke .{selectedFormat.extension}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
            {convertedFiles.map((file, index) => (
              <div key={index} className="relative group">
                <img
                  src={file.url}
                  alt={file.name}
                  className="w-full aspect-square object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 rounded-b-xl">
                  {formatFileSize(file.size)}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={downloadAll}
              className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download {convertedFiles.length > 1 ? "Semua (ZIP)" : "Gambar"}
            </button>

            <button
              onClick={reset}
              className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              Konversi Lagi
            </button>
          </div>
        </div>
      )}

      {/* Info Section */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
          <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
            <FileImage className="w-5 h-5" />
            Format Gambar
          </h3>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>• <strong>PNG:</strong> Kualitas terbaik, transparansi, ukuran lebih besar</li>
            <li>• <strong>JPG:</strong> Umum digunakan, ukuran kecil, tidak ada transparansi</li>
            <li>• <strong>WebP:</strong> Modern, ukuran kecil, kualitas tinggi</li>
            <li>• <strong>GIF:</strong> Animasi, 256 warna</li>
          </ul>
        </div>

        <div className="p-6 bg-violet-50 dark:bg-violet-900/20 rounded-2xl border border-violet-200 dark:border-violet-800">
          <h3 className="font-bold text-violet-900 dark:text-violet-100 mb-2">
            Catatan Penting
          </h3>
          <ul className="text-sm text-violet-800 dark:text-violet-200 space-y-1">
            <li>• Konversi dilakukan 100% di browser</li>
            <li>• Gambar tidak diunggah ke server manapun</li>
            <li>• Kualitas dapat diatur melalui menu Pengaturan</li>
            <li>• Mendukung konversi batch hingga 50 gambar</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
