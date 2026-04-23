import type { Metadata } from "next";
import UnitConverterContent from "./UnitConverterContent";

export const metadata: Metadata = {
  title: "Unit Converter | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Konversi berbagai satuan - panjang, berat, suhu, waktu, dan lainnya",
  keywords: ["konverter", "satuan", "konversi", "panjang", "berat", "suhu"],
};

export default function UnitConverterPage() {
  return <UnitConverterContent />;
}
