/**
 * Lucide-react intentionally ships no brand/logo icons, so these small
 * inline SVGs cover the social platforms we link to from the footer.
 */
type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.4c0-.87.24-1.46 1.5-1.46H16.6V4.3A20.6 20.6 0 0 0 14.3 4.2c-2.28 0-3.84 1.39-3.84 3.94v2.26H8v3h2.46V21h3.04Z" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.6 5.82c-.9-.88-1.4-2.09-1.4-3.32h-3.1v13.4a2.6 2.6 0 1 1-1.85-2.49v-3.17a5.7 5.7 0 1 0 4.95 5.66V9.4a6.75 6.75 0 0 0 3.9 1.24V7.53a3.9 3.9 0 0 1-2.5-1.71Z" />
    </svg>
  );
}
