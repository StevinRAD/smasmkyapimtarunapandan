"use client";

import { motion } from "framer-motion";
import { Play, FileText, MessageSquare, Trophy, Clock, Users, Laptop, ExternalLink, BookOpen, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function ElearningContent() {
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: t("elearning.features.digitalMaterials"),
      description: t("elearning.features.digitalMaterialsDesc"),
      color: "blue"
    },
    {
      icon: FileText,
      title: t("elearning.features.quiz"),
      description: t("elearning.features.quizDesc"),
      color: "emerald"
    },
    {
      icon: MessageSquare,
      title: t("elearning.features.forum"),
      description: t("elearning.features.forumDesc"),
      color: "purple"
    },
    {
      icon: Trophy,
      title: t("elearning.features.tracking"),
      description: t("elearning.features.trackingDesc"),
      color: "amber"
    },
    {
      icon: Clock,
      title: t("elearning.features.flexible"),
      description: t("elearning.features.flexibleDesc"),
      color: "rose"
    },
    {
      icon: Users,
      title: t("elearning.features.interactive"),
      description: t("elearning.features.interactiveDesc"),
      color: "cyan"
    }
  ];

  const benefits = [
    t("elearning.benefits.b1"),
    t("elearning.benefits.b2"),
    t("elearning.benefits.b3"),
    t("elearning.benefits.b4"),
    t("elearning.benefits.b5"),
    t("elearning.benefits.b6")
  ];

  const loginGuide = [
    {
      title: t("elearning.guide.forStudents"),
      steps: [t("elearning.guide.studentStep1"), t("elearning.guide.studentStep2"), t("elearning.guide.studentStep3")]
    },
    {
      title: t("elearning.guide.forTeachers"),
      steps: [t("elearning.guide.teacherStep1"), t("elearning.guide.teacherStep2"), t("elearning.guide.teacherStep3")]
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-700 via-orange-700 to-slate-900 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <Laptop className="w-5 h-5 mr-3" />
            {t("elearning.hero.badge")}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            {t("elearning.hero.title")}
            <br />{t("elearning.hero.title2")}
          </h1>

          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            {t("elearning.hero.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-standard bg-gradient-to-r from-amber-600 to-orange-700 text-white relative overflow-hidden">
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
              <div className="text-amber-200 text-sm uppercase tracking-widest">{t("elearning.stats.materials")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">500+</div>
              <div className="text-amber-200 text-sm uppercase tracking-widest">{t("elearning.stats.students")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">24/7</div>
              <div className="text-amber-200 text-sm uppercase tracking-widest">{t("elearning.stats.access")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">100%</div>
              <div className="text-amber-200 text-sm uppercase tracking-widest">{t("elearning.stats.online")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              {t("elearning.about.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              {t("elearning.about.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              {t("elearning.about.desc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-elevated p-8"
            >
              <Play className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{t("elearning.about.forStudents")}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {t("elearning.about.forStudentsDesc")}
              </p>
              <ul className="space-y-2">
                {["Materi lengkap per mata pelajaran", "Quiz dengan feedback instan", "Forum diskusi interaktif", "Progress tracking"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-elevated p-8"
            >
              <BookOpen className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{t("elearning.about.forTeachers")}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {t("elearning.about.forTeachersDesc")}
              </p>
              <ul className="space-y-2">
                {["Upload materi berbagai format", "Buat quiz dan assignment", "Monitoring progress siswa", "Analisis performa kelas"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              {t("elearning.features.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              {t("elearning.features.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-6 text-center"
              >
                <div className={`w-16 h-16 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-black mb-6">{t("elearning.benefits.title")}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Login Guide */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              {t("elearning.guide.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              {t("elearning.guide.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {loginGuide.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-6"
              >
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 flex items-center">
                  {guide.title}
                </h3>
                <ul className="space-y-3">
                  {guide.steps.map((step, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-6 h-6 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-bold text-amber-600 dark:text-amber-400">{i + 1}</span>
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">{step}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-standard bg-gradient-to-r from-amber-600 to-orange-700 text-white relative overflow-hidden">
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
            <Laptop className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              {t("elearning.cta.title")}
            </h2>
            <p className="text-amber-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              {t("elearning.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button
                onClick={() => alert('Platform E-Learning akan segera tersedia. Hubungi admin sekolah untuk informasi lebih lanjut.')}
                className="inline-flex items-center px-10 py-5 bg-white text-amber-900 font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-amber-50 shadow-2xl"
              >
                <ExternalLink className="w-5 h-5 mr-3" />
                {t("elearning.cta.access")}
              </button>
              <Link
                href="/bantuan"
                className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-white hover:text-amber-900"
              >
                {t("elearning.cta.help")}
              </Link>
            </div>
            <p className="text-amber-200 text-sm mt-6">
              {t("elearning.cta.comingSoon")}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
