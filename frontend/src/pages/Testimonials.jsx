import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Reveal, StaggerGroup, staggerItem } from "../lib/motion";
import { SEED_TESTIMONIALS, IMAGES } from "../data/content";
import PageHero from "../components/PageHero";

const API = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL + "/api" : "";
const TARGET_EMAIL = "secretary@primaagrotech.com";

const VIDEOS = [
  { title: "Cerita Tani — Padi, Jawa Barat", thumb: IMAGES.ricePaddy },
  { title: "Cerita Tani — Sawit, Riau", thumb: IMAGES.palmOil },
  { title: "Cerita Tani — Cabai, Brebes", thumb: IMAGES.greenhouse },
];

export default function Testimonials() {
  const { t, lang } = useLang();
  const [items, setItems] = useState(SEED_TESTIMONIALS);

  const refresh = () => {
    if (!API) return;
    axios.get(`${API}/testimonials?approved_only=true`)
      .then((r) => {
        if (Array.isArray(r.data) && r.data.length) {
          const mapped = r.data.map((d) => ({ ...d, quote: { en: d.quote, id: d.quote } }));
          setItems([...mapped, ...SEED_TESTIMONIALS]);
        }
      })
      .catch(() => {});
  };
  useEffect(refresh, []);

  return (
    <div data-testid="testimonials-page">
      <PageHero eyebrow={t("testimonials.eyebrow")} title={t("testimonials.title")} intro={t("testimonials.intro")} image={IMAGES.farmerField} />

      {/* Video cards */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-pat">
          <StaggerGroup className="grid md:grid-cols-3 gap-6">
            {VIDEOS.map((v, i) => (
              <motion.button
                key={i}
                variants={staggerItem}
                onClick={() => toast.info("Video embed coming soon.")}
                className="group relative rounded-2xl overflow-hidden aspect-video text-left"
                data-testid={`video-card-${i}`}
              >
                <img src={v.thumb} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#1C3A1F]/40 group-hover:bg-[#1C3A1F]/25 transition-colors" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 rounded-full bg-[#43B14B] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </span>
                </span>
                <span className="absolute bottom-4 left-4 right-4 text-white font-semibold">{v.title}</span>
              </motion.button>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Text testimonials grid */}
      <section className="bg-[#F7F6F2] py-16 md:py-24">
        <div className="container-pat">
          <StaggerGroup className="grid md:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="card-pat p-8 bg-white" data-testid={`testimonial-${i}`}>
                <Quote className="w-8 h-8 text-[#43B14B] mb-4" />
                <p className="text-lg text-[#1C3A1F] leading-relaxed">{item.quote[lang] || item.quote.en}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-[#2D6A35] text-white flex items-center justify-center font-bold">{item.name.charAt(0)}</span>
                  <div>
                    <div className="font-bold text-[#1C3A1F]">{item.name}</div>
                    <div className="text-sm text-[#5C5C5C] capitalize">{item.role} · {item.crop} · {item.province}</div>
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
            <TestimonialForm onDone={refresh} />
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

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const emailPayload = {
        _subject: `New Testimonial Submitted by ${form.name}`,
        _captcha: "false",
        _template: "table",
        "Full Name": form.name,
        "Role": form.role,
        "Crop": form.crop || "-",
        "Province": form.province || "-",
        "Product Used": form.product || "-",
        "Testimonial Story": form.quote,
      };

      await axios.post(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, emailPayload);

      if (API) {
        axios.post(`${API}/testimonials`, form).catch(() => {});
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
          <label className="label-pat">{t("contact.name")}</label>
          <input required value={form.name} onChange={upd("name")} className="input-pat" data-testid="testimonial-name" />
        </div>
        <div>
          <label className="label-pat">Role</label>
          <select value={form.role} onChange={upd("role")} className="input-pat" data-testid="testimonial-role">
            <option value="farmer">Farmer</option>
            <option value="dealer">Dealer</option>
            <option value="plantation">Plantation</option>
          </select>
        </div>
        <div>
          <label className="label-pat">Crop</label>
          <input value={form.crop} onChange={upd("crop")} className="input-pat" data-testid="testimonial-crop" />
        </div>
        <div>
          <label className="label-pat">Province</label>
          <input value={form.province} onChange={upd("province")} className="input-pat" data-testid="testimonial-province" />
        </div>
      </div>
      <div>
        <label className="label-pat">Product used</label>
        <input value={form.product} onChange={upd("product")} className="input-pat" data-testid="testimonial-product" />
      </div>
      <div>
        <label className="label-pat">Your story</label>
        <textarea required rows={4} value={form.quote} onChange={upd("quote")} className="input-pat resize-none" data-testid="testimonial-quote" />
      </div>
      <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60" data-testid="testimonial-submit">
        {loading ? t("contact.sending") : t("testimonials.submit")}
      </button>
    </form>
  );
}
