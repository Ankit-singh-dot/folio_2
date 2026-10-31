import type { Metadata } from "next";
import Image from "next/image";
import { websites } from "@/content/site";

export const metadata: Metadata = { title: "Websites" };

export default function WebsitesPage() {
  return (
    <>
      <h1 className="sr-only">Websites</h1>
      <ul className="space-y-12">
        {websites.map((site, index) => (
          <li key={site.name}>
            <a href={site.href} target="_blank" rel="noreferrer" className="group block">
              <Image
                src={site.image}
                alt={`The ${site.name} website`}
                width={2160}
                height={1350}
                preload={index === 0}
                sizes="(min-width: 672px) 624px, 100vw"
                className="h-auto w-full rounded-md bg-tile outline outline-1 -outline-offset-1 outline-black/10"
              />
              <span className="mt-3 block text-strong underline decoration-transparent decoration-1 underline-offset-[0.2em] transition-colors group-hover:decoration-current">
                {site.name}
              </span>
              <span className="block text-quiet">{site.what}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
