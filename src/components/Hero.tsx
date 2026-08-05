import { ArrowRight, CheckCircle2, Heart, Mail } from "lucide-react";
import heroLogo from "@/assets/hero-logo.jpg";

const brands = ["Google", "Microsoft", "TESLA", "airbnb", "meta"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-night">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pt-36 pb-20 lg:grid-cols-2 lg:pt-44 lg:pb-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-night-border bg-night-card/70 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-primary-glow">
            <span className="h-2 w-2 rounded-full bg-primary-glow" />
            SOMETHING BIG IS COMING
          </span>

          <h1 className="mt-7 text-5xl font-extrabold leading-[1.05] tracking-tight text-night-foreground sm:text-6xl lg:text-7xl">
            The future is
            <br />
            <span className="text-gradient">worth</span> the wait.
          </h1>

          <p className="mt-6 max-w-lg text-lg text-night-muted">
            Join thousands of early believers and get exclusive updates, early access and special
            rewards.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:gap-0"
          >
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-night-border bg-night-card/60 px-4 py-3.5 sm:rounded-r-none">
              <Mail className="h-5 w-5 text-night-muted" />
              <input
                type="email"
                required
                placeholder="Enter your email address"
                aria-label="Email address"
                className="w-full bg-transparent text-night-foreground placeholder:text-night-muted focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:rounded-l-none"
            >
              Join the Waitlist <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-3 text-sm text-night-foreground">
            {["No spam.", "Unsubscribe anytime.", "We respect your privacy."].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary-glow" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["A", "B", "C", "D"].map((c) => (
                <span
                  key={c}
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-night bg-night-card text-sm font-bold text-night-foreground"
                >
                  {c}
                </span>
              ))}
              <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-night bg-gradient-primary text-xs font-bold text-primary-foreground">
                10K+
              </span>
            </div>
            <p className="text-sm text-night-muted">
              <span className="block font-bold text-night-foreground">10,000+ people</span>
              <span className="inline-flex items-center gap-1">
                already joined <Heart className="h-4 w-4 fill-primary-glow text-primary-glow" />
              </span>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-0 rounded-full bg-primary/25 blur-3xl" />
          <img
            src={heroLogo}
            alt="Nexora glass hexagon logo glowing in purple"
            width={1200}
            height={1200}
            className="relative mx-auto w-full max-w-xl mix-blend-screen"
          />
        </div>
      </div>

      <div className="rounded-t-[2rem] bg-background py-10">
        <p className="text-center text-xs font-bold tracking-[0.25em] text-primary">
          TRUSTED BY FUTURE LEADERS
        </p>
        <div className="mx-auto mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-x-14 gap-y-6 px-6">
          {brands.map((b) => (
            <span key={b} className="text-xl font-semibold text-muted-foreground/70">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
