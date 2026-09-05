import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function OwnerIntro() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <PlaceholderImage
          label="Photo of Zanele Nkosi coming soon"
          className="aspect-[4/5] w-full rounded-3xl"
        />

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-ink">
            Meet the Owner
          </p>
          <h2 className="font-display text-3xl font-semibold text-brand-brown sm:text-4xl">
            Owned and run by {business.owner}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {business.description}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every service is guided by the same idea: beauty care should feel calm, considered
            and personal — never rushed, never generic. Whether you&apos;re booking a quick buff
            and shine or a full new set, you&apos;re looked after by someone who genuinely cares
            about the result.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/services" variant="primary">
              View Services &amp; Prices
            </Button>
            <Button href="/booking" variant="outline">
              Request a Booking
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
