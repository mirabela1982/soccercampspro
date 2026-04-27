import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-soccer.jpg";

export function Hero() {
  return (
    <section
      className="relative flex flex-col overflow-hidden bg-primary text-primary-foreground"
      style={{ minHeight: "calc(100svh - 4rem)" }}
    >
      {/* background image */}
      <img
        src={heroImage}
        alt="Kids playing soccer on a green field"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* subtle navy overlay for legibility (lighter than before) */}
      <div aria-hidden className="absolute inset-0 bg-primary/45" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/40 to-primary/65"
      />

      {/* lime accent blob top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
      />

      {/* hero content (centered vertically, leaves room for searchbar) */}
      <div className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-4 pb-44 pt-10 text-center md:px-6 md:pb-56 md:pt-14 lg:px-8 lg:pb-64">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Official Youth Soccer Camps
        </span>

        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
          Find the Best Youth
          <br />
          <span className="text-accent">Soccer Camps</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
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
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary/20 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
          >
            View Clubs
          </a>
        </div>
      </div>

      {/* Continuous curved shape at the bottom — single clean arc */}
      <svg
        aria-hidden
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-[140px] w-full text-background md:h-[200px]"
      >
        <path fill="currentColor" d="M0,220 L0,140 Q720,-40 1440,140 L1440,220 Z" />
      </svg>
    </section>
  );
}
