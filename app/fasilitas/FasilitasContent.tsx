"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Award, Building2, Monitor, Wrench, Dumbbell, Coffee, TreePine, Wifi, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const facilityCategories = [
  {
    id: "all",
    name: "Semua",
    icon: Building2
  },
  {
    id: "akademik",
    name: "Akademik",
    icon: BookOpen
  },
  {
    id: "lab",
    name: "Laboratorium",
    icon: Monitor
  },
  {
    id: "olahraga",
    name: "Olahraga",
    icon: Dumbbell
  },
  {
    id: "ibadah",
    name: "Ibadah",
    icon: Award
  },
  {
    id: "lainnya",
    name: "Lainnya",
    icon: Coffee
  }
];

const facilities = [
  // Akademik
  {
    id: 1,
    name: "Ruang Kelas",
    category: "akademik",
    description: "36 ruang kelas ber-AC dengan proyektor, sound system, dan koneksi WiFi untuk kenyamanan belajar",
    icon: Users,
    specs: ["Kapasitas 32 siswa", "Full AC", "Proyektor HDMI", "Sound System", "WiFi Kecepatan Tinggi"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Perpustakaan Digital",
    category: "akademik",
    description: "Perpustakaan dengan ribuan koleksi buku fisik dan digital, ruang baca nyaman, dan akses e-resources",
    icon: BookOpen,
    specs: ["5.000+ Buku Fisik", "E-Book Resources", "Ruang Baca AC", "WiFi", "Pinjam Laptop"],
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1000&auto=format&fit=crop"
  },
  // Laboratorium
  {
    id: 3,
    name: "Lab Komputer",
    category: "lab",
    description: "3 laboratorium komputer dengan spesifikasi tinggi untuk praktikum RPL dan TKJ",
    icon: Monitor,
    specs: ["90+ Unit PC", "Monitor 24\"", "Software Licensed", "Internet Dedicated", "Projector"],
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a78f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Lab IPA",
    category: "lab",
    description: "Laboratorium fisika, kimia, dan biologi dengan peralatan lengkap untuk praktikum sains",
    icon: Monitor,
    specs: ["Peralatan Lengkap", "Bahan Kimia", "Microscope", "Safety Equipment", "AC"],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Lab Bahasa",
    category: "lab",
    description: "Laboratorium bahasa dengan audio system dan software pembelajaran bahasa modern",
    icon: Monitor,
    specs: ["30 Booth", "Audio System", "Headset Individual", "Software TOEFL", "Recording"],
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Bengkel Otomotif",
    category: "lab",
    description: "Bengkel modern untuk praktik TKR dan TBSM dengan peralatan standar industri",
    icon: Wrench,
    specs: ["Hydraulic Lift", "Scanner Tool", "Bor Pres", "Kompresor", "Safety Gear"],
    image: "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Dapur Kuliner",
    category: "lab",
    description: "Dapur standar hotel untuk praktik tata boga dan pastry dengan peralatan lengkap",
    icon: Monitor,
    specs: ["Oven Komersial", "Refrigerator", "Stainless Steel", "Bakery Area", "Safety Standard"],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop"
  },
  // Olahraga
  {
    id: 8,
    name: "Lapangan Basket",
    category: "olahraga",
    description: "Lapangan basket indoor standar kompetisi dengan tribun dan pencahayaan memadai",
    icon: Dumbbell,
    specs: ["Standar FIBA", "Tribun 500 Kursi", "Scoreboard Digital", "P VC Flooring", "LED Lighting"],
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Lapangan Futsal",
    category: "olahraga",
    description: "Lapangan futsal indoor dengan rumput sintetis berkualitas untuk kegiatan ekstrakurikuler",
    icon: Dumbbell,
    specs: ["Rumput Sintetis", "PVC Fence", "Scoreboard", "Locker Room", "Shower"],
    image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 10,
    name: "Gedung Serbaguna",
    category: "olahraga",
    description: "Gedung serbaguna untuk upacara, pentas seni, dan event besar dengan kapasitas 1000 orang",
    icon: Users,
    specs: ["Kapasitas 1000", "Stage & Sound", "AC Central", "Lighting System", "Parking Luas"],
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop"
  },
  // Ibadah
  {
    id: 11,
    name: "Masjid Sekolah",
    category: "ibadah",
    description: "Masjid luas dan nyaman untuk ibadah sholat berjamaah dan kegiatan keagamaan",
    icon: Award,
    specs: ["Kapasitas 300", "Air Wudhu", "Karpet Premium", "Sound System", "AC"],
    image: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=1000&auto=format&fit=crop"
  },
  // Lainnya
  {
    id: 12,
    name: "Kantin Sehat",
    category: "lainnya",
    description: "Kantin dengan menu sehat, higienis, dan terjangkau untuk siswa dan guru",
    icon: Coffee,
    specs: ["30+ Stan Makanan", "Area Indoor", "Area Outdoor", "Mushola", "WiFi"],
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 13,
    name: "Taman Sekolah",
    category: "lainnya",
    description: "Taman asri dengan pepohonan rindang untuk area istirahat dan diskusi santai",
    icon: TreePine,
    specs: ["Taman Rindang", "Bangku Santai", "Jogging Track", "Area Foto", "Lampu Hias"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 14,
    name: "Ruang Kesehatan",
    category: "lainnya",
    description: "UKS dengan peralatan medis dasar dan perawat standby untuk pertolongan pertama",
    icon: ShieldCheck,
    specs: ["Perawat Standby", "P3K Lengkap", "Bed Rest", "AC", "Konseling"],
    image: "https://images.unsplash.com/photo-1584515933487-9bfa9dc72de3?q=80&w=1000&auto=format&fit=crop"
  }
];

const facilityStats = [
  { value: "36", label: "Ruang Kelas", icon: Users },
  { value: "7", label: "Laboratorium", icon: Monitor },
  { value: "3", label: "Lapangan Olahraga", icon: Dumbbell },
  { value: "1", label: "Masjid", icon: Award }
];

export default function FasilitasContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedFacility, setSelectedFacility] = useState<typeof facilities[0] | null>(null);

  const filteredFacilities = activeCategory === "all"
    ? facilities
    : facilities.filter(f => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <Image
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2070&auto=format&fit=crop"
          alt="School Facilities"
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
            <Building2 className="w-5 h-5 mr-3" />
            Sarana & Prasarana
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
            Fasilitas Sekolah
          </h1>

          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed font-medium">
            Fasilitas lengkap dan modern untuk mendukung proses pembelajaran yang optimal dan nyaman
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
            {facilityStats.map((stat, index) => (
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

      {/* Filter Section */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Kategori
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Jelajahi Fasilitas
            </h2>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {facilityCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/20'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFacilities.map((facility) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
                onClick={() => setSelectedFacility(facility)}
              >
                <div className="card-elevated overflow-hidden h-full hover:border-purple-200 dark:hover:border-purple-900">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      fill
                      src={facility.image}
                      alt={facility.name}
                      className="object-cover transform group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                        {facilityCategories.find(c => c.id === facility.category)?.name}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <facility.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                        {facility.name}
                      </h3>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {facility.description}
                    </p>

                    <div className="flex items-center text-purple-600 dark:text-purple-400 font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                      Lihat Detail <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="section-spacious bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Teknologi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Fasilitas Digital
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Wifi,
                title: "WiFi High Speed",
                description: "Koneksi internet berkecepatan tinggi di seluruh area sekolah untuk akses pembelajaran online"
              },
              {
                icon: Monitor,
                title: "Smart Classroom",
                description: "Ruang kelas cerdas dengan integrasi teknologi untuk pembelajaran interaktif"
              },
              {
                icon: ShieldCheck,
                title: "CCTV Security",
                description: "Sistem pengawasan keamanan 24 jam untuk kenyamanan dan keamanan seluruh warga sekolah"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-elevated p-8 h-full text-center">
                  <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedFacility(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                fill
                src={selectedFacility.image}
                alt={selectedFacility.name}
                className="object-cover"
              />
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-slate-900/90 rounded-full flex items-center justify-center hover:bg-white"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                  <selectedFacility.icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                  {selectedFacility.name}
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
                {selectedFacility.description}
              </p>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Spesifikasi</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedFacility.specs.map((spec, index) => (
                    <div key={index} className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
                      <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{spec}</span>
                    </div>
                  ))}
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
              Ingin Melihat Langsung?
            </h2>
            <p className="text-purple-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Jadwalkan kunjungan ke sekolah kami dan lihat sendiri fasilitas lengkap yang kami sediakan
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/kontak" className="inline-flex items-center px-10 py-5 bg-white text-purple-900 font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-purple-50 shadow-2xl group">
                Jadwalkan Kunjungan <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <Link href="/ppdb" className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-white hover:text-purple-900">
                Daftar Sekarang
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
