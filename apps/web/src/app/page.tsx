import Link from "next/link";
import { Button } from "@echara/ui";
import {
  buyerHighlights,
  getTrendingVendors,
  howItWorks,
  vendorHighlights,
} from "@echara/core";
import SearchBar from "../components/search-bar";

export default async function Home() {
  const trendingVendors = await getTrendingVendors();

  return (
    <div className="bg-[var(--color-background)]">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-14 sm:px-10">
        {/* Hero */}
        <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-foreground)]/60">
            UK Weddings • Events • Experiences
          </span>
          <h1 className="font-display text-4xl font-semibold leading-tight text-[var(--color-foreground)] sm:text-5xl">
            Book wedding vendors you’ll love, with confidence
          </h1>
          <p className="max-w-2xl text-lg text-[color-mix(in srgb,var(--color-foreground) 70%,white)]">
            Transparent pricing, availability, and messaging—so you can shortlist, compare and confirm without the back-and-forth.
          </p>
          <div className="w-full">
            <SearchBar />
          </div>
          <div className="flex flex-col gap-1 text-xs text-[color-mix(in srgb,var(--color-foreground) 60%,white)]">
            <span>60-day free trial for vendors • No booking fees for buyers</span>
          </div>
        </section>

        {/* Highlights */}
        <section className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-2xl text-[var(--color-foreground)]">For couples & planners</h2>
            <p className="mt-2 text-[color-mix(in srgb,var(--color-foreground) 75%,white)]">
              Build shortlists, manage enquiries, and capture every detail in one collaborative workspace.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {buyerHighlights.map((highlight) => (
                <li
                  key={highlight.id}
                  className="flex items-start gap-3 text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]"
                >
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-brand-primary)]" />
                  {highlight.copy}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6" variant="ghost">
              <Link href="/buyer/listings">Browse by category →</Link>
            </Button>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-2xl text-[var(--color-foreground)]">For vendors & venues</h2>
            <p className="mt-2 text-[color-mix(in srgb,var(--color-foreground) 75%,white)]">
              Showcase your brand, sync Google Calendar, and keep tabs on performance with rich analytics.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {vendorHighlights.map((highlight) => (
                <li
                  key={highlight.id}
                  className="flex items-start gap-3 text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]"
                >
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-brand-secondary)]" />
                  {highlight.copy}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6" variant="secondary">
              <Link href="/vendor/onboarding">See vendor toolkit →</Link>
            </Button>
          </div>
        </section>

        {/* Trending vendors */}
        <section className="grid gap-6">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl text-[var(--color-foreground)]">This week’s trending vendors</h2>
            <Link href="/buyer/listings" className="text-sm text-[var(--color-brand-primary)] underline">
              See all
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {trendingVendors.map((vendor) => (
              <article
                key={vendor.id}
                className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="font-display text-lg font-semibold text-[var(--color-foreground)]">
                    {vendor.name}
                  </p>
                  <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-brand-primary)]">
                    {vendor.category}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[color-mix(in srgb,var(--color-foreground) 60%,white)]">
                  {vendor.headlineStat}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)]">
          <h2 className="font-display text-2xl text-[var(--color-foreground)]">How Echara keeps everyone in sync</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {howItWorks.map((step) => (
              <article
                key={step.id}
                className="flex flex-col gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white/90 p-5"
              >
                <h3 className="font-display text-xl text-[var(--color-brand-secondary)]">{step.title}</h3>
                <p className="text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">{step.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
