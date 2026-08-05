import { ArrowRight, Check, ClipboardList, Code2, Flag, Heart, Lock, Mail, Rocket, ShieldCheck } from "lucide-react";

const phases = [
  { icon: ClipboardList, quarter: "Q1 2024", title: "Research & Plan", body: "Laying the foundation and defining our vision.", status: "Completed" },
  { icon: Code2, quarter: "Q2 2024", title: "Development", body: "Building and testing with passion and precision.", status: "Completed" },
  { icon: Rocket, quarter: "Q3 2024", title: "Beta Launch", body: "Early access for waitlist members.", status: "In Progress" },
  { icon: Flag, quarter: "Q4 2024", title: "Official Launch", body: "Releasing to the world and making an impact.", status: "Upcoming" },
];

const promises = [
  { icon: ShieldCheck, label: "No spam" },
  { icon: Lock, label: "Unsubscribe anytime" },
  { icon: Heart, label: "We respect your privacy" },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="bg-gradient-night py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-primary-glow">ROADMAP</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-night-foreground sm:text-5xl">
            Big things are <span className="text-gradient">on the horizon.</span>
          </h2>
          <p className="mt-5 text-lg text-night-muted">
            We're building step by step to deliver something extraordinary. Here's what's coming.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map(({ icon: Icon, quarter, title, body, status }) => {
            const done = status !== "Upcoming";
            return (
              <div key={title} className="relative text-center">
                <span
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${
                    done ? "bg-gradient-primary shadow-glow" : "bg-night-card border border-night-border"
                  }`}
                >
                  <Icon className="h-8 w-8 text-night-foreground" />
                </span>
                <span className="mt-5 inline-block rounded-md bg-night-card px-3 py-1 text-xs font-semibold text-night-foreground">
                  {quarter}
                </span>
                <h3 className="mt-4 text-xl font-bold text-night-foreground">{title}</h3>
                <p className="mt-2 text-sm text-night-muted">{body}</p>
                <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-night-border bg-night-card px-4 py-1.5 text-sm text-night-foreground">
                  {status === "Completed" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <span
                      className={`h-2 w-2 rounded-full ${
                        status === "In Progress" ? "bg-primary-glow" : "bg-night-muted"
                      }`}
                    />
                  )}
                  {status}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid items-center gap-10 rounded-3xl bg-card p-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary">STAY IN THE LOOP</p>
            <h3 className="mt-3 text-4xl font-extrabold tracking-tight">
              Be the first to <span className="text-gradient">know.</span>
            </h3>
            <p className="mt-3 text-muted-foreground">
              Join our waitlist and get exclusive updates, early access, and special rewards.
            </p>
            <div className="mt-7 flex flex-wrap gap-6">
              {promises.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                    <Icon className="h-4 w-4 text-primary" />
                  </span>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 sm:flex-row sm:gap-0"
            >
              <div className="flex flex-1 items-center gap-3 rounded-xl border border-border px-4 py-4 sm:rounded-r-none">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  required
                  aria-label="Email address"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-7 py-4 font-semibold text-primary-foreground sm:rounded-l-none">
                Join Waitlist <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["A", "B", "C", "D"].map((c) => (
                  <span
                    key={c}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-card bg-accent text-sm font-bold text-accent-foreground"
                  >
                    {c}
                  </span>
                ))}
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-card bg-muted text-xs font-bold text-muted-foreground">
                  +10K
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="block font-bold text-foreground">10,000+ early believers</span>
                are already on board!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
