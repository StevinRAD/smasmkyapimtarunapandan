import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Syarat dan ketentuan penggunaan website SMA-SMKS YAPIM Taruna Pandan.",
  keywords: ["syarat dan ketentuan", "terms of service", "ketentuan penggunaan", "legal"],
};

export default function TermsPage() {
  return <TermsContent />;
}
