import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group flex flex-col gap-6">
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
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium text-ink">{project.title}</h3>
        <p className="text-base text-[#757575]">
          {project.description ?? project.summary}
        </p>
      </div>
    </Link>
  );
}
