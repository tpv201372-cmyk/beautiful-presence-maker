import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check } from "lucide-react";

type Tariff = {
  name: string;
  price: string;
  altPrice: string;
  features: string[];
  paymentUrl?: string;
};

type Program = {
  name: string;
  desc: string;
  tag: string;
  price?: string;
  sub?: string;
  tariffs?: Tariff[];
  paymentUrl?: string;
};

const programs: Program[] = [
  {
    name: "Клуб «О закупках в Китае — просто»",
    price: "6 500 ₽ / мес",
    sub: "≈ 65 $",
    desc: "Базовые закупки из Китая «для себя» в розницу. Идеально для старта - попробовать тему без больших вложений.",
    tag: "Сообщество",
    paymentUrl: "https://china.bayersacademy.ru/club65",
  },
  {
    name: "НЕО-закупки в Китае",
    desc: "Короткий концентрат: как делать первые закупки на маркетплейсы. Для тех, кто хочет быстро попробовать модель.",
    tag: "Мини-курс",
    tariffs: [
      {
        name: "Всё сам",
        price: "15 000 ₽",
        altPrice: "≈ 150 $",
        features: [
          "Без обратной связи",
          "Доступ к обучающим материалам в течение 6 месяцев",
        ],
        paymentUrl: "https://china.bayersacademy.ru/neo15",
      },
      {
        name: "С поддержкой куратора",
        price: "25 000 ₽",
        altPrice: "≈ 250 $",
        features: [
          "Обратная связь в группе с куратором",
          "Доступ к обучающим материалам в течение 6 месяцев",
        ],
        paymentUrl: "https://china.bayersacademy.ru/neo25",
      },
    ],
  },
];

export function OtherPrograms() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-14 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-chocolate mb-4">
            Другие программы
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05]">
            Не готовы к флагману? <span className="italic text-chocolate">Начните с малого</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <div
              key={p.name}
              className="reveal bg-cream border border-border p-8 lg:p-10 flex flex-col group hover:border-navy transition-colors"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-6 mb-4">
                <span className="text-xs uppercase tracking-widest text-gold">{p.tag}</span>
                <ArrowUpRight className="text-navy/40 group-hover:text-navy group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-display text-3xl text-navy leading-tight">{p.name}</h3>
              <p className="mt-4 text-foreground/75 leading-relaxed text-sm">{p.desc}</p>

              {p.tariffs ? (
                <div className="mt-6 space-y-6">
                  {p.tariffs.map((t) => (
                    <div key={t.name} className="pt-6 border-t border-border">
                      <div className="text-[11px] uppercase tracking-[0.25em] text-chocolate mb-3">
                        Тариф · {t.name}
                      </div>
                      <div className="flex items-baseline gap-3">
                        <div className="font-display text-2xl text-navy">{t.price}</div>
                        <div className="text-xs text-muted-foreground">{t.altPrice}</div>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {t.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                            <Check className="size-4 mt-0.5 shrink-0 text-chocolate" strokeWidth={3} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        size="lg"
                        className="mt-5 w-full rounded-full h-12 bg-navy text-cream hover:bg-navy/90"
                      >
                        <a
                          href={t.paymentUrl ?? "#cta"}
                          target={t.paymentUrl ? "_blank" : undefined}
                          rel={t.paymentUrl ? "noopener noreferrer" : undefined}
                        >
                          Оплатить
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-chocolate mb-3">
                    Подписка
                  </div>
                  <div className="flex items-baseline gap-3">
                    <div className="font-display text-2xl text-navy">{p.price}</div>
                    {p.sub && <div className="text-xs text-muted-foreground">{p.sub}</div>}
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="mt-5 w-full rounded-full h-12 bg-navy text-cream hover:bg-navy/90"
                  >
                    <a
                      href={p.paymentUrl ?? "#cta"}
                      target={p.paymentUrl ? "_blank" : undefined}
                      rel={p.paymentUrl ? "noopener noreferrer" : undefined}
                    >
                      Оплатить
                    </a>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
