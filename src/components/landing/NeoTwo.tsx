import { Button } from "@/components/ui/button";
import { Check, Sparkles, Smartphone, Package, Coins } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Новые маркетплейсы",
    text: "Изучение схемы заказа с маркетплейсов VipShop, Weidian, Gofish, GXHY и обмен юаней.",
  },
  {
    icon: Smartphone,
    title: "WeChat и китайский номер",
    text: "Создание китайского номера телефона, WeChat и регистрация в платёжной системе WeChat Pay.",
  },
  {
    icon: Package,
    title: "Доставка без потерь",
    text: "Как не попасть на деньги при заказе габаритных товаров, грамотно просчитать стоимость и подобрать упаковку. Даю проверенный сервис доставки от 300 г.",
  },
  {
    icon: Coins,
    title: "Обмен юаней на Alipay",
    text: "Самостоятельный обмен юаней на Alipay — ещё один способ заработка на Китае.",
  },
];

const tariffs = [
  {
    name: "Самостоятельно",
    price: "8 500 ₽",
    altPrice: "≈ 85 $",
    desc: "Для самостоятельного изучения",
    features: ["Доступ к урокам — 4 месяца", "Без обратной связи"],
    paymentUrl: "https://china.bayersacademy.ru/neo85",
    highlight: false,
  },
  {
    name: "С обратной связью",
    price: "13 500 ₽",
    altPrice: "≈ 135 $",
    desc: "Мы будем с вами на связи в самые сложные моменты",
    features: [
      "Обратная связь в группе в течение 2 месяцев",
      "БАЗА ПОСТАВЩИКОВ копий брендов, мебели, сантехники, оборудования, одежды и обуви, детских товаров и т.д. База постоянно обновляется",
      "Доступ к урокам — 6 месяцев",
    ],
    paymentUrl: "https://china.bayersacademy.ru/neo2-135",
    highlight: true,
    badge: "Рекомендуем",
  },
];

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M21.426 2.574a1.5 1.5 0 0 0-1.62-.27L2.73 9.36c-1.05.42-1.02 1.92.045 2.295l4.32 1.515 1.665 5.265a1.05 1.05 0 0 0 1.74.42l2.49-2.475 4.515 3.33c.78.57 1.89.165 2.115-.78l3.06-13.86a1.5 1.5 0 0 0-.255-1.496ZM9.84 14.43l-.51 3.585-1.215-3.84 8.745-6.135-7.02 6.39Z" />
    </svg>
  );
}

export function NeoTwo() {
  return (
    <section className="bg-beige py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-14 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-chocolate mb-4">
            Новый продукт
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05]">
            НЕО-закупки в Китае 2.0 — <span className="italic text-chocolate">новые маркетплейсы</span>
          </h2>
          <p className="mt-6 text-foreground/75 text-lg leading-relaxed">
            Многие уже изучили сайты 1688, Таобао, Пойзон и Пиндуодуо и хотят идти дальше,
            узнавать больше и развиваться как байеры. Я сделала отдельное обучение для тех,
            кто готов к следующему шагу.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="reveal bg-background p-6 lg:p-7 border-t-2 border-gold flex flex-col"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Icon className="size-7 text-chocolate mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-navy mb-3 leading-snug">{f.title}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{f.text}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tariffs.map((t, i) => (
            <div
              key={t.name}
              className={`reveal relative flex flex-col p-8 lg:p-10 ${
                t.highlight
                  ? "bg-navy text-cream shadow-2xl"
                  : "bg-background text-foreground border border-border"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {t.badge && (
                <div className="absolute -top-3 left-8 bg-gold text-navy text-[11px] uppercase tracking-widest px-3 py-1">
                  {t.badge}
                </div>
              )}

              <p className={`text-[11px] uppercase tracking-[0.25em] mb-3 ${
                t.highlight ? "text-gold" : "text-chocolate"
              }`}>
                Тариф · {t.name}
              </p>

              <div className="flex items-baseline gap-3 mb-2">
                <div className={`font-display text-4xl ${t.highlight ? "text-gold" : "text-navy"}`}>
                  {t.price}
                </div>
                <div className={`text-sm ${t.highlight ? "text-cream/60" : "text-muted-foreground"}`}>
                  {t.altPrice}
                </div>
              </div>
              <p className={`text-sm mb-6 ${t.highlight ? "text-cream/75" : "text-foreground/65"}`}>
                {t.desc}
              </p>

              <ul className="space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`size-4 mt-0.5 shrink-0 ${t.highlight ? "text-gold" : "text-chocolate"}`}
                      strokeWidth={3}
                    />
                    <span className={t.highlight ? "text-cream/90" : "text-foreground/80"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={`mt-8 w-full rounded-full h-12 ${
                  t.highlight
                    ? "bg-gold text-navy hover:bg-gold/90"
                    : "bg-navy text-cream hover:bg-navy/90"
                }`}
              >
                <a href={t.paymentUrl} target="_blank" rel="noopener noreferrer">
                  Оплатить
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 reveal flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-background border border-border p-6 lg:p-8">
          <p className="font-display text-xl md:text-2xl text-navy leading-snug max-w-xl">
            Записаться и забронировать место можно <span className="italic text-chocolate">уже сейчас</span>.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full h-12 px-8 bg-navy text-cream hover:bg-navy/90 shrink-0"
          >
            <a href="https://t.me/juzele" target="_blank" rel="noopener noreferrer">
              <TelegramIcon className="size-5" />
              Написать в Telegram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
