import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { mainNav, quoteHref } from "@/data/navigation";
import { company } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { DesktopNav, MobileNav } from "./Nav";

export function Header() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-bold focus:text-navy"
      >
        Skip to main content
      </a>
      <div className="hidden bg-navy-900 text-xs text-white/85 md:block">
        <div className="container-page flex h-9 items-center justify-between">
          <p>{company.tagline} · Dehu Road, Pune, Maharashtra</p>
          <a href={`tel:${company.phoneTel}`} className="flex items-center gap-1.5 hover:text-accent">
            <Phone className="size-3.5" aria-hidden="true" />
            {company.phoneDisplay}
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Apar Dynamics — home">
            <Image
              src="/images/brand/logo-header.png"
              alt="Apar Dynamics logo"
              width={900}
              height={610}
              priority
              sizes="100px"
              className="h-12 w-auto sm:h-14 lg:h-[3.75rem]"
            />
          </Link>
          <DesktopNav items={mainNav} />
          <div className="flex items-center gap-2">
            <ButtonLink href={quoteHref} variant="accent" className="hidden sm:inline-flex">
              Request a Quote
            </ButtonLink>
            <MobileNav items={mainNav} quoteHref={quoteHref} />
          </div>
        </div>
      </header>
    </>
  );
}
