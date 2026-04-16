"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Award, Clock, Target, CheckCircle2, ArrowRight, Beaker, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    name: "IPA (MIPA)",
    nameFull: "Matematika & Ilmu Pengetahuan Alam",
    icon: Beaker,
    color: "blue",
    description: "Fokus pada ilmu pasti dan alam dengan pendalaman matematika, fisika, kimia, dan biologi untuk persiapan kedokteran dan teknik",
    subjects: ["Matematika", "Fisika", "Kimia", "Biologi", "Bahasa Inggris"],
    career: ["Dokter", "Insinyur", "Peneliti", "Ahli Farmasi", "Ilmuwan"]
  },
  {
    name: "IPS",
    nameFull: "Ilmu Pengetahuan Sosial",
    icon: Globe,
    color: "emerald",
    description: "Memahami dinamika sosial, ekonomi, dan sejarah untuk persiapan bidang hukum, ekonomi, dan ilmu sosial lainnya",
    subjects: ["Sosiologi", "Ekonomi", "Geografi", "Sejarah", "Bahasa Inggris"],
    career: ["Pengacara", "Ekonom", "Sosiolog", "Diplomat", "Akademisi"]
  },
  {
    name: "Bahasa",
    nameFull: "Ilmu Bahasa & Budaya",
    icon: Globe,
    color: "purple",
    description: "Mengembangkan kompetensi bahasa dan sastra serta pemahaman lintas budaya untuk karir internasional",
    subjects: ["Bahasa Inggris", "Bahasa Indonesia", "Sastra", "Antropologi", "Seni Budaya"],
    career: ["Penerjemah", "Diplomat", "Jurnalis", "Guru Bahasa", "Penulis"]
  }
];

const curriculumFeatures = [
  {
    icon: BookOpen,
    title: "Kurikulum Nasional",
    description: "Mengimplementasikan kurikulum nasional dengan standar pemenuhan kompetensi minimal yang ketat"
  },
  {
    icon: Target,
    title: "Program Pengayaan",
    description: "Program tambahan untuk persiapan SBMPTN, UTBK, dan tes masuk perguruan tinggi"
  },
  {
    icon: Users,
    title: "Mentoring Akademik",
    description: "Bimbingan personal dari guru senior untuk optimalisasi potensi akademik siswa"
  },
  {
    icon: Award,
    title: "Sertifikasi Internasional",
    description: "Persiapan untuk sertifikasi bahasa Inggris TOEFL/IELTS dan kompetisi internasional"
  }
];

const scheduleData = [
  { level: "Kelas X", description: "Fokus pada penguasaan dasar dan eksplorasi minat bakat", hours: "40 jam/minggu" },
  { level: "Kelas XI", description: "Pendalaman materi dan proyek terapan", hours: "42 jam/minggu" },
  { level: "Kelas XII", description: "Persiapan ujian nasional dan masuk perguruan tinggi", hours: "38 jam/minggu" }
];

const achievements = [
  { value: "95%", label: "Lulusan PTN", icon: GraduationCap },
  { value: "150+", label: "Prestasi Nasional", icon: Award },
  { value: "3.8", label: "Rata-rata UN", icon: CheckCircle2 },
  { value: "40+", label: "MoU Universitas", icon: Users }
];

export default function AkademikSMAContent() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
          alt="SMA Students"
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
            Program Akademik
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
            SMA YAPIM
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
            Mencetak generasi unggul dengan penguasaan IPTEK dan kokoh dalam IMTAQ melalui program akademik terintegrasi
          </p>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section className="section-spacious bg-white dark:bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Program Studi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Pilihan Jurusan
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Tiga peminatan studi dengan kurikulum terstruktur untuk mempersiapkan siswa menuju perguruan tinggi impian
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="card-elevated p-8 h-full hover:border-blue-200 dark:hover:border-blue-900">
                  <div className={`w-20 h-20 rounded-2xl bg-${program.color}-100 dark:bg-${program.color}-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className={`w-10 h-10 text-${program.color}-600 dark:text-${program.color}-400`} />
                  </div>

                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 bg-${program.color}-100 dark:bg-${program.color}-900/30 text-${program.color}-700 dark:text-${program.color}-400 text-xs font-bold uppercase tracking-wider rounded-full mb-3`}>
                      {program.name}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">
                      {program.nameFull}
                    </h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Mata Pelajaran Utama</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.subjects.map((subject, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-full">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Prospek Karir</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.career.map((career, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs rounded-full">
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Features */}
      <section className="section-spacious bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Kurikulum
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Keunggulan Akademik
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-elevated p-8 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule & Requirements */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-elevated p-10 h-full">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                      Kegiatan Belajar
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mt-1">Per Minggu</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {scheduleData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                      <div>
                        <span className="font-black text-slate-900 dark:text-white">{item.level}</span>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                      </div>
                      <span className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-elevated p-10 h-full">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                      Persyaratan Pendaftaran
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mt-1">Kelengkapan Dokumen</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Lulusan SMP/MTs sederajat",
                    "Nilai Rapor SMP minimal 75.00",
                    "Surat Keterangan Lulus (SKL)",
                    "Foto berwarna 3x4 (4 lembar)",
                    "Akte Kelahiran (Copy)",
                    "Kartu Keluarga (Copy)",
                    "KTP Orang Tua/Wali (Copy)",
                    "Bukti pembayaran formulir"
                  ].map((req, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="section-spacious bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
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
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-200 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Prestasi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Pencapaian Akademik
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-blue-200" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{achievement.value}</div>
                <p className="text-blue-200 font-bold uppercase tracking-wider text-xs">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Siap Menjadi Bagian dari SMA YAPIM?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Daftar sekarang dan jadilah bagian dari generasi unggul yang berkarakter dan berprestasi
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/ppdb" className="inline-flex items-center px-10 py-5 bg-white text-blue-900 font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-blue-50 shadow-2xl group">
                Daftar Sekarang <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <Link href="/kontak" className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-white hover:text-blue-900">
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
