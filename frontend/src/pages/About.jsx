import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Reveal, StaggerGroup, staggerItem, StatCounter, Parallax } from "../lib/motion";
import { FOOTPRINT_STATS, TIMELINE, IMAGES } from "../data/content";
import PageHero from "../components/PageHero";

export default function About() {
  const { t, lang } = useLang();

  return (
    <div data-testid="about-page">
      <PageHero eyebrow={t("about.eyebrow")} title={t("about.title")} intro={t("about.intro")} image={IMAGES.lab} />

      {/* History — Milestone Timeline */}
      <section className="bg-[#F7F6F2] py-20 md:py-28">
        <div className="container-pat">
          <div className="max-w-2xl mb-14">
            <Reveal><span className="eyebrow mb-4">{t("about.journeyEyebrow")}</span></Reveal>
            <Reveal delay={0.1}><h2 className="text-4xl md:text-5xl font-extrabold text-[#1C3A1F] tracking-tight">{t("about.journeyTitle")}</h2></Reveal>
          </div>
          <div className="relative">
            <span className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-[#43B14B]/25 md:-translate-x-1/2" />
            <StaggerGroup className="space-y-10">
              {TIMELINE.map((item, i) => (
                <motion.div key={item.year} variants={staggerItem} className={`relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                  <span className="absolute left-0 md:left-1/2 top-1.5 w-3.5 h-3.5 rounded-full bg-[#43B14B] ring-4 ring-[#F7F6F2] md:-translate-x-1/2" />
                  <div className={i % 2 ? "md:col-start-2" : "md:col-start-1"}>
                    <div className="text-2xl font-extrabold text-[#2D6A35]">{item.year}</div>
                    <p className="mt-1 text-[#5C5C5C] max-w-md md:inline-block">{item[lang]}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Footprint / Reach */}
      <section className="relative bg-[#2D6A35] py-20 md:py-24 overflow-hidden">
        <Parallax distance={60} className="absolute inset-0 opacity-15">
          <img src={IMAGES.farm} alt="" className="w-full h-full object-cover" />
        </Parallax>
        <div className="container-pat relative">
          <span className="eyebrow !text-[#F5C842] mb-4">{t("about.reachEyebrow")}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-12">{t("about.reachTitle")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {FOOTPRINT_STATS.map((s) => (
              <div key={s.key} data-testid={`about-stat-${s.key}`}>
                <div className="text-4xl md:text-5xl font-extrabold text-white">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-white/80 text-base md:text-lg font-medium">{t(`about.${s.key}`)}</div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/solutions" className="inline-flex items-center gap-2 text-white font-semibold border-b-2 border-[#F5C842] pb-1 hover:text-[#F5C842] hover:gap-3 transition-all text-base md:text-lg">
              {t("about.findSolutionCta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
