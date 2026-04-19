import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  { t: "Кто такой байер", d: "Профессия XXI века: задачи, доход, рынок и ниши, в которых вы сможете работать сразу после курса." },
  { t: "Виды бизнес-моделей", d: "Wildberries, Ozon, опт, шоурум, под заказ, личный бренд — какую модель выбрать именно вам." },
  { t: "Юридические основы и налоги", d: "ИП / самозанятость / ООО, ВЭД, патент, НДС, договоры с поставщиками." },
  { t: "Анализ ниши и товара", d: "Как выбрать прибыльный товар, посчитать маржу и юнит-экономику до закупки." },
  { t: "Поставщики и фабрики Китая", d: "1688, Alibaba, Taobao, выставки. Где искать заводы напрямую и как отличить посредника." },
  { t: "Переговоры с поставщиком", d: "Скрипты на китайском и английском, тестовые партии, образцы, торг." },
  { t: "Контроль качества", d: "Инспекции на фабрике, чек-листы, фото- и видеоотчёты, защита от брака." },
  { t: "Логистика и карго", d: "Авто, авиа, ж/д, море. Как выбрать, что выгоднее, и как работает мой склад в Фошани." },
  { t: "Таможня и сертификация", d: "Белая и серая схема, ЕАС, маркировка «Честный знак», документы." },
  { t: "Расчёт себестоимости", d: "Все скрытые расходы, формулы наценки, как закладывать риски." },
  { t: "Поездка в Китай", d: "Как подготовиться, какие выставки посетить, что брать с собой, бюджет поездки." },
  { t: "Поиск клиентов в опт", d: "B2B-каналы, холодные продажи, work с шоурумами и предпринимателями." },
  { t: "Маркетплейсы РФ и СНГ", d: "WB, Ozon, Я.Маркет: карточки, SEO, продвижение, выкуп." },
  { t: "Личный бренд байера", d: "Позиционирование, контент, истории клиентов, доверие." },
  { t: "Продвижение в соцсетях", d: "Instagram + Telegram: контент-план, рилсы, продающие воронки." },
  { t: "Масштабирование", d: "Команда, ассистент в Китае, найм закупщика, выход на стабильный доход 300K+." },
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
            16 модулей <span className="italic text-chocolate">от А до Я</span>
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
