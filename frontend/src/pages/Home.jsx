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
      {/* HERO - Full Bleed Vivid Video with text on the RIGHT */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[100vh] md:min-h-[680px] flex items-center" style={{ borderRadius: '0 0 0 36px' }}>
          {/* Vivid Video - no dark overlay, "front out" */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={IMAGES.heroField}
              className="w-full h-full object-cover"
            >
              <source src="./hero-video.mp4" type="video/mp4" />
              <img
                src={IMAGES.heroField}
                alt="Agricultural field"
                className="w-full h-full object-cover"
              />
            </video>
            {/* Subtle gradient only on the RIGHT side for text readability */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#064016]/70 via-[#064016]/40 to-transparent" />
          </div>

          {/* Hero Content - RIGHT aligned inside max-w-7xl container to align with below sections */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex justify-end">
            <div className="py-12 md:py-20 lg:py-24 max-w-2xl text-right">
              <MaskedLines
                as="h1"
                className="text-white font-extrabold tracking-tight leading-[1.05] text-4xl md:text-6xl lg:text-[3.5rem]"
                lines={[t("home.heroLine1"), t("home.heroLine2"), t("home.heroLine3")]}
                delay={0.2}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-6 text-white/90 text-base md:text-lg leading-relaxed font-normal"
              >
                {t("home.heroSub")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-4 justify-end items-center"
              >
                <Link to="/solutions" className="btn-pill-green group" style={{ borderRadius: '0 18px 0 18px' }} data-testid="hero-cta">
                  {t("common.findSolution")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about/oursciences" className="btn-pill-outline-white" style={{ borderRadius: '0 18px 0 18px' }}>
                  {t("common.seeFullProcess")}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / STAT BAR - Matching Mockup with Leaf Card Shape & Circular Icon Badges */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div
          className="bg-[#0E6E19] text-white p-6 md:p-10 shadow-xl overflow-hidden"
          style={{ borderRadius: '0 40px 0 40px' }}
        >
          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((s, idx) => (
              <motion.div key={s.key} variants={staggerItem} className="flex items-center gap-4" data-testid={`stat-${s.key}`}>
                <div
                  className="w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0 shadow-sm"
                  style={{ borderRadius: '0 16px 0 16px' }}
                >
                  {idx === 0 && (
                    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7 md:w-8 md:h-8">
                      <rect x="14" y="20" width="72" height="66" rx="14" stroke="white" strokeWidth="6" fill="none" />
                      <path d="M 14 38 L 86 38" stroke="white" strokeWidth="6" />
                      <rect x="32" y="10" width="7" height="18" rx="3.5" fill="white" />
                      <rect x="61" y="10" width="7" height="18" rx="3.5" fill="white" />
                      <circle cx="32" cy="53" r="5" fill="white" />
                      <circle cx="50" cy="53" r="5" fill="white" />
                      <circle cx="68" cy="53" r="5" fill="white" />
                      <circle cx="32" cy="71" r="5" fill="white" />
                      <circle cx="50" cy="71" r="5" fill="white" />
                      <circle cx="68" cy="71" r="5" fill="white" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg viewBox="0 0 100 100" fill="none" className="w-9 h-9 md:w-10 md:h-10 scale-110">
                      <ellipse cx="50" cy="45" rx="36" ry="19" stroke="white" strokeWidth="6.5" fill="none" />
                      <path d="M 14 45 A 36 19 0 0 0 86 45 v 9 A 36 19 0 0 1 14 54 Z" stroke="white" strokeWidth="6.5" fill="none" />
                      <path d="M 33 43 C 28 39 26 49 38 49 C 46 49 43 41 33 43 Z" fill="white" />
                      <circle cx="64" cy="46" r="5" fill="white" />
                    </svg>
                  )}
                  {idx === 2 && <MapPin className="w-7 h-7 md:w-8 md:h-8" />}
                  {idx === 3 && (
                    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7 md:w-8 md:h-8">
                      <circle cx="50" cy="22" r="10" stroke="white" strokeWidth="6" fill="none" />
                      <circle cx="24" cy="34" r="8.5" stroke="white" strokeWidth="6" fill="none" />
                      <circle cx="76" cy="34" r="8.5" stroke="white" strokeWidth="6" fill="none" />
                      <path d="M 16 80 A 34 34 0 0 1 84 80" stroke="white" strokeWidth="6.5" fill="none" strokeLinecap="round" />
                      <path d="M 6 82 A 20 20 0 0 1 36 68" stroke="white" strokeWidth="6.5" fill="none" strokeLinecap="round" />
                      <path d="M 94 82 A 20 20 0 0 0 64 68" stroke="white" strokeWidth="6.5" fill="none" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
                <div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-none">
                    <StatCounter value={s.value} suffix={s.suffix} noFormat={s.noFormat} />
                  </div>
                  <div className="mt-1 text-white/85 text-xs font-medium">{t(`stats.${s.key}`)}</div>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
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
                  <Link to="/solutions" className="btn-leaf" style={{ borderRadius: '0 20px 0 20px' }} data-testid="solutions-explore-btn">
                    {t("common.findSolution")}
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right 3 Cards matching mockup with big content images & compact green label */}
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
              {CATEGORY_CARDS.map((c) => (
                <motion.div key={c.slug} variants={staggerItem}>
                  <Link
                    to={c.targetUrl || "/solutions"}
                    className="group block rounded-asym-card overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col justify-between bg-white border border-gray-100"
                    data-testid={`solution-card-${c.slug}`}
                  >
                    {/* Top Content Image - Big & Prominent */}
                    <div className="relative overflow-hidden h-60 md:h-72 flex-1 bg-[#F3F1EC]">
                      <img
                        src={c.image}
                        alt={c.title[lang]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#0E6E19] shadow-sm group-hover:bg-[#0E6E19] group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Green Label Box - Perfectly Aligned Fixed Height */}
                    <div className="bg-[#0E6E19] text-white px-5 py-3 h-[76px] flex items-center justify-between shrink-0">
                      <h3 className="text-sm md:text-base font-bold leading-snug text-white tracking-tight">{c.title[lang]}</h3>
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
              <div className="w-20 h-20 flex items-center justify-center mb-5 hover:scale-105 transition-transform">
                <img src="/images/icons/icon-bioprospecting.png" alt="Bioprospecting" className="w-20 h-20 object-contain drop-shadow-sm" />
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
              <div className="w-20 h-20 flex items-center justify-center mb-5 hover:scale-105 transition-transform">
                <img src="/images/icons/icon-stabilization.png" alt="Stabilization" className="w-20 h-20 object-contain drop-shadow-sm" />
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
              <div className="w-20 h-20 bg-white flex items-center justify-center shadow-sm mb-5 hover:scale-105 transition-transform" style={{ borderRadius: '2px 20px 2px 20px' }}>
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
              <Link to="/about/oursciences" className="btn-pill-outline-green" style={{ borderRadius: '0 18px 0 18px' }} data-testid="process-cta">
                {t("common.seeFullProcess")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS - Section 4.6 Testimonial Card with Real Photo on Left & Top-Left 30px Radius */}
      <TestimonialCarousel />

    </div>
  );
}

function TestimonialCarousel() {
  const { t, lang } = useLang();
  const items = SEED_TESTIMONIALS;
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % items.length);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const cur = items[idx];

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
              className="w-9 h-9 border-2 border-[#0E6E19] text-[#0E6E19] flex items-center justify-center hover:bg-[#0E6E19] hover:text-white transition-colors"
              style={{ borderRadius: '2px 12px 2px 12px' }}
              data-testid="testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-9 h-9 border-2 border-[#0E6E19] text-[#0E6E19] flex items-center justify-center hover:bg-[#0E6E19] hover:text-white transition-colors"
              style={{ borderRadius: '2px 12px 2px 12px' }}
              data-testid="testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x;
              if (swipe < -40 || velocity.x < -300) {
                next();
              } else if (swipe > 40 || velocity.x > 300) {
                prev();
              }
            }}
            className="bg-white border border-gray-100 p-6 md:p-8 overflow-hidden shadow-xl grid md:grid-cols-12 items-center gap-6 md:gap-8 cursor-grab active:cursor-grabbing select-none touch-pan-y"
            style={{ borderRadius: '0 36px 0 36px' }}
          >
            {/* Left side photo filling leaf shape container completely */}
            <div className="md:col-span-5 relative h-[300px] md:h-[380px] w-full overflow-hidden shadow-md" style={{ borderRadius: '0 24px 0 24px' }}>
              <img
                src={cur.image}
                alt={cur.name}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* Right side content */}
            <div className="md:col-span-7 p-2 md:p-6 flex flex-col justify-between h-full">
              <div>
                <div className="text-[#0E6E19] text-4xl md:text-5xl font-serif leading-none mb-3 font-bold">&ldquo;</div>
                <p className="text-base md:text-lg font-normal text-[#111827] leading-relaxed px-1">
                  {cur.quote[lang] || cur.quote.en}
                </p>
                <div className="text-[#0E6E19] text-4xl md:text-5xl font-serif leading-none mt-3 text-right font-bold">&rdquo;</div>
              </div>

              <div className="mt-8">
                <div className="inline-block bg-[#0E6E19] text-white px-6 py-3 shadow-sm" style={{ borderRadius: '0 14px 0 14px' }}>
                  <div className="font-extrabold text-sm uppercase tracking-wide text-white">
                    {cur.name}
                  </div>
                  <div className="text-xs text-white/90 font-medium mt-0.5">
                    {typeof cur.role === "object" ? (cur.role[lang] || cur.role.en) : cur.role}
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

