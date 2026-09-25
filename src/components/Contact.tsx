import { links, type Resume } from "@/content";
import type { Dictionary } from "@/i18n/dictionaries";
import { EmailActions } from "./EmailActions";
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon, PhoneIcon } from "./Icons";

type Props = { resume: Resume; dict: Dictionary };

export function Contact({ resume, dict }: Props) {
  const t = dict.sections.contact;
  const channels = [
    { label: dict.common.email, value: links.email, href: `mailto:${links.email}`, Icon: MailIcon },
    { label: dict.common.phone, value: links.phoneDisplay, href: `tel:${links.phone}`, Icon: PhoneIcon },
    { label: "LinkedIn", value: resume.shortName, href: links.linkedin, Icon: LinkedInIcon, external: true },
    { label: "GitHub", value: links.githubHandle, href: links.github, Icon: GitHubIcon, external: true },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-border/60 py-20 sm:py-24">
      <div className="container-page">
        <div className="card relative overflow-hidden px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 start-1/2 size-80 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl rtl:translate-x-1/2"
          />
          <p className="text-sm font-medium text-accent">{t.eyebrow}</p>
          <h2 id="contact-title" className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted text-pretty">{t.text}</p>
          <EmailActions email={links.email} labels={{ send: t.email, copy: t.copy, copied: t.copied }} />

          <ul className="mx-auto mt-12 grid max-w-3xl gap-3 text-start sm:grid-cols-2">
            {channels.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background/60 p-4 transition-colors hover:border-accent/50"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{label}</span>
                    <span dir="ltr" className="block truncate font-medium">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
            <MapPinIcon className="size-4" />
            {resume.location}
          </p>
        </div>
      </div>
    </section>
  );
}
