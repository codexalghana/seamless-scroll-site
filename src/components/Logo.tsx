import { Hexagon } from "lucide-react";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
        <Hexagon className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
        <span className="absolute text-[11px] font-extrabold text-primary-foreground">N</span>
      </span>
      <span
        className={`text-xl font-extrabold tracking-tight ${
          variant === "dark" ? "text-night-foreground" : "text-foreground"
        }`}
      >
        NEXORA
      </span>
    </a>
  );
}
