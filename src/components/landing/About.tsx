import bioImg from "@/assets/guzel-bio.jpg";

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-32 h-32 border border-gold" />
              <img
                src={bioImg}
                alt="Гузель Маликова — преподаватель, эксперт по закупкам в Китае"
                className="relative w-full h-[560px] object-cover shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-beige -z-10" />
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-chocolate mb-4">
              О преподавателе
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05]">
              Знаю Китай <span className="italic text-chocolate">изнутри</span> —
              и научу вас тому же
            </h2>

            <div className="mt-8 space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                Более <strong className="text-navy">3 лет живу в Китае</strong>,
                ежегодно посещаю крупнейшие промышленные выставки и лично
                нахожу проверенных поставщиков для своих клиентов и учеников.
              </p>
              <p>
                Основатель карго-компании{" "}
                <strong className="text-navy">@china_trukk</strong> — собственный
                склад в Фошани, более <strong>1500 клиентов</strong>, доставка
                под ключ из Китая в СНГ.
              </p>
              <p>
                За плечами 6 лет рекламного университета и 5 лет в SMM —
                именно поэтому курс учит не только закупкам, но и тому, как{" "}
                <em className="text-chocolate">упаковать и продать</em> товар
                с прибылью.
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-gold pl-6 font-display italic text-xl md:text-2xl text-chocolate max-w-xl">
              «Моя задача — провести вас за руку от первой пробной закупки до
              стабильного дохода и собственных оптовых клиентов».
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
