"use client";

import { motion } from "framer-motion";
import { BookOpen, Search, Clock, Users, BookmarkCheck, ExternalLink, Library, BookMarked, FileText, Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function PerpustakaanContent() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Search,
      title: t("perpustakaan.features.search"),
      description: t("perpustakaan.features.searchDesc"),
      color: "blue"
    },
    {
      icon: BookMarked,
      title: t("perpustakaan.features.ebook"),
      description: t("perpustakaan.features.ebookDesc"),
      color: "emerald"
    },
    {
      icon: FileText,
      title: t("perpustakaan.features.journal"),
      description: t("perpustakaan.features.journalDesc"),
      color: "purple"
    },
    {
      icon: BookmarkCheck,
      title: t("perpustakaan.features.borrowing"),
      description: t("perpustakaan.features.borrowingDesc"),
      color: "amber"
    },
    {
      icon: Clock,
      title: t("perpustakaan.features.access247"),
      description: t("perpustakaan.features.access247Desc"),
      color: "rose"
    },
    {
      icon: Users,
      title: t("perpustakaan.features.recommendation"),
      description: t("perpustakaan.features.recommendationDesc"),
      color: "cyan"
    }
  ];

  const collections = [
    { category: t("perpustakaan.collection.books"), count: "500+", icon: BookOpen },
    { category: t("perpustakaan.collection.journals"), count: "200+", icon: FileText },
    { category: t("perpustakaan.collection.thesis"), count: "100+", icon: BookMarked },
    { category: t("perpustakaan.collection.general"), count: "300+", icon: Globe }
  ];

  const rules = [
    {
      title: t("perpustakaan.rules.card"),
      content: t("perpustakaan.rules.cardDesc")
    },
    {
      title: t("perpustakaan.rules.period"),
      content: t("perpustakaan.rules.periodDesc")
    },
    {
      title: t("perpustakaan.rules.fine"),
      content: t("perpustakaan.rules.fineDesc")
    },
    {
      title: t("perpustakaan.rules.limit"),
      content: t("perpustakaan.rules.limitDesc")
    }
  ];

  const hours = [
    { day: t("perpustakaan.hours.monThu"), time: t("perpustakaan.hours.monThuTime") },
    { day: t("perpustakaan.hours.fri"), time: t("perpustakaan.hours.friTime") },
    { day: t("perpustakaan.hours.sat"), time: t("perpustakaan.hours.satTime") },
    { day: t("perpustakaan.hours.sun"), time: t("perpustakaan.hours.sunTime") }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 via-teal-800 to-slate-900 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <Library className="w-5 h-5 mr-3" />
            {t("perpustakaan.hero.badge")}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            {t("perpustakaan.hero.title")}
            <br />{t("perpustakaan.hero.title2")}
          </h1>

          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            {t("perpustakaan.hero.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-standard bg-gradient-to-r from-cyan-600 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 4px 4px, rgba(255,255,255,0.5) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">1,100+</div>
              <div className="text-cyan-200 text-sm uppercase tracking-widest">{t("perpustakaan.stats.collection")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">24/7</div>
              <div className="text-cyan-200 text-sm uppercase tracking-widest">{t("perpustakaan.stats.access")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">4</div>
              <div className="text-cyan-200 text-sm uppercase tracking-widest">{t("perpustakaan.stats.categories")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">Gratis</div>
              <div className="text-cyan-200 text-sm uppercase tracking-widest">{t("perpustakaan.stats.free")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              {t("perpustakaan.features.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              {t("perpustakaan.features.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              {t("perpustakaan.features.subtitle")}
            </p>
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

          {/* Collections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 text-center">{t("perpustakaan.collection.title")}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {collections.map((collection, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-5 text-center">
                  <collection.icon className="w-10 h-10 text-cyan-600 mx-auto mb-3" />
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{collection.category}</h4>
                  <p className="text-2xl font-black text-cyan-600">{collection.count}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rules & Hours */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Rules */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center">
                <BookmarkCheck className="w-8 h-8 mr-3 text-cyan-600" />
                {t("perpustakaan.rules.badge")}
              </h3>
              <div className="space-y-4">
                {rules.map((rule, index) => (
                  <div key={index} className="card-elevated p-5">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">{rule.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{rule.content}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center">
                <Clock className="w-8 h-8 mr-3 text-teal-600" />
                {t("perpustakaan.hours.badge")}
              </h3>
              <div className="space-y-3">
                {hours.map((schedule, index) => (
                  <div key={index} className="card-elevated p-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">{schedule.day}</h4>
                    </div>
                    <div className="text-teal-600 dark:text-teal-400 font-bold">{schedule.time}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-5 bg-teal-100 dark:bg-teal-900/30 rounded-xl border border-teal-200 dark:border-teal-800">
                <p className="text-sm text-teal-800 dark:text-teal-200">
                  <strong>{t("perpustakaan.hours.note")}:</strong> {t("perpustakaan.hours.noteDesc")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-standard bg-gradient-to-r from-cyan-600 to-teal-700 text-white relative overflow-hidden">
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
            <Library className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              {t("perpustakaan.cta.title")}
            </h2>
            <p className="text-cyan-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              {t("perpustakaan.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button
                onClick={() => alert('Perpustakaan Digital akan segera tersedia. Hubungi admin sekolah untuk informasi lebih lanjut.')}
                className="inline-flex items-center px-10 py-5 bg-white text-cyan-900 font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-cyan-50 shadow-2xl"
              >
                <ExternalLink className="w-5 h-5 mr-3" />
                {t("perpustakaan.cta.access")}
              </button>
              <Link
                href="/bantuan"
                className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-white hover:text-cyan-900"
              >
                {t("perpustakaan.cta.help")}
              </Link>
            </div>
            <p className="text-cyan-200 text-sm mt-6">
              {t("perpustakaan.cta.comingSoon")}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
