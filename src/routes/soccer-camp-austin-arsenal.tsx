import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Clock,
  CheckCircle2,
  Trophy,
  ShieldCheck,
  Sparkles,
  Plane,
  ClipboardList,
  Target,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImage from "@/assets/austin-arsenal-hero.jpg";
import trainingImage from "@/assets/austin-arsenal-training.jpg";

const REGISTER_URL = "https://cvent.me/x9OV7Z";

export const Route = createFileRoute("/soccer-camp-austin-arsenal")({
  component: AustinArsenalPage,
  head: () => ({
    meta: [
      {
        title:
          "Arsenal Soccer Camp Austin 2026 — Youth Summer Camp | Soccer Camps Pro",
      },
      {
        name: "description",
        content:
          "Arsenal Soccer Camp Austin 2026: 5-day youth soccer camp in Round Rock, TX. Boys & girls ages 7–16, July 6–10. Train the Arsenal Way. Limited spots — register today.",
      },
      {
        name: "keywords",
        content:
          "Arsenal soccer camp Austin, Austin soccer camp, soccer camp Austin, youth soccer camp Austin, Arsenal summer soccer camp Austin",
      },
      {
        property: "og:title",
        content: "Arsenal Soccer Camp Austin 2026 — Soccer Camps Pro",
      },
      {
        property: "og:description",
        content:
          "Official Arsenal youth soccer camp in Austin (Round Rock), TX. July 6–10, 2026. Ages 7–16. Train the Arsenal Way.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content:
          "https://soccercampspro.lovable.app/soccer-camp-austin-arsenal",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://soccercampspro.lovable.app/soccer-camp-austin-arsenal",
      },
    ],
  }),
});

function AustinArsenalPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="relative">
          <Header />
          <Hero />
        </div>
        <CampFacts />
        <Intro />
        <TrainingProgram />
        <Includes />
        <Benefits />
        <JourneyToLondon />
        <Trust />
        <Important />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section
      className="relative flex flex-col overflow-hidden bg-primary text-primary-foreground"
      style={{ minHeight: "92svh" }}
    >
      <img
        src={heroImage}
        alt="Youth soccer camp training in Austin, Texas"
        className="absolute inset-0 h-full w-full object-cover"
        width={1600}
        height={1024}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(34,43,77,0.85) 0%, rgba(34,43,77,0.65) 45%, rgba(34,43,77,0.88) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 pb-32 pt-28 text-center md:px-6 md:pb-40 md:pt-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Official Arsenal Camp · Austin, TX
        </span>

        <h1 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
          Arsenal Soccer Camp
          <br />
          <span className="text-accent">Austin 2026</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground/85 md:text-base">
          Five days. Arsenal methodology. Round Rock, Texas.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80 md:text-lg">
          Give your child a week of world-class training with official Arsenal
          coaches — the same philosophy that built one of the world's most
          respected academies, brought to Austin for boys and girls ages 7–16.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-xs font-bold uppercase tracking-widest text-cta-foreground shadow-lg shadow-cta/30 transition-transform hover:scale-[1.02]"
          >
            Register Now <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#camp-details"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3 text-xs font-bold uppercase tracking-widest backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
          >
            Camp Details
          </a>
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
  );
}

