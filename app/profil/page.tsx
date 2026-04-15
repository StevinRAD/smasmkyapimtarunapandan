import type { Metadata } from "next";
import ProfilContent from "./ProfilContent";

export const metadata: Metadata = {
  title: "Profil | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Sejarah, Visi, Misi, dan Identitas Sekolah SMA-SMKS YAPIM Taruna Pandan.",
  keywords: ["Profil YAPIM", "Sejarah YAPIM", "Visi Misi YAPIM", "SMA YAPIM Pandan", "SMK YAPIM Pandan"],
};

export default function ProfilPage() {
  return <ProfilContent />;
}
