import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center gap-10 px-6 text-center relative overflow-hidden">
      {/* Faded background 404 */}
      <span className="absolute font-display italic pointer-events-none select-none text-[clamp(10rem,30vw,22rem)] text-accent opacity-[0.04] leading-none">
        404
      </span>

      {/* Icon */}
      <div className="flex items-center justify-center rounded-full bg-surface drop-shadow-lg p-5">
        <svg
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      </div>

      {/* Copy */}
      <div className="flex flex-col items-center gap-3 max-w-sm">
        <span className="font-mono uppercase tracking-widest text-meta text-accent opacity-70">
          Entry #404
        </span>
        <h1 className="text-[clamp(2rem,6vw,2.75rem)]">Page not found</h1>
        <p className="text-secondary text-body leading-normal">
          The link might be broken, or this entry has moved
          <br />
          to a quieter corner of your archive.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center gap-4">
        <Link href="/" className="btn btn-primary rounded-md px-8">
          Back to feed
        </Link>
        <Link
          href="/search"
          className="text-body text-secondary hover:text-primary transition-colors no-underline border-b border-border"
        >
          Search the archives
        </Link>
      </div>
    </div>
  );
}
