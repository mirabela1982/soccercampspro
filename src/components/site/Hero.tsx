import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* lime blob top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-10 h-40 w-40 rounded-full bg-cta/30 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-32 pt-16 md:px-6 md:pb-40 md:pt-20 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-48 lg:pt-24">
        <div className="lg:col-span-6 lg:pt-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Official Youth Soccer Camps
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Find the Best{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Youth Soccer</span>
              <span className="absolute bottom-1 left-0 z-0 h-3 w-full -skew-x-6 bg-accent/60 md:bottom-2 md:h-4" />
            </span>{" "}
            Camps
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
            Discover official and trusted soccer camps across North America from
            top international clubs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#camps"
              className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-sm font-semibold text-cta-foreground shadow-lg shadow-cta/30 transition-transform hover:scale-[1.02]"
            >
              Explore Camps <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#clubs"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              View Clubs
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-primary-foreground/70">
            <div>
              <div className="font-display text-2xl font-bold text-primary-foreground">50+</div>
              <div className="text-xs uppercase tracking-widest">Verified Camps</div>
            </div>
            <div className="h-10 w-px bg-primary-foreground/20" />
            <div>
              <div className="font-display text-2xl font-bold text-primary-foreground">15+</div>
              <div className="text-xs uppercase tracking-widest">International Clubs</div>
            </div>
            <div className="h-10 w-px bg-primary-foreground/20" />
            <div>
              <div className="font-display text-2xl font-bold text-primary-foreground">10K+</div>
              <div className="text-xs uppercase tracking-widest">Happy Families</div>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1400&q=80"
              alt="Young soccer players training on the pitch"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-background/95 p-4 text-foreground shadow-xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent">
                <span className="font-display text-lg font-bold text-primary">★</span>
              </div>
              <div>
                <div className="text-sm font-semibold">Trusted by 10,000+ families</div>
                <div className="text-xs text-muted-foreground">
                  Verified experiences with top clubs worldwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG wave divider */}
      <svg
        aria-hidden
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-[80px] w-full text-background md:h-[120px]"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,128 480,0 720,32 C960,64 1200,128 1440,80 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  );
}
