import type { Metadata } from "next";
import ProjectGrid from "@/components/ProjectGrid";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Sharon Gunawan",
  description: "Selected UX design projects and case studies.",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-16">
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">Work</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Case studies across big tech, startups, and nonprofits.
      </p>
      <div className="mt-14">
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
