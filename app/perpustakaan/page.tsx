import type { Metadata } from "next";
import PerpustakaanContent from "./PerpustakaanContent";

export const metadata: Metadata = {
  title: "Perpustakaan Digital | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Perpustakaan digital SMA-SMKS YAPIM Taruna Pandan. Koleksi e-book, jurnal, dan artikel akademik.",
  keywords: ["perpustakaan", "pustaka", "e-book", "jurnal", "digital library", "perpustakaan digital"],
};

export default function PerpustakaanPage() {
  return <PerpustakaanContent />;
}
