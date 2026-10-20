"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";

type Slide = {
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
  poster: string;
  alt: string;
  cta: { href: string; label: string };
  tabLabel: string;
};

const slides: Slide[] = [
  {
    tabLabel: "Pipe Laser Cutting",
    eyebrow: "Precision fabrication",
    title: "Pipe Laser Cutting Machine",
    accent: "Clean, accurate cuts on tube & pipe",
    text: "High-precision laser cutting for pipes, tubes and profiles — tight tolerances, minimal rework and fast turnaround for fabrication and assembly lines.",
    poster: "/images/products/laser-cutting-machine.webp",
    alt: "Pipe laser cutting machine",
    cta: { href: "/engineering-solutions", label: "Explore Our Solutions" },
  },
  {
    tabLabel: "Just Porta",
    eyebrow: "Just Porta by Apar Dynamics",
    title: "Portable Cabins,",
    accent: "Built Ready To Deploy",
    text: "Site offices, security cabins, shop cabins and modular cottages — durable, quick to install and fully customisable from our in-house unit.",
    poster: "/images/just-porta/container-to-cabin.webp",
    alt: "Just Porta portable cabin",
    cta: { href: "/just-porta", label: "Explore Just Porta" },
  },
  {
    tabLabel: "SS Fabrication & Handling",
    eyebrow: "Specialised in SS fabrication",
    title: "Stainless Steel Fabrication &",
    accent: "Material Handling",
    text: "Custom SS fabrication, trolleys and material handling equipment engineered around your production floor and hygiene needs.",
    poster: "/images/solutions/ss-overview.webp",
    alt: "Stainless steel fabricated equipment",
    cta: { href: "/engineering-solutions", label: "See SS Solutions" },
  },
];

const INTERVAL_MS = 3000;

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((i: number) => setActive((i + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(active + 1), INTERVAL_MS);
    return () => clearTimeout(t);
  }, [active, paused, go]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured capabilities"
      className="relative overflow-hidden bg-blueprint text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[40rem] sm:min-h-[42rem] lg:min-h-[34rem]">
        {slides.map((s, i) => (
          <div
            key={s.tabLabel}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            aria-hidden={i !== active}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "z-10 opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <div className="container-page relative grid min-h-[40rem] items-center gap-8 pb-28 pt-10 lg:min-h-[34rem] lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
              <div>
                <p className="eyebrow eyebrow-light mb-5">{s.eyebrow}</p>
                {i === 0 ? (
                  <h1 className="text-[2rem] !text-white sm:text-5xl lg:text-[3.2rem] lg:leading-[1.05]">
                    {s.title} <span className="text-accent">{s.accent}</span>
                  </h1>
                ) : (
                  <h2 className="text-[2rem] !text-white sm:text-5xl lg:text-[3.2rem] lg:leading-[1.05]">
                    {s.title} <span className="text-accent">{s.accent}</span>
                  </h2>
                )}
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{s.text}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={s.cta.href} variant="accent" size="lg">
                    {s.cta.label}
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="outline-light" size="lg">
                    Discuss Your Project
                  </ButtonLink>
                </div>
              </div>
              <div className="relative order-first aspect-video overflow-hidden rounded-lg border border-white/20 bg-white shadow-2xl lg:order-none">
                <Image
                  src={s.poster}
                  alt={s.alt}
                  fill
                  priority={i === 0}
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
