import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, ShieldCheck, Award } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Reveal, MicrobeDots } from "../lib/motion";
import { getProduct, getRelated, WHATSAPP_NUMBER } from "../data/content";

export default function ProductDetail() {
  const { slug } = useParams();
  const { t, lang } = useLang();
  const p = getProduct(slug);

  if (!p) return <Navigate to="/solutions" replace />;

  const related = getRelated(p);
  const waMsg = `Halo Prima Agro Tech, saya tertarik dengan produk ${p.name}. Bisa berikan info dosis & harga?`;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;

  return (
    <div data-testid="product-detail-page">
      {/* Header split */}
      <section className="pt-[72px] bg-[#F7F6F2]">
        <div className="container-pat py-10 md:py-16">
          <Link to={`/solutions/${p.categorySlug}`} className="inline-flex items-center gap-1 text-sm text-[#2D6A35] font-semibold hover:text-[#43B14B] mb-6 md:mb-8">
            <ArrowLeft className="w-4 h-4" /> {t("common.back")}
          </Link>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
              <div className="overflow-hidden aspect-[4/3] bg-white border border-[#5C5C5C]/15 shadow-xl relative flex items-center justify-center p-6" style={{ borderRadius: "0 32px 0 32px" }}>
                <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain" />
                <span className="badge-pat absolute top-3 left-3 md:top-4 md:left-4">{t(`solutions.types.${p.type}`) || p.type}</span>
              </div>
            </motion.div>
            <div>
              <Reveal>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#1C3A1F] tracking-tight">{p.name}</h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-3 md:mt-4 text-[#5C5C5C] text-base md:text-lg leading-relaxed">{p.keyBenefit[lang]}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-5 md:mt-6 space-y-2">
                  <div className="text-sm"><span className="text-[#5C5C5C]">{t("product.regNo")}: </span><span className="font-semibold text-[#1C3A1F]">{p.regNo}</span></div>
                  <div className="flex flex-wrap gap-1.5 pt-1 items-center">
                    <span className="text-sm text-[#5C5C5C] mr-1">{t("product.targetCrops")}:</span>
                    {p.crops.map((c) => (
                      <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-white border border-[#5C5C5C]/15 text-[#1C3A1F] font-medium">{t(`solutions.crops.${c}`) || c}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-primary !bg-[#43B14B] hover:!bg-[#2D6A35] justify-center w-full sm:w-auto text-center" data-testid="product-whatsapp">
                    <MessageCircle className="w-4 h-4" /> {t("common.chatWhatsapp")}
                  </a>
                  <Link to="/contact" className="btn-secondary justify-center w-full sm:w-auto text-center">{t("common.sendMessage")}</Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-10 md:py-20">
        <div className="container-pat max-w-4xl space-y-10 md:space-y-14">
          <Block title={t("product.whatItDoes")}>
            <p className="text-[#1A1A1A] text-base md:text-lg leading-relaxed">{p.what[lang]}</p>
          </Block>

          <Block title={t("product.formulation")}>
            <SpecTable rows={p.formulation} />
          </Block>

          <Block title={t("product.application")}>
            <DataTable head={["Crop", "Dosage", "Method", "Timing"]} rows={p.application} />
          </Block>

          <Block title={t("product.certifications")}>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {/* Organik Indonesia */}
              <div className="p-5 md:p-6 bg-[#F7F6F2] rounded-2xl border border-[#5C5C5C]/15 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#5C5C5C]/10 flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#0E6E19]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base md:text-lg text-[#1C3A1F] mb-1">Organik Indonesia</h3>
                  <p className="text-xs md:text-sm text-[#5C5C5C] leading-relaxed">
                    {t("product.certOrganikDesc")}
                  </p>
                </div>
              </div>

              {/* Control Union / USDA (INOFICE) */}
              <div className="p-5 md:p-6 bg-[#F7F6F2] rounded-2xl border border-[#5C5C5C]/15 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#5C5C5C]/10 flex items-center justify-center shrink-0 shadow-sm">
                  <Award className="w-6 h-6 text-[#2D6A35]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-extrabold text-base md:text-lg text-[#1C3A1F]">Control Union / USDA (INOFICE)</h3>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#FFF4E5] text-[#B76E00] border border-[#FFE2B8]">
                      {t("product.renewalTag")}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-[#5C5C5C] leading-relaxed">
                    {t("product.certControlUnionDesc")}
                  </p>
                </div>
              </div>
            </div>
          </Block>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#F7F6F2] py-12 md:py-20">
          <div className="container-pat">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C3A1F] tracking-tight">{t("product.related")}</h2>
            <p className="text-[#5C5C5C] text-sm md:text-base mt-1.5 mb-6 md:mb-8">{t("product.relatedSub")}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {related.map((r) => (
                <Link key={r.slug} to={`/products/${r.slug}`} className="group card-pat overflow-hidden hover:shadow-xl hover:-translate-y-1" data-testid={`related-${r.slug}`}>
                  <div className="h-36 overflow-hidden"><img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="p-5">
                    <span className="badge-pat mb-2">{t(`solutions.types.${r.type}`) || r.type}</span>
                    <h3 className="font-extrabold text-[#1C3A1F]">{r.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative bg-[#1C3A1F] py-12 md:py-20 overflow-hidden grain">
        <MicrobeDots count={10} />
        <div className="container-pat relative text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">{t("product.ctaTitle")} {p.name}?</h2>
          <p className="mt-3 md:mt-4 text-white/70 text-sm md:text-base">{t("product.ctaSub")}</p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 justify-center w-full max-w-xs sm:max-w-none mx-auto">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-primary !bg-[#43B14B] hover:!bg-[#2D6A35] justify-center">
              <MessageCircle className="w-4 h-4" /> {t("common.chatWhatsapp")}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/40 rounded-full px-7 py-3 font-semibold hover:bg-white hover:text-[#1C3A1F] transition-colors">
              {t("common.sendMessage")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Block({ title, children }) {
  return (
    <Reveal>
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1C3A1F] tracking-tight mb-4 flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#43B14B] shrink-0" /> {title}
        </h2>
        {children}
      </div>
    </Reveal>
  );
}

function SpecTable({ rows }) {
  return (
    <div className="rounded-2xl border border-[#5C5C5C]/15 overflow-hidden divide-y divide-[#5C5C5C]/10">
      {rows.map(([k, v], i) => (
        <div key={i} className={`flex flex-col sm:flex-row sm:items-center px-4 sm:px-5 py-3 sm:py-3.5 ${i % 2 ? "bg-white" : "bg-[#F7F6F2]"}`}>
          <span className="text-[#5C5C5C] text-xs sm:text-sm font-medium sm:w-2/5 mb-1 sm:mb-0">{k}</span>
          <span className="text-[#1A1A1A] text-xs sm:text-sm font-semibold sm:w-3/5 break-words">{v}</span>
        </div>
      ))}
    </div>
  );
}

function DataTable({ head, rows }) {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-[#5C5C5C]/15 overflow-x-auto touch-pan-x">
        <table className="w-full text-xs sm:text-sm min-w-[460px] sm:min-w-[520px]">
          <thead>
            <tr className="bg-[#1C3A1F] text-white">
              {head.map((h) => <th key={h} className="px-3.5 sm:px-5 py-3 text-left font-semibold">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={i % 2 ? "bg-[#F7F6F2]" : "bg-white"}>
                {r.map((cell, j) => (
                  <td key={j} className={`px-3.5 sm:px-5 py-3 sm:py-3.5 ${j === 0 ? "font-semibold text-[#1C3A1F]" : "text-[#1A1A1A]"}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="sm:hidden text-[11px] text-[#5C5C5C]/60 text-right mt-1 font-medium">← Geser tabel →</div>
    </div>
  );
}
