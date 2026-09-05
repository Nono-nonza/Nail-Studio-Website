import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { business } from "@/data/business";
import { legalNav, primaryNav, socialLinks } from "@/data/site";
import { studios } from "@/data/studios";
import { TBD } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/ui/SocialIcons";

const socialIconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
  whatsapp: Phone,
};

export function SiteFooter() {
  const confirmedSocials = socialLinks.filter((s) => s.href && s.href !== TBD);

  return (
    <footer className="border-t border-border-subtle bg-brand-cream">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-brand-brown">{business.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {business.description}
          </p>
          {confirmedSocials.length > 0 ? (
            <div className="mt-5 flex gap-3">
              {confirmedSocials.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.icon}
                    href={social.href as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-brown transition-colors hover:bg-brand-sage-light hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-brand-brown/80 hover:text-brand-brown"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {studios.map((studio) => (
          <div key={studio.id}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
              {studio.shortName}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-brand-brown/80">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-sage" />
                <span>
                  {studio.address.line1 === TBD
                    ? "Address to be confirmed"
                    : `${studio.address.line1}, ${studio.address.city}`}
                </span>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-sage" />
                <span>
                  {studio.whatsapp.displayNumber === TBD
                    ? "WhatsApp number to be confirmed"
                    : studio.whatsapp.displayNumber}
                </span>
              </li>
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-border-subtle">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-brown">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
