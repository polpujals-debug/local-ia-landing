"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { locales, type Lang, type LocaleContent } from "@/data/locales";

type LocaleContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: LocaleContent;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ca");

  const value = useMemo<LocaleContextValue>(
    () => ({ lang, setLang, t: locales[lang] }),
    [lang]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
