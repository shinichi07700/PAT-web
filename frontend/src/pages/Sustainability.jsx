import React from "react";
import { motion } from "framer-motion";
import { Leaf, Bug, Recycle, ShieldCheck, FileCheck } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Reveal, StaggerGroup, staggerItem } from "../lib/motion";
import { IMAGES } from "../data/content";
import PageHero from "../components/PageHero";

export default function Sustainability() {
  const { t } = useLang();
  const impacts = [
    { icon: Leaf, text: t("sustainability.impact1"), accent: "#43B14B" },
    { icon: Bug, text: t("sustainability.impact2"), accent: "#2D6A35" },
    { icon: Recycle, text: t("sustainability.impact3"), accent: "#E8A500" },
  ];
  return (
    <div data-testid="sustainability-page">
      <PageHero eyebrow={t("sustainability.eyebrow")} title={t("sustainability.title")} image={IMAGES.soil} />

      <section className="bg-white py-16 md:py-24">
        <div className="container-pat max-w-3xl">
          <Reveal><p className="text-[#1A1A1A] text-lg md:text-xl leading-relaxed">{t("sustainability.intro")}</p></Reveal>
        </div>
      </section>

      <section className="bg-[#F7F6F2] py-16 md:py-24">
        <div className="container-pat">
          <Reveal><h2 className="text-3xl md:text-4xl font-extrabold text-[#1C3A1F] tracking-tight mb-12">{t("sustainability.impactTitle")}</h2></Reveal>
          <StaggerGroup className="grid md:grid-cols-3 gap-6">
            {impacts.map((im, i) => {
              const Icon = im.icon;
              return (
                <motion.div key={i} variants={staggerItem} className="card-pat p-8 bg-white" data-testid={`impact-${i}`}>
                  <span className="flex items-center justify-center w-14 h-14 rounded-2xl mb-5" style={{ background: `${im.accent}1a` }}>
                    <Icon className="w-7 h-7" style={{ color: im.accent }} strokeWidth={1.75} />
                  </span>
                  <p className="text-[#1A1A1A] leading-relaxed">{im.text}</p>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-pat grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="card-pat p-10 bg-[#F7F6F2] h-full">
              <ShieldCheck className="w-10 h-10 text-[#43B14B] mb-5" strokeWidth={1.5} />
              <h3 className="text-2xl font-extrabold text-[#1C3A1F] tracking-tight">{t("sustainability.certTitle")}</h3>
              <p className="mt-4 text-[#5C5C5C] leading-relaxed">{t("sustainability.cert")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-[#1C3A1F] rounded-3xl p-10 h-full">
              <FileCheck className="w-10 h-10 text-[#F5C842] mb-5" strokeWidth={1.5} />
              <h3 className="text-2xl font-extrabold text-white tracking-tight">{t("sustainability.complianceTitle")}</h3>
              <p className="mt-4 text-white/70 leading-relaxed">{t("sustainability.compliance")}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
