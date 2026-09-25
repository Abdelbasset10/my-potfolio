import type { Resume } from "@/content";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section } from "./Section";

type Props = { resume: Resume; dict: Dictionary };

export function Skills({ resume, dict }: Props) {
  return (
    <Section id="skills" eyebrow={dict.sections.skills.eyebrow} title={dict.sections.skills.title}>
      <div className="grid gap-4 sm:grid-cols-2">
        {resume.skillGroups.map((group) => (
          <div key={group.title} className="card sm:last:odd:col-span-2">
            <h3 className="font-semibold">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill} dir="ltr" className="chip">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
