"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="flex items-start justify-between gap-4">
      <nav aria-label="Main" className="flex flex-wrap gap-x-5 gap-y-1 text-[0.9375rem] leading-5">
        {nav.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`transition-colors hover:text-strong ${
                active ? "text-strong underline underline-offset-[6px]" : "text-quiet"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <ThemeToggle />
    </header>
  );
}
