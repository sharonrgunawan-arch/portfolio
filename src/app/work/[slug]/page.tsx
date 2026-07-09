import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComingSoon from "@/components/ComingSoon";
import ReindeerCaseStudy from "@/components/casestudies/ReindeerCaseStudy";
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
    description: project.summary,
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

  if (slug === "fleet-logistics-oms") {
    return <ReindeerCaseStudy />;
  }

  // CarrierCaseStudy is built (components/casestudies/CarrierCaseStudy.tsx) but
  // intentionally not wired up yet — the design is still being edited. The slug
  // falls through to ComingSoon until the owner signs off.

  return (
    <ComingSoon
      title={project.title}
      message="This case study is still being written up. Check back soon."
    />
  );
}
