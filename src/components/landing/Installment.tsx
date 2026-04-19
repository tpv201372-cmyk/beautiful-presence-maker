const steps = [
  { n: "01", t: "Выберите тариф", d: "Определитесь с подходящим форматом обучения" },
  { n: "02", t: "Заполните заявку", d: "Свяжитесь с менеджером — ответит в течение часа" },
  { n: "03", t: "Оформите рассрочку", d: "Без процентов и переплат, на 4–12 месяцев" },
  { n: "04", t: "Начните учиться", d: "Первый платёж — только через месяц" },
];

const countries = ["🇷🇺 Россия", "🇧🇾 Беларусь", "🇰🇿 Казахстан", "🇺🇿 Узбекистан", "🇰🇬 Кыргызстан"];

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
      </div>
    </section>
  );
}
