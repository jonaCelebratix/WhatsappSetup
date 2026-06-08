import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, ExternalLink, Sparkles } from "lucide-react";
import { Nav, Footer, GuideTabs } from "@/components/site/SiteChrome";
import { PricingSlider } from "@/components/site/PricingSlider";
import dashboardImg from "@/assets/dashboard-marketing.png";
import campaignImg from "@/assets/campaign-settings.png";
import metaStep1 from "@/assets/meta/step1-register.png";
import metaStep2 from "@/assets/meta/step2-create-app.png";
import metaStep3 from "@/assets/meta/step3-use-cases.png";
import metaStep4 from "@/assets/meta/step4-business.png";
import metaStep5 from "@/assets/meta/step5-requirements.png";
import metaStep6 from "@/assets/meta/step6-overview.png";
import fb1 from "@/assets/fb/fb1-intro.png";
import fb2 from "@/assets/fb/fb2-assets.png";
import fb3 from "@/assets/fb/fb3-phone.png";
import fb4 from "@/assets/fb/fb4-review.png";
import fb5 from "@/assets/fb/fb5-done.png";
import cxTemplates from "@/assets/celebratix/cx-templates.png.asset.json";
import cxCampaigns from "@/assets/celebratix/cx-campaigns.png.asset.json";
import cxNewCampaign from "@/assets/celebratix/cx-new-campaign.png.asset.json";

export const Route = createFileRoute("/whatsapp")({
  head: () => ({
    meta: [
      { title: "WhatsApp Setup — Celebratix" },
      { name: "description", content: "Connect WhatsApp Business to the Celebratix Engagement Platform in minutes." },
      { property: "og:title", content: "WhatsApp Setup — Celebratix" },
      { property: "og:description", content: "Connect WhatsApp Business to Celebratix in minutes." },
    ],
  }),
  component: WhatsAppPage,
});

const metaSteps = [
  { title: "Create a Meta for Developers account", body: "Search 'Meta for Developers' and register so you can create an app with Meta.", hint: "developers.facebook.com", image: metaStep1 },
  { title: "Hit the green 'Create App' button", body: "Once your account is ready, the green Create App button appears in the centre and top-right. Tap it.", image: metaStep2 },
  { title: "Fill in app details", body: "Add your app name and contact. For use cases, select 'Connect with customers through WhatsApp'.", image: metaStep3 },
  { title: "Connect your business portfolio", body: "Link your existing business portfolio, or tap the blue 'Create a business portfolio.' link to spin up a new one in seconds.", image: metaStep4 },
  { title: "Review publishing requirements", body: "Most apps see no requirements. Continue to the app overview to double-check everything looks right.", image: metaStep5 },
  { title: "Create the app", body: "Tap the green Create App button bottom-right. You'll land on your app dashboard, ready to go.", image: metaStep6 },
];

const fbSubsteps = [
  { title: "Start the onboarding", body: "Review what you'll connect, then tap Doorgaan / Continue.", image: fb1 },
  { title: "Select your business assets", body: "Pick your business portfolio and WhatsApp Business account — or create new ones inline.", image: fb2 },
  { title: "Add your WhatsApp phone number", body: "Choose between a display name only or a new/existing WhatsApp number.", image: fb3 },
  { title: "Review and confirm permissions", body: "Double-check what Celebratix will access, then tap Bevestigen / Confirm.", image: fb4 },
  { title: "Account linked", body: "You'll see a confirmation screen. Tap Voltooien / Finish to return to Celebratix.", image: fb5 },
  { done: true, title: "Step complete.", body: "Your Facebook account is linked. Head back to Celebratix to finish wiring up your number." },
];

