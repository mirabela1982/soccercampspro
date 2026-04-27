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

      <div className="relative mx-auto max-w-4xl px-4 pb-28 pt-10 text-center md:px-6 md:pb-32 md:pt-14 lg:px-8 lg:pb-36 lg:pt-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Official Youth Soccer Camps
        </span>

        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
          Find the Best{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Youth Soccer</span>
            <span className="absolute bottom-1 left-0 z-0 h-3 w-full -skew-x-6 bg-accent/60 md:bottom-2 md:h-4" />
          </span>{" "}
          Camps
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
          Discover official and trusted soccer camps across North America from
          top international clubs.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
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
      </div>

      {/* SVG wave divider */}
      <svg
        aria-hidden
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-[60px] w-full text-background md:h-[100px]"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,128 480,0 720,32 C960,64 1200,128 1440,80 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  );
}
