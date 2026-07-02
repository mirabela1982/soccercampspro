import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  Plane,
  Trophy,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import arsenalStadium from "/images/stadium-arsenal.jpg";

const ARSENAL_LOGO =
  "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg";

const GALLERY = [
  "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",
];

type CampCard = {
  city: string;
  state: string;
  dates: string;
  venue: string;
  hours: string;
  ages: string;
  price: string;
  href: string;
};

const CAMPS: CampCard[] = [
  {
    city: "New Haven",
    state: "CT",
    dates: "6th – 10th July 2026",
    venue: "Connecticut Sportsplex",
    hours: "From 8 AM to 2 PM",
    ages: "2010 – 2019",
    price: "$599",
    href: "#",
  },
  {
    city: "Aspen",
    state: "CO",
    dates: "6th – 10th July 2026",
    venue: "Lower Moore",
    hours: "From 8 AM to 2 PM",
    ages: "2010 – 2019",
    price: "$599",
    href: "#",
  },
  {
    city: "Birmingham",
    state: "AL",
    dates: "6th – 10th July 2026",
    venue: "Hoover Met Multi-Purpose",
    hours: "From 8 AM to 2 PM",
    ages: "2010 – 2019",
    price: "$599",
    href: "#",
  },
  {
    city: "Austin",
    state: "TX",
    dates: "6th – 10th July 2026",
    venue: "Round Rock Multipurpose Complex",
    hours: "From 8 AM to 2 PM",
    ages: "2010 – 2019",
    price: "$599",
    href: "/soccer-camp-austin-arsenal",
  },
];

const POSTS = [
  {
    date: "May 27, 2026",
    title: "Upcoming Arsenal Soccer Camps in the US",
    excerpt:
      "Final stretch before the 2026 summer camps kick off. Spots are filling up fast — here's a look at every Arsenal camp still open.",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "May 11, 2026",
    title: "Find the best soccer camps in St. Louis",
    excerpt:
      "After Arsenal and PSG's Champions League run, we revisit our shortlist of summer camps — starting with St. Louis.",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "May 5, 2026",
    title: "Find the best Soccer Camps in San Francisco",
    excerpt:
      "A curated guide to the top youth soccer camps happening in and around the Bay Area this summer.",
    image:
      "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=1200&q=80",
  },
];

