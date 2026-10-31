"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function SmoothScroll() {
  const lenis = useRef<Lenis | null>(null);
  const cameFromHistory = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    const markHistory = () => {
      cameFromHistory.current = true;
    };
    window.addEventListener("popstate", markHistory);

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      lenis.current = new Lenis({ autoRaf: true, lerp: 0.09 });
    }

    return () => {
      window.removeEventListener("popstate", markHistory);
      lenis.current?.destroy();
      lenis.current = null;
    };
  }, []);

  // Lenis keeps its own scroll position, so it has to be reset on navigation.
  useEffect(() => {
    if (cameFromHistory.current) {
      cameFromHistory.current = false;
      return;
    }
    lenis.current?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return null;
}
