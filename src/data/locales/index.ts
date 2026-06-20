import { ca } from "./ca";
import { es } from "./es";
import { en } from "./en";
import type { Lang, LocaleContent } from "./types";

export const locales: Record<Lang, LocaleContent> = { ca, es, en };
export type { Lang, LocaleContent, ChatMessage } from "./types";
