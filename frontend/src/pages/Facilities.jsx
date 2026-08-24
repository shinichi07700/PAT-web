import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Award, FileText, CheckCircle2, X } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Reveal, Parallax, StaggerGroup, staggerItem } from "../lib/motion";
import { IMAGES } from "../data/content";
import PageHero from "../components/PageHero";

export default function Facilities() {
  const { t } = useLang();
  const [showKanCert, setShowKanCert] = useState(false);

  const blocks = [
    { title: t("facilities.title"), body: t("facilities.intro"), image: IMAGES.production, tag: "Location", icon: true },
    { title: t("facilities.labTitle"), body: t("facilities.lab"), image: IMAGES.lab, tag: "R&D Laboratory" },
    { title: t("facilities.prodTitle"), body: t("facilities.prod"), image: IMAGES.testTubes, tag: "Production" },
  ];

  return (
    <div data-testid="facilities-page">
      <PageHero eyebrow={t("facilities.eyebrow")} title={t("facilities.title")} intro={t("facilities.intro")} image={IMAGES.production} />
      
      {/* Facilities Overview Blocks */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-pat space-y-20 md:space-y-28">
          {blocks.map((b, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`} data-testid={`facility-block-${i}`}>
              <Reveal className={i % 2 ? "lg:order-2" : ""}>
                <span className="eyebrow mb-4">{b.tag}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C3A1F] tracking-tight">{b.title}</h2>
                <p className="mt-5 text-[#5C5C5C] text-lg leading-relaxed">{b.body}</p>
                {b.icon && (
                  <div className="mt-6 flex flex-col gap-2 text-sm text-[#1A1A1A]">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#43B14B]" /> Penjaringan, Jakarta — Head Office</span>
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#43B14B]" /> Karawaci, Tangerang, Banten — Lab & Production</span>
                  </div>
                )}
              </Reveal>
              <Reveal className={i % 2 ? "lg:order-1" : ""} delay={0.1}>
                <Parallax distance={40}>
                  <div className="rounded-[28px] overflow-hidden aspect-[4/3] shadow-xl">
                    <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
                  </div>
                </Parallax>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Lab Accreditations & Quality Certifications */}
      <section className="bg-[#F7F6F2] py-16 md:py-24 border-t border-[#5C5C5C]/10" data-testid="facilities-accreditations">
        <div className="container-pat">
          <div className="max-w-2xl mb-12">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C3A1F] tracking-tight">
                {t("facilities.accreditationsTitle")}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 text-[#5C5C5C] text-base md:text-lg leading-relaxed">
                {t("facilities.accreditationsSubtitle")}
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* KAN Card: Text badge LP-1789-IDN + View Certificate */}
            <div className="bg-white p-7 md:p-8 rounded-[24px] border border-[#5C5C5C]/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between" data-testid="accreditation-kan">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#1C3A1F] text-white text-xs font-bold tracking-wider rounded-md">
                    LP-1789-IDN
                  </span>
                  <Award className="w-5 h-5 text-[#43B14B]" />
                </div>
                <h3 className="text-xl font-extrabold text-[#1C3A1F] mb-1.5">{t("facilities.kanTitle")}</h3>
                <div className="text-xs font-semibold text-[#0E6E19] mb-3">{t("facilities.kanNumber")}</div>
                <p className="text-sm text-[#5C5C5C] leading-relaxed mb-6">{t("facilities.kanDesc")}</p>
              </div>
              <div>
                <button
                  onClick={() => setShowKanCert(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E6E19] hover:text-[#064016] transition-colors"
                >
                  <FileText className="w-4 h-4" /> {t("facilities.viewCert")} →
                </button>
              </div>
            </div>

            {/* ISO 17025 Card: Text-only credential */}
            <div className="bg-white p-7 md:p-8 rounded-[24px] border border-[#5C5C5C]/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between" data-testid="accreditation-iso17025">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#F7F6F2] border border-[#5C5C5C]/20 text-[#1C3A1F] text-xs font-bold tracking-wider rounded-md">
                    ISO / IEC Standard
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-[#43B14B]" />
                </div>
                <h3 className="text-xl font-extrabold text-[#1C3A1F] mb-1.5">{t("facilities.iso17025Title")}</h3>
                <div className="text-xs font-semibold text-[#0E6E19] mb-3">{t("facilities.iso17025Subtitle")}</div>
                <p className="text-sm text-[#5C5C5C] leading-relaxed">{t("facilities.iso17025Desc")}</p>
              </div>
            </div>

            {/* ISO 9001:2015 TÜV SÜD Card */}
            <div className="bg-white p-7 md:p-8 rounded-[24px] border border-[#5C5C5C]/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between" data-testid="accreditation-iso9001">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#0E6E19]/10 text-[#0E6E19] text-xs font-bold tracking-wider rounded-md">
                    TÜV SÜD
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-[#43B14B]" />
                </div>
                <h3 className="text-xl font-extrabold text-[#1C3A1F] mb-1.5">{t("facilities.iso9001Title")}</h3>
                <div className="text-xs font-semibold text-[#0E6E19] mb-3">{t("facilities.iso9001Subtitle")}</div>
                <p className="text-sm text-[#5C5C5C] leading-relaxed">{t("facilities.iso9001Desc")}</p>
              </div>
            </div>
          </StaggerGroup>

          {/* Certificate Modal */}
          {showKanCert && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative">
                <button
                  onClick={() => setShowKanCert(false)}
                  className="absolute top-5 right-5 p-1.5 text-gray-400 hover:text-gray-700 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-7 h-7 text-[#0E6E19]" />
                  <div>
                    <h4 className="font-extrabold text-lg text-[#1C3A1F]">Komite Akreditasi Nasional</h4>
                    <span className="text-xs text-[#5C5C5C]">Akreditasi Laboratorium Penguji</span>
                  </div>
                </div>
                <div className="bg-[#F7F6F2] p-4 rounded-xl space-y-2 text-sm text-[#1A1A1A] my-4">
                  <div><strong>Nomor Akreditasi:</strong> LP-1789-IDN</div>
                  <div><strong>Standar:</strong> SNI ISO/IEC 17025:2017</div>
                  <div><strong>Institusi:</strong> PT. Prima Agro Tech Testing Laboratory</div>
                  <div><strong>Lokasi:</strong> Karawaci, Tangerang, Banten</div>
                </div>
                <p className="text-xs text-[#5C5C5C] leading-relaxed mb-6">
                  Sertifikat akreditasi resmi diterbitkan oleh Komite Akreditasi Nasional (KAN) untuk pengujian biologi dan mikrobiologi pertanian.
                </p>
                <button
                  onClick={() => setShowKanCert(false)}
                  className="w-full btn-primary !bg-[#0E6E19] hover:!bg-[#064016] text-center justify-center"
                >
                  Tutup
                </button>
              </div>
            </div>
          )}

          <div className="text-center mt-16">
            <Link to="/about/oursciences" className="btn-leaf inline-flex items-center gap-2">
              {t("facilities.closing")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
