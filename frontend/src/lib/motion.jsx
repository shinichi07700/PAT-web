import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform, animate } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

// Line-by-line masked reveal for headings
export function MaskedLines({ lines, className = "", delay = 0, as = "h1" }) {
  const Tag = motion[as];
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <span className="mask-line" key={i}>
          <Tag
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: delay + i * 0.12 }}
          >
            {line}
          </Tag>
        </span>
      ))}
    </div>
  );
}

// Generic scroll reveal
export function Reveal({ children, className = "", delay = 0, y = 40, once = true }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

// Staggered children container
export function StaggerGroup({ children, className = "", stagger = 0.1 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// Animated number counter
export function StatCounter({ value, suffix = "", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);
  const formatted = value >= 1000 ? display.toLocaleString() : display;
  return (
    <span ref={ref} className={className}>
      {formatted}
      {suffix}
    </span>
  );
}

// Parallax wrapper
export function Parallax({ children, className = "", distance = 80 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-distance / 2, distance / 2]);
  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

// Floating microbe dots motif
export function MicrobeDots({ count = 14, className = "" }) {
  const dots = React.useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: 4 + Math.random() * 14,
        top: Math.random() * 100,
        left: Math.random() * 100,
        color: Math.random() > 0.5 ? "#43B14B" : "#F5C842",
        dur: 5 + Math.random() * 6,
        delay: Math.random() * 3,
        opacity: 0.25 + Math.random() * 0.4,
      })),
    [count]
  );
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full"
          style={{
            width: d.size,
            height: d.size,
            top: `${d.top}%`,
            left: `${d.left}%`,
            background: d.color,
            opacity: d.opacity,
          }}
          animate={{ y: [0, -22, 0], x: [0, 10, 0] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

// Slow editorial marquee
export function Marquee({ text, className = "", duration = 26 }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((k) => (
          <span key={k} className="inline-block pr-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="pr-8">{text}</span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
