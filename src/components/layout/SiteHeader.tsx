import Link from "next/link";
import { business } from "@/data/business";
import { primaryNav } from "@/data/site";
import { mainLocation } from "@/data/locations";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  const primaryWhatsApp = mainLocation.whatsapp.internationalNumber;

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-surface/90 backdrop-blur">
      <Container className="relative flex h-[72px] items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display text-xl font-semibold text-brand-brown">
            {business.name}
          </span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-brand-terracotta">
            {business.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-brown/80 transition-colors hover:text-brand-brown"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton internationalNumber={primaryWhatsApp} className="px-5 py-2.5 text-xs">
            Book Now
          </WhatsAppButton>
        </div>

        <MobileMenu links={primaryNav} />
      </Container>
    </header>
  );
}
