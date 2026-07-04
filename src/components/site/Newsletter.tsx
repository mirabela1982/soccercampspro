import { useState, type FormEvent } from "react";
import { Mail, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 4000);
  }

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* top wave */}
      <svg
        aria-hidden
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute left-0 top-0 h-[80px] w-full text-background md:h-[120px]"
      >
        <path
          fill="currentColor"
          d="M0,40 C240,0 480,120 720,80 C960,40 1200,0 1440,56 L1440,0 L0,0 Z"
        />
      </svg>

      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 pb-20 pt-32 text-center md:px-6 md:pb-28 md:pt-44 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
          <Mail className="h-3.5 w-3.5" />
          Newsletter
        </span>
        <h2 className="mt-5 font-display text-3xl font-bold md:text-5xl">
          Get the Latest Camp Updates
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/75 md:text-lg">
          Receive updates about new camps, clubs and soccer experiences —
          straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-full bg-primary-foreground/10 p-2 ring-1 ring-primary-foreground/20 backdrop-blur sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
            className="h-12 flex-1 rounded-full bg-transparent px-5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cta px-6 text-sm font-semibold text-cta-foreground transition-transform hover:scale-[1.02]"
          >
            {done ? (
              <>
                <Check className="h-4 w-4" /> Subscribed
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
