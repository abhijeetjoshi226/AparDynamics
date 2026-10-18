import { stats } from "@/data/site";

/** Highlights are rendered from `stats` in data/site.ts — only verified figures are listed there. */
export function StatsBar() {
  return (
    <section aria-label="Company highlights" className="relative z-10 -mt-14 sm:-mt-16">
      <div className="container-page">
        <dl className="grid grid-cols-2 overflow-hidden rounded-lg border border-line border-t-4 border-t-accent bg-white shadow-card-hover md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="border-b border-r border-line px-5 py-6 text-center last:border-r-0 sm:py-7 lg:border-b-0">
              <dd className="text-3xl font-extrabold leading-none tracking-tight text-navy sm:text-[2rem]">{stat.value}</dd>
              <dt className="mt-2 text-xs font-bold uppercase tracking-wider text-blue">{stat.label}</dt>
              <dd className="mt-1.5 hidden text-xs leading-snug text-ink-muted lg:block">{stat.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
