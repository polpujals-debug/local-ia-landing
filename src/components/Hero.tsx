"use client";

import { HeroGraph } from "./icons/HeroGraph";
import { useLocale } from "@/lib/locale-context";

export function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="top"
      className="relative pt-[160px] pb-[110px] scroll-mt-[90px]"
      style={{
        backgroundImage:
          "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    >
      <div className="max-w-[1180px] mx-auto px-[32px] grid grid-cols-1 md:grid-cols-[1.15fr_.85fr] gap-[48px] items-center">
        <div style={{ animation: "heroIn 1s cubic-bezier(.2,.7,.2,1) both" }}>
          <div className="inline-flex items-center gap-[9px] px-[13px] py-[7px] border border-border rounded-full mb-[26px]">
            <span
              className="w-[7px] h-[7px] rounded-full bg-accent"
              style={{ animation: "blink 1.6s infinite" }}
            />
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted">
              {t.hero.label}
            </span>
          </div>
          <h1
            className="font-serif font-semibold leading-[.98] tracking-[-0.025em] m-0 mb-[24px] text-fg"
            style={{ fontSize: "clamp(42px,6vw,82px)", textWrap: "balance" }}
          >
            {t.hero.title}
          </h1>
          <p
            className="font-serif leading-[1.55] text-muted max-w-[540px] m-0 mb-[36px]"
            style={{ fontSize: "clamp(17px,1.4vw,21px)", textWrap: "pretty" }}
          >
            {t.hero.sub}
          </p>
          <div className="flex gap-[14px] flex-wrap items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-[10px] bg-accent text-accent-ink font-mono text-[13px] tracking-[0.06em] uppercase px-[26px] py-[16px] rounded-[4px] no-underline transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_12px_30px_-12px_var(--accent)]"
            >
              {t.hero.ctaPrimary} &nbsp;&rarr;
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-[10px] text-fg font-mono text-[13px] tracking-[0.06em] uppercase px-[22px] py-[16px] border border-border rounded-[4px] no-underline transition-colors duration-200 hover:border-fg"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
        <div
          className="flex justify-center"
          style={{ animation: "heroIn 1.2s .15s cubic-bezier(.2,.7,.2,1) both" }}
        >
          <HeroGraph />
        </div>
      </div>
    </section>
  );
}
