import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowRight, X } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Reveal, StaggerGroup, staggerItem } from "../lib/motion";
import { ALL_PRODUCTS, SOLUTION_TYPES, CROPS } from "../data/content";
import PageHero from "../components/PageHero";

const PRIORITY_SLUGS = [
  "decopalma",
  "humatop",
  "bt-max",
  "endopalma",
  "entomobac",
  "biotracol",
  "seudoflor",
  "decoprima",
  "orizaplus",
];

export function ProductCard({ p, lang }) {
  const { t } = useLang();
  const displayTags = p.cardCrops && p.cardCrops.length > 0 ? p.cardCrops : p.crops.slice(0, 3);
  
  return (
    <motion.div variants={staggerItem}>
      <Link
        to={`/products/${p.slug}`}
        className="group block bg-white border border-[#5C5C5C]/15 shadow-sm hover:shadow-[0_10px_30px_rgba(43,173,65,0.18)] hover:border-[#2BAD41] active:border-[#2BAD41] active:ring-2 active:ring-[#2BAD41]/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
        style={{ borderRadius: "0 28px 0 28px" }}
        data-testid={`product-card-${p.slug}`}
      >
        <div className="flex flex-col sm:flex-row items-stretch h-full">
          {/* Left Column: Product Mockup Image */}
          <div
            className="w-full sm:w-[44%] p-4 sm:p-6 flex items-center justify-center bg-gradient-to-br from-[#F7F6F2] via-[#F7F6F2]/80 to-white/50 shrink-0 border-b sm:border-b-0 sm:border-r border-[#5C5C5C]/10"
            style={{ borderBottomLeftRadius: "24px" }}
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-44 sm:h-52 w-auto max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Column: Info & Details */}
          <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-[#0E6E19] block mb-1">
                {t(`solutions.types.${p.type}`) || p.type}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1C3A1F] tracking-tight group-hover:text-[#0E6E19] transition-colors">
                {p.name.toUpperCase()}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5C5C5C] leading-relaxed line-clamp-2">
                {p.keyBenefit[lang] || p.keyBenefit.en}
              </p>
            </div>

            <div className="mt-4">
              {displayTags.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {displayTags.map((c) => (
                    <span
                      key={c}
                      style={{ borderRadius: "0 6px 0 6px" }}
                      className="text-[11px] px-2.5 py-0.5 border border-[#5C5C5C]/25 text-[#5C5C5C] bg-[#F7F6F2]/60 font-medium"
                    >
                      {t(`solutions.crops.${c}`) || c}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="h-5" />
              )}

              <div className="mt-4 pt-3 border-t border-[#5C5C5C]/10 flex items-center">
                <span className="text-xs sm:text-sm font-bold text-[#2D6A35] group-hover:text-[#43B14B] inline-flex items-center gap-1.5 transition-colors">
                  {t("common.learnMore")} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Solutions() {
  const { t, lang } = useLang();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [crop, setCrop] = useState("");

  const typeParam = searchParams.get("type") || "";
  const selectedTypes = useMemo(() => {
    return typeParam ? typeParam.split(",").map((s) => s.trim()).filter(Boolean) : [];
  }, [typeParam]);

  const handleTypeToggle = (targetType) => {
    const next = new URLSearchParams(searchParams);
    if (!targetType) {
      next.delete("type");
      setSearchParams(next);
      return;
    }

    let updated = [];
    if (selectedTypes.includes(targetType)) {
      updated = selectedTypes.filter((t) => t !== targetType);
    } else {
      updated = [...selectedTypes, targetType];
    }

    if (updated.length > 0) {
      next.set("type", updated.join(","));
    } else {
      next.delete("type");
    }
    setSearchParams(next);
  };

  const filtered = useMemo(() => {
    const list = ALL_PRODUCTS.filter((p) => {
      const q = search.toLowerCase();
      const typeTranslated = (t(`solutions.types.${p.type}`) || "").toLowerCase();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        typeTranslated.includes(q) ||
        (p.activeOrganism && p.activeOrganism.toLowerCase().includes(q)) ||
        (p.formulation && p.formulation.some(([k, v]) => v.toLowerCase().includes(q))) ||
        p.crops.some((c) => c.toLowerCase().includes(q) || (t(`solutions.crops.${c}`) || "").toLowerCase().includes(q)) ||
        (p.keyBenefit && (p.keyBenefit[lang] || p.keyBenefit.en || "").toLowerCase().includes(q));
      const matchType = selectedTypes.length === 0 || selectedTypes.includes(p.type);
      const matchCrop = !crop || p.crops.includes(crop);
      return matchSearch && matchType && matchCrop;
    });

    return list.sort((a, b) => {
      const idxA = PRIORITY_SLUGS.indexOf(a.slug);
      const idxB = PRIORITY_SLUGS.indexOf(b.slug);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return 0;
    });
  }, [search, selectedTypes, crop, lang, t]);

  const hasFilters = Boolean(search || selectedTypes.length > 0 || crop);

  const clearAllFilters = () => {
    setSearch("");
    setCrop("");
    const next = new URLSearchParams(searchParams);
    next.delete("type");
    setSearchParams(next);
  };

  // Show all products matching filters (or all 31 products when All is selected)
  const displayedProducts = filtered;

  return (
    <div data-testid="solutions-page" className="min-h-screen bg-white">
      {/* Dark Forest Green Hero with Animated Microbe Dots and Wording */}
      <PageHero
        title={t("solutions.title")}
        intro={t("solutions.intro")}
      />

      {/* Main Content Section */}
      <section className="py-10 md:py-14">
        <div className="container-pat">
          {/* Search Bar matching mockup with Leaf Design */}
          <div className="max-w-2xl mb-8">
            <div
              className="flex items-center border border-[#5C5C5C]/25 p-1.5 bg-white shadow-sm hover:border-[#0E6E19] transition-colors"
              style={{ borderRadius: "0 24px 0 24px" }}
            >
              <button
                className="bg-[#0E6E19] hover:bg-[#064016] text-white px-5 py-2.5 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors shrink-0 shadow-sm"
                style={{ borderRadius: "0 16px 0 16px" }}
              >
                <span>{t("solutions.searchButton")}</span>
                <Search className="w-3.5 h-3.5" />
              </button>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("solutions.searchPlaceholder")}
                className="w-full pl-3 pr-4 text-xs sm:text-sm text-[#1A1A1A] placeholder-[#5C5C5C]/60 bg-transparent outline-none border-none"
                data-testid="solutions-search"
              />
              {search && (
                <button onClick={() => setSearch("")} className="p-1.5 text-[#5C5C5C] hover:text-[#1C3A1F]">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Filters matching mockup with Leaf design buttons */}
          <div className="space-y-4 mb-8">
            <FilterButtonGroup
              label={t("solutions.filterType")}
              options={SOLUTION_TYPES}
              selected={selectedTypes}
              onToggle={handleTypeToggle}
              isMultiSelect={true}
              formatDisplay={(type) => t(`solutions.types.${type}`) || type}
              allLabel={t("solutions.all")}
            />
            <FilterButtonGroup
              label={t("solutions.filterCrop")}
              options={CROPS}
              selected={crop ? [crop] : []}
              onToggle={(c) => setCrop(crop === c ? "" : c)}
              isMultiSelect={false}
              formatDisplay={(c) => t(`solutions.crops.${c}`) || c}
              allLabel={t("solutions.all")}
            />
          </div>

          {/* Result Count and Clear Filters */}
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#5C5C5C]/10">
            <h2 className="text-base sm:text-lg font-bold text-[#1C3A1F]">
              {displayedProducts.length} {lang === "id" ? "Produk" : "Products"}
            </h2>
            {hasFilters && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-1 text-xs sm:text-sm text-[#0E6E19] font-semibold hover:text-[#064016]"
                data-testid="clear-filters"
              >
                <X className="w-3.5 h-3.5" /> {t("solutions.clear")}
              </button>
            )}
          </div>

          {/* Products Grid: 2 columns with horizontal leaf cards */}
          {displayedProducts.length > 0 ? (
            <StaggerGroup className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8" key={`${selectedTypes.join("-")}-${crop}-${search}`}>
              {displayedProducts.map((p) => (
                <ProductCard key={p.slug} p={p} lang={lang} />
              ))}
            </StaggerGroup>
          ) : (
            <div className="text-center py-16 bg-[#F7F6F2] rounded-3xl border border-[#5C5C5C]/15" data-testid="empty-state">
              <p className="text-[#5C5C5C] max-w-md mx-auto">{t("solutions.empty")}</p>
              <button onClick={clearAllFilters} className="btn-primary mt-6">
                {t("solutions.clear")}
              </button>
            </div>
          )}

          {/* Bottom CTA to About Us */}
          <div className="mt-16 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#0E6E19] hover:bg-[#064016] text-white px-8 py-3.5 text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300"
              style={{ borderRadius: "0 18px 0 18px" }}
              data-testid="solutions-about-cta"
            >
              <span>{lang === "id" ? "Kenali Kami Lebih Dekat" : "Get to Know Us"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FilterButtonGroup({ label, options, selected, onToggle, isMultiSelect, formatDisplay, allLabel = "All" }) {
  const isAllActive = selected.length === 0;

  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-2.5 sm:gap-4">
      <span className="text-xs sm:text-sm font-bold text-[#1C3A1F] min-w-[110px] pt-1.5 shrink-0">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {/* 'All' Button with Leaf Shape */}
        <button
          onClick={() => onToggle("")}
          style={{ borderRadius: "0 10px 0 10px" }}
          className={`px-4 py-1.5 text-xs font-semibold transition-all border ${
            isAllActive
              ? "bg-[#0E6E19] text-white border-[#0E6E19] shadow-sm"
              : "bg-white text-[#5C5C5C] border-[#5C5C5C]/25 hover:border-[#0E6E19] hover:text-[#0E6E19]"
          }`}
        >
          {allLabel}
        </button>

        {/* Options with Leaf Shape */}
        {options.map((opt) => {
          const active = selected.includes(opt);
          const displayLabel = formatDisplay ? formatDisplay(opt) : opt;
          return (
            <button
              key={opt}
              onClick={() => onToggle(opt)}
              style={{ borderRadius: "0 10px 0 10px" }}
              className={`px-4 py-1.5 text-xs font-semibold transition-all border ${
                active
                  ? "bg-[#0E6E19] text-white border-[#0E6E19] shadow-sm"
                  : "bg-white text-[#5C5C5C] border-[#5C5C5C]/25 hover:border-[#0E6E19] hover:text-[#0E6E19]"
              }`}
            >
              {displayLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
}
