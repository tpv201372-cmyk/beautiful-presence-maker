import { ArrowRight } from "lucide-react";

const cases = [
  {
    name: "Ильвина",
    from: "В декрете, без опыта e-commerce",
    to: "Запустила магазин на Wildberries, первая поставка из Китая окупилась за 3 недели",
    tag: "WB · Маркетплейсы",
  },
  {
    name: "Азамат",
    from: "300 подписчиков в нише квадроциклов",
    to: "Вырос до 10 000 подписчиков и привозит технику напрямую с заводов Китая",
    tag: "Ниша · Спецтехника",
  },
  {
    name: "Диана",
    from: "Маленький шоурум одежды в своём городе",
    to: "Перешла в опт — нашла своих B2B-клиентов и закрыла первую партию на 2 000 000 ₽",
    tag: "Опт · Шоурум",
  },
];

export function Cases() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-14 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-chocolate mb-4">
            Кейсы учеников
          </p>
          <h2 className="font-display md:text-5xl lg:text-6xl text-navy leading-[1.05] text-3xl">
            Из точки <span className="italic text-chocolate">А</span> в точку{" "}
            <span className="italic text-chocolate">Б</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <article
              key={c.name}
              className="reveal group bg-cream border border-border p-8 flex flex-col h-full hover:border-navy transition-colors"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-xs uppercase tracking-wider text-gold mb-4">
                {c.tag}
              </div>
              <h3 className="font-display text-2xl text-navy mb-6">{c.name}</h3>

              <div className="space-y-4 flex-1">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-chocolate/70 mb-1">
                    Было
                  </div>
                  <p className="text-sm text-foreground/75">{c.from}</p>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="text-gold size-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-chocolate/70 mb-1">
                    Стало
                  </div>
                  <p className="text-sm text-navy font-medium leading-relaxed">
                    {c.to}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
