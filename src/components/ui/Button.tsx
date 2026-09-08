import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";
/** "dark" swaps the soft-clay shadow for one tuned for dark backgrounds
 * (e.g. the brown CTA band) so the light highlight doesn't read as a glow. */
type ButtonTone = "light" | "dark";

/**
 * One consistent primary colour (sage) and one consistent secondary/outline
 * style, used for every CTA sitewide regardless of which page or section
 * it appears in.
 */
function variantStyles(tone: ButtonTone): Record<ButtonVariant, string> {
  const shadow = tone === "dark" ? "shadow-clay-sm-dark" : "shadow-clay-sm";
  return {
    primary: `btn-glossy ${shadow} bg-primary text-primary-foreground hover:bg-sage-cta-hover`,
    outline: `${shadow} border border-brand-brown/30 text-foreground hover:bg-brand-brown/5`,
    ghost: "text-foreground hover:bg-brand-brown/5",
  };
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50";

interface CommonProps {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsLink extends CommonProps {
  href: string;
  external?: boolean;
}

interface ButtonAsButton
  extends CommonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant = "primary",
  tone = "light",
  className,
  children,
  ...props
}: ButtonProps) {
  const styles = cn(baseStyles, variantStyles(tone)[variant], className);

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles} {...rest}>
        {children}
      </Link>
    );
  }

  const { ...rest } = props as ButtonAsButton;
  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  );
}
