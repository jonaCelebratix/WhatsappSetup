import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { ArrowRight } from "lucide-react";

type Tier = { volume: number; price: number; label?: string };

export function PricingSlider({
  title,
  subtitle,
  tiers,
  unit,
  unitLabel,
  priceSuffix,
  highlightNote,
  cta,
}: {
  title: string;
  subtitle: string;
  tiers: Tier[];
  unit: string; // e.g. "credits" or "emails/month"
  unitLabel: string; // e.g. "Credits per pack" or "Monthly email volume"
  priceSuffix?: string; // e.g. "per month" or "one-off"
  highlightNote?: string;
  cta?: { label: string; href: string };
}) {
  const [idx, setIdx] = useState(0);
  const selected = tiers[idx];

  const perUnit = useMemo(() => selected.price / selected.volume, [selected]);

  return (
    <div className="section-card p-8 md:p-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <h3 className="text-3xl md:text-4xl font-medium tracking-tighter">{title}</h3>
          <p className="mt-3 text-muted-foreground max-w-xl">{subtitle}</p>
        </div>
        {highlightNote && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-xs text-muted-foreground font-mono shrink-0">
            {highlightNote}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-[1fr_320px] gap-10">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
            {unitLabel}
          </div>
          <div className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">
            {selected.volume.toLocaleString("en-US")} <span className="text-muted-foreground text-2xl md:text-3xl">{unit}</span>
          </div>
          <Slider
            value={[idx]}
            min={0}
            max={tiers.length - 1}
            step={1}
            onValueChange={(v) => setIdx(v[0])}
            className="mb-4"
          />
          <div className="flex justify-between text-xs text-muted-foreground font-mono">
            {tiers.map((t, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`transition-colors hover:text-foreground ${
                  i === idx ? "text-foreground font-medium" : ""
                }`}
              >
                {t.volume >= 1000 ? `${t.volume / 1000}k` : t.volume}
              </button>
            ))}
          </div>
          {selected.label && (
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-foreground/15 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
              {selected.label}
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-6 flex flex-col">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Your price</div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-5xl font-medium tracking-tighter">€{selected.price.toLocaleString("en-US")}</span>
            {priceSuffix && <span className="text-sm text-muted-foreground">{priceSuffix}</span>}
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            ≈ €{perUnit.toFixed(3).replace(/\.?0+$/, "")} per {unit.replace(/s\/.*/, "").replace(/s$/, "")}
          </div>
          <div className="mt-6 h-px bg-border" />
          <div className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {selected.volume.toLocaleString("en-US")} {unit} included. Volume discount applied automatically.
          </div>
          {cta && (
            <a href={cta.href} className="pill-btn mt-6 justify-center">
              {cta.label}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          )}
          <p className="mt-4 text-[11px] text-muted-foreground">Prices exclude VAT.</p>
        </div>
      </div>
    </div>
  );
}
