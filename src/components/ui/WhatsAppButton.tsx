import { MessageCircle } from "lucide-react";
import { Button } from "./Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { TBD } from "@/data/types";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  internationalNumber: string | typeof TBD | undefined;
  message?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({
  internationalNumber,
  message,
  variant = "primary",
  className,
  children = "Book via WhatsApp",
}: WhatsAppButtonProps) {
  const href = buildWhatsAppLink(internationalNumber, message);

  if (!href) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full border border-dashed border-brand-brown/30 px-6 py-3 text-sm font-medium tracking-wide text-muted-foreground",
          className
        )}
        title="WhatsApp number to be confirmed"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        Number coming soon
      </span>
    );
  }

  return (
    <Button href={href} external variant={variant} className={className}>
      <MessageCircle className="h-4 w-4" aria-hidden />
      {children}
    </Button>
  );
}
