import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  MapPin,
  Shield,
  ClipboardList,
  Star,
  Globe2,
  Check,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Newsletter } from "@/components/site/Newsletter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/trips")({
  head: () => ({
    meta: [
      { title: "Soccer Trips & Elite Camps — Soccer Camps Pro" },
      {
        name: "description",
        content:
          "Elite soccer camps and European soccer trips for young players. Train, travel and experience soccer with iconic clubs in London, Paris and Munich.",
      },
      {
        property: "og:title",
        content: "Soccer Trips & Elite Camps — Soccer Camps Pro",
      },
      {
        property: "og:description",
        content:
          "Train, travel, and experience soccer with some of Europe's most iconic clubs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1400&q=80",
      },
    ],
  }),
  component: TripsPage,
});

const experiences = [
  {
    icon: MapPin,
    title: "Choose by city",
    text: "Find available soccer camps in your preferred location and see which club programs are offered there.",
  },
  {
    icon: Shield,
    title: "Choose by club program",
    text: "Explore PSG Academy, FC Bayern, and Arsenal camp options, then select from the available cities.",
  },
];

const clubs = [
  {
    title: "PSG Academy Experience",
    subtitle: "Train, compete, and experience Paris soccer culture.",
    text: "Players selected through PSG Academy programs may have the chance to travel to Paris and take part in a unique soccer experience.",
    cta: "Explore PSG Programs",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",
    tag: "Paris",
  },
  {
    title: "FC Bayern Experience",
    subtitle: "Discover soccer in Munich.",
    text: "A high-quality training and travel experience for players and families who want to combine soccer development with a memorable European trip.",
    cta: "Explore Bayern Programs",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
    tag: "Munich",
  },
  {
    title: "Arsenal Experience",
    subtitle: "Grow like a young Gunner.",
    text: "A soccer camp and travel pathway designed for young players who want to train, improve, and experience the spirit of London soccer.",
    cta: "Explore Arsenal Programs",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
    tag: "London",
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Register for a camp",
    text: "Players start by joining one of our soccer camps or partner programs.",
  },
  {
    icon: Star,
    title: "Get selected",
    text: "Players train, improve, and may be evaluated during selected camp experiences.",
  },
  {
    icon: Plane,
    title: "Travel to Europe",
    text: "Selected players may be invited to take part in an international soccer trip with training, activities, and cultural experiences.",
  },
];

const benefits = [
  "Professional-style training environments.",
  "International soccer exposure.",
  "Programs connected to recognized soccer brands.",
  "Travel experiences for players and families.",
  "Personal growth through sport, teamwork, and independence.",
  "Memories that go far beyond the field.",
];

