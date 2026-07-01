import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Play — Sharon Gunawan",
  description: "Lighter, experimental, and personal work.",
};

export default function PlayPage() {
  return (
    <ComingSoon
      title="Play"
      message="Experiments and side projects are on their way."
      backHref="/"
      backLabel="← Back home"
    />
  );
}
