import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Kebijakan privasi SMA-SMKS YAPIM Taruna Pandan. Pelajari bagaimana kami mengelola dan melindungi data pribadi Anda.",
  keywords: ["kebijakan privasi", "privasi", "data pribadi", "perlindungan data"],
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
