import type { Metadata } from "next";
import KarirContent from "./KarirContent";

export const metadata: Metadata = {
  title: "Karir & Alumni | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Informasi karir dan lowongan pekerjaan di SMA-SMKS YAPIM Taruna Pandan. Bergabunglah dengan tim pendidik kami.",
  keywords: ["karir", "lowongan guru", "lowongan kerja", "alumni", "yapim career"],
};

export default function KarirPage() {
  return <KarirContent />;
}
