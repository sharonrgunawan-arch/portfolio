import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects();

  return (
    <>
      <Hero />

      <section
        id="work"
        className="mx-auto max-w-[1440px] scroll-mt-[72px] px-6 pb-24 sm:px-16"
      >
        <div className="flex items-end justify-between border-t border-line pt-12">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Featured projects
          </h2>
          <Link
            href="/work"
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            See all projects →
          </Link>
        </div>

        <div className="mt-12">
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </>
  );
}
