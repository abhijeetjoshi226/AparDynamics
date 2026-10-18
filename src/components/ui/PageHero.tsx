import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  actions?: ReactNode;
  aside?: ReactNode;
  tone?: "navy" | "porta";
};

/** Shared hero used at the top of every inner page. */
export function PageHero({ eyebrow, title, description, crumbs, actions, aside, tone = "navy" }: PageHeroProps) {
  return (
    <header className={cn("relative overflow-hidden text-white", tone === "navy" ? "bg-blueprint" : "bg-gradient-to-br from-navy via-navy to-[#7a2a09]")}>
      <div className="container-page grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-[1.2fr_1fr] lg:py-20">
        <div className="animate-fade-up">
          {crumbs && (
            <div className="mb-5">
              <Breadcrumbs items={crumbs} />
            </div>
          )}
          {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>}
          <h1 className="text-balance text-3xl !text-white sm:text-4xl lg:text-5xl">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg">{description}</p>}
          {actions && <div className="mt-7 flex flex-wrap gap-3">{actions}</div>}
        </div>
        {aside && <div className="animate-fade-up [animation-delay:120ms]">{aside}</div>}
      </div>
      <div aria-hidden="true" className="h-1 w-full bg-gradient-to-r from-accent via-accent to-transparent" />
    </header>
  );
}
