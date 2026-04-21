const stats = [
  { v: "90 000+", l: "Подписчиков в Instagram" },
   { v: "17 000+", l: "Подписчиков в Telegram" },
   { v: "2 000+", l: "Учеников по всему миру" },
  { v: "1 500+", l: "Клиентов карго @china_trukk" },
];

export function Stats() {
  return (
    <section className="bg-beige py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className="reveal text-center lg:border-r lg:border-navy/15 last:border-r-0 px-2"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-display md:text-5xl lg:text-6xl text-navy text-3xl">
                {s.v}
              </div>
              <div className="mt-3 text-xs md:text-sm uppercase tracking-wider text-chocolate">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
