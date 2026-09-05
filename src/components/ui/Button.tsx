import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-sage-cta-hover shadow-sm shadow-brand-brown/10",
  secondary:
    "bg-accent text-accent-foreground hover:opacity-90 shadow-sm shadow-brand-brown/10",
  outline:
    "border border-brand-brown/30 text-foreground hover:bg-brand-brown/5",
  ghost: "text-foreground hover:bg-brand-brown/5",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50";

interface CommonProps {
  variant?: ButtonVariant;
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

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const styles = cn(baseStyles, variantStyles[variant], className);

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
