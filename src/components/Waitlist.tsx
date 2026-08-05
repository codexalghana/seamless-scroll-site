import { useState } from "react";
import { Apple, Bell, Check, CheckCircle2, ChevronDown, Gift, Heart, Lock, Mail, Rocket, Send, User, Users, Zap } from "lucide-react";
import rocket from "@/assets/rocket.jpg";

const perks = [
  { icon: Zap, title: "Early Access", body: "Be the first to try Nexora." },
  { icon: Gift, title: "Exclusive Rewards", body: "Special perks just for early members." },
  { icon: Bell, title: "Important Updates", body: "Product updates and launch news." },
];

const steps = [
  { icon: Mail, title: "1. Confirmation Email", body: "We've sent you a confirmation email with all the details." },
  { icon: Bell, title: "2. Stay Updated", body: "We'll keep you updated with exciting news and progress." },
  { icon: Rocket, title: "3. Early Access", body: "Be the first to try Nexora when we launch." },
  { icon: Gift, title: "4. Exclusive Rewards", body: "Enjoy special perks and rewards for early supporters." },
];

export function Waitlist() {
  const [joined, setJoined] = useState(false);
  const [email, setEmail] = useState("");

  if (joined) {
    return (
      <section id="waitlist" className="bg-gradient-soft py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary shadow-glow lg:mx-0">
                <Check className="h-10 w-10 text-primary-foreground" strokeWidth={3} />
              </span>
              <h2 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
                You're <span className="text-gradient">on</span> the list!
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Thank you for joining the Nexora waitlist.
              </p>
              <p className="mt-4 max-w-md text-muted-foreground lg:mx-0">
                You'll be among the first to know when we launch. We're building something amazing,
                and we can't wait to share it with you.
              </p>
              <div className="mt-8 flex items-start gap-4 rounded-2xl bg-card p-6 text-left shadow-card">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                  <Mail className="h-5 w-5 text-primary" />
                </span>
                <p className="text-muted-foreground">
                  We've sent a confirmation email to
                  <span className="block font-bold text-foreground">
                    {email || "hello@example.com"}
                  </span>
                  Please check your inbox.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-night p-8">
              <h3 className="text-center text-3xl font-extrabold text-night-foreground">
                The future is almost here.
              </h3>
              <p className="mt-2 text-center text-night-muted">
                Stay tuned for something extraordinary.
              </p>
              <img
                src={rocket}
                alt="Rocket launching through purple clouds"
                loading="lazy"
                width={1008}
                height={1008}
                className="mx-auto mt-6 w-full max-w-sm rounded-2xl"
              />
              <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-card px-5 py-4">
                <span className="flex items-center gap-3 text-sm font-medium">
                  <Users className="h-5 w-5 text-primary" />
                  You're now part of a growing community
                </span>
                <span className="font-bold text-primary">10,000+</span>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-3xl bg-card p-10 shadow-card">
            <h3 className="text-center text-2xl font-extrabold">What happens next?</h3>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ icon: Icon, title, body }) => (
                <div key={title} className="text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </span>
                  <h4 className="mt-4 font-bold">{title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold tracking-[0.18em] text-primary">
            <Zap className="h-4 w-4" />
            YOU'RE ALMOST IN!
          </span>
          <h2 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Join the waitlist and be part of <span className="text-gradient">something big.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Enter your details to join thousands of early believers and get exclusive updates, early
            access and rewards.
          </p>

          <div className="mt-10 flex flex-col gap-7">
            {perks.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent">
                  <Icon className="h-6 w-6 text-primary" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["A", "B", "C", "D"].map((c) => (
                <span
                  key={c}
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-background bg-accent text-sm font-bold text-accent-foreground"
                >
                  {c}
                </span>
              ))}
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-background bg-gradient-primary text-xs font-bold text-primary-foreground">
                10K+
              </span>
            </div>
            <p className="text-muted-foreground">
              <span className="block font-bold text-foreground">10,000+ people</span>
              <span className="inline-flex items-center gap-1">
                already joined the waitlist{" "}
                <Heart className="h-4 w-4 fill-primary text-primary" />
              </span>
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-card p-8 shadow-card sm:p-10">
          <div className="flex items-center gap-5">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent">
              <User className="h-7 w-7 text-primary" />
            </span>
            <div>
              <h3 className="text-2xl font-extrabold">Join the Waitlist</h3>
              <p className="text-muted-foreground">
                Fill in your details and we'll keep you in the loop.
              </p>
            </div>
          </div>

          <form
            className="mt-8 flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              setJoined(true);
            }}
          >
            <div>
              <label htmlFor="name" className="text-sm font-semibold">
                Full Name
              </label>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-border px-4 py-3.5">
                <User className="h-5 w-5 text-muted-foreground" />
                <input
                  id="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-transparent placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Email Address
              </label>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-border px-4 py-3.5">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="role" className="text-sm font-semibold">
                What describes you best?
              </label>
              <div className="relative mt-2">
                <select
                  id="role"
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-border bg-transparent px-4 py-3.5 text-muted-foreground focus:outline-none"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Founder</option>
                  <option>Developer</option>
                  <option>Designer</option>
                  <option>Investor</option>
                  <option>Just curious</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[var(--primary)]" />
              I agree to receive emails from Nexora about updates and offers.
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-primary px-6 py-4 text-lg font-bold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-5 w-5" />
              Join Waitlist
            </button>

            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-border" />
              <span className="text-xs font-semibold text-muted-foreground">OR</span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-border px-4 py-3.5 font-semibold transition-colors hover:bg-muted"
              >
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Continue with Google
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-border px-4 py-3.5 font-semibold transition-colors hover:bg-muted"
              >
                <Apple className="h-5 w-5" />
                Continue with Apple
              </button>
            </div>

            <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" />
              We respect your privacy. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
