import { NavLink, SocialLink, TBD } from "./types";

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Studio", href: "/our-studios" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export const legalNav: NavLink[] = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Booking & Cancellation Policy", href: "/booking-policy" },
  { label: "Privacy Policy", href: "/privacy" },
];

/** Update with real profile URLs once the client confirms their accounts. */
export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: TBD, icon: "instagram" },
  { label: "Facebook", href: TBD, icon: "facebook" },
  { label: "TikTok", href: TBD, icon: "tiktok" },
];

export const seo = {
  defaultTitle: "The Nail Studio | Nail & Hair Care in South Africa",
  titleTemplate: "%s | The Nail Studio",
  defaultDescription:
    "The Nail Studio offers elegant manicures, pedicures, acrylics, gel nails, nail art and, through our expanded studio, select hair services. Book your visit via WhatsApp.",
  /** Set once the site has a production domain. */
  siteUrl: TBD,
};
