import { Heart, Instagram, Linkedin, MessageCircle, Send, Twitter } from "lucide-react";
import { Logo } from "./Logo";

const columns = [
  { title: "Company", links: ["About Us", "Our Mission", "Careers", "Contact"] },
  { title: "Product", links: ["Features", "Roadmap", "Updates", "Changelog"] },
  { title: "Resources", links: ["Help Center", "Blog", "Terms of Service", "Privacy Policy"] },
];

const socials = [Twitter, Linkedin, MessageCircle, Instagram];

export function Footer() {
  return (
    <footer className="bg-night py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(3,1fr)_1.3fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-5 max-w-xs text-night-muted">
              Building the future with innovation, community, and purpose.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#home"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-night-card text-night-foreground transition-colors hover:bg-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-bold text-night-foreground">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#home" className="text-night-muted transition-colors hover:text-primary-glow">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-bold text-night-foreground">Stay Updated</h3>
            <p className="mt-4 text-night-muted">Subscribe to get the latest updates.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
              <input
                type="email"
                required
                aria-label="Email address"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-night-border bg-night-card px-4 py-3 text-night-foreground placeholder:text-night-muted focus:outline-none"
              />
              <button
                aria-label="Subscribe"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-night-border pt-6 text-sm text-night-muted sm:flex-row">
          <p>© 2024 Nexora. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            Made with <Heart className="h-4 w-4 fill-primary-glow text-primary-glow" /> for the
            future.
          </p>
        </div>
      </div>
    </footer>
  );
}
