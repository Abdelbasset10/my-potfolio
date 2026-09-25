type Props = { name: string; builtWith: string };

export function Footer({ name, builtWith }: Props) {
  return (
    <footer className="border-t border-border/60 py-8 text-sm text-muted">
      <div className="container-page flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {name}
        </p>
        <p>{builtWith}</p>
      </div>
    </footer>
  );
}
