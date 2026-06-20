"use client";

import { Logo } from "./icons/Logo";
import { useLocale } from "@/lib/locale-context";
import type { Lang } from "@/data/locales";

export function Header() {
  const { lang, setLang, t } = useLocale();

  const navItems = [
    { href: "#process", label: t.nav.process },
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#contact", label: t.nav.contact },
  ];

  const langs: Lang[] = ["ca", "es", "en"];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-[18px] px-[28px] py-[14px] border-b border-border backdrop-blur-[14px]"
      style={{ background: "color-mix(in srgb, var(--bg) 78%, transparent)" }}
    >
      <a href="#top" className="flex items-center gap-[11px] no-underline text-fg">
        <Logo />
        <span className="font-sans font-semibold text-[19px] tracking-[-0.01em] text-fg">
          local ia
        </span>
      </a>
      <nav className="flex gap-[26px] items-center">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-mono text-[12px] tracking-[0.06em] uppercase text-muted no-underline transition-colors duration-200 hover:text-fg"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-[14px]">
        <div className="flex gap-[2px] p-[3px] border border-border rounded-[4px]">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`font-mono text-[11px] tracking-[0.08em] uppercase px-[11px] py-[7px] rounded-[4px] cursor-pointer transition-all duration-200 whitespace-nowrap ${
                lang === l ? "bg-fg text-bg" : "bg-transparent text-muted hover:text-fg"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
