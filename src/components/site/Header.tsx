import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoUrl from "@/assets/logo.svg";

const navItems = [
  { label: "Camps", href: "#camps" },
  { label: "Trips", href: "#trips" },
  { label: "Clubs", href: "#clubs" },
  { label: "Blog", href: "#news" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img src={logoUrl} alt="Soccer Camps Pro" className="h-12 w-auto md:h-14" />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-bold uppercase tracking-[0.18em] text-primary-foreground/90 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#search"
            className="hidden rounded-full bg-cta px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-cta-foreground shadow-sm transition-transform hover:scale-[1.02] md:inline-flex"
          >
            Find Your Camp
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/40 text-primary-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-primary-foreground/10 bg-primary/90 backdrop-blur lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary-foreground/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#search"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-cta px-5 py-3 text-xs font-bold uppercase tracking-widest text-cta-foreground"
            >
              Find Your Camp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
