type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-border/60 py-20 sm:py-24">
      <div className="container-page">
        <div data-reveal>
          <p className="text-sm font-medium text-accent">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 data-reveal className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted">
      {children}
    </h3>
  );
}
