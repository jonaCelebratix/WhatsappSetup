import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Nav, Footer, GuideTabs } from "@/components/site/SiteChrome";
import { PricingSlider } from "@/components/site/PricingSlider";

export const Route = createFileRoute("/email")({
  head: () => ({
    meta: [
      { title: "Email Setup — Celebratix" },
      { name: "description", content: "Verify your domain with DNS and send branded emails from Celebratix in five steps." },
      { property: "og:title", content: "Email Setup — Celebratix" },
      { property: "og:description", content: "Verify your domain, ship branded emails from CEP." },
    ],
  }),
  component: EmailPage,
});

const dnsSteps = [
  {
    title: "Open a sender profile",
    body: "Go to Sender Profiles and pick a profile flagged 'Domain not verified', or create a fresh one via New Sender Profile.",
    hint: "Marketing → Sender Profiles",
  },
  {
    title: "Start verification",
    body: "Tap Verify Domain on the profile, then Start Domain Authentication. Celebratix generates your records.",
  },
  {
    title: "Grab your three CNAME records",
    body: "You'll see three CNAMEs, each with a Host and a Value. Use the copy buttons to grab them exactly — no extra spaces, no trailing dots.",
  },
  {
    title: "Add them at your DNS provider",
    body: "Log in to your domain or DNS provider (Cloudflare, TransIP, GoDaddy, Google Domains, etc.) and create one CNAME record per row. Type CNAME, Host = the value from Celebratix, Target = the value from Celebratix.",
  },
  {
    title: "Hit Verify",
    body: "DNS changes are usually live within an hour, but can take up to 48 hours. Back in Celebratix, tap Verify — the status flips from Pending to Domain Verified.",
  },
];

const pitfalls = [
  {
    title: "Double domain",
    body: "Some providers auto-append your domain to the host. Enter only the part before your domain (e.g. em6114, not em6114.yourdomain.nl).",
  },
  {
    title: "Cloudflare proxy off",
    body: "Set Cloudflare to DNS only (grey cloud). A proxied record won't verify.",
  },
  {
    title: "Copy, don't type",
    body: "No extra spaces or trailing dots — use the copy button in Celebratix.",
  },
  {
    title: "TTL is fine on auto",
    body: "Leave TTL at automatic or the default — no need to change it.",
  },
];

const emailTiers = [
  { volume: 5000, price: 45 },
  { volume: 10000, price: 58 },
  { volume: 20000, price: 110 },
  { volume: 40000, price: 130 },
  { volume: 60000, price: 170 },
  { volume: 100000, price: 238 },
  { volume: 150000, price: 318 },
  { volume: 250000, price: 438 },
  { volume: 350000, price: 538 },
  { volume: 500000, price: 738 },
  { volume: 750000, price: 1038 },
  { volume: 1000000, price: 1258 },
];

function EmailPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="relative pt-32 pb-20 overflow-hidden hero-vignette">
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center animate-float-in">
          <GuideTabs />
          <div className="h-8" />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95]">
            Verify your domain.<br />
            <span className="text-muted-foreground">Send as</span> yourself.
          </h1>
          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Without verification, your emails leave through a shared sender (noreply@mkt.celebratix.io) and recipients see "via Celebratix". Verify once and every email lands from your own brand — better deliverability, fewer spam folders.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#phase-1" className="pill-btn">
              Start setup
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="#pricing" className="pill-btn-ghost">See pricing</a>
          </div>
        </div>
      </section>

      <section id="phase-1" className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline gap-6 mb-4">
            <span className="text-sm text-muted-foreground font-mono">— 01</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">DNS Verification</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.05] max-w-3xl">
            Three records. Five steps.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            You add three CNAME records at your DNS provider, then click verify in Celebratix. Set up once — never again.
          </p>

          <div className="mt-16 space-y-4">
            {dnsSteps.map((s, i) => (
              <StepRow key={i} index={i + 1} {...s} />
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-foreground/15 bg-foreground/[0.04] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-medium tracking-tight">You're verified — emails now ship from your own domain.</h3>
              <p className="mt-2 text-muted-foreground text-sm md:text-base">
                "via Celebratix" is gone. Recipients see your brand and your deliverability score climbs.
              </p>
            </div>
            <a href="#pricing" className="pill-btn shrink-0">
              See pricing
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline gap-6 mb-4">
            <span className="text-sm text-muted-foreground font-mono">— 02</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Pitfalls</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.05] max-w-3xl">
            Common slip-ups.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Four things people get wrong. Avoid these and verification lands the first time.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {pitfalls.map((p, i) => (
              <div key={i} className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-6">
                <div className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center mb-4">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-medium tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline gap-6 mb-4">
            <span className="text-sm text-muted-foreground font-mono">— 03</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.05] max-w-3xl">
            One flat fee per month.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Email runs on a monthly subscription tied to your send volume. Drag the slider to find your tier.
          </p>

          <div className="mt-12">
            <PricingSlider
              title="Monthly email volume"
              subtitle="Pick the volume you expect to send this month."
              tiers={emailTiers}
              unit="emails/month"
              unitLabel="Monthly email volume"
              priceSuffix="per month"
              highlightNote="Effective price per email drops with volume"
              cta={{ label: "Talk to sales", href: "https://www.celebratix.io/en" }}
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="max-w-5xl mx-auto section-card p-12 md:p-20 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" /> You're live
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.05]">
            Branded email,<br />
            <span className="text-muted-foreground">straight from CEP.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Your domain is verified and your tier is picked. Time to send your first campaign.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="https://www.celebratix.io/en" className="pill-btn">
              <span className="dot" /> Open Celebratix
            </a>
            <a href="mailto:support@celebratix.io" className="pill-btn-ghost">
              Contact support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StepRow({
  index,
  title,
  body,
  hint,
}: {
  index: number;
  title: string;
  body: string;
  hint?: string;
}) {
  return (
    <div
      className="section-card p-6 md:p-10 grid md:grid-cols-[80px_1fr] gap-6 hover:border-foreground/20 transition-colors animate-float-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="text-3xl font-medium tracking-tighter text-muted-foreground/60 font-mono">
        {String(index).padStart(2, "0")}
      </div>
      <div className="min-w-0">
        <h3 className="text-2xl md:text-3xl font-medium tracking-tight">{title}</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed text-base">{body}</p>
        {hint && (
          <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-xs text-muted-foreground font-mono">
            <ExternalLink className="w-3 h-3" />
            {hint}
          </div>
        )}
      </div>
    </div>
  );
}
