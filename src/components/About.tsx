import { Clock, Gift, Globe, Heart, Rocket, ShieldCheck, Star, Target, Users, Zap } from "lucide-react";
import aboutPodium from "@/assets/about-podium.jpg";

const pillars = [
  { icon: Target, title: "Our Mission", body: "To bring innovative solutions that make a real impact." },
  { icon: Heart, title: "Our Vision", body: "A future where community and technology create limitless opportunities." },
  { icon: Star, title: "Our Promise", body: "Transparency, value, and an experience you can trust." },
];

const stats = [
  { icon: Users, value: "10K+", label: "Early Believers", body: "Growing community of visionaries." },
  { icon: Rocket, value: "25+", label: "Countries", body: "Global reach and counting." },
  { icon: Gift, value: "100+", label: "Rewards", body: "Exclusive perks for early members." },
  { icon: Clock, value: "24/7", label: "Support", body: "We're here whenever you need us." },
];

const orbit = [
  { icon: Users, label: "Community", pos: "left-1/2 top-0 -translate-x-1/2" },
  { icon: Zap, label: "Innovation", pos: "left-0 top-1/4" },
  { icon: ShieldCheck, label: "Trust", pos: "right-0 top-1/3" },
  { icon: Gift, label: "Rewards", pos: "left-0 bottom-1/4" },
  { icon: Globe, label: "Impact", pos: "right-0 bottom-1/5" },
];

export function About() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-primary">ABOUT NEXORA</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Built for the future.
            <br />
            Backed by <span className="text-gradient">purpose.</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Nexora is more than a platform — it's a movement to empower early believers, reward
            loyalty, and build products people truly love.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <img
            src={aboutPodium}
            alt="Nexora logo floating above a display podium"
            loading="lazy"
            width={1200}
            height={1008}
            className="w-full"
          />
          {orbit.map(({ icon: Icon, label, pos }) => (
            <div
              key={label}
              className={`absolute ${pos} hidden items-center gap-2 rounded-xl bg-card px-4 py-3 shadow-card sm:flex`}
            >
              <Icon className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid gap-8 rounded-3xl bg-card p-10 shadow-card sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, body }) => (
            <div key={label} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent">
                <Icon className="h-5 w-5 text-primary" />
              </span>
              <div>
                <p className="text-3xl font-extrabold tracking-tight">{value}</p>
                <p className="font-semibold text-primary">{label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
