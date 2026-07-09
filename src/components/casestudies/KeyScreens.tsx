"use client";

import Image from "next/image";
import { useState } from "react";

// Key-screens accordion for the Reindeer case study — built 1:1 from the Figma
// "Screens" component set (node 129:4393). Four screens; clicking a title
// expands its copy and swaps the screenshot on the right. Content and styling
// come from the design; nothing here is invented.

type Screen = {
  title: string;
  desc: string;
  points: string[];
  image: string;
  alt: string;
};

const SCREENS: Screen[] = [
  {
    title: "Personalizable Dashboard",
    desc: "Each team member's command center — surfacing orders, statuses, and actions relevant to their role.",
    points: [
      "Role-based views with customizable metrics",
      "Attention flags escalate urgent orders",
      "Bulk creation in seconds",
    ],
    image: "/images/reindeer/screen-dashboard.png",
    alt: "Personalizable dashboard screen",
  },
  {
    title: "Route Planning",
    desc: "A vertical timeline shows every leg of the journey — long hauls, storage stops, and services — with carrier assignments and average lane pricing at each step.",
    points: [
      "Multi-leg route visualization with mileage",
      "Lane averages for fair market carrier pricing",
      "One-click haul interest broadcast to carriers",
    ],
    image: "/images/reindeer/screen-route-planning.png",
    alt: "Route planning screen",
  },
  {
    title: "Automated Billing",
    desc: "Every haul, storage period, and service auto-generates categorized line items. Orange warning icons flag charges needing review, like mismatched rates or reversals.",
    points: [
      "Auto-generated charges from completed operations",
      "Credit/debit split with running totals",
      "Warning flags on discrepancies and reversals",
    ],
    image: "/images/reindeer/screen-billing.png",
    alt: "Automated billing screen",
  },
  {
    title: "Managed Services",
    desc: "The services module lets the team provision services, find nearby providers, and arrange vehicle transport to and from service locations — all from a single modal.",
    points: [
      "Provider search by proximity to storage, pickup, or delivery",
      "Inline transport provisioning to/from service site",
      "Service tagging, scheduling, and cost tracking",
    ],
    image: "/images/reindeer/screen-services.png",
    alt: "Managed services screen",
  },
];

export default function KeyScreens() {
  const [active, setActive] = useState(0);
  const current = SCREENS[active];

  return (
    <div className="mt-10 grid grid-cols-1 items-center gap-6 overflow-hidden rounded-card bg-white lg:grid-cols-[minmax(0,440px)_1fr]">
      <div className="flex flex-col p-8 sm:p-11">
        {SCREENS.map((s, i) => {
          const isActive = i === active;
          return (
            <div key={s.title} className="border-b border-line last:border-0">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                className="flex w-full items-center justify-between gap-3 py-3 text-left"
              >
                <span
                  className={`font-display text-2xl font-normal ${
                    isActive ? "text-ink" : "text-muted"
                  }`}
                >
                  {s.title}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className={`size-6 shrink-0 transition-transform ${
                    isActive ? "rotate-180 text-ink" : "text-muted"
                  }`}
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {isActive && (
                <div className="flex flex-col gap-2 pb-3 text-base text-ink">
                  <p>{s.desc}</p>
                  <ul className="flex flex-col">
                    {s.points.map((pt) => (
                      <li key={pt}>✓ {pt}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center p-8 sm:py-11 sm:pr-11 lg:pl-0">
        <Image
          key={current.image}
          src={current.image}
          alt={current.alt}
          width={1920}
          height={968}
          className="h-auto w-full rounded-card shadow-[0_16px_32px_-4px_rgba(12,12,13,0.1)]"
        />
      </div>
    </div>
  );
}
