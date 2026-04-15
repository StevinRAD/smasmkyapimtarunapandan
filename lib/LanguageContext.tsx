"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    "nav.about": "Tentang YAPIM",
    "nav.academic": "Pendidikan & Akademik",
    "nav.life": "Kehidupan Siswa",
    "nav.news": "Berita & Pengumuman",
    "nav.admission": "Penerimaan",
    "nav.alumni": "Alumni & Karir",
    "nav.staff": "Guru & Staf",
    "hero.badge": "Selamat Datang di Portal Resmi",
    "hero.title": "Membangun Generasi Unggul & Berkarakter",
    "hero.subtitle": "SMA-SMKS YAPIM Taruna Pandan didedikasikan untuk mencetak pemimpin masa depan melalui pendidikan berkualitas tinggi, integritas moral, dan wawasan global.",
    "cta.primary": "Kenali Kami Lebih Dekat",
    "cta.secondary": "Jelajahi Fasilitas",
    "welcome.badge": "Sambutan Kepala Sekolah",
    "welcome.title": "Berdedikasi untuk Keunggulan Pendidikan Sumatera Utara",
    "welcome.subtitle": "Visi kami adalah membentuk pemimpin masa depan yang kompeten dan religius.",
    "welcome.quote": "Pendidikan bukan sekadar transfer ilmu, melainkan proses panjang dalam membentuk karakter, etika, dan landasan moral generasi masa depan.",
    "welcome.name": "Parunggulan Tobing",
    "welcome.role": "Kepala Sekolah SMA-SMKS YAPIM",
    "stats.title": "Pencapaian Institusi",
    "stats.students": "Siswa Aktif",
    "stats.alumni": "Alumni Sukses",
    "stats.staff": "Guru & Staf",
    "stats.graduation": "Tingkat Kelulusan",
    "footer.desc": "Lembaga pendidikan menengah atas terkemuka di Sumatera Utara yang berdedikasi menghasilkan lulusan dengan keunggulan akademik, karakter mulia, dan wawasan global.",
    "footer.links": "Tautan Cepat",
    "footer.services": "Layanan Online",
    "footer.contact": "Hubungi Kami",
    "lang.switch": "English",
  },
  en: {
    "nav.about": "About YAPIM",
    "nav.academic": "Education & Academic",
    "nav.life": "Student Life",
    "nav.news": "News & Announcements",
    "nav.admission": "Admission",
    "nav.alumni": "Alumni & Career",
    "nav.staff": "Teachers & Staff",
    "hero.badge": "Welcome to the Official Portal",
    "hero.title": "Building Excellent & Characterful Generations",
    "hero.subtitle": "SMA-SMKS YAPIM Taruna Pandan is dedicated to producing future leaders through high-quality education, moral integrity, and global insight.",
    "cta.primary": "Get to Know Us Closer",
    "cta.secondary": "Explore Facilities",
    "welcome.badge": "Principal's Welcome",
    "welcome.title": "Dedicated to Educational Excellence in North Sumatra",
    "welcome.subtitle": "Our vision is to form competent and religious future leaders.",
    "welcome.quote": "Education is not just a transfer of knowledge, but a long process in forming the character, ethics, and moral foundation of future generations.",
    "welcome.name": "Parunggulan Tobing",
    "welcome.role": "Principal of SMA-SMKS YAPIM",
    "stats.title": "Institutional Achievements",
    "stats.students": "Active Students",
    "stats.alumni": "Successful Alumni",
    "stats.staff": "Teachers & Staff",
    "stats.graduation": "Graduation Rate",
    "footer.desc": "A leading senior high school in North Sumatra dedicated to producing graduates with academic excellence, noble character, and global insight.",
    "footer.links": "Quick Links",
    "footer.services": "Online Services",
    "footer.contact": "Contact Us",
    "lang.switch": "Bahasa Indonesia",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations["id"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
