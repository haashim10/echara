import Link from "next/link";
import { Button } from "@echara/ui";

const metrics = [
  { label: "Vendors pending approval", value: "7", helper: "Review within 24h" },
  { label: "Listings flagged", value: "3", helper: "2 new photo reports" },
  { label: "Open disputes", value: "1", helper: "Escalated chat thread" },
  { label: "Bookings (last 7 days)", value: "48", helper: "+12% vs prior week" },
];

const reviewQueue = [
  {
    vendor: "Northern Light Films",
    submittedAt: "10 Oct • 09:20",
    notes: "Awaiting portfolio link validation",
  },
  {
    vendor: "Camden Event Loft",
    submittedAt: "10 Oct • 08:05",
    notes: "Check public liability certificate",
  },
  {
    vendor: "Velvet Bloom Floristry",
    submittedAt: "9 Oct • 17:42",
    notes: "Review flagged imagery",
  },
];

export default function AdminDashboard() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-brand-secondary)]">
            Echara control centre
          </p>
          <h1 className="font-display text-3xl text-[var(--color-foreground)]">
            Moderation & analytics overview
          </h1>
          <p className="max-w-2xl text-sm text-[color-mix(in srgb,var(--color-foreground) 70%,white)]">
            Admin tooling is being scaffolded to manage vendor approvals, listing visibility,
            review moderation, and analytics. The sections below outline the UI surfaces we will
            activate while wiring the Express admin routes.
          </p>
        </div>
        <Button asChild variant="secondary">
          <Link href="/admin/vendors">View vendors queue</Link>
        </Button>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white/85 p-6 shadow-[var(--shadow-card)]"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-brand-secondary)]">
              {metric.label}
            </p>
            <p className="mt-3 font-display text-3xl text-[var(--color-foreground)]">
              {metric.value}
            </p>
            <p className="mt-1 text-xs text-[color-mix(in srgb,var(--color-foreground) 60%,white)]">
              {metric.helper}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white/80 p-8 shadow-[var(--shadow-card)]">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="font-display text-xl text-[var(--color-foreground)]">
              Vendor approval queue
            </h2>
            <p className="text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">
              Powered by GET /admin/vendors?status=pending. Approvals trigger Socket notifications
              and visibility toggles for listings.
            </p>
          </div>
          <Button variant="ghost" disabled>
            Bulk approve (coming soon)
          </Button>
        </header>
        <div className="overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white">
          <table className="min-w-full divide-y divide-[var(--color-border)] text-sm">
            <thead className="bg-[var(--color-brand-surface)]/70 text-left">
              <tr>
                <th className="px-4 py-3 font-medium text-[var(--color-brand-secondary)]">Vendor</th>
                <th className="px-4 py-3 font-medium text-[var(--color-brand-secondary)]">Submitted</th>
                <th className="px-4 py-3 font-medium text-[var(--color-brand-secondary)]">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {reviewQueue.map((item) => (
                <tr key={item.vendor} className="hover:bg-[var(--color-brand-surface)]/40">
                  <td className="px-4 py-3 font-medium text-[var(--color-foreground)]">
                    {item.vendor}
                  </td>
                  <td className="px-4 py-3 text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">
                    {item.submittedAt}
                  </td>
                  <td className="px-4 py-3 text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">
                    {item.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white/85 p-8 shadow-[var(--shadow-card)]">
        <h2 className="font-display text-xl text-[var(--color-foreground)]">
          Analytics highlights
        </h2>
        <p className="text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">
          The admin dashboard will call GET /admin/analytics/overview to surface platform KPIs.
          We will chart MAU/WAU/DAU, category performance, and review sentiment here.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            "Bookings conversion funnel",
            "Category heatmap (UK regions)",
            "Rating distribution & red flags",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[var(--radius-sm)] border border-dashed border-[var(--color-border)] bg-white/70 p-4 text-sm text-[color-mix(in srgb,var(--color-foreground) 60%,white)]"
            >
              Placeholder for {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
