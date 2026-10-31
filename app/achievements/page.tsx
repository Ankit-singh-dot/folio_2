import type { Metadata } from "next";
import Link from "next/link";
import { hackathons, workResults } from "@/content/site";

export const metadata: Metadata = { title: "Achievements" };

export default function AchievementsPage() {
  return (
    <div className="space-y-14">
      <h1 className="sr-only">Achievements</h1>

      <section>
        <h2 className="label">Hackathons</h2>
        <p className="mb-6">Five wins so far.</p>
        <ul className="space-y-6">
          {hackathons.map((win) => (
            <li key={win.event}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-strong">
                  {win.result} · {win.event}
                </h3>
                <span className="date">{win.date}</span>
              </div>
              <p className="mt-1 text-quiet">{win.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="label">Used by real people</h2>
        <p>
          <Link href="/projects/codepush" className="link">
            CodePush
          </Link>{" "}
          has 66 users and a 5.0 rating from 3 reviews on the Chrome Web Store.
        </p>
      </section>

      <section>
        <h2 className="label">Results at work</h2>
        <ul className="space-y-6">
          {workResults.map((item) => (
            <li key={item.result}>
              <p className="text-strong">{item.result}</p>
              <p className="mt-1 text-quiet">{item.where}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
