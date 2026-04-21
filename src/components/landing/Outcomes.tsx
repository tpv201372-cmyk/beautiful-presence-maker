import { Check } from "lucide-react";

const outcomes = [
  "Безопасные заказы из Китая — без обмана и брака",
  "Экономия 30–60% на закупках за счёт прямых поставщиков",
  "Первые товары привозите вместе с куратором — без ошибок",
   "Реальные кейсы и стратегия выхода на стабильный доход",
  "Готовая система поиска и переговоров с фабриками",
  "Свои оптовые клиенты — выход на B2B-сегмент",
   "Понимание, как работает доставка из Китая, её полный цикл и схема",
  "Личный бренд байера и упаковка для соцсетей",
];

export function Outcomes() {
  return (
    <section className="bg-navy py-20 lg:py-28 text-cream relative overflow-hidden">
      <span aria-hidden className="hanzi-watermark absolute -right-10 -bottom-20 text-[20rem] hidden lg:block" style={{ color: "var(--gold)", opacity: 0.07 }}>
        成功
      </span>
      <div className="container mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="max-w-3xl mb-14 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Результат обучения
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Что вы получите <span className="italic text-gold">после курса</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
          {outcomes.map((o, i) => (
            <div
              key={o}
              className="reveal flex items-start gap-4 border-t border-cream/15 pt-5"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                <Check className="size-4" strokeWidth={3} />
              </div>
              <p className="text-base md:text-lg leading-relaxed text-cream/90">{o}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
