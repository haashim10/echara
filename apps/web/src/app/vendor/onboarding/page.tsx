import { Button } from "@echara/ui";
import Link from "next/link";

const steps = [
  {
    title: "Create your Echara account",
    detail:
      "Sign up with email, Google, or Apple. Accounts are provisioned in Firebase Auth and enriched via the vendors collection.",
  },
  {
    title: "Complete the onboarding wizard",
    detail:
      "We capture business profile details, service categories, geocoded address, and hero imagery with autosave drafts.",
  },
  {
    title: "Submit for admin approval",
    detail:
      "Admins review new vendors, flag content, and control visibility from the dedicated moderation portal.",
  },
];

export default function VendorOnboardingPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-brand-secondary)]">
          Vendors · 60 day free trial
        </p>
        <h1 className="font-display text-3xl text-[var(--color-foreground)]">
          Guide to activating your Echara vendor profile
        </h1>
        <p className="text-[color-mix(in srgb,var(--color-foreground) 70%,white)]">
          The onboarding wizard is being implemented in the next sprint. Below is the content
          model and flow we will wire into the `/vendors` API module and Firebase storage uploads.
        </p>
      </header>

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white/85 p-8 shadow-[var(--shadow-card)]">
        <ol className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-sm font-semibold text-[var(--color-brand-primary)]">
                {index + 1}
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="font-display text-xl text-[var(--color-foreground)]">
                  {step.title}
                </h2>
                <p className="text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">
                  {step.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 grid gap-4 rounded-[var(--radius-sm)] border border-dashed border-[var(--color-border)] bg-[var(--color-brand-surface)]/70 p-6">
          <h3 className="font-display text-lg text-[var(--color-brand-secondary)]">
            API & data checklist
          </h3>
          <ul className="grid gap-2 text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">
            <li>• POST /vendors endpoint with zod validation and autosave drafts</li>
            <li>• Firebase Storage signed uploads for hero image and gallery assets</li>
            <li>• Status gating to prevent listings from publishing pre-approval</li>
            <li>• Trial countdown surface via subscriptionStatus + trialEndDate</li>
          </ul>
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button asChild size="md">
          <Link href="/auth/register">Create vendor account</Link>
        </Button>
        <Button asChild variant="ghost" size="md">
          <Link href="/vendor/dashboard">Preview vendor dashboard</Link>
        </Button>
      </div>
    </main>
  );
}
