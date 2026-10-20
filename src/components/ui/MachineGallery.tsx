"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { machinesAvailable } from "@/data/site";
import { cn } from "@/lib/utils";

/** Expanding gallery: panels open one by one every 3 s, or on hover, focus or tap. */
export function MachineGallery({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % machinesAvailable.length), 3000);
    return () => clearTimeout(t);
  }, [active, paused]);

  return (
    <ul
      className={cn("flex h-[34rem] flex-col gap-2 sm:h-[36rem] lg:h-[26rem] lg:flex-row", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {machinesAvailable.map((m, i) => {
        const open = i === active;
        return (
          <li
            key={m.name}
            className={cn(
              "reveal min-h-0 min-w-0 overflow-hidden rounded-[--radius-card] border border-white/15 bg-white shadow-card transition-[flex-grow] duration-500 ease-out",
              open ? "grow-[6]" : "grow",
              "basis-0",
            )}
          >
            <button
              type="button"
              aria-expanded={open}
              aria-label={`${m.name}: ${m.detail}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => {
                setActive(i);
                setPaused(true);
              }}
              onBlur={() => setPaused(false)}
              onClick={() => setActive(i)}
              className="relative block size-full text-left"
            >
              <Image
                src={m.src}
                alt={m.alt}
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className={cn(
                  "transition-transform duration-700",
                  "object-contain p-3",
                  open ? "scale-100" : "scale-110",
                )}
              />
              <div
                aria-hidden="true"
                className={cn(
                  "absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent transition-opacity duration-500",
                  open ? "opacity-100" : "opacity-60",
                )}
              />
              <span aria-hidden="true" className="absolute left-3 top-3 rounded-sm bg-accent px-2 py-0.5 text-xs font-extrabold text-navy-900">
                0{i + 1}
              </span>
              <div className={cn("absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300", !open && "lg:opacity-0")}>
                <p className="truncate text-sm font-extrabold text-white sm:text-base">{m.name}</p>
                <p
                  className={cn(
                    "mt-1 text-xs leading-snug text-white/85 transition-all duration-500 sm:text-sm",
                    open ? "max-h-12 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  {m.detail}
                </p>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
