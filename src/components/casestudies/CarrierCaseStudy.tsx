import Link from "next/link";
import Image from "next/image";

// Carrier Device Buying Experience case study — built 1:1 from the Figma
// "Carrier" frame (node 244:142). Content and styling come from the design;
// nothing here is invented.

const HERO_GRADIENT =
  "linear-gradient(158.55deg, #ffffff 19.114%, #2189ff 122.59%)";

const META = [
  { label: "Role", value: "UX Designer & SME" },
  { label: "Tools", value: "Sketch, UserTesting, Jira, Confluence" },
  { label: "Platform", value: "Samsung.com" },
  { label: "Company", value: "Samsung Electronics" },
];

const SUBNAV = [
  { label: "Overview", href: "#overview" },
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Design Process", href: "#process" },
  { label: "Outcome", href: "#outcome" },
];

const CHALLENGES = [
  {
    title: "15+ Drop-Off Points",
    desc: "Multiple drop-off points prevented users from completing their purchase.",
  },
  {
    title: "Unfamiliar Process",
    desc: "Carrier setup felt unfamiliar, overwhelming, and difficult to understand.",
  },
  {
    title: "Lack of Clarity",
    desc: "Pricing, promotions, and trade-in values lacked clarity throughout the flow.",
  },
  {
    title: "Low Continuation",
    desc: "Resulting in lost carrier activations, missed device sales, or switching to unlocked devices instead.",
  },
];

const SAMSUNG_BENEFITS = [
  "✔️ Online-exclusive colors and storage configurations",
  "✔️ Better inventory availability during major product launches",
  "✔️ Samsung Rewards points that can be redeemed immediately on accessories and future purchases",
];

const CARRIER_BENEFITS = [
  "✔️ Monthly financing and promotional credits",
  "✔️ Trade-in incentives",
  "✔️ eSIM-ready activation",
  "✔️ One bill for both wireless service and device payments",
  "✔️ In-store support, insurance, and ongoing carrier services",
];

const PRIORITIES = [
  { emoji: "📱", label: "Choosing the right device" },
  { emoji: "🧾", label: "Understanding the total cost" },
  { emoji: "🔄", label: "Evaluating promotions & trade-in offers" },
  { emoji: "✅", label: "Completing carrier setup" },
];

const OUTCOMES = [
  {
    emoji: "⚡",
    emojiSize: 24,
    title: "Reduced Friction",
    desc: "Significant reduction in friction points across the end-to-end carrier setup journey on Samsung.com.",
  },
  {
    emoji: "🚀",
    emojiSize: 24,
    title: "Higher Continuation",
    desc: "Increased the number of users successfully connecting their new devices to carriers by improving the end-to-end continuation rate.",
  },
  {
    emoji: "✨",
    emojiSize: 24,
    title: "Better Clarity",
    desc: "Improved transparency in device pricing and offer visibility, reducing confusion throughout the journey.",
  },
  {
    emoji: "🤝",
    emojiSize: 24,
    title: "Improved NPS",
    desc: "Boosted Net Promoter Score through a more intuitive, guided, and transparent carrier experience.",
  },
  {
    emoji: "🏆",
    emojiSize: 20,
    title: "Competitive Edge",
    desc: "Enhanced Samsung.com's carrier journey to align with best-in-class e-commerce UX patterns.",
  },
  {
    emoji: "📋",
    emojiSize: 20,
    title: "Actionable Insights",
    desc: "Identified 15+ friction points across 4 categories, driving a clear roadmap for future journey improvements.",
  },
];

const REFLECTIONS_ROW_1 = [
  {
    title: "Start with behavior, not assumptions",
    desc: "Analyzing actual user flow data revealed friction patterns that internal assumptions had missed — data led the way.",
  },
  {
    title: "Prioritization is a design skill",
    desc: "Mapping 15+ friction points to effort-impact categories helped align the team on what to fix first.",
  },
];

