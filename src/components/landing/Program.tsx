import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  { t: "Кто такой байер", d: "Профессия XXI века: задачи, доход, рынок и ниши, в которых вы сможете работать сразу после курса." },
  { t: "Виды бизнес-моделей", d: "Wildberries, Ozon, опт, шоурум, под заказ, личный бренд — какую модель выбрать именно вам." },
   { t: "Юридические основы работы с клиентами", d: "Где начинается и заканчивается ваша зона ответственности, как байера, и как правильно составить договор с клиентом и оформить свою деятельность" },
   { t: "Анализ ниши и товара", d: "Как выбрать прибыльную нишу для байера, в которой можно расти и развиваться" },
   { t: "Поставщики и фабрики Китая", d: "1688, Alibaba, Taobao, выставки. Где искать заводы напрямую и как отличить посредника." },
  { t: "Переговоры с поставщиком", d: "Скрипты на китайском и английском, тестовые партии, образцы, торг." },
   { t: "Контроль качества", d: "Как проверить поставщика еще до начала работы, минимизировать брак и проверить товар, пока он находится на территории Китая" },
   { t: "Логистика и карго", d: "Авто, авиа, ж/д. Как выбрать, что выгоднее, и как работает мой склад в Фошани." },
  { t: "Расчёт себестоимости", d: "Все скрытые расходы, формулы наценки, как закладывать риски." },
  { t: "Личный бренд байера", d: "Позиционирование, контент, истории клиентов, доверие." },
  { t: "Продвижение в соцсетях", d: "Instagram + Telegram: контент-план, рилсы, продающие воронки." },
];

export function Program() {
  return (
    <section id="program" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-3xl mb-14 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-chocolate mb-4">
            Программа флагмана
          </p>
          <h2 className="font-display md:text-5xl lg:text-6xl text-navy leading-[1.05] text-3xl">
            Рабочая модель <span className="italic text-chocolate">от А до Я</span>
          </h2>
          <p className="mt-6 text-foreground/75 text-lg max-w-2xl">
            Полная пошаговая система: от теории профессии до запуска
            собственных оптовых поставок и личного бренда.
          </p>
        </div>

        <Accordion type="single" collapsible className="reveal divide-y divide-border border-t border-b border-border">
          {modules.map((m, i) => (
            <AccordionItem key={m.t} value={`m-${i}`} className="border-b-0">
              <AccordionTrigger className="py-6 hover:no-underline group">
                <div className="flex items-baseline gap-6 text-left">
                  <span className="font-display italic text-gold text-xl tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl md:text-2xl text-navy group-hover:text-chocolate transition-colors">
                    {m.t}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 pr-6 pb-6 text-foreground/75 text-base leading-relaxed">
                {m.d}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
