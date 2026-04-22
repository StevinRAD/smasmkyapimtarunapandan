import type { Metadata } from "next";
import KontakContent from "./KontakContent";

export const metadata: Metadata = {
  title: "Kontak | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Hubungi kami untuk informasi pendaftaran, pertanyaan akademik, dan kerja sama. Kami siap melayani Anda.",
  keywords: ["Kontak YAPIM", "Hubungi Kami", "PPDB", "Alamat Sekolah", "Telepon Sekolah"],
};

export default function KontakPage() {
  return <KontakContent />;
}
