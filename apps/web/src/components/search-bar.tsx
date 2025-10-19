"use client";
import Link from "next/link";

export default function SearchBar() {
  return (
    <Link
      href="/buyer/listings"
      className="group mx-auto flex w-full max-w-2xl items-center gap-3 rounded-full border border-[var(--color-border)] bg-white/90 px-4 py-2 shadow-[var(--shadow-card)] backdrop-blur transition hover:shadow-md focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
      aria-label="Search vendors on Echara"
    >
      <div className="flex flex-1 items-center divide-x divide-[var(--color-border)]">
        <div className="flex flex-1 items-center gap-2 px-2">
          <span className="text-xs font-medium uppercase tracking-wide text-[var(--color-foreground)]/70">
            Location
          </span>
          <span className="text-sm text-[color-mix(in srgb,var(--color-foreground) 60%,white)]">
            Anywhere in the UK
          </span>
        </div>
        <div className="hidden flex-1 items-center gap-2 px-3 sm:flex">
          <span className="text-xs font-medium uppercase tracking-wide text-[var(--color-foreground)]/70">
            Date
          </span>
          <span className="text-sm text-[color-mix(in srgb,var(--color-foreground) 60%,white)]">
            Add dates
          </span>
        </div>
        <div className="hidden flex-1 items-center gap-2 px-3 md:flex">
          <span className="text-xs font-medium uppercase tracking-wide text-[var(--color-foreground)]/70">
            Budget
          </span>
          <span className="text-sm text-[color-mix(in srgb,var(--color-foreground) 60%,white)]">
            Any
          </span>
        </div>
      </div>
      <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-primary)] px-3 py-1.5 text-sm font-semibold text-white transition group-hover:brightness-110">
        Search
      </span>
    </Link>
  );
}

