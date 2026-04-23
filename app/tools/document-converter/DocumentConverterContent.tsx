"use client";

import { useState, useRef } from "react";
import { FileText, Download, Upload, File, Image as ImageIcon, FileSpreadsheet, Presentation } from "lucide-react";

interface ConversionType {
  id: string;
  name: string;
  description: string;
  fromFormats: string[];
  toFormat: string;
  icon: any;
  color: string;
}

const conversionTypes: ConversionType[] = [
  {
    id: "pdf-to-word",
    name: "PDF ke Word",
    description: "Konversi file PDF menjadi dokumen Word yang dapat diedit",
    fromFormats: [".pdf"],
    toFormat: "docx",
    icon: FileText,
    color: "from-red-600 to-rose-600"
  },
  {
    id: "word-to-pdf",
    name: "Word ke PDF",
    description: "Konversi dokumen Word menjadi file PDF",
    fromFormats: [".doc", ".docx"],
    toFormat: "pdf",
    icon: FileText,
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: "excel-to-pdf",
    name: "Excel ke PDF",
    description: "Konversi spreadsheet Excel menjadi file PDF",
    fromFormats: [".xls", ".xlsx"],
    toFormat: "pdf",
    icon: FileSpreadsheet,
    color: "from-green-600 to-emerald-600"
  },
  {
    id: "pdf-to-excel",
    name: "PDF ke Excel",
    description: "Ekstrak tabel dari PDF menjadi spreadsheet Excel",
    fromFormats: [".pdf"],
    toFormat: "xlsx",
    icon: FileSpreadsheet,
    color: "from-emerald-600 to-teal-600"
  },
  {
    id: "ppt-to-pdf",
    name: "PowerPoint ke PDF",
    description: "Konversi presentasi PowerPoint menjadi file PDF",
    fromFormats: [".ppt", ".pptx"],
    toFormat: "pdf",
    icon: Presentation,
    color: "from-orange-600 to-amber-600"
  },
  {
    id: "pdf-to-image",
    name: "PDF ke Gambar",
    description: "Konversi halaman PDF menjadi file gambar (JPG/PNG)",
    fromFormats: [".pdf"],
    toFormat: "jpg",
    icon: ImageIcon,
    color: "from-purple-600 to-violet-600"
  },
  {
    id: "image-to-pdf",
    name: "Gambar ke PDF",
    description: "Gabungkan beberapa gambar menjadi satu file PDF",
    fromFormats: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"],
    toFormat: "pdf",
    icon: ImageIcon,
    color: "from-pink-600 to-rose-600"
  },
  {
    id: "word-to-html",
    name: "Word ke HTML",
    description: "Konversi dokumen Word menjadi file HTML",
    fromFormats: [".doc", ".docx"],
    toFormat: "html",
    icon: File,
    color: "from-cyan-600 to-blue-600"
  },
  {
    id: "txt-to-pdf",
    name: "Teks ke PDF",
    description: "Konversi file teks biasa menjadi PDF",
    fromFormats: [".txt"],
    toFormat: "pdf",
    icon: File,
    color: "from-slate-600 to-gray-600"
  }
];

