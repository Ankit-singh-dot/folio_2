import type { Metadata } from "next";
import { Assumptions } from "@/components/assumptions";
import { learning, links, reels } from "@/content/site";

export const metadata: Metadata = { title: "Learning" };

export default function LearningPage() {
  return (
    <div className="space-y-14">
      <h1 className="sr-only">Learning</h1>

      <section>
        <h2 className="label">Things people assume</h2>
        <p className="mb-4">
          Most of my reels start with something everyone believes, until you open the system and
          look. Here are a few I&apos;ve crossed off.
        </p>
        <Assumptions reels={reels} />
        <p className="mt-6">
          <a href={links.instagram} target="_blank" rel="noreferrer" className="link">
            More on Instagram
          </a>
        </p>
      </section>

      <section>
        <h2 className="label">Things I built to learn</h2>
        <ul className="space-y-6">
          {learning.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank" rel="noreferrer" className="link text-strong">
                {item.name}
              </a>
              <p className="mt-1 text-quiet">{item.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
