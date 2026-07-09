import Link from "next/link";
import Image from "next/image";
import ProcessCarousel from "./ProcessCarousel";
import KeyScreens from "./KeyScreens";

// Reindeer Auto's Logistics OMS case study — built 1:1 from the Figma
// "finalized screens" frame (node 105:3880). Content and styling come from the
// design; nothing here is invented.

const HERO_GRADIENT =
  "linear-gradient(158.28deg, #ffffff 19.12%, #a0cf67 224.46%)";
const ACCENT_GRADIENT =
  "linear-gradient(45deg, #003a01 40%, #638124 112%)";

const META = [
  { label: "Role", value: "UX Designer" },
  { label: "Industry", value: "Automotive Logistics" },
  { label: "Platform", value: "Cloud-Based Web App" },
  { label: "Scope", value: "End-to-End Product" },
];

const SUBNAV = [
  { label: "Overview", href: "#overview" },
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Design Process", href: "#process" },
  { label: "Outcome", href: "#result" },
];

const PROBLEMS = [
  {
    stat: "5+",
    unit: "systems",
    desc: "Disconnected systems used to manage a single fleet order from pickup to delivery",
  },
  {
    stat: "100%",
    unit: "manual entry",
    desc: "Manual data entry for every vehicle movement, storage event, and billing charge",
  },
  {
    stat: "Lost",
    unit: "$$$",
    desc: "Revenue from untracked sales, billing errors, and missed service charges across customers",
  },
];

const CHALLENGES = [
  {
    n: "01",
    title: "One Source of Truth",
    desc: "Orders, fulfillment, shipping docs, billing, and payments centralized in a single platform — not scattered across five systems.",
  },
  {
    n: "02",
    title: "Real-Time Visibility",
    desc: "Dispatchers needed to see live order status. Managers needed dashboards, not end-of-week reports. Drivers needed clear instructions, not forwarded emails.",
  },
  {
    n: "03",
    title: "Coordination Without Chaos",
    desc: "With 60+ roles touching orders at different stages, the system had to handle complex permissions without creating bottlenecks or confusion.",
  },
];

const BEFORE = [
  "Orders spread across multiple disconnected systems",
  "Manual data entry for every fleet movement",
  "Revenue lost from untracked sales and services",
  "No visibility into document compliance status",
  "Billing errors and inconsistencies across customers",
];

const AFTER = [
  "Single platform for orders, docs, billing, and payments",
  "Automated order transitions and bulk operations",
  "Every sale and service captured and tracked",
  "Dynamic compliance checklists per customer",
  "Auto-categorized charges matched to customer preferences",
];

const OUTCOMES = [
  {
    emoji: "⚡",
    title: "Less Manual Work",
    desc: "Significant reduction of manual work and errors, allowing teams to focus on high-value tasks.",
  },
  {
    emoji: "🚀",
    title: "Uninterrupted Growth",
    desc: "Enabled the fleet team to keep focused growing fleet business while the new system was being made. Meanwhile, valuable feature enhancements and workflow improvements were identified and invented.",
  },
  {
    emoji: "✨",
    title: "Faster Execution",
    desc: "Reduced errors, inconsistencies, and confusion leading to faster execution and reduced costs.",
  },
  {
    emoji: "🤝",
    title: "Customer Trust",
    desc: "Increased customer trust and volume resulting from improved transparency and confidence.",
  },
  {
    emoji: "🏆",
    title: "Competitive Edge",
    desc: "Rapid delivery of powerful features enhances Reindeer's competitive advantage.",
  },
  {
    emoji: "📋",
    title: "Smooth Adoption",
    desc: "Reduced confusion during launch and future training costs.",
  },
];

const REFLECTIONS = [
  {
    title: "Discovery never stops at pain points",
    desc: "The most impactful design decisions came from understanding industry nuances and business relationships — not from user complaints.",
  },
  {
    title: "Design features that lead, not follow",
    desc: "Deep domain understanding lets you design workflows that reshape how people work.",
  },
  {
    title: "Inclusive feedback compounds",
    desc: "Making every internal group a testing partner surfaced cross-functional dependencies early.",
  },
  {
    title: "Migration is a design problem",
    desc: "Non-disruptive adoption was as critical as the features themselves.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-semibold text-brand">{children}</p>
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="bg-clip-text text-transparent"
      style={{ backgroundImage: ACCENT_GRADIENT }}
    >
      {children}
    </span>
  );
}

