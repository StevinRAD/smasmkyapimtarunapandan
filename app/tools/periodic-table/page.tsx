import type { Metadata } from "next";
import PeriodicTableContent from "./PeriodicTableContent";

export const metadata: Metadata = {
  title: "Tabel Periodik | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Referensi tabel periodik unsur kimia untuk pembelajaran",
  keywords: ["tabel periodik", "unsur kimia", "periodic table", "kimia"],
};

export default function PeriodicTablePage() {
  return <PeriodicTableContent />;
}
