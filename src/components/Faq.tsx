import { useState } from "react";
import { ArrowRight, ChevronDown, Gift, Headphones, Heart, Mail, MailCheck, Rocket, ShieldCheck } from "lucide-react";

const faqs = [
  { icon: Rocket, q: "What is Nexora?", a: "Nexora is an innovative platform designed to bring people together, create value, and build the future. We're launching soon!" },
  { icon: Mail, q: "How does the waitlist work?", a: "Sign up with your email and we'll notify you the moment early access opens. Members are invited in the order they joined." },
  { icon: Gift, q: "What are the benefits of joining early?", a: "Early members get priority access, exclusive rewards, and a direct line to shape the product roadmap." },
  { icon: ShieldCheck, q: "Will my email be shared with anyone?", a: "Never. Your email stays with us, is stored securely, and you can unsubscribe at any time." },
  { icon: Headphones, q: "When will Nexora launch?", a: "The beta is rolling out to waitlist members now, with the official launch planned for later this year." },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-gradient-soft py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Everything you need to know about Nexora and our waitlist.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-4">
            {faqs.map(({ icon: Icon, q, a }, i) => (
              <div key={q} className="rounded-2xl bg-card p-5 shadow-card">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center gap-4 text-left"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <span className="flex-1 text-lg font-bold">{q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <p className="mt-3 pl-15 text-sm leading-relaxed text-muted-foreground">{a}</p>
                )}
              </div>
            ))}
          </div>

          <aside className="relative overflow-hidden rounded-3xl bg-gradient-night p-8 text-center">
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
              <MailCheck className="h-9 w-9 text-primary-foreground" />
            </span>
            <h3 className="mt-6 text-3xl font-extrabold leading-tight text-night-foreground">
              Be the first
              <br />
              to experience <span className="text-gradient">Nexora.</span>
            </h3>
            <p className="mt-4 text-night-muted">
              Join thousands of early believers and never miss an update.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6">
              <div className="flex items-center gap-3 rounded-xl border border-night-border bg-night-card/70 px-4 py-3">
                <Mail className="h-5 w-5 text-night-muted" />
                <input
                  type="email"
                  required
                  aria-label="Email address"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-night-foreground placeholder:text-night-muted focus:outline-none"
                />
              </div>
              <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow">
                Join Waitlist <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                {["A", "B", "C", "D"].map((c) => (
                  <span
                    key={c}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-night bg-night-card text-xs font-bold text-night-foreground"
                  >
                    {c}
                  </span>
                ))}
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-night bg-gradient-primary text-[10px] font-bold text-primary-foreground">
                  10K+
                </span>
              </div>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-night-foreground">
              10,000+ early believers
              <Heart className="h-4 w-4 fill-primary-glow text-primary-glow" />
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
