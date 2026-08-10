import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Marquee } from "../lib/motion";
import { WHATSAPP_NUMBER } from "../data/content";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-white relative overflow-hidden pt-8 pb-12" data-testid="footer">
      {/* Running Marquee Text - Kept at top */}
      <div className="mb-8">
        <Marquee
          text="GROW MORE · HARM LESS · WITH MICROBES ·"
          className="py-4 border-y border-gray-100 text-[#0E6E19]/15 font-extrabold text-4xl md:text-6xl tracking-tight"
          duration={30}
        />
      </div>

      <div className="container-pat">
        {/* Leaf-shaped Green Container matching mockup */}
        <div
          className="bg-gradient-to-b from-[#064016] to-[#04280d] text-white p-8 md:p-14 shadow-2xl overflow-hidden"
          style={{ borderRadius: '0 36px 0 36px' }}
        >
          {/* Top Call To Action Section inside leaf container */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              {t("home.ctaTitle")}
            </h2>
            <p className="mt-3 text-white/80 text-sm md:text-base leading-relaxed">
              {t("home.ctaSub")}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/60 text-white px-6 py-2.5 font-semibold text-sm hover:bg-white hover:text-[#064016] transition-all"
                style={{ borderRadius: '0 14px 0 14px' }}
                data-testid="footer-cta-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0E6E19] text-white px-6 py-2.5 font-semibold text-sm hover:bg-[#43B14B] transition-all shadow-md"
                style={{ borderRadius: '0 14px 0 14px' }}
                data-testid="footer-cta-contact"
              >
                {t("nav.contactUs")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="border-t border-white/15 my-8" />

          {/* Footer Grid matching mockup */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              {/* Logo lockup */}
              <div className="flex items-center mb-4">
                <img src="/logo-full-white.png" alt="Prima Agro Tech" className="h-10 md:h-11 w-auto object-contain" />
              </div>
              <p className="text-white/75 max-w-md text-sm leading-relaxed">
                Indonesian native microbial bio-solutions, developed end-to-end in-house since 2008.
              </p>
              <div className="flex items-center gap-3 mt-6">
                {[
                  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 border border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors"
                    style={{ borderRadius: '0 10px 0 10px' }}
                    data-testid={`footer-social-${label.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">{t("footer.explore")}</h4>
              <ul className="space-y-2.5 text-white/75 text-sm font-medium">
                <li><Link to="/solutions" className="hover:text-white transition-colors">{t("nav.solutions")}</Link></li>
                <li><Link to="/about/oursciences" className="hover:text-white transition-colors">{t("nav.oursciences")}</Link></li>
                <li><Link to="/about/facilities" className="hover:text-white transition-colors">{t("nav.facilities")}</Link></li>
                <li><Link to="/about/sustainability" className="hover:text-white transition-colors">{t("nav.sustainability")}</Link></li>
                <li><Link to="/about/testimonials" className="hover:text-white transition-colors">{t("nav.testimonials")}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">{t("footer.company")}</h4>
              <ul className="space-y-3 text-white/75 text-sm font-medium">
                <li className="flex gap-2"><MapPin className="w-4 h-4 shrink-0 mt-0.5 text-white/60" /> Penjaringan, Jakarta · Karawaci, Tangerang</li>
                <li className="flex gap-2"><Mail className="w-4 h-4 shrink-0 mt-0.5 text-white/60" /> secretary@primaagrotech.com</li>
                <li><Link to="/about/career" className="hover:text-white transition-colors">{t("nav.career")}</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">{t("nav.contact")}</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/15 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-white/50 text-xs">
            <span>© {year} Prima Agro Tech. {t("common.allRightsReserved")}</span>
            <span>{t("footer.tagline")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
