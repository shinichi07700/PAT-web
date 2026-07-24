import React from "react";
import { Linkedin, ArrowRight } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Reveal, Parallax } from "../lib/motion";
import { IMAGES } from "../data/content";
import PageHero from "../components/PageHero";

export default function Career() {
  const { t } = useLang();
  const blocks = [
    { title: t("career.fieldTitle"), body: t("career.field"), image: IMAGES.teamField },
    { title: t("career.labTitle"), body: t("career.lab"), image: IMAGES.scientist },
  ];
  return (
    <div data-testid="career-page">
      <PageHero eyebrow={t("career.eyebrow")} title={t("career.title")} intro={t("career.intro")} image={IMAGES.teamField} />
      <section className="bg-white py-16 md:py-24">
        <div className="container-pat space-y-20 md:space-y-28">
          {blocks.map((b, i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center" data-testid={`career-block-${i}`}>
              <Reveal className={i % 2 ? "lg:order-2" : ""}>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C3A1F] tracking-tight">{b.title}</h2>
                <p className="mt-5 text-[#5C5C5C] text-lg leading-relaxed">{b.body}</p>
              </Reveal>
              <Reveal className={i % 2 ? "lg:order-1" : ""} delay={0.1}>
                <Parallax distance={40}>
                  <div className="rounded-[28px] overflow-hidden aspect-[4/3] shadow-xl">
                    <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
                  </div>
                </Parallax>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#1C3A1F] py-16 md:py-20">
        <div className="container-pat text-center max-w-2xl mx-auto">
          <p className="text-white text-xl md:text-2xl font-medium leading-snug">{t("career.cta")}</p>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-primary !bg-[#43B14B] hover:!bg-white hover:!text-[#1C3A1F] mt-8" data-testid="career-linkedin">
            <Linkedin className="w-4 h-4" /> LinkedIn <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
