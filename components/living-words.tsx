"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Words that do what they say. Each one renders as plain, readable text on the
 * server, plays once when it scrolls into view, and replays on hover.
 */
function usePlayInView<T extends HTMLElement>(play: () => void) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
          observer.disconnect();
        }
      },
      { threshold: 1, rootMargin: "0px 0px -15% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [play]);

  return ref;
}

const canAnimate = () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* A four-letter window moves across the phrase, as it would across an array. */
const PHRASE = "sliding window";
const WINDOW_SIZE = 4;
const STEP_MS = 95;

export function SlidingWindowWord() {
  const [start, setStart] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const play = useCallback(() => {
    if (timer.current || !canAnimate()) return;
    let position = 0;
    setStart(0);
    timer.current = setInterval(() => {
      position += 1;
      if (position > PHRASE.length - WINDOW_SIZE) {
        if (timer.current) clearInterval(timer.current);
        timer.current = null;
        setStart(null);
      } else {
        setStart(position);
      }
    }, STEP_MS);
  }, []);

  useEffect(
    () => () => {
      if (timer.current) clearInterval(timer.current);
    },
    [],
  );

  const ref = usePlayInView<HTMLSpanElement>(play);

  return (
    <span ref={ref} onMouseEnter={play} aria-label={PHRASE} role="text" className="text-strong">
      {[...PHRASE].map((letter, index) => {
        const inWindow = start !== null && index >= start && index < start + WINDOW_SIZE;
        return (
          <span aria-hidden key={index} className={inWindow ? "bg-strong text-bg" : undefined}>
            {letter}
          </span>
        );
      })}
    </span>
  );
}

/* The word gets encrypted, then restored from left to right, like AEGIS does. */
const WORD = "encrypted";
const NOISE = "x#%&$@0ζ§¥Øæ";
const SCRAMBLE_MS = 1000;

export function EncryptedWord() {
  const [text, setText] = useState(WORD);
  const frame = useRef(0);

  const play = useCallback(() => {
    if (frame.current || !canAnimate()) return;
    const began = performance.now();

    const tick = (now: number) => {
      const elapsed = now - began;
      if (elapsed >= SCRAMBLE_MS) {
        setText(WORD);
        frame.current = 0;
        return;
      }
      const restored = Math.max(0, (elapsed / SCRAMBLE_MS - 0.45) / 0.55) * WORD.length;
      setText(
        [...WORD]
          .map((letter, index) =>
            index < restored ? letter : NOISE[Math.floor(Math.random() * NOISE.length)],
          )
          .join(""),
      );
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const ref = usePlayInView<HTMLSpanElement>(play);

  return (
    <span
      ref={ref}
      onMouseEnter={play}
      aria-label={WORD}
      role="text"
      className="relative inline-block text-strong"
    >
      {/* Holds the real word's width so the sentence never shifts. */}
      <span aria-hidden className="invisible">
        {WORD}
      </span>
      <span aria-hidden className="absolute inset-0 overflow-hidden whitespace-nowrap">
        {text}
      </span>
    </span>
  );
}
