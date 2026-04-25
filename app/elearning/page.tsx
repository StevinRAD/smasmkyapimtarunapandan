import type { Metadata } from "next";
import ElearningContent from "./ElearningContent";

export const metadata: Metadata = {
  title: "E-Learning | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Platform e-learning SMA-SMKS YAPIM Taruna Pandan. Belajar online dengan materi, quiz, dan assignment.",
  keywords: ["e-learning", "lms", "pembelajaran online", "daring", "platform digital"],
};

export default function ElearningPage() {
  return <ElearningContent />;
}
