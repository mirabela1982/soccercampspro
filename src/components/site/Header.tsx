import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Camps", href: "#camps" },
  { label: "Trips", href: "#trips" },
  { label: "Clubs", href: "#clubs" },
  { label: "Blog", href: "#news" },
  { label: "Contact", href: "#contact" },
];

function Logo({ inverted = false }: { inverted?: boolean }) {
  const text = inverted ? "text-primary-foreground" : "text-primary";
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent">
        <span className="absolute inset-1 rounded-full border-2 border-primary/80" />
        <span className="absolute h-1.5 w-5 rotate-45 bg-primary/80" />
        <span className="absolute h-1.5 w-5 -rotate-45 bg-primary/80" />
      </span>
      <span className={`font-display text-lg font-bold leading-none ${text}`}>
        Soccer Camps <span className="text-cta">Pro</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-cta"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#search"
            className="hidden rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-cta-foreground shadow-sm transition-transform hover:scale-[1.02] md:inline-flex"
          >
            Find Your Camp
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-foreground hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#search"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground"
            >
              Find Your Camp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
