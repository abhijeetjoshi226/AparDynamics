import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-white/75">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className="rounded underline-offset-4 hover:text-white hover:underline">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-white">
                {item.name}
              </span>
            )}
            {i < items.length - 1 && <ChevronRight className="size-3.5 opacity-70" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
