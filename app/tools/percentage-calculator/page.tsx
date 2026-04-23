import type { Metadata } from "next";
import PercentageCalculatorContent from "./PercentageCalculatorContent";

export const metadata: Metadata = {
  title: "Kalkulator Persen | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Hitung persentase dengan mudah - diskon, pajak, nilai, dan lainnya",
  keywords: ["persen", "persentase", "kalkulator", "persen", "percentage"],
};

export default function PercentageCalculatorPage() {
  return <PercentageCalculatorContent />;
}
