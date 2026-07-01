import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Play — Sharon Gunawan",
  description: "Lighter, experimental, and personal work.",
};

// Flip to true once real experiments replace the placeholder tiles below.
const isBuilt = false;

// Placeholder gallery — no Figma frame was provided for Play yet.
const experiments = [
  { title: "Type explorations", tint: "from-violet-200 to-slate-200" },
  { title: "Icon set", tint: "from-emerald-200 to-slate-200" },
  { title: "Motion studies", tint: "from-amber-200 to-slate-200" },
  { title: "Side project", tint: "from-sky-200 to-slate-200" },
  { title: "Illustrations", tint: "from-rose-200 to-slate-200" },
  { title: "Weekend build", tint: "from-teal-200 to-slate-200" },
];

export default function PlayPage() {
  if (!isBuilt) {
    return (
      <ComingSoon
        title="Play"
        message="Experiments and side projects are on their way."
        backHref="/"
        backLabel="← Back home"
      />
    );
  }

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-16">
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">Play</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Experiments, side projects, and things made for the joy of it.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experiments.map((e) => (
          <div key={e.title}>
            <div
              className={`aspect-square w-full rounded-card bg-gradient-to-br ${e.tint}`}
            />
            <p className="mt-3 font-display text-lg font-medium">{e.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
