"use client";

import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element -- pre-sliced lossless logo layers must stay byte-exact, so next/image optimisation is skipped */

/** Animation finishes (tagline revealed + brief hold) at roughly this point. */
const MIN_VISIBLE_MS = 3600;
/** Never keep the site hidden longer than this, even if `load` never fires. */
const MAX_VISIBLE_MS = 6000;
const FADE_OUT_MS = 600;

const layers = "/images/brand/loader";

/**
 * Full-screen brand loader. The artwork is sliced from the original logo.png (identical pixels, no redraw):
 * blue + yellow infinity sections, the wordmark and the tagline are separate transparent layers.
 * A CSS-only fallback (see `.splash` in globals.css) hides the overlay even if JavaScript fails.
 */
export function SplashLoader() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minMs = reduced ? 700 : MIN_VISIBLE_MS;
    const timers: number[] = [];
    let minElapsed = false;
    let loaded = document.readyState === "complete";
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      setLeaving(true);
      timers.push(window.setTimeout(() => setGone(true), FADE_OUT_MS));
    };
    const check = () => {
      if (minElapsed && loaded) finish();
    };
    const onLoad = () => {
      loaded = true;
      check();
    };

    timers.push(
      window.setTimeout(() => {
        minElapsed = true;
        check();
      }, minMs),
    );
    timers.push(window.setTimeout(finish, MAX_VISIBLE_MS));
    if (!loaded) window.addEventListener("load", onLoad);

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("load", onLoad);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`splash${leaving ? " splash-leaving" : ""}`} role="status" aria-live="polite" aria-label="Loading Apar Dynamics">
      <div className="splash-logo" aria-hidden="true">
        {/* faint "powered off" infinity symbol */}
        <img src={`${layers}/blue.webp`} alt="" className="splash-layer splash-ghost" width={900} height={658} decoding="async" />
        <img src={`${layers}/yellow.webp`} alt="" className="splash-layer splash-ghost" width={900} height={658} decoding="async" />
        {/* colours power on in sequence */}
        <img src={`${layers}/blue.webp`} alt="" className="splash-layer splash-blue" width={900} height={658} fetchPriority="high" decoding="async" />
        <img src={`${layers}/yellow.webp`} alt="" className="splash-layer splash-yellow" width={900} height={658} decoding="async" />
        <img src={`${layers}/wordmark.webp`} alt="" className="splash-layer splash-word" width={900} height={658} decoding="async" />
        <img src={`${layers}/tagline.webp`} alt="" className="splash-layer splash-tag" width={900} height={658} decoding="async" />
      </div>
    </div>
  );
}
