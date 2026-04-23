import type { Metadata } from "next";
import StudentCalculatorContent from "./StudentCalculatorContent";

export const metadata: Metadata = {
  title: "Kalkulator Siswa | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Hitung nilai rapor dan indeks prestasi siswa dengan mudah",
  keywords: ["kalkulator", "nilai", "rapor", "ips", "ipk", "siswa"],
};

export default function StudentCalculatorPage() {
  return <StudentCalculatorContent />;
}
