"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Building2, Briefcase, TrendingUp, Users, MapPin, Mail, Phone, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const alumniCategories = [
  { id: "all", name: "Semua", icon: Users },
  { id: "success-story", name: "Sukses", icon: Award },
  { id: "ptn", name: "Lulusan PTN", icon: GraduationCap },
  { id: "bekerja", name: "Bekerja", icon: Briefcase },
  { id: "wirausaha", name: "Wirausaha", icon: Building2 }
];

const featuredAlumni = [
  {
    id: 1,
    name: "dr. Amanda Sari, Sp.PK",
    graduationYear: "2012",
    category: "success-story",
    categoryName: "Success Story",
    achievement: "Dokter Spesialis Patologi Klinik - RSUP H. Adam Malik",
    currentPosition: "Dokter Spesialis",
    institution: "RSUP H. Adam Malik Medan",
    education: "S1 Kedokteran - USM, Sp.PK - Universitas Indonesia",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    highlights: [
      "Lulus dengan predikat Cumlaude",
      "Juara 1 OSN Biologi 2011",
      "Beasiswa Unggulan"
    ],
    quote: "SMA YAPIM memberikan fondasi akademik yang kuat dan karakter yang tangguh. Guru-guru di sini tidak hanya mengajar, tapi juga menjadi mentor yang peduli.",
    social: {
      instagram: "@amanda.sari",
      linkedin: "amanda-sari"
    }
  },
  {
    id: 2,
    name: "Budi Santoso, S.Kom, M.T.I",
    graduationYear: "2013",
    category: "success-story",
    categoryName: "Success Story",
    achievement: "Senior Software Engineer - Google Asia Pacific",
    currentPosition: "Software Engineer",
    institution: "Google Singapore",
    education: "S1 Teknik Informatika - Institut Teknologi Bandung, M.T.I - Universitas Indonesia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    highlights: [
      "Juara 1 LKS RPL Nasional 2012",
      "Beasiswa Prestasi ITB",
      "Google Developer Expert"
    ],
    quote: "Kurikulum RPL YAPIM sangat relevan dengan kebutuhan industri. Saya sudah familiar dengan berbagai teknologi saat masuk kuliah.",
    social: {
      instagram: "@budisantoso.dev",
      linkedin: "budisantoso"
    }
  }
];

const alumniData = [
  // Lulusan PTN
  {
    id: 3,
    name: "Citra Dewi, S.E",
    graduationYear: "2018",
    category: "ptn",
    categoryName: "Lulusan PTN",
    achievement: "Lulusan S1 Ekonomi - Universitas Indonesia",
    currentPosition: "Mahasiswa S2",
    institution: "Universitas Indonesia",
    education: "S1 Ekonomi UI - Cumlaude",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    highlights: [
      "IPK 3.92",
      "Beasiswa Bidikmisi",
      "Juara 2 Olimpiade Ekonomi"
    ]
  },
  {
    id: 4,
    name: "Rizky Pratama, S.T",
    graduationYear: "2017",
    category: "ptn",
    categoryName: "Lulusan PTN",
    achievement: "Lulusan S1 Teknik Sipil - ITB",
    currentPosition: "Civil Engineer",
    institution: "Waskita Karya",
    education: "S1 Teknik Sipil ITB",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    highlights: [
      "IPK 3.85",
      "Best Thesis Award",
      "Mitra Bappenas"
    ]
  },
  // Bekerja
  {
    id: 5,
    name: "Putri Ayu, S.Ak",
    graduationYear: "2016",
    category: "bekerja",
    categoryName: "Bekerja",
    achievement: "Senior Auditor - Kantor Akuntan Publik",
    currentPosition: "Senior Auditor",
    institution: "KAP Big Four",
    education: "S1 Akuntansi - Universitas Sumatera Utara",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
    highlights: [
      "CPA Australia",
      "5 Tahun Pengalaman",
      "JCA Certification"
    ]
  },
  {
    id: 6,
    name: "Ahmad Rizki, S.Kom",
    graduationYear: "2019",
    category: "bekerja",
    categoryName: "Bekerja",
    achievement: "Fullstack Developer - Startup Unicorn",
    currentPosition: "Software Developer",
    institution: "Traveloka Indonesia",
    education: "SMK Jurusan RPL - YAPIM",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    highlights: [
      "3 Tahun Pengalaman",
      "React Expert",
      "AWS Certified"
    ]
  },
  // Wirausaha
  {
    id: 7,
    name: "Dina Wulandari",
    graduationYear: "2015",
    category: "wirausaha",
    categoryName: "Wirausaha",
    achievement: "Founder - Dina Catering & Wedding Organizer",
    currentPosition: "Entrepreneur",
    institution: "Dina Catering",
    education: "SMK Jurusan Tata Boga - YAPIM",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
    highlights: [
      "50+ Karyawan",
      "Omzet 500 Juta/Bulan",
      "Pengusaha Muda Berprestasi 2023"
    ]
  },
  {
    id: 8,
    name: "Rudi Hartono",
    graduationYear: "2014",
    category: "wirausaha",
    categoryName: "Wirausaha",
    achievement: "Owner - Rudi Motor Bengkel & Sparepart",
    currentPosition: "Entrepreneur",
    institution: "Rudi Motor",
    education: "SMK Jurusan TBSM - YAPIM",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    highlights: [
      "3 Cabang Bengkel",
      "30+ Karyawan",
      "Authorized Honda Service"
    ]
  }
];

