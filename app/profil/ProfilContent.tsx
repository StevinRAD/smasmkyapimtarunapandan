"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Phone, Mail, Users, BookOpen, Target, Eye, CheckCircle2, Calendar, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const schoolIdentity = [
  { label: "Nama Sekolah", value: "SMA-SMKS YAPIM TARUNA PANDAN", icon: Building },
  { label: "NPSN", value: "69762757", icon: Award },
  { label: "Status", value: "Swasta Terakreditasi Baik", icon: CheckCircle2 },
  { label: "Akreditasi", value: "B", icon: Award, highlight: true },
  { label: "Kepala Sekolah", value: "Parunggulan Tobing, S.Pd", icon: Users },
  { label: "Berdiri Sejak", value: "1989", icon: Calendar },
  { label: "Alamat", value: "JL. AHMAD YANI PANDAN, Kec. Pandan, Kab. Tapanuli Tengah", icon: MapPin },
  { label: "Telepon", value: "(0631) 372375", icon: Phone },
  { label: "Email", value: "yapim_pandan@yahoo.com", icon: Mail },
];

const visionStatement = "Menjadi institusi pendidikan menengah yang unggul dalam IPTEK, kokoh dalam IMTAQ, berwawasan global, serta menghasilkan lulusan yang berkarakter tangguh dan berjiwa kepemimpinan.";

const missions = [
  {
    title: "Pembelajaran Inovatif",
    description: "Menyelenggarakan proses pembelajaran yang inovatif, interaktif, dan berbasis teknologi modern",
    icon: BookOpen
  },
  {
    title: "Karakter & Budi Pekerti",
    description: "Menumbuhkembangkan nilai-nilai spiritual, kedisiplinan, dan budi pekerti luhur bagi seluruh warga sekolah",
    icon: Users
  },
  {
    title: "Pengembangan Profesional",
    description: "Meningkatkan kompetensi pendidik dan tenaga kependidikan secara berkelanjutan",
    icon: GraduationCap
  },
  {
    title: "Kemitraan Strategis",
    description: "Membangun kemitraan strategis dengan berbagai institusi untuk memperluas wawasan siswa",
    icon: Target
  }
];

const timelineEvents = [
  {
    year: "2013",
    title: "Peresmian Gedung Baru",
    description: "Gedung sekolah diresmikan pada 16 Mei 2013 oleh Bupati Tapanuli Tengah Raja Bonaran Situmeang, SH, M. Hum"
  },
  {
    year: "2020",
    title: "Transformasi Digital",
    description: "Bertransformasi ke pembelajaran berbasis teknologi dan sistem manajemen modern"
  },
  {
    year: "2024",
    title: "35 Tahun Mengabdi",
    description: "Merayakan 35 tahun pengabdian dalam mencetak generasi unggul dan berkarakter"
  }
];

export default function ProfilContent() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section - Full Width */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
          alt="School Campus"
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
            Tentang YAPIM
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
            Profil Sekolah
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
            Mengenal lebih dekat SMA-SMKS YAPIM Taruna Pandan, lembaga pendidikan unggulan di Tapanuli Tengah dengan 35 tahun pengalaman mencetak generasi berkarakter
          </p>
        </motion.div>
      </section>

      {/* School Identity Section - Full Width */}
      <section className="section-spacious bg-white dark:bg-slate-950 relative">
        <div className="max-w-full mx-auto px-4 md:px-8 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Identitas Sekolah
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Informasi Resmi
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Data resmi dan informasi lengkap mengenai SMA-SMKS YAPIM Taruna Pandan
            </p>
          </motion.div>

          {/* Identity Cards - Full Width Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {schoolIdentity.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card-elevated p-6 ${item.highlight ? 'border-2 border-blue-200 dark:border-blue-900' : ''}`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${item.highlight ? 'bg-blue-600' : 'bg-slate-100 dark:bg-slate-800'}`}>
                    <item.icon className={`w-7 h-7 ${item.highlight ? 'text-white' : 'text-slate-600 dark:text-slate-400'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      {item.label}
                    </p>
                    <p className="text-lg md:text-xl font-bold text-slate-900 dark:text-white break-words">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - Full Width */}
      <section className="section-spacious bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="max-w-full mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Vision - Full Width */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-elevated bg-gradient-to-br from-blue-600 to-blue-800 text-white p-10 md:p-12 border-none"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Visi</h3>
                  <p className="text-blue-200 text-sm font-medium mt-1">Tujuan Utama Kami</p>
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl leading-relaxed font-medium border-l-4 border-white/30 pl-6 py-2">
                &quot;{visionStatement}&quot;
              </blockquote>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center space-x-2 text-blue-100">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Terupdate 2024</span>
                </div>
              </div>
            </motion.div>

            {/* Mission - Full Width */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-elevated p-10 md:p-12"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Misi</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mt-1">Langkah Konkret</p>
                </div>
              </div>

              <div className="space-y-6">
                {missions.map((mission, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <mission.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">{mission.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{mission.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* History Timeline Section - Full Width */}
      <section className="section-spacious bg-white dark:bg-slate-950 relative">
        <div className="max-w-full mx-auto px-4 md:px-8 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Perjalanan Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Sejarah & Milestone
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg">
              Jejak langkah YAPIM Taruna Pandan dari tahun ke tahun dalam mewujudkan visi pendidikan berkualitas
            </p>
          </motion.div>

          {/* Timeline - Full Width */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-600 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 transform md:-translate-x-1/2 z-10 mt-6 md:mt-0"></div>

                  {/* Year Badge */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                    <div className={`inline-flex items-center px-4 py-2 bg-blue-600 text-white font-black text-lg md:text-xl rounded-lg shadow-lg mb-4 md:mb-0 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      {event.year}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                    <div className="card-elevated p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-3">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="section-standard bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 4px 4px, rgba(255,255,255,0.5) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="max-w-full mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Ingin Mengenal Lebih Lanjut?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Kami menyambut baik kesempatan untuk berinteraksi lebih dekat dengan calon siswa, orang tua, dan seluruh masyarakat
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/kontak" className="inline-flex items-center px-10 py-5 bg-white text-blue-900 font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-blue-50 shadow-2xl">
                Hubungi Kami
              </Link>
              <Link href="/fasilitas" className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-white hover:text-blue-900">
                Lihat Fasilitas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
