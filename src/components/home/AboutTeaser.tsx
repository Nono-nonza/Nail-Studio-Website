import Image from "next/image";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function AboutTeaser() {
  return (
    <section className="bg-gradient-to-br from-brand-cream to-brand-sand/50 py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="shadow-clay photo-sheen relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/nails/16040525-4ec4-4ecd-b92e-1d0395aca238.JPG"
            alt="Glossy nude nails with a fine dark ombre tip, styled among candles and flowers at The Nail Studio"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="photo-warm object-cover"
          />
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-ink">
            About Us
          </p>
          <h2 className="font-display text-3xl font-semibold text-brand-brown sm:text-4xl">
            Owned and run by {business.owner}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {business.description} Every visit is designed to feel calm, considered and
            personal — from the first WhatsApp message to the finishing touches on your nails or
            hair.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="outline">
              Learn Our Story
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