export const Route = createFileRoute("/club/arsenal-soccer-camps")({
  component: ArsenalClubPage,
  head: () => ({
    meta: [
      {
        title:
          "Arsenal Soccer Camps 2026 — Official Youth Camps in the US | Soccer Camps Pro",
      },
      {
        name: "description",
        content:
          "Train the Arsenal way. Official Arsenal Football Development youth soccer camps across the US: New Haven, Aspen, Birmingham, Austin and more. 5-day camps, UEFA-qualified coaches, London clinic invitation.",
      },
      {
        property: "og:title",
        content: "Arsenal Soccer Camps — Official Youth Camps in the US",
      },
      {
        property: "og:description",
        content:
          "Official Arsenal Football Development soccer camps in the US. 5 days of training with UEFA-qualified coaches and a chance to be invited to London.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function ArsenalClubPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="relative">
          <Header />
          <Hero />
        </div>
        <Overview />
        <Includes />
        <ReasonsToJoin />
        <Gallery />
        <UpcomingCamps />
        <RelatedPosts />
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
      style={{ minHeight: "88svh" }}
    >
      <img
        src={arsenalStadium}
        alt="Emirates Stadium — Arsenal FC"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(34,43,77,0.88) 0%, rgba(34,43,77,0.7) 45%, rgba(34,43,77,0.92) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 pb-28 pt-28 text-center md:px-6 md:pb-36 md:pt-32">
        <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl ring-4 ring-accent md:h-24 md:w-24">
          <img
            src={ARSENAL_LOGO}
            alt="Arsenal FC crest"
            className="h-14 w-14 object-contain md:h-16 md:w-16"
          />
        </span>

        <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-foreground shadow-lg">
          <span className="h-1.5 w-1.5 rounded-full bg-cta" />
          Official Arsenal Football Development
        </span>

        <h1 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
          Arsenal
          <br />
          <span className="text-accent">Soccer Camps</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/85 md:text-lg">
          Five days of world-class training with UEFA-qualified Arsenal coaches
          — the club's official youth methodology, now across the US.
        </p>

        <div className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-3 md:gap-6">
          {[
            { value: "+3,000", label: "Players" },
            { value: "49", label: "Camps" },
            { value: "33", label: "Cities" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-4 backdrop-blur-sm"
            >
              <div className="font-display text-2xl font-bold text-accent md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground/80 md:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#camps"
            className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-xs font-bold uppercase tracking-widest text-cta-foreground shadow-lg shadow-cta/30 transition-transform hover:scale-[1.02]"
          >
            View Camps <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#overview"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3 text-xs font-bold uppercase tracking-widest backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
          >
            About the Club
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

/* ---------------- Overview ---------------- */
function Overview() {
  return (
    <section
      id="overview"
      className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 lg:px-8"
    >
      <div className="text-center">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
          Overview
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
          Train the{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Arsenal Way</span>
            <span className="absolute -bottom-1 left-0 z-0 h-2.5 w-full -skew-x-6 bg-accent/70" />
          </span>
        </h2>
      </div>

      <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
        <p>
          Arsenal Football Development Camp's training sessions are
          meticulously crafted to enhance players' technical and tactical
          abilities in an engaging, high-intensity environment. Across five
          days, the goal is that every participant expands their skill set
          while training in alignment with the renowned "Arsenal way" — the
          club's rich philosophy and values.
        </p>
        <p>
          UEFA-qualified Arsenal FD coaches use real-game scenarios to boost
          game intelligence and decision-making, elevating each player's
          overall capabilities. Beyond the field, campers embrace Arsenal's
          core values: respect, skill, energy, new thinking, all-for-one and
          innovation.
        </p>
        <p>
          From players just starting the sport to high-performance athletes,
          Arsenal Football Development Camps bring out the best in every
          player — helping them understand their position, their teammates,
          and how the pieces fit together on the pitch.
        </p>
      </div>
    </section>
  );
}

/* ---------------- What's included ---------------- */
function Includes() {
  const items = [
    { icon: Calendar, text: "5 days of training · Monday to Friday" },
    { icon: CheckCircle2, text: "Water provided daily on-site" },
    { icon: ShieldCheck, text: "Athletic trainer on site" },
    { icon: Trophy, text: "Closing ceremony" },
    { icon: Sparkles, text: "Official completion diploma" },
    {
      icon: Plane,
      text: "Exclusive invitation opportunity to the Arsenal Training Clinic in London",
    },
  ];
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
            What's included
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
            Every camper receives
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.text}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cta text-cta-foreground">
                <it.icon className="h-5 w-5" />
              </span>
              <p className="text-base text-foreground">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Reasons to join / London ---------------- */
function ReasonsToJoin() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:gap-16 md:px-6 md:py-28 lg:px-8">
        <div className="relative order-2 md:order-1">
          <div className="relative overflow-hidden rounded-3xl border-2 border-accent shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80"
              alt="Emirates Stadium and London skyline"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-accent">
                Phase 02
              </div>
              <div className="mt-1 font-display text-2xl font-bold">
                Arsenal Training Clinic — London
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
            Reasons to join
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
            A shot at the ultimate{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Gunner experience</span>
              <span className="absolute -bottom-1 left-0 z-0 h-2.5 w-full -skew-x-6 bg-accent/70" />
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Every participant of an Arsenal Football Development Soccer Camp
            has the exciting opportunity to be invited to the Arsenal FD
            Training Clinics held in the heart of London.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            This exclusive event lets players train inside Arsenal's official
            facilities with Arsenal FD coaches, explore the iconic Emirates
            Stadium and discover the history behind London's landmarks and
            English football culture — a once-in-a-lifetime adventure designed
            for the whole family.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Train at Arsenal's official facilities",
              "Sessions led by Arsenal FD coaches",
              "Emirates Stadium experience",
              "Immersion in London and English culture",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cta" />
                <span className="text-base text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
function Gallery() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-accent">
            On the pitch
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">
            Inside an Arsenal camp
          </h2>
          <p className="mt-4 text-base text-primary-foreground/80 md:text-lg">
            A glimpse at the technical work, matches and moments that shape a
            week the Arsenal way.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {GALLERY.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-2xl ring-1 ring-primary-foreground/10 ${
                i === 0 ? "col-span-2 row-span-2 md:col-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={`Arsenal Football Development camp — moment ${i + 1}`}
                className={`h-full w-full object-cover transition-transform duration-500 hover:scale-105 ${
                  i === 0 ? "aspect-[4/3]" : "aspect-square"
                }`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Upcoming camps ---------------- */
function UpcomingCamps() {
  return (
    <section id="camps" className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
              2026 Season
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
              Upcoming Arsenal camps
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Pick the city that works for your family. All camps run the same
              official Arsenal Football Development methodology.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:underline"
          >
            View all camps <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAMPS.map((c) => (
            <CampListCard key={`${c.city}-${c.state}`} camp={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CampListCard({ camp }: { camp: CampCard }) {
  const isInternal = camp.href.startsWith("/");
  const Body = (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-accent bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-center gap-3 border-b border-border bg-primary px-6 py-4 text-primary-foreground">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white ring-2 ring-accent">
          <img
            src={ARSENAL_LOGO}
            alt="Arsenal"
            className="h-6 w-6 object-contain"
          />
        </span>
        <div className="font-display text-lg font-bold">
          Arsenal, {camp.city}, {camp.state}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6 text-sm">
        <Row icon={Calendar} label={camp.dates} />
        <Row icon={MapPin} label={camp.venue} />
        <Row icon={Clock} label={camp.hours} />
        <Row icon={Users} label={`Birth years ${camp.ages}`} />

        <div className="mt-3 flex items-baseline justify-between border-t border-border pt-4">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              From
            </div>
            <div className="font-display text-2xl font-bold text-primary">
              {camp.price}
            </div>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-cta px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-cta-foreground shadow-md shadow-cta/25">
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </article>
  );

  if (isInternal) {
    return (
      <Link to={camp.href} className="block h-full">
        {Body}
      </Link>
    );
  }
  return (
    <a href={camp.href} className="block h-full">
      {Body}
    </a>
  );
}

function Row({
  icon: Icon,
  label,
}: {
  icon: typeof Calendar;
  label: string;
}) {
  return (
    <div className="flex items-start gap-3 text-foreground">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cta" />
      <span>{label}</span>
    </div>
  );
}

/* ---------------- Related posts ---------------- */
function RelatedPosts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
      <div className="max-w-2xl">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
          Related posts
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
          More from the blog
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {POSTS.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-cta">
                {p.date}
              </div>
              <h3 className="mt-2 font-display text-lg font-bold text-primary">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.excerpt}
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cta hover:underline"
              >
                Read more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
