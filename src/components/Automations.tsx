"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/locale-context";

export function Automations() {
  const { t } = useLocale();
  const [chatN, setChatN] = useState(0);
  const [chatTyping, setChatTyping] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const messages = t.chat.messages;

  useEffect(() => {
    setChatN(0);
    setChatTyping(false);

    const step = (n: number) => {
      if (n >= messages.length) {
        timerRef.current = setTimeout(() => {
          setChatN(0);
          setChatTyping(false);
          timerRef.current = setTimeout(() => step(0), 800);
        }, 2800);
        return;
      }
      setChatTyping(true);
      timerRef.current = setTimeout(() => {
        setChatN(n + 1);
        setChatTyping(false);
        timerRef.current = setTimeout(() => step(n + 1), 1000);
      }, 850);
    };

    timerRef.current = setTimeout(() => step(0), 700);

    return () => clearTimeout(timerRef.current);
  }, [messages]);

  const visibleMessages = messages.slice(0, chatN);
  const typingMine = messages[chatN] ? messages[chatN].role === "user" : false;

  return (
    <section id="automations" className="scroll-mt-[90px] py-[110px]">
      <div className="max-w-[1180px] mx-auto px-[32px] grid grid-cols-1 md:grid-cols-2 gap-[56px] items-center">
        <div data-reveal="">
          <div className="font-mono text-[12px] tracking-[var(--label-spacing)] uppercase text-muted mb-[18px]">
            {t.chat.label}
          </div>
          <h2
            className="font-serif font-semibold leading-[1.04] tracking-[-0.02em] m-0 mb-[18px] text-fg"
            style={{ fontSize: "clamp(32px,4vw,52px)" }}
          >
            {t.chat.title}
          </h2>
          <p className="font-serif text-[18px] leading-[1.55] text-muted m-0 mb-[28px] max-w-[460px]">
            {t.chat.sub}
          </p>
          <div className="flex gap-[28px] flex-wrap">
            <div>
              <div className="font-serif font-semibold text-[36px] text-accent leading-none">24/7</div>
              <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted mt-[6px]">
                {t.chat.stat1}
              </div>
            </div>
            <div>
              <div className="font-serif font-semibold text-[36px] text-fg leading-none">&lt;2s</div>
              <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted mt-[6px]">
                {t.chat.stat2}
              </div>
            </div>
          </div>
        </div>
        <div data-reveal="">
          <div
            className="border border-border rounded-[18px] bg-surface overflow-hidden"
            style={{ boxShadow: "0 30px 60px -30px rgba(0,0,0,.5)" }}
          >
            <div className="flex items-center gap-[11px] px-[20px] py-[16px] border-b border-border">
              <span className="relative w-[34px] h-[34px] rounded-full bg-accent flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="2.9" fill="var(--accent-ink)" />
                  <path
                    d="M8.3 19.7a8 8 0 0 1 0-11.4"
                    stroke="var(--accent-ink)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M19.7 8.3a8 8 0 0 1 0 11.4"
                    stroke="var(--accent-ink)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div className="flex-1">
                <div className="font-mono text-[13px] font-semibold text-fg">{t.chat.agent}</div>
                <div className="flex items-center gap-[6px]">
                  <span className="w-[6px] h-[6px] rounded-full bg-online" />
                  <span className="font-mono text-[11px] text-muted">{t.chat.online}</span>
                </div>
              </div>
            </div>
            <div className="px-[20px] py-[22px] flex flex-col gap-[12px] min-h-[300px] justify-end">
              {visibleMessages.map((m, i) => {
                const mine = m.role === "user";
                return (
                  <div key={i} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] px-[16px] py-[12px] text-[15px] leading-[1.45] font-serif ${
                        mine
                          ? "rounded-[16px_16px_4px_16px] bg-accent text-accent-ink"
                          : "rounded-[16px_16px_16px_4px] bg-surface-2 text-fg border border-border"
                      }`}
                      style={{ animation: "heroIn .4s ease both" }}
                    >
                      {m.text}
                    </div>
                  </div>
                );
              })}
              {chatTyping && (
                <div className={`flex ${typingMine ? "justify-end" : "justify-start"}`}>
                  <div className="flex gap-[5px] px-[16px] py-[14px] rounded-[16px] bg-surface-2 border border-border">
                    <span
                      className="w-[7px] h-[7px] rounded-full bg-muted"
                      style={{ animation: "blink 1s infinite" }}
                    />
                    <span
                      className="w-[7px] h-[7px] rounded-full bg-muted"
                      style={{ animation: "blink 1s .2s infinite" }}
                    />
                    <span
                      className="w-[7px] h-[7px] rounded-full bg-muted"
                      style={{ animation: "blink 1s .4s infinite" }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
