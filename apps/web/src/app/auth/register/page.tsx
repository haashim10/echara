import Link from "next/link";
import { Button } from "@echara/ui";

export default function RegisterPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-6 py-16">
      <header className="flex flex-col gap-2 text-center">
        <h1 className="font-display text-3xl text-[var(--color-foreground)]">
          Create your Echara account
        </h1>
        <p className="text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">
          We will support both buyer and vendor journeys here. Choosing the vendor role guides
          you to the onboarding wizard after registration.
        </p>
      </header>

      <form className="grid gap-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white/90 p-6 shadow-[var(--shadow-card)]">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-left">
            <span className="text-sm font-medium text-[var(--color-brand-secondary)]">
              Name
            </span>
            <input
              disabled
              type="text"
              placeholder="Alex Taylor"
              className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white px-3 py-2 text-sm text-[var(--color-foreground)] placeholder:text-[color-mix(in srgb,var(--color-foreground) 50%,white)]"
            />
          </label>
          <label className="flex flex-col gap-2 text-left">
            <span className="text-sm font-medium text-[var(--color-brand-secondary)]">
              Email
            </span>
            <input
              disabled
              type="email"
              placeholder="you@example.com"
              className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white px-3 py-2 text-sm text-[var(--color-foreground)] placeholder:text-[color-mix(in srgb,var(--color-foreground) 50%,white)]"
            />
          </label>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-left">
            <span className="text-sm font-medium text-[var(--color-brand-secondary)]">
              Password
            </span>
            <input
              disabled
              type="password"
              placeholder="Strong password"
              className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white px-3 py-2 text-sm text-[var(--color-foreground)] placeholder:text-[color-mix(in srgb,var(--color-foreground) 50%,white)]"
            />
          </label>
          <label className="flex flex-col gap-2 text-left">
            <span className="text-sm font-medium text-[var(--color-brand-secondary)]">
              Role
            </span>
            <select
              disabled
              className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white px-3 py-2 text-sm text-[var(--color-foreground)]"
            >
              <option>Buyer</option>
              <option>Vendor</option>
            </select>
          </label>
        </div>
        <Button disabled type="submit">
          Create account
        </Button>
        <Button disabled variant="secondary">
          Continue with Google
        </Button>
      </form>

      <p className="text-center text-sm text-[color-mix(in srgb,var(--color-foreground) 60%,white)]">
        Already have an account?{" "}
        <Link className="text-[var(--color-brand-primary)] underline" href="/auth/login">
          Sign in
        </Link>
      </p>
    </main>
  );
}
