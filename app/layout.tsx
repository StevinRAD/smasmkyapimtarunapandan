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
        {/* Kontainer Background Global */}
        <div className="fixed inset-0 -z-50 w-full h-full">
          <Image
            src="/background.jpg"
            alt="Latar Belakang Website"
            fill
            priority
            className="object-cover transition-opacity duration-1000 opacity-100 dark:opacity-70"
          />
          {/* Subtle Overlay to ensure readability while keeping background visible */}
          <div className="absolute inset-0 bg-white/60 dark:bg-slate-950/80 backdrop-blur-[1px]" />
        </div>

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
