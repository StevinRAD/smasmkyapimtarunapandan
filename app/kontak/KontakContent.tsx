"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Custom Social Media Icons
const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YoutubeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat Sekolah",
    content: "JL. AHMAD YANI PANDAN, Kec. Pandan, Kab. Tapanuli Tengah, Sumatera Utara, 22537",
    color: "blue",
    action: "https://maps.google.com/?q=SMA-SMKS+YAPIM+TARUNA+PANDAN",
    isLink: true
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "(0631) 372375",
    color: "emerald",
    action: "tel:+62631372375",
    isLink: true
  },
  {
    icon: Mail,
    title: "Email",
    content: "yapim_pandan@yahoo.com",
    color: "purple",
    action: "mailto:yapim_pandan@yahoo.com",
    isLink: true
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Jumat: 07.00 - 15.00 WIB",
    color: "amber",
    action: "#",
    isLink: false
  }
];

const departments = [
  { name: "Pendaftaran (PPDB)", email: "ppdb@yapim-pandan.sch.id", phone: "081234567890" },
  { name: "Tata Usaha", email: "tu@yapim-pandan.sch.id", phone: "081234567891" },
  { name: "Kesiswaan", email: "kesiswaan@yapim-pandan.sch.id", phone: "081234567892" },
  { name: "Humas & Kerjasama", email: "humas@yapim-pandan.sch.id", phone: "081234567893" }
];

