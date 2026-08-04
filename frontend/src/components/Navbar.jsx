import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLang } from "../lib/i18n";

const SOL_LINKS = [
  { slug: "bio-fertilizers", label: "Bio Fertilizers" },
  { slug: "bio-insecticides", label: "Bio Insecticides" },
  { slug: "bio-fungicides", label: "Bio Fungicides" },
  { slug: "biostimulant-nutrition", label: "Bio-Stimulant & Nutrition" },
  { slug: "soil-remediation", label: "Soil Remediation" },
];

export default function Navbar() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const aboutLinks = [
    { path: "/about", label: t("nav.about") },
    { path: "/about/oursciences", label: t("nav.oursciences") },
    { path: "/about/facilities", label: t("nav.facilities") },
    { path: "/about/sustainability", label: t("nav.sustainability") },
    { path: "/about/testimonials", label: t("nav.testimonials") },
    { path: "/about/career", label: t("nav.career") },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 md:px-6 pointer-events-none" data-testid="main-navbar">
      <div
        className={`max-w-5xl mx-auto pointer-events-auto transition-all duration-300 bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-100/80 ${
          scrolled ? "shadow-xl border-gray-200" : ""
        }`}
      >
        <nav className="flex items-center justify-between h-[64px] px-5 md:px-7">
          {/* Logo - Official emblem + Wordmark */}
          <Link to="/" className="flex items-center gap-2.5 group" data-testid="nav-logo">
            <img src="/logo.png" alt="Prima Agro Tech" className="w-8 h-8 object-contain group-hover:scale-105 transition-transform" />
            <span className="font-extrabold text-sm md:text-base text-[#111827] tracking-tight">
              PRIMA AGRO TECH
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <NavItem to="/" active={isActive("/")}>{t("nav.home")}</NavItem>

            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("solutions")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-[#111827]/80 hover:text-[#0E6E19] transition-colors"
                data-testid="nav-solutions-trigger"
                onClick={() => navigate("/solutions")}
              >
                {t("nav.solutions")} <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {openMenu === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 w-60">
                      {SOL_LINKS.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/solutions/${s.slug}`}
                          className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-[#111827] hover:bg-[#F3F1EC] hover:text-[#0E6E19] transition-colors"
                          data-testid={`nav-sol-${s.slug}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0E6E19]" />
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("about")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-[#111827]/80 hover:text-[#0E6E19] transition-colors"
                data-testid="nav-about-trigger"
                onClick={() => navigate("/about")}
              >
                {t("nav.about")} <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {openMenu === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 w-52">
                      {aboutLinks.map((a) => (
                        <Link
                          key={a.path}
                          to={a.path}
                          className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-[#111827] hover:bg-[#F3F1EC] hover:text-[#0E6E19] transition-colors"
                          data-testid={`nav-about-${a.path.split("/").pop()}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0E6E19]" />
                          {a.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggle}
              className="flex items-center gap-1 text-[#111827]/70 hover:text-[#0E6E19] text-xs font-bold transition-colors px-2 py-1"
              data-testid="lang-toggle"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className={lang === "en" ? "text-[#0E6E19]" : ""}>EN</span>
              <span className="text-gray-300">/</span>
              <span className={lang === "id" ? "text-[#0E6E19]" : ""}>ID</span>
            </button>
            <Link to="/contact" className="btn-pill-green !py-2 !px-5 text-sm" data-testid="nav-contact-btn">
              {t("nav.contactUs")}
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={toggle} className="text-[#111827] text-xs font-bold px-2 py-1" data-testid="lang-toggle-mobile">
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="text-[#111827] p-1"
              data-testid="mobile-menu-btn"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white rounded-b-3xl border-t border-gray-100"
              data-testid="mobile-menu"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                <MobileLink to="/">{t("nav.home")}</MobileLink>
                <MobileLink to="/solutions">{t("nav.solutions")}</MobileLink>
                {SOL_LINKS.map((s) => (
                  <MobileLink key={s.slug} to={`/solutions/${s.slug}`} sub>{s.label}</MobileLink>
                ))}
                {aboutLinks.map((a) => (
                  <MobileLink key={a.path} to={a.path}>{a.label}</MobileLink>
                ))}
                <MobileLink to="/contact">{t("nav.contact")}</MobileLink>
                <div className="pt-2">
                  <Link to="/contact" className="btn-pill-green w-full text-center !py-2 text-sm">
                    {t("nav.contactUs")}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function NavItem({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`px-3.5 py-2 text-sm font-semibold transition-colors ${
        active ? "text-[#0E6E19]" : "text-[#111827]/80 hover:text-[#0E6E19]"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children, sub }) {
  return (
    <Link
      to={to}
      className={`py-2 text-[#111827] hover:text-[#0E6E19] transition-colors ${
        sub ? "pl-4 text-xs text-[#4B5563]" : "font-semibold text-sm"
      }`}
    >
      {children}
    </Link>
  );
}

