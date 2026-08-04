import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLang } from "../lib/i18n";
import { CATEGORY_PAGES } from "../data/content";

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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1C3A1F] shadow-lg" : "bg-[#1C3A1F]/95 backdrop-blur-sm"
      }`}
      data-testid="main-navbar"
    >
      <nav className="container-pat flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" data-testid="nav-logo">
          <span className="relative flex items-center justify-center w-10 h-10">
            <span className="absolute w-10 h-10 rounded-full border-2 border-[#43B14B]" />
            <span className="w-3 h-3 rounded-full bg-[#43B14B] group-hover:scale-125 transition-transform" />
            <span className="absolute w-1.5 h-1.5 rounded-full bg-[#F5C842] top-1 right-1" />
          </span>
          <span className="text-white leading-none">
            <span className="block font-extrabold text-base tracking-tight">PRIMA AGRO TECH</span>
            <span className="block text-[10px] text-[#43B14B] tracking-[0.25em] uppercase">Microbial Bio-Solutions</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          <NavItem to="/" active={isActive("/")}>{t("nav.home")}</NavItem>

          {/* Solutions dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("solutions")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/85 hover:text-[#43B14B] transition-colors"
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
                  className="absolute top-full left-0 pt-3"
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-[#5C5C5C]/10 p-2 w-64">
                    {SOL_LINKS.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/solutions/${s.slug}`}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-[#1A1A1A] hover:bg-[#F7F6F2] hover:text-[#2D6A35] transition-colors"
                        data-testid={`nav-sol-${s.slug}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#43B14B]" />
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
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/85 hover:text-[#43B14B] transition-colors"
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
                  className="absolute top-full left-0 pt-3"
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-[#5C5C5C]/10 p-2 w-56">
                    {aboutLinks.map((a) => (
                      <Link
                        key={a.path}
                        to={a.path}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-[#1A1A1A] hover:bg-[#F7F6F2] hover:text-[#2D6A35] transition-colors"
                        data-testid={`nav-about-${a.path.split("/").pop()}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5C842]" />
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
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-white/85 hover:text-[#43B14B] text-sm font-semibold transition-colors"
            data-testid="lang-toggle"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            <span className={lang === "en" ? "text-[#43B14B]" : ""}>EN</span>
            <span className="text-white/40">/</span>
            <span className={lang === "id" ? "text-[#43B14B]" : ""}>ID</span>
          </button>
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-sm" data-testid="nav-contact-btn">
            {t("nav.contactUs")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <button onClick={toggle} className="text-white text-sm font-semibold" data-testid="lang-toggle-mobile">
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="text-white p-1"
            data-testid="mobile-menu-btn"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden overflow-hidden bg-[#1C3A1F] border-t border-white/10"
            data-testid="mobile-menu"
          >
            <div className="container-pat py-4 flex flex-col gap-1">
              <MobileLink to="/">{t("nav.home")}</MobileLink>
              <MobileLink to="/solutions">{t("nav.solutions")}</MobileLink>
              {SOL_LINKS.map((s) => (
                <MobileLink key={s.slug} to={`/solutions/${s.slug}`} sub>{s.label}</MobileLink>
              ))}
              {aboutLinks.map((a) => (
                <MobileLink key={a.path} to={a.path}>{a.label}</MobileLink>
              ))}
              <MobileLink to="/contact">{t("nav.contact")}</MobileLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`px-4 py-2 text-sm font-medium transition-colors ${
        active ? "text-[#43B14B]" : "text-white/85 hover:text-[#43B14B]"
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
      className={`py-2.5 text-white/90 hover:text-[#43B14B] transition-colors ${
        sub ? "pl-4 text-sm text-white/60" : "font-medium"
      }`}
    >
      {children}
    </Link>
  );
}
