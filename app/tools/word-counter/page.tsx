import type { Metadata } from "next";
import WordCounterContent from "./WordCounterContent";

export const metadata: Metadata = {
  title: "Word Counter | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Hitung kata, karakter, paragraf, dan kalimat secara real-time",
  keywords: ["word counter", "hitung kata", "character counter", "count words"],
};

export default function WordCounterPage() {
  return <WordCounterContent />;
}