const jobVacancies = [
  {
    id: 1,
    company: "PT Telkom Indonesia",
    position: "Network Engineer",
    location: "Medan",
    type: "Full Time",
    salary: "IDR 8-12 Juta",
    requirements: ["S1 Teknik Informatika/Elektro", "Pengalaman 2-3 tahun", "Menguasai MikroTik/Cisco"],
    logo: "🏢",
    deadline: "30 April 2026"
  },
  {
    id: 2,
    company: "RS Columbia Asia",
    position: "Medical Representative",
    location: "Pandan",
    type: "Full Time",
    salary: "IDR 5-7 Juta",
    requirements: ["D3/S1 Farmasi/Kedokteran", "Komunikatif", "Memiliki SIM C"],
    logo: "🏥",
    deadline: "25 April 2026"
  },
  {
    id: 3,
    company: "Bank Sumut",
    position: "Customer Service",
    location: "Tapanuli Tengah",
    type: "Full Time",
    salary: "IDR 4-6 Juta",
    requirements: ["D3/S1 Semua Jurusan", "Berpenampilan menarik", "Menguasai komputer"],
    logo: "🏦",
    deadline: "20 April 2026"
  },
  {
    id: 4,
    company: "SMK Negeri 1 Pandan",
    position: "Guru Produktif RPL",
    location: "Pandan",
    type: "PNS",
    salary: " Sesuai Gaji PNS",
    requirements: ["S1 Pendidikan/Teknik Informatika", "Sertifikasi Pendidik", "Akta IV"],
    logo: "🎓",
    deadline: "15 Mei 2026"
  }
];

const alumniStats = [
  { value: "2500+", label: "Total Alumni", icon: Users },
  { value: "95%", label: "Terserap Industri/PTN", icon: TrendingUp },
  { value: "150+", label: "Alumni di Luar Negeri", icon: MapPin },
  { value: "50+", label: "Pengusaha Sukses", icon: Award }
];

