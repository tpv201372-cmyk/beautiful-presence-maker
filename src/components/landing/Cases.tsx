import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import azamatBefore from "@/assets/cases/azamat-before.jpg";
import azamatAfter from "@/assets/cases/azamat-after.jpg";

type CaseItem = {
  name: string;
  from: string;
  to: string;
  tag: string;
  images?: { before: string; after: string };
};

const cases: CaseItem[] = [
  {
    name: "Ильвина",
    from: "В декрете, без опыта e-commerce",
    to: "Запустила магазин на Wildberries, первая поставка из Китая окупилась за 3 недели",
    tag: "WB · Маркетплейсы",
  },
  {
    name: "Азамат",
    from: "304 подписчика в нише спецтехники",
    to: "Вырос до 12 200 подписчиков и привозит технику напрямую с заводов Китая",
    tag: "Ниша · Спецтехника",
    images: { before: azamatBefore, after: azamatAfter },
  },
  {
    name: "Диана",
    from: "Маленький шоурум одежды в своём городе",
    to: "Перешла в опт — нашла своих B2B-клиентов и закрыла первую партию на 2 000 000 ₽",
    tag: "Опт · Шоурум",
  },
];

export function Cases() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 reveal">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-chocolate mb-4">
              Кейсы учеников
            </p>
            <h2 className="font-display md:text-5xl lg:text-6xl text-navy leading-[1.05] text-3xl">
              Из точки <span className="italic text-chocolate">А</span> в точку{" "}
              <span className="italic text-chocolate">Б</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              aria-label="Предыдущий кейс"
              className="size-12 border border-navy/30 text-navy hover:bg-navy hover:text-cream transition-colors flex items-center justify-center"
            >
              <ArrowRight className="size-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              aria-label="Следующий кейс"
              className="size-12 border border-navy bg-navy text-cream hover:bg-chocolate hover:border-chocolate transition-colors flex items-center justify-center"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: false }}
          className="reveal"
        >
          <CarouselContent className="-ml-6">
            {cases.map((c) => (
              <CarouselItem
                key={c.name}
                className="pl-6 basis-full md:basis-1/2 xl:basis-2/5"
              >
                <article className="group bg-cream border border-border p-6 md:p-8 flex flex-col h-full hover:border-navy transition-colors">
                  <div className="text-xs uppercase tracking-wider text-gold mb-4">
                    {c.tag}
                  </div>
                  <h3 className="font-display text-2xl text-navy mb-6">
                    {c.name}
                  </h3>

                  {c.images ? (
                    <div className="relative grid grid-cols-2 gap-4 items-start mb-4">
                      <figure className="flex flex-col">
                        <figcaption className="text-[10px] uppercase tracking-[0.25em] text-chocolate mb-1.5">
                          Было
                        </figcaption>
                        <div className="border border-navy/15 bg-cream overflow-hidden flex items-start justify-center">
                          <img
                            src={c.images.before}
                            alt={`${c.name} — было`}
                            className="w-full h-auto max-h-[420px] object-contain"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <figure className="flex flex-col">
                        <figcaption className="text-[10px] uppercase tracking-[0.25em] text-gold mb-1.5">
                          Стало
                        </figcaption>
                        <div className="border border-navy/15 bg-cream overflow-hidden flex items-start justify-center">
                          <img
                            src={c.images.after}
                            alt={`${c.name} — стало`}
                            className="w-full h-auto max-h-[420px] object-contain"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 bg-cream border border-gold/40 size-10 flex items-center justify-center pointer-events-none">
                        <ArrowRight className="text-gold size-4" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative mb-4 flex items-center justify-center min-h-[260px] border border-navy/10 bg-navy/[0.03] overflow-hidden">
                      <span className="font-display text-7xl text-gold/25 select-none">
                        成功
                      </span>
                    </div>
                  )}

                  <div className="space-y-3 flex-1">
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-chocolate/70 mb-1">
                        Было
                      </div>
                      <p className="text-sm text-foreground/75">{c.from}</p>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="text-gold size-4 group-hover:translate-x-1 transition-transform" />
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
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {count > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => api?.scrollTo(i)}
                aria-label={`Перейти к кейсу ${i + 1}`}
                className={`h-1.5 transition-all ${
                  i === current ? "w-8 bg-gold" : "w-4 bg-navy/20 hover:bg-navy/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}