const celebratixSteps = [
  { title: "Open Marketing → Settings", body: "In the left sidebar of your Celebratix dashboard, tap Marketing, then Settings to connect WhatsApp.", image: dashboardImg },
  { title: "Link your account via Facebook", body: "A Facebook tab opens automatically with a few quick steps. Walk through them and your account is linked.", substeps: fbSubsteps },
  { title: "See your active WhatsApp campaign", body: "Back inside Marketing → Settings, your active WhatsApp campaign now appears with account details and phone numbers.", image: campaignImg },
  { title: "Use the +1 555 number or add your own", body: "The +1 555 number Meta gives you out of the box is a fully usable WhatsApp sender — you can start messaging from it right away. Prefer to send from your own brand number? Add and verify it inside Meta first.", callout: true },
  { title: "(Optional) Sync from WABA", body: "Only needed if you added your own business number — tap the black 'Sync from WABA' button bottom-right to pull it into Celebratix. If you're sticking with the +1 555 number, you can skip this." },
  { title: "Design your first template", body: "Head to Marketing → Templates, switch to the WhatsApp tab and hit 'New template'. Templates are reusable message designs you can drop into any campaign.", image: cxTemplates.url },
  { title: "Create a new campaign", body: "Open Marketing → Campaigns, switch to the WhatsApp tab and tap 'New Campaign' to start sending to your audience.", image: cxCampaigns.url },
  { title: "Wire it up and send", body: "Name the campaign, pick your WhatsApp account, choose the template you just built, select a phone number and (optionally) schedule it. Add segments to target the right guests and hit send.", image: cxNewCampaign.url },
];

const whatsappTiers = [
  { volume: 1, price: 0.35, label: "Pay-as-you-go" },
  { volume: 500, price: 140, label: "Starter" },
  { volume: 1000, price: 260, label: "Bronze" },
  { volume: 2500, price: 575, label: "Silver" },
  { volume: 5000, price: 1000, label: "Gold" },
  { volume: 10000, price: 1700, label: "Platinum" },
  { volume: 25000, price: 3750, label: "Diamond" },
];

function WhatsAppPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Phase
        id="phase-1"
        index="01"
        eyebrow="Meta Cloud API"
        title="Set up your developer app."
        subtitle="Create your app with Meta — six quick clicks."
        note="Already have a WhatsApp Business Account? Skip straight to step 02."
        steps={metaSteps}
        outro={
          <div className="mt-10 rounded-2xl border border-foreground/15 bg-foreground/[0.04] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-medium tracking-tight">Congrats — your WhatsApp Business Account is live.</h3>
              <p className="mt-2 text-muted-foreground text-sm md:text-base">
                Your Meta app is created and your WABA is provisioned. Time to plug it into Celebratix.
              </p>
            </div>
            <a href="#phase-2" className="pill-btn shrink-0">
              Continue to step 02
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        }
      />
      <Phase
        id="phase-2"
        index="02"
        eyebrow="Celebratix Dashboard"
        title="Connect inside Celebratix."
        subtitle="Link your WABA to CEP and start sending campaigns to your guests."
        steps={celebratixSteps}
      />

      <section id="pricing" className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline gap-6 mb-4">
            <span className="text-sm text-muted-foreground font-mono">— 03</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.05] max-w-3xl">
            Pay for what you send.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Messages tied to ticket sales are billed at a flat 2.5% commission. Utility messages — reminders, updates, confirmations — run on credits. The more you buy, the less you pay per message.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-4 mb-6">
            <div className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">With ticket sales</div>
              <div className="mt-3 text-4xl font-medium tracking-tighter">2.5%</div>
              <p className="mt-2 text-sm text-muted-foreground">Commission on revenue generated through the WhatsApp message. Only owed when a sale happens.</p>
            </div>
            <div className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Without ticket sales</div>
              <div className="mt-3 text-4xl font-medium tracking-tighter">Credits</div>
              <p className="mt-2 text-sm text-muted-foreground">Utility messages cost credits. One message = one credit.</p>
            </div>
          </div>

          <PricingSlider
            title="Credit packs"
            subtitle="Drag the slider to find the pack that fits your event volume."
            tiers={whatsappTiers}
            unit="credits"
            unitLabel="Credits per pack"
            priceSuffix="one-off"
            highlightNote="Price per credit drops with volume"
            cta={{ label: "Talk to sales", href: "https://www.celebratix.io/en" }}
          />
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden hero-vignette">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center animate-float-in">
        <GuideTabs />
        <div className="h-8" />
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95]">
          Connect WhatsApp.<br />
          <span className="text-muted-foreground">Reach every</span> guest.
        </h1>
        <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          A short walkthrough to get your WhatsApp Business Account live inside CEP — the Celebratix Engagement Platform.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#phase-1" className="pill-btn">
            Start setup
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a href="#pricing" className="pill-btn-ghost">
            See pricing
          </a>
        </div>
        <div className="mt-20 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-foreground/10 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
          <img src={dashboardImg} alt="Celebratix marketing dashboard" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

