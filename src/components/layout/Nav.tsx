"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import type { NavItem } from "@/data/navigation";
import { company, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Primary" className="hidden xl:block">
      <ul className="flex items-center gap-1">
        {items.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:text-blue",
                  active ? "text-blue after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-accent" : "text-navy",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function MobileNav({ items, quoteHref }: { items: NavItem[]; quoteHref: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset menu state when navigation completes
    setOpen(false);
  }, [pathname]);

  // Lock scroll, close on Escape, move focus into the panel
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="grid size-11 place-items-center rounded-lg border border-line text-navy hover:bg-surface"
      >
        {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
      </button>

      {open && (
        <>
          {/* Sits behind the header bar (negative z inside the header's stacking context) */}
          <button type="button" aria-label="Close menu" className="fixed inset-0 -z-10 bg-navy-900/60" onClick={() => setOpen(false)} tabIndex={-1} />
          <div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-line bg-white px-4 pb-6 pt-3 shadow-xl"
          >
            <ul className="divide-y divide-line">
              {items.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn("flex items-center justify-between py-3.5 text-lg font-bold", active ? "text-blue" : "text-navy")}
                    >
                      {item.label}
                      {active && <span className="size-2 rounded-full bg-accent" aria-hidden="true" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 grid gap-3">
              <Link href={quoteHref} className="rounded-lg bg-accent px-5 py-3.5 text-center text-base font-bold text-navy">
                Request a Quote
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <a href={`tel:${company.phoneTel}`} className="flex items-center justify-center gap-2 rounded-lg border-2 border-navy px-4 py-3 text-sm font-bold text-navy">
                  <Phone className="size-4" aria-hidden="true" /> Call
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#128c4a] px-4 py-3 text-sm font-bold text-white"
                >
                  <WhatsAppIcon className="size-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
