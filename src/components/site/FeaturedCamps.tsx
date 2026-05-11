import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { featuredCamps } from "@/data/mockData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function FeaturedCamps() {
  return (
    <section id="camps" className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
            Selected for you
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
            Featured Soccer{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Camps</span>
              <span className="absolute -bottom-1 left-0 z-0 h-2.5 w-full -skew-x-6 bg-accent/70" />
            </span>
          </h2>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:underline"
        >
          View all camps <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <Carousel
        opts={{ align: "start", loop: true }}
        className="relative mt-12"
      >
        <CarouselContent className="-ml-6">
          {featuredCamps.map((camp) => (
            <CarouselItem
              key={camp.id}
              className="pl-6 md:basis-1/2 lg:basis-1/3"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-sm border-2 border-accent transition-all hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={camp.image}
                    alt={camp.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-cta px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cta-foreground">
                    {camp.club}
                  </span>
                  <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-primary">
                    {camp.city}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-primary">
                    {camp.name}
                  </h3>

                  <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-cta" /> {camp.date}
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cta" /> {camp.venue}
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-cta" /> {camp.ageGroup}
                    </li>
                  </ul>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                        From
                      </div>
                      <div className="font-display text-xl font-bold text-primary">
                        {camp.price}
                      </div>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-cta"
                    >
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-14 h-12 w-12 border-2 border-cta bg-cta text-accent hover:bg-cta/90 hover:text-accent [&_svg]:!size-6 [&_svg]:!stroke-[4]" />
        <CarouselNext className="hidden md:flex -right-14 h-12 w-12 border-2 border-cta bg-cta text-accent hover:bg-cta/90 hover:text-accent [&_svg]:!size-6 [&_svg]:!stroke-[4]" />
      </Carousel>
    </section>
  );
}
