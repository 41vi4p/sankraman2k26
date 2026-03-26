"use client";

import { motion } from "framer-motion";
import ScrambleText from "@/components/ui/ScrambleText";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { prefix: "", number: 48, suffix: "", label: "HOURS OF\nINNOVATION" },
  { prefix: "", number: 500, suffix: "+", label: "PARTICIPANTS" },
  { prefix: "", number: 25, suffix: "+", label: "WORKSHOPS" },
  { prefix: "₹", number: 50, suffix: "K+", label: "PRIZE POOL" },
];

export default function AboutSection() {
  return (
    <div
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Dark Glassmorphism Background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center w-full"
      >
        {/* Section Label */}
        <div className="text-[0.55rem] md:text-xs font-black tracking-[0.4em] text-[#ff6600] uppercase mb-8 mix-blend-screen opacity-90">
          ABOUT THE EVENT
        </div>

        {/* Main Heading — scrambles into view */}
        <ScrambleText
          text="WHAT IS PRAKALP?"
          tag="h2"
          className="dune-heading mb-12 text-[#ffedd5] drop-shadow-[0_0_30px_rgba(255,166,0,0.6)]"
          style={{
            fontFamily: "'Dune Rise', sans-serif",
            fontSize: "clamp(1.3rem, 4.5vw, 2.8rem)",
            letterSpacing: "0.07em",
          }}
          threshold={0.4}
        />

        {/* Description */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          <p className="text-base md:text-xl text-[#ffedd5]/95 leading-relaxed tracking-wide drop-shadow-sm">
            PRAKALP is a national-level project competition organised by
            IEEE-WIE and Project Cell, CRCE. It brings together 80+ shortlisted
            teams from across India to present innovative hardware and software
            projects before industry and academic experts.
          </p>
          <p className="text-base md:text-xl text-[#ffedd5]/90 leading-relaxed tracking-wide drop-shadow-sm">
            Built around the theme &ldquo;Sankraman&rdquo; — from idea to
            impact, PRAKALP focuses on real-world problem-solving, technical
            excellence, and innovation that creates meaningful change.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="text-center p-4 md:p-6 rounded-lg bg-black/20 backdrop-blur-sm border border-[#ff6600]/20 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_15px_30px_-10px_rgba(255,102,0,0.5)] transition-all duration-500 min-w-0"
            >
              {/* Number row */}
              <div className="flex items-baseline justify-center gap-0.5 text-[#ff6600] drop-shadow-[0_0_20px_rgba(255,102,0,0.7)] flex-wrap">
                {stat.prefix && (
                  <span className="text-xl md:text-3xl font-black shrink-0">
                    {stat.prefix}
                  </span>
                )}
                <CountUp
                  target={stat.number}
                  duration={1800}
                  className="stat-shimmer font-black"
                  style={{
                    fontFamily: "'Dune Rise', sans-serif",
                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  }}
                />
                {stat.suffix && (
                  <span className="text-xl md:text-3xl font-black shrink-0">
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              <div className="text-[0.5rem] md:text-[0.65rem] font-black tracking-[0.25em] text-[#ffedd5]/80 uppercase mt-2 whitespace-pre-line leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
    </div>
  );
}
