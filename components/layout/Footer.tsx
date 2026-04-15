"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Building, BookOpen } from "lucide-react";

const FacebookIcon = () => (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>);
const InstagramIcon = () => (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>);
const YoutubeIcon = () => (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>);
const TwitterIcon = () => (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>);

import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t-[8px] border-blue-700">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & About */}
          <div className="col-span-1 md:col-span-12 lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="SMA-SMKS YAPIM Logo" 
                  width={48} 
                  height={48} 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-title font-extrabold text-xl leading-tight text-white uppercase tracking-tight">
                  SMA-SMKS YAPIM
                </span>
                <span className="text-[10px] text-blue-400 font-bold tracking-[0.2em] uppercase">
                  Taruna Pandan
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm text-slate-400">
              {t("footer.desc")}
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Youtube" className="w-10 h-10 rounded bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-colors">
                <YoutubeIcon />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-colors">
                <TwitterIcon />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1 md:col-span-4 lg:col-span-2">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-6 flex items-center">
              <span className="w-2 h-0.5 bg-blue-700 mr-2"></span> {t("footer.links")}
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/profil" className="hover:text-blue-400 transition-colors">Profil Institusi</Link></li>
              <li><Link href="/akademik" className="hover:text-blue-400 transition-colors">Informasi Akademik</Link></li>
              <li><Link href="/fasilitas" className="hover:text-blue-400 transition-colors">Fasilitas Kampus</Link></li>
              <li><Link href="/berita" className="hover:text-blue-400 transition-colors">Pusat Berita</Link></li>
              <li><Link href="/karir" className="hover:text-blue-400 transition-colors">Karir & Alumni</Link></li>
              <li><Link href="/bantuan" className="hover:text-blue-400 transition-colors">Pusat Bantuan</Link></li>
            </ul>
          </div>

          {/* Academic Portals */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-6 flex items-center">
              <span className="w-2 h-0.5 bg-emerald-600 mr-2"></span> {t("footer.services")}
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/ppdb" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2"></span> Penerimaan Siswa (PPDB)</Link></li>
              <li><Link href="/portal-siswa" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2"></span> Sistem Informasi Siswa</Link></li>
              <li><Link href="/elearning" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2"></span> E-Learning (LMS)</Link></li>
              <li><Link href="/perpustakaan" className="hover:text-white transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2"></span> Perpustakaan Digital</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-6 flex items-center">
              <span className="w-2 h-0.5 bg-amber-500 mr-2"></span> {t("footer.contact")}
            </h3>
            <div className="space-y-4 text-sm bg-slate-900 p-5 rounded border border-slate-800">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">JL. AHMAD YANI PANDAN,<br/>Kec. Pandan, Kab. Tapanuli Tengah,<br/>Sumatera Utara, 22537</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>(0631) 372375</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>yapim_pandan@yahoo.com</span>
              </div>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center bg-slate-950">
          <div className="text-xs text-slate-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SMA-SMKS YAPIM Taruna Pandan. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center"><Building className="w-3 h-3 mr-1" /> NPSN: 69762757</span>
            <span className="flex items-center"><BookOpen className="w-3 h-3 mr-1" /> Akreditasi: B</span>
            <Link href="/privacy" className="hover:text-blue-400">Kebijakan Privasi</Link>
            <Link href="/terms" className="hover:text-blue-400">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
