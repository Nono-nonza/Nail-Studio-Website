import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { business } from "@/data/business";
import { legalNav, primaryNav, socialLinks } from "@/data/site";
import { extensionLocation, mainLocation } from "@/data/locations";
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
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-ink">
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

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-ink">
            Visit Us
          </p>
          <ul className="mt-4 space-y-2 text-sm text-brand-brown/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-sage" />
              <span>
                {mainLocation.address.line1 === TBD
                  ? "Address to be confirmed"
                  : [mainLocation.address.line1, mainLocation.address.suburb, mainLocation.address.city]
                      .filter(Boolean)
                      .join(", ")}
              </span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-sage" />
              <span>
                {mainLocation.whatsapp.displayNumber === TBD
                  ? "Nail services WhatsApp to be confirmed"
                  : `Nail Services: ${mainLocation.whatsapp.displayNumber}`}
              </span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-sage" />
              <span>
                {extensionLocation.whatsapp.displayNumber === TBD
                  ? "Hair services WhatsApp to be confirmed"
                  : `Hair Services: ${extensionLocation.whatsapp.displayNumber}`}
              </span>
            </li>
            {mainLocation.openingHoursSummary && mainLocation.openingHoursSummary !== TBD ? (
              <li className="flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-sage" />
                <span>{mainLocation.openingHoursSummary}</span>
              </li>
            ) : null}
          </ul>
        </div>
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
