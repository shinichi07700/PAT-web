import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Calendar,
  FlaskConical,
  MapPin,
  Users,
  Package,
  Disc,
  Hexagon,
} from "lucide-react";
import { useLang } from "../lib/i18n";
import { MaskedLines, Reveal, StaggerGroup, staggerItem, StatCounter, MicrobeDots } from "../lib/motion";
import { STATS, CERTIFICATIONS, CATEGORY_CARDS, IMAGES, SEED_TESTIMONIALS } from "../data/content";

export default function Home() {
  const { t, lang } = useLang();

  const statIcons = [
    <Calendar className="w-6 h-6 text-[#0E6E19] bg-white/10 p-1.5 rounded-full" />,
    <FlaskConical className="w-6 h-6 text-[#0E6E19] bg-white/10 p-1.5 rounded-full" />,
    <MapPin className="w-6 h-6 text-[#0E6E19] bg-white/10 p-1.5 rounded-full" />,
    <Users className="w-6 h-6 text-[#0E6E19] bg-white/10 p-1.5 rounded-full" />,
  ];

  return (
    <div data-testid="home-page" className="bg-white">
      {/* HERO - Section 4.2 Full Bleed Field Photo with Asymmetric Radius */}
      <section className="relative pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="relative rounded-asym-banner overflow-hidden shadow-2xl bg-[#064016] min-h-[520px] md:min-h-[580px] flex items-center">
          {/* Background Field Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={IMAGES.heroField}
              alt="Agricultural field"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#064016]/95 via-[#064016]/75 to-transparent" />
          </div>

          <MicrobeDots count={12} />

          {/* Hero Content */}
          <div className="relative z-10 p-8 md:p-16 lg:p-20 max-w-3xl">
            <MaskedLines
              as="h1"
              className="text-white font-extrabold tracking-tight leading-[1.05] text-4xl md:text-6xl lg:text-[3.5rem]"
              lines={[t("home.heroLine1"), t("home.heroLine2"), t("home.heroLine3")]}
              delay={0.2}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-6 text-white/90 text-base md:text-lg leading-relaxed font-normal"
            >
              {t("home.heroSub")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/solutions" className="btn-pill-green group" data-testid="hero-cta">
                {t("common.findSolution")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about/oursciences" className="btn-pill-outline-white">
                {t("common.seeFullProcess")}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST / STAT BAR - Section 4.3 Deep Forest Green Container with Asymmetric Radius & Icons */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#064016] text-white rounded-asym-banner p-8 md:p-12 shadow-xl">
          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s, idx) => (
              <motion.div key={s.key} variants={staggerItem} className="flex flex-col items-start" data-testid={`stat-${s.key}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                    {idx === 0 && <Calendar className="w-5 h-5" />}
                    {idx === 1 && <FlaskConical className="w-5 h-5" />}
                    {idx === 2 && <MapPin className="w-5 h-5" />}
                    {idx === 3 && <Users className="w-5 h-5" />}
                  </div>
                  <div className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                    <StatCounter value={s.value} suffix={s.suffix} />
                  </div>
                </div>
                <div className="mt-2 text-white/70 text-xs md:text-sm font-medium pl-13">{t(`stats.${s.key}`)}</div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>

        {/* Certifications row below on clean background */}
        <div className="mt-8 py-6 px-4 flex flex-wrap items-center justify-center gap-3 text-center">
          <span className="text-[#4B5563] text-xs font-bold uppercase tracking-wider mr-2 flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#0E6E19]" /> {t("home.certsTitle")}
          </span>
          {CERTIFICATIONS.map((c) => (
            <span key={c} className="px-4 py-1.5 rounded-full bg-[#F3F1EC] text-[#111827] text-xs font-semibold">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* SOLUTIONS - Section 4.4 Solid Green Gradient Cards with Asymmetric Top-Left Radius */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-pat">
          <div className="max-w-2xl mb-12">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
                {t("home.solutionsTitle")}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 text-[#4B5563] text-base md:text-lg">{t("home.solutionsSub")}</p>
            </Reveal>
          </div>
          <StaggerGroup className="grid md:grid-cols-3 gap-8">
            {CATEGORY_CARDS.map((c) => (
              <motion.div key={c.slug} variants={staggerItem}>
                <Link
                  to={`/solutions/${c.slug === "bio-crop-protection" ? "bio-insecticides" : c.slug}`}
                  className="group block bg-gradient-to-br from-[#0E6E19] to-[#064016] text-white p-8 md:p-10 rounded-asym-card shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 min-h-[320px] flex flex-col justify-between"
                  data-testid={`solution-card-${c.slug}`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-extrabold leading-snug">{c.title[lang]}</h3>
                      <ArrowUpRight className="w-6 h-6 text-white/80 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                    <p className="mt-4 text-white/80 text-sm leading-relaxed font-normal">
                      {c.desc[lang]}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/15 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90">
                    <span>{t("common.learnMore")}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* PROCESS SECTION - Section 4.5 Centered Horizontal 3-Step Layout */}
      <section className="py-16 md:py-24 bg-[#F3F1EC]/60">
        <div className="container-pat text-center max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
              {t("home.discoveryTitle")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[#4B5563] text-base md:text-lg max-w-2xl mx-auto">
              {t("home.discoverySub")}
            </p>
          </Reveal>

          {/* Horizontal 3-Step Process with Outline Icon Circles & Connector Line */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
            {/* Horizontal Line overlay for md+ */}
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-[2px] bg-[#0E6E19]/30 z-0" />

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10 flex flex-col items-center text-center px-4"
            >
              <div className="w-20 h-20 rounded-full border-2 border-[#0E6E19] bg-white flex items-center justify-center text-[#0E6E19] shadow-md mb-5">
                <Package className="w-9 h-9" />
              </div>
              <h4 className="font-extrabold text-lg text-[#111827]">{t("steps.bioprospecting")}</h4>
              <p className="text-[#4B5563] text-xs md:text-sm mt-2 leading-relaxed max-w-xs">
                {t("steps.bioprospectingDesc")}
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative z-10 flex flex-col items-center text-center px-4"
            >
              <div className="w-20 h-20 rounded-full border-2 border-[#0E6E19] bg-white flex items-center justify-center text-[#0E6E19] shadow-md mb-5">
                <Disc className="w-9 h-9" />
              </div>
              <h4 className="font-extrabold text-lg text-[#111827]">{t("steps.stabilization")}</h4>
              <p className="text-[#4B5563] text-xs md:text-sm mt-2 leading-relaxed max-w-xs">
                {t("steps.stabilizationDesc")}
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative z-10 flex flex-col items-center text-center px-4"
            >
              <div className="w-20 h-20 rounded-full border-2 border-[#0E6E19] bg-white flex items-center justify-center text-[#0E6E19] shadow-md mb-5">
                <Hexagon className="w-9 h-9" />
              </div>
              <h4 className="font-extrabold text-lg text-[#111827]">{t("steps.deploy")}</h4>
              <p className="text-[#4B5563] text-xs md:text-sm mt-2 leading-relaxed max-w-xs">
                {t("steps.deployDesc")}
              </p>
            </motion.div>
          </div>

          <Reveal delay={0.5}>
            <div className="mt-14">
              <Link to="/about/oursciences" className="btn-pill-green" data-testid="process-cta">
                {t("common.seeFullProcess")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS - Section 4.6 Testimonial Card with Real Photo on Left & Top-Left 30px Radius */}
      <TestimonialCarousel />

      {/* UNIFIED CTA & FOOTER BLOCK - Section 4.7 CTA Banner Merged into Deep Green Block */}
      <section className="bg-[#064016] text-white pt-20 pb-8 px-4 md:px-8 max-w-7xl mx-auto rounded-t-[40px] mt-12 grain relative overflow-hidden">
        <MicrobeDots count={10} />
        <div className="container-pat relative text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight text-balance">
              {t("home.ctaTitle")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-white/80 text-base md:text-lg">{t("home.ctaSub")}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/6285283790848"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-green !bg-[#0E6E19] hover:!bg-[#04280d]"
                data-testid="cta-whatsapp"
              >
                {t("common.chatWhatsapp")}
              </a>
              <Link to="/contact" className="btn-pill-outline-white">
                {t("nav.contactUs")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function TestimonialCarousel() {
  const { t, lang } = useLang();
  const [items, setItems] = useState(SEED_TESTIMONIALS);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const api = process.env.REACT_APP_BACKEND_URL + "/api/testimonials?approved_only=true";
    fetch(api)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          const mapped = data.map((d) => ({ ...d, quote: { en: d.quote, id: d.quote } }));
          setItems([...mapped, ...SEED_TESTIMONIALS]);
        }
      })
      .catch(() => {});
  }, []);

  const next = () => setIdx((i) => (i + 1) % items.length);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const cur = items[idx];

  // Specific photos per testimonial profile (Farmer, Dealer, Plantation)
  const testimonialPhotos = [
    IMAGES.farmerField,
    IMAGES.scientist,
    IMAGES.palmOil,
    IMAGES.farm,
  ];

  const currentPhoto = testimonialPhotos[idx % testimonialPhotos.length];

  return (
    <section className="py-16 md:py-24 bg-white" data-testid="home-testimonials">
      <div className="container-pat">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
              {t("home.testimonialsTitle")}
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border border-[#111827]/30 flex items-center justify-center hover:bg-[#0E6E19] hover:border-[#0E6E19] hover:text-white transition-colors text-[#111827]"
              data-testid="testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-11 h-11 rounded-full border border-[#111827]/30 flex items-center justify-center hover:bg-[#0E6E19] hover:border-[#0E6E19] hover:text-white transition-colors text-[#111827]"
              data-testid="testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-[#F3F1EC] rounded-2xl overflow-hidden shadow-sm grid md:grid-cols-12 items-stretch"
          >
            {/* Left side photo with top-left 30px radius per Section 3.2 Testimonial Card token */}
            <div className="md:col-span-5 relative min-h-[260px] md:min-h-[360px]">
              <img
                src={currentPhoto}
                alt={cur.name}
                className="w-full h-full object-cover rounded-asym-card"
              />
            </div>

            {/* Right side content */}
            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="text-[#0E6E19] text-5xl font-serif leading-none mb-3">&ldquo;</div>
                <p className="text-lg md:text-2xl font-semibold text-[#111827] leading-snug">
                  {cur.quote[lang] || cur.quote.en}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#111827]/10 flex items-center justify-between">
                <div>
                  <span className="inline-block bg-[#0E6E19] text-white text-xs font-bold px-3 py-1 rounded-full mb-1">
                    {cur.name}
                  </span>
                  <div className="text-xs md:text-sm text-[#4B5563] font-medium capitalize">
                    {cur.role} · {cur.crop} · {cur.province}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-2 mt-8 justify-center">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-[#0E6E19]" : "w-2 bg-[#4B5563]/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

}
