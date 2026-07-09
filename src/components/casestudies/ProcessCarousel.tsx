"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Design-process carousel for the Reindeer case study — built 1:1 from the
// Figma "Discovery interaction" frame (node 161:1158). Four steps, a left
// gutter, an active 800px card and a peek of the next. Non-looped: the arrows
// disable at the first and last step so it never wraps around.

type Step = {
  step: string;
  sub: string;
  desc: string;
  tags: string[];
  image: string | null;
  imageClass: string;
  width: number;
  height: number;
};

const STEPS: Step[] = [
  {
    step: "Step 1: Deep Discovery",
    sub: "Going Beyond Surface-Level Pain Points",
    desc: "Worked with fleet ops, accounting, and services teams to understand how processes intersected — not just what was broken.",
    tags: ["Stakeholder Interview", "Workflow Mapping"],
    image: "/images/reindeer/discovery-1.png",
    imageClass: "h-auto w-2/3 object-contain",
    width: 640,
    height: 136,
  },
  {
    step: "Step 2: Collaborative Design",
    sub: "Inventing Workflows, Not Just Digitizing Them",
    desc: "Collaborated with domain experts to design features that lead processes — giving Reindeer a competitive edge from day one.",
    tags: ["Co-Design Sessions", "Information Architecture"],
    image: "/images/reindeer/discovery-2.png",
    imageClass: "h-auto w-[48%] object-contain",
    width: 660,
    height: 264,
  },
  {
    step: "Step 3: Usability Testing",
    sub: "Every internal group became a testing partner",
    desc: "Regular feedback sessions and live test drives with fleet, accounting, and ops teams. Each round tightened features and surfaced cross-team dependencies.",
    tags: ["Live Demos", "Rapid Iteration"],
    image: "/images/reindeer/discovery-3.png",
    imageClass: "h-full w-full object-contain",
    width: 1017,
    height: 300,
  },
  {
    step: "Step 4: Launch",
    sub: "Non-disruptive rollout with built-in training",
    desc: "Designed for immediate adoption — intuitive UI, live knowledge transfer sessions, and a knowledge base so the team could own it independently.",
    tags: ["Documentation", "Change Management"],
    image: "/images/reindeer/discovery-4.png",
    imageClass: "h-full w-full object-cover",
    width: 1017,
    height: 274,
  },
];

const GAP = 24;

export default function ProcessCarousel() {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(800);
  const [sidePad, setSidePad] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  // Match the design's 800px card on desktop; shrink to the viewport (leaving a
  // small peek of the next card) on narrower screens. Translating by
  // cardWidth + gap always advances exactly one step, whatever the width — and
  // the side gutters center the active card, with prev/next peeking on either
  // side.
  useEffect(() => {
    const measure = () => {
      const vw = viewportRef.current?.clientWidth ?? 0;
      if (vw) {
        const cw = Math.min(800, vw - 48);
        setCardWidth(cw);
        setSidePad(Math.max(0, (vw - cw) / 2));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const atStart = index === 0;
  const atEnd = index === STEPS.length - 1;

  return (
    <div className="mt-10 ml-[calc(50%-50vw)] w-screen">
      <div ref={viewportRef} className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ gap: GAP, transform: `translateX(-${index * (cardWidth + GAP)}px)` }}
        >
          {/* Leading gutter centers the active card in the viewport */}
          <div aria-hidden className="shrink-0" style={{ width: sidePad }} />
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="flex shrink-0 flex-col overflow-hidden rounded-card bg-[#fcfcfc] shadow-[0_4px_40px_0_rgba(0,0,0,0.04)]"
              style={{ width: cardWidth }}
            >
              <div className="flex h-[200px] items-center justify-center overflow-hidden bg-[#fff5e9]">
                {s.image && (
                  <Image
                    src={s.image}
                    alt={s.step}
                    width={s.width}
                    height={s.height}
                    className={s.imageClass}
                  />
                )}
              </div>
              <div className="flex flex-col gap-3 p-5">
                <div>
                  <h3 className="font-display text-2xl">{s.step}</h3>
                  <p className="font-display text-2xl">{s.sub}</p>
                </div>
                <p className="text-base text-muted">{s.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-pill border border-line px-3 py-1.5 font-label text-[13px] font-medium uppercase text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* Trailing gutter keeps the last card centered too */}
          <div aria-hidden className="shrink-0" style={{ width: sidePad }} />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={atStart}
          aria-label="Previous step"
          className="flex size-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-black/5 disabled:pointer-events-none disabled:opacity-30"
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden>
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(STEPS.length - 1, i + 1))}
          disabled={atEnd}
          aria-label="Next step"
          className="flex size-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-black/5 disabled:pointer-events-none disabled:opacity-30"
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden>
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
