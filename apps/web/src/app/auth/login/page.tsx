import Link from "next/link";
import { Button } from "@echara/ui";

export default function LoginPage() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-col gap-8 px-6 py-16">
      <header className="flex flex-col gap-2 text-center">
        <h1 className="font-display text-3xl text-[var(--color-foreground)]">
          Welcome back
        </h1>
        <p className="text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)]">
          Email, Google, and Apple sign-in will be configured via Firebase Auth. The form below
          represents the future UI.
        </p>
      </header>

      <form className="grid gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white/90 p-6 shadow-[var(--shadow-card)]">
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
        <label className="flex flex-col gap-2 text-left">
          <span className="text-sm font-medium text-[var(--color-brand-secondary)]">
            Password
          </span>
          <input
            disabled
            type="password"
            placeholder="••••••••"
            className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white px-3 py-2 text-sm text-[var(--color-foreground)] placeholder:text-[color-mix(in srgb,var(--color-foreground) 50%,white)]"
          />
        </label>
        <Button disabled type="submit" className="mt-2">
          Sign in
        </Button>
        <div className="flex flex-col gap-2 text-sm text-[color-mix(in srgb,var(--color-foreground) 60%,white)]">
          <span className="mt-2 text-center text-xs uppercase tracking-[0.3em] text-[var(--color-brand-secondary)]">
            Social sign-in
          </span>
          <Button disabled variant="secondary">
            Continue with Google
          </Button>
          <Button disabled variant="secondary">
            Continue with Apple
          </Button>
        </div>
      </form>

      <p className="text-center text-sm text-[color-mix(in srgb,var(--color-foreground) 60%,white)]">
        New to Echara?{" "}
        <Link className="text-[var(--color-brand-primary)] underline" href="/auth/register">
          Create an account
        </Link>
      </p>
    </main>
  );
}
