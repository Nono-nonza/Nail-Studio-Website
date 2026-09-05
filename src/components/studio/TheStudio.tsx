import { mainLocation } from "@/data/locations";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function TheStudio() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <PlaceholderImage
          label="Studio photo coming soon"
          className="aspect-[4/5] w-full rounded-3xl"
        />

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-terracotta">
            The Studio
          </p>
          <h2 className="font-display text-3xl font-semibold text-brand-brown sm:text-4xl">
            An established home for elegant beauty care
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {mainLocation.description} It&apos;s where The Nail Studio&apos;s story began, and it
            remains the heart of the business today.
          </p>
        </div>
      </Container>
    </section>
  );
}
