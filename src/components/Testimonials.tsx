"use client";

import { useLocale } from "@/lib/locale-context";

export function Testimonials() {
  const { t } = useLocale();
  return (
    <section id="testimonials" className="scroll-mt-[90px] py-[110px]">
      <div className="max-w-[1180px] mx-auto px-[32px]">
        <div className="text-center max-w-[640px] mx-auto mb-[54px]" data-reveal="">
          <div className="font-mono text-[12px] tracking-[var(--label-spacing)] uppercase text-muted mb-[18px]">
            {t.testimonials.label}
          </div>
          <h2
            className="font-serif font-semibold leading-[1.04] tracking-[-0.02em] m-0 text-fg"
            style={{ fontSize: "clamp(32px,4vw,52px)" }}
          >
            {t.testimonials.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {t.testimonials.items.map((q) => (
            <div
              key={q.name}
              data-reveal=""
              className="border border-border rounded-[8px] bg-surface px-[28px] py-[32px] flex flex-col"
            >
              <div className="font-serif text-[56px] leading-none text-accent h-[30px]">&ldquo;</div>
              <p className="font-serif text-[19px] leading-[1.5] text-fg m-0 mb-[26px] flex-1" style={{ textWrap: "pretty" }}>
                {q.quote}
              </p>
              <div className="flex items-center gap-[12px] border-t border-border pt-[18px]">
                <div className="w-[38px] h-[38px] rounded-full bg-surface-2 border border-border flex items-center justify-center font-mono text-[13px] text-fg">
                  {q.initial}
                </div>
                <div>
                  <div className="font-mono text-[13px] font-semibold text-fg">{q.name}</div>
                  <div className="font-mono text-[11px] text-muted">{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