/* ---------------- Quick Facts ---------------- */
function CampFacts() {
  const facts = [
    {
      icon: Calendar,
      label: "Dates",
      value: "July 6 – 10, 2026",
      sub: "Mon to Fri · 8 AM – 2 PM",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Round Rock Multipurpose Complex",
      sub: "2001 N Kenney Fort Blvd, Round Rock, TX 78665",
    },
    {
      icon: Users,
      label: "Ages",
      value: "Boys & Girls · 7–16",
      sub: "Birth years 2010 – 2019",
    },
    {
      icon: Clock,
      label: "Duration",
      value: "5 full days",
      sub: "Morning drills · Afternoon games",
    },
  ];

  return (
    <section
      id="camp-details"
      className="mx-auto mt-12 max-w-7xl px-4 pb-12 md:mt-16 md:px-6 lg:px-8"
    >
      <div className="rounded-3xl border-2 border-accent bg-card p-6 shadow-xl md:p-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cta text-cta-foreground">
                <f.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {f.label}
                </div>
                <div className="font-display text-base font-bold text-primary">
                  {f.value}
                </div>
                <div className="mt-0.5 text-sm text-muted-foreground">
                  {f.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-border pt-7 md:flex-row md:items-center">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-cta">
              Limited offer · Next 10 registrations
            </div>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-primary">
                $549
              </span>
              <span className="text-lg text-muted-foreground line-through">
                $599
              </span>
              <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-accent-foreground">
                Save $50
              </span>
            </div>
          </div>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-cta-foreground shadow-lg shadow-cta/30 transition-transform hover:scale-[1.02]"
          >
            Reserve your spot <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Intro ---------------- */
function Intro() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 text-center md:px-6 md:py-24 lg:px-8">
      <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
        Arsenal Football Development · Austin
      </span>
      <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
        Train the{" "}
        <span className="relative inline-block">
          <span className="relative z-10">Arsenal Way</span>
          <span className="absolute -bottom-1 left-0 z-0 h-2.5 w-full -skew-x-6 bg-accent/70" />
        </span>{" "}
        in Austin
      </h2>
      <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
        Since 1886, Arsenal has built a global reputation for developing
        homegrown talent. This summer, that same philosophy comes to Austin.
        For one focused week, your child will train with official Arsenal
        coaches in a dynamic environment built around technical mastery, game
        intelligence and the values that define the club.
      </p>
      <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
        From first-time players to high-performance athletes, every camper is
        challenged at their level — learning what each position truly demands
        and how their role fits inside a winning team.
      </p>
    </section>
  );
}

/* ---------------- Training Program ---------------- */
function TrainingProgram() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center md:px-6 md:py-28 lg:px-8">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border-2 border-accent shadow-xl">
            <img
              src={trainingImage}
              alt="Arsenal coach leading a youth training drill in Austin"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1280}
              height={896}
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-cta px-5 py-4 text-cta-foreground shadow-xl md:block">
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">
              Daily structure
            </div>
            <div className="font-display text-lg font-bold">
              AM drills · PM match play
            </div>
          </div>
        </div>

        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
            The training program
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
            A week designed to make players better — on and off the pitch
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Arsenal Football Development coaches use real game situations to
            sharpen decision making, technique and teamwork. Every session is
            built to broaden your child's skill set while keeping training fun,
            inclusive and competitive.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              {
                icon: Target,
                title: "Mornings · Technical drills",
                text: "Position-specific work on passing, control, finishing and 1v1 duels.",
              },
              {
                icon: Trophy,
                title: "Afternoons · Game situations",
                text: "Small-sided games, full-sided matches and tactical scenarios that put new skills under pressure.",
              },
              {
                icon: Users,
                title: "Grouped by age & ability",
                text: "Training groups balanced so every camper is challenged at the right level.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cta text-cta-foreground">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display font-bold text-primary">
                    {item.title}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Includes() {
  const items = [
    "5 days of training with official Arsenal coaches",
    "The full Arsenal academy methodology",
    "Daily water and hydration provided on-site",
    "Official Arsenal Football Development certificate",
    "Official Arsenal camp kit (purchased at registration)",
    "Morning technical sessions and afternoon match play",
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
      <div className="text-center">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
          What's included
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
          Every camper receives
        </h2>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((text) => (
          <div
            key={text}
            className="flex items-start gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
          >
            <CheckCircle2 className="h-6 w-6 shrink-0 text-cta" />
            <p className="text-base text-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Benefits ---------------- */
function Benefits() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Build technical confidence",
      text: "Daily reps on touch, passing and finishing in a high-quality coaching environment.",
    },
    {
      icon: Target,
      title: "Sharper game intelligence",
      text: "Decision-making drills and live scenarios help players read the game faster.",
    },
    {
      icon: Users,
      title: "Teamwork & communication",
      text: "Arsenal's 'all for one' culture teaches players how to elevate teammates.",
    },
    {
      icon: ShieldCheck,
      title: "Off-the-pitch growth",
      text: "Discipline, respect and resilience — values the club has championed since 1886.",
    },
  ];
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
            Why parents choose this camp
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
            More than a soccer week
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            A safe, structured experience designed to develop your child as a
            player and as a person.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-primary">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Journey to London (3 phases) ---------------- */
function JourneyToLondon() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-cta/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
        {/* Section intro */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-accent">
            The Arsenal Journey
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">
            From Austin to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">London</span>
              <span className="absolute -bottom-1 left-0 z-0 h-2.5 w-full -skew-x-6 bg-accent/70" />
            </span>
          </h2>
          <p className="mt-5 text-base text-primary-foreground/80 md:text-lg">
            Three phases that connect a week of training in Texas with the
            chance to live the Arsenal experience in London.
          </p>
        </div>

        {/* Phase 01 — Austin Soccer Camp */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-foreground">
              Phase 01 · Soccer Camp
            </span>
            <h3 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Train at Home in Austin
            </h3>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/85">
              The journey starts with a 5-day Arsenal camp in Round Rock, TX.
              Boys and girls ages 7 to 16 train under official Arsenal coaches,
              learning the same methodology used at the club&apos;s academy in
              London.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                "Official Arsenal coaches",
                "Arsenal academy methodology",
                "Technical & tactical sessions",
                "Daily match play",
              ].map((pt) => (
                <li
                  key={pt}
                  className="flex items-start gap-2 text-sm text-primary-foreground/90"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 overflow-hidden rounded-3xl border border-primary-foreground/15 lg:order-2">
            <img
              src={trainingImage}
              alt="Arsenal coach training kids at the Austin camp"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Phase 02 — Get an Invitation */}
        <div className="mt-20 border-t border-primary-foreground/15 pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-foreground">
              Phase 02 · Get an Invitation
            </span>
            <h3 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Stand Out and Get Invited to London
            </h3>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/85">
              At the end of the week, players who show level, attitude and
              Arsenal values may receive an invitation to continue their
              journey at exclusive Arsenal Football Development experiences in
              London.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                n: 1,
                title: "A Unique Arsenal Experience",
                text: "Live an unforgettable week learning the Arsenal way — values, culture and football at the highest level.",
              },
              {
                n: 2,
                title: "Arsenal Methodology",
                text: "Train with elite coaching staff applying the same methodology used inside the Arsenal academy.",
              },
              {
                n: 3,
                title: "The London Experience",
                text: "Be part of the Arsenal Football Development experience in London — the next step after camp.",
              },
            ].map((b) => (
              <article
                key={b.n}
                className="group relative overflow-hidden rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent"
              >
                <span className="font-display text-6xl font-extrabold text-accent/40 transition-colors group-hover:text-accent/70">
                  0{b.n}
                </span>
                <h4 className="mt-4 font-display text-xl font-bold">
                  {b.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                  {b.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Phase 03 — Live the Experience in London */}
        <div className="mt-20 border-t border-primary-foreground/15 pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-foreground">
              Phase 03 · London
            </span>
            <h3 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Train Where Arsenal Trains
            </h3>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/85">
              For selected players, the journey continues in London through one
              of two paths — combining football, values and an unforgettable
              international experience at the home of the club.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 backdrop-blur-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cta text-cta-foreground">
                <Trophy className="h-5 w-5" />
              </span>
              <h4 className="mt-5 font-display text-2xl font-bold">
                Arsenal World Challenge
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
                An international tournament that brings together teams from
                Arsenal Football Development camps around the world to compete
                at the home of Arsenal — an unforgettable experience of values,
                football and friendship.
              </p>
            </article>
            <article className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 backdrop-blur-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cta text-cta-foreground">
                <Plane className="h-5 w-5" />
              </span>
              <h4 className="mt-5 font-display text-2xl font-bold">
                Arsenal Soccer Clinic in London
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
                A unique all-inclusive week training under the Arsenal
                methodology in London. Players from camps in the U.S. join a
                full training week at the club&apos;s facilities — a complete
                football and cultural experience for the whole family.
              </p>
            </article>
          </div>

          <div className="mt-14 text-center">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-sm font-bold uppercase tracking-widest text-cta-foreground shadow-lg shadow-cta/30 transition-transform hover:scale-[1.02]"
            >
              Register and start the journey to London
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust ---------------- */
function Trust() {
  const stats = [
    { value: "1886", label: "Founded" },
    { value: "100%", label: "Official Arsenal coaches" },
    { value: "5", label: "Days of elite training" },
    { value: "7–16", label: "Age range welcomed" },
  ];
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-accent">
              Trust & credibility
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">
              An official camp from one of the world's most respected clubs
            </h2>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/80 md:text-lg">
              Arsenal's academy has shaped some of the game's most talented
              homegrown players for over a century. The Arsenal Football
              Development program brings that same standard of coaching,
              culture and care to youth players in the United States.
            </p>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-xs font-bold uppercase tracking-widest text-cta-foreground shadow-lg shadow-cta/30 transition-transform hover:scale-[1.02]"
            >
              Register Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur-sm"
              >
                <div className="font-display text-4xl font-extrabold text-accent">
                  {s.value}
                </div>
                <div className="mt-2 text-sm uppercase tracking-widest text-primary-foreground/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Important ---------------- */
function Important() {
  const items = [
    "All players wear the official Arsenal camp kit, purchased during registration.",
    "Each day is split into morning drills and afternoon game-based sessions.",
    "Day 1 check-in opens 30 minutes before camp starts.",
    "Training groups are formed by age and ability for the right challenge level.",
    "Pack cleats, shin guards, water, sunscreen and a lunch box in a cooler. Lunch is not provided.",
    "Goalkeepers should bring their own gloves.",
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-start">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
            Before you arrive
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
            Important information for parents
          </h2>
          <p className="mt-4 text-muted-foreground">
            A quick checklist so your child shows up ready to make the most of
            every session.
          </p>
        </div>
        <ul className="space-y-4">
          {items.map((text) => (
            <li
              key={text}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-cta" />
              <p className="text-base text-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-cta px-6 py-14 text-cta-foreground shadow-xl md:px-14 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cta-foreground/30 bg-cta-foreground/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Limited spots · July 6–10, 2026
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-tight md:text-5xl">
            Give your child the Arsenal experience this summer in Austin
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-cta-foreground/85 md:text-lg">
            Five days of elite coaching, the Arsenal methodology and a
            development pathway that can take your child all the way to London.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-accent-foreground shadow-lg transition-transform hover:scale-[1.02]"
            >
              Register Now <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-cta-foreground/40 bg-cta-foreground/10 px-7 py-3.5 text-xs font-bold uppercase tracking-widest backdrop-blur-sm transition-colors hover:bg-cta-foreground/20"
            >
              Explore other camps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
