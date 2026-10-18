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
    <section id={id} aria-labelledby={labelledBy} className={cn("py-14 sm:py-16 lg:py-20", tones[tone], className)}>
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
  return (
    <div className={cn("mb-9 flex flex-col gap-4 sm:mb-11 sm:flex-row sm:items-end sm:justify-between", center && "items-center text-center sm:flex-col sm:items-center", className)}>
      <div className={cn("max-w-2xl", center && "mx-auto")}>
        {eyebrow && (
          <p className={cn("mb-2 text-xs font-bold uppercase tracking-[0.16em]", tone === "dark" ? "text-accent" : "text-blue")}>{eyebrow}</p>
        )}
        <Tag
          id={id}
          className={cn("title-bar text-balance text-2xl sm:text-3xl lg:text-[2.15rem]", center && "title-bar-center", tone === "dark" && "!text-white")}
        >
          {title}
        </Tag>
        {description && <p className={cn("mt-4 text-base sm:text-lg", tone === "dark" ? "text-white/80" : "text-ink-muted")}>{description}</p>}
      </div>
      {action}
    </div>
  );
}
