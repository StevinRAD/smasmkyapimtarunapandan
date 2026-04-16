import type { Metadata } from "next";
import PPDBContent from "./PPDBContent";

export const metadata: Metadata = {
  title: "PPDB Online | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Pendaftaran Peserta Didik Baru (PPDB) Online SMA-SMKS YAPIM Taruna Pandan Tahun Ajaran 2026/2027.",
  keywords: ["PPDB", "Pendaftaran", "Siswa Baru", "Penerimaan", "Sekolah"],
};

export default function PPDBPage() {
  return <PPDBContent />;
}
