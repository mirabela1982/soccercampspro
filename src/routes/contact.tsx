import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Instagram, Facebook, Linkedin, Send } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Newsletter } from "@/components/site/Newsletter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Soccer Camps Pro" },
      {
        name: "description",
        content:
          "Get in touch with Soccer Camps Pro. We only publish trustable youth soccer camps with proven methodology and real experience.",
      },
      { property: "og:title", content: "Contact — Soccer Camps Pro" },
      {
        property: "og:description",
        content:
          "Reach the Soccer Camps Pro team — email, phone and message form.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [accepted, setAccepted] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero with dark header background */}
      <div className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, var(--accent) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--cta) 0, transparent 45%)",
            }}
          />
        </div>
        <Header />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-32 md:px-6 md:pb-32 md:pt-40 lg:px-8">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-accent">
            Get in touch
          </span>
          <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Let's talk <span className="text-accent">soccer.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-primary-foreground/75 md:text-lg">
            We make sure every camp we publish is legit — proven methodology,
            real experience, and clubs you can trust.
          </p>
        </div>
      </div>

      {/* Main content card */}
      <section className="relative z-10 px-4 pb-24 md:px-6 lg:px-8">
        <div className="mx-auto -mt-16 max-w-6xl rounded-3xl bg-card p-6 shadow-2xl ring-1 ring-border md:-mt-24 md:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — info */}
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
                Contact
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
                We're here to help you pick the right camp
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Soccer Camps Pro designs, manages and executes innovative sports
                projects that benefit society and deliver real value to families
                and clubs.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:info@soccercampspro.com"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-secondary/60 p-4 transition-colors hover:bg-secondary"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cta text-cta-foreground">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Email
                    </div>
                    <div className="font-display text-base font-semibold text-primary">
                      info@soccercampspro.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+17275132645"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-secondary/60 p-4 transition-colors hover:bg-secondary"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cta text-cta-foreground">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Phone
                    </div>
                    <div className="font-display text-base font-semibold text-primary">
                      +1 727-513-2645
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-8">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Follow us
                </div>
                <div className="mt-3 flex items-center gap-3">
                  {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label="Social link"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-cta"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="rounded-2xl bg-secondary/50 p-6 md:p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!accepted) return;
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Your name
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Jane Doe"
                    className="mt-1.5 h-12 w-full rounded-xl border border-border bg-card px-4 text-sm font-medium text-foreground outline-none transition-shadow focus:ring-2 focus:ring-cta/40"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Your email
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    placeholder="you@email.com"
                    className="mt-1.5 h-12 w-full rounded-xl border border-border bg-card px-4 text-sm font-medium text-foreground outline-none transition-shadow focus:ring-2 focus:ring-cta/40"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={5}
                    placeholder="Tell us about the player, age group, dates you're looking at…"
                    className="mt-1.5 w-full rounded-xl border border-border bg-card p-4 text-sm font-medium text-foreground outline-none transition-shadow focus:ring-2 focus:ring-cta/40"
                  />
                </div>

                <label className="flex items-start gap-3 pt-1 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-border accent-cta"
                  />
                  <span>
                    I accept the{" "}
                    <a href="#" className="font-semibold text-primary underline underline-offset-4 hover:text-cta">
                      privacy policy
                    </a>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!accepted || sent}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-cta px-6 text-sm font-bold uppercase tracking-widest text-cta-foreground shadow-lg shadow-cta/25 transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50 md:w-auto md:px-10"
                >
                  <Send className="h-4 w-4" />
                  {sent ? "Message sent" : "Send message"}
                </button>

                {sent && (
                  <p className="pt-2 text-sm font-medium text-cta">
                    Thanks — we'll get back to you shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}
