import heroImg from "@/assets/guzel-hero.jpg";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Decorative watermark */}
      <span
        aria-hidden
        className="hanzi-watermark absolute -top-10 -left-6 text-[18rem] hidden md:block"
      >
        中国
      </span>
      <span
        aria-hidden
        className="hanzi-watermark absolute bottom-10 right-4 text-[12rem] hidden lg:block"
      >
        买手
      </span>

      <div className="container mx-auto max-w-7xl px-6 lg:px-10 pt-10 pb-20 lg:pt-16 lg:pb-28 relative">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-12 lg:mb-20">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-chocolate font-medium">
              Guzel · Академия байеров
            </span>
          </div>
          <a
            href="#tariffs"
            className="hidden md:inline-flex items-center gap-2 text-sm text-navy hover:text-chocolate transition-colors"
          >
            Тарифы <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div className="lg:col-span-7 reveal">
            <p className="font-display italic text-chocolate text-lg md:text-xl mb-4">
              Первая академия профессии БАЙЕР
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] text-navy">
              Китай
              <span className="block italic font-medium text-chocolate">от А до Я</span>
            </h1>
            <p className="mt-8 text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed">
              Авторский курс Гузель Маликовой — научитесь привозить товар из Китая
              без ошибок, выходить на доход от 50 000 ₽ и строить собственный бренд
              байера. От первой закупки до своих оптовых клиентов.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none h-12 px-8 bg-navy text-cream hover:bg-navy/90">
                <a href="#tariffs">Узнать о тарифах</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none h-12 px-8 border-navy text-navy hover:bg-navy hover:text-cream"
              >
                <a href="#program">Программа курса</a>
              </Button>
            </div>

            {/* Metrics */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { v: "10 000+", l: "учеников" },
                { v: "3+ года", l: "опыта в Китае" },
                { v: "90К+", l: "подписчиков" },
              ].map((m) => (
                <div key={m.l} className="border-t border-navy/20 pt-4">
                  <div className="font-display text-2xl md:text-3xl text-navy">{m.v}</div>
                  <div className="text-xs uppercase tracking-wider text-chocolate/80 mt-1">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — portrait */}
          <div className="lg:col-span-5 reveal">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 bg-beige -z-10" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold -z-10" />
              <img
                src={heroImg}
                alt="Гузель Маликова — основательница академии байеров «Китай от А до Я»"
                className="w-full h-auto max-h-[720px] object-contain bg-beige shadow-2xl"
                loading="eager"
              />
              <div className="absolute -bottom-6 left-6 bg-navy text-cream px-5 py-3">
                <div className="font-display italic text-sm">Гузель Маликова</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  Основатель академии
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
