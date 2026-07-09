import Image from "next/image";
import StatusTag from "./StatusTag";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-6 pt-24 pb-10 text-center sm:px-16">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <h1 className="font-display text-4xl font-medium sm:text-[44px]">
          hello 👋🏻
        </h1>

        {/* avatar.png already contains the tilted tile artwork — render it as-is. */}
        <Image
          src="/images/avatar.png"
          alt="Sharon Gunawan"
          width={130}
          height={130}
          priority
          className="mx-2"
        />

        <h1 className="font-display text-4xl font-medium sm:text-[44px]">
          I&rsquo;m Sharon
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <StatusTag emoji="👩🏻‍💻" label="Senior UX Designer" />
        <StatusTag emoji="⏰" label="6+ years of experience" />
        <StatusTag emoji="🤖" label="Samsung Electronics America" />
      </div>

      <p className="max-w-2xl text-base font-bold text-muted">
        Organizing complexity into experiences people love.
        <br />
        Crafting clear, intuitive experiences across big tech, startups, and
        nonprofits.
      </p>

      <div className="pt-8">
        <ScrollIndicator variant="arrow" />
      </div>
    </section>
  );
}
