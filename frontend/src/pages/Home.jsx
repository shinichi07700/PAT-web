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

      {/* TRUST / STAT BAR - Section 4.3 Deep Forest Green Gradient Container with Asymmetric Radius & Leaf Icons */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#0E6E19] via-[#064016] to-[#04280d] text-white rounded-asym-banner p-8 md:p-12 shadow-xl">
          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s, idx) => (
              <motion.div key={s.key} variants={staggerItem} className="flex flex-col items-start" data-testid={`stat-${s.key}`}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0"
                    style={{ borderRadius: "14px 2px 14px 14px" }}
                  >
                    {idx === 0 && <Calendar className="w-5 h-5" />}
                    {idx === 1 && (
                      <svg viewBox="0 0 100 100" fill="none" className="w-5 h-5">
                        <ellipse cx="50" cy="45" rx="34" ry="17" stroke="white" strokeWidth="6" fill="none" />
                        <path d="M 16 45 A 34 17 0 0 0 84 45 v 8 A 34 17 0 0 1 16 53 Z" stroke="white" strokeWidth="6" fill="none" />
                        <path d="M 35 43 C 30 39 28 49 40 49 C 48 49 45 41 35 43 Z" fill="white" />
                        <circle cx="64" cy="46" r="4.5" fill="white" />
                      </svg>
                    )}
                    {idx === 2 && <MapPin className="w-5 h-5" />}
                    {idx === 3 && <Users className="w-5 h-5" />}
                  </div>
                  <div className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                    <StatCounter value={s.value} suffix={s.suffix} />
                  </div>
                </div>
                <div className="mt-2 text-white/80 text-xs md:text-sm font-medium pl-13">{t(`stats.${s.key}`)}</div>
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

      {/* SOLUTIONS - Section 4.4 Cream Top + Solid Green Bottom Cards with Asymmetric Top-Left Radius */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-pat">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column matching mockup */}
            <div className="lg:col-span-4 flex flex-col justify-between py-2">
              <div>
                <Reveal>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
                    {t("home.solutionsTitle")}
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-4 text-[#4B5563] text-sm md:text-base leading-relaxed">
                    {t("home.solutionsSub")}
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.2}>
                <div className="mt-8">
                  <Link to="/solutions" className="btn-leaf" data-testid="solutions-explore-btn">
                    {lang === "id" ? "Jelajahi Solusi" : "Explore Solution"}
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right 3 Cards matching mockup (Cream top + Green bottom) */}
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
              {CATEGORY_CARDS.map((c) => (
                <motion.div key={c.slug} variants={staggerItem}>
                  <Link
                    to={`/solutions/${c.slug === "bio-crop-protection" ? "bio-insecticides" : c.slug}`}
                    className="group block bg-[#F3F1EC] rounded-asym-card overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col justify-between"
                    data-testid={`solution-card-${c.slug}`}
                  >
                    {/* Top Cream Area */}
                    <div className="p-6 min-h-[140px] flex items-start justify-between">
                      <div className="w-3 h-3 rounded-full bg-[#0E6E19]/30 group-hover:bg-[#0E6E19] transition-colors" />
                      <ArrowUpRight className="w-5 h-5 text-[#0E6E19] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    {/* Bottom Solid Green Block with gradient */}
                    <div className="bg-gradient-to-b from-[#0E6E19] to-[#04280d] text-white p-6 rounded-t-2xl flex-1 flex flex-col justify-between">
                      <h3 className="text-lg font-bold leading-snug text-white">{c.title[lang]}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION - Section 4.5 Centered Horizontal 3-Step Layout */}
      <section className="py-16 md:py-24 bg-white">
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

          {/* Horizontal 3-Step Process with Custom Icons & Arrow Connector Line */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
            {/* Arrow Connector Line overlay for md+ */}
            <div className="hidden md:flex absolute top-10 left-[18%] right-[18%] items-center z-0">
              <div className="flex-1 h-[2px] bg-[#0E6E19]/40" />
              <svg className="w-5 h-5 text-[#0E6E19] shrink-0 -mx-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <div className="flex-1 h-[2px] bg-[#0E6E19]/40" />
              <svg className="w-5 h-5 text-[#0E6E19] shrink-0 -mx-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <div className="flex-1 h-[2px] bg-[#0E6E19]/40" />
            </div>

            {/* Step 1 - Bioprospecting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10 flex flex-col items-center text-center px-4"
            >
              <div className="w-20 h-20 bg-white flex items-center justify-center shadow-sm rounded-full mb-5 hover:scale-105 transition-transform">
                <PetriDishIcon className="w-20 h-20" />
              </div>
              <h4 className="font-extrabold text-lg text-[#111827]">{t("steps.bioprospecting")}</h4>
              <p className="text-[#4B5563] text-xs md:text-sm mt-2 leading-relaxed max-w-xs">
                {t("steps.bioprospectingDesc")}
              </p>
            </motion.div>

            {/* Step 2 - Stabilization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative z-10 flex flex-col items-center text-center px-4"
            >
              <div className="w-20 h-20 bg-white flex items-center justify-center shadow-sm rounded-full mb-5 hover:scale-105 transition-transform">
                <HexagonMicrobeIcon className="w-20 h-20" />
              </div>
              <h4 className="font-extrabold text-lg text-[#111827]">{t("steps.stabilization")}</h4>
              <p className="text-[#4B5563] text-xs md:text-sm mt-2 leading-relaxed max-w-xs">
                {t("steps.stabilizationDesc")}
              </p>
            </motion.div>

            {/* Step 3 - Deploy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative z-10 flex flex-col items-center text-center px-4"
            >
              <div className="w-20 h-20 bg-white flex items-center justify-center shadow-sm rounded-full mb-5 hover:scale-105 transition-transform">
                <SachetIcon className="w-20 h-20" />
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

      {/* UNIFIED CTA & FOOTER BLOCK - Section 4.7 CTA Banner Merged into Deep Green Gradient Block */}
      <section className="bg-gradient-to-b from-[#0E6E19] via-[#064016] to-[#04280d] text-white pt-20 pb-8 px-4 md:px-8 max-w-7xl mx-auto rounded-t-[40px] mt-12 grain relative overflow-hidden">
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
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-9 h-9 rounded-full border-2 border-[#0E6E19] text-[#0E6E19] flex items-center justify-center hover:bg-[#0E6E19] hover:text-white transition-colors"
              data-testid="testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-9 h-9 rounded-full border-2 border-[#0E6E19] text-[#0E6E19] flex items-center justify-center hover:bg-[#0E6E19] hover:text-white transition-colors"
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
            {/* Left side photo with top-left 30px radius */}
            <div className="md:col-span-4 relative min-h-[280px] md:min-h-[380px]">
              <img
                src={cur.image || currentPhoto}
                alt={cur.name}
                className="w-full h-full object-cover rounded-asym-card"
              />
            </div>

            {/* Right side content matching mockup */}
            <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="text-black text-4xl font-serif leading-none mb-4 font-bold">&ldquo; &rdquo;</div>
                <p className="text-base md:text-xl font-normal text-[#111827] leading-relaxed max-w-2xl">
                  {cur.quote[lang] || cur.quote.en}
                </p>
              </div>

              <div className="mt-8">
                <div className="inline-block bg-[#0E6E19] text-white px-6 py-3 rounded-2xl shadow-sm">
                  <div className="font-extrabold text-sm uppercase tracking-wide text-white">
                    {cur.name}
                  </div>
                  <div className="text-xs text-white/90 font-medium mt-0.5">
                    {cur.role}
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

function PetriDishIcon({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <circle cx="50" cy="50" r="46" stroke="#0E6E19" strokeWidth="4.5" fill="white" />
      <ellipse cx="50" cy="45" rx="28" ry="14" stroke="black" strokeWidth="4" fill="none" />
      <path d="M 22 45 A 28 14 0 0 0 78 45 v 7 A 28 14 0 0 1 22 52 Z" fill="none" stroke="black" strokeWidth="4" />
      <path d="M 38 43 C 32 39 30 50 42 50 C 50 50 48 41 38 43 Z" fill="black" />
      <circle cx="62" cy="46" r="4.5" fill="black" />
    </svg>
  );
}

function SachetIcon({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <circle cx="50" cy="50" r="46" stroke="#0E6E19" strokeWidth="4.5" fill="white" />
      <g transform="translate(50, 51) scale(0.72) translate(-23, -27)">
        {/* Back sachet */}
        <g transform="translate(0, 4) rotate(-8 16 26)">
          <rect x="2" y="4" width="28" height="46" rx="1" fill="white" stroke="black" strokeWidth="3.5" />
          <path d="M 2 4 L 5 1 L 8 4 L 11 1 L 14 4 L 17 1 L 20 4 L 23 1 L 26 4 L 29 1 L 30 4" stroke="black" strokeWidth="2" fill="none" />
          <path d="M 2 50 L 5 53 L 8 50 L 11 53 L 14 50 L 17 53 L 20 50 L 23 53 L 26 50 L 29 53 L 30 50" stroke="black" strokeWidth="2" fill="none" />
          <line x1="6" y1="9" x2="26" y2="9" stroke="black" strokeWidth="2" />
          <line x1="5" y1="45" x2="25" y2="45" stroke="black" strokeWidth="2" />
        </g>
        {/* Front sachet */}
        <g transform="translate(14, 0) rotate(6 16 26)">
          <rect x="2" y="4" width="28" height="46" rx="1" fill="white" stroke="black" strokeWidth="3.5" />
          <path d="M 2 4 L 5 1 L 8 4 L 11 1 L 14 4 L 17 1 L 20 4 L 23 1 L 26 4 L 29 1 L 30 4" stroke="black" strokeWidth="2" fill="none" />
          <path d="M 2 50 L 5 53 L 8 50 L 11 53 L 14 50 L 17 53 L 20 50 L 23 53 L 26 50 L 29 53 L 30 50" stroke="black" strokeWidth="2" fill="none" />
          <line x1="7" y1="10" x2="27" y2="10" stroke="black" strokeWidth="2.5" />
          <line x1="6" y1="46" x2="26" y2="46" stroke="black" strokeWidth="2.5" />
          <line x1="7" y1="14" x2="6" y2="42" stroke="black" strokeWidth="2" strokeDasharray="4 2" />
          <line x1="27" y1="14" x2="26" y2="42" stroke="black" strokeWidth="2" strokeDasharray="4 2" />
        </g>
      </g>
    </svg>
  );
}

function HexagonMicrobeIcon({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <circle cx="50" cy="50" r="46" stroke="#0E6E19" strokeWidth="4.5" fill="white" />
      {/* Black Hexagon Outer Border */}
      <path
        d="M 50 20 L 76 35 L 76 65 L 50 80 L 24 65 L 24 35 Z"
        stroke="black"
        strokeWidth="5"
        strokeLinejoin="round"
        fill="white"
      />
      {/* Filled Top-Left Pocket */}
      <path
        d="M 50 20 L 24 35 C 24 45 32 45 42 35 C 46 31 48 24 50 20 Z"
        fill="black"
      />
      {/* Smooth organic wave line */}
      <path
        d="M 24 45 C 38 42 45 52 55 50 C 65 48 70 58 76 60"
        stroke="black"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Microbe dots + connection lines */}
      <circle cx="48" cy="52" r="3" fill="black" />
      <circle cx="56" cy="58" r="4" fill="black" />
      <line x1="48" y1="52" x2="56" y2="58" stroke="black" strokeWidth="2.5" />
      <circle cx="62" cy="67" r="3.5" fill="black" />
      <line x1="56" y1="58" x2="62" y2="67" stroke="black" strokeWidth="2.5" />

      <circle cx="64" cy="32" r="2.5" fill="black" />
      <circle cx="70" cy="40" r="3" fill="black" />
      <circle cx="68" cy="48" r="3.5" fill="black" />
      <circle cx="42" cy="62" r="2.5" fill="black" />
      <circle cx="50" cy="72" r="3" fill="black" />
    </svg>
  );
}


function DeployIcon({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <circle cx="50" cy="50" r="46" stroke="#0E6E19" strokeWidth="4.5" fill="white" />
      <path
        d="M 50 26 L 72 38 L 72 62 L 50 74 L 28 62 L 28 38 Z"
        stroke="black"
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

