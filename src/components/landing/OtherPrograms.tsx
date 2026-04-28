import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type Module = {
  title: string;
  topics: string[];
};

type Tariff = {
  name: string;
  price: string;
  altPrice: string;
  features: string[];
  paymentUrl?: string;
};

type Program = {
  name: string;
  desc: string;
  tag: string;
  price?: string;
  sub?: string;
  tariffs?: Tariff[];
  paymentUrl?: string;
  modules?: Module[];
};

const clubModules: Module[] = [
  {
    title: "Введение и подготовка",
    topics: [
      "Вводный урок. О чём будет этот курс",
      "Подготовка: как скачать Алипей, 1688, Таобао, Пиндуодуо и Пойзон на iPhone и Android",
      "Этапы заказа из Китая: из скольки шагов состоит заказ и за что вы платите",
    ],
  },
  {
    title: "Практика: Алипей и 1688",
    topics: [
      "Платёжная система Алипей: лимиты, использование, регистрация",
      "Регистрация на сайте 1688",
      "Как прикрепить склад на сайте 1688",
      "Как искать товары на сайте 1688",
      "Как заказывать и оплачивать товары на сайте 1688",
      "Как выбрать надёжного продавца",
      "Как отслеживать товары на сайте 1688",
      "Как делать возврат на сайте 1688, если товар ещё не выехал на склад Карго",
    ],
  },
  {
    title: "Таобао",
    topics: [
      "Регистрация на Таобао",
      "Как прикрепить адрес склада и отслеживать посылки",
      "Как искать товары на Таобао",
      "Как ориентироваться по рейтингу продавцов на Таобао",
      "Как заказывать и оплачивать товары на Таобао",
    ],
  },
  {
    title: "Пойзон",
    topics: [
      "Как скачать Пойзон на Android",
      "Как зарегистрироваться на сайте Пойзон",
      "Как прикрепить склад Карго и отслеживать заказ",
      "Как искать товары на сайте Пойзон",
      "Как выбирать товары на Пойзон и оплачивать их",
      "Полезное о Пойзон: как выбрать правильный размер и определить оригинальность купленного товара",
    ],
  },
  {
    title: "Пиндуодуо",
    topics: [
      "Как скачать Пиндуодуо на iPhone",
      "Как зарегистрироваться на Пиндуодуо",
      "Как прикрепить адрес склада на Пиндуодуо",
      "Как сделать заказ товаров на Пиндуодуо",
      "Как оформить карту РСХБ для оплаты на Пиндуодуо",
      "Секретные кнопки и значки на Пиндуодуо",
    ],
  },
  {
    title: "Доставка",
    topics: [
      "Этапы доставки",
      "Как рассчитать доставку заранее",
      "Как выбрать упаковку для товара",
    ],
  },
];

const neoModules: Module[] = [
  {
    title: "Введение и подготовка",
    topics: [
      "Вводный урок. О чём будет этот курс",
      "Подготовка: что нужно сделать и как скачать приложения Алипей, 1688, Таобао, Пиндуодуо и Пойзон на Айфон и Андроид",
      "Этапы заказа из Китая: из скольки шагов состоит заказ и за что вы платите при заказе",
    ],
  },
  {
    title: "Практический: Алипей и 1688",
    topics: [
      "Платёжная система Алипей. Лимиты, использование, регистрация",
      "Регистрация на сайте 1688",
      "Как прикрепить склад на сайте 1688",
      "Как искать товары на сайте 1688",
      "Как заказывать и оплачивать на сайте 1688",
      "Как выбрать надёжного продавца",
      "Как отслеживать товары на сайте 1688",
      "Как делать возврат на сайте 1688, если товар ещё не выехал на склад Карго",
    ],
  },
  {
    title: "Таобао",
    topics: [
      "Регистрация на Таобао",
      "Как прикрепить адрес склада и отслеживать посылки",
      "Как искать товары на Таобао",
      "Как ориентироваться по рейтингу продавцов на Таобао",
      "Как заказывать и оплачивать товары на Таобао",
    ],
  },
  {
    title: "Пойзон",
    topics: [
      "Как скачать Пойзон на Андроид",
      "Как зарегистрироваться на сайте Пойзон",
      "Как прикрепить склад Карго и отслеживать заказ",
      "Как искать товары на сайте Пойзон",
      "Как выбирать товары на Пойзон и оплачивать их",
      "Кое-что полезное о Пойзон: как выбрать правильный размер и определить оригинальность купленного товара",
    ],
  },
  {
    title: "Пиндуодуо",
    topics: [
      "Как скачать Пиндуодуо на Айфон",
      "Как зарегистрироваться на Пиндуодуо",
      "Как прикрепить адрес склада на Пиндуодуо",
      "Как сделать заказ товаров на Пиндуодуо",
      "Как оформить карту РСХБ для оплаты на Пиндуодуо",
      "Секретные кнопки и значки на Пиндуодуо",
    ],
  },
  {
    title: "Новые приложения",
    topics: [
      "Этапы доставки",
      "Как рассчитать доставку заранее",
      "Как выбрать упаковку для товара",
    ],
  },
  {
    title: "VIPSHOP, Weidian, GoFish и Вичат",
    topics: [
      "Знакомство с новыми приложениями VIPSHOP, Weidian, GoFish",
      "Подготовка к работе с новыми приложениями: какие приложения нужно скачать (ссылки) и этапы работы с ними",
      "Регистрация и использование приложения Вичат",
      "Создание китайского номера в Esender",
    ],
  },
  {
    title: "Vipshop",
    topics: [
      "Регистрация в приложении Vipshop",
      "Как привязать адрес склада в приложении Vipshop",
      "Как искать товары в приложении Vipshop",
      "Как оплачивать и отслеживать свои заказы в приложении Vipshop",
    ],
  },
  {
    title: "GoFish",
    topics: [
      "Регистрация в приложении GoFish",
      "Как привязать адрес склада",
      "Как искать товары и проверять продавцов",
      "Как оплатить товар, общаться с продавцом и отслеживать свои заказы",
    ],
  },
  {
    title: "Weidian",
    topics: [
      "Регистрация в приложении Weidian",
      "Как привязать адрес",
      "Как искать товары и проверять продавцов",
      "Как оплатить товар, общаться с продавцом и отслеживать свои заказы",
    ],
  },
  {
    title: "Бонусный: GXNY",
    topics: [
      "Регистрация в приложении GXNY",
      "Работа с приложением GXNY",
    ],
  },
  {
    title: "Самостоятельное пополнение Алипей",
    topics: [
      "Подготовка к работе",
      "Инструкция по работе с обменом на бирже",
      "Расчёт своей прибыли",
    ],
  },
];

