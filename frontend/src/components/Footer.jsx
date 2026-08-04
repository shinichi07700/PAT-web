import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin, MapPin, Mail } from "lucide-react";
import { useLang } from "../lib/i18n";
import { Marquee } from "../lib/motion";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1C3A1F] text-white relative overflow-hidden" data-testid="footer">
      <Marquee
        text="GROW MORE · HARM LESS · WITH MICROBES ·"
        className="py-6 border-y border-white/10 text-white/10 font-extrabold text-4xl md:text-6xl tracking-tight"
        duration={30}
      />
      <div className="container-pat py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <span className="relative flex items-center justify-center w-10 h-10">
              <span className="absolute w-10 h-10 rounded-full border-2 border-[#43B14B]" />
              <span className="w-3 h-3 rounded-full bg-[#43B14B]" />
            </span>
            <span className="font-extrabold text-lg tracking-tight">PT. PRIMA AGRO TECH</span>
          </div>
          <p className="text-white/60 max-w-md leading-relaxed">{t("footer.legal")}</p>
          <div className="flex items-center gap-3 mt-6">
            {[
              { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#43B14B] hover:text-[#43B14B] transition-colors"
                data-testid={`footer-social-${label.toLowerCase()}`}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[#43B14B] font-semibold text-sm uppercase tracking-wider mb-4">{t("footer.explore")}</h4>
          <ul className="space-y-2.5 text-white/70 text-sm">
            <li><Link to="/solutions" className="hover:text-[#43B14B] transition-colors">{t("nav.solutions")}</Link></li>
            <li><Link to="/about/oursciences" className="hover:text-[#43B14B] transition-colors">{t("nav.oursciences")}</Link></li>
            <li><Link to="/about/facilities" className="hover:text-[#43B14B] transition-colors">{t("nav.facilities")}</Link></li>
            <li><Link to="/about/sustainability" className="hover:text-[#43B14B] transition-colors">{t("nav.sustainability")}</Link></li>
            <li><Link to="/about/testimonials" className="hover:text-[#43B14B] transition-colors">{t("nav.testimonials")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#43B14B] font-semibold text-sm uppercase tracking-wider mb-4">{t("footer.company")}</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="flex gap-2"><MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#43B14B]" /> Penjaringan, Jakarta · Karawaci, Tangerang</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 shrink-0 mt-0.5 text-[#43B14B]" /> secretary@primaagrotech.com</li>
            <li><Link to="/about/career" className="hover:text-[#43B14B] transition-colors">{t("nav.career")}</Link></li>
            <li><Link to="/contact" className="hover:text-[#43B14B] transition-colors">{t("nav.contact")}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-pat py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-white/40 text-xs">
          <span>© {year} PT. Prima Agro Tech. {t("common.allRightsReserved")}</span>
          <span>{t("footer.tagline")}</span>
        </div>
      </div>
    </footer>
  );
}
