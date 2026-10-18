"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/utils";

type Filter = "all" | GalleryCategory;

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const items = filter === "all" ? galleryItems : galleryItems.filter((i) => i.category === filter);
  const current = openIndex !== null ? items[openIndex] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (openIndex !== null && !dialog.open) dialog.showModal();
    if (openIndex === null && dialog.open) dialog.close();
  }, [openIndex]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, items.length]);

  const close = () => {
    setOpenIndex(null);
    lastTrigger.current?.focus();
  };
  const step = (dir: 1 | -1) => setOpenIndex((i) => (i === null ? i : (i + dir + items.length) % items.length));

  return (
    <div>
      <div role="group" aria-label="Filter gallery by category" className="mb-8 flex flex-wrap gap-2">
        {galleryCategories.map((cat) => {
          const active = filter === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setFilter(cat.id);
                setOpenIndex(null);
              }}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-bold transition-colors",
                active ? "border-navy bg-navy text-white" : "border-line bg-white text-navy hover:border-navy",
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {items.length} images
      </p>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setOpenIndex(index);
              }}
              className="group block w-full overflow-hidden rounded-xl border border-line bg-white text-left shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
              aria-label={`View larger: ${item.title} (${item.kind})`}
            >
              <span className="relative block aspect-[4/3] bg-white">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                  className={item.fit === "contain" ? "object-contain p-3" : "object-cover transition-transform duration-500 group-hover:scale-105"}
                />
              </span>
              <span className="block border-t border-line px-3 py-2.5">
                <span className="block text-sm font-bold leading-snug text-navy">{item.title}</span>
                <span className="mt-1 inline-block rounded-full bg-blue-50 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-blue">{item.kind}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setOpenIndex(null)}
        onClick={(e) => e.target === dialogRef.current && close()}
        aria-label="Image viewer"
        className="m-auto w-[min(94vw,64rem)] max-w-none rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-navy-900/80"
      >
        {current && (
          <div className="relative">
            <div className="relative h-[min(68vh,40rem)] w-full bg-white">
              <Image src={current.src} alt={current.alt} fill sizes="94vw" className="object-contain p-4" />
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-line px-4 py-3">
              <div>
                <p className="font-bold text-navy">{current.title}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue">{current.kind}</p>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => step(-1)} aria-label="Previous image" className="grid size-10 place-items-center rounded-full border border-line text-navy hover:bg-surface">
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next image" className="grid size-10 place-items-center rounded-full border border-line text-navy hover:bg-surface">
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>
            <button type="button" onClick={close} aria-label="Close image viewer" className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-navy text-white hover:bg-blue">
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </dialog>
    </div>
  );
}
