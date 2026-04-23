"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, QrCode, Link as LinkIcon, Type, Mail, Phone, Wifi, Copy, Check } from "lucide-react";
import QRCodeLib from "qrcode";

type QRType = "url" | "text" | "email" | "phone" | "wifi";

export default function QRCodeContent() {
  const [qrType, setQrType] = useState<QRType>("url");
  const [inputData, setInputData] = useState({
    url: "",
    text: "",
    email: "",
    phone: "",
    wifi: { ssid: "", password: "", encryption: "WPA" },
  });
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQRCode = async () => {
    let data = "";

    switch (qrType) {
      case "url":
        data = inputData.url;
        break;
      case "text":
        data = inputData.text;
        break;
      case "email":
        data = `mailto:${inputData.email}`;
        break;
      case "phone":
        data = `tel:${inputData.phone}`;
        break;
      case "wifi":
        data = `WIFI:T:${inputData.wifi.encryption};S:${inputData.wifi.ssid};P:${inputData.wifi.password};;`;
        break;
    }

    if (!data) return;

    try {
      const url = await QRCodeLib.toDataURL(data, {
        width: 400,
        margin: 2,
        color: {
          dark: "#1e293b",
          light: "#ffffff",
        },
      });
      setQrCodeUrl(url);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const downloadQRCode = () => {
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = `qrcode-${qrType}-${Date.now()}.png`;
    link.click();
  };

  const copyToClipboard = async () => {
    if (!qrCodeUrl) return;

    try {
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  useEffect(() => {
    if (inputData.url || inputData.text || inputData.email || inputData.phone ||
        (inputData.wifi.ssid && inputData.wifi.password)) {
      generateQRCode();
    }
  }, [qrType, inputData]);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-800 to-slate-900 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <QrCode className="w-5 h-5 mr-3" />
            Generator
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            QR Code Generator
          </h1>

          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            Buat QR code untuk berbagai keperluan secara gratis
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-elevated p-6 md:p-8"
          >
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
              Jenis QR Code
            </h2>

            {/* Type Selector */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
              {[
                { type: "url", icon: LinkIcon, label: "URL/Link" },
                { type: "text", icon: Type, label: "Teks" },
                { type: "email", icon: Mail, label: "Email" },
                { type: "phone", icon: Phone, label: "Telepon" },
                { type: "wifi", icon: Wifi, label: "WiFi" },
              ].map((item) => (
                <button
                  key={item.type}
                  onClick={() => setQrType(item.type as QRType)}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                    qrType === item.type
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  <item.icon className="w-6 h-6 mb-2" />
                  <span className="text-xs font-bold uppercase">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4">
                  Masukkan Data
                </h3>

                {qrType === "url" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                        URL / Link
                      </label>
                      <input
                        type="url"
                        value={inputData.url}
                        onChange={(e) => setInputData({ ...inputData, url: e.target.value })}
                        placeholder="https://example.com"
                        className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {qrType === "text" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Teks
                      </label>
                      <textarea
                        value={inputData.text}
                        onChange={(e) => setInputData({ ...inputData, text: e.target.value })}
                        placeholder="Masukkan teks yang ingin dijadikan QR code"
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                      />
                    </div>
                  </div>
                )}

                {qrType === "email" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Alamat Email
                      </label>
                      <input
                        type="email"
                        value={inputData.email}
                        onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                        placeholder="contoh@email.com"
                        className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {qrType === "phone" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        value={inputData.phone}
                        onChange={(e) => setInputData({ ...inputData, phone: e.target.value })}
                        placeholder="+628123456789"
                        className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {qrType === "wifi" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Nama Jaringan (SSID)
                      </label>
                      <input
                        type="text"
                        value={inputData.wifi.ssid}
                        onChange={(e) => setInputData({ ...inputData, wifi: { ...inputData.wifi, ssid: e.target.value } })}
                        placeholder="Nama WiFi"
                        className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Password
                      </label>
                      <input
                        type="text"
                        value={inputData.wifi.password}
                        onChange={(e) => setInputData({ ...inputData, wifi: { ...inputData.wifi, password: e.target.value } })}
                        placeholder="Password WiFi"
                        className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Jenis Enkripsi
                      </label>
                      <select
                        value={inputData.wifi.encryption}
                        onChange={(e) => setInputData({ ...inputData, wifi: { ...inputData.wifi, encryption: e.target.value } })}
                        className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="WPA">WPA/WPA2</option>
                        <option value="WEP">WEP</option>
                        <option value="nopass">Tidak Ada Password</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* QR Code Display */}
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4">
                  QR Code Result
                </h3>

                <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-8 flex items-center justify-center min-h-[300px]">
                  {qrCodeUrl ? (
                    <div className="text-center">
                      <img
                        src={qrCodeUrl}
                        alt="QR Code"
                        className="mx-auto mb-4 rounded-lg shadow-lg"
                      />
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={downloadQRCode}
                          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors text-sm"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </button>
                        <button
                          onClick={copyToClipboard}
                          className="inline-flex items-center px-4 py-2 bg-slate-600 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors text-sm"
                        >
                          {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                          {copied ? "Disalin!" : "Salin"}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-slate-500">
                      <QrCode className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Masukkan data untuk generate QR code</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
            Cara Menggunakan QR Code
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-indigo-600">1</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Pilih Jenis</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Pilih jenis QR code yang ingin dibuat</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-purple-600">2</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Masukkan Data</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Isi data sesuai dengan jenis yang dipilih</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-pink-600">3</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Download</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">QR code akan otomatis dibuat, siap didownload</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
