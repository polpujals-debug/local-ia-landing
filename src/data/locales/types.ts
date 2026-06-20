export type ChatMessage = { role: "user" | "bot"; text: string };

export type LocaleContent = {
  nav: { process: string; services: string; work: string; contact: string };
  hero: {
    label: string;
    title: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  process: {
    label: string;
    title: string;
    sub: string;
    steps: { title: string; desc: string }[];
  };
  services: {
    label: string;
    title: string;
    sub: string;
    a: { title: string; desc: string };
    b: { title: string; desc: string };
    c: { title: string; desc: string };
  };
  chat: {
    label: string;
    title: string;
    sub: string;
    agent: string;
    online: string;
    stat1: string;
    stat2: string;
    messages: ChatMessage[];
  };
  work: {
    label: string;
    title: string;
    sub: string;
    projects: { client: string; tag: string; title: string; result: string }[];
  };
  testimonials: {
    label: string;
    title: string;
    items: { quote: string; name: string; role: string; initial: string }[];
  };
  contact: {
    label: string;
    title: string;
    sub: string;
    or: string;
    fName: string;
    fEmail: string;
    fMsg: string;
    fBtn: string;
    fBtnSending: string;
    thanks: string;
    email: string;
    errorName: string;
    errorEmail: string;
    errorMessage: string;
    errorGeneric: string;
  };
  footer: { note: string };
};

export type Lang = "ca" | "es" | "en";
