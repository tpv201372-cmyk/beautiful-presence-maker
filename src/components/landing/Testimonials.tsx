import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import anna from "@/assets/testimonials/anna.jpg";
import alena from "@/assets/testimonials/alena.jpg";
import leysan from "@/assets/testimonials/leysan.jpg";
import adel from "@/assets/testimonials/adel.jpg";
import aliya from "@/assets/testimonials/aliya.jpg";
import elena from "@/assets/testimonials/elena.jpg";
import evdokia from "@/assets/testimonials/evdokia.jpg";
import chinaTruck from "@/assets/testimonials/china-truck.jpg";
import guzelCourse from "@/assets/testimonials/guzel-course.jpg";
import firstParcel from "@/assets/testimonials/first-parcel.jpg";
import kate from "@/assets/testimonials/kate.jpg";

const testimonials = [
  { src: anna, alt: "Отзыв ученицы Anna" },
  { src: alena, alt: "Отзыв ученицы Алёны" },
  { src: leysan, alt: "Отзыв ученицы leysan_balloons_nch" },
  { src: adel, alt: "Отзыв ученика Адель Байер" },
  { src: aliya, alt: "Отзыв ученицы Алия Байер" },
  { src: elena, alt: "Отзыв ученицы Елена Китай Байер" },
  { src: evdokia, alt: "Отзыв ученицы Евдокии" },
  { src: chinaTruck, alt: "Отзыв о первой посылке China Truck" },
  { src: guzelCourse, alt: "Отзыв о курсе: короткие уроки без воды" },
  { src: firstParcel, alt: "Отзыв: первая посылка с полным сопровождением" },
  { src: kate, alt: "Отзыв ученицы Kate о доставке 27,8 кг за 14 дней" },
];

export function Testimonials() {
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
    <section className="bg-cream py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-chocolate mb-4">
              Отзывы учеников
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-navy leading-[1.05]">
              Что говорят те, кто <span className="italic text-chocolate">уже внутри</span>
            </h2>
          </div>
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              aria-label="Предыдущий отзыв"
              className="size-12 border border-navy/30 text-navy hover:bg-navy hover:text-cream transition-colors flex items-center justify-center"
            >
              <ArrowRight className="size-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              aria-label="Следующий отзыв"
              className="size-12 border border-navy bg-navy text-cream hover:bg-chocolate hover:border-chocolate transition-colors flex items-center justify-center"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Mobile: horizontal carousel */}
        <div className="md:hidden">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: false }}
            className="reveal"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t) => (
                <CarouselItem key={t.alt} className="pl-4 basis-[85%]">
                  <figure className="bg-cream p-3 border border-border hover:border-navy hover:shadow-md transition-all relative h-full">
                    <div className="absolute top-2 left-3 text-gold font-display text-3xl leading-none pointer-events-none select-none z-10">
                      “
                    </div>
                    <img
                      src={t.src}
                      alt={t.alt}
                      loading="lazy"
                      className="w-full h-auto object-contain block"
                    />
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {count > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Перейти к отзыву ${i + 1}`}
                  className={`h-1.5 transition-all ${
                    i === current ? "w-8 bg-gold" : "w-4 bg-navy/20 hover:bg-navy/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Tablet & desktop: masonry */}
        <div className="hidden md:block columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
          {testimonials.map((t, i) => (
            <figure
              key={t.alt}
              className="reveal break-inside-avoid mb-5 bg-cream p-3 border border-border hover:border-navy hover:shadow-md transition-all relative"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="absolute top-2 left-3 text-gold font-display text-3xl leading-none pointer-events-none select-none z-10">
                “
              </div>
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="w-full h-auto object-contain block"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
