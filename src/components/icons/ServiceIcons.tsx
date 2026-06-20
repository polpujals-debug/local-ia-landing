function IconBase({ children }: { children: React.ReactNode }) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className="mb-[22px] text-accent">
      {children}
    </svg>
  );
}

export function IconAutomation() {
  return (
    <IconBase>
      <circle cx="17" cy="17" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M17 4v4M17 26v4M4 17h4M26 17h4M7.8 7.8l2.8 2.8M23.4 23.4l2.8 2.8M26.2 7.8l-2.8 2.8M10.6 23.4l-2.8 2.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IconBase>
  );
}

export function IconChatbot() {
  return (
    <IconBase>
      <path
        d="M5 9a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H14l-6 5v-5H8a3 3 0 0 1-3-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="13" cy="14.5" r="1.6" fill="currentColor" />
      <circle cx="20" cy="14.5" r="1.6" fill="currentColor" />
    </IconBase>
  );
}

export function IconSaas() {
  return (
    <IconBase>
      <rect x="5" y="6" width="24" height="22" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M5 12h24" stroke="currentColor" strokeWidth="2" />
      <circle cx="8.5" cy="9" r="1.2" fill="currentColor" />
      <circle cx="12" cy="9" r="1.2" fill="currentColor" />
      <path
        d="M11 19l4 4-4 4M19 17l-3 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}
