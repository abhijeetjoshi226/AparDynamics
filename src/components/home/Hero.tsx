import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";

const tiles = [
  { src: "/images/facility/tube-laser-cutter.webp", alt: "Tube laser cutting machine on the Apar Dynamics shop floor", label: "Tube laser cutting", span: "col-span-2 aspect-[2.3/1]", priority: true },
  { src: "/images/facility/robotic-welding.webp", alt: "Industrial robot arm welding a cylindrical component", label: "Robotic welding", span: "aspect-[4/3]" },
  { src: "/images/facility/cnc-machining-centre.webp", alt: "Vertical CNC machining centre", label: "CNC machining", span: "aspect-[4/3]" },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-blueprint text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-blue/40 blur-3xl" />
      <div className="container-page relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-24">
        <div className="animate-fade-up">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">Engineering without limits</p>
          <h1 id="hero-title" className="text-balance text-4xl !text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            Engineering Solutions That <span className="text-accent">Drive Industry Forward</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
            From custom material handling and precision fabrication to assembly systems and robotic automation, we engineer solutions around your production needs.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/engineering-solutions" variant="accent" size="lg">
              Explore Our Solutions
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline-light" size="lg">
              Discuss Your Project
            </ButtonLink>
          </div>
          <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-white/80">
            {["Material handling", "Assembly solutions", "Robotic automation", "Testing & inspection", "MS & SS fabrication"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up grid grid-cols-2 gap-3 [animation-delay:150ms]">
          {tiles.map((tile) => (
            <figure key={tile.src} className={`relative overflow-hidden rounded-2xl border border-white/15 bg-navy-800 shadow-2xl ${tile.span}`}>
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                priority={tile.priority}
                sizes={tile.priority ? "(min-width:1024px) 45vw, 100vw" : "(min-width:1024px) 22vw, 50vw"}
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
              <figcaption className="absolute bottom-2.5 left-3 text-xs font-bold text-white sm:text-sm">{tile.label}</figcaption>
            </figure>
          ))}
          <p className="col-span-2 text-xs text-white/60">Machinery at our Dehu Road manufacturing unit, Pune.</p>
        </div>
      </div>
    </section>
  );
}
