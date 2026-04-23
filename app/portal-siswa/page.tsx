import type { Metadata } from "next";
import PortalSiswaContent from "./PortalSiswaContent";

export const metadata: Metadata = {
  title: "Portal Siswa | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Portal informasi siswa SMA-SMKS YAPIM Taruna Pandan. Akses jadwal, nilai, absensi, dan e-rapor secara online.",
  keywords: ["portal siswa", "sistem informasi siswa", "jadwal", "nilai", "rapor", "absensi"],
};

export default function PortalSiswaPage() {
  return <PortalSiswaContent />;
}
