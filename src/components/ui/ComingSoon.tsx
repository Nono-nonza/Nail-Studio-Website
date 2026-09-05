import { Container } from "./Container";

interface ComingSoonProps {
  title: string;
  description?: string;
}

/**
 * Minimal placeholder for pages not yet built out in this stage. Keeps
 * navigation fully functional without 404s while content is developed.
 */
export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <Container as="section" className="py-24 sm:py-32">
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-terracotta">
          The Nail Studio
        </p>
        <h1 className="text-3xl font-semibold text-brand-brown sm:text-4xl">{title}</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description ?? "This page is being finished and will be available soon."}
        </p>
      </div>
    </Container>
  );
}
