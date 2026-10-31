import type { Metadata } from "next";
import { links, openSource } from "@/content/site";

export const metadata: Metadata = { title: "Open source" };

export default function OpenSourcePage() {
  return (
    <div className="space-y-12">
      <h1 className="sr-only">Open source</h1>

      <p>
        I like reading big codebases and trying to fix real issues in them, including at Y
        Combinator-backed Rowboat and Google Summer of Code organisations. Each one links to the
        actual pull request.
      </p>

      {openSource.map((group) => (
        <section key={group.status}>
          <h2 className="label">{group.status}</h2>
          <ul className="space-y-6">
            {group.items.map((item) => (
              <li key={item.href}>
                <div className="flex items-baseline justify-between gap-4">
                  <a href={item.href} target="_blank" rel="noreferrer" className="link text-strong">
                    {item.project}
                  </a>
                  {item.note && <span className="date">{item.note}</span>}
                </div>
                <p className="mt-1 text-quiet">{item.change}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <p className="text-quiet">
        Status as of 31 October 2026. Everything else is on my{" "}
        <a href={links.github} target="_blank" rel="noreferrer" className="link">
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
