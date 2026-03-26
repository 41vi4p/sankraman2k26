"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { animate, stagger } from "animejs";
import ScrambleText from "@/components/ui/ScrambleText";

const prizes = [
  {
    title: "WINNER",
    amount: "₹15,000",
    amountIsText: false,
    icon: "🥇",
    desc: "For the top team showcasing unparalleled innovation.",
  },
  {
    title: "RUNNER-UP",
    amount: "₹10,000",
    amountIsText: false,
    icon: "🥈",
    desc: "For the team with outstanding technical execution.",
  },
  {
    title: "PARTICIPANTS",
    amount: "CERTIFICATES",
    amountIsText: true,
    icon: "🎖",
    desc: "For all shortlisted teams who present at the finals.",
  },
];

export default function PrizesSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll<HTMLElement>(".prize-card"));

    // Start invisible
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(40px) scale(0.94)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          animate(cards, {
            opacity: [0, 1],
            translateY: [40, 0],
            scale: [0.94, 1],
            delay: stagger(130),
            duration: 700,
            ease: "outExpo",
          });
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="prizes"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Dark Glassmorphism Background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/80" />

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
            COMPETE. INNOVATE. WIN.
          </div>

          <ScrambleText
            text="PRIZES & REWARDS"
            tag="h2"
            className="dune-heading text-[#ffedd5] drop-shadow-[0_0_30px_rgba(255,166,0,0.6)] mb-6"
            style={{
              fontFamily: "'Dune Rise', sans-serif",
              fontSize: "clamp(1.4rem, 5vw, 3rem)",
              letterSpacing: "0.07em",
            }}
            threshold={0.4}
          />

          <p className="text-base md:text-xl text-[#ffedd5]/90 leading-relaxed tracking-wide max-w-2xl mx-auto drop-shadow-sm">
            PRAKALP rewards innovation and technical excellence across both
            hardware and software categories.
          </p>
        </div>

        {/* Prizes Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {prizes.map((prize, index) => (
            <div key={index} className="prize-card group relative min-w-0">
              <div className="relative border border-[#ff6600]/30 bg-black/50 backdrop-blur-md p-8 md:p-10 rounded-xl hover:-translate-y-3 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(255,102,0,0.5)] transition-all duration-500 text-center min-w-0 overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#ff6600] opacity-70 pointer-events-none" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#ff6600] opacity-70 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#ff6600] opacity-70 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#ff6600] opacity-70 pointer-events-none" />

                {/* Icon */}
                <div className="text-5xl mb-6">{prize.icon}</div>

                {/* Title */}
                <div
                  className="font-black tracking-[0.3em] text-[#ff6600] uppercase mb-3 drop-shadow-sm"
                  style={{ fontSize: "clamp(0.55rem, 1.4vw, 0.75rem)" }}
                >
                  {prize.title}
                </div>

                {/*
                  Prize amount — "CERTIFICATES" uses a smaller clamped size so it
                  never escapes the card boundary. Monetary values stay larger.
                */}
                <h3
                  className="dune-heading text-[#ffedd5] mb-4 group-hover:text-[#ffaa00] transition-colors drop-shadow-[0_0_20px_rgba(255,102,0,0.5)]"
                  style={{
                    fontFamily: "'Dune Rise', sans-serif",
                    /*
                      Text-only prizes (like CERTIFICATES) are long words in a
                      wide-tracked font — cap them more aggressively.
                      Money values can be a bit larger.
                    */
                    fontSize: prize.amountIsText
                      ? "clamp(0.85rem, 2.4vw, 1.4rem)"
                      : "clamp(1.2rem, 3.5vw, 1.9rem)",
                    letterSpacing: prize.amountIsText ? "0.04em" : "0.06em",
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                    maxWidth: "100%",
                  }}
                >
                  {prize.amount}
                </h3>

                {/* Description */}
                <p className="text-[#ffedd5]/80 text-sm leading-relaxed tracking-wide">
                  {prize.desc}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6600]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 pointer-events-none" />
    </div>
  );
}
