import { ArrowRight } from "lucide-react";
import { topClubs } from "@/data/mockData";

export function TopClubs() {
  return (
    <section id="clubs" className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
            International methodology
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
            Train With Top{" "}
            <span className="relative inline-block">
              <span className="relative z-10">International Clubs</span>
              <span className="absolute -bottom-1 left-0 z-0 h-2.5 w-full -skew-x-6 bg-accent/70" />
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Connect young players with experiences inspired by some of the most
            iconic clubs in world soccer.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {topClubs.map((club) => (
            <article
              key={club.id}
              className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm border-2 border-accent transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={club.image}
                  alt={`${club.name} stadium`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold text-primary-foreground drop-shadow">
                    {club.name}
                  </h3>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-accent">
                    <img
                      src={club.logo}
                      alt={`${club.name} logo`}
                      className="h-10 w-10 object-contain"
                      loading="lazy"
                    />
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {club.description}
                </p>

                <div className="mt-5 flex items-center gap-5 text-sm">
                  <div>
                    <div className="font-display text-xl font-bold text-primary">
                      {club.camps}
                    </div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      Camps
                    </div>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div>
                    <div className="font-display text-xl font-bold text-primary">
                      {club.cities}
                    </div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      Cities
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cta transition-colors hover:underline"
                >
                  View Camps <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
