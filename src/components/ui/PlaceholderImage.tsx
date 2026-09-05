import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Soft brand-coloured placeholder used wherever a real client photo hasn't
 * been supplied yet. Swap the parent for a Next.js <Image> once photos land
 * in public/images — see public/images/README.md.
 */
export function PlaceholderImage({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-sand via-brand-blush/60 to-brand-sage-light/50 text-brand-brown/70",
        className
      )}
    >
      <Sparkles className="h-6 w-6" aria-hidden />
      {label ? <span className="text-xs font-medium tracking-wide">{label}</span> : null}
    </div>
  );
}
