import React from "react";
import { MapPin, FlaskConical, Instagram, Youtube, Linkedin } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Reveal } from "../lib/motion";
import { WHATSAPP_NUMBER } from "../data/content";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const { t } = useLang();
  return (
    <div data-testid="contact-page">
      <PageHero eyebrow={t("contact.eyebrow")} title={t("contact.title")} intro={t("contact.intro")} />
      <section className="bg-white py-16 md:py-24">
        <div className="container-pat grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <Reveal><ContactForm source="contact" /></Reveal>
          </div>
          <div className="lg:col-span-2 space-y-5">
            <Reveal>
              <InfoCard icon={MapPin} title={t("contact.officeTitle")} lines={[t("contact.office")]} />
            </Reveal>
            <Reveal delay={0.05}>
              <InfoCard icon={FlaskConical} title={t("contact.labTitle")} lines={[t("contact.lab")]} />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card-pat p-6 bg-[#F7F6F2]">
                <h4 className="font-bold text-[#1C3A1F] mb-1">{t("contact.whatsappTitle")}</h4>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="link-underline" data-testid="contact-whatsapp-link">
                  +62 852-8379-0848
                </a>
                <p className="text-sm text-[#5C5C5C] mt-1">secretary@primaagrotech.com</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="card-pat p-6">
                <h4 className="font-bold text-[#1C3A1F] mb-3">{t("contact.followTitle")}</h4>
                <div className="flex gap-3">
                  {[{ Icon: Instagram, l: "Instagram" }, { Icon: Youtube, l: "YouTube" }, { Icon: Linkedin, l: "LinkedIn" }].map(({ Icon, l }) => (
                    <a key={l} href="#" aria-label={l} className="w-11 h-11 rounded-full border border-[#5C5C5C]/20 flex items-center justify-center text-[#1C3A1F] hover:border-[#43B14B] hover:text-[#43B14B] transition-colors">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }) {
  return (
    <div className="card-pat p-6">
      <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#F7F6F2] mb-3">
        <Icon className="w-5 h-5 text-[#43B14B]" />
      </span>
      <h4 className="font-bold text-[#1C3A1F]">{title}</h4>
      {lines.map((l, i) => <p key={i} className="text-sm text-[#5C5C5C] mt-1">{l}</p>)}
    </div>
  );
}
