import type { Metadata } from "next";
import BantuanContent from "./BantuanContent";

export const metadata: Metadata = {
  title: "Pusat Bantuan | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Pusat bantuan SMA-SMKS YAPIM Taruna Pandan. Temukan jawaban untuk pertanyaan umum dan dapatkan dukungan.",
  keywords: ["bantuan", "faq", "dukungan", "help center", "pertanyaan umum"],
};

export default function BantuanPage() {
  return <BantuanContent />;
}
