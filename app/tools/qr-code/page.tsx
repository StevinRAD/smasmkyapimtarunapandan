import type { Metadata } from "next";
import QRCodeContent from "./QRCodeContent";

export const metadata: Metadata = {
  title: "QR Code Generator | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Buat QR code untuk berbagai keperluan - link, teks, email, dan lainnya. Gratis dan mudah digunakan.",
  keywords: ["qr code", "generator", "qr code maker", "buat qr code"],
};

export default function QRCodePage() {
  return <QRCodeContent />;
}
