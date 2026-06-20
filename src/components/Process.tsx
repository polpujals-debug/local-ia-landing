"use client";

import { useState } from "react";
import { useLocale } from "@/lib/locale-context";

export function Process() {
  const { t } = useLocale();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="scroll-mt-[90px] py-[110px]">
      <div className="max-w-[1180px] mx-auto px-[32px] grid grid-cols-1 md:grid-cols-[.8fr_1.2fr] gap-[48px] items-start">
        <div className="md:sticky md:top-[110px]" data-reveal="">
          <div className="font-mono text-[12px] tracking-[var(--label-spacing)] uppercase text-muted mb-[18px]">
            {t.process.label}
          </div>
          <h2
            className="font-serif font-semibold leading-[1.04] tracking-[-0.02em] m-0 mb-[16px] text-fg"
            style={{ fontSize: "clamp(32px,4vw,52px)" }}
          >
            {t.process.title}
          </h2>
          <p className="font-serif text-[18px] leading-[1.55] text-muted m-0">{t.process.sub}</p>
        </div>
        <div>
          {t.process.steps.map((step, i) => {
            const isActive = i === activeStep;
            return (
              <div
                key={step.title}
                onClick={() => setActiveStep(i)}
                className="border-t border-border py-[26px] cursor-pointer grid grid-cols-[auto_1fr] gap-[24px] items-start"
              >
                <div
                  className={`font-mono text-[14px] font-semibold tracking-[0.04em] pt-[6px] transition-colors duration-300 ${
                    isActive ? "text-accent" : "text-muted"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3
                    className={`font-serif font-medium leading-[1.1] m-0 transition-colors duration-300 ${
                      isActive ? "text-fg" : "text-muted"
                    }`}
                    style={{ fontSize: "clamp(22px,2.4vw,30px)" }}
                  >
                    {step.title}
                  </h3>
                  {isActive && (
                    <p
                      className="font-serif text-[17px] leading-[1.55] text-muted mt-[12px] mb-0 max-w-[520px]"
                      style={{ animation: "heroIn .5s ease both" }}
                    >
                      {step.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
