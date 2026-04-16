import type { Metadata } from "next";
import AlumniContent from "./AlumniContent";

export const metadata: Metadata = {
  title: "Alumni & Karir | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Jejak alumni SMA-SMKS YAPIM Taruna Pandan dan informasi karir serta lowongan kerja.",
  keywords: ["Alumni", "Karir", "Lowongan", "Lulusan", "Tracer Study"],
};

export default function AlumniPage() {
  return <AlumniContent />;
}
