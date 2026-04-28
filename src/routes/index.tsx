import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Stats } from "@/components/landing/Stats";
import { Cases } from "@/components/landing/Cases";
import { Testimonials } from "@/components/landing/Testimonials";
import { Outcomes } from "@/components/landing/Outcomes";
import { Program } from "@/components/landing/Program";
import { Tariffs } from "@/components/landing/Tariffs";
import { OtherPrograms } from "@/components/landing/OtherPrograms";
import { NeoTwo } from "@/components/landing/NeoTwo";
import { Installment } from "@/components/landing/Installment";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { useReveal } from "@/hooks/use-reveal";
import heroImg from "@/assets/guzel-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Гузель Маликова — Академия байеров «Китай от А до Я»" },
      {
        name: "description",
        content:
          "Авторский курс Гузель Маликовой: научитесь привозить товар из Китая, выходить на доход от 50 000 ₽ и строить личный бренд байера. 16 модулей, 10 000+ учеников.",
      },
      { property: "og:title", content: "Китай от А до Я — академия байеров Гузель Маликовой" },
      {
        property: "og:description",
        content:
          "Полная пошаговая система профессии байер: от первой закупки в Китае до своих оптовых клиентов и стабильного дохода.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Stats />
      <Cases />
      <Testimonials />
      <Outcomes />
      <Program />
      <Tariffs />
      <OtherPrograms />
      <NeoTwo />
      <Installment />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
