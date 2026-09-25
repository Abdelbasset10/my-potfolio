"use client";

import { useState } from "react";
import { MailIcon } from "./Icons";

type Props = {
  email: string;
  labels: { send: string; copy: string; copied: string };
};

// mailto: does nothing when the visitor has no default mail app (common on Windows),
// so the main action opens Gmail's web composer and copying is offered as a fallback.
export function EmailActions({ email, labels }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard API can be blocked (non-HTTPS, permissions); fall back to the legacy copy command.
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      field.remove();
      if (!ok) return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
        target="_blank"
        rel="noreferrer"
        className="btn-primary"
      >
        <MailIcon className="size-4" />
        {labels.send}
      </a>
      <button type="button" onClick={copy} className="btn-secondary" aria-live="polite">
        {copied ? (
          <svg className="size-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m5 12 5 5L20 7" />
          </svg>
        ) : (
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="12" height="12" rx="2" />
            <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
          </svg>
        )}
        {copied ? labels.copied : labels.copy}
      </button>
    </div>
  );
}
