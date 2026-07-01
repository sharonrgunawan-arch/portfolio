import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect — Sharon Gunawan",
  description: "Get in touch with Sharon Gunawan.",
};

// Update these with real handles/links.
const links = [
  { label: "Email", value: "sharonrgunawan@gmail.com", href: "mailto:sharonrgunawan@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/sharongunawan", href: "https://www.linkedin.com/in/sharongunawan" },
  { label: "Resume", value: "Download PDF", href: "#" },
];

export default function ConnectPage() {
  return (
    <section className="mx-auto max-w-[960px] px-6 py-24 sm:px-8">
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">
        Let&rsquo;s connect
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        I&rsquo;m always happy to chat about design, complex problems, and good
        coffee. Reach out through any of these.
      </p>

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {links.map((l) => {
          const external = l.href.startsWith("http");
          return (
          <li key={l.label}>
            <a
              href={l.href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-center justify-between py-5"
            >
              <span className="font-label text-[13px] font-medium uppercase tracking-wide text-muted">
                {l.label}
              </span>
              <span className="font-display text-lg transition-colors group-hover:text-muted">
                {l.value} →
              </span>
            </a>
          </li>
          );
        })}
      </ul>
    </section>
  );
}
