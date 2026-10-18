import { BadgeCheck, Bot, Clock, Factory, PenTool, type LucideIcon } from "lucide-react";
import { stats } from "@/data/site";

const icons: LucideIcon[] = [Clock, Factory, BadgeCheck, PenTool, Bot];

/** Highlights are rendered from `stats` in data/site.ts — only verified figures are listed there. */
export function StatsBar() {
  return (
    <section aria-label="Company highlights" className="border-b border-white/10 bg-navy-900 text-white">
      <dl className="container-page grid grid-cols-2 gap-x-4 gap-y-6 py-7 md:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={stat.label} className="flex items-center gap-3">
              <Icon className="size-8 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-xl font-extrabold leading-none text-white sm:text-2xl">{stat.value}</dd>
                <dd className="mt-1 text-xs font-semibold leading-snug text-white/75 sm:text-sm">{stat.label}</dd>
              </div>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
