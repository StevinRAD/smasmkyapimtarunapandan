import type { Metadata } from "next";
import RandomPickerContent from "./RandomPickerContent";

export const metadata: Metadata = {
  title: "Random Picker | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Pilih item secara acak untuk kuis, games, atau undian",
  keywords: ["random picker", "pilih acak", "undian", "kuis", "spin wheel"],
};

export default function RandomPickerPage() {
  return <RandomPickerContent />;
}