export default function ReindeerCaseStudy() {
  return (
    <article className="pb-24">
      {/* Sticky sub-nav (replaces the global header on case-study pages) */}
      <div className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm">
        <div className="mx-auto flex h-[64px] max-w-[1440px] items-center justify-between px-6 sm:px-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-base font-medium text-ink transition-colors hover:text-muted"
          >
            <span aria-hidden>←</span> Back to home
          </Link>
          <nav className="hidden gap-6 text-base font-medium text-ink md:flex">
            {SUBNAV.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="transition-colors hover:text-brand"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-16">
        {/* Overview / hero card */}
        <section id="overview" className="scroll-mt-[88px] pt-8">
          <div
            className="flex flex-col items-center gap-12 overflow-hidden rounded-card px-6 pt-16 text-center sm:px-16"
            style={{ backgroundImage: HERO_GRADIENT }}
          >
            <div className="flex flex-col items-center gap-2 text-ink">
              <h1 className="font-display text-4xl font-medium sm:text-6xl">
                Reindeer Auto&rsquo;s Logistics OMS
              </h1>
              <p className="text-lg sm:text-2xl">
                Transforming Fleet Logistics with a Purpose-Built Order
                Management System.
              </p>
            </div>

            <div className="grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
              {META.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col items-center justify-center gap-1 rounded-card bg-white/60 p-3 text-ink"
                >
                  <p className="text-xl font-bold">{m.label}</p>
                  <p className="text-base">{m.value}</p>
                </div>
              ))}
            </div>

            <div className="w-full max-w-[680px] overflow-hidden rounded-t-lg shadow-[0_4px_100px_0_rgba(0,0,0,0.2)]">
              <Image
                src="/images/reindeer/hero-oms.png"
                alt="Reindeer Auto's Order Management System — order detail screen"
                width={1920}
                height={1804}
                priority
                className="h-auto w-full object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* About the company */}
        <section className="flex flex-col items-center gap-3 py-24 text-center">
          <Eyebrow>//about the company</Eyebrow>
          <h2 className="font-display text-3xl font-medium">
            Reindeer Auto Relocation
          </h2>
          <p className="max-w-3xl text-base text-ink">
            A national automotive logistics company specializing in fleet
            relocations, freight transportation, and managed vehicle services.
            Their fast-scaling Fleet program serves enterprise clients across
            the U.S.
          </p>
        </section>

        {/* The problem */}
        <section id="problem" className="scroll-mt-[88px] py-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <Eyebrow>// the problem</Eyebrow>
            <h2 className="font-display text-3xl font-medium">
              What was{" "}
              <span className="font-semibold">actually happening</span> on the
              ground?
            </h2>
          </div>

          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            {PROBLEMS.map((p, i) => (
              <div key={p.unit} className="contents sm:flex sm:flex-1">
                <div className="flex flex-1 flex-col items-center gap-3 rounded-card bg-[#f7f7f7] p-6 text-center">
                  <p className="font-display text-4xl font-extrabold leading-tight">
                    <GradientText>
                      {p.stat}
                      <br />
                      {p.unit}
                    </GradientText>
                  </p>
                  <p className="text-base text-ink">{p.desc}</p>
                </div>
                {i < PROBLEMS.length - 1 && (
                  <span
                    aria-hidden
                    className="self-center text-5xl text-ink sm:px-2"
                  >
                    {i === 0 ? "+" : "="}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Key challenges */}
        <section className="py-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <Eyebrow>// key challenges</Eyebrow>
            <h2 className="font-display text-3xl font-medium">
              What did the fleet team{" "}
              <span className="font-semibold">need</span>?
            </h2>
          </div>

          <div className="mx-auto mt-10 flex max-w-[640px] flex-col gap-6">
            {CHALLENGES.map((c) => (
              <div
                key={c.n}
                className="flex items-center gap-6 rounded-card border border-white bg-brand/10 p-6"
              >
                <p className="w-[100px] shrink-0 text-center font-display text-6xl font-extrabold leading-none sm:text-[80px]">
                  <GradientText>{c.n}</GradientText>
                </p>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="text-base text-ink">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Proposed solution */}
        <section id="solution" className="scroll-mt-[88px] py-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <Eyebrow>// proposed solution</Eyebrow>
            <h2 className="font-display text-3xl font-medium">
              <span className="font-semibold">One platform</span> to run it all.
            </h2>
            <p className="max-w-3xl text-base text-ink">
              We built a purpose-built{" "}
              <span className="font-semibold">Order Management System</span> from
              scratch, designed to handle the full lifecycle of fleet logistics,
              from order creation to final delivery.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-3 rounded-card bg-[#f7f7f7] p-6">
              <div className="flex items-center gap-3">
                <span className="rounded-pill border border-[#ececec] bg-[#dddddd]/85 px-3 py-1.5 font-label text-[13px] font-medium uppercase text-[#757575]">
                  Before
                </span>
                <h3 className="font-display text-2xl font-bold">
                  Legacy Workflow
                </h3>
              </div>
              <ul className="flex flex-col gap-1 text-base text-ink">
                {BEFORE.map((line) => (
                  <li key={line}>✕ {line}</li>
                ))}
              </ul>
            </div>

            <div
              className="flex flex-col gap-3 rounded-card p-6 text-white"
              style={{ backgroundImage: ACCENT_GRADIENT }}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-pill border border-[#e2f0e2] bg-[#f1f9f1] px-3 py-1.5 font-label text-[13px] font-medium uppercase text-[#2d5a11]">
                  After
                </span>
                <h3 className="font-display text-2xl font-bold">New System</h3>
              </div>
              <ul className="flex flex-col gap-1 text-base">
                {AFTER.map((line) => (
                  <li key={line}>✓ {line}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Design process */}
        <section id="process" className="scroll-mt-[88px] py-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <Eyebrow>// design process</Eyebrow>
            <h2 className="font-display text-3xl font-medium">
              From discovery to a system that{" "}
              <span className="font-semibold">leads the business</span>
            </h2>
          </div>

          <ProcessCarousel />
        </section>

        {/* Key screens */}
        <section className="py-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <Eyebrow>// key screens</Eyebrow>
            <h2 className="font-display text-3xl font-medium">
              Designing for Ops, Accounting &amp; Services
            </h2>
          </div>

          <KeyScreens />
        </section>

        {/* Outcomes */}
        <section id="result" className="scroll-mt-[88px] py-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <Eyebrow>// outcomes</Eyebrow>
            <h2 className="font-display text-3xl font-medium">
              <span className="font-semibold">What changed</span> after Launch
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {OUTCOMES.map((o) => (
              <div
                key={o.title}
                className="flex flex-col gap-3 rounded-card border-2 border-white bg-[#f7f7f7] p-6"
              >
                <div className="flex size-16 items-center justify-center rounded-card bg-white text-2xl">
                  <span aria-hidden>{o.emoji}</span>
                </div>
                <h3 className="font-display text-2xl font-bold">{o.title}</h3>
                <p className="text-base text-ink">{o.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reflections */}
        <section className="py-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <Eyebrow>// reflections</Eyebrow>
            <h2 className="font-display text-3xl font-semibold">
              What I took away
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-[920px] grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {REFLECTIONS.map((r) => (
              <div key={r.title} className="flex flex-col gap-3 p-6">
                <h3 className="font-display text-2xl font-bold">{r.title}</h3>
                <p className="text-base text-ink">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-center gap-8 py-16 text-center">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-3xl font-bold">
              Let&rsquo;s work together!
            </h2>
            <p className="text-base text-ink">
              Interested in discussing UX strategy, product design, or logistics
              tech?
            </p>
          </div>
          <Link
            href="/connect"
            className="inline-flex items-center gap-2.5 rounded-card bg-brand px-6 py-5 text-xl font-bold text-white transition-opacity hover:opacity-90"
          >
            Get in touch <span aria-hidden>→</span>
          </Link>
        </section>
      </div>
    </article>
  );
}
