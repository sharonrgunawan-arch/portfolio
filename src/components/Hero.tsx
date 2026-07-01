import StatusTag from "./StatusTag";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-6 pt-20 pb-12 text-center sm:px-16">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <h1 className="font-display text-4xl font-semibold sm:text-[44px]">
          hello 👋🏻
        </h1>

        {/* Tilted dual-avatar card (recreated from Figma 6:1008) */}
        <div className="relative flex h-[116px] w-[150px] items-center justify-center">
          <div className="absolute size-[115px] -rotate-[8deg] rounded-card border border-ink bg-surface" />
          <div className="absolute size-[115px] rotate-[8deg] overflow-hidden rounded-card border border-ink">
            {/* Replace with the real avatar photo exported from Figma */}
            <div className="size-full bg-gradient-to-br from-rose-200 via-amber-100 to-sky-200" />
          </div>
        </div>

        <h1 className="font-display text-4xl font-semibold sm:text-[44px]">
          I&rsquo;m Sharon
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <StatusTag emoji="👩🏻‍💻" label="Senior UX Designer" />
        <StatusTag emoji="⏰" label="6+ years of experience" />
        <StatusTag emoji="🤖" label="Samsung Electronics America" />
      </div>

      <p className="max-w-2xl text-base text-muted">
        <span className="font-medium text-ink">
          Organizing complexity into experiences people love.
        </span>{" "}
        Crafting clear, intuitive experiences across big tech, startups, and
        nonprofits.
      </p>

      <div className="pt-8">
        <ScrollIndicator />
      </div>
    </section>
  );
}