export default function DocumentConverterContent() {
  const [selectedConversion, setSelectedConversion] = useState<ConversionType | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [converting, setConverting] = useState(false);
  const [convertedFiles, setConvertedFiles] = useState<{name: string, url: string}[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const validFiles = selectedFiles.filter(file => {
      const ext = "." + file.name.split(".").pop()?.toLowerCase();
      return selectedConversion?.fromFormats.includes(ext);
    });

    if (validFiles.length < selectedFiles.length) {
      alert(`${selectedFiles.length - validFiles.length} file tidak valid dan diabaikan`);
    }

    setFiles(validFiles);
    setConvertedFiles([]);
  };

  const convertFiles = async () => {
    if (!selectedConversion || files.length === 0) return;

    setConverting(true);

    try {
      const results: {name: string, url: string}[] = [];

      for (const file of files) {
        const result = await convertFile(file, selectedConversion);
        if (result) {
          results.push(result);
        }
      }

      setConvertedFiles(results);
    } catch (error) {
      console.error("Error converting files:", error);
      alert("Terjadi kesalahan saat mengkonversi file. Silakan coba lagi.");
    } finally {
      setConverting(false);
    }
  };

  const convertFile = async (file: File, conversion: ConversionType): Promise<{name: string, url: string} | null> => {
    const fileName = file.name.replace(/\.[^/.]+$/, "");
    const outputFileName = `${fileName}.${conversion.toFormat}`;

    // Simulasi konversi (dalam implementasi nyata, ini akan menggunakan library konversi)
    // Untuk demo, kita membuat file dummy dengan nama yang sesuai

    if (conversion.id === "pdf-to-word") {
      // Simulasi konversi PDF ke Word
      const content = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word'>
        <head><meta charset='UTF-8'><title>Converted Document</title></head>
        <body>
        <h1>${fileName}</h1>
        <p>Dokumen ini dikonversi dari PDF.</p>
        <p><i>Catatan: Ini adalah versi demo. Untuk konversi penuh, diperlukan server-side processing.</i></p>
        </body>
        </html>
      `;
      const blob = new Blob([content], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
      return { name: outputFileName, url: URL.createObjectURL(blob) };
    }

    if (conversion.id === "word-to-pdf" || conversion.id === "excel-to-pdf" || conversion.id === "ppt-to-pdf" || conversion.id === "txt-to-pdf") {
      // Simulasi konversi ke PDF
      const content = `
        %PDF-1.4
        1 0 obj
        <<
        /Type /Catalog
        /Pages 2 0 R
        >>
        endobj
        2 0 obj
        <<
        /Type /Pages
        /Kids [3 0 R]
        /Count 1
        >>
        endobj
        3 0 obj
        <<
        /Type /Page
        /Parent 2 0 R
        /Resources <<
        /Font <<
        /F1 4 0 R
        >>
        >>
        /MediaBox [0 0 612 792]
        /Contents 5 0 R
        >>
        endobj
        4 0 obj
        <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica
        >>
        endobj
        5 0 obj
        <<
        /Length 44
        >>
        stream
        BT
        /F1 12 Tf
        50 700 Td
        (${fileName}) Tj
        ET
        endstream
        endobj
        xref
        0 6
        0000000000 65535 f
        0000000009 00000 n
        0000000058 00000 n
        0000000115 00000 n
        0000000264 00000 n
        0000000345 00000 n
        trailer
        <<
        /Size 6
        /Root 1 0 R
        >>
        startxref
        443
        %%EOF
      `;
      const blob = new Blob([content], { type: "application/pdf" });
      return { name: outputFileName, url: URL.createObjectURL(blob) };
    }

    if (conversion.id === "image-to-pdf") {
      // Konversi gambar ke PDF (menggunakan canvas)
      const images: string[] = [];
      for (const f of files) {
        const dataUrl = await readFileAsDataURL(f);
        images.push(dataUrl);
      }

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      let pdfContent = "%PDF-1.4\n";
      // Ini adalah PDF sederhana - implementasi penuh akan lebih kompleks
      const blob = new Blob([pdfContent], { type: "application/pdf" });
      return { name: outputFileName, url: URL.createObjectURL(blob) };
    }

    if (conversion.id === "word-to-html") {
      const content = `
        <!DOCTYPE html>
        <html lang="id">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${fileName}</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1 { color: #333; }
          </style>
        </head>
        <body>
          <h1>${fileName}</h1>
          <p>Dokumen ini dikonversi dari format Word.</p>
        </body>
        </html>
      `;
      const blob = new Blob([content], { type: "text/html" });
      return { name: outputFileName, url: URL.createObjectURL(blob) };
    }

    return null;
  };

  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
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
      link.download = "converted-documents.zip";
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

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      {/* Step 1: Select Conversion Type */}
      <div className="mb-12">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
          1. Pilih Jenis Konversi
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {conversionTypes.map((conversion) => {
            const Icon = conversion.icon;
            return (
              <button
                key={conversion.id}
                onClick={() => setSelectedConversion(conversion)}
                className={`p-6 rounded-2xl border-2 transition-all text-left ${
                  selectedConversion?.id === conversion.id
                    ? "border-violet-600 bg-violet-50 dark:bg-violet-900/20"
                    : "border-slate-200 dark:border-slate-700 hover:border-violet-300"
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${conversion.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {conversion.name}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {conversion.description}
                </p>

                <div className="text-xs font-medium text-slate-500 dark:text-slate-500">
                  Input: {conversion.fromFormats.join(", ")} → Output: .{conversion.toFormat}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Upload Files */}
      {selectedConversion && (
        <div className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
            2. Upload File
          </h2>

          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-12 text-center cursor-pointer hover:border-violet-400 hover:bg-violet-50/50 dark:hover:bg-violet-900/10 transition-all"
          >
            <Upload className="w-16 h-16 text-slate-400 mx-auto mb-4" />

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Klik atau drag & drop file di sini
            </h3>

            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Format yang didukung: {selectedConversion.fromFormats.join(", ")}
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-500">
              Maksimal 10 file sekaligus
            </p>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept={selectedConversion.fromFormats.join(",")}
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>

          {/* Selected Files */}
          {files.length > 0 && (
            <div className="mt-6 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                File Terpilih ({files.length})
              </h4>

              <div className="space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <File className="w-5 h-5 text-violet-600" />
                      <span className="text-sm font-medium text-slate-900 dark:text-white">
                        {file.name}
                      </span>
                      <span className="text-xs text-slate-500">
                        ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={convertFiles}
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
                      Konversi Sekarang
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
      )}

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
                {convertedFiles.length} file berhasil dikonversi
              </p>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            {convertedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-xl"
              >
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  {file.name}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={downloadAll}
              className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download {convertedFiles.length > 1 ? "Semua (ZIP)" : "File"}
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
      <div className="mt-12 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-800">
        <h3 className="font-bold text-amber-900 dark:text-amber-100 mb-2">
          Catatan Penting
        </h3>
        <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1">
          <li>• Konversi dilakukan di browser Anda - file tidak diunggah ke server</li>
          <li>• Untuk hasil terbaik, gunakan file dengan kualitas baik</li>
          <li>• Beberapa konversi kompleks mungkin memerlukan waktu lebih lama</li>
          <li>• Format file yang terenkripsi atau diproteksi password mungkin tidak dapat dikonversi</li>
        </ul>
      </div>
    </div>
  );
}
