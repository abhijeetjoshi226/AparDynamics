import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  id?: string;
  tone?: "white" | "surface" | "navy" | "porta";
  className?: string;
  labelledBy?: string;
};

const tones = {
  white: "bg-white",
  surface: "bg-surface",
  navy: "bg-blueprint text-white",
  porta: "bg-porta-50",
};

export function Section({ children, id, tone = "white", className, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("py-16 sm:py-20 lg:py-24", tones[tone], className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

type HeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, description, align = "left", tone = "light", as: Tag = "h2", action, className }: HeadingProps) {
  const center = align === "center";
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "reveal mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between",
        center && "items-center text-center sm:flex-col sm:items-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", center && "mx-auto")}>
        {eyebrow && <p className={cn("eyebrow mb-3", dark && "eyebrow-light")}>{eyebrow}</p>}
        <Tag id={id} className={cn("text-[1.75rem] sm:text-4xl lg:text-[2.5rem]", dark && "!text-white")}>
          {title}
        </Tag>
        {description && <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", dark ? "text-white/80" : "text-ink-muted")}>{description}</p>}
      </div>
      {action}
    </div>
  );
}
