import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sprout, FlaskConical, TrendingUp, ArrowRight } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Reveal, StaggerGroup, staggerItem, StatCounter, Parallax } from "../lib/motion";
import { STATS, TIMELINE, IMAGES } from "../data/content";
import PageHero from "../components/PageHero";

const PILLAR_ICONS = [Sprout, FlaskConical, TrendingUp];

export default function About() {
  const { t, lang } = useLang();
  const pillars = [
    { key: "pillar1", title: t("about.pillar1"), desc: t("about.pillar1Desc") },
    { key: "pillar2", title: t("about.pillar2"), desc: t("about.pillar2Desc") },
    { key: "pillar3", title: t("about.pillar3"), desc: t("about.pillar3Desc") },
  ];

  return (
    <div data-testid="about-page">
      <PageHero eyebrow={t("about.eyebrow")} title={t("about.title")} intro={t("about.intro")} image={IMAGES.lab} />

      {/* Three Pillars */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-pat">
          <Reveal><span className="eyebrow mb-4">{t("about.pillarsEyebrow")}</span></Reveal>
          <StaggerGroup className="grid md:grid-cols-3 gap-6 mt-8">
            {pillars.map((p, i) => {
              const Icon = PILLAR_ICONS[i];
              return (
                <motion.div key={p.key} variants={staggerItem} className="card-pat p-8 bg-[#F7F6F2] hover:shadow-lg transition-shadow" data-testid={`pillar-${p.key}`}>
                  <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white mb-6 border border-[#5C5C5C]/10">
                    <Icon className="w-7 h-7 text-[#43B14B]" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#1C3A1F] tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-[#5C5C5C] leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Journey timeline */}
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

      {/* Mission / Vision */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-pat grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="bg-[#1C3A1F] rounded-3xl p-10 h-full">
              <h3 className="text-[#43B14B] font-semibold uppercase tracking-wider text-sm mb-4">{t("about.missionTitle")}</h3>
              <p className="text-white text-lg md:text-xl leading-relaxed">{t("about.mission")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-pat p-10 h-full bg-[#F7F6F2]">
              <h3 className="text-[#2D6A35] font-semibold uppercase tracking-wider text-sm mb-4">{t("about.visionTitle")}</h3>
              <p className="text-[#1A1A1A] text-lg md:text-xl leading-relaxed">{t("about.vision")}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reach */}
      <section className="relative bg-[#2D6A35] py-20 md:py-24 overflow-hidden">
        <Parallax distance={60} className="absolute inset-0 opacity-15">
          <img src={IMAGES.farm} alt="" className="w-full h-full object-cover" />
        </Parallax>
        <div className="container-pat relative">
          <span className="eyebrow !text-[#F5C842] mb-4">{t("about.reachEyebrow")}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-12">{t("about.reachTitle")}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.key} data-testid={`about-stat-${s.key}`}>
                <div className="text-4xl md:text-5xl font-extrabold text-white"><StatCounter value={s.value} suffix={s.suffix} /></div>
                <div className="mt-2 text-white/70 text-sm">{t(`stats.${s.key}`)}</div>
              </div>
            ))}
          </div>
          <Link to="/about/oursciences" className="inline-flex items-center gap-2 mt-12 text-white font-semibold border-b-2 border-[#F5C842] pb-1 hover:gap-3 transition-all">
            {t("common.seeFullProcess")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
