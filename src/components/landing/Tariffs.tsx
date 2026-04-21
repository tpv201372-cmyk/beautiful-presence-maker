import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tariffs = [
  {
    name: "Самостоятельный",
    price: "75 000 ₽",
    altPrice: "≈ 750 $",
    desc: "Для тех, кто умеет учиться сам и быстро внедрять",
    features: [
      "Доступ к общему чату обучения",
      "Доступ ко всем блокам обучения, включая блоки о продвижении",
      "Обратная связь от куратора на каждом этапе заказов из Китая",
       "Доступ к материалам обучения 6 месяцев",
    ],
    bonus: {
      title: "Бонус",
      text: "База поставщиков: люкс-копии товаров, фабрики и производства Китая, контакты с рынков Гуанчжоу",
    },
    paymentNote: "Рассрочка на 12 месяцев или полная оплата",
    cta: "Оплатить",
    highlight: false,
  },
  {
    name: "Вместе с Гузель",
    price: "150 000 ₽",
    altPrice: "≈ 1 500 $",
    desc: "VIP-формат с личным сопровождением и обратной связью",
    features: [
      "Доступ к общему чату обучения",
      "Доступ ко всем блокам обучения, включая блоки о продвижении",
      "Обратная связь от куратора на каждом этапе заказов из Китая",
      "Личное сопровождение от Гузель в течение 2 месяцев",
      "Проверка всех домашних заданий, включая блок по продвижению",
      "Доступ к уникальной базе проверенных поставщиков из Китая",
      "Доступ к материалам обучения 6 месяцев",
    ],
    bonus: {
      title: "Бонус",
      text: "База поставщиков: люкс-копии товаров, фабрики и производства Китая, контакты с рынков Гуанчжоу",
    },
    paymentNote: "Рассрочка на 12 месяцев или полная оплата",
    cta: "Оплатить",
    highlight: true,
    badge: "Выбор большинства",
  },
  {
    name: "Индивидуальный",
    price: "250 000 ₽",
    altPrice: "≈ 2 500 $",
    desc: "Личное менторство для тех, кто хочет результат под ключ",
    features: [
      "Доступ ко всему материалу обучения в течение 1 года",
      "Возможность получать обратную связь от куратора и Гузель на каждом этапе заказа из Китая",
      "6 консультаций по личной стратегии действий с Гузель лично",
      "Доступ к уникальной базе проверенных поставщиков из Китая",
    ],
    bonus: {
      title: "Бонус",
      text: "База поставщиков: люкс-копии товаров, фабрики и производства Китая, контакты с рынков Гуанчжоу",
    },
    paymentNote: "Рассрочка на 12 месяцев или полная оплата",
    cta: "Оплатить",
    highlight: false,
  },
];

export function Tariffs() {
  return (
    <section id="tariffs" className="bg-beige py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-14 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-chocolate mb-4">
            Тарифы курса
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05]">
            Выберите свой <span className="italic text-chocolate">формат обучения</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {tariffs.map((t, i) => (
            <div
              key={t.name}
              className={`reveal relative flex flex-col p-8 lg:p-10 ${
                t.highlight
                  ? "bg-navy text-cream lg:-translate-y-4 shadow-2xl"
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
                Тариф
              </p>
              <h3 className={`font-display text-3xl ${t.highlight ? "text-cream" : "text-navy"}`}>
                {t.name}
              </h3>
              <p className={`mt-2 text-sm ${t.highlight ? "text-cream/70" : "text-foreground/65"}`}>
                {t.desc}
              </p>

              <div className="mt-8 mb-8">
                <div className={`font-display text-5xl ${t.highlight ? "text-gold" : "text-navy"}`}>
                  {t.price}
                </div>
                <div className={`mt-1 text-sm ${t.highlight ? "text-cream/60" : "text-muted-foreground"}`}>
                  {t.altPrice}
                </div>
              </div>

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

              {t.bonus && (
                <div
                  className={`mt-6 pt-6 border-t ${
                    t.highlight ? "border-cream/20" : "border-chocolate/20"
                  }`}
                >
                  <div
                    className={`text-[11px] uppercase tracking-[0.25em] mb-2 ${
                      t.highlight ? "text-gold" : "text-chocolate"
                    }`}
                  >
                    {t.bonus.title}
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${
                      t.highlight ? "text-cream/90" : "text-foreground/80"
                    }`}
                  >
                    {t.bonus.text}
                  </p>
                </div>
              )}

              <Button
                asChild
                size="lg"
                className={`mt-10 rounded-none h-12 ${
                  t.highlight
                    ? "bg-gold text-navy hover:bg-gold/90"
                    : "bg-navy text-cream hover:bg-navy/90"
                }`}
              >
                <a href="#cta">{t.cta}</a>
              </Button>
              <a
                href="#installment"
                className={`mt-3 text-center text-xs underline-offset-4 hover:underline ${
                  t.highlight ? "text-cream/70" : "text-chocolate"
                }`}
              >
                {t.paymentNote ?? "Доступна беспроцентная рассрочка"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
