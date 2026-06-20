export function HeroGraph() {
  return (
    <svg viewBox="0 0 360 360" width="100%" style={{ maxWidth: 380, overflow: "visible" }}>
      <g stroke="var(--border)" strokeWidth={1} fill="none">
        <line x1="80" y1="90" x2="200" y2="60" />
        <line x1="200" y1="60" x2="290" y2="140" />
        <line x1="80" y1="90" x2="130" y2="220" />
        <line x1="130" y1="220" x2="250" y2="270" />
        <line x1="290" y1="140" x2="250" y2="270" />
        <line x1="200" y1="60" x2="130" y2="220" />
        <line x1="80" y1="90" x2="290" y2="140" />
      </g>
      <path
        d="M80 90 L200 60 L290 140 L250 270 L130 220 Z"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.4"
        strokeDasharray="6 8"
        style={{ animation: "dash 6s linear infinite", opacity: 0.55 }}
      />
      <circle cx="80" cy="90" r="6" fill="var(--fg)" />
      <circle
        cx="200"
        cy="60"
        r="9"
        fill="var(--accent)"
        style={{ transformOrigin: "200px 60px", animation: "pulse 2.4s ease-in-out infinite" }}
      />
      <circle cx="290" cy="140" r="6" fill="var(--fg)" />
      <circle
        cx="130"
        cy="220"
        r="7"
        fill="var(--accent)"
        style={{ transformOrigin: "130px 220px", animation: "pulse 2.4s ease-in-out .8s infinite" }}
      />
      <circle cx="250" cy="270" r="6" fill="var(--fg)" />
    </svg>
  );
}
