export function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-bg/60 backdrop-blur-sm">
      <div className="rounded-2xl border border-line bg-surface p-4">
        <div className="flex gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent delay-150" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent delay-300" />
        </div>
      </div>
    </div>
  );
}
