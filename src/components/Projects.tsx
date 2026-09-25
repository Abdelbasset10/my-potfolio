import { links, type Resume } from "@/content";
import type { Dictionary } from "@/i18n/dictionaries";
import { ArrowIcon } from "./Icons";
import { Section, SubHeading } from "./Section";

type Props = { resume: Resume; dict: Dictionary };

export function Projects({ resume, dict }: Props) {
  return (
    <Section id="projects" eyebrow={dict.sections.projects.eyebrow} title={dict.sections.projects.title}>
      <SubHeading>{dict.sections.featured}</SubHeading>
      <ul className="grid gap-4 sm:grid-cols-2">
        {resume.featuredProjects.map((project) => (
          <li key={project.title} className="card flex flex-col transition-colors hover:border-accent/50">
            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="font-medium text-accent">{project.context}</span>
              <span className="chip">{project.kind}</span>
            </div>
            <h4 className="mt-4 text-lg font-semibold">{project.title}</h4>
            <p className="mt-2 text-muted text-pretty">{project.description}</p>
          </li>
        ))}
      </ul>

      <div className="mt-16">
        <SubHeading>{dict.sections.personal}</SubHeading>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resume.personalProjects.map((project) => (
            <li key={project.title} className="rounded-xl border border-border p-5">
              <span className="text-xs font-medium text-muted">{project.kind}</span>
              <h4 className="mt-2 font-semibold">{project.title}</h4>
              <p className="mt-1.5 text-sm text-muted text-pretty">{project.description}</p>
            </li>
          ))}
        </ul>
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
        >
          {dict.sections.moreOnGithub}
          <ArrowIcon className="size-4 rtl:-scale-x-100" />
        </a>
      </div>
    </Section>
  );
}
