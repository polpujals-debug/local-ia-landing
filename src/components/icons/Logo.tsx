export function Logo({ size = 27 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className="block text-fg"
    >
      <circle cx="14" cy="14" r="2.9" fill="currentColor" />
      <path
        d="M8.3 19.7a8 8 0 0 1 0-11.4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M19.7 8.3a8 8 0 0 1 0 11.4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M4.7 23.3a13 13 0 0 1 0-18.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity=".4"
      />
      <path
        d="M23.3 4.7a13 13 0 0 1 0 18.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity=".4"
      />
    </svg>
  );
}
