import Image from "next/image";
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
      <Container className="relative flex h-20 items-center justify-between">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src={business.logo.src}
            alt={business.logo.alt}
            width={559}
            height={640}
            priority
            className="h-14 w-auto shrink-0"
          />
          <span className="flex min-w-0 flex-col justify-center border-l border-border-subtle pl-3 leading-tight">
            <span className="whitespace-nowrap font-display text-lg font-semibold text-brand-brown">
              {business.name}
            </span>
            <span className="hidden whitespace-nowrap text-[11px] uppercase tracking-[0.2em] text-terracotta-ink sm:block">
              {business.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 min-[1100px]:flex">
          <nav className="flex items-center gap-6">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-brand-brown/80 transition-colors hover:text-brand-brown"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <WhatsAppButton internationalNumber={primaryWhatsApp} className="whitespace-nowrap px-5 py-2.5 text-xs">
            Book Now
          </WhatsAppButton>
        </div>

        <MobileMenu links={primaryNav} />
      </Container>
    </header>
  );
}
