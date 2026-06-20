"use client";

import { useLocale } from "@/lib/locale-context";

export function Work() {
  const { t } = useLocale();
  return (
    <section
      id="work"
      className="scroll-mt-[90px] py-[110px] border-t border-border bg-surface transition-colors duration-500"
    >
      <div className="max-w-[1180px] mx-auto px-[32px]">
        <div
          className="flex justify-between items-end gap-[24px] flex-wrap mb-[48px]"
          data-reveal=""
        >
          <div className="max-w-[560px]">
            <div className="font-mono text-[12px] tracking-[var(--label-spacing)] uppercase text-muted mb-[18px]">
              {t.work.label}
            </div>
            <h2
              className="font-serif font-semibold leading-[1.04] tracking-[-0.02em] m-0 text-fg"
              style={{ fontSize: "clamp(32px,4vw,52px)" }}
            >
              {t.work.title}
            </h2>
          </div>
          <p className="font-mono text-[12px] text-muted m-0 tracking-[0.04em]">{t.work.sub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {t.work.projects.map((p) => (
            <div
              key={p.client}
              data-reveal=""
              className="border border-border rounded-[8px] bg-bg p-[28px] transition-all duration-300 hover:-translate-y-[6px] hover:border-accent"
            >
              <div className="flex justify-between items-center mb-[30px]">
                <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted">
                  {p.client}
                </span>
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-accent-ink bg-accent px-[9px] py-[4px] rounded-full">
                  {p.tag}
                </span>
              </div>
              <h3 className="font-serif font-medium text-[23px] leading-[1.15] m-0 mb-[26px] text-fg">
                {p.title}
              </h3>
              <div className="border-t border-border pt-[16px] font-serif text-[19px] font-medium text-accent">
                {p.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
