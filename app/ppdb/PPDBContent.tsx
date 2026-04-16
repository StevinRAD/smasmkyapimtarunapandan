"use client";

import { motion } from "framer-motion";
import { GraduationCap, FileText, Upload, CheckCircle2, AlertCircle, Calendar, Clock, Users, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const programs = [
  { id: "sma", name: "SMA", description: "MIPA, IPS, Bahasa", icon: GraduationCap },
  { id: "smk", name: "SMK", description: "6 Kompetensi Keahlian", icon: GraduationCap }
];

const registrationFlow = [
  {
    step: "1",
    title: "Isi Formulir",
    description: "Lengkapi formulir pendaftaran online dengan data diri yang valid",
    icon: FileText
  },
  {
    step: "2",
    title: "Upload Dokumen",
    description: "Unggah dokumen persyaratan dalam format PDF/JPG",
    icon: Upload
  },
  {
    step: "3",
    title: "Verifikasi",
    description: "Tunggu verifikasi data oleh panitia PPDB",
    icon: CheckCircle2
  },
  {
    step: "4",
    title: "Pengumuman",
    description: "Cek status kelulusan pada tanggal yang ditentukan",
    icon: Calendar
  }
];

const requirements = [
  { title: "Ijazah/SKL", description: "Ijazah SMP/MTs atau Surat Keterangan Lulus", required: true },
  { title: "Transkrip Nilai", description: "Legger nilai rapor semester 1-5", required: true },
  { title: "Kartu Keluarga", description: "Foto copy KK yang masih berlaku", required: true },
  { title: "Akte Kelahiran", description: "Foto copy akte kelahiran yang dilegalisir", required: true },
  { title: "KTP Orang Tua", description: "Foto copy KTP ayah dan ibu kandung", required: true },
  { title: "Pas Foto", description: "Foto berwarna 3x4 (4 lembar) latar merah/biru", required: true },
  { title: "Surat Pernyataan", description: "Surat pernyataan sanggup mematuhi peraturan", required: false },
  { title: "Bukut Pembayaran", description: "Bukti pembayaran formulir pendaftaran", required: false }
];

const importantDates = [
  { event: "Pendaftaran Gelombang 1", date: "1 - 30 April 2026", status: "active" },
  { event: "Pendaftaran Gelombang 2", date: "1 - 31 Mei 2026", status: "upcoming" },
  { event: "Verifikasi Berkas", date: "1 - 10 Juni 2026", status: "upcoming" },
  { event: "Pengumuman Hasil", date: "15 Juni 2026", status: "upcoming" },
  { event: "Daftar Ulang", date: "17 - 25 Juni 2026", status: "upcoming" }
];

const faqs = [
  {
    question: "Apa syarat nilai minimal untuk mendaftar?",
    answer: "Nilai rata-rata rapor minimal 75.00 untuk semua mata pelajaran. Calon siswa juga harus lulus SMP/MTs sederajat."
  },
  {
    question: "Apakah ada biaya pendaftaran?",
    answer: "Ya, biaya formulir pendaftaran sebesar Rp 250.000 yang dapat ditransfer ke rekening sekolah."
  },
  {
    question: "Berapa kuota penerimaan siswa baru?",
    answer: "Kuota penerimaan untuk SMA 8 rombel (256 siswa) dan SMK 10 rombel (320 siswa) dengan rincian per kompetensi keahlian."
  },
  {
    question: "Apakah ada beasiswa?",
    answer: "Ya, tersedia beasiswa prestasi dan beasiswa kurang mampu. Informasi lengkap dapat dilihat di menu Beasiswa."
  },
  {
    question: "Kapan pengumuman hasil seleksi?",
    answer: "Pengumuman hasil seleksi akan diumumkan pada 15 Juni 2026 melalui website dan papan pengumuman sekolah."
  }
];

export default function PPDBContent() {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    nisn: "",
    birthPlace: "",
    birthDate: "",
    gender: "",
    religion: "",
    address: "",
    phone: "",
    parentName: "",
    parentPhone: "",
    originSchool: ""
  });
  const [selectedRequirement, setSelectedRequirement] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
          alt="PPDB"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-slate-900/60 dark:from-blue-950/95 dark:via-slate-900/80 dark:to-blue-950/90 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <GraduationCap className="w-5 h-5 mr-3" />
            Penerimaan Siswa Baru
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
            PPDB 2026/2027
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
            Bergabunglah menjadi bagian dari generasi unggul dan berkarakter di SMA-SMKS YAPIM Taruna Pandan
          </p>
        </motion.div>
      </section>

      {/* Important Dates */}
      <section className="section-standard bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 3px 3px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-200 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Jadwal Penting
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Timeline Pendaftaran
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {importantDates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl text-center ${
                  item.status === 'active'
                    ? 'bg-white text-blue-900 scale-105'
                    : 'bg-white/10 text-white'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  item.status === 'active' ? 'bg-blue-600 text-white' : 'bg-white/20 text-blue-200'
                }`}>
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-black mb-2 text-sm">{item.event}</h3>
                <p className="text-xs opacity-80">{item.date}</p>
                {item.status === 'active' && (
                  <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                    SEDANG BERLANGSUNG
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Selection */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Program
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Pilih Jenjang Pendidikan
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((program) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`card-elevated p-8 cursor-pointer transition-all duration-300 ${
                  selectedProgram === program.id
                    ? 'border-blue-600 shadow-2xl shadow-blue-600/20'
                    : 'hover:border-blue-200 dark:hover:border-blue-900'
                }`}
                onClick={() => setSelectedProgram(program.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                    selectedProgram === program.id
                      ? 'bg-blue-600'
                      : 'bg-slate-100 dark:bg-slate-800'
                  }`}>
                    <program.icon className={`w-8 h-8 ${
                      selectedProgram === program.id ? 'text-white' : 'text-slate-600 dark:text-slate-400'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">{program.name}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{program.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Flow */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Alur Pendaftaran
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
              Tahapan PPDB
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrationFlow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="card-elevated p-6 h-full">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-lg mb-4">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < registrationFlow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-blue-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Persyaratan
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
              Dokumen yang Diperlukan
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`card-elevated p-6 cursor-pointer transition-all duration-300 ${
                  selectedRequirement === index ? 'border-blue-600' : ''
                }`}
                onClick={() => setSelectedRequirement(selectedRequirement === index ? null : index)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {req.required ? (
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                    )}
                    <span className="px-2 py-1 text-xs font-bold rounded-full bg-slate-100 dark:bg-slate-800">
                      {req.required ? "Wajib" : "Opsional"}
                    </span>
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{req.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{req.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Preview */}
      <section className="section-spacious bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Pendaftaran
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
              Formulir Pendaftaran
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4">
              Isi formulir di bawah ini untuk memulai proses pendaftaran
            </p>
          </motion.div>

          <div className="card-elevated p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 rounded-xl text-slate-900 dark:text-white outline-none transition-all"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">NISN</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 rounded-xl text-slate-900 dark:text-white outline-none transition-all"
                    placeholder="Masukkan NISN"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Tempat Lahir</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 rounded-xl text-slate-900 dark:text-white outline-none transition-all"
                    placeholder="Tempat lahir"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Tanggal Lahir</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 rounded-xl text-slate-900 dark:text-white outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Alamat Lengkap</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 rounded-xl text-slate-900 dark:text-white outline-none transition-all resize-none"
                  placeholder="Alamat lengkap"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">No. HP Siswa</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 rounded-xl text-slate-900 dark:text-white outline-none transition-all"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">No. HP Orang Tua</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 rounded-xl text-slate-900 dark:text-white outline-none transition-all"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Asal Sekolah</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 rounded-xl text-slate-900 dark:text-white outline-none transition-all"
                  placeholder="Nama SMP/MTs asal"
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 flex items-center justify-center group"
                >
                  Lanjutkan ke Upload Dokumen <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Bantuan
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
              Pertanyaan Umum
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div
                  className={`card-elevated overflow-hidden transition-all duration-300 ${
                    activeFaq === index ? 'border-blue-600' : ''
                  }`}
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between"
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  >
                    <h3 className="font-bold text-slate-900 dark:text-white pr-4">{faq.question}</h3>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      activeFaq === index ? 'bg-blue-600 text-white rotate-45' : 'bg-slate-100 dark:bg-slate-800'
                    }`}>
                      <span className="text-xl">+</span>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-standard bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 4px 4px, rgba(255,255,255,0.5) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Butuh Bantuan?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Hubungi kami untuk informasi lebih lanjut seputar pendaftaran
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="tel:+62631372375" className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition">
                <Phone className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <p className="text-xs text-blue-200">Telepon</p>
                  <p className="font-bold">(0631) 372375</p>
                </div>
              </a>
              <a href="mailto:yapim_pandan@yahoo.com" className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition">
                <Mail className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <p className="text-xs text-blue-200">Email</p>
                  <p className="font-bold">yapim_pandan@yahoo.com</p>
                </div>
              </a>
              <Link href="/kontak" className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition">
                <MapPin className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <p className="text-xs text-blue-200">Lokasi</p>
                  <p className="font-bold">Google Maps</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
