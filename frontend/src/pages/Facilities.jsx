import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Reveal, Parallax } from "../lib/motion";
import { IMAGES } from "../data/content";
import PageHero from "../components/PageHero";

export default function Facilities() {
  const { t } = useLang();
  const blocks = [
    { title: t("facilities.title"), body: t("facilities.intro"), image: IMAGES.production, tag: "Location", icon: true },
    { title: t("facilities.labTitle"), body: t("facilities.lab"), image: IMAGES.lab, tag: "R&D Laboratory" },
    { title: t("facilities.prodTitle"), body: t("facilities.prod"), image: IMAGES.testTubes, tag: "Production" },
  ];
  return (
    <div data-testid="facilities-page">
      <PageHero eyebrow={t("facilities.eyebrow")} title={t("facilities.title")} intro={t("facilities.intro")} image={IMAGES.production} />
      <section className="bg-white py-16 md:py-24">
        <div className="container-pat space-y-20 md:space-y-28">
          {blocks.map((b, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`} data-testid={`facility-block-${i}`}>
              <Reveal className={i % 2 ? "lg:order-2" : ""}>
                <span className="eyebrow mb-4">{b.tag}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C3A1F] tracking-tight">{b.title}</h2>
                <p className="mt-5 text-[#5C5C5C] text-lg leading-relaxed">{b.body}</p>
                {b.icon && (
                  <div className="mt-6 flex flex-col gap-2 text-sm text-[#1A1A1A]">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#43B14B]" /> Penjaringan, Jakarta — Head Office</span>
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#43B14B]" /> Karawaci, Tangerang, Banten — Lab & Production</span>
                  </div>
                )}
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
          <Reveal>
            <div className="text-center">
              <Link to="/about/oursciences" className="link-underline inline-flex items-center gap-1 text-lg">
                {t("facilities.closing")} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
