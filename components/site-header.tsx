"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, person } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="wrap flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 pt-6 pb-4 sm:pt-8">
      <Link href="/" className="font-medium">
        {person.name}
      </Link>
      <nav aria-label="Main">
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`transition-colors hover:text-text ${active ? "text-text" : "text-quiet"}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
