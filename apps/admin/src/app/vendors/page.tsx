import { Button } from "@echara/ui";

const statuses = ["Pending", "Approved", "Suspended"];

export default function AdminVendorsPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16">
      <header className="flex flex-col gap-2">
        <h1 className="font-display text-3xl text-[var(--color-foreground)]">
          Vendors moderation queue (scaffolding)
        </h1>
        <p className="text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">
          This page will marshal the admin routes for approving, suspending, or featuring vendors.
          It will connect to Firebase custom claims and MongoDB vendor records.
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        {statuses.map((status) => (
          <Button key={status} disabled variant="secondary">
            {status}
          </Button>
        ))}
      </div>

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white/85 p-8 shadow-[var(--shadow-card)]">
        <p className="text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">
          • Table of vendors with quick actions for approve/reject and feature toggles
        </p>
        <p className="text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">
          • Deep links into listings, chat transcript (read-only), and admin notes
        </p>
        <p className="text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">
          • AdminLogs capture every action with metadata for audit trails
        </p>
      </section>
    </main>
  );
}
