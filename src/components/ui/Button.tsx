import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "outline-light" | "whatsapp" | "porta";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-colors duration-200 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-blue",
  accent: "bg-accent text-navy hover:bg-accent-600",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  "outline-light": "border-2 border-white/70 text-white hover:bg-white hover:text-navy",
  whatsapp: "bg-[#128c4a] text-white hover:bg-[#0e7a3f]",
  porta: "bg-porta text-white hover:bg-[#b83b09]",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

/** Internal navigation button (renders a next/link). */
export function ButtonLink({ variant, size, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </Link>
  );
}

type ExternalLinkProps = Omit<ComponentProps<"a">, "className"> & {
  variant?: Variant;
  size?: Size;
  className?: string;
};

/** External / tel: / mailto: / WhatsApp button (renders a plain anchor). */
export function ButtonAnchor({ variant, size, className, children, ...props }: ExternalLinkProps) {
  return (
    <a className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </a>
  );
}
