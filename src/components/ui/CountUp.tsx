"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const NUMERIC = /^(\d[\d,]*)(\+?)$/;

/**
 * Counts a numeric stat up from zero when it scrolls into view.
 * Non-numeric values ("ISO", "3D CAD") and reduced-motion users get the final value untouched.
 * The server-rendered HTML always contains the real value.
 */
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const match = NUMERIC.exec(value);
  const target = match ? Number(match[1].replace(/,/g, "")) : 0;
  const suffix = match?.[2] ?? "";
  const grouped = match?.[1].includes(",") ?? false;
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  const format = (n: number) => (grouped ? n.toLocaleString("en-IN") : String(n)) + suffix;

  // Reset to 0 before first paint so the final number never flashes before counting.
  useLayoutEffect(() => {
    if (!match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional pre-paint reset
    setDisplay(format(0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(format(Math.round(target * eased)));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
