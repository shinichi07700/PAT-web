import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Quote, X, ExternalLink } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Reveal, StaggerGroup, staggerItem } from "../lib/motion";
import { SEED_TESTIMONIALS, FIELD_VIDEOS, IMAGES } from "../data/content";
import PageHero from "../components/PageHero";

const API = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL + "/api" : "";
const TARGET_EMAIL = "secretary@primaagrotech.com";

export default function Testimonials() {
  const { t, lang } = useLang();
  const items = SEED_TESTIMONIALS;
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div data-testid="testimonials-page">
      <PageHero eyebrow={t("testimonials.eyebrow")} title={t("testimonials.title")} intro={t("testimonials.intro")} image={IMAGES.farmerField} />

      {/* Video cards */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-pat">
          <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FIELD_VIDEOS.map((v, i) => (
              <motion.button
                key={i}
                variants={staggerItem}
                onClick={() => {
                  if (v.embedId) {
                    setActiveVideo(v);
                  } else if (v.url) {
                    window.open(v.url, "_blank", "noopener,noreferrer");
                  } else {
                    toast.info("Video embed coming soon.");
                  }
                }}
                className="group relative rounded-2xl overflow-hidden aspect-video text-left shadow-md hover:shadow-xl transition-shadow"
                data-testid={`video-card-${i}`}
              >
                <img src={v.thumb} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A1F]/90 via-[#1C3A1F]/40 to-transparent group-hover:from-[#1C3A1F]/95 group-hover:via-[#1C3A1F]/30 transition-colors" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#43B14B] shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2D6A35] transition-all">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </span>
                </span>
                <span className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm md:text-base drop-shadow-sm">{v.title}</span>
              </motion.button>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Video Modal Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/95 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.embedId}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="p-4 bg-[#1C3A1F] text-white flex items-center justify-between gap-4">
                <span className="font-bold text-sm md:text-base">{activeVideo.title}</span>
                <a
                  href={activeVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#43B14B] hover:text-[#90E096] underline inline-flex items-center gap-1 shrink-0"
                >
                  Buka di YouTube <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Text testimonials grid */}
      <section className="bg-[#F7F6F2] py-16 md:py-24">
        <div className="container-pat">
          <StaggerGroup className="grid md:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="p-8 bg-white shadow-md border border-gray-100" style={{ borderRadius: '0 24px 0 24px' }} data-testid={`testimonial-${i}`}>
                <Quote className="w-8 h-8 text-[#43B14B] mb-4" />
                <p className="text-lg text-[#1C3A1F] leading-relaxed">{item.quote[lang] || item.quote.en}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-[#2D6A35] text-white flex items-center justify-center font-bold">{item.name.charAt(0)}</span>
                  <div>
                    <div className="font-bold text-[#1C3A1F]">{item.name}</div>
                    <div className="text-sm text-[#5C5C5C] capitalize">
                      {typeof item.role === "object" ? (item.role[lang] || item.role.en) : item.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Submission form */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-pat max-w-2xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C3A1F] tracking-tight">{t("testimonials.formTitle")}</h2>
            <p className="mt-3 text-[#5C5C5C]">{t("testimonials.formSub")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <TestimonialForm onDone={() => {}} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function TestimonialForm({ onDone }) {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", role: "farmer", crop: "", province: "", product: "", quote: "" });
  const [loading, setLoading] = useState(false);
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const roleOptions = [
    { value: "farmer", label: t("testimonials.roles.farmer") },
    { value: "distributor", label: t("testimonials.roles.distributor") },
    { value: "store", label: t("testimonials.roles.store") },
    { value: "plantation", label: t("testimonials.roles.plantation") },
    { value: "institution", label: t("testimonials.roles.institution") },
  ];

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const selectedRoleObj = roleOptions.find((r) => r.value === form.role);
      const displayRole = selectedRoleObj ? selectedRoleObj.label : form.role;

      const emailPayload = {
        _subject: `New Testimonial Submitted by ${form.name}`,
        _captcha: "false",
        _template: "table",
        "Full Name": form.name,
        "Role": displayRole,
        "Crop": form.crop || "-",
        "Province": form.province || "-",
        "Product Used": form.product || "-",
        "Testimonial Story": form.quote,
      };

      await axios.post(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, emailPayload);

      if (API) {
        axios.post(`${API}/testimonials`, { ...form, role: displayRole }).catch(() => {});
      }

      toast.success(t("testimonials.thanks"));
      setForm({ name: "", role: "farmer", crop: "", province: "", product: "", quote: "" });
      onDone && onDone();
    } catch {
      toast.error(t("contact.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="mt-8 space-y-5" data-testid="testimonial-form">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="label-pat">{t("testimonials.fullName") || t("contact.name")}</label>
          <input required value={form.name} onChange={upd("name")} className="input-pat" data-testid="testimonial-name" />
        </div>
        <div>
          <label className="label-pat">{t("testimonials.role")}</label>
          <select value={form.role} onChange={upd("role")} className="input-pat" data-testid="testimonial-role">
            {roleOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="label-pat">{t("testimonials.crop")}</label>
          <input value={form.crop} onChange={upd("crop")} className="input-pat" data-testid="testimonial-crop" />
        </div>
        <div>
          <label className="label-pat">{t("testimonials.province")}</label>
          <input value={form.province} onChange={upd("province")} className="input-pat" data-testid="testimonial-province" />
        </div>
      </div>
      <div>
        <label className="label-pat">{t("testimonials.productUsed")}</label>
        <input value={form.product} onChange={upd("product")} className="input-pat" data-testid="testimonial-product" />
      </div>
      <div>
        <label className="label-pat">{t("testimonials.yourStory")}</label>
        <textarea required rows={4} value={form.quote} onChange={upd("quote")} className="input-pat resize-none" data-testid="testimonial-quote" />
      </div>
      <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60" data-testid="testimonial-submit">
        {loading ? t("contact.sending") : t("testimonials.submit")}
      </button>
    </form>
  );
}
