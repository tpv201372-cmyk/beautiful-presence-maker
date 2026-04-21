import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Для кого подходит этот курс?",
    a: "Для всех, кто хочет работать с Китаем: новичков без опыта, селлеров на маркетплейсах, владельцев шоурумов, предпринимателей в опте. Возраст и образование не важны — важно желание действовать.",
  },
  {
    q: "Нужно ли знать китайский язык?",
    a: "Нет. Все переговоры мы ведём по готовым шаблонам и через переводчик. На курсе я даю проверенные скрипты на китайском, которыми пользуюсь сама.",
  },
  {
    q: "Сколько времени нужно уделять обучению?",
    a: "В среднем 4–6 часов в неделю. Уроки в записи — смотрите в удобное время. На тарифе «Вместе с Гузель» добавляются живые созвоны раз в неделю.",
  },
  {
    q: "Как работает беспроцентная рассрочка?",
    a: "Оформляется онлайн за 5 минут через банк-партнёр. Без процентов и переплат на срок от 4 до 12 месяцев. Первый платёж — через месяц после старта.",
  },
  {
    q: "Что если мне не подойдёт?",
    a: "В первые 7 дней после старта обучения мы вернём 100% оплаты без вопросов, если поймёте, что курс вам не подходит.",
  },
  {
    q: "Когда можно начать?",
    a: "Доступ к платформе вы получаете сразу после оплаты. Учиться можно в своём темпе, с любого устройства.",
  },
];

export function Faq() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto max-w-4xl px-6 lg:px-10">
        <div className="mb-14 reveal text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-chocolate mb-4">
            Вопросы и ответы
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05]">
            Часто <span className="italic text-chocolate">спрашивают</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="reveal divide-y divide-border border-t border-b border-border">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`f-${i}`} className="border-b-0">
              <AccordionTrigger className="py-6 hover:no-underline text-left">
                <span className="font-display text-xl md:text-2xl text-navy pr-6">{f.q}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-foreground/75 text-base leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
