import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { isoLabel } from "@/data/site";

const assurances = [isoLabel, "10,000 sq ft in-house unit", "3D CAD to manufacture"];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-blueprint text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-navy-900/70 to-transparent lg:block" />
      <div className="container-page relative grid items-center gap-12 pb-24 pt-12 sm:pb-28 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-32 lg:pt-24">
        <div>
          <p className="eyebrow eyebrow-light animate-fade-up mb-5">Engineering without limits</p>
          <h1 id="hero-title" className="animate-fade-up [animation-delay:90ms] text-[2.4rem] !text-white sm:text-5xl lg:text-[3.6rem] lg:leading-[1.05]">
            Engineering Solutions That <span className="text-accent">Drive Industry Forward</span>
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-white/85 [animation-delay:180ms] sm:text-lg">
            From custom material handling and precision fabrication to assembly systems and robotic automation, we engineer solutions around your production needs.
          </p>
          <div className="animate-fade-up mt-9 flex flex-col gap-3 [animation-delay:270ms] sm:flex-row">
            <ButtonLink href="/engineering-solutions" variant="accent" size="lg">
              Explore Our Solutions
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline-light" size="lg">
              Discuss Your Project
            </ButtonLink>
          </div>
          <ul className="animate-fade-up mt-10 grid gap-3 border-t border-white/15 pt-6 text-sm font-semibold text-white/85 [animation-delay:360ms] sm:grid-cols-3">
            {assurances.map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-sm bg-accent" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up relative [animation-delay:150ms]">
          <figure className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/20 bg-navy-800 shadow-2xl">
            <Image
              src="/images/facility/tube-laser-cutter.webp"
              alt="Tube laser cutting machine on the Apar Dynamics shop floor"
              fill
              priority
              sizes="(min-width:1024px) 46vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-transparent to-transparent" />
            <figcaption className="absolute bottom-3 left-4 text-sm font-bold">Tube laser cutting · Dehu Road unit</figcaption>
          </figure>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {[
              { src: "/images/facility/robotic-welding.webp", alt: "Industrial robot arm welding a cylindrical component", label: "Robotic welding" },
              { src: "/images/facility/cnc-machining-centre.webp", alt: "Vertical CNC machining centre", label: "CNC machining" },
            ].map((tile) => (
              <figure key={tile.src} className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/20 bg-navy-800 shadow-xl">
                <Image src={tile.src} alt={tile.alt} fill sizes="(min-width:1024px) 23vw, 50vw" className="object-cover" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                <figcaption className="absolute bottom-2 left-3 text-xs font-bold sm:text-sm">{tile.label}</figcaption>
              </figure>
            ))}
          </div>
          <div aria-hidden="true" className="absolute -right-3 -top-3 -z-10 hidden size-24 border-r-4 border-t-4 border-accent sm:block" />
        </div>
      </div>
    </section>
  );
}
