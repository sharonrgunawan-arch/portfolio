import Link from "next/link";

export default function ComingSoon({
  title,
  message,
  backHref = "/work",
  backLabel = "← All projects",
}: {
  title: string;
  message?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <section className="mx-auto flex max-w-[960px] flex-col items-center gap-4 px-6 py-32 text-center sm:px-8">
      <span className="font-label text-[13px] font-medium uppercase tracking-wide text-muted">
        Coming soon
      </span>
      <h1 className="font-display text-3xl font-semibold sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-md text-lg text-muted">
        {message ?? "This page is still being put together. Check back soon."}
      </p>
      <Link href={backHref} className="mt-4 text-sm text-muted hover:text-ink">
        {backLabel}
      </Link>
    </section>
  );
}
