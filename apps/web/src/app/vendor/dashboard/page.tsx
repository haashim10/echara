const metrics = [
  {
    label: "Confirmed bookings",
    value: "12",
    change: "+18% MoM",
  },
  {
    label: "Enquiries awaiting reply",
    value: "3",
    change: "Reply within 12h",
  },
  {
    label: "Trial days remaining",
    value: "42",
    change: "Upgrade before 15 Mar",
  },
];

export default function VendorDashboardPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-2">
        <h1 className="font-display text-3xl text-[var(--color-foreground)]">
          Vendor performance overview (preview)
        </h1>
        <p className="text-[color-mix(in srgb,var(--color-foreground) 70%,white)]">
          The dashboard will visualise earnings, conversion rate, and campaign spend once the
          aggregation pipelines are wired to MongoDB. The cards below illustrate the planned IA.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white/85 p-6 shadow-[var(--shadow-card)]"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-brand-secondary)]">
              {metric.label}
            </p>
            <p className="mt-3 font-display text-3xl text-[var(--color-foreground)]">
              {metric.value}
            </p>
            <p className="mt-1 text-sm text-[color-mix(in srgb,var(--color-foreground) 60%,white)]">
              {metric.change}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white/85 p-8 shadow-[var(--shadow-card)]">
        <h2 className="font-display text-xl text-[var(--color-foreground)]">
          Coming up next
        </h2>
        <ul className="mt-4 grid gap-3 text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">
          <li>• Vendor insights aggregations powered by MongoDB Atlas pipelines</li>
          <li>• Conversion funnel metrics (views → requests → confirmations)</li>
          <li>• Calendar sync status and quick actions for blocked slots</li>
          <li>• Actions feed for chat, reviews, and booking updates</li>
        </ul>
      </section>
    </main>
  );
}
