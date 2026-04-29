import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type LegalDocumentProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function LegalDocument({
  eyebrow = "Документ",
  title,
  subtitle,
  children,
}: LegalDocumentProps) {
  return (
    <article className="bg-background py-16 lg:py-24">
      <div className="container mx-auto max-w-3xl px-6 lg:px-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-chocolate hover:text-navy transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          На главную
        </Link>

        <header className="mt-10 pb-10 border-b border-border">
          <p className="text-xs uppercase tracking-[0.3em] text-chocolate mb-5">
            {eyebrow}
          </p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          ) : null}
        </header>

        <div className="legal-content mt-10 text-navy/90">{children}</div>

        <footer className="mt-16 pt-8 border-t border-border text-xs text-muted-foreground">
          <p className="font-display italic text-base text-chocolate mb-3">
            ИП Маликова Гузель Рамилевна
          </p>
          <p>ИНН: 161103375653 · ОГРНИП: 322169000172622</p>
          <p>г. Казань, ул. Аметьевская магистраль, д. 16, корп. 1, кв. 75</p>
          <p className="mt-2">
            Электронная почта:{" "}
            <a
              href="mailto:guzel27guzel@gmail.com"
              className="text-navy hover:text-chocolate transition-colors"
            >
              guzel27guzel@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </article>
  );
}
