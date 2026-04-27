import { ArrowRight, Trophy, Plane, Dumbbell } from "lucide-react";

const experiences = [
  {
    icon: Trophy,
    title: "Soccer Camps",
    description:
      "Multi-day training programs for young players, led by certified coaches with international club methodology.",
  },
  {
    icon: Plane,
    title: "Soccer Trips",
    description:
      "Soccer travel experiences for players and families — combining training, matches and unforgettable moments.",
  },
  {
    icon: Dumbbell,
    title: "Club Programs",
    description:
      "Training experiences inspired by top international club methodologies, run year-round in select cities.",
  },
];

export function ExperienceCards() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
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
            Choose Your Soccer Experience
          </h2>
          <p className="mt-4 text-base text-primary-foreground/75 md:text-lg">
            From immersive camps to international trips, find the format that
            fits your young player best.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {experiences.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group flex flex-col rounded-3xl bg-background p-7 text-foreground shadow-xl ring-1 ring-primary-foreground/10 transition-transform hover:-translate-y-1"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold text-primary">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cta transition-transform group-hover:translate-x-1"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
