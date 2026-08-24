import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Reveal, Marquee, Parallax } from "../lib/motion";
import { SCIENCE_STAGES, IMAGES } from "../data/content";
import PageHero from "../components/PageHero";

export default function OurSciences() {
  const { t, lang } = useLang();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div data-testid="sciences-page">
      <PageHero eyebrow={t("sciences.eyebrow")} title={t("sciences.title")} intro={t("sciences.intro")} image={IMAGES.microbes} />

      {/* Marquee band */}
      <div className="bg-[#F5C842] py-4 overflow-hidden">
        <Marquee text={t("sciences.marquee")} className="text-[#1C3A1F] font-extrabold text-2xl md:text-4xl tracking-tight" duration={24} />
      </div>

      {/* Stages */}
      <section className="bg-white py-16 md:py-24 relative" ref={containerRef}>
        {/* progress rail */}
        <div className="hidden lg:block absolute left-1/2 top-24 bottom-24 w-px bg-[#5C5C5C]/15 -translate-x-1/2">
          <motion.div className="w-px bg-[#43B14B] origin-top" style={{ height: progressHeight }} />
        </div>

        <div className="container-pat space-y-24 md:space-y-32">
          {SCIENCE_STAGES.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={s.n} className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center" data-testid={`stage-${s.n}`}>
                <Reveal className={flip ? "lg:order-2" : ""} y={50}>
                  <div className="relative">
                    <span className="text-[7rem] md:text-[10rem] font-extrabold leading-none text-[#F7F6F2] absolute -top-16 -left-2 select-none pointer-events-none">{s.n}</span>
                    <div className="relative">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-[#43B14B] tracking-wider">
                        <span className="w-8 h-px bg-[#43B14B]" /> STAGE {s.n}
                      </span>
                      <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-[#1C3A1F] tracking-tight leading-tight">{s.title[lang]}</h2>
                      <p className="mt-5 text-[#5C5C5C] text-lg leading-relaxed max-w-lg">{s.body[lang]}</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal className={flip ? "lg:order-1" : ""} delay={0.1} y={50}>
                  <Parallax distance={40}>
                    <div className="rounded-[28px] overflow-hidden aspect-[4/3] shadow-xl">
                      <img src={s.image} alt={s.title[lang]} className="w-full h-full object-cover" />
                    </div>
                  </Parallax>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative bg-[#1C3A1F] py-20 md:py-28 overflow-hidden grain">
        <div className="container-pat relative text-center max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance">{t("sciences.closingTitle")}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/solutions" className="btn-primary !bg-[#43B14B] hover:!bg-white hover:!text-[#1C3A1F] mt-8 group">
              {t("sciences.closingCta") || t("common.exploreSolutions")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
