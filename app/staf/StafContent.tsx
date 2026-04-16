"use client";

import { motion } from "framer-motion";
import { Users, Award, GraduationCap, BookOpen, Target, Mail, Phone, MapPin, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const departments = [
  { id: "all", name: "Semua", icon: Users },
  { id: "pimpinan", name: "Pimpinan", icon: Award },
  { id: "guru-sma", name: "Guru SMA", icon: GraduationCap },
  { id: "guru-smk", name: "Guru SMK", icon: BookOpen },
  { id: "staff", name: "Staff", icon: Target }
];

const staffData = [
  // Pimpinan
  {
    id: 1,
    name: "Parunggulan Tobing, S.Pd",
    position: "Kepala Sekolah",
    department: "pimpinan",
    departmentName: "Pimpinan",
    education: "S1 Pendidikan - Universitas Negeri Medan",
    experience: "25 Tahun",
    nip: "196805151992031002",
    email: "kepsek@yapim-pandan.sch.id",
    phone: "081234567890",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    expertise: [
      "Strategi Pendidikan",
      "Kepemimpinan Institusi",
      "Manajemen Sekolah"
    ]
  },
  {
    id: 2,
    name: "Drs. Suryanto Damanik",
    position: "Wakil Kepala Sekolah Bidang Kurikulum",
    department: "pimpinan",
    departmentName: "Pimpinan",
    education: "S2 Pendidikan - Universitas Negeri Medan",
    experience: "20 Tahun",
    nip: "197006101995031002",
    email: "wakilkurikulum@yapim-pandan.sch.id",
    phone: "081234567891",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    expertise: [
      "Pengembangan Kurikulum",
      "Evaluasi Pembelajaran",
      "Supervisi Akademik"
    ]
  },
  {
    id: 3,
    name: "Maria Br. Sembiring, S.Pd, M.Pd",
    position: "Wakil Kepala Sekolah Bidang Kesiswaan",
    department: "pimpinan",
    departmentName: "Pimpinan",
    education: "S2 Manajemen Pendidikan - Universitas Negeri Medan",
    experience: "18 Tahun",
    nip: "197511152000122001",
    email: "wakilsiswa@yapim-pandan.sch.id",
    phone: "081234567892",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    expertise: [
      "Bimbingan Konseling",
      "Pengembangan Karakter",
      "Kesiswaan"
    ]
  },
  // Guru SMA
  {
    id: 4,
    name: "Drs. Budi Santoso",
    position: "Guru Matematika",
    department: "guru-sma",
    departmentName: "Guru SMA",
    education: "S1 Pendidikan Matematika - IKIP Medan",
    experience: "22 Tahun",
    nip: "196902121994021001",
    email: "budi.santoso@yapim-pandan.sch.id",
    phone: "081234567893",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    expertise: [
      "Matematika SMA",
      "Persiapan SBMPTN",
      "Olimpiade Matematika"
    ]
  },
  {
    id: 5,
    name: "Dra. Sri Wahyuni, M.Si",
    position: "Guru Biologi",
    department: "guru-sma",
    departmentName: "Guru SMA",
    education: "S2 Biologi - Institut Pertanian Bogor",
    experience: "19 Tahun",
    nip: "197604152001122002",
    email: "sri.wahyuni@yapim-pandan.sch.id",
    phone: "081234567894",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=800&auto=format&fit=crop",
    expertise: [
      "Biologi SMA",
      "Praktikum IPA",
      "OSN Biologi"
    ]
  },
  {
    id: 6,
    name: "Ahmad Fauzi, S.Pd, M.Hum",
    position: "Guru Bahasa Inggris",
    department: "guru-sma",
    departmentName: "Guru SMA",
    education: "S2 Linguistik - Universitas Negeri Medan",
    experience: "15 Tahun",
    nip: "198009122006011005",
    email: "ahmad.fauzi@yapim-pandan.sch.id",
    phone: "081234567895",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    expertise: [
      "Bahasa Inggris SMA",
      "TOEFL Preparation",
      "English Club"
    ]
  },
  // Guru SMK
  {
    id: 7,
    name: "Ir. Hendra Wijaya, M.Kom",
    position: "Guru Produktif RPL",
    department: "guru-smk",
    departmentName: "Guru SMK",
    education: "S2 Teknik Informatika - Institut Teknologi Bandung",
    experience: "16 Tahun",
    nip: "197810152005011002",
    email: "hendra.wijaya@yapim-pandan.sch.id",
    phone: "081234567896",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    expertise: [
      "Pemrograman Web",
      "Database System",
      "Mobile Development"
    ]
  },
  {
    id: 8,
    name: "Rudi Hartono, S.T",
    position: "Guru Produktif TKR",
    department: "guru-smk",
    departmentName: "Guru SMK",
    education: "S1 Teknik Mesin - Universitas Sumatera Utara",
    experience: "14 Tahun",
    nip: "198209072009011004",
    email: "rudi.hartono@yapim-pandan.sch.id",
    phone: "081234567897",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    expertise: [
      "Mesin Otomotif",
      "Kelistrikan Body",
      "Sistem Rem"
    ]
  },
  {
    id: 9,
    name: "Maya Sari, S.E, Ak",
    position: "Guru Produktif AKL",
    department: "guru-smk",
    departmentName: "Guru SMK",
    education: "S1 Akuntansi - Universitas Negeri Medan",
    experience: "12 Tahun",
    nip: "198812152012022003",
    email: "maya.sari@yapim-pandan.sch.id",
    phone: "081234567898",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
    expertise: [
      "Akuntansi Keuangan",
      "Perpajakan",
      "Software Akuntansi"
    ]
  },
  // Staff
  {
    id: 10,
    name: "Bambang Sutrisno",
    position: "Kepala Tata Usaha",
    department: "staff",
    departmentName: "Staff",
    education: "D3 Administrasi - Universitas Negeri Medan",
    experience: "20 Tahun",
    nip: "197205011998021001",
    email: "tu@yapim-pandan.sch.id",
    phone: "081234567899",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    expertise: [
      "Administrasi",
      "Kearsipan",
      "Pelayanan"
    ]
  },
  {
    id: 11,
    name: "Rina Marlina, A.Md",
    position: "Staff Perpustakaan",
    department: "staff",
    departmentName: "Staff",
    education: "D3 Perpustakaan - Universitas Negeri Medan",
    experience: "8 Tahun",
    nip: "199001152018022005",
    email: "perpus@yapim-pandan.sch.id",
    phone: "081234567900",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    expertise: [
      "Pengelolaan Buku",
      "Pelayanan Sirkulasi",
      "Digital Library"
    ]
  },
  {
    id: 12,
    name: "Agus Prasetyo, S.Kom",
    position: "Staff IT",
    department: "staff",
    departmentName: "Staff",
    education: "S1 Teknik Informatika - Universitas Negeri Medan",
    experience: "10 Tahun",
    nip: "198603202012011004",
    email: "it@yapim-pandan.sch.id",
    phone: "081234567901",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop",
    expertise: [
      "Jaringan & Server",
      "Website Sekolah",
      "Technical Support"
    ]
  }
];

const staffStats = [
  { value: "45", label: "Guru SMA", icon: GraduationCap },
  { value: "38", label: "Guru SMK", icon: BookOpen },
  { value: "12", label: "Staff Admin", icon: Users },
  { value: "95%", label: "Sertifikasi", icon: Award }
];

export default function StafContent() {
  const [activeDepartment, setActiveDepartment] = useState("all");
  const [selectedStaff, setSelectedStaff] = useState<typeof staffData[0] | null>(null);

  const filteredStaff = activeDepartment === "all"
    ? staffData
    : staffData.filter(s => s.department === activeDepartment);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
          alt="Guru & Staff"
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
            <Users className="w-5 h-5 mr-3" />
            Tenaga Pendidik
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
            Guru & Staff
          </h1>

          <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed font-medium">
            Tim pendidik profesional yang berdedikasi mencetak generasi unggul dan berkarakter
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-standard bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 3px 3px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {staffStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-emerald-200" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <p className="text-emerald-200 font-bold uppercase tracking-wider text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-standard bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeDepartment === dept.id
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/20'
                }`}
              >
                <dept.icon className="w-4 h-4 mr-2" />
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
              Tim Kami ({filteredStaff.length})
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredStaff.map((staff) => (
              <motion.div
                key={staff.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
                onClick={() => setSelectedStaff(staff)}
              >
                <div className="card-elevated overflow-hidden h-full hover:border-emerald-200 dark:hover:border-emerald-900">
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      fill
                      src={staff.image}
                      alt={staff.name}
                      className="object-cover transform group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                        {staff.departmentName}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                      {staff.name}
                    </h3>
                    <p className="text-sm font-bold text-slate-600 dark:text-slate-400 mb-3">
                      {staff.position}
                    </p>

                    <div className="space-y-2 text-xs text-slate-500 dark:text-slate-500">
                      <div className="flex items-center">
                        <GraduationCap className="w-3 h-3 mr-2" />
                        <span className="line-clamp-1">{staff.education}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-3 h-3 mr-2" />
                        <span>{staff.experience} Pengalaman</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedStaff && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedStaff(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedStaff(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 dark:bg-slate-900/90 rounded-full flex items-center justify-center hover:bg-white shadow-lg"
              >
                ✕
              </button>
              <div className="grid md:grid-cols-3">
                <div className="relative aspect-[3/4] md:aspect-auto md:h-full">
                  <Image
                    src={selectedStaff.image}
                    alt={selectedStaff.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-8">
                  <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    {selectedStaff.departmentName}
                  </span>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                    {selectedStaff.name}
                  </h2>
                  <p className="text-xl font-bold text-slate-600 dark:text-slate-400 mb-6">
                    {selectedStaff.position}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">NIP</h4>
                      <p className="text-slate-600 dark:text-slate-400">{selectedStaff.nip}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Pengalaman</h4>
                      <p className="text-slate-600 dark:text-slate-400">{selectedStaff.experience}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Pendidikan</h4>
                    <p className="text-slate-600 dark:text-slate-400">{selectedStaff.education}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Keahlian</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedStaff.expertise.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <a href={`mailto:${selectedStaff.email}`} className="flex items-center p-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/20 transition">
                      <Mail className="w-5 h-5 text-emerald-600 mr-3" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{selectedStaff.email}</span>
                    </a>
                    <a href={`tel:${selectedStaff.phone}`} className="flex items-center p-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/20 transition">
                      <Phone className="w-5 h-5 text-emerald-600 mr-3" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{selectedStaff.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

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
              Bergabunglah Bersama Kami
            </h2>
            <p className="text-emerald-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Kami senantiasa mencari tenaga pendidik berdedikasi untuk bergabung dengan keluarga besar YAPIM
            </p>

            <Link href="/kontak" className="inline-flex items-center px-10 py-5 bg-white text-emerald-900 font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-emerald-50 shadow-2xl">
              Lihat Lowongan <Users className="ml-3 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
