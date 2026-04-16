"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Award, Clock, Target, CheckCircle2, ArrowRight, Monitor, Database, Wrench, Car, Utensils, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const competencies = [
  {
    name: "TKJ",
    nameFull: "Teknik Komputer & Jaringan",
    icon: Monitor,
    color: "blue",
    description: "Menguasai instalasi, konfigurasi jaringan, dan administrasi server untuk persiapan karir di bidang IT dan network engineering",
    skills: ["MikroTik", "Cisco", "Linux Server", "Fiber Optic", "Troubleshooting"],
    industry: ["ISP", "Data Center", "Corporate IT", "Network Solution", "Freelance"],
    certification: "MikroTik Certified Network Associate (MTCNA)"
  },
  {
    name: "RPL",
    nameFull: "Rekayasa Perangkat Lunak",
    icon: Database,
    color: "purple",
    description: "Mengembangkan aplikasi desktop, web, dan mobile dengan berbagai bahasa pemrograman modern dan framework terkini",
    skills: ["JavaScript/TypeScript", "React/Next.js", "PHP/Laravel", "Python", "Mobile Dev"],
    industry: ["Startup", "Software House", "Tech Company", "Freelance", "Product Studio"],
    certification: "Junior Web Developer (BNSP)"
  },
  {
    name: "TKR",
    nameFull: "Teknik Kendaraan Ringan",
    icon: Car,
    color: "red",
    description: "Menguasai perawatan, perbaikan, dan tune-up kendaraan roda empat dengan standar industri otomotif modern",
    skills: ["Engine Tune-Up", "Brake System", "Electrical", "Suspension", "Diagnostic Tool"],
    industry: ["Dealer Resmi", "Bengkel Modern", "Fleet Management", "Otomotif Shop", "Wirausaha"],
    certification: "Teknik Kendaraan Ringan (BNSP)"
  },
  {
    name: "TBSM",
    nameFull: "Teknik Bisnis Sepeda Motor",
    icon: Wrench,
    color: "orange",
    description: "Menguasai perawatan, modifikasi, dan manajemen bisnis sepeda motor dengan keterampilan mekanik dan kewirausahaan",
    skills: ["Motor Tune-Up", "Overhaul Mesin", "Modifikasi", "Bengkel Management", "Customer Service"],
    industry: ["Bengkel Motor", "Dealer Honda/Yamaha", "Racing Team", "Wirausaha Bengkel", "Parts Shop"],
    certification: "Teknik Sepeda Motor (BNSP)"
  },
  {
    name: "AKL",
    nameFull: "Akuntansi & Keuangan Lembaga",
    icon: Building2,
    color: "emerald",
    description: "Menguasai akuntansi, perpajakan, dan manajemen keuangan lembaga dengan aplikasi komputerisasi modern",
    skills: ["Akuntansi", "Pajak", "MYOB/Zahir", "Excel", "Audit Laporan"],
    industry: ["KAP", "Perusahaan Multinasional", "Bank", "Tax Consultant", "Finance Dept"],
    certification: "Junior Auditor (BNSP)"
  },
  {
    name: "Kuliner",
    nameFull: "Tata Boga & Kuliner",
    icon: Utensils,
    color: "amber",
    description: "Menguasai seni memasak, pastry, dan manajemen usaha kuliner untuk karir di industri hospitality dan wirausaha",
    skills: ["Cooking", "Pastry & Bakery", "Food Costing", "HACCP", "Kitchen Management"],
    industry: ["Hotel Berbintang", "Restoran", "Catering", "Wirausaha Kuliner", "Cruise Line"],
    certification: "Chef Junior (BNSP)"
  }
];

const programFeatures = [
  {
    icon: Target,
    title: "Kurikulum Berbasis Industri",
    description: "Kurikulum disusun sesuai standar industri dan link & match dengan dunia kerja"
  },
  {
    icon: Users,
    title: "Praktik Kerja Lapangan",
    description: "PKL selama 6 bulan di perusahaan mitra untuk pengalaman kerja nyata"
  },
  {
    icon: Award,
    title: "Sertifikasi BNSP",
    description: "Sertifikasi kompetensi dari Badan Nasional Sertifikasi Profesi"
  },
  {
    icon: BookOpen,
    title: "Instruktur Tersertifikasi",
    description: "Guru produktif dengan pengalaman industri dan sertifikasi praktisi"
  }
];

