import { links, type Resume } from "@/content";
import type { Dictionary } from "@/i18n/dictionaries";
import { stagger } from "@/lib/motion";
import { ArrowIcon } from "./Icons";
import { Section, SubHeading } from "./Section";

type Props = { resume: Resume; dict: Dictionary };

export function Projects({ resume, dict }: Props) {
  return (
    <Section id="projects" eyebrow={dict.sections.projects.eyebrow} title={dict.sections.projects.title}>
      <SubHeading>{dict.sections.featured}</SubHeading>
      <ul className="grid gap-4 sm:grid-cols-2">
        {resume.featuredProjects.map((project, i) => (
          <li
            key={project.title}
            data-reveal
            style={stagger(i, 80)}
            className="card card-hover group relative flex flex-col overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -end-16 -top-16 size-40 rounded-full bg-accent/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="font-medium text-accent">{project.context}</span>
              <span className="chip">{project.kind}</span>
            </div>
            <h4 className="mt-4 text-lg font-semibold transition-colors duration-200 group-hover:text-accent">{project.title}</h4>
            <p className="mt-2 text-muted text-pretty">{project.description}</p>
          </li>
        ))}
      </ul>

      <div className="mt-16">
        <SubHeading>{dict.sections.personal}</SubHeading>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resume.personalProjects.map((project, i) => (
            <li
              key={project.title}
              data-reveal
              style={stagger(i % 3, 70)}
              className="group rounded-xl border border-border p-5 transition-[translate,scale,rotate,border-color,background-color] duration-300 ease-out-soft hover:-translate-y-1 hover:border-accent/40 hover:bg-surface"
            >
              <span className="text-xs font-medium text-muted">{project.kind}</span>
              <h4 className="mt-2 font-semibold transition-colors duration-200 group-hover:text-accent">{project.title}</h4>
              <p className="mt-1.5 text-sm text-muted text-pretty">{project.description}</p>
            </li>
          ))}
        </ul>
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          data-reveal
          className="group mt-8 inline-flex items-center gap-1.5 font-medium text-accent"
        >
          <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px] rtl:bg-right-bottom">
            {dict.sections.moreOnGithub}
          </span>
          <span className="rtl:-scale-x-100">
            <ArrowIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>
      </div>
    </Section>
  );
}
