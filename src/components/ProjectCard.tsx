import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      {project.cover ? (
        <div className="relative aspect-[634/440] w-full overflow-hidden rounded-card bg-surface transition-transform duration-300 group-hover:scale-[1.01]">
          <Image
            src={project.cover}
            alt={`${project.title} cover`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex aspect-[634/440] w-full items-center justify-center rounded-card bg-surface transition-transform duration-300 group-hover:scale-[1.01]">
          <span className="font-label text-[13px] font-medium uppercase tracking-wide text-muted">
            Coming soon
          </span>
        </div>
      )}
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
