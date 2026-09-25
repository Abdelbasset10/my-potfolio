import type { Resume } from "@/content";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section } from "./Section";

type Props = { resume: Resume; dict: Dictionary };

export function About({ resume, dict }: Props) {
  return (
    <Section id="about" eyebrow={dict.sections.about.eyebrow} title={dict.sections.about.title}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted text-pretty">
          {resume.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className="card divide-y divide-border self-start">
          {resume.facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0">
              <dt className="text-xs font-medium uppercase tracking-wider text-muted">{fact.label}</dt>
              <dd className="font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
