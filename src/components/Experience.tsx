import type { Resume } from "@/content";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section, SubHeading } from "./Section";
import { Timeline } from "./Timeline";

type Props = { resume: Resume; dict: Dictionary; locale: Locale };

export function Experience({ resume, dict, locale }: Props) {
  return (
    <Section id="experience" eyebrow={dict.sections.experience.eyebrow} title={dict.sections.experience.title}>
      <Timeline items={resume.experience} locale={locale} presentLabel={dict.common.present} />

      <div className="mt-16">
        <SubHeading>{dict.sections.community}</SubHeading>
        <Timeline items={resume.community} locale={locale} presentLabel={dict.common.present} />
      </div>
    </Section>
  );
}
