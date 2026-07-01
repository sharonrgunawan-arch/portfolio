import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import MetaStrip from "@/components/MetaStrip";
import MetricsGrid from "@/components/MetricsGrid";
import { getAllProjects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Sharon Gunawan`,
    description: project.overview,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-[960px] px-6 py-16 sm:px-8">
      <CaseStudyHeader project={project} />

      <div className="mt-12">
        <MetaStrip project={project} />
      </div>

      <div className="mt-12 flex flex-col gap-12">
        {project.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-display text-2xl font-semibold">{s.heading}</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">{s.body}</p>
            {/* Drop full-bleed screenshots between sections as needed */}
            <div className="mt-6 aspect-[16/9] w-full rounded-card bg-surface" />
          </section>
        ))}
      </div>

      {project.metrics && project.metrics.length > 0 && (
        <div className="mt-16">
          <MetricsGrid metrics={project.metrics} />
        </div>
      )}
    </article>
  );
}
