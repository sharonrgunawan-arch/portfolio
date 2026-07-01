export default function ScrollIndicator() {
  return (
    <div className="flex items-center justify-center gap-2 text-muted">
      <span className="text-sm">Scroll to discover</span>
      <span aria-hidden className="animate-bounce">
        ↓
      </span>
    </div>
  );
}
