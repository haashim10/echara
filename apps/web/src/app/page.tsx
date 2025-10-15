import Link from "next/link";
import { Button } from "@echara/ui";

const buyerHighlights = [
  "Curated UK vendors across 20+ categories",
  "Real-time availability and wishlist tracking",
  "Direct messaging with vendors before you commit",
];

const vendorHighlights = [
  "Launch with a 60-day free trial",
  "Unified enquiries and booking pipeline",
  "Insights on bookings, spend, and buyer trends",
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[var(--color-brand-surface)]/80 to-white">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-24 sm:px-10">
        <section className="grid gap-12 rounded-[var(--radius-lg)] bg-white/80 px-8 py-12 shadow-[var(--shadow-card)] backdrop-blur-sm sm:grid-cols-[1.2fr_1fr] sm:items-center">
          <div className="flex flex-col gap-6">
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-brand-secondary)]">
              UK Weddings • Events • Experiences
            </span>
            <h1 className="font-display text-4xl font-semibold leading-tight text-[var(--color-foreground)] sm:text-5xl">
              Find wedding vendors you can book with confidence.
            </h1>
            <p className="max-w-xl text-lg text-[color-mix(in srgb,var(--color-foreground) 70%,white)]">
              Echara brings buyers and vendors together with transparent pricing,
              availability, and messaging. Discover, shortlist, and confirm your
              dream team without losing track of the details.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/buyer/listings">Start Exploring Vendors</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/vendor/onboarding">List My Business</Link>
              </Button>
            </div>
            <div className="flex flex-col gap-2 text-sm text-[color-mix(in srgb,var(--color-foreground) 60%,white)]">
              <span>✔ 60-day free trial for vendors • No booking fees for buyers</span>
              <span>✔ Secure chat, booking timelines, and review management built-in</span>
            </div>
          </div>
          <div className="relative flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-brand-surface)]/90 p-6 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-2xl text-[var(--color-brand-secondary)]">
              This week’s trending vendors
            </h2>
            <div className="flex flex-col gap-4 text-[color-mix(in srgb,var(--color-foreground) 75%,white)]">
              {[
                {
                  name: "Cotswold & Bloom",
                  badge: "Florist",
                  stat: "38 enquiries in the last 7 days",
                },
                {
                  name: "Monumental Cakes",
                  badge: "Cake designer",
                  stat: "Rated 4.9★ across 112 weddings",
                },
                {
                  name: "The Reverie Quartet",
                  badge: "Live band",
                  stat: "Featured vendor in London",
                },
              ].map((vendor) => (
                <div
                  key={vendor.name}
                  className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white/90 p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-display text-lg font-semibold text-[var(--color-foreground)]">
                      {vendor.name}
                    </p>
                    <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-brand-primary)]">
                      {vendor.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[color-mix(in srgb,var(--color-foreground) 60%,white)]">
                    {vendor.stat}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-auto text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-brand-secondary)]/80">
              Data refreshed hourly · Admin approved listings only
            </p>
          </div>
        </section>

        <section className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white/85 p-8 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-2xl text-[var(--color-foreground)]">
              For couples & planners
            </h2>
            <p className="mt-2 text-[color-mix(in srgb,var(--color-foreground) 75%,white)]">
              Build shortlists, manage enquiries, and capture every detail in one
              collaborative workspace.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {buyerHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]"
                >
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-brand-primary)]" />
                  {highlight}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6" variant="ghost">
              <Link href="/buyer/listings">Browse by category →</Link>
            </Button>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white/85 p-8 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-2xl text-[var(--color-foreground)]">
              For vendors & venues
            </h2>
            <p className="mt-2 text-[color-mix(in srgb,var(--color-foreground) 75%,white)]">
              Showcase your brand, sync Google Calendar, and keep tabs on
              performance with rich analytics.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {vendorHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]"
                >
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-brand-secondary)]" />
                  {highlight}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6" variant="secondary">
              <Link href="/vendor/onboarding">See vendor toolkit →</Link>
            </Button>
          </div>
        </section>

        <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white/70 p-8 shadow-[var(--shadow-card)]">
          <h2 className="font-display text-2xl text-[var(--color-foreground)]">
            How Echara keeps everyone in sync
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Discover",
                description:
                  "Search by category, budget, location, or availability with map-first results and vendor spotlights.",
              },
              {
                title: "Collaborate",
                description:
                  "Message vendors, log notes, and invite partners to wishlists with real-time updates.",
              },
              {
                title: "Deliver",
                description:
                  "Automated reminders, booking timelines, and review prompts keep events on track end-to-end.",
              },
            ].map((step) => (
              <article
                key={step.title}
                className="flex flex-col gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white/90 p-5"
              >
                <h3 className="font-display text-xl text-[var(--color-brand-secondary)]">
                  {step.title}
                </h3>
                <p className="text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
