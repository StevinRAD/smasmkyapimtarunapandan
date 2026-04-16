import type { Metadata } from "next";
import StafContent from "./StafContent";

export const metadata: Metadata = {
  title: "Guru & Staff | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Tim pengajar dan tenaga kependidikan profesional SMA-SMKS YAPIM Taruna Pandan.",
  keywords: ["Guru", "Staff", "Tenaga Pendidik", "Kepala Sekolah", "Wakil"],
};

export default function StafPage() {
  return <StafContent />;
}
