import Link from "next/link";
import { ArrowRight, BadgeCheck, Factory, Handshake, Ruler, Settings, Users, type LucideIcon } from "lucide-react";
import type { Service } from "@/data/services";
import type { PortaProduct } from "@/data/just-porta";
import type { Industry } from "@/data/industries";
import { Media } from "./Media";
import { cn } from "@/lib/utils";

const cardBase =
  "group relative flex h-full flex-col overflow-hidden rounded-[--radius-card] border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover focus-within:shadow-card-hover";

export function ServiceCard({ service, priority }: { service: Service; priority?: boolean }) {
  return (
    <article className={cardBase}>
      <div className="overflow-hidden">
        <Media
          image={service.image}
          aspect="aspect-[16/11]"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          priority={priority}
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm text-ink-muted">{service.summary}</p>
        <Link
          href={`/engineering-solutions/${service.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-blue after:absolute after:inset-0 after:content-[''] group-hover:text-navy"
        >
          Explore Solution
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function ProductCard({ product }: { product: PortaProduct }) {
  return (
    <article className={cn(cardBase, "hover:border-porta/40")}>
      <div className="overflow-hidden">
        <Media
          image={product.image}
          aspect="aspect-[16/11]"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg">{product.title}</h3>
        <p className="mt-2 flex-1 text-sm text-ink-muted">{product.summary}</p>
        <Link
          href={`/just-porta/${product.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-porta after:absolute after:inset-0 after:content-['']"
        >
          View details
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <article className={cardBase}>
      <Media image={industry.image} aspect="aspect-[3/2]" sizes="(min-width:1024px) 20vw, (min-width:640px) 33vw, 50vw" imgClassName="transition-transform duration-500 group-hover:scale-105" />
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base">{industry.name}</h3>
        <p className="mt-1.5 text-sm text-ink-muted">{industry.description}</p>
      </div>
    </article>
  );
}

const featureIcons: Record<string, LucideIcon> = {
  ruler: Ruler,
  factory: Factory,
  users: Users,
  badge: BadgeCheck,
  settings: Settings,
  handshake: Handshake,
};

export function FeatureCard({ title, text, icon }: { title: string; text: string; icon: string }) {
  const Icon = featureIcons[icon] ?? Settings;
  return (
    <div className="h-full rounded-[--radius-card] border border-line bg-white p-6 shadow-card">
      <span className="grid size-12 place-items-center rounded-xl bg-blue-50 text-blue">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg">{title}</h3>
      <p className="mt-2 text-sm text-ink-muted">{text}</p>
    </div>
  );
}
