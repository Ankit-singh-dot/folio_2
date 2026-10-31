import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.name, description: project.short } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="space-y-8">
      <header>
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-strong">{project.name}</h1>
          <span className="date">{project.proof}</span>
        </div>
        <p className="mt-3">{project.intro}</p>
      </header>

      {project.images?.map((image, imageIndex) => (
        <figure key={image.src}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            preload={imageIndex === 0}
            sizes="(min-width: 672px) 624px, 100vw"
            className="h-auto w-full rounded-md bg-tile"
          />
          <figcaption className="date mt-2">{image.caption}</figcaption>
        </figure>
      ))}

      {project.sections.map((section) => (
        <section key={section.heading}>
          <h2 className="text-strong">{section.heading}</h2>
          <p className="mt-1.5">{section.body}</p>
        </section>
      ))}

      <section>
        <h2 className="text-strong">Built with</h2>
        <p className="mt-1.5">{project.stack}</p>
      </section>

      <ul className="flex flex-wrap gap-x-5">
        {project.links.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer" className="link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="pt-6 text-quiet">
        Next:{" "}
        <Link href={`/projects/${next.slug}`} className="link">
          {next.name}
        </Link>
      </p>
    </article>
  );
}
