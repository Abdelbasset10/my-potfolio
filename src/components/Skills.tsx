import type { Resume } from "@/content";
import type { Dictionary } from "@/i18n/dictionaries";
import { stagger } from "@/lib/motion";
import { Section } from "./Section";

type Props = { resume: Resume; dict: Dictionary };

export function Skills({ resume, dict }: Props) {
  return (
    <Section id="skills" eyebrow={dict.sections.skills.eyebrow} title={dict.sections.skills.title}>
      <div className="grid gap-4 sm:grid-cols-2">
        {resume.skillGroups.map((group, i) => (
          <div key={group.title} data-reveal style={stagger(i, 80)} className="card card-hover sm:last:odd:col-span-2">
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