export default function AlumniContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedAlumni, setSelectedAlumni] = useState<typeof featuredAlumni[0] | null>(null);
  const [activeTab, setActiveTab] = useState<"alumni" | "karir">("alumni");

  const filteredAlumni = activeCategory === "all"
    ? alumniData
    : alumniData.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
          alt="Alumni & Karir"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/70 to-slate-900/60 dark:from-purple-950/95 dark:via-slate-900/80 dark:to-purple-950/90 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <GraduationCap className="w-5 h-5 mr-3" />
            Jejak Alumni
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
            Alumni & Karir
          </h1>

          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed font-medium">
 Mengenal lebih dekat kesuksesan alumni dan peluang karir untuk lulusan
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-standard bg-gradient-to-br from-purple-900 via-purple-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 3px 3px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {alumniStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-purple-200" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <p className="text-purple-200 font-bold uppercase tracking-wider text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="section-standard bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("alumni")}
              className={`flex items-center px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === "alumni"
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/20'
              }`}
            >
              <Users className="w-5 h-5 mr-2" />
              Alumni
            </button>
            <button
              onClick={() => setActiveTab("karir")}
              className={`flex items-center px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === "karir"
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/20'
              }`}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Karir & Loker
            </button>
          </div>
        </div>
      </section>

      {/* Alumni Tab Content */}
      {activeTab === "alumni" && (
        <>
          {/* Featured Alumni */}
          <section className="section-spacious bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
                  Alumni Sukses
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
                  Kisah Inspiratif
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredAlumni.map((alumnus) => (
                  <motion.div
                    key={alumnus.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedAlumni(alumnus)}
                  >
                    <div className="card-elevated overflow-hidden h-full hover:border-purple-200 dark:hover:border-purple-900">
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          fill
                          src={alumnus.image}
                          alt={alumnus.name}
                          className="object-cover transform group-hover:scale-110 transition duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <span className="px-4 py-2 bg-purple-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                            Angkatan {alumnus.graduationYear}
                          </span>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                            <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                              {alumnus.name}
                            </h3>
                            <p className="text-sm font-bold text-slate-600 dark:text-slate-400">
                              {alumnus.currentPosition} - {alumnus.institution}
                            </p>
                          </div>
                        </div>

                        <div className="mb-4 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border-l-4 border-purple-600">
                          <p className="text-slate-700 dark:text-slate-300 text-sm italic leading-relaxed">
                            &ldquo;{alumnus.quote}&rdquo;
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {alumnus.highlights.slice(0, 2).map((highlight, i) => (
                              <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full">
                                {highlight}
                              </span>
                            ))}
                          </div>
                          <span className="text-purple-600 dark:text-purple-400 font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                            Selengkapnya →
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="section-standard bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="flex flex-wrap justify-center gap-3">
                {alumniCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/20'
                    }`}
                  >
                    <category.icon className="w-3.5 h-3.5 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Alumni Grid */}
          <section className="section-spacious bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                  Direktori Alumni ({filteredAlumni.length})
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAlumni.map((alumnus) => (
                  <motion.div
                    key={alumnus.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group cursor-pointer"
                  >
                    <div className="card-elevated overflow-hidden h-full hover:border-purple-200 dark:hover:border-purple-900">
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          fill
                          src={alumnus.image}
                          alt={alumnus.name}
                          className="object-cover transform group-hover:scale-110 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                            {alumnus.categoryName}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-black text-slate-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                          {alumnus.name}
                        </h3>
                        <p className="text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">
                          Angkatan {alumnus.graduationYear}
                        </p>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 line-clamp-2">
                          {alumnus.achievement}
                        </p>
                        <div className="flex items-center text-xs text-slate-500 dark:text-slate-500">
                          <Building2 className="w-3 h-3 mr-1" />
                          {alumnus.institution}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Career Tab Content */}
      {activeTab === "karir" && (
        <section className="section-spacious bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
                Karir
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
                Lowongan Kerja
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl">
                Informasi lowongan kerja untuk alumni SMA-SMKS YAPIM Taruna Pandan dari berbagai perusahaan mitra
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobVacancies.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="card-elevated p-8 h-full hover:border-purple-200 dark:hover:border-purple-900">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-3xl">
                          {job.logo}
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                            {job.position}
                          </h3>
                          <p className="text-sm font-bold text-slate-600 dark:text-slate-400">{job.company}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-bold uppercase tracking-wider rounded-full">
                        {job.type}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {job.salary}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Persyaratan</h4>
                      <div className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <div key={index} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                            {req}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
                      <div className="flex items-center text-red-600 dark:text-red-400 text-sm font-bold">
                        <Calendar className="w-4 h-4 mr-2" />
                        Deadline: {job.deadline}
                      </div>
                      <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg transition flex items-center group-hover:translate-x-1">
                        Lamar <ExternalLink className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Detail Modal */}
      {selectedAlumni && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedAlumni(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAlumni(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 dark:bg-slate-900/90 rounded-full flex items-center justify-center hover:bg-white shadow-lg"
            >
              ✕
            </button>
            <div className="grid md:grid-cols-3">
              <div className="relative aspect-[3/4] md:aspect-auto md:h-full">
                <Image
                  src={selectedAlumni.image}
                  alt={selectedAlumni.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-2 p-8">
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  Angkatan {selectedAlumni.graduationYear}
                </span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                  {selectedAlumni.name}
                </h2>
                <p className="text-lg font-bold text-slate-600 dark:text-slate-400 mb-6">
                  {selectedAlumni.currentPosition}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Pendidikan</h4>
                  <p className="text-slate-600 dark:text-slate-400">{selectedAlumni.education}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Pencapaian</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{selectedAlumni.achievement}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedAlumni.highlights.map((highlight, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8 p-6 bg-purple-50 dark:bg-purple-950/30 rounded-xl border-l-4 border-purple-600">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Testimoni</h4>
                  <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    &ldquo;{selectedAlumni.quote}&rdquo;
                  </p>
                </div>

                <div className="flex gap-4">
                  {selectedAlumni.social.instagram && (
                    <a href={`https://instagram.com/${selectedAlumni.social.instagram}`} className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </a>
                  )}
                  {selectedAlumni.social.linkedin && (
                    <a href={`https://linkedin.com/in/${selectedAlumni.social.linkedin}`} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-standard bg-gradient-to-r from-purple-600 to-purple-800 text-white relative overflow-hidden">
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
              Alumni YAPIM? Mari Terhubung!
            </h2>
            <p className="text-purple-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Bergabunglah dengan komunitas alumni dan jadilah bagian dari jaringan profesional kami
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="https://instagram.com/alumniyapim" className="inline-flex items-center px-10 py-5 bg-white text-purple-900 font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-purple-50 shadow-2xl">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Ikuti Instagram Alumni
              </a>
              <Link href="/kontak" className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-white hover:text-purple-900">
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
