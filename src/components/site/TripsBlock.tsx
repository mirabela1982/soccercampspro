import { ArrowRight } from "lucide-react";

export function TripsBlock() {
  return (
    <section id="trips" className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
      <div className="grid gap-10 overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border lg:grid-cols-2 lg:gap-0">
        <div className="relative min-h-[320px] overflow-hidden lg:min-h-[480px]">
          <img
            src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1400&q=80"
            alt="Family soccer trip experience"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-cta px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cta-foreground">
            Soccer Trips
          </span>
        </div>

        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
            Beyond the camp
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
            Go Beyond the{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Camp</span>
              <span className="absolute -bottom-1 left-0 z-0 h-2.5 w-full -skew-x-6 bg-accent/70" />
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Discover soccer trips designed for passionate players and families
            looking for a complete international soccer experience — combining
            training, matches and exclusive moments.
          </p>

          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground shadow-lg shadow-cta/25 transition-transform hover:scale-[1.02]"
            >
              Explore Trips <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
