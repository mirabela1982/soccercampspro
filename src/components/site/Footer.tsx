import { Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";

const cols = [
  {
    title: "Programs",
    links: ["Camps", "Trips", "Clubs", "Club Programs"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Contact", "Partners"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms", "Cookies"],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent">
                <span className="absolute inset-1 rounded-full border-2 border-primary" />
                <span className="absolute h-1.5 w-5 rotate-45 bg-primary" />
                <span className="absolute h-1.5 w-5 -rotate-45 bg-primary" />
              </span>
              <span className="font-display text-lg font-bold">
                Soccer Camps <span className="text-accent">Pro</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Official youth soccer camps and international experiences from the
              world's top clubs — handpicked for families.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-cta"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-primary-foreground/80 transition-colors hover:text-accent"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="contact" className="mt-14 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-sm text-primary-foreground/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Soccer Camps Pro. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="mailto:hello@soccercampspro.com" className="inline-flex items-center gap-2 hover:text-accent">
              <Mail className="h-4 w-4" />
              <span>hello@soccercampspro.com</span>
            </a>
            <a href="tel:+1000000000" className="inline-flex items-center gap-2 hover:text-accent">
              <Phone className="h-4 w-4" />
              <span>+1 (000) 000-0000</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
