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
      <div className="container-page grid items-center gap-8 py-14 sm:py-[4.5rem] lg:grid-cols-[1.2fr_1fr] lg:py-24">
        <div className="animate-fade-up">
          {crumbs && (
            <div className="mb-5">
              <Breadcrumbs items={crumbs} />
            </div>
          )}
          {eyebrow && <p className="eyebrow eyebrow-light mb-4">{eyebrow}</p>}
          <h1 className="text-[2rem] !text-white sm:text-4xl lg:text-[3.1rem] lg:leading-[1.08]">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg">{description}</p>}
          {actions && <div className="mt-7 flex flex-wrap gap-3">{actions}</div>}
        </div>
        {aside && <div className="animate-fade-up [animation-delay:120ms]">{aside}</div>}
      </div>
      <div aria-hidden="true" className="h-1 w-full bg-gradient-to-r from-accent via-accent to-transparent" />
    </header>
  );
}
