export default function StatusTag({
  emoji,
  label,
}: {
  emoji: string;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-pill border border-line bg-surface px-3 py-1.5">
      <span className="text-sm" aria-hidden>
        {emoji}
      </span>
      <span className="font-label text-[13px] font-medium uppercase tracking-wide text-muted">
        {label}
      </span>
    </span>
  );
}
