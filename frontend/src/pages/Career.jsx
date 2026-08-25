import React, { useState, useEffect } from "react";
import { Linkedin, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../lib/i18n";
import { Reveal, Parallax } from "../lib/motion";
import { IMAGES } from "../data/content";
import PageHero from "../components/PageHero";

const FIELD_IMAGES = [
  "./images/career/career-field-1.JPG",
  "./images/career/career-field-2.JPG",
  "./images/career/career-field-3.JPG",
  "./images/career/career-field-4.JPG",
  "./images/career/career-field-5.JPG",
  "./images/career/career-field-6.jpg",
  "./images/career/career-field-7.JPG",
];

export default function Career() {
  const { t } = useLang();
  const [fieldIndex, setFieldIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFieldIndex((prev) => (prev + 1) % FIELD_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div data-testid="career-page">
      <PageHero
        eyebrow={t("career.eyebrow")}
        title={t("career.title")}
        intro={t("career.intro")}
        image={FIELD_IMAGES[0]}
      />
      <section className="bg-white py-16 md:py-24">
        <div className="container-pat space-y-20 md:space-y-28">
          {/* In the Field Block with 2-second Auto Slider */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center" data-testid="career-block-0">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C3A1F] tracking-tight">
                {t("career.fieldTitle")}
              </h2>
              <p className="mt-5 text-[#5C5C5C] text-lg leading-relaxed">
                {t("career.field")}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Parallax distance={40}>
                <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] shadow-xl bg-gray-100">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={fieldIndex}
                      src={FIELD_IMAGES[fieldIndex]}
                      alt={`${t("career.fieldTitle")} ${fieldIndex + 1}`}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </AnimatePresence>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
                    {FIELD_IMAGES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setFieldIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === fieldIndex
                            ? "w-6 bg-white"
                            : "w-2 bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </Parallax>
            </Reveal>
          </div>

          {/* In the Lab Block */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center" data-testid="career-block-1">
            <Reveal className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C3A1F] tracking-tight">
                {t("career.labTitle")}
              </h2>
              <p className="mt-5 text-[#5C5C5C] text-lg leading-relaxed">
                {t("career.lab")}
              </p>
            </Reveal>
            <Reveal className="lg:order-1" delay={0.1}>
              <Parallax distance={40}>
                <div className="rounded-[28px] overflow-hidden aspect-[4/3] shadow-xl bg-gray-100">
                  <img
                    src={IMAGES.careerLab}
                    alt={t("career.labTitle")}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Parallax>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#1C3A1F] py-16 md:py-20">
        <div className="container-pat text-center max-w-2xl mx-auto">
          <p className="text-white text-xl md:text-2xl font-medium leading-snug">
            {t("career.cta")}
          </p>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !bg-[#43B14B] hover:!bg-white hover:!text-[#1C3A1F] mt-8"
            data-testid="career-linkedin"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
