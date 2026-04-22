import heroImg from "@/assets/guzel-hero.jpg";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export function FinalCta() {
  return (
    <section id="cta" className="bg-navy text-cream py-20 lg:py-32 relative overflow-hidden">
      <span aria-hidden className="hanzi-watermark absolute -left-12 -top-20 text-[24rem] hidden lg:block" style={{ color: "var(--gold)", opacity: 0.07 }}>
        买
      </span>

      <div className="container mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
              Готовы начать?
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl leading-[1.02]">
              Превратите Китай <br />
              в <span className="italic text-gold">свой бизнес</span>
            </h2>
            <p className="mt-8 text-lg text-cream/80 max-w-xl leading-relaxed">
              Запишитесь на обучение или задайте вопрос менеджеру. Ответим в
              течение часа, поможем подобрать тариф и оформить рассрочку.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none h-14 px-10 bg-gold text-navy hover:bg-gold/90 text-base">
                <a
                  href="https://t.me/china_truck_manager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="size-4" />
                  Записаться на обучение
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none h-14 px-10 border-cream/40 bg-transparent text-cream hover:bg-cream hover:text-navy text-base"
              >
                <a
                  href="https://t.me/juzele_ele"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   Написать мне
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-cream/70">
              <a href="https://t.me/juzele_ele" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                @juzele_ele · Telegram Гузель
              </a>
              <a href="https://t.me/china_truck_manager" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                @china_truck_manager · Менеджер
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 reveal hidden lg:block">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-3 border border-gold" />
              <img
                src={heroImg}
                alt="Гузель Маликова"
                className="relative w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
