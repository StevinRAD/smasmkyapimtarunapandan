"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Building, BookOpen, GraduationCap, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "@/lib/LanguageContext";

// Custom Social Media Icons
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/profil", label: "Profil Institusi" },
    { href: "/akademik", label: "Informasi Akademik" },
    { href: "/fasilitas", label: "Fasilitas Kampus" },
    { href: "/berita", label: "Pusat Berita" },
    { href: "/karir", label: "Karir & Alumni" },
    { href: "/bantuan", label: "Pusat Bantuan" },
  ];

  const academicPortals = [
    { href: "/ppdb", label: "Penerimaan Siswa (PPDB)", icon: GraduationCap },
    { href: "/portal-siswa", label: "Sistem Informasi Siswa", icon: BookOpen },
    { href: "/elearning", label: "E-Learning (LMS)", icon: ExternalLink },
    { href: "/perpustakaan", label: "Perpustakaan Digital", icon: BookOpen },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "JL. AHMAD YANI PANDAN, Kec. Pandan, Kab. Tapanuli Tengah, Sumatera Utara, 22537",
      color: "blue"
    },
    {
      icon: Phone,
      text: "(0631) 372375",
      color: "emerald"
    },
    {
      icon: Mail,
      text: "yapim_pandan@yahoo.com",
      color: "amber"
    },
    {
      icon: Clock,
      text: "Senin - Jumat: 07.00 - 15.00 WIB",
      color: "purple"
    },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: FacebookIcon, color: "bg-blue-600" },
    { name: "Instagram", href: "#", icon: InstagramIcon, color: "bg-gradient-to-br from-purple-600 to-pink-600" },
    { name: "Youtube", href: "#", icon: YoutubeIcon, color: "bg-red-600" },
    { name: "Twitter", href: "#", icon: TwitterIcon, color: "bg-sky-500" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t-[8px] border-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand & About - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-12 lg:col-span-4"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative w-16 h-16 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl shadow-blue-600/30">
                <Image
                  src="/logo.png"
                  alt="SMA-SMKS YAPIM Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl leading-tight text-white uppercase tracking-tight">
                  SMA-SMKS YAPIM
                </span>
                <span className="text-xs text-blue-400 font-bold tracking-[0.2em] uppercase mt-1">
                  Taruna Pandan
                </span>
              </div>
            </div>

            <p className="text-base leading-relaxed mb-8 max-w-sm text-slate-400">
              {t("footer.desc")}
            </p>

            {/* Enhanced Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className={`group relative w-12 h-12 ${social.color} rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-${social.color.split('-')[1]}-600/30`}
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <social.icon className="w-5 h-5 text-white relative z-10" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-4 lg:col-span-2"
          >
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8 flex items-center pb-4 border-b border-slate-800">
              <span className="w-8 h-0.5 bg-blue-600 mr-3"></span>
              {t("footer.links")}
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm font-medium text-slate-400 hover:text-blue-400 transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 mr-3 transition-colors"></span>
                    {link.label}
                    <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Academic Portals - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-4 lg:col-span-3"
          >
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8 flex items-center pb-4 border-b border-slate-800">
              <span className="w-8 h-0.5 bg-emerald-600 mr-3"></span>
              {t("footer.services")}
            </h3>
            <ul className="space-y-4">
              {academicPortals.map((portal, index) => (
                <li key={index}>
                  <Link
                    href={portal.href}
                    className="group flex items-start text-sm font-medium text-slate-400 hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-slate-800/50"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors">
                      <portal.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="flex-1">{portal.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-4 lg:col-span-3"
          >
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8 flex items-center pb-4 border-b border-slate-800">
              <span className="w-8 h-0.5 bg-amber-500 mr-3"></span>
              {t("footer.contact")}
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className={`w-10 h-10 rounded-lg bg-${item.color}-900/30 flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-5 h-5 text-${item.color}-500`} />
                  </div>
                  <span className="text-sm leading-snug text-slate-400">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="border-t border-slate-800 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-sm text-slate-500 text-center md:text-left">
              <p className="mb-2">
                &copy; {new Date().getFullYear()} SMA-SMKS YAPIM Taruna Pandan. Hak Cipta Dilindungi Undang-Undang.
              </p>
              <p className="text-xs">Mencetak Generasi Unggul Berkarakter Sejak 1989</p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center px-3 py-1.5 bg-slate-900 rounded-lg border border-slate-800">
                <Building className="w-3.5 h-3.5 mr-2 text-blue-500" />
                NPSN: 69762757
              </span>
              <span className="flex items-center px-3 py-1.5 bg-slate-900 rounded-lg border border-slate-800">
                <BookOpen className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                Akreditasi: B
              </span>
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">Kebijakan Privasi</Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">Syarat & Ketentuan</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
