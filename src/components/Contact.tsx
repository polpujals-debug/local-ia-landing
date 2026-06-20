"use client";

import { useState } from "react";
import { useLocale } from "@/lib/locale-context";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const { t } = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);

  function validate(): string | null {
    if (name.trim().length < 2) return t.contact.errorName;
    if (!EMAIL_RE.test(email.trim())) return t.contact.errorEmail;
    if (message.trim().length < 10) return t.contact.errorMessage;
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const error = validate();
    if (error) {
      setFieldError(error);
      setStatus("error");
      return;
    }
    setFieldError(null);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("send_failed");
      setStatus("sent");
    } catch {
      setFieldError(t.contact.errorGeneric);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-[90px] py-[110px] border-t border-border bg-surface transition-colors duration-500"
    >
      <div className="max-w-[1180px] mx-auto px-[32px] grid grid-cols-1 md:grid-cols-2 gap-[56px] items-center">
        <div data-reveal="">
          <div className="font-mono text-[12px] tracking-[var(--label-spacing)] uppercase text-muted mb-[18px]">
            {t.contact.label}
          </div>
          <h2
            className="font-serif font-semibold leading-[1.02] tracking-[-0.02em] m-0 mb-[18px] text-fg"
            style={{ fontSize: "clamp(34px,4.4vw,58px)", textWrap: "balance" }}
          >
            {t.contact.title}
          </h2>
          <p className="font-serif text-[19px] leading-[1.55] text-muted m-0 mb-[28px] max-w-[420px]">
            {t.contact.sub}
          </p>
          <div className="font-mono text-[13px] text-muted">
            {t.contact.or}
            <br />
            <a href={`mailto:${t.contact.email}`} className="text-accent no-underline text-[16px]">
              {t.contact.email}
            </a>
          </div>
        </div>
        <div data-reveal="">
          {status === "sent" ? (
            <div className="border border-accent rounded-[8px] bg-bg px-[32px] py-[48px] text-center">
              <div className="w-[48px] h-[48px] rounded-full bg-accent flex items-center justify-center mx-auto mb-[18px]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    stroke="var(--accent-ink)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-serif text-[22px] text-fg m-0">{t.contact.thanks}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-border rounded-[8px] bg-bg p-[30px] flex flex-col gap-[16px]"
            >
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contact.fName}
                className="bg-surface-2 border border-border rounded-[4px] px-[16px] py-[14px] text-fg font-serif text-[16px] outline-none focus:border-accent"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.contact.fEmail}
                className="bg-surface-2 border border-border rounded-[4px] px-[16px] py-[14px] text-fg font-serif text-[16px] outline-none focus:border-accent"
              />
              <textarea
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.contact.fMsg}
                className="bg-surface-2 border border-border rounded-[4px] px-[16px] py-[14px] text-fg font-serif text-[16px] outline-none resize-y focus:border-accent"
              />
              {status === "error" && fieldError && (
                <p className="font-mono text-[12px] text-[#ff6b6b] m-0">{fieldError}</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-accent text-accent-ink font-mono text-[13px] tracking-[0.06em] uppercase py-[16px] border-none rounded-[4px] cursor-pointer transition-transform duration-200 hover:-translate-y-[2px] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === "sending" ? t.contact.fBtnSending : t.contact.fBtn}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
