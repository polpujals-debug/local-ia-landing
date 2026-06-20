"use client";

import { Logo } from "./icons/Logo";
import { useLocale } from "@/lib/locale-context";

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-border py-[40px]">
      <div className="max-w-[1180px] mx-auto px-[32px] flex justify-between items-center gap-[20px] flex-wrap">
        <span className="flex items-center gap-[9px] text-fg">
          <Logo size={22} />
          <span className="font-sans font-semibold text-[16px] text-fg">local ia</span>
        </span>
        <span className="font-mono text-[11px] tracking-[0.04em] text-muted">{t.footer.note}</span>
        <span className="font-mono text-[11px] text-muted">© 2026 LocalIA</span>
      </div>
    </footer>
  );
}
