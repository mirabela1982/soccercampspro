import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-soccer.jpg";
import { SearchBar } from "@/components/site/SearchBar";

export function Hero() {
  return (
    <section
      className="relative flex flex-col overflow-hidden bg-primary text-primary-foreground"
      style={{ minHeight: "100svh" }}
    >
      {/* background image */}
      <img
        src={heroImage}
        alt="Kids playing soccer on a green field"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* navy/blue tinted overlay matching logo/brand primary */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.22 0.06 260 / 0.78) 0%, oklch(0.22 0.06 260 / 0.62) 45%, oklch(0.22 0.06 260 / 0.78) 100%)",
        }}
      />

      {/* lime accent blob top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
      />

      {/* Curved divider — arc opening downward (concave into next section) */}
      <svg
        aria-hidden
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 h-[90px] w-full text-background md:h-[140px]"
      >
        <path fill="currentColor" d="M0,220 L0,40 Q720,260 1440,40 L1440,220 Z" />
      </svg>

      {/* Content wrapper fills viewport and ends with searchbar above the fold */}
      <div className="relative z-10 flex min-h-[100svh] w-full flex-col">
        {/* spacer for header */}
        <div className="h-16 shrink-0 md:h-20" />

        {/* hero text — flex-1 absorbs available space */}
        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-4 pb-4 text-center md:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Official Youth Soccer Camps
          </span>

          <h1 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Find Your Youth
            <br />
            <span className="text-accent">Soccer Camp</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/85 md:text-sm">
            Official soccer camps from top international clubs
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <a
              href="#camps"
              className="inline-flex items-center gap-2 rounded-full bg-cta px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-cta-foreground shadow-lg shadow-cta/30 transition-transform hover:scale-[1.02]"
            >
              Explore Soccer Camps <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#clubs"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
            >
              View Clubs
            </a>
          </div>
        </div>

        {/* Search bar — rendered inside hero to guarantee above-the-fold */}
        <SearchBar />
      </div>
    </section>
  );
}
