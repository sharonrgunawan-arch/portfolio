"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/play", label: "Play" },
  { href: "/connect", label: "Connect" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Case-study pages (/work/<slug>) have their own sub-nav; hide the global one.
  if (pathname?.startsWith("/work/")) return null;

  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-sm border-b border-line">
      <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 sm:px-16">
        <Link href="/" className="font-display text-2xl font-bold tracking-tight">
          Sharon Gunawan
        </Link>

        <ul className="hidden items-center gap-6 sm:flex">
          {links.map((l) => {
            const active =
              l.href === "/#work"
                ? pathname === "/"
                : pathname?.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-base transition-colors hover:text-muted ${
                    active
                      ? "font-bold text-ink underline underline-offset-4"
                      : "font-normal text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden"
        >
          <span className="block text-2xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line px-6 py-3 sm:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-base text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
