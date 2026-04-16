import type { Metadata } from "next";
import FasilitasContent from "./FasilitasContent";

export const metadata: Metadata = {
  title: "Fasilitas | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Fasilitas lengkap dan modern untuk mendukung proses pembelajaran di SMA-SMKS YAPIM Taruna Pandan.",
  keywords: ["Fasilitas Sekolah", "Sarana Prasarana", "Laboratorium", "Perpustakaan", "Olahraga"],
};

export default function FasilitasPage() {
  return <FasilitasContent />;
}
