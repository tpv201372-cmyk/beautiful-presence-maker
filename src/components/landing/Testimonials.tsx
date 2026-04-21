import anna from "@/assets/testimonials/anna.jpg";
import alena from "@/assets/testimonials/alena.jpg";
import leysan from "@/assets/testimonials/leysan.jpg";
import adel from "@/assets/testimonials/adel.jpg";
import aliya from "@/assets/testimonials/aliya.jpg";
import elena from "@/assets/testimonials/elena.jpg";
import evdokia from "@/assets/testimonials/evdokia.jpg";
import chinaTruck from "@/assets/testimonials/china-truck.jpg";
import guzelCourse from "@/assets/testimonials/guzel-course.jpg";
import firstParcel from "@/assets/testimonials/first-parcel.jpg";
import kate from "@/assets/testimonials/kate.jpg";

const testimonials = [
  { src: anna, alt: "Отзыв ученицы Anna" },
  { src: alena, alt: "Отзыв ученицы Алёны" },
  { src: leysan, alt: "Отзыв ученицы leysan_balloons_nch" },
  { src: adel, alt: "Отзыв ученика Адель Байер" },
  { src: aliya, alt: "Отзыв ученицы Алия Байер" },
  { src: elena, alt: "Отзыв ученицы Елена Китай Байер" },
  { src: evdokia, alt: "Отзыв ученицы Евдокии" },
  { src: chinaTruck, alt: "Отзыв о первой посылке China Truck" },
  { src: guzelCourse, alt: "Отзыв о курсе: короткие уроки без воды" },
  { src: firstParcel, alt: "Отзыв: первая посылка с полным сопровождением" },
  { src: kate, alt: "Отзыв ученицы Kate о доставке 27,8 кг за 14 дней" },
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

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
          {testimonials.map((t, i) => (
            <figure
              key={t.alt}
              className="reveal break-inside-avoid mb-5 bg-cream p-3 border border-border hover:border-navy hover:shadow-md transition-all relative"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="absolute top-2 left-3 text-gold font-display text-3xl leading-none pointer-events-none select-none z-10">
                “
              </div>
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="w-full h-auto object-contain block"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
