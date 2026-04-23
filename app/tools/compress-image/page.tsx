import type { Metadata } from "next";
import ImageCompressorContent from "./ImageCompressorContent";

export const metadata: Metadata = {
  title: "Kompres Gambar | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Tool kompresi gambar online. Kecilkan ukuran gambar tanpa mengurangi kualitas secara signifikan.",
  keywords: ["kompres gambar", "compress image", "optimasi gambar", "resize gambar"],
};

export default function ImageCompressorPage() {
  return <ImageCompressorContent />;
}
