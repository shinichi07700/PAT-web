import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download, FileText, CheckCircle2, MessageCircle } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Reveal, MicrobeDots } from "../lib/motion";
import { getProduct, getRelated, CERTIFICATIONS, WHATSAPP_NUMBER } from "../data/content";

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
        <div className="container-pat py-12 md:py-16">
          <Link to={`/solutions/${p.categorySlug}`} className="inline-flex items-center gap-1 text-sm text-[#2D6A35] font-semibold hover:text-[#43B14B] mb-8">
            <ArrowLeft className="w-4 h-4" /> {t("common.back")}
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
              <div className="rounded-[28px] overflow-hidden aspect-[4/3] shadow-xl relative">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <span className="badge-pat absolute top-4 left-4">{p.type}</span>
              </div>
            </motion.div>
            <div>
              <Reveal>
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#1C3A1F] tracking-tight">{p.name}</h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-[#5C5C5C] text-lg leading-relaxed">{p.keyBenefit[lang]}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-6 space-y-2">
                  <div className="text-sm"><span className="text-[#5C5C5C]">{t("product.regNo")}: </span><span className="font-semibold text-[#1C3A1F]">{p.regNo}</span></div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-sm text-[#5C5C5C] mr-1">{t("product.targetCrops")}:</span>
                    {p.crops.map((c) => (
                      <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-white border border-[#5C5C5C]/15 text-[#1C3A1F]">{c}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-primary !bg-[#43B14B] hover:!bg-[#2D6A35]" data-testid="product-whatsapp">
                    <MessageCircle className="w-4 h-4" /> {t("common.chatWhatsapp")}
                  </a>
                  <Link to="/contact" className="btn-secondary">{t("common.sendMessage")}</Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-pat grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-14">
            <Block title={t("product.whatItDoes")}>
              <p className="text-[#1A1A1A] text-lg leading-relaxed">{p.what[lang]}</p>
            </Block>

            <Block title={t("product.formulation")}>
              <SpecTable rows={p.formulation} />
            </Block>

            <Block title={t("product.application")}>
              <DataTable head={["Crop", "Dosage", "Method", "Timing"]} rows={p.application} />
            </Block>

            <Block title={t("product.trials")}>
              <DataTable head={["Trial", "Partner", "Duration", "Outcome vs control"]} rows={p.trials} />
            </Block>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="card-pat p-6 bg-[#F7F6F2]">
              <h4 className="font-bold text-[#1C3A1F] mb-4">{t("product.certifications")}</h4>
              <ul className="space-y-2.5">
                {CERTIFICATIONS.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-[#1A1A1A]">
                    <CheckCircle2 className="w-4 h-4 text-[#43B14B] shrink-0 mt-0.5" /> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-pat p-6">
              <h4 className="font-bold text-[#1C3A1F] mb-4">{t("product.downloads")}</h4>
              <div className="space-y-3">
                {[t("product.brochure"), t("product.catalogue")].map((d) => (
                  <button key={d} onClick={() => window.alert("PDF coming soon.")} className="flex items-center gap-3 w-full text-left text-sm text-[#2D6A35] font-semibold hover:text-[#43B14B]">
                    <FileText className="w-4 h-4" /> {d}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#F7F6F2] py-16 md:py-20">
          <div className="container-pat">
            <h2 className="text-3xl font-extrabold text-[#1C3A1F] tracking-tight">{t("product.related")}</h2>
            <p className="text-[#5C5C5C] mt-2 mb-8">{t("product.relatedSub")}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} to={`/products/${r.slug}`} className="group card-pat overflow-hidden hover:shadow-xl hover:-translate-y-1" data-testid={`related-${r.slug}`}>
                  <div className="h-36 overflow-hidden"><img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="p-5">
                    <span className="badge-pat mb-2">{r.type}</span>
                    <h3 className="font-extrabold text-[#1C3A1F]">{r.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative bg-[#1C3A1F] py-16 md:py-20 overflow-hidden grain">
        <MicrobeDots count={10} />
        <div className="container-pat relative text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{t("product.ctaTitle")} {p.name}?</h2>
          <p className="mt-4 text-white/70">{t("product.ctaSub")}</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-primary !bg-[#43B14B] hover:!bg-[#2D6A35]">
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
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C3A1F] tracking-tight mb-5 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#43B14B]" /> {title}
        </h2>
        {children}
      </div>
    </Reveal>
  );
}

function SpecTable({ rows }) {
  return (
    <div className="rounded-2xl border border-[#5C5C5C]/15 overflow-hidden">
      <table className="w-full text-sm">
        <tbody>
          {rows.map(([k, v], i) => (
            <tr key={i} className={i % 2 ? "bg-white" : "bg-[#F7F6F2]"}>
              <td className="px-5 py-3.5 text-[#5C5C5C] font-medium w-2/5">{k}</td>
              <td className="px-5 py-3.5 text-[#1A1A1A] font-semibold">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DataTable({ head, rows }) {
  return (
    <div className="rounded-2xl border border-[#5C5C5C]/15 overflow-x-auto">
      <table className="w-full text-sm min-w-[520px]">
        <thead>
          <tr className="bg-[#1C3A1F] text-white">
            {head.map((h) => <th key={h} className="px-5 py-3 text-left font-semibold">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? "bg-[#F7F6F2]" : "bg-white"}>
              {r.map((cell, j) => (
                <td key={j} className={`px-5 py-3.5 ${j === 0 ? "font-semibold text-[#1C3A1F]" : "text-[#1A1A1A]"}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
