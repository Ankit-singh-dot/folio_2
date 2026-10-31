import type { Metadata } from "next";
import Image from "next/image";
import { experience } from "@/content/site";

export const metadata: Metadata = { title: "Work" };

function Monogram({ letter }: { letter: string }) {
  return (
    <span
      aria-hidden
      className="flex size-7 shrink-0 items-center justify-center rounded-md bg-tile text-[0.8125rem] text-strong"
    >
      {letter}
    </span>
  );
}

export default function WorkPage() {
  return (
    <div className="space-y-14">
      <h1 className="sr-only">Work</h1>

      <ul className="space-y-9">
        {experience.map((job) => (
          <li key={job.company} className="flex gap-4">
            {"logo" in job && job.logo ? (
              <Image
                src={job.logo}
                alt=""
                width={56}
                height={56}
                className="mt-0.5 size-7 shrink-0 rounded-md bg-tile object-contain"
              />
            ) : (
              <Monogram letter={job.company[0]} />
            )}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h2 className="text-strong">
                  {job.role} ·{" "}
                  {"href" in job && job.href ? (
                    <a href={job.href} target="_blank" rel="noreferrer" className="link">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </h2>
                <span className="date">{job.dates}</span>
              </div>
              <p className="mt-1.5 text-quiet">{job.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
