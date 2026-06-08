import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";

export function GuideTabs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const tabs = [
    { to: "/whatsapp", label: "WhatsApp Setup Guide" },
    { to: "/email", label: "Email Setup Guide" },
  ] as const;
  return (
    <div className="inline-flex items-center gap-2 p-1 rounded-full border border-foreground/15 bg-background/60 backdrop-blur">
      {tabs.map((t) => {
        const active = pathname === t.to;
        return (
          <Link
            key={t.to}
            to={t.to}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.18em] transition-colors ${
              active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${active ? "bg-background" : "bg-foreground"}`} />
            {t.label}
          </Link>
        );
      })}
    </div>
  );
}

export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight text-base">
          <Play className="w-4 h-4 fill-foreground" />
          Celebratix
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link to="/whatsapp" className="hover:text-foreground transition-colors">WhatsApp</Link>
          <Link to="/email" className="hover:text-foreground transition-colors">Email</Link>
          <a href="https://www.celebratix.io/en" className="hover:text-foreground transition-colors">Blog</a>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <a href="https://www.celebratix.io/en" className="hidden sm:block text-muted-foreground hover:text-foreground transition-colors">Support</a>
          <a href="https://www.celebratix.io/en" className="hidden sm:block text-muted-foreground hover:text-foreground transition-colors">Log in</a>
          <Link to="/" className="pill-btn text-sm">
            Get started
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Play className="w-3.5 h-3.5 fill-foreground" />
          <span>Celebratix — Tech that powers your event.</span>
        </div>
        <div className="flex gap-6">
          <a href="https://www.celebratix.io/en" className="hover:text-foreground transition-colors">Website</a>
          <a href="https://www.celebratix.io/en" className="hover:text-foreground transition-colors">Blog</a>
          <a href="https://www.celebratix.io/en" className="hover:text-foreground transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}
