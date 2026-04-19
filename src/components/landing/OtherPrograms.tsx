import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const programs = [
  {
    name: "Клуб «О закупках в Китае — просто»",
    price: "6 500 ₽ / мес",
    desc: "Закрытое сообщество с эфирами Гузель, разборами и базой поставщиков. Идеально для старта — попробовать тему без больших вложений.",
    tag: "Сообщество",
  },
  {
    name: "НЕО-закупки в Китае",
    price: "от 15 000 ₽",
    sub: "Тариф «С куратором» — 25 000 ₽",
    desc: "Короткий концентрат: как делать первые закупки на маркетплейсы. Для тех, кто хочет быстро попробовать модель.",
    tag: "Мини-курс",
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
              <p className="mt-4 text-foreground/75 leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-display text-3xl text-chocolate">{p.price}</div>
                {p.sub && <div className="text-sm text-muted-foreground mt-1">{p.sub}</div>}
              </div>
              <Button asChild variant="outline" size="lg" className="mt-6 rounded-none h-12 border-navy text-navy hover:bg-navy hover:text-cream">
                <a href="#cta">Узнать подробнее</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
