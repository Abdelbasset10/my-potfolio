import { links, type Resume } from "@/content";
import type { Dictionary } from "@/i18n/dictionaries";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MapPinIcon } from "./Icons";

type Props = { resume: Resume; dict: Dictionary };

export function Hero({ resume, dict }: Props) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft accent glow behind the intro. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 start-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl rtl:translate-x-1/2"
      />
      <div className="container-page flex min-h-[min(calc(100svh-4rem),52rem)] flex-col justify-center py-20">
        <p className="text-lg text-muted">{dict.hero.greeting}</p>
        <h1 className="mt-1 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{resume.name}</h1>
        <p className="mt-3 text-xl font-medium text-accent sm:text-2xl">{resume.title}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{resume.intro}</p>

        <p className="mt-6 flex items-center gap-2 text-sm text-muted">
          <MapPinIcon className="size-4 shrink-0" />
          {resume.location}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#contact" className="btn-primary">
            {dict.hero.contact}
          </a>
          <a href={links.resume} download="Abdelbasset_Rezazi_Resume.pdf" className="btn-secondary">
            <DownloadIcon className="size-4" />
            {dict.hero.resume}
          </a>
          <div className="flex items-center gap-2 sm:ms-2">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-button size-11">
              <GitHubIcon className="size-5" />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-button size-11">
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