const REFLECTIONS_ROW_2 = [
  {
    title: "SME perspective adds depth",
    desc: "Serving as both designer and subject matter expert allowed for faster, more informed, and more impactful decisions.",
  },
  {
    title: "Continuation rates tell a story",
    desc: "End-to-end continuation rates were the north star — every design decision was evaluated against user success.",
  },
];

const COLLAPSED_SCREENS = [
  "Device Selection",
  "Load Indicator",
  "Total Cost Breakdown",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center text-[16px] font-bold leading-[normal] text-[#757575]">
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  weight = "font-normal",
}: {
  children: React.ReactNode;
  weight?: string;
}) {
  return (
    <h2
      className={`text-center text-[32px] leading-[normal] text-black ${weight}`}
    >
      {children}
    </h2>
  );
}

function Chevron({ up = false, color }: { up?: boolean; color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`size-6 shrink-0 ${up ? "-scale-y-100" : ""}`}
    >
      <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill={color} />
    </svg>
  );
}

export default function CarrierCaseStudy() {
  return (
    <article className="bg-white text-black">
      {/* Sticky sub-nav (replaces the global header on case-study pages) */}
      <div className="sticky top-0 z-40 bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-6 py-6 sm:px-16">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-2 text-[16px] font-medium leading-[normal] text-[#1a1a1a] transition-colors hover:text-muted"
          >
            <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-4">
              <path
                d="M12.6672 8H3.3328M8 3.3328L3.3328 8L8 12.6672"
                stroke="#1A1A1A"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Back to home
          </Link>
          <nav className="hidden flex-1 items-center justify-end gap-6 text-[16px] font-medium leading-[normal] text-[#1a1a1a] md:flex">
            {SUBNAV.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="transition-colors hover:text-muted"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col gap-[300px] px-6 pt-[3px] sm:px-16">
        {/* Overview / hero card */}
        <section id="overview" className="scroll-mt-[88px]">
          <div
            className="flex flex-col items-center gap-[51px] overflow-hidden rounded-[12px] px-6 pt-16 text-center sm:px-16"
            style={{ backgroundImage: HERO_GRADIENT }}
          >
            <div className="flex w-full flex-col items-center justify-center gap-2 text-black">
              <h1 className="text-[40px] font-medium leading-[normal] sm:text-[60px]">
                Carrier Device Buying Experience
              </h1>
              <p className="text-[20px] leading-[normal] sm:text-[24px]">
                Improving the end-to-end carrier setup experience on
                Samsung.com.
              </p>
            </div>

            <div className="flex w-full flex-wrap items-center justify-center gap-4 text-black lg:px-[120px]">
              {META.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col items-center justify-center rounded-[12px] bg-white/30 px-6 py-3 text-center"
                >
                  <p className="text-[20px] font-bold leading-[normal]">
                    {m.label}
                  </p>
                  <p className="text-[16px] leading-[normal] whitespace-nowrap">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full max-w-[660.49px] overflow-hidden rounded-t-[8px] shadow-[0px_4px_100px_0px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/work/carrier-hero-routes.png"
                alt="Carrier device setup flow on Samsung.com — T-Mobile line selection screen"
                width={1800}
                height={1692}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="flex flex-col items-center justify-center gap-11">
          <Image
            src="/images/work/carrier-overview-products.png"
            alt="Samsung Galaxy device family — watch, foldable, phone, ring, and buds"
            width={1312}
            height={300}
            className="h-auto w-full rounded-[12px]"
          />
          <div className="flex w-full flex-col items-center justify-center gap-3">
            <Eyebrow>{"//overview"}</Eyebrow>
            <SectionTitle weight="font-medium">
              Redesigned the Carrier Journey on Samsung.com
            </SectionTitle>
            <div className="max-w-[800px] text-center text-[16px] leading-[normal] text-black">
              <p>
                Redesigned Samsung.com&#39;s end-to-end carrier purchase
                experience, helping customers buy, finance, trade in, and
                activate their devices through major U.S. carriers.
              </p>
              <p>&#8203;</p>
              <p>
                The initiative focused on{" "}
                <span className="font-bold">
                  reducing friction throughout the purchase journey, improving
                  completion rates, and increasing carrier device sales
                </span>{" "}
                by aligning the experience with how customers actually make
                purchase decisions.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-3">
            <p className="text-center text-[16px] font-bold leading-[normal] text-black">
              Our partners:
            </p>
            <div className="flex items-center gap-8 py-3">
              <div className="relative h-[56px] w-[115px]">
                <Image
                  src="/images/work/carrier-partner-tmobile.png"
                  alt="T-Mobile"
                  fill
                  className="object-cover"
                />
              </div>
              <Image
                src="/images/work/carrier-partner-att.svg"
                alt="AT&T"
                width={107}
                height={44}
                className="h-[44px] w-[107.07px]"
              />
              <div className="relative h-[56px] w-[115px] overflow-hidden">
                <Image
                  src="/images/work/carrier-partner-verizon.png"
                  alt="Verizon"
                  width={900}
                  height={470}
                  className="absolute max-w-none"
                  style={{
                    height: "144.5%",
                    width: "135.28%",
                    left: "-17.8%",
                    top: "-21.65%",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* The challenge */}
        <section id="problem" className="flex scroll-mt-[88px] flex-col items-center justify-center gap-10">
          <div className="flex w-full flex-col items-center justify-center gap-3">
            <Eyebrow>{"// the challenge"}</Eyebrow>
            <SectionTitle>What was causing users to drop off?</SectionTitle>
            <div className="max-w-[900px] text-center text-[16px] leading-[normal] text-black">
              <p>
                The carrier purchase flow had become increasingly complex,
                requiring customers to navigate financing, trade-in,
                promotions, and carrier activation within a single experience.
              </p>
              <p>
                Our research uncovered more than{" "}
                <span className="font-bold">multiple usability issues</span>{" "}
                across the journey that created unnecessary friction.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 lg:px-[120px]">
            <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-stretch">
              {CHALLENGES.slice(0, 2).map((c) => (
                <div
                  key={c.title}
                  className="flex min-h-[146px] flex-1 flex-col gap-2 rounded-[12px] bg-[#f7f7f7] px-12 py-6"
                >
                  <h3 className="text-[24px] font-bold leading-[normal]">
                    {c.title}
                  </h3>
                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-[16px] leading-[normal]">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-stretch">
              {CHALLENGES.slice(2).map((c) => (
                <div
                  key={c.title}
                  className="flex flex-1 flex-col gap-2 rounded-[12px] bg-[#f7f7f7] px-12 py-6"
                >
                  <h3 className="text-[24px] font-bold leading-[normal]">
                    {c.title}
                  </h3>
                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-[16px] leading-[normal]">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The users */}
        <section className="flex flex-col items-center justify-center gap-10 lg:py-[136px]">
          <div className="flex w-full flex-col items-center justify-center gap-3">
            <Eyebrow>{"// the users"}</Eyebrow>
            <SectionTitle>Understanding our customers</SectionTitle>
            <p className="max-w-[900px] text-center text-[16px] leading-[normal] text-black">
              Customers purchasing carrier devices come to Samsung.com because
              they want the advantages of{" "}
              <span className="font-bold">
                buying directly from Samsung while still benefiting from their
                carrier&#39;s financing and promotional offers.
              </span>
            </p>
          </div>

          <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-stretch lg:px-[120px]">
            <div className="flex flex-1 flex-col items-start gap-2.5 rounded-[12px] bg-[rgba(33,137,255,0.1)] p-6">
              <h3 className="text-[24px] font-semibold leading-[normal]">
                Exclusive Samsung benefits
              </h3>
              <div className="text-[16px] leading-[19px]">
                {SAMSUNG_BENEFITS.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start gap-2.5 rounded-[12px] bg-[rgba(231,52,139,0.1)] p-6">
              <h3 className="text-[24px] font-semibold leading-[normal]">
                Carrier benefits
              </h3>
              <div className="text-[16px] leading-[19px]">
                {CARRIER_BENEFITS.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solving the problem */}
        <section className="flex flex-col items-center justify-center gap-10 text-center">
          <div className="flex w-full flex-col items-center gap-3">
            <Eyebrow>{"// solving the problem"}</Eyebrow>
            <SectionTitle>
              What Matters Most During the Purchase Journey?
            </SectionTitle>
            <p className="max-w-[850px] text-[16px] leading-[normal] text-black">
              Research revealed that customers evaluate information in a
              predictable sequence, but the existing experience presented it in
              a different order.{" "}
              <span className="font-bold">Users prioritized:</span>
            </p>
          </div>

          <div className="flex w-full flex-col gap-6 lg:px-[160px]">
            {[PRIORITIES.slice(0, 2), PRIORITIES.slice(2)].map((row, i) => (
              <div key={i} className="flex flex-col gap-6 sm:flex-row sm:items-start">
                {row.map((p) => (
                  <div
                    key={p.label}
                    className="flex flex-1 flex-col items-center justify-center gap-6 rounded-[12px] bg-[#f7f7f7] px-6 py-8"
                  >
                    <p className="w-full text-[48px] leading-none">
                      {p.emoji}
                    </p>
                    <p className="w-full text-[20px] leading-[24px]">
                      {p.label}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="max-w-[850px] text-[16px] leading-[normal] text-black">
            The current experience introduced carrier decisions too early,
            forcing users to think about activation before they had confidence
            in their device or pricing decisions.
          </p>
        </section>

        {/* Design approach */}
        <section id="process" className="flex scroll-mt-[88px] flex-col items-center justify-center gap-10">
          <div className="flex w-full flex-col items-center gap-3 text-center">
            <Eyebrow>{"// design approach"}</Eyebrow>
            <SectionTitle>What the design process looks like</SectionTitle>
            <div className="max-w-[950px] text-[16px] leading-[normal] text-black">
              <p>
                Rather than solving isolated usability issues, I focused on
                redesigning the experience around customers&#39; mental
                model.
              </p>
              <p>
                Using customer research, usability testing, analytics, and
                internal business data, I categorized friction points,
                prioritized opportunities, and validated solutions through
                multiple design iterations.
              </p>
            </div>
          </div>

          {/* Journey Audit */}
          <div className="flex w-full max-w-[800px] flex-col justify-center rounded-[12px] bg-[#f7f7f7]">
            <div className="relative h-[310px] w-full overflow-hidden rounded-t-[12px]">
              <Image
                src="/images/work/carrier-approach-journey-audit.png"
                alt="Journey audit — annotated carrier login and plan selection flow"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="flex w-full flex-col gap-3 p-5">
              <h3 className="text-[24px] font-medium leading-[normal] text-black">
                Journey Audit
              </h3>
              <p className="text-[16px] leading-[normal] text-[#757575]">
                Mapped the complete purchase journey from product discovery
                through checkout to identify where customers hesitated, became
                confused, or abandoned the experience.
              </p>
            </div>
          </div>

          {/* Competitive Analysis */}
          <div className="flex w-full max-w-[800px] flex-col justify-center rounded-[12px] bg-[#f7f7f7]">
            <div className="relative h-[310px] w-full overflow-hidden rounded-t-[12px]">
              <Image
                src="/images/work/carrier-approach-competitive-analysis.png"
                alt="Competitive analysis of carrier purchase experiences"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="flex w-full flex-col gap-3 p-5">
              <h3 className="text-[24px] font-medium leading-[normal] text-black">
                Competitive Analysis
              </h3>
              <p className="text-[16px] leading-[normal] text-[#757575]">
                Evaluated purchasing experiences across carriers and competing
                manufacturers to identify interaction patterns, best practices,
                and opportunities for differentiation.
              </p>
            </div>
          </div>

          {/* Opportunity Prioritization */}
          <div className="flex w-full max-w-[800px] flex-col justify-center rounded-[12px] bg-[#f7f7f7]">
            <div className="relative h-[310px] w-full overflow-hidden rounded-t-[12px]">
              <Image
                src="/images/work/carrier-approach-prioritization.png"
                alt="Effort-impact prioritization of friction points"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="flex w-full flex-col gap-3 p-5">
              <h3 className="text-[24px] font-medium leading-[normal] text-black">
                Opportunity Prioritization
              </h3>
              <p className="text-[16px] leading-[normal] text-[#757575]">
                Organized{" "}
                <span className="font-bold">more than 15 friction points </span>
                into strategic workstreams based on customer impact and
                implementation effort, allowing the team to deliver quick wins
                while planning larger platform improvements.
              </p>
            </div>
          </div>

          {/* Design, Test, Iterate */}
          <div className="flex w-full max-w-[800px] flex-col justify-center rounded-[12px] bg-[#f7f7f7]">
            <div className="relative h-[310px] w-full overflow-hidden rounded-t-[12px]">
              <Image
                src="/images/work/carrier-approach-design-test-iterate.png"
                alt="Prototype iterations and usability testing artifacts"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="flex w-full flex-col gap-3 p-5">
              <h3 className="text-[24px] font-medium leading-[normal] text-black">
                Design, Test, Iterate
              </h3>
              <p className="text-[16px] leading-[normal] text-[#757575]">
                Developed prototypes, conducted usability testing, and refined
                solutions through multiple iterations before launch. Each
                release validated design hypotheses and informed the next round
                of improvements.
              </p>
            </div>
          </div>
        </section>

        {/* Key screens */}
        <section id="solution" className="flex scroll-mt-[88px] flex-col gap-10">
          <div className="flex w-full flex-col gap-3 text-center">
            <Eyebrow>{"// key screens"}</Eyebrow>
            <SectionTitle weight="font-medium">
              Selected Design Solutions
            </SectionTitle>
          </div>

          <div className="flex w-full flex-col gap-5 rounded-[12px] bg-white p-6 sm:p-11">
            <hr className="w-full border-t border-[#dddddd]" />
            <div className="flex w-full items-center gap-3">
              <p className="flex-1 text-[24px] font-medium leading-[normal] text-black">
                Carrier Sign In 2FA
              </p>
              <Chevron up color="black" />
            </div>
            <div className="relative aspect-[1224/544] w-full overflow-hidden rounded-[12px]">
              <Image
                src="/images/work/carrier-screen-signin-2fa.png"
                alt="Carrier sign-in 2FA — before and after redesign"
                fill
                className="object-cover"
              />
            </div>
            {COLLAPSED_SCREENS.map((title) => (
              <div key={title} className="flex w-full flex-col gap-5">
                <hr className="w-full border-t border-[#dddddd]" />
                <div className="flex w-full items-center gap-3">
                  <p className="flex-1 text-[24px] font-medium leading-[normal] text-[#757575]">
                    {title}
                  </p>
                  <Chevron color="#757575" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section id="outcome" className="flex scroll-mt-[88px] flex-col gap-10">
          <div className="flex w-full flex-col gap-3 text-center">
            <Eyebrow>{"// outcomes"}</Eyebrow>
            <SectionTitle>Impact</SectionTitle>
          </div>

          <div className="flex w-full flex-col gap-3">
            {[OUTCOMES.slice(0, 3), OUTCOMES.slice(3)].map((row, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
              >
                {row.map((o) => (
                  <div
                    key={o.title}
                    className="flex flex-1 flex-col items-start gap-3 rounded-[12px] border-2 border-white bg-[#f7f7f7] p-6"
                  >
                    <div className="flex flex-col items-center justify-center rounded-[12px] bg-white p-5">
                      <p
                        className="font-bold leading-none whitespace-nowrap"
                        style={{ fontSize: o.emojiSize }}
                      >
                        {o.emoji}
                      </p>
                    </div>
                    <h3 className="text-[24px] font-bold leading-[normal] text-black">
                      {o.title}
                    </h3>
                    <p className="text-[16px] leading-[normal] text-black">
                      {o.desc}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Reflections */}
        <section className="flex flex-col items-center gap-10">
          <div className="flex w-full flex-col gap-3 text-center">
            <Eyebrow>{"// reflections"}</Eyebrow>
            <SectionTitle weight="font-bold">What I took away</SectionTitle>
          </div>

          <div className="flex w-full max-w-[920px] flex-col items-start sm:flex-row">
            {REFLECTIONS_ROW_1.map((r, i) => (
              <div
                key={r.title}
                className={`flex flex-col items-start gap-3 self-stretch rounded-[12px] p-6 ${
                  i === 0 ? "sm:w-[480px]" : "sm:w-[383px]"
                }`}
              >
                <h3 className="text-[24px] font-bold leading-[normal] sm:whitespace-nowrap">
                  {r.title}
                </h3>
                <p className="text-[16px] leading-[normal]">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex w-full max-w-[920px] flex-col items-start sm:flex-row">
            {REFLECTIONS_ROW_2.map((r) => (
              <div
                key={r.title}
                className="flex flex-1 flex-col items-start gap-3 self-stretch rounded-[12px] p-6"
              >
                <h3 className="text-[24px] font-bold leading-[normal] sm:whitespace-nowrap">
                  {r.title}
                </h3>
                <p className="text-[16px] leading-[normal]">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-center gap-8">
          <div className="flex w-full flex-col gap-2 text-center">
            <h2 className="text-[32px] font-bold leading-[normal] text-black">
              Let&#39;s connect
            </h2>
            <p className="text-[16px] leading-[normal] text-black">
              I&#39;d love to connect and see how my work can bring value and
              impact to your organization.
            </p>
          </div>
          <Link
            href="/connect"
            className="flex items-center justify-center gap-2.5 rounded-[12px] bg-[#757575] px-6 py-5 transition-opacity hover:opacity-90"
          >
            <span className="text-[20px] font-bold leading-[normal] text-white">
              Contact me
            </span>
            <svg
              viewBox="0 0 21 20"
              aria-hidden
              className="h-5 w-[21px] shrink-0"
            >
              <path
                d="M9.8427 19.637C9.59551 19.3949 9.46607 19.0869 9.45438 18.7129C9.4436 18.3388 9.5618 18.0308 9.80899 17.7888L16.4157 11.3201H1.34831C0.966292 11.3201 0.645843 11.1934 0.386967 10.9399C0.128989 10.6873 0 10.374 0 10C0 9.62596 0.128989 9.31221 0.386967 9.05875C0.645843 8.80616 0.966292 8.67987 1.34831 8.67987H16.4157L9.80899 2.21122C9.5618 1.9692 9.4436 1.66117 9.45438 1.28713C9.46607 0.913091 9.59551 0.60506 9.8427 0.363036C10.0899 0.121012 10.4045 0 10.7865 0C11.1685 0 11.4831 0.121012 11.7303 0.363036L20.6292 9.07591C20.764 9.18592 20.8598 9.32321 20.9164 9.48779C20.9721 9.65325 21 9.82398 21 10C21 10.176 20.9721 10.341 20.9164 10.495C20.8598 10.6491 20.764 10.7921 20.6292 10.9241L11.7303 19.637C11.4831 19.879 11.1685 20 10.7865 20C10.4045 20 10.0899 19.879 9.8427 19.637Z"
                fill="white"
              />
            </svg>
          </Link>
        </section>
      </div>
    </article>
  );
}
