import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function AboutTeaser() {
  return (
    <section className="bg-brand-cream py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <PlaceholderImage
          label="Studio photo coming soon"
          className="aspect-[4/5] w-full rounded-3xl"
        />

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
            <Button href="/about" variant="secondary">
              Learn Our Story
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
