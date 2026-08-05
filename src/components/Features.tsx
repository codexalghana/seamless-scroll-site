import { ArrowRight, Gift, Mail, ShieldCheck, Star, Users, Zap } from "lucide-react";
import rocket from "@/assets/rocket.jpg";

const features = [
  { icon: Zap, title: "Early Access", body: "Be the first to try our product before anyone else. Get a head start and stay ahead." },
  { icon: Mail, title: "Exclusive Updates", body: "Receive product updates, behind-the-scenes content, and announcements straight to your inbox." },
  { icon: Gift, title: "Special Rewards", body: "Enjoy special perks, bonuses, and surprises created just for our early community." },
  { icon: Star, title: "Shape the Future", body: "Your feedback matters. Help us build the product you'll love." },
  { icon: ShieldCheck, title: "Trusted & Secure", body: "We value your privacy and keep your information safe with industry-leading security." },
  { icon: Users, title: "Community First", body: "Join a community of passionate early believers and be part of something big." },
];

export function Features() {
  return (
    <section id="features" className="bg-gradient-soft py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-primary">FEATURES</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Built to deliver <span className="text-gradient">exceptional</span> experiences.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Nexora is packed with powerful features designed to bring value to early believers and
            set a new standard.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="flex gap-5 rounded-2xl bg-card p-7 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent">
                <Icon className="h-6 w-6 text-primary" />
              </span>
              <div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid items-center gap-8 overflow-hidden rounded-3xl bg-gradient-night p-10 lg:grid-cols-2">
          <div className="flex items-center gap-6">
            <img
              src={rocket}
              alt="Rocket launching into a starry sky"
              loading="lazy"
              width={1008}
              height={1008}
              className="hidden h-28 w-28 shrink-0 rounded-full object-cover sm:block"
            />
            <div>
              <h3 className="text-3xl font-extrabold leading-tight text-night-foreground">
                Don't miss out on something revolutionary.
              </h3>
              <p className="mt-3 text-night-muted">
                Join thousands of others who are ready for what's next.
              </p>
            </div>
          </div>

          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 sm:flex-row sm:gap-0"
            >
              <div className="flex flex-1 items-center gap-3 rounded-xl bg-card px-4 py-3.5 sm:rounded-r-none">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  required
                  aria-label="Email address"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground sm:rounded-l-none">
                Join Waitlist <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-5 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["A", "B", "C", "D", "E"].map((c) => (
                  <span
                    key={c}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-night bg-night-card text-xs font-bold text-night-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="text-sm text-night-muted">
                <span className="block font-bold text-night-foreground">10,000+</span>
                people already joined
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
