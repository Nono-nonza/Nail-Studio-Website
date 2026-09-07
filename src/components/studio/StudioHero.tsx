import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function StudioHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-cream to-brand-sand/60">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-32 h-80 w-80 rounded-full bg-brand-blush/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-24 h-72 w-72 rounded-full bg-brand-sage-light/40 blur-3xl"
      />

      <Container className="relative flex flex-col items-center gap-6 py-20 text-center sm:py-24">
        <Badge>Our Studio</Badge>
        <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.1] text-brand-brown sm:text-5xl">
          The Nail Studio
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          An established beauty destination built around elegant nail care — and, through our
          expanded studio, a growing range of hair services too.
        </p>
      </Container>
    </section>
  );
}
