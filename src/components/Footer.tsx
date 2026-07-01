import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-16">
        <p className="font-display text-base font-semibold">Sharon Gunawan</p>
        <div className="flex gap-6 text-sm text-muted">
          <Link href="/work" className="hover:text-ink">
            Work
          </Link>
          <Link href="/play" className="hover:text-ink">
            Play
          </Link>
          <Link href="/connect" className="hover:text-ink">
            Connect
          </Link>
        </div>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Sharon Gunawan
        </p>
      </div>
    </footer>
  );
}