function TripsPage() {
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1800&q=80"
          alt="Young players training on a European soccer field"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(34,43,77,0.86) 0%, rgba(34,43,77,0.65) 45%, rgba(34,43,77,0.9) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
        />
        <Header />
        <div className="relative mx-auto max-w-4xl px-4 pb-28 pt-32 text-center md:px-6 md:pb-36 md:pt-40 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Elite Camps & European Trips
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Elite Soccer Camps &{" "}
            <span className="text-accent">European Soccer Trips</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/85 md:text-lg">
            Train, travel, and experience soccer with some of Europe's most
            iconic clubs. Soccer Camps Pro connects young players with
            exclusive camp and trip opportunities across England, France, and
            Germany.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#programs"
              className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-xs font-bold uppercase tracking-widest text-cta-foreground shadow-lg shadow-cta/30 transition-transform hover:scale-[1.02]"
            >
              Explore Programs <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <svg
          aria-hidden
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 h-[120px] w-full text-background md:h-[180px]"
        >
          <path fill="currentColor" d="M0,220 L0,40 Q720,260 1440,40 L1440,220 Z" />
        </svg>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center md:px-6 md:py-28 lg:px-8">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
          One platform
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
          One platform. Multiple elite{" "}
          <span className="relative inline-block">
            <span className="relative z-10">soccer experiences.</span>
            <span className="absolute -bottom-1 left-0 z-0 h-2.5 w-full -skew-x-6 bg-accent/70" />
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Soccer Camps Pro brings together international soccer camps and
          travel programs designed for young players who want to train,
          compete, and grow in professional soccer environments.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          From local soccer camps to once-in-a-lifetime trips to Europe, our
          programs combine high-quality training, club culture, travel, and
          personal development.
        </p>
      </section>

      {/* EXPERIENCE CARDS */}
      <section
        id="programs"
        className="relative overflow-hidden bg-primary text-primary-foreground"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-accent">
              Three ways to play
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">
              Choose your soccer experience
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {experiences.map(({ icon: Icon, title, subtitle, text, cta }) => (
              <article
                key={title}
                className="group flex flex-col rounded-3xl bg-card p-7 text-foreground shadow-xl border-2 border-accent transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-primary">
                  {title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-cta">
                  {subtitle}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
                <a
                  href="#clubs"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cta transition-transform group-hover:translate-x-1"
                >
                  {cta} <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLUB PROGRAMS */}
      <section id="clubs" className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
            Club programs
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
            Programs inspired by world-class soccer clubs
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Each program offers a different soccer journey, but all share the
            same goal: helping young players grow through high-quality
            training, international exposure, and unforgettable experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {clubs.map((c) => (
            <article
              key={c.title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-cta px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cta-foreground">
                  <Globe2 className="h-3 w-3" /> {c.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-primary">
                  {c.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-cta">
                  {c.subtitle}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cta transition-transform group-hover:translate-x-1"
                >
                  {c.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
              The pathway
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
              How it works
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="relative rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border"
              >
                <span className="absolute -top-4 left-8 inline-flex h-8 items-center rounded-full bg-primary px-4 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                  Step {i + 1}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-primary">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
              Beyond training
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
              More than training. A complete soccer{" "}
              <span className="relative inline-block">
                <span className="relative z-10">journey.</span>
                <span className="absolute -bottom-1 left-0 z-0 h-2.5 w-full -skew-x-6 bg-accent/70" />
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Professional training is only one part of the experience. Soccer
              Camps Pro programs are designed to help young players grow as
              athletes, teammates, and individuals.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl bg-card p-4 shadow-sm ring-1 ring-border"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PAST EDITIONS */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80"
          alt="Past soccer trip edition"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(34,43,77,0.9) 0%, rgba(34,43,77,0.75) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center md:px-6 md:py-28 lg:px-8">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-accent">
            Memories
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">
            Past editions
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/80 md:text-lg">
            Our past programs have brought together young players from
            different cities and countries to train, travel, and live soccer
            in a new way.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80 md:text-lg">
            From Paris to Munich and London, each edition is designed to give
            players a deeper connection with the game and a memorable
            international experience.
          </p>
          <a
            href="#programs"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-xs font-bold uppercase tracking-widest text-cta-foreground shadow-lg shadow-cta/30 transition-transform hover:scale-[1.02]"
          >
            See upcoming programs <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-3xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border md:p-12">
          <div className="text-center">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
              Stay in the loop
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Get updates on upcoming camps and trips
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Be the first to know about new soccer camps, European trips,
              selection opportunities, and program dates.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!accepted || !email) return;
              setSubscribed(true);
              setEmail("");
            }}
            className="mx-auto mt-8 max-w-lg space-y-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={255}
              placeholder="Your email address"
              className="h-12 w-full rounded-full border border-border bg-background px-5 text-sm font-medium text-foreground outline-none transition-shadow focus:ring-2 focus:ring-cta/40"
            />
            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-border accent-cta"
              />
              <span>I accept the privacy policy.</span>
            </label>
            <button
              type="submit"
              disabled={!accepted || subscribed}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-cta px-6 text-sm font-bold uppercase tracking-widest text-cta-foreground shadow-lg shadow-cta/25 transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center md:px-6 md:py-28 lg:px-8">
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Ready to start your{" "}
            <span className="text-accent">soccer journey?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/80 md:text-lg">
            Whether you are looking for a local soccer camp or an
            international soccer trip, Soccer Camps Pro helps young players
            and families find the right experience.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#programs"
              className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-xs font-bold uppercase tracking-widest text-cta-foreground shadow-lg shadow-cta/30 transition-transform hover:scale-[1.02]"
            >
              Explore Programs <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}