const programs: Program[] = [
  {
    name: "Клуб «О закупках в Китае — просто»",
    price: "6 500 ₽ / мес",
    sub: "≈ 65 $",
    desc: "Базовые закупки из Китая «для себя» в розницу. Идеально для старта - попробовать тему без больших вложений.",
    tag: "Сообщество",
    paymentUrl: "https://china.bayersacademy.ru/club65",
    modules: clubModules,
  },
  {
    name: "НЕО-закупки в Китае",
    desc: "Короткий концентрат: как делать первые закупки на маркетплейсы. Для тех, кто хочет быстро попробовать модель.",
    tag: "Мини-курс",
    modules: neoModules,
    tariffs: [
      {
        name: "Всё сам",
        price: "15 000 ₽",
        altPrice: "≈ 150 $",
        features: [
          "Без обратной связи",
          "Доступ к обучающим материалам в течение 6 месяцев",
        ],
        paymentUrl: "https://china.bayersacademy.ru/neo15",
      },
      {
        name: "С поддержкой куратора",
        price: "25 000 ₽",
        altPrice: "≈ 250 $",
        features: [
          "Обратная связь в группе с куратором",
          "Доступ к обучающим материалам в течение 6 месяцев",
        ],
        paymentUrl: "https://china.bayersacademy.ru/neo25",
      },
    ],
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
              <p className="mt-4 text-foreground/75 leading-relaxed text-sm">{p.desc}</p>

              {p.modules && (
                <Collapsible className="mt-6">
                  <CollapsibleTrigger className="group flex w-full items-center justify-between gap-4 rounded-full border border-navy/20 px-5 h-12 text-left text-sm font-medium text-navy hover:border-navy hover:bg-navy/[0.03] transition-colors">
                    <span>Посмотреть содержание курса</span>
                    <ChevronDown className="size-4 shrink-0 text-navy/60 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="mt-5 space-y-6">
                      {p.modules.map((m, idx) => (
                        <div key={m.title} className="pt-5 border-t border-border first:border-t-0 first:pt-0">
                          <div className="text-[11px] uppercase tracking-[0.25em] text-chocolate mb-2">
                            Модуль {idx + 1}
                          </div>
                          <div className="font-display text-lg text-navy mb-3 leading-snug">
                            {m.title}
                          </div>
                          <ul className="space-y-2">
                            {m.topics.map((t) => (
                              <li key={t} className="flex items-start gap-2 text-sm text-foreground/80 leading-relaxed">
                                <Check className="size-4 mt-0.5 shrink-0 text-chocolate" strokeWidth={3} />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              )}

              {p.tariffs ? (
                <div className="mt-6 space-y-6">
                  {p.tariffs.map((t) => (
                    <div key={t.name} className="pt-6 border-t border-border">
                      <div className="text-[11px] uppercase tracking-[0.25em] text-chocolate mb-3">
                        Тариф · {t.name}
                      </div>
                      <div className="flex items-baseline gap-3">
                        <div className="font-display text-2xl text-navy">{t.price}</div>
                        <div className="text-xs text-muted-foreground">{t.altPrice}</div>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {t.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                            <Check className="size-4 mt-0.5 shrink-0 text-chocolate" strokeWidth={3} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        size="lg"
                        className="mt-5 w-full rounded-full h-12 bg-navy text-cream hover:bg-navy/90"
                      >
                        <a
                          href={t.paymentUrl ?? "#cta"}
                          target={t.paymentUrl ? "_blank" : undefined}
                          rel={t.paymentUrl ? "noopener noreferrer" : undefined}
                        >
                          Оплатить
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-chocolate mb-3">
                    Подписка
                  </div>
                  <div className="flex items-baseline gap-3">
                    <div className="font-display text-2xl text-navy">{p.price}</div>
                    {p.sub && <div className="text-xs text-muted-foreground">{p.sub}</div>}
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="mt-5 w-full rounded-full h-12 bg-navy text-cream hover:bg-navy/90"
                  >
                    <a
                      href={p.paymentUrl ?? "#cta"}
                      target={p.paymentUrl ? "_blank" : undefined}
                      rel={p.paymentUrl ? "noopener noreferrer" : undefined}
                    >
                      Оплатить
                    </a>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
