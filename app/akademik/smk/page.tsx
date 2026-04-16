import type { Metadata } from "next";
import AkademikSMKContent from "./AkademikSMKContent";

export const metadata: Metadata = {
  title: "Akademik SMK | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Program keahlian vokasi SMK YAPIM Taruna Pandan dengan berbagai kompetensi keahlian terapan.",
  keywords: ["Akademik SMK", "Kompetensi Keahlian", "Jurusan SMK", "SMK YAPIM"],
};

export default function AkademikSMKPage() {
  return <AkademikSMKContent />;
}
