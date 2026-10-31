"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Reel } from "@/content/site";

/**
 * Each reel corrects something people assume. As a row reaches the middle of
 * the screen its assumption gets crossed out and the phone beside it changes.
 *
 * Without JavaScript, or with reduced motion, everything is simply already
 * crossed out, so the page still reads correctly.
 */
export function Assumptions({ reels }: { reels: Reel[] }) {
  const [active, setActive] = useState(0);
  const [seen, setSeen] = useState<ReadonlySet<number>>(() => new Set());
  const root = useRef<HTMLDivElement>(null);
  const rows = useRef<(HTMLLIElement | null)[]>([]);

  const reach = (index: number) => {
    setActive(index);
    // Reaching a row means everything above it has been read too.
    setSeen((current) => {
      if (current.has(index)) return current;
      const next = new Set(current);
      for (let i = 0; i <= index; i++) next.add(i);
      return next;
    });
  };

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.current?.setAttribute("data-animated", "");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reach(rows.current.indexOf(entry.target as HTMLLIElement));
        }
      },
      { rootMargin: "-42% 0px -42% 0px" },
    );
    rows.current.forEach((row) => row && observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={root} className="sm:grid sm:grid-cols-[10.5rem_1fr] sm:gap-x-8">
      <div className="hidden sm:block">
        <a
          href={reels[active].href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Watch on Instagram: ${reels[active].answer}`}
          className="sticky top-8 block aspect-[9/16] overflow-hidden rounded-xl bg-black outline outline-1 -outline-offset-1 outline-black/10"
        >
          {reels.map((reel, index) => (
            <Image
              key={reel.href}
              src={reel.image}
              alt=""
              fill
              sizes="168px"
              className={`object-contain transition-opacity duration-300 ${
                active === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </a>
      </div>

      <ol>
        {reels.map((reel, index) => (
          <li
            key={reel.href}
            ref={(node) => {
              rows.current[index] = node;
            }}
            onMouseEnter={() => reach(index)}
          >
            <a
              href={reel.href}
              target="_blank"
              rel="noreferrer"
              onFocus={() => reach(index)}
              className="group flex items-start gap-4 py-5 sm:py-7"
            >
              <span className="relative aspect-[9/16] w-20 shrink-0 overflow-hidden rounded-md bg-black sm:hidden">
                <Image src={reel.image} alt="" fill sizes="80px" className="object-contain" />
              </span>
              <span className="min-w-0">
                <span className="block text-quiet">
                  <del className="assumption no-underline" data-seen={seen.has(index) || undefined}>
                    {reel.assumption}
                  </del>
                </span>
                <span
                  className={`mt-1 block underline decoration-transparent decoration-1 underline-offset-[0.2em] transition-colors duration-300 group-hover:decoration-current ${
                    active === index ? "text-strong" : "text-body"
                  }`}
                >
                  {reel.answer}
                </span>
                {reel.note && <span className="date mt-1 block">{reel.note}</span>}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
