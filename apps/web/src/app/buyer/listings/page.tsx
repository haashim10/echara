import { Button } from "@echara/ui";

const categories = [
  "Venues",
  "Photographers",
  "Caterers",
  "Florists",
  "Live Bands",
  "Cake Designers",
];

export default function ListingsPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-brand-secondary)]">
          Buyers · Discovery
        </p>
        <h1 className="font-display text-3xl text-[var(--color-foreground)]">
          Explore curated wedding vendors across the UK
        </h1>
        <p className="max-w-3xl text-[color-mix(in srgb,var(--color-foreground) 70%,white)]">
          Powerful search with category, budget, availability, and map filters lives here. We
          are wiring the UI into the search API and Socket powered wishlists during the next
          implementation sprint.
        </p>
      </header>

      <section className="grid gap-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white/90 p-8 shadow-[var(--shadow-card)]">
        <h2 className="font-display text-xl text-[var(--color-foreground)]">
          Search filters (coming soon)
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[var(--color-brand-secondary)]">
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-brand-surface)] px-3 py-1 text-sm text-[var(--color-brand-secondary)]"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[var(--color-brand-secondary)]">
              Budget range (GBP)
            </label>
            <div className="flex gap-3 text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">
              <span>£500</span>
              <span>—</span>
              <span>£15,000</span>
            </div>
            <p className="text-xs text-[color-mix(in srgb,var(--color-foreground) 50%,white)]">
              Connected to MongoDB aggregation pipelines for min/max pricing per category.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[var(--color-brand-secondary)]">
            Availability window
          </label>
          <p className="text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">
            We will surface manual availability blocks and Google Calendar busy slots directly on
            the results. Buyers can preview open weekends before messaging a vendor.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" disabled>
            Apply filters
          </Button>
          <Button variant="ghost" disabled>
            Save this search
          </Button>
        </div>
      </section>

      <section className="grid gap-4">
        <h2 className="font-display text-xl text-[var(--color-foreground)]">
          Upcoming milestones
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Bind MongoDB Atlas listings collection to server components via React Query cache",
            "Integrate Google Maps Places autocomplete for address and proximity filters",
            "Implement wishlist mutations via /api/v1/auth/me/favourites endpoints",
            "Add skeleton cards and optimistic updates for faster perceived performance",
          ].map((item) => (
            <li
              key={item}
              className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white/70 p-4 text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
