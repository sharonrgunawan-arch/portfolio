import type { Project } from "@/lib/projects";

export default function MetaStrip({ project }: { project: Project }) {
  const items = [
    { label: "Role", value: project.role },
    { label: "Industry", value: project.industry },
    { label: "Platform", value: project.platform },
    { label: "Timeline", value: project.timeline },
  ];

  return (
    <dl className="grid grid-cols-1 gap-6 border-y border-line py-8 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => (
        <div key={it.label}>
          <dt className="font-label text-[13px] font-medium uppercase tracking-wide text-muted">
            {it.label}
          </dt>
          <dd className="mt-1 text-base">{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
