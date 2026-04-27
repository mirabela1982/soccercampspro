import { ShieldCheck, Trophy, Heart, Globe2 } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Verified Camps",
    description: "Every camp is reviewed and verified by our team before listing.",
  },
  {
    icon: Trophy,
    title: "Top Club Methodologies",
    description: "Programs inspired by the world's leading professional clubs.",
  },
  {
    icon: Heart,
    title: "Trusted by Families",
    description: "Thousands of families have already booked with confidence.",
  },
  {
    icon: Globe2,
    title: "International Experiences",
    description: "Connect young players with global soccer culture and coaches.",
  },
];

export function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
          Trust & quality
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-5xl">
          Why Soccer Camps Pro
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          We carefully select and verify every soccer experience so families can
          focus on what matters: their player's growth.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl bg-card p-6 text-center shadow-sm ring-1 ring-border transition-transform hover:-translate-y-1"
          >
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-lg font-bold text-primary">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
