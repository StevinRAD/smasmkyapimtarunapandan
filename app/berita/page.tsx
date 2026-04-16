import type { Metadata } from "next";
import BeritaContent from "./BeritaContent";

export const metadata: Metadata = {
  title: "Berita & Pengumuman | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Berita terbaru, prestasi siswa, kegiatan sekolah, dan pengumuman penting SMA-SMKS YAPIM Taruna Pandan.",
  keywords: ["Berita Sekolah", "Pengumuman", "Prestasi", "Kegiatan", "Info Sekolah"],
};

export default function BeritaPage() {
  return <BeritaContent />;
}
