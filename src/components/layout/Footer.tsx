import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { legalNav, mainNav, quoteHref } from "@/data/navigation";
import { services } from "@/data/services";
import { company, fullAddress, socials, whatsappLink } from "@/data/site";
import { InstagramIcon, WhatsAppIcon, YouTubeIcon } from "@/components/ui/icons";

const linkClass = "rounded text-white/80 underline-offset-4 transition-colors hover:text-accent hover:underline";

export function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-navy-900 text-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1.3fr]">
        <div>
          <Link href="/" aria-label="Apar Dynamics — home" className="inline-block rounded-xl bg-white p-3">
            <Image src="/images/brand/logo-header.png" alt="Apar Dynamics logo" width={900} height={610} sizes="130px" className="h-16 w-auto" />
          </Link>
          <p className="mt-5 max-w-xs text-sm text-white/75">
            Material handling, assembly, robotic automation, testing and MS &amp; SS fabrication — engineered and manufactured in Pune.
          </p>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-accent">{company.tagline}</p>
        </div>

        <nav aria-label="Footer quick links">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider !text-accent">Quick links</h2>
          <ul className="space-y-2.5 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={quoteHref} className={linkClass}>
                Request a Quote
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Engineering services">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider !text-accent">Engineering services</h2>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/engineering-solutions/${s.slug}`} className={linkClass}>
                  {s.shortTitle}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/just-porta" className={`${linkClass} font-semibold !text-white`}>
                Just Porta — portable cabins →
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider !text-accent">Contact</h2>
          <address className="space-y-3 text-sm not-italic text-white/85">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{fullAddress}</span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`tel:${company.phoneTel}`} className={linkClass}>
                {company.phoneDisplay}
              </a>
            </p>
            <p className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className={`${linkClass} break-all`}>
                {company.email}
              </a>
            </p>
          </address>
          <div className="mt-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/60">Connect</p>
            <ul className="flex items-center gap-2">
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-[#0e7a3f]">
                  <WhatsAppIcon className="size-5" />
                </a>
              </li>
              <li>
                <a href={socials.justPortaYoutube} target="_blank" rel="noopener noreferrer" aria-label="Just Porta on YouTube" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-porta">
                  <YouTubeIcon className="size-5" />
                </a>
              </li>
              <li>
                <a href={socials.justPortaInstagram} target="_blank" rel="noopener noreferrer" aria-label="Just Porta on Instagram" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-porta">
                  <InstagramIcon className="size-5" />
                </a>
              </li>
            </ul>
            <p className="mt-2 text-xs text-white/55">YouTube and Instagram are Just Porta channels.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-5 pb-24 text-xs text-white/60 sm:flex-row sm:items-center md:pb-5">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved. Just Porta is a brand of {company.name}.</p>
          <ul className="flex gap-4">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
