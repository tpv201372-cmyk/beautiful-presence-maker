import { Button } from "@/components/ui/button";

const steps = [
  { n: "01", t: "Выберите тариф", d: "Определитесь с подходящим форматом обучения" },
  { n: "02", t: "Заполните заявку", d: "Свяжитесь с менеджером — ответит в течение часа" },
  { n: "03", t: "Оформите рассрочку", d: "Без процентов и переплат, на 4–12 месяцев" },
  { n: "04", t: "Начните учиться", d: "Первый платёж — только через месяц" },
];

const countries = ["🇷🇺 Россия", "🇧🇾 Беларусь", "🇰🇿 Казахстан", "🇺🇿 Узбекистан", "🇰🇬 Кыргызстан"];

const internalSteps = [
  "Вы пишите мне, о том, что вам нужна внутренняя рассрочка",
  "Далее я отправляю вам ссылку на оплату для бронирования места",
  "Согласовываем с вами даты следующих платежей",
  "Оставшуюся сумму оплачиваете до оговорённого числа",
];

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M21.426 2.574a1.5 1.5 0 0 0-1.62-.27L2.73 9.36c-1.05.42-1.02 1.92.045 2.295l4.32 1.515 1.665 5.265a1.05 1.05 0 0 0 1.74.42l2.49-2.475 4.515 3.33c.78.57 1.89.165 2.115-.78l3.06-13.86a1.5 1.5 0 0 0-.255-1.496ZM9.84 14.43l-.51 3.585-1.215-3.84 8.745-6.135-7.02 6.39Z" />
    </svg>
  );
}

export function Installment() {
  return (
    <section id="installment" className="bg-cream py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-14 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-chocolate mb-4">
            Оплата
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05]">
            Беспроцентная <span className="italic text-chocolate">рассрочка</span>
          </h2>
          <p className="mt-6 text-foreground/75 text-lg">
            Учитесь сейчас — платите по частям. Первый платёж только через месяц.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal bg-background p-6 border-t-2 border-gold"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-display italic text-4xl text-gold mb-3">{s.n}</div>
              <h3 className="font-display text-xl text-navy mb-2">{s.t}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="reveal flex flex-wrap items-center gap-3 justify-center text-sm text-chocolate">
          <span className="uppercase tracking-widest text-xs">Доступно в:</span>
          {countries.map((c) => (
            <span key={c} className="bg-beige px-4 py-2 border border-border">
              {c}
            </span>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 reveal">
            <p className="uppercase tracking-[0.3em] text-chocolate mb-4 text-base">
              Внутренняя рассрочка
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.05]">
              Как работает <span className="italic text-chocolate">внутренняя рассрочка?</span>
            </h2>
            <p className="mt-6 text-foreground/75 text-base leading-relaxed">
              Гибкий вариант оплаты напрямую со мной — без банков и заявок.
              Договариваемся об удобных датах платежей индивидуально.
            </p>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="rounded-full h-12 px-8 bg-navy text-cream hover:bg-navy/90 text-base"
              >
                <a
                  href="https://t.me/juzele"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TelegramIcon className="size-5" />
                  Связаться со мной
                </a>
              </Button>
              <p className="mt-3 text-xs text-chocolate/80 tracking-wide">
                @juzele · Telegram Гузель
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <ol className="space-y-5">
              {internalSteps.map((text, i) => (
                <li
                  key={i}
                  className="flex gap-5 bg-background p-6 border-l-2 border-gold"
                >
                  <span className="font-display italic text-3xl text-gold leading-none shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base text-navy/90 leading-relaxed pt-1">
                    {text}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-6 bg-beige border-l-4 border-chocolate p-5">
              <p className="text-sm md:text-base text-chocolate font-semibold leading-relaxed">
                В случае невнесения оплаты доступ к обучению не предоставляется.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
