import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      {/* Cover — replace gradient with the exported Figma image */}
      <div
        className={`aspect-[634/440] w-full rounded-card bg-gradient-to-br ${project.cover} transition-transform duration-300 group-hover:scale-[1.01]`}
      />
      <div className="mt-4">
        <span className="font-label text-[13px] font-medium uppercase tracking-wide text-muted">
          {project.company}
        </span>
        <h3 className="mt-1 font-display text-xl font-semibold">
          {project.title}{" "}
          <span className="font-body text-base font-normal text-muted">
            · {project.summary}
          </span>
        </h3>
      </div>
    </Link>
  );
}
