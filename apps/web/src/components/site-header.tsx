"use client";
import Link from "next/link";
import SearchBar from "./search-bar";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3 sm:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded px-2 py-1 text-[var(--color-foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
        >
          <span className="font-display text-xl font-semibold tracking-tight">Echara</span>
        </Link>

        <div className="hidden flex-1 sm:flex">
          <SearchBar />
        </div>

        <nav className="ml-auto hidden items-center gap-4 sm:flex">
          <Link
            href="/buyer/listings"
            className="rounded-full px-3 py-2 text-sm text-[color-mix(in srgb,var(--color-foreground) 75%,white)] transition hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-foreground)]"
          >
            Explore
          </Link>
          <Link
            href="/vendor/onboarding"
            className="rounded-full px-3 py-2 text-sm text-[color-mix(in srgb,var(--color-foreground) 75%,white)] transition hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-foreground)]"
          >
            For Vendors
          </Link>
          <Link
            href="/auth/login"
            className="rounded-full border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-foreground)] hover:border-[var(--color-foreground)]"
          >
            Log in
          </Link>
        </nav>

        <div className="flex flex-1 sm:hidden" />
      </div>

      {/* Mobile search pill */}
      <div className="px-4 pb-3 sm:hidden">
        <SearchBar />
      </div>
    </header>
  );
}

