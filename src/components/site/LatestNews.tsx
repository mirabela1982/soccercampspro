import { ArrowRight } from "lucide-react";
import { news } from "@/data/mockData";

export function LatestNews() {
  return (
    <section id="news" className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
              From the blog
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
              Latest Soccer Camp{" "}
              <span className="relative inline-block">
                <span className="relative z-10">News</span>
                <span className="absolute -bottom-1 left-0 z-0 h-2.5 w-full -skew-x-6 bg-accent/70" />
              </span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:underline"
          >
            View all news <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-primary">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {item.date}
                </div>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cta transition-transform group-hover:translate-x-1"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
