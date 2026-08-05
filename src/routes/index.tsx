import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Roadmap } from "@/components/Roadmap";
import { Faq } from "@/components/Faq";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

const title = "Nexora — Join the waitlist for what's next";
const description =
  "Nexora is launching soon. Join 10,000+ early believers for early access, exclusive updates and special rewards.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Roadmap />
        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