const socialLinks = [
  { name: "Facebook", icon: FacebookIcon, href: "#", color: "bg-blue-600" },
  { name: "Instagram", icon: InstagramIcon, href: "#", color: "bg-gradient-to-br from-purple-600 to-pink-600" },
  { name: "Youtube", icon: YoutubeIcon, href: "#", color: "bg-red-600" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/6281234567890", color: "bg-green-600" }
];

const faqs = [
  {
    question: "Bagaimana cara mendaftar sebagai siswa baru?",
    answer: "Pendaftaran dapat dilakukan secara online melalui website kami pada menu PPDB atau datang langsung ke sekolah pada jam kerja dengan membawa persyaratan yang telah ditentukan."
  },
  {
    question: "Apakah ada beasiswa untuk siswa berprestasi?",
    answer: "Ya, kami menyediakan beasiswa untuk siswa berprestasi akademik dan non-akademik. Informasi lebih lanjut dapat menghubungi bagian kesiswaan."
  },
  {
    question: "Bagaimana sistem pembayaran SPP?",
    answer: "SPP dapat dibayar secara tunai di sekolah atau transfer ke rekening resmi sekolah pada setiap awal bulan."
  },
  {
    question: "Apakah menerima pindahan siswa dari sekolah lain?",
    answer: "Ya, kami menerima pindahan siswa dengan syarat melampirkan surat pindah resmi dari sekolah asal dan rapor yang dilegalisir."
  }
];

export default function KontakContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitted(true);
    setSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mt-20">
        <Image
          src="/galeri/kontak_bg.jpg"
          alt="Kontak Kami"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-slate-900/60 dark:from-blue-950/95 dark:via-slate-900/80 dark:to-blue-950/90 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 mb-8 rounded-full text-sm uppercase tracking-[0.2em]">
            <Mail className="w-5 h-5 mr-3" />
            Hubungi Kami
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
            Kontak
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium">
            Kami siap melayani dan menjawab pertanyaan Anda dengan sepenuh hati
          </p>
        </motion.div>
      </section>

      {/* Contact Information Cards */}
      <section className="section-spacious bg-white dark:bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Informasi Kontak
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Cara Menghubungi Kami
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Pilih cara yang paling nyaman bagi Anda untuk menghubungi kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              info.isLink ? (
                <motion.a
                  key={info.title}
                  href={info.action}
                  target={info.action.startsWith("http") ? "_blank" : "_self"}
                  rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="card-elevated p-6 h-full hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${info.color === "blue" ? "bg-blue-100 dark:bg-blue-900/30" :
                        info.color === "emerald" ? "bg-emerald-100 dark:bg-emerald-900/30" :
                          info.color === "purple" ? "bg-purple-100 dark:bg-purple-900/30" :
                            "bg-amber-100 dark:bg-amber-900/30"
                      }`}>
                      <info.icon className={`w-7 h-7 ${info.color === "blue" ? "text-blue-600 dark:text-blue-400" :
                          info.color === "emerald" ? "text-emerald-600 dark:text-emerald-400" :
                            info.color === "purple" ? "text-purple-600 dark:text-purple-400" :
                              "text-amber-600 dark:text-amber-400"
                        }`} />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{info.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{info.content}</p>
                  </div>
                </motion.a>
              ) : (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="card-elevated p-6 h-full">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${info.color === "blue" ? "bg-blue-100 dark:bg-blue-900/30" :
                        info.color === "emerald" ? "bg-emerald-100 dark:bg-emerald-900/30" :
                          info.color === "purple" ? "bg-purple-100 dark:bg-purple-900/30" :
                            "bg-amber-100 dark:bg-amber-900/30"
                      }`}>
                      <info.icon className={`w-7 h-7 ${info.color === "blue" ? "text-blue-600 dark:text-blue-400" :
                          info.color === "emerald" ? "text-emerald-600 dark:text-emerald-400" :
                            info.color === "purple" ? "text-purple-600 dark:text-purple-400" :
                              "text-amber-600 dark:text-amber-400"
                        }`} />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{info.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{info.content}</p>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-spacious bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-elevated p-8 md:p-10"
            >
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4">
                  Kirim Pesan
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Isi formulir di bawah ini dan kami akan segera merespons pertanyaan Anda
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-3">
                    Pesan Terkirim!
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                        placeholder="email@contoh.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                        No. Telepon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                      Subjek *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    >
                      <option value="">Pilih subjek</option>
                      <option value="ppdb">Informasi PPDB</option>
                      <option value="akademik">Pertanyaan Akademik</option>
                      <option value="kerjasama">Kerjasama & Sponsorship</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                      Pesan *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider text-sm rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                        />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Kirim Pesan
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map & Department Contacts */}
            <div className="space-y-8">
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-elevated overflow-hidden"
              >
                <a
                  href="https://maps.app.goo.gl/DtY8v6FKpbs1k8Uq6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video w-full relative group"
                >
                  <iframe
                    src="https://maps.google.com/maps?q=1.684151,98.825101&t=k&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, pointerEvents: 'none' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
                      <div className="flex items-center text-blue-600 font-bold">
                        <MapPin className="w-5 h-5 mr-2" />
                        Buka di Google Maps
                      </div>
                    </div>
                  </div>
                </a>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50">
                  <a
                    href="https://maps.app.goo.gl/DtY8v6FKpbs1k8Uq6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm hover:underline"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Buka di Google Maps
                  </a>
                </div>
              </motion.div>

              {/* Department Contacts */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-elevated p-6"
              >
                <h4 className="font-black text-slate-900 dark:text-white mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  Kontak Departemen
                </h4>
                <div className="space-y-4">
                  {departments.map((dept) => (
                    <div key={dept.name} className="flex flex-col p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      <span className="font-bold text-slate-900 dark:text-white mb-2">{dept.name}</span>
                      <div className="space-y-1 text-sm">
                        <a href={`mailto:${dept.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                          {dept.email}
                        </a>
                        <a href={`tel:${dept.phone}`} className="text-slate-600 dark:text-slate-400">
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-spacious bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              Media Sosial
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Ikuti Kami
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Dapatkan update terbaru melalui media sosial kami
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`w-16 h-16 ${social.color} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <social.icon className="w-8 h-8 text-white" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacious bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Pertanyaan Umum
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">{faq.question}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Butuh Bantuan Lebih Lanjut?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-5 bg-white text-blue-900 font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-blue-50 shadow-2xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
              <a
                href="mailto:yapim_pandan@yahoo.com"
                className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider text-sm md:text-base transition rounded-xl hover:bg-white hover:text-blue-900"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
