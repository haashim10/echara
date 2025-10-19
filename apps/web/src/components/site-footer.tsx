import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--color-border)] bg-white/70">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 text-sm text-[color-mix(in srgb,var(--color-foreground) 65%,white)] sm:px-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Echara</p>
          <nav className="flex flex-wrap items-center gap-4">
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <Link href="#" className="hover:underline">
              Terms
            </Link>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

