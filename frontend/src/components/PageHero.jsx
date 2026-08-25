import React from "react";
import { motion } from "framer-motion";
import { MaskedLines, MicrobeDots } from "../lib/motion";

export default function PageHero({ eyebrow, title, intro, image }) {
  return (
    <section className="relative pt-24 bg-[#064016] overflow-hidden" data-testid="page-hero">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#064016] via-[#064016]/85 to-[#064016]/55" />
        </div>
      )}
      <MicrobeDots count={14} />
      <div className="container-pat relative py-16 md:py-24">
        <MaskedLines
          as="h1"
          className="text-white font-extrabold tracking-tight leading-[1.18] text-4xl md:text-6xl max-w-4xl"
          lines={Array.isArray(title) ? title : [title]}
          delay={0.15}
        />
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 text-white/80 text-base md:text-lg max-w-2xl leading-relaxed font-normal"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}

