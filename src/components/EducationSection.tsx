import type { Resume } from "@/content";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section, SubHeading } from "./Section";

type Props = { resume: Resume; dict: Dictionary };

export function EducationSection({ resume, dict }: Props) {
  return (
    <Section id="education" eyebrow={dict.sections.education.eyebrow} title={dict.sections.education.title}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <ul className="space-y-4">
          {resume.education.map((item) => (
            <li key={item.degree} className="card">
              <p className="text-sm text-muted">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{item.degree}</h3>
              <p className="mt-1 text-muted">{item.school}</p>
              {item.detail && <p className="mt-3 chip w-fit">{item.detail}</p>}
            </li>
          ))}
        </ul>

        <div className="space-y-10">
          <div>
            <SubHeading>{dict.sections.achievements}</SubHeading>
            <ul className="space-y-3">
              {resume.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubHeading>{dict.sections.languages}</SubHeading>
            <ul className="flex flex-wrap gap-2">
              {resume.languages.map((language) => (
                <li key={language} className="chip">
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
