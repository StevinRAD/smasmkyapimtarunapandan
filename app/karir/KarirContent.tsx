"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Award, GraduationCap, ArrowRight, CheckCircle, Building2 } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function KarirContent() {
  const { t } = useLanguage();

  const positions = [
    {
      title: "Guru Matematika",
      type: t("karir.positions.fullTime"),
      department: "SMA",
      requirements: ["S1 Pendidikan Matematika", "Memiliki sertifikat pendidik", "Pengalaman minimal 2 tahun"]
    },
    {
      title: "Guru Bahasa Inggris",
      type: t("karir.positions.fullTime"),
      department: "SMA & SMK",
      requirements: ["S1 Pendidikan Bahasa Inggris", "TOEFL/IELTS skor minimal", "Komunikatif dan kreatif"]
    },
    {
      title: "Guru Produk Kreatif",
      type: t("karir.positions.fullTime"),
      department: "SMK",
      requirements: ["S1 Desain Grafis/Multimedia", "Menguasai Adobe Creative Suite", "Portofolio karya"]
    },
    {
      title: "Staff Tata Usaha",
      type: t("karir.positions.fullTime"),
      department: "Administrasi",
      requirements: ["D3/S1 Administrasi", "Menguasai Microsoft Office", "Teliti dan terorganisir"]
    }
  ];

  const alumniBenefits = [
    { icon: Users, title: t("karir.alumni.networking"), description: t("karir.alumni.networkingDesc") },
    { icon: Briefcase, title: t("karir.alumni.career"), description: t("karir.alumni.careerDesc") },
    { icon: Award, title: t("karir.alumni.events"), description: t("karir.alumni.eventsDesc") },
    { icon: GraduationCap, title: t("karir.alumni.mentoring"), description: t("karir.alumni.mentoringDesc") }
  ];

  const testimonials = [
    {
      name: "Budi Santoso, S.Pd",
      year: "2015",
      role: "Guru Fisika",
      content: "Menjadi bagian dari YAPIM memberikan kesempatan untuk berkontribusi dalam mencetak generasi muda yang berkarakter."
    },
    {
      name: "Siti Rahayu, S.Kom",
      year: "2018",
      role: "Software Engineer",
      content: "Alumni YAPIM banyak yang sukses di berbagai bidang. Network alumni sangat membantu karir saya."
    },
    {
      name: "Ahmad Rizki, S.T.",
      year: "2016",
      role: "Wiraswasta",
      content: "Pendidikan di YAPIM memberikan modal kuat untuk entrepreneurship. Sekarang saya memiliki bisnis sendiri."
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <Briefcase className="w-5 h-5 mr-3" />
            {t("karir.hero.badge")}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            {t("karir.hero.title")}
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t("karir.hero.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-standard bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 4px 4px, rgba(255,255,255,0.5) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">50+</div>
              <div className="text-blue-200 text-sm uppercase tracking-widest">{t("karir.stats.teachers")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">1000+</div>
              <div className="text-blue-200 text-sm uppercase tracking-widest">{t("karir.stats.alumni")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">35</div>
              <div className="text-blue-200 text-sm uppercase tracking-widest">{t("karir.stats.experience")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">B</div>
              <div className="text-blue-200 text-sm uppercase tracking-widest">{t("karir.stats.accreditation")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              {t("karir.positions.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              {t("karir.positions.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              {t("karir.positions.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{position.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-full">
                        {position.type}
                      </span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">{position.department}</span>
                    </div>
                  </div>
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-3">{t("karir.positions.requirements")}:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="mailto:yapim_pandan@yahoo.com?subject=Lamaran {position.title}"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold hover:underline"
                >
                  {t("karir.positions.apply")} <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t("karir.positions.noPosition")}
            </p>
            <a
              href="mailto:yapim_pandan@yahoo.com?subject=Spontaneous Application"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:shadow-xl transition-all"
            >
              {t("karir.positions.spontan")}
            </a>
          </div>
        </div>
      </section>

      {/* Alumni Benefits */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              {t("karir.alumni.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              {t("karir.alumni.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              {t("karir.alumni.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumniBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-6 text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              {t("karir.testimonials.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              {t("karir.testimonials.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-6"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role} • Angkatan {testimonial.year}</p>
                </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              {t("karir.cta.title")}
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              {t("karir.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="mailto:yapim_pandan@yahoo.com?subject=Lamaran Pekerjaan"
                className="inline-flex items-center px-10 py-5 bg-white text-blue-900 font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-blue-50 shadow-2xl"
              >
                {t("karir.cta.apply")}
              </a>
              <Link
                href="/alumni"
                className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-white hover:text-blue-900"
              >
                {t("karir.cta.alumni")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
