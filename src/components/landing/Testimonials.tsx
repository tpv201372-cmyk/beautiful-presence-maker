const testimonials = [
  { name: "Валентина", text: "Курс просто бомба! Гузель объясняет всё по полочкам, без воды. Уже сделала первую тестовую закупку." },
  { name: "Екатерина", text: "Самое ценное — поддержка в чате и проверка поставщиков. Сэкономила на одной партии больше, чем стоит обучение." },
  { name: "Юлия", text: "Прошла другие курсы — везде только теория. Здесь дают конкретные контакты, шаблоны и пошаговые скрипты." },
  { name: "Анастасия", text: "За месяц обучения вышла на первых клиентов в опт. Теперь работаю напрямую с фабрикой в Гуанчжоу." },
  { name: "Динара", text: "Гузель — настоящий эксперт. Видно, что человек живёт этим. Контент уровня закрытого клуба." },
  { name: "Марина", text: "Очень атмосферно, по-домашнему и при этом максимально по делу. Поняла, как считать юнит-экономику." },
  { name: "Алина", text: "Обучение окупилось ещё до его окончания. Сейчас планирую первую поездку в Китай — уже знаю, куда ехать." },
  { name: "Светлана", text: "Я думала, что Китай — это сложно и страшно. После курса страх ушёл, появилось понимание системы." },
];

export function Testimonials() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-14 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-chocolate mb-4">
            Отзывы учеников
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05]">
            Что говорят те, кто <span className="italic text-chocolate">уже внутри</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal bg-background p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="text-gold font-display text-3xl leading-none mb-3">“</div>
              <blockquote className="text-sm text-foreground/80 leading-relaxed">
                {t.text}
              </blockquote>
              <figcaption className="mt-4 pt-4 border-t border-border font-display italic text-navy">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