const partnerLogos = [
  { name: "MikroTik", category: "TKJ" },
  { name: "Cisco", category: "TKJ" },
  { name: "Microsoft", category: "RPL" },
  { name: "Honda", category: "TKR" },
  { name: "Yamaha", category: "TBSM" },
  { name: "Accurate", category: "AKL" }
];

const achievements = [
  { value: "98%", label: "Terserap Industri", icon: Users },
  { value: "200+", label: "Mitra DU/DI", icon: Building2 },
  { value: "85%", label: "Sertifikasi Lulus", icon: Award },
  { value: "30+", label: "Juara Kompetensi", icon: GraduationCap }
];

export default function AkademikSMKContent() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <Image
          src="https://images.unsplash.com/photo-1581092921461-eab62e97a78f?q=80&w=2070&auto=format&fit=crop"
          alt="SMK Students"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/70 to-slate-900/60 dark:from-emerald-950/95 dark:via-slate-900/80 dark:to-emerald-950/90 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <GraduationCap className="w-5 h-5 mr-3" />
            Program Vokasi
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
            SMK YAPIM
          </h1>

          <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed font-medium">
            Mencetak lulusan kompeten dengan keterampilan terapan yang siap kerja dan berwirausaha mandiri
          </p>
        </motion.div>
      </section>

      {/* Competencies Section */}
      <section className="section-spacious bg-white dark:bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Kompetensi Keahlian
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Pilihan Jurusan
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Enam program keahlian vokasi dengan standar industri dan sertifikasi nasional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competencies.map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="card-elevated p-8 h-full hover:border-emerald-200 dark:hover:border-emerald-900">
                  <div className={`w-20 h-20 rounded-2xl bg-${competency.color}-100 dark:bg-${competency.color}-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <competency.icon className={`w-10 h-10 text-${competency.color}-600 dark:text-${competency.color}-400`} />
                  </div>

                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 bg-${competency.color}-100 dark:bg-${competency.color}-900/30 text-${competency.color}-700 dark:text-${competency.color}-400 text-xs font-bold uppercase tracking-wider rounded-full mb-3`}>
                      {competency.name}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">
                      {competency.nameFull}
                    </h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
                    {competency.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Kompetensi Inti</h4>
                      <div className="flex flex-wrap gap-2">
                        {competency.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Sertifikasi</h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{competency.certification}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Industrial Partner</h4>
                      <div className="flex flex-wrap gap-2">
                        {competency.industry.slice(0, 3).map((ind, i) => (
                          <span key={i} className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs rounded-full">
                            {ind}
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

      {/* Program Features */}
      <section className="section-spacious bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Program
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Keunggulan Vokasi
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-elevated p-8 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
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

      {/* Partners & Certification */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Mitra Industri
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Kemitraan & Sertifikasi
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card-elevated p-6 text-center hover:border-emerald-200 dark:hover:border-emerald-900"
              >
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏢</span>
                </div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">{partner.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{partner.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="section-spacious bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white relative overflow-hidden">
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
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-200 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Kinerja
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Statistik Kinerja
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
                  <achievement.icon className="w-8 h-8 text-emerald-200" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{achievement.value}</div>
                <p className="text-emerald-200 font-bold uppercase tracking-wider text-xs">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-standard bg-gradient-to-r from-emerald-600 to-emerald-800 text-white relative overflow-hidden">
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
              Siap Menjadi Tenaga Kerja Kompeten?
            </h2>
            <p className="text-emerald-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Daftar sekarang dan kuasai keterampilan vokasi untuk karir cemerlang di industri
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/ppdb" className="inline-flex items-center px-10 py-5 bg-white text-emerald-900 font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-emerald-50 shadow-2xl group">
                Daftar Sekarang <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <Link href="/kontak" className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-white hover:text-emerald-900">
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
