"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { animate, stagger } from "animejs";
import ScrambleText from "@/components/ui/ScrambleText";

const councils = [
  {
    name: "WIE",
    fullName: "Women in Engineering",
    description: "Empowering the next generation of female engineers",
  },
  {
    name: "PROJECT CELL",
    fullName: "Innovation Hub",
    description: "Transforming ideas into technological reality",
  },
  {
    name: "IEEE",
    fullName: "Institute of Electrical & Electronics Engineers",
    description: "Advancing technology for humanity",
  },
];

export default function CouncilsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(
      grid.querySelectorAll<HTMLElement>(".council-card"),
    );

    // Start invisible
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(36px) scale(0.95)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          animate(cards, {
            opacity: [0, 1],
            translateY: [36, 0],
            scale: [0.95, 1],
            delay: stagger(120),
            duration: 680,
            ease: "outExpo",
          });
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="councils"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Dark Glassmorphism Background */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/35 to-black/65" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-[0.55rem] md:text-xs font-black tracking-[0.4em] text-[#ff6600] uppercase mb-8 mix-blend-screen opacity-90">
            THE ALLIANCE
          </div>

          <ScrambleText
            text="COUNCILS OF POWER"
            tag="h2"
            className="dune-heading text-[#ffedd5] drop-shadow-[0_0_30px_rgba(255,166,0,0.6)]"
            style={{
              fontFamily: "'Dune Rise', sans-serif",
              fontSize: "clamp(1.4rem, 5vw, 3rem)",
              letterSpacing: "0.07em",
            }}
            threshold={0.4}
          />
        </div>

        {/* Councils Grid */}
        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {councils.map((council, index) => (
            <div key={index} className="council-card group min-w-0">
              <div className="relative border border-[#ff6600]/30 bg-black/50 backdrop-blur-md p-6 md:p-8 rounded-lg hover:border-[#ff6600]/60 hover:bg-black/60 transition-all duration-500 min-w-0 overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#ff6600] opacity-70 pointer-events-none" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#ff6600] opacity-70 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#ff6600] opacity-70 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#ff6600] opacity-70 pointer-events-none" />

                {/* Content */}
                <div className="text-center relative z-10 min-w-0">
                  {/*
                    Council name: clamp font-size so long names like
                    "PROJECT CELL" never overflow the card width.
                    tracking is kept conservative to avoid blowout.
                  */}
                  <h3
                    className="dune-heading text-[#ff6600] mb-3 group-hover:text-[#ffaa00] transition-colors drop-shadow-[0_0_25px_rgba(255,102,0,0.7)]"
                    style={{
                      fontFamily: "'Dune Rise', sans-serif",
                      fontSize: "clamp(0.95rem, 2.8vw, 1.5rem)",
                      letterSpacing: "0.04em",
                      overflowWrap: "break-word",
                      wordBreak: "break-word",
                      maxWidth: "100%",
                    }}
                  >
                    {council.name}
                  </h3>

                  <div
                    className="font-black text-[#ffedd5]/80 uppercase mb-4 drop-shadow-sm"
                    style={{
                      fontSize: "clamp(0.5rem, 1.2vw, 0.7rem)",
                      letterSpacing: "0.18em",
                      overflowWrap: "break-word",
                    }}
                  >
                    {council.fullName}
                  </div>

                  <p className="text-[#ffedd5]/90 leading-relaxed tracking-wide drop-shadow-sm text-sm md:text-base">
                    {council.description}
                  </p>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6600]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />
                <div className="absolute inset-0 rounded-lg shadow-inner shadow-[#ff6600]/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 pointer-events-none" />
    </div>
  );
}
