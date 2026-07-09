export default function ScrollIndicator({
  variant = "labeled",
}: {
  /** "labeled" shows text + arrow; "arrow" shows only the bouncing arrow. */
  variant?: "labeled" | "arrow";
}) {
  if (variant === "arrow") {
    return (
      <span
        aria-hidden
        className="block animate-bounce text-2xl leading-none text-ink"
      >
        ↓
      </span>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 text-muted">
      <span className="text-sm">Scroll to discover</span>
      <span aria-hidden className="animate-bounce">
        ↓
      </span>
    </div>
  );
}
