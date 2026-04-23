import type { Metadata } from "next";
import SpeedReaderContent from "./SpeedReaderContent";

export const metadata: Metadata = {
  title: "Speed Reader | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Baca teks dengan kecepatan tinggi untuk meningkatkan kemampuan membaca",
  keywords: ["speed reader", "baca cepat", "kecepatan baca", " RSVP reader"],
};

export default function SpeedReaderPage() {
  return <SpeedReaderContent />;
}
