import { formatMonth, type Role } from "@/content";
import type { Locale } from "@/i18n/config";

type Props = { items: Role[]; locale: Locale; presentLabel: string };

export function Timeline({ items, locale, presentLabel }: Props) {
  return (
    <ol className="relative space-y-10 border-s border-border ps-6 sm:ps-8">
      {items.map((item) => (
        <li key={`${item.organization}-${item.start}`} data-reveal className="group relative">
          <span aria-hidden="true" className="absolute -start-[1.9rem] top-1.5 size-3 sm:-start-[2.4rem]">
            {item.end === null && <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />}
            <span className="relative block size-3 rounded-full border-2 border-background bg-accent ring-4 ring-accent/15 transition-transform duration-300 group-hover:scale-125" />
          </span>
          <p className="text-sm text-muted">
            <time dateTime={item.start}>{formatMonth(item.start, locale)}</time>
            {" – "}
            {item.end ? <time dateTime={item.end}>{formatMonth(item.end, locale)}</time> : presentLabel}
          </p>
          <h4 className="mt-1 text-lg font-semibold transition-colors duration-200 group-hover:text-accent">{item.role}</h4>
          <p className="text-sm font-medium text-accent">
            {item.organization}
            {item.meta && <span className="text-muted"> · {item.meta}</span>}
          </p>
          {item.summary && <p className="mt-3 text-muted">{item.summary}</p>}
          <ul className="mt-3 list-disc space-y-2 ps-5 text-muted marker:text-border">
            {item.points.map((point) => (
              <li key={point} className="text-pretty">
                {point}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
