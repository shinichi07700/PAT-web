import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, Download, X } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Reveal, StaggerGroup, staggerItem, MicrobeDots } from "../lib/motion";
import { ALL_PRODUCTS, SOLUTION_TYPES, CROPS } from "../data/content";
import PageHero from "../components/PageHero";

export function ProductCard({ p, lang, t }) {
  return (
    <motion.div variants={staggerItem}>
      <Link
        to={`/products/${p.slug}`}
        className="group block card-pat overflow-hidden h-full hover:shadow-xl hover:-translate-y-1"
        data-testid={`product-card-${p.slug}`}
      >
        <div className="relative h-44 overflow-hidden">
          <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <span className="badge-pat absolute top-3 left-3">{p.type}</span>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-extrabold text-[#1C3A1F] tracking-tight">{p.name}</h3>
            <ArrowUpRight className="w-5 h-5 text-[#43B14B] shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
          <p className="mt-2 text-[#5C5C5C] text-sm leading-relaxed line-clamp-3">{p.keyBenefit[lang]}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.crops.slice(0, 4).map((c) => (
              <span key={c} className="text-[11px] px-2 py-0.5 rounded-full bg-[#F7F6F2] text-[#5C5C5C] border border-[#5C5C5C]/10">{c}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Solutions() {
  const { t, lang } = useLang();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [crop, setCrop] = useState("");

  const filtered = useMemo(() => {
    return ALL_PRODUCTS.filter((p) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.crops.some((c) => c.toLowerCase().includes(q)) ||
        p.keyBenefit[lang].toLowerCase().includes(q);
      const matchType = !type || p.type === type;
      const matchCrop = !crop || p.crops.includes(crop);
      return matchSearch && matchType && matchCrop;
    });
  }, [search, type, crop, lang]);

  const hasFilters = search || type || crop;

  return (
    <div data-testid="solutions-page">
      <PageHero eyebrow={t("nav.solutions")} title={t("solutions.title")} intro={t("solutions.intro")} />

      <section className="bg-white py-16 md:py-20">
        <div className="container-pat">
          <Reveal><p className="text-[#5C5C5C] text-lg max-w-3xl mb-10">{t("solutions.body")}</p></Reveal>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5C5C5C]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("solutions.searchPlaceholder")}
              className="input-pat !pl-12 !py-4 text-base"
              data-testid="solutions-search"
            />
          </div>

          {/* Filters */}
          <div className="space-y-4 mb-4">
            <FilterRow label={t("solutions.filterType")} options={SOLUTION_TYPES} value={type} onChange={setType} testid="type" tAll={t("solutions.all")} />
            <FilterRow label={t("solutions.filterCrop")} options={CROPS} value={crop} onChange={setCrop} testid="crop" tAll={t("solutions.all")} />
          </div>

          <div className="flex items-center justify-between mb-8">
            <span className="text-sm text-[#5C5C5C]">{filtered.length} {t("solutions.resultsCount")}</span>
            {hasFilters && (
              <button
                onClick={() => { setSearch(""); setType(""); setCrop(""); }}
                className="flex items-center gap-1 text-sm text-[#2D6A35] font-semibold hover:text-[#43B14B]"
                data-testid="clear-filters"
              >
                <X className="w-4 h-4" /> {t("solutions.clear")}
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" key={`${type}-${crop}-${search}`}>
              {filtered.map((p) => <ProductCard key={p.slug} p={p} lang={lang} t={t} />)}
            </StaggerGroup>
          ) : (
            <div className="text-center py-16 bg-[#F7F6F2] rounded-2xl" data-testid="empty-state">
              <p className="text-[#5C5C5C] max-w-md mx-auto">{t("solutions.empty")}</p>
              <Link to="/contact" className="btn-primary mt-6">{t("common.talkToTeam")}</Link>
            </div>
          )}
        </div>
      </section>

      {/* Catalogue CTA */}
      <section className="bg-[#F7F6F2] py-16 relative overflow-hidden">
        <MicrobeDots count={10} />
        <div className="container-pat relative">
          <div className="bg-[#1C3A1F] rounded-3xl p-10 md:p-14 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{t("solutions.catalogueTitle")}</h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">{t("solutions.catalogueSub")}</p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button className="btn-primary !bg-[#43B14B] hover:!bg-[#2D6A35]" data-testid="download-catalogue" onClick={() => window.alert("Catalogue PDF coming soon.")}>
                <Download className="w-4 h-4" /> {t("common.downloadCatalogue")}
              </button>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/40 rounded-full px-7 py-3 font-semibold hover:bg-white hover:text-[#1C3A1F] transition-colors">
                {t("nav.contactUs")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FilterRow({ label, options, value, onChange, testid, tAll }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <span className="text-sm font-semibold text-[#1C3A1F] min-w-[110px]">{label}</span>
      <div className="flex flex-wrap gap-2">
        <Pill active={!value} onClick={() => onChange("")} testid={`${testid}-all`}>{tAll}</Pill>
        {options.map((o) => (
          <Pill key={o} active={value === o} onClick={() => onChange(value === o ? "" : o)} testid={`${testid}-${o}`}>{o}</Pill>
        ))}
      </div>
    </div>
  );
}

function Pill({ active, onClick, children, testid }) {
  return (
    <button
      onClick={onClick}
      data-testid={`filter-${testid}`}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
        active ? "bg-[#2D6A35] text-white border-[#2D6A35]" : "bg-white text-[#5C5C5C] border-[#5C5C5C]/20 hover:border-[#43B14B] hover:text-[#2D6A35]"
      }`}
    >
      {children}
    </button>
  );
}
