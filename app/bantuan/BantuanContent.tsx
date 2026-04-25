"use client";

import { motion } from "framer-motion";
import { HelpCircle, Mail, Phone, MapPin, Clock, ChevronDown, ChevronUp, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function BantuanContent() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: t("bantuan.faq.q1.question"),
      answer: t("bantuan.faq.q1.answer")
    },
    {
      question: t("bantuan.faq.q2.question"),
      answer: t("bantuan.faq.q2.answer")
    },
    {
      question: t("bantuan.faq.q3.question"),
      answer: t("bantuan.faq.q3.answer")
    },
    {
      question: t("bantuan.faq.q4.question"),
      answer: t("bantuan.faq.q4.answer")
    },
    {
      question: t("bantuan.faq.q5.question"),
      answer: t("bantuan.faq.q5.answer")
    },
    {
      question: t("bantuan.faq.q6.question"),
      answer: t("bantuan.faq.q6.answer")
    }
  ];

  const quickLinks = [
    { href: "/ppdb", label: t("bantuan.quicklinks.ppdb") },
    { href: "/akademik", label: t("bantuan.quicklinks.akademik") },
    { href: "/kontak", label: t("bantuan.quicklinks.kontak") },
    { href: "/galeri", label: t("bantuan.quicklinks.galeri") },
    { href: "/karir", label: t("bantuan.quicklinks.karir") }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: t("bantuan.contact.phoneTitle"),
      content: "(0631) 372375",
      action: "tel:(0631) 372375",
      color: "emerald"
    },
    {
      icon: Mail,
      title: t("bantuan.contact.emailTitle"),
      content: "yapim_pandan@yahoo.com",
      action: "mailto:yapim_pandan@yahoo.com",
      color: "blue"
    },
    {
      icon: MapPin,
      title: t("bantuan.contact.addressTitle"),
      content: "JL. AHMAD YANI PANDAN, Kab. Tapanuli Tengah, Sumatera Utara 22537",
      action: "/kontak",
      color: "rose"
    },
    {
      icon: Clock,
      title: t("bantuan.contact.hoursTitle"),
      content: "Senin - Jumat: 07.00 - 15.00 WIB",
      action: "",
      color: "amber"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <HelpCircle className="w-5 h-5 mr-3" />
            {t("bantuan.hero.badge")}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            {t("bantuan.hero.title")}
          </h1>

          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            {t("bantuan.hero.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Quick Links */}
      <section className="section-standard bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4">
              {t("bantuan.quicklinks.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="card-elevated p-4 text-center group block"
                >
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-600 transition-colors">
                    <ExternalLink className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{link.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacious bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              {t("bantuan.faq.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              {t("bantuan.faq.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              {t("bantuan.faq.subtitle")}
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card-elevated overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="font-bold text-slate-900 dark:text-white pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2 text-slate-600 dark:text-slate-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              {t("bantuan.contact.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              {t("bantuan.contact.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              {t("bantuan.contact.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-6 text-center"
              >
                <div className={`w-16 h-16 bg-${method.color}-100 dark:bg-${method.color}-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className={`w-8 h-8 text-${method.color}-600 dark:text-${method.color}-400`} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{method.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{method.content}</p>
                {method.action && (
                  <a
                    href={method.action}
                    className={`inline-flex items-center text-${method.color}-600 dark:text-${method.color}-400 font-bold text-sm hover:underline`}
                  >
                    {t("bantuan.contact.call")} <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/kontak"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-bold uppercase tracking-wider text-sm md:text-base rounded-xl hover:shadow-xl transition-all"
            >
              {t("bantuan.contact.fullForm")}
            </Link>
          </div>
        </div>
      </section>

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
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              {t("bantuan.cta.title")}
            </h2>
            <p className="text-emerald-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              {t("bantuan.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="mailto:yapim_pandan@yahoo.com"
                className="inline-flex items-center px-10 py-5 bg-white text-emerald-900 font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-emerald-50 shadow-2xl"
              >
                <Mail className="w-5 h-5 mr-3" />
                {t("bantuan.cta.email")}
              </a>
              <a
                href="tel:(0631) 372375"
                className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-white hover:text-emerald-900"
              >
                <Phone className="w-5 h-5 mr-3" />
                {t("bantuan.cta.phone")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
