import type { Metadata } from "next";
import StudyTimerContent from "./StudyTimerContent";

export const metadata: Metadata = {
  title: "Study Timer | SMA-SMKS YAPIM TARUNA PANDAN",
  description: "Timer belajar dengan teknik Pomodoro untuk meningkatkan fokus dan produktivitas",
  keywords: ["timer", "pomodoro", "belajar", "fokus", "produktivitas"],
};

export default function StudyTimerPage() {
  return <StudyTimerContent />;
}
