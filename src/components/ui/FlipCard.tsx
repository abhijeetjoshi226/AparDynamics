"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import type { Service } from "@/data/services";
import { Media } from "./Media";

/**
 * Service card that flips to show details.
 *  - Mouse: flips on hover (listeners sit on the static wrapper so the rotation can't cause flicker).
 *  - Touch / keyboard: the front is a button that toggles the flip; Escape flips back.
 *  - The hidden face is `inert`, so its controls are never focusable or announced.
 *  - Reduced motion: faces cross-fade instead of rotating (see .flip rules in globals.css).
 */
export function FlipCard({ service, priority }: { service: Service; priority?: boolean }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (!flipped) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setFlipped(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [flipped]);

  const href = `/engineering-solutions/${service.slug}`;

  return (
    <div
      className="flip reveal h-[26rem] sm:h-[27rem]"
      data-flipped={flipped}
      onPointerEnter={(e) => e.pointerType === "mouse" && setFlipped(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setFlipped(false)}
    >
      <div className="flip-inner">
        {/* Front */}
        <div className="flip-face flip-front flex flex-col overflow-hidden rounded-[--radius-card] border border-line bg-white shadow-card" inert={flipped}>
          <Media image={service.image} aspect="aspect-[16/11]" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" priority={priority} />
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-lg leading-snug">{service.title}</h3>
            <p className="mt-2 text-sm text-ink-muted">{service.summary}</p>
            <p className="mt-auto flex items-center gap-1.5 pt-3 text-xs font-bold uppercase tracking-wider text-blue">
              <RotateCcw className="size-3.5" aria-hidden="true" />
              <span className="hidden [@media(hover:hover)]:inline">Hover for details</span>
              <span className="[@media(hover:hover)]:hidden">Tap for details</span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setFlipped(true)}
            aria-expanded={flipped}
            aria-label={`Show details: ${service.title}`}
            className="absolute inset-0 rounded-[--radius-card]"
          />
        </div>

        {/* Back */}
        <div className="flip-face flip-back flex flex-col overflow-y-auto rounded-[--radius-card] border-t-4 border-t-accent bg-navy p-6 text-white shadow-card-hover" inert={!flipped}>
          <h3 className="text-lg !text-white">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/75">{service.summary}</p>
          <ul className="mt-4 space-y-2.5 border-t border-white/15 pt-4">
            {service.offerings.slice(0, 4).map((o) => (
              <li key={o} className="flex gap-2.5 text-sm leading-snug text-white/90">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {o}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
            <Link
              href={href}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-bold tracking-wide text-navy transition-colors hover:bg-accent-600"
            >
              Explore Solution <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              className="inline-flex items-center gap-1.5 rounded-md px-2 py-2 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white"
            >
              <RotateCcw className="size-3.5" aria-hidden="true" /> Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
