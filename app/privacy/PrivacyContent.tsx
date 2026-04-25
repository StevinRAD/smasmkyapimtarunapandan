"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock, UserCheck, Mail, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function PrivacyContent() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <Shield className="w-5 h-5 mr-3" />
            {t("privacy.hero.badge")}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            {t("privacy.hero.title")}
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t("privacy.hero.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 p-6 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"
          >
            <p className="text-slate-600 dark:text-slate-400">
              <strong>{t("privacy.lastUpdated")}:</strong> Januari 2025
            </p>
          </motion.div>

          {/* Section 1: Pendahuluan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                {t("privacy.intro.title")}
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
              <p>
                {t("privacy.intro.p1")}
              </p>
              <p>
                {t("privacy.intro.p2")}
              </p>
            </div>
          </motion.div>

          {/* Section 2: Data yang Dikumpulkan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mr-4">
                <UserCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                {t("privacy.data.title")}
              </h2>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">{t("privacy.data.personal")}</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                  <li>Nama lengkap</li>
                  <li>Alamat email</li>
                  <li>Nomor telepon</li>
                  <li>Alamat rumah</li>
                  <li>Informasi pendidikan</li>
                  <li>Data pendaftaran (PPDB)</li>
                </ul>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">{t("privacy.data.auto")}</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                  <li>Alamat IP</li>
                  <li>Jenis browser</li>
                  <li>Perangkat yang digunakan</li>
                  <li>Halaman yang dikunjungi</li>
                  <li>Waktu akses</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Section 3: Penggunaan Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mr-4">
                <Lock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                {t("privacy.usage.title")}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t("privacy.usage.education")}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t("privacy.usage.eduDesc")}</p>
              </div>
              <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t("privacy.usage.communication")}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t("privacy.usage.commDesc")}</p>
              </div>
              <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t("privacy.usage.registration")}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t("privacy.usage.regDesc")}</p>
              </div>
              <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t("privacy.usage.improvement")}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t("privacy.usage.impDesc")}</p>
              </div>
            </div>
          </motion.div>

          {/* Section 4: Hak Pengguna */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                {t("privacy.rights.title")}
              </h2>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <div className="flex items-start p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t("privacy.rights.access")}</h4>
                  <p className="text-sm">{t("privacy.rights.accessDesc")}</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t("privacy.rights.correct")}</h4>
                  <p className="text-sm">{t("privacy.rights.correctDesc")}</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t("privacy.rights.delete")}</h4>
                  <p className="text-sm">{t("privacy.rights.deleteDesc")}</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t("privacy.rights.reject")}</h4>
                  <p className="text-sm">{t("privacy.rights.rejectDesc")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 5: Keamanan Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-xl flex items-center justify-center mr-4">
                <Lock className="w-6 h-6 text-rose-600 dark:text-rose-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                {t("privacy.security.title")}
              </h2>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {t("privacy.security.desc")}:
              </p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  {t("privacy.security.encryption")}
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  {t("privacy.security.access")}
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  {t("privacy.security.audit")}
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  {t("privacy.security.backup")}
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Section 6: Kontak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                {t("privacy.contact.title")}
              </h2>
            </div>
            <div className="p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-white">
              <p className="text-lg mb-6">
                {t("privacy.contact.desc")}:
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>yapim_pandan@yahoo.com</span>
                </div>
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-3" />
                  <span>(0631) 372375</span>
                </div>
              </div>
              <Link
                href="/kontak"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-blue-50 transition-all shadow-xl"
              >
                {t("privacy.contact.button")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-standard bg-gradient-to-r from-slate-800 to-slate-900 text-white relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              {t("privacy.cta.title")}
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              {t("privacy.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/bantuan"
                className="inline-flex items-center px-10 py-5 bg-white text-slate-900 font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-slate-100 shadow-2xl"
              >
                {t("privacy.cta.help")}
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-white hover:text-slate-900"
              >
                {t("privacy.cta.contact")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
