import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <header className="flex flex-col gap-6">
      <Link href="/work" className="text-sm text-muted hover:text-ink">
        ← All projects
      </Link>
      <span className="font-label text-[13px] font-medium uppercase tracking-wide text-muted">
        {project.company}
      </span>
      <h1 className="max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
        {project.title}
      </h1>
      <p className="max-w-3xl text-lg text-muted">{project.overview}</p>

      {/* Full-bleed hero image — replace with exported Figma screenshot */}
      <div className="mt-4 aspect-[16/7] w-full rounded-card bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
    </header>
  );
}
