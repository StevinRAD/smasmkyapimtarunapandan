import type { Metadata } from "next";
import AkademikSMAContent from "./AkademikSMAContent";

export const metadata: Metadata = {
  title: "Akademik SMA | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Program akademik SMA YAPIM Taruna Pandan dengan kurikulum terintegrasi dan berbagai jurusan.",
  keywords: ["Akademik SMA", "Kurikulum SMA", "Jurusan SMA", "SMA YAPIM"],
};

export default function AkademikSMAPage() {
  return <AkademikSMAContent />;
}
