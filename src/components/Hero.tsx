import { links, type Resume } from "@/content";
import type { Dictionary } from "@/i18n/dictionaries";
import { stagger } from "@/lib/motion";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MapPinIcon } from "./Icons";

type Props = { resume: Resume; dict: Dictionary };

export function Hero({ resume, dict }: Props) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft accent glow behind the intro. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 start-1/2 -z-10 -translate-x-1/2 rtl:translate-x-1/2"
      >
        <div className="animate-drift size-[40rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_22%,transparent),transparent)]" />
      </div>
      <div className="container-page flex min-h-[min(calc(100svh-4rem),52rem)] flex-col justify-center py-20">
        <p className="animate-fade-up text-lg text-muted" style={stagger(0)}>
          {dict.hero.greeting}
        </p>
        <h1 className="animate-fade-up mt-1 text-4xl font-semibold tracking-tight text-balance sm:text-6xl" style={stagger(1)}>
          {resume.name}
        </h1>
        <p className="animate-fade-up mt-3 text-xl font-medium text-accent sm:text-2xl" style={stagger(2)}>
          {resume.title}
        </p>
        <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty" style={stagger(3)}>
          {resume.intro}
        </p>

        <p className="animate-fade-up mt-6 flex items-center gap-2 text-sm text-muted" style={stagger(4)}>
          <MapPinIcon className="size-4 shrink-0" />
          {resume.location}
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-3" style={stagger(5)}>
          <a href="#contact" className="btn-primary">
            {dict.hero.contact}
          </a>
          <a href={links.resume} download="Abdelbasset_Rezazi_Resume.pdf" className="btn-secondary group">
            <DownloadIcon className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
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
