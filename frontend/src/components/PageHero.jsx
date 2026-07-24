import React from "react";
import { motion } from "framer-motion";
import { MaskedLines, MicrobeDots } from "../lib/motion";

export default function PageHero({ eyebrow, title, intro, image }) {
  return (
    <section className="relative pt-[72px] bg-[#1C3A1F] overflow-hidden" data-testid="page-hero">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C3A1F] via-[#1C3A1F]/85 to-[#1C3A1F]/55" />
        </div>
      )}
      <MicrobeDots count={14} />
      <div className="container-pat relative py-20 md:py-28">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="eyebrow !text-[#43B14B] mb-5"
        >
          {eyebrow}
        </motion.span>
        <MaskedLines
          as="h1"
          className="text-white font-extrabold tracking-tight leading-[1.02] text-4xl md:text-6xl max-w-4xl"
          lines={Array.isArray(title) ? title : [title]}
          delay={0.15}
        />
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 text-white/70 text-lg max-w-2xl leading-relaxed"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
