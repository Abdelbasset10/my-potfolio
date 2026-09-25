import { links, type Resume } from "@/content";
import type { Dictionary } from "@/i18n/dictionaries";
import { EmailActions } from "./EmailActions";
import { stagger } from "@/lib/motion";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon, PhoneIcon } from "./Icons";

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
        <div data-reveal className="card relative overflow-hidden px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 start-1/2 -translate-x-1/2 rtl:translate-x-1/2"
          >
            <div className="animate-drift size-96 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_22%,transparent),transparent)]" />
          </div>
          <p className="text-sm font-medium text-accent">{t.eyebrow}</p>
          <h2 id="contact-title" className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted text-pretty">{t.text}</p>
          <EmailActions email={links.email} labels={{ send: t.email, copy: t.copy, copied: t.copied }} />

          <ul className="mx-auto mt-12 grid max-w-3xl gap-3 text-start sm:grid-cols-2">
            {channels.map(({ label, value, href, Icon, external }, i) => (
              <li key={label} data-reveal style={stagger(i, 70, 150)}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 p-4 transition-[translate,scale,rotate,border-color,box-shadow] duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-muted">{label}</span>
                    <span dir="ltr" className="block truncate font-medium">
                      {value}
                    </span>
                  </span>
                  <span className="rtl:-scale-x-100">
                    <ArrowIcon className="size-4 text-muted opacity-0 transition-[opacity,translate,scale,rotate] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent group-hover:opacity-100" />
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
