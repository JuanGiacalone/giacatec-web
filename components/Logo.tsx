export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="var(--color-accent, #00D4AA)" />
        </linearGradient>
      </defs>
      <path
        d="M16 2L3 9.5V22.5L16 30L29 22.5V9.5L16 2Z"
        stroke="url(#logo-grad)"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16 2L16 30"
        stroke="url(#logo-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M3 9.5L29 22.5"
        stroke="url(#logo-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M29 9.5L3 22.5"
        stroke="url(#logo-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <circle cx="16" cy="16" r="3" fill="url(#logo-grad)" opacity="0.9" />
    </svg>
  );
}
