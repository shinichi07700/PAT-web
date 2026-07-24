import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Reveal, StaggerGroup } from "../lib/motion";
import { PRODUCTS, CATEGORY_PAGES } from "../data/content";
import PageHero from "../components/PageHero";
import { ProductCard } from "./Solutions";

export default function CategoryPage() {
  const { slug } = useParams();
  const { t, lang } = useLang();
  const cat = CATEGORY_PAGES[slug];

  if (!cat) return <Navigate to="/solutions" replace />;

  const products = PRODUCTS.filter((p) => p.categorySlug === slug);

  return (
    <div data-testid="category-page">
      <PageHero eyebrow={t("nav.solutions")} title={cat.title} intro={cat.desc[lang]} image={cat.image} />

      <section className="bg-white py-16 md:py-20">
        <div className="container-pat">
          <Reveal>
            <Link to="/solutions" className="inline-flex items-center gap-1 text-sm text-[#2D6A35] font-semibold hover:text-[#43B14B] mb-10">
              <ArrowLeft className="w-4 h-4" /> {t("nav.solutions")}
            </Link>
          </Reveal>

          {products.length > 0 ? (
            <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => <ProductCard key={p.slug} p={p} lang={lang} t={t} />)}
            </StaggerGroup>
          ) : (
            <div className="text-center py-16 bg-[#F7F6F2] rounded-2xl">
              <p className="text-[#5C5C5C]">{t("solutions.empty")}</p>
              <Link to="/contact" className="btn-primary mt-6">{t("common.talkToTeam")}</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
