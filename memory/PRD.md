# PT. Prima Agro Tech — Website Rebuild (PRD)

## Problem statement
Rebuild primaagrotech.com as a professional multinational corporate site (Koppert.com-inspired),
for an Indonesian agriculture company specializing in microbial bio-solutions. Accessed by large
vendors, plantations, dealers and agronomists. Follow the client's locked Visualization Brief
(palette, Poppins, "colour where it matters", microbe-dot motif, real photography) and Content Plan.

## Users
- Distributors/dealers scanning the range
- Plantation evaluators / agronomists (technical credibility, compliance/ESG)
- Farmers looking for a specific crop/problem fix
- Big vendors evaluating the company

## Design (locked by brief)
- Palette: Forest #1C3A1F, Leaf #2D6A35, Microbe Green #43B14B, Spore Yellow #F5C842, Amber #E8A500;
  neutrals Paper White, Off-White #F7F6F2, Near Black #1A1A1A, Slate #5C5C5C.
- Poppins single family. Microbe-dot motif for accents. ~65% whitespace.
- Motion: framer-motion + lenis smooth scroll, masked hero reveal, parallax, marquee, stat counters.

## Stack
FastAPI + MongoDB + React (CRA/craco). Emergent-managed Resend for form emails.

## Implemented (2026-07-24)
- Global: sticky forest navbar with Solutions/About dropdowns, ID/EN language toggle (full i18n
  EN+ID), fixed WhatsApp FAB, footer with marquee + socials.
- Home: kinetic masked hero + parallax + microbe dots, animated trust-bar stats + 5 certifications,
  3 solution category cards, "Discovery to Field" 3-step teaser, testimonials carousel (seed + API),
  dark CTA strip.
- Solutions hub: search + type filter (5) + crop filter (12), product grid, catalogue CTA.
- 5 category grid pages (bio-fertilizers, bio-insecticides, bio-fungicides, biostimulant-nutrition,
  soil-remediation).
- Product detail: split header, what-it-does, formulation/application/trial tables, certs sidebar,
  downloads, related products, product-specific WhatsApp CTA. 7 sample products.
- About: Three Pillars, journey timeline, mission/vision, reach stats.
- Our Sciences: 6-stage numbered manifesto w/ scroll progress rail + marquee + closing CTA.
- Facilities, Sustainability, Career (photography-led), Testimonials (video cards + grid + submit
  form), Contact (form + info + socials).
- Backend: POST /api/contact, POST/GET /api/testimonials, all store in Mongo + send Resend email.

## Notes / placeholders
- Product technical specs, trial data, registration numbers are REPRESENTATIVE PLACEHOLDERS
  (client to supply real data). Images are professional stock placeholders (client to supply real
  photography). Catalogue/brochure PDFs = "coming soon". Video embeds = placeholder.

## Backlog / next
- P1: Real product database (40+), real photography, catalogue PDF, Cerita Tani video embeds.
- P1: Admin view/approval for testimonials & contact submissions.
- P2: Individual microbe pages (6 strains) for SEO depth (deferred per user).
- P2: Per-page pre-filled WhatsApp messages refinement; sourced sustainability statistics.
