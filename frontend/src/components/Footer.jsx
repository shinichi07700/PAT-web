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
    <footer className="w-full relative overflow-hidden bg-white" data-testid="footer">
      {/* Running Marquee Text - Green background */}
      <div className="bg-[#064016] border-t border-b border-white/10 overflow-hidden">
        <Marquee
          text="GROW MORE · HARM LESS · WITH MICROBES ·"
          className="py-5 text-white/25 font-extrabold text-4xl md:text-6xl tracking-tight"
          duration={30}
        />
      </div>

      {/* Full Page Combined CTA + Footer Green Section */}
      <div
        className="w-full bg-gradient-to-b from-[#064016] via-[#053312] to-[#031c09] text-white shadow-2xl overflow-hidden"
      >
        <div className="container-pat pt-16 md:pt-20 pb-12">
          {/* Top Call To Action Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              {t("home.ctaTitle")}
            </h2>
            <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              {t("home.ctaSub")}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white px-7 py-3 font-semibold text-sm hover:bg-white hover:text-[#064016] transition-all"
                style={{ borderRadius: '0 14px 0 14px' }}
                data-testid="footer-cta-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0E6E19] text-white px-7 py-3 font-semibold text-sm hover:bg-[#43B14B] transition-all shadow-lg"
                style={{ borderRadius: '0 14px 0 14px' }}
                data-testid="footer-cta-contact"
              >
                {t("nav.contactUs")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="border-t border-white/15 my-12" />

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              {/* Logo lockup */}
              <div className="flex items-center mb-5">
                <img src="/logo-full-white.png" alt="Prima Agro Tech" className="h-11 md:h-12 w-auto object-contain" />
              </div>
              <p className="text-white/75 max-w-md text-sm leading-relaxed">
                Indonesian native microbial bio-solutions, developed end-to-end in-house since 2008.
              </p>
              <div className="flex items-center gap-3 mt-6">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61575486308292", label: "Facebook" },
                  { Icon: Instagram, href: "https://www.instagram.com/primaagrotech?igsh=YmRpOWJsYm94cnNj", label: "Instagram" },
                  { Icon: Youtube, href: "https://youtube.com/@sobatprimatani?si=98UEgcVkR6sNHWKR", label: "YouTube" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/primaagrotech", label: "LinkedIn" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors"
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
              <ul className="space-y-3 text-white/75 text-sm font-medium">
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

          <div className="border-t border-white/15 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-white/50 text-xs">
            <span>© {year} Prima Agro Tech. {t("common.allRightsReserved")}</span>
            <span>{t("footer.tagline")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
