"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, CheckCircle, ClipboardList, GraduationCap, LogIn, Shield, User, Clock } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function PortalSiswaContent() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Calendar,
      title: t("portal.features.schedule"),
      description: t("portal.features.scheduleDesc"),
      color: "blue"
    },
    {
      icon: ClipboardList,
      title: t("portal.features.grades"),
      description: t("portal.features.gradesDesc"),
      color: "emerald"
    },
    {
      icon: Clock,
      title: t("portal.features.attendance"),
      description: t("portal.features.attendanceDesc"),
      color: "amber"
    },
    {
      icon: BookOpen,
      title: t("portal.features.materials"),
      description: t("portal.features.materialsDesc"),
      color: "purple"
    },
    {
      icon: Shield,
      title: t("portal.features.erapor"),
      description: t("portal.features.eraporDesc"),
      color: "rose"
    },
    {
      icon: User,
      title: t("portal.features.profile"),
      description: t("portal.features.profileDesc"),
      color: "cyan"
    }
  ];

  const loginSteps = [
    {
      step: "1",
      title: t("portal.login.step1"),
      description: t("portal.login.step1Desc")
    },
    {
      step: "2",
      title: t("portal.login.step2"),
      description: t("portal.login.step2Desc")
    },
    {
      step: "3",
      title: t("portal.login.step3"),
      description: t("portal.login.step3Desc")
    },
    {
      step: "4",
      title: t("portal.login.step4"),
      description: t("portal.login.step4Desc")
    }
  ];

  const parentInfo = [
    {
      icon: CheckCircle,
      title: t("portal.parent.performance"),
      description: t("portal.parent.performanceDesc")
    },
    {
      icon: BookOpen,
      title: t("portal.parent.communication"),
      description: t("portal.parent.communicationDesc")
    },
    {
      icon: Calendar,
      title: t("portal.parent.calendar"),
      description: t("portal.parent.calendarDesc")
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-800 to-slate-900 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <GraduationCap className="w-5 h-5 mr-3" />
            {t("portal.hero.badge")}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            {t("portal.hero.title")}
          </h1>

          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            {t("portal.hero.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-standard bg-gradient-to-r from-purple-600 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 4px 4px, rgba(255,255,255,0.5) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">24/7</div>
              <div className="text-purple-200 text-sm uppercase tracking-widest">{t("portal.stats.access")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">500+</div>
              <div className="text-purple-200 text-sm uppercase tracking-widest">{t("portal.stats.students")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">6</div>
              <div className="text-purple-200 text-sm uppercase tracking-widest">{t("portal.stats.features")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">100%</div>
              <div className="text-purple-200 text-sm uppercase tracking-widest">{t("portal.stats.digital")}</div>
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
            <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Fitur Portal
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              {t("portal.features.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              {t("portal.features.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* How to Login */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              {t("portal.login.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              {t("portal.login.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              {t("portal.login.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {loginSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="card-elevated p-6">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-black text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                </div>
                {index < loginSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 border-t-2 border-r-2 border-purple-300 rotate-45"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-8 py-4 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-xl border border-amber-300 dark:border-amber-800"
            >
              <Shield className="w-5 h-5 mr-3" />
              <div className="text-left">
                <p className="font-bold">{t("portal.login.forgot")}</p>
                <p className="text-sm">{t("portal.login.forgotDesc")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parent Info */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              {t("portal.parent.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              {t("portal.parent.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              {t("portal.parent.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {parentInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-6"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">{info.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              {t("portal.cta.title")}
            </h2>
            <p className="text-purple-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              {t("portal.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button
                onClick={() => alert('Portal Siswa akan segera tersedia. Hubungi admin sekolah untuk informasi lebih lanjut.')}
                className="inline-flex items-center px-10 py-5 bg-white text-purple-900 font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-purple-50 shadow-2xl"
              >
                <LogIn className="w-5 h-5 mr-3" />
                {t("portal.cta.login")}
              </button>
              <Link
                href="/bantuan"
                className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-white hover:text-purple-900"
              >
                {t("portal.cta.help")}
              </Link>
            </div>
            <p className="text-purple-200 text-sm mt-6">
              {t("portal.cta.comingSoon")}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
