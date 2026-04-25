import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityWidget from "@/components/a11y/AccessibilityWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Website Resmi SMA-SMKS YAPIM Taruna Pandan. Temukan profil, fasilitas, berita, dan informasi pendaftaran peserta didik baru (PPDB).",
  keywords: ["SMA YAPIM PANDAN", "Sekolah Menengah Atas YAPIM", "Tapanuli Tengah", "PPDB YAPIM "],
};

import Image from "next/image";

import { LanguageProvider } from "@/lib/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col relative`}>
        {/* Background Global dengan CSS gradient (lebih cepat & reliable) */}
        <div className="fixed inset-0 -z-50 bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="fixed inset-0 -z-40 bg-white/40 dark:bg-slate-950/60 backdrop-blur-[1px]" />

        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <AccessibilityWidget />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
