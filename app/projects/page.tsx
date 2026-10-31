import type { Metadata } from "next";
import { ThumbRow } from "@/components/thumb-row";
import { projects, sideProjects } from "@/content/site";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="space-y-14">
      <h1 className="sr-only">Projects</h1>

      <ul className="space-y-9">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <ThumbRow
              title={project.name}
              description={project.short}
              proof={project.proof}
              thumb={project.thumb}
              href={`/projects/${project.slug}`}
              preload={index === 0}
            />
          </li>
        ))}
      </ul>

      <section>
        <h2 className="label">Side projects</h2>
        <ul className="space-y-9">
          {sideProjects.map((project) => (
            <li key={project.name}>
              <ThumbRow
                title={project.name}
                description={project.short}
                thumb={project.thumb}
                href={project.href}
                external
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
