import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "shadow-clay-sm inline-flex items-center rounded-full bg-brand-sage-light/25 px-3 py-1 text-xs font-medium text-brand-brown",
        className
      )}
    >
      {children}
    </span>
  );
}