function Phase({
  id,
  index,
  eyebrow,
  title,
  subtitle,
  note,
  steps,
  outro,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  note?: string;
  steps: Array<{ title: string; body: string; hint?: string; image?: string; callout?: boolean; substeps?: Array<{ title: string; body: string; image?: string; done?: boolean }> }>;
  outro?: ReactNode;
}) {
  return (
    <section id={id} className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-baseline gap-6 mb-4">
          <span className="text-sm text-muted-foreground font-mono">— {index}</span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.05] max-w-3xl">{title}</h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
        {note && (
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/20 bg-foreground/[0.04] text-sm">
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            <span>{note}</span>
          </div>
        )}

        <div className="mt-16 space-y-4">
          {steps.map((s, i) => (
            <StepRow key={i} index={i + 1} {...s} />
          ))}
        </div>
        {outro}
      </div>
    </section>
  );
}

function StepRow({
  index,
  title,
  body,
  hint,
  image,
  callout,
  substeps,
}: {
  index: number;
  title: string;
  body: string;
  hint?: string;
  image?: string;
  callout?: boolean;
  substeps?: Array<{ title: string; body: string; image?: string; done?: boolean }>;
}) {
  return (
    <div className="section-card p-6 md:p-10 grid md:grid-cols-[80px_1fr] gap-6 hover:border-foreground/20 transition-colors animate-float-in"
      style={{ animationDelay: `${index * 50}ms` }}>
      <div className="flex md:flex-col items-center md:items-start gap-3">
        <div className="text-3xl font-medium tracking-tighter text-muted-foreground/60 font-mono">
          {String(index).padStart(2, "0")}
        </div>
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
        {callout && (
          <div className="mt-5 p-4 rounded-xl border border-foreground/15 bg-foreground/5 text-sm">
            <span className="font-medium">Good to know — </span>
            <span className="text-muted-foreground">The +1 555 number works for real campaigns. Only swap it out when you want messages to come from your own branded business number.</span>
          </div>
        )}
        {image && (
          <div className="mt-8 rounded-xl overflow-hidden border border-border bg-secondary/50">
            <img src={image} alt={title} className="w-full h-auto" loading="lazy" />
          </div>
        )}
        {substeps && (
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {substeps.map((sub, i) =>
              sub.done ? (
                <div key={i} className="rounded-xl border border-foreground/20 bg-foreground/[0.04] p-5 flex flex-col justify-center">
                  <div className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center mb-3">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-medium tracking-tight">{sub.title}</h4>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{sub.body}</p>
                </div>
              ) : (
                <div key={i} className="rounded-xl border border-border bg-secondary/30 overflow-hidden flex flex-col">
                  {sub.image && (
                    <div className="bg-secondary/50 border-b border-border">
                      <img src={sub.image} alt={sub.title} className="w-full h-auto" loading="lazy" />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="text-xs font-mono text-muted-foreground/70 mb-1">{String(i + 1).padStart(2, "0")}</div>
                    <h4 className="text-sm font-medium tracking-tight">{sub.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{sub.body}</p>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="px-6 py-32">
      <div className="max-w-5xl mx-auto section-card p-12 md:p-20 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground" /> You're live
        </div>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.05]">
          Ready to run your entire event<br />
          <span className="text-muted-foreground">from one system?</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Your WhatsApp Business Account is plugged in. Head back to CEP and send your first campaign.
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
  );
}
