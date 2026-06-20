"use client";

import { useLocale } from "@/lib/locale-context";
import { IconAutomation, IconChatbot, IconSaas } from "./icons/ServiceIcons";

export function Services() {
  const { t } = useLocale();
  const cards = [
    { icon: <IconAutomation />, title: t.services.a.title, desc: t.services.a.desc },
    { icon: <IconChatbot />, title: t.services.b.title, desc: t.services.b.desc },
    { icon: <IconSaas />, title: t.services.c.title, desc: t.services.c.desc },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-[90px] py-[110px] border-t border-border bg-surface transition-colors duration-500"
    >
      <div className="max-w-[1180px] mx-auto px-[32px]">
        <div className="max-w-[640px] mb-[54px]" data-reveal="">
          <div className="font-mono text-[12px] tracking-[var(--label-spacing)] uppercase text-muted mb-[18px]">
            {t.services.label}
          </div>
          <h2
            className="font-serif font-semibold leading-[1.04] tracking-[-0.02em] m-0 mb-[16px] text-fg"
            style={{ fontSize: "clamp(32px,4vw,52px)" }}
          >
            {t.services.title}
          </h2>
          <p className="font-serif text-[18px] leading-[1.55] text-muted m-0">{t.services.sub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {cards.map((card) => (
            <div
              key={card.title}
              data-reveal=""
              className="border border-border rounded-[8px] bg-bg px-[28px] py-[32px] transition-all duration-300 hover:-translate-y-[6px] hover:border-accent"
            >
              {card.icon}
              <h3 className="font-serif font-medium text-[25px] leading-[1.1] m-0 mb-[12px] text-fg">
                {card.title}
              </h3>
              <p className="font-serif text-[16px] leading-[1.55] text-muted m-0">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
