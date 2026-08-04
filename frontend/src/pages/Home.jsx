import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { useLang } from "../lib/i18n";
import { MaskedLines, Reveal, StaggerGroup, staggerItem, StatCounter, MicrobeDots, Parallax } from "../lib/motion";
import { STATS, CERTIFICATIONS, CATEGORY_CARDS, IMAGES, SEED_TESTIMONIALS } from "../data/content";

export default function Home() {
  const { t, lang } = useLang();

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative pt-[72px] bg-[#F7F6F2] overflow-hidden">
        <MicrobeDots count={16} />
        <div className="container-pat relative grid lg:grid-cols-12 gap-10 items-center py-16 md:py-24 lg:py-28">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow mb-6">SEA-native microbial bio-solutions</span>
            </Reveal>
            <MaskedLines
              as="h1"
              className="text-[#1C3A1F] font-extrabold tracking-tight leading-[0.95] text-5xl md:text-7xl lg:text-[5.5rem]"
              lines={[t("home.heroLine1"), t("home.heroLine2"), t("home.heroLine3")]}
              delay={0.2}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-8 text-[#5C5C5C] text-lg leading-relaxed max-w-xl"
            >
              {t("home.heroSub")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link to="/solutions" className="btn-primary group" data-testid="hero-cta">
                {t("common.findSolution")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about/oursciences" className="btn-secondary">{t("common.seeFullProcess")}</Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="relative"
            >
              <Parallax distance={50}>
                <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] shadow-2xl">
                  <img src={IMAGES.lab} alt="Scientist isolating microbial strains" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#1C3A1F]/10" />
                </div>
              </Parallax>
              {/* floating inset */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.7 }}
                className="absolute -bottom-6 -left-6 w-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
              >
                <img src={IMAGES.microbes} alt="Microbial cultures" className="w-full h-28 object-cover" />
              </motion.div>
              <div className="absolute -top-4 -right-4 bg-[#F5C842] text-[#1C3A1F] rounded-2xl px-5 py-3 shadow-lg hidden md:block">
                <div className="text-2xl font-extrabold leading-none">120+</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider">{t("stats.isolates")}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white py-16 md:py-20 border-b border-[#5C5C5C]/10">
        <div className="container-pat">
          <Reveal><span className="eyebrow mb-8">{t("home.trustEyebrow")}</span></Reveal>
          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
            {STATS.map((s) => (
              <motion.div key={s.key} variants={staggerItem} data-testid={`stat-${s.key}`}>
                <div className="text-4xl md:text-5xl font-extrabold text-[#2D6A35] tracking-tight">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-[#5C5C5C] text-sm font-medium">{t(`stats.${s.key}`)}</div>
              </motion.div>
            ))}
          </StaggerGroup>
          <Reveal delay={0.2}>
            <div className="mt-12 pt-10 border-t border-[#5C5C5C]/10">
              <div className="flex items-center gap-2 text-[#5C5C5C] text-sm font-semibold uppercase tracking-wider mb-5">
                <ShieldCheck className="w-4 h-4 text-[#43B14B]" /> {t("home.certsTitle")}
              </div>
              <div className="flex flex-wrap gap-3">
                {CERTIFICATIONS.map((c) => (
                  <span key={c} className="px-4 py-2 rounded-full bg-[#F7F6F2] border border-[#5C5C5C]/15 text-[#1C3A1F] text-sm font-semibold">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-[#F7F6F2] py-20 md:py-28">
        <div className="container-pat">
          <div className="max-w-2xl mb-14">
            <Reveal><span className="eyebrow mb-4">{t("home.solutionsEyebrow")}</span></Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1C3A1F] tracking-tight leading-tight">{t("home.solutionsTitle")}</h2>
            </Reveal>
            <Reveal delay={0.2}><p className="mt-4 text-[#5C5C5C] text-lg">{t("home.solutionsSub")}</p></Reveal>
          </div>
          <StaggerGroup className="grid md:grid-cols-3 gap-6">
            {CATEGORY_CARDS.map((c) => (
              <motion.div key={c.slug} variants={staggerItem}>
                <Link
                  to={`/solutions/${c.slug === "bio-crop-protection" ? "bio-insecticides" : c.slug}`}
                  className="group block card-pat overflow-hidden hover:shadow-xl hover:-translate-y-1"
                  data-testid={`solution-card-${c.slug}`}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img src={c.image} alt={c.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 w-3 h-3 rounded-full" style={{ background: c.accent }} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-[#1C3A1F] leading-tight">{c.title[lang]}</h3>
                      <ArrowUpRight className="w-5 h-5 text-[#43B14B] shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                    <p className="mt-3 text-[#5C5C5C] text-sm leading-relaxed">{c.desc[lang]}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* DISCOVERY TEASER */}
      <section className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="container-pat">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal><span className="eyebrow mb-4">{t("home.discoveryEyebrow")}</span></Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1C3A1F] tracking-tight">{t("home.discoveryTitle")}</h2>
              </Reveal>
              <Reveal delay={0.2}><p className="mt-4 text-[#5C5C5C] text-lg max-w-md">{t("home.discoverySub")}</p></Reveal>

              <StaggerGroup className="mt-10 space-y-1" stagger={0.15}>
                {["bioprospecting", "stabilization", "deploy"].map((step, i) => (
                  <motion.div key={step} variants={staggerItem} className="flex gap-5 items-start relative pb-8">
                    {i < 2 && <span className="absolute left-[15px] top-9 bottom-0 w-px bg-[#43B14B]/30" />}
                    <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#43B14B] text-white text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#1C3A1F]">{t(`steps.${step}`)}</h4>
                      <p className="text-[#5C5C5C] text-sm mt-1">{t(`steps.${step}Desc`)}</p>
                    </div>
                  </motion.div>
                ))}
              </StaggerGroup>
              <Reveal delay={0.3}>
                <Link to="/about/oursciences" className="link-underline inline-flex items-center gap-1 mt-2">
                  {t("common.seeFullProcess")} <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Parallax distance={40}>
                <div className="rounded-[28px] overflow-hidden aspect-square shadow-xl">
                  <img src={IMAGES.expedition} alt="Field expedition" className="w-full h-full object-cover" />
                </div>
              </Parallax>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialCarousel />

      {/* CTA STRIP */}
      <section className="relative bg-[#1C3A1F] py-20 md:py-28 overflow-hidden grain">
        <MicrobeDots count={12} />
        <div className="container-pat relative text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance">{t("home.ctaTitle")}</h2>
          </Reveal>
          <Reveal delay={0.1}><p className="mt-5 text-white/70 text-lg">{t("home.ctaSub")}</p></Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/6285283790848"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-[#43B14B] hover:!bg-[#2D6A35]"
                data-testid="cta-whatsapp"
              >
                {t("common.chatWhatsapp")}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/40 rounded-full px-7 py-3 font-semibold hover:bg-white hover:text-[#1C3A1F] transition-colors">
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

  return (
    <section className="bg-[#F7F6F2] py-20 md:py-28" data-testid="home-testimonials">
      <div className="container-pat">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow mb-4">{t("home.testimonialsEyebrow")}</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1C3A1F] tracking-tight">{t("home.testimonialsTitle")}</h2>
          </div>
          <div className="flex gap-3">
            <button onClick={prev} aria-label="Previous" className="w-12 h-12 rounded-full border-2 border-[#1C3A1F] flex items-center justify-center hover:bg-[#1C3A1F] hover:text-white transition-colors" data-testid="testimonial-prev">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} aria-label="Next" className="w-12 h-12 rounded-full border-2 border-[#1C3A1F] flex items-center justify-center hover:bg-[#1C3A1F] hover:text-white transition-colors" data-testid="testimonial-next">
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
            className="bg-white rounded-3xl p-8 md:p-14 border border-[#5C5C5C]/10 shadow-sm"
          >
            <div className="text-[#43B14B] text-6xl font-serif leading-none mb-4">&ldquo;</div>
            <p className="text-2xl md:text-3xl font-medium text-[#1C3A1F] leading-snug max-w-4xl">
              {cur.quote[lang] || cur.quote.en}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-[#2D6A35] text-white flex items-center justify-center font-bold">
                {cur.name.charAt(0)}
              </span>
              <div>
                <div className="font-bold text-[#1C3A1F]">{cur.name}</div>
                <div className="text-sm text-[#5C5C5C] capitalize">{cur.role} · {cur.crop} · {cur.province}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-2 mt-6 justify-center">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-[#43B14B]" : "w-2 bg-[#5C5C5C]/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
