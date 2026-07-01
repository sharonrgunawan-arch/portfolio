import type { Metric } from "@/lib/projects";

export default function MetricsGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold">
        What changed after launch
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-card border border-line bg-surface p-6"
          >
            <div className="font-display text-3xl font-semibold">{m.value}</div>
            <div className="mt-1 text-sm text-muted">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